import { moveStatusChangesCards } from "./moveStatusChangesCards.config";
import { moveStatusChangesFaq } from "./moveStatusChangesFaq.config";
import { moveStatusChangesLifecycle } from "./moveStatusChangesLifecycle.config";
import { moveStatusChangesMisunderstandings } from "./moveStatusChangesMisunderstandings.config";
import { moveStatusChangesReferences } from "./moveStatusChangesReferences.config";
import { moveStatusChangesRelatedTools } from "./moveStatusChangesRelatedTools.config";
import { moveStatusChangesRoutes as R } from "./moveStatusChanges.routes";
import { moveStatusChangesSections } from "./moveStatusChangesSections.config";
import { moveStatusChangesTips } from "./moveStatusChangesTips.config";
import type { StatusChangesPageMeta } from "./moveStatusChanges.types";

const HUB = R.hub;
const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;
const EXTENSIONS = R.extensionsChanges;
const CANONICAL = R.canonical;

export type { StatusChangesPageMeta } from "./moveStatusChanges.types";

export const statusChangesPageMeta: StatusChangesPageMeta = {
  canonicalPath: CANONICAL,
  movePillarHubPath: HUB,
  visasResidencyPath: VISAS,
  residencePermitsPath: PERMITS,
  extensionsChangesPath: EXTENSIONS,
  hero: {
    eyebrow: "Netherlands · Moving",
    pageTitle: "Status Changes in the Netherlands",
    subtitle:
      "A calm guide to what often matters when the **basis of your stay changes** — across **work, study, family, self-employment, and other life shifts** that can affect residency, timing, and everyday admin.",
    bullets: [
      "Understand what a **status change** usually means in practice",
      "See the common life situations that can affect your **residency picture**",
      "Learn why **timing, continuity, and admin planning** matter",
      "Get practical next steps without drowning in legal detail",
    ],
    primaryCta: { label: "Start with the common situations", href: "#common-situations" },
    secondaryCta: { label: "See what can be affected", href: "#life-impact" },
    compareLinks: {
      visasPage: { label: "Visas & residency orientation", href: VISAS },
      permitsPage: { label: "Residence permits in the Netherlands", href: PERMITS },
      extensionsPage: { label: "Extensions & changes in the Netherlands", href: EXTENSIONS },
    },
  },
  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "One practical orientation page for people whose reason for staying in the Netherlands may be shifting.",
    cells: [
      {
        title: "What this page is for",
        body: "**Practical orientation** when the **basis of your stay** may be changing, and you need to understand the shape of the issue before you dive into official detail.",
      },
      {
        title: "Best for",
        body: "**Expats already in the Netherlands**, workers, students, partners, families, freelancers, and founders whose **life circumstances** are moving.",
      },
      {
        title: "What it covers",
        body: "**Common status-change situations**, timing awareness, continuity questions, life admin impact, and the **next ExpatCopilot pages and tools** to open.",
      },
      {
        title: "What it skips",
        body: "**Case-specific legal rulings**, definitive outcomes, and full official process detail. This page helps you **spot when change matters**, not self-decide the result.",
      },
    ],
    note:
      "**Status change** is often about your **underlying reason for staying** changing, not only a date printed on a card. Use this page to **notice the shift**, map what else it may touch, and then confirm the details through official guidance or legal help.",
  },
  startHereRegion: {
    id: "start-here",
    eyebrow: "Start here",
    title: "What “status change” usually means",
    subtitle:
      "Before you get lost in details, anchor on **why you are here now**, **what changed**, and **which practical systems depend on that change**.",
  },
  commonSituationsRegion: {
    id: "common-situations",
    eyebrow: "Route orientation",
    title: "The most common status-change situations",
    subtitle:
      "Start with the pattern that feels closest. Each card is built to answer three fast questions: **is this me**, **why does it matter**, and **what should I open next**?",
  },
  workSection: moveStatusChangesSections.workSection,
  otherContextsRegion: moveStatusChangesSections.routeCategories,
  timingRegion: moveStatusChangesLifecycle.timingRegion,
  lifeImpactRegion: moveStatusChangesLifecycle.lifeImpactRegion,
  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#start-here", label: "Start here" },
    { href: "#common-situations", label: "Common situations" },
    { href: "#work-changes", label: "Work-related changes" },
    { href: "#study-family-self-employed", label: "Study / family / self-employed changes" },
    { href: "#timing-continuity", label: "Timing & continuity" },
    { href: "#life-impact", label: "Practical life impact" },
    { href: "#misunderstandings", label: "Common misunderstandings" },
    { href: "#what-next", label: "What to do next" },
    { href: "#helpful-tools", label: "Helpful tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ],
  deepLinks: [
    {
      href: HUB,
      label: "Moving to the Netherlands (hub)",
      description: "Full Move pillar: stages, scenarios, tools, and FAQs.",
    },
    {
      href: VISAS,
      label: "Visas & residency orientation",
      description: "Wider route map before you lock onto one permit story.",
    },
    {
      href: PERMITS,
      label: "Residence permits in the Netherlands",
      description: "Permit purpose, renewal, and after-approval logic.",
    },
    {
      href: EXTENSIONS,
      label: "Extensions & changes in the Netherlands",
      description: "Renewals and after-arrival shifts next to this status-change guide.",
    },
    {
      href: "/netherlands/moving/tools/first-90-days/",
      label: "First 90 days planner",
      description: "Useful when the change spills into practical setup and re-sequencing.",
    },
    {
      href: "/netherlands/visa/compare-visas/",
      label: "Compare visa routes",
      description: "Helpful when one legal basis may be turning into another.",
    },
  ],
  progressionSteps: [
    {
      id: "identify",
      label: "Identify what kind of status-change situation you are dealing with",
      href: "#common-situations",
      description: "Start with the closest real-life pattern: work, study, family, self-employed, mixed, or next-stage residence.",
    },
    {
      id: "basis",
      label: "Check whether your basis of stay may have changed",
      href: "#start-here",
      description: "Focus on the main reason your stay rests on today and what has changed around it.",
    },
    {
      id: "confirm",
      label: "Confirm details with official guidance or legal help where needed",
      href: "#official-sources",
      description: "Use IND, Government.nl, municipality guidance, or an adviser when the answer needs to be binding.",
    },
    {
      id: "impact",
      label: "Review the practical life areas that may be affected",
      href: "#life-impact",
      description: "Work, housing, healthcare, family, tax, and registration often move together.",
    },
    {
      id: "tools",
      label: "Open the right ExpatCopilot pages and tools",
      href: "#helpful-tools",
      description: "Use Move, Work, Money, Housing, Family, and Living tools one block at a time.",
    },
  ],
  continueMove: {
    eyebrow: "Stay in the Move pillar",
    title: "Continue your move plan",
    subtitle: "Status changes make more sense when you can move sideways into the sibling Move guides.",
    cards: [
      {
        id: "hub",
        title: "Moving to the Netherlands",
        description: "The full Move pillar: scenarios, stages, tools, and the wider relocation picture.",
        href: HUB,
        ctaLabel: "Open hub",
      },
      {
        id: "visas",
        title: "Visas & residency orientation",
        description: "Go broader when you need to compare routes, not just react to a life event.",
        href: VISAS,
        ctaLabel: "Open guide",
      },
      {
        id: "permits",
        title: "Residence permits in the Netherlands",
        description: "Permit purpose, renewal, and what residence means in practical life.",
        href: PERMITS,
        ctaLabel: "Open guide",
      },
      {
        id: "extensions",
        title: "Extensions & changes in the Netherlands",
        description: "The closest sibling guide for renewals, expiry timing, and after-arrival changes.",
        href: EXTENSIONS,
        ctaLabel: "Open guide",
      },
    ],
  },
  toolsRegion: {
    id: "helpful-tools",
    title: "Helpful tools & related guides",
    subtitle:
      "Use the same Move-pillar rhythm: **orientation pages first**, then **tools and adjacent guides** for numbers, timing, and practical life decisions.",
  },
  toolsJourneySnapshot: {
    eyebrow: "Product map",
    title: "Where this page sits in the Move pillar",
    subtitle:
      "**Visas & residency** helps you compare routes. **Residence permits** explains permit logic. **Extensions & changes** handles renewals and after-arrival shifts. **This page** helps when the **basis itself may be changing**.",
    steps: [
      {
        href: HUB,
        label: "Moving to the Netherlands",
        description: "Main Move pillar with the overall relocation sequence.",
        meta: "Move",
      },
      {
        href: VISAS,
        label: "Visas & residency orientation",
        description: "Route-doorway page for work, study, family, and self-employment.",
        meta: "Move",
      },
      {
        href: PERMITS,
        label: "Residence permits",
        description: "Permit logic, renewal band, and practical meaning after approval.",
        meta: "Move",
      },
      {
        href: EXTENSIONS,
        label: "Extensions & changes",
        description: "After-arrival timing, continuity, renewals, and life-change planning.",
        meta: "Move",
      },
    ],
  },
  misunderstandingsRegion: {
    eyebrow: "Reality check",
    title: "What people often misunderstand",
    subtitle: "Short reminders that keep this page practical instead of bureaucratic.",
  },
  whatNextRegion: {
    eyebrow: "How to use this page",
    title: "How to use this page and what to do next",
    subtitle:
      "You do not need to solve everything at once. The goal is to understand the **shape** of the situation, then open the **right next pages** in the right order.",
  },
  pillarJourneyBridge: {
    id: "move-pillar-context",
    eyebrow: "Inside the Move pillar",
    title: "How this page connects to the rest of ExpatCopilot",
    intro:
      "**Visas & residency** answers “what routes exist?” **Residence permits** answers “what does the permit mean over time?” **Extensions & changes** answers “what happens after arrival when dates shift?” **This page** sits in the middle when a **life change may be changing the basis itself**.",
    links: [
      { href: HUB, label: "Moving to the Netherlands", description: "The full relocation guide and hub.", meta: "Move" },
      { href: VISAS, label: "Visas & residency orientation", description: "Compare routes before you go deep on one.", meta: "Move" },
      { href: PERMITS, label: "Residence permits", description: "Purpose, renewal, and what residence means in real life.", meta: "Move" },
      { href: EXTENSIONS, label: "Extensions & changes", description: "Timing, continuity, and after-arrival shifts.", meta: "Move" },
      { href: "/netherlands/work/tools/job-offer-comparison/", label: "Job offer comparison", description: "Useful when status questions are tied to changing jobs.", meta: "Work" },
      { href: "/netherlands/taxes/tools/dutch-salary-net-calculator/", label: "Dutch salary (net) calculator", description: "Turn a work change into a realistic number.", meta: "Money" },
      { href: "/netherlands/housing/tools/rent-affordability-calculator/", label: "Rent affordability", description: "Stress-test housing during a transition.", meta: "Housing" },
      { href: "/netherlands/living/healthcare-basics/", label: "Healthcare basics", description: "Insurance and care continuity when life shifts.", meta: "Living" },
      { href: "/netherlands/family/tools/childcare-cost-estimator/", label: "Childcare cost estimator", description: "Useful when family change and budget planning overlap.", meta: "Family" },
    ],
  },
  startHereCards: moveStatusChangesCards.startHere,
  reassurance: moveStatusChangesTips.reassurance,
  commonSituations: moveStatusChangesCards.situations,
  misunderstandings: moveStatusChangesMisunderstandings,
  faq: moveStatusChangesFaq,
  references: moveStatusChangesReferences,
  relatedTools: moveStatusChangesRelatedTools,
};
