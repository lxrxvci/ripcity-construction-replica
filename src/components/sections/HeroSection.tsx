import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-[90vh] overflow-hidden bg-foreground", className)}>
      <Image
        src="/images/ChatGPT_Image_May_2__2026__11_50_51_AM_eb356924.png"
        alt="Portland kitchen remodeling by Rip City Construction"
        fill
        priority
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl space-y-8 pt-24 text-background">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              Portland Remodeling
              <br />
              Built Around You
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-relaxed md:text-base">
            Rip City Construction is a Portland remodeling contractor specializing in kitchen
            remodels, bathroom renovations, ADUs, home additions, and basement finishing. We focus on
            quality craftsmanship, clear communication, and delivering results that last.
          </p>
          <Button href="/contact" size="lg">
            Request a Consultation
          </Button>
        </div>

        <div className="relative ml-auto hidden h-40 w-40 lg:block lg:h-52 lg:w-52">
          <Image
            src="/images/Sheild_Image_0d2954ec.png"
            alt="Licensed and insured contractor"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
