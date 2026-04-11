import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";

const HUB = R.hub;
const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;

/**
 * Page chrome: hero, at-a-glance, nav, deep links, journey bridge, tools headers, continue-move, regions.
 * Content slices live in sibling `moveExtensionsChanges*.config.ts` files.
 */
export const moveExtensionsChangesShell = {
  hero: {
    eyebrow: "Netherlands · Moving",
    pageTitle: "Extensions & Changes in the Netherlands",
    subtitle:
      "After you land, life keeps moving. This page maps **renewals**, **work and study shifts**, **family changes**, and **route switches** — what to notice, what often needs a follow-up, and **where to read next**.",
    bullets: [
      "See when a **change in work, study, family, or business** might touch your permit or sponsor story",
      "Build **time on the calendar** for renewals and transitions — before everything piles up",
      "Scan **seven common situations** and open the guide or tool that fits",
      "Use ExpatCopilot for **orientation**; confirm outcomes with **IND**, Government.nl, or an adviser",
    ],
    primaryCta: { label: "Start with the common situations", href: "#common-situations" },
    secondaryCta: { label: "See what often changes after arrival", href: "#start-here" },
    compareLinks: {
      visasPage: { label: "Visas & residency orientation", href: VISAS },
      permitsPage: { label: "Residence permits in the Netherlands", href: PERMITS },
    },
  },
  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Four anchors — skim once, then jump to the section that matches your week.",
    cells: [
      {
        title: "What this page is for",
        body: "**Orientation** when your **permit, sponsor, or life picture** may need an update — not a decision on your case.",
      },
      {
        title: "Best for",
        body: "**Already in the Netherlands** — employed, studying, with a partner or family, self-employed, or watching an **end date** approach.",
      },
      {
        title: "What it covers",
        body: "**Typical extension and change paths**, **what to track on a timeline**, **life admin** that moves in parallel, and **links** into deeper guides and tools.",
      },
      {
        title: "What it skips",
        body: "**Binding legal answers** and **step-by-step IND procedure** for every nationality — use **official sources** or **qualified help** for the final word.",
      },
    ],
    note: "**Small shifts** (job, address, study end) can matter more than the headline “I’m already here.” Use this page to **spot the thread**; use **official channels** when stakes are high.",
  },
  commonSituationsRegion: {
    id: "common-situations",
    eyebrow: "Route orientation",
    title: "The most common extension / change situations",
    subtitle:
      "Seven patterns after arrival. Each card: **who it fits**, **what to do next**, and a **single link** — no need to read everything.",
  },
  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#start-here", label: "Start here" },
    { href: "#common-situations", label: "Common situations" },
    { href: "#work-changes", label: "Work changes" },
    { href: "#study-family-changes", label: "Study / family / self-employed" },
    { href: "#timing-expiry", label: "Timing & expiry" },
    { href: "#life-impact", label: "Life impact" },
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
      description: "Route doorway cards before you fixate on one permit name.",
    },
    {
      href: PERMITS,
      label: "Residence permits in the Netherlands",
      description: "Purpose, renewal, after approval — next to this change-focused guide.",
    },
    {
      href: "/netherlands/moving/changing-jobs-netherlands/",
      label: "Changing jobs in the Netherlands",
      description: "Contracts, permits, salary timing, and household admin when switching employers.",
    },
    {
      href: "/netherlands/moving/resigning-job-netherlands/",
      label: "Resigning a job in the Netherlands",
      description: "Notice, contract review, and stay or money questions before you resign.",
    },
    {
      href: "/netherlands/moving/layoffs-netherlands/",
      label: "Layoffs in the Netherlands",
      description: "When a role may end involuntarily — map permits, payroll, rent, and family admin calmly.",
    },
    {
      href: "/netherlands/moving/status-changes/",
      label: "Status changes in the Netherlands",
      description: "When the basis of stay may be changing, not only the renewal or expiry timeline.",
    },
    {
      href: "/netherlands/moving/tools/first-90-days/",
      label: "First 90 days planner",
      description: "Week-by-week after landing — still useful when life shifts later.",
    },
    {
      href: "/netherlands/moving/tools/arrival-planner/",
      label: "Arrival planner",
      description: "Reorder gemeente, bank, and insurance when your situation changes.",
    },
    {
      href: "/netherlands/visa/compare-visas/",
      label: "Compare visa routes",
      description: "High-level comparison when you might switch basis.",
    },
  ],
  progressionSteps: [
    {
      id: "name",
      label: "Name the change or extension situation",
      href: "#common-situations",
      description: "Pick the closest card — expiry, job, study, family, ZZP, or mixed.",
    },
    {
      id: "check",
      label: "Check if it may affect residence / admin",
      href: "#start-here",
      description: "Quick pass on **purpose** and **dates** — no need to catastrophise.",
    },
    {
      id: "official",
      label: "Confirm with official guidance or help",
      href: "#official-sources",
      description: "**IND**, Government.nl, gemeente, or an adviser when the answer must be **binding**.",
    },
    {
      id: "life",
      label: "Review practical life areas",
      href: "#life-impact",
      description: "Work, housing, insurance, BSN, family — what might move **alongside** the permit.",
    },
    {
      id: "tools",
      label: "Open the right ExpatCopilot tools",
      href: "#helpful-tools",
      description: "Salary, rent, allowance, childcare — **one** tool block per sitting.",
    },
  ],
  continueMove: {
    eyebrow: "Stay in the Move pillar",
    title: "Continue your move plan",
    subtitle: "Hub, orientation pages, and planners that pair with extensions and changes.",
    cards: [
      {
        id: "hub",
        title: "Moving to the Netherlands",
        description: "Stages, scenarios, tools, and FAQs for the whole move.",
        href: HUB,
        ctaLabel: "Open hub",
      },
      {
        id: "visas",
        title: "Visas & residency orientation",
        description: "Wider route map next to this after-arrival guide.",
        href: VISAS,
        ctaLabel: "Open guide",
      },
      {
        id: "permits",
        title: "Residence permits in the Netherlands",
        description: "Permit logic, renewal band, and after-approval setup.",
        href: PERMITS,
        ctaLabel: "Open guide",
      },
      {
        id: "changing-jobs",
        title: "Changing jobs in the Netherlands",
        description: "Orientation when a new job may touch permits, payroll, rent, and family timing — not only HR.",
        href: "/netherlands/moving/changing-jobs-netherlands/",
        ctaLabel: "Open guide",
      },
      {
        id: "resigning",
        title: "Resigning a job in the Netherlands",
        description: "When leaving a job may touch permits, gaps, and household admin — not only notice length.",
        href: "/netherlands/moving/resigning-job-netherlands/",
        ctaLabel: "Open guide",
      },
      {
        id: "layoffs",
        title: "Layoffs in the Netherlands",
        description: "Redundancy and employment ending next to stay, money, and practical life planning.",
        href: "/netherlands/moving/layoffs-netherlands/",
        ctaLabel: "Open guide",
      },
      {
        id: "status",
        title: "Status changes in the Netherlands",
        description: "For work, study, family, and self-employment shifts that may change the basis of stay.",
        href: "/netherlands/moving/status-changes/",
        ctaLabel: "Open guide",
      },
      {
        id: "first-90",
        title: "First 90 days planner",
        description: "Still useful when you’re re-sequencing admin after a change.",
        href: "/netherlands/moving/tools/first-90-days/",
        ctaLabel: "Open planner",
      },
    ],
  },
  toolsRegion: {
    id: "helpful-tools",
    title: "Helpful tools & related guides",
    subtitle:
      "Same rhythm as the **Move hub**: **permits and planners** first, then **work & pay**, **money**, **housing & living** — **one** strip per visit.",
  },
  toolsJourneySnapshot: {
    eyebrow: "Product map",
    title: "Where this page sits in the Move pillar",
    subtitle:
      "**After-arrival** layer: you may have seen **Visas** or **Permits** already. When life shifts, loop **hub → orientation → tools** — same stack as the rest of Move.",
    steps: [
      {
        href: HUB,
        label: "Moving to the Netherlands",
        description: "Main Move pillar: stages, scenarios, and the same helpful-tools rhythm you see here.",
        meta: "Move",
      },
      {
        href: VISAS,
        label: "Visas & residency orientation",
        description: "Re-check your route if your basis might change (work, study, family, ZZP).",
        meta: "Move",
      },
      {
        href: PERMITS,
        label: "Residence permits",
        description: "Renewal band and permit logic — pairs directly with extension and change questions.",
        meta: "Move",
      },
      {
        href: "/netherlands/moving/changing-jobs-netherlands/",
        label: "Changing jobs in the Netherlands",
        description: "Job-switch checklist next to employer and renewal timing questions.",
        meta: "Move",
      },
      {
        href: "/netherlands/moving/resigning-job-netherlands/",
        label: "Resigning a job in the Netherlands",
        description: "Exit planning when employment may end and renewals or gaps need the same calendar.",
        meta: "Move",
      },
      {
        href: "/netherlands/moving/layoffs-netherlands/",
        label: "Layoffs in the Netherlands",
        description: "When redundancy is in play — stay, payroll, rent, and family admin on one map.",
        meta: "Move",
      },
      {
        href: "/netherlands/moving/status-changes/",
        label: "Status changes",
        description: "Companion guide when the underlying basis of stay may be shifting.",
        meta: "Move",
      },
      {
        href: "/netherlands/moving/tools/",
        label: "Move & immigration tools",
        description: "First 90 days, arrival planner, document readiness, and checklists in one hub.",
        meta: "Tools",
      },
    ],
  },
  misunderstandingsRegion: {
    eyebrow: "Reality check",
    title: "What people often misunderstand",
    subtitle: "Short reminders when **blog posts** and **your permit type** don’t line up.",
  },
  whatNextRegion: {
    eyebrow: "How to use this page",
    title: "How to use this page and what to do next",
    subtitle:
      "Five steps — know the **shape** of your situation, **which cluster** you’re in, and **what to open next**. Finish another step **another day**.",
  },
  pillarJourneyBridge: {
    id: "move-pillar-context",
    eyebrow: "Inside the Move pillar",
    title: "How this page connects to the rest of ExpatCopilot",
    intro:
      "**Visas & residency** = route choice. **Residence permits** = how a permit **lives over time**. **This page** = **after arrival** when dates or life shift. Links below span **Move, Work, Money, Housing, Living**; scroll to **Helpful tools** for the full numbered lists.",
    links: [
      { href: HUB, label: "Moving to the Netherlands (hub)", description: "Same pillar home as Visas & residency and Residence permits.", meta: "Move" },
      { href: VISAS, label: "Visas & residency orientation", description: "Doorway cards for work, study, family, and ZZP.", meta: "Move" },
      { href: PERMITS, label: "Residence permits", description: "Purpose, renewal band, and after approval.", meta: "Move" },
      { href: "/netherlands/moving/status-changes/", label: "Status changes", description: "When the basis of stay may be changing rather than simply extending.", meta: "Move" },
      { href: "/netherlands/moving/tools/first-90-days/", label: "First 90 days planner", description: "Re-sequence admin when your timeline shifts.", meta: "Move" },
      { href: "/netherlands/moving/tools/arrival-planner/", label: "Arrival planner", description: "Gemeente, bank, insurance ordering after a move or change.", meta: "Move" },
      { href: "/netherlands/work/tools/job-offer-comparison/", label: "Job offer comparison", description: "When a job change is on the table.", meta: "Work" },
      { href: "/netherlands/work/tools/employment-contract-risk-scanner/", label: "Contract risk scanner", description: "Clause pass before you sign a new contract.", meta: "Work" },
      { href: "/netherlands/taxes/tools/dutch-salary-net-calculator/", label: "Salary (net) calculator", description: "Ground pay decisions in take-home.", meta: "Money" },
      { href: "/netherlands/taxes/tools/30-ruling-calculator/", label: "30% ruling calculator", description: "Rough planning when employment context changes.", meta: "Money" },
      { href: "/netherlands/money/tools/cost-of-living-calculator/", label: "Cost of living calculator", description: "Budget impact when household or city changes.", meta: "Money" },
      { href: "/netherlands/housing/tools/rent-affordability-calculator/", label: "Rent affordability", description: "Housing when income or contract shifts.", meta: "Housing" },
      { href: "/netherlands/living/healthcare-basics/", label: "Healthcare basics", description: "Insurance and care when circumstances move.", meta: "Living" },
      { href: "/netherlands/living/survival-guide/", label: "Netherlands Survival Guide", description: "Daily rhythm while admin catches up.", meta: "Living" },
    ],
  },
};
