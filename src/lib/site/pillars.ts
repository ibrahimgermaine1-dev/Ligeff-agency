export type Pillar = {
  n: string;
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  /** Pain-led hero line, used on home + services hub */
  bleedHeadline: string;
  /** One-line value, used in nav-adjacent surfaces */
  valueLine: string;
  /** Two- to three-sentence long-form value description */
  description: string;
  offerings: string[];
  /** Material truth anchor label */
  proofLabel: string;
  /** ROI math headline */
  mathHeadline: string;
};

export const PILLARS: Pillar[] = [
  {
    n: "01",
    slug: "operational-efficiency",
    title: "Operational Efficiency",
    shortTitle: "Operational Efficiency",
    href: "/services/operational-efficiency",
    bleedHeadline:
      "Your team is paid to think, and most of their day is spent doing things a machine should have done five years ago.",
    valueLine:
      "Custom AI apps, advanced automation, and autonomous agents that buy back your time and kill the small errors that drain cash.",
    description:
      "We build the operational machines that quietly run the back of your business while your team sleeps, so the work that used to take a week and three pairs of hands is finished before the second cup of coffee, and the small human errors that quietly cost you refunds, lost accounts, and bad reviews stop happening on their own.",
    offerings: [
      "Custom AI Apps",
      "Advanced Automation Workflows",
      "Intelligent Autonomous Agents",
    ],
    proofLabel: "Operational automation map",
    mathHeadline: "$48,000 / year in recovered operational time, per role.",
  },
  {
    n: "02",
    slug: "immersive-visual-assets",
    title: "Immersive Visual Assets",
    shortTitle: "Immersive Visual Assets",
    href: "/services/immersive-visual-assets",
    bleedHeadline:
      "Buyers cannot want what they cannot see, and the most expensive thing you sell is the thing you cannot yet show them.",
    valueLine:
      "Photorealistic 3D renders, interactive walkthroughs, and AI video and image that close the imagination gap before the deal is won.",
    description:
      "We build the visual assets that let a buyer walk through a property that has not broken ground, hold a product that has not been manufactured, and watch a film that has not been shot, so the sale is half-closed in the buyer's head before they ever speak to your team, and the gap between what you are selling and what they can picture is no longer the reason the deal slips.",
    offerings: [
      "Photorealistic 3D Renders",
      "Interactive Property Walkthroughs",
      "AI Video & High-Fidelity Image Generation",
    ],
    proofLabel: "Photoreal walkthrough stills",
    mathHeadline: "3.4x lift in pre-construction deposits on the average project.",
  },
  {
    n: "03",
    slug: "market-dominance",
    title: "Market Dominance",
    shortTitle: "Market Dominance",
    href: "/services/market-dominance",
    bleedHeadline:
      "When a buyer asks an AI who to trust, your name is either the first answer or it is invisible, and there is no middle ground anymore.",
    valueLine:
      "High-end web, educational courses, AI SEO, and GEO that make your business the definitive answer when buyers ask the question.",
    description:
      "We build the market presence that makes your business the first and definitive answer when buyers ask an AI search engine, a traditional search engine, or a friend with a phone, so you stop losing deals you never knew existed to competitors who showed up first and answered the question better, and the work you have already done finally meets the audience it was built for.",
    offerings: [
      "High-End Web Development",
      "Educational Courses",
      "AI SEO",
      "GEO (Generative Engine Optimization)",
    ],
    proofLabel: "AI-answer placement proof",
    mathHeadline: "First-answer placement on 6 of 8 buyer queries within 120 days.",
  },
];
