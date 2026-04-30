import type { MoneyTaxResidencyFaqItemConfig } from "./moneyTaxResidencyTypes";

export const moneyTaxResidencyFaq: readonly MoneyTaxResidencyFaqItemConfig[] = [
  {
    q: "What is tax residency in the Netherlands?",
    a: "In everyday terms, it is about being treated as resident for tax purposes for a period — which can influence what you may need to report and how you think about filing. The exact determination is fact-specific and should be confirmed with Belastingdienst guidance or an adviser.",
  },
  {
    q: "Is tax residency the same as having a residence permit?",
    a: "No. A residence permit is about immigration / right to stay. Tax residency is a tax-law concept that can depend on a bundle of facts and timing. The two often move together in real life but are not interchangeable labels.",
  },
  {
    q: "Does having a BSN make me tax resident?",
    a: "A BSN is a citizen service number used across Dutch admin. It is important, but it is not a magic answer to every tax residency or filing question — especially with foreign income, assets abroad, or multi-country years.",
  },
  {
    q: "What if I moved to the Netherlands mid-year?",
    a: "Transition years often need extra organisation: overlap income, registration timing, first payslips, and sometimes foreign ties. The Expat Taxes guide and official immigration/emigration return pages are sensible next reads — consider professional help if facts are tangled.",
  },
  {
    q: "Do foreign assets matter for Dutch tax residency?",
    a: "They can matter for what you need to understand in a Dutch return context and Box discussions depending on facts. Do not assume “only Dutch accounts count” — use official Box / international guidance.",
  },
  {
    q: "Can I be tax resident in two countries?",
    a: "People sometimes face overlapping questions from two countries in the same year. Treaties and specific rules may apply — this page does not decide outcomes; use awareness tools and then official sources or an adviser.",
  },
  {
    q: "How does remote work affect tax residency?",
    a: "Where you live, where you work days, and employer / payroll location can all be part of the picture. Remote work is not automatically simple — map facts and read international guidance when more than one country is involved.",
  },
  {
    q: "When should I speak to a tax advisor?",
    a: "Consider it when you have cross-border income, foreign assets, arrival or departure timing, household split across countries, or uncertainty after reading official pages — a scoped review is often enough.",
  },
] as const;
