/**
 * Business constants: the single source of truth for NAP, licenses, profiles, and service-page SEO data.
 *
 * Why it exists: metadata and JSON-LD across 17 routes must never
 * disagree about who the business is.
 * How it works: derives NAP display fields from src/content/site.json
 * (the portal-managed site collection) and layers on technical constants
 * (SITE url/domain/og, CONTACT hours, ADDRESS + geo, LICENSES,
 * SOCIAL_PROFILES/SAME_AS, AREA_SERVED, KNOWS_ABOUT, SERVICE_PAGES per
 * service keyword page, PAGE_DESCRIPTIONS per route), plus hours
 * formatters for schema and display.
 * How to change it: owner-editable NAP changes go in site.json (portal);
 * technical SEO constants here. A new service page needs a SERVICE_PAGES
 * and PAGE_DESCRIPTIONS entry.
 */
// Verified business data sourced from the original site www.ripcityconstruction.com
// and Google Business Profile signals. Owner-editable NAP display fields live in
// src/content/site.json (portal CMS collection "site"); this file derives the
// constants used in metadata and JSON-LD from it and remains the single source
// of truth for social, service, and technical SEO data.

import site from "@/content/site.json";

export const SITE = {
  name: site.name,
  legalName: site.legalName,
  url: "https://www.ripcityconstruction.com",
  domain: "www.ripcityconstruction.com",
  scheme: "https",
  logo: "https://www.ripcityconstruction.com/images/Logo_Web_9e9745e2.png",
  ogImage: "https://www.ripcityconstruction.com/seo/og-image.jpg",
  locale: "en_US",
  twitterHandle: "@ripcityconstruction",
  foundingDate: "2012",
  priceRange: "$$",
} as const;

export const CONTACT = {
  telephone: site.telephone,
  telephoneDisplay: site.telephoneDisplay,
  email: site.email,
  hours: [
    { dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "17:00" },
  ],
} as const;

export const ADDRESS = {
  streetAddress: site.streetAddress,
  addressLocality: site.addressLocality,
  addressRegion: site.addressRegion,
  postalCode: site.postalCode,
  addressCountry: "US",
  geo: {
    latitude: 45.512128,
    longitude: -122.584732,
  },
} as const;

export const LICENSES = {
  oregonCcb: {
    propertyID: "Oregon CCB License",
    value: "197600",
  },
} as const;

export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/pages/Rip-City-Construction-Remodeling/127869977285553",
  instagram: "https://www.instagram.com/ripcityconstruction",
  houzz: "https://www.houzz.com/professionals/general-contractors/rip-city-construction-and-remodeling-pfvwus-pf~814802999",
  yelp: "https://www.yelp.com/biz/rip-city-construction-portland",
  buildZoom: "https://www.buildzoom.com/contractor/rip-city-construction-and-remodeling-llc",
  nextdoor: "https://www.nextdoor.com/pages/rip-city-construction-remodeling-portland-or/",
} as const;

export const SAME_AS = Object.values(SOCIAL_PROFILES);

export const AREA_SERVED = [
  "Portland OR",
  "SE Portland",
  "NE Portland",
  "Beaverton OR",
  "Lake Oswego OR",
  "Tigard OR",
  "Milwaukie OR",
] as const;

export const KNOWS_ABOUT = [
  "ADU Construction",
  "Detached ADUs (DADU)",
  "Garage Conversion ADUs",
  "Basement ADU Conversions",
  "Portland ADU Permitting",
  "Home Additions",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Basement Finishing",
] as const;

export const SERVICE_PAGES = {
  aduHomeAdditions: {
    name: "ADU Construction & Home Additions",
    serviceType: "ADU design & construction, home additions",
    url: `${SITE.url}/adu-home-additions-portland`,
    description:
      "Custom ADU construction and home additions in Portland, Oregon. Detached units, garage conversions, and seamless additions built for long-term value.",
  },
  kitchen: {
    name: "Kitchen Remodeling",
    serviceType: "Kitchen remodeling",
    url: `${SITE.url}/kitchen-remodeling-portland`,
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
  },
  bathroom: {
    name: "Bathroom Remodeling & Tile",
    serviceType: "Bathroom remodeling, tile installation",
    url: `${SITE.url}/bathrooms-tile`,
    description:
      "Custom bathroom remodeling and tile installation in Portland, Oregon. Showers, vanities, and durable tilework designed for everyday use.",
  },
  basement: {
    name: "Basement Finishing & Remodeling",
    serviceType: "Basement finishing, basement remodeling",
    url: `${SITE.url}/basements`,
    description:
      "Convert unfinished basements into family rooms, home theaters, or guest suites in Portland, OR. Quality basement remodeling by Rip City Construction.",
  },
  newBuild: {
    name: "New Builds & ADUs",
    serviceType: "New home construction, ADU builder",
    url: `${SITE.url}/new-build`,
    description:
      "ADU builder and home additions contractor in Portland, Oregon. Custom builds and accessory dwelling units for rental income or multigenerational living.",
  },
  commercial: {
    name: "Commercial Remodeling",
    serviceType: "Commercial remodeling, tenant improvements",
    url: `${SITE.url}/project-photoshop`,
    description:
      "Commercial remodeling and tenant improvements in Portland, Oregon. Quality craftsmanship for build-outs and business spaces.",
  },
} as const;

export type ServiceKey = keyof typeof SERVICE_PAGES;

export const ALL_SERVICES = Object.values(SERVICE_PAGES);

export const PAGE_DESCRIPTIONS = {
  home: "Portland remodeling contractor specializing in kitchen remodels, ADUs, bathrooms, and home additions. Quality craftsmanship. Contact Rip City Construction today!",
  about:
    "Rip City Construction is a Portland remodeling contractor owned and operated by Cameron Taylor. Since 2012, we have built our business on quality craftsmanship and referrals.",
  services:
    "Full-service remodeling contractor in Portland, Oregon. Kitchens, bathrooms, ADUs, home additions, basements, and whole-home renovations by Rip City Construction.",
  contact:
    "Get in touch with Rip City Construction for a free estimate on your next kitchen, bathroom, ADU, addition, or basement remodeling project in Portland, Oregon.",
  projects:
    "View Rip City Construction's portfolio of kitchen remodels, bathroom renovations, ADUs, home additions, and basement finishing projects throughout Portland, Oregon.",
} as const;

export function hoursToOpeningHoursSpec() {
  return CONTACT.hours.map((h) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  }));
}

export function hoursToOpeningHoursString() {
  return CONTACT.hours.map((h) => `${h.dayOfWeek.slice(0, 2)} ${h.opens}-${h.closes}`).join(", ");
}
