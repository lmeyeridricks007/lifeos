"use client";

import Link from "next/link";
import { ArrowLeft, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import type { BankingTotalCostBreakdownItem, BankingTotalCostEquationSummary } from "@/components/banking/BankingTotalCostBreakdown";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { transferCostEducationalItems, transferCostEducationalEquation } from "@/src/data/banking/transferCostBreakdownEducational";
import { TRANSFER_COST_CALCULATOR_ASSUMPTIONS } from "@/src/data/tools/transferCostCalculatorAssumptions";
import { getTransferCostProviderPanelRows } from "@/src/data/tools/transferCostCalculatorProviders";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { formatBankingCostRange } from "@/src/components/tools/banking-cost/bankingCostFormat";
import { bankToolCardClass, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { BankComparisonMethodology } from "@/src/components/tools/banking/BankComparisonMethodology";
import { RecommendedBankingSetupCard } from "@/src/components/tools/banking/RecommendedBankingSetupCard";
import type { TransferCostCalculatorInput, TransferCostCalculatorResult } from "@/src/lib/tools/transfer-cost-calculator/types";
import { TransferCostBreakdown } from "./TransferCostBreakdown";
import { TransferComparisonCards } from "./TransferComparisonCards";
import { FXExplanationBlock } from "./FXExplanationBlock";
import { TransferWarnings } from "./TransferWarnings";
import { TransferOverpayInternationalSection } from "./TransferOverpayInternationalSection";
import { TransferCostHelpSections } from "./TransferCostHelpSections";
import { TransferCostWorkflowCta } from "./TransferCostWorkflowCta";
import { TransferCostResultSummaryVisual } from "./TransferCostResultSummaryVisual";
import { TransferChannelCostMiniVisual } from "./TransferChannelCostMiniVisual";

const eurPlain = new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function formatSend(amount: number): string {
  return eurPlain.format(Math.round(amount));
}

function focalChannel(result: TransferCostCalculatorResult, input: TransferCostCalculatorInput) {
  if (input.method === "not_sure") {
    return result.channels.find((c) => c.channel === "digital_bank") ?? result.channels[1]!;
  }
  return result.channels.find((c) => c.channel === input.method) ?? result.channels[1]!;
}

function buildNumericBreakdown(
  result: TransferCostCalculatorResult,
  input: TransferCostCalculatorInput
): { items: BankingTotalCostBreakdownItem[]; summaryVisual: BankingTotalCostEquationSummary } {
  const row = focalChannel(result, input);
  const items: BankingTotalCostBreakdownItem[] = [
    {
      id: "tcc-fee",
      label: "Transfer fee",
      text: "The send fee the bank or app shows up front — our range is for planning only, not their full price list.",
      chip: "Easy to see",
      example: `Typical range in our model: ${formatBankingCostRange(row.feeEurLow, row.feeEurHigh)}`,
    },
    {
      id: "tcc-fx",
      label: "Exchange-rate cost",
      text: "We multiply your send amount by a simple percent range that stands in for the exchange-rate cost — not a live market rate.",
      chip: "Often largest",
      example: `Typical range in our model: ${formatBankingCostRange(row.fxCostEurLow, row.fxCostEurHigh)} (${row.fxMarkupPctLow.toFixed(1)}–${row.fxMarkupPctHigh.toFixed(1)}% of amount sent)`,
    },
    {
      id: "tcc-total",
      label: "Total cost (fee + exchange)",
      text: "Send fee plus exchange-rate cost on your side only — we do not model fees the other bank may take when money lands.",
      chip: "Planning total",
      example: `Typical range in our model: ${formatBankingCostRange(row.totalCostEurLow, row.totalCostEurHigh)}`,
    },
  ];
  const summaryVisual: BankingTotalCostEquationSummary = {
    factors: ["Transfer fee", "Exchange-rate cost on amount sent", "Total"],
    outcomeLine: `You send ${formatSend(result.sendAmountEur)} → rough value for the recipient after these costs is about ${formatBankingCostRange(result.headlineReceivedEurLow, result.headlineReceivedEurHigh)} (euros for planning, not a live rate).`,
    footnote: `Last review of our planning notes: ${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.documented.lastChecked} (${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.documented.sourceKey}).`,
  };
  return { items, summaryVisual };
}

const resultsActionClass = "min-h-[44px] border-copilot-primary/20 bg-white sm:min-h-0";

export type TransferCostResultsProps = {
  result: TransferCostCalculatorResult;
  input: TransferCostCalculatorInput;
  warnings: readonly string[];
  onEditAnswers: () => void;
  onReset: () => void;
  onCopySummary: () => void;
  copyDone: boolean;
  shareUrl: string;
  resultsId?: string;
  className?: string;
};

export function TransferCostResults({
  result,
  input,
  warnings,
  onEditAnswers,
  onReset,
  onCopySummary,
  copyDone,
  shareUrl,
  resultsId = "transfer-cost-calculator-results",
  className,
}: TransferCostResultsProps) {
  const { items: numericItems, summaryVisual: numericSummary } = buildNumericBreakdown(result, input);
  const guideHref = INTERNATIONAL_TRANSFERS_FROM_NL_PATH;
  const providers = getTransferCostProviderPanelRows();

  return (
    <div id={resultsId} className={className ?? "scroll-mt-28 space-y-8"}>
      <header className="space-y-3">
        <h3 className="text-xl font-normal text-copilot-text-primary md:text-2xl">Your rough result</h3>
        <TransferCostResultSummaryVisual result={result} input={input} role="status" aria-live="polite" />
      </header>

      <div className="flex flex-col flex-wrap gap-2 sm:flex-row">
        <Button
          type="button"
          variant="secondary"
          className={resultsActionClass}
          onClick={onEditAnswers}
          aria-label="Change your answers and go back to step 1"
        >
          <ArrowLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          Edit answers
        </Button>
        <Button type="button" variant="secondary" className={resultsActionClass} onClick={onCopySummary} aria-label="Copy summary">
          <Copy className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          {copyDone ? "Copied to clipboard" : "Copy summary"}
        </Button>
        <Button type="button" variant="ghost" className="min-h-[44px] justify-start sm:min-h-0" onClick={onReset} aria-label="Reset questionnaire">
          Reset
        </Button>
      </div>

      <InfoBox title="How to read this page" titleClassName="font-normal" variant="info" className="max-w-3xl text-sm">
        <ul className="list-disc space-y-2 pl-4 leading-relaxed text-foreground-muted">
          <li>Every euro range is a simple planning band from our notes — not a live quote from Wise, a bank, or any other company.</li>
          <li>“Value for the recipient” is rough euros after costs on your side; the real foreign amount still needs each provider’s own calculator.</li>
          <li>
            About partner links on provider names. {AFFILIATE_LINKS_SCORING_DISCLAIMER}
          </li>
        </ul>
      </InfoBox>

      <TransferCostWorkflowCta variant="card" />

      <TransferOverpayInternationalSection />

      <TransferComparisonCards channels={result.channels} sendAmountEur={result.sendAmountEur} />

      <section className="space-y-3" aria-labelledby="tcc-cost-breakdown-heading">
        <h3 id="tcc-cost-breakdown-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Cost breakdown (one example path)
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
          The lines below use the {focalChannel(result, input).label.toLowerCase()} example so you can see numbers next to the words. If you picked another path, the three cards above still show all three patterns.
        </p>
        <TransferCostBreakdown
          items={numericItems}
          summaryVisual={numericSummary}
          summaryRegionHeadingId="transfer-cost-tool-total-picture"
          itemChipLabel="Cost part"
        />
      </section>

      <FXExplanationBlock />

      <TransferWarnings warnings={warnings} />

      <RecommendedBankingSetupCard setup={result.recommendedSetup} titleId="tcc-rec-primary-title" />
      <RecommendedBankingSetupCard
        setup={result.alternativeSetup}
        eyebrow="Alternative"
        titleId="tcc-rec-alt-title"
        className="border-l-4 border-l-copilot-accent/50"
      />

      <TransferCostHelpSections />

      <section className="space-y-4" aria-labelledby="tcc-edu-breakdown-heading">
        <h3 id="tcc-edu-breakdown-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          What else can change the real price
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
          The five cards below match our international transfers guide — quick reminders, not extra math in this tool.
        </p>
        <TransferCostBreakdown
          items={[...transferCostEducationalItems]}
          summaryVisual={transferCostEducationalEquation}
          summaryRegionHeadingId="transfer-cost-edu-total-picture"
        />
      </section>

      <section className="space-y-4" aria-labelledby="tcc-providers-heading">
        <h3 id="tcc-providers-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Companies people often compare (reading list)
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
          Order is fixed for reading only — not a ranking. The cost strip uses the same planning bands as this tool for your send size; it is not a live quote from any company.
        </p>
        <ul className="grid min-w-0 grid-cols-1 gap-4">
          {providers.map((p) => {
            const ch = result.channels.find((c) => c.channel === p.costChannel);
            return (
              <li key={p.id}>
                <article className={bankToolCardClass("flex min-w-0 flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6")}>
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-lg font-normal text-copilot-text-primary">{p.name}</p>
                    <p className="text-sm leading-relaxed text-copilot-text-secondary">{p.description}</p>
                    {p.cta ? (
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel={p.cta.isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                        className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-brand-600 hover:underline sm:min-h-0"
                      >
                        {p.cta.label}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      </a>
                    ) : null}
                    {p.cta?.disclosure ? <p className="text-[11px] leading-snug text-copilot-text-muted">{p.cta.disclosure}</p> : null}
                  </div>
                  {ch ? (
                    <div className="min-w-0 shrink-0 border-t border-copilot-primary/10 pt-4 lg:w-[min(100%,320px)] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                      <p className={BANK_TOOL_LABEL}>Estimated transfer cost in our model</p>
                      <p className="mt-1 text-[11px] leading-snug text-copilot-text-muted">{p.costCaption}</p>
                      <TransferChannelCostMiniVisual
                        className="mt-2"
                        compact
                        sendAmountEur={result.sendAmountEur}
                        totalCostEurLow={ch.totalCostEurLow}
                        totalCostEurHigh={ch.totalCostEurHigh}
                        feeEurLow={ch.feeEurLow}
                        feeEurHigh={ch.feeEurHigh}
                        fxCostEurLow={ch.fxCostEurLow}
                        fxCostEurHigh={ch.fxCostEurHigh}
                        receivedValueEurLow={ch.receivedValueEurLow}
                        receivedValueEurHigh={ch.receivedValueEurHigh}
                        pathLabel={p.name}
                      />
                      <p className="mt-2 text-xs leading-snug text-copilot-text-secondary">
                        Total in model: {formatBankingCostRange(ch.totalCostEurLow, ch.totalCostEurHigh)} · Exchange-rate part:{" "}
                        {formatBankingCostRange(ch.fxCostEurLow, ch.fxCostEurHigh)}
                      </p>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <BankComparisonMethodology lines={result.methodologyLines} title="How we built this estimate" />

      <section className={bankToolCardClass()} aria-labelledby="tcc-next-heading">
        <h3 id="tcc-next-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Suggested next steps
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          <li>
            <Link href={BANK_COMPARISON_TOOL_PATH} className="text-link hover:underline">
              Compare banks
            </Link>{" "}
            for which Dutch bank may fit daily life (scores, not transfer prices).
          </li>
          <li>
            <Link href={BANKING_COST_ESTIMATOR_PATH} className="text-link hover:underline">
              Estimate wider banking costs
            </Link>{" "}
            (cards, packages, cash machines — monthly ranges).
          </li>
          <li>
            <Link href={guideHref} className="text-link hover:underline">
              Read the international transfers guide
            </Link>{" "}
            for fees, exchange rates, and checklists before you send.
          </li>
          <li>
            <Link href={CHEAPEST_BANK_ACCOUNTS_PATH} className="text-link hover:underline">
              Cheapest bank accounts
            </Link>{" "}
            for low-cost everyday Dutch account ideas (not transfer prices).
          </li>
          <li className="text-xs text-copilot-text-muted">Tool URL for your notes: {shareUrl}</li>
        </ul>
      </section>
    </div>
  );
}
