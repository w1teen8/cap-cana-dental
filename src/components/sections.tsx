import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/content";
import { Button, Reveal, SectionHead } from "./ui";
import { ArrowUpRight, Briefcase, Icon, Star } from "./icons";

/** Two-line heading: the break only applies from `sm` up. */
function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines[0]}
      <br className="hidden sm:block" /> {lines[1]}
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────── */

export async function Hero() {
  const { t, href } = await getContent();
  return (
    <section className="bg-cream">
      <div className="shell grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-20 lg:pb-24 lg:pt-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-tiny font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {t.home.badge}
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-7 text-[2.75rem] leading-[1.06] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.875rem]">
              {t.home.title}
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 max-w-lg text-lead text-muted">{t.home.lead}</p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={href("/book")} variant="accent">
                {t.ui.book}
              </Button>
              <Button href={href("/treatments")} variant="outline">
                {t.ui.ourTreatments}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-tiny font-medium text-muted">{t.home.rating}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative">
            <div className="relative aspect-[440/560] overflow-hidden rounded-[22px] bg-ink">
              <Image
                src="/img/hero-patient.jpg"
                alt={t.home.heroAlt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 440px"
                className="object-cover object-[50%_20%]"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:left-auto sm:right-8 sm:max-w-[19rem]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-accent">
                <Briefcase />
              </span>
              <div>
                <p className="text-small font-semibold text-ink">
                  {t.home.cardTitle}
                </p>
                <p className="text-tiny text-muted">{t.home.cardBody}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Info strip ─────────────────────────────────────────── */

export async function InfoStrip() {
  const { t } = await getContent();
  return (
    <section className="bg-white pb-5 pt-10">
      <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.home.info.map((c, i) => (
          <Reveal key={c.label} delay={i * 70}>
            <div className="flex h-full items-center gap-3.5 rounded-2xl bg-mist p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent">
                <Icon name={c.icon} />
              </span>
              <div>
                <p className="text-tiny font-medium text-muted">{c.label}</p>
                <p className="text-small font-semibold text-ink">{c.value}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Treatments ─────────────────────────────────────────── */

export async function TreatmentsGrid({
  withHead = true,
  flush = false,
}: {
  withHead?: boolean;
  flush?: boolean;
}) {
  const { t, href } = await getContent();
  return (
    <section className={`bg-white section ${flush ? "!pb-0" : ""}`}>
      <div className="shell">
        {withHead && (
          <SectionHead
            eyebrow={t.home.treatmentsEyebrow}
            title={<Lines lines={t.home.treatmentsTitle} />}
            action={
              <Button href={href("/treatments")} variant="ink">
                {t.ui.allTreatments}
              </Button>
            }
          />
        )}

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${withHead ? "mt-14" : ""}`}
        >
          {t.treatments.map((tr, i) => (
            <Reveal key={tr.slug} delay={(i % 3) * 80}>
              <Link
                href={href(`/treatments/${tr.slug}`)}
                className="group block h-full"
              >
                <article className="flex h-full flex-col rounded-[20px] bg-cream p-3">
                  <div className="relative aspect-[363/220] overflow-hidden rounded-2xl">
                    <Image
                      src={tr.image}
                      alt={tr.title}
                      fill
                      sizes="(max-width: 810px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5">
                    <p className="eyebrow text-accent">{tr.category}</p>
                    <h3 className="mt-3 text-d6 text-ink">{tr.title}</h3>
                    <p className="mt-3 flex-1 text-base2 text-muted">
                      {tr.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-small font-semibold text-ink">
                        {tr.from}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why us ─────────────────────────────────────────────── */

export async function WhyUs() {
  const { t } = await getContent();
  return (
    <section className="bg-mist section lg:!py-[120px]">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-accent">{t.home.whyEyebrow}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem]">
              {t.home.whyTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {t.home.why.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent">
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="mt-5 text-d6 text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-base2 text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] lg:aspect-[480/580]">
            <Image
              src="/img/clinic-room.jpg"
              alt={t.home.whyAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── New patient offer ──────────────────────────────────── */

export async function OfferCard({ padBottom = false }: { padBottom?: boolean }) {
  const { t, href } = await getContent();
  return (
    <section
      className={`bg-white pt-16 md:pt-20 lg:pt-24 ${padBottom ? "pb-16 md:pb-20 lg:pb-[100px]" : ""}`}
    >
      <div className="shell">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[22px] bg-ink p-10 md:flex-row md:items-center md:p-16">
            <div>
              <p className="eyebrow text-white/60">{t.home.offerEyebrow}</p>
              <p className="mt-4 flex items-baseline gap-3">
                <span
                  className="text-[3.25rem] leading-none tracking-[-0.03em] text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {t.home.offerPrice}
                </span>
                <span className="text-tiny font-medium text-white/50">
                  {t.home.offerWas}
                </span>
              </p>
              <p className="mt-4 max-w-md text-lead text-white/70">
                {t.home.offerBody}
              </p>
            </div>
            <Button href={href("/book")} variant="white" className="shrink-0">
              {t.ui.claimOffer}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Team ───────────────────────────────────────────────── */

export async function Team() {
  const { t, href } = await getContent();
  return (
    <section className="bg-white section lg:!pb-16">
      <div className="shell">
        <SectionHead
          eyebrow={t.home.teamEyebrow}
          title={t.home.teamTitle}
          action={
            <Button href={href("/about")} variant="outline">
              {t.ui.aboutUs}
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article>
                <div className="relative aspect-[384/400] overflow-hidden rounded-[20px] bg-cream">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-d6 text-ink">{m.name}</h3>
                <p className="mt-1.5 text-tiny font-medium text-accent">
                  {m.role}
                </p>
                <p className="mt-1.5 text-tiny font-medium text-muted">
                  {m.credential}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reviews ────────────────────────────────────────────── */

export async function Reviews() {
  const { t } = await getContent();
  return (
    <section className="bg-cream section lg:!pt-[128px]">
      <div className="shell">
        <SectionHead
          eyebrow={t.home.reviewsEyebrow}
          title={<Lines lines={t.home.reviewsTitle} />}
        />

        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2">
          {t.reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 80}>
              <figure className="flex h-full flex-col rounded-[20px] bg-white px-8 pb-12 pt-8">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} />
                  ))}
                </div>
                <blockquote className="mt-5 text-lead text-ink">
                  {r.quote}
                </blockquote>
                {/* name left, context as a chip right, divided by a hairline */}
                <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-rule pt-5">
                  <p className="text-small font-semibold text-ink">{r.name}</p>
                  <span className="shrink-0 rounded-full bg-mist px-3.5 py-1.5 text-tiny font-medium text-accent">
                    {r.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────── */

export async function CtaBand() {
  const { t, href } = await getContent();
  return (
    <section className="bg-primary py-20 md:py-[109px]">
      <div className="shell text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-[2rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[3.625rem]">
            {t.home.ctaTitle}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-white/75">
            {t.home.ctaLead}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href={href("/book")} variant="white">
              {t.ui.book}
            </Button>
            <Button href={t.clinic.phoneHref} variant="ink">
              {t.clinic.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
