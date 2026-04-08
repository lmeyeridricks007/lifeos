"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CalendarClock, CheckCircle2, ClipboardList, Info, KeyRound, ListTodo, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import { trackUtilitiesServicesComparison } from "@/lib/analytics/track";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { estimateUtilitiesServices } from "@/src/lib/tools/utilities-services/estimate";
import { UTILITIES_SERVICES_DEFAULT_INPUT } from "@/src/lib/tools/utilities-services/defaultInput";
import {
  buildUtilitiesServicesExportHtml,
  downloadUtilitiesServicesHtml,
  openPrintUtilitiesServicesSummary,
  UTILITIES_SERVICES_EXPORT_DISCLAIMER,
} from "@/src/lib/tools/utilities-services/exportHtml";
import { formatUtilitiesEur } from "@/src/lib/tools/utilities-services/format";
import { buildUtilitiesScenarioComparisons } from "@/src/lib/tools/utilities-services/scenarios";
import {
  hasUtilitiesServicesUrlParams,
  loadUtilitiesServicesFromStorage,
  parseUtilitiesServicesSearchParams,
  sanitizeUtilitiesServicesInput,
  saveUtilitiesServicesToStorage,
  utilitiesInputToSearchParams,
} from "@/src/lib/tools/utilities-services/shareState";
import type { UsPlannerMode, UsServiceBreakdownLine, UsServiceClassification, UtilitiesServicesInput } from "@/src/lib/tools/utilities-services/types";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { UtilitiesServicesMethodology } from "./UtilitiesServicesMethodology";
import { UTILITIES_FIELD_TOOLTIPS } from "./utilitiesFieldTooltips";

const selectClass =
  "w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35";

const CITIES: { value: UtilitiesServicesInput["city"]; label: string }[] = [
  { value: "amsterdam", label: "Amsterdam" },
  { value: "rotterdam", label: "Rotterdam" },
  { value: "the-hague", label: "The Hague" },
  { value: "utrecht", label: "Utrecht" },
  { value: "eindhoven", label: "Eindhoven" },
  { value: "haarlem", label: "Haarlem" },
  { value: "leiden", label: "Leiden" },
  { value: "delft", label: "Delft" },
  { value: "groningen", label: "Groningen" },
  { value: "breda", label: "Breda" },
  { value: "tilburg", label: "Tilburg" },
  { value: "arnhem-nijmegen", label: "Arnhem / Nijmegen" },
  { value: "other", label: "Other Netherlands" },
];

function CompareBadge({ kind }: { kind: UsServiceClassification }) {
  const label =
    kind === "actively_compare"
      ? "Actively compare"
      : kind === "usually_local_fixed"
        ? "Usually local / fixed"
        : kind === "may_already_be_included"
          ? "May be included"
          : "Optional";
  const cls =
    kind === "actively_compare"
      ? "bg-emerald-50 text-emerald-900 ring-emerald-200"
      : kind === "usually_local_fixed"
        ? "bg-slate-100 text-slate-800 ring-slate-200"
        : kind === "may_already_be_included"
          ? "bg-amber-50 text-amber-950 ring-amber-200"
          : "bg-copilot-bg-soft text-copilot-text-primary ring-copilot-primary/15";
  return (
    <span className={cn("inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset", cls)}>{label}</span>
  );
}

function InfoTip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId().replace(/:/g, "");
  return (
    <span className="inline-flex max-w-full flex-col items-start gap-1">
      <button
        type="button"
        className="-m-0.5 inline-flex shrink-0 rounded-full p-0.5 text-copilot-primary/75 hover:bg-copilot-primary/10 hover:text-copilot-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label="Explanation"
        title={text}
        onClick={() => setOpen((v) => !v)}
      >
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </button>
      {open ? (
        <span
          id={panelId}
          className="block max-w-[min(100%,22rem)] rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/95 px-2.5 py-2 text-xs leading-snug text-copilot-text-secondary shadow-sm"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}

function formatUtilitiesDeltaMonthly(n: number): string {
  if (Math.abs(n) < 0.5) return "≈ same monthly";
  const sign = n > 0 ? "+" : "−";
  return `${sign}${formatUtilitiesEur(Math.abs(n))}/mo`;
}

function formatUtilitiesDeltaSetup(n: number): string {
  if (Math.abs(n) < 0.5) return "≈ same upfront";
  const sign = n > 0 ? "+" : "−";
  return `${sign}${formatUtilitiesEur(Math.abs(n))}`;
}

function CompareColumnRow({ line }: { line: UsServiceBreakdownLine }) {
  return (
    <li className="rounded-xl border border-copilot-primary/10 bg-white/95 p-3 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-sm font-semibold text-copilot-text-primary">{line.label}</p>
        <p className="text-sm font-bold tabular-nums text-copilot-text-primary">{formatUtilitiesEur(line.monthlyEur)}/mo</p>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary">{line.compareNote}</p>
      {line.maybeIncluded ? (
        <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-950 ring-1 ring-inset ring-amber-200">
          Check lease — may be included
        </span>
      ) : null}
    </li>
  );
}

const CHECKLIST_PHASE_META = {
  before_move_in: { title: "Before move-in", badge: "Prep & paperwork", Icon: ClipboardList },
  move_in_day: { title: "On move-in day", badge: "Keys & handover", Icon: KeyRound },
  first_month: { title: "First month", badge: "Suppliers & post", Icon: CalendarClock },
} as const;

function CardShell({ sectionId, title, children }: { sectionId?: string; title: ReactNode; children: React.ReactNode }) {
  const gen = useId().replace(/:/g, "");
  const headingId = sectionId ? `${sectionId}-heading` : `us-card-${gen}`;
  return (
    <section
      id={sectionId}
      role="region"
      aria-labelledby={headingId}
      className={cn(sectionId && "scroll-mt-28 md:scroll-mt-32")}
    >
      <div className="relative overflow-hidden rounded-2xl border border-copilot-primary/12 bg-copilot-surface shadow-expatos-md">
        <div className={cn(movingNlSignatureGradientClass, "h-1.5 w-full")} aria-hidden />
        <div className="space-y-4 p-4 md:p-6">
          <h3 id={headingId} className="text-base font-semibold text-copilot-text-primary">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  tip,
  children,
}: {
  label: string;
  hint?: string;
  tip?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div>
        <div className="flex flex-wrap items-start gap-1.5">
          <p className="text-sm font-medium text-copilot-text-primary">{label}</p>
          {tip ? <InfoTip text={tip} /> : null}
        </div>
        {hint ? <p className="text-xs text-copilot-text-secondary">{hint}</p> : null}
      </div>
      {children}
    </div>
  );
}

function CheckRow({
  checked,
  onChange,
  label,
  description,
  tip,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description?: string;
  tip?: string;
}) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-xl border border-copilot-primary/10 bg-white/80 p-3 shadow-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary focus:ring-copilot-primary/40"
      />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-1">
          <span className="text-sm font-medium text-copilot-text-primary">{label}</span>
          {tip ? <InfoTip text={tip} /> : null}
        </span>
        {description ? <span className="mt-0.5 block text-xs text-copilot-text-secondary">{description}</span> : null}
      </span>
    </label>
  );
}

