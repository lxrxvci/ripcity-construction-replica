import { cn } from "@/lib/utils";

interface ProjectImage {
  src: string;
  alt: string;
}

interface KitchenProject {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  featureImage: ProjectImage;
  galleryImages: ProjectImage[];
  imageRight?: boolean;
}

const projects: KitchenProject[] = [
  {
    title: "N. Kerby Open Concept",
    subtitle: "Kitchen Remodel",
    description:
      "We transformed this outdated kitchen into a bright, open-concept living space by removing walls and installing structural beams. The renovation included custom cabinetry, quartz countertops, a large island, full-height tile backsplash, built-in shelving, hardwood flooring, and expansive windows that bring natural light and outdoor views into the heart of the home.",
    features: [
      "Structural beam installation",
      "Wall removal for open concept",
      "Custom cabinetry",
      "Quartz countertops",
      "Large kitchen island",
      "Built-in shelving",
      "Hardwood flooring",
      "New lighting",
      "Outdoor serving window",
      "Deck entertaining area",
    ],
    featureImage: {
      src: "/images/N._Kerby_2_ccdfdddf.png",
      alt: "Open concept kitchen remodel in Portland Oregon featuring custom island, quartz countertops, hardwood flooring, and structural beam installation.",
    },
    galleryImages: [
      {
        src: "/images/N._Kerby_1_d33cc238.png",
        alt: "Open concept kitchen remodel in Portland Oregon featuring structural beam installation, custom cabinetry, quartz countertops, large island, built-in shelving, and hardwood flooring.",
      },
      {
        src: "/images/N._Kerby_3_3d3d8d47.png",
        alt: "Custom beverage station with quartz countertops, floating wood shelves, tile backsplash, and built-in cabinetry in a Portland kitchen remodel.",
      },
      {
        src: "/images/N._Kerby_5_b2c9c288.png",
        alt: "Backyard deck with wooden seating, four bar stools at a counter, potted plants, string lights, and an open window in a yellow house.",
      },
      {
        src: "/images/N._Kerby_6_c4f84570.png",
        alt: "Custom built-in shelving and large picture window bringing natural light into a remodeled Portland kitchen.",
      },
    ],
  },
  {
    title: "Rodney",
    subtitle: "Kitchen Remodel",
    description:
      "This Portland kitchen remodel transformed a closed-off floor plan into a bright and functional gathering space. We removed an existing wall and installed a structural beam to create an open-concept layout connecting the kitchen to the surrounding living areas. The renovation also included framing two new windows to bring in natural light, custom walnut cabinetry, quartz countertops, a large center island, tile backsplash, updated lighting, and new hardwood flooring throughout. The result is a warm, modern kitchen designed for everyday living and entertaining.",
    features: [
      "Structural beam installation",
      "Wall removal for open concept",
      "Two new windows",
      "Custom walnut cabinetry",
      "Quartz countertops",
      "Large center island",
      "Tile backsplash",
      "Hardwood flooring",
      "Updated lighting",
      "Open-concept floor plan",
    ],
    featureImage: {
      src: "/images/N._Rodney_Kitchen_1_c5c702c0.png",
      alt: "Open concept kitchen remodel in Portland Oregon featuring custom walnut cabinetry, quartz countertops, structural beam installation, large island, and new windows for natural light.",
    },
    galleryImages: [
      {
        src: "/images/N._Rodney_Kitchen_2_1fda4e47.png",
        alt: "Custom walnut kitchen island with quartz countertops and open concept layout in a Portland Oregon kitchen remodel.",
      },
      {
        src: "/images/N._Rodney_Kitchen_3_80402ce2.png",
        alt: "Kitchen remodel with custom walnut cabinetry, quartz countertops, tile backsplash, and large new windows bringing natural light into the space.",
      },
      {
        src: "/images/N._Rodney_Kitchen_4_aa680060.png",
        alt: "Modern Portland kitchen remodel featuring custom cabinetry, hardwood flooring, quartz countertops, and open-concept design.",
      },
    ],
    imageRight: true,
  },
  {
    title: "North Sumner",
    subtitle: "Kitchen Remodel",
    description:
      "This Portland kitchen remodel transformed an outdated layout into a bright, functional space designed for modern living. The renovation included a redesigned floor plan, professionally painted cabinetry, new oak flooring, custom tile backsplash, quartz countertops, updated fixtures, and a custom wet bar area for entertaining. Large windows bring natural light into the space while the clean finishes and thoughtful layout create a timeless kitchen that feels both elegant and practical.",
    features: [
      "Kitchen layout redesign",
      "Cabinet painting and refinishing",
      "New oak flooring",
      "Custom tile backsplash",
      "Quartz countertops",
      "Custom wet bar area",
      "Updated plumbing fixtures",
      "Farmhouse sink",
      "New lighting",
      "Improved functionality and storage",
    ],
    featureImage: {
      src: "/images/N._Sumner_3_f58d5f3b.png",
      alt: "Portland kitchen remodel featuring painted white cabinets, quartz countertops, oak flooring, custom tile backsplash, and redesigned layout.",
    },
    galleryImages: [
      {
        src: "/images/N._Sumner_2_59103348.png",
        alt: "Custom kitchen remodel with painted cabinetry, blue tile backsplash, quartz countertops, and built-in wet bar area in Portland Oregon.",
      },
      {
        src: "/images/N._Sumner_1_8ddece85.png",
        alt: "Farmhouse sink with custom blue tile backsplash, painted cabinets, quartz countertops, and oak flooring in a Portland kitchen remodel.",
      },
    ],
  },
  {
    title: "Burnside",
    subtitle: "Kitchen Remodel",
    description:
      "This Portland kitchen remodel transformed an outdated kitchen into a bright, modern space with improved functionality and timeless finishes. The renovation included a complete layout redesign, professionally painted cabinetry, butcher block countertops, new tile flooring, custom subway tile backsplash, open shelving, and the addition of two new windows to bring in natural light. The result is a warm, inviting kitchen that combines modern farmhouse character with improved workflow and storage.",
    features: [
      "Kitchen layout redesign",
      "Painted cabinetry",
      "Butcher block countertops",
      "Two new windows",
      "Custom subway tile backsplash",
      "New tile flooring",
      "Open wood shelving",
      "Farmhouse sink",
      "Professional-grade range and hood",
      "Updated lighting and fixtures",
      "Improved natural light",
    ],
    featureImage: {
      src: "/images/Burnside_Kitchen_1_86683ebd.png",
      alt: "Burnside kitchen remodel in Portland featuring painted cabinetry, butcher block countertops, subway tile backsplash, and farmhouse sink.",
    },
    galleryImages: [
      {
        src: "/images/Burnside_Kitchen_2_40c2e785.png",
        alt: "Burnside kitchen with custom butcher block countertops, white painted cabinetry, and professional-grade range hood.",
      },
      {
        src: "/images/Burnside_Kitchen_3_66ff574d.png",
        alt: "Portland kitchen remodel with open wood shelving, farmhouse sink, subway tile backsplash, and natural light from new windows.",
      },
      {
        src: "/images/Burnside_Kitchen_4_a4b8388d.png",
        alt: "Burnside kitchen showing wide-angle view of open-concept layout, painted cabinets, and modern farmhouse finishes.",
      },
      {
        src: "/images/Burnside_Kitchen_5_1e75082a.png",
        alt: "Burnside kitchen remodel with tile flooring, custom range hood, and built-in cabinetry in Portland Oregon.",
      },
    ],
    imageRight: true,
  },
];

