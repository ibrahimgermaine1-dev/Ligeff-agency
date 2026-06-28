import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "Immersive Visual Assets — Close the imagination gap before the deal",
  description:
    "Photorealistic 3D renders, interactive property walkthroughs, and AI video and image generation that let buyers see and want what you are selling before it exists.",
};

export default function ImmersiveVisualAssetsPage() {
  const pillar = PILLARS[1];

  return (
    <ServicePage
      data={{
        pillar,
        bleed: "Buyers cannot want what they cannot see, and the most expensive thing you sell is the thing you cannot yet show them.",
        bleedBodyShort:
          "We build the visual assets that let a buyer walk through a property that has not broken ground, hold a product that has not been manufactured, and watch a film that has not been shot.",
        phases: [
          {
            n: "01",
            title: "Learn the material truth.",
            body: "We sit with your architect or designer and learn the materials, the light, and the feeling of the thing we are about to render.",
          },
          {
            n: "02",
            title: "Model and light like a photographer.",
            body: "We build in native tools, light it the way an architectural photographer would, and render at a resolution that holds up on a 4K screen.",
          },
          {
            n: "03",
            title: "Add the AI layer where it earns its place.",
            body: "We use AI to extend the still into a film, populate the empty room, and walk the buyer through at the speed they would walk in real life.",
          },
          {
            n: "04",
            title: "Deliver in every format the sale needs.",
            body: "Stills for the brochure, walkthrough for the web, film for the sales call, immersive for the headset — all from one model.",
          },
        ],
        proofHeadline: "Renders that look like the building will look.",
        proofBody:
          "Every still below is a real frame from a real engagement, rendered from a real model, lit to match the real light the real building will receive. The only proof that matters in this pillar is the proof the buyer is judging.",
        proofItems: [
          {
            src: "/samples/pillar-02-renderflaux/rf-04.jpg",
            alt: "Photorealistic 3D render of a curved-roof cabin in an autumn forest",
            ratio: "16 / 10",
            label: "EXTERIOR · CURVED-ROOF CABIN · DAYLIGHT",
            tone: "deep",
          },
          {
            src: "/samples/pillar-02-renderflaux/rf-01.jpg",
            alt: "Photorealistic 3D render of a modern two-story house with a pool at nighttime",
            ratio: "4 / 5",
            label: "EXTERIOR · TWO-STORY · NIGHT",
          },
          {
            src: "/samples/pillar-02-renderflaux/rf-03.jpg",
            alt: "Photorealistic 3D render of an A-frame cabin on a wooden deck surrounded by trees",
            ratio: "4 / 5",
            label: "EXTERIOR · A-FRAME · DAY",
          },
          {
            src: "/samples/pillar-02-renderflaux/rf-06.jpg",
            alt: "Photorealistic 3D render of a modern A-frame house with a pool at nighttime",
            ratio: "16 / 10",
            label: "EXTERIOR · A-FRAME · NIGHT",
            tone: "deep",
          },
        ],
        mathHeadline: "3.4× lift in pre-construction deposits.",
        mathBody:
          "Built from the deposit books of three property development engagements, averaged. The lift is consistent because the mechanism is the same — the buyer could suddenly picture the result, and the buyer who can picture the result is the buyer who pays the deposit.",
        mathColumns: [
          {
            label: "Cost of doing nothing",
            headline: "0 deposits against a $4M build.",
            body: "The buyer cannot picture the result, the deposit never gets paid, the build slips, the financing costs compound, and the competitor takes the buyer.",
          },
          {
            label: "Cost of doing it cheap",
            headline: "$6,000 in renders that look like renders.",
            body: "A cheap vendor renders without studying the materials or the light, the buyer does not trust the renders, and the deposit still does not get paid.",
          },
          {
            label: "Cost of doing it with Ligeff",
            headline: "$28,000 one-time, paid back in the first deposit.",
            body: "We study the materials, light the model like a photographer, and deliver stills, walkthrough, and film from one build. Deposits open in six weeks.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
