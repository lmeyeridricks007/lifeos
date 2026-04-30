import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import {
  THIRTY_PERCENT_RULING_NL_PATH,
  TAX_RETURN_NL_PATH,
  taxGuideRoutes,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import { buildOfficialSourcesReferences, resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "../money-tax-basics/moneyTaxBasicsTaxYear";
import { moneyThirtyRulingOfficialSources as official } from "./moneyThirtyRulingOfficialSources";
import {
  moneyThirtyRulingRecommendedServices,
  thirtyPercentRulingNlServiceCategoryLinks,
} from "./moneyThirtyRulingRecommendedServices";
import { moneyThirtyRulingStartCards } from "./moneyThirtyRulingStartCards";
import { moneyThirtyRulingDecisionCards } from "./moneyThirtyRulingDecisionCards";
import {
  moneyThirtyRulingEligibilityFactors,
  moneyThirtyRulingEligibilityOverviewPair,
} from "./moneyThirtyRulingEligibilityFactors";
import { moneyThirtyRulingAudienceTabs as audienceTabsConfig } from "./moneyThirtyRulingAudienceTabs";
import { moneyThirtyRulingSalaryFlow as salaryFlowConfig } from "./moneyThirtyRulingSalaryFlow";
import { moneyThirtyRulingMisunderstandings } from "./moneyThirtyRulingMisunderstandings";
import { moneyThirtyRulingFaq } from "./moneyThirtyRulingFaq";
import { moneyThirtyRulingRelatedTools } from "./moneyThirtyRulingRelatedTools";
import { resolveMoneyThirtyRulingLinks } from "./moneyThirtyRulingLinkResolve";

export { thirtyPercentRulingNlServiceCategoryLinks };

const R = {
  ...taxGuideRoutes,
  canonical: THIRTY_PERCENT_RULING_NL_PATH,
} as const;

const rulingCalc = resolveTaxGuideTool("ruling");
const salaryNet = resolveTaxGuideTool("salaryNet");

export const thirtyPercentRulingNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#trust-read-me", label: "Trust & limits" },
  { href: "#quick-actions", label: "Quick CTAs" },
  { href: "#understand-first-then-calculate", label: "Guide & calculator" },
  { href: "#cluster-context", label: "Cluster context" },
  { href: "#ruling-starting-point", label: "Starting point" },
  { href: "#start-here-30", label: "What it means" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#thirty-percent-salary-flow", label: "Salary flow" },
  { href: "#eligibility", label: "Eligibility factors" },
  { href: "#employee-employer", label: "Employee & employer" },
  { href: "#salary-net-caps", label: "Salary & net pay" },
  { href: "#tax-year-changes", label: "Tax year changes" },
  { href: "#misunderstandings", label: "Misunderstandings" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#what-next", label: "What to do next" },
  { href: "#thirty-percent-ruling-tools-area", label: "Tools" },
  { href: "#helpful-tools", label: "More guides" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const thirtyPercentRulingNlDeepLinks = [
  { href: rulingCalc.href, label: rulingCalc.label, description: "Indicative eligibility and allowance modelling — confirm facts with payroll or an adviser." },
  { href: salaryNet.href, label: salaryNet.label, description: "Rough gross-to-net alongside ruling scenarios — planning only." },
  { href: R.jobOffer, label: "Job offer comparison", description: "Compare packages when ruling, pension, and extras differ between offers." },
  { href: R.payslip, label: "Payslip decoder", description: "Map lines after approval so labels match what you expected." },
  { href: R.taxGuideForExpats, label: "Netherlands tax guide for expats", description: "Broader payroll, return, and Box context around the facility." },
  { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands", description: "Scenario-led depth when ruling sits beside partial years or cross-border topics." },
  { href: TAX_RETURN_NL_PATH, label: "Tax return in the Netherlands", description: "How annual filing can still matter after payroll runs all year." },
  { href: R.workingNl, label: "Working in the Netherlands", description: "First-month payroll, contracts, and employer setup orientation." },
  { href: `${R.canonical}#recommended-services`, label: "Compare tax support options", description: "Optional tax-focused providers when you want scoped help." },
] as const;

export const thirtyPercentRulingNlExploreCards: MovePillarExploreCard[] = [
  { href: R.howTaxesWorkInNl, title: "How Taxes Work in the Netherlands", description: "Foundation: payroll vs return before you interpret payslip lines.", meta: "Money" },
  { href: R.taxGuideForExpats, title: "Netherlands Tax Guide for Expats", description: "Wider map: ruling sits next to allowances, Box 3, and returns.", meta: "Money" },
  { href: R.expatTaxesGuide, title: "Expat Taxes in the Netherlands", description: "Scenario depth when your year is partial or cross-border.", meta: "Money" },
  { href: TAX_RETURN_NL_PATH, title: "Tax Return in the Netherlands", description: "Annual return orientation after payroll withholding.", meta: "Money" },
  {
    href: R.taxAdvisorsExpats,
    title: "Tax advisors for expats",
    description: "When paid help may be worth comparing for ruling, payroll, or cross-border questions.",
    meta: "Money",
  },
  { href: R.taxesTools, title: "Taxes tools hub", description: "Ruling, salary net, payslip, and awareness tools in one hub.", meta: "Taxes" },
  { href: R.moneyTools, title: "Money & tax tools hub", description: "Browse Money calculators and guides.", meta: "Money" },
  { href: R.workingNl, title: "Working in the Netherlands", description: "Move-led work setup: contracts, payroll timing, first salary.", meta: "Move" },
];

function buildReferences() {
  return buildOfficialSourcesReferences({
    sectionId: official.sectionId,
    sectionTitle: official.sectionTitle,
    disclaimer: official.disclaimer,
    groups: official.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
    internalLinks: [
      { label: "30% ruling calculator", href: R.ruling },
      { label: "Dutch salary net calculator", href: R.salaryNet },
      { label: "How taxes work in the Netherlands", href: R.howTaxesWorkInNl },
      { label: "Netherlands tax guide for expats", href: R.taxGuideForExpats },
      { label: "Expat taxes in the Netherlands", href: R.expatTaxesGuide },
      { label: "Tax return in the Netherlands", href: TAX_RETURN_NL_PATH },
      { label: "Working in the Netherlands", href: R.workingNl },
      { label: "Taxes tools hub", href: R.taxesTools },
      { label: "Money & tax tools hub", href: R.moneyTools },
      { label: "Tax advisors for expats (guide)", href: R.taxAdvisorsExpats },
    ],
  });
}

function buildHelpfulToolsSections() {
  return moneyThirtyRulingRelatedTools.sections.map((section) => ({
    eyebrow: section.eyebrow,
    description: section.description,
    items: section.items.map((item) => {
      const r = resolveTaxGuideTool(item.toolKey, item.ctaLabel);
      return {
        title: item.title,
        description: item.description,
        href: r.href,
        cta: r.label,
      };
    }),
  }));
}

export function buildThirtyPercentRulingNlPageModel() {
  const references = buildReferences();
  const helpfulToolsSections = buildHelpfulToolsSections();

  return {
    path: THIRTY_PERCENT_RULING_NL_PATH,
    publishDate: `${MONEY_TAX_BASICS_CONTENT_TAX_YEAR}-04-28`,
    affiliatePlacementId: moneyThirtyRulingRecommendedServices.affiliatePlacementId,

    seo: {
      title: "30% Ruling in the Netherlands | ExpatCopilot",
      description:
        "Plain-language 30% ruling guide for the Netherlands: eligibility vs payslip benefit, employer policy, tax-year changes, and links to calculators — editorial, not tax advice.",
      keywords: [
        "30 ruling netherlands",
        "30 percent ruling netherlands expats",
        "dutch 30 ruling eligibility",
        "30 ruling salary calculator netherlands",
        "30 ruling employer expat netherlands",
      ],
    },

    ogImage: {
      src: "/images/heroes/netherlands-30-percent-ruling-guide-hero.png",
      alt: "Bright Dutch office desk with laptop, papers, and window light — hero for the ExpatCopilot 30% ruling guide.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money · Taxes",
      pageTitle: "30% Ruling in the Netherlands",
      subtitle:
        "A practical guide to the Dutch 30% ruling for expats — what it is, how it can affect salary packaging, what eligibility usually depends on, and why employer setup, timing, caps, and policy matter.",
      contextChips: ["Editorial guide", "Not tax advice", "Rules vary by tax year", "Estimates only"],
      bullets: [
        "Understand the 30% ruling without tax jargon",
        "Separate eligibility (official tests) from benefit amount (policy, caps, payroll)",
        "See how salary, employer policy, caps, and partial years change outcomes",
        "Use calculators for planning — confirm with payroll and Belastingdienst pages",
      ],
      primaryCta: { label: "Check eligibility", href: rulingCalc.href },
      secondaryCta: { label: "Estimate salary impact", href: salaryNet.href },
      trustNotes: [
        "Not tax or legal advice. Orientation only — not contract review, immigration advice, or filing instructions.",
        "Rules and thresholds change by tax year. Always check official wording for the year that applies to you.",
        "Tools produce estimates, not approval. Outputs are scenarios — not a Dienst decision or payroll mandate.",
        "Statutory maximum ≠ your payslip. Employers may apply less than the headline allowance; that can be policy, not an error.",
      ] as const,
    },

    quickActionStrip: [
      { label: "Check eligibility", href: rulingCalc.href },
      { label: "Estimate salary impact", href: salaryNet.href },
      { label: "Compare job offer", href: R.jobOffer },
      { label: "Decode payslip", href: R.payslip },
      { label: "Consider tax help", href: `${R.canonical}#recommended-services` },
    ] as const,

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "Money guide — 30% facility context for incoming employees and employers planning payroll.",
      cells: [
        {
          title: "What this page is for",
          body: "Plain-language orientation: what the facility can do in payroll, why employers matter, and what to verify — without duplicating the calculator.",
        },
        {
          title: "Best for",
          body: "Expats evaluating offers, new hires, HR/payroll planning conversations, and anyone who wants a calm map before reading official pages.",
        },
        {
          title: "What it covers",
          body: "Concept, eligibility factors (high level), payslip behaviour, package planning, links to tools, and official sources below the FAQ.",
        },
        {
          title: "What it skips",
          body: "Final eligibility decisions, live legal thresholds stated as guarantees, and binding payroll setup — those belong to Belastingdienst, your employer, or a qualified adviser.",
        },
      ],
      note: "Not automatic: eligibility and payroll must line up. Maximum vs actual: employers are not obliged to grant the full theoretical allowance. Estimates from tools are for planning, not guaranteed pay.",
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Trust & limits",
      intro:
        "Editorial patterns for expats in the Netherlands — not your tax file, not a substitute for Belastingdienst or payroll.",
      callouts: [
        { id: "not-advice", label: "Not tax advice", body: "Orientation only — not tailored legal, tax, immigration, or filing advice." },
        {
          id: "tax-year",
          label: "Rules change by year",
          body: "Norms, caps, and phase-outs update. Pick the tax year that matches your dates in tools and on official pages.",
        },
        {
          id: "estimate-not-approval",
          label: "Estimate, not approval",
          body: "Calculators output scenarios. They do not replace a Dienst position or what HR will apply on your slip.",
        },
        {
          id: "max-vs-policy",
          label: "Maximum vs employer policy",
          body: "A statutory ceiling is not the same as what appears in payroll. Agreement and internal policy can mean less than the theoretical max.",
        },
      ],
    },

    pillarBridge: {
      id: "cluster-context",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with Money and Taxes",
      intro:
        "This page = concepts and reading order. Calculators = numbers with documented tax-year settings. Tax guides = payroll and return context.",
      links: [
        { href: R.ruling, label: "30% ruling calculator", description: "Eligibility and allowance estimates using maintained tax-year configuration.", meta: "Taxes" },
        { href: R.howTaxesWorkInNl, label: "How taxes work in the Netherlands", description: "Vocabulary for payroll vs return before you read payslip lines.", meta: "Money" },
        { href: R.taxGuideForExpats, label: "Netherlands tax guide for expats", description: "Broader expat tax map including ruling, allowances, and Box 3.", meta: "Money" },
        { href: R.expatTaxesGuide, label: "Expat taxes in the Netherlands", description: "Scenario-led depth when your year is non-standard.", meta: "Money" },
        { href: TAX_RETURN_NL_PATH, label: "Tax return in the Netherlands", description: "Annual filing orientation after payroll runs.", meta: "Money" },
        { href: R.taxesTools, label: "Taxes tools hub", description: "All tax calculators in one place.", meta: "Taxes" },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Move-led work and first-month payroll context.", meta: "Move" },
      ],
    },

    startingPoint: {
      id: "ruling-starting-point",
      eyebrow: "Act next",
      title: "Find your 30% ruling starting point",
      subtitle: "Pick the card that sounds closest — each path ends in a concrete link, not endless reading.",
      intro:
        "Pick the lane that fits. Each card ends in a link, not more reading. Tools = planning; payroll and official pages = facts.",
      scenarios: moneyThirtyRulingDecisionCards.map((card) => ({
        id: card.id,
        situation: card.situation,
        whyItMatters: card.whyItMatters,
        nextAction: card.nextAction,
        links: resolveMoneyThirtyRulingLinks(card.relatedToolKeys, R.canonical, card.relatedLinkLabels),
      })),
    },

    startHere: {
      id: "start-here-30",
      eyebrow: "Start here",
      title: "What the 30% ruling means",
      subtitle: "Four anchors before you open calculators or employer threads.",
      intro:
        "Four concept cards. For numbers, use the calculator with the right tax year selected.",
      cards: [...moneyThirtyRulingStartCards],
    },

    howItWorks: {
      id: "how-it-works",
      eyebrow: "Mechanics",
      title: "How the 30% ruling works in practice",
      subtitle: "Concept first — then payroll reality and tools.",
      intro:
        "Tax treatment of pay for eligible incoming employees, via employer payroll. Same gross can mean different taxable bases. Payslip lines vary by vendor and policy.",
      bullets: [
        "Employer / payroll implementation decides how lines read on a slip once approved.",
        "Benefit can look different from a simple “subtract 30% from gross” mental model.",
        "Gross vs taxable vs net is a common confusion point — use tools for parallel estimates, not proof.",
      ],
      flowSteps: [
        { id: "f1", title: "Job offer", body: "Package shape, recruitment story, and dates start the conversation." },
        { id: "f2", title: "Employer checks / supports", body: "HR/payroll and sometimes external advisers map facts to process." },
        { id: "f3", title: "Application / approval", body: "Documentation and timing follow official channels for the period that applies." },
        { id: "f4", title: "Payroll setup", body: "Once approved, payroll configures withholding consistent with policy." },
        { id: "f5", title: "Payslip impact", body: "Lines should be read alongside methodology from tools and official guidance." },
        { id: "f6", title: "Annual tax context", body: "Year-end return themes can still matter — pair with the tax-return guide when relevant." },
      ],
      ctas: resolveRelatedTools([
        { kind: "tool", key: "ruling" },
        { kind: "tool", key: "salaryNet" },
        { kind: "tool", key: "jobOffer" },
      ]),
    },

    salaryFlow: {
      id: "thirty-percent-salary-flow",
      eyebrow: "Reading order",
      title: "From gross package to payslip and return",
      subtitle: "A six-step map of how numbers usually move with the facility in the picture — still orientation, not payroll or legal advice.",
      steps: salaryFlowConfig.map((step) => ({
        id: step.id,
        title: step.title,
        body: step.body,
        links: resolveMoneyThirtyRulingLinks(step.relatedToolKeys, R.canonical),
      })),
    },

    eligibility: {
      id: "eligibility",
      eyebrow: "Checklist mindset",
      title: "Eligibility factors to understand",
      subtitle: "Prompts, not a final decision — confirm with official rules for your tax year and employer.",
      intro:
        "Fact- and year-specific reading map — no threshold numbers here (see calculator + Belastingdienst).",
      clarityPair: [...moneyThirtyRulingEligibilityOverviewPair],
      factors: moneyThirtyRulingEligibilityFactors.map((f) => ({
        id: f.id,
        title: f.title,
        plainEnglishExplanation: f.plainEnglishExplanation,
        whyItMatters: f.whyItMatters,
        cautionNote: f.cautionNote,
        links: resolveMoneyThirtyRulingLinks(f.relatedToolKeys, R.canonical),
      })),
      cta: { label: "Check eligibility", href: rulingCalc.href },
    },

    audienceTabs: {
      id: "employee-employer",
      eyebrow: "Audience",
      title: "Employee and employer perspectives",
      subtitle: "Same facility — different responsibilities and different tools.",
      employeeTabLabel: audienceTabsConfig.employeeTabLabel,
      employerTabLabel: audienceTabsConfig.employerTabLabel,
      employeeSections: [...audienceTabsConfig.employeeSections],
      employeeToolLinks: audienceTabsConfig.employeeToolKeys.map((k) => resolveTaxGuideTool(k)),
      employerObligationDisclaimer: audienceTabsConfig.employerObligationDisclaimer,
      employerSections: [...audienceTabsConfig.employerSections],
      footNote: audienceTabsConfig.footNote,
    },

    salaryNetCaps: {
      id: "salary-net-caps",
      eyebrow: "Numbers in context",
      title: "Salary, net pay, caps, and partial-year impact",
      subtitle: "Why one calculator output rarely tells the whole story.",
      lead: "The facility changes how pay splits between taxable wages and the allowance — caps and year rules limit how much fits your package.",
      bullets: [
        "Partial-year starts affect proration and how you annualise cash flow vs reporting.",
        "Use the 30% calculator for facility-shaped estimates and salary net for take-home — then match payslip lines when live.",
      ] as const,
      ctas: resolveRelatedTools([
        { kind: "tool", key: "ruling" },
        { kind: "tool", key: "salaryNet" },
        { kind: "tool", key: "jobOffer" },
        { kind: "tool", key: "payslip" },
      ]),
    },

    taxYearAwareness: {
      id: "tax-year-changes",
      eyebrow: "Calendar reality",
      title: "Rule changes by tax year",
      subtitle: "Parameters move — official pages and tool tax-year selectors beat forums.",
      paragraphs: [
        "Tax-year parameters used in calculators are maintained in the tool’s own configuration — always pick the tax year that matches your planning question.",
        "Phase-outs, caps, and salary norms can be updated for future years — Belastingdienst and official announcements remain the source of truth.",
        "When comparing notes with colleagues, check you mean the same tax year and similar contract structures before assuming identical outcomes.",
      ],
    },

    misunderstandings: {
      id: "misunderstandings",
      eyebrow: "Reality check",
      title: "What people often misunderstand",
      subtitle: "Short cards — still not personalised advice.",
      rows: [...moneyThirtyRulingMisunderstandings],
    },

    whatNext: {
      id: "what-next",
      eyebrow: "How to use this page",
      title: "How to use this page and what to do next",
      subtitle: "A six-step sequence from concept to verification.",
      steps: [
        { id: "w1", label: "Understand the broad concept", href: `${R.canonical}#start-here-30`, description: "Skim the four start cards so vocabulary matches your situation." },
        { id: "w2", label: "Check eligibility", href: rulingCalc.href, description: "Use the calculator’s prompts for the correct tax year — still confirm with HR." },
        { id: "w3", label: "Compare salary with and without ruling", href: salaryNet.href, description: "Pair net estimates with ruling scenarios; read each tool’s assumptions." },
        { id: "w4", label: "Ask the employer about policy and payroll", href: R.workingNl, description: "Clarify support, timelines, and payslip presentation before you rely on cash flow." },
        { id: "w5", label: "Decode the payslip after setup", href: R.payslip, description: "Map real lines once payroll reflects approval." },
        {
          id: "w6",
          label: "When to consider tax help",
          href: `${R.taxAdvisorsExpats}#start-here-need`,
          description: "Optional editorial guide — many ruling questions are resolved with payroll and Belastingdienst first.",
        },
        {
          id: "w6b",
          label: "Compare tax advisor options",
          href: `${R.canonical}#recommended-services`,
          description: "Ruling-related providers on this page — after you understand your own facts and letters.",
        },
      ],
    },

    servicesRegion: {
      id: moneyThirtyRulingRecommendedServices.id,
      eyebrow: moneyThirtyRulingRecommendedServices.eyebrow,
      title: moneyThirtyRulingRecommendedServices.title,
      subtitle: moneyThirtyRulingRecommendedServices.subtitle,
      paidHelpIntro: moneyThirtyRulingRecommendedServices.paidHelpIntro,
      whenHelpBullets: [...moneyThirtyRulingRecommendedServices.whenHelpBullets],
    },

    toolsShell: {
      id: "thirty-percent-ruling-tools-area",
      title: "Helpful tools",
      subtitle: "Same tax tool cluster as other Money pages — each tool documents its own limits.",
    },

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Guides & tools",
      title: "Helpful tools and related guides",
      subtitle: "Combine guides and calculators instead of trusting a single headline.",
      sections: helpfulToolsSections,
    },

    continueCards: {
      id: "continue-related",
      eyebrow: "Continue",
      title: "Related pages on ExpatCopilot",
      subtitle: "Pick the next lane that matches an unanswered question.",
      cards: [
        { id: "calc", title: "30% Ruling Calculator", description: "Scenario and eligibility-first modelling with documented tax-year config.", href: R.ruling, ctaLabel: rulingCalc.label },
        { id: "how", title: "How Taxes Work in the Netherlands", description: "If payroll vs return vocabulary is still fuzzy.", href: R.howTaxesWorkInNl, ctaLabel: "Open foundation guide" },
        { id: "expat", title: "Expat Taxes in the Netherlands", description: "If your year has cross-border or partial-year complexity.", href: R.expatTaxesGuide, ctaLabel: "Open expat taxes guide" },
        {
          id: "tax-advisors",
          title: "Tax Advisors in the Netherlands for Expats",
          description: "If you may compare paid help after reading — optional, not required for every ruling question.",
          href: R.taxAdvisorsExpats,
          ctaLabel: "Open tax advisors guide",
        },
      ],
    },

    faq: [...moneyThirtyRulingFaq],

    sectionNav: thirtyPercentRulingNlSectionNav,
    deepLinks: thirtyPercentRulingNlDeepLinks,
    references,
  } as const;
}

export const thirtyPercentRulingNlPageModel = buildThirtyPercentRulingNlPageModel();
export type ThirtyPercentRulingNlPageModel = typeof thirtyPercentRulingNlPageModel;
