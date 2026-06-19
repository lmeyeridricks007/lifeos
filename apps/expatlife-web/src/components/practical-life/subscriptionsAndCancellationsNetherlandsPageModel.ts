import { LEAVING_NETHERLANDS_TAX_PATH } from "@/src/components/taxes/leavingNetherlandsTaxPageModel";
import { INTERNET_AND_MOBILE_NETHERLANDS_PATH } from "@/src/components/utilities/internetAndMobileNetherlandsPageModel";
import {
  UTILITIES_NETHERLANDS_PATH,
  ENERGY_AND_WATER_NETHERLANDS_PATH,
  INSURANCE_PROVIDERS_PATH,
} from "@/src/components/utilities/utilitiesNetherlandsPageModel";
import { GOVERNMENT_PORTALS_NETHERLANDS_PATH } from "./governmentPortalsNetherlandsPageModel";

export const SUBSCRIPTIONS_AND_CANCELLATIONS_NETHERLANDS_PATH =
  "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/" as const;

export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;

export type PracticalLifeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type SubscriptionCategoryEntry = {
  category: string;
  contractTypes: string;
  renewalModel: string;
  considerations: string;
};

export type ContractTermCard = {
  term: string;
  explanation: string;
};

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

export type ExpatQuestion = {
  q: string;
  a: string;
};

export type SubscriptionGuideSection = {
  id: string;
  visualSlug: string;
  heading: string;
  paragraphs: readonly string[];
  cards?: readonly TipCard[];
  bullets?: readonly string[];
  bulletTitle?: string;
  tasks?: readonly SubscriptionTask[];
  scenarios?: readonly SubscriptionScenario[];
  crossLink?: {
    href: string;
    title: string;
    description: string;
    linkLabel: string;
  };
};

export type SubscriptionTask = {
  task: string;
  channel: string;
  timing: string;
};

