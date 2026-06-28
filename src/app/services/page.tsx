import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Services — Three pillars, no fourth offering",
  description:
    "Ligeff Agency builds inside three pillars only: Operational Efficiency, Immersive Visual Assets, and Market Dominance.",
};

const PILLAR_IMAGES: Record<string, { src: string; alt: string }> = {
  "operational-efficiency": {
    src: "/samples/pillar-02-renderflaux/rf-05.jpg",
    alt: "Architectural render representing operational precision — single-story house with black roof, wooden exterior, daylight backyard",
  },
  "immersive-visual-assets": {
    src: "/samples/pillar-02-renderflaux/rf-02.jpg",
    alt: "Photorealistic 3D render of a contemporary house in a forest with water features, daytime",
  },
  "market-dominance": {
    src: "/samples/pillar-03-okunade/ok-01.jpg",
    alt: "Promotional flyer for the RPM Formula Mini Course — educational marketing material",
  },
};

export default function ServicesHubPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO — screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">Services · The three pillars</Eyebrow>
              <h1 className="text-display mt-8 max-w-[16ch]">
                Three pillars, no fourth offering.
              </h1>
              <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                Everything Ligeff ships lives inside one of the three pillars
                below. Pick the pillar where your leak lives, open the page,
                read the math.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-02-renderflaux/rf-03.jpg"
                alt="Photorealistic 3D render of an A-frame cabin on a wooden deck surrounded by trees"
                ratio="4 / 5"
                label="SAMPLE · PILLAR 02"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PILLARS — screen-fit, staggered asymmetric rows with images
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px]">
          {PILLARS.map((p, i) => {
            const isOdd = i % 2 === 1;
            const img = PILLAR_IMAGES[p.slug];
            return (
              <article
                key={p.n}
                className="section-screen border-t border-line first:border-t-0"
              >
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
                  <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-16">
                    {/* Image */}
                    <div
                      className={`lg:col-span-6 ${
                        isOdd ? "lg:order-2 lg:col-start-7" : ""
                      }`}
                    >
                      <Link href={p.href} className="img-frame block">
                        <Figure
                          src={img.src}
                          alt={img.alt}
                          ratio="4 / 3"
                          label={`PILLAR ${p.n}`}
                        />
                      </Link>
                    </div>

                    {/* Text */}
                    <div
                      className={`lg:col-span-5 ${
                        isOdd ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                      }`}
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="numeral-headline text-ink-3">{p.n}</span>
                        <span className="text-eyebrow text-ink-3">Pillar</span>
                      </div>
                      <h2 className="text-headline mt-6 text-ink">{p.title}</h2>
                      <p className="text-body-lg mt-6 text-ink-2 max-w-[42ch]">
                        {p.valueLine}
                      </p>
                      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                        {p.offerings.map((o) => (
                          <li key={o} className="text-caption text-ink-3">
                            {o}
                          </li>
                        ))}
                      </ul>
                      <Link href={p.href} className="btn-secondary mt-10">
                        Read the brief
                        <span className="btn-arrow" aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          DISCIPLINE — screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-4">
              <Eyebrow index="04">The discipline</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[14ch]">
                Why we refuse the fourth offering.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-body-lg text-ink-2 max-w-[52ch]">
                A studio that says yes to everything ships nothing
                exceptionally. We refuse the fourth offering because we have
                seen what happens to the work when a studio stops refusing
                it — and the only way to keep the work inside each of the
                three pillars this good is to never open a fourth.
              </p>
              <p className="text-body-lg mt-6 text-ink-2 max-w-[52ch]">
                If your leak lives inside one of the three pillars, we should
                talk. If it lives somewhere else, we will tell you which
                studio handles that kind of leak well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
