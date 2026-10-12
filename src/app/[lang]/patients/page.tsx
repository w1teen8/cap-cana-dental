import type { Metadata } from "next";
import { alternates, getContent } from "@/content";
import { PageHeroCentered } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { Reveal } from "@/components/ui";
import { Icon } from "@/components/icons";
import Faq from "@/components/faq";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getContent();
  return { title: t.patientsPage.metaTitle, alternates: alternates("/patients") };
}

export default async function PatientsPage() {
  const { t } = await getContent();
  const p = t.patientsPage;

  return (
    <>
      <PageHeroCentered eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* first visit, four steps */}
      <section className="bg-white section lg:!pb-[120px] lg:!pt-[126px]">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-accent">{p.stepsEyebrow}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
              {p.stepsTitle}
            </h2>
          </Reveal>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="h-full rounded-[20px] bg-cream p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent">
                    <Icon name={s.icon} />
                  </span>
                  <p className="eyebrow mt-6 text-muted">
                    {p.stepLabel} {i + 1}
                  </p>
                  <h3 className="mt-3 text-d6 text-ink">{s.title}</h3>
                  <p className="mt-3 text-base2 text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* insurance & pricing */}
      <section className="bg-mist section lg:!pb-[127px] lg:!pt-[120px]">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_736px] lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-accent">{p.pricingEyebrow}</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 max-w-[24rem] text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
                {p.pricingTitle}
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 max-w-[24rem] text-base2 text-muted">
                {p.pricingLead}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <dl className="rounded-[22px] bg-white px-8 py-3">
              {p.prices.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between gap-6 border-b border-rule py-[18px] last:border-0"
                >
                  <dt className="text-base2 text-ink">{row.item}</dt>
                  <dd className="shrink-0 text-small font-semibold text-accent">
                    {row.price}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
