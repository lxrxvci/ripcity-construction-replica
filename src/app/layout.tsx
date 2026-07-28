import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Portland Kitchen Remodels, ADUs, and Home Renovations | Rip City Construction",
  description:
    "Rip City Construction is a Portland remodeling contractor specializing in kitchen remodels, ADUs, home additions, bathrooms, basements, and whole-home renovations.",
  metadataBase: new URL("https://www.ripcityconstruction.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
