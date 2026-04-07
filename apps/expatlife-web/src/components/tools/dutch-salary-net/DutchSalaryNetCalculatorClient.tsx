"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { calculateDutchSalaryNet, previewGrossAnnualPackage } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { mergeSalaryNetInputs, SALARY_NET_DEFAULT_INPUTS } from "@/src/lib/tools/dutch-salary-net/defaultInputs";
import type { SalaryNetComputation, SalaryNetCalculatorInputs, SalaryScenario } from "@/src/lib/tools/dutch-salary-net/types";
import { SalaryCalculatorForm } from "./SalaryCalculatorForm";
import {
  SalaryCompareToolbar,
  SalaryComparisonTable,
  MAX_SALARY_SCENARIOS,
  type ScenarioSalaryEvaluation,
} from "./SalaryComparison";
import { SalaryResults } from "./SalaryResults";
import { SalarySummaryExport } from "./SalarySummaryExport";
import { SalaryToolTrustBanner } from "./SalaryToolTrustBanner";
import type { SalaryOptimizeGuidanceProps } from "./SalaryOptimizeGuidance";

const LazySalaryOptimizeGuidance = dynamic(
  () => import("./SalaryOptimizeGuidance").then((m) => ({ default: m.SalaryOptimizeGuidance })),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[12rem] w-full rounded-2xl bg-slate-100/60 motion-reduce:animate-none"
        aria-hidden
      />
    ),
  }
);

type DutchSalaryNetCalculatorClientProps = {
  /** Post-results monetization (server-fetched cards). Omit to hide the strip. */
  monetization?: SalaryOptimizeGuidanceProps;
  /** Absolute URL for export / print “back to calculator” link. */
  calculatorCanonicalUrl: string;
};

const STORAGE_KEY = "expatcopilot-salary-net-v1";

function newScenarioId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `sal-${Date.now()}`;
}

function makeScenario(label: string, inputs: SalaryNetCalculatorInputs): SalaryScenario {
  return { id: newScenarioId(), label, inputs: mergeSalaryNetInputs(inputs) };
}

function normalizeScenario(s: SalaryScenario): SalaryScenario {
  return { ...s, inputs: mergeSalaryNetInputs(s.inputs) };
}

function scenariosInputsKey(sc: SalaryScenario[]): string {
  return JSON.stringify(sc.map((s) => ({ id: s.id, inputs: s.inputs })));
}

type Persisted = {
  scenarios: SalaryScenario[];
  compareMode: boolean;
  activeIdx: number;
};

