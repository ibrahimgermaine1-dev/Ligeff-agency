import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { BriefForm } from "@/components/site/brief-form";

export const metadata = {
  title: "Contact — Begin a brief",
  description:
    "Tell us where the money is leaking. We read every brief personally and reply within two working days, Monday to Thursday.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  return <ContactContent searchParams={searchParams} />;
}

async function ContactContent({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const params = await searchParams;
  const sent = params.sent === "1";

  return (
    <PageShell>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 lg:pt-32 lg:pb-20">
          <Eyebrow index="00">Contact · Begin a brief</Eyebrow>
          <h1 className="text-display mt-8 max-w-[16ch]">
            Tell us where the money is leaking.
          </h1>
          <p className="text-body-lg mt-10 max-w-[62ch] text-ink-2">
            We do not need a polished brief, we need the symptom written
            down as honestly as you can write it, and we will tell you
            inside one conversation whether we are the right studio to
            close the leak, which pillar the leak lives inside, and what
            the math looks like before we ever send a proposal.
          </p>
          <p className="text-body-lg mt-6 max-w-[62ch] text-ink-2">
            We take on a small number of engagements each quarter and we
            close the quarter when the slots are full, which means the
            sooner the brief arrives the sooner we can read it, and the
            earlier in the quarter you send it the more likely there is
            still a slot open.
          </p>
        </div>
      </section>

      {/* ============================================================
          FORM + SIDE NOTES — asymmetric 7/5
          ============================================================ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-32">
          {sent ? (
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow index="01">Received</Eyebrow>
                <h2 className="text-display mt-8 text-ink">
                  The brief is in.
                </h2>
                <p className="text-body-lg mt-8 max-w-[58ch] text-ink-2">
                  We have it, we will read it personally inside the next two
                  working days, and we will reply with one of three answers:
                  yes, we are the right studio and here is the math; no, we
                  are not the right studio and here is the studio that is;
                  or we need one more conversation before we can tell you
                  which.
                </p>
                <p className="text-body-lg mt-6 max-w-[58ch] text-ink-2">
                  If you do not hear from us inside two working days, the
                  brief did not arrive — send it again to
                  <a
                    href="mailto:hello@ligeff.agency"
                    className="link-underline ml-2 text-ink"
                  >
                    hello@ligeff.agency
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
                <Link href="/" className="btn-secondary w-fit">
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <Eyebrow index="01">The brief</Eyebrow>
                <h2 className="text-headline mt-6">
                  Five fields. Two minutes. One honest paragraph.
                </h2>
                <div className="mt-12">
                  <BriefForm />
                </div>
              </div>

              {/* Side notes */}
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
                <Eyebrow index="02">Before you send</Eyebrow>
                <div className="mt-8 flex flex-col gap-10">
                  <div>
                    <h3 className="text-title text-ink">
                      Write the leak, not the brief.
                    </h3>
                    <p className="text-body mt-3 text-ink-2">
                      The first thing we ask is where the money is leaking,
                      not what you want us to build, because the work we end
                      up building is decided by the leak, not by the brief,
                      and a brief written before the leak is understood is a
                      brief that solves the wrong problem.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">
                      Pick the pillar if you know it.
                    </h3>
                    <p className="text-body mt-3 text-ink-2">
                      If you already know which pillar the leak lives inside,
                      tell us, and it saves us a conversation; if you do not,
                      that is fine, and the first conversation will be the
                      conversation where we figure it out together.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">
                      We reply in two working days.
                    </h3>
                    <p className="text-body mt-3 text-ink-2">
                      We read every brief personally, we reply inside two
                      working days, and the reply is one of three answers —
                      yes, no, or one more conversation — so you will never
                      be left waiting for a response that never comes.
                    </p>
                  </div>
                </div>

                <div className="mt-12 border-t border-line pt-8">
                  <p className="text-eyebrow text-ink-3">Prefer email?</p>
                  <a
                    href="mailto:hello@ligeff.agency"
                    className="text-title mt-3 inline-block text-ink link-underline"
                  >
                    hello@ligeff.agency
                  </a>
                  <p className="text-caption mt-4 text-ink-3">
                    Monday to Thursday, 09:00 to 18:00 WAT
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          STUDIO NOTE
          ============================================================ */}
      <section className="border-b border-line bg-deep">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow index="03" inverse>
                Studio
              </Eyebrow>
              <h2 className="text-headline mt-8 text-ink-inverse">
                Lagos · remote across four continents
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-line-inverse">
              <p className="text-body-lg text-ink-2-inverse">
                We are based in Lagos and we work remotely with clients
                across four continents, which means there is almost always
                a working hour where your team and our team overlap, and the
                brief you send today will be read by a real person inside
                the next two working days no matter where you are sending it
                from.
              </p>
              <p className="text-body-lg mt-6 text-ink-2-inverse">
                We take meetings Monday to Thursday, we protect Fridays for
                deep work, and we do not work weekends, because the work is
                this good in part because we do not work weekends, and the
                moment we start working weekends the work will stop being
                this good.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
