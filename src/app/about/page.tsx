import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";

export const metadata = {
  title: "About — A small, senior team that refuses the fourth offering",
  description:
    "Ligeff Agency is a four-person studio of senior specialists who build operational machines, immersive visual assets, and market dominance.",
};

const TEAM = [
  {
    n: "01",
    initials: "IG",
    name: "Ibrahim Germaine",
    role: "Founder · Operational machines",
    bio: "Spent a decade running operations inside businesses that were quietly bleeding time, and built the automation practice at Ligeff to close that bleed permanently.",
    pillar: "01 — Operational Efficiency",
  },
  {
    n: "02",
    initials: "M·A",
    name: "Lead Visual Architect",
    role: "Founder · Immersive visual assets",
    bio: "Trained in architectural visualization and material-truth rendering, leads every walkthrough and render with the discipline of someone who would rather ship nothing than ship a fake.",
    pillar: "02 — Immersive Visual Assets",
  },
  {
    n: "03",
    initials: "S·O",
    name: "Lead Search Architect",
    role: "Founder · Market dominance",
    bio: "Has been building and ranking serious web properties since before AI search existed, now makes sure the AI gives back our client's name, not a competitor's.",
    pillar: "03 — Market Dominance",
  },
  {
    n: "04",
    initials: "A·K",
    name: "Studio Producer",
    role: "Engagements, math, deadlines",
    bio: "Keeps the studio honest. Refuses to let an engagement open until the leak is written as a number, and closes it only when the number is hit.",
    pillar: "All three pillars",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO — screen-fit, asymmetric 7/5 with portrait
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">About Ligeff Agency</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Four people. Three pillars.
              </h1>
              <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                The discipline of refusing the fourth offering is the single
                reason the work in each of the three is as good as it is. We
                take on a small number of engagements each quarter, we charge
                seriously for them, and we only accept work where the math is
                unambiguous.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-03-okunade/ok-portrait.jpg"
                alt="Portrait of a senior team member, representing the studio's editorial portrait style"
                ratio="4 / 5"
                label="THE STUDIO · LAGOS"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY WE EXIST — screen-fit
          ============================================================ */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-4">
              <Eyebrow index="01">Why we exist</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[14ch]">
                We built the studio we wished we could have hired.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-body-lg text-ink-2 max-w-[52ch]">
                Every person on this team spent years inside businesses that
                were quietly losing money to one of the three leaks we now
                close. We built Ligeff to be the studio that does the work
                cleanly, takes the engagement seriously, and refuses to sell
                a fourth thing you do not need.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-12">
                <div>
                  <p className="stat-number">4</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Senior specialists</p>
                </div>
                <div>
                  <p className="stat-number">0</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Junior staff</p>
                </div>
                <div>
                  <p className="stat-number">∞</p>
                  <p className="text-eyebrow mt-3 text-ink-3">No fourth pillar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE TEAM — screen-fit, staggered asymmetric
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Eyebrow index="02">The four of us</Eyebrow>
          <h2 className="text-headline mt-6 max-w-[20ch]">
            No junior staff. No offshore team.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20">
            {TEAM.map((m, i) => (
              <article
                key={m.n}
                className={`group flex flex-col gap-5 ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="frame-sharp" style={{ aspectRatio: "4 / 5" }}>
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--bone) 0%, var(--paper) 45%, var(--bone) 100%)",
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(72px, 8vw, 128px)",
                        color: "var(--ink)",
                        opacity: 0.18,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {m.initials}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline gap-4 border-t border-line pt-5">
                  <span className="text-eyebrow text-ink-3">{m.n}</span>
                  <span className="text-eyebrow text-ink-3">{m.role}</span>
                </div>
                <h3 className="text-headline text-ink">{m.name}</h3>
                <p className="text-body text-ink-2 max-w-[44ch]">{m.bio}</p>
                <p className="text-caption text-ink-3 mt-1">Leads · {m.pillar}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE COLLABORATE — screen-fit, dark band
          ============================================================ */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow index="03" inverse>
                How we collaborate
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse max-w-[14ch]">
                Direct line to the person doing the work.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-lg text-ink-2-inverse max-w-[52ch]">
                No account managers. The person who pitched you the
                engagement is the same person who builds the work and the
                same person who reports against the math every thirty days.
                We meet weekly, we send a written report every thirty days,
                and we end the engagement the moment the number is hit.
              </p>
              <Link href="/contact" className="btn-primary btn-primary-on-dark mt-10 w-fit">
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
