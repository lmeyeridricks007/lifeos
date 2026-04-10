import { banksMonetizationProviders } from "./banks";
import { housingMonetizationProviders } from "./housing";
import { insuranceMonetizationProviders } from "./insurance";
import { mobilityMonetizationProviders } from "./mobility";
import { relocationMonetizationProviders } from "./relocation";
import { utilitiesMonetizationProviders } from "./utilities";
import type { MonetizationProvider } from "@/src/lib/monetization/types";

export {
  banksMonetizationProviders,
  housingMonetizationProviders,
  insuranceMonetizationProviders,
  mobilityMonetizationProviders,
  relocationMonetizationProviders,
  utilitiesMonetizationProviders,
};

/** All curated monetization providers (every category). */
export const allMonetizationProviders: MonetizationProvider[] = [
  ...banksMonetizationProviders,
  ...insuranceMonetizationProviders,
  ...relocationMonetizationProviders,
  ...utilitiesMonetizationProviders,
  ...housingMonetizationProviders,
  ...mobilityMonetizationProviders,
];

export function getMonetizationProviderById(id: string): MonetizationProvider | undefined {
  return allMonetizationProviders.find((p) => p.id === id);
}
