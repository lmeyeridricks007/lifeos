import {
  CHILDCARE_PART_TIME_FACTOR,
  COL_PLANNING_USD_PER_EUR,
  DINING_MULT,
  INTERNATIONAL_SCHOOL_PLACEHOLDER_PER_CHILD,
  LIFESTYLE_ASSUMPTIONS,
  MOVING_TRAVEL_BASE,
  NEIGHBORHOOD_RENT_MULT,
  PET_MONTHLY,
  RULING_NET_TARGET_MULT,
  RULING_NOTE,
  SETUP_PLANNING,
  TRANSPORT_PROFILE_EUR,
  TRAVEL_STYLE_MULT,
} from "./assumptions";
import {
  DIRECTIONAL_NET_TO_GROSS_ANNUAL_WEDGE,
  MONTHLY_ADDITIONAL_INSURANCES_EUR,
  MONTHLY_CLOTHING_BUFFER_EUR,
  MONTHLY_MUNICIPALITY_EXPANDED_EUR,
  MONTHLY_PERSONAL_LIFESTYLE_EUR,
  SALARY_TARGET_COEFFICIENTS,
  SETUP_ADMIN_LIGHT,
  SETUP_ADMIN_WITH_VISA,
  SETUP_AGENCY_FEE_FRACTION_LONG,
  SETUP_AGENCY_FEE_FRACTION_SHORT,
  SETUP_BIKE_PURCHASE_EUR,
  SETUP_CONTINGENCY_FRACTION,
  SETUP_CONTINGENCY_MIN_EUR,
  SETUP_HOME_ESSENTIALS_EUR,
  SETUP_HOUSING_OVERLAP_RENT_FRACTION,
  SETUP_OV_CHIP_SETUP_EUR,
  shouldIncludeHousingOverlap,
} from "./model/planningCoefficients";
import { buildScenarioVariants } from "./model/scenarioGenerator";
import { getCityCostSeed, getRentMidForHousingMode } from "./seed/cityCostSeed";
import { MONTHLY_COMMS_SEED, MONTHLY_MISC_SUBSCRIPTIONS_SEED } from "./seed/recurringMiscSeed";
import { effectiveHouseholdCounts, roundEur, totalPeople } from "./formulas";
import type {
  ColComparisonRow,
  ColInput,
  ColInterpretation,
  ColLineItem,
  ColResult,
  ColSalaryTargets,
} from "./types";

function modelMonthlyRent(input: ColInput): number {
  const base = getRentMidForHousingMode(input.city, input.housingMode);
  const ls = LIFESTYLE_ASSUMPTIONS[input.lifestyle];
  const nm = NEIGHBORHOOD_RENT_MULT[input.neighborhood] ?? 1;
  return roundEur(base * nm * ls.rentMult);
}

function monthlyRentEur(input: ColInput): number {
  if (input.rentInputMode === "manual" && input.manualRentEur != null && input.manualRentEur > 0) {
    return roundEur(input.manualRentEur);
  }
  return modelMonthlyRent(input);
}

function transportMonthly(input: ColInput): number {
  const seed = getCityCostSeed(input.city);
  const tp = TRANSPORT_PROFILE_EUR[input.transportMode];
  const ns = input.includeNsCommuteSupplement ? Math.round(195 * tp.nsSupplementFactor) : 0;
  const park = input.includeParking ? seed.parkingPressureEur : 0;
  const g = seed.groceryIndexVsNational;
  const urban = seed.transportUrbanBaselineMid;

  switch (input.transportMode) {
    case "bike_pt":
      return roundEur(tp.ovCore + tp.bike + ns + urban * 0.22);
    case "pt_only":
      return roundEur(tp.ovCore + ns + urban * 0.15);
    case "car":
      return roundEur(tp.carCore + 52 * g + park + 35);
    case "hybrid":
      return roundEur(tp.ovCore + tp.bike + Math.round(tp.carCore * 0.55) + ns + Math.round(park * 0.9) + urban * 0.1);
    default:
      return roundEur(100);
  }
}

