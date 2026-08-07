import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { HubspotMeetings } from "@/components/HubspotMeetings";

export const metadata: Metadata = {
  title: "Meet Alex | Velocity-B",
  description:
    "Book time with Alex Simonson — a discovery call, or whatever's on your mind. Pick a slot below and we'll confirm by Google Meet.",
};

export default function MeetAlexPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
          <AnimatedChevron className="text-blue" />
          Hello!
        </h1>
        <h2 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
          Book a Meeting
        </h2>
      </section>

      {/* Copy + booking calendar */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Please use the calendar on the right to book a discovery call,
              or whatever&rsquo;s on your mind. Once you&rsquo;ve chosen a
              time that works for you, I&rsquo;ll get back to you and
              confirm. We use Google Meet, so you&rsquo;ll just need a
              browser &mdash; nothing to download.
            </p>

            <p className="mt-6 text-lg leading-[1.7] text-navy">
              Cheers!
              <br />
              Alex
            </p>

            <a
              href="https://www.linkedin.com/in/alex-simonson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alex Simonson on LinkedIn"
              className="group relative mt-6 block h-[120px] w-[120px] overflow-hidden"
            >
              <Image
                src="/team/alex.jpg"
                alt="Alex Simonson"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-navy/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <p className="mt-6 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              PS: If you can&rsquo;t find a slot that works, or there&rsquo;s
              a problem with the form, then please contact me through the{" "}
              <a href="/contact" className="font-bold text-navy underline">
                contact form
              </a>
              .
            </p>
          </div>

          <div className="sticky top-8 border-t-[6px] border-orange bg-[#fafbfd] px-8 py-9">
            <HubspotMeetings meetingUrl="https://meetings-eu1.hubspot.com/simonson?embed=true" />
            <p className="mt-6 text-sm text-[#9096a8]">
              Completing a booking implies permission to contact you back —
              see our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-navy underline"
              >
                privacy policy
              </a>{" "}
              for how we handle your data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
