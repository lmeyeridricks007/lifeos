/**
 * Kinderopvangtoeslag / childcare allowance — 2026 official reference figures for editorial use.
 *
 * Sources: Rijksoverheid bedragen kinderopvangtoeslag 2026, Belastingdienst maximum uurtarief,
 * Besluit kinderopvangtoeslag 2026. Re-verify annually when new parameters ship.
 *
 * Worked-example monthly amounts are illustrative — only Dienst Toeslagen determines official awards.
 */

import {
  childcareRatesByYear,
  childcareReimbursableHoursCapByYear,
} from "@/src/lib/tools/childcare/config/childcareRatesByYear";

export const CHILDCARE_ALLOWANCE_REFERENCE_TAX_YEAR = 2026;

export const CHILDCARE_ALLOWANCE_REFERENCE_DISCLAIMER =
  "Figures track published 2026 kinderopvangtoeslag parameters and indicative examples. Your official amount depends on toetsingsinkomen, care type, contracted hours, provider rate vs statutory caps and work-month rules — confirm on toeslagen.nl before applying.";

const RATES_2026 = childcareRatesByYear[2026];
const HOURS_CAP_2026 = childcareReimbursableHoursCapByYear[2026];

export type ChildcareAllowanceReferenceHighlight = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export type ChildcareAllowanceReferenceRow = {
  id: string;
  parameter: string;
  value2026: string;
  notes: string;
};

export type ChildcareAllowanceIncomeBandRow = {
  id: string;
  incomeFrom: string;
  incomeTo: string;
  firstChild: string;
  nextChild: string;
};

export type ChildcareAllowanceWorkedExample = {
  id: string;
  tag: string;
  title: string;
  inputs: string;
  indicativeMonthly: string;
  indicativeGross?: string;
  body: string;
};

export const childcareAllowanceReference2026Highlights: readonly ChildcareAllowanceReferenceHighlight[] = [
  {
    id: "cap-daycare",
    label: "Daycare max hourly rate",
    value: `€${RATES_2026.daycare.toFixed(2)}/h`,
    note: "Statutory maximum used in the allowance calculation for kinderdagverblijf — provider fees above this stay out of pocket.",
  },
  {
    id: "cap-bso",
    label: "BSO max hourly rate",
    value: `€${RATES_2026.bso.toFixed(2)}/h`,
    note: "After-school care (buitenschoolse opvang) uses a lower cap than full daycare.",
  },
  {
    id: "hours-cap",
    label: "Reimbursable hours cap",
    value: `${HOURS_CAP_2026} h / child / mo`,
    note: "Per calendar month with qualifying work activity — up to 2,760 hours per child per year (12 × 230).",
  },
  {
    id: "max-percent",
    label: "Maximum reimbursement",
    value: "96%",
    note: "2026 table: combined toetsingsinkomen up to €56,412 for working parents — first and next child at 96% in that band.",
  },
  {
    id: "floor-percent",
    label: "Minimum reimbursement floor",
    value: "36.5%",
    note: "2026 first-child floor (vaste voet) — allowance tapers with income but does not drop below this for high earners.",
  },
  {
    id: "no-hard-cutoff",
    label: "Income ceiling",
    value: "No hard zero",
    note: "Unlike zorgtoeslag, kinderopvangtoeslag has no single income line where entitlement always stops — percentage tapers down.",
  },
] as const;

