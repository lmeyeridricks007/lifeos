import type { CountryRecord } from "./loadCountries";

function listToSentence(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function regionLine(regionGroup: string): string {
  if (regionGroup === "eu") {
    return "As a nearby European route, planning can often be staged in shorter cycles.";
  }
  if (regionGroup === "eea-swiss") {
    return "Swiss citizens are covered alongside EU and EEA nationals in key IND guidance on staying in the Netherlands—confirm details on IND.nl for your situation.";
  }
  if (regionGroup === "eea") {
    return "Norwegian nationals are EEA citizens: IND guidance treats them together with EU citizens for many stay and work questions—confirm your situation on IND.nl and Government.nl.";
  }
  if (regionGroup === "non-eu") {
    return "As a non-EU route, it helps to confirm permit and sponsor details early.";
  }
  return "Route requirements depend on your nationality and stay purpose.";
}

function distanceLine(distanceCategory: string): string {
  if (distanceCategory === "far") {
    return "Long-haul travel usually means earlier document checks, travel planning, and temporary housing decisions.";
  }
  if (distanceCategory === "near") {
    return "Shorter travel time can make move planning more flexible, but document sequencing still matters.";
  }
  return "Travel distance can affect how early you need to lock in logistics.";
}

export function buildCountryIntro(country: CountryRecord): string {
  const reasons = country.relocationProfile?.commonReasons ?? [];
  const reasonText = reasons.length > 0 ? `Common move reasons include ${listToSentence(reasons.slice(0, 3))}.` : "";
  return [
    `People moving from ${country.name} to the Netherlands usually combine route planning, document preparation, and practical first-week setup.`,
    regionLine(country.regionGroup),
    distanceLine(country.distanceCategory),
    reasonText,
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildCountryDifferences(country: CountryRecord): string {
  const sectors = country.relocationProfile?.commonSectors ?? [];
  const routes = country.visaAwareness?.commonRoutes ?? [];
  const docsSourceCount = country.documents?.sources?.length ?? 0;
  const sourceLine =
    docsSourceCount > 0
      ? `This route includes country-specific document sources to make prep more concrete.`
      : `Document prep should be checked against official local and Dutch sources.`;

  return [
    sectors.length > 0 ? `Typical relocation sectors include ${listToSentence(sectors.slice(0, 4))}.` : "",
    routes.length > 0 ? `Common route patterns include ${listToSentence(routes.slice(0, 3))}.` : "",
    sourceLine,
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildCountryTimelineNarrative(country: CountryRecord): string {
  const farText =
    country.distanceCategory === "far"
      ? "For long-distance moves, document collection and temporary housing usually need to start earlier than expected."
      : "";
  const sourceText =
    (country.documents?.sources?.length ?? 0) > 0
      ? "Keep official source details close during prep so replacement or follow-up requests are easier."
      : "";
  return [
    "Use a three-stage timeline: before the move, arrival week, and first 90 days.",
    farText,
    sourceText,
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildCountryCostNarrative(country: CountryRecord): string {
  const rangeCount = country.costs?.ranges?.length ?? 0;
  const currency = country.costs?.currency ? `in ${country.costs.currency}` : "";
  return rangeCount > 0
    ? `These planning ranges ${currency} are awareness values only. Final costs depend on timing, household volume, route, and supplier quotes.`
    : "Costs vary by timing and logistics. Use quote-based planning before final decisions.";
}

