import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { WISE_VS_REVOLUT_PATH } from "@/src/components/money/wise-vs-revolut/wiseVsRevolutPaths";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";

export const CASH_VS_CARD_PATH = "/netherlands/money/banking/cash-vs-card/" as const;

/** Live cluster siblings under Banking Cluster (cards & apps). */
export const DEBIT_CARDS_PATH = "/netherlands/money/banking/debit-cards/" as const;
export const CREDIT_CARDS_PATH = "/netherlands/money/banking/credit-cards/" as const;
export { WISE_VS_REVOLUT_PATH };

export const HPW_FEES_PATH = "/netherlands/money/banking/fees/" as const;
export const HPW_TRAD_DIG_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;

export type CashVsCardLink = {
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
export type CompareRow = { setting: string; cash: string; card: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "cash-vs-card-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const cashVsCardPage = {
  slug: "cash-vs-card",
  path: CASH_VS_CARD_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-13",
  seo: {
    title: "Cash vs Card in the Netherlands | Complete Guide for Expats",
    description:
      "How everyday payments work in Dutch shops: PIN-first culture, when cash still helps, contactless habits, and calm tourist/expat scenarios — orientation only, not financial advice.",
    keywords: [
      "cash vs card Netherlands",
      "pay with cash Netherlands",
      "PIN payments Netherlands",
      "contactless Netherlands expats",
      "Dutch shops debit card",
      "cashless Netherlands",
      "tap to pay Netherlands",
      "ATM cash Netherlands expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Cash vs Card in the Netherlands",
    subtitle:
      "Everyday Dutch payment culture for expats: PIN-first shops, when cash is still useful, contactless taps, and what to expect as a tourist or newcomer — without ranking cards or promising acceptance.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "When cash helps", href: "#cash-useful" },
    chips: ["PIN-first", "Contactless", "Cash pockets", "Tourist tips", "Shops"],
    disclaimer:
      "General orientation only — not financial advice. Shops and terminals set their own rules. Card networks, limits and fees change; confirm with your bank and the merchant before you rely on one method.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch bakery counter: multicultural customer tapping a debit card on a PIN terminal while a small cash tray sits nearby, canal-house windows and soft daylight — everyday cash vs card culture in the Netherlands.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#pin-first", label: "PIN-first" },
    { href: "#cash-useful", label: "When cash helps" },
    { href: "#contactless", label: "Contactless" },
    { href: "#compare", label: "Compare" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#atms", label: "ATMs" },
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
      "Premium orientation board titled Cash vs Card in Dutch shops — four building blocks: expect PIN-first, keep a small cash float, learn contactless limits, and match method to the place — right-side Everyday file rail lists debit ready, PIN known, cash float and backup plan.",
      "Four habits cover most shop questions: PIN culture, cash pockets, tap limits, and a calm backup plan."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Netherlands payment culture — PIN-first shops, contactless taps, cash still useful, tourist bridges, ATM habits, and a pointer to payment rails — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise everyday cash vs card culture; deeper sections expand each theme without ranking products."
    ),
    pinFirst: visual(
      "pin-first",
      "Premium Dutch shop desk scene showing a PIN terminal pathway — chip insert, PIN pad, green OK, receipt option — with a right-side Shop habits rail for supermarket, café and pharmacy — canal backdrop and ExpatLife brand area.",
      "Most everyday shops are built around debit + PIN (or tap). Credit is secondary — not the default checkout habit."
    ),
    cashUseful: visual(
      "cash-useful",
      "Premium map-style board of places cash still helps in the Netherlands — street markets, tips jars, small stalls, some events, and early-arrival gaps before a Dutch debit card works — checklist rail with General information only note.",
      "Cash is less central than in many countries, but it still unlocks markets, tips and a few cash-only corners."
    ),
    contactless: visual(
      "contactless",
      "Premium contactless timeline — tap card or phone, wait for beep, optional PIN above a limit, then receipt — desk scene with payment terminal props, Dutch city window light, and a Verify with your bank rail.",
      "Contactless speeds small buys; your bank sets tap limits and when a PIN reappears — confirm in the app."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for cash vs card — tourist weekend, first week after arrival, weekly supermarket run, and market Saturday — each with a recommended first move and backup method.",
      "Different days need different mixes of tap, PIN and cash — not one universal rule."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands cash vs card — assuming credit always works, arriving with zero cash, ignoring PIN, tapping without a backup, and confusing this page with payment-rails deep dives — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no acceptance guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium everyday payments checklist board — debit card ready, PIN memorised, small euro float, contactless limits known, ATM plan noted, and How payments work bookmarked for iDEAL — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before your first busy shopping day — then verify terminal habits with each merchant."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Expect PIN-first (and tap) culture in most shops",
        "Know when a small cash float still helps",
        "Understand contactless habits without deep card product detail",
        "Plan tourist and early-arrival backups calmly",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Everyday Dutch spend is usually debit-led",
        "Cash is useful in pockets — not the main system",
        "iDEAL and SEPA rails live on How payments work",
        "Debit and credit product deep-dives are sibling pages",
      ],
    },
    pinFirst: {
      title: "PIN-first habits",
      items: [
        "Learn your PIN before peak shopping hours",
        "Chip + PIN remains common even when tap works",
        "Do not assume foreign credit is the local default",
        "If a terminal rejects a card, ask calmly and try another method",
      ],
    },
    cashUseful: {
      title: "Cash float habits",
      items: [
        "Keep a small euro float for markets and tips",
        "Do not carry large amounts unnecessarily",
        "Use bank ATMs when possible; watch third-party fees",
        "Cash does not replace a Dutch-friendly debit setup long term",
      ],
    },
    contactless: {
      title: "Contactless habits",
      items: [
        "Tap is common for small everyday buys",
        "Banks set limits; PIN can reappear after a threshold",
        "Phone wallets follow your bank’s rules — verify in the app",
        "A failed tap is normal — switch to chip + PIN without panic",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "Tourists: carry a small cash float plus a working card",
        "New arrivals: bridge with cash while Dutch debit onboarding finishes",
        "Residents: debit + tap covers most weekly shops",
        "Markets: expect more cash and simpler terminals",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not treat foreign credit as universally accepted",
        "Do not arrive for a market day with zero cash",
        "Do not skip learning your PIN",
        "Do not confuse shop culture with iDEAL/SEPA deep dives",
      ],
    },
    checklist: {
      title: "Ready-for-shops signals",
      items: [
        "Debit card activated and PIN known",
        "Small euro float available",
        "Contactless limits checked in your bank app",
        "Backup method ready if a terminal declines",
      ],
    },
  },
  introParagraphs: [
    "In the Netherlands, everyday shops are usually built around debit cards — chip, PIN, or contactless tap — more than around cash or foreign credit cards.",
    "This page is the culture guide: what to expect at the till, when cash still helps, and how tourists and newcomers bridge the first weeks. For iDEAL, SEPA and online rails, use How payments work. For card product detail, use the Debit and Credit sibling pages when they publish.",
  ],
  introHighlights: [
    "Orientation for shoppers, tourists and newly arrived expats",
    "Clear boundary: everyday cash vs card culture here — rails and card products live elsewhere",
    "Links into Banking hub, Open a bank account, How payments work and cluster siblings",
  ],
  orientationFlowSteps: [
    "Expect PIN-first (and tap) in most shops",
    "Keep a small cash float for markets and gaps",
    "Learn contactless limits in your bank app",
    "Carry a calm backup method for declines",
  ],
  safetyFileChecklist: [
    "Debit card that works in euro shops (Dutch or accepted foreign)",
    "PIN memorised — not written on the card",
    "Small euro notes and coins for markets and tips",
    "Phone wallet set up only if your bank supports it here",
    "ATM plan: prefer your bank’s network; watch third-party fees",
    "Bookmark: How payments work, Open a bank account, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Weekly supermarket run",
      approach: "Debit tap or chip + PIN is the local default",
      firstStep: "Confirm card works once, then shop as locals do",
    },
    {
      situation: "Saturday market",
      approach: "More stalls still prefer cash or simpler card terminals",
      firstStep: "Withdraw a modest float the day before",
    },
    {
      situation: "First week after landing",
      approach: "Bridge with cash and a working travel card while Dutch debit setup finishes",
      firstStep: "See Open a bank account, then return here for till habits",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: cash or card in Dutch shops?",
    summary:
      "Most everyday purchases work best with a debit card (PIN or contactless). Cash is still useful for markets, tips, some small stalls and early-arrival gaps — but the Netherlands is far less cash-dependent than many newcomers expect. Foreign credit cards help in some places and travel contexts; they are not the default at every till.",
    bullets: [
      "Default expectation: debit + PIN or tap in supermarkets, pharmacies and many cafés",
      "Keep a small euro cash float for markets, tips and cash-leaning corners",
      "Contactless is common for small amounts; your bank sets tap limits",
      "Online checkouts often use iDEAL — that lives on How payments work, not this page",
    ],
    note: "This page does not rank banks or card products. Use Best banks for expats when you shortlist accounts, and the Debit / Credit guides for product deep-dives when they ship.",
  },
  snapshotSignals: [
    {
      label: "Shop default",
      value: "Debit + PIN / tap",
      note: "Credit is secondary in many everyday places",
    },
    {
      label: "Cash role",
      value: "Useful pockets",
      note: "Markets, tips, some stalls — not the main system",
    },
    {
      label: "Contactless",
      value: "Common for small buys",
      note: "Bank tap limits and PIN rechecks apply",
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
      body: "Everyday cash vs card culture in Dutch shops, markets and early-arrival scenarios.",
    },
    {
      title: "PIN-first culture",
      body: "Why debit + PIN (or tap) is the normal till habit across much of daily life.",
    },
    {
      title: "When cash still helps",
      body: "Markets, tips, small stalls and bridge periods before a Dutch debit card works.",
    },
    {
      title: "Contactless habits",
      body: "Tap-to-pay expectations, limits and what to do when a tap fails.",
    },
    {
      title: "What belongs elsewhere",
      body: "iDEAL/SEPA rails → How payments work. Card products → Debit / Credit siblings.",
    },
    {
      title: "Setup next step",
      body: "Need a Dutch account first? Open a bank account — then return for till culture.",
    },
  ] satisfies TipCard[],
  pinFirst: {
    heading: "PIN-first shops: what to expect",
    lead:
      "Dutch everyday retail is built around debit cards. You insert or tap, enter a PIN when asked, and the money leaves your current account. Many newcomers from credit-card cultures notice this first — credit can work in hotels, larger chains or travel contexts, but it is not the universal till language.",
    bullets: [
      "Supermarkets, pharmacies and many cafés expect debit",
      "Chip + PIN remains familiar even where contactless works",
      "Staff may say “pin” as a verb for paying by card terminal",
      "If a card is declined, ask whether debit is preferred — then try another method calmly",
    ],
    cards: [
      {
        title: "What “pinning” means",
        body: "Using the shop terminal with your debit card — insert/tap and approve with PIN when required.",
      },
      {
        title: "Why credit feels secondary",
        body: "Local acceptance habits grew around debit. Credit still matters for some travel and deposits — product detail belongs on the Credit cards guide.",
      },
      {
        title: "Foreign cards",
        body: "Many terminals accept major networks, but fees, FX and occasional declines still happen — carry a backup.",
      },
      {
        title: "Language at the till",
        body: "You may hear “pinpas” (debit card) or simply “pin”. Cash is “contant”. Contactless is often just a tap gesture.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, IBAN, SEPA and online checkout rails",
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Documents, BSN timing and setup steps for a Dutch debit path",
      },
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Dutch debit / PIN culture, Maestro and Debit Mastercard norms",
        status: "live" as const,
      },
    ] satisfies CashVsCardLink[],
  },
  cashUseful: {
    heading: "When cash is still useful",
    lead:
      "The Netherlands is often described as nearly cashless — and for weekly supermarket life that is close to true. Cash still unlocks street markets, tip jars, some food trucks, small events and the awkward window before your Dutch debit card is ready.",
    bullets: [
      "Street and farmers’ markets",
      "Tips for hospitality when a terminal is awkward",
      "Some small stalls, kiosks and event booths",
      "Early arrival before Dutch debit onboarding finishes",
      "Backup if a foreign card is declined once",
    ],
    rows: [
      {
        setting: "Albert Heijn / Jumbo / most pharmacies",
        cash: "Usually accepted, but not required",
        card: "Debit + PIN / tap is the smooth default",
        tip: "Use debit like locals for speed",
      },
      {
        setting: "Saturday street market",
        cash: "Often the easiest path",
        card: "Some stalls take card; many prefer cash",
        tip: "Bring a modest float",
      },
      {
        setting: "Café / lunch spot",
        cash: "Fine for small tabs",
        card: "Debit tap common; credit varies",
        tip: "Ask before ordering if unsure",
      },
      {
        setting: "Hotel / larger chain",
        cash: "Possible but less common for deposits",
        card: "Cards more routinely accepted — still verify",
        tip: "Credit may help for holds; confirm with reception",
      },
      {
        setting: "First week after landing",
        cash: "Helpful bridge",
        card: "Travel card + later Dutch debit",
        tip: "Pair with Open a bank account checklist",
      },
    ] satisfies CompareRow[],
  },
  contactless: {
    heading: "Contactless and tap-to-pay",
    lead:
      "Contactless (contactloos) is common for small everyday buys. You tap the card or phone, wait for confirmation, and sometimes enter a PIN after a bank-set limit or number of taps. Limits and wallet rules differ by bank — check your app rather than assuming a universal euro threshold.",
    bullets: [
      "Tap is normal in supermarkets, pharmacies and many cafés",
      "A beep or on-screen OK means the terminal accepted the tap",
      "PIN can reappear after a limit — this is routine, not a problem",
      "If tap fails, insert chip and use PIN — do not assume the card is broken",
    ],
    timeline: [
      {
        phase: "1",
        title: "Present card or phone",
        detail: "Hold near the contactless symbol on the terminal.",
      },
      {
        phase: "2",
        title: "Wait for confirmation",
        detail: "Listen for a beep or watch for a green OK on the display.",
      },
      {
        phase: "3",
        title: "Enter PIN if asked",
        detail: "Banks periodically re-check with PIN after tap limits.",
      },
      {
        phase: "4",
        title: "Keep or skip receipt",
        detail: "Take a receipt when you need expense proof; otherwise optional.",
      },
    ],
    crossLinks: [
      {
        label: "Banking safety & fraud",
        href: "/netherlands/money/banking/security/",
        description: "Card habits, phishing and calm checks if something looks wrong",
      },
      {
        label: "Credit cards",
        href: CREDIT_CARDS_PATH,
        description: "When credit helps for travel and deposits — live cluster sibling",
        status: "live" as const,
      },
    ] satisfies CashVsCardLink[],
  },
  compare: {
    heading: "Cash vs card by situation",
    lead: "Use this as a planning table — merchants still decide what they accept on the day.",
    rows: [
      {
        setting: "Weekly groceries",
        cash: "Works, slower for large baskets",
        card: "Best fit — debit tap or PIN",
        tip: "Default to debit",
      },
      {
        setting: "Market produce",
        cash: "Often easiest",
        card: "Hit-or-miss by stall",
        tip: "Carry €20–€50 float",
      },
      {
        setting: "Restaurant bill",
        cash: "Fine for small groups",
        card: "Debit common; splitting may use payment requests later",
        tip: "Ask how the table prefers to settle",
      },
      {
        setting: "Online Dutch webshop",
        cash: "Not used at checkout",
        card: "Often iDEAL via your bank — not this page’s focus",
        tip: "Open How payments work",
      },
      {
        setting: "Tourist day trip",
        cash: "Helpful for tickets and stalls",
        card: "Keep a working travel/debit card as primary",
        tip: "Two methods beat one",
      },
    ] satisfies CompareRow[],
  },
  scenarios: {
    heading: "Tourist and expat scenarios",
    intro: "Same country, different first moves depending on how long you are staying.",
    rows: [
      {
        situation: "Weekend tourist",
        approach: "Primary card + small cash float; do not rely on cash alone",
        firstStep: "Test a small tap or PIN purchase on day one",
      },
      {
        situation: "New arrival, no Dutch debit yet",
        approach: "Bridge with cash and a travel card while account setup runs",
        firstStep: "Follow Open a bank account, keep a float for markets",
      },
      {
        situation: "Resident with Dutch debit",
        approach: "Live mostly card-first; keep light cash for markets and tips",
        firstStep: "Confirm contactless limits in your bank app",
      },
      {
        situation: "Student on a budget",
        approach: "Debit for campus and groceries; cash for occasional markets",
        firstStep: "Avoid high third-party ATM fees — check your bank’s map",
      },
    ] satisfies ScenarioRow[],
  },
  atms: {
    heading: "ATMs and getting cash",
    lead:
      "When you need cash, prefer ATMs linked to your bank or a well-known network. Independent machines can add fees. Foreign cards may charge withdrawal and FX costs — check your issuer before relying on cash for a whole week.",
    bullets: [
      "Use your own bank’s ATMs when you can",
      "Watch on-screen fee warnings on third-party machines",
      "Withdraw enough for a few days — not a large travel stash",
      "Never share your PIN; shield the keypad in busy stations",
    ],
    cards: [
      {
        title: "How much to carry",
        body: "A modest float (for example enough for a market morning) is usually enough — large cash piles are rarely needed for daily Dutch life.",
      },
      {
        title: "Foreign card withdrawals",
        body: "Issuer fees and FX markups can outweigh convenience. Compare with your bank’s official fee page before making cash your main plan.",
      },
      {
        title: "Broken or empty machines",
        body: "Try another nearby ATM or a supermarket cashback option if offered — do not assume every machine is stocked late at night.",
      },
      {
        title: "Safety basics",
        body: "Use well-lit machines, put cash away before walking off, and treat unexpected “help” from strangers as a red flag — see Banking safety.",
      },
    ] satisfies TipCard[],
  },
  howToSchema: {
    name: "How to pay in Dutch shops as an expat",
    description:
      "Orientation steps for everyday Netherlands payment culture: prepare debit and PIN, keep a cash float, learn contactless limits, and carry a backup method.",
    anchor: "#howto",
  },
  howTo: {
    heading: "How to handle everyday payments (step by step)",
    lead: "A calm sequence for your first busy shopping days — merchants and banks remain authoritative.",
    steps: [
      {
        name: "Confirm you have a working debit path",
        text: "Dutch debit is ideal long term. If you are still onboarding, keep a working travel card and a cash float. Use Open a bank account for setup.",
      },
      {
        name: "Memorise your PIN and check tap settings",
        text: "Open your bank app, note contactless limits, and practise one small purchase before a large grocery run.",
      },
      {
        name: "Withdraw a modest euro float",
        text: "Enough for markets and tips — not a full month of expenses. Prefer your bank’s ATMs when possible.",
      },
      {
        name: "At the till, follow the terminal",
        text: "Tap when offered; insert and PIN when asked. If declined, ask whether debit is preferred, then try your backup.",
      },
      {
        name: "For online Dutch checkouts, switch guides",
        text: "iDEAL and bank-app approvals are covered on How payments work — this page stays focused on in-person culture.",
      },
    ] satisfies HowToStep[],
  },
  mistakes: {
    heading: "Common expat mistakes",
    cards: [
      {
        title: "Assuming credit cards work everywhere",
        body: "Many everyday shops are debit-led. Credit helps in some travel and hotel contexts, not as a universal default.",
        advice: "Carry debit capability plus a small cash float.",
      },
      {
        title: "Arriving for market day with zero cash",
        body: "Stalls may take cards, but cash is still the smoother path at many markets.",
        advice: "Withdraw a modest float the day before.",
      },
      {
        title: "Not knowing your PIN",
        body: "Contactless can fail or require a re-check. Without a PIN you are stuck.",
        advice: "Memorise the PIN before peak shopping hours.",
      },
      {
        title: "Relying on one foreign card only",
        body: "A single decline at a busy till creates stress.",
        advice: "Keep two methods: card + cash, or two cards.",
      },
      {
        title: "Confusing this page with payment rails",
        body: "iDEAL, SEPA and IBAN deep-dives belong on How payments work.",
        advice: "Use that guide for online and transfer mechanics.",
      },
      {
        title: "Ignoring ATM fee screens",
        body: "Third-party machines can add costs quickly for visitors.",
        advice: "Prefer your bank’s network and read on-screen warnings.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Everyday payments checklist",
    items: [
      "Debit card activated (Dutch or accepted foreign) and not expired",
      "PIN memorised — never written on the card or in your phone notes labelled “PIN”",
      "Contactless / wallet limits checked in the bank app today",
      "Small euro cash float ready for markets and tips",
      "Backup payment method if the first card declines",
      "ATM plan noted (prefer own bank; watch third-party fees)",
      "How payments work bookmarked for iDEAL and online checkouts",
      "Open a bank account checklist started if you still need a Dutch IBAN",
      "Banking safety habits reviewed for phishing and fake payment requests",
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
        description: "Model cross-border sends — not shop till culture",
      },
    ] satisfies CashVsCardLink[],
  },
  faq: [
    {
      q: "Do I need cash in the Netherlands?",
      a: "For weekly supermarket life, often not much. Keep a small float for markets, tips, some stalls and early-arrival gaps. Most everyday shops prefer debit.",
    },
    {
      q: "Are Dutch shops cashless?",
      a: "Many places are card-first, but cash is still accepted in lots of settings. “Cashless” is a tendency, not a hard nationwide rule — always follow the merchant.",
    },
    {
      q: "What is PIN payment?",
      a: "Paying at a terminal with your debit card — insert or tap, then enter your PIN when asked. Locals often say “pin” as the everyday word for this.",
    },
    {
      q: "Does contactless work everywhere?",
      a: "It is common for small everyday buys, but terminals and bank limits vary. If tap fails, use chip + PIN or another method.",
    },
    {
      q: "Will my foreign credit card work?",
      a: "Sometimes yes, especially in hotels and larger venues — but many everyday shops are debit-led. Carry a backup and do not assume universal acceptance.",
    },
    {
      q: "Where do I learn about iDEAL?",
      a: "On How payments work. iDEAL is an online bank-approval checkout rail, not the same topic as cash vs card at a physical till.",
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
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, IBAN, SEPA and online rails — sibling topic boundary",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Setup path to a Dutch debit card",
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
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Dutch debit / PIN culture — live cluster sibling",
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
  ] satisfies CashVsCardLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Rails and online checkout — pair with this culture guide",
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
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Live cluster peer — cross-border sends",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Live — Dutch debit / PIN culture",
      status: "live" as const,
    },
  ] satisfies CashVsCardLink[],
  exploreNext: [
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Deep-dive Dutch pinpas and PIN culture next",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "When credit helps beside debit-first shops",
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
      description: "Set up the account behind your debit card",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "App-layer options for multi-currency spend",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "When money needs to leave the Netherlands",
      status: "live" as const,
    },
  ] satisfies CashVsCardLink[],
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
      description: "Consumer association guidance — verify current articles on card and cash topics",
    },
  ],
  disclosure:
    "Some links on related banking pages may be affiliate links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes merchant acceptance or bank decisions.",
} as const;

export type CashVsCardPage = typeof cashVsCardPage;
