import Link from "next/link";
import { Wordmark } from "./wordmark";

const PILLARS = [
  {
    n: "01",
    title: "Operational Efficiency",
    href: "/services/operational-efficiency",
    line: "Custom AI apps, automation, autonomous agents that buy back your time.",
  },
  {
    n: "02",
    title: "Immersive Visual Assets",
    href: "/services/immersive-visual-assets",
    line: "3D renders, walkthroughs, AI video and image that close the imagination gap.",
  },
  {
    n: "03",
    title: "Market Dominance",
    href: "/services/market-dominance",
    line: "High-end web, courses, AI SEO and GEO that own the answer when buyers ask.",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-ink-inverse">
      {/* Pre-footer CTA band */}
      <div className="hairline-inverse border-t">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow-row eyebrow-row-inverse">A quiet conversation</p>
              <h2 className="text-headline mt-6 text-ink-inverse">
                If your business is bleeding time, cash, or leads, the
                conversation is overdue.
              </h2>
              <p className="text-body-lg mt-8 max-w-[58ch] text-ink-2-inverse">
                We take on a small number of engagements each quarter, and we
                only accept work where the math is unambiguous — where the cost
                of doing nothing is already larger than the cost of doing it
                with us, and where the work itself pays for itself inside the
                first ninety days of going live.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary btn-primary-on-dark">
                  Begin a brief
                  <span className="btn-arrow" aria-hidden>→</span>
                </Link>
                <a
                  href="mailto:hello@ligeff.agency"
                  className="link-underline text-ink-2-inverse hover:text-ink-inverse transition-colors"
                  style={{ color: "var(--ink-2-inverse)" }}
                >
                  hello@ligeff.agency
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line-inverse">
              <p className="eyebrow-row eyebrow-row-inverse">Direct</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-caption text-ink-3-inverse">Email</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    hello@ligeff.agency
                  </dd>
                </div>
                <div>
                  <dt className="text-caption text-ink-3-inverse">New work</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    Monday to Thursday, 09:00 to 18:00 WAT
                  </dd>
                </div>
                <div>
                  <dt className="text-caption text-ink-3-inverse">Studio</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    Lagos · Remote across four continents
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars row */}
      <div className="hairline-inverse border-t">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16">
          <p className="eyebrow-row eyebrow-row-inverse">The three pillars</p>
          <div className="mt-8 grid grid-cols-1 gap-px border border-line-inverse bg-line-inverse md:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.n}
                href={p.href}
                className="group bg-deep p-8 transition-colors duration-300 hover:bg-bg-deep"
                style={{ backgroundColor: "var(--bg-deep)" }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-eyebrow text-ink-3-inverse">{p.n}</span>
                  <span className="text-ink-3-inverse transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-inverse">
                    →
                  </span>
                </div>
                <h3 className="text-title mt-6 text-ink-inverse">{p.title}</h3>
                <p className="text-body mt-3 text-ink-2-inverse">{p.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bare wordmark + copyright */}
      <div className="hairline-inverse border-t">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div style={{ color: "var(--ink-inverse)" }}>
              <Wordmark />
            </div>
            <p className="text-caption text-ink-3-inverse">
              © {year} Ligeff Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
