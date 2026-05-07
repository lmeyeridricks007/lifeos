import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { HOW_TAXES_WORK_IN_NL_PATH, TAX_RESIDENCY_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import { assembleMoneyTaxBasicsHowTaxesPageModel } from "../money-tax-basics/assembleMoneyTaxBasicsHowTaxesPageModel";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "../money-tax-basics/moneyTaxBasicsTaxYear";

const R = { ...taxGuideRoutes, canonical: HOW_TAXES_WORK_IN_NL_PATH } as const;

export const howTaxesWorkNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#start-here", label: "Tax system basics" },
  { href: "#tax-journey", label: "Tax journey" },
  { href: "#payroll-vs-return", label: "Payroll vs return" },
  { href: "#tax-boxes", label: "Tax boxes" },
  { href: "#credits-deductions-allowances", label: "Credits, deductions & allowances" },
  { href: "#which-tax-topic-first", label: "Which topic first?" },
  { href: "#common-situations", label: "Common situations" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#what-next", label: "Next steps" },
  { href: "#tax-tools-cluster", label: "Tax tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const howTaxesWorkNlDeepLinks = [
  {
    href: R.taxReturnNl,
    label: "Tax return in the Netherlands",
    description: "Annual return orientation: prep, payroll vs filing, and when expat situations add complexity.",
  },
  {
    href: TAX_RESIDENCY_NL_PATH,
    label: "Tax residency orientation",
    description: "Tax vs permit labels and cross-border ties — companion to this foundation page.",
  },
  {
    href: R.salaryNet,
    label: "Estimate net salary",
    description: "Indicative gross-to-net — confirm methodology on the calculator page.",
  },
  {
    href: R.payslip,
    label: "Decode payslip",
    description: "Map withholding and premiums once you have a real slip.",
  },
  {
    href: R.expatTaxesGuide,
    label: "Expat Taxes in the Netherlands",
    description: "Scenario-led step-2 companion: partial years, assets, allowances, cross-border context.",
  },
  {
    href: R.ruling,
    label: "Check 30% ruling",
    description: "Eligibility-first planning — confirm with payroll or an adviser.",
  },
  {
    href: R.doubleTax,
    label: "Check double-tax awareness",
    description: "Structured prompts when more than one country could be in scope.",
  },
] as const;

export const howTaxesWorkNlExploreCards: MovePillarExploreCard[] = [
  {
    href: TAX_RESIDENCY_NL_PATH,
    title: "Tax Residency in the Netherlands",
    description: "Tax vs permit labels, ties, arrival/departure years, and double-tax orientation — not a determination tool.",
    meta: "Money",
  },
  {
    href: R.taxReturnNl,
    title: "Tax return in the Netherlands",
    description: "Annual filing orientation: prep checklists, payroll vs return, and when expat situations add complexity.",
    meta: "Money",
  },
  {
    href: R.taxGuideForExpats,
    title: "Netherlands Tax Guide for Expats",
    description: "Expat-oriented map — payroll, returns, ruling, Box 3, and cross-border orientation.",
    meta: "Money",
  },
  {
    href: R.expatTaxesGuide,
    title: "Expat Taxes in the Netherlands",
    description: "Scenario-led companion: partial years, foreign assets, allowances, double tax.",
    meta: "Money",
  },
  {
    href: R.taxesHub,
    title: "Taxes hub (Netherlands)",
    description: "Wider tax pillar: tools and guides beyond this foundation page.",
    meta: "Taxes",
  },
  {
    href: R.moneyTools,
    title: "Money & tax tools",
    description: "Salary, COL, rent, and family calculators in one hub.",
    meta: "Money",
  },
  {
    href: R.workingNl,
    title: "Working in the Netherlands",
    description: "How offers, contracts, permits, and first-month money connect on a move.",
    meta: "Move",
  },
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Pair tax basics with where you live and commute.",
    meta: "Cities",
  },
];

export const howTaxesWorkNlServiceCategoryLinks = [
  { href: "/netherlands/services/", label: "All services" },
  { href: "/netherlands/services/banks/", label: "Banks" },
  { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
] as const;

export function buildHowTaxesWorkNlPageModel() {
  const basics = assembleMoneyTaxBasicsHowTaxesPageModel();

  return {
    path: HOW_TAXES_WORK_IN_NL_PATH,
    publishDate: `${MONEY_TAX_BASICS_CONTENT_TAX_YEAR}-04-28`,
    affiliatePlacementId: "nl-money-how-taxes-work-nl-support-providers" as const,

    seo: {
      title: "How Taxes Work in the Netherlands | ExpatCopilot",
      description:
        "Dutch tax system in plain English: payroll vs annual return, Box 1–3, credits vs allowances, and links to calculators — educational only; confirm your year with Belastingdienst.",
      keywords: [
        "how taxes work in the netherlands",
        "dutch tax system explained",
        "payroll tax netherlands explained",
        "income tax return netherlands",
        "box 1 box 2 box 3 netherlands",
        "netherlands tax basics",
      ],
    },

    ogImage: {
      src: "/images/heroes/netherlands-how-taxes-work-foundation-hero.png",
      alt: "Photorealistic home office: laptop and papers on a wooden desk, soft daylight, blurred Dutch canal houses through the window — visual for learning how Dutch taxes work.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "How Taxes Work in the Netherlands",
      subtitle:
        "Plain-English map of Dutch tax: monthly payslip withholding, the annual return, three boxes, and how credits, deductions, and allowances differ — not personalised advice.",
      contextChips: ["Foundation", "Plain English", "Not tax advice"],
      bullets: [
        "Payroll vs return — two layers, one year",
        "Box 1, 2, 3 — where topics sit in filing language",
        "Credits vs allowances — different levers, easy to confuse",
        "Tools — estimate salary, decode slips, explore scenarios",
      ],
      primaryCta: { label: "Start with the basics", href: "#start-here" },
      secondaryCta: { label: "Explore tax tools", href: R.taxesTools },
      trustLine:
        "Not personalised tax advice. Rules and forms change by tax year — use Belastingdienst and official sites for binding detail.",
    },

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "A Money pillar foundation page — general Dutch tax structure, honest limits, and clear next tools.",
      cells: [
        {
          title: "What this page is for",
          body: "Plain-English overview of how Dutch national tax usually fits together: payroll withholding, annual income tax, boxes, credits, deductions, and allowances — without replacing Belastingdienst.",
        },
        {
          title: "Best for",
          body: "New arrivals, employees, families, students, international professionals, and anyone who wants the system map before spreadsheets or forum threads.",
        },
        {
          title: "What it covers",
          body: "Payroll tax, income tax returns, Box 1 / 2 / 3 at a high level, credits vs deductions vs allowances, and common misunderstandings — with links into calculators and deeper guides.",
        },
        {
          title: "What it skips",
          body: "Personalised advice, exact tax calculations, guaranteed outcomes, and live thresholds unless you verify them for your year in official guidance.",
        },
      ],
      note: "Dutch tax rules can change by year. This page explains the structure. Use official sources, maintained calculators, or professional advice before making financial decisions.",
    },

    reassurance: {
      eyebrow: "Trust boundary",
      title: "Education and navigation — not a filing verdict",
      body:
        "We explain concepts and link to tools. We do not review your file, predict a final assessment, or replace Belastingdienst, payroll, or an adviser when facts are non-standard.",
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Before you dive in",
      callouts: [
        {
          id: "not-advice",
          label: "Not tax advice",
          body: "General information only — not legal, tax, or financial advice for your situation. When in doubt, use official guidance or a qualified professional.",
        },
        {
          id: "by-year",
          label: "Rules change by year",
          body: "Labels, forms, and tests can change. Treat this page as orientation; always check your tax year on Belastingdienst and related government sites.",
        },
        {
          id: "officials-bottom",
          label: "Official sources",
          body: "Authoritative links are in one compact list at the bottom — easy to open when you need them, out of the way while you read.",
          link: { href: "#official-sources", label: "Jump to official sources" },
        },
      ],
    },

    pillarBridge: {
      id: "money-tax-context",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with Money, Taxes, and Work",
      intro:
        "Step **1** in the shared **Tax learning path**: the shortest Dutch tax system map. Step 2 pairs **Expat Taxes in the Netherlands** (scenario-first) with the **Tax Guide for Expats** (broader map). Work pages cover offers and contracts; calculators each document their own limits.",
      links: [
        { href: R.moneyTools, label: "Money & tax tools hub", description: "Browse calculators for salary, COL, rent, and more.", meta: "Money" },
        { href: R.taxesTools, label: "Taxes tools hub", description: "Salary net, ruling, healthcare allowance, double-tax awareness.", meta: "Taxes" },
        { href: TAX_RESIDENCY_NL_PATH, label: "Tax residency in the Netherlands", description: "Orientation on tax vs immigration residency and cross-border ties.", meta: "Money" },
        { href: R.taxReturnNl, label: "Tax return in the Netherlands", description: "What the annual return does, preparation, and payroll vs filing — not a filing portal.", meta: "Money" },
        { href: R.taxGuideForExpats, label: "Netherlands Tax Guide for Expats", description: "Expat-oriented map when you want more than foundation copy.", meta: "Money" },
        { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands", description: "Scenario-first partial years, foreign assets, ruling, allowances.", meta: "Money" },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Offer, contract, permit, and payroll context on a work-led move.", meta: "Move" },
      ],
    },

    startHere: basics.startHere,

    taxJourney: basics.taxJourney,

    payrollVsReturn: basics.payrollVsReturn,

    taxBoxes: basics.taxBoxes,

    creditsDeductionsAllowances: {
      id: "credits-deductions-allowances",
      eyebrow: "Vocabulary",
      title: "Tax credits, deductions, and allowances",
      subtitle: "Three different ideas — mixing them up sends people to the wrong portal or expectation.",
      intro: [
        {
          id: "intro-credits",
          title: "Tax credits",
          body: "Lower tax due once income tax maths is underway — still income-tax world.",
          examples: ["General tax credit-style concepts", "Employment-related credits", "Year-specific credits shown in return calculations"],
        },
        {
          id: "intro-deductions",
          title: "Deductions",
          body: "Lower taxable income (the base) — same return universe, different lever than credits.",
          examples: ["Some mortgage/home-related items", "Certain return-time deductible costs", "Items that only count when official conditions are met"],
        },
        {
          id: "intro-allowances",
          title: "Allowances (toeslagen)",
          body: "Household benefits with their own tests — not “just another tax line” on the income return.",
          examples: ["Healthcare allowance", "Childcare benefit", "Benefits that can be adjusted or repaid if income changes"],
        },
      ],
      cards: [
        {
          id: "credits",
          title: "Tax credits",
          body: "Think “less tax due” once taxable income is known — examples and amounts depend on year and situation; use official guidance for definitions.",
          examples: ["A payroll estimate may already reflect credits during the year.", "The annual return can still reconcile credits against full-year facts."],
        },
        {
          id: "deductions",
          title: "Deductions",
          body: "Think “smaller taxable base” — some items are widely discussed (e.g. certain work or home-related concepts), but eligibility is never automatic from a headline.",
          examples: ["A homeowner may need to check home-related return items.", "A cost mentioned online may not be deductible for your tax year or situation."],
        },
        {
          id: "allowances",
          title: "Allowances (toeslagen)",
          body: "Household support channels such as healthcare or childcare benefit — separate portals, rules, and letters from the annual income tax return.",
          examples: ["Healthcare allowance is handled through toeslagen rules.", "Childcare benefit depends on household and childcare facts, not just tax return wording."],
        },
        {
          id: "estimates",
          title: "Why estimates can change",
          body: "Calculators round, employers configure differently, and your facts evolve through the year — treat tools as planning, not a final assessment.",
          examples: ["A salary calculator can differ from payroll once pension or employer setup is known.", "Allowance estimates can change when household income changes."],
        },
      ],
      links: resolveRelatedTools([
        { kind: "tool", key: "healthcare" },
        { kind: "tool", key: "childcare" },
        { kind: "tool", key: "col" },
      ]),
    },

    topicDecisionFirst: basics.topicDecisionFirst,

    commonSituations: {
      id: "common-situations",
      eyebrow: "Recognise yourself",
      title: "Common tax situations people should recognise",
      subtitle: "Pick the lane that sounds closest — then open the tool or guide that matches the next unanswered question.",
      scenarios: [
        {
          id: "employed",
          title: "I am employed in the Netherlands",
          why: "Most of your tax story shows up through withholding and the payslip first.",
          nextHref: R.salaryNet,
          nextLabel: "Estimate net salary",
          also: [{ href: R.payslip, label: "Decode payslip" }],
        },
        {
          id: "ruling",
          title: "I have 30% ruling questions",
          why: "Eligibility and payroll treatment are employer-linked — model scenarios, then confirm facts.",
          nextHref: R.ruling,
          nextLabel: "Open 30% ruling calculator",
          also: [{ href: R.thirtyPercentRulingGuide, label: "30% ruling guide (Money)" }],
        },
        {
          id: "family",
          title: "I have a partner, family, or children",
          why: "Household composition changes both toeslagen and return-time outcomes.",
          nextHref: R.healthcare,
          nextLabel: "Healthcare allowance estimator",
          also: [{ href: R.childcare, label: "Childcare cost estimator" }],
        },
        {
          id: "assets",
          title: "I have savings, investments, or foreign assets",
          why: "Box 3 and cross-border reporting are easy to overlook when you think in salary-only terms.",
          nextHref: R.doubleTax,
          nextLabel: "Double tax awareness tool",
          also: [{ href: R.expatTaxesGuide, label: "Expat Taxes guide" }],
        },
        {
          id: "moved",
          title: "I moved during the year",
          why: "Partial-year residency and income can change which sections matter in a return.",
          nextHref: R.expatTaxesGuide,
          nextLabel: "Expat Taxes in the Netherlands",
          also: [
            { href: TAX_RESIDENCY_NL_PATH, label: "Tax residency orientation" },
            { href: R.taxGuideForExpats, label: "Netherlands Tax Guide for Expats" },
          ],
        },
        {
          id: "self-employed",
          title: "I am self-employed or have mixed income",
          why: "Invoices, VAT-like concepts, and income timing follow a different rhythm than one employer payslip.",
          nextHref: R.taxAdvisorsGuide,
          nextLabel: "Taxes hub & professional services",
          also: [{ href: R.employmentType, label: "Employment type scenario tool" }],
        },
      ],
    },

    misunderstandings: basics.misunderstandings,

    whatNext: {
      id: "what-next",
      eyebrow: "How to use this page",
      title: "What to do next",
      subtitle: "An eight-step sequence that stays humble about when you need a professional.",
      steps: [
        { id: "s1", label: "Understand your income type", href: R.employmentType, description: "Employee, contractor, or mixed changes the map." },
        { id: "s2", label: "Estimate net salary", href: R.salaryNet, description: "Build a realistic monthly picture from an offer." },
        { id: "s3", label: "Decode your payslip if employed", href: R.payslip, description: "Translate real line items once you have a slip." },
        { id: "s4", label: "Skim tax return orientation if filing may apply", href: R.taxReturnNl, description: "What the annual return does, what to prepare, and how payroll connects — still not a filing portal." },
        { id: "s5", label: "Check 30% ruling or allowances", href: R.ruling, description: "Model ruling, then healthcare or childcare tools if relevant." },
        { id: "s6", label: "Review Box 3 / foreign assets if relevant", href: R.doubleTax, description: "Surface cross-border questions while context is still fresh." },
        { id: "s7", label: "Go deeper with tax guides when needed", href: R.taxGuideForExpats, description: "Expat guide for breadth; scenario guide for partial years and complexity." },
        { id: "s8", label: "Confirm with official sources or an adviser", href: R.taxesHub, description: "Use Belastingdienst and qualified help for binding decisions." },
      ],
    },

    toolsShell: {
      id: "how-taxes-tools-area",
      title: "Tools & next steps",
      subtitle: "When you are ready for numbers or depth, open a calculator — this page stays the map.",
    },

    servicesRegion: basics.servicesRegion,

    helpfulTools: {
      ...basics.helpfulTools,
      subtitleMarkdown: true,
    },

    continueCards: {
      id: "continue-money-tax",
      eyebrow: "Continue",
      title: "Where to go after this page",
      subtitle: "Pick depth that matches your next unanswered question.",
      cards: [
        {
          id: "tax-return-nl",
          title: "Tax return in the Netherlands",
          description: "Dedicated orientation on annual filing, preparation, and when payroll vs return diverges.",
          href: R.taxReturnNl,
          ctaLabel: "Open tax return guide",
        },
        {
          id: "tax-guide",
          title: "Netherlands Tax Guide for Expats",
          description: "Expat-oriented breadth: ruling, Box 3 context, payslips, and cross-border orientation.",
          href: R.taxGuideForExpats,
          ctaLabel: "Open tax guide",
        },
        {
          id: "expat-taxes",
          title: "Expat Taxes in the Netherlands",
          description: "Scenario-first companion for partial years, foreign assets, allowances, and double tax.",
          href: R.expatTaxesGuide,
          ctaLabel: "Open scenario guide",
        },
        {
          id: "taxes-tools",
          title: "Taxes tools hub",
          description: "All tax calculators in one place — salary, ruling, allowance, double-tax awareness.",
          href: R.taxesTools,
          ctaLabel: "Browse taxes tools",
        },
      ],
    },

    sectionNav: howTaxesWorkNlSectionNav,
    deepLinks: howTaxesWorkNlDeepLinks,
    faq: basics.faq,

    references: basics.references,
  } as const;
}

export const howTaxesWorkNlPageModel = buildHowTaxesWorkNlPageModel();
export type HowTaxesWorkNlPageModel = typeof howTaxesWorkNlPageModel;
