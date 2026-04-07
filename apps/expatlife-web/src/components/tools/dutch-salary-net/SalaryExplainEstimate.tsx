"use client";

import { memo } from "react";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import type { SalaryNetComputation } from "@/src/lib/tools/dutch-salary-net/types";
import { formatRulingSettingLabel } from "@/src/lib/tools/dutch-salary-net/displayLabels";
import { eur } from "./copilotUi";

type Props = {
  result: SalaryNetComputation;
};

function SalaryExplainEstimateInner({ result }: Props) {
  const i = result.inputs;
  const basisLabel = i.salaryInputBasis === "annual" ? "Annual gross (as entered)" : "Monthly gross × 12 (as entered)";

  return (
    <CollapsiblePanel
      title="How we estimated this result"
      defaultOpen={false}
      titleClassName="text-base font-semibold text-slate-900"
      triggerClassName="cursor-pointer rounded-t-xl bg-slate-50 text-slate-800 hover:bg-slate-100"
      className="border border-slate-200/90 bg-white shadow-sm"
    >
      <div className="space-y-4 p-4 pt-0 text-sm leading-relaxed text-slate-700 md:p-5 md:pt-0">
        <p>
          We start from your <strong>{basisLabel}</strong>, add bonus if you entered one, and {i.includeHolidayAllowance ? "add" : "do not add"}{" "}
          an 8% holiday allowance on salary + bonus. That produces contract gross of <strong>{eur(result.grossAnnual)}</strong> per year in this
          model.
        </p>
        <p>
          Employee pension is modelled as <strong>{i.pensionEmployeePercent != null ? `${i.pensionEmployeePercent}%` : "not set"}</strong> of gross
          (optional). Social contributions are <strong>{i.includeSocialContributions ? "included" : "excluded"}</strong> as a simplified Zvw-style
          employee levy when enabled.
        </p>
        <p>
          <strong>30% ruling setting:</strong> {formatRulingSettingLabel(i)}. This only changes <em>taxable</em> income if you turn it on — it does
          not increase gross pay. It does <strong>not</strong> check eligibility; use the dedicated eligibility calculator for that.
        </p>
        <p>
          Taxable income with your settings is <strong>{eur(result.taxableIncomeAnnual)}</strong> per year. Without any ruling structure on the same
          gross, taxable would be about <strong>{eur(result.withoutRuling.taxableIncomeAnnual)}</strong>. We apply two indicative marginal bands
          (~36.97% then ~49.5%), then subtract approximate general and labour credits if toggled on.
        </p>
        <p>
          The <strong>{eur(result.netMonthly)}</strong> monthly net is therefore <strong>indicative</strong>: payroll software uses different
          withholding, and your annual return can still differ. Use this output for planning conversations, not as proof of net pay.
        </p>
      </div>
    </CollapsiblePanel>
  );
}

export const SalaryExplainEstimate = memo(SalaryExplainEstimateInner);
