import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BEST_BANK_ZZP_PATH } from "@/src/components/money/best-bank-zzp/bestBankZzpPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";

const HPW_PATH = "/netherlands/money/banking/how-payments-work/" as const;

export type BankingTransferScenarioLink = {
  readonly href: string;
  readonly label: string;
};

/**
 * Reusable international / cross-border transfer scenarios for guides and tools.
 * Not personalised advice; confirm providers and tax choices on official sites.
 */
export type BankingTransferScenario = {
  readonly id: string;
  readonly title: string;
  readonly recommendation: string;
  readonly why: string;
  readonly watchOuts: string;
  readonly relatedLinks: readonly BankingTransferScenarioLink[];
};

export const bankingTransferScenarios = [
  {
    id: "send-money-home-monthly",
    title: "Sending money home every month",
    recommendation:
      "On the same day, run your bank’s logged-in quote and a transfer service calculator for the same amount and recipient — choose whoever delivers more money, if you trust both to arrive on time.",
    why: "Doing it once is not enough — save the screen or PDF so you notice when pricing quietly drifts.",
    watchOuts: "“Free” plans can still earn money on the rate — re-check after subscription or plan changes.",
    relatedLinks: [
      { href: `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#how-to-compare`, label: "Five-step comparison checklist" },
      { href: BANKING_FEES_PAGE_PATH, label: "Banking fees & costs" },
    ],
  },
  {
    id: "one-large-transfer",
    title: "One large transfer (for example savings)",
    recommendation:
      "The week you send, get fresh quotes from your bank and at least one transfer service. For very large amounts, read cut-off times and whether the bank may need extra checks.",
    why: "A small difference in the exchange rate matters a lot when the number is big — one calm check beats a rushed tap.",
    watchOuts: "First-time sends can pause for safety checks — start before the date you owe someone.",
    relatedLinks: [
      { href: `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#how-to-compare`, label: "Five-step comparison checklist" },
      { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
    ],
  },
  {
    id: "freelancer-international-income",
    title: "Freelancers paid from other countries",
    recommendation:
      "Keep everyday Dutch money (rent, tax, local clients) on a Dutch account you already trust. Add one app or transfer service that matches the currencies you earn — download quotes your bookkeeper can file.",
    why: "When work money and private money stay separate, tax paperwork and questions from the bank are much easier.",
    watchOuts: "Some clients still want a familiar Dutch account on the invoice — confirm before you change where they pay.",
    relatedLinks: [
      { href: BEST_BANK_ZZP_PATH, label: "Freelancer banking (ZZP)" },
      { href: `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#transfer-shortlist`, label: "Transfer options on this page" },
    ],
  },
  {
    id: "paying-abroad-rent",
    title: "Paying rent or bills in another country",
    recommendation:
      "Pick the path where the landlord or supplier’s account is credited the highest amount after all fees and the exchange rate — sometimes that is your bank, sometimes a transfer service.",
    why: "Rent-sized amounts are decided by the rate, not by a “low fee” sticker.",
    watchOuts: "Wrong reference text or account details can delay or return the payment — double-check every field.",
    relatedLinks: [
      { href: HPW_PATH, label: "How payments work" },
      { href: `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#how-to-compare`, label: "Five-step comparison checklist" },
    ],
  },
  {
    id: "travel-spending",
    title: "Travel: card, app wallet, or cash",
    recommendation:
      "For your trip, pick one main approach (card, app wallet, or cash) with the gentlest total cost for how you spend — small purchases add up.",
    why: "Mixing methods without a plan is when surprise charges appear at ATMs and shop terminals.",
    watchOuts: "If a machine asks to charge you in euros while you are abroad, saying no and paying in local money is often cheaper.",
    relatedLinks: [
      { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital banks" },
      { href: BANKING_FEES_PAGE_PATH, label: "Banking fees & costs" },
    ],
  },
  {
    id: "family-support",
    title: "Supporting family abroad",
    recommendation:
      "For the same route every month, prefer a company with a clear calculator and saved recipient details — then run the comparison again every few months so cheap deals do not quietly end.",
    why: "Automation is fine once you trust the path — pricing still changes in the background.",
    watchOuts: "Intro rates can end — put a calendar note to compare again.",
    relatedLinks: [
      { href: CHEAPEST_BANK_ACCOUNTS_PATH, label: "Cheapest bank accounts" },
      { href: `${INTERNATIONAL_TRANSFERS_FROM_NL_PATH}#transfer-shortlist`, label: "Transfer options on this page" },
    ],
  },
] as const satisfies readonly BankingTransferScenario[];

export type BankingTransferScenarioId = (typeof bankingTransferScenarios)[number]["id"];
