import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { KitchenRemodelingPortlandHeroSection } from "@/components/sections/KitchenRemodelingPortlandHeroSection";
import { KitchenRemodelingPortlandIntroSection } from "@/components/sections/KitchenRemodelingPortlandIntroSection";
import { KitchenGallerySection } from "@/components/sections/KitchenGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Kitchen Remodeling Portland, OR";
const description =
  "Expert kitchen remodeling in Portland, Oregon. Custom cabinetry, countertops, layouts, and full kitchen renovations by Rip City Construction.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/kitchen-remodeling-portland"});

export default function KitchenRemodelingPortlandPage() {
  const path = "/kitchen-remodeling-portland";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("kitchen"),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Kitchen Remodeling", path: "/kitchen-remodeling-portland" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <KitchenRemodelingPortlandHeroSection />
        <KitchenRemodelingPortlandIntroSection />
        <KitchenGallerySection />

        <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-foreground">
          <img
            src="/images/Burnside_Kitchen_1_86683ebd.png"
            alt="Burnside kitchen remodel in Portland"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 px-6 py-16 text-center lg:px-10">
            <Button href="/contact" size="lg">
              Request a Walkthrough &rarr;
            </Button>
          </div>
        </section>

        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
