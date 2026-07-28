import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SePortlandCtaSectionProps {
  className?: string;
}

export function SePortlandCtaSection({ className }: SePortlandCtaSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground py-20 lg:py-28", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_acc7ebcf.png"
          alt="Portland home interior"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="space-y-6 text-background">
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Ready to Start Your Remodeling Project?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-background/80 md:text-base">
            Rip City Construction specializes in kitchen remodels, home additions, ADU construction,
            bathroom renovations, and full home remodeling throughout Portland and surrounding areas.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg">
              Request a Consultation &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
