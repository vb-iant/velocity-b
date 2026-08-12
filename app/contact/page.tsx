import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { HubspotForm } from "@/components/HubspotForm";

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";

export const metadata: Metadata = {
  title: "Contact | Velocity-B",
  description:
    "Drop us your details, or find us on LinkedIn, and let's have a proper conversation about what's actually going on in your business.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero + form */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />A quick conversation.
            </h1>
            <h2 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              No pitch deck required.
            </h2>

            <p className="mt-6 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              This site&rsquo;s a glimpse into how we work — every
              company&rsquo;s story is different, and we&rsquo;d like to hear
              yours. Drop us your details, or find us on LinkedIn, and
              let&rsquo;s have a proper conversation about what&rsquo;s
              actually going on in your business.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4">
              <Link href="/meet-alex" className={ctaSolid}>
                Book a Meeting
              </Link>
              <a
                href="https://www.linkedin.com/company/velocityb/"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaOutline}
              >
                Connect on LinkedIn
              </a>
              <a href="mailto:hello@velocity-b.com" className={ctaOutline}>
                Email us
              </a>
            </div>
          </div>

          <div className="sticky top-8 border-t-[6px] border-navy bg-[#fafbfd] px-8 py-9">
            <h3 className="font-display text-[22px] font-semibold">
              Tell us what&rsquo;s going on
            </h3>
            <p className="mt-2 text-base leading-[1.7] text-[#42465c]">
              A few details and we&rsquo;ll be in touch to set up a proper
              conversation.
            </p>

            <div className="mt-6">
              <HubspotForm
                portalId="143941905"
                formId="9a6ddf10-2fd2-45df-8613-c8fb61ba876b"
                region="eu1"
                targetId="contact-form"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
