"use client";

import { CircleHelp } from "lucide-react";
import { memo, useEffect, useId, useRef, useState } from "react";
import { SegmentedControl } from "@/components/ui/segmented-control";
import type { SalaryNetComputation } from "@/src/lib/tools/dutch-salary-net/types";
import { eur } from "./copilotUi";
import { cn } from "@/lib/cn";

type Period = "annual" | "monthly";

type RowKind = "section" | "income" | "deduction" | "taxOffset" | "subtotal" | "total";

/** Short explanatory copy for ? tooltips — same model in both columns where applicable. */
const TAKE_HOME_LINE_INFO = {
  contractGross:
    "Total gross package in this calculator: your salary (annual or monthly basis), plus any bonus you entered, plus optional 8% holiday allowance. Identical in both columns so you compare ruling vs no ruling on the same deal.",
  bonus:
    "Extra gross you typed in as annual bonus. It is included in contract gross above; monthly view spreads it for readability, not a separate payslip line.",
  holiday:
    "Statutory holiday pay (vakantiegeld), modelled at 8% of salary + bonus when the toggle is on. Real contracts may pay it differently or gross it up separately.",
  facility:
    "Simplified 30% tax facility: part of gross is treated as untaxed here, up to a statutory cap. This lowers taxable wages — it does not add cash on top of gross. The right column assumes no facility, so this line is zero there.",
  taxableBeforePension:
    "After the facility (if any), this is what remains before employee pension is subtracted. It is an intermediate step toward taxable income for wage tax.",
  pension:
    "Employee pension premium as a percentage of gross that you set in the inputs. Real schemes have ceilings, franchise, and employer parts — this is a simple % of gross for planning.",
  taxableIncome:
    "Income tax brackets apply to this amount: taxable after facility minus employee pension in this model. Compare this line across columns to see the ruling effect on the tax base.",
  zvw:
    "Employee share of the Dutch Zorgverzekeringswet (health insurance) contribution via payroll, modelled with a fixed rate up to a ceiling. Your payslip label may differ; ANW/WLZ are not broken out here.",
  wageTaxRaw:
    "Income tax from simplified progressive bands before tax credits. Not the same as loonbelasting tables your employer uses, but useful for direction.",
  generalCredit:
    "Approximate algemene heffingskorting — a credit that reduces tax due for many residents. You can turn it off in inputs to stress-test.",
  labourCredit:
    "Approximate arbeidskorting — extra credit on work-related income. Also toggleable in inputs.",
  incomeTax:
    "Wage tax after credits in this model (raw tax minus general and labour credits). Together with pension and Zvw, this is what reduces gross to net here.",
  totalDeductions:
    "Sum of employee pension, Zvw-style social, and income tax after credits — matches how we reach net in this calculator.",
  takeHome:
    "Estimated cash left after the lines above. Real bank deposits can differ (extra deductions, benefits, net allowances, rounding, or different withholding tables).",
} as const;

function InfoTip({ text, align = "start" }: { text: string; align?: "start" | "end" }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDoc);
    };
  }, [open]);

  return (
    <div className={cn("relative inline-flex shrink-0", align === "end" && "justify-end")} ref={wrapRef}>
      <button
        type="button"
        className="-m-0.5 rounded-full p-0.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label="Explain this line"
        onClick={() => setOpen((o) => !o)}
      >
        <CircleHelp className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </button>
      {open ? (
        <div
          id={id}
          role="tooltip"
          className={cn(
            "absolute top-full z-50 mt-1 w-[min(18rem,calc(100vw-2.5rem))] rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-normal font-sans leading-relaxed text-slate-700 shadow-lg ring-1 ring-slate-900/5",
            align === "end" ? "right-0" : "left-0"
          )}
        >
          {text}
        </div>
      ) : null}
    </div>
  );
}

function MoneyRow({
  label,
  value,
  kind,
  muted,
  info,
  tooltipAlign = "start",
}: {
  label: string;
  value: string;
  kind: RowKind;
  muted?: boolean;
  info?: string;
  tooltipAlign?: "start" | "end";
}) {
  const isDeduction = kind === "deduction";
  const isOffset = kind === "taxOffset";
  const isTotal = kind === "total";
  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-2 text-sm",
        kind === "section" && "border-b border-slate-200 pb-1 pt-0 text-xs font-semibold uppercase tracking-wide text-slate-500 first:pt-0",
        isTotal && "mt-1 rounded-xl bg-brand-50/90 px-3 py-3 text-base ring-1 ring-brand-200/60",
        muted && "text-slate-500"
      )}
    >
      <span className={cn("flex min-w-0 flex-1 items-start gap-1", isTotal && "font-semibold text-brand-950")}>
        <span className="min-w-0">{label}</span>
        {info ? <InfoTip text={info} align={tooltipAlign} /> : null}
      </span>
      {value !== "" ? (
        <span
          className={cn(
            "shrink-0 tabular-nums font-medium text-slate-900",
            isDeduction && "text-rose-800",
            isOffset && "text-emerald-800",
            isTotal && "text-lg font-bold text-brand-950"
          )}
        >
          {value}
        </span>
      ) : null}
    </div>
  );
}

