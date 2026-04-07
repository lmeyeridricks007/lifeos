/**
 * Moving JSON guides that render post-FAQ monetization (mini-lists + SoftCTA, plus optional
 * secondary `AffiliateSection` via `GuideHighIntentPostFaqMonetization`).
 * Keep in sync with `GuideMonetizationAfterContent` / `resolveGuideSecondaryAffiliateSectionProps`.
 *
 * High-intent guides should omit `resourcesAffiliatePlacementId` (legacy useful-services strip);
 * `guideHasMonetizationAfterContent` already suppresses that strip when present.
 */
export const GUIDE_MONETIZATION_AFTER_CONTENT_SLUGS = new Set([
  "open-bank-account-netherlands",
  "health-insurance-netherlands",
  "moving-to-netherlands-cost",
  "shipping-household-goods-netherlands",
]);

export function guideHasMonetizationAfterContent(slug: string): boolean {
  return GUIDE_MONETIZATION_AFTER_CONTENT_SLUGS.has(slug);
}
