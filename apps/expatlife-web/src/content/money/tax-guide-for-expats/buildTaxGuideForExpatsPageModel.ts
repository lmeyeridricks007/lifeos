import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import {
  HOW_TAXES_WORK_IN_NL_PATH,
  TAX_ADVISORS_EXPATS_PATH,
  TAX_RESIDENCY_NL_PATH,
  TAX_RETURN_NL_PATH,
  taxGuideRoutes,
  TAX_GUIDE_FOR_EXPATS_PATH,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveRelatedTools, buildOfficialSourcesReferences } from "./taxGuideContentResolve";
import { moneyTaxGuideBoxCards } from "./moneyTaxGuideBoxCards";
import { moneyTaxGuideFaq } from "./moneyTaxGuideFaq";
import { moneyTaxGuideMisunderstandings } from "./moneyTaxGuideMisunderstandings";
import { moneyTaxGuideOfficialSources } from "./moneyTaxGuideOfficialSources";
import { moneyTaxGuideRecommendedServices } from "./moneyTaxGuideRecommendedServices";
import { moneyTaxGuideRelatedTools } from "./moneyTaxGuideRelatedTools";
import { moneyTaxGuideScenarioCards } from "./moneyTaxGuideScenarioCards";
import { moneyTaxGuideSections } from "./moneyTaxGuideSections";
import { moneyTaxGuideStartCards } from "./moneyTaxGuideStartCards";
import { resolveTaxGuideTool } from "./taxGuideToolRegistry";

const R = taxGuideRoutes;

export const taxGuideForExpatsSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#start-here", label: "Start here" },
  { href: "#find-tax-starting-point", label: "Find your starting point" },
  { href: "#tax-tools-cluster", label: "Tax tools" },
  { href: "#how-dutch-tax-works", label: "How Dutch tax works" },
  { href: "#tax-journey-flow", label: "Tax journey" },
  { href: "#salary-payslips", label: "Salary & payslips" },
  { href: "#tax-return-basics", label: "Tax return basics" },
  { href: "#thirty-percent-ruling", label: "30% ruling" },
  { href: "#allowances-deductions", label: "Allowances & deductions" },
  { href: "#box-123", label: "Box 1 / 2 / 3" },
  { href: "#double-tax", label: "Double tax" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#what-next", label: "Next steps" },
  { href: "#helpful-tools", label: "Tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const taxGuideForExpatsDeepLinks = [
  {
    href: TAX_RETURN_NL_PATH,
    label: "Tax return in the Netherlands",
    description: "Annual return orientation: prep, payroll vs filing, and when expat situations add complexity.",
  },
  {
    href: TAX_RESIDENCY_NL_PATH,
    label: "Tax residency orientation",
    description: "Tax vs permit labels, ties, and cross-border filing context — not a determination tool.",
  },
  {
    href: R.salaryNet,
    label: "Estimate net salary",
    description: "Rough take-home from gross — planning only; methodology lives on the calculator page.",
  },
  {
    href: R.payslip,
    label: "Decode payslip",
    description: "Turn line items into plain language once you have a real payslip.",
  },
  {
    href: R.thirtyPercentRulingGuide,
    label: "30% ruling guide (Money)",
    description: "Editorial walkthrough of the facility before you model calculator scenarios.",
  },
  {
    href: R.ruling,
    label: "Check 30% ruling",
    description: "Indicative eligibility scenarios — confirm with payroll or an adviser.",
  },
  {
    href: R.doubleTax,
    label: "Check double-tax awareness",
    description: "Surface cross-border questions before they become surprises.",
  },
  {
    href: TAX_ADVISORS_EXPATS_PATH,
    label: "Tax advisors for expats (guide)",
    description: "When paid help is worth comparing — after tools and reading, not instead of them.",
  },
] as const;

export const taxGuideExploreCards: MovePillarExploreCard[] = [
  {
    href: TAX_RETURN_NL_PATH,
    title: "Tax return in the Netherlands",
    description: "What the annual return does, preparation checklists, and how payroll withholding connects.",
    meta: "Money",
  },
  {
    href: R.thirtyPercentRulingGuide,
    title: "30% ruling in the Netherlands",
    description: "Editorial guide to the facility — eligibility themes, employer payroll, and links to calculators.",
    meta: "Money",
  },
  {
    href: TAX_RESIDENCY_NL_PATH,
    title: "Tax Residency in the Netherlands",
    description: "When permits, ties, and filing scope need separating — practical questions before treaty detail.",
    meta: "Money",
  },
  {
    href: HOW_TAXES_WORK_IN_NL_PATH,
    title: "How Taxes Work in the Netherlands",
    description: "Plain-English Dutch tax system foundation — not expat-only — before you zoom into expat angles.",
    meta: "Money",
  },
  {
    href: R.taxesHub,
    title: "Taxes hub (Netherlands)",
    description: "Wider tax pillar: tools, guides, and orientation beyond this page.",
    meta: "Taxes",
  },
  {
    href: R.moneyTools,
    title: "Money & tax tools",
    description: "COL, salary, and planning calculators grouped for expats.",
    meta: "Money",
  },
  {
    href: R.workingNl,
    title: "Working in the Netherlands",
    description: "How offers, payroll, permits, and first-month money fit together on a work-led move.",
    meta: "Move",
  },
  {
    href: R.expatTaxesGuide,
    title: "Expat Taxes in the Netherlands",
    description: "Scenario-led Money guide — partial years, foreign assets, ruling, allowances, double tax — before you chase every article.",
    meta: "Money",
  },
  {
    href: TAX_ADVISORS_EXPATS_PATH,
    title: "Tax Advisors in the Netherlands for Expats",
    description: "When paid help is worth comparing, what to prepare, and how to read providers — editorial, not a firm pick.",
    meta: "Money",
  },
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Where you live changes rent and commute — pair tax planning with location realism.",
    meta: "Cities",
  },
];

