import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const nixonFeatures = [
  "Basement ADU Conversion",
  "Three Bedrooms",
  "Two Full Bathrooms",
  "Full Kitchen Installation",
  "Custom Stair Construction",
  "Architectural Wood Paneling",
  "Custom Millwork",
  "Built-In Storage",
  "Walk-In Shower",
  "Custom Vanities",
  "Recessed Lighting",
  "Premium Finish Carpentry",
];

interface AduHomeAdditionsPortlandNixonProjectSectionProps {
  className?: string;
}

export function AduHomeAdditionsPortlandNixonProjectSection({
  className,
}: AduHomeAdditionsPortlandNixonProjectSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-1">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                Featured Project
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
                Nixon Basement
                <br />
                <span className="text-accent">ADU Conversion</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              This custom basement ADU conversion transformed an unfinished lower level into a fully
              functional independent living space. The project included three bedrooms, two full
              bathrooms, a complete kitchen, custom stair construction, architectural wood paneling,
              premium finish carpentry, built-in storage, and modern lighting throughout. Designed to
              provide flexible living arrangements, guest accommodations, or multigenerational
              housing, the finished space blends seamlessly with the home&apos;s existing architecture
              while adding significant usable square footage and long-term property value.
            </p>
            <ul className="grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {nixonFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/nixon-adu" variant="outline">
              View Project Photos &gt;
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/Nixon_Front_ebd3de68.png"
                alt="Rear view of a modern house with dark wooden siding, a small wooden deck, a stone pathway, and landscaped garden after a Nixon basement ADU conversion by Rip City Construction"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
