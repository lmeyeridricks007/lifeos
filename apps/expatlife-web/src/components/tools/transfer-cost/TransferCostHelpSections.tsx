"use client";

import { Calculator, Globe, PiggyBank, Wallet } from "lucide-react";
import { CardLink } from "@/components/ui/card-link";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";

/**
 * Editorial help blocks for the transfer cost tool — no live pricing or ranking.
 */
export function TransferCostHelpSections() {
  return (
    <div className="space-y-8">
      <section className={bankToolCardClass("space-y-3")} aria-labelledby="tcc-help-cheapest-heading">
        <h3 id="tcc-help-cheapest-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Cheapest way to send money abroad
        </h3>
        <p className="text-sm leading-relaxed text-copilot-text-secondary">
          The cheapest option is the one where the most money reaches the other person after all costs — send fee, exchange rate, and any fee on their side — for the same day and amount. Log in to each option you like, get a quote in their currency, and compare what arrives. If you send often, check again from time to time; offers change.
        </p>
        <p className="text-sm leading-relaxed text-copilot-text-secondary">
          Many people keep a Dutch bank for salary and bills, and use a transfer app when the quote is better for one route. That is a common pattern, not a rule — always compare the quote you see when you send.
        </p>
      </section>

      <section className={bankToolCardClass("space-y-3")} aria-labelledby="tcc-help-bank-wise-revolut-heading">
        <h3 id="tcc-help-bank-wise-revolut-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Bank vs Wise vs Revolut (simple picture)
        </h3>
        <p className="text-sm leading-relaxed text-copilot-text-secondary">
          These names stand for three common product types. None of them wins for every person or every country pair.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          <li>
            <span className="text-copilot-text-primary">Dutch bank (branch or online brand)</span> — Strong for salary, rent, and daily life in the Netherlands. International sends often show a send fee and an exchange rate on the same screen. Good when you want one main bank for most money tasks.
          </li>
          <li>
            <span className="text-copilot-text-primary">Wise (transfer-focused)</span> — Built around clear quotes for money across borders; fees and rates are usually easy to see. Your route, speed, and how you pay in can still change the final number.
          </li>
          <li>
            <span className="text-copilot-text-primary">Revolut (app with many features)</span> — Often mixes spending, pots, and transfers with plans or limits. Exchange and international pricing can depend on your plan, day of week, and amount — read the in-app quote each time.
          </li>
        </ul>
        <p className="text-xs leading-snug text-copilot-text-muted">
          We do not rank these products here. Use your own quotes and the checklist below before you send.
        </p>
      </section>

      <section className={bankToolCardClass("space-y-3")} aria-labelledby="tcc-help-checklist-heading">
        <h3 id="tcc-help-checklist-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          What to check before sending money
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          <li>Recipient details are correct (name spelling, IBAN or account number, payment reference if needed).</li>
          <li>The screen shows how much the recipient gets in their money — not only how many euros you send.</li>
          <li>How you fund the send (card vs bank transfer) and how fast you need it — faster can cost more.</li>
          <li>Weekend or holiday pricing if your provider uses different rates then.</li>
          <li>Limits and ID checks — large first sends may need extra time.</li>
          <li>How you would get help or trace a payment if something goes wrong.</li>
        </ul>
      </section>

      <section className={bankToolCardClass("space-y-3")} aria-labelledby="tcc-help-fx-simple-heading">
        <h3 id="tcc-help-fx-simple-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Exchange rate (FX) in simple words
        </h3>
        <p className="text-sm leading-relaxed text-copilot-text-secondary">
          When euros turn into another currency, you do not get the headline “market” number from the news. You get the rate your bank or app offers for your payment. The gap between that offer and a fair reference rate is often a big part of the total cost — sometimes bigger than the send fee line.
        </p>
        <p className="text-sm leading-relaxed text-copilot-text-secondary">
          Example: if the exchange cost were about 1% on €1,000, that is about €10 on the conversion alone — before any separate send fee. Small gaps add up on large or repeated sends.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="tcc-help-guides-heading">
        <h3 id="tcc-help-guides-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
          Guides and tools
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardLink
            href={BANK_COMPARISON_TOOL_PATH}
            title="Bank comparison tool"
            description="Which Dutch bank may fit daily life — scores and trade-offs, not transfer prices."
            icon={<Calculator className="h-5 w-5 text-brand-600" aria-hidden />}
          />
          <CardLink
            href={BANKING_COST_ESTIMATOR_PATH}
            title="Banking cost estimator"
            description="Rough monthly and yearly costs for accounts, cards, and cash machines."
            icon={<PiggyBank className="h-5 w-5 text-brand-600" aria-hidden />}
          />
          <CardLink
            href={INTERNATIONAL_TRANSFERS_FROM_NL_PATH}
            title="International transfers from the Netherlands"
            description="Fees, exchange rates, timing, and checklists for sending money abroad from NL."
            icon={<Globe className="h-5 w-5 text-brand-600" aria-hidden />}
          />
          <CardLink
            href={CHEAPEST_BANK_ACCOUNTS_PATH}
            title="Cheapest bank accounts"
            description="How to think about low-cost Dutch accounts — total cost, not one magic winner."
            icon={<Wallet className="h-5 w-5 text-brand-600" aria-hidden />}
          />
        </div>
      </section>
    </div>
  );
}
