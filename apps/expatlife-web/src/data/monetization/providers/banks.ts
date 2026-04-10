/**
 * Curated bank & money-tool seed data. Affiliate programme not active: `isAffiliate` false;
 * `affiliateUrl` uses `monetizationAffiliatePlaceholder` until real tracked links exist.
 */
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationAffiliatePlaceholder,
} from "@/src/lib/monetization/types";

const LOGOS = "/images/affiliates/logos";

export const banksMonetizationProviders: MonetizationProvider[] = [
  {
    id: "monetization-bank-bunq",
    name: "bunq",
    category: "banks",
    logo: { src: `${LOGOS}/bunq.svg`, alt: "bunq" },
    shortDescription:
      "Dutch-licensed digital bank with English-language flows and multi-currency accounts. Often chosen when you want a full local account and iDEAL without visiting a branch.",
    tags: ["Digital", "English", "iDEAL", "Multi-currency"],
    bestFor: "Expats who want app-first Dutch banking and are comfortable with paid plans.",
    priceHint: "Paid plans from ~€2.99/mo; confirm current tiers on site",
    affiliateUrl: monetizationAffiliatePlaceholder("bank-bunq"),
    directUrl: "https://www.bunq.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/banks", "netherlands/banking", "guide/moving", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["pre-arrival", "arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-bank-abn-amro",
    name: "ABN AMRO",
    category: "banks",
    logo: { src: `${LOGOS}/abn-amro.svg`, alt: "ABN AMRO" },
    shortDescription:
      "Large Dutch bank with branches and online banking. Useful when you want in-person support, mortgages, or a traditional current account alongside digital tools.",
    tags: ["Branches", "English", "Retail bank"],
    bestFor: "People who value branch access and a full-service Dutch bank.",
    priceHint: "Basic account options; fee schedules change—check directly",
    affiliateUrl: monetizationAffiliatePlaceholder("bank-abn-amro"),
    directUrl: "https://www.abnamro.nl/en/personal/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/banks", "netherlands/banking", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-bank-ing",
    name: "ING",
    category: "banks",
    logo: { src: `${LOGOS}/ing.svg`, alt: "ING" },
    shortDescription:
      "Major Dutch bank with strong mobile banking and expat-oriented information. Widely used for salary, rent, and everyday iDEAL payments.",
    tags: ["Retail", "Digital", "iDEAL"],
    bestFor: "Expats comparing a mainstream Dutch bank with English onboarding resources.",
    priceHint: "Often a free basic tier; verify eligibility and fees",
    affiliateUrl: monetizationAffiliatePlaceholder("bank-ing"),
    directUrl: "https://www.ing.nl/en/personal/expats",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/banks", "netherlands/banking", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-bank-wise",
    name: "Wise",
    category: "banks",
    logo: { src: `${LOGOS}/wise.svg`, alt: "Wise" },
    shortDescription:
      "International account and transfer service for holding and moving money across currencies. Complements—but does not replace—a Dutch bank account for salary, rent, and local direct debits.",
    tags: ["Transfers", "Multi-currency", "Companion tool"],
    bestFor: "Funding your move and managing money across borders before and after arrival.",
    priceHint: "No monthly fee for basic account; pay per transfer—see site",
    affiliateUrl: monetizationAffiliatePlaceholder("bank-wise"),
    directUrl: "https://wise.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/banks", "netherlands/banking", "guide/moving", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["planning", "pre-arrival", "arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-bank-revolut",
    name: "Revolut",
    category: "banks",
    logo: { src: `${LOGOS}/revolut.svg`, alt: "Revolut" },
    shortDescription:
      "App-based spending and multi-currency accounts. Suitability for Dutch salary, iDEAL, and full local banking varies—treat as a companion until you confirm coverage for your situation.",
    tags: ["App", "Multi-currency", "Companion tool"],
    bestFor: "Short-term spending and travel money while you set up a Dutch-licensed account if needed.",
    priceHint: "Free tier and paid plans; confirm NL-specific features",
    affiliateUrl: monetizationAffiliatePlaceholder("bank-revolut"),
    directUrl: "https://www.revolut.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/banks", "netherlands/banking", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["planning", "pre-arrival", "arrival"],
    status: "active",
  },
];
