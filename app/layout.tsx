import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Velocity-B",
  description:
    "Velocity-B — hands-on go-to-market advice for B2B tech companies, from people who've actually done the job.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
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
      </body>
    </html>
  );
}
