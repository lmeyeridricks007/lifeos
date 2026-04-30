import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { PillarFaqItem } from "@expatlife/content";
import { expatTaxesNlRoutes, EXPAT_TAXES_NL_PATH } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import {
  buildExpatTaxesOfficialReferences,
  resolveExpatTaxesRiskSignalCards,
  resolveExpatTaxesScenarioCards,
  resolveExpatTaxesSectionForView,
  resolveExpatTaxesStartCards,
} from "./moneyExpatTaxesContentResolve";
import { moneyExpatTaxesFaq } from "./moneyExpatTaxesFaq";
import { moneyExpatTaxesMisunderstandings } from "./moneyExpatTaxesMisunderstandings";
import { moneyExpatTaxesRecommendedServices } from "./moneyExpatTaxesRecommendedServices";
import { moneyExpatTaxesRelatedTools } from "./moneyExpatTaxesRelatedTools";
import { moneyExpatTaxesRiskSignals } from "./moneyExpatTaxesRiskSignals";
import { moneyExpatTaxesScenarioCards } from "./moneyExpatTaxesScenarioCards";
import { moneyExpatTaxesSections } from "./moneyExpatTaxesSections";
import { moneyExpatTaxesStartCards } from "./moneyExpatTaxesStartCards";

const R = expatTaxesNlRoutes;

export const expatTaxesNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#why-expat-taxes-differ", label: "Why expat taxes differ" },
  { href: "#expat-tax-journey", label: "Tax journey" },
  { href: "#situation-selector", label: "Situation selector" },
  { href: "#early-tax-signals", label: "Early tax signals" },
  { href: "#employment-payslips", label: "Employment & payslips" },
  { href: "#thirty-percent-ruling", label: "30% ruling" },
  { href: "#foreign-box3", label: "Foreign assets & Box 3" },
  { href: "#arrival-departure-year", label: "Arrival/departure year" },
  { href: "#family-allowances", label: "Family & allowances" },
  { href: "#double-tax", label: "Double tax" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#what-next", label: "Next steps" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#helpful-tools", label: "Tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const expatTaxesNlDeepLinks = [
  {
    href: R.taxReturnNl,
    label: "Tax return in the Netherlands",
    description: "Annual return orientation: prep, payroll connection, and when filing may matter — not personalised advice.",
  },
  {
    href: R.taxResidencyNl,
    label: "Tax residency orientation",
    description: "Tax vs permit labels and ties — helpful before scenario sections.",
  },
  {
    href: R.salaryNet,
    label: "Estimate net salary",
    description: "Rough take-home from gross — planning only; confirm methodology on the tool page.",
  },
  {
    href: R.payslip,
    label: "Decode payslip",
    description: "Map line items once you have a real slip — especially useful in your first Dutch job.",
  },
  {
    href: R.thirtyPercentRulingGuide,
    label: "30% ruling guide (Money)",
    description: "What the facility means in practice before you run calculator scenarios.",
  },
  {
    href: R.ruling,
    label: "Check 30% ruling",
    description: "Indicative scenarios — eligibility and payroll setup still need employer confirmation.",
  },
  {
    href: R.doubleTax,
    label: "Check double-tax awareness",
    description: "Structured prompts for cross-border questions — then confirm with official guidance if needed.",
  },
  {
    href: R.taxAdvisorsExpats,
    label: "When to consider tax help (guide)",
    description: "Optional editorial triage before you compare paid advisers — not everyone needs one.",
  },
] as const;

