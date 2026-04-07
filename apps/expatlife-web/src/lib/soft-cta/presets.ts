import type { SoftCTAProps, SoftCTAVariant } from "@/src/components/monetization/SoftCTA";
import { SOFT_CTA_PATHS } from "./paths";

/**
 * Named soft-CTA bundles for contextual placement. Each maps to at most one primary and one secondary action.
 * Variants: `inline` (callout), `card` (elevated surface), `band` (full-width horizontal strip).
 */
export type SoftCtaPresetId =
  | "compareVisaRoutes"
  | "movingChecklistAndFirst90"
  | "movingChecklistAndRelocationCost"
  | "first90AndDocumentReadiness"
  | "documentReadinessAndMovingChecklist"
  | "planningAfterProviderComparison"
  | "servicesBanksHubSoftCta"
  | "servicesHealthHubSoftCta"
  | "afterVisaToolComparePlanning"
  | "citySetupPlanning";

export const SOFT_CTA_PRESET_IDS: SoftCtaPresetId[] = [
  "compareVisaRoutes",
  "movingChecklistAndFirst90",
  "movingChecklistAndRelocationCost",
  "first90AndDocumentReadiness",
  "documentReadinessAndMovingChecklist",
  "planningAfterProviderComparison",
  "servicesBanksHubSoftCta",
  "servicesHealthHubSoftCta",
  "afterVisaToolComparePlanning",
  "citySetupPlanning",
];

type PresetBase = Omit<SoftCTAProps, "variant"> & { defaultVariant: SoftCTAVariant };

const PRESETS: Record<SoftCtaPresetId, PresetBase> = {
  compareVisaRoutes: {
    defaultVariant: "inline",
    eyebrow: "Next step",
    title: "See routes side by side",
    description:
      "If you are weighing more than one permit type, the comparison view keeps requirements, timelines, and typical trade-offs in one place—then you can drill into a single route.",
    primaryCta: { label: "Compare visa routes", href: SOFT_CTA_PATHS.compareVisas },
    secondaryCta: { label: "Check documents", href: SOFT_CTA_PATHS.documentReadiness },
  },
  movingChecklistAndFirst90: {
    defaultVariant: "inline",
    eyebrow: "Keep momentum",
    title: "Turn this guide into a dated plan",
    description:
      "A short checklist and a first-90-days view help you sequence housing, registration, insurance, and banking without losing track.",
    primaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
    secondaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
  },
  movingChecklistAndRelocationCost: {
    defaultVariant: "inline",
    eyebrow: "Next step",
    title: "Pair your timeline with a cost sketch",
    description:
      "Early-week tasks are easier when you already have ranges for deposit, insurance, and one-off fees—then you can refine as quotes arrive.",
    primaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
    secondaryCta: { label: "Estimate relocation costs", href: SOFT_CTA_PATHS.relocationCostEstimator },
  },
  first90AndDocumentReadiness: {
    defaultVariant: "inline",
    eyebrow: "Next step",
    title: "Line up documents before week one",
    description:
      "Use the first-90-days planner for sequencing, and the document readiness view so apostilles, translations, and copies are not a last-minute scramble.",
    primaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
    secondaryCta: { label: "Check document readiness", href: SOFT_CTA_PATHS.documentReadiness },
  },
  documentReadinessAndMovingChecklist: {
    defaultVariant: "inline",
    eyebrow: "Next step",
    title: "Close gaps before you book dates",
    description:
      "Validate paperwork early, then drop confirmed items into a moving checklist so nothing depends on a single inbox thread.",
    primaryCta: { label: "Check document readiness", href: SOFT_CTA_PATHS.documentReadiness },
    secondaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
  },
  planningAfterProviderComparison: {
    defaultVariant: "inline",
    eyebrow: "After you shortlist",
    title: "Sequence the rest of your move",
    description:
      "Once providers are narrowed, a checklist and a first-90-days plan keep registration, insurance, and housing tasks in order.",
    primaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
    secondaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
  },
  servicesBanksHubSoftCta: {
    defaultVariant: "band",
    eyebrow: "Go deeper",
    title: "Structured comparison for expat banking",
    description:
      "This hub lists common providers; the comparison page adds criteria, trade-offs, and methodology in one place—useful before you apply.",
    primaryCta: { label: "Open banking comparison", href: SOFT_CTA_PATHS.bestBanks },
    secondaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
  },
  servicesHealthHubSoftCta: {
    defaultVariant: "band",
    eyebrow: "Go deeper",
    title: "Side-by-side view for basic cover",
    description:
      "When you want English materials, onboarding friction, and typical premium bands in one table, the comparison page complements this directory.",
    primaryCta: { label: "Open insurers comparison", href: SOFT_CTA_PATHS.bestHealthInsurance },
    secondaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
  },
  afterVisaToolComparePlanning: {
    defaultVariant: "card",
    eyebrow: "When a route looks right",
    title: "Move from comparison to execution",
    description:
      "Narrow the route with the checker or a single guide, then use a checklist and a first-90-days plan so appointments and documents stay on track.",
    primaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
    secondaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
  },
  citySetupPlanning: {
    defaultVariant: "inline",
    eyebrow: "Practical next step",
    title: "City setup checklist",
    description:
      "Use a moving checklist and a first-90-days planner alongside this city guide—timelines still depend on gemeente load and your housing path.",
    primaryCta: { label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist },
    secondaryCta: { label: "Plan first 90 days", href: SOFT_CTA_PATHS.first90Days },
  },
};

export function getSoftCtaPresetProps(
  id: SoftCtaPresetId,
  options?: { cityName?: string }
): SoftCTAProps {
  const base = PRESETS[id];
  const { defaultVariant, ...rest } = base;
  if (id === "citySetupPlanning" && options?.cityName?.trim()) {
    const name = options.cityName.trim();
    return {
      ...rest,
      variant: defaultVariant,
      title: `Sequence your setup in ${name}`,
      description: `Use a moving checklist and a first-90-days planner alongside this ${name} guide—local queues and housing still drive your dates.`,
    };
  }
  return { ...rest, variant: defaultVariant };
}
