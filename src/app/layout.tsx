/**
 * Root layout: fonts, global metadata, global JSON-LD, and the portal preview bridge inject.
 *
 * Why it exists: every route inherits this shell; it is also the
 * documentation home of the managed bridge (the bridge itself lives in
 * src/lib/preview-bridge.ts and is exempt from the header rule).
 * How it works: loads Poppins/Manrope via next/font, sets metadata from
 * SITE/PAGE_DESCRIPTIONS in lib/company (robots noindex unless
 * VERCEL_ENV=production), renders the sitewide schema graph via JsonLd +
 * createGlobalSchema, and injects PREVIEW_BRIDGE as the first child of
 * <body> via a raw <script> (never next/script - it must run before
 * hydration).
 * How to change it: global metadata changes go through lib/company.ts;
 * font changes here. Never edit the bridge string here or in
 * preview-bridge.ts - it is vendored byte-identical to the client-porting
 * skill canonical.
 */
import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { createGlobalSchema } from "@/lib/seo";
import { PAGE_DESCRIPTIONS, SITE } from "@/lib/company";
import { PREVIEW_BRIDGE } from "@/lib/preview-bridge";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const generateMetadata = (): Metadata => {
  const isProduction = process.env.VERCEL_ENV === "production";

  return {
    metadataBase: new URL(SITE.url),
    title: {
      template: "%s | Rip City Construction",
      default: "Portland Kitchen Remodels, ADUs, and Home Renovations | Rip City Construction",
    },
    description: PAGE_DESCRIPTIONS.home,
    openGraph: {
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      creator: SITE.twitterHandle,
    },
    icons: {
      icon: "/seo/favicon_735b103a.ico",
      shortcut: "/seo/favicon_735b103a.ico",
      apple: "/seo/favicon_735b103a.ico",
    },
    robots: {
      index: isProduction,
      follow: true,
      googleBot: {
        index: isProduction,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = createGlobalSchema();

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Agentic PNW portal preview bridge v4: raw inline script, first
            child of <body> so it is listening before paint. Never next/script. */}
        <script dangerouslySetInnerHTML={{ __html: PREVIEW_BRIDGE }} />
        <JsonLd schema={globalSchema} />
        {children}
      </body>
    </html>
  );
}
