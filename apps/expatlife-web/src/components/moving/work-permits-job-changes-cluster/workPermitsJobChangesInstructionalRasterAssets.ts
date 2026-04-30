import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/work-permits-job-changes-instructional-raster";

export type WorkPermitsJobChangesInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

const workPermitsJobChangesInstructionalFigures = {
  "working-in-the-netherlands": {
    raster: {
      src: `${DIR}/nl-work-working-in-nl.webp`,
      alt: "Realistic office scene: signing an employment contract at a desk with laptop and coffee, with subtle calendar and payslip cues for first payroll timing.",
    },
    caption: "Sort contract, right-to-work logic, and payroll timing in that order — then use one official checklist for anything that depends on your nationality or route.",
  },
  "changing-jobs-netherlands": {
    raster: {
      src: `${DIR}/nl-work-changing-jobs.webp`,
      alt: "Practical visual metaphor for changing employer: two workplaces linked by a path, with desk items such as ID badges and passport suggesting permit checks before switching.",
    },
    caption: "A job change is often a permit or sponsor question first — confirm what your residence purpose allows before you sign dates.",
  },
  "twv-work-permit": {
    raster: {
      src: `${DIR}/nl-work-twv-permit.webp`,
      alt: "Desk-top workflow still life: application folder, stamp, and a simple numbered timeline strip representing employer-led permit steps before a start date.",
    },
    caption: "TWV is employer-led paperwork — align realistic start dates with UWV timing and what your contract actually says.",
  },
  "resigning-job-netherlands": {
    raster: {
      src: `${DIR}/nl-work-resigning.webp`,
      alt: "Realistic meeting-room moment: handing a printed resignation letter across a table, with a wall clock suggesting notice-period timing and calm professional tone.",
    },
    caption: "Notice rules and contract clauses beat habit — put the essentials in writing and keep copies of dates and terms you rely on.",
  },
  "layoffs-netherlands": {
    raster: {
      src: `${DIR}/nl-work-layoffs.webp`,
      alt: "Split realistic workplace scene: group consultation on one side and an individual desk transition on the other, suggesting collective versus individual redundancy paths.",
    },
    caption: "Collective routes and individual exits follow different clocks — document what you are told and separate emotion from filing deadlines.",
  },
} as const satisfies Record<string, WorkPermitsJobChangesInstructionalFigure>;

export type WorkPermitsJobChangesInstructionalKey = keyof typeof workPermitsJobChangesInstructionalFigures;

export function getWorkPermitsJobChangesInstructionalFigure(
  key: string
): WorkPermitsJobChangesInstructionalFigure | undefined {
  return workPermitsJobChangesInstructionalFigures[key as WorkPermitsJobChangesInstructionalKey];
}
