import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, EmailIcon } from "@/components/icons";

interface ContactFormSectionProps {
  className?: string;
}

const socialLinks = [
  { href: "https://www.facebook.com/pages/Rip-City-Construction-Remodeling/127869977285553?ref=hl", icon: FacebookIcon, label: "Facebook" },
  { href: "http://instagram.com/ripcityconstruction", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:info@ripcityconstruction.com", icon: EmailIcon, label: "Email" },
];

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const FORMSPREE_ACTION = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : "https://formspree.io/f/YOUR_FORM_ID"; // staging placeholder; set NEXT_PUBLIC_FORMSPREE_FORM_ID to activate

export function ContactFormSection({ className }: ContactFormSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left column - heading and contact info */}
        <div className="space-y-6">
          <h1 className="font-heading text-4xl font-bold leading-tight lg:text-5xl">
            Get in touch,
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-foreground/80">
            We would love to give you a free estimate for any projects you have in mind. Message,
            Email, or Call.
          </p>
          <div className="space-y-2 text-sm text-foreground/80">
            <p>
              <span className="font-semibold text-foreground">Cameron Taylor</span> — 971-344-3806
              Owner/Operator
            </p>
            <p>
              <span className="font-semibold text-foreground">Email us</span> —{" "}
              <a
                href="mailto:info@ripcityconstruction.com"
                className="text-accent hover:underline"
              >
                info@ripcityconstruction.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right column - form */}
        <div className="bg-white/80 p-6 shadow-sm ring-1 ring-border lg:p-8">
          <form
            action={FORMSPREE_ACTION}
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="Contact Form" />

            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
                Name <span className="text-accent">(required)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
                Email Address <span className="text-accent">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
                Subject <span className="text-accent">(required)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
                Message <span className="text-accent">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full resize-y border border-input bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <Button type="submit" size="md">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
