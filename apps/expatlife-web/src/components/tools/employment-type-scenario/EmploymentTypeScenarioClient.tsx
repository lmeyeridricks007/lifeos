"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Coins,
  FileText,
  Gift,
  Globe2,
  Heart,
  PiggyBank,
  Plane,
  Receipt,
  Scale,
  Shield,
  SlidersHorizontal,
  Sparkles,
  TrendingDown,
  TriangleAlert,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { trackEmploymentTypeScenarioTool } from "@/lib/analytics/track";
import { formatEur } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT, sanitizeEmploymentTypeScenarioInput } from "@/src/lib/tools/employment-type-scenario/defaults";
import { calculateEmploymentTypeScenario } from "@/src/lib/tools/employment-type-scenario/engine";
import { buildPreviewNarrative, shouldShowAdvancedRefinementPrompt } from "@/src/lib/tools/employment-type-scenario/insights";
import { sumAnnualPlanningDeductions } from "@/src/lib/tools/employment-type-scenario/moneyUiHelpers";
import {
  downloadEmploymentTypeScenarioHtml,
  openPrintEmploymentTypeScenarioSummary,
} from "@/src/lib/tools/employment-type-scenario/exportHtml";
import { buildDynamicQuestions } from "@/src/lib/tools/employment-type-scenario/questions";
import type {
  EmploymentScenarioId,
  EmploymentTypeScenarioInput,
  MoneyBreakdownLine,
  RiskHighlightCategory,
} from "@/src/lib/tools/employment-type-scenario/types";
import {
  clearEmploymentTypeScenarioStorage,
  encodeEmploymentTypeScenarioParam,
  employmentTypeScenarioToSearchParams,
  loadEmploymentTypeScenarioFromStorage,
  mergeEmploymentTypeScenarioFromSources,
  saveEmploymentTypeScenarioToStorage,
} from "@/src/lib/tools/employment-type-scenario/urlState";
import {
  EMPLOYMENT_BEFORE_YOU_DECIDE_GROUPS,
  EMPLOYMENT_TYPE_RELATED_TOOLS,
  NL_BASE,
} from "@/src/content/tools/employment-type-scenario/content";
import { EmploymentAdvancedRefinementPrompt } from "./EmploymentAdvancedRefinementPrompt";
import { EmploymentBeforeYouDecideChecklist } from "./EmploymentBeforeYouDecideChecklist";
import { EmploymentDecisionLensesGrid } from "./EmploymentDecisionLensesGrid";
import { EmploymentEarlyPreviewCard } from "./EmploymentEarlyPreviewCard";
import { EmploymentHiddenCostStory } from "./EmploymentHiddenCostStory";
import { EmploymentTypeScenarioRecommendedServices } from "./EmploymentTypeScenarioRecommendedServices";

const FIELD_LABEL = "text-sm font-semibold text-copilot-text-primary";
const SELECT_CLASS =
  "mt-1.5 w-full rounded-lg border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30";

const SCENARIO_OPTIONS: { value: EmploymentScenarioId; label: string }[] = [
  { value: "permanent_employee", label: "Permanent employee" },
  { value: "fixed_term_employee", label: "Fixed-term employee" },
  { value: "contractor", label: "Contractor (umbrella / payroll)" },
  { value: "zzp_self_employed", label: "ZZP / self-employed" },
  { value: "foreign_remote_employee", label: "Foreign employer (remote)" },
];

const PRIORITY_META: { key: keyof EmploymentTypeScenarioInput["priorities"]; label: string; hint: string }[] = [
  {
    key: "higherNetIncome",
    label: "Higher net income",
    hint: "Weights indicative take-home after the tool’s fees and tax proxies — not gross headline alone.",
  },
  {
    key: "stabilitySecurity",
    label: "Stability / security",
    hint: "Permanent employment, renewals, and contract length — matters more when you cannot absorb income gaps.",
  },
  {
    key: "lowerAdminBurden",
    label: "Lower admin burden",
    hint: "Bookkeeping, invoicing, and dealing with payroll providers or the Belastingdienst as self-employed.",
  },
  {
    key: "benefitsProtections",
    label: "Benefits / protections",
    hint: "Pension accrual, paid leave, insurance paid by employer, and similar package value.",
  },
  {
    key: "flexibilityIndependence",
    label: "Flexibility / independence",
    hint: "Freedom to choose clients, rates, and structure — often higher for ZZP and some contractor setups.",
  },
  {
    key: "visaSponsorshipSimplicity",
    label: "Visa / sponsorship simplicity",
    hint: "How easy the story is for permits and recognised sponsors — pair with “Need sponsorship?” in context.",
  },
  {
    key: "lowerTaxPayrollComplexity",
    label: "Lower tax / payroll complexity",
    hint: "Cross-border payroll, foreign employer, and ruling uncertainty — not your moral worth, just paperwork load.",
  },
];

/** Card chrome for each scenario in Risk highlights (icon, accent, header gradient). */
const SCENARIO_RISK_HEADER: Record<
  EmploymentScenarioId,
  { Icon: LucideIcon; bar: string; iconWrap: string; eyebrow: string; cardBg: string }
> = {
  permanent_employee: {
    Icon: Briefcase,
    bar: "border-l-emerald-500",
    iconWrap: "bg-emerald-500/[0.14] text-emerald-800 ring-emerald-500/25",
    eyebrow: "Dutch payroll",
    cardBg: "bg-gradient-to-br from-emerald-500/[0.07] via-copilot-surface to-copilot-bg-soft/40",
  },
  fixed_term_employee: {
    Icon: CalendarClock,
    bar: "border-l-amber-500",
    iconWrap: "bg-amber-500/[0.15] text-amber-950 ring-amber-500/30",
    eyebrow: "Time-bounded role",
    cardBg: "bg-gradient-to-br from-amber-500/[0.08] via-copilot-surface to-copilot-bg-soft/40",
  },
  contractor: {
    Icon: Building2,
    bar: "border-l-sky-600",
    iconWrap: "bg-sky-500/[0.15] text-sky-950 ring-sky-500/25",
    eyebrow: "Umbrella / payroll-style",
    cardBg: "bg-gradient-to-br from-sky-500/[0.07] via-copilot-surface to-copilot-bg-soft/40",
  },
  zzp_self_employed: {
    Icon: Sparkles,
    bar: "border-l-violet-500",
    iconWrap: "bg-violet-500/[0.14] text-violet-900 ring-violet-500/25",
    eyebrow: "Self-employed",
    cardBg: "bg-gradient-to-br from-violet-500/[0.08] via-copilot-surface to-copilot-bg-soft/40",
  },
  foreign_remote_employee: {
    Icon: Globe2,
    bar: "border-l-cyan-600",
    iconWrap: "bg-cyan-500/[0.14] text-cyan-950 ring-cyan-500/25",
    eyebrow: "Cross-border",
    cardBg: "bg-gradient-to-br from-cyan-500/[0.07] via-copilot-surface to-copilot-bg-soft/40",
  },
};

const RISK_CATEGORY_ROW: Record<RiskHighlightCategory, { Icon: LucideIcon; liBar: string; iconWrap: string }> = {
  security: { Icon: Shield, liBar: "border-l-amber-500", iconWrap: "bg-amber-500/12 text-amber-900 ring-amber-500/20" },
  benefits: { Icon: Heart, liBar: "border-l-rose-500", iconWrap: "bg-rose-500/12 text-rose-900 ring-rose-500/20" },
  admin: { Icon: ClipboardList, liBar: "border-l-violet-500", iconWrap: "bg-violet-500/12 text-violet-900 ring-violet-500/20" },
  tax_complexity: { Icon: Receipt, liBar: "border-l-orange-500", iconWrap: "bg-orange-500/12 text-orange-950 ring-orange-500/20" },
  sponsorship: { Icon: Plane, liBar: "border-l-sky-500", iconWrap: "bg-sky-500/12 text-sky-950 ring-sky-500/20" },
  income_volatility: { Icon: TrendingDown, liBar: "border-l-red-400", iconWrap: "bg-red-500/12 text-red-900 ring-red-500/20" },
  flexibility_tradeoff: { Icon: Scale, liBar: "border-l-slate-500", iconWrap: "bg-slate-500/12 text-slate-800 ring-slate-500/20" },
};

type MoneyLineCategory = NonNullable<MoneyBreakdownLine["category"]>;

const MONEY_LINE_UI: Record<MoneyLineCategory, { Icon: LucideIcon; iconWrap: string }> = {
  gross: { Icon: Coins, iconWrap: "bg-slate-500/12 text-slate-800 ring-slate-500/20" },
  benefit: { Icon: Gift, iconWrap: "bg-rose-500/12 text-rose-900 ring-rose-500/20" },
  pension: { Icon: PiggyBank, iconWrap: "bg-violet-500/12 text-violet-900 ring-violet-500/20" },
  insurance: { Icon: Shield, iconWrap: "bg-teal-500/12 text-teal-900 ring-teal-500/20" },
  admin: { Icon: ClipboardList, iconWrap: "bg-indigo-500/12 text-indigo-900 ring-indigo-500/20" },
  tax: { Icon: Receipt, iconWrap: "bg-orange-500/12 text-orange-950 ring-orange-500/20" },
  adjustment: { Icon: SlidersHorizontal, iconWrap: "bg-amber-500/12 text-amber-950 ring-amber-500/20" },
  net: { Icon: Wallet, iconWrap: "bg-emerald-500/14 text-emerald-900 ring-emerald-500/30" },
};

