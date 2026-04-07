import { z } from "zod";
import { PAYSLIP_MAX_TEXT_CHARS } from "@/src/lib/tools/payslip/constants";

export const payslipDecodeJsonSchema = z.object({
  text: z
    .string()
    .min(1, "Paste some payslip text.")
    .max(PAYSLIP_MAX_TEXT_CHARS, "Text is too long."),
});

export type PayslipDecodeJsonInput = z.infer<typeof payslipDecodeJsonSchema>;

const moneyConfidenceSchema = z.enum(["high", "medium", "low"]);

const moneyFieldSchema = z.object({
  label: z.string(),
  labelFound: z.string().optional(),
  amount: z.string(),
  normalizedAmount: z.number(),
  sourceLine: z.string(),
  confidence: moneyConfidenceSchema,
  ytdAmount: z.string().optional(),
  ytdNormalizedAmount: z.number().optional(),
});

const deductionFieldSchema = z.object({
  label: z.string(),
  labelFound: z.string().optional(),
  amount: z.string().optional(),
  normalizedAmount: z.number().optional(),
  sourceLine: z.string(),
  confidence: moneyConfidenceSchema,
});

const decodedTermSchema = z.object({
  term: z.string(),
  note: z.string().optional(),
});

const amountCandidateSchema = z.object({
  field: z.string(),
  labelFound: z.string(),
  rawLine: z.string(),
  amountDisplay: z.string(),
  normalizedAmount: z.number(),
  rule: z.string(),
  score: z.number(),
});

const glossaryHighlightSchema = z.object({
  termId: z.string(),
  term: z.string(),
  matchedLines: z.array(z.string()),
  parsedIntoValue: z.boolean(),
});

const decodeHintsSchema = z.object({
  partialDecode: z.boolean(),
  missingFields: z.array(z.string()),
  suggestCheckRawText: z.boolean(),
  summaryLine: z.string(),
});

const parseDiagnosticsSchema = z.object({
  matchedRules: z.array(
    z.object({
      rule: z.string(),
      lineIndex: z.number(),
      field: z.string(),
    })
  ),
  rejectedCandidates: z.array(
    z.object({
      reason: z.string(),
      linePreview: z.string(),
      rule: z.string(),
      normalizedAmount: z.number(),
    })
  ),
  qualityExplanation: z.array(z.string()),
  decoderDiagnostics: z.any().optional(),
});

const documentInputSourceSchema = z.enum(["pasted_text", "pdf_text", "pdf_scanned", "image_ocr"]);
const documentExtractionMethodSchema = z.enum(["none", "pdf_text", "ocr"]);
const processingFlowStateSchema = z.enum([
  "paste",
  "pdf_text_ok",
  "pdf_likely_scanned",
  "ocr_required",
  "ocr_unavailable",
  "image_upload_premium",
  "insights_premium",
]);
const decodeCapabilitiesSchema = z.object({
  ocrFromPdf: z.boolean(),
  ocrFromImage: z.boolean(),
  premiumInsights: z.boolean(),
});

const payslipDecoderUiStateSchema = z.enum([
  "text_pdf_supported",
  "scanned_pdf_requires_ocr",
  "image_upload_disabled",
  "premium_insights_disabled",
]);

const scannedPdfHintsSchema = z.object({
  scannedLikely: z.boolean(),
  ocrRecommended: z.boolean(),
  ocrAvailable: z.boolean(),
});

const premiumInsightsBlockSchema = z.object({
  enabled: z.boolean(),
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      detail: z.string(),
    })
  ),
});

/** Response shape returned to the client (mirrors PayslipDecodeResponse). */
export const payslipDecodeResponseSchema = z.object({
  extractedText: z.string(),
  extractionQuality: z.enum(["good", "partial", "poor"]),
  extractionQualityLabel: z.string(),
  extractionWarnings: z.array(z.string()),
  parsedPayslip: z.object({
    period: z.string().optional(),
    employerName: z.string().optional(),
    employeeName: z.string().optional(),
    grossSalary: moneyFieldSchema.optional(),
    netSalary: moneyFieldSchema.optional(),
    taxableWage: moneyFieldSchema.optional(),
    wageTax: moneyFieldSchema.optional(),
    holidayAllowance: moneyFieldSchema.optional(),
    pensionEmployee: moneyFieldSchema.optional(),
    pensionEmployer: moneyFieldSchema.optional(),
    socialContributions: moneyFieldSchema.optional(),
    specialWithholdingRate: moneyFieldSchema.optional(),
    reimbursements: z.array(moneyFieldSchema).optional(),
    deductions: z.array(deductionFieldSchema).optional(),
    notableTerms: z.array(decodedTermSchema).optional(),
    warnings: z.array(z.string()).optional(),
    unmappedLines: z.array(z.string()).optional(),
    ambiguousNetCandidates: z.array(amountCandidateSchema).optional(),
    glossaryHighlights: z.array(glossaryHighlightSchema).optional(),
  }),
  summaryMessage: z.string(),
  decodeHints: decodeHintsSchema.optional(),
  inputSource: z.enum(["text", "pdf"]),
  sanitizedFileName: z.string().optional(),
  parseDiagnostics: parseDiagnosticsSchema.optional(),
  documentSource: documentInputSourceSchema,
  extractionMethod: documentExtractionMethodSchema,
  likelyScannedDocument: z.boolean(),
  processingFlowState: processingFlowStateSchema,
  decodeCapabilities: decodeCapabilitiesSchema,
  processingWarnings: z.array(z.string()),
  decoderUiStates: z.array(payslipDecoderUiStateSchema),
  scannedPdfHints: scannedPdfHintsSchema,
  premiumInsights: premiumInsightsBlockSchema,
  decoderResult: z.any(),
});
