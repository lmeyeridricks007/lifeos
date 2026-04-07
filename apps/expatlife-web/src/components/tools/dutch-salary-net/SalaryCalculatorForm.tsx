"use client";

import { memo, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { cn } from "@/lib/cn";
import type { MaxStatutoryFacilityPercent, RulingMode, SalaryInputBasis, SalaryNetCalculatorInputs } from "@/src/lib/tools/dutch-salary-net/types";
import { RULING_SALARY_BASE_CAP_ANNUAL } from "@/src/lib/tools/dutch-salary-net/constants";
import { eur } from "./copilotUi";

const THIRTY_PERCENT_RULING_TOOL_HREF = "/netherlands/taxes/tools/30-ruling-calculator/";

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
  inputs: SalaryNetCalculatorInputs;
  patch: (p: Partial<SalaryNetCalculatorInputs>) => void;
  compareMode: boolean;
  onCompareModeChange: (v: boolean) => void;
  grossPreviewAnnual: number;
  onCalculate: () => void;
  isCalculating: boolean;
  /** When false, hide computed gross totals — only show them after a successful Calculate for the current inputs. */
  releaseOutputPreview: boolean;
};

function SalaryCalculatorFormInner({
  inputs,
  patch,
  compareMode,
  onCompareModeChange,
  grossPreviewAnnual,
  onCalculate,
  isCalculating,
  releaseOutputPreview,
}: Props) {
  const [ageDraft, setAgeDraft] = useState(String(inputs.age));

  useEffect(() => {
    setAgeDraft(String(inputs.age));
  }, [inputs.age]);

  const employerOv =
    inputs.employerFacilityPercent == null || !Number.isFinite(inputs.employerFacilityPercent)
      ? ""
      : String(inputs.employerFacilityPercent);

  const pensionOv =
    inputs.pensionEmployeePercent == null || !Number.isFinite(inputs.pensionEmployeePercent)
      ? ""
      : String(inputs.pensionEmployeePercent);

  const employerFacilityCapPts =
    inputs.rulingMode === "max" && inputs.maxStatutoryFacilityPercent === 27 ? 27 : 30;

  return (
    <div id="tool-inputs" className="scroll-mt-28 space-y-5 md:scroll-mt-32">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-800">
          <input
            type="checkbox"
            checked={compareMode}
            onChange={(e) => onCompareModeChange(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          Compare up to 4 salary scenarios
        </label>
        <p className="text-xs text-slate-500">Turn on to duplicate offers, tweak ruling or gross, and view a side-by-side table.</p>
      </div>

      <div className="grid gap-5 lg:gap-6">
        <FormSection title="Your gross package" description="Contract gross drives everything else — annual or monthly, plus optional bonus and holiday allowance.">
          <div>
            <p className="text-sm font-medium text-slate-800">Gross input</p>
            <SegmentedControl
              className="mt-2"
              name="salary-basis"
              options={[
                { value: "annual", label: "Annual gross" },
                { value: "monthly", label: "Monthly gross" },
              ]}
              value={inputs.salaryInputBasis}
              onChange={(v) => patch({ salaryInputBasis: v as SalaryInputBasis })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800" htmlFor="salary-amt">
              {inputs.salaryInputBasis === "annual" ? "Annual gross salary" : "Monthly gross salary"}
            </label>
            <Input
              id="salary-amt"
              inputMode="decimal"
              className="mt-1.5 border-slate-200"
              value={Number.isFinite(inputs.salaryAmount) ? String(inputs.salaryAmount) : ""}
              onChange={(e) => patch({ salaryAmount: Number(e.target.value.replace(",", ".")) || 0 })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800" htmlFor="bonus">
              Bonus / variable (annual gross, optional)
            </label>
            <Input
              id="bonus"
              inputMode="decimal"
              className="mt-1.5 border-slate-200"
              value={Number.isFinite(inputs.bonusAnnual) ? String(inputs.bonusAnnual) : ""}
              onChange={(e) => patch({ bonusAnnual: Number(e.target.value.replace(",", ".")) || 0 })}
            />
          </div>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={inputs.includeHolidayAllowance}
              onChange={(e) => patch({ includeHolidayAllowance: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Include 8% holiday allowance (vakantiegeld) on salary + bonus
          </label>
        </FormSection>

        <FormSection
          title="Profile & 30% ruling (taxable income)"
          description="Age and tax year affect credits in the model. The 30% ruling settings below only change taxable income if you turn them on — they do not confirm eligibility. Use the dedicated eligibility tool for norms, distance, and employer context."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="age">
                Age
              </label>
              <Input
                id="age"
                inputMode="numeric"
                className="mt-1.5 border-slate-200"
                value={ageDraft}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "");
                  setAgeDraft(raw);
                  if (raw === "") return;
                  const n = parseInt(raw, 10);
                  if (Number.isNaN(n)) return;
                  if (n >= 16 && n <= 85) {
                    patch({ age: n });
                  }
                }}
                onBlur={() => {
                  const raw = ageDraft.replace(/\D/g, "");
                  if (raw === "") {
                    const fb = Math.max(16, Math.min(85, Number.isFinite(inputs.age) ? inputs.age : 32));
                    setAgeDraft(String(fb));
                    patch({ age: fb });
                    return;
                  }
                  const n = parseInt(raw, 10);
                  const clamped = Math.max(16, Math.min(85, Number.isNaN(n) ? inputs.age : n));
                  setAgeDraft(String(clamped));
                  patch({ age: clamped });
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="tax-year">
                Tax year
              </label>
              <Input id="tax-year" className="mt-1.5 border-slate-200 bg-slate-50" readOnly value="2026" />
              <p className="mt-1 text-xs text-slate-500">Model tuned for 2026 planning parameters.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-800">30% ruling setting (taxable wages only)</p>
            <p className="mt-1 text-xs text-slate-500">
              The ruling <strong>reduces taxable income</strong>; it does not increase gross pay. Your employer may apply less than the statutory
              maximum. Untaxed share uses a planning salary cap of {eur(RULING_SALARY_BASE_CAP_ANNUAL)}. This models payroll <strong>if</strong> the
              facility were applied — not whether you qualify.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                [
                  ["none", "No 30% ruling"],
                  ["max", "Statutory maximum"],
                  ["custom", "Employer-specific %"],
                ] as const
              ).map(([mode, label]) => (
                <Button
                  key={mode}
                  type="button"
                  variant={inputs.rulingMode === mode ? "primary" : "secondary"}
                  className="min-h-10 px-3 text-xs sm:text-sm"
                  onClick={() => patch({ rulingMode: mode as RulingMode })}
                  aria-pressed={inputs.rulingMode === mode}
                >
                  {label}
                </Button>
              ))}
            </div>
            {inputs.rulingMode === "max" ? (
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-800">Statutory maximum %</p>
                <p className="mt-1 text-xs text-slate-500">30% through 2026; 27% is a legislative preview used elsewhere for comparison — confirm on official sources.</p>
                <SegmentedControl
                  className="mt-2"
                  name="max-facility-pct"
                  options={[
                    { value: "30", label: "30% (through 2026)" },
                    { value: "27", label: "27% (2027 preview)" },
                  ]}
                  value={String(inputs.maxStatutoryFacilityPercent)}
                  onChange={(v) => patch({ maxStatutoryFacilityPercent: Number(v) as MaxStatutoryFacilityPercent })}
                />
              </div>
            ) : null}
            <p className="mt-4 text-sm text-slate-600">
              <Link
                href={THIRTY_PERCENT_RULING_TOOL_HREF}
                className="font-semibold text-brand-600 hover:text-brand-700 hover:underline"
              >
                Check 30% ruling eligibility
              </Link>{" "}
              — separate tool for distance, salary norms, and candidate vs employer context. This calculator stays gross-to-net.
            </p>
          </div>

          {inputs.rulingMode === "custom" ? (
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="custom-pct">
                Employer-applied % on capped base (0–30)
              </label>
              <Input
                id="custom-pct"
                inputMode="decimal"
                className="mt-1.5 max-w-[200px] border-slate-200"
                value={String(inputs.customRulingPercent)}
                onChange={(e) =>
                  patch({ customRulingPercent: clampPctToCap(Number(e.target.value.replace(",", ".")), 30) })
                }
              />
            </div>
          ) : null}
        </FormSection>

        <FormSection title="Employment context" description="How pay is structured in this scenario.">
          <div>
            <p className="text-sm font-medium text-slate-800">Contract</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button
                type="button"
                variant={inputs.employmentType === "permanent" ? "primary" : "secondary"}
                className="min-h-10"
                onClick={() => patch({ employmentType: "permanent" })}
              >
                Permanent
              </Button>
              <Button
                type="button"
                variant={inputs.employmentType === "temporary" ? "primary" : "secondary"}
                className="min-h-10"
                onClick={() => patch({ employmentType: "temporary" })}
              >
                Temporary
              </Button>
            </div>
            <p className="mt-1 text-xs text-slate-500">Does not change the maths yet — stored for your export notes.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-800" htmlFor="months">
              Months paid in this calendar year (1–12)
            </label>
            <Input
              id="months"
              inputMode="numeric"
              className="mt-1.5 max-w-[120px] border-slate-200"
              value={String(inputs.monthsWorkedInYear)}
              onChange={(e) =>
                patch({ monthsWorkedInYear: Math.max(1, Math.min(12, Math.round(Number(e.target.value) || 1))) })
              }
            />
            <p className="mt-1 text-xs text-slate-500">Used for an optional in-year cash estimate; tax bands still use full contract gross.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-800" htmlFor="pension">
              Employee pension contribution (% of gross package, optional)
            </label>
            <Input
              id="pension"
              inputMode="decimal"
              placeholder="e.g. 5"
              className="mt-1.5 max-w-[200px] border-slate-200"
              value={pensionOv}
              onChange={(e) => {
                const v = e.target.value.trim();
                if (!v) patch({ pensionEmployeePercent: null });
                else patch({ pensionEmployeePercent: Math.min(50, Math.max(0, Number(v.replace(",", ".")) || 0)) });
              }}
            />
          </div>

          <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={inputs.includeSocialContributions}
              onChange={(e) => patch({ includeSocialContributions: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Include approximate employee social / Zvw-style levy (very simplified)
          </label>
        </FormSection>

        <CollapsiblePanel
          title="Advanced assumptions"
          defaultOpen={false}
          titleClassName="text-base font-semibold text-slate-900"
          triggerClassName="cursor-pointer rounded-t-xl bg-slate-50 text-slate-700 hover:bg-slate-100"
          className="border border-slate-200/90 bg-white shadow-sm"
        >
          <div className="space-y-4 p-4 pt-0 md:p-5 md:pt-0">
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="employer-fac">
                Employer-applied ruling % on capped base (optional)
              </label>
              <p className="mt-1 text-xs text-slate-500">
                When set, overrides statutory maximum or employer-specific % above, capped at {employerFacilityCapPts}% — mirrors payroll that applies
                less than the max.
              </p>
              <Input
                id="employer-fac"
                inputMode="decimal"
                placeholder="Leave blank to use profile setting"
                className="mt-1.5 max-w-[240px] border-slate-200"
                value={employerOv}
                onChange={(e) => {
                  const v = e.target.value.trim();
                  if (!v) patch({ employerFacilityPercent: null });
                  else
                    patch({
                      employerFacilityPercent: clampPctToCap(Number(v.replace(",", ".")), employerFacilityCapPts),
                    });
                }}
              />
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={inputs.includeGeneralTaxCredit}
                onChange={(e) => patch({ includeGeneralTaxCredit: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              Include approximate general tax credit (algemene heffingskorting)
            </label>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={inputs.includeLabourTaxCredit}
                onChange={(e) => patch({ includeLabourTaxCredit: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              Include approximate labour tax credit (arbeidskorting)
            </label>

            <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/80 p-3">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" disabled checked={false} className="h-4 w-4 rounded border-slate-300" />
                <span>Partner effect on credits (household)</span>
                <ComingSoonBadge className="ml-1" />
              </label>
              <p className="mt-2 text-xs text-slate-500">Placeholder — partner and household modelling is not included in this release.</p>
            </div>
          </div>
        </CollapsiblePanel>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        {releaseOutputPreview ? (
          <p className="text-xs text-slate-500">
            Contract gross (incl. holiday toggle): <strong className="text-slate-800">{eur(grossPreviewAnnual)}</strong> / year ·{" "}
            <strong className="text-slate-800">{eur(grossPreviewAnnual / 12)}</strong> / month
          </p>
        ) : (
          <p className="text-xs text-slate-500">Click <strong>Calculate</strong> to run the model — totals appear here after each run.</p>
        )}
        <Button
          type="button"
          variant="primary"
          className="min-h-11 w-full shrink-0 sm:w-auto sm:min-w-[12rem]"
          disabled={isCalculating}
          onClick={onCalculate}
        >
          {isCalculating ? "Calculating…" : "Calculate"}
        </Button>
      </div>
    </div>
  );
}

function clampPctToCap(n: number, cap: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(cap, Math.max(0, n));
}

export const SalaryCalculatorForm = memo(SalaryCalculatorFormInner);
