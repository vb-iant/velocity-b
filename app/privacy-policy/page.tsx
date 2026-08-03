import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Velocity-B",
  description: "Privacy policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="mx-auto max-w-[820px] px-12 py-20">
        <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
          Privacy Policy
        </h1>

        <p className="mt-8 text-lg leading-[1.7] text-[#42465c]">
          This notice describes how Rockstar CMO Ltd &ndash; trading as
          Velocity B (&ldquo;we&rdquo; or &ldquo;us&rdquo;) handle the
          personal information that you may provide us with when
          transacting with us or visiting our website.
        </p>

        <div className="mt-14 space-y-14">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Your data protection rights
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              Under data protection law, you have rights including:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.7] text-[#42465c]">
              <li>
                Your right of access &ndash; You have the right to ask us
                for copies of your personal information.
              </li>
              <li>
                Your right to rectification &ndash; You have the right to
                ask us to rectify personal information you think is
                inaccurate. You also have the right to ask us to complete
                information you think is incomplete.
              </li>
              <li>
                Your right to erasure &ndash; You have the right to ask us
                to erase your personal information in certain
                circumstances.
              </li>
              <li>
                Your right to restriction of processing &ndash; You have
                the right to ask us to restrict the processing of your
                personal information in certain circumstances.
              </li>
              <li>
                Your right to object to processing &ndash; You have the
                right to object to the processing of your personal
                information in certain circumstances.
              </li>
              <li>
                Your right to data portability &ndash; You have the right
                to ask that we transfer the personal information you gave
                us to another organisation, or to you, in certain
                circumstances.
              </li>
              <li>
                You are not required to pay any charge for exercising your
                rights. If you make a request, we have one month to
                respond to you.
              </li>
              <li>Please contact us, if you wish to make a request.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              Contact Details
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              Velocity B &ndash; C/O Rockstar CMO Ltd, 49 Greek Street,
              London, W1D 4EG or use our{" "}
              <Link href="/contact" className="text-blue underline">
                contact us form
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              The type of personal information we collect
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              We currently collect and process the following personal
              data:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.7] text-[#42465c]">
              <li>
                Name and business contact details, including job title and
                company
              </li>
              <li>
                Web session data (for example, IP address and browser)
                captured when visiting our website or using our product
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              Why do we collect data?
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              Most of the personal information we process is provided to
              us directly by you for one of the following reasons:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.7] text-[#42465c]">
              <li>Sales and marketing communications</li>
              <li>To be able to transact with us and engage our services</li>
              <li>To provide a better website experience</li>
              <li>To optimize our marketing and messaging</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              Legal basis
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              Under the UK General Data Protection Regulation (UK GDPR),
              the lawful bases we rely on for processing this information
              are:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.7] text-[#42465c]">
              <li>Your consent</li>
              <li>We have a contractual obligation</li>
              <li>We have a legal obligation</li>
              <li>We have a legitimate interest</li>
            </ul>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              You can remove your consent at any time by unsubscribing
              from our email communications using the &lsquo;unsubscribe&rsquo;
              link in the communication or by emailing{" "}
              <a href="mailto:info@velocity-b.com" className="text-blue underline">
                info@velocity-b.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              How do we store your personal information?
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              We store your information in our sales and marketing
              systems. We ensure that all systems enable compliance with
              GDPR and local privacy laws in the countries in which our
              clients are based.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              Sharing your data
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              We do not share this data with any third party unless we are
              required by law or to complete a transaction you have
              authorized. This includes marketing partners in the case of
              a co-hosted event, provided your consent is obtained through
              the registration process. We may also share this data
              internally to fulfil the sales, marketing, and service
              activities listed above.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              How to complain
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              If you have any concerns about our use of your personal
              information, you can make a complaint to us at the address
              above or by emailing{" "}
              <a href="mailto:info@velocity-b.com" className="text-blue underline">
                info@velocity-b.com
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              You can also complain to the ICO if you are unhappy with how
              we have used your data.
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.7] text-[#42465c]">
              <li>
                Information Commissioner&rsquo;s Office &ndash; Wycliffe
                House, Water Lane, Wilmslow, Cheshire, SK9 5AF
              </li>
              <li>Helpline number: 0303 123 1113</li>
              <li>
                ICO website:{" "}
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue underline"
                >
                  www.ico.org.uk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              Any questions?
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              We respect your privacy and take seriously how we manage
              your data.
            </p>
            <p className="mt-4 text-base leading-[1.7] text-[#42465c]">
              If you have any questions or feedback on this policy, please{" "}
              <Link href="/contact" className="text-blue underline">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
