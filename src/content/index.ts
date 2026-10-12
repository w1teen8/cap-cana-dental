import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { en, type Content } from "./en";
import { es } from "./es";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Content> = { es, en };

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Content for the locale of the current request, read from the root `[lang]` segment. */
export async function getContent() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  const t = dictionaries[locale];
  /** Prefix an internal path with the current locale. */
  const href = (path: string) => `/${locale}${path === "/" ? "" : path}`;
  return { t, locale, href };
}

/** hreflang links for a page: the same path in each language. */
export const alternates = (path = "") => ({
  languages: { es: `/es${path}`, en: `/en${path}`, "x-default": `/es${path}` },
});

export type { Content };
