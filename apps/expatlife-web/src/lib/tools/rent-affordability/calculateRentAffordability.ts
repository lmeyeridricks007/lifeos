/**
 * Deterministic rent affordability engine — planning-only, config-driven.
 * Gross/net conversions use the Dutch salary net model (indicative, not payroll advice).
 */

import { roundEur } from "@/src/lib/calculators/cost-of-living/formulas";
import { LIFESTYLE_ASSUMPTIONS, SETUP_PLANNING } from "@/src/lib/calculators/cost-of-living/seed/globalPlanningConfig";
import { getCityCostSeed, getRentMidForHousingMode } from "@/src/lib/calculators/cost-of-living/seed/cityCostSeed";
import { MONTHLY_COMMS_SEED, MONTHLY_MISC_SUBSCRIPTIONS_SEED } from "@/src/lib/calculators/cost-of-living/seed/recurringMiscSeed";
import { SALARY_TARGET_COEFFICIENTS } from "@/src/lib/calculators/cost-of-living/model/planningCoefficients";
import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import { raCityRentAdjustment, raCityToColCity } from "./cityMap";
import {
  AFFORDABILITY_BAND_PARAMS,
  CHILDCARE_PLACEHOLDER_FACTOR,
  HOUSING_RENT_SHAPE_MULT,
  LIFESTYLE_TIER_CONFIG,
  PET_MONTHLY_PLANNING_EUR,
  STUDIO_VS_ONE_BED_RENT_FACTOR,
  TRANSPORT_MODE_OVERLAY_EUR,
  competitivenessModerationFactor,
  getCityPlanning,
  householdUtilityScale,
  housingModeToColHousingMode,
  NEIGHBORHOOD_MODIFIERS,
  resolveHouseholdCounts,
} from "./config";
import {
  grossMonthlyFromNetWithRulingAssumption,
  netMonthlyFromGrossMonthly,
  netMonthlyFromGrossWithRulingAssumption,
  type RentSalaryBridgeParams,
} from "./salaryBridge";
import type {
  AffordableRentBands,
  LandlordScreeningResult,
  MonthlyLivingCostLine,
  MonthlyLivingCostsResult,
  RaAffordabilityStatus,
  RaLandlordRule,
  RaLandlordRuleCheck,
  RaLandlordScreenStatus,
  RaMaxRentBand,
  RaReverseSalary,
  RaSalaryNetTargets,
  RentAffordabilityEngineResult,
  RentAffordabilityInsights,
  RentAffordabilityScenarioInput,
  SalaryNeededForRentResult,
  SetupCostLine,
  SetupCostsResult,
} from "@/src/types/tools/rent-affordability";

const LANDLORD_RULES: RaLandlordRule[] = [3, 3.5, 4];

function lifestyleTierToCol(tier: RentAffordabilityScenarioInput["lifestyleTier"]): keyof typeof LIFESTYLE_ASSUMPTIONS {
  if (tier === "essential") return "basic";
  if (tier === "comfortable") return "comfortable";
  return "balanced";
}

function groceriesLifestyleMult(tier: RentAffordabilityScenarioInput["lifestyleTier"]): number {
  if (tier === "essential") return 0.95;
  if (tier === "comfortable") return 1.05;
  return 1;
}

export function salaryBridgeParamsFromScenario(input: RentAffordabilityScenarioInput): RentSalaryBridgeParams {
  return {
    bonusAnnual: Math.max(0, input.bonusAnnual),
    includeHolidayAllowance: input.includeHolidayAllowanceInGross,
    apply30Ruling: input.rulingAssumption === "yes",
  };
}

/** Resolves indicative net/gross from user basis. */
export function resolveScenarioIncome(input: RentAffordabilityScenarioInput): {
  netMonthly: number;
  grossMonthly: number;
  grossAnnual: number;
  netFromGrossEstimate: boolean;
  grossFromNetEstimate: boolean;
  indicativeNote: string | null;
} {
  const incomeModeFactor =
    input.incomeEntryMode === "combined_household_income"
      ? 1
      : input.incomeEntryMode === "primary_plus_partial_partner"
        ? 1 + Math.min(1, Math.max(0, input.partnerContributionShare))
        : 1;
  const p = salaryBridgeParamsFromScenario(input);
  if (input.incomeBasis === "gross") {
    const grossFromAnnual = input.grossAnnual > 0 ? input.grossAnnual / 12 : input.monthlyGross;
    const g = Math.max(0, grossFromAnnual) * incomeModeFactor;
    const n = netMonthlyFromGrossWithRulingAssumption(g, p, input.rulingAssumption);
    const note =
      input.rulingAssumption === "maybe"
        ? "Net is a 50/50 blend of ruled vs unruled payroll (planning only)."
        : "Net is indicative from gross via the Dutch salary model (not your payslip).";
    return {
      netMonthly: n?.netMonthly ?? 0,
      grossMonthly: n?.grossMonthly ?? g,
      grossAnnual: n?.grossAnnual ?? g * 12,
      netFromGrossEstimate: true,
      grossFromNetEstimate: false,
      indicativeNote: note,
    };
  }
  const n0 = Math.max(0, input.monthlyNet) * incomeModeFactor;
  const g0 = grossMonthlyFromNetWithRulingAssumption(n0, p, input.rulingAssumption);
  const check = netMonthlyFromGrossWithRulingAssumption(g0, p, input.rulingAssumption);
  const note =
    input.rulingAssumption === "maybe"
      ? "Gross is inverted from net with a ruled/unruled blend (planning only)."
      : "Gross is inverted from net via the Dutch salary model (indicative for landlord-style checks).";
  return {
    netMonthly: check?.netMonthly ?? n0,
    grossMonthly: g0,
    grossAnnual: check?.grossAnnual ?? g0 * 12,
    netFromGrossEstimate: false,
    grossFromNetEstimate: true,
    indicativeNote: note,
  };
}

