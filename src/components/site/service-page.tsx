import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import type { Pillar } from "@/lib/site/pillars";
import { PILLARS } from "@/lib/site/pillars";

export type Phase = {
  n: string;
  title: string;
  body: string;
};

export type MathColumn = {
  label: string;
  headline: string;
  body: string;
  emphasis?: boolean;
};

export type ProofItem = {
  src?: string;
  alt?: string;
  ratio: string;
  label: string;
  tone?: "light" | "deep";
  children?: React.ReactNode;
};

export type ServicePageData = {
  pillar: Pillar;
  heroHeadline: string;
  heroBody: string;
  phases: Phase[];
  proofHeadline: string;
  proofBody: string;
  proofItems: ProofItem[];
  mathHeadline: string;
  mathBody: string;
  mathColumns: MathColumn[];
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const {
    pillar,
    heroHeadline,
    heroBody,
    phases,
    proofHeadline,
    proofBody,
    proofItems,
    mathHeadline,
    mathBody,
    mathColumns,
  } = data;
  const others = PILLARS.filter((p) => p.slug !== pillar.slug);

  return (
    <PageShell>
      {/* ============================================================
          01 · HERO
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Eyebrow index={pillar.n}>{pillar.title}</Eyebrow>
              <h1 className="text-display mt-8 max-w-[18ch]">
                {heroHeadline}
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                {heroBody}
              </p>
              <Link href="/contact" className="btn mt-10 w-fit">
                Start a project
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
              <p className="text-eyebrow text-ink-3">What we deliver</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {pillar.offerings.map((o, idx) => (
                  <li key={o} className="flex items-baseline gap-4 py-4">
                    <span className="text-eyebrow text-ink-3">0{idx + 1}</span>
                    <span className="text-body text-ink">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 · MECHANICS
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="container-locked">
          <Eyebrow index={`${pillar.n}.02`}>How we do it</Eyebrow>
          <h2 className="text-headline mt-6 max-w-[20ch]">
            {phases.length} steps, start to finish.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.n} className="bg-bg p-8">
                <span className="numeral block">{phase.n}</span>
                <h3 className="text-title mt-6 text-ink">{phase.title}</h3>
                <p className="text-body mt-3 text-ink-2">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · PROOF
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow index={`${pillar.n}.03`} inverse>
                {pillar.proofLabel}
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse max-w-[16ch]">
                {proofHeadline}
              </h2>
              <p className="text-body-lg mt-6 text-ink-2-inverse measure">
                {proofBody}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className={`grid gap-4 md:gap-6 ${
                proofItems.length <= 2 ? "grid-cols-1 md:grid-cols-2" :
                proofItems.length === 3 ? "grid-cols-1 md:grid-cols-2" :
                "grid-cols-2"
              }`}>
                {proofItems.map((item, i) => (
                  <div
                    key={i}
                    className={i === 0 && proofItems.length <= 3 ? "md:col-span-2" : ""}
                  >
                    {item.src ? (
                      <figure
                        className="frame frame-dark relative"
                        style={{ aspectRatio: item.ratio }}
                      >
                        <img
                          src={item.src}
                          alt={item.alt || ""}
                          className="h-full w-full object-cover"
                        />
                        {item.label && (
                          <figcaption
                            className="absolute inset-x-0 bottom-0 px-4 py-3"
                            style={{ backgroundColor: "rgba(26, 22, 17, 0.92)" }}
                          >
                            <span className="text-eyebrow text-ink-3-inverse">
                              {item.label}
                            </span>
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <div
                        className="frame frame-dark p-6 md:p-8"
                        style={{ backgroundColor: "var(--bg-deep)", minHeight: "300px" }}
                      >
                        {item.children}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-caption mt-6 text-ink-3-inverse">
                Real samples from real projects. Shown with the client's permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · MATH
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index={`${pillar.n}.04`}>The numbers</Eyebrow>
              <h2 className="text-display mt-8 text-ink max-w-[16ch]">
                {mathHeadline}
              </h2>
              <p className="text-body-lg mt-8 text-ink-2 measure">
                {mathBody}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="flex flex-col gap-px border border-line bg-line">
                {mathColumns.map((col, i) => (
                  <div
                    key={col.label}
                    className={`p-6 md:p-8 ${col.emphasis ? "bg-bone" : "bg-bg"}`}
                    style={{
                      marginLeft: i === 1 ? "16px" : i === 2 ? "32px" : "0px",
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <span className="text-eyebrow text-ink-3">{col.label}</span>
                      {col.emphasis && (
                        <span className="text-eyebrow text-ink">Ligeff</span>
                      )}
                    </div>
                    <p className="text-title mt-4 text-ink">
                      {col.headline}
                    </p>
                    <p className="text-body mt-3 text-ink-2">
                      {col.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OTHER SERVICES
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <Eyebrow index={`${pillar.n}.05`}>Other services</Eyebrow>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {others.map((o) => (
              <Link
                key={o.n}
                href={o.href}
                className="group flex flex-col gap-4 border-t border-line pt-8"
              >
                <span className="numeral">{o.n}</span>
                <h3 className="text-headline text-ink">{o.title}</h3>
                <p className="text-body text-ink-2 measure">{o.valueLine}</p>
                <span className="text-eyebrow mt-4 text-ink-3 transition-colors group-hover:text-ink">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
