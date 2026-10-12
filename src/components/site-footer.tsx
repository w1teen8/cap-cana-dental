import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/content";

export default async function SiteFooter() {
  const { t, href } = await getContent();
  const { clinic, footer } = t;

  return (
    <footer className="bg-ink text-white">
      {/* reference padding: 96/40/32 desktop, 80/32/28 tablet, 64/20/24 mobile */}
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-6 pt-16 md:px-8 md:pb-7 md:pt-20 lg:px-10 lg:pb-8 lg:pt-24">
        <div className="flex flex-col gap-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link href={href("/")} aria-label={clinic.name}>
                <Image
                  src="/img/logo-capcana.png"
                  alt={clinic.name}
                  width={480}
                  height={236}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="max-w-[16rem] text-base2 text-white/60">
                {clinic.footerBlurb}
              </p>
            </div>

            <FooterCol
              title={footer.treatmentsTitle}
              links={footer.treatments.map((l) => ({ ...l, href: href(l.href) }))}
            />
            <FooterCol
              title={footer.clinicTitle}
              links={footer.clinic.map((l) => ({ ...l, href: href(l.href) }))}
            />

            <div className="flex flex-col gap-3">
              <p className="eyebrow text-white/50">{footer.visitTitle}</p>
              <p className="text-base2 text-white/60">{clinic.address}</p>
              <a
                href={clinic.phoneHref}
                className="text-base2 text-white/60 transition-colors duration-200 hover:text-white"
              >
                {clinic.phone}
              </a>
              <a
                href={`mailto:${clinic.email}`}
                className="text-base2 text-white/60 transition-colors duration-200 hover:text-white"
              >
                {clinic.email}
              </a>
              <p className="text-base2 text-white/60">{clinic.hours}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-rule-dark pt-6 text-tiny text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>{clinic.copyright}</p>
            <p>{clinic.footerNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow text-white/50">{title}</p>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="text-base2 text-white/60 transition-colors duration-200 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-white"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
