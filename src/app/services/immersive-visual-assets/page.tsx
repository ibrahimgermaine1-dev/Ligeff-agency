import { ServicePage } from "@/components/site/service-page";
import { PILLARS } from "@/lib/site/pillars";

export const metadata = {
  title: "3D Rendering & Visuals — Sell it before you build it",
  description:
    "We create photorealistic 3D renders and videos of buildings and products that don't exist yet, so buyers can see exactly what they're buying.",
};

export default function ImmersiveVisualAssetsPage() {
  const pillar = PILLARS[1];

  return (
    <ServicePage
      data={{
        pillar,
        heroHeadline:
          "Buyers can't want what they can't see. And your most expensive product is the one you can't show them yet.",
        heroBody:
          "We render buildings, interiors, and products in photorealistic detail, before they exist in real life. Buyers can walk through a property that hasn't broken ground, or hold a product that hasn't been manufactured. The sale is half-closed in their head before they ever speak to your team.",
        phases: [
          {
            n: "01",
            title: "Learn the materials.",
            body: "We sit with your architect or designer and learn the materials, the light, and the feeling of the thing we're about to render.",
          },
          {
            n: "02",
            title: "Model and light it.",
            body: "We build the 3D model in native tools and light it the way a real photographer would light the real building.",
          },
          {
            n: "03",
            title: "Add AI where it helps.",
            body: "We use AI to turn still images into video, fill empty rooms with the right people, and create walkthroughs. Only where it actually helps.",
          },
          {
            n: "04",
            title: "Deliver every format.",
            body: "Stills for the brochure, walkthrough for the website, video for the sales call. All from one model, all consistent.",
          },
        ],
        proofHeadline: "Renders that look like the real building.",
        proofBody:
          "Every image below is a real frame from a real project, rendered from a real 3D model, lit to match the real light the real building will receive. If it doesn't look like the building will look, we don't ship it.",
        proofItems: [
          {
            src: "/samples/pillar-02-renderflaux/rf-04.jpg",
            alt: "Photorealistic 3D render of a curved-roof cabin in an autumn forest",
            ratio: "16 / 10",
            label: "EXTERIOR · CURVED-ROOF CABIN",
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
        mathHeadline: "3.4× more deposits in six weeks.",
        mathBody:
          "This number is the average across three property developer projects. We compared deposits in the six months before the renders went live to deposits in the six months after. The lift is consistent because the mechanism is simple: buyers could finally see what they were buying.",
        mathColumns: [
          {
            label: "Do nothing",
            headline: "Zero deposits against a $4M build.",
            body: "Buyers can't picture the result. The deposit never gets paid. The build slips. The financing costs compound. A competitor who rendered their building takes the buyer.",
          },
          {
            label: "Do it cheap",
            headline: "$6,000 wasted on renders that look fake.",
            body: "A cheap vendor renders without studying the materials or the light. The renders look like renders. Buyers don't trust them. The deposit still doesn't get paid.",
          },
          {
            label: "Do it with Ligeff",
            headline: "$28,000 one-time. Paid back in the first deposit.",
            body: "We study the materials, light the model properly, and deliver stills, walkthrough, and video from one build. Deposits start coming in within six weeks.",
            emphasis: true,
          },
        ],
      }}
    />
  );
}
