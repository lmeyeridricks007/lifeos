import type {
  MoveLayoffsMisunderstandingCardConfig,
  MoveLayoffsMisunderstandingsRegionConfig,
} from "../moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES } from "./moveLayoffsNl.routes";

export const moveLayoffsMisunderstandingsRegion = {
  eyebrow: "Reality check",
  title: "What people often misunderstand",
  subtitle:
    "Short reminders so you do not fix only the HR thread and forget rent, stay, or insurance a few weeks later.",
} as const satisfies MoveLayoffsMisunderstandingsRegionConfig;

export const moveLayoffsMisunderstandings = [
  {
    id: "mu-not-only-hr",
    title: "\"It is only HR.\"",
    body:
      "For many internationals it is also paperwork: right to stay, proof of income, payroll stopping, and family — alongside severance talk, not after it.",
  },
  {
    id: "mu-status-early",
    title: "\"I will deal with permits after I decompress.\"",
    body:
      "Some steps depend on last day and employer actions, not how you feel. You can still move calmly and early — those are not opposites.",
    internalLinks: [{ label: "Residence permits", href: ROUTES.residencePermits, description: "Stay basics." }],
  },
  {
    id: "mu-costs-dont-pause",
    title: "\"When the job stops, my costs pause.\"",
    body:
      "Rent, insurance, childcare, and subscriptions keep going. Sketch a thin month early, even if you hope for a quick new job.",
    internalLinks: [{ label: "Rent affordability calculator", href: ROUTES.rentAffordability, description: "Housing vs income." }],
  },
  {
    id: "mu-new-plan",
    title: "\"Understanding the exit is enough.\"",
    body:
      "Knowing how the job ends plus a rough plan for cash, stay, and job search is what makes the next weeks manageable.",
  },
  {
    id: "mu-wider-impact",
    title: "\"A layoff feels the same everywhere.\"",
    body:
      "In the Netherlands, expats often juggle landlord checks, permit rules, and family abroad — expect a bit more admin, not \"extra drama.\"",
  },
  {
    id: "mu-clarity-not-panic",
    title: "\"I must rush everything.\"",
    body:
      "Deadlines need speed; research can wait. Split your list so week one does not empty you for week four.",
  },
  {
    id: "mu-not-advice",
    title: "\"This page decides my outcome.\"",
    body:
      "It maps questions and tools. Your employer and official channels still decide what actually happens.",
  },
] satisfies MoveLayoffsMisunderstandingCardConfig[];
