import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Ligeff Agency — Automation, 3D Rendering, Websites & Search",
  description:
    "A small studio that does three things: builds software that automates repetitive work, creates photorealistic 3D renders of buildings and products, and builds websites that rank first on Google and AI search.",
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ============================================================
          01 · HERO
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">Ligeff Agency · Lagos & remote</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                We do three things, and only three things.
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                We build software that automates the repetitive work eating
                your team's week. We render photorealistic 3D images of
                buildings and products that don't exist yet. And we build
                websites that make your business the first answer when
                people search online.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn">
                  Start a project
                  <span className="btn-arrow" aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn btn-outline">
                  See what we do
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-04.jpg"
                alt="Photorealistic 3D render of a curved-roof cabin in an autumn forest"
                ratio="4 / 5"
                label="3D RENDER · SAMPLE"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 · INTRO + STATS
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index="01">The studio</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[16ch]">
                A small team that refuses to do everything.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-lg text-ink-2 measure">
                We are four senior specialists. We take on a small number of
                projects each quarter, and we only accept work where we can
                show, in real numbers, that the work will pay for itself
                within ninety days.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-10">
                <div>
                  <p className="stat-number">90</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Days to payback</p>
                </div>
                <div>
                  <p className="stat-number">3</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Services only</p>
                </div>
                <div>
                  <p className="stat-number">4</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Senior staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · THREE PILLARS
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Eyebrow index="02">What we do</Eyebrow>
              <h2 className="text-headline mt-6">Three services.</h2>
            </div>
            <Link
              href="/services"
              className="link hidden text-body text-ink-2 md:inline-block"
            >
              All services →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
            {PILLARS.map((p, i) => (
              <Link
                key={p.n}
                href={p.href}
                className={`card group block ${
                  i === 0
                    ? "md:col-span-5"
                    : i === 1
                    ? "md:col-span-4 md:mt-12"
                    : "md:col-span-3 md:mt-24"
                }`}
              >
                <span className="numeral block">{p.n}</span>
                <h3 className="text-title mt-6 text-ink">{p.title}</h3>
                <p className="text-body mt-4 text-ink-2">{p.valueLine}</p>
                <p className="text-eyebrow mt-8 text-ink-3 transition-colors group-hover:text-ink">
                  Read more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · FEATURED WORK
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-01.jpg"
                alt="Photorealistic 3D render of a modern two-story house with a pool at nighttime"
                ratio="16 / 10"
                label="FEATURED · PROPERTY DEVELOPER"
                tone="deep"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Eyebrow index="03" inverse>
                Featured work
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse">
                3.4× more deposits in six weeks.
              </h2>
              <p className="text-body-lg mt-6 text-ink-2-inverse measure">
                A property developer had zero pre-construction deposits
                against a $4M build. Six weeks after we delivered 3D renders
                and a walkthrough, the deposits started coming in.
              </p>
              <Link
                href="/portfolio"
                className="btn btn-on-dark mt-8"
              >
                View portfolio
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 · PROCESS
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <Eyebrow index="04">How we work</Eyebrow>
          <h2 className="text-headline mt-6 max-w-[18ch]">
            Four steps. Real numbers.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-4">
            {[
              {
                n: "01",
                h: "Count the cost.",
                p: "We measure, in hours and dollars, how much the current way of doing things actually costs you.",
              },
              {
                n: "02",
                h: "Map the work.",
                p: "We trace the task from start to finish, finding exactly where time and money are being lost.",
              },
              {
                n: "03",
                h: "Build and test.",
                p: "We build the solution and run it alongside the old way for two weeks, so there's no risk.",
              },
              {
                n: "04",
                h: "Hand it over.",
                p: "We train your team, document everything, and leave when the work has paid for itself.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-bg p-8">
                <span className="numeral block">{s.n}</span>
                <h3 className="text-title mt-6 text-ink">{s.h}</h3>
                <p className="text-body mt-3 text-ink-2">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06 · TESTIMONIAL
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <Eyebrow index="05" inverse>
                Proof
              </Eyebrow>
            </div>
            <div className="lg:col-span-10">
              <blockquote className="text-display text-ink-inverse max-w-[20ch]">
                “The work paid for itself in three weeks.”
              </blockquote>
              <div className="mt-10 flex flex-col gap-1 border-t border-line-inverse pt-6 measure">
                <p className="text-body text-ink-inverse">
                  — Operations Director, property development firm
                </p>
                <p className="text-caption text-ink-3-inverse">
                  Name withheld at client's request · Q4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 · CTA
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="06">Start a project</Eyebrow>
              <h2 className="text-display mt-8 max-w-[18ch]">
                If the numbers make sense, we should talk.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
              <p className="text-body text-ink-2">
                Tell us what's not working. We'll tell you, in one
                conversation, whether we can fix it and what the numbers
                look like.
              </p>
              <Link href="/contact" className="btn w-fit">
                Start a project
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
