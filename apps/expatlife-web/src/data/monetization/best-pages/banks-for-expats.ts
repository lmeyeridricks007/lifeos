import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

const LOGOS = "/images/affiliates/logos";

export const banksForExpatsPage: BestProvidersPageContent = {
  slug: "banks-for-expats",
  path: "/netherlands/best/banks-for-expats/",
  seo: {
    title: "Banks for expats in the Netherlands | Curated comparison",
    description:
      "Structured comparison of Dutch banks and companion money tools for expats: English support, onboarding, typical pricing, and who each option suits.",
    keywords: [
      "best bank netherlands expat",
      "dutch bank account expat comparison",
      "bunq vs ing expat",
      "open bank account netherlands expat",
    ],
  },
  hero: {
    eyebrow: "Curated comparison",
    title: "Dutch banking options expats often compare",
    subtitle:
      "A short, decision-oriented overview—not a directory. We focus on how people actually use accounts after moving: salary, rent, iDEAL, and English-friendly setup.",
    image: {
      src: "/images/heroes/open-bank-account-netherlands.png",
      alt: "Expat planning banking setup in the Netherlands with laptop and documents",
      priority: true,
    },
  },
  methodology: {
    title: "How we evaluate options",
    intro:
      "We prioritise practical fit for internationals: clarity of English flows, how onboarding usually works, and whether the product is a full Dutch payment account versus a companion tool.",
    howWeEvaluate: [
      "Residency use-case: can it realistically cover salary, rent, and iDEAL for typical expat needs?",
      "English support: app, website, and customer service availability (indicative—verify with the bank).",
      "Onboarding friction: digital vs branch, and how often a BSN is required up front.",
      "Price transparency: recurring fees and where to confirm current tariffs.",
    ],
    goodFitTitle: "What makes a good fit",
    goodFit: [
      "You need iDEAL and Dutch direct debits for housing and utilities.",
      "You want either branch access or a fully digital path—match the bank to your style.",
      "You may still use Wise or Revolut alongside a Dutch account for cross-border transfers.",
    ],
  },
  shortlist: {
    title: "Quick shortlist",
    subtitle: "Ranked for scanning; details and trade-offs are in the table and cards below.",
  },
  comparison: {
    title: "Comparison at a glance",
    subtitle: "Indicative only—rules, fees, and eligibility change. Always confirm on the provider’s site.",
  },
  detailedCardsTitle: "Provider notes",
  faq: [
    {
      q: "Do I always need a Dutch bank if I move to the Netherlands?",
      a: "For most people who live and work in the Netherlands, a local account is practical for salary, rent, and iDEAL. Some people keep a non-Dutch app for travel or transfers, but that rarely replaces local direct debits and Dutch payment rails.",
    },
    {
      q: "Can I open an account before I have a BSN?",
      a: "Some banks allow you to start onboarding and supply a BSN later; others require it immediately. Policies change—check the bank’s current expat or newcomer pages.",
    },
    {
      q: "Are Wise and Revolut the same as a Dutch bank account?",
      a: "No. They can be excellent for multi-currency and transfers, but salary, many landlords, and standard Dutch direct debits usually expect a Dutch-licensed payment account. Treat them as companions unless your situation clearly says otherwise.",
    },
    {
      q: "Is this ranking independent?",
      a: "ExpatCopilot is editorial-first. Some links may become partner links in the future; where that applies, it will be disclosed. Rankings reflect typical expat use-cases, not paid placement.",
    },
  ],
  disclosure:
    "Some links may be partner links. We only include options we believe are relevant to this topic. This page is informational—not financial, tax, or legal advice.",
  affiliateNote: "Affiliate relationships are not active for all providers listed; outbound links may be direct until partner programmes are connected.",
  relatedLinks: [
    { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
    { label: "Compare all banks (services hub)", href: "/netherlands/services/banks/" },
    { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" },
  ],
  rows: [
    {
      id: "bunq",
      name: "bunq",
      logo: { src: `${LOGOS}/bunq.svg`, alt: "bunq" },
      bestFor: "Digital-first expats who want a full Dutch account quickly",
      englishSupport: "Strong (app-first)",
      onboardingEase: "Fast digital flow",
      priceHint: "From ~€2.99/mo plans",
      notes: "Dutch-licensed; paid plans; strong multi-currency positioning",
      ctaLabel: "Visit bunq",
      ctaHref: "https://www.bunq.com/",
      detailDescription:
        "bunq is a common pick when people want English-first digital onboarding and a Dutch payment account without visiting a branch. Confirm whether current plans match your expected balance and card needs.",
      tags: ["Digital", "English", "iDEAL"],
    },
    {
      id: "ing",
      name: "ING",
      logo: { src: `${LOGOS}/ing.svg`, alt: "ING" },
      bestFor: "Mainstream retail banking and salary account",
      englishSupport: "Strong expat pages",
      onboardingEase: "Digital + branch network",
      priceHint: "Often free basic tier",
      notes: "Widely used; check staged BSN rules on site",
      ctaLabel: "Visit ING",
      ctaHref: "https://www.ing.nl/en/personal/expats",
      detailDescription:
        "ING is a common default for people who want a large Dutch bank with broad acceptance and English-language newcomer resources. Compare package fees if you add premium features.",
      tags: ["Retail", "Salary", "iDEAL"],
    },
    {
      id: "abn-amro",
      name: "ABN AMRO",
      logo: { src: `${LOGOS}/abn-amro.svg`, alt: "ABN AMRO" },
      bestFor: "Branch access and full-service banking",
      englishSupport: "Strong",
      onboardingEase: "Branch or digital",
      priceHint: "Basic offers vary",
      notes: "Useful if you want in-person support",
      ctaLabel: "Visit ABN AMRO",
      ctaHref: "https://www.abnamro.nl/en/personal/",
      detailDescription:
        "ABN AMRO fits expats who prefer a traditional bank with physical locations and a wide product range beyond day-to-day banking.",
      tags: ["Branches", "Full service"],
    },
    {
      id: "wise",
      name: "Wise",
      logo: { src: `${LOGOS}/wise.svg`, alt: "Wise" },
      bestFor: "Moving money across currencies before/after arrival",
      englishSupport: "Strong",
      onboardingEase: "Fast online signup",
      priceHint: "Pay per transfer",
      notes: "Companion tool—not a full Dutch bank substitute",
      ctaLabel: "Visit Wise",
      ctaHref: "https://wise.com/",
      detailDescription:
        "Wise is included because many expats use it to fund the move and hold multiple currencies. Keep a Dutch account plan separate if you need local salary and iDEAL workflows.",
      tags: ["Transfers", "Multi-currency"],
    },
    {
      id: "revolut",
      name: "Revolut",
      logo: { src: `${LOGOS}/revolut.svg`, alt: "Revolut" },
      bestFor: "Spending and travel money while settling in",
      englishSupport: "Strong",
      onboardingEase: "App-first",
      priceHint: "Free tier + paid plans",
      notes: "Confirm NL salary/iDEAL needs vs Dutch bank",
      ctaLabel: "Visit Revolut",
      ctaHref: "https://www.revolut.com/",
      detailDescription:
        "Revolut is popular for flexible spending. Treat it as a companion until you confirm whether your employer, landlord, and billers require a Dutch-licensed account for direct debits and iDEAL.",
      tags: ["App", "Travel"],
    },
  ],
};
