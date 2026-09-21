/**
 * Responsive image grid used by gallery sections.
 *
 * Why it exists: one grid layout for the many photo galleries instead of
 * repeating grid classes per section.
 * How it works: maps an images prop ({src, alt}[]) to next/image tiles in
 * a 2/3/4-column lg layout (lgCols prop).
 * How to change it: pass images from the calling section. Not stamped -
 * stamps belong on the section's own content, and gallery imagery here is
 * inline site copy.
 */
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryGridImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryGridImage[];
  className?: string;
  lgCols?: 2 | 3 | 4;
}

const lgColClasses = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

// Uniform project gallery: every cell identical size (4:3, cropped),
// consistent gaps, no featured spans or masonry — rows stay symmetrical.
export function GalleryGrid({ images, className, lgCols = 3 }: GalleryGridProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", lgColClasses[lgCols], className)}
    >
      {images.map((image) => (
        <div key={image.src} className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
