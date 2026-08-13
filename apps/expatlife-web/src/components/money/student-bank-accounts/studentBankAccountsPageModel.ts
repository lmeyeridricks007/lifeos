import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANK_ZZP_PATH } from "@/src/components/money/best-bank-zzp/bestBankZzpPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  CASH_VS_CARD_PATH,
  CREDIT_CARDS_PATH,
  DEBIT_CARDS_PATH,
  HPW_FEES_PATH,
  HPW_TRAD_DIG_PATH,
  WISE_VS_REVOLUT_PATH,
} from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { JOINT_BANK_ACCOUNTS_PATH } from "@/src/components/money/joint-bank-accounts/jointBankAccountsPageModel";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { TYPES_OF_BANK_ACCOUNTS_PATH } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const STUDENT_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/student-accounts/" as const;

const BANKING_SECURITY_PATH = "/netherlands/money/banking/security/" as const;
const ACCOUNT_REJECTION_PATH = "/netherlands/money/banking/account-rejection/" as const;
const STUDENT_VISA_PATH = "/netherlands/visa/student-visa/" as const;

export type StudentBankAccountsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type CompareRow = { setting: string; homeHabit: string; dutchNorm: string; tip: string };
export type CostRow = { setting: string; band: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "student-bank-accounts-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const studentBankAccountsPage = {
  slug: "student-accounts",
  path: STUDENT_BANK_ACCOUNTS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(STUDENT_BANK_ACCOUNTS_PATH) ?? "2026-08-14",
  seo: {
    title: "Student Bank Accounts in the Netherlands | Complete Guide for Expats",
    description:
      "Studentrekening orientation for Dutch and international students: enrolment and age eligibility, package perks and indicative 2026 fee bands, documents for newcomers, and what happens after graduation — not financial advice.",
    keywords: [
      "student bank account Netherlands",
      "studentrekening",
      "student rekening Netherlands",
      "student bank account international students",
      "Dutch student bank account fees",
      "studentrekening after graduation",
      "student vs betaalrekening",
      "open student bank account Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Student Bank Accounts in the Netherlands",
    subtitle:
      "How a Dutch studentrekening works for enrolled students: eligibility cues, package perks, indicative 2026 fee bands, international student documents, and a calm graduation transition — orientation only.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "After graduation", href: "#graduation" },
    chips: ["Studentrekening", "Enrolment eligibility", "Package perks", "2026 fee bands", "Graduation transition"],
    disclaimer:
      "General orientation only — not financial, legal or immigration advice. Student products, fees, age limits and enrolment proofs differ by bank and personal situation. Confirm details with your bank and, when needed, a qualified adviser before you open or convert an account. Visa questions belong on the Student visa guide.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch student café table: multicultural student reviewing a laptop enrolment portal beside a debit card, student ID card and coffee, soft canal-house daylight through the window.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-is", label: "What it is" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#perks", label: "Package perks" },
    { href: "#costs", label: "Costs" },
    { href: "#vs-regular", label: "Vs regular" },
    { href: "#international", label: "International" },
    { href: "#graduation", label: "Graduation" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#tools", label: "Tools" },
    { href: "#recommended-options", label: "Providers" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#banking-hub", label: "Banking hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Student Bank Accounts in the Netherlands — four building blocks: know what a studentrekening is, confirm enrolment eligibility, compare package perks and fees, and plan the graduation transition — right-side Student file rail lists enrolment letter, ID pack, fee PDF and graduation date — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most student-account questions: definition, eligibility, perks/fees, and graduation planning."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch student banking — studentrekening name, enrolment proof, lower fee band, package perks, international docs, graduation switch — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise student-account norms; deeper sections expand each theme without ranking banks."
    ),
    whatIs: visual(
      "what-is",
      "Premium desk scene explaining a Dutch studentrekening — everyday IBAN folder, student ID card, enrolment letter, and a General information only rail — canal window light, ExpatLife brand area.",
      "A studentrekening is an everyday payment account with student-oriented pricing and perks — not a separate visa product."
    ),
    eligibility: visual(
      "eligibility",
      "Premium eligibility board for student accounts — age bands, enrolment proof, international student path — checklist for school letter, ID and BSN timing — Verify with your bank rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Who can open depends on enrolment, age and bank product rules — every applicant usually completes identification."
    ),
    perks: visual(
      "perks",
      "Premium package-perks board for Dutch student accounts — lower monthly fee, free debit card cue, youth or student discounts, app extras — right-side Perks rail with verify each bank, ExpatLife brand footer.",
      "Perks differ by bank — treat marketing lists as orientation, then confirm live package pages."
    ),
    costs: visual(
      "costs",
      "Premium costs orientation board for Dutch student accounts — student package often about €0–€3.50 per month, regular betaalrekening about €3.50–€7, debit card and ATM lines, 2026 indicative calendar — Verify with your bank rail, canal skyline, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Indicative 2026 student fee bands — confirm live tariffs with your bank."
    ),
    vsRegular: visual(
      "vs-regular",
      "Premium comparison board — studentrekening vs regular betaalrekening — fee band, enrolment requirement, perk expiry, graduation switch — desk scene with two account folders and ExpatLife brand footer.",
      "Student packages are everyday accounts with student pricing — regular packages usually cost more without enrolment proofs."
    ),
    international: visual(
      "international",
      "Premium international-student documents board — passport, enrolment letter, BSN timing, address proof, residence permit cue — Student visa short-link note, canal backdrop, ExpatLife brand footer with compass and Live. Love. Stay.",
      "International students usually need the same banking KYC plus enrolment proof — visa deep-dives live on Student visa."
    ),
    graduation: visual(
      "graduation",
      "Premium graduation transition timeline — notify the bank, convert to regular package, check fee uplift, keep IBAN for salary and rent — calm Dutch campus-to-city scene and ExpatLife brand footer with compass and Live. Love. Stay.",
      "After graduation, student pricing usually ends — plan the conversion before the first post-study salary cycle."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for student accounts — EU student arriving, non-EU with residence permit, switching from regular package, graduating into first job — each with a first move.",
      "Different student stories need different first moves — not one universal bank ranking."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands student bank accounts — skipping enrolment proof, ignoring graduation fees, treating this as taxonomy, mixing visa advice, assuming every bank offers student pricing — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no fee guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium student-account readiness checklist board — enrolment letter ready, ID pack complete, fee PDF checked, perks noted, graduation date saved, IBAN plan for rent — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you rely on a student IBAN for rent or tuition — then verify fees with your bank."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Understand what a Dutch studentrekening is",
        "See enrolment, age and international eligibility cues",
        "Orient on package perks and indicative 2026 fee bands",
        "Plan the graduation transition before pricing changes",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Studentrekening is an everyday IBAN with student pricing",
        "Enrolment proof is usually required",
        "Fees often sit below a regular betaalrekening",
        "Account taxonomy lives on Types of bank accounts",
      ],
    },
    whatIs: {
      title: "Studentrekening basics",
      items: [
        "Everyday / payment account for enrolled students",
        "Often lower monthly fees and student-oriented perks",
        "Not a visa product and not a full account-types tour",
        "Link to Types of accounts for taxonomy",
      ],
    },
    eligibility: {
      title: "Eligibility habits",
      items: [
        "Enrolment at a recognised Dutch school or university is common",
        "Age bands and maximum study duration differ by bank",
        "International students usually complete the same KYC steps",
        "Product rules differ — verify with the bank",
      ],
    },
    perks: {
      title: "Perk orientation",
      items: [
        "Lower monthly package fees are the main draw",
        "Some packages include a free first debit card",
        "Youth discounts and partner deals vary widely",
        "Marketing pages expire — confirm live product sheets",
      ],
    },
    costs: {
      title: "Cost orientation habits",
      items: [
        "Budget a student package around €0–€3.50 per month (2026 orientation)",
        "Regular packages often sit around €3.50–€7 per month",
        "Indicative bands are not live tariffs",
        "Use Banking fees and Cheapest accounts for broader cost context",
      ],
    },
    vsRegular: {
      title: "Vs regular habits",
      items: [
        "Both are everyday payment accounts with an IBAN",
        "Student pricing usually needs enrolment proof",
        "Regular packages do not depend on student status",
        "Graduation typically moves you onto regular pricing",
      ],
    },
    international: {
      title: "International student habits",
      items: [
        "Passport or ID plus enrolment letter are common",
        "BSN and address timing still matter for many retail products",
        "Residence-permit questions belong on Student visa",
        "Incomplete packs stall onboarding — see Account rejection",
      ],
    },
    graduation: {
      title: "Graduation habits",
      items: [
        "Expect student pricing to end after enrolment ends",
        "Ask the bank how conversion to a regular package works",
        "Budget the fee uplift before your first salary lands",
        "Keep the same IBAN when possible for rent and payroll",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "New arrivals: open after enrolment proof is ready",
        "Non-EU: align KYC with residence timing",
        "Already have a regular account: ask about student conversion",
        "Graduating: convert before the fee change surprises you",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not skip enrolment proof",
        "Do not ignore graduation fee changes",
        "Do not treat this page as a best-banks ranking",
        "Do not mix visa deep-dives into bank product pages",
      ],
    },
    checklist: {
      title: "Ready-for-student signals",
      items: [
        "Enrolment letter or school portal proof ready",
        "ID and address packs ready",
        "Fee PDF checked for student pricing",
        "Graduation / conversion notes saved",
      ],
    },
  },
  introParagraphs: [
    "A Dutch studentrekening is a student everyday bank account: an IBAN designed for enrolled students, often with lower monthly fees and package perks while you study. International and Dutch students use it for rent, tuition transfers, groceries and everyday Dutch debit payments.",
    "This page is the student-package deep dive — eligibility cues, perks, indicative 2026 fee bands, international documents, and what happens after graduation. The full account-types taxonomy lives on Types of bank accounts. Visa and residence questions live on Student visa. Shared household IBANs live on Joint bank accounts.",
  ],
  introHighlights: [
    "Orientation for enrolled students who need a Dutch everyday IBAN with student pricing",
    "Clear boundary: student eligibility and graduation here — taxonomy, visas and joint accounts live elsewhere",
    "Links into Types of accounts, Open a bank account, Joint bank accounts, Student visa and Banking hub",
  ],
  orientationFlowSteps: [
    "Know what a studentrekening is",
    "Confirm enrolment, age and bank eligibility",
    "Compare package perks and indicative fees",
    "Plan the graduation conversion before pricing changes",
  ],
  safetyFileChecklist: [
    "Enrolment letter or student portal proof",
    "Passport / ID and address documents",
    "BSN timing notes (when relevant)",
    "Bank product page confirming student package rules",
    "Indicative fee PDF checked for student vs regular pricing",
    "Graduation date and conversion reminder",
    "Bookmarks: Types of accounts, Open a bank account, Joint bank accounts, Student visa, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Just enrolled at a Dutch university",
      approach: "Open a student package once enrolment proof is ready",
      firstStep: "Download the enrolment letter before you start the bank form",
    },
    {
      situation: "International student with a new BSN",
      approach: "Complete KYC with ID, address and enrolment — visa detail lives on Student visa",
      firstStep: "Check Open a bank account for document timing",
    },
    {
      situation: "Graduating in six months",
      approach: "Keep the IBAN if possible; budget the switch to regular pricing",
      firstStep: "Ask the bank how student-to-regular conversion works",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do Dutch student bank accounts work?",
    summary:
      "A studentrekening is an everyday payment account with student-oriented pricing and perks for enrolled students. Banks usually ask for enrolment proof and apply age or study-duration rules. Fees often sit below a regular betaalrekening — treat euro bands as indicative 2026 orientation. After graduation, student pricing usually ends and the account converts to a regular package. Visa and residence deep-dives belong on the Student visa guide.",
    bullets: [
      "Default use case: everyday IBAN for rent, tuition and student life while enrolled",
      "Expect enrolment proof, ID/KYC and bank-specific age bands",
      "Student packages often cost less than regular everyday accounts — verify the PDF",
      "For taxonomy use Types of accounts; for visas use Student visa; for shared households use Joint bank accounts",
    ],
    note: "This page does not rank banks or promise fees. Use Best banks for expats when you shortlist, and verify student products on each bank’s official pages.",
  },
  snapshotSignals: [
    {
      label: "Dutch name",
      value: "Studentrekening",
      note: "Everyday IBAN with student pricing",
    },
    {
      label: "Must show",
      value: "Enrolment proof",
      note: "School or university confirmation",
    },
    {
      label: "2026 cost cue",
      value: "Often €0–€3.50/mo",
      note: "Below many regular packages",
    },
    {
      label: "Must plan",
      value: "Graduation switch",
      note: "Student pricing usually ends",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Eligibility, package perks, indicative student fee bands, international documents and graduation transition for expats.",
    },
    {
      title: "Studentrekening",
      body: "An everyday payment account with student-oriented pricing while you are enrolled.",
    },
    {
      title: "Who typically opens",
      body: "Enrolled students who meet the bank’s age and enrolment rules and complete identification.",
    },
    {
      title: "Package perks & fees",
      body: "Lower monthly fees and student extras are common — always verify live package pages.",
    },
    {
      title: "What belongs elsewhere",
      body: "Account taxonomy → Types of accounts. Visas → Student visa. Shared IBANs → Joint bank accounts.",
    },
    {
      title: "Setup next step",
      body: "Need the general onboarding path first? Open a bank account — then return here for student-specific habits.",
    },
  ] satisfies TipCard[],
  whatIs: {
    heading: "What is a studentrekening?",
    lead: "Studentrekening is the everyday Dutch phrase for a student current account: a payment IBAN with student-oriented fees and perks while you are enrolled. It is not a separate “magic product type” outside the banking system — it is an everyday account with student eligibility rules.",
    bullets: [
      "One everyday IBAN for rent, tuition, groceries and Dutch debit payments",
      "Usually priced below a regular betaalrekening while enrolment continues",
      "Perks and age limits differ by bank — always read the official student package page",
      "Not a visa product and not a joint / household deep dive",
    ],
    cards: [
      {
        title: "Everyday money rail",
        body: "Most students use the IBAN for rent, public transport top-ups, groceries and online iDEAL checkouts — same rails as other everyday accounts.",
      },
      {
        title: "Not the taxonomy page",
        body: "Savings, joint, business and app-only categories belong on Types of bank accounts. This page stays on student eligibility, perks, fees and graduation.",
      },
      {
        title: "Not the visa guide",
        body: "Residence permits, proof of funds and IND steps live on Student visa. Link out for immigration; keep this page on banking products.",
      },
      {
        title: "English labels vary",
        body: "You may see “student account”, “youth package” or Dutch product names. Confirm enrolment rules, fee duration and conversion terms.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Taxonomy of everyday, savings, joint, student and business accounts",
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Documents, BSN timing and setup steps",
      },
      {
        label: "Joint bank accounts",
        href: JOINT_BANK_ACCOUNTS_PATH,
        description: "Shared IBAN orientation for couples and housemates",
      },
      {
        label: "Student visa",
        href: STUDENT_VISA_PATH,
        description: "Study-route immigration orientation — short link, not a deep dive here",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  eligibility: {
    heading: "Who can open a student bank account?",
    lead: "In practice, banks offer student packages to enrolled students who meet age bands and provide enrolment proof. International students usually follow the same identification path as other newcomers — banks decide residency, ID, BSN timing and product availability.",
    bullets: [
      "Enrolment at a Dutch university, hogeschool or recognised school is commonly required",
      "Age ceilings and maximum study duration differ by bank — verify the product sheet",
      "Every applicant usually completes KYC with ID and address documents",
      "Visa status is a separate track — see Student visa for immigration orientation",
    ],
    cards: [
      {
        title: "Dutch and EU students",
        body: "With a Dutch address and enrolment letter, many retail student packages are reachable once KYC is complete.",
      },
      {
        title: "International / non-EU students",
        body: "Expect passport, enrolment proof and often BSN/address timing. Residence-permit detail belongs on Student visa — this page stays on banking docs.",
      },
      {
        title: "Age and study duration",
        body: "Some packages stop at a stated age or after a maximum number of study years. Read the fine print before you rely on student pricing.",
      },
      {
        title: "Already have a regular account",
        body: "Ask whether your bank can convert a betaalrekening into a student package, or whether a fresh student product is cleaner.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Newly enrolled student",
        homeHabit: "Open any account and hope for a student discount later",
        dutchNorm: "Show enrolment proof when you apply for the student package",
        tip: "Download the letter before you start the form",
      },
      {
        setting: "International student",
        homeHabit: "Treat the visa letter as the bank application",
        dutchNorm: "Bank KYC plus enrolment proof; visa is a separate process",
        tip: "Bookmark Student visa for IND questions",
      },
      {
        setting: "Age near the package limit",
        homeHabit: "Ignore the age line on the product page",
        dutchNorm: "Banks publish age or duration ceilings",
        tip: "Check how long student pricing lasts",
      },
      {
        setting: "Account rejection risk",
        homeHabit: "Retry the same incomplete file",
        dutchNorm: "Incomplete ID/address/enrolment packs stall onboarding",
        tip: "See Account rejection orientation",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Core onboarding documents and timing",
      },
      {
        label: "Student visa",
        href: STUDENT_VISA_PATH,
        description: "Study-route immigration orientation",
      },
      {
        label: "Account rejection",
        href: ACCOUNT_REJECTION_PATH,
        description: "What incomplete files and bank decisions can look like",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  perks: {
    heading: "Student package perks to compare",
    lead: "Student packages compete on more than the monthly fee: debit-card inclusion, youth discounts, cashback pilots and partner deals. Treat perk lists as orientation — banks change promotions, and this guide does not endorse any offer.",
    bullets: [
      "Lower monthly package fees are usually the core benefit",
      "A first debit card is often included or discounted — confirm shipping and replacement fees",
      "Partner discounts (retail, travel, insurance pilots) vary and expire",
      "App features (budget tools, savings pots) are nice-to-haves — verify what you actually need",
    ],
    cards: [
      {
        title: "Fee relief",
        body: "The main reason students choose a studentrekening is a lower monthly package cost versus a regular betaalrekening.",
      },
      {
        title: "Debit card access",
        body: "Everyday Dutch payments are pinpas-first. See Debit cards for till culture once your student card arrives.",
      },
      {
        title: "Partner extras",
        body: "Some banks advertise student discounts with retailers or services. Confirm start/end dates on the official page.",
      },
      {
        title: "What this is not",
        body: "Not a ranking of “best student perks” and not a promise that any promotion will still exist when you apply.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Pinpas culture for the card on your student IBAN",
      },
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, IBAN and SEPA rails for tuition and rent",
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "When cash still helps beside a student debit card",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  costs: {
    heading: "Indicative student account costs (2026)",
    lead: "Student everyday packages often cost less than regular pinpas packages while enrolment continues. Euro figures below are indicative orientation for 2026 planning conversations — not live tariffs, not a ranking of banks, and not personal advice. Always verify current package prices on your bank’s official pages.",
    bullets: [
      "Many student packages sit around €0–€3.50 per month in 2026 orientation (~€0–€42 per year)",
      "Many regular / non-student big-bank packages sit around €3.50–€7 per month (~€42–€84 per year)",
      "Digital / neo student-friendly options vary widely: some keep low base fees; others charge for physical cards",
      "Replacement cards still often land around €7–€15 one-off — same order of magnitude as debit-card orientation",
    ],
    cards: [
      {
        title: "Student package band",
        body: "As orientation, many mainstream student packages land around €0–€3.50 per month in 2026 while enrolment proof remains valid.",
      },
      {
        title: "Regular package band",
        body: "After graduation — or without student eligibility — many everyday packages sit around €3.50–€7 per month. Budget the uplift early.",
      },
      {
        title: "Cards and ATMs",
        body: "First debit cards are often included in student packages; replacement and foreign-ATM fees still appear on tariff PDFs.",
      },
      {
        title: "What this is not",
        body: "Not a cheapest-bank ranking and not a live fee table. Use Banking fees, Cheapest accounts and Best banks for broader comparison — then verify PDFs.",
      },
    ] satisfies TipCard[],
    indicativeRows: [
      {
        setting: "Student everyday package (big banks)",
        band: "~€0–€3.50 / month (~€0–€42 / year)",
        tip: "While enrolment proof remains valid",
      },
      {
        setting: "Regular betaalrekening (big banks)",
        band: "~€3.50–€7 / month (~€42–€84 / year)",
        tip: "Typical post-graduation baseline",
      },
      {
        setting: "Student → regular uplift (indicative)",
        band: "Often ~€2–€7 / month more after conversion",
        tip: "Ask the bank how conversion is priced",
      },
      {
        setting: "Digital / neo student-friendly options",
        band: "Often €0–€10+ / month depending on tier",
        tip: "Watch physical card costs",
      },
      {
        setting: "Replacement debit card",
        band: "Commonly ~€7–€15 one-off",
        tip: "Same order as debit-card guide",
      },
      {
        setting: "Own-bank ATM (NL)",
        band: "Often free within package limits",
        tip: "Prefer your own network",
      },
    ] satisfies CostRow[],
    warningItems: [
      "Indicative 2026 euro bands are orientation only — not live prices",
      "Bank tariff PDFs and contracts override anything on this guide",
      "This is not banking advice or a promise of a specific student fee",
    ],
    crossLinks: [
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Broader fee categories for Dutch banking",
        status: "live" as const,
      },
      {
        label: "Cheapest bank accounts",
        href: CHEAPEST_BANK_ACCOUNTS_PATH,
        description: "Low-cost orientation — verify official sites",
        status: "live" as const,
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly banking costs",
        status: "live" as const,
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist accounts — then confirm student products",
        status: "live" as const,
      },
    ] satisfies StudentBankAccountsLink[],
  },
  vsRegular: {
    heading: "Studentrekening vs regular betaalrekening",
    lead: "Both are everyday payment accounts with an IBAN. The difference is usually eligibility, monthly pricing and perk duration — not a different payments network. After graduation, most students move onto regular package pricing while keeping the same IBAN when the bank allows.",
    bullets: [
      "Same rails: IBAN, iDEAL, SEPA and Dutch debit culture",
      "Student pricing usually needs ongoing enrolment proof",
      "Regular packages do not depend on student status",
      "Graduation is the common moment when fees step up",
    ],
    cards: [
      {
        title: "When student pricing helps",
        body: "If you are enrolled and meet age rules, a student package can keep monthly costs lower during study years.",
      },
      {
        title: "When a regular package is enough",
        body: "If you already have a workable everyday account and cannot meet student eligibility, stay on regular pricing rather than forcing a mismatch.",
      },
      {
        title: "Joint vs student boundary",
        body: "Shared household IBANs are a different product family — see Joint bank accounts. Student packages are usually individual everyday accounts.",
      },
      {
        title: "Taxonomy boundary",
        body: "For the full map of everyday, savings, joint, student and business accounts, use Types of bank accounts.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Monthly package fee",
        homeHabit: "Assume student and regular cost the same",
        dutchNorm: "Student packages often cost less while enrolled",
        tip: "Compare both lines on the tariff PDF",
      },
      {
        setting: "Eligibility",
        homeHabit: "Anyone can claim student pricing",
        dutchNorm: "Enrolment proof and age rules usually apply",
        tip: "Keep the letter ready for renewals",
      },
      {
        setting: "After graduation",
        homeHabit: "Keep student pricing forever",
        dutchNorm: "Banks convert to regular packages",
        tip: "Ask how the switch is billed",
      },
      {
        setting: "Shared rent with a partner",
        homeHabit: "Force a student package to be joint",
        dutchNorm: "Joint products are a separate path",
        tip: "See Joint bank accounts for shared access",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Where student sits in the account map",
      },
      {
        label: "Joint bank accounts",
        href: JOINT_BANK_ACCOUNTS_PATH,
        description: "Shared IBAN for couples and housemates",
      },
      {
        label: "Traditional vs digital banks",
        href: HPW_TRAD_DIG_PATH,
        description: "Branch depth versus app-speed trade-offs",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  international: {
    heading: "International student documents",
    lead: "International students usually need the same banking identification as other newcomers, plus enrolment proof for a student package. Keep immigration questions on the Student visa guide — this section stays on banking documents and timing.",
    bullets: [
      "Passport or national ID plus a Dutch address pack are common KYC inputs",
      "Enrolment letter or portal confirmation unlocks many student packages",
      "BSN timing still matters for many retail products — see Open a bank account",
      "Residence permits and IND steps: short link to Student visa, not a deep dive here",
    ],
    cards: [
      {
        title: "Core banking file",
        body: "ID, address proof, and any BSN documents your bank lists. Incomplete packs stall applications.",
      },
      {
        title: "Enrolment proof",
        body: "A dated letter or student-portal screenshot that shows you are enrolled. Banks decide what format they accept.",
      },
      {
        title: "Visa boundary",
        body: "Proof of funds, MVV/residence and IND timelines belong on Student visa. Do not treat this banking page as immigration advice.",
      },
      {
        title: "If onboarding stalls",
        body: "Account rejection orientation explains incomplete files and bank decisions without ranking providers.",
      },
    ] satisfies TipCard[],
    checklistItems: [
      "Passport or EU/EEA ID ready",
      "Dutch address proof as the bank defines it",
      "BSN available or timing plan noted",
      "Enrolment letter / portal confirmation downloaded",
      "Student visa questions bookmarked separately",
      "Open a bank account guide reviewed for document order",
    ],
    crossLinks: [
      {
        label: "Student visa",
        href: STUDENT_VISA_PATH,
        description: "Study-route immigration orientation",
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Document order and BSN timing",
      },
      {
        label: "Account rejection",
        href: ACCOUNT_REJECTION_PATH,
        description: "When onboarding stalls — orientation",
      },
      {
        label: "International transfers",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Family support and tuition sends from a Dutch IBAN",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  graduation: {
    heading: "What happens after graduation?",
    lead: "Student pricing usually ends when enrolment ends or when you hit a bank’s age/duration limit. Treat graduation as a money-ops moment: confirm conversion terms, budget the fee uplift, and keep your IBAN stable for rent and payroll when possible.",
    bullets: [
      "Expect a conversion to a regular everyday package",
      "Ask whether your IBAN stays the same — landlords and payroll prefer stability",
      "Budget the monthly fee uplift using the indicative bands above",
      "Update standing orders only if the bank issues a new IBAN (uncommon but verify)",
    ],
    cards: [
      {
        title: "Notify and convert",
        body: "Some banks convert automatically when enrolment expires; others ask you to confirm a regular package. Read the letter or app notice carefully.",
      },
      {
        title: "Fee uplift",
        body: "Moving from ~€0–€3.50 to ~€3.50–€7 per month is a common orientation jump — not a live quote. Verify your tariff PDF.",
      },
      {
        title: "First salary",
        body: "Give employers the IBAN that will remain after conversion. Avoid changing payroll details mid-cycle if you can help it.",
      },
      {
        title: "ZZP / business boundary",
        body: "If you start freelancing, keep business money separate — see Best bank for ZZP rather than stretching a student package.",
      },
    ] satisfies TipCard[],
    timeline: [
      {
        phase: "1",
        title: "Note your enrolment end date",
        detail: "Put a calendar reminder a few months before graduation or the bank’s age limit.",
      },
      {
        phase: "2",
        title: "Ask about conversion terms",
        detail: "Confirm whether the IBAN stays, which regular package you move to, and the new monthly fee.",
      },
      {
        phase: "3",
        title: "Budget the uplift",
        detail: "Use Banking fees / Cheapest accounts for context, then verify the live PDF.",
      },
      {
        phase: "4",
        title: "Keep rent and payroll stable",
        detail: "Only update landlord or employer IBANs if the bank actually issues a new number.",
      },
    ],
    crossLinks: [
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Fee categories for the post-student package",
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist if you decide to switch banks after study",
      },
      {
        label: "Best bank for ZZP",
        href: BEST_BANK_ZZP_PATH,
        description: "If you move into freelance income",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  scenarios: {
    heading: "Student account scenarios for expats",
    intro: "Same product family, different first moves depending on whether you are newly enrolled, arriving on a study route, converting from a regular package, or graduating into work.",
    rows: [
      {
        situation: "EU student starting a Dutch degree",
        approach: "Open a student package once enrolment proof and address docs are ready",
        firstStep: "Download the enrolment letter before the bank form",
      },
      {
        situation: "Non-EU student with residence timing",
        approach: "Complete banking KYC beside enrolment; keep IND questions on Student visa",
        firstStep: "Align Open a bank account document order with your arrival week",
      },
      {
        situation: "Already have a regular betaalrekening",
        approach: "Ask about conversion to a student package versus opening fresh",
        firstStep: "Call or chat with the bank using your enrolment letter",
      },
      {
        situation: "Graduating into a first job",
        approach: "Convert to regular pricing, keep IBAN stable for payroll and rent",
        firstStep: "Start the graduation timeline two to three months early",
      },
    ] satisfies ScenarioRow[],
  },
  howToSchema: {
    name: "How to set up a Dutch student bank account as an expat",
    description:
      "Orientation steps for a Netherlands studentrekening: confirm enrolment eligibility, gather documents, open the student package, activate your debit card, and plan the graduation conversion.",
    anchor: "#howto",
  },
  howTo: {
    heading: "How to set up a student account (step by step)",
    lead: "A calm sequence for your first Dutch student money cycle — banks remain authoritative for fees and eligibility.",
    steps: [
      {
        name: "Confirm you meet student package rules",
        text: "Check enrolment, age and duration lines on the bank’s student product page. Do not rely on this guide as a ranking.",
      },
      {
        name: "Gather enrolment proof and KYC documents",
        text: "Download the enrolment letter, prepare ID and address packs, and note BSN timing. Use Open a bank account for document order.",
      },
      {
        name: "Open the student package and activate your card",
        text: "Complete identification, set your PIN, and make one small test purchase before rent or tuition day.",
      },
      {
        name: "Compare fees and perks on the official PDF",
        text: "Save the tariff sheet covering student pricing, card fees and ATM lines. Use Banking fees for broader context.",
      },
      {
        name: "File a graduation conversion reminder",
        text: "Note when enrolment ends and how the bank converts to a regular package so the fee uplift is not a surprise.",
      },
    ] satisfies HowToStep[],
  },
  mistakes: {
    heading: "Common expat mistakes",
    cards: [
      {
        title: "Skipping enrolment proof",
        body: "Student pricing usually needs a dated enrolment letter or portal confirmation.",
        advice: "Download proof before you start the application.",
      },
      {
        title: "Ignoring graduation fee changes",
        body: "Student packages often step up to regular pricing when enrolment ends.",
        advice: "Set a conversion reminder months before graduation.",
      },
      {
        title: "Mixing visa advice into banking",
        body: "IND and residence-permit questions belong on Student visa.",
        advice: "Keep this page for products and fees; link out for immigration.",
      },
      {
        title: "Treating this page as a bank ranking",
        body: "Best-banks comparison tables belong on sibling guides.",
        advice: "Shortlist on Best banks for expats; verify student products on official sites.",
      },
      {
        title: "Assuming every bank offers student pricing",
        body: "Some digital or neo products use different youth tiers — or none.",
        advice: "Read the product page; do not invent eligibility.",
      },
      {
        title: "Confusing student with joint",
        body: "Shared household IBANs are a different deep dive.",
        advice: "Use Joint bank accounts when two adults need shared access.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Student account readiness checklist",
    items: [
      "Enrolment letter or portal proof downloaded",
      "Bank product page confirms student package rules you need",
      "ID and address packs ready",
      "BSN timing noted when relevant",
      "Indicative fee PDF checked for student vs regular pricing",
      "Debit card activation and PIN plan ready",
      "Small test purchase completed",
      "Rent / tuition IBAN update plan written",
      "Graduation conversion reminder saved",
      "Types of accounts / Open a bank account / Student visa / Joint bookmarked for boundaries",
    ],
  },
  tools: {
    heading: "Tools that help nearby decisions",
    items: [
      {
        label: "Bank comparison tool",
        href: BANK_COMPARISON_TOOL_PATH,
        description: "Fit questionnaire when you are ready to shortlist accounts",
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly account and card costs",
      },
      {
        label: "Transfer cost calculator",
        href: TRANSFER_COST_CALCULATOR_PATH,
        description: "Model cross-border sends from a Dutch IBAN",
      },
    ] satisfies StudentBankAccountsLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended options",
    subtitle:
      "Soft CTAs — we are not opening accounts for you. Use these cards to jump to official sites for student-oriented everyday account options, then validate enrolment rules and fees yourself.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance to student-account discovery, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-money-student-accounts-support-providers",
    analyticsPageContext: "student-accounts-recommended-options",
    categoryLinks: [
      { href: "/netherlands/services/banks/", label: "Banks directory" },
      { href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH, label: "Open a bank account guide" },
      { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
    ],
    browseLabel: "More banking context: ",
  },
  faq: [
    {
      q: "What is a studentrekening?",
      a: "A Dutch student everyday bank account: a payment IBAN with student-oriented fees and perks while you are enrolled. Features and eligibility follow each bank’s product rules.",
    },
    {
      q: "Can international students open a student bank account?",
      a: "Often yes if you meet the bank’s enrolment, age and identification rules. Visa and residence-permit questions belong on the Student visa guide — this page stays on banking documents and products.",
    },
    {
      q: "How much does a student bank account cost in 2026?",
      a: "As orientation only: many student packages sit around €0–€3.50 per month, while many regular packages sit around €3.50–€7 per month. Always verify live tariffs with your bank.",
    },
    {
      q: "What happens to my student account after graduation?",
      a: "Student pricing usually ends. Banks typically convert you to a regular everyday package. Ask whether your IBAN stays the same and budget the fee uplift early.",
    },
    {
      q: "Is a studentrekening different from a regular betaalrekening?",
      a: "Both are everyday payment accounts. The usual differences are enrolment eligibility, monthly pricing and perk duration — not a different payments network.",
    },
    {
      q: "Do I need a student visa to open a student bank account?",
      a: "Banks set their own eligibility. Immigration status is a separate process — see Student visa for study-route orientation, and Open a bank account for KYC document order.",
    },
    {
      q: "Is this the same as Types of bank accounts?",
      a: "No. Types of accounts owns the taxonomy of everyday, savings, joint, student and business products. This page owns student eligibility, perks, fees and graduation orientation.",
    },
    {
      q: "Should housemates use a student account together?",
      a: "Student packages are usually individual. For a shared rent IBAN, see Joint bank accounts.",
    },
    {
      q: "Which bank is best for students?",
      a: "This guide does not rank banks. Use Best banks for expats and Open a bank account for shortlists, then confirm student package rules on official sites.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Banks set fees, eligibility and conversion rules — verify with them and seek qualified advice when your situation is complex.",
    },
  ],
  relatedGuides: [
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Account taxonomy — live sibling boundary",
      status: "live" as const,
    },
    {
      label: "Joint bank accounts",
      href: JOINT_BANK_ACCOUNTS_PATH,
      description: "Shared IBAN for couples and housemates — live sibling",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Setup path and documents",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, IBAN and SEPA rails",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Till culture alongside student debit cards",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Pinpas culture for student packages",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "When credit helps for deposits and travel",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: HPW_FEES_PATH,
      description: "Fee categories without live tariff promises",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: CHEAPEST_BANK_ACCOUNTS_PATH,
      description: "Low-cost orientation — verify official sites",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: HPW_TRAD_DIG_PATH,
      description: "Branch depth versus app-speed trade-offs",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist and comparison — live cluster peer",
      status: "live" as const,
    },
    {
      label: "Student visa",
      href: STUDENT_VISA_PATH,
      description: "Study-route immigration — short link, not a deep dive here",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Sending money abroad — live cluster peer",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "Multi-currency / app banking orientation",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: BANKING_SECURITY_PATH,
      description: "Card habits and scam awareness",
      status: "live" as const,
    },
    {
      label: "Account rejection",
      href: ACCOUNT_REJECTION_PATH,
      description: "When onboarding stalls — orientation",
      status: "live" as const,
    },
  ] satisfies StudentBankAccountsLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Taxonomy sibling — where student sits in the map",
      status: "live" as const,
    },
    {
      label: "Joint bank accounts",
      href: JOINT_BANK_ACCOUNTS_PATH,
      description: "Live sibling — shared household IBAN orientation",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get to a Dutch IBAN path",
      status: "live" as const,
    },
    {
      label: "Student visa",
      href: STUDENT_VISA_PATH,
      description: "Live — study-route immigration orientation",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Live cluster peer — compare onboarding trade-offs",
      status: "live" as const,
    },
  ] satisfies StudentBankAccountsLink[],
  exploreNext: [
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "See where student fits in the account map",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up the Dutch IBAN path",
      status: "live" as const,
    },
    {
      label: "Joint bank accounts",
      href: JOINT_BANK_ACCOUNTS_PATH,
      description: "Shared access for couples and housemates",
      status: "live" as const,
    },
    {
      label: "Student visa",
      href: STUDENT_VISA_PATH,
      description: "Study-route immigration orientation",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist providers",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "Model monthly cost bands",
      status: "live" as const,
    },
  ] satisfies StudentBankAccountsLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
    },
    {
      label: "Study in NL",
      href: "https://www.studyinnl.org/",
      description: "Official study-in-the-Netherlands orientation for international students",
    },
    {
      label: "De Nederlandsche Bank — Payments",
      href: "https://www.dnb.nl/en/payments/",
      description: "Central bank orientation on the Dutch payments landscape",
    },
    {
      label: "Betaalvereniging Nederland",
      href: "https://www.betaalvereniging.nl/",
      description: "Dutch Payments Association — industry context on payment methods",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current articles on student accounts and banking fees",
    },
    {
      label: "AFM — Consumers",
      href: "https://www.afm.nl/en/consumenten",
      description: "Authority for the Financial Markets — consumer orientation (not product endorsements)",
    },
  ],
  disclosure:
    "Some links on this page — including the Recommended options block — may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes bank eligibility, fees or conversion rules.",
} as const;

export type StudentBankAccountsPage = typeof studentBankAccountsPage;
