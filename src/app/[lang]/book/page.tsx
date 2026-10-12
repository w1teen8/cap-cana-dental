import type { Metadata } from "next";
import { alternates, getContent } from "@/content";
import { Reveal } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import BookingForm from "@/components/booking-form";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getContent();
  return { title: t.bookPage.metaTitle, alternates: alternates("/book") };
}

export default async function BookPage() {
  const { t } = await getContent();
  const p = t.bookPage;
  const { clinic } = t;

  const contacts: { icon: IconKey; label: string; value: string; href?: string }[] = [
    { icon: "phone", label: p.contacts.call, value: clinic.phone, href: clinic.phoneHref },
    { icon: "mail", label: p.contacts.email, value: clinic.email, href: `mailto:${clinic.email}` },
    { icon: "pin", label: p.contacts.visit, value: clinic.address },
    { icon: "clock", label: p.contacts.hours, value: clinic.hours },
  ];

  return (
    <section className="bg-cream pb-16 pt-12 md:pb-20 lg:pb-[108px] lg:pt-[88px]">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_580px] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mt-2 text-accent">{p.eyebrow}</p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 max-w-[13ch] text-[2.5rem] leading-[1.1] tracking-[-0.03em] md:text-[3.625rem]">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-6 text-lead text-muted">{p.lead}</p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-2.5">
            {contacts.map((c, i) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-accent">
                    <Icon name={c.icon} />
                  </span>
                  <span>
                    <span className="block text-tiny font-medium text-muted">
                      {c.label}
                    </span>
                    <span className="block text-small font-semibold text-ink">
                      {c.value}
                    </span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-3.5 rounded-2xl bg-white px-3.5 py-3.5";
              return (
                <Reveal key={c.label} delay={150 + i * 50}>
                  {c.href ? (
                    <a href={c.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-[26px] bg-white p-7 shadow-[0_24px_60px_rgba(44,44,44,0.07)] md:p-10">
            <BookingForm f={p.form} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
