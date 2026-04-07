/**
 * Map money tokens (+ optional percentages) to period / YTD / taxable columns per row shape.
 */
import type { ParsedAmount, PayslipFieldKey } from "@/src/lib/tools/payslip/decoder/types";
import type { MoneyToken, PercentageToken } from "@/src/lib/tools/payslip/parse/amounts";
import type { ColumnHeaderContext } from "@/src/lib/payslip/columnHeaderContext";
import type { RowShapeHint } from "@/src/lib/payslip/canonicalRegistry";

function toParsedAmount(tok: MoneyToken): ParsedAmount {
  const v = tok.value;
  const sign = v < 0 ? "negative" : v > 0 ? "positive" : "unknown";
  return { raw: tok.raw.trim(), normalized: Number.isFinite(v) ? v : null, currency: "EUR", sign };
}

function nearlyEqual(a: number, b: number, eps = 0.02) {
  return Math.abs(a - b) <= eps;
}

export type InferredColumns = {
  period?: ParsedAmount;
  ytd?: ParsedAmount;
  taxable?: ParsedAmount;
  ratePercent?: number;
  indexes: { periodIdx?: number; ytdIdx?: number; taxableIdx?: number };
  /** -1..1 bump applied to confidence scoring */
  shapeConfidence: number;
};

export type InferColumnsInput = {
  key: PayslipFieldKey;
  money: MoneyToken[];
  percents: PercentageToken[];
  rowShapeHint: RowShapeHint;
  headerContext: ColumnHeaderContext;
};

