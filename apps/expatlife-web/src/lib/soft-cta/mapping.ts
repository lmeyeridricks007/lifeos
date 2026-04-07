import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import { GUIDE_MONETIZATION_AFTER_CONTENT_SLUGS } from "@/src/lib/guides/monetizationGuideSlugs";
import type { SoftCtaPresetId } from "./presets";

const MOVING_GUIDE_SLUG_SET = new Set(movingRegistry.guides.map((g) => g.slug));

function isMovingJsonGuideSlug(slug: string): boolean {
  return MOVING_GUIDE_SLUG_SET.has(slug);
}

function movingGuidePresetForSlug(slug: string): SoftCtaPresetId {
  if (slug === "first-90-days-netherlands" || slug === "first-60-days-netherlands" || slug === "first-30-days-netherlands") {
    return "movingChecklistAndRelocationCost";
  }
  if (slug === "moving-checklist-netherlands") {
    return "first90AndDocumentReadiness";
  }
  if (slug === "documents-needed-to-move-netherlands") {
    return "documentReadinessAndMovingChecklist";
  }
  return "movingChecklistAndFirst90";
}

/**
 * Inline soft CTA before FAQ on JSON guides and visa pillar pages (when `preFaqSoftCta` is left unset).
 */
export function resolvePreFaqPresetForGuide(slug: string, path: string): SoftCtaPresetId | null {
  if (GUIDE_MONETIZATION_AFTER_CONTENT_SLUGS.has(slug)) return null;
  if (path.includes("/netherlands/visa/") && !path.includes("compare-visas")) {
    return "compareVisaRoutes";
  }
  if (isMovingJsonGuideSlug(slug)) {
    return movingGuidePresetForSlug(slug);
  }
  return null;
}

/** Best-providers SEO pages: one planning CTA before FAQ (page already is a comparison). */
export function resolveBestProvidersSoftCtaPreset(_slug: string): SoftCtaPresetId {
  return "planningAfterProviderComparison";
}
