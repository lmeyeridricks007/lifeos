/**
 * Orchestrates normalize → line parse → field extract → signals → glossary.
 */
import { detectColumnHeaderContext } from "@/src/lib/payslip/columnHeaderContext";
import { CANONICAL_PAYROLL_TERMS, sortedAliasesForTerm } from "@/src/lib/payslip/canonicalRegistry";
import { classifyUnresolvedLines } from "@/src/lib/tools/payslip/decoder/classifyUnresolvedLines";
import { extractMetadataFields, extractMoneyFields } from "@/src/lib/tools/payslip/decoder/extractPayslipFields";
import { normalizePayslipText } from "@/src/lib/tools/payslip/decoder/normalizePayslipText";
import { normalizeForAlias, parsePayslipLines } from "@/src/lib/tools/payslip/decoder/parsePayslipLines";
import type {
  ExtractedField,
  PayrollSignal,
  PayslipDecoderDiagnostics,
  PayslipDecoderResult,
  PayslipGlossaryEntry,
} from "@/src/lib/tools/payslip/decoder/types";
import type { ExtractionQualityLevel } from "@/src/lib/tools/payslip/types";

function fieldByKey(fields: ExtractedField[], key: ExtractedField["key"]): ExtractedField | undefined {
  return fields.find((f) => f.key === key);
}

function deriveSignals(fields: ExtractedField[], fullTextLower: string): PayrollSignal[] {
  const s = new Set<PayrollSignal>();
  const text = fullTextLower;

  if (
    fields.some((f) => f.key === "ruling_correction_taxable" || f.key === "ruling_correction_special") ||
    /\b30\s*%\s*(tb|bt)\b/i.test(text) ||
    /\bcorr\.?\s*30\s*%/i.test(text) ||
    /\b30\s*%\s*rul/i.test(text) ||
    /\bexpat\s+rul/i.test(text) ||
    /\bextraterritorial/i.test(text) ||
    /\bet\s+costs\b/i.test(text) ||
    /\bruling\s+correction/i.test(text) ||
    /\btax[- ]free\s+(allowance|reimbursement)/i.test(text)
  ) {
    s.add("has_30_ruling_lines");
  }
  if (fields.some((f) => f.key === "pension_employee" || f.key === "pension_taxable_base")) s.add("has_pension_deduction");
  if (fields.some((f) => f.key === "holiday_allowance" || f.key === "holiday_allowance_base")) s.add("has_holiday_allowance");
  if (fields.some((f) => f.key === "net_salary")) s.add("has_net_payment");
  if (fields.some((f) => f.ytdAmount?.normalized != null)) s.add("has_ytd_columns");
  if (fields.some((f) => f.key === "taxable_wage_base")) s.add("has_taxable_wage_base");
  if (fields.some((f) => f.key === "health_insurance_wage_base")) s.add("has_health_insurance_wage_base");

  if (fields.some((f) => f.language === "en" || f.language === "mixed")) s.add("has_english_labels");
  if (
    fields.some((f) =>
      ["hours_worked", "hourly_wage", "days_worked", "overtime_hours", "overtime_pay"].includes(f.key)
    )
  ) {
    s.add("has_hourly_or_time_rows");
  }
  if (fields.some((f) => ["bonus", "commission", "thirteenth_month", "overtime_pay"].includes(f.key))) {
    s.add("has_bonus_or_variable_pay");
  }

  if (fieldByKey(fields, "tax_free_reimbursement") && !s.has("has_30_ruling_lines") && /30\s*%/i.test(text)) {
    s.add("has_30_ruling_lines");
  }
  return Array.from(s);
}

