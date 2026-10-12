import { Reveal } from "./ui";

/** Centred hero used by /treatments, /about and /patients. */
export function PageHeroCentered({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className="bg-cream pb-16 pt-14 md:pb-20 md:pt-20 lg:pb-20 lg:pt-[88px]">
      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow text-accent">{eyebrow}</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mx-auto mt-5 max-w-[15ch] text-[2.625rem] leading-[1.06] tracking-[-0.035em] md:text-[3.75rem] lg:text-[4.875rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-[36rem] text-lead text-muted">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Four white figures on the tinted band (About). */
export function StatsRow({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="bg-mist pb-16 pt-10 md:pb-20 lg:pb-[110px] lg:pt-[84px]">
      <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="h-full min-h-[160px] rounded-[20px] bg-white p-7 lg:min-h-[190px]">
              <p
                className="text-[2.5rem] leading-none tracking-[-0.03em] text-ink lg:text-[3.25rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {s.value}
              </p>
              <p className="mt-3 text-tiny font-medium text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
