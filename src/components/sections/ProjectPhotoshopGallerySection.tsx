import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectPhotoshopGallerySectionProps {
  images: GalleryImage[];
  className?: string;
}

export function ProjectPhotoshopGallerySection({ images, className }: ProjectPhotoshopGallerySectionProps) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
