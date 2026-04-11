import type {
  MoveTwvWorkPermitContinueCard,
  MoveTwvWorkPermitExploreCard,
  MoveTwvWorkPermitRelatedTools,
  MoveTwvWorkPermitToolsJourneySnapshot,
} from "./moveTwvWorkPermit.types";
import { moveTwvWorkPermitRoutes } from "./moveTwvWorkPermit.shared";

const ROUTES = moveTwvWorkPermitRoutes;

export const moveTwvRelatedTools: MoveTwvWorkPermitRelatedTools = {
  journeyIntro:
    "**This page is the orientation layer.** Once you know whether TWV is relevant, use the sections below to move into route confirmation, offer evaluation, and real relocation planning.",
  sections: [
    {
      eyebrow: "Move & route clarity",
      description: "Use these when you still need to confirm the broad work and residence structure.",
      items: [
        {
          title: "Move hub",
          description: "The broader relocation guide with stages, scenarios, and tools.",
          href: ROUTES.hub,
          cta: "Open guide",
        },
        {
          title: "Working in the Netherlands",
          description: "Bridge TWV context into offers, payroll, salary, and move setup.",
          href: ROUTES.workingPage,
          cta: "Open guide",
        },
        {
          title: "Changing jobs in the Netherlands",
          description: "When you are switching employers and work authorization timing may move too.",
          href: ROUTES.changingJobs,
          cta: "Open guide",
        },
        {
          title: "Resigning a job in the Netherlands",
          description: "Exit planning when TWV or employer-linked work auth may interact with your last day.",
          href: ROUTES.resigningJob,
          cta: "Open guide",
        },
        {
          title: "Layoffs in the Netherlands",
          description: "When redundancy is in play — employer work permission, stay, and monthly life.",
          href: ROUTES.layoffs,
          cta: "Open guide",
        },
        {
          title: "Visas & residency",
          description: "Compare work, study, family, and self-employment routes before going deeper.",
          href: ROUTES.visas,
          cta: "Open guide",
        },
        {
          title: "Residence permits",
          description: "Useful when permit wording or permit purpose may change the answer.",
          href: ROUTES.residencePermits,
          cta: "Open guide",
        },
        {
          title: "Extensions & changes",
          description: "Use when timing, renewal, or later work changes start to matter.",
          href: ROUTES.extensions,
          cta: "Open guide",
        },
        {
          title: "Status changes",
          description: "Useful when the basis of stay itself may be shifting later.",
          href: ROUTES.statusChanges,
          cta: "Open guide",
        },
        {
          title: "Move & immigration tools",
          description: "Open the wider planner/checklist/tool set once route clarity turns into an actual move plan.",
          href: ROUTES.moveTools,
          cta: "Open hub",
        },
      ],
    },
    {
      eyebrow: "Offers, contracts & salary",
      description: "Use these when TWV questions affect how viable a job offer really is.",
      items: [
        {
          title: "Job offer comparison tool",
          description: "Compare total package value once route clarity affects the decision.",
          href: ROUTES.jobOffer,
          cta: "Open tool",
        },
        {
          title: "Employment contract risk scanner",
          description: "Stress-test clauses, start dates, and vague support language before you sign.",
          href: ROUTES.contractScanner,
          cta: "Open tool",
        },
        {
          title: "Dutch salary net calculator",
          description: "Translate gross into take-home once work authorization looks viable.",
          href: ROUTES.salaryNet,
          cta: "Open tool",
        },
        {
          title: "30% ruling calculator",
          description: "Useful when the route becomes real enough to think about the tax side too.",
          href: ROUTES.ruling,
          cta: "Open tool",
        },
        {
          title: "Cost of living calculator",
          description: "Pressure-test whether the move still works once timing and salary are real.",
          href: ROUTES.costOfLiving,
          cta: "Open tool",
        },
        {
          title: "Rent affordability calculator",
          description: "Add the housing reality once a TWV-related work route starts looking viable.",
          href: ROUTES.rentAffordability,
          cta: "Open tool",
        },
      ],
    },
    {
      eyebrow: "Arrival & life setup",
      description: "Use these when route clarity turns into an actual move timeline.",
      items: [
        {
          title: "First 90 days planner",
          description: "Sequence the first weeks once work and relocation timing are concrete.",
          href: ROUTES.first90Days,
          cta: "Open planner",
        },
        {
          title: "Arrival planner",
          description: "Organize registration, banking, insurance, and settling-in tasks.",
          href: ROUTES.arrivalPlanner,
          cta: "Open planner",
        },
        {
          title: "Healthcare basics",
          description: "Understand insurance and care setup once the move is becoming real.",
          href: ROUTES.healthcareBasics,
          cta: "Open guide",
        },
        {
          title: "Housing tools",
          description: "Use rent and housing-planning tools once your move dates and income feel real enough to act.",
          href: ROUTES.housingTools,
          cta: "Open hub",
        },
        {
          title: "Netherlands Survival Guide",
          description: "Daily systems, payments, transport, and local routine after the admin rush.",
          href: ROUTES.survivalGuide,
          cta: "Open guide",
        },
      ],
    },
  ],
};

