"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { BANK_COMPARISON_TOP_MATCH_COUNT, computeBankComparison, defaultBankComparisonInput } from "@/src/lib/tools/bank-comparison/engine";
import type { BankComparisonInput } from "@/src/lib/tools/bank-comparison/types";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { BankComparisonForm } from "@/src/components/tools/banking/BankComparisonForm";
import { BankComparisonResults } from "@/src/components/tools/banking/BankComparisonResults";
import { BANK_TOOL_CARD, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { Loader2, RotateCcw } from "lucide-react";

const TOTAL_STEPS = 5;

function buildShareText(input: BankComparisonInput, shareUrl: string): string {
  const r = computeBankComparison(input);
  const lines = [
    "Bank comparison — short summary (ExpatCopilot)",
    shareUrl,
    "",
    r.recommendedSetup.title,
    r.recommendedSetup.body,
    "",
    "Best matches (planning score out of 100):",
    ...r.topMatches.map((m) => `- ${m.name}: ${m.fitScore}/100 — ${m.bestUseCase}`),
    "",
    "Extra costs to watch for:",
    ...r.hiddenCostWarnings.map((w) => `• ${w}`),
    "",
    AFFILIATE_LINKS_SCORING_DISCLAIMER,
  ];
  return lines.join("\n");
}

const RESULTS_PREP_MIN_MS = 1000;
const RESULTS_PREP_MAX_MS = 2000;

export function BankComparisonToolClient({ shareUrl }: { shareUrl: string }) {
  const [input, setInput] = useState<BankComparisonInput>(() => defaultBankComparisonInput());
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<"form" | "computing" | "results">("form");
  const [copyDone, setCopyDone] = useState(false);
  const resultsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResultsTimeout = useCallback(() => {
    if (resultsTimeoutRef.current != null) {
      clearTimeout(resultsTimeoutRef.current);
      resultsTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearResultsTimeout(), [clearResultsTimeout]);

  const result = useMemo(() => computeBankComparison(input), [input]);

  const patch = useCallback(<K extends keyof BankComparisonInput>(key: K, value: BankComparisonInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  const scrollToToolTop = useCallback(() => {
    requestAnimationFrame(() => {
      document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const reset = useCallback(() => {
    clearResultsTimeout();
    setInput(defaultBankComparisonInput());
    setStep(1);
    setPhase("form");
    setCopyDone(false);
    scrollToToolTop();
  }, [clearResultsTimeout, scrollToToolTop]);

  const copySummary = useCallback(async () => {
    const text = buildShareText(input, shareUrl);
    try {
      await navigator.clipboard.writeText(text);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      setCopyDone(false);
    }
  }, [input, shareUrl]);

  const goResults = useCallback(() => {
    clearResultsTimeout();
    setPhase("computing");
    const delayMs = RESULTS_PREP_MIN_MS + Math.floor(Math.random() * (RESULTS_PREP_MAX_MS - RESULTS_PREP_MIN_MS + 1));
    resultsTimeoutRef.current = setTimeout(() => {
      resultsTimeoutRef.current = null;
      setPhase("results");
      requestAnimationFrame(() => {
        document.getElementById("bank-comparison-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    phase === "results"
      ? "All steps done — your results are below"
      : `Step ${step} of ${TOTAL_STEPS} — ${progressPct}%`;

  return (
    <div id="tool-inputs" className="scroll-mt-28 space-y-6 md:space-y-8">
      <div className={cn(BANK_TOOL_CARD, "sticky top-16 z-10 space-y-3 border-copilot-primary/15 shadow-expatos-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 md:top-20")}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className={BANK_TOOL_LABEL}>Progress</p>
            <p className="mt-1 text-xs font-normal text-copilot-text-secondary" aria-live="polite">
              {progressText}
            </p>
            <ol className="mt-2 flex flex-wrap gap-1.5" aria-label="Steps">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => {
                const n = i + 1;
                const isCurrent = phase === "form" && step === n;
                const isComplete = phase === "results" || phase === "computing" || n < step;
                const isFuture = phase === "form" && n > step;
                return (
                  <li key={n}>
                    <span
                      className={cn(
                        "inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full border px-2 text-[11px] font-normal tabular-nums",
                        isCurrent && "border-copilot-primary bg-copilot-primary text-white",
                        isComplete && !isCurrent && "border-copilot-primary/25 bg-copilot-bg-soft text-copilot-text-primary",
                        isFuture && "border-copilot-primary/15 bg-white text-copilot-text-muted",
                      )}
                      aria-current={isCurrent ? "step" : undefined}
                    >
                      {n}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="shrink-0 text-copilot-text-secondary hover:text-copilot-text-primary"
            onClick={reset}
            disabled={phase === "computing"}
            aria-label="Reset all answers and return to step 1"
          >
            <RotateCcw className="mr-1.5 h-4 w-4 shrink-0" aria-hidden />
            Reset
          </Button>
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
        <BankComparisonForm
          input={input}
          onInputChange={patch}
          step={step}
          onStepChange={setStep}
          onReset={reset}
          onSeeResults={goResults}
          onSkipToResults={goResults}
        />
      ) : null}

      {phase === "computing" ? (
        <div
          className={cn(BANK_TOOL_CARD, "flex flex-col items-center justify-center gap-4 py-14 text-center")}
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Preparing your bank comparison results"
        >
          <Loader2 className="h-10 w-10 shrink-0 animate-spin text-copilot-primary" aria-hidden />
          <div className="max-w-sm space-y-1">
            <p className="text-base font-normal text-copilot-text-primary">Preparing your comparison</p>
            <p className="text-sm text-copilot-text-secondary">This usually takes a second or two.</p>
          </div>
        </div>
      ) : null}

      {phase === "results" ? (
        <BankComparisonResults
          result={result}
          topMatchCount={BANK_COMPARISON_TOP_MATCH_COUNT}
          onEditAnswers={editAnswers}
          onReset={reset}
          onCopySummary={copySummary}
          copyDone={copyDone}
        />
      ) : null}
    </div>
  );
}
