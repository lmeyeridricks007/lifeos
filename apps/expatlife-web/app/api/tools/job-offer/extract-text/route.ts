import { NextResponse } from "next/server";
import type { ExtractionQuality } from "@/src/lib/tools/contract-scanner/types";
import { assessExtractionQuality } from "@/src/lib/tools/contract-scanner/textQuality";
import {
  JOB_OFFER_DOCUMENT_MAX_BYTES,
  JOB_OFFER_DOCUMENT_MAX_TEXT_CHARS,
} from "@/src/lib/tools/job-offer-comparison/documentExtractConstants";
import { JOB_OFFER_AUTOFILL_FIELD_LABELS, parseJobOfferLetterFromText } from "@/src/lib/tools/job-offer-comparison/parseJobOfferLetter";
import type { JobOfferInput } from "@/src/lib/tools/job-offer-comparison/types";
import { extractTextFromPdfBuffer, userSafePdfError } from "@/src/lib/tools/payslip/pdf-extract";
import { sanitizeUploadedFileName } from "@/src/lib/tools/payslip/sanitize";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
/** Large PDFs can take a few seconds to parse on cold starts. */
export const maxDuration = 60;

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function extensionOf(name: string): string {
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i + 1).toLowerCase() : "";
}

function extractPlainTextFromBuffer(buf: Buffer): string {
  if (!buf.length) throw new Error("EMPTY_FILE");
  const sample = Math.min(buf.length, 8192);
  let nulls = 0;
  for (let i = 0; i < sample; i++) {
    if (buf[i] === 0) nulls++;
  }
  if (nulls > 32) throw new Error("BINARY_FILE");
  const s = buf.toString("utf8");
  return s.replace(/\r\n/g, "\n").trim();
}

export type JobOfferExtractTextResponse = {
  extractedText: string;
  pageCount: number;
  fileName: string;
  extractionQuality: ExtractionQuality;
  warnings: string[];
  /** Heuristic autofill from letter text — always verify before relying on it. */
  parsedFields: Partial<JobOfferInput>;
  parsedFieldLabels: string[];
};

/**
 * POST multipart/form-data: field `file` — PDF (text layer) or .txt. In-memory only; nothing persisted.
 * Max 15 MB (see `JOB_OFFER_DOCUMENT_MAX_BYTES`). No OCR — scanned PDFs may return little or no usable text.
 *
 * Note: some hosts (e.g. Vercel Hobby) enforce a smaller max request body than 15 MB; Pro/self-hosted Node
 * can accept the full limit enforced below.
 */
export async function POST(request: Request) {
  const type = request.headers.get("content-type") ?? "";
  try {
    if (!type.includes("multipart/form-data")) {
      return jsonError('Use multipart/form-data with a file in the "file" field.', 415);
    }

    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return jsonError('Upload a file in the "file" field.', 400);
    }

    const maxBytes = JOB_OFFER_DOCUMENT_MAX_BYTES;
    if (file.size > maxBytes) {
      return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
    }

    const rawName = typeof file.name === "string" ? file.name : "document";
    const fileName = sanitizeUploadedFileName(rawName);
    const ext = extensionOf(rawName);
    const mime = (file.type || "application/octet-stream").toLowerCase();

    const buf = Buffer.from(await file.arrayBuffer());
    if (buf.length > maxBytes) {
      return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
    }

    const isPdf = mime.includes("pdf") || ext === "pdf";
    const isTxt = ext === "txt" || mime.includes("text/plain");

    let extractedText: string;
    let pageCount = 0;
    let warnings: string[] = [];
    let extractionQuality: ExtractionQuality = "good";

    if (isPdf) {
      try {
        const { text, pageCount: pages } = await extractTextFromPdfBuffer(buf);
        extractedText = text.trim();
        pageCount = pages;
      } catch (e) {
        const code = e instanceof Error ? e.message : "UNKNOWN";
        if (code === "NOT_PDF") return jsonError(userSafePdfError("NOT_PDF"), 400);
        if (code === "EMPTY_PDF") return jsonError(userSafePdfError("EMPTY_PDF"), 400);
        return jsonError(userSafePdfError("PDF_PARSE_FAILED"), 400);
      }
      const assessed = assessExtractionQuality(extractedText, pageCount);
      extractionQuality = assessed.quality;
      warnings = [...assessed.warnings];
    } else if (isTxt) {
      try {
        extractedText = extractPlainTextFromBuffer(buf);
      } catch (e) {
        if (e instanceof Error && e.message === "BINARY_FILE") {
          return jsonError("This file looks binary. Upload a plain .txt or a PDF.", 400);
        }
        return jsonError("Could not read this file as UTF-8 text. Use a plain .txt file or a PDF.", 400);
      }
      const pseudoPages = Math.max(1, Math.ceil(extractedText.length / 3000));
      const assessed = assessExtractionQuality(extractedText, pseudoPages);
      extractionQuality = assessed.quality;
      warnings = [...assessed.warnings];
    } else {
      return jsonError("Supported types: PDF (text-based) or .txt. For Word documents, export as PDF first.", 400);
    }

    if (extractedText.length > JOB_OFFER_DOCUMENT_MAX_TEXT_CHARS) {
      return jsonError(
        "Extracted text is too long for this tool. Try a shorter document, export fewer pages as PDF, or paste an excerpt.",
        413
      );
    }

    const parsed = parseJobOfferLetterFromText(extractedText);
    const parsedFieldLabels = parsed.filledKeys.map((k) => JOB_OFFER_AUTOFILL_FIELD_LABELS[k] ?? String(k));

    const body: JobOfferExtractTextResponse = {
      extractedText,
      pageCount,
      fileName,
      extractionQuality,
      warnings,
      parsedFields: parsed.fields,
      parsedFieldLabels,
    };

    return NextResponse.json(body);
  } catch {
    return jsonError("We could not process this upload. Try again with a PDF or .txt file.", 500);
  }
}
