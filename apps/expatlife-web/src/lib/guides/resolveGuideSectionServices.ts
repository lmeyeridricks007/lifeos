import { COMPANIES_REGISTRY } from "@/src/data/companies-registry";
import type { GuideSectionService, GuideSectionServiceResolved } from "@/src/lib/guides/types";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";

function isRegistrySourced(s: GuideSectionService): s is {
  registryRef: string;
  description?: string;
  indicativeCost?: string;
  reason?: string;
} {
  return typeof (s as { registryRef?: string }).registryRef === "string";
}

/**
 * Expands `registryRef` entries using `COMPANIES_REGISTRY` so guides stay in sync with service category data.
 */
export function resolveGuideSectionServices(services: GuideSectionService[]): GuideSectionServiceResolved[] {
  return services.map((s) => {
    if (!isRegistrySourced(s)) {
      if (!s.logo) return s;
      return {
        ...s,
        logo: {
          src: normalizeExternalProviderLogoSrc(s.logo.src),
          alt: s.logo.alt,
        },
      };
    }
    const parts = s.registryRef.split("/").filter(Boolean);
    if (parts.length !== 2) {
      throw new Error(`Invalid registryRef "${s.registryRef}" (expected category/slug)`);
    }
    const [category, slug] = parts as [string, string];
    const row = COMPANIES_REGISTRY.find(
      (r) => r.rowKind === "service-category-provider" && r.category === category && r.slug === slug
    );
    if (!row || row.rowKind !== "service-category-provider") {
      throw new Error(`Unknown registry provider: ${s.registryRef}`);
    }
    const url = row.externalUrl ?? row.href;
    return {
      name: row.name,
      description: s.description ?? row.shortDescription,
      url,
      indicativeCost: s.indicativeCost ?? row.typicalCost ?? row.priceNote,
      reason: s.reason,
      logo: row.logo
        ? {
            src: normalizeExternalProviderLogoSrc(row.logo.src),
            alt: row.logo.alt,
          }
        : undefined,
    };
  });
}
