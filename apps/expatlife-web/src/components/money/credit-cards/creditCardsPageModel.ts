import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  CASH_VS_CARD_PATH,
  HPW_FEES_PATH,
  HPW_TRAD_DIG_PATH,
  WISE_VS_REVOLUT_PATH,
} from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { DEBIT_CARDS_PATH } from "@/src/components/money/debit-cards/debitCardsPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";

export const CREDIT_CARDS_PATH = "/netherlands/money/banking/credit-cards/" as const;

export type CreditCardsLink = {
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
export type CompareRow = { setting: string; debit: string; credit: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "credit-cards-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const creditCardsPage = {
  slug: "credit-cards",
  path: CREDIT_CARDS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-15",
  seo: {
    title: "Credit Cards in the Netherlands | Complete Guide for Expats",
    description:
      "How credit cards fit Dutch payment culture for expats: availability, when credit is useful, fees and interest orientation, and credit vs debit for everyday spend — not issuer rankings.",
    keywords: [
      "credit card Netherlands expats",
      "credit card vs debit Netherlands",
      "Dutch credit card acceptance",
      "credit card fees Netherlands",
      "credit card Netherlands",
      "expat credit card Netherlands",
      "hotel deposit credit card Netherlands",
      "Dutch payment culture credit",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Credit Cards in the Netherlands",
    subtitle:
      "How credit cards fit Dutch payment culture for expats: when they are useful, what to expect on availability and acceptance, and how fees and interest usually work — without ranking issuers.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Credit vs debit", href: "#vs-debit" },
    chips: ["Credit culture", "When useful", "Fees orientation", "Vs debit", "Acceptance"],
    disclaimer:
      "General orientation only — not financial advice. Issuers, merchants and networks set their own rules. Fees, interest and acceptance change; confirm with your provider and the merchant before you rely on one card. This page does not rank cards or promise approvals.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch hotel reception desk: multicultural expat presenting a credit card for a deposit hold while a debit pinpas rests in a wallet nearby, canal-house daylight and soft wood tones — credit as a specialist tool in the Netherlands.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Culture fit" },
    { href: "#availability", label: "Availability" },
    { href: "#when-useful", label: "When useful" },
    { href: "#fees", label: "Fees & costs" },
    { href: "#vs-debit", label: "Vs debit" },
    { href: "#acceptance", label: "Acceptance" },
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
      "Premium orientation board titled Credit Cards in the Netherlands — four building blocks: expect debit-first shops, keep credit for specialist use-cases, read fees and interest calmly, and verify acceptance before you rely on one card — right-side Credit file rail lists debit ready, credit purpose, fee check and backup plan.",
      "Four habits cover most credit questions: debit-first culture, useful credit moments, fee orientation, and calm backups."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Netherlands credit culture — debit-led shops, credit for hotels and deposits, availability varies for newcomers, fees and interest need verification, acceptance is not universal, and a pointer to Debit cards — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise how credit fits Dutch life; deeper sections expand each theme without ranking issuers."
    ),
    culture: visual(
      "culture",
      "Premium Dutch city desk scene comparing everyday till language — large debit pinpas path for groceries and cafés, smaller credit path for hotels and deposits — right-side Culture fit rail with General information only note, canal window light, ExpatLife brand area.",
      "Dutch everyday spend is usually debit-led; credit is a specialist tool, not the default till language."
    ),
    availability: visual(
      "availability",
      "Premium timeline board for expat credit availability — Dutch IBAN and income signals, bank or issuer application, identity and address checks, then card activation — Verify with providers rail and canal skyline band.",
      "Approvals and product options vary; residents usually set up debit first, then decide if credit is needed."
    ),
    whenUseful: visual(
      "when-useful",
      "Premium use-case map for credit in the Netherlands — hotel holds, car rentals, some online deposits, travel bookings, and foreign-merchant fallbacks — checklist rail with General information only.",
      "Credit shines for holds and some travel contexts — not as a replacement for Dutch debit at the supermarket."
    ),
    fees: {
      src: `/images/infographics/${VISUAL_PREFIX}-fees-premium-v2.png`,
      alt:
        "Premium fees orientation desk for Netherlands credit cards — annual fee bands Classic about €35–€45, Gold about €45–€60, Premium about €175–€225, FX markup about 2 percent, cash advance about 4 percent — calendar year label 2026 indicative with Verify with your issuer rail, canal skyline band, ExpatLife brand footer with compass and Live. Love. Stay.",
      caption:
        "Indicative 2026 fee bands for planning conversations — always confirm live tariffs with your issuer.",
    },
    vsDebit: visual(
      "vs-debit",
      "Premium side-by-side comparison board — debit for weekly shops and PIN culture vs credit for holds, travel and some online deposits — Fix tips rail and Dutch canal skyline band.",
      "Lead with debit for everyday life; keep credit where holds and certain merchants expect it."
    ),
    acceptance: visual(
      "acceptance",
      "Premium acceptance reality board — supermarket till often debit, hotel desk often credit, café may accept both, market stall may prefer cash — Ask calmly rail and ExpatLife brand area.",
      "Merchants decide on the day — never assume credit works everywhere in the Netherlands."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for credit cards — new arrival with foreign credit, resident deciding whether to apply, hotel weekend with deposit hold, and tourist relying on credit for shops — each with a first move and backup method.",
      "Different stages need different credit setups — not one universal “get a Dutch credit card” rule."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands credit cards — treating credit as the shop default, ignoring revolving interest, skipping debit setup, chasing rewards rankings, and confusing this page with Cash vs card or Debit cards — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no acceptance or approval guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium credit readiness checklist board — debit path ready, credit purpose written down, fee and interest page checked, acceptance plan for hotels, backup debit for shops, Debit cards and Cash vs card bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you apply for or rely on a credit card in Dutch daily life."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Understand how credit fits debit-first Dutch shops",
        "Know when credit is genuinely useful here",
        "Read fees and interest as orientation — not advice",
        "Separate credit products from debit and cash culture deep-dives",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Everyday Dutch spend is usually debit-led",
        "Credit helps for holds, travel and some deposits",
        "Availability and acceptance vary — verify providers",
        "Debit PIN culture and cash pockets live on sibling pages",
      ],
    },
    culture: {
      title: "Culture-fit habits",
      items: [
        "Do not expect credit to run weekly groceries",
        "Treat credit as a specialist wallet tool",
        "Build a Dutch debit path early if you are staying",
        "Ask merchants calmly when a card is declined",
      ],
    },
    availability: {
      title: "Availability habits",
      items: [
        "Residency, income and IBAN signals often matter",
        "Foreign credit can bridge early weeks",
        "Approvals are not guaranteed — issuers decide",
        "Shortlist banks on Best banks, then verify card products",
      ],
    },
    whenUseful: {
      title: "Useful-credit signals",
      items: [
        "Hotel and rental deposit holds",
        "Some car rentals and travel bookings",
        "Certain online deposits and foreign merchants",
        "Not a substitute for debit at everyday tills",
      ],
    },
    fees: {
      title: "Fee orientation habits",
      items: [
        "Budget ~€35–€45/year for many classic cards (2026 orientation)",
        "Expect ~2% FX markup and ~4% cash-advance fees on many products",
        "Pay in full when you can — revolving APR is set by the issuer",
        "Indicative bands are not live tariffs — verify the PDF",
      ],
    },
    vsDebit: {
      title: "Credit vs debit tips",
      items: [
        "Weekly life: lead with debit",
        "Holds and some travel: credit often smoother",
        "PIN culture deep-dive lives on Debit cards",
        "Cash pockets live on Cash vs card",
      ],
    },
    acceptance: {
      title: "Acceptance habits",
      items: [
        "Supermarkets often prefer debit",
        "Hotels often prefer credit for holds",
        "Always carry a debit backup for shops",
        "Never treat logos as universal acceptance",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "New arrivals: foreign credit as a bridge, not a forever plan",
        "Residents: decide if you need credit after debit works",
        "Hotel weekends: confirm hold rules before check-in",
        "Tourists: test a small purchase; keep cash float",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not treat credit as the Dutch shop default",
        "Do not ignore revolving interest if you carry a balance",
        "Do not skip Dutch debit setup for long-stay life",
        "Do not mix this page with Debit cards or Cash vs card deep-dives",
      ],
    },
    checklist: {
      title: "Ready-for-credit signals",
      items: [
        "Dutch debit path working for weekly shops",
        "Clear reason you need credit (holds, travel, deposits)",
        "Fee and interest pages read for the product you want",
        "Backup debit ready if credit is declined at a till",
      ],
    },
  },
  introParagraphs: [
    "In the Netherlands, weekly life at shops is usually debit-first. A credit card can still be useful — especially for hotel deposits, some rentals, travel bookings and certain online holds — but it is not the default till language the way it is in many credit-first countries.",
    "This page is the credit-product orientation guide for expats: how credit fits Dutch payment culture, availability realities, when it helps, fees and interest orientation, and credit vs debit for everyday spend. Debit and PIN culture live on Debit cards. Everyday cash-vs-card till culture lives on Cash vs card. iDEAL and SEPA rails live on How payments work.",
  ],
  introHighlights: [
    "Orientation for newcomers who expect credit cards to run daily life",
    "Clear boundary: credit availability and use-cases here — debit norms, cash culture and payment rails live elsewhere",
    "Links into Debit cards, Cash vs card, Open a bank account, How payments work and Banking hub",
  ],
  orientationFlowSteps: [
    "Expect debit-first shops in Dutch daily life",
    "Keep credit for holds, travel and specialist use-cases",
    "Read fees and interest before you apply or revolve",
    "Carry a debit backup — acceptance is never guaranteed",
  ],
  safetyFileChecklist: [
    "Working debit path for groceries and everyday shops (see Debit cards)",
    "Clear written purpose for credit (holds, travel, deposits — not “because home country habits”)",
    "Issuer fee and interest pages bookmarked for the product you are considering",
    "Foreign credit card as a bridge only if still onboarding",
    "Backup payment method if a merchant declines credit",
    "Bookmarks: Debit cards, Cash vs card, How payments work, Open a bank account, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Weekly supermarket run",
      approach: "Dutch debit tap or chip + PIN is the local default — credit is secondary",
      firstStep: "Confirm debit works; do not force credit at every till",
    },
    {
      situation: "Hotel weekend with deposit hold",
      approach: "Reception often prefers a credit card for the hold",
      firstStep: "Ask what they accept before arrival; keep debit for other spends",
    },
    {
      situation: "First months after landing",
      approach: "Foreign credit can bridge; residents usually prioritise Dutch debit setup",
      firstStep: "Start Open a bank account, then decide if Dutch credit is needed",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do credit cards fit in the Netherlands?",
    summary:
      "Credit cards exist and can help expats — especially for deposits, travel and some online holds — but everyday Dutch shops are usually built around debit. Availability and acceptance vary by issuer and merchant. Treat fees and interest as something you verify on official pages; this guide does not rank cards or promise approvals.",
    bullets: [
      "Default expectation: debit for groceries, pharmacies and many cafés",
      "Credit often helps for hotel/rental holds and some travel contexts",
      "Approvals, annual fees and interest terms differ by issuer — verify before you apply",
      "For PIN culture use Debit cards; for till cash pockets use Cash vs card; for iDEAL use How payments work",
    ],
    note: "This page does not rank issuers or promise “best card” awards. Use Best banks for expats when you shortlist accounts, then confirm card products on each provider’s official pages.",
  },
  snapshotSignals: [
    {
      label: "Shop default",
      value: "Usually debit",
      note: "Credit is secondary at many tills",
    },
    {
      label: "Credit shines",
      value: "Holds & travel",
      note: "Hotels, rentals, some deposits",
    },
    {
      label: "Availability",
      value: "Varies",
      note: "Issuers decide — not guaranteed",
    },
    {
      label: "Fees",
      value: "Verify 2026",
      note: "Indicative only — check issuer pages",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "How credit fits Dutch payment culture: availability, useful moments, fees orientation, and credit vs debit for everyday spend.",
    },
    {
      title: "Culture fit in plain English",
      body: "Debit runs weekly life; credit is a specialist tool for holds and some travel — not a universal shop language.",
    },
    {
      title: "Availability for expats",
      body: "Foreign cards can bridge early weeks; Dutch credit products depend on issuer rules, residency and income signals.",
    },
    {
      title: "Fees and interest",
      body: "Annual fees, revolving interest, FX markups and cash advances — orientation only, verify current terms.",
    },
    {
      title: "What belongs elsewhere",
      body: "PIN/debit culture → Debit cards. Cash pockets → Cash vs card. Rails → How payments work.",
    },
    {
      title: "Setup next step",
      body: "Need the everyday account first? Open a bank account — then return here if you still need credit for holds.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "How credit fits Dutch payment culture",
    lead:
      "Dutch payment culture grew around debit at the till. Locals “pin” for groceries and many cafés. Credit cards are familiar — especially for travel, hotels and some online contexts — but expecting every shop to treat credit as the default (as in some other countries) creates friction. Fit credit into a debit-first wallet, not the other way around.",
    bullets: [
      "Everyday retail language is often debit + PIN or tap",
      "Credit is common for holds and some travel merchants",
      "Merchant acceptance is final on the day — logos are not guarantees",
      "Residents who stay usually prioritise a Dutch debit path early",
    ],
    cards: [
      {
        title: "Debit-first, not credit-first",
        body: "If you grew up swiping credit for weekly shops, Dutch tills can feel upside down. Plan for debit capability first.",
      },
      {
        title: "Credit as a specialist tool",
        body: "Think hotel desks, car rentals, some deposits and travel bookings — not the supermarket as the main use-case.",
      },
      {
        title: "No issuer ranking here",
        body: "This page does not award “best credit card” labels. Compare products on bank sites after you shortlist on Best banks.",
      },
      {
        title: "Sibling boundaries",
        body: "PIN culture → Debit cards. Markets and cash floats → Cash vs card. iDEAL → How payments work.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Pinpas, PIN culture and debit-first shop habits — live sibling",
        status: "live" as const,
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Everyday till culture and when cash still helps — live sibling",
        status: "live" as const,
      },
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, IBAN and SEPA rails — not credit product detail",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  availability: {
    heading: "Availability for expats",
    lead:
      "Credit cards are available in the Netherlands, but access is not automatic. Banks and issuers check identity, address, income and other risk signals. New arrivals often bridge with a foreign credit card while setting up a Dutch everyday account and debit pinpas. Approvals are never guaranteed — treat applications as issuer decisions, not entitlements.",
    bullets: [
      "A Dutch IBAN and stable income signals often help — rules differ by issuer",
      "Foreign credit can bridge early weeks; watch FX and foreign-transaction fees",
      "Some digital banks and apps offer different card products — verify what “credit” means on their site",
      "Rejection or delay is possible; calm document checks beat re-applying blindly",
    ],
    cards: [
      {
        title: "Residents vs short stays",
        body: "Tourists and short visitors usually rely on cards from home. Residents deciding to stay typically set up Dutch debit first, then ask whether they need a Dutch credit product.",
      },
      {
        title: "What issuers often ask",
        body: "Identity documents, address registration, income evidence and existing banking relationship are common themes — exact lists live on each issuer’s application flow.",
      },
      {
        title: "Not the same as debit onboarding",
        body: "Opening an everyday account (for a pinpas) is a different journey from applying for revolving credit. Start with Open a bank account when you need debit.",
      },
      {
        title: "No “best card” shortlist here",
        body: "We do not rank Visa vs Mastercard issuers or publish award-style tables. Use official product pages after you know why you need credit.",
      },
    ] satisfies TipCard[],
    timeline: [
      {
        phase: "1",
        title: "Secure everyday banking",
        detail: "Get a working Dutch debit path (or a clear foreign bridge) before chasing credit for weekly shops.",
      },
      {
        phase: "2",
        title: "Write your credit purpose",
        detail: "Holds, travel, deposits — if you cannot name a use-case, you may not need credit yet.",
      },
      {
        phase: "3",
        title: "Read issuer requirements",
        detail: "Check eligibility, fees and interest on the provider’s site — not on ranking blogs alone.",
      },
      {
        phase: "4",
        title: "Apply and verify calmly",
        detail: "If delayed or declined, review documents and ask the issuer — do not assume a second brand will auto-approve.",
      },
    ],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Documents, BSN timing and setup for a Dutch debit path",
        status: "live" as const,
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist accounts — then verify credit products on bank sites",
        status: "live" as const,
      },
      {
        label: "Account rejected or delayed",
        href: "/netherlands/money/banking/account-rejection/",
        description: "Calm checks when banking onboarding sticks",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  whenUseful: {
    heading: "When credit cards are useful",
    lead:
      "Credit earns its place when a merchant wants a hold, a booking platform expects a credit product, or you need a travel fallback. It is less useful as a replacement for Dutch debit at groceries and pharmacies. Match the tool to the job.",
    bullets: [
      "Hotel and some rental deposit holds",
      "Car rentals and certain travel merchants",
      "Some online deposits and foreign checkouts",
      "Backup when travelling — still verify FX fees",
    ],
    cards: [
      {
        title: "Deposit holds",
        body: "Reception may place a temporary hold. Credit is often preferred; debit rules vary. Ask before you arrive.",
      },
      {
        title: "Travel and rentals",
        body: "Airlines, hotels and car rentals sometimes expect credit. Keep debit for local shops on the same trip.",
      },
      {
        title: "Online holds and subscriptions",
        body: "Some platforms prefer credit even if you live debit-first offline. That does not make credit the Dutch supermarket default.",
      },
      {
        title: "What credit is not for",
        body: "Forcing credit at every café to “build history” against Dutch debit culture usually creates declines — not smoother life.",
      },
    ] satisfies TipCard[],
    rows: [
      {
        setting: "Supermarket groceries",
        debit: "Smooth default for most shops",
        credit: "May work, but not the cultural default",
        tip: "Lead with debit",
      },
      {
        setting: "Hotel check-in hold",
        debit: "Sometimes accepted — rules vary",
        credit: "Often preferred for the hold",
        tip: "Ask reception in advance",
      },
      {
        setting: "Street market stall",
        debit: "Sometimes; often cash",
        credit: "Uncommon",
        tip: "See Cash vs card",
      },
      {
        setting: "Dutch webshop checkout",
        debit: "Often via iDEAL bank approval",
        credit: "Sometimes offered; not always primary",
        tip: "See How payments work",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Everyday pinpas habits for the shops credit should not replace",
        status: "live" as const,
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "When cash still helps at markets and tips",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  fees: {
    heading: "Fees and interest — indicative 2026 costs",
    lead:
      "Credit products can include annual fees, interest if you carry a balance, foreign-exchange markups and expensive cash advances. Euro figures below are indicative orientation for planning conversations in 2026 — not live tariffs, not a ranking of issuers, and not personal advice. Always verify current terms on the issuer’s official pages before you apply or spend.",
    bullets: [
      "Many classic consumer cards sit around €35–€45 per year in 2026 — confirm the exact product",
      "Interest applies if you revolve a balance; paying in full usually changes the cost picture",
      "FX markups on non-euro spend often land near ~2% on mainstream Dutch-issued cards",
      "Cash advances often cost around ~4% (plus interest timing) — avoid as a default habit",
    ],
    cards: [
      {
        title: "Annual fee — classic (2026)",
        body: "Mainstream classic cards often land around €35–€45 per year (examples in the market have sat near €39 for Mastercard Classic-style products and ~€43 for Visa World-style cards). Not a ranking — verify the issuer PDF.",
      },
      {
        title: "Gold / mid and premium tiers",
        body: "Mid-tier gold cards often sit around €45–€60 per year. Premium / platinum / black-style products commonly run ~€175–€225 per year when lounge and insurance extras are bundled. Only pay for benefits you will use.",
      },
      {
        title: "FX and foreign spend (~2%)",
        body: "Spending in other currencies often adds about a ~2% markup on many Dutch-issued credit cards. Compare with debit FX rules and specialist tools (see Wise vs Revolut) when you travel.",
      },
      {
        title: "Cash advances (~4%)",
        body: "Cash advances commonly cost around ~4% of the amount, and interest timing can start immediately. Prefer debit ATMs for cash floats — see Debit cards and Cash vs card.",
      },
    ] satisfies TipCard[],
    indicativeRows: [
      {
        setting: "Annual fee — classic",
        debit: "Usually bundled in account package",
        credit: "~€35–€45 / year indicative (2026)",
        tip: "Confirm issuer tariff PDF",
      },
      {
        setting: "Annual fee — gold / mid",
        debit: "N/A",
        credit: "~€45–€60 / year indicative",
        tip: "Check insurance extras",
      },
      {
        setting: "Annual fee — premium",
        debit: "N/A",
        credit: "~€175–€225 / year indicative",
        tip: "Only if benefits used",
      },
      {
        setting: "Extra / partner card",
        debit: "Extra debit often a few €/month",
        credit: "~€15–€22 / year indicative",
        tip: "Verify Extra Card fee",
      },
      {
        setting: "FX / non-euro spend",
        debit: "Issuer FX rules vary",
        credit: "Often ~2% markup indicative",
        tip: "Compare debit + FX tools",
      },
      {
        setting: "Cash advance",
        debit: "Own-bank ATM often free within limits",
        credit: "Often ~4% + interest timing",
        tip: "Use debit ATM + modest float",
      },
      {
        setting: "Paying balance in full",
        debit: "N/A (account balance)",
        credit: "Usually avoids revolving interest — confirm grace terms",
        tip: "Set calendar reminders",
      },
      {
        setting: "Carrying a balance",
        debit: "Overdraft rules differ by bank",
        credit: "Issuer APR applies — verify current rate",
        tip: "Do not assume “grace always”",
      },
    ] satisfies CompareRow[],
    warningItems: [
      "Indicative 2026 euro bands are orientation only — not live prices",
      "Issuer pages and contracts override anything on this guide",
      "This is not credit advice, affordability advice or an approval promise",
    ],
    crossLinks: [
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Broader fee categories for Dutch banking — live sibling",
        status: "live" as const,
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly banking costs",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  vsDebit: {
    heading: "Credit vs debit for everyday spend",
    lead:
      "For weekly Dutch life, debit usually wins on cultural fit: pinpas + PIN or tap. Credit wins for many deposit holds and some travel merchants. Build your wallet around that split instead of forcing one card to do every job.",
    rows: [
      {
        setting: "Weekly groceries",
        debit: "Local default — pin / tap",
        credit: "Secondary; may be declined or awkward",
        tip: "Lead with debit",
      },
      {
        setting: "Hotel / rental deposit",
        debit: "Sometimes OK — ask",
        credit: "Often preferred for holds",
        tip: "Confirm before arrival",
      },
      {
        setting: "Building everyday habits",
        debit: "Matches Dutch till culture",
        credit: "Do not force credit to “feel normal”",
        tip: "Change the habit, not the country",
      },
      {
        setting: "Online Dutch billers",
        debit: "Often iDEAL via bank app",
        credit: "Sometimes offered",
        tip: "Open How payments work",
      },
      {
        setting: "Cash float",
        debit: "ATM withdrawals",
        credit: "Cash advance often costly",
        tip: "See Debit cards / Cash vs card",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Deep-dive on pinpas and PIN culture — live sibling",
        status: "live" as const,
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Till mix and cash pockets — live sibling",
        status: "live" as const,
      },
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL and transfer rails — live sibling",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  acceptance: {
    heading: "Acceptance realities",
    lead:
      "Dutch merchants choose which networks and card types they accept. A credit logo on your plastic is not a promise that every supermarket, café or stall will take it. Plan a debit backup for everyday shops and ask hotels about holds before you travel.",
    bullets: [
      "Supermarkets and pharmacies often expect debit",
      "Hotels and rentals often expect credit for holds",
      "Foreign credit cards can work — fees and declines still happen",
      "When declined, ask calmly and switch methods — do not argue network theory at the till",
    ],
    cards: [
      {
        title: "Ask before you need it",
        body: "For hotels and car rentals, confirm hold rules by email or phone. Surprises at the desk are stressful.",
      },
      {
        title: "Backup always",
        body: "Carry a working debit option (Dutch pinpas or accepted foreign debit) plus a small cash float for markets.",
      },
      {
        title: "Network logos ≠ guarantee",
        body: "Visa or Mastercard branding helps routing — merchants and terminals still decide.",
      },
      {
        title: "Safety habits",
        body: "Use bank apps to freeze cards, watch for phishing, and verify unexpected holds — see Banking safety.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Banking safety & fraud",
        href: "/netherlands/money/banking/security/",
        description: "Card habits, phishing and calm checks",
        status: "live" as const,
      },
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Backup debit path for shops that prefer pinpas",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  scenarios: {
    heading: "Tourist and expat credit scenarios",
    intro: "Same country, different first moves depending on whether you are bridging, settling, or booking a hold-heavy weekend.",
    rows: [
      {
        situation: "Weekend tourist",
        approach: "Foreign credit + debit backup + small cash float; test a purchase on day one",
        firstStep: "Do not rely on credit alone in shops — see also Cash vs card",
      },
      {
        situation: "New arrival, no Dutch cards yet",
        approach: "Bridge with foreign credit/debit while Open a bank account runs; prioritise debit for weekly life",
        firstStep: "Write whether you truly need Dutch credit after debit works",
      },
      {
        situation: "Resident with Dutch debit, considering credit",
        approach: "Name the use-case (holds/travel), read fees, apply only if needed",
        firstStep: "Verify issuer eligibility and tariff pages",
      },
      {
        situation: "Hotel stay with deposit hold",
        approach: "Confirm credit preference; keep debit for restaurants and groceries",
        firstStep: "Ask reception what card types they accept for holds",
      },
    ] satisfies ScenarioRow[],
  },
  howToSchema: {
    name: "How to decide on a credit card as an expat in the Netherlands",
    description:
      "Orientation steps for Netherlands credit culture: secure debit first, define credit use-cases, read fees and interest, verify acceptance for holds, and know when to switch to Debit cards or Cash vs card.",
    anchor: "#howto",
  },
  howTo: {
    heading: "How to approach credit cards calmly (step by step)",
    lead: "A practical sequence for newcomers — banks and merchants remain authoritative.",
    steps: [
      {
        name: "Make debit work for weekly life",
        text: "Secure a Dutch pinpas path (or a clear foreign debit bridge). Credit should not be your only shop plan. Use Open a bank account and Debit cards.",
      },
      {
        name: "Write why you need credit",
        text: "Hotel holds, car rentals, travel bookings, specific online deposits — if the list is empty, you may not need a new credit product yet.",
      },
      {
        name: "Read fees and interest on issuer pages",
        text: "Check annual fees, revolving APR, FX markups and cash-advance rules for 2026 (or the current year on the site). Treat blog “best of” lists as non-authoritative.",
      },
      {
        name: "Plan acceptance and backups",
        text: "Ask hotels about holds. Carry debit for shops. Keep a modest cash float for markets (Cash vs card).",
      },
      {
        name: "Apply only when the use-case is clear",
        text: "Submit accurate documents. If declined or delayed, ask the issuer — then decide whether to wait, fix paperwork, or stay on your bridge card.",
      },
    ] satisfies HowToStep[],
  },
  mistakes: {
    heading: "Common expat mistakes",
    cards: [
      {
        title: "Treating credit as the shop default",
        body: "Many everyday shops are debit-led. Credit helps in holds and travel contexts, not as a universal till language.",
        advice: "Lead with debit capability plus a small cash float.",
      },
      {
        title: "Ignoring revolving interest",
        body: "Carrying a balance can become expensive quickly if you assume interest is negligible.",
        advice: "Read the issuer APR and repayment terms before you spend.",
      },
      {
        title: "Skipping Dutch debit setup",
        body: "Foreign credit can bridge weeks, but residents feel friction without a local debit path.",
        advice: "Start Open a bank account early if you are staying.",
      },
      {
        title: "Chasing “best card” rankings",
        body: "Award-style lists go stale and are not this site’s job.",
        advice: "Match a clear use-case to an official product page after shortlisting banks.",
      },
      {
        title: "Using credit cash advances for floats",
        body: "Cash advances are often costly compared with debit ATM withdrawals.",
        advice: "Prefer debit ATMs and Cash vs card habits for modest floats.",
      },
      {
        title: "Confusing sibling guides",
        body: "PIN culture, cash pockets and iDEAL rails are separate pages.",
        advice: "Use Debit cards, Cash vs card and How payments work for those deep-dives.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Credit readiness checklist",
    items: [
      "Dutch debit path working (or accepted foreign debit bridge confirmed)",
      "Written credit purpose: holds / travel / deposits — not “because home habits”",
      "Issuer eligibility and tariff pages read for the product you want (year on page noted)",
      "Interest and repayment terms understood if you might revolve a balance",
      "FX and foreign-transaction fees checked if you travel",
      "Hotel or rental hold rules confirmed when relevant",
      "Backup debit ready if credit is declined at a shop",
      "Modest cash float plan for markets (Cash vs card)",
      "Debit cards and How payments work bookmarked for sibling topics",
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
        status: "live" as const,
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly account and card costs",
        status: "live" as const,
      },
      {
        label: "Transfer cost calculator",
        href: TRANSFER_COST_CALCULATOR_PATH,
        description: "Model cross-border sends — not credit acceptance",
        status: "live" as const,
      },
    ] satisfies CreditCardsLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended options",
    subtitle:
      "Soft CTAs — we are not approving cards for you. Jump to official sites for bank credit products and travel-card companions, then validate annual fees, APR, FX markups and eligibility yourself.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance to credit and travel-card discovery for expats, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-money-credit-cards-support-providers",
    analyticsPageContext: "credit-cards-recommended-options",
    categoryLinks: [
      { href: "/netherlands/services/banks/", label: "Banks directory" },
      { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
      { href: DEBIT_CARDS_PATH, label: "Debit cards guide" },
    ],
    browseLabel: "More banking context: ",
  },
  faq: [
    {
      q: "Do I need a credit card in the Netherlands?",
      a: "Not for most weekly shopping — debit is the usual shop default. Credit is often useful for hotel holds, some rentals and certain travel or online deposits. Decide based on your use-cases, not home-country habit alone.",
    },
    {
      q: "Is a credit card the same as a Dutch debit pinpas?",
      a: "No. A pinpas spends from your everyday account. A credit card is a separate credit product with its own fees and repayment terms. See Debit cards for PIN culture.",
    },
    {
      q: "Will my foreign credit card work in Dutch shops?",
      a: "Often yes for major networks, but fees, FX and occasional declines still happen. Many everyday shops prefer debit. Carry a backup method.",
    },
    {
      q: "Can expats get a Dutch credit card?",
      a: "Sometimes — issuers set eligibility (identity, address, income and other signals). Approvals are not guaranteed. Verify requirements on the issuer’s site after you have a clear use-case.",
    },
    {
      q: "What fees should I check?",
      a: "As a 2026 orientation: many classic cards sit around €35–€45 per year, gold/mid tiers often ~€45–€60, and premium products can reach ~€175–€225. Also check revolving APR, FX markups (often ~2% on non-euro spend) and cash-advance fees (often ~4%). Confirm the live issuer tariff — figures here are indicative only.",
    },
    {
      q: "Why do hotels ask for a credit card?",
      a: "Many place a temporary deposit hold. Ask what they accept before arrival. Keep debit for other spending during the stay.",
    },
    {
      q: "Where do I learn about iDEAL and online Dutch checkouts?",
      a: "On How payments work — that rails topic is separate from credit product orientation on this page.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Banks, merchants and networks set their own rules — verify fees, interest and acceptance with them.",
    },
  ],
  relatedGuides: [
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Pinpas and PIN culture — live cluster sibling",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Everyday till culture and cash pockets — live cluster sibling",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, IBAN, SEPA and online rails",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Setup path to Dutch debit before credit decisions",
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
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "Multi-currency / app banking decision orientation — live cluster sibling",
      status: "live" as const,
    },
  ] satisfies CreditCardsLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Live cluster sibling — pinpas and PIN culture",
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
      description: "Rails and online checkout",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get to a Dutch debit path first",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Live cluster peer — compare onboarding and trade-offs",
      status: "live" as const,
    },
  ] satisfies CreditCardsLink[],
  exploreNext: [
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Master pinpas and PIN culture next",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Learn when cash still helps",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Learn iDEAL and transfer rails",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up the account behind everyday debit",
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
  ] satisfies CreditCardsLink[],
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
      label: "AFM — Consumers",
      href: "https://www.afm.nl/en/consumenten",
      description: "Financial markets authority consumer orientation — verify current credit guidance",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current articles on credit and payment topics",
    },
  ],
  disclosure:
    "Some links on this page — including the Recommended options block — may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes merchant acceptance, issuer approvals or fee schedules.",
} as const;

export type CreditCardsPage = typeof creditCardsPage;
