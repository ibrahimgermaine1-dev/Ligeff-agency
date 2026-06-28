import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Market Dominance — Own the answer when buyers ask",
  description:
    "High-end web development, educational courses, AI SEO, and GEO that make your business the first and definitive answer when buyers query AI search engines.",
};

export default function MarketDominancePage() {
  const pillar = PILLARS[2];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: "When a buyer asks an AI who to trust, your name is either the first answer or it is invisible, and there is no middle ground anymore.",
        bleedBodyShort:
          "We build the market presence that makes your business the first and definitive answer when buyers ask an AI, a search engine, or a friend with a phone.",
        phases: [
          {
            n: "01",
            title: "Map the questions buyers ask.",
            body: "We map the exact questions buyers in your category ask AI and traditional search, ranked by buyer intent behind each question.",
          },
          {
            n: "02",
            title: "Make your business the source the AI cites.",
            body: "We build the structured, citable, machine-readable content that AI search engines prefer to cite when they answer a buyer's question.",
          },
          {
            n: "03",
            title: "Build the web property that earns the link.",
            body: "We build the high-end web property that earns the editorial links and citations the AI uses to decide who to trust.",
          },
          {
            n: "04",
            title: "Build the course that makes you the teacher.",
            body: "We build the educational course that positions your team as the teachers of the category, because the AI prefers to cite the teacher.",
          },
        ],
        proofHeadline: "Real marketing assets from real engagements.",
        proofBody:
          "The materials below — course flyers, social content, personal brand assets — are real artefacts from real market-dominance engagements, shown with the client's permission. They represent the educational, branding, and content work that makes a business the answer the AI gives back.",
        proofItems: [
          {
            src: "/samples/pillar-03-okunade/ok-01.jpg",
            alt: "Promotional flyer for the R.P.M. Formula Mini Course — a free mental reset course",
            ratio: "16 / 10",
            label: "EDUCATIONAL COURSE · RPM FORMULA",
            tone: "deep",
          },
          {
            src: "/samples/pillar-03-okunade/ok-02.jpg",
            alt: "Social media post about the hidden costs of DIY web design",
            ratio: "4 / 5",
            label: "CONTENT · HIDDEN COSTS OF DIY",
          },
          {
            src: "/samples/pillar-03-okunade/ok-03.jpg",
            alt: "Social media post about being tough and smart",
            ratio: "4 / 5",
            label: "BRAND · TOUGH + SMART",
          },
          {
            src: "/samples/pillar-03-okunade/ok-portrait.jpg",
            alt: "Portrait of Abdulakeem Okunade, website designer and brand architect",
            ratio: "16 / 10",
            label: "PERSONAL BRAND · PORTRAIT",
            tone: "deep",
          },
        ],
        mathHeadline: "First-answer on 6 of 8 buyer queries in 120 days.",
        mathBody:
          "Built from the eight highest-intent buyer queries in the client's category, checked weekly across the three major AI search engines. The lift is consistent because the AI started finding the client's content first — a position that compounds rather than decays.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "0 of 8 buyer queries, every quarter, forever.",
            body: "The competitor who is the first answer today keeps the first answer, the AI keeps training on itself, and the gap widens every quarter.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$9,000 / month in retainer SEO with no AI placement.",
            body: "A cheap vendor runs traditional SEO playbooks in a post-AI search world. The AI never cites the client, and the retainer continues for two years against a number that never moves.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$36,000 one-time + $4,000 / month, paid back in 90 days.",
            body: "We map the questions, build the citable content, build the web property, and build the course. The AI starts citing you inside ninety days, and the position compounds for five years.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
