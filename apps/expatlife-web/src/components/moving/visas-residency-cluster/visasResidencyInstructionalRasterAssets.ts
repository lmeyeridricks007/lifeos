import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/visas-residency-instructional-raster";

export type VisasResidencyInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

const visasResidencyInstructionalFigures = {
  "compare-visas": {
    raster: {
      src: `${DIR}/nl-visas-compare-routes.webp`,
      alt: "Infographic comparing main Netherlands visa and residence routes by situation: work, study, family, and entrepreneurship.",
    },
    caption: "Use the table for landscape — then run the Visa Checker and read one route guide for numbers that change every year.",
  },
  "dutch-american-friendship-treaty": {
    raster: {
      src: `${DIR}/nl-visas-daft-us-entrepreneur.webp`,
      alt: "Infographic of the DAFT route for US entrepreneurs: treaty basis, capital, and typical IND steps in plain language.",
    },
    caption: "DAFT is US-only and self-employment shaped — confirm capital and business-case wording on IND before you book moves.",
  },
  "eu-blue-card": {
    raster: {
      src: `${DIR}/nl-visas-eu-blue-card.webp`,
      alt: "Infographic of EU Blue Card in the Netherlands: qualified employment, salary framing, and sponsor context versus national schemes.",
    },
    caption: "Blue Card is an EU framework with its own thresholds — stack it against Highly Skilled Migrant with your actual offer numbers.",
  },
  "highly-skilled-migrant": {
    raster: {
      src: `${DIR}/nl-visas-highly-skilled-migrant.webp`,
      alt: "Infographic of the Dutch Highly Skilled Migrant route: recognized sponsor, salary checks, and application flow.",
    },
    caption: "Sponsor and salary gates do the sorting — your employer’s IND recognition status is as important as the headline salary.",
  },
  "partner-family-visa": {
    raster: {
      src: `${DIR}/nl-visas-partner-family.webp`,
      alt: "Infographic of partner and family residence in the Netherlands: sponsor, income, relationship evidence, and IND application order.",
    },
    caption: "Income and relationship proofs carry the file — gemeente steps come after permit logic, not before.",
  },
  "self-employed-visa": {
    raster: {
      src: `${DIR}/nl-visas-self-employed.webp`,
      alt: "Infographic of the self-employed residence route in the Netherlands: business case, viability review, and IND milestones.",
    },
    caption: "Not DAFT — expect viability and continuity questions; treat the business plan as the spine of the application.",
  },
  "student-visa": {
    raster: {
      src: `${DIR}/nl-visas-student.webp`,
      alt: "Infographic of study residence in the Netherlands: institution as applicant channel, finances, and permit duration basics.",
    },
    caption: "The school usually drives the MVV or permit application — align their checklist with your passport and finance proofs early.",
  },
  "visas-residency": {
    raster: {
      src: `${DIR}/nl-moving-visas-residency-hub.webp`,
      alt: "Infographic hub map of Netherlands visas and residency topics: work, study, family, and entrepreneur doorways.",
    },
    caption: "Pick one doorway (work, study, family, business) — then read the route guide and IND pages for the live rule text.",
  },
  "residence-permits": {
    raster: {
      src: `${DIR}/nl-moving-residence-permits.webp`,
      alt: "Infographic of what a Dutch residence permit means after approval: purpose, validity, renewal, and links to BRP life.",
    },
    caption: "Purpose and end date on the card drive renewals and job rules — extensions are a different lens than status changes.",
  },
  "extensions-changes": {
    raster: {
      src: `${DIR}/nl-moving-extensions-changes.webp`,
      alt: "Infographic of extending Dutch residence and handling job or life changes: expiries, renewals, and employer shifts.",
    },
    caption: "Calendar expiries alongside payroll and housing — many issues are timing, not a new permit type.",
  },
  "status-changes": {
    raster: {
      src: `${DIR}/nl-moving-status-changes.webp`,
      alt: "Infographic of when the basis of stay in the Netherlands may change across work, study, family, or self-employment routes.",
    },
    caption: "If the reason you were admitted is shifting, IND wording matters more than forum shortcuts — pair this hub with route guides.",
  },
} as const satisfies Record<string, VisasResidencyInstructionalFigure>;

export type VisasResidencyInstructionalKey = keyof typeof visasResidencyInstructionalFigures;

export function getVisasResidencyInstructionalFigure(slug: string): VisasResidencyInstructionalFigure | undefined {
  return visasResidencyInstructionalFigures[slug as VisasResidencyInstructionalKey];
}
