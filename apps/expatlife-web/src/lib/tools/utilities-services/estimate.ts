import {
  utilitiesCityAnchors,
  utilitiesContentsInsuranceMonthlyEur,
  utilitiesEnergyBaseMonthlyEur,
  utilitiesEnergyQualityMultipliers,
  utilitiesHeatingMultipliers,
  utilitiesHousingMultipliers,
  utilitiesInternetHouseholdMultiplier,
  utilitiesInternetMonthlyByTier,
  utilitiesLiabilityInsuranceMonthlyEur,
  utilitiesMediaBundleMonthlyEur,
  utilitiesMobileHouseholdFactor,
  utilitiesMobilePerLineByUsage,
  utilitiesPrioritySpendFactor,
  utilitiesSetupAssumptions,
  utilitiesSizeMultipliers,
  utilitiesUsageMultipliers,
  utilitiesWaterBasePerAdultEur,
  utilitiesWaterHouseholdFloorEur,
} from "./assumptions";
import { classifyUtilitiesService } from "./classification";
import { buildUtilitiesMoveInChecklist } from "./checklist";
import { utilitiesServiceCategories } from "./categories";
import { formatUtilitiesEur } from "./format";
import { utilitiesInclusionMultiplier } from "./inclusion";
import { deriveHouseholdProfile, deriveHousingProfile, deriveUsageProfile } from "./profiles";
import type {
  UsServiceBreakdownLine,
  UsServiceCategoryId,
  UsServiceEstimate,
  UsSetupBuckets,
  UtilitiesServicesInput,
  UtilitiesServicesResult,
} from "./types";

function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

function energyPersonCurve(adults: number, children: number): number {
  const a = Math.max(1, Math.min(6, adults));
  const c = Math.max(0, Math.min(8, children));
  return Math.min(1.28, 0.72 + 0.11 * Math.max(0, a - 1) + 0.045 * Math.min(c, 3));
}

function wfhEnergyInteraction(wfhHeavy: boolean, usageLevel: UtilitiesServicesInput["usageLevel"]): number {
  if (!wfhHeavy) return 1;
  const u = usageLevel === "high" ? 0.045 : usageLevel === "average" ? 0.028 : 0.015;
  return 1 + 0.035 + u;
}

/**
 * Quick estimate: broader shell + heating uncertainty (unknown shell, mixed heat path) and a neutral mobile usage profile,
 * so totals can differ once someone switches to Detailed and refines those fields. Detailed uses the form as-is.
 */
function resolvePlannerEffectiveInput(form: UtilitiesServicesInput): UtilitiesServicesInput {
  if (form.plannerMode !== "quick") return form;
  return {
    ...form,
    energyQuality: "unknown",
    heating: "mixed_unknown",
    mobileUsage: "standard",
  };
}

function estimateToBreakdownLine(e: UsServiceEstimate): UsServiceBreakdownLine {
  const whatAffectsEstimate =
    e.assumptionsUsed.length > 0 ? e.assumptionsUsed.slice(0, 4).join(" · ") : "See assumptions list on this card.";
  return {
    categoryId: e.categoryId,
    label: e.label,
    monthlyEstimate: e.monthlyEstimate,
    monthlyEur: e.monthlyEstimate,
    annualEstimate: e.annualEstimate,
    setupEstimate: e.setupEstimate,
    essential: e.essential,
    whyItApplies: e.whyItApplies,
    whatToCheck: e.whatToCheck,
    whatAffectsEstimate,
    classification: e.classification.classification,
    compareKind: e.classification.classification,
    maybeIncluded: e.classification.maybeIncluded,
    assumptionsUsed: e.assumptionsUsed,
    compareNote: e.classification.compareNote,
  };
}

