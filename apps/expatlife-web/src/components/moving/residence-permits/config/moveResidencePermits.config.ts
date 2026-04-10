import type { MoveResidencePermitsPageMeta } from "./moveResidencePermits.types";
import {
  RESIDENCE_PERMITS_CANONICAL,
  RESIDENCE_PERMITS_HUB,
  RESIDENCE_PERMITS_VISAS,
} from "./moveResidencePermitConstants";
import {
  moveResidencePermitBasicsCards,
  moveResidencePermitFaq,
  moveResidencePermitLifecycle,
  moveResidencePermitMisunderstandings,
  moveResidencePermitReferences,
  moveResidencePermitRelatedTools,
  moveResidencePermitRouteCards,
  moveResidencePermitSections,
  moveResidencePermitTips,
} from "./content";

export {
  moveResidencePermitRouteCards,
  moveResidencePermitBasicsCards,
  moveResidencePermitSections,
  moveResidencePermitLifecycle,
  moveResidencePermitTips,
  moveResidencePermitMisunderstandings,
  moveResidencePermitFaq,
  moveResidencePermitReferences,
  moveResidencePermitRelatedTools,
};

/** @deprecated Prefer `moveResidencePermitRouteCards` */
export const moveResidencePermitsSituationCards = moveResidencePermitRouteCards;

/** @deprecated Prefer `moveResidencePermitBasicsCards` */
export const moveResidencePermitsPermitBasicsCards = moveResidencePermitBasicsCards;

/** @deprecated Use `moveResidencePermitSections.work` */
export const moveResidencePermitsWorkSection = moveResidencePermitSections.work;

/** @deprecated Use `moveResidencePermitLifecycle.afterApproval` */
export const moveResidencePermitsAfterApproval = moveResidencePermitLifecycle.afterApproval;

/** @deprecated Prefer `moveResidencePermitFaq` */
export const moveResidencePermitsFaq = moveResidencePermitFaq;

/** @deprecated Prefer `moveResidencePermitMisunderstandings` */
export const moveResidencePermitsMisunderstandings = moveResidencePermitMisunderstandings;

/** @deprecated Prefer `moveResidencePermitReferences` */
export const moveResidencePermitsReferences = moveResidencePermitReferences;

/** @deprecated Prefer `moveResidencePermitRelatedTools` */
export const moveResidencePermitsRelatedTools = moveResidencePermitRelatedTools;

/** @deprecated Prefer `moveResidencePermitTips` */
export const moveResidencePermitsTips = moveResidencePermitTips;

const pillarJourneyBridge: MoveResidencePermitsPageMeta["pillarJourneyBridge"] = {
  id: "move-pillar-context",
  eyebrow: "Inside the Move pillar",
  title: "How this page connects to the rest of ExpatCopilot",
  intro:
    "**Visas & residency** helps you **choose a path**. **This page** explains **how permits work, what comes next in time, and what to do after approval**. The **Moving hub** is the full guide. Below are the tools and pages people use most once dates and pay feel real.",
  links: [
    {
      href: RESIDENCE_PERMITS_HUB,
      label: "Moving to the Netherlands (hub)",
      description: "Scenarios, timeline, stages, and FAQs—the main entry for the Move guides.",
      meta: "Move",
    },
    {
      href: RESIDENCE_PERMITS_VISAS,
      label: "Visas & residency orientation",
      description: "Short cards for work, study, family, and freelance before you lock onto one permit name.",
      meta: "Move",
    },
    {
      href: "/netherlands/moving/working-in-the-netherlands/",
      label: "Working in the Netherlands",
      description: "Work-led move guide linking offers, salary, permits, payroll, and first-month setup.",
      meta: "Move",
    },
    {
      href: "/netherlands/moving/extensions-changes/",
      label: "Extensions & changes",
      description: "Renewals, job changes, study/family shifts—practical orientation after you land.",
      meta: "Move",
    },
    {
      href: "/netherlands/moving/status-changes/",
      label: "Status changes",
      description: "Basis-of-stay changes across work, study, family, and self-employment.",
      meta: "Move",
    },
    {
      href: "/netherlands/moving/tools/first-90-days/",
      label: "First 90 days planner",
      description: "Week-by-week tasks after you land—next to your permit steps.",
      meta: "Move",
    },
    {
      href: "/netherlands/moving/tools/arrival-planner/",
      label: "Arrival planner",
      description: "Order gemeente visits, banking, and insurance in your first weeks.",
      meta: "Move",
    },
    {
      href: "/netherlands/work/tools/job-offer-comparison/",
      label: "Job offer comparison",
      description: "Compare two offers side by side—not only the gross salary.",
      meta: "Work",
    },
    {
      href: "/netherlands/work/tools/employment-contract-risk-scanner/",
      label: "Employment contract risk scanner",
      description: "Spot important clauses before you sign.",
      meta: "Work",
    },
    {
      href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
      label: "Dutch salary (net) calculator",
      description: "Rough gross-to-net idea once pay timing is real.",
      meta: "Money",
    },
    {
      href: "/netherlands/taxes/tools/30-ruling-calculator/",
      label: "30% ruling calculator",
      description: "Rough check for the expat tax benefit (not a final answer).",
      meta: "Money",
    },
    {
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      label: "Cost of living calculator",
      description: "Rough monthly costs by city—after you have an income picture.",
      meta: "Money",
    },
    {
      href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
      label: "Healthcare allowance estimator",
      description: "Rough toeslag estimate with rent and income.",
      meta: "Money",
    },
    {
      href: "/netherlands/housing/tools/rent-affordability-calculator/",
      label: "Rent affordability calculator",
      description: "See if rent fits once you know take-home pay and city better.",
      meta: "Housing",
    },
    {
      href: "/netherlands/living/healthcare-basics/",
      label: "Healthcare basics",
      description: "How care and insurance fit together when you must insure.",
      meta: "Living",
    },
    {
      href: "/netherlands/living/survival-guide/",
      label: "Netherlands Survival Guide",
      description: "Travel, apps, payments, groceries—day-to-day life while admin is underway.",
      meta: "Living",
    },
  ],
};