function childcareMonthly(input: ColInput, children: number): number {
  if (!input.childcareNeeded) return 0;
  /** If childcare is on but household has 0 children, assume 1 child for this line (common “we need daycare” planning before headcount is set). */
  const childrenInCare = children > 0 ? children : 1;
  const seed = getCityCostSeed(input.city);
  const tier = input.city === "amsterdam" || input.city === "utrecht" ? 1.09 : 1;
  const full = seed.childcareFullTimeMidPerChild * childrenInCare * tier;
  if (input.childcareIntensity === "part_time") return roundEur(full * CHILDCARE_PART_TIME_FACTOR);
  if (input.childcareIntensity === "full_time") return roundEur(full);
  return 0;
}

function relocationTravelOutOfPocketMult(support: ColInput["employerRelocationSupport"]): number {
  switch (support) {
    case "full":
      return 0;
    case "partial":
      return 0.45;
    default:
      return 1;
  }
}

function emergencyBufferMonths(input: ColInput, adults: number, children: number): number {
  let m = 2.15;
  if (adults >= 2) m += 0.65;
  if (children > 0) m += 0.55 + Math.min(0.55, children * 0.14);
  if (input.housingMode === "short_stay_serviced") m += 0.55;
  if (input.neighborhood === "center") m += 0.18;
  if (input.childcareNeeded && input.childcareIntensity === "full_time") m += 0.28;
  if (input.movingFrom === "far" || input.movingFrom === "us_canada") m += 0.22;
  if (input.employerRelocationSupport === "full") m -= 0.2;
  else if (input.employerRelocationSupport === "partial") m -= 0.08;
  return Math.min(5.35, Math.max(1.7, m));
}

function formatEurInline(n: number): string {
  return `€${n.toLocaleString("en-US")}`;
}

function topDriversFromItems(items: ColLineItem[], limit = 3): { id: string; label: string; amountEur: number }[] {
  return [...items]
    .filter((i) => i.amountEur > 0)
    .sort((a, b) => b.amountEur - a.amountEur)
    .slice(0, limit)
    .map((i) => ({ id: i.id, label: i.label, amountEur: i.amountEur }));
}

function buildTopThreeSummary(drivers: { label: string; amountEur: number }[]): string {
  if (!drivers.length) return "No positive monthly lines in this run — check inputs.";
  const parts = drivers.map((d, idx) => `${idx + 1}) ${d.label} (${formatEurInline(d.amountEur)})`);
  return `Largest monthly drivers right now: ${parts.join(" · ")}.`;
}

function buildChildcareContext(
  input: ColInput,
  childcareAmount: number,
  monthlyTotal: number,
  drivers: { id: string; label: string; amountEur: number }[]
): string | null {
  if (!input.childcareNeeded) return null;
  const { children } = effectiveHouseholdCounts(input);
  if (children <= 0 && childcareAmount > 0) {
    return "Childcare is on while the household shows no children — this line uses a one-child planning default. Pick a family preset or add children so the fee scales to your headcount.";
  }
  const inTop3 = drivers.some((d) => d.id === "childcare");
  const material = childcareAmount > monthlyTotal * 0.09 || inTop3;
  if (!material && childcareAmount === 0) {
    return "Childcare is enabled but the amount is still zero — check that part-time or full-time intensity is selected, or try Calculate again.";
  }
  if (!material) return null;
  return `Childcare is a major budget line in the Netherlands (waiting lists and hours vary). In this model it is shown explicitly in the monthly breakdown — confirm with actual centers, not this placeholder.`;
}

