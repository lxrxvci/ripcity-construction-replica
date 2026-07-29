import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesFeaturedSection } from "@/components/sections/ServicesFeaturedSection";
import { ServicesListSection } from "@/components/sections/ServicesListSection";
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
        <ServicesListSection />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
