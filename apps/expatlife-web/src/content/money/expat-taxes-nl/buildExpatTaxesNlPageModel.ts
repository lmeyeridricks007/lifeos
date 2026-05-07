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
  { href: "#situation-selector", label: "Find your tax situation" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#why-expat-taxes-differ", label: "Start here" },
  { href: "#expat-tax-journey", label: "Tax journey" },
  { href: "#early-tax-signals", label: "Topics to notice early" },
  { href: "#employment-payslips", label: "Employment & payslips" },
  { href: "#thirty-percent-ruling", label: "30% ruling" },
  { href: "#foreign-box3", label: "Foreign assets & Box 3" },
  { href: "#arrival-departure-year", label: "Arrival/departure year" },
  { href: "#family-allowances", label: "Family & allowances" },
  { href: "#double-tax", label: "Double tax" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#what-next", label: "What to do next" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#helpful-tools", label: "Tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const expatTaxesNlDeepLinks = [
  {
    href: R.howTaxesWorkFoundation,
    label: "How Taxes Work in the Netherlands",
    description: "Step 1 on the learning path — monthly pay vs yearly form, in simple words.",
  },
  {
    href: R.taxGuideBroad,
    label: "Netherlands Tax Guide for Expats",
    description: "The bigger picture when this story page is not enough on its own.",
  },
  {
    href: R.taxResidencyNl,
    label: "Tax residency in the Netherlands",
    description: "Step 3 — where your life is centred, before two-country questions on the form.",
  },
  {
    href: R.taxReturnNl,
    label: "Tax return in the Netherlands",
    description: "Step 4 — what to gather and how pay ties to the yearly form; not a filing login.",
  },
  {
    href: R.thirtyPercentRulingGuide,
    label: "30% ruling guide (Money)",
    description: "Full guide on the benefit and your employer — use with the calculator for pay offers.",
  },
  {
    href: R.salaryNet,
    label: "Estimate net salary",
    description: "Rough take-home from gross for planning — read what the tool assumes.",
  },
  {
    href: R.payslip,
    label: "Decode payslip",
    description: "Line names in plain English once you have a real slip — handy in your first Dutch job.",
  },
  {
    href: R.ruling,
    label: "Check 30% ruling",
    description: "Example numbers only — your employer still confirms if it applies and how pay is set.",
  },
  {
    href: R.doubleTax,
    label: "Check double-tax awareness",
    description: "A question list for two-country situations — then check official guidance if needed.",
  },
  {
    href: R.healthcare,
    label: "Healthcare allowance estimator",
    description: "Guess possible healthcare benefit — estimates only, not the official benefits site.",
  },
  {
    href: R.childcare,
    label: "Childcare cost estimator",
    description: "Plan childcare next to rent and take-home for family budgets.",
  },
  {
    href: R.employmentType,
    label: "Employment type scenarios",
    description: "Employee vs contractor vs mix — changes which questions to ask first.",
  },
  {
    href: R.taxesTools,
    label: "Taxes tools hub",
    description: "Step 5 — calculators and checklists in one list.",
  },
  {
    href: R.taxAdvisorsExpats,
    label: "When to consider tax help (guide)",
    description: "Simple read before you compare paid firms — many people never need one.",
  },
] as const;

export const expatTaxesNlExploreCards: MovePillarExploreCard[] = [
  {
    href: R.taxReturnNl,
    title: "Tax return in the Netherlands",
    description: "What the yearly form is for, what to gather, and how monthly pay links to it — simple orientation.",
    meta: "Money",
  },
  {
    href: R.thirtyPercentRulingGuide,
    title: "30% ruling in the Netherlands",
    description: "How the benefit works, how your employer fits in, pay planning, and link to the calculator.",
    meta: "Money",
  },
  {
    href: R.taxResidencyNl,
    title: "Tax Residency in the Netherlands",
    description: "Which country you belong to for tax vs your permit or citizen number — read before deep dives.",
    meta: "Money",
  },
  {
    href: R.howTaxesWorkFoundation,
    title: "How Taxes Work in the Netherlands",
    description: "Simple Dutch tax basics — monthly pay vs yearly form — before expat-only stories.",
    meta: "Money",
  },
  {
    href: R.taxGuideBroad,
    title: "Netherlands Tax Guide for Expats",
    description: "The wider map — pay, yearly form, and “boxes” — before you zoom into one situation.",
    meta: "Money",
  },
  {
    href: R.taxAdvisorsExpats,
    title: "Tax advisors for expats",
    description: "When paid help can be worth comparing — after you have tried stories and tools here.",
    meta: "Money",
  },
  {
    href: R.taxesHub,
    title: "Taxes hub (Netherlands)",
    description: "More tax tools and guides beyond this story-first page.",
    meta: "Taxes",
  },
  {
    href: R.moneyTools,
    title: "Money & tax tools",
    description: "Living costs, salary, rent, and family calculators together for budgeting.",
    meta: "Money",
  },
  {
    href: R.workingNl,
    title: "Working in the Netherlands",
    description: "Job offers, pay timing, permits, and first-month money when you move for work.",
    meta: "Move",
  },
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Where you live changes rent and travel — pair tax questions with real-life costs.",
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
        "Plain-language guide for expats in the Netherlands: payslip and pay, 30% ruling, savings abroad, part-year moves, family benefits, living in two countries for tax, and free tools — not personal tax advice.",
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
      src: "/images/heroes/netherlands-expat-taxes-editorial-hero.webp",
      alt: "Photo-style image for this guide: a person at a bright desk with papers and a laptop (screen blurred), daylight and a soft city view outside — illustration only, no readable personal or tax details.",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "Expat Taxes in the Netherlands",
      subtitle:
        "Pick the story that fits you, then read short sections in plain English: pay and payslips, 30% ruling, money abroad, part-year moves, family benefits, living in two countries for tax — plus free tools and official links when you want more.",
      contextChips: ["Not tax advice", "Rules change by year", "Story-based guide", "Tools to help you plan"],
      bullets: [
        "See which tax topics often matter for people who moved to the Netherlands",
        "See how monthly pay, payslips, the yearly form, and the 30% ruling fit together",
        "See when money abroad or a move part-way through the year can add extra steps",
        "Use calculators and explainers to plan — then check official sources for your year",
      ],
      primaryCta: { label: "Find your tax situation", href: "#situation-selector" },
      secondaryCta: { label: "Open tax tools", href: "#tax-tools-cluster" },
      quickToolLinks: [
        { label: "Find your tax situation", href: "#situation-selector" },
        { label: "Estimate net salary", href: R.salaryNet },
        { label: "Check 30% ruling", href: R.ruling },
        { label: "Decode payslip", href: R.payslip },
        { label: "Check double-tax awareness", href: R.doubleTax },
        { label: "Consider tax help", href: `${R.taxAdvisorsExpats}#start-here-need` },
      ] as const,
    },

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle:
        "A **simple map** — not a copy of the big Tax Guide, yearly return page, residency page, or 30% ruling guide. Follow the learning path and tools first; use the **Dutch tax office** site or a tax adviser when your situation is unusual.",
      cells: [
        {
          title: "What this page is for",
          body: "Help you spot **which Dutch tax topics might matter** for you (job and payslip, 30% ruling, money abroad, part-year moves, family benefits, which country you belong to for tax, two countries at once) — then jump to the right guide or tool.",
        },
        {
          title: "Best for",
          body: "New hires, people who moved mid-year, families, people with bank or investment accounts outside the Netherlands, remote-work questions, and anyone who wants **clear order** before filing season noise.",
        },
        {
          title: "What it covers",
          body: "Story cards, short sections, calculators, links to **How Taxes Work**, **Tax Guide for Expats**, and **official links** — we do not paste **year-specific cut-off numbers** here (those live in tools and on the tax office site).",
        },
        {
          title: "What it skips",
          body: "Step-by-step filing for your personal case, line-by-line treaty work, and guaranteed outcomes — this page helps you **explore**, not replace the Dutch tax office or a qualified tax professional.",
        },
      ],
      note:
        "Tax questions for expats depend on your own story. This page helps you see what to look into next; the official site or a tax professional should confirm final choices.",
    },

    reassurance: {
      eyebrow: "Good to know",
      title: "A guide to common stories — not a ruling on your file",
      body:
        "We help you spot patterns, try tools, and find official links. We do not replace your payroll team, a letter from the Dutch tax office, or a qualified adviser when your case is unusual.",
    },

    trustPanel: {
      id: "trust-read-me-expat-tax",
      title: "How to read this page",
      callouts: [
        {
          id: "not-advice",
          label: "Not tax advice",
          body: "This is teaching only — we do not analyse your personal yearly form or cross-border tax position for you.",
        },
        {
          id: "by-year",
          label: "Rules change by tax year",
          body: "Forms, money limits, and definitions follow the year you file for. Always double-check the year on official sites.",
        },
        {
          id: "scenario-not-official",
          label: "Stories here — not an official answer",
          body: "This site is not the Dutch tax office. Use it to prepare better questions, then rely on official guidance or a tax adviser for a binding answer.",
        },
        {
          id: "officials-bottom",
          label: "Official sources",
          body: "After the FAQ, Dutch tax office and government links sit in one fold-open block — open it when you need definitions or key dates.",
          link: { href: "#official-sources", label: "Jump to official sources" },
        },
      ],
    },

    officialSourcesHint:
      "Official Dutch tax office and government links sit in one **fold-open block** after the FAQ — open them when you need them; the short sections above stay easy to scan on purpose.",

    pillarBridge: {
      id: "expat-tax-context-bridge",
      eyebrow: "Inside ExpatCopilot",
      title: "Where this page sits in Money → Tax",
      intro:
        "**Tax learning path · step 2** — pick your situation first (part-year moves, money abroad, 30% ruling, benefits, two countries). Longer explanations stay on the other guides; this page helps you **choose where to read next**.",
      links: [
        {
          href: R.howTaxesWorkFoundation,
          label: "How Taxes Work in the Netherlands",
          description: "Learning path **step 1** — monthly pay vs yearly form, in simple words, before expat-only angles.",
          meta: "Money",
        },
        {
          href: R.taxGuideBroad,
          label: "Netherlands Tax Guide for Expats",
          description: "The wider picture — open with this page when you want the full map, not just one lane.",
          meta: "Money",
        },
        {
          href: R.taxResidencyNl,
          label: "Tax residency in the Netherlands",
          description: "Learning path **step 3** — where your life is centred, in plain words, before two-country questions.",
          meta: "Money",
        },
        {
          href: R.taxReturnNl,
          label: "Tax return in the Netherlands",
          description: "Learning path **step 4** — what to gather, how pay ties to the yearly form, when expat life adds pages.",
          meta: "Money",
        },
        {
          href: R.thirtyPercentRulingGuide,
          label: "30% ruling guide (Money)",
          description: "Full story on the benefit and your employer — use next to the calculator on this page.",
          meta: "Money",
        },
        { href: R.taxesTools, label: "Taxes tools hub", description: "Learning path **step 5** — calculators and checklists in one place.", meta: "Taxes" },
        {
          href: R.taxAdvisorsExpats,
          label: "Tax advisors for expats (guide)",
          description: "When you might hire help — after tools and reading, not instead of them.",
          meta: "Money",
        },
        { href: R.salaryNet, label: "Estimate net salary", description: "Rough take-home from gross — check the tool page for what it assumes.", meta: "Tool" },
        { href: R.payslip, label: "Payslip decoder", description: "Explains line names in plain English when you have a real slip.", meta: "Tool" },
        { href: R.ruling, label: "30% ruling calculator", description: "Try “what if” numbers — not proof you qualify.", meta: "Tool" },
        { href: R.doubleTax, label: "Double tax awareness tool", description: "Question list for two-country situations — not a final legal answer.", meta: "Tool" },
        { href: R.healthcare, label: "Healthcare allowance estimator", description: "Guess benefits-side help — estimates only.", meta: "Tool" },
        { href: R.childcare, label: "Childcare cost estimator", description: "Plan childcare next to rent and take-home.", meta: "Tool" },
        { href: R.employmentType, label: "Employment type scenarios", description: "Employee vs contractor vs mix — changes which questions come first.", meta: "Tool" },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Offers, contracts, permits, and first-month money when you move for work.", meta: "Move" },
      ],
    },

    startHere: {
      id: "why-expat-taxes-differ",
      eyebrow: "Start here",
      title: "Why expat taxes can be different",
      subtitle: "Four common situations for people who moved here — and why they are normal, not you overthinking.",
      cards: resolveExpatTaxesStartCards(moneyExpatTaxesStartCards),
    },

    journeyFlow: {
      id: "expat-tax-journey",
      eyebrow: "Typical sequence",
      title: "The expat tax journey",
      subtitle:
        "A simple order many people follow — from job-offer planning to small check-ins when life or rules change.",
    },

    startingPoint: {
      id: "situation-selector",
      eyebrow: "Find your situation",
      title: "Find your expat tax situation",
      subtitle:
        "Pick the story closest to you — we explain why it matters, what to check, links to tools or guides, and how much extra care it often needs. For orientation only, not your personal result.",
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
      title: "Tax tools & next steps",
      subtitle: "Use calculators for numbers — use this page to see which calculator fits your question.",
    },

    whatNext: {
      id: "what-next",
      eyebrow: "Next steps",
      title: "How to use this page and what to do next",
      subtitle: "A simple order — try tools and guides first, then official sites or a tax adviser when a lot of money or risk is involved.",
      steps: [
        { id: "n1", label: "Find your tax situation", href: "#situation-selector", description: "Pick the closest story so the rest of the page matches you better." },
        { id: "n2", label: "Estimate net salary", href: R.salaryNet, description: "Rough take-home for planning — read what the calculator assumes on its page." },
        { id: "n3", label: "Check the 30% ruling", href: R.ruling, description: "Try example numbers only — your employer still confirms if it applies and how pay is set up." },
        { id: "n4", label: "Decode your payslip when you have a job", href: R.payslip, description: "Learn what the line names mean before you trust random forum screenshots." },
        { id: "n5", label: "Read savings abroad & Box 3", href: "#foreign-box3", description: "A calm read when you still have meaningful accounts or investments outside the Netherlands." },
        { id: "n6", label: "Check family benefits if they apply", href: "#family-allowances", description: "Healthcare and childcare tools — guesses only, not a final benefits decision." },
        { id: "n7", label: "Confirm on official sites or with an adviser", href: "#official-sources", description: "Dutch tax office links below; compare paid firms only after you know your question." },
      ],
    },

    servicesRegion: {
      id: rec.id,
      eyebrow: rec.eyebrow,
      title: rec.title,
      subtitle: rec.subtitle,
      intro: rec.intro,
    },

    /** Editorial links above the optional provider strip — not endorsements. */
    affiliateCategoryLinks: [
      { href: R.taxAdvisorsExpats, label: "Tax advisors for expats" },
      { href: R.taxReturnNl, label: "Tax return in the Netherlands" },
      { href: R.thirtyPercentRulingGuide, label: "30% ruling guide" },
      { href: R.doubleTax, label: "Double tax awareness tool" },
    ] as const,

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Tools & guides",
      title: "Helpful tools and related guides",
      subtitle: "Guides explain words; calculators show ranges — use both instead of chasing one “magic number”.",
      sections: helpfulToolsSections,
    },

    continueCards: {
      id: "continue-expat-tax",
      eyebrow: "Continue",
      title: "Related pages on ExpatCopilot",
      subtitle: "If you want the big picture after the stories here, open the map — then come back to tools.",
      cards: [
        {
          id: "tax-return-nl",
          title: "Tax return in the Netherlands",
          description: "What the yearly form is for, what to gather, and when life abroad adds extra steps.",
          href: R.taxReturnNl,
          ctaLabel: "Open tax return guide",
        },
        {
          id: "tax-guide",
          title: "Netherlands Tax Guide for Expats",
          description: "The full simple map when you want the whole system, not just one story.",
          href: R.taxGuideBroad,
          ctaLabel: "Open the tax guide",
        },
        {
          id: "taxes-tools",
          title: "Taxes tools hub",
          description: "Salary, ruling, healthcare allowance, two-country checklist, and more in one list.",
          href: R.taxesTools,
          ctaLabel: "Browse taxes tools",
        },
        {
          id: "tax-advisors",
          title: "Tax advisors for expats",
          description: "When paid help can be worth comparing — what to ask, what papers to have, how to talk to firms calmly.",
          href: R.taxAdvisorsExpats,
          ctaLabel: "Open tax advisors guide",
        },
        {
          id: "taxes-hub",
          title: "Netherlands taxes hub",
          description: "The wider Taxes home when you want services and guides beyond this Money page.",
          href: R.taxesHub,
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
