import type { MoneyThirtyRulingFaqItemConfig } from "./moneyThirtyRulingContent.types";

export const moneyThirtyRulingFaq: readonly MoneyThirtyRulingFaqItemConfig[] = [
  {
    q: "What are the 2026 salary norms for the 30% ruling?",
    a: "For tax year 2026, Belastingdienst publishes minimum taxable salary norms of more than €48,013/year (standard) and more than €36,497/year (under 30 with qualifying master's), with a salary cap of €262,000/year for the facility calculation and a maximum untaxed allowance of €78,600/year at 30% for a full year at the cap. Role exceptions and indexation can apply — confirm your category on Belastingdienst and use the 30% ruling calculator with tax year 2026 selected.",
  },
  {
    q: "What is the 30% rate in 2026 vs 2027?",
    a: "For 2026 payroll the statutory facility rate remains 30% within caps and eligibility rules. The government has stated a reduction to 27% from 1 January 2027 for most people who entered the scheme after 2023 — that 27% rate is not yet in force. Use the 30% ruling calculator’s 2027 preview for planning only; confirm current law on Belastingdienst for your tax year.",
  },
  {
    q: "What happened to partial foreign taxpayer status with the 30% ruling?",
    a: "Partial foreign taxpayer treatment for Box 2 and Box 3 linked to the expat scheme generally ended for 2025 income tax returns onward. Transitional arrangements may apply only through 2026 for people who used the option before 2024 — verify on Belastingdienst whether any transition affects your filing.",
  },
  {
    q: "What is the 30% ruling?",
    a: "A Dutch tax facility (expat scheme) for eligible incoming employees that can allow part of compensation to be treated as a tax-free allowance within year-specific rules — implemented through employer payroll.",
  },
  {
    q: "Who can qualify for the 30% ruling?",
    a: "Official tests look at incoming employee facts, expertise, recruitment distance / residence history, salary norms for the tax year, and timing. Use the calculator as a structured prompt, then confirm with HR and Belastingdienst guidance.",
  },
  {
    q: "Is the 30% ruling automatic?",
    a: "No. Eligibility must line up with rules, and employers must apply the facility correctly in payroll.",
  },
  {
    q: "Does my employer have to grant the full 30%?",
    a: "Not necessarily. Employer policy and agreement can affect how compensation is structured; some setups apply less than the headline maximum.",
  },
  {
    q: "How does it affect net salary?",
    a: "It can change the taxable slice of your package, which feeds withholding — exact net outcomes depend on full package facts and payroll. Use ruling and salary net tools together as estimates.",
  },
  {
    q: "Can it appear on my payslip?",
    a: "Often yes, but line labels vary by employer and payroll vendor — use the payslip decoder once you have a real slip.",
  },
  {
    q: "What happens if rules change?",
    a: "Parameters can update by tax year. Re-read official pages for the year that applies and re-run tools with the matching tax year selected.",
  },
  {
    q: "Should I use a tax advisor?",
    a: "Optional. Many people align facts with HR and official guidance first. Scoped help can save time when eligibility, cross-border income, or complex packages stay unclear — see the Tax & relocation help section.",
  },
  {
    q: "What is the difference between eligibility and the benefit amount?",
    a: "Eligibility asks whether official tests are met for your situation and tax year. Benefit amount is what payroll actually applies — shaped by caps, months, package, and employer policy, which can be less than the theoretical maximum.",
  },
] as const;