export function DutchSalaryNetCalculatorClient({ monetization, calculatorCanonicalUrl }: DutchSalaryNetCalculatorClientProps) {
  const [scenarios, setScenarios] = useState<SalaryScenario[]>(() => [makeScenario("Primary", SALARY_NET_DEFAULT_INPUTS)]);
  const [compareMode, setCompareMode] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [hasFinishedRun, setHasFinishedRun] = useState(false);
  const [displayedPrimaryResult, setDisplayedPrimaryResult] = useState<SalaryNetComputation | null>(null);
  const [displayedEvaluations, setDisplayedEvaluations] = useState<ScenarioSalaryEvaluation[]>([]);
  const [displayedPrimaryLabel, setDisplayedPrimaryLabel] = useState("Primary");
  const [lastCalculateKey, setLastCalculateKey] = useState("");

  const latestRef = useRef({ scenarios: [] as SalaryScenario[], safeIdx: 0 });
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as Persisted;
        if (p.scenarios?.length && p.scenarios.length <= MAX_SALARY_SCENARIOS) {
          setScenarios(p.scenarios.map(normalizeScenario));
          setCompareMode(Boolean(p.compareMode));
          setActiveIdx(Math.min(Math.max(0, p.activeIdx ?? 0), p.scenarios.length - 1));
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const safeIdx = Math.min(activeIdx, Math.max(0, scenarios.length - 1));
  const inputs = scenarios[safeIdx]?.inputs ?? SALARY_NET_DEFAULT_INPUTS;
  const { salaryAmount, salaryInputBasis, bonusAnnual, includeHolidayAllowance } = inputs;

  useEffect(() => {
    if (!hydrated) return;
    const p: Persisted = { scenarios, compareMode, activeIdx: safeIdx };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch {
      /* ignore */
    }
  }, [scenarios, compareMode, safeIdx, hydrated]);

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
    (patch: Partial<SalaryNetCalculatorInputs>) => {
      setScenarios((prev) =>
        prev.map((s, i) => (i === safeIdx ? { ...s, inputs: mergeSalaryNetInputs({ ...s.inputs, ...patch }) } : s))
      );
    },
    [safeIdx]
  );

  const grossPreviewAnnual = useMemo(
    () =>
      previewGrossAnnualPackage(
        mergeSalaryNetInputs({
          ...SALARY_NET_DEFAULT_INPUTS,
          salaryAmount,
          salaryInputBasis,
          bonusAnnual,
          includeHolidayAllowance,
        })
      ),
    [salaryAmount, salaryInputBasis, bonusAnnual, includeHolidayAllowance]
  );

  const evaluations: ScenarioSalaryEvaluation[] = useMemo(
    () =>
      scenarios.map((s) => ({
        scenario: s,
        result: calculateDutchSalaryNet(s.inputs),
      })),
    [scenarios]
  );

  const currentKey = useMemo(() => scenariosInputsKey(scenarios), [scenarios]);
  const resultsStale = hasFinishedRun && lastCalculateKey !== "" && currentKey !== lastCalculateKey;
  const resultsPending = !hasFinishedRun || resultsStale;
  /** No net/tax or contract-gross summaries until a successful Calculate for the current inputs (not while the timer is running). */
  const releaseOutputPreview = hasFinishedRun && !resultsStale && !isCalculating;

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
      const nextEvals: ScenarioSalaryEvaluation[] = sc.map((s) => ({
        scenario: s,
        result: calculateDutchSalaryNet(s.inputs),
      }));
      const primary = nextEvals[i]?.result ?? null;

      setDisplayedEvaluations(nextEvals);
      setDisplayedPrimaryResult(primary);
      setDisplayedPrimaryLabel(sc[i]?.label ?? "Primary");
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

  const onLabelChange = useCallback((i: number, label: string) => {
    setScenarios((prev) => prev.map((s, j) => (j === i ? { ...s, label } : s)));
  }, []);

  const onDuplicate = useCallback((i: number) => {
    setScenarios((prev) => {
      if (prev.length >= MAX_SALARY_SCENARIOS) return prev;
      const base = prev[i];
      const copy = makeScenario(`Copy of ${base.label}`, { ...base.inputs });
      const next = [...prev, copy];
      queueMicrotask(() => setActiveIdx(next.length - 1));
      return next;
    });
  }, []);

  const onRemove = useCallback((i: number) => {
    setScenarios((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((_, j) => j !== i);
      setActiveIdx((idx) => Math.min(idx, next.length - 1));
      return next;
    });
  }, []);

  const onAdd = useCallback(() => {
    setScenarios((prev) => {
      if (prev.length >= MAX_SALARY_SCENARIOS) return prev;
      const last = prev[prev.length - 1];
      const s = makeScenario(`Scenario ${prev.length + 1}`, {
        ...last.inputs,
        salaryAmount: last.inputs.salaryAmount + 5_000,
      });
      const next = [...prev, s];
      queueMicrotask(() => setActiveIdx(next.length - 1));
      return next;
    });
  }, []);

  return (
    <div className="space-y-10">
      <SalaryToolTrustBanner
        releaseOutputPreview={releaseOutputPreview}
        grossPreviewAnnual={grossPreviewAnnual}
        editingScenarioLabel={compareMode ? scenarios[safeIdx]?.label : undefined}
      />

      {compareMode ? (
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm">
          <SalaryCompareToolbar
            evaluations={evaluations}
            activeIndex={safeIdx}
            resultsPending={resultsPending}
            onSelect={setActiveIdx}
            onLabelChange={onLabelChange}
            onDuplicate={onDuplicate}
            onRemove={onRemove}
            onAdd={onAdd}
            canAdd={scenarios.length < MAX_SALARY_SCENARIOS}
          />
        </div>
      ) : (
        <p className="text-xs text-slate-500">
          Inputs are saved in this browser. Enable <strong>Compare up to 4 salary scenarios</strong> to line up offers side by side.
        </p>
      )}

      <SalaryCalculatorForm
        inputs={inputs}
        patch={patchActiveInputs}
        compareMode={compareMode}
        onCompareModeChange={setCompareMode}
        grossPreviewAnnual={grossPreviewAnnual}
        onCalculate={handleCalculate}
        isCalculating={isCalculating}
        releaseOutputPreview={releaseOutputPreview}
      />

      {isCalculating ? (
        <div className="space-y-3">
          <ToolResultsLoading message="Estimating net salary and taxable income…" />
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
            Enter your gross package and profile options above, then click <strong>Calculate</strong> for indicative net pay, taxable income, and
            optional scenario comparison.
          </p>
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && resultsStale ? (
        <InfoBox title="Inputs changed" variant="info">
          <p className="text-sm text-slate-700">
            The results below reflect your <strong>last</strong> calculation. Click <strong>Calculate</strong> again to refresh.
          </p>
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && !resultsStale && displayedPrimaryResult ? (
        <SalaryResults result={displayedPrimaryResult} />
      ) : null}

      {!isCalculating && hasFinishedRun && !resultsStale && !displayedPrimaryResult ? (
        <InfoBox title="Add a gross salary" variant="warn">
          <p className="text-sm text-slate-700">Enter a positive annual or monthly gross so we can estimate taxable income and net pay.</p>
        </InfoBox>
      ) : null}

      {compareMode && hasFinishedRun && !resultsStale && displayedEvaluations.length > 1 ? (
        <div id="comparison" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
          <h2 className="text-lg font-semibold text-slate-900">Compare scenarios</h2>
          <p className="text-sm text-slate-600">First scenario is the baseline for monthly deltas in the table and cards.</p>
          <SalaryComparisonTable evaluations={displayedEvaluations} />
        </div>
      ) : null}

      {hasFinishedRun && displayedPrimaryResult && !resultsStale ? (
        <SalarySummaryExport
          primaryLabel={displayedPrimaryLabel}
          primary={displayedPrimaryResult}
          evaluations={displayedEvaluations}
          calculatorCanonicalUrl={calculatorCanonicalUrl}
        />
      ) : null}

      {hasFinishedRun && displayedPrimaryResult && !resultsStale && monetization ? (
        <LazySalaryOptimizeGuidance {...monetization} />
      ) : null}
    </div>
  );
}
