/**
 * Build initial arrival planner values from searchParams (record form).
 * Used by the server to pass identical initial state to the client and avoid hydration mismatch.
 */

export type ArrivalPlannerInitialValues = Partial<{
  from: string;
  arrivalDate: string;
  addressStatus: "yes" | "soon" | "no";
  household: "solo" | "partner" | "kids";
  needBankingSoon: "yes" | "no";
  startingJobSoon: boolean;
  thirtyRulingRelevant: "unknown" | "likely" | "no";
  planningToDrive: boolean;
  shippingHouseholdGoods: boolean;
  documentPrepStatus: "unknown" | "mostly-ready" | "missing-some-documents";
  familyAdminNeeded: boolean;
}>;

function isAddressStatus(value?: string): value is "yes" | "soon" | "no" {
  return value === "yes" || value === "soon" || value === "no";
}
function isHousehold(value?: string): value is "solo" | "partner" | "kids" {
  return value === "solo" || value === "partner" || value === "kids";
}
function isNeedBankingSoon(value?: string): value is "yes" | "no" {
  return value === "yes" || value === "no";
}

export function getArrivalPlannerInitialFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): ArrivalPlannerInitialValues {
  const out: ArrivalPlannerInitialValues = {};
  const get = (k: string): string | undefined => {
    const v = searchParams[k];
    if (v == null) return undefined;
    return Array.isArray(v) ? v[0] : v;
  };
  const from = get("from");
  const arrivalDate = get("arrivalDate");
  const addressStatus = get("addressStatus");
  const household = get("household");
  const needBankingSoon = get("needBankingSoon");
  const startingJobSoon = get("startingJobSoon");
  const thirtyRulingRelevant = get("thirtyRulingRelevant");
  const planningToDrive = get("planningToDrive");
  const shippingHouseholdGoods = get("shippingHouseholdGoods");
  const documentPrepStatus = get("documentPrepStatus");
  const familyAdminNeeded = get("familyAdminNeeded");

  if (from) out.from = from;
  if (arrivalDate) out.arrivalDate = arrivalDate;
  if (isAddressStatus(addressStatus)) out.addressStatus = addressStatus;
  if (isHousehold(household)) out.household = household;
  if (isNeedBankingSoon(needBankingSoon)) out.needBankingSoon = needBankingSoon;
  if (startingJobSoon === "true") out.startingJobSoon = true;
  if (startingJobSoon === "false") out.startingJobSoon = false;
  if (thirtyRulingRelevant === "unknown" || thirtyRulingRelevant === "likely" || thirtyRulingRelevant === "no")
    out.thirtyRulingRelevant = thirtyRulingRelevant;
  if (planningToDrive === "true") out.planningToDrive = true;
  if (planningToDrive === "false") out.planningToDrive = false;
  if (shippingHouseholdGoods === "true") out.shippingHouseholdGoods = true;
  if (shippingHouseholdGoods === "false") out.shippingHouseholdGoods = false;
  if (
    documentPrepStatus === "unknown" ||
    documentPrepStatus === "mostly-ready" ||
    documentPrepStatus === "missing-some-documents"
  )
    out.documentPrepStatus = documentPrepStatus;
  if (familyAdminNeeded === "true") out.familyAdminNeeded = true;
  if (familyAdminNeeded === "false") out.familyAdminNeeded = false;

  return out;
}
