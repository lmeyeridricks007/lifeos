/**
 * Relocation Cost Estimator — calculation logic.
 * Uses data from relocationCostEstimatorData to produce low/typical/high estimates.
 */

import type {
  RelocationCostEstimatorInput,
  RelocationCostResult,
  BreakdownItem,
  CostRange,
} from "./types";
import type { HouseholdType, PetsOption, TemporaryHousingDurationWeeks } from "./types";
import {
  FLIGHTS_BY_REGION,
  VISA_ROUTE_COSTS,
  MOVING_METHOD_COSTS,
  TEMP_HOUSING_PER_WEEK,
  TEMP_DURATION_WEEKS,
  MONTHLY_RENT_BASELINE,
  DEPOSIT_MULTIPLIER,
  CITY_RENT_MULTIPLIER,
  SETUP_COSTS,
  MONTHLY_LIVING_BASE,
  PET_COSTS,
  FLIGHT_STYLE_MULTIPLIER,
  URGENCY_MULTIPLIER,
} from "./relocationCostEstimatorData";

function scaleRange(r: CostRange, mult: number): CostRange {
  return {
    min: Math.round(r.min * mult),
    typical: Math.round(r.typical * mult),
    max: Math.round(r.max * mult),
  };
}

function addRanges(a: CostRange, b: CostRange): CostRange {
  return {
    min: a.min + b.min,
    typical: a.typical + b.typical,
    max: a.max + b.max,
  };
}

function rangeToItem(label: string, range: CostRange, reason?: string): BreakdownItem {
  return { label, range, reason };
}

export function getDefaultInput(): RelocationCostEstimatorInput {
  return {
    householdType: "single",
    adults: 1,
    children: 0,
    pets: "none",
    regionOfOrigin: "eu-eea",
    cityInNetherlands: "other-flexible",
    visaRoute: "eu-eea-citizen",
    movingMethod: "suitcases-only",
    numberOfTravelers: 1,
    flightStyle: "mixed",
    arrivalUrgency: "standard",
    temporaryHousingType: "none",
    temporaryHousingDurationWeeks: "1",
    monthlyLongTermRent: "1500-2000",
    includeDeposit: true,
    includeFurniture: true,
    includeBike: true,
    includeUtilitiesSetup: true,
    includeBankingSetup: true,
    includeInsuranceSetup: true,
    includeMunicipalityRegistration: true,
    includePetCosts: false,
    lifestyleLevel: "standard",
    petRelocationService: false,
    petTravelByAir: true,
    numberOfPets: 1,
  };
}

