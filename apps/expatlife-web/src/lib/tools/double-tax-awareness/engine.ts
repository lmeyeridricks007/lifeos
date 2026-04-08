import { THIRTY_RULING_CONTEXT_TEXT, reliefMethodFromKey } from "./explanations";
import { calculateDaySignals, formatResidencyConfidence, incomeTypeLabel, residencyHeadline, toCountryLabel } from "./helpers";
import {
  deriveLikelyFilingCountriesSummary,
  derivePayTaxTwice,
  deriveProfessionalReview,
  deriveWhatCouldChangeOutcome,
  deriveWhatThisLikelyMeans,
  deriveWhenToolNotEnough,
} from "./resultDerivations";
import {
  DUTCH_RESIDENCY_SIGNAL_WEIGHTS,
  FOREIGN_LINKED_INCOME_TYPES,
  FOREIGN_OR_MIXED_SIGNAL_WEIGHTS,
  HIGH_COMPLEXITY_INCOME_TYPES,
  hasForeignLinkedIncome,
  riskFromScore,
} from "./rules";
import type {
  DoubleTaxAwarenessInput,
  DoubleTaxAwarenessResult,
  FilingAction,
  IncomeTaxMapRow,
  IncomeType,
  ResidencyAssessment,
  RiskLevel,
} from "./types";

function evaluateResidency(input: DoubleTaxAwarenessInput): {
  assessment: ResidencyAssessment;
  dutchScore: number;
  foreignScore: number;
  dualRisk: RiskLevel;
} {
  let dutchScore = 0;
  let foreignScore = 0;
  const reasons: string[] = [];
  const { nlDays, otherDays } = calculateDaySignals(input);

  if (input.registeredInNlBrp === "yes") {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.registeredInNlBrp;
    reasons.push("BRP registration in the Netherlands is a strong practical residency signal.");
  }
  if (input.monthsInNetherlands >= 7) {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.monthsInNetherlandsMajority;
    reasons.push("Most months in this year are in the Netherlands.");
  }
  if (nlDays != null && nlDays >= 183) {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.nlDaysOver183;
    reasons.push("Approximate days in the Netherlands are above the common 183-day indicator.");
  }
  if (input.permanentHomeNl === "yes") {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.permanentHomeNl;
    reasons.push("A permanent home in the Netherlands is often a key factual anchor.");
  }
  if (input.familyMostlyInNl === "yes") {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.familyMostlyInNl;
    reasons.push("Family/partner center of life appears mainly in the Netherlands.");
  }
  if (input.mainWorkPhysicallyInNl === "yes" || input.mainWorkPhysicallyInNl === "partly") {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.mainWorkPhysicallyInNl;
    reasons.push("Work physically performed in the Netherlands is usually tax-relevant.");
  }
  if (input.planningToStayLongerThanYear === "yes") {
    dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.planningToStayLongerThanYear;
    reasons.push("Planned stay longer than one year supports a Dutch residency planning view.");
  }
  if (input.employerInNl === "yes") dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.employerInNl;
  if (input.payrollInNl === "yes") dutchScore += DUTCH_RESIDENCY_SIGNAL_WEIGHTS.payrollInNl;

  if (input.permanentHomeAbroad === "yes") {
    foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.permanentHomeAbroad;
    reasons.push("A permanent home abroad keeps foreign residency ties active.");
  }
  if (input.monthsInOtherMainCountry >= 6) {
    foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.monthsAbroadMajority;
    reasons.push("Substantial time is spent in another country this year.");
  }
  if (otherDays != null && otherDays >= 183) {
    foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.otherDaysOver183;
    reasons.push("Approximate days abroad are high, which can support foreign residency claims.");
  }
  if (input.employerInNl === "no") foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.foreignEmployer;
  if (input.payrollInNl === "no") foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.foreignPayroll;
  if (input.workLocationPattern === "mixed") foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.mixedWorkLocations;
  if (input.crossBorderCommutePattern !== "none") foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.commutingCrossBorder;
  if (hasForeignLinkedIncome(input)) foreignScore += FOREIGN_OR_MIXED_SIGNAL_WEIGHTS.foreignIncomeTypes;

  const hasDualHomes = input.permanentHomeNl === "yes" && input.permanentHomeAbroad === "yes";
  const possibleDual = hasDualHomes || (dutchScore >= 8 && foreignScore >= 7);
  const dualRisk: RiskLevel = possibleDual ? "high" : dutchScore >= 7 && foreignScore >= 5 ? "medium" : "low";

  if (possibleDual) {
    return {
      assessment: {
        key: "possible_dual_residency",
        headline: residencyHeadline("possible_dual_residency"),
        confidence: dualRisk === "high" ? "medium_high" : "medium",
        reasons,
      },
      dutchScore,
      foreignScore,
      dualRisk,
    };
  }
  if (dutchScore >= 9 && foreignScore <= 5) {
    return {
      assessment: {
        key: "likely_dutch_resident",
        headline: residencyHeadline("likely_dutch_resident"),
        confidence: dutchScore >= 12 ? "medium_high" : "medium",
        reasons,
      },
      dutchScore,
      foreignScore,
      dualRisk,
    };
  }
  if (foreignScore >= 8 && dutchScore <= 6) {
    return {
      assessment: {
        key: "likely_non_resident",
        headline: residencyHeadline("likely_non_resident"),
        confidence: foreignScore >= 11 ? "medium_high" : "medium",
        reasons,
      },
      dutchScore,
      foreignScore,
      dualRisk,
    };
  }
  return {
    assessment: {
      key: "insufficient_or_mixed_signals",
      headline: residencyHeadline("insufficient_or_mixed_signals"),
      confidence: "low",
      reasons,
    },
    dutchScore,
    foreignScore,
    dualRisk,
  };
}

