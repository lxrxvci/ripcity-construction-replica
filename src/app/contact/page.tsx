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
