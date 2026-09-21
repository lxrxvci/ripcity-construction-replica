/**
 * Contact page (/contact): the inquiry form and direct contact block.
 *
 * Why it exists: the site's single lead-capture surface.
 * How it works: renders ContactFormSection (Formspree-backed); metadata
 * from PAGE_DESCRIPTIONS.contact plus createContactPageSchema JSON-LD.
 * How to change it: form behavior lives in ContactFormSection; set
 * NEXT_PUBLIC_FORMSPREE_FORM_ID to activate submissions.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createContactPageSchema, createJsonLdGraph, createMetadata } from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";

const pageTitle = "Contact Portland Remodeling Contractor";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: PAGE_DESCRIPTIONS.contact,
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = createJsonLdGraph([createContactPageSchema()]);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <main className="flex-1 pt-28 lg:pt-32">
        <JsonLd schema={jsonLd} />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
