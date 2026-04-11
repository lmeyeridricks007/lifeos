import type { MoveChangingJobsStartCardConfig } from "./moveChangingJobsNl.config.types";

export const moveChangingJobsStartHereRegion = {
  id: "start-here",
  eyebrow: "Start here",
  title: "Before you change jobs",
  subtitle:
    "**Resigning**, **signing**, and **starting** are three different moments — each with its own risk. Use the cards below to **sequence** questions; you are not committing to every answer today.",
} as const;

export const moveChangingJobsStartCards: MoveChangingJobsStartCardConfig[] = [
  {
    id: "before-resign",
    iconKey: "resign",
    phaseBadge: "Before resigning",
    title: "Before you resign",
    intro:
      "While you are still employed, you have **leverage and clarity** on notice, clauses, and what the current employer must provide.",
    keyPoints: [
      "Lock **notice period**, **last realistic day**, and any **garden leave / payment in lieu** language before you announce",
      "If stay or work authorization might be **employer-linked**, confirm **what changes when you leave** — do not assume continuity",
      "List **benefits that end with employment** (insurance schemes, passes, internal mobility support) and **repayment triggers**",
      "Line up **income and housing**: proof-of-income stories, rent renewal timing, and **buffer** if a gap is possible",
    ],
  },
  {
    id: "before-sign",
    iconKey: "offer",
    phaseBadge: "Before signing",
    title: "Before you sign a new offer",
    intro:
      "Paper beats vibes: **start date**, **contract type**, **money rhythm**, and **who owns permit or payroll steps** should be explicit enough to plan around.",
    keyPoints: [
      "Compare **gross and net story**, **pension**, **holiday pay timing**, and **variable pay** — not the title alone",
      "Get **start date** and **probation** in writing; check they fit **notice** and any **processing time** you need",
      "Ask **who files what** for permits or checks, and **what you must upload** before day one",
      "Sanity-check **city, commute, and hybrid** against **rent and childcare geography**",
    ],
  },
  {
    id: "before-start",
    iconKey: "start",
    phaseBadge: "After the switch",
    title: "Before your new role starts",
    intro:
      "The gap between employers is where **payroll, insurance, BSN-linked admin, and documentation** either connect or collide.",
    keyPoints: [
      "Confirm **payroll start**, **insurance continuity**, and any **registration or ID updates** before the first payslip",
      "If there is a **gap**, plan **cash, coverage, and appointments** explicitly — short gaps still bite",
      "Re-run **net pay + rent + commute** as one picture with the **new** package",
      "If others depend on your employment story, sync **their** admin early — not after your start date",
    ],
  },
];
