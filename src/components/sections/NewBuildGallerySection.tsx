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
    <section className="bg-background px-4 pb-12 pt-36 sm:px-6 md:pb-16 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="columns-1 gap-3 sm:columns-2 md:gap-4 lg:columns-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="mb-3 break-inside-avoid overflow-hidden md:mb-4"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
