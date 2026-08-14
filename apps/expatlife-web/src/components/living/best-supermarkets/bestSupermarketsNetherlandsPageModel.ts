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
  RESTAURANTS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TIPPING_NETHERLANDS_PATH,
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
  RESTAURANTS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TIPPING_NETHERLANDS_PATH,
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
export type ComparisonRow = { situation: string; betterFit: string; why: string; watchOut: string };
export type FitRow = { priority: string; whatToLookFor: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "best-supermarkets-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const bestSupermarketsNetherlandsPage = {
  slug: "best-supermarkets-netherlands",
  path: BEST_SUPERMARKETS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: DUTCH_SUPERMARKETS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(BEST_SUPERMARKETS_NETHERLANDS_PATH) ?? "2026-09-18",
  seo: {
    title: "Best Supermarkets Netherlands | Decision Guide for Expats",
    description:
      "Choose the supermarket that fits your expat situation in the Netherlands — budget, organic, international products, one-stop weekly shops, neighbourhood top-ups and delivery — without fake rankings or awards.",
    keywords: [
      "best supermarkets Netherlands",
      "best supermarket Netherlands",
      "which supermarket Netherlands",
      "supermarket comparison Netherlands",
      "cheap supermarket Netherlands",
      "organic supermarket Netherlands",
      "international supermarket Netherlands",
      "expat grocery shopping Netherlands",
      "Albert Heijn vs Lidl",
      "best grocery store Netherlands expats",
      "supermarket for expats Netherlands",
      "Picnic vs supermarket Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Best supermarkets Netherlands",
    subtitle:
      "A decision guide for which Dutch supermarket fit matches your household — budget, organic, international products, one-stop weekly shops, neighbourhood convenience or delivery — not a ranked “#1” awards list.",
    primaryCta: { label: "Match your situation", href: "#decision" },
    secondaryCta: { label: "Open Dutch supermarket system", href: DUTCH_SUPERMARKETS_PATH },
    chips: ["Budget", "Organic", "International", "One-stop", "Neighbourhood", "Delivery"],
    disclaimer:
      "General orientation only — not financial or shopping advice and not a ranking, award list or star-rating scoreboard. Assortments, prices and coverage change by branch and postcode. Verify current details on each retailer’s site. Soft provider links below are optional tools, not “winners”.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table scene: multicultural newcomers comparing grocery lists and supermarket options beside fresh produce bags, canal light through a window, welcoming decision-guide mood without fake awards or brand logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#decision", label: "Decision" },
    { href: "#budget", label: "Budget" },
    { href: "#organic", label: "Organic" },
    { href: "#international", label: "International" },
    { href: "#one-stop", label: "One-stop" },
    { href: "#neighbourhood", label: "Neighbourhood" },
    { href: "#delivery", label: "Delivery" },
    { href: "#comparison", label: "Compare" },
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
      "Premium decision board titled Best Fit Not Best Award — four cues: your priorities, nearby branches, trip type, test basket — Checklist rail, Dutch canal kitchen skyline and ExpatLife brand footer.",
      "Best means best fit for your household — not a fake national #1 ranking."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of supermarket choice axes — budget, organic, international, one-stop, neighbourhood, delivery — Dutch grocery band and ExpatLife brand footer.",
      "Six choice axes explain almost every “which supermarket?” search for newcomers."
    ),
    decision: visual(
      "decision",
      "Premium record-file builder for supermarket choice — priority list, branch map pins, trip-type cards and a two-week test plan — General information only rail, Dutch desk scene.",
      "Write priorities first, then test two nearby options — skip award screenshots."
    ),
    budget: visual(
      "budget",
      "Premium desk scene with staples list, discounter basket and full-service gap list — Verify prices at your branch rail, Dutch aisle light and ExpatLife brand footer.",
      "Discounters shine on a short staples list; full-service covers the gaps."
    ),
    organic: visual(
      "organic",
      "Premium produce-and-label consultation scene — organic aisle cues, store-brand bio, specialist shop note — Checklist rail for label reading, calm Dutch market light.",
      "Organic depth varies by chain and branch — check the aisle, not the slogan."
    ),
    international: visual(
      "international",
      "Premium world-pantry map board — Asian, Latin, Middle Eastern and British/US pantry cues linked to full-service plus specialty shops — Dutch city market skyline, ExpatLife brand footer.",
      "Pair a full-service weekly shop with specialty stores for home-country staples."
    ),
    oneStop: visual(
      "one-stop",
      "Premium one-stop weekly shop diagram — trolley with food, pharmacy aisle, household aisle and bakery — branch-size checklist rail, suburban Dutch storefront scene.",
      "One-stop works when the branch is large enough for your full weekly basket."
    ),
    neighbourhood: visual(
      "neighbourhood",
      "Premium walkable neighbourhood map — bike panniers, corner shop, evening top-up route — Dutch canal street with bikes, Verify opening hours rail.",
      "Neighbourhood shops win for top-ups and walkability — not always the full week."
    ),
    delivery: visual(
      "delivery",
      "Premium calendar-and-van flow — postcode check, delivery slot, minimum order, unpack habit — Dutch apartment hallway with crates, ExpatLife brand footer.",
      "Delivery is a fit when slots and coverage match your postcode and week."
    ),
    comparison: visual(
      "comparison",
      "Premium comparison board — six household situations across budget, organic, international, one-stop, neighbourhood and delivery columns — no star ratings, Dutch skyline band.",
      "Match situations to fit patterns — never to fabricated scores."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — student budget, family weekly shop, time-poor couple, international kitchen — Dutch canal window light and ExpatLife brand footer.",
      "Start from your household story, then pick the first test store."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — chasing #1 lists, ignoring branch size, one chain for every need, skipping a test basket — Fix notes and Dutch grocery skyline.",
      "Most choice friction comes from rankings and assumptions — not from missing stores."
    ),
    checklist: visual(
      "checklist",
      "Premium supermarket choice checklist clipboard — priorities written, two branches tested, budget and international gaps noted, delivery coverage checked — Dutch kitchen table scene.",
      "Use this checklist so “best supermarket” becomes a calm two-week experiment."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Decision habits",
      items: [
        "Best fit beats best award — write your household priorities first.",
        "Branch reality near home matters more than national brand fame.",
        "Test two options with a real basket before locking a routine.",
        "Open Dutch supermarkets for system habits; Shopping for errand how-to.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Budget, organic and international are different choice axes.",
        "One-stop and neighbourhood solve different trip types.",
        "Delivery is optional — only when coverage and slots fit.",
        "No section here is a star-rating or #1 claim.",
      ],
    },
    decision: {
      title: "Framework cues",
      items: [
        "Rank three priorities max for month one.",
        "Map stores you can reach without stress.",
        "Match trip type: weekly, staples, top-up or delivery.",
        "Revisit after two weeks with receipt reality.",
      ],
    },
    budget: {
      title: "Budget tips",
      items: [
        "Write a staples list before entering a discounter.",
        "Use full-service for gaps, not as the only budget lever.",
        "Store brands often matter more than switching chains weekly.",
        "Compare baskets you actually cook, not viral price screenshots.",
      ],
    },
    organic: {
      title: "Organic tips",
      items: [
        "Scan the bio aisle depth in your nearest full-service branch.",
        "Store-brand organic can cover weekly basics calmly.",
        "Specialty organic shops help when depth matters more than distance.",
        "Labels and assortments change — verify on the shelf.",
      ],
    },
    international: {
      title: "International pantry tips",
      items: [
        "Full-service chains carry a growing world-foods section.",
        "Asian, Middle Eastern and Latin markets fill real gaps.",
        "British/US nostalgia items are uneven — specialty shops help.",
        "Do not expect one supermarket to replace every home-country brand.",
      ],
    },
    oneStop: {
      title: "One-stop tips",
      items: [
        "Check branch size: express shops are not weekly one-stop stores.",
        "Household and pharmacy aisles save a second trip.",
        "Parking or bike access can decide the weekly anchor store.",
        "Link Shopping & groceries for non-food errand depth.",
      ],
    },
    neighbourhood: {
      title: "Neighbourhood tips",
      items: [
        "Walkable top-ups beat a long bike ride for milk and bread.",
        "Cooperative and regional shops matter when they sit on your route.",
        "Save evening and Sunday hours for the closest branch.",
        "Keep a weekly anchor elsewhere if the corner shop is tiny.",
      ],
    },
    delivery: {
      title: "Delivery tips",
      items: [
        "Check postcode coverage before designing a delivery-led week.",
        "Slot timing and minimums matter as much as the app brand.",
        "Heavy goods and busy weeks are the usual fit cases.",
        "Keep an in-store backup for last-minute gaps.",
      ],
    },
    comparison: {
      title: "Compare habits",
      items: [
        "Read rows as fit patterns, not rankings.",
        "Combine formats when one store cannot cover every priority.",
        "Update the table after you test your real branches.",
        "Skip any external list that sells fake awards.",
      ],
    },
    scenarios: {
      title: "Scenario tips",
      items: [
        "Students often win with discounter staples plus a top-up shop.",
        "Families usually need one large weekly branch nearby.",
        "Time-poor households should test delivery coverage early.",
        "International kitchens plan a specialty stop into the month.",
      ],
    },
    mistakes: {
      title: "Mistake fixes",
      items: [
        "Ignore #1 and star-rating claims — test your street.",
        "Check branch size before promising a one-stop week.",
        "Allow a second format for budget or international gaps.",
        "Run one test basket before downloading five apps.",
      ],
    },
    checklist: {
      title: "Choice checklist cues",
      items: [
        "Priorities written before browsing chains online.",
        "Two nearby options tested with a real list.",
        "Budget and international gaps noted honestly.",
        "Delivery coverage checked only if time-poor weeks matter.",
      ],
    },
  },
  quickAnswer: {
    heading: "There is no universal “best” supermarket",
    summary:
      "In the Netherlands, the best supermarket is the one that fits your household priorities and the branches you can actually reach — budget staples, organic depth, international products, one-stop weekly shops, neighbourhood top-ups or delivery — not a national award winner.",
    bullets: [
      "Start from priorities (budget, products, time, walkability), not brand slogans.",
      "Branch size and location often beat national reputation.",
      "Many households use two formats: a weekly anchor plus a staples or specialty stop.",
      "This page chooses among fits; Dutch supermarkets explains the system; Shopping covers errands and self-checkout how-to.",
    ],
    note: "If you only do one thing: pick two reachable stores that match different priorities and run a real basket test this week.",
  },
  introParagraphs: [
    "Expats search “best supermarket Netherlands” hoping for a single winner. Dutch grocery life rarely works that way: Albert Heijn, Jumbo, Lidl, Aldi, Plus, Dirk, Picnic and local specialty shops solve different jobs.",
    "This guide is a decision tool. It maps common expat situations to fit patterns, comparison tables and calm first steps — without fake star ratings, guarantees or “#1 supermarket” claims.",
    "Use Dutch supermarkets when you need formats, hours, bags, self-scan orientation and weekly rhythm. Use Shopping & groceries for self-checkout how-to, household non-food and delivery habits. Stay here when the question is which fit to choose.",
  ],
  introHighlights: [
    "Decision guide — fit by situation, not awards",
    "Comparison tables for budget, organic, international, one-stop, neighbourhood and delivery",
    "Scenario paths for students, families, time-poor and international kitchens",
    "Soft grocery-provider CTAs only as optional tools — never as rankings",
  ],
  starterChecklist: [
    "Write your top three grocery priorities for month one",
    "List stores within a calm bike or walk from home",
    "Note which are full-size vs express vs discounter",
    "Plan one test basket at your top two options",
    "Bookmark Dutch supermarkets for system habits",
    "Bookmark Shopping & groceries for self-checkout how-to",
  ],
  introScenarios: [
    {
      situation: "New arrival, empty kitchen",
      approach: "One full-size nearby store for the first week beats comparing every national chain online.",
      firstStep: "Run a half-basket orientation shop at the closest large branch.",
    },
    {
      situation: "Tight budget after rent",
      approach: "Discounter staples plus a full-service gap list usually beats hunting a mythical cheapest everything store.",
      firstStep: "Write a staples list and test the nearest Lidl or Aldi once.",
    },
    {
      situation: "Need home-country ingredients",
      approach: "Pair a weekly supermarket with a specialty Asian, Middle Eastern, Latin or British shop.",
      firstStep: "Map one specialty store on your monthly route.",
    },
  ] satisfies ScenarioRow[],
  orientationFlowSteps: [
    "Name your top three priorities",
    "Map reachable branches by format",
    "Match trip type to fit pattern",
    "Test two baskets, then settle",
  ],
  snapshotTips: [
    "Snapshot cards are choice axes — not scores.",
    "Combine axes when one store cannot cover everything.",
    "Re-check after you know your real commute and kitchen.",
  ],
  snapshotSignals: [
    {
      label: "Budget fit",
      value: "Staples list",
      note: "Discounters often win when the list is short and deliberate.",
    },
    {
      label: "Product depth",
      value: "Aisle reality",
      note: "Organic and international depth vary by branch more than by slogan.",
    },
    {
      label: "Trip type",
      value: "Weekly vs top-up",
      note: "One-stop and neighbourhood shops solve different journeys.",
    },
    {
      label: "Time trade-off",
      value: "Slot vs aisle",
      note: "Delivery helps when coverage and slots fit — not everywhere.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Budget & discounters",
      body: "Best when staples dominate and you can stick to a list — Lidl and Aldi are common orientation examples, not ranked winners.",
    },
    {
      title: "Organic & quality focus",
      body: "Best when bio depth and store-brand organic matter — check the aisle in a full-service branch before adding a specialty shop.",
    },
    {
      title: "International products",
      body: "Best as a pair: weekly supermarket plus specialty markets for home-country staples that chains only partially cover.",
    },
    {
      title: "One-stop weekly shop",
      body: "Best at a large full-service branch with food, household and pharmacy aisles — express formats rarely qualify.",
    },
    {
      title: "Neighbourhood convenience",
      body: "Best for walkable top-ups and evening milk runs — keep a larger weekly anchor if the corner shop is tiny.",
    },
    {
      title: "Delivery & time-poor weeks",
      body: "Best when your postcode has reliable slots — Picnic and retailer delivery are tools to test, not status symbols.",
    },
  ] satisfies TipCard[],
  decision: {
    heading: "How to choose without chasing awards",
    intro:
      "Use a short decision framework: priorities → reachable formats → trip type → two-week test. Skip any list that sells fake ratings or a universal #1.",
    paragraphs: [
      "Month one rarely needs a perfect national answer. It needs a primary store you can reach calmly and a clear second option for budget, specialty or delivery gaps.",
      "Write priorities in plain language — “cut grocery spend”, “find Thai staples”, “one trolley on Saturday” — then match them to the sections below.",
    ],
    rows: [
      {
        priority: "Lower weekly spend",
        whatToLookFor: "Nearby discounter + staples list habit",
        tip: "Keep full-service for gaps only.",
      },
      {
        priority: "Organic / bio depth",
        whatToLookFor: "Full-service bio aisle or specialty organic shop",
        tip: "Verify shelf depth in your branch.",
      },
      {
        priority: "Home-country flavours",
        whatToLookFor: "World-foods aisle + specialty market on route",
        tip: "Do not expect one chain to cover everything.",
      },
      {
        priority: "One trolley, one trip",
        whatToLookFor: "Large full-service branch with household aisles",
        tip: "Skip express formats for the weekly shop.",
      },
      {
        priority: "Walkable top-ups",
        whatToLookFor: "Neighbourhood or cooperative shop near home",
        tip: "Save hours; keep a weekly anchor elsewhere if needed.",
      },
      {
        priority: "Busy weeks / no car",
        whatToLookFor: "Delivery coverage + in-store backup",
        tip: "Check postcode slots before redesigning the week.",
      },
    ] satisfies FitRow[],
    cards: [
      {
        title: "Priorities before brands",
        body: "Three priorities beat ten tabbed retailer sites. Decide what “best” means for your household this month.",
      },
      {
        title: "Branch over brand",
        body: "A small city express shop and a suburban hypermarket with the same logo are different tools.",
      },
      {
        title: "Two-format households",
        body: "Many expats settle on a weekly anchor plus a discounter or specialty stop — that is a feature, not failure.",
      },
      {
        title: "Test, then settle",
        body: "Two real baskets teach more than any comparison article — including this one.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Formats, hours, bags, self-scan and weekly rhythm.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand system and self-checkout how-to.",
      },
    ] satisfies GuideLink[],
  },
  budget: {
    heading: "Best fit when budget is the priority",
    intro:
      "If rent and insurance already bite, the “best” supermarket is usually the one that makes a staples list cheap and predictable — often a discounter plus selective full-service fills.",
    paragraphs: [
      "Lidl and Aldi are useful orientation examples for discounter formats in many neighbourhoods. They reward a written list more than browsing. They are not declared winners here.",
      "Full-service chains still matter for gaps, fresh variety and one-stop weeks. The budget win is the combination and the list habit — not forever avoiding Albert Heijn or Jumbo.",
    ],
    rows: [
      {
        situation: "Student / tight month",
        betterFit: "Discounter staples + small top-up shop",
        why: "Keeps protein, carbs and cleaning basics predictable.",
        watchOut: "Impulse specials aisles can erase the saving.",
      },
      {
        situation: "Family needing volume",
        betterFit: "Large discounter trip + one full-service gap run",
        why: "Splits volume staples from specialty or fresh gaps.",
        watchOut: "Tiny express shops will not replace the volume trip.",
      },
      {
        situation: "Want lower spend without two stores",
        betterFit: "Full-service store brands + weekly list",
        why: "One trip still works if you lean on private label.",
        watchOut: "Ignoring store brands and buying only premium lines.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "List before logos",
        body: "A staples list beats switching chains every week based on social-media price wars.",
      },
      {
        title: "Store brands as a lever",
        body: "Private-label ranges in full-service stores often matter as much as driving to a discounter.",
      },
      {
        title: "Receipt reality",
        body: "Compare two weeks of your actual cooking, not a viral basket that ignores your diet.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place grocery spend in the wider monthly picture.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Habit levers that often include food spend.",
      },
    ] satisfies GuideLink[],
  },
  organic: {
    heading: "Best fit when organic and quality depth matter",
    intro:
      "If bio produce, organic dairy and clearer labelling matter more than the lowest sticker, choose by aisle depth in your nearest full-service branch — then add a specialty organic shop only if gaps remain.",
    paragraphs: [
      "Many full-service chains carry store-brand organic lines that cover weekly basics. Depth still varies by branch size and city.",
      "Specialty organic or natural-food shops help when you need consistent bio breadth. They are a fit choice, not a moral ranking over discounters.",
    ],
    rows: [
      {
        priority: "Weekly bio basics",
        whatToLookFor: "Full-service bio aisle + store-brand organic",
        tip: "Walk the aisle once before changing your whole route.",
      },
      {
        priority: "Deep organic / specialty",
        whatToLookFor: "Dedicated organic or natural-food shop on route",
        tip: "Use it for gaps; keep a supermarket for staples if needed.",
      },
      {
        priority: "Quality fresh without full bio",
        whatToLookFor: "Strong fresh counters in a large full-service branch",
        tip: "Judge the branch, not the national ad campaign.",
      },
    ] satisfies FitRow[],
    cards: [
      {
        title: "Shelf over slogan",
        body: "“Organic-friendly” marketing means little until you see stock in your postcode.",
      },
      {
        title: "Mix is normal",
        body: "Many households buy organic for some categories and standard lines for others.",
      },
      {
        title: "Label calm",
        body: "Learn a few Dutch bio cues you care about — then stop second-guessing every pack.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Produce habits and chain-format context.",
      },
    ] satisfies GuideLink[],
  },
  international: {
    heading: "Best fit for international and home-country products",
    intro:
      "If your kitchen needs ingredients from home, the best setup is rarely one supermarket alone. Pair a reliable weekly chain with specialty Asian, Middle Eastern, Latin, African or British/US shops.",
    paragraphs: [
      "Full-service stores increasingly stock world-foods aisles, but coverage is uneven by cuisine and city. Treat them as a helpful start, not a complete replacement for specialty markets.",
      "Plan specialty stops monthly rather than hunting every nostalgia brand on every weekly shop — it keeps the trolley calm and the route intentional.",
    ],
    rows: [
      {
        situation: "Asian / South Asian kitchen",
        betterFit: "Weekly supermarket + Asian market",
        why: "Sauces, rice varieties and fresh herbs often sit deeper in specialty shops.",
        watchOut: "Expecting one AH or Jumbo aisle to cover everything.",
      },
      {
        situation: "Middle Eastern / Mediterranean",
        betterFit: "Full-service fresh + Turkse / Middle Eastern grocer",
        why: "Bread, herbs, spices and cuts are often stronger in specialty shops.",
        watchOut: "Ignoring a shop two streets away while commuting across town.",
      },
      {
        situation: "British / US nostalgia",
        betterFit: "World aisle + occasional specialty import shop",
        why: "Nostalgia brands are patchy; specialty shops fill spikes.",
        watchOut: "Paying express-shop premiums for weekly staples.",
      },
      {
        situation: "Latin / African pantry",
        betterFit: "Specialty market as monthly anchor + supermarket staples",
        why: "Core flavours often concentrate in dedicated grocers.",
        watchOut: "Forcing one national chain to be your only source.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "World aisle ≠ homeland",
        body: "A world-foods shelf is a bridge. Specialty markets finish the job for many cuisines.",
      },
      {
        title: "City clusters help",
        body: "Larger cities often cluster specialty shops — map one cluster near your commute.",
      },
      {
        title: "Monthly specialty run",
        body: "Stock dry goods monthly; use the supermarket for fresh and Dutch staples weekly.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Orientation map for world-food aisles, specialty and ethnic markets.",
      },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Asian toko depth — formats, categories, first-visit tips and city patterns.",
    },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Wider errand patterns around specialty stops.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "How grocery rhythms sit in the week.",
      },
    ] satisfies GuideLink[],
  },
  oneStop: {
    heading: "Best fit for a one-stop weekly shop",
    intro:
      "If you want one trolley and one trip, prioritise a large full-service branch with food, household and often pharmacy-style aisles — and confirm it is not an express format wearing the same logo.",
    paragraphs: [
      "Albert Heijn and Jumbo large branches are common one-stop orientation examples in many towns. Plus and other full-service banners can play the same role when the branch is big enough.",
      "One-stop fails when newcomers treat a tiny city AH To Go or station shop as a weekly supermarket. Check floor size, parking or bike loading, and non-food aisles.",
    ],
    rows: [
      {
        priority: "Food + household in one trip",
        whatToLookFor: "Large full-service branch with cleaning and paper aisles",
        tip: "Walk the store perimeter once before committing.",
      },
      {
        priority: "Family weekly volume",
        whatToLookFor: "Suburban or edge-of-centre large store with trolley access",
        tip: "Bike panniers may still need a midweek top-up.",
      },
      {
        priority: "Minimal weekend chaos",
        whatToLookFor: "Branch with calm off-peak hours you can actually use",
        tip: "Saturday late morning is often busiest — plan earlier or later.",
      },
    ] satisfies FitRow[],
    cards: [
      {
        title: "Size check first",
        body: "Logo recognition without branch size is how one-stop plans fail.",
      },
      {
        title: "Non-food aisles matter",
        body: "Cleaning, toilet paper and basic pharmacy items decide whether a second shop appears.",
      },
      {
        title: "Access is part of fit",
        body: "Parking, lift access or bike loading can outweigh a slightly cheaper rival across town.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Household non-food and errand system depth.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Format differences between express and full-size stores.",
      },
    ] satisfies GuideLink[],
  },
  neighbourhood: {
    heading: "Best fit for neighbourhood convenience",
    intro:
      "If walkability and evening top-ups matter more than the deepest assortment, the best supermarket may be the closest calm shop — even if your weekly anchor sits elsewhere.",
    paragraphs: [
      "Neighbourhood AH, Jumbo City-style formats, Plus, Dirk, cooperative shops and regional banners can all win on proximity. The fit is distance and hours, not prestige.",
      "Keep expectations honest: a corner shop may not replace a full weekly basket. Many households intentionally split weekly volume and daily convenience.",
    ],
    rows: [
      {
        situation: "No car, short evenings",
        betterFit: "Walkable neighbourhood shop for top-ups",
        why: "Protects weeknights from long detours.",
        watchOut: "Using it for a full weekly load it cannot hold.",
      },
      {
        situation: "Sunday milk-and-bread gaps",
        betterFit: "Closest shop with known Sunday hours",
        why: "Hours reliability beats assortment depth for emergencies.",
        watchOut: "Assuming every branch shares the same Sunday pattern.",
      },
      {
        situation: "Co-op or regional shop on the corner",
        betterFit: "Use it when quality and route already fit",
        why: "Local banners matter when they sit on your street.",
        watchOut: "Ignoring a great local shop because it is not a national brand.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Two-shop calm",
        body: "A neighbourhood top-up plus a Saturday weekly store is a stable pattern, not indecision.",
      },
      {
        title: "Hours in your phone",
        body: "Save the closest branch hours — convenience fails when the door is shut.",
      },
      {
        title: "Bike pannier reality",
        body: "If you bike, neighbourhood shops reduce heavy loads even when prices are not the lowest.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Opening-hours culture and neighbourhood formats.",
      },
      {
        label: "Getting around context",
        href: "/netherlands/living/getting-around/",
        status: "live",
        description: "Mobility context for errand distances.",
      },
    ] satisfies GuideLink[],
  },
  delivery: {
    heading: "Best fit when delivery or time-poor weeks matter",
    intro:
      "If evenings are packed or heavy bags are hard, test grocery delivery as a format fit — postcode coverage and slots first — then keep an in-store backup for gaps.",
    paragraphs: [
      "Picnic is a common app-based delivery orientation example where coverage exists. Full-service chains also offer home delivery in many areas. Neither is ranked as universally best here.",
      "Meal kits (for example HelloFresh) can stabilise dinner costs for some households. Treat them as a dinner-pattern tool, not a supermarket replacement or award winner.",
    ],
    rows: [
      {
        priority: "Heavy weekly load, no car",
        whatToLookFor: "Delivery coverage + reliable evening slots",
        tip: "Test one week before cancelling your in-store rhythm.",
      },
      {
        priority: "Predictable dinners",
        whatToLookFor: "Meal kit or delivery with clear per-serving maths",
        tip: "Compare against store-brand cooking you already do.",
      },
      {
        priority: "Hybrid household",
        whatToLookFor: "Delivery for staples + neighbourhood shop for gaps",
        tip: "Keep one walkable backup for forgotten items.",
      },
    ] satisfies FitRow[],
    cards: [
      {
        title: "Coverage is the gate",
        body: "Beautiful apps mean little if your postcode has no slots.",
      },
      {
        title: "Minimums and tips",
        body: "Factor minimum order size and delivery windows into the “is this better?” test.",
      },
      {
        title: "Soft tools, not winners",
        body: "Provider cards later are optional CTAs for modelling spend — not a ranking podium.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Delivery and parcel habits in the wider errand system.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Where grocery apps sit in a calm install order.",
      },
    ] satisfies GuideLink[],
  },
  comparison: {
    heading: "Situation comparison table",
    intro:
      "Use this table as a fit map. Rows are household situations; columns describe a better-fit pattern, why it helps, and what to watch. No scores, stars or #1 labels.",
    paragraphs: [
      "Your street may invert a row — that is expected. Update the map after two real shopping weeks.",
      "Combining rows is normal: budget staples plus international specialty plus neighbourhood top-ups can coexist.",
    ],
    rows: [
      {
        situation: "Cut grocery spend",
        betterFit: "Discounter staples + list habit",
        why: "Predictable basics without daily browsing.",
        watchOut: "Impulse middle aisles and tiny express premiums.",
      },
      {
        situation: "Want organic depth",
        betterFit: "Full-service bio aisle ± specialty organic",
        why: "Shelf depth decides more than branding.",
        watchOut: "Assuming every branch stocks the same bio range.",
      },
      {
        situation: "Cook home-country meals",
        betterFit: "Weekly chain + specialty market",
        why: "World aisles help; specialty finishes the pantry.",
        watchOut: "One-chain-only expectations.",
      },
      {
        situation: "One Saturday trolley",
        betterFit: "Large full-service one-stop branch",
        why: "Food and household in one route.",
        watchOut: "Express formats pretending to be weekly stores.",
      },
      {
        situation: "Walkable evenings",
        betterFit: "Neighbourhood shop for top-ups",
        why: "Protects weeknights and bike loads.",
        watchOut: "Forcing a full weekly shop into a tiny store.",
      },
      {
        situation: "Time-poor / heavy bags",
        betterFit: "Delivery where covered + in-store backup",
        why: "Slots save evenings when coverage exists.",
        watchOut: "Redesigning life around an uncovered postcode.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Read as patterns",
        body: "Each row is a starting hypothesis for your two-week test — not a verdict.",
      },
      {
        title: "Local overrides national",
        body: "A strong local Plus or cooperative can beat a famous logo across town.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "System primer for formats and chain landscape.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Budget context for food spend choices.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Grocery tools to explore",
    subtitle:
      "Soft CTAs for established supermarket, delivery and meal patterns when you are modelling everyday food spend. This block is not a ranking of chains or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for supermarket choice modelling — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-best-supermarkets-support-providers",
    analyticsPageContext: "best-supermarkets-netherlands-recommended-options",
    categoryLinks: [
      { href: DUTCH_SUPERMARKETS_PATH, label: "Dutch supermarkets" },
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
      { href: COST_OF_LIVING_PATH, label: "Cost of living" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common expat choice scenarios",
    intro: "Match your household story to a calm first experiment — then deepen in the fit sections above.",
    rows: [
      {
        situation: "First week, empty fridge",
        approach: "Closest large full-service store as temporary best fit.",
        firstStep: "Half-basket orientation; defer chain optimisation.",
      },
      {
        situation: "Student budget in a city",
        approach: "Discounter staples + neighbourhood top-ups.",
        firstStep: "One staples list at the nearest discounter this week.",
      },
      {
        situation: "Family wanting fewer shops",
        approach: "One large weekly branch; specialty monthly only.",
        firstStep: "Confirm branch size and bike/car access Saturday morning.",
      },
      {
        situation: "International kitchen",
        approach: "Weekly supermarket + mapped specialty market.",
        firstStep: "Add one specialty stop to this month’s calendar.",
      },
      {
        situation: "Both partners work late",
        approach: "Test delivery coverage; keep a walkable backup.",
        firstStep: "Check postcode slots before cancelling in-store habits.",
      },
      {
        situation: "Organic-focused household",
        approach: "Audit bio aisle depth nearby; specialty only for gaps.",
        firstStep: "Walk the bio aisle in your top full-service candidate.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Treating “best supermarket” as a national #1 award",
      body: "Rankings and star scores hide branch reality and household priorities.",
      advice: "Define fit criteria, then test two reachable stores.",
    },
    {
      title: "Choosing by logo without checking branch size",
      body: "An express shop cannot deliver a one-stop weekly basket.",
      advice: "Walk the floor once; confirm household aisles exist.",
    },
    {
      title: "Expecting one chain to cover budget and every home flavour",
      body: "Those are different jobs — forcing one store creates frustration.",
      advice: "Allow a second format for staples or specialty products.",
    },
    {
      title: "Redesigning the week around uncovered delivery",
      body: "Apps look perfect until your postcode has no slots.",
      advice: "Verify coverage first; keep an in-store backup.",
    },
    {
      title: "Skipping a real basket test",
      body: "Articles (including this one) cannot taste your weekly cooking.",
      advice: "Two receipts beat ten open browser tabs.",
    },
    {
      title: "Ignoring Dutch system habits while chasing brands",
      body: "Hours, bags and self-scan still shape whether a “best” store feels calm.",
      advice: "Read Dutch supermarkets alongside this decision guide.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Supermarket choice checklist",
    intro: "Use this before locking a long-term grocery routine so “best” means best fit.",
    items: [
      "Top three grocery priorities written down",
      "Reachable full-size store identified",
      "Reachable discounter or budget option noted (if relevant)",
      "Specialty / international shop mapped (if relevant)",
      "Neighbourhood top-up shop hours saved",
      "Delivery postcode coverage checked (if time-poor)",
      "Branch size confirmed for one-stop ambitions",
      "One test basket completed at option A",
      "One test basket completed at option B",
      "Budget gaps and product gaps noted honestly",
      "Dutch supermarkets bookmarked for system habits",
      "Shopping & groceries bookmarked for self-checkout how-to",
    ],
  },
  howTo: {
    heading: "How to pick a supermarket fit in two weeks",
    steps: [
      {
        name: "Write your priorities",
        text: "List up to three month-one goals: lower spend, organic depth, international products, one-stop convenience, walkability or delivery.",
      },
      {
        name: "Map reachable formats",
        text: "Note full-service, discounter, neighbourhood and delivery options you can reach without stress — ignore distant “famous” stores for now.",
      },
      {
        name: "Run two real basket tests",
        text: "Shop a normal list at your top two options and keep the receipts and frustration notes.",
      },
      {
        name: "Add a gap filler if needed",
        text: "If international or organic gaps remain, schedule one specialty stop; if time is the gap, test delivery coverage.",
      },
      {
        name: "Settle a primary + backup",
        text: "Lock a weekly anchor and one backup format, then open Dutch supermarkets for hours, bags and self-scan habits.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to choose a supermarket fit in the Netherlands as an expat",
    description:
      "Decision steps for expats matching Dutch supermarket formats to household priorities — budget, organic, international products, one-stop, neighbourhood and delivery — without relying on fake rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best supermarket in the Netherlands?",
      a: "There is no universal best. The best supermarket is the one that fits your priorities and nearby branches — budget staples, organic depth, international products, one-stop weekly shops, neighbourhood top-ups or delivery. Test two reachable options instead of trusting award-style lists.",
    },
    {
      q: "Is Albert Heijn or Lidl better for expats?",
      a: "They solve different jobs. Lidl-style discounters often fit staples budgets; large Albert Heijn (or Jumbo) branches often fit one-stop weekly shops and broader assortments. Many households use both. This page does not crown a winner.",
    },
    {
      q: "Which supermarket is cheapest in the Netherlands?",
      a: "Discounters often win on a short staples list, but your receipt depends on what you cook and which branch you use. Compare two weeks of your real basket rather than viral price screenshots.",
    },
    {
      q: "Where should I buy international or home-country food?",
      a: "Start with a full-service world-foods aisle, then add specialty Asian, Middle Eastern, Latin, African or British/US shops for depth. One supermarket rarely replaces a homeland pantry alone.",
    },
    {
      q: "Is Picnic better than shopping in-store?",
      a: "Only when your postcode has useful slots and delivery fits your week. Treat Picnic and retailer delivery as format options to test — keep an in-store backup for gaps.",
    },
    {
      q: "How is this different from Dutch supermarkets?",
      a: "Dutch supermarkets explains the system: formats, hours, bags, self-scan orientation, loyalty and weekly rhythm. This page helps you choose among fits for your situation.",
    },
    {
      q: "How is this different from Shopping & groceries?",
      a: "Shopping & groceries covers the wider errand system, self-checkout how-to, household non-food and deliveries. This page stays on supermarket choice and comparison scenarios.",
    },
    {
      q: "Do you rank or rate supermarket chains?",
      a: "No. We avoid fake awards, star ratings and #1 claims. Soft provider links are optional tools for modelling spend, not a podium.",
    },
  ],
  relatedGuides: [
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "How the supermarket system works day to day.",
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
      description: "Sourcing map for world-food aisles, specialty and ethnic markets.",
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
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Sit-down dining culture — reservations, terraces, bills and dietary norms.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch tipping norms for dining, delivery and everyday service.",
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
    intro: "Keep supermarket choice connected to the system primer, errand guide and wider Living cluster.",
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
        description: "Chain system and day-to-day supermarket habits.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — choosing among fits for your situation.",
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
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "Sit-down dining culture for expats.",
      },
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "Tip norms for restaurants, cafés and delivery.",
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
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Compare dining-out nights with supermarket cooking spend.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Understand tip norms so restaurant totals stay predictable.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "Learn formats, hours, bags and self-scan orientation.",
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
      description: "Deepen non-Dutch product sourcing after choosing an international fit.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Asian toko depth — formats, categories, first-visit tips and city patterns.",
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
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Dutch supermarkets owns the system primer — formats, hours, bags, self-scan.",
    "Shopping & groceries owns errands, self-checkout how-to and household non-food.",
    "Essential apps and Payments basics support the till and phone tools.",
    "Cost of living and Saving money place food spend in the monthly picture.",
  ],
  foodHubTips: [
    "Use this page for choice; Dutch for system; Shopping for errands.",
    "All three food-cluster siblings are live and should cross-link.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Soft provider CTAs are tools — never award podiums.",
  ],
  exploreNextTips: [
    "Open Dutch supermarkets next if formats and hours still feel new.",
    "Open Shopping & groceries if self-checkout or deliveries need depth.",
    "Use Cost of living / Saving money when budgeting food spend.",
    "Add Essential apps only after your primary store fit is clear.",
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
      description: "Independent Dutch consumer association — useful for retail context.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Example full-service retailer — verify branch hours and services.",
    },
    {
      label: "Jumbo",
      href: "https://www.jumbo.com/",
      description: "Example full-service retailer — verify your local branch details.",
    },
    {
      label: "Lidl Netherlands",
      href: "https://www.lidl.nl/",
      description: "Example discounter — verify assortment and branch information.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "Example delivery-only supermarket — check postcode coverage.",
    },
  ],
  disclosure:
    "General information only. Not financial, consumer-rights or shopping advice and not a ranking, award list or star-rating of supermarket chains. Assortments, prices, hours and delivery coverage change. Verify current details with retailers and official consumer sources. Some outbound links may be affiliate or referral links.",
} as const;
