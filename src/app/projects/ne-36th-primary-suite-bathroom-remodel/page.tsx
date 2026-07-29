import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { Ne36thHeroSection } from "@/components/sections/Ne36thHeroSection";
import { Ne36thGallerySection } from "@/components/sections/Ne36thGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "NE 36th Primary Suite & Bathroom Remodel | Rip City Construction & Remodeling";
const description =
  "View this Northeast Portland primary suite and bathroom remodel by Rip City Construction. Custom walk-in shower, double vanity, custom tile work, walk-in closet, laundry room, and spa-inspired finishes.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/projects/ne-36th-primary-suite-bathroom-remodel"});

export default function Ne36thPrimarySuiteBathroomRemodelPage() {
  const path = "/projects/ne-36th-primary-suite-bathroom-remodel";

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
          { name: "NE 36th Bathroom Remodel", path: "/projects/ne-36th-primary-suite-bathroom-remodel" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <Ne36thHeroSection />
        <Ne36thGallerySection />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
