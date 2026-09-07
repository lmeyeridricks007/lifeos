/**
 * Compose country×tool landing context from structured CountryRecord facts
 * + hand-authored landing JSON. Prefer record-backed deltas; do not invent uniqueness.
 */

import {
  getCountryLandingContent,
  type CountryToolLandingContent,
  type ToolSlug,
} from "@/src/lib/tools/shared/loadCountryLandingContent";
import type { CountryLandingContext, CountryToolOfficialRef } from "@/src/lib/tools/shared/toolCountryContext";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import {
  buildCountryToolMovingFacts,
  movementFramingSummary,
  type CountryToolMovingFacts,
} from "@/src/lib/tools/shared/countryToolMovingFacts";

export type CountryToolQualityClass =
  | "STRONG_UNIQUE_VALUE"
  | "ADEQUATE"
  | "NEEDS_ENRICHMENT"
  | "INSUFFICIENT_STANDALONE_VALUE";

export type ComposedCountryToolLanding = CountryLandingContext & {
  taskExplanation: string;
  visaPathwayDifferences: string[];
  officialReferences: CountryToolOfficialRef[];
  informationAsOf: string;
  qualityClass: CountryToolQualityClass;
  uniquenessNotes: string[];
  facts: CountryToolMovingFacts;
  curated: CountryToolLandingContent | null;
};

const TOOL_TASK: Record<ToolSlug, (label: string) => string> = {
  "moving-checklist": (label) =>
    `Use this checklist to sequence pre-move work from ${label}: documents, travel, housing handoff, and what to finish before you arrive in the Netherlands.`,
  "arrival-planner": (label) =>
    `Plan your first week and first month after arriving from ${label}: municipality registration, BSN, banking, insurance, and the order that usually unblocks everything else.`,
  "document-readiness": (label) =>
    `Check which ${label} documents you may need for Dutch registration, permits, or employers—and which legalisation/translation steps to confirm before you rely on them.`,
  "first-90-days": (label) =>
    `Map the first 90 days after a move from ${label}: DigiD, GP, utilities, routines, and follow-ups that tend to stall if you leave them unstructured.`,
};

function mergeUnique(primary: string[], secondary: string[], max = 6): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of [...primary, ...secondary]) {
    const t = item.trim();
    if (!t) continue;
    const key = t.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
    if (out.length >= max) break;
  }
  return out;
}

function looksTokenSwapped(intro: string | undefined, label: string): boolean {
  if (!intro) return true;
  const stripped = intro.replace(new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "{C}");
  const boilerplate = [
    "will focus on registration, BSN, and banking",
    "will include DigiD, GP, and daily",
    "will include DigiD, GP registration, and daily",
    "include DigiD, GP, and daily routines after your move",
  ];
  return boilerplate.some((b) => stripped.toLowerCase().includes(b.toLowerCase())) && intro.length < 220;
}

function composeIntro(
  facts: CountryToolMovingFacts,
  tool: ToolSlug,
  curated: CountryToolLandingContent | null
): string {
  const curatedIntro = curated?.intro?.trim();
  if (curatedIntro && !looksTokenSwapped(curatedIntro, facts.label)) {
    return curatedIntro;
  }

  const flight = facts.typicalFlightTime ? ` Typical travel time is about ${facts.typicalFlightTime}.` : "";
  if (tool === "document-readiness") {
    const docHint = facts.documentNotes[0]
      ? ` ${facts.documentNotes[0]}`
      : " Confirm legalisation and translation against the authority that will receive each document.";
    return `Document readiness for a move from ${facts.label} to the Netherlands depends on your route and which Dutch body asks for records.${docHint} This checker helps you list what to gather before deadlines stack up.`;
  }
  if (tool === "arrival-planner") {
    return `${movementFramingSummary(facts)}${flight} This arrival planner sequences the Netherlands-side first days so registration and banking are not left to chance.`;
  }
  if (tool === "first-90-days") {
    return `After relocating from ${facts.label}, the first 90 days are usually about making Dutch systems usable—DigiD, GP, payments, and routines—not redoing immigration paperwork.${flight} This planner keeps those follow-ups ordered.`;
  }
  // moving-checklist
  const routeHint = facts.commonVisaRoutes[0]
    ? ` Common planning routes include ${facts.commonVisaRoutes[0]}.`
    : "";
  return `${movementFramingSummary(facts)}${routeHint}${flight} This checklist covers pre-move preparation and handoff into your first days.`;
}

