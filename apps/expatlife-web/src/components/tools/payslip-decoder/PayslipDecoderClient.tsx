"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import { trackPayslipDecoder } from "@/lib/analytics/track";
import { getPayslipPublicFeatureFlags } from "@/lib/config/payslip-features";
import {
  ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS,
  type PayslipEntitlements,
} from "@/lib/entitlements/payslip-entitlements";
import { PAYSLIP_DEFAULT_MAX_BYTES } from "@/src/lib/tools/payslip/constants";
import type { PayslipDecodeResponse } from "@/src/lib/tools/payslip/types";
import { PayslipDecoderResultPanels } from "@/src/components/tools/payslip-decoder/PayslipDecoderResultPanels";

/** Input channels — gated by entitlements + public feature flags (see `payslipInputModeOptions`). */
export type PayslipInputModeId = "paste_text" | "pdf_upload" | "image_upload";

const PAYSLIP_PUBLIC_FLAGS = getPayslipPublicFeatureFlags();

function payslipInputModeOptions(entitlements: PayslipEntitlements): { value: PayslipInputModeId; label: string }[] {
  const out: { value: PayslipInputModeId; label: string }[] = [];
  if (entitlements.canUsePasteMode) {
    out.push({ value: "paste_text", label: "Paste text" });
  }
  if (entitlements.canUseTextPdfUpload) {
    out.push({ value: "pdf_upload", label: "Upload PDF" });
  }
  if (PAYSLIP_PUBLIC_FLAGS.enableImageUpload && entitlements.canUseImageUpload) {
    out.push({ value: "image_upload", label: "Upload image" });
  }
  return out;
}

const MAX_BYTES = PAYSLIP_DEFAULT_MAX_BYTES;
const MAX_MB = Math.round(MAX_BYTES / (1024 * 1024));

const BODY = "text-sm leading-relaxed text-copilot-text-secondary";

type DecodeError = {
  title: string;
  message: string;
  hint?: string;
};

function classifyHttpError(status: number, message: string): DecodeError {
  const m = message.toLowerCase();
  if (status === 413) {
    if (m.includes("large") || m.includes("length") || m.includes("size")) {
      return {
        title: "File or text too large",
        message: message,
        hint: `Try a smaller PDF (under ${MAX_MB} MB) or paste only the payslip section.`,
      };
    }
  }
  if (status === 415) {
    return {
      title: "Unsupported format",
      message: message,
      hint: "Use a PDF export, or copy payslip text and choose Paste mode.",
    };
  }
  if (status === 400) {
    if (m.includes("pdf") || m.includes("upload") || m.includes("empty")) {
      return {
        title: "Could not read this PDF",
        message: message,
        hint: "If the file is scanned, open it on your computer, select all text, and paste it here instead.",
      };
    }
    return { title: "Invalid request", message, hint: "Check your input and try again." };
  }
  return {
    title: "Something went wrong",
    message: message || "We could not complete decoding.",
    hint: "Try again in a moment, or switch to Paste mode if PDF keeps failing.",
  };
}

export type PayslipDecoderClientProps = {
  /** From server: `getPayslipEntitlements()` or `getPayslipEntitlementsFromRequest` once auth exists. */
  entitlements?: PayslipEntitlements;
};

