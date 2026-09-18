/**
 * Services index (/services): hero plus featured service cards.
 *
 * Why it exists: the hub that routes visitors to each service page.
 * How it works: composes ServicesHeroSection and ServicesFeaturedSection
 * (both stamped from services-page.json / services-featured.json);
 * metadata plus OfferCatalog + WebPage JSON-LD.
 * How to change it: edit services-page.json and services-featured.json;
 * new services also need a SERVICE_PAGES entry in lib/company.ts for
 * schema coverage.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesFeaturedSection } from "@/components/sections/ServicesFeaturedSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createOfferCatalogSchema,
  createWebPageSchema} from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";

const pageTitle = "Remodeling Services in Portland, OR";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: PAGE_DESCRIPTIONS.services,
  path: "/services"});

export default function ServicesPage() {
  const path = "/services";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description: PAGE_DESCRIPTIONS.services }),
    createOfferCatalogSchema(),
  ]);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <main>
        <JsonLd schema={jsonLd} />
        <ServicesHeroSection />
        <ServicesFeaturedSection />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
