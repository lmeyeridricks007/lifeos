"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildTransferCostHiddenWarnings,
  computeTransferCostEstimate,
  defaultTransferCostCalculatorInput,
  getTransferCostCalculatorBlockers,
} from "@/src/lib/tools/transfer-cost-calculator/engine";
import type { TransferCostCalculatorInput } from "@/src/lib/tools/transfer-cost-calculator/types";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { BANK_TOOL_CARD, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { TransferCostForm } from "./TransferCostForm";
import { TransferCostResults } from "./TransferCostResults";
import { TransferCostWorkflowCta } from "./TransferCostWorkflowCta";
import { formatBankingCostRange } from "@/src/components/tools/banking-cost/bankingCostFormat";
import { RotateCcw } from "lucide-react";

const TOTAL_STEPS = 4;

function buildSummaryMarkdown(input: TransferCostCalculatorInput, shareUrl: string): string {
  const blockers = getTransferCostCalculatorBlockers(input);
  if (blockers.length) return ["International Transfer Cost Calculator — ExpatCopilot", shareUrl, "", "Incomplete answers:", blockers[0]].join("\n");
  const r = computeTransferCostEstimate(input);
  const lines = [
    "International Transfer Cost Calculator — ExpatCopilot",
    shareUrl,
    "",
    `Send about €${Math.round(r.sendAmountEur)} toward ${input.toCurrency} (${input.frequency.replace(/_/g, " ")}, ${input.method.replace(/_/g, " ")})`,
    "",
    `Total modelled cost (send side): ${formatBankingCostRange(r.headlineTotalCostEurLow, r.headlineTotalCostEurHigh)}`,
    `Value after typical fee + FX friction (euro-equivalent band): ${formatBankingCostRange(r.headlineReceivedEurLow, r.headlineReceivedEurHigh)}`,
    "",
    "Three paths (model bands):",
    ...r.channels.map(
      (c) =>
        `- ${c.label}: total ${formatBankingCostRange(c.totalCostEurLow, c.totalCostEurHigh)}; FX part ${formatBankingCostRange(c.fxCostEurLow, c.fxCostEurHigh)}`,
    ),
    "",
    "Suggested setup:",
    r.recommendedSetup.title,
    r.recommendedSetup.body,
    "",
    "Alternative:",
    r.alternativeSetup.title,
    r.alternativeSetup.body,
    "",
    "Planning only — not live rates or live prices. Confirm on each official site.",
  ];
  return lines.join("\n");
}

/** Always wait 1–2 seconds so the loading state is visible before results (estimate is instant). */
const RESULTS_PREP_MIN_MS = 1000;
const RESULTS_PREP_MAX_MS = 2000;

export function TransferCostCalculatorToolClient({ shareUrl }: { shareUrl: string }) {
  const [input, setInput] = useState<TransferCostCalculatorInput>(() => defaultTransferCostCalculatorInput());
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

  const result = useMemo(() => computeTransferCostEstimate(input), [input]);
  const warnings = useMemo(() => buildTransferCostHiddenWarnings(input), [input]);

  const patch = useCallback(<K extends keyof TransferCostCalculatorInput>(key: K, value: TransferCostCalculatorInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  const scrollToToolTop = useCallback(() => {
    requestAnimationFrame(() => {
      document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const reset = useCallback(() => {
    clearResultsTimeout();
    setInput(defaultTransferCostCalculatorInput());
    setStep(1);
    setPhase("form");
    setCopyDone(false);
    scrollToToolTop();
  }, [clearResultsTimeout, scrollToToolTop]);

  const copySummary = useCallback(async () => {
    const text = buildSummaryMarkdown(input, shareUrl);
    try {
      await navigator.clipboard.writeText(text);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      setCopyDone(false);
    }
  }, [input, shareUrl]);

  const goResults = useCallback(() => {
    const blockers = getTransferCostCalculatorBlockers(input);
    if (blockers.length) {
      setStep(1);
      return;
    }
    clearResultsTimeout();
    setPhase("computing");
    const delayMs = RESULTS_PREP_MIN_MS + Math.floor(Math.random() * (RESULTS_PREP_MAX_MS - RESULTS_PREP_MIN_MS + 1));
    resultsTimeoutRef.current = setTimeout(() => {
      resultsTimeoutRef.current = null;
      setPhase("results");
      requestAnimationFrame(() => {
        document.getElementById("transfer-cost-calculator-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, delayMs);
  }, [clearResultsTimeout, input]);

  const editAnswers = useCallback(() => {
    setStep(1);
    setPhase("form");
    scrollToToolTop();
  }, [scrollToToolTop]);

  const progressPct = phase === "results" ? 100 : Math.round((step / TOTAL_STEPS) * 100);
  const progressText =
    phase === "results" ? "All steps done — your rough result is below" : `Step ${step} of ${TOTAL_STEPS} — ${progressPct}%`;

  return (
    <div id="tool-inputs" className="scroll-mt-28 space-y-6 md:space-y-8">
      <div className={cn(BANK_TOOL_CARD, "sticky top-16 z-10 space-y-3 border-copilot-primary/15 shadow-expatos-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 md:top-20")}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className={BANK_TOOL_LABEL} id="tcc-progress-label">
              {phase === "results" ? "Questionnaire" : "Progress"}
            </p>
            <p className="mt-1 text-xs font-normal text-copilot-text-secondary" aria-live="polite" aria-atomic="true">
              {progressText}
            </p>
            <ol className="mt-2 flex flex-wrap gap-1.5" aria-label={`Transfer cost questionnaire, ${TOTAL_STEPS} steps`}>
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

      <TransferCostWorkflowCta className="text-sm text-copilot-text-secondary" />

      {phase === "form" || phase === "computing" ? (
        <TransferCostForm
          input={input}
          onInputChange={patch}
          step={step}
          onStepChange={setStep}
          onReset={reset}
          onSeeResults={goResults}
          onSkipToResults={goResults}
          isResultsLoading={phase === "computing"}
        />
      ) : null}

      {phase === "results" ? (
        <TransferCostResults
          result={result}
          input={input}
          warnings={warnings}
          onEditAnswers={editAnswers}
          onReset={reset}
          onCopySummary={copySummary}
          copyDone={copyDone}
          shareUrl={shareUrl}
        />
      ) : null}
    </div>
  );
}