export const expatTaxesNlExploreCards: MovePillarExploreCard[] = [
  {
    href: R.taxReturnNl,
    title: "Tax return in the Netherlands",
    description: "What the annual return does, what to prepare, and how payroll withholding connects — practical orientation.",
    meta: "Money",
  },
  {
    href: R.thirtyPercentRulingGuide,
    title: "30% ruling in the Netherlands",
    description: "Facility guide: employer involvement, package planning, and links to the ruling calculator.",
    meta: "Money",
  },
  {
    href: R.taxResidencyNl,
    title: "Tax Residency in the Netherlands",
    description: "Separate tax residency from permits and BSN — before you deep-dive scenarios.",
    meta: "Money",
  },
  {
    href: R.howTaxesWorkFoundation,
    title: "How Taxes Work in the Netherlands",
    description: "Plain-English Dutch tax foundation — payroll vs return and boxes — before expat-specific scenarios.",
    meta: "Money",
  },
  {
    href: R.taxGuideBroad,
    title: "Netherlands Tax Guide for Expats",
    description: "The wider system map — payroll, returns, boxes, and how pieces connect before you zoom into scenarios.",
    meta: "Money",
  },
  {
    href: R.taxAdvisorsExpats,
    title: "Tax advisors for expats",
    description: "When paid help may be worth comparing — after scenarios and tools, not instead of them.",
    meta: "Money",
  },
  {
    href: R.taxesHub,
    title: "Taxes hub (Netherlands)",
    description: "Broader tax pillar: tools and guides beyond this scenario-first page.",
    meta: "Taxes",
  },
  {
    href: R.moneyTools,
    title: "Money & tax tools",
    description: "COL, salary, rent, and family calculators grouped for expat budgeting.",
    meta: "Money",
  },
  {
    href: R.workingNl,
    title: "Working in the Netherlands",
    description: "How offers, payroll timing, permits, and first-month money fit together on a work-led move.",
    meta: "Move",
  },
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Where you live changes rent and commute — pair tax questions with location realism.",
    meta: "Cities",
  },
];

