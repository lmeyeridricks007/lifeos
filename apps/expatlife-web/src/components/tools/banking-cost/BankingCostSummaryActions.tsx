"use client";

import { ArrowLeft, Copy, Download, FileText, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export type BankingCostSummaryActionsProps = {
  onEditAnswers: () => void;
  onReset: () => void;
  onCopySummary: () => void;
  copyDone: boolean;
  /** Printable HTML file (browser download only — nothing stored on our servers). */
  onDownloadSummaryHtml?: () => void;
  htmlDownloadDone?: boolean;
  /** Markdown file for notes apps — same client-only download pattern. */
  onDownloadSummaryMarkdown?: () => void;
  markdownDownloadDone?: boolean;
  className?: string;
};

export function BankingCostSummaryActions({
  onEditAnswers,
  onReset,
  onCopySummary,
  copyDone,
  onDownloadSummaryHtml,
  htmlDownloadDone,
  onDownloadSummaryMarkdown,
  markdownDownloadDone,
  className,
}: BankingCostSummaryActionsProps) {
  return (
    <div className={`flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap ${className ?? ""}`}>
      <div className="flex min-w-0 flex-wrap gap-2 [overflow-wrap:anywhere]">
        <Button
          type="button"
          variant="secondary"
          className="border-copilot-primary/20 bg-white"
          onClick={onEditAnswers}
          aria-label="Change your answers and go back to step 1"
        >
          <ArrowLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          Edit answers
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="min-w-0 border-copilot-primary/20 bg-white"
          onClick={onCopySummary}
          aria-label={copyDone ? "Summary copied to clipboard" : "Copy full estimate summary as Markdown to the clipboard"}
        >
          <Copy className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          {copyDone ? "Copied" : "Copy summary"}
        </Button>
        {onDownloadSummaryHtml ? (
          <Button
            type="button"
            variant="secondary"
            className="min-w-0 border-copilot-primary/20 bg-white"
            onClick={onDownloadSummaryHtml}
            aria-label={htmlDownloadDone ? "HTML summary downloaded" : "Download planning summary as an HTML file"}
          >
            <Download className="mr-2 h-4 w-4 shrink-0" aria-hidden />
            {htmlDownloadDone ? "Downloaded" : "HTML"}
          </Button>
        ) : null}
        {onDownloadSummaryMarkdown ? (
          <Button
            type="button"
            variant="secondary"
            className="min-w-0 border-copilot-primary/20 bg-white"
            onClick={onDownloadSummaryMarkdown}
            aria-label={
              markdownDownloadDone ? "Markdown summary downloaded" : "Download planning summary as a Markdown file"
            }
          >
            <FileText className="mr-2 h-4 w-4 shrink-0" aria-hidden />
            {markdownDownloadDone ? "Downloaded" : "Markdown"}
          </Button>
        ) : null}
      </div>
      <Button
        type="button"
        variant="secondary"
        className="w-full shrink-0 border-copilot-primary/25 bg-white text-copilot-text-primary shadow-expatos-sm hover:bg-copilot-bg-soft sm:ml-auto sm:w-auto"
        onClick={onReset}
        aria-label="Reset all answers and return to step 1"
      >
        <RotateCcw className="mr-2 h-4 w-4 shrink-0" aria-hidden />
        Reset
      </Button>
    </div>
  );
}
