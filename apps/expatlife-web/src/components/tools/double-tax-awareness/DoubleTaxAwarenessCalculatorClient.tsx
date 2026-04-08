"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { calculateDoubleTaxAwareness } from "@/src/lib/tools/double-tax-awareness/engine";
import { THIRTY_RULING_ADVISORY } from "@/src/lib/tools/double-tax-awareness/explanations";
import { DOUBLE_TAX_SCENARIO_PRESETS } from "@/src/lib/tools/double-tax-awareness/scenarioPresets";
import { buildScenarioCompareRows } from "@/src/lib/tools/double-tax-awareness/scenarioCompare";
import { downloadDoubleTaxAwarenessHtml, openPrintDoubleTaxAwarenessSummary } from "@/src/lib/tools/double-tax-awareness/exportHtml";
import {
  doubleTaxInputToSearchParams,
  hasDoubleTaxUrlParams,
  loadDoubleTaxFromStorage,
  parseDoubleTaxSearchParams,
  sanitizeDoubleTaxInput,
  saveDoubleTaxToStorage,
} from "@/src/lib/tools/double-tax-awareness/urlState";
import { DEFAULT_DOUBLE_TAX_AWARENESS_INPUT } from "@/src/lib/tools/double-tax-awareness/types";
import type { DoubleTaxAwarenessInput, IncomeType, YesNo, YesNoNotSure } from "@/src/lib/tools/double-tax-awareness/types";
import { COUNTRY_OPTIONS, INCOME_TYPE_OPTIONS, TOOL_MODE_OPTIONS } from "@/src/content/tools/double-tax-awareness/content";
import { DoubleTaxAwarenessResultsPanel } from "./DoubleTaxAwarenessResultsPanel";
import { DoubleTaxAwarenessTip } from "./DoubleTaxAwarenessTip";

const FIELD_LABEL_CLASS = "text-sm font-semibold text-copilot-text-primary";

