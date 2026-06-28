"use server";

import { redirect } from "next/navigation";

export type BriefState = {
  ok: boolean;
  message?: string;
};

export async function submitBrief(
  _prev: BriefState,
  formData: FormData
): Promise<BriefState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const pillar = String(formData.get("pillar") || "").trim();
  const leak = String(formData.get("leak") || "").trim();

  // Minimal validation — grade-3, value-led messaging
  if (!name || !email || !leak) {
    return {
      ok: false,
      message:
        "We need your name, your email, and a one-line description of where the money is leaking before we can read the brief.",
    };
  }

  // Basic email shape
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message:
        "The email address does not look right — please check it and try again.",
    };
  }

  // In production this would write to a queue / CRM / email.
  // For now we log and redirect to a thank-you state.
  console.log("[Ligeff brief]", { name, email, company, pillar, leak });

  redirect("/contact?sent=1");
}
