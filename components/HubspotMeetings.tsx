"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CHANGED_EVENT,
  COOKIE_REOPEN_EVENT,
  hasConsented,
} from "./CookieConsent";

interface HubspotMeetingsProps {
  meetingUrl: string;
}

/**
 * Thin wrapper around HubSpot's Meetings embed script.
 *
 * Like HubspotForm, this drops HubSpot's own tracking cookie as soon as it
 * loads, so it's gated behind the same site-wide cookie consent rather than
 * treated as strictly necessary — one toggle covers both.
 *
 * Unlike HubspotForm, the Meetings embed script (MeetingsEmbedCode.js) scans
 * the DOM for `.meetings-iframe-container` elements and keeps watching for
 * new ones, so it doesn't need the manual window.hbspt poll HubspotForm uses
 * to work around Next's <Script> src-deduping. If a second page embeds a
 * meetings widget later and the same script-dedupe issue shows up here too,
 * copy the poll pattern from HubspotForm.
 */
export function HubspotMeetings({ meetingUrl }: HubspotMeetingsProps) {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasConsented());
    const onChange = () => setConsented(hasConsented());
    window.addEventListener(COOKIE_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CHANGED_EVENT, onChange);
  }, []);

  if (!consented) {
    return (
      <div className="border-2 border-hair p-6 text-lg leading-[1.7] text-[#42465c]">
        <p>
          This calendar needs cookies switched on to load.{" "}
          <button
            onClick={() => window.dispatchEvent(new Event(COOKIE_REOPEN_EVENT))}
            className="font-bold text-navy underline"
          >
            Update your cookie preferences
          </button>{" "}
          or get in touch through the{" "}
          <a href="/contact" className="font-bold text-navy underline">
            contact form
          </a>{" "}
          instead.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="meetings-iframe-container" data-src={meetingUrl} />
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
    </>
  );
}
