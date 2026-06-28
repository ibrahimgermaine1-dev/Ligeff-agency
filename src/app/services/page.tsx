import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Plate } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Services — Three pillars, no fourth offering",
  description:
    "Ligeff Agency builds inside three pillars only: Operational Efficiency, Immersive Visual Assets, and Market Dominance. Each pillar has a dedicated, detailed subpage.",
};

export default function ServicesHubPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 lg:pt-32 lg:pb-20">
          <Eyebrow index="00">Services · The three pillars</Eyebrow>
          <h1 className="text-display mt-8 max-w-[18ch]">
            Three pillars, three pages, no fourth offering.
          </h1>
          <p className="text-body-lg mt-10 max-w-[62ch] text-ink-2">
            Everything Ligeff ships lives inside one of the three pillars
            below, and the reason each pillar has its own dedicated page is
            that each pillar is its own discipline, with its own math, its
            own proof, and its own senior specialist running the work — so
            the right way to read this section is to pick the pillar where
            your leak lives, open that page, and read the math.
          </p>
        </div>
      </section>

      {/* ============================================================
          PILLARS — staggered long-form rows (NOT three equal cards)
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px]">
          {PILLARS.map((p, i) => {
            const isOdd = i % 2 === 1;
            return (
              <article
                key={p.n}
                className="border-t border-line first:border-t-0"
              >
                <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 md:py-28">
                  <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
                    {/* Number + title block */}
                    <div
                      className={`lg:col-span-5 ${
                        isOdd ? "lg:order-2 lg:col-start-8" : ""
                      }`}
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="font-display text-display text-ink-3">
                          {p.n}
                        </span>
                        <span className="text-eyebrow text-ink-3">Pillar</span>
                      </div>
                      <h2 className="text-headline mt-8 text-ink">{p.title}</h2>
                      <p className="text-body-lg mt-6 text-ink-2 max-w-[42ch]">
                        {p.valueLine}
                      </p>
                      <Link
                        href={p.href}
                        className={`btn-secondary mt-10 ${isOdd ? "" : ""}`}
                      >
                        Read the {p.shortTitle.toLowerCase()} brief
                        <span className="btn-arrow" aria-hidden>→</span>
                      </Link>
                    </div>

                    {/* Offerings + bleed headline */}
                    <div
                      className={`lg:col-span-6 ${
                        isOdd ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
                      } lg:pl-8 lg:border-l lg:border-line`}
                    >
                      <p className="text-eyebrow text-ink-3">
                        The bleed
                      </p>
                      <p className="text-title mt-6 text-ink leading-snug">
                        {p.bleedHeadline}
                      </p>

                      <div className="mt-10">
                        <p className="text-eyebrow text-ink-3">
                          What we build inside this pillar
                        </p>
                        <ul className="mt-6 divide-y divide-line border-y border-line">
                          {p.offerings.map((o, idx) => (
                            <li
                              key={o}
                              className="flex items-baseline justify-between gap-6 py-5"
                            >
                              <span className="text-body text-ink">
                                <span className="text-ink-3 mr-4">
                                  0{idx + 1}
                                </span>
                                {o}
                              </span>
                              <span className="text-ink-3" aria-hidden>
                                →
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
                        <div className="bg-bg p-5">
                          <p className="text-eyebrow text-ink-3">Proof</p>
                          <p className="text-body mt-2 text-ink">
                            {p.proofLabel}
                          </p>
                        </div>
                        <div className="bg-bg p-5">
                          <p className="text-eyebrow text-ink-3">The math</p>
                          <p className="text-body mt-2 text-ink">
                            {p.mathHeadline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          THE DISCIPLINE — long-form anti-generalist statement
          ============================================================ */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index="04">The discipline</Eyebrow>
              <h2 className="text-headline mt-8">
                Why we will not build your app and your brand and your
                chatbot and your deck.
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body-lg text-ink-2">
                A studio that says yes to everything ships nothing
                exceptionally, and the moment a studio starts saying yes to
                a fourth offering it stops being a studio of specialists and
                becomes a generalist shop with a generalist shop's quality
                curve, which is the curve that bends down the moment the
                fourth offering is added to the menu.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                We refuse the fourth offering because we have seen what
                happens to the work when a studio stops refusing it, and
                because the only way to keep the work inside each of the
                three pillars this good is to never open a fourth, no matter
                how often the market asks, and no matter how much money is
                on the table for the asking.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                If your leak lives inside one of the three pillars, we should
                talk, and if your leak lives somewhere else, we will tell
                you which studio handles that kind of leak well, because the
                point of being a specialist is knowing what you do not do,
                and telling the truth about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSE
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="05">The close</Eyebrow>
              <p className="text-display mt-8 text-ink">
                Open the pillar where your leak lives.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body text-ink-2">
                Or, if you are not sure which pillar your leak lives inside,
                send us the symptom and we will tell you the pillar.
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
