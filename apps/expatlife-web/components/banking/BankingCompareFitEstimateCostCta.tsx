import Link from "next/link";
import { cn } from "@/lib/cn";
import { SectionBlock } from "@/components/page/moving-pillar";
import { bankingGuideSecondaryCtaClass } from "@/components/banking/bankingPageUi";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";

const bodyClass =
  "w-full min-w-0 max-w-none text-base leading-relaxed text-copilot-text-secondary sm:text-[1.0625rem]";

const linkButtonClass = cn(
  bankingGuideSecondaryCtaClass,
  "min-h-[44px] w-full min-w-0 flex-1 justify-center text-center sm:w-auto sm:min-w-[10rem]"
);

/** True when `className` carries the banking guide major section shell (scroll offset + slate panel). */
function hasBankingGuideMajorSectionShell(className: string | undefined): boolean {
  const raw = className ?? "";
  return raw.includes("scroll-mt") && (raw.includes("from-surface-muted") || raw.includes("via-surface-raised"));
}

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
  const showToolCardChrome = !hasBankingGuideMajorSectionShell(className);

  return (
    <SectionBlock
      id={id}
      className={cn(
        "min-w-0 w-full",
        showToolCardChrome && bankToolCardClass("border-l-4 border-l-copilot-primary/50"),
        className
      )}
      eyebrow="Banking tools"
      title="Compare fit first, estimate cost next"
      contentClassName="mt-4 space-y-4 sm:mt-5 sm:space-y-5"
    >
      {showFeesCrossline ? (
        <p className={bodyClass}>
          The comparison tool scores how banks match your situation; the cost estimator turns the same fee categories as our{" "}
          <Link href={BANKING_FEES_PAGE_PATH} className="font-semibold text-link underline-offset-4 hover:underline">
            Banking fees & costs
          </Link>{" "}
          guide into monthly and yearly euro planning bands. Neither replaces each bank’s official price list.
        </p>
      ) : (
        <p className={bodyClass}>
          Use the comparison tool for editorial fit scores, then the cost estimator for monthly and yearly euro planning bands from our assumptions file — always confirm tariffs on each provider’s site.
        </p>
      )}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href={BANK_COMPARISON_TOOL_PATH} className={linkButtonClass}>
          Compare banks
        </Link>
        <Link href={BANKING_COST_ESTIMATOR_PATH} className={linkButtonClass}>
          Estimate banking costs
        </Link>
        <Link href={BANKING_FEES_PAGE_PATH} className={linkButtonClass}>
          Understand fees
        </Link>
      </div>
    </SectionBlock>
  );
}