function buildInterpretation(
  monthlyItems: ColLineItem[],
  monthlyTotal: number,
  setupTotal: number,
  input: ColInput,
  childcareAmount: number
): ColInterpretation {
  const drivers = topDriversFromItems(monthlyItems, 3);
  const top = drivers[0];
  const biggestDriver = top
    ? `“${top.label}” is the largest monthly line at ${formatEurInline(top.amountEur)} — for many expats, rent and childcare dominate.`
    : "Review the monthly breakdown to see which categories drive your total.";

  const surprises =
    "Common surprises: rental competition and deposits, energy volatility, mandatory basic health insurance for everyone, municipal charges, childcare waiting lists, and international-school costs if you leave the public track.";

  const reduceCosts =
    "Stress-test: commuter belt vs center, smaller housing mode, car vs bike/OV, childcare hours, dining/travel tier, a cheaper city in the comparison table, and employer relocation support.";

  const oneTimeVsRecurring = `One-time setup (about ${formatEurInline(setupTotal)} here) is separate from recurring monthly (about ${formatEurInline(monthlyTotal)}). Deposit and overlap weeks hit cash first; rent and insurance repeat every month. Salary targets add headroom on top of recurring so you can save and absorb shocks — they are not the same as “monthly total.”`;

  return {
    biggestDriver,
    surprises,
    reduceCosts,
    oneTimeVsRecurring,
    topThreeDriversSummary: buildTopThreeSummary(drivers),
    childcareContext: buildChildcareContext(input, childcareAmount, monthlyTotal, drivers),
  };
}

function buildTrustUnderestimates(input: ColInput, monthlyTotal: number, childcareEur: number, overlapEur: number): string[] {
  const lines: string[] = [];
  if (input.childcareNeeded && childcareEur > 0) lines.push("Childcare: real fees, hours, and waiting lists can differ sharply from this placeholder.");
  if (input.neighborhood === "center") lines.push("Rental competition: prime areas often mean higher rent and more cash up front than the median band here.");
  lines.push("Energy & utilities: market and home efficiency move yearly — treat our utilities line as directional.");
  lines.push("Municipal & local charges: waste, water, and gemeente costs vary by address — confirm locally.");
  if (input.schooling === "international_placeholder") lines.push("International schooling: the monthly reserve is not a tuition quote.");
  if (overlapEur > 0) lines.push("Temporary housing overlap: many expats pay short-stay and long-lease rent at the same time for a few weeks — we model a slice of that risk.");
  if (input.housingMode === "short_stay_serviced") lines.push("Short-stay housing: nightly rates swing with season — compare real listings.");
  return lines;
}

function buildNetSalaryComparisonInsight(input: ColInput, targets: ColSalaryTargets | null): string | null {
  if (!input.showSalaryComparison || input.comparisonNetMonthly == null || input.comparisonNetMonthly <= 0 || !targets) {
    return null;
  }
  const n = input.comparisonNetMonthly;
  const e = targets.essentialNetMonthlyEur;
  const b = targets.balancedNetMonthlyEur;
  const c = targets.comfortableNetMonthlyEur;
  if (n < e) {
    return `Your entered net (${formatEurInline(n)}) sits below the essential band (${formatEurInline(e)}). That leaves almost no margin for shocks — negotiate up, trim fixed costs, or validate assumptions before you rely on this budget.`;
  }
  if (n < b) {
    return `Your entered net (${formatEurInline(n)}) falls between essential (${formatEurInline(e)}) and balanced (${formatEurInline(b)}). It can work with discipline, but savings and lifestyle headroom stay tight versus this model.`;
  }
  if (n < c) {
    return `Your entered net (${formatEurInline(n)}) sits between balanced (${formatEurInline(b)}) and comfortable (${formatEurInline(c)}). You likely have reasonable margin versus this estimate — still confirm with real rent and payroll.`;
  }
  return `Your entered net (${formatEurInline(n)}) is at or above the comfortable band (${formatEurInline(c)}). Versus this model you have stronger discretionary and savings headroom — still not a guarantee for your real tax and benefits situation.`;
}

