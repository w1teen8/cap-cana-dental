"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "./icons";
import { asset } from "@/lib/asset";

type Props = {
  lang: "es" | "en";
  clinicName: string;
  phone: string;
  phoneHref: string;
  nav: { label: string; href: string }[];
  labels: {
    book: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    home: string;
  };
};

const LANGS = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
] as const;

/** ES | EN pill. Each option links to the same page in that language. */
function LanguageSwitch({
  lang,
  pathname,
  label,
}: {
  lang: Props["lang"];
  pathname: string;
  label: string;
}) {
  // "/es/treatments/x" → "/treatments/x"
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-white/25 p-0.5"
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <Link
            key={l.code}
            href={`/${l.code}${rest}`}
            hrefLang={l.code}
            lang={l.code}
            aria-label={l.name}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 text-[12px] font-semibold leading-none tracking-[0.04em] transition-colors duration-200 ${
              active ? "bg-white text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function SiteHeader({
  lang,
  clinicName,
  phone,
  phoneHref,
  nav,
  labels,
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = `/${lang}`;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="flex h-[84px] w-full items-center justify-between gap-6 px-5 md:px-8 lg:px-10">
        <Link href={base} aria-label={`${clinicName} — ${labels.home}`} className="shrink-0">
          <Image
            src={asset("/img/logo-capcana.png")}
            alt={clinicName}
            width={480}
            height={236}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-[34px] lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(`${base}${item.href}`);
            return (
              <Link
                key={item.href}
                href={`${base}${item.href}`}
                aria-current={active ? "page" : undefined}
                className={`text-small font-semibold transition-colors duration-200 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-white ${
                  active ? "text-accent-soft" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 lg:gap-[22px]">
          <LanguageSwitch
            lang={lang}
            pathname={pathname}
            label={labels.switchLanguage}
          />

          <a
            href={phoneHref}
            className="hidden items-center gap-2 text-small font-semibold text-white/90 transition-colors duration-200 hover:text-white lg:flex"
          >
            <Phone className="h-[18px] w-[18px] text-accent-soft" />
            {phone}
          </a>

          <Link
            href={`${base}/book`}
            className="group hidden items-center gap-2.5 rounded-full bg-white px-6 py-4 text-small font-semibold text-primary transition-colors duration-200 hover:bg-cream md:inline-flex"
          >
            {labels.book}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? labels.closeMenu : labels.openMenu}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] text-white lg:hidden"
          >
            <span
              className={`block h-[1.6px] w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6.6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.6px] w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.6px] w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6.6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/15 bg-primary transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 md:px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`${base}${item.href}`}
              className="border-b border-white/15 py-4 text-body font-semibold text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="flex items-center gap-2 py-4 text-body font-semibold text-white"
          >
            <Phone className="h-[18px] w-[18px] text-accent-soft" />
            {phone}
          </a>
          <Link
            href={`${base}/book`}
            className="mt-3 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-4 text-small font-semibold text-primary"
          >
            {labels.book}
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
