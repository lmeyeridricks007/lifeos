"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  defaultBankingCostEstimatorInput,
  estimateBankingCosts,
  getBankingCostNextSteps,
  type BankingCostEstimatorInputs,
} from "@/src/lib/banking/bankingCostEstimator";
import { buildBankingCostSummaryHtml } from "@/src/lib/banking/bankingCostSummaryHtml";
import { buildBankingCostSummaryMarkdown } from "@/src/lib/banking/bankingCostSummaryText";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { BANK_TOOL_CARD, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { BankingCostEstimatorForm } from "./BankingCostEstimatorForm";
import { BankingCostEstimatorResults } from "./BankingCostEstimatorResults";
import { ArrowLeft, Loader2, RotateCcw } from "lucide-react";

const TOTAL_STEPS = 5;

const RESULTS_PREP_MIN_MS = 900;
const RESULTS_PREP_MAX_MS = 1700;

export function BankingCostEstimatorToolClient({ shareUrl }: { shareUrl: string }) {
  const [input, setInput] = useState<BankingCostEstimatorInputs>(() => defaultBankingCostEstimatorInput());
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<"form" | "computing" | "results">("form");
  const [copyDone, setCopyDone] = useState(false);
  const [htmlDownloadDone, setHtmlDownloadDone] = useState(false);
  const [markdownDownloadDone, setMarkdownDownloadDone] = useState(false);
  const resultsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResultsTimeout = useCallback(() => {
    if (resultsTimeoutRef.current != null) {
      clearTimeout(resultsTimeoutRef.current);
      resultsTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearResultsTimeout(), [clearResultsTimeout]);

  const result = useMemo(() => estimateBankingCosts(input), [input]);
  const nextSteps = useMemo(() => getBankingCostNextSteps(input), [input]);

  const patch = useCallback(<K extends keyof BankingCostEstimatorInputs>(key: K, value: BankingCostEstimatorInputs[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  const scrollToToolTop = useCallback(() => {
    requestAnimationFrame(() => {
      document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const reset = useCallback(() => {
    clearResultsTimeout();
    setInput(defaultBankingCostEstimatorInput());
    setStep(1);
    setPhase("form");
    setCopyDone(false);
    setHtmlDownloadDone(false);
    setMarkdownDownloadDone(false);
    scrollToToolTop();
  }, [clearResultsTimeout, scrollToToolTop]);

  const copySummary = useCallback(async () => {
    const text = buildBankingCostSummaryMarkdown({ input, result, nextSteps, shareUrl });
    try {
      await navigator.clipboard.writeText(text);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      setCopyDone(false);
    }
  }, [input, result, nextSteps, shareUrl]);

  const downloadSummaryHtml = useCallback(() => {
    const html = buildBankingCostSummaryHtml({ input, result, nextSteps, shareUrl });
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "banking-cost-estimate-expatcopilot.html";
    a.rel = "noopener";
    a.click();
    URL.revokeObjectURL(url);
    setHtmlDownloadDone(true);
    setTimeout(() => setHtmlDownloadDone(false), 2000);
  }, [input, result, nextSteps, shareUrl]);

  const downloadSummaryMarkdown = useCallback(() => {
    const md = buildBankingCostSummaryMarkdown({ input, result, nextSteps, shareUrl });
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "banking-cost-estimate-expatcopilot.md";
    a.rel = "noopener";
    a.click();
    URL.revokeObjectURL(url);
    setMarkdownDownloadDone(true);
    setTimeout(() => setMarkdownDownloadDone(false), 2000);
  }, [input, result, nextSteps, shareUrl]);

  const goResults = useCallback(() => {
    clearResultsTimeout();
    setPhase("computing");
    const delayMs = RESULTS_PREP_MIN_MS + Math.floor(Math.random() * (RESULTS_PREP_MAX_MS - RESULTS_PREP_MIN_MS + 1));
    resultsTimeoutRef.current = setTimeout(() => {
      resultsTimeoutRef.current = null;
      setPhase("results");
      requestAnimationFrame(() => {
        document.getElementById("banking-cost-estimator-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, delayMs);
  }, [clearResultsTimeout]);

  const editAnswers = useCallback(() => {
    setStep(1);
    setPhase("form");
    scrollToToolTop();
  }, [scrollToToolTop]);

  const progressPct = phase === "results" ? 100 : Math.round((step / TOTAL_STEPS) * 100);
  const progressText =
    phase === "results" ? "All steps done — your estimate is below" : `Step ${step} of ${TOTAL_STEPS} — ${progressPct}%`;

  return (
    <div id="tool-inputs" className="scroll-mt-28 space-y-6 md:space-y-8">
      <div className={cn(BANK_TOOL_CARD, "sticky top-16 z-10 space-y-3 border-copilot-primary/15 shadow-expatos-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 md:top-20")}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className={BANK_TOOL_LABEL} id="bce-progress-label">
              {phase === "results" ? "Questionnaire" : "Progress"}
            </p>
            <p className="mt-1 text-xs font-normal text-copilot-text-secondary" aria-live="polite" aria-atomic="true">
              {progressText}
            </p>
            <ol className="mt-2 flex flex-wrap gap-1.5" aria-label={`Banking cost questionnaire, ${TOTAL_STEPS} steps`}>
              {Array.from({ length: TOTAL_STEPS }, (_, i) => {
                const n = i + 1;
                const isCurrent = phase === "form" && step === n;
                const isComplete = phase === "results" || phase === "computing" || n < step;
                const isFuture = phase === "form" && n > step;
                const stepLabel = isCurrent
                  ? `Step ${n} of ${TOTAL_STEPS}, current`
                  : isComplete
                    ? `Step ${n} of ${TOTAL_STEPS}, completed`
                    : `Step ${n} of ${TOTAL_STEPS}, not started`;
                return (
                  <li key={n} className="shrink-0">
                    <span
                      className={cn(
                        "inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full border px-2 text-[11px] font-normal tabular-nums",
                        isCurrent && "border-copilot-primary bg-copilot-primary text-white ring-2 ring-copilot-primary/25 ring-offset-1 ring-offset-white",
                        isComplete && !isCurrent && "border-copilot-primary/25 bg-copilot-bg-soft text-copilot-text-primary",
                        isFuture && "border-copilot-primary/15 bg-white text-copilot-text-muted",
                      )}
                      aria-current={isCurrent ? "step" : undefined}
                      aria-label={stepLabel}
                    >
                      {n}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            {phase === "results" ? (
              <Button
                type="button"
                variant="secondary"
                className="border-copilot-primary/25 bg-white text-copilot-text-primary shadow-expatos-sm hover:bg-copilot-bg-soft"
                onClick={editAnswers}
                aria-label="Change your answers and return to the questionnaire from step 1"
              >
                <ArrowLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden />
                Edit answers
              </Button>
            ) : null}
            <Button
              type="button"
              variant="secondary"
              className="shrink-0 border-copilot-primary/25 bg-white text-copilot-text-primary shadow-expatos-sm hover:bg-copilot-bg-soft"
              onClick={reset}
              disabled={phase === "computing"}
              aria-label="Reset all answers and return to step 1"
            >
              <RotateCcw className="mr-1.5 h-4 w-4 shrink-0" aria-hidden />
              Reset
            </Button>
          </div>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-copilot-bg-soft">
          <div
            className="h-full rounded-full bg-gradient-to-r from-copilot-primary to-copilot-accent transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={progressText}
            aria-label="Your progress through the steps"
          />
        </div>
      </div>

      {phase === "form" ? (
        <BankingCostEstimatorForm
          input={input}
          onInputChange={patch}
          step={step}
          onStepChange={setStep}
          onReset={reset}
          onSeeResults={goResults}
          onSkipToResults={goResults}
          showStepHelper
        />
      ) : null}

      {phase === "computing" ? (
        <div
          className={cn(BANK_TOOL_CARD, "flex flex-col items-center justify-center gap-4 py-14 text-center")}
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Preparing your banking cost estimate"
        >
          <Loader2 className="h-10 w-10 shrink-0 animate-spin text-copilot-primary" aria-hidden />
          <div className="max-w-sm space-y-1">
            <p className="text-base font-normal text-copilot-text-primary">Preparing your estimate</p>
            <p className="text-sm text-copilot-text-secondary">This usually takes a second or two.</p>
          </div>
        </div>
      ) : null}

      {phase === "results" ? (
        <BankingCostEstimatorResults
          result={result}
          nextSteps={nextSteps}
          onEditAnswers={editAnswers}
          onReset={reset}
          onCopySummary={copySummary}
          copyDone={copyDone}
          onDownloadSummaryHtml={downloadSummaryHtml}
          htmlDownloadDone={htmlDownloadDone}
          onDownloadSummaryMarkdown={downloadSummaryMarkdown}
          markdownDownloadDone={markdownDownloadDone}
        />
      ) : null}
    </div>
  );
}