function mapIncomeType(type: IncomeType, input: DoubleTaxAwarenessInput, residencyKey: ResidencyAssessment["key"]): IncomeTaxMapRow {
  const residentLike = residencyKey === "likely_dutch_resident" || residencyKey === "possible_dual_residency";
  const mainOther = toCountryLabel(input.mainOtherCountryCode);
  if (type === "salary_dutch_employer") {
    return {
      incomeType: type,
      likelyTaxedIn: "Netherlands, typically through Dutch payroll",
      why: "Dutch-source employment income is usually taxable in the Netherlands.",
      nlDeclarationLikelyMatters: "Usually yes, especially if you are likely Dutch resident.",
      doubleTaxRisk: residentLike && input.expectsForeignReturn !== "no" ? "medium" : "low",
      cautionNote: "Cross-border days or assignment periods may change the split.",
      whatThisMeansForYou:
        "If you are likely Dutch resident, plan on Dutch reporting; if you also had workdays elsewhere, map days and keep payroll letters.",
    };
  }
  if (type === "salary_foreign_employer" || type === "salary_remote_work") {
    return {
      incomeType: type,
      likelyTaxedIn: "Often both work-country and residence-country relevance",
      why: "Physical work location, payroll setup, and treaty allocation usually matter.",
      nlDeclarationLikelyMatters: residentLike ? "Often yes, even when tax is withheld abroad." : "May still matter for Dutch-source workdays.",
      doubleTaxRisk: "high",
      cautionNote: "Foreign employer + Dutch workdays is a common complexity trigger.",
      whatThisMeansForYou:
        "Salary often follows where work is performed; keep workday logs, contract home country, and all payslips — cross-border days change treatment.",
    };
  }
  if (type === "freelance_self_employed") {
    return {
      incomeType: type,
      likelyTaxedIn: "Depends on where activities are performed and residency facts",
      why: "Self-employment often needs treaty and permanent-establishment style review.",
      nlDeclarationLikelyMatters: "Often yes if Dutch resident or if activities are in the Netherlands.",
      doubleTaxRisk: "high",
      cautionNote: "Keep invoices, contracts, and workday logs by country.",
      whatThisMeansForYou:
        "Treat self-employment as high-documentation: invoices, client locations, and where work was done — advisor review is common.",
    };
  }
  if (type === "rental_income_nl") {
    return {
      incomeType: type,
      likelyTaxedIn: "Netherlands is usually relevant for Dutch property income",
      why: "Property location is usually the primary taxing connection.",
      nlDeclarationLikelyMatters: "Usually yes.",
      doubleTaxRisk: input.expectsForeignReturn === "yes" ? "medium" : "low",
      cautionNote: "How income is treated can differ by property type and treaty context.",
      whatThisMeansForYou:
        "Dutch property income is usually reported in the Netherlands first; keep rental statements and expense records.",
    };
  }
  if (type === "rental_income_abroad") {
    return {
      incomeType: type,
      likelyTaxedIn: `Usually in the property country (${mainOther})`,
      why: "Property income is often primarily taxed where the property is located.",
      nlDeclarationLikelyMatters: residentLike ? "Often yes in Dutch return context." : "Sometimes, depending on Dutch links.",
      doubleTaxRisk: "medium",
      cautionNote: "Tax paid abroad may still need Dutch reporting and relief mapping.",
      whatThisMeansForYou:
        "Property income is often taxed where the property sits; if you are likely Dutch resident, you may still declare it in NL and map foreign tax to relief.",
    };
  }
  if (type === "dividends_investments") {
    return {
      incomeType: type,
      likelyTaxedIn: "Source country withholding plus residence-country relevance is common",
      why: "Dividends and interest often involve source withholding and residence-level declaration.",
      nlDeclarationLikelyMatters: residentLike ? "Often yes." : "May still matter for Dutch-source investments.",
      doubleTaxRisk: "medium",
      cautionNote: "Keep annual statements and withholding certificates.",
      whatThisMeansForYou:
        "Keep foreign statements and withholding certificates — you often need them for both declaration and credit/exemption support.",
    };
  }
  if (type === "foreign_business_income") {
    return {
      incomeType: type,
      likelyTaxedIn: `May involve both ${mainOther} and Netherlands depending on facts`,
      why: "Business place of management and where activities happen can change treatment.",
      nlDeclarationLikelyMatters: "Often yes when Dutch residency or Dutch activity exists.",
      doubleTaxRisk: "high",
      cautionNote: "Treaty and domestic business rules should be reviewed by an advisor.",
      whatThisMeansForYou:
        "Cross-border business lines usually need structured records and professional review before filing.",
    };
  }
  if (type === "pension_income") {
    return {
      incomeType: type,
      likelyTaxedIn: "Depends on pension type, source country, and treaty allocation",
      why: "Public/private pension categories can follow different treaty outcomes.",
      nlDeclarationLikelyMatters: "Often yes if Dutch resident.",
      doubleTaxRisk: "high",
      cautionNote: "Pension source documentation is important for treaty relief analysis.",
      whatThisMeansForYou:
        "Gather pension type and country documentation early — treaty category drives whether exemption or credit style relief may apply.",
    };
  }
  return {
    incomeType: type,
    likelyTaxedIn: "Mixed and fact-dependent",
    why: "This category can include multiple tax treatments.",
    nlDeclarationLikelyMatters: residentLike ? "Often yes." : "May still matter depending on Dutch-source elements.",
    doubleTaxRisk: "high",
    cautionNote: "Use detailed categorization before filing.",
    whatThisMeansForYou:
      "Split mixed income into clear lines with documents before filing; this bucket usually needs advisor help.",
  };
}

