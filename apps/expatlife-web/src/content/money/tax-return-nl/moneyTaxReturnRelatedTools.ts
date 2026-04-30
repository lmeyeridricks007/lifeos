import type { MoneyTaxGuideRelatedToolDef } from "../tax-guide-for-expats/taxGuideContent.types";

/** Resolved in `buildTaxReturnNlPageModel` via `resolveRelatedTools` — keeps UI free of tool URLs. */

export const moneyTaxReturnPayrollVsReturnToolDefs = [
  { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work in the Netherlands" },
  { kind: "tool", key: "payslip", label: "Decode payslip" },
  { kind: "tool", key: "doubleTax", label: "Check double-tax awareness" },
] as const satisfies readonly MoneyTaxGuideRelatedToolDef[];

export const moneyTaxReturnArrivalDepartureToolDefs = [
  { kind: "tool", key: "taxResidencyNl" },
  { kind: "tool", key: "expatTaxesGuide" },
  { kind: "tool", key: "doubleTax" },
  { kind: "tool", key: "taxAdvisorsExpats", label: "When to consider tax help (guide)" },
  { kind: "tool", key: "taxAdvisorsGuide", label: "Dutch taxes hub" },
] as const satisfies readonly MoneyTaxGuideRelatedToolDef[];

export const moneyTaxReturnTaxBoxToolDefs = [
  { kind: "tool", key: "howTaxesWorkInNl" },
  { kind: "tool", key: "expatTaxesGuide" },
  { kind: "tool", key: "doubleTax" },
] as const satisfies readonly MoneyTaxGuideRelatedToolDef[];

export const moneyTaxReturnPartnerFamilyToolDefs = [
  { kind: "tool", key: "healthcare" },
  { kind: "tool", key: "childcare" },
  { kind: "tool", key: "col" },
] as const satisfies readonly MoneyTaxGuideRelatedToolDef[];

export const moneyTaxReturnForeignSectionToolDefs = [
  { kind: "tool", key: "doubleTax" },
  { kind: "tool", key: "taxResidencyNl" },
  { kind: "tool", key: "expatTaxesGuide" },
  { kind: "tool", key: "taxAdvisorsExpats", label: "Compare tax advisor options (guide)" },
  { kind: "tool", key: "taxAdvisorsGuide", label: "Dutch taxes hub" },
] as const satisfies readonly MoneyTaxGuideRelatedToolDef[];