function TakeHomeHero({
  period,
  netAnnual,
  netMonthly,
  isPrimaryColumn,
  tooltipAlign,
}: {
  period: Period;
  netAnnual: number;
  netMonthly: number;
  isPrimaryColumn: boolean;
  tooltipAlign: "start" | "end";
}) {
  const monthlyMode = period === "monthly";

  return (
    <div
      className={cn(
        "mt-2 rounded-2xl border px-4 py-4 md:px-5 md:py-5",
        monthlyMode
          ? "border-brand-400/70 bg-gradient-to-br from-brand-100/95 via-brand-50/90 to-white shadow-md ring-2 ring-brand-300/40"
          : "bg-brand-50/90 ring-1 ring-brand-200/60",
        isPrimaryColumn && monthlyMode && "shadow-lg"
      )}
    >
      {monthlyMode ? (
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-1.5 sm:justify-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900/90">Typical bank deposit</p>
            <InfoTip text={TAKE_HOME_LINE_INFO.takeHome} align={tooltipAlign} />
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-950 tabular-nums md:text-4xl">{eur(netMonthly)}</p>
          <p className="mt-1 text-sm font-medium text-brand-950/90">per month (after modelled deductions)</p>
          <p className="mt-3 border-t border-brand-200/80 pt-3 text-xs text-slate-600">
            ≈ <span className="font-semibold text-slate-800 tabular-nums">{eur(netAnnual)}</span> per year · same gross; indicative only.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap items-center gap-1.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/85">Estimated take-home (annual)</p>
            <InfoTip text={TAKE_HOME_LINE_INFO.takeHome} align={tooltipAlign} />
          </div>
          <p className="mt-2 text-2xl font-bold tracking-tight text-brand-950 tabular-nums md:text-3xl">{eur(netAnnual)}</p>
          <p className="mt-3 text-sm text-slate-600">
            Typical bank deposit:{" "}
            <span className="text-base font-bold tabular-nums text-brand-900">{eur(netMonthly)}</span>
            <span className="font-normal text-slate-500"> / month</span>
            <span className="text-slate-500"> — indicative only.</span>
          </p>
        </div>
      )}
    </div>
  );
}

