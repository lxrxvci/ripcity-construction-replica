import Image from "next/image";
import { cn } from "@/lib/utils";

interface NixonGallerySectionProps {
  className?: string;
}

const galleryImages = [
  {
    src: "/images/Nixon_Front_db052cca.png",
    alt: "Exterior view of the Nixon basement ADU conversion in Milwaukie, Oregon.",
  },
  {
    src: "/images/Nixon_ADU_5_7f86fc54.png",
    alt: "Interior living space with custom woodwork in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_8_9361e7e7.png",
    alt: "Hallway and stairway with custom millwork in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_6_43aa691e.png",
    alt: "Bedroom with modern finishes in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_9_2ab4b8c1.png",
    alt: "Guest bedroom with modern finishes in the Nixon basement ADU in Milwaukie, Oregon.",
  },
  {
    src: "/images/Nixon_ADU_10_a2165c50.png",
    alt: "Spacious bedroom in the Nixon basement ADU conversion in Milwaukie, Oregon.",
  },
  {
    src: "/images/Nixon_ADU_13_000523d8.png",
    alt: "Bathroom with custom vanity in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_12_458feeed.png",
    alt: "Walk-in tile shower with glass enclosure in the Nixon basement ADU bathroom.",
  },
  {
    src: "/images/Nixon_ADU_11_0c8facf6.png",
    alt: "Custom bathroom vanity with quartz countertop in the Nixon basement ADU conversion.",
  },
  {
    src: "/images/Nixon_Kitchen_f3b5a5d4.png",
    alt: "Kitchen with custom cabinetry in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_14_81450204.png",
    alt: "Guest bedroom with modern finishes in the Nixon basement ADU.",
  },
  {
    src: "/images/Nixon_ADU_3_b9cafeb0.png",
    alt: "Spacious bedroom in the Nixon basement ADU conversion.",
  },
  {
    src: "/images/Nixon_ADU_2_07812d04.png",
    alt: "Walk-in tile shower in the Nixon basement ADU bathroom.",
  },
  {
    src: "/images/Nixon_ADU_1_c42e436d.png",
    alt: "Custom bathroom vanity with quartz countertop in the Nixon basement ADU.",
  },
];

export function NixonGallerySection({ className }: NixonGallerySectionProps) {
  const [featured, second, third, ...rest] = galleryImages;
  const bottomPair = rest.slice(0, 2);
  const remaining = rest.slice(2);

  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
              Complete Basement ADU Conversion in Milwaukie, Oregon
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80 lg:text-base">
              <p>
                This basement ADU conversion in Milwaukie, Oregon transformed an underutilized
                lower level into a fully independent living space designed for comfort,
                functionality, and long-term flexibility. The project included three bedrooms, two
                full bathrooms, a complete kitchen, dedicated living areas, upgraded mechanical
                systems, and extensive custom finish work throughout.
              </p>
              <p>
                A defining feature of the project is the custom architectural woodwork integrated
                throughout the stairway, hallways, and living spaces. Premium millwork, custom
                paneling, upgraded lighting, new flooring, modern cabinetry, and high-quality finishes
                were carefully incorporated to create a cohesive living environment that complements
                the home&apos;s original architecture.
              </p>
              <p>
                Designed to accommodate multigenerational living, extended family, guests, or
                potential rental opportunities, this basement ADU significantly increased the
                home&apos;s usable square footage while maintaining a seamless connection to the
                existing residence. The result is a highly functional and beautifully crafted living
                space that adds both versatility and long-term property value.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {[second, third].map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16">
          {bottomPair.map((image) => (
            <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((image) => (
            <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
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
      </div>
    </section>
  );
}
