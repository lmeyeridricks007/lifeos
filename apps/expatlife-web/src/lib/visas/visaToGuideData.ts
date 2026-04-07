/**
 * Converts VisaPageData to GuideData so visa pillar pages can use GuidePageTemplate.
 */

import type {
  GuideData,
  GuideSection,
  GuideToolCta,
  GuideHeroCta,
  GuideTocItem,
  GuideSalaryComparisonExample,
} from "@/src/lib/guides/types";
import type { GuideSectionService, GuideExampleScenario } from "@/src/lib/guides/types";
import type { VisaPageData } from "@/src/content/visas/types";
import { expandGuideDataWithRegistryRecommendations } from "@/src/lib/guides/registryRecommendedServices";
import { normalizeGuideContract } from "@/src/lib/guides/normalizeMovingGuideContract";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;
const DOCUMENT_READINESS_CHECKER = `${BASE}/document-readiness-checker/`;
const COMPARE_VISAS_HREF = `${BASE}/visa/compare-visas/`;

/** Shared worked examples; badge order is EU Blue Card first, then HSM (EU Blue Card guide). */
const EU_BLUE_CARD_VS_HSM_SALARY_EXAMPLES: GuideSalaryComparisonExample[] = [
  {
    title: "Younger hire · salary below standard Blue Card",
    profile: "Age 28 · €4,800 / month gross (excl. holiday allowance)",
    visualization: {
      type: "bar",
      salaryEur: 4800,
      barMaxEur: 7000,
      markers: [
        { amountEur: 4357, label: "HSM under 30", variant: "violet" },
        { amountEur: 5942, label: "Standard EU Blue Card & HSM 30+", variant: "sky" },
      ],
    },
    badges: [
      {
        route: "EU Blue Card (standard)",
        tone: "negative",
        caption: "Below €5,942 — standard tier may not fit",
      },
      {
        route: "Highly Skilled Migrant (under 30)",
        tone: "positive",
        caption: "Above €4,357 with a recognised sponsor",
      },
    ],
    body: "That is under the standard EU Blue Card threshold (€5,942 in our current figures), so the standard Blue Card tier may not fit. The same offer can still meet the Highly Skilled Migrant under-30 threshold (€4,357) with a recognized sponsor. In practice the employer may proceed on HSM rather than standard Blue Card unless a reduced Blue Card criterion or other exception applies to you.",
  },
  {
    title: "Higher offer · clears both standard tiers",
    profile: "Same profile · €6,200 / month gross (excl. holiday allowance)",
    visualization: {
      type: "bar",
      salaryEur: 6200,
      barMaxEur: 7000,
      markers: [
        { amountEur: 4357, label: "HSM under 30", variant: "violet" },
        { amountEur: 5942, label: "Standard EU Blue Card & HSM 30+", variant: "sky" },
      ],
    },
    badges: [
      { route: "EU Blue Card (standard)", tone: "positive", caption: "Meets €5,942 floor" },
      { route: "Highly Skilled Migrant", tone: "positive", caption: "Meets standard tier for this profile" },
    ],
    body: "That meets the standard EU Blue Card threshold and the HSM thresholds for that profile. The employer might still choose Highly Skilled Migrant because sponsor workflows are very common in the Netherlands, or EU Blue Card if your situation benefits from the Blue Card framework (including longer-term EU mobility under EU rules). The right filing is a legal/operational choice, not something you infer from salary alone.",
  },
  {
    title: "Experienced hire · above standard floors",
    profile: "Age 35 with a degree · €6,800 / month gross (excl. holiday allowance)",
    visualization: {
      type: "bar",
      salaryEur: 6800,
      barMaxEur: 7500,
      markers: [{ amountEur: 5942, label: "Standard EU Blue Card & HSM 30+", variant: "sky" }],
    },
    badges: [
      { route: "EU Blue Card (standard)", tone: "positive", caption: "Above €5,942" },
      { route: "Highly Skilled Migrant (30+)", tone: "positive", caption: "Above €5,942" },
    ],
    body: "You are likely above both the standard EU Blue Card threshold (€5,942) and the HSM 30+ threshold (same €5,942 in current figures). Timing can also differ: applications through a recognized sponsor may follow a 30-day decision period for EU Blue Card in some cases, versus other paths that can run longer—confirm against the IND decision-periods page.",
  },
  {
    title: "Reduced salary criteria (rules-based)",
    profile: "Lower floors only when IND conditions for each reduction are met",
    visualization: {
      type: "reduced",
      columns: [
        {
          title: "EU Blue Card — reduced gross",
          amount: "€4,754",
          note: "Applies only when the IND rules for that reduction apply to your case—not from the salary number alone.",
        },
        {
          title: "Highly Skilled Migrant — reduced",
          amount: "€3,122",
          note: "Applies only in specific situations defined by the IND. Do not assume eligibility without checking the official criteria.",
        },
      ],
    },
    badges: [
      {
        route: "EU Blue Card (reduced)",
        tone: "neutral",
        caption: "Context-specific — verify on IND",
      },
      {
        route: "Highly Skilled Migrant (reduced)",
        tone: "neutral",
        caption: "Context-specific — verify on IND",
      },
    ],
    body: "The EU Blue Card has a reduced gross threshold (€4,754 in our current figures) only when the IND rules for that reduction apply. Highly Skilled Migrant has a separate reduced criterion (€3,122) only in specific situations. Meeting a number on paper does not automatically mean you qualify for either reduction.",
  },
];

const HSM_VS_EU_BLUE_CARD_SALARY_EXAMPLES: GuideSalaryComparisonExample[] = EU_BLUE_CARD_VS_HSM_SALARY_EXAMPLES.map(
  (ex) => ({
    ...ex,
    badges: [...ex.badges].reverse(),
  })
);

