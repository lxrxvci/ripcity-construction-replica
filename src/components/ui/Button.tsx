import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, target, rel, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-heading font-medium uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      {
        "bg-accent text-accent-foreground hover:bg-accent/90": variant === "primary",
        "bg-background text-foreground border border-foreground hover:bg-foreground hover:text-background": variant === "secondary",
        "bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "bg-transparent text-foreground hover:opacity-70": variant === "ghost",
        "px-6 py-2 text-sm": size === "sm",
        "px-8 py-3 text-sm": size === "md",
        "px-12 py-4 text-base": size === "lg",
      },
      className
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
