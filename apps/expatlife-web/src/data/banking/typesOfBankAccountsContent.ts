/**
 * Page-local editorial data for Types of Bank Accounts guide
 * (`/netherlands/money/banking/types-of-accounts/`).
 *
 * Account types and scenario personas live in {@link ./accountTypes.ts} for reuse.
 */

export type TypesMistakeCard = { readonly id: string; readonly title: string; readonly body: string };

export const typesOfBankAccountsMistakes: readonly TypesMistakeCard[] = [
  {
    id: "foreign-only",
    title: "Using only a foreign account and delaying Dutch setup",
    body: "Some flows work for a while, then you hit shops that only accept the Dutch online checkout, pay templates from work, or a landlord who wants a Dutch account number.",
  },
  {
    id: "premium-early",
    title: "Choosing a premium plan too early",
    body: "Bundled perks only save money if you actually use them. Start simpler and upgrade when your usage proves it.",
  },
  {
    id: "mix-zzp",
    title: "Mixing self-employed turnover with personal groceries",
    body: "It makes sales tax and income-tax paperwork messy. Your bank may also expect certain activity on a business product instead.",
  },
  {
    id: "ideal-assume",
    title: "Not checking local payment support",
    body: "Many Dutch online checkouts expect a local account behind them. Confirm your package supports what you need.",
  },
  {
    id: "joint-no-chat",
    title: "Opening a shared account without discussing responsibility",
    body: "Everyone named should understand who moves money, how borrowing on the account works, and what happens if someone leaves the household.",
  },
  {
    id: "ignore-fees",
    title: "Ignoring account and card fees",
    body: "Small monthly lines add up. Read cards, cash machines, and abroad rows on the official price list.",
  },
  {
    id: "digital-all",
    title: "Assuming one app account covers every long-term need",
    body: "Home loans, some employer setups, and shared accounts still often point to full-service Dutch products.",
  },
  {
    id: "no-backup",
    title: "No backup payment method during relocation",
    body: "Keep two ways to pay, for example a spare card or a cash plan, while verification or card delivery runs late.",
  },
];