export function highlySkilledMigrantToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-this-visa-is-for", label: "Who this visa is for" },
    { id: "hsm-vs-eu-blue-card", label: "HSM vs EU Blue Card" },
    { id: "alternatives", label: "Alternatives" },
    { id: "salary-thresholds", label: "Salary thresholds and costs" },
    { id: "employer-requirements", label: "Employer requirements" },
    { id: "documents", label: "Documents" },
    { id: "process-timeline", label: "Process and timeline" },
    { id: "after-approval", label: "After approval" },
    { id: "scenarios", label: "Scenarios" },
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move on a Highly Skilled Migrant visa",
    supportingText:
      "Use the document checker, relocation cost estimator, moving checklist, and first 90 days planner to turn your visa route into a practical move plan.",
    primaryCtaLabel: "Check your document readiness",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
    ],
    supportingLinks: [
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Open a Dutch bank account", href: `${BASE}/open-bank-account-netherlands/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    ],
  };

  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Sponsor requirement", value: v.keyFacts.sponsorRequirement ?? "N/A" },
    { label: "Current IND fee", value: v.keyFacts.indFee },
    { label: "Common users", value: v.keyFacts.commonUsers },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "The Highly Skilled Migrant (kennismigrant) permit is a Dutch residence permit for employees coming to work in the Netherlands in qualifying skilled roles. Only an employer recognized by the IND can apply for this permit.",
      "It is commonly used by international companies hiring non-EU professionals and is one of the most common non-EU work routes for expats moving to the Netherlands. It is different from the EU Blue Card, ICT, startup, and DAFT routes.",
    ],
    links: [
      { label: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "EU vs non-EU moving to the Netherlands", href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/` },
    ],
  };

  const whoForSection: GuideSection = {
    id: "who-this-visa-is-for",
    heading: "Who this visa is for",
    bullets: v.eligibility,
    callout: {
      type: "tip",
      title: "Best when you have an offer",
      text: "This route is usually best when you already have a qualifying offer from a recognized sponsor employer.",
    },
  };

  const hsmVsEuBlueCardSection: GuideSection = {
    id: "hsm-vs-eu-blue-card",
    heading: "Highly Skilled Migrant vs EU Blue Card: what is the difference?",
    body: [
      "Both are legal work-based residence routes for non-EU employees in the Netherlands, but they are not the same permit. Your employer (and often immigration counsel) chooses which route to apply for, based on salary, job level, qualifications, and processing options.",
    ],
    salaryComparisonExamples: HSM_VS_EU_BLUE_CARD_SALARY_EXAMPLES,
    table: {
      headers: ["Topic", "Highly Skilled Migrant (kennismigrant)", "EU Blue Card (Netherlands)"],
      rows: [
        [
          "What it is",
          "Netherlands-specific permit for skilled employees of a recognized sponsor.",
          "EU-wide category implemented in the Netherlands; distinct eligibility and salary rules.",
        ],
        [
          "Sponsor / employer",
          "Must be an IND recognised sponsor; employer applies for you.",
          "Work-based route with employer involvement; recognized-sponsor applications can use shorter decision periods in some cases.",
        ],
        [
          "Typical salary floors (gross/month, excl. holiday pay — verify on IND)",
          "30 and over: €5,942. Under 30: €4,357. Reduced criterion: €3,122 in qualifying cases only.",
          "Standard: €5,942. Reduced criterion: €4,754 in qualifying cases only.",
        ],
        [
          "Age and tiers",
          "Clear under-30 tier; reduced criterion for specific situations.",
          "No “under-30 discount” like HSM; eligibility is tied to highly qualified employment and correct salary tier.",
        ],
        [
          "Mobility angle",
          "Focused on living and working in the Netherlands.",
          "Designed with longer-term EU labour mobility in mind for holders who meet EU rules.",
        ],
      ],
    },
    callout: {
      type: "info",
      title: "Official criteria decide",
      text: "This page is a planning aid, not legal advice. Your employer must file the correct permit type. For EU Blue Card specifics and comparisons, read the EU Blue Card guide and the IND pages for both permits.",
      href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit",
      linkLabel: "IND — EU Blue Card",
    },
    links: [
      { label: "EU Blue Card in the Netherlands (full guide)", href: `${BASE}/visa/eu-blue-card/` },
      { label: "Compare visa routes (overview)", href: COMPARE_VISAS_HREF },
      { label: "IND — Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
    ],
  };

  const alternativesSection: GuideSection = {
    id: "alternatives",
    heading: "When another visa may fit better",
    body: [
      "If you are not eligible for the Highly Skilled Migrant route or are looking for a different basis to move, consider these alternatives. Each has its own requirements and best use case.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const salarySection: GuideSection = {
    id: "salary-thresholds",
    heading: "Salary thresholds and official costs",
    table: {
      headers: ["Category", "Amount (gross/month)", "Note"],
      rows: [
        ...(v.salaryThresholds ?? []).map((s) => [s.label, s.amountMonthly, s.note ?? ""]),
        ["Application fee", v.fees.applicationFee, v.fees.note ?? ""],
      ],
    },
    callout: {
      type: "info",
      title: "Figures can change",
      text: "Salary criteria and fees can change. Always check the IND required-amounts and fees pages for current figures. Employer and role conditions still apply besides salary.",
    },
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan your first-year costs for an employer-sponsored move.",
      primaryLabel: "Estimate your relocation cost →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const employerSection: GuideSection = {
    id: "employer-requirements",
    heading: "Employer and recognized sponsor requirements",
    body: [
      "Your employer must be recognized by the IND as a sponsor. The employer applies for the permit on your behalf and has sponsor obligations, including offering a market-conform salary and compliant employment conditions. Your exact eligibility depends on your employment setup.",
    ],
    bullets: v.employerRequirements ?? [],
    callout: {
      type: "warning",
      title: "Important",
      text: "Only a recognized sponsor can apply for a highly skilled migrant permit.",
    },
    links: [
      { label: "Check official sponsor and application rules (IND)", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
      { label: "IND obligations of sponsor", href: "https://ind.nl/en/obligations-of-sponsor-and-recognised-sponsor" },
    ],
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents usually needed",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Country of origin can affect whether apostilles, legalization, or translations are needed. The IND or municipality may request additional documents depending on your case.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process and typical timeline",
    body: [
      "The process runs from offer to arrival and registration. Some newcomers use official expat centres or one-stop-shop services where available. Timing can vary by case and region; housing and first-week admin planning should start before arrival.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const afterApprovalSection: GuideSection = {
    id: "after-approval",
    heading: "After approval: first steps in the Netherlands",
    body: [
      "After a positive decision, plan your arrival and first steps: municipality registration, BSN, Dutch bank account, health insurance, housing, mobile plan, and first 30–90 day admin. Use the tools below to build a practical plan.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/` },
      { label: "Arrival Planner", href: `${TOOLS}/arrival-planner/` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/#bsn` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const scenarioSectionIntro =
    "These examples show how the same visa route can look different depending on your profile, household, and origin country.";

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Recommended services for highly skilled migrants",
    body: [
      "Your employer usually files the HSM application, but immigration lawyers and visa consultants can still help with complex cases, family permits, objections, and second opinions. Relocation agencies and relocation services can support housing, municipal registration, and practical settling-in.",
    ],
    recommendedRegistryServices: {
      categories: ["immigration-lawyers", "visa-consultants", "relocation-agencies", "relocation-services"],
      limit: 6,
      strategy: "round-robin",
    },
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoForSection,
    hsmVsEuBlueCardSection,
    alternativesSection,
    salarySection,
    employerSection,
    documentsSection,
    processSection,
    afterApprovalSection,
    servicesSection,
  ];

  return normalizeGuideContract(expandGuideDataWithRegistryRecommendations({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle: "What it is, who it is for, salary thresholds, employer requirements, and how to plan your move if you are relocating on a recognized sponsor route.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example relocation scenarios",
    scenariosSectionIntro: scenarioSectionIntro,
    servicesSectionTitle: "Recommended services for highly skilled migrants",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...v.relatedGuides.map((g) => ({ label: g.label, href: g.href })),
        ...v.relatedCountryPages.map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Check document readiness", href: DOCUMENT_READINESS_CHECKER },
      { label: "Estimate relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...v.relatedGuides.slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn this visa into a practical move plan",
      body: "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, Document Readiness Checker, and Arrival Planner to plan your move step by step.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Estimate your relocation cost",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Generate a moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Requirements, fees, and salary thresholds change. Always confirm with the IND, your employer, or a qualified adviser.",
  }));
}

/** Converts EU Blue Card VisaPageData to GuideData for the EU Blue Card pillar page. */
export function euBlueCardToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-this-visa-is-for", label: "Who this route is for" },
    { id: "eu-blue-card-vs-hsm", label: "EU Blue Card vs HSM" },
    { id: "alternatives", label: "Alternatives" },
    { id: "salary-thresholds", label: "Salary thresholds and costs" },
    { id: "employer-requirements", label: "Employer and application route" },
    { id: "documents", label: "Documents" },
    { id: "process-timeline", label: "Process and timeline" },
    { id: "after-approval", label: "After approval" },
    { id: "typical-relocation-scenarios", label: "Scenarios" },
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move on the EU Blue Card route",
    supportingText:
      "Use the document checker, relocation cost estimator, moving checklist, and first 90 days planner to turn your EU Blue Card route into a practical move plan.",
    primaryCtaLabel: "Check your document readiness",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
    ],
    supportingLinks: [
      { label: "Highly Skilled Migrant Visa in the Netherlands", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "Open a Dutch bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const salaryLabel = v.salaryThresholds?.[0]?.amountMonthly ?? "€5,942";
  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Common users", value: v.keyFacts.commonUsers },
    { label: "Current salary threshold", value: `${salaryLabel} / month` },
    { label: "Current IND fee", value: v.keyFacts.indFee },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "The EU Blue Card is a residence permit for highly qualified employees. It is used by non-EU professionals with a qualifying position in the Netherlands and is different from the Dutch Highly Skilled Migrant route, even though the routes overlap for some applicants.",
      "It can be relevant for people who value the Blue Card framework and longer-term EU mobility. It is not an entrepreneur route and not suitable for people moving without a qualifying work basis.",
    ],
    links: [
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "EU vs non-EU moving to the Netherlands", href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/` },
      { label: "Moving to the Netherlands from your country", href: `${BASE}/moving-to-netherlands-from/` },
    ],
  };

  const whoForSection: GuideSection = {
    id: "who-this-visa-is-for",
    heading: "Who the EU Blue Card is for",
    bullets: v.eligibility,
    callout: {
      type: "tip",
      title: "When this route is relevant",
      text: "This route is usually relevant when you already have a qualifying work relationship and want to compare the EU Blue Card with the Dutch Highly Skilled Migrant route.",
    },
  };

  const euBlueCardVsHsmSection: GuideSection = {
    id: "eu-blue-card-vs-hsm",
    heading: "EU Blue Card vs Highly Skilled Migrant: what is the difference?",
    body: [
      "From the Netherlands side, you may be offered either the EU Blue Card or the Dutch Highly Skilled Migrant (kennismigrant) permit. Both are legal work-based routes for non-EU employees, but the rules are not identical. Your employer (and immigration counsel) files one permit type; you do not pick arbitrarily.",
    ],
    salaryComparisonExamples: EU_BLUE_CARD_VS_HSM_SALARY_EXAMPLES,
    table: {
      headers: ["Topic", "EU Blue Card (Netherlands)", "Highly Skilled Migrant (kennismigrant)"],
      rows: [
        [
          "What it is",
          "EU-wide highly qualified employee category implemented in the Netherlands.",
          "Netherlands-specific permit for skilled employees of a recognized IND sponsor.",
        ],
        [
          "Employer / sponsor",
          "Work-based route; recognized-sponsor submissions can use shorter decision periods in some cases.",
          "Requires an IND recognized sponsor; employer applies for you under Dutch kennismigrant rules.",
        ],
        [
          "Typical salary floors (gross/month, excl. holiday pay — verify on IND)",
          "Standard: €5,942. Reduced criterion: €4,754 in qualifying cases only.",
          "30 and over: €5,942. Under 30: €4,357. Reduced criterion: €3,122 in qualifying cases only.",
        ],
        [
          "Age and tiers",
          "No Dutch-style under-30 discount; eligibility follows Blue Card salary tiers and job qualification rules.",
          "Explicit under-30 tier; different reduced rules than Blue Card.",
        ],
        [
          "Mobility angle",
          "Framed for longer-term EU labour mobility when EU conditions are met.",
          "Focused on living and working in the Netherlands.",
        ],
      ],
    },
    callout: {
      type: "info",
      title: "Official criteria decide",
      text: "This page is a planning aid, not legal advice. For the Dutch work route your employer files, rely on the IND and qualified counsel. The Highly Skilled Migrant guide on this site explains the same comparison from the HSM side.",
      href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant",
      linkLabel: "IND — Highly skilled migrant",
    },
    links: [
      { label: "Highly Skilled Migrant visa (full guide)", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Compare visa routes (overview)", href: COMPARE_VISAS_HREF },
      { label: "IND — European Blue Card", href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit" },
    ],
  };

  const alternativesSection: GuideSection = {
    id: "alternatives",
    heading: "When another visa may fit better",
    body: [
      "If you have an employer offer but are comparing routes, or if you are studying, joining family, or self-employed, another option may fit better. Compare requirements and eligibility.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const salarySection: GuideSection = {
    id: "salary-thresholds",
    heading: "Salary thresholds and official costs",
    table: {
      headers: ["Category", "Amount (gross/month)", "Note"],
      rows: [
        ...(v.salaryThresholds ?? []).map((s) => [s.label, s.amountMonthly, s.note ?? ""]),
        ["Application fee", v.fees.applicationFee, v.fees.note ?? ""],
      ],
    },
    callout: {
      type: "info",
      title: "Figures can change",
      text: "Thresholds and fees can change. Always check the IND required-amounts and fees pages for current figures. Salary alone does not guarantee approval; other route requirements still matter.",
    },
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan first-year costs for a skilled employee move.",
      primaryLabel: "Estimate your relocation cost →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const employerSection: GuideSection = {
    id: "employer-requirements",
    heading: "Employer and application route",
    body: [
      "This is a work-based residence route. Employer involvement and application setup matter. Applications submitted by a recognised sponsor can benefit from a 30-day decision period; otherwise the decision period can be up to 90 days. Practical route choice should be confirmed against current IND rules.",
    ],
    bullets: v.employerRequirements ?? [],
    callout: {
      type: "warning",
      title: "Important",
      text: "The application path and timing can differ depending on whether a recognised sponsor is involved. This is one reason many expats compare the EU Blue Card with the Highly Skilled Migrant route before deciding what to pursue.",
    },
    links: [
      { label: "IND European Blue Card", href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit" },
      { label: "IND decision periods", href: "https://ind.nl/en/after-your-application/decision-periods" },
    ],
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents usually needed",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Country of origin may affect whether apostilles, legalization, or translations are needed. The IND or municipality may request additional documents depending on your case.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process and typical timeline",
    body: [
      "A 30-day decision period can apply when the application is submitted by a recognised sponsor; a 90-day period can apply otherwise. Housing and first-week admin should be planned early.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const afterApprovalSection: GuideSection = {
    id: "after-approval",
    heading: "After approval: first practical steps",
    body: [
      "After a positive decision: municipality registration, BSN, Dutch bank account, health insurance, housing, mobile plan, and first 30–90 day admin. Use the tools below to build a practical plan.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/` },
      { label: "Arrival Planner", href: `${TOOLS}/arrival-planner/` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/#bsn` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const scenarioSectionIntro =
    "These examples show how the EU Blue Card route can look different depending on your profession, origin country, and household setup.";

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Recommended services for EU Blue Card movers",
    services: v.services.map((s) => ({
      name: s.name,
      description: s.description,
      url: s.url,
      indicativeCost: s.indicativeCost,
      reason: s.reason,
      logo: s.logo,
    })),
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoForSection,
    euBlueCardVsHsmSection,
    alternativesSection,
    salarySection,
    employerSection,
    documentsSection,
    processSection,
    afterApprovalSection,
    servicesSection,
  ];

  return normalizeGuideContract({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "What the EU Blue Card is, who it is for, current salary thresholds, how it differs from the Highly Skilled Migrant route, and how to turn this work visa route into a practical relocation plan.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example relocation scenarios",
    scenariosSectionIntro: scenarioSectionIntro,
    servicesSectionTitle: "Recommended services for EU Blue Card movers",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...v.relatedGuides.map((g) => ({ label: g.label, href: g.href })),
        ...v.relatedCountryPages.map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Check document readiness", href: DOCUMENT_READINESS_CHECKER },
      { label: "Estimate relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...v.relatedGuides.slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn the EU Blue Card route into a practical move plan",
      body: "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, Document Readiness Checker, and Arrival Planner to plan your move step by step.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Estimate your relocation cost",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Generate a moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Requirements, fees, and salary thresholds change. Final eligibility depends on the full IND rules and your circumstances. Always confirm with the IND, your employer, or a qualified adviser.",
  });
}

/** Converts DAFT VisaPageData to GuideData for the Dutch-American Friendship Treaty pillar page. */
export function daftToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-daft-is-for", label: "Who DAFT is for" },
    { id: "alternatives", label: "Alternatives" },
    { id: "investment-costs", label: "Investment and costs" },
    { id: "business-setup", label: "Business setup requirements" },
    { id: "documents", label: "Documents" },
    { id: "process-timeline", label: "Process and timeline" },
    { id: "after-approval", label: "After approval" },
    { id: "typical-relocation-scenarios", label: "Scenarios" },
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move under the DAFT route",
    supportingText:
      "Use the document checker, relocation cost estimator, moving checklist, and first 90 days planner to turn your entrepreneur route into a practical move plan.",
    primaryCtaLabel: "Check your document readiness",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
    ],
    supportingLinks: [
      { label: "Moving to the Netherlands from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Open a Dutch bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const capitalLabel =
    v.investmentRequirements?.find((i) => i.label.toLowerCase().includes("sole") || i.label.toLowerCase().includes("bv"))
      ?.amount ?? "€4,500";
  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Who it is for", value: v.keyFacts.commonUsers },
    { label: "Current IND fee", value: v.keyFacts.indFee },
    { label: "Capital threshold", value: `${capitalLabel} for common business forms` },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "The Dutch-American Friendship Treaty (DAFT) is commonly used by eligible US citizens who want to live in the Netherlands while working on a self-employed basis. In practice, this route is handled within the Dutch self-employed residence permit framework.",
      "It is designed for American entrepreneurs, freelancers, and founders. It differs from employer-sponsored routes like the Highly Skilled Migrant permit: you do not need a Dutch employer to apply. It is still a formal residence route—business setup, registration, and documentation matter, and you must meet the investment and application requirements.",
    ],
    links: [
      { label: "Moving to the Netherlands from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "EU vs non-EU moving to the Netherlands", href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/` },
    ],
  };

  const whoForSection: GuideSection = {
    id: "who-daft-is-for",
    heading: "Who DAFT is for",
    bullets: v.eligibility,
    callout: {
      type: "tip",
      title: "When this route is relevant",
      text: "This route is typically relevant when you are a US citizen and want to live in the Netherlands as a self-employed person rather than as an employee of a recognized sponsor.",
    },
  };

  const alternativesSection: GuideSection = {
    id: "alternatives",
    heading: "When another visa may fit better",
    body: [
      "If you have an employer offer, are studying, or are joining family, another route may fit better. Compare requirements and eligibility.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const investmentRows = (v.investmentRequirements ?? []).map((i) => [i.label, i.amount, i.note ?? ""]);
  const investmentSection: GuideSection = {
    id: "investment-costs",
    heading: "Investment requirement and official costs",
    table: {
      headers: ["Business form", "Amount", "Note"],
      rows: [...investmentRows, ["IND application fee", v.fees.applicationFee, v.fees.note ?? ""]],
    },
    body: [
      "Costs of actually starting and running the business are separate from the IND application fee. The capital threshold is not the same as your total relocation budget. Incorporation, bookkeeping, legal advice, housing, insurance, and living costs add to the total move budget.",
    ],
    callout: {
      type: "info",
      title: "Figures can change",
      text: "Investment and fees are maintained in a central data file; always check the IND and KVK for current figures.",
    },
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan first-year costs for a founder move.",
      primaryLabel: "Estimate your relocation cost →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const businessSetupSection: GuideSection = {
    id: "business-setup",
    heading: "Business setup requirements",
    body: [
      "Your business must actually be set up and documented. Registration with the Dutch Chamber of Commerce (KVK) is usually relevant. The business form you choose matters for capital and reporting. Plan for bookkeeping or accountant support, and you need to show the required capital investment where applicable. You still need housing and registration planning for arrival.",
    ],
    bullets: v.businessSetupRequirements ?? [],
    callout: {
      type: "warning",
      title: "Practical note",
      text: "DAFT helps with the residence route, but it does not replace the real work of setting up and operating a compliant business.",
    },
    links: [
      { label: "KVK (Dutch Chamber of Commerce)", href: "https://www.kvk.nl/en/" },
      { label: "Business.gov.nl", href: "https://business.gov.nl/" },
    ],
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents usually needed",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Exact documentation can vary by business structure and whether family members are included. Apostilles or legalization may be required for some documents; check IND and municipality requirements.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process and typical timeline",
    body: [
      "Many founders plan housing and banking early because both personal and business setup can depend on timing. The first months often involve both relocation admin and business admin. Temporary housing is common while longer-term setup stabilizes.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const afterApprovalSection: GuideSection = {
    id: "after-approval",
    heading: "After approval: first practical steps",
    body: [
      "After a positive decision: municipality registration, BSN, Dutch bank account, health insurance, phone and internet, and business admin setup. Plan your first 30 and 90 days; if moving with family, plan their follow-up steps as well.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/` },
      { label: "Arrival Planner", href: `${TOOLS}/arrival-planner/` },
      { label: "Open a Dutch bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/#bsn` },
    ],
  };

  const scenarioSectionIntro =
    "These examples show how the DAFT route can look different depending on the kind of business you plan to run and whether you are moving alone or with family.";

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Recommended services for DAFT movers",
    body: [
      "DAFT sits in the Dutch self-employed residence framework: immigration lawyers and visa consultants often help with applications, business evidence, and family permits. Startup and entrepreneur advisors can complement KVK and accountant support. Relocation agencies and services can help with housing and arrival admin alongside your business setup.",
    ],
    recommendedRegistryServices: {
      categories: [
        "immigration-lawyers",
        "visa-consultants",
        "startup-visa-advisors",
        "relocation-agencies",
        "relocation-services",
      ],
      limit: 6,
      strategy: "round-robin",
    },
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoForSection,
    alternativesSection,
    investmentSection,
    businessSetupSection,
    documentsSection,
    processSection,
    afterApprovalSection,
    servicesSection,
  ];

  return normalizeGuideContract(expandGuideDataWithRegistryRecommendations({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "What the DAFT route is, who it is for, how the entrepreneur setup works for eligible US citizens, the current investment requirement, expected costs, and how to turn this route into a practical relocation plan.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example DAFT relocation scenarios",
    scenariosSectionIntro: scenarioSectionIntro,
    servicesSectionTitle: "Recommended services for DAFT movers",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...v.relatedGuides.map((g) => ({ label: g.label, href: g.href })),
        ...v.relatedCountryPages.map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Check document readiness", href: DOCUMENT_READINESS_CHECKER },
      { label: "Estimate relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...v.relatedGuides.slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn the DAFT route into a practical move plan",
      body: "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, Document Readiness Checker, and Arrival Planner to plan your move step by step.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Estimate your relocation cost",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Generate a moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Requirements and fees change. The DAFT route depends on US nationality and actual self-employed business setup. Always confirm with the IND, KVK, or a qualified adviser.",
  }));
}

const ORIENTATION_YEAR_IND_URL = "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year";

/** Converts Student Visa VisaPageData to GuideData for the student visa pillar page. */
export function studentToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-this-route-is-for", label: "Who this route is for" },
    { id: "alternatives", label: "Alternatives" },
    { id: "fees-study-amounts", label: "Fees and study amounts" },
    { id: "institution-role", label: "Role of the educational institution" },
    { id: "documents", label: "Documents" },
    { id: "process-timeline", label: "Process and timeline" },
    { id: "after-approval", label: "After approval" },
    { id: "working-after-study", label: "Working while studying / after graduation" },
    { id: "typical-relocation-scenarios", label: "Scenarios" },
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move as a student",
    supportingText:
      "Use the document checker, relocation cost estimator, moving checklist, and first 90 days planner to turn your study route into a practical move plan.",
    primaryCtaLabel: "Check your document readiness",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
    ],
    supportingLinks: [
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "Open a Dutch bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
      { label: "Orientation year (IND)", href: ORIENTATION_YEAR_IND_URL },
    ],
  };

  const studyAmountLabel = v.studyAmounts?.[0]?.amount ?? "€1,130.77";
  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Application fee", value: v.keyFacts.indFee },
    { label: "Study amount (HBO/university)", value: `${studyAmountLabel} / month` },
    { label: "Typical submitter", value: v.keyFacts.sponsorRequirement ?? "Educational institution" },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "People often say 'student visa,' but the practical Dutch route is usually a study residence permit. For most non-EU students, the process involves a Dutch study residence permit; depending on nationality and length of stay, an MVV (provisional residence permit) may also apply.",
      "This route is for non-EU / non-EEA students admitted to qualifying Dutch education. The educational institution usually submits the application. Students need to plan both immigration paperwork and practical arrival setup. It is different from work routes like Highly Skilled Migrant or EU Blue Card and from entrepreneur routes like DAFT. After graduation, some students later look at the Orientation Year route.",
    ],
    links: [
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
      { label: "Orientation year (IND)", href: ORIENTATION_YEAR_IND_URL },
    ],
  };

  const whoForSection: GuideSection = {
    id: "who-this-route-is-for",
    heading: "Who the student route is for",
    bullets: v.eligibility,
    callout: {
      type: "tip",
      title: "When this route is relevant",
      text: "This route is usually relevant when your main purpose in the Netherlands is education, not full-time employment or entrepreneurship.",
    },
  };

  const alternativesSection: GuideSection = {
    id: "alternatives",
    heading: "When another visa may fit better",
    body: [
      "If you have a job offer, are joining family, or are self-employed, another route may fit better. Compare requirements and eligibility.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const studyAmountRows = (v.studyAmounts ?? []).map((s) => [s.label, s.amount, s.note ?? ""]);
  const feesSection: GuideSection = {
    id: "fees-study-amounts",
    heading: "Official fee and study amounts",
    table: {
      headers: ["Category", "Amount", "Note"],
      rows: [["Application fee", v.fees.applicationFee, v.fees.note ?? ""], ...studyAmountRows],
    },
    body: [
      "These are official planning figures and can change. Institutions may ask students to prove sufficient means for study and stay. Your total relocation budget is usually much higher once housing, travel, deposits, insurance, and setup costs are included.",
    ],
    callout: {
      type: "info",
      title: "Figures can change",
      text: "Fees and study amounts are maintained in a central data file and can change annually. Always check the IND fees and required-amounts pages for current values.",
    },
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan first-year costs for a student move.",
      primaryLabel: "Estimate your relocation cost →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const institutionSection: GuideSection = {
    id: "institution-role",
    heading: "Role of the educational institution",
    body: [
      "For standard student routes, the educational institution usually submits the application. The institution is central to the process. Admission often comes before immigration filing. Students should coordinate deadlines, finances, and arrival timing with the institution. This route is different from employer-sponsored work visas.",
    ],
    bullets: v.institutionRequirements ?? [],
    callout: {
      type: "warning",
      title: "Important",
      text: "Your school or educational institution is often the party that submits the application.",
    },
    links: [
      { label: "IND study residence permits", href: "https://ind.nl/en/residence-permits/study" },
    ],
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents usually needed",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Depending on country of origin, apostilles, legalization, or translations may be needed for some civil documents. The IND and your institution can confirm what applies to you.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process and typical timeline",
    body: [
      "The IND study page notes a 60-day decision period for the student residence permit. Students should not leave housing, banking, and first-week admin to the last minute. Arrival planning often overlaps with school start deadlines.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const afterApprovalSection: GuideSection = {
    id: "after-approval",
    heading: "After approval: first practical steps",
    body: [
      "After a positive decision: municipality registration, BSN, housing, bank account, health insurance (depending on situation), mobile plan, and first 30–90 day planning. Use the tools below to build a practical plan.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/` },
      { label: "Arrival Planner", href: `${TOOLS}/arrival-planner/` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/#bsn` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const workingAfterStudySection: GuideSection = {
    id: "working-after-study",
    heading: "Working while studying and after graduation",
    body: [
      "Students often want to understand what work options exist during study and after graduation. Work rights during study are limited and depend on your permit and nationality. After graduation, the Orientation Year (search year) permit can allow you to stay and look for work in the Netherlands. Do not overstate work rights; confirm with the IND and your institution.",
    ],
    links: [
      { label: "Orientation year (IND)", href: ORIENTATION_YEAR_IND_URL },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
    ],
  };

  const scenarioSectionIntro =
    "These examples show how the student route can look different depending on institution type, country of origin, and whether the student is moving alone or with household complexity.";

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Recommended services for student movers",
    services: v.services.map((s) => ({
      name: s.name,
      description: s.description,
      url: s.url,
      indicativeCost: s.indicativeCost,
      reason: s.reason,
      logo: s.logo,
    })),
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoForSection,
    alternativesSection,
    feesSection,
    institutionSection,
    documentsSection,
    processSection,
    afterApprovalSection,
    workingAfterStudySection,
    servicesSection,
  ];

  return normalizeGuideContract({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "What the student route is, who it is for, what it costs, how the educational institution usually applies, what proof of funds is commonly needed, and how to turn study admission into a practical relocation plan.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example student relocation scenarios",
    scenariosSectionIntro: scenarioSectionIntro,
    servicesSectionTitle: "Recommended services for student movers",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...v.relatedGuides.map((g) => ({ label: g.label, href: g.href })),
        ...v.relatedCountryPages.map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Check document readiness", href: DOCUMENT_READINESS_CHECKER },
      { label: "Estimate relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...v.relatedGuides.slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn your student route into a practical move plan",
      body: "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, Document Readiness Checker, and Arrival Planner to plan your move step by step.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Estimate your relocation cost",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Generate a moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Fees and study amounts can change. Exact route depends on study type, institution, and nationality. Always confirm with the IND and your educational institution.",
  });
}

/** Converts Partner & Family Visa VisaPageData to GuideData for the partner-family visa pillar page. */
export function partnerFamilyToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-can-apply", label: "Who can apply" },
    { id: "types-of-family-visas", label: "Types of family visas" },
    { id: "requirements", label: "Requirements" },
    { id: "income-requirements", label: "Income requirements" },
    { id: "process-timeline", label: "Application process" },
    { id: "documents", label: "Documents required" },
    { id: "cost-breakdown", label: "Cost breakdown" },
    { id: "processing-time", label: "Processing time" },
    { id: "work-rights", label: "Work rights" },
    { id: "typical-relocation-scenarios", label: "Common scenarios" },
    { id: "real-examples", label: "Real examples" },
    { id: "services", label: "Services that can help" },
    { id: "faq", label: "Frequent questions" },
    { id: "tools", label: "Related tools" },
    { id: "related-guides", label: "Related guides" },
    { id: "official-sources", label: "Official sources" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move as a partner or family",
    supportingText:
      "Use the document checker and relocation cost estimator to see if you qualify and what your move might cost.",
    primaryCtaLabel: "Check if you qualify",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Calculate relocation costs", href: `${TOOLS}/relocation-cost-estimator/` },
    ],
    supportingLinks: [
      { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
      { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "Open a Dutch bank account", href: `${BASE}/open-bank-account-netherlands/` },
    ],
  };

  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Sponsor", value: v.keyFacts.sponsorRequirement ?? "Required" },
    { label: "IND fee (adult)", value: v.fees.applicationFee },
    { label: "Common users", value: v.keyFacts.commonUsers },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "The partner or family residence permit allows spouses, registered partners, unmarried partners, and children to live in the Netherlands with a resident sponsor. Typical duration is up to 5 years, with a path to permanent residence. The sponsor must meet income and housing requirements set by the IND.",
      "This route is different from work-based permits (e.g. Highly Skilled Migrant or EU Blue Card) and from study or entrepreneur routes. If you are joining a partner or family member who already lives in the Netherlands, this guide covers requirements, costs, timelines, and application steps.",
    ],
    links: [
      { label: "IND Family & Partner permits", href: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner" },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
    ],
  };

  const whoCanApplySection: GuideSection = {
    id: "who-can-apply",
    heading: "Who can apply",
    body: ["The following can typically apply for a partner or family residence permit in the Netherlands:"],
    table: v.whoCanApplyCards?.length
      ? { headers: ["Category", "Description"], rows: v.whoCanApplyCards.map((c) => [c.name, c.description]) }
      : undefined,
    bullets: !v.whoCanApplyCards?.length ? v.eligibility : undefined,
  };

  const typesSection: GuideSection = {
    id: "types-of-family-visas",
    heading: "Types of family visas",
    body: ["Different permit types apply depending on your relationship and the sponsor’s status:"],
    table: v.typesOfPermit?.length
      ? { headers: ["Permit type", "Description"], rows: v.typesOfPermit.map((t) => [t.name, t.description]) }
      : undefined,
  };

  const requirementsSection: GuideSection = {
    id: "requirements",
    heading: "Requirements",
    bullets: v.requirementsBullets ?? v.eligibility,
    callout: {
      type: "info",
      title: "Source",
      text: "Requirements can vary by route and sponsor status. Always check current IND rules and the government checklist for bringing a foreign partner to the Netherlands.",
    },
  };

  const incomeSection: GuideSection = {
    id: "income-requirements",
    heading: "Income requirements",
    body: [
      "The sponsor must prove independent and sustainable income at or above the amount required by the IND. Amounts can change; check the IND income requirements page for current figures.",
    ],
    table: v.incomeRequirements?.length
      ? {
          headers: ["Category", "Amount", "Note"],
          rows: v.incomeRequirements.map((i) => [i.label, i.amount, i.note ?? ""]),
        }
      : undefined,
    links: [{ label: "IND income requirements", href: "https://ind.nl/en/required-amounts-income-requirements" }],
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process",
    body: [
      "Decision timeline is typically within 90 days. Document preparation and, if applicable, MVV or embassy steps can add time. Plan for 2–4 months from start to arrival in many cases.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents required",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Exact documentation can vary by relationship, sponsor status, and nationality. Apostilles, legalisation, or certified translations may be required for some civil documents. The IND and immigration providers describe typical requirements.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const costSection: GuideSection = {
    id: "cost-breakdown",
    heading: "Cost breakdown",
    body: [
      "Costs depend on your situation (adult vs child, MVV required or not, civic integration). The figures below are indicative; check the IND and EU immigration portal for current fees.",
    ],
    table: v.costBreakdown?.length
      ? {
          headers: ["Item", "Amount", "Note"],
          rows: v.costBreakdown.map((c) => [c.label, c.amount, c.note ?? ""]),
        }
      : undefined,
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan first-year costs for a family move.",
      primaryLabel: "Calculate relocation costs →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const processingTimeSection: GuideSection = {
    id: "processing-time",
    heading: "Processing time",
    body: [
      "Typical timeline from document preparation to arrival. IND decision is often 4–12 weeks; embassy or MVV steps can add 2–8 weeks. Total relocation timeline is commonly 2–4 months.",
    ],
    table: v.processingTimePhases?.length
      ? {
          headers: ["Phase", "Typical duration"],
          rows: v.processingTimePhases.map((p) => [p.phase, p.duration]),
        }
      : undefined,
  };

  const workRightsSection: GuideSection = {
    id: "work-rights",
    heading: "Work rights",
    body: [v.workRightsSummary ?? "Spouses and partners who receive this residence permit generally have full work authorization in the Netherlands. No separate work permit is required. This is an important benefit of the partner and family visa."],
    callout: {
      type: "tip",
      title: "Important benefit",
      text: "No work permit is required for the partner; they can work in the Netherlands on the basis of the residence permit.",
    },
  };

  const scenariosSectionIntro =
    "These examples show how the partner or family route can look depending on who is joining whom and where the sponsor is from.";

  const realExamplesSection: GuideSection = {
    id: "real-examples",
    heading: "Real examples",
    body: [
      "Example 1 — American joining spouse working in Amsterdam: Partner on HSM or other work permit; you apply for partner residence permit. Typical total cost: application €210, MVV if needed ~€171, civic integration €150, plus relocation (flights, housing deposit, first months) — often €5,000–15,000+ depending on situation.",
      "Example 2 — Indian partner joining highly skilled migrant: Sponsor holds HSM permit; you apply for family reunification. MVV often required. Budget: IND fee €210, MVV ~€171, document legalisation/translations, integration exam €150. Total first-year relocation often €6,000–20,000 including move and setup.",
      "Example 3 — EU citizen family reunification: EU/EEA sponsor exercising treaty rights; non-EU family member applies under EU law. Fees and requirements can differ from the standard IND partner route. Check IND and government.nl. Relocation costs in a similar range depending on country of origin.",
    ],
  };

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Services that can help",
    services: v.services.map((s) => ({
      name: s.name,
      description: s.description,
      url: s.url,
      indicativeCost: s.indicativeCost,
      reason: s.reason,
      logo: s.logo,
    })),
  };

  const toolsSection: GuideSection = {
    id: "tools",
    heading: "Related tools",
    body: [
      "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Use these tools to plan your move: estimate costs, build a checklist, and plan your first 90 days after arrival.",
    ],
    links: [
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Moving checklist", href: `${TOOLS}/moving-checklist/` },
      { label: "First 90 days planner", href: `${TOOLS}/first-90-days/` },
      { label: "Document readiness checker", href: DOCUMENT_READINESS_CHECKER },
      { label: "Arrival planner", href: `${TOOLS}/arrival-planner/` },
    ],
  };

  const relatedGuidesSection: GuideSection = {
    id: "related-guides",
    heading: "Related guides",
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "Moving to the Netherlands from the USA", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
      { label: "Moving to the Netherlands from the UK", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
      { label: "Moving to the Netherlands from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
      { label: "Highly skilled migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      ...(v.relatedGuides ?? []).map((g) => ({ label: g.label, href: g.href })),
    ].slice(0, 10),
  };

  const officialSourcesSection: GuideSection = {
    id: "official-sources",
    heading: "Official sources",
    body: ["For current rules, forms, and fees, always refer to the IND and the Dutch government:"],
    links: (v.officialSources ?? []).map((o) => ({ label: o.label, href: o.href })),
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoCanApplySection,
    typesSection,
    requirementsSection,
    incomeSection,
    processSection,
    documentsSection,
    costSection,
    processingTimeSection,
    workRightsSection,
    realExamplesSection,
    servicesSection,
    toolsSection,
    relatedGuidesSection,
    officialSourcesSection,
  ];

  return normalizeGuideContract({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "How to join your spouse, partner, or family member in the Netherlands — requirements, costs, timelines, and application steps.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Common scenarios",
    scenariosSectionIntro,
    servicesSectionTitle: "Services that can help",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Partner & family visa", href: v.path },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...(v.relatedGuides ?? []).map((g) => ({ label: g.label, href: g.href })),
        ...(v.relatedCountryPages ?? []).map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Check if you qualify", href: DOCUMENT_READINESS_CHECKER },
      { label: "Calculate relocation costs", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...(v.relatedGuides ?? []).slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn the partner route into a practical move plan",
      body: "Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, and Document Readiness Checker to plan your move.",
      primaryLabel: "Check if you qualify",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Calculate relocation costs",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Requirements and fees change. Always confirm with the IND, government.nl, or a qualified adviser.",
  });
}

/** Converts Self-Employed Visa VisaPageData to GuideData for the self-employed visa pillar page. */
export function selfEmployedToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "who-this-route-is-for", label: "Who this route is for" },
    { id: "alternatives", label: "Alternatives" },
    { id: "fee-figures", label: "Fee and planning figures" },
    { id: "business-setup", label: "Business setup and viability" },
    { id: "documents", label: "Documents" },
    { id: "process-timeline", label: "Process and timeline" },
    { id: "after-approval", label: "After approval" },
    { id: "typical-relocation-scenarios", label: "Scenarios" },
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
    { id: "official-sources", label: "Official sources" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your move as a self-employed professional",
    supportingText:
      "Use the document checker, relocation cost estimator, moving checklist, and first 90 days planner to turn your self-employed route into a practical move plan.",
    primaryCtaLabel: "Check your document readiness",
    primaryCtaHref: DOCUMENT_READINESS_CHECKER,
    secondaryCtas: [
      { label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
    ],
    supportingLinks: [
      { label: "Dutch-American Friendship Treaty (DAFT)", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    ],
  };

  const requiredAmount = v.incomeRequirements?.[0]?.amount ?? "€1,734.57";
  const quickAnswers = [
    { label: "Route type", value: v.keyFacts.routeType },
    { label: "Common users", value: v.keyFacts.commonUsers },
    { label: "Current IND fee", value: v.keyFacts.indFee },
    { label: "Required amount (gross profit)", value: `${requiredAmount} / month` },
  ];

  const overviewSection: GuideSection = {
    id: "overview",
    heading: "Overview",
    body: [
      "This route is for non-EU / non-EEA / non-Swiss nationals who want to live in the Netherlands and work on a self-employed basis. It is often relevant for freelancers, consultants, solo founders, and independent professionals.",
      "It is different from employer-sponsored routes like Highly Skilled Migrant and EU Blue Card. It is different from DAFT, which is a special self-employed path for eligible US citizens. It is different from the startup permit, which is a separate one-year route. Business setup, KVK registration, and actual income or viability matter.",
    ],
    links: [
      { label: "Dutch-American Friendship Treaty (DAFT)", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    ],
  };

  const whoForSection: GuideSection = {
    id: "who-this-route-is-for",
    heading: "Who the self-employed route is for",
    bullets: v.eligibility,
    callout: {
      type: "tip",
      title: "When this route is relevant",
      text: "This route is usually relevant when you want to live in the Netherlands based on your own business or freelance work rather than a sponsored employment contract.",
    },
  };

  const alternativesSection: GuideSection = {
    id: "alternatives",
    heading: "When another visa may fit better",
    body: [
      "If you have an employer offer, are a US citizen (DAFT), or are joining family, another route may fit better. Compare requirements and eligibility.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const incomeRows = (v.incomeRequirements ?? []).map((i) => [i.label, i.amount, i.note ?? ""]);
  const feeSection: GuideSection = {
    id: "fee-figures",
    heading: "Current official fee and planning figures",
    table: {
      headers: ["Category", "Amount", "Note"],
      rows: [...incomeRows, ["IND application fee", v.fees.applicationFee, v.fees.note ?? ""]],
    },
    body: [
      "This figure should be treated as a current official planning figure, not the whole story of approval. The self-employed route usually also depends on business viability and the full application context. Values can change over time.",
    ],
    callout: {
      type: "info",
      title: "Figures can change",
      text: "Fees and required amounts are maintained in a central data file; always check the IND fees and required amounts pages for current values.",
    },
    ctaBlock: {
      title: "Estimate your relocation cost",
      supportingText: "Use the Relocation Cost Estimator to plan first-year costs for a self-employed move.",
      primaryLabel: "Estimate your relocation cost →",
      primaryHref: `${TOOLS}/relocation-cost-estimator/`,
    },
  };

  const businessSetupSection: GuideSection = {
    id: "business-setup",
    heading: "Business setup and viability requirements",
    body: [
      "You need a real self-employed activity or business. KVK registration is typically part of practical setup. Your business structure matters; business activity, clients, and income logic matter. This route is more than simply saying you want to freelance; in many cases, the business must make economic sense in the Dutch context. Use Business.gov.nl and KVK guidance for practical business setup support.",
    ],
    bullets: v.businessSetupRequirements ?? [],
    callout: {
      type: "warning",
      title: "Important",
      text: "This route is not the same as occasional remote work; it is a formal residence route tied to self-employed business activity.",
    },
    links: [
      { label: "Business.gov.nl", href: "https://business.gov.nl/" },
      { label: "KVK (Dutch Chamber of Commerce)", href: "https://www.kvk.nl/en/" },
    ],
  };

  const documentsSection: GuideSection = {
    id: "documents",
    heading: "Documents usually needed",
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    body: [
      "Country of origin may affect whether apostilles, legalization, or translations are needed. Exact documentation can vary by business structure and whether family members are included.",
    ],
    ctaBlock: {
      title: "Check your document readiness",
      supportingText: "Use the Document Readiness Checker to see which documents often apply to your profile.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const processSection: GuideSection = {
    id: "process-timeline",
    heading: "Application process and typical timeline",
    body: [
      "Timeline can vary by case. Business setup and housing often need parallel planning. Arrival setup usually includes both personal admin and business admin.",
    ],
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
  };

  const afterApprovalSection: GuideSection = {
    id: "after-approval",
    heading: "After approval: first practical steps",
    body: [
      "After a positive decision: municipality registration, BSN, bank account, health insurance, phone and internet, KVK and business admin follow-up, and bookkeeping or tax setup awareness. Plan your first 30 and 90 days.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: `${BASE}/after-arriving-netherlands/` },
      { label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/` },
      { label: "Arrival Planner", href: `${TOOLS}/arrival-planner/` },
      { label: "Open a Dutch bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
      { label: "Relocation Cost Estimator", href: `${TOOLS}/relocation-cost-estimator/` },
    ],
  };

  const scenarioSectionIntro =
    "These examples show how the self-employed route can look different depending on business type, origin country, and household setup.";

  const servicesSection: GuideSection = {
    id: "services",
    heading: "Recommended services for self-employed movers",
    body: [
      "The self-employed residence permit depends on business viability and correct filings. Immigration lawyers and visa consultants often help with applications, evidence, and family permits. Startup and entrepreneur advisors can sit alongside KVK and accountant support. Relocation agencies and services can help with housing and arrival admin while you set up your business.",
    ],
    recommendedRegistryServices: {
      categories: [
        "immigration-lawyers",
        "visa-consultants",
        "startup-visa-advisors",
        "relocation-agencies",
        "relocation-services",
      ],
      limit: 6,
      strategy: "round-robin",
    },
  };

  const relatedGuidesSection: GuideSection = {
    id: "related-guides",
    heading: "Related guides",
    links: [
      { label: "Dutch-American Friendship Treaty (DAFT)", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
      { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
      { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
      { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
      { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
      ...(v.relatedCountryPages ?? []).map((c) => ({ label: c.label, href: c.href })),
    ].slice(0, 10),
  };

  const officialSourcesSection: GuideSection = {
    id: "official-sources",
    heading: "Official sources and further information",
    body: ["For current rules, forms, and fees, refer to the IND and Dutch government:"],
    links: (v.officialSources ?? []).map((o) => ({ label: o.label, href: o.href })),
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  const sections: GuideSection[] = [
    overviewSection,
    whoForSection,
    alternativesSection,
    feeSection,
    businessSetupSection,
    documentsSection,
    processSection,
    afterApprovalSection,
    servicesSection,
    relatedGuidesSection,
    officialSourcesSection,
  ];

  return normalizeGuideContract(expandGuideDataWithRegistryRecommendations({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "What the Dutch self-employed route is, who it is for, how it differs from DAFT and startup visas, what current profit and fee figures to plan around, and how to turn your business move into a practical relocation plan.",
    description: v.summary,
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections,
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example self-employed relocation scenarios",
    scenariosSectionIntro: scenarioSectionIntro,
    servicesSectionTitle: "Recommended services for self-employed movers",
    internalLinks: {
      hub: { label: "Moving hub", href: `${BASE}/moving/` },
      pillar: { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
      related: [
        { label: "Compare this route with other visa options", href: COMPARE_VISAS_HREF },
        ...(v.relatedGuides ?? []).map((g) => ({ label: g.label, href: g.href })),
        ...(v.relatedCountryPages ?? []).map((c) => ({ label: c.label, href: c.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visa options", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "Visa timeline estimator", href: `${BASE}/visa-timeline-estimator/` },
      { label: "Check document readiness", href: DOCUMENT_READINESS_CHECKER },
      { label: "Estimate relocation cost", href: `${TOOLS}/relocation-cost-estimator/` },
      { label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/` },
      ...(v.relatedGuides ?? []).slice(0, 4).map((g) => ({ label: g.label, href: g.href })),
    ],
    toolsCtaBand: {
      title: "Turn your self-employed route into a practical move plan",
      body: "Want to estimate how long this route may take? Use the Visa Timeline Estimator. Not sure if this visa fits you? Use the visa checker. Then use the Relocation Cost Estimator, Moving Checklist, First 90 Days Planner, Document Readiness Checker, and Arrival Planner to plan your move step by step.",
      primaryLabel: "Check your document readiness",
      primaryHref: DOCUMENT_READINESS_CHECKER,
      secondaryLabel: "Estimate your relocation cost",
      secondaryHref: `${TOOLS}/relocation-cost-estimator/`,
      tertiaryLabel: "Generate a moving checklist",
      tertiaryHref: `${TOOLS}/moving-checklist/`,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not legal advice. Requirements and fees change. Full approval depends on the complete IND rules and business viability assessment. Always confirm with the IND, KVK, or a qualified adviser.",
  }));
}
