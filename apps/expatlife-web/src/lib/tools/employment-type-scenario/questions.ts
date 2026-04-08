import type { EmploymentScenarioId, EmploymentTypeScenarioInput, EmploymentTypeScenarioResult, GeneratedQuestion } from "./types";

function inActiveSet(result: EmploymentTypeScenarioResult, id: EmploymentScenarioId): boolean {
  return result.scenarios.some((s) => s.scenarioId === id);
}

/**
 * Scenario-aware questions to raise with HR, payroll, or advisors before signing.
 */
export function generateEmploymentQuestions(input: EmploymentTypeScenarioInput, result: EmploymentTypeScenarioResult): GeneratedQuestion[] {
  const q: GeneratedQuestion[] = [];

  const add = (item: GeneratedQuestion) => q.push(item);

  if (input.pensionInPackage !== "yes") {
    add({
      id: "pension-accrual",
      category: "pension",
      text: "Is pension accrual included in the employee package, and at what contribution rate?",
    });
  }

  add({
    id: "holiday-allowance-timing",
    category: "holiday_pay",
    text: "Is holiday allowance included in the quoted gross or paid separately — and when is it paid?",
  });

  if (input.rulingAssumption !== "no") {
    add({
      id: "ruling-process",
      category: "ruling",
      text: "Is 30% ruling support realistically available for this role, and will the employer handle the application process?",
    });
  }

  if (input.toolMode === "compare_two") {
    if (inActiveSet(result, "contractor")) {
      add({
        id: "contractor-payroll",
        category: "payroll_compliance",
        text: "For the contractor path: which party runs payroll, withholds wage tax, and carries compliance for your engagement?",
      });
    }
    if (inActiveSet(result, "zzp_self_employed")) {
      add({
        id: "zzp-utilization",
        category: "utilization",
        text: "For ZZP: what utilization is realistic after sales, admin, and holiday — and who covers bench time?",
      });
    }
  } else {
    add({
      id: "contractor-transition",
      category: "payroll_compliance",
      text: "For contractor routes: who handles payroll, compliance, and end-of-contract transition?",
    });
    add({
      id: "zzp-buffer",
      category: "utilization",
      text: "For ZZP: what utilization assumption matches your pipeline, and how much cash buffer do you hold?",
    });
  }

  add({
    id: "insurance-who-pays",
    category: "insurance",
    text: "Who pays liability, disability, and health-related costs in each scenario you are weighing?",
  });

  add({
    id: "equipment",
    category: "equipment",
    text: "Who provides laptop, phone, and home-office equipment — and is there a repayment clause?",
  });

  if (input.toolMode === "compare_two" && inActiveSet(result, "fixed_term_employee")) {
    add({
      id: "fixed-term-renewal",
      category: "fixed_term",
      text: "For fixed-term: how likely is renewal, and what happens to permit or benefits if the contract ends?",
    });
  }

  if (input.visaSponsorship === "yes" || input.visaSponsorship === "maybe") {
    add({
      id: "visa-model-fit",
      category: "visa",
      text: "Which work model is actually compatible with your residence route — employer, income threshold, and IND documentation?",
    });
  }

  if (input.bonusExpected) {
    add({
      id: "bonus-pensionable",
      category: "bonus",
      text: "How is variable pay defined (targets, cliff, timing) and is it pensionable in the employee scenario?",
    });
  }

  if (input.includeForeignRemoteScenario && inActiveSet(result, "foreign_remote_employee")) {
    add({
      id: "foreign-social",
      category: "cross_border",
      text: "For foreign payroll: where is social security covered, and how does Dutch residency interact with withholding?",
    });
  }

  add({
    id: "notice-noncompete",
    category: "contract_terms",
    text: "What notice periods, non-compete, or exclusivity terms apply — especially if you switch between models?",
  });

  return dedupeQuestions(q);
}

function dedupeQuestions(items: GeneratedQuestion[]): GeneratedQuestion[] {
  const seen = new Set<string>();
  return items.filter((x) => {
    if (seen.has(x.id)) return false;
    seen.add(x.id);
    return true;
  });
}

export function questionTexts(questions: GeneratedQuestion[]): string[] {
  return questions.map((q) => q.text);
}

/** @deprecated Use generateEmploymentQuestions + questionTexts */
export function buildDynamicQuestions(input: EmploymentTypeScenarioInput, result: EmploymentTypeScenarioResult): string[] {
  return questionTexts(generateEmploymentQuestions(input, result));
}
