"use client";

import { Button } from "@/components/ui/button";
import { buildSummaryHtmlDocument, downloadHtmlSummary, openPrintSummary } from "@/src/lib/tools/thirty-percent-ruling/exportSummary";
import type { DownloadSummaryPayload } from "@/src/lib/tools/thirty-percent-ruling/types";

type Props = {
  payload: DownloadSummaryPayload | null;
  siteName?: string;
};

export function DownloadSummaryPanel({ payload, siteName = "ExpatCopilot" }: Props) {
  if (!payload?.primaryResult) return null;

  const full: DownloadSummaryPayload = { ...payload, siteName: payload.siteName ?? siteName };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 to-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-semibold text-slate-900">Download planning summary</h3>
      <p className="mt-2 text-sm text-slate-600">
        Eligibility-first HTML: assumptions, primary result, checklist, allowance, optional net comparison, next steps, and disclaimer — print,
        save as PDF, or share with HR or an advisor.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          type="button"
          variant="secondary"
          className="min-h-11"
          onClick={() => downloadHtmlSummary(full)}
        >
          Download HTML
        </Button>
        <Button type="button" className="min-h-11" onClick={() => openPrintSummary(full)}>
          Print / Save as PDF
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Preview:{" "}
        <button
          type="button"
          className="font-semibold text-brand-600 hover:underline"
          onClick={() => {
            const html = buildSummaryHtmlDocument(full);
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
