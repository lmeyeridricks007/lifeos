import type { MoveWorkingNlRelatedTools } from "../../../working-in-the-netherlands/config/moveWorkingNl.types";
import type { MoveLayoffsRelatedToolsPack } from "../moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES, workingInNl } from "./moveLayoffsNl.routes";

export const moveLayoffsRelatedTools: MoveWorkingNlRelatedTools = {
  journeyIntro:
    "You will see the same ExpatCopilot areas as on Working, Changing jobs, and Resigning — but when a job may end without you choosing it, the load is heavier. Move pages cover permits and planners; Work tools cover contracts and offers; Money / Housing / Living cover bills that keep running. Open one area per visit, check facts with HR or official sites, then come back with numbers.",
  /** Long multi-section tool grids removed from the Layoffs page UI — use journey snapshot, explore grid, and next steps instead. */
  sections: [],
};

export const moveLayoffsToolsRegion = {
  id: "helpful-tools",
  title: "Helpful tools & related guides",
  subtitle:
    "Like Working and Changing jobs, use Work tools for contracts and offers, Move guides when permits or renewals may change, and Money / Housing / Living when rent, benefits, childcare, or health need a honest check. Pick one block per visit, then return with facts from HR or official sites.",
} as const;

export const moveLayoffsToolsJourneySnapshot = {
  eyebrow: "Product map",
  title: "A sensible sequence after this page",
  subtitle:
    "Read this page → confirm employment facts → check stay if needed → model pay and household costs → open one tool hub. Return to Extensions, Status changes, or TWV when how you stay might change — not only when pay changes.",
  steps: [
    { href: "#what-layoffs-affect", label: "What layoffs can affect", description: "Four-lens scan before you go deep.", meta: "This page" },
    { href: ROUTES.contractScanner, label: "Contract risk scanner", description: "When exit or new-offer language is dense.", meta: "Work" },
    { href: ROUTES.employmentType, label: "Employment type scenario tool", description: "When contract or payroll model affects the exit.", meta: "Work" },
    { href: ROUTES.extensions, label: "Extensions & changes", description: "Renewals and after-arrival shifts on the calendar.", meta: "Move" },
    { href: ROUTES.statusChanges, label: "Status changes", description: "When the basis of stay may move.", meta: "Move" },
    { href: ROUTES.residencePermits, label: "Residence permits", description: "When stay may be employment-shaped.", meta: "Move" },
    { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Model take-home or gap months.", meta: "Money" },
    { href: ROUTES.ruling, label: "30% ruling calculator", description: "Rough planning where the facility may apply.", meta: "Money" },
    { href: ROUTES.rentAffordability, label: "Rent affordability calculator", description: "When housing must match new income.", meta: "Housing" },
    { href: ROUTES.healthcareAllowance, label: "Healthcare allowance estimator", description: "Rough allowance context in a gap.", meta: "Money" },
    { href: ROUTES.jobOffer, label: "Job offer comparison", description: "When a new package appears.", meta: "Work" },
    { href: ROUTES.movingChecklist, label: "Moving checklist", description: "Sequence tasks when everything moves at once.", meta: "Move" },
  ],
} as const;

/** Layoffs tools column omits the large “explore pillar” CardLink grid — hub links live in Continue move / journey snapshot. */
export const moveLayoffsExplorePillarCards = [] as const;

export const moveLayoffsContinueMove = {
  eyebrow: "Stay in the Move pillar",
  title: "Continue your move and stay planning",
  subtitle: "Layoffs sit next to ending work, permits, and monthly life admin — these pages are common next stops.",
  cards: [
    {
      id: "hub",
      title: "Moving to the Netherlands",
      description: "The wider relocation map when you want context beyond this moment.",
      href: ROUTES.hub,
      ctaLabel: "Open hub",
    },
    {
      id: "working",
      title: "Working in the Netherlands",
      description: "When the work-led move story still frames your questions.",
      href: workingInNl,
      ctaLabel: "Open guide",
    },
    {
      id: "changing",
      title: "Changing jobs in the Netherlands",
      description: "When a new role or offer is part of the path forward.",
      href: ROUTES.changingJobs,
      ctaLabel: "Open guide",
    },
    {
      id: "resigning",
      title: "Resigning a job in the Netherlands",
      description: "When voluntary exit timing and contract review are also in play.",
      href: ROUTES.resigningJob,
      ctaLabel: "Open guide",
    },
    {
      id: "permits",
      title: "Residence permits",
      description: "When permit purpose or continuity is central.",
      href: ROUTES.residencePermits,
      ctaLabel: "Open guide",
    },
    {
      id: "extensions",
      title: "Extensions & changes",
      description: "Renewals, employer shifts, and after-arrival changes.",
      href: ROUTES.extensions,
      ctaLabel: "Open guide",
    },
    {
      id: "status",
      title: "Status changes",
      description: "When the basis of stay — not only the employer — may be in motion.",
      href: ROUTES.statusChanges,
      ctaLabel: "Open guide",
    },
    {
      id: "visas",
      title: "Visas & residency orientation",
      description: "Route doorway when you need the wider permit picture again.",
      href: ROUTES.visas,
      ctaLabel: "Open guide",
    },
    {
      id: "twv",
      title: "TWV work permit",
      description: "Employer-linked work authorization when that layer applies.",
      href: ROUTES.twvWorkPermit,
      ctaLabel: "Open guide",
    },
    {
      id: "move-tools",
      title: "Move & immigration tools",
      description: "Planners and checklists when dates and tasks need sequencing.",
      href: ROUTES.moveTools,
      ctaLabel: "Open hub",
    },
  ],
} as const;

/** Grouped for `moveLayoffsContentBundle.relatedTools` and assembly. */
export const moveLayoffsRelatedToolsPack = {
  relatedTools: moveLayoffsRelatedTools,
  toolsRegion: moveLayoffsToolsRegion,
  toolsJourneySnapshot: moveLayoffsToolsJourneySnapshot,
  explorePillarCards: moveLayoffsExplorePillarCards,
  continueMove: moveLayoffsContinueMove,
} satisfies MoveLayoffsRelatedToolsPack;
