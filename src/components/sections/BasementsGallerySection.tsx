import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/images/IMG_20200409_100604_366_c85b6277.jpg",
    alt: "View of a backyard with a new wooden fence, concrete patio, and the back side of a house with two small windows and a door.",
  },
  {
    src: "/images/IMG_20200409_100604_367_0df81a1b.jpg",
    alt: "A back patio area under construction with stacked pavers, a small brick wall, a plastic chair, and a glass door leading into a building.",
  },
  {
    src: "/images/IMG_20200409_100604_329_6e6b0e36.jpg",
    alt: "Modern kitchen with stainless steel refrigerator, black stove, microwave, gray cabinetry, wooden countertops, and wooden flooring.",
  },
  {
    src: "/images/20200408_163838_5e2d96e4.jpg",
    alt: "Empty room with wood flooring, beige walls, small high windows, recessed ceiling lights, and a glass door leading outside.",
  },
  {
    src: "/images/20200408_161711_b3ef5ed7.jpg",
    alt: "A laundry area with stacked washers and dryers next to a small toilet and a separate shower stall with white subway tiles.",
  },
  {
    src: "/images/20200408_161603_5be54d43.jpg",
    alt: "Bathroom vanity with marble countertop, sink, and mirror; towel ring with a green towel and light fixture above the mirror.",
  },
];

export function BasementsGallerySection() {
  return (
    <section className={cn("w-full bg-background")}>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={index < 4 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
