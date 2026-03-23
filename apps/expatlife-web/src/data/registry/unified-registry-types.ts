/**
 * Extra row kinds for outbound / partner inventory beyond `companies-registry.ts`
 * (service provider cards, relocation directories, etc.).
 */

import type { CompanyRegistryRow } from "@/src/data/companies-registry";
import type { SponsorRecord } from "@/src/lib/service-category/types";

/** Service category key matching `src/data/services/official-sources/*.ts` filenames. */
export type OfficialSourceServiceKey =
  | "banks"
  | "health-insurance"
  | "highly-skilled-migrant-sponsors"
  | "housing-platforms"
  | "immigration-lawyers"
  | "relocation-agencies"
  | "relocation-services"
  | "rental-agencies"
  | "startup-visa-advisors"
  | "visa-consultants";

export type OfficialSourceRegistryRow = {
  rowKind: "official-source";
  registryId: string;
  category: "official-source";
  /** Module under `src/data/services/official-sources/`. */
  sourcePage: string;
  surfaces: readonly ["OfficialSourcesList"];
  serviceKey: OfficialSourceServiceKey;
  label: string;
  url: string;
  officialCategory: string;
};

export type AffiliateProviderRegistryRow = {
  rowKind: "affiliate-provider";
  registryId: string;
  category: "affiliate-provider";
  sourcePage: string;
  surfaces: readonly string[];
  providerId: string;
  name: string;
  tagline: string;
  primaryOutUrl: string;
  isAffiliateLink: boolean;
  categoryIds: readonly string[];
  /** Placement JSON ids (`src/content/affiliates/placements/*.json`) that reference this provider. */
  placementIds: readonly string[];
};

export type IndSponsorRegistryRow = SponsorRecord & {
  rowKind: "ind-sponsor";
  registryId: string;
  category: "ind-sponsor";
  sourcePage: string;
  surfaces: readonly ["SponsorDirectory"];
  /** Public JSON consumed by `SponsorDirectory` client fetch. */
  dataFile: string;
};

export type ExtendedCompanyRegistryRow =
  | OfficialSourceRegistryRow
  | AffiliateProviderRegistryRow
  | IndSponsorRegistryRow;

export type UnifiedCompaniesRegistryRow = CompanyRegistryRow | ExtendedCompanyRegistryRow;
