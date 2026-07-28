import Image from "next/image";
import { cn } from "@/lib/utils";

interface Ne36thGallerySectionProps {
  className?: string;
}

const galleryImages = [
  {
    src: "/images/NE_36th_Bathroom_1_1ffb3e0b.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland featuring a custom double vanity, walk-in shower, custom tile flooring, and modern finishes.",
    aspect: "aspect-[657/463]",
  },
  {
    src: "/images/NE_36th_Bathroom_2_f859ad8d.png",
    alt: "Custom primary bathroom with dual sinks, quartz countertops, custom walk-in shower, and vaulted ceiling in Northeast Portland.",
    aspect: "aspect-[657/860]",
  },
  {
    src: "/images/NE_36th_Bathroom_4_d88bea1b.png",
    alt: "Custom walk-in shower featuring penny tile flooring, linear layout, and premium tile installation in a Northeast Portland bathroom remodel.",
    aspect: "aspect-[657/818]",
  },
  {
    src: "/images/NE_36th_Bathroom_5_d7a369b9.png",
    alt: "Frameless glass shower with custom tile walls, recessed niche, brass fixtures, and full-height tile installation in Northeast Portland.",
    aspect: "aspect-[657/818]",
  },
  {
    src: "/images/NE_36th_Bathroom_7_56da5266.png",
    alt: "Custom walk-in closet with built-in shelving and hanging storage created during a Northeast Portland primary suite remodel.",
    aspect: "aspect-[657/818]",
  },
  {
    src: "/images/NE_36th_Bathroom_6_5f20e9f7.png",
    alt: "Newly framed laundry room with stacked washer and dryer, tile flooring, and built-in shelving as part of a Northeast Portland primary suite remodel.",
    aspect: "aspect-[657/818]",
  },
  {
    src: "/images/NE_36th_Bathroom_8_aa80c776.png",
    alt: "Remodeled primary bedroom featuring custom stair railings, built-in shelving, vaulted ceilings, and updated finishes in Northeast Portland.",
    aspect: "aspect-[657/502]",
  },
  {
    src: "/images/NE_36th_Bathroom_9_dba43e48.png",
    alt: "Updated primary bedroom with custom railings, vaulted ceilings, built-in storage, and bright modern finishes in Northeast Portland.",
    aspect: "aspect-[657/502]",
  },
  {
    src: "/images/NE_36th_Bathroom_10_d75f9f91.png",
    alt: "Before photo showing unfinished attic space prior to conversion into a custom primary suite and bathroom in Northeast Portland.",
    aspect: "aspect-[657/502]",
  },
];

// Layout order for the desktop two-column grid so the text sits top-left and
// images flow in the same arrangement as the original Squarespace page.
const orderedGalleryImages = [
  galleryImages[1],
  galleryImages[0],
  galleryImages[2],
  galleryImages[3],
  galleryImages[4],
  galleryImages[5],
  galleryImages[6],
  galleryImages[7],
  galleryImages[8],
];

export function Ne36thGallerySection({ className }: Ne36thGallerySectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
              Custom Primary Suite & Bathroom Renovation in Northeast Portland
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                This Northeast Portland primary suite remodel completely transformed an outdated upper-level space into a luxury retreat designed for comfort, functionality, and everyday living. The project included a full bathroom remodel featuring a custom walk-in shower with frameless glass enclosure, recessed shower niche, premium tile installation, custom shower pan, double vanity, quartz countertops, designer plumbing fixtures, and heated-style spa-inspired finishes throughout. In addition to the bathroom renovation, we framed and constructed a new walk-in closet and dedicated laundry room to improve storage and convenience for the homeowners.
              </p>
              <p>
                The scope of work also included extensive framing modifications, plumbing relocation, electrical upgrades, insulation, drywall, finish carpentry, custom stair railings, built-in shelving, flooring, painting, and detailed trim work. The adjoining primary bedroom was refreshed with updated finishes while maintaining the home&apos;s character and architectural charm. From the initial demolition and structural modifications to the final tile installation and finish work, every aspect of this Northeast Portland remodeling project was carefully planned and executed to create a cohesive primary suite that feels both luxurious and functional.
              </p>
              <p>
                This project showcases Rip City Construction & Remodeling&apos;s expertise in Portland bathroom remodeling, primary suite renovations, custom tile work, walk-in shower construction, laundry room additions, walk-in closets, finish carpentry, and whole-home remodeling. The finished result provides the homeowners with a modern, spa-like bathroom and a beautifully organized primary suite designed to add comfort, value, and long-term functionality to their home.
              </p>
            </div>
          </div>

          {orderedGalleryImages.map((image) => (
            <div key={image.src} className={cn("relative overflow-hidden", image.aspect)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
