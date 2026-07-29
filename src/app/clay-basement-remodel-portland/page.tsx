import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter } from "@/components/Footer";
import { ClayBasementHeroSection } from "@/components/sections/ClayBasementHeroSection";
import { ClayBasementGallerySection } from "@/components/sections/ClayBasementGallerySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";
import imageCaptions from "../../../docs/research/image-captions.json";

const PAGE_URL = "http://www.ripcityconstruction.com/clay-basement-remodel-portland";

const pageTitle = "Portland Basement Remodel | Finished Basement Renovation & Living Space Addition";
const description =
  "View this Southeast Portland basement remodel by Rip City Construction. A finished basement with a new family room, bedroom, bathroom, laundry area, egress window, and modern finishes.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description,
  path: "/clay-basement-remodel-portland"});

interface ImageCaptionEntry {
  localPath: string;
  originalUrl: string;
  pages: string[];
  titles: string[];
  captions: string[];
}

const typedImageCaptions = imageCaptions as ImageCaptionEntry[];

const galleryImages = typedImageCaptions
  .filter((entry) => entry.pages.includes(PAGE_URL))
  .map((entry) => ({
    src: entry.localPath.replace(/^public\//, "/"),
    alt: entry.captions[0] ?? entry.titles[0] ?? ""}));

const heroImage =
  galleryImages.find((image) => image.src.includes("Clay_Basment_1")) ?? galleryImages[0];

const heroImageAlt =
  heroImage?.alt || "Finished basement family room and bedroom remodel in Southeast Portland.";

export default function ClayBasementRemodelPortlandPage() {
  const path = "/clay-basement-remodel-portland";

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
          { name: "Clay Basement Remodel", path: "/clay-basement-remodel-portland" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <ClayBasementHeroSection imageSrc={heroImage.src} imageAlt={heroImageAlt} />
        <ClayBasementGallerySection images={galleryImages} />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
