/**
 * Maps decoder v2 output into legacy PayslipParseResult for insights + backward compatibility.
 */
import type { ExtractedField, PayslipDecoderResult } from "@/src/lib/tools/payslip/decoder/types";
import type {
  AmountCandidate,
  DeductionField,
  DecodedTerm,
  GlossaryLineHighlight,
  MoneyField,
  PayslipParseResult,
} from "@/src/lib/tools/payslip/types";

function pickField(fields: ExtractedField[], key: ExtractedField["key"]): ExtractedField | undefined {
  return fields.find((f) => f.key === key);
}

function pickAll(fields: ExtractedField[], key: ExtractedField["key"]): ExtractedField[] {
  return fields.filter((f) => f.key === key);
}

function toMoneyField(ef: ExtractedField, displayLabel: string): MoneyField {
  const p = ef.periodAmount;
  const y = ef.ytdAmount;
  const primary = p?.normalized != null ? p : y;
  if (!primary || primary.normalized == null) {
    return {
      label: displayLabel,
      labelFound: ef.rawLabelMatch,
      amount: "",
      normalizedAmount: 0,
      sourceLine: ef.rawLine,
      confidence: ef.confidence,
    };
  }
  return {
    label: displayLabel,
    labelFound: ef.rawLabelMatch,
    amount: primary.raw,
    normalizedAmount: primary.normalized,
    sourceLine: ef.rawLine,
    confidence: ef.confidence,
    ytdAmount: y?.raw,
    ytdNormalizedAmount: y?.normalized ?? undefined,
  };
}

function toDeduction(ef: ExtractedField, label: string): DeductionField {
  const p = ef.periodAmount;
  const y = ef.ytdAmount;
  const primary = p?.normalized != null ? p : y;
  return {
    label,
    labelFound: ef.rawLabelMatch,
    amount: primary?.raw,
    normalizedAmount: primary?.normalized ?? undefined,
    sourceLine: ef.rawLine,
    confidence: ef.confidence,
  };
}

