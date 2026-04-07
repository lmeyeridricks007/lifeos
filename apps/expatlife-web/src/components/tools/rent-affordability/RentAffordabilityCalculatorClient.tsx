"use client";

import type { ReactNode } from "react";
import { Fragment, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import { trackRentAffordabilityCalculator } from "@/lib/analytics/track";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { computeRentAffordability } from "@/src/lib/tools/rent-affordability/computeRentAffordability";
import { RA_DEFAULT_INPUTS, mergeRaInputs } from "@/src/lib/tools/rent-affordability/defaultInputs";
import { patchForHouseholdPreset } from "@/src/lib/tools/rent-affordability/householdPresetDefaults";
import {
  downloadRentAffordabilityHtml,
  openPrintRentAffordabilitySummary,
  openRentAffordabilitySummaryTab,
  RA_EXPORT_DISCLAIMER_DEFAULT,
  type RaExportPayload,
} from "@/src/lib/tools/rent-affordability/exportHtml";
import {
  hasRaUrlParams,
  loadRaFromStorage,
  parseRaSearchParams,
  raInputToSearchParams,
  sanitizeRaInput,
  saveRaToStorage,
} from "@/src/lib/tools/rent-affordability/urlState";
import type { RaCity, RaComputation, RaInputs, RaLandlordRule } from "@/src/types/tools/rent-affordability";
import { RentAffordabilityTip } from "./RentAffordabilityTip";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const BASE = "/netherlands";

const CITIES: { value: RaCity; label: string }[] = [
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
  { value: "amstelveen", label: "Amstelveen" },
  { value: "other", label: "Other Netherlands" },
];

function fmtEur(n: number): string {
  return `€${Math.round(n).toLocaleString("en-NL")}`;
}

type FocusTone = "good" | "watch" | "risk";

type FocusItem = {
  title: string;
  detail: string;
  tone: FocusTone;
};

type AreaRealismIndicator = {
  title: string;
  tone: FocusTone;
  summary: string;
  checks: string[];
};

function effectiveChildrenCount(input: RaInputs): number {
  if (input.householdPreset === "family1") return 1;
  if (input.householdPreset === "family2") return 2;
  if (input.householdPreset === "custom") return Math.max(0, input.childrenCount);
  return 0;
}

function buildFocusItems(input: RaInputs, result: RaComputation): FocusItem[] {
  const items: FocusItem[] = [];
  if (result.affordabilityStatus && result.rentForComparisonEur) {
    const label =
      result.affordabilityStatus === "comfortable"
        ? "Target rent is in a comfortable band"
        : result.affordabilityStatus === "acceptable"
          ? "Target rent looks acceptable with caution"
          : result.affordabilityStatus === "stretch"
            ? "Target rent is a stretch"
            : "Target rent is risky for this profile";
    const tone: FocusTone =
      result.affordabilityStatus === "comfortable"
        ? "good"
        : result.affordabilityStatus === "acceptable"
          ? "watch"
          : "risk";
    items.push({
      title: label,
      detail: `Target ${fmtEur(result.rentForComparisonEur)} vs recommended ${fmtEur(result.maxRent.recommendedEur)}.`,
      tone,
    });
  } else {
    items.push({
      title: "Set a target rent to evaluate listing fit",
      detail: "Switch housing to target rent to get a direct fit signal.",
      tone: "watch",
    });
  }

  if (!result.selectedLandlordCheck.passes) {
    items.push({
      title: "Landlord screening may block this rent",
      detail: `At x${result.selectedLandlordCheck.multiplier}, required gross is ${fmtEur(result.selectedLandlordCheck.requiredGrossMonthlyEur)}.`,
      tone: "risk",
    });
  } else if (result.selectedLandlordCheck.status === "borderline") {
    items.push({
      title: "Landlord screening is borderline",
      detail: `At x${result.selectedLandlordCheck.multiplier}, you are close to the cut-off.`,
      tone: "watch",
    });
  } else {
    items.push({
      title: "Landlord screening looks workable",
      detail: `At x${result.selectedLandlordCheck.multiplier}, your gross passes this benchmark.`,
      tone: "good",
    });
  }

  items.push({
    title: "Biggest budget pressure",
    detail: result.narrative.biggestCostDriver,
    tone: "watch",
  });

  items.push({
    title: "Plan move-in cash first",
    detail: `First month cash need is ${fmtEur(result.setup.firstMonthCashEur)}; suggested buffer ${fmtEur(result.setup.savingsBufferEur)}.`,
    tone: input.setupDeposit || input.setupFirstMonth ? "watch" : "good",
  });

  return items.slice(0, 4);
}

function buildAreaRealismIndicator(input: RaInputs, result: RaComputation): AreaRealismIndicator {
  const cityLabel = CITIES.find((c) => c.value === input.city)?.label ?? "selected city";
  const areaLabel =
    input.neighborhoodTier === "premium"
      ? "Center / premium"
      : input.neighborhoodTier === "outer"
        ? "Outer district"
        : input.neighborhoodTier === "commuter"
          ? "Commuter belt"
          : "Standard";

  if (!result.rentForComparisonEur || result.rentForComparisonEur <= 0) {
    return {
      title: "Set a target rent to check area realism",
      tone: "watch",
      summary: `You selected ${cityLabel} (${areaLabel}). Enter a target monthly rent to estimate if that rent is realistic and achievable for this area and profile.`,
      checks: [
        "Area profile selected",
        "Target rent not set yet",
        "No realism assessment until target rent is provided",
      ],
    };
  }

  const targetRent = result.rentForComparisonEur;
  const areaBaseline = Math.max(1, result.modelRentColdEur);
  const areaFitRatio = targetRent / areaBaseline;
  const affordability = result.affordabilityStatus;
  const landlordPass = result.selectedLandlordCheck.passes;
  const landlordBorderline = result.selectedLandlordCheck.status === "borderline";

  let tone: FocusTone = "watch";
  let title = "Borderline for this area";
  let summary =
    "Possible, but expect compromises (location, home size, condition, or listing speed) to keep this rent workable.";

  if ((affordability === "comfortable" || affordability === "acceptable") && landlordPass && areaFitRatio >= 0.92) {
    tone = "good";
    title = "Realistic and achievable in this area";
    summary = "This target rent looks aligned with local pricing and your profile in this model.";
  } else if (affordability === "risky" || (!landlordPass && !landlordBorderline) || areaFitRatio < 0.82) {
    tone = "risk";
    title = "Unlikely as currently set";
    summary = "This target rent is likely difficult for this area/profile combination without changing assumptions.";
  }

  return {
    title,
    tone,
    summary: `${summary} Area: ${cityLabel} (${areaLabel}).`,
    checks: [
      `Target vs local model: ${fmtEur(targetRent)} vs ${fmtEur(areaBaseline)} (${Math.round(areaFitRatio * 100)}%)`,
      `Affordability band: ${affordability ?? "not scored"}`,
      `Landlord screening (${result.selectedLandlordCheck.multiplier}x): ${
        landlordPass ? "passes" : landlordBorderline ? "borderline" : "fails"
      }`,
    ],
  };
}

const MONTHLY_GROUPS: Array<{ id: string; label: string; match: (line: RaComputation["nonRent"]["lines"][number]) => boolean }> = [
  { id: "housing", label: "Housing", match: (l) => l.group === "housing" || l.id.includes("housing") },
  { id: "utilities", label: "Utilities & connectivity", match: (l) => ["utilities", "comms"].includes(String(l.group)) },
  { id: "core", label: "Core living", match: (l) => ["groceries", "health", "transport", "municipal"].includes(String(l.group)) },
  { id: "family", label: "Family & dependents", match: (l) => ["childcare", "pet"].includes(String(l.group)) || l.id.includes("school") },
  { id: "lifestyle", label: "Lifestyle & optional", match: (l) => ["dining", "misc", "optional_extra", "reserves"].includes(String(l.group)) },
  { id: "fixed", label: "Fixed obligations", match: (l) => ["debt", "other_fixed"].includes(String(l.group)) },
];

const SETUP_GROUPS: Array<{ id: string; label: string; ids: string[] }> = [
  { id: "lease", label: "Lease entry", ids: ["deposit", "first_month", "short_stay_overlap"] },
  { id: "arrival", label: "Move & arrival", ids: ["move_travel", "local_transport_setup", "admin"] },
  { id: "home", label: "Home setup", ids: ["furniture", "utility_setup"] },
  { id: "friction", label: "Friction & safety", ids: ["agency", "childcare_school_registration", "pet_relocation", "contingency"] },
];

function CardShell({
  sectionId,
  title,
  children,
}: {
  /** Optional anchor id (scroll-margin) for in-page navigation. */
  sectionId?: string;
  title: ReactNode;
  children: React.ReactNode;
}) {
  const gen = useId().replace(/:/g, "");
  const headingId = sectionId ? `${sectionId}-heading` : `ra-card-${gen}`;
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

const selectClass =
  "w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35";

type RentAffordabilityCalculatorClientProps = {
  calculatorCanonicalUrl: string;
  siteName: string;
};

export function RentAffordabilityCalculatorClient({
  calculatorCanonicalUrl,
  siteName,
}: RentAffordabilityCalculatorClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<RaInputs>(() => ({ ...RA_DEFAULT_INPUTS }));
  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasFinishedRun, setHasFinishedRun] = useState(false);
  const [lastCalculateKey, setLastCalculateKey] = useState("");
  const [displayedInput, setDisplayedInput] = useState<RaInputs | null>(null);
  const [displayedResult, setDisplayedResult] = useState<RaComputation | null>(null);
  const skipNextUrlWrite = useRef(true);
  const initialized = useRef(false);
  const startedLogged = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let merged = sanitizeRaInput({});
    if (hasRaUrlParams(sp)) {
      const fromUrl = parseRaSearchParams(sp);
      merged = sanitizeRaInput({ ...merged, ...(fromUrl ?? {}) });
    } else {
      const stored = loadRaFromStorage();
      if (stored) merged = sanitizeRaInput({ ...merged, ...stored });
    }
    setInput(merged);
    setHydrated(true);
    skipNextUrlWrite.current = true;
  }, []);

  const patch = useCallback((p: Partial<RaInputs>) => {
    setInput((prev) => mergeRaInputs({ ...prev, ...p }));
  }, []);

  const liveResult = useMemo<RaComputation | null>(() => computeRentAffordability(input), [input]);
  const currentInputKey = useMemo(() => raInputToSearchParams(input).toString(), [input]);
  const resultsStale = hasFinishedRun && lastCalculateKey !== "" && currentInputKey !== lastCalculateKey;
  const result = displayedResult;

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => {
    if (input.toolMode === "salary_for_rent" && input.rentMode !== "target") {
      patch({ rentMode: "target" });
      return;
    }
    if (input.toolMode === "max_rent" && input.rentMode !== "model") {
      patch({ rentMode: "model" });
    }
  }, [input.rentMode, input.toolMode, patch]);

  useEffect(() => {
    return () => {
      if (cancelCalcRunRef.current) cancelCalcRunRef.current();
    };
  }, []);

  useEffect(() => {
    if (!hydrated || startedLogged.current) return;
    startedLogged.current = true;
    trackRentAffordabilityCalculator("calculator_started", { path: pathname });
  }, [hydrated, pathname]);

  useEffect(() => {
    if (!hydrated) return;
    saveRaToStorage(input);
    if (skipNextUrlWrite.current) {
      skipNextUrlWrite.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      const q = raInputToSearchParams(input);
      const qs = q.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const buildExportPayload = useCallback((): RaExportPayload | null => {
    if (!result || !displayedInput) return null;
    return {
      siteName,
      generatedAtIso: new Date().toISOString(),
      disclaimer: RA_EXPORT_DISCLAIMER_DEFAULT,
      calculatorCanonicalUrl,
      input: displayedInput,
      result,
      planningNotes: displayedInput.userNotes || undefined,
    };
  }, [calculatorCanonicalUrl, displayedInput, result, siteName]);

  const onDownloadHtml = async () => {
    const p = buildExportPayload();
    if (!p) return;
    trackRentAffordabilityCalculator("summary_downloaded", { format: "html" });
    downloadRentAffordabilityHtml(p);
  };

  const onPrint = () => {
    const p = buildExportPayload();
    if (!p) return;
    trackRentAffordabilityCalculator("summary_downloaded", { format: "print_pdf" });
    openPrintRentAffordabilitySummary(p);
  };

  const onOpenTab = () => {
    const p = buildExportPayload();
    if (!p) return;
    trackRentAffordabilityCalculator("summary_downloaded", { format: "new_tab" });
    openRentAffordabilitySummaryTab(p);
  };

  const onCopyLink = async () => {
    const q = raInputToSearchParams(input);
    const url = `${calculatorCanonicalUrl.replace(/\/$/, "")}/?${q.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* ignore */
    }
    trackRentAffordabilityCalculator("summary_downloaded", { format: "copy_link" });
  };

  const onReset = () => {
    if (cancelCalcRunRef.current) cancelCalcRunRef.current();
    setInput({ ...RA_DEFAULT_INPUTS });
    setIsCalculating(false);
    setHasFinishedRun(false);
    setLastCalculateKey("");
    setDisplayedInput(null);
    setDisplayedResult(null);
    trackRentAffordabilityCalculator("mode_changed", { action: "reset_defaults" });
  };

  const scrollToResults = useCallback(() => {
    const el = document.getElementById("tool-results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    if (cancelCalcRunRef.current) cancelCalcRunRef.current();

    const snapshot = mergeRaInputs({ ...latestInputRef.current });
    const snapshotResult = computeRentAffordability(snapshot);
    const delayMs = 1200 + Math.floor(Math.random() * 700);
    let cancelled = false;
    setIsCalculating(true);

    const timer = window.setTimeout(() => {
      if (cancelled) return;
      setDisplayedInput(snapshot);
      setDisplayedResult(snapshotResult);
      setHasFinishedRun(true);
      setLastCalculateKey(raInputToSearchParams(snapshot).toString());
      setIsCalculating(false);
      trackRentAffordabilityCalculator("calculator_completed", {
        mode: snapshot.toolMode,
      });
      cancelCalcRunRef.current = null;
    }, delayMs);

    cancelCalcRunRef.current = () => {
      cancelled = true;
      window.clearTimeout(timer);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  const landlordRuleStr = String(input.landlordRuleMultiplier);

  const statusTone = (s: string | null | undefined) => {
    if (!s) return "border-copilot-primary/15 bg-copilot-bg-soft";
    if (s === "comfortable") return "border-emerald-500/30 bg-emerald-50/50";
    if (s === "acceptable") return "border-cyan-500/25 bg-cyan-50/40";
    if (s === "stretch") return "border-amber-500/30 bg-amber-50/45";
    return "border-rose-500/30 bg-rose-50/45";
  };

  const focusToneClass = (tone: FocusTone) => {
    if (tone === "good") return "border-emerald-500/35 bg-emerald-50/70";
    if (tone === "watch") return "border-amber-500/35 bg-amber-50/70";
    return "border-rose-500/35 bg-rose-50/70";
  };

  const highlightedRentCardLabel = useMemo(() => {
    if (!displayedInput || !displayedResult) return "Recommended max rent";
    if (displayedResult.affordabilityStatus === "stretch") return "Stretch max rent";
    if (displayedResult.affordabilityStatus === "risky") return "Safest max rent";
    return "Recommended max rent";
  }, [displayedInput, displayedResult]);

  const areaRealism = useMemo(() => {
    if (!displayedInput || !displayedResult) return null;
    return buildAreaRealismIndicator(displayedInput, displayedResult);
  }, [displayedInput, displayedResult]);

  const areaRealismBadgeLabel = useMemo(() => {
    if (!areaRealism) return null;
    if (areaRealism.tone === "good") return "Area: realistic";
    if (areaRealism.tone === "risk") return "Area: unlikely";
    return "Area: borderline";
  }, [areaRealism]);

  const areaRealismBadgeClass = useMemo(() => {
    if (!areaRealism) return "";
    if (areaRealism.tone === "good") {
      return "border-emerald-500/35 bg-emerald-50 text-emerald-700";
    }
    if (areaRealism.tone === "risk") {
      return "border-rose-500/35 bg-rose-50 text-rose-700";
    }
    return "border-amber-500/35 bg-amber-50 text-amber-700";
  }, [areaRealism]);

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <div className="scroll-mt-28 space-y-6 md:scroll-mt-32">
        <CardShell title="Tool mode">
          <SegmentedControl
            name="ra-tool-mode"
            pillTone="copilot"
            value={input.toolMode}
            onChange={(v) => {
              const nextMode = v as RaInputs["toolMode"];
              patch({
                toolMode: nextMode,
                ...(nextMode === "salary_for_rent"
                  ? { rentMode: "target" as const }
                  : { rentMode: "model" as const }),
              });
              trackRentAffordabilityCalculator("mode_changed", { toolMode: v });
            }}
            options={[
              { value: "max_rent", label: "Rent I can afford" },
              { value: "salary_for_rent", label: "Salary needed for this rent" },
            ]}
          />
          {input.toolMode === "salary_for_rent" ? (
            <p className="text-xs text-copilot-text-secondary">
              Salary mode uses your <strong className="text-copilot-text-primary">target monthly rent</strong> to compute required income.
            </p>
          ) : null}
        </CardShell>

        <CardShell
          title={
            <span className="inline-flex flex-wrap items-center gap-1">
              {input.toolMode === "salary_for_rent" ? "Salary assumptions" : "Income"}
              <RentAffordabilityTip
                label="Gross vs net"
                text="Landlord checks usually use gross pay; monthly budgeting uses net. Indicative gross-from-net uses the same simplified tax model as the Dutch salary net calculator — not your payroll slip."
              />
            </span>
          }
        >
          {input.toolMode === "salary_for_rent" ? (
            <InfoBox title="Current income not required" variant="info" className="text-sm">
              This mode calculates the salary needed from your target rent and household profile. Entering your current income is optional and not required here.
            </InfoBox>
          ) : (
            <>
              <SegmentedControl
                name="ra-income-entry-mode"
                pillTone="copilot"
                value={input.incomeEntryMode}
                onChange={(v) => patch({ incomeEntryMode: v as RaInputs["incomeEntryMode"] })}
                options={[
                  { value: "single_income", label: "Single income" },
                  { value: "combined_household_income", label: "Combined household income" },
                  { value: "primary_plus_partial_partner", label: "Primary + partial partner" },
                ]}
              />
              {input.incomeEntryMode === "primary_plus_partial_partner" ? (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">
                    Partner contribution counted in planning ({Math.round(input.partnerContributionShare * 100)}%)
                  </label>
                  <Input
                    inputMode="decimal"
                    className="rounded-xl border-copilot-primary/15"
                    value={Math.round(input.partnerContributionShare * 100)}
                    onChange={(e) =>
                      patch({
                        partnerContributionShare: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                      })
                    }
                  />
                </div>
              ) : null}
              <p className="text-xs text-copilot-text-secondary">
                Enter your <strong className="text-copilot-text-primary">combined household income</strong> (all adult earners). For a single applicant, enter only your own income.
              </p>
              <SegmentedControl
                name="ra-income-basis"
                pillTone="copilot"
                value={input.incomeBasis}
                onChange={(v) => patch({ incomeBasis: v as RaInputs["incomeBasis"] })}
                options={[
                  { value: "net", label: "Net income" },
                  { value: "gross", label: "Gross income" },
                ]}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ra-primary-income" className="mb-1.5 block text-sm font-medium text-copilot-text-primary">
                    {input.incomeBasis === "gross"
                      ? "Gross household income (monthly by default)"
                      : "Monthly net household income (all earners)"}
                  </label>
                  <Input
                    id="ra-primary-income"
                    inputMode="decimal"
                    className="rounded-xl border-copilot-primary/15"
                    value={input.incomeBasis === "gross" ? input.monthlyGross || "" : input.monthlyNet || ""}
                    onChange={(e) => {
                      const n = Number(e.target.value);
                      if (input.incomeBasis === "gross") patch({ monthlyGross: Number.isFinite(n) ? n : 0 });
                      else patch({ monthlyNet: Number.isFinite(n) ? n : 0 });
                    }}
                  />
                  {input.incomeBasis === "gross" ? (
                    <p className="mt-1 text-xs text-copilot-text-secondary">
                      Prefer annual entry? Add gross annual below; model will use annual when set.
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="ra-gross-annual" className="mb-1.5 block text-sm font-medium text-copilot-text-primary">
                    Gross annual (optional)
                  </label>
                  <Input
                    id="ra-gross-annual"
                    inputMode="decimal"
                    className="rounded-xl border-copilot-primary/15"
                    value={input.grossAnnual || ""}
                    onChange={(e) => patch({ grossAnnual: Number(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <label htmlFor="ra-bonus-annual" className="mb-1.5 block text-sm font-medium text-copilot-text-primary">
                    Annual bonus / variable (gross, optional)
                  </label>
                  <Input
                    id="ra-bonus-annual"
                    inputMode="decimal"
                    className="rounded-xl border-copilot-primary/15"
                    value={input.bonusAnnual || ""}
                    onChange={(e) => patch({ bonusAnnual: Number(e.target.value) || 0 })}
                  />
                </div>
              </div>
            </>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-copilot-text-secondary">
              <input
                type="checkbox"
                checked={input.includeHolidayAllowanceInGross}
                onChange={(e) => patch({ includeHolidayAllowanceInGross: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Include holiday allowance in gross salary planning
            </label>
            <div className="min-w-[280px]">
              <span className="mb-1.5 flex items-center gap-1 text-sm font-medium text-copilot-text-primary">
                30% ruling planning assumption
                <RentAffordabilityTip
                  label="30% ruling planning uplift"
                  text="30% ruling here is a planning assumption only. It does not confirm legal eligibility, employer approval, payroll application, or final applied percentage."
                />
              </span>
              <SegmentedControl
                name="ra-ruling"
                pillTone="copilot"
                value={input.rulingAssumption}
                onChange={(v) =>
                  patch({
                    rulingAssumption: v as RaInputs["rulingAssumption"],
                    apply30PercentRulingPlanning: v === "yes",
                  })
                }
                options={[
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe" },
                  { value: "yes", label: "Yes" },
                ]}
              />
            </div>
          </div>
          <p className="text-xs text-copilot-text-secondary">
            Eligibility and paperwork:{" "}
            <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
              30% ruling calculator →
            </Link>
          </p>
          {input.rulingAssumption === "maybe" ? (
            <InfoBox title="Blended ruling planning" variant="info" className="text-sm">
              This scenario uses a ruled/unruled net blend (often from a saved link). Turn the checkbox on for full 30% ruling planning or off to plan without the facility.
            </InfoBox>
          ) : input.rulingAssumption === "yes" ? (
            <InfoBox title="30% ruling disclaimer" variant="warn" className="text-sm">
              This page does not determine 30% ruling eligibility. The checkbox only adjusts indicative net from gross for planning.
            </InfoBox>
          ) : null}
        </CardShell>

        <CardShell title="Household">
          <SegmentedControl
            name="ra-household"
            pillTone="copilot"
            value={input.householdPreset}
            onChange={(v) => patch(patchForHouseholdPreset(v as RaInputs["householdPreset"]))}
            options={[
              { value: "single", label: "Single" },
              { value: "couple", label: "Couple" },
              { value: "family1", label: "Family + 1 child" },
              { value: "family2", label: "Family + 2 children" },
              { value: "custom", label: "Custom" },
            ]}
          />
          {input.householdPreset === "custom" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Adults</label>
                <Input
                  inputMode="numeric"
                  className="rounded-xl border-copilot-primary/15"
                  value={input.adultsCount}
                  onChange={(e) => patch({ adultsCount: Number(e.target.value) || 1 })}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Children</label>
                <Input
                  inputMode="numeric"
                  className="rounded-xl border-copilot-primary/15"
                  value={input.childrenCount}
                  onChange={(e) => patch({ childrenCount: Number(e.target.value) || 0 })}
                />
              </div>
            </div>
          ) : null}
        </CardShell>

        <CardShell title="Location">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">City</label>
            <select className={selectClass} value={input.city} onChange={(e) => patch({ city: e.target.value as RaCity })}>
              {CITIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="mb-2 flex flex-wrap items-center gap-1 text-sm font-medium text-copilot-text-primary">
              Neighborhood cost position
              <RentAffordabilityTip
                label="Neighborhood cost position"
                text="Not a map polygon — a planning band for whether listings skew central/premium, typical urban, outer districts, or commuter towns. It nudges model rent and competitiveness."
              />
            </span>
            <SegmentedControl
              name="ra-neighborhood"
              pillTone="copilot"
              value={input.neighborhoodTier}
              onChange={(v) => patch({ neighborhoodTier: v as RaInputs["neighborhoodTier"] })}
              options={[
                { value: "premium", label: "Center / premium" },
                { value: "standard", label: "Standard" },
                { value: "outer", label: "Outer district" },
                { value: "commuter", label: "Commuter belt" },
              ]}
            />
          </div>
        </CardShell>

        <CardShell title="Housing">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Housing type</label>
            <select
              className={selectClass}
              value={input.housingType}
              onChange={(e) => patch({ housingType: e.target.value as RaInputs["housingType"] })}
            >
              <option value="room_shared">Room / shared</option>
              <option value="studio">Studio</option>
              <option value="apartment_1bed">1-bedroom apartment</option>
              <option value="apartment_2bed">2-bedroom apartment</option>
              <option value="apartment_3bed_family">3-bedroom / family home</option>
            </select>
          </div>
          <SegmentedControl
            name="ra-rent-mode"
            pillTone="copilot"
            value={input.toolMode === "salary_for_rent" ? "target" : input.rentMode}
            onChange={(v) => patch({ rentMode: v as RaInputs["rentMode"] })}
            options={
              input.toolMode === "salary_for_rent"
                ? [{ value: "target", label: "Use target rent (required)" }]
                : [{ value: "model", label: "Use model rent" }]
            }
          />
          {input.toolMode === "salary_for_rent" ? (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Target monthly rent (€)</label>
              <Input
                inputMode="decimal"
                className="rounded-xl border-copilot-primary/15"
                value={input.targetRentEur || ""}
                onChange={(e) => patch({ targetRentEur: Number(e.target.value) || 0 })}
              />
            </div>
          ) : null}
          <div className="flex flex-col gap-2 text-sm text-copilot-text-secondary">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.includeServiceCosts} onChange={(e) => patch({ includeServiceCosts: e.target.checked })} className="rounded border-copilot-primary/30" />
              Include service costs estimate
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.includeParking} onChange={(e) => patch({ includeParking: e.target.checked })} className="rounded border-copilot-primary/30" />
              Include parking estimate
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeFurnishedPremium}
                onChange={(e) => patch({ includeFurnishedPremium: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Include furnished premium
            </label>
          </div>
        </CardShell>

        <details
          id="advanced-assumptions"
          className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold text-copilot-text-primary">
            Advanced assumptions (optional)
          </summary>
          <p className="mt-2 text-xs text-copilot-text-secondary">
            Refine transport, childcare, optional monthly lines, fixed obligations, setup costs, and screening
            assumptions. Core inputs are enough for a first answer.
          </p>
          <div className="mt-4 space-y-6">
        <CardShell
          title={
            <span className="inline-flex items-center gap-1">
              Transport & household extras
              <RentAffordabilityTip
                label="Model lines"
                text="These toggles change the recurring planning baseline (not quotes). Transport stacks on a city baseline; childcare uses a placeholder unless you enter a fixed amount below."
              />
            </span>
          }
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Transport mode</label>
            <select
              className={selectClass}
              value={input.transportMode}
              onChange={(e) => patch({ transportMode: e.target.value as RaInputs["transportMode"] })}
            >
              <option value="bike_pt">Bike + public transport</option>
              <option value="pt_only">Public transport only</option>
              <option value="hybrid">Hybrid (PT + some car)</option>
              <option value="car">Car-forward</option>
            </select>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-sm text-copilot-text-secondary">
            <div className={cn(effectiveChildrenCount(input) === 0 && "opacity-60")}>
              <span className="mb-1.5 flex items-center gap-1 text-sm font-medium text-copilot-text-primary">
                Childcare mode
                <RentAffordabilityTip
                  label="Childcare modelling"
                  text="Public schooling is not tuition-based, but families often still have childcare, after-school care, materials, and activity costs."
                />
              </span>
              <SegmentedControl
                name="ra-childcare-mode"
                pillTone="copilot"
                value={effectiveChildrenCount(input) === 0 ? "off" : input.childcareMode}
                onChange={(v) =>
                  patch({
                    childcareMode: v as RaInputs["childcareMode"],
                    includeChildcarePlaceholder: v === "placeholder",
                    fixedChildcare: v === "manual" ? input.fixedChildcare || 650 : 0,
                  })
                }
                options={[
                  { value: "off", label: "No childcare" },
                  { value: "placeholder", label: "Placeholder" },
                  { value: "manual", label: "Manual override" },
                ]}
              />
              {(input.childcareMode === "placeholder" || input.childcareMode === "manual") &&
              effectiveChildrenCount(input) > 0 ? (
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-copilot-text-primary">Intensity</label>
                    <select
                      className={selectClass}
                      value={input.childcareIntensity}
                      onChange={(e) => patch({ childcareIntensity: e.target.value as RaInputs["childcareIntensity"] })}
                    >
                      <option value="part_time">Part-time</option>
                      <option value="full_time">Full-time</option>
                    </select>
                  </div>
                  {input.childcareMode === "manual" ? (
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-copilot-text-primary">Manual childcare €/mo</label>
                      <Input
                        inputMode="decimal"
                        className="rounded-xl border-copilot-primary/15"
                        value={input.fixedChildcare || ""}
                        onChange={(e) => patch({ fixedChildcare: Number(e.target.value) || 0 })}
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.includePet} onChange={(e) => patch({ includePet: e.target.checked })} className="rounded border-copilot-primary/30" />
              Include pet (monthly reserve)
            </label>
          </div>
        </CardShell>

        <CardShell
          title={
            <span className="inline-flex items-center gap-1">
              Optional monthly planning lines
              <RentAffordabilityTip
                label="Optional lines"
                text="Turn on extras you want in the recurring model — each is labeled as a planning estimate, monthly reserve, or placeholder in exports. None of these are exact quotes."
              />
            </span>
          }
        >
          <p className="text-xs text-copilot-text-secondary">
            School reserve applies when your household includes children. Streaming splits from core misc when enabled.
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-copilot-text-secondary">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.includeGymSport} onChange={(e) => patch({ includeGymSport: e.target.checked })} className="rounded border-copilot-primary/30" />
              Gym / sport (optional line)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeSupplementaryHealth}
                onChange={(e) => patch({ includeSupplementaryHealth: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Supplementary health / dental-style add-on (optional line)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeStreamingExtras}
                onChange={(e) => patch({ includeStreamingExtras: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Streaming & personal subscriptions (optional line)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeTaxFilingReserve}
                onChange={(e) => patch({ includeTaxFilingReserve: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Tax filing / advisor reserve (monthly slice)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeTravelHomeReserve}
                onChange={(e) => patch({ includeTravelHomeReserve: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Travel / flights home (monthly reserve)
            </label>
            <label
              className={cn(
                "flex cursor-pointer items-center gap-2",
                effectiveChildrenCount(input) === 0 && "opacity-50"
              )}
            >
              <input
                type="checkbox"
                disabled={effectiveChildrenCount(input) === 0}
                checked={input.includeSchoolCostReserve}
                onChange={(e) => patch({ includeSchoolCostReserve: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              School / materials reserve (placeholder — needs children in household)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.includeHomeContentsLiabilityInsurance}
                onChange={(e) => patch({ includeHomeContentsLiabilityInsurance: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Home contents & liability insurance (monthly reserve)
            </label>
          </div>
        </CardShell>

        <CardShell title="Fixed monthly obligations">
          <div className="grid gap-3 sm:grid-cols-2">
            {(
              [
                ["fixedDebt", "Debt / loans"],
                ["fixedChildcare", "Childcare"],
                ["fixedAlimony", "Alimony / support"],
                ["fixedSubscriptions", "Subscriptions / fixed commitments"],
                ["fixedCar", "Car monthly"],
                ["fixedManualExtra", "Manual extra / override"],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <label htmlFor={`ra-fixed-${key}`} className="mb-1.5 block text-xs font-medium text-copilot-text-primary">
                  {label}
                </label>
                <Input
                  id={`ra-fixed-${key}`}
                  inputMode="decimal"
                  className="rounded-xl border-copilot-primary/15"
                  value={String(input[key] ?? "")}
                  onChange={(e) => patch({ [key]: Number(e.target.value) || 0 } as Partial<RaInputs>)}
                />
              </div>
            ))}
          </div>
        </CardShell>

        <CardShell
          title={
            <span className="inline-flex items-center gap-1">
              Lifestyle buffer
              <RentAffordabilityTip
                label="Lifestyle tier"
                text="Raises or lowers dining/leisure and miscellaneous lines in the non-rent baseline — not your personality, just planning slack."
              />
            </span>
          }
        >
          <SegmentedControl
            name="ra-lifestyle"
            pillTone="copilot"
            value={input.lifestyle}
            onChange={(v) => patch({ lifestyle: v as RaInputs["lifestyle"] })}
            options={[
              { value: "minimal", label: "Minimal / essential" },
              { value: "balanced", label: "Balanced" },
              { value: "comfortable", label: "Comfortable" },
            ]}
          />
        </CardShell>

        <CardShell
          title={
            <span className="inline-flex items-center gap-1">
              Landlord rule assumption
              <RentAffordabilityTip
                label="Landlord income rule"
                text="Many landlords want gross monthly salary around 3–4× monthly rent. Policies differ; this is a screening story, not law."
              />
            </span>
          }
        >
          <SegmentedControl
            name="ra-landlord"
            pillTone="copilot"
            value={landlordRuleStr}
            onChange={(v) => patch({ landlordRuleMultiplier: Number(v) as RaLandlordRule })}
            options={[
              { value: "3", label: "×3 gross" },
              { value: "3.5", label: "×3.5 gross" },
              { value: "4", label: "×4 gross" },
            ]}
          />
          <p className="text-xs text-copilot-text-secondary">
            This models common screening rules only. Real landlords/agencies may require permanent contracts, stronger
            documentation, or count only part of foreign/variable income.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Contract profile</label>
              <select
                className={selectClass}
                value={input.contractProfile}
                onChange={(e) => patch({ contractProfile: e.target.value as RaInputs["contractProfile"] })}
              >
                <option value="both_permanent">Both incomes permanent</option>
                <option value="one_permanent_one_temporary">One permanent + one temporary</option>
                <option value="self_employed_or_contractor">Self-employed / contractor</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">
                Foreign income accepted for screening (%)
              </label>
              <Input
                inputMode="decimal"
                className="rounded-xl border-copilot-primary/15"
                value={Math.round(input.landlordForeignIncomeAcceptedShare * 100)}
                onChange={(e) =>
                  patch({
                    landlordForeignIncomeAcceptedShare: Math.min(
                      1,
                      Math.max(0, (Number(e.target.value) || 0) / 100)
                    ),
                  })
                }
              />
            </div>
          </div>
          <label className="mt-1 flex cursor-pointer items-center gap-2 text-sm text-copilot-text-secondary">
            <input
              type="checkbox"
              checked={input.landlordBonusCounts}
              onChange={(e) => patch({ landlordBonusCounts: e.target.checked })}
              className="rounded border-copilot-primary/30"
            />
            Bonus / variable income counts in landlord screening
          </label>
        </CardShell>

        <CardShell
          title={
            <span className="inline-flex items-center gap-1">
              Setup / move-in (one-time)
              <RentAffordabilityTip
                label="Setup cash"
                text="These lines affect move-in cash and savings targets — not the recurring monthly affordability bands, which ignore deposit timing."
              />
            </span>
          }
        >
          <div className="flex flex-col gap-2 text-sm text-copilot-text-secondary">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.setupDeposit} onChange={(e) => patch({ setupDeposit: e.target.checked })} className="rounded border-copilot-primary/30" />
              Rental deposit (city-typical months × rent — planning estimate)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.setupFirstMonth} onChange={(e) => patch({ setupFirstMonth: e.target.checked })} className="rounded border-copilot-primary/30" />
              Include first month rent (timing)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.setupFurniture} onChange={(e) => patch({ setupFurniture: e.target.checked })} className="rounded border-copilot-primary/30" />
              Furniture / home setup
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.setupAgencyFees} onChange={(e) => patch({ setupAgencyFees: e.target.checked })} className="rounded border-copilot-primary/30" />
              Agency / contract fees estimate
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={input.setupMoveTravel} onChange={(e) => patch({ setupMoveTravel: e.target.checked })} className="rounded border-copilot-primary/30" />
              Travel & relocation lump
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.setupVisaAdminHeavy}
                onChange={(e) => patch({ setupVisaAdminHeavy: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Heavier visa / immigration admin reserve (optional)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.setupChildcareSchoolRegistration}
                onChange={(e) => patch({ setupChildcareSchoolRegistration: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Childcare / school registration & starter reserve (optional)
            </label>
            <label
              className={cn("flex cursor-pointer items-center gap-2", !input.includePet && "opacity-50")}
            >
              <input
                type="checkbox"
                disabled={!input.includePet}
                checked={input.setupPetRelocation}
                onChange={(e) => patch({ setupPetRelocation: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Pet relocation reserve (optional — enable pet above)
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={input.setupShortStayOverlap}
                onChange={(e) => patch({ setupShortStayOverlap: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              Short-stay overlap vs long lease (fraction of rent — planning estimate)
            </label>
          </div>
        </CardShell>

        <details className="rounded-xl border border-copilot-primary/12 bg-white p-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-copilot-text-primary">
            Compare scenarios
          </summary>
          <div className="mt-3">
            <CardShell title="Scenario comparison table">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-copilot-text-secondary">
                <input
                  type="checkbox"
                  checked={input.compareScenariosEnabled}
                  onChange={(e) => patch({ compareScenariosEnabled: e.target.checked })}
                  className="rounded border-copilot-primary/30"
                />
                Show commuter belt, smaller housing, and ruling / childcare variants
              </label>
            </CardShell>
          </div>
        </details>

        <details className="rounded-xl border border-copilot-primary/12 bg-white p-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-copilot-text-primary">
            Export notes (optional)
          </summary>
          <div className="mt-3">
            <CardShell title="Notes (export)">
              <label className="mb-1.5 block text-sm font-medium text-copilot-text-primary">Optional notes for HTML summary</label>
              <textarea
                className={cn(selectClass, "min-h-[88px] resize-y")}
                value={input.userNotes}
                onChange={(e) => patch({ userNotes: e.target.value.slice(0, 4000) })}
                placeholder="Listing links, employer constraints, or reminders — included only in export."
              />
            </CardShell>
          </div>
        </details>
          </div>
        </details>
      </div>

      <div className="rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-md md:p-6">
        <h3 className="text-base font-semibold text-copilot-text-primary">Run calculation</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong>.
        </p>
        <p className="mt-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
          Using core assumptions now. Open <strong>Advanced assumptions</strong> to refine utilities, childcare,
          setup, and optional lines.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="primary"
            className="min-h-11 border-copilot-primary/20 bg-copilot-primary text-white hover:bg-copilot-primary/90"
            disabled={isCalculating}
            onClick={handleCalculate}
          >
            {isCalculating ? "Calculating…" : "Calculate"}
          </Button>
          {hasFinishedRun ? (
            <p className="text-xs text-copilot-text-secondary">Showing your last calculated result.</p>
          ) : null}
        </div>
      </div>

      {isCalculating ? (
        <ToolResultsLoading message="Calculating rent bands, salary targets, and setup cash…" />
      ) : null}

      {!isCalculating && !hasFinishedRun ? (
        <InfoBox title="Results are hidden until Calculate" variant="info">
          Configure your assumptions above, then click <strong>Calculate</strong> to reveal the affordability summary.
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && resultsStale ? (
        <InfoBox title="Inputs changed since last run" variant="info">
          The results below reflect your last calculation. Click <strong>Calculate</strong> again to refresh.
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && !result ? (
        <InfoBox title="Add income" variant="warn">
          For &quot;Rent I can afford&quot;, enter a positive net or gross. Salary-needed mode can run without current
          income when a target rent is provided.
        </InfoBox>
      ) : null}

      {!isCalculating && hasFinishedRun && result && displayedInput && (
        <div id="tool-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
          {displayedInput.toolMode === "salary_for_rent" ? (
            <div className="grid gap-3 md:grid-cols-2">
              {(
                [
                  [
                    "Required gross for your target rent",
                    result.reverse?.requiredGrossMonthlyEur ?? result.salaryGrossMonthlyTargets.balanced,
                    "Most relevant: monthly gross salary needed to support this rent profile in the model.",
                  ],
                  [
                    "Essential salary target (gross/mo)",
                    result.salaryGrossMonthlyTargets.essential,
                    "Lower planning band with tighter margins.",
                  ],
                  [
                    "Balanced salary target (gross/mo)",
                    result.salaryGrossMonthlyTargets.balanced,
                    "Practical planning band for routine living costs and buffers.",
                  ],
                  [
                    "Comfortable salary target (gross/mo)",
                    result.salaryGrossMonthlyTargets.comfortable,
                    "Higher comfort band with more room after recurring costs.",
                  ],
                ] as const
              ).map(([label, val, hint]) => {
                const isHighlighted = label === "Required gross for your target rent";
                return (
                  <div
                    key={label}
                    className={cn(
                      "rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-5",
                      isHighlighted &&
                        "border-copilot-primary/40 from-copilot-primary/10 to-white ring-2 ring-copilot-primary/25 shadow-expatos-md"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{label}</p>
                      <div className="flex flex-wrap items-center justify-end gap-1">
                        {isHighlighted ? (
                          <span className="rounded-full border border-copilot-primary/25 bg-copilot-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-copilot-primary">
                            Most relevant
                          </span>
                        ) : null}
                        {isHighlighted && areaRealismBadgeLabel ? (
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                              areaRealismBadgeClass
                            )}
                          >
                            {areaRealismBadgeLabel}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  <p className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{fmtEur(val)}</p>
                    <p className="mt-2 text-xs text-copilot-text-secondary">{hint}</p>
                    {isHighlighted && areaRealism ? (
                      <p className="mt-2 text-xs font-medium text-copilot-text-primary">{areaRealism.title}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {(
                [
                  ["Safest max rent", result.maxRent.comfortableEur, "Largest buffer before rent in this model — conservative planning band."],
                  ["Recommended max rent", result.maxRent.recommendedEur, "Balanced band after buffers, ratios, landlord cap, and city competitiveness."],
                  ["Stretch max rent", result.maxRent.stretchEur, "Thinner margin — still capped by landlord gross rule in this model."],
                  ["Essential max rent", result.maxRent.essentialEur, "Between the safest and balanced bands — slightly higher rent ceiling than safest, still below balanced."],
                ] as const
              ).map(([label, val, hint]) => {
                const isHighlighted = label === highlightedRentCardLabel;
                return (
                  <div
                    key={label}
                    className={cn(
                      "rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-5",
                      isHighlighted &&
                        "border-copilot-primary/40 from-copilot-primary/10 to-white ring-2 ring-copilot-primary/25 shadow-expatos-md"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{label}</p>
                      {isHighlighted ? (
                        <span className="rounded-full border border-copilot-primary/25 bg-copilot-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-copilot-primary">
                          Most relevant
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{fmtEur(val)}</p>
                    <p className="mt-2 text-xs text-copilot-text-secondary">{hint}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {(
              [
                ["Monthly non-rent baseline", result.nonRent.totalEur, "Indicative costs excluding rent and your fixed obligation inputs."],
                ["One-time setup (toggles)", result.setup.totalEur, "Sum of enabled setup lines at the reference rent."],
                ["First month cash need", result.setup.firstMonthCashEur, "Setup plus one month of recurring rent + non-rent + fixed."],
              ] as const
            ).map(([label, val, hint]) => (
              <div
                key={label}
                className="rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{label}</p>
                    <p className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{fmtEur(val)}</p>
                <p className="mt-2 text-xs text-copilot-text-secondary">{hint}</p>
              </div>
            ))}
          </div>

          <CardShell title="What to focus on next">
            <div className="grid gap-3 md:grid-cols-2">
              {buildFocusItems(displayedInput, result).map((item) => (
                <div key={item.title} className={cn("rounded-xl border p-4", focusToneClass(item.tone))}>
                  <p className="text-sm font-semibold text-copilot-text-primary">{item.title}</p>
                  <p className="mt-1 text-sm text-copilot-text-secondary">{item.detail}</p>
                </div>
              ))}
            </div>
          </CardShell>

          <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary">
            <p>
              <strong className="text-copilot-text-primary">Income used:</strong> net {fmtEur(result.income.netMonthly)}/mo
              {result.income.grossFromNetEstimate ? " (indicative gross inferred)" : ""} · gross {fmtEur(result.income.grossMonthly)}/mo
              {result.income.netFromGrossEstimate ? " (indicative net from gross)" : ""}
            </p>
            <p className="mt-1">
              <strong className="text-copilot-text-primary">Childcare included:</strong>{" "}
              {result.meta.childcareSummary.included ? "Yes" : "No"} · model:{" "}
              {result.meta.childcareSummary.model} · school reserve:{" "}
              {result.meta.childcareSummary.schoolReserveIncluded ? "Yes" : "No"}
            </p>
            {result.incomeWithoutRuling ? (
              <p className="mt-1">
                Same gross without 30% ruling (planning): net ~{fmtEur(result.incomeWithoutRuling.netMonthly)}/mo — compare to the ruled case before you rely on the facility.
              </p>
            ) : null}
          </div>

          <section id="affordability-status" className="scroll-mt-28 md:scroll-mt-32" aria-label="Affordability versus target rent">
            {result.affordabilityStatus ? (
              <div className={cn("rounded-2xl border-2 p-5 shadow-expatos-sm md:p-6", statusTone(result.affordabilityStatus))}>
                <h3 className="text-base font-semibold text-copilot-text-primary">Affordability vs target rent</h3>
                <p className="mt-2 text-sm font-medium capitalize text-copilot-text-primary">{result.affordabilityStatus}</p>
                <p className="mt-2 text-sm text-copilot-text-secondary">
                  Target rent {fmtEur(result.rentForComparisonEur ?? 0)} vs recommended {fmtEur(result.maxRent.recommendedEur)} and stretch{" "}
                  {fmtEur(result.maxRent.stretchEur)}. {result.narrative.landlordIssue ?? "Landlord gross check: see dedicated card below."}
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary md:p-5">
                <p className="font-medium text-copilot-text-primary">Affordability vs a specific rent</p>
                <p className="mt-1">
                  Switch housing to <strong>target rent</strong> and enter a monthly figure to see comfortable / stretch-style framing against this model&apos;s recommended band — useful for a listing you are considering.
                </p>
              </div>
            )}
          </section>

          {displayedInput.toolMode === "salary_for_rent" && result.reverse ? (
            <CardShell title="Salary-needed view: landlord acceptance, budget reality, payroll translation">
              <div className="space-y-4">
                <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">1) Landlord acceptance</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-3">
                    {result.landlordChecks.map((c) => (
                      <div key={c.multiplier} className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                        <p className="text-xs text-copilot-text-secondary">x{c.multiplier} gross needed</p>
                        <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(c.requiredGrossMonthlyEur)}</p>
                        <p className="text-xs capitalize text-copilot-text-secondary">{c.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">2) Budget reality (net)</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                      <p className="text-xs text-copilot-text-secondary">Essential net</p>
                      <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.essentialNetMonthlyEur)}</p>
                    </div>
                    <div className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                      <p className="text-xs text-copilot-text-secondary">Balanced net</p>
                      <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.balancedNetMonthlyEur)}</p>
                    </div>
                    <div className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                      <p className="text-xs text-copilot-text-secondary">Comfortable net</p>
                      <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.comfortableNetMonthlyEur)}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">3) Payroll translation (indicative)</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                      <p className="text-xs text-copilot-text-secondary">Required gross for target rent</p>
                      <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(result.reverse.requiredGrossMonthlyEur)}</p>
                    </div>
                    <div className="rounded-lg border border-copilot-primary/10 bg-white p-3">
                      <p className="text-xs text-copilot-text-secondary">Indicative net at required gross</p>
                      <p className="text-lg font-semibold text-copilot-text-primary">{fmtEur(result.reverse.requiredNetMonthlyPlanningEur)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardShell>
          ) : null}

          <section id="monthly-budget" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell title="Monthly budget breakdown">
              <div className="overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]">
                <table className="w-full min-w-[520px] text-sm">
                  <caption className="sr-only">
                    Monthly cash flow: net income, rent reference, model non-rent lines, your fixed obligations, and indicative remainder.
                  </caption>
                  <thead>
                    <tr className="border-b border-copilot-primary/10 text-left text-copilot-text-secondary">
                      <th scope="col" className="py-2 pr-4 font-medium">
                        Line
                      </th>
                      <th scope="col" className="py-2 text-right font-medium">
                        € / mo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-copilot-primary/5">
                      <td className="py-2 pr-4">Net income (used)</td>
                      <td className="py-2 text-right font-medium">{fmtEur(result.income.netMonthly)}</td>
                    </tr>
                    <tr className="border-b border-copilot-primary/5">
                      <td className="py-2 pr-4">Rent (reference)</td>
                      <td className="py-2 text-right font-medium">{fmtEur(result.rentForComparisonEur ?? result.maxRent.recommendedEur)}</td>
                    </tr>
                    {MONTHLY_GROUPS.map((group) => {
                      const lines = result.nonRent.lines.filter(group.match);
                      if (!lines.length) return null;
                      const subtotal = lines.reduce((s, l) => s + l.amountEur, 0);
                      return (
                        <Fragment key={group.id}>
                          <tr key={`${group.id}-head`} className="border-b border-copilot-primary/10 bg-copilot-bg-soft/50">
                            <td className="py-2 pr-4 text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">{group.label}</td>
                            <td className="py-2 text-right text-xs font-semibold text-copilot-text-primary">{fmtEur(subtotal)}</td>
                          </tr>
                          {lines.map((l) => (
                            <tr key={l.id} className="border-b border-copilot-primary/5">
                              <td className="py-2 pr-4 text-copilot-text-secondary">
                                <span>{l.label}</span>
                                {l.note ? (
                                  <p className="mt-0.5 max-w-md text-xs text-copilot-text-secondary/85">{l.note}</p>
                                ) : null}
                              </td>
                              <td className="py-2 align-top text-right">{fmtEur(l.amountEur)}</td>
                            </tr>
                          ))}
                        </Fragment>
                      );
                    })}
                    <tr className="border-b border-copilot-primary/5">
                      <td className="py-2 pr-4">Fixed obligations (your inputs)</td>
                      <td className="py-2 text-right">{fmtEur(result.fixedObligationsEur)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-copilot-text-primary">Remaining (indicative)</td>
                      <td className="py-2 text-right font-semibold">{fmtEur(result.remainingAfterRentEur)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardShell>
          </section>

          <section id="landlord-check" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell title="Landlord screening context (planning)">
              <p className="text-sm text-copilot-text-secondary">
                Rent reference: {fmtEur(result.rentForComparisonEur ?? result.maxRent.recommendedEur)}. Gross used for
                screening: <strong className="text-copilot-text-primary">{fmtEur(result.landlordScreeningGrossUsedEur)}</strong>.
              </p>
              {result.meta.landlordContextNotes.length ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-copilot-text-secondary">
                  {result.meta.landlordContextNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
              {result.income.grossMonthly < 1 ? (
                <p className="mt-2 text-sm text-copilot-text-secondary">
                  Enter gross income (or switch to gross basis) to compare your file with common multiples — at €0 gross every rule shows fail by design.
                </p>
              ) : null}
              <div className="overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]">
                <table className="mt-3 w-full min-w-[480px] text-sm">
                  <caption className="sr-only">
                    Landlord-style gross income multiples versus monthly rent; pass is indicative only.
                  </caption>
                  <thead>
                    <tr className="border-b border-copilot-primary/10 text-left text-copilot-text-secondary">
                      <th scope="col" className="py-2 pr-3 font-medium">
                        Rule
                      </th>
                      <th scope="col" className="py-2 pr-3 font-medium">
                        Required gross
                      </th>
                      <th scope="col" className="py-2 pr-3 font-medium">
                        Status
                      </th>
                      <th scope="col" className="py-2 font-medium">
                        Pass?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.landlordChecks.map((c) => (
                      <tr key={c.multiplier} className="border-b border-copilot-primary/5">
                        <td className="py-2 pr-3">×{c.multiplier}</td>
                        <td className="py-2 pr-3">{fmtEur(c.requiredGrossMonthlyEur)}</td>
                        <td className="py-2 pr-3 capitalize">{c.status}</td>
                        <td className="py-2">{c.passes ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardShell>
          </section>

          <section id="salary-target" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell
              title={
                <span className="inline-flex items-center gap-1">
                  Salary targets (net & indicative gross)
                  <RentAffordabilityTip
                    label="Balanced salary target"
                    text="Built from recurring needs (non-rent + fixed + reference rent) times planning coefficients — gross rows invert net with the same salary model."
                  />
                </span>
              }
            >
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-copilot-primary/10 bg-white p-4">
                  <p className="text-xs font-semibold text-copilot-text-secondary">Essential net / gross</p>
                  <p className="text-lg font-bold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.essentialNetMonthlyEur)}</p>
                  <p className="text-sm text-copilot-text-secondary">~{fmtEur(result.salaryGrossMonthlyTargets.essential)} gross/mo</p>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-white p-4">
                  <p className="text-xs font-semibold text-copilot-text-secondary">Balanced net / gross</p>
                  <p className="text-lg font-bold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.balancedNetMonthlyEur)}</p>
                  <p className="text-sm text-copilot-text-secondary">~{fmtEur(result.salaryGrossMonthlyTargets.balanced)} gross/mo</p>
                </div>
                <div className="rounded-xl border border-copilot-primary/10 bg-white p-4">
                  <p className="text-xs font-semibold text-copilot-text-secondary">Comfortable net / gross</p>
                  <p className="text-lg font-bold text-copilot-text-primary">{fmtEur(result.salaryNetTargets.comfortableNetMonthlyEur)}</p>
                  <p className="text-sm text-copilot-text-secondary">~{fmtEur(result.salaryGrossMonthlyTargets.comfortable)} gross/mo</p>
                </div>
              </div>
            </CardShell>
          </section>

          {result.maxRentWithoutRulingSameGross &&
          displayedInput.incomeBasis === "gross" &&
          displayedInput.rulingAssumption !== "no" ? (
            <CardShell title="30% ruling — affordability delta (same gross)">
              <p className="text-sm text-copilot-text-secondary">
                With ruling (this page): recommended rent {fmtEur(result.maxRent.recommendedEur)}. Without ruling, same gross: recommended{" "}
                {fmtEur(result.maxRentWithoutRulingSameGross.recommendedEur)}.
              </p>
            </CardShell>
          ) : null}

          <section id="setup-costs" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell title="Setup costs detail">
              <div className="overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]">
                <table className="w-full min-w-[400px] text-sm">
                  <caption className="sr-only">One-time move-in lines and total setup estimate.</caption>
                  <tbody>
                    {SETUP_GROUPS.map((group) => {
                      const lines = result.setup.lines.filter((line) => group.ids.includes(line.id));
                      if (!lines.length) return null;
                      const subtotal = lines.reduce((s, l) => s + l.amountEur, 0);
                      return (
                        <Fragment key={group.id}>
                          <tr className="border-b border-copilot-primary/10 bg-copilot-bg-soft/50">
                            <td className="py-2 pr-4 text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">
                              {group.label}
                            </td>
                            <td className="py-2 text-right text-xs font-semibold text-copilot-text-primary">
                              {fmtEur(subtotal)}
                            </td>
                          </tr>
                          {lines.map((l) => (
                            <tr key={l.id} className="border-b border-copilot-primary/5">
                              <td className="py-2 pr-4">
                                <span>{l.label}</span>
                                {l.note ? (
                                  <p className="mt-0.5 max-w-md text-xs text-copilot-text-secondary">{l.note}</p>
                                ) : null}
                              </td>
                              <td className="py-2 align-top text-right">{fmtEur(l.amountEur)}</td>
                            </tr>
                          ))}
                        </Fragment>
                      );
                    })}
                    <tr>
                      <td className="py-2 pr-4 font-semibold">Total setup</td>
                      <td className="py-2 text-right font-semibold">{fmtEur(result.setup.totalEur)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-copilot-text-secondary">
                Suggested pre-move buffer (setup + ~2.2× monthly outflow): {fmtEur(result.setup.savingsBufferEur)}
              </p>
            </CardShell>
          </section>

          <section id="compare-scenarios" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell title="Scenario comparison">
              <div className="md:hidden">
                <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
                  {result.scenarios.map((s) => (
                    <article
                      key={`mobile-${s.id}`}
                      className="min-w-[85%] snap-start rounded-xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm"
                    >
                      <p className="text-sm font-semibold text-copilot-text-primary">{s.label}</p>
                      {s.whyItMatters ? (
                        <p className="mt-1 text-xs text-copilot-text-secondary">{s.whyItMatters}</p>
                      ) : null}
                      <dl className="mt-3 space-y-1 text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-copilot-text-secondary">Monthly total</dt>
                          <dd className="font-medium text-copilot-text-primary">{fmtEur(s.monthlyTotalEur)}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-copilot-text-secondary">Setup</dt>
                          <dd className="font-medium text-copilot-text-primary">{fmtEur(s.setupTotalEur)}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-copilot-text-secondary">Rec. rent</dt>
                          <dd className="font-medium text-copilot-text-primary">{fmtEur(s.recommendedRentEur)}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-copilot-text-secondary">Bal. gross/mo</dt>
                          <dd className="font-medium text-copilot-text-primary">{fmtEur(s.balancedGrossSalaryMonthlyEur)}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
              <div className="hidden overflow-x-auto overflow-y-hidden md:block [-webkit-overflow-scrolling:touch]">
                <table className="w-full min-w-[640px] text-sm">
                  <caption className="sr-only">Comparison of alternative scenarios: monthly total, setup, recommended rent, balanced gross salary.</caption>
                  <thead>
                    <tr className="border-b border-copilot-primary/10 text-left text-copilot-text-secondary">
                      <th scope="col" className="py-2 pr-3 font-medium">
                        Scenario
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right font-medium">
                        Monthly total
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right font-medium">
                        Setup
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right font-medium">
                        Rec. rent
                      </th>
                      <th scope="col" className="py-2 text-right font-medium">
                        Bal. gross/mo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.scenarios.map((s) => (
                      <tr key={s.id} className="border-b border-copilot-primary/5">
                        <td className="py-2 pr-3">
                          <p>{s.label}</p>
                          {s.whyItMatters ? (
                            <p className="mt-0.5 text-xs text-copilot-text-secondary">{s.whyItMatters}</p>
                          ) : null}
                        </td>
                        <td className="py-2 pr-3 text-right">{fmtEur(s.monthlyTotalEur)}</td>
                        <td className="py-2 pr-3 text-right">{fmtEur(s.setupTotalEur)}</td>
                        <td className="py-2 pr-3 text-right">{fmtEur(s.recommendedRentEur)}</td>
                        <td className="py-2 text-right">{fmtEur(s.balancedGrossSalaryMonthlyEur)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.scenarios.length <= 1 ? (
                <p className="mt-2 text-xs text-copilot-text-secondary">
                  No materially different auto-scenarios were generated for the current inputs.
                </p>
              ) : null}
            </CardShell>
          </section>

          <section id="how-to-read" className="scroll-mt-28 md:scroll-mt-32">
            <CardShell title="How to read your result">
              <ul className="space-y-3 text-sm text-copilot-text-secondary">
                <li>
                  <strong className="text-copilot-text-primary">Budget vs landlord:</strong> Monthly affordability and landlord screening are different tests. You can pass one and fail the other.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Recurring vs setup:</strong> Monthly affordability excludes one-time move-in friction; setup drives cash timing risk.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Essential / balanced / comfortable:</strong> These are planning bands, not guarantees. Balanced is the default recommendation.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Biggest cost driver:</strong> {result.narrative.biggestCostDriver}
                </li>
                {result.narrative.childcareImpact ? (
                  <li>
                    <strong className="text-copilot-text-primary">Childcare:</strong> {result.narrative.childcareImpact}
                  </li>
                ) : null}
                {result.narrative.rulingImpact ? (
                  <li>
                    <strong className="text-copilot-text-primary">30% ruling (planning only):</strong> {result.narrative.rulingImpact}
                  </li>
                ) : null}
                {result.narrative.commuterBeltOpportunity ? (
                  <li>
                    <strong className="text-copilot-text-primary">Commuter belt:</strong> {result.narrative.commuterBeltOpportunity}
                  </li>
                ) : null}
              </ul>
            </CardShell>
          </section>

        </div>
      )}

      <div id="download-summary" className="scroll-mt-28 rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-md md:scroll-mt-32 md:p-6">
        <h3 className="text-base font-semibold text-copilot-text-primary">Download & share</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Export includes inputs, key outputs, landlord table, setup lines, and scenario comparison. Share links encode state in the <code className="rounded bg-copilot-bg-soft px-1">s</code> query param.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            type="button"
            variant="primary"
            className="min-h-11 border-copilot-primary/20 bg-copilot-primary text-white hover:bg-copilot-primary/90"
            disabled={!displayedResult}
            onClick={() => void onDownloadHtml()}
          >
            Download HTML
          </Button>
          <Button type="button" variant="secondary" className="min-h-11 border-copilot-primary/15" disabled={!displayedResult} onClick={onPrint}>
            Print / save PDF
          </Button>
          <Button type="button" variant="secondary" className="min-h-11 border-copilot-primary/15" disabled={!displayedResult} onClick={onOpenTab}>
            Open in new tab
          </Button>
          <Button type="button" variant="secondary" className="min-h-11 border-copilot-primary/15" onClick={() => void onCopyLink()}>
            Copy share link
          </Button>
          <Button type="button" variant="ghost" className="min-h-11 text-copilot-text-primary" onClick={onReset}>
            Reset defaults
          </Button>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-copilot-primary/15 bg-white/95 p-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <Button
            type="button"
            variant="primary"
            className="h-11 flex-1 border-copilot-primary/20 bg-copilot-primary text-white hover:bg-copilot-primary/90"
            disabled={isCalculating}
            onClick={handleCalculate}
          >
            {isCalculating ? "Calculating…" : hasFinishedRun ? "Recalculate" : "Calculate"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="h-11 min-w-[110px] border-copilot-primary/20"
            disabled={!hasFinishedRun}
            onClick={scrollToResults}
          >
            Results
          </Button>
        </div>
      </div>
    </div>
  );
}
