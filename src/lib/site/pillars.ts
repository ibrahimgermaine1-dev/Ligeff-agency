export type Pillar = {
  n: string;
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  /** One-line value statement, plain English, no metaphors */
  valueLine: string;
  /** Two-sentence description, concrete */
  description: string;
  offerings: string[];
  /** What we deliver, in plain words */
  deliverable: string;
  /** The proof label */
  proofLabel: string;
  /** The result, as a concrete number */
  resultStat: string;
  resultLabel: string;
};

export const PILLARS: Pillar[] = [
  {
    n: "01",
    slug: "operational-efficiency",
    title: "Automation & AI",
    shortTitle: "Automation & AI",
    href: "/services/operational-efficiency",
    valueLine:
      "We build software that does the repetitive work your team does by hand, so they can do the work you actually hired them to do.",
    description:
      "We write custom software, set up automation, and build AI agents that handle the boring, error-prone tasks that eat your team's week. The work that used to take three days gets done in fourteen minutes, and the small mistakes that cost you refunds and lost accounts stop happening.",
    offerings: [
      "Custom software",
      "Workflow automation",
      "AI agents",
    ],
    deliverable: "Software that runs your repetitive work without you.",
    proofLabel: "Before / after workflow map",
    resultStat: "22 hrs",
    resultLabel: "recovered per week, per role",
  },
  {
    n: "02",
    slug: "immersive-visual-assets",
    title: "3D Rendering & Visuals",
    shortTitle: "3D & Visuals",
    href: "/services/immersive-visual-assets",
    valueLine:
      "We create photorealistic 3D images and videos of buildings and products that don't exist yet, so you can sell them before you build them.",
    description:
      "We render buildings, interiors, and products in photorealistic detail, before they exist in real life. Buyers can walk through a property that hasn't broken ground, or hold a product that hasn't been manufactured, and the sale is half-closed in their head before they ever speak to your team.",
    offerings: [
      "3D architectural renders",
      "Property walkthroughs",
      "AI video & image generation",
    ],
    deliverable: "Renders and videos that look like the real thing.",
    proofLabel: "Real render samples",
    resultStat: "3.4×",
    resultLabel: "more pre-construction deposits in 6 weeks",
  },
  {
    n: "03",
    slug: "market-dominance",
    title: "Websites & Search",
    shortTitle: "Websites & Search",
    href: "/services/market-dominance",
    valueLine:
      "We build websites and write content that makes your business the first answer when people search Google or ask an AI.",
    description:
      "We build high-end websites, write educational courses, and create content that makes your business show up first when buyers search online. When someone asks Google or an AI who to trust in your category, the answer they get back is your name, not your competitor's.",
    offerings: [
      "Web development",
      "Educational courses",
      "AI search optimization",
    ],
    deliverable: "A web presence that makes you the first answer.",
    proofLabel: "Real marketing samples",
    resultStat: "6 of 8",
    resultLabel: "buyer queries answered with your name in 120 days",
  },
];
