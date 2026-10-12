import type { Metadata } from "next";
import Image from "next/image";
import { alternates, getContent } from "@/content";
import { PageHeroCentered, StatsRow } from "@/components/page-parts";
import { CtaBand, Team, WhyUs } from "@/components/sections";
import { Reveal } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getContent();
  return { title: t.aboutPage.metaTitle, alternates: alternates("/about") };
}

export default async function AboutPage() {
  const { t } = await getContent();
  const p = t.aboutPage;

  return (
    <>
      <PageHeroCentered eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* full-bleed clinic photograph */}
      <div className="relative h-[280px] w-full md:h-[420px] lg:h-[562px]">
        <Image
          src="/img/about-interior.jpg"
          alt={p.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="bg-white py-16 md:py-20 lg:pb-[112px] lg:pt-[120px]">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-20">
          <Reveal>
            <h2 className="max-w-[26rem] text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
              {p.storyTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {p.story.map((text, i) => (
              <Reveal key={i} delay={80 + i * 60}>
                <p className="text-lead text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <StatsRow stats={p.stats} />
      <Team />
      <CtaBand />
    </>
  );
}
