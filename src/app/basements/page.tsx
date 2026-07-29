import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ServiceIntroSection } from "@/components/sections/ServiceIntroSection";
import { BasementsGallerySection } from "@/components/sections/BasementsGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Basement Finishing & Remodeling Portland";
const description =
  "Convert unfinished basements into family rooms, home theaters, or guest suites in Portland, OR. Quality basement remodeling by Rip City Construction.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/basements"});

export default function BasementsPage() {
  const path = "/basements";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("basement"),
  ]);

  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Basement Finishing", path: "/basements" },
        ]}
      />
      <main className="flex-1">
        <JsonLd schema={jsonLd} />
        <ServiceIntroSection
          eyebrow="Portland Basement Remodeling Contractor"
          title="Basement Finishing & Remodeling in Portland, Oregon"
          paragraphs={[
            "An unfinished basement is some of the most valuable square footage in your home. Rip City Construction converts Portland basements into comfortable, code-compliant living space — family rooms, home theaters, guest suites, home offices, and basement ADU conversions.",
            "From moisture management and egress windows to framing, insulation, and finishes, we handle every phase of the build. Browse our recent basement finishing projects below to see what's possible in your home.",
          ]}
        />
        <BasementsGallerySection />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
