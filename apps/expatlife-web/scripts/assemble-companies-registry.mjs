/**
 * Rebuild src/data/companies-registry.ts from its existing array exports + template (COMPANIES_REGISTRY, metadata).
 * Requires a valid registry file on disk (legacy src/data/services/providers/ slices were removed).
 * Run: node apps/expatlife-web/scripts/assemble-companies-registry.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, "..");
const outFile = path.join(webRoot, "src/data/companies-registry.ts");

function loadPrimarySource() {
  if (!fs.existsSync(outFile)) return null;
  const t = fs.readFileSync(outFile, "utf8");
  if (t.includes("export const banksProviders: ServiceCategoryProviderCard[] = [") && t.includes('slug: "bunq"')) {
    return t;
  }
  return null;
}

function extractExportedArrayLiteral(text, exportName) {
  const needle = `export const ${exportName}`;
  const start = text.indexOf(needle);
  if (start === -1) throw new Error(`Missing ${exportName}`);
  const eq = text.indexOf("=", start);
  if (eq === -1) throw new Error(`Missing = for ${exportName}`);
  const bracket = text.indexOf("[", eq);
  if (bracket === -1) throw new Error(`Missing [ for ${exportName}`);
  let depth = 0;
  let i = bracket;
  for (; i < text.length; i++) {
    const ch = text[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        return text.slice(bracket + 1, i);
      }
    }
  }
  throw new Error(`Unclosed array ${exportName}`);
}

function extractConstArrayLiteral(text, constName) {
  const needle = `const ${constName}`;
  const start = text.indexOf(needle);
  if (start === -1) throw new Error(`Missing const ${constName}`);
  const eq = text.indexOf("=", start);
  if (eq === -1) throw new Error(`Missing = for ${constName}`);
  const bracket = text.indexOf("[", eq);
  if (bracket === -1) throw new Error(`Missing [ for ${constName}`);
  let depth = 0;
  let i = bracket;
  for (; i < text.length; i++) {
    const ch = text[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        return text.slice(bracket + 1, i);
      }
    }
  }
  throw new Error(`Unclosed array ${constName}`);
}

const primary = loadPrimarySource();

let banksBody;
let healthBody;
let immigrationBody;
let visaBody;
let intlHealthBody;
let relocationAgenciesBody;
let relocationServicesAdditionalBody;
let housingBody;
let rentalBody;
let startupBody;
let RELOCATION_AGENCIES_LAST_CHECKED;
let RELOCATION_AGENCIES_SOURCE_MODEL;
let RELOCATION_SERVICES_LAST_CHECKED;
let RELOCATION_SERVICES_SOURCE_MODEL;
let RVO_SOURCE;
let STARTUP_DATA_LAST_CHECKED;
let HOUSING_RENTAL_LAST_CHECKED;

if (primary) {
  banksBody = extractExportedArrayLiteral(primary, "banksProviders");
  healthBody = extractExportedArrayLiteral(primary, "healthInsuranceProviders");
  immigrationBody = extractExportedArrayLiteral(primary, "immigrationLawyersProviders");
  visaBody = extractExportedArrayLiteral(primary, "visaConsultantsProviders");
  intlHealthBody = extractExportedArrayLiteral(primary, "internationalHealthInsuranceProviders");
  relocationAgenciesBody = extractExportedArrayLiteral(primary, "relocationAgenciesProviders");
  relocationServicesAdditionalBody = extractConstArrayLiteral(primary, "relocationServicesAdditionalProviders");
  housingBody = extractExportedArrayLiteral(primary, "housingPlatforms");
  rentalBody = extractExportedArrayLiteral(primary, "rentalAgencies");
  startupBody = extractExportedArrayLiteral(primary, "startupFacilitators");
  RELOCATION_AGENCIES_LAST_CHECKED = primary.match(
    /export const RELOCATION_AGENCIES_LAST_CHECKED = "([^"]+)"/
  )?.[1];
  RELOCATION_AGENCIES_SOURCE_MODEL = primary.match(
    /export const RELOCATION_AGENCIES_SOURCE_MODEL = "([^"]*)"/
  )?.[1];
  RELOCATION_SERVICES_LAST_CHECKED = primary.match(
    /export const RELOCATION_SERVICES_LAST_CHECKED = "([^"]+)"/
  )?.[1];
  RELOCATION_SERVICES_SOURCE_MODEL = primary.match(
    /export const RELOCATION_SERVICES_SOURCE_MODEL = "([^"]*)"/
  )?.[1];
  RVO_SOURCE =
    primary.match(/const RVO_SOURCE = "([^"]+)"/)?.[1] ??
    primary.match(
      /export const startupFacilitatorsMetadata = \{[\s\S]*?sourceHref:\s*"([^"]+)"/
    )?.[1];
  STARTUP_DATA_LAST_CHECKED = primary.match(
    /const STARTUP_DATA_LAST_CHECKED = "([^"]+)"/
  )?.[1];
  HOUSING_RENTAL_LAST_CHECKED = primary.match(
    /const HOUSING_RENTAL_LAST_CHECKED = "([^"]+)"/
  )?.[1];
} else {
  throw new Error(
    "Missing or invalid src/data/companies-registry.ts (expected export banksProviders with slug bunq). Restore from git or edit the registry; legacy src/data/services/providers/ slices were removed."
  );
}

const DEFAULT_RVO_SOURCE =
  "https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups";
if (!RVO_SOURCE) RVO_SOURCE = DEFAULT_RVO_SOURCE;

const header = `/**
 * Canonical registry of companies / partners shown on Netherlands service pages.
 * Single source for URLs, logos, copy, and where each row appears (pages + UI components).
 *
 * Regenerate from legacy slices: \`node apps/expatlife-web/scripts/assemble-companies-registry.mjs\`
 */

