/**
 * Converts CountryPageModel into GuideData so dynamic country pages
 * can use the same GuidePageTemplate as static guide pages (e.g. bringing-pets).
 */

import type { GuideData, GuideSection, GuideToolCta } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";
import { augmentAustraliaGuideData } from "./australiaMovingGuideData";
import { augmentCanadaGuideData } from "./canadaMovingGuideData";
import { augmentFranceGuideData } from "./franceMovingGuideData";
import { augmentGermanyGuideData } from "./germanyMovingGuideData";
import { augmentSpainGuideData } from "./spainMovingGuideData";
import { augmentItalyGuideData } from "./italyMovingGuideData";
import { augmentNewZealandGuideData } from "./newZealandMovingGuideData";
import { augmentUaeGuideData } from "./uaeMovingGuideData";
import { augmentBrazilGuideData } from "./brazilMovingGuideData";
import { augmentMexicoGuideData } from "./mexicoMovingGuideData";
import { augmentSingaporeGuideData } from "./singaporeMovingGuideData";
import { augmentJapanGuideData } from "./japanMovingGuideData";
import { augmentSouthKoreaGuideData } from "./southKoreaMovingGuideData";
import { augmentTurkeyGuideData } from "./turkeyMovingGuideData";
import { augmentArgentinaGuideData } from "./argentinaMovingGuideData";
import { augmentChileGuideData } from "./chileMovingGuideData";
import { augmentSwitzerlandGuideData } from "./switzerlandMovingGuideData";
import { augmentSwedenGuideData } from "./swedenMovingGuideData";
import { augmentDenmarkGuideData } from "./denmarkMovingGuideData";
import { augmentNorwayGuideData } from "./norwayMovingGuideData";
import { augmentIrelandGuideData } from "./irelandMovingGuideData";

const HUB_PATH = "/netherlands/moving/";
const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const VISA_COST_CALCULATOR_PATH = "/netherlands/visa-cost-calculator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";
const FIRST_90_DAYS_PATH = "/netherlands/first-90-days-netherlands/";

