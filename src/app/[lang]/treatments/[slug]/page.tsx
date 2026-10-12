import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alternates, getContent } from "@/content";
import { en } from "@/content/en";
import { Button, Reveal } from "@/components/ui";
import { CtaBand, OfferCard } from "@/components/sections";
import { ArrowLeft, Clock, Tag } from "@/components/icons";

/** Every slug comes from generateStaticParams, so the route may block
    instead of streaming a shell around the params read. */
export const instant = false;

/** Slugs are the same in both languages. */
export function generateStaticParams() {
  return en.treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { t } = await getContent();
  const tr = t.treatments.find((x) => x.slug === slug);
  return tr
    ? {
        title: tr.title,
        description: tr.excerpt,
        alternates: alternates(`/treatments/${slug}`),
      }
    : {};
}

export default async function TreatmentPage({
  params,
}: PageProps<"/[lang]/treatments/[slug]">) {
  const { slug } = await params;
  const { t, href } = await getContent();
  const tr = t.treatments.find((x) => x.slug === slug);
  if (!tr) notFound();

  return (
    <>
      <section className="bg-cream">
        <div className="shell grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16 lg:pb-20 lg:pt-[72px]">
          <div>
            <Reveal>
              <Link
                href={href("/treatments")}
                className="inline-flex items-center gap-2 text-small font-semibold text-ink transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4 text-accent" />
                {t.ui.backToTreatments}
              </Link>
            </Reveal>
            <Reveal delay={50}>
              <p className="eyebrow mt-5 text-accent">{tr.category}</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.03em] md:text-[3.625rem]">
                {tr.title}
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-5 max-w-[40rem] text-lead text-muted">
                {tr.excerpt}
              </p>
            </Reveal>
            <Reveal delay={170}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-small font-semibold text-ink">
                  <Tag className="h-4 w-4 text-accent" />
                  {tr.from}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-small font-semibold text-ink">
                  <Clock className="h-4 w-4 text-accent" />
                  {tr.duration}
                </span>
              </div>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-7">
                <Button href={href("/book")} variant="accent">
                  {t.ui.bookThis}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative aspect-square overflow-hidden rounded-[22px]">
              <Image
                src={tr.image}
                alt={tr.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section !pb-2.5">
        <div className="shell">
          <div className="mx-auto max-w-[760px]">
            <Reveal>
              <h2 className="text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
                {t.detail.expectTitle}
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-4 text-lead text-muted">
                {t.detail.intro(tr.title)}
              </p>
            </Reveal>
            {t.detail.blocks.map((b, i) => (
              <Reveal key={b.title} delay={100 + i * 50}>
                <h3 className="mt-6 text-d6 text-ink">{b.title}</h3>
                <p className="mt-4 text-lead text-muted">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OfferCard padBottom />
      <CtaBand />
    </>
  );
}