export const childcareAllowanceReference2026Thresholds: readonly ChildcareAllowanceReferenceRow[] = [
  {
    id: "cap-daycare",
    parameter: "Maximum hourly rate — daycare (kinderdagverblijf)",
    value2026: `€${RATES_2026.daycare.toFixed(2)} / hour`,
    notes: "Belastingdienst 2026 indexation (+4.84%). Fees above this cap are not counted in the subsidised slice.",
  },
  {
    id: "cap-bso",
    parameter: "Maximum hourly rate — BSO",
    value2026: `€${RATES_2026.bso.toFixed(2)} / hour`,
    notes: "Buitenschoolse opvang at a kindercentrum — blended voorschool + naschool rates may average below the cap.",
  },
  {
    id: "cap-gastouder",
    parameter: "Maximum hourly rate — gastouder",
    value2026: `€${RATES_2026.gastouder.toFixed(2)} / hour`,
    notes: "Registered childminder care — if your quote is lower, allowance is calculated on the actual lower rate.",
  },
  {
    id: "hours-monthly",
    parameter: "Maximum reimbursable hours",
    value2026: `${HOURS_CAP_2026} hours / child / month`,
    notes: "Linked to months in which parent(s) had qualifying paid work — least-working parent’s work pattern matters.",
  },
  {
    id: "hours-annual",
    parameter: "Maximum reimbursable hours (annual)",
    value2026: "2,760 hours / child / year",
    notes: "12 months × 230 hours — excess contracted hours may not be fully subsidised.",
  },
  {
    id: "max-percent-income",
    parameter: "96% reimbursement band (2026)",
    value2026: "Toetsingsinkomen up to €56,412",
    notes: "2026 policy step: more working households reach the maximum 96% rate vs prior years.",
  },
  {
    id: "max-percent-prior",
    parameter: "Already at 96% before 2026 step",
    value2026: "Up to €49,318",
    notes: "Households at or below this line already qualified for 96% in 2025 — 2026 extends the top band upward.",
  },
  {
    id: "floor-percent",
    parameter: "Minimum reimbursement — first child",
    value2026: "36.5%",
    notes: "Raised from 33.3% in 2026 — high-income households still receive at least this share of the reimbursable base.",
  },
  {
    id: "provider-above-cap",
    parameter: "Provider above statutory cap",
    value2026: "Excess hourly cost = out of pocket",
    notes: "Example: BSO invoiced at €11/h is calculated at €9.98/h — the €1.02/h difference is not subsidised.",
  },
  {
    id: "provider-below-cap",
    parameter: "Provider below statutory cap",
    value2026: "Calculated on actual lower rate",
    notes: "Example: daycare at €10/h uses €10 in the formula, not the €11.23 maximum.",
  },
] as const;

/** Selected rows from the official 2026 kinderopvangtoeslag table (Rijksoverheid) — not every income band. */
export const childcareAllowanceIncomeBands2026: readonly ChildcareAllowanceIncomeBandRow[] = [
  { id: "inc-0-24149", incomeFrom: "€0", incomeTo: "€24,149", firstChild: "96.0%", nextChild: "96.0%" },
  { id: "inc-49319-56412", incomeFrom: "€49,319", incomeTo: "€56,412", firstChild: "96.0%", nextChild: "96.0%" },
  { id: "inc-56413-61695", incomeFrom: "€56,413", incomeTo: "€61,895", firstChild: "93.9–95.5%", nextChild: "95.6%" },
  { id: "inc-69493-77094", incomeFrom: "€69,493", incomeTo: "€77,094", firstChild: "88.2–90.5%", nextChild: "94.2–94.6%" },
  { id: "inc-84694-92291", incomeFrom: "€84,694", incomeTo: "€92,291", firstChild: "76.7–81.2%", nextChild: "91.5–92.7%" },
  { id: "inc-103695-111290", incomeFrom: "€103,695", incomeTo: "€111,290", firstChild: "65.1–69.6%", nextChild: "89.1–90.5%" },
  { id: "inc-130639-142312", incomeFrom: "€130,639", incomeTo: "€142,312", firstChild: "50.4–54.2%", nextChild: "85.4–86.7%" },
  { id: "inc-165658-177335", incomeFrom: "€165,658", incomeTo: "€177,335", firstChild: "36.5%", nextChild: "79.1–80.6%" },
  { id: "inc-235698-plus", incomeFrom: "€235,698", incomeTo: "and higher", firstChild: "36.5%", nextChild: "68.2%" },
] as const;

