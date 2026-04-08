import { NextResponse } from "next/server";
import {
  CONTRACT_SCANNER_MAX_PDF_BYTES,
  CONTRACT_SCANNER_MAX_TEXT_CHARS,
} from "@/src/lib/tools/contract-scanner/constants";
import { buildDocumentProcessingResultFromPdfExtract } from "@/src/lib/tools/contract-scanner/documentPipeline";
import { getContractEntitlementsFromRequest } from "@/src/lib/tools/contract-scanner/entitlements";
import { extractContractPdfInMemory, userSafePdfError } from "@/src/lib/tools/contract-scanner/pdfExtract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * POST multipart/form-data: field `file` (PDF). Text extracted in memory only; not stored or logged.
 * Returns extraction quality heuristics for text-based PDFs (no OCR in v1).
 */
export async function POST(request: Request) {
  const type = request.headers.get("content-type") ?? "";
  try {
    if (!type.includes("multipart/form-data")) {
      return jsonError('Use multipart/form-data with a PDF in the "file" field.', 415);
    }

    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return jsonError('Upload a PDF file in the "file" field.', 400);
    }

    const maxBytes = CONTRACT_SCANNER_MAX_PDF_BYTES;
    if (file.size > maxBytes) {
      return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
    }

    const mime = file.type || "application/octet-stream";
    if (!mime.includes("pdf")) {
      return jsonError("Only PDF uploads are supported.", 400);
    }

    const buf = Buffer.from(await file.arrayBuffer());
    if (buf.length > maxBytes) {
      return jsonError(`File is too large. Maximum size is ${Math.round(maxBytes / (1024 * 1024))} MB.`, 413);
    }

    let extracted: Awaited<ReturnType<typeof extractContractPdfInMemory>>;
    try {
      extracted = await extractContractPdfInMemory(buf);
    } catch (e) {
      const code = e instanceof Error ? e.message : "UNKNOWN";
      if (code === "NOT_PDF") return jsonError(userSafePdfError("NOT_PDF"), 400);
      if (code === "EMPTY_PDF") return jsonError(userSafePdfError("EMPTY_PDF"), 400);
      return jsonError(userSafePdfError("PDF_PARSE_FAILED"), 400);
    }

    if (extracted.extractedText.length > CONTRACT_SCANNER_MAX_TEXT_CHARS) {
      return jsonError("Extracted text exceeds the maximum allowed length. Try a shorter document or paste excerpts.", 413);
    }

    const entitlements = getContractEntitlementsFromRequest(request);
    const documentProcessing = buildDocumentProcessingResultFromPdfExtract(extracted, entitlements);

    return NextResponse.json(documentProcessing);
  } catch {
    return jsonError("We could not process this request. Try again or paste your contract text instead.", 500);
  }
}
