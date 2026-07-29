import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceIntroSection } from "@/components/sections/ServiceIntroSection";
import { ProjectPhotoshopGallerySection } from "@/components/sections/ProjectPhotoshopGallerySection";
import { ProjectPhotoshopBottomCtaSection } from "@/components/sections/ProjectPhotoshopBottomCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createServiceSchema,
  createWebPageSchema} from "@/lib/seo";

const pageTitle = "Commercial Remodeling Portland";
const description =
  "Commercial remodeling and tenant improvements in Portland, Oregon. Rip City Construction delivers quality craftsmanship for build-outs and business spaces.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/project-photoshop"});

interface ImageCaptionEntry {
  localPath: string;
  originalUrl: string;
  pages: string[];
  titles: string[];
  captions: string[];
}

export default async function ProjectPhotoshopPage() {
  const filePath = join(process.cwd(), "docs/research/image-captions.json");
  const fileContents = await readFile(filePath, "utf-8");
  const imageCaptions = JSON.parse(fileContents) as ImageCaptionEntry[];
  const PAGE_URL = "http://www.ripcityconstruction.com/project-photoshop";

  const galleryImages = imageCaptions
    .filter((entry) => entry.pages.includes(PAGE_URL))
    .map((entry) => ({
      src: entry.localPath.replace(/^public\//, "/"),
      alt: entry.captions[0] ?? entry.titles[0] ?? ""}));

  const path = "/project-photoshop";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description }),
    createServiceSchema("commercial"),
  ]);

  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Commercial Remodeling", path: "/project-photoshop" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <ServiceIntroSection
          eyebrow="Portland Commercial Remodeling Contractor"
          title="Commercial Remodeling & Tenant Improvements in Portland"
          paragraphs={[
            "Rip City Construction brings residential-grade craftsmanship to commercial spaces across Portland. We handle tenant improvements, office and retail build-outs, and light commercial renovations with the same organized, transparent process we bring to every home remodel.",
            "We work around your business schedule to minimize downtime, coordinate directly with property managers, and deliver finished spaces that are ready for customers and staff. Browse our recent commercial projects below.",
          ]}
        />
        <ProjectPhotoshopGallerySection images={galleryImages} />
        <ProjectPhotoshopBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
