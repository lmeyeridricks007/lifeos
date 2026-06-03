/**
 * Huurtoeslag / rent allowance — 2026 official reference figures for editorial use.
 *
 * Sources: Belastingdienst Toeslagen (huurtoeslag 2026), Rijksoverheid huurtoeslagparameters 2026,
 * published proefberekening examples. Re-verify annually when new parameters ship.
 *
 * Worked-example monthly amounts are illustrative planning figures — only Dienst Toeslagen
 * determines official awards.
 */

export const RENT_ALLOWANCE_REFERENCE_TAX_YEAR = 2026;

export const RENT_ALLOWANCE_REFERENCE_DISCLAIMER =
  "Figures track published 2026 huurtoeslag parameters and indicative proefberekening examples. Your official amount depends on toetsingsinkomen, household type, age, bare rent and 1 January assets — confirm on toeslagen.nl before applying.";

export type RentAllowanceReferenceHighlight = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export type RentAllowanceReferenceRow = {
  id: string;
  parameter: string;
  value2026: string;
  notes: string;
};

export type RentAllowanceWorkedExample = {
  id: string;
  tag: string;
  title: string;
  inputs: string;
  indicativeMonthly: string;
  indicativeAnnual?: string;
  body: string;
};

export const rentAllowanceReference2026Highlights: readonly RentAllowanceReferenceHighlight[] = [
  {
    id: "max-calc-rent-adult",
    label: "Max rent in calculation (21+)",
    value: "€932.93/mo",
    note: "Allowance is calculated on bare rent up to this cap — not on rent above it.",
  },
  {
    id: "max-calc-rent-youth",
    label: "Youth calculation cap (under 21)",
    value: "€498.20/mo",
    note: "Applies when everyone in the household is under 21; otherwise the adult cap applies.",
  },
  {
    id: "own-contribution",
    label: "Own rent share (approx.)",
    value: "~€200/mo",
    note: "Belastingdienst: you always pay part of the rent yourself — allowance is never the full rent.",
  },
  {
    id: "asset-single",
    label: "Asset limit — single",
    value: "€38,479",
    note: "Wealth on 1 January 2026 — savings, investments and certain other assets count.",
  },
  {
    id: "asset-partner",
    label: "Asset limit — with partner",
    value: "€76,958",
    note: "Combined asset ceiling when you have a toeslagpartner for the benefit year.",
  },
  {
    id: "eligibility-rent",
    label: "Rent eligibility (2026 change)",
    value: "No max rent cap",
    note: "Higher bare rent can still qualify from 2026 — amount is capped at the calculation rent above.",
  },
] as const;

export const rentAllowanceReference2026Thresholds: readonly RentAllowanceReferenceRow[] = [
  {
    id: "bare-rent-only",
    parameter: "Rent figure used",
    value2026: "Kale huur (bare rent)",
    notes: "From 2026, subsidised service costs no longer count toward huurtoeslag.",
  },
  {
    id: "max-calc-rent-adult",
    parameter: "Maximum calculation rent (21+)",
    value2026: "€932.93 / month",
    notes: "No allowance is calculated on the portion of bare rent above this amount.",
  },
  {
    id: "max-calc-rent-youth",
    parameter: "Youth calculation rent (under 21)",
    value2026: "€498.20 / month",
    notes: "Youth cap until 21 (was 23 in 2025). Ages 21–22 now use the adult cap.",
  },
  {
    id: "min-basis-rent",
    parameter: "Minimum basis rent (official parameter)",
    value2026: "€202.52 / month",
    notes: "Part of the statutory formula — you always retain a own-rent share.",
  },
  {
    id: "min-norm-rent",
    parameter: "Minimum norm rent",
    value2026: "€250.67 / month",
    notes: "Published 2026 huurtoeslag parameter (Rijksoverheid indexation table).",
  },
  {
    id: "asset-single",
    parameter: "Asset limit — single (1 Jan)",
    value2026: "€38,479",
    notes: "Above this, you generally cannot receive huurtoeslag for 2026.",
  },
  {
    id: "asset-partner",
    parameter: "Asset limit — with toeslagpartner",
    value2026: "€76,958 combined",
    notes: "Partner assets count when toeslagpartner rules apply for the full year.",
  },
  {
    id: "asset-co-tenant",
    parameter: "Asset limit — per medebewoner",
    value2026: "€38,479 each",
    notes: "Co-tenant wealth can affect eligibility alongside your own assets.",
  },
  {
    id: "income-min-eigen",
    parameter: "Income at minimum own contribution",
    value2026: "€23,425 (single) · €31,500 (with partner)",
    notes: "Published 2026 parameters — income above this reduces allowance via taper rules.",
  },
  {
    id: "income-combined-ceiling",
    parameter: "Combined toetsingsinkomen ceiling",
    value2026: "€60,525",
    notes: "Joint income reference where allowance typically reaches zero — exact cut-off depends on rent and household.",
  },
  {
    id: "age-min",
    parameter: "Minimum age",
    value2026: "18+ (exceptions apply)",
    notes: "You must generally be 18 or older; limited exceptions exist on official guidance.",
  },
  {
    id: "subsidy-rates",
    parameter: "Subsidy percentages on rent bands",
    value2026: "100% · 65% · 40%",
    notes: "Applied across quality-discount, low cap and high cap rent bands in the 2026 formula.",
  },
] as const;

