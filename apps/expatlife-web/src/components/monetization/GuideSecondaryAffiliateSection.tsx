import { AffiliateSection } from "./AffiliateSection";
import { resolveGuideSecondaryAffiliateSectionProps } from "@/src/lib/monetization/resolveGuideSecondaryAffiliateSection";

export type GuideSecondaryAffiliateSectionProps = {
  slug: string;
  pageSlugPath?: string;
  className?: string;
};

/**
 * Lighter second post-FAQ block for high-intent guides: `AffiliateSection` fed by
 * `resolveGuideSecondaryAffiliateSectionProps` (policy + `getRecommendationsForContext`).
 */
export function GuideSecondaryAffiliateSection({ slug, pageSlugPath, className }: GuideSecondaryAffiliateSectionProps) {
  const props = resolveGuideSecondaryAffiliateSectionProps({ slug, pageSlugPath });
  if (!props) return null;
  return <AffiliateSection {...props} cardVariant="expatCopilot" contained className={className} />;
}
