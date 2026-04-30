import { TAX_RETURN_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";

const R = { ...taxGuideRoutes, canonical: TAX_RETURN_NL_PATH } as const;

export type MoneyTaxReturnPreparationFlowStep = {
  id: string;
  title: string;
  body: string;
  links: readonly { href: string; label: string }[];
};

/** Six-step visual prep sequence — orientation, not filing instructions. */
export const moneyTaxReturnPreparationFlow: readonly MoneyTaxReturnPreparationFlowStep[] = [
  {
    id: "prep-context",
    title: "Identify filing context",
    body: "Clarify which tax year you are preparing for, whether you are in scope from letters or life changes, and whether your year is mostly salary-only or wider — before you chase documents randomly.",
    links: [
      { href: R.howTaxesWorkInNl, label: "How taxes work in the Netherlands" },
      { href: R.taxResidencyNl, label: "Tax residency in the Netherlands" },
      { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands" },
    ],
  },
  {
    id: "prep-documents",
    title: "Collect salary and personal documents",
    body: "Gather jaaropgave, payslips when months look odd, identity/admin basics, and anything your employer or year already surfaced — keep it folder-first, not forum-first.",
    links: [
      { href: R.payslip, label: "Payslip decoder" },
      { href: R.salaryNet, label: "Dutch salary net calculator" },
      { href: R.taxGuideForExpats, label: "Netherlands Tax Guide for Expats" },
    ],
  },
  {
    id: "prep-household",
    title: "Check household and allowance topics",
    body: "Separate return household questions from toeslagen (allowances) — similar words, different portals. Note income moves that might affect allowance estimates later.",
    links: [
      { href: "#partner-family-allowances", label: "Partner, family & allowances (this page)" },
      { href: R.healthcare, label: "Healthcare allowance estimator" },
      { href: R.childcare, label: "Childcare cost estimator" },
    ],
  },
  {
    id: "prep-assets",
    title: "Review assets, Box 3, and foreign items",
    body: "List accounts, investments, and property (including abroad) in plain language first, then read official Box / international topics calmly — especially when more than one country could ask questions.",
    links: [
      { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands" },
      { href: R.doubleTax, label: "Double tax awareness tool" },
      { href: R.howTaxesWorkInNl, label: "How taxes work (boxes overview)" },
    ],
  },
  {
    id: "prep-file-help",
    title: "File or get help",
    body: "When you are ready for official steps, use Belastingdienst / DigiD guidance for the year you file. Paid help is optional — useful when facts are cross-border, stacked, or high-stakes.",
    links: [
      { href: "#official-sources", label: "Official sources (below)" },
      { href: R.taxAdvisorsExpats, label: "When to consider tax help (guide)" },
      { href: R.taxAdvisorsGuide, label: "Netherlands taxes hub" },
    ],
  },
  {
    id: "prep-assessment",
    title: "Review final assessment, refund, or payment",
    body: "After filing, watch for the assessment outcome — refund, top-up, or roughly neutral are all normal shapes depending on facts. Keep letters and a simple note of what you declared for your records.",
    links: [
      { href: R.howTaxesWorkInNl, label: "How taxes work (payroll vs return)" },
      { href: R.taxGuideForExpats, label: "Netherlands Tax Guide for Expats" },
    ],
  },
];