function composeWhatMatters(
  facts: CountryToolMovingFacts,
  curated: CountryToolLandingContent | null
): string[] {
  const fromFacts: string[] = [];
  if (facts.movementFraming === "eu-eea-swiss") {
    fromFacts.push("EU/EEA/Swiss free-movement framing: registration and housing usually outweigh visa paperwork");
  } else {
    fromFacts.push("Confirm residence-permit route (and MVV if required) before irreversible travel or shipping");
  }
  if (facts.commonVisaRoutes[0]) {
    fromFacts.push(`Often-discussed route awareness: ${facts.commonVisaRoutes[0]}`);
  }
  if (facts.distanceCategory === "far") {
    fromFacts.push("Long-haul logistics: temporary housing and document buffers matter more than for short hops");
  } else if (facts.distanceCategory === "near") {
    fromFacts.push("Short-haul move: easier travel options, but Dutch registration timing still applies");
  }
  if (facts.documentNotes[0]) fromFacts.push(facts.documentNotes[0]);
  if (facts.shippingNotes[0]) fromFacts.push(facts.shippingNotes[0]);

  return mergeUnique(curated?.whatOftenMatters ?? [], fromFacts, 6);
}

function composeDocuments(
  facts: CountryToolMovingFacts,
  curated: CountryToolLandingContent | null,
  tool: ToolSlug
): string[] {
  const fromFacts: string[] = [...facts.documentNotes];
  if (facts.starterDocuments.length) {
    fromFacts.push(`Starter records to gather early: ${facts.starterDocuments.slice(0, 5).join(", ")}`);
  }
  if (tool === "document-readiness" || tool === "moving-checklist") {
    fromFacts.push(
      "Verify legalisation/apostille and translation with Netherlands Worldwide country guidance and the receiving Dutch authority—rules are document-specific."
    );
  }
  return mergeUnique(curated?.documentConsiderations ?? [], fromFacts, 6);
}

function composeTravel(
  facts: CountryToolMovingFacts,
  curated: CountryToolLandingContent | null
): string[] {
  const fromFacts: string[] = [];
  if (facts.typicalFlightTime) {
    fromFacts.push(`Typical journey time from ${facts.label}: ${facts.typicalFlightTime}`);
  }
  fromFacts.push(...facts.travelNotes.slice(0, 2));
  fromFacts.push(...facts.shippingNotes.slice(0, 2));
  return mergeUnique(curated?.transferTravelNotes ?? [], fromFacts, 5);
}

function composeVisaDiffs(facts: CountryToolMovingFacts): string[] {
  const out: string[] = [movementFramingSummary(facts)];
  for (const n of facts.visaNotes.slice(0, 2)) out.push(n);
  if (facts.commonVisaRoutes.length) {
    out.push(`Route awareness commonly listed for ${facts.label}: ${facts.commonVisaRoutes.slice(0, 4).join("; ")}.`);
  }
  if (facts.lowVisaDifferentiationCluster) {
    out.push(
      "Compared with other EU/EEA/Swiss origins, visa pathway differences are usually small; the meaningful deltas are often documents, language of records, and travel logistics—not a unique permit type."
    );
  }
  return mergeUnique(out, [], 5);
}

/**
 * Heuristic quality class for audit/reporting. Does not invent content.
 * After composer enrichment, most pages should land ADEQUATE+; STRONG requires
 * curated depth beyond shared region framing.
 */
