"use client";

import { cn } from "@/lib/cn";
import { bankToolCardClass, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { RecommendedBankingSetupCard } from "@/src/components/tools/banking/RecommendedBankingSetupCard";
import { getBankingCostMethodologyLines, type BankingCostEstimateResult } from "@/src/lib/banking/bankingCostEstimator";
import { formatBankingCostRange } from "./bankingCostFormat";

const TRUST_INTRO_LINES = getBankingCostMethodologyLines().slice(0, 3);

export type BankingCostResultsProps = {
  result: BankingCostEstimateResult;
  /** Optional extra line under the range cards (e.g. tool-specific nuance). */
  resultNote?: string;
  headingLevel?: "h2" | "h3";
  className?: string;
};

export function BankingCostResults({
  result,
  resultNote,
  headingLevel = "h3",
  className,
}: BankingCostResultsProps) {
  const titleClass = "text-xl font-normal text-copilot-text-primary md:text-2xl";
  const HeadingTag = headingLevel === "h2" ? "h2" : "h3";

  return (
    <div className={cn("min-w-0 space-y-6", className)}>
      <header className="min-w-0 space-y-3">
        <HeadingTag className={titleClass}>Your estimate</HeadingTag>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          {TRUST_INTRO_LINES.map((line) => (
            <li key={line} className="break-words [overflow-wrap:anywhere]">
              {line}
            </li>
          ))}
        </ul>
      </header>

      <section
        className="grid min-w-0 gap-4 sm:grid-cols-2"
        aria-label="Estimated monthly and yearly banking cost ranges"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className={bankToolCardClass("min-w-0 space-y-2 border-copilot-primary/12")}>
          <p className={BANK_TOOL_LABEL}>Monthly range</p>
          <p className="break-words text-3xl font-normal tabular-nums tracking-tight text-copilot-text-primary md:text-4xl">
            {formatBankingCostRange(result.monthlyLowEstimate, result.monthlyHighEstimate)}
          </p>
          <p className="text-xs leading-relaxed text-copilot-text-secondary">
            Adds up the cost types below in euros — not a bill from one bank.
          </p>
        </div>
        <div className={bankToolCardClass("min-w-0 space-y-2 border-copilot-primary/12")}>
          <p className={BANK_TOOL_LABEL}>Yearly range (about ×12)</p>
          <p className="break-words text-3xl font-normal tabular-nums tracking-tight text-copilot-text-primary md:text-4xl">
            {formatBankingCostRange(result.yearlyLowEstimate, result.yearlyHighEstimate)}
          </p>
          <p className="text-xs leading-relaxed text-copilot-text-secondary">
            Monthly range × 12; short promotions and fee waivers are not included.
          </p>
        </div>
      </section>

      <p className="text-center text-sm tabular-nums text-copilot-text-muted md:text-left">
        Currency: {result.currency} · rough budget guide only
      </p>

      {resultNote ? (
        <p className="text-sm leading-relaxed text-copilot-text-secondary [overflow-wrap:anywhere]">{resultNote}</p>
      ) : null}

      <section className={bankToolCardClass("min-w-0 space-y-3")} aria-labelledby="banking-cost-drivers-heading">
        <h3 id="banking-cost-drivers-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Where most of the cost comes from (based on your answers)
        </h3>
        <ol className="list-decimal space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
          {result.biggestCostDrivers.map((d) => (
            <li key={d} className="break-words [overflow-wrap:anywhere]">
              {d}
            </li>
          ))}
        </ol>
      </section>

      <RecommendedBankingSetupCard setup={result.recommendedSetup} />
    </div>
  );
}