export function PayslipDecoderClient({ entitlements: entitlementsProp }: PayslipDecoderClientProps) {
  const entitlements = entitlementsProp ?? ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS;
  const pathname = usePathname() ?? "";
  const modeOptions = useMemo(() => payslipInputModeOptions(entitlements), [entitlements]);
  const [mode, setMode] = useState<PayslipInputModeId>("paste_text");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadPhase, setLoadPhase] = useState<"idle" | "extracting" | "decoding">("idle");
  const [error, setError] = useState<DecodeError | null>(null);
  const [result, setResult] = useState<PayslipDecodeResponse | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const openedLogged = useRef(false);
  const lastTrackedResultKey = useRef<string | null>(null);

  useEffect(() => {
    if (modeOptions.some((o) => o.value === mode)) return;
    setMode("paste_text");
  }, [mode, modeOptions]);

  useEffect(() => {
    if (openedLogged.current) return;
    openedLogged.current = true;
    trackPayslipDecoder("payslip_decoder_opened", { path: pathname });
  }, [pathname]);

  useEffect(() => {
    if (!loading || mode !== "pdf_upload") return;
    setLoadPhase("extracting");
    const t = window.setTimeout(() => {
      setLoadPhase((cur) => (cur === "extracting" ? "decoding" : cur));
    }, 500);
    return () => window.clearTimeout(t);
  }, [loading, mode]);

  useEffect(() => {
    if (!result) return;
    const key = `${result.extractionQuality}:${result.summaryMessage}:${result.extractedText.length}`;
    if (lastTrackedResultKey.current === key) return;
    lastTrackedResultKey.current = key;
    trackPayslipDecoder("payslip_decoder_result_viewed", {
      path: pathname,
      input_source: result.inputSource,
      extraction_quality: result.extractionQuality,
      document_source: result.documentSource,
      extraction_method: result.extractionMethod,
      likely_scanned_document: result.likelyScannedDocument,
      processing_flow_state: result.processingFlowState,
      decoder_ui_states: result.decoderUiStates,
      ocr_available: result.scannedPdfHints.ocrAvailable,
    });
    if (result.extractionQuality === "good") {
      trackPayslipDecoder("payslip_decoder_extraction_good", { path: pathname });
    } else if (result.extractionQuality === "partial") {
      trackPayslipDecoder("payslip_decoder_extraction_partial", { path: pathname });
    } else {
      trackPayslipDecoder("payslip_decoder_extraction_poor", { path: pathname });
    }
  }, [pathname, result]);

  const onDecode = useCallback(async () => {
    setError(null);
    setResult(null);
    setLoadPhase(mode === "pdf_upload" ? "extracting" : "decoding");
    setLoading(true);
    try {
      if (mode === "paste_text" && !entitlements.canUsePasteMode) {
        setError({
          title: "Not available",
          message: "Paste decoding is not enabled for this session.",
          hint: "Sign in with an account that includes this feature, or contact support.",
        });
        setLoading(false);
        setLoadPhase("idle");
        return;
      }
      if (mode === "pdf_upload" && !entitlements.canUseTextPdfUpload) {
        setError({
          title: "Not available",
          message: "PDF upload is not enabled for this session.",
          hint: "Sign in with an account that includes this feature, or use Paste if available.",
        });
        setLoading(false);
        setLoadPhase("idle");
        return;
      }

      if (mode === "image_upload") {
        setError({
          title: "Image upload not active",
          message: "Reading payslips from photos is not turned on in this environment yet.",
          hint: "Use Paste text or Upload PDF, or copy text from a PDF viewer.",
        });
        setLoading(false);
        setLoadPhase("idle");
        return;
      }

      if (mode === "paste_text") {
        const t = text.trim();
        if (!t) {
          setError({ title: "Add payslip text", message: "Paste your payslip text before decoding.", hint: "Copy from a PDF reader or employer portal export." });
          setLoading(false);
          setLoadPhase("idle");
          return;
        }
        trackPayslipDecoder("payslip_decoder_paste_submitted", { path: pathname, char_count_bucket: t.length > 5000 ? "large" : t.length > 500 ? "medium" : "small" });
        const res = await fetch("/api/tools/payslip/decode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: t }),
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        if (!res.ok) {
          setError(classifyHttpError(res.status, typeof data.error === "string" ? data.error : "Could not decode payslip."));
          return;
        }
        setResult(data as PayslipDecodeResponse);
        return;
      }

      if (!file) {
        setError({ title: "Choose a file", message: "Select a PDF payslip before extracting.", hint: "Or switch to Paste mode if you only have text." });
        setLoading(false);
        setLoadPhase("idle");
        return;
      }
      if (file.size > MAX_BYTES) {
        setError({
          title: "File too large",
          message: `Maximum size is ${MAX_MB} MB.`,
          hint: "Export a smaller PDF or paste the text instead.",
        });
        setLoading(false);
        setLoadPhase("idle");
        return;
      }
      trackPayslipDecoder("payslip_decoder_pdf_uploaded", {
        path: pathname,
        size_bucket: file.size > 2 * 1024 * 1024 ? "large" : file.size > 500_000 ? "medium" : "small",
      });
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/tools/payslip/decode", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(classifyHttpError(res.status, typeof data.error === "string" ? data.error : "Could not decode payslip."));
        return;
      }
      setResult(data as PayslipDecodeResponse);
    } catch {
      setError({
        title: "Network error",
        message: "Check your connection and try again.",
        hint: "If the problem persists, use Paste mode.",
      });
    } finally {
      setLoading(false);
      setLoadPhase("idle");
    }
  }, [entitlements, file, mode, pathname, text]);

  const pickFile = (f: File | null) => {
    setFile(f);
    setError(null);
    setResult(null);
    if (f && !f.type.includes("pdf") && !f.name.toLowerCase().endsWith(".pdf")) {
      setError({
        title: "Not a PDF",
        message: "This tool only accepts PDF files in Upload mode.",
        hint: "Choose a .pdf export or paste text from another format.",
      });
      setFile(null);
      return;
    }
    if (f && f.size > MAX_BYTES) {
      setError({
        title: "File too large",
        message: `Maximum size is ${MAX_MB} MB.`,
        hint: "Try pasting text only, or use a lighter PDF export.",
      });
      setFile(null);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    pickFile(f);
  };

  const loadingMessage =
    loadPhase === "extracting" ? "Extracting text from your PDF…" : "Decoding payslip…";

  return (
    <div className="space-y-6 md:space-y-7">
      <div
        className="rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.1] sm:p-6"
        aria-describedby="payslip-mode-help"
      >
        <div className="flex flex-col gap-5">
          <div>
            <p id="payslip-input-label" className="text-sm font-semibold text-copilot-text-primary">
              Input mode
            </p>
            <SegmentedControl
              name="payslip-input-mode"
              className="mt-2"
              options={modeOptions}
              value={mode}
              onChange={(v) => {
                setMode(v as PayslipInputModeId);
                setError(null);
                setResult(null);
              }}
            />
            <p id="payslip-mode-help" className={cn(BODY, "mt-3")}>
              <strong className="text-copilot-text-primary">Paste</strong> works with any text you can copy (PDF, portal, email).
              <span className="mx-1 text-copilot-text-secondary">·</span>
              <strong className="text-copilot-text-primary">PDF</strong> works with text-based exports only (not scanned photos). Max {MAX_MB}
              MB.
            </p>
          </div>

          {mode === "paste_text" ? (
            <div>
              <label htmlFor="payslip-paste" className="text-sm font-semibold text-copilot-text-primary">
                Payslip text
              </label>
              <p className={cn("mt-1 text-xs", BODY)}>Select all text in your PDF viewer or portal, then paste here.</p>
              <textarea
                id="payslip-paste"
                name="payslip-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
                autoComplete="off"
                spellCheck={false}
                placeholder="Example: Bruto loon … Loonheffing … Netto loon …"
                className="mt-2 w-full rounded-xl border border-copilot-primary/20 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm ring-1 ring-slate-900/[0.05] placeholder:text-slate-400 focus:border-copilot-primary/45 focus:outline-none focus:ring-2 focus:ring-copilot-primary/25"
              />
              <Button type="button" className="mt-4 w-full min-[400px]:w-auto" disabled={loading} onClick={onDecode}>
                {loading ? "Decoding payslip…" : "Decode payslip"}
              </Button>
            </div>
          ) : mode === "pdf_upload" ? (
            <div>
              <p className="text-sm font-semibold text-copilot-text-primary">PDF file</p>
              <p className={cn("mt-1 text-xs", BODY)}>Digitally generated payslips (selectable text) work best. Image-only PDFs need Paste mode.</p>
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf,.pdf"
                className="sr-only"
                aria-label="Choose PDF payslip file"
                onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
              />
              <div
                role="button"
                tabIndex={0}
                aria-label="Drop zone: choose PDF payslip"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    inputRef.current?.click();
                  }
                }}
                onDragEnter={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                onClick={() => inputRef.current?.click()}
                className={cn(
                  "mt-3 flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-6 text-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35 focus-visible:ring-offset-2",
                  dragActive
                    ? "border-copilot-primary bg-copilot-bg-soft"
                    : "border-copilot-primary/30 bg-copilot-bg-soft/50 hover:border-copilot-primary/50"
                )}
              >
                {file ? (
                  <span className="font-medium text-copilot-text-primary">{file.name}</span>
                ) : (
                  <>
                    <span className="font-medium text-copilot-text-primary">Drop PDF here or click to browse</span>
                    <span className={cn("mt-1 text-xs", BODY)}>PDF only · up to {MAX_MB} MB</span>
                  </>
                )}
              </div>
              <Button type="button" className="mt-4 w-full min-[400px]:w-auto" disabled={loading} onClick={onDecode}>
                {loading ? loadingMessage : "Extract & decode"}
              </Button>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-copilot-primary/25 bg-copilot-bg-soft/60 p-5 ring-1 ring-copilot-primary/[0.06]">
              <p className="text-sm font-semibold text-copilot-text-primary">Image upload (preview)</p>
              <p className={cn("mt-2", BODY)}>
                This slot is reserved for a future image-based workflow. For now, use <strong>Paste text</strong> or{" "}
                <strong>Upload PDF</strong> so we never send a half-finished upload to the server.
              </p>
            </div>
          )}

          <InfoBox title="Trust & privacy" variant="info" className="shadow-expatos-sm">
            Nothing is saved to our database for this free tool: your text or file is processed for this request only. Avoid
            pasting on shared devices; clear downloads if you saved a copy locally.
          </InfoBox>

          <InfoBox title="Planning only — not advice" variant="warn" className="shadow-expatos-sm">
            This decoder explains common wording; it is not payroll, tax, or legal advice. Your employer and official sources
            are authoritative.
          </InfoBox>

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={cn(!loading && !error && "sr-only")}
          >
            {loading ? <span>{loadingMessage}</span> : null}
            {error ? <span>{error.title}: {error.message}</span> : null}
          </div>

          {error ? (
            <InfoBox title={error.title} variant="warn" className="shadow-expatos-sm">
              <p>{error.message}</p>
              {error.hint ? <p className="mt-2 text-sm text-foreground-muted">{error.hint}</p> : null}
            </InfoBox>
          ) : null}
        </div>
      </div>

      <div id="payslip-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32 md:space-y-7">
        {!result && !loading ? (
          <section className="rounded-2xl border-0 bg-copilot-bg-soft/80 p-5 ring-1 ring-copilot-primary/[0.08] sm:p-6" aria-labelledby="payslip-empty-heading">
            <h2 id="payslip-empty-heading" className="text-lg font-semibold tracking-tight text-copilot-text-primary">
              Ready when you are
            </h2>
            <p className={cn(BODY, "mt-2")}>
              Results will appear here after decoding. For the most reliable readout, use <strong>text you can select</strong>{" "}
              (generated PDF or portal export).
            </p>
            <ul className={cn("mt-4 list-disc space-y-2 pl-5", BODY)}>
              <li>
                <strong className="text-copilot-text-primary">Paste</strong>: fastest when your PDF allows copying — often clearer than upload.
              </li>
              <li>
                <strong className="text-copilot-text-primary">PDF</strong>: use when the file is small and text-based; scanned slips will show a low-quality extraction note.
              </li>
            </ul>
          </section>
        ) : null}

        {loading ? (
          <div
            className="flex flex-col items-start gap-3 rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.1] sm:p-6"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <div className="h-2 w-full overflow-hidden rounded-full bg-copilot-bg-soft">
              <div className="h-full w-1/3 animate-pulse rounded-full bg-copilot-primary/50" />
            </div>
            <p className="text-sm font-semibold text-copilot-text-primary">{loadingMessage}</p>
            <p className={cn("text-xs", BODY)}>Please keep this tab open until decoding finishes.</p>
          </div>
        ) : null}

        {result ? <PayslipDecoderResultPanels result={result} /> : null}
      </div>
    </div>
  );
}
