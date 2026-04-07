import type { RaHouseholdPreset, RaInputs } from "@/src/types/tools/rent-affordability";

/** Keeps adults/children counts aligned when the user changes household preset (custom unchanged). */
export function patchForHouseholdPreset(preset: RaHouseholdPreset): Partial<RaInputs> {
  switch (preset) {
    case "single":
      return { householdPreset: "single", adultsCount: 1, childrenCount: 0 };
    case "couple":
      return { householdPreset: "couple", adultsCount: 2, childrenCount: 0 };
    case "family1":
      return { householdPreset: "family1", adultsCount: 2, childrenCount: 1 };
    case "family2":
      return { householdPreset: "family2", adultsCount: 2, childrenCount: 2 };
    default:
      return { householdPreset: "custom" };
  }
}