export function inferColumnAmounts(input: InferColumnsInput): InferredColumns {
  const { key, money, percents, rowShapeHint, headerContext } = input;
  const m = money.filter((t) => t.value !== 0);

  if (m.length === 0) return { indexes: {}, shapeConfidence: 0 };

  // Rate-first rows: Loonhef TBB 49,50% 1381,06 1381,06
  if (rowShapeHint === "tbb_rate" || (key === "wage_tax_tbb" && percents.length >= 1 && m.length >= 2)) {
    const rate = percents[0]?.value;
    return {
      period: toParsedAmount(m[0]!),
      ytd: m.length >= 2 ? toParsedAmount(m[m.length - 1]!) : undefined,
      ratePercent: rate,
      indexes: { periodIdx: 0, ytdIdx: m.length >= 2 ? m.length - 1 : undefined },
      shapeConfidence: 0.35,
    };
  }

  // 30% corrections: three negatives — period, repeat, YTD
  if (
    m.length >= 3 &&
    (rowShapeHint === "three_col_correction" || key === "ruling_correction_taxable" || key === "ruling_correction_special")
  ) {
    const allNeg = m.every((t) => t.value < 0);
    if (allNeg) {
      return {
        period: toParsedAmount(m[0]!),
        taxable: m.length >= 3 ? toParsedAmount(m[1]!) : undefined,
        ytd: toParsedAmount(m[m.length - 1]!),
        indexes: { periodIdx: 0, taxableIdx: m.length >= 3 ? 1 : undefined, ytdIdx: m.length - 1 },
        shapeConfidence: 0.4,
      };
    }
  }

  // Gross / salaris: period, often TB mirror, YTD
  if (m.length === 3 && (rowShapeHint === "three_col_gross" || key === "gross_salary")) {
    const a = m[0]!.value;
    const b = m[1]!.value;
    const c = m[2]!.value;
    if (nearlyEqual(a, b)) {
      return {
        period: toParsedAmount(m[0]!),
        taxable: toParsedAmount(m[1]!),
        ytd: toParsedAmount(m[2]!),
        indexes: { periodIdx: 0, taxableIdx: 1, ytdIdx: 2 },
        shapeConfidence: 0.35,
      };
    }
    return {
      period: toParsedAmount(m[0]!),
      ytd: toParsedAmount(m[2]!),
      taxable: toParsedAmount(m[1]!),
      indexes: { periodIdx: 0, taxableIdx: 1, ytdIdx: 2 },
      shapeConfidence: 0.2,
    };
  }

  // Holiday allowance triple equal columns
  if (m.length === 3 && (rowShapeHint === "holiday_triple" || key === "holiday_allowance")) {
    const a = m[0]!.value;
    const b = m[1]!.value;
    const c = m[2]!.value;
    if (nearlyEqual(a, b) && nearlyEqual(b, c)) {
      return {
        period: toParsedAmount(m[0]!),
        ytd: toParsedAmount(m[2]!),
        indexes: { periodIdx: 0, ytdIdx: 2 },
        shapeConfidence: 0.25,
      };
    }
  }

  // Pension employee: positive, negative TBB display, YTD positive
  if (m.length === 3 && (rowShapeHint === "pension_three" || key === "pension_employee")) {
    const v0 = m[0]!.value;
    const v1 = m[1]!.value;
    const v2 = m[2]!.value;
    if (v0 > 0 && v2 > 0 && v1 < 0 && nearlyEqual(Math.abs(v0), Math.abs(v1))) {
      return {
        period: toParsedAmount(m[0]!),
        taxable: toParsedAmount(m[1]!),
        ytd: toParsedAmount(m[2]!),
        indexes: { periodIdx: 0, taxableIdx: 1, ytdIdx: 2 },
        shapeConfidence: 0.35,
      };
    }
  }

  // Pension TBB-only row (three small similar amounts)
  if (key === "pension_taxable_base" && m.length === 3) {
    return {
      period: toParsedAmount(m[0]!),
      taxable: toParsedAmount(m[1]!),
      ytd: toParsedAmount(m[2]!),
      indexes: { periodIdx: 0, taxableIdx: 1, ytdIdx: 2 },
      shapeConfidence: 0.15,
    };
  }

  // Totals row with 3+ columns (betalingen / inhoudingen) — period ≈ first, YTD ≈ last
  if (rowShapeHint === "multi_total" && m.length >= 3) {
    return {
      period: toParsedAmount(m[0]!),
      ytd: toParsedAmount(m[m.length - 1]!),
      indexes: { periodIdx: 0, ytdIdx: m.length - 1 },
      shapeConfidence: headerContext.ytdColumnLikely ? 0.2 : 0.05,
    };
  }

  if (m.length === 1) {
    return { period: toParsedAmount(m[0]!), indexes: { periodIdx: 0 }, shapeConfidence: 0 };
  }

  if (m.length === 2) {
    return {
      period: toParsedAmount(m[0]!),
      ytd: toParsedAmount(m[1]!),
      indexes: { periodIdx: 0, ytdIdx: 1 },
      shapeConfidence: headerContext.ytdColumnLikely ? 0.1 : 0,
    };
  }

  // Generic 3+: first period, last YTD, optional middle taxable for tax-like keys
  const midKeys: PayslipFieldKey[] = [
    "wage_tax",
    "wage_tax_tb",
    "wage_tax_tbb",
    "taxable_wage_base",
    "health_insurance_wage_base",
    "pension_employee",
    "tax_free_reimbursement",
  ];
  if (midKeys.includes(key) && m.length >= 3) {
    return {
      period: toParsedAmount(m[0]!),
      taxable: toParsedAmount(m[1]!),
      ytd: toParsedAmount(m[m.length - 1]!),
      indexes: { periodIdx: 0, taxableIdx: 1, ytdIdx: m.length - 1 },
      shapeConfidence: 0.1,
    };
  }

  // Hours / days: two count-like values → period count, YTD count (not currency — still shown as amounts)
  if (key === "days_worked" || key === "hours_worked") {
    if (m.length === 2) {
      return {
        period: toParsedAmount(m[0]!),
        ytd: toParsedAmount(m[1]!),
        indexes: { periodIdx: 0, ytdIdx: 1 },
        shapeConfidence: 0.15,
      };
    }
  }

  return {
    period: toParsedAmount(m[0]!),
    ytd: toParsedAmount(m[m.length - 1]!),
    indexes: { periodIdx: 0, ytdIdx: m.length - 1 },
    shapeConfidence: m.length >= 3 ? 0.05 : 0,
  };
}
