"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import type { ThirtyPercentCalculatorInputs, TriStateAnswer } from "@/src/lib/tools/thirty-percent-ruling/types";
import { THIRTY_PCT_RULES_2026 } from "@/src/lib/tools/thirty-percent-ruling/calculateThirtyPercentRuling";
import { eur } from "./copilotUi";

function TriStateRow({
  legend,
  value,
  onChange,
}: {
  legend: string;
  value: TriStateAnswer;
  onChange: (v: TriStateAnswer) => void;
}) {
  const opts: TriStateAnswer[] = ["yes", "no", "unsure"];
  const labels: Record<TriStateAnswer, string> = { yes: "Yes", no: "No", unsure: "Not sure" };
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-slate-800">{legend}</legend>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={legend}>
        {opts.map((v) => (
          <Button
            key={v}
            type="button"
            variant={value === v ? "primary" : "secondary"}
            className="min-h-10 flex-1 px-3 text-xs sm:flex-none sm:text-sm"
            onClick={() => onChange(v)}
            aria-pressed={value === v}
          >
            {labels[v]}
          </Button>
        ))}
      </div>
    </fieldset>
  );
}

function FormSection({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-slate-200/50 md:p-6",
        className
      )}
    >
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

type Props = {
  inputs: ThirtyPercentCalculatorInputs;
  compareMode: boolean;
  showAdvanced: boolean;
  onToggleAdvanced: () => void;
  onCompareModeChange: (v: boolean) => void;
  editingScenarioLabel?: string;
  patch: (p: Partial<ThirtyPercentCalculatorInputs>) => void;
  grossPreview: number;
  onCalculate: () => void;
  isCalculating: boolean;
};

