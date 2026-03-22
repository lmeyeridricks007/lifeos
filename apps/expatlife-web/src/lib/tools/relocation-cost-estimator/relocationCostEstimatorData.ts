/**
 * Relocation Cost Estimator — data-driven cost ranges.
 * All values in euros. Update these to adjust estimates without changing logic.
 */

import type { CostRange } from "./types";
import type {
  RegionOfOrigin,
  VisaRoute,
  MovingMethod,
  TemporaryHousingType,
  CityInNetherlands,
  MonthlyRentBand,
  LifestyleLevel,
  PetsOption,
} from "./types";

/** Flights per person by region (one-way indicative). */
export const FLIGHTS_BY_REGION: Record<RegionOfOrigin, CostRange> = {
  "eu-eea": { min: 80, typical: 180, max: 350 },
  uk: { min: 100, typical: 220, max: 450 },
  "usa-canada": { min: 450, typical: 850, max: 1600 },
  "australia-nz": { min: 800, typical: 1400, max: 2500 },
  asia: { min: 450, typical: 750, max: 1400 },
  "middle-east": { min: 350, typical: 550, max: 1000 },
  africa: { min: 350, typical: 650, max: 1200 },
  "latin-america": { min: 550, typical: 900, max: 1700 },
  other: { min: 300, typical: 600, max: 1100 },
};

/** Visa/route paperwork indicative (one-off). */
export const VISA_ROUTE_COSTS: Record<VisaRoute, CostRange> = {
  "eu-eea-citizen": { min: 0, typical: 0, max: 50 },
  "highly-skilled-migrant": { min: 300, typical: 600, max: 1200 },
  "partner-family": { min: 200, typical: 500, max: 1000 },
  student: { min: 150, typical: 350, max: 700 },
  "self-employed": { min: 400, typical: 800, max: 1500 },
  "other-unsure": { min: 200, typical: 500, max: 1000 },
};

/** Moving/shipping by method (total household). */
export const MOVING_METHOD_COSTS: Record<MovingMethod, CostRange> = {
  "suitcases-only": { min: 0, typical: 50, max: 150 },
  "ship-few-boxes": { min: 200, typical: 450, max: 800 },
  "small-shipment": { min: 1500, typical: 3000, max: 5500 },
  "large-shipment": { min: 4000, typical: 7500, max: 14000 },
};

/** Temporary housing per week by type. */
export const TEMP_HOUSING_PER_WEEK: Record<TemporaryHousingType, CostRange> = {
  none: { min: 0, typical: 0, max: 0 },
  hotel: { min: 600, typical: 900, max: 1400 },
  airbnb: { min: 450, typical: 700, max: 1100 },
  "serviced-apartment": { min: 700, typical: 1100, max: 1800 },
  "temporary-rental": { min: 400, typical: 600, max: 950 },
};

/** Duration in weeks for temp housing. */
export const TEMP_DURATION_WEEKS: Record<string, number> = {
  "1": 1,
  "2": 2,
  "4": 4,
  "6-plus": 6,
};

/** Monthly rent baseline by band (for deposit and monthly estimate). */
export const MONTHLY_RENT_BASELINE: Record<MonthlyRentBand, CostRange> = {
  "under-1500": { min: 1100, typical: 1300, max: 1500 },
  "1500-2000": { min: 1500, typical: 1750, max: 2000 },
  "2000-2500": { min: 2000, typical: 2250, max: 2500 },
  "2500-3500": { min: 2500, typical: 3000, max: 3500 },
  "3500-plus": { min: 3500, typical: 4200, max: 5500 },
};

/** Deposit as multiple of monthly rent (e.g. 1–2 months). */
export const DEPOSIT_MULTIPLIER: CostRange = { min: 1, typical: 1.5, max: 2 };

/** City rent multiplier (applied to baseline; Amsterdam/Utrecht higher). */
export const CITY_RENT_MULTIPLIER: Record<CityInNetherlands, number> = {
  amsterdam: 1.35,
  rotterdam: 1.05,
  utrecht: 1.25,
  "the-hague": 1.1,
  eindhoven: 1.0,
  "other-flexible": 1.0,
};

/** Setup items one-off (euros). */
export const SETUP_COSTS = {
  municipalityRegistration: { min: 0, typical: 25, max: 50 },
  bankingSetup: { min: 0, typical: 0, max: 50 },
  insuranceSetup: { min: 0, typical: 0, max: 30 },
  utilitiesInternet: { min: 50, typical: 120, max: 200 },
  furnitureMinimal: { min: 300, typical: 600, max: 1000 },
  furnitureStandard: { min: 800, typical: 1500, max: 2500 },
  furnitureComfortable: { min: 1500, typical: 3000, max: 5000 },
  bike: { min: 80, typical: 180, max: 400 },
  initialGroceriesMinimal: { min: 150, typical: 250, max: 400 },
  initialGroceriesStandard: { min: 300, typical: 500, max: 800 },
  initialGroceriesComfortable: { min: 500, typical: 800, max: 1200 },
};

/** Monthly living components (per month, base for single). */
export const MONTHLY_LIVING_BASE = {
  groceries: { min: 250, typical: 350, max: 500 },
  transport: { min: 60, typical: 120, max: 200 },
  insuranceHealth: { min: 120, typical: 160, max: 220 },
  phoneInternet: { min: 35, typical: 55, max: 90 },
  childUpliftPerChild: { min: 200, typical: 350, max: 550 },
  householdMultiplierCouple: 1.5,
  householdMultiplierWithChildren: 1.85,
};

/** Pet one-off costs. */
export const PET_COSTS = {
  dogVetDocuments: { min: 80, typical: 150, max: 280 },
  catVetDocuments: { min: 60, typical: 120, max: 200 },
  crate: { min: 50, typical: 120, max: 250 },
  airlinePetFee: { min: 150, typical: 300, max: 500 },
  relocationServicePerPet: { min: 800, typical: 1500, max: 2800 },
};

/** Flight style multiplier. */
export const FLIGHT_STYLE_MULTIPLIER: Record<string, number> = {
  economy: 0.9,
  mixed: 1.0,
  "higher-flexibility": 1.25,
};

/** Urgency multiplier (last-minute / high season). */
export const URGENCY_MULTIPLIER: Record<string, number> = {
  flexible: 0.95,
  standard: 1.0,
  "last-minute": 1.2,
};
