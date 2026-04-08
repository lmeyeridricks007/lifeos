"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertTriangle,
  Baby,
  Bike,
  Bus,
  Car,
  ChevronDown,
  Circle,
  Coffee,
  Compass,
  GitBranch,
  HeartPulse,
  Home,
  type LucideIcon,
  Lightbulb,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  TrainFront,
  Trophy,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { CityAngleBanner } from "@/src/components/tools/city-comparison/CityAngleBanner";
import {
  CityComparisonBestMatchCard,
  CityComparisonDimensionBars,
  CityComparisonScoreRing,
} from "@/src/components/tools/city-comparison/CityComparisonVisuals";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { NL_BASE } from "@/src/content/tools/city-comparison/content";
import { computeCityComparison, sanitizeCityComparisonInput } from "@/src/lib/tools/city-comparison/engine";
import {
  buildCityComparisonExportHtml,
  downloadCityComparisonHtml,
  openPrintCityComparisonSummary,
} from "@/src/lib/tools/city-comparison/exportHtml";
import {
  cityComparisonInputToSearchParams,
  hasCityComparisonUrlParams,
  hydrateCityComparisonInput,
  loadCityComparisonFromStorage,
  parseCityComparisonSearchParams,
  saveCityComparisonToStorage,
} from "@/src/lib/tools/city-comparison/urlState";
import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import { getCityComparisonProfile } from "@/src/lib/tools/city-comparison/cityProfiles";
import {
  ALL_COMPARISON_CITY_IDS,
  DEFAULT_CITY_COMPARISON_INPUT,
  type CityComparisonId,
  type CityComparisonInput,
  type CityComparisonResult,
  type CityCostBreakdown,
  type CityScoreRow,
  type CommuteModeInsightBlock,
  type CommuteModePref,
  type ScenarioRankingMode,
} from "@/src/lib/tools/city-comparison/types";

type MonthlyCostRowDef = {
  key: string;
  label: string;
  sub?: string;
  get: (c: CityCostBreakdown) => number;
  bar: string;
  Icon: LucideIcon;
};

const MONTHLY_COST_ROW_DEFS: MonthlyCostRowDef[] = [
  {
    key: "rent",
    label: "Rent",
    sub: "Typical mid-range, not your actual listing",
    get: (c) => c.rentEur,
    bar: "bg-sky-500/90",
    Icon: Home,
  },
  {
    key: "living",
    label: "Groceries & daily life",
    sub: "Everything except rent",
    get: (c) => c.livingLessRentEur,
    bar: "bg-emerald-500/85",
    Icon: ShoppingBag,
  },
  {
    key: "transport",
    label: "Transport",
    get: (c) => c.transportEur,
    bar: "bg-violet-500/80",
    Icon: Bus,
  },
  {
    key: "health",
    label: "Health cover",
    sub: "Estimate for your profile",
    get: (c) => c.healthEur,
    bar: "bg-rose-400/85",
    Icon: HeartPulse,
  },
  {
    key: "leisure",
    label: "Going out & extras",
    get: (c) => c.lifestyleLeisureEur,
    bar: "bg-amber-500/80",
    Icon: Coffee,
  },
  {
    key: "family",
    label: "Kids & childcare",
    get: (c) => c.familyChildcareEur,
    bar: "bg-cyan-600/75",
    Icon: Baby,
  },
];

