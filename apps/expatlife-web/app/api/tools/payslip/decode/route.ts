/**
 * Payslip decode API: multipart PDF or JSON paste. Uses Node runtime, in-memory buffers only,
 * and the shared rule-based pipeline in `@/src/lib/tools/payslip/decode-pipeline` (no server actions, no Edge PDF).
 *
 * TODO(paid OCR): After `extractTextFromPdf`, optionally invoke `getPayslipOcrProvider()` when the user is entitled
 * and text quality indicates scanned PDF / image — merge or replace `rawText`, set `documentSource` / `extractionMethod`
 * to OCR variants, and enforce rate limits. Do not persist buffers. Blueprint: docs/tools/payslip-decoder-future-ocr.md
 *
 * Entitlements: `getPayslipEntitlementsFromRequest(request)` from `lib/entitlements/payslip-entitlements.ts`.
 * TODO(auth): Implement session → plan mapping there; keep 403 branches below for disallowed modes.
 */
import { NextResponse } from "next/server";
import { getPayslipEntitlementsFromRequest } from "@/lib/entitlements/payslip-entitlements";
import { PAYSLIP_MAX_TEXT_CHARS, getPayslipMaxUploadBytes } from "@/src/lib/tools/payslip/constants";
import { buildPayslipDecodeResponse } from "@/src/lib/tools/payslip/decode-pipeline";
import { extractTextFromPdf, userSafePdfError } from "@/src/lib/tools/payslip/pdf-extract";
import { payslipDecodeJsonSchema } from "@/src/lib/tools/payslip/schema";
import { sanitizeUploadedFileName } from "@/src/lib/tools/payslip/sanitize";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * POST multipart/form-data: field `file` (PDF) — text extracted server-side, not stored.
 * POST application/json: `{ "text": "..." }` — paste path.
 */
export async function POST(request: Request) {
  const maxBytes = getPayslipMaxUploadBytes();
  const type = request.headers.get("content-type") ?? "";
  const entitlements = getPayslipEntitlementsFromRequest(request);

  try {
    if (type.includes("multipart/form-data")) {
      if (!entitlements.canUseTextPdfUpload) {
        return jsonError("PDF upload is not available for this session.", 403);
      }
      const form = await request.formData();
      const file = form.get("file");

      if (!file || typeof file === "string") {
        return jsonError("Upload a PDF file in the “file” field.", 400);
      }

      if (file.size > maxBytes) {
        return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
      }

      const mime = file.type || "application/octet-stream";
      if (!mime.includes("pdf")) {
        return jsonError("Only PDF uploads are supported for this endpoint.", 400);
      }

      const buf = Buffer.from(await file.arrayBuffer());
      if (buf.length > maxBytes) {
        return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
      }

      let rawText: string;
      try {
        const { text } = await extractTextFromPdf(buf);
        rawText = text;
      } catch (e) {
        const code = e instanceof Error ? e.message : "UNKNOWN";
        if (code === "NOT_PDF") return jsonError(userSafePdfError("NOT_PDF"), 400);
        if (code === "EMPTY_PDF") return jsonError(userSafePdfError("EMPTY_PDF"), 400);
        return jsonError(userSafePdfError("PDF_PARSE_FAILED"), 400);
      }

      const name = sanitizeUploadedFileName(typeof file.name === "string" ? file.name : "payslip.pdf");
      const body = buildPayslipDecodeResponse(rawText, "pdf", name, entitlements);

      if (body.extractedText.length > PAYSLIP_MAX_TEXT_CHARS) {
        return jsonError("Extracted text exceeds the maximum allowed length.", 413);
      }

      return NextResponse.json(body);
    }

    if (type.includes("application/json")) {
      if (!entitlements.canUsePasteMode) {
        return jsonError("Paste decoding is not available for this session.", 403);
      }
      const raw = await request.text();
      if (raw.length > PAYSLIP_MAX_TEXT_CHARS + 10_000) {
        return jsonError("Request body is too large.", 413);
      }
      let parsedJson: unknown;
      try {
        parsedJson = JSON.parse(raw);
      } catch {
        return jsonError("Invalid JSON body.", 400);
      }

      const parsed = payslipDecodeJsonSchema.safeParse(parsedJson);
      if (!parsed.success) {
        const msg = parsed.error.flatten().formErrors[0] ?? "Invalid input.";
        return jsonError(msg, 400);
      }

      const body = buildPayslipDecodeResponse(parsed.data.text, "text", undefined, entitlements);
      return NextResponse.json(body);
    }

    return jsonError("Use multipart/form-data with a PDF or application/json with { \"text\": \"...\" }.", 415);
  } catch {
    return jsonError("We could not process this request. Try again or paste your payslip text instead.", 500);
  }
}
