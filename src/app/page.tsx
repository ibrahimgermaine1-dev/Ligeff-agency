import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";
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
          01 · HERO — screen-fit, asymmetric 7/5
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            {/* Left: hero copy */}
            <div className="lg:col-span-7">
              <Eyebrow index="00">Ligeff Agency · Bespoke digital atelier</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Three things that move money.
              </h1>
              <p className="text-body-lg mt-8 max-w-[48ch] text-ink-2">
                Operational machines that buy back your time, photorealistic
                visual assets that close the imagination gap, and a market
                presence that owns the answer when buyers ask.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Begin a brief
                  <span className="btn-arrow" aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  See the three pillars
                </Link>
              </div>
            </div>

            {/* Right: large hero image */}
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-04.jpg"
                alt="Photorealistic 3D architectural render of a curved-roof cabin in an autumn forest, daylight exterior"
                ratio="4 / 5"
                label="RENDER · 02"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 · INTRO + STATS — screen-fit, one sentence + 3 stats
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow index="01">The studio</Eyebrow>
              <h2 className="text-headline mt-8 max-w-[16ch]">
                A small, senior team that refuses the fourth offering.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body-lg text-ink-2 max-w-[52ch]">
                We take on a small number of engagements each quarter, we
                charge seriously for them, and we only accept work where the
                math is unambiguous — where the cost of doing nothing is
                already larger than the cost of doing it with us.
              </p>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-line pt-12">
                <div>
                  <p className="stat-number">90</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Days to payback</p>
                </div>
                <div>
                  <p className="stat-number">3</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Pillars, no fourth</p>
                </div>
                <div>
                  <p className="stat-number">4</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Senior specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · THREE PILLARS — screen-fit, staggered asymmetric
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Eyebrow index="02">What we build</Eyebrow>
              <h2 className="text-headline mt-6">Three pillars.</h2>
            </div>
            <Link
              href="/services"
              className="link-underline hidden text-body text-ink-2 md:inline-block"
            >
              All pillars →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
            {PILLARS.map((p, i) => (
              <Link
                key={p.n}
                href={p.href}
                className={`group block border border-line bg-bg p-8 transition-colors duration-300 hover:bg-bone md:p-10 ${
                  i === 0
                    ? "md:col-span-5"
                    : i === 1
                    ? "md:col-span-4 md:mt-12"
                    : "md:col-span-3 md:mt-24"
                }`}
              >
                <span className="numeral-headline block">{p.n}</span>
                <h3 className="text-title mt-6 text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="text-body mt-4 text-ink-2 max-w-[36ch]">
                  {p.valueLine}
                </p>
                <p className="text-eyebrow mt-8 text-ink-3 transition-colors group-hover:text-ink">
                  Read the brief →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · FEATURED WORK — screen-fit, large image + caption
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-01.jpg"
                alt="Photorealistic 3D architectural render of a modern two-story house with a pool at nighttime"
                ratio="16 / 10"
                label="FEATURED · PROPERTY DEVELOPER · Q4"
                tone="deep"
              />
            </div>
            <div className="lg:col-span-5 lg:pl-8">
              <Eyebrow index="03" inverse>
                Featured work
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse">
                3.4× lift in pre-construction deposits.
              </h2>
              <p className="text-body-lg mt-6 text-ink-2-inverse max-w-[44ch]">
                A property developer with zero deposits against a $4M build.
                Six weeks after the walkthrough went live, deposits opened.
              </p>
              <Link
                href="/portfolio"
                className="btn-primary btn-primary-on-dark mt-8"
              >
                View portfolio
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 · PROCESS — screen-fit, 4 numbered steps
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Eyebrow index="04">How we work</Eyebrow>
          <h2 className="text-headline mt-6 max-w-[16ch]">
            Four steps. One page of math.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-4">
            {[
              {
                n: "01",
                h: "Write the leak.",
                p: "We measure the cost of doing nothing, in dollars, before any work begins.",
              },
              {
                n: "02",
                h: "Map the workflow.",
                p: "We trace the task end to end, finding the real leak, not the symptom.",
              },
              {
                n: "03",
                h: "Build in the dark.",
                p: "We build and test in parallel with the old workflow for two weeks.",
              },
              {
                n: "04",
                h: "Hand back the keys.",
                p: "We leave when the math is hit. No retainer, no drag.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-bg p-8 md:p-10">
                <span className="numeral-headline block text-ink-3">{s.n}</span>
                <h3 className="text-title mt-6 text-ink">{s.h}</h3>
                <p className="text-body mt-3 text-ink-2">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06 · TESTIMONIAL — screen-fit, dark band, large quote
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <Eyebrow index="05" inverse>
                Proof
              </Eyebrow>
            </div>
            <div className="lg:col-span-10">
              <blockquote className="text-display text-ink-inverse max-w-[20ch]">
                “Paid for itself in three weeks.”
              </blockquote>
              <div className="mt-12 flex flex-col gap-1 border-t border-line-inverse pt-6 max-w-[52ch]">
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
          07 · CTA — screen-fit, big headline + button
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="06">The close</Eyebrow>
              <h2 className="text-display mt-8 max-w-[18ch]">
                Either the math is unambiguous, or we are not the right studio.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body text-ink-2">
                If you can write down the leak as a number, we can tell you
                inside one conversation whether we are the right studio to
                close it.
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
