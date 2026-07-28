export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  href: string;
  platform: "facebook" | "instagram" | "email" | "yelp" | "google" | "houzz" | "buildzoom" | "nextdoor";
  label: string;
}

export interface SectionImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface SectionButton {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface PageSection {
  id: string;
  component: string;
  props: Record<string, unknown>;
}

export interface PageData {
  slug: string;
  title: string;
  description?: string;
  sections: PageSection[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}