function SectionCard({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:scroll-mt-32 md:p-5"
    >
      <h3 className="text-xs font-semibold uppercase tracking-wide text-copilot-primary">{title}</h3>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function DoubleTaxAwarenessCalculatorClient({ calculatorCanonicalUrl }: { calculatorCanonicalUrl: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<DoubleTaxAwarenessInput>(DEFAULT_DOUBLE_TAX_AWARENESS_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<DoubleTaxAwarenessInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [exportNotes, setExportNotes] = useState("");
  const [firstRunHintDismissed, setFirstRunHintDismissed] = useState(false);

  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => {
    return () => {
      cancelCalcRunRef.current?.();
    };
  }, []);

  useEffect(() => {
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let next = sanitizeDoubleTaxInput(DEFAULT_DOUBLE_TAX_AWARENESS_INPUT);
    if (hasDoubleTaxUrlParams(sp)) {
      next = sanitizeDoubleTaxInput({ ...next, ...parseDoubleTaxSearchParams(sp) });
    } else {
      const stored = loadDoubleTaxFromStorage();
      if (stored) next = sanitizeDoubleTaxInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveDoubleTaxToStorage(input);
    const t = window.setTimeout(() => {
      const params = doubleTaxInputToSearchParams(input);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const liveResult = useMemo(() => (lastRunInput ? calculateDoubleTaxAwareness(lastRunInput) : null), [lastRunInput]);
  const scenarioRows = useMemo(() => (lastRunInput ? buildScenarioCompareRows(lastRunInput) : []), [lastRunInput]);
  const showResultsPanel = Boolean(hasRun && lastRunInput && !isCalculating);
  const monthsSumInvalid = input.monthsInNetherlands + input.monthsInOtherMainCountry > 12;
  const scenarioPreviews = useMemo(
    () =>
      DOUBLE_TAX_SCENARIO_PRESETS.map((preset) => ({
        ...preset,
        preview: calculateDoubleTaxAwareness(preset.input),
      })),
    []
  );
  const inputKey = useMemo(() => doubleTaxInputToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(() => (lastRunInput ? doubleTaxInputToSearchParams(lastRunInput).toString() : ""), [lastRunInput]);
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<DoubleTaxAwarenessInput>) => {
    setInput((prev) => sanitizeDoubleTaxInput({ ...prev, ...next }));
  }, []);

  const toggleIncomeType = useCallback((incomeType: IncomeType) => {
    setInput((prev) => {
      const has = prev.incomeTypes.includes(incomeType);
      const next = has ? prev.incomeTypes.filter((item) => item !== incomeType) : [...prev.incomeTypes, incomeType];
      return sanitizeDoubleTaxInput({ ...prev, incomeTypes: next });
    });
  }, []);

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

      const snap = sanitizeDoubleTaxInput({ ...latestInputRef.current });
      setLastRunInput(snap);
      setHasRun(true);
      setFirstRunHintDismissed(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  const copyShareLink = useCallback(async () => {
    const params = doubleTaxInputToSearchParams(input).toString();
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}?${params}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied — paste to share this scenario.");
    } catch {
      setShareMessage("Could not copy automatically. Use your browser URL.");
    }
    window.setTimeout(() => setShareMessage(null), 3000);
  }, [input, pathname]);

  const resetDefaults = useCallback(() => {
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;
    setIsCalculating(false);
    setProgressPct(0);
    setInput(DEFAULT_DOUBLE_TAX_AWARENESS_INPUT);
    setHasRun(false);
    setLastRunInput(null);
    setExportNotes("");
    setFirstRunHintDismissed(false);
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const downloadHtml = useCallback(() => {
    if (!liveResult || !lastRunInput) return;
    downloadDoubleTaxAwarenessHtml({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning view only. This tool is not legal or tax advice and does not determine residency conclusively. Verify with official sources and a qualified advisor.",
      input: lastRunInput,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRunInput, liveResult]);

  const printSummary = useCallback(() => {
    if (!liveResult || !lastRunInput) return;
    openPrintDoubleTaxAwarenessSummary({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning view only. This tool is not legal or tax advice and does not determine residency conclusively. Verify with official sources and a qualified advisor.",
      input: lastRunInput,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRunInput, liveResult]);

  if (!hydrated) {
    return <p className="text-sm text-copilot-text-secondary">Loading tool state…</p>;
  }

  return (
    <div className="space-y-8">
      {!hasRun && !firstRunHintDismissed ? (
        <InfoBox title="Start with a planning view, then verify facts" variant="info">
          <p className="text-sm text-slate-700">
            This is an awareness-first tool, not a tax calculator and not legal advice. First run a baseline scenario, then refine with payroll, foreign withholding, and day-count details.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              className="min-h-10 border-copilot-primary/20"
              onClick={() => patch(DOUBLE_TAX_SCENARIO_PRESETS[0].input)}
            >
              Load starter scenario
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="min-h-10"
              onClick={() => setFirstRunHintDismissed(true)}
            >
              Dismiss
            </Button>
          </div>
        </InfoBox>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={copyShareLink}>
          Copy share link
        </Button>
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={resetDefaults}>
          Reset defaults
        </Button>
        {shareMessage ? (
          <p className="text-sm text-copilot-text-secondary" role="status">
            {shareMessage}
          </p>
        ) : null}
      </div>

      <div id="tool-inputs" className="scroll-mt-28 space-y-5 md:scroll-mt-32">
        <SectionCard title="A. Tool mode / primary scenario">
          <div>
            <p className={FIELD_LABEL_CLASS}>Scenario</p>
            <SegmentedControl
              name="double-tax-tool-mode"
              className="mt-2"
              pillTone="copilot"
              value={input.toolMode}
              onChange={(value) => patch({ toolMode: value as DoubleTaxAwarenessInput["toolMode"] })}
              options={TOOL_MODE_OPTIONS.map((option) => ({ value: option.value, label: option.label }))}
            />
          </div>
        </SectionCard>

        <SectionCard title="B. Residency signals">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="tax-year" className={FIELD_LABEL_CLASS}>
                Tax year
              </label>
              <Input
                id="tax-year"
                type="number"
                min={2026}
                max={2100}
                value={input.taxYear}
                onChange={(event) => patch({ taxYear: Number(event.target.value) || 2026 })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <div>
              <label htmlFor="months-nl" className={FIELD_LABEL_CLASS}>
                Months in Netherlands
              </label>
              <Input
                id="months-nl"
                type="number"
                min={0}
                max={12}
                value={input.monthsInNetherlands}
                onChange={(event) => patch({ monthsInNetherlands: Number(event.target.value) || 0 })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <div>
              <label htmlFor="months-other" className={FIELD_LABEL_CLASS}>
                Months in other main country
              </label>
              <Input
                id="months-other"
                type="number"
                min={0}
                max={12}
                value={input.monthsInOtherMainCountry}
                onChange={(event) => patch({ monthsInOtherMainCountry: Number(event.target.value) || 0 })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <BooleanSelect
              label={
                <span className="inline-flex items-center gap-1">
                  Registered in the Netherlands (BRP)?
                  <DoubleTaxAwarenessTip
                    label="Tax residency signal"
                    text="Tax residency is determined from facts and ties over the year. BRP registration is a strong practical signal, but not a legal conclusion by itself."
                  />
                </span>
              }
              value={input.registeredInNlBrp}
              onChange={(value) => patch({ registeredInNlBrp: value })}
            />
            <BooleanSelect label="Permanent home available in NL?" value={input.permanentHomeNl} onChange={(value) => patch({ permanentHomeNl: value })} />
            <BooleanSelect label="Permanent home available abroad?" value={input.permanentHomeAbroad} onChange={(value) => patch({ permanentHomeAbroad: value })} />
            <BooleanSelect label="Partner / family mainly in NL?" value={input.familyMostlyInNl} onChange={(value) => patch({ familyMostlyInNl: value })} />
            <TriSelect
              label="Main work physically performed in NL?"
              value={input.mainWorkPhysicallyInNl}
              options={[
                { value: "yes", label: "Yes" },
                { value: "partly", label: "Partly" },
                { value: "no", label: "No" },
              ]}
              onChange={(value) => patch({ mainWorkPhysicallyInNl: value as DoubleTaxAwarenessInput["mainWorkPhysicallyInNl"] })}
            />
            <BooleanSelect label="Employer in NL?" value={input.employerInNl} onChange={(value) => patch({ employerInNl: value })} />
            <BooleanSelect label="Payroll in NL?" value={input.payrollInNl} onChange={(value) => patch({ payrollInNl: value })} />
            <BooleanSelect
              label="Planning to stay in NL more than 1 year?"
              value={input.planningToStayLongerThanYear}
              onChange={(value) => patch({ planningToStayLongerThanYear: value })}
            />
          </div>
          {monthsSumInvalid ? (
            <InfoBox title="Check your month totals" variant="info">
              <p className="text-sm text-slate-700">
                Months in the Netherlands plus months in your other main country add up to more than 12. That can happen if you mean overlapping stretches — adjust so the tool can read your pattern clearly.
              </p>
            </InfoBox>
          ) : null}
        </SectionCard>

        <SectionCard title="C. Countries involved">
          <p className="text-xs text-copilot-text-secondary">
            Use countries as a planning marker for foreign-source income routes. Treaty outcomes may differ by country and your specific facts.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <CountrySelect label="Main origin / other country" value={input.mainOtherCountryCode} onChange={(value) => patch({ mainOtherCountryCode: value })} />
            <CountrySelect label="Employer country" value={input.employerCountryCode} onChange={(value) => patch({ employerCountryCode: value })} />
            <CountrySelect
              label="Property / rental income country (if any)"
              value={input.rentalIncomeCountryCode}
              onChange={(value) => patch({ rentalIncomeCountryCode: value })}
            />
            <CountrySelect
              label="Investment income country (if any)"
              value={input.investmentIncomeCountryCode}
              onChange={(value) => patch({ investmentIncomeCountryCode: value })}
            />
          </div>
        </SectionCard>

        <SectionCard title="D. Income types">
          <p className="text-xs text-copilot-text-secondary">
            Include all material income types.{" "}
            <strong className="text-copilot-text-primary">
              Foreign-source income
              <DoubleTaxAwarenessTip
                label="Foreign-source income"
                text="Foreign-source income usually means income connected to another country (property, employer, payer, or asset location). It can still be relevant in Dutch filing when you are likely Dutch resident."
              />
            </strong>{" "}
            can still require Dutch declaration when you are likely Dutch resident.
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {INCOME_TYPE_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-start gap-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/50 p-3 text-sm text-copilot-text-primary">
                <input type="checkbox" checked={input.incomeTypes.includes(option.value)} onChange={() => toggleIncomeType(option.value)} className="mt-1 h-4 w-4 rounded border-copilot-primary/30" />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="E. Work pattern details">
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField
              label="Where do you physically perform most work?"
              value={input.workLocationPattern}
              onChange={(value) => patch({ workLocationPattern: value as DoubleTaxAwarenessInput["workLocationPattern"] })}
              options={[
                { value: "mostly_nl", label: "Mostly Netherlands" },
                { value: "mostly_abroad", label: "Mostly abroad" },
                { value: "mixed", label: "Mixed" },
              ]}
            />
            <SelectField
              label="Commuting across borders regularly?"
              value={input.crossBorderCommutePattern}
              onChange={(value) => patch({ crossBorderCommutePattern: value as DoubleTaxAwarenessInput["crossBorderCommutePattern"] })}
              options={[
                { value: "none", label: "No" },
                { value: "mostly_from_nl", label: "Yes, mostly from NL" },
                { value: "mostly_into_nl", label: "Yes, mostly into NL" },
              ]}
            />
            <TriSelect
              label={
                <span className="inline-flex items-center gap-1">
                  Employer sponsoring / arranging international payroll?
                  <DoubleTaxAwarenessTip
                    label="Cross-border payroll"
                    text="Payroll setup matters because under-withholding can create filing corrections later. Foreign payroll does not automatically remove Dutch tax relevance for Dutch workdays."
                  />
                </span>
              }
              value={input.employerInternationalPayrollSupport}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "not_sure", label: "Not sure" },
              ]}
              onChange={(value) => patch({ employerInternationalPayrollSupport: value as YesNoNotSure })}
            />
          </div>
        </SectionCard>

        <SectionCard title="F. Dutch special regime / context">
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField
              label="30% ruling status"
              value={input.thirtyPercentRuling}
              onChange={(value) => patch({ thirtyPercentRuling: value as DoubleTaxAwarenessInput["thirtyPercentRuling"] })}
              options={[
                { value: "no", label: "No" },
                { value: "maybe", label: "Maybe" },
                { value: "yes", label: "Yes" },
              ]}
            />
            <BooleanSelect
              label="Student / researcher / PhD?"
              value={input.isStudentResearcherPhd}
              onChange={(value) => patch({ isStudentResearcherPhd: value })}
            />
            <BooleanSelect
              label="Director / shareholder / business owner?"
              value={input.isDirectorShareholderOwner}
              onChange={(value) => patch({ isDirectorShareholderOwner: value })}
            />
            <BooleanSelect
              label="Major foreign assets or accounts to declare?"
              value={input.hasMajorForeignAssets}
              onChange={(value) => patch({ hasMajorForeignAssets: value })}
            />
          </div>
          {input.thirtyPercentRuling !== "no" ? (
            <InfoBox title={THIRTY_RULING_ADVISORY.title} variant="info">
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                {THIRTY_RULING_ADVISORY.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </InfoBox>
          ) : null}
        </SectionCard>

        <details id="advanced-assumptions" className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32">
          <summary className="cursor-pointer text-sm font-semibold text-copilot-text-primary">G. Advanced / optional inputs</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="days-nl" className={FIELD_LABEL_CLASS}>
                Approximate days in NL
              </label>
              <Input
                id="days-nl"
                type="number"
                min={0}
                max={366}
                value={input.approxDaysInNl ?? ""}
                onChange={(event) => patch({ approxDaysInNl: event.target.value === "" ? null : Number(event.target.value) })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <div>
              <label htmlFor="days-other" className={FIELD_LABEL_CLASS}>
                Approximate days in other country
              </label>
              <Input
                id="days-other"
                type="number"
                min={0}
                max={366}
                value={input.approxDaysInOtherCountry ?? ""}
                onChange={(event) => patch({ approxDaysInOtherCountry: event.target.value === "" ? null : Number(event.target.value) })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <TriSelect
              label="Expect to file in another country this year?"
              value={input.expectsForeignReturn}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "not_sure", label: "Not sure" },
              ]}
              onChange={(value) => patch({ expectsForeignReturn: value as YesNoNotSure })}
            />
            <TriSelect
              label="Tax already withheld abroad?"
              value={input.taxWithheldAbroad}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "not_sure", label: "Not sure" },
              ]}
              onChange={(value) => patch({ taxWithheldAbroad: value as YesNoNotSure })}
            />
            <BooleanSelect
              label="Kept foreign tax documents?"
              value={input.keptForeignTaxDocuments}
              onChange={(value) => patch({ keptForeignTaxDocuments: value })}
            />
          </div>
          <p className="text-xs text-copilot-text-secondary">
            Why we ask: foreign filing expectations, withholding abroad, and document habits help separate payroll convenience from declaration scope — they do not determine treaty outcomes by themselves.
          </p>
        </details>

        <div className="rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm md:p-5">
          <h3 className="text-base font-semibold text-copilot-text-primary">Run calculation</h3>
          <p className="mt-2 text-sm text-copilot-text-secondary">
            Results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong>.
          </p>
          <p className="mt-2 text-sm text-copilot-text-secondary">
            This tool gives a deterministic planning view. It does not calculate exact tax due, does not determine legal residency conclusively, and does not replace qualified treaty analysis.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button type="button" className="min-h-11 w-full sm:w-auto" disabled={isCalculating} onClick={handleCalculate}>
              {isCalculating ? "Calculating…" : hasRun ? "Recalculate" : "Calculate"}
            </Button>
            <a
              href="#example-scenarios"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-copilot-primary/20 px-4 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/60"
            >
              View examples first
            </a>
          </div>
          {hasRun && !isCalculating ? (
            <p className="mt-3 text-xs text-copilot-text-secondary">Showing your last calculated planning view.</p>
          ) : null}
          <p className="mt-3 text-xs text-copilot-text-secondary">
            By using this output, you acknowledge it is planning guidance only and you should verify with official sources and, where needed, a qualified advisor.
          </p>
        </div>
      </div>

      <section id="tool-results" className="scroll-mt-28 space-y-5 md:scroll-mt-32">
        <h2 className="text-xl font-semibold text-copilot-text-primary">Results</h2>
        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading message="Mapping residency signals, income jurisdictions, and relief categories…" />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/10" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}
        {!isCalculating && !hasRun ? (
          <InfoBox title="Your planning summary will appear here" variant="info">
            <p className="text-sm text-slate-700">
              Finish the inputs that matter for you, then click <strong>Calculate</strong>. You will get a structured view: what matters most, whether double payment is the real risk, a plain-English summary, income-by-income map, relief direction, checklist, and export you can share with payroll or an advisor.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Jump to <a href="#start-here-summary" className="font-semibold text-copilot-primary hover:underline">Start here summary</a> after you run — that anchor tracks the top of your results.
            </p>
          </InfoBox>
        ) : null}
        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed since your last result" variant="info">
            Results below reflect your previous run. Click <strong>Recalculate</strong> to refresh.
          </InfoBox>
        ) : null}
        {showResultsPanel && liveResult && lastRunInput ? (
          <DoubleTaxAwarenessResultsPanel
            liveResult={liveResult}
            scenarioInput={lastRunInput}
            scenarioRows={scenarioRows}
            exportNotes={exportNotes}
            setExportNotes={setExportNotes}
            downloadHtml={downloadHtml}
            printSummary={printSummary}
            copyShareLink={copyShareLink}
            resetDefaults={resetDefaults}
            fieldLabelClass={FIELD_LABEL_CLASS}
          />
        ) : null}
      </section>

      <section id="example-scenarios" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
        <h3 className="text-lg font-semibold text-copilot-text-primary">Example scenarios</h3>
        <div className="space-y-3">
          {scenarioPreviews.map((preset) => (
            <details key={preset.id} className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4">
              <summary className="cursor-pointer text-sm font-semibold text-copilot-text-primary">{preset.title}</summary>
              <p className="mt-2 text-sm text-copilot-text-secondary">{preset.summary}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <p className="rounded-lg bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
                  <strong className="text-copilot-text-primary">Likely residency:</strong> {preset.preview.residencyAssessment.headline}
                </p>
                <p className="rounded-lg bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
                  <strong className="text-copilot-text-primary">Double-tax risk:</strong> {preset.preview.doubleTaxRiskLevel.toUpperCase()}
                </p>
                <p className="rounded-lg bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
                  <strong className="text-copilot-text-primary">Complexity:</strong> {preset.preview.filingComplexity}
                </p>
                <p className="rounded-lg bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
                  <strong className="text-copilot-text-primary">Next step:</strong> {preset.preview.likelyNextStep}
                </p>
              </div>
              <Button
                type="button"
                variant="secondary"
                className="mt-3 min-h-10 border-copilot-primary/20"
                onClick={() => patch(preset.input)}
              >
                Load this scenario
              </Button>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <select
        id={id}
        className="mt-1.5 min-h-11 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function CountrySelect({
  label,
  value,
  onChange,
}: {
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}) {
  return <SelectField label={label} value={value} onChange={onChange} options={[...COUNTRY_OPTIONS]} />;
}

function BooleanSelect({ label, value, onChange }: { label: React.ReactNode; value: YesNo; onChange: (value: YesNo) => void }) {
  return (
    <SelectField
      label={label}
      value={value}
      onChange={(next) => onChange(next as YesNo)}
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]}
    />
  );
}

function TriSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return <SelectField label={label} value={value} onChange={onChange} options={options} />;
}