export function modelRentColdEur(input: RentAffordabilityScenarioInput): number {
  const col = raCityToColCity(input.city);
  const mode = housingModeToColHousingMode(input.housingMode);
  const planning = getCityPlanning(input.city);
  const neigh = NEIGHBORHOOD_MODIFIERS[input.neighborhoodBand];
  let base = getRentMidForHousingMode(col, mode) * planning.rentAnchorMult * raCityRentAdjustment(input.city);
  base *= HOUSING_RENT_SHAPE_MULT[input.housingMode];
  if (input.housingMode === "studio") base *= STUDIO_VS_ONE_BED_RENT_FACTOR;
  base *= neigh.rentMult;
  return base;
}

export function effectiveMonthlyRentEur(input: RentAffordabilityScenarioInput, modelCold: number): number {
  let r = input.rentMode === "target" && input.targetRentEur > 0 ? input.targetRentEur : modelCold;
  const col = raCityToColCity(input.city);
  const seed = getCityCostSeed(col);
  const planning = getCityPlanning(input.city);
  if (input.includeServiceCosts) {
    r += planning.serviceCostsBundleEur;
  }
  if (input.includeParking) {
    const cap = Math.min(175, Math.round(seed.parkingPressureEur * (0.82 + 0.05 * planning.rentAnchorMult)));
    r += cap;
  }
  if (input.includeFurnishedPremium) {
    r += Math.max(128, Math.round(r * (0.095 + 0.04 * planning.competitivenessBase)));
  }
  return r;
}

function childcareLineEur(input: RentAffordabilityScenarioInput, col: ColCity): number {
  const { children } = resolveHouseholdCounts(input.householdType, input.adultsCount, input.childrenCount);
  const fixed = Math.max(0, input.fixedChildcare);
  const seed = getCityCostSeed(col);
  const intensityMult = input.childcareIntensity === "full_time" ? 1 : 0.58;
  const placeholder =
    children > 0 && input.includeChildcarePlaceholder
      ? CHILDCARE_PLACEHOLDER_FACTOR * seed.childcareFullTimeMidPerChild * children * intensityMult
      : 0;
  if (children <= 0 && fixed <= 0) return 0;
  if (children <= 0) return fixed;
  return Math.max(fixed, placeholder);
}

/** User-entered fixed lines excluding childcare (childcare is its own model line to avoid double counting). */
export function userFixedExcludingChildcareEur(input: RentAffordabilityScenarioInput): number {
  return (
    Math.max(0, input.fixedDebt) +
    Math.max(0, input.fixedAlimony) +
    Math.max(0, input.fixedSubscriptions) +
    Math.max(0, input.fixedCar) +
    Math.max(0, input.fixedManualExtra)
  );
}

