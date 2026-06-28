import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";

export const metadata = {
  title: "Portfolio — Work that paid for itself inside the first ninety days",
  description:
    "A selection of Ligeff Agency engagements across the three pillars, each shown with the leak we closed and the math we agreed on.",
};

type Work = {
  n: string;
  title: string;
  pillar: string;
  pillarHref: string;
  leak: string;
  math: string;
  src: string;
  alt: string;
  ratio: string;
  size: "wide" | "tall" | "std";
};

const WORKS: Work[] = [
  {
    n: "01",
    title: "Property developer · Pre-construction deposits",
    pillar: "02 — Immersive Visual Assets",
    pillarHref: "/services/immersive-visual-assets",
    leak: "0 deposits against a $4M build. Buyers could not picture the result.",
    math: "3.4× lift in deposits inside 6 weeks.",
    src: "/samples/pillar-02-renderflaux/rf-01.jpg",
    alt: "Photorealistic 3D render of a modern two-story house with a pool at nighttime",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "02",
    title: "B2B services · Sales ops automation",
    pillar: "01 — Operational Efficiency",
    pillarHref: "/services/operational-efficiency",
    leak: "Senior ops lead spending 22 hrs/week chasing status across 4 systems.",
    math: "22 hrs/week recovered. Paid back in 18 weeks.",
    src: "/samples/pillar-02-renderflaux/rf-05.jpg",
    alt: "Architectural render representing operational precision — single-story house with black roof",
    ratio: "4 / 5",
    size: "tall",
  },
  {
    n: "03",
    title: "Luxury furniture · AI-answer placement",
    pillar: "03 — Market Dominance",
    pillarHref: "/services/market-dominance",
    leak: "0 of 8 buyer queries answered with the client's name across AI search.",
    math: "First-answer on 6 of 8 queries within 120 days.",
    src: "/samples/pillar-03-okunade/ok-02.jpg",
    alt: "Social media post about the hidden costs of DIY web design",
    ratio: "4 / 5",
    size: "tall",
  },
  {
    n: "04",
    title: "Architecture studio · Material-truth renders",
    pillar: "02 — Immersive Visual Assets",
    pillarHref: "/services/immersive-visual-assets",
    leak: "Lost shortlist because the competition rendered and the studio did not.",
    math: "2 of 3 shortlists won after renders went into the pitch.",
    src: "/samples/pillar-02-renderflaux/rf-03.jpg",
    alt: "Photorealistic 3D render of an A-frame cabin on a wooden deck surrounded by trees",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "05",
    title: "Insurance brokerage · Quote-flow automation",
    pillar: "01 — Operational Efficiency",
    pillarHref: "/services/operational-efficiency",
    leak: "Quote turnaround 3 days. 19% of prospects went elsewhere waiting.",
    math: "Turnaround cut to 14 minutes. 19% loss became 4% lift.",
    src: "/samples/pillar-02-renderflaux/rf-06.jpg",
    alt: "Photorealistic 3D render of a modern A-frame house with a pool at nighttime",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "06",
    title: "Online educator · Course as category teacher",
    pillar: "03 — Market Dominance",
    pillarHref: "/services/market-dominance",
    leak: "Vendor positioning. AI search refused to cite the client as a source.",
    math: "22-lesson course shipped. AI citations up 4× in 90 days.",
    src: "/samples/pillar-03-okunade/ok-01.jpg",
    alt: "Promotional flyer for the RPM Formula Mini Course",
    ratio: "16 / 10",
    size: "wide",
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO — screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-8">
              <Eyebrow index="00">Portfolio · A selection of the work</Eyebrow>
              <h1 className="text-display mt-8 max-w-[16ch]">
                Work that paid for itself inside ninety days.
              </h1>
              <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                We show the leak we closed and the math we agreed on — not
                logos and testimonials. The leak and the math are the only
                two numbers that matter when you are deciding whether to hire
                a studio like ours.
              </p>
            </div>
            <div className="lg:col-span-4">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-04.jpg"
                alt="Photorealistic 3D render of a curved-roof cabin in an autumn forest"
                ratio="4 / 5"
                label="SAMPLE · Q4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE WORK — asymmetric grid, real images
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12">
            {WORKS.map((w, i) => {
              const colSpan =
                w.size === "wide"
                  ? "md:col-span-7"
                  : w.size === "tall"
                  ? "md:col-span-5"
                  : "md:col-span-6";
              const offset =
                i % 2 === 1 && w.size === "tall"
                  ? "md:col-start-8"
                  : i % 2 === 1 && w.size === "wide"
                  ? "md:col-start-6"
                  : "";

              return (
                <article
                  key={w.n}
                  className={`group flex flex-col gap-6 ${colSpan} ${offset}`}
                >
                  <Link href={w.pillarHref} className="img-frame block">
                    <Figure
                      src={w.src}
                      alt={w.alt}
                      ratio={w.ratio}
                      label={`${w.n} · ${w.pillar.split(" — ")[0]}`}
                    />
                  </Link>

                  <div className="flex items-baseline justify-between gap-6 border-t border-line pt-5">
                    <span className="text-eyebrow text-ink-3">{w.n}</span>
                    <Link
                      href={w.pillarHref}
                      className="text-caption text-ink-3 hover:text-ink transition-colors"
                    >
                      {w.pillar} →
                    </Link>
                  </div>

                  <h2 className="text-title text-ink leading-snug max-w-[36ch]">
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
          CTA — screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="02" inverse>
                The close
              </Eyebrow>
              <h2 className="text-display mt-8 text-ink-inverse max-w-[18ch]">
                If the leak looks familiar, send us a brief.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line-inverse">
              <Link href="/contact" className="btn-primary btn-primary-on-dark w-fit">
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