function buildReliefMethods(
  input: DoubleTaxAwarenessInput,
  dualRisk: RiskLevel,
  overallRisk: RiskLevel,
  mapRows: IncomeTaxMapRow[]
): DoubleTaxAwarenessResult["reliefMethodLikely"] {
  const methods = [];
  const hasForeignIncome = mapRows.some((row) => FOREIGN_LINKED_INCOME_TYPES.includes(row.incomeType));
  if (hasForeignIncome) {
    methods.push(
      reliefMethodFromKey("exemption_possible", "Foreign-source property or employment income is often treated with treaty-based exemption logic."),
      reliefMethodFromKey("tax_credit_possible", "Foreign withholding taxes on investments or salary may often be credit candidates.")
    );
  }
  if (dualRisk === "high" || overallRisk === "high") {
    methods.push(
      reliefMethodFromKey("treaty_review_needed", "Dual-residency signals or mixed payroll patterns usually require treaty tie-breaker review.")
    );
  }
  if (!methods.length) {
    methods.push(
      reliefMethodFromKey("unclear_or_domestic", "Current facts look mostly domestic, but filing duties still depend on your full yearly facts.")
    );
  }
  if (input.thirtyPercentRuling !== "no") {
    methods.push(reliefMethodFromKey("unclear_or_domestic", THIRTY_RULING_CONTEXT_TEXT));
  }
  return methods;
}

