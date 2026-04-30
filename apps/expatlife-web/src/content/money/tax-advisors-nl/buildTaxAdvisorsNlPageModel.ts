import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import {
  TAX_ADVISORS_EXPATS_PATH,
  TAX_RETURN_NL_PATH,
  taxGuideRoutes,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import { buildOfficialSourcesReferences, resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "../money-tax-basics/moneyTaxBasicsTaxYear";
import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";
import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "../tax-residency-nl/config/moneyTaxResidencyServiceRegistry";
import type { MoneyTaxReturnServiceKey } from "../tax-return-nl/moneyTaxReturnTypes";
import {
  moneyTaxAdvisorComparisonCriteria,
  moneyTaxAdvisorEngagementTypes,
  moneyTaxAdvisorFaq,
  moneyTaxAdvisorNeedBuckets,
  moneyTaxAdvisorOfficialSources as official,
  moneyTaxAdvisorPreparationChecklist,
  moneyTaxAdvisorQuestions,
  moneyTaxAdvisorRecommendedProviders,
  moneyTaxAdvisorRedFlags,
  moneyTaxAdvisorRelatedTools,
  moneyTaxAdvisorTrustCallouts,
  moneyTaxAdvisorUseCases,
} from "../tax-advisor-guide-config";

export const taxAdvisorsNlServiceCategoryLinks = (
  moneyTaxAdvisorRecommendedProviders.serviceCategoryRegistryKeys as readonly MoneyTaxReturnServiceKey[]
).map((key) => MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[key]);

const R = {
  ...taxGuideRoutes,
  canonical: TAX_ADVISORS_EXPATS_PATH,
} as const;

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
      { label: "Tax return in the Netherlands", href: TAX_RETURN_NL_PATH },
      { label: "Tax residency in the Netherlands", href: R.taxResidencyNl },
      { label: "30% ruling guide", href: R.thirtyPercentRulingGuide },
      { label: "Taxes tools hub", href: R.taxesTools },
      { label: "Money & tax tools hub", href: R.moneyTools },
      { label: "Dutch taxes hub", href: R.taxAdvisorsGuide },
    ],
  });
}

const SCORECARD_COMPLEXITY_LABELS = {
  tools_first: "Tools first",
  worth_checking: "Worth checking",
  consider_advice: "Consider advice",
} as const;

