import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Operational Efficiency — Buy back your team's time",
  description:
    "Custom AI apps, advanced automation, and intelligent autonomous agents that buy back your team's time and kill the small errors that drain cash, refunds, and trust.",
};

export default function OperationalEfficiencyPage() {
  const pillar = PILLARS[0];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: [
          "Every senior person on your payroll is paid to think, and the largest single line item on your payroll is also the line item doing the smallest share of thinking, because most of their week is spent doing the same set of repetitive tasks a machine should have been doing five years ago — chasing the same status updates, copying the same numbers between the same two systems, sending the same reminder email to the same person who has not answered the last three.",
          "The cost of this is not just the salary, because the salary is the visible number, and the visible number is the small number; the real cost is the work that does not get done while the senior person is doing the repetitive work, the deals that drift because nobody followed up in time, the refunds that go out because someone copied the wrong number, and the senior person who quietly burns out and leaves, taking three years of tacit knowledge with them, because they cannot face another quarter of doing the same task for the four hundredth time.",
          "The cost compounds, and the cost is invisible, and that is the worst kind of cost a business can carry, because the cost you cannot see is the cost you cannot cut.",
        ],
        phases: [
          {
            n: "01",
            title: "We write the leak as a number.",
            body: "Before any line of code is written we sit with the team doing the work and measure, in hours and dollars, exactly how much of the week is spent on the task we are about to automate, because if we cannot write the leak as a number we cannot promise you that the automation will pay for itself, and we will not take an engagement we cannot promise that on.",
          },
          {
            n: "02",
            title: "We map the workflow end to end.",
            body: "We trace the task from the moment it enters your business to the moment it leaves, mapping every system it touches, every person who handles it, and every place it can fail, because the part of the workflow that hurts you is almost never the part you think is broken, and the only way to find the real leak is to walk the workflow from end to end with the people who actually do it.",
          },
          {
            n: "03",
            title: "We build the machine, then we test it in the dark.",
            body: "We build the automation in parallel with the existing manual workflow and we run both side by side for two weeks, with the machine's output checked against the human's output, so by the time we cut the manual workflow over you have already seen two weeks of the machine doing the work correctly and you have zero anxiety about handing it the keys.",
          },
          {
            n: "04",
            title: "We hand it over, then we leave.",
            body: "We document the machine in plain English, we train the person who will own it, and we leave, because the point of the engagement is to close the leak and hand the keys back, not to keep the engagement open on a retainer, and the engagement only ends when the math we agreed on at the start has been hit and the machine has paid for itself.",
          },
        ],
        proofImages: [
          { ratio: "16 / 9", label: "BEFORE · 11 HUMAN TOUCHPOINTS", tone: "deep" },
          { ratio: "3 / 4", label: "AFTER · 2 HUMAN TOUCHPOINTS" },
          { ratio: "3 / 4", label: "ERROR RATE · 0.2% vs 6.1%" },
          { ratio: "16 / 9", label: "TIME-IN-WORKFLOW · 14 MIN vs 3 DAYS" },
        ],
        proofBody:
          "The map below is a real before-and-after from a real engagement, with the client's name removed and the numbers left in. Eleven human touchpoints collapsed to two. Average time-in-workflow dropped from three days to fourteen minutes. Error rate dropped from six in a hundred to two in a thousand, and the senior person whose week used to be eaten by this workflow now spends the same week on the work they were actually hired to do.",
        mathHeadline: "$48,000 / year in recovered operational time, per role.",
        mathBody:
          "The math is built from one number: the salary of the senior person whose week we recovered, multiplied by the share of their week the workflow used to eat, minus the cost of running the automation, which is usually a rounding error. The number is conservative, because it does not include the deals that stopped drifting, the refunds that stopped going out, or the senior person who stopped quietly burning out, all of which are real but hard to put on a single line. We use the conservative number because we would rather under-promise and over-deliver than the other way around.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "$48,000 / year per role, every year, forever.",
            body: "The senior salary continues to be paid for work a machine should be doing, the deals keep drifting, the refunds keep going out, and the cost compounds quietly until the senior person leaves and the cost suddenly becomes visible in the form of a replacement search and a three-month knowledge gap.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$14,000 in failed automation + 6 months of churn.",
            body: "A cheap vendor builds the automation without measuring the workflow first, the automation breaks on the first edge case, the team stops trusting it, the workflow reverts to manual, and the engagement ends with the leak still open and the budget gone.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$24,000 one-time, paid back in 18 weeks.",
            body: "We measure before we build, we test in the dark before we cut over, and we leave when the math is hit, so the engagement ends with the leak closed, the senior person's week recovered, and the automation running quietly in the background for the next five years without a retainer.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