function moneyLineRowUi(line: MoneyBreakdownLine): { Icon: LucideIcon; iconWrap: string; isNet: boolean } {
  const cat = line.category;
  if (cat && MONEY_LINE_UI[cat]) {
    return { ...MONEY_LINE_UI[cat], isNet: cat === "net" };
  }
  if (line.amountAnnual < 0) {
    return { Icon: Receipt, iconWrap: "bg-orange-500/12 text-orange-950 ring-orange-500/20", isNet: false };
  }
  return { Icon: Coins, iconWrap: "bg-slate-500/12 text-slate-800 ring-slate-500/20", isNet: false };
}

function moneyAmountClass(line: MoneyBreakdownLine): string {
  if (line.category === "net") {
    return "text-base font-bold tabular-nums text-emerald-800 dark:text-emerald-200";
  }
  if (line.amountAnnual < 0) {
    return "font-semibold tabular-nums text-red-700 dark:text-red-300";
  }
  return "font-semibold tabular-nums text-copilot-text-primary";
}

function scenarioOptionLabel(id: EmploymentScenarioId): string {
  return SCENARIO_OPTIONS.find((o) => o.value === id)?.label ?? id;
}

function prioritySliderTier(value: number): "Low" | "Medium" | "High" {
  if (value <= 33) return "Low";
  if (value <= 66) return "Medium";
  return "High";
}

function ColumnBestTag({ label }: { label: string }) {
  return (
    <span className="ml-1 inline-flex max-w-[5rem] flex-wrap items-center justify-center rounded bg-emerald-500/15 px-1 py-0.5 text-[9px] font-bold uppercase leading-tight text-emerald-900 ring-1 ring-emerald-500/25 dark:text-emerald-100">
      {label}
    </span>
  );
}

/** Stable fingerprint for “inputs changed since last Calculate?” (matches URL param encoding). */
function scenarioInputFingerprint(inp: EmploymentTypeScenarioInput): string {
  return encodeEmploymentTypeScenarioParam(sanitizeEmploymentTypeScenarioInput(inp));
}