function buildFilingActions(input: DoubleTaxAwarenessInput, doubleTaxRiskLevel: RiskLevel): FilingAction[] {
  const actions: FilingAction[] = [
    {
      title: "Check whether a Dutch income tax return is required",
      priority: "high",
      whyItMatters: "Likely Dutch residency signals or Dutch-source income often make Dutch filing relevant even when foreign tax also exists.",
    },
  ];

  if (doubleTaxRiskLevel !== "low" || hasForeignLinkedIncome(input)) {
    actions.push({
      title: "Check if a foreign return is also required",
      priority: "high",
      whyItMatters: "Cross-border income frequently creates filing obligations in more than one country, especially with foreign employer or asset links.",
    });
  }
  if (input.taxWithheldAbroad !== "no") {
    actions.push({
      title: "Keep proof of foreign tax paid",
      priority: "high",
      whyItMatters: "Foreign tax certificates are often needed to support exemption or tax-credit claims.",
    });
  }
  actions.push({
    title: "Keep contracts, payslips, payroll letters, and income statements",
    priority: "medium",
    whyItMatters: "Documents make source-of-income mapping and treaty review easier if your filing position is questioned.",
  });
  if (input.permanentHomeNl === "yes" && input.permanentHomeAbroad === "yes") {
    actions.push({
      title: "Confirm treaty tie-breaker if homes exist in both countries",
      priority: "high",
      whyItMatters: "Dual-home facts can materially change residency allocation and which relief path is available.",
    });
  }
  if (input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no") {
    actions.push({
      title: "Verify payroll setup for foreign employer + Netherlands workdays",
      priority: "high",
      whyItMatters: "Payroll mismatch is a common trigger for under-withholding, late corrections, and avoidable filing stress.",
    });
  }
  if (input.thirtyPercentRuling !== "no") {
    actions.push({
      title: "Review 30% ruling separately from treaty analysis",
      priority: "medium",
      whyItMatters: "The ruling may affect payroll taxable base, but it does not determine treaty allocation or foreign filing duties by itself.",
    });
  }
  return actions;
}