export function toLegacyParseResult(decoder: PayslipDecoderResult): PayslipParseResult {
  const { fields } = decoder;
  const warnings: string[] = [...decoder.summaryNotes];
  if (decoder.extractionQuality === "poor") {
    warnings.push("Extraction quality is low — double-check every line against your original payslip.");
  }

  const nets = pickAll(fields, "net_salary");
  let netSalary: MoneyField | undefined;
  let ambiguousNetCandidates: AmountCandidate[] | undefined;
  if (nets.length > 1) {
    const distinct = new Map<number, ExtractedField>();
    for (const n of nets) {
      const c = Math.round((n.periodAmount?.normalized ?? n.ytdAmount?.normalized ?? 0) * 100);
      if (!distinct.has(c)) distinct.set(c, n);
    }
    if (distinct.size > 1) {
      ambiguousNetCandidates = nets.map((n, i) => ({
        field: "net",
        labelFound: n.rawLabelMatch,
        rawLine: n.rawLine,
        amountDisplay: n.periodAmount?.raw ?? n.ytdAmount?.raw ?? "",
        normalizedAmount: n.periodAmount?.normalized ?? n.ytdAmount?.normalized ?? 0,
        rule: `decoder:net:${i}`,
        score: n.confidence === "high" ? 8 : 5,
      }));
      warnings.push("Multiple net pay lines detected — we did not pick one automatically.");
    } else {
      netSalary = toMoneyField(nets[0]!, "Net salary (netto)");
    }
  } else if (nets.length === 1) {
    netSalary = toMoneyField(nets[0]!, "Net salary (netto)");
  }

  const gross = pickField(fields, "gross_salary");
  const wageTax =
    pickField(fields, "wage_tax") ?? pickField(fields, "wage_tax_tb") ?? pickField(fields, "wage_tax_tbb");
  const taxable = pickField(fields, "taxable_wage_base");
  const holiday = pickField(fields, "holiday_allowance");
  const pensionEmp = pickField(fields, "pension_employee");
  const zvw = pickField(fields, "health_insurance_wage_base");

  const reimbursements: MoneyField[] = [];
  const tf = pickField(fields, "tax_free_reimbursement");
  if (tf) reimbursements.push(toMoneyField(tf, "Tax-free reimbursement (vrijgestelde vergoeding)"));

  const deductions: DeductionField[] = [];
  const labour = pickField(fields, "labour_credit");
  if (labour) deductions.push(toDeduction(labour, "Arbeidskorting (labour tax credit)"));
  const wga = pickField(fields, "wga_deduction");
  if (wga) deductions.push(toDeduction(wga, "WGA / disability fund"));
  const soc = pickField(fields, "social_fund");
  if (soc) deductions.push(toDeduction(soc, "Sociaal fonds"));

  const notableTerms: DecodedTerm[] = [];
  const rulingTb = pickField(fields, "ruling_correction_taxable");
  const rulingBt = pickField(fields, "ruling_correction_special");
  if (rulingTb) {
    notableTerms.push({
      term: "30% ruling correction (taxable base)",
      note: "Payroll correction line — employer-specific treatment.",
    });
  }
  if (rulingBt) {
    notableTerms.push({
      term: "30% ruling correction (special / bijzonder)",
      note: "Payroll correction line — employer-specific treatment.",
    });
  }
  const payTot = pickField(fields, "payments_total");
  const dedTot = pickField(fields, "deductions_total");
  if (payTot) notableTerms.push({ term: "Total payments row", note: payTot.rawLine.slice(0, 120) });
  if (dedTot) notableTerms.push({ term: "Total deductions row", note: dedTot.rawLine.slice(0, 120) });
  const hab = pickField(fields, "holiday_allowance_base");
  if (hab) notableTerms.push({ term: "Holiday allowance base", note: hab.rawLine.slice(0, 120) });
  const ptbb = pickField(fields, "pension_taxable_base");
  if (ptbb) notableTerms.push({ term: "Pension (taxable table column)", note: ptbb.rawLine.slice(0, 120) });
  const wtb = pickField(fields, "wage_tax_tb");
  const wtbb = pickField(fields, "wage_tax_tbb");
  if (wtb) notableTerms.push({ term: "Loonheffing TB column", note: wtb.rawLine.slice(0, 120) });
  if (wtbb) notableTerms.push({ term: "Loonheffing TBB / bijzonder", note: wtbb.rawLine.slice(0, 120) });

  const employer = pickField(fields, "employer_name");
  const employee = pickField(fields, "employee_name");
  const period = pickField(fields, "period_label");
  const job = pickField(fields, "job_title");
  if (job) {
    notableTerms.push({ term: "Job title / functie", note: job.rawLabelMatch });
  }

  const glossaryHighlights: GlossaryLineHighlight[] = decoder.glossaryTerms.slice(0, 24).map((g, i) => ({
    termId: `dec-${i}`,
    term: g.term,
    matchedLines: g.examples?.slice(0, 4) ?? [],
    parsedIntoValue: g.mapped,
  }));

  const unmappedLines = decoder.unresolvedLines
    .filter((u) => u.category === "unknown" || u.category === "probable_deduction_line" || u.category === "probable_payment_line")
    .map((u) => u.rawLine)
    .slice(0, 80);

  return {
    period: period?.rawLine,
    employerName: employer?.rawLine,
    employeeName: employee?.rawLine,
    grossSalary: gross ? toMoneyField(gross, "Gross salary (bruto)") : undefined,
    netSalary,
    taxableWage: taxable ? toMoneyField(taxable, "Taxable wage (heffingsloon / belastbaar loon)") : undefined,
    wageTax: wageTax ? toMoneyField(wageTax, "Wage tax / loonheffing") : undefined,
    holidayAllowance: holiday ? toMoneyField(holiday, "Holiday allowance (vakantiegeld)") : undefined,
    pensionEmployee: pensionEmp ? toMoneyField(pensionEmp, "Employee pension contribution") : undefined,
    socialContributions: zvw ? { ...toMoneyField(zvw, "Loon ZVW (health insurance wage base)") } : undefined,
    reimbursements: reimbursements.length ? reimbursements : undefined,
    deductions: deductions.length ? deductions : undefined,
    notableTerms: notableTerms.length ? notableTerms : undefined,
    warnings: warnings.length ? warnings : undefined,
    unmappedLines: unmappedLines.length ? unmappedLines : undefined,
    ambiguousNetCandidates,
    glossaryHighlights,
  };
}
