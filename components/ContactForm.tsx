"use client";

import { useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";

interface ContactFormProps {
  /** Where the form sits, e.g. "Contact page" — goes into the email subject. */
  source: string;
  /** Prefix for input ids, so two forms never clash on one page. */
  idPrefix: string;
}

const label = "mb-2 block text-sm font-bold text-navy";
const input =
  "w-full border-2 border-hair bg-white px-4 py-3 text-base text-navy focus:border-navy focus:outline-none";

/**
 * Native enquiry form, delivered by email via Web3Forms (replaced the HubSpot
 * embed after the move to HubSpot Free). No CRM record, no third-party script
 * and no cookies, so it isn't gated behind cookie consent.
 */
export function ContactForm({ source, idPrefix }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("subject", `New enquiry — ${source}`);
    data.set("source", source);

    setStatus("sending");
    const ok = await submitToWeb3Forms(data);
    if (ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-navy p-6 text-lg leading-[1.7] text-navy">
        Thanks — we&rsquo;ve got your message and we&rsquo;ll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={`${idPrefix}-name`} className={label}>
          Name
        </label>
        <input id={`${idPrefix}-name`} name="name" type="text" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={label}>
          Email
        </label>
        <input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-company`} className={label}>
          Company
        </label>
        <input id={`${idPrefix}-company`} name="company" type="text" autoComplete="organization" className={input} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className={label}>
          What&rsquo;s going on?
        </label>
        <textarea id={`${idPrefix}-message`} name="message" required rows={5} className={`${input} resize-y`} />
      </div>

      {/* Web3Forms honeypot — bots fill it in, people never see it */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p className="text-base leading-[1.7] text-[#42465c]">
          Something went wrong sending that. Please email us at{" "}
          <a href="mailto:hello@velocity-b.com" className="font-bold text-navy underline">
            hello@velocity-b.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
