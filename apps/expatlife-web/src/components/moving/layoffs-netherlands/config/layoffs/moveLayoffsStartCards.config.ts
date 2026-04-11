import type { MoveLayoffsStartCardConfig, MoveLayoffsStartHereRegionConfig } from "../moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES } from "./moveLayoffsNl.routes";

export const moveLayoffsStartHereRegion = {
  id: "start-here",
  eyebrow: "Start here",
  title: "Pick the phase you are in",
  subtitle:
    "Rumour, at risk, and confirmed need different steps. You are planning in order, not guessing the future.",
} as const satisfies MoveLayoffsStartHereRegionConfig;

export const moveLayoffsStartCards = [
  {
    id: "layoff-possible",
    anchorId: "phase-layoff-possible",
    iconKey: "layoffPossible",
    phaseBadge: "Early signal",
    title: "When layoffs are only talk",
    intro:
      "Stay calm and prepare quietly: skim your contract basics, save payslips and permit PDFs on your own device, and note whether your right to stay is linked to this job. Nothing is decided yet.",
    keyPoints: [
      "Contract — notice period and how a role can end (skim level)",
      "Documents — payslips, permit letters, rental contract → your storage",
      "Stay — if your permit depends on this employer, flag it and plan to ask HR later; do not self-diagnose",
      "Money — which fixed costs assume your current income",
    ],
    internalLinks: [
      { label: "Employment contract risk scanner", href: ROUTES.contractScanner, description: "Clause prompts." },
      { label: "Residence permits", href: ROUTES.residencePermits, description: "If stay may depend on work." },
    ],
  },
  {
    id: "layoff-likely",
    anchorId: "phase-layoff-likely",
    iconKey: "layoffUncertain",
    phaseBadge: "Role at risk",
    title: "When your role may actually end",
    intro:
      "Ask for clear facts: timeline, last working day, when pay stops, what support exists, and who handles immigration if that applies. Treat rumours and written messages separately.",
    keyPoints: [
      "Dates — last day, payroll end, benefit cut-offs",
      "Writing — what HR will put in an official letter or email",
      "Cash — even a short gap between payslips needs a plan",
      "Stay — if work supports your permit, keep immigration questions on the list",
      "Next job — light networking before access to systems disappears",
    ],
    internalLinks: [
      { label: "Extensions & changes", href: ROUTES.extensions, description: "Employer-linked shifts." },
      { label: "Changing jobs in the Netherlands", href: ROUTES.changingJobs, description: "When an offer appears." },
    ],
  },
  {
    id: "layoff-confirmed",
    anchorId: "phase-layoff-confirmed",
    iconKey: "layoffConfirmed",
    phaseBadge: "Confirmed",
    title: "Right after confirmation",
    intro:
      "Get dates and pay in writing, download documents before logins stop, and move time-sensitive stay or housing tasks up your list.",
    keyPoints: [
      "Stay — if tied to work, follow employer + IND steps; do not delay because it feels heavy",
      "Budget — use real end dates for rent, insurance, childcare",
      "Archive — HR, permit, and pay PDFs outside work email",
      "Basics first — health cover and proofs before the hardest weeks",
    ],
    whatMattersNext:
      "A simple list with dates and owners beats trying to solve everything in one night.",
    internalLinks: [
      { label: "Status changes", href: ROUTES.statusChanges, description: "If the basis of stay may move." },
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet, description: "Model next months." },
    ],
  },
] satisfies MoveLayoffsStartCardConfig[];
