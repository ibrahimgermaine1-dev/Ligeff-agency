import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";
import { WorkflowMap, TimeSavedChart, ErrorRateDiagram } from "@/components/site/ops-diagrams";

export const metadata = {
  title: "Automation & AI — Software that does the repetitive work",
  description:
    "We build custom software, workflow automation, and AI agents that do the repetitive work your team does by hand, so they can do the work you actually hired them to do.",
};

export default function OperationalEfficiencyPage() {
  const pillar = PILLARS[0];

  return (
    <ServicePage
      data={{
        pillar,
        heroHeadline:
          "Your team is paid to think. Most of their week is spent doing what software should do.",
        heroBody:
          "We build software that handles the boring, repetitive, error-prone tasks that eat your team's week. The work that used to take three days gets done in fourteen minutes, and the small mistakes that cost you refunds and lost accounts stop happening.",
        phases: [
          {
            n: "01",
            title: "Count the cost.",
            body: "We measure, in hours and dollars, exactly how much the current way of doing things costs you. No guessing.",
          },
          {
            n: "02",
            title: "Map the work.",
            body: "We trace the task from start to finish, finding exactly where time and money are being lost.",
          },
          {
            n: "03",
            title: "Build and test.",
            body: "We build the software and run it alongside the old way for two weeks, so there's no risk when we switch over.",
          },
          {
            n: "04",
            title: "Hand it over.",
            body: "We train your team, document everything, and leave when the work has paid for itself. No ongoing retainer.",
          },
        ],
        proofHeadline: "11 steps became 2. Three days became 14 minutes.",
        proofBody:
          "A real before-and-after from a real project. Eleven manual steps collapsed to two. The time it took to finish the work dropped from three days to fourteen minutes. The error rate dropped from six in every hundred to two in every thousand.",
        proofItems: [
          {
            ratio: "16 / 9",
            label: "BEFORE / AFTER WORKFLOW",
            children: <WorkflowMap />,
          },
          {
            ratio: "3 / 4",
            label: "HOURS RECOVERED PER WEEK",
            children: <TimeSavedChart />,
          },
          {
            ratio: "3 / 4",
            label: "ERROR RATE BEFORE / AFTER",
            children: <ErrorRateDiagram />,
          },
        ],
        mathHeadline: "$48,000 saved per year, per role.",
        mathBody:
          "This number comes from the salary of the senior person whose week we recovered, multiplied by the share of their week the work used to eat, minus the cost of running the software (which is usually negligible). The number is conservative — it doesn't count the deals that stopped slipping or the refunds that stopped going out.",
        mathColumns: [
          {
            label: "Do nothing",
            headline: "$48,000 lost per year, per role.",
            body: "The salary keeps getting paid for work software should do. Deals keep slipping. Refunds keep going out. The cost compounds until the senior person leaves.",
          },
          {
            label: "Do it cheap",
            headline: "$14,000 wasted, plus six months lost.",
            body: "A cheap vendor builds without measuring first. The software breaks on the first edge case. The team stops trusting it. The work goes back to manual.",
          },
          {
            label: "Do it with Ligeff",
            headline: "$24,000 one-time. Paid back in 18 weeks.",
            body: "We measure before we build. We test before we switch over. We leave when the numbers are hit. The software runs for five years without a retainer.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
