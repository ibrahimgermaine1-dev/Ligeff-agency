import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { BriefForm } from "@/components/site/brief-form";

export const metadata = {
  title: "Contact — Begin a brief",
  description:
    "Tell us where the money is leaking. We read every brief personally and reply within two working days.",
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
          HERO — screen-fit, short
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">Contact · Begin a brief</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Tell us where the money is leaking.
              </h1>
              <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                We do not need a polished brief. We need the symptom written
                down honestly, and we will tell you inside one conversation
                whether we are the right studio to close the leak.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
              <p className="text-eyebrow text-ink-3">Prefer email?</p>
              <a
                href="mailto:hello@ligeff.agency"
                className="text-title text-ink link-underline"
              >
                hello@ligeff.agency
              </a>
              <p className="text-caption mt-2 text-ink-3">
                Monday to Thursday · 09:00–18:00 WAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FORM — screen-fit, asymmetric 7/5
          ============================================================ */}
      <section className="section-screen border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          {sent ? (
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Eyebrow index="01">Received</Eyebrow>
                <h2 className="text-display mt-8 text-ink max-w-[14ch]">
                  The brief is in.
                </h2>
                <p className="text-body-lg mt-8 max-w-[52ch] text-ink-2">
                  We will read it personally inside the next two working days,
                  and reply with one of three answers: yes, here is the math;
                  no, here is the studio that is; or we need one more
                  conversation before we can tell you which.
                </p>
                <Link href="/" className="btn-secondary mt-10">
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-7">
                <Eyebrow index="01">The brief</Eyebrow>
                <h2 className="text-headline mt-6 max-w-[20ch]">
                  Five fields. Two minutes. One honest paragraph.
                </h2>
                <div className="mt-10">
                  <BriefForm />
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
                <Eyebrow index="02">Before you send</Eyebrow>
                <div className="mt-8 flex flex-col gap-8">
                  <div>
                    <h3 className="text-title text-ink">Write the leak, not the brief.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      The work we build is decided by the leak, not by the
                      brief.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">Pick the pillar if you know it.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      If not, the first conversation will figure it out
                      together.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">We reply in two working days.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      Yes, no, or one more conversation. You will never be
                      left waiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
