import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";

export const metadata = {
  title: "Portfolio — Real work, real numbers",
  description:
    "A selection of Ligeff Agency projects across our three services. Each shows the problem we fixed and the real numbers we delivered.",
};

type Work = {
  n: string;
  title: string;
  service: string;
  serviceHref: string;
  problem: string;
  result: string;
  src: string;
  alt: string;
  ratio: string;
  size: "wide" | "tall";
};

const WORKS: Work[] = [
  {
    n: "01",
    title: "Property developer · Pre-construction deposits",
    service: "02 — 3D & Visuals",
    serviceHref: "/services/immersive-visual-assets",
    problem: "Zero deposits against a $4M build. Buyers couldn't picture the finished building.",
    result: "3.4× more deposits within six weeks of delivering the renders.",
    src: "/samples/pillar-02-renderflaux/rf-01.jpg",
    alt: "Photorealistic 3D render of a modern two-story house with a pool at nighttime",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "02",
    title: "B2B services · Sales operations",
    service: "01 — Automation & AI",
    serviceHref: "/services/operational-efficiency",
    problem: "Senior ops lead spending 22 hours per week chasing status updates across four systems.",
    result: "22 hours recovered per week. Project paid for itself in 18 weeks.",
    src: "/samples/pillar-02-renderflaux/rf-05.jpg",
    alt: "Architectural render representing precision and structure",
    ratio: "4 / 5",
    size: "tall",
  },
  {
    n: "03",
    title: "Luxury furniture · Online visibility",
    service: "03 — Websites & Search",
    serviceHref: "/services/market-dominance",
    problem: "Zero of eight buyer queries returned the client's name in AI search results.",
    result: "Six of eight queries returned the client's name within 120 days.",
    src: "/samples/pillar-03-okunade/ok-02.jpg",
    alt: "Marketing material about the hidden costs of DIY web design",
    ratio: "4 / 5",
    size: "tall",
  },
  {
    n: "04",
    title: "Architecture studio · Pitch materials",
    service: "02 — 3D & Visuals",
    serviceHref: "/services/immersive-visual-assets",
    problem: "Lost a shortlist because the competition had renders and the studio didn't.",
    result: "Won two of three shortlists after adding renders to the pitch.",
    src: "/samples/pillar-02-renderflaux/rf-03.jpg",
    alt: "Photorealistic 3D render of an A-frame cabin on a wooden deck surrounded by trees",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "05",
    title: "Insurance brokerage · Quote turnaround",
    service: "01 — Automation & AI",
    serviceHref: "/services/operational-efficiency",
    problem: "Quote turnaround was three days. 19% of prospects went elsewhere while waiting.",
    result: "Turnaround cut to 14 minutes. The 19% loss became a 4% gain.",
    src: "/samples/pillar-02-renderflaux/rf-06.jpg",
    alt: "Photorealistic 3D render of a modern A-frame house with a pool at nighttime",
    ratio: "16 / 10",
    size: "wide",
  },
  {
    n: "06",
    title: "Online educator · Course creation",
    service: "03 — Websites & Search",
    serviceHref: "/services/market-dominance",
    problem: "AI search wouldn't cite the client as a source. They were positioned as a vendor, not a teacher.",
    result: "22-lesson course shipped. AI citations up 4× in 90 days.",
    src: "/samples/pillar-03-okunade/ok-01.jpg",
    alt: "Promotional flyer for the RPM Formula Mini Course",
    ratio: "16 / 10",
    size: "wide",
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Eyebrow index="00">Portfolio</Eyebrow>
              <h1 className="text-display mt-8 max-w-[16ch]">
                Real work, real numbers.
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                We show the problem we fixed and the result we delivered —
                not logos and testimonials. Those are the only two numbers
                that matter when you're deciding whether to hire us.
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

      {/* WORK GRID */}
      <section className="section border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12">
            {WORKS.map((w, i) => {
              const colSpan =
                w.size === "wide" ? "md:col-span-7" : "md:col-span-5";
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
                  <Link href={w.serviceHref} className="frame block">
                    <Figure
                      src={w.src}
                      alt={w.alt}
                      ratio={w.ratio}
                      label={`${w.n} · ${w.service.split(" — ")[0]}`}
                    />
                  </Link>

                  <div className="flex items-baseline justify-between gap-6 border-t border-line pt-5">
                    <span className="text-eyebrow text-ink-3">{w.n}</span>
                    <Link
                      href={w.serviceHref}
                      className="text-caption text-ink-3 hover:text-ink transition-colors"
                    >
                      {w.service} →
                    </Link>
                  </div>

                  <h2 className="text-title text-ink max-w-[36ch]">
                    {w.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8">
                    <div>
                      <p className="text-eyebrow text-ink-3">The problem</p>
                      <p className="text-body mt-2 text-ink-2">{w.problem}</p>
                    </div>
                    <div>
                      <p className="text-eyebrow text-ink-3">The result</p>
                      <p className="text-body mt-2 text-ink">{w.result}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow index="02" inverse>
                Start a project
              </Eyebrow>
              <h2 className="text-display mt-8 text-ink-inverse max-w-[18ch]">
                If any of this sounds familiar, talk to us.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line-inverse lg:pl-8">
              <Link href="/contact" className="btn btn-on-dark w-fit">
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
