export type UtilitiesOfficialSourceKind =
  | "national_government"
  | "regulator"
  | "statistics"
  | "eu_consumer"
  | "tax_benefits";

export type UtilitiesOfficialSource = {
  id: string;
  label: string;
  href: string;
  kind: UtilitiesOfficialSourceKind;
  /** One line for UI subtitle — why this link matters for planning, not endorsement */
  planningNote: string;
};

/**
 * Authoritative-ish starting points — the tool does not scrape tariffs; users still need
 * address-specific portals (gemeente, water authority, provider checkout).
 */
export const utilitiesOfficialSources: readonly UtilitiesOfficialSource[] = [
  {
    id: "government-nl-topics",
    label: "Government.nl — living, housing, and public services topics",
    href: "https://www.government.nl/topics",
    kind: "national_government",
    planningNote: "Orientation on Dutch public services; follow through to sector-specific pages.",
  },
  {
    id: "acm-home",
    label: "ACM — Dutch Authority for Consumers and Markets",
    href: "https://www.acm.nl/en",
    kind: "regulator",
    planningNote: "Consumer and competition oversight — useful context before you sign long energy or telecom contracts.",
  },
  {
    id: "acm-energy-consumers",
    label: "ACM — energy for consumers (switching and contracts)",
    href: "https://www.acm.nl/en/market-regulation/sectors/energy/energy-for-consumers",
    kind: "regulator",
    planningNote: "Plain-language expectations around switching and retail energy — not a price comparator.",
  },
  {
    id: "cbs",
    label: "Statistics Netherlands (CBS) — prices and households",
    href: "https://www.cbs.nl/en-gb",
    kind: "statistics",
    planningNote: "Macro context for “typical” costs; your household can sit far from published averages.",
  },
  {
    id: "eu-your-europe-energy",
    label: "European Commission — Your Europe (energy & consumer rights)",
    href: "https://europa.eu/youreurope/citizens/consumers/energy-gas-electricity/index_en.htm",
    kind: "eu_consumer",
    planningNote: "Cross-border consumer framing; Dutch rules and local networks still apply day to day.",
  },
  {
    id: "belastingdienst-benefits",
    label: "Belastingdienst — benefits / allowances (toeslagen) in English",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/benefits/how_do_benefits_work/i_want_to_apply_for_a_benefit/i_want_to_apply_for_a_benefit",
    kind: "tax_benefits",
    planningNote: "Separate from utility retail; relevant when household cash flow is tight alongside rent and bills.",
  },
];
