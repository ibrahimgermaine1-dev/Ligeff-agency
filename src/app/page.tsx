import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, SectionHeader } from "@/components/site/section-header";
import { Plate } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Ligeff Agency — Operational Machines, Visual Assets, Market Dominance",
  description:
    "A bespoke digital atelier that builds the three assets that move money in a modern business: operational machines, photorealistic visual assets, and a market presence that owns the answer.",
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO — asymmetric 7/5, long-form pain-led headline
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-12 pt-16 pb-12 md:pt-24 lg:grid-cols-12 lg:gap-x-12 lg:pt-32 lg:pb-20">
            {/* Left: hero copy */}
            <div className="lg:col-span-7">
              <Eyebrow index="00">Ligeff Agency · A bespoke digital atelier</Eyebrow>

              <h1 className="text-display mt-8">
                We build the three things that move money in a modern
                business, and we refuse to build anything else.
              </h1>

              <p className="text-body-lg mt-10 max-w-[58ch] text-ink-2">
                Operational machines that buy back your time, photorealistic
                visual assets that close the imagination gap before the deal
                is won, and a market presence that owns the answer when a
                buyer asks an AI who to trust — built by a small, senior team
                that takes on a handful of engagements each quarter and
                ships work that pays for itself inside the first ninety days.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Begin a brief
                  <span className="btn-arrow" aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  See the three pillars
                </Link>
              </div>
            </div>

            {/* Right: proof column — asymmetric 5/7 with stacked plates */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
              <div className="grid grid-cols-2 gap-6">
                <Plate
                  ratio="3 / 4"
                  label="RENDER · 02"
                  className="col-span-1 mt-12"
                />
                <Plate
                  ratio="3 / 4"
                  label="AUTOMATION · 01"
                  tone="deep"
                  className="col-span-1"
                />
                <Plate
                  ratio="16 / 9"
                  label="AI ANSWER · 03"
                  className="col-span-2"
                />
              </div>
              <p className="text-caption mt-6 text-ink-3">
                Three pillars. One studio. No fourth offering, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE PROBLEM BAND — long-form, pain-led, no images
          ============================================================ */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index="01">The cost of doing nothing</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="text-body-lg text-ink-2">
                Most business owners we meet are quietly losing money in three
                places at the same time, and they cannot see any of the three
                leaks because each one looks, on its own, like a normal cost
                of running a business — the senior staff who spend half their
                week on work a machine should have done years ago, the
                high-ticket deal that drifts away because the buyer could not
                picture the result, and the buyer who asked an AI for a
                recommendation and was given a competitor's name instead of
                theirs.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                Each leak is small enough to ignore, and the three of them
                together are large enough to decide whether the year is a
                good year or a bad one, and the worst part is that the
                business owner is usually working so hard on the day-to-day
                that they never sit down long enough to add the three numbers
                up — so the leaks keep running, quarter after quarter, until
                someone like us comes in and shows them the math on a single
                page.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                We are that someone, and the rest of this page is the math.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE THREE PILLARS — staggered asymmetric, NOT 3 equal cards
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <SectionHeader
            index="02"
            eyebrow="What we build"
            headline={
              <>
                Three pillars. <br className="hidden md:block" />
                No fourth offering.
              </>
            }
            lede="Everything Ligeff ships sits inside one of these three pillars, and the discipline of refusing the fourth offering is the reason the work in each pillar is this good."
          />

          <div className="mt-20 flex flex-col gap-px border border-line bg-line">
            {PILLARS.map((p, i) => (
              <Link
                key={p.n}
                href={p.href}
                className="group bg-bg transition-colors duration-300 hover:bg-bone"
              >
                <div
                  className="grid grid-cols-1 gap-y-6 p-8 md:p-12 lg:grid-cols-12 lg:gap-x-12"
                  style={{
                    // staggered vertical offset for asymmetric rhythm
                    marginTop: i === 1 ? "0px" : undefined,
                  }}
                >
                  <div className="lg:col-span-2">
                    <span className="font-display text-headline text-ink-3">
                      {p.n}
                    </span>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="text-headline text-ink">
                      {p.title}
                    </h3>
                    <p className="text-body-lg mt-5 max-w-[48ch] text-ink-2">
                      {p.valueLine}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {p.offerings.map((o) => (
                        <li
                          key={o}
                          className="text-caption text-ink-3"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start justify-between lg:col-span-4 lg:justify-end">
                    <div className="lg:text-right">
                      <p className="text-eyebrow text-ink-3">Read the brief</p>
                      <p className="text-title mt-3 text-ink transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE PROOF — large editorial quote + asymmetric 5/7
          ============================================================ */}
      <section className="border-b border-line bg-deep">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow index="03" inverse>
                The proof
              </Eyebrow>
              <p className="text-body-lg mt-8 text-ink-2-inverse">
                We do not show logos, and we do not show testimonials with
                smiling headshots, because the only kind of proof that
                matters to a serious business owner is the kind that shows up
                on the bank statement at the end of the month.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-line-inverse">
              <blockquote className="text-headline text-ink-inverse">
                “The automation Ligeff built paid for itself inside three
                weeks, and the walkthrough they rendered sold the second
                phase of the project before we had broken ground on the
                first.”
              </blockquote>
              <div className="mt-10 flex flex-col gap-1 border-t border-line-inverse pt-6">
                <p className="text-body text-ink-inverse">
                  — Operations Director, property development firm
                </p>
                <p className="text-caption text-ink-3-inverse">
                  Name withheld at client's request · Engagement closed Q4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE METHOD — long-form, no card grid
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index="04">How we work</Eyebrow>
              <h2 className="text-headline mt-8">
                A small team, a short engagement, a single page of math.
              </h2>
            </div>

            <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-line">
              <div className="flex flex-col gap-12">
                {[
                  {
                    n: "i.",
                    h: "We start with the bleed, not the brief.",
                    p: "The first conversation is never about what we are going to build, it is about where the money is leaking, and we do not propose a single line of work until we can write the leak down as a number on a page, because if we cannot write the leak as a number we cannot promise you that the work will pay for itself, and we will not take an engagement we cannot promise that on.",
                  },
                  {
                    n: "ii.",
                    h: "We build inside one pillar at a time.",
                    p: "We do not pitch you a retainer that touches all three pillars at once, because that is how a studio turns into a generalist shop, and how a generalist shop ships mediocre work in three directions instead of exceptional work in one, so each engagement lives inside a single pillar and a single piece of math, and we finish one before we open the next.",
                  },
                  {
                    n: "iii.",
                    h: "We measure the work against the leak.",
                    p: "Every engagement has a single number we agreed on at the start, the number that represents the leak we are closing, and we report against that number every thirty days until the work has paid for itself and the leak is closed, and only then do we hand the keys back to your team and walk away.",
                  },
                ].map((s) => (
                  <div key={s.n} className="grid grid-cols-1 gap-y-4 md:grid-cols-12 md:gap-x-8">
                    <div className="md:col-span-2">
                      <span className="font-display text-title text-ink-3">
                        {s.n}
                      </span>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-title text-ink">{s.h}</h3>
                      <p className="text-body-lg mt-4 text-ink-2">{s.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE CLOSE — single hard sentence + CTA
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-40">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="05">The close</Eyebrow>
              <p className="text-display mt-8 text-ink">
                Either the math is unambiguous, or we are not the right
                studio for the job.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body text-ink-2">
                If you can write down the leak as a number, we can tell you
                inside one conversation whether we are the right studio to
                close it, and if we are not, we will tell you who is.
              </p>
              <Link href="/contact" className="btn-primary w-fit">
                Begin a brief
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
