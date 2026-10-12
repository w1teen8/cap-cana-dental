import { getContent } from "@/content";
import { ArrowRight } from "./icons";
import { Reveal } from "./ui";
import FaqAccordion from "./faq-accordion";

export default async function Faq() {
  const { t } = await getContent();

  return (
    <section className="bg-white section lg:!pb-[110px]">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_736px] lg:gap-12">
        <div>
          <Reveal>
            <p className="eyebrow text-accent">{t.home.faqEyebrow}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
              {t.home.faqTitle[0]}
              <br className="hidden sm:block" /> {t.home.faqTitle[1]}
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 max-w-sm text-base2 text-muted">
              {t.home.faqLead}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={t.clinic.phoneHref}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-rule bg-white px-6 py-4 text-small font-semibold text-ink transition-colors duration-200 hover:border-ink"
            >
              {t.ui.call} {t.clinic.phone}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <FaqAccordion items={t.faq} />
        </Reveal>
      </div>
    </section>
  );
}
