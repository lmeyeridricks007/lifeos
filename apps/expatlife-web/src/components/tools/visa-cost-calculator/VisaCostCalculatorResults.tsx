"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { CostEngineResult } from "@/src/data/tools/visa-cost-calculator/types";
import type { VisaCostCalculatorAnswers } from "@/src/data/tools/visa-cost-calculator/types";
import { ROUTE_COST_PROFILES } from "@/src/data/tools/visa-cost-calculator/route-cost-profiles";
import { ContentTableRow, ContentTableCell } from "@/components/ui/content-table";

const BASE = "/netherlands";

function formatEur(n: number): string {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

type Props = {
  result: CostEngineResult;
  answers: VisaCostCalculatorAnswers;
  onStartOver: () => void;
};

function PdfDownloadButton({
  result,
  answers,
  label,
}: {
  result: CostEngineResult;
  answers: VisaCostCalculatorAnswers;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const handleClick = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/visa-cost-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          result: {
            lowEstimate: result.lowEstimate,
            highEstimate: result.highEstimate,
            officialFeeSubtotal: result.officialFeeSubtotal,
            documentPrepSubtotal: result.documentPrepSubtotal,
            travelSubtotal: result.travelSubtotal,
            setupSubtotal: result.setupSubtotal,
            costBreakdown: result.costBreakdown,
            hiddenCostWarnings: result.hiddenCostWarnings,
            recommendedNextSteps: result.recommendedNextSteps,
          },
          answers: {
            primaryRoute: answers.primaryRoute,
            countryCode: answers.countryCode,
            travelDistanceBand: answers.travelDistanceBand,
            householdType: answers.householdType,
          },
        }),
      });
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "netherlands-visa-cost-estimate.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }, [result, answers]);
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700 disabled:opacity-70"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {label}
    </button>
  );
}

const SUMMARY_CARD_STYLES = [
  "rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/50 border-l-4 border-l-brand-500",
  "rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/50 border-l-4 border-l-sky-500",
  "rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/50 border-l-4 border-l-cyan-500",
  "rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/50 border-l-4 border-l-emerald-500",
] as const;

