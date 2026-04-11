import type { MoveLayoffsPageFrameConfig } from "./moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES, workingInNl } from "./layoffs/moveLayoffsNl.routes";

/**
 * Page shell: hero, at-a-glance, pillar bridge, progression, sidebar deep links — not layoff “slices”.
 */
export const moveLayoffsPageFrame = {
  hero: {
    eyebrow: "Netherlands · Moving",
    pageTitle: "Layoffs in the Netherlands",
    subtitle:
      "If your job in the Netherlands might end, this guide walks through what often changes: your contract, your right to stay when it depends on work, money and benefits, and everyday admin (home, health, family). Ask for **important facts in writing**, and take one step at a time.",
    contextChips: ["Job at risk", "Contract", "Stay", "Pay", "Rent", "Family"],
    bullets: [
      "Four topics — the job ending, whether stay depends on work, money in and out, and life admin (home, health, schools)",
      "Early — read your contract, ask HR clear questions, save payslips and permits outside your work laptop",
      "When dates are fixed — check when pay stops, when benefits end, and which documents you need next",
      "This page is overview only; your employer, IND, and Belastingdienst decide the details",
    ],
    primaryCta: { label: "Start with the essentials", href: "#start-here" },
    secondaryCta: { label: "See what can move", href: "#what-layoffs-affect" },
  },
  atAGlance: {
    sectionTitle: "At a glance",
    subtitle:
      "The same news can touch your job, how you are allowed to stay, your income, and bills that keep running. Use this page to sort facts from rumours.",
    cells: [
      {
        title: "What this page is for",
        body: "Plain-language orientation when a Dutch job may end: what to think about for work, stay, money, and daily life — without drowning in jargon.",
      },
      {
        title: "Best for",
        body: "Anyone whose permit, partner, rent proof, childcare, or benefits might be affected when employment changes — not only people on a sponsored route.",
      },
      {
        title: "What it covers",
        body: "Notice and end dates, what to ask HR, stay questions (high level), salary and costs, and links to other Move, Work, and Money guides.",
      },
      {
        title: "What it skips",
        body: "Legal advice and case law. Use this to know what to check, then confirm with your employer, **IND**, **Belastingdienst**, or a qualified adviser.",
      },
    ],
    note:
      "You do not need every answer today. A short list of what might change, who confirms it, and one sensible next step is enough to start.",
  },
  pillarJourneyBridge: {
    id: "move-pillar-context",
    eyebrow: "Inside the Move pillar",
    title: "How this page connects to the rest of ExpatCopilot",
    intro:
      "Working, changing jobs, and resigning are for moves you choose. Layoffs are when the job may end without you choosing it — similar topics, more admin at once. If stay or money feels uncertain, use the permit, extension, status, and Work / Money / Housing links below when you are ready.",
    links: [
      { href: ROUTES.hub, label: "Moving to the Netherlands", description: "Main Move hub when the wider relocation story needs a home.", meta: "Move" },
      { href: workingInNl, label: "Working in the Netherlands", description: "Work-led framing when employment still anchors your move.", meta: "Move" },
      { href: ROUTES.changingJobs, label: "Changing jobs in the Netherlands", description: "When a new employer or offer is on the table.", meta: "Move" },
      { href: ROUTES.resigningJob, label: "Resigning a job in the Netherlands", description: "Voluntary exit timing and contract review parallels.", meta: "Move" },
      { href: ROUTES.visas, label: "Visas & residency orientation", description: "Route doorway when the basis of stay may be unclear.", meta: "Move" },
      { href: ROUTES.residencePermits, label: "Residence permits", description: "Permit purpose, continuity, and employment linkage.", meta: "Move" },
      { href: ROUTES.extensions, label: "Extensions & changes", description: "Renewals, employer shifts, and life changes after arrival.", meta: "Move" },
      { href: ROUTES.statusChanges, label: "Status changes", description: "When the basis of stay — not only the employer — may move.", meta: "Move" },
      { href: ROUTES.twvWorkPermit, label: "TWV work permit", description: "Employer-driven work authorization when that layer applies.", meta: "Move" },
      { href: ROUTES.moveTools, label: "Move & immigration tools", description: "Planners, checklists, and readiness flows in one place.", meta: "Tools" },
      { href: ROUTES.jobOffer, label: "Job offer comparison", description: "When a new package is on the table.", meta: "Work" },
      { href: ROUTES.contractScanner, label: "Employment contract risk scanner", description: "Structured read of clauses when exit language is dense.", meta: "Work" },
      { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Rough take-home when income shape changes.", meta: "Money" },
    ],
  },
  whatNextRegion: {
    eyebrow: "How to use this page",
    title: "What to do next",
    subtitle:
      "Skim what might change → ask HR for written dates and pay where it matters → if stay depends on work, read the permit guides and confirm with your employer or IND → use one calculator for money → open one tool section. Come back when you have new numbers.",
  },
  progressionSteps: [
    {
      id: "breadth",
      label: "See the four topics",
      href: "#what-layoffs-affect",
      description: "Job, stay, money, life — so you know what you are not dealing with yet.",
    },
    {
      id: "employment",
      label: "Employment: contract + HR",
      href: "#employment-notice",
      description: "Notice, last day, pay — get important points in writing.",
    },
    {
      id: "stay",
      label: "Stay: if tied to your job",
      href: "#permits-status",
      description: "High-level questions only; confirm with your employer and official sources.",
    },
    {
      id: "money",
      label: "Money: one realistic month",
      href: "#salary-benefits-tax",
      description: "Gap, rent, childcare — check tax with payroll or Belastingdienst when income changes.",
    },
    {
      id: "rights",
      label: "Employee rights (basics)",
      href: "#employee-rights-nl",
      description: "Notice, consultation, and where to verify — not legal advice.",
    },
    {
      id: "benefits",
      label: "Benefits & extras",
      href: "#benefits-extras-layoffs",
      description: "Pension, insurance, allowances — what often stops with payroll.",
    },
    {
      id: "watchouts",
      label: "Watch-outs for expats",
      href: "#expat-watch-outs",
      description: "Stay proof, housing, permit gaps, cross-border angles.",
    },
    {
      id: "tips",
      label: "Tips & actions",
      href: "#expat-tips-actions",
      description: "Concrete moves you can schedule this week.",
    },
    {
      id: "tools",
      label: "One tools block",
      href: "#helpful-tools",
      description: "Pick what feels most urgent this week; leave the rest for later.",
    },
    {
      id: "admin",
      label: "Life admin",
      href: "#practical-life",
      description: "Home, health, registration, family — same timeline as work and pay.",
    },
  ],
  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#start-here", label: "Start here" },
    { href: "#what-layoffs-affect", label: "What layoffs can affect" },
    { href: "#employment-notice", label: "Employment & notice" },
    { href: "#permits-status", label: "Permits & status" },
    { href: "#salary-benefits-tax", label: "Salary, benefits & tax" },
    { href: "#employee-rights-nl", label: "Employee rights (basics)" },
    { href: "#benefits-extras-layoffs", label: "Benefits & extras" },
    { href: "#expat-watch-outs", label: "Watch-outs for expats" },
    { href: "#expat-tips-actions", label: "Tips & actions" },
    { href: "#practical-life", label: "Practical life impact" },
    { href: "#layoffs-support-providers", label: "Compare providers" },
    { href: "#misunderstandings", label: "Common misunderstandings" },
    { href: "#what-next", label: "What to do next" },
    { href: "#helpful-tools", label: "Helpful tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ],
  deepLinks: [
    { href: ROUTES.hub, label: "Moving to the Netherlands (hub)", description: "Full relocation map, scenarios, and tools." },
    { href: workingInNl, label: "Working in the Netherlands", description: "Work-led move framing alongside layoff planning." },
    { href: ROUTES.changingJobs, label: "Changing jobs in the Netherlands", description: "When a new role or offer appears." },
    { href: ROUTES.resigningJob, label: "Resigning a job in the Netherlands", description: "Voluntary exit timing and contract review." },
    { href: ROUTES.visas, label: "Visas & residency orientation", description: "Route doorway when status questions reopen." },
    { href: ROUTES.residencePermits, label: "Residence permits", description: "Permit continuity and purpose in plain language." },
    { href: ROUTES.extensions, label: "Extensions & changes", description: "Renewals and employer or life shifts after arrival." },
    { href: ROUTES.statusChanges, label: "Status changes", description: "When the basis of stay—not only the employer—may be in motion." },
    { href: ROUTES.twvWorkPermit, label: "TWV work permit", description: "TWV-oriented context when that layer may apply." },
    { href: ROUTES.moveTools, label: "Move & immigration tools", description: "Planners, checklists, and readiness flows." },
    { href: ROUTES.jobOffer, label: "Job offer comparison tool", description: "Compare packages when a new role is on the table." },
    { href: ROUTES.contractScanner, label: "Employment contract risk scanner", description: "Structured read of clauses." },
    { href: ROUTES.employmentType, label: "Employment type scenario tool", description: "Contract and work-model comparisons." },
    { href: ROUTES.ruling, label: "30% ruling calculator", description: "Planning check where the facility may apply." },
    { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Model take-home or conservative months." },
    { href: ROUTES.costOfLiving, label: "Cost of living calculator", description: "City and household monthly pressure." },
    { href: ROUTES.rentAffordability, label: "Rent affordability calculator", description: "Housing vs changing income." },
    { href: ROUTES.healthcareAllowance, label: "Healthcare allowance estimator", description: "Rough allowance context in transitions." },
    { href: ROUTES.childcare, label: "Childcare cost estimator", description: "Family cash flow when employment shifts." },
    { href: ROUTES.movingChecklist, label: "Moving checklist", description: "Sequenced tasks when the calendar compresses." },
    { href: ROUTES.documentReadiness, label: "Document readiness", description: "Paperwork under pressure." },
    { href: ROUTES.documentsNeeded, label: "Documents needed for the move", description: "What to gather when stay or timing is uncertain." },
    { href: ROUTES.arrivalPlanner, label: "Arrival planner", description: "When exit overlaps with a move window." },
    { href: ROUTES.first90Days, label: "First 90 days planner", description: "Sequence admin when dates tangle." },
    { href: ROUTES.afterArriving, label: "After arriving in the Netherlands", description: "Post-arrival setup alongside job change." },
    { href: ROUTES.healthcareBasics, label: "Healthcare basics", description: "How Dutch coverage fits together." },
    { href: ROUTES.workTools, label: "Work tools hub", description: "Offers, contracts, and payroll literacy." },
    { href: ROUTES.moneyTools, label: "Money tools hub", description: "Salary, tax, and household-money stack." },
    { href: ROUTES.housingTools, label: "Housing tools hub", description: "Rent and housing decisions." },
  ],
} satisfies MoveLayoffsPageFrameConfig;