interface ProjectCardProps {
  project: KitchenProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div
        className={cn(
          "grid gap-6 lg:grid-cols-2 lg:gap-10",
          project.imageRight ? "lg:flex-row-reverse" : ""
        )}
      >
        <div className={cn("relative overflow-hidden", project.imageRight && "lg:order-2")}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.featureImage.src}
              alt={project.featureImage.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className={cn("bg-background p-6 lg:p-10", project.imageRight && "lg:order-1")}>
          <div className="mb-4">
            <h3 className="font-heading text-2xl font-bold leading-tight text-foreground lg:text-3xl">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-heading text-2xl font-bold leading-tight text-accent lg:text-3xl">
                {project.subtitle}
              </p>
            )}
          </div>
          <p className="mb-6 text-sm leading-relaxed text-foreground/80">
            {project.description}
          </p>
          <ul className="grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="text-accent">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.galleryImages.length > 0 && (
        <div
          className={cn(
            "grid gap-4",
            project.galleryImages.length === 2 && "grid-cols-2",
            project.galleryImages.length === 3 && "grid-cols-2 sm:grid-cols-3",
            project.galleryImages.length === 4 && "grid-cols-2 sm:grid-cols-4"
          )}
        >
          {project.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface KitchenGallerySectionProps {
  className?: string;
}

export function KitchenGallerySection({ className }: KitchenGallerySectionProps) {
  return (
    <section className={cn("overflow-hidden bg-foreground py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
