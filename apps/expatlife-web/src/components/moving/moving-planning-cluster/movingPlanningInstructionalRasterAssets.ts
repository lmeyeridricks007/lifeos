import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/moving-planning-instructional-raster";

export type MovingPlanningInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

const movingPlanningInstructionalFigures = {
  "moving-to-the-netherlands": {
    raster: {
      src: `${DIR}/nl-moving-planning-hub.webp`,
      alt: "Infographic overview of moving to the Netherlands in stages: preparation, first weeks after arrival, and settling in.",
    },
    caption: "Stages and tools on this hub connect to the Planning guides — always confirm visa and permit rules on official sites.",
  },
  "moving-to-netherlands-from": {
    raster: {
      src: `${DIR}/nl-moving-planning-from-your-country.webp`,
      alt: "Infographic on using origin-country guides, EU vs non-EU context, and tools when moving to the Netherlands from abroad.",
    },
    caption: "Pick your origin guide first — then run documents, cost, and checklist tools with the same assumptions end to end.",
  },
  "moving-checklist-netherlands": {
    raster: {
      src: `${DIR}/nl-moving-planning-checklist.webp`,
      alt: "Infographic of a phased moving checklist for the Netherlands from weeks before departure through the first month.",
    },
    caption: "Treat phases as buckets — adapt dates to your route, housing market, and employer timing.",
  },
  "documents-needed-to-move-netherlands": {
    raster: {
      src: `${DIR}/nl-moving-planning-documents.webp`,
      alt: "Infographic of typical document categories for moving to the Netherlands: identity, housing, work or study, and legalized translations.",
    },
    caption: "Use this as a packing list for paperwork — gemeente, IND, and employers each ask for different subsets.",
  },
  "moving-to-netherlands-timeline": {
    raster: {
      src: `${DIR}/nl-moving-planning-timeline.webp`,
      alt: "Infographic timeline for planning a move to the Netherlands with milestones for visa, housing, and arrival admin.",
    },
    caption: "Slide milestones on your calendar — long non-EU permit lead times and tight housing markets are the usual compressors.",
  },
  "moving-to-netherlands-cost": {
    raster: {
      src: `${DIR}/nl-moving-planning-costs.webp`,
      alt: "Infographic of major cost buckets when moving to the Netherlands: fees, travel and shipping, and first-month cash buffer.",
    },
    caption: "Cash flow beats averages — add a buffer for deposits, first rent, and anything your origin route makes slower.",
  },
  "moving-to-netherlands-with-family": {
    raster: {
      src: `${DIR}/nl-moving-planning-with-family.webp`,
      alt: "Infographic of family relocation angles for the Netherlands: schools and childcare, housing space, and registration per member.",
    },
    caption: "Parallel tracks for adults and children — school search and permits rarely finish on the same week.",
  },
  "move-to-netherlands-without-job": {
    raster: {
      src: `${DIR}/nl-moving-planning-without-job.webp`,
      alt: "Infographic contrasting EU free movement job search context with non-EU routes that usually need a stated residence purpose.",
    },
    caption: "Nationality and route decide what is realistic — pair this page with the EU vs non-EU guide and IND wording.",
  },
  "eu-vs-non-eu-moving-to-netherlands": {
    raster: {
      src: `${DIR}/nl-moving-planning-eu-vs-non-eu.webp`,
      alt: "Infographic comparing EU and non-EU relocation angles for the Netherlands: documents, permits, and typical timing differences.",
    },
    caption: "High-level map only — your exact basis of stay still lives in IND and employer or school confirmations.",
  },
  "bringing-pets-to-netherlands": {
    raster: {
      src: `${DIR}/nl-moving-planning-bringing-pets.webp`,
      alt: "Infographic of steps to bring pets to the Netherlands: identification, rabies rules, travel carrier, and arrival checks.",
    },
    caption: "Airline rules stack on top of EU NL import rules — book transport only after the health timeline fits.",
  },
} as const satisfies Record<string, MovingPlanningInstructionalFigure>;

export type MovingPlanningInstructionalSlug = keyof typeof movingPlanningInstructionalFigures;

export function getMovingPlanningInstructionalFigure(slug: string): MovingPlanningInstructionalFigure | undefined {
  return movingPlanningInstructionalFigures[slug as MovingPlanningInstructionalSlug];
}
