import type {
  ContractChecklistAnswers,
  ContractScanResult,
  ClauseFinding,
  HRQuestion,
  KeyRiskCard,
  MissingItem,
  OverallConcernLevel,
  RiskCategoryResult,
  TriState,
} from "@/src/lib/tools/contract-scanner/types";

function keyRiskCardsFromFindings(findings: ClauseFinding[]): KeyRiskCard[] {
  const cards: KeyRiskCard[] = [];
  const bySub = (s: string) => findings.find((f) => f.subcategory.toLowerCase().includes(s.toLowerCase()));
  const p = bySub("probation");
  if (p) cards.push({ id: "kr-probation", title: "Probation", badge: p.riskLabel, summary: p.whyItMatters });
  const n = bySub("non-compete");
  if (n) cards.push({ id: "kr-noncompete", title: "Non-compete", badge: n.riskLabel, summary: n.whyItMatters });
  const r = bySub("relocation");
  if (r) cards.push({ id: "kr-reloc", title: "Relocation repayment", badge: r.riskLabel, summary: r.whyItMatters });
  const t = bySub("30%");
  if (t) cards.push({ id: "kr-30", title: "30% ruling", badge: t.riskLabel, summary: t.whyItMatters });
  const h = findings.find((f) => f.category === "policy_data");
  if (h) cards.push({ id: "kr-handbook", title: "Handbook dependency", badge: h.riskLabel, summary: h.whyItMatters });
  const o = bySub("overtime");
  if (o) cards.push({ id: "kr-overtime", title: "Overtime", badge: o.riskLabel, summary: o.whyItMatters });
  return cards.slice(0, 8);
}

function triYes(v: TriState): boolean {
  return v === "yes";
}

function triNo(v: TriState): boolean {
  return v === "no";
}

function triUnknown(v: TriState): boolean {
  return v === "unknown";
}

