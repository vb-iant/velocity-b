"use client";

import Script from "next/script";
import { useEffect } from "react";

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
  useEffect(() => {
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
  }, [portalId, formId, region, targetId]);

  return (
    <>
      <div id={targetId} />
      <Script src={`//js-${region}.hsforms.net/forms/embed/v2.js`} strategy="afterInteractive" />
    </>
  );
}