/** Model + user recurring lines (excluding housing rent unless `includeRentEur > 0`). */
export function estimateMonthlyLivingCosts(
  input: RentAffordabilityScenarioInput,
  includeRentEur: number
): MonthlyLivingCostsResult {
  const col = raCityToColCity(input.city);
  const seed = getCityCostSeed(col);
  const planning = getCityPlanning(input.city);
  const { adults, children } = resolveHouseholdCounts(input.householdType, input.adultsCount, input.childrenCount);
  const tierCfg = input.lifestyleTier;
  const colLife = lifestyleTierToCol(tierCfg);
  const disc = LIFESTYLE_ASSUMPTIONS[colLife].discretionaryMult;
  const tierL = LIFESTYLE_TIER_CONFIG[tierCfg];

  const groceries = roundEur(
    adults * seed.groceriesPerAdultMid * planning.groceriesMult * groceriesLifestyleMult(tierCfg) * (0.92 + disc * 0.08) +
      children * seed.groceriesPerChildMid * planning.groceriesMult
  );
  const health = roundEur(adults * seed.healthInsuranceAdultMid + children * seed.healthInsuranceChildMid);
  const utils = roundEur(
    seed.utilitiesMonthlyMidTwoPerson * householdUtilityScale(adults, children) * planning.utilitiesMult
  );
  const tOver = TRANSPORT_MODE_OVERLAY_EUR[input.transportMode];
  const transport = roundEur(
    tOver.ov + tOver.bike + tOver.car + seed.transportUrbanBaselineMid * tOver.nsFactor + planning.transportBaselineAddEur
  );
  const commsTotal =
    MONTHLY_COMMS_SEED.singleAdultBaseEur + (adults >= 2 ? MONTHLY_COMMS_SEED.secondAdultIncrementEur : 0);
  const commsScaled = roundEur(commsTotal * (0.96 + 0.04 * planning.optionalExtrasMult));
  const internetHome = roundEur(commsScaled * 0.58);
  const mobilePlans = roundEur(commsScaled * 0.42);
  const miscCore = roundEur(
    (MONTHLY_MISC_SUBSCRIPTIONS_SEED.perAdultEur * adults * disc * tierL.subsMiscMult +
      MONTHLY_MISC_SUBSCRIPTIONS_SEED.perChildEur * children +
      MONTHLY_MISC_SUBSCRIPTIONS_SEED.householdBaseEur) *
      (input.includeStreamingExtras ? 0.72 : 1)
  );
  const diningLeisure = roundEur(adults * seed.leisureBaselinePerAdultMid * disc * tierL.diningLeisureMult);
  const municipal = roundEur(planning.municipalPerAdultEur * adults + 14 * children);
  const om = planning.optionalExtrasMult;

  const lines: MonthlyLivingCostLine[] = [
    {
      id: "groceries",
      label: "Groceries & household goods",
      group: "groceries",
      amountEur: groceries,
      note: "Planning estimate — not a supermarket receipt.",
    },
    {
      id: "health",
      label: "Health insurance (basic policy — planning estimate)",
      group: "health",
      amountEur: health,
      note: "Basic zorgverzekering style line; compare insurers for your age and deductible.",
    },
    {
      id: "utilities",
      label: "Utilities (energy, water, local charges) — planning estimate",
      group: "utilities",
      amountEur: utils,
      note: "Volatile line; many expats see higher first-year energy than this mid.",
    },
    {
      id: "internet_home",
      label: "Home internet (planning estimate)",
      group: "comms",
      amountEur: internetHome,
    },
    {
      id: "mobile",
      label: "Mobile (planning estimate)",
      group: "comms",
      amountEur: mobilePlans,
    },
    {
      id: "transport",
      label: "Transport (mode + city baseline)",
      group: "transport",
      amountEur: transport,
      note: "Planning estimate — OV, bike, or car overlay.",
    },
    {
      id: "municipal",
      label: "Municipality / local admin slice (planning estimate)",
      group: "municipal",
      amountEur: municipal,
    },
    {
      id: "dining_leisure",
      label: "Dining & leisure (lifestyle tier)",
      group: "dining",
      amountEur: diningLeisure,
      note: "Planning estimate.",
    },
    {
      id: "misc_subs",
      label: "Subscriptions & household miscellaneous",
      group: "misc",
      amountEur: miscCore,
      note: input.includeStreamingExtras
        ? "Core misc only; streaming split to optional line."
        : "Planning estimate — includes small subscriptions roll-up.",
    },
  ];

  const cc = childcareLineEur(input, col);
  if (cc > 0) {
    lines.push({
      id: "childcare",
      label: "Childcare",
      group: "childcare",
      amountEur: roundEur(cc),
      note:
        input.includeChildcarePlaceholder && input.fixedChildcare <= 0
          ? "Placeholder — part-time-style slice vs city fee mid; confirm with daycare."
          : "Planning estimate / your entered amount.",
    });
  }
  if (input.includePet) {
    lines.push({
      id: "pet",
      label: "Pet costs (monthly reserve)",
      group: "pet",
      amountEur: PET_MONTHLY_PLANNING_EUR,
      note: "Planning estimate — food, vet reserve, liability; not a quote.",
    });
  }

  if (input.includeGymSport) {
    const g = roundEur((38 + adults * 22) * tierL.diningLeisureMult * om);
    lines.push({
      id: "gym_sport",
      label: "Gym / sport (optional line)",
      group: "optional_extra",
      amountEur: g,
      note: "Planning estimate.",
    });
  }
  if (input.includeSupplementaryHealth) {
    const s = roundEur((26 * adults + 14 * children) * om);
    lines.push({
      id: "supp_health",
      label: "Supplementary health / dental add-on (optional line)",
      group: "optional_extra",
      amountEur: s,
      note: "Not basic zorgverzekering; compare aanvullende packages.",
    });
  }
  if (input.includeStreamingExtras) {
    const st = roundEur((18 + adults * 16) * disc * tierL.subsMiscMult * om);
    lines.push({
      id: "streaming_extra",
      label: "Streaming & personal subscriptions (optional line)",
      group: "optional_extra",
      amountEur: st,
      note: "Monthly reserve — planning estimate.",
    });
  }
  if (input.includeTaxFilingReserve) {
    const tax = roundEur((38 + adults * 14) * om);
    lines.push({
      id: "tax_reserve",
      label: "Tax filing / advisor reserve (monthly slice)",
      group: "reserves",
      amountEur: tax,
      note: "Amortised planning reserve — not a quote from an accountant.",
    });
  }
  if (input.includeTravelHomeReserve) {
    const tr = roundEur((72 + adults * 28) * tierL.travelDiscMult * om);
    lines.push({
      id: "travel_home_reserve",
      label: "Travel / flights home (monthly reserve)",
      group: "reserves",
      amountEur: tr,
      note: "Optional line for people who budget trips home explicitly.",
    });
  }
  if (input.includeSchoolCostReserve && children > 0) {
    const sc = roundEur(children * (planning.schoolReservePerChildEur + 12 * tierL.subsMiscMult));
    lines.push({
      id: "school_reserve",
      label: "School / materials reserve (placeholder)",
      group: "reserves",
      amountEur: sc,
      note: "Placeholder for books, trips, international-school-style friction — not tuition.",
    });
  }
  if (input.includeHomeContentsLiabilityInsurance) {
    const hi = roundEur(26 + adults * 15 + children * 9 + planning.municipalPerAdultEur * 0.08);
    lines.push({
      id: "home_insurance_reserve",
      label: "Home contents & liability (inboedel / aansprakelijkheid) — monthly reserve",
      group: "reserves",
      amountEur: hi,
      note: "Planning estimate — compare WA + inboedel products.",
    });
  }

  lines.push(
    { id: "fixed_debt", label: "Debt / loans (fixed)", group: "debt", amountEur: Math.max(0, input.fixedDebt) },
    { id: "fixed_alimony", label: "Alimony / support (fixed)", group: "other_fixed", amountEur: Math.max(0, input.fixedAlimony) },
    {
      id: "fixed_subscriptions",
      label: "Subscriptions you listed (fixed)",
      group: "other_fixed",
      amountEur: Math.max(0, input.fixedSubscriptions),
    },
    { id: "fixed_car", label: "Car costs you listed (fixed)", group: "other_fixed", amountEur: Math.max(0, input.fixedCar) },
    {
      id: "fixed_manual",
      label: "Other fixed obligations",
      group: "other_fixed",
      amountEur: Math.max(0, input.fixedManualExtra),
    }
  );

  let housing = 0;
  if (includeRentEur > 0) {
    housing = roundEur(includeRentEur);
    lines.unshift({
      id: "housing_rent",
      label: "Rent & housing (cold + selected add-ons)",
      group: "housing",
      amountEur: housing,
    });
  }

  const subtotalExcludingHousingEur = lines
    .filter((l) => l.group !== "housing")
    .reduce((s, l) => s + l.amountEur, 0);
  const totalIncludingHousingEur = lines.reduce((s, l) => s + l.amountEur, 0);

  return {
    lines,
    subtotalExcludingHousingEur,
    totalIncludingHousingEur,
  };
}

