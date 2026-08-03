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
        storage stays denied until CookieConsent flips it via consent.update.
        beforeInteractive is required for this to land ahead of the GTM tag.
      */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied'
          });
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