function CostCompositionSummary({ cost }: { cost: CityCostBreakdown }) {
  const total = cost.totalMonthlyOutflowEur || 1;
  const rows = MONTHLY_COST_ROW_DEFS.filter((def) => def.get(cost) > 0).map((def) => {
    const v = def.get(cost);
    return { key: def.key, label: def.label, v, pct: Math.round((v / total) * 100) };
  });
  return (
    <ul className="mt-1 space-y-1.5 text-sm tabular-nums text-copilot-text-primary">
      {rows.map(({ key, label, v, pct }) => (
        <li key={key} className="flex justify-between gap-4">
          <span className="min-w-0 font-medium text-copilot-text-secondary">{label}</span>
          <span className="shrink-0">
            {pct}% · €{v}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MonthlyCostBreakdownCard({
  row,
  maxByKey,
  minTotal,
  maxTotal,
  cheapestLabel,
}: {
  row: CityScoreRow;
  maxByKey: Record<string, number>;
  minTotal: number;
  maxTotal: number;
  cheapestLabel: string;
}) {
  const t = row.cost.totalMonthlyOutflowEur;
  const delta = t - minTotal;
  const isCheapest = t === minTotal;
  const isPriciest = t === maxTotal;
  const spread = maxTotal - minTotal;

  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-copilot-primary/12 bg-white p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h4 className="text-lg font-bold text-copilot-text-primary">{row.displayName}</h4>
          <p className="text-pretty text-xs text-copilot-text-secondary">
            How this month splits — same rules as the calculator above.
          </p>
        </div>
        {spread > 0 ? (
          isCheapest ? (
            <span className="w-fit shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-900">
              Lowest total here
            </span>
          ) : isPriciest ? (
            <span className="w-full max-w-none rounded-xl bg-amber-500/15 px-3 py-2 text-xs font-semibold leading-snug text-amber-950 sm:w-fit sm:rounded-full sm:px-2.5 sm:py-1 sm:text-right">
              <span className="block sm:inline">Highest total · +€{delta}/mo vs </span>
              <span className="block font-semibold sm:inline">{cheapestLabel}</span>
            </span>
          ) : (
            <span className="w-full max-w-none rounded-xl bg-copilot-bg-soft px-3 py-2 text-xs leading-snug text-copilot-text-secondary sm:w-fit sm:rounded-full sm:px-2.5 sm:py-1 sm:text-right">
              <span className="block sm:inline">+€{delta}/mo vs cheapest · </span>
              <span className="block font-medium text-copilot-text-primary sm:inline">{cheapestLabel}</span>
            </span>
          )
        ) : (
          <span className="w-fit shrink-0 rounded-full bg-copilot-bg-soft px-2.5 py-1 text-xs text-copilot-text-secondary">
            Same ballpark as your whole list
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary">By category</p>
        <CostCompositionSummary cost={row.cost} />
      </div>

      <div className="mt-5 space-y-1 border-t border-copilot-primary/10 pt-4">
        {MONTHLY_COST_ROW_DEFS.map((def) => {
          const v = def.get(row.cost);
          if (def.key === "family" && v === 0) return null;
          const maxV = Math.max(maxByKey[def.key] ?? 1, 1);
          const pct = Math.min(100, Math.round((v / maxV) * 100));
          return (
            <div key={def.key} className="flex gap-3 py-2">
              <def.Icon className="mt-0.5 h-4 w-4 shrink-0 text-copilot-primary/65" aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-copilot-text-primary">{def.label}</p>
                    {def.sub ? <p className="text-[0.7rem] text-copilot-text-secondary">{def.sub}</p> : null}
                  </div>
                  <p className="shrink-0 tabular-nums text-sm font-semibold text-copilot-text-primary">€{v}</p>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-copilot-bg-soft">
                  <div
                    className={cn("h-full rounded-full transition-[width]", def.bar)}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-end justify-between gap-3 border-t border-copilot-primary/15 pt-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary">
            Estimated total
          </p>
          <p className="text-xs text-copilot-text-secondary">Per month, before surprises</p>
        </div>
        <p className="tabular-nums text-xl font-bold tracking-tight text-copilot-primary">€{t}</p>
      </div>
    </article>
  );
}

function formatCommutePracticality(s: string | null | undefined): string {
  if (!s) return "—";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function TradeoffInsightBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3 border-t border-copilot-primary/[0.08] pt-3 first:border-t-0 first:pt-0">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-copilot-primary/70" aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary">{label}</p>
        <p className="mt-1 text-sm leading-snug text-copilot-text-primary">{children}</p>
      </div>
    </div>
  );
}

function commutePreferenceLabel(pref: CommuteModePref): string {
  switch (pref) {
    case "train_pt":
      return "Train & public transport";
    case "bike":
      return "Cycling";
    case "car":
      return "Car";
    case "mixed":
      return "Mixed (train + bike)";
    default:
      return pref;
  }
}

function commutePracticalityPillClass(p: string): string {
  switch (p) {
    case "excellent":
      return "bg-emerald-500/20 text-emerald-950 ring-1 ring-emerald-600/25";
    case "good":
      return "bg-sky-500/15 text-sky-950 ring-1 ring-sky-600/25";
    case "workable":
      return "bg-amber-500/15 text-amber-950 ring-1 ring-amber-600/25";
    case "long":
      return "bg-orange-500/15 text-orange-950 ring-1 ring-orange-600/25";
    case "poor":
      return "bg-rose-500/15 text-rose-950 ring-1 ring-rose-600/25";
    default:
      return "bg-copilot-bg-soft text-copilot-text-secondary ring-1 ring-copilot-primary/10";
  }
}

const COMMUTE_MODE_DETAIL_LABEL =
  "text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary";
const COMMUTE_MODE_DETAIL_VALUE =
  "mt-1 text-sm leading-relaxed text-pretty text-copilot-text-primary";

function CommuteModeDetailCard({
  Icon,
  block,
  emphasized,
}: {
  Icon: LucideIcon;
  block: CommuteModeInsightBlock;
  emphasized: boolean;
}) {
  const showRel = block.reliability.trim() !== "—" && block.reliability.trim().length > 0;
  const showCost = block.costRough.trim() !== "—" && block.costRough.trim().length > 0;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 transition-shadow",
        emphasized
          ? "border-copilot-primary/35 bg-copilot-primary/[0.06] shadow-sm ring-1 ring-copilot-primary/15"
          : "border-copilot-primary/10 bg-copilot-bg-soft/40"
      )}
    >
      <div className="flex items-start gap-2.5">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-copilot-primary/80" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
            <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-copilot-text-primary">{block.title}</p>
            {emphasized ? (
              <span className="shrink-0 rounded-full bg-copilot-primary/15 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-copilot-primary">
                Your pick
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-pretty text-copilot-text-secondary">{block.narrative}</p>
        </div>
      </div>
      <dl className="mt-4 space-y-3 border-t border-copilot-primary/10 pt-4">
        <div>
          <dt className={COMMUTE_MODE_DETAIL_LABEL}>Typical one-way</dt>
          <dd className={COMMUTE_MODE_DETAIL_VALUE}>{block.typicalOneWay}</dd>
        </div>
        {showRel ? (
          <div>
            <dt className={COMMUTE_MODE_DETAIL_LABEL}>Reliability</dt>
            <dd className={COMMUTE_MODE_DETAIL_VALUE}>{block.reliability}</dd>
          </div>
        ) : null}
        {showCost ? (
          <div>
            <dt className={COMMUTE_MODE_DETAIL_LABEL}>Rough monthly</dt>
            <dd className={COMMUTE_MODE_DETAIL_VALUE}>{block.costRough}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}

function CommuteCityCard({
  row,
  commutePref,
}: {
  row: CityScoreRow;
  commutePref: CommuteModePref;
}) {
  const ci = row.commuteInsights;
  if (!ci) return null;

  const emph = (mode: "train_pt" | "bike" | "car") =>
    commutePref === mode || (commutePref === "mixed" && (mode === "train_pt" || mode === "bike"));

  return (
    <article className="flex min-w-0 flex-col gap-4 rounded-2xl border border-copilot-primary/12 bg-white p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-copilot-primary/10 pb-4">
        <div className="min-w-0 flex-1 space-y-1">
          <h4 className="text-lg font-bold text-copilot-text-primary">{row.displayName}</h4>
          <p className="text-xs leading-relaxed text-pretty text-copilot-text-secondary">
            To <span className="font-medium text-copilot-text-primary">{ci.officeDisplayName}</span>
            <span className="text-copilot-text-secondary"> · scoring lens: </span>
            <span className="font-medium text-copilot-text-primary">{commutePreferenceLabel(commutePref)}</span>
          </p>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-bold capitalize",
            commutePracticalityPillClass(ci.practicality)
          )}
        >
          {formatCommutePracticality(ci.practicality)}
        </span>
      </div>

      <div className="rounded-xl border border-sky-500/20 bg-sky-50/60 px-3 py-2.5 text-sm leading-relaxed text-pretty text-copilot-text-primary">
        <span className="font-semibold text-copilot-primary">For your settings: </span>
        {ci.preferredSummary}
      </div>

      <div className="flex flex-col gap-3">
        <CommuteModeDetailCard Icon={TrainFront} block={ci.modes.train_pt} emphasized={emph("train_pt")} />
        <CommuteModeDetailCard Icon={Bike} block={ci.modes.bike} emphasized={emph("bike")} />
        <CommuteModeDetailCard Icon={Car} block={ci.modes.car} emphasized={emph("car")} />
      </div>

      <div className="flex gap-3 rounded-xl border border-amber-500/25 bg-amber-50/50 p-3 text-xs text-amber-950">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-amber-900">Disruptions & reality checks</p>
          <p className="mt-1 leading-relaxed text-pretty text-amber-950/90">{ci.corridorDisruption}</p>
        </div>
      </div>
    </article>
  );
}

function scenarioLensIcon(id: string): LucideIcon {
  switch (id) {
    case "current":
      return SlidersHorizontal;
    case "budget_first":
      return Wallet;
    case "family_first":
      return Users;
    case "commute_first":
      return TrainFront;
    case "lifestyle_first":
      return Sparkles;
    case "remote_variant":
      return Home;
    default:
      return Circle;
  }
}

const FIELD_LABEL = "text-sm font-semibold text-copilot-text-primary";

const PICKABLE_CITIES = ALL_COMPARISON_CITY_IDS.filter((c) => c !== "other");

const CITY_TOGGLE_LABELS = Object.fromEntries(
  PICKABLE_CITIES.map((cid) => [cid, getCityComparisonProfile(cid).displayName])
) as Record<CityComparisonId, string>;

const OFFICE_CITIES: { value: ColCity; label: string }[] = [
  { value: "amsterdam", label: "Amsterdam" },
  { value: "rotterdam", label: "Rotterdam" },
  { value: "utrecht", label: "Utrecht" },
  { value: "the-hague", label: "The Hague" },
  { value: "eindhoven", label: "Eindhoven" },
  { value: "haarlem", label: "Haarlem" },
  { value: "delft", label: "Delft" },
  { value: "leiden", label: "Leiden" },
  { value: "groningen", label: "Groningen" },
];

const TRI = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
] as const;

function SectionCard({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
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

type SortKey =
  | "city"
  | "total"
  | "netRem"
  | "afford"
  | "commute"
  | "family"
  | "expat"
  | "overall";

function sortRows(rows: CityScoreRow[], key: SortKey, dir: "asc" | "desc"): CityScoreRow[] {
  const m = dir === "asc" ? 1 : -1;
  const out = [...rows];
  out.sort((a, b) => {
    switch (key) {
      case "city":
        return m * a.displayName.localeCompare(b.displayName);
      case "total":
        return m * (a.cost.totalMonthlyOutflowEur - b.cost.totalMonthlyOutflowEur);
      case "netRem":
        return m * (a.netRemainingEur - b.netRemainingEur);
      case "afford":
        return m * (a.dimensions.affordability - b.dimensions.affordability);
      case "commute":
        return m * (a.dimensions.commute - b.dimensions.commute);
      case "family":
        return m * (a.dimensions.family - b.dimensions.family);
      case "expat":
        return m * (a.dimensions.expatEase - b.dimensions.expatEase);
      case "overall":
      default:
        return m * (a.overallScore - b.overallScore);
    }
  });
  return out;
}

export function CityComparisonCalculatorClient({ calculatorCanonicalUrl }: { calculatorCanonicalUrl: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<CityComparisonInput>(DEFAULT_CITY_COMPARISON_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<CityComparisonInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [exportNotes, setExportNotes] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("overall");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const latestInputRef = useRef(input);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

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
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let next = DEFAULT_CITY_COMPARISON_INPUT;
    if (hasCityComparisonUrlParams(sp)) {
      next = hydrateCityComparisonInput(parseCityComparisonSearchParams(sp));
    } else {
      const stored = loadCityComparisonFromStorage();
      if (stored) next = hydrateCityComparisonInput(stored);
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveCityComparisonToStorage(input);
    const t = window.setTimeout(() => {
      const params = cityComparisonInputToSearchParams(input);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const liveResult = useMemo<CityComparisonResult | null>(
    () => (lastRunInput ? computeCityComparison(lastRunInput) : null),
    [lastRunInput]
  );

  const sortedTableRows = useMemo(
    () => (liveResult ? sortRows(liveResult.ranking, sortKey, sortDir) : []),
    [liveResult, sortKey, sortDir]
  );

  const costBreakdownContext = useMemo(() => {
    if (!liveResult?.ranking.length) return null;
    const rows = liveResult.ranking;
    const maxByKey: Record<string, number> = {};
    for (const def of MONTHLY_COST_ROW_DEFS) {
      maxByKey[def.key] = Math.max(...rows.map((r) => def.get(r.cost)), 1);
    }
    const totals = rows.map((r) => r.cost.totalMonthlyOutflowEur);
    const minTotal = Math.min(...totals);
    const maxTotal = Math.max(...totals);
    const cheapNames = rows.filter((r) => r.cost.totalMonthlyOutflowEur === minTotal).map((r) => r.displayName);
    const cheapestLabel =
      cheapNames.length <= 1
        ? (cheapNames[0] ?? "")
        : cheapNames.length === 2
          ? `${cheapNames[0]} & ${cheapNames[1]}`
          : `${cheapNames.slice(0, -1).join(", ")} & ${cheapNames[cheapNames.length - 1]!}`;
    return { maxByKey, minTotal, maxTotal, cheapestLabel };
  }, [liveResult]);

  const patch = useCallback((next: Partial<CityComparisonInput>) => {
    setInput((prev) => sanitizeCityComparisonInput({ ...prev, ...next }));
  }, []);

  const toggleCity = useCallback((id: CityComparisonId) => {
    setInput((prev) => {
      const has = prev.selectedCities.includes(id);
      let next = has ? prev.selectedCities.filter((c) => c !== id) : [...prev.selectedCities, id];
      if (!has && next.length > 4) return prev;
      if (has && next.length < 2) return prev;
      return sanitizeCityComparisonInput({ ...prev, selectedCities: next });
    });
  }, []);

  const toggleScenario = useCallback((mode: ScenarioRankingMode, checked: boolean) => {
    setInput((prev) => {
      const scenarioToggles = { ...prev.scenarioToggles, [mode]: checked };
      if (checked) {
        (Object.keys(scenarioToggles) as ScenarioRankingMode[]).forEach((k) => {
          if (k !== mode) scenarioToggles[k] = false;
        });
      } else {
        scenarioToggles.balanced = true;
      }
      return sanitizeCityComparisonInput({ ...prev, scenarioToggles });
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
      setLastRunInput(sanitizeCityComparisonInput({ ...latestInputRef.current }));
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isCalculating]);

  const copyShareLink = useCallback(async () => {
    const params = cityComparisonInputToSearchParams(input).toString();
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}?${params}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied — paste to share this comparison.");
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
    setInput(DEFAULT_CITY_COMPARISON_INPUT);
    setHasRun(false);
    setLastRunInput(null);
    setExportNotes("");
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const downloadHtml = useCallback(() => {
    if (!liveResult || !lastRunInput) return;
    downloadCityComparisonHtml({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning-only city comparison — not rental quotes, not commute timetables, not legal or tax advice. Results use editorial heuristics and the ExpatCopilot cost-of-living model.",
      input: lastRunInput,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRunInput, liveResult]);

  const printSummary = useCallback(() => {
    if (!liveResult || !lastRunInput) return;
    openPrintCityComparisonSummary({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning-only city comparison — not rental quotes, not commute timetables, not legal or tax advice.",
      input: lastRunInput,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
  }, [calculatorCanonicalUrl, exportNotes, lastRunInput, liveResult]);

  const copyExportHtml = useCallback(async () => {
    if (!liveResult || !lastRunInput) return;
    const html = buildCityComparisonExportHtml({
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer: "Planning-only — verify with live sources before you decide.",
      input: lastRunInput,
      result: liveResult,
      planningNotes: exportNotes.trim() || undefined,
    });
    try {
      await navigator.clipboard.writeText(html);
      setShareMessage("HTML summary copied — paste into a file or notes app.");
    } catch {
      setShareMessage("Could not copy HTML.");
    }
    window.setTimeout(() => setShareMessage(null), 3000);
  }, [calculatorCanonicalUrl, exportNotes, lastRunInput, liveResult]);

  const cycleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
      else {
        setSortKey(key);
        setSortDir(key === "city" ? "asc" : "desc");
      }
    },
    [sortKey]
  );

  if (!hydrated) {
    return <p className="text-sm text-copilot-text-secondary">Loading tool state…</p>;
  }

  return (
    <div className="space-y-8">
      <InfoBox title="Results stay hidden until you calculate" variant="info">
        <p className="text-sm text-copilot-text-secondary">
          Adjust cities and sliders below, then use <strong className="font-semibold text-copilot-text-primary">Calculate comparison</strong> at the
          bottom of the form. Your inputs sync to the URL for sharing (planning only — not a quote engine).
        </p>
      </InfoBox>

      <div className="space-y-5">
        <SectionCard title="A. City selection (2–4 cities)">
          <p className="text-xs text-copilot-text-secondary">Tap to include or exclude. Commuter belts are planning proxies, not municipalities.</p>
          <div className="flex flex-wrap gap-2">
            {PICKABLE_CITIES.map((cid) => {
              const on = input.selectedCities.includes(cid);
              const label = CITY_TOGGLE_LABELS[cid];
              return (
                <button
                  key={cid}
                  type="button"
                  aria-pressed={on}
                  aria-label={`${label}, ${on ? "included" : "not included"} in comparison. Toggle.`}
                  onClick={() => toggleCity(cid)}
                  className={cn(
                    "min-h-10 rounded-full border px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2",
                    on
                      ? "border-copilot-primary/40 bg-copilot-bg-soft text-copilot-text-primary ring-1 ring-copilot-primary/[0.12]"
                      : "border-copilot-primary/15 bg-copilot-surface text-copilot-text-secondary hover:border-copilot-primary/30"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard title="B. User profile">
          <div>
            <p className={FIELD_LABEL}>Household type</p>
            <SegmentedControl
              name="ncc-household"
              className="mt-2 flex-wrap"
              pillTone="copilot"
              value={input.householdType}
              onChange={(v) => patch({ householdType: v as CityComparisonInput["householdType"] })}
              options={[
                { value: "single", label: "Single" },
                { value: "couple", label: "Couple" },
                { value: "family1", label: "Family + 1 child" },
                { value: "family2", label: "Family + 2 children" },
                { value: "custom", label: "Custom" },
              ]}
            />
          </div>
          {input.householdType === "custom" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={FIELD_LABEL} htmlFor="ncc-adults">
                  Adults
                </label>
                <Input
                  id="ncc-adults"
                  type="number"
                  min={1}
                  max={4}
                  value={input.adultsCount}
                  onChange={(e) => patch({ adultsCount: Number(e.target.value) })}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                />
              </div>
              <div>
                <label className={FIELD_LABEL} htmlFor="ncc-children">
                  Children
                </label>
                <Input
                  id="ncc-children"
                  type="number"
                  min={0}
                  max={6}
                  value={input.childrenCount}
                  onChange={(e) => patch({ childrenCount: Number(e.target.value) })}
                  className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
                />
              </div>
            </div>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={FIELD_LABEL} htmlFor="ncc-net">
                Monthly net salary (EUR)
              </label>
              <Input
                id="ncc-net"
                type="number"
                min={0}
                value={input.monthlyNetSalary || ""}
                onChange={(e) => patch({ monthlyNetSalary: Number(e.target.value) })}
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
            </div>
            <div>
              <label className={FIELD_LABEL} htmlFor="ncc-gross">
                Optional monthly gross (EUR)
              </label>
              <Input
                id="ncc-gross"
                type="number"
                min={0}
                placeholder="Optional"
                value={input.monthlyGrossSalary ?? ""}
                onChange={(e) =>
                  patch({
                    monthlyGrossSalary: e.target.value === "" ? null : Number(e.target.value),
                  })
                }
                className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
              />
              <p className="mt-1 text-xs text-copilot-text-secondary">Not used in scoring — for your own notes; use salary tools for payroll math.</p>
            </div>
          </div>
          <div>
            <p className={FIELD_LABEL}>Work mode</p>
            <SegmentedControl
              name="ncc-work"
              className="mt-2"
              pillTone="copilot"
              value={input.workMode}
              onChange={(v) => patch({ workMode: v as CityComparisonInput["workMode"] })}
              options={[
                { value: "office", label: "Office-based" },
                { value: "hybrid", label: "Hybrid" },
                { value: "remote", label: "Remote" },
              ]}
            />
          </div>
          {input.workMode !== "remote" ? (
            <div>
              <label className={FIELD_LABEL} htmlFor="ncc-office">
                Office city
              </label>
              <select
                id="ncc-office"
                className="mt-1.5 w-full rounded-lg border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary"
                value={input.officeCity}
                onChange={(e) => patch({ officeCity: e.target.value as ColCity })}
              >
                {OFFICE_CITIES.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          <div>
            <p className={FIELD_LABEL}>Lifestyle tier (cost model)</p>
            <SegmentedControl
              name="ncc-tier"
              className="mt-2"
              pillTone="copilot"
              value={input.lifestyleTier}
              onChange={(v) => patch({ lifestyleTier: v as CityComparisonInput["lifestyleTier"] })}
              options={[
                { value: "minimal", label: "Minimal" },
                { value: "balanced", label: "Balanced" },
                { value: "comfortable", label: "Comfortable" },
              ]}
            />
          </div>
          {(
            [
              ["internationalPref", "International / expat preference"],
              ["familySchoolImportance", "Family / school importance"],
              ["nightlifePref", "Nightlife / energy"],
              ["natureCalmPref", "Nature / calm"],
              ["careerPriority", "Career opportunity priority"],
              ["budgetSensitivity", "Budget sensitivity"],
            ] as const
          ).map(([key, label]) => (
            <div key={key}>
              <p className={FIELD_LABEL}>{label}</p>
              <SegmentedControl
                name={`ncc-${key}`}
                className="mt-2"
                pillTone="copilot"
                value={input[key]}
                onChange={(v) => patch({ [key]: v as CityComparisonInput[typeof key] })}
                options={[...TRI]}
              />
            </div>
          ))}
        </SectionCard>

        <SectionCard title="C. Commute / location logic">
          <div>
            <p className={FIELD_LABEL}>Max comfortable commute (office / hybrid)</p>
            <SegmentedControl
              name="ncc-commute-max"
              className="mt-2 flex-wrap"
              pillTone="copilot"
              value={input.maxCommute}
              onChange={(v) => patch({ maxCommute: v as CityComparisonInput["maxCommute"] })}
              options={[
                { value: "under20", label: "Under 20 min" },
                { value: "under30", label: "Under 30 min" },
                { value: "under45", label: "Under 45 min" },
                { value: "under60", label: "Under 60 min" },
              ]}
            />
            <p className="mt-1 text-xs text-copilot-text-secondary">Planning labels only — not live door-to-door times.</p>
          </div>
          <div>
            <p className={FIELD_LABEL}>Commute mode preference</p>
            <SegmentedControl
              name="ncc-commute-mode"
              className="mt-2 flex-wrap"
              pillTone="copilot"
              value={input.commuteModePref}
              onChange={(v) => patch({ commuteModePref: v as CityComparisonInput["commuteModePref"] })}
              options={[
                { value: "train_pt", label: "Train / PT" },
                { value: "bike", label: "Bike" },
                { value: "car", label: "Car" },
                { value: "mixed", label: "Mixed" },
              ]}
            />
          </div>
        </SectionCard>

        <SectionCard title="D. Optional rent / cost anchors">
          <div>
            <label className={FIELD_LABEL} htmlFor="ncc-rent">
              Optional target rent budget (EUR / month)
            </label>
            <Input
              id="ncc-rent"
              type="number"
              min={0}
              placeholder="Use model rent if empty"
              value={input.targetRentBudget ?? ""}
              onChange={(e) =>
                patch({
                  targetRentBudget: e.target.value === "" ? null : Number(e.target.value),
                })
              }
              className="mt-1.5 border-copilot-primary/15 bg-copilot-surface"
            />
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-secondary">
            <input
              type="checkbox"
              className="mt-1"
              checked={input.useColModelForSpend}
              onChange={(e) => patch({ useColModelForSpend: e.target.checked })}
            />
            <span>Use full cost-of-living monthly model (dining, leisure lines). Off = essentials-only sum from the same engine.</span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-secondary">
            <input
              type="checkbox"
              className="mt-1"
              checked={input.includeFamilyChildcareEffects}
              onChange={(e) => patch({ includeFamilyChildcareEffects: e.target.checked })}
            />
            <span>Include family / childcare effects (when children &gt; 0).</span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-copilot-text-secondary">
            <input
              type="checkbox"
              className="mt-1"
              checked={input.planningWith30PercentRuling}
              onChange={(e) => patch({ planningWith30PercentRuling: e.target.checked })}
            />
            <span>Plan with 30% ruling uplift in the cost model (same assumption flag as the COL tool).</span>
          </label>
          <p className="text-xs text-copilot-text-secondary">
            For detailed net pay, use{" "}
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
              Dutch salary net calculator
            </Link>{" "}
            and{" "}
            <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
              30% ruling calculator
            </Link>
            .
          </p>
        </SectionCard>

        <SectionCard title="E. Scenario ranking lens">
          <p className="text-xs text-copilot-text-secondary">One lens at a time — adjusts how dimensions are weighted before ranking.</p>
          {(
            [
              ["balanced", "Balanced ranking"],
              ["cost_first", "Cost-first ranking"],
              ["lifestyle_first", "Lifestyle-first ranking"],
              ["family_first", "Family-first ranking"],
              ["commute_first", "Commute-first ranking"],
            ] as const
          ).map(([mode, label]) => (
            <label key={mode} className="flex cursor-pointer items-center gap-3 text-sm text-copilot-text-primary">
              <input
                type="radio"
                name="ncc-scenario"
                checked={input.scenarioToggles[mode]}
                onChange={() => toggleScenario(mode, true)}
              />
              {label}
            </label>
          ))}
        </SectionCard>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/30 p-4 sm:flex-row sm:flex-wrap sm:items-center md:p-5">
        <Button
          type="button"
          variant="primary"
          className="min-h-11 w-full focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2 sm:w-auto"
          onClick={handleCalculate}
          disabled={isCalculating}
          aria-busy={isCalculating}
        >
          {isCalculating ? "Calculating…" : "Calculate comparison"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="min-h-11 w-full border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2 sm:w-auto"
          onClick={copyShareLink}
        >
          Copy share link
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="min-h-11 w-full border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2 sm:w-auto"
          onClick={resetDefaults}
        >
          Reset defaults
        </Button>
        {shareMessage ? (
          <p className="text-sm text-copilot-text-secondary" role="status" aria-live="polite">
            {shareMessage}
          </p>
        ) : null}
      </div>

      <div
        id="tool-results"
        className="scroll-mt-28 space-y-8 md:scroll-mt-32"
        role="region"
        aria-label="City comparison results"
        aria-busy={isCalculating}
      >
        {isCalculating ? (
          <ToolResultsLoading
            message={
              progressPct > 0
                ? `Comparing cities, costs, and commute fit… ${Math.round(progressPct)}%`
                : "Comparing cities, costs, and commute fit…"
            }
          />
        ) : null}
        {hasRun && lastRunInput && !isCalculating && liveResult ? (
          <>
            <nav aria-label="Jump to result sections" className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-3 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Jump to results</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    ["best-match", "Top pick"],
                    ["comparison-table", "Table"],
                    ["tradeoffs", "City angles"],
                    ["cost-breakdown", "Cost split"],
                    ["commute-view", "Commute"],
                    ["what-would-change", "What would change"],
                    ["scenario-compare", "Lenses"],
                    ["download-summary", "Export"],
                  ] as const
                ).map(([sid, lab]) => (
                  <Button
                    key={sid}
                    type="button"
                    variant="secondary"
                    className="min-h-10 border-copilot-primary/20 text-sm focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2"
                    onClick={() => document.getElementById(sid)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    {lab}
                  </Button>
                ))}
              </div>
            </nav>

            <section id="best-match" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-copilot-text-primary sm:text-xl">Best match summary</h3>
                <p className="shrink-0 rounded-lg bg-copilot-bg-soft px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-copilot-text-secondary ring-1 ring-copilot-primary/10">
                  Lens: {liveResult.activeScenarioMode.replace(/_/g, " ")}
                </p>
              </div>
              <p className="max-w-3xl text-sm text-copilot-text-secondary">
                Planning-only scores — same inputs always produce the same order. Confirm rent, commute, and schools with live sources before you decide.
              </p>
              {liveResult.comparisonContextNotes.length > 0 ? (
                <InfoBox title="Applies to this whole comparison" variant="info">
                  <ul className="list-disc space-y-1 pl-4 text-sm text-copilot-text-secondary">
                    {liveResult.comparisonContextNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </InfoBox>
              ) : null}
              <div className="grid gap-5 lg:grid-cols-3">
                {[liveResult.bestMatch, liveResult.secondMatch, liveResult.thirdMatch].filter(Boolean).map((row, i) => (
                  <CityComparisonBestMatchCard
                    key={row!.cityId}
                    row={row!}
                    rankIndex={i}
                    resultConfidence={liveResult.resultConfidence}
                    planningFitConfidence={liveResult.planningFitConfidence}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-copilot-text-primary sm:text-xl">Scores by dimension</h3>
              <p className="max-w-2xl text-sm text-copilot-text-secondary">
                Each bar is a 0–100 planning signal from the model — useful for comparing shape across cities, not an absolute grade.
              </p>
              <div className="grid gap-5 xl:grid-cols-2">
                {liveResult.ranking.map((row) => (
                  <article
                    key={row.cityId}
                    className="min-w-0 rounded-2xl border border-copilot-primary/10 bg-gradient-to-b from-white to-copilot-bg-soft/30 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:p-5"
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-copilot-primary/10 pb-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-bold text-copilot-text-primary">{row.displayName}</h4>
                        <p className="mt-1 text-sm font-medium text-copilot-accent">{row.descriptor}</p>
                      </div>
                      <CityComparisonScoreRing score={row.overallScore} size="md" />
                    </div>
                    <CityComparisonDimensionBars row={row} />
                    <p className="mt-3 text-xs leading-relaxed text-copilot-text-secondary">{row.salaryFitNote}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="comparison-table" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">Comparison table</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Sort columns to compare costs and scores. Figures are estimates — not rental quotes.
                </p>
              </div>
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-copilot-primary/10 bg-copilot-surface shadow-expatos-sm">
                <table className="w-full min-w-[880px] text-left text-sm">
                  <thead className="bg-copilot-bg-soft/90 text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary">
                    <tr>
                      <th className="p-3" scope="col">
                        <button
                          type="button"
                          className="rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("city")}
                          aria-label={`Sort by city, ${sortKey === "city" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          City
                        </button>
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        Living
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        Rent
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        <button
                          type="button"
                          className="ml-auto block rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("total")}
                          aria-label={`Sort by total outflow, ${sortKey === "total" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          Total / mo
                        </button>
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        <button
                          type="button"
                          className="ml-auto block rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("netRem")}
                          aria-label={`Sort by net remaining, ${sortKey === "netRem" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          Left / mo
                        </button>
                      </th>
                      <th className="p-3" scope="col">
                        Affordability
                      </th>
                      <th className="p-3" scope="col">
                        <button
                          type="button"
                          className="rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("commute")}
                          aria-label={`Sort by commute score, ${sortKey === "commute" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          Commute
                        </button>
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        <button
                          type="button"
                          className="ml-auto block rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("family")}
                          aria-label={`Sort by family score, ${sortKey === "family" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          Family
                        </button>
                      </th>
                      <th className="p-3 text-right tabular-nums" scope="col">
                        <button
                          type="button"
                          className="ml-auto block rounded px-1 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary"
                          onClick={() => cycleSort("expat")}
                          aria-label={`Sort by international ease score, ${sortKey === "expat" ? (sortDir === "asc" ? "sorted ascending" : "sorted descending") : "not active"}`}
                        >
                          Intl.
                        </button>
                      </th>
                      <th className="p-3" scope="col">
                        Fit tag
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTableRows.map((row, idx) => (
                      <tr
                        key={row.cityId}
                        className={cn(
                          "border-t border-copilot-primary/10 transition-colors hover:bg-copilot-bg-soft/40",
                          idx % 2 === 1 && "bg-copilot-bg-soft/20"
                        )}
                      >
                        <th scope="row" className="p-3 text-left font-semibold text-copilot-text-primary">
                          {row.displayName}
                        </th>
                        <td className="p-3 text-right tabular-nums text-copilot-text-secondary">€{row.cost.livingLessRentEur}</td>
                        <td className="p-3 text-right tabular-nums text-copilot-text-secondary">€{row.cost.rentEur}</td>
                        <td className="p-3 text-right tabular-nums font-medium text-copilot-text-primary">
                          €{row.cost.totalMonthlyOutflowEur}
                        </td>
                        <td className="p-3 text-right tabular-nums font-medium text-copilot-text-primary">
                          €{row.netRemainingEur}
                        </td>
                        <td className="p-3 text-copilot-text-secondary">{row.affordabilityLabel}</td>
                        <td className="p-3 text-copilot-text-secondary">{formatCommutePracticality(row.commutePracticality)}</td>
                        <td className="p-3 text-right tabular-nums text-copilot-text-secondary">{row.dimensions.family}</td>
                        <td className="p-3 text-right tabular-nums text-copilot-text-secondary">{row.dimensions.expatEase}</td>
                        <td className="p-3">
                          <span className="inline-flex max-w-[11rem] rounded-full bg-copilot-bg-soft px-2.5 py-1 text-xs font-medium leading-tight text-copilot-accent ring-1 ring-copilot-primary/10">
                            {row.descriptor}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-3 md:hidden">
                {sortedTableRows.map((row) => (
                  <article
                    key={row.cityId}
                    className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm shadow-expatos-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-copilot-text-primary">{row.displayName}</p>
                      <span className="shrink-0 rounded-full bg-copilot-bg-soft px-2 py-0.5 text-xs font-bold text-copilot-primary">
                        {row.overallScore}/100
                      </span>
                    </div>
                    <p className="mt-2 tabular-nums text-copilot-text-secondary">
                      Total / mo <span className="font-medium text-copilot-text-primary">€{row.cost.totalMonthlyOutflowEur}</span>
                    </p>
                    <p className="tabular-nums text-copilot-text-secondary">
                      Left / mo <span className="font-medium text-copilot-text-primary">€{row.netRemainingEur}</span>
                    </p>
                    <p className="tabular-nums text-copilot-text-secondary">
                      Rent €{row.cost.rentEur} · Living €{row.cost.livingLessRentEur}
                    </p>
                    <p className="mt-2 text-xs text-copilot-text-secondary">
                      <span className="font-medium text-copilot-text-primary">Affordability: </span>
                      {row.affordabilityLabel}
                    </p>
                    {lastRunInput.workMode !== "remote" ? (
                      <p className="text-xs text-copilot-text-secondary">
                        <span className="font-medium text-copilot-text-primary">Commute: </span>
                        {formatCommutePracticality(row.commutePracticality)}
                      </p>
                    ) : null}
                    <p className="mt-2">
                      <span className="inline-flex rounded-full bg-copilot-bg-soft px-2.5 py-1 text-xs font-medium text-copilot-accent ring-1 ring-copilot-primary/10">
                        {row.descriptor}
                      </span>
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="tradeoffs" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">City angles</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Each card has a city-tinted skyline (decorative), the two sharpest lines up front, and extra detail on demand.
                </p>
              </div>
              {liveResult.tradeoffSectionTip ? (
                <InfoBox title="Expand your shortlist" variant="info">
                  <p className="text-sm text-copilot-text-secondary">{liveResult.tradeoffSectionTip}</p>
                </InfoBox>
              ) : null}
              <div className="grid gap-5 xl:grid-cols-2">
                {liveResult.ranking.map((row, rankIdx) => (
                  <article
                    key={row.cityId}
                    className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-copilot-primary/12 bg-white shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
                  >
                    <div className="relative">
                      <CityAngleBanner cityId={row.cityId} displayName={row.displayName} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pb-2.5 pt-12 px-3">
                        <div className="pointer-events-auto min-w-0">
                          <span className="mb-1 inline-flex rounded-md bg-white/95 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-copilot-primary shadow-sm ring-1 ring-black/10">
                            #{rankIdx + 1} in your list
                          </span>
                          <p className="text-lg font-bold tracking-tight text-white drop-shadow-md md:text-xl">
                            {row.displayName}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 px-4 pb-4 pt-3 md:px-5 md:pb-5">
                      <p className="text-xs text-copilot-text-secondary">
                        <span className="inline-flex rounded-full bg-copilot-bg-soft px-2.5 py-1 font-medium text-copilot-accent ring-1 ring-copilot-primary/10">
                          {row.descriptor}
                        </span>
                      </p>
                      <div className="flex flex-col gap-3">
                        <TradeoffInsightBlock icon={Sparkles} label="Best for">
                          {row.tradeoffs.bestFor}
                        </TradeoffInsightBlock>
                        <TradeoffInsightBlock icon={AlertTriangle} label="Main trade-off">
                          {row.tradeoffs.keyCompromise}
                        </TradeoffInsightBlock>
                      </div>
                      <details className="group rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/80 [&::-webkit-details-marker]:hidden">
                          More detail
                          <ChevronDown
                            className="h-4 w-4 shrink-0 text-copilot-primary transition-transform duration-200 group-open:rotate-180"
                            aria-hidden
                          />
                        </summary>
                        <div className="space-y-3 border-t border-copilot-primary/10 px-3 pb-3 pt-3">
                          <TradeoffInsightBlock icon={Users} label="Who it suits">
                            {row.tradeoffs.whyPeopleChoose}
                          </TradeoffInsightBlock>
                          <TradeoffInsightBlock icon={XCircle} label="Weaker fit when">
                            {row.tradeoffs.worseFitWhen}
                          </TradeoffInsightBlock>
                          {row.tradeoffs.commuterBeltNote ? (
                            <TradeoffInsightBlock icon={Compass} label="Commute context">
                              {row.tradeoffs.commuterBeltNote}
                            </TradeoffInsightBlock>
                          ) : null}
                        </div>
                      </details>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="cost-breakdown" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">Monthly cost split</h3>
                <p className="mt-1 max-w-none text-pretty text-sm text-copilot-text-secondary">
                  Same estimates as your inputs — useful for comparing shape of spend, not a rental quote or contract.
                </p>
              </div>
              {costBreakdownContext ? (
                <div className="grid gap-5 xl:grid-cols-2">
                  {liveResult.ranking.map((row) => (
                    <MonthlyCostBreakdownCard
                      key={row.cityId}
                      row={row}
                      maxByKey={costBreakdownContext.maxByKey}
                      minTotal={costBreakdownContext.minTotal}
                      maxTotal={costBreakdownContext.maxTotal}
                      cheapestLabel={costBreakdownContext.cheapestLabel}
                    />
                  ))}
                </div>
              ) : null}
            </section>

            <section id="commute-view" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">Commute picture</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Illustrative times and costs — check live NS / 9292 routes, parking rules, and your exact stations before you commit to a lease.
                </p>
              </div>
              {lastRunInput.workMode === "remote" ? (
                <p className="text-sm text-copilot-text-secondary">Remote work selected — office commute is down-weighted in scores.</p>
              ) : (
                <div className="grid gap-5 xl:grid-cols-2">
                  {liveResult.ranking.map((row) => (
                    <CommuteCityCard key={row.cityId} row={row} commutePref={lastRunInput.commuteModePref} />
                  ))}
                </div>
              )}
            </section>

            <section id="what-would-change" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">What would change the result</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Small slider or lens tweaks that could reshuffle your ranking — not predictions, just mechanical effects of the model.
                </p>
              </div>
              {liveResult.whatWouldChange.length === 0 ? (
                <p className="text-sm text-copilot-text-secondary">No alternate lenses fired for this input set.</p>
              ) : (
                <ul className="space-y-3">
                  {liveResult.whatWouldChange.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 rounded-2xl border border-copilot-primary/10 bg-white p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.04]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700">
                        <GitBranch className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="min-w-0 pt-1 text-sm leading-relaxed text-copilot-text-primary">{line}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section id="recommended-decision" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div className="flex flex-wrap items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800">
                  <Lightbulb className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-copilot-text-primary">Recommended read-out</h3>
                  <p className="mt-1 text-sm text-copilot-text-secondary">
                    Plain-language wrap-up of this run — same inputs always reproduce the same story.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {liveResult.recommendedDecision.map((line, idx) => {
                  if (idx === 0) {
                    return (
                      <div
                        key={line}
                        className="rounded-2xl border-2 border-copilot-primary/20 bg-gradient-to-br from-sky-50/95 via-white to-copilot-bg-soft/50 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/10"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/90 to-amber-600/80 text-white shadow-sm">
                            <Trophy className="h-6 w-6" aria-hidden />
                          </span>
                          <p className="min-w-0 pt-1 text-sm font-medium leading-relaxed text-copilot-text-primary md:text-[0.95rem]">
                            {line}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  if (idx === 1) {
                    return (
                      <div
                        key={line}
                        className="flex gap-3 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-sm"
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copilot-primary/10 text-sm font-bold text-copilot-primary"
                          aria-hidden
                        >
                          2
                        </span>
                        <p className="min-w-0 pt-1 text-sm leading-relaxed text-copilot-text-secondary">{line}</p>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={line}
                      className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface px-4 py-3.5 shadow-sm md:px-5"
                    >
                      <p className="min-w-0 text-pretty text-sm leading-relaxed text-copilot-text-secondary">{line}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="scenario-compare" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <div>
                <h3 className="text-lg font-semibold text-copilot-text-primary">Scenario lenses</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Same cities, different priorities — see how the winner flips when budget, family, commute, or lifestyle dominates.
                </p>
              </div>
              {(() => {
                const baselinePick = liveResult.scenarioRows.find((r) => r.id === "current")?.topCity ?? "";
                return (
                  <>
                    <div className="hidden overflow-hidden rounded-2xl border border-copilot-primary/12 bg-copilot-surface shadow-expatos-sm md:block">
                      <table className="w-full min-w-[520px] text-left text-sm">
                        <thead className="bg-copilot-bg-soft/90 text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary">
                          <tr>
                            <th className="px-4 py-3 pl-4" scope="col">
                              Lens
                            </th>
                            <th className="px-4 py-3" scope="col">
                              Winner
                            </th>
                            <th className="px-4 py-3 pr-4" scope="col">
                              What shifts
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {liveResult.scenarioRows.map((s, rowIdx) => {
                            const LensIcon = scenarioLensIcon(s.id);
                            const isCurrent = s.id === "current";
                            const shifts = s.id !== "current" && s.topCity !== baselinePick;
                            return (
                              <tr
                                key={s.id}
                                className={cn(
                                  "border-t border-copilot-primary/10 transition-colors",
                                  rowIdx % 2 === 1 && "bg-copilot-bg-soft/25",
                                  isCurrent && "bg-copilot-primary/[0.04]"
                                )}
                              >
                                <td className="px-4 py-3.5">
                                  <div className="flex items-center gap-2.5">
                                    <span
                                      className={cn(
                                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft ring-1 ring-copilot-primary/10",
                                        isCurrent && "bg-copilot-primary/10 ring-copilot-primary/20"
                                      )}
                                    >
                                      <LensIcon className="h-4 w-4 text-copilot-primary/80" aria-hidden />
                                    </span>
                                    <div>
                                      <p className="font-semibold text-copilot-text-primary">{s.label}</p>
                                      {isCurrent ? (
                                        <p className="text-[0.65rem] font-medium uppercase tracking-wide text-copilot-primary">
                                          Your baseline
                                        </p>
                                      ) : null}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3.5 align-top">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex rounded-full bg-copilot-primary/12 px-3 py-1 text-sm font-bold text-copilot-primary ring-1 ring-copilot-primary/15">
                                      {s.topCity}
                                    </span>
                                    {shifts ? (
                                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-amber-950">
                                        vs baseline
                                      </span>
                                    ) : null}
                                  </div>
                                </td>
                                <td className="px-4 py-3.5 text-copilot-text-secondary leading-snug">{s.note}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="space-y-3 md:hidden">
                      {liveResult.scenarioRows.map((s) => {
                        const LensIcon = scenarioLensIcon(s.id);
                        const isCurrent = s.id === "current";
                        const shifts = s.id !== "current" && s.topCity !== baselinePick;
                        return (
                          <article
                            key={s.id}
                            className={cn(
                              "rounded-2xl border p-4 text-sm shadow-expatos-sm",
                              isCurrent
                                ? "border-copilot-primary/25 bg-copilot-primary/[0.04] ring-1 ring-copilot-primary/10"
                                : "border-copilot-primary/10 bg-copilot-surface"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft ring-1 ring-copilot-primary/10">
                                <LensIcon className="h-5 w-5 text-copilot-primary/80" aria-hidden />
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-copilot-text-primary">{s.label}</p>
                                {isCurrent ? (
                                  <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-primary">
                                    Your baseline
                                  </p>
                                ) : null}
                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                  <span className="inline-flex rounded-full bg-copilot-primary/12 px-2.5 py-1 text-sm font-bold text-copilot-primary">
                                    {s.topCity}
                                  </span>
                                  {shifts ? (
                                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-950">
                                      vs baseline
                                    </span>
                                  ) : null}
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">{s.note}</p>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </section>

            <section id="download-summary" className="scroll-mt-28 space-y-4 rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/40 p-4 md:scroll-mt-32 md:p-5">
              <h3 className="text-lg font-semibold text-copilot-text-primary">Export / share</h3>
              <label className={FIELD_LABEL} htmlFor="ncc-notes">
                Optional notes (included in export)
              </label>
              <textarea
                id="ncc-notes"
                rows={3}
                value={exportNotes}
                onChange={(e) => setExportNotes(e.target.value)}
                className="mt-1 w-full rounded-lg border border-copilot-primary/15 bg-copilot-surface p-2 text-sm text-copilot-text-primary"
              />
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  className="min-h-10 border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2"
                  onClick={downloadHtml}
                >
                  Download HTML summary
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="min-h-10 border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2"
                  onClick={printSummary}
                >
                  Print / save as PDF
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="min-h-10 border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2"
                  onClick={copyExportHtml}
                >
                  Copy HTML
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="min-h-10 border-copilot-primary/20 focus-visible:ring-2 focus-visible:ring-copilot-primary focus-visible:ring-offset-2"
                  onClick={copyShareLink}
                >
                  Copy share link
                </Button>
              </div>
              <p className="text-xs text-copilot-text-secondary">
                Export includes selected cities, inputs, scores, cost table, and disclaimers. Ordering and affiliate links do not affect scores.
              </p>
            </section>
          </>
        ) : (
          !isCalculating && (
            <p className="text-sm text-copilot-text-secondary">Run calculate to see rankings, tables, and export options.</p>
          )
        )}
      </div>
    </div>
  );
}
