"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { trackCostOfLivingCalculator } from "@/lib/analytics/track";
import {
  buildComparisonRows,
  computeCostOfLiving,
  DEFAULT_COL_INPUT,
  formatColMoney,
} from "@/src/lib/calculators/cost-of-living";
import { effectiveHouseholdCounts } from "@/src/lib/calculators/cost-of-living/formulas";
import type { ColComparisonRow, ColInput, ColLineItem, ColResult } from "@/src/lib/calculators/cost-of-living/types";
import type { ColExportPayload } from "@/src/lib/calculators/cost-of-living/exportHtml";
import {
  costOfLivingInputToSearchParams,
  hasCostOfLivingUrlParams,
  loadCostOfLivingFromStorage,
  parseCostOfLivingSearchParams,
  saveCostOfLivingToStorage,
  sanitizeCostOfLivingInput,
} from "@/src/lib/tools/cost-of-living/urlState";
import { cn } from "@/lib/cn";

const BASE = "/netherlands";

const MONTHLY_GROUP_LABELS: Record<NonNullable<ColLineItem["group"]>, string> = {
  core: "Core monthly",
  living: "Living monthly",
  risk: "Risk & admin monthly",
};

function compareNarrative(rows: ColComparisonRow[], currency: ColInput["currency"]): string | null {
  if (rows.length < 2) return null;
  const base = rows[0].result;
  let bestI = 1;
  let bestSave = -Infinity;
  for (let i = 1; i < rows.length; i++) {
    const save = base.monthly.totalEur - rows[i].result.monthly.totalEur;
    if (save > bestSave) {
      bestSave = save;
      bestI = i;
    }
  }
  if (bestSave > 80) {
    return `Largest monthly saving in this table: about ${formatColMoney(bestSave, currency)}/mo vs your scenario (“${rows[bestI].label}”). Commute time and quality-of-life trade-offs are not priced here — sanity-check on a map.`;
  }
  let bestJ = 1;
  let bestSetupSave = -Infinity;
  for (let j = 1; j < rows.length; j++) {
    const s = base.setup.totalEur - rows[j].result.setup.totalEur;
    if (s > bestSetupSave) {
      bestSetupSave = s;
      bestJ = j;
    }
  }
  if (bestSetupSave > 250) {
    return `Largest one-time setup saving: about ${formatColMoney(bestSetupSave, currency)} vs your scenario (“${rows[bestJ].label}”). Overlap weeks and deposits still dominate many real moves.`;
  }
  return "Alternatives are relatively close in this model — try a different city or housing mode in inputs, then Calculate again for bigger spreads.";
}

const MAX_MANUAL_RENT_EUR = 50_000;
const MAX_COMPARISON_NET_EUR = 150_000;

const CITY_OPTIONS: { value: ColInput["city"]; label: string }[] = [
  { value: "amsterdam", label: "Amsterdam" },
  { value: "rotterdam", label: "Rotterdam" },
  { value: "the-hague", label: "The Hague" },
  { value: "utrecht", label: "Utrecht" },
  { value: "eindhoven", label: "Eindhoven" },
  { value: "haarlem", label: "Haarlem" },
  { value: "delft", label: "Delft" },
  { value: "groningen", label: "Groningen" },
  { value: "leiden", label: "Leiden" },
  { value: "other", label: "Other Netherlands" },
];

function Hint({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <p id={id} className="text-xs leading-relaxed text-copilot-text-secondary">
      {children}
    </p>
  );
}

