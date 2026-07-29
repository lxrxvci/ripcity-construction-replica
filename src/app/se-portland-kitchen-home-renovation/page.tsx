import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { SEKitchenHeroSection } from "@/components/sections/SEKitchenHeroSection";
import { SEKitchenGallerySection } from "@/components/sections/SEKitchenGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "SE Portland Kitchen Remodel & Home Renovation";
const description =
  "View this Southeast Portland kitchen and home renovation by Rip City Construction. Custom white oak cabinetry, quartz countertops, handmade ceramic backsplash tile, and a bright, connected living space.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/se-portland-kitchen-home-renovation"});

export default function SePortlandKitchenHomeRenovationPage() {
  const path = "/se-portland-kitchen-home-renovation";

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
          { name: "SE Portland Kitchen Renovation", path: "/se-portland-kitchen-home-renovation" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <SEKitchenHeroSection />
        <SEKitchenGallerySection />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
