import type { First90DaysInputExtended } from "./types";
import type { AffiliateContext } from "./types";

export type AffiliateMapping = {
  categoryOrderByProfile?: Record<string, string[]>;
  emphasisLabels?: Record<string, string>;
};

/**
 * Resolves affiliate category order and emphasis from input and mapping.
 */
export function resolveNinetyDayAffiliates(
  input: First90DaysInputExtended,
  mapping: AffiliateMapping | null
): AffiliateContext {
  const orderByProfile = mapping?.categoryOrderByProfile ?? {};
  const emphasisLabels = mapping?.emphasisLabels ?? {};
  const keys: (keyof First90DaysInputExtended)[] = [
    "hasBankAccountAlready",
    "needsUtilitiesSetup",
    "wantsLanguageSupport",
    "housingSituation",
    "household",
    "needsDrivingSoon",
    "needsIntegrationAwareness",
  ];

  for (const key of keys) {
    const value = input[key];
    if (value === undefined) continue;
    const profileKey = `${key}_${String(value)}`;
    if (orderByProfile[profileKey]) {
      return {
        categoryOrder: orderByProfile[profileKey],
        emphasis: emphasisLabels[profileKey] ?? "First 90 days essentials",
      };
    }
  }

  if (input.household === "kids") {
    return {
      categoryOrder: orderByProfile["household_kids"] ?? [
        "housing-platforms",
        "insurance",
        "banking",
        "mobile",
        "utilities",
        "language-courses",
        "transport",
      ],
      emphasis: emphasisLabels["household_kids"] ?? "Family settling",
    };
  }

  return {
    categoryOrder: orderByProfile["default"] ?? [
      "banking",
      "insurance",
      "mobile",
      "housing-platforms",
      "utilities",
      "language-courses",
      "transport",
    ],
    emphasis: emphasisLabels["default"] ?? "First 90 days essentials",
  };
}
