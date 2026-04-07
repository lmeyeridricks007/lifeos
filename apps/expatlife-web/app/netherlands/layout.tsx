import type { ReactNode } from "react";
import { ExploreNetherlandsCrossLinks } from "@/components/seo/ExploreNetherlandsCrossLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

/**
 * Netherlands segment layout. Monetization metadata is merged in `buildNetherlandsGuideAffiliateSlots`
 * (registry + optional `monetization` prop + path inference). App Router layouts cannot read sibling
 * `page.tsx` modules, so `AffiliateSection` slots are injected via `GuidePageTemplate` props.
 * Do not add arbitrary exports from `page.tsx` (Next route typing); use a colocated `monetization.ts` if needed.
 */
export const revalidate = CONTENT_REVALIDATE;

export default function NetherlandsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ExploreNetherlandsCrossLinks />
    </>
  );
}
