import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";
import { WorkflowMap, TimeSavedChart, ErrorRateDiagram } from "@/components/site/ops-diagrams";

export const metadata = {
  title: "Operational Efficiency — Buy back your team's time",
  description:
    "Custom AI apps, advanced automation, and intelligent autonomous agents that buy back your team's time and kill the small errors that drain cash.",
};

export default function OperationalEfficiencyPage() {
  const pillar = PILLARS[0];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: "Your team is paid to think, and most of their day is spent doing what a machine should have done five years ago.",
        bleedBodyShort:
          "We build the operational machines that quietly run the back of your business, so the work that took a week and three pairs of hands is finished before the second cup of coffee.",
        phases: [
          {
            n: "01",
            title: "Write the leak as a number.",
            body: "We measure, in hours and dollars, exactly how much of the week is spent on the task we are about to automate.",
          },
          {
            n: "02",
            title: "Map the workflow end to end.",
            body: "We trace the task from entry to exit, finding the real leak, which is almost never where you think it is.",
          },
          {
            n: "03",
            title: "Build, then test in the dark.",
            body: "We run the machine side by side with the manual workflow for two weeks before we cut over, so there is zero anxiety.",
          },
          {
            n: "04",
            title: "Hand back the keys.",
            body: "We document, train, and leave when the math is hit. No retainer, no drag, no dependency.",
          },
        ],
        proofHeadline: "11 touchpoints collapsed to 2.",
        proofBody:
          "A real before-and-after from a real engagement. Eleven human touchpoints became two. Time-in-workflow dropped from three days to fourteen minutes. Error rate dropped from six in a hundred to two in a thousand.",
        proofItems: [
          {
            ratio: "16 / 9",
            label: "WORKFLOW MAP · BEFORE / AFTER",
            children: <WorkflowMap />,
          },
          {
            ratio: "3 / 4",
            label: "TIME RECOVERED · HRS / WEEK",
            children: <TimeSavedChart />,
          },
          {
            ratio: "3 / 4",
            label: "ERROR RATE · BEFORE / AFTER",
            children: <ErrorRateDiagram />,
          },
        ],
        mathHeadline: "$48,000 / year recovered, per role.",
        mathBody:
          "Built from the salary of the senior person whose week we recovered, multiplied by the share of their week the workflow used to eat, minus the cost of running the automation — which is usually a rounding error. The number is conservative, because it does not include the deals that stopped drifting or the refunds that stopped going out.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "$48,000 / year per role, every year, forever.",
            body: "The salary continues for work a machine should do, deals keep drifting, refunds keep going out, and the cost compounds until the senior person leaves.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$14,000 in failed automation + 6 months of churn.",
            body: "A cheap vendor builds without measuring first, the automation breaks on the first edge case, the team stops trusting it, and the leak stays open.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$24,000 one-time, paid back in 18 weeks.",
            body: "We measure before we build, we test in the dark, and we leave when the math is hit. The automation runs quietly for five years without a retainer.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
