import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectsBottomCtaSectionProps {
  className?: string;
}

export function ProjectsBottomCtaSection({ className }: ProjectsBottomCtaSectionProps) {
  return (
    <section className={cn("relative min-h-[320px] overflow-hidden", className)}>
      <Image
        src="/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_acc7ebcf.png"
        alt="Portland home interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center text-background lg:px-10">
        <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-background/90">
          Let&apos;s talk about your project and get you a clear plan moving forward.
        </p>
        <Button href="/contact" size="lg">
          Request a Consultation
        </Button>
      </div>
    </section>
  );
}
