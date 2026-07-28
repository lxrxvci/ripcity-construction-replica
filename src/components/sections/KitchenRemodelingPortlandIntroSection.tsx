import Image from "next/image";
import { cn } from "@/lib/utils";

interface KitchenRemodelingPortlandIntroSectionProps {
  className?: string;
}

export function KitchenRemodelingPortlandIntroSection({
  className,
}: KitchenRemodelingPortlandIntroSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              Portland Kitchen Remodeling Contractor
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Beautiful Kitchens.
              <br />
              Better Function.
              <br />
              Built to Last.
            </h2>
            <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
              <p>
                Rip City Construction specializes in custom kitchen remodeling throughout Portland,
                Oregon. From complete kitchen renovations and layout redesigns to custom cabinetry,
                countertops, tile, flooring, and lighting upgrades, we help homeowners create
                kitchens that are both beautiful and functional.
              </p>
              <p>
                Whether you&apos;re opening walls for an open-concept kitchen, adding a custom island,
                upgrading cabinetry, or completely transforming an outdated space, our team manages
                every phase of construction from planning through completion. We focus on quality
                craftsmanship, clear communication, and designs that improve the way you live every
                day.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full">
            <Image
              src="/images/ChatGPT_Image_Jun_16__2026__02_04_39_PM_8afa5982.png"
              alt="Trust, quality, and services included in Portland kitchen remodeling by Rip City Construction"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
