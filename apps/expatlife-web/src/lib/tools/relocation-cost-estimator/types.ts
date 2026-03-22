/**
 * Relocation Cost Estimator — typed state and config.
 * All cost ranges are { min, typical, max } in euros.
 */

export type HouseholdType =
  | "single"
  | "couple"
  | "couple-1-child"
  | "couple-2-children"
  | "family-3-plus-children";

export type RegionOfOrigin =
  | "eu-eea"
  | "uk"
  | "usa-canada"
  | "australia-nz"
  | "asia"
  | "middle-east"
  | "africa"
  | "latin-america"
  | "other";

export type CityInNetherlands =
  | "amsterdam"
  | "rotterdam"
  | "utrecht"
  | "the-hague"
  | "eindhoven"
  | "other-flexible";

export type PetsOption = "none" | "dog" | "cat" | "dog-and-cat" | "multiple-pets";

export type VisaRoute =
  | "eu-eea-citizen"
  | "highly-skilled-migrant"
  | "partner-family"
  | "student"
  | "self-employed"
  | "other-unsure";

export type MovingMethod =
  | "suitcases-only"
  | "ship-few-boxes"
  | "small-shipment"
  | "large-shipment";

export type FlightStyle = "economy" | "mixed" | "higher-flexibility";

export type ArrivalUrgency = "flexible" | "standard" | "last-minute";

export type TemporaryHousingType =
  | "none"
  | "hotel"
  | "airbnb"
  | "serviced-apartment"
  | "temporary-rental";

export type TemporaryHousingDurationWeeks = "1" | "2" | "4" | "6-plus";

export type MonthlyRentBand =
  | "under-1500"
  | "1500-2000"
  | "2000-2500"
  | "2500-3500"
  | "3500-plus";

export type LifestyleLevel = "minimal" | "standard" | "comfortable";

export interface RelocationCostEstimatorInput {
  householdType: HouseholdType;
  adults: number;
  children: number;
  pets: PetsOption;
  regionOfOrigin: RegionOfOrigin;
  cityInNetherlands: CityInNetherlands;
  visaRoute: VisaRoute;
  movingMethod: MovingMethod;
  numberOfTravelers: number;
  flightStyle: FlightStyle;
  arrivalUrgency: ArrivalUrgency;
  temporaryHousingType: TemporaryHousingType;
  temporaryHousingDurationWeeks: TemporaryHousingDurationWeeks;
  monthlyLongTermRent: MonthlyRentBand;
  includeDeposit: boolean;
  includeFurniture: boolean;
  includeBike: boolean;
  includeUtilitiesSetup: boolean;
  includeBankingSetup: boolean;
  includeInsuranceSetup: boolean;
  includeMunicipalityRegistration: boolean;
  includePetCosts: boolean;
  lifestyleLevel: LifestyleLevel;
  /** Pet step: using relocation service for pets */
  petRelocationService: boolean;
  /** Pet step: likely pet travel by air */
  petTravelByAir: boolean;
  /** Pet step: number of pets (when pets !== none) */
  numberOfPets: number;
}

export interface CostRange {
  min: number;
  typical: number;
  max: number;
}

export interface BreakdownItem {
  label: string;
  range: CostRange;
  reason?: string;
}

export interface RelocationCostResult {
  oneTimeLow: number;
  oneTimeTypical: number;
  oneTimeHigh: number;
  monthlyLow: number;
  monthlyTypical: number;
  monthlyHigh: number;
  firstYearLow: number;
  firstYearTypical: number;
  firstYearHigh: number;
  firstMonthHeavyLow?: number;
  firstMonthHeavyHigh?: number;
  breakdown: {
    travelAndMove: BreakdownItem[];
    paperworkAndRoute: BreakdownItem[];
    housingSetup: BreakdownItem[];
    arrivalSetup: BreakdownItem[];
  };
}