export type SubscriptionScenario = {
  situation: string;
  action: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-subscriptions-cancellations";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const subscriptionsAndCancellationsNetherlandsPage = {
  slug: "subscriptions-and-cancellations-netherlands",
  path: SUBSCRIPTIONS_AND_CANCELLATIONS_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: UTILITIES_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-11-02",
  seo: {
    title: "Subscriptions and Cancellations in the Netherlands | Expat Guide",
    description:
      "Learn how subscriptions, memberships and cancellations work in the Netherlands, including gyms, internet, mobile contracts, utilities, streaming services and notice periods.",
    keywords: [
      "subscriptions netherlands",
      "cancel subscription netherlands",
      "dutch subscriptions",
      "cancellation rules netherlands",
      "expat subscriptions netherlands",
      "gym membership netherlands",
      "internet contract netherlands",
      "mobile contract netherlands",
      "notice period subscription",
      "automatic renewal netherlands",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Subscriptions and Cancellations in the Netherlands",
    subtitle:
      "Understand how memberships, subscriptions, contracts and cancellation processes work in the Netherlands so you can avoid common mistakes and unnecessary costs.",
    chips: [
      "Internet & mobile",
      "Gyms & clubs",
      "Utilities",
      "Streaming",
      "Notice periods",
      "Moving house",
    ],
    disclaimer:
      "General consumer information only — contract terms vary by provider. Verify cancellation rules in your agreement and with official resources.",
    primaryCta: { label: "Learn About Contracts", href: "#intro" },
    secondaryCta: { label: "Explore Consumer Guides", href: "#consumer-rights" },
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic scene of an international couple at a bright Dutch apartment dining table reviewing household subscriptions on a smartphone and tablet with a renewal calendar — HUISHOUD ADMIN folder, tulips, coffee mugs, and Amsterdam canal houses with bicycles visible through the window.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#models", label: "Models" },
    { href: "#internet-mobile", label: "Internet" },
    { href: "#gym", label: "Gyms" },
    { href: "#streaming", label: "Streaming" },
    { href: "#utilities", label: "Utilities" },
    { href: "#insurance", label: "Insurance" },
    { href: "#media", label: "Media" },
    { href: "#contract-terms", label: "Terms" },
    { href: "#moving", label: "Moving" },
    { href: "#leaving", label: "Leaving" },
    { href: "#consumer-rights", label: "Rights" },
    { href: "#signup-checklist", label: "Before signing" },
    { href: "#cancellation-checklist", label: "Before cancelling" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#directory", label: "Directory" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Editorial infographic mapping Dutch subscription categories with example monthly costs and notice-period checklist for expats.",
      "Compare internet, mobile, energy, gym and insurance before you sign — terms vary by provider."
    ),
    snapshot: visual(
      "snapshot",
      "Editorial infographic of six subscription signals expats should track including renewal dates and cancellation channels.",
      "Auto-renewal, notice periods and record-keeping — orient yourself before signing."
    ),
    models: visual(
      "models",
      "Editorial timeline of five Dutch subscription models with concrete examples from streaming, gyms and energy.",
      "Monthly, annual, fixed-term, rolling and membership structures explained."
    ),
    internetMobile: visual(
      "internet-mobile",
      "Premium infographic of internet and mobile subscriptions in the Netherlands.",
      "Broadband, SIM-only and phone contracts with switching context."
    ),
    gym: visual(
      "gym",
      "Premium infographic explaining gym and sports memberships in the Netherlands.",
      "Contract length, notice windows and club structures."
    ),
    streaming: visual(
      "streaming",
      "Premium infographic of entertainment subscriptions in the Netherlands.",
      "Streaming, family plans and digital account management."
    ),
    utilities: visual(
      "utilities",
      "Premium infographic of utility and energy contracts in the Netherlands.",
      "Fixed vs variable tariffs and move-in setup."
    ),
    insurance: visual(
      "insurance",
      "Premium infographic of insurance policies as ongoing contracts.",
      "Health, contents, liability and annual review timing."
    ),
    media: visual(
      "media",
      "Premium infographic of newspaper and media subscriptions in the Netherlands.",
      "Digital news, magazines and trial-to-paid renewals."
    ),
    contractTerms: visual(
      "contract-terms",
      "Premium infographic of important Dutch contract terms for subscriptions.",
      "Notice period, renewal date and termination conditions in plain language."
    ),
    moving: visual(
      "moving",
      "Premium infographic of subscriptions when moving house in the Netherlands.",
      "Address updates, utility transfers and internet relocation."
    ),
    leaving: visual(
      "leaving",
      "Premium infographic preparing subscriptions before leaving the Netherlands.",
      "Review contracts, cancellations and administrative closure."
    ),
    consumerRights: visual(
      "consumer-rights",
      "Premium infographic of consumer protection resources in the Netherlands.",
      "ACM and ConsuWijzer orientation for contract questions."
    ),
    signupChecklist: visual(
      "signup-checklist",
      "Premium infographic checklist before signing any subscription in the Netherlands.",
      "Duration, renewal terms, costs and confirmation records."
    ),
    cancellationChecklist: visual(
      "cancellation-checklist",
      "Premium infographic checklist before cancelling a Dutch subscription.",
      "Contract review, correspondence and equipment returns."
    ),
    mistakes: visual(
      "mistakes",
      "Premium infographic of common subscription mistakes expats make in the Netherlands.",
      "Missed renewals, notice periods and address updates."
    ),
    directory: visual(
      "directory",
      "Premium infographic directory of common subscription categories in the Netherlands.",
      "Internet, mobile, energy, insurance, gyms and streaming."
    ),
    faq: visual(
      "faq",
      "Premium infographic summarizing subscription and cancellation FAQ for expats.",
      "Notice periods, renewals, moving and gym contracts."
    ),
    sources: visual(
      "sources",
      "Premium infographic of official consumer resources for Dutch subscriptions.",
      "Government.nl, ACM, ConsuWijzer and Business.gov.nl."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium infographic connecting subscriptions guide to utilities, housing and relocation.",
      "Continue into internet, utilities, insurance and leaving guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium infographic explore-next cards after subscription orientation.",
      "Internet, utilities, insurance, housing and leaving the Netherlands."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What newcomers should know first",
      items: [
        "Dutch providers use many subscription models — monthly, annual and fixed-term are all common.",
        "Automatic renewal is standard for many services; notice periods may apply before you can exit.",
        "Digital cancellation is increasingly available but not universal — read your contract.",
        "Moving or leaving the Netherlands often triggers a full subscription review.",
      ],
    },
    snapshot: {
      title: "Subscription signals to track",
      items: [
        "Contract start date and minimum duration",
        "Renewal or auto-renew date each year",
        "Notice period length (often 30 days but varies)",
        "Cancellation channel: app, email, registered letter or portal",
        "Equipment return rules for routers or modems",
        "Final invoice and pro-rata charges after closure",
      ],
    },
    models: {
      title: "Common Dutch subscription models",
      items: [
        "Monthly rolling — pay each month; may still require notice to cancel",
        "Annual contract — fixed 12-month term with renewal clause",
        "Fixed-term — gym or promo deals with end date and exit rules",
        "Membership — clubs with joining fees plus recurring dues",
        "Pay-as-you-go add-ons — streaming tiers bolted onto base plans",
      ],
    },
    internetMobile: {
      title: "Internet and mobile checklist",
      items: [
        "Compare SIM-only vs bundled phone contracts before committing",
        "Check minimum contract length and early termination fees",
        "Confirm fibre availability at your new address before signing",
        "Plan modem or router return when switching providers",
      ],
    },
    gym: {
      title: "Gym membership pointers",
      items: [
        "Read minimum membership period on promotional offers",
        "Notice periods may differ for basic vs premium tiers",
        "Some chains allow online cancellation; others require written notice",
        "Freeze or pause options vary — not a substitute for reading terms",
      ],
    },
    streaming: {
      title: "Entertainment subscriptions",
      items: [
        "Most streaming services are month-to-month with in-app cancellation",
        "Family plans may require managing all profiles before closing",
        "Dutch bundles (e.g. Ziggo + Netflix) tie cancellation to the main contract",
        "Trial periods auto-convert — set a reminder before day one charges",
      ],
    },
    utilities: {
      title: "Utility contract notes",
      items: [
        "Energy contracts may be fixed, variable or dynamic — exit rules differ",
        "Moving often requires ending or transferring contracts at both addresses",
        "Cooling-off periods may apply to new energy retail contracts",
        "District heating may have municipality-linked terms",
      ],
    },
    insurance: {
      title: "Insurance as subscriptions",
      items: [
        "Basic health insurance renews annually — switch in the designated window",
        "Contents and liability policies often auto-renew with annual premium updates",
        "Review coverage when household size or address changes",
        "Cancellation may require replacement cover for mandatory insurance types",
      ],
    },
    media: {
      title: "Media subscriptions",
      items: [
        "Digital newspapers often renew annually with email notice",
        "Introductory rates convert to standard pricing after trial months",
        "Check whether cancellation is via publisher site or third-party bundle",
      ],
    },
    contractTerms: {
      title: "Terms worth defining",
      items: [
        "Notice period — minimum advance warning before contract ends",
        "Automatic renewal — contract extends unless you cancel in time",
        "Fixed-term — binding period with specific exit conditions",
        "Rolling contract — continues until cancelled with proper notice",
      ],
    },
    moving: {
      title: "Moving-house subscription tasks",
      items: [
        "Update address with banks, insurers and subscription providers",
        "Transfer or cancel energy and internet at old and new homes",
        "Register new address with municipality — affects utility zones",
        "Photograph meter readings on handover day",
      ],
    },
    leaving: {
      title: "Leaving the Netherlands",
      items: [
        "List all recurring charges from bank statements and email receipts",
        "Cancel or transfer contracts before deregistration where possible",
        "Return rental equipment and retain return confirmations",
        "Align utility end dates with lease termination",
      ],
    },
    consumerRights: {
      title: "Consumer protection orientation",
      items: [
        "ACM supervises markets and publishes consumer guidance",
        "ConsuWijzer helps with disputes and contract questions",
        "Cooling-off rules may apply to certain distance contracts",
        "This guide does not interpret your individual contract",
      ],
    },
    signupChecklist: {
      title: "Before you sign",
      items: [
        "Confirm total monthly and annual cost including fees",
        "Save the contract PDF and confirmation email",
        "Note renewal date in your calendar",
        "Compare at least two providers for utilities and telecom",
      ],
    },
    cancellationChecklist: {
      title: "Before you cancel",
      items: [
        "Use the cancellation method specified in your contract",
        "Request written confirmation of closure",
        "Check for final pro-rata or equipment charges",
        "Remove saved payment methods after confirmation",
      ],
    },
    mistakes: {
      title: "Mistakes to avoid",
      items: [
        "Assuming every Dutch contract is cancel-anytime monthly",
        "Missing renewal windows for insurance and energy",
        "Forgetting to return modems or gym access cards",
        "Not updating address when moving within the Netherlands",
      ],
    },
    directory: {
      title: "Category overview",
      items: [
        "Internet and mobile — often 12–24 month terms with switching rules",
        "Energy — fixed, variable or dynamic with move-related transfers",
        "Insurance — annual cycles with mandatory health insurance rules",
        "Gyms and clubs — promotional lock-in periods common",
      ],
    },
    faq: {
      title: "Quick FAQ themes",
      items: [
        "Cancellation timing and notice periods",
        "What changes when you move address",
        "Gym and telecom contract structures",
        "Tracking renewals across providers",
      ],
    },
    sources: {
      title: "Official starting points",
      items: [
        "Government.nl — consumer and daily-life orientation",
        "ACM — market supervision and consumer telecom/energy context",
        "ConsuWijzer — practical help with contracts and disputes",
        "Business.gov.nl — entrepreneur and contract context",
      ],
    },
    relatedGuides: {
      title: "Continue your setup",
      items: [
        "Internet and mobile for provider comparison",
        "Utilities hub for energy and water contracts",
        "Insurance providers for policy review",
        "Leaving Netherlands tax guide for exit planning",
      ],
    },
    exploreNext: {
      title: "Next practical steps",
      items: [
        "Set up internet after comparing contract length",
        "Review utilities when keys are in hand",
        "Audit insurance during annual switch window",
        "Use housing hub for lease and move coordination",
      ],
    },
  },
  intro: {
    heading: "How Subscriptions Work in the Netherlands",
    paragraphs: [
      "Many Dutch services use subscription or membership models — from internet and mobile plans to gyms, streaming apps, utilities and insurance. Contract terms and cancellation processes vary significantly between providers and product types.",
      "Newcomers often assume everything works like a simple monthly app subscription. In practice, Dutch telecom, energy and gym contracts may include minimum terms, automatic renewals and notice periods that affect when you can leave without penalty.",
      "This guide explains common models, practical cancellation steps and relocation scenarios in plain language. It does not provide legal advice or guarantee outcomes for individual contracts — always verify with your provider and official consumer resources.",
    ],
  },
  quickAnswer: {
    summary: "Many Dutch services use subscription models — contract terms and cancellation processes vary by provider.",
    bullets: [
      "Internet, mobile plans, gyms, streaming, utilities and insurance are common subscription categories.",
      "Automatic renewal is widespread; notice periods may require advance cancellation.",
      "Digital cancellation is increasingly available but not universal.",
      "Moving or leaving the Netherlands usually requires a full subscription audit.",
    ],
    note: "Save contract PDFs and renewal dates when you sign — it simplifies cancellation later.",
  },
  snapshotSignals: [
    { label: "Notice period", value: "Often 30 days", note: "Varies by contract — read yours" },
    { label: "Auto-renewal", value: "Very common", note: "Cancel before renewal date" },
    { label: "Telecom lock-in", value: "12–24 months", note: "Promo rates hide minimum terms" },
    { label: "Health insurance", value: "Annual switch", note: "Window typically 1 Jan – 1 Feb" },
  ] satisfies SnapshotSignal[],
  orientationFlowSteps: [
    "Before signing: read minimum term, notice period and total cost over the full contract.",
    "On day one: save the contract PDF and add renewal dates to your calendar.",
    "When moving or leaving: audit bank debits and align utility end dates with your lease.",
  ],
  expatQuestions: [
    {
      q: "Can I cancel subscriptions anytime in the Netherlands?",
      a: "It depends on the contract. Streaming and some SIM-only plans may allow month-to-month cancellation, but gyms, mobile bundles and fixed energy deals often require notice and may lock you in for 12–24 months.",
    },
    {
      q: "What is a notice period?",
      a: "The minimum advance time you must give before a contract ends — often 30 days. Missing the window can mean another billing cycle or an automatic renewal.",
    },
    {
      q: "How do automatic renewals work?",
      a: "Many Dutch contracts extend for another term unless you cancel before the renewal deadline. Insurance, energy and media subscriptions commonly auto-renew annually.",
    },
    {
      q: "What should I check before signing?",
      a: "Contract duration, cancellation channel, renewal date, total cost including fees, and what happens if you move address mid-contract.",
    },
  ] satisfies ExpatQuestion[],
  snapshotCards: [
    { title: "Automatic renewals are common", body: "Many contracts extend unless you cancel within the notice window before the renewal date." },
    { title: "Notice periods may apply", body: "Telecom, gyms and utilities may require 30 days or more advance notice — check your agreement." },
    { title: "Digital cancellation options grow", body: "Apps and customer portals increasingly support online cancellation, but some providers still require written notice." },
    { title: "Contract length matters", body: "Promotional gym or mobile deals often include minimum commitment periods beyond the advertised monthly price." },
    { title: "Terms vary by provider", body: "Two internet providers on the same street can use different contract lengths and exit fees." },
    { title: "Keep records of cancellations", body: "Save confirmation emails, portal screenshots and registered-mail receipts for disputes." },
  ] satisfies TipCard[],
  snapshotMilestones: [
    { label: "Health insurance", value: "1 Jan – 1 Feb", note: "Annual switch window for basic cover" },
    { label: "Energy fixed deal", value: "Check contract", note: "Switch or cancel before auto-renewal" },
    { label: "Gym promo end", value: "Month 3–12", note: "Minimum term often starts after promo" },
    { label: "Telecom bundle", value: "12–24 months", note: "Early exit may cost remaining handset" },
  ] satisfies SnapshotSignal[],
  renewalTrackingTips: [
    "Create a spreadsheet: provider, monthly cost, renewal date, notice period, cancellation channel.",
    "Set calendar alerts 30 days before renewal — not on the renewal date itself.",
    "Review bank statements quarterly for forgotten trials and price increases.",
    "Store contract PDFs and cancellation emails in one folder per provider.",
  ],
  modelsSection: {
    heading: "Common Subscription Models",
    paragraphs: [
      "Dutch providers combine several contract structures. Understanding the model helps you predict cancellation timing and total cost over your stay.",
    ],
    modelCards: [
      { title: "Monthly subscriptions", body: "Recurring monthly payment — common for streaming and some SIM-only plans. May still require notice before the next billing cycle." },
      { title: "Annual contracts", body: "Twelve-month commitment with renewal clause — frequent for insurance and some media subscriptions." },
      { title: "Fixed-term contracts", body: "Binding period (e.g. 12 or 24 months) with specific early-exit rules — common for gyms and phone bundles." },
      { title: "Rolling subscriptions", body: "Continues until cancelled with proper notice — typical for energy variable contracts after initial term." },
      { title: "Membership models", body: "Joining fee plus recurring dues — sports clubs and some fitness chains use tiered membership structures." },
    ],
    examples: [
      "SIM-only mobile: often 1–2 year initial term, then month-to-month with notice",
      "Energy fixed tariff: price locked for contract duration; switch windows apply",
      "Gym promo: low first months with 12-month minimum membership",
      "Netflix-style streaming: cancel anytime in app before next billing date",
    ],
  },
  subscriptionGuideSections: [
    {
      id: "internet-mobile",
      visualSlug: "internet-mobile",
      heading: "Internet and Mobile Subscriptions",
      paragraphs: [
        "Internet and mobile are among the first subscriptions expats set up after housing. Dutch providers offer fibre broadband, cable, 5G mobile, SIM-only plans and phone-plus-bundle contracts.",
        "Contract length, switching rules and equipment return policies differ by provider. Compare total cost over the full minimum term — not only the promotional monthly rate.",
      ],
      cards: [
        { title: "Internet providers", body: "KPN, Ziggo, Odido and regional fibre operators — check postcode availability before signing." },
        { title: "Mobile providers", body: "Odido, KPN, Vodafone and budget brands — SIM-only vs handset bundles change exit costs." },
        { title: "SIM-only plans", body: "Often lower monthly cost but may still lock you for 12–24 months on promotional pricing." },
        { title: "Phone contracts", body: "Device instalments bundled with service — early cancellation may leave remaining handset payments." },
      ],
      bullets: [
        "ACM publishes consumer context on switching telecom providers.",
        "Keep your modem or router return deadline — late fees are common.",
        "Moving may allow contract transfer or require new signup at the new address.",
      ],
      tasks: [
        { task: "Check fibre availability at your postcode", channel: "Provider postcode check", timing: "Before signing any broadband deal" },
        { task: "Compare SIM-only vs handset bundle total cost", channel: "Provider websites / ACM orientation", timing: "Before move-in or phone upgrade" },
        { task: "Cancel or switch mobile contract", channel: "Provider app, portal or written notice", timing: "Per contract — often 30 days before renewal" },
        { task: "Return modem or router after switch", channel: "Provider return label or shop", timing: "Usually within 14–30 days of cancellation" },
      ],
      scenarios: [
        {
          situation: "Moving to a new address",
          action: "Check fibre at new postcode; you may need a new contract or provider switch.",
          note: "Some contracts allow transfer; others require cancellation and re-signup.",
        },
        {
          situation: "Promo SIM-only ends after 12 months",
          action: "Review new monthly price or switch provider during renewal window.",
          note: "Compare total cost over 24 months, not only the first-year promo.",
        },
      ],
      crossLink: {
        href: INTERNET_AND_MOBILE_NETHERLANDS_PATH,
        title: "Internet and Mobile Netherlands",
        description: "Provider comparison, SIM-only vs contracts, fibre setup and switching orientation for expats.",
        linkLabel: "Open internet and mobile guide",
      },
    },
    {
      id: "gym",
      visualSlug: "gym",
      heading: "Fitness and Sports Memberships",
      paragraphs: [
        "Gym chains, sports clubs and municipal swimming facilities often use membership contracts with joining fees, tiered access and minimum commitment periods on promotional offers.",
        "Cancellation may require notice by email, registered letter or an online form — terms differ between Basic-Fit, Fit For Free, local clubs and premium gyms.",
      ],
      cards: [
        { title: "Gym memberships", body: "National chains and boutique studios — read minimum period on discounted first months." },
        { title: "Sports clubs", body: "Hockey, tennis and football clubs may use seasonal or annual membership cycles." },
        { title: "Swimming facilities", body: "Municipal pools and wellness centres — sometimes separate from standard gym chains." },
        { title: "Fitness subscriptions", body: "App-based or hybrid memberships — usually easier to cancel digitally than traditional gyms." },
      ],
      bullets: [
        "Promotional pricing often requires staying for the full minimum term.",
        "Notice period may be longer for premium or annual prepaid memberships.",
        "Check whether access cards or tags must be returned to close the account.",
      ],
      tasks: [
        { task: "Read minimum membership period on promo offer", channel: "Contract PDF before signing", timing: "At signup — promos often lock 12 months" },
        { task: "Submit cancellation notice", channel: "Email, online form or registered letter", timing: "Per contract — often 30 days before next period" },
        { task: "Return access card or tag", channel: "Gym front desk or post", timing: "When account closes — keep receipt" },
        { task: "Request written confirmation of closure", channel: "Email reply or portal screenshot", timing: "Within a few days of submitting notice" },
      ],
      scenarios: [
        {
          situation: "€15/month promo for first 3 months",
          action: "Check fine print for 12-month minimum before assuming monthly cancel.",
          note: "Early exit fees may apply if you leave before minimum term ends.",
        },
        {
          situation: "Joining a sports club (not budget gym)",
          action: "Confirm seasonal vs annual cycle and notice rules with the club secretary.",
          note: "Clubs may differ from national gym chains on cancellation channels.",
        },
      ],
    },
    {
      id: "streaming",
      visualSlug: "streaming",
      heading: "Entertainment Subscriptions",
      paragraphs: [
        "Streaming and entertainment subscriptions are usually the easiest category for expats — many services run month-to-month with in-app cancellation.",
        "Bundled offers through telecom or TV packages tie streaming to a main contract — cancelling the app alone may not end billing.",
      ],
      cards: [
        { title: "Netflix & Disney+", body: "Monthly billing with in-app cancellation before renewal date." },
        { title: "Spotify & music apps", body: "Individual and family plans — manage profiles before closing family accounts." },
        { title: "Videoland & local TV", body: "Dutch streaming bundles — may link to Ziggo or KPN TV packages." },
        { title: "Amazon Prime Video", body: "Often bundled with Prime delivery — check which services you actively use." },
      ],
      bullets: [
        "Set calendar reminders before trial periods convert to paid plans.",
        "Family plans need a plan for shared access before account closure.",
        "TV-internet bundles may include HBO Max or sports channels with separate notice rules.",
      ],
      tasks: [
        { task: "Cancel standalone streaming in app", channel: "Service app or account website", timing: "Before next billing date" },
        { task: "Remove profiles on family plans", channel: "Account settings", timing: "Before closing primary account" },
        { task: "End trial before conversion", channel: "App cancellation or email reminder", timing: "Day 12–13 of a 14-day trial typical" },
        { task: "Cancel TV bundle add-on", channel: "Main telecom provider portal", timing: "May require notice on parent contract" },
      ],
      scenarios: [
        {
          situation: "Netflix via Ziggo TV package",
          action: "Cancel or change via Ziggo — not only in the Netflix app.",
          note: "Bundled streaming may keep billing until the main TV contract changes.",
        },
        {
          situation: "Free trial for Dutch news app",
          action: "Set reminder before trial converts to €9–15/month annual or monthly sub.",
          note: "Trials auto-renew unless cancelled in the publisher account.",
        },
      ],
    },
    {
      id: "utilities",
      visualSlug: "utilities",
      heading: "Utility Contracts",
      paragraphs: [
        "Electricity, gas, district heating and water-related services are essential subscriptions tied to your address. Energy contracts may be fixed, variable or dynamic — each with different switching and cancellation mechanics.",
        "When moving, you typically end or transfer contracts at both the old and new property. Internet is often grouped with utilities setup in the first weeks after move-in.",
      ],
      cards: [
        { title: "Electricity & gas", body: "Retail contracts with fixed, variable or dynamic pricing — compare exit and switching windows." },
        { title: "District heating", body: "Stadsverwarming in some cities — may have limited provider choice at the building." },
        { title: "Water", body: "Often billed via municipal or regional water company — separate from energy retailer." },
        { title: "Internet at home", body: "Frequently set up alongside energy — coordinate installation dates with move-in." },
      ],
      bullets: [
        "Record meter readings on move-in and move-out days.",
        "Cooling-off periods may apply to new energy contracts — verify current ACM guidance.",
        "Variable contracts may continue rolling until you switch or cancel with notice.",
      ],
      tasks: [
        { task: "Register energy contract at new address", channel: "Energy retailer website", timing: "From move-in date — compare fixed vs variable" },
        { task: "Submit meter readings on handover", channel: "Provider portal or form", timing: "Move-in and move-out day photos help" },
        { task: "Switch or cancel energy retailer", channel: "New provider or cancellation notice", timing: "Per contract — cooling-off may apply on new deals" },
        { task: "End contract at old address", channel: "Provider portal with end date", timing: "Align with lease termination date" },
      ],
      scenarios: [
        {
          situation: "Fixed tariff ends after 12 months",
          action: "Compare new fixed offer or switch to variable before auto-renewal price.",
          note: "Auto-renewal may move you to a more expensive default tariff.",
        },
        {
          situation: "District heating in apartment",
          action: "Confirm whether heat is bundled with rent or separate utility contract.",
          note: "Limited provider choice — read building or VvE terms.",
        },
      ],
      crossLink: {
        href: UTILITIES_NETHERLANDS_PATH,
        title: "Utilities in the Netherlands",
        description: "Energy, water, internet setup and household utilities orientation for newcomers.",
        linkLabel: "Open utilities guide",
      },
    },
    {
      id: "insurance",
      visualSlug: "insurance",
      heading: "Insurance and Ongoing Contracts",
      paragraphs: [
        "Insurance policies function as annual subscriptions with automatic renewal. Basic health insurance is mandatory for most residents — switching is limited to the annual window unless special circumstances apply.",
        "Contents, liability and home insurance renew yearly with updated premiums. Review coverage when you move, change household size or buy valuable items.",
      ],
      cards: [
        { title: "Health insurance", body: "Annual switch window — compare policies before automatic renewal each year." },
        { title: "Contents insurance", body: "Covers belongings — update when moving or changing address." },
        { title: "Liability insurance", body: "Common and inexpensive — often bundled with contents cover." },
        { title: "Home insurance", body: "Relevant for owners — separate from contents and mandatory for mortgages." },
      ],
      bullets: [
        "Do not cancel mandatory health cover without replacement policy in place.",
        "Annual premium letters show renewal pricing — act before the switch deadline.",
        "International policies may overlap — avoid duplicate cover but check gaps.",
      ],
      tasks: [
        { task: "Compare basic health policies", channel: "Zorgwijzer / insurer sites", timing: "1 January – 1 February switch window" },
        { task: "Update address on contents policy", channel: "Insurer portal or email", timing: "Within weeks of moving" },
        { task: "Review annual premium letter", channel: "Email or post from insurer", timing: "Before automatic renewal date" },
        { task: "Cancel optional cover", channel: "Insurer portal or written notice", timing: "Per policy notice period — health needs replacement first" },
      ],
      scenarios: [
        {
          situation: "Premium increase on contents insurance",
          action: "Compare alternatives or negotiate before renewal accepts new price.",
          note: "Auto-renewal applies if you do not switch or cancel in time.",
        },
        {
          situation: "Leaving the Netherlands",
          action: "Arrange health cover in next country before ending Dutch mandatory policy.",
          note: "Do not leave a gap in mandatory basic insurance without advice.",
        },
      ],
      crossLink: {
        href: INSURANCE_PROVIDERS_PATH,
        title: "Insurance Providers Netherlands",
        description: "Compare health, contents, liability and international insurance options for expats.",
        linkLabel: "Open insurance providers guide",
      },
    },
    {
      id: "media",
      visualSlug: "media",
      heading: "Media Subscriptions",
      paragraphs: [
        "Digital newspapers, magazines and online memberships often renew annually with email notice before the next payment. Introductory rates convert to standard pricing after trial months.",
        "Check whether you subscribed directly with the publisher or through a telecom or news bundle — cancellation paths differ.",
      ],
      cards: [
        { title: "Digital newspapers", body: "NRC, Volkskrant, FD and others — annual subs with renewal notices." },
        { title: "Magazines", body: "Print and digital bundles — may require notice before anniversary date." },
        { title: "Online memberships", body: "Professional databases, language apps and news aggregators." },
      ],
      bullets: [
        "Trial periods auto-renew — cancel before conversion if you do not want ongoing billing.",
        "Bundled news apps through telecom may need cancellation via the main provider.",
      ],
      tasks: [
        { task: "Cancel before trial converts to paid", channel: "Publisher account settings", timing: "1–2 days before trial end date" },
        { task: "Cancel annual digital newspaper", channel: "Publisher website or email", timing: "Before anniversary renewal — check notice period" },
        { task: "End telecom-bundled news package", channel: "Main TV or mobile provider", timing: "Follow parent contract cancellation rules" },
        { task: "Save cancellation confirmation", channel: "Email or account screenshot", timing: "Same day as cancellation request" },
      ],
      scenarios: [
        {
          situation: "Introductory rate for digital newspaper",
          action: "Note date when price jumps to standard annual rate; cancel before if not wanted.",
          note: "Annual subs often renew on signup anniversary, not calendar year.",
        },
        {
          situation: "Language-learning app annual sub",
          action: "Cancel in app store or publisher site — rules differ for Apple vs direct billing.",
          note: "App store subs may need cancellation through phone settings.",
        },
      ],
    },
  ] satisfies SubscriptionGuideSection[],
  contractTerms: [
    { term: "Notice period", explanation: "Minimum advance time you must give before the contract ends — often 30 days but can be longer for gyms or annual deals." },
    { term: "Automatic renewal", explanation: "Contract extends for another term unless you cancel before the renewal deadline stated in your agreement." },
    { term: "Fixed-term contract", explanation: "Binding period with a defined end date — early exit may trigger fees unless law or provider policy allows otherwise." },
    { term: "Rolling contract", explanation: "Continues indefinitely until you cancel with proper notice — common after an initial fixed period ends." },
    { term: "Cancellation date", explanation: "The date your service stops — may differ from the date you submit cancellation if notice period applies." },
    { term: "Renewal date", explanation: "When the contract extends or new annual pricing applies — mark this in your calendar when you sign." },
    { term: "Contract duration", explanation: "Total minimum time you are committed — promotional monthly prices may hide longer minimum terms." },
    { term: "Termination conditions", explanation: "Specific rules for ending the contract — channel (email, letter, portal), fees and equipment return requirements." },
  ] satisfies ContractTermCard[],
  contractTermScenarios: [
    {
      situation: "30-day notice on gym contract",
      action: "Submit cancellation at least 30 days before the next billing period starts.",
      note: "Missing the window often triggers another month or full year renewal.",
    },
    {
      situation: "Energy fixed deal auto-renews",
      action: "Compare new fixed offers or switch before the renewal date in your contract.",
      note: "Default tariff after auto-renewal may be higher than your original promo rate.",
    },
    {
      situation: "Handset bundle early exit",
      action: "Check remaining device instalments — early termination may bill the full balance.",
      note: "SIM-only plans usually have simpler exit rules than phone bundles.",
    },
    {
      situation: "Health insurance annual letter",
      action: "Use the 1 January – 1 February window to switch basic cover if price rises.",
      note: "Do not cancel mandatory health insurance without replacement policy in place.",
    },
  ] satisfies SubscriptionScenario[],
  movingSection: {
    heading: "What Happens When You Move?",
    paragraphs: [
      "Moving within the Netherlands triggers subscription updates across utilities, insurance, internet and municipal registration. Treat a move as a full contract review — not only an address change.",
    ],
    tasks: [
      { title: "Address updates", body: "Notify banks, insurers, mobile providers and subscription services of your new postcode." },
      { title: "Utility transfers", body: "End or transfer energy contracts; register new meter readings at both properties." },
      { title: "Internet relocation", body: "Check fibre at the new address — you may need a new contract or provider switch." },
      { title: "Municipality registration", body: "Register your new address — affects local taxes, waste and some utility zones." },
    ],
    examples: [
      "Amsterdam to Utrecht move: switch energy if variable contract allows; book internet installation before handover.",
      "Same-city apartment change: update health insurer address; confirm gym chain allows multi-location access.",
      "Temporary relocation: do not assume subscriptions pause automatically — request freeze if available.",
    ],
  },
  leavingSection: {
    heading: "Preparing to Leave",
    paragraphs: [
      "Before leaving the Netherlands, audit every recurring charge from bank statements, email receipts and app subscriptions. Align contract end dates with your lease termination and deregistration timeline.",
    ],
    tasks: [
      { title: "Audit recurring charges", body: "Export three months of bank transactions and highlight every recurring debit and trial conversion." },
      { title: "Align utility end dates", body: "Cancel or transfer energy and water with end dates matching your lease termination." },
      { title: "Return rental equipment", body: "Return modems, TV boxes and gym access cards — keep return receipts and portal screenshots." },
      { title: "Review mandatory insurance", body: "Arrange replacement health cover in your next country before ending Dutch mandatory policy." },
    ],
    crossLink: {
      href: LEAVING_NETHERLANDS_TAX_PATH,
      title: "Leaving the Netherlands Tax Guide",
      description: "Exit planning including deregistration, subscriptions and administrative closure for departing residents.",
      linkLabel: "Open leaving Netherlands guide",
    },
  },
  consumerRightsSection: {
    heading: "Consumer Protection Resources",
    paragraphs: [
      "Consumers in the Netherlands have access to official guidance and dispute support. These resources explain market rules and help with contract questions — they do not replace reading your specific agreement.",
      "ACM (Autoriteit Consument & Markt) supervises markets including telecom and energy retail. ConsuWijzer offers practical help when problems arise with providers.",
    ],
    resources: [
      { name: "ACM", href: "https://www.acm.nl/en", detail: "Consumer and market authority — telecom switching, energy retail and unfair terms context." },
      { name: "ConsuWijzer", href: "https://www.consuwijzer.nl/", detail: "Government-backed consumer help — disputes, cooling-off and contract questions." },
      { name: "Government.nl", href: "https://www.government.nl/", detail: "Official portal for consumer and daily-life topics in the Netherlands." },
    ],
    disclaimer: "This page provides general orientation only. For individual disputes or contract interpretation, use official resources or qualified advice.",
  },
  signupChecklist: [
    "Understand contract duration and minimum commitment",
    "Check cancellation process and required notice period",
    "Review automatic renewal and price-change clauses",
    "Compare at least two providers for telecom and energy",
    "Check total cost including fees, installation and equipment",
    "Save confirmation emails and contract PDFs",
    "Record renewal date in your calendar",
    "Confirm what happens if you move address mid-contract",
  ],
  cancellationChecklist: [
    "Review contract terms for notice period and channel",
    "Confirm cancellation method: portal, email or registered letter",
    "Save correspondence and confirmation screenshots",
    "Check final invoices and pro-rata charges",
    "Return equipment (modem, router, access card) if required",
    "Confirm account closure in writing",
    "Remove or update saved payment methods",
    "Retain confirmation for at least 12 months",
  ],
  mistakeCards: [
    { title: "Ignoring contract duration", body: "Promotional monthly prices often hide 12–24 month minimum terms." },
    { title: "Forgetting renewal dates", body: "Insurance and energy auto-renew — missing the switch window costs money." },
    { title: "Not understanding notice periods", body: "Submitting cancellation on the last day may still bill another month." },
    { title: "Losing cancellation confirmations", body: "Providers may dispute closure without email or portal proof." },
    { title: "Assuming all contracts are monthly", body: "Gyms, mobile bundles and energy fixed deals are often longer." },
    { title: "Forgetting address updates", body: "Wrong postcode can affect billing, service and legal correspondence." },
    { title: "Not comparing providers", body: "First offer is rarely the best over the full contract term." },
    { title: "Waiting until the last minute", body: "Moving or leaving needs weeks of lead time for utilities and telecom." },
  ] satisfies TipCard[],
  subscriptionDirectory: [
    {
      category: "Internet",
      contractTypes: "12–24 month fibre or cable; SIM-only overlap",
      renewalModel: "Auto-renew after minimum term; switching rules apply",
      considerations: "Postcode check, modem return, installation lead time",
    },
    {
      category: "Mobile",
      contractTypes: "SIM-only, handset bundles, eSIM plans",
      renewalModel: "Promo pricing with minimum period common",
      considerations: "Early termination fees on device instalments",
    },
    {
      category: "Energy",
      contractTypes: "Fixed, variable, dynamic retail contracts",
      renewalModel: "Annual renewal or rolling after initial term",
      considerations: "Cooling-off, switch windows, move meter readings",
    },
    {
      category: "Insurance",
      contractTypes: "Annual policies; mandatory health cover",
      renewalModel: "Automatic yearly renewal with premium update",
      considerations: "Switch window for basic health insurance",
    },
    {
      category: "Gyms",
      contractTypes: "Monthly with minimum term on promos",
      renewalModel: "Rolling until cancelled with notice",
      considerations: "Written notice, card return, freeze policies",
    },
    {
      category: "Streaming",
      contractTypes: "Mostly month-to-month digital",
      renewalModel: "Billing-cycle renewal until cancelled in app",
      considerations: "Bundles through TV provider need main contract cancel",
    },
    {
      category: "Transport",
      contractTypes: "NS subscriptions, bike leases, car sharing",
      renewalModel: "Varies — annual NS Flex vs monthly bike lease",
      considerations: "Employer benefits may affect cancellation",
    },
    {
      category: "Media",
      contractTypes: "Annual digital news and magazine subs",
      renewalModel: "Anniversary renewal with email notice",
      considerations: "Trial-to-paid conversion dates",
    },
  ] satisfies SubscriptionCategoryEntry[],
  faqs: [
    {
      q: "Can I cancel subscriptions anytime in the Netherlands?",
      a: "It depends on the contract. Streaming and some SIM-only plans may allow month-to-month cancellation, but gyms, mobile bundles and energy fixed contracts often include minimum terms or notice periods. Always check your agreement and provider cancellation page.",
    },
    {
      q: "What is a notice period?",
      a: "A notice period is the minimum advance time you must give before the contract ends — for example 30 days before the next renewal. Missing the window can mean another billing cycle or contract extension.",
    },
    {
      q: "How do automatic renewals work?",
      a: "Many Dutch contracts renew automatically for another term unless you cancel before the renewal deadline. Insurance, energy and media subscriptions commonly use annual auto-renewal with prior notice of price changes.",
    },
    {
      q: "What happens to subscriptions when I move?",
      a: "You typically update your address, transfer or end utilities, reinstall or switch internet, and review insurance coverage. Some gym memberships allow location changes; others require cancellation and rejoining.",
    },
    {
      q: "Can I transfer subscriptions to someone else?",
      a: "Some telecom or energy contracts allow transfer when moving out if another resident takes over the connection. Many personal subscriptions (streaming, gym) are non-transferable. Ask the provider for their transfer policy.",
    },
    {
      q: "How do gym memberships work in the Netherlands?",
      a: "Gyms often offer promotional monthly rates tied to minimum membership periods. Cancellation may require notice by email or registered letter. Premium clubs and sports associations may use different rules than budget chains.",
    },
    {
      q: "What contracts should I review before leaving the Netherlands?",
      a: "Review energy, internet, mobile, insurance, gym, housing-linked services and any equipment leases. Align end dates with your lease termination and keep cancellation confirmations for bank disputes.",
    },
    {
      q: "How do I keep track of renewal dates?",
      a: "Save contract PDFs, add renewal dates to your calendar when signing, and review bank statements quarterly. A simple spreadsheet with provider, cost, renewal date and notice period prevents expensive auto-renewals.",
    },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government portal for consumer and daily-life topics." },
    { label: "ACM", href: "https://www.acm.nl/en", description: "Authority for Consumers & Markets — telecom, energy retail and consumer guidance." },
    { label: "ConsuWijzer", href: "https://www.consuwijzer.nl/", description: "Consumer help with contracts, disputes and cooling-off orientation." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official business portal with contract and entrepreneur context." },
  ],
  sourcesDisclaimer:
    "Contract terms, cancellation procedures and consumer regulations can change. Always verify details with providers and official resources before acting.",
  sourceUsageTips: [
    "Use ConsuWijzer when a provider disputes your cancellation or charges after closure.",
    "Check ACM for current switching and cooling-off context in telecom and energy.",
    "Read Government.nl for high-level consumer orientation before signing long contracts.",
    "Keep your contract PDF — official resources explain rules but do not replace your agreement.",
  ],
  relatedGuides: [
    {
      label: "Internet and Mobile Netherlands",
      href: INTERNET_AND_MOBILE_NETHERLANDS_PATH,
      description: "Fibre, SIM-only, providers and contract comparison for expats.",
      status: "live",
    },
    {
      label: "Utilities in the Netherlands",
      href: UTILITIES_NETHERLANDS_PATH,
      description: "Energy, water and household utilities setup after moving.",
      status: "live",
    },
    {
      label: "Energy and Water Netherlands",
      href: ENERGY_AND_WATER_NETHERLANDS_PATH,
      description: "Electricity, gas, district heating and water contracts.",
      status: "live",
    },
    {
      label: "Insurance Providers Netherlands",
      href: INSURANCE_PROVIDERS_PATH,
      description: "Health, contents, liability and expat insurance orientation.",
      status: "live",
    },
    {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      description: "Renting, buying and move-in coordination with lease terms.",
      status: "live",
    },
    {
      label: "Government Portals Netherlands",
      href: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
      description: "Digital government services for registration and correspondence.",
      status: "live",
    },
    {
      label: "Leaving the Netherlands Tax Guide",
      href: LEAVING_NETHERLANDS_TAX_PATH,
      description: "Exit planning, deregistration and administrative closure.",
      status: "live",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextCards: [
    {
      label: "Internet & Mobile",
      href: INTERNET_AND_MOBILE_NETHERLANDS_PATH,
      description: "Compare providers and contract lengths before you sign.",
      status: "live",
    },
    {
      label: "Utilities Guide",
      href: UTILITIES_NETHERLANDS_PATH,
      description: "Set up energy and water alongside subscription planning.",
      status: "live",
    },
    {
      label: "Insurance Providers",
      href: INSURANCE_PROVIDERS_PATH,
      description: "Review annual policies during the switch window.",
      status: "live",
    },
    {
      label: "Housing Guide",
      href: HOUSING_HUB_PATH,
      description: "Coordinate lease dates with utility and internet setup.",
      status: "live",
    },
    {
      label: "Leaving the Netherlands",
      href: LEAVING_NETHERLANDS_TAX_PATH,
      description: "Audit subscriptions before departure and deregistration.",
      status: "live",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextTips: [
    "List every recurring debit before signing new contracts after a move.",
    "Set renewal reminders 30 days before insurance and energy switch windows.",
    "Keep a folder of contract PDFs and cancellation confirmations.",
    "Compare total cost over the minimum term — not only the first-month promo.",
  ],
} as const;
