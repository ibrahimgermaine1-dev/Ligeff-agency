import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { Figure } from "@/components/site/plate";

export const metadata = {
  title: "About — Four senior specialists, no junior staff",
  description:
    "Ligeff Agency is a four-person studio of senior specialists. No junior staff, no offshore team, no account managers.",
};

const TEAM = [
  {
    n: "01",
    initials: "IG",
    name: "Ibrahim Germaine",
    role: "Founder · Automation & AI",
    bio: "Spent a decade running operations inside businesses that were losing time to manual work. Now builds the automation practice at Ligeff.",
  },
  {
    n: "02",
    initials: "M·A",
    name: "Lead Visual Architect",
    role: "Founder · 3D & Visuals",
    bio: "Trained in architectural visualization. Leads every render and walkthrough, and would rather ship nothing than ship a fake-looking image.",
  },
  {
    n: "03",
    initials: "S·O",
    name: "Lead Search Architect",
    role: "Founder · Websites & Search",
    bio: "Has been building and ranking websites since before AI search existed. Now makes sure AI gives back our client's name, not a competitor's.",
  },
  {
    n: "04",
    initials: "A·K",
    name: "Studio Producer",
    role: "Projects, numbers, deadlines",
    bio: "Keeps the studio honest. Won't open a project until the cost is written down as a number, and won't close it until that number is hit.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">About</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Four people. Three services.
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                We are four senior specialists. We take on a small number of
                projects each quarter, we charge properly for them, and we
                only accept work where we can show the numbers will work.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Figure
                src="/samples/pillar-03-okunade/ok-portrait.jpg"
                alt="Portrait representing the studio's editorial style"
                ratio="4 / 5"
                label="THE STUDIO · LAGOS"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="section-screen border-b border-line bg-bone">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index="01">Why we exist</Eyebrow>
              <h2 className="text-headline mt-6 max-w-[16ch]">
                We built the studio we wished we could have hired.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-lg text-ink-2 measure">
                Every person on this team spent years inside businesses that
                were quietly losing money to problems we now fix for clients.
                We built Ligeff to be the studio that does the work cleanly,
                takes the project seriously, and refuses to sell you things
                you don't need.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-10">
                <div>
                  <p className="stat-number">4</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Senior staff</p>
                </div>
                <div>
                  <p className="stat-number">0</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Junior staff</p>
                </div>
                <div>
                  <p className="stat-number">3</p>
                  <p className="text-eyebrow mt-3 text-ink-3">Services only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <Eyebrow index="02">The team</Eyebrow>
          <h2 className="text-headline mt-6 max-w-[18ch]">
            No junior staff. No offshore team.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-16">
            {TEAM.map((m, i) => (
              <article
                key={m.n}
                className={`group flex flex-col gap-5 ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="frame" style={{ aspectRatio: "4 / 5" }}>
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
                        fontSize: "clamp(64px, 7vw, 112px)",
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
                <p className="text-body text-ink-2 measure">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="section-screen border-b border-line bg-deep">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index="03" inverse>
                How we work
              </Eyebrow>
              <h2 className="text-headline mt-6 text-ink-inverse max-w-[16ch]">
                You talk to the person doing the work.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-lg text-ink-2-inverse measure">
                No account managers. The person who pitches the project is
                the person who builds it, and the person who reports on the
                numbers every thirty days. We meet weekly, send a written
                report monthly, and end the project the moment the numbers
                are hit.
              </p>
              <Link href="/contact" className="btn btn-on-dark mt-10 w-fit">
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
