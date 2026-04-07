import type { ColHouseholdPreset, ColInput } from "./types";

export function roundEur(n: number): number {
  return Math.round(n);
}

export function effectiveHouseholdCounts(input: ColInput): { adults: number; children: number } {
  switch (input.householdPreset) {
    case "single":
      return { adults: 1, children: 0 };
    case "couple":
      return { adults: 2, children: 0 };
    case "family1":
      return { adults: 2, children: 1 };
    case "family2":
      return { adults: 2, children: 2 };
    case "custom":
      return {
        adults: Math.min(5, Math.max(1, Math.round(input.adultsCount))),
        children: Math.min(6, Math.max(0, Math.round(input.childrenCount))),
      };
    default:
      return { adults: 1, children: 0 };
  }
}

export function totalPeople(adults: number, children: number): number {
  return adults + children;
}
