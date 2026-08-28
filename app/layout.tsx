import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velocity-b-virid.vercel.app"),
  title: "Velocity-B",
  description:
    "Velocity-B — hands-on go-to-market advice for B2B tech companies, from people who've actually done the job.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
      {/*
        Consent Mode default: must run before GTM fires so analytics/ad
        storage stays denied until consent is known. This script also checks
        for an existing vb-consent-v2 cookie (set by CookieConsent.tsx on a
        previous visit) and immediately issues a consent update in the same
        synchronous, beforeInteractive script — not from a React useEffect
        deep in the body. GoogleTagManager loads with Next's afterInteractive
        strategy and sits earlier in the tree than CookieConsent, so relying
        on CookieConsent's own mount effect to re-announce stored consent was
        racing GTM's own init and reliably losing: gtm.init (the Google tag's
        only firing trigger) would fire before the effect ran, so returning
        visitors who'd already accepted were still generating consent-denied
        pings. Reading the cookie here removes the race entirely.
      */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied'
          });
          (function() {
            var match = document.cookie.match(/(?:^|;\\s*)vb-consent-v2=(accepted|rejected)/);
            if (match) {
              var state = match[1] === 'accepted' ? 'granted' : 'denied';
              gtag('consent', 'update', {
                analytics_storage: state,
                ad_storage: state
              });
            }
          })();
        `}
      </Script>
      <GoogleTagManager gtmId="GTM-MCKMKJZ4" />
      <body className="font-body bg-white text-navy">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCKMKJZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
