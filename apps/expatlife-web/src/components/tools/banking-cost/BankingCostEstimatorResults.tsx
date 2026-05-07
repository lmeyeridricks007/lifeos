"use client";

import { CardLink } from "@/components/ui/card-link";
import { InfoBox } from "@/components/ui/info-box";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { type BankingCostEstimateResult } from "@/src/lib/banking/bankingCostEstimator";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";
import { BankingCostBreakdown } from "./BankingCostBreakdown";
import { BankingCostMethodology } from "./BankingCostMethodology";
import { BankingCostNextSteps } from "./BankingCostNextSteps";
import { BankingCostResults } from "./BankingCostResults";
import { BankingCostSummaryActions } from "./BankingCostSummaryActions";
import { BankingCostWarnings } from "./BankingCostWarnings";
import { BANK_COMPARISON_TOOL_PATH } from "./bankingCostPageModel";

export type BankingCostEstimatorResultsProps = {
  result: BankingCostEstimateResult;
  nextSteps: readonly string[];
  onEditAnswers: () => void;
  onReset: () => void;
  onCopySummary: () => void;
  copyDone: boolean;
  onDownloadSummaryHtml?: () => void;
  htmlDownloadDone?: boolean;
  onDownloadSummaryMarkdown?: () => void;
  markdownDownloadDone?: boolean;
  resultsId?: string;
  className?: string;
};

const COMPARE_NEXT = [
  {
    href: `${BEST_BANKS_EXPATS_PATH}`,
    title: "Traditional banks (shortlist)",
    description: "ING, ABN AMRO, Rabobank — editorial notes, then confirm on each bank’s site.",
    group: "Traditional",
  },
  {
    href: "/netherlands/money/banking/traditional-vs-digital/",
    title: "Traditional vs digital",
    description: "How app-first banks differ from Dutch high-street banks for everyday use.",
    group: "Traditional",
  },
  {
    href: "/netherlands/money/banking/cheapest-accounts/",
    title: "Digital & low-cost accounts",
    description: "Fee patterns and what “cheap” usually means for expats — not a live rank.",
    group: "Digital",
  },
  {
    href: "/netherlands/money/banking/international-transfers/",
    title: "Transfer & FX specialists",
    description: "Compare amount received, speed, and when to pair a transfer app with a Dutch IBAN.",
    group: "Transfers",
  },
  {
    href: "/netherlands/money/banking/best-bank-zzp/",
    title: "Business / ZZP options",
    description: "Separate business banking, invoicing angles, and what to verify in tariffs.",
    group: "ZZP",
  },
  {
    href: BANK_COMPARISON_TOOL_PATH,
    title: "Bank comparison tool",
    description: "Fit-style questionnaire — partner links do not change scores.",
    group: "Tool",
  },
] as const;

export function BankingCostEstimatorResults({
  result,
  nextSteps,
  onEditAnswers,
  onReset,
  onCopySummary,
  copyDone,
  onDownloadSummaryHtml,
  htmlDownloadDone,
  onDownloadSummaryMarkdown,
  markdownDownloadDone,
  resultsId = "banking-cost-estimator-results",
  className,
}: BankingCostEstimatorResultsProps) {
  return (
    <div id={resultsId} className={className ?? "scroll-mt-28 space-y-8"}>
      <BankingCostResults result={result} />

      <BankingCostSummaryActions
        onEditAnswers={onEditAnswers}
        onReset={onReset}
        onCopySummary={onCopySummary}
        copyDone={copyDone}
        onDownloadSummaryHtml={onDownloadSummaryHtml}
        htmlDownloadDone={htmlDownloadDone}
        onDownloadSummaryMarkdown={onDownloadSummaryMarkdown}
        markdownDownloadDone={markdownDownloadDone}
      />

      <InfoBox title="How to read this estimate" titleClassName="font-normal" variant="info" className="max-w-3xl text-sm">
        <ul className="list-disc space-y-2 pl-4 leading-relaxed text-foreground-muted">
          <li>
            The range mixes fixed fees (like a package price) with usage (like travel or transfers). Your real spend can be lower or much higher, especially when you change money between currencies.
          </li>
          <li>
            About partner links elsewhere on the site. {AFFILIATE_LINKS_SCORING_DISCLAIMER} This calculator does not use affiliate data.
          </li>
          <li>
            Copy summary and HTML/Markdown downloads are built in your browser only — ExpatCopilot does not store your answers or these files on our servers.
          </li>
        </ul>
      </InfoBox>

      <BankingCostBreakdown items={result.breakdown} />

      <section className={bankToolCardClass("min-w-0 space-y-3")} aria-labelledby="banking-cost-assumptions-heading">
        <h3 id="banking-cost-assumptions-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Assumptions used in this run
        </h3>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
          {result.assumptionsUsed.map((line) => (
            <li key={line} className="break-words">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <BankingCostWarnings warnings={result.warnings} />

      <BankingCostNextSteps steps={nextSteps} />

      <section className="min-w-0 space-y-4" aria-labelledby="banking-cost-compare-next">
        <h3 id="banking-cost-compare-next" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Options to compare next
        </h3>
        <p className="text-sm text-copilot-text-secondary">
          Editorial starting points — not “cheapest” rankings. Confirm pricing and product fit on each official site.
        </p>
        <AffiliateDisclosureNote className="text-copilot-text-secondary">
          Destination guides may include partner links. {AFFILIATE_LINKS_SCORING_DISCLAIMER}
        </AffiliateDisclosureNote>
        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {COMPARE_NEXT.map((c) => (
            <CardLink key={c.href} href={c.href} title={c.title} description={`${c.group} · ${c.description}`} />
          ))}
        </div>
      </section>

      <BankingCostMethodology />
    </div>
  );
}
