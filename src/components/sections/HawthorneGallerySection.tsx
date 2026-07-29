import { GalleryGrid } from "@/components/GalleryGrid";

const galleryImages = [
  {
    src: "/images/Hawthorne_Addition_Front_Finish_c61f0233.png",
    alt: "SE Portland whole home addition and garage expansion completed by Rip City Construction and Remodeling",
    featured: true,
  },
  {
    src: "/images/Hawthorne_Addition_Back_15d3d10c.png",
    alt: "Custom backyard patio and fire pit entertainment area at Southeast Portland home addition project",
  },
  {
    src: "/images/Hawthorne_Addition_Living_Room_0df32112.png",
    alt: "Living room with a red patterned rug, a peach armchair, a black sofa, and a kitchen with white cabinets",
  },
  {
    src: "/images/Hawthorne_Addition_Bonus_Room_d404a0a1.png",
    alt: "Custom second story living room addition with fireplace and built in shelving in Portland home remodel",
  },
  {
    src: "/images/Hawthorne_Addition_Tile_Shower_499ac701.png",
    alt: "Custom green tile walk in shower with frameless glass enclosure in Portland primary bathroom remodel",
  },
  {
    src: "/images/Hawthorne_Addition_Primary_Bedroom_c101b15f.png",
    alt: "Custom primary suite addition with fireplace and private balcony in Southeast Portland home addition",
  },
  {
    src: "/images/Hawthorne_Addition_Primary_Bedroom_2_ae900c4a.png",
    alt: "Custom primary bedroom suite addition with vaulted ceilings in Southeast Portland remodel",
  },
  {
    src: "/images/Hawthorne_Addition_Bathroom_2e6e0a94.png",
    alt: "Custom guest bathroom remodel with patterned tile flooring and floating walnut vanity",
  },
  {
    src: "/images/Hawthorne_Addition_Bathroom_Tile__2__d48e1015.png",
    alt: "Custom double vanity and green tile primary bathroom remodel in Portland home addition",
  },
  {
    src: "/images/Hawthorne_Addition_Before_Contruction_e815f865.png",
    alt: "Original 900 square foot Southeast Portland home before major addition and renovation",
  },
  {
    src: "/images/Hawthorne_Addition_Before_Back_42992582.png",
    alt: "Whole home addition and garage expansion under construction in Southeast Portland",
  },
];

export function HawthorneGallerySection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground underline decoration-accent decoration-2 underline-offset-4 lg:text-3xl">
              Whole Home Addition & Renovation in Southeast Portland
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80 lg:text-base">
              <p>
                We transformed this original 900 square foot Southeast Portland home into a
                dramatically expanded custom residence with approximately 1,500 square feet of
                additional living space and a newly constructed garage addition.
              </p>
              <p>
                The project included a full exterior renovation with new roofing, siding, windows,
                exterior envelope upgrades, and extensive structural additions designed to blend
                seamlessly with the original home.
              </p>
              <p>
                Inside, the remodel included new living areas, a custom primary suite, bonus room,
                multiple bathroom remodels, custom tile work, updated plumbing and electrical systems,
                modern finishes, and handcrafted details throughout the home.
              </p>
              <p>
                The backyard was completely reimagined with a custom patio, covered outdoor areas,
                balcony space, and integrated fire pit entertainment area designed for year round
                Pacific Northwest living.
              </p>
            </div>
          </div>

          <GalleryGrid images={galleryImages} lgCols={2} />
        </div>
      </div>
    </section>
  );
}
