import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SePortlandFinalCtaSectionProps {
  className?: string;
}

export function SePortlandFinalCtaSection({ className }: SePortlandFinalCtaSectionProps) {
  return (
    <section className={cn("bg-foreground py-16 text-center text-background lg:py-24", className)}>
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-sm text-background/80">
          Let’s talk about your project and get you a clear plan moving forward.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="secondary" size="md">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