function SectionCard({
  title,
  id,
  description,
  children,
}: {
  title: string;
  id?: string;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:scroll-mt-32 md:p-5"
    >
      <h3 className="text-xs font-semibold uppercase tracking-wide text-copilot-primary">{title}</h3>
      {description ? <div className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{description}</div> : null}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function triOptions<T extends string>(name: string, value: T, onChange: (v: T) => void, opts: { value: T; label: string }[]) {
  return (
    <SegmentedControl
      name={name}
      className="mt-2"
      pillTone="copilot"
      value={value}
      onChange={(v) => onChange(v as T)}
      options={opts.map((o) => ({ value: o.value, label: o.label }))}
    />
  );
}

export function EmploymentTypeScenarioClient({
  calculatorCanonicalUrl,
  pageContext,
}: {
  calculatorCanonicalUrl: string;
  pageContext: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const formId = useId();
  const [input, setInput] = useState<EmploymentTypeScenarioInput>(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT);
  const [debouncedInput, setDebouncedInput] = useState<EmploymentTypeScenarioInput>(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT);
  const [hydrated, setHydrated] = useState(false);
  /** Fingerprint of inputs right after hydration (or after Reset). Preview stays hidden until user changes something vs this baseline. */
  const [previewBaselineFingerprint, setPreviewBaselineFingerprint] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [lastRun, setLastRun] = useState<EmploymentTypeScenarioInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [exportNotes, setExportNotes] = useState("");
  const openedRef = useRef(false);
  const modeLoggedRef = useRef<string | null>(null);
  const priorityTimerRef = useRef<number | null>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);
  const cancelCalcRunRef = useRef<null | (() => void)>(null);

  const comparePairInvalid = input.toolMode === "compare_two" && input.compareScenarioA === input.compareScenarioB;

  const resetPrioritiesToDefaults = useCallback(() => {
    setInput((prev) =>
      sanitizeEmploymentTypeScenarioInput({
        ...prev,
        priorities: { ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities },
      })
    );
  }, []);

  const latestRef = useRef(input);
  useEffect(() => {
    latestRef.current = input;
  }, [input]);

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedInput(input), 400);
    return () => window.clearTimeout(t);
  }, [input]);

  useEffect(() => {
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const stored = loadEmploymentTypeScenarioFromStorage();
    const merged = mergeEmploymentTypeScenarioFromSources(sp, stored);
    const mergedSan = sanitizeEmploymentTypeScenarioInput(merged);
    setInput(merged);
    setDebouncedInput(merged);
    setPreviewBaselineFingerprint(scenarioInputFingerprint(mergedSan));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveEmploymentTypeScenarioToStorage(input);
    const t = window.setTimeout(() => {
      const params = employmentTypeScenarioToSearchParams(input);
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  useEffect(() => {
    if (!hydrated || openedRef.current) return;
    openedRef.current = true;
    trackEmploymentTypeScenarioTool("employment_type_tool_opened", { page_context: pageContext });
  }, [hydrated, pageContext]);

  useEffect(() => {
    if (!hydrated) return;
    if (modeLoggedRef.current === null) {
      modeLoggedRef.current = input.toolMode;
      return;
    }
    if (modeLoggedRef.current !== input.toolMode) {
      modeLoggedRef.current = input.toolMode;
      trackEmploymentTypeScenarioTool("employment_type_tool_mode_changed", {
        page_context: pageContext,
        mode: input.toolMode,
      });
    }
  }, [hydrated, input.toolMode, pageContext]);

  useEffect(() => {
    if (!hydrated) return;
    if (priorityTimerRef.current != null) window.clearTimeout(priorityTimerRef.current);
    priorityTimerRef.current = window.setTimeout(() => {
      trackEmploymentTypeScenarioTool("employment_type_tool_priority_changed", { page_context: pageContext });
    }, 900);
    return () => {
      if (priorityTimerRef.current != null) window.clearTimeout(priorityTimerRef.current);
    };
  }, [hydrated, input.priorities, pageContext]);

  useEffect(() => {
    return () => cancelCalcRunRef.current?.();
  }, []);

  const patch = useCallback((next: Partial<EmploymentTypeScenarioInput>) => {
    setInput((prev) => sanitizeEmploymentTypeScenarioInput({ ...prev, ...next }));
  }, []);

  const liveResult = useMemo(() => (lastRun ? calculateEmploymentTypeScenario(lastRun) : null), [lastRun]);

  const previewSanitized = useMemo(
    () => (hydrated ? sanitizeEmploymentTypeScenarioInput(debouncedInput) : null),
    [hydrated, debouncedInput]
  );
  const previewResult = useMemo(
    () => (previewSanitized ? calculateEmploymentTypeScenario(previewSanitized) : null),
    [previewSanitized]
  );
  const previewNarrative = useMemo(
    () => (previewSanitized && previewResult ? buildPreviewNarrative(previewSanitized, previewResult) : null),
    [previewSanitized, previewResult]
  );

  const currentInputFingerprint = useMemo(
    () => (hydrated ? scenarioInputFingerprint(sanitizeEmploymentTypeScenarioInput(input)) : null),
    [hydrated, input]
  );
  const showEarlyPreview =
    Boolean(previewNarrative && previewResult) &&
    previewBaselineFingerprint !== null &&
    currentInputFingerprint !== null &&
    currentInputFingerprint !== previewBaselineFingerprint;

  const closenessForRefine = previewResult?.insights.closeness ?? liveResult?.insights.closeness ?? null;
  const showAdvancedRefinement =
    closenessForRefine !== null && shouldShowAdvancedRefinementPrompt(input, closenessForRefine);

  const lensWinnerByKey = useMemo(() => {
    if (!liveResult) return {} as Record<string, string>;
    return Object.fromEntries(liveResult.insights.decisionLenses.map((l) => [l.key, l.winnerId]));
  }, [liveResult]);

  const bestNetScenarioId = useMemo(() => {
    if (!liveResult?.scenarios.length) return null;
    return liveResult.scenarios.reduce((a, b) => (a.money.estimatedNetAnnual >= b.money.estimatedNetAnnual ? a : b)).scenarioId;
  }, [liveResult]);
  const bestScenarioSummary = useMemo(() => {
    if (!liveResult) return null;
    const row = liveResult.scenarios.find((s) => s.scenarioId === liveResult.bestFitId);
    if (!row) return null;
    return {
      row,
      deductionsAnnual: sumAnnualPlanningDeductions(row.money.lines),
      overall: Math.round(row.scores.overall),
    };
  }, [liveResult]);
  const questions = useMemo(
    () => (lastRun && liveResult ? buildDynamicQuestions(lastRun, liveResult) : []),
    [lastRun, liveResult]
  );

  const resultsStale =
    hasRun && lastRun !== null && scenarioInputFingerprint(input) !== scenarioInputFingerprint(lastRun);

  const handleRun = useCallback(() => {
    if (isCalculating || comparePairInvalid) return;
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;

    setIsCalculating(true);
    setProgressPct(0);

    window.requestAnimationFrame(() => {
      document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);

      const snap = sanitizeEmploymentTypeScenarioInput({ ...latestRef.current });
      setLastRun(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);

      trackEmploymentTypeScenarioTool("employment_type_tool_calculated", {
        page_context: pageContext,
        mode: snap.toolMode,
        scenarios: snap.toolMode === "compare_two" ? [snap.compareScenarioA, snap.compareScenarioB] : "all",
      });
      window.requestAnimationFrame(() => {
        resultsHeadingRef.current?.focus({ preventScroll: true });
      });
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isCalculating, comparePairInvalid, pageContext]);

  const copyShare = useCallback(async () => {
    const params = employmentTypeScenarioToSearchParams(input).toString();
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}${params ? `?${params}` : ""}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied — paste to share this scenario.");
    } catch {
      setShareMessage("Could not copy automatically. Use your browser URL.");
    }
    window.setTimeout(() => setShareMessage(null), 3000);
  }, [input, pathname]);

  const reset = useCallback(() => {
    setIsCalculating(false);
    const fresh = sanitizeEmploymentTypeScenarioInput(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT);
    setInput(fresh);
    setDebouncedInput(fresh);
    setPreviewBaselineFingerprint(scenarioInputFingerprint(fresh));
    setHasRun(false);
    setLastRun(null);
    setExportNotes("");
    clearEmploymentTypeScenarioStorage();
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const downloadHtml = useCallback(() => {
    if (!liveResult || !lastRun) return;
    downloadEmploymentTypeScenarioHtml({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning-only comparison — not legal, tax, payroll, or immigration advice. Verify money, permits, and contracts with qualified professionals.",
      input: lastRun,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
    trackEmploymentTypeScenarioTool("employment_type_tool_export_downloaded", {
      page_context: pageContext,
      format: "html",
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRun, liveResult, pageContext]);

  const printSummary = useCallback(() => {
    if (!liveResult || !lastRun) return;
    openPrintEmploymentTypeScenarioSummary({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning-only comparison — not legal, tax, payroll, or immigration advice. Verify money, permits, and contracts with qualified professionals.",
      input: lastRun,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
    trackEmploymentTypeScenarioTool("employment_type_tool_export_downloaded", {
      page_context: pageContext,
      format: "print",
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRun, liveResult, pageContext]);

  if (!hydrated) {
    return (
      <div
        className="space-y-4 py-2"
        aria-busy="true"
        aria-label="Loading employment type scenario tool"
      >
        <div className="h-4 w-48 animate-pulse rounded-md bg-copilot-primary/10" />
        <div className="h-32 animate-pulse rounded-2xl bg-copilot-bg-soft ring-1 ring-copilot-primary/[0.06]" />
        <div className="h-48 animate-pulse rounded-2xl bg-copilot-bg-soft ring-1 ring-copilot-primary/[0.06]" />
        <p className="text-sm text-copilot-text-secondary">Restoring your inputs…</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div
        className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 ring-1 ring-copilot-primary/[0.05] md:p-5"
        role="region"
        aria-label="How to use this tool"
      >
        <p className="text-sm font-semibold text-copilot-text-primary">How to run a comparison</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          <li>Set context and pay (employee gross, contractor day rate, or ZZP revenue).</li>
          <li>
            Adjust <Link href="#priority-weights" className="font-medium text-copilot-primary hover:underline">priority sliders</Link>{" "}
            if one dimension (e.g. sponsorship or stability) should matter more than the default blend.
          </li>
          <li>
            Use <span className="font-medium text-copilot-text-primary">Advanced assumptions</span> for umbrella fees, insurance, and
            foreign employer — these often hide the real gap between offers.
          </li>
          <li>
            Tap <span className="font-medium text-copilot-text-primary">Calculate</span> to run the model (about 1–2 seconds), then review
            scores, money lines, and export.
          </li>
        </ol>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={copyShare}>
          Copy share link
        </Button>
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={reset}>
          Reset defaults
        </Button>
        {shareMessage ? (
          <p className="text-sm text-copilot-text-secondary" role="status">
            {shareMessage}
          </p>
        ) : null}
      </div>

      <div id="tool-inputs" className="scroll-mt-28 space-y-5 md:scroll-mt-32">
        {showEarlyPreview ? (
          <EmploymentEarlyPreviewCard
            formId={formId}
            topLabel={
              previewNarrative.confidence === "low" && previewNarrative.reasons.length === 0
                ? null
                : previewResult.scenarios.find((s) => s.scenarioId === previewResult.bestFitId)?.shortLabel ?? null
            }
            topScenarioId={
              previewNarrative.confidence === "low" && previewNarrative.reasons.length === 0 ? null : previewResult.bestFitId
            }
            confidence={previewNarrative.confidence}
            reasons={previewNarrative.reasons}
            improvementHint={previewNarrative.improvementHint}
          />
        ) : null}

        <SectionCard
          title="Tool mode"
          id="tool-mode"
          description="Compare every work type we model, or isolate two offers (e.g. permanent vs ZZP) for a focused A/B readout."
        >
          <div>
            <p className={FIELD_LABEL}>How do you want to compare?</p>
            <SegmentedControl
              name={`${formId}-mode`}
              className="mt-2"
              pillTone="copilot"
              value={input.toolMode}
              onChange={(v) => patch({ toolMode: v as EmploymentTypeScenarioInput["toolMode"] })}
              options={[
                { value: "recommend", label: "Compare work types for me" },
                { value: "compare_two", label: "Compare two specific scenarios" },
              ]}
            />
          </div>
          {input.toolMode === "compare_two" ? (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-a`}>
                  Scenario A
                </label>
                <select
                  id={`${formId}-a`}
                  className={SELECT_CLASS}
                  value={input.compareScenarioA}
                  onChange={(e) => patch({ compareScenarioA: e.target.value as EmploymentScenarioId })}
                >
                  {SCENARIO_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-b`}>
                  Scenario B
                </label>
                <select
                  id={`${formId}-b`}
                  className={SELECT_CLASS}
                  value={input.compareScenarioB}
                  onChange={(e) => patch({ compareScenarioB: e.target.value as EmploymentScenarioId })}
                >
                  {SCENARIO_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
          {comparePairInvalid ? (
            <InfoBox title="Choose two different scenarios" variant="warn">
              <p className="text-sm text-copilot-text-secondary">
                Scenario A and B are the same — pick two distinct structures to see gaps in money, security, admin, and expat fit.
              </p>
            </InfoBox>
          ) : null}
        </SectionCard>

        <div id="core-inputs" className="space-y-5">
          <SectionCard
            title="A. Your context"
            description="Visa and stability answers feed expat-fit and security scores — they are as important as the pay fields for many moves."
          >
            <div>
              <p className={FIELD_LABEL}>Already living in the Netherlands?</p>
              {triOptions(`${formId}-res`, input.residence, (v) => patch({ residence: v }), [
                { value: "already_nl", label: "Yes" },
                { value: "moving_nl", label: "Moving" },
              ])}
            </div>
            <div>
              <p className={FIELD_LABEL}>Need visa sponsorship / immigration simplicity?</p>
              {triOptions(`${formId}-visa`, input.visaSponsorship, (v) => patch({ visaSponsorship: v }), [
                { value: "yes", label: "Yes" },
                { value: "maybe", label: "Maybe" },
                { value: "no", label: "No" },
              ])}
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">
                “Yes” increases the weight of employment-friendly narratives in expat-fit scoring. This is not IND advice — confirm permits
                with counsel.
              </p>
              {input.visaSponsorship === "yes" ? (
                <div className="mt-3">
                  <InfoBox title="Sponsorship lens" variant="info">
                    <p className="text-sm text-slate-700">
                      For many skilled-migrant-style routes, a Dutch payroll role with a recognised sponsor is the clearest story. ZZP and
                      foreign-employer setups can still work for some people — watch immigration and tax flags in results.
                    </p>
                  </InfoBox>
                </div>
              ) : null}
            </div>
            <div>
              <label className={FIELD_LABEL} htmlFor={`${formId}-industry`}>
                Work / industry context
              </label>
              <select
                id={`${formId}-industry`}
                className={SELECT_CLASS}
                value={input.industryContext}
                onChange={(e) => patch({ industryContext: e.target.value as EmploymentTypeScenarioInput["industryContext"] })}
              >
                <option value="office">Office / corporate</option>
                <option value="tech_knowledge">Tech / knowledge work</option>
                <option value="freelance_consulting">Freelance / consulting</option>
                <option value="project_contract">Project / contract work</option>
                <option value="mixed">Mixed / other</option>
              </select>
            </div>
            <div>
              <p className={FIELD_LABEL}>Expected work stability</p>
              {triOptions(`${formId}-stab`, input.workStabilityExpectation, (v) => patch({ workStabilityExpectation: v }), [
                { value: "stable_long", label: "Stable long-term" },
                { value: "medium", label: "Medium certainty" },
                { value: "uncertain_project", label: "Uncertain / project" },
              ])}
            </div>
          </SectionCard>

          <SectionCard
            title="B. Income assumptions"
            description="Use numbers you would put in an offer letter or rate card. Contractor and ZZP fields power hidden-cost lines (utilization, umbrella fees, downtime)."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-gross-m`}>
                  Expected gross monthly (employee)
                </label>
                <Input
                  id={`${formId}-gross-m`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.employeeGrossMonthly || ""}
                  onChange={(e) => patch({ employeeGrossMonthly: Number(e.target.value) || 0 })}
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-gross-a`}>
                  Or gross annual (employee)
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`${formId}-use-annual`}
                    checked={input.employeeUseAnnual}
                    onChange={(e) => patch({ employeeUseAnnual: e.target.checked })}
                    className="h-4 w-4 rounded border-copilot-primary/30"
                  />
                  <label htmlFor={`${formId}-use-annual`} className="text-sm text-copilot-text-secondary">
                    Use annual figure
                  </label>
                </div>
                <Input
                  id={`${formId}-gross-a`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.employeeGrossAnnual || ""}
                  onChange={(e) => patch({ employeeGrossAnnual: Number(e.target.value) || 0 })}
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-cd`}>
                  Contractor day rate (€ / day)
                </label>
                <Input
                  id={`${formId}-cd`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.contractorDayRate || ""}
                  onChange={(e) => patch({ contractorDayRate: Number(e.target.value) || 0 })}
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-cm`}>
                  Or contractor monthly (€)
                </label>
                <Input
                  id={`${formId}-cm`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.contractorMonthlyEquivalent || ""}
                  onChange={(e) => patch({ contractorMonthlyEquivalent: Number(e.target.value) || 0 })}
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-zd`}>
                  ZZP day rate (€ / day)
                </label>
                <Input
                  id={`${formId}-zd`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.zzpDayRate || ""}
                  onChange={(e) => patch({ zzpDayRate: Number(e.target.value) || 0 })}
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-zm`}>
                  Or ZZP monthly revenue (€)
                </label>
                <Input
                  id={`${formId}-zm`}
                  type="number"
                  min={0}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                  value={input.zzpMonthlyRevenue || ""}
                  onChange={(e) => patch({ zzpMonthlyRevenue: Number(e.target.value) || 0 })}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.bonusExpected}
                  onChange={(e) => patch({ bonusExpected: e.target.checked })}
                  className="h-4 w-4 rounded border-copilot-primary/30"
                />
                Bonus / variable pay
              </label>
              <label className="flex items-center gap-2 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.includeHolidayAllowance}
                  onChange={(e) => patch({ includeHolidayAllowance: e.target.checked })}
                  className="h-4 w-4 rounded border-copilot-primary/30"
                />
                Include holiday allowance (employee)
              </label>
            </div>
            {input.bonusExpected ? (
              <div>
                <label className={FIELD_LABEL} htmlFor={`${formId}-bonus`}>
                  Bonus annual (gross €)
                </label>
                <Input
                  id={`${formId}-bonus`}
                  type="number"
                  min={0}
                  className="mt-1.5 max-w-xs border-copilot-primary/15 bg-copilot-surface"
                  value={input.bonusAnnualAmount || ""}
                  onChange={(e) => patch({ bonusAnnualAmount: Number(e.target.value) || 0 })}
                />
              </div>
            ) : null}
            <div>
              <p className={FIELD_LABEL}>30% ruling planning assumption</p>
              {triOptions(`${formId}-ruling`, input.rulingAssumption, (v) => patch({ rulingAssumption: v }), [
                { value: "no", label: "No" },
                { value: "maybe", label: "Maybe" },
                { value: "yes", label: "Yes" },
              ])}
              <p className="mt-2 text-xs text-copilot-text-secondary">
                Planning only — confirm with the{" "}
                <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                  30% ruling calculator
                </Link>
                .
              </p>
            </div>
          </SectionCard>

          <SectionCard
            title="C. Priorities"
            id="priority-weights"
            description="Tell the tool what should weigh more in the ranking — not a score on you. We normalize sliders so the blend stays comparable. Check the comparison table for raw dimension numbers."
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-copilot-text-secondary">
                Each slider also shows a plain-language band (Low / Medium / High) so you are not staring at naked numbers alone.
              </p>
              <Button
                type="button"
                variant="secondary"
                className="min-h-10 shrink-0 border-copilot-primary/20 text-sm"
                onClick={resetPrioritiesToDefaults}
              >
                Reset sliders to balanced defaults
              </Button>
            </div>
            <div className="space-y-5">
              {PRIORITY_META.map((p) => {
                const hintId = `${formId}-ph-${p.key}`;
                const v = input.priorities[p.key];
                const tier = prioritySliderTier(v);
                return (
                  <div key={p.key}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <label className={`${FIELD_LABEL} font-normal`} htmlFor={`${formId}-p-${p.key}`} aria-describedby={hintId}>
                        {p.label}
                      </label>
                      <div className="flex items-center gap-2 text-sm text-copilot-text-secondary" aria-live="polite">
                        <span className="rounded-md bg-copilot-primary/10 px-2 py-0.5 text-xs font-semibold text-copilot-primary">
                          {tier}
                        </span>
                        <span className="tabular-nums">{v}/100</span>
                      </div>
                    </div>
                    <input
                      id={`${formId}-p-${p.key}`}
                      type="range"
                      min={0}
                      max={100}
                      value={v}
                      onChange={(e) =>
                        patch({
                          priorities: { ...input.priorities, [p.key]: Number(e.target.value) },
                        })
                      }
                      className="mt-2 w-full accent-copilot-primary"
                      aria-valuetext={`${tier}, ${v} out of 100`}
                      aria-describedby={hintId}
                    />
                    <p id={hintId} className="mt-1.5 text-xs leading-relaxed text-copilot-text-secondary">
                      {p.hint}
                    </p>
                  </div>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard
            title="D. Benefits & protections"
            description="Toggles steer benefits scores and some risk notes — they do not change gross pay unless you add amounts in Advanced."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className={FIELD_LABEL}>Pension in employee package?</p>
                {triOptions(`${formId}-penpkg`, input.pensionInPackage, (v) => patch({ pensionInPackage: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "not_sure", label: "Not sure" },
                ])}
              </div>
              <div>
                <p className={FIELD_LABEL}>Paid sick leave relevant?</p>
                {triOptions(`${formId}-sick`, input.paidSickLeaveRelevant, (v) => patch({ paidSickLeaveRelevant: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ])}
              </div>
              <div>
                <p className={FIELD_LABEL}>Paid holiday relevant?</p>
                {triOptions(`${formId}-hol`, input.paidHolidayRelevant, (v) => patch({ paidHolidayRelevant: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ])}
              </div>
              <div>
                <p className={FIELD_LABEL}>Travel / expenses allowance?</p>
                {triOptions(`${formId}-trav`, input.travelAllowance, (v) => patch({ travelAllowance: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ])}
              </div>
              <div>
                <p className={FIELD_LABEL}>Training / employer benefits?</p>
                {triOptions(`${formId}-train`, input.trainingBenefits, (v) => patch({ trainingBenefits: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ])}
              </div>
              <div>
                <p className={FIELD_LABEL}>Insurance self-arranged if independent?</p>
                {triOptions(`${formId}-ins`, input.insuranceSelfArrangedIndependent, (v) => patch({ insuranceSelfArrangedIndependent: v }), [
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ])}
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="E. Work model reality"
            description="Utilization and downtime shrink ZZP/contractor revenue before tax — this is where headline day rates often break."
          >
            <div>
              <p className={FIELD_LABEL}>Unpaid downtime if self-employed</p>
              {triOptions(`${formId}-down`, input.unpaidDowntime, (v) => patch({ unpaidDowntime: v }), [
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ])}
            </div>
            <div>
              <p className={FIELD_LABEL}>Billable utilization (ZZP / contractor)</p>
              <SegmentedControl
                name={`${formId}-util`}
                className="mt-2"
                pillTone="copilot"
                value={input.billablePreset}
                onChange={(v) => patch({ billablePreset: v as EmploymentTypeScenarioInput["billablePreset"] })}
                options={[
                  { value: "100", label: "100%" },
                  { value: "85", label: "85%" },
                  { value: "70", label: "70%" },
                  { value: "custom", label: "Custom" },
                ]}
              />
              {input.billablePreset === "custom" ? (
                <div className="mt-3">
                  <label className={FIELD_LABEL} htmlFor={`${formId}-utilc`}>
                    Custom utilization %
                  </label>
                  <Input
                    id={`${formId}-utilc`}
                    type="number"
                    min={30}
                    max={100}
                    className="mt-1.5 max-w-xs border-copilot-primary/15 bg-copilot-surface"
                    value={input.billableUtilizationCustom}
                    onChange={(e) => patch({ billableUtilizationCustom: Number(e.target.value) || 80 })}
                  />
                </div>
              ) : null}
            </div>
            <div>
              <p className={FIELD_LABEL}>Model admin / accounting costs?</p>
              {triOptions(`${formId}-adm`, input.modelAdminAccountingCosts, (v) => patch({ modelAdminAccountingCosts: v }), [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ])}
            </div>
            <div>
              <p className={FIELD_LABEL}>Heavily weight visa / sponsor friendliness?</p>
              {triOptions(`${formId}-vf`, input.visaFriendlinessHeavyWeight, (v) => patch({ visaFriendlinessHeavyWeight: v }), [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ])}
            </div>
          </SectionCard>
        </div>

        <div id="advanced-assumptions">
          <CollapsiblePanel
            title="Advanced assumptions"
            defaultOpen={false}
            className="border-copilot-primary/12 bg-copilot-surface/80"
            titleClassName="text-sm font-semibold text-copilot-text-primary"
            triggerClassName="cursor-pointer rounded-t-xl text-copilot-text-primary hover:bg-copilot-bg-soft/80"
          >
            <p className="pb-2 text-xs leading-relaxed text-copilot-text-secondary">
              Umbrella %, insurance, pension reserve, and commute cash effects flow into the money breakdown — open this when two offers
              look close on gross.
            </p>
            <EmploymentAdvancedRefinementPrompt
              show={showAdvancedRefinement}
              isClose={Boolean(closenessForRefine?.isClose)}
              flagDefaults={Boolean(closenessForRefine?.flagDefaultUtilizationOrUmbrella)}
              className="mb-3"
            />
            <div className="space-y-4 text-copilot-text-primary">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-acc`}>
                    Accountant / bookkeeping (€ / month)
                  </label>
                  <Input
                    id={`${formId}-acc`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.accountantMonthly}
                    onChange={(e) => patch({ accountantMonthly: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-liab`}>
                    Liability insurance (€ / month)
                  </label>
                  <Input
                    id={`${formId}-liab`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.liabilityInsuranceMonthly}
                    onChange={(e) => patch({ liabilityInsuranceMonthly: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-dis`}>
                    Disability / income protection (€ / month)
                  </label>
                  <Input
                    id={`${formId}-dis`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.disabilityInsuranceMonthly}
                    onChange={(e) => patch({ disabilityInsuranceMonthly: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-pen`}>
                    Pension reserve % of revenue (ZZP planning)
                  </label>
                  <Input
                    id={`${formId}-pen`}
                    type="number"
                    min={0}
                    max={40}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.pensionReservePercent}
                    onChange={(e) => patch({ pensionReservePercent: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-unpaid`}>
                    Manual unpaid leave / downtime % (optional override)
                  </label>
                  <Input
                    id={`${formId}-unpaid`}
                    type="number"
                    min={0}
                    max={80}
                    placeholder="Auto from level"
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.unpaidLeavePercentOverride ?? ""}
                    onChange={(e) =>
                      patch({
                        unpaidLeavePercentOverride: e.target.value === "" ? null : Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-cash`}>
                    Delayed payment reserve (months)
                  </label>
                  <Input
                    id={`${formId}-cash`}
                    type="number"
                    min={0}
                    max={12}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.delayedPaymentReserveMonths}
                    onChange={(e) => patch({ delayedPaymentReserveMonths: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-eq`}>
                    Employer equipment / setup (€ / year)
                  </label>
                  <Input
                    id={`${formId}-eq`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.employerEquipmentAnnual}
                    onChange={(e) => patch({ employerEquipmentAnnual: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-comm`}>
                    Commute impact (€ / month)
                  </label>
                  <Input
                    id={`${formId}-comm`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.commuteImpactMonthly}
                    onChange={(e) => patch({ commuteImpactMonthly: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <p className={FIELD_LABEL}>Contract gap risk</p>
                  {triOptions(`${formId}-gap`, input.contractGapRisk, (v) => patch({ contractGapRisk: v }), [
                    { value: "low", label: "Low" },
                    { value: "medium", label: "Medium" },
                    { value: "high", label: "High" },
                  ])}
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-umbm`}>
                    Umbrella admin (€ / month)
                  </label>
                  <Input
                    id={`${formId}-umbm`}
                    type="number"
                    min={0}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.umbrellaAdminMonthly}
                    onChange={(e) => patch({ umbrellaAdminMonthly: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label className={FIELD_LABEL} htmlFor={`${formId}-umbp`}>
                    Umbrella admin (% of revenue)
                  </label>
                  <Input
                    id={`${formId}-umbp`}
                    type="number"
                    min={0}
                    max={35}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={input.umbrellaAdminPercent}
                    onChange={(e) => patch({ umbrellaAdminPercent: Number(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={input.includeForeignRemoteScenario}
                  onChange={(e) => patch({ includeForeignRemoteScenario: e.target.checked })}
                  className="h-4 w-4 rounded border-copilot-primary/30"
                />
                Include foreign employer (remote) scenario in “compare all” mode
              </label>
            </div>
          </CollapsiblePanel>
        </div>

        <Button
          type="button"
          className="min-h-11 w-full sm:w-auto"
          onClick={handleRun}
          disabled={isCalculating || comparePairInvalid}
          aria-busy={isCalculating}
        >
          {isCalculating ? "Calculating…" : hasRun ? "Calculate again" : "Calculate"}
        </Button>
        {comparePairInvalid ? (
          <p className="text-xs text-amber-800" role="status">
            Select two different scenarios to enable the comparison button.
          </p>
        ) : null}
      </div>

      <div id="tool-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading message="Comparing employment scenarios…" variant="copilot" />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/15" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {!isCalculating && !hasRun ? (
          <InfoBox title="Ready when you are" variant="info">
            <p className="text-sm text-slate-700">
              Enter your context, pay, and priority sliders above, then click <strong>Calculate</strong>. Results usually appear after
              about one to two seconds, with ranked scenarios, money breakdown, and export options.
            </p>
          </InfoBox>
        ) : null}

        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed" variant="info">
            <p className="text-sm text-slate-700">
              The results below reflect your <strong>last</strong> calculation. Click <strong>Calculate again</strong> to refresh with your
              current inputs.
            </p>
          </InfoBox>
        ) : null}

        {hasRun && liveResult && lastRun ? (
          <div className="space-y-10">
          <section id="results-summary" className="scroll-mt-28 md:scroll-mt-32">
            <h2
              ref={resultsHeadingRef}
              tabIndex={-1}
              className="rounded-md text-lg font-semibold text-copilot-text-primary outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35 focus-visible:ring-offset-2"
            >
              Results summary
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
              Rankings reflect your priority sliders — not a single “correct” career choice. Use the comparison table for side-by-side
              numbers; open “explain scores” under each scenario for plain-language drivers.
            </p>

            {lastRun.toolMode === "compare_two" ? (
              <div className="mt-4 rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/60 p-4 ring-1 ring-copilot-primary/[0.06]">
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-primary">Head-to-head</p>
                <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                  <span className="font-medium text-copilot-text-primary">{scenarioOptionLabel(lastRun.compareScenarioA)}</span>
                  {" vs "}
                  <span className="font-medium text-copilot-text-primary">{scenarioOptionLabel(lastRun.compareScenarioB)}</span>
                  {" — "}
                  higher overall fit on this pass:{" "}
                  <span className="font-semibold text-copilot-text-primary">{bestScenarioSummary?.row.shortLabel ?? "—"}</span>
                  {bestScenarioSummary ? (
                    <span className="tabular-nums text-copilot-text-secondary"> ({bestScenarioSummary.overall} / 100 overall)</span>
                  ) : null}
                  .
                </p>
              </div>
            ) : null}

            <div className="mt-4 space-y-4">
              <div className="rounded-3xl border-2 border-copilot-primary/20 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/30 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.1] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Top match for your priorities</p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-copilot-text-primary sm:text-3xl">
                      {bestScenarioSummary?.row.shortLabel ?? "—"}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-copilot-text-secondary">{liveResult.summary.headline}</p>
                    <p className="mt-1 text-sm font-medium text-copilot-text-primary">{liveResult.summary.bestFitLabel}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-copilot-text-secondary">
                      {liveResult.insights.narrative.personalizedLead}
                    </p>
                  </div>
                  {bestScenarioSummary ? (
                    <div className="shrink-0 rounded-2xl border border-copilot-primary/15 bg-white/90 px-5 py-4 text-center shadow-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-copilot-text-secondary">Overall</p>
                      <p className="text-3xl font-bold tabular-nums text-copilot-primary">{bestScenarioSummary.overall}</p>
                      <p className="text-[10px] text-copilot-text-secondary">/ 100 weighted</p>
                    </div>
                  ) : null}
                </div>
                {bestScenarioSummary && bestScenarioSummary.deductionsAnnual > 0 ? (
                  <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/90 p-3 text-sm text-amber-950">
                    <p className="font-semibold">Hidden costs in this model (before net)</p>
                    <p className="mt-1 text-xs leading-relaxed">
                      ≈ {formatEur(bestScenarioSummary.deductionsAnnual)} / year in fees, estimated tax and social proxies, utilization
                      haircuts, and similar — see the cross-scenario view in{" "}
                      <Link href="#where-money-goes" className="font-semibold text-amber-900 underline hover:no-underline">
                        Where the money goes
                      </Link>{" "}
                      and line items in{" "}
                      <Link href="#money-breakdown" className="font-semibold text-amber-900 underline hover:no-underline">
                        Money breakdown
                      </Link>
                      .
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Est. net</p>
                  <p className="mt-2 text-lg font-semibold tabular-nums text-copilot-text-primary">
                    {formatEur(bestScenarioSummary?.row.money.estimatedNetAnnual ?? 0)}
                    <span className="block text-xs font-normal text-copilot-text-secondary">Planning € / year</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Stability</p>
                  <p className="mt-2 text-lg font-semibold tabular-nums text-copilot-text-primary">
                    {Math.round(bestScenarioSummary?.row.scores.stability ?? 0)}
                    <span className="text-sm font-normal text-copilot-text-secondary"> / 100</span>
                  </p>
                  <p className="mt-1 text-[11px] text-copilot-text-secondary">Job security & predictability</p>
                </div>
                <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Flexibility</p>
                  <p className="mt-2 text-lg font-semibold tabular-nums text-copilot-text-primary">
                    {Math.round(bestScenarioSummary?.row.scores.flexibility ?? 0)}
                    <span className="text-sm font-normal text-copilot-text-secondary"> / 100</span>
                  </p>
                  <p className="mt-1 text-[11px] text-copilot-text-secondary">Independence in how you work</p>
                </div>
                <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Admin</p>
                  <p className="mt-2 text-lg font-semibold tabular-nums text-copilot-text-primary">
                    {Math.round(bestScenarioSummary?.row.scores.adminSimplicity ?? 0)}
                    <span className="text-sm font-normal text-copilot-text-secondary"> / 100</span>
                  </p>
                  <p className="mt-1 text-[11px] text-copilot-text-secondary">Higher = less paperwork burden</p>
                </div>
                <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Expat / sponsor fit</p>
                  <p className="mt-2 text-lg font-semibold tabular-nums text-copilot-text-primary">
                    {Math.round(bestScenarioSummary?.row.scores.immigrationFit ?? 0)}
                    <span className="text-sm font-normal text-copilot-text-secondary"> / 100</span>
                  </p>
                  <p className="mt-1 text-[11px] text-copilot-text-secondary">Permit & payroll story (not IND approval)</p>
                </div>
              </div>
            </div>

            {lastRun.toolMode === "recommend" && liveResult.runnerUpId ? (
              <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary">
                <p className="font-semibold text-copilot-text-primary">Runner-up</p>
                <p className="mt-1">
                  {liveResult.scenarios.find((s) => s.scenarioId === liveResult.runnerUpId)?.shortLabel} — still worth a second look if
                  one dimension matters more than the blended score.
                </p>
              </div>
            ) : null}

            {lastRun.toolMode === "compare_two" ? (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm">
                  <p className="font-semibold text-copilot-text-primary">Biggest financial difference (annual, est.)</p>
                  <p className="mt-1 text-copilot-text-secondary">
                    ≈ {formatEur(liveResult.summary.biggestFinancialGapAnnual)} between top two on your inputs.
                  </p>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm">
                  <p className="font-semibold text-copilot-text-primary">Security / admin</p>
                  <p className="mt-1 text-copilot-text-secondary">{liveResult.summary.biggestSecurityAdminDelta}</p>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm md:col-span-2">
                  <p className="font-semibold text-copilot-text-primary">Immigration / expat angle</p>
                  <p className="mt-1 text-copilot-text-secondary">{liveResult.summary.biggestImmigrationDelta}</p>
                </div>
              </div>
            ) : null}

            <div className="mt-6 rounded-2xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm dark:bg-copilot-surface/40">
              <p className="text-sm font-semibold text-copilot-text-primary">What this likely means for you</p>
              <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{liveResult.insights.narrative.whatThisMeansForYou}</p>
              <p className="mt-3 text-sm text-copilot-text-secondary">{liveResult.summary.plainEnglish}</p>
              <p className="mt-3 text-sm font-semibold text-copilot-text-primary">Why it ranked first</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                {liveResult.insights.narrative.whyFirstBullets.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-copilot-text-secondary">
                <span className="font-semibold text-copilot-text-primary">Main trade-off: </span>
                {liveResult.insights.narrative.mainTradeOff}
              </p>
              <p className="mt-3 text-sm text-copilot-text-secondary">
                <span className="font-semibold text-copilot-text-primary">When this could change: </span>
                {liveResult.insights.narrative.whenRecommendationChanges}
              </p>
              {liveResult.insights.narrative.secondBestHint ? (
                <p className="mt-3 text-sm text-copilot-text-secondary">
                  <span className="font-semibold text-copilot-text-primary">Second-best angle: </span>
                  {liveResult.insights.narrative.secondBestHint}
                </p>
              ) : null}
            </div>
          </section>

          <EmploymentDecisionLensesGrid lenses={liveResult.insights.decisionLenses} />

          <EmploymentHiddenCostStory
            scenarioOrder={liveResult.rankedIds}
            labels={Object.fromEntries(liveResult.scenarios.map((s) => [s.scenarioId, s.shortLabel]))}
            buckets={liveResult.insights.costBucketsByScenario}
          />

          <section id="scenario-comparison" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Scenario comparison</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
              Each row is the same inputs interpreted through a different work structure. “Admin” is simplicity (higher = easier). “Expat”
              is sponsorship and cross-border practicality, not a visa decision.
            </p>
            <div className="mt-4 hidden overflow-x-auto md:block">
              <table className="w-full min-w-[780px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of employment scenarios with gross or revenue, estimated net, and dimension scores out of one hundred.
                </caption>
                <thead>
                  <tr className="border-b border-copilot-primary/15 bg-copilot-bg-soft/80">
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      Scenario
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      Gross / revenue
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Estimated indicative net per year after modeled costs">Est. net</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Security and income predictability, 0 to 100">Stability</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Independence and flexibility, 0 to 100">Flex</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Admin simplicity — higher means less paperwork burden">Admin</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Benefits and protections score, 0 to 100">Benefits</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      <abbr title="Expat and sponsorship practicality — not IND approval">Expat</abbr>
                    </th>
                    <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                      Overall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {liveResult.scenarios.map((s) => (
                    <tr
                      key={s.scenarioId}
                      className={cn(
                        "border-b border-copilot-primary/10",
                        s.scenarioId === liveResult.bestFitId && "bg-copilot-primary/[0.04]"
                      )}
                    >
                      <th scope="row" className="p-2 text-left font-medium text-copilot-text-primary">
                        {s.shortLabel}
                        {s.scenarioId === liveResult.bestFitId ? (
                          <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wide text-copilot-primary">Top</span>
                        ) : null}
                      </th>
                      <td className="p-2 text-copilot-text-secondary">{formatEur(s.money.grossOrRevenueAnnual)}</td>
                      <td
                        className="p-2 text-copilot-text-secondary"
                        aria-label={
                          bestNetScenarioId === s.scenarioId
                            ? `Estimated net ${formatEur(s.money.estimatedNetAnnual)}, highest net in this comparison`
                            : `Estimated net ${formatEur(s.money.estimatedNetAnnual)}`
                        }
                      >
                        {formatEur(s.money.estimatedNetAnnual)}
                        {bestNetScenarioId === s.scenarioId ? <ColumnBestTag label="Best net" /> : null}
                      </td>
                      <td
                        className="p-2 tabular-nums"
                        aria-label={`Stability ${Math.round(s.scores.stability)}${
                          lensWinnerByKey.stability === s.scenarioId ? ", best in column" : ""
                        }`}
                      >
                        {Math.round(s.scores.stability)}
                        {lensWinnerByKey.stability === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                      </td>
                      <td
                        className="p-2 tabular-nums"
                        aria-label={`Flexibility ${Math.round(s.scores.flexibility)}${
                          lensWinnerByKey.flexibility === s.scenarioId ? ", best in column" : ""
                        }`}
                      >
                        {Math.round(s.scores.flexibility)}
                        {lensWinnerByKey.flexibility === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                      </td>
                      <td
                        className="p-2 tabular-nums"
                        aria-label={`Admin simplicity ${Math.round(s.scores.adminSimplicity)}${
                          lensWinnerByKey.adminSimplicity === s.scenarioId ? ", best in column" : ""
                        }`}
                      >
                        {Math.round(s.scores.adminSimplicity)}
                        {lensWinnerByKey.adminSimplicity === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                      </td>
                      <td
                        className="p-2 tabular-nums"
                        aria-label={`Benefits ${Math.round(s.scores.benefits)}${
                          lensWinnerByKey.benefits === s.scenarioId ? ", best in column" : ""
                        }`}
                      >
                        {Math.round(s.scores.benefits)}
                        {lensWinnerByKey.benefits === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                      </td>
                      <td
                        className="p-2 tabular-nums"
                        aria-label={`Expat fit ${Math.round(s.scores.immigrationFit)}${
                          lensWinnerByKey.expatPracticality === s.scenarioId ? ", best in column" : ""
                        }`}
                      >
                        {Math.round(s.scores.immigrationFit)}
                        {lensWinnerByKey.expatPracticality === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                      </td>
                      <td className="p-2 font-semibold tabular-nums text-copilot-text-primary">{Math.round(s.scores.overall)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-3 md:hidden">
              {liveResult.scenarios.map((s) => (
                <article
                  key={s.scenarioId}
                  className={cn(
                    "rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm",
                    s.scenarioId === liveResult.bestFitId && "ring-2 ring-copilot-primary/25"
                  )}
                  aria-label={`${s.shortLabel}${s.scenarioId === liveResult.bestFitId ? ", top match" : ""}`}
                >
                  <p className="font-semibold text-copilot-text-primary">
                    {s.label}
                    {s.scenarioId === liveResult.bestFitId ? (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-copilot-primary">Top match</span>
                    ) : null}
                  </p>
                  <dl className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-copilot-text-secondary">
                    <dt>Gross / revenue</dt>
                    <dd className="text-right font-medium text-copilot-text-primary">{formatEur(s.money.grossOrRevenueAnnual)}</dd>
                    <dt>Est. net</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right font-medium text-copilot-text-primary">
                      {formatEur(s.money.estimatedNetAnnual)}
                      {bestNetScenarioId === s.scenarioId ? <ColumnBestTag label="Best net" /> : null}
                    </dd>
                    <dt>Stability</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right tabular-nums">
                      {Math.round(s.scores.stability)}
                      {lensWinnerByKey.stability === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                    </dd>
                    <dt>Flexibility</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right tabular-nums">
                      {Math.round(s.scores.flexibility)}
                      {lensWinnerByKey.flexibility === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                    </dd>
                    <dt>Admin</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right tabular-nums">
                      {Math.round(s.scores.adminSimplicity)}
                      {lensWinnerByKey.adminSimplicity === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                    </dd>
                    <dt>Benefits</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right tabular-nums">
                      {Math.round(s.scores.benefits)}
                      {lensWinnerByKey.benefits === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                    </dd>
                    <dt>Expat fit</dt>
                    <dd className="flex flex-wrap items-center justify-end gap-1 text-right tabular-nums">
                      {Math.round(s.scores.immigrationFit)}
                      {lensWinnerByKey.expatPracticality === s.scenarioId ? <ColumnBestTag label="Best" /> : null}
                    </dd>
                    <dt>Overall</dt>
                    <dd className="text-right font-semibold tabular-nums text-copilot-primary">{Math.round(s.scores.overall)}</dd>
                  </dl>
                </article>
              ))}
            </div>

            <section id="scenario-negative-fit" className="scroll-mt-28 mt-8 space-y-4 md:scroll-mt-32">
              <h3 className="text-base font-semibold text-copilot-text-primary">When each model is usually a poor fit</h3>
              <p className="max-w-3xl text-sm text-copilot-text-secondary">
                Practical downsides to sanity-check before you commit — not a judgement on people who choose these structures.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {liveResult.scenarios.map((s) => (
                  <article
                    key={s.scenarioId}
                    className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/40 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
                  >
                    <p className="text-sm font-semibold text-copilot-text-primary">{s.shortLabel}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-copilot-text-secondary">When this is usually a poor fit</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                      {(liveResult.insights.negativeFitByScenario[s.scenarioId] ?? []).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <div id="scoring-explanations" className="scroll-mt-28 mt-8 space-y-4 md:scroll-mt-32">
              <h3 className="text-base font-semibold text-copilot-text-primary">How scoring works</h3>
              <div className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 text-sm leading-relaxed text-copilot-text-secondary shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]">
                <p>
                  We compare each work model across <strong className="text-copilot-text-primary">money</strong> (relative to the other
                  scenarios in this run), <strong className="text-copilot-text-primary">stability</strong>,{" "}
                  <strong className="text-copilot-text-primary">admin burden</strong>,{" "}
                  <strong className="text-copilot-text-primary">benefits / protections</strong>,{" "}
                  <strong className="text-copilot-text-primary">flexibility</strong>, and{" "}
                  <strong className="text-copilot-text-primary">expat practicality</strong> (sponsor story — not IND approval).
                </p>
                <p className="mt-2">
                  Your sliders tell the tool what matters more to <em>you</em>. The overall score ranks scenarios for your priorities —
                  there is no single universal winner.
                </p>
                <p className="mt-2 text-xs text-copilot-text-secondary/90">
                  Planning only — not legal, tax, payroll, or immigration advice.
                </p>
              </div>

              <CollapsiblePanel
                title="Show detailed scoring model"
                defaultOpen={false}
                className="border-copilot-primary/12 bg-copilot-surface/80"
                titleClassName="text-sm font-semibold text-copilot-text-primary"
                triggerClassName="cursor-pointer rounded-t-xl text-copilot-text-primary hover:bg-copilot-bg-soft/80"
              >
                <InfoBox title="Priority weighting (technical)" variant="info">
                  <p className="whitespace-pre-line text-sm text-slate-700">{liveResult.priorityWeightingDocumentation}</p>
                </InfoBox>
                <div className="mt-4 space-y-3">
                  {liveResult.scenarios.map((s) => {
                    const ex = s.scoringExplanation;
                    const dim = (label: string, d: { score: number; factorsIncreasing: string[]; factorsDecreasing: string[] }) => (
                      <div key={label} className="rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/30 p-3 text-xs">
                        <p className="font-semibold text-copilot-text-primary">
                          {label}: {Math.round(d.score)}/100
                        </p>
                        {d.factorsIncreasing.length ? (
                          <p className="mt-1 text-copilot-text-secondary">
                            <span className="font-medium text-copilot-text-primary">Raises score: </span>
                            {d.factorsIncreasing.join(" · ")}
                          </p>
                        ) : null}
                        {d.factorsDecreasing.length ? (
                          <p className="mt-1 text-copilot-text-secondary">
                            <span className="font-medium text-copilot-text-primary">Lowers score: </span>
                            {d.factorsDecreasing.join(" · ")}
                          </p>
                        ) : null}
                      </div>
                    );
                    return (
                      <details
                        key={s.scenarioId}
                        className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm"
                      >
                        <summary className="cursor-pointer text-sm font-semibold text-copilot-text-primary">
                          {s.shortLabel} — explain scores
                        </summary>
                        <div className="mt-3 space-y-2">
                          <p className="text-xs text-copilot-text-secondary">
                            <span className="font-medium text-copilot-text-primary">When this model often fits: </span>
                            {ex.bestFitNarrativeHint}
                          </p>
                          <p className="text-xs text-copilot-text-secondary">
                            <span className="font-medium text-copilot-text-primary">Typical trade-off: </span>
                            {ex.tradeOffNarrativeHint}
                          </p>
                          <p className="text-xs text-copilot-text-secondary">
                            <span className="font-medium text-copilot-text-primary">Overall blend: </span>
                            {ex.overall.formulaSummary}
                          </p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {dim("Income (vs others)", ex.income)}
                            {dim("Security", ex.security)}
                            {dim("Flexibility", ex.flexibility)}
                            {dim("Admin simplicity", ex.adminSimplicity)}
                            {dim("Benefits", ex.benefits)}
                            {dim("Expat practicality", ex.expatPracticality)}
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </CollapsiblePanel>
            </div>
          </section>

          <section id="risk-highlights" className="scroll-mt-28 md:scroll-mt-32" aria-labelledby={`${formId}-risk-highlights-heading`}>
            <div className="flex flex-wrap items-start gap-3 sm:gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-800 shadow-expatos-sm ring-1 ring-amber-500/25"
                aria-hidden
              >
                <TriangleAlert className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 id={`${formId}-risk-highlights-heading`} className="text-lg font-semibold tracking-tight text-copilot-text-primary">
                  Risk highlights
                </h2>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Framed as planning considerations — not a moral judgement on any work model.
                </p>
                <p className="mt-2 max-w-3xl text-xs leading-relaxed text-copilot-text-secondary/90">
                  Stripe colours and icons group each line by topic (for example security, tax, sponsorship). They are not a legal
                  severity score — use them to brief advisors and HR.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {liveResult.scenarios.map((s) => {
                const header = SCENARIO_RISK_HEADER[s.scenarioId];
                const n = s.riskHighlights.length;
                const HeaderIcon = header.Icon;
                return (
                  <article
                    key={s.scenarioId}
                    className={cn(
                      "overflow-hidden rounded-2xl border border-copilot-primary/12 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06]",
                      "border-l-4",
                      header.bar,
                      header.cardBg
                    )}
                  >
                    <div className="flex items-start gap-3 border-b border-copilot-primary/10 bg-white/55 px-4 py-3 backdrop-blur-[2px] dark:bg-copilot-surface/50">
                      <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", header.iconWrap)}>
                        <HeaderIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-copilot-text-secondary/85">{header.eyebrow}</p>
                        <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">{s.shortLabel}</h3>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                          n === 0
                            ? "bg-emerald-500/15 text-emerald-900 ring-1 ring-emerald-500/25 dark:text-emerald-100"
                            : "bg-amber-500/14 text-amber-950 ring-1 ring-amber-500/25 dark:text-amber-100"
                        )}
                      >
                        {n === 0 ? "Clear" : `${n} note${n === 1 ? "" : "s"}`}
                      </span>
                    </div>
                    <ul className="space-y-2 p-3 sm:p-4" role="list">
                      {n ? (
                        s.riskHighlights.map((r) => {
                          const row = RISK_CATEGORY_ROW[r.category];
                          const RowIcon = row.Icon;
                          return (
                            <li
                              key={r.id}
                              className={cn(
                                "flex gap-3 rounded-xl border border-copilot-primary/[0.08] border-l-4 bg-copilot-surface/95 py-2.5 pl-3 pr-3 shadow-sm dark:bg-copilot-surface/80",
                                row.liBar
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-black/[0.04] dark:ring-white/10",
                                  row.iconWrap
                                )}
                                aria-hidden
                              >
                                <RowIcon className="h-4 w-4" />
                              </span>
                              <p className="min-w-0 flex-1 text-sm leading-relaxed text-copilot-text-secondary">{r.message}</p>
                            </li>
                          );
                        })
                      ) : (
                        <li className="flex gap-3 rounded-xl border border-emerald-200/80 border-l-4 border-l-emerald-500 bg-emerald-50/60 py-2.5 pl-3 pr-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-300">
                            <CheckCircle2 className="h-4 w-4" aria-hidden />
                          </span>
                          <p className="min-w-0 flex-1 text-sm leading-relaxed text-copilot-text-secondary">
                            No major flags on this pass — still verify contract and permit facts independently.
                          </p>
                        </li>
                      )}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="money-breakdown" className="scroll-mt-28 md:scroll-mt-32" aria-labelledby={`${formId}-money-breakdown-heading`}>
            <div className="flex flex-wrap items-start gap-3 sm:gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-copilot-primary/10 text-copilot-primary shadow-expatos-sm ring-1 ring-copilot-primary/20"
                aria-hidden
              >
                <Wallet className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 id={`${formId}-money-breakdown-heading`} className="text-lg font-semibold tracking-tight text-copilot-text-primary">
                  Money breakdown
                </h2>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Annual lines build toward indicative monthly cash. Positive amounts add to the package; negatives are planning
                  deductions. Red figures are not “errors” — they are modeled withholdings or costs.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {liveResult.scenarios.map((s) => {
                const header = SCENARIO_RISK_HEADER[s.scenarioId];
                const dedAnnual = sumAnnualPlanningDeductions(s.money.lines);
                const HeaderIcon = header.Icon;
                return (
                  <article
                    key={s.scenarioId}
                    className={cn(
                      "overflow-hidden rounded-2xl border border-copilot-primary/12 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06]",
                      "border-l-4",
                      header.bar,
                      header.cardBg
                    )}
                  >
                    <div className="flex items-start gap-3 border-b border-copilot-primary/10 bg-white/55 px-4 py-3 backdrop-blur-[2px] dark:bg-copilot-surface/50">
                      <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", header.iconWrap)}>
                        <HeaderIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-copilot-text-secondary/85">{header.eyebrow}</p>
                        <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">{s.label}</h3>
                      </div>
                    </div>

                    {dedAnnual > 0 ? (
                      <div className="mx-3 mt-3 flex gap-3 rounded-xl border border-amber-300/70 bg-amber-50/95 px-3 py-2.5 shadow-sm dark:border-amber-500/35 dark:bg-amber-950/35">
                        <Receipt className="mt-0.5 h-5 w-5 shrink-0 text-amber-800 dark:text-amber-400" aria-hidden />
                        <div>
                          <p className="text-xs font-semibold text-amber-950 dark:text-amber-100">Total planning deductions (before net)</p>
                          <p className="mt-0.5 text-sm font-bold tabular-nums text-amber-950 dark:text-amber-50">
                            ≈ {formatEur(dedAnnual)} / yr
                          </p>
                        </div>
                      </div>
                    ) : null}

                    <div className="flex flex-col divide-y divide-copilot-primary/[0.1] px-3 sm:px-4">
                      {s.money.lines.map((l) => {
                        const rowUi = moneyLineRowUi(l);
                        const RowIcon = rowUi.Icon;
                        const isNet = rowUi.isNet;
                        return (
                          <div
                            key={l.label}
                            className={cn(
                              "flex gap-3 py-3.5",
                              isNet &&
                                "my-2 -mx-1 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.09] px-2 py-3 shadow-sm dark:bg-emerald-500/12"
                            )}
                          >
                            <span
                              className={cn(
                                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-black/[0.04] dark:ring-white/10",
                                rowUi.iconWrap
                              )}
                              aria-hidden
                            >
                              <RowIcon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className={cn("text-sm", isNet ? "font-semibold text-copilot-text-primary" : "text-copilot-text-primary")}>
                                {l.label}
                              </span>
                              {l.note ? (
                                <span className="mt-1 block text-xs leading-relaxed text-copilot-text-secondary">{l.note}</span>
                              ) : null}
                            </div>
                            <span className={cn("shrink-0 self-start text-right", moneyAmountClass(l))}>{formatEur(l.amountAnnual)}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mx-3 mt-2 rounded-xl bg-gradient-to-r from-emerald-500/14 via-teal-500/10 to-emerald-500/12 px-4 py-3.5 ring-1 ring-emerald-500/25 dark:from-emerald-500/20 dark:via-teal-500/15 dark:to-emerald-500/15">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-900/80 dark:text-emerald-200/90">
                        Monthly usable (planning)
                      </p>
                      <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-emerald-900 dark:text-emerald-100">
                        ≈ {formatEur(s.money.estimatedNetMonthly)}
                        <span className="ml-1.5 text-base font-semibold text-emerald-800/90 dark:text-emerald-200/90">/ month</span>
                      </p>
                    </div>

                    <ul className="mx-3 mt-3 space-y-1.5 border-t border-copilot-primary/[0.08] pt-3 text-xs leading-relaxed text-copilot-text-secondary">
                      {s.money.planningNotes.map((n) => (
                        <li key={n} className="flex gap-2 pl-0.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copilot-primary/35" aria-hidden />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>

                    {s.money.formulaNotes?.length ? (
                      <div className="mt-3 border-t border-sky-500/20 bg-sky-500/[0.08] px-4 py-3 dark:border-sky-500/25 dark:bg-sky-950/30">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-400" aria-hidden />
                          <p className="text-xs font-semibold text-copilot-text-primary">Money model notes</p>
                        </div>
                        <ul className="mt-2 space-y-1.5 pl-6 text-xs leading-relaxed text-copilot-text-secondary">
                          {s.money.formulaNotes.map((n) => (
                            <li key={n} className="list-disc marker:text-sky-600/70">
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </section>

          <EmploymentBeforeYouDecideChecklist
            groups={EMPLOYMENT_BEFORE_YOU_DECIDE_GROUPS.map((g) => ({ title: g.title, bullets: [...g.bullets] }))}
          />

          <section id="questions-to-ask" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">What to ask before choosing</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-copilot-text-secondary">
              <Link href="#example-scenarios" className="font-semibold text-copilot-primary hover:underline">
                Worked example scenarios on this page →
              </Link>{" "}
              (below the tool) walk through common expat comparisons in plain language.
            </p>
          </section>

          <section id="how-tool-works-inline" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">How this tool works</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
              <li>We compare work models using transparent planning assumptions and indicative money math shared with our salary tools.</li>
              <li>Each scenario gets scores for income, stability, flexibility, admin simplicity, benefits, and expat practicality.</li>
              <li>Your priority sliders set the weights for the overall score — change them to stress-test what you care about.</li>
              <li>
                Deeper topic explainers and internal links (taxes hub, moving hub, contract scanner) sit in the{" "}
                <Link href="#seo-content" className="font-semibold text-copilot-primary hover:underline">
                  work models in depth
                </Link>{" "}
                section under the tool.
              </li>
              <li>This is not legal, tax, payroll, or immigration advice; confirm outcomes with providers on your facts.</li>
            </ul>
          </section>

          <section id="recommended-services" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Recommended services</h2>
            <div className="mt-4">
              <EmploymentTypeScenarioRecommendedServices result={liveResult} pageContext={pageContext} />
            </div>
          </section>

          <section id="download-summary" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Export / download</h2>
            <p id={`${formId}-export-intro`} className="mt-2 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
              Both options include your latest <strong className="font-medium text-copilot-text-primary">Calculate</strong> run:
              scenario table, scores, money lines, risk flags, and disclaimer. HTML opens offline; print uses your browser’s print dialog
              (choose “Save as PDF” if you want a file).
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button type="button" variant="secondary" className="min-h-11 border-copilot-primary/20" onClick={downloadHtml}>
                Download HTML summary
              </Button>
              <Button type="button" variant="secondary" className="min-h-11 border-copilot-primary/20" onClick={printSummary}>
                Print or save as PDF
              </Button>
            </div>
            <label htmlFor={`${formId}-export-notes`} className={`${FIELD_LABEL} mt-4 block`}>
              Optional notes for export
            </label>
            <textarea
              id={`${formId}-export-notes`}
              rows={3}
              className="mt-1.5 w-full rounded-lg border border-copilot-primary/15 bg-copilot-surface p-3 text-sm text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30"
              value={exportNotes}
              onChange={(e) => setExportNotes(e.target.value)}
              placeholder="e.g. questions for HR, offer deadline, advisor name…"
              aria-describedby={`${formId}-export-intro`}
            />
          </section>

          <section id="related-tools-inline" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Related tools</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {EMPLOYMENT_TYPE_RELATED_TOOLS.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="font-medium text-copilot-primary hover:underline"
                    onClick={() =>
                      trackEmploymentTypeScenarioTool("employment_type_tool_related_tool_clicked", {
                        page_context: pageContext,
                        href: t.href,
                      })
                    }
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <InfoBox title="Disclaimer" variant="warn">
            <p className="text-sm text-copilot-text-secondary">
              Planning and comparison only. Not legal, tax, payroll, or immigration advice. Exact take-home, sponsor eligibility, and
              contract classification require professional review.
            </p>
          </InfoBox>
        </div>
        ) : null}
      </div>
    </div>
  );
}
