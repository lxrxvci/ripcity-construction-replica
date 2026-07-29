import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { NixonHeroSection } from "@/components/sections/NixonHeroSection";
import { NixonGallerySection } from "@/components/sections/NixonGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Nixon ADU | Transform Your Space Today – Get Started Now";
const description =
  "A complete basement ADU conversion in Milwaukie, Oregon by Rip City Construction. Three bedrooms, two bathrooms, a full kitchen, custom woodwork, and flexible living space.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/nixon-adu"});

export default function NixonAduPage() {
  const path = "/nixon-adu";

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
          { name: "Nixon ADU", path: "/nixon-adu" },
        ]}
      />
      <main id="page" className="flex-1">
        <JsonLd schema={jsonLd} />
        <NixonHeroSection />
        <NixonGallerySection />
      </main>
      <section className="bg-accent py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <Button href="/contact" variant="secondary" size="lg">
            Request a Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
