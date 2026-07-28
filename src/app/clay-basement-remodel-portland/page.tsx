import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { ClayBasementHeroSection } from "@/components/sections/ClayBasementHeroSection";
import { ClayBasementGallerySection } from "@/components/sections/ClayBasementGallerySection";
import { PortlandProjectsRecentSection } from "@/components/sections/PortlandProjectsRecentSection";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { HomeReviewsSection } from "@/components/sections/HomeReviewsSection";
import { HomeCtaBottomSection } from "@/components/sections/HomeCtaBottomSection";
import imageCaptions from "../../../docs/research/image-captions.json";

const PAGE_URL = "http://www.ripcityconstruction.com/clay-basement-remodel-portland";

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
    alt: entry.captions[0] ?? entry.titles[0] ?? "",
  }));

const heroImage =
  galleryImages.find((image) => image.src.includes("Clay_Basment_1")) ?? galleryImages[0];

const heroImageAlt =
  heroImage?.alt || "Finished basement family room and bedroom remodel in Southeast Portland.";

export const metadata: Metadata = {
  title: "SE Clay, Portland Basement Remodel | Rip City Construction",
  description:
    "View this Southeast Portland basement remodel by Rip City Construction. A finished basement with a new family room, bedroom, bathroom, laundry area, egress window, and modern finishes.",
};

export default function ClayBasementRemodelPortlandPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <ClayBasementHeroSection
          imageSrc={heroImage.src}
          imageAlt={heroImageAlt}
        />
        <ClayBasementGallerySection images={galleryImages} />
        <PortlandProjectsRecentSection />
        <HomeServicesSection />
        <HomeReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <HomeCtaBottomSection />
      <Footer />
    </>
  );
}
