"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CHANGED_EVENT,
  COOKIE_REOPEN_EVENT,
  hasConsented,
} from "./CookieConsent";

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
}

type HbsptGlobal = { forms: { create: (opts: unknown) => void } };

/**
 * Thin wrapper around HubSpot's v2 forms embed script.
 *
 * The embed script drops HubSpot's own tracking cookie (hubspotutk) as soon
 * as it loads, so it's gated behind the same site-wide cookie consent as
 * GTM rather than treated as strictly necessary — one toggle covers both.
 * Only mounts once `vb-consent=accepted`; otherwise shows a plain email
 * fallback with a link back into the consent banner.
 *
 * Renders a target div and calls hbspt.forms.create once the embed script is
 * available. Next.js's <Script> dedupes tags by `src` across the whole app,
 * so if this component is mounted on more than one page (e.g. /velocity-sprint
 * and /contact both load the same HubSpot script), `onLoad` only ever fires
 * for whichever page's mount happened to trigger the very first load in the
 * client session — a client-side navigation to a *different* page reusing
 * that same script will never get its onLoad callback, leaving the target
 * div empty until a hard refresh. Instead, each mount actively checks for
 * window.hbspt itself (polling briefly if it isn't ready yet), so it works
 * regardless of which page loaded the script first.
 */
export function HubspotForm({ portalId, formId, region, targetId }: HubspotFormProps) {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasConsented());
    const onChange = () => setConsented(hasConsented());
    window.addEventListener(COOKIE_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CHANGED_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!consented) return;

    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | undefined;

    const createForm = () => {
      const hbspt = (window as unknown as { hbspt?: HbsptGlobal }).hbspt;
      if (hbspt && !cancelled) {
        hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
        });
      }
    };

    if ((window as unknown as { hbspt?: HbsptGlobal }).hbspt) {
      createForm();
    } else {
      interval = setInterval(() => {
        if ((window as unknown as { hbspt?: HbsptGlobal }).hbspt) {
          if (interval) clearInterval(interval);
          createForm();
        }
      }, 100);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
    };
  }, [consented, portalId, formId, region, targetId]);

  if (!consented) {
    return (
      <div className="border-2 border-hair p-6 text-lg leading-[1.7] text-[#42465c]">
        <p>
          This form needs cookies switched on to load.{" "}
          <button
            onClick={() => window.dispatchEvent(new Event(COOKIE_REOPEN_EVENT))}
            className="font-bold text-navy underline"
          >
            Update your cookie preferences
          </button>{" "}
          or email us directly at{" "}
          <a href="mailto:hello@velocity-b.com" className="font-bold text-navy underline">
            hello@velocity-b.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <div id={targetId} />
      <Script src={`//js-${region}.hsforms.net/forms/embed/v2.js`} strategy="afterInteractive" />
    </>
  );
}
