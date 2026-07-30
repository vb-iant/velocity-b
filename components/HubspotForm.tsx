"use client";

import Script from "next/script";

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
}

/**
 * Thin wrapper around HubSpot's v2 forms embed script.
 * Renders a target div and calls hbspt.forms.create once the embed script loads.
 */
export function HubspotForm({ portalId, formId, region, targetId }: HubspotFormProps) {
  return (
    <>
      <div id={targetId} />
      <Script
        src={`//js-${region}.hsforms.net/forms/embed/v2.js`}
        strategy="afterInteractive"
        onLoad={() => {
          const hbspt = (window as unknown as { hbspt?: { forms: { create: (opts: unknown) => void } } })
            .hbspt;
          if (hbspt) {
            hbspt.forms.create({
              portalId,
              formId,
              region,
              target: `#${targetId}`,
            });
          }
        }}
      />
    </>
  );
}
