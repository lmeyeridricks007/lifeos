import type { ArrivalPlannerInputExtended } from "./types";

/**
 * Generic default input for "common first days" result on initial load.
 */
export const ARRIVAL_GENERIC_DEFAULT_INPUT: ArrivalPlannerInputExtended = {
  originCountry: "south-africa",
  arrivalDate: undefined,
  addressStatus: "soon",
  household: "solo",
  needBankingSoon: "yes",
  startingJobSoon: false,
  thirtyRulingRelevant: "unknown",
  planningToDrive: false,
  shippingHouseholdGoods: false,
  documentPrepStatus: "unknown",
  familyAdminNeeded: false,
};
