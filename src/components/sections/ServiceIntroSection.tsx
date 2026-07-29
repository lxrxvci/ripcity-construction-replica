import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceIntroSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  className?: string;
}

export function ServiceIntroSection({
  eyebrow,
  title,
  paragraphs,
  className,
}: ServiceIntroSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">{eyebrow}</p>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
          >
            Explore All of Our Remodeling Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
