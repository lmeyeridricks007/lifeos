"use client";

import Link from "next/link";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BANK_COMPARISON_TOOL_PATH } from "./bankingCostPageModel";

export type BankingCostNextStepsProps = {
  steps: readonly string[];
  className?: string;
};

export function BankingCostNextSteps({ steps, className }: BankingCostNextStepsProps) {
  if (!steps.length) return null;

  return (
    <section className={bankToolCardClass(className ?? "space-y-4")} aria-labelledby="banking-cost-next-steps">
      <h3 id="banking-cost-next-steps" className="text-base font-normal text-copilot-text-primary md:text-lg">
        Next-step checklist
      </h3>
      <ul className="list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
        {steps.map((c) => (
          <li key={c} className="break-words">
            {c}
          </li>
        ))}
      </ul>
      <p className="text-sm text-copilot-text-secondary">
        Guides:{" "}
        <Link href={BANKING_HUB_PATH} className="text-link hover:underline">
          Banking hub
        </Link>
        ,{" "}
        <Link href="/netherlands/money/banking/fees/" className="text-link hover:underline">
          {"Banking fees & costs"}
        </Link>
        ,{" "}
        <Link href={BANK_COMPARISON_TOOL_PATH} className="text-link hover:underline">
          Bank comparison tool
        </Link>
        .
      </p>
    </section>
  );
}