export const childcareAllowanceWorkedExamples2026: readonly ChildcareAllowanceWorkedExample[] = [
  {
    id: "daycare-cap-3d-low-income",
    tag: "Daycare · lower income",
    title: "3 days/week daycare at the 2026 hourly cap",
    inputs: "1 child, ~104 eligible hours/mo (3 days × 8h), provider €11.23/h, toetsingsinkomen ~€45,000",
    indicativeGross: "~€1,168/mo gross",
    indicativeMonthly: "~€1,121/mo allowance",
    body: "At 96% on the reimbursable base, net out-of-pocket can be under €50/mo when the provider rate matches the cap. Real contracts often quote above the cap in Randstad cities.",
  },
  {
    id: "ams-above-cap-moderate",
    tag: "Expat · moderate income",
    title: "Amsterdam-style rate above the daycare cap",
    inputs: "1 child, 104 h/mo, provider ~€11.90/h (typical standard tier), toetsingsinkomen ~€85,000",
    indicativeGross: "~€1,238/mo gross",
    indicativeMonthly: "~€950/mo allowance",
    body: "Official 2026 table: ~81.2% at this income on the capped slice (€11.23 × hours). The ~€0.67/h above cap × 104 hours stays fully out of pocket — a common expat surprise.",
  },
  {
    id: "fulltime-5d-mid-income",
    tag: "Full-time daycare",
    title: "5 days/week at cap, dual income ~€70,000",
    inputs: "1 child, ~173 eligible hours/mo, provider €11.23/h, both parents working",
    indicativeGross: "~€1,946/mo gross",
    indicativeMonthly: "~€1,760/mo allowance",
    body: "Illustrative at ~90.5% (official band €69,493–€73,292). Full-time gross still leaves roughly €150–€200/mo out of pocket at cap — more if the provider charges a premium hourly rate.",
  },
  {
    id: "bso-above-cap-official",
    tag: "BSO · official example",
    title: "BSO billed above cap (Belastingdienst-style)",
    inputs: "School-age child, provider invoices €11/h for BSO, calculation uses €9.98/h cap",
    indicativeGross: "€11 × hours",
    indicativeMonthly: "96% of (€9.98 × eligible hours)",
    body: "Mirrors Belastingdienst 2026 examples: the €1.02/h above the BSO cap is never subsidised. Blended voorschool + naschool hours can average below the cap when both sit under €9.98.",
  },
  {
    id: "gastouder-3d",
    tag: "Gastouder · lower cap",
    title: "Registered gastouder, 3 days/week at cap",
    inputs: "1 child, ~104 h/mo, provider €8.49/h, toetsingsinkomen ~€55,000",
    indicativeGross: "~€883/mo gross",
    indicativeMonthly: "~€848/mo allowance",
    body: "Lower statutory cap than daycare — gross invoices look smaller but hourly quotes vary by city and agency. At 96%, net can still be modest when rates track the cap.",
  },
  {
    id: "high-income-floor",
    tag: "Higher income · floor",
    title: "High earner — 36.5% minimum floor applies",
    inputs: "1 child, 173 h/mo at daycare cap, toetsingsinkomen ~€180,000+",
    indicativeGross: "~€1,946/mo gross",
    indicativeMonthly: "~€710/mo allowance",
    body: "2026 first-child floor is 36.5% of the reimbursable base (~€710 on €1,946 capped cost). Allowance helps but does not make premium city daycare feel cheap at high incomes.",
  },
] as const;

export const childcareAllowanceReference2026 = {
  taxYear: CHILDCARE_ALLOWANCE_REFERENCE_TAX_YEAR,
  sourceNote:
    "Rijksoverheid kinderopvangtoeslag 2026 bedragen, Belastingdienst maximale uurtarieven, Besluit kinderopvangtoeslag 2026.",
  disclaimer: CHILDCARE_ALLOWANCE_REFERENCE_DISCLAIMER,
  highlights: childcareAllowanceReference2026Highlights,
  thresholds: childcareAllowanceReference2026Thresholds,
  incomeBands: childcareAllowanceIncomeBands2026,
  workedExamples: childcareAllowanceWorkedExamples2026,
} as const;
