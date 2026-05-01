import {
  BankingTotalCostBreakdown,
  type BankingTotalCostBreakdownProps,
} from "@/components/banking/BankingTotalCostBreakdown";

export type TransferCostBreakdownProps = BankingTotalCostBreakdownProps;

/** International transfer “total cost” stack — same surfaces as {@link BankingTotalCostBreakdown}. */
export function TransferCostBreakdown(props: TransferCostBreakdownProps) {
  return <BankingTotalCostBreakdown {...props} summaryRegionHeadingId={props.summaryRegionHeadingId ?? "transfer-cost-total-picture-heading"} />;
}
