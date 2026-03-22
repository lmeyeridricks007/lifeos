/**
 * Affiliate content types. CMS-ready: replace JSON loaders with CMS client later.
 */

export type AffiliateProvider = {
  id: string;
  category: string;
  name: string;
  title: string;
  description: string;
  website: string;
  affiliateUrl: string;
  logo: string;
  contact?: { email?: string };
  features?: string[];
};

export type AffiliateProvidersRegistry = Record<string, AffiliateProvider>;

export type AffiliateCategory = {
  title: string;
};

export type AffiliateCategoriesRegistry = Record<string, AffiliateCategory>;

export type PlacementsPage = Record<string, string[]>;

export type PlacementsRegistry = Record<string, PlacementsPage>;
