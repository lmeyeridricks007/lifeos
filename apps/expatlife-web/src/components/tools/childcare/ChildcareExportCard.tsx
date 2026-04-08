"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { trackChildcareEstimator } from "@/lib/analytics/track";
import {
  buildChildcareHtmlDocument,
  CHILDCARE_EXPORT_DISCLAIMER_DEFAULT,
  downloadChildcareHtmlFile,
} from "@/src/lib/tools/childcare/exportChildcareSummary";
import type { ChildcareEstimatorInput, ChildcareEstimateResult, ChildcareScenarioRow } from "@/src/types/tools/childcare";

const CANONICAL = "/netherlands/family/tools/childcare-cost-estimator/";

type Props = {
  input: ChildcareEstimatorInput;
  result: ChildcareEstimateResult;
  scenarios: ChildcareScenarioRow[];
};

export function ChildcareExportCard({ input, result, scenarios }: Props) {
  const [notes, setNotes] = useState("");

  const payload = () => ({
    siteName: "ExpatCopilot",
    generatedAtIso: new Date().toISOString(),
    disclaimer: CHILDCARE_EXPORT_DISCLAIMER_DEFAULT,
    calculatorCanonicalUrl: typeof window !== "undefined" ? `${window.location.origin}${CANONICAL}` : CANONICAL,
    input,
    result,
    scenarios,
    planningNotes: notes.trim() || undefined,
  });

  const download = () => {
    downloadChildcareHtmlFile(payload(), "netherlands-childcare-cost-estimate.html");
    trackChildcareEstimator("summary_downloaded", { format: "html" });
  };

  const printOpen = () => {
    const html = buildChildcareHtmlDocument(payload());
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    trackChildcareEstimator("summary_downloaded", { format: "print_tab" });
  };

  return (
    <div
      id="download-summary"
      className="scroll-mt-28 rounded-2xl border-2 border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-6 shadow-expatos-md md:scroll-mt-32 md:p-8"
    >
      <h3 className="text-lg font-semibold text-copilot-text-primary">Download summary</h3>
      <p className="mt-2 text-sm text-copilot-text-secondary">
        Includes household setup, per-child breakdown, gross and estimated benefit, net and annual childcare, first-month line
        items, scenario comparison, optional notes, and a planning disclaimer. Use print to save as PDF from your browser.
      </p>
      <label className="mt-4 block text-sm font-medium text-copilot-text-primary" htmlFor="childcare-export-notes">
        Optional notes (included in export)
      </label>
      <textarea
        id="childcare-export-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Waiting list timing, employer allowance, school choice…"
        rows={4}
        className={cn(
          "mt-1.5 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary shadow-expatos-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30"
        )}
      />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="button" variant="primary" className="w-full rounded-xl sm:w-auto sm:min-w-[10rem]" onClick={download}>
          Download HTML
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="w-full rounded-xl border-copilot-primary/25 sm:w-auto sm:min-w-[10rem]"
          onClick={printOpen}
        >
          Open for print / PDF
        </Button>
      </div>
    </div>
  );
}
