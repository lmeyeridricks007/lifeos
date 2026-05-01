import Link from "next/link";
import { cn } from "@/lib/cn";
import { bankToolCardClass, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";

const actionClass =
  "inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl border border-copilot-primary/18 bg-white px-4 py-2.5 text-center text-sm font-semibold text-copilot-text-primary shadow-sm transition-colors hover:border-copilot-primary/28 hover:bg-copilot-bg-soft/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export type BankingCompareFitEstimateCostCtaProps = {
  className?: string;
  id?: string;
  /** When false, skips the line tying the flow to the Banking fees guide (e.g. on the fees page itself). */
  showFeesCrossline?: boolean;
};

/**
 * Shared banking-tool strip: compare fit (scores) → estimate euro bands → read fee framework.
 * Copy aligns with the Banking fees guide: planning-only, no live prices, confirm on official sites.
 */
export function BankingCompareFitEstimateCostCta({
  className,
  id = "banking-compare-fit-estimate-cta",
  showFeesCrossline = true,
}: BankingCompareFitEstimateCostCtaProps) {
  return (
    <aside
      id={id}
      className={cn(bankToolCardClass("space-y-4 border-l-4 border-l-copilot-primary/50"), className)}
      aria-labelledby={`${id}-title`}
    >
      <div>
        <p className={BANK_TOOL_LABEL}>Banking tools</p>
        <h2 id={`${id}-title`} className="mt-2 text-lg font-normal text-copilot-text-primary md:text-xl">
          Compare fit first, estimate cost next
        </h2>
        {showFeesCrossline ? (
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            The comparison tool scores how banks match your situation; the cost estimator turns the same fee categories as our{" "}
            <Link href={BANKING_FEES_PAGE_PATH} className="font-semibold text-brand-600 hover:underline">
              {"Banking fees & costs"}
            </Link>{" "}
            guide into monthly and yearly euro planning bands. Neither replaces each bank’s official price list.
          </p>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            Use the comparison tool for editorial fit scores, then the cost estimator for monthly and yearly euro planning bands from our assumptions file — always confirm tariffs on each provider’s site.
          </p>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href={BANK_COMPARISON_TOOL_PATH} className={actionClass}>
          Compare banks
        </Link>
        <Link href={BANKING_COST_ESTIMATOR_PATH} className={actionClass}>
          Estimate banking costs
        </Link>
        <Link href={BANKING_FEES_PAGE_PATH} className={actionClass}>
          Understand fees
        </Link>
      </div>
    </aside>
  );
}