export const moveTwvToolsJourneySnapshot: MoveTwvWorkPermitToolsJourneySnapshot = {
  eyebrow: "Product map",
  title: "Where this page sits in the TWV-related move journey",
  subtitle:
    "**Visas & residence pages** help you identify the route. **This page** explains when TWV is likely relevant. **Work tools** help you evaluate the offer and timing. **Move and living pages** help once the relocation becomes operational.",
  steps: [
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Start here when the route itself still needs naming.",
      meta: "Move",
    },
    {
      href: ROUTES.workingPage,
      label: "Working in the Netherlands",
      description: "Use when TWV questions need to sit next to offers, salary, payroll, and move setup.",
      meta: "Move",
    },
    {
      href: ROUTES.canonical,
      label: "TWV work permit",
      description: "Use when TWV might be the work-authorization frame you need to understand.",
      meta: "Move",
    },
    {
      href: ROUTES.jobOffer,
      label: "Job offer comparison",
      description: "Use when route certainty affects whether the offer really works.",
      meta: "Work",
    },
    {
      href: ROUTES.first90Days,
      label: "First 90 days planner",
      description: "Use once work authorization and relocation timing feel concrete.",
      meta: "Move",
    },
  ],
};

export const moveTwvExploreCards: MoveTwvWorkPermitExploreCard[] = [
  {
    href: ROUTES.hub,
    title: "Moving to the Netherlands",
    description: "The main Move pillar for stages, scenarios, and the bigger relocation sequence.",
    meta: "Move",
  },
  {
    href: ROUTES.visas,
    title: "Visas & residency orientation",
    description: "Route-doorway page before you fixate on one permit structure.",
    meta: "Move",
  },
  {
    href: ROUTES.workingPage,
    title: "Working in the Netherlands",
    description: "Work-led move guide for salary, contracts, permits, payroll, and first-month setup.",
    meta: "Move",
  },
  {
    href: ROUTES.residencePermits,
    title: "Residence permits in the Netherlands",
    description: "Permit wording, continuity, and what residence means in practical life.",
    meta: "Move",
  },
  {
    href: ROUTES.extensions,
    title: "Extensions & changes in the Netherlands",
    description: "Useful when work timing, renewals, or life changes start affecting continuity.",
    meta: "Move",
  },
  {
    href: ROUTES.statusChanges,
    title: "Status changes in the Netherlands",
    description: "Use when the basis of stay itself may be shifting later.",
    meta: "Move",
  },
  {
    href: ROUTES.costOfLiving,
    title: "Cost of living calculator",
    description: "Pressure-test whether a TWV-linked job move still works once housing and monthly costs are included.",
    meta: "Money",
  },
  {
    href: ROUTES.moveTools,
    title: "Move & immigration tools",
    description: "Checklists, planners, first 90 days, and arrival flow in one place.",
    meta: "Tools",
  },
  {
    href: ROUTES.workTools,
    title: "Work tools",
    description: "Job offer comparison, contract scanner, and other tools when work timing matters.",
    meta: "Work",
  },
  {
    href: ROUTES.housingTools,
    title: "Housing tools",
    description: "Useful once work timing and income are concrete enough to plan the move.",
    meta: "Housing",
  },
];

export const moveTwvContinueCards: MoveTwvWorkPermitContinueCard[] = [
  {
    id: "hub",
    title: "Moving to the Netherlands",
    description: "The main hub for the wider move, scenarios, timelines, and planning tools.",
    href: ROUTES.hub,
    ctaLabel: "Open hub",
  },
  {
    id: "working",
    title: "Working in the Netherlands",
    description: "Connect TWV context to the offer, salary, payroll, and practical move package.",
    href: ROUTES.workingPage,
    ctaLabel: "Open guide",
  },
  {
    id: "visas",
    title: "Visas & residency orientation",
    description: "Go broader if the route itself still needs naming.",
    href: ROUTES.visas,
    ctaLabel: "Open guide",
  },
  {
    id: "permits",
    title: "Residence permits in the Netherlands",
    description: "Go deeper on permit wording, continuity, and what changes later.",
    href: ROUTES.residencePermits,
    ctaLabel: "Open guide",
  },
  {
    id: "extensions",
    title: "Extensions & changes in the Netherlands",
    description: "Useful when timing, renewals, or work changes start affecting continuity.",
    href: ROUTES.extensions,
    ctaLabel: "Open guide",
  },
  {
    id: "status",
    title: "Status changes in the Netherlands",
    description: "Useful when the basis of stay may shift after a work, study, or family change.",
    href: ROUTES.statusChanges,
    ctaLabel: "Open guide",
  },
  {
    id: "arrival",
    title: "First 90 days planner",
    description: "Turn route clarity into a practical first-month plan once the move becomes real.",
    href: ROUTES.first90Days,
    ctaLabel: "Open planner",
  },
];