import type {
  HousingPlatformRecord,
  RentalAgencyRecord,
  RelocationProviderRecord,
  ServiceCategoryProviderCard,
  StartupFacilitatorRecord,
} from "@/src/lib/service-category/types";

/** High-level grouping used for filtering and analytics. */
export type CompanyRegistryCategory =
  | "banks"
  | "health-insurance"
  | "international-health-insurance"
  | "immigration-lawyers"
  | "visa-consultants"
  | "relocation-agencies"
  | "relocation-services"
  | "housing-platforms"
  | "rental-agencies"
  | "startup-visa-advisors";

export type CompanyRegistryRowBase = {
  /** Stable id: \`\${category}/\${slug}\` (unique per row in this registry). */
  registryId: string;
  category: CompanyRegistryCategory;
  /** Owning Next.js page module (app router). */
  sourcePage: string;
  /** UI surfaces that render this row (for docs / consistency). */
  surfaces: readonly string[];
};

export type ServiceCategoryRegistryRow = CompanyRegistryRowBase &
  ServiceCategoryProviderCard & { rowKind: "service-category-provider" };

export type RelocationRegistryRow = CompanyRegistryRowBase &
  RelocationProviderRecord & { rowKind: "relocation-directory" };

export type HousingPlatformRegistryRow = CompanyRegistryRowBase &
  HousingPlatformRecord & { rowKind: "housing-platform" };

export type RentalAgencyRegistryRow = CompanyRegistryRowBase &
  RentalAgencyRecord & { rowKind: "rental-agency" };

export type StartupFacilitatorRegistryRow = CompanyRegistryRowBase &
  StartupFacilitatorRecord & { rowKind: "startup-facilitator" };

export type CompanyRegistryRow =
  | ServiceCategoryRegistryRow
  | RelocationRegistryRow
  | HousingPlatformRegistryRow
  | RentalAgencyRegistryRow
  | StartupFacilitatorRegistryRow;

const BANKS_BASE = "/netherlands/services/banks";
const LOGOS = "/images/affiliates/logos";
const INSURANCE_BASE = "/netherlands/services/insurance";
const IMMIGRATION_LAWYERS_BASE = "/netherlands/services/immigration-lawyers";
const VISA_CONSULTANTS_BASE = "/netherlands/services/visa-consultants";
const HOUSING_RENTAL_LAST_CHECKED = "${HOUSING_RENTAL_LAST_CHECKED}";
const STARTUP_DATA_LAST_CHECKED = "${STARTUP_DATA_LAST_CHECKED}";
const RVO_SOURCE = ${JSON.stringify(RVO_SOURCE)};

const DEFAULT_SERVICES = ["Startup visa support", "Mentoring & programme", "Network & ecosystem"] as const;