export function computeCostOfLiving(input: ColInput): ColResult {
  const { adults, children } = effectiveHouseholdCounts(input);
  const people = totalPeople(adults, children);
  const seed = getCityCostSeed(input.city);
  const ls = LIFESTYLE_ASSUMPTIONS[input.lifestyle];

  const rent = monthlyRentEur(input);

  const utilities = roundEur(
    seed.utilitiesMonthlyMidTwoPerson * Math.min(1.42, 0.64 + 0.23 * people) +
      (input.neighborhood === "center" ? 18 : 0) +
      (input.housingMode === "apartment_3bed_family" ? 44 : 0)
  );

  const groceries = roundEur(
    (adults * seed.groceriesPerAdultMid + children * seed.groceriesPerChildMid) * ls.discretionaryMult
  );

  const healthInsurance = roundEur(adults * seed.healthInsuranceAdultMid + children * seed.healthInsuranceChildMid);

  const transport = transportMonthly(input);

  const mobileInternet = roundEur(
    MONTHLY_COMMS_SEED.singleAdultBaseEur + (adults > 1 ? MONTHLY_COMMS_SEED.secondAdultIncrementEur : 0)
  );

  const childcareCalc = childcareMonthly(input, children);

  const municipalityExpanded = roundEur(
    MONTHLY_MUNICIPALITY_EXPANDED_EUR.perAdult * adults +
      MONTHLY_MUNICIPALITY_EXPANDED_EUR.perChild * children +
      (input.neighborhood === "center" ? MONTHLY_MUNICIPALITY_EXPANDED_EUR.centerPremium : 0) +
      (input.housingMode === "apartment_3bed_family" ? MONTHLY_MUNICIPALITY_EXPANDED_EUR.familyHousingPremium : 0)
  );

  const diningBase =
    adults * seed.leisureBaselinePerAdultMid * ls.discretionaryMult +
    children * seed.leisureBaselinePerAdultMid * 0.35 * ls.discretionaryMult;
  const diningLeisure = roundEur(diningBase * DINING_MULT[input.diningLevel] * TRAVEL_STYLE_MULT[input.travelStyle]);

  const personalLifestyle = roundEur(
    adults * (MONTHLY_PERSONAL_LIFESTYLE_EUR.perAdultBase + MONTHLY_PERSONAL_LIFESTYLE_EUR.perAdultLifestyleBoost[input.lifestyle]) +
      children * MONTHLY_PERSONAL_LIFESTYLE_EUR.perChild[input.lifestyle]
  );

  const subscriptionsMisc = roundEur(
    MONTHLY_MISC_SUBSCRIPTIONS_SEED.perAdultEur * adults +
      MONTHLY_MISC_SUBSCRIPTIONS_SEED.perChildEur * children +
      MONTHLY_MISC_SUBSCRIPTIONS_SEED.householdBaseEur
  );

  const additionalInsurances = roundEur(
    MONTHLY_ADDITIONAL_INSURANCES_EUR.householdFloor +
      MONTHLY_ADDITIONAL_INSURANCES_EUR.perAdult * adults +
      MONTHLY_ADDITIONAL_INSURANCES_EUR.perChild * children
  );

  const clothingBuffer = roundEur(
    (MONTHLY_CLOTHING_BUFFER_EUR.perAdult * adults + MONTHLY_CLOTHING_BUFFER_EUR.perChild * children) *
      MONTHLY_CLOTHING_BUFFER_EUR.lifestyleMult[input.lifestyle]
  );

  const schoolExtra =
    input.schooling === "international_placeholder" && children > 0
      ? roundEur(INTERNATIONAL_SCHOOL_PLACEHOLDER_PER_CHILD * children)
      : 0;

  const petCost = input.pet ? PET_MONTHLY : 0;

  const childcareLine: ColLineItem | null = input.childcareNeeded
    ? {
        id: "childcare",
        label: "Childcare (indicative)",
        amountEur: childcareCalc,
        recurring: true,
        group: "core",
        displayOrder: 50,
        whyItMatters:
          "Often one of the largest lines for families; fees and waiting lists vary by city and provider — not a quote.",
        note:
          children <= 0
            ? "No children in household — scaled as 1 child in care (planning default). Add children or a family preset to match your size."
            : input.childcareIntensity === "part_time"
              ? "Part-time daycare placeholder — confirm days/hours with centers."
              : "Full-time daycare placeholder — confirm with centers.",
      }
    : null;

  const monthlyItems: ColLineItem[] = [
    {
      id: "rent",
      label: "Rent / housing",
      amountEur: rent,
      recurring: true,
      group: "core",
      displayOrder: 10,
      whyItMatters: "Usually the dominant monthly line; model uses city + housing mode + neighborhood band.",
      note: input.rentInputMode === "manual" ? "Using your entered rent." : undefined,
    },
    {
      id: "utilities",
      label: "Utilities (energy, water, local charges)",
      amountEur: utilities,
      recurring: true,
      group: "core",
      displayOrder: 20,
      whyItMatters: "Volatile with tariffs and home efficiency — directional, not a year-ahead quote.",
    },
    {
      id: "groceries",
      label: "Groceries & household",
      amountEur: groceries,
      recurring: true,
      group: "core",
      displayOrder: 30,
      whyItMatters: "Scales with household size and lifestyle tier.",
    },
    {
      id: "health",
      label: "Health insurance (basic)",
      amountEur: healthInsurance,
      recurring: true,
      group: "core",
      displayOrder: 40,
      whyItMatters: "Mandatory basic cover for residents; child premiums differ by insurer — model is simplified.",
    },
    ...(childcareLine ? [childcareLine] : []),
    {
      id: "transport",
      label: "Transport",
      amountEur: transport,
      recurring: true,
      group: "living",
      displayOrder: 110,
      whyItMatters: "Bike+OV vs car changes the picture quickly; car includes higher fixed-ish monthly pressure in this model.",
    },
    {
      id: "mobile",
      label: "Mobile & internet",
      amountEur: mobileInternet,
      recurring: true,
      group: "living",
      displayOrder: 120,
      whyItMatters: "Typical SIM + home broadband planning slice.",
    },
    {
      id: "dining",
      label: "Dining & leisure",
      amountEur: diningLeisure,
      recurring: true,
      group: "living",
      displayOrder: 130,
      whyItMatters: "Scales with lifestyle, dining level, and travel style together.",
    },
    {
      id: "personal-lifestyle",
      label: "Personal & lifestyle",
      amountEur: personalLifestyle,
      recurring: true,
      group: "living",
      displayOrder: 140,
      whyItMatters: "Gym/sports, hobbies, casual coffee — bundled so the model stays readable.",
    },
    ...(petCost > 0
      ? [
          {
            id: "pet",
            label: "Pet costs (planning uplift)",
            amountEur: petCost,
            recurring: true,
            group: "living",
            displayOrder: 145,
            whyItMatters: "Food, insurance reserve, vet buffer — rough.",
          } as ColLineItem,
        ]
      : []),
    {
      id: "subscriptions",
      label: "Subscriptions & miscellaneous",
      amountEur: subscriptionsMisc,
      recurring: true,
      group: "living",
      displayOrder: 150,
      whyItMatters: "Streaming, cloud/software, media, small recurring services — not every subscription you actually carry.",
      note: "Includes streaming-style recurring; confirm your real stack.",
    },
    {
      id: "municipality",
      label: "Municipality taxes, waste & admin (planning slice)",
      amountEur: municipalityExpanded,
      recurring: true,
      group: "risk",
      displayOrder: 210,
      whyItMatters:
        "Bundles gemeente-style recurring pressure, waste/water-style charges, and light admin amortization — not your exact jaarrekening.",
    },
    {
      id: "extra-insurance",
      label: "Additional insurances (WA, contents, small risks)",
      amountEur: additionalInsurances,
      recurring: true,
      group: "risk",
      displayOrder: 220,
      whyItMatters: "Liability + contents + small products — planning band, not an insurer quote.",
    },
    {
      id: "clothing-buffer",
      label: "Clothing & replacement buffer",
      amountEur: clothingBuffer,
      recurring: true,
      group: "risk",
      displayOrder: 230,
      whyItMatters: "Seasonal clothes, shoes, household replenishment — easy to forget in spreadsheets.",
    },
    ...(schoolExtra > 0
      ? [
          {
            id: "schooling",
            label: "International / private schooling (placeholder reserve)",
            amountEur: schoolExtra,
            recurring: true,
            group: "core",
            displayOrder: 55,
            note: "Not tuition quotes — a planning placeholder only.",
            whyItMatters: "Real international school fees are highly specific.",
          } as ColLineItem,
        ]
      : []),
  ];

  const monthlyTotal = monthlyItems.reduce((s, i) => s + i.amountEur, 0);

  const depositMonths =
    input.housingMode === "short_stay_serviced"
      ? SETUP_PLANNING.depositMonthsShortStay
      : SETUP_PLANNING.depositMonthsLongLease;
  const deposit =
    input.includeDepositAndFirstMonth && input.housingMode !== "already_arranged"
      ? roundEur(rent * depositMonths)
      : 0;
  const firstMonthRent =
    input.includeDepositAndFirstMonth && input.housingMode !== "already_arranged" ? rent : 0;

  const furnitureSetup = input.includeFurnitureSetup
    ? roundEur(ls.furnitureBase * (0.78 + 0.065 * people))
    : roundEur(240 + 85 * people);

  const homeEssentialsPack = input.includeFurnitureSetup
    ? roundEur(SETUP_HOME_ESSENTIALS_EUR.withFurnitureToggle.base + SETUP_HOME_ESSENTIALS_EUR.withFurnitureToggle.perPerson * people)
    : roundEur(SETUP_HOME_ESSENTIALS_EUR.withoutFurnitureToggle.base + SETUP_HOME_ESSENTIALS_EUR.withoutFurnitureToggle.perPerson * people);

  const travel = MOVING_TRAVEL_BASE[input.movingFrom];
  const travelModelGross = roundEur(travel.base + travel.perPerson * people);
  const travelOopMult = relocationTravelOutOfPocketMult(input.employerRelocationSupport);
  const movingTravel = roundEur(travelModelGross * travelOopMult);
  const travelNote =
    input.employerRelocationSupport === "full"
      ? "Assumes employer covers main international relocation travel — €0 out-of-pocket for that slice in the model."
      : input.employerRelocationSupport === "partial"
        ? "Partial employer support: your share of travel/relocation is reduced in the model (confirm your contract)."
        : undefined;

  const overlapFraction = shouldIncludeHousingOverlap(input) ? SETUP_HOUSING_OVERLAP_RENT_FRACTION[input.movingFrom] : 0;
  const housingOverlap = overlapFraction > 0 ? roundEur(rent * overlapFraction) : 0;

  const adminDocuments = input.includeVisaAdminBudget
    ? roundEur(SETUP_ADMIN_WITH_VISA.base + SETUP_ADMIN_WITH_VISA.perAdult * adults)
    : roundEur(SETUP_ADMIN_LIGHT.base + SETUP_ADMIN_LIGHT.perAdult * adults);

  const bikeSetup = roundEur(SETUP_BIKE_PURCHASE_EUR.base + SETUP_BIKE_PURCHASE_EUR.perAdult * adults);
  const ovSetup = roundEur(SETUP_OV_CHIP_SETUP_EUR.base + SETUP_OV_CHIP_SETUP_EUR.perAdult * adults);

  const agencyFees =
    input.includeDepositAndFirstMonth && input.housingMode !== "already_arranged" && input.housingMode !== "short_stay_serviced"
      ? roundEur(rent * SETUP_AGENCY_FEE_FRACTION_LONG)
      : input.includeDepositAndFirstMonth
        ? roundEur(rent * SETUP_AGENCY_FEE_FRACTION_SHORT)
        : 0;

  const subtotalBeforeContingency =
    deposit +
    firstMonthRent +
    furnitureSetup +
    homeEssentialsPack +
    movingTravel +
    housingOverlap +
    bikeSetup +
    ovSetup +
    adminDocuments +
    agencyFees;

  const contingency = roundEur(
    Math.max(SETUP_CONTINGENCY_MIN_EUR, subtotalBeforeContingency * SETUP_CONTINGENCY_FRACTION) * seed.setupFrictionMult
  );

  const setupItems: ColLineItem[] = [
    ...(deposit > 0 ? [{ id: "deposit", label: "Rental deposit", amountEur: deposit, recurring: false, whyItMatters: "Often 1–2 months’ rent in cash before keys." } as ColLineItem] : []),
    ...(firstMonthRent > 0
      ? [
          {
            id: "first-rent",
            label: "First month rent (cash timing)",
            amountEur: firstMonthRent,
            recurring: false,
            whyItMatters: "Cash-flow timing alongside deposit — not double-counted against recurring rent in the monthly table.",
          } as ColLineItem,
        ]
      : []),
    {
      id: "furniture",
      label: "Furniture / home setup",
      amountEur: furnitureSetup,
      recurring: false,
      whyItMatters: "Larger pieces and basics when you are furnishing from scratch.",
    },
    {
      id: "home-essentials",
      label: "Home essentials starter pack",
      amountEur: homeEssentialsPack,
      recurring: false,
      whyItMatters: "Bedding, kitchen basics, cleaning starter — separate from big-ticket furniture.",
    },
    {
      id: "travel",
      label: "Travel / relocation to Netherlands",
      amountEur: movingTravel,
      recurring: false,
      note: travelNote,
      whyItMatters: "Flights/shipping-style international move — employer support reduces your share in the model when selected.",
    },
    ...(housingOverlap > 0
      ? [
          {
            id: "housing-overlap",
            label: "Temporary housing overlap (short-stay bridge)",
            amountEur: housingOverlap,
            recurring: false,
            whyItMatters: "Many expats overlap short-stay and long-lease rent; scaled from distance + monthly rent band.",
          } as ColLineItem,
        ]
      : []),
    {
      id: "bike-setup",
      label: "Bike, lock & cycling setup (one-time)",
      amountEur: bikeSetup,
      recurring: false,
      whyItMatters: "Very common NL arrival cost — model is indicative, not a shop quote.",
    },
    {
      id: "ov-setup",
      label: "OV-chipkaart & local transit setup (one-time)",
      amountEur: ovSetup,
      recurring: false,
      whyItMatters: "Card + initial load / deposits before monthly OV shows up in transport.",
    },
    {
      id: "admin",
      label: "Admin & documents (translations, legalization, registration friction)",
      amountEur: adminDocuments,
      recurring: false,
      whyItMatters: "Heavier when visa/admin toggle is on — still not every legal bill you might incur.",
    },
    ...(agencyFees > 0
      ? [
          {
            id: "agency",
            label: "Agency / contract fees (indicative)",
            amountEur: agencyFees,
            recurring: false,
            whyItMatters: "Highly variable — percentage-of-rent planning guess only.",
          } as ColLineItem,
        ]
      : []),
    {
      id: "contingency",
      label: "Contingency buffer (setup safety margin)",
      amountEur: contingency,
      recurring: false,
      whyItMatters: "Explicit margin on one-time setup so the subtotal is not brittle.",
    },
  ];

  const setupTotal = setupItems.reduce((s, i) => s + i.amountEur, 0);
  const firstMonthCash = roundEur(setupTotal + monthlyTotal);
  const bufMonths = emergencyBufferMonths(input, adults, children);
  const emergencyBuffer = roundEur(monthlyTotal * bufMonths);
  const savingsBufferBeforeMove = roundEur(setupTotal + emergencyBuffer);

  const rulingMult = RULING_NET_TARGET_MULT[input.rulingAssumption] ?? 1;
  const rulingNote = input.rulingAssumption === "no" ? null : RULING_NOTE;

  const st = SALARY_TARGET_COEFFICIENTS;
  const essentialRaw = roundEur((monthlyTotal * st.essential.monthlyMult + st.essential.fixedAddEur) * rulingMult);
  const balancedRaw = roundEur((monthlyTotal * st.balanced.monthlyMult + st.balanced.fixedAddEur) * rulingMult);
  const comfortableRaw = roundEur((monthlyTotal * st.comfortable.monthlyMult + st.comfortable.fixedAddEur) * rulingMult);

  const directionalGrossAnnual = Math.round((balancedRaw * 12) / DIRECTIONAL_NET_TO_GROSS_ANNUAL_WEDGE);

  const salaryTargets: ColSalaryTargets | null = input.showSalaryTargets
    ? {
        essentialNetMonthlyEur: essentialRaw,
        balancedNetMonthlyEur: balancedRaw,
        comfortableNetMonthlyEur: comfortableRaw,
        rulingNote,
        directionalGrossAnnualFromBalancedNetEur: directionalGrossAnnual,
      }
    : null;

  const recommendedNet = balancedRaw;
  const interpretation = buildInterpretation(monthlyItems, monthlyTotal, setupTotal, input, childcareCalc);
  const topMonthlyDrivers = topDriversFromItems(monthlyItems, 3);
  const trustUnderestimates = buildTrustUnderestimates(input, monthlyTotal, childcareCalc, housingOverlap);
  const netSalaryComparisonInsight = buildNetSalaryComparisonInsight(input, salaryTargets);

  return {
    monthly: { items: monthlyItems, totalEur: monthlyTotal },
    setup: { items: setupItems, totalEur: setupTotal },
    firstMonthCashEur: firstMonthCash,
    emergencyBufferEur: emergencyBuffer,
    emergencyBufferPlanningMonths: bufMonths,
    salaryTargets,
    recommendedNetSalaryMonthlyEur: recommendedNet,
    savingsBufferBeforeMoveEur: savingsBufferBeforeMove,
    interpretation,
    usdRate: COL_PLANNING_USD_PER_EUR,
    topMonthlyDrivers,
    trustUnderestimates,
    roughDirectionalGrossAnnualFromBalancedNetEur: salaryTargets ? salaryTargets.directionalGrossAnnualFromBalancedNetEur : null,
    netSalaryComparisonInsight,
  };
}

export function buildComparisonRows(baseInput: ColInput): ColComparisonRow[] {
  return buildScenarioVariants(baseInput).map((v) => ({
    id: v.id,
    label: v.label,
    input: v.input,
    result: computeCostOfLiving(v.input),
  }));
}

export const DEFAULT_COL_INPUT: ColInput = {
  city: "amsterdam",
  neighborhood: "outside",
  householdPreset: "single",
  adultsCount: 1,
  childrenCount: 0,
  housingMode: "apartment_1bed",
  rentInputMode: "model",
  manualRentEur: null,
  lifestyle: "balanced",
  diningLevel: "medium",
  travelStyle: "local",
  transportMode: "bike_pt",
  includeParking: false,
  includeNsCommuteSupplement: false,
  childcareNeeded: false,
  childcareIntensity: "none",
  schooling: "public_local",
  pet: false,
  movingFrom: "eu_nearby",
  employerRelocationSupport: "none",
  includeFurnitureSetup: true,
  includeDepositAndFirstMonth: true,
  includeVisaAdminBudget: true,
  showSalaryTargets: true,
  rulingAssumption: "no",
  currency: "eur",
  showSalaryComparison: false,
  comparisonNetMonthly: null,
  compareScenariosEnabled: false,
};
