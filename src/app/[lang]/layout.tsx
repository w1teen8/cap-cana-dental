import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getContent, hasLocale, locales } from "@/content";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Both languages are prerendered. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getContent();
  const title = `${t.clinic.name} — ${t.clinic.tagline}`;
  return {
    title: { default: title, template: `%s — ${t.clinic.name}` },
    description: t.clinic.description,
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      title,
      description: t.clinic.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.clinic.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { t } = await getContent();

  return (
    <html
      lang={lang}
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Reveal starts hidden and is shown by script; without script, show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteHeader
          lang={lang}
          clinicName={t.clinic.name}
          phone={t.clinic.phone}
          phoneHref={t.clinic.phoneHref}
          nav={t.nav}
          labels={{
            book: t.ui.book,
            openMenu: t.ui.openMenu,
            closeMenu: t.ui.closeMenu,
            switchLanguage: t.ui.switchLanguage,
            home: t.ui.home,
          }}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
