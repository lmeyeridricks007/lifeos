"use client";

import { eur } from "./copilotUi";

type SalaryToolTrustBannerProps = {
  /** When true, show modelled contract gross from current inputs (after a successful Calculate for those inputs). */
  releaseOutputPreview: boolean;
  grossPreviewAnnual: number;
  editingScenarioLabel?: string;
};

/**
 * Single trust / disclaimer strip at the top of the calculator — combines what was previously two similar boxes.
 */
export function SalaryToolTrustBanner({
  releaseOutputPreview,
  grossPreviewAnnual,
  editingScenarioLabel,
}: SalaryToolTrustBannerProps) {
  return (
    <div
      className="rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50/95 via-white to-slate-50/80 p-4 shadow-expatos-sm ring-1 ring-sky-200/40 md:p-5"
      role="region"
      aria-label="How to read this calculator"
    >
      <p className="text-sm font-semibold text-slate-900">Indicative planning model — not your payslip</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li>
          Uses simplified 2026-style bands and approximate credits — not official loonbelasting tables or payroll withholding software.
        </li>
        <li>
          Real net pay depends on your employer&apos;s setup, pension scheme, social premiums, benefits in kind, and personal tax credits.
        </li>
        <li>
          Use the numbers to compare offers and brief payroll or a tax advisor — not as a contractual take-home promise, and not as tax advice.
        </li>
      </ul>

      <div className="mt-4 border-t border-sky-200/60 pt-4 text-sm text-slate-600">
        {releaseOutputPreview ? (
          <p>
            Contract gross (incl. optional 8% holiday allowance): <strong className="text-slate-900">{eur(grossPreviewAnnual)}</strong> / year ·{" "}
            {eur(grossPreviewAnnual / 12)} / month before tax.
          </p>
        ) : (
          <p>
            Enter your salary fields below, then click <strong className="text-slate-800">Calculate</strong> to see contract gross totals and indicative
            net pay.
          </p>
        )}
        {editingScenarioLabel ? (
          <p className="mt-2 text-sm font-medium text-brand-800">
            Editing scenario: <span className="text-slate-900">{editingScenarioLabel}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
