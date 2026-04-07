import { GuideMonetizationAfterContent } from "./GuideMonetizationAfterContent";
import { GuideSecondaryAffiliateSection } from "./GuideSecondaryAffiliateSection";

export type GuideHighIntentPostFaqMonetizationProps = {
  slug: string;
  /** Guide `data.path` (with or without leading slash) for resolver context. */
  pageSlugPath?: string;
};

/**
 * High-intent guide post-FAQ stack: primary `GuideMonetizationAfterContent` plus optional
 * secondary `AffiliateSection` from `getRecommendationsForContext` (same policy gates).
 */
export function GuideHighIntentPostFaqMonetization({ slug, pageSlugPath }: GuideHighIntentPostFaqMonetizationProps) {
  return (
    <div className="flex w-full min-w-0 flex-col items-stretch">
      <GuideMonetizationAfterContent slug={slug} />
      <GuideSecondaryAffiliateSection
        slug={slug}
        pageSlugPath={pageSlugPath}
        className="w-full min-w-0 pt-2 pb-0 sm:pt-3 md:pt-4"
      />
    </div>
  );
}
