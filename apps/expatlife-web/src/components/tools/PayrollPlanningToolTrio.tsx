import { TaxClusterToolsSection } from "@/src/components/money/tax-cluster/TaxClusterToolsSection";
import type { TaxClusterToolId } from "@/src/components/money/tax-cluster/taxClusterToolsConfig";

export type PayrollPlanningToolTrioHighlight = "payslip" | "net" | "30ruling";

type PayrollPlanningToolTrioProps = {
  /** Subtly emphasizes one card for the current page context. */
  highlight?: PayrollPlanningToolTrioHighlight;
  className?: string;
};

function trioHighlightToCluster(h?: PayrollPlanningToolTrioHighlight): TaxClusterToolId | undefined {
  if (!h) return undefined;
  if (h === "net") return "salary";
  if (h === "30ruling") return "ruling";
  return "payslip";
}

/**
 * Full Money → Tax cluster strip (six tools) with optional highlight on salary / 30% ruling / payslip pages.
 */
export function PayrollPlanningToolTrio({ highlight, className }: PayrollPlanningToolTrioProps) {
  return <TaxClusterToolsSection current={trioHighlightToCluster(highlight)} className={className} showGuideLink />;
}
