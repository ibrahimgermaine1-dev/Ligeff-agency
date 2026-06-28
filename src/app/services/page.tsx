import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Services — Three things, done well",
  description:
    "Ligeff Agency does three things: Automation & AI, 3D Rendering & Visuals, and Websites & Search. Each has a dedicated page with real samples and real numbers.",
};

const PILLAR_IMAGES: Record<string, { src: string; alt: string }> = {
  "operational-efficiency": {
    src: "/samples/pillar-02-renderflaux/rf-05.jpg",
    alt: "Architectural render representing precision and structure",
  },
  "immersive-visual-assets": {
    src: "/samples/pillar-02-renderflaux/rf-02.jpg",
    alt: "Photorealistic 3D render of a contemporary house in a forest with water features",
  },
  "market-dominance": {
    src: "/samples/pillar-03-okunade/ok-01.jpg",
    alt: "Marketing material — RPM Formula course flyer",
  },
};

export default function ServicesHubPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">Services</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Three things, done well.
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                We don't try to do everything. We do three things, and we
                do them properly. Pick the one that matches what you need,
                open the page, and read the real numbers.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-03.jpg"
                alt="Photorealistic 3D render of an A-frame cabin on a wooden deck surrounded by trees"
                ratio="4 / 5"
                label="SAMPLE · 3D RENDER"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — staggered rows with images */}
      <section className="border-b border-line">
        <div className="container-locked">
          {PILLARS.map((p, i) => {
            const isOdd = i % 2 === 1;
            const img = PILLAR_IMAGES[p.slug];
            return (
              <article
                key={p.n}
                className="section-screen border-t border-line first:border-t-0"
              >
                <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-16">
                  <div
                    className={`lg:col-span-6 ${
                      isOdd ? "lg:order-2 lg:col-start-7" : ""
                    }`}
                  >
                    <Link href={p.href} className="frame block">
                      <Figure
                        src={img.src}
                        alt={img.alt}
                        ratio="4 / 3"
                        label={`SERVICE ${p.n}`}
                      />
                    </Link>
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      isOdd ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="numeral">{p.n}</span>
                      <Eyebrow>Service</Eyebrow>
                    </div>
                    <h2 className="text-headline mt-6 text-ink">{p.title}</h2>
                    <p className="text-body-lg mt-6 text-ink-2 measure">
                      {p.valueLine}
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                      {p.offerings.map((o) => (
                        <li key={o} className="text-caption text-ink-3">
                          {o}
                        </li>
                      ))}
                    </ul>
                    <Link href={p.href} className="btn btn-outline mt-10">
                      Read more
                      <span className="btn-arrow" aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* DISCIPLINE */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index="04">Why only three</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[16ch]">
                We don't do everything. That's the point.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-lg text-ink-2 measure">
                A studio that says yes to everything ships nothing well. We
                refuse extra services because we've seen what happens to the
                work when a studio stops refusing — the quality drops, and
                the client pays for it.
              </p>
              <p className="text-body-lg mt-6 text-ink-2 measure">
                If your problem fits one of our three services, we should
                talk. If it doesn't, we'll tell you who can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
