import type { MoveWorkingNlToolsJourneySnapshot } from "../../../working-in-the-netherlands/config/moveWorkingNl.types";
import type {
  MoveResigningJobContinueMoveConfig,
  MoveResigningJobExplorePillarCardConfig,
  MoveResigningJobRelatedToolsConfig,
  MoveResigningJobToolsRegionConfig,
} from "./moveResigningJobNl.config.types";
import { moveResigningJobNlRoutes as ROUTES, changingJobsNl, workingInNl } from "./moveResigningJobNl.routes";

/** Kept for page meta typing; categorized grids were removed from the resigning tools UI. */
export const moveResigningJobRelatedTools = {
  journeyIntro: "",
  sections: [],
} satisfies MoveResigningJobRelatedToolsConfig;

export const moveResigningJobToolsRegion = {
  id: "helpful-tools",
  title: "Helpful tools & related guides",
  subtitle:
    "A **short sequence** of high-signal links, then **Explore the Move pillar** for hubs and adjacent guides — **one** follow-up per visit is enough.",
} satisfies MoveResigningJobToolsRegionConfig;

/** Tight “next clicks” strip; wider discovery is the Explore grid below. */
export const moveResigningJobToolsJourneySnapshot = {
  eyebrow: "Product map",
  title: "A sensible sequence after this page",
  subtitle:
    "**Contract** pass first → **permits** if stay might move with the job → rough **net pay and rent** so the exit date is honest → **Changing jobs** only when a next offer is real.",
  steps: [
    { href: ROUTES.contractScanner, label: "Contract risk scanner", description: "Surface exit and clause questions before you commit to dates.", meta: "Work" },
    { href: ROUTES.residencePermits, label: "Residence permits", description: "When purpose or continuity of stay is unclear.", meta: "Move" },
    { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Rough take-home through a gap or a next role.", meta: "Money" },
    { href: ROUTES.rentAffordability, label: "Rent affordability calculator", description: "When proofs or income might change after you leave.", meta: "Housing" },
    { href: changingJobsNl, label: "Changing jobs in the Netherlands", description: "When exit timing and a next start need one plan.", meta: "Move" },
  ],
} satisfies MoveWorkingNlToolsJourneySnapshot;

export const moveResigningJobExplorePillarCards = [
  { href: ROUTES.hub, title: "Moving to the Netherlands", description: "Main Move hub for stages, scenarios, and tools.", meta: "Move" },
  { href: workingInNl, title: "Working in the Netherlands", description: "Work-led move framing and first-month setup context.", meta: "Move" },
  { href: changingJobsNl, title: "Changing jobs in the Netherlands", description: "When a next employer is part of the plan.", meta: "Move" },
  {
    href: ROUTES.layoffs,
    title: "Layoffs in the Netherlands",
    description: "When the employer may end the role — not only when you resign voluntarily.",
    meta: "Move",
  },
  { href: ROUTES.visas, title: "Visas & residency orientation", description: "Route doorway when status questions reopen.", meta: "Move" },
  { href: ROUTES.residencePermits, title: "Residence permits", description: "Permit continuity and purpose over time.", meta: "Move" },
  { href: ROUTES.extensions, title: "Extensions & changes", description: "After-arrival shifts and renewals.", meta: "Move" },
  { href: ROUTES.statusChanges, title: "Status changes", description: "When the basis of stay may move.", meta: "Move" },
  { href: ROUTES.twvWorkPermit, title: "TWV work permit", description: "Employer-driven work authorization context.", meta: "Move" },
  { href: ROUTES.moveTools, title: "Move & immigration tools", description: "Planners, checklists, and readiness flows.", meta: "Tools" },
  { href: ROUTES.workTools, title: "Work tools", description: "Offers, contracts, payslip literacy.", meta: "Work" },
  { href: ROUTES.moneyTools, title: "Money tools", description: "Salary, tax, and cost-of-living stack.", meta: "Money" },
  { href: ROUTES.housingTools, title: "Housing tools", description: "Rent and housing decisions.", meta: "Housing" },
] satisfies readonly MoveResigningJobExplorePillarCardConfig[];

export const moveResigningJobContinueMove = {
  eyebrow: "Stay in the Move pillar",
  title: "Continue your move and stay planning",
  subtitle: "Resignation sits next to permits, renewals, and the next chapter — these pages are the usual next stops.",
  cards: [
    {
      id: "hub",
      title: "Moving to the Netherlands",
      description: "The main hub when you want the wider relocation map back in view.",
      href: ROUTES.hub,
      ctaLabel: "Open hub",
    },
    {
      id: "working",
      title: "Working in the Netherlands",
      description: "When the work-led move story — not only the exit — needs context.",
      href: workingInNl,
      ctaLabel: "Open guide",
    },
    {
      id: "changing",
      title: "Changing jobs in the Netherlands",
      description: "When you are aligning exit timing with a next role.",
      href: changingJobsNl,
      ctaLabel: "Open guide",
    },
    {
      id: "layoffs",
      title: "Layoffs in the Netherlands",
      description: "When redundancy or restructuring may end the role instead of a voluntary exit.",
      href: ROUTES.layoffs,
      ctaLabel: "Open guide",
    },
    {
      id: "permits",
      title: "Residence permits",
      description: "When permit purpose or continuity questions are central.",
      href: ROUTES.residencePermits,
      ctaLabel: "Open guide",
    },
    {
      id: "extensions",
      title: "Extensions & changes",
      description: "When renewals, employer changes, or after-arrival shifts are live.",
      href: ROUTES.extensions,
      ctaLabel: "Open guide",
    },
    {
      id: "status",
      title: "Status changes",
      description: "When the basis of stay itself may be in motion.",
      href: ROUTES.statusChanges,
      ctaLabel: "Open guide",
    },
    {
      id: "twv",
      title: "TWV work permit",
      description: "When employer-linked work authorization may matter to the exit.",
      href: ROUTES.twvWorkPermit,
      ctaLabel: "Open guide",
    },
    {
      id: "visas",
      title: "Visas & residency orientation",
      description: "When you need the route doorway again.",
      href: ROUTES.visas,
      ctaLabel: "Open guide",
    },
  ],
} satisfies MoveResigningJobContinueMoveConfig;
