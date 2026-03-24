import type {
  ArrivalPlannerInputExtended,
  ArrivalTaskRaw,
  ArrivalTaskResolved,
  TaskContact,
  ArrivalTaskGroup,
} from "./types";

type TaskStore = Map<string, ArrivalTaskRaw>;
type ContactStore = Record<string, TaskContact>;

function matchesWhenVisible(
  whenVisible: Record<string, string[]> | undefined,
  input: ArrivalPlannerInputExtended
): boolean {
  if (!whenVisible) return true;
  for (const [key, allowed] of Object.entries(whenVisible)) {
    const value = (input as Record<string, string | boolean | undefined>)[
      key === "hasAddress" ? "addressStatus" : key
    ];
    if (value === undefined) continue;
    const str = String(value);
    if (!allowed.includes(str)) return false;
  }
  return true;
}

function isDrivingTaskId(id: string): boolean {
  return /driving|licence/.test(id);
}

export type ResolveTasksParams = {
  genericTasks: ArrivalTaskRaw[];
  overlayTasks: ArrivalTaskRaw[];
  regionOverlays: Record<string, string[]>;
  distanceOverlays: Record<string, string[]>;
  countryOverlays: Record<string, string[]>;
  conditionOverlays: Record<string, string[]>;
  contacts: ContactStore;
  regionGroup: string;
  distanceCategory: string;
};

/**
 * Build ordered, deduplicated task list from generic + region + distance + country + condition overlays.
 * Driving-related overlay tasks are only included when planningToDrive is true.
 */
export function resolveArrivalPlannerTasks(
  input: ArrivalPlannerInputExtended,
  params: ResolveTasksParams
): ArrivalTaskResolved[] {
  const {
    genericTasks,
    overlayTasks,
    regionOverlays,
    distanceOverlays,
    countryOverlays,
    conditionOverlays,
    contacts,
  } = params;

  const taskStore: TaskStore = new Map();
  for (const t of genericTasks) taskStore.set(t.id, t);
  for (const t of overlayTasks) taskStore.set(t.id, t);

  const regionGroup = params.regionGroup || "non-eu";
  const distanceCategory = params.distanceCategory || "far";

  const list: string[] = [];

  // 1. Generic tasks (filter by whenVisible)
  for (const t of genericTasks) {
    if (!matchesWhenVisible(t.whenVisible, input)) continue;
    list.push(t.id);
  }

  // 2. Region overlay
  const regionIds = regionOverlays[regionGroup] ?? [];
  for (const id of regionIds) {
    if (isDrivingTaskId(id) && !input.planningToDrive) continue;
    list.push(id);
  }

  // 3. Distance overlay
  const distanceIds = distanceOverlays[distanceCategory] ?? [];
  list.push(...distanceIds);

  // 4. Country overlay
  const origin = (input.originCountry || "").trim().toLowerCase().replace(/\s+/g, "-");
  const countryIds = origin ? (countryOverlays[origin] ?? []) : [];
  for (const id of countryIds) {
    if (isDrivingTaskId(id) && !input.planningToDrive) continue;
    list.push(id);
  }

  // 5. Condition overlays
  if (input.startingJobSoon) {
    list.push(...(conditionOverlays["startingJobSoon"] ?? []));
  }
  if (input.thirtyRulingRelevant === "likely") {
    list.push(...(conditionOverlays["thirtyRulingRelevant_likely"] ?? []));
  }
  if (input.needBankingSoon === "yes") {
    list.push(...(conditionOverlays["needBankingSoon_yes"] ?? []));
  }
  if (input.planningToDrive) {
    list.push(...(conditionOverlays["planningToDrive_true"] ?? []));
  }
  if (input.shippingHouseholdGoods) {
    list.push(...(conditionOverlays["shippingHouseholdGoods_true"] ?? []));
  }
  if (input.addressStatus === "no") {
    list.push(...(conditionOverlays["hasAddress_no"] ?? []));
  }
  if (input.addressStatus === "soon") {
    list.push(...(conditionOverlays["hasAddress_soon"] ?? []));
  }
  if (input.household === "kids") {
    list.push(...(conditionOverlays["household_kids"] ?? []));
  }

  // Dedupe preserving order
  const seen = new Set<string>();
  const orderedIds: string[] = [];
  for (const id of list) {
    if (seen.has(id)) continue;
    seen.add(id);
    orderedIds.push(id);
  }

  // Resolve to full tasks with contacts and group (action-based UI groups)
  const resolved: ArrivalTaskResolved[] = [];
  for (const id of orderedIds) {
    const raw = taskStore.get(id);
    if (!raw) continue;

    const taskContacts: TaskContact[] = (raw.whoToContact || [])
      .map((key) => contacts[key])
      .filter(Boolean);

    const group: ArrivalTaskGroup =
      raw.group ??
      (raw.tags.some((t) =>
          [
            "country",
            "south-africa",
            "india",
            "brazil",
            "mexico",
            "singapore",
            "japan",
            "south-korea",
            "turkey",
            "argentina",
            "chile",
            "uae",
            "guide",
            "united-states",
            "united-kingdom",
            "canada",
            "australia",
            "germany",
            "france",
            "spain",
            "italy",
            "switzerland",
            "sweden",
            "denmark",
            "norway",
            "ireland",
          ].includes(t)
        ) || raw.category === "guides"
        ? "country-follow-up"
        : raw.stage === "first-month"
          ? "first-month"
          : raw.stage === "first-week" && raw.priority === "high"
            ? "must-do-early"
            : raw.stage === "first-week" || raw.stage === "first-days"
              ? "first-two-weeks"
              : "first-month");

    resolved.push({
      ...raw,
      contacts: taskContacts,
      group,
    });
  }

  return resolved;
}

/** Build a short arrival-focused summary for the results block */
export function buildTaskResultSummary(
  input: ArrivalPlannerInputExtended,
  regionGroup: string,
  distanceCategory: string,
  countryLabel?: string
): string {
  const parts: string[] = [];
  if (countryLabel) {
    parts.push(`You're planning your arrival from ${countryLabel}.`);
  }
  if (distanceCategory === "far") {
    parts.push("Long-distance moves often benefit from a bit of buffer in the first week for admin and appointments.");
  }
  if (input.addressStatus === "no" || input.addressStatus === "soon") {
    parts.push("Some steps will wait until you have a stable address; the plan below reflects that.");
  }
  if (input.needBankingSoon === "yes") {
    parts.push("Banking is prioritised so salary and payments can flow as soon as possible.");
  }
  if (input.household === "kids") {
    parts.push("Family and school-related follow-up is included in your first-month steps.");
  }
  if (input.startingJobSoon) {
    parts.push("Registration, BSN and banking are ordered to support employer onboarding and first salary.");
  }
  if (!parts.length) {
    parts.push("Your plan is based on your answers. Focus on registration, BSN and daily-life setup in order.");
  }
  return parts.join(" ");
}
