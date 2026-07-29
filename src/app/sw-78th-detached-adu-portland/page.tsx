import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { Sw78thHeroSection } from "@/components/sections/Sw78thHeroSection";
import { Sw78thGallerySection } from "@/components/sections/Sw78thGallerySection";
import { Sw78thProjectTextSection } from "@/components/sections/Sw78thProjectTextSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "SW 78th Detached ADU Construction | Portland ADU Builder";
const description =
  "Explore this detached ADU construction project in Southwest Portland. Rip City Construction built this custom grandmother suite from the ground up, including new utilities, full kitchen, bathroom, bedroom, study, and living space.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/sw-78th-detached-adu-portland"});

export default function Sw78thDetachedAduPage() {
  const path = "/sw-78th-detached-adu-portland";

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
          { name: "SW 78th Detached ADU", path: "/sw-78th-detached-adu-portland" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <Sw78thHeroSection />
        <Sw78thGallerySection />
        <Sw78thProjectTextSection />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