function buildDefaultCountryGuideData(
  model: CountryPageModel,
  options: { heroImageSrc?: string; baseUrl?: string }
): GuideData {
  const { heroImageSrc } = options;
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const first90Href = `/netherlands/moving/tools/first-90-days/${fromQuery}`;
  const documentReadinessHref = `/netherlands/document-readiness-checker/${fromQuery}`;
  const arrivalPlannerHref = `/netherlands/moving/tools/arrival-planner/${fromQuery}`;

  const sections: GuideSection[] = [
    {
      id: "overview",
      heading: `Why people move from ${model.name} to the Netherlands`,
      body: [model.opening.intro, model.opening.differences],
      bullets: [
        ...(model.whyMove.reasons.length ? ["Common reasons: " + model.whyMove.reasons.join("; ")] : []),
        ...(model.whyMove.sectors.length ? ["Common sectors: " + model.whyMove.sectors.join(", ")] : []),
      ].filter(Boolean),
    },
    {
      id: "costs",
      heading: `Costs to consider when moving from ${model.name} to the Netherlands`,
      body: [model.costs.narrative, model.costs.disclaimer].filter((s): s is string => Boolean(s)),
      table:
        model.costs.ranges?.length > 0
          ? {
              headers: ["Category", "Typical range", "Notes"],
              rows: model.costs.ranges.map((r) => [r.label, r.value, r.note]),
            }
          : undefined,
      internalCta:
        model.costs.ctaLabel
          ? { label: `${model.costs.ctaLabel} →`, href: costEstimatorHref }
          : { label: "Estimate your full relocation cost →", href: costEstimatorHref },
      links: [
        { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
      ],
    },
    {
      id: "visa-route",
      heading: "Visa and route awareness",
      body: [
        "Your eligibility and required steps depend on your nationality, purpose of move, and whether you have a sponsor or employer. Confirm your route with official sources before making firm plans.",
      ],
      visaRoutes: {
        commonRoutes: model.visaAwareness.commonRoutes,
        notes: model.visaAwareness.notes,
      },
      callout: {
        type: "info",
        title: "Important",
        text: model.visaAwareness.disclaimer,
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Visa and permit overview", href: model.visaAwareness.visaHubPath },
        { label: "EU Blue Card", href: "/netherlands/visa/eu-blue-card/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        ...(model.slug === "united-states"
          ? [{ label: "Dutch-American Friendship Treaty (DAFT)", href: "/netherlands/visa/dutch-american-friendship-treaty/" as const }]
          : []),
      ],
    },
    {
      id: "documents",
      heading: "Documents to prepare",
      body: [
        "Document requirements depend on your route and destination. Start gathering key records early so you have time for certification or apostille if needed.",
      ],
      bullets: [
        ...model.documents.commonStarterDocuments,
        ...model.documents.countrySpecificNotes,
      ],
      internalCta: {
        label: "Check your document readiness",
        href: model.documents.ctaHref,
      },
      links: [
        { label: "Documents needed to move to the Netherlands", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "timeline",
      heading: "Typical timeline",
      body: [model.timeline.narrative],
      timelineStages: {
        beforeMove: model.timeline.beforeMove,
        arrivalWeek: model.timeline.arrivalWeek,
        first90Days: model.timeline.first90Days,
      },
    },
    {
      id: "shipping",
      heading: "Shipping and relocation logistics",
      body: [model.shipping.intro],
      bullets: model.shipping.notes,
      links: [
        { label: "Shipping household goods to the Netherlands", href: "/netherlands/shipping-household-goods-netherlands/" },
        { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
        { label: "Bringing pets to the Netherlands", href: "/netherlands/bringing-pets-to-netherlands/" },
      ].filter((l) => l.href),
    },
  ];

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "costs", label: "Costs to consider" },
    { id: "visa-route", label: "Visa and route awareness" },
    { id: "documents", label: "Documents to prepare" },
    { id: "timeline", label: "Typical timeline" },
    { id: "shipping", label: "Shipping and relocation logistics" },
    { id: "typical-relocation-scenarios", label: "Typical relocation scenarios" },
    { id: "tools", label: "Tools" },
    { id: "useful-services", label: "Useful services" },
    { id: "faq", label: "FAQ" },
    { id: "related-guides", label: "Related guides" },
  ];

  const visaCostCalculatorHref = `${VISA_COST_CALCULATOR_PATH}${fromQuery}`;
  const toolCtas: GuideToolCta[] = [
    {
      key: "visa-cost-calculator",
      label: "Visa Cost Calculator",
      href: visaCostCalculatorHref,
      description: "Estimate visa fees, document costs, and move-related expenses for your route.",
      ctaLabel: "Estimate visa costs",
    },
    {
      key: "relocation-cost-estimator",
      label: "Estimate Relocation Cost",
      href: costEstimatorHref,
      description: "Get a personalized cost range for your move from " + model.name + " to the Netherlands.",
      ctaLabel: "Estimate cost",
    },
    {
      key: "moving-checklist",
      label: "Generate a Moving Checklist",
      href: checklistHref,
      description: "Create a checklist tailored to your move from " + model.name + " to the Netherlands.",
      ctaLabel: "Generate checklist",
    },
    {
      key: "first-90-days",
      label: "Plan Your First 90 Days",
      href: first90Href,
      description: "Map your first weeks and months after arrival.",
      ctaLabel: "Open planner",
    },
    {
      key: "document-readiness",
      label: "Document Readiness Checker",
      href: documentReadinessHref,
      description: "See which document categories matter for your route.",
      ctaLabel: "Check documents",
    },
    {
      key: "arrival-planner",
      label: "Arrival Planner",
      href: arrivalPlannerHref,
      description: "Plan your first days after landing.",
      ctaLabel: "Open planner",
    },
  ];

  const quickAnswers = model.overviewCards.map((card) => ({
    label: card.label,
    value: card.note ? `${card.value} — ${card.note}` : card.value,
  }));

  const sidebarStartLinks = [
    { label: "Visa Cost Calculator", href: visaCostCalculatorHref },
    { label: "Estimate Relocation Cost", href: costEstimatorHref },
    { label: "Generate a Moving Checklist", href: checklistHref },
    { label: "Plan Your First 90 Days", href: first90Href },
    { label: "Document Readiness Checker", href: documentReadinessHref },
    { label: "Arrival Planner", href: arrivalPlannerHref },
    { label: "See all country-specific relocation guides", href: COUNTRY_INDEX_PATH },
    { label: "Moving to the Netherlands", href: PILLAR_PATH },
    { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
    { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
    { label: "First 90 Days in the Netherlands", href: FIRST_90_DAYS_PATH },
  ];

  return {
    slug: `moving-from-${model.slug}`,
    path: model.seo.canonicalPath,
    title: model.hero.title,
    metaTitle: model.seo.title,
    subtitle: model.hero.subtitle,
    description: model.seo.description,
    breadcrumbLabel: `From ${model.name}`,
    hero: {
      eyebrow: "Country guide",
      badges: ["Moving to the Netherlands"],
      image: heroImageSrc
        ? {
            src: heroImageSrc,
            alt: model.heroImageAlt ?? `Moving from ${model.name} to the Netherlands`,
          }
        : undefined,
    },
    tocItems,
    heroCta: {
      title: "Plan your move from " + model.name,
      supportingText:
        "Use the moving checklist, first 90 days planner, cost estimator, and document tools to organize your documents, timing, housing, and early setup steps for your move to the Netherlands.",
      primaryCtaLabel: "Estimate your relocation cost",
      primaryCtaHref: costEstimatorHref,
      secondaryCtaLabel: "Generate your moving checklist",
      secondaryCtaHref: checklistHref,
      tertiaryCtaLabel: "Plan your first 90 days",
      tertiaryCtaHref: first90Href,
      supportingLinks: [
        { label: "Plan your first 90 days", href: first90Href },
        { label: "See all country-specific relocation guides", href: COUNTRY_INDEX_PATH },
        { label: "Moving to the Netherlands", href: PILLAR_PATH },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
        { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
        { label: "First 90 Days in the Netherlands", href: FIRST_90_DAYS_PATH },
      ],
    },
    quickAnswers,
    sections,
    toolCtas,
    toolsCtaBand: {
      title: "Turn this guide into a step-by-step plan",
      body: "Use these tools to turn the country guide into a practical step-by-step plan.",
      primaryLabel: "Estimate your relocation cost",
      primaryHref: costEstimatorHref,
      secondaryLabel: "Generate a Moving Checklist",
      secondaryHref: checklistHref,
      tertiaryLabel: "Plan Your First 90 Days",
      tertiaryHref: first90Href,
    },
    internalLinks: {
      hub: { label: "Back to Moving Hub", href: HUB_PATH },
      pillar: { label: "Read the complete Moving Guide", href: PILLAR_PATH },
      related: model.relatedLinks.map((l) => ({ label: l.label, href: l.href })),
    },
    sidebarStartLinks,
    faq: model.faq,
    resourcesAffiliatePlacementId: model.affiliate.placementId,
    servicesSectionTitle: `Services often used by people moving from ${model.name}`,
    scenariosSectionTitle: `Typical relocation scenarios from ${model.name}`,
    scenariosSectionIntro: model.scenariosSectionIntro,
    exampleScenarios: model.scenarios.map((s) => ({
      title: s.title,
      summary: s.summary,
      href: checklistHref,
      ctaLabel: "Use this scenario",
    })),
    disclosure: "Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.",
  };
}

export function countryModelToGuideData(
  model: CountryPageModel,
  options: { heroImageSrc?: string; baseUrl?: string }
): GuideData {
  const base = buildDefaultCountryGuideData(model, options);
  if (model.slug === "canada") return augmentCanadaGuideData(model, base);
  if (model.slug === "australia") return augmentAustraliaGuideData(model, base);
  if (model.slug === "new-zealand") return augmentNewZealandGuideData(model, base);
  if (model.slug === "germany") return augmentGermanyGuideData(model, base);
  if (model.slug === "france") return augmentFranceGuideData(model, base);
  if (model.slug === "spain") return augmentSpainGuideData(model, base);
  if (model.slug === "italy") return augmentItalyGuideData(model, base);
  if (model.slug === "uae") return augmentUaeGuideData(model, base);
  if (model.slug === "brazil") return augmentBrazilGuideData(model, base);
  if (model.slug === "mexico") return augmentMexicoGuideData(model, base);
  if (model.slug === "singapore") return augmentSingaporeGuideData(model, base);
  if (model.slug === "japan") return augmentJapanGuideData(model, base);
  if (model.slug === "south-korea") return augmentSouthKoreaGuideData(model, base);
  if (model.slug === "turkey") return augmentTurkeyGuideData(model, base);
  if (model.slug === "argentina") return augmentArgentinaGuideData(model, base);
  if (model.slug === "chile") return augmentChileGuideData(model, base);
  if (model.slug === "switzerland") return augmentSwitzerlandGuideData(model, base);
  if (model.slug === "sweden") return augmentSwedenGuideData(model, base);
  if (model.slug === "denmark") return augmentDenmarkGuideData(model, base);
  if (model.slug === "norway") return augmentNorwayGuideData(model, base);
  if (model.slug === "ireland") return augmentIrelandGuideData(model, base);
  return base;
}
