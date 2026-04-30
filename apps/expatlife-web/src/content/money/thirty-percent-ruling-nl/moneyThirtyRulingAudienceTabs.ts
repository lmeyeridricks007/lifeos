import type { MoneyThirtyRulingAudienceTabsConfig } from "./moneyThirtyRulingContent.types";

export const moneyThirtyRulingAudienceTabs = {
  employeeTabLabel: "Employee / candidate",
  employerTabLabel: "Employer / HR",
  employeeSections: [
    {
      id: "aud-emp-eligibility",
      title: "Likely eligibility",
      body: "Use the 30% ruling calculator with the tax year that matches your start date — outputs are a planning signal, not approval. Then align answers with HR or payroll before you treat any line as final.",
    },
    {
      id: "aud-emp-package",
      title: "Salary package impact",
      body: "Gross, taxable, and net can diverge once the facility is in play. Compare with vs without ruling in the salary net calculator and job offer comparison when offers differ on pension, bonus, or extras — not on headline gross alone.",
    },
    {
      id: "aud-emp-signing",
      title: "What to ask before signing",
      body: "Ask whether 30% support is confirmed, conditional, or excluded; who files and by when; how holiday allowance and variable pay count toward norms in their payroll; and how the allowance will read on a sample payslip or description.",
    },
    {
      id: "aud-emp-payslip",
      title: "What to check on payslip",
      body: "After setup, compare taxable wages, allowance lines, and withholding to what you modelled. Labels vary by payroll vendor — use the payslip decoder plus an employer explanation, not a random screenshot from the internet.",
    },
  ],
  employeeToolKeys: ["ruling", "salaryNet", "jobOffer", "payslip"] as const,
  employerObligationDisclaimer:
    "The employer is not obliged to grant the full maximum tax-free amount. Policy, agreement, and payroll setup can result in less than the theoretical statutory maximum — communicate clearly with candidates and payroll.",
  employerSections: [
    {
      id: "aud-emp-max",
      title: "Maximum possible tax-free allowance",
      body: "Understand the statutory ceiling for the selected tax year in your maintained calculator configuration — then map what is realistic for the role and budget after caps and proration.",
    },
    {
      id: "aud-emp-custom",
      title: "Custom allowance %",
      body: "When payroll applies less than the maximum percentage, model it explicitly in the calculator’s advanced assumptions so internal forecasts match payslip behaviour and employee expectations.",
    },
    {
      id: "aud-emp-payroll",
      title: "Payroll planning",
      body: "Align gross, taxable, allowance, and reporting lines with your payroll vendor early — especially for partial-year starts, bonus timing, and researcher or specialist-training routes.",
    },
    {
      id: "aud-emp-threshold",
      title: "Salary threshold checks",
      body: "Run norm checks against the same tax year as your payroll calendar; confirm how holiday allowance and variable components are treated in your process before you communicate a number externally.",
    },
    {
      id: "aud-emp-comms",
      title: "Employee communication",
      body: "Separate marketing language from confirmed payroll outcomes. Offer letters and FAQs should match what actually appears on the slip once the facility is approved and configured.",
    },
    {
      id: "aud-emp-legal",
      title: "Legal / tax confirmation",
      body: "For border cases, transfers, or policy disputes, route final positions through qualified tax/legal advisers and Belastingdienst guidance — this site does not replace professional sign-off.",
    },
  ],
  footNote:
    "Employers may grant less than the maximum theoretical benefit, or structure compensation differently, within their policies and agreements. Marketing language on offers should be checked against payroll reality.",
} satisfies MoneyThirtyRulingAudienceTabsConfig;
