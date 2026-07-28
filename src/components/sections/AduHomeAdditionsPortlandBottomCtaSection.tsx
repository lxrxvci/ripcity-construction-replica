import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AduHomeAdditionsPortlandBottomCtaSectionProps {
  className?: string;
}

export function AduHomeAdditionsPortlandBottomCtaSection({
  className,
}: AduHomeAdditionsPortlandBottomCtaSectionProps) {
  return (
    <section className={cn("bg-accent py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="mb-4 font-heading text-2xl font-bold text-background lg:text-3xl">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-background/90">
          Let&apos;s talk about your project and get you a clear plan moving forward.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          REQUEST A CONSULTATION
        </Button>
      </div>
    </section>
  );
}
