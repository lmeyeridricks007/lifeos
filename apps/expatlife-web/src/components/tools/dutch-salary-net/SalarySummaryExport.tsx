"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  buildSalarySummaryHtmlDocument,
  downloadSalaryHtmlSummary,
  openPrintSalarySummary,
} from "@/src/lib/tools/dutch-salary-net/exportSalarySummary";
import type { SalaryExportPayload, SalaryNetComputation } from "@/src/lib/tools/dutch-salary-net/types";
import type { ScenarioSalaryEvaluation } from "./SalaryComparison";

const DISCLAIMER =
  "This summary is for planning and education only. It does not replace payroll, the Belastingdienst, or a qualified tax adviser. Rates, credits, and caps change — verify all figures before you decide.";

type Props = {
  primaryLabel: string;
  primary: SalaryNetComputation | null;
  evaluations: ScenarioSalaryEvaluation[];
  siteName?: string;
  calculatorCanonicalUrl: string;
};

export function SalarySummaryExport({
  primaryLabel,
  primary,
  evaluations,
  siteName = "ExpatCopilot",
  calculatorCanonicalUrl,
}: Props) {
  const [planningNotes, setPlanningNotes] = useState("");

  const buildPayload = useCallback((): SalaryExportPayload => {
    if (!primary) {
      throw new Error("SalarySummaryExport: primary result required");
    }
    return {
      siteName,
      generatedAtIso: new Date().toISOString(),
      disclaimer: DISCLAIMER,
      primaryLabel,
      primary,
      compareRows: evaluations.map((e) => ({ label: e.scenario.label, row: e.result })),
      planningNotes: planningNotes.trim() || undefined,
      calculatorCanonicalUrl,
    };
  }, [siteName, primaryLabel, primary, evaluations, planningNotes, calculatorCanonicalUrl]);

  if (!primary) return null;

  return (
    <div id="download-summary" className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 to-white p-5 shadow-sm md:scroll-mt-32 md:p-6">
      <h3 className="text-base font-semibold text-slate-900">Download planning summary</h3>
      <p className="mt-2 text-sm text-slate-600">
        HTML export includes inputs, indicative results, comparison (if any), taxable vs ruling structure, timestamp, disclaimer, and a link back to
        this calculator. Print or save as PDF from your browser.
      </p>

      <div className="mt-4">
        <label htmlFor="salary-export-notes" className="text-sm font-medium text-slate-800">
          Optional notes for your file (e.g. offer name, questions for HR)
        </label>
        <textarea
          id="salary-export-notes"
          rows={3}
          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="e.g. Company A offer — confirm pension match"
          value={planningNotes}
          onChange={(e) => setPlanningNotes(e.target.value)}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="button" variant="secondary" className="min-h-11" onClick={() => downloadSalaryHtmlSummary(buildPayload())}>
          Download HTML
        </Button>
        <Button type="button" className="min-h-11" onClick={() => openPrintSalarySummary(buildPayload())}>
          Print / Save as PDF
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Preview:{" "}
        <button
          type="button"
          className="font-semibold text-brand-600 hover:underline"
          onClick={() => {
            const html = buildSalarySummaryHtmlDocument(buildPayload());
            const w = window.open("", "_blank", "noopener,noreferrer");
            if (w) {
              w.document.write(html);
              w.document.close();
            }
          }}
        >
          Open in new tab
        </button>
      </p>
    </div>
  );
}
