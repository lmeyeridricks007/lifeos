"use client";

import { cn } from "@/lib/cn";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";

export type FXExplanationBlockProps = {
  /** Stable id for the section heading (TOC / `aria-labelledby`). */
  headingId?: string;
  className?: string;
};

/**
 * Plain-language FX education — same card shell as other bank tools (`bankToolCardClass`).
 */
export function FXExplanationBlock({ headingId = "tcc-fx-explanation-heading", className }: FXExplanationBlockProps) {
  return (
    <section className={cn(bankToolCardClass("space-y-3"), className)} aria-labelledby={headingId}>
      <h3 id={headingId} className="text-base font-normal text-copilot-text-primary md:text-lg">
        Why the exchange rate (FX) can matter more than the fee
      </h3>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        “FX” here means the exchange rate cost — how much you lose when euros become another currency. A small percent on the whole send can cost more than a “low fee” line. On €1,000, a 2% exchange gap is about €20 — similar to many wire fees, and it can be higher on less common routes.
      </p>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Banks and apps often show the fee in large type while the rate sits in smaller type. For planning, add fee and rate together: what really matters is how much spending power arrives after both.
      </p>
    </section>
  );
}
