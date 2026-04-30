import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";

export const BANKING_HUB_PATH = "/netherlands/money/banking/" as const;

/** Unique photorealistic hero for this hub (not shared with tools or best-banks pages). */
export const bankingHubHeroImage = {
  src: "/images/heroes/netherlands-money-banking-hub-hero.png",
  alt: "Expat at a bright desk in the Netherlands reviewing banking on a laptop, passport and generic payment card on the table, daylight from a canal-house window — editorial photo for ExpatCopilot banking hub",
  width: 1536,
  height: 1024,
} as const;

export type BankingHubGuideLink = {
  href: string;
  title: string;
  description: string;
};

export const bankingHubPageModel = {
  path: BANKING_HUB_PATH,
  publishDate: "2026-04-28",
  seo: {
    title: "Banking in the Netherlands | ExpatCopilot",
    description:
      "Hub for expat banking in the Netherlands: account setup context, best-banks comparison, and links to tools and tax orientation.",
    keywords: [
      "banking Netherlands expats",
      "Dutch bank account",
      "Netherlands banking hub",
      "expat banking Netherlands",
    ] as const,
  },
  hero: {
    eyebrow: "Netherlands · Money",
    pageTitle: "Banking in the Netherlands",
    subtitle:
      "Editorial starting point for Dutch everyday accounts (betaalrekening), paying online and by bank transfer, and how banking sits next to taxes and self-employed work. Fees and rules change — confirm products on each provider’s official site.",
    contextChips: ["Hub", "Accounts", "Payments", "Planning only"] as const,
    bullets: [
      "Skim guides in order — types of accounts and how payments work before fees and best-banks shortlists.",
      "Pair banking with money tools and the tax guide when you model salary, rent, and self-employed cashflow.",
      "Nothing here replaces a bank’s product page — use our checklists, then verify terms on the official site.",
    ] as const,
    primaryCta: { href: "/netherlands/money/banking/best-banks-expats/", label: "Best banks for expats" } as const,
    secondaryCta: { href: "/netherlands/money/banking/types-of-accounts/", label: "Types of accounts" } as const,
  },
  sectionNav: [
    { href: "#banking-guides", label: "Guides" },
    { href: "#banking-glossary-hub", label: "Glossary" },
  ] satisfies MovePillarTocItem[],
  guideLinks: [
    {
      href: "/netherlands/money/banking/types-of-accounts/",
      title: "Types of bank accounts",
      description:
        "What everyday, savings, joint, student, business, multi-currency, and card products mean — before best-banks or traditional-vs-digital comparisons.",
    },
    {
      href: "/netherlands/money/banking/how-payments-work/",
      title: "How paying in the Netherlands works",
      description:
        "Account numbers, paying online through your bank, transfers, automatic bills, cards in shops, payment requests, and how salary, rent, and utilities usually work — in plain English.",
    },
    {
      href: "/netherlands/money/banking/fees/",
      title: "Banking fees & costs",
      description:
        "What Dutch banks often charge for — pair with account types, then read each bank’s official price list.",
    },
    {
      href: "/netherlands/money/banking/traditional-vs-digital/",
      title: "Traditional vs digital banks",
      description:
        "High-street banks versus app-first banks, salary and rent on an everyday account, and paying in shops — pair with how payments work for transfer and checkout detail.",
    },
    {
      href: "/netherlands/money/banking/best-banks-expats/",
      title: "Best banks for expats",
      description:
        "Compare onboarding, fees, English support, and typical trade-offs — editorial best banks for expats shortlist, then confirm on each bank’s site.",
    },
    {
      href: "/netherlands/open-bank-account-netherlands/",
      title: "Open a bank account in the Netherlands",
      description: "Documents, BSN timing, and what employers and landlords often expect.",
    },
    {
      href: "/netherlands/services/banks/",
      title: "Banks directory",
      description: "Broader provider list and category context beyond a short editorial comparison.",
    },
    {
      href: "/netherlands/money/tools/",
      title: "Money tools",
      description: "Calculators and planners that sit next to banking decisions (salary, cost of living, offers).",
    },
    {
      href: "/netherlands/money/tax-guide-for-expats/",
      title: "Tax guide for expats",
      description: "When payroll, withholding, and your account cashflow meet Dutch tax basics — planning only.",
    },
  ] satisfies readonly BankingHubGuideLink[],
  glossary: {
    id: "banking-glossary-hub",
    title: "Banking glossary",
    subtitle:
      "Short definitions for Dutch terms used across these guides — pair with how payments work for account numbers and checkout, then types of accounts for product names.",
  },
} as const;
