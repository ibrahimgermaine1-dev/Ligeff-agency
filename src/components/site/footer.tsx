import Link from "next/link";
import { Wordmark } from "./wordmark";
import { Eyebrow } from "./section-header";
import { PILLARS } from "@/lib/site/pillars";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-ink-inverse">
      {/* CTA band */}
      <div className="hairline-inverse border-t">
        <div className="container-locked section">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="01" inverse>
                Start a project
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse max-w-[18ch]">
                If the numbers make sense, we should talk.
              </h2>
              <p className="text-body-lg mt-6 measure text-ink-2-inverse">
                We take on a small number of projects each quarter. We only
                accept work where we can show, in real numbers, that the
                work will pay for itself within ninety days.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn btn-on-dark">
                  Start a project
                  <span className="btn-arrow" aria-hidden>→</span>
                </Link>
                <a
                  href="mailto:hello@ligeff.agency"
                  className="link link-on-dark text-ink-2-inverse"
                >
                  hello@ligeff.agency
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line-inverse lg:pl-8">
              <Eyebrow index="02" inverse>
                Contact
              </Eyebrow>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-eyebrow text-ink-3-inverse">Email</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    hello@ligeff.agency
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-ink-3-inverse">Hours</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    Mon–Thu, 09:00–18:00 WAT
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-ink-3-inverse">Studio</dt>
                  <dd className="text-body mt-1 text-ink-inverse">
                    Lagos · Remote
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars row */}
      <div className="hairline-inverse border-t">
        <div className="container-locked section">
          <Eyebrow index="03" inverse>
            What we do
          </Eyebrow>
          <div className="mt-10 grid grid-cols-1 gap-px border border-line-inverse bg-line-inverse md:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.n}
                href={p.href}
                className="group bg-deep p-8 transition-colors duration-300 hover:bg-bg-deep"
                style={{ backgroundColor: "var(--bg-deep)" }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="numeral">{p.n}</span>
                  <span className="text-ink-3-inverse transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-inverse">
                    →
                  </span>
                </div>
                <h3 className="text-title mt-6 text-ink-inverse">{p.title}</h3>
                <p className="text-body mt-3 text-ink-2-inverse">{p.valueLine}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bare wordmark + copyright */}
      <div className="hairline-inverse border-t">
        <div className="container-locked py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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
