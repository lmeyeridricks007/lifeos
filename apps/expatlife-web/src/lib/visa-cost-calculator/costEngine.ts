/**
 * Visa Cost Calculator – cost engine.
 * Produces estimated ranges and breakdown from user answers.
 * All amounts are planning estimates; confirm with official sources.
 */

import type { VisaCostCalculatorAnswers, CostEngineResult, CostBreakdownRow } from "@/src/data/tools/visa-cost-calculator/types";
import { getOfficialFeeByRoute } from "@/src/data/tools/visa-cost-calculator/official-fees";
import {
  DEFAULT_DOCUMENT_PREP_RANGE,
  READINESS_MULTIPLIERS,
} from "@/src/data/tools/visa-cost-calculator/document-cost-ranges";
import {
  TRAVEL_DISTANCE_FLIGHT_RANGES,
  LUGGAGE_SHIPPING_RANGE,
  getTempHousingRange,
} from "@/src/data/tools/visa-cost-calculator/travel-cost-ranges";
import {
  FIRST_WEEK_ADMIN_RANGE,
  BANK_PHONE_INSURANCE_SETUP_RANGE,
  PET_TRAVEL_COST_RANGE,
} from "@/src/data/tools/visa-cost-calculator/setup-cost-ranges";
import { getRelevantWarnings } from "@/src/data/tools/visa-cost-calculator/hidden-cost-warnings";
import { NEXT_STEP_LINKS_BY_ROUTE } from "@/src/data/tools/visa-cost-calculator/related-links";
import { ROUTE_COST_PROFILES } from "@/src/data/tools/visa-cost-calculator/route-cost-profiles";

const BASE = "/netherlands";

function getTravelers(answers: VisaCostCalculatorAnswers): number {
  switch (answers.householdType) {
    case "solo":
      return 1;
    case "partner":
      return 2;
    case "partner-and-children":
      return 4; // approximate
    case "children-only":
      return 2; // 1 adult + children
    default:
      return 1;
  }
}

function getTempHousingWeeks(duration: string): number {
  switch (duration) {
    case "1-week":
      return 1;
    case "2-weeks":
      return 2;
    case "1-month":
      return 4;
    case "more-than-1-month":
      return 6;
    default:
      return 0;
  }
}

