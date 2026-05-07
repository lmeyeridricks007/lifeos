import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { BANK_COMPARISON_TOOL_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  BANKING_FEELS_WRONG_FIRST_SECTION_ID,
  BANKING_SECURITY_HOW_PAYMENTS_PATH,
  BANKING_SECURITY_PATH,
  bankingSecurityAtAGlance,
  bankingSecurityFaq,
  bankingSecurityOfficialSources,
  bankingSecurityRelatedGuides,
} from "@/src/data/banking/bankingSafety";

/** Canonical route — re-exported from shared banking safety data. */
export { BANKING_SECURITY_PATH } from "@/src/data/banking/bankingSafety";

export const bankingSecurityPageModel = {
  path: BANKING_SECURITY_PATH,
  publishDate: "2026-05-01",

  seo: {
    title: "Banking Safety & Fraud in the Netherlands | ExpatCopilot",
    description:
      "Plain-language banking safety for expats in the Netherlands: fake messages and calls, payment links and marketplace scams, card tips, checks before you send money abroad, simple account habits, and what to do first if something feels wrong. For learning only—not legal advice; use your bank and official sites when it counts.",
    keywords: [
      "banking fraud netherlands expats",
      "dutch bank phishing scams",
      "payment request scam netherlands",
      "tikkie scam expats",
      "safe banking netherlands",
      "what to do if scammed netherlands bank",
      "banking security netherlands expat",
      "betaalverzoek scam",
      "report fraud netherlands",
    ] as const,
  },

  heroImage: {
    src: "/images/heroes/netherlands-banking-safety-fraud-hero.png",
    alt: "Photorealistic editorial image for ExpatCopilot — bright home office in the Netherlands with a laptop and everyday desk items, calm practical mood for banking safety and fraud awareness",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#quick-answer-habits", label: "Safe habits" },
    { href: `#${BANKING_FEELS_WRONG_FIRST_SECTION_ID}`, label: "If something feels wrong" },
    { href: "#common-scams", label: "Common scams" },
    { href: "#phishing-spoofing", label: "Phishing & calls" },
    { href: "#payment-requests", label: "Payment requests" },
    { href: "#card-atm", label: "Cards & ATMs" },
    { href: "#intl-transfer-safety", label: "Transfers abroad" },
    { href: "#protect-account", label: "Protect your account" },
    { href: "#if-scammed", label: "If something is wrong" },
    { href: "#misunderstandings", label: "Misunderstandings" },
    { href: "#features-to-compare", label: "Features to compare" },
    { href: "#related-tools", label: "Related guides" },
    { href: "#banking-glossary", label: "Glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Banking Safety & Fraud in the Netherlands",
    subtitle:
      "A calm, practical guide for expats—how to spot fake bank messages and calls, risky payment links and marketplace tricks, shaky money transfers, and what to do first if something feels wrong.",
    contextChips: ["For learning only", "Not legal advice", "We cannot promise outcomes", "Use official contacts"] as const,
    editorialPrinciple:
      "This page gives newcomers a simple overview. It is not a full substitute for your bank’s security pages, contract terms, or fraud team—if you are unsure, stop and reach your bank through a path you opened yourself.",
    trustLine:
      "We summarise common scam patterns seen in the Netherlands and how banks often respond. Tricks change fast—treat any list as helpful, not complete.",
    notAdviceNote:
      "ExpatCopilot does not give legal advice, regulated security advice, or one-to-one help for a single case. If someone is in danger or a crime is happening now in the Netherlands, call 112. For fraud and bank accounts, contact your bank first, then use the official links at the bottom of this page.",
    trustPaymentsNote:
      "We do not promise you will get money back or that a payment can be undone—that depends on time, what you approved, bank rules, and sometimes the police or courts.",
    bullets: [
      "Spot common banking and payment scams in the Netherlands",
      "Protect your bank app, cards, IBAN, and personal details with a few steady habits",
      "See how payment links and online buying can go wrong—without fearing normal Dutch tools",
      "Know the first steps if you think there was fraud or someone accessed your account",
    ] as const,
    primaryCta: { label: "Learn safe banking habits", href: "#quick-answer-habits" } as const,
    secondaryCta: { label: "See what to do if scammed", href: "#if-scammed" } as const,
    heroQuickLinks: [
      { label: "How payments work", href: BANKING_SECURITY_HOW_PAYMENTS_PATH },
      { label: "International transfers", href: "/netherlands/money/banking/international-transfers/" },
      { label: "Banking hub", href: "/netherlands/money/banking/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
    ] as const,
  },

  atAGlance: bankingSecurityAtAGlance,

  quickAnswer: {
    id: "quick-answer-habits",
    eyebrow: "Quick answer",
    title: "Safe banking habits",
    subtitle: "Five habits that cover most day-to-day risk—use them together with your bank’s own safety pages.",
  },

  feelsWrongFirst: {
    id: BANKING_FEELS_WRONG_FIRST_SECTION_ID,
    eyebrow: "First steps",
    title: "If something feels wrong, do this first",
    subtitle: "A short list for when you feel uneasy but are not sure yet—then read the fuller steps lower on the page when you are ready.",
  },

  commonScams: {
    id: "common-scams",
    eyebrow: "Patterns",
    title: "Common banking scams in the Netherlands",
    subtitle: "Scams keep changing, but the types below show up a lot in public warnings—treat them as a guide, not every scam that exists.",
  },

  phishing: {
    id: "phishing-spoofing",
    eyebrow: "Messages and calls",
    title: "Fake bank messages, phishing, and fake caller ID",
  },

  paymentRequests: {
    id: "payment-requests",
    eyebrow: "Everyday Dutch payments",
    title: "Payment links, Tikkie-style requests, and marketplace scams",
  },

  cardAtm: {
    id: "card-atm",
    eyebrow: "Physical and digital card use",
    title: "Cards, ATMs, and tap-to-pay safety",
  },

  intlTransferSafety: {
    id: "intl-transfer-safety",
    eyebrow: "Cross-border money",
    title: "Sending money abroad—safety basics",
  },

  protectAccount: {
    id: "protect-account",
    eyebrow: "Checklist",
    title: "How to protect your account",
    subtitle: "Simple device and sign-in habits—not a promise nothing will go wrong, but the same basics banks suggest for everyday customers.",
  },

  ifScammed: {
    id: "if-scammed",
    eyebrow: "First response",
    title: "What to do if you think you were scammed",
    subtitle: "Stay calm, act fast on the steps that limit harm, and keep proof for your bank and official reports.",
    urgentChannelsNote:
      "If someone is in danger or a crime is happening now in the Netherlands, call 112. For bank or payment fraud without immediate danger to a person, start with your bank’s fraud phone line or secure in-app chat, then use the official reporting links at the bottom of this page. Your bank decides freezes, reviews, and whether a payment might be reversed.",
  },

  misunderstandings: {
    id: "misunderstandings",
    eyebrow: "Reality check",
    title: "What people often get wrong",
    subtitle: "A few ideas that make scams easier—this is not about blame, just clearer habits.",
  },

  recommendedProviders: {
    sectionId: "features-to-compare",
    eyebrow: "Bank websites",
    title: "Features to compare",
    subtitle:
      "When you pick or review a bank, safety tools often matter as much as fees—always read each bank’s own security and product pages for what they offer today.",
    editorialBridge:
      "Everything above this line is our editorial guide. The block below is separate: it lists the same retail banks you see on other Money pages with links to their official sites. It is not a “safest bank” list and not a security certificate.",
    disclaimer:
      "We do not rank banks as “most secure” or say one bank is the safest—that would need fresh, sourced proof we do not keep here. The cards are only a reminder of features to check; partner links do not change the guide text above.",
    groups: [
      {
        title: "Digital and traditional retail banks",
        placementId: "nl-money-banking-security-features",
        boundaryNote:
          "Separate from the guide above. These banks also appear on other ExpatCopilot Money pages for everyday accounts—here we only nudge you to compare app controls, alerts, card freeze, and how to reach support on each bank’s own site.",
        analyticsPageContext: "banking-security-recommended-features",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
          { href: BANK_COMPARISON_TOOL_PATH, label: "Bank comparison tool" },
          { href: BANKING_SECURITY_HOW_PAYMENTS_PATH, label: "How payments work" },
        ],
      },
    ],
  },

  related: {
    id: "related-tools",
    title: "Related tools and guides",
    subtitle: "Use the same calm “check before you pay” habits when you compare banks, fees, and transfers.",
    items: [...bankingSecurityRelatedGuides],
  },

  faq: [...bankingSecurityFaq],

  officialSources: bankingSecurityOfficialSources,
} as const;

export type BankingSecurityPageModel = typeof bankingSecurityPageModel;
