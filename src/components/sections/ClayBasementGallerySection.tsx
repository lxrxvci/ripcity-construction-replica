import { GalleryGrid, type GalleryGridImage } from "@/components/GalleryGrid";
import { cn } from "@/lib/utils";

interface ClayBasementGallerySectionProps {
  className?: string;
  images: GalleryGridImage[];
}

export function ClayBasementGallerySection({
  className,
  images,
}: ClayBasementGallerySectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
              Project Overview
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
              Finished Basement Living Space in Southeast Portland
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                This Southeast Portland basement remodel transformed an unfinished lower level into a
                fully finished and highly functional living space designed for everyday comfort and
                flexibility.
              </p>
              <p>
                The project included a new family room, private bedroom, full bathroom, dedicated laundry
                area, and a rebuilt staircase connecting the basement seamlessly to the rest of the
                home.
              </p>
              <p>
                To create a code-compliant bedroom, we installed a new egress window and completed
                extensive infrastructure upgrades including trenching for new plumbing lines,
                relocating the home&apos;s furnace system, and reconfiguring mechanical systems throughout
                the basement.
              </p>
              <p>
                The finished basement features custom tile work, a spacious walk-in shower,
                freestanding soaking tub, recessed lighting, durable flooring, and modern finishes that
                create a warm and inviting environment.
              </p>
            </div>
          </div>

          <GalleryGrid images={images} lgCols={2} />
        </div>
      </div>
    </section>
  );
}
