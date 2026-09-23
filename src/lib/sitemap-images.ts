/**
 * Route-to-images map for the sitemap image extensions.
 *
 * Why it exists: the 2026-09-23 ECARAT audit found zero Google Images
 * presence; image entries in sitemap.xml let Google Images discover the
 * project and service photos.
 * How it works: imagesForRoute(path) returns absolute image URLs for a
 * sitemap route. JSON-driven routes derive from the same content
 * collections the sections render (hero/projects/services/sections/
 * services-featured/services-list/projects-page/projects-gallery);
 * captions-driven galleries (bathrooms, new-build, commercial, clay)
 * derive from docs/research/image-captions.json exactly as their pages
 * do; gallery routes whose images are inline component arrays are listed
 * literally in INLINE_ROUTE_IMAGES.
 * How to change it: JSON and captions-driven routes update themselves.
 * When an inline gallery array changes (kitchen, basements, ADU, project
 * hero/gallery sections), mirror the change in INLINE_ROUTE_IMAGES.
 */
import { SITE } from "./company";
import hero from "@/content/hero.json";
import projects from "@/content/projects.json";
import services from "@/content/services.json";
import sections from "@/content/sections.json";
import servicesFeatured from "@/content/services-featured.json";
import servicesList from "@/content/services-list.json";
import projectsPage from "@/content/projects-page.json";
import projectsGallery from "@/content/projects-gallery.json";
import imageCaptions from "../../docs/research/image-captions.json";

interface ImageCaptionEntry {
  localPath: string;
  pages: string[];
}

// Galleries whose images are inline arrays inside their section
// components (no collection to derive from). Keep in sync with the
// matching *GallerySection / *HeroSection components.
const INLINE_ROUTE_IMAGES: Record<string, string[]> = {
  "/about": [
    "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_2b6b2905.png",
    "/images/family_photo_portfolio_polish_635a13f3.png",
  ],
  "/kitchen-remodeling-portland": [
    "/images/ChatGPT_Image_Jun_16__2026__02_04_39_PM_8afa5982.png",
    "/images/N._Kerby_2_ccdfdddf.png",
    "/images/N._Kerby_1_d33cc238.png",
    "/images/N._Kerby_3_3d3d8d47.png",
    "/images/N._Kerby_5_b2c9c288.png",
    "/images/N._Kerby_6_c4f84570.png",
    "/images/N._Rodney_Kitchen_1_c5c702c0.png",
    "/images/N._Rodney_Kitchen_2_1fda4e47.png",
    "/images/N._Rodney_Kitchen_3_80402ce2.png",
    "/images/N._Rodney_Kitchen_4_aa680060.png",
    "/images/N._Sumner_3_f58d5f3b.png",
    "/images/N._Sumner_2_59103348.png",
    "/images/N._Sumner_1_8ddece85.png",
    "/images/Burnside_Kitchen_1_86683ebd.png",
    "/images/Burnside_Kitchen_2_40c2e785.png",
    "/images/Burnside_Kitchen_3_66ff574d.png",
    "/images/Burnside_Kitchen_4_a4b8388d.png",
    "/images/Burnside_Kitchen_5_1e75082a.png",
  ],
  "/basements": [
    "/images/IMG_20200409_100604_366_c85b6277.jpg",
    "/images/IMG_20200409_100604_367_0df81a1b.jpg",
    "/images/IMG_20200409_100604_329_6e6b0e36.jpg",
    "/images/20200408_163838_5e2d96e4.jpg",
    "/images/20200408_161711_b3ef5ed7.jpg",
    "/images/20200408_161603_5be54d43.jpg",
  ],
  "/adu-home-additions-portland": [
    "/images/SW_78th_A1_78a45982.png",
    "/images/ChatGPT_Image_Jun_16__2026__02_04_51_PM_37cd050a.png",
    "/images/Nixon_Front_ebd3de68.png",
  ],
  "/se-portland-kitchen-home-renovation": [
    "/images/ChatGPT_Image_May_2__2026__11_50_51_AM_eb356924.png",
    "/images/ChatGPT_Image_May_19__2026__02_58_44_PM_835acc3c.png",
    "/images/76th_Kitchen_1_7db98d6f.png",
    "/images/76th_Kitchen_3_24a26e22.png",
    "/images/76th_living_abe61193.png",
    "/images/76th_Laundry_b46eb11f.png",
    "/images/76th_Kitchen_4_3dac3a5d.png",
    "/images/76th_Kitchen_2_65895cf4.png",
    "/images/76th_Firplace_Hearth_95280aad.png",
    "/images/76th_Mudroom_bf9a29fe.png",
  ],
  "/southeast-hawthorne-addition": [
    "/images/Hawthorne_Addition_Back_32ddb9aa.png",
    "/images/Hawthorne_Addition_Front_Finish_c61f0233.png",
    "/images/Hawthorne_Addition_Back_15d3d10c.png",
    "/images/Hawthorne_Addition_Living_Room_0df32112.png",
    "/images/Hawthorne_Addition_Bonus_Room_d404a0a1.png",
    "/images/Hawthorne_Addition_Tile_Shower_499ac701.png",
    "/images/Hawthorne_Addition_Primary_Bedroom_c101b15f.png",
    "/images/Hawthorne_Addition_Primary_Bedroom_2_ae900c4a.png",
    "/images/Hawthorne_Addition_Bathroom_2e6e0a94.png",
    "/images/Hawthorne_Addition_Bathroom_Tile__2__d48e1015.png",
    "/images/Hawthorne_Addition_Before_Contruction_e815f865.png",
    "/images/Hawthorne_Addition_Before_Back_42992582.png",
  ],
  "/sw-78th-detached-adu-portland": [
    "/images/SW_78th_A1_3f97d354.png",
    "/images/SW_78th_A2_962a1158.png",
    "/images/SW_78th_A3_89cf1e94.png",
    "/images/SW_78th_A4_3b3e4727.png",
    "/images/SW_78th_A5_36ee5d77.png",
    "/images/SW_78th_A6_26bca05a.png",
    "/images/SW_78th_A7_15b92daf.png",
    "/images/SW_78th_ADU_3_c89c6d1f.jpg",
    "/images/SW_78th_A9_d5722518.png",
  ],
  "/nixon-adu": [
    "/images/Nixon_Front_db052cca.png",
    "/images/Nixon_ADU_5_7f86fc54.png",
    "/images/Nixon_ADU_8_9361e7e7.png",
    "/images/Nixon_ADU_6_43aa691e.png",
    "/images/Nixon_ADU_9_2ab4b8c1.png",
    "/images/Nixon_ADU_10_a2165c50.png",
    "/images/Nixon_ADU_13_000523d8.png",
    "/images/Nixon_ADU_12_458feeed.png",
    "/images/Nixon_ADU_11_0c8facf6.png",
    "/images/Nixon_Kitchen_f3b5a5d4.png",
    "/images/Nixon_ADU_14_81450204.png",
    "/images/Nixon_ADU_3_b9cafeb0.png",
    "/images/Nixon_ADU_2_07812d04.png",
    "/images/Nixon_ADU_1_c42e436d.png",
  ],
  "/projects/ne-36th-primary-suite-bathroom-remodel": [
    "/images/NE_36th_Bathroom_1_1ffb3e0b.png",
    "/images/NE_36th_Bathroom_2_f859ad8d.png",
    "/images/NE_36th_Bathroom_4_d88bea1b.png",
    "/images/NE_36th_Bathroom_5_d7a369b9.png",
    "/images/NE_36th_Bathroom_7_56da5266.png",
    "/images/NE_36th_Bathroom_6_5f20e9f7.png",
    "/images/NE_36th_Bathroom_8_aa80c776.png",
    "/images/NE_36th_Bathroom_9_dba43e48.png",
    "/images/NE_36th_Bathroom_10_d75f9f91.png",
  ],
};

