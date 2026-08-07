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
      {/* Hero / intro */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1fr_auto]">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />
              Hello!
            </h1>

            <p className="mt-6 max-w-[560px] text-lg leading-[1.7] text-[#42465c]">
              Pick whatever works for you below — a discovery call, a
              specific problem you&rsquo;re wrestling with, or just a chat
              about where B2B tech go-to-market is heading. Choose a slot
              that suits and I&rsquo;ll confirm it, along with a Google Meet
              link; there&rsquo;s nothing to download, just a browser.
            </p>
            <p className="mt-4 max-w-[560px] text-lg leading-[1.7] text-[#42465c]">
              If nothing on the calendar works, or something&rsquo;s gone
              wrong with it, get in touch through the{" "}
              <a href="/contact" className="font-bold text-navy underline">
                contact form
              </a>{" "}
              instead and I&rsquo;ll sort you out directly.
            </p>

            <p className="mt-6 text-lg leading-[1.7] text-navy">
              Cheers,
              <br />
              Alex
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/alex-simonson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alex Simonson on LinkedIn"
            className="group relative block h-[120px] w-[120px] shrink-0 overflow-hidden"
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
        </div>
      </section>

      {/* Booking calendar */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="border-t-[6px] border-orange bg-[#fafbfd] px-8 py-9">
          <HubspotMeetings meetingUrl="https://meetings-eu1.hubspot.com/simonson?embed=true" />
        </div>
        <p className="mt-6 max-w-[640px] text-sm text-[#9096a8]">
          Completing a booking implies permission to contact you back — see
          our{" "}
          <a
            href="/privacy-policy"
            className="font-semibold text-navy underline"
          >
            privacy policy
          </a>{" "}
          for how we handle your data.
        </p>
      </section>
    </main>
  );
}