/** Non-rent lines used in affordability math: model (groceries…pet) without user fixed_* rows. */
export function modelLinesOnly(monthly: MonthlyLivingCostsResult): MonthlyLivingCostLine[] {
  const fixedIds = new Set([
    "fixed_debt",
    "fixed_alimony",
    "fixed_subscriptions",
    "fixed_car",
    "fixed_manual",
  ]);
  return monthly.lines.filter((l) => !fixedIds.has(l.id) && l.group !== "housing");
}

export function modelNonRentTotalEur(monthly: MonthlyLivingCostsResult): number {
  return modelLinesOnly(monthly).reduce((s, l) => s + l.amountEur, 0);
}

export function estimateSetupCosts(
  input: RentAffordabilityScenarioInput,
  rentRef: number,
  col: ColCity
): SetupCostsResult {
  const seed = getCityCostSeed(col);
  const planning = getCityPlanning(input.city);
  const friction = seed.setupFrictionMult;
  const colLife = lifestyleTierToCol(input.lifestyleTier);
  const { adults, children } = resolveHouseholdCounts(input.householdType, input.adultsCount, input.childrenCount);
  const lines: SetupCostLine[] = [];
  let sub = 0;
  const rent = Math.max(0, rentRef);

  if (input.setupDeposit) {
    const months = planning.depositMonthsTendency;
    const d = roundEur(rent * months);
    lines.push({
      id: "deposit",
      label: `Rental deposit (planning estimate: ${months}× monthly rent reference)`,
      amountEur: d,
      note: "Deposit months vary by landlord — not a quote.",
    });
    sub += d;
  }
  if (input.setupFirstMonth) {
    const fm = roundEur(rent);
    lines.push({
      id: "first_month",
      label: "First month rent (cash-flow timing — planning estimate)",
      amountEur: fm,
    });
    sub += fm;
  }

  const utilitySetup = roundEur(planning.setupUtilityInternetBaseEur * (0.9 + 0.1 * friction));
  lines.push({
    id: "utility_setup",
    label: "Internet & utilities activation buffer (planning estimate)",
    amountEur: utilitySetup,
    note: "Connection, first bills, buffer — not meter readings.",
  });
  sub += utilitySetup;

  if (input.setupFurniture) {
    const f = roundEur(LIFESTYLE_ASSUMPTIONS[colLife].furnitureBase * friction);
    lines.push({
      id: "furniture",
      label: "Furniture & home setup (starter pack — planning estimate)",
      amountEur: f,
    });
    sub += f;
  }
  if (input.setupAgencyFees) {
    const a = roundEur(rent * SETUP_PLANNING.agencyFeeFractionLong * planning.agencyFeeTendencyMult);
    lines.push({
      id: "agency",
      label: "Agency / contract fees (planning estimate)",
      amountEur: a,
      note: "Indicative % — many rentals have no agency fee.",
    });
    sub += a;
  }
  const localTransport = roundEur(
    (SETUP_PLANNING.localTransportSetupBaseEur + SETUP_PLANNING.localTransportSetupPerAdultEur * adults) *
      (0.97 + 0.03 * planning.optionalExtrasMult)
  );
  lines.push({
    id: "local_transport_setup",
    label: "Local transport setup (OV chip, bike deposit — planning estimate)",
    amountEur: localTransport,
  });
  sub += localTransport;

  if (input.setupMoveTravel) {
    const m = roundEur(1240 * planning.setupTravelMult * friction);
    lines.push({
      id: "move_travel",
      label: "Travel & relocation (planning lump)",
      amountEur: m,
      note: "Flights, shipping, temporary housing friction — not a quote.",
    });
    sub += m;
  }

  let adminRaw = SETUP_PLANNING.adminLightBaseEur + SETUP_PLANNING.adminLightPerAdultEur * adults;
  if (input.setupVisaAdminHeavy) {
    adminRaw += planning.setupAdminHeavyAddonEur;
  }
  const admin = roundEur(adminRaw * friction);
  lines.push({
    id: "admin",
    label: input.setupVisaAdminHeavy
      ? "Visa / admin / documents (heavier path — planning estimate)"
      : "Visa / admin / documents (lighter path — planning estimate)",
    amountEur: admin,
    note: input.setupVisaAdminHeavy ? "Optional line: adds visa-heavy admin reserve." : undefined,
  });
  sub += admin;

  if (input.setupChildcareSchoolRegistration) {
    const reg =
      children > 0
        ? roundEur((395 + children * 195 + adults * 42) * (0.92 + 0.08 * planning.optionalExtrasMult) * friction)
        : roundEur((265 + adults * 48) * friction);
    lines.push({
      id: "childcare_school_registration",
      label:
        children > 0
          ? "Childcare / school registration & starter reserve (optional line)"
          : "School search / registration reserve (optional line)",
      amountEur: reg,
      note: "Placeholder-style lump — waitlists, deposits, materials; not tuition.",
    });
    sub += reg;
  }

  if (input.setupPetRelocation && input.includePet) {
    const pr = roundEur(395 * friction * (0.95 + 0.05 * planning.setupTravelMult));
    lines.push({
      id: "pet_relocation",
      label: "Pet relocation / registration reserve (optional line)",
      amountEur: pr,
      note: "Planning estimate — vet paperwork and transport vary.",
    });
    sub += pr;
  }

  if (input.setupShortStayOverlap) {
    const ov = roundEur(rent * planning.shortStayOverlapRentFraction);
    lines.push({
      id: "short_stay_overlap",
      label: "Short-stay overlap vs long lease (planning estimate)",
      amountEur: ov,
      note: `Roughly ${Math.round(planning.shortStayOverlapRentFraction * 100)}% of reference rent as overlap reserve.`,
    });
    sub += ov;
  }

  const contingency = roundEur(
    Math.max(520, sub * SETUP_PLANNING.contingencyFraction * 1.15) * friction
  );
  lines.push({
    id: "contingency",
    label: "Contingency buffer (setup — planning estimate)",
    amountEur: contingency,
    note: "One-time cushion on move-in — not mixed into monthly rent bands.",
  });
  sub += contingency;

  const totalEur = sub;
  const monthlyNoHousing = estimateMonthlyLivingCosts(input, 0);
  const monthlyOut = rent + monthlyNoHousing.subtotalExcludingHousingEur;
  const firstMonthCashEur = totalEur + monthlyOut;
  const savingsBufferEur = totalEur + monthlyOut * 2.2;
  return {
    lines,
    totalEur,
    firstMonthCashEur,
    savingsBufferEur,
  };
}

