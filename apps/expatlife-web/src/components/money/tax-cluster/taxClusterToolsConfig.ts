/** Shared routes and copy for the Money → Tax cluster (foundation → guides → residency → tax return → tools). */

import {
  HOW_TAXES_WORK_IN_NL_PATH,
  TAX_ADVISORS_EXPATS_PATH,
  THIRTY_PERCENT_RULING_NL_PATH,
  TAX_GUIDE_FOR_EXPATS_PATH,
  TAX_RESIDENCY_NL_PATH,
  TAX_RETURN_NL_PATH,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { EXPAT_TAXES_NL_PATH } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";

export const TAX_GUIDE_FOR_EXPATS_HREF = TAX_GUIDE_FOR_EXPATS_PATH;
export const EXPAT_TAXES_NL_HREF = EXPAT_TAXES_NL_PATH;
export const HOW_TAXES_WORK_IN_NL_HREF = HOW_TAXES_WORK_IN_NL_PATH;
export const TAX_RESIDENCY_NL_HREF = TAX_RESIDENCY_NL_PATH;
export const TAX_RETURN_NL_HREF = TAX_RETURN_NL_PATH;
export const THIRTY_PERCENT_RULING_NL_HREF = THIRTY_PERCENT_RULING_NL_PATH;
export const TAX_ADVISORS_EXPATS_HREF = TAX_ADVISORS_EXPATS_PATH;

/** Anchors on the Money → Taxes editorial tax-advisors guide (not advice). */
export const TAX_ADVISORS_WHEN_HELP_HREF = `${TAX_ADVISORS_EXPATS_PATH}#start-here-need` as const;
export const TAX_ADVISORS_COMPARE_HREF = `${TAX_ADVISORS_EXPATS_PATH}#recommended-services` as const;
export const TAX_ADVISORS_TOOLS_FIRST_HREF = `${TAX_ADVISORS_EXPATS_PATH}#tools-before-paying` as const;

/** Taxes tools hub — step 5 of the Money → Tax learning path (calculators & awareness). */
export const TAXES_TOOLS_HREF = "/netherlands/taxes/tools/" as const;

/** Taxes pillar hub — services / advisor discovery alongside tools. */
export const TAX_ADVISORS_HUB_HREF = "/netherlands/taxes/" as const;

export type TaxClusterToolId =
  | "salary"
  | "ruling"
  | "payslip"
  | "doubleTax"
  | "healthcare"
  | "childcare";

export const taxClusterTools = [
  {
    id: "salary" as const,
    href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
    title: "Dutch salary net calculator",
    description: "Indicative gross-to-net — planning only; each tool documents its own methodology.",
    ctaLabel: "Estimate net salary",
  },
  {
    id: "ruling" as const,
    href: "/netherlands/taxes/tools/30-ruling-calculator/",
    title: "30% ruling calculator",
    description: "Eligibility-first planning — confirm with payroll or a tax adviser.",
    ctaLabel: "Check 30% ruling",
  },
  {
    id: "payslip" as const,
    href: "/netherlands/work/tools/payslip-decoder/",
    title: "Payslip decoder",
    description: "Plain-language line items once you have a real payslip.",
    ctaLabel: "Decode payslip",
  },
  {
    id: "doubleTax" as const,
    href: "/netherlands/taxes/tools/double-tax-awareness-tool/",
    title: "Double tax awareness tool",
    description: "Cross-border prompts while you still have time to read official guidance.",
    ctaLabel: "Check double-tax awareness",
  },
  {
    id: "healthcare" as const,
    href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
    title: "Healthcare allowance estimator",
    description: "Zorgtoeslag-style planning — not Dienst Toeslagen.",
    ctaLabel: "Estimate healthcare allowance",
  },
  {
    id: "childcare" as const,
    href: "/netherlands/family/tools/childcare-cost-estimator/",
    title: "Childcare cost estimator",
    description: "Budget childcare alongside rent and take-home cash.",
    ctaLabel: "Estimate childcare costs",
  },
] as const;