export const rentAllowanceWorkedExamples2026: readonly RentAllowanceWorkedExample[] = [
  {
    id: "single-low-income-800",
    tag: "Single · lower income",
    title: "Single tenant, bare rent €800",
    inputs: "Age 21+, alone, toetsingsinkomen ~€18,000, assets under €38,479",
    indicativeMonthly: "~€280",
    indicativeAnnual: "~€3,360",
    body: "Illustrative proefberekening-style outcome at modest income and mid-range rent. Higher income would taper this down quickly.",
  },
  {
    id: "single-min-wage-850",
    tag: "Single · full-time minimum wage",
    title: "Single tenant, bare rent €850",
    inputs: "Age 21+, ~€33,045 gross/year (40h minimum wage + 8% holiday pay), assets under limit",
    indicativeMonthly: "~€273",
    indicativeAnnual: "~€3,276",
    body: "Example aligned to Dienst Toeslagen proefberekening Toeslagen 2026 (published case study). Shows allowance can remain meaningful above minimum wage.",
  },
  {
    id: "single-moderate-750",
    tag: "Single · moderate income",
    title: "Single tenant, bare rent €750",
    inputs: "Age 21+, toetsingsinkomen ~€28,000, assets under limit",
    indicativeMonthly: "~€250–€300",
    body: "Planning band for a typical private-sector starter salary. Run your exact figures in the official proefberekening — taper starts as income rises.",
  },
  {
    id: "couple-combined-50k",
    tag: "Couple · combined income",
    title: "Couple with toeslagpartner, bare rent €900",
    inputs: "Both 21+, combined toetsingsinkomen ~€50,000, assets under €76,958 combined",
    indicativeMonthly: "~€100–€200",
    body: "Partner income counts toward the combined test. Allowance is usually smaller than for a single household at similar rent.",
  },
  {
    id: "single-high-income",
    tag: "Single · higher income",
    title: "Single tenant, bare rent €950, income above taper",
    inputs: "Age 21+, toetsingsinkomen ~€45,000+, assets under limit",
    indicativeMonthly: "€0–€50",
    body: "Many expat salaries sit above practical huurtoeslag ranges. A high bare rent alone does not create entitlement if income is too high.",
  },
  {
    id: "youth-under-21",
    tag: "Youth · under 21",
    title: "Household all under 21, bare rent €450",
    inputs: "Everyone under 21, toetsingsinkomen ~€15,000, assets under limit",
    indicativeMonthly: "~€200–€250",
    body: "Youth calculation uses the €498.20 rent cap. From age 21 the adult €932.93 cap applies — a meaningful 2026 change for 21–22 year-olds.",
  },
] as const;

export const rentAllowanceReference2026 = {
  taxYear: RENT_ALLOWANCE_REFERENCE_TAX_YEAR,
  sourceNote:
    "Belastingdienst huurtoeslag 2026 pages, Rijksooverheid huurtoeslagparameters (Nov 2025), toeslagen.nl proefberekening.",
  disclaimer: RENT_ALLOWANCE_REFERENCE_DISCLAIMER,
  highlights: rentAllowanceReference2026Highlights,
  thresholds: rentAllowanceReference2026Thresholds,
  workedExamples: rentAllowanceWorkedExamples2026,
} as const;
