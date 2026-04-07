"use client";

import type { ReactNode } from "react";
import type { IndicativeNetComparison } from "@/src/lib/tools/thirty-percent-ruling/types";
import { cn } from "@/lib/cn";

const eur = (n: number) =>
  n.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function NetComparisonPanel({ net }: { net: IndicativeNetComparison }) {
  const deltaPositive = net.estimatedMonthlyNetDelta >= 0;
  return (
    <div className="space-y-4">
      <p className="rounded-lg border border-amber-200/80 bg-amber-50/50 p-3 text-xs text-amber-950">
        <strong>Planning only.</strong> Not payroll, not legal advice, and not your actual payslip — simplified tax bands on estimated taxable
        wages only.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <CompareMiniCard title="Without ruling (estimate)" accent="slate">
          <Row label="Taxable (annual)" value={eur(net.taxableIfNoRulingAnnual)} />
          <Row label="Est. tax (annual)" value={eur(net.estimatedTaxIfNoRulingAnnual)} />
          <Row label="Est. net (annual)" value={eur(net.estimatedNetIfNoRulingAnnual)} strong />
          <Row label="Est. net (monthly)" value={eur(net.estimatedNetIfNoRulingAnnual / 12)} />
        </CompareMiniCard>
        <CompareMiniCard title="With ruling (estimate)" accent="brand">
          <Row label="Taxable (annual)" value={eur(net.taxableWithRulingAnnual)} />
          <Row label="Est. tax (annual)" value={eur(net.estimatedTaxWithRulingAnnual)} />
          <Row label="Est. net (annual)" value={eur(net.estimatedNetWithRulingAnnual)} strong />
          <Row label="Est. net (monthly)" value={eur(net.estimatedNetWithRulingAnnual / 12)} />
        </CompareMiniCard>
      </div>

      <div
        className={cn(
          "rounded-2xl border-2 p-5 text-center shadow-sm md:p-6",
          deltaPositive
            ? "border-emerald-300/80 bg-gradient-to-br from-emerald-50 to-white"
            : "border-slate-200 bg-slate-50/80"
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Estimated monthly net difference</p>
        <p className={cn("mt-1 text-3xl font-bold tabular-nums", deltaPositive ? "text-emerald-800" : "text-slate-800")}>
          {deltaPositive ? "+" : ""}
          {eur(net.estimatedMonthlyNetDelta)}
        </p>
        <p className="mt-1 text-sm text-slate-600">vs same gross without the ruling structure (indicative).</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
        <p className="font-semibold text-slate-800">Model: {net.modelLabel}</p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          {net.assumptionBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompareMiniCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: "slate" | "brand";
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-sm md:p-5",
        accent === "brand"
          ? "border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white"
          : "border-slate-200/90 bg-white"
      )}
    >
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <dl className="mt-3 space-y-2 text-sm">{children}</dl>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5 last:border-0">
      <dt className="text-slate-600">{label}</dt>
      <dd className={cn("text-right tabular-nums text-slate-900", strong && "font-semibold")}>{value}</dd>
    </div>
  );
}