export function runChecklistScan(answers: ContractChecklistAnswers): ContractScanResult {
  const findings: ClauseFinding[] = [];
  const missingItems: MissingItem[] = [];
  let idx = 0;

  const addFinding = (partial: Omit<ClauseFinding, "id" | "confidence"> & { confidence?: ClauseFinding["confidence"] }) => {
    findings.push({
      id: `checklist-${idx++}`,
      confidence: partial.confidence ?? "medium",
      ...partial,
    });
  };

  if (answers.contractType === "fixed_term") {
    addFinding({
      category: "contract_structure",
      subcategory: "Fixed-term (checklist)",
      snippet: "You indicated a fixed-term contract.",
      explanation: "Fixed-term roles have specific end-date and renewal considerations.",
      whyItMatters: "Renewal, conversion, and notice may differ from permanent employment.",
      riskLabel: "worth_confirming",
      questionToAsk: "What happens at the end date, and can the contract convert to indefinite?",
    });
  } else if (answers.contractType === "permanent") {
    addFinding({
      category: "contract_structure",
      subcategory: "Permanent / indefinite (checklist)",
      snippet: "You indicated a permanent or indefinite contract.",
      explanation: "Indefinite employment is common in the Netherlands for direct hires.",
      whyItMatters: "Notice periods and probation still need explicit confirmation.",
      riskLabel: "common_standard",
      questionToAsk: "Can you confirm indefinite term and standard notice after probation?",
    });
  }

  if (triYes(answers.nonCompete)) {
    addFinding({
      category: "restrictive_clauses",
      subcategory: "Non-compete (checklist)",
      snippet: "You indicated a non-compete clause is present.",
      explanation: "Non-compete clauses can limit future employers or clients.",
      whyItMatters: "Scope, geography, duration, and any compensation during restriction matter for planning.",
      riskLabel: "potentially_restrictive",
      questionToAsk:
        "Can you clarify whether the non-compete is limited by duration, geography, and role scope, and whether compensation applies during the restriction?",
      appearsBroad: true,
    });
  }

  if (triYes(answers.relocationRepayment)) {
    addFinding({
      category: "expat_immigration",
      subcategory: "Relocation repayment (checklist)",
      snippet: "You indicated relocation repayment terms may apply.",
      explanation: "Relocation repayment clauses can require paying back employer-funded move costs if you leave early.",
      whyItMatters: "Proration and which costs count should be explicit.",
      riskLabel: "potentially_restrictive",
      questionToAsk: "Is relocation repayment prorated by tenure, and exactly which costs are included?",
    });
  }

  if (triYes(answers.thirtyPercentRuling)) {
    addFinding({
      category: "expat_immigration",
      subcategory: "30% ruling (checklist)",
      snippet: "You indicated the 30% ruling is mentioned.",
      explanation: "Mentioning the ruling in paperwork does not guarantee eligibility or employer commitment to apply it.",
      whyItMatters: "Process timing with the tax office and employer obligations should be clear.",
      riskLabel: "worth_confirming",
      questionToAsk: "Is 30% ruling support best-efforts or contractually committed, and who handles the application timeline?",
    });
  }

  if (triYes(answers.handbookReference)) {
    addFinding({
      category: "policy_data",
      subcategory: "Handbook / policies (checklist)",
      snippet: "You indicated the contract references a handbook or policies.",
      explanation: "Important obligations may live outside the main contract PDF.",
      whyItMatters: "You should review incorporated documents before signing.",
      riskLabel: "broad_strong_wording",
      questionToAsk: "Please share the handbook and annexes incorporated by reference before signing.",
    });
  }

  if (triYes(answers.overtimeClause)) {
    addFinding({
      category: "salary_compensation",
      subcategory: "Overtime (checklist)",
      snippet: "You indicated an overtime clause exists.",
      explanation: "Overtime clauses sometimes state extra hours are included in salary.",
      whyItMatters: "Clarify compensation vs expectation for additional hours.",
      riskLabel: "worth_confirming",
      questionToAsk: "Is overtime included in base salary or compensated separately, and how are hours tracked?",
    });
  }

  if (triYes(answers.visaSponsor)) {
    addFinding({
      category: "expat_immigration",
      subcategory: "Visa / permit (checklist)",
      snippet: "You indicated visa or sponsorship wording.",
      explanation: "Permit-linked employment ties legal stay to the job relationship.",
      whyItMatters: "Understand what happens if the role ends or changes materially.",
      riskLabel: "worth_confirming",
      questionToAsk: "What happens if sponsorship ends, processing is delayed, or the job title changes?",
    });
  }

  if (triNo(answers.salaryPresent)) {
    missingItems.push({
      id: "miss-salary",
      label: "Base salary",
      detail: "You indicated salary may be missing from what you reviewed — confirm gross amount and pay period.",
    });
  }
  if (triNo(answers.holidayAllowance)) {
    missingItems.push({
      id: "miss-holiday",
      label: "Holiday allowance",
      detail: "Holiday allowance (vakantiegeld) should be explicit — usually ~8% on top of base unless structured differently.",
    });
  }
  if (triNo(answers.pension)) {
    missingItems.push({
      id: "miss-pension",
      label: "Pension",
      detail: "Pension scheme details are often material to total rewards — ask for provider and contribution split.",
    });
  }
  if (triNo(answers.noticePeriod)) {
    missingItems.push({
      id: "miss-notice",
      label: "Notice period",
      detail: "Notice for employee and employer after probation should be stated or pointed to in CAO.",
    });
  }
  if (triNo(answers.probation)) {
    missingItems.push({
      id: "miss-probation",
      label: "Probation",
      detail: "If probation applies, length and notice during probation should be clear.",
    });
  }

  const dims: RiskCategoryResult[] = [
    { dimension: "salary_clarity", score: triNo(answers.salaryPresent) ? 70 : 30, summary: "Checklist salary signals." },
    { dimension: "termination_clarity", score: triNo(answers.noticePeriod) ? 55 : 25, summary: "Notice visibility." },
    {
      dimension: "restrictive_clauses",
      score: triYes(answers.nonCompete) ? 65 : triUnknown(answers.nonCompete) ? 35 : 15,
      summary: "Non-compete and restrictions.",
    },
    {
      dimension: "overtime_work_time",
      score: triYes(answers.overtimeClause) ? 45 : 20,
      summary: "Overtime expectations.",
    },
    {
      dimension: "expat_immigration",
      score: (triYes(answers.visaSponsor) ? 25 : 0) + (triYes(answers.thirtyPercentRuling) ? 20 : 0),
      summary: "Permit and 30% context.",
    },
    {
      dimension: "repayment_clawback",
      score: triYes(answers.relocationRepayment) ? 60 : 15,
      summary: "Relocation repayment.",
    },
    {
      dimension: "missing_information",
      score: Math.min(100, missingItems.length * 18),
      summary: "Items you flagged as missing.",
    },
    {
      dimension: "policy_dependency",
      score: triYes(answers.handbookReference) ? 50 : 18,
      summary: "Handbook references.",
    },
  ];

  const avg = dims.reduce((a, d) => a + d.score, 0) / dims.length;
  let overallConcern: OverallConcernLevel = "low_concern";
  if (avg >= 52) overallConcern = "high_review_recommended";
  else if (avg >= 42) overallConcern = "elevated_concern";
  else if (avg >= 30) overallConcern = "moderate_concern";

  const hrQuestions: HRQuestion[] = findings.map((f) => ({
    id: `hq-${f.id}`,
    text: f.questionToAsk,
    relatedFindingId: f.id,
  }));

  for (const m of missingItems) {
    hrQuestions.push({
      id: `hq-${m.id}`,
      text: `Regarding ${m.label}: ${m.detail}`,
    });
  }

  const topConcerns: string[] = [];
  if (triYes(answers.nonCompete)) topConcerns.push("Non-compete flagged — confirm scope with HR or a lawyer.");
  if (triYes(answers.relocationRepayment)) topConcerns.push("Relocation repayment flagged — confirm triggers and proration.");
  if (triYes(answers.handbookReference)) topConcerns.push("Handbook incorporation — obtain full policy pack before signing.");
  if (missingItems.length >= 3) topConcerns.push("Several core items appear missing — request a complete contract pack.");

  return {
    mode: "checklist",
    contractType:
      answers.contractType === "permanent"
        ? "permanent"
        : answers.contractType === "fixed_term"
          ? "fixed_term"
          : answers.contractType === "temporary_unknown"
            ? "temporary"
            : "unknown",
    contractTypeConfidence: "low",
    overallConcern,
    scanConfidence: "low",
    topConcerns: topConcerns.slice(0, 4),
    suggestedNextStep:
      "Walk through the questions with HR, then escalate ambiguous or restrictive clauses to an employment lawyer if needed.",
    categoryScores: dims,
    findings,
    hrQuestions,
    missingItems,
    keyRiskCards: keyRiskCardsFromFindings(findings),
    normalizedText: "",
    normalizedTextLength: 0,
  };
}
