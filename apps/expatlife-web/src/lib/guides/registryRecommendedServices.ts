/**
 * Resolve “recommended services” for guide sections from `COMPANIES_REGISTRY` using per-category
 * `priority` (lower = higher). Server-only: imports the full registry.
 */

import {
  getCompanyRegistryRowsForCategory,
  type CompanyRegistryCategory,
  type CompanyRegistryRow,
} from "@/src/data/companies-registry";
import { googleFaviconUrl, normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import type {
  GuideData,
  GuideRecommendedRegistryServices,
  GuideSection,
  GuideSectionServiceResolved,
} from "@/src/lib/guides/types";
import { resolveGuideSectionServices } from "@/src/lib/guides/resolveGuideSectionServices";

const VALID_CATEGORIES = new Set<CompanyRegistryCategory>([
  "banks",
  "health-insurance",
  "international-health-insurance",
  "immigration-lawyers",
  "visa-consultants",
  "mobile-connectivity",
  "relocation-agencies",
  "relocation-services",
  "housing-platforms",
  "rental-agencies",
  "startup-visa-advisors",
]);

export type GuideRegistryRecommendationStrategy = "sequential" | "round-robin";

function rowPriority(row: CompanyRegistryRow): number {
  if ("priority" in row && typeof (row as { priority?: number }).priority === "number") {
    return (row as { priority: number }).priority;
  }
  return 9999;
}

function registryRowToGuideService(row: CompanyRegistryRow): GuideSectionServiceResolved {
  if (row.rowKind === "service-category-provider") {
    return {
      name: row.name,
      description: row.shortDescription,
      url: row.externalUrl ?? row.href,
      indicativeCost: row.typicalCost ?? row.priceNote,
      logo: row.logo
        ? {
            src: normalizeExternalProviderLogoSrc(row.logo.src),
            alt: row.logo.alt,
          }
        : undefined,
    };
  }
  if (row.rowKind === "relocation-directory") {
    const url = row.providerUrl ?? "";
    return {
      name: row.name,
      description: row.shortDescription,
      url,
      indicativeCost: row.typicalCost,
      logo: row.logoUrl
        ? { src: normalizeExternalProviderLogoSrc(row.logoUrl), alt: row.name }
        : undefined,
    };
  }
  if (row.rowKind === "housing-platform") {
    const logoSrc = row.logoUrl;
    return {
      name: row.name,
      description: row.shortDescription,
      url: row.providerUrl,
      indicativeCost: row.feeNote,
      logo: logoSrc
        ? { src: normalizeExternalProviderLogoSrc(logoSrc), alt: row.name }
        : undefined,
    };
  }
  if (row.rowKind === "rental-agency") {
    const url = row.websiteUrl ?? row.providerUrl;
    let logo: { src: string; alt: string } | undefined;
    if (row.websiteUrl) {
      try {
        const hostname = new URL(row.websiteUrl).hostname;
        logo = {
          src: googleFaviconUrl(hostname),
          alt: row.name,
        };
      } catch {
        logo = undefined;
      }
    }
    return {
      name: row.name,
      description: row.shortDescription,
      url,
      indicativeCost: row.feeNote,
      logo,
    };
  }
  if (row.rowKind === "startup-facilitator") {
    const url = row.websiteUrl ?? row.sourceHref;
    return {
      name: row.name,
      description: row.shortDescription ?? "Official RVO-listed startup facilitator.",
      url,
      indicativeCost: row.typicalCost,
    };
  }
  return {
    name: "Provider",
    description: "",
    url: "",
  };
}

function sortedRowsForCategory(category: CompanyRegistryCategory): CompanyRegistryRow[] {
  return getCompanyRegistryRowsForCategory(category)
    .slice()
    .sort((a, b) => rowPriority(a) - rowPriority(b));
}

/**
 * Take up to `limit` providers (min 3) from one or more registry categories.
 */
export function getRecommendedGuideServicesFromRegistry(
  categories: readonly string[],
  limit: number,
  strategy: GuideRegistryRecommendationStrategy = categories.length > 1 ? "round-robin" : "sequential"
): GuideSectionServiceResolved[] {
  const rawLimit = limit ?? 3;
  const cap = Math.max(3, rawLimit);
  const cleaned = categories.filter((c): c is CompanyRegistryCategory =>
    VALID_CATEGORIES.has(c as CompanyRegistryCategory)
  );
  if (!cleaned.length) return [];

  if (cleaned.length === 1 || strategy === "sequential") {
    const out: GuideSectionServiceResolved[] = [];
    for (const cat of cleaned) {
      if (out.length >= cap) break;
      const rows = sortedRowsForCategory(cat);
      for (const row of rows) {
        if (out.length >= cap) break;
        out.push(registryRowToGuideService(row));
      }
    }
    return out;
  }

  const lists = cleaned.map((cat) => sortedRowsForCategory(cat).map(registryRowToGuideService));
  const out: GuideSectionServiceResolved[] = [];
  let round = 0;
  while (out.length < cap) {
    let added = false;
    for (const list of lists) {
      if (out.length >= cap) break;
      if (round < list.length) {
        out.push(list[round]);
        added = true;
      }
    }
    if (!added) break;
    round++;
  }
  return out;
}

function effectiveStrategy(
  categories: readonly string[],
  explicit?: GuideRegistryRecommendationStrategy
): GuideRegistryRecommendationStrategy {
  if (explicit) return explicit;
  return categories.length > 1 ? "round-robin" : "sequential";
}

/**
 * Per-guide section: pull top providers from the registry. Optional existing `services` are appended
 * after the registry slice (e.g. comparison sites not modelled as category cards).
 */
export type GuideSectionRegistryConfig = GuideRecommendedRegistryServices;

/** Declarative defaults keyed by `guideSlug:sectionId` when JSON omits `recommendedRegistryServices`. */
export const GUIDE_SECTION_REGISTRY_DEFAULTS: Record<string, GuideSectionRegistryConfig> = {
  "after-arriving-netherlands:health-insurance": {
    categories: ["health-insurance"],
    limit: 3,
    strategy: "sequential",
  },
  "after-arriving-netherlands:bank-account": { categories: ["banks"], limit: 4, strategy: "sequential" },
  "after-arriving-netherlands:mobile-setup": {
    categories: ["mobile-connectivity"],
    limit: 5,
    strategy: "sequential",
  },
  "after-arriving-netherlands:address-housing": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "bringing-pets-to-netherlands:pet-friendly-housing": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "can-i-open-bank-account-before-bsn:why-bsn-matters": {
    categories: ["banks"],
    limit: 3,
    strategy: "sequential",
  },
  "can-i-open-bank-account-before-bsn:before-bsn-options": {
    categories: ["banks"],
    limit: 4,
    strategy: "sequential",
  },
  "can-i-open-bank-account-before-bsn:temporary-workarounds": {
    categories: ["banks"],
    limit: 4,
    strategy: "sequential",
  },
  "eu-vs-non-eu-moving-to-netherlands:practical-next-steps": {
    categories: ["banks", "mobile-connectivity", "housing-platforms"],
    limit: 6,
    strategy: "round-robin",
  },
  "first-30-days-netherlands:week-2": {
    categories: ["banks", "mobile-connectivity"],
    limit: 6,
    strategy: "round-robin",
  },
  "first-30-days-netherlands:week-3": {
    categories: ["health-insurance", "housing-platforms"],
    limit: 4,
    strategy: "round-robin",
  },
  "first-60-days-netherlands:weeks-5-6": {
    categories: ["banks"],
    limit: 3,
    strategy: "sequential",
  },
  "first-60-days-netherlands:weeks-7-8": {
    categories: ["mobile-connectivity", "health-insurance", "banks"],
    limit: 6,
    strategy: "round-robin",
  },
  "first-60-days-netherlands:housing-follow-up": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "first-90-days-netherlands:days-1-30": {
    categories: ["banks", "housing-platforms", "mobile-connectivity", "health-insurance"],
    limit: 6,
    strategy: "round-robin",
  },
  "first-90-days-netherlands:days-31-60": {
    categories: ["banks", "health-insurance", "housing-platforms"],
    limit: 6,
    strategy: "round-robin",
  },
  "first-90-days-netherlands:days-61-90": {
    categories: ["banks", "health-insurance", "housing-platforms"],
    limit: 6,
    strategy: "round-robin",
  },
  "health-insurance-netherlands:compare-major": {
    categories: ["health-insurance"],
    limit: 3,
    strategy: "sequential",
  },
  "health-insurance-netherlands:useful-services": {
    categories: ["banks", "health-insurance", "housing-platforms", "mobile-connectivity"],
    limit: 6,
    strategy: "round-robin",
  },
  "move-to-netherlands-without-job:minimum-savings": {
    categories: ["banks"],
    limit: 3,
    strategy: "sequential",
  },
  "move-to-netherlands-without-job:renting-housing-without-job": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "move-to-netherlands-without-job:what-people-do-next": {
    categories: ["health-insurance", "mobile-connectivity"],
    limit: 4,
    strategy: "round-robin",
  },
  "moving-to-netherlands-with-family:housing-families": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "moving-to-netherlands-with-family:healthcare-families": {
    categories: ["health-insurance"],
    limit: 3,
    strategy: "sequential",
  },
  "moving-to-netherlands-with-kids:housing-families": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "moving-to-netherlands-with-kids:arrival-admin": {
    categories: ["banks", "mobile-connectivity", "health-insurance"],
    limit: 6,
    strategy: "round-robin",
  },
  "moving-to-netherlands-with-kids:healthcare-children": {
    categories: ["health-insurance"],
    limit: 3,
    strategy: "sequential",
  },
  "moving-to-netherlands-with-partner:housing": {
    categories: ["housing-platforms"],
    limit: 3,
    strategy: "sequential",
  },
  "open-bank-account-netherlands:useful-services": {
    categories: ["banks", "mobile-connectivity", "housing-platforms", "health-insurance"],
    limit: 6,
    strategy: "round-robin",
  },
};

function sectionKey(slug: string, sectionId: string): string {
  return `${slug}:${sectionId}`;
}

function dedupeGuideServiceKey(s: GuideSectionServiceResolved): string {
  try {
    const u = new URL(s.url);
    return u.hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return s.name.trim().toLowerCase();
  }
}

/**
 * Combines registry and manual `services` without duplicate providers (same site hostname).
 * Keeps registry sort order; when both define the same host, the manual row wins (guide-specific copy).
 */
function mergeRegistryAndManualServices(
  fromRegistry: GuideSectionServiceResolved[],
  manual: GuideSectionServiceResolved[]
): GuideSectionServiceResolved[] {
  if (!manual.length) return fromRegistry.slice();
  const byKey = new Map<string, GuideSectionServiceResolved>();
  for (const s of manual) {
    byKey.set(dedupeGuideServiceKey(s), s);
  }
  for (const s of fromRegistry) {
    const k = dedupeGuideServiceKey(s);
    if (!byKey.has(k)) byKey.set(k, s);
  }
  const merged: GuideSectionServiceResolved[] = [];
  for (const s of fromRegistry) {
    merged.push(byKey.get(dedupeGuideServiceKey(s))!);
  }
  const registryKeys = new Set(fromRegistry.map(dedupeGuideServiceKey));
  for (const s of manual) {
    if (!registryKeys.has(dedupeGuideServiceKey(s))) {
      merged.push(s);
    }
  }
  return merged;
}

/**
 * Merges registry recommendations into `section.services` for rendering. Removes `recommendedRegistryServices`
 * from the output. Manual JSON `services` merge without duplicate providers (same URL hostname); manual copy wins on overlap.
 */
export function expandGuideDataWithRegistryRecommendations(data: GuideData): GuideData {
  const slug = data.slug;
  const sections = data.sections.map((section) => expandGuideSection(slug, section));
  return { ...data, sections };
}

function expandGuideSection(slug: string, section: GuideSection): GuideSection {
  const fromJson = section.recommendedRegistryServices;
  const fromDefaults = GUIDE_SECTION_REGISTRY_DEFAULTS[sectionKey(slug, section.id)];
  const config = fromJson ?? fromDefaults;

  if (!config?.categories?.length) {
    if (!section.recommendedRegistryServices) return section;
    const { recommendedRegistryServices: _r, ...rest } = section;
    return rest;
  }

  const strategy = effectiveStrategy(config.categories, config.strategy);
  const limit = config.limit ?? 3;
  const fromRegistry = getRecommendedGuideServicesFromRegistry(config.categories, limit, strategy);

  let manual: GuideSectionServiceResolved[] = [];
  if (section.services?.length) {
    manual = resolveGuideSectionServices(section.services);
  }

  const merged = mergeRegistryAndManualServices(fromRegistry, manual);

  const {
    recommendedRegistryServices: _r,
    services: _s,
    ...rest
  } = section;
  return {
    ...rest,
    services: merged.length ? merged : undefined,
  };
}
