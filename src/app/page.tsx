/**
 * Homepage (/): hero, recent projects, services, reviews, FAQ.
 *
 * Why it exists: the primary ranking and conversion surface.
 * How it works: composes HeroSection, RecentProjectsSection,
 * ServicesSection, ReviewsSection (all portal-stamped), and FaqSection
 * (engine-managed faq.json), with metadata from PAGE_DESCRIPTIONS.home
 * and a WebPage + OfferCatalog + FAQPage JSON-LD graph. The FAQPage
 * schema is built from the same faq.json items FaqSection renders, so
 * markup and visible copy stay in sync.
 * How to change it: copy and images live in hero.json, sections.json,
 * projects.json, services.json, reviews.json, faq.json - edit those, not
 * this file. Section order changes happen here.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, AboutFooter } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFaqPageSchema, createJsonLdGraph, createMetadata, createWebPageSchema, createOfferCatalogSchema } from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import faq from "@/content/faq.json";

const pageTitle = "Remodeling Contractor in Portland | Rip City Construction";

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
    createFaqPageSchema(
      path,
      faq.items.map((item) => ({
        question: item.question,
        answerHtml: `<p>${item.answer}</p>`,
      }))
    ),
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
        <FaqSection />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
