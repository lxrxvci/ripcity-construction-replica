// Real client testimonials used on the site. Single source of truth —
// the reviews section is rendered on the homepage only to avoid
// duplicating identical review content across pages (SEO).

export interface Testimonial {
  text: string;
  author: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    text: "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn’t be happier with the final result.",
    author: "Chris, Peacock Ln. Portland Bathroom Remodel",
  },
  {
    text: "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];