type Props = {
  calculatorCanonicalUrl: string;
  siteName: string;
};

export function UtilitiesServicesCalculatorClient({ calculatorCanonicalUrl, siteName }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<UtilitiesServicesInput>(() => ({ ...UTILITIES_SERVICES_DEFAULT_INPUT }));
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<UtilitiesServicesInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const skipNextUrlWrite = useRef(true);
  const initialized = useRef(false);
  const startedLogged = useRef(false);
  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);
  const detailedSectionRef = useRef<HTMLDivElement | null>(null);
  const prevPlannerModeRef = useRef<UsPlannerMode | null>(null);

  const patch = useCallback((p: Partial<UtilitiesServicesInput>) => {
    setInput((prev) => sanitizeUtilitiesServicesInput({ ...prev, ...p }));
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
    let merged = { ...UTILITIES_SERVICES_DEFAULT_INPUT };
    if (hasUtilitiesServicesUrlParams(sp)) {
      const fromUrl = parseUtilitiesServicesSearchParams(sp);
      if (fromUrl) merged = fromUrl;
    } else {
      const stored = loadUtilitiesServicesFromStorage();
      if (stored) merged = stored;
    }
    setInput(merged);
    setHydrated(true);
    skipNextUrlWrite.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated || startedLogged.current) return;
    startedLogged.current = true;
    trackUtilitiesServicesComparison("calculator_started");
  }, [hydrated]);

  useEffect(() => {
    const prev = prevPlannerModeRef.current;
    prevPlannerModeRef.current = input.plannerMode;
    if (prev === "quick" && input.plannerMode === "detailed" && detailedSectionRef.current) {
      window.requestAnimationFrame(() => {
        detailedSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  }, [input.plannerMode]);

  useEffect(() => {
    if (!hydrated) return;
    saveUtilitiesServicesToStorage(input);
    if (skipNextUrlWrite.current) {
      skipNextUrlWrite.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      const p = utilitiesInputToSearchParams(input);
      const qs = p.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const baseResult = useMemo(
    () => (lastRunInput ? estimateUtilitiesServices(lastRunInput) : null),
    [lastRunInput]
  );

  const scenarioRows = useMemo(
    () => (lastRunInput ? buildUtilitiesScenarioComparisons(lastRunInput) : []),
    [lastRunInput]
  );

  const result = useMemo(() => {
    if (!baseResult) return null;
    return { ...baseResult, scenarioComparisons: scenarioRows };
  }, [baseResult, scenarioRows]);

  const inputKey = useMemo(() => utilitiesInputToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? utilitiesInputToSearchParams(lastRunInput).toString() : ""),
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

    /** Match other calculators: visible ~1–2s progress before revealing results (client-side only). */
    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);
      const snap = sanitizeUtilitiesServicesInput({ ...latestInputRef.current });
      setLastRunInput(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      trackUtilitiesServicesComparison("calculator_completed");
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  const handleReset = useCallback(() => {
    setInput({ ...UTILITIES_SERVICES_DEFAULT_INPUT });
    setLastRunInput(null);
    setHasRun(false);
    skipNextUrlWrite.current = true;
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const handleExport = useCallback(() => {
    if (!lastRunInput || !result) return;
    const html = buildUtilitiesServicesExportHtml({
      siteName,
      generatedAtIso: new Date().toISOString(),
      disclaimer: UTILITIES_SERVICES_EXPORT_DISCLAIMER,
      calculatorCanonicalUrl,
      input: lastRunInput,
      result,
    });
    downloadUtilitiesServicesHtml("expatcopilot-utilities-services-summary.html", html);
    trackUtilitiesServicesComparison("summary_downloaded", { format: "html_download" });
  }, [calculatorCanonicalUrl, lastRunInput, result, siteName]);

  const handlePrint = useCallback(() => {
    if (!lastRunInput || !result) return;
    const html = buildUtilitiesServicesExportHtml({
      siteName,
      generatedAtIso: new Date().toISOString(),
      disclaimer: UTILITIES_SERVICES_EXPORT_DISCLAIMER,
      calculatorCanonicalUrl,
      input: lastRunInput,
      result,
    });
    openPrintUtilitiesServicesSummary(html);
    trackUtilitiesServicesComparison("summary_downloaded", { format: "print" });
  }, [calculatorCanonicalUrl, lastRunInput, result, siteName]);

  const plannerModes: { value: UsPlannerMode; label: string }[] = [
    { value: "quick", label: "Quick estimate" },
    { value: "detailed", label: "Detailed planner" },
  ];

  const breakdownRows = (lines: UsServiceBreakdownLine[]) =>
    lines.filter((l) => l.monthlyEur > 0 || l.classification === "may_already_be_included");

  const compareLinesActive = useMemo(
    () => result?.serviceBreakdown.filter((l) => l.classification === "actively_compare" && l.monthlyEur > 0) ?? [],
    [result]
  );
  const fixedLinesActive = useMemo(
    () => result?.serviceBreakdown.filter((l) => l.classification === "usually_local_fixed" && l.monthlyEur > 0) ?? [],
    [result]
  );
  const uncertainLines = useMemo(() => {
    if (!result) return [];
    const compareIds = new Set(
      result.serviceBreakdown.filter((l) => l.classification === "actively_compare" && l.monthlyEur > 0).map((l) => l.categoryId)
    );
    return result.serviceBreakdown.filter(
      (l) =>
        (l.maybeIncluded || l.classification === "may_already_be_included") &&
        !compareIds.has(l.categoryId)
    );
  }, [result]);

  return (
    <div id="tool-inputs" className="space-y-8">
      <CardShell title="Household setup planner">
        <div className="space-y-6">
          <Field label="Planner mode" hint="Quick estimate uses a typical uncertainty mix for shell and heating in the model. Detailed planner exposes those fields (plus landlord services and mobile usage profile) so you can tune the math — click Recalculate after changes.">
            <SegmentedControl
              name="utilities-planner-mode"
              pillTone="copilot"
              value={input.plannerMode}
              onChange={(v) => {
                patch({ plannerMode: v as UsPlannerMode });
                trackUtilitiesServicesComparison("planner_mode_changed", { mode: v });
              }}
              options={plannerModes}
            />
          </Field>

          <div className="grid gap-6 lg:grid-cols-2">
            <Field label="City">
              <select className={selectClass} value={input.city} onChange={(e) => patch({ city: e.target.value as UtilitiesServicesInput["city"] })}>
                {CITIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Move stage">
              <select
                className={selectClass}
                value={input.moveStage}
                onChange={(e) => patch({ moveStage: e.target.value as UtilitiesServicesInput["moveStage"] })}
              >
                <option value="researching">Researching</option>
                <option value="moving_soon">Moving soon</option>
                <option value="already_moved">Already moved</option>
              </select>
            </Field>
            <Field label="Household type">
              <select
                className={selectClass}
                value={input.householdType}
                onChange={(e) => patch({ householdType: e.target.value as UtilitiesServicesInput["householdType"] })}
              >
                <option value="single">Single</option>
                <option value="couple">Couple</option>
                <option value="family">Family</option>
                <option value="house_share">House share</option>
              </select>
            </Field>
            <Field label="Renter or owner">
              <select
                className={selectClass}
                value={input.renterOrOwner}
                onChange={(e) => patch({ renterOrOwner: e.target.value as UtilitiesServicesInput["renterOrOwner"] })}
              >
                <option value="renter">Renter</option>
                <option value="owner">Owner</option>
              </select>
            </Field>
            <Field label="Adults">
              <Input
                type="number"
                min={1}
                max={6}
                value={input.adultsCount}
                onChange={(e) => patch({ adultsCount: Number(e.target.value) })}
                className="rounded-xl border-copilot-primary/15"
              />
            </Field>
            <Field label="Children">
              <Input
                type="number"
                min={0}
                max={8}
                value={input.childrenCount}
                onChange={(e) => patch({ childrenCount: Number(e.target.value) })}
                className="rounded-xl border-copilot-primary/15"
              />
            </Field>
            <Field label="Utilities already included in rent?" tip={UTILITIES_FIELD_TOOLTIPS.utilitiesIncluded}>
              <select
                className={selectClass}
                value={input.utilitiesIncludedInRent}
                onChange={(e) => patch({ utilitiesIncludedInRent: e.target.value as UtilitiesServicesInput["utilitiesIncludedInRent"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Not sure</option>
              </select>
            </Field>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Field label="Housing type">
              <select
                className={selectClass}
                value={input.housingType}
                onChange={(e) => patch({ housingType: e.target.value as UtilitiesServicesInput["housingType"] })}
              >
                <option value="student_room">Student room / shared room</option>
                <option value="studio">Studio</option>
                <option value="apartment">Apartment</option>
                <option value="terraced">Terraced house</option>
                <option value="larger_house">Larger house / detached</option>
              </select>
            </Field>
            <Field label="Approximate size">
              <select className={selectClass} value={input.sizeBand} onChange={(e) => patch({ sizeBand: e.target.value as UtilitiesServicesInput["sizeBand"] })}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </Field>
            <Field label="Overall usage level">
              <select
                className={selectClass}
                value={input.usageLevel}
                onChange={(e) => patch({ usageLevel: e.target.value as UtilitiesServicesInput["usageLevel"] })}
              >
                <option value="low">Low</option>
                <option value="average">Average</option>
                <option value="high">High</option>
              </select>
            </Field>
            <Field label="Internet speed need" tip={UTILITIES_FIELD_TOOLTIPS.internetTier}>
              <select
                className={selectClass}
                value={input.internetTier}
                onChange={(e) => patch({ internetTier: e.target.value as UtilitiesServicesInput["internetTier"] })}
              >
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="fast">Fast / fiber-heavy</option>
              </select>
            </Field>
            <Field label="Number of mobile lines">
              <Input
                type="number"
                min={0}
                max={6}
                value={input.mobileLines}
                onChange={(e) => patch({ mobileLines: Number(e.target.value) })}
                className="rounded-xl border-copilot-primary/15"
              />
            </Field>
          </div>

          {input.plannerMode === "detailed" ? (
            <div
              ref={detailedSectionRef}
              className="space-y-4 border-t border-copilot-primary/15 pt-6"
            >
              <div className="rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/50 px-4 py-3">
                <p className="text-sm font-semibold text-copilot-text-primary">Detailed planner — shell, heating & contracts</p>
                <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary">
                  These fields feed directly into energy and mobile lines. Scenario comparisons always include an efficiency flip row; with
                  Detailed you can align it to your real insulation and heat source.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
              <Field label="Energy quality / insulation" tip={UTILITIES_FIELD_TOOLTIPS.energyQuality}>
                <select
                  className={selectClass}
                  value={input.energyQuality}
                  onChange={(e) => patch({ energyQuality: e.target.value as UtilitiesServicesInput["energyQuality"] })}
                >
                  <option value="low">Low / older home</option>
                  <option value="average">Average</option>
                  <option value="efficient">Efficient / newer</option>
                  <option value="unknown">Unknown</option>
                </select>
              </Field>
              <Field
                label="Heating setup"
                tip={
                  input.heating === "district"
                    ? UTILITIES_FIELD_TOOLTIPS.districtHeating
                    : input.heating === "mixed_unknown"
                      ? UTILITIES_FIELD_TOOLTIPS.heatingUnknown
                      : undefined
                }
              >
                <select className={selectClass} value={input.heating} onChange={(e) => patch({ heating: e.target.value as UtilitiesServicesInput["heating"] })}>
                  <option value="gas">Gas</option>
                  <option value="electric">Electric</option>
                  <option value="district">District heating</option>
                  <option value="mixed_unknown">Mixed / unknown</option>
                </select>
              </Field>
              <Field label="Furnished or unfurnished">
                <select
                  className={selectClass}
                  value={input.furnished}
                  onChange={(e) => patch({ furnished: e.target.value as UtilitiesServicesInput["furnished"] })}
                >
                  <option value="furnished">Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </Field>
              <Field label="Landlord / building includes some services?" tip={UTILITIES_FIELD_TOOLTIPS.landlordBuildingIncludes}>
                <select
                  className={selectClass}
                  value={input.landlordBuildingIncludesServices}
                  onChange={(e) =>
                    patch({ landlordBuildingIncludesServices: e.target.value as UtilitiesServicesInput["landlordBuildingIncludesServices"] })
                  }
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not sure</option>
                </select>
              </Field>
              <Field label="Mobile usage profile">
                <select
                  className={selectClass}
                  value={input.mobileUsage}
                  onChange={(e) => patch({ mobileUsage: e.target.value as UtilitiesServicesInput["mobileUsage"] })}
                >
                  <option value="light">Light</option>
                  <option value="standard">Standard</option>
                  <option value="heavy">Heavy</option>
                </select>
              </Field>
              <Field label="What matters most">
                <select
                  className={selectClass}
                  value={input.priority}
                  onChange={(e) => patch({ priority: e.target.value as UtilitiesServicesInput["priority"] })}
                >
                  <option value="lowest_cost">Lowest monthly cost</option>
                  <option value="flexibility">Flexibility / no long commitment</option>
                  <option value="balanced">Balanced</option>
                  <option value="quality">Better quality / speed / reliability</option>
                  <option value="greener">Greener energy preference</option>
                </select>
              </Field>
              <Field label="Moving date or target month (optional)" hint="Private note only — stored in your browser and share link; not sent to a server.">
                <Input
                  value={input.movingDateNote}
                  onChange={(e) => patch({ movingDateNote: e.target.value })}
                  placeholder="e.g. September 2026"
                  className="rounded-xl border-copilot-primary/15"
                />
              </Field>
              </div>
            </div>
          ) : (
            <div className="border-t border-copilot-primary/10 pt-6">
              <Field label="What matters most (quick)">
                <select
                  className={selectClass}
                  value={input.priority}
                  onChange={(e) => patch({ priority: e.target.value as UtilitiesServicesInput["priority"] })}
                >
                  <option value="lowest_cost">Lowest monthly cost</option>
                  <option value="flexibility">Flexibility / no long commitment</option>
                  <option value="balanced">Balanced</option>
                  <option value="quality">Better quality / speed / reliability</option>
                  <option value="greener">Greener energy preference</option>
                </select>
              </Field>
            </div>
          )}

          <div className="space-y-3 border-t border-copilot-primary/10 pt-6">
            <p className="text-sm font-semibold text-copilot-text-primary">Include in monthly estimate</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <CheckRow checked={input.includeInternet} onChange={(v) => patch({ includeInternet: v })} label="Internet" />
              <CheckRow checked={input.includeMobile} onChange={(v) => patch({ includeMobile: v })} label="Mobile" />
              <CheckRow checked={input.includeTvMedia} onChange={(v) => patch({ includeTvMedia: v })} label="TV / media bundle" />
              <CheckRow
                checked={input.includeContentsInsurance}
                onChange={(v) => patch({ includeContentsInsurance: v })}
                label="Contents insurance"
                tip={UTILITIES_FIELD_TOOLTIPS.contentsInsurance}
              />
              <CheckRow
                checked={input.includeLiabilityInsurance}
                onChange={(v) => patch({ includeLiabilityInsurance: v })}
                label="Liability insurance"
                tip={UTILITIES_FIELD_TOOLTIPS.liabilityInsurance}
              />
              <CheckRow
                checked={input.evHeavy}
                onChange={(v) => patch({ evHeavy: v })}
                label="EV / electric-heavy household"
                description="Adds a planning bump to energy."
              />
              <CheckRow
                checked={input.wfhHeavy}
                onChange={(v) => patch({ wfhHeavy: v })}
                label="Work from home heavy"
                description="Nudges energy and internet expectations."
              />
              <CheckRow
                checked={input.shortTermOverlap}
                onChange={(v) => patch({ shortTermOverlap: v })}
                label="Short-term stay / temporary overlap"
                description="Adds first-month friction cash in setup."
              />
            </div>
          </div>
        </div>
      </CardShell>

      <div className="rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-md md:p-6">
        <h3 className="text-base font-semibold text-copilot-text-primary">Run calculation</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong> — same flow as our rent, salary,
          and cost-of-living tools (about one to two seconds of progress, then your bands and checklist).
        </p>
        <p className="mt-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
          Adjust quick vs detailed fields above, then run when you are ready. Shared URLs and presets fill the form — you still press{" "}
          <strong>Calculate</strong> to reveal numbers.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            type="button"
            variant="primary"
            className="min-h-11 w-full border-copilot-primary/20 bg-copilot-primary text-white hover:bg-copilot-primary/90 sm:w-auto"
            disabled={isCalculating}
            onClick={handleCalculate}
          >
            {isCalculating ? "Calculating…" : hasRun ? "Recalculate" : "Calculate"}
          </Button>
          {hasRun && !isCalculating ? (
            <p className="text-xs text-copilot-text-secondary">Showing your last calculated result.</p>
          ) : null}
          <Button type="button" variant="secondary" className="min-h-11 w-full sm:w-auto" onClick={handleReset}>
            Reset defaults
          </Button>
          <a
            href="#example-scenarios"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-copilot-primary/20 px-4 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/60"
          >
            Worked examples
          </a>
        </div>
      </div>

      <section id="tool-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading
              variant="copilot"
              message="Estimating monthly services, setup cash, compare vs fixed labels, and your checklist…"
            />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/10" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {!isCalculating && !hasRun ? (
          <InfoBox title="Results are hidden until Calculate" variant="info">
            <p className="text-sm text-copilot-text-primary">
              Configure your household above, then click <strong>Calculate</strong>. You will see a short progress state (about one to two
              seconds), then monthly bands, setup cash, compare vs fixed labels, scenarios, and your move-in checklist.
            </p>
          </InfoBox>
        ) : null}

        {!isCalculating && !hasRun ? (
          <div className="rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-copilot-bg-soft/40 p-5 shadow-expatos-sm md:p-7">
            <div className="flex flex-wrap items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-copilot-primary/10 text-copilot-primary">
                <ListTodo className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1 space-y-2">
                <h3 className="text-base font-semibold text-copilot-text-primary">What you get after you calculate</h3>
                <p className="text-sm text-copilot-text-secondary">
                  This is a <strong className="text-copilot-text-primary">planning lens</strong>, not a quote engine. Click{" "}
                  <strong className="text-copilot-text-primary">Calculate</strong> when you are ready — results stay hidden until then, like
                  our other tools.
                </p>
              </div>
            </div>
            <ul className="mt-5 grid gap-4 text-sm text-copilot-text-secondary md:grid-cols-3">
              <li className="rounded-xl border border-copilot-primary/10 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">Estimates</p>
                <p className="mt-2 leading-relaxed">
                  Monthly bands for energy, water, internet, mobile, gemeente-style charges, and optional bundles — split into{" "}
                  <strong className="text-copilot-text-primary">essential</strong> vs <strong className="text-copilot-text-primary">optional</strong>{" "}
                  spend.
                </p>
              </li>
              <li className="rounded-xl border border-copilot-primary/10 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">Comparison focus</p>
                <p className="mt-2 leading-relaxed">
                  Clear labels for what to <strong className="text-copilot-text-primary">shop</strong> (contracts you can switch) vs what is{" "}
                  <strong className="text-copilot-text-primary">local or fixed</strong>, plus lease-dependent lines called out.
                </p>
              </li>
              <li className="rounded-xl border border-copilot-primary/10 bg-white/80 p-4 shadow-sm md:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">Often missed</p>
                <p className="mt-2 leading-relaxed">
                  First-month <strong className="text-copilot-text-primary">activation and overlap</strong> cash, gemeente letters easy to
                  overlook, and rent that already bundles utilities — so you do not double-pay.
                </p>
              </li>
            </ul>
          </div>
        ) : null}

        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed" variant="warn">
            <p className="text-sm">Your form changed since the last run. Click Recalculate to refresh numbers.</p>
          </InfoBox>
        ) : null}

        {showResultsPanel && result ? (
          <div className="space-y-8">
            <CardShell title="Your household services picture">
              {result.warnings.length ? (
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-amber-900">
                  {result.warnings.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              ) : null}

              <div className="rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-emerald-50/35 p-5 shadow-inner md:p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-copilot-text-secondary">Monthly total (modeled)</p>
                    <p className="mt-1 text-4xl font-bold tracking-tight text-copilot-text-primary md:text-5xl">
                      {formatUtilitiesEur(result.monthlyTotals.allInEur)}
                      <span className="text-lg font-semibold text-copilot-text-secondary">/month</span>
                    </p>
                    <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-white/85 p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Plain-language summary</p>
                      <p className="mt-2 text-sm leading-relaxed text-copilot-text-primary">{result.summaryText}</p>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-copilot-primary/12 bg-white/95 px-4 py-4 shadow-sm lg:max-w-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">First-month setup</p>
                        <p className="mt-1 text-2xl font-bold text-copilot-text-primary">{formatUtilitiesEur(result.setupTotalEur)}</p>
                      </div>
                      <InfoTip text={UTILITIES_FIELD_TOOLTIPS.activationSetup} />
                    </div>
                    <p className="mt-2 text-xs leading-snug text-copilot-text-secondary">
                      One-off activation, hardware, admin, and timing buffers — not your recurring monthly lines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {(
                  [
                    {
                      k: "Essential (monthly)",
                      v: formatUtilitiesEur(result.monthlyTotals.essentialEur),
                      sub: "Core services in this estimate",
                    },
                    {
                      k: "Optional (monthly)",
                      v: formatUtilitiesEur(result.monthlyTotals.optionalEur),
                      sub: "Extras you enabled in the form",
                    },
                    {
                      k: "Services to compare",
                      v: String(result.comparableServicesCount),
                      sub: "Comparable categories with spend",
                      tip: "Where switching supplier, speed tier, or bundle usually moves the needle.",
                    },
                    {
                      k: "Fixed / local charges",
                      v: String(result.fixedLocalServicesCount),
                      sub: "Local rules & providers",
                      tip: UTILITIES_FIELD_TOOLTIPS.localFixedCharges,
                    },
                    {
                      k: "Lease-dependent lines",
                      v: String(result.maybeIncludedCount),
                      sub: "May already be included",
                      tip: "Categories flagged as possibly bundled — confirm before you contract or double-pay.",
                    },
                  ] as const
                ).map((card) => (
                  <div
                    key={card.k}
                    className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <p className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-copilot-text-secondary">{card.k}</p>
                      {"tip" in card && card.tip ? <InfoTip text={card.tip} /> : null}
                    </div>
                    <p className="mt-2 text-xl font-bold tabular-nums text-copilot-text-primary">{card.v}</p>
                    <p className="mt-1 text-[11px] leading-snug text-copilot-text-secondary">{card.sub}</p>
                  </div>
                ))}
              </div>
            </CardShell>

            <CardShell sectionId="monthly-breakdown" title="Monthly utility / service breakdown">
              <p className="text-sm text-copilot-text-secondary">
                Each card shows a planning band, how we classify it, and what to verify before you sign anything.
              </p>
              <div className="space-y-4">
                {breakdownRows(result.serviceBreakdown).map((line) => (
                  <div
                    key={line.categoryId}
                    className={cn(
                      "rounded-2xl border p-4 shadow-sm md:p-5",
                      line.maybeIncluded || line.classification === "may_already_be_included"
                        ? "border-amber-200/90 bg-amber-50/20"
                        : "border-copilot-primary/10 bg-white/90"
                    )}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-base font-semibold text-copilot-text-primary">{line.label}</p>
                          {line.categoryId === "municipality" ? <InfoTip text={UTILITIES_FIELD_TOOLTIPS.municipalityLocal} /> : null}
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Why it matters</p>
                        <p className="mt-1 text-sm leading-relaxed text-copilot-text-secondary">{line.whyItApplies}</p>
                      </div>
                      <div className="shrink-0 text-left sm:text-right">
                        <p className="text-2xl font-bold tabular-nums text-copilot-text-primary">{formatUtilitiesEur(line.monthlyEur)}</p>
                        <p className="text-xs text-copilot-text-secondary">per month (planning band)</p>
                        <p className="mt-2 text-xs text-copilot-text-secondary">
                          ~{formatUtilitiesEur(line.annualEstimate)}/yr modeled · Setup share {formatUtilitiesEur(line.setupEstimate)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset",
                          line.essential ? "bg-copilot-bg-soft text-copilot-text-primary ring-copilot-primary/15" : "bg-white text-copilot-text-secondary ring-copilot-primary/12"
                        )}
                      >
                        {line.essential ? "Essential in this run" : "Optional add-on"}
                      </span>
                      <CompareBadge kind={line.classification} />
                    </div>

                    {line.maybeIncluded || line.classification === "may_already_be_included" ? (
                      <p className="mt-3 rounded-lg border border-amber-200/80 bg-amber-50/60 px-3 py-2 text-xs font-medium text-amber-950">
                        May be included in rent or building service costs — confirm before you contract the same service twice.
                      </p>
                    ) : null}

                    {line.whatToCheck.length ? (
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-copilot-text-primary">What to check</p>
                        <ul className="mt-2 space-y-1.5">
                          {line.whatToCheck.map((t) => (
                            <li key={t} className="flex gap-2 text-sm text-copilot-text-secondary">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <details className="mt-3 rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/40 px-3 py-2">
                      <summary className="cursor-pointer text-xs font-semibold text-copilot-text-primary">Technical assumptions (audit trail)</summary>
                      <p className="mt-2 text-xs text-copilot-text-secondary">
                        <span className="font-medium text-copilot-text-primary">Summary:</span> {line.whatAffectsEstimate}
                      </p>
                      {line.assumptionsUsed.length ? (
                        <p className="mt-2 font-mono text-[10px] leading-relaxed text-copilot-text-secondary/90">{line.assumptionsUsed.join(" · ")}</p>
                      ) : null}
                    </details>

                    {line.compareNote ? (
                      <p className="mt-3 text-xs leading-relaxed text-copilot-text-secondary">
                        <span className="font-semibold text-copilot-text-primary">Compare note:</span> {line.compareNote}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </CardShell>

            <CardShell sectionId="compare-fixed" title="What to compare vs what is fixed">
              <p className="text-sm text-copilot-text-secondary">
                Scan left-to-right on desktop: spend comparison energy on the green column; treat the right column as local awareness, not a
                price hunt. If you marked utilities as <strong className="text-copilot-text-primary">not sure</strong>, some lines stay in the
                lease-dependent strip until you confirm — that avoids pushing hard retail comparison when the contract may bundle supply.
              </p>
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/30 p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-emerald-950">Shop & compare</h4>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-900">
                      {compareLinesActive.length} active
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-900/90">Contracts and tiers you can usually switch or tune.</p>
                  {compareLinesActive.length ? (
                    <ul className="mt-4 space-y-2">
                      {compareLinesActive.map((line) => (
                        <CompareColumnRow key={line.categoryId} line={line} />
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm text-copilot-text-secondary">No comparable lines with spend in this run — check inclusions or toggles.</p>
                  )}
                </div>
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-slate-900">Local / fixed awareness</h4>
                    <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-800">
                      {fixedLinesActive.length} active
                    </span>
                    <InfoTip text={UTILITIES_FIELD_TOOLTIPS.localFixedCharges} />
                  </div>
                  <p className="mt-1 text-xs text-slate-700">Set by region and household rules — compare websites rarely changes outcomes.</p>
                  {fixedLinesActive.length ? (
                    <ul className="mt-4 space-y-2">
                      {fixedLinesActive.map((line) => (
                        <CompareColumnRow key={line.categoryId} line={line} />
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm text-copilot-text-secondary">No fixed/local lines modeled with spend right now.</p>
                  )}
                </div>
              </div>

              {uncertainLines.length ? (
                <div className="mt-5 rounded-2xl border border-amber-200/90 bg-amber-50/35 p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-amber-950">Included or uncertain — verify on paper</h4>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-950">
                      {uncertainLines.length} flagged
                    </span>
                    <InfoTip text={UTILITIES_FIELD_TOOLTIPS.utilitiesIncluded} />
                  </div>
                  <p className="mt-1 text-xs text-amber-950/90">These lines may already sit in rent, service charges, or building agreements.</p>
                  <ul className="mt-4 space-y-2">
                    {uncertainLines.map((line) => (
                      <CompareColumnRow key={`${line.categoryId}-uncertain`} line={line} />
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-4 overflow-x-auto rounded-xl border border-copilot-primary/10 md:hidden">
                <p className="border-b border-copilot-primary/10 bg-copilot-bg-soft/50 px-3 py-2 text-xs font-semibold text-copilot-text-primary">
                  Full table (all categories)
                </p>
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-copilot-primary/15 text-copilot-text-secondary">
                      <th className="py-2 pl-3 pr-2 font-semibold">Category</th>
                      <th className="py-2 pr-2 font-semibold">Label</th>
                      <th className="py-2 pr-3 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.serviceBreakdown.map((line) => (
                      <tr key={line.categoryId} className="border-b border-copilot-primary/10 align-top">
                        <td className="py-2 pl-3 pr-2">
                          <CompareBadge kind={line.classification} />
                        </td>
                        <td className="py-2 pr-2 font-medium text-copilot-text-primary">{line.label}</td>
                        <td className="py-2 pr-3 text-xs text-copilot-text-secondary">{line.compareNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardShell>

            <CardShell sectionId="first-month-setup" title="First-month setup cost">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <p className="text-3xl font-bold tabular-nums text-copilot-text-primary">{formatUtilitiesEur(result.setupTotalEur)}</p>
                <InfoTip text={UTILITIES_FIELD_TOOLTIPS.activationSetup} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary">
                The first month is often higher than a steady month: suppliers charge activation, you may overlap two addresses, installers
                book late slots, and first invoices land on odd dates. The buckets below are planning placeholders — confirm with providers and
                your lease.
              </p>
              <p className="mt-3 text-sm text-copilot-text-secondary">
                <a href="#move-in-checklist" className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
                  Use the move-in checklist
                </a>{" "}
                to turn friction into tasks (meter reads, forwarding, contract start dates).
              </p>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4">
                  <dt className="flex items-center gap-2 font-semibold text-copilot-text-primary">
                    Installation / activation
                    <InfoTip text="Supplier start fees, engineer visits, and energy or broadband switch administration — not monthly usage." />
                  </dt>
                  <dd className="mt-2 text-lg font-bold tabular-nums text-copilot-text-primary">
                    {formatUtilitiesEur(result.setupBuckets.installationActivationEur)}
                  </dd>
                  <dd className="mt-1 text-xs text-copilot-text-secondary">Getting accounts live at the new address.</dd>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4">
                  <dt className="flex items-center gap-2 font-semibold text-copilot-text-primary">
                    Hardware / modem
                    <InfoTip text="Router rental, purchase, or provider-supplied gear — varies by promo and technology at your address." />
                  </dt>
                  <dd className="mt-2 text-lg font-bold tabular-nums text-copilot-text-primary">
                    {formatUtilitiesEur(result.setupBuckets.hardwareModemEur)}
                  </dd>
                  <dd className="mt-1 text-xs text-copilot-text-secondary">One-off kit, sometimes waivable on contract.</dd>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4">
                  <dt className="flex items-center gap-2 font-semibold text-copilot-text-primary">
                    Admin / overlap friction
                    <InfoTip text="SIM swaps, insurance policy starts, overlapping leases, and short-stay buffers you flagged in the form." />
                  </dt>
                  <dd className="mt-2 text-lg font-bold tabular-nums text-copilot-text-primary">
                    {formatUtilitiesEur(result.setupBuckets.adminOverlapFrictionEur)}
                  </dd>
                  <dd className="mt-1 text-xs text-copilot-text-secondary">Paperwork and paying two places at once.</dd>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4">
                  <dt className="flex items-center gap-2 font-semibold text-copilot-text-primary">
                    First-invoice timing buffer
                    <InfoTip text="Suppliers rarely align on the same billing day the first cycle — this is cash held back for odd due dates." />
                  </dt>
                  <dd className="mt-2 text-lg font-bold tabular-nums text-copilot-text-primary">
                    {formatUtilitiesEur(result.setupBuckets.firstInvoiceTimingBufferEur)}
                  </dd>
                  <dd className="mt-1 text-xs text-copilot-text-secondary">Stops “everything hits at once” surprises.</dd>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4 sm:col-span-2">
                  <dt className="flex items-center gap-2 font-semibold text-copilot-text-primary">
                    Moving / connection friction
                    <InfoTip text="Extra slack when you are still waiting on keys, fiber pull, or meter access — stronger if you are mid-move." />
                  </dt>
                  <dd className="mt-2 text-lg font-bold tabular-nums text-copilot-text-primary">
                    {formatUtilitiesEur(result.setupBuckets.movingConnectionFrictionEur)}
                  </dd>
                  <dd className="mt-1 text-xs text-copilot-text-secondary">Logistics delays, not recurring usage.</dd>
                </div>
              </dl>
            </CardShell>

            <CardShell sectionId="move-in-checklist" title="Move-in checklist">
              <p className="text-sm text-copilot-text-secondary">
                Grouped so you can execute in order — tick mentally as you go; export or print if you want a paper copy.
              </p>
              <div className="mt-4 space-y-5">
                {(["before_move_in", "move_in_day", "first_month"] as const).map((phase) => {
                  const meta = CHECKLIST_PHASE_META[phase];
                  const Icon = meta.Icon;
                  const items = result.moveInChecklist.filter((c) => c.phase === phase);
                  return (
                    <div
                      key={phase}
                      className="rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-white to-copilot-bg-soft/50 p-4 shadow-sm md:p-5"
                    >
                      <div className="flex flex-wrap items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-copilot-primary/10 text-copilot-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-base font-semibold text-copilot-text-primary">{meta.title}</h4>
                            <span className="rounded-full bg-copilot-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-copilot-primary">
                              {meta.badge}
                            </span>
                            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-copilot-text-secondary ring-1 ring-copilot-primary/12">
                              {items.length} tasks
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {items.map((c) => (
                              <li key={c.id} className="flex gap-2 text-sm text-copilot-text-secondary">
                                <Square className="mt-0.5 h-4 w-4 shrink-0 text-copilot-primary/35" strokeWidth={2} aria-hidden />
                                <span>{c.text}</span>
                              </li>
                            ))}
                          </ul>
                          {items.length === 0 ? (
                            <p className="mt-2 text-sm text-copilot-text-secondary">No tasks in this phase for your current inputs.</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardShell>

            <CardShell sectionId="scenario-comparison" title="Scenario comparison">
              <p className="text-sm text-copilot-text-secondary">
                Each card changes <strong className="text-copilot-text-primary">one lever</strong> from your last run. Deltas show movement vs
                your baseline; weak or duplicate outcomes are dropped automatically.
              </p>
              {result.scenarioComparisons.length === 0 ? (
                <p className="mt-3 text-sm text-copilot-text-secondary">No alternate scenarios passed the usefulness filter for this profile.</p>
              ) : (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {result.scenarioComparisons.map((s) => (
                    <div
                      key={s.id}
                      className="flex flex-col rounded-2xl border border-copilot-primary/12 bg-white/95 p-4 shadow-sm md:p-5"
                    >
                      <p className="text-base font-semibold leading-snug text-copilot-text-primary">{s.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{s.whatChanged}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-bold tabular-nums",
                            s.monthlyDeltaEur > 0.5
                              ? "bg-rose-50 text-rose-900 ring-1 ring-inset ring-rose-200"
                              : s.monthlyDeltaEur < -0.5
                                ? "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200"
                                : "bg-slate-100 text-slate-800 ring-1 ring-inset ring-slate-200"
                          )}
                        >
                          {formatUtilitiesDeltaMonthly(s.monthlyDeltaEur)} vs baseline
                        </span>
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums text-copilot-text-secondary ring-1 ring-inset ring-copilot-primary/12",
                            Math.abs(s.setupDeltaEur) >= 0.5 ? "bg-copilot-bg-soft" : ""
                          )}
                        >
                          Setup {formatUtilitiesDeltaSetup(s.setupDeltaEur)}
                        </span>
                      </div>
                      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 border-t border-copilot-primary/10 pt-4 text-sm">
                        <dt className="text-copilot-text-secondary">Monthly total</dt>
                        <dd className="text-right font-bold tabular-nums text-copilot-text-primary">{formatUtilitiesEur(s.monthlyTotalEur)}</dd>
                        <dt className="text-copilot-text-secondary">First-month setup</dt>
                        <dd className="text-right font-bold tabular-nums text-copilot-text-primary">{formatUtilitiesEur(s.firstMonthSetupEur)}</dd>
                        <dt className="text-copilot-text-secondary">Biggest cost driver</dt>
                        <dd className="text-right font-medium text-copilot-text-primary">{s.biggestCostDriver}</dd>
                      </dl>
                    </div>
                  ))}
                </div>
              )}
            </CardShell>

            <CardShell sectionId="what-surprises-expats" title="What often surprises expats">
              <ul className="space-y-3 text-sm text-copilot-text-secondary">
                <li className="flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3">
                  <span className="font-bold text-copilot-primary">1.</span>
                  <span>
                    <strong className="text-copilot-text-primary">Double contracts.</strong> You sign energy and internet while the landlord
                    already bundles them in “service costs” — same for some student rooms with bulk deals.
                  </span>
                </li>
                <li className="flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3">
                  <span className="font-bold text-copilot-primary">2.</span>
                  <span>
                    <strong className="text-copilot-text-primary">Mail you never see.</strong> Waste and sewer assessments often arrive as
                    yearly letters; without forwarding or a working mailbox, you discover them late with reminders attached.
                  </span>
                </li>
                <li className="flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3">
                  <span className="font-bold text-copilot-primary">3.</span>
                  <span>
                    <strong className="text-copilot-text-primary">Building beats postcode.</strong> Two flats in the same street can have very
                    different energy bills if insulation, glazing, and heating systems differ.
                  </span>
                </li>
                <li className="flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3">
                  <span className="font-bold text-copilot-primary">4.</span>
                  <span>
                    <strong className="text-copilot-text-primary">Internet lead times.</strong> Fiber might be in the street but not your
                    socket yet; DSL/cable can be faster to go live — planning only the promo price misses the wait.
                  </span>
                </li>
                <li className="flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3">
                  <span className="font-bold text-copilot-primary">5.</span>
                  <span>
                    <strong className="text-copilot-text-primary">First month cash pile-up.</strong> Activation, overlapping rent, and
                    misaligned first invoices feel like a second deposit even when monthly recurring lines look tame later.
                  </span>
                </li>
              </ul>
            </CardShell>

            <section id="methodology-inline" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="mb-3 text-base font-semibold text-copilot-text-primary">How we estimate</h3>
              <UtilitiesServicesMethodology />
            </section>

            <CardShell sectionId="download-summary" title="Download / print / share">
              <p className="text-sm text-copilot-text-secondary">
                Export captures your last calculated inputs, monthly breakdown, compare vs fixed table, checklist, scenarios, and a
                disclaimer. Shareable state lives in the URL query (copy from the address bar).
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button type="button" className="min-h-11 w-full sm:w-auto" onClick={handleExport}>
                  Download HTML summary
                </Button>
                <Button type="button" variant="secondary" className="min-h-11 w-full sm:w-auto" onClick={handlePrint}>
                  Print / save PDF
                </Button>
              </div>
              <p className="text-xs text-copilot-text-secondary">{UTILITIES_SERVICES_EXPORT_DISCLAIMER}</p>
            </CardShell>
          </div>
        ) : null}
      </section>
    </div>
  );
}
