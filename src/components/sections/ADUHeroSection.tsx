import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ADUHeroSectionProps {
  className?: string;
}

export function ADUHeroSection({ className }: ADUHeroSectionProps) {
  return (
    <section className={cn("relative min-h-[90vh] overflow-hidden bg-foreground", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/SW_78th_A1_78a45982.png"
          alt="Custom ADU and home addition construction by Rip City Construction in Portland, Oregon"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl space-y-8 pt-32 text-background">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Portland ADU & Home Addition Contractor
            </p>
            <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              Custom ADUs & Home Additions Built To Last
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-relaxed md:text-base">
            Expand your living space, increase property value, and build for the future with custom
            ADUs, home additions, garage conversions, and multigenerational living spaces built
            throughout Portland.
          </p>
          <p className="text-sm font-medium md:text-base">📍 Portland, Oregon</p>
          <Button href="/contact" size="lg">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