export function VisaCostCalculatorResults({ result, answers, onStartOver }: Props) {
  const comparisonRoutes = ROUTE_COST_PROFILES.filter(
    (p) => p.routeId !== "not-sure" && p.routeId !== answers.primaryRoute
  ).slice(0, 5);

  return (
    <div id="visa-cost-results" className="scroll-mt-24 space-y-10">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Your estimated visa and pre-move cost range
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            This estimate combines official application fees, likely document-preparation costs, and common
            move-planning expenses based on your route and household setup. Final costs depend on your provider
            choices, travel timing, and document complexity.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <PdfDownloadButton result={result} answers={answers} label="Download PDF" />
          <button
            type="button"
            onClick={onStartOver}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
          >
            Start over
          </button>
        </div>
      </div>

      {/* Total range — hero block */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-brand-300/80 bg-gradient-to-br from-brand-50 via-white to-sky-50/50 p-8 shadow-lg ring-1 ring-brand-200/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Total estimated range</p>
        <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {formatEur(result.lowEstimate)}
          <span className="mx-2 text-2xl font-normal text-slate-400 sm:text-3xl">–</span>
          {formatEur(result.highEstimate)}
        </p>
        <p className="mt-2 text-sm text-slate-600">Planning estimate only — confirm fees with IND and providers.</p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className={SUMMARY_CARD_STYLES[0]}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Official route fees</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{formatEur(result.officialFeeSubtotal)}</p>
          <p className="mt-1 text-sm text-slate-600">IND application fee</p>
        </div>
        <div className={SUMMARY_CARD_STYLES[1]}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Documents and prep</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">~{formatEur(result.documentPrepSubtotal)}</p>
          <p className="mt-1 text-sm text-slate-600">Translation, apostille, etc.</p>
        </div>
        <div className={SUMMARY_CARD_STYLES[2]}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Travel and setup</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            ~{formatEur(result.travelSubtotal + result.setupSubtotal)}
          </p>
          <p className="mt-1 text-sm text-slate-600">Flights, housing, first-week</p>
        </div>
        <div className={SUMMARY_CARD_STYLES[3]}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total range</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatEur(result.lowEstimate)} – {formatEur(result.highEstimate)}
          </p>
          <p className="mt-1 text-sm text-slate-600">Planning estimate</p>
        </div>
      </div>

      {/* Cost breakdown */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/50">
        <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Cost breakdown</h3>
          <p className="mt-0.5 text-sm text-slate-600">Itemized estimate by category.</p>
        </div>
        <div className="overflow-hidden rounded-b-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70">
                <th className="py-3.5 pl-5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Category
                </th>
                <th className="py-3.5 pr-5 text-right text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Range
                </th>
                <th className="hidden py-3.5 pr-5 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 md:table-cell">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.costBreakdown.map((row, i) => (
                <ContentTableRow key={row.id}>
                  <ContentTableCell className="py-3.5 pl-5 font-medium text-slate-800">{row.label}</ContentTableCell>
                  <ContentTableCell className="py-3.5 pr-5 text-right font-semibold tabular-nums text-slate-800">
                    {row.lowEur === row.highEur
                      ? formatEur(row.lowEur)
                      : `${formatEur(row.lowEur)} – ${formatEur(row.highEur)}`}
                  </ContentTableCell>
                  <ContentTableCell className="hidden py-3.5 pr-5 text-right text-slate-500 md:table-cell">
                    {row.note ?? "—"}
                  </ContentTableCell>
                </ContentTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Route comparison */}
      {comparisonRoutes.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/50">
          <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
            <h3 className="text-lg font-semibold text-slate-900">How this route compares with other visa routes</h3>
            <p className="mt-0.5 text-sm text-slate-600">Typical fees and planning bands for alternative routes.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="py-3.5 pl-5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Route
                  </th>
                  <th className="py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Typical fee
                  </th>
                  <th className="py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Prep
                  </th>
                  <th className="py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Planning band
                  </th>
                  <th className="py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Best for
                  </th>
                  <th className="py-3.5 pr-5 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Guide
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRoutes.map((p) => (
                  <ContentTableRow key={p.routeId}>
                    <ContentTableCell className="py-3.5 pl-5 font-medium text-slate-800">{p.label}</ContentTableCell>
                    <ContentTableCell className="py-3.5 tabular-nums text-slate-700">
                      {p.typicalOfficialFeeEur > 0 ? formatEur(p.typicalOfficialFeeEur) : "—"}
                    </ContentTableCell>
                    <ContentTableCell className="py-3.5 capitalize text-slate-700">{p.typicalPrepComplexity}</ContentTableCell>
                    <ContentTableCell className="py-3.5 text-slate-700">{p.typicalTotalPlanningBand}</ContentTableCell>
                    <ContentTableCell className="py-3.5 text-slate-600">{p.bestFor}</ContentTableCell>
                    <ContentTableCell className="py-3.5 pr-5">
                      <Link
                        href={p.guidePath}
                        className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700 hover:underline"
                      >
                        View guide →
                      </Link>
                    </ContentTableCell>
                  </ContentTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Hidden costs */}
      {result.hiddenCostWarnings.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-slate-900">Hidden or easy-to-forget costs</h3>
          <ul className="mt-3 space-y-2">
            {result.hiddenCostWarnings.map((text, i) => (
              <li key={i}>
                <div className="flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm text-amber-900 shadow-sm ring-1 ring-amber-200/50">
                  <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>⚠</span>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next steps */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">What to do next</h3>
        <p className="mt-1 text-sm text-slate-600">Recommended steps based on your route.</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {result.recommendedNextSteps.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
              >
                {s.label}
                <span className="text-brand-600" aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
