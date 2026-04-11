import type { MoveWorkingNlRelatedTools } from "../../../working-in-the-netherlands/config/moveWorkingNl.types";
import { moveChangingJobsNlRoutes as ROUTES, workingInNl } from "./moveChangingJobsNl.routes";

/** Primary related-tools grid (grouped sections + journey intro). */
export const moveChangingJobsRelatedTools: MoveWorkingNlRelatedTools = {
  journeyIntro:
    "**Move** = route, permits, planners. **Work** = offers and contracts. **Money / Housing / Living** = monthly reality. This page is **Move**-hosted but **hands off** like **Working in NL** and **Extensions** — choose **one** block for this week’s bottleneck.",
  sections: [
    {
      eyebrow: "Move & residence",
      description: "When the switch might touch permits, renewals, or route context.",
      items: [
        { title: "Move hub", description: "Full relocation map and scenarios.", href: ROUTES.hub, cta: "Open guide" },
        { title: "Visas & residency", description: "Compare routes when status questions reopen.", href: ROUTES.visas, cta: "Open guide" },
        { title: "Residence permits", description: "Permit framing and continuity.", href: ROUTES.residencePermits, cta: "Open guide" },
        { title: "Extensions & changes", description: "Employer and life shifts after arrival.", href: ROUTES.extensions, cta: "Open guide" },
        { title: "Status changes", description: "Basis-of-stay transitions.", href: ROUTES.statusChanges, cta: "Open guide" },
        { title: "TWV work permit", description: "TWV-oriented orientation.", href: ROUTES.twvWorkPermit, cta: "Open guide" },
        { title: "First 90 days planner", description: "When dates and admin need sequencing.", href: ROUTES.first90Days, cta: "Open planner" },
        { title: "Arrival planner", description: "Handy when the switch coincides with a move window.", href: ROUTES.arrivalPlanner, cta: "Open planner" },
      ],
    },
    {
      eyebrow: "Offers, contracts & payroll",
      description: "When the package and contract language need a structured pass.",
      items: [
        { title: "Job offer comparison tool", description: "Side-by-side offer trade-offs.", href: ROUTES.jobOffer, cta: "Open tool" },
        { title: "Employment contract risk scanner", description: "Structured clause questions.", href: ROUTES.contractScanner, cta: "Open tool" },
        { title: "Employment type scenario tool", description: "Contract and work-model comparisons.", href: ROUTES.employmentType, cta: "Open tool" },
        { title: "Payslip decoder", description: "After payroll switches employers.", href: ROUTES.payslip, cta: "Open tool" },
        { title: "Work tools hub", description: "Full Work cluster index.", href: ROUTES.workTools, cta: "Open hub" },
        { title: "Working in the Netherlands (broader)", description: "Work-led move guide in the Move pillar.", href: workingInNl, cta: "Open guide" },
        { title: "Work in the Netherlands (Work cluster)", description: "Deeper everyday employment context.", href: ROUTES.workGuide, cta: "Open guide" },
      ],
    },
    {
      eyebrow: "Money, housing & family",
      description: "When monthly reality and household costs should move the decision.",
      items: [
        { title: "Dutch salary net calculator", description: "Take-home from gross.", href: ROUTES.salaryNet, cta: "Open tool" },
        { title: "30% ruling calculator", description: "Planning check where relevant.", href: ROUTES.ruling, cta: "Open tool" },
        { title: "Cost of living calculator", description: "City and household monthly model.", href: ROUTES.costOfLiving, cta: "Open tool" },
        { title: "Rent affordability calculator", description: "Housing vs income.", href: ROUTES.rentAffordability, cta: "Open tool" },
        { title: "Healthcare allowance estimator", description: "Rough allowance context.", href: ROUTES.healthcareAllowance, cta: "Open tool" },
        { title: "Childcare cost estimator", description: "Family cash flow around daycare.", href: ROUTES.childcare, cta: "Open tool" },
      ],
    },
    {
      eyebrow: "Living & setup",
      description: "When insurance, routine, and documents need attention around the switch.",
      items: [
        { title: "Healthcare basics", description: "How insurance fits together in NL.", href: ROUTES.healthcareBasics, cta: "Open guide" },
        {
          title: "Health insurance in the Netherlands",
          description: "Orientation when employer or gap timing touches coverage questions.",
          href: "/netherlands/health-insurance-netherlands/",
          cta: "Open guide",
        },
        {
          title: "After arriving in the Netherlands",
          description: "Setup flow when the job change collides with arrival tasks.",
          href: ROUTES.afterArriving,
          cta: "Open guide",
        },
        { title: "Netherlands survival guide", description: "Daily systems after the admin rush.", href: ROUTES.survivalGuide, cta: "Open guide" },
        { title: "Daily life basics", description: "Routine and local life orientation.", href: ROUTES.dailyLife, cta: "Open guide" },
        { title: "Document readiness", description: "When paperwork needs a structured pass.", href: ROUTES.documentReadiness, cta: "Open tool" },
      ],
    },
  ],
};

