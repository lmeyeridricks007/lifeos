/** Extended arrival planner input model for task resolution and UI */
export type ArrivalPlannerInputExtended = {
  originCountry: string;
  arrivalDate?: string;
  addressStatus: "yes" | "soon" | "no";
  household: "solo" | "partner" | "kids";
  needBankingSoon: "yes" | "no";
  startingJobSoon?: boolean;
  thirtyRulingRelevant?: "unknown" | "likely" | "no";
  planningToDrive?: boolean;
  shippingHouseholdGoods?: boolean;
  documentPrepStatus?: "unknown" | "mostly-ready" | "missing-some-documents";
  familyAdminNeeded?: boolean;
};

export type RegionGroup = "eu-eea-swiss" | "non-eu";
export type DistanceCategory = "near" | "medium" | "far";

export type ArrivalPlannerCountry = {
  slug: string;
  label: string;
  regionGroup: RegionGroup;
  distanceCategory: DistanceCategory;
  countryDocumentSourceName?: string;
  countryDocumentSourceWebsite?: string;
  countryDocumentSourceSummary?: string;
  countryGuideHref?: string;
  typicalArrivalNotes?: string[];
};

export type TaskContact = {
  name: string;
  website: string;
  contactSummary: string;
};

export type ArrivalTaskGroup =
  | "must-do-early"
  | "first-two-weeks"
  | "first-month"
  | "country-follow-up"
  | "helpful-reminders";

export type ArrivalTaskRaw = {
  id: string;
  title: string;
  stage: string;
  group?: ArrivalTaskGroup;
  category: string;
  priority: "high" | "medium" | "low";
  audience: string[];
  what: string;
  why: string;
  timeline: string;
  dependsOn?: string[];
  whenVisible?: Record<string, string[]>;
  whoToContact: string[];
  officialLinks: string[];
  affiliateCategories: string[];
  tags: string[];
  /** Optional: documents typically needed for this step */
  documentsNeeded?: string[];
  /** Optional: where to do this (e.g. municipality, bank) */
  where?: string;
  /** Optional: cost indication */
  cost?: string;
  /** Optional: whether an appointment is typically needed */
  appointmentNeeded?: boolean;
  blockers?: string[];
  notes?: string;
  countrySpecificNote?: string;
  relatedGuideLinks?: string[];
  relatedToolLinks?: string[];
};

/** Resolved task with contact details and group for UI */
export type ArrivalTaskResolved = ArrivalTaskRaw & {
  contacts: Array<TaskContact>;
  group: ArrivalTaskGroup;
};
