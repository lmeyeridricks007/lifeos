"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { PrimaryEligibilityStatus, ThirtyPercentYearEstimate } from "@/src/lib/tools/thirty-percent-ruling/types";

export const eur = (n: number) =>
  n.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export const pct = (n: number) => `${Math.round(n * 100)}%`;

export function toneForEligibilityStatus(status: PrimaryEligibilityStatus): "positive" | "warn" | "neutral" {
  if (status === "likely_eligible") return "positive";
  if (status === "unlikely_eligible") return "warn";
  return "neutral";
}

export function ResultCard({
  title,
  tone,
  children,
  className,
  titleAs: TitleTag = "h3",
}: {
  title: string;
  tone: "positive" | "warn" | "neutral";
  children: ReactNode;
  className?: string;
  titleAs?: "h2" | "h3" | "h4";
}) {
  const border =
    tone === "positive"
      ? "border-emerald-200/90 bg-emerald-50/50"
      : tone === "warn"
        ? "border-amber-200/90 bg-amber-50/40"
        : "border-slate-200/90 bg-white";
  return (
    <div className={cn("rounded-2xl border p-5 shadow-sm md:p-6", border, className)}>
      <TitleTag className="text-lg font-semibold text-slate-900">{title}</TitleTag>
      <div className="mt-3 space-y-2 text-sm text-slate-700">{children}</div>
    </div>
  );
}

export function YearBreakdown({ row }: { row: ThirtyPercentYearEstimate }) {
  return (
    <dl className="grid gap-2 text-sm">
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Statutory facility % (planning)</dt>
        <dd className="font-medium text-slate-900">{pct(row.facilityPercent)}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Applied allowance %</dt>
        <dd className="font-medium text-slate-900">{pct(row.allowancePercentApplied)}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Salary norm checked</dt>
        <dd className="font-medium text-slate-900">{eur(row.applicableThresholdAnnual)}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Capped salary base</dt>
        <dd className="font-medium text-slate-900">{eur(row.cappedBaseAnnual)}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Months in scope</dt>
        <dd className="font-medium text-slate-900">{row.monthsApplicable} / 12</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Est. untaxed allowance (year)</dt>
        <dd className="font-semibold text-brand-700">{eur(row.maxUntaxedAllowanceAnnual)}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-slate-100 py-1.5">
        <dt className="text-slate-600">Est. taxable wages (year)</dt>
        <dd className="font-medium text-slate-900">{eur(row.taxableSalaryEstimateAnnual)}</dd>
      </div>
      <div className="flex justify-between gap-3 py-1.5">
        <dt className="text-slate-600">Monthly untaxed / taxable (smoothed ÷12)</dt>
        <dd className="text-right font-medium text-slate-900">
          {eur(row.monthlyUntaxedAllowance)} / {eur(row.monthlyTaxableSalaryEstimate)}
        </dd>
      </div>
    </dl>
  );
}

export function SubduedResultCard({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200/90 bg-slate-50/40 p-4 shadow-sm ring-1 ring-slate-200/40 md:p-5",
        className
      )}
    >
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <div className="mt-2 space-y-2 text-sm text-slate-600">{children}</div>
    </div>
  );
}