// Galleries that render from docs/research/image-captions.json, keyed by
// the original-site page URL those pages filter on.
const CAPTIONS_ROUTE_URLS: Record<string, string> = {
  "/bathrooms-tile": "http://www.ripcityconstruction.com/bathrooms-tile",
  "/new-build": "http://www.ripcityconstruction.com/new-build",
  "/project-photoshop": "http://www.ripcityconstruction.com/project-photoshop",
  "/clay-basement-remodel-portland":
    "http://www.ripcityconstruction.com/clay-basement-remodel-portland",
};

function captionsImages(originalPageUrl: string): string[] {
  return (imageCaptions as ImageCaptionEntry[])
    .filter((entry) => entry.pages && entry.pages.includes(originalPageUrl))
    .map((entry) => entry.localPath.replace(/^public/, ""));
}

function jsonRouteImages(): Record<string, string[]> {
  return {
    "/": [
      hero.image,
      hero.shieldImage,
      ...projects.map((project) => project.image),
      ...services.map((service) => service.image),
      sections.about.image,
    ],
    "/services": servicesFeatured.map((service) => service.image),
    "/portland-remodeling-projects": [
      projectsPage.hero.image,
      projectsPage.bottomCta.image,
      ...projectsGallery.map((project) => project.image),
      ...servicesList.map((service) => service.icon),
    ],
  };
}

export function imagesForRoute(path: string): string[] {
  const jsonImages = jsonRouteImages()[path];
  const captionsUrl = CAPTIONS_ROUTE_URLS[path];
  const images =
    jsonImages ??
    INLINE_ROUTE_IMAGES[path] ??
    (captionsUrl ? captionsImages(captionsUrl) : []);
  const unique = [...new Set(images)];
  return unique.map((src) => `${SITE.url}${src}`);
}
