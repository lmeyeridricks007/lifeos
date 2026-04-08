/**
 * First-month / one-off planning buckets — typical is what the engine sums toward setup total.
 * Min/max are honesty rails for copy (“could be lower… could spike if…”); not statistical confidence intervals.
 */
import type { UsSetupAssumptionsNumeric } from "../types";

export type UtilitiesSetupAssumptionBand = {
  min: number;
  typical: number;
  max: number;
};

export type UtilitiesSetupAssumptionRow =
  | {
      key: keyof Pick<UsSetupAssumptionsNumeric, "energyActivationEur" | "internetInstallEur">;
      kind: "band";
      label: string;
      band: UtilitiesSetupAssumptionBand;
      planningNote: string;
    }
  | {
      key: Exclude<
        keyof UsSetupAssumptionsNumeric,
        "energyActivationEur" | "internetInstallEur"
      >;
      kind: "fixed";
      label: string;
      eur: number;
      planningNote: string;
    };

export const UTILITIES_SETUP_ASSUMPTION_ROWS: readonly UtilitiesSetupAssumptionRow[] = [
  {
    key: "energyActivationEur",
    kind: "band",
    label: "Energy activation / switch",
    band: { min: 0, typical: 65, max: 140 },
    planningNote: "Supplier admin and start costs vary; zero if landlord bulk-bills and you never switch.",
  },
  {
    key: "internetInstallEur",
    kind: "band",
    label: "Internet install visit",
    band: { min: 0, typical: 45, max: 95 },
    planningNote: "Fiber pull or complex building access can sit at the high end; self-install promos at the low end.",
  },
  {
    key: "modemRouterTypicalWhenProviderSuppliesEur",
    kind: "fixed",
    label: "Modem/router when provider supplies",
    eur: 0,
    planningNote: "Often rental-included on paper; still read small print for shipping or failed return fees.",
  },
  {
    key: "modemRouterTypicalWhenYouBuyEur",
    kind: "fixed",
    label: "Modem/router when you purchase",
    eur: 55,
    planningNote: "Mid-range Wi-Fi gear placeholder — not a shopping list.",
  },
  {
    key: "mobileSimAdminPerHouseholdEur",
    kind: "fixed",
    label: "Mobile SIM / port admin (household)",
    eur: 15,
    planningNote: "One-off per move wave, not monthly line rent.",
  },
  {
    key: "insuranceAdminEur",
    kind: "fixed",
    label: "Insurance policy start / admin",
    eur: 10,
    planningNote: "Policy fees differ; some months bundle with first premium.",
  },
  {
    key: "overlapFrictionEur",
    kind: "fixed",
    label: "Overlap / temporary housing friction",
    eur: 120,
    planningNote: "Broad cushion when two addresses overlap — turn on explicit overlap in the form for more weight.",
  },
  {
    key: "firstInvoiceBufferEur",
    kind: "fixed",
    label: "Odd first-invoice timing buffer",
    eur: 35,
    planningNote: "Stops ‘everything hits the same week’ surprises in month one.",
  },
  {
    key: "movingSoonConnectionFrictionEur",
    kind: "fixed",
    label: "Moving-soon connection friction",
    eur: 45,
    planningNote: "Queues, keys, meter access — logistics not usage.",
  },
];

/** Shape consumed by `UtilitiesAssumptionsConfig` / engine */
export const UTILITIES_SETUP_ASSUMPTIONS: UsSetupAssumptionsNumeric = {
  energyActivationEur: { min: 0, typical: 65, max: 140 },
  internetInstallEur: { min: 0, typical: 45, max: 95 },
  modemRouterTypicalWhenProviderSuppliesEur: 0,
  modemRouterTypicalWhenYouBuyEur: 55,
  mobileSimAdminPerHouseholdEur: 15,
  insuranceAdminEur: 10,
  overlapFrictionEur: 120,
  firstInvoiceBufferEur: 35,
  movingSoonConnectionFrictionEur: 45,
};
