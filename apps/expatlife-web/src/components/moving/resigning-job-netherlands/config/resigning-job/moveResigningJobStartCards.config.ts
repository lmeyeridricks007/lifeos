import type { MoveResigningJobStartCardConfig, MoveResigningJobStartHereRegionConfig } from "./moveResigningJobNl.config.types";

export const moveResigningJobStartHereRegion = {
  id: "start-here",
  eyebrow: "Start here",
  title: "Three checkpoints",
  subtitle:
    "Same resignation — **three different moments** on the calendar. Hit each gate so you do not lock a date before **constraints** and **dependencies** are visible.",
} satisfies MoveResigningJobStartHereRegionConfig;

export const moveResigningJobStartCards = [
  {
    id: "before-submit",
    anchorId: "checkpoint-before-notice",
    iconKey: "resign",
    phaseBadge: "Before notice",
    title: "Before you hand in notice",
    intro:
      "Stay in **read-and-ask** mode: map **exit terms** and anything that might break if employment ends — **permits, rent proofs, partner files**, not only feelings about the role.",
    keyPoints: [
      "**Contract**: notice, probation, repayment, non-compete, IP — skim the full exit picture",
      "**How notice is given** (channel, language, who signs) — avoid sloppy mechanics",
      "**Stay / sponsor**: if work and residence feel linked, ask **mobility or HR** before dates are real",
      "**Cash runway**: rough weeks until **last pay** vs **fixed costs** if there is no next job",
    ],
  },
  {
    id: "before-final-date",
    anchorId: "checkpoint-before-last-day",
    iconKey: "offer",
    phaseBadge: "Before last day is fixed",
    title: "Before the last day is set in stone",
    intro:
      "Once the **last day** is written down, **payroll, access, and letters** start snapping to that date. Align it with **income gaps** and **anything employer-gated** first.",
    keyPoints: [
      "**Next income**: signed offer vs honest gap — model **insurance and rent** for the lean case",
      "**Leave, bonus, commission**: what requires you to **still be on payroll**",
      "**Handover vs personal runway** — they are related but not identical",
      "**Employer letters** (housing, authority) you need **while** the account still exists",
    ],
  },
  {
    id: "before-employment-ends",
    anchorId: "checkpoint-final-weeks",
    iconKey: "start",
    phaseBadge: "Final weeks",
    title: "Before payroll and access stop",
    intro:
      "Last weeks are when **exports and confirmations** are easiest. After the last day, **portals and goodwill** can move faster than you expect.",
    keyPoints: [
      "**Payslips and HR PDFs** — download what **landlords, benefits, or UWV** might ask for",
      "**Healthcare**: when employer schemes end and **what replaces them**",
      "**Mobility / IND steps** the employer still owes — **names, dates, in writing**",
      "**Written recap**: last day, leave balance, payout timing — **factual email** beats memory",
    ],
  },
] satisfies MoveResigningJobStartCardConfig[];
