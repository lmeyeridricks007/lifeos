/**
 * Banks category page data for /netherlands/services/banks/.
 * Official facts from Netherlands Worldwide and DNB; requirements vary by bank.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { banksProviders } from "@/src/data/companies-registry";
import { banksOfficialSources } from "@/src/data/services/official-sources/banks";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for a Dutch banking category page for expats, showing organized relocation planning materials, bank comparison notes, passport, debit card setup documents, smartphone or laptop with bank comparison interface, subtle Dutch setting, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const banksCategoryPage: ServiceCategoryPageData = {
  slug: "banks",
  parentSlug: "banking-finance",
  country: "netherlands",
  path: "/netherlands/services/banks/",

  seo: {
    title: "Banks for Expats in the Netherlands: Compare Accounts, Fees, Cards & Setup",
    description:
      "Compare Dutch banks for expats, including account setup, fees, cards, English support, BSN requirements, and the Dutch deposit guarantee.",
    keywords: [
      "banks for expats in the netherlands",
      "best bank netherlands expat",
      "open dutch bank account expat",
      "dutch bank account for expats",
      "compare dutch banks expat",
      "banking for expats netherlands",
      "bunq vs ing expat",
      "abn amro expat account",
      "dutch bank account without bsn",
      "money transfer services netherlands expat",
      "dutch deposit guarantee",
      "english banking netherlands expat",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Banks for Expats in the Netherlands",
    subtitle:
      "Understand how Dutch banking works for expats and compare providers by account setup, fees, cards, English support, digital experience, and international use.",
    image: {
      src: "/images/heroes/netherlands-expat-banking-setup-hero.png",
      alt: "A cinematic editorial image showing a wooden desk with a tablet and smartphone displaying banking dashboards, a debit card, and 'Account Setup' documents, set against a blurred background of a Dutch canal city with bicycles, symbolizing expat financial planning and bank comparison.",
      imagePrompt:
        "Cinematic editorial image for a Dutch banking category page for expats, showing organized relocation planning materials, bank comparison notes, passport, debit card setup documents, smartphone or laptop with bank comparison interface, subtle Dutch setting, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Read Bank Account Guide", href: "/netherlands/open-bank-account-netherlands/", primary: true },
      { label: "Compare Dutch Banks", href: "#compare-providers", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "when-need-account", label: "When Expats Usually Need a Dutch Bank Account" },
    { id: "what-to-compare", label: "What to Compare Between Banks" },
    { id: "digital-banks", label: "Digital Banks" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "costs-cards", label: "Costs, Cards and Transfers" },
    { id: "deposit-guarantee", label: "Dutch Deposit Guarantee" },
    { id: "who-needs-help", label: "Who Usually Needs Extra Help" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Dutch Banking Works for Expats",
    paragraphs: [
      "This page helps you understand the banking category in the Netherlands. A Dutch bank account is often needed soon after arrival—for salary, rent, utilities, subscriptions, taxes, and day-to-day payments. Netherlands Worldwide states that you need a Dutch bank account to arrange certain things in the Netherlands (for example a phone plan) and that you generally need a BSN to open a Dutch bank account. Requirements vary by bank and by your residence status, nationality, and identification documents; some banks may allow staged onboarding.",
      "Banks and money-service providers differ in onboarding, pricing, English support, digital experience, and international usefulness. Our guide and provider pages help you compare options; always confirm eligibility, fees, and documents directly with the provider.",
    ],
    links: [
      { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "salary-account",
      title: "Just arrived and need a salary account",
      description: "Many employers pay into a Dutch account. You typically need a local account for salary, and often for iDEAL and day-to-day spending.",
      whoItAppliesTo: "Employees starting work in the Netherlands",
      link: { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
    },
    {
      id: "rent-bills",
      title: "Need an account for rent and bills",
      description: "Rent, utilities, subscriptions, and other recurring payments are often set up with a Dutch bank account.",
      whoItAppliesTo: "Anyone renting or setting up utilities in the Netherlands",
      link: { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
    },
    {
      id: "waiting-bsn",
      title: "Still waiting for BSN",
      description: "You generally need a BSN to open a Dutch bank account. Some banks may allow you to start the process and provide the BSN later (e.g. within a set period); check each bank’s current policy.",
      whoItAppliesTo: "New arrivals before BSN is issued",
      link: { label: "ING – Expats (example of possible staged onboarding)", href: "https://www.ing.nl/en/personal/expats" },
    },
    {
      id: "multicurrency",
      title: "Need multicurrency transfers",
      description: "Moving money to the Netherlands or holding multiple currencies often involves a money transfer or multicurrency service in addition to, or alongside, a Dutch bank account.",
      whoItAppliesTo: "Expats receiving or sending international transfers",
    },
    {
      id: "branch-access",
      title: "Want branch access",
      description: "Traditional banks offer branches for in-person support; digital-only providers do not. Choose based on how you prefer to bank.",
      whoItAppliesTo: "People who prefer in-branch service",
    },
    {
      id: "app-first",
      title: "Prefer app-first banking",
      description: "Many expats use app-based or digital-first banks for quick setup and day-to-day use. Compare app quality and onboarding flow.",
      whoItAppliesTo: "People who prefer fully digital banking",
    },
    {
      id: "digital-banks",
      title: "Considering a digital-only bank",
      description: "Digital banks (e.g. bunq, Knab) offer full Dutch accounts without branches, often with strong apps and sometimes faster onboarding. Check BSN requirements, iDEAL and card support, and whether they fit salary and daily use.",
      whoItAppliesTo: "Expats who prefer digital-only banking",
      link: { label: "Compare digital bank providers below", href: "#compare-providers" },
    },
  ],

  coverageCards: [],

  digitalBanksBlock: {
    heading: "Digital Banks in the Netherlands",
    paragraphs: [
      "Digital banks (sometimes called neobanks or app-only banks) offer full Dutch payment accounts without a branch network. They are licensed and covered by the Dutch Deposit Guarantee like traditional banks. Many expats choose them for quick online sign-up, English-language apps, and multi-currency or international features.",
      "Popular options include bunq (Dutch-licensed digital bank with expat-friendly onboarding) and Knab (Dutch online bank). Money transfer services like Wise and Revolut are not full substitutes for a Dutch bank account for salary and local payments but are often used alongside one. When comparing digital banks, check BSN and ID requirements, monthly fees, iDEAL and debit card support, and English availability.",
    ],
    linkLabel: "Compare digital banks and providers below",
    linkHref: "#compare-providers",
  },

  comparisonFactors: [
    { id: "monthly-fees", title: "Monthly account fees", description: "Pricing varies by provider and package. Compare like-for-like (e.g. basic current account vs premium)." },
    { id: "debit-card", title: "Debit card / payment support", description: "Check that the account includes a debit card and supports iDEAL and day-to-day payments where you need them." },
    { id: "app-onboarding", title: "App quality and online onboarding", description: "Digital onboarding speed and app experience differ. Some banks allow starting without BSN and adding it later." },
    { id: "branch", title: "Branch access", description: "Traditional banks have branches; digital-only providers do not. Matters if you want in-person support." },
    { id: "english", title: "English-language support", description: "Not all banks offer full English. Check the provider’s website and app if this is important." },
    { id: "bsn-timing", title: "BSN requirement timing", description: "Requirements vary by bank. Some may allow opening and providing BSN within a set period; confirm with the bank." },
    { id: "international", title: "International transfers", description: "If you send or receive money internationally, compare fees and options. Some use a separate money transfer service alongside a Dutch account." },
    { id: "multicurrency", title: "Multicurrency support", description: "Useful if you hold or pay in multiple currencies. Digital and money-service providers often offer this; traditional banks may have different options." },
    { id: "situation", title: "Your situation", description: "The best bank for one expat may not be the best fit for another. Some value low fees and app-first onboarding; others prioritise branch access, English support, or international transfers." },
  ],

  providers: banksProviders,

  comparisonSection: {
    title: "Compare banks and banking services",
    intro: "Below: what each provider does, typical costs, pros and cons, and who should choose them. Always verify fees and eligibility on the provider’s site.",
  },

  costCards: [
    {
      id: "monthly-fee",
      title: "Monthly account fee",
      value: "Free to ~€4/mo",
      note: "Many traditional banks offer a free basic account; digital banks (e.g. bunq, Knab) typically charge ~€2.50–4/mo. Premium or extra products cost more.",
      disclaimer: "Check current pricing with the bank.",
    },
    {
      id: "debit-card",
      title: "Debit card / payment support",
      value: "Included (standard current account)",
      note: "Confirm card type (e.g. Maestro / debit) and iDEAL support for daily use. Replacement or premium cards may have a fee.",
    },
    {
      id: "international",
      title: "International transfers",
      value: "~0–2% + small fee, or free tier",
      note: "Banks often charge a margin plus fee; Wise/Revolut and similar typically offer low-cost or free tiers for smaller amounts. Compare for your transfer size.",
    },
    {
      id: "app-vs-branch",
      title: "App-first vs branch support",
      value: "No extra fee",
      note: "Digital-only banks have no branch network; traditional banks offer both app and branches. Choice of channel does not usually change the account fee.",
    },
    {
      id: "joint-account",
      title: "Joint account / family setup",
      value: "Usually no extra monthly fee",
      note: "Joint accounts are available at most banks; conditions and naming vary. Check availability and any one-off or extra fees with the provider.",
    },
  ],

  whoNeedsExtraHelp: [
    { id: "waiting-bsn", title: "New arrivals waiting for BSN", description: "You usually need a BSN to open a Dutch account. Some banks allow starting the process and adding BSN later; confirm with each bank. Use our guide and official checklists to plan the order of steps." },
    { id: "paid-abroad", title: "People paid from abroad", description: "If your salary or income is paid from another country, you may need a Dutch account for local expenses and possibly a transfer service. Compare how you’ll receive and use funds." },
    { id: "freelancers", title: "Freelancers / contractors", description: "Self-employed expats often need a business or professional account and clear separation of finances. Check provider eligibility and fees." },
    { id: "families", title: "Families needing joint or multiple accounts", description: "Couples and families may want joint accounts or multiple accounts. Compare which banks offer the setup you need." },
    { id: "english", title: "People prioritising English support", description: "Not all banks offer full English. Check websites and apps before you apply." },
    { id: "international-transfers", title: "Users needing frequent international transfers", description: "If you regularly send or receive money internationally, compare bank fees and consider dedicated transfer services alongside a Dutch account." },
    { id: "digital-only", title: "Expats preferring digital-only banks", description: "Digital banks (e.g. bunq, Knab) offer full Dutch accounts without branches. Compare BSN and document requirements, fees, iDEAL and card support, and English availability. They are covered by the Dutch Deposit Guarantee like traditional banks." },
  ],

  scenarios: [
    {
      id: "hsm-salary",
      title: "Highly skilled migrant opening first Dutch salary account",
      summary: "You have a job and need a Dutch account for salary and daily spending. You may already have a BSN or be able to get one soon.",
      whatToConfirm: ["Whether your employer has a preferred bank", "When you will have your BSN", "What ID documents the bank accepts"],
      whatToCompare: ["Monthly fees", "Time to open account", "English support", "App and card"],
      commonMistakes: ["Leaving banking too late before first salary", "Assuming all banks have the same BSN rules"],
      links: [
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "eu-app-vs-traditional",
      title: "EU citizen relocating and comparing app-first vs traditional bank",
      summary: "You are moving from another EU country and want to choose between a digital bank and a traditional bank with branches.",
      whatToConfirm: ["Whether you need branch access", "BSN and ID requirements for each option", "iDEAL and card support"],
      whatToCompare: ["Fees", "Onboarding speed", "English support", "Branch availability"],
      commonMistakes: ["Choosing only on price without checking onboarding and support", "Assuming app-only is always faster"],
      links: [
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Compare providers above", href: "#compare-providers" },
      ],
    },
    {
      id: "digital-only-first-account",
      title: "Choosing a digital-only bank for your first Dutch account",
      summary: "You want a Dutch account without visiting a branch and prefer an app-first or digital-only bank (e.g. bunq, Knab) for salary and daily spending.",
      whatToConfirm: ["BSN and ID requirements for each digital bank", "Whether the account supports iDEAL and a Dutch debit card", "Monthly fees and any student or expat offers"],
      whatToCompare: ["Onboarding speed and app quality", "English support", "Fees", "Multi-currency if you need it"],
      commonMistakes: ["Assuming all digital banks have the same BSN rules", "Confusing money transfer apps (Wise, Revolut) with full Dutch bank accounts for salary"],
      links: [
        { label: "Digital banks section above", href: "#digital-banks" },
        { label: "Compare providers", href: "#compare-providers" },
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
      ],
    },
    {
      id: "student-account",
      title: "Student needing a basic current account",
      summary: "You are an international student and need a Dutch account for living expenses, possibly part-time work, and day-to-day payments.",
      whatToConfirm: ["Student eligibility with each bank", "Document requirements", "Any student offers or conditions"],
      whatToCompare: ["Fees", "App quality", "Ease of setup"],
      commonMistakes: ["Delaying opening an account until after arrival when you need it for rent or bills"],
      links: [
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      id: "couple-joint",
      title: "Couple moving together and comparing shared banking setup",
      summary: "You and your partner want a joint account or coordinated accounts for rent and household expenses.",
      whatToConfirm: ["Which banks offer joint accounts", "Eligibility for both partners", "Document requirements"],
      whatToCompare: ["Joint account availability and fees", "App and cards", "English support"],
      commonMistakes: ["Assuming all banks offer the same joint account options"],
      links: [
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
      ],
    },
    {
      id: "paid-internationally",
      title: "Expat paid internationally who also needs local transfers",
      summary: "You receive income from abroad and need to use money in the Netherlands for rent, bills, and spending.",
      whatToConfirm: ["How you’ll receive funds (which account/currency)", "Transfer costs and speed", "Whether one provider can do both or you need a Dutch account plus transfer service"],
      whatToCompare: ["Dutch account fees", "International transfer options and fees", "Multi-currency if needed"],
      commonMistakes: ["Using only an overseas account for Dutch expenses (can be costly and impractical)", "Not comparing total cost of transfers plus local account"],
      links: [
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Compare providers above", href: "#compare-providers" },
      ],
    },
    {
      id: "new-arrival-waiting-admin",
      title: "New arrival still waiting for some local admin steps",
      summary: "You have just arrived and are waiting for BSN, registration, or other steps. You need to plan when you can open an account.",
      whatToConfirm: ["Order of steps (registration, BSN, then bank)", "Whether any bank allows starting before BSN and adding it later"],
      whatToCompare: ["Banks that may allow staged onboarding", "Document checklist per bank"],
      commonMistakes: ["Trying to open an account before you have the documents the bank requires", "Missing that requirements vary by bank"],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account guide", href: "/netherlands/open-bank-account-netherlands/" },
      ],
    },
  ],

  faqs: [
    { q: "Do I need a Dutch bank account as an expat?", a: "In practice, yes for most people who live or work in the Netherlands. You typically need one for salary, rent, utilities, subscriptions, taxes, and day-to-day payments. Netherlands Worldwide states you need a Dutch bank account to arrange certain things (e.g. a phone plan) and that you generally need a BSN to open one. Requirements vary by bank." },
    { q: "Can I open a Dutch bank account without a BSN?", a: "You usually need a BSN to open a Dutch bank account. Some banks may allow you to start the process and provide the BSN within a set period (e.g. 90 days)—this is bank-specific. Check each bank’s current eligibility and document requirements." },
    { q: "Which Dutch bank is best for expats?", a: "There is no single “best” bank. The right choice depends on your situation: whether you need branch access, English support, the lowest fees, the fastest digital onboarding, or international transfer options. Compare providers and confirm eligibility and pricing directly with the bank." },
    { q: "What documents do banks usually ask for?", a: "Typical examples include a valid Dutch or European passport or ID, and possibly a Dutch residence permit depending on the bank and flow. Exact requirements vary by bank and your residence status. Check the bank’s website or contact them for current requirements." },
    { q: "Are digital banks enough for life in the Netherlands?", a: "For many expats, yes. Digital banks (e.g. bunq, Knab) are licensed in the Netherlands and covered by the Dutch Deposit Guarantee. They often offer quick setup, English support, and iDEAL/cards. If you need branch access, a mortgage, or specific products, a traditional bank may be better. It depends on your needs." },
    { q: "Which digital banks can I use in the Netherlands?", a: "Dutch-licensed digital banks include bunq and Knab, both offering full Dutch payment accounts and covered by the Dutch Deposit Guarantee. Wise and Revolut are money transfer and multi-currency services—useful for moving money and holding currencies but not a full substitute for a Dutch bank account for salary and local payments. Compare eligibility, fees, and features on each provider’s site." },
    { q: "Do I need branch access?", a: "Not necessarily. Many people manage with app-only banking. If you prefer in-person support or need services that require a branch, choose a traditional bank with a branch network." },
    { q: "How much are Dutch bank account fees?", a: "Monthly account fees vary by provider and package. Use “typical estimate” or “from” wording; check current pricing on the bank’s website. Some accounts have no monthly fee; others do." },
    { q: "Is my money protected in a Dutch bank?", a: "Yes. Money in Dutch bank accounts is legally protected by the Dutch Deposit Guarantee Scheme. De Nederlandsche Bank (DNB) administers it. Coverage is from 1 cent up to €100,000 per person, per bank." },
    { q: "What is the Dutch Deposit Guarantee?", a: "The Dutch Deposit Guarantee protects deposits in Dutch banks by law. The guarantee covers from 1 cent up to €100,000 per person, per bank. DNB provides information and a public register of participating institutions." },
    { q: "Can I use Wise or Revolut instead of a Dutch bank?", a: "Wise and Revolut are money transfer and multi-currency services. They can be useful for moving money and holding currencies. For salary, rent, utilities, and full day-to-day banking in the Netherlands, you typically also need a Dutch bank account. Use them alongside a Dutch account if that fits your needs." },
    { q: "Which bank is best for English support?", a: "Several banks and digital providers offer English websites, apps, or support. Compare their current offerings; not all have full English. Our provider cards note “English support” where commonly available; confirm with the provider." },
    { q: "What should I do if I have just arrived?", a: "Plan the order of steps: usually municipality registration, BSN, then open a bank account. Use our After arriving in the Netherlands guide and Open a bank account guide. Some banks may let you start before you have your BSN and add it later—check each bank’s policy." },
  ],

  officialSources: banksOfficialSources,

  trustBlock: {
    heading: "How the Dutch Deposit Guarantee Works",
    highlight: "Money in Dutch bank accounts is legally protected by the Dutch Deposit Guarantee. Coverage is from 1 cent up to €100,000 per person, per bank.",
    paragraphs: [
      "De Nederlandsche Bank (DNB) administers the Dutch Deposit Guarantee Scheme. If a bank fails, eligible deposits are protected by law.",
      "The guarantee covers deposits from 1 cent up to €100,000 per person, per bank. This is a trust and safety consideration when comparing providers—all participating Dutch banks are part of the same scheme.",
      "You can check the public register of institutions covered by the Dutch Deposit Guarantee on DNB’s website.",
    ],
    link: {
      label: "Check the public register on DNB's website",
      href: "https://www.dnb.nl/en/public-register/dutch-deposit-guarantee-scheme-register/",
    },
  },

  relatedGuides: [
    {
      title: "Essential Guides",
      links: [
        { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      title: "Document Preparation",
      links: [
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      ],
    },
    {
      title: "City Pages",
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
    {
      title: "Services Hub",
      links: [
        { label: "All services", href: "/netherlands/services/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Banking & Finance overview", href: "/netherlands/services/banking-finance/" },
    { label: "Insurance", href: "/netherlands/services/insurance/" },
    { label: "Tax & Accounting", href: "/netherlands/services/tax-accounting/" },
  ],

  tools: [
    { label: "Moving Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute financial or legal advice.",
    "Provider comparisons are editorial guidance. We do not recommend a specific bank; suitability depends on your situation.",
    "Always verify current fees, eligibility, document requirements, and onboarding steps directly with the provider.",
    "Provider rules and pricing may change.",
  ],
};