/** Click to toggle; panel is portaled above the icon with a high z-index so parent overflow/stacking cannot hide it. */
function Tip({ text, label = "More information" }: { text: string; label?: string }) {
  const id = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const measure = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ left: r.left + r.width / 2, top: r.top });
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setPos(null);
  }, []);

  const toggle = useCallback(() => {
    if (open) {
      close();
      return;
    }
    const el = btnRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      setPos({ left: r.left + r.width / 2, top: r.top });
    }
    setOpen(true);
  }, [close, open]);

  useEffect(() => {
    if (!open) return;
    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [open, measure]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      close();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const portal =
    open &&
    pos &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        ref={panelRef}
        id={id}
        role="tooltip"
        className="fixed box-border w-[min(calc(100vw-2rem),22rem)] rounded-xl border border-copilot-primary/15 bg-white px-3 py-2 text-left text-xs font-normal normal-case leading-snug tracking-normal text-copilot-text-primary shadow-expatos-md ring-1 ring-copilot-primary/[0.12]"
        style={{
          left: pos.left,
          top: pos.top,
          transform: "translate(-50%, calc(-100% - 10px))",
          zIndex: 10050,
        }}
      >
        {text}
      </div>,
      document.body
    );

  return (
    <span className="ml-0.5 inline-flex shrink-0 align-middle">
      {portal}
      <button
        ref={btnRef}
        type="button"
        className="inline-flex rounded-full p-0.5 text-copilot-primary/70 outline-none transition-colors hover:text-copilot-primary focus-visible:ring-2 focus-visible:ring-copilot-primary/40 focus-visible:ring-offset-1 focus-visible:ring-offset-copilot-bg-soft"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-describedby={open ? id : undefined}
        aria-label={`Help: ${label} (opens on click)`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
      >
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </button>
    </span>
  );
}

function SectionCard({
  title,
  hint,
  className,
  children,
}: {
  title: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "min-w-0 overflow-hidden rounded-2xl border border-copilot-primary/10 bg-copilot-surface/90 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-5",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <h4 className="text-xs font-bold uppercase tracking-wide text-copilot-primary">{title}</h4>
        {hint ? <Tip text={hint} label={title} /> : null}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

const selectClass =
  "mt-1.5 min-h-11 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2.5 text-sm text-copilot-text-primary shadow-expatos-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30";

const labelClass = "text-sm font-semibold text-copilot-text-primary";

export function CostOfLivingCalculatorClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<ColInput>(() => sanitizeCostOfLivingInput({}));
  const [hydrated, setHydrated] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  const [exportNotes, setExportNotes] = useState("");
  const skipNextUrlWrite = useRef(true);
  const initialized = useRef(false);
  const startedLogged = useRef(false);
  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [hasFinishedRun, setHasFinishedRun] = useState(false);
  const [lastCalculateKey, setLastCalculateKey] = useState("");
  const [displayedInput, setDisplayedInput] = useState<ColInput | null>(null);
  const [displayedResult, setDisplayedResult] = useState<ColResult | null>(null);
  const [displayedComparisonRows, setDisplayedComparisonRows] = useState<ReturnType<typeof buildComparisonRows>>([]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let merged = sanitizeCostOfLivingInput({});
    if (hasCostOfLivingUrlParams(sp)) {
      merged = sanitizeCostOfLivingInput({ ...merged, ...parseCostOfLivingSearchParams(sp) });
    } else {
      const stored = loadCostOfLivingFromStorage();
      if (stored) merged = sanitizeCostOfLivingInput({ ...merged, ...stored });
    }
    setInput(merged);
    setHydrated(true);
    skipNextUrlWrite.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated || startedLogged.current) return;
    startedLogged.current = true;
    trackCostOfLivingCalculator("calculator_started");
  }, [hydrated]);

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => {
    return () => {
      cancelCalcRunRef.current?.();
      cancelCalcRunRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveCostOfLivingToStorage(input);
    if (skipNextUrlWrite.current) {
      skipNextUrlWrite.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      const p = costOfLivingInputToSearchParams(input);
      const qs = p.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const currentInputKey = useMemo(() => costOfLivingInputToSearchParams(input).toString(), [input]);
  const resultsStale = hasFinishedRun && lastCalculateKey !== "" && currentInputKey !== lastCalculateKey;

  const patch = useCallback((p: Partial<ColInput>) => {
    setInput((prev) => {
      if (p.city !== undefined && p.city !== prev.city) {
        trackCostOfLivingCalculator("city_changed", { city: p.city });
      }
      if (p.housingMode !== undefined && p.housingMode !== prev.housingMode) {
        trackCostOfLivingCalculator("housing_mode_changed", { housing_mode: p.housingMode });
      }
      if (p.childcareNeeded !== undefined && p.childcareNeeded !== prev.childcareNeeded) {
        trackCostOfLivingCalculator("childcare_toggled", { childcare_enabled: p.childcareNeeded });
      }
      if (p.compareScenariosEnabled === true && prev.compareScenariosEnabled === false) {
        trackCostOfLivingCalculator("comparison_enabled", { enabled: true });
      }
      return sanitizeCostOfLivingInput({ ...prev, ...p });
    });
  }, []);

  const patchHouseholdPreset = useCallback(
    (preset: ColInput["householdPreset"]) => {
      if (preset === "custom") {
        const snap = latestInputRef.current;
        const { adults, children } = effectiveHouseholdCounts(snap);
        patch({ householdPreset: "custom", adultsCount: adults, childrenCount: children });
        return;
      }
      if (preset === "single") patch({ householdPreset: "single", adultsCount: 1, childrenCount: 0 });
      else if (preset === "couple") patch({ householdPreset: "couple", adultsCount: 2, childrenCount: 0 });
      else if (preset === "family1") patch({ householdPreset: "family1", adultsCount: 2, childrenCount: 1 });
      else if (preset === "family2") patch({ householdPreset: "family2", adultsCount: 2, childrenCount: 2 });
    },
    [patch]
  );

  const comparisonGap =
    !resultsStale &&
    displayedInput &&
    displayedResult &&
    displayedInput.showSalaryComparison &&
    displayedInput.comparisonNetMonthly != null &&
    displayedInput.comparisonNetMonthly > 0
      ? displayedResult.recommendedNetSalaryMonthlyEur - displayedInput.comparisonNetMonthly
      : null;

  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const buildExportPayload = useCallback((): ColExportPayload => {
    if (!displayedInput || !displayedResult) {
      throw new Error("Export requires a completed calculation");
    }
    return {
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      disclaimer:
        "Planning estimator only. Real rents, utilities, childcare, and taxes vary. Not legal, tax, or financial advice. Salary targets are not payroll or Belastingdienst outcomes — use provider quotes and official sources before deciding.",
      calculatorCanonicalUrl: canonicalUrl || "https://www.expatcopilot.com/netherlands/money/tools/cost-of-living-calculator/",
      input: displayedInput,
      result: displayedResult,
      compareRows: displayedComparisonRows.length > 1 ? displayedComparisonRows : undefined,
      planningNotes: exportNotes.trim() || undefined,
    };
  }, [canonicalUrl, displayedComparisonRows, displayedInput, displayedResult, exportNotes]);

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

      const snap = sanitizeCostOfLivingInput({ ...latestInputRef.current });
      const nextResult = computeCostOfLiving(snap);
      const nextRows = snap.compareScenariosEnabled ? buildComparisonRows(snap) : [];

      setDisplayedInput(snap);
      setDisplayedResult(nextResult);
      setDisplayedComparisonRows(nextRows);
      setLastCalculateKey(costOfLivingInputToSearchParams(snap).toString());
      setHasFinishedRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      trackCostOfLivingCalculator("calculator_completed");
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isCalculating]);

  const shareScenario = useCallback(async () => {
    const p = costOfLivingInputToSearchParams(input);
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}?${p.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareFeedback("Link copied — paste to share this scenario.");
    } catch {
      setShareFeedback("Copy blocked — use your browser address bar after any change.");
    }
    window.setTimeout(() => setShareFeedback(null), 4000);
  }, [input, pathname]);

  const resetRecommended = useCallback(() => {
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;
    setIsCalculating(false);
    setProgressPct(0);
    setHasFinishedRun(false);
    setLastCalculateKey("");
    setDisplayedInput(null);
    setDisplayedResult(null);
    setDisplayedComparisonRows([]);
    setInput(sanitizeCostOfLivingInput({ ...DEFAULT_COL_INPUT }));
    saveCostOfLivingToStorage(sanitizeCostOfLivingInput({ ...DEFAULT_COL_INPUT }));
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const handleDownloadHtml = useCallback(async () => {
    if (!displayedInput || !displayedResult) return;
    trackCostOfLivingCalculator("summary_downloaded", { format: "html" });
    const { downloadCostOfLivingHtml } = await import("@/src/lib/calculators/cost-of-living/exportHtml");
    downloadCostOfLivingHtml(buildExportPayload());
  }, [buildExportPayload, displayedInput, displayedResult]);

  const handlePrintSummary = useCallback(async () => {
    if (!displayedInput || !displayedResult) return;
    trackCostOfLivingCalculator("summary_downloaded", { format: "print_pdf" });
    const { openPrintCostOfLivingSummary } = await import("@/src/lib/calculators/cost-of-living/exportHtml");
    openPrintCostOfLivingSummary(buildExportPayload());
  }, [buildExportPayload, displayedInput, displayedResult]);

  const handleOpenSummaryTab = useCallback(async () => {
    if (!displayedInput || !displayedResult) return;
    trackCostOfLivingCalculator("summary_downloaded", { format: "new_tab" });
    const { buildCostOfLivingHtmlDocument } = await import("@/src/lib/calculators/cost-of-living/exportHtml");
    const html = buildCostOfLivingHtmlDocument(buildExportPayload());
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (w) {
      w.document.write(html);
      w.document.close();
    }
  }, [buildExportPayload, displayedInput, displayedResult]);

  const maxMonthlySlice = useMemo(() => {
    if (!displayedResult) return 1;
    return Math.max(...displayedResult.monthly.items.map((i) => i.amountEur), 1);
  }, [displayedResult]);

  const { adults: hhAdults, children: hhChildren } = effectiveHouseholdCounts(input);
  const showFamilyChildcareHint = hhChildren > 0 && !input.childcareNeeded;

  return (
    <div className="min-w-0 space-y-6 md:space-y-8">
      <nav
        className="sticky top-16 z-20 -mx-4 flex gap-2 overflow-x-auto overscroll-x-contain border-b border-copilot-primary/10 bg-copilot-bg-soft/95 px-4 py-2.5 backdrop-blur-sm [-webkit-overflow-scrolling:touch] sm:-mx-6 sm:px-6"
        aria-label="Jump to calculator sections"
      >
        {[
          { href: "#tool-inputs", label: "Inputs" },
          { href: "#tool-results", label: "Results" },
          { href: "#monthly-budget", label: "Monthly" },
          { href: "#setup-costs", label: "Setup" },
          { href: "#compare-scenarios", label: "Compare" },
          { href: "#download-summary", label: "Export" },
        ].map((j) => (
          <a
            key={j.href}
            href={j.href}
            className="shrink-0 rounded-full border border-copilot-primary/15 bg-copilot-surface px-3 py-1.5 text-xs font-semibold text-copilot-text-primary shadow-sm hover:border-copilot-primary/30"
            onClick={() => trackCostOfLivingCalculator("related_tool_clicked", { target: "jump_nav", href: j.href })}
          >
            {j.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/15 sm:w-auto" onClick={resetRecommended}>
          Reset to defaults
        </Button>
        <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/15 sm:w-auto" onClick={shareScenario}>
          Copy share link
        </Button>
        {shareFeedback ? (
          <span className="text-sm text-copilot-text-secondary sm:ml-1" role="status">
            {shareFeedback}
          </span>
        ) : null}
      </div>

      <div id="tool-inputs" className="scroll-mt-28 space-y-5 md:scroll-mt-32 md:space-y-6">
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-5">
            <SectionCard
              title="Location"
              hint="City anchors are planning medians — real listings vary by neighborhood and season."
            >
              <div>
                <label htmlFor="col-city" className={labelClass}>
                  City
                </label>
                <select
                  id="col-city"
                  className={selectClass}
                  value={input.city}
                  onChange={(e) => patch({ city: e.target.value as ColInput["city"] })}
                >
                  {CITY_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className={labelClass} id="col-neigh-label">
                  <span className="inline-flex flex-wrap items-center gap-1">
                    Neighborhood cost position
                    <Tip text="Shifts the rent anchor. Commuter belt is usually cheaper housing but may pair with higher transport — check your commute mode below." />
                  </span>
                </p>
                <SegmentedControl pillTone="copilot"
                  name="neighborhood"
                  className="mt-2"
                  options={[
                    { value: "center", label: "City center" },
                    { value: "outside", label: "Outside center" },
                    { value: "commuter", label: "Commuter / nearby town" },
                  ]}
                  value={input.neighborhood}
                  onChange={(v) => patch({ neighborhood: v as ColInput["neighborhood"] })}
                  aria-labelledby="col-neigh-label"
                />
                <Hint>Commuter belt uses a lower rent anchor than prime center — adjust with manual rent if you have a quote.</Hint>
              </div>
            </SectionCard>

            <SectionCard title="Household" hint="Quick presets fill adults and children; you can always edit counts below — the model uses those numbers.">
              <div>
                <p className={labelClass} id="col-hh-label">
                  Household type
                </p>
                <SegmentedControl pillTone="copilot"
                  name="householdPreset"
                  className="mt-2"
                  options={[
                    { value: "single", label: "Single" },
                    { value: "couple", label: "Couple" },
                    { value: "family1", label: "Family · 1 child" },
                    { value: "family2", label: "Family · 2 children" },
                    { value: "custom", label: "Custom" },
                  ]}
                  value={input.householdPreset}
                  onChange={(v) => patchHouseholdPreset(v as ColInput["householdPreset"])}
                  aria-labelledby="col-hh-label"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="col-adults" className={labelClass}>
                    Adults
                  </label>
                  <Input
                    id="col-adults"
                    type="number"
                    min={1}
                    max={5}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={hhAdults}
                    onChange={(e) => {
                      const n = Math.min(5, Math.max(1, parseInt(e.target.value, 10) || 1));
                      patch({ householdPreset: "custom", adultsCount: n, childrenCount: hhChildren });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="col-kids" className={labelClass}>
                    <span className="inline-flex flex-wrap items-center gap-1">
                      Children
                      <Tip text="Dependents you budget for (groceries, insurance, childcare scaling, school placeholder). Set to 0 if you have none." />
                    </span>
                  </label>
                  <Input
                    id="col-kids"
                    type="number"
                    min={0}
                    max={6}
                    className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                    value={hhChildren}
                    onChange={(e) => {
                      const n = Math.min(6, Math.max(0, parseInt(e.target.value, 10) || 0));
                      patch({ householdPreset: "custom", adultsCount: hhAdults, childrenCount: n });
                    }}
                  />
                </div>
              </div>
              <Hint>
                Editing adults or children switches the preset to <strong>Custom</strong> so your headcount always drives the estimate. Use the buttons above for common shapes (single, couple, family).
              </Hint>
              {showFamilyChildcareHint ? (
                <p className="rounded-lg bg-copilot-bg-soft/90 px-3 py-2 text-xs text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
                  Children are in this scenario but childcare is off — totals skip daycare. Enable childcare for a placeholder cost, or leave it off if care is not planned.
                </p>
              ) : null}
            </SectionCard>

            <SectionCard title="Housing" hint="Manual rent overrides the model for your monthly housing line and scales deposit timing.">
              <div>
                <p className={labelClass} id="col-housing-mode-label">
                  <span className="inline-flex flex-wrap items-center gap-1">
                    Housing mode
                    <Tip text="Room vs family home vs short-stay changes rent, deposit timing, and overlap risk in setup. Short-stay often means paying premium housing while you hunt for a lease." />
                  </span>
                </p>
                <select
                  className={selectClass}
                  aria-labelledby="col-housing-mode-label"
                  value={input.housingMode}
                  onChange={(e) => patch({ housingMode: e.target.value as ColInput["housingMode"] })}
                >
                  <option value="room_shared">Room / shared</option>
                  <option value="apartment_1bed">1-bedroom apartment</option>
                  <option value="apartment_2bed">2-bedroom apartment</option>
                  <option value="apartment_3bed_family">3-bedroom family rental</option>
                  <option value="short_stay_serviced">Short-stay / serviced apartment</option>
                  <option value="already_arranged">Already arranged housing</option>
                </select>
              </div>
              <div>
                <p className={labelClass} id="col-rent-mode-label">
                  Rent input
                </p>
                <SegmentedControl pillTone="copilot"
                  name="rentInputMode"
                  className="mt-2"
                  options={[
                    { value: "model", label: "Use model rent" },
                    { value: "manual", label: "Manual rent" },
                  ]}
                  value={input.rentInputMode}
                  onChange={(v) => patch({ rentInputMode: v as ColInput["rentInputMode"] })}
                  aria-labelledby="col-rent-mode-label"
                />
              </div>
              {input.rentInputMode === "manual" ? (
                <div>
                  <label htmlFor="col-manual-rent" className={labelClass}>
                    Monthly rent (€)
                  </label>
                  <Input
                    id="col-manual-rent"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={MAX_MANUAL_RENT_EUR}
                    placeholder="e.g. 1850"
                    className="mt-1.5 min-h-11 border-copilot-primary/15 bg-copilot-surface"
                    value={input.manualRentEur ?? ""}
                    onChange={(e) => {
                      const raw = e.target.value;
                      if (raw === "") {
                        patch({ manualRentEur: null });
                        return;
                      }
                      const n = parseInt(raw, 10);
                      if (!Number.isFinite(n) || n <= 0) {
                        patch({ manualRentEur: null });
                        return;
                      }
                      patch({ manualRentEur: Math.min(MAX_MANUAL_RENT_EUR, n) });
                    }}
                    aria-describedby="col-manual-rent-hint"
                  />
                  <Hint id="col-manual-rent-hint">
                    Your quoted rent (€1–{MAX_MANUAL_RENT_EUR.toLocaleString("en-US")}/mo planning cap). Deposit timing still follows setup toggles.
                  </Hint>
                </div>
              ) : null}
            </SectionCard>

            <SectionCard title="Lifestyle">
              <div>
                <p className={labelClass} id="col-life-label">
                  Lifestyle level
                </p>
                <SegmentedControl pillTone="copilot"
                  name="lifestyle"
                  className="mt-2"
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "balanced", label: "Balanced" },
                    { value: "comfortable", label: "Comfortable" },
                  ]}
                  value={input.lifestyle}
                  onChange={(v) => patch({ lifestyle: v as ColInput["lifestyle"] })}
                  aria-labelledby="col-life-label"
                />
              </div>
              <div>
                <p className={labelClass} id="col-dining-label">
                  Dining / going out
                </p>
                <SegmentedControl pillTone="copilot"
                  name="dining"
                  className="mt-2"
                  options={[
                    { value: "low", label: "Low" },
                    { value: "medium", label: "Medium" },
                    { value: "high", label: "High" },
                  ]}
                  value={input.diningLevel}
                  onChange={(v) => patch({ diningLevel: v as ColInput["diningLevel"] })}
                  aria-labelledby="col-dining-label"
                />
              </div>
              <div>
                <p className={labelClass} id="col-travel-label">
                  Travel style
                </p>
                <SegmentedControl pillTone="copilot"
                  name="travelStyle"
                  className="mt-2"
                  options={[
                    { value: "local", label: "Mostly local" },
                    { value: "weekends", label: "Some weekend trips" },
                    { value: "frequent", label: "Frequent travel" },
                  ]}
                  value={input.travelStyle}
                  onChange={(v) => patch({ travelStyle: v as ColInput["travelStyle"] })}
                  aria-labelledby="col-travel-label"
                />
              </div>
            </SectionCard>

            <SectionCard title="Transport">
              <div>
                <p className={labelClass} id="col-transport-label">
                  Transport mode
                </p>
                <select
                  className={selectClass}
                  aria-labelledby="col-transport-label"
                  value={input.transportMode}
                  onChange={(e) => patch({ transportMode: e.target.value as ColInput["transportMode"] })}
                >
                  <option value="bike_pt">Bike + public transport</option>
                  <option value="pt_only">Public transport only</option>
                  <option value="car">Car owner</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              {(input.transportMode === "car" || input.transportMode === "hybrid") && (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                  <input
                    type="checkbox"
                    checked={input.includeParking}
                    onChange={(e) => patch({ includeParking: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                  />
                  <span>
                    <span className="font-semibold">Include parking (city premium)</span>
                    <Hint>Typical resident parking or garage allowance — not a fine.</Hint>
                  </span>
                </label>
              )}
              {(input.transportMode === "pt_only" || input.transportMode === "hybrid") && (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                  <input
                    type="checkbox"
                    checked={input.includeNsCommuteSupplement}
                    onChange={(e) => patch({ includeNsCommuteSupplement: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                  />
                  <span>
                    <span className="font-semibold">Include NS / commuter rail supplement</span>
                    <Hint>Indicative add-on beyond inner-city transit — not an NS quote.</Hint>
                  </span>
                </label>
              )}
            </SectionCard>

            <SectionCard title="Family & pets">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.childcareNeeded}
                  onChange={(e) => {
                    const on = e.target.checked;
                    patch({
                      childcareNeeded: on,
                      childcareIntensity: on ? (input.childcareIntensity === "none" ? "part_time" : input.childcareIntensity) : "none",
                    });
                  }}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="inline-flex flex-wrap items-center gap-1 font-semibold">
                  Childcare needed
                  <Tip text="When on, childcare is its own monthly line (not buried in misc). Replace the placeholder with real daycare or childminder quotes when you have them." />
                </span>
              </label>
              {input.childcareNeeded ? (
                <div>
                  <p className={labelClass} id="col-cc-int-label">
                    <span className="inline-flex flex-wrap items-center gap-1">
                      Childcare intensity
                      <Tip text="Part-time vs full-time scales a directional placeholder — waiting lists and hours make real costs very personal." />
                    </span>
                  </p>
                  <SegmentedControl pillTone="copilot"
                    name="childcareIntensity"
                    className="mt-2"
                    options={[
                      { value: "part_time", label: "Part-time" },
                      { value: "full_time", label: "Full-time" },
                    ]}
                    value={input.childcareIntensity === "full_time" ? "full_time" : "part_time"}
                    onChange={(v) => patch({ childcareIntensity: v as ColInput["childcareIntensity"] })}
                    aria-labelledby="col-cc-int-label"
                  />
                </div>
              ) : null}
              <div>
                <p className={labelClass} id="col-school-label">
                  <span className="inline-flex flex-wrap items-center gap-1">
                    Schooling assumption
                    <Tip text="Public/local is a small planning slice for supplies and activities — not tuition. International adds a monthly reserve only, not a school fee quote." />
                  </span>
                </p>
                <SegmentedControl pillTone="copilot"
                  name="schooling"
                  className="mt-2"
                  options={[
                    { value: "public_local", label: "Public / local" },
                    { value: "international_placeholder", label: "International / private (placeholder)" },
                  ]}
                  value={input.schooling}
                  onChange={(v) => patch({ schooling: v as ColInput["schooling"] })}
                  aria-labelledby="col-school-label"
                />
                <Hint>International line is a monthly reserve only — not tuition quotes.</Hint>
              </div>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.pet}
                  onChange={(e) => patch({ pet: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span>
                  <span className="font-semibold">Pet</span>
                  <Hint>Small monthly uplift for food, insurance, and vet reserve.</Hint>
                </span>
              </label>
            </SectionCard>

            <SectionCard
              title="Setup / move costs"
              hint="Employer relocation only scales the international travel / move slice — not rent deposit or local OV setup unless your contract says otherwise."
            >
              <div>
                <p className={labelClass} id="col-from-label">
                  Moving from
                </p>
                <select
                  className={selectClass}
                  aria-labelledby="col-from-label"
                  value={input.movingFrom}
                  onChange={(e) => patch({ movingFrom: e.target.value as ColInput["movingFrom"] })}
                >
                  <option value="eu_nearby">EU / nearby</option>
                  <option value="uk">UK</option>
                  <option value="us_canada">US / Canada</option>
                  <option value="far">Asia / Africa / Latin America / farther</option>
                </select>
              </div>
              <div>
                <p className={labelClass} id="col-employer-relo-label">
                  Employer paying for relocation / travel?
                </p>
                <SegmentedControl
                  pillTone="copilot"
                  name="employerRelocationSupport"
                  className="mt-2"
                  options={[
                    { value: "none", label: "I pay (default)" },
                    { value: "partial", label: "Employer pays part" },
                    { value: "full", label: "Employer pays main travel" },
                  ]}
                  value={input.employerRelocationSupport}
                  onChange={(v) =>
                    patch({ employerRelocationSupport: v as ColInput["employerRelocationSupport"] })
                  }
                  aria-labelledby="col-employer-relo-label"
                />
                <Hint>
                  Adjusts the setup line for flights/shipping-style relocation only — confirm what your package actually covers (temporary housing, household goods, etc.).
                </Hint>
              </div>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.includeFurnitureSetup}
                  onChange={(e) => patch({ includeFurnitureSetup: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="inline-flex flex-wrap items-center gap-1 font-semibold">
                  Need furniture / home setup
                  <Tip text="Larger furniture spend is separate from the home essentials starter line in results — both can apply in a real move." />
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.includeDepositAndFirstMonth}
                  onChange={(e) => patch({ includeDepositAndFirstMonth: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="inline-flex flex-wrap items-center gap-1 font-semibold">
                  Include deposit + first month rent (cash timing)
                  <Tip text="Models cash you need before keys — often separate from recurring rent in your bank planning. Temporary overlap with short-stay is handled in setup when relevant." />
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.includeVisaAdminBudget}
                  onChange={(e) => patch({ includeVisaAdminBudget: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="inline-flex flex-wrap items-center gap-1 font-semibold">
                  Include visa / admin / document budget
                  <Tip text="Directional slice for translations, legalisation-style friction, and registration paperwork — not a legal bill estimate." />
                </span>
              </label>
            </SectionCard>

            <SectionCard
              className="sm:col-span-2 xl:col-span-3"
              title="Income planning"
              hint="Salary targets are planning bands — not payroll, contract, or Belastingdienst advice."
            >
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.showSalaryTargets}
                  onChange={(e) => patch({ showSalaryTargets: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="font-semibold">Show salary target recommendations</span>
              </label>
              <div>
                <p className={labelClass} id="col-ruling-label">
                  <span className="inline-flex flex-wrap items-center gap-1">
                    Applying 30% ruling?
                    <Tip text="Only nudges planning salary bands here — it does not change rent or childcare lines. Use the dedicated calculator to stress-test eligibility and payroll impact." />
                  </span>
                </p>
                <SegmentedControl pillTone="copilot"
                  name="ruling"
                  className="mt-2"
                  options={[
                    { value: "no", label: "No" },
                    { value: "maybe", label: "Maybe" },
                    { value: "yes", label: "Yes" },
                  ]}
                  value={input.rulingAssumption}
                  onChange={(v) => patch({ rulingAssumption: v as ColInput["rulingAssumption"] })}
                  aria-labelledby="col-ruling-label"
                />
                <p className="mt-2 text-xs text-copilot-text-secondary">
                  We only adjust targets with a planning multiplier (higher net for same gross when ruling applies).{" "}
                  <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                    30% ruling calculator →
                  </Link>
                </p>
              </div>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                <input
                  type="checkbox"
                  checked={input.compareScenariosEnabled}
                  onChange={(e) => patch({ compareScenariosEnabled: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                />
                <span className="font-semibold">Compare alternative scenarios (table)</span>
              </label>
              <div>
                <p className={labelClass} id="col-currency-label">
                  Display currency
                </p>
                <SegmentedControl pillTone="copilot"
                  name="currency"
                  className="mt-2"
                  options={[
                    { value: "eur", label: "Euro (€)" },
                    { value: "usd", label: "USD (approx.)" },
                  ]}
                  value={input.currency}
                  onChange={(v) => patch({ currency: v as ColInput["currency"] })}
                  aria-labelledby="col-currency-label"
                />
              </div>
              <div className="rounded-xl border border-dashed border-copilot-primary/25 bg-copilot-bg-soft/60 p-4">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-primary">
                  <input
                    type="checkbox"
                    checked={input.showSalaryComparison}
                    onChange={(e) => patch({ showSalaryComparison: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-copilot-primary/30 text-copilot-primary"
                  />
                  <span className="font-semibold">Compare to expected net salary (monthly €)</span>
                </label>
                {input.showSalaryComparison ? (
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={MAX_COMPARISON_NET_EUR}
                    placeholder="e.g. 3800"
                    className="mt-3 min-h-11 border-copilot-primary/15 bg-copilot-surface"
                    aria-describedby="col-net-compare-hint"
                    value={input.comparisonNetMonthly ?? ""}
                    onChange={(e) => {
                      const raw = e.target.value;
                      if (raw === "") patch({ comparisonNetMonthly: null });
                      else {
                        const n = parseInt(raw, 10);
                        if (!Number.isFinite(n) || n <= 0) patch({ comparisonNetMonthly: null });
                        else patch({ comparisonNetMonthly: Math.min(MAX_COMPARISON_NET_EUR, n) });
                      }
                    }}
                    aria-label="Expected net salary per month in euros"
                  />
                ) : null}
                {input.showSalaryComparison ? (
                  <p id="col-net-compare-hint" className="mt-2 inline-flex flex-wrap items-center gap-1 text-xs text-copilot-text-secondary">
                    Compared to the <strong className="text-copilot-text-primary">balanced</strong> band after Calculate.
                    <Tip text="Balanced = recurring plus a healthier savings cushion in this model — not the same as your monthly cost total." />
                  </p>
                ) : null}
              </div>
            </SectionCard>
        </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 ring-1 ring-copilot-primary/[0.06] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-copilot-text-secondary">
              Set your scenario above, then click <strong className="text-copilot-text-primary">Calculate</strong> for monthly totals, setup cash, and salary bands — same pacing as our other calculators.
            </p>
            <Button
              type="button"
              className="min-h-11 w-full shrink-0 sm:w-auto sm:min-w-[12rem]"
              disabled={isCalculating}
              onClick={() => {
                trackCostOfLivingCalculator("related_tool_clicked", { target: "calculate" });
                handleCalculate();
              }}
            >
              {isCalculating ? "Calculating…" : "Calculate"}
            </Button>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#compare-scenarios"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-copilot-primary/20 px-5 py-2.5 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/80 sm:w-auto"
              onClick={() => trackCostOfLivingCalculator("related_tool_clicked", { target: "compare_scenarios_cta" })}
            >
              Jump to compare table
            </Link>
            <Link
              href="#tool-results"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-copilot-primary/15 px-5 py-2.5 text-sm font-semibold text-copilot-text-secondary hover:bg-copilot-bg-soft/80 sm:w-auto"
              onClick={() => trackCostOfLivingCalculator("related_tool_clicked", { target: "results_panel_cta" })}
            >
              Jump to results panel
            </Link>
          </div>
      </div>

      <div className="border-t border-copilot-primary/10 pt-8 md:pt-10" />

      <section
        id="tool-results"
        className="scroll-mt-28 space-y-5 md:scroll-mt-32 md:space-y-6"
        aria-labelledby="col-results-heading"
        aria-live="polite"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="col-results-heading" className="text-lg font-semibold text-copilot-text-primary md:text-xl">
            Results
          </h2>
          <p className="text-xs text-copilot-text-secondary">Shown after you run Calculate — scroll up to adjust inputs anytime.</p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {isCalculating ? (
            <div className="space-y-3">
              <ToolResultsLoading message="Estimating monthly costs, setup cash, and salary bands…" />
              <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/10" aria-hidden>
                <div
                  className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          ) : null}

          {!isCalculating && !hasFinishedRun ? (
            <InfoBox title="Ready when you are" variant="info">
              <p className="text-sm text-slate-700">
                Enter your city, household, and lifestyle assumptions, then click <strong>Calculate</strong> for indicative monthly costs, one-time setup, buffers, and optional salary targets.
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

          {!isCalculating && hasFinishedRun && displayedInput && displayedResult ? (
            <ResultsColumn
              input={displayedInput}
              result={displayedResult}
              comparisonRows={displayedComparisonRows}
              comparisonGap={comparisonGap}
              maxMonthlySlice={maxMonthlySlice}
              exportNotes={exportNotes}
              setExportNotes={setExportNotes}
              buildExportPayload={buildExportPayload}
              onDownloadHtml={handleDownloadHtml}
              onPrintSummary={handlePrintSummary}
              onOpenSummaryTab={handleOpenSummaryTab}
              applyInputPatch={patch}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}

function ResultsColumn({
  input,
  result,
  comparisonRows,
  comparisonGap,
  maxMonthlySlice,
  exportNotes,
  setExportNotes,
  buildExportPayload,
  onDownloadHtml,
  onPrintSummary,
  onOpenSummaryTab,
  applyInputPatch,
}: {
  input: ColInput;
  result: ColResult;
  comparisonRows: ReturnType<typeof buildComparisonRows>;
  comparisonGap: number | null;
  maxMonthlySlice: number;
  exportNotes: string;
  setExportNotes: (s: string) => void;
  buildExportPayload: () => ColExportPayload;
  onDownloadHtml: () => Promise<void>;
  onPrintSummary: () => Promise<void>;
  onOpenSummaryTab: () => Promise<void>;
  applyInputPatch: (p: Partial<ColInput>) => void;
}) {
  const cur = input.currency;
  const [grossDetailOpen, setGrossDetailOpen] = useState(false);
  const compareStory = useMemo(() => compareNarrative(comparisonRows, cur), [comparisonRows, cur]);
  return (
    <div className="space-y-5 md:space-y-6">
      <DisclaimerCallout />

      {input.housingMode === "already_arranged" ? (
        <div className="rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/70 px-4 py-3 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
          <strong className="text-copilot-text-primary">Housing already arranged:</strong> the model still shows a small rent-style line as a cash-planning anchor. If your real cost is zero, switch to manual rent and enter{" "}
          <span className="font-medium">1</span> or ignore that line against your own spreadsheet.
        </div>
      ) : null}

      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] sm:p-5 md:p-6 border-t-[3px] border-t-copilot-primary/45">
        <h3 className="text-base font-semibold text-copilot-text-primary sm:text-lg">Summary</h3>
        <div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-3">
          <SummaryCard
            label="Estimated monthly living cost"
            value={formatColMoney(result.monthly.totalEur, cur)}
            labelTip="Sum of all active monthly lines in this run — directional, not a contract budget."
          />
          <SummaryCard
            label="One-time setup"
            value={formatColMoney(result.setup.totalEur, cur)}
            labelTip="Cash before keys: deposit timing, furniture, travel, overlap weeks, bike/OV, admin, agency slice, contingency."
          />
          <SummaryCard
            label="First-month cash need"
            value={formatColMoney(result.firstMonthCashEur, cur)}
            labelTip="Setup total plus about one month of recurring costs — separate from the emergency buffer line."
          />
          <SummaryCard
            label="Emergency buffer (recommended)"
            value={formatColMoney(result.emergencyBufferEur, cur)}
            labelTip="Reserve on top of recurring for payslip gaps and shocks — see explanation below."
          />
          <SummaryCard
            label="Pre-move buffer (setup + emergency)"
            value={formatColMoney(result.savingsBufferBeforeMoveEur, cur)}
            labelTip="Rough savings target before you move: one-time setup plus emergency reserve."
          />
          <SummaryCard
            label="Balanced net salary target"
            value={input.showSalaryTargets ? formatColMoney(result.recommendedNetSalaryMonthlyEur, cur) : "—"}
            labelTip="Higher than monthly total on purpose: includes savings and headroom — not the same as recurring spend."
          />
        </div>
        <EmergencyBufferExplanation
          bufferEur={result.emergencyBufferEur}
          monthlyRecurringEur={result.monthly.totalEur}
          planningMonths={result.emergencyBufferPlanningMonths}
          currency={cur}
        />
        <FirstMonthCashCallout
          firstMonthCashEur={result.firstMonthCashEur}
          setupEur={result.setup.totalEur}
          monthlyEur={result.monthly.totalEur}
          currency={cur}
        />
        <TrustUnderestimatesBlock items={result.trustUnderestimates} />
        <TopDriversBlock drivers={result.topMonthlyDrivers} currency={cur} />
        <IncludedExcludedBlock />
      </div>

      <InterpretationBlock result={result} />

      <div>
        <h3 className="text-base font-semibold text-copilot-text-primary">Monthly breakdown (visual)</h3>
        <p className="mt-1 text-xs text-copilot-text-secondary">
          Grouped: core housing & essentials, living spend, then risk/admin slices. Childcare stays its own line when enabled.
        </p>
        <div className="mt-3 space-y-5 rounded-xl bg-copilot-bg-soft/50 p-3 ring-1 ring-copilot-primary/[0.06] sm:p-4">
          {(["core", "living", "risk"] as const).map((g) => {
            const groupItems = result.monthly.items.filter((i) => i.group === g);
            if (!groupItems.length) return null;
            return (
              <div key={g}>
                <h4 className="text-xs font-bold uppercase tracking-wide text-copilot-primary">{MONTHLY_GROUP_LABELS[g]}</h4>
                <div className="mt-2 space-y-3 sm:space-y-2">
                  {groupItems.map((row) => (
                    <div
                      key={row.id}
                      className="rounded-lg bg-copilot-surface/80 p-3 text-sm sm:flex sm:items-center sm:gap-3 sm:bg-transparent sm:p-0"
                    >
                      <span className="flex min-w-0 items-start gap-1 font-medium text-copilot-text-primary sm:w-[38%] sm:shrink-0 sm:font-normal sm:text-copilot-text-secondary">
                        {row.label}
                        {row.whyItMatters ? <Tip text={row.whyItMatters} label={row.label} /> : null}
                      </span>
                      <div className="mt-2 flex items-center gap-2 sm:mt-0 sm:min-w-0 sm:flex-1">
                        <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-copilot-surface">
                          <div
                            className="h-2 rounded-full bg-copilot-primary/80"
                            style={{ width: `${Math.max(6, (row.amountEur / maxMonthlySlice) * 100)}%` }}
                            role="presentation"
                          />
                        </div>
                        <span className="w-[5.5rem] shrink-0 text-right font-semibold text-copilot-text-primary sm:w-24">
                          {formatColMoney(row.amountEur, cur)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="monthly-budget" className="scroll-mt-28 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">Monthly breakdown (table)</h3>
        <BreakdownTable rows={result.monthly.items} total={result.monthly.totalEur} currency={cur} />
      </div>

      <div id="setup-costs" className="scroll-mt-28 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">Setup breakdown</h3>
        <BreakdownTable rows={result.setup.items} total={result.setup.totalEur} currency={cur} />
      </div>

      <div id="salary-target" className="scroll-mt-28 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">Suggested monthly net salary (planning)</h3>
        <p className="mt-1 text-sm text-copilot-text-secondary">
          Bands are <strong>not</strong> payroll outcomes — they add thin-to-strong headroom on top of recurring lines so you can save and absorb shocks. The 30% ruling toggle only nudges these anchors; use the{" "}
          <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
            30% ruling calculator
          </Link>{" "}
          for eligibility detail.
        </p>
        {!input.showSalaryTargets ? (
          <p className="mt-2 text-sm text-copilot-text-secondary">Enable “Show salary target recommendations” in the form to see bands.</p>
        ) : result.salaryTargets ? (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <SalaryBand
                title="Bare minimum / essential"
                amount={formatColMoney(result.salaryTargets.essentialNetMonthlyEur, cur)}
                hint="Just above recurring with a thin margin — little room for surprises."
              />
              <SalaryBand
                title="Balanced"
                amount={formatColMoney(result.salaryTargets.balancedNetMonthlyEur, cur)}
                hint="Default negotiation anchor: recurring + healthier savings and lifestyle cushion."
              />
              <SalaryBand
                title="Comfortable"
                amount={formatColMoney(result.salaryTargets.comfortableNetMonthlyEur, cur)}
                hint="More discretionary and travel headroom versus this model — still not “luxury”."
              />
            </div>
            <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/70 p-4 text-sm ring-1 ring-copilot-primary/[0.06]">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left font-semibold text-copilot-text-primary"
                onClick={() => setGrossDetailOpen((o) => !o)}
                aria-expanded={grossDetailOpen}
              >
                Directional gross (from balanced net)
                <span className="text-copilot-text-secondary">{grossDetailOpen ? "−" : "+"}</span>
              </button>
              {grossDetailOpen ? (
                <p className="mt-2 text-copilot-text-secondary">
                  Very rough <strong>annual gross</strong> implied by the balanced net band: about{" "}
                  <strong>{formatColMoney(result.salaryTargets.directionalGrossAnnualFromBalancedNetEur, cur)}</strong> / year,
                  using a single planning tax wedge — <strong>not</strong> your real payroll. For real gross ↔ net, use the{" "}
                  <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                    Dutch salary net calculator
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </>
        ) : null}
        {result.salaryTargets?.rulingNote ? (
          <p className="mt-4 text-sm italic text-copilot-text-secondary">{result.salaryTargets.rulingNote}</p>
        ) : null}
        <p className="mt-3 text-sm text-copilot-text-secondary">
          Cross-check with the{" "}
          <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
            Dutch salary net calculator
          </Link>{" "}
          and{" "}
          <Link href={`${BASE}/work/tools/payslip-decoder/`} className="font-semibold text-copilot-primary hover:underline">
            payslip decoder
          </Link>
          . These targets are not legal or tax advice.
        </p>
        {result.netSalaryComparisonInsight ? (
          <p className="mt-4 rounded-lg border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-secondary">
            {result.netSalaryComparisonInsight}
          </p>
        ) : null}
        {comparisonGap != null && !result.netSalaryComparisonInsight ? (
          <p
            className={cn(
              "mt-4 rounded-lg px-3 py-2 text-sm font-medium",
              comparisonGap <= 0 ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-950"
            )}
          >
            {comparisonGap <= 0
              ? `Your entered net (${formatColMoney(input.comparisonNetMonthly!, cur)}) meets or exceeds the balanced band (margin ${formatColMoney(-comparisonGap, cur)}).`
              : `Your entered net is about ${formatColMoney(comparisonGap, cur)} below the balanced band.`}
          </p>
        ) : null}
      </div>

      <div id="compare-scenarios" className="scroll-mt-28 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">Compare scenarios</h3>
        {input.compareScenariosEnabled && comparisonRows.length > 1 ? (
          <>
            <p className="mt-1 text-sm text-copilot-text-secondary">
              Same engine, different assumptions. Δ columns show <strong>savings vs your scenario</strong> when positive (your totals minus the alternative). Childcare, housing, and city changes flow through automatically.
            </p>
            {compareStory ? (
              <p className="mt-3 rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/80 px-3 py-2 text-sm text-copilot-text-secondary">
                {compareStory}
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="secondary"
                className="min-h-9 border-copilot-primary/15 text-xs"
                onClick={() => {
                  applyInputPatch({ compareScenariosEnabled: true, childcareNeeded: false, childcareIntensity: "none" });
                  document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Prep inputs: compare without childcare
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="min-h-9 border-copilot-primary/15 text-xs"
                onClick={() => {
                  applyInputPatch({ compareScenariosEnabled: true, lifestyle: "basic", diningLevel: "low" });
                  document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Prep inputs: leaner lifestyle tier
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="min-h-9 border-copilot-primary/15 text-xs"
                onClick={() => {
                  applyInputPatch({ compareScenariosEnabled: true, neighborhood: "commuter" });
                  document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Prep inputs: commuter belt
              </Button>
            </div>
            <p className="mt-2 text-xs text-copilot-text-secondary">Then click <strong>Calculate</strong> again to refresh results.</p>
            <div className="mt-3 space-y-3 md:hidden">
              {comparisonRows.map((r) => {
                const base = comparisonRows[0]?.result;
                const dm =
                  r.id === "a" || !base ? null : base.monthly.totalEur - r.result.monthly.totalEur;
                const ds = r.id === "a" || !base ? null : base.setup.totalEur - r.result.setup.totalEur;
                const dn = r.id === "a" || !base ? null : base.recommendedNetSalaryMonthlyEur - r.result.recommendedNetSalaryMonthlyEur;
                return (
                  <div
                    key={r.id}
                    className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
                  >
                    <p className="text-sm font-semibold leading-snug text-copilot-text-primary">{r.label}</p>
                    <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Monthly</dt>
                        <dd className="font-semibold text-copilot-text-primary">{formatColMoney(r.result.monthly.totalEur, cur)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Δ monthly</dt>
                        <dd className="font-semibold text-copilot-text-primary">
                          {dm == null ? "—" : formatColMoney(dm, cur)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Setup</dt>
                        <dd className="font-semibold text-copilot-text-primary">{formatColMoney(r.result.setup.totalEur, cur)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Δ setup</dt>
                        <dd className="font-semibold text-copilot-text-primary">
                          {ds == null ? "—" : formatColMoney(ds, cur)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Balanced net</dt>
                        <dd className="font-semibold text-copilot-text-primary">{formatColMoney(r.result.recommendedNetSalaryMonthlyEur, cur)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Δ balanced net</dt>
                        <dd className="font-semibold text-copilot-text-primary">
                          {dn == null ? "—" : formatColMoney(dn, cur)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 hidden overflow-x-auto rounded-xl md:block md:ring-1 md:ring-copilot-primary/[0.08]">
              <table className="w-full min-w-[860px] border-collapse text-sm">
                <thead>
                  <tr className="bg-copilot-bg-soft/90 text-left text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
                    <th className="px-3 py-3">Scenario</th>
                    <th className="px-3 py-3 text-right">Monthly</th>
                    <th className="px-3 py-3 text-right">Δ mo.</th>
                    <th className="px-3 py-3 text-right">Setup</th>
                    <th className="px-3 py-3 text-right">Δ setup</th>
                    <th className="px-3 py-3 text-right">Balanced net</th>
                    <th className="px-3 py-3 text-right">Δ net</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r) => {
                    const base = comparisonRows[0]?.result;
                    const dm =
                      r.id === "a" || !base ? "—" : formatColMoney(base.monthly.totalEur - r.result.monthly.totalEur, cur);
                    const ds =
                      r.id === "a" || !base ? "—" : formatColMoney(base.setup.totalEur - r.result.setup.totalEur, cur);
                    const dn =
                      r.id === "a" || !base
                        ? "—"
                        : formatColMoney(base.recommendedNetSalaryMonthlyEur - r.result.recommendedNetSalaryMonthlyEur, cur);
                    return (
                      <tr key={r.id} className="border-t border-copilot-primary/[0.06] bg-copilot-surface">
                        <td className="px-3 py-3 text-copilot-text-primary">{r.label}</td>
                        <td className="px-3 py-3 text-right font-medium">{formatColMoney(r.result.monthly.totalEur, cur)}</td>
                        <td className="px-3 py-3 text-right font-medium">{dm}</td>
                        <td className="px-3 py-3 text-right font-medium">{formatColMoney(r.result.setup.totalEur, cur)}</td>
                        <td className="px-3 py-3 text-right font-medium">{ds}</td>
                        <td className="px-3 py-3 text-right font-medium">{formatColMoney(r.result.recommendedNetSalaryMonthlyEur, cur)}</td>
                        <td className="px-3 py-3 text-right font-medium">{dn}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="mt-2 text-sm text-copilot-text-secondary">
            Turn on “Compare alternative scenarios” in the form to generate several alternatives (commuter belt, cheaper city, smaller home, leaner lifestyle, without childcare, without pet when relevant), then Calculate.
          </p>
        )}
      </div>

      <div id="download-summary" className="scroll-mt-28 rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-md md:scroll-mt-32 md:p-6">
        <h3 className="text-base font-semibold text-copilot-text-primary">Download summary</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          HTML export includes inputs, results, monthly and setup tables, comparison (if enabled), assumptions note, and disclaimer. Print or save as PDF from your browser.
        </p>
        <label htmlFor="col-export-notes" className="mt-4 block text-sm font-medium text-copilot-text-primary">
          Optional notes for your file
        </label>
        <textarea
          id="col-export-notes"
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/25"
          placeholder="e.g. Employer A offer — confirm housing allowance"
          value={exportNotes}
          onChange={(e) => setExportNotes(e.target.value)}
        />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" variant="secondary" className="min-h-11 w-full sm:w-auto" onClick={() => void onDownloadHtml()}>
            Download HTML
          </Button>
          <Button type="button" className="min-h-11 w-full sm:w-auto" onClick={() => void onPrintSummary()}>
            Print / Save as PDF
          </Button>
        </div>
        <p className="mt-3 text-xs text-copilot-text-secondary">
          <button
            type="button"
            className="font-semibold text-copilot-primary hover:underline"
            onClick={() => void onOpenSummaryTab()}
          >
            Open summary in new tab
          </button>
        </p>
      </div>
    </div>
  );
}

function FirstMonthCashCallout({
  firstMonthCashEur,
  setupEur,
  monthlyEur,
  currency,
}: {
  firstMonthCashEur: number;
  setupEur: number;
  monthlyEur: number;
  currency: ColInput["currency"];
}) {
  const ratio = monthlyEur > 0 ? setupEur / monthlyEur : 0;
  const ratioRounded = Math.round(ratio * 10) / 10;
  const setupVsRecurring =
    ratio >= 2.5
      ? `often about ${ratioRounded}× your monthly recurring in cash-heavy moves`
      : ratio >= 1.5
        ? `often around ${ratioRounded}× monthly recurring when deposits and overlap stack up`
        : "can still be a large lump sum versus recurring because deposits and overlap stack";
  return (
    <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-copilot-surface px-3 py-3 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] sm:px-4">
      <p className="flex items-start gap-1 font-semibold text-copilot-text-primary">
        First-month cash need
        <Tip
          text="Setup (deposit, overlap, travel, furniture, admin) plus roughly one month of recurring — not the same as your long-run monthly burn."
          label="First-month cash need"
        />
      </p>
      <p className="mt-2">
        In this run, first-month cash is about{" "}
        <strong className="text-copilot-text-primary">{formatColMoney(firstMonthCashEur, currency)}</strong> (
        {formatColMoney(setupEur, currency)} setup + ~1× {formatColMoney(monthlyEur, currency)} recurring). One-time setup{" "}
        <strong>{setupVsRecurring}</strong> — competition for housing and paying short-stay plus a lease overlap are common
        reasons.
      </p>
    </div>
  );
}

function TrustUnderestimatesBlock({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-4 rounded-xl border border-amber-200/60 bg-amber-50/50 px-3 py-3 text-sm text-amber-950 ring-1 ring-amber-200/40 sm:px-4">
      <p className="font-semibold text-amber-950">Common underestimates for this scenario</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-amber-900/90">Directional flags only — confirm with quotes and your contract.</p>
    </div>
  );
}

function TopDriversBlock({
  drivers,
  currency,
}: {
  drivers: ColResult["topMonthlyDrivers"];
  currency: ColInput["currency"];
}) {
  if (!drivers.length) return null;
  return (
    <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/60 px-3 py-3 text-sm ring-1 ring-copilot-primary/[0.06] sm:px-4">
      <p className="font-semibold text-copilot-text-primary">Top monthly cost drivers</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-copilot-text-secondary">
        {drivers.map((d) => (
          <li key={d.id}>
            <span className="font-medium text-copilot-text-primary">{d.label}</span>
            {" — "}
            {formatColMoney(d.amountEur, currency)}
          </li>
        ))}
      </ol>
    </div>
  );
}

function IncludedExcludedBlock() {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface/80 p-3 text-sm ring-1 ring-copilot-primary/[0.05] sm:p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">What we include</p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-copilot-text-secondary">
          <li>Planning-level housing and recurring living costs</li>
          <li>One-time setup estimates (deposit, overlap, travel, essentials, buffer)</li>
          <li>Optional childcare as its own monthly line when enabled</li>
        </ul>
      </div>
      <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface/80 p-3 text-sm ring-1 ring-copilot-primary/[0.05] sm:p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">What we do not include</p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-copilot-text-secondary">
          <li>Exact rent quotes or landlord-specific fees</li>
          <li>Personal tax edge cases, debt, equity, or employer benefits</li>
          <li>Exact international school tuition (placeholder only)</li>
        </ul>
      </div>
    </div>
  );
}

function formatPlanningMonthsLabel(n: number): string {
  const roundedTenth = Math.round(n * 10) / 10;
  return Math.abs(roundedTenth - Math.round(n)) < 0.05 ? String(Math.round(n)) : roundedTenth.toFixed(1);
}

function EmergencyBufferExplanation({
  bufferEur,
  monthlyRecurringEur,
  planningMonths,
  currency,
}: {
  bufferEur: number;
  monthlyRecurringEur: number;
  planningMonths: number;
  currency: ColInput["currency"];
}) {
  const monthsLabel = formatPlanningMonthsLabel(planningMonths);
  return (
    <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/70 px-3 py-3 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] sm:px-4 sm:py-3.5">
      <p className="font-semibold text-copilot-text-primary">Why we recommend an emergency buffer</p>
      <p className="mt-2">
        Arrival and your first months in the Netherlands rarely match a spreadsheet. The{" "}
        <strong className="text-copilot-text-primary">{formatColMoney(bufferEur, currency)}</strong> line is{" "}
        <strong>cash kept in reserve</strong> after you plan for one-time setup — it is not an extra copy of rent or other
        monthly lines already in your total. In this model it equals about <strong>{monthsLabel} months</strong> of your
        estimated recurring living cost (
        {formatColMoney(monthlyRecurringEur, currency)} × {monthsLabel}), adjusted in the engine for household size,
        housing type, childcare, and how far you are moving.
      </p>
      <p className="mt-2">
        That reserve helps if your first payslip is late, a deposit or bill is higher than expected, you need short-term
        bridging cash, or reality runs above this estimate. <strong className="text-copilot-text-primary">First-month cash need</strong> is
        setup plus roughly <strong>one</strong> month of recurring costs only; the buffer is <strong>on top</strong>, not
        double-counted there. <strong className="text-copilot-text-primary">Pre-move buffer</strong> combines one-time setup
        with this emergency reserve as a rough savings target before you move. Adjust to your own comfort, contract, and
        any employer relocation support.
      </p>
    </div>
  );
}

function DisclaimerCallout() {
  return (
    <div className="rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-amber-950 ring-1 ring-amber-300/30">
      <p className="font-semibold">Planning estimate — not a quote</p>
      <p className="mt-2 leading-relaxed">
        Rents and energy move with the market; childcare and schools are personal. Salary bands are rough planning anchors — confirm with payroll, insurers, and your own numbers before you sign anything.
      </p>
    </div>
  );
}

function SummaryCard({ label, value, labelTip }: { label: string; value: string; labelTip?: string }) {
  return (
    <div className="relative z-0 rounded-xl bg-copilot-bg-soft/90 p-4 ring-1 ring-copilot-primary/[0.06] has-[button[aria-expanded='true']]:z-30">
      <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
        {label}
        {labelTip ? <Tip text={labelTip} label={label} /> : null}
      </p>
      <p className="mt-1 text-xl font-bold text-copilot-text-primary">{value}</p>
    </div>
  );
}

function InterpretationBlock({ result }: { result: ColResult }) {
  const { interpretation } = result;
  return (
    <div className="space-y-3 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-5 ring-1 ring-copilot-primary/[0.06]">
      <h3 className="text-base font-semibold text-copilot-text-primary">How to read your result</h3>
      <p className="text-xs text-copilot-text-secondary">
        Planning estimate — directional. Use real quotes for housing, energy, insurance, and childcare.
      </p>
      <div className="space-y-3 text-sm leading-relaxed text-copilot-text-secondary">
        <p>
          <strong className="text-copilot-text-primary">Biggest driver:</strong> {interpretation.biggestDriver}
        </p>
        <p>
          <strong className="text-copilot-text-primary">Largest monthly lines:</strong> {interpretation.topThreeDriversSummary}
        </p>
        {interpretation.childcareContext ? (
          <p>
            <strong className="text-copilot-text-primary">Childcare:</strong> {interpretation.childcareContext}
          </p>
        ) : null}
        <p>
          <strong className="text-copilot-text-primary">What often surprises expats:</strong> {interpretation.surprises}
        </p>
        <p>
          <strong className="text-copilot-text-primary">Where you might reduce costs:</strong> {interpretation.reduceCosts}
        </p>
        <p>
          <strong className="text-copilot-text-primary">One-time vs recurring:</strong> {interpretation.oneTimeVsRecurring}
        </p>
      </div>
    </div>
  );
}

function SalaryBand({ title, amount, hint }: { title: string; amount: string; hint: string }) {
  return (
    <div className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{title}</p>
      <p className="mt-2 text-2xl font-bold text-copilot-text-primary">{amount}</p>
      <p className="mt-2 text-xs text-copilot-text-secondary">{hint}</p>
    </div>
  );
}

function BreakdownTable({
  rows,
  total,
  currency,
}: {
  rows: ColLineItem[];
  total: number;
  currency: ColInput["currency"];
}) {
  return (
    <div className="mt-3 overflow-x-auto rounded-xl ring-1 ring-copilot-primary/[0.08]">
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="bg-copilot-bg-soft/90 text-left text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
            <th className="px-4 py-3">Line</th>
            <th className="px-4 py-3 text-right">Estimate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-copilot-primary/[0.06] bg-copilot-surface">
              <td className="px-4 py-3 text-copilot-text-primary">
                <span className="inline-flex items-center gap-1">
                  {row.label}
                  {row.whyItMatters ? <Tip text={row.whyItMatters} label={row.label} /> : null}
                </span>
                {row.note ? <span className="mt-1 block text-xs font-normal text-copilot-text-secondary">{row.note}</span> : null}
              </td>
              <td className="px-4 py-3 text-right font-semibold text-copilot-text-primary">{formatColMoney(row.amountEur, currency)}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-copilot-primary/15 bg-copilot-bg-soft/80 font-semibold">
            <td className="px-4 py-3 text-copilot-text-primary">Total</td>
            <td className="px-4 py-3 text-right text-copilot-text-primary">{formatColMoney(total, currency)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
