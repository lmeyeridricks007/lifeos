"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InfoBox } from "@/components/ui/info-box";
import {
  calculateThirtyPercentRuling,
  grossAnnualFromInputs,
} from "@/src/lib/tools/thirty-percent-ruling/calculateThirtyPercentRuling";
import type { ThirtyPercentCalculatorInputs, ThirtyRulingScenario } from "@/src/lib/tools/thirty-percent-ruling/types";
import { evaluateAllScenarios, type ScenarioEvaluation } from "@/src/lib/tools/thirty-percent-ruling/scenarios";
import { mergeThirtyPercentInputs, THIRTY_PERCENT_DEFAULT_INPUTS } from "@/src/lib/tools/thirty-percent-ruling/defaultInputs";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { MAX_SCENARIOS, ScenarioComparePanel } from "./panels/ScenarioComparePanel";
import { ThirtyRulingEligibilityForm } from "./ThirtyRulingEligibilityForm";
import { ThirtyRulingResultsStack } from "./ThirtyRulingResultsStack";

const STORAGE_KEY = "expatcopilot-30ruling-v3";

function newScenarioId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `sc-${Date.now()}`;
}

function makeScenario(label: string, inputs: ThirtyPercentCalculatorInputs): ThirtyRulingScenario {
  return { id: newScenarioId(), label, inputs: { ...mergeThirtyPercentInputs(inputs) } };
}

function scenariosInputsKey(sc: ThirtyRulingScenario[]): string {
  return JSON.stringify(sc.map((s) => ({ id: s.id, inputs: s.inputs })));
}

type PersistedV3 = {
  scenarios: ThirtyRulingScenario[];
  compareMode: boolean;
  activeIdx: number;
  showAdvanced: boolean;
};

function normalizeLoadedScenario(s: ThirtyRulingScenario): ThirtyRulingScenario {
  return {
    ...s,
    inputs: mergeThirtyPercentInputs(s.inputs as Partial<ThirtyPercentCalculatorInputs>),
  };
}

