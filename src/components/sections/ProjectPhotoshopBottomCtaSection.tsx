import { cn } from "@/lib/utils";

interface ProjectPhotoshopBottomCtaSectionProps {
  className?: string;
}

export function ProjectPhotoshopBottomCtaSection({ className }: ProjectPhotoshopBottomCtaSectionProps) {
  return (
    <section className={cn("bg-accent py-16 text-accent-foreground lg:py-20", className)}>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="font-heading text-2xl font-bold lg:text-3xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-accent-foreground/90">
          Let’s talk about your project and get you a clear plan moving forward.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center justify-center border border-accent-foreground bg-accent-foreground px-12 py-4 font-heading text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}