export function classifyCountryToolLanding(input: {
  facts: CountryToolMovingFacts;
  curated: CountryToolLandingContent | null;
  intro: string;
  whatOftenMatters: string[];
  documentConsiderations: string[];
  transferTravelNotes: string[];
  visaPathwayDifferences: string[];
  officialReferences: CountryToolOfficialRef[];
  tool: ToolSlug;
}): { qualityClass: CountryToolQualityClass; uniquenessNotes: string[] } {
  const notes: string[] = [];
  const curated = input.curated;
  const hasCuratedExtras = Boolean(
    curated?.documentConsiderations?.length || curated?.transferTravelNotes?.length
  );
  const curatedIntroStrong =
    Boolean(curated?.intro) &&
    !looksTokenSwapped(curated?.intro, input.facts.label) &&
    (curated?.intro?.length ?? 0) >= 180;
  const hasOfficial = input.officialReferences.length >= 1;
  const recordDocNotes = input.facts.documentNotes.length > 0;
  const recordTravel = Boolean(input.facts.typicalFlightTime) || input.facts.travelNotes.length > 0;
  const immigrationDistinct =
    input.facts.movementFraming === "immigration-first" &&
    (input.facts.commonVisaRoutes.length >= 2 || input.facts.visaNotes.length >= 1);

  if (input.facts.lowVisaDifferentiationCluster) {
    notes.push("EU/EEA/Swiss peer: limited visa uniqueness vs other free-movement origins");
  }
  if (looksTokenSwapped(curated?.intro, input.facts.label)) {
    notes.push("Curated intro was thin/boilerplate; composer supplied record-backed framing");
  }
  if (!hasCuratedExtras && (input.tool === "arrival-planner" || input.tool === "first-90-days")) {
    notes.push(`${input.tool} curated JSON historically thin across countries`);
  }
  if (!hasOfficial) {
    notes.push("Missing official references on country record");
  }

  // STRONG: curated uniqueness + official refs + record-backed docs/travel
  if (
    hasOfficial &&
    curatedIntroStrong &&
    (hasCuratedExtras || (immigrationDistinct && recordDocNotes)) &&
    (recordDocNotes || recordTravel)
  ) {
    return { qualityClass: "STRONG_UNIQUE_VALUE", uniquenessNotes: notes };
  }

  // ADEQUATE: honest standalone page with guide + official refs + composed deltas
  if (
    hasOfficial &&
    input.whatOftenMatters.length >= 3 &&
    input.documentConsiderations.length >= 2 &&
    Boolean(input.facts.countryGuideHref) &&
    (input.intro.length >= 120 || (recordDocNotes && recordTravel))
  ) {
    if (input.facts.lowVisaDifferentiationCluster && !hasCuratedExtras) {
      notes.push(
        "Adequate free-movement peer page: do not pad with invented visa differences; deepen documents/travel only when verifiable"
      );
    }
    return { qualityClass: "ADEQUATE", uniquenessNotes: notes };
  }

  // NEEDS_ENRICHMENT: structure present but thin deltas
  if (hasOfficial && input.intro.length >= 100 && input.whatOftenMatters.length >= 2) {
    notes.push("Needs richer country-specific document/travel notes beyond region framing");
    return { qualityClass: "NEEDS_ENRICHMENT", uniquenessNotes: notes };
  }

  notes.push("Standalone value weak: insufficient record-backed or curated deltas");
  return { qualityClass: "INSUFFICIENT_STANDALONE_VALUE", uniquenessNotes: notes };
}

export function composeCountryToolLanding(
  countrySlug: string,
  toolSlug: ToolSlug
): ComposedCountryToolLanding | null {
  const facts = buildCountryToolMovingFacts(countrySlug);
  if (!facts) return null;

  const curated = getCountryLandingContent(countrySlug, toolSlug);
  const label = facts.label || getOriginCountryLabel(countrySlug);

  const intro = composeIntro(facts, toolSlug, curated);
  const whatOftenMatters = composeWhatMatters(facts, curated);
  const documentConsiderations = composeDocuments(facts, curated, toolSlug);
  const transferTravelNotes = composeTravel(facts, curated);
  const visaPathwayDifferences = composeVisaDiffs(facts);
  const officialReferences = facts.officialRefs;
  const countryGuideHref = curated?.countryGuideHref || facts.countryGuideHref;

  const { qualityClass, uniquenessNotes } = classifyCountryToolLanding({
    facts,
    curated,
    intro,
    whatOftenMatters,
    documentConsiderations,
    transferTravelNotes,
    visaPathwayDifferences,
    officialReferences,
    tool: toolSlug,
  });

  return {
    countrySlug,
    countryLabel: label,
    intro,
    whatOftenMatters,
    documentConsiderations,
    transferTravelNotes,
    countryGuideHref,
    taskExplanation: TOOL_TASK[toolSlug](label),
    visaPathwayDifferences,
    officialReferences,
    informationAsOf: facts.informationAsOf,
    qualityClass,
    uniquenessNotes,
    facts,
    curated,
  };
}
