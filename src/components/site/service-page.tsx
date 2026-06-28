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
  /** If no src, render children (e.g. SVG diagram) inside the frame */
  children?: React.ReactNode;
};

export type ServicePageData = {
  pillar: Pillar;
  bleed: string;
  bleedBodyShort: string;
  phases: Phase[];
  proofHeadline: string;
  proofBody: string;
  proofItems: ProofItem[];
  mathHeadline: string;
  mathBody: string;
  mathColumns: MathColumn[];
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const { pillar, bleed, bleedBodyShort, phases, proofHeadline, proofBody, proofItems, mathHeadline, mathBody, mathColumns } = data;
  const others = PILLARS.filter((p) => p.slug !== pillar.slug);

  return (
    <PageShell>
      {/* ============================================================
          01 · THE BLEED (Hero) — screen-fit, asymmetric 7/5
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-8">
              <Eyebrow index={`${pillar.n}`}>{pillar.title}</Eyebrow>
              <p className="text-eyebrow mt-8 text-ink-3">The bleed</p>
              <h1 className="text-display mt-4 max-w-[18ch]">
                {bleed}
              </h1>
              <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                {bleedBodyShort}
              </p>
              <Link href="/contact" className="btn-primary mt-10 w-fit">
                Begin this brief
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-eyebrow text-ink-3">What we build</p>
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
          02 · THE MECHANICS — screen-fit, 4 numbered phases
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Eyebrow index={`${pillar.n}.02`}>The mechanics</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[20ch]">
                {phases.length} milestones to close the bleed.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.n} className="bg-bg p-8 md:p-10">
                <span className="numeral-headline block text-ink-3">{phase.n}</span>
                <h3 className="text-title mt-6 text-ink">{phase.title}</h3>
                <p className="text-body mt-3 text-ink-2">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · THE PROOF ANCHOR — screen-fit, dark band, real visuals
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-4">
              <Eyebrow index={`${pillar.n}.03`} inverse>
                The proof anchor
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse max-w-[16ch]">
                {proofHeadline}
              </h2>
              <p className="text-body-lg mt-6 text-ink-2-inverse max-w-[42ch]">
                {proofBody}
              </p>
            </div>

            <div className="lg:col-span-8">
              {proofItems.length === 1 ? (
                /* Single large proof */
                <div className="frame-sharp-inverse">
                  {proofItems[0].src ? (
                    <ProofFigure item={proofItems[0]} />
                  ) : (
                    <div className="p-8 md:p-12 bg-bg-deep" style={{ backgroundColor: "var(--bg-deep)" }}>
                      {proofItems[0].children}
                    </div>
                  )}
                </div>
              ) : (
                /* Grid of proof items */
                <div className={`grid gap-4 md:gap-6 ${
                  proofItems.length === 2 ? "grid-cols-1 md:grid-cols-2" :
                  proofItems.length === 3 ? "grid-cols-1 md:grid-cols-2" :
                  "grid-cols-2 md:grid-cols-2"
                }`}>
                  {proofItems.map((item, i) => (
                    <div
                      key={i}
                      className={i === 0 && proofItems.length <= 3 ? "md:col-span-2" : ""}
                    >
                      {item.src ? (
                        <ProofFigure item={item} />
                      ) : (
                        <div className="frame-sharp-inverse p-6 md:p-8" style={{ backgroundColor: "var(--bg-deep)", minHeight: "300px" }}>
                          {item.children}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <p className="text-caption mt-6 text-ink-3-inverse">
                Material truth, not mockups. Every artefact on this page is
                real, shown with the client's permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · THE LOGICAL MATH — screen-fit, staggered comparison
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow index={`${pillar.n}.04`}>The logical math</Eyebrow>
              <h2 className="text-display mt-8 text-ink leading-[0.95] max-w-[16ch]">
                {mathHeadline}
              </h2>
              <p className="text-body-lg mt-8 text-ink-2 max-w-[44ch]">
                {mathBody}
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-line">
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
                    <p className="text-title mt-4 text-ink leading-snug">
                      {col.headline}
                    </p>
                    <p className="text-body mt-3 text-ink-2 max-w-[58ch]">
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
          NEXT PILLARS — quiet hand-off, screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Eyebrow index={`${pillar.n}.05`}>The other two pillars</Eyebrow>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {others.map((o) => (
              <Link
                key={o.n}
                href={o.href}
                className="group flex flex-col gap-4 border-t border-line pt-8"
              >
                <span className="numeral-headline text-ink-3">{o.n}</span>
                <h3 className="text-headline text-ink">{o.title}</h3>
                <p className="text-body text-ink-2 max-w-[44ch]">{o.valueLine}</p>
                <span className="text-eyebrow mt-4 text-ink-3 transition-colors group-hover:text-ink">
                  Read the brief →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* Helper: render a single proof figure with image + label */
function ProofFigure({
  item,
}: {
  item: ProofItem;
}) {
  if (!item.src) return null;
  return (
    <figure
      className="relative overflow-hidden border border-line-inverse"
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
          style={{ backgroundColor: "rgba(26, 22, 17, 0.9)" }}
        >
          <span className="text-eyebrow text-ink-3-inverse">{item.label}</span>
        </figcaption>
      )}
    </figure>
  );
}
