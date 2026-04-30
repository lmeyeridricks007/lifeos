import type { MoneyExpatTaxesFaqItemConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesFaq: readonly MoneyExpatTaxesFaqItemConfig[] = [
  {
    q: "Does this page replace Belastingdienst or a tax adviser?",
    a: "No. It is a scenario-led orientation guide. Belastingdienst and qualified advisers handle binding answers for your year and facts. Use this page to choose lanes and tools, then confirm anything important officially.",
  },
  {
    q: "Is the guidance here valid for every tax year?",
    a: "Rules, forms, and thresholds change by tax year. Treat this page as stable vocabulary and sequencing — for numbers and definitions tied to a year, use official sources (linked at the bottom) or ask a professional.",
  },
  {
    q: "What makes expat taxes in the Netherlands different from a “normal” employee year?",
    a: "Timing, borders, and paperwork density. You may have partial years, foreign income or accounts, partner or children in another system, or employer payroll that does not yet match your mental model. This page names the scenarios so you know what to read next — not so you self-diagnose a filing outcome.",
  },
  {
    q: "Is this page tax advice?",
    a: "No. It is scenario-led orientation with links to tools and official sources. For anything binding — thresholds, invitations to file, treaty relief — use Belastingdienst guidance or a qualified adviser.",
  },
  {
    q: "When should I use calculators vs official guidance?",
    a: "Use calculators for ranges, comparisons, and vocabulary (salary net, ruling scenarios, allowance estimates). Use official guidance when you need definitions, deadlines, or what you must declare. Use an adviser when mistakes would be expensive or your facts span countries.",
  },
  {
    q: "Do I need to think about Box 3 as an expat?",
    a: "Maybe. Box 3 is the return’s wealth-style bucket for many savings and investments. Expats often first encounter it when they still have meaningful accounts or investments abroad — treat our explanation as a prompt to check, not a personal determination.",
  },
  {
    q: "How does the 30% ruling change my expat tax picture?",
    a: "For eligible incoming employees, it can change how taxable wages are framed within rules that change over time and require employer involvement. Model scenarios in the 30% ruling calculator, then confirm with payroll or a tax professional — do not treat online examples as approval.",
  },
  {
    q: "What if I moved to or from the Netherlands mid-year?",
    a: "Partial years often add sections and evidence that a tidy twelve-month story does not cover — income may span countries, and registration and residency timing matter. Read the arrival/departure section here, then follow Belastingdienst guidance for your year or speak with an adviser if facts are split across borders.",
  },
  {
    q: "Can I be taxed twice on the same income?",
    a: "Cross-border situations can create double taxation risk or relief that depends on treaties and timing. Use the Double Tax Awareness Tool to surface questions, then confirm with official international guidance or an adviser.",
  },
  {
    q: "Where does the broad Netherlands Tax Guide for Expats fit?",
    a: "That guide is the full map of Dutch tax topics for expats. This page stays scenario-first — so you can jump to the angle that matches your life stage and then open tools or deeper reading without duplicating the whole curriculum.",
  },
] as const;
