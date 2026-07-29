import { GalleryGrid } from "@/components/GalleryGrid";
import { cn } from "@/lib/utils";

interface Sw78thGallerySectionProps {
  className?: string;
}

const galleryImages = [
  {
    src: "/images/SW_78th_A2_962a1158.png",
    alt: "Detached accessory dwelling unit with private patio and outdoor living space in Southwest Portland.",
  },
  {
    src: "/images/SW_78th_A3_89cf1e94.png",
    alt: "Open living area and kitchen layout inside a newly constructed Portland accessory dwelling unit.",
  },
  {
    src: "/images/SW_78th_A4_3b3e4727.png",
    alt: "Modern ADU kitchen with custom cabinetry, stainless appliances, and open-concept design in Portland Oregon.",
  },
  {
    src: "/images/SW_78th_A5_36ee5d77.png",
    alt: "Custom kitchen featuring shaker cabinetry, quartz countertops, and modern finishes in a Southwest Portland ADU.",
  },
  {
    src: "/images/SW_78th_A6_26bca05a.png",
    alt: "Custom bathroom vanity and tile flooring inside a detached accessory dwelling unit in Southwest Portland.",
  },
  {
    src: "/images/SW_78th_A7_15b92daf.png",
    alt: "Open concept living room inside a custom detached ADU built in Southwest Portland.",
  },
  {
    src: "/images/SW_78th_ADU_3_c89c6d1f.jpg",
    alt: "Custom tile shower and bathroom remodel details inside a newly constructed Portland ADU.",
  },
  {
    src: "/images/SW_78th_A9_d5722518.png",
    alt: "Detached ADU under construction showing custom framing and structural work during the building process.",
  },
];

export function Sw78thGallerySection({ className }: Sw78thGallerySectionProps) {
  return (
    <section className={cn("bg-background py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <GalleryGrid images={galleryImages} lgCols={4} />
      </div>
    </section>
  );
}
