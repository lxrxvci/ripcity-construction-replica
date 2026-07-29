import type { Metadata } from "next";
import {
  ADDRESS,
  CONTACT,
  KNOWS_ABOUT,
  LICENSES,
  PAGE_DESCRIPTIONS,
  SAME_AS,
  SERVICE_PAGES,
  SITE,
  hoursToOpeningHoursSpec,
} from "./company";

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export type CreateMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = PAGE_DESCRIPTIONS.home,
  path,
  ogImage = SITE.ogImage,
  ogType = "website",
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonicalUrl = `${SITE.url}${path}`;
  const isProduction = process.env.VERCEL_ENV === "production";
  const shouldNoIndex = noIndex || !isProduction;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: title,
      template: "%s | Rip City Construction",
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !shouldNoIndex,
      follow: !shouldNoIndex,
      googleBot: {
        index: !shouldNoIndex,
        follow: !shouldNoIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} - Portland remodeling contractor`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: SITE.twitterHandle,
    },
    icons: {
      icon: "/seo/favicon_735b103a.ico",
      shortcut: "/seo/favicon_735b103a.ico",
      apple: "/seo/favicon_735b103a.ico",
    },
  };
}

export function createWebPageSchema({
  path,
  title,
  description,
  datePublished,
  dateModified,
}: {
  path: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const page: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${SITE.url}${path}#webpage`,
    url: `${SITE.url}${path}`,
    name: title,
    description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: "en-US",
  };

  if (datePublished) page.datePublished = datePublished;
  if (dateModified) page.dateModified = dateModified;

  return page;
}

export function createBreadcrumbSchema(path: string, items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}${path}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function createOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 100,
      height: 100,
    },
    image: SITE.logo,
    email: CONTACT.email,
    telephone: CONTACT.telephone,
    sameAs: SAME_AS,
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    description:
      "Portland, OR general contractor specializing in ADU construction, detached ADUs, garage conversions, home additions, kitchen remodels, bathroom remodels, and basement renovations.",
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    priceRange: SITE.priceRange,
    foundingDate: SITE.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.geo.latitude,
      longitude: ADDRESS.geo.longitude,
    },
    openingHoursSpecification: hoursToOpeningHoursSpec(),
    areaServed: [
      "Portland OR",
      "SE Portland",
      "NE Portland",
      "Beaverton OR",
      "Lake Oswego OR",
      "Tigard OR",
      "Milwaukie OR",
    ],
    additionalType: "https://en.wikipedia.org/wiki/Accessory_dwelling_unit",
    identifier: {
      "@type": "PropertyValue",
      propertyID: LICENSES.oregonCcb.propertyID,
      value: LICENSES.oregonCcb.value,
    },
    sameAs: SAME_AS,
    knowsAbout: KNOWS_ABOUT,
  };
}

export function createWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: PAGE_DESCRIPTIONS.home,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function createServiceSchema(serviceKey: keyof typeof SERVICE_PAGES) {
  const service = SERVICE_PAGES[serviceKey];
  return {
    "@type": "Service",
    "@id": `${service.url}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: service.url,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: "Portland, OR",
  };
}

export function createOfferCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE.url}/#services`,
    name: "Construction & Remodeling Services",
    itemListElement: Object.values(SERVICE_PAGES).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: service.serviceType,
        url: service.url,
        areaServed: "Portland, OR",
        provider: { "@id": `${SITE.url}/#business` },
      },
    })),
  };
}

export function createContactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${SITE.url}/contact#webpage`,
    url: `${SITE.url}/contact`,
    name: "Contact Rip City Construction",
    description: PAGE_DESCRIPTIONS.contact,
    mainEntity: { "@id": `${SITE.url}/#business` },
  };
}

export function createAboutPageSchema() {
  return {
    "@type": "AboutPage",
    "@id": `${SITE.url}/about#webpage`,
    url: `${SITE.url}/about`,
    name: "About Rip City Construction",
    description: PAGE_DESCRIPTIONS.about,
    mainEntity: { "@id": `${SITE.url}/#business` },
  };
}

export function createImageGallerySchema(
  path: string,
  images: { url: string; caption: string }[]
) {
  return {
    "@type": "ImageGallery",
    "@id": `${SITE.url}${path}#gallery`,
    url: `${SITE.url}${path}`,
    name: "Project Gallery",
    image: images.map((img) => ({
      "@type": "ImageObject",
      url: img.url,
      caption: img.caption,
    })),
  };
}

export function createGlobalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createWebsiteSchema(),
      createOrganizationSchema(),
      createLocalBusinessSchema(),
    ],
  };
}

export function createJsonLdGraph(
  entities: Record<string, unknown> | Record<string, unknown>[]
) {
  const items = Array.isArray(entities) ? entities : [entities];

  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

export function createHomeBreadcrumbs(): BreadcrumbItem[] {
  return [{ name: "Home", item: SITE.url }];
}

export function createPageBreadcrumbs(
  path: string,
  name: string
): BreadcrumbItem[] {
  return [
    { name: "Home", item: SITE.url },
    { name, item: `${SITE.url}${path}` },
  ];
}

export function createNestedBreadcrumbs(
  segments: { path: string; name: string }[]
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Home", item: SITE.url }];
  let currentPath = "";

  for (const segment of segments) {
    currentPath = segment.path.startsWith("/")
      ? segment.path
      : `${currentPath}/${segment.path}`;
    items.push({ name: segment.name, item: `${SITE.url}${currentPath}` });
  }

  return items;
}
