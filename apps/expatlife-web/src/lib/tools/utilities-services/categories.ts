import type { UsServiceCategoryConfig, UsServiceCategoryId } from "./types";

/** Modeled service lines — extend `id` + rows here when adding new categories. */
export const utilitiesServiceCategories: UsServiceCategoryConfig[] = [
  {
    id: "energy",
    label: "Energy (electricity + gas / heat)",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
  },
  {
    id: "water",
    label: "Water",
    essentialWhenEnabled: true,
    defaultClassification: "usually_local_fixed",
  },
  {
    id: "internet",
    label: "Home internet / broadband",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
  },
  {
    id: "mobile",
    label: "Mobile",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
  },
  {
    id: "municipality",
    label: "Municipality & local household charges",
    essentialWhenEnabled: true,
    defaultClassification: "usually_local_fixed",
  },
  {
    id: "media_bundle",
    label: "TV / media bundle",
    essentialWhenEnabled: false,
    defaultClassification: "optional",
  },
  {
    id: "contents_insurance",
    label: "Contents (home contents) insurance",
    essentialWhenEnabled: false,
    defaultClassification: "actively_compare",
  },
  {
    id: "liability_insurance",
    label: "Liability (aansprakelijkheid) insurance",
    essentialWhenEnabled: false,
    defaultClassification: "actively_compare",
  },
];

export function getUtilitiesCategoryLabel(id: UsServiceCategoryId): string {
  return utilitiesServiceCategories.find((c) => c.id === id)?.label ?? id;
}
