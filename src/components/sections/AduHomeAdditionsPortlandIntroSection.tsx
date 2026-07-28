import { cn } from "@/lib/utils";

interface AduHomeAdditionsPortlandIntroSectionProps {
  className?: string;
}

export function AduHomeAdditionsPortlandIntroSection({
  className,
}: AduHomeAdditionsPortlandIntroSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                Portland ADU & Home Addition Contractor
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
                Designed For
                <br />
                <span className="text-accent">The Way You Live.</span>
                <br />
                Built For The Future.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                Whether you&apos;re building a detached ADU, backyard cottage, guest house, garage
                conversion, or custom home addition, Rip City Construction specializes in creating
                high-quality living spaces throughout Portland, Oregon. Our team works closely with
                homeowners to design and build additions that increase property value, improve
                functionality, and provide long-term flexibility for growing families,
                multigenerational living, or rental income opportunities.
              </p>
              <p>
                From foundations and framing to custom kitchens, bathrooms, and interior finishes, we
                manage every phase of construction with a focus on craftsmanship, communication, and
                lasting quality. Explore our completed ADU and home addition projects below.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/ChatGPT_Image_Jun_16__2026__02_04_51_PM_37cd050a.png"
              alt="ADU construction services infographic showing accessory dwelling unit design, permitting, framing, electrical, plumbing, HVAC, roofing, windows, and interior finishing services"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
