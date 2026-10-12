type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Brand mark — a rounded tooth, as in the reference logo tile. */
export function ToothMark({ className = "h-[22px] w-[22px]" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3.2c-1.7 0-2.5-.9-4.4-.9-2.3 0-3.6 1.9-3.6 4.7 0 2.1.6 3.4 1.1 5.1.5 1.8.6 3.5.9 5.3.2 1.4.7 2.6 1.6 2.6 1.1 0 1.4-1.3 1.7-2.8.4-1.7.5-3.5 2.7-3.5s2.3 1.8 2.7 3.5c.3 1.5.6 2.8 1.7 2.8.9 0 1.4-1.2 1.6-2.6.3-1.8.4-3.5.9-5.3.5-1.7 1.1-3 1.1-5.1 0-2.8-1.3-4.7-3.6-4.7-1.9 0-2.7.9-4.4.9Z"
        fill="currentColor"
      />
      <path
        d="M9.4 8.6c.7-.5 1.6-.8 2.6-.8s1.9.3 2.6.8"
        stroke="#5b7c99"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Clock({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function Phone({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M8.2 3.6 5.9 3a2 2 0 0 0-2.3 1.2l-.4 1c-.3.8-.2 1.7.3 2.4a24 24 0 0 0 11 9.9c.8.3 1.7.2 2.3-.3l.9-.7a2 2 0 0 0 .5-2.5l-1.1-2a1.6 1.6 0 0 0-1.9-.8l-2 .6-3.4-3.4.6-2a1.6 1.6 0 0 0-1.2-2Z" />
    </svg>
  );
}

export function Pin({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 21s6.5-5.6 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </svg>
  );
}

export function Shield({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 3 5 5.4v5.1c0 4.3 2.9 7.5 7 9.5 4.1-2 7-5.2 7-9.5V5.4Z" />
      <path d="M9.3 11.8 11.3 14l3.5-3.9" />
    </svg>
  );
}

export function Heart({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 19.5s-7.3-4.4-7.3-9.2A3.9 3.9 0 0 1 12 8.1a3.9 3.9 0 0 1 7.3 2.2c0 4.8-7.3 9.2-7.3 9.2Z" />
    </svg>
  );
}

export function Scan({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M4 8.5v-2A2.5 2.5 0 0 1 6.5 4h2M15.5 4h2A2.5 2.5 0 0 1 20 6.5v2M20 15.5v2a2.5 2.5 0 0 1-2.5 2.5h-2M8.5 20h-2A2.5 2.5 0 0 1 4 17.5v-2" />
      <rect x="9" y="9" width="6" height="6" rx="1.4" />
    </svg>
  );
}

export function Chat({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M20 12.4c0 3.6-3.6 6.5-8 6.5-.9 0-1.8-.1-2.6-.4L4 20l1.4-3.4A6.2 6.2 0 0 1 4 12.4C4 8.8 7.6 6 12 6s8 2.8 8 6.4Z" />
    </svg>
  );
}

export function Briefcase({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2.2" />
      <path d="M9 7.5V6a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 15 6v1.5M12 11.8v3.4M10.3 13.5h3.4" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...stroke} aria-hidden>
      <path d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...stroke} aria-hidden>
      <path d="M5 11 11 5M5.6 5H11v5.4" />
    </svg>
  );
}

export function Star({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <path
        d="M10 1.6l2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8Z"
        fill="#f5a623"
      />
    </svg>
  );
}

export function Tag({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M3.5 11.6V5.5a2 2 0 0 1 2-2h6.1a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-6.1 6.1a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1-.6-1.4Z" />
      <circle cx="8" cy="8" r="1.3" />
    </svg>
  );
}

export function Mail({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 7.5 7.5 5.6 7.5-5.6" />
    </svg>
  );
}

export function Calendar({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M9.3 14.6l1.9 1.9 3.5-3.6" />
    </svg>
  );
}

export function Clipboard({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="5" y="5" width="14" height="15.5" rx="2.2" />
      <path d="M9 5V4.3A1.3 1.3 0 0 1 10.3 3h3.4A1.3 1.3 0 0 1 15 4.3V5M9 11h6M9 15h4" />
    </svg>
  );
}

export function Cup({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M5 9.5h11v4.2a4.8 4.8 0 0 1-4.8 4.8h-1.4A4.8 4.8 0 0 1 5 13.7Z" />
      <path d="M16 10.5h1.6a2.2 2.2 0 0 1 0 4.4H16M8.5 6.5c0-1 .9-1 .9-2M12 6.5c0-1 .9-1 .9-2" />
    </svg>
  );
}

export function Smile({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.8 13.8a4 4 0 0 0 6.4 0M9.3 9.8h.01M14.7 9.8h.01" />
    </svg>
  );
}

export function ArrowLeft({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...stroke} aria-hidden>
      <path d="M13.2 8H2.8M6.6 4.2 2.8 8l3.8 3.8" />
    </svg>
  );
}

export const iconMap = {
  clock: Clock,
  phone: Phone,
  pin: Pin,
  shield: Shield,
  heart: Heart,
  scan: Scan,
  chat: Chat,
  briefcase: Briefcase,
  tag: Tag,
  mail: Mail,
  calendar: Calendar,
  clipboard: Clipboard,
  cup: Cup,
  smile: Smile,
} as const;

export type IconKey = keyof typeof iconMap;

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const C = iconMap[name];
  return <C className={className} />;
}
