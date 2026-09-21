import { cn } from "@/lib/utils";

interface BlogHeroSectionProps {
  heading: string;
  support: string;
  className?: string;
}

export function BlogHeroSection({ heading, support, className }: BlogHeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground", className)}>
      <div className="mx-auto flex max-w-7xl items-center px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
        <div className="max-w-2xl space-y-6 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight text-accent md:text-5xl">
            {heading}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-background/80 md:text-base">
            {support}
          </p>
        </div>
      </div>
    </section>
  );
}
