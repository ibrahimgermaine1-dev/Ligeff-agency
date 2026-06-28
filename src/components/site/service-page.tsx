import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Plate } from "@/components/site/plate";
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

export type ServicePageData = {
  pillar: Pillar;
  bleed: string[];
  phases: Phase[];
  proofImages: { ratio: string; label: string; tone?: "light" | "deep" }[];
  proofBody: string;
  mathHeadline: string;
  mathBody: string;
  mathColumns: MathColumn[];
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const { pillar, bleed, phases, proofImages, proofBody, mathHeadline, mathBody, mathColumns } = data;
  const others = PILLARS.filter((p) => p.slug !== pillar.slug);

  return (
    <PageShell>
      {/* ============================================================
          01 · THE BLEED (Hero)
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-16 pb-16 md:pt-24 lg:pt-32 lg:pb-24">
          <div className="flex items-center gap-6">
            <Eyebrow index={pillar.n}>{pillar.title}</Eyebrow>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-8">
              <p className="text-eyebrow text-ink-3">The bleed</p>
              <h1 className="text-display mt-6 text-ink">
                {pillar.bleedHeadline}
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-line flex flex-col gap-5">
              <p className="text-eyebrow text-ink-3">What we do about it</p>
              <p className="text-body-lg text-ink-2">{pillar.description}</p>
              <Link href="/contact" className="btn-primary w-fit mt-2">
                Begin this brief
                <span className="btn-arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Bleed body — long flowing pain copy */}
          <div className="mt-16 grid grid-cols-1 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <span className="text-eyebrow text-ink-3">The cost</span>
            </div>
            <div className="lg:col-span-9 lg:col-start-4">
              {bleed.map((para, i) => (
                <p key={i} className="text-body-lg text-ink-2 mb-6 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 · THE MECHANICS
          ============================================================ */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index={`${pillar.n}.02`}>The mechanics</Eyebrow>
              <h2 className="text-headline mt-8">
                How we close the bleed, in {phases.length} milestones.
              </h2>
              <p className="text-body-lg mt-6 text-ink-2 max-w-[42ch]">
                Written as value milestones, not feature lists — what you
                gain at each step, never what we do.
              </p>
            </div>

            <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-line">
              <ol className="flex flex-col gap-12">
                {phases.map((phase) => (
                  <li
                    key={phase.n}
                    className="grid grid-cols-1 gap-y-3 md:grid-cols-12 md:gap-x-8"
                  >
                    <div className="md:col-span-2">
                      <span className="font-display text-title text-ink-3">
                        {phase.n}
                      </span>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-title text-ink">{phase.title}</h3>
                      <p className="text-body-lg mt-3 text-ink-2 max-w-[58ch]">
                        {phase.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · THE PROOF ANCHOR (dark band)
          ============================================================ */}
      <section className="border-b border-line bg-deep">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index={`${pillar.n}.03`} inverse>
                The proof anchor
              </Eyebrow>
              <h2 className="text-headline mt-8 text-ink-inverse">
                {pillar.proofLabel}
              </h2>
              <p className="text-body-lg mt-6 text-ink-2-inverse max-w-[42ch]">
                {proofBody}
              </p>
            </div>

            <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-line-inverse">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {proofImages.map((img, i) => (
                  <Plate
                    key={i}
                    ratio={img.ratio}
                    label={img.label}
                    tone={img.tone ?? "deep"}
                    className={
                      // asymmetric: first image spans 2 rows on md+
                      i === 0 ? "col-span-2 md:col-span-2" : "col-span-1"
                    }
                  />
                ))}
              </div>
              <p className="text-caption mt-6 text-ink-3-inverse">
                Material truth, not mockups. Every still on this page is a
                real artefact from a real engagement, shown with the client's
                permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · THE LOGICAL MATH
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow index={`${pillar.n}.04`}>The logical math</Eyebrow>
              <h2 className="text-display mt-8 text-ink leading-[0.95]">
                {mathHeadline}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body-lg text-ink-2">{mathBody}</p>

              {/* Staggered comparison — NOT three equal cards */}
              <div className="mt-12 flex flex-col gap-px border border-line bg-line">
                {mathColumns.map((col, i) => (
                  <div
                    key={col.label}
                    className={`bg-bg p-6 md:p-8 ${
                      col.emphasis ? "bg-bone" : ""
                    }`}
                    style={{
                      // staggered: every other column indents on md+
                      marginLeft:
                        i === 1 ? "0px" : i === 2 ? "0px" : undefined,
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <span className="text-eyebrow text-ink-3">
                        {col.label}
                      </span>
                      {col.emphasis && (
                        <span className="text-eyebrow text-ink">
                          Ligeff
                        </span>
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
          NEXT PILLAR — quiet hand-off
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow index={`${pillar.n}.05`}>The other two pillars</Eyebrow>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              {others.map((o) => (
                <Link
                  key={o.n}
                  href={o.href}
                  className="group flex items-baseline justify-between border-t border-line py-6 first:border-t-0"
                >
                  <div>
                    <span className="text-eyebrow text-ink-3">{o.n}</span>
                    <h3 className="text-headline mt-2 text-ink">{o.title}</h3>
                    <p className="text-body mt-2 text-ink-2 max-w-[52ch]">
                      {o.valueLine}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-ink-3 ml-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
