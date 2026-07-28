import Image from "next/image";
import { cn } from "@/lib/utils";

interface SEKitchenGallerySectionProps {
  className?: string;
}

const galleryImages = [
  {
    src: "/images/76th_Kitchen_1_7db98d6f.png",
    alt: "Custom white oak kitchen remodel in Southeast Portland.",
  },
  {
    src: "/images/76th_Kitchen_3_24a26e22.png",
    alt: "Modern Portland kitchen renovation with custom cabinetry and handmade tile backsplash and range.",
  },
  {
    src: "/images/76th_living_abe61193.png",
    alt: "Modern living room renovation with wood flooring and custom fireplace in Southeast Portland.",
  },
  {
    src: "/images/76th_Laundry_b46eb11f.png",
    alt: "Custom laundry room renovation with stacked washer dryer and built-in cabinetry in Portland.",
  },
  {
    src: "/images/76th_Kitchen_4_3dac3a5d.png",
    alt: "Modern Portland kitchen renovation with custom cabinetry and handmade tile backsplash.",
  },
  {
    src: "/images/76th_Kitchen_2_65895cf4.png",
    alt: "High-end kitchen remodel in Portland featuring custom cabinetry, quartz counters, and brass fixtures.",
  },
  {
    src: "/images/76th_Firplace_Hearth_95280aad.png",
    alt: "Custom curved tile transition detail in Southeast Portland home renovation.",
  },
  {
    src: "/images/76th_Mudroom_bf9a29fe.png",
    alt: "Custom cement tile mud room flooring in Southeast Portland remodel.",
  },
];

export function SEKitchenGallerySection({ className }: SEKitchenGallerySectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
              Project Overview
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
              Custom Interior Remodel with High-End Finishes
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                This Southeast Portland renovation included a full remodel of the kitchen, living room,
                mud room, and laundry room with a focus on custom craftsmanship, improved
                functionality, and timeless materials. Window openings were redesigned to create a
                brighter, more connected living space throughout the home.
              </p>
              <p>
                The project featured custom white oak cabinetry, quartz countertops, handmade ceramic
                backsplash tile, large-format travertine flooring, and custom cement tile in the mud
                room. Every finish was carefully selected to create a warm, modern aesthetic built for
                everyday living.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "relative overflow-hidden",
                  index === 0 ? "sm:col-span-2" : ""
                )}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