function ColumnBreakdown({
  title,
  subtitle,
  result,
  variant,
  wo,
  period,
}: {
  title: string;
  subtitle?: string;
  result: SalaryNetComputation;
  variant: "withRuling" | "withoutRuling";
  wo: SalaryNetComputation["withoutRuling"];
  period: Period;
}) {
  const isPrimary = variant === "withRuling";
  const scale = period === "annual" ? 1 : 1 / 12;

  const gross = result.grossAnnual * scale;
  const grossOther = period === "annual" ? result.grossMonthly : result.grossAnnual;

  const rulingUntaxed = (isPrimary ? result.rulingUntaxedAnnual : wo.rulingUntaxedAnnual) * scale;
  const taxable = (isPrimary ? result.taxableIncomeAnnual : wo.taxableIncomeAnnual) * scale;
  const pension = (isPrimary ? result.pensionEmployeeAnnual : wo.pensionEmployeeAnnual) * scale;
  const social = (isPrimary ? result.socialEmployeeAnnual : wo.socialEmployeeAnnual) * scale;
  const rawTax = (isPrimary ? result.rawIncomeTaxAnnual : wo.rawIncomeTaxAnnual) * scale;
  const gen = (isPrimary ? result.generalTaxCreditApplied : wo.generalTaxCreditApplied) * scale;
  const lab = (isPrimary ? result.labourTaxCreditApplied : wo.labourTaxCreditApplied) * scale;
  const incomeTax = (isPrimary ? result.incomeTaxAnnual : wo.incomeTaxAnnual) * scale;
  const netA = isPrimary ? result.netAnnual : wo.netAnnual;
  const netM = isPrimary ? result.netMonthly : wo.netMonthly;
  const totalDed = (isPrimary ? result.totalEmployeeDeductionsAnnual : wo.totalEmployeeDeductionsAnnual) * scale;
  const taxableAfterFacilityBeforePension = taxable + pension;

  const bonus = result.bonusAnnual * scale;
  const holiday = result.holidayAllowanceAnnual * scale;
  const showComponents = result.bonusAnnual > 0 || result.holidayAllowanceAnnual > 0;

  const line = (n: number) => eur(n);

  const grossLabel = period === "annual" ? "Contract gross (annual)" : "Contract gross (per month)";
  const bonusLabel = period === "annual" ? "Included: bonus (annual)" : "Included: bonus (per month)";
  const holidayLabel = period === "annual" ? "Included: holiday allowance 8% (annual)" : "Included: holiday allowance 8% (per month)";
  const grossCaption =
    period === "annual" ? (
      <p className="pb-2 text-xs text-slate-500">
        {line(grossOther)} per month — modelled package total.
      </p>
    ) : (
      <p className="pb-2 text-xs text-slate-500">{line(grossOther)} per year — modelled package total.</p>
    );

  const tip = isPrimary ? "start" : "end";

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-4 shadow-sm md:p-5",
        isPrimary ? "border-brand-300/80 bg-gradient-to-b from-brand-50/80 to-white ring-1 ring-brand-200/40" : "border-slate-200/90 bg-white"
      )}
    >
      <div className="border-b border-slate-200/80 pb-3">
        <h4 className={cn("text-sm font-semibold text-slate-900", isPrimary && "text-brand-950")}>{title}</h4>
        {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
      </div>

      <div className="divide-y divide-slate-100">
        <MoneyRow kind="section" label="Income & package" value="" />
        <MoneyRow kind="income" label={grossLabel} value={line(gross)} info={TAKE_HOME_LINE_INFO.contractGross} tooltipAlign={tip} />
        {grossCaption}
        {showComponents ? (
          <>
            {result.bonusAnnual > 0 ? (
              <MoneyRow kind="income" muted label={bonusLabel} value={line(bonus)} info={TAKE_HOME_LINE_INFO.bonus} tooltipAlign={tip} />
            ) : null}
            {result.holidayAllowanceAnnual > 0 ? (
              <MoneyRow kind="income" muted label={holidayLabel} value={line(holiday)} info={TAKE_HOME_LINE_INFO.holiday} tooltipAlign={tip} />
            ) : null}
          </>
        ) : null}
        <MoneyRow
          kind="income"
          label="30% facility — untaxed in this model (reduces taxable base)"
          value={rulingUntaxed > 0 ? `− ${line(rulingUntaxed)}` : `− ${line(0)}`}
          muted={(isPrimary ? result.rulingUntaxedAnnual : wo.rulingUntaxedAnnual) <= 0}
          info={TAKE_HOME_LINE_INFO.facility}
          tooltipAlign={tip}
        />
        <MoneyRow
          kind="subtotal"
          label="Taxable after facility (before pension)"
          value={line(taxableAfterFacilityBeforePension)}
          info={TAKE_HOME_LINE_INFO.taxableBeforePension}
          tooltipAlign={tip}
        />
        <MoneyRow
          kind="deduction"
          label="Pension contribution (employee % of gross)"
          value={`− ${line(pension)}`}
          info={TAKE_HOME_LINE_INFO.pension}
          tooltipAlign={tip}
        />
        <MoneyRow
          kind="subtotal"
          label="Taxable income (for income tax)"
          value={line(taxable)}
          info={TAKE_HOME_LINE_INFO.taxableIncome}
          tooltipAlign={tip}
        />

        <MoneyRow kind="section" label="Social & wage tax" value="" />
        <MoneyRow
          kind="deduction"
          label="Social insurance — Zvw employee (indicative)"
          value={`− ${line(social)}`}
          info={TAKE_HOME_LINE_INFO.zvw}
          tooltipAlign={tip}
        />
        <MoneyRow
          kind="deduction"
          label="Wage tax (bracket model, before credits)"
          value={`− ${line(rawTax)}`}
          info={TAKE_HOME_LINE_INFO.wageTaxRaw}
          tooltipAlign={tip}
        />
        {(gen > 0 || lab > 0) && (
          <>
            <MoneyRow
              kind="taxOffset"
              label="General tax credit (approx.)"
              value={`+ ${line(gen)}`}
              info={TAKE_HOME_LINE_INFO.generalCredit}
              tooltipAlign={tip}
            />
            <MoneyRow
              kind="taxOffset"
              label="Labour tax credit (approx.)"
              value={`+ ${line(lab)}`}
              info={TAKE_HOME_LINE_INFO.labourCredit}
              tooltipAlign={tip}
            />
          </>
        )}
        <MoneyRow
          kind="deduction"
          label="Income tax (after credits)"
          value={`− ${line(incomeTax)}`}
          info={TAKE_HOME_LINE_INFO.incomeTax}
          tooltipAlign={tip}
        />

        <MoneyRow kind="section" label="Check" value="" />
        <MoneyRow
          kind="income"
          muted
          label="Total employee deductions (pension + social + income tax)"
          value={line(totalDed)}
          info={TAKE_HOME_LINE_INFO.totalDeductions}
          tooltipAlign={tip}
        />

        <div className="pt-2">
          <TakeHomeHero period={period} netAnnual={netA} netMonthly={netM} isPrimaryColumn={isPrimary} tooltipAlign={tip} />
        </div>
      </div>
    </div>
  );
}

