import { RecommendationBlock } from "./RecommendationBlock";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  getRecommendationsForContext,
  monetizationProviderToCardProps,
  PILLAR_MOVING_RELOCATION_RATIONALE,
} from "@/src/lib/monetization";
import {
  clampProvidersForPageType,
  getMonetizationPolicy,
  type MonetizationPageType,
} from "@/src/lib/monetization/pageTypePolicy";

type PillarMovingHubMonetizationProps = {
  /** Defaults to `pillar` policy. */
  monetizationPageType?: MonetizationPageType;
};

/**
 * Post-FAQ selective recommendations for the Netherlands moving hub pillar (`/netherlands/moving-to-the-netherlands/`).
 */
export function PillarMovingHubMonetization({ monetizationPageType = "pillar" }: PillarMovingHubMonetizationProps) {
  const policy = getMonetizationPolicy(monetizationPageType);
  if (!policy.surfaces.recommendationBlock) return null;

  const raw = getRecommendationsForContext({
    pageSlug: "netherlands/moving-to-the-netherlands",
    topic: "relocation",
  });
  const providers = clampProvidersForPageType(monetizationPageType, raw);
  const items = providers.map(monetizationProviderToCardProps);
  if (items.length === 0) return null;

  return (
    <RecommendationBlock
      eyebrow="Planning support"
      title="Relocation help many expats brief early"
      subtitle="If you want a second pair of eyes on timing, documents, or destination services, these are commonly used alongside checklists—not a substitute for employer or IND guidance."
      items={items}
      disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
      editorialRationale={PILLAR_MOVING_RELOCATION_RATIONALE}
      variant="compact"
      contained
      pillarVisualVariant="movingGuide"
    />
  );
}
