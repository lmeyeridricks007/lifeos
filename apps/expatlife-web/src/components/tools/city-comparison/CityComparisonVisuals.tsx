"use client";

import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CityScoreRow } from "@/src/lib/tools/city-comparison/types";
import type { ResultConfidenceLevel } from "@/src/lib/tools/city-comparison/types";

const RING_R = 15.9155;
const RING_C = 2 * Math.PI * RING_R;

type ScoreRingProps = {
  score: number;
  /** Emphasize first-place card */
  featured?: boolean;
  /** `md` for compact rows; `lg` for best-match hero */
  size?: "md" | "lg";
  className?: string;
};

/**
 * Compact circular score indicator (planning score / 100).
 */
export function CityComparisonScoreRing({ score, featured, size = "lg", className }: ScoreRingProps) {
  const pct = Math.min(100, Math.max(0, score));
  const dash = (pct / 100) * RING_C;

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        size === "md" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-[4.5rem] w-[4.5rem] sm:h-[5.25rem] sm:w-[5.25rem]",
        className
      )}
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r={RING_R} stroke="currentColor" strokeWidth="2.5" className="text-copilot-primary/12" />
        <circle
          cx="18"
          cy="18"
          r={RING_R}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${RING_C}`}
          className={featured ? "text-copilot-primary" : "text-copilot-accent"}
        />
      </svg>
      <div className="relative flex flex-col items-center leading-none">
        <span
          className={cn(
            "font-bold tabular-nums text-copilot-text-primary",
            size === "md" ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
          )}
        >
          {score}
        </span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-copilot-text-secondary sm:text-[0.65rem]">
          / 100
        </span>
      </div>
    </div>
  );
}

function InsightList({
  title,
  icon: Icon,
  items,
  iconClassName,
  maxItems = 5,
}: {
  title: string;
  icon: typeof CheckCircle2;
  items: string[];
  iconClassName: string;
  maxItems?: number;
}) {
  const shown = items.slice(0, maxItems);
  if (shown.length === 0) return null;

  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-primary">{title}</p>
      <ul className="mt-2 space-y-2">
        {shown.map((line, idx) => (
          <li key={`${title}-${idx}`} className="flex gap-2 text-sm leading-snug text-copilot-text-secondary">
            <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", iconClassName)} aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      {items.length > maxItems ? (
        <p className="mt-2 text-xs text-copilot-text-secondary">+{items.length - maxItems} more in the detailed cards and export below.</p>
      ) : null}
    </div>
  );
}

function confidenceStripClass(level: ResultConfidenceLevel): string {
  switch (level) {
    case "high":
      return "border-emerald-200/90 bg-emerald-50/70 text-emerald-950";
    case "medium":
      return "border-sky-200/90 bg-sky-50/70 text-sky-950";
    case "low":
    default:
      return "border-amber-200/90 bg-amber-50/60 text-amber-950";
  }
}

type BestMatchCardProps = {
  row: CityScoreRow;
  rankIndex: number;
  resultConfidence: ResultConfidenceLevel;
  planningFitConfidence: string;
};

export function CityComparisonBestMatchCard({
  row,
  rankIndex,
  resultConfidence,
  planningFitConfidence,
}: BestMatchCardProps) {
  const isFirst = rankIndex === 0;
  const rankLabel = rankIndex === 0 ? "Best match" : rankIndex === 1 ? "2nd place" : "3rd place";

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-4 shadow-expatos-md sm:p-5",
        isFirst
          ? "border-copilot-primary/25 bg-gradient-to-br from-sky-50/95 via-white to-copilot-bg-soft/40 ring-1 ring-copilot-primary/15"
          : "border-copilot-primary/10 bg-copilot-surface ring-1 ring-copilot-primary/[0.06]"
      )}
    >
      {isFirst ? (
        <div
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-copilot-primary/10 text-copilot-primary"
          title="Top pick for your current inputs"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
        </div>
      ) : null}

      <div className="flex gap-4 pr-10">
        <CityComparisonScoreRing score={row.overallScore} featured={isFirst} />
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-bold uppercase tracking-wider text-copilot-primary">{rankLabel}</p>
          <h4 className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{row.displayName}</h4>
          <p className="mt-1.5 inline-flex rounded-full bg-copilot-bg-soft px-2.5 py-0.5 text-xs font-medium text-copilot-accent ring-1 ring-copilot-primary/10">
            {row.descriptor}
          </p>
        </div>
      </div>

      <InsightList
        title="Why it fits"
        icon={CheckCircle2}
        iconClassName="text-emerald-600"
        items={row.positives}
        maxItems={4}
      />
      <InsightList
        title="City-specific cautions"
        icon={AlertCircle}
        iconClassName="text-amber-600"
        items={row.negatives}
        maxItems={3}
      />

      {row.salaryFitNote ? (
        <div className="mt-3 rounded-xl border border-copilot-primary/10 bg-white/80 px-3 py-2 text-xs leading-relaxed text-copilot-text-secondary">
          {row.salaryFitNote}
        </div>
      ) : null}

      {isFirst ? (
        <p
          className={cn(
            "mt-4 rounded-xl border px-3 py-2.5 text-xs leading-relaxed",
            confidenceStripClass(resultConfidence)
          )}
        >
          <span className="font-semibold">How decisive: {resultConfidence}</span>
          <span className="opacity-80"> · </span>
          <span className="opacity-90">{planningFitConfidence}</span>
        </p>
      ) : null}
    </article>
  );
}

type DimensionKey = keyof CityScoreRow["dimensions"];

const DIMENSION_META: { key: DimensionKey; label: string }[] = [
  { key: "affordability", label: "Affordability" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "commute", label: "Commute" },
  { key: "expatEase", label: "Expat ease" },
  { key: "family", label: "Family" },
  { key: "career", label: "Career" },
];

/**
 * Horizontal bars for 0–100 dimension scores (overall city cards).
 */
export function CityComparisonDimensionBars({ row }: { row: CityScoreRow }) {
  return (
    <div className="mt-4 space-y-2.5">
      {DIMENSION_META.map(({ key, label }) => {
        const v = row.dimensions[key];
        return (
          <div key={key}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-medium text-copilot-text-secondary">{label}</span>
              <span className="tabular-nums font-semibold text-copilot-text-primary">{v}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-copilot-primary/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-copilot-primary/80 to-copilot-accent/90 motion-safe:transition-[width] motion-safe:duration-500"
                style={{ width: `${v}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
