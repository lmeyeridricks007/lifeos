"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";

type TransferCostWorkflowCtaProps = {
  className?: string;
  /** Card chrome for page intro; inline strip under the tool progress bar. */
  variant?: "inline" | "card";
};

/**
 * Editorial workflow links — not live pricing. Arrows are decorative; each segment is its own link.
 */
export function TransferCostWorkflowCta({ className, variant = "inline" }: TransferCostWorkflowCtaProps) {
  const nav = (
    <nav
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-2 text-sm leading-snug",
        variant === "card" && "text-[0.9375rem]",
      )}
      aria-label="Suggested workflow: compare banks, estimate banking cost, compare transfers"
    >
      <Link href={BANK_COMPARISON_TOOL_PATH} className="font-medium text-brand-600 hover:underline">
        Compare banks
      </Link>
      <span className="select-none text-copilot-text-muted" aria-hidden>
        →
      </span>
      <Link href={BANKING_COST_ESTIMATOR_PATH} className="font-medium text-brand-600 hover:underline">
        Estimate cost
      </Link>
      <span className="select-none text-copilot-text-muted" aria-hidden>
        →
      </span>
      <Link href={INTERNATIONAL_TRANSFERS_FROM_NL_PATH} className="font-medium text-brand-600 hover:underline">
        Compare transfers
      </Link>
      <span className="select-none text-copilot-text-muted max-sm:hidden" aria-hidden>
        ·
      </span>
      <Link href={CHEAPEST_BANK_ACCOUNTS_PATH} className="text-brand-600 hover:underline max-sm:basis-full sm:font-medium">
        Cheapest bank accounts
      </Link>
    </nav>
  );

  if (variant === "card") {
    return (
      <div className={cn(bankToolCardClass("space-y-2"), className)}>
        <p className="text-xs font-normal uppercase tracking-wide text-copilot-text-muted">More tools and guides</p>
        {nav}
      </div>
    );
  }

  return <div className={className}>{nav}</div>;
}
