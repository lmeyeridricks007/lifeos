/**
 * Subtle trust links for service category and future provider profile pages.
 * Delegates to TrustLinksBlock for a single source of truth (Editorial policy, How we rank, Methodology, Affiliate disclosure).
 */
import { TrustLinksBlock } from "@/components/trust/TrustLinksBlock";

export function ServiceCategoryTrustLinks() {
  return <TrustLinksBlock />;
}
