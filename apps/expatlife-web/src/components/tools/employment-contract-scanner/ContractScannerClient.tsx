"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { trackContractScanner } from "@/lib/analytics/track";
import { EmploymentContractScannerRecommendedServices } from "@/src/components/tools/employment-contract-scanner/EmploymentContractScannerRecommendedServices";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import {
  CONTRACT_SCANNER_SCENARIO_CARDS,
  CONTRACT_TERMS_GLOSSARY,
} from "@/src/content/tools/employment-contract-scanner/content";
import type { DocumentProcessingResult } from "@/src/lib/tools/contract-scanner/architectureTypes";
import {
  CONTRACT_SCANNER_MAX_PDF_BYTES,
  CONTRACT_SCANNER_MAX_PDF_MB,
  CONTRACT_SCANNER_MAX_TEXT_CHARS,
} from "@/src/lib/tools/contract-scanner/constants";
import {
  downloadContractScannerHtml,
  openPrintContractScannerSummary,
} from "@/src/lib/tools/contract-scanner/exportHtml";
import { getVisibleContractScannerInputTabs } from "@/src/lib/tools/contract-scanner/inputTabs";
import { formatOverallConcernLabel, runContractScan } from "@/src/lib/tools/contract-scanner/parser";
import type {
  ConfidenceTier,
  ContractChecklistAnswers,
  ContractScanResult,
  ExtractionQuality,
  FindingRiskLabel,
  InputMode,
  TriState,
} from "@/src/lib/tools/contract-scanner/types";

function riskBadgeClass(label: FindingRiskLabel): string {
  const map: Record<FindingRiskLabel, string> = {
    common_standard: "bg-emerald-500/15 text-emerald-800 ring-emerald-500/25",
    worth_confirming: "bg-sky-500/15 text-sky-900 ring-sky-500/25",
    potentially_restrictive: "bg-amber-500/15 text-amber-950 ring-amber-500/30",
    broad_strong_wording: "bg-orange-500/15 text-orange-950 ring-orange-500/30",
    missing_unclear: "bg-slate-500/15 text-slate-800 ring-slate-500/25",
    review_before_signing: "bg-red-500/15 text-red-900 ring-red-500/30",
  };
  return map[label] ?? "bg-slate-500/10 text-slate-800";
}

const HUMAN_RISK: Record<FindingRiskLabel, string> = {
  common_standard: "Common / standard",
  worth_confirming: "Worth confirming",
  potentially_restrictive: "Potentially restrictive",
  broad_strong_wording: "Broad / strong wording",
  missing_unclear: "Missing / unclear",
  review_before_signing: "Review before signing",
};

function humanRiskLabel(label: FindingRiskLabel): string {
  return HUMAN_RISK[label] ?? label.replace(/_/g, " ");
}

function scanConfidenceReadable(t: ConfidenceTier): string {
  const map: Record<ConfidenceTier, string> = {
    high: "Higher — enough text for a useful pass",
    medium: "Medium — still verify against your source PDF or email",
    low: "Lower — very short text or weak extraction; indicative only",
  };
  return map[t] ?? t;
}

function findingConfidenceReadable(t: ConfidenceTier): string {
  const map: Record<ConfidenceTier, string> = {
    high: "Higher",
    medium: "Medium",
    low: "Lower — confirm in the original clause",
  };
  return map[t] ?? t;
}

const defaultChecklist = (): ContractChecklistAnswers => ({
  contractType: "temporary_unknown",
  salaryPresent: "unknown",
  holidayAllowance: "unknown",
  pension: "unknown",
  bonusVariable: "unknown",
  probation: "unknown",
  noticePeriod: "unknown",
  nonCompete: "unknown",
  sideJobRestriction: "unknown",
  overtimeClause: "unknown",
  handbookReference: "unknown",
  relocationRepayment: "unknown",
  visaSponsor: "unknown",
  thirtyPercentRuling: "unknown",
  remoteHybrid: "unknown",
});

type Props = {
  calculatorCanonicalUrl: string;
  pageContext: string;
};

