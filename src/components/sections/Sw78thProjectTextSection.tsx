import { cn } from "@/lib/utils";

interface Sw78thProjectTextSectionProps {
  className?: string;
}

export function Sw78thProjectTextSection({ className }: Sw78thProjectTextSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-heading text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          Custom Detached ADU Construction in Southwest Portland
        </h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80 md:text-base">
          <p>
            This Southwest Portland ADU project involved the ground-up construction of a custom
            detached accessory dwelling unit designed to provide comfortable, independent living for
            a family member. Built as a grandmother suite, the new home includes a full kitchen,
            bathroom, bedroom, private study, and open-concept living area.
          </p>
          <p>
            Inside, the ADU features custom cabinetry, durable flooring, a modern kitchen, spacious
            bathroom, energy-efficient systems, and thoughtfully designed living spaces that
            maximize comfort and usability. The finished structure functions as a fully independent
            home while complementing the existing property and providing flexible housing options for
            the homeowner&apos;s family.
          </p>
        </div>
      </div>
    </section>
  );
}
