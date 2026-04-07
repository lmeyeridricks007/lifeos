"use client";

import Link from "next/link";
import { memo, useMemo } from "react";
import { InfoBox } from "@/components/ui/info-box";
import type { SalaryNetComputation } from "@/src/lib/tools/dutch-salary-net/types";
import { buildPlanningInsights } from "@/src/lib/tools/dutch-salary-net/planningInsights";
import { eur } from "./copilotUi";
import { cn } from "@/lib/cn";
import { SalaryExplainEstimate } from "./SalaryExplainEstimate";
import { SalaryTakeHomeBreakdown } from "./SalaryTakeHomeBreakdown";

const THIRTY_PERCENT_RULING_TOOL_HREF = "/netherlands/taxes/tools/30-ruling-calculator/";
const SERVICES_HREF = "/netherlands/services/";
const BANKS_HREF = "/netherlands/services/banks/";

function StatCard({
  label,
  value,
  hint,
  emphasis,
}: {
  label: string;
  value: string;
  hint?: string;
  emphasis?: "primary" | "default";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-sm md:p-5",
        emphasis === "primary"
          ? "border-brand-400/60 bg-gradient-to-br from-brand-50/90 to-white ring-1 ring-brand-200/50"
          : "border-slate-200/90 bg-white"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={cn("mt-2 text-2xl font-bold tracking-tight break-words", emphasis === "primary" ? "text-brand-900" : "text-slate-900")}>
        {value}
      </p>
      {hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}

function TaxableIncomeBars({ result }: { result: SalaryNetComputation }) {
  const without = result.withoutRuling.taxableIncomeAnnual;
  const withT = result.taxableIncomeAnnual;
  const max = Math.max(without, withT, 1);
  const wPct = Math.round((without / max) * 100);
  const tPct = Math.round((withT / max) * 100);

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-slate-800">Taxable income (visual comparison)</p>
      <p className="text-xs text-slate-500">Same gross package: pension model applied in both bars. Longer bar = more taxable income in this view.</p>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-600">
            <span>Without 30% ruling on taxable wages</span>
            <span className="tabular-nums text-slate-900">{eur(without)}</span>
          </div>
          <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-slate-400/90 transition-[width]" style={{ width: `${wPct}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-600">
            <span>With your 30% ruling setting</span>
            <span className="tabular-nums text-slate-900">{eur(withT)}</span>
          </div>
          <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-brand-500 transition-[width]" style={{ width: `${tPct}%` }} />
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">Estimated monthly net uplift</span> vs same gross with no ruling structure:{" "}
        <span className="font-bold text-brand-800">{eur(result.monthlyNetDeltaWithVsWithoutRuling)}</span>
        <span className="text-slate-500"> — indicative only; payroll may differ.</span>
      </div>
    </div>
  );
}

type Props = {
  result: SalaryNetComputation;
};

function SalaryResultsInner({ result }: Props) {
  const totalTaxPaid = result.incomeTaxAnnual;
  const eff = `${(result.effectiveTaxRateOnGross * 100).toFixed(1)}%`;
  const hasFacility = result.rulingPercentApplied > 0;
  const insights = useMemo(() => buildPlanningInsights(result), [result]);
  const taxWithout = result.withoutRuling.incomeTaxAnnual;
  const taxWith = result.incomeTaxAnnual;
  const taxMax = Math.max(taxWithout, taxWith, 1);

  return (
    <div id="tool-results" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
      <InfoBox title="Indicative calculation" variant="info">
        <p className="text-sm text-slate-700">
          Figures use simplified brackets and approximate credits — not Belastingdienst payroll tables. This models{" "}
          <strong>if</strong> your employer applied the 30% ruling settings you chose; it does <strong>not</strong> confirm eligibility.
        </p>
      </InfoBox>

      <SalaryTakeHomeBreakdown result={result} />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-brand-400/60 bg-gradient-to-br from-brand-50/90 to-white p-5 shadow-sm ring-1 ring-brand-200/50 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/80">Estimated net salary</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-brand-950 break-words">{eur(result.netAnnual)}</p>
          <p className="mt-1 text-sm text-slate-600">per year (indicative)</p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl bg-white/80 p-3 ring-1 ring-brand-100">
              <dt className="text-xs font-medium text-slate-500">Net monthly</dt>
              <dd className="mt-1 font-semibold text-slate-900 break-words">{eur(result.netMonthly)}</dd>
            </div>
            <div className="rounded-xl bg-white/80 p-3 ring-1 ring-brand-100">
              <dt className="text-xs font-medium text-slate-500">Income tax (model)</dt>
              <dd className="mt-1 font-semibold text-slate-900 break-words">{eur(totalTaxPaid)}</dd>
            </div>
            <div className="rounded-xl bg-white/80 p-3 ring-1 ring-brand-100">
              <dt className="text-xs font-medium text-slate-500">Effective rate</dt>
              <dd className="mt-1 font-semibold text-slate-900">{eff} of gross</dd>
            </div>
            <div className="rounded-xl bg-white/80 p-3 ring-1 ring-brand-100">
              <dt className="text-xs font-medium text-slate-500">In-year cash (est.)</dt>
              <dd className="mt-1 font-semibold text-slate-900 break-words">{eur(result.estimatedNetReceivedInYear)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-slate-500">In-year line uses months worked ÷ 12 × indicative annual net — rough planning only.</p>
        </div>
        <StatCard label="Contract gross (model)" value={eur(result.grossAnnual)} hint={`${eur(result.grossMonthly)} / month gross.`} />
      </div>

      {insights.length > 0 ? (
        <div className="rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/90 to-white p-5 shadow-sm ring-1 ring-cyan-200/40 md:p-6">
          <h3 className="text-base font-semibold text-slate-900">Planning insight</h3>
          <p className="mt-1 text-xs text-slate-500">Rule-based pointers for conversations — not market data or legal advice.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
            {insights.map((line, idx) => (
              <li key={`insight-${idx}`}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-base font-semibold text-slate-900">Taxable income & ruling effect</h3>
        <p className="mt-1 text-sm text-slate-600">
          The 30% ruling <strong>reduces taxable income</strong>; it does not increase your gross salary. Your employer may apply less than the
          statutory maximum — use <Link href={THIRTY_PERCENT_RULING_TOOL_HREF} className="font-semibold text-brand-600 hover:underline">the eligibility tool</Link>{" "}
          to sanity-check qualification, not this page.
        </p>
        <TaxableIncomeBars result={result} />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Income tax without ruling structure</p>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-400/90"
                style={{ width: `${Math.round((taxWithout / taxMax) * 100)}%` }}
              />
            </div>
            <p className="mt-1 text-sm font-semibold text-slate-900">{eur(taxWithout)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Income tax with your ruling setting</p>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${Math.round((taxWith / taxMax) * 100)}%` }} />
            </div>
            <p className="mt-1 text-sm font-semibold text-slate-900">{eur(taxWith)}</p>
          </div>
        </div>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">With your setting</dt>
            <dd className="mt-2 text-xl font-bold text-slate-900 break-words">{eur(result.taxableIncomeAnnual)}</dd>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Without ruling structure</dt>
            <dd className="mt-2 text-xl font-bold text-slate-900 break-words">{eur(result.withoutRuling.taxableIncomeAnnual)}</dd>
          </div>
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Lower taxable (facility)</dt>
            <dd className="mt-2 text-xl font-bold text-emerald-950 break-words">{eur(result.taxableIncomeReductionFromFacilityAnnual)}</dd>
          </div>
        </dl>
      </div>

      {hasFacility ? (
        <div className="rounded-2xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/90 to-white p-5 shadow-sm ring-1 ring-indigo-200/40 md:p-6">
          <h3 className="text-base font-semibold text-indigo-950">30% ruling impact (indicative)</h3>
          <p className="mt-2 text-sm text-slate-700">
            Assumes payroll applies the facility as modelled. Actual withholding, holiday-allowance treatment, and contract wording can differ.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Annual tax difference (model)</p>
              <p className="mt-2 text-2xl font-bold text-indigo-950 break-words">{eur(result.annualIncomeTaxSavedVsWithoutFacility)}</p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Extra net per month (vs no ruling)</p>
              <p className="mt-2 text-2xl font-bold text-indigo-950 break-words">{eur(result.monthlyNetDeltaWithVsWithoutRuling)}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            <Link href={THIRTY_PERCENT_RULING_TOOL_HREF} className="font-semibold text-brand-600 hover:underline">
              Need help understanding whether the 30% ruling will apply in your contract?
            </Link>{" "}
            Use the eligibility calculator (distance, norms, employer context) — then confirm with HR or a tax advisor.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-5 text-sm text-slate-600">
          <p>
            Turn on a <strong>30% ruling setting</strong> under inputs to see how lower taxable income affects indicative net on the{" "}
            <strong>same gross</strong>.
          </p>
          <p className="mt-3">
            <Link href={THIRTY_PERCENT_RULING_TOOL_HREF} className="font-semibold text-brand-600 hover:underline">
              Check 30% ruling eligibility →
            </Link>
          </p>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700">
        <p className="font-medium text-slate-900">Want a second opinion on your salary package?</p>
        <p className="mt-1">
          A tax advisor or payroll specialist can reconcile this plan with your contract and employer setup —{" "}
          <Link href={SERVICES_HREF} className="font-semibold text-brand-600 hover:underline">
            browse editorial listings
          </Link>
          .
        </p>
        <p className="mt-3">
          <Link href={BANKS_HREF} className="font-semibold text-brand-600 hover:underline">
            Compare Dutch banks for salary deposits
          </Link>{" "}
          when you are setting up net pay.
        </p>
      </div>

      <SalaryExplainEstimate result={result} />

      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-base font-semibold text-slate-900">Tax breakdown (marginal slices)</h3>
        <p className="mt-1 text-sm text-slate-600">Slices before credits — transparency only.</p>
        <ul className="mt-4 divide-y divide-slate-100 text-sm">
          {result.bandSlices.map((b) => (
            <li key={b.label} className="flex flex-wrap items-center justify-between gap-2 py-2">
              <span className="text-slate-600">{b.label}</span>
              <span className="font-medium text-slate-900">{eur(b.taxFromBand)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 text-sm sm:grid-cols-2">
          <p className="text-slate-600">
            Raw bracket tax: <span className="font-semibold text-slate-900">{eur(result.rawIncomeTaxAnnual)}</span>
          </p>
          <p className="text-slate-600">
            Approx. general credit: <span className="font-semibold text-slate-900">{eur(result.generalTaxCreditApplied)}</span>
          </p>
          <p className="text-slate-600">
            Approx. labour credit: <span className="font-semibold text-slate-900">{eur(result.labourTaxCreditApplied)}</span>
          </p>
          <p className="text-slate-600">
            Pension (employee, model): <span className="font-semibold text-slate-900">{eur(result.pensionEmployeeAnnual)}</span>
          </p>
          <p className="text-slate-600">
            Social (model): <span className="font-semibold text-slate-900">{eur(result.socialEmployeeAnnual)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const SalaryResults = memo(SalaryResultsInner);