export const moveResidencePermitsPageMeta: MoveResidencePermitsPageMeta = {
  canonicalPath: RESIDENCE_PERMITS_CANONICAL,
  movePillarHubPath: RESIDENCE_PERMITS_HUB,
  visasResidencyPath: RESIDENCE_PERMITS_VISAS,
  hero: {
    eyebrow: "Netherlands · Moving",
    pageTitle: "Residence Permits in the Netherlands",
    subtitle:
      "How Dutch residence permits tie to **why you’re here**, **what can change later**, and **what to sort after approval**—in plain language, not legal jargon.",
    bullets: [
      "See how **your situation** (work, study, family, freelance) shapes what applies",
      "Notice **renewal and big life changes** before they’re urgent",
      "Know **which page or tool** to open at each step",
    ],
    primaryCta: { label: "Start with the basics", href: "#permit-basics" },
    secondaryCta: { label: "See the common permit situations", href: "#common-situations" },
    compareLinks: {
      visasPage: { label: "Visas & residency orientation", href: RESIDENCE_PERMITS_VISAS },
      compareVisas: { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
    },
  },
  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Four quick answers—then when to use official sites.",
    cells: [
      {
        title: "What this page is for",
        body: "**A clear overview**: how permits, timing, and daily setup fit together—we’re not the immigration service (IND).",
      },
      {
        title: "Best for",
        body: "**Anyone** who wants the permit picture clear enough to plan—workers, students, families, freelancers, or people already in NL.",
      },
      {
        title: "What it covers",
        body: "Typical situations, **work vs other paths**, **renewals**, **after approval**, and **links** to our tools.",
      },
      {
        title: "What it skips",
        body: "**Final yes/no decisions** and **step-by-step forms**—that’s **IND** or an adviser.",
      },
    ],
    note: "**Your details decide what applies.** Use this page to get oriented; use **official sources** to confirm anything that affects your stay.",
  },
  commonSituationsRegion: {
    id: "common-situations",
    eyebrow: "Pick a lane",
    title: "Common residence permit situations",
    subtitle: "Six shortcuts—each shows who it’s for and what to focus on next. Tap the one that sounds like you.",
  },
  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#move-pillar-context", label: "Move context" },
    { href: "#permit-basics", label: "Start here" },
    { href: "#common-situations", label: "Common situations" },
    { href: "#work-permits", label: "Work permits" },
    { href: "#study-family-other", label: "Study / family / other stays" },
    { href: "#renewal-changes", label: "Renewal & changes" },
    { href: "#after-approval", label: "After approval" },
    { href: "#misunderstandings", label: "Common misunderstandings" },
    { href: "#what-next", label: "What to do next" },
    { href: "#helpful-tools", label: "Helpful tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ],
  deepLinks: [
    {
      href: RESIDENCE_PERMITS_HUB,
      label: "Moving to the Netherlands (hub)",
      description: "The full guide: stages, stories, and tools when you want the big picture.",
    },
    {
      href: RESIDENCE_PERMITS_VISAS,
      label: "Visas & residency orientation",
      description: "Overview and short cards before you go deep on one permit.",
    },
    {
      href: "/netherlands/moving/working-in-the-netherlands/",
      label: "Working in the Netherlands",
      description: "Use when a permit decision is tightly tied to a job offer, payroll, or relocation package.",
    },
    {
      href: "/netherlands/moving/twv-work-permit/",
      label: "TWV work permit",
      description: "Useful when employer-driven work authorization may matter more than a general permit summary.",
    },
    {
      href: "/netherlands/moving/extensions-changes/",
      label: "Extensions & changes in the Netherlands",
      description: "After arrival: renewals, job and life shifts—when to notice and what to open next.",
    },
    {
      href: "/netherlands/moving/status-changes/",
      label: "Status changes in the Netherlands",
      description: "Orientation for route shifts when work, study, family, or self-employment may change your basis of stay.",
    },
    {
      href: "/netherlands/visa/compare-visas/",
      label: "Compare visa routes",
      description: "Side-by-side when you want more detail than this page.",
    },
    {
      href: "/netherlands/moving/tools/",
      label: "Move & immigration tools",
      description: "Checklists, documents, first 90 days, and arrival planners.",
    },
    {
      href: "/netherlands/work/tools/",
      label: "Work tools hub",
      description: "Job offers, contracts, and pay tools when work is why you’re here.",
    },
  ],
  progressionSteps: [
    {
      id: "context",
      label: "Pick your situation",
      href: "#common-situations",
      description: "Work, study, family, freelance, renewal, or already in NL—then open the right guide.",
    },
    {
      id: "official",
      label: "Confirm with official sources",
      href: "#official-sources",
      description: "IND / Government.nl—or an adviser—for anything that officially decides your stay.",
    },
    {
      id: "later",
      label: "Note renewals & life changes",
      href: "/netherlands/moving/extensions-changes/",
      description: "Put end dates and big life changes on your radar early — orientation for after-arrival shifts.",
    },
    {
      id: "tools",
      label: "Open tools that match your week",
      href: "#helpful-tools",
      description: "Salary, rent, allowance, childcare—when numbers help you decide.",
    },
    {
      id: "life",
      label: "Sort local life alongside permits",
      href: "#after-approval",
      description: "BSN, bank, insurance, housing—part of the same move, not “later.”",
    },
  ],
  continueMove: {
    eyebrow: "Stay in the Move pillar",
    title: "Continue your move plan",
    subtitle: "The main hub plus a few useful next clicks.",
    cards: [
      {
        id: "hub",
        title: "Moving to the Netherlands",
        description: "Stages, scenarios, tools, and FAQs for the whole move.",
        href: RESIDENCE_PERMITS_HUB,
        ctaLabel: "Open hub",
      },
    {
      id: "visas",
      title: "Visas & residency orientation",
      description: "Wider overview next to this permit-focused page.",
      href: RESIDENCE_PERMITS_VISAS,
      ctaLabel: "Open guide",
    },
    {
      id: "working",
      title: "Working in the Netherlands",
      description: "Move-focused guide for comparing offers, payroll, permits, and first-month setup together.",
      href: "/netherlands/moving/working-in-the-netherlands/",
      ctaLabel: "Open guide",
    },
    {
      id: "twv",
      title: "TWV work permit",
      description: "Route guide for TWV, GVVA comparisons, employer action, and timing questions.",
      href: "/netherlands/moving/twv-work-permit/",
      ctaLabel: "Open guide",
    },
    {
      id: "extensions",
      title: "Extensions & changes in the Netherlands",
      description: "When expiries, job changes, or life shifts meet permit planning.",
      href: "/netherlands/moving/extensions-changes/",
      ctaLabel: "Open guide",
    },
    {
      id: "status",
      title: "Status changes in the Netherlands",
      description: "Use when the question is about a changing basis of stay, not only renewal timing.",
      href: "/netherlands/moving/status-changes/",
      ctaLabel: "Open guide",
    },
    {
      id: "first-90",
        title: "First 90 days planner",
        description: "Week-by-week priorities after landing.",
        href: "/netherlands/moving/tools/first-90-days/",
        ctaLabel: "Open planner",
      },
      {
        id: "docs",
        title: "Documents needed to move",
        description: "Which documents matter for your situation.",
        href: "/netherlands/documents-needed-to-move-netherlands/",
        ctaLabel: "Read guide",
      },
    ],
  },
  toolsRegion: {
    id: "helpful-tools",
    title: "Helpful tools & related guides",
    subtitle:
      "Same order as Visas & residency: **Move** first, then **work & money**, **housing**, **living**—open the block that fits your week.",
  },
  misunderstandingsRegion: {
    eyebrow: "Reality check",
    title: "What people often misunderstand",
    subtitle: "Seven short corrections—useful when online advice doesn’t match your dates.",
  },
  whatNextRegion: {
    eyebrow: "How to use this page",
    title: "What to do next",
    subtitle: "Five steps: your situation → official check → renewals → tools → daily setup.",
  },
  studyFamilySection: moveResidencePermitSections.routeCategories,
  renewalSection: moveResidencePermitLifecycle.renewal,
  pillarJourneyBridge,
};