export function calculateDoubleTaxAwareness(input: DoubleTaxAwarenessInput): DoubleTaxAwarenessResult {
  const residency = evaluateResidency(input);
  const taxMapByIncomeType = input.incomeTypes.map((type) => mapIncomeType(type, input, residency.assessment.key));

  let riskScore = 0;
  riskScore += residency.dualRisk === "high" ? 5 : residency.dualRisk === "medium" ? 2 : 0;
  riskScore += input.incomeTypes.filter((t) => FOREIGN_LINKED_INCOME_TYPES.includes(t)).length * 2;
  riskScore += input.incomeTypes.some((t) => HIGH_COMPLEXITY_INCOME_TYPES.includes(t)) ? 4 : 0;
  if (input.incomeTypes.includes("rental_income_abroad") || input.incomeTypes.includes("dividends_investments")) riskScore += 2;
  if (input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no") riskScore += 4;
  if (input.workLocationPattern === "mixed") riskScore += 2;
  if (input.crossBorderCommutePattern !== "none") riskScore += 2;
  if (input.hasMajorForeignAssets === "yes") riskScore += 1;

  const doubleTaxRiskLevel = riskFromScore(riskScore);
  const filingComplexity = doubleTaxRiskLevel === "high" ? "complex" : doubleTaxRiskLevel === "medium" ? "moderate" : "standard";

  const topRiskReasons: string[] = [];
  if (residency.dualRisk !== "low") topRiskReasons.push("Possible dual-residency signals may require treaty tie-breaker review.");
  if (input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no")
    topRiskReasons.push("Foreign employer while physically working in the Netherlands can create payroll and filing mismatches.");
  if (input.incomeTypes.some((type) => HIGH_COMPLEXITY_INCOME_TYPES.includes(type)))
    topRiskReasons.push("Self-employment, business, pension, or mixed income usually needs deeper fact review.");
  if (input.incomeTypes.includes("rental_income_abroad")) topRiskReasons.push("Foreign property income is often taxable abroad but still relevant in Dutch filing.");
  if (input.incomeTypes.includes("dividends_investments")) topRiskReasons.push("Investment income can involve withholding abroad plus Dutch declaration relevance.");

  const topProtectiveFactors: string[] = [];
  if (input.payrollInNl === "yes") topProtectiveFactors.push("Dutch payroll can reduce withholding surprises for Dutch-source salary.");
  if (input.keptForeignTaxDocuments === "yes") topProtectiveFactors.push("You already keep foreign tax documents, which helps support relief claims.");
  if (input.expectsForeignReturn === "yes") topProtectiveFactors.push("Early expectation of dual filing often leads to better preparation.");

  const reliefMethodLikely = buildReliefMethods(input, residency.dualRisk, doubleTaxRiskLevel, taxMapByIncomeType);
  const filingActions = buildFilingActions(input, doubleTaxRiskLevel);

  const escalationFlags: string[] = [];
  if (input.permanentHomeNl === "yes" && input.permanentHomeAbroad === "yes") escalationFlags.push("Dual home availability across countries");
  if (input.incomeTypes.some((type) => type === "freelance_self_employed" || type === "foreign_business_income"))
    escalationFlags.push("Self-employment or business income across borders");
  if (input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no") escalationFlags.push("Foreign employer with work performed in the Netherlands");
  if (input.isDirectorShareholderOwner === "yes") escalationFlags.push("Director/shareholder/business-owner complexity");
  if (input.incomeTypes.includes("pension_income")) escalationFlags.push("Pension allocation can require treaty-specific interpretation");

  const recordKeepingChecklist = [
    "Payslips and annual salary statements",
    "Foreign tax assessments and withholding certificates",
    "Rental statements and annual property summaries",
    "Bank and investment statements",
    "Employer payroll and assignment letters",
    "Residency evidence (addresses, registration dates, travel/workday logs)",
  ];

  const likelyNextStep =
    doubleTaxRiskLevel === "high"
      ? "Prepare documents early and schedule advisor review before filing deadlines."
      : doubleTaxRiskLevel === "medium"
        ? "Map each income line clearly and confirm likely relief method before filing."
        : "Keep records organized, file on time, and monitor any new foreign income triggers.";

  const summaryCards = [
    {
      label: "Likely residency signal",
      value: residency.assessment.headline,
      note: `Signal strength (not a legal test): ${formatResidencyConfidence(residency.assessment.confidence)}`,
    },
    {
      label: "Double-tax risk",
      value: doubleTaxRiskLevel.toUpperCase(),
      note: "Planning view only, based on your factual signals.",
    },
    {
      label: "Filing complexity",
      value: filingComplexity,
      note: "Higher complexity usually means more records and earlier checks.",
    },
    {
      label: "Likely next step",
      value: likelyNextStep,
      note: "Verify with official sources and advisor when needed.",
    },
  ];

  const reasoning = [
    "We look at your time in the Netherlands, homes, family ties, and where work is performed to produce a directional residency signal — not a final legal test.",
    "We map each income type to where tax is commonly relevant and whether a Dutch declaration may still matter if you live in the Netherlands.",
    "We highlight where treaty-style relief may be worth exploring; we do not compute final tax or choose treaty articles for you.",
  ];

  const advancedReasoning = [
    "Residency and complexity use deterministic signal weighting (BRP, months, homes, work pattern, payroll, income mix). Thresholds are planning-only.",
    "Income rows follow treaty-awareness patterns, not country-specific article engines.",
    "Relief labels (exemption, credit, treaty review) are directional categories — actual relief depends on domestic law, treaty text, and your evidence.",
    "Payroll withholding and filing obligation are different problems: correct payroll does not automatically remove declaration duties.",
  ];

  const { verdict: payTaxTwiceVerdict, summary: payTaxTwiceSummary } = derivePayTaxTwice(
    input,
    residency.assessment.key,
    residency.dualRisk,
    doubleTaxRiskLevel
  );
  const likelyFilingCountriesSummary = deriveLikelyFilingCountriesSummary(input, residency.assessment.key);
  const whatThisLikelyMeans = deriveWhatThisLikelyMeans(
    input,
    residency.assessment.key,
    doubleTaxRiskLevel,
    filingComplexity,
    payTaxTwiceVerdict,
    likelyFilingCountriesSummary
  );
  const whatCouldChangeOutcome = deriveWhatCouldChangeOutcome(input);
  const whenToolNotEnough = deriveWhenToolNotEnough(input);
  const professionalReview = deriveProfessionalReview(input, residency.dualRisk, doubleTaxRiskLevel, filingComplexity);

  return {
    residencyAssessment: residency.assessment,
    dualResidencyRisk: residency.dualRisk,
    doubleTaxRiskLevel,
    filingComplexity,
    likelyNextStep,
    taxMapByIncomeType,
    reliefMethodLikely,
    filingActions,
    recordKeepingChecklist,
    escalationFlags,
    summaryCards,
    reasoning,
    advancedReasoning,
    topRiskReasons: topRiskReasons.slice(0, 3),
    topProtectiveFactors: topProtectiveFactors.slice(0, 3),
    payTaxTwiceVerdict,
    payTaxTwiceSummary,
    whatThisLikelyMeans,
    whatCouldChangeOutcome,
    whenToolNotEnough,
    professionalReview,
    likelyFilingCountriesSummary,
  };
}

export function summarizeIncomeTypes(types: IncomeType[]): string {
  if (!types.length) return "No income type selected";
  return types.map((t) => incomeTypeLabel(t)).join(", ");
}
