/**
 * Hawthorne addition project page (/southeast-hawthorne-addition).
 *
 * Why it exists: project proof page for the whole-home addition.
 * How it works: HawthorneHeroSection + HawthorneGallerySection (inline);
 * WebPage JSON-LD.
 * How to change it: copy and images inline in the two sections.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { HawthorneHeroSection } from "@/components/sections/HawthorneHeroSection";
import { HawthorneGallerySection } from "@/components/sections/HawthorneGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Southeast Portland Home Addition & Whole Home Remodel";
const description =
  "View this Southeast Hawthorne whole home addition and renovation by Rip City Construction. Expanded living spaces, custom primary suite, bathrooms, outdoor entertaining areas, and a complete exterior transformation.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/southeast-hawthorne-addition"});

export default function SoutheastHawthorneAdditionPage() {
  const path = "/southeast-hawthorne-addition";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/portland-remodeling-projects" },
          { name: "Hawthorne Addition", path: "/southeast-hawthorne-addition" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <HawthorneHeroSection />
        <HawthorneGallerySection />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