export function ContractScannerClient({ calculatorCanonicalUrl, pageContext }: Props) {
  const baseId = useId().replace(/:/g, "");
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const [tab, setTab] = useState<InputMode>("paste");
  const [pasteText, setPasteText] = useState("");
  const [pdfExtracted, setPdfExtracted] = useState("");
  const [pdfQuality, setPdfQuality] = useState<ExtractionQuality | null>(null);
  const [pdfWarnings, setPdfWarnings] = useState<string[]>([]);
  const [likelyScanned, setLikelyScanned] = useState(false);
  /** Full document-stage result from extract API (drives OCR flags + merge). */
  const [pdfDocumentProcessing, setPdfDocumentProcessing] = useState<DocumentProcessingResult | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<ContractChecklistAnswers>(defaultChecklist);
  const [result, setResult] = useState<ContractScanResult | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const scanInFlightRef = useRef(false);
  const cancelScanRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    trackContractScanner("contract_scanner_opened", { page_context: pageContext });
  }, [pageContext]);

  useEffect(
    () => () => {
      cancelScanRef.current?.();
    },
    []
  );

  const startDelayedScan = useCallback(
    (text: string, mode: InputMode, meta?: Partial<ContractScanResult>) => {
      const body = mode === "checklist" ? "" : text.trim();
      if (mode !== "checklist" && body.length < 80) {
        setFormError("Add more contract text (at least a few paragraphs) for a meaningful scan, or use the manual checklist.");
        return;
      }
      if (body.length > CONTRACT_SCANNER_MAX_TEXT_CHARS) {
        setFormError(`Text exceeds ${CONTRACT_SCANNER_MAX_TEXT_CHARS.toLocaleString()} characters. Paste a shorter excerpt.`);
        return;
      }
      if (scanInFlightRef.current) return;

      setFormError(null);
      cancelScanRef.current?.();
      cancelScanRef.current = null;

      scanInFlightRef.current = true;
      setIsScanning(true);
      document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });

      const delayMs = 1000 + Math.floor(Math.random() * 1000);
      const timer = window.setTimeout(() => {
        const r = runContractScan({
          mode,
          text: body,
          extractionQuality: meta?.extractionQuality,
          likelyScannedDocument: meta?.likelyScannedDocument,
          extractionWarnings: meta?.extractionWarnings,
          pdfPageCount: meta?.documentProcessing?.pageCount,
          documentProcessing: meta?.documentProcessing,
          checklist: mode === "checklist" ? checklist : undefined,
        });
        setResult({ ...r, ...meta });
        trackContractScanner("contract_scanner_result_viewed", {
          page_context: pageContext,
          mode,
          overall: r.overallConcern,
          findings_count: r.findings.length,
        });
        scanInFlightRef.current = false;
        setIsScanning(false);
        cancelScanRef.current = null;
        requestAnimationFrame(() => {
          document.getElementById("contract-scanner-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, delayMs);

      cancelScanRef.current = () => {
        window.clearTimeout(timer);
        scanInFlightRef.current = false;
        setIsScanning(false);
        cancelScanRef.current = null;
      };
    },
    [checklist, pageContext]
  );

  const onPasteSubmit = () => {
    trackContractScanner("contract_scanner_paste_submitted", { page_context: pageContext });
    startDelayedScan(pasteText, "paste");
  };

  const onPdfExtract = async (file: File) => {
    setPdfError(null);
    if (file.size > CONTRACT_SCANNER_MAX_PDF_BYTES) {
      setPdfError(`File is too large. Maximum size is ${CONTRACT_SCANNER_MAX_PDF_MB} MB.`);
      return;
    }
    setPdfLoading(true);
    setPdfExtracted("");
    setPdfQuality(null);
    setPdfWarnings([]);
    setPdfDocumentProcessing(null);
    trackContractScanner("contract_scanner_pdf_uploaded", { page_context: pageContext, size: file.size });
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/tools/contract-scanner/extract", { method: "POST", body: fd });
      const data = (await res.json()) as { error?: string } & Partial<DocumentProcessingResult>;
      if (!res.ok) {
        setPdfError(data.error ?? "Upload failed.");
        setPdfLoading(false);
        return;
      }
      const dp: DocumentProcessingResult = {
        extractedText: data.extractedText ?? "",
        extractionQuality: data.extractionQuality ?? "partial",
        extractionWarnings: data.extractionWarnings ?? [],
        textLength: data.textLength ?? 0,
        pageCount: data.pageCount ?? 0,
        documentInputSource: data.documentInputSource ?? "pdf_text",
        extractionMethod: data.extractionMethod ?? "pdf_text",
        likelyScannedDocument: Boolean(data.likelyScannedDocument),
        ocrRecommended: Boolean(data.ocrRecommended),
        ocrAvailable: Boolean(data.ocrAvailable),
      };
      setPdfDocumentProcessing(dp);
      setPdfExtracted(dp.extractedText);
      setPdfQuality(dp.extractionQuality);
      setPdfWarnings(dp.extractionWarnings);
      setLikelyScanned(dp.likelyScannedDocument);
    } catch {
      setPdfError("Network error. Try again or paste text instead.");
    }
    setPdfLoading(false);
  };

  const onPdfAnalyze = () => {
    startDelayedScan(pdfExtracted, "pdf", {
      extractionQuality: pdfQuality ?? undefined,
      likelyScannedDocument: likelyScanned,
      extractionWarnings: pdfWarnings.length ? pdfWarnings : undefined,
      documentProcessing: pdfDocumentProcessing ?? undefined,
    });
  };

  const onChecklistSubmit = () => {
    trackContractScanner("contract_scanner_manual_checklist_used", { page_context: pageContext });
    startDelayedScan("", "checklist");
  };

  const concernColor = useMemo(() => {
    if (!result) return "border-copilot-primary/15 bg-copilot-bg-soft";
    switch (result.overallConcern) {
      case "low_concern":
        return "border-emerald-500/25 bg-emerald-500/5";
      case "moderate_concern":
        return "border-amber-500/25 bg-amber-500/5";
      case "elevated_concern":
        return "border-orange-500/30 bg-orange-500/5";
      case "high_review_recommended":
        return "border-red-500/30 bg-red-500/5";
      default:
        return "border-copilot-primary/15 bg-copilot-bg-soft";
    }
  }, [result]);

  const copyExtracted = async () => {
    const t = result?.normalizedText ?? pdfExtracted ?? pasteText;
    try {
      await navigator.clipboard.writeText(t);
    } catch {
      /* ignore */
    }
  };

  const showScannedPdfWarning =
    tab === "pdf" && (likelyScanned || pdfQuality === "poor") && pdfExtracted.trim().length > 0 && !pdfLoading;

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-6">
        <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/60 p-4 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.04]">
          <p className="font-semibold text-copilot-text-primary">First time here?</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Paste works best: copy from a PDF viewer or your offer email (aim for several paragraphs — about 80+ characters minimum).</li>
            <li>
              PDF upload only reads a <strong className="font-semibold text-copilot-text-primary">text layer</strong> — scanned pages need the{" "}
              <strong className="font-semibold text-copilot-text-primary">paste</strong> tab instead.
            </li>
            <li>
              No contract text handy? Use the <strong className="font-semibold text-copilot-text-primary">checklist</strong> tab for a lighter read-out.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-sm font-semibold text-copilot-text-primary">Input mode</p>
        <div
          role="tablist"
          aria-label="Contract input mode"
          className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap [&::-webkit-scrollbar]:hidden"
        >
          {getVisibleContractScannerInputTabs().map((t) => (
            <button
              key={t.mode}
              type="button"
              role="tab"
              aria-selected={tab === t.mode}
              id={`${baseId}-tab-${t.mode}`}
              aria-controls={`${baseId}-panel-${t.mode}`}
              className={cn(
                "shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-medium ring-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copilot-primary sm:py-2",
                tab === t.mode
                  ? "bg-copilot-primary text-white ring-copilot-primary"
                  : "bg-copilot-bg-soft text-copilot-text-primary ring-copilot-primary/15 hover:bg-copilot-bg-soft/80"
              )}
              onClick={() => {
                setTab(t.mode);
                setFormError(null);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "paste" ? (
          <div
            role="tabpanel"
            id={`${baseId}-panel-paste`}
            aria-labelledby={`${baseId}-tab-paste`}
            className="mt-5 space-y-3"
          >
            <label htmlFor={`${baseId}-paste`} className="text-sm font-medium text-copilot-text-primary">
              Contract or offer text
            </label>
            <p className="text-xs leading-relaxed text-copilot-text-secondary">
              Paste the contract or offer text here. Best for copied text from PDFs, portals, or emails. You need roughly a few paragraphs (about 80+ characters) for a meaningful scan.
            </p>
            <textarea
              id={`${baseId}-paste`}
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
              rows={12}
              className="w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2 text-sm text-copilot-text-primary shadow-sm ring-1 ring-copilot-primary/[0.04] focus:border-copilot-primary focus:outline-none focus:ring-2 focus:ring-copilot-primary/20"
              placeholder="Paste your contract or offer letter…"
            />
            <button
              type="button"
              disabled={isScanning}
              onClick={onPasteSubmit}
              className="rounded-full bg-copilot-primary px-5 py-2.5 text-sm font-semibold text-white shadow-expatos-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copilot-primary disabled:cursor-not-allowed disabled:opacity-55"
            >
              {isScanning ? "Scanning…" : "Scan contract"}
            </button>
          </div>
        ) : null}

        {tab === "pdf" ? (
          <div
            role="tabpanel"
            id={`${baseId}-panel-pdf`}
            aria-labelledby={`${baseId}-tab-pdf`}
            aria-busy={pdfLoading}
            className="mt-5 space-y-4"
          >
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              Text-based PDF only (selectable text). Max {CONTRACT_SCANNER_MAX_PDF_MB}&nbsp;MB. The server extracts text for this request only — the file is not stored. Image-only
              scans will look empty or garbled; use <strong className="text-copilot-text-primary">Paste text</strong> instead.
            </p>
            <input
              ref={pdfInputRef}
              type="file"
              accept="application/pdf"
              aria-label="Upload contract PDF"
              disabled={pdfLoading}
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void onPdfExtract(f);
              }}
            />
            <button
              type="button"
              disabled={pdfLoading}
              onClick={() => pdfInputRef.current?.click()}
              className="flex min-h-[52px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-copilot-primary/25 bg-copilot-bg-soft/50 px-4 py-4 text-center text-sm text-copilot-text-primary ring-1 ring-copilot-primary/[0.06] transition-colors hover:border-copilot-primary/40 hover:bg-copilot-bg-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="font-semibold">Tap to choose PDF</span>
              <span className="mt-1 text-xs text-copilot-text-secondary">or use the file picker on desktop</span>
            </button>
            {pdfLoading ? (
              <div className="flex items-center gap-3 rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/70 p-4" role="status">
                <span
                  className="inline-block size-5 shrink-0 animate-spin rounded-full border-2 border-copilot-primary/30 border-t-copilot-primary"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-copilot-text-primary">Extracting text from PDF…</p>
                  <p className="mt-0.5 text-xs text-copilot-text-secondary">Large files can take a few seconds.</p>
                </div>
              </div>
            ) : null}
            {pdfError ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-950">
                <p className="font-semibold">Could not use this PDF</p>
                <p className="mt-1">{pdfError}</p>
                <p className="mt-3 text-copilot-text-secondary">
                  Try a smaller file, switch to the <strong className="text-copilot-text-primary">Paste text</strong> tab, or ask HR for a text-based
                  export.
                </p>
              </div>
            ) : null}
            {pdfQuality ? (
              <p className="text-sm text-copilot-text-primary">
                Extraction quality: <span className="font-semibold capitalize">{pdfQuality}</span>
              </p>
            ) : null}
            {showScannedPdfWarning ? (
              <div className="rounded-xl border border-amber-500/40 bg-amber-500/15 p-4 text-sm leading-relaxed text-amber-950">
                <p className="font-semibold text-amber-950">This PDF looks like a scan or has very little text</p>
                <p className="mt-1">
                  The scanner only sees what was extracted. For reliable results, copy the text from your original document into the{" "}
                  <strong>Paste text</strong> tab, or request a searchable PDF from HR.
                </p>
              </div>
            ) : null}
            {pdfWarnings.map((w) => (
              <div
                key={w.slice(0, 40)}
                className="rounded-xl border border-amber-500/35 bg-amber-500/10 p-3 text-sm text-amber-950"
              >
                {w}
              </div>
            ))}
            {pdfExtracted ? (
              <details className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/60 p-3 text-sm">
                <summary className="cursor-pointer font-semibold text-copilot-text-primary">Preview extracted text</summary>
                <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs text-copilot-text-secondary">
                  {pdfExtracted.slice(0, 12_000)}
                  {pdfExtracted.length > 12_000 ? "…" : ""}
                </pre>
              </details>
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                disabled={!pdfExtracted.trim() || pdfLoading || isScanning}
                onClick={onPdfAnalyze}
                className="rounded-full bg-copilot-primary px-5 py-2.5 text-sm font-semibold text-white shadow-expatos-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isScanning ? "Scanning…" : "Scan contract"}
              </button>
              <button
                type="button"
                disabled={pdfLoading || isScanning}
                onClick={() => {
                  setTab("paste");
                  setFormError(null);
                }}
                className="rounded-full border border-copilot-primary/25 bg-white px-4 py-2 text-sm font-semibold text-copilot-primary shadow-sm hover:bg-copilot-bg-soft disabled:cursor-not-allowed disabled:opacity-50"
              >
                Use paste instead
              </button>
            </div>
          </div>
        ) : null}

        {tab === "checklist" ? (
          <div
            role="tabpanel"
            id={`${baseId}-panel-checklist`}
            aria-labelledby={`${baseId}-tab-checklist`}
            className="mt-5 space-y-4"
          >
            <p className="text-sm text-copilot-text-secondary">
              Answer from what you have seen so far. This produces a lighter, rules-based read-out without full text.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldSelect
                label="Contract type"
                value={checklist.contractType}
                onChange={(v) => setChecklist((c) => ({ ...c, contractType: v as ContractChecklistAnswers["contractType"] }))}
                options={[
                  { v: "permanent", l: "Permanent / indefinite" },
                  { v: "fixed_term", l: "Fixed-term" },
                  { v: "temporary_unknown", l: "Temporary / unknown" },
                ]}
              />
              <TriField
                label="Salary clearly stated?"
                value={checklist.salaryPresent}
                onChange={(v) => setChecklist((c) => ({ ...c, salaryPresent: v }))}
              />
              <TriField
                label="Holiday allowance mentioned?"
                value={checklist.holidayAllowance}
                onChange={(v) => setChecklist((c) => ({ ...c, holidayAllowance: v }))}
              />
              <TriField label="Pension mentioned?" value={checklist.pension} onChange={(v) => setChecklist((c) => ({ ...c, pension: v }))} />
              <TriField
                label="Bonus / variable comp?"
                value={checklist.bonusVariable}
                onChange={(v) => setChecklist((c) => ({ ...c, bonusVariable: v }))}
              />
              <TriField label="Probation present?" value={checklist.probation} onChange={(v) => setChecklist((c) => ({ ...c, probation: v }))} />
              <TriField
                label="Notice period present?"
                value={checklist.noticePeriod}
                onChange={(v) => setChecklist((c) => ({ ...c, noticePeriod: v }))}
              />
              <TriField label="Non-compete present?" value={checklist.nonCompete} onChange={(v) => setChecklist((c) => ({ ...c, nonCompete: v }))} />
              <TriField
                label="Side-job restriction?"
                value={checklist.sideJobRestriction}
                onChange={(v) => setChecklist((c) => ({ ...c, sideJobRestriction: v }))}
              />
              <TriField
                label="Overtime clause?"
                value={checklist.overtimeClause}
                onChange={(v) => setChecklist((c) => ({ ...c, overtimeClause: v }))}
              />
              <TriField
                label="Handbook / policy refs?"
                value={checklist.handbookReference}
                onChange={(v) => setChecklist((c) => ({ ...c, handbookReference: v }))}
              />
              <TriField
                label="Relocation repayment?"
                value={checklist.relocationRepayment}
                onChange={(v) => setChecklist((c) => ({ ...c, relocationRepayment: v }))}
              />
              <TriField label="Visa / sponsor clause?" value={checklist.visaSponsor} onChange={(v) => setChecklist((c) => ({ ...c, visaSponsor: v }))} />
              <TriField
                label="30% ruling mentioned?"
                value={checklist.thirtyPercentRuling}
                onChange={(v) => setChecklist((c) => ({ ...c, thirtyPercentRuling: v }))}
              />
              <TriField
                label="Remote / hybrid clause?"
                value={checklist.remoteHybrid}
                onChange={(v) => setChecklist((c) => ({ ...c, remoteHybrid: v }))}
              />
            </div>
            <button
              type="button"
              disabled={isScanning}
              onClick={onChecklistSubmit}
              className="rounded-full bg-copilot-primary px-5 py-2.5 text-sm font-semibold text-white shadow-expatos-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-55"
            >
              {isScanning ? "Scanning…" : "Scan contract"}
            </button>
          </div>
        ) : null}

        <p className="mt-5 border-t border-copilot-primary/10 pt-4 text-xs leading-relaxed text-copilot-text-secondary">
          <span className="font-semibold text-copilot-text-primary">Privacy:</span> we do not save your contract to a database. PDFs are read once to
          extract text, then discarded; scanning runs in your browser.{" "}
          <a href="#privacy-session" className="font-medium text-copilot-primary underline-offset-2 hover:underline">
            How we handle your text
          </a>
        </p>

        {formError ? <p className="mt-3 text-sm font-medium text-red-700">{formError}</p> : null}
      </div>

      <div id="tool-results" className="scroll-mt-28 space-y-10 md:scroll-mt-32">
        {isScanning ? (
          <ToolResultsLoading message="Matching clauses, gaps, and HR questions…" />
        ) : (
          <>
        <section id="contract-scanner-results" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Results summary</h2>
          {result ? (
            <>
              <div className={cn("rounded-2xl border p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06]", concernColor)}>
                <p className="text-xs font-bold uppercase tracking-wide text-copilot-text-secondary">Overall</p>
                <p className="mt-1 text-xl font-semibold text-copilot-text-primary">{formatOverallConcernLabel(result.overallConcern)}</p>
                <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                  Contract type signal: <strong className="text-copilot-text-primary">{result.contractType.replace(/_/g, " ")}</strong>
                  <span className="mx-1 text-copilot-text-secondary">·</span>
                  Scan confidence:{" "}
                  <strong className="text-copilot-text-primary" title={scanConfidenceReadable(result.scanConfidence)}>
                    {scanConfidenceReadable(result.scanConfidence)}
                  </strong>
                </p>
                {result.topConcerns.length ? (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
                    {result.topConcerns.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-3 text-sm font-medium text-copilot-text-primary">Suggested next step</p>
                <p className="text-sm leading-relaxed text-copilot-text-secondary">{result.suggestedNextStep}</p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="#contract-scanner-export"
                    className="inline-flex items-center justify-center rounded-full bg-copilot-primary px-5 py-2.5 text-center text-sm font-semibold text-white shadow-expatos-sm hover:opacity-95"
                  >
                    Download or print summary
                  </a>
                  <a
                    href="#contract-scanner-questions"
                    className="inline-flex items-center justify-center rounded-full border border-copilot-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-copilot-primary shadow-sm hover:bg-copilot-bg-soft"
                  >
                    Jump to HR questions
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <SummaryMini title="Contract type" body={result.contractType.replace(/_/g, " ")} />
                <SummaryMini
                  title="Biggest concern"
                  body={result.topConcerns[0] ?? "No single dominant flag in this pass."}
                />
                <SummaryMini
                  title="Main missing / unclear"
                  body={result.missingItems[0]?.label ?? "None strongly flagged."}
                />
                <SummaryMini
                  title="Expat-specific cues"
                  body={
                    result.findings.some((f) => f.category === "expat_immigration")
                      ? "Immigration / 30% / relocation topics detected — confirm details."
                      : "No strong expat-only flags in matched text."
                  }
                />
                <SummaryMini title="Recommended action" body="Use HR questions below; escalate restrictive clauses to a lawyer if needed." />
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-copilot-primary/20 bg-copilot-bg-soft/50 p-6 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
              <p className="font-semibold text-copilot-text-primary">No scan yet</p>
              <p className="mt-2">
                Run <strong className="text-copilot-text-primary">Scan contract</strong> (paste or PDF) or the{" "}
                <strong className="text-copilot-text-primary">checklist</strong> above. After a short loading step, your summary, findings, and export appear here.
              </p>
            </div>
          )}
        </section>

        <section id="contract-scanner-key-risks" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Key risks</h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Highlights the themes worth discussing with HR. Badges reflect pattern-based concern — not whether a court would enforce a clause.
          </p>
          {result ? (
            <>
              {result.keyRiskCards.length ? (
                <div className="grid gap-3 md:grid-cols-2">
                  {result.keyRiskCards.map((k) => (
                    <article
                      key={k.id}
                      className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
                    >
                      <div className="flex flex-wrap items-start gap-2">
                        <h3 className="text-base font-semibold text-copilot-text-primary">{k.title}</h3>
                        <span
                          className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1", riskBadgeClass(k.badge))}
                          title={humanRiskLabel(k.badge)}
                        >
                          {humanRiskLabel(k.badge)}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{k.summary}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-copilot-text-secondary">No dedicated key-risk cards for this scan — see clause findings below.</p>
              )}

              <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4">
                <p className="text-sm font-semibold text-copilot-text-primary">Category signals (0–100)</p>
                <p className="mt-1 text-xs text-copilot-text-secondary">Higher scores mean “pay more attention here” in this pass — not a quality score for your contract.</p>
                <ul className="mt-3 space-y-3 text-sm text-copilot-text-secondary">
                  {result.categoryScores.map((d) => (
                    <li key={d.dimension} className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                      <span className="min-w-0 shrink-0 font-medium text-copilot-text-primary sm:w-48">{d.dimension.replace(/_/g, " ")}</span>
                      <span className="h-2 w-full overflow-hidden rounded-full bg-white ring-1 ring-copilot-primary/10 sm:min-w-[120px] sm:flex-1">
                        <span className="block h-full rounded-full bg-copilot-primary/70" style={{ width: `${Math.min(100, d.score)}%` }} />
                      </span>
                      <span className="tabular-nums text-copilot-text-primary sm:w-8 sm:text-right">{d.score}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-sm text-copilot-text-secondary">Key risk cards and category bars appear after you run a scan.</p>
          )}
        </section>

        <section id="contract-scanner-clauses" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Clause findings</h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Matched patterns only. If something is missing here, it may still appear in an annex, CAO, or handbook you did not paste.
          </p>
          {result ? (
            <div className="space-y-2">
              {result.findings.map((f) => (
                <details
                  key={f.id}
                  className="group rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
                >
                  <summary className="cursor-pointer list-none font-semibold text-copilot-text-primary [&::-webkit-details-marker]:hidden">
                    <span className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <span className="text-copilot-text-primary">{f.subcategory}</span>
                      <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1", riskBadgeClass(f.riskLabel))}>
                        {humanRiskLabel(f.riskLabel)}
                      </span>
                      <span className="text-xs font-normal text-copilot-text-secondary" title={findingConfidenceReadable(f.confidence)}>
                        Match confidence: {findingConfidenceReadable(f.confidence)}
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Snippet</p>
                  <p className="text-sm leading-relaxed text-copilot-text-primary">{f.snippet}</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{f.explanation}</p>
                  <p className="mt-1 text-sm leading-relaxed text-copilot-text-secondary">
                    <span className="font-semibold text-copilot-text-primary">Why it matters: </span>
                    {f.whyItMatters}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    <span className="font-semibold text-copilot-text-primary">Ask: </span>
                    {f.questionToAsk}
                  </p>
                </details>
              ))}
            </div>
          ) : (
            <p className="text-sm text-copilot-text-secondary">Expandable clause cards with snippets and suggested questions appear after a scan.</p>
          )}
        </section>

        <section id="contract-scanner-questions" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Questions to ask HR / recruiter</h2>
          {result ? (
            <ol className="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
              {result.hrQuestions.map((q) => (
                <li key={q.id} className="pl-1">
                  {q.text}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-copilot-text-secondary">Concrete, text-based questions are generated after you run a scan.</p>
          )}
        </section>

        <section id="contract-scanner-missing" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Missing / unclear items</h2>
          {result ? (
            result.missingItems.length ? (
              <ul className="space-y-2 text-sm text-copilot-text-secondary">
                {result.missingItems.map((m) => (
                  <li key={m.id} className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3 leading-relaxed">
                    <span className="font-semibold text-copilot-text-primary">{m.label}</span> — {m.detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-copilot-text-secondary">No major gaps flagged heuristically for this text length.</p>
            )
          ) : (
            <p className="text-sm text-copilot-text-secondary">Heuristic gap detection runs on your pasted or extracted text after you scan.</p>
          )}
        </section>

        {result && (result.mode === "paste" || result.mode === "pdf") && result.normalizedTextLength > 0 ? (
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Normalized text</h2>
            <details className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-3">
              <summary className="cursor-pointer text-sm font-semibold text-copilot-text-primary">Show text used for analysis</summary>
              <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap text-xs text-copilot-text-secondary">
                {result.normalizedText.slice(0, 20_000)}
                {result.normalizedText.length > 20_000 ? "…" : ""}
              </pre>
              <button
                type="button"
                onClick={() => void copyExtracted()}
                className="mt-2 text-sm font-semibold text-copilot-primary hover:underline"
              >
                Copy text
              </button>
            </details>
          </section>
        ) : null}

        {result ? (
          <section className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]">
            <h2 className="text-base font-semibold text-copilot-text-primary">How to interpret your result</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
              <li>This is awareness support, not a legal assessment.</li>
              <li>Broad clauses are not always unenforceable, but they deserve review before you rely on them.</li>
              <li>Handbook and CAO references can add material obligations not visible in your paste.</li>
              <li>Expat clauses often interact with permits, relocation repayment, and 30% ruling administration.</li>
            </ul>
          </section>
        ) : null}

        <section id="contract-scanner-glossary" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Common Dutch contract terms</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {CONTRACT_TERMS_GLOSSARY.map((g) => (
                <article key={g.term} className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">{g.term}</p>
                  <p className="mt-1 text-copilot-text-secondary">{g.explainer}</p>
                  <p className="mt-2 text-xs text-copilot-text-secondary">
                    <span className="font-semibold text-copilot-text-primary">Why expats care: </span>
                    {g.expatNote}
                  </p>
                </article>
              ))}
            </div>
        </section>

        <section id="contract-scanner-examples" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Example scenarios</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {CONTRACT_SCANNER_SCENARIO_CARDS.map((s) => (
              <article key={s.title} className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm ring-1 ring-copilot-primary/[0.05]">
                <p className="font-semibold text-copilot-text-primary">{s.title}</p>
                <p className="mt-1 leading-relaxed text-copilot-text-secondary">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="recommended-services" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Recommended services</h2>
          <EmploymentContractScannerRecommendedServices result={result} pageContext={pageContext} />
        </section>

        <section
          id="contract-scanner-export"
          className="scroll-mt-28 space-y-3 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4 ring-1 ring-copilot-primary/[0.06] md:scroll-mt-32 md:p-5"
        >
          <h2 className="text-lg font-semibold text-copilot-text-primary">Export summary</h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Download a readable HTML file or use your browser’s print dialog to save a PDF. The export restates findings and questions — it does not include your full contract text unless you
            copied it elsewhere.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              disabled={!result}
              onClick={() => {
                if (!result) return;
                downloadContractScannerHtml(result, calculatorCanonicalUrl);
                trackContractScanner("contract_scanner_export_downloaded", { page_context: pageContext, format: "html" });
              }}
              className="rounded-full border border-copilot-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-copilot-primary shadow-sm hover:bg-copilot-bg-soft disabled:cursor-not-allowed disabled:opacity-45"
            >
              Download HTML summary
            </button>
            <button
              type="button"
              disabled={!result}
              onClick={() => {
                if (!result) return;
                openPrintContractScannerSummary(result, calculatorCanonicalUrl);
                trackContractScanner("contract_scanner_export_downloaded", { page_context: pageContext, format: "print" });
              }}
              className="rounded-full border border-copilot-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-copilot-primary shadow-sm hover:bg-copilot-bg-soft disabled:cursor-not-allowed disabled:opacity-45"
            >
              Print / save as PDF
            </button>
          </div>
          {!result ? (
            <p className="text-xs text-copilot-text-secondary">Run a scan first to enable export.</p>
          ) : null}
        </section>
          </>
        )}
      </div>
    </div>
  );
}

function SummaryMini({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]">
      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{title}</p>
      <p className="mt-1 font-medium text-copilot-text-primary">{body}</p>
    </div>
  );
}

function TriField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: TriState;
  onChange: (v: TriState) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-copilot-text-primary">{label}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {(["yes", "no", "unknown"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={cn(
              "rounded-lg px-3 py-1 text-xs font-medium ring-1",
              value === v ? "bg-copilot-primary text-white ring-copilot-primary" : "bg-white text-copilot-text-secondary ring-copilot-primary/15"
            )}
          >
            {v === "yes" ? "Yes" : v === "no" ? "No" : "Unsure"}
          </button>
        ))}
      </div>
    </div>
  );
}

function FieldSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { v: T; l: string }[];
}) {
  return (
    <div>
      <label className="text-sm font-medium text-copilot-text-primary">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="mt-1 w-full rounded-lg border border-copilot-primary/15 bg-white px-3 py-2 text-sm text-copilot-text-primary"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
    </div>
  );
}
