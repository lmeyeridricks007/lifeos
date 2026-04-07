import type {
  DecodeHints,
  ExplanationCard,
  MoneyField,
  PayslipParseResult,
} from "@/src/lib/tools/payslip/types";

const EXPLAIN: Record<string, string> = {
  "Gross salary (bruto)":
    "This is usually your salary before payroll tax and most employee deductions — check your contract for whether holiday allowance is included separately.",
  "Net salary (netto)":
    "This is what is usually paid to your bank after wage tax and employee-side deductions shown on the payslip. It is not the same as your annual tax bill.",
  "Wage tax / loonheffing":
    "This is payroll withholding toward Dutch income tax and national insurance components handled via payroll — not your final annual settlement.",
  "Holiday allowance (vakantiegeld)":
    "Often around 8% of salary; some employers accrue monthly and pay in May/June or spread differently. Your contract states how it is built up.",
  "Employee pension contribution":
    "This is typically your share of a pension scheme when your employer participates. Rules and caps depend on the pension fund or insurer.",
  "Employer pension contribution":
    "Employer-side pension cost is often shown for transparency; it is usually not deducted from your net pay.",
  "Taxable wage (belastbaar loon)":
    "The wage amount payroll uses in the withholding model can differ from gross contract salary because of exemptions, allowances, or corrections.",
  "Social / employee premiums (simplified)":
    "Payslips may show several employee insurance lines. We group a single matched line here for orientation — not a full social premium breakdown.",
  "Social contributions (employee side, simplified)":
    "Payslips may show several employee insurance lines. We group a single matched line here for orientation — not a full social premium breakdown.",
  "Bijzonder tarief (withholding %)":
    "A special withholding percentage or related amount your employer may show — not the same as your final annual tax rate.",
  Vergoeding:
    "Reimbursements (vergoedingen) repay expenses or provide allowances; tax treatment depends on the type — confirm with payroll if unsure.",
  Inhouding: "A generic withholding line — the label next to it should say what is being withheld.",
};

function explainForLabel(label: string): string {
  if (EXPLAIN[label]) return EXPLAIN[label];
  if (label.toLowerCase().includes("vergoeding")) return EXPLAIN.Vergoeding;
  if (label.toLowerCase().includes("inhouding")) return EXPLAIN.Inhouding;
  if (label.toLowerCase().includes("bijzonder")) return EXPLAIN["Bijzonder tarief (withholding %)"];
  return "This line appeared on your payslip text; confirm the exact meaning with your employer’s payroll team.";
}

/** Build human-readable explanation cards from parsed fields (no invented numbers). */
export function buildExplanationCards(parsed: PayslipParseResult): ExplanationCard[] {
  const cards: ExplanationCard[] = [];
  const pushMoney = (id: string, field: MoneyField | undefined, kind: ExplanationCard["kind"]) => {
    if (!field) return;
    cards.push({
      id,
      title: field.label,
      explanation: explainForLabel(field.label),
      sourceLine: field.sourceLine,
      labelFound: field.labelFound,
      normalizedAmount: field.normalizedAmount,
      confidence: field.confidence,
      kind,
    });
  };

  pushMoney("gross", parsed.grossSalary, "money");
  pushMoney("net", parsed.netSalary, "money");
  pushMoney("tax", parsed.wageTax, "money");
  pushMoney("holiday", parsed.holidayAllowance, "money");
  pushMoney("taxable", parsed.taxableWage, "money");
  pushMoney("pen-emp", parsed.pensionEmployee, "money");
  pushMoney("pen-er", parsed.pensionEmployer, "money");
  pushMoney("social", parsed.socialContributions, "money");
  pushMoney("bijzonder", parsed.specialWithholdingRate, "money");

  if (parsed.reimbursements?.length) {
    parsed.reimbursements.forEach((r, i) => {
      cards.push({
        id: `reimb-${i}`,
        title: r.label,
        explanation: explainForLabel("Vergoeding"),
        sourceLine: r.sourceLine,
        confidence: r.confidence,
        kind: "money",
      });
    });
  }

  if (parsed.deductions?.length) {
    parsed.deductions.forEach((d, i) => {
      cards.push({
        id: `ded-${i}`,
        title: d.label,
        explanation: explainForLabel(d.label),
        sourceLine: d.sourceLine,
        confidence: d.confidence,
        kind: "deduction",
      });
    });
  }

  return cards;
}

