import type { ProviderCardLogo } from "@/src/components/monetization/provider-card-types";

/** One row in the structured comparison table + detail card strip. */
export type BestProviderComparisonRow = {
  id: string;
  name: string;
  logo?: ProviderCardLogo;
  bestFor: string;
  englishSupport: string;
  onboardingEase: string;
  priceHint: string;
  notes: string;
  ctaLabel: string;
  ctaHref: string;
  isAffiliate?: boolean;
  /** Richer copy for the expandable card below the table */
  detailDescription: string;
  tags?: string[];
};

export type BestProvidersPageContent = {
  slug: string;
  path: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image?: { src: string; alt: string; priority?: boolean };
  };
  methodology: {
    title: string;
    intro: string;
    howWeEvaluate: string[];
    goodFitTitle: string;
    goodFit: string[];
  };
  shortlist: {
    title: string;
    subtitle?: string;
  };
  comparison: {
    title: string;
    subtitle?: string;
  };
  detailedCardsTitle: string;
  faq: { q: string; a: string }[];
  disclosure: string;
  affiliateNote?: string;
  relatedLinks?: { label: string; href: string }[];
  rows: BestProviderComparisonRow[];
};
