import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/first-weeks-instructional-raster";

export type FirstWeeksInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

/** “First weeks & months” cluster — arrival rhythm guides. */
const firstWeeksInstructionalFigures = {
  "first-30-days-netherlands": {
    raster: {
      src: `${DIR}/nl-first-weeks-30-days.webp`,
      alt: "Infographic roadmap for the first 30 days in the Netherlands: registration, banking, insurance, and early admin checkpoints.",
    },
    caption: "Compress the noisy week-one list into a sequence — one appointment, one inbox, one proof at a time.",
  },
  "first-60-days-netherlands": {
    raster: {
      src: `${DIR}/nl-first-weeks-60-days.webp`,
      alt: "Infographic of the first 60 days after moving to the Netherlands: deepening routines beyond initial registration.",
    },
    caption: "Days 31–60 are where rent, payroll, and GP choices either feel steady or start to wobble — revisit assumptions weekly.",
  },
  "first-90-days-netherlands": {
    raster: {
      src: `${DIR}/nl-first-weeks-90-days.webp`,
      alt: "Infographic of the first 90 days in the Netherlands: stabilizing admin, housing, work rhythm, and everyday integration.",
    },
    caption: "Treat 90 days as a light audit window — enough time to see patterns, not enough to ignore expiring follow-ups.",
  },
} as const satisfies Record<string, FirstWeeksInstructionalFigure>;

export type FirstWeeksInstructionalSlug = keyof typeof firstWeeksInstructionalFigures;

export function getFirstWeeksInstructionalFigure(slug: string): FirstWeeksInstructionalFigure | undefined {
  return firstWeeksInstructionalFigures[slug as FirstWeeksInstructionalSlug];
}
