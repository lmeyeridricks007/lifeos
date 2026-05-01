"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { bankToolCardClass, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { formatBankingCostRange } from "@/src/components/tools/banking-cost/bankingCostFormat";
import { listTransferCostChannels, type TransferCostInputs } from "@/src/lib/banking/transferCostEstimator";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { TransferChannelCostMiniVisual } from "./TransferChannelCostMiniVisual";

/** Fixed illustration only — same estimator bands as the tool, no live prices or named providers. */
const OVERPAY_EXAMPLE_INPUTS: TransferCostInputs = {
  amount: 1000,
  toCurrency: "USD",
  frequency: "occasional",
  method: "not_sure",
  priority: "balanced",
  speedPreference: "not_important",
};

const OVERPAY_EXAMPLE_CHANNELS = listTransferCostChannels(OVERPAY_EXAMPLE_INPUTS);

export type TransferOverpayInternationalSectionProps = {
  className?: string;
};

/**
 * Editorial “why overpay” block plus a static €1,000 → USD illustration across the three path types.
 */
export function TransferOverpayInternationalSection({ className }: TransferOverpayInternationalSectionProps) {
  const guideWhyHref = `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#why-overpay-transfers`;

  return (
    <section
      id="why-overpay-international-transfers"
      className={cn("scroll-mt-28 space-y-5 md:scroll-mt-32", className)}
      aria-labelledby="tcc-why-overpay-heading"
    >
      <div className={bankToolCardClass("space-y-4")}>
        <h3 id="tcc-why-overpay-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Why people overpay for international transfers
        </h3>
        <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-copilot-text-secondary">
          <p>
            <span className="text-copilot-text-primary">People notice the fee first.</span> A clear “€5 wire” line is easy to compare. The exchange rate is often smaller on the screen — but on many sends it changes how much money really arrives.
          </p>
          <p>
            <span className="text-copilot-text-primary">A weak rate can sit next to a low fee.</span> The app may still say “low fee” while the rate is off to the side or in small print. The full story is fee plus rate — not the fee alone.
          </p>
          <p>
            <span className="text-copilot-text-primary">Easy choices are not always the cheapest.</span> Saved contacts, a familiar login, or “I already use this bank” are real reasons to pick a path — they are just not the same as cheapest for a large or repeated send. When the amount matters, compare two quotes on the same day before you confirm.
          </p>
        </div>
        <p className="text-xs text-copilot-text-muted">
          Longer read:{" "}
          <Link href={guideWhyHref} className="font-medium text-brand-600 hover:underline">
            Why people overpay (international transfers guide)
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-normal text-copilot-text-primary md:text-base">Example only: €1,000 to USD (three path types)</h4>
        <p className="max-w-3xl text-xs leading-relaxed text-copilot-text-muted md:text-sm">
          Same simple ranges as this calculator — not live prices, not a ranking, and not a claim about any one company.
        </p>
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-3" role="group" aria-label="Illustrative cost bands for one thousand euros to US dollars across three path types">
          {OVERPAY_EXAMPLE_CHANNELS.map((ch) => (
            <article key={ch.channel} className={bankToolCardClass("flex min-w-0 flex-col gap-2.5 break-words")}>
              <div>
                <p className={BANK_TOOL_LABEL}>Path type</p>
                <p className="mt-1 text-base font-normal text-copilot-text-primary">{ch.label}</p>
              </div>
              <TransferChannelCostMiniVisual
                compact
                sendAmountEur={OVERPAY_EXAMPLE_INPUTS.amount}
                totalCostEurLow={ch.totalCostEurLow}
                totalCostEurHigh={ch.totalCostEurHigh}
                feeEurLow={ch.feeEurLow}
                feeEurHigh={ch.feeEurHigh}
                fxCostEurLow={ch.fxCostEurLow}
                fxCostEurHigh={ch.fxCostEurHigh}
                receivedValueEurLow={ch.receivedValueEurLow}
                receivedValueEurHigh={ch.receivedValueEurHigh}
                pathLabel={ch.label}
              />
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                <span className="font-normal text-copilot-text-primary">Send (example): </span>€1,000
              </p>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                <span className="font-normal text-copilot-text-primary">Total cost in our model: </span>
                {formatBankingCostRange(ch.totalCostEurLow, ch.totalCostEurHigh)}
              </p>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                <span className="font-normal text-copilot-text-primary">Exchange-rate part in our model: </span>
                {formatBankingCostRange(ch.fxCostEurLow, ch.fxCostEurHigh)}
              </p>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                <span className="font-normal text-copilot-text-primary">Value after our model costs (rough euros): </span>
                {formatBankingCostRange(ch.receivedValueEurLow, ch.receivedValueEurHigh)}
              </p>
              <p className="border-t border-copilot-primary/10 pt-2 text-[11px] leading-snug text-copilot-text-muted">Example only — confirm on each provider’s own screen.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
