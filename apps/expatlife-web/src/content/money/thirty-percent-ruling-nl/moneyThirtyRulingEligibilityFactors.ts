import type { MoneyThirtyRulingEligibilityFactorConfig } from "./moneyThirtyRulingContent.types";

/** Eligibility vs benefit overview (not counted as “factors” in the checklist grid). */
export const moneyThirtyRulingEligibilityOverviewPair = [
  {
    id: "evb-eligibility",
    title: "Eligibility",
    body: "Do you meet official tests for the tax year? Incoming employee story, distance, timing, norms — confirmed by Dienst / process, not by a blog or calculator badge.",
  },
  {
    id: "evb-benefit",
    title: "Benefit amount",
    body: "How much is tax-free on your slip? Depends on caps, months, package shape, and employer policy — including whether they apply the full statutory percentage or less.",
  },
] as const;

/** Detailed eligibility factors — no salary numbers; point readers to calculator + official sources. */
export const moneyThirtyRulingEligibilityFactors: readonly MoneyThirtyRulingEligibilityFactorConfig[] = [
  {
    id: "e1",
    title: "Recruited from abroad / incoming employee context",
    plainEnglishExplanation:
      "The facility is framed around incoming employee situations. Official wording often discusses recruitment distance and prior residence.",
    whyItMatters:
      "If your timeline or addresses do not match the story payroll expects, eligibility can fail even when the role itself looks “international”.",
    cautionNote: "Do not infer eligibility from job title alone — map dates and facts calmly.",
    relatedToolKeys: ["ruling", "taxGuideForExpats"],
  },
  {
    id: "e2",
    title: "Salary threshold context",
    plainEnglishExplanation:
      "Norms for minimum salary can change by tax year and role category. This guide does not quote numbers.",
    whyItMatters:
      "Blog posts go stale fast; the calculator’s tax-year selector and Belastingdienst stay aligned with maintained parameters.",
    cautionNote: "Never treat a forum screenshot as your norm — pick the tax year that matches your start date.",
    relatedToolKeys: ["ruling", "guideEligibility"],
  },
  {
    id: "e3",
    title: "Expertise / qualification context",
    plainEnglishExplanation:
      "Some situations reference specific expertise tests in official wording — HR and advisers usually translate that to your CV and role profile.",
    whyItMatters:
      "Misalignment between role description and evidence slows applications and creates false confidence.",
    cautionNote: "If expertise is borderline, treat official text as the reference — not internal HR shorthand.",
    relatedToolKeys: ["ruling", "workingNl"],
  },
  {
    id: "e4",
    title: "Distance / previous residence context",
    plainEnglishExplanation:
      "Distance and residence history questions exist to reduce misuse — gather facts (dates, addresses) rather than debating labels in chat threads.",
    whyItMatters:
      "Small timeline errors can change how someone reads your file — documentation beats memory.",
    cautionNote: "Prepare a simple chronology before you ask payroll to commit to timelines.",
    relatedToolKeys: ["ruling", "taxReturnNl"],
  },
  {
    id: "e5",
    title: "Timing and application context",
    plainEnglishExplanation:
      "Deadlines and retroactive themes can matter. If your story spans partial years, treat annualised thinking carefully and read year-scoped guidance.",
    whyItMatters:
      "Partial years interact with proration in tools and with return scope when cross-border.",
    cautionNote: "Use the calculator’s months in scope inputs — do not mentally “full-year” a mid-year start.",
    relatedToolKeys: ["rulingToolInputs", "taxReturnNl", "guideTaxYearChanges"],
  },
  {
    id: "e6",
    title: "Employer participation",
    plainEnglishExplanation:
      "Without employer cooperation and correct payroll configuration, an otherwise strong personal story may still not appear on a payslip the way you expect.",
    whyItMatters:
      "Eligibility on paper and payroll setup are different gates — both have to line up.",
    cautionNote: "Ask early who owns the application thread and what will appear on a sample slip description.",
    relatedToolKeys: ["workingNl", "guideEmployeeEmployer", "payslip"],
  },
] as const;
