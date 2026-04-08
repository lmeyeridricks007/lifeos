"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { InfoBox } from "@/components/ui/info-box";
import { trackChildcareEstimator } from "@/lib/analytics/track";
import { calculateChildcareEstimate } from "@/src/lib/tools/childcare/childcareEngine";
import { buildChildcareScenarioComparison } from "@/src/lib/tools/childcare/childcareScenarios";
import {
  childcareInputToSearchParams,
  getDefaultChildcareInput,
  hasChildcareUrlParams,
  loadChildcareFromStorage,
  parseChildcareSearchParams,
  saveChildcareToStorage,
} from "@/src/lib/tools/childcare/childcareShareState";
import { sanitizeChildcareInput } from "@/src/lib/tools/childcare/childcareValidation";
import type { ChildcareEstimatorInput } from "@/src/types/tools/childcare";
import { ChildcareEstimatorForm } from "@/src/components/tools/childcare/ChildcareEstimatorForm";
import { ChildcareEstimatorResults } from "@/src/components/tools/childcare/ChildcareEstimatorResults";
import { ChildcareScenarioComparison } from "@/src/components/tools/childcare/ChildcareScenarioComparison";
import { ChildcareExportCard } from "@/src/components/tools/childcare/ChildcareExportCard";
import { ChildcareWorkedExamples } from "@/src/components/tools/childcare/ChildcareWorkedExamples";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";

export function ChildcareEstimatorClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<ChildcareEstimatorInput>(() => getDefaultChildcareInput());
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<ChildcareEstimatorInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const skipNextUrlWrite = useRef(true);
  const initialized = useRef(false);
  const startedLogged = useRef(false);
  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  const setInputSafe = useCallback((next: ChildcareEstimatorInput) => {
    setInput(sanitizeChildcareInput(next));
  }, []);

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => {
    return () => {
      cancelCalcRunRef.current?.();
    };
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const sp = typeof window !== "undefined" ? window.location.search : "";
    let merged = getDefaultChildcareInput();
    if (hasChildcareUrlParams(sp)) {
      const fromUrl = parseChildcareSearchParams(sp);
      if (fromUrl) merged = fromUrl;
    } else {
      const stored = loadChildcareFromStorage();
      if (stored) merged = stored;
    }
    setInput(merged);
    setHydrated(true);
    skipNextUrlWrite.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated || startedLogged.current) return;
    startedLogged.current = true;
    trackChildcareEstimator("calculator_started");
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveChildcareToStorage(input);
    if (skipNextUrlWrite.current) {
      skipNextUrlWrite.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      const p = childcareInputToSearchParams(input);
      const qs = p.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(
    () => (lastRunInput ? calculateChildcareEstimate(lastRunInput) : null),
    [lastRunInput]
  );
  const scenarios = useMemo(
    () => (lastRunInput ? buildChildcareScenarioComparison(lastRunInput) : []),
    [lastRunInput]
  );

  const inputKey = useMemo(() => childcareInputToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? childcareInputToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;
  const showResultsPanel = Boolean(hasRun && lastRunInput && result && !isCalculating);

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;

    setIsCalculating(true);
    setProgressPct(0);
    document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });

    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);
      const snap = sanitizeChildcareInput({ ...latestInputRef.current });
      setLastRunInput(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      trackChildcareEstimator("calculator_completed");
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  return (
    <div className="space-y-10">
      <ChildcareEstimatorForm input={input} onChange={setInputSafe} />

      <div className="rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm md:p-5">
        <h3 className="text-base font-semibold text-copilot-text-primary">Run calculation</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong> — same pacing as
          our other calculators.
        </p>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Output is planning-only: modelled rates, caps, and income bands — not a Belastingdienst childcare benefit
          calculation.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" className="min-h-11 w-full sm:w-auto" disabled={isCalculating} onClick={handleCalculate}>
            {isCalculating ? "Calculating…" : hasRun ? "Recalculate" : "Calculate"}
          </Button>
          <a
            href="#example-scenarios"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-copilot-primary/20 px-4 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/60"
          >
            Worked examples
          </a>
        </div>
        {hasRun && !isCalculating ? (
          <p className="mt-3 text-xs text-copilot-text-secondary">Showing your last calculated estimate.</p>
        ) : null}
      </div>

      <section id="tool-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading message="Estimating provider bills, benefit bands, net cost, and first-month cash…" />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/10" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {!isCalculating && !hasRun ? (
          <InfoBox title="Results will appear here" variant="info">
            <p className="text-sm text-slate-700">
              Set your household, children, and care assumptions above, then click <strong>Calculate</strong> for monthly gross,
              estimated benefit, net out-of-pocket, per-child detail, scenario comparison, and export.
            </p>
          </InfoBox>
        ) : null}

        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed since your last result" variant="info">
            The sections below reflect your previous run. Click <strong>Recalculate</strong> to refresh.
          </InfoBox>
        ) : null}

        {showResultsPanel && result && lastRunInput ? (
          <>
            <ChildcareEstimatorResults result={result} taxYear={lastRunInput.taxYear} />
            <ChildcareScenarioComparison rows={scenarios} />
            <ChildcareExportCard input={lastRunInput} result={result} scenarios={scenarios} />
          </>
        ) : null}
      </section>

      <div id="example-scenarios" className="scroll-mt-28 md:scroll-mt-32">
        <CollapsiblePanel
          title="Worked examples / example families"
          defaultOpen
          titleClassName="text-base font-semibold text-copilot-text-primary"
          triggerClassName="cursor-pointer rounded-t-xl bg-copilot-bg-soft/90 text-copilot-text-secondary hover:bg-copilot-bg-soft hover:text-copilot-text-primary"
          className="border-copilot-primary/12 bg-copilot-surface/50"
        >
          <div className="p-4 pt-0 md:p-5 md:pt-0">
            <ChildcareWorkedExamples onApply={setInputSafe} />
          </div>
        </CollapsiblePanel>
      </div>
    </div>
  );
}
