"use client";

import Link from "next/link";
import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BankComparisonResult } from "@/src/lib/tools/bank-comparison/types";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { bankToolCardClass, BANK_TOOL_LABEL, WEIGHT_LABELS } from "./bankComparisonUi";
import { BankFitCard } from "./BankFitCard";
import { InfoBox } from "@/components/ui/info-box";
import { BankComparisonMethodology } from "./BankComparisonMethodology";
import { HiddenCostWarnings } from "./HiddenCostWarnings";
import { RecommendedBankingSetupCard } from "./RecommendedBankingSetupCard";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";

export type BankComparisonResultsProps = {
  result: BankComparisonResult;
  topMatchCount?: number;
  onEditAnswers: () => void;
  onReset: () => void;
  onCopySummary: () => void;
  copyDone: boolean;
  resultsId?: string;
  className?: string;
};

export function BankComparisonResults({
  result,
  topMatchCount = 3,
  onEditAnswers,
  onReset,
  onCopySummary,
  copyDone,
  resultsId = "bank-comparison-results",
  className,
}: BankComparisonResultsProps) {
  return (
    <div id={resultsId} className={className ?? "scroll-mt-28 space-y-8"}>
      <header className="space-y-3">
        <h3 className="text-xl font-normal text-copilot-text-primary md:text-2xl">Your results</h3>
        <div
          className="rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/60 px-4 py-3 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] md:px-5 md:py-4"
          role="status"
          aria-live="polite"
        >
          <p className="text-copilot-text-primary">{result.recommendedSetup.title}</p>
          <p className="mt-1">
            Below are the {topMatchCount} banks that fit your answers best from the list we compare (not every bank in the country). The score is a rough guide for planning — not an official league table and not live prices.
          </p>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="secondary"
          className="border-copilot-primary/20 bg-white"
          onClick={onEditAnswers}
          aria-label="Change your answers and go back to step 1 of the questionnaire"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
          Edit answers
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="border-copilot-primary/20 bg-white"
          onClick={onCopySummary}
          aria-label={copyDone ? "Summary copied to clipboard" : "Copy a text summary of these results to the clipboard"}
        >
          <Copy className="mr-2 h-4 w-4" aria-hidden />
          {copyDone ? "Copied to clipboard" : "Copy summary"}
        </Button>
        <Button type="button" variant="ghost" onClick={onReset} aria-label="Reset all answers and start the questionnaire over">
          Reset
        </Button>
      </div>

      <InfoBox title="How to read this page" titleClassName="font-normal" variant="info" className="max-w-3xl text-sm">
        <ul className="list-disc space-y-2 pl-4 leading-relaxed text-foreground-muted">
          <li>
            The score is a guide, not a rank. It mixes what you said matters with our simple 1–5 ratings per topic. It cannot know your employer, landlord, or next year’s fees.
          </li>
          <li>
            Fees change. We only describe typical cost patterns — not exact euro amounts. Always read the bank’s own price list before you sign.
          </li>
          <li>
            About partner links. {AFFILIATE_LINKS_SCORING_DISCLAIMER}
          </li>
        </ul>
      </InfoBox>

      <RecommendedBankingSetupCard setup={result.recommendedSetup} />

      <BankingCompareFitEstimateCostCta />

      <BankComparisonMethodology lines={result.methodologyLines} title="How we built this comparison" />

      <section className={bankToolCardClass("space-y-4")} aria-labelledby="bank-transparent-weights">
        <h3 id="bank-transparent-weights" className="text-base font-normal text-copilot-text-primary md:text-lg">
          What we counted most from your answers
        </h3>
        <p className="text-sm text-copilot-text-secondary">
          These shares come only from your questionnaire and add up to 100%. They show why one bank can land above another — not how much money the bank makes from us.
        </p>
        <ul className="divide-y divide-copilot-primary/10 rounded-xl border border-copilot-primary/10">
          {Object.entries(result.weightsNormalized).map(([key, val]) => (
            <li key={key} className="flex min-w-0 flex-wrap items-center justify-between gap-2 px-3 py-2.5 text-sm">
              <span className="min-w-0 break-words text-copilot-text-primary">{WEIGHT_LABELS[key] ?? key}</span>
              <span className="shrink-0 tabular-nums text-copilot-accent">{Math.round(val * 100)}%</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="bank-top-matches-heading">
        <h3 id="bank-top-matches-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Best matches ({topMatchCount})
        </h3>
        <InfoBox title="About the links" titleClassName="font-normal" variant="info" className="max-w-3xl text-sm">
          <p className="leading-relaxed text-foreground-muted">{result.affiliateLinksDisclaimer}</p>
        </InfoBox>
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-3">
          {result.topMatches.map((m) => (
            <BankFitCard key={m.id} match={m} />
          ))}
        </div>
      </section>

      <HiddenCostWarnings warnings={result.hiddenCostWarnings} />

      <section className={bankToolCardClass()} aria-labelledby="bank-checklist-heading">
        <h3 id="bank-checklist-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Next-step checklist
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
          {result.checklist.map((c) => (
            <li key={c} className="break-words">
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-copilot-text-secondary">
          Deep dives:{" "}
          <Link href={BEST_BANKS_EXPATS_PATH} className="text-link hover:underline">
            Best banks for expats
          </Link>
          ,{" "}
          <Link href="/netherlands/money/banking/fees/" className="text-link hover:underline">
            {"Banking fees & costs"}
          </Link>
          ,{" "}
          <Link href={BANKING_COST_ESTIMATOR_PATH} className="text-link hover:underline">
            Banking cost estimator
          </Link>
          , and{" "}
          <Link href="/netherlands/money/banking/international-transfers/" className="text-link hover:underline">
            International transfers
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
