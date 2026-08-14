import {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_PILLAR_ROOT_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
} from "@/src/components/living/livingPillarContent";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
};

export const LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;
export const SHOPPING_GROCERIES_PATH = LIVING_SHOPPING_GROCERIES_PATH;
export const PAYMENTS_BASICS_PATH = "/netherlands/living/payments/" as const;
export const COST_OF_LIVING_PATH = "/netherlands/money/cost-of-living-netherlands/" as const;
export const SAVING_MONEY_PATH = "/netherlands/money/saving-money-netherlands/" as const;

export type GuideLink = {
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
export type ComparisonRow = { topic: string; whatToCheck: string; tip: string };
export type TimelineStep = { phase: string; timing: string; detail: string };
export type ChainRow = { format: string; examples: string; whatToExpect: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "dutch-supermarkets";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchSupermarketsPage = {
  slug: "dutch-supermarkets",
  path: DUTCH_SUPERMARKETS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(DUTCH_SUPERMARKETS_PATH) ?? "2026-09-18",
  seo: {
    title: "Dutch Supermarkets | How Grocery Chains Work for Expats",
    description:
      "How the Dutch supermarket system works for newcomers: chain formats, opening-hours culture, bags and self-scan orientation, loyalty apps, weekly shop rhythm, produce codes and what to expect.",
    keywords: [
      "Dutch supermarkets",
      "supermarkets Netherlands",
      "grocery stores Netherlands",
      "Albert Heijn Jumbo Lidl",
      "supermarket opening hours Netherlands",
      "Dutch grocery shopping",
      "supermarket loyalty app Netherlands",
      "self scan supermarket Netherlands",
      "produce codes Netherlands",
      "expat grocery shopping Netherlands",
      "discounter supermarket Netherlands",
      "weekly shop Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Dutch supermarkets",
    subtitle:
      "How grocery chains work day to day for newcomers — formats, opening hours, bags, self-scan and loyalty apps orientation, weekly rhythm and produce habits — not a ranked “best of” list.",
    primaryCta: { label: "See the chain landscape", href: "#chains" },
    secondaryCta: { label: "Open Shopping & groceries", href: SHOPPING_GROCERIES_PATH },
    chips: ["Formats", "Opening hours", "Self-scan", "Loyalty apps", "Weekly rhythm"],
    disclaimer:
      "General orientation only — not financial, consumer-rights or shopping advice and not a ranking of chains. Opening hours, assortments, apps and deposit rules change by branch. Verify current details on each retailer’s site and at the store you use.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch supermarket aisle: multicultural newcomers with a trolley near fresh produce, soft daylight through storefront windows with canal bikes outside, welcoming everyday grocery mood without fake brand logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#system", label: "How it works" },
    { href: "#formats", label: "Formats" },
    { href: "#chains", label: "Chains" },
    { href: "#hours", label: "Hours" },
    { href: "#bags", label: "Bags & carts" },
    { href: "#self-scan", label: "Self-scan" },
    { href: "#loyalty", label: "Loyalty apps" },
    { href: "#weekly-rhythm", label: "Weekly rhythm" },
    { href: "#produce-codes", label: "Produce codes" },
    { href: "#expectations", label: "Expectations" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#food-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Dutch Supermarkets After Arrival — four building blocks: pick a format, learn hours, pack bags and apps, settle a weekly rhythm — Checklist rail on the right, Dutch canal and market skyline and ExpatLife brand footer.",
      "Four habits cover most supermarket questions: format, hours, checkout tools, and weekly rhythm."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch supermarket life — formats, chains, hours, bags, self-scan and loyalty, produce codes — Dutch grocery band and ExpatLife brand footer.",
      "Six building blocks explain almost every supermarket surprise for newcomers."
    ),
    system: visual(
      "system",
      "Premium ecosystem diagram — neighbourhood store, full-service supermarket, discounter and delivery van linked to one household weekly shop — Dutch street scene with bikes and canal light, General information only rail.",
      "Dutch grocery life is a system of formats — not one mega-store for everything."
    ),
    formats: visual(
      "formats",
      "Premium comparison board — full-service vs discounter vs neighbourhood vs delivery-only — calm Dutch desk with four store-format cards and Verify with your branch rail.",
      "Match format to trip type: weekly basket, budget staples, walkable top-up or scheduled delivery."
    ),
    chains: visual(
      "chains",
      "Premium provider-service map of Dutch supermarket landscape — national full-service, German discounters, cooperatives, regional banners and online-only — orientation labels only, no rankings, ExpatLife brand footer.",
      "Learn which formats sit near you — branch size and route matter more than brand fame."
    ),
    hours: visual(
      "hours",
      "Premium calendar-flow infographic of Dutch supermarket opening culture — weekday evenings, Saturday peak, Sunday shorter hours, holiday surprises — Checklist rail for branch hours saved in phone.",
      "Save your exact branch hours — Sunday and holiday patterns surprise many newcomers."
    ),
    bags: visual(
      "bags",
      "Premium desk-and-trolley scene — reusable bags, coin-deposit trolley, bottle reverse-vending cue — right-side packing checklist rail, Dutch aisle background and ExpatLife brand footer.",
      "Bring bags, keep a trolley coin, and learn deposit returns before your first full basket."
    ),
    selfScan: visual(
      "self-scan",
      "Premium self-scan orientation board — handheld scanner, bagging area, random check cue — link note to Shopping & groceries for full how-to, Dutch checkout lane scene.",
      "Self-scan is common — learn the flow calmly; deepen the how-to on Shopping & groceries."
    ),
    loyalty: visual(
      "loyalty",
      "Premium phone-and-receipt scene — bonus offers, digital stamps, list tools — orientation labels for major chain apps without fake ratings, Verify offers rail.",
      "One useful loyalty app beats three ignored downloads — use it if offers match your basket."
    ),
    weeklyRhythm: visual(
      "weekly-rhythm",
      "Premium weekly calendar flow — big shop, midweek top-up, Sunday shorter run, delivery slot option — Dutch kitchen table with list and canal light, ExpatLife brand footer.",
      "Settle one weekly anchor shop plus light top-ups instead of daily emergency runs."
    ),
    produceCodes: visual(
      "produce-codes",
      "Premium produce-weighing record board — scale sticker, PLU entry at self-checkout, loose produce etiquette — checklist rail and Dutch fruit aisle scene.",
      "Weigh, sticker or key the code — loose produce is where self-checkout often stalls."
    ),
    expectations: visual(
      "expectations",
      "Premium myth-vs-reality board for Dutch supermarket newcomers — debit norms, bag culture, quieter Sundays, quieter staff chat — Fix notes beside each card.",
      "Expect debit-first payment, bag-yourself culture and quieter Sunday hours than many home countries."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — no bags, wrong format for the trip, ignoring Sunday hours, stacking unused apps — Fix notes and Dutch skyline band.",
      "Most friction is preparation and format mismatch — not finding a supermarket."
    ),
    checklist: visual(
      "checklist",
      "Premium supermarket readiness checklist clipboard — format chosen, hours saved, bags packed, self-scan practiced, loyalty decided, produce codes known — Dutch kitchen table scene.",
      "Use this checklist so your first busy grocery week stays intentional."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Pick one nearby full-size store before comparing every chain online.",
        "Save branch hours for evenings and Sundays in your phone.",
        "Pack reusable bags and a trolley coin before you leave home.",
        "Link Shopping & groceries when you need self-checkout how-to depth.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Formats matter more than brand slogans in week one.",
        "Opening hours are branch-specific — including holidays.",
        "Self-scan and loyalty apps are optional tools, not requirements.",
        "Produce codes are the usual self-checkout stall point.",
      ],
    },
    system: {
      title: "System cues",
      items: [
        "Full-service stores cover most weekly baskets.",
        "Discounters shine on staples when the route fits.",
        "Neighbourhood shops solve top-ups, not always the whole week.",
        "Delivery is a format choice, not a separate lifestyle.",
      ],
    },
    formats: {
      title: "Format tips",
      items: [
        "Match trip type to format before chasing the lowest sticker.",
        "A tiny city AH To Go is not the same as a suburban Jumbo.",
        "Discounters reward a short list more than browsing.",
        "Delivery works when slots and minimums fit your postcode.",
      ],
    },
    chains: {
      title: "Landscape tips",
      items: [
        "National leaders, discounters, cooperatives and regional banners all coexist.",
        "Regional chains only matter if they sit on your commute.",
        "This page orients the system — Best supermarkets deepens choosing by situation.",
        "Branch size and parking or bike access often beat brand preference.",
      ],
    },
    hours: {
      title: "Hours habits",
      items: [
        "Weekday evenings are often open later than newcomers expect.",
        "Sundays are commonly shorter — plan the big shop earlier.",
        "Holiday hours differ by municipality and chain.",
        "Never rely on a forum screenshot — check your branch.",
      ],
    },
    bags: {
      title: "Bags & carts checklist",
      items: [
        "Reusable bags are the default expectation.",
        "Many trolleys need a coin or token deposit.",
        "Bottle and crate deposits (statiegeld) return at reverse vending.",
        "Pack as you go at self-scan to avoid a pile-up at the end.",
      ],
    },
    selfScan: {
      title: "Self-scan orientation",
      items: [
        "Handheld or phone scan is common in larger branches.",
        "Random checks are normal — keep receipts and calm timing.",
        "Age-restricted items may need staff approval.",
        "Full how-to lives on Shopping & groceries.",
      ],
    },
    loyalty: {
      title: "Loyalty app tips",
      items: [
        "Install one app for the store you actually use weekly.",
        "Bonus and personal offers often need a scan at checkout.",
        "Lists and digital receipts can matter more than coupons.",
        "Skip apps that only create notification noise.",
      ],
    },
    weeklyRhythm: {
      title: "Rhythm tips",
      items: [
        "One weekly anchor shop plus midweek top-ups beats daily panic buys.",
        "Saturday late morning is often busiest.",
        "Sunday is better for light top-ups than a full restock.",
        "Delivery slots are part of the rhythm, not a separate world.",
      ],
    },
    produceCodes: {
      title: "Produce habits",
      items: [
        "Weigh loose produce where the store asks for a sticker.",
        "Self-checkout may need a numeric produce code.",
        "Pre-packed produce skips the scale step.",
        "Ask staff once — then it becomes muscle memory.",
      ],
    },
    expectations: {
      title: "Expectation resets",
      items: [
        "Debit and contactless are the default; cash is secondary.",
        "Staff interaction is often efficient rather than chatty.",
        "You usually bag your own groceries.",
        "Quieter Sundays are cultural, not a service failure.",
      ],
    },
    mistakes: {
      title: "Mistake fixes",
      items: [
        "Bags and trolley coins solve half of first-trip stress.",
        "Use discounters for staples lists, not exotic hunts.",
        "Check Sunday hours before you rely on them.",
        "One loyalty app is enough until your pattern settles.",
      ],
    },
    checklist: {
      title: "Readiness tips",
      items: [
        "Know your primary store format and backup top-up shop.",
        "Hours, bags and payment method decided before you leave.",
        "Self-scan practiced once off-peak.",
        "Shopping & groceries bookmarked for errand depth.",
      ],
    },
  },
  snapshotSignals: [
    { label: "Start with", value: "One full-size store", note: "Near home" },
    { label: "Watch", value: "Sunday hours", note: "Branch-specific" },
    { label: "Bring", value: "Bags + coin", note: "Trolley deposit" },
    { label: "Sibling", value: "Shopping guide", note: "Self-checkout depth" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Dutch supermarket life is less about hunting a mythical “best store” and more about learning a system: full-service chains, discounters, neighbourhood shops and delivery options that sit side by side. Newcomers settle faster when they match the trip type to the format and learn the local habits around hours, bags and checkout tools.",
    "Shopping & groceries owns the wider errand system, self-checkout how-to, household non-food and deliveries. This page stays on how supermarket chains work day to day. Best supermarkets deepens choosing among fits — without turning this page into a ranking.",
  ],
  introHighlights: [
    "Treat formats (full-service, discounter, neighbourhood, delivery) as the first decision.",
    "Opening hours are a culture clue — especially Sundays and holidays.",
    "Bags, trolley coins, self-scan and loyalty apps are everyday mechanics, not extras.",
    "Use Shopping & groceries when you need checkout how-to or non-food errands.",
  ],
  orientationFlowSteps: [
    "Find one calm full-size supermarket near home and note its format.",
    "Save weekday evening and Sunday hours for that exact branch.",
    "Pack reusable bags and a trolley coin; try one self-scan or till run off-peak.",
    "Decide whether one loyalty app is worth keeping for your weekly shop.",
  ],
  starterChecklist: [
    "Primary store chosen within walking, bike or short transit range",
    "Backup top-up shop identified",
    "Branch hours saved (evening + Sunday)",
    "Reusable bags packed",
    "Trolley coin or token ready",
    "Payment method that works in Dutch shops confirmed",
    "Self-scan or till flow tried once calmly",
    "Loyalty app decision made (one or none)",
    "Shopping & groceries linked for self-checkout depth",
    "Produce weigh/sticker habit understood",
  ],
  introScenarios: [
    {
      situation: "First week in a new apartment, empty fridge",
      approach: "One full-service store for staples beats visiting five brands in one evening.",
      firstStep: "Do a calm half-basket run to learn layout, hours and checkout.",
    },
    {
      situation: "Student budget with a discounter nearby",
      approach: "Use the discounter for a staples list; keep a full-service backup for missing items.",
      firstStep: "Write a short staples list before you enter the middle aisle.",
    },
    {
      situation: "Busy household considering delivery",
      approach: "Treat delivery as another format — check postcode, slots and minimums first.",
      firstStep: "Compare one delivery trial with your usual in-store weekly shop.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Shopping & groceries deepens self-checkout, household non-food and parcel habits.",
    "Essential apps covers grocery apps in the wider install order.",
    "Payments basics explains debit norms at the till.",
    "Best supermarkets helps choose among chains by situation.",
  ],
  quickAnswer: {
    heading: "Dutch supermarkets in one minute",
    summary:
      "The Netherlands runs on a dense mix of full-service supermarket chains, German-style discounters, neighbourhood and cooperative stores, plus app-based delivery in many postcodes. Expect reusable bags, frequent self-scan, loyalty apps for offers, debit-first payment and shorter Sunday hours. Learn one nearby store’s rhythm first — then expand. This guide explains the system; Shopping & groceries covers the wider errand flow; Best supermarkets deepens chain choice by situation.",
    bullets: [
      "Match format to trip: weekly basket, budget staples, top-up or delivery.",
      "Check your branch hours — Sundays and holidays vary.",
      "Bring bags and a trolley coin; self-scan is common.",
      "One loyalty app for your main store is usually enough.",
    ],
    note: "For self-checkout how-to, household non-food and deliveries, open Shopping & groceries. For debit norms, open Payments basics.",
  },
  snapshotCards: [
    {
      title: "Formats",
      body: "Full-service, discounter, neighbourhood and delivery each solve different trips.",
    },
    {
      title: "Chains landscape",
      body: "National, discount, cooperative and regional banners coexist — route matters.",
    },
    {
      title: "Opening hours",
      body: "Weekday evenings often work; Sundays are commonly shorter.",
    },
    {
      title: "Bags & carts",
      body: "Reusable bags, trolley deposits and bottle returns are everyday mechanics.",
    },
    {
      title: "Self-scan & apps",
      body: "Common tools — optional until they clearly save you time.",
    },
    {
      title: "Produce codes",
      body: "Weigh, sticker or key codes — the usual self-checkout pause.",
    },
  ] satisfies TipCard[],
  system: {
    heading: "How the Dutch supermarket system works",
    intro:
      "Think of groceries as a small ecosystem around your home: a main weekly shop, a budget staples option, a walkable top-up and sometimes a delivery slot — not one American-style hypermarket that does everything forever.",
    paragraphs: [
      "Full-service chains carry a wide assortment and often longer hours. Discounters keep prices sharp on a tighter range. Neighbourhood stores (including many cooperatives and SPAR-style shops) trade range for proximity. Online-only players remove the store visit when coverage exists.",
      "Newcomers often over-research brands and under-learn their actual street. Start with what you can reach by bike or short walk, then notice which format fits which trip. Shopping & groceries expands non-food errands and delivery habits; this page stays on supermarket mechanics.",
    ],
    rows: [
      {
        topic: "Main weekly shop",
        whatToCheck: "A full-size store you can reach calmly with bags or a bike.",
        tip: "Branch size matters more than the logo on the façade.",
      },
      {
        topic: "Budget staples",
        whatToCheck: "Whether a discounter sits on a route you already take.",
        tip: "Bring a list — middle-aisle specials can expand the basket.",
      },
      {
        topic: "Top-ups",
        whatToCheck: "A walkable neighbourhood shop for forgotten items.",
        tip: "Convenience prices are fine for small baskets, costly for full weeks.",
      },
      {
        topic: "Delivery",
        whatToCheck: "Postcode coverage, slot times and minimum order rules.",
        tip: "Treat it as a format choice for heavy or rainy weeks.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "System over brand",
        body: "A great discounter far away loses to a decent full-service store on your corner.",
      },
      {
        title: "Trip types",
        body: "Weekly restock, staples run, tonight’s dinner and delivery each deserve a format.",
      },
      {
        title: "Cluster boundary",
        body: "Shopping & groceries owns errands and self-checkout how-to; this page owns the supermarket system.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errands, self-checkout how-to, household non-food and deliveries.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Wider weekday rhythms around home and errands.",
      },
      {
        label: "Survival Guide",
        href: LIVING_SURVIVAL_GUIDE_PATH,
        status: "live",
        description: "First-days orientation across living topics.",
      },
    ] satisfies GuideLink[],
  },
  formats: {
    heading: "Supermarket formats newcomers meet",
    intro:
      "Dutch stores share aisles and tills, but formats behave differently. Matching the format to the trip prevents the “I visited three stores and still forgot milk” week.",
    paragraphs: [
      "Full-service stores aim for one-basket coverage: fresh, pantry, dairy, household basics and often a bakery. Discounters compress choice to keep prices sharp. Neighbourhood formats prioritise speed and proximity. Delivery-only players replace the visit with an app slot.",
      "Compact city express shops under a big brand name are still a different format from that brand’s suburban flagship. Read the shelf depth, not only the logo.",
    ],
    rows: [
      {
        topic: "Full-service",
        whatToCheck: "Range, fresh counters, self-scan and typical weekly-shop comfort.",
        tip: "Default for most households settling a routine.",
      },
      {
        topic: "Discounter",
        whatToCheck: "Staples prices, bakery and seasonal specials vs missing niche lines.",
        tip: "Bring a list; expect fewer brands per category.",
      },
      {
        topic: "Neighbourhood / convenience",
        whatToCheck: "Walkability, hours and unit prices on small baskets.",
        tip: "Ideal for top-ups — rarely the cheapest full weekly shop.",
      },
      {
        topic: "Delivery-only / bezorgen",
        whatToCheck: "Coverage, slots, substitutions and packing quality.",
        tip: "Compare total time saved against in-store habits.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Express ≠ flagship",
        body: "A tiny branded city store can lack the weekly-shop depth of a larger branch.",
      },
      {
        title: "Discounter rhythm",
        body: "Fast once you know the layout; frustrating if you hunt specialty ingredients.",
      },
      {
        title: "Hybrid households",
        body: "Many expats use full-service weekly + discounter staples + neighbourhood top-ups.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "How formats sit inside the wider errand system.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Grocery spend in the wider household budget picture.",
      },
    ] satisfies GuideLink[],
  },
  chains: {
    heading: "Chains landscape (orientation, not a ranking)",
    intro:
      "You will see national full-service names, German discounters, Dutch discount and cooperative banners, regional favourites and online-only players. This is a map of the landscape — not a “best supermarket” scoreboard.",
    paragraphs: [
      "Albert Heijn and Jumbo are the familiar full-service national anchors many expats meet first. Lidl and Aldi are the common German-style discounters. Plus, Coop and similar cooperative or franchise networks often feel more neighbourhood-local. SPAR-style shops lean convenience. Regional banners (for example Vomar, Hoogvliet, DekaMarkt) matter only where they operate. Picnic is a well-known app-based delivery format where coverage exists. Organic specialists such as Ekoplaza serve a narrower, premium-oriented need.",
      "Assortment, price positioning and hours vary by branch. Use this section to recognise formats on your street. Choosing among chains for your household is intentionally deepened on Best supermarkets — and by your own two-week experiment.",
    ],
    rows: [
      {
        format: "National full-service",
        examples: "Albert Heijn, Jumbo (and similar large formats)",
        whatToExpect: "Wide range, apps, self-scan in many branches, familiar weekly-shop flow",
        tip: "Start here if you want one predictable basket near home",
      },
      {
        format: "German-style discounters",
        examples: "Lidl, Aldi",
        whatToExpect: "Sharp staples pricing, tighter assortment, seasonal middle-aisle specials",
        tip: "Strong with a short list; weaker for exotic one-stop hunts",
      },
      {
        format: "Dutch discount / value",
        examples: "Dirk and similar value banners",
        whatToExpect: "Straightforward low-price positioning where present",
        tip: "Check whether a branch exists on your actual route",
      },
      {
        format: "Cooperative / neighbourhood",
        examples: "Plus, Coop, SPAR-style shops",
        whatToExpect: "Local feel, walkable trips, franchise variation by store",
        tip: "Judge the branch you have — not the brand brochure",
      },
      {
        format: "Regional full-service",
        examples: "Vomar, Hoogvliet, DekaMarkt (region-dependent)",
        whatToExpect: "Strong local alternatives where the network exists",
        tip: "Ignore names that never appear in your postcode",
      },
      {
        format: "Delivery-only / specialty",
        examples: "Picnic; organic specialists such as Ekoplaza",
        whatToExpect: "App slots or narrower organic-focused ranges",
        tip: "Validate coverage and budget fit before you switch routines",
      },
    ] satisfies ChainRow[],
    cards: [
      {
        title: "No awards here",
        body: "We do not rank chains or invent “best for expats” medals — route and format first.",
      },
      {
        title: "Two-week test",
        body: "Shop your top two nearby options before you lock a loyalty identity.",
      },
      {
        title: "Coming next",
        body: "Best supermarkets deepens choice criteria by household situation.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Light chain overview plus errand and checkout depth.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Habit-level ways grocery patterns affect monthly spend.",
      },
    ] satisfies GuideLink[],
  },
  hours: {
    heading: "Opening hours culture",
    intro:
      "Dutch supermarket hours feel generous on weekday evenings and surprisingly short on many Sundays. The pattern is cultural and legal-local — always verify the branch you use.",
    paragraphs: [
      "Many larger stores stay open into the evening on weekdays, which helps after-work shops. Saturdays can be busy from late morning. Sundays often run shorter hours; some smaller shops differ. Public holidays can mean reduced hours or closures that vary by municipality and retailer.",
      "Forum screenshots go stale. Save your branch’s hours in Maps or the chain app, and re-check around holidays. Tourist-area convenience shops sometimes keep friendlier hours — at convenience prices.",
    ],
    steps: [
      {
        phase: "Weekday evenings",
        timing: "After work",
        detail: "Often viable for a full shop — still confirm closing time for your branch.",
      },
      {
        phase: "Saturday",
        timing: "Peak late morning–afternoon",
        detail: "Plan extra time or go earlier if you dislike queues.",
      },
      {
        phase: "Sunday",
        timing: "Shorter window common",
        detail: "Better for top-ups than discovering you need a full restock at 17:30.",
      },
      {
        phase: "Holidays",
        timing: "Varies",
        detail: "Check the retailer site or door sticker the week before.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Branch over brand",
        body: "Two stores in the same chain can close at different times.",
      },
      {
        title: "Holiday trap",
        body: "King’s Day and Christmas periods are classic surprise closures.",
      },
      {
        title: "App hours help",
        body: "Chain apps often show branch hours — still glance at the door the first month.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "How opening hours sit in wider weekday routines.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Where grocery apps fit in a newcomer install order.",
      },
    ] satisfies GuideLink[],
  },
  bags: {
    heading: "Bags, trolleys and deposits",
    intro:
      "Reusable bags are the everyday expectation. Many trolleys need a coin or token. Bottle and crate deposits (statiegeld) return through reverse-vending machines in or near stores.",
    paragraphs: [
      "Single-use bags are sold if you forget — which quietly taxes a chaotic first week. Keep foldable bags in your backpack or bike pannier. For trolleys, a euro coin or store token is the usual unlock; you get it back when you return the trolley.",
      "Deposit bottles and cans are part of grocery rhythm, not a niche recycling hobby. Return them when the bag under the sink gets heavy. Exact deposit amounts and accepted packaging change — follow the machine and label cues.",
    ],
    rows: [
      {
        topic: "Reusable bags",
        whatToCheck: "Whether you packed enough for a full weekly basket.",
        tip: "Bike panniers double as grocery carriers for many households.",
      },
      {
        topic: "Trolley deposit",
        whatToCheck: "Coin or token before you enter the store.",
        tip: "Keep one coin in your grocery pouch permanently.",
      },
      {
        topic: "Statiegeld returns",
        whatToCheck: "Which bottles and cans your store’s machine accepts.",
        tip: "Return on the same trip as a top-up to avoid garage pile-ups.",
      },
      {
        topic: "Packing pace",
        whatToCheck: "Whether you bag at the till or at a packing shelf.",
        tip: "At self-scan, pack as you go so the end is not a scramble.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Forget-once tax",
        body: "Buying bags every trip is an expensive reminder to pack reusables.",
      },
      {
        title: "Trolley etiquette",
        body: "Return trolleys to the bay — it keeps the deposit system smooth for everyone.",
      },
      {
        title: "Deposits ≠ trash",
        body: "Deposit packaging is money sitting in your kitchen until you return it.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Wider packing, errand and household shopping habits.",
      },
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "How paying at the till usually works.",
      },
    ] satisfies GuideLink[],
  },
  selfScan: {
    heading: "Self-scan orientation (not the full how-to)",
    intro:
      "Handheld scanners, phone scan and self-checkout lanes are common in larger Dutch supermarkets. This section orients you — the full how-to lives on Shopping & groceries.",
    paragraphs: [
      "You typically start a scan session, scan items as you shop or at a fixed station, pay at a kiosk, and occasionally meet a random security check. Age-restricted items may pause the flow for staff approval. Produce without barcodes is the usual stall — see the produce codes section.",
      "You do not need self-scan on day one. A staffed till is fine while you learn layout. When you are ready, practise once off-peak. For step-by-step self-checkout habits, open Shopping & groceries rather than duplicating that guide here.",
    ],
    rows: [
      {
        topic: "Handheld / app scan",
        whatToCheck: "Whether your branch offers scanners or phone scanning.",
        tip: "Start with a small basket so mistakes stay cheap.",
      },
      {
        topic: "Fixed self-checkout",
        whatToCheck: "Bagging area space and payment options.",
        tip: "Pack as you scan when the ledge is small.",
      },
      {
        topic: "Random checks",
        whatToCheck: "How staff verify a sample of items.",
        tip: "Normal process — keep calm and have the receipt flow ready.",
      },
      {
        topic: "When to use a till",
        whatToCheck: "Large bulk items, complex returns or first-week nerves.",
        tip: "Staffed lanes remain a valid choice.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Orientation only",
        body: "We do not repeat the full self-checkout tutorial on this page.",
      },
      {
        title: "Sibling deep-dive",
        body: "Shopping & groceries owns self-checkout how-to and errand flow.",
      },
      {
        title: "Produce first",
        body: "Learn weigh/sticker habits before your first large self-scan shop.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Full self-checkout how-to and everyday errand system.",
      },
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms at checkout.",
      },
    ] satisfies GuideLink[],
  },
  loyalty: {
    heading: "Loyalty apps orientation",
    intro:
      "Major chains push apps for personal offers, digital stamps, shopping lists and sometimes self-scan. Useful when they match your weekly store — noisy when you install five and ignore them.",
    paragraphs: [
      "Bonus-style personalised offers often need a scan of your card or app at checkout. Some households care more about digital receipts and lists than about chasing every coupon. Offers change weekly; treat savings as a habit booster, not a second job.",
      "Privacy and notification settings are yours to tune. You do not need an account to buy groceries. Best supermarkets compares fit criteria by situation, still sitting on top of this simple rule: one primary app until your pattern is stable.",
    ],
    rows: [
      {
        topic: "Offers",
        whatToCheck: "Whether personalised bonuses require an app scan.",
        tip: "Only activate offers you will actually buy.",
      },
      {
        topic: "Lists & receipts",
        whatToCheck: "Whether the app replaces paper lists for your household.",
        tip: "Lists often beat coupons for reducing forgotten items.",
      },
      {
        topic: "Self-scan link",
        whatToCheck: "If the same app starts a scan session in your branch.",
        tip: "Learn scan and pay once together off-peak.",
      },
      {
        topic: "App sprawl",
        whatToCheck: "How many grocery apps you opened this month.",
        tip: "Delete the ones tied to stores you never visit.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "One primary app",
        body: "Match the app to the store you visit most — not every logo you recognise.",
      },
      {
        title: "Offers ≠ obligation",
        body: "Skip promotions that pull you into unplanned aisle tours.",
      },
      {
        title: "Essential apps link",
        body: "See the wider newcomer install order on Essential apps.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Grocery apps inside a calm install order.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "How apps sit beside delivery and errand habits.",
      },
    ] satisfies GuideLink[],
  },
  weeklyRhythm: {
    heading: "Weekly shop rhythm",
    intro:
      "Households that settle a weekly anchor shop plus light top-ups usually spend less time and fewer impulse euros than daily “emergency dinner” runs.",
    paragraphs: [
      "A common pattern: one larger shop for staples and fresh basics, a midweek produce or dairy top-up, and optional Sunday light run if hours allow. Delivery slots can replace the anchor shop when coverage and timing fit.",
      "Saturday late morning is often the crowded slot. After-work weekday shops work in many cities if you accept a busier aisle. Build the rhythm around your commute and fridge size, not a blog’s ideal meal-prep fantasy.",
    ],
    steps: [
      {
        phase: "Anchor shop",
        timing: "Once per week",
        detail: "Full-service or hybrid discounter+fresh run for the core basket.",
      },
      {
        phase: "Midweek top-up",
        timing: "1× light visit or delivery add-on",
        detail: "Milk, greens, bread — neighbourhood shop is enough.",
      },
      {
        phase: "Optional Sunday",
        timing: "Short window",
        detail: "Only if hours and energy allow — not your first big restock.",
      },
      {
        phase: "Review",
        timing: "After two weeks",
        detail: "Drop formats that create friction; keep the ones on your route.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Fridge reality",
        body: "Small Dutch fridges punish oversized American-style monthly hauls.",
      },
      {
        title: "List before aisle",
        body: "A short list protects both time and the middle-aisle budget.",
      },
      {
        title: "Money cluster link",
        body: "Cost of living and Saving money help place groceries in the monthly picture.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Grocery line inside household cost orientation.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Habit levers that often include food patterns.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Weekday rhythm beyond the supermarket aisle.",
      },
    ] satisfies GuideLink[],
  },
  produceCodes: {
    heading: "Produce codes and weighing habits",
    intro:
      "Loose fruit and vegetables are where many self-checkout sessions pause. Stores expect you to weigh and sticker items, or enter a produce code at the kiosk — habits differ slightly by chain and branch.",
    paragraphs: [
      "In many stores you weigh loose produce at a scale in the department, print a barcode sticker and scan that sticker later. In others, especially at self-checkout, you select the item on screen or key a PLU-style code. Pre-packed produce with a barcode skips the step.",
      "If you are unsure, watch one local shopper or ask staff once. It is a normal newcomer question. Mastering this removes most self-scan anxiety before you deepen the full checkout how-to on Shopping & groceries.",
    ],
    rows: [
      {
        topic: "Department scale",
        whatToCheck: "Whether you print a sticker before you leave produce.",
        tip: "Stick the label on the bag so it scans cleanly.",
      },
      {
        topic: "Self-checkout codes",
        whatToCheck: "On-screen produce list or numeric entry.",
        tip: "Search the Dutch or English name; ask staff if stuck.",
      },
      {
        topic: "Pre-packed",
        whatToCheck: "Barcode already on the package.",
        tip: "Easiest path on your first self-scan week.",
      },
      {
        topic: "Etiquette",
        whatToCheck: "Gloves or bag use where provided.",
        tip: "Follow the cues at the display — keep it tidy for the next shopper.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "First stall point",
        body: "Loose produce — not payment — usually slows new self-checkout users.",
      },
      {
        title: "Ask once",
        body: "Staff would rather show you the code than untangle a longer queue later.",
      },
      {
        title: "Then deepen",
        body: "Full self-checkout flow continues on Shopping & groceries.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Self-checkout how-to after you know produce basics.",
      },
    ] satisfies GuideLink[],
  },
  expectations: {
    heading: "What newcomers should expect",
    intro:
      "A few cultural defaults reduce surprise: debit-first payment, bag-yourself norms, efficient rather than chatty service, and quieter Sunday retail hours.",
    paragraphs: [
      "Contactless debit is the everyday till language. Cash still appears, but planning to pay by card matches local norms — deepen this on Payments basics. You typically pack your own bags; staff are helpful when asked and rarely perform a US-style bagging theatre.",
      "Assortment includes strong private-label lines. International aisles exist in larger city branches but will not clone every home-country brand. Quieter Sundays are normal. None of this is a service failure — it is the Dutch grocery baseline.",
    ],
    cards: [
      {
        title: "Debit-first tills",
        body: "Have a working card or wallet ready; deepen norms on Payments basics.",
      },
      {
        title: "Bag yourself",
        body: "Packing speed is part of checkout — especially at self-scan.",
      },
      {
        title: "Efficient service",
        body: "Polite and direct beats long small-talk at peak hour.",
      },
      {
        title: "Sunday calm",
        body: "Shorter hours are cultural — plan the big shop earlier in the week.",
      },
      {
        title: "Private label strength",
        body: "Store brands are mainstream quality for many staples.",
      },
      {
        title: "Not a ranking",
        body: "Comfort comes from rhythm and route — not a viral “best chain” list.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "How paying in shops usually works.",
      },
      {
        label: "Culture & etiquette",
        href: "/netherlands/living/culture-etiquette/",
        status: "live",
        description: "Broader everyday interaction norms.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Grocery tools to explore",
    subtitle:
      "Soft CTAs for established supermarket and meal patterns when you are modelling everyday food spend. This block is not a ranking of chains or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for supermarket week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-dutch-supermarkets-support-providers",
    analyticsPageContext: "dutch-supermarkets-recommended-options",
    categoryLinks: [
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
      { href: COST_OF_LIVING_PATH, label: "Cost of living" },
      { href: LIVING_ESSENTIAL_APPS_PATH, label: "Essential apps" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common expat supermarket scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Empty kitchen, first 72 hours",
        approach: "One full-service half-basket run beats a five-store scavenger hunt.",
        firstStep: "Learn layout, hours and checkout with a short list.",
      },
      {
        situation: "Tight budget, discounter nearby",
        approach: "Staples list at the discounter; full-service for gaps only.",
        firstStep: "Write the list before you enter the specials aisle.",
      },
      {
        situation: "No car, bike panniers only",
        approach: "Smaller, more frequent shops or a delivery slot for heavy goods.",
        firstStep: "Test one delivery or split the weekly basket into two bike trips.",
      },
      {
        situation: "Sunday surprise hunger",
        approach: "Shorter Sunday hours are common — avoid relying on a full restock.",
        firstStep: "Save branch Sunday hours and keep a pantry backup meal.",
      },
      {
        situation: "Loyalty app overwhelm",
        approach: "One app for the store you visit weekly; delete the rest.",
        firstStep: "Install only after your primary store is clear.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Arriving without bags or a trolley coin",
      body: "The first trip becomes an expensive scramble at the till.",
      advice: "Pack reusables and keep one coin in your grocery pouch.",
    },
    {
      title: "Treating every logo as the same format",
      body: "An express shop cannot replace a full-size weekly branch.",
      advice: "Check shelf depth and store size, not only the brand name.",
    },
    {
      title: "Planning the big shop for late Sunday",
      body: "Shorter hours and closures catch many newcomers.",
      advice: "Anchor the weekly shop earlier; use Sunday for light top-ups only.",
    },
    {
      title: "Skipping produce habits before self-scan",
      body: "Loose fruit stalls the kiosk and the queue behind you.",
      advice: "Learn weigh/sticker or codes on a tiny basket first.",
    },
    {
      title: "Installing five grocery apps on day one",
      body: "Notification noise without a stable primary store.",
      advice: "One loyalty app until your weekly rhythm settles.",
    },
    {
      title: "Using this page as a “best chain” ranking",
      body: "The system guide is not a scoreboard.",
      advice: "Test two nearby options; open Best supermarkets for choice depth.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Dutch supermarket readiness checklist",
    intro: "Use this before your first busy grocery week so the system feels intentional.",
    items: [
      "Primary full-size store chosen near home",
      "Backup top-up shop identified",
      "Weekday evening and Sunday hours saved",
      "Reusable bags packed",
      "Trolley coin or token ready",
      "Payment method that works in Dutch shops confirmed",
      "Self-scan or till practised once off-peak",
      "Produce weigh/sticker or code habit understood",
      "Loyalty app decision made (one or none)",
      "Shopping & groceries bookmarked for self-checkout depth",
      "Deposit return plan for bottles/cans",
      "Optional: delivery coverage checked for your postcode",
    ],
  },
  howTo: {
    heading: "How to settle a calm supermarket routine",
    steps: [
      {
        name: "Pick a primary format near home",
        text: "Choose one full-size supermarket you can reach calmly, and note whether a discounter or neighbourhood shop will handle staples or top-ups.",
      },
      {
        name: "Save hours and pack the basics",
        text: "Store evening and Sunday hours in your phone, pack reusable bags, and keep a trolley coin ready.",
      },
      {
        name: "Run one orientation shop",
        text: "Buy a half-basket off-peak to learn layout, produce habits and checkout — staffed till or self-scan.",
      },
      {
        name: "Add tools only if they help",
        text: "Install at most one loyalty app for your primary store, and open Shopping & groceries when you want full self-checkout how-to.",
      },
      {
        name: "Lock a weekly rhythm after two weeks",
        text: "Keep the formats on your route, drop the noisy extras, and revisit chain choice later if needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to settle a Dutch supermarket routine as an expat",
    description:
      "Orientation steps for expats picking a supermarket format, learning hours and bags, practising checkout and building a weekly grocery rhythm in the Netherlands.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What are the main supermarket types in the Netherlands?",
      a: "Most newcomers meet full-service chains, German-style discounters, neighbourhood or cooperative shops, and — in many postcodes — app-based delivery. Match the format to the trip rather than hunting one perfect brand.",
    },
    {
      q: "Which supermarket is best for expats?",
      a: "There is no universal winner. Start with a full-size store near home, test a nearby discounter if budget matters, and judge branch reality over online rankings. Best supermarkets deepens choice criteria by situation; this page explains the system.",
    },
    {
      q: "Are Dutch supermarkets open on Sunday?",
      a: "Many are, often with shorter hours — but it varies by branch, chain and municipality. Save your store’s Sunday hours and re-check around holidays.",
    },
    {
      q: "Do I need the supermarket loyalty app?",
      a: "No. Apps help with personalised offers, lists and sometimes self-scan. Install one for the store you actually use weekly if the benefits are clear.",
    },
    {
      q: "How does self-scan work?",
      a: "Larger stores often offer handheld or phone scanning plus self-checkout kiosks, sometimes with random checks. This page orients you; Shopping & groceries has the fuller how-to.",
    },
    {
      q: "Why do trolleys need a coin?",
      a: "Many Dutch trolleys use a coin or token deposit so they are returned to the bay. You get the coin back when you dock the trolley.",
    },
    {
      q: "What is statiegeld?",
      a: "A deposit on certain bottles and cans returned via reverse-vending machines. Follow label and machine cues for what is accepted.",
    },
    {
      q: "How is this different from Shopping & groceries?",
      a: "Shopping & groceries covers the wider errand system, self-checkout how-to, household non-food and deliveries. This page focuses on how the supermarket chain system works day to day.",
    },
  ],
  relatedGuides: [
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Decision guide for choosing among supermarket fits.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Spend less with discounters, offers, private label and waste tactics.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Find non-Dutch products via world-food aisles and specialty markets.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Asian toko depth — formats, categories, first-visit tips and city patterns.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Turkish and Middle-Eastern specialty shopping depth.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Indian and South Asian specialty shopping depth.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "South African specialty shops and comfort foods.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription meal-kit boxes — cost modelling, cadence and pause habits.",
    },
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Restaurant takeaway apps and grocery delivery — fees, tipping and coverage.",
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      status: "live",
      description: "Errands, self-checkout how-to, household non-food and deliveries.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Where grocery apps fit in a newcomer install order.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless norms in shops.",
    },
    {
      label: "Daily life",
      href: LIVING_DAILY_LIFE_PATH,
      status: "live",
      description: "Weekday rhythms around home and errands.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Grocery spend in the wider budget picture.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "First-days living orientation.",
    },
  ] satisfies GuideLink[],
  foodHub: {
    heading: "Food & daily groceries hub",
    intro: "Keep supermarket system knowledge connected to the wider Living and money cluster.",
    cards: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand system and self-checkout depth.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "This guide — chain system and day-to-day habits.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Decision guide for choosing among supermarket fits.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Money-saving tactics across formats and habits.",
      },
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Non-Dutch product sourcing across aisles and specialty shops.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Asian toko depth — formats, categories, first-visit tips and city patterns.",
      },
      {
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Turkish and Middle-Eastern specialty grocery depth.",
      },
      {
        label: "Indian supermarkets",
        href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Indian and South Asian specialty grocery depth.",
      },
      {
        label: "South African shops",
        href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
        status: "live",
        description: "South African specialty shops and comfort foods.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription meal-kit modelling and pause habits.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Restaurant takeaway and grocery delivery orientation.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Grocery apps in the install order.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Broader everyday living basics.",
      },
      {
        label: "Living hub",
        href: LIVING_HUB_PATH,
        status: "live",
        description: "All Living pillar starting points.",
      },
    ] satisfies GuideLink[],
  },
  exploreNext: [
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Model subscription dinner boxes against supermarket cooking.",
    },
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Compare takeaway and grocery delivery fees with cooking and shopping.",
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      status: "live",
      description: "Self-checkout how-to and the wider errand system.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Install grocery tools without app sprawl.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Pay confidently at Dutch tills.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Place food spend in the monthly picture.",
    },
    {
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Habit levers that often include groceries.",
    },
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Decision guide for choosing among supermarket fits.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Spend less with discounters, offers, private label and waste tactics.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Find specialty and world-food products beyond the Dutch system primer.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Asian toko depth — formats, categories, first-visit tips and city patterns.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Best supermarkets deepens choosing among fits by household situation.",
    "Cheap groceries owns money-saving tactics across formats.",
    "International supermarkets owns non-Dutch product sourcing.",
    "Shopping & groceries owns self-checkout how-to and household non-food errands.",
    "Essential apps places grocery apps in a calm install order.",
    "Payments basics covers debit norms at the till.",
    "Cost of living and Saving money place food spend in the monthly picture.",
  ],
  foodHubTips: [
    "Use Shopping for errands; this page for the supermarket system.",
    "Best supermarkets deepens choosing among chains by situation.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Do not mark live siblings as coming soon — only planned peers.",
  ],
  exploreNextTips: [
    "Open Shopping & groceries next if self-checkout still feels new.",
    "Add Essential apps only after your primary store is clear.",
    "Use Cost of living / Saving money when budgeting food spend.",
    "Open Best supermarkets when you need choice criteria by situation.",
  ],
  officialSources: [
    {
      label: "Government.nl — consumer topics",
      href: "https://www.government.nl/",
      description: "Starting point for official consumer and everyday-life orientation.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Independent Dutch consumer association — useful for retail and product context.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Example full-service retailer site for branch hours, apps and services.",
    },
    {
      label: "Jumbo",
      href: "https://www.jumbo.com/",
      description: "Example full-service retailer site — verify your local branch details.",
    },
    {
      label: "Lidl Netherlands",
      href: "https://www.lidl.nl/",
      description: "Example discounter site for assortment and branch information.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "Example delivery-only supermarket — check postcode coverage.",
    },
  ],
  disclosure:
    "General information only. Not financial, consumer-rights or shopping advice and not a ranking of supermarket chains. Opening hours, assortments, apps, deposits and delivery coverage change. Verify current details with retailers and official consumer sources. Some outbound links may be affiliate or referral links.",
} as const;