const BANKS_PAGE = "app/netherlands/services/banks/page.tsx";
const BANKS_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const HEALTH_PAGE = "app/netherlands/services/health-insurance/page.tsx";
const HEALTH_SURFACES = [
  "ProviderCardsGrid",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
  "internationalHealthBlock",
] as const;

const IMMIGRATION_PAGE = "app/netherlands/services/immigration-lawyers/page.tsx";
const IMMIGRATION_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const VISA_PAGE = "app/netherlands/services/visa-consultants/page.tsx";
const VISA_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const RELOCATION_AGENCIES_PAGE = "app/netherlands/services/relocation-agencies/page.tsx";
const RELOCATION_AGENCIES_SURFACES = [
  "RelocationProviderDirectory",
  "FeaturedRelocationCards",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
] as const;

const RELOCATION_SERVICES_PAGE = "app/netherlands/services/relocation-services/page.tsx";
const RELOCATION_SERVICES_SURFACES = [
  "RelocationProviderDirectory",
  "FeaturedRelocationCards",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
] as const;

const HOUSING_PAGE = "app/netherlands/services/housing-platforms/page.tsx";
const HOUSING_SURFACES = ["HousingPlatformDirectory", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const RENTAL_PAGE = "app/netherlands/services/rental-agencies/page.tsx";
const RENTAL_SURFACES = ["RelocationProviderDirectory", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const STARTUP_PAGE = "app/netherlands/services/startup-visa-advisors/page.tsx";
const STARTUP_SURFACES = ["ServiceCategoryTemplate", "startup facilitator directory"] as const;

function tagServiceCategory(
  category: CompanyRegistryCategory,
  sourcePage: string,
  surfaces: readonly string[],
  cards: ServiceCategoryProviderCard[]
): ServiceCategoryRegistryRow[] {
  return cards.map((c) => ({
    ...c,
    rowKind: "service-category-provider",
    registryId: \`\${category}/\${c.slug}\`,
    category,
    sourcePage,
    surfaces,
  }));
}

function tagRelocation(
  category: "relocation-agencies" | "relocation-services",
  sourcePage: string,
  surfaces: readonly string[],
  rows: RelocationProviderRecord[]
): RelocationRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "relocation-directory",
    registryId: \`\${category}/\${r.slug}\`,
    category,
    sourcePage,
    surfaces,
  }));
}

function tagHousing(
  rows: HousingPlatformRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): HousingPlatformRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "housing-platform",
    registryId: \`housing-platforms/\${r.slug}\`,
    category: "housing-platforms",
    sourcePage,
    surfaces,
  }));
}

function tagRental(
  rows: RentalAgencyRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): RentalAgencyRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "rental-agency",
    registryId: \`rental-agencies/\${r.slug}\`,
    category: "rental-agencies",
    sourcePage,
    surfaces,
  }));
}

function tagStartup(
  rows: StartupFacilitatorRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): StartupFacilitatorRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "startup-facilitator",
    registryId: \`startup-visa-advisors/\${r.slug}\`,
    category: "startup-visa-advisors",
    sourcePage,
    surfaces,
  }));
}

export const RELOCATION_AGENCIES_LAST_CHECKED = ${JSON.stringify(RELOCATION_AGENCIES_LAST_CHECKED)};
export const RELOCATION_AGENCIES_SOURCE_MODEL = ${JSON.stringify(RELOCATION_AGENCIES_SOURCE_MODEL)};

export const RELOCATION_SERVICES_LAST_CHECKED = ${JSON.stringify(RELOCATION_SERVICES_LAST_CHECKED)};
export const RELOCATION_SERVICES_SOURCE_MODEL = ${JSON.stringify(RELOCATION_SERVICES_SOURCE_MODEL)};

export const banksProviders: ServiceCategoryProviderCard[] = [
${banksBody}
];

export const healthInsuranceProviders: ServiceCategoryProviderCard[] = [
${healthBody}
];

export const immigrationLawyersProviders: ServiceCategoryProviderCard[] = [
${immigrationBody}
];

export const visaConsultantsProviders: ServiceCategoryProviderCard[] = [
${visaBody}
];

export const internationalHealthInsuranceProviders: ServiceCategoryProviderCard[] = [
${intlHealthBody}
];

export const relocationAgenciesProviders: RelocationProviderRecord[] = [
${relocationAgenciesBody}
];

const relocationServicesAdditionalProviders: RelocationProviderRecord[] = [
${relocationServicesAdditionalBody}
];

export const relocationServicesProviders: RelocationProviderRecord[] = [
  ...relocationAgenciesProviders,
  ...relocationServicesAdditionalProviders,
];

export const housingPlatforms: HousingPlatformRecord[] = [
${housingBody}
];

export const rentalAgencies: RentalAgencyRecord[] = [
${rentalBody}
];

export const startupFacilitators: StartupFacilitatorRecord[] = [
${startupBody}
];

export const relocationAgenciesMetadata = {
  slug: "relocation-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_AGENCIES_SOURCE_MODEL,
  totalRecords: relocationAgenciesProviders.length,
  lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
};

export const relocationServicesMetadata = {
  slug: "relocation-services",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_SERVICES_SOURCE_MODEL,
  totalRecords: relocationServicesProviders.length,
  lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
};

export const housingPlatformsMetadata = {
  slug: "housing-platforms",
  parent: "services",
  country: "netherlands",
  sourceModel: "Trusted platform sources and expat-support references",
  totalRecords: housingPlatforms.length,
  lastChecked: HOUSING_RENTAL_LAST_CHECKED,
};

export const rentalAgenciesMetadata = {
  slug: "rental-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: "Trusted public-support ecosystems and validated provider references",
  totalRecords: rentalAgencies.length,
  lastChecked: HOUSING_RENTAL_LAST_CHECKED,
};

export const startupFacilitatorsMetadata = {
  slug: "startup-visa-advisors",
  parent: "services",
  country: "netherlands",
  lastChecked: STARTUP_DATA_LAST_CHECKED,
  totalRecords: startupFacilitators.length,
  sourceHref: RVO_SOURCE,
  sourceLabel: "RVO facilitator list",
};

/** Every commercial / partner row with placement metadata (search / docs / tooling). */
export const COMPANIES_REGISTRY: CompanyRegistryRow[] = [
  ...tagServiceCategory("banks", BANKS_PAGE, BANKS_SURFACES, banksProviders),
  ...tagServiceCategory("health-insurance", HEALTH_PAGE, HEALTH_SURFACES, healthInsuranceProviders),
  ...tagServiceCategory(
    "international-health-insurance",
    HEALTH_PAGE,
    HEALTH_SURFACES,
    internationalHealthInsuranceProviders
  ),
  ...tagServiceCategory("immigration-lawyers", IMMIGRATION_PAGE, IMMIGRATION_SURFACES, immigrationLawyersProviders),
  ...tagServiceCategory("visa-consultants", VISA_PAGE, VISA_SURFACES, visaConsultantsProviders),
  ...tagRelocation(
    "relocation-agencies",
    RELOCATION_AGENCIES_PAGE,
    RELOCATION_AGENCIES_SURFACES,
    relocationAgenciesProviders
  ),
  ...tagRelocation(
    "relocation-services",
    RELOCATION_SERVICES_PAGE,
    RELOCATION_SERVICES_SURFACES,
    relocationServicesProviders
  ),
  ...tagHousing(housingPlatforms, HOUSING_PAGE, HOUSING_SURFACES),
  ...tagRental(rentalAgencies, RENTAL_PAGE, RENTAL_SURFACES),
  ...tagStartup(startupFacilitators, STARTUP_PAGE, STARTUP_SURFACES),
];

export function getCompanyRegistryRowsForCategory(category: CompanyRegistryCategory): CompanyRegistryRow[] {
  return COMPANIES_REGISTRY.filter((r) => r.category === category);
}

/** Primary external URL for a registry row (for docs / outbound link audits). */
export function primaryWebsiteForRegistryRow(row: CompanyRegistryRow): string | undefined {
  if (row.rowKind === "service-category-provider") return row.externalUrl;
  if (row.rowKind === "relocation-directory") return row.providerUrl;
  if (row.rowKind === "housing-platform") return row.providerUrl;
  if (row.rowKind === "rental-agency") return row.websiteUrl ?? row.providerUrl;
  if (row.rowKind === "startup-facilitator") return row.websiteUrl;
  return undefined;
}
`;

fs.writeFileSync(outFile, header);
console.log("Wrote", outFile);