export function landlordCheckEur(gross: number, rent: number, mult: RaLandlordRule): RaLandlordRuleCheck {
  const need = rent * mult;
  const passes = gross >= need - 0.5;
  let status: RaLandlordScreenStatus = "fail";
  if (gross >= need * 1.02) status = "pass";
  else if (gross >= need * 0.98) status = "borderline";
  return {
    multiplier: mult,
    status,
    requiredGrossMonthlyEur: roundEur(need),
    passes,
  };
}

export function estimateLandlordScreening(grossMonthly: number, rent: number, selected: RaLandlordRule): LandlordScreeningResult {
  const checks = LANDLORD_RULES.map((m) => landlordCheckEur(grossMonthly, rent, m));
  return { checks, selectedMultiplier: selected };
}

/**
 * Affordable rent from income after non-rent recurring, buffers, landlord cap, competitiveness.
 * Ordering: comfortable ≤ essential ≤ balanced ≤ stretch.
 */
export function estimateAffordableRent(
  netMonthly: number,
  grossMonthly: number,
  nonRentMonthlyEur: number,
  fixedObligationsEur: number,
  landlordMult: RaLandlordRule,
  competitivenessMod: number
): AffordableRentBands {
  const landlordCap =
    grossMonthly > 0 && Number.isFinite(grossMonthly) ? grossMonthly / landlordMult : Number.POSITIVE_INFINITY;

  function bandRaw(key: keyof typeof AFFORDABILITY_BAND_PARAMS): number {
    const b = AFFORDABILITY_BAND_PARAMS[key];
    const buf = Math.max(b.bufferFlatEur, netMonthly * b.bufferShareNet);
    const room = Math.max(0, netMonthly - nonRentMonthlyEur - fixedObligationsEur - buf);
    return Math.min(room, netMonthly * b.netRentShareCap, landlordCap) * competitivenessMod;
  }

  return {
    comfortableMaxRentEur: bandRaw("comfortable"),
    essentialMaxRentEur: bandRaw("essential"),
    balancedMaxRentEur: bandRaw("balanced"),
    stretchMaxRentEur: bandRaw("stretch"),
    recommendedMaxRentEur: bandRaw("balanced"),
    safeMaxRentEur: bandRaw("comfortable"),
  };
}

