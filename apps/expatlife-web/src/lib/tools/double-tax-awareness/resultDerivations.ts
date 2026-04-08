/**
 * V2 derived fields: plain-language summaries, pay-twice framing, escalation copy, filing-country hints.
 * All deterministic from input + core engine outputs.
 */

import { hasForeignLinkedIncome, FOREIGN_LINKED_INCOME_TYPES, HIGH_COMPLEXITY_INCOME_TYPES } from "./rules";
import type {
  DoubleTaxAwarenessInput,
  DoubleTaxAwarenessResult,
  PayTaxTwiceVerdict,
  ProfessionalReviewLevel,
  ResidencyAssessmentKey,
  RiskLevel,
} from "./types";
import { toCountryLabel } from "./helpers";

export function derivePayTaxTwice(
  input: DoubleTaxAwarenessInput,
  residencyKey: ResidencyAssessmentKey,
  dualRisk: RiskLevel,
  doubleTaxRiskLevel: RiskLevel
): { verdict: PayTaxTwiceVerdict; summary: string } {
  const foreignIncome = hasForeignLinkedIncome(input);
  const residentLike = residencyKey === "likely_dutch_resident" || residencyKey === "possible_dual_residency";
  const messyDocs = input.taxWithheldAbroad === "not_sure" && input.keptForeignTaxDocuments === "no";

  if (
    doubleTaxRiskLevel === "high" ||
    dualRisk === "high" ||
    (residentLike && foreignIncome && input.expectsForeignReturn !== "no") ||
    messyDocs
  ) {
    return {
      verdict: "needs_review",
      summary:
        "Filing in two countries does not automatically mean tax is paid twice — treaties, exemptions, and credits often reduce overlap. In your scenario, the main risk is usually filing complexity, documentation, and getting the relief story right, not necessarily paying full tax twice. Specialist review is often sensible before you rely on a position.",
    };
  }

  if (doubleTaxRiskLevel === "medium" || dualRisk === "medium" || (residentLike && foreignIncome)) {
    return {
      verdict: "possible",
      summary:
        "Double payment is possible without correct relief, but many expats file in two countries and offset overlap through treaty methods. Your pattern suggests keeping strong records and confirming relief early.",
    };
  }

  return {
    verdict: "unlikely",
    summary:
      "With mostly Dutch-only income and lower cross-border signals, actual double taxation is less commonly the core problem — but filing duties and payroll alignment still deserve a quick check.",
  };
}

export function deriveWhatCouldChangeOutcome(input: DoubleTaxAwarenessInput): string[] {
  const out: string[] = [];
  if (input.monthsInOtherMainCountry < 6) {
    out.push("More time spent in another country in the tax year can shift which country’s residency signals dominate.");
  }
  if (input.permanentHomeAbroad === "no") {
    out.push("A permanent home outside the Netherlands would strengthen foreign ties and can trigger dual-residency analysis.");
  }
  if (input.familyMostlyInNl === "yes") {
    out.push("If family or center of life moves abroad, tie-breaker and residency narratives often change.");
  }
  if (input.mainWorkPhysicallyInNl === "yes" || input.mainWorkPhysicallyInNl === "partly") {
    out.push("A different split of physical workdays across borders can change payroll and treaty allocation.");
  }
  if (input.employerInNl === "yes" && input.payrollInNl === "yes") {
    out.push("Foreign employer or offshore payroll (instead of Dutch payroll) often changes withholding and filing friction.");
  }
  out.push("Treaty tie-breaker tests and specific treaty articles can change outcomes when facts are borderline.");
  return out.slice(0, 6);
}

export function deriveWhenToolNotEnough(input: DoubleTaxAwarenessInput): string[] {
  const base = [
    "Homes available in two countries with meaningful time in both.",
    "Director, shareholder, equity, or complex business structures spanning countries.",
    "Self-employment or freelance income with clients or activities in more than one country.",
    "Arrival or departure mid-year with multiple payrolls or compensation currencies.",
    "Pension, trust, or large investment structures with cross-border elements.",
    "U.S. citizens/green card holders or other nationality-specific tax systems (often layered on top of Dutch rules).",
    "Foreign company ownership or questions about permanent establishment / fixed base.",
  ];
  const extra: string[] = [];
  if (input.isDirectorShareholderOwner === "yes") {
    extra.push("Your inputs include director/shareholder patterns — governance and compensation often need bespoke review.");
  }
  return [...extra, ...base];
}

