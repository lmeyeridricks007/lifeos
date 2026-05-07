import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { TAX_RETURN_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import { buildOfficialSourcesReferences, resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "../money-tax-basics/moneyTaxBasicsTaxYear";
import { moneyTaxReturnBoxCards } from "./moneyTaxReturnBoxCards";
import { moneyTaxReturnFaq } from "./moneyTaxReturnFaq";
import { moneyTaxReturnMisunderstandings } from "./moneyTaxReturnMisunderstandings";
import { moneyTaxReturnOfficialSources as official } from "./moneyTaxReturnOfficialSources";
import { moneyTaxReturnPreparationChecklist } from "./moneyTaxReturnPreparationChecklist";
import { moneyTaxReturnPreparationFlow } from "./moneyTaxReturnPreparationFlow";
import {
  moneyTaxReturnArrivalDepartureToolDefs,
  moneyTaxReturnForeignSectionToolDefs,
  moneyTaxReturnPartnerFamilyToolDefs,
  moneyTaxReturnPayrollVsReturnToolDefs,
  moneyTaxReturnTaxBoxToolDefs,
} from "./moneyTaxReturnRelatedTools";
import { moneyTaxReturnRecommendedServices, taxReturnNlServiceCategoryLinks } from "./moneyTaxReturnRecommendedServices";
import { resolveMoneyTaxReturnChecklistCategory, resolveMoneyTaxReturnSignalCard } from "./moneyTaxReturnResolve";
import { moneyTaxReturnSignalCards } from "./moneyTaxReturnSignalCards";
import { moneyTaxReturnStartCards } from "./moneyTaxReturnStartCards";
import { moneyTaxReturnWhoShouldPayAttention } from "./moneyTaxReturnWhoShouldPayAttention";

export { taxReturnNlServiceCategoryLinks };

const R = {
  ...taxGuideRoutes,
  visasResidency: "/netherlands/moving/visas-residency/" as const,
  residencePermits: "/netherlands/moving/residence-permits/" as const,
  canonical: TAX_RETURN_NL_PATH,
} as const;

export const taxReturnNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#what-tax-return-does", label: "What a tax return does" },
  { href: "#payroll-vs-return", label: "Payroll vs annual return" },
  { href: "#who-should-pay-attention", label: "Who should pay attention" },
  { href: "#tax-return-signals", label: "Return signals" },
  { href: "#tax-return-preparation-flow", label: "Preparation flow" },
  { href: "#preparation-checklist", label: "Preparation checklist" },
  { href: "#first-dutch-tax-return-trust", label: "First Dutch return" },
  { href: "#arrival-departure-year", label: "Arrival / departure year" },
  { href: "#tax-boxes", label: "Tax boxes" },
  { href: "#partner-family-allowances", label: "Partner, family, allowances" },
  { href: "#foreign-income-assets", label: "Foreign income & assets" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#what-next", label: "Next steps" },
  { href: "#tax-tools-cluster", label: "Tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const taxReturnNlDeepLinks = [
  { href: `${R.canonical}#preparation-checklist`, label: "Prepare your tax return", description: "Document checklist on this page — skip what does not apply." },
  { href: R.payslip, label: "Decode payslip", description: "Withholding lines once you have a real slip." },
  { href: R.doubleTax, label: "Check double-tax awareness", description: "Structured prompts when more than one country could matter." },
  { href: R.taxResidencyNl, label: "Read tax residency guide", description: "Tax vs permit labels and cross-border orientation." },
  { href: `${R.taxAdvisorsExpats}#start-here-need`, label: "Consider tax help", description: "Optional adviser guidance — useful for stacked or first-time situations." },
  { href: R.howTaxesWorkInNl, label: "How taxes work in the Netherlands", description: "Payroll, return, and boxes — the foundation map." },
  { href: R.taxGuideForExpats, label: "Netherlands Tax Guide for Expats", description: "Broader expat map when return prep needs wider context." },
  { href: R.salaryNet, label: "Dutch salary net calculator", description: "Indicative take-home — planning only." },
  { href: R.expatTaxesGuide, label: "Expat taxes in the Netherlands", description: "Scenario-led depth for complex years." },
] as const;

export const taxReturnNlExploreCards: MovePillarExploreCard[] = [
  { href: R.howTaxesWorkInNl, title: "How Taxes Work in the Netherlands", description: "Foundation: payroll vs return and where boxes sit.", meta: "Money" },
  { href: R.taxGuideForExpats, title: "Netherlands Tax Guide for Expats", description: "Broader expat tax map and cross-links.", meta: "Money" },
  { href: R.expatTaxesGuide, title: "Expat Taxes in the Netherlands", description: "Arrival years, assets, allowances, double tax.", meta: "Money" },
  { href: R.taxResidencyNl, title: "Tax Residency in the Netherlands", description: "When tax-residency language intersects with filing.", meta: "Money" },
  { href: R.taxesTools, title: "Taxes tools hub", description: "Salary, ruling, payslip, double-tax awareness.", meta: "Taxes" },
  { href: R.workingNl, title: "Working in the Netherlands", description: "Payroll timing and first-month money on a work-led move.", meta: "Move" },
  { href: R.moneyTools, title: "Money & tax tools hub", description: "Browse calculators and guides in one place.", meta: "Money" },
];

function buildReferences() {
  return buildOfficialSourcesReferences({
    sectionId: official.sectionId,
    sectionTitle: official.sectionTitle,
    disclaimer: official.disclaimer,
    groups: official.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
    internalLinks: [
      { label: "How taxes work in the Netherlands", href: R.howTaxesWorkInNl },
      { label: "Netherlands tax guide for expats", href: R.taxGuideForExpats },
      { label: "Expat taxes in the Netherlands", href: R.expatTaxesGuide },
      { label: "Tax residency in the Netherlands", href: R.taxResidencyNl },
      { label: "Double tax awareness tool", href: R.doubleTax },
      { label: "Taxes tools hub", href: R.taxesTools },
      { label: "Money & tax tools hub", href: R.moneyTools },
      { label: "Tax advisors for expats (guide)", href: R.taxAdvisorsExpats },
      { label: "Dutch taxes hub", href: R.taxAdvisorsGuide },
    ],
  });
}

export function buildTaxReturnNlPageModel() {
  const references = buildReferences();

  return {
    path: TAX_RETURN_NL_PATH,
    publishDate: `${MONEY_TAX_BASICS_CONTENT_TAX_YEAR}-04-28`,
    affiliatePlacementId: moneyTaxReturnRecommendedServices.affiliatePlacementId,

    seo: {
      title: "Tax Return in the Netherlands | ExpatCopilot",
      description:
        "Dutch income tax return guide for expats: payroll vs annual filing, preparation checklist, Box 1–3, cross-border prompts, and links to tools — orientation, not tax advice.",
      keywords: [
        "tax return netherlands",
        "dutch tax return expats",
        "file tax return netherlands",
        "income tax return netherlands expat",
        "belastingaangifte netherlands expat",
        "dutch annual tax return guide",
        "loonheffing vs tax return",
      ],
    },

    ogImage: {
      src: "/images/heroes/netherlands-tax-return-netherlands-hero.png",
      alt: "Photorealistic home office desk with laptop, papers, pen, and calculator in soft daylight — editorial hero for Dutch annual tax return preparation on ExpatCopilot.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "Tax Return in the Netherlands",
      subtitle:
        "Orientation for expats: how a Dutch annual return fits with payroll withholding, what to gather, and where to read next — still not personalised tax advice.",
      contextChips: ["Orientation", "Not tax advice", "Not a filing portal"],
      bullets: [
        "Payroll = month-by-month withholding; return = one yearly reconciliation.",
        "Use the checklist to sort documents before you open official forms.",
        "Expat years often add cross-border lines — residency and double-tax tools help you read calmly.",
      ],
      primaryCta: { label: "Prepare your tax return", href: `${R.canonical}#preparation-checklist` },
      secondaryCta: { label: "How taxes work", href: R.howTaxesWorkInNl },
      trustNotes: [
        "Not tax or legal advice. General information only — not a review of your file or letters.",
        "Filing rules, forms, and dates can change by tax year. Confirm anything binding on Belastingdienst or with a qualified adviser.",
      ] as const,
    },

    /** Primary in-page actions — order matches hero / sidebar expectations. */
    quickActionStrip: [
      { label: "Prepare your tax return", href: `${R.canonical}#preparation-checklist` },
      { label: "Decode payslip", href: R.payslip },
      { label: "Check double-tax awareness", href: R.doubleTax },
      { label: "Read tax residency guide", href: R.taxResidencyNl },
      { label: "When to consider tax help", href: `${R.taxAdvisorsExpats}#start-here-need` },
    ] as const,

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "Money guide — Dutch return orientation for employees and cross-border households.",
      cells: [
        {
          title: "What this page is for",
          body: "Plain-language map of what a return usually does, when it may matter, and what to gather — not a substitute for letters or personal advice.",
        },
        {
          title: "Best for",
          body: "Employees and expats, families, moves, foreign income/assets, or allowance questions — before you open official forms.",
        },
        {
          title: "What it covers",
          body: "Payroll vs return, prep checklist, Boxes 1–3 (high level), partner/allowances, cross-border nudges, and tool links.",
        },
        {
          title: "What it skips",
          body: "Tailored filing advice, live year rates, and outcome guarantees — confirm those on Belastingdienst or with an adviser.",
        },
      ],
      note: "Rules and dates are year-specific. Below the FAQ you can expand official Belastingdienst-style links when you need authoritative wording.",
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Trust & limits",
      intro:
        "We map concepts and link to tools. For your letters, deadlines, and outcomes, use Mijn Belastingdienst or a qualified adviser.",
      callouts: [
        { id: "not-advice", label: "Not tax advice", body: "Orientation only — not tailored legal, tax, or financial advice." },
        {
          id: "year-specific",
          label: "Filing rules and dates can change by year",
          body: "Thresholds, forms, and letters vary by tax year. Match guidance to your effective year on Belastingdienst.",
        },
        {
          id: "tools-limits",
          label: "Tools have limits",
          body: "Calculators illustrate slices of a situation — they do not replace your jaaropgave or official instructions.",
        },
      ],
    },

    pillarBridge: {
      id: "money-tax-return-context",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with Money and Taxes",
      intro:
        "Learning path **step 4** — return preparation and how it connects to payroll. Steps **1–3** are How Taxes Work (foundation), Expat Taxes / Tax Guide (scenarios and breadth), and Tax residency (ties and labels); **step 5** is the Taxes tools hub and optional adviser guide.",
      links: [
        { href: R.howTaxesWorkInNl, label: "How taxes work in the Netherlands", description: "Payroll vs return and boxes — start here if vocabulary is new.", meta: "Money" },
        { href: R.taxGuideForExpats, label: "Netherlands tax guide for expats", description: "Broader expat tax map.", meta: "Money" },
        { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands", description: "Partial years, assets, allowances, double tax.", meta: "Money" },
        { href: R.taxResidencyNl, label: "Tax residency in the Netherlands", description: "Tax vs immigration wording — orientation only.", meta: "Money" },
        { href: R.taxesTools, label: "Taxes tools hub", description: "Calculators and awareness tools — each states its limits.", meta: "Taxes" },
        {
          href: R.taxAdvisorsExpats,
          label: "Tax advisors for expats (guide)",
          description: "Compare when paid help fits — scope, documents, and questions — without replacing official guidance.",
          meta: "Money",
        },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Payroll timing and first-month money.", meta: "Move" },
      ],
    },

    startHere: {
      id: "what-tax-return-does",
      eyebrow: "Start here",
      title: "What a Dutch tax return does",
      subtitle:
        "Two layers: monthly withholding at work, then an annual return that can still reconcile the full calendar year.",
      intro:
        "Loonheffing on payslips is usually a running estimate. The return lines up income, deductions, credits, partner, and assets for the year. Outcomes vary: neutral, refund, top-up, or more information — all fact-specific.",
      cards: [...moneyTaxReturnStartCards],
    },

    payrollVsReturn: {
      id: "payroll-vs-return",
      eyebrow: "Core distinction",
      title: "Payroll tax vs annual tax return",
      subtitle:
        "Same calendar year, two different clocks: payslips through the year vs one return after the year.",
      contrastStrip: {
        payrollLabel: "During the year (payroll)",
        payrollLine: "Withholding from each salary run — based on employer setup and what they know so far.",
        returnLabel: "After the year (return)",
        returnLine: "One filing per tax year — adds deductions, credits, partner, assets, and lines payslips rarely show.",
      },
      intro:
        "Use payslips for labels and cash flow. Use the return for full-year facts. When letters arrive, read them for which tax year they mean.",
      comparison: [
        {
          id: "payroll",
          title: "Payroll tax — each payslip",
          body: "Loonheffing keeps tax flowing monthly. It is not automatically your final annual income tax number.",
        },
        {
          id: "return",
          title: "Tax return — once per year",
          body: "Brings salary plus anything else the return asks for: credits, partner, assets, other income — year-scoped.",
        },
        {
          id: "assessment",
          title: "Assessment — after filing",
          body: "Belastingdienst issues an assessment. Refund, top-up, or roughly flat — depends on facts and year rules.",
        },
      ],
      ctas: resolveRelatedTools([...moneyTaxReturnPayrollVsReturnToolDefs]),
    },

    whoShouldPayAttention: {
      id: "who-should-pay-attention",
      eyebrow: "Scenarios",
      title: "Who should pay extra attention to filing",
      subtitle:
        "If a headline sounds like your year, it is a prompt to read calmly — then confirm on Belastingdienst or with an adviser.",
      cards: moneyTaxReturnWhoShouldPayAttention.map((c) => {
        const r = resolveTaxGuideTool(c.relatedToolKey, c.relatedToolLabel);
        return {
          id: c.id,
          title: c.title,
          whyItMatters: c.whyItMatters,
          whatToCheckNext: c.whatToCheckNext,
          related: { href: r.href, label: r.label },
        };
      }),
    },

    taxReturnSignals: {
      id: "tax-return-signals",
      eyebrow: "Early signals",
      title: "Tax return signals worth checking",
      subtitle:
        "A light self-scan — not a ruling on must file, and not a substitute for official letters.",
      intro:
        "Pick one card that sounds familiar, then follow its next step. Still orientation only.",
      cards: moneyTaxReturnSignalCards.map(resolveMoneyTaxReturnSignalCard),
    },

    preparationFlow: {
      id: "tax-return-preparation-flow",
      eyebrow: "Visual overview",
      title: "Tax return preparation flow",
      subtitle:
        "A six-step reading order from context to assessment — still orientation; official portals and letters decide your filing path.",
      steps: [...moneyTaxReturnPreparationFlow],
    },

    preparationChecklist: {
      id: "preparation-checklist",
      eyebrow: "Practical prep",
      title: "Tax return preparation checklist",
      subtitle: "Tick what applies — skip whole cards that do not match your year.",
      intro:
        "Copy items into your own notes or folder list. Squares below are visual only — not saved. Letters and official forms still decide what you declare.",
      categories: moneyTaxReturnPreparationChecklist.map(resolveMoneyTaxReturnChecklistCategory),
    },

    firstReturnExpatTrust: {
      id: "first-dutch-tax-return-trust",
      title: "Your first Dutch tax return may be different",
      paragraphs: [
        "First filing year often depends on arrival timing — not only when daily life felt settled.",
        "Prior-country income or assets can matter in overlap periods — gather evidence calmly.",
        "Payroll start and registration help, but they rarely tell the whole cross-border story alone.",
        "Official pages plus optional scoped help beat long forum threads when facts stack.",
      ],
      ctas: [
        { href: R.taxResidencyNl, label: "Read Tax Residency Netherlands" },
        { href: R.doubleTax, label: "Check Double Tax Awareness" },
        { href: `${R.taxAdvisorsExpats}#start-here-need`, label: "Consider tax help" },
      ],
    },

    arrivalDeparture: {
      id: "arrival-departure-year",
      eyebrow: "Expat complexity",
      title: "Arrival / departure year and expat complexity",
      subtitle: "First and last Dutch tax years are often when facts stack: payroll timing, foreign ties, and return sections deserve patience.",
      body: "Add tax residency and double-tax awareness when more than one country could care about the same year. A short adviser review is optional when timelines feel busy on paper.",
      ctas: resolveRelatedTools([...moneyTaxReturnArrivalDepartureToolDefs]),
    },

    taxBoxes: {
      id: "tax-boxes",
      eyebrow: "Return structure",
      title: "Box 1, Box 2, Box 3 in the tax return",
      subtitle: "A plain-language map of where topics usually sit — not personalised filing advice.",
      intro: "Official guidance uses boxes as a filing structure. Your return may not touch every box; focus on what matches your facts.",
      cards: [...moneyTaxReturnBoxCards],
      ctas: resolveRelatedTools([...moneyTaxReturnTaxBoxToolDefs]),
    },

    partnerFamily: {
      id: "partner-family-allowances",
      eyebrow: "Household",
      title: "Partner, family, allowances, and deductions",
      subtitle: "Allowances and return-time deductions/credits are related in life but not the same system.",
      body: "Toeslagen use allowance rules and can trigger repayments when income changes. Estimators help you plan; Toeslagen portals decide entitlement.",
      bullets: [
        "Partner settings on the return deserve the same calm accuracy as salary lines.",
        "Childcare benefit and childcare costs are easy to confuse with each other — read labels carefully.",
        "When unsure, prefer official allowance portals and return help over guesswork.",
      ],
      ctas: resolveRelatedTools([...moneyTaxReturnPartnerFamilyToolDefs]),
    },

    foreignSection: {
      id: "foreign-income-assets",
      eyebrow: "Cross-border",
      title: "Foreign income, assets, and double-tax awareness",
      subtitle: "Foreign lines can add reading — treaties may matter when two countries both care about the same year.",
      body: "Run Double Tax Awareness as a checklist, not a verdict. Add Tax Residency and Expat Taxes, then official international pages or a scoped adviser if questions remain.",
      ctas: resolveRelatedTools([...moneyTaxReturnForeignSectionToolDefs]),
    },

    misunderstandings: {
      id: "misunderstandings",
      eyebrow: "Reality check",
      title: "What people often misunderstand",
      subtitle: "Short myth → reality cards — still not personalised advice.",
      rows: [...moneyTaxReturnMisunderstandings],
    },

    whatNext: {
      id: "what-next",
      eyebrow: "How to use this page",
      title: "How to use this page and what to do next",
      subtitle: "A short sequence — honest about when to escalate to official channels or an adviser.",
      steps: [
        { id: "s1", label: "Understand whether filing may apply to you", href: R.howTaxesWorkInNl, description: "Read the foundation map if return letters or payslip lines feel disconnected." },
        { id: "s2", label: "Collect the documents that match your situation", href: `${R.canonical}#preparation-checklist`, description: "Use the checklist as a notebook — skip what does not apply." },
        { id: "s3", label: "Check payroll and payslip basics", href: R.payslip, description: "Decode withholding lines once you have real slips." },
        { id: "s4", label: "Review tax residency and arrival/departure timing if relevant", href: R.taxResidencyNl, description: "Orientation when your year crossed borders or moved mid-year." },
        { id: "s5", label: "Check Box 3 / foreign assets / double-tax risk if relevant", href: R.doubleTax, description: "Structured prompts — awareness, not a treaty engine." },
        { id: "s6", label: "Check allowance and family topics if relevant", href: R.healthcare, description: "Estimator planning; official portals for decisions." },
        {
          id: "s6b",
          label: "Use tools first, then ask sharper questions",
          href: `${R.taxAdvisorsExpats}#tools-before-paying`,
          description: "Many returns stay manageable with Mijn Belastingdienst and patience — sharpen your question list before booking time.",
        },
        {
          id: "s7",
          label: "When to consider tax help",
          href: `${R.taxAdvisorsExpats}#start-here-need`,
          description: "Optional editorial triage — paid advice helps some years, not every year.",
        },
        {
          id: "s7b",
          label: "Compare tax advisor options",
          href: `${R.taxAdvisorsExpats}#recommended-services`,
          description: "If you hire help, compare scope and fees on provider sites after you know what you need.",
        },
        { id: "s8", label: "Belastingdienst hub for authoritative filing rules", href: R.taxAdvisorsGuide, description: "Official definitions, letters, and year-specific guidance." },
      ],
    },

    toolsShell: {
      id: "tax-return-tools-area",
      title: "Helpful tools",
      subtitle: "Same tax tool cluster as other Money pages — each tool documents its own limits.",
    },

    servicesRegion: {
      id: moneyTaxReturnRecommendedServices.id,
      eyebrow: moneyTaxReturnRecommendedServices.eyebrow,
      title: moneyTaxReturnRecommendedServices.title,
      subtitle: moneyTaxReturnRecommendedServices.subtitle,
      paidHelpIntro: moneyTaxReturnRecommendedServices.paidHelpIntro,
      whenHelpBullets: [...moneyTaxReturnRecommendedServices.whenHelpBullets],
    },

    continueCards: {
      id: "continue-related",
      eyebrow: "Continue",
      title: "Where to go after this page",
      subtitle: "Pick the lane that matches your next unanswered question.",
      cards: [
        { id: "how", title: "How Taxes Work in the Netherlands", description: "If payroll vs return and boxes still feel fuzzy.", href: R.howTaxesWorkInNl, ctaLabel: "Open foundation guide" },
        { id: "expat", title: "Expat Taxes in the Netherlands", description: "If your year has foreign lines or partial-year complexity.", href: R.expatTaxesGuide, ctaLabel: "Open scenario guide" },
        { id: "res", title: "Tax Residency in the Netherlands", description: "If tax vs permit labels or ties need a map first.", href: R.taxResidencyNl, ctaLabel: "Open tax residency guide" },
        {
          id: "advisors",
          title: "Tax Advisors in the Netherlands for Expats",
          description: "If you may compare paid help after reading — optional, not a default for every return.",
          href: R.taxAdvisorsExpats,
          ctaLabel: "Open tax advisors guide",
        },
      ],
    },

    faq: [...moneyTaxReturnFaq],

    sectionNav: taxReturnNlSectionNav,
    deepLinks: taxReturnNlDeepLinks,
    references,
  } as const;
}

export const taxReturnNlPageModel = buildTaxReturnNlPageModel();
export type TaxReturnNlPageModel = typeof taxReturnNlPageModel;