export function affordableBandsToMaxRentBand(b: AffordableRentBands): RaMaxRentBand {
  return {
    comfortableEur: roundEur(b.comfortableMaxRentEur),
    essentialEur: roundEur(b.essentialMaxRentEur),
    balancedEur: roundEur(b.balancedMaxRentEur),
    stretchEur: roundEur(b.stretchMaxRentEur),
    recommendedEur: roundEur(b.recommendedMaxRentEur),
  };
}

function affordabilityStatus(rent: number, rec: number, stretch: number): RaAffordabilityStatus {
  if (rent <= rec * 0.88) return "comfortable";
  if (rent <= rec) return "acceptable";
  if (rent <= stretch * 1.03) return "stretch";
  return "risky";
}

export function estimateSalaryNeededForRent(
  input: RentAffordabilityScenarioInput,
  rent: number,
  nonRentMonthlyEur: number,
  fixedObligationsEur: number
): SalaryNeededForRentResult {
  const p = salaryBridgeParamsFromScenario(input);
  const rulingForTargets = input.rulingAssumption;
  const rentC = Math.max(0, rent);
  const g3 = rentC * 3;
  const g35 = rentC * 3.5;
  const g4 = rentC * 4;
  const landlordFloor = rentC * input.landlordRuleMultiplier;
  const recurringNeed = rentC + nonRentMonthlyEur + fixedObligationsEur;
  const netNeed = recurringNeed + Math.max(320, recurringNeed * 0.09);
  const lifestyleGross = grossMonthlyFromNetWithRulingAssumption(netNeed, p, rulingForTargets);
  const recommendedGrossMonthlyEur = Math.max(landlordFloor, lifestyleGross);
  const st = SALARY_TARGET_COEFFICIENTS;
  const essentialNet = recurringNeed * st.essential.monthlyMult + st.essential.fixedAddEur;
  const balancedNet = recurringNeed * st.balanced.monthlyMult + st.balanced.fixedAddEur;
  const comfortableNet = recurringNeed * st.comfortable.monthlyMult + st.comfortable.fixedAddEur;
  return {
    grossSalaryNeededAt3xEur: g3,
    grossSalaryNeededAt35xEur: g35,
    grossSalaryNeededAt4xEur: g4,
    recommendedGrossMonthlyEur,
    essentialNetMonthlyToLiveEur: essentialNet,
    balancedNetMonthlyToLiveEur: balancedNet,
    comfortableNetMonthlyToLiveEur: comfortableNet,
  };
}

function buildInsights(params: {
  monthly: MonthlyLivingCostsResult;
  grossMonthly: number;
  screeningGrossMonthly: number;
  rentCompare: number | null;
  landlordMult: RaLandlordRule;
  ruling: RentAffordabilityScenarioInput["rulingAssumption"];
  childcareEur: number;
  commuterSavingEur: number | null;
}): RentAffordabilityInsights {
  const modelLines = modelLinesOnly(params.monthly);
  const sorted = [...modelLines].sort((a, b) => b.amountEur - a.amountEur);
  const top = sorted[0];
  const biggestCostDriver = top
    ? `"${top.label}" is the largest non-rent line (~€${Math.round(top.amountEur).toLocaleString("en-NL")}/mo in this model).`
    : "Non-rent baseline drives affordability before rent is layered in.";

  const landlordIssue =
    params.rentCompare != null &&
    params.rentCompare > 0 &&
    !landlordCheckEur(params.screeningGrossMonthly, params.rentCompare, params.landlordMult).passes
      ? "Budget may work but landlord screening can still fail: many listings screen on gross ×3–×4 and may discount variable/temporary income."
      : null;

  const rulingImpact =
    params.ruling === "yes"
      ? "30% ruling assumed on payroll — net is higher at the same gross; without it, the same gross yields less net and lower affordable rent."
      : params.ruling === "maybe"
        ? `"Maybe" ruling blends ruled and unruled nets — treat bands as wide planning brackets, not eligibility.`
        : null;

  const childcareImpact =
    params.childcareEur > 80
      ? `Childcare adds ~€${Math.round(params.childcareEur).toLocaleString("en-NL")}/mo in this scenario — real fees and hours vary widely.`
      : null;

  const commuterBeltOpportunity =
    params.commuterSavingEur != null && params.commuterSavingEur > 35
      ? `Commuter-band rent in this model frees ~€${Math.round(params.commuterSavingEur).toLocaleString("en-NL")}/mo vs your current neighborhood band at the same housing mode (planning only).`
      : null;

  return {
    biggestCostDriver,
    landlordIssue,
    reduceCosts:
      "Lower neighborhood tier, share housing, trim subscriptions and car costs, or shift childcare intensity — rent is only one line in landlord screening.",
    monthlyVsSetup:
      "Monthly affordability is recurring cash flow. Setup is mostly one-off timing (deposit, first month, furniture). Do not mix them when comparing listings.",
    childcareImpact,
    rulingImpact,
    commuterBeltOpportunity,
  };
}

/** Core payload plus landlord comparison without ruling (adapter maps bands → `RaComputation.maxRent`). */
export type RentAffordabilityCoreResult = Omit<RentAffordabilityEngineResult, "scenarios"> & {
  maxRentWithoutRulingSameGross?: RaMaxRentBand;
};

