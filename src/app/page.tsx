import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, AboutFooter } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { createJsonLdGraph, createMetadata, createWebPageSchema, createOfferCatalogSchema } from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const pageTitle = "Portland Kitchen Remodels, ADUs, and Home Renovations | Rip City Construction";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: PAGE_DESCRIPTIONS.home,
  path: "/"});

export default function HomePage() {
  const path = "/";
  const description = PAGE_DESCRIPTIONS.home;

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createOfferCatalogSchema(),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }]} />
      <main>
        <JsonLd schema={jsonLd} />
        <HeroSection />
        <RecentProjectsSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
