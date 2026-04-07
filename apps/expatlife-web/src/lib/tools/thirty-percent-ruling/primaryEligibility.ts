import { applicableThresholdAnnual } from "./allowance";
import type {
  EmployeeCategory,
  EligibilityChecklistRow,
  PrimaryEligibilityOutcome,
  PrimaryEligibilityStatus,
  ThirtyPercentCalculatorInputs,
  ThirtyPercentYearEstimate,
  TriStateAnswer,
} from "./types";

function triLabel(v: TriStateAnswer): string {
  if (v === "yes") return "Yes";
  if (v === "no") return "No";
  return "Not sure";
}

function isSpecialSalaryRoute(cat: EmployeeCategory): boolean {
  return cat === "researcher" || cat === "doctor_training";
}

function countUncertain(a: TriStateAnswer, b: TriStateAnswer, c: TriStateAnswer): number {
  return [a, b, c].filter((x) => x === "unsure").length;
}

export function buildPrimaryEligibilityOutcome(
  inputs: ThirtyPercentCalculatorInputs,
  primary: ThirtyPercentYearEstimate
): PrimaryEligibilityOutcome {
  const threshold = applicableThresholdAnnual(inputs.age, inputs.qualifyingMasters);
  const cat = inputs.employeeCategory;
  const specialRoute = isSpecialSalaryRoute(cat);
  const meetsNorm = primary.meetsSalaryThreshold;

  const employer = inputs.employerApplyIntent;
  const abroad = inputs.recruitedFromAbroad;
  const km = inputs.distanceRule150km;

  const uncertainCount = countUncertain(employer, abroad, km);
  const hardNoContext = employer === "no" || abroad === "no" || km === "no";

  const mastersApplies = inputs.qualifyingMasters && inputs.age < 30;
  const mastersRowDetail = inputs.qualifyingMasters
    ? inputs.age < 30
      ? "Reduced under-30 master’s norm applies in this model."
      : "You indicated a master’s, but the reduced norm only applies when you are under 30 at the relevant time — confirm your facts."
    : "Standard salary norm applies.";

  const checklist: EligibilityChecklistRow[] = [];

  if (cat === "unsure") {
    checklist.push({
      id: "category",
      label: "Employee category",
      state: "uncertain",
      detail: "Pick a category or confirm with payroll — researcher / specialist-training routes follow different rules.",
    });
  } else if (specialRoute) {
    checklist.push({
      id: "category",
      label: "Special category (researcher / specialist training)",
      state: "info",
      detail:
        "You selected a route where the standard salary norm may not apply the same way. Confirm your role and documentation with the Belastingdienst or a tax advisor — this tool still shows a planning allowance on your gross.",
    });
  } else {
    checklist.push({
      id: "category",
      label: "Employee category",
      state: "pass",
      detail: "Regular employee route — salary norm applies in this planning model.",
    });
  }

  checklist.push({
    id: "salary-norm",
    label: `Relevant salary norm (${mastersApplies ? "under-30 master’s" : "standard"})`,
    state: "info",
    detail: `${threshold.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })} · ${mastersRowDetail}`,
  });

  if (specialRoute) {
    checklist.push({
      id: "salary-vs-norm",
      label: "Your combined gross vs norm",
      state: meetsNorm ? "info" : "info",
      detail: meetsNorm
        ? `About ${primary.grossAnnual.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })} — at/above the planning norm shown for comparison. Special category may still need separate confirmation.`
        : `About ${primary.grossAnnual.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })} — below the comparative norm; special category routes may still qualify — confirm with official guidance.`,
    });
  } else {
    checklist.push({
      id: "salary-vs-norm",
      label: "Your salary vs norm",
      state: meetsNorm ? "pass" : "fail",
      detail: meetsNorm
        ? `Combined gross meets the planning norm (€${threshold.toLocaleString("en-NL")}).`
        : `Combined gross is below the planning norm (€${threshold.toLocaleString("en-NL")}).`,
    });
  }

  checklist.push({
    id: "masters",
    label: "Under-30 master’s reduction",
    state: inputs.qualifyingMasters ? (mastersApplies ? "pass" : "uncertain") : "na",
    detail: inputs.qualifyingMasters
      ? mastersApplies
        ? "Master’s + under 30: reduced norm used for comparison."
        : "Master’s indicated but age 30+ in this model — standard norm applies."
      : "Not using the reduced master’s norm.",
  });

  const employerState: EligibilityChecklistRow["state"] =
    employer === "yes" ? "pass" : employer === "no" ? "fail" : "uncertain";
  checklist.push({
    id: "employer",
    label: "Employer applies jointly / maintains ruling",
    state: employerState,
    detail: `You selected: ${triLabel(employer)}. The facility is requested via the employer with the tax office.`,
  });

  const abroadState: EligibilityChecklistRow["state"] =
    abroad === "yes" ? "pass" : abroad === "no" ? "fail" : "uncertain";
  checklist.push({
    id: "abroad",
    label: "Recruited from abroad",
    state: abroadState,
    detail: `You selected: ${triLabel(abroad)}. Official rules look at your facts and documentation, not this button.`,
  });

  const kmState: EligibilityChecklistRow["state"] = km === "yes" ? "pass" : km === "no" ? "fail" : "uncertain";
  checklist.push({
    id: "150km",
    label: "150 km / 24-month distance condition (self-reported)",
    state: kmState,
    detail: `You selected: ${triLabel(km)}. Evidence and edge cases matter — confirm maps, dates, and border cases with official sources or an advisor.`,
  });

  if (inputs.priorThirtyPercentRuling === "yes") {
    checklist.push({
      id: "prior",
      label: "Prior 30% ruling",
      state: "info",
      detail: "Re-application and continuity rules can differ — confirm timing, distance history, and employer handover with a tax advisor.",
    });
  } else if (inputs.priorThirtyPercentRuling === "unsure") {
    checklist.push({
      id: "prior",
      label: "Prior 30% ruling",
      state: "uncertain",
      detail: "If you might have had the ruling before, mention it to HR or an advisor — prior decisions can change the path.",
    });
  }

  if (inputs.changingEmployerInNL === "yes") {
    checklist.push({
      id: "change-emp",
      label: "Changing employer in the Netherlands",
      state: "info",
      detail: "A move between Dutch employers can affect continuity — payroll and the tax office usually need a coordinated re-application within deadlines.",
    });
  }

  checklist.push({
    id: "months",
    label: "Months in scope (estimate)",
    state: "pass",
    detail: `${primary.monthsApplicable} / 12 — allowance prorated in this model.`,
  });

  const salaryBlocks =
    !specialRoute && !meetsNorm ? true : cat === "unsure" && !meetsNorm && !specialRoute;

  let status: PrimaryEligibilityStatus;

  if (uncertainCount >= 2) {
    status = "insufficient_information";
  } else if (hardNoContext) {
    status = "unlikely_eligible";
  } else if (salaryBlocks) {
    status = "unlikely_eligible";
  } else if (uncertainCount === 1 || cat === "unsure" || inputs.priorThirtyPercentRuling !== "no" || inputs.changingEmployerInNL === "yes") {
    status = "possibly_eligible";
  } else if (employer === "yes" && abroad === "yes" && km === "yes" && (specialRoute || meetsNorm)) {
    status = "likely_eligible";
  } else {
    status = "possibly_eligible";
  }

  if (status === "likely_eligible" && (inputs.priorThirtyPercentRuling === "yes" || inputs.changingEmployerInNL === "yes")) {
    status = "possibly_eligible";
  }

  if (status === "likely_eligible" && inputs.priorThirtyPercentRuling === "unsure") {
    status = "possibly_eligible";
  }

  const headline =
    status === "likely_eligible"
      ? "Likely eligible"
      : status === "possibly_eligible"
        ? "Possibly eligible — needs confirmation"
        : status === "unlikely_eligible"
          ? "Unlikely eligible"
          : "Not enough information";

  let explanation = "";
  if (status === "insufficient_information") {
    explanation =
      "Several key facts are still marked “not sure”. In real applications, recruitment history, distance evidence, and employer filing usually decide the outcome — we are not showing a confident signal yet.";
  } else if (status === "unlikely_eligible") {
    if (!specialRoute && !meetsNorm) {
      explanation =
        "On a regular employee route, your combined gross is below the planning salary norm used here, or a core condition is marked “no”. That usually makes approval unlikely on salary grounds alone — confirm definitions with payroll.";
    } else {
      explanation =
        "A core condition is marked “no” (employer filing, recruited-from-abroad narrative, or the distance condition as you reported it). That typically blocks the facility unless your fact pattern is different from what you entered.";
    }
  } else if (status === "possibly_eligible") {
    explanation =
      "Your answers are directionally positive, but something still needs verification — category, prior ruling, employer change, or an unanswered item. This is a common outcome until documents and payroll review the file.";
  } else {
    explanation =
      "Based on what you entered, the main planning signals line up: salary norm (or special route), employer cooperation, recruitment-from-abroad, and the distance condition are all positive. Official approval and payroll can still differ — treat this as a planning view.";
  }

  const caveatLine =
    "Planning estimate only — not a Belastingdienst decision, not payroll, and not legal advice. Confirm every item with official sources, your employer, or a Dutch tax advisor.";

  const nextStepBullets: string[] = [
    "Gather evidence for the 150 km / 24-month rule (addresses, dates) if you proceed with an application.",
    "Confirm your employer will file jointly and which payroll team owns the process.",
    "If you rely on the under-30 master’s norm, confirm your degree and age timing with HR.",
    "If you are a researcher or in specialist training, confirm the exact Belastingdienst category — do not assume from this tool alone.",
    "Book a Dutch expat tax advisor if you are near the threshold, changing employer, or had a prior ruling.",
  ];

  return {
    status,
    headline,
    explanation,
    caveatLine,
    checklist,
    nextStepBullets,
  };
}
