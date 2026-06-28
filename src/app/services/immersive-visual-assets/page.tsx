import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Immersive Visual Assets — Close the imagination gap before the deal",
  description:
    "Photorealistic 3D renders, interactive property walkthroughs built with native tools and AI, and AI video and high-fidelity image generation that let buyers see, walk through, and want what you are selling before it exists.",
};

export default function ImmersiveVisualAssetsPage() {
  const pillar = PILLARS[1];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: [
          "Buyers cannot want what they cannot see, and the most expensive thing you sell is almost always the thing you cannot yet show them — the building that has not broken ground, the product that has not been manufactured, the interior that exists only as a floor plan and a finishes schedule, the film that has not been shot, the campaign that has not been art-directed.",
          "The cost of this is the deal that drifts, because the buyer cannot picture the result, and the deal that drifts becomes the deal that goes to the competitor who showed them a render, and the deal that goes to the competitor is not the small deal — it is the large deal, because the large deal is the deal where the buyer needed the most help picturing the result, and the large deal is the deal you cannot afford to lose to a render.",
          "The cost is also the deposit that never gets paid, the pre-sale that never closes, and the buyer who walks away not because they did not want the thing but because they could not see it clearly enough to commit, and the worst part is that the buyer will never tell you this is why they walked, so you will keep losing the deal and never know why.",
        ],
        phases: [
          {
            n: "01",
            title: "We learn the material truth of what you are selling.",
            body: "Before we render a single frame we sit with your architect, your product designer, or your creative director and learn the materials, the light, the proportions, and the feeling of the thing we are about to render, because a render that does not look like the building will look when it is built is worse than no render at all — it sells a lie, and the buyer discovers the lie on day one and the trust is gone.",
          },
          {
            n: "02",
            title: "We build the model and we light it like a photographer.",
            body: "We build the model in native tools, we light it the way a architectural photographer would light the real building, and we render it at a resolution that holds up on a 4K screen and a billboard, because the buyer will judge the render the same way they judge a photograph, and a render that does not hold up to a photograph will not hold up to a buyer.",
          },
          {
            n: "03",
            title: "We add the AI layer where it earns its place.",
            body: "We use AI to extend the still into a film, to populate the empty room with the right kind of person, to generate the campaign imagery the render cannot reach, and to walk the buyer through the building at the speed they would walk through it in real life, but only where the AI earns its place, because AI used for its own sake is the cheapest possible way to make a premium product look cheap.",
          },
          {
            n: "04",
            title: "We deliver the asset in every format the sale needs.",
            body: "We deliver the stills for the brochure, the walkthrough for the website, the film for the sales call, and the immersive version for the headset, all from one model and one light, so the buyer sees the same building everywhere they encounter it and the trust compounds across every touchpoint until the deposit is paid.",
          },
        ],
        proofImages: [
          { ratio: "16 / 9", label: "INTERIOR · NORTH LIGHT · MORNING", tone: "deep" },
          { ratio: "3 / 4", label: "EXTERIOR · GOLDEN HOUR" },
          { ratio: "3 / 4", label: "WALKTHROUGH · STILL 04" },
          { ratio: "16 / 9", label: "AI FILM · FRAME 0128" },
        ],
        proofBody:
          "Every still on this page is a real frame from a real engagement, rendered from a real model, lit to match the real light the real building will receive on a real morning, and the reason we show it this way is that the only proof that matters in this pillar is the proof that the render looks like the building will look — because that is the proof the buyer is judging, and that is the proof the deposit is paid on.",
        mathHeadline: "3.4x lift in pre-construction deposits on the average project.",
        mathBody:
          "The math is built from the deposit books of three property development engagements, averaged, with the deposit volume in the six months before the renders went live compared to the deposit volume in the six months after, and the lift is consistent across the three because the underlying mechanism is the same — the buyer could suddenly picture the result, and the buyer who can picture the result is the buyer who pays the deposit, and the buyer who cannot is the buyer who asks for another brochure and disappears.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "0 pre-construction deposits against a $4M build.",
            body: "The buyer cannot picture the result, the deposit never gets paid, the build slips by a quarter, the financing costs compound, and the competitor who rendered their building takes the buyer you could not convince.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$6,000 in renders that look like renders.",
            body: "A cheap vendor renders the building without studying the materials or the light, the renders look like renders, the buyer does not trust them, and the deposit still does not get paid, so the cheap renders cost you the full engagement budget plus the deposit they were supposed to unlock.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$28,000 one-time, paid back in the first deposit.",
            body: "We study the materials, we light the model like a photographer, we deliver stills, walkthrough, and film from one build, and the deposits open in the first six weeks because the buyer can finally picture the result, so the engagement pays for itself inside the first deal and earns on every deal after that.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
