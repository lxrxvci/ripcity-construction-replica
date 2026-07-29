import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { createGlobalSchema } from "@/lib/seo";
import { PAGE_DESCRIPTIONS, SITE } from "@/lib/company";

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
        <JsonLd schema={globalSchema} />
        {children}
      </body>
    </html>
  );
}
