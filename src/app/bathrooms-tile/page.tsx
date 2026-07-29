import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ServiceIntroSection } from "@/components/sections/ServiceIntroSection";
import { BathroomsTileGallerySection } from "@/components/sections/BathroomsTileGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Bathroom Remodeling & Tile Portland";
const description =
  "Custom bathroom remodeling and tile installation in Portland, Oregon. Rip City Construction designs and builds durable, beautiful bathrooms with showers, vanities, and tilework.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/bathrooms-tile"});

export default function BathroomsTilePage() {
  const path = "/bathrooms-tile";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("bathroom"),
  ]);

  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Bathroom Remodeling", path: "/bathrooms-tile" },
        ]}
      />
      <main className="flex-1">
        <JsonLd schema={jsonLd} />
        <ServiceIntroSection
          eyebrow="Portland Bathroom Remodeling Contractor"
          title="Bathroom Remodeling & Tile Installation in Portland, Oregon"
          paragraphs={[
            "Rip City Construction designs and builds custom bathrooms for Portland homeowners — from walk-in showers and soaking tubs to vanities, flooring, and detailed tilework. Every bathroom we remodel is planned around durable materials and craftsmanship that holds up to daily use.",
            "Whether you're updating a hall bath or transforming a primary suite, our team manages the full scope: demolition, plumbing and electrical coordination, waterproofing, tile setting, and finish carpentry. Take a look at our recent bathroom projects below.",
          ]}
        />
        <BathroomsTileGallerySection />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