function SalaryTakeHomeBreakdownInner({ result }: { result: SalaryNetComputation }) {
  const [period, setPeriod] = useState<Period>("monthly");
  const wo = result.withoutRuling;
  const hasFacility = result.rulingPercentApplied > 0;
  const deltaMonthly = result.monthlyNetDeltaWithVsWithoutRuling;
  const deltaAnnual = deltaMonthly * 12;
  const proration = result.prorationFactor < 0.999;

  return (
    <section id="take-home-breakdown" className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md ring-1 ring-slate-100 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="max-w-3xl flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">Take-home & bank deposit</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
            Full cash-flow view: with vs without the 30% ruling structure
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Same gross package in both columns. This is the line-by-line path from contract gross to what is left after the deductions this model
            includes — ending in <strong className="text-slate-800">estimated net pay</strong> (what would typically hit your account). It is not a
            full payslip: many employers add other items (travel, benefits, extra insurances, wage-tax table rounding).
          </p>
        </div>
        <div className="shrink-0 md:pt-1">
          <p className="mb-2 text-xs font-medium text-slate-500 md:text-right">Show amounts as</p>
          <SegmentedControl
            name="take-home-period"
            value={period}
            onChange={(v) => setPeriod(v as Period)}
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "annual", label: "Annual" },
            ]}
            className="md:justify-end"
          />
        </div>
      </div>

      {hasFacility ? (
        <>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <ColumnBreakdown
              title="With your 30% ruling setting"
              subtitle="Facility applied as you modelled it on taxable wages."
              result={result}
              variant="withRuling"
              wo={wo}
              period={period}
            />
            <ColumnBreakdown
              title="Without 30% ruling structure"
              subtitle="Same gross — no tax-free facility; higher taxable income and usually higher tax."
              result={result}
              variant="withoutRuling"
              wo={wo}
              period={period}
            />
          </div>
          <div className="mt-5 rounded-xl border border-emerald-200/80 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-950">
            <span className="font-semibold">
              {period === "monthly" ? "Monthly net difference (with − without):" : "Annual net difference (with − without):"}
            </span>{" "}
            <span className="tabular-nums text-lg font-bold">{period === "monthly" ? eur(deltaMonthly) : eur(deltaAnnual)}</span>
            <span className="text-emerald-900/80">
              {" "}
              — extra take-home {period === "monthly" ? "per month" : "per year"} from the facility in this model, before lifestyle spending.
            </span>
            <p className="mt-2 text-xs text-emerald-900/75">
              Other view: {period === "monthly" ? <><strong>{eur(deltaAnnual)}</strong> per year</> : <><strong>{eur(deltaMonthly)}</strong> per month</>}.
            </p>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <ColumnBreakdown
            title="Estimated take-home (no 30% facility in inputs)"
            subtitle="Turn on a ruling setting above to compare against a no-facility column on the same gross."
            result={result}
            variant="withRuling"
            wo={wo}
            period={period}
          />
        </div>
      )}

      {proration ? (
        <p className="mt-4 text-xs text-slate-500">
          Partial year ({result.inputs.monthsWorkedInYear} mo.): indicative cash received in-year ≈{" "}
          <strong className="text-slate-700">{eur(result.estimatedNetReceivedInYear)}</strong> (linear proration of annual net).
        </p>
      ) : null}

      <p className="mt-4 rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-2 text-xs text-amber-950">
        <strong>Not modelled here</strong> (typical real payslips may show): other pension tiers, ANW/WLZ differently, wage-tax tables vs brackets,
        fiscal partner effect, 13th month, net allowances, or net-to-gross corrections.
      </p>
    </section>
  );
}

export const SalaryTakeHomeBreakdown = memo(SalaryTakeHomeBreakdownInner);
