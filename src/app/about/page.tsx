/**
 * About page (/about): story hero plus About schema.
 *
 * Why it exists: trust page for a referral-driven contractor.
 * How it works: renders AboutHeroSection (inline copy replicating the
 * original site); metadata from PAGE_DESCRIPTIONS.about plus
 * createAboutPageSchema JSON-LD.
 * How to change it: body copy lives in AboutHeroSection (inline, not
 * portal-stamped); footer/about portal copy is sections.about in
 * sections.json, which the Footer renders on every page.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createAboutPageSchema, createJsonLdGraph, createMetadata } from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";

const pageTitle = "Portland Remodeling Contractor | Kitchens, ADUs & Additions";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: PAGE_DESCRIPTIONS.about,
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = createJsonLdGraph([createAboutPageSchema()]);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <main id="page" className="flex-1">
        <JsonLd schema={jsonLd} />
        <AboutHeroSection />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
