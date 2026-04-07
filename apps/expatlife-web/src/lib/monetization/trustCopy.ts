/**
 * Canonical trust / disclosure strings for monetization surfaces.
 * Keep in sync with `/how-we-rank-services/`, `/affiliate-disclosure/`, and `/editorial-policy/`.
 */

export const MONETIZATION_TRUST_URLS = {
  howWeRank: "/how-we-rank-services/",
  affiliateDisclosure: "/affiliate-disclosure/",
  editorialPolicy: "/editorial-policy/",
  methodology: "/methodology/",
} as const;

/** Short lines for stacked disclosure UI. */
export const MONETIZATION_TRUST_DISCLOSURE_LINES = {
  partnerLinks: "Some links may be partner links. When we use them, we aim to label them clearly.",
  topicRelevance: "We only surface options we believe are relevant to this topic and typical expat journeys.",
  confirmOnProvider:
    "Always confirm pricing, contract terms, and eligibility on the provider’s own site or with a professional.",
} as const;

/** Criteria shown in compact “How we choose” modules (aligns with ranking methodology). */
export const HOW_WE_CHOOSE_CRITERIA = [
  {
    label: "Expat fit",
    hint: "Useful for people moving or living in the Netherlands, not generic domestic-only products.",
  },
  {
    label: "Ease of onboarding",
    hint: "How straightforward sign-up and getting started tend to be for newcomers.",
  },
  {
    label: "English support",
    hint: "English-language websites, apps, or support paths where that matters for this category.",
  },
  {
    label: "Practical suitability",
    hint: "How well the option matches common relocation scenarios we describe on the page.",
  },
] as const;

/**
 * Default footer line under trust panels — complements `MONETIZATION_TRUST_DISCLOSURE_LINES`, not a duplicate of all three.
 */
export const DEFAULT_MONETIZATION_DISCLOSURE =
  "Editorial selections are not paid placement unless explicitly stated. We may earn a commission on some partner links at no extra cost to you.";

/** Shortlist under high-intent guides: ties the module to the full comparison hub. */
export const GUIDE_MINI_LIST_EDITORIAL_RATIONALE =
  "This shortlist is drawn from the same criteria as our full comparison page for this category, surfaced here because you are on a guide that matches that decision.";

/** City hub relocation block: local context without implying gemeente or employer timelines. */
export const CITY_RELOCATION_BLOCK_RATIONALE =
  "We highlight relocation firms expats often research alongside city guides; your municipality, employer, and housing search still drive what happens when.";

/** Moving pillar hub: selective post-FAQ recommendations. */
export const PILLAR_MOVING_RELOCATION_RATIONALE =
  "These are common briefing options for international moves—not a substitute for quotes, contracts, or IND and tax advice.";