const CORE_TRACKING: Array<{
  id: string;
  missingLabel: string;
  present: (p: PayslipParseResult) => boolean;
}> = [
  { id: "gross", missingLabel: "Gross salary (bruto)", present: (p) => Boolean(p.grossSalary) },
  {
    id: "net",
    missingLabel: "Net / take-home pay (netto)",
    present: (p) => Boolean(p.netSalary) || Boolean(p.ambiguousNetCandidates?.length),
  },
  { id: "wageTax", missingLabel: "Wage tax / loonheffing", present: (p) => Boolean(p.wageTax) },
  { id: "taxable", missingLabel: "Taxable wage (belastbaar loon)", present: (p) => Boolean(p.taxableWage) },
  { id: "holiday", missingLabel: "Holiday allowance (vakantiegeld)", present: (p) => Boolean(p.holidayAllowance) },
  { id: "pensionEmp", missingLabel: "Employee pension contribution", present: (p) => Boolean(p.pensionEmployee) },
];

export function buildDecodeHints(parsed: PayslipParseResult): DecodeHints {
  const presentCount = CORE_TRACKING.filter((c) => c.present(parsed)).length;
  const anyParsedValue = Boolean(
    parsed.grossSalary ||
      parsed.netSalary ||
      parsed.wageTax ||
      parsed.taxableWage ||
      parsed.holidayAllowance ||
      parsed.pensionEmployee ||
      parsed.pensionEmployer ||
      parsed.socialContributions ||
      parsed.specialWithholdingRate ||
      (parsed.reimbursements && parsed.reimbursements.length > 0) ||
      (parsed.ambiguousNetCandidates && parsed.ambiguousNetCandidates.length > 0)
  );

  const missingFields = CORE_TRACKING.filter((c) => !c.present(parsed)).map((c) => c.missingLabel);
  const partialDecode = anyParsedValue && missingFields.length > 0;
  const suggestCheckRawText = partialDecode || Boolean(parsed.ambiguousNetCandidates?.length);

  let summaryLine = "";
  if (parsed.ambiguousNetCandidates?.length) {
    summaryLine =
      "We decoded part of your payslip, but net pay is ambiguous — compare the candidate lines below with your bank transfer.";
  } else if (partialDecode) {
    summaryLine =
      "We decoded part of your payslip — some common fields were not detected automatically. Check the raw text and the missing-field list below.";
  } else {
    summaryLine = "";
  }

  return {
    partialDecode,
    missingFields,
    suggestCheckRawText,
    summaryLine,
  };
}

export function buildSummaryMessage(
  quality: "good" | "partial" | "poor",
  parsed: PayslipParseResult,
  hints?: DecodeHints
): string {
  if (hints?.summaryLine) return hints.summaryLine;

  const hasKey =
    Boolean(parsed.grossSalary || parsed.netSalary || parsed.wageTax || parsed.taxableWage || parsed.holidayAllowance);

  if (quality === "poor" && !hasKey) {
    return "We could not reliably decode this payslip.";
  }
  if (quality === "poor" && hasKey) {
    return "We extracted some data, but parts of the document were unclear.";
  }
  if (quality === "partial") {
    return hasKey
      ? "We extracted some data, but parts of the document were unclear."
      : "We could not reliably decode this payslip.";
  }
  return hasKey ? "We found key payslip values." : "We extracted text, but no clear payroll totals were detected automatically.";
}