/**
 * Core evaluation — no scenario rows (avoids import cycles with `scenarios.ts`).
 */
export function evaluateRentAffordabilityCore(input: RentAffordabilityScenarioInput): RentAffordabilityCoreResult | null {
  const col = raCityToColCity(input.city);
  const p = salaryBridgeParamsFromScenario(input);
  const inc = resolveScenarioIncome(input);
  if (input.toolMode === "max_rent" && inc.netMonthly <= 0) return null;

  const monthlyNoRent = estimateMonthlyLivingCosts(input, 0);
  const nonRentModel = modelNonRentTotalEur(monthlyNoRent);
  const userFixed = userFixedExcludingChildcareEur(input);
  const nonRentForFormula = nonRentModel + userFixed;

  const modelCold = modelRentColdEur(input);
  const effectiveRent = effectiveMonthlyRentEur(input, modelCold);
  const comp = competitivenessModerationFactor(input.city, input.neighborhoodBand);

  const bandsRaw = estimateAffordableRent(
    inc.netMonthly,
    inc.grossMonthly,
    nonRentForFormula,
    0,
    input.landlordRuleMultiplier,
    comp
  );
  const maxRentBand = affordableBandsToMaxRentBand(bandsRaw);

  let maxRentWithoutRulingSameGross: RaMaxRentBand | undefined;
  let incomeWithoutRuling: RentAffordabilityEngineResult["incomeWithoutRuling"];
  if ((input.rulingAssumption === "yes" || input.rulingAssumption === "maybe") && input.incomeBasis === "gross") {
    const nNoRule = netMonthlyFromGrossMonthly(inc.grossMonthly, p, false);
    if (nNoRule) {
      const bandsNo = estimateAffordableRent(
        nNoRule.netMonthly,
        inc.grossMonthly,
        nonRentForFormula,
        0,
        input.landlordRuleMultiplier,
        comp
      );
      maxRentWithoutRulingSameGross = affordableBandsToMaxRentBand(bandsNo);
      incomeWithoutRuling = {
        netMonthly: roundEur(nNoRule.netMonthly),
        grossMonthly: roundEur(inc.grossMonthly),
      };
    }
  }

  const rentAnchor =
    input.toolMode === "salary_for_rent" && input.targetRentEur > 0
      ? effectiveMonthlyRentEur({ ...input, rentMode: "target" }, modelCold)
      : maxRentBand.recommendedEur;
  const recurringForSalary = nonRentForFormula + Math.max(0, rentAnchor);
  const st = SALARY_TARGET_COEFFICIENTS;
  const salaryNetTargets: RaSalaryNetTargets = {
    essentialNetMonthlyEur: recurringForSalary * st.essential.monthlyMult + st.essential.fixedAddEur,
    balancedNetMonthlyEur: recurringForSalary * st.balanced.monthlyMult + st.balanced.fixedAddEur,
    comfortableNetMonthlyEur: recurringForSalary * st.comfortable.monthlyMult + st.comfortable.fixedAddEur,
  };
  const salaryGrossMonthlyTargets = {
    essential: grossMonthlyFromNetWithRulingAssumption(salaryNetTargets.essentialNetMonthlyEur, p, input.rulingAssumption),
    balanced: grossMonthlyFromNetWithRulingAssumption(salaryNetTargets.balancedNetMonthlyEur, p, input.rulingAssumption),
    comfortable: grossMonthlyFromNetWithRulingAssumption(salaryNetTargets.comfortableNetMonthlyEur, p, input.rulingAssumption),
  };

  const rentForCompare = input.rentMode === "target" && input.targetRentEur > 0 ? effectiveRent : null;
  const refRent = rentForCompare ?? maxRentBand.recommendedEur;
  const screeningGrossBeforeBonus = input.landlordBonusCounts
    ? inc.grossMonthly
    : Math.max(0, inc.grossMonthly - input.bonusAnnual / 12);
  const contractScreeningMult =
    input.contractProfile === "both_permanent"
      ? 1
      : input.contractProfile === "one_permanent_one_temporary"
        ? 0.92
        : 0.84;
  const screeningGross =
    screeningGrossBeforeBonus * contractScreeningMult * input.landlordForeignIncomeAcceptedShare;
  const landlordScreening = estimateLandlordScreening(screeningGross, refRent, input.landlordRuleMultiplier);

  let salaryNeededForRent: SalaryNeededForRentResult | undefined;
  let reverse: RaReverseSalary | undefined;
  if (input.toolMode === "salary_for_rent" && input.targetRentEur > 0) {
    const rentT = effectiveMonthlyRentEur({ ...input, rentMode: "target", targetRentEur: input.targetRentEur }, modelCold);
    salaryNeededForRent = estimateSalaryNeededForRent(input, rentT, nonRentForFormula, 0);
    const landlordFloor = rentT * input.landlordRuleMultiplier;
    const recurringNeed = rentT + nonRentForFormula;
    const netNeed = recurringNeed + Math.max(320, recurringNeed * 0.09);
    const lifestyleGross = grossMonthlyFromNetWithRulingAssumption(netNeed, p, input.rulingAssumption);
    const requiredGross = Math.max(landlordFloor, lifestyleGross);
    const netAt = netMonthlyFromGrossWithRulingAssumption(requiredGross, p, input.rulingAssumption);
    const comfortableAfter = (netAt?.netMonthly ?? 0) - rentT - nonRentForFormula;
    reverse = {
      requiredGrossMonthlyEur: roundEur(requiredGross),
      requiredNetMonthlyPlanningEur: roundEur(netAt?.netMonthly ?? netNeed),
      landlordFloorGrossMonthlyEur: roundEur(landlordFloor),
      lifestyleGrossMonthlyEur: roundEur(lifestyleGross),
      comfortableNetAfterRentEur: roundEur(comfortableAfter),
    };
  }

  const remainingAfterRentEur = inc.netMonthly - refRent - nonRentForFormula;
  let affordabilityStatusResult: RaAffordabilityStatus | null = null;
  if (rentForCompare != null && rentForCompare > 0) {
    affordabilityStatusResult = affordabilityStatus(rentForCompare, maxRentBand.recommendedEur, maxRentBand.stretchEur);
  }

  const setup = estimateSetupCosts(input, refRent, col);

  const monthlyWithRent = estimateMonthlyLivingCosts(input, refRent);

  const childcareEur =
    monthlyNoRent.lines.find((l) => l.id === "childcare")?.amountEur ?? Math.max(0, input.fixedChildcare);

  const commuterInput: RentAffordabilityScenarioInput = {
    ...input,
    neighborhoodBand: "commuter_belt",
  };
  const effCommuter = effectiveMonthlyRentEur(commuterInput, modelRentColdEur(commuterInput));
  const commuterSavingEur =
    input.neighborhoodBand !== "commuter_belt" ? Math.max(0, effectiveRent - effCommuter) : null;

  const warnings: string[] = [];
  const disclaimers: string[] = [
    "Planning-only model — not a quote, not tax or legal advice. Confirm rent, fees, and payroll with listings and professionals.",
  ];
  if (input.rulingAssumption !== "no") {
    disclaimers.push(
      "30% ruling here is a planning assumption only. It does not confirm legal eligibility, employer approval, payroll application, or final effective percentage."
    );
  }
  if (inc.indicativeNote) warnings.push(inc.indicativeNote);
  if (!input.landlordBonusCounts) {
    warnings.push("Landlord screening excludes bonus/variable pay from usable gross.");
  }
  if (input.contractProfile !== "both_permanent") {
    warnings.push(
      "Landlord screening applies a conservative contract haircut. Some agencies/landlords may be stricter."
    );
  }
  if (input.landlordForeignIncomeAcceptedShare < 1) {
    warnings.push("Foreign income is only partially counted for landlord screening in this run.");
  }

  const insights = buildInsights({
    monthly: monthlyNoRent,
    grossMonthly: inc.grossMonthly,
    screeningGrossMonthly: screeningGross,
    rentCompare: rentForCompare,
    landlordMult: input.landlordRuleMultiplier,
    ruling: input.rulingAssumption,
    childcareEur,
    commuterSavingEur,
  });

  return {
    normalized: input,
    income: {
      netMonthly: roundEur(inc.netMonthly),
      grossMonthly: roundEur(inc.grossMonthly),
      grossAnnual: inc.grossAnnual,
      netFromGrossEstimate: inc.netFromGrossEstimate,
      grossFromNetEstimate: inc.grossFromNetEstimate,
    },
    incomeWithoutRuling,
    monthlyLiving: {
      ...monthlyWithRent,
      lines: monthlyWithRent.lines.map((l) => ({ ...l, amountEur: roundEur(l.amountEur) })),
      subtotalExcludingHousingEur: roundEur(monthlyWithRent.subtotalExcludingHousingEur),
      totalIncludingHousingEur: roundEur(monthlyWithRent.totalIncludingHousingEur),
    },
    fixedObligationsEur: roundEur(userFixed),
    modelRentColdEur: roundEur(modelCold),
    effectiveRentEur: roundEur(effectiveRent),
    rentForComparisonEur: rentForCompare != null ? roundEur(rentForCompare) : null,
    landlordScreeningGrossUsedEur: roundEur(screeningGross),
    affordabilityBands: bandsRaw,
    landlordScreening,
    salaryTargetsNet: {
      essentialNetMonthlyEur: roundEur(salaryNetTargets.essentialNetMonthlyEur),
      balancedNetMonthlyEur: roundEur(salaryNetTargets.balancedNetMonthlyEur),
      comfortableNetMonthlyEur: roundEur(salaryNetTargets.comfortableNetMonthlyEur),
    },
    salaryTargetsGrossMonthly: {
      essential: roundEur(salaryGrossMonthlyTargets.essential),
      balanced: roundEur(salaryGrossMonthlyTargets.balanced),
      comfortable: roundEur(salaryGrossMonthlyTargets.comfortable),
    },
    salaryNeededForRent,
    reverse,
    remainingAfterRentEur: roundEur(remainingAfterRentEur),
    affordabilityStatus: affordabilityStatusResult,
    setup: {
      lines: setup.lines.map((l) => ({ ...l, amountEur: roundEur(l.amountEur) })),
      totalEur: roundEur(setup.totalEur),
      firstMonthCashEur: roundEur(setup.firstMonthCashEur),
      savingsBufferEur: roundEur(setup.savingsBufferEur),
    },
    insights,
    warnings,
    disclaimers,
    incomeIndicativeNote: inc.indicativeNote,
    maxRentWithoutRulingSameGross,
  };
}
