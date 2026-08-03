"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const HUBSPOT_FORM_OPTIONS = {
  portalId: "143941905",
  formId: "c3fe2036-41a3-4cf7-8026-9acd56b4888e",
  region: "eu1",
  target: "#hubspot-newsletter-form",
};

function createForm() {
  window.hbspt?.forms.create(HUBSPOT_FORM_OPTIONS);
}

export function NewsletterSignup() {
  useEffect(() => {
    // Handles client-side navigation between posts, where the HubSpot script is
    // already loaded from a previous page and next/script's onLoad won't fire again.
    if (window.hbspt) {
      createForm();
    }
  }, []);

  return (
    <div className="rounded-[10px] border border-hair bg-[#fafbfd] p-9">
      <h3 className="mb-1 font-display text-lg font-bold">Stay up to date</h3>
      <p className="mb-5 text-[15px] leading-[1.6] text-[#42465c]">
        Tips, new research, and ideas on creating velocity in sales and marketing — straight to
        your inbox.
      </p>
      <div id="hubspot-newsletter-form" />
      <Script
        src="https://js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={createForm}
      />
    </div>
  );
}
