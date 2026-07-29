import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ADUHeroSection } from "@/components/sections/ADUHeroSection";
import { AduHomeAdditionsPortlandIntroSection } from "@/components/sections/AduHomeAdditionsPortlandIntroSection";
import { AduHomeAdditionsPortlandSwProjectSection } from "@/components/sections/AduHomeAdditionsPortlandSwProjectSection";
import { AduHomeAdditionsPortlandNixonProjectSection } from "@/components/sections/AduHomeAdditionsPortlandNixonProjectSection";
import { ADUGallerySection } from "@/components/sections/ADUGallerySection";
import { AduHomeAdditionsPortlandBottomCtaSection } from "@/components/sections/AduHomeAdditionsPortlandBottomCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "ADU Builder & Home Additions Portland";
const description =
  "Experienced ADU builder and home additions contractor in Portland, Oregon. Detached ADUs, garage conversions, and seamless additions by Rip City Construction.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/adu-home-additions-portland"});

export default function AduHomeAdditionsPortlandPage() {
  const path = "/adu-home-additions-portland";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("aduHomeAdditions"),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "ADUs & Home Additions", path: "/adu-home-additions-portland" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <ADUHeroSection />
        <AduHomeAdditionsPortlandIntroSection />
        <AduHomeAdditionsPortlandSwProjectSection />
        <AduHomeAdditionsPortlandNixonProjectSection />
        <ADUGallerySection />
        <AduHomeAdditionsPortlandBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