function buildGlossary(fields: ExtractedField[], lines: string[]): PayslipGlossaryEntry[] {
  const mappedKeys = new Set(fields.map((f) => f.key));
  const textBlob = lines.join("\n").toLowerCase();

  const out: PayslipGlossaryEntry[] = [];
  for (const term of CANONICAL_PAYROLL_TERMS) {
    const mapped = mappedKeys.has(term.key);
    const examples = lines.filter((ln) => {
      const n = normalizeForAlias(ln);
      return sortedAliasesForTerm(term).some((a) => a.length >= 4 && n.includes(a.replace(/\s/g, "")));
    }).slice(0, 3);

    const confidence = mapped ? ("high" as const) : examples.length ? ("medium" as const) : ("low" as const);
    if (
      !mapped &&
      !examples.length &&
      !term.aliases.some((a) => textBlob.includes(a.replace(/\./g, "").replace(/\s/g, "").slice(0, 6)))
    ) {
      continue;
    }

    out.push({
      term: term.primaryLabel,
      description: term.explanation,
      examples: examples.length ? examples : undefined,
      confidence,
      mapped,
    });
  }

  return out.sort((a, b) => Number(b.mapped) - Number(a.mapped) || a.term.localeCompare(b.term));
}

function buildSummary(
  quality: ExtractionQualityLevel,
  fields: ExtractedField[],
  unresolved: number,
  duplicateCount: number
): { headline: string; notes: string[] } {
  const moneyFields = fields.filter((f) => f.periodAmount?.normalized != null || f.ytdAmount?.normalized != null);
  const notes: string[] = [];
  if (unresolved > 0) {
    notes.push(
      `${unresolved} line(s) were not mapped to a known payroll label — see grouped “unresolved” buckets below and verify against the raw text.`
    );
  }
  if (duplicateCount > 0) {
    notes.push(
      `${duplicateCount} duplicate field line(s) were merged — we kept the strongest match per label type. See developer diagnostics if enabled.`
    );
  }
  const nets = fields.filter((f) => f.key === "net_salary");
  if (nets.length > 1) {
    notes.push("Multiple net-style lines were detected; compare with your bank payment if numbers differ.");
  }

  let headline = "We parsed several payroll lines in plain English.";
  if (quality === "poor") headline = "Extraction looks weak — treat every amount as unverified.";
  else if (quality === "partial") headline = "We found some payroll lines; a few areas may still need manual checks.";
  if (moneyFields.length >= 8) headline = "Strong match to common Dutch payroll rows — still confirm with your employer.";

  return { headline, notes };
}

export type RunDecoderPipelineOptions = {
  normalizedText: string;
  extractionQuality: ExtractionQualityLevel;
  includeDiagnostics: boolean;
};

export function runDecoderPipeline(opts: RunDecoderPipelineOptions): PayslipDecoderResult {
  const { lines, displayText } = normalizePayslipText(opts.normalizedText);
  const parsed = parsePayslipLines(lines);
  const headerContext = detectColumnHeaderContext(lines);

  const aliasHits: PayslipDecoderDiagnostics["aliasHits"] = [];
  const { fields: moneyFields, consumedLineIndexes: moneyConsumed, amountIndexes, duplicateFieldKeys } = extractMoneyFields(
    parsed,
    aliasHits,
    headerContext
  );

  const { fields: metaFields, consumedLineIndexes: metaConsumed } = extractMetadataFields(lines);
  const consumed = new Set<number>();
  moneyConsumed.forEach((i) => consumed.add(i));
  metaConsumed.forEach((i) => consumed.add(i));
  const fields = [...moneyFields, ...metaFields];

  const unresolved = classifyUnresolvedLines(lines, consumed);
  const fullTextLower = opts.normalizedText.toLowerCase();
  const detectedSignals = deriveSignals(fields, fullTextLower);
  const glossaryTerms = buildGlossary(fields, lines);
  const { headline, notes } = buildSummary(
    opts.extractionQuality,
    fields,
    unresolved.length,
    duplicateFieldKeys.length
  );

  const decoderExtractionQuality =
    opts.extractionQuality === "good" ? "good" : opts.extractionQuality === "partial" ? "partial" : "poor";

  const result: PayslipDecoderResult = {
    extractionQuality: decoderExtractionQuality,
    summaryHeadline: headline,
    summaryNotes: notes,
    detectedSignals,
    fields,
    unresolvedLines: unresolved,
    glossaryTerms,
  };

  if (opts.includeDiagnostics) {
    result.parserDiagnostics = {
      normalizedLines: lines,
      matchedFields: fields,
      aliasHits,
      unresolvedLines: unresolved,
      selectedAmountIndexes: amountIndexes,
      duplicateFieldKeys,
      columnHeaderHints: headerContext.matchedHints,
    };
  }

  void displayText;
  return result;
}