export function runVisaCostEngine(answers: VisaCostCalculatorAnswers): CostEngineResult {
  const breakdown: CostBreakdownRow[] = [];
  const routeSpecificNotes: string[] = [];
  let officialTotal = 0;
  let documentTotalLow = 0;
  let documentTotalHigh = 0;
  let travelLow = 0;
  let travelHigh = 0;
  let setupLow = 0;
  let setupHigh = 0;

  // 1. Official fees
  const feeEntry = getOfficialFeeByRoute(answers.primaryRoute);
  if (feeEntry && feeEntry.applicationFeeEur > 0) {
    let mainFee = feeEntry.applicationFeeEur;
    if (answers.householdType === "partner" || answers.householdType === "partner-and-children") {
      mainFee += feeEntry.applicationFeeEur; // second adult
    }
    if (answers.householdType === "partner-and-children" && feeEntry.childFeeEur) {
      mainFee += feeEntry.childFeeEur * 2; // approximate 2 children
    }
    officialTotal = mainFee;
    breakdown.push({
      id: "official-fee",
      label: feeEntry.feeLabel,
      lowEur: mainFee,
      highEur: mainFee,
      note: feeEntry.note,
      sourceHref: feeEntry.sourceHref,
    });
    if (feeEntry.mvvFeeEur && answers.primaryRoute === "partner-family") {
      officialTotal += feeEntry.mvvFeeEur;
      breakdown.push({
        id: "mvv",
        label: "MVV (if required)",
        lowEur: 0,
        highEur: feeEntry.mvvFeeEur,
        note: "When applicable.",
        sourceHref: feeEntry.sourceHref,
      });
    }
  }

  // 2. Document preparation
  const mult = READINESS_MULTIPLIERS[answers.documentReadinessLevel] ?? READINESS_MULTIPLIERS[""];
  let docLow = DEFAULT_DOCUMENT_PREP_RANGE.low * mult.low;
  let docHigh = DEFAULT_DOCUMENT_PREP_RANGE.high * mult.high;
  if (answers.documentComplexityFlags.length > 0) {
    docLow = Math.min(docLow + 80 * answers.documentComplexityFlags.length, 1200);
    docHigh = Math.min(docHigh + 150 * answers.documentComplexityFlags.length, 2000);
  }
  documentTotalLow = Math.round(docLow);
  documentTotalHigh = Math.round(docHigh);
  breakdown.push({
    id: "document-prep",
    label: "Documents and prep (translation, apostille, etc.)",
    lowEur: documentTotalLow,
    highEur: documentTotalHigh,
    note: "Estimated range; provider prices vary.",
  });

  // 3. Travel
  const travelers = getTravelers(answers);
  const band = TRAVEL_DISTANCE_FLIGHT_RANGES.find((b) => b.distanceBand === answers.travelDistanceBand);
  if (answers.includedCostCategories.includes("flights") && band) {
    const flightLow = band.flightLowEur * travelers;
    const flightHigh = band.flightHighEur * travelers;
    travelLow += flightLow;
    travelHigh += flightHigh;
    breakdown.push({
      id: "flights",
      label: `Flights (${travelers} traveler${travelers > 1 ? "s" : ""})`,
      lowEur: Math.round(flightLow),
      highEur: Math.round(flightHigh),
      note: band.note,
    });
  }
  if (answers.includedCostCategories.includes("shipping-luggage")) {
    travelLow += LUGGAGE_SHIPPING_RANGE.low;
    travelHigh += LUGGAGE_SHIPPING_RANGE.high;
    breakdown.push({
      id: "luggage",
      label: "Extra luggage / shipping",
      lowEur: LUGGAGE_SHIPPING_RANGE.low,
      highEur: LUGGAGE_SHIPPING_RANGE.high,
      note: "Rough range; depends on weight and route.",
    });
  }

  // 4. Temporary housing
  const weeks = getTempHousingWeeks(answers.tempHousingDuration);
  if (answers.includedCostCategories.includes("temporary-housing") && weeks > 0) {
    const th = getTempHousingRange(weeks);
    travelLow += th.low;
    travelHigh += th.high;
    breakdown.push({
      id: "temp-housing",
      label: `Temporary housing (${weeks} week${weeks > 1 ? "s" : ""})`,
      lowEur: th.low,
      highEur: th.high,
      note: "Dutch cities; prices vary by location.",
    });
  }

  // 5. Setup
  if (answers.includedCostCategories.includes("first-week-admin")) {
    setupLow += FIRST_WEEK_ADMIN_RANGE.low;
    setupHigh += FIRST_WEEK_ADMIN_RANGE.high;
    breakdown.push({
      id: "first-week-admin",
      label: "First-week admin",
      lowEur: FIRST_WEEK_ADMIN_RANGE.low,
      highEur: FIRST_WEEK_ADMIN_RANGE.high,
      note: "Misc setup and admin.",
    });
  }
  if (answers.includedCostCategories.includes("bank-phone-insurance")) {
    setupLow += BANK_PHONE_INSURANCE_SETUP_RANGE.low;
    setupHigh += BANK_PHONE_INSURANCE_SETUP_RANGE.high;
    breakdown.push({
      id: "bank-phone-insurance",
      label: "Bank / phone / insurance setup",
      lowEur: BANK_PHONE_INSURANCE_SETUP_RANGE.low,
      highEur: BANK_PHONE_INSURANCE_SETUP_RANGE.high,
      note: "Initial setup costs.",
    });
  }
  if (answers.includedCostCategories.includes("pet-travel") && answers.includesPets) {
    setupLow += PET_TRAVEL_COST_RANGE.low;
    setupHigh += PET_TRAVEL_COST_RANGE.high;
    breakdown.push({
      id: "pet-travel",
      label: "Pet travel",
      lowEur: PET_TRAVEL_COST_RANGE.low,
      highEur: PET_TRAVEL_COST_RANGE.high,
      note: "Crate, documents, airline fees.",
    });
  }

  // Household adjustment (slight buffer for family)
  let householdAdjustment = 0;
  if (answers.householdType === "partner-and-children" || answers.householdType === "children-only") {
    householdAdjustment = 200;
    breakdown.push({
      id: "household-buffer",
      label: "Household (family) buffer",
      lowEur: 0,
      highEur: householdAdjustment,
      note: "Extra docs and travel for family.",
    });
  }

  const totalLow = officialTotal + documentTotalLow + travelLow + setupLow;
  const totalHigh = officialTotal + documentTotalHigh + travelHigh + setupHigh + householdAdjustment;
  if (answers.primaryRoute === "not-sure") {
    routeSpecificNotes.push("Select a specific route in the Visa Checker for a more accurate estimate.");
  }

  const isFamily =
    answers.householdType === "partner-and-children" || answers.householdType === "children-only" || answers.householdType === "partner";
  const isLongHaul = answers.travelDistanceBand === "long-haul";
  const hiddenCostWarnings = getRelevantWarnings(answers.primaryRoute, {
    family: isFamily,
    pets: answers.includesPets,
    longHaul: isLongHaul,
  }).map((w) => w.text);

  const nextSteps = NEXT_STEP_LINKS_BY_ROUTE[answers.primaryRoute] ?? NEXT_STEP_LINKS_BY_ROUTE["not-sure"];
  const recommendedNextSteps = nextSteps.map((l) => ({ label: l.label, href: l.href }));
  const recommendedGuides = ROUTE_COST_PROFILES.filter((p) => p.routeId !== "not-sure" && p.routeId !== answers.primaryRoute)
    .slice(0, 4)
    .map((p) => ({ label: p.label, href: p.guidePath }));
  const recommendedTools = [
    { label: "Visa Checker", href: `${BASE}/visa-checker/` },
    { label: "Document Readiness Checker", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation Cost Estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
    { label: "Moving Checklist", href: `${BASE}/moving/tools/moving-checklist/` },
  ];

  return {
    lowEstimate: Math.round(totalLow),
    highEstimate: Math.round(totalHigh),
    officialFeeSubtotal: officialTotal,
    documentPrepSubtotal: Math.round((documentTotalLow + documentTotalHigh) / 2),
    travelSubtotal: Math.round((travelLow + travelHigh) / 2),
    setupSubtotal: Math.round((setupLow + setupHigh) / 2),
    householdAdjustment,
    routeSpecificNotes,
    hiddenCostWarnings,
    costBreakdown: breakdown,
    recommendedNextSteps,
    recommendedGuides,
    recommendedTools,
  };
}
