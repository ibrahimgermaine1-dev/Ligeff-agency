import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Websites & Search — Be the first answer",
  description:
    "We build websites and write content that makes your business the first answer when people search Google or ask an AI.",
};

export default function MarketDominancePage() {
  const pillar = PILLARS[2];

  return (
    <ServicePage
      data={{
        pillar,
        heroHeadline:
          "When someone asks an AI who to trust, your name is either the first answer or it's invisible.",
        heroBody:
          "We build high-end websites, write educational courses, and create content that makes your business show up first when buyers search online. When someone asks Google or an AI who to trust in your category, the answer they get back is your name, not your competitor's.",
        phases: [
          {
            n: "01",
            title: "Find the real questions.",
            body: "We map the exact questions buyers in your category ask Google and AI, ranked by which ones lead to actual sales.",
          },
          {
            n: "02",
            title: "Become the source.",
            body: "We write clear, structured content that AI search engines prefer to cite. When the AI builds its answer, it builds it from your content.",
          },
          {
            n: "03",
            title: "Build the website.",
            body: "We build a fast, well-structured website that earns the links and citations AI uses to decide who to trust.",
          },
          {
            n: "04",
            title: "Build the course.",
            body: "We build an educational course that positions your team as the teachers of the category. AI prefers to cite teachers, not vendors.",
          },
        ],
        proofHeadline: "Real marketing materials from real projects.",
        proofBody:
          "The materials below — course flyers, social content, brand portraits — are real artefacts from real projects. They represent the educational, branding, and content work that makes a business the answer people get back.",
        proofItems: [
          {
            src: "/samples/pillar-03-okunade/ok-01.jpg",
            alt: "Promotional flyer for the RPM Formula Mini Course",
            ratio: "16 / 10",
            label: "EDUCATIONAL COURSE · RPM FORMULA",
            tone: "deep",
          },
          {
            src: "/samples/pillar-03-okunade/ok-02.jpg",
            alt: "Social media post about the hidden costs of DIY web design",
            ratio: "4 / 5",
            label: "CONTENT · DIY WEB DESIGN",
          },
          {
            src: "/samples/pillar-03-okunade/ok-03.jpg",
            alt: "Social media post about being tough and smart",
            ratio: "4 / 5",
            label: "BRAND · TOUGH + SMART",
          },
          {
            src: "/samples/pillar-03-okunade/ok-portrait.jpg",
            alt: "Portrait of the brand architect",
            ratio: "16 / 10",
            label: "PERSONAL BRAND · PORTRAIT",
            tone: "deep",
          },
        ],
        mathHeadline: "First answer on 6 of 8 buyer questions in 120 days.",
        mathBody:
          "We tracked the eight most important buyer questions in the client's category, checking weekly across the three major AI search engines. Before the project, none of the answers mentioned the client. Within 120 days, six of the eight came back with the client's name. This position compounds — it gets stronger over time, not weaker.",
        mathColumns: [
          {
            label: "Do nothing",
            headline: "Zero of eight questions, every quarter.",
            body: "The competitor who is the first answer today stays the first answer. The AI keeps training on itself. The gap widens every quarter. You keep losing deals you never knew about.",
          },
          {
            label: "Do it cheap",
            headline: "$9,000 per month, no real results.",
            body: "A cheap vendor runs old SEO playbooks in a post-AI search world. The AI never cites the client. The retainer continues for two years against a number that never moves.",
          },
          {
            label: "Do it with Ligeff",
            headline: "$36,000 one-time. Paid back in 90 days.",
            body: "We map the questions, write the content, build the website, and build the course. The AI starts citing you within 90 days, and the position compounds for five years.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
