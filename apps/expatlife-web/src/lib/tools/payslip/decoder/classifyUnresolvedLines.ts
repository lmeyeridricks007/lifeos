/**
 * Bucket lines we could not map to canonical payroll fields.
 */
import { classifyLineKind } from "@/src/lib/payslip/classifyLineKind";
import { normalizeForAlias } from "@/src/lib/tools/payslip/decoder/parsePayslipLines";
import type { UnresolvedLine, UnresolvedLineCategory } from "@/src/lib/tools/payslip/decoder/types";
import { findMoneyTokensInLine } from "@/src/lib/tools/payslip/parse/amounts";

const HEADER_NEEDLES = [
  "klantnr",
  "personeelsnr",
  "afdelingsnr",
  "periodeomschrijving",
  "tabel",
  "hef.k",
  "jaarloon",
  "volgnr",
  "bsn",
  "diensttijd",
  "salarisperov",
];

const ADDRESS_HINTS = ["straat", "gracht", "laan", "weg", "postcode", "amsterdam", "rotterdam", "1029", "nl-"];

function kindToCategory(kind: ReturnType<typeof classifyLineKind>): UnresolvedLineCategory {
  switch (kind) {
    case "probable_header":
      return "technical_header";
    case "probable_identity":
    case "probable_address":
      return "address_or_identity";
    case "probable_metadata":
    case "probable_noise":
      return "metadata";
    case "probable_earnings_row":
      return "probable_payment_line";
    case "probable_deduction_row":
      return "probable_deduction_line";
    case "probable_tax_row":
      return "probable_tax_row";
    case "probable_pension_row":
      return "probable_pension_row";
    case "probable_total_row":
      return "probable_total_row";
    case "probable_time_row":
      return "probable_time_row";
    case "probable_ruling_row":
      return "probable_ruling_row";
    case "probable_bank_line":
      return "probable_bank_line";
    default:
      return "unknown";
  }
}

function classifyOne(rawLine: string): UnresolvedLine {
  const n = normalizeForAlias(rawLine);
  const hasMoney = findMoneyTokensInLine(rawLine).length > 0;
  const kind = classifyLineKind(rawLine);

  if (HEADER_NEEDLES.some((h) => n.includes(h))) {
    return { rawLine, category: "technical_header", probableMeaning: "Payroll export header / reference column" };
  }

  if (ADDRESS_HINTS.some((h) => n.includes(h)) && !hasMoney) {
    return { rawLine, category: "address_or_identity", probableMeaning: "Address or location line" };
  }

  if (/^\d{4}\s+\d+/.test(rawLine.trim()) && rawLine.length < 60) {
    return { rawLine, category: "metadata", probableMeaning: "Reference or employee number cluster" };
  }

  if (hasMoney || kind !== "unknown") {
    const category = kindToCategory(kind);
    const meanings: Record<string, string> = {
      probable_payment_line: "Possible earnings or payment component",
      probable_deduction_line: "Possible deduction or premium line",
      probable_tax_row: "Possible tax / withholding row",
      probable_pension_row: "Possible pension row",
      probable_total_row: "Possible subtotal row",
      probable_time_row: "Possible hours or days row",
      probable_ruling_row: "Possible 30% ruling–related wording",
      probable_bank_line: "Possible bank / IBAN / payout line",
      unknown: "Numeric row we could not map to a known label",
      metadata: "Short text — may be metadata",
      technical_header: "Header-like line",
      address_or_identity: "Identity or address fragment",
    };
    return {
      rawLine,
      category,
      probableMeaning: meanings[category] ?? meanings.unknown,
    };
  }

  if (rawLine.length < 120 && !/\d/.test(rawLine)) {
    return { rawLine, category: "metadata", probableMeaning: "Plain text metadata (names, titles, notes)" };
  }

  return { rawLine, category: "unknown", probableMeaning: "Could not classify confidently" };
}

export function classifyUnresolvedLines(lines: string[], consumedLineIndexes: Set<number>): UnresolvedLine[] {
  const out: UnresolvedLine[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (consumedLineIndexes.has(i)) continue;
    const rawLine = lines[i] ?? "";
    if (!rawLine.trim()) continue;
    out.push(classifyOne(rawLine));
  }
  return out.slice(0, 120);
}
