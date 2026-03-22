import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export type CountryContact = {
  label: string;
  name: string;
  website: string;
  contactSummary: string;
};

export type CountryCostRange = {
  key: string;
  label: string;
  value: string;
  note: string;
};

export type CountryRecord = {
  slug: string;
  name: string;
  shortName?: string;
  iso2: string;
  regionGroup: "eu" | "non-eu" | string;
  distanceCategory: "near" | "far" | string;
  languages?: string[];
  travel?: {
    typicalFlightTime?: string;
    notes?: string[];
  };
  /** Optional shipping/logistics notes; if absent, template defaults by distanceCategory are used. */
  shipping?: {
    intro?: string;
    notes?: string[];
  };
  relocationProfile?: {
    commonReasons?: string[];
    popularDutchCities?: string[];
    commonSectors?: string[];
  };
  visaAwareness?: {
    commonRoutes?: string[];
    notes?: string[];
  };
  documents?: {
    commonStarterDocuments?: string[];
    countrySpecificNotes?: string[];
    sources?: CountryContact[];
  };
  costs?: {
    currency?: string;
    ranges?: CountryCostRange[];
  };
  contacts?: {
    official?: CountryContact[];
  };
  seo?: {
    title?: string;
    description?: string;
  };
  /** Optional custom alt text for the country hero image. */
  heroImageAlt?: string;
  faqOverrides?: Array<{ q: string; a: string }>;
  scenarioOverrides?: Array<{ title: string; summary: string }>;
  affiliateContext?: {
    preferredCategories?: string[];
    customNotes?: string[];
  };
};

export type CountryIndexItem = {
  slug: string;
  file: string;
  enabled?: boolean;
  featured?: boolean;
};

type CountryTemplateDefaults = {
  siteName: string;
  destinationCountryName: string;
  destinationCountrySlug: string;
  visaHubPath: string;
  revalidateSeconds: number;
  hero: {
    subtitleTemplates: Record<string, string>;
    checklistCtaLabel: string;
    first90DaysCtaLabel: string;
    costEstimatorCtaLabel?: string;
  };
  shipping?: {
    far?: { intro?: string; notes?: string[] };
    near?: { intro?: string; notes?: string[] };
  };
  costSection?: {
    disclaimer?: string;
    ctaLabel?: string;
  };
  scenariosSection?: { intro?: string };
  toolsSection?: { intro?: string };
  timelineDefaults: {
    beforeMove: string[];
    arrivalWeek: string[];
    first90Days: string[];
    distanceAdjustments: Record<string, string[]>;
  };
  checklistPreview: {
    summary: string;
  };
};

type CountryFaqTemplate = { id: string; q: string; a: string };
type CountryScenarioTemplate = { id: string; title: string; summary: string };

type AffiliateMapping = {
  defaultPlacementIdPrefix: string;
  byDistanceCategory: Record<string, string[]>;
  fallbackCategories: string[];
};

type InternalLinkRules = {
  requiredRelatedGuides: string[];
  popularRoutes: Array<{ slug: string; label: string }>;
};

export type CountryTemplateData = {
  defaults: CountryTemplateDefaults;
  faqTemplates: CountryFaqTemplate[];
  scenarioTemplates: CountryScenarioTemplate[];
  affiliateMapping: AffiliateMapping;
  internalLinkRules: InternalLinkRules;
};

const COUNTRIES_DIR = path.join(process.cwd(), "src", "content", "countries");
const TEMPLATE_DIR = path.join(process.cwd(), "src", "content", "country-page-template");

function loadJsonFile<T>(filePath: string): T {
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export function loadCountryIndex(): CountryIndexItem[] {
  const indexPath = path.join(COUNTRIES_DIR, "index.json");
  if (!existsSync(indexPath)) return [];
  const data = loadJsonFile<CountryIndexItem[]>(indexPath);
  return Array.isArray(data) ? data : [];
}

export function loadCountryBySlug(slug: string): CountryRecord | null {
  const index = loadCountryIndex().find((item) => item.slug === slug && item.enabled !== false);
  if (!index) return null;
  const filePath = path.join(COUNTRIES_DIR, index.file);
  if (!existsSync(filePath)) return null;
  return loadJsonFile<CountryRecord>(filePath);
}

export function loadAllEnabledCountries(): CountryRecord[] {
  return loadCountryIndex()
    .filter((item) => item.enabled !== false)
    .map((item) => {
      const filePath = path.join(COUNTRIES_DIR, item.file);
      if (!existsSync(filePath)) return null;
      return loadJsonFile<CountryRecord>(filePath);
    })
    .filter((record): record is CountryRecord => Boolean(record));
}

export function loadTemplateData(): CountryTemplateData {
  return {
    defaults: loadJsonFile<CountryTemplateDefaults>(path.join(TEMPLATE_DIR, "defaults.json")),
    faqTemplates: loadJsonFile<CountryFaqTemplate[]>(path.join(TEMPLATE_DIR, "faq-templates.json")),
    scenarioTemplates: loadJsonFile<CountryScenarioTemplate[]>(path.join(TEMPLATE_DIR, "scenario-templates.json")),
    affiliateMapping: loadJsonFile<AffiliateMapping>(path.join(TEMPLATE_DIR, "affiliate-mapping.json")),
    internalLinkRules: loadJsonFile<InternalLinkRules>(path.join(TEMPLATE_DIR, "internal-link-rules.json")),
  };
}