export const taxGuideServiceCategoryLinks = [
  { href: "/netherlands/services/", label: "All services" },
  { href: "/netherlands/services/banks/", label: "Banks" },
  { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
] as const;

function sectionToBodyScannable(section: { intro: string; keyPoints: readonly string[] }) {
  return { body: section.intro, scannablePoints: [...section.keyPoints] };
}

function sectionToLinks(section: { relatedTools: Parameters<typeof resolveRelatedTools>[0] }) {
  return resolveRelatedTools(section.relatedTools);
}

export function buildTaxGuideForExpatsPageModel() {
  const how = moneyTaxGuideSections.howTaxWorks;
  const salary = moneyTaxGuideSections.salaryPayslips;
  const ret = moneyTaxGuideSections.taxReturnBasics;
  const thirty = moneyTaxGuideSections.thirtyPercent;
  const allowances = moneyTaxGuideSections.allowances;
  const doubleTax = moneyTaxGuideSections.doubleTax;
  const journey = moneyTaxGuideSections.journey;

  const references = buildOfficialSourcesReferences({
    sectionId: moneyTaxGuideOfficialSources.sectionId,
    sectionTitle: moneyTaxGuideOfficialSources.sectionTitle,
    disclaimer: moneyTaxGuideOfficialSources.disclaimer,
    groups: moneyTaxGuideOfficialSources.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
  });

  const helpfulToolsSections = moneyTaxGuideRelatedTools.map((g) => ({
    eyebrow: g.eyebrow,
    description: g.description,
    items: g.items.map((it) => {
      const r = resolveTaxGuideTool(it.tool);
      return { title: it.title, description: it.description, href: r.href, cta: it.cta };
    }),
  }));

  return {
    path: TAX_GUIDE_FOR_EXPATS_PATH,
    publishDate: "2026-04-28",
    affiliatePlacementId: "nl-money-tax-guide-expats-support-providers" as const,

    seo: {
      title: "Netherlands Tax Guide for Expats | ExpatCopilot",
      description:
        "A practical guide to Dutch tax for expats — covering payroll tax, income tax returns, 30% ruling, allowances, Box 3, payslips, and common cross-border tax questions.",
      keywords: [
        "netherlands tax guide expats",
        "dutch tax system expats",
        "tax return netherlands expats",
        "30 ruling tax netherlands",
        "box 3 expats netherlands",
        "dutch payslip tax explained",
      ],
    },

    heroImage: {
      src: "/images/heroes/netherlands-tax-guide-expats-hero.webp",
      alt: "Photograph of a professional working at a bright desk in the Netherlands with a laptop, papers, and a calculator; soft daylight and a blurred canal view outside, for Dutch tax planning context.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "Netherlands Tax Guide for Expats",
      subtitle:
        "A practical guide to Dutch tax for expats — from payroll tax and annual returns to the 30% ruling, allowances, Box 3, payslips, and common cross-border tax questions.",
      contextChips: ["Orientation", "Tools-first", "Not tax advice"],
      bullets: [
        "Understand Dutch tax without drowning in technical detail",
        "Learn how salary, payroll tax, payslips, and tax returns fit together",
        "See where the 30% ruling, allowances, and Box 3 may matter",
        "Use tools to estimate salary and tax position — then confirm with official sources",
      ],
      primaryCta: { label: "Start with the basics", href: "#start-here" },
      secondaryCta: { label: "Tax tools", href: "#tax-tools-cluster" },
    },

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "A Money-pillar orientation page — practical language, honest limits, and clear next tools.",
      cells: [
        {
          title: "What this page is for",
          body: "Broader expat-facing orientation after the How Taxes Work foundation — payroll, annual return, ruling, allowances, and where cross-border issues appear. Not the shortest system-only explainer; use the foundation page first if you want that lane.",
        },
        {
          title: "Best for",
          body: "Employees, new arrivals, international professionals, families, and anyone comparing job offers who needs the system map before the spreadsheet.",
        },
        {
          title: "What it covers",
          body: "Withholding vs final tax, payslip logic, return basics, 30% ruling context, allowances, Box 1/2/3 at a high level, and double-tax awareness — with links into calculators.",
        },
        {
          title: "What it skips",
          body: "Personalised tax advice, guaranteed outcomes, and live thresholds unless you verify them for your year in official guidance.",
        },
      ],
      note: "Dutch tax can change by year. This page explains the structure and links you to tools and official sources — always confirm current rules before making decisions.",
    },

    reassurance: {
      eyebrow: "Trust boundary",
      title: "Planning guidance — not a verdict on your tax",
      body:
        "ExpatCopilot helps you map topics and try calculators. It does not replace Belastingdienst decisions, employer payroll, or a qualified tax adviser when your facts are non-standard.",
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Read this once",
      callouts: [
        {
          id: "not-advice",
          label: "Not tax advice",
          body: "This guide is education and navigation. It does not analyse your personal file or tell you what to file.",
        },
        {
          id: "by-year",
          label: "Rules change by year",
          body: "Thresholds, forms, and deadlines are tied to a tax year. Always confirm the current year on official sites before relying on any summary.",
        },
        {
          id: "officials-bottom",
          label: "Official sources",
          body: "We keep Belastingdienst and government links in one section at the bottom of this page so the teaching sections stay readable.",
          link: { href: "#official-sources", label: "Open official sources" },
        },
      ],
    },

    pillarBridge: {
      id: "money-tax-context",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with Money, Taxes, and Work tools",
      intro:
        "This guide is step 2 in the Money → Tax cluster: the broader expat-facing map after How Taxes Work (simplest system explainer). Expat Taxes in the Netherlands is step 3 for messy scenarios. Tax tools (step 4) estimate numbers; work tools compare offers; move guides connect timing and admin.",
      links: [
        {
          href: HOW_TAXES_WORK_IN_NL_PATH,
          label: "How Taxes Work in the Netherlands",
          description: "General system explainer — payroll vs return, boxes, credits, and allowances — before expat-only detail.",
          meta: "Money",
        },
        {
          href: TAX_RETURN_NL_PATH,
          label: "Tax return in the Netherlands",
          description: "Dedicated annual-return orientation: prep, payroll vs filing, and expat complexity — not a filing portal.",
          meta: "Money",
        },
        { href: R.moneyTools, label: "Money & tax tools hub", description: "Browse calculators for salary, COL, rent, and more.", meta: "Money" },
        { href: R.taxesTools, label: "Taxes tools hub", description: "Salary net, 30% ruling, healthcare allowance, double-tax awareness.", meta: "Taxes" },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Offer, contract, permit, and payroll context on a work-led move.", meta: "Move" },
        { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands", description: "Scenario-first lane: partial years, foreign assets, ruling, allowances, double tax.", meta: "Money" },
        { href: R.salaryNet, label: "Estimate net salary", description: "Indicative gross-to-net with common toggles.", meta: "Tool" },
        { href: R.jobOffer, label: "Job offer comparison tool", description: "Compare offers beyond gross salary headlines.", meta: "Tool" },
        {
          href: TAX_ADVISORS_EXPATS_PATH,
          label: "Tax advisors for expats (guide)",
          description: "When paid tax help is worth comparing — scope, documents, and questions before you book time.",
          meta: "Money",
        },
      ],
    },

    startHere: {
      id: "start-here",
      eyebrow: "Start here",
      title: "What expats should understand first",
      subtitle: "Four ideas that prevent expensive confusion later — read once, then bookmark the tools you actually need.",
      cards: moneyTaxGuideStartCards.map((c) => ({
        id: c.id,
        title: c.title,
        intro: c.intro,
        keyPoints: [...c.keyPoints],
      })),
    },

    startingPoint: {
      id: "find-tax-starting-point",
      eyebrow: "Scenario picker",
      title: "Find your tax starting point",
      subtitle:
        "Choose the situation that sounds closest to you — we show why it matters, what to do next, and where to click. This is still orientation, not a personal tax outcome.",
      scenarios: moneyTaxGuideScenarioCards.map((s) => ({
        id: s.id,
        pickerLabel: s.pickerLabel,
        title: s.title,
        whyItMatters: s.intro,
        recommendedNextAction: s.recommendedNextAction,
        steps: resolveRelatedTools(s.relatedTools),
      })),
    },

    howTaxWorks: {
      id: how.id,
      eyebrow: how.eyebrow,
      title: how.title,
      subtitle: how.subtitle,
      intro: how.intro,
      bullets: [...how.keyPoints],
      flowSteps: how.flowSteps ? [...how.flowSteps] : [],
    },

    taxJourneyFlow: {
      id: journey.id,
      eyebrow: journey.eyebrow,
      title: journey.title,
      subtitle: journey.subtitle,
      steps: journey.steps.map((st) => ({
        number: st.number,
        title: st.title,
        body: st.intro,
        links: resolveRelatedTools(st.relatedTools),
      })),
    },

    salaryPayslips: {
      id: salary.id,
      eyebrow: salary.eyebrow,
      title: salary.title,
      subtitle: salary.subtitle,
      ...sectionToBodyScannable(salary),
      ctas: sectionToLinks(salary),
    },

    taxReturnBasics: {
      id: ret.id,
      eyebrow: ret.eyebrow,
      title: ret.title,
      subtitle: ret.subtitle,
      ...sectionToBodyScannable(ret),
    },

    thirtyPercent: {
      id: thirty.id,
      eyebrow: thirty.eyebrow,
      title: thirty.title,
      subtitle: thirty.subtitle,
      body: thirty.intro,
      scannablePoints: [...thirty.keyPoints],
      links: sectionToLinks(thirty),
    },

    allowances: {
      id: allowances.id,
      eyebrow: allowances.eyebrow,
      title: allowances.title,
      subtitle: allowances.subtitle,
      ...sectionToBodyScannable(allowances),
      links: sectionToLinks(allowances),
    },

    boxes: {
      id: moneyTaxGuideBoxCards.id,
      eyebrow: moneyTaxGuideBoxCards.eyebrow,
      title: moneyTaxGuideBoxCards.title,
      subtitle: moneyTaxGuideBoxCards.subtitle,
      warning: moneyTaxGuideBoxCards.cautionNote,
      cards: moneyTaxGuideBoxCards.cards.map((c) => ({
        id: c.id,
        title: c.title,
        body: c.intro,
      })),
    },

    doubleTax: {
      id: doubleTax.id,
      eyebrow: doubleTax.eyebrow,
      title: doubleTax.title,
      subtitle: doubleTax.subtitle,
      body: doubleTax.intro,
      links: sectionToLinks(doubleTax),
    },

    misunderstandings: {
      id: "misunderstandings",
      eyebrow: "Reality check",
      title: "What people often misunderstand",
      subtitle: "Eight patterns we see when expats mix LinkedIn certainty with tax reality.",
      rows: moneyTaxGuideMisunderstandings.map((m) => ({
        id: m.id,
        title: m.title,
        body: m.intro,
      })),
    },

    toolsShell: {
      id: "tax-guide-tools-area",
      title: "Tools & next steps",
      subtitle: "When you are ready for numbers or depth, open a calculator or hub — this page stays the map.",
    },

    whatNext: {
      id: "what-next",
      eyebrow: "What to do next",
      title: "How to use this page — a simple sequence",
      subtitle: "Nine steps that stay humble about what requires a professional.",
      steps: [
        { id: "s1", label: "Understand your income type", href: R.employmentType, description: "Employee vs contractor vs hybrid changes the map." },
        { id: "s2", label: "Estimate net salary", href: R.salaryNet, description: "Build a realistic monthly picture from an offer." },
        { id: "s3", label: "Check 30% ruling", href: R.ruling, description: "Indicative only — confirm eligibility with payroll." },
        { id: "s4", label: "Decode payslip", href: R.payslip, description: "Translate real line items once employed." },
        { id: "s4b", label: "Skim tax return orientation if filing may apply", href: R.taxReturnNl, description: "What the annual return does and what to prepare — still not a filing portal." },
        { id: "s5", label: "Estimate healthcare allowance", href: R.healthcare, description: "Zorgtoeslag planning when premiums matter to cash flow." },
        { id: "s6", label: "Estimate childcare costs", href: R.childcare, description: "Household cash flow when daycare or BSO is in the picture." },
        { id: "s7", label: "Check double-tax awareness", href: R.doubleTax, description: "Surface cross-border filing questions early." },
        {
          id: "s7b",
          label: "Use tools first, then ask sharper questions",
          href: `${TAX_ADVISORS_EXPATS_PATH}#tools-before-paying`,
          description: "Run calculators and read orientation before you pay for answers many people find with official guidance.",
        },
        {
          id: "s8",
          label: "When to consider tax help",
          href: `${TAX_ADVISORS_EXPATS_PATH}#start-here-need`,
          description: "Optional editorial guide — not everyone needs paid advice; use it to compare scope calmly.",
        },
        {
          id: "s8b",
          label: "Compare tax advisor options",
          href: `${TAX_ADVISORS_EXPATS_PATH}#recommended-services`,
          description: "Provider discovery lives on its own page after you know your question — still confirm pricing and scope directly.",
        },
        { id: "s9", label: "Belastingdienst hub for authoritative rules", href: R.taxesHub, description: "Official pages for definitions, letters, and year-specific filing." },
      ],
    },

    servicesRegion: {
      id: moneyTaxGuideRecommendedServices.id,
      eyebrow: moneyTaxGuideRecommendedServices.eyebrow,
      title: moneyTaxGuideRecommendedServices.title,
      subtitle: moneyTaxGuideRecommendedServices.subtitle,
    },

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Tools & guides",
      title: "Helpful tools and related guides",
      subtitle: "Each link answers a different question — combine them rather than chasing one “super number”.",
      sections: helpfulToolsSections,
    },

    continueCards: {
      id: "continue-money-tax",
      eyebrow: "Continue",
      title: "Where to go after this page",
      subtitle: "Pick the lane that matches your next unanswered question.",
      cards: [
        {
          id: "tax-return-nl",
          title: "Tax return in the Netherlands",
          description: "Dedicated orientation on annual filing, preparation, and payroll vs return — not a filing portal.",
          href: R.taxReturnNl,
          ctaLabel: "Open tax return guide",
        },
        {
          id: "taxes-tools",
          title: "Taxes tools hub",
          description: "Open calculators for salary net, ruling, healthcare allowance, double-tax awareness, and more.",
          href: R.taxesTools,
          ctaLabel: "Browse taxes tools",
        },
        {
          id: "expat-taxes",
          title: "Expat Taxes in the Netherlands",
          description: "Scenario-first companion when you want expat angles beyond this broad map.",
          href: R.expatTaxesGuide,
          ctaLabel: "Open scenario guide",
        },
        {
          id: "tax-advisors-expats",
          title: "Tax Advisors in the Netherlands for Expats",
          description: "Optional read when you may compare paid help — after tools and official guidance, not instead of them.",
          href: TAX_ADVISORS_EXPATS_PATH,
          ctaLabel: "Open tax advisors guide",
        },
      ],
    },

    sectionNav: taxGuideForExpatsSectionNav,
    deepLinks: taxGuideForExpatsDeepLinks,
    faq: moneyTaxGuideFaq.map((f) => ({ q: f.q, a: f.a })),
    references,
  } as const;
}

export const taxGuideForExpatsPageModel = buildTaxGuideForExpatsPageModel();

export type TaxGuideForExpatsPageModel = typeof taxGuideForExpatsPageModel;
