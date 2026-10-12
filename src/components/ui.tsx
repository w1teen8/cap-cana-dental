"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "./icons";

/* ── Button ─────────────────────────────────────────────── */

type Variant = "accent" | "ink" | "white" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "bg-primary text-white hover:bg-accent-deep",
  ink: "bg-ink text-white hover:bg-ink/90",
  white: "bg-white text-primary hover:bg-cream",
  outline: "border border-rule bg-white text-ink hover:border-ink",
  "outline-light": "border border-rule-dark text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "accent",
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-small font-semibold transition-colors duration-200 ease-[cubic-bezier(0.44,0,0.56,1)] ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/* ── Reveal on scroll ───────────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Section heading ────────────────────────────────────── */

export function SectionHead({
  eyebrow,
  title,
  lead,
  action,
  tone = "ink",
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  action?: React.ReactNode;
  tone?: "ink" | "light";
  align?: "left" | "center";
}) {
  const light = tone === "light";
  return (
    <div
      className={
        align === "center"
          ? "flex flex-col items-center text-center"
          : "flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-xl"}>
        {eyebrow && (
          <Reveal>
            <p className={`eyebrow ${light ? "text-white/60" : "text-accent"}`}>
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={60}>
          <h2
            className={`mt-4 text-[2rem] leading-[1.12] tracking-[-0.025em] md:text-[2.75rem] ${
              light ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {lead && (
          <Reveal delay={110}>
            <p
              className={`mt-5 text-lead ${light ? "text-white/70" : "text-muted"}`}
            >
              {lead}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={140} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

/* ── Inner-page hero ────────────────────────────────────── */

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-cream pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="shell">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow text-accent">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h1 className="mt-4 text-[2.5rem] leading-[1.06] tracking-[-0.035em] md:text-[3.625rem]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lead text-muted">{lead}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
