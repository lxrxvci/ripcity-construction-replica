"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, EmailIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portland-remodeling-projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com/pages/Rip-City-Construction-Remodeling/127869977285553?ref=hl", icon: FacebookIcon, label: "Facebook" },
  { href: "http://instagram.com/ripcityconstruction", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:info@ripcityconstruction.com", icon: EmailIcon, label: "Email" },
];

interface HeaderProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Header({ className, variant = "dark" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = variant === "dark" ? "text-white" : "text-foreground";
  const hoverColor = variant === "dark" ? "hover:text-white/80" : "hover:text-foreground/70";

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 transition-colors",
        textColor,
        className
      )}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/images/Logo_Web_9e9745e2.png"
            alt="Rip City Construction"
            width={100}
            height={100}
            className="h-20 w-auto lg:h-24"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-sm font-medium uppercase tracking-wider transition-colors",
                hoverColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 lg:flex">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className={cn("transition-opacity hover:opacity-75", hoverColor)}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-foreground/95 text-background lg:hidden">
          <nav className="flex flex-col items-center gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-lg font-medium uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
