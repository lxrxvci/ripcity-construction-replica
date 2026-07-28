import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const sw78thFeatures = [
  "Detached ADU Construction",
  "Site Development",
  "Foundation & Framing",
  "Hardie Siding",
  "Energy-Efficient Windows",
  "Custom Kitchen",
  "Quartz Countertops",
  "Designer Tile Backsplash",
  "Mini-Split HVAC",
  "Luxury Vinyl Flooring",
  "Full Bathroom",
  "Utility Connections",
];

interface AduHomeAdditionsPortlandSwProjectSectionProps {
  className?: string;
}

export function AduHomeAdditionsPortlandSwProjectSection({
  className,
}: AduHomeAdditionsPortlandSwProjectSectionProps) {
  return (
    <section className={cn("overflow-hidden bg-accent py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-8 overflow-hidden rounded-lg bg-background lg:grid-cols-2">
          <div className="relative h-72 lg:h-[500px]">
            <img
              src="/images/SW_78th_A1_78a45982.png"
              alt="Custom detached ADU built by Rip City Construction featuring Hardie siding, energy-efficient windows, and professional landscaping in Portland, Oregon"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="mb-6 space-y-1">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                Featured Project
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
                SW 78th Custom
                <br />
                <span className="text-accent">ADU Construction</span>
              </h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-foreground/80">
              This custom detached ADU was designed and built to create a comfortable, fully
              independent living space. The project included complete site development, utility
              connections, custom kitchen and bathroom construction, energy-efficient mechanical
              systems, and high-quality interior finishes throughout. The finished ADU provides
              modern functionality, long-term durability, and valuable additional living space.
            </p>
            <ul className="mb-8 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {sw78thFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/sw-78th-detached-adu-portland" variant="outline">
              View Project Photos &gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
