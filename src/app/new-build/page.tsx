import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ServiceIntroSection } from "@/components/sections/ServiceIntroSection";
import { NewBuildGallerySection } from "@/components/sections/NewBuildGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "ADU Builder Portland OR, Home Additions Contractor";
const description =
  "ADU builder and home additions contractor in Portland, Oregon. Custom builds, detached ADUs, and accessory dwelling units by Rip City Construction.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/new-build"});

export default function NewBuildPage() {
  const path = "/new-build";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("newBuild"),
  ]);

  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "New Builds", path: "/new-build" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <ServiceIntroSection
          eyebrow="Portland ADU Builder & Home Additions Contractor"
          title="New Builds, ADUs & Home Additions in Portland, Oregon"
          paragraphs={[
            "Rip City Construction builds custom accessory dwelling units and home additions throughout Portland — detached backyard ADUs, garage conversions, and ground-up construction designed for rental income, multigenerational living, or simply more space.",
            "From feasibility and permitting through final finishes, we manage the entire build in-house. Portland's ADU rules are complex; our experience with local zoning and permitting keeps projects moving. See our recent ADU and addition projects below.",
          ]}
        />
        <NewBuildGallerySection />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
