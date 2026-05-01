"use client";

import type { BankComparisonResult } from "@/src/lib/tools/bank-comparison/types";
import { bankToolCardClass, BANK_TOOL_LABEL } from "./bankComparisonUi";

export type RecommendedBankingSetupCardProps = {
  /** Title + body only; bank comparison also sends `kind` for analytics — not rendered here. */
  setup: Pick<BankComparisonResult["recommendedSetup"], "title" | "body">;
  /** Overrides the small caps label above the title (default: “Suggested setup”). */
  eyebrow?: string;
  /** Optional stable id for the title heading (default: bank-recommended-setup-title). */
  titleId?: string;
  className?: string;
};

export function RecommendedBankingSetupCard({
  setup,
  eyebrow = "Suggested setup",
  titleId = "bank-recommended-setup-title",
  className,
}: RecommendedBankingSetupCardProps) {
  return (
    <section className={bankToolCardClass(className ?? "border-l-4 border-l-copilot-primary/60")} aria-labelledby={titleId}>
      <p className={BANK_TOOL_LABEL}>{eyebrow}</p>
      <h4 id={titleId} className="mt-2 text-xl font-normal text-copilot-text-primary">
        {setup.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{setup.body}</p>
    </section>
  );
}
