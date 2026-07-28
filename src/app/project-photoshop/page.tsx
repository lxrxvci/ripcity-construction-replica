import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { ProjectPhotoshopGallerySection } from "@/components/sections/ProjectPhotoshopGallerySection";
import { ProjectPhotoshopRecentProjectsSection } from "@/components/sections/ProjectPhotoshopRecentProjectsSection";
import { ProjectPhotoshopServicesSection } from "@/components/sections/ProjectPhotoshopServicesSection";
import { ProjectPhotoshopReviewsSection } from "@/components/sections/ProjectPhotoshopReviewsSection";
import { ProjectPhotoshopBottomCtaSection } from "@/components/sections/ProjectPhotoshopBottomCtaSection";

const PAGE_URL = "http://www.ripcityconstruction.com/project-photoshop";

interface ImageCaptionEntry {
  localPath: string;
  originalUrl: string;
  pages: string[];
  titles: string[];
  captions: string[];
}

export const metadata: Metadata = {
  title: "Commercial Remodels | Rip City Construction",
  description:
    "View Rip City Construction's commercial remodeling project portfolio in Portland, Oregon. Quality craftsmanship for tenant improvements, build-outs, and more.",
};

export default async function ProjectPhotoshopPage() {
  const filePath = join(process.cwd(), "docs/research/image-captions.json");
  const fileContents = await readFile(filePath, "utf-8");
  const imageCaptions = JSON.parse(fileContents) as ImageCaptionEntry[];

  const galleryImages = imageCaptions
    .filter((entry) => entry.pages.includes(PAGE_URL))
    .map((entry) => ({
      src: entry.localPath.replace(/^public\//, "/"),
      alt: entry.captions[0] ?? entry.titles[0] ?? "",
    }));

  return (
    <>
      <Header variant="dark" />
      <main>
        <ProjectPhotoshopGallerySection images={galleryImages} />
        <ProjectPhotoshopRecentProjectsSection />
        <ProjectPhotoshopServicesSection />
        <ProjectPhotoshopReviewsSection />
        <CtaFooter />
        <AboutFooter />
        <ProjectPhotoshopBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
