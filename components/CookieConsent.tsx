"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "vb-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
export const COOKIE_REOPEN_EVENT = "vb-open-cookie-prefs";
export const COOKIE_CHANGED_EVENT = "vb-consent-changed";

type ConsentValue = "accepted" | "rejected";

function readConsentCookie(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)vb-consent=(accepted|rejected)/);
  return match ? (match[1] as ConsentValue) : null;
}

function writeConsentCookie(value: ConsentValue) {
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * Pushes a Consent Mode signal to dataLayer. Works regardless of whether GTM
 * or gtag.js is the thing reading it — GTM's built-in consent checks (set
 * per-tag in the container, e.g. on the GA4 Configuration tag) read these
 * same dataLayer entries. That per-tag "Require additional consent" setting
 * lives in the GTM UI itself and isn't something this codebase controls —
 * worth confirming it's switched on for the analytics tags in GTM-MCKMKJZ4.
 */
function pushConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsentCookie()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_REOPEN_EVENT, reopen);
  }, []);

  function handleAccept() {
    writeConsentCookie("accepted");
    pushConsent("granted");
    setVisible(false);
    window.dispatchEvent(new Event(COOKIE_CHANGED_EVENT));
  }

  function handleReject() {
    writeConsentCookie("rejected");
    pushConsent("denied");
    setVisible(false);
    window.dispatchEvent(new Event(COOKIE_CHANGED_EVENT));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hair bg-navy px-6 py-5 text-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        <p className="max-w-[640px] text-sm leading-[1.6] text-white/90">
          We use a couple of cookies for site analytics and to load our
          enquiry form. Nothing sold, nothing sinister — reject and we'll
          skip both; you can change your mind any time from the footer.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="inline-block border-2 border-white px-6 py-3 text-sm font-bold text-white"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="inline-block bg-white px-6 py-3 text-sm font-bold text-navy"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasConsented(): boolean {
  return readConsentCookie() === "accepted";
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
