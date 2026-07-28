import Image from "next/image";
import { cn } from "@/lib/utils";
import imageCaptions from "../../../docs/research/image-captions.json";

interface ImageCaption {
  localPath: string;
  pages: string[];
  titles: string[];
  captions: string[];
}

const PAGE_URL = "http://www.ripcityconstruction.com/bathrooms-tile";

function getGalleryImages() {
  const all = (imageCaptions as ImageCaption[]).filter(
    (item) => item.pages && item.pages.includes(PAGE_URL)
  );
  return all.map((item) => ({
    src: item.localPath.replace(/^public/, ""),
    alt:
      item.captions?.[0] ||
      item.titles?.[0] ||
      "Bathroom and tile project by Rip City Construction",
  }));
}

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  sizes?: string;
}

function GalleryImage({
  src,
  alt,
  className,
  aspectClass,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: GalleryImageProps) {
  return (
    <div className={cn("relative overflow-hidden", aspectClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export function BathroomsTileGallerySection() {
  const images = getGalleryImages();
  const topRow = images.slice(0, 3);
  const bottomRow = images.slice(3);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-6 md:py-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((img, index) => (
            <GalleryImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              aspectClass="aspect-[4/3]"
              priority={index < 2}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ))}
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {bottomRow.map((img) => (
            <GalleryImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              aspectClass="aspect-[4/3]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
