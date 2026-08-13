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
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { TYPES_OF_BANK_ACCOUNTS_PATH } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const JOINT_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/joint-accounts/" as const;

/** Local path string avoids a circular import with studentBankAccountsPageModel. */
const STUDENT_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/student-accounts/" as const;
const BANKING_SECURITY_PATH = "/netherlands/money/banking/security/" as const;
const ACCOUNT_REJECTION_PATH = "/netherlands/money/banking/account-rejection/" as const;

export type JointBankAccountsLink = {
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
const VISUAL_PREFIX = "joint-bank-accounts-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const jointBankAccountsPage = {
  slug: "joint-accounts",
  path: JOINT_BANK_ACCOUNTS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(JOINT_BANK_ACCOUNTS_PATH) ?? "2026-08-14",
  seo: {
    title: "Joint Bank Accounts in the Netherlands | Complete Guide for Expats",
    description:
      "Gezamenlijke rekening orientation for couples and housemates in the Netherlands: who can open, shared access and dual cards, household money habits, indicative 2026 joint fee uplifts, opening steps and a calm exit checklist — not financial advice.",
    keywords: [
      "joint bank account Netherlands",
      "gezamenlijke rekening",
      "shared bank account Netherlands",
      "joint account expats Netherlands",
      "couple bank account Netherlands",
      "housemate joint account Netherlands",
      "joint debit cards Netherlands",
      "gezamenlijke rekening fees",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Joint Bank Accounts in the Netherlands",
    subtitle:
      "How a Dutch gezamenlijke rekening works for couples and housemates: shared access, dual cards, household money habits, indicative joint fee uplifts, opening steps and a calm exit checklist — orientation only.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Exit checklist", href: "#exit" },
    chips: ["Gezamenlijke rekening", "Shared access", "Dual cards", "Household money", "Exit checklist"],
    disclaimer:
      "General orientation only — not financial, legal or relationship advice. Joint products, fees, liability and exit rules differ by bank and personal situation. Confirm details with your bank and, when needed, a qualified adviser before you open or close a shared account.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch apartment kitchen table: multicultural couple reviewing a shared household budget on a laptop beside two debit cards and a rent letter, soft canal-house daylight through the window.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-is", label: "What it is" },
    { href: "#who-can-open", label: "Who can open" },
    { href: "#shared-access", label: "Shared access" },
    { href: "#household", label: "Household habits" },
    { href: "#costs", label: "Costs" },
    { href: "#opening", label: "Opening" },
    { href: "#exit", label: "Exit" },
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
      "Premium orientation board titled Joint Bank Accounts in the Netherlands — four building blocks: know what a gezamenlijke rekening is, decide who shares access, plan dual cards and household habits, and keep an exit checklist — right-side Joint file rail lists both IDs ready, rent IBAN agreed, card plan set and exit notes saved.",
      "Four habits cover most joint-account questions: shared IBAN basics, access rules, dual cards, and a calm exit plan."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch joint banking — shared IBAN for rent, dual pinpas cards, both holders can usually pay, fees often higher than solo, KYC for every adult, and exit planning — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise joint-account norms; deeper sections expand each theme without ranking banks."
    ),
    whatIs: visual(
      "what-is",
      "Premium desk scene explaining a Dutch gezamenlijke rekening — one shared IBAN, household bills folder, two name cards, and a General information only rail — canal window light, ExpatLife brand area.",
      "A gezamenlijke rekening is one everyday IBAN that more than one adult can use for household money — not a full account-types tour."
    ),
    whoCanOpen: visual(
      "who-can-open",
      "Premium eligibility board for joint accounts — couples, housemates and co-signers — checklist for ID, BSN timing and bank product rules — Verify with your bank rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Who can open depends on the bank’s product rules — every adult usually completes identification."
    ),
    sharedAccess: visual(
      "shared-access",
      "Premium shared-access diagram — two adults, one IBAN, dual pinpas cards, app logins, and payment approval habits — right-side Access rail with both can spend, both see history, and block cards independently — canal backdrop, ExpatLife brand footer.",
      "Shared access usually means dual cards and visibility — liability and limits still follow your bank’s contract."
    ),
    household: visual(
      "household",
      "Premium household money habits board — rent and utilities on the joint IBAN, personal spending on solo accounts, weekly sync habit — Amsterdam apartment desk scene and ExpatLife brand area.",
      "Many households keep joint for fixed bills and solo accounts for personal spend — habits beat perfect systems."
    ),
    costs: visual(
      "costs",
      "Premium costs orientation board for Dutch joint accounts — solo package about €3.50–€7 per month, joint uplift often about €1–€4 extra per month, second debit card a few euros, 2026 indicative calendar — Verify with your bank rail, canal skyline, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Indicative 2026 joint uplift bands — confirm live tariffs with your bank."
    ),
    opening: visual(
      "opening",
      "Premium opening-steps timeline for a gezamenlijke rekening — choose bank, gather both IDs, book KYC, activate dual cards, move rent IBAN — teal stations and ExpatLife brand footer.",
      "Opening is a shared onboarding journey — both adults usually appear in the bank’s process."
    ),
    exit: visual(
      "exit",
      "Premium breakup and exit checklist board — move rent IBAN, cancel direct debits, return or block cards, close or convert the account, keep statements — calm Dutch apartment context and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Exit planning is practical money ops — not legal advice; banks and landlords set their own rules."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for joint accounts — new couple renting, housemates splitting bills, one partner arrives later, and calm separation exit — each with a first move.",
      "Different household stories need different joint setups — not one universal rule."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands joint bank accounts — skipping exit talk, mixing all personal spend, assuming one card is enough, ignoring second-card fees, treating this as account taxonomy — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no fee guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium joint-account readiness checklist board — both IDs ready, rent IBAN plan, dual cards activated, fee PDF checked, household rules agreed, exit notes saved — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you rely on a joint IBAN for rent — then verify fees and product rules with your bank."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Understand what a Dutch gezamenlijke rekening is",
        "See who usually opens and what each bank still decides",
        "Plan shared access, dual cards and household money habits",
        "Orient on indicative joint fee uplifts and a calm exit checklist",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "One shared IBAN for household money",
        "Dual debit cards are common",
        "Fees often sit above a solo package",
        "Account taxonomy lives on Types of bank accounts",
      ],
    },
    whatIs: {
      title: "Gezamenlijke rekening basics",
      items: [
        "One everyday IBAN used by more than one adult",
        "Often used for rent, utilities and groceries",
        "Not the full tour of savings or business products",
        "Link to Types of accounts for taxonomy",
      ],
    },
    whoCanOpen: {
      title: "Eligibility habits",
      items: [
        "Couples and housemates commonly apply",
        "Every adult usually completes KYC",
        "BSN and address timing still matter",
        "Product rules differ — verify with the bank",
      ],
    },
    sharedAccess: {
      title: "Access habits",
      items: [
        "Expect dual pinpas cards in many packages",
        "Both holders often see transactions",
        "App logins and card blocks are personal",
        "Liability follows the bank contract — read it",
      ],
    },
    household: {
      title: "Household money habits",
      items: [
        "Park fixed bills on the joint IBAN",
        "Keep personal spend on solo accounts if that helps",
        "Agree a weekly sync for large payments",
        "Write down who moves the rent IBAN if plans change",
      ],
    },
    costs: {
      title: "Cost orientation habits",
      items: [
        "Budget a joint uplift above solo packages (2026)",
        "Second debit cards often add a few euros",
        "Indicative bands are not live tariffs",
        "Use Banking fees and Cheapest accounts for broader cost context",
      ],
    },
    opening: {
      title: "Opening habits",
      items: [
        "Shortlist banks that offer a joint product you need",
        "Book identification for every adult",
        "Activate both cards before rent day",
        "Update landlord and utilities with the new IBAN carefully",
      ],
    },
    exit: {
      title: "Exit habits",
      items: [
        "Move rent and utilities before you close",
        "Cancel or redirect direct debits",
        "Block or return cards",
        "Keep statements for taxes and deposits",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "New renters: open before the first rent debit",
        "Housemates: agree rules in writing",
        "Late-arriving partner: bridge carefully",
        "Separation: treat exit as money ops first",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not skip the exit conversation",
        "Do not dump every personal purchase into joint",
        "Do not assume one card covers both adults",
        "Do not treat this page as a best-banks ranking",
      ],
    },
    checklist: {
      title: "Ready-for-joint signals",
      items: [
        "Both adults can identify with the bank",
        "Rent IBAN plan agreed",
        "Dual cards activated",
        "Exit notes saved somewhere both can find",
      ],
    },
  },
  introParagraphs: [
    "A Dutch gezamenlijke rekening is a joint everyday bank account: one IBAN that more than one adult can use for household money. Couples and housemates often open one for rent, utilities and shared groceries while keeping personal accounts for individual spending.",
    "This page is the shared-access deep dive — dual cards, household habits, indicative 2026 joint fee uplifts, opening steps and a calm exit checklist. The full account-types taxonomy lives on Types of bank accounts. Bank shortlists and comparison tables live on Best banks for expats and Open a bank account.",
  ],
  introHighlights: [
    "Orientation for couples and housemates who need a shared rent IBAN",
    "Clear boundary: shared access and exit ops here — taxonomy and best-banks rankings live elsewhere",
    "Links into Types of accounts, Open a bank account, Debit cards, Banking fees and Banking hub",
  ],
  orientationFlowSteps: [
    "Know what a gezamenlijke rekening is",
    "Confirm who can open and identify",
    "Plan dual cards and household money rules",
    "Keep a written exit checklist before you rely on the IBAN",
  ],
  safetyFileChecklist: [
    "Both adults’ IDs and address documents ready",
    "Bank product page confirming joint / partner options",
    "Agreed list of bills that will use the joint IBAN",
    "Plan for dual debit cards and app access",
    "Indicative fee PDF checked for joint uplift and second card",
    "Exit notes: who moves rent, who cancels debit, who keeps statements",
    "Bookmarks: Types of accounts, Open a bank account, Debit cards, Banking fees, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Couple signing a rental contract",
      approach: "One shared IBAN for rent and utilities keeps landlord payments simple",
      firstStep: "Confirm the bank offers a joint product before lease day",
    },
    {
      situation: "Housemates splitting fixed bills",
      approach: "Joint for shared costs, solo accounts for personal spend",
      firstStep: "Write down contribution rules and an exit plan",
    },
    {
      situation: "One partner already has a Dutch account",
      approach: "Add a co-holder or open a fresh joint product — bank rules differ",
      firstStep: "Ask the bank which path they support for your IDs",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do Dutch joint bank accounts work?",
    summary:
      "A gezamenlijke rekening is a shared everyday account with one IBAN. Couples and housemates often use it for rent, utilities and household shopping. Many packages issue dual debit cards so both adults can pin and tap. Fees often sit a little above a solo package — treat euro bands as indicative 2026 orientation. Always plan how you will exit or convert the account if living arrangements change.",
    bullets: [
      "Default use case: shared rent IBAN and household bills",
      "Expect dual pinpas cards and shared transaction visibility in many products",
      "Joint packages often cost more than a solo everyday account — verify the PDF",
      "For account taxonomy use Types of accounts; for shortlists use Best banks / Open a bank account",
    ],
    note: "This page does not rank banks or promise fees. Use Best banks for expats when you shortlist, and verify joint products on each bank’s official pages.",
  },
  snapshotSignals: [
    {
      label: "Dutch name",
      value: "Gezamenlijke rekening",
      note: "Shared everyday IBAN for household money",
    },
    {
      label: "Cards",
      value: "Often dual pinpas",
      note: "Each adult usually gets a debit card",
    },
    {
      label: "2026 cost cue",
      value: "Solo + uplift",
      note: "Often ~€1–€4/month above solo packages",
    },
    {
      label: "Must plan",
      value: "Exit path",
      note: "Move rent IBAN before you close",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Shared access, dual cards, household habits, indicative joint fee uplifts, opening steps and exit ops for expats.",
    },
    {
      title: "Gezamenlijke rekening",
      body: "One everyday IBAN used by more than one adult — usually for rent and household bills.",
    },
    {
      title: "Who typically opens",
      body: "Couples and housemates who both complete the bank’s identification steps.",
    },
    {
      title: "Shared access & cards",
      body: "Dual debit cards and app visibility are common — liability still follows the contract.",
    },
    {
      title: "What belongs elsewhere",
      body: "Account taxonomy → Types of accounts. Rankings → Best banks. Setup docs → Open a bank account.",
    },
    {
      title: "Setup next step",
      body: "Need the solo onboarding path first? Open a bank account — then return here for joint-specific habits.",
    },
  ] satisfies TipCard[],
  whatIs: {
    heading: "What is a gezamenlijke rekening?",
    lead: "Gezamenlijke rekening is the everyday Dutch phrase for a joint current account: one IBAN, more than one account holder, usually used for household money. It is not a separate “magic product type” outside the banking system — it is a shared everyday account with joint-oriented features such as dual cards and shared visibility.",
    bullets: [
      "One IBAN that landlords and utilities can debit",
      "Typically an everyday / payment account, not a full savings or business tour",
      "Holders usually see the same transaction history",
      "Product names differ by bank — always read the official joint / partner page",
    ],
    cards: [
      {
        title: "Household money rail",
        body: "Most people use the joint IBAN for rent, energy, internet and shared groceries — not necessarily for every personal café visit.",
      },
      {
        title: "Not the taxonomy page",
        body: "Savings, student, business and app-only categories belong on Types of bank accounts. This page stays on shared access and exit ops.",
      },
      {
        title: "Liability is contractual",
        body: "Banks set how joint liability, overdrafts and card limits work. Read the contract; this guide is orientation only.",
      },
      {
        title: "English labels vary",
        body: "You may see “joint account”, “partner account” or Dutch product names. Confirm the features you need: dual cards, app access and who can close.",
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
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Pinpas culture for the cards that sit on a joint IBAN",
      },
    ] satisfies JointBankAccountsLink[],
  },
  whoCanOpen: {
    heading: "Who can open a joint account?",
    lead: "In practice, adult couples and housemates commonly open a gezamenlijke rekening when every person completes the bank’s identification and eligibility checks. Banks decide residency, ID, BSN timing and product availability — there is no single national “joint account form” that overrides bank rules.",
    bullets: [
      "Every adult on the account usually completes KYC",
      "A Dutch address and BSN timing still matter for many retail products",
      "Some banks let you convert a solo account; others prefer a fresh joint product",
      "Housemates should agree contribution and exit rules before signing",
    ],
    cards: [
      {
        title: "Couples",
        body: "Married, partners or cohabiting adults often open a joint IBAN for rent. Relationship status alone does not guarantee product eligibility — the bank’s KYC does.",
      },
      {
        title: "Housemates",
        body: "Shared flats sometimes use a joint account for utilities. Write down who contributes what and how you will close if someone moves out.",
      },
      {
        title: "One person arrives later",
        body: "If one adult already has a Dutch account, ask whether a co-holder can be added or whether a new joint product is cleaner.",
      },
      {
        title: "Business / ZZP boundary",
        body: "Mixing household rent with ZZP invoicing is a different topic — see Best bank for ZZP and keep business money clearly separated unless a qualified adviser says otherwise.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Couple with Dutch addresses",
        homeHabit: "One person opens everything alone",
        dutchNorm: "Both adults usually identify for a joint product",
        tip: "Book KYC slots together when you can",
      },
      {
        setting: "Housemate flat of three",
        homeHabit: "Cash jar on the kitchen counter",
        dutchNorm: "Joint IBAN for bills or one person collects transfers",
        tip: "Agree exit rules before the first debit",
      },
      {
        setting: "Partner still abroad",
        homeHabit: "Add them later casually",
        dutchNorm: "Bank may require in-person or video KYC first",
        tip: "Ask the bank which path they support",
      },
      {
        setting: "Account rejection risk",
        homeHabit: "Retry the same incomplete file",
        dutchNorm: "Incomplete ID/address packs stall onboarding",
        tip: "See Account rejection orientation",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Solo onboarding documents and timing",
      },
      {
        label: "Account rejection",
        href: ACCOUNT_REJECTION_PATH,
        description: "What incomplete files and bank decisions can look like",
      },
      {
        label: "Best bank for ZZP",
        href: BEST_BANK_ZZP_PATH,
        description: "Keep business banking separate from household joint money",
      },
    ] satisfies JointBankAccountsLink[],
  },
  sharedAccess: {
    heading: "Shared access and dual cards",
    lead: "Most joint everyday packages are built so each adult can pay: dual debit cards (pinpas), personal PINs, and app access to the same IBAN. That convenience is the point — and the reason you should agree spending norms before rent day.",
    bullets: [
      "Expect a pinpas per adult in many retail packages",
      "Transaction history is often visible to every holder",
      "Card blocks and PIN changes are usually personal actions in the app",
      "Overdraft and limit rules belong in the bank contract — verify them",
    ],
    cards: [
      {
        title: "Dual pinpas",
        body: "Each adult typically receives a debit card linked to the joint IBAN. Activation, PIN and contactless limits follow Debit cards culture — see that sibling for till habits.",
      },
      {
        title: "App visibility",
        body: "Shared history helps with rent and utilities. It also means surprise purchases are rarely secret — agree norms early.",
      },
      {
        title: "Approvals and iDEAL",
        body: "Online Dutch checkouts often use iDEAL via a bank app. Decide who will approve household payments — rails detail lives on How payments work.",
      },
      {
        title: "Security habits",
        body: "Phishing and card fraud still apply. Use Banking safety for calm checks if something looks wrong.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Pinpas, PIN culture and ATM habits",
      },
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, IBAN and SEPA rails for household bills",
      },
      {
        label: "Banking safety & fraud",
        href: BANKING_SECURITY_PATH,
        description: "Card habits and scam awareness",
      },
    ] satisfies JointBankAccountsLink[],
  },
  household: {
    heading: "Household money habits that work for expats",
    lead: "The smoothest joint setups are boring: fixed bills on the joint IBAN, personal spending on solo accounts, and a short weekly sync for large transfers. Perfect spreadsheets are optional; clear rules are not.",
    bullets: [
      "Park rent, energy, water, internet and shared streaming on the joint IBAN",
      "Keep salaries landing where you agree — sometimes joint, sometimes solo with a standing transfer",
      "Review large purchases before they hit the shared balance",
      "Save an exit note: who moves the landlord IBAN if someone leaves",
    ],
    cards: [
      {
        title: "Fixed bills first",
        body: "Start with rent and utilities. Add groceries only if both adults want shared food money.",
      },
      {
        title: "Solo accounts still help",
        body: "Many couples keep personal accounts for gifts, hobbies and travel — joint does not have to swallow everything.",
      },
      {
        title: "Cash vs card still applies",
        body: "Markets and tips culture sit on Cash vs card. Joint cards follow the same Dutch debit-first till habits.",
      },
      {
        title: "Credit stays specialist",
        body: "Credit cards may help for deposits or travel holds — that product deep-dive lives on Credit cards.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Monthly rent",
        homeHabit: "One person pays from a personal account",
        dutchNorm: "Landlord often prefers one recurring IBAN",
        tip: "Use the joint IBAN once both cards work",
      },
      {
        setting: "Groceries",
        homeHabit: "Split every receipt in an app",
        dutchNorm: "Joint debit for shared food, or rotate weeks",
        tip: "Pick one rule and stick to it",
      },
      {
        setting: "Salary day",
        homeHabit: "Everything lands in joint",
        dutchNorm: "Many keep salary on solo + standing transfer",
        tip: "Automate the household contribution",
      },
      {
        setting: "Surprise purchase",
        homeHabit: "Hope the other person does not notice",
        dutchNorm: "Shared history makes surprises visible",
        tip: "Agree a euro threshold for a quick chat",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Till culture alongside joint debit cards",
      },
      {
        label: "Credit cards",
        href: CREDIT_CARDS_PATH,
        description: "When credit helps for deposits and travel",
      },
      {
        label: "International transfers",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Sending money abroad from a Dutch IBAN",
      },
    ] satisfies JointBankAccountsLink[],
  },
  costs: {
    heading: "Indicative joint account costs (2026)",
    lead: "Joint everyday packages often cost a little more than a solo pinpas package because of dual cards and shared servicing. Euro figures below are indicative orientation for 2026 planning conversations — not live tariffs, not a ranking of banks, and not personal advice. Always verify current package prices on your bank’s official pages.",
    bullets: [
      "Many solo big-bank packages sit around €3.50–€7 per month; joint products often add about €1–€4 per month as an uplift",
      "A second / partner debit card commonly adds a few euros per month or a one-off fee — check the line item",
      "Digital / neo joint options vary widely: some keep low base fees; others charge for physical cards",
      "Replacement cards still often land around €7–€15 one-off — same order of magnitude as debit-card orientation",
    ],
    cards: [
      {
        title: "Solo baseline (context)",
        body: "Mainstream retail packages commonly land around €3.50–€7 per month in 2026 (~€42–€84 per year) for a solo everyday account with a first debit card.",
      },
      {
        title: "Joint uplift band",
        body: "As orientation, many joint / partner packages sit roughly €1–€4 per month above the solo package for the same bank family — sometimes framed as an extra card fee instead of a named uplift.",
      },
      {
        title: "Second debit card",
        body: "Expect a few euros per month for an extra pinpas, or a shipping fee on digital banks. Confirm whether both cards are included in the joint package price.",
      },
      {
        title: "What this is not",
        body: "Not a cheapest-bank ranking and not a live fee table. Use Banking fees, Cheapest accounts and Best banks for broader comparison — then verify PDFs.",
      },
    ] satisfies TipCard[],
    indicativeRows: [
      {
        setting: "Solo everyday package (big banks)",
        band: "~€3.50–€7 / month (~€42–€84 / year)",
        tip: "Baseline before joint uplift",
      },
      {
        setting: "Joint / partner uplift (indicative)",
        band: "Often ~€1–€4 / month above solo",
        tip: "Sometimes billed as extra-card fee",
      },
      {
        setting: "Second / partner debit card",
        band: "Often a few € / month or shipping fee",
        tip: "Confirm inclusion in package",
      },
      {
        setting: "Digital / neo joint options",
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
      "This is not banking advice or a promise of a specific joint fee",
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
        description: "Shortlist accounts — then confirm joint products",
        status: "live" as const,
      },
    ] satisfies JointBankAccountsLink[],
  },
  opening: {
    heading: "Opening steps for a joint account",
    lead: "Treat joint onboarding as a shared project: pick a bank that actually offers the joint features you need, complete identification for every adult, activate dual cards, then move rent and utilities carefully.",
    bullets: [
      "Shortlist with Best banks / Traditional vs digital — then open the joint product page",
      "Gather IDs, address proof and BSN timing for every adult",
      "Activate both cards and test a small purchase",
      "Update landlord and billers only after the IBAN is live",
    ],
    timeline: [
      {
        phase: "1",
        title: "Choose the product path",
        detail: "Confirm the bank offers a gezamenlijke / partner account with dual cards if you need them.",
      },
      {
        phase: "2",
        title: "Complete KYC for every adult",
        detail: "Book identification together when possible. Incomplete packs stall applications — see Account rejection if you get stuck.",
      },
      {
        phase: "3",
        title: "Activate dual cards and apps",
        detail: "Set PINs, install apps, and make one small test purchase each.",
      },
      {
        phase: "4",
        title: "Move household IBANs",
        detail: "Update rent and utilities carefully. Keep the old account open until the first successful debit lands.",
      },
    ],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Core onboarding checklist for Dutch accounts",
      },
      {
        label: "Traditional vs digital banks",
        href: HPW_TRAD_DIG_PATH,
        description: "Branch depth versus app-speed trade-offs",
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Comparison orientation — verify joint options on bank sites",
      },
    ] satisfies JointBankAccountsLink[],
  },
  exit: {
    heading: "Breakup and exit checklist",
    lead: "Living arrangements change. A calm exit is money operations: move rent, redirect direct debits, block cards, close or convert the account, and keep statements. This is not legal or relationship advice — banks, landlords and courts set their own rules.",
    bullets: [
      "Move rent and utilities to a remaining solo IBAN before you close",
      "Cancel or redirect every recurring debit you can find",
      "Block or return both cards; remove wallet tokens",
      "Ask the bank how joint closure or conversion works for your product",
      "Download statements for deposits, taxes and shared expenses",
    ],
    cards: [
      {
        title: "Rent first",
        body: "Landlords care about a working IBAN. Change the rent rail before you shut the joint account.",
      },
      {
        title: "Direct debits",
        body: "Energy, internet, insurance and subscriptions can bounce if you close too early. List them from statements.",
      },
      {
        title: "Cards and apps",
        body: "Block physical cards and remove them from Apple Pay / Google Wallet so neither adult is surprised.",
      },
      {
        title: "Records",
        body: "Keep PDFs of statements covering the shared period — useful for deposits and admin, not a substitute for legal advice.",
      },
    ] satisfies TipCard[],
    checklistItems: [
      "List every recurring debit on the joint IBAN",
      "Agree who keeps which household contracts",
      "Update landlord / utilities with the new IBAN",
      "Confirm the first successful debit on the new rail",
      "Block or return both debit cards",
      "Remove cards from phone wallets",
      "Ask the bank about closure vs conversion to solo",
      "Download statements for the shared period",
      "Zero or transfer remaining balance per your agreement",
      "Only then submit the closure request",
    ],
  },
  scenarios: {
    heading: "Joint account scenarios for expats",
    intro: "Same product family, different first moves depending on whether you are starting a lease, sharing a flat, waiting on a partner’s arrival, or exiting calmly.",
    rows: [
      {
        situation: "New couple signing a lease",
        approach: "Open joint for rent/utilities; keep solo accounts for personal spend",
        firstStep: "Confirm dual cards before the first rent debit",
      },
      {
        situation: "Housemates with three adults",
        approach: "Joint for fixed bills or one treasurer account with standing transfers",
        firstStep: "Write contribution and exit rules before anyone pays",
      },
      {
        situation: "Partner arrives months later",
        approach: "Bridge on one adult’s IBAN, then convert or open joint when KYC is possible",
        firstStep: "Ask the bank which co-holder path they support",
      },
      {
        situation: "Calm separation / move-out",
        approach: "Treat exit as money ops: rent rail, debits, cards, statements, then close",
        firstStep: "Start the exit checklist before emotions set the timeline",
      },
    ] satisfies ScenarioRow[],
  },
  howToSchema: {
    name: "How to set up a Dutch joint bank account as an expat",
    description:
      "Orientation steps for a Netherlands gezamenlijke rekening: confirm the joint product, complete KYC for every adult, activate dual cards, move household IBANs, and keep an exit checklist.",
    anchor: "#howto",
  },
  howTo: {
    heading: "How to set up a joint account (step by step)",
    lead: "A calm sequence for your first shared rent cycle — banks remain authoritative for fees and eligibility.",
    steps: [
      {
        name: "Decide what the joint IBAN will pay",
        text: "List rent, utilities and any shared groceries. Leave personal spend on solo accounts unless you both want full pooling.",
      },
      {
        name: "Shortlist banks that offer a joint product",
        text: "Use Best banks and Traditional vs digital for orientation, then open each bank’s joint / partner page. Do not rely on this guide as a ranking.",
      },
      {
        name: "Complete identification for every adult",
        text: "Gather IDs, address proof and BSN timing. Book KYC together when the bank allows.",
      },
      {
        name: "Activate dual cards and test payments",
        text: "Set PINs, install apps, and make one small test purchase each before rent day.",
      },
      {
        name: "Move household IBANs — then file an exit note",
        text: "Update landlord and billers carefully. Save who will move the rent IBAN if plans change.",
      },
    ] satisfies HowToStep[],
  },
  mistakes: {
    heading: "Common expat mistakes",
    cards: [
      {
        title: "Skipping the exit conversation",
        body: "Joint IBANs are easy to open and awkward to unwind when rent is still attached.",
        advice: "Write a one-page exit note before the first debit.",
      },
      {
        title: "Dumping all personal spend into joint",
        body: "Shared history plus unclear rules creates avoidable friction.",
        advice: "Park fixed bills on joint; keep personal spend separate if that helps.",
      },
      {
        title: "Assuming one card is enough",
        body: "Many households need dual pinpas cards for everyday Dutch debit culture.",
        advice: "Confirm second-card fees and activation timing with the bank.",
      },
      {
        title: "Ignoring joint fee uplifts",
        body: "A “cheap” solo package can look different once a partner card is added.",
        advice: "Read the joint tariff lines — then use Banking fees / Cheapest accounts for context.",
      },
      {
        title: "Treating this page as a bank ranking",
        body: "Best-banks comparison tables belong on sibling guides.",
        advice: "Shortlist on Best banks for expats; verify joint products on official sites.",
      },
      {
        title: "Closing before rent moves",
        body: "Landlords and utilities can bounce if the IBAN dies too early.",
        advice: "Follow the exit checklist: move rails first, close last.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Joint account readiness checklist",
    items: [
      "Household bill list agreed (rent, utilities, optional groceries)",
      "Bank product page confirms joint / partner features you need",
      "Both adults’ ID and address packs ready",
      "KYC appointments booked or online path confirmed",
      "Indicative fee PDF checked for joint uplift and second card",
      "Dual cards activated and PINs memorised",
      "Small test purchase completed by each adult",
      "Landlord / utilities update plan written",
      "Exit note saved (who moves rent, who keeps statements)",
      "Types of accounts / Open a bank account / Debit cards bookmarked for boundaries",
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
    ] satisfies JointBankAccountsLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended options",
    subtitle:
      "Soft CTAs — we are not opening accounts for you. Use these cards to jump to official sites for joint / partner everyday account options, then validate dual-card fees and eligibility yourself.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance to joint-account discovery, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-money-joint-accounts-support-providers",
    analyticsPageContext: "joint-accounts-recommended-options",
    categoryLinks: [
      { href: "/netherlands/services/banks/", label: "Banks directory" },
      { href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH, label: "Open a bank account guide" },
      { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
    ],
    browseLabel: "More banking context: ",
  },
  faq: [
    {
      q: "What is a gezamenlijke rekening?",
      a: "A Dutch joint everyday bank account: one IBAN that more than one adult can use, commonly for rent, utilities and household shopping. Features and liability follow each bank’s product rules.",
    },
    {
      q: "Can housemates open a joint account?",
      a: "Often yes if every adult completes the bank’s identification and eligibility checks. Agree contribution and exit rules in writing before the first debit — banks do not manage housemate politics.",
    },
    {
      q: "Do we both get debit cards?",
      a: "Many joint packages issue a pinpas for each adult. Confirm second-card fees, shipping and activation on the bank’s site. Everyday PIN culture is covered on Debit cards.",
    },
    {
      q: "How much more does a joint account cost?",
      a: "As 2026 orientation only: many joint / partner packages sit roughly €1–€4 per month above a solo everyday package, sometimes billed as an extra-card fee. Always verify live tariffs with your bank.",
    },
    {
      q: "Should our salaries land on the joint IBAN?",
      a: "Some households do; many keep salary on solo accounts and automate a standing transfer for rent. Pick a rule you both understand. This is not financial advice.",
    },
    {
      q: "What if we break up or a housemate moves out?",
      a: "Treat it as money ops: move rent and utilities, redirect direct debits, block cards, download statements, then ask the bank about closure or conversion. This page is not legal advice.",
    },
    {
      q: "Is a joint account the same as Types of bank accounts?",
      a: "No. Types of accounts owns the taxonomy of everyday, savings, joint, student and business products. This page owns shared access, dual cards, household habits and exit orientation.",
    },
    {
      q: "Which bank is best for a joint account?",
      a: "This guide does not rank banks. Use Best banks for expats and Open a bank account for shortlists, then confirm joint / partner features on official sites.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Banks set fees, eligibility and liability — verify with them and seek qualified advice when your situation is complex.",
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
      label: "Student bank accounts",
      href: STUDENT_BANK_ACCOUNTS_PATH,
      description: "Studentrekening eligibility, fees and graduation — live sibling",
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
      description: "Till culture alongside joint debit cards",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Pinpas culture for dual cards",
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
    {
      label: "Best bank for ZZP",
      href: BEST_BANK_ZZP_PATH,
      description: "Keep business banking separate from household joint money",
      status: "live" as const,
    },
  ] satisfies JointBankAccountsLink[],
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
      description: "Taxonomy sibling — where joint sits in the map",
      status: "live" as const,
    },
    {
      label: "Student bank accounts",
      href: STUDENT_BANK_ACCOUNTS_PATH,
      description: "Live sibling — studentrekening eligibility and graduation",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get to a Dutch IBAN path",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Live — pinpas habits for dual cards",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Live cluster peer — compare onboarding trade-offs",
      status: "live" as const,
    },
  ] satisfies JointBankAccountsLink[],
  exploreNext: [
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "See where joint fits in the account map",
      status: "live" as const,
    },
    {
      label: "Student bank accounts",
      href: STUDENT_BANK_ACCOUNTS_PATH,
      description: "Studentrekening for enrolled students",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up the Dutch IBAN path",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist providers",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Learn pinpas culture for dual cards",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "Model monthly cost bands",
      status: "live" as const,
    },
  ] satisfies JointBankAccountsLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
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
      description: "Consumer association guidance — verify current articles on joint accounts and banking fees",
    },
    {
      label: "AFM — Consumers",
      href: "https://www.afm.nl/en/consumenten",
      description: "Authority for the Financial Markets — consumer orientation (not product endorsements)",
    },
  ],
  disclosure:
    "Some links on this page — including the Recommended options block — may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes bank eligibility, fees or liability rules.",
} as const;

export type JointBankAccountsPage = typeof jointBankAccountsPage;
