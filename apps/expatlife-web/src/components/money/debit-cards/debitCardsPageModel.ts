import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  CASH_VS_CARD_PATH,
  CREDIT_CARDS_PATH,
  HPW_FEES_PATH,
  HPW_TRAD_DIG_PATH,
  WISE_VS_REVOLUT_PATH,
} from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";

export const DEBIT_CARDS_PATH = "/netherlands/money/banking/debit-cards/" as const;

export type DebitCardsLink = {
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

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "debit-cards-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const debitCardsPage = {
  slug: "debit-cards",
  path: DEBIT_CARDS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-14",
  seo: {
    title: "Debit Cards in the Netherlands | Complete Guide for Expats",
    description:
      "Dutch debit and PIN culture for expats: pinpas norms, Maestro and Debit Mastercard expectations, shops, ATMs, online use, and how debit-first habits differ from credit-first countries — orientation only.",
    keywords: [
      "debit card Netherlands",
      "PIN card Netherlands",
      "Maestro Netherlands",
      "Debit Mastercard Netherlands",
      "Dutch debit culture expats",
      "pinpas Netherlands",
      "Dutch debit card shops",
      "ATM debit Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Debit Cards in the Netherlands",
    subtitle:
      "How Dutch debit and PIN culture actually works for expats: what a pinpas is, Maestro and Debit Mastercard norms, shops, ATMs, online use, and what to expect if you come from a credit-first country.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Debit vs credit habits", href: "#habits" },
    chips: ["Pinpas", "PIN culture", "Maestro", "Debit Mastercard", "Shops & ATMs"],
    disclaimer:
      "General orientation only — not financial advice. Card networks, acceptance, limits and fees change by bank and merchant. Confirm details with your issuer and the shop before you rely on one card.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch café counter: multicultural expat inserting a debit pinpas into a PIN terminal, soft canal-house daylight, receipt printer and card wallet on the counter — everyday Dutch debit culture.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#pinpas", label: "Pinpas" },
    { href: "#networks", label: "Networks" },
    { href: "#shops", label: "Shops" },
    { href: "#atms", label: "ATMs" },
    { href: "#online", label: "Online" },
    { href: "#habits", label: "Habits" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#tools", label: "Tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#banking-hub", label: "Banking hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Debit Cards in the Netherlands — four building blocks: know your pinpas, expect PIN in shops, understand Maestro or Debit Mastercard branding, and plan ATM plus online habits — right-side Debit file rail lists card ready, PIN known, network checked and backup method.",
      "Four habits cover most debit questions: pinpas basics, PIN culture, network labels, and calm backups."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch debit culture — pinpas as default, PIN-first tills, Maestro and Debit Mastercard labels, shop acceptance, ATM withdrawals, and online boundary to iDEAL — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise Dutch debit norms; deeper sections expand each theme without ranking issuers."
    ),
    pinpas: visual(
      "pinpas",
      "Premium desk scene explaining a Dutch pinpas — plastic debit card linked to a current account, chip, PIN pad, and bank-app activation checklist — right-side Pinpas file rail with General information only note, canal window light, ExpatLife brand area.",
      "A pinpas spends from your everyday account — it is the default Dutch shop card, not a revolving credit line."
    ),
    networks: {
      src: `/images/infographics/${VISUAL_PREFIX}-networks-premium-v2.png`,
      alt:
        "Premium network timeline for Dutch debit — Maestro branding and Debit Mastercard branding above four stations: logo on plastic, terminal reads network, merchant accepts or declines, bank app confirms — teal checklist strip with General information only, canal backdrop, ExpatLife brand footer with compass and Live. Love. Stay.",
      caption:
        "Logos on the card hint at networks; merchants and your bank decide what works on the day.",
    },
    shops: visual(
      "shops",
      "Premium Dutch supermarket till scene — chip insert, contactless tap, PIN entry, green OK — right-side Shop habits rail for groceries, pharmacy and café — ExpatLife compass brand footer with Live. Love. Stay.",
      "Everyday Dutch shops are built around debit + PIN or tap — credit is secondary, not the default till language."
    ),
    atms: visual(
      "atms",
      "Premium ATM habits board — prefer own-bank machines, watch third-party fee screens, shield the PIN pad, withdraw a modest float — Dutch street evening context and a Verify fees with issuer rail.",
      "ATMs are for cash floats and emergencies — not a substitute for learning PIN culture in shops."
    ),
    online: visual(
      "online",
      "Premium online payments boundary board — Dutch webshops often use iDEAL via bank app; card-not-present debit differs by issuer; pointer cards to How payments work — desk with laptop and bank phone, ExpatLife brand area.",
      "In-person debit culture is not the same as iDEAL online rails — switch guides when checkout asks for bank approval."
    ),
    habits: visual(
      "habits",
      "Premium habit-shift comparison board — credit-first home country vs debit-first Netherlands — side-by-side columns for till default, deposits, travel holds, and everyday groceries — Fix tips rail and canal skyline band.",
      "Coming from a credit-first culture? Expect debit to carry weekly life; credit stays useful for some travel and holds."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for Dutch debit — new arrival waiting for pinpas, resident weekly shops, tourist with foreign debit, and student budget week — each with a first move and backup method.",
      "Different arrival stages need different debit setups — not one universal card rule."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands debit cards — treating credit as the shop default, ignoring PIN, confusing Maestro history with today’s branding, mixing this page with cash culture or iDEAL deep-dives — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no acceptance guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium debit readiness checklist board — pinpas activated, PIN memorised, network label noted, shop tap tested, ATM plan ready, Cash vs card and How payments work bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before your first busy debit week — then verify limits and fees with your bank."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Understand what a Dutch pinpas actually is",
        "Expect PIN-first debit culture in shops",
        "Read Maestro and Debit Mastercard labels calmly",
        "Separate shop debit habits from iDEAL and credit deep-dives",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Everyday Dutch spend is usually debit-led",
        "PIN (or tap + occasional PIN) is normal at the till",
        "Card logos change — verify acceptance with merchants",
        "Cash culture and credit products live on sibling pages",
      ],
    },
    pinpas: {
      title: "Pinpas basics",
      items: [
        "Debit card linked to your everyday current account",
        "Spends available balance — not revolving credit",
        "Usually arrives after Dutch account onboarding",
        "Activate and set PIN via bank instructions",
      ],
    },
    networks: {
      title: "Network habits",
      items: [
        "Maestro and Debit Mastercard are common branding paths",
        "Logos on plastic are not a guarantee at every terminal",
        "Banks migrate products over time — check your app",
        "Foreign debit networks may work differently here",
      ],
    },
    shops: {
      title: "Shop habits",
      items: [
        "Groceries and pharmacies expect debit",
        "Chip + PIN remains common even when tap works",
        "Ask calmly if a foreign card is declined",
        "Cash pockets are covered on Cash vs card",
      ],
    },
    atms: {
      title: "ATM habits",
      items: [
        "Prefer your own bank’s machines when you can",
        "Read fee screens on third-party ATMs",
        "Withdraw a modest float — not a travel stash",
        "Shield your PIN; put cash away before walking off",
      ],
    },
    online: {
      title: "Online boundary",
      items: [
        "Many Dutch webshops prefer iDEAL",
        "Card-not-present debit rules differ by issuer",
        "Subscriptions and foreign sites may ask for credit",
        "Use How payments work for rails detail",
      ],
    },
    habits: {
      title: "Habit-shift tips",
      items: [
        "Weekly life here is debit-first, not credit-first",
        "Credit still helps for some hotels and deposits",
        "Do not treat foreign credit as the local till default",
        "Build a Dutch debit path early if you are staying",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "New arrivals: bridge while pinpas onboarding finishes",
        "Residents: debit + tap covers most weekly shops",
        "Tourists: test a small debit purchase on day one",
        "Students: watch ATM fees and keep a light cash float",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not assume credit works everywhere",
        "Do not skip learning your PIN",
        "Do not confuse network logos with universal acceptance",
        "Do not mix this page with Cash vs card or iDEAL deep-dives",
      ],
    },
    checklist: {
      title: "Ready-for-debit signals",
      items: [
        "Pinpas activated and not expired",
        "PIN memorised — never written on the card",
        "Small test purchase completed",
        "Backup method ready if a terminal declines",
      ],
    },
  },
  introParagraphs: [
    "In the Netherlands, the everyday card in your wallet is usually a debit card — often called a pinpas — linked to your current account. You pay with chip, PIN, or contactless tap; money leaves available balance, not a revolving credit line.",
    "This page is the debit-product and PIN-culture guide: what to expect from Maestro and Debit Mastercard branding, shops, ATMs and online use, and how that differs from credit-first habits abroad. Everyday cash-vs-card till culture lives on Cash vs card. iDEAL and SEPA rails live on How payments work. Credit availability and fees belong on Credit cards.",
  ],
  introHighlights: [
    "Orientation for newcomers who expect credit cards to run daily life",
    "Clear boundary: Dutch debit norms here — cash culture, credit products and payment rails live elsewhere",
    "Links into Open a bank account, Cash vs card, How payments work and Banking hub",
  ],
  orientationFlowSteps: [
    "Know what a pinpas is (debit, not credit)",
    "Expect PIN or tap at most shops",
    "Read network labels calmly (Maestro / Debit Mastercard)",
    "Keep a backup method for declines and early arrival",
  ],
  safetyFileChecklist: [
    "Dutch pinpas activated (or accepted foreign debit as a bridge)",
    "PIN memorised — not written on the card",
    "Bank app installed for limits, blocks and contactless settings",
    "Small euro cash float for markets (see Cash vs card)",
    "Backup card or method if the first terminal declines",
    "Bookmarks: Open a bank account, Cash vs card, How payments work, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Weekly supermarket run",
      approach: "Dutch debit tap or chip + PIN is the local default",
      firstStep: "Confirm pinpas works once, then shop as locals do",
    },
    {
      situation: "First week after landing",
      approach: "Bridge with a working travel/debit card while Dutch pinpas onboarding finishes",
      firstStep: "Start Open a bank account, keep a modest cash float",
    },
    {
      situation: "Online Dutch webshop",
      approach: "Checkout often asks for iDEAL via your bank — not only card-not-present debit",
      firstStep: "Open How payments work for rails orientation",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do Dutch debit cards work?",
    summary:
      "A Dutch debit card (pinpas) spends from your everyday account with PIN or contactless approval. Most shops are built around this debit-first habit. Maestro and Debit Mastercard branding are common network labels — not a ranking of banks. Credit cards can help for some travel and deposits, but they are not the default till language. Online Dutch checkouts often use iDEAL instead of (or alongside) card entry.",
    bullets: [
      "Default expectation: debit + PIN or tap for groceries, pharmacies and many cafés",
      "Pinpas = debit linked to available balance — not revolving credit",
      "Network logos (e.g. Maestro, Debit Mastercard) hint at rails; merchants still decide acceptance",
      "For cash pockets and till culture, use Cash vs card; for iDEAL/SEPA, use How payments work",
    ],
    note: "This page does not rank banks or promise fees. Use Best banks for expats when you shortlist accounts, and verify card products on each bank’s official pages.",
  },
  snapshotSignals: [
    {
      label: "Default card",
      value: "Debit pinpas",
      note: "Linked to your everyday account balance",
    },
    {
      label: "Till habit",
      value: "PIN or tap",
      note: "Credit is secondary in many shops",
    },
    {
      label: "Networks",
      value: "Maestro / Debit MC",
      note: "Common branding paths — verify with your bank",
    },
    {
      label: "Online",
      value: "Often iDEAL",
      note: "Covered on How payments work",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Dutch debit and PIN culture: pinpas basics, network labels, shops, ATMs and online boundaries for expats.",
    },
    {
      title: "Pinpas in plain English",
      body: "A debit card that spends available funds — the everyday plastic locals use at the till.",
    },
    {
      title: "Network labels",
      body: "Maestro and Debit Mastercard branding appear on many Dutch debit cards — logos change over time.",
    },
    {
      title: "Shops and ATMs",
      body: "What to expect when you pin, tap, or withdraw a modest cash float.",
    },
    {
      title: "What belongs elsewhere",
      body: "Cash culture → Cash vs card. Rails → How payments work. Credit products → Credit cards sibling.",
    },
    {
      title: "Setup next step",
      body: "Need the account behind the card? Open a bank account — then return here for debit norms.",
    },
  ] satisfies TipCard[],
  pinpas: {
    heading: "What a Dutch pinpas is",
    lead:
      "Pinpas is the everyday Dutch word for the debit card tied to your current account. It is how most people pay in shops: insert or tap, approve with PIN when asked, and the amount leaves available balance. It is not a credit line you pay off later — that distinction surprises many newcomers from credit-first countries.",
    bullets: [
      "Issued after you open (and activate) a Dutch everyday account in most cases",
      "Chip + PIN and contactless are both normal",
      "Bank apps let you block, unblock, set limits and check transactions",
      "Lost or stolen cards should be blocked immediately in the app or via bank hotline",
    ],
    cards: [
      {
        title: "Debit, not credit",
        body: "A pinpas spends money you have (or an agreed overdraft if your bank offers one). It is not revolving credit — credit products are a separate topic.",
      },
      {
        title: "Activation matters",
        body: "New cards often need activation and a PIN you choose or receive securely. Follow your bank’s steps before a large grocery run.",
      },
      {
        title: "Language at the till",
        body: "Staff may say “pin” as a verb. “Pinpas” means the debit card. Cash is “contant”. Contactless is often just a tap gesture.",
      },
      {
        title: "Foreign debit bridges",
        body: "A foreign debit card can help early on, but fees, FX and occasional declines still happen — a Dutch pinpas is the long-term fit for residents.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Documents, BSN timing and setup steps for a Dutch debit path",
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Everyday till culture: when cash still helps alongside debit",
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist accounts — then verify card products on bank sites",
      },
    ] satisfies DebitCardsLink[],
  },
  networks: {
    heading: "Maestro, Debit Mastercard and network labels",
    lead:
      "Dutch debit cards carry network branding so terminals know how to route the payment. Historically many cards showed Maestro; Debit Mastercard branding is also common as products evolve. Treat logos as orientation — not a promise that every merchant or foreign ATM will behave the same way.",
    bullets: [
      "Check the logo on your physical card and in your bank app",
      "Acceptance depends on the terminal and merchant settings",
      "Banks migrate branding over time — reread welcome materials after a replacement card",
      "Foreign Visa Debit / Mastercard Debit may work in many places, with fees and FX still possible",
    ],
    cards: [
      {
        title: "Maestro context",
        body: "Maestro has been a familiar debit brand in Dutch wallets. If your card still shows it, use it as normal and verify any travel or online limits with your bank.",
      },
      {
        title: "Debit Mastercard context",
        body: "Some Dutch debit products use Debit Mastercard branding. That still means debit spending from your account — not automatic revolving credit.",
      },
      {
        title: "No issuer ranking here",
        body: "This page does not rank which network or bank is “best”. Compare onboarding and fees on Best banks and official bank pages.",
      },
      {
        title: "Replacement cards",
        body: "When plastic is replaced, branding or contactless settings can change. Re-test a small purchase after activation.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Dutch supermarket till",
        homeHabit: "May expect credit or signature abroad",
        dutchNorm: "Debit + PIN / tap is the smooth default",
        tip: "Use your pinpas like locals",
      },
      {
        setting: "Hotel deposit hold",
        homeHabit: "Often a credit card hold",
        dutchNorm: "Credit can still help; debit rules vary",
        tip: "Ask reception what they accept",
      },
      {
        setting: "Foreign ATM while travelling",
        homeHabit: "Any card with a known logo",
        dutchNorm: "Network + issuer fees apply; check your app",
        tip: "Verify travel settings before you fly",
      },
      {
        setting: "Online Dutch webshop",
        homeHabit: "Enter card numbers",
        dutchNorm: "Often iDEAL bank approval instead",
        tip: "See How payments work",
      },
    ] satisfies CompareRow[],
  },
  shops: {
    heading: "Using debit in Dutch shops",
    lead:
      "Everyday retail is built around debit. You present the card, tap or insert, enter a PIN when asked, and wait for confirmation. Contactless speeds small buys; banks periodically ask for PIN after tap limits. If a foreign card is declined, ask whether debit is preferred — then try your backup calmly.",
    bullets: [
      "Supermarkets, pharmacies and many cafés expect debit",
      "Chip + PIN remains familiar even where contactless works",
      "A failed tap is normal — switch to chip + PIN without panic",
      "Merchant acceptance is final on the day — carry a backup",
    ],
    cards: [
      {
        title: "What “pinning” means",
        body: "Paying at the terminal with your debit card — insert/tap and approve with PIN when required.",
      },
      {
        title: "Contactless limits",
        body: "Your bank sets tap limits and re-check rules. Confirm in the app rather than assuming a universal euro ceiling.",
      },
      {
        title: "Receipts",
        body: "Take a receipt when you need expense proof. Otherwise optional at many tills.",
      },
      {
        title: "Cash pockets",
        body: "Markets and some stalls still lean on cash. That culture deep-dive lives on Cash vs card — not here.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "When cash still helps alongside debit at markets and tips",
      },
      {
        label: "Banking safety & fraud",
        href: "/netherlands/money/banking/security/",
        description: "Card habits, phishing and calm checks if something looks wrong",
      },
    ] satisfies DebitCardsLink[],
  },
  atms: {
    heading: "ATMs and debit withdrawals",
    lead:
      "Your debit card is also how you withdraw cash. Prefer ATMs linked to your bank or a well-known network. Independent machines can add fees. Foreign debit cards may charge withdrawal and FX costs — check your issuer before making cash your main plan.",
    bullets: [
      "Use your own bank’s ATMs when you can",
      "Watch on-screen fee warnings on third-party machines",
      "Withdraw enough for a few days — not a large stash",
      "Never share your PIN; shield the keypad in busy stations",
    ],
    cards: [
      {
        title: "How much to withdraw",
        body: "A modest float for markets and tips is usually enough — daily Dutch life is mostly card-first.",
      },
      {
        title: "Foreign debit at Dutch ATMs",
        body: "Often possible, but issuer fees and FX markups can add up. Compare with your bank’s fee page.",
      },
      {
        title: "Travel abroad with a Dutch pinpas",
        body: "Enable travel notices if your bank asks, watch foreign ATM fees, and keep a backup card.",
      },
      {
        title: "Safety basics",
        body: "Use well-lit machines, put cash away before walking off, and treat unexpected “help” as a red flag — see Banking safety.",
      },
    ] satisfies TipCard[],
  },
  online: {
    heading: "Online use and the iDEAL boundary",
    lead:
      "Dutch online checkouts often prefer iDEAL: you approve the payment in your bank app rather than typing card numbers. Card-not-present debit can still appear on some sites, subscriptions and foreign merchants — rules differ by issuer. This page stays focused on debit culture; rails detail belongs on How payments work.",
    bullets: [
      "Expect iDEAL on many Dutch webshops and billers",
      "Card entry is more common on international sites",
      "Strong customer authentication (app approve / PIN) is normal",
      "Subscriptions may ask for credit even if you live debit-first offline",
    ],
    timeline: [
      {
        phase: "1",
        title: "Choose payment method",
        detail: "On Dutch sites, iDEAL often appears alongside or instead of card fields.",
      },
      {
        phase: "2",
        title: "Approve in bank app",
        detail: "Confirm the amount and merchant name carefully before you approve.",
      },
      {
        phase: "3",
        title: "If card-not-present is offered",
        detail: "Enter debit details only on trusted sites; watch for 3-D Secure prompts.",
      },
      {
        phase: "4",
        title: "Switch guides for rails",
        detail: "IBAN, SEPA and iDEAL deep-dives live on How payments work.",
      },
    ],
    crossLinks: [
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, IBAN, SEPA and online checkout rails",
      },
      {
        label: "Credit cards",
        href: CREDIT_CARDS_PATH,
        description: "When credit helps for deposits and some online holds — live sibling",
        status: "live" as const,
      },
    ] satisfies DebitCardsLink[],
  },
  habits: {
    heading: "Credit-first habits vs Dutch debit culture",
    lead:
      "If you grew up swiping credit for groceries, Dutch tills can feel upside down. Here, debit carries weekly life. Credit still matters for some hotels, car rentals, deposits and travel — but it is not the universal shop language. Plan for debit first; keep credit as a specialist tool.",
    rows: [
      {
        setting: "Weekly groceries",
        homeHabit: "Often credit rewards / float",
        dutchNorm: "Debit pinpas is the smooth default",
        tip: "Build debit confidence early",
      },
      {
        setting: "Building “credit history” habits",
        homeHabit: "Everyday credit use to build score",
        dutchNorm: "Different credit landscape — do not force credit at every till",
        tip: "Ask banks about products you actually need",
      },
      {
        setting: "Hotel / rental deposit",
        homeHabit: "Credit card hold expected",
        dutchNorm: "Credit often preferred for holds; debit varies",
        tip: "Confirm with the provider before arrival",
      },
      {
        setting: "Splitting a café bill",
        homeHabit: "One credit card + apps later",
        dutchNorm: "Each person may pin / tap, or use payment requests later",
        tip: "Ask how the table prefers to settle",
      },
      {
        setting: "First month after moving",
        homeHabit: "Rely on foreign credit everywhere",
        dutchNorm: "Bridge carefully; prioritise Dutch debit setup",
        tip: "Pair with Open a bank account",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Till culture and cash pockets alongside debit",
      },
      {
        label: "Credit cards",
        href: CREDIT_CARDS_PATH,
        description: "Credit availability and use-cases — live sibling",
        status: "live" as const,
      },
    ] satisfies DebitCardsLink[],
  },
  scenarios: {
    heading: "Tourist and expat debit scenarios",
    intro: "Same country, different first moves depending on how long you are staying and whether your pinpas is ready.",
    rows: [
      {
        situation: "Weekend tourist",
        approach: "Working foreign debit/credit + small cash float; test a purchase on day one",
        firstStep: "Do not rely on cash alone — see also Cash vs card",
      },
      {
        situation: "New arrival, no Dutch pinpas yet",
        approach: "Bridge with travel debit/credit and cash while account setup runs",
        firstStep: "Follow Open a bank account; keep PIN skills ready for the new card",
      },
      {
        situation: "Resident with Dutch debit",
        approach: "Live mostly debit-first; keep light cash for markets",
        firstStep: "Confirm contactless limits in your bank app",
      },
      {
        situation: "Student on a budget",
        approach: "Debit for campus and groceries; watch ATM fees",
        firstStep: "Avoid high third-party ATM costs — check your bank’s map",
      },
    ] satisfies ScenarioRow[],
  },
  howToSchema: {
    name: "How to use a Dutch debit card as an expat",
    description:
      "Orientation steps for Netherlands debit culture: get a pinpas path, learn PIN and tap habits, test a small purchase, plan ATMs, and know when to switch to Cash vs card or How payments work.",
    anchor: "#howto",
  },
  howTo: {
    heading: "How to get comfortable with Dutch debit (step by step)",
    lead: "A calm sequence for your first debit-heavy weeks — banks and merchants remain authoritative.",
    steps: [
      {
        name: "Secure a Dutch debit path (or a clear bridge)",
        text: "Residents: open an everyday account and activate the pinpas. Still onboarding? Keep a working foreign debit/credit and a cash float. Use Open a bank account for setup.",
      },
      {
        name: "Memorise your PIN and check app settings",
        text: "Note contactless limits, travel notices and block/unblock controls before a large grocery run.",
      },
      {
        name: "Make one small test purchase",
        text: "Tap or chip + PIN at a low-stakes till so the first busy supermarket is not your first attempt.",
      },
      {
        name: "Plan ATMs and cash pockets separately",
        text: "Withdraw a modest float when needed. Markets and tips culture are covered on Cash vs card.",
      },
      {
        name: "For online Dutch checkouts, switch guides",
        text: "iDEAL and bank-app approvals are on How payments work. Credit holds and fees live on Credit cards.",
      },
    ] satisfies HowToStep[],
  },
  mistakes: {
    heading: "Common expat mistakes",
    cards: [
      {
        title: "Treating credit as the shop default",
        body: "Many everyday shops are debit-led. Credit helps in some travel and hotel contexts, not as a universal till language.",
        advice: "Lead with debit capability plus a small cash float.",
      },
      {
        title: "Not knowing your PIN",
        body: "Contactless can fail or require a re-check. Without a PIN you are stuck.",
        advice: "Memorise the PIN before peak shopping hours.",
      },
      {
        title: "Assuming network logos guarantee acceptance",
        body: "Maestro or Debit Mastercard branding helps terminals route payments — merchants still decide.",
        advice: "Carry a backup method and ask calmly when declined.",
      },
      {
        title: "Skipping Dutch account setup too long",
        body: "Foreign cards can bridge weeks, but fees and declines add friction for residents.",
        advice: "Start Open a bank account early if you are staying.",
      },
      {
        title: "Confusing this page with cash culture",
        body: "When cash still helps is a sibling topic.",
        advice: "Use Cash vs card for markets, tips and till mix decisions.",
      },
      {
        title: "Expecting card numbers on every Dutch webshop",
        body: "iDEAL bank approval is common online.",
        advice: "Open How payments work for rails orientation.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Debit readiness checklist",
    items: [
      "Pinpas activated (Dutch) or accepted foreign debit bridge confirmed",
      "PIN memorised — never written on the card or in notes labelled “PIN”",
      "Contactless / wallet limits checked in the bank app today",
      "Small test purchase completed successfully",
      "Backup payment method if the first card declines",
      "ATM plan noted (prefer own bank; watch third-party fees)",
      "Cash vs card bookmarked for markets and tips",
      "How payments work bookmarked for iDEAL and online checkouts",
      "Open a bank account checklist started if you still need a Dutch IBAN",
      "No expectation that every stall accepts every foreign credit card",
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
        description: "Model cross-border sends — not shop debit culture",
      },
    ] satisfies DebitCardsLink[],
  },
  faq: [
    {
      q: "What is a pinpas?",
      a: "The everyday Dutch debit card linked to your current account. You pay with PIN or contactless; money leaves available balance rather than a revolving credit line.",
    },
    {
      q: "Is a Dutch debit card the same as a credit card?",
      a: "No. Debit spends from your account (or agreed overdraft if offered). Credit products are separate and are not the default at many everyday tills.",
    },
    {
      q: "Do I need Maestro or Debit Mastercard?",
      a: "You need a working debit path your bank issues. Logos hint at networks; they are not a consumer ranking. Verify acceptance and fees with your bank and merchants.",
    },
    {
      q: "Will my foreign debit card work in Dutch shops?",
      a: "Often yes for major networks, but fees, FX and occasional declines still happen. Residents usually set up a Dutch pinpas for smoother weekly life.",
    },
    {
      q: "Why do Dutch websites ask for iDEAL instead of my card?",
      a: "iDEAL is a common online bank-approval checkout rail. That topic is covered on How payments work — separate from in-person debit culture.",
    },
    {
      q: "When should I still carry cash?",
      a: "For markets, tips and some small stalls — see Cash vs card. Most weekly supermarket life is debit-first.",
    },
    {
      q: "How do I get a Dutch debit card?",
      a: "By opening a Dutch everyday account and activating the card the bank issues. Start with Open a bank account, then Best banks for expats when you shortlist.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Banks, shops and networks set their own rules — verify fees and acceptance with them.",
    },
  ],
  relatedGuides: [
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Everyday till culture and when cash still helps — live cluster sibling",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, IBAN, SEPA and online rails — sibling topic boundary",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Setup path to a Dutch pinpas",
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
      label: "Banking fees & costs",
      href: HPW_FEES_PATH,
      description: "Fee categories without live tariff promises",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: HPW_TRAD_DIG_PATH,
      description: "Branch depth versus app-speed trade-offs",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: "/netherlands/money/banking/security/",
      description: "Card habits and scam awareness",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "When credit helps — live cluster sibling",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "Multi-currency / app banking decision orientation — live cluster sibling",
      status: "live" as const,
    },
  ] satisfies DebitCardsLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Live cluster sibling — till culture and cash pockets",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Rails and online checkout — pair with this debit guide",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get to a Dutch debit path",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Live cluster peer — compare onboarding and trade-offs",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "Live — credit availability and fees orientation",
      status: "live" as const,
    },
  ] satisfies DebitCardsLink[],
  exploreNext: [
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Learn when cash still helps next to debit",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Learn iDEAL and transfer rails next",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up the account behind your pinpas",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist providers",
      status: "live" as const,
    },
    {
      label: "Bank comparison tool",
      href: BANK_COMPARISON_TOOL_PATH,
      description: "Interactive fit questionnaire",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "Model monthly cost bands",
      status: "live" as const,
    },
  ] satisfies DebitCardsLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
    },
    {
      label: "Betaalvereniging Nederland",
      href: "https://www.betaalvereniging.nl/",
      description: "Dutch Payments Association — industry context on payment methods",
    },
    {
      label: "De Nederlandsche Bank — Payments",
      href: "https://www.dnb.nl/en/payments/",
      description: "Central bank orientation on the Dutch payments landscape",
    },
    {
      label: "iDEAL",
      href: "https://www.ideal.nl/en/",
      description: "Official iDEAL information — pair with How payments work for online checkouts",
    },
    {
      label: "Consumentenbond — Pinning & paying",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current articles on debit and PIN topics",
    },
  ],
  disclosure:
    "Some links on related banking pages may be affiliate links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes merchant acceptance or bank decisions.",
} as const;

export type DebitCardsPage = typeof debitCardsPage;
