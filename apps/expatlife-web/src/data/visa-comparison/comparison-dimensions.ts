/**
 * Comparison dimensions and filter options for the Netherlands visa comparison page.
 * Used for filter chips and table column semantics.
 */

export type RouteTypeFilter = "all" | "work" | "entrepreneur" | "study" | "family";

export const ROUTE_TYPE_LABELS: Record<RouteTypeFilter, string> = {
  all: "All",
  work: "Work",
  entrepreneur: "Entrepreneur",
  study: "Study",
  family: "Family",
};

export type ComplexityLabel = "Low" | "Medium" | "High" | "Higher";
