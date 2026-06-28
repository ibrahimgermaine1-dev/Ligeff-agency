"use client";

import { useActionState } from "react";
import { submitBrief, type BriefState } from "@/lib/site/brief-actions";

const initialState: BriefState = { ok: true };

export function BriefForm() {
  const [state, formAction, pending] = useActionState(
    submitBrief,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-10">
      {/* Name + email */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Ibrahim Germaine" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>

      {/* Company + pillar */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field
          label="Company"
          name="company"
          placeholder="Ligeff Studio"
        />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pillar"
            className="text-eyebrow text-ink-3"
          >
            Which service?
          </label>
          <select
            id="pillar"
            name="pillar"
            defaultValue=""
            className="w-full border border-line bg-bg px-4 py-3 text-body text-ink focus:outline-none focus:border-ink transition-colors"
          >
            <option value="" disabled>
              Pick a service —
            </option>
            <option value="operational-efficiency">
              01 — Automation & AI
            </option>
            <option value="immersive-visual-assets">
              02 — 3D & Visuals
            </option>
            <option value="market-dominance">03 — Websites & Search</option>
            <option value="not-sure">I'm not sure</option>
          </select>
        </div>
      </div>

      {/* Problem */}
      <div className="flex flex-col gap-2">
        <label htmlFor="leak" className="text-eyebrow text-ink-3">
          What's not working? *
        </label>
        <textarea
          id="leak"
          name="leak"
          rows={6}
          required
          placeholder="Tell us, in plain words, what's costing you time or money. We don't need a polished brief — just the actual problem."
          className="w-full border border-line bg-bg px-4 py-3 text-body text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors resize-y"
        />
      </div>

      {/* Error message */}
      {state?.ok === false && state.message && (
        <p
          role="alert"
          className="border border-line-strong bg-bone px-5 py-4 text-body text-ink"
        >
          {state.message}
        </p>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-ink-3 max-w-[42ch]">
          We read every message personally and reply within two working days,
          Monday to Thursday.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="btn disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Sending…" : "Send message"}
          {!pending && (
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-eyebrow text-ink-3">
        {label}
        {required && <span className="ml-1 text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-line bg-bg px-4 py-3 text-body text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
