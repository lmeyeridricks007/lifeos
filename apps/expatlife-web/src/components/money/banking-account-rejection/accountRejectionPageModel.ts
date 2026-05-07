import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { BANK_COMPARISON_TOOL_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  BANKING_ACCOUNT_REJECTION_PATH,
  bankingRejectionAtAGlance,
  bankingRejectionFaq,
  bankingRejectionOfficialSources,
  bankingRejectionRelatedGuides,
} from "@/src/data/banking/accountRejection";

export { BANKING_ACCOUNT_REJECTION_PATH } from "@/src/data/banking/accountRejection";

/** Unique photoreal hero for this guide and for Open Graph / Twitter previews. */
export const accountRejectionHeroImage = {
  src: "/images/heroes/netherlands-money-banking-account-rejection-hero.png",
  alt: "Person at a desk in the Netherlands with a laptop, passport, and papers — photo for the bank account rejection guide on ExpatCopilot",
  width: 1536,
  height: 1024,
} as const;

export const accountRejectionPageModel = {
  path: BANKING_ACCOUNT_REJECTION_PATH,
  publishDate: "2026-05-01",

  heroImage: accountRejectionHeroImage,

  seo: {
    title: "Bank Account Rejected in the Netherlands | ExpatCopilot",
    description:
      "Dutch bank account rejected, slow, or stuck? Simple steps for expats: see where you stand, fix papers and BSN timing, what to do next, and short ways to pay — not legal advice; each bank decides for itself.",
    keywords: [
      "bank account rejected netherlands expats",
      "dutch bank account application rejected",
      "open bank account without bsn netherlands",
      "bank account application stuck netherlands",
      "expat banking rejection netherlands",
      "digital bank rejected netherlands",
      "dutch bank onboarding delayed",
    ] as const,
  },

  sectionNav: [
    { href: "#quick-answer-first", label: "What to do first" },
    { href: "#application-situation", label: "Rejected, delayed, or stuck?" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#why-rejected", label: "Why it gets stuck" },
    { href: "#documents-checklist", label: "Documents to check" },
    { href: "#bsn-address-residence", label: "BSN, address & permits" },
    { href: "#risk-compliance", label: "Extra bank questions" },
    { href: "#recovery-plan", label: "Recovery plan" },
    { href: "#workarounds", label: "Short-term options" },
    { href: "#what-not-to-do", label: "What not to do" },
    { href: "#misunderstandings", label: "Misunderstandings" },
    { href: "#recommended-alternatives", label: "Options to compare" },
    { href: "#related-tools", label: "Related guides" },
    { href: "#banking-glossary", label: "Glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Bank Account Rejected in the Netherlands",
    subtitle:
      "For expats whose Dutch bank account was rejected, slow, blocked, or stuck. We explain common reasons, what to check, and what to try next — in plain language.",
    contextChips: ["Practical guide", "Not legal or tax advice", "Each bank decides alone", "We cannot promise approval"] as const,
    editorialPrinciple:
      "Banks change their rules and which papers they want. This page is general help only. Your bank’s latest email, app messages, and official website are the real rules.",
    trustLine:
      "We describe problems expats often see in the Netherlands. Your case may be different. If one bank says no, another bank may still say yes.",
    trustNotAdvice:
      "ExpatCopilot is not a lawyer or tax adviser. Use this page to learn the basics. For big money or legal choices, talk to your bank, a professional adviser, or an official source.",
    trustProviderDecisions:
      "Each bank has its own rules and safety checks. We cannot tell you what a bank will decide for you, your product, or how long it will take.",
    trustNoGuarantee:
      "We do not promise you will be approved, reviewed faster, or accepted at another bank. Ads about “easy” sign-up still use the same safety checks by law.",
    bullets: [
      "See common reasons a bank says no or waits",
      "Check your papers, BSN, address, ID, and what you typed in the form before you apply again",
      "Plan what to do if you soon need pay, rent, or iDEAL",
      "Look at other banks calmly — without rushing into a bad choice",
    ] as const,
    primaryCta: { href: "#quick-answer-first", label: "See what to do first" } as const,
    secondaryCta: { href: "#recommended-alternatives", label: "Compare alternative options" } as const,
    heroQuickLinks: [
      { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Best banks for expats", href: BEST_BANKS_EXPATS_PATH },
      { label: "Traditional vs digital", href: "/netherlands/money/banking/traditional-vs-digital/" },
      { label: "How payments work", href: "/netherlands/money/banking/how-payments-work/" },
    ] as const,
  },

  atAGlance: bankingRejectionAtAGlance,

  situationDecision: {
    id: "application-situation",
    eyebrow: "Your case",
    title: "Was your application rejected, slow, or just stuck?",
    subtitle:
      "Pick the card that fits what you see in email, the bank app, or when you talk to support. Then use “What to do first” above. Read the rest of the page in any order that helps you.",
  },

  quickAnswer: {
    id: "quick-answer-first",
    eyebrow: "Quick answer",
    title: "What to do first",
    subtitle: "Five simple steps when you feel stuck. Read the rest of the page when you have time.",
  },

  whyRejected: {
    id: "why-rejected",
    eyebrow: "Common causes",
    title: "Why bank applications get rejected or slow",
    subtitle:
      "Banks do not publish one simple list for everyone. The cards below are common causes — use them as a checklist. Your bank may use different words.",
  },

  documents: {
    id: "documents-checklist",
    eyebrow: "Checklist",
    title: "Papers and ID to check",
    subtitle: "Go line by line before you upload again or call the bank.",
    checklistTitle: "ID and papers checklist",
  },

  bsnBlock: {
    id: "bsn-address-residence",
    eyebrow: "Timing and permits",
    title: "BSN, address, stay permit, and timing",
    subtitle: "How Dutch paperwork timing links to what banks can check.",
  },

  riskBlock: {
    id: "risk-compliance",
    eyebrow: "Bank checks",
    title: "Extra questions about risk and where money comes from",
    subtitle: "Why banks sometimes ask more — this is normal, not an accusation. Not legal advice.",
  },

  recovery: {
    id: "recovery-plan",
    eyebrow: "Step by step",
    title: "What to do next: recovery plan",
    subtitle: "A calm order you can repeat while you fix the main problem.",
    leadIn:
      "First look at the small labels on each step: “Do first”, “Same day”, or “When you can”. On a computer, read left to right. On a phone, read top to bottom.",
  },

  workarounds: {
    id: "workarounds",
    eyebrow: "If you are in a hurry",
    title: "Short-term options while you wait",
    subtitle:
      "Some people use these paths while they wait for a Dutch account. Always check first: ask your employer, landlord, or company in writing if they will accept your plan.",
  },

  whatNot: {
    id: "what-not-to-do",
    eyebrow: "Avoid harm",
    title: "What not to do",
    subtitle: "Quick fixes that often make things worse — or put you in danger.",
  },

  misunderstandings: {
    id: "misunderstandings",
    eyebrow: "Reality check",
    title: "What people often get wrong",
    subtitle: "Ideas that add stress — and simpler ways to think about it.",
  },

  recommendedProviders: {
    sectionId: "recommended-alternatives",
    eyebrow: "Separate area · bank websites",
    title: "Other banks and tools to compare (not our ranking)",
    subtitle:
      "If you need another bank or service, use the links to open each bank’s own website. Check their rules and fees yourself — rules can change at any time.",
    comparisonStripIntroLabel: "Official bank sites — you check rules and fees",
    groups: [
      {
        title: "Big Dutch banks — options to compare",
        placementId: "nl-money-banking-account-rejection-traditional",
        analyticsPageContext: "banking-account-rejection-traditional",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
          { href: BANK_COMPARISON_TOOL_PATH, label: "Bank comparison tool" },
        ],
      },
      {
        title: "App-based banks — other ways to apply",
        placementId: "nl-money-banking-account-rejection-digital",
        analyticsPageContext: "banking-account-rejection-digital",
        categoryLinks: [
          { href: "/netherlands/money/banking/traditional-vs-digital/", label: "Traditional vs digital banks" },
          { href: "/netherlands/money/banking/cheapest-accounts/", label: "Cheapest bank accounts" },
        ],
      },
      {
        title: "Money transfer apps — bridge tools",
        placementId: "nl-money-banking-account-rejection-transfers",
        analyticsPageContext: "banking-account-rejection-transfers",
        categoryLinks: [
          { href: "/netherlands/money/banking/international-transfers/", label: "International transfers guide" },
          { href: "/netherlands/tools/transfer-cost-calculator/", label: "Transfer cost calculator" },
        ],
      },
    ],
  },

  related: {
    id: "related-tools",
    title: "Related tools and guides",
    subtitle: "Keep checking facts calmly when you compare banks, fees, and timing.",
    items: [...bankingRejectionRelatedGuides],
  },

  faq: [...bankingRejectionFaq],

  officialSources: bankingRejectionOfficialSources,
} as const;

export type AccountRejectionPageModel = typeof accountRejectionPageModel;