export function calculateRelocationCost(input: RelocationCostEstimatorInput): RelocationCostResult {
  const travelAndMove: BreakdownItem[] = [];
  const paperworkAndRoute: BreakdownItem[] = [];
  const housingSetup: BreakdownItem[] = [];
  const arrivalSetup: BreakdownItem[] = [];

  const flightMult = FLIGHT_STYLE_MULTIPLIER[input.flightStyle] ?? 1;
  const urgencyMult = URGENCY_MULTIPLIER[input.arrivalUrgency] ?? 1;
  const flightBase = FLIGHTS_BY_REGION[input.regionOfOrigin];
  const flightPerPerson = scaleRange(flightBase, flightMult * urgencyMult);
  const flightsTotal: CostRange = {
    min: flightPerPerson.min * input.numberOfTravelers,
    typical: flightPerPerson.typical * input.numberOfTravelers,
    max: flightPerPerson.max * input.numberOfTravelers,
  };
  travelAndMove.push(rangeToItem("Flights", flightsTotal, `${input.numberOfTravelers} traveller(s), ${input.regionOfOrigin}`));

  const shipping = MOVING_METHOD_COSTS[input.movingMethod];
  travelAndMove.push(rangeToItem("Shipping / luggage", shipping, input.movingMethod));

  let oneTimeTotal = addRanges(flightsTotal, shipping);

  const visaCost = VISA_ROUTE_COSTS[input.visaRoute];
  paperworkAndRoute.push(rangeToItem("Visa / permit estimate", visaCost, input.visaRoute));
  paperworkAndRoute.push(rangeToItem("Document prep (translations, etc.)", {
    min: 50,
    typical: 150,
    max: 400,
  }));
  oneTimeTotal = addRanges(oneTimeTotal, visaCost);
  oneTimeTotal = addRanges(oneTimeTotal, { min: 50, typical: 150, max: 400 });

  const tempType = input.temporaryHousingType;
  const tempPerWeek = TEMP_HOUSING_PER_WEEK[tempType];
  const weeks = TEMP_DURATION_WEEKS[input.temporaryHousingDurationWeeks] ?? 1;
  const tempTotal: CostRange =
    tempType === "none"
      ? { min: 0, typical: 0, max: 0 }
      : {
          min: tempPerWeek.min * weeks,
          typical: tempPerWeek.typical * weeks,
          max: tempPerWeek.max * weeks,
        };
  if (tempType !== "none") {
    housingSetup.push(rangeToItem("Temporary housing", tempTotal, `${tempType}, ${weeks} week(s)`));
    oneTimeTotal = addRanges(oneTimeTotal, tempTotal);
  }

  const rentBaseline = MONTHLY_RENT_BASELINE[input.monthlyLongTermRent];
  const cityMult = CITY_RENT_MULTIPLIER[input.cityInNetherlands];
  const rentAdjusted: CostRange = {
    min: Math.round(rentBaseline.min * cityMult),
    typical: Math.round(rentBaseline.typical * cityMult),
    max: Math.round(rentBaseline.max * cityMult),
  };

  if (input.includeDeposit) {
    const deposit: CostRange = {
      min: Math.round(rentAdjusted.min * DEPOSIT_MULTIPLIER.min),
      typical: Math.round(rentAdjusted.typical * DEPOSIT_MULTIPLIER.typical),
      max: Math.round(rentAdjusted.max * DEPOSIT_MULTIPLIER.max),
    };
    housingSetup.push(rangeToItem("Rent deposit", deposit, "Included because you selected deposit"));
    oneTimeTotal = addRanges(oneTimeTotal, deposit);
  }
  const firstRent = rentAdjusted;
  housingSetup.push(rangeToItem("First month rent", firstRent));
  oneTimeTotal = addRanges(oneTimeTotal, firstRent);

  if (input.includeMunicipalityRegistration) {
    arrivalSetup.push(rangeToItem("Municipality registration", SETUP_COSTS.municipalityRegistration));
    oneTimeTotal = addRanges(oneTimeTotal, SETUP_COSTS.municipalityRegistration);
  }
  if (input.includeBankingSetup) {
    arrivalSetup.push(rangeToItem("Banking setup", SETUP_COSTS.bankingSetup));
    oneTimeTotal = addRanges(oneTimeTotal, SETUP_COSTS.bankingSetup);
  }
  if (input.includeInsuranceSetup) {
    arrivalSetup.push(rangeToItem("Insurance setup", SETUP_COSTS.insuranceSetup));
    oneTimeTotal = addRanges(oneTimeTotal, SETUP_COSTS.insuranceSetup);
  }
  if (input.includeUtilitiesSetup) {
    arrivalSetup.push(rangeToItem("Utilities / internet setup", SETUP_COSTS.utilitiesInternet));
    oneTimeTotal = addRanges(oneTimeTotal, SETUP_COSTS.utilitiesInternet);
  }
  if (input.includeFurniture) {
    const key =
      input.lifestyleLevel === "minimal"
        ? "furnitureMinimal"
        : input.lifestyleLevel === "comfortable"
          ? "furnitureComfortable"
          : "furnitureStandard";
    const furniture = SETUP_COSTS[key as keyof typeof SETUP_COSTS] as CostRange;
    arrivalSetup.push(rangeToItem("Furniture / household basics", furniture, input.lifestyleLevel));
    oneTimeTotal = addRanges(oneTimeTotal, furniture);
  }
  if (input.includeBike) {
    arrivalSetup.push(rangeToItem("Bike purchase", SETUP_COSTS.bike));
    oneTimeTotal = addRanges(oneTimeTotal, SETUP_COSTS.bike);
  }
  const groceriesKey =
    input.lifestyleLevel === "minimal"
      ? "initialGroceriesMinimal"
      : input.lifestyleLevel === "comfortable"
        ? "initialGroceriesComfortable"
        : "initialGroceriesStandard";
  const groceries = SETUP_COSTS[groceriesKey as keyof typeof SETUP_COSTS] as CostRange;
  arrivalSetup.push(rangeToItem("Initial groceries / household shopping", groceries));
  oneTimeTotal = addRanges(oneTimeTotal, groceries);

  if (input.includePetCosts && input.pets !== "none") {
    const n = Math.max(1, input.numberOfPets);
    let petVet = PET_COSTS.dogVetDocuments;
    if (input.pets === "cat") petVet = PET_COSTS.catVetDocuments;
    else if (input.pets === "dog-and-cat" || input.pets === "multiple-pets")
      petVet = { min: petVet.min * 1.5, typical: petVet.typical * 1.5, max: petVet.max * 1.5 };
    travelAndMove.push(rangeToItem("Pet vet / documents", scaleRange(petVet, n)));
    oneTimeTotal = addRanges(oneTimeTotal, scaleRange(petVet, n));
    travelAndMove.push(rangeToItem("Pet crate", scaleRange(PET_COSTS.crate, n)));
    oneTimeTotal = addRanges(oneTimeTotal, scaleRange(PET_COSTS.crate, n));
    if (input.petTravelByAir) {
      const air = scaleRange(PET_COSTS.airlinePetFee, n);
      travelAndMove.push(rangeToItem("Airline pet fee", air));
      oneTimeTotal = addRanges(oneTimeTotal, air);
    }
    if (input.petRelocationService) {
      const reloc = scaleRange(PET_COSTS.relocationServicePerPet, n);
      travelAndMove.push(rangeToItem("Pet relocation service", reloc));
      oneTimeTotal = addRanges(oneTimeTotal, reloc);
    }
  }

  const monthlyRent = rentAdjusted;
  const householdMult =
    input.householdType === "single"
      ? 1
      : input.householdType === "couple"
        ? MONTHLY_LIVING_BASE.householdMultiplierCouple
        : MONTHLY_LIVING_BASE.householdMultiplierWithChildren;
  const groceriesMonthly = scaleRange(MONTHLY_LIVING_BASE.groceries, householdMult);
  const transportMonthly = MONTHLY_LIVING_BASE.transport;
  const insuranceMonthly = scaleRange(MONTHLY_LIVING_BASE.insuranceHealth, input.adults);
  const phoneMonthly = MONTHLY_LIVING_BASE.phoneInternet;
  const childUplift =
    input.children > 0
      ? {
          min: MONTHLY_LIVING_BASE.childUpliftPerChild.min * input.children,
          typical: MONTHLY_LIVING_BASE.childUpliftPerChild.typical * input.children,
          max: MONTHLY_LIVING_BASE.childUpliftPerChild.max * input.children,
        }
      : { min: 0, typical: 0, max: 0 };

  const monthlyTotal: CostRange = {
    min:
      monthlyRent.min +
      groceriesMonthly.min +
      transportMonthly.min +
      insuranceMonthly.min +
      phoneMonthly.min +
      childUplift.min,
    typical:
      monthlyRent.typical +
      groceriesMonthly.typical +
      transportMonthly.typical +
      insuranceMonthly.typical +
      phoneMonthly.typical +
      childUplift.typical,
    max:
      monthlyRent.max +
      groceriesMonthly.max +
      transportMonthly.max +
      insuranceMonthly.max +
      phoneMonthly.max +
      childUplift.max,
  };

  const firstYearLow = oneTimeTotal.min + monthlyTotal.min * 12;
  const firstYearTypical = oneTimeTotal.typical + monthlyTotal.typical * 12;
  const firstYearHigh = oneTimeTotal.max + monthlyTotal.max * 12;

  const firstMonthHeavyLow = oneTimeTotal.min + monthlyTotal.min;
  const firstMonthHeavyHigh = oneTimeTotal.max + monthlyTotal.max;

  return {
    oneTimeLow: oneTimeTotal.min,
    oneTimeTypical: oneTimeTotal.typical,
    oneTimeHigh: oneTimeTotal.max,
    monthlyLow: monthlyTotal.min,
    monthlyTypical: monthlyTotal.typical,
    monthlyHigh: monthlyTotal.max,
    firstYearLow,
    firstYearTypical,
    firstYearHigh,
    firstMonthHeavyLow,
    firstMonthHeavyHigh,
    breakdown: {
      travelAndMove,
      paperworkAndRoute,
      housingSetup,
      arrivalSetup,
    },
  };
}
