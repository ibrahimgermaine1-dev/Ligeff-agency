import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow } from "@/components/site/section-header";
import { BriefForm } from "@/components/site/brief-form";

export const metadata = {
  title: "Contact — Start a project",
  description:
    "Tell us what's not working. We read every message personally and reply within two working days.",
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
      {/* HERO */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">Contact</Eyebrow>
              <h1 className="text-display mt-8 max-w-[14ch]">
                Tell us what's not working.
              </h1>
              <p className="text-body-lg mt-8 measure text-ink-2">
                We don't need a polished brief. Tell us, in plain words,
                what's costing you time or money, and we'll tell you in one
                conversation whether we can fix it.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
              <p className="text-eyebrow text-ink-3">Prefer email?</p>
              <a
                href="mailto:hello@ligeff.agency"
                className="text-title text-ink link"
              >
                hello@ligeff.agency
              </a>
              <p className="text-caption mt-2 text-ink-3">
                Mon–Thu · 09:00–18:00 WAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-screen border-b border-line">
        <div className="container-locked">
          {sent ? (
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Eyebrow index="01">Received</Eyebrow>
                <h2 className="text-display mt-8 text-ink max-w-[14ch]">
                  Got it. We'll reply in two days.
                </h2>
                <p className="text-body-lg mt-8 measure text-ink-2">
                  We read every message personally and reply within two
                  working days with a clear answer: yes we can help, no we
                  can't, or we need one more conversation first.
                </p>
                <Link href="/" className="btn btn-outline mt-10">
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow index="01">The brief</Eyebrow>
                <h2 className="text-headline mt-6 max-w-[20ch]">
                  Five fields. Two minutes. Plain words.
                </h2>
                <div className="mt-10">
                  <BriefForm />
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
                <Eyebrow index="02">Before you send</Eyebrow>
                <div className="mt-8 flex flex-col gap-8">
                  <div>
                    <h3 className="text-title text-ink">Be specific.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      Tell us the actual problem, not what you think the
                      solution should be.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">Pick a service if you can.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      If you're not sure which one fits, that's fine — the
                      first call will figure it out.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-title text-ink">We reply in two days.</h3>
                    <p className="text-body mt-2 text-ink-2">
                      Yes, no, or one more conversation. You won't be left
                      waiting.
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
