import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";

export const canIOpenBankAccountBeforeBsn: ScenarioGuideContent = {
  slug: "can-i-open-bank-account-before-bsn",
  path: "/netherlands/can-i-open-bank-account-before-bsn/",
  seo: {
    title: "Can You Open a Dutch Bank Account Before You Get a BSN?",
    description:
      "Opening a Dutch bank account before you have a BSN depends on the bank and product. Learn what is often possible, what is usually blocked, and practical options.",
    canonicalPath: "/netherlands/can-i-open-bank-account-before-bsn/",
  },
  h1: "Can You Open a Dutch Bank Account Before You Get a BSN?",
  eyebrow: "Banking & arrival",
  intro: [
    "Many expats ask whether they can open a Dutch bank account before they have a BSN (citizen service number). The answer is often “it depends”: some banks or products allow limited onboarding without a BSN; others require it. A BSN is usually needed for a full local current account and for things like salary and recurring payments.",
    "This page explains what typically applies and what workarounds people use—without making definitive claims about every bank. Always confirm current requirements with the provider.",
  ],
  quickAnswer:
    "Sometimes partially: a full Dutch current account often requires a BSN once you have one; some banks offer limited onboarding or waiting-list options before BSN. Multi-currency or international transfer accounts are often easier to open without a BSN and can help with transfers and early expenses. Confirm directly with the bank or provider.",
  dependsOn: [
    "The bank or provider (rules differ).",
    "Whether you need a full current account or mainly transfers.",
    "Your status (e.g. already have a job offer, or still waiting for registration).",
  ],
  sections: [
    {
      id: "why-bsn-matters",
      title: "Why BSN matters for banking",
      body: [
        "Dutch banks use the BSN for identity and tax reporting. A full local account is usually tied to your BSN once you have one. Before you have a BSN, many banks will not offer a full current account, or they may start the process and complete it once you can supply your BSN.",
      ],
      bullets: [
        "Tax and identity: banks report to the Dutch tax authority using your BSN.",
        "Full current account: typically requires BSN for completion.",
        "Salary: employers usually pay into a local account; that account often needs your BSN.",
      ],
      cta: { label: "BSN registration", href: "/netherlands/bsn-registration/" },
    },
    {
      id: "before-bsn-options",
      title: "What people can often do before BSN",
      body: [
        "Multi-currency or international transfer accounts (e.g. Wise, or some neobanks) are often openable without a BSN and can be used for receiving money and spending in euros. Some Dutch banks have introduced limited onboarding or “waiting for BSN” flows—check their current offers.",
        "You can often prepare documents (passport, proof of address once you have it) so that as soon as you have a BSN you can complete a full account application.",
      ],
      cta: { label: "Register your address", href: "/netherlands/register-address-netherlands/" },
    },
    {
      id: "what-usually-blocked",
      title: "What is usually blocked without BSN",
      body: [
        "A full Dutch current account with a traditional bank is often not fully available until you have a BSN. Employer payroll may require a local account; timing with your first salary can be tight if registration is delayed. Recurring direct debits and some local services may assume a local account.",
      ],
    },
    {
      id: "temporary-workarounds",
      title: "Temporary workarounds",
      body: [
        "Use a multi-currency or international account for transfers and early spending. Once you have your BSN and address, apply for a local account so you can receive salary and set up direct debits. The Arrival Planner and First 90 Days tools help you sequence registration and banking steps.",
      ],
      scenarios: [
        {
          title: "Full Dutch current account",
          body: "Often limited or not possible before BSN; bank-specific. Some banks allow you to start the process and complete it when you have your BSN.",
        },
        {
          title: "Multi-currency account",
          body: "Often easier to open without BSN; useful for receiving money and spending in euros before you have a local account.",
        },
        {
          title: "Employer payroll",
          body: "Employers often want a local account for salary. Timing of registration and BSN can affect when you can provide account details.",
        },
      ],
      cta: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
    },
  ],
  comparisonTable: {
    caption: "Rough guide—confirm with each provider.",
    headers: ["Option", "Before BSN possible?", "Notes"],
    rows: [
      ["Dutch bank account", "Sometimes limited", "Bank-specific onboarding rules"],
      ["Multi-currency account", "Often easier", "Useful for transfers"],
      ["Employer payroll setup", "Often wants local account eventually", "Timing matters"],
      ["Recurring payments", "Often easier after full local account", "Depends on provider"],
    ],
  },
  checklist: [
    { label: "Check your bank’s current rules for opening without BSN." },
    { label: "Consider a multi-currency or transfer account for the first weeks.", href: "/netherlands/open-bank-account-netherlands/" },
    { label: "Register your address and get your BSN as soon as you can.", href: "/netherlands/bsn-registration/" },
    { label: "Use the Arrival Planner to order registration and banking steps.", href: "/netherlands/moving/tools/arrival-planner/" },
  ],
  mistakes: [
    {
      title: "Assuming every bank has the same rules",
      body: "Policies differ. Check the bank’s website or contact them for current requirements.",
    },
    {
      title: "Leaving registration and BSN to the last minute",
      body: "Without a BSN, many local banking options stay limited. Book your municipality appointment early.",
    },
  ],
  faq: [
    {
      q: "Can I open a Dutch bank account before I have a BSN?",
      a: "It depends on the bank and product. Some providers allow multi-currency or international accounts without a BSN; a full Dutch current account usually requires a BSN. Confirm with the bank or provider.",
    },
    {
      q: "What can I use for money before I have a local account?",
      a: "Many people use a multi-currency or international transfer account (e.g. Wise or similar) for receiving funds and spending in euros until they have a BSN and can open a local account.",
    },
    {
      q: "When do I get my BSN?",
      a: "You usually receive your BSN when you register your address with the municipality (gemeente). See our BSN registration and register address guides.",
    },
  ],
  relatedGuides: [
    { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/", description: "Full banking guide" },
    { label: "BSN registration", href: "/netherlands/bsn-registration/", description: "When and how you get a BSN" },
    { label: "Register your address", href: "/netherlands/register-address-netherlands/", description: "Municipality registration" },
    { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/", description: "First steps" },
  ],
  relatedTools: ["arrival-planner", "moving-checklist", "first-90-days"],
  relatedServices: [
    { name: "bunq", description: "Some digital banking options may have specific flows for newcomers; check current eligibility." },
    { name: "Wise", description: "Multi-currency and international transfers can help before you have a local account." },
  ],
};