export function estimateUtilitiesServices(input: UtilitiesServicesInput): UtilitiesServicesResult {
  const warnings: string[] = [];
  const effectiveInput = resolvePlannerEffectiveInput(input);
  const household = deriveHouseholdProfile(effectiveInput);
  const housing = deriveHousingProfile(effectiveInput);
  const usage = deriveUsageProfile(effectiveInput);
  const anchor = utilitiesCityAnchors[effectiveInput.city];
  const incCtx = {
    utilitiesIncludedInRent: effectiveInput.utilitiesIncludedInRent,
    landlordBuildingIncludesServices: effectiveInput.landlordBuildingIncludesServices,
  };

  if (
    effectiveInput.utilitiesIncludedInRent === "unsure" ||
    effectiveInput.landlordBuildingIncludesServices === "unsure"
  ) {
    warnings.push(
      "You marked inclusions as “not sure” — real totals can swing a lot once you read the lease and building rules."
    );
  }

  const housingM = utilitiesHousingMultipliers[effectiveInput.housingType];
  const sizeM = utilitiesSizeMultipliers[effectiveInput.sizeBand];
  const qualityM = utilitiesEnergyQualityMultipliers[effectiveInput.energyQuality];
  const heatM = utilitiesHeatingMultipliers[effectiveInput.heating];
  const usageM = utilitiesUsageMultipliers[effectiveInput.usageLevel];
  const priorityM = utilitiesPrioritySpendFactor(effectiveInput.priority);
  const peCurve = energyPersonCurve(effectiveInput.adultsCount, effectiveInput.childrenCount);
  const wfhE = wfhEnergyInteraction(effectiveInput.wfhHeavy, effectiveInput.usageLevel);

  const energyAssumptions: string[] = [
    `base_monthly_anchor_${utilitiesEnergyBaseMonthlyEur}eur`,
    `housing_x${housingM.toFixed(2)}`,
    `size_x${sizeM.toFixed(2)}`,
    `energy_quality_x${qualityM.toFixed(2)}`,
    `heating_x${heatM.toFixed(2)}`,
    `usage_x${usageM.toFixed(2)}`,
    `occupancy_curve_x${peCurve.toFixed(2)}`,
    `city_optional_nudge_x${anchor.optionalBundleNudge.toFixed(2)}`,
    `wfh_interaction_x${wfhE.toFixed(3)}`,
    `priority_x${priorityM.toFixed(2)}`,
  ];

  let energyMonthly =
    utilitiesEnergyBaseMonthlyEur *
    housingM *
    sizeM *
    qualityM *
    heatM *
    usageM *
    peCurve *
    anchor.optionalBundleNudge *
    wfhE;

  if (effectiveInput.evHeavy) {
    energyMonthly += 32;
    energyAssumptions.push("ev_load_plus_32eur");
  }

  const energyInc = utilitiesInclusionMultiplier("energy", incCtx);
  energyMonthly *= energyInc;
  energyAssumptions.push(`inclusion_x${energyInc.toFixed(2)}`);
  energyMonthly *= priorityM;
  energyMonthly = roundMoney(energyMonthly);

  const waterAssumptions: string[] = [
    `floor_${utilitiesWaterHouseholdFloorEur}eur`,
    `per_adult_${utilitiesWaterBasePerAdultEur}eur`,
    `housing_scale_x${(housingM * 0.88).toFixed(2)}`,
  ];
  const waterRaw =
    Math.max(
      utilitiesWaterHouseholdFloorEur,
      utilitiesWaterBasePerAdultEur * Math.max(1, effectiveInput.adultsCount) +
        utilitiesWaterBasePerAdultEur * 0.5 * effectiveInput.childrenCount
    ) *
    housingM *
    0.88;
  const waterInc = utilitiesInclusionMultiplier("water", incCtx);
  waterAssumptions.push(`inclusion_x${waterInc.toFixed(2)}`);
  let waterMonthly = roundMoney(waterRaw * waterInc);

  const internetAssumptions: string[] = [];
  let internetMonthly = 0;
  if (usage.includeInternet) {
    const hhNet = utilitiesInternetHouseholdMultiplier(household.personEquivalents, effectiveInput.householdType);
    const wfhNet = usage.wfhHeavy ? 1 + 0.055 + (effectiveInput.internetTier === "fast" ? 0.035 : 0.015) : 1;
    internetAssumptions.push(
      `tier_${effectiveInput.internetTier}`,
      `household_mult_x${hhNet.toFixed(2)}`,
      `wfh_tier_boost_x${wfhNet.toFixed(3)}`,
      `city_nudge_x${anchor.optionalBundleNudge.toFixed(2)}`,
      `priority_x${priorityM.toFixed(2)}`
    );
    internetMonthly =
      utilitiesInternetMonthlyByTier[effectiveInput.internetTier] * anchor.optionalBundleNudge * hhNet * wfhNet;
    const intInc = utilitiesInclusionMultiplier("internet", incCtx);
    internetMonthly *= intInc;
    internetAssumptions.push(`inclusion_x${intInc.toFixed(2)}`);
    internetMonthly *= priorityM;
    internetMonthly = roundMoney(internetMonthly);
  }

  const mobileAssumptions: string[] = [];
  let mobileMonthly = 0;
  if (usage.includeMobile) {
    const lines = Math.max(0, Math.min(6, effectiveInput.mobileLines));
    const fam = utilitiesMobileHouseholdFactor(effectiveInput.householdType, effectiveInput.childrenCount);
    mobileAssumptions.push(
      `lines_${lines}`,
      `usage_${effectiveInput.mobileUsage}`,
      `household_factor_x${fam.toFixed(2)}`,
      `priority_x${priorityM.toFixed(2)}`
    );
    mobileMonthly = roundMoney(
      utilitiesMobilePerLineByUsage[effectiveInput.mobileUsage] * lines * fam * priorityM
    );
  }

  const munAssumptions = [
    `city_anchor_${anchor.label.replace(/\s/g, "_").toLowerCase()}_${anchor.municipalityMonthlyEur}eur_mo`,
    `person_equiv_scale`,
    "annualized_as_monthly_times_12_for_display",
  ];
  let municipalityMonthly = roundMoney(
    anchor.municipalityMonthlyEur * (0.74 + 0.12 * Math.min(household.personEquivalents, 3))
  );

  const mediaAssumptions: string[] = [];
  let mediaMonthly = 0;
  if (usage.includeTvMedia) {
    mediaAssumptions.push(`base_${utilitiesMediaBundleMonthlyEur}eur`, `city_nudge_x${anchor.optionalBundleNudge.toFixed(2)}`);
    mediaMonthly = roundMoney(
      utilitiesMediaBundleMonthlyEur * anchor.optionalBundleNudge * housingM * 0.95 * priorityM
    );
  }

  const contentsAssumptions: string[] = [];
  let contentsMonthly = 0;
  if (usage.includeContentsInsurance) {
    const furnishM = effectiveInput.furnished === "furnished" ? 0.92 : 1;
    contentsAssumptions.push(`base_${utilitiesContentsInsuranceMonthlyEur}eur`, `size_x${sizeM.toFixed(2)}`, `furnished_x${furnishM.toFixed(2)}`);
    contentsMonthly = roundMoney(
      utilitiesContentsInsuranceMonthlyEur * sizeM * furnishM * priorityM
    );
  }

  const liabilityAssumptions: string[] = [];
  let liabilityMonthly = 0;
  if (usage.includeLiabilityInsurance) {
    liabilityAssumptions.push(`base_${utilitiesLiabilityInsuranceMonthlyEur}eur`, `priority_x${priorityM.toFixed(2)}`);
    liabilityMonthly = roundMoney(utilitiesLiabilityInsuranceMonthlyEur * priorityM);
  }

  const setup = utilitiesSetupAssumptions;

  let energySetup = energyMonthly > 0 ? setup.energyActivationEur.typical : 0;
  let internetInstall = 0;
  let internetModem = 0;
  if (internetMonthly > 0) {
    internetInstall = setup.internetInstallEur.typical;
    if (effectiveInput.internetTier === "fast") {
      internetInstall += 25;
      internetModem = setup.modemRouterTypicalWhenYouBuyEur;
    } else {
      internetModem = setup.modemRouterTypicalWhenProviderSuppliesEur;
    }
  }
  const mobileSetup = mobileMonthly > 0 ? setup.mobileSimAdminPerHouseholdEur : 0;
  let insuranceSetup = 0;
  if (contentsMonthly > 0 || liabilityMonthly > 0) insuranceSetup = setup.insuranceAdminEur;

  const buckets: UsSetupBuckets = {
    installationActivationEur: roundMoney(energySetup + internetInstall),
    hardwareModemEur: roundMoney(internetModem),
    adminOverlapFrictionEur: roundMoney(mobileSetup + insuranceSetup + (effectiveInput.shortTermOverlap ? setup.overlapFrictionEur : 0)),
    firstInvoiceTimingBufferEur: setup.firstInvoiceBufferEur,
    movingConnectionFrictionEur: effectiveInput.moveStage === "moving_soon" ? setup.movingSoonConnectionFrictionEur : 0,
  };

  const setupTotalEur = roundMoney(
    buckets.installationActivationEur +
      buckets.hardwareModemEur +
      buckets.adminOverlapFrictionEur +
      buckets.firstInvoiceTimingBufferEur +
      buckets.movingConnectionFrictionEur
  );

  const catMeta = (id: UsServiceCategoryId) => utilitiesServiceCategories.find((c) => c.id === id)!;

  const estimates: UsServiceEstimate[] = [];

  const pushEst = (
    categoryId: UsServiceCategoryId,
    monthly: number,
    setupEur: number,
    essential: boolean,
    why: string,
    whatToCheck: string[],
    assumptionsUsed: string[]
  ) => {
    const cls = classifyUtilitiesService(categoryId, effectiveInput, housing, household, usage, monthly);
    estimates.push({
      categoryId,
      label: catMeta(categoryId).label,
      essential,
      monthlyEstimate: monthly,
      annualEstimate: roundMoney(monthly * 12),
      setupEstimate: roundMoney(setupEur),
      whyItApplies: why,
      whatToCheck,
      assumptionsUsed,
      classification: cls,
    });
  };

  pushEst(
    "energy",
    energyMonthly,
    energySetup,
    true,
    "Most households pay for electricity; many also pay for gas or have district heat billed separately from rent.",
    [
      "Lease: who contracts electricity and gas (if any)?",
      "Meter type and year-start readings.",
      "Whether green power or dynamic tariffs fit your risk tolerance.",
    ],
    energyAssumptions
  );

  pushEst(
    "water",
    waterMonthly,
    0,
    true,
    "Drinking water and wastewater run through a regional water company or a landlord allocation — not a shopper market like energy.",
    [
      "How your building allocates water (individual meter vs shared).",
      "Whether water sits in rent or service costs.",
      "Digid / postal address for water-authority correspondence.",
    ],
    waterAssumptions
  );

  pushEst(
    "internet",
    internetMonthly,
    internetInstall + internetModem,
    usage.includeInternet,
    usage.includeInternet
      ? "Fixed broadband is the default backbone for admin, calls, and streaming — feasibility is address-specific."
      : "Not included in this run.",
    usage.includeInternet
      ? [
          "Fiber/DSL/cable availability at this postcode + house number.",
          "Installation lead time vs your move-in date.",
          "Whether modem/router is rented, included, or BYO.",
        ]
      : [],
    internetAssumptions
  );

  pushEst(
    "mobile",
    mobileMonthly,
    mobileSetup,
    usage.includeMobile,
    usage.includeMobile
      ? "Dutch SIM-only is common; total cost scales with lines and data profile."
      : "Not included in this run.",
    usage.includeMobile
      ? [
          "Roaming needs if you travel outside the EU often.",
          "EU bundle vs local-only pricing.",
          "Whether eSIM fits your handset.",
        ]
      : [],
    mobileAssumptions
  );

  pushEst(
    "municipality",
    municipalityMonthly,
    0,
    true,
    "Gemeente-linked household charges (waste collection, sewer contributions, and similar) are set locally. This line is an annualized monthly planning band — not a market basket you “shop” like broadband.",
    [
      "Gemeente website: afvalstoffenheffing / rioolheffing / reinigingsrechten (wording varies).",
      "Whether you pay as owner, tenant, or via a landlord pass-through.",
      "How/when the city sends assessments (often yearly with monthly payment plans).",
    ],
    munAssumptions
  );

  pushEst(
    "media_bundle",
    mediaMonthly,
    0,
    false,
    usage.includeTvMedia ? "Optional TV or sport bundles layered on broadband." : "Not modeled.",
    usage.includeTvMedia ? ["Compare bundle vs streaming-only total cost.", "Contract length vs intro pricing."] : [],
    mediaAssumptions
  );

  const contentsSetupShare =
    contentsMonthly > 0 ? (liabilityMonthly > 0 ? insuranceSetup / 2 : insuranceSetup) : 0;
  const liabilitySetupShare =
    liabilityMonthly > 0 ? (contentsMonthly > 0 ? insuranceSetup / 2 : insuranceSetup) : 0;

  pushEst(
    "contents_insurance",
    contentsMonthly,
    contentsSetupShare,
    false,
    usage.includeContentsInsurance
      ? "Covers belongings against common risks — compare limits for bikes, electronics, and jewelry."
      : "Not modeled.",
    usage.includeContentsInsurance
      ? ["Inventory high-value items.", "Check theft-away-from-home limits.", "Align with landlord requirements if any."]
      : [],
    contentsAssumptions
  );

  pushEst(
    "liability_insurance",
    liabilityMonthly,
    liabilitySetupShare,
    false,
    usage.includeLiabilityInsurance
      ? "Inexpensive third-party liability — still compare exclusions and deductible."
      : "Not modeled.",
    usage.includeLiabilityInsurance
      ? ["Check coverage for sports, drones, or rentals if relevant.", "See if a combined policy saves admin."]
      : [],
    liabilityAssumptions
  );

  const lines = estimates.map(estimateToBreakdownLine);

  const essentialTotal = lines.filter((l) => l.essential && l.monthlyEstimate > 0).reduce((s, l) => s + l.monthlyEstimate, 0);
  const optionalTotal = lines.filter((l) => !l.essential && l.monthlyEstimate > 0).reduce((s, l) => s + l.monthlyEstimate, 0);
  const allIn = lines.reduce((s, l) => s + l.monthlyEstimate, 0);

  const comparableServicesCount = lines.filter(
    (l) => l.classification === "actively_compare" && l.monthlyEstimate > 0
  ).length;
  const fixedLocalServicesCount = lines.filter(
    (l) => l.classification === "usually_local_fixed" && l.monthlyEstimate > 0
  ).length;
  const maybeIncludedCount = lines.filter((l) => l.maybeIncluded || l.classification === "may_already_be_included").length;

  const checklist = buildUtilitiesMoveInChecklist(effectiveInput);

  const compareLabels = lines
    .filter((l) => l.classification === "actively_compare" && l.monthlyEstimate > 0)
    .map((l) => l.label.replace(/\s*\(.+\)\s*$/, ""));
  const fixedLabels = lines
    .filter((l) => l.classification === "usually_local_fixed" && l.monthlyEstimate > 0)
    .map((l) => l.label);

  const compareIds = new Set(
    lines.filter((l) => l.classification === "actively_compare" && l.monthlyEstimate > 0).map((l) => l.categoryId)
  );
  const hasEnergyInternetMobile =
    compareIds.has("energy") && compareIds.has("internet") && compareIds.has("mobile");
  const compareSentence = hasEnergyInternetMobile
    ? "Energy, internet, and mobile are worth comparing."
    : compareLabels.length
      ? `${compareLabels.slice(0, 3).join(", ")} ${compareLabels.length > 1 ? "are" : "is"} worth comparing.`
      : "Fewer lines respond to shopping once essentials are excluded or bundled.";
  const fixedSentence = fixedLabels.length
    ? `${fixedLabels.slice(0, 2).join(" and ")} ${fixedLabels.length > 1 ? "are" : "is"} usually more fixed or local.`
    : "";

  const summaryText =
    `For your setup, expect around ${formatUtilitiesEur(allIn)}/month in household services, with about ${formatUtilitiesEur(setupTotalEur)} upfront in setup/activation costs. ${compareSentence} ${fixedSentence}`.trim();

  return {
    householdProfile: household,
    housingProfile: housing,
    usageProfile: usage,
    monthlyTotals: {
      allInEur: roundMoney(allIn),
      essentialEur: roundMoney(essentialTotal),
      optionalEur: roundMoney(optionalTotal),
    },
    setupTotalEur,
    setupBuckets: buckets,
    comparableServicesCount,
    fixedLocalServicesCount,
    maybeIncludedCount,
    serviceBreakdown: lines,
    serviceEstimates: estimates,
    moveInChecklist: checklist,
    scenarioComparisons: [],
    summaryText,
    warnings,
  };
}
