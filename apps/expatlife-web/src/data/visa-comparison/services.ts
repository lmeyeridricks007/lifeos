/**
 * Shape for “Recommended services” on the visa comparison page.
 * Cards are built at request time from `COMPANIES_REGISTRY` — see `getVisaRelocationMarketingRecommendedCards`.
 */

export type ComparisonService = {
  name: string;
  useFor: string;
  url: string;
  logo?: { src: string; alt: string };
};
