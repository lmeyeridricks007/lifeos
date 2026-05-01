import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";

export type BankingFreelancerScenarioLink = {
  readonly href: string;
  readonly label: string;
};

/**
 * Illustrative freelancer / ZZP setups — same shape drives the ZZP banking guide scenario accordion.
 * Not personalised advice; confirm bank and tax choices on official sites and with professionals.
 */
export type BankingFreelancerScenario = {
  readonly id: string;
  readonly title: string;
  readonly recommendedSetup: string;
  readonly why: string;
  readonly watchOuts: string;
  readonly relatedLinks: readonly BankingFreelancerScenarioLink[];
};

export const bankingFreelancerScenarios = [
  {
    id: "side-hustle",
    title: "Side income on top of a job",
    recommendedSetup:
      "If the amounts are small, one bank account can be enough if you keep a clear note of what money is for work — plan with your accountant when to add a business account before invoices and sales tax paperwork get messy.",
    why: "Keeps things simple while you try the idea — don’t wait so long that work money and private money get mixed up.",
    watchOuts: "Contracts and when you register for sales tax still matter for side work — “small” does not mean tax rules go away.",
    relatedLinks: [{ href: "/netherlands/money/tax-guide-for-expats/", label: "Tax guide for expats" }],
  },
  {
    id: "full-time-zzp",
    title: "Full-time self-employed (ZZP)",
    recommendedSetup:
      "Use a personal account for private life and a Dutch business account whose statements your bookkeeper can use without extra cleanup.",
    why: "A clear split helps with steady client income, sales tax, and invoices that show a normal Dutch bank name.",
    watchOuts: "Costs often go up when you add extra cards or people — check the business fee page again after big changes with clients.",
    relatedLinks: [{ href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" }],
  },
  {
    id: "international-freelancer",
    title: "Clients outside the euro zone",
    recommendedSetup:
      "Keep a Dutch account for rent, local bills, and clients who pay in euros, plus a separate app for other currencies that you have checked fits how you plan to use it.",
    why: "You get fewer bad surprises on exchange rates while Dutch companies still see a familiar Dutch account number.",
    watchOuts: "Read each app’s limits and timing — the cheapest option is not the same for every country and currency.",
    relatedLinks: [{ href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" }],
  },
  {
    id: "creative-freelancer",
    title: "Creative work, uneven income",
    recommendedSetup:
      "Use payment links and receipt photos in an app you like, plus a simple Dutch main account for rent and money you set aside for tax.",
    why: "When income goes up and down, year-end is easier when private money and work money already live in separate places.",
    watchOuts: "Small monthly fees add up — check bank add-ons and creative tools every few months.",
    relatedLinks: [{ href: BANKING_FEES_PAGE_PATH, label: "Banking fees" }],
  },
  {
    id: "consultant-contractor",
    title: "Consulting or large invoices",
    recommendedSetup:
      "Use a business account with clear downloads (and shared access if someone helps with admin); keep personal savings off the work account.",
    why: "Large, less frequent payments need a clear trail that clients and checks can follow without digging through personal cards.",
    watchOuts: "Large incoming payments can trigger bank questions — know how to reach the bank before a client deadline.",
    relatedLinks: [{ href: "/netherlands/work/tools/employment-type-scenario-tool/", label: "Employment type scenario tool" }],
  },
] as const satisfies readonly BankingFreelancerScenario[];