export function ThirtyPercentRulingCalculatorClient() {
  const [scenarios, setScenarios] = useState<ThirtyRulingScenario[]>(() => [
    makeScenario("Primary", THIRTY_PERCENT_DEFAULT_INPUTS),
  ]);
  const [compareMode, setCompareMode] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [hasFinishedRun, setHasFinishedRun] = useState(false);
  const [displayedResult, setDisplayedResult] = useState<ReturnType<typeof calculateThirtyPercentRuling>>(null);
  const [displayedEvaluations, setDisplayedEvaluations] = useState<ScenarioEvaluation[]>([]);
  const [snapshotInputs, setSnapshotInputs] = useState<ThirtyPercentCalculatorInputs>(THIRTY_PERCENT_DEFAULT_INPUTS);
  const [lastCalculateKey, setLastCalculateKey] = useState("");

  const latestRef = useRef({ scenarios: [] as ThirtyRulingScenario[], safeIdx: 0 });
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    try {
      const rawV3 = localStorage.getItem(STORAGE_KEY);
      const rawV2 = localStorage.getItem("expatcopilot-30ruling-v2");
      const raw = rawV3 || rawV2;
      if (raw) {
        const p = JSON.parse(raw) as PersistedV3;
        if (p.scenarios?.length && p.scenarios.length <= MAX_SCENARIOS) {
          setScenarios(p.scenarios.map(normalizeLoadedScenario));
          setCompareMode(Boolean(p.compareMode));
          setActiveIdx(Math.min(Math.max(0, p.activeIdx ?? 0), p.scenarios.length - 1));
          setShowAdvanced(Boolean(p.showAdvanced));
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const p: PersistedV3 = { scenarios, compareMode, activeIdx, showAdvanced };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch {
      /* ignore */
    }
  }, [scenarios, compareMode, activeIdx, showAdvanced, hydrated]);

  const safeIdx = Math.min(activeIdx, Math.max(0, scenarios.length - 1));
  const inputs = scenarios[safeIdx]?.inputs ?? THIRTY_PERCENT_DEFAULT_INPUTS;

  useEffect(() => {
    latestRef.current = { scenarios, safeIdx };
  }, [scenarios, safeIdx]);

  useEffect(() => {
    return () => {
      cancelCalcRunRef.current?.();
      cancelCalcRunRef.current = null;
    };
  }, []);

  const patchActiveInputs = useCallback(
    (patch: Partial<ThirtyPercentCalculatorInputs>) => {
      setScenarios((prev) =>
        prev.map((s, i) =>
          i === safeIdx ? { ...s, inputs: mergeThirtyPercentInputs({ ...s.inputs, ...patch }) } : s
        )
      );
    },
    [safeIdx]
  );

  const evaluations: ScenarioEvaluation[] = useMemo(
    () => evaluateAllScenarios(scenarios),
    [scenarios]
  );

  const grossPreview = useMemo(() => grossAnnualFromInputs(inputs), [inputs]);

  const currentKey = useMemo(() => scenariosInputsKey(scenarios), [scenarios]);
  const resultsStale = hasFinishedRun && lastCalculateKey !== "" && currentKey !== lastCalculateKey;

  const onLabelChange = (i: number, label: string) => {
    setScenarios((prev) => prev.map((s, j) => (j === i ? { ...s, label } : s)));
  };

  const onDuplicate = (i: number) => {
    setScenarios((prev) => {
      if (prev.length >= MAX_SCENARIOS) return prev;
      const base = prev[i];
      const copy = makeScenario(`Copy of ${base.label}`, { ...base.inputs });
      const next = [...prev, copy];
      queueMicrotask(() => setActiveIdx(next.length - 1));
      return next;
    });
  };

  const onRemove = (i: number) => {
    setScenarios((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((_, j) => j !== i);
      setActiveIdx((idx) => Math.min(idx, next.length - 1));
      return next;
    });
  };

  const onAdd = () => {
    setScenarios((prev) => {
      if (prev.length >= MAX_SCENARIOS) return prev;
      const last = prev[prev.length - 1];
      const s = makeScenario(`Scenario ${prev.length + 1}`, {
        ...last.inputs,
        grossSalary: last.inputs.grossSalary + 10_000,
      });
      const next = [...prev, s];
      queueMicrotask(() => setActiveIdx(next.length - 1));
      return next;
    });
  };

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;

    setIsCalculating(true);
    setProgressPct(0);

    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);

      const { scenarios: sc, safeIdx: idx } = latestRef.current;
      const i = Math.min(Math.max(0, idx), Math.max(0, sc.length - 1));
      const ins = mergeThirtyPercentInputs(sc[i]?.inputs ?? THIRTY_PERCENT_DEFAULT_INPUTS);
      const nextEvals = evaluateAllScenarios(sc);
      const nextResult = calculateThirtyPercentRuling(ins);

      setDisplayedResult(nextResult);
      setDisplayedEvaluations(nextEvals);
      setSnapshotInputs({ ...ins });
      setLastCalculateKey(scenariosInputsKey(sc));
      setHasFinishedRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isCalculating]);

  const downloadPayload = useMemo(() => {
    if (!hasFinishedRun || resultsStale || !displayedResult) return null;
    return {
      generatedAtIso: new Date().toISOString(),
      siteName: "ExpatCopilot",
      primaryInputs: snapshotInputs,
      primaryResult: displayedResult,
      scenarioResults: displayedEvaluations.map((e) => ({ label: e.scenario.label, result: e.result })),
      eligibilityExportLines: {
        checklist: displayedResult.primaryEligibility.checklist,
        nextSteps: displayedResult.primaryEligibility.nextStepBullets,
      },
    };
  }, [hasFinishedRun, resultsStale, displayedResult, snapshotInputs, displayedEvaluations]);

  return (
    <div className="space-y-8">
      {compareMode ? (
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm">
          <ScenarioComparePanel
            evaluations={evaluations}
            activeIndex={safeIdx}
            resultsPending={!hasFinishedRun || resultsStale}
            onSelect={setActiveIdx}
            onLabelChange={onLabelChange}
            onDuplicate={onDuplicate}
            onRemove={onRemove}
            onAdd={onAdd}
            canAdd={scenarios.length < MAX_SCENARIOS}
          />
        </div>
      ) : (
        <p className="text-xs text-slate-500">
          Your inputs are saved in this browser. Enable scenario compare under Advanced to model multiple offers.
        </p>
      )}

      <ThirtyRulingEligibilityForm
        inputs={inputs}
        compareMode={compareMode}
        showAdvanced={showAdvanced}
        onToggleAdvanced={() => setShowAdvanced((s) => !s)}
        onCompareModeChange={setCompareMode}
        editingScenarioLabel={compareMode ? scenarios[safeIdx]?.label : undefined}
        patch={patchActiveInputs}
        grossPreview={grossPreview}
        onCalculate={handleCalculate}
        isCalculating={isCalculating}
      />

      {isCalculating ? (
        <div className="space-y-3">
          <ToolResultsLoading message="Checking eligibility and allowance…" />
          <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-slate-200" aria-hidden>
            <div
              className="h-full rounded-full bg-brand-600 transition-[width] duration-150 ease-linear"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      ) : null}

      {!isCalculating && !hasFinishedRun ? (
        <InfoBox title="Ready when you are" variant="info">
          <p className="text-sm text-slate-700">
            Complete the sections above, then click <strong>Check eligibility</strong> for a planning signal, checklist, allowance estimate,
            and optional indicative net comparison.
          </p>
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && resultsStale ? (
        <InfoBox title="Inputs changed" variant="info">
          <p className="text-sm text-slate-700">
            The results below reflect your <strong>last</strong> calculation. Click <strong>Check eligibility</strong> again to refresh.
          </p>
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && displayedResult ? (
        <ThirtyRulingResultsStack displayedResult={displayedResult} downloadPayload={downloadPayload} />
      ) : null}

      {!isCalculating && hasFinishedRun && !displayedResult ? (
        <InfoBox title="Enter a valid salary" variant="warn">
          Add a positive gross salary so we can run the norm check and allowance estimate.
        </InfoBox>
      ) : null}
    </div>
  );
}
