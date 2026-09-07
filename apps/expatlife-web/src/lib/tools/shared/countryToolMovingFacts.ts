/**
 * Structured, record-backed moving facts for country×tool landings.
 * Derived from CountryRecord fields already maintained for origin guides —
 * do not invent visa/document differences here.
 */

import { loadCountryBySlug, type CountryContact, type CountryRecord } from "@/src/lib/countries/loadCountries";
import { countryGuidePath } from "@/src/lib/tools/shared/countryToolLinkModel";
import {
  getOriginCountryLabel,
  type CountryToolOfficialRef,
  type OriginCountrySlug,
} from "@/src/lib/tools/shared/toolCountryContext";

export type { CountryToolOfficialRef };

export type CountryToolMovingFacts = {
  slug: string;
  label: string;
  regionGroup: string;
  distanceCategory: string;
  /** Free-movement (EU/EEA/Swiss) vs immigration-first framing */
  movementFraming: "eu-eea-swiss" | "immigration-first";
  typicalFlightTime?: string;
  travelNotes: string[];
  commonVisaRoutes: string[];
  visaNotes: string[];
  starterDocuments: string[];
  documentNotes: string[];
  shippingNotes: string[];
  officialRefs: CountryToolOfficialRef[];
  countryGuideHref: string;
  /** ISO date from country index publishDate when present; else content pack date */
  informationAsOf: string;
  /** True when this origin shares a large EU/EEA peer cluster with little visa delta */
  lowVisaDifferentiationCluster: boolean;
};

const EU_EEA_SWISS = new Set(["eu", "eea", "eea-swiss"]);

const CONTENT_PACK_AS_OF = "2026-09-06";

function toRef(c: CountryContact): CountryToolOfficialRef | null {
  const href = (c.website || "").trim();
  if (!href.startsWith("http")) return null;
  return {
    label: c.label || c.name,
    href,
    summary: c.contactSummary || undefined,
  };
}

function uniqRefs(refs: CountryToolOfficialRef[], max = 5): CountryToolOfficialRef[] {
  const seen = new Set<string>();
  const out: CountryToolOfficialRef[] = [];
  for (const r of refs) {
    const key = r.href.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r);
    if (out.length >= max) break;
  }
  return out;
}

/** Prefer IND + Netherlands Worldwide + origin civil authorities already on the record. */
function collectOfficialRefs(record: CountryRecord): CountryToolOfficialRef[] {
  const refs: CountryToolOfficialRef[] = [];
  for (const c of record.contacts?.official ?? []) {
    const r = toRef(c);
    if (r) refs.push(r);
  }
  for (const c of record.documents?.sources ?? []) {
    const r = toRef(c);
    if (r) refs.push(r);
  }
  return uniqRefs(refs);
}

export function buildCountryToolMovingFacts(slug: string): CountryToolMovingFacts | null {
  const record = loadCountryBySlug(slug);
  if (!record) return null;

  const region = (record.regionGroup || "non-eu").toLowerCase();
  const movementFraming: CountryToolMovingFacts["movementFraming"] = EU_EEA_SWISS.has(region)
    ? "eu-eea-swiss"
    : "immigration-first";

  const shippingNotes = [
    ...(record.shipping?.intro ? [record.shipping.intro] : []),
    ...(record.shipping?.notes ?? []),
  ].filter(Boolean);

  return {
    slug: record.slug,
    label: record.name || getOriginCountryLabel(slug as OriginCountrySlug),
    regionGroup: record.regionGroup,
    distanceCategory: record.distanceCategory,
    movementFraming,
    typicalFlightTime: record.travel?.typicalFlightTime,
    travelNotes: [...(record.travel?.notes ?? [])],
    commonVisaRoutes: [...(record.visaAwareness?.commonRoutes ?? [])],
    visaNotes: [...(record.visaAwareness?.notes ?? [])],
    starterDocuments: [...(record.documents?.commonStarterDocuments ?? [])].slice(0, 8),
    documentNotes: [...(record.documents?.countrySpecificNotes ?? [])],
    shippingNotes,
    officialRefs: collectOfficialRefs(record),
    countryGuideHref: countryGuidePath(record.slug),
    informationAsOf: CONTENT_PACK_AS_OF,
    lowVisaDifferentiationCluster: movementFraming === "eu-eea-swiss",
  };
}

export function movementFramingSummary(facts: CountryToolMovingFacts): string {
  if (facts.movementFraming === "eu-eea-swiss") {
    return `${facts.label} movers typically follow EU/EEA/Swiss free-movement patterns: municipal registration and practical setup matter more than a default MVV/residence-permit storyline. Confirm your household’s exact status on IND.nl.`;
  }
  return `${facts.label} is a non-EU origin for most relocators: long-stay plans usually depend on a recognised residence-permit route (and MVV when IND/Netherlands Worldwide say it applies). Confirm the route before locking flights or shipping.`;
}
