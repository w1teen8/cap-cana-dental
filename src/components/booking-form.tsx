"use client";

import { useState } from "react";
import type { Content } from "@/content/en";
import { ArrowRight } from "./icons";

type FormText = Content["bookPage"]["form"];

const field =
  "h-[52px] w-full rounded-[14px] border border-rule bg-cream px-4 text-body text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-primary focus:outline-none";
const label = "mb-2.5 block text-small font-semibold text-ink";

function Select({ id, options }: { id: string; options: readonly string[] }) {
  return (
    <div className="relative">
      <select id={id} name={id} className={`${field} appearance-none pr-10`}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg
        viewBox="0 0 16 16"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        aria-hidden
      >
        <path
          d="m4 6 4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function BookingForm({ f }: { f: FormText }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center">
        <h2 className="text-d5 text-ink">{f.sentTitle}</h2>
        <p className="mt-4 text-lead text-muted">{f.sentBody}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-small font-semibold text-accent hover:underline"
        >
          {f.sentAgain}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // No backend yet: connect this to the clinic booking endpoint or email.
        setSent(true);
      }}
      className="grid gap-x-3.5 gap-y-4 sm:grid-cols-2"
    >
      <div>
        <label htmlFor="name" className={label}>
          {f.name}
        </label>
        <input id="name" name="name" required placeholder={f.namePh} className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          {f.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder={f.phonePh}
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className={label}>
          {f.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={f.emailPh}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="patientType" className={label}>
          {f.patientType}
        </label>
        <Select id="patientType" options={f.patientTypes} />
      </div>
      <div>
        <label htmlFor="reason" className={label}>
          {f.reason}
        </label>
        <Select id="reason" options={f.reasons} />
      </div>

      <div>
        <label htmlFor="date" className={label}>
          {f.date}
        </label>
        <input id="date" name="date" type="date" className={field} />
      </div>
      <div>
        <label htmlFor="time" className={label}>
          {f.time}
        </label>
        <Select id="time" options={f.times} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="notes" className={label}>
          {f.notes}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder={f.notesPh}
          className={`${field} h-[120px] resize-none py-3.5`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-primary text-small font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
        >
          {f.submit}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
        <p className="mt-5 text-tiny font-medium text-muted">{f.note}</p>
      </div>
    </form>
  );
}
