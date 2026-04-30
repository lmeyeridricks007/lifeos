/**
 * Shared editorial cost categories for Banking Fees & Costs and future tools.
 * No live amounts — framework copy only. Plain English for readers.
 */

export type BankingFeeCategoryRelatedLink = { readonly href: string; readonly label: string };

export type BankingFeeCategory = {
  readonly id: string;
  readonly title: string;
  /** What this fee type is (editorial). */
  readonly description: string;
  readonly whenItMatters: string;
  readonly howToReduce: string;
  readonly relatedLinks: readonly BankingFeeCategoryRelatedLink[];
};

const BEST = "/netherlands/money/banking/best-banks-expats/" as const;
const TRAD_DIG = "/netherlands/money/banking/traditional-vs-digital/" as const;
const FEES = "/netherlands/money/banking/fees/" as const;

export const bankingFeeCategories: readonly BankingFeeCategory[] = [
  {
    id: "monthly-account",
    title: "Monthly account fee",
    description: "A fixed charge each month for keeping the account open. Sometimes it is bundled with other services in one package.",
    whenItMatters: "For almost everyone — it is the first line people compare.",
    howToReduce: "Pick a package size that matches what you use; skip paid extras you do not need.",
    relatedLinks: [{ href: BEST, label: "Compare banks for expats" }],
  },
  {
    id: "debit-extra",
    title: "Debit card / extra card fees",
    description: "Costs for plastic, posting a card, replacing a card, or having a second card on the same account.",
    whenItMatters: "If you want a spare card, partner card, or separate business spending.",
    howToReduce: "Use one main card for daily spend; read the lines about replacement and delivery on the fee list.",
    relatedLinks: [{ href: TRAD_DIG, label: "Branch banks vs app banks" }],
  },
  {
    id: "credit",
    title: "Credit card fees",
    description: "Yearly or monthly fees for a credit card, plus interest if you do not pay the full balance.",
    whenItMatters: "Useful for travel, extra buyer protection, or paying later — not required for basic life in the Netherlands.",
    howToReduce: "Only add a credit card if you really use those benefits; pay in full to avoid interest.",
    relatedLinks: [],
  },
  {
    id: "atm",
    title: "Cash machine (ATM) fees",
    description: "What your bank charges for taking out cash in the Netherlands and abroad, plus any fee from the machine owner.",
    whenItMatters: "If you still use cash a lot or travel outside the euro area.",
    howToReduce: "Use card payments when you can; use your bank’s machines where possible; read the foreign cash section of the fee list.",
    relatedLinks: [{ href: `${FEES}#atm-cards`, label: "Cash machines & cards on this page" }],
  },
  {
    id: "fx",
    title: "Changing foreign currency",
    description: "The hidden part of the price when you spend or send in another currency — often through the exchange rate, not only a visible fee.",
    whenItMatters: "When you travel, buy from foreign websites, or send money in another currency.",
    howToReduce: "Compare how much money arrives in the end; for large or regular sends, also check a dedicated transfer service.",
    relatedLinks: [{ href: `${FEES}#transfers-fx`, label: "Sending money abroad on this page" }],
  },
  {
    id: "intl-transfer",
    title: "International transfer fees",
    description: "Fees for sending money to another country, sometimes extra bank-in-the-middle charges on certain routes.",
    whenItMatters: "Sending savings home, help to family, or paying a bill outside the Netherlands.",
    howToReduce: "Use the right payment type (euro inside Europe is different from many other cases); compare a few providers for money received.",
    relatedLinks: [{ href: "/netherlands/money/banking/how-payments-work/", label: "How payments work in the Netherlands" }],
  },
  {
    id: "instant",
    title: "Faster or special payment fees",
    description: "Optional fees when you want same-day or priority payments, or less common payment types.",
    whenItMatters: "When timing is urgent or you use less common payment channels.",
    howToReduce: "Group non-urgent payments; use standard speed when the other side agrees.",
    relatedLinks: [],
  },
  {
    id: "premium-plans",
    title: "Paid upgrade plans",
    description: "Higher monthly plans that bundle extra cards, insurance-style perks, or higher limits.",
    whenItMatters: "When you hit free limits or want perks you would otherwise pay for separately.",
    howToReduce: "Every few months, check whether you still use the paid features; step down if not.",
    relatedLinks: [],
  },
  {
    id: "paper",
    title: "Paper post and admin fees",
    description: "Small charges for paper statements, archives, or manual services.",
    whenItMatters: "Less common if you stay fully online — still appears on some fee lists.",
    howToReduce: "Switch to online statements; keep your own copies of important letters.",
    relatedLinks: [],
  },
  {
    id: "business-zzp",
    title: "Business / ZZP account fees",
    description: "Separate business pricing: monthly fee, number of payments included, and software add-ons.",
    whenItMatters: "When you invoice as ZZP, run a company, or mix business and private money.",
    howToReduce: "Read the business fee list, not the personal page; match the plan to your payment volume.",
    relatedLinks: [{ href: "/netherlands/work/tools/employment-type-scenario-tool/", label: "Employee vs freelancer tool" }],
  },
];
