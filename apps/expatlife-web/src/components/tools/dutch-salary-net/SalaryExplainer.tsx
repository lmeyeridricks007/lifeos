/**
 * Methodology + “what the net comparison means” for SEO and trust.
 */
export function SalaryExplainer() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        {
          h: "Taxable income first",
          p: "We start from your gross package (optional bonus + 8% holiday allowance when enabled), subtract a modelled employee pension share, then apply the 30% ruling setting only when you choose it — untaxed share respects the same statutory salary cap used in our eligibility tool. This is taxable-wage modelling, not a ruling decision.",
        },
        {
          h: "Two-band wedge",
          p: "Income tax uses two indicative marginal slices (~36.97% and ~49.5%) so you can see bracket exposure without full loonbelasting tables. Your payslip will differ.",
        },
        {
          h: "Credits & social",
          p: "General and labour credits are optional toggles with smooth phase-outs. Social is a single Zvw-style employee levy when enabled — not a full premie breakdown.",
        },
        {
          h: "Compare safely",
          p: "Duplicate scenarios to contrast gross levels, ruling settings, or pension %. Deltas show direction for conversations with HR — not contract terms.",
        },
        {
          h: "What the net comparison means",
          p: "A lower taxable income from the 30% ruling is not the same as a higher gross salary: take-home rises because less income sits in the tax base, assuming payroll applies the facility. The uplift you see here is indicative — employer setup, credits, and benefits in kind change the final number.",
        },
        {
          h: "Why this is not a payslip",
          p: "Real net pay depends on official withholding, your pension scheme rules, partner and household credits, and year-to-date effects. Use this tool to plan and compare offers, then confirm with payroll or a tax advisor before you rely on a figure in negotiations.",
        },
      ].map((x) => (
        <div
          key={x.h}
          className="rounded-2xl border-0 bg-copilot-bg-soft/90 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.07]"
        >
          <p className="font-semibold text-copilot-text-primary">{x.h}</p>
          <p className="mt-2 text-sm text-copilot-text-secondary">{x.p}</p>
        </div>
      ))}
      <p className="md:col-span-2 text-sm text-copilot-text-secondary">
        Official percentages and ceilings change — confirm on{" "}
        <a
          href="https://www.belastingdienst.nl/"
          className="font-semibold text-copilot-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Belastingdienst.nl
        </a>{" "}
        and{" "}
        <a
          href="https://www.government.nl/topics/income-tax"
          className="font-semibold text-copilot-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Government.nl
        </a>{" "}
        before relying on any number.
      </p>
    </div>
  );
}
