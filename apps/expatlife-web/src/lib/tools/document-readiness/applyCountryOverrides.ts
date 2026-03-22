import type { DocumentEntry, ResolvedDocument, CountryOverrideBlock, ContactItem } from "./types";

/**
 * Applies country-specific overrides to a document entry.
 * Override fields replace or extend base fields; whoToContact is merged (country contacts appended).
 */
export function applyCountryOverrides(
  document: DocumentEntry,
  originCountrySlug: string | null
): ResolvedDocument {
  if (!originCountrySlug || !document.countryOverrides) {
    return { ...document };
  }

  const slug = originCountrySlug.toLowerCase().trim().replace(/\s+/g, "-");
  const overrides: CountryOverrideBlock | undefined = document.countryOverrides[slug];
  if (!overrides) {
    return { ...document };
  }

  const resolved: ResolvedDocument = {
    ...document,
    resolvedWhoToContact: mergeWhoToContact(document.whoToContact, overrides.whoToContact),
  };

  if (overrides.whereToGetIt?.summary) {
    resolved.whereToGetIt = overrides.whereToGetIt;
  }
  if (overrides.typicalCost?.summary) {
    resolved.typicalCost = overrides.typicalCost;
  }
  if (overrides.typicalTimeline?.summary) {
    resolved.typicalTimeline = overrides.typicalTimeline;
  }
  if (overrides.apostilleOrLegalization?.summary) {
    resolved.apostilleOrLegalization = overrides.apostilleOrLegalization;
  }
  if (overrides.translation?.summary) {
    resolved.translation = overrides.translation;
  }

  return resolved;
}

function mergeWhoToContact(
  base: ContactItem[] | undefined,
  country: ContactItem[] | undefined
): ContactItem[] | undefined {
  const list = [...(base ?? []), ...(country ?? [])];
  return list.length > 0 ? list : undefined;
}
