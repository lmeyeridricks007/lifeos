import type { AffiliateSectionProps } from "@/src/components/monetization/AffiliateSection";
import { guideHasMonetizationAfterContent } from "@/src/lib/guides/monetizationGuideSlugs";
import {
  clampPostFaqRecommendationSections,
  clampProvidersForPageType,
  getMonetizationPolicy,
} from "@/src/lib/monetization/pageTypePolicy";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  getRecommendationsForContext,
  monetizationProviderToCardProps,
} from "@/src/lib/monetization";

/** Secondary topic after the primary `GuideMonetizationAfterContent` block — avoids duplicating the same pool (e.g. no second relocation strip on cost/shipping guides). */
const SECONDARY_BY_SLUG: Record<
  string,
  Pick<AffiliateSectionProps, "eyebrow" | "title" | "description" | "editorialRationale"> & { topic: string }
> = {
  "open-bank-account-netherlands": {
    topic: "relocation",
    eyebrow: "Often next",
    title: "Relocation support alongside banking setup",
    description:
      "Many people line up banking around arrival dates, housing, and shipment windows. Destination-services firms are optional help with logistics and paperwork—not a substitute for IND or employer guidance.",
    editorialRationale:
      "We show this after the banking shortlist because readers often compare self-serve timelines with light relocation support.",
  },
  "health-insurance-netherlands": {
    topic: "relocation",
    eyebrow: "Planning context",
    title: "Relocation help while you sort cover",
    description:
      "Basic insurance deadlines can overlap with registration and housing. If you want orientation on sequencing, these firms are commonly briefed alongside insurer choice—not medical or legal advice.",
    editorialRationale:
      "We surface this after insurers because arrival admin and insurance timing often land in the same weeks.",
  },
  "moving-to-netherlands-cost": {
    topic: "banks",
    eyebrow: "Cash flow",
    title: "Banking options expats compare early",
    description:
      "Fees, proof-of-address rules, and iDEAL readiness affect how costs hit your account during the move. Use this as a cross-check after you sketch a budget—not before you read fee tables on the comparison page.",
    editorialRationale:
      "We add banking here because cost guides often trigger questions about accounts and monthly charges next.",
  },
  "shipping-household-goods-netherlands": {
    topic: "banks",
    eyebrow: "After logistics",
    title: "Banking before and after delivery",
    description:
      "Shipment timelines intersect with deposits, insurance, and local payments. Comparing banks in parallel can reduce friction when invoices and rent land in the same window.",
    editorialRationale:
      "We show banking after relocation logistics because payment rails and address verification matter once goods are en route.",
  },
};

export type ResolveGuideSecondaryAffiliateInput = {
  slug: string;
  /** Normalized path without domain, e.g. `netherlands/open-bank-account-netherlands` or `/netherlands/...` */
  pageSlugPath?: string;
};

function pageSlugForResolver(slug: string, pageSlugPath?: string): string {
  if (pageSlugPath?.trim()) {
    return pageSlugPath.trim().replace(/^\/+|\/+$/g, "");
  }
  return `netherlands/${slug}`;
}

/**
 * Builds props for a second, lighter `AffiliateSection` after `GuideMonetizationAfterContent`,
 * using `getRecommendationsForContext` and guide monetization policy caps.
 */
export function resolveGuideSecondaryAffiliateSectionProps(
  input: ResolveGuideSecondaryAffiliateInput
): AffiliateSectionProps | null {
  const { slug, pageSlugPath } = input;
  if (!guideHasMonetizationAfterContent(slug)) return null;

  const policy = getMonetizationPolicy("guide");
  if (!policy.surfaces.affiliateSection) return null;

  const allowedSections = clampPostFaqRecommendationSections("guide", 2);
  if (allowedSections < 2) return null;

  const meta = SECONDARY_BY_SLUG[slug];
  if (!meta) return null;

  const raw = getRecommendationsForContext({
    pageSlug: pageSlugForResolver(slug, pageSlugPath),
    topic: meta.topic,
  });
  const capped = clampProvidersForPageType("guide", raw);
  const items = capped.map(monetizationProviderToCardProps);
  if (items.length === 0) return null;

  const { topic, ...copy } = meta;
  void topic;

  return {
    ...copy,
    items,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    showHowWeChoose: false,
  };
}
