import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, SectionHeader } from "@/components/site/section-header";
import { Plate } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Portfolio — Work that paid for itself inside the first ninety days",
  description:
    "A selection of Ligeff Agency engagements across the three pillars, each shown with the leak we closed, the math we agreed on, and the time it took the work to pay for itself.",
};

type Work = {
  n: string;
  title: string;
  pillar: string;
  pillarHref: string;
  year: string;
  leak: string;
  math: string;
  ratio: string;
  tone: "light" | "deep";
  label: string;
  size: "wide" | "tall" | "std";
};

const WORKS: Work[] = [
  {
    n: "01",
    title: "Property developer · Pre-construction deposits",
    pillar: "02 — Immersive Visual Assets",
    pillarHref: "/services/immersive-visual-assets",
    year: "Q4",
    leak: "0 deposits against a $4M build because buyers could not picture the result.",
    math: "3.4x lift in deposits inside 6 weeks of the walkthrough going live.",
    ratio: "16 / 9",
    tone: "deep",
    label: "WALKTHROUGH · NORTH ELEVATION",
    size: "wide",
  },
  {
    n: "02",
    title: "B2B services firm · Sales ops automation",
    pillar: "01 — Operational Efficiency",
    pillarHref: "/services/operational-efficiency",
    year: "Q3",
    leak: "Senior ops lead spending 22 hrs/week chasing status across 4 systems.",
    math: "22 hrs/week recovered. Engagement paid back in 18 weeks.",
    ratio: "4 / 5",
    tone: "light",
    label: "WORKFLOW MAP · BEFORE / AFTER",
    size: "tall",
  },
  {
    n: "03",
    title: "Luxury furniture maker · AI-answer placement",
    pillar: "03 — Market Dominance",
    pillarHref: "/services/market-dominance",
    year: "Q2",
    leak: "0 of 8 buyer queries answered with the client's name across AI search.",
    math: "First-answer placement on 6 of 8 queries within 120 days.",
    ratio: "4 / 5",
    tone: "light",
    label: "AI ANSWER · CITES CLIENT",
    size: "tall",
  },
  {
    n: "04",
    title: "Architecture studio · Material-truth renders",
    pillar: "02 — Immersive Visual Assets",
    pillarHref: "/services/immersive-visual-assets",
    year: "Q2",
    leak: "Lost shortlist because the competition rendered and the studio did not.",
    math: "2 of 3 shortlists won after renders went into the pitch.",
    ratio: "16 / 9",
    tone: "light",
    label: "INTERIOR · OAK + LIMESTONE",
    size: "wide",
  },
  {
    n: "05",
    title: "Insurance brokerage · Quote-flow automation",
    pillar: "01 — Operational Efficiency",
    pillarHref: "/services/operational-efficiency",
    year: "Q1",
    leak: "Quote turnaround 3 days; 19% of prospects went elsewhere waiting.",
    math: "Turnaround cut to 14 minutes. 19% loss became 4% lift.",
    ratio: "4 / 5",
    tone: "deep",
    label: "FLOW · 11 TOUCHPOINTS → 2",
    size: "tall",
  },
  {
    n: "06",
    title: "Online educator · Course as category teacher",
    pillar: "03 — Market Dominance",
    pillarHref: "/services/market-dominance",
    year: "Q1",
    leak: "Vendor positioning; AI search refused to cite the client as a source.",
    math: "22-lesson course shipped. AI citations up 4x in 90 days.",
    ratio: "16 / 9",
    tone: "light",
    label: "COURSE · 22 LESSONS",
    size: "wide",
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 lg:pt-32 lg:pb-20">
          <Eyebrow index="00">Portfolio · A selection of the work</Eyebrow>
          <h1 className="text-display mt-8 max-w-[18ch]">
            Work that paid for itself inside the first ninety days.
          </h1>
          <p className="text-body-lg mt-10 max-w-[62ch] text-ink-2">
            We do not show logos, because logos are not the proof a serious
            business owner is looking for; the proof a serious business owner
            is looking for is the leak we closed, the math we agreed on at
            the start, and the time it took the work to pay for itself, so
            that is the proof we show below, with the client's name removed
            and the numbers left in.
          </p>
        </div>
      </section>

      {/* ============================================================
          THE GRID — asymmetric, NOT 3-equal-card grid
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
            {WORKS.map((w, i) => {
              // Asymmetric column spans based on size + index parity
              const colSpan =
                w.size === "wide"
                  ? "md:col-span-7"
                  : w.size === "tall"
                  ? "md:col-span-5"
                  : "md:col-span-6";
              const offset =
                i % 2 === 1 && w.size !== "wide"
                  ? "md:col-start-8"
                  : i % 2 === 1 && w.size === "wide"
                  ? "md:col-start-6"
                  : "";

              return (
                <article
                  key={w.n}
                  className={`group flex flex-col gap-6 ${colSpan} ${offset}`}
                >
                  <Link
                    href={w.pillarHref}
                    className="img-frame block border border-line"
                  >
                    <Plate
                      ratio={w.ratio}
                      label={w.label}
                      tone={w.tone}
                    />
                  </Link>

                  <div className="flex items-baseline justify-between gap-6 border-t border-line pt-5">
                    <span className="text-eyebrow text-ink-3">
                      {w.n} · {w.year}
                    </span>
                    <Link
                      href={w.pillarHref}
                      className="text-caption text-ink-3 hover:text-ink transition-colors"
                    >
                      {w.pillar} →
                    </Link>
                  </div>

                  <h2 className="text-title text-ink leading-snug">
                    {w.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8">
                    <div>
                      <p className="text-eyebrow text-ink-3">The leak</p>
                      <p className="text-body mt-2 text-ink-2">{w.leak}</p>
                    </div>
                    <div>
                      <p className="text-eyebrow text-ink-3">The math</p>
                      <p className="text-body mt-2 text-ink">{w.math}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW TO READ THIS PAGE — long-form note
          ============================================================ */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index="02">How to read this page</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="text-body-lg text-ink-2">
                Every entry above is a real engagement, with the client's
                name removed at the client's request, and the reason we show
                the leak and the math instead of the logo and the testimonial
                is that the leak and the math are the only two numbers that
                matter when you are deciding whether to hire a studio like
                ours, and the logo and the testimonial are the two numbers
                that do not.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                If the leak in any of the entries above looks like the leak
                in your business, open the pillar page for that engagement,
                read the math, and if the math is unambiguous, send us a
                brief — we take on a small number of engagements each quarter
                and we close the quarter when the slots are full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THREE PILLARS REMINDER
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionHeader
            index="03"
            eyebrow="Open the pillar"
            headline={
              <>
                Every engagement above lives inside one of three pillars.
              </>
            }
          />
          <div className="mt-12 flex flex-col gap-px border border-line bg-line md:flex-row">
            {PILLARS.map((p) => (
              <Link
                key={p.n}
                href={p.href}
                className="group bg-bg p-8 transition-colors duration-300 hover:bg-bone md:flex-1"
              >
                <span className="text-eyebrow text-ink-3">{p.n}</span>
                <h3 className="text-title mt-4 text-ink">{p.title}</h3>
                <p className="text-body mt-3 text-ink-2">{p.valueLine}</p>
                <p className="mt-6 text-ink-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
