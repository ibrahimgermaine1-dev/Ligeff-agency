import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, SectionHeader } from "@/components/site/section-header";
import { Plate } from "@/components/site/plate";

export const metadata = {
  title: "About — A small, senior team that refuses the fourth offering",
  description:
    "Ligeff Agency is a four-person studio of senior specialists who build operational machines, immersive visual assets, and market dominance for a small number of serious clients each quarter.",
};

const TEAM = [
  {
    n: "01",
    initials: "IG",
    name: "Ibrahim Germaine",
    role: "Founder · Operational machines",
    bio: "Spent a decade running operations inside businesses that were quietly bleeding time and refunds through manual workflows, and built the automation practice at Ligeff to close that bleed permanently for the businesses he wishes he had been able to help ten years ago, and now leads every engagement inside Pillar 01 personally.",
    pillar: "01 — Operational Efficiency",
  },
  {
    n: "02",
    initials: "M·A",
    name: "Lead Visual Architect",
    role: "Founder · Immersive visual assets",
    bio: "Trained in architectural visualization and material-truth rendering, and now leads every walkthrough, every render, and every AI film that leaves the studio, with the discipline of someone who would rather ship nothing than ship a render that does not look like the building will look when it is built.",
    pillar: "02 — Immersive Visual Assets",
  },
  {
    n: "03",
    initials: "S·O",
    name: "Lead Search Architect",
    role: "Founder · Market dominance",
    bio: "Has been building and ranking serious web properties since before AI search existed, and now spends their days making sure that when a buyer asks an AI who to trust, the answer comes back as our client's name, and not as a competitor who showed up first because we were asleep.",
    pillar: "03 — Market Dominance",
  },
  {
    n: "04",
    initials: "A·K",
    name: "Studio Producer",
    role: "Engagements, math, deadlines",
    bio: "The person who keeps the studio honest, who refuses to let an engagement open until the leak has been written down as a number on a page, and who closes each engagement only when the number has been hit and the work has paid for itself inside the first ninety days.",
    pillar: "All three pillars",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* ============================================================
          HERO — long-form positioning statement
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 lg:pt-32 lg:pb-20">
          <Eyebrow index="00">About Ligeff Agency</Eyebrow>
          <h1 className="text-display mt-8 max-w-[16ch]">
            A small, senior team that refuses the fourth offering.
          </h1>
          <p className="text-body-lg mt-10 max-w-[62ch] text-ink-2">
            We are four people, and we do three things, and the discipline of
            refusing the fourth thing is the single reason the work in each
            of the three is as good as it is, because every time a studio
            says yes to a fourth offering it stops being a studio of
            specialists and starts being a generalist shop, and a generalist
            shop ships mediocre work in four directions instead of
            exceptional work in three.
          </p>
          <p className="text-body-lg mt-6 max-w-[62ch] text-ink-2">
            We take on a small number of engagements each quarter, we charge
            seriously for them, and we only accept work where the math is
            unambiguous, which means we end up saying no more often than we
            say yes, and that is the only way we know how to keep the work
            this good and the studio this small.
          </p>
        </div>
      </section>

      {/* ============================================================
          POSITIONING — what makes us not a generalist shop
          ============================================================ */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <Eyebrow index="01">Why we exist</Eyebrow>
              <h2 className="text-headline mt-8">
                We built the studio we wished we could have hired.
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body-lg text-ink-2">
                Every person on this team spent years inside businesses that
                were quietly losing money to one of the three leaks we now
                close for clients, and in every case the leak went unclosed
                for years because the businesses could not find a studio
                that did the work cleanly, took the engagement seriously,
                and refused to sell them a fourth thing they did not need.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                We built Ligeff to be that studio, which means we will never
                grow past a handful of engagements per quarter, we will never
                hire junior staff to do senior work, and we will never open
                a fourth pillar, no matter how often the market asks us to,
                because the moment we do any of those three things we become
                the kind of studio we built Ligeff to replace.
              </p>
              <p className="text-body-lg mt-6 text-ink-2">
                The result is a studio that takes longer to get a meeting
                with, charges more for the meeting once you get it, and ships
                work that closes the leak inside the first ninety days
                instead of dragging the engagement out across two quarters
                and a retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE TEAM — staggered asymmetric layout
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <SectionHeader
            index="02"
            eyebrow="The four of us"
            headline={
              <>
                Four senior specialists, <br className="hidden md:block" />
                no junior staff, no offshore team.
              </>
            }
            lede="Every engagement is led by one of the four people below, and the work is done by the same person who pitched it, which is the only way we know how to keep the promise that the work will pay for itself inside the first ninety days."
          />

          <div className="mt-20 flex flex-col gap-16">
            {TEAM.map((m, i) => (
              <article
                key={m.n}
                className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-12"
              >
                <div
                  className={`md:col-span-4 ${
                    i % 2 === 1 ? "md:order-2 md:col-start-9" : ""
                  }`}
                >
                  <Plate ratio="4 / 5" label={`PORTRAIT · ${m.n}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
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
                  </Plate>
                </div>
                <div
                  className={`md:col-span-7 ${
                    i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-6"
                  } flex flex-col gap-5`}
                >
                  <span className="text-eyebrow text-ink-3">{m.n}</span>
                  <h3 className="text-headline text-ink">{m.name}</h3>
                  <p className="text-caption text-ink-3 uppercase">
                    {m.role}
                  </p>
                  <p className="text-body-lg text-ink-2 max-w-[52ch]">
                    {m.bio}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-3 border-t border-line pt-4">
                    <span className="text-eyebrow text-ink-3">Leads</span>
                    <span className="text-body text-ink">{m.pillar}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE COLLABORATE — long form
          ============================================================ */}
      <section className="border-b border-line bg-deep">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow index="03" inverse>
                How we collaborate
              </Eyebrow>
              <h2 className="text-headline mt-8 text-ink-inverse">
                Direct line to the person doing the work.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-line-inverse">
              <p className="text-body-lg text-ink-2-inverse">
                You will not be passed to an account manager at Ligeff,
                because we do not have account managers, and the person who
                pitched you the engagement is the same person who builds the
                work and the same person who reports against the math every
                thirty days, which is the only way we know how to keep the
                promise that the work will close the leak inside the first
                ninety days.
              </p>
              <p className="text-body-lg mt-6 text-ink-2-inverse">
                We meet weekly during the build, we send a written report
                every thirty days against the number we agreed on at the
                start, and we end the engagement the moment the number is
                hit, even if that moment comes in week six instead of week
                twelve, because the point of the engagement is to close the
                leak and hand the keys back, not to keep the engagement
                open.
              </p>
              <p className="text-body-lg mt-6 text-ink-2-inverse">
                We work from Lagos and remotely across four continents, we
                take meetings Monday to Thursday, and we protect Fridays for
                deep work, which is the reason the work is this good and the
                reason we can keep the studio this small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSE
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              <Eyebrow index="04">The close</Eyebrow>
              <p className="text-display mt-8 text-ink">
                If you want a studio that does everything, we are not it.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
              <p className="text-body text-ink-2">
                If you want a small, senior team that does three things
                exceptionally well and refuses to do anything else, we should
                talk.
              </p>
              <Link href="/contact" className="btn-primary w-fit">
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