export const taxAdvisorsNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#trust-read-me", label: "Trust & limits" },
  { href: "#diy-vs-advisor", label: "DIY vs advisor" },
  { href: "#start-here-need", label: "Do you need an advisor?" },
  { href: "#tax-help-scorecard", label: "Scorecard" },
  { href: "#when-worth", label: "When it is worth considering" },
  { href: "#what-advisors-do", label: "What advisors help with" },
  { href: "#prepare", label: "What to prepare" },
  { href: "#compare", label: "How to compare" },
  { href: "#hiring-questions", label: "Before you hire" },
  { href: "#engagement-types", label: "Engagement types" },
  { href: "#red-flags", label: "Red flags" },
  { href: "#recommended-services", label: "Compare providers" },
  { href: "#tools-before-paying", label: "Tools first" },
  { href: "#tax-advisors-tools-cluster", label: "Tax tools cluster" },
  { href: "#helpful-tools", label: "More guides" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

const salaryNet = resolveTaxGuideTool("salaryNet");
const ruling = resolveTaxGuideTool("ruling");

export const taxAdvisorsNlDeepLinks = [
  { href: `${R.canonical}#diy-vs-advisor`, label: "DIY vs advisor", description: "Two normal paths — tools first vs when scoped firm help can help." },
  { href: `${R.canonical}#start-here-need`, label: "Do you need an advisor?", description: "Three calm buckets — DIY, worth checking, or consider advice." },
  {
    href: `${R.canonical}#tax-help-scorecard`,
    label: "Practical scorecard",
    description: "Row-by-row triage — tools first, then when an adviser may help — no calculator.",
  },
  { href: salaryNet.href, label: salaryNet.label, description: "Indicative take-home before you pay for salary questions." },
  { href: ruling.href, label: ruling.label, description: "Structured 30% ruling prompts — not approval." },
  { href: R.payslip, label: "Payslip decoder", description: "Line-by-line vocabulary from a real slip." },
  { href: R.doubleTax, label: "Double tax awareness tool", description: "Early multi-country prompts." },
  { href: TAX_RETURN_NL_PATH, label: "Tax return guide", description: "What the annual return settles after payroll." },
  { href: `${R.canonical}#recommended-services`, label: "Compare tax support options", description: "Optional providers — confirm scope and pricing directly." },
  {
    href: `${R.canonical}#hiring-questions`,
    label: "Questions before hiring",
    description: "Interview checklist — scope, documents, security, and Belastingdienst follow-ups.",
  },
] as const;

export const taxAdvisorsNlExploreCards: MovePillarExploreCard[] = [
  { href: R.howTaxesWorkInNl, title: "How Taxes Work in the Netherlands", description: "Foundation map before you brief an adviser.", meta: "Money" },
  { href: R.taxGuideForExpats, title: "Netherlands Tax Guide for Expats", description: "Breadth: payroll, return, ruling, allowances.", meta: "Money" },
  { href: R.expatTaxesGuide, title: "Expat Taxes in the Netherlands", description: "Scenario-led depth for busy years.", meta: "Money" },
  { href: TAX_RETURN_NL_PATH, title: "Tax Return in the Netherlands", description: "Preparation and filing orientation.", meta: "Money" },
  { href: R.taxResidencyNl, title: "Tax Residency in the Netherlands", description: "Labels vs facts when countries overlap.", meta: "Money" },
  { href: R.thirtyPercentRulingGuide, title: "30% ruling guide", description: "Facility context beside payroll.", meta: "Money" },
  { href: R.taxesTools, title: "Taxes tools hub", description: "All tax calculators in one place.", meta: "Taxes" },
];

function buildScorecardRows() {
  return moneyTaxAdvisorUseCases.scorecardRows.map((row) => ({
    id: row.id,
    situation: row.situation,
    complexityKey: row.complexity,
    complexityLabel: SCORECARD_COMPLEXITY_LABELS[row.complexity],
    toolsFirst: row.toolKeys.map((k) => resolveTaxGuideTool(k as MoneyTaxGuideToolKey)),
    advisorWhen: row.advisorWhen,
  }));
}

export function buildTaxAdvisorsNlPageModel() {
  const references = buildReferences();
  const scorecardRows = buildScorecardRows();

  const whenWorth = moneyTaxAdvisorUseCases.signalCards.map((c) => {
    const t = resolveTaxGuideTool(c.toolKey as MoneyTaxGuideToolKey);
    return {
      id: c.id,
      title: c.title,
      whyItMatters: c.whyItMatters,
      advisorHelps: c.advisorHelps,
      toolLink: { href: t.href, label: c.toolLabel },
    };
  });

  const toolsBeforePaying = moneyTaxAdvisorRelatedTools.beforePayingRows.map((row) => {
    const t = resolveTaxGuideTool(row.toolKey as MoneyTaxGuideToolKey);
    return { id: row.id, title: row.title, body: row.body, href: t.href, ctaLabel: t.label };
  });

  const helpfulToolsSections = moneyTaxAdvisorRelatedTools.helpfulSections.map((section) => ({
    eyebrow: section.eyebrow,
    ...("description" in section && section.description != null ? { description: section.description } : {}),
    items: section.items.map((item) => ({ ...item })),
  }));

  return {
    path: TAX_ADVISORS_EXPATS_PATH,
    publishDate: `${MONEY_TAX_BASICS_CONTENT_TAX_YEAR}-04-28`,
    affiliatePlacementId: moneyTaxAdvisorRecommendedProviders.affiliatePlacementId,

    seo: {
      title: "Netherlands tax advisors for expats: when to hire, questions to ask | ExpatCopilot",
      description:
        "Editorial guide (not tax advice): DIY vs advisor, interview questions, checklists, and tools-first links for Dutch taxes, the annual return, 30% ruling, and cross-border situations.",
      keywords: [
        "tax advisor netherlands expats",
        "expat tax advisor netherlands",
        "dutch tax return advisor expats",
        "30 ruling tax advisor netherlands",
        "cross border tax advisor netherlands",
        "questions to ask tax advisor netherlands",
        "do I need a tax advisor netherlands",
        "belastingdienst expat tax help",
      ],
    },

    ogImage: {
      src: "/images/heroes/netherlands-tax-advisors-expats-hero.png",
      alt: "Bright home office desk with laptop, printed tax papers, calculator, and coffee — editorial hero for Netherlands expat tax advisor guidance (not tax advice).",
      width: 1536,
      height: 1024,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money · Taxes",
      pageTitle: "Netherlands tax advisors for expats",
      subtitle:
        "When paid help can help, what advisers do, how to compare firms — and why tools and official pages stay first for many people.",
      contextChips: ["Editorial guide", "Not tax advice", "Paid help optional", "Tools first"],
      bullets: [
        "DIY-first for many payroll and return questions — this page shows when a firm can still help.",
        "Interview checklists and scope prompts — not rankings or guaranteed outcomes.",
        "Same calculators as elsewhere on Money → Tax — use them before you pay for bespoke answers.",
      ],
      primaryCta: { label: "Use tools first", href: R.taxesTools },
      secondaryCta: { label: "Compare tax advisor options", href: `${TAX_ADVISORS_EXPATS_PATH}#recommended-services` },
      trustNotes: [
        "Not tax or legal advice — no review of your file, letters, or immigration position.",
        "Not everyone needs paid help — Belastingdienst, employer payroll, and tools cover a lot first.",
      ] as const,
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Trust & limits",
      intro:
        "Everything above the optional listings block is editorial — interview prep, vocabulary, and links.",
      introBullets: [
        "Not tax advice — we do not tell you what to file or whether a firm is right for you.",
        "Paid help is optional — many readers never need a mandate; use this page to decide, not to panic.",
        "Provider links sit in their own section — same topic, separate purpose from the guide text.",
      ] as const,
      callouts: [...moneyTaxAdvisorTrustCallouts],
    },

    diyVsAdvisor: {
      id: "diy-vs-advisor",
      eyebrow: "Orientation",
      title: "DIY vs advisor — both are normal",
      subtitle: "The split is about facts and comfort, not virtue.",
      paths: [
        {
          id: "path-diy",
          label: "Often DIY / tools first",
          points: [
            "Straightforward Dutch employment and payslip questions.",
            "Guides + calculators + Belastingdienst pages for your year.",
            "Employer HR / payroll for withholding lines you do not recognise.",
          ] as const,
        },
        {
          id: "path-advisor",
          label: "Sometimes an adviser",
          points: [
            "Stacked cross-border, foreign asset, or mixed-income years.",
            "Arrival / departure timelines you want mapped to question lists.",
            "Scoped review, coaching, or filing — whatever you contract for.",
          ] as const,
        },
      ] as const,
    },

    quickActionStrip: [
      { label: "Use tools first", href: R.taxesTools },
      { label: "Compare tax advisor options", href: `${TAX_ADVISORS_EXPATS_PATH}#recommended-services` },
      { label: "Prepare your documents", href: `${TAX_ADVISORS_EXPATS_PATH}#prepare` },
      { label: "Read tax return guide", href: TAX_RETURN_NL_PATH },
    ] as const,

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "Orientation — not a sales funnel. Tools and official text first; advisers when you still want scoped help.",
      cells: [
        { title: "What this page is for", body: "Decide when DIY + tools is enough vs when a short or scoped adviser conversation may help." },
        { title: "Best for", body: "Expats comparing firms, prepping a first Dutch return, or sorting cross-border vocabulary." },
        { title: "What it covers", body: "Buckets, scorecard, checklists, questions to ask, red flags, and tool links." },
        { title: "What it skips", body: "Rankings, guarantees, and your final tax position — that stays with you, Belastingdienst, and any mandate you sign." },
      ],
      noteLines: [
        "Not tax advice — editorial only.",
        "Paid help is optional — many questions never need a firm.",
      ] as const,
    },

    startHere: {
      id: "start-here-need",
      eyebrow: "Start here",
      title: "Do you actually need a tax advisor?",
      subtitle: "Three buckets — stay calm, gather facts, then choose a path.",
      buckets: [...moneyTaxAdvisorNeedBuckets],
    },

    scorecard: {
      id: "tax-help-scorecard",
      eyebrow: "Self-triage",
      title: "Do you need tax help? A practical scorecard",
      subtitle:
        "No score totals — pick one or two rows, then open tools before you book anyone.",
      footnote:
        "Labels are editorial (Tools first / Worth checking / Consider advice). They are not a substitute for Belastingdienst or a signed mandate — they help you prepare better questions.",
      rows: scorecardRows,
    },

    whenWorth: {
      id: "when-worth",
      eyebrow: "Signals",
      title: "When a tax advisor is worth considering",
      subtitle: "Each card links to a tool or guide — open it before you pay for bespoke answers.",
      cards: whenWorth,
    },

    whatAdvisors: {
      id: "what-advisors-do",
      eyebrow: "Services",
      title: "What a tax advisor can help with",
      subtitle: "Categories — confirm scope in writing; names vary by firm.",
      categories: [...moneyTaxAdvisorUseCases.advisorServiceCategories],
    },

    prepare: {
      id: "prepare",
      eyebrow: "Checklists",
      title: "What to prepare before contacting one",
      subtitle: "Better intake reduces hourly spend and avoids repeat requests for the same PDF.",
      groups: [...moneyTaxAdvisorPreparationChecklist],
    },

    compare: {
      id: "compare",
      eyebrow: "Selection",
      title: "How to compare tax advisors",
      subtitle: "Treat this as a buying guide for interviews — not a ranked league table of firms.",
      criteria: [...moneyTaxAdvisorComparisonCriteria],
      ctaStrip: {
        text: "Use tools first — then ask sharper questions in consultations.",
        href: R.taxesTools,
        label: "Use tools first",
      },
    },

    hiringQuestions: {
      id: "hiring-questions",
      eyebrow: "Interview",
      title: "Questions to ask before hiring a tax advisor",
      subtitle:
        "Use this as a conversation guide in discovery calls — answers vary by firm; the goal is clarity on scope, not a perfect scorecard.",
      items: [...moneyTaxAdvisorQuestions],
      cta: {
        href: "#prepare",
        label: "Prepare your tax questions first",
        hint: "Gather documents and priorities on the same page before you book — it shortens meetings and reduces back-and-forth.",
      },
    },

    engagementTypes: {
      id: "engagement-types",
      eyebrow: "Engagements",
      title: "Typical advisor engagement types",
      subtitle: "Match the contract to the job — names vary by firm.",
      cards: [...moneyTaxAdvisorEngagementTypes],
    },

    redFlags: {
      id: "red-flags",
      eyebrow: "Safety",
      title: "Red flags and common mistakes",
      subtitle: "Quick pattern list — not a substitute for due diligence.",
      cards: [...moneyTaxAdvisorRedFlags],
    },

    servicesRegion: {
      id: moneyTaxAdvisorRecommendedProviders.sectionId,
      eyebrow: moneyTaxAdvisorRecommendedProviders.eyebrow,
      title: moneyTaxAdvisorRecommendedProviders.title,
      subtitle: moneyTaxAdvisorRecommendedProviders.subtitle,
      paidHelpIntro: moneyTaxAdvisorRecommendedProviders.paidHelpIntro,
      whenHelpBullets: [...moneyTaxAdvisorRecommendedProviders.whenHelpBullets],
      providerBlockLabel: moneyTaxAdvisorRecommendedProviders.providerBlockLabel,
      providerBlockHint: moneyTaxAdvisorRecommendedProviders.providerBlockHint,
    },

    toolsBeforePaying: {
      id: "tools-before-paying",
      eyebrow: "Tool-first",
      title: "How to use ExpatCopilot tools before paying",
      subtitle: "These tools help you understand the question before you pay someone to answer it.",
      intro: "Calculators and guides first — then bring named unknowns to any firm you interview.",
      rows: toolsBeforePaying,
      ctas: resolveRelatedTools([
        { kind: "tool", key: "salaryNet" },
        { kind: "tool", key: "ruling" },
        { kind: "tool", key: "payslip" },
        { kind: "tool", key: "doubleTax" },
      ]),
    },

    toolsShell: {
      id: "tax-advisors-tools-cluster",
      title: "Tax tools cluster",
      subtitle: "Same calculators as other Money → Tax pages — each documents its own limits.",
    },

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Guides & hubs",
      title: "Helpful tools and related guides",
      subtitle: "Keep official pages open in another tab while you browse.",
      sections: helpfulToolsSections,
    },

    faq: [...moneyTaxAdvisorFaq],

    sectionNav: taxAdvisorsNlSectionNav,
    deepLinks: taxAdvisorsNlDeepLinks,
    references,
  } as const;
}

export const taxAdvisorsNlPageModel = buildTaxAdvisorsNlPageModel();
export type TaxAdvisorsNlPageModel = typeof taxAdvisorsNlPageModel;
