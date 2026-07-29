import { GalleryGrid } from "@/components/GalleryGrid";
import imageCaptions from "../../../docs/research/image-captions.json";

const NEW_BUILD_PAGE_URL = "http://www.ripcityconstruction.com/new-build";

interface ImageCaptionEntry {
  localPath: string;
  originalUrl: string;
  pages: string[];
  titles: string[];
  captions: string[];
}

const galleryImages = (imageCaptions as ImageCaptionEntry[])
  .filter((entry) => entry.pages.includes(NEW_BUILD_PAGE_URL))
  .map((entry) => ({
    src: `/${entry.localPath.replace(/^public\//, "")}`,
    alt:
      entry.captions[0] ||
      entry.titles[0] ||
      "ADU, new build, and home addition project by Rip City Construction",
  }));

export function NewBuildGallerySection() {
  return (
    <section className="bg-background px-4 pb-12 sm:px-6 md:pb-16 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <GalleryGrid images={galleryImages} lgCols={4} />
      </div>
    </section>
  );
}
