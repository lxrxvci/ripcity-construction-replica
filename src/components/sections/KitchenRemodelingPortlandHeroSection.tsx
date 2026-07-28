import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface KitchenRemodelingPortlandHeroSectionProps {
  className?: string;
}

export function KitchenRemodelingPortlandHeroSection({
  className,
}: KitchenRemodelingPortlandHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70vh] items-center overflow-hidden bg-foreground lg:min-h-[80vh]",
        className
      )}
    >
      <img
        src="/images/N._Kerby_2_ccdfdddf.png"
        alt="Modern open-concept kitchen remodel in Portland, Oregon"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 pt-48 lg:px-10 lg:py-40">
        <div className="max-w-xl space-y-6 text-background">
          <h1 className="font-heading text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
            Kitchen Remodeling in Portland, Oregon
          </h1>
          <p className="text-sm leading-relaxed md:text-base">
            From complete kitchen renovations and open-concept transformations to custom cabinetry,
            countertops, tile, flooring, and lighting upgrades, we help Portland homeowners create
            kitchens that combine timeless design, everyday functionality, and quality craftsmanship.
          </p>
          <p className="text-sm font-medium md:text-base">
            <span aria-hidden="true">📍</span> Portland, Oregon &amp; Surrounding Areas
          </p>
          <Button href="/contact" size="lg">
            Request a Consultation &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