export const moveChangingJobsToolsRegion = {
  id: "helpful-tools",
  title: "Helpful tools & related guides",
  subtitle:
    "**Move** context when stay or dates tangle; **Work** for offers and contracts; **Money & Housing** for net pay and rent; **Living** for health and routine. **One cluster per visit** — then return with employer answers or new figures.",
} as const;

export const moveChangingJobsToolsJourneySnapshot = {
  eyebrow: "Product map",
  title: "A sensible sequence after this page",
  subtitle:
    "**Package → net pay → rent/household → planners** when dates slip. Reopen **permits / extensions / status** whenever the switch might touch **how** you stay — not only who pays you.",
  steps: [
    { href: ROUTES.jobOffer, label: "Job offer comparison", description: "When two packages or trade-offs are real.", meta: "Work" },
    { href: ROUTES.contractScanner, label: "Contract risk scanner", description: "When clause language needs a structured read.", meta: "Work" },
    { href: ROUTES.employmentType, label: "Employment type scenario tool", description: "When contract or payroll model is part of the decision.", meta: "Work" },
    { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "When take-home needs to be believable.", meta: "Money" },
    { href: ROUTES.ruling, label: "30% ruling calculator", description: "Rough planning when the facility might be in scope.", meta: "Money" },
    { href: ROUTES.costOfLiving, label: "Cost of living calculator", description: "City and household monthly pressure.", meta: "Money" },
    { href: ROUTES.rentAffordability, label: "Rent affordability calculator", description: "When housing pressure sits next to the switch.", meta: "Housing" },
    { href: ROUTES.first90Days, label: "First 90 days planner", description: "When the switch overlaps with arrival-style sequencing.", meta: "Move" },
  ],
} as const;

export const moveChangingJobsExplorePillarCards = [
  { href: ROUTES.hub, title: "Moving to the Netherlands", description: "Main Move hub for stages, scenarios, and tools.", meta: "Move" },
  { href: workingInNl, title: "Working in the Netherlands", description: "Work-led move framing when the relocation story is still central.", meta: "Move" },
  {
    href: ROUTES.layoffs,
    title: "Layoffs in the Netherlands",
    description: "When redundancy or role-ending risk is live — stay, money, and admin on one map.",
    meta: "Move",
  },
  { href: ROUTES.visas, title: "Visas & residency orientation", description: "Route doorway when status questions reappear.", meta: "Move" },
  { href: ROUTES.residencePermits, title: "Residence permits", description: "Permit continuity and purpose over time.", meta: "Move" },
  { href: ROUTES.extensions, title: "Extensions & changes", description: "After-arrival shifts and renewals.", meta: "Move" },
  { href: ROUTES.statusChanges, title: "Status changes", description: "When the basis of stay may move.", meta: "Move" },
  { href: ROUTES.twvWorkPermit, title: "TWV work permit", description: "TWV-oriented context when relevant.", meta: "Move" },
  { href: ROUTES.moveTools, title: "Move & immigration tools", description: "Planners, checklists, and readiness flows.", meta: "Tools" },
  { href: ROUTES.workTools, title: "Work tools", description: "Offers, contracts, payslip literacy.", meta: "Work" },
  { href: ROUTES.moneyTools, title: "Money tools", description: "Salary, tax, and cost-of-living stack.", meta: "Money" },
  { href: ROUTES.housingTools, title: "Housing tools", description: "Rent and housing decisions.", meta: "Housing" },
] as const;

export const moveChangingJobsContinueMove = {
  eyebrow: "Stay in the Move pillar",
  title: "Continue your move and stay planning",
  subtitle: "Job changes sit next to permit life, renewals, and everyday setup — these pages are the usual next stops.",
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
      description: "When the work-led move story — not only the switch — needs context.",
      href: workingInNl,
      ctaLabel: "Open guide",
    },
    {
      id: "layoffs",
      title: "Layoffs in the Netherlands",
      description: "When the role may end through redundancy — not only when you choose to switch.",
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
      description: "When employer-driven work authorization may be part of the switch.",
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
} as const;
