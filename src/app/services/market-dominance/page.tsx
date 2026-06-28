import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Market Dominance — Own the answer when buyers ask",
  description:
    "High-end web development, educational courses, AI SEO, and GEO (Generative Engine Optimization) that make your business the first and definitive answer when buyers query AI search engines and traditional platforms.",
};

export default function MarketDominancePage() {
  const pillar = PILLARS[2];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: [
          "When a buyer asks an AI who to trust in your category, the answer the AI gives back is either your name or a competitor's name, and there is no middle ground anymore, because the AI does not give a list of seven options the way Google used to give a list of seven blue links — the AI gives one answer, and the one answer is the answer the buyer acts on, and the other six names might as well not exist.",
          "The cost of being the second answer is the same as the cost of being the seventh answer, which is the same as the cost of being invisible, because the buyer never scrolls past the first answer, and the buyer who would have chosen you if you had been the first answer chooses the competitor instead, and you never even know the buyer was asking the question, because the AI did not tell you.",
          "And the cost is compounding, because every answer the AI gives trains the next answer the AI gives, so the competitor who is the first answer today is more likely to be the first answer tomorrow, and the gap between the first answer and the second answer widens every week you do nothing about it, until the gap is too wide to close and the competitor owns the category for the next five years.",
        ],
        phases: [
          {
            n: "01",
            title: "We map the questions buyers actually ask.",
            body: "Before we touch your website we map the exact questions buyers in your category ask AI search engines and traditional search engines, ranked by the buyer intent behind each question, because the work that follows only matters if it answers the questions buyers actually ask, and the questions buyers actually ask are almost never the questions you think they ask.",
          },
          {
            n: "02",
            title: "We make your business the source the AI cites.",
            body: "We build the structured, citable, machine-readable content that AI search engines prefer to cite when they answer a buyer's question, so when the AI assembles its answer it assembles it from your content, and your name ends up in the answer because your content was the content the AI used to build the answer in the first place.",
          },
          {
            n: "03",
            title: "We build the web property that earns the link.",
            body: "We build the high-end web property that earns the editorial links and the citations the AI uses to decide who to trust, because the AI's answer is only as good as the sources it can find, and the source it can find is the source with the web property that earns the right to be cited, which is the work that compounds over the next five years.",
          },
          {
            n: "04",
            title: "We build the course that makes you the teacher.",
            body: "We build the educational course that positions your team as the teachers of the category, because the AI prefers to cite the teacher over the vendor, and the buyer prefers to buy from the teacher over the vendor, and the course is the asset that makes your business both, and that compounds for as long as the course is the best course in the category.",
          },
        ],
        proofImages: [
          { ratio: "16 / 9", label: "AI ANSWER · CITES CLIENT", tone: "deep" },
          { ratio: "3 / 4", label: "SERP · POSITION 01" },
          { ratio: "3 / 4", label: "CITATION GRAPH · 14 SOURCES" },
          { ratio: "16 / 9", label: "COURSE · 22 LESSONS" },
        ],
        proofBody:
          "The proof in this pillar is the answer the AI gives when the buyer asks the question, and the answer the AI gives is either your name or it is not, so the proof below is the answer the AI gave before the engagement and the answer the AI gave ninety days after the engagement, with the client's name redacted and the question and the answer left in, because the only proof that matters in this pillar is the proof the buyer sees when they ask the question.",
        mathHeadline:
          "First-answer placement on 6 of 8 buyer queries within 120 days.",
        mathBody:
          "The math is built from the eight highest-intent buyer queries in the client's category, checked weekly across the three major AI search engines and the two major traditional search engines, with the first-answer placement tracked before the engagement and for the first one hundred and twenty days after, and the lift is consistent because the underlying mechanism is the same — the AI started finding the client's content first because the client's content became the most citable content in the category, and that is a position that compounds rather than decays.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "0 of 8 buyer queries, every quarter, forever.",
            body: "The competitor who is the first answer today keeps the first answer, the AI keeps training on itself, the gap widens every quarter, and the buyers who would have chosen you keep choosing the competitor, and you keep not knowing why, because the AI never tells you it was asked.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$9,000 / month in retainer SEO with no AI placement.",
            body: "A cheap vendor runs traditional SEO playbooks in a post-AI search world, the traditional rankings hold for a quarter and then decay, the AI never cites the client because the content was not built to be cited, and the retainer continues for two years against a number that never moves.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$36,000 one-time + $4,000 / month, paid back in 90 days.",
            body: "We map the questions, we build the citable content, we build the web property that earns the link, and we build the course that makes you the teacher, so the AI starts citing you inside the first ninety days and the position compounds for the next five years against a retainer that is a fraction of the deals the placement unlocks.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