export const expatTaxesNlServiceCategoryLinks = [
  { href: "/netherlands/services/", label: "All services" },
  { href: "/netherlands/services/banks/", label: "Banks" },
  { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
] as const;

export function buildExpatTaxesNlPageModel() {
  const references = buildExpatTaxesOfficialReferences();

  const helpfulToolsSections = moneyExpatTaxesRelatedTools.map((g) => ({
    eyebrow: g.eyebrow,
    description: g.description,
    items: g.items.map((it) => {
      const resolved = resolveTaxGuideTool(it.tool);
      return { title: it.title, description: it.description, href: resolved.href, cta: it.cta };
    }),
  }));

  const faq: PillarFaqItem[] = moneyExpatTaxesFaq.map((item) => ({ q: item.q, a: item.a }));

  const [employment, thirtyPercent, foreignBox3, partialYear, familyAllowances, doubleTax] =
    moneyExpatTaxesSections.map(resolveExpatTaxesSectionForView);

  const rec = moneyExpatTaxesRecommendedServices;

  return {
    path: EXPAT_TAXES_NL_PATH,
    publishDate: "2026-04-28",
    affiliatePlacementId: rec.placementId,

    seo: {
      title: "Expat Taxes in the Netherlands | ExpatCopilot",
      description:
        "Scenario-led Money guide for expats in NL: payroll & payslips, 30% ruling, Box 3 & foreign assets, partial years, allowances, double tax — with calculators and links to official sources.",
      keywords: [
        "expat taxes netherlands",
        "dutch taxes for expats",
        "netherlands tax scenarios expats",
        "30 ruling expat taxes",
        "box 3 expats netherlands",
        "double tax netherlands expat",
        "belastingdienst expat",
      ],
    },

    heroImage: {
      src: "/images/heroes/netherlands-expat-taxes-nl-hero.webp",
      alt: "Photograph of an international professional at a bright desk in the Netherlands reviewing tax paperwork and a laptop spreadsheet, with soft daylight and a blurred canal view outside — editorial hero for expat tax scenarios.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "Expat Taxes in the Netherlands",
      subtitle:
        "A scenario-led guide — not tax advice and not an official decision. Use it to spot your lane, run tools, then confirm year-specific rules with Belastingdienst or a professional when it matters.",
      contextChips: ["Not tax advice", "Rules vary by tax year", "Scenario guide", "Tools-first"],
      bullets: [
        "See which topics expats usually meet first (payroll, ruling, return-time extras).",
        "Link calculators for numbers — this page for what to open next.",
        "Know when Box 3, partial years, or cross-border lines deserve a calm read.",
      ],
      primaryCta: { label: "Find your tax situation", href: "#situation-selector" },
      secondaryCta: { label: "Open tax tools cluster", href: "#tax-tools-cluster" },
      quickToolLinks: [
        { label: "Find your tax situation", href: "#situation-selector" },
        { label: "Estimate net salary", href: R.salaryNet },
        { label: "Check 30% ruling", href: R.ruling },
        { label: "Decode payslip", href: R.payslip },
        { label: "Check double-tax awareness", href: R.doubleTax },
        { label: "When to consider tax help", href: `${R.taxAdvisorsExpats}#start-here-need` },
      ] as const,
    },

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle:
        "Scenario guide for expats in NL — not the full curriculum. Pair it with Belastingdienst or an adviser when your file is non-standard.",
      cells: [
        {
          title: "What this page is for",
          body: "Prioritisation: which Dutch tax angles expats hit first — payroll reality, ruling questions, cross-border flags, partial years, household allowances, and when to escalate to official guidance.",
        },
        {
          title: "Best for",
          body: "International hires, mid-year movers, families, people with accounts or income outside NL, and anyone asking “is my situation normal?” before filing season.",
        },
        {
          title: "What it covers",
          body: "Scenario prompts with links into calculators, How Taxes Work (simplest system map), and the Tax Guide for Expats (broader expat map) — without embedding year-specific thresholds here (those belong in tools and official sources).",
        },
        {
          title: "What it skips",
          body: "Personalised filing instructions, guaranteed outcomes, and deep technical articles — use tools for numbers and Belastingdienst for rules tied to your tax year.",
        },
      ],
      note:
        "Many years are straightforward with official guidance and patience. If your facts are cross-border or high-stakes, scoped professional help can save time — this page exists to reduce surprise, not to replace Belastingdienst.",
    },

    reassurance: {
      eyebrow: "Trust boundary",
      title: "Scenario guide — not a filing verdict",
      body:
        "We help you name patterns, run tools, and jump to official sources. We do not replace payroll, a Belastingdienst letter, or a qualified adviser when your file is non-standard.",
    },

    trustPanel: {
      id: "trust-read-me-expat-tax",
      title: "How to read this page",
      callouts: [
        {
          id: "not-advice",
          label: "Not tax advice",
          body: "Educational scenarios only — no personalised analysis of your return or treaty position.",
        },
        {
          id: "by-year",
          label: "Rules change by tax year",
          body: "Forms, thresholds, and definitions follow the year you file for. Always confirm the current year on official sites.",
        },
        {
          id: "scenario-not-official",
          label: "Scenario-led — not an official decision",
          body: "This page does not speak for Belastingdienst. Use it to prepare better questions, then rely on official guidance or an adviser for binding answers.",
        },
        {
          id: "officials-bottom",
          label: "Official sources",
          body: "Belastingdienst and government links are grouped at the bottom — one place when you need them.",
          link: { href: "#official-sources", label: "Jump to official sources" },
        },
      ],
    },

    officialSourcesHint:
      "Official links for definitions and deadlines live in one block at the bottom — tap when you are ready; scenario sections stay short on purpose.",

    pillarBridge: {
      id: "expat-tax-context-bridge",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with tools and the broad tax guide",
      intro:
        "This page is step 3 in the Money → Tax cluster: scenario-led expat topics (partial years, assets, allowances, double tax). Start with How Taxes Work for the simplest system map, then the Tax Guide for Expats for the wider expat map. Tax return in the Netherlands focuses on annual filing orientation; Tax tools are step 4; work guides cover contracts and first-month money.",
      links: [
        {
          href: R.howTaxesWorkFoundation,
          label: "How Taxes Work in the Netherlands",
          description: "General Dutch tax foundation — payroll vs return and boxes — before expat-only angles.",
          meta: "Money",
        },
        {
          href: R.taxReturnNl,
          label: "Tax return in the Netherlands",
          description: "What the annual return does, prep checklists, and payroll vs filing — orientation, not a filing portal.",
          meta: "Money",
        },
        { href: R.taxGuideBroad, label: "Netherlands Tax Guide for Expats", description: "Wide orientation: payroll, returns, boxes, and how the system fits together.", meta: "Money" },
        { href: R.taxesTools, label: "Taxes tools hub", description: "Salary net, ruling, healthcare allowance, double-tax awareness, and more.", meta: "Taxes" },
        {
          href: R.taxAdvisorsExpats,
          label: "Tax advisors for expats (guide)",
          description: "When to compare paid help, what to prepare, and how to read provider scope — editorial only.",
          meta: "Money",
        },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Offers, contracts, permits, and first-month money on a work-led move.", meta: "Move" },
        { href: R.salaryNet, label: "Estimate net salary", description: "Indicative gross-to-net — confirm assumptions on the tool page.", meta: "Tool" },
        { href: R.employmentType, label: "Employment type scenarios", description: "Employee vs contractor vs hybrid — changes which questions come first.", meta: "Tool" },
      ],
    },

    startHere: {
      id: "why-expat-taxes-differ",
      eyebrow: "Start here",
      title: "Why expat taxes can feel different",
      subtitle: "Four patterns that are normal for internationals — and why they are not “you overthinking”.",
      cards: resolveExpatTaxesStartCards(moneyExpatTaxesStartCards),
    },

    journeyFlow: {
      id: "expat-tax-journey",
      eyebrow: "Visual overview",
      title: "The expat tax journey",
      subtitle:
        "Same sequence many internationals follow — from offer-stage modelling to ongoing check-ins when life or rules move.",
    },

    startingPoint: {
      id: "situation-selector",
      eyebrow: "Situation selector",
      title: "Which expat tax situation sounds like yours?",
      subtitle:
        "Pick the closest story — we explain why it matters, what to try next, and where to click. This is still orientation, not a personal outcome.",
      scenarios: resolveExpatTaxesScenarioCards(moneyExpatTaxesScenarioCards),
    },

    earlyTaxSignals: {
      id: moneyExpatTaxesRiskSignals.id,
      eyebrow: moneyExpatTaxesRiskSignals.eyebrow,
      title: moneyExpatTaxesRiskSignals.title,
      subtitle: moneyExpatTaxesRiskSignals.subtitle,
      intro: moneyExpatTaxesRiskSignals.intro,
      cards: resolveExpatTaxesRiskSignalCards(moneyExpatTaxesRiskSignals.cards),
    },

    employment,
    thirtyPercent,
    foreignBox3,
    partialYear,
    familyAllowances,
    doubleTax,

    misunderstandings: {
      id: moneyExpatTaxesMisunderstandings.id,
      eyebrow: moneyExpatTaxesMisunderstandings.eyebrow,
      title: moneyExpatTaxesMisunderstandings.title,
      subtitle: moneyExpatTaxesMisunderstandings.subtitle,
      rows: moneyExpatTaxesMisunderstandings.rows.map((r) => ({
        id: r.id,
        title: r.title,
        body: r.intro,
      })),
    },

    toolsShell: {
      id: "tax-tools-cluster",
      title: "Expat tax tools & next steps",
      subtitle: "Use calculators for numbers — use this page to decide which numbers to run.",
    },

    whatNext: {
      id: "what-next",
      eyebrow: "How to use this page",
      title: "What to do next — a practical sequence",
      subtitle: "A humble path that respects when professionals earn their fee.",
      steps: [
        { id: "n1", label: "Pick your situation above", href: "#situation-selector", description: "Start from the closest story — not the scariest forum thread." },
        { id: "n2", label: "Run the smallest tool that answers your question", href: R.salaryNet, description: "Salary net, ruling, payslip decode, allowance estimates — one at a time." },
        { id: "n3", label: "Read the matching section on this page", href: "#employment-payslips", description: "Build vocabulary before you deep-dive random articles." },
        { id: "n3b", label: "Skim tax return orientation if filing may apply", href: R.taxReturnNl, description: "What the return does, prep logic, and payroll vs annual filing — still not a filing portal." },
        { id: "n4", label: "Open the broad tax guide when you want the full map", href: R.taxGuideBroad, description: "System view: payroll, returns, boxes, and how pieces connect." },
        { id: "n5", label: "Check double-tax awareness", href: R.doubleTax, description: "Useful when borders, foreign employers, or overseas assets are in play — then confirm if needed." },
        { id: "n6", label: "Model household cash flow (COL, rent, childcare)", href: R.col, description: "Tax questions are easier when monthly life is realistic." },
        { id: "n7", label: "Use official sources for definitions and deadlines", href: "#official-sources", description: "Belastingdienst remains the reference frame." },
        {
          id: "n7b",
          label: "Use tools first, then ask sharper questions",
          href: `${R.taxAdvisorsExpats}#tools-before-paying`,
          description: "Many questions shrink once calculators and guides frame the unknown — paid help is optional.",
        },
        {
          id: "n8",
          label: "When to consider tax help",
          href: `${R.taxAdvisorsExpats}#start-here-need`,
          description: "Editorial guide for calm triage — not everyone needs an adviser.",
        },
        {
          id: "n8b",
          label: "Compare tax advisor options",
          href: `${R.taxAdvisorsExpats}#recommended-services`,
          description: "If you may hire help, compare scope and pricing on provider sites after you know your question.",
        },
      ],
    },

    servicesRegion: {
      id: rec.id,
      eyebrow: rec.eyebrow,
      title: rec.title,
      subtitle: rec.subtitle,
      intro: rec.intro,
    },

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Tools & guides",
      title: "Helpful tools and related guides",
      subtitle: "Each link answers a different question — combine them instead of chasing one “super number”.",
      sections: helpfulToolsSections,
    },

    continueCards: {
      id: "continue-expat-tax",
      eyebrow: "Continue",
      title: "Related pages on ExpatCopilot",
      subtitle: "If your brain wants structure after scenarios, open the map — then return to tools.",
      cards: [
        {
          id: "tax-return-nl",
          title: "Tax return in the Netherlands",
          description: "Dedicated orientation on annual filing, preparation, and when expat situations add complexity.",
          href: R.taxReturnNl,
          ctaLabel: "Open tax return guide",
        },
        {
          id: "tax-guide",
          title: "Netherlands Tax Guide for Expats",
          description: "The broader orientation map when you want the whole system, not just your scenario lane.",
          href: R.taxGuideBroad,
          ctaLabel: "Open the tax guide",
        },
        {
          id: "taxes-tools",
          title: "Taxes tools hub",
          description: "Salary net, ruling, healthcare allowance, double-tax awareness, and more in one lane.",
          href: R.taxesTools,
          ctaLabel: "Browse taxes tools",
        },
        {
          id: "tax-advisors",
          title: "Tax advisors for expats",
          description: "When paid help may be worth comparing — scope, documents, and how to interview firms calmly.",
          href: R.taxAdvisorsExpats,
          ctaLabel: "Open tax advisors guide",
        },
        {
          id: "taxes-hub",
          title: "Netherlands taxes hub",
          description: "Wider Taxes pillar landing when you want services and guides beyond this Money page.",
          href: R.taxAdvisorsGuide,
          ctaLabel: "Open taxes hub",
        },
      ],
    },

    sectionNav: expatTaxesNlSectionNav,
    deepLinks: expatTaxesNlDeepLinks,
    faq,
    references,
  } as const;
}

export const expatTaxesNlPageModel = buildExpatTaxesNlPageModel();

export type ExpatTaxesNlPageModel = typeof expatTaxesNlPageModel;