export function deriveProfessionalReview(
  input: DoubleTaxAwarenessInput,
  dualRisk: RiskLevel,
  doubleTaxRiskLevel: RiskLevel,
  filingComplexity: DoubleTaxAwarenessResult["filingComplexity"]
): { level: ProfessionalReviewLevel; title: string; bullets: string[] } {
  const bullets: string[] = [];
  if (input.permanentHomeNl === "yes" && input.permanentHomeAbroad === "yes") {
    bullets.push("Dual homes — tie-breaker and evidence timelines often need professional mapping.");
  }
  if (input.payrollInNl === "no" && input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no") {
    bullets.push("Employer outside NL with Dutch workdays — verify withholding and filing sequence with payroll and tax support.");
  }
  if (input.incomeTypes.includes("rental_income_abroad") && (input.registeredInNlBrp === "yes" || input.monthsInNetherlands >= 6)) {
    bullets.push("Foreign property plus strong Dutch ties — reporting and relief mapping is commonly advisor-led.");
  }
  if (input.taxWithheldAbroad === "not_sure" || input.keptForeignTaxDocuments === "no") {
    bullets.push("Foreign withholding or missing certificates — weak documentation often blocks relief claims.");
  }
  if (dualRisk === "high") {
    bullets.push("Treaty residence conflict signals — article-level review is often appropriate.");
  }
  if (input.incomeTypes.some((t) => t === "freelance_self_employed" || t === "foreign_business_income")) {
    bullets.push("Self-employment or business income across borders — PE and treaty business articles may matter.");
  }
  if (input.isDirectorShareholderOwner === "yes") {
    bullets.push("Director/shareholder remuneration and equity — disclosure and treaty angles are frequently non-obvious.");
  }

  const specialistSignal =
    filingComplexity === "complex" &&
    doubleTaxRiskLevel === "high" &&
    (dualRisk === "high" || input.isDirectorShareholderOwner === "yes" || input.incomeTypes.includes("pension_income"));
  const strongSignal =
    doubleTaxRiskLevel === "high" ||
    dualRisk === "high" ||
    (input.permanentHomeNl === "yes" && input.permanentHomeAbroad === "yes");

  let level: ProfessionalReviewLevel = "review_recommended";
  let title = "When to get professional review";
  if (specialistSignal) {
    level = "specialist_review_likely_needed";
    title = "Specialist review likely needed for parts of this scenario";
  } else if (strongSignal) {
    level = "strong_review_recommended";
    title = "Strong review recommended before you finalize filing positions";
  } else if (doubleTaxRiskLevel === "medium" || hasForeignLinkedIncome(input)) {
    level = "review_recommended";
    title = "Review recommended to confirm filing and relief";
  } else {
    title = "Optional sanity check";
    if (!bullets.length) {
      bullets.push("If anything in your facts is uncertain, a short advisor call can prevent expensive corrections later.");
    }
  }

  return { level, title, bullets: bullets.slice(0, 6) };
}

export function deriveLikelyFilingCountriesSummary(
  input: DoubleTaxAwarenessInput,
  residencyKey: ResidencyAssessmentKey
): string {
  const main = toCountryLabel(input.mainOtherCountryCode);
  const residentLike = residencyKey === "likely_dutch_resident" || residencyKey === "possible_dual_residency";
  const nlLikely = residentLike || residencyKey === "insufficient_or_mixed_signals";
  const foreignLikely =
    hasForeignLinkedIncome(input) ||
    input.expectsForeignReturn === "yes" ||
    input.monthsInOtherMainCountry >= 4 ||
    residencyKey === "likely_non_resident" ||
    residencyKey === "possible_dual_residency";

  if (nlLikely && foreignLikely && main !== "No extra country selected") {
    return `Planning view: you may need to think about both the Netherlands and ${main} (and possibly other countries if income is sourced elsewhere). Verify with official guidance.`;
  }
  if (nlLikely && foreignLikely) {
    return "Planning view: both Dutch filing and at least one foreign filing may be in scope, depending on final facts.";
  }
  if (nlLikely) {
    return "Planning view: Dutch income tax filing is commonly in scope; confirm whether any foreign return is also required.";
  }
  return "Planning view: foreign filing may be primary; Dutch-source income or workdays can still trigger Dutch relevance — confirm facts.";
}

export function deriveWhatThisLikelyMeans(
  input: DoubleTaxAwarenessInput,
  residencyKey: ResidencyAssessmentKey,
  doubleTaxRiskLevel: RiskLevel,
  filingComplexity: DoubleTaxAwarenessResult["filingComplexity"],
  payVerdict: PayTaxTwiceVerdict,
  filingCountriesSummary: string
): string[] {
  const bullets: string[] = [];
  bullets.push(filingCountriesSummary);
  if (payVerdict === "unlikely") {
    bullets.push("The main tension is less often “paying tax twice” and more often getting filing scope and records right.");
  } else if (payVerdict === "possible") {
    bullets.push("Relief methods may apply, but you will usually still need disciplined filing and documentation on both sides.");
  } else {
    bullets.push("Expect more moving parts: residency story, withholding evidence, and treaty/relief sequencing often need careful prep.");
  }
  if (hasForeignLinkedIncome(input)) {
    bullets.push("Foreign-source lines often still belong in a Dutch context when you are likely Dutch resident — declaration is not the same as paying full tax twice.");
  }
  if (filingComplexity !== "standard") {
    bullets.push("Higher filing complexity usually means starting earlier on records and professional checkpoints.");
  } else {
    bullets.push("Keep payslips and any foreign statements even when the pattern looks simple — facts can change mid-year.");
  }
  return bullets.slice(0, 5);
}

export function professionalReviewLevelLabel(level: ProfessionalReviewLevel): string {
  if (level === "specialist_review_likely_needed") return "Specialist review likely needed";
  if (level === "strong_review_recommended") return "Strong review recommended";
  return "Review recommended";
}

export function payTaxTwiceTitle(verdict: PayTaxTwiceVerdict): string {
  if (verdict === "unlikely") return "Unlikely — but filing scope still matters";
  if (verdict === "possible") return "Possible without relief — often manageable with filing discipline";
  return "Needs review before relying on a position";
}