export function ThirtyRulingEligibilityForm({
  inputs,
  compareMode,
  showAdvanced,
  onToggleAdvanced,
  onCompareModeChange,
  editingScenarioLabel,
  patch,
  grossPreview,
  onCalculate,
  isCalculating,
}: Props) {
  const employerPctRaw = inputs.customAllowancePercent ?? inputs.employerAllowancePercent;
  const employerPctDisplay = employerPctRaw == null ? "" : String(employerPctRaw);

  const setIntent = (p: Partial<ThirtyPercentCalculatorInputs>) => {
    if (p.employerApplyIntent != null) {
      patch({ ...p, employerWillApply: p.employerApplyIntent === "yes" });
      return;
    }
    patch(p);
  };

  return (
    <div id="tool-inputs" className="scroll-mt-24 space-y-5">
      <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-sky-50/25 to-white p-5 shadow-expatos-md ring-1 ring-slate-200/60 md:p-7">
        <p className="text-sm text-slate-600 md:text-base">
          Answer a few planning questions. We compare your package to <strong>2026</strong> norms (
          {eur(THIRTY_PCT_RULES_2026.thresholdStandardAnnual)} standard / {eur(THIRTY_PCT_RULES_2026.thresholdUnder30MastersAnnual)}{" "}
          under-30 master’s), then estimate the tax-free allowance. Nothing here replaces the Belastingdienst or your employer.
        </p>
        {editingScenarioLabel ? (
          <p className="mt-2 text-sm font-medium text-brand-800">
            Editing scenario: <span className="text-slate-900">{editingScenarioLabel}</span>
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 lg:gap-6">
        <FormSection
          title="A. Income & package"
          description="Gross figures for norm comparison. Holiday allowance and bonus treatment affect real payroll — flag them honestly."
        >
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              className="min-h-10 text-xs sm:text-sm"
              variant={inputs.salaryInputType === "annual" ? "primary" : "secondary"}
              onClick={() => patch({ salaryInputType: "annual" })}
            >
              Annual gross
            </Button>
            <Button
              type="button"
              className="min-h-10 text-xs sm:text-sm"
              variant={inputs.salaryInputType === "monthly" ? "primary" : "secondary"}
              onClick={() => patch({ salaryInputType: "monthly" })}
            >
              Monthly gross
            </Button>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="gross-salary">
              {inputs.salaryInputType === "annual" ? "Gross salary (year)" : "Gross salary (month)"}
            </label>
            <Input
              id="gross-salary"
              inputMode="decimal"
              value={Number.isFinite(inputs.grossSalary) ? String(inputs.grossSalary) : ""}
              onChange={(e) => patch({ grossSalary: parseFloat(e.target.value.replace(",", ".")) || 0 })}
              className="mt-1 max-w-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="bonus-field">
              Annual bonus / variable pay (gross, optional)
            </label>
            <Input
              id="bonus-field"
              inputMode="decimal"
              placeholder="0"
              value={inputs.bonusAnnual != null ? String(inputs.bonusAnnual) : ""}
              onChange={(e) => {
                const v = e.target.value;
                patch({ bonusAnnual: v === "" ? null : parseFloat(v.replace(",", ".")) || 0 });
              }}
              className="mt-1 max-w-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="employer-pct-main">
              Employer allowance % (optional — blank = statutory max for the year)
            </label>
            <Input
              id="employer-pct-main"
              inputMode="decimal"
              placeholder="e.g. 27 (blank = max)"
              value={employerPctDisplay === "" ? "" : String(employerPctDisplay)}
              onChange={(e) => {
                const v = e.target.value;
                patch({
                  customAllowancePercent: v === "" ? null : parseFloat(v.replace(",", ".")) || null,
                  employerAllowancePercent: v === "" ? null : parseFloat(v.replace(",", ".")) || null,
                });
              }}
              className="mt-1 max-w-xs"
            />
            <p className="mt-1 text-xs text-slate-500">Many employers use the maximum; some agreements use less.</p>
          </div>
          <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300"
              checked={inputs.salaryIncludesHolidayAllowance}
              onChange={(e) => patch({ salaryIncludesHolidayAllowance: e.target.checked })}
            />
            <span>Contract figure already includes holiday allowance (8%) — norms can treat this differently on payroll.</span>
          </label>
        </FormSection>

        <FormSection
          title="B. Profile"
          description="Used for which salary norm we compare against and optional 2027 percentage preview."
        >
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-slate-800">Calculation year focus</legend>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant={inputs.calculationYear === 2026 ? "primary" : "secondary"}
                className="min-h-10 text-sm"
                onClick={() => patch({ calculationYear: 2026 })}
              >
                2026 (30% rules)
              </Button>
              <Button
                type="button"
                variant={inputs.calculationYear >= 2027 ? "primary" : "secondary"}
                className="min-h-10 text-sm"
                onClick={() => patch({ calculationYear: 2027 })}
              >
                2027 preview (27%)
              </Button>
            </div>
            <p className="text-xs text-slate-500">
              2027 uses the legislative percentage preview in this model. Confirm final rules on official sources.
            </p>
          </fieldset>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="age-field">
              Age
            </label>
            <Input
              id="age-field"
              type="number"
              min={16}
              max={100}
              value={inputs.age}
              onChange={(e) => patch({ age: parseInt(e.target.value, 10) || 0 })}
              className="mt-1 max-w-[10rem]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="employee-category">
              Employee category
            </label>
            <select
              id="employee-category"
              className="mt-1 flex h-11 w-full max-w-md rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              value={inputs.employeeCategory}
              onChange={(e) =>
                patch({ employeeCategory: e.target.value as ThirtyPercentCalculatorInputs["employeeCategory"] })
              }
            >
              <option value="regular">Regular employee</option>
              <option value="researcher">Scientific researcher</option>
              <option value="doctor_training">Doctor in specialist training</option>
              <option value="unsure">Not sure</option>
            </select>
            <p className="mt-1 text-xs text-slate-500">
              Researcher / specialist-training routes follow different norm rules — confirm your exact category with payroll or the
              Belastingdienst.
            </p>
          </div>
          <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300"
              checked={inputs.qualifyingMasters}
              onChange={(e) => patch({ qualifyingMasters: e.target.checked })}
            />
            <span>I have a qualifying master’s degree and I am under 30 at the relevant time (reduced norm if both apply).</span>
          </label>
        </FormSection>

        <FormSection
          title="C. Eligibility context"
          description="Self-reported signals only — evidence and official review decide the real outcome."
        >
          <TriStateRow
            legend="My employer will apply jointly / maintain the ruling"
            value={inputs.employerApplyIntent}
            onChange={(v) => setIntent({ employerApplyIntent: v })}
          />
          <TriStateRow
            legend="I was recruited from abroad for this role"
            value={inputs.recruitedFromAbroad}
            onChange={(v) => patch({ recruitedFromAbroad: v })}
          />
          <TriStateRow
            legend="I lived more than 150 km from the Dutch border for more than 16 of the 24 months before starting (as I understand it)"
            value={inputs.distanceRule150km}
            onChange={(v) => patch({ distanceRule150km: v })}
          />
          <TriStateRow
            legend="I previously used the 30% ruling"
            value={inputs.priorThirtyPercentRuling}
            onChange={(v) => patch({ priorThirtyPercentRuling: v })}
          />
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-slate-800">I am changing employer in the Netherlands</legend>
            <div className="flex flex-wrap gap-2">
              {(["no", "yes"] as const).map((v) => (
                <Button
                  key={v}
                  type="button"
                  variant={inputs.changingEmployerInNL === v ? "primary" : "secondary"}
                  className="min-h-10 px-4 text-sm"
                  onClick={() => patch({ changingEmployerInNL: v })}
                >
                  {v === "yes" ? "Yes" : "No"}
                </Button>
              ))}
            </div>
          </fieldset>
        </FormSection>

        <FormSection title="D. Timing" description="Proration when the ruling does not cover the full calendar year.">
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="months-applicable">
              Months applicable this year
            </label>
            <Input
              id="months-applicable"
              type="number"
              min={1}
              max={12}
              value={inputs.monthsApplicable}
              onChange={(e) => patch({ monthsApplicable: parseInt(e.target.value, 10) || 12 })}
              className="mt-1 max-w-[10rem]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600" htmlFor="start-month">
              Start month (optional, 1–12)
            </label>
            <select
              id="start-month"
              className="mt-1 flex h-11 w-full max-w-xs rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm"
              value={inputs.startMonth ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                patch({ startMonth: v === "" ? null : parseInt(v, 10) });
              }}
            >
              <option value="">No selection</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-slate-500">For your notes only — adjust “months applicable” to match your situation.</p>
          </div>
        </FormSection>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300/90 bg-slate-50/50 p-4 md:p-5">
        <button
          type="button"
          className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          onClick={onToggleAdvanced}
          aria-expanded={showAdvanced}
        >
          {showAdvanced ? "Hide advanced assumptions" : "Advanced assumptions"}
        </button>
        {showAdvanced ? (
          <div className="mt-4 space-y-4 border-t border-slate-200 pt-4">
            <p className="text-sm text-slate-600">
              Optional: show <strong>2027 percentage preview alongside 2026</strong> when your primary year is 2026, compare multiple
              gross scenarios, or tweak employer % (also available above).
            </p>
            {inputs.calculationYear < 2027 ? (
              <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                  checked={inputs.includeFutureYearPreview}
                  onChange={(e) => patch({ includeFutureYearPreview: e.target.checked })}
                />
                <span>Include 2027 percentage preview (27%) next to 2026.</span>
              </label>
            ) : null}
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-800">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
                checked={compareMode}
                onChange={(e) => onCompareModeChange(e.target.checked)}
              />
              Compare multiple salary scenarios (up to 4) — advanced planning
            </label>
            <div>
              <label className="block text-xs font-medium text-slate-600" htmlFor="employer-pct-adv">
                Employer allowance % (duplicate field)
              </label>
              <Input
                id="employer-pct-adv"
                inputMode="decimal"
                placeholder="blank = statutory max"
                value={employerPctDisplay === "" ? "" : String(employerPctDisplay)}
                onChange={(e) => {
                  const v = e.target.value;
                  patch({
                    customAllowancePercent: v === "" ? null : parseFloat(v.replace(",", ".")) || null,
                    employerAllowancePercent: v === "" ? null : parseFloat(v.replace(",", ".")) || null,
                  });
                }}
                className="mt-1 max-w-xs"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Combined gross used for norms: <strong>{eur(grossPreview)}</strong>
        </p>
        <Button
          type="button"
          variant="primary"
          className="min-h-11 w-full shrink-0 sm:w-auto sm:min-w-[12rem]"
          disabled={isCalculating}
          onClick={onCalculate}
        >
          {isCalculating ? "Checking…" : "Check eligibility"}
        </Button>
      </div>
    </div>
  );
}
