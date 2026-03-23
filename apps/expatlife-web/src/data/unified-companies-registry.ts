/**
 * Full outbound / partner inventory: service providers (`companies-registry.ts`) plus
 * official source lists, affiliate providers (`src/content/affiliates`), and IND sponsors (`public/data/hsm-sponsors`).
 *
 * Uses Node fs for affiliates (placement scan) and optional sponsor JSON — import only from **server**
 * code (RSC, route handlers, scripts), not client components.
 */

import {
  COMPANIES_REGISTRY,
  primaryWebsiteForRegistryRow,
  type CompanyRegistryRow,
} from "@/src/data/companies-registry";
import { buildAffiliateProviderRegistryRows } from "@/src/data/registry/affiliate-providers-registry";
import { buildIndSponsorRegistryRows } from "@/src/data/registry/ind-sponsors-registry";
import { buildOfficialSourceRegistryRows } from "@/src/data/registry/official-sources-registry";
import type { ExtendedCompanyRegistryRow, UnifiedCompaniesRegistryRow } from "@/src/data/registry/unified-registry-types";

export type {
  AffiliateProviderRegistryRow,
  ExtendedCompanyRegistryRow,
  IndSponsorRegistryRow,
  OfficialSourceRegistryRow,
  OfficialSourceServiceKey,
  UnifiedCompaniesRegistryRow,
} from "@/src/data/registry/unified-registry-types";

/** Merged list for audits, internal tools, and docs generation. */
export function getUnifiedCompaniesRegistry(): UnifiedCompaniesRegistryRow[] {
  return [
    ...COMPANIES_REGISTRY,
    ...buildOfficialSourceRegistryRows(),
    ...buildAffiliateProviderRegistryRows(),
    ...buildIndSponsorRegistryRows(),
  ];
}

export function getExtendedRegistryRowsOnly(): ExtendedCompanyRegistryRow[] {
  return [
    ...buildOfficialSourceRegistryRows(),
    ...buildAffiliateProviderRegistryRows(),
    ...buildIndSponsorRegistryRows(),
  ];
}

/** Primary external URL for analytics / link audits. */
export function primaryWebsiteForUnifiedRow(row: UnifiedCompaniesRegistryRow): string | undefined {
  if (isCompanyRegistryRow(row)) return primaryWebsiteForRegistryRow(row);
  if (row.rowKind === "official-source") return row.url;
  if (row.rowKind === "affiliate-provider") return row.primaryOutUrl;
  if (row.rowKind === "ind-sponsor") return row.websiteUrl ?? row.sourceHref;
  return undefined;
}

export function isCompanyRegistryRow(row: UnifiedCompaniesRegistryRow): row is CompanyRegistryRow {
  return (
    row.rowKind === "service-category-provider" ||
    row.rowKind === "relocation-directory" ||
    row.rowKind === "housing-platform" ||
    row.rowKind === "rental-agency" ||
    row.rowKind === "startup-facilitator"
  );
}
