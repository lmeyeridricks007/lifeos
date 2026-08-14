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
export type TacticRow = { lever: string; whatItMeans: string; tip: string };
export type ComparisonRow = { situation: string; cheaperMove: string; why: string; watchOut: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "cheap-groceries-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const cheapGroceriesNetherlandsPage = {
  slug: "cheap-groceries-netherlands",
  path: CHEAP_GROCERIES_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CHEAP_GROCERIES_NETHERLANDS_PATH) ?? "2026-09-21",
  seo: {
    title: "Cheap Groceries Netherlands | Budget Food Guide for Expats",
    description:
      "Spend less on groceries in the Netherlands with discounters, Bonus and weekly offers, private-label brands, smart timing, waste reduction and student-friendly budget tactics — without fake supermarket rankings.",
    keywords: [
      "cheap groceries Netherlands",
      "cheap supermarket Netherlands",
      "budget groceries Netherlands",
      "save money groceries Netherlands",
      "Lidl Aldi Netherlands",
      "Bonus offers Netherlands",
      "private label supermarket Netherlands",
      "student groceries Netherlands",
      "food waste Netherlands",
      "cheap food Netherlands expats",
      "weekly supermarket offers Netherlands",
      "budget shopping Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Cheap groceries Netherlands",
    subtitle:
      "Practical ways to spend less on food after arrival — discounters, weekly offers, private-label brands, timing, waste reduction and student-friendly budget tactics — not a ranked “cheapest supermarket” awards list.",
    primaryCta: { label: "Start saving tactics", href: "#system" },
    secondaryCta: { label: "Open Best supermarket fit", href: BEST_SUPERMARKETS_NETHERLANDS_PATH },
    chips: ["Discounters", "Private label", "Weekly offers", "Timing", "Less waste", "Student tactics"],
    disclaimer:
      "General orientation only — not financial or shopping advice and not a ranking of chains or apps. Prices, Bonus folders, private-label ranges and branch coverage change. Verify current offers on each retailer’s site. Soft provider links below are optional tools, not “cheapest store” winners.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table: multicultural newcomers comparing a grocery receipt and store-brand staples beside a reusable bag and fresh produce, canal light through a window, welcoming budget-shopping mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#system", label: "Savings system" },
    { href: "#discounters", label: "Discounters" },
    { href: "#private-label", label: "Private label" },
    { href: "#offers", label: "Weekly offers" },
    { href: "#timing", label: "Timing" },
    { href: "#waste", label: "Less waste" },
    { href: "#student", label: "Student & budget" },
    { href: "#habit-stack", label: "Habit stack" },
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
      "Premium orientation board titled Spend Less Not Chase Rankings — four levers: discounters, private label, weekly offers, less waste — Checklist rail, Dutch canal kitchen skyline and ExpatLife brand footer.",
      "Cheap groceries is a habit stack — not a national #1 cheapest-store award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of budget grocery levers — discounters, private label, Bonus offers, timing, waste reduction, student tactics — Dutch grocery band and ExpatLife brand footer.",
      "Six levers explain almost every “cheap groceries Netherlands” search for newcomers."
    ),
    system: visual(
      "system",
      "Premium ecosystem diagram — staples list, discounter stop, offer folder, private-label swap and waste jar linked to one weekly receipt — Dutch kitchen desk, General information only rail.",
      "Lower spend comes from stacking a few calm habits — not from hunting every viral deal."
    ),
    discounters: visual(
      "discounters",
      "Premium discounter aisle desk scene — short staples list, trolley with store-brand dairy and pasta, gap list for full-service top-ups — Verify prices at your branch rail, Dutch storefront light.",
      "Discounters shine on a deliberate staples list; full-service covers the gaps."
    ),
    privateLabel: visual(
      "private-label",
      "Premium shelf-comparison board — branded pack vs store-brand twin with same-use notes — Checklist rail for one swap per category, calm Dutch aisle light and ExpatLife brand footer.",
      "Private label is often the quietest weekly saving for everyday staples."
    ),
    offers: visual(
      "offers",
      "Premium phone-and-folder scene — Bonus-style weekly offers, digital stamps, planned meal swaps — Verify offers rail, Dutch kitchen table with list and ExpatLife brand footer.",
      "Use offers to reshape meals you already cook — not to fill the trolley with surprises."
    ),
    timing: visual(
      "timing",
      "Premium calendar-flow board — weekday quieter shop, Saturday peak, evening reduced stickers, Sunday shorter hours — Dutch market clock skyline, Checklist rail for branch hours.",
      "Timing saves money when it matches your real week — not every yellow sticker is a win."
    ),
    waste: visual(
      "waste",
      "Premium fridge-and-plan board — meal plan sticky notes, leftovers container, freezer bags, shopping list — Dutch apartment kitchen, General information only rail.",
      "Uneaten food is the invisible grocery bill — plan, freeze and reuse before buying more."
    ),
    student: visual(
      "student",
      "Premium student-budget consultation scene — shared fridge notes, staples list, discounter route map — Dutch student kitchen with bikes outside, ExpatLife brand footer.",
      "Student and shared-house budgets win with short lists, shared staples and one weekly discounter run."
    ),
    habitStack: visual(
      "habit-stack",
      "Premium habit-stack comparison board — six household situations with cheaper moves and watch-outs — no star ratings, Dutch canal skyline band and ExpatLife brand footer.",
      "Match your situation to a cheaper move — never to a fabricated “cheapest chain” score."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — first week empty fridge, student city budget, family weekly shop, time-poor couple — Dutch canal window light and ExpatLife brand footer.",
      "Start from your household story, then pick one saving experiment this week."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — chasing every deal, ignoring private label, buying waste, skipping a staples list — Fix notes and Dutch grocery skyline.",
      "Most budget friction comes from impulse and waste — not from missing a secret store."
    ),
    checklist: visual(
      "checklist",
      "Premium cheap-groceries checklist clipboard — staples list written, discounter tested, private-label swaps noted, offers checked, waste plan set — Dutch kitchen table scene.",
      "Use this checklist so “cheap groceries” becomes a calm two-week experiment."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Write a short staples list before comparing every chain online.",
        "Stack discounters, private label and offers — do not chase every sticker.",
        "Cut waste before cutting nutrition or cooking joy.",
        "Open Best supermarkets for fit choice; Dutch for system habits; Shopping for errand how-to.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Discounters and private label are different levers — use both calmly.",
        "Weekly offers help when they match meals you already cook.",
        "Timing and waste reduce spend without requiring a new favourite store.",
        "No section here is a star rating or “cheapest supermarket” claim.",
      ],
    },
    system: {
      title: "System cues",
      items: [
        "One staples list beats three impulse apps.",
        "One discounter run plus one gap fill is a common calm pattern.",
        "Track two weeks of receipts, not viral screenshots.",
        "Link Cost of living when food spend needs the monthly picture.",
      ],
    },
    discounters: {
      title: "Discounter cues",
      items: [
        "Bring a list — discounters reward deliberate baskets.",
        "Expect narrower assortments; plan a full-service gap list.",
        "Branch parking, bike access and hours still matter.",
        "Open Dutch supermarkets for format orientation — not rankings.",
      ],
    },
    privateLabel: {
      title: "Private-label cues",
      items: [
        "Swap one category at a time so taste tests stay fair.",
        "Store brands often sit beside the branded twin on the shelf.",
        "Keep branded favourites only where they truly matter to you.",
        "Verify current pack sizes and unit prices at your branch.",
      ],
    },
    offers: {
      title: "Offers cues",
      items: [
        "Scan the folder after writing your meal plan — not before.",
        "Loyalty apps help when you will actually use them.",
        "Bulk deals only win if you will finish the product.",
        "Open Essential apps for install-order context around grocery apps.",
      ],
    },
    timing: {
      title: "Timing cues",
      items: [
        "Quieter weekday shops often mean fewer impulse buys.",
        "Evening reduced stickers help only for food you will eat soon.",
        "Save branch hours — Sunday and holiday patterns vary.",
        "Open Shopping & groceries for errand and delivery timing depth.",
      ],
    },
    waste: {
      title: "Waste cues",
      items: [
        "Check the fridge before the trolley.",
        "Freeze bread, herbs and leftovers when it fits your cooking.",
        "Buy less fresh produce if your week is travel-heavy.",
        "Waste reduction is a budget lever — not a perfection contest.",
      ],
    },
    student: {
      title: "Student & budget cues",
      items: [
        "Share oil, rice, cleaning and fridge staples when housemates agree.",
        "One weekly discounter run beats daily convenience shops.",
        "Keep a tiny emergency top-up list for the nearest walkable store.",
        "Link Saving money for wider habit levers beyond groceries.",
      ],
    },
    habitStack: {
      title: "Habit-stack cues",
      items: [
        "Pick two levers for month one — not all six at once.",
        "Revisit after two receipt weeks with honest notes.",
        "Cheaper moves still need branch reality near home.",
        "Best supermarkets helps if format fit is still unclear.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your household story, not a viral deal thread.",
        "First week: feed yourself calmly before optimising every euro.",
        "Students: list + discounter + shared staples.",
        "Families: private label + offers + less waste often beat store-hopping.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Deal-chasing without a list often raises the bill.",
        "Skipping private label leaves easy savings unused.",
        "Wasted food cancels clever offers.",
        "Fake “cheapest supermarket” lists ignore your basket and branch.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Staples list written before you leave home.",
        "One discounter and one private-label experiment booked.",
        "Offers checked against meals you already cook.",
        "Waste plan set for fridge and leftovers.",
      ],
    },
  },
  quickAnswer: {
    heading: "Cheap groceries is a habit stack — not a secret cheapest store",
    summary:
      "In the Netherlands, spending less on food usually comes from stacking a few calm habits: a short staples list, discounter or budget formats where they fit, private-label swaps, weekly offers that match meals you already cook, smarter timing, and less waste — not from crowning a national “cheapest supermarket”.",
    bullets: [
      "Start with a staples list and two receipt weeks — not with award-style rankings.",
      "Discounters and private label often move the needle more than hopping every brand.",
      "Bonus-style weekly offers help when they reshape planned meals, not impulse trolleys.",
      "This page owns saving tactics; Best supermarkets owns fit choice; Dutch owns the system; Shopping owns errand how-to.",
    ],
    note: "If you only do one thing: write a one-page staples list, shop it once at a nearby discounter or budget-friendly branch, and swap two branded items for store brands this week.",
  },
  introParagraphs: [
    "Expats search “cheap groceries Netherlands” hoping for one cheapest chain. Dutch grocery life rarely works that way: Lidl, Aldi, Dirk, Albert Heijn, Jumbo, Plus and delivery apps solve different jobs, and your receipt depends on what you cook, which branch you use, and how much food you throw away.",
    "This guide is a money-saving toolkit. It covers discounters, private-label brands, Bonus and weekly offers, timing, waste reduction and student-friendly tactics — without fake star ratings or “#1 cheapest supermarket” claims.",
    "Use Best supermarkets when the question is which fit to choose. Use Dutch supermarkets for formats, hours, bags, self-scan orientation and weekly rhythm. Use Shopping & groceries for self-checkout how-to, household non-food and deliveries. Stay here when the question is how to spend less.",
  ],
  introHighlights: [
    "Savings toolkit — habits across formats, not awards",
    "Discounters, private label, weekly offers, timing and waste",
    "Student and shared-house budget scenarios",
    "Soft grocery-provider CTAs only as optional tools — never as rankings",
  ],
  starterChecklist: [
    "Write a one-page staples list for week one",
    "Note the nearest discounter and nearest full-service gap store",
    "Pick two private-label swaps to taste-test",
    "Open one loyalty or offers app you will actually use",
    "Check fridge and freezer before the next shop",
    "Bookmark Best supermarkets if format fit is still unclear",
    "Bookmark Dutch supermarkets for hours, bags and self-scan habits",
    "Keep Cost of living handy for the monthly food picture",
  ],
  orientationFlowSteps: [
    "Write a short staples list",
    "Test one discounter or budget run",
    "Swap private label + check offers",
    "Cut waste, then review receipts",
  ],
  snapshotTips: [
    "Snapshot cards are saving levers — not scores.",
    "Combine two or three levers in month one.",
    "Re-check after you know your real commute and kitchen.",
  ],
  snapshotSignals: [
    {
      label: "Staples first",
      value: "Short list",
      note: "A deliberate staples list beats browsing every aisle for deals.",
    },
    {
      label: "Format lever",
      value: "Discounter + gap",
      note: "Budget formats often win on staples; full-service covers gaps.",
    },
    {
      label: "Offer lever",
      value: "Planned meals",
      note: "Weekly offers help when they match food you will actually cook.",
    },
    {
      label: "Hidden bill",
      value: "Waste",
      note: "Uneaten food cancels clever yellow stickers — plan leftovers.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Discounters & budget formats",
      body: "Best when staples dominate and you can stick to a list — Lidl and Aldi are common orientation examples, not ranked winners.",
    },
    {
      title: "Private-label brands",
      body: "Best for everyday dairy, pasta, rice, cleaning and basics — swap one category at a time and keep branded favourites only where they matter.",
    },
    {
      title: "Bonus & weekly offers",
      body: "Best when the folder or app reshapes meals you already cook — ignore deals that create unused bulk.",
    },
    {
      title: "Timing & reduced stickers",
      body: "Best for quieter shops and evening reductions you will eat soon — not for filling the freezer with forgotten experiments.",
    },
    {
      title: "Waste reduction",
      body: "Best when fridge checks, meal plans and leftovers become routine — often the largest silent saving.",
    },
    {
      title: "Student & shared-house tactics",
      body: "Best with shared staples, one weekly budget run and a tiny walkable top-up list — daily convenience shops drain student budgets fast.",
    },
  ] satisfies TipCard[],
  system: {
    heading: "How cheaper grocery weeks usually work",
    intro:
      "Lower food spend in the Netherlands is usually a small system: list → format → swaps → offers → waste control. Treat each piece as a lever you can test for two weeks.",
    paragraphs: [
      "Start with what you actually cook. A staples list for pasta, rice, oats, dairy, eggs, bread, fruit, vegetables, coffee/tea and cleaning basics beats a vague goal of “shop cheaper”.",
      "Then choose formats: many households use a discounter or budget-friendly branch for staples and a fuller supermarket for gaps. That pattern is orientation — not a ranking of chains.",
      "Finally protect the receipt from the invisible bill: impulse offers and uneaten food. Two calm receipt weeks teach more than any viral price comparison screenshot.",
    ],
    rows: [
      {
        lever: "Staples list",
        whatItMeans: "A short recurring basket you can compare across shops.",
        tip: "Write it once; reuse it for two weeks.",
      },
      {
        lever: "Format mix",
        whatItMeans: "Budget/discounter for staples; full-service for gaps.",
        tip: "Keep both within a calm bike or walk if possible.",
      },
      {
        lever: "Private label",
        whatItMeans: "Store-brand twins for everyday categories.",
        tip: "Swap two items per week until the list settles.",
      },
      {
        lever: "Weekly offers",
        whatItMeans: "Bonus-style folders and app deals tied to planned meals.",
        tip: "Plan meals first, then scan offers.",
      },
      {
        lever: "Timing",
        whatItMeans: "Quieter shops and sensible reduced-price stickers.",
        tip: "Only buy reductions you will eat soon.",
      },
      {
        lever: "Waste control",
        whatItMeans: "Fridge checks, leftovers and freezer habits.",
        tip: "Cut waste before cutting nutrition.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Receipt reality beats screenshots",
        body: "Your cooking, branch and waste pattern decide the bill — not a national “cheapest supermarket” graphic.",
      },
      {
        title: "Two levers in month one",
        body: "Most newcomers succeed with staples + private label, or discounter + waste control — then add offers.",
      },
      {
        title: "Link the sibling guides",
        body: "Best chooses fit; Dutch explains the system; Shopping covers errands — this page stays on saving tactics.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "If format fit is still unclear, choose among budget, one-stop and delivery patterns first.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Formats, hours, bags, self-scan orientation and weekly rhythm.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place grocery spend in the wider monthly picture.",
      },
    ] satisfies GuideLink[],
  },
  discounters: {
    heading: "Discounters and budget formats",
    intro:
      "Discounters and budget-oriented branches often help when your list is short and deliberate. They are tools for staples — not automatically the right store for every international product or one-stop weekly shop.",
    paragraphs: [
      "Orientation examples newcomers often meet include Lidl and Aldi, plus other budget-friendly banners depending on city. Branch reality near home matters more than brand fame.",
      "Expect narrower assortments. Bring a staples list, leave with what matches it, and keep a short gap list for a fuller supermarket or specialty stop later in the week.",
      "If you still need to decide whether a discounter is your primary fit versus a large one-stop branch, open Best supermarkets — that page owns the choice framework.",
    ],
    rows: [
      {
        lever: "Staples run",
        whatItMeans: "Dairy, pasta, rice, oats, eggs, cleaning basics on a short list.",
        tip: "Shop the list top-to-bottom; skip the novelty aisle first month.",
      },
      {
        lever: "Gap list",
        whatItMeans: "Items the discounter does not carry well for your kitchen.",
        tip: "Batch gaps into one full-service stop — avoid daily top-ups.",
      },
      {
        lever: "Access",
        whatItMeans: "Bike panniers, bags, trolley coin and branch hours.",
        tip: "A “cheap” store that is hard to reach often costs more in time.",
      },
      {
        lever: "Taste tests",
        whatItMeans: "Store-brand staples may differ from home-country brands.",
        tip: "Try one new staple per shop so leftovers stay manageable.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "List-first discounter habit",
        body: "Discounters reward preparation. An empty list plus hunger often erases the savings.",
      },
      {
        title: "Not a full homeland pantry",
        body: "International depth is often limited — pair with specialty shops when needed instead of forcing one store to do everything.",
      },
      {
        title: "Orientation, not a podium",
        body: "Naming Lidl or Aldi here is orientation for newcomers — not a claim they always win every basket.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets — budget fit",
        href: `${BEST_SUPERMARKETS_NETHERLANDS_PATH}#budget`,
        status: "live",
        description: "Decision cues when budget is your primary supermarket-fit priority.",
      },
      {
        label: "Dutch supermarkets — formats",
        href: `${DUTCH_SUPERMARKETS_PATH}#formats`,
        status: "live",
        description: "How discounter vs full-service formats fit different trip types.",
      },
    ] satisfies GuideLink[],
  },
  privateLabel: {
    heading: "Private-label and store brands",
    intro:
      "Private-label (eigen merk) products are often the quietest weekly saving. Most Dutch chains place store brands beside branded twins for dairy, staples, cleaning and basics.",
    paragraphs: [
      "You do not need to switch everything overnight. Swap one or two categories per week, keep branded favourites where taste or diet really matters, and compare unit prices when pack sizes differ.",
      "Private label works across formats — including full-service chains — so saving money does not always mean abandoning a convenient weekly store.",
      "Treat this as a habit, not a purity test. A mixed basket of store brand staples plus a few branded comfort items is a normal expat pattern.",
    ],
    rows: [
      {
        lever: "Dairy & eggs",
        whatItMeans: "Milk, yoghurt, cheese blocks and eggs are common first swaps.",
        tip: "Compare fat percentage and pack size, not only shelf price.",
      },
      {
        lever: "Dry staples",
        whatItMeans: "Pasta, rice, oats, flour, sugar, tinned tomatoes.",
        tip: "Buy sizes you will finish before quality drops.",
      },
      {
        lever: "Cleaning & paper",
        whatItMeans: "Detergent, dishwashing, toilet paper, bin bags.",
        tip: "Household non-food savings stack quickly with groceries.",
      },
      {
        lever: "Keep branded when needed",
        whatItMeans: "Specific diets, allergies or comfort foods.",
        tip: "Protect joy and safety — cheap is not the only goal.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "One swap per category",
        body: "Fair taste tests need a calm pace — wholesale brand abandonment creates waste.",
      },
      {
        title: "Unit price literacy",
        body: "Larger packs only win if you will use them. Check per-kilo or per-litre cues on the shelf edge.",
      },
      {
        title: "Works in full-service too",
        body: "You can save with private label without making a discounter your only shop.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand system and household non-food habits around the weekly shop.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Wider habit levers that often include groceries.",
      },
    ] satisfies GuideLink[],
  },
  offers: {
    heading: "Bonus, weekly offers and loyalty apps",
    intro:
      "Dutch chains lean heavily on weekly folders and loyalty apps — often branded “Bonus” or similar. Used well, they reshape planned meals. Used poorly, they fill cupboards with unused bulk.",
    paragraphs: [
      "Write your meal ideas first, then scan the folder or app. If chicken is on offer and you already cook chicken twice a week, that is a useful swap. If a multi-buy creates waste, skip it.",
      "One loyalty app you open every week beats three ignored downloads. Essential apps can help you place grocery tools in a newcomer install order without app sprawl.",
      "Offers change constantly. Treat screenshots and influencer baskets as inspiration only — verify the current folder for your chain and postcode.",
    ],
    rows: [
      {
        lever: "Meal-matched offers",
        whatItMeans: "Deals that replace an item already on your plan.",
        tip: "Rewrite the meal plan around 1–2 strong offers max.",
      },
      {
        lever: "Loyalty app",
        whatItMeans: "Digital stamps, personalised offers, digital receipts.",
        tip: "Install only the app for your primary weekly store.",
      },
      {
        lever: "Multi-buys",
        whatItMeans: "2-for deals or bulk packs.",
        tip: "Only when freezer/pantry space and appetite are real.",
      },
      {
        lever: "Personal care & household",
        whatItMeans: "Non-food offers inside the same folder.",
        tip: "Stock up only on products you already use monthly.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Plan first, folder second",
        body: "Scanning deals before planning meals is how impulse baskets grow.",
      },
      {
        title: "App discipline",
        body: "If you will not open the app before shopping, the “saving” is theatre.",
      },
      {
        title: "Not a ranking of apps",
        body: "Soft provider links later are optional tools — not a podium for the “best” grocery app.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Where grocery and delivery apps fit in a newcomer install order.",
      },
      {
        label: "Dutch supermarkets — loyalty",
        href: `${DUTCH_SUPERMARKETS_PATH}#loyalty`,
        status: "live",
        description: "Orientation on loyalty apps as everyday supermarket tools.",
      },
    ] satisfies GuideLink[],
  },
  timing: {
    heading: "Timing: quieter shops and reduced stickers",
    intro:
      "When you shop can change both the bill and the impulse risk. Quieter weekday runs, evening reduced-price stickers and Sunday hour patterns are useful levers — when they match food you will actually eat.",
    paragraphs: [
      "Many newcomers overspend on busy Saturday peak shops: crowded aisles, hunger and “while I’m here” extras. A weekday staples run with a list often feels calmer and cheaper.",
      "Evening yellow stickers can help for yoghurt, bread or prepared items you will finish soon. They are a poor strategy for filling a freezer with forgotten experiments.",
      "Branch hours still matter — especially Sundays and holidays. Save your exact branch hours; Dutch supermarkets covers opening-hours culture in more depth.",
    ],
    rows: [
      {
        lever: "Weekday staples run",
        whatItMeans: "Quieter aisles and fewer impulse triggers.",
        tip: "Pair with a short list and a post-work or lunch slot that fits you.",
      },
      {
        lever: "Evening reductions",
        whatItMeans: "Marked-down fresh items near closing.",
        tip: "Only buy what fits tonight or tomorrow’s meals.",
      },
      {
        lever: "Sunday pattern",
        whatItMeans: "Shorter hours and busier windows in many branches.",
        tip: "Do not rely on a late Sunday shop for the full week.",
      },
      {
        lever: "Delivery slots",
        whatItMeans: "Time-poor weeks may trade aisle impulse for slot fees.",
        tip: "Compare total cost including fees against a calm in-store list.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Calm beats clever",
        body: "A quiet list-led shop often saves more than hunting every sticker across town.",
      },
      {
        title: "Reduced ≠ free permission",
        body: "A discounted item you will not eat is still a loss.",
      },
      {
        title: "Hours are branch-specific",
        body: "Verify the store you use — city express shops and suburban branches differ.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets — hours",
        href: `${DUTCH_SUPERMARKETS_PATH}#hours`,
        status: "live",
        description: "Opening-hours culture, Sundays and holiday surprises.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand timing, deliveries and household rhythms.",
      },
    ] satisfies GuideLink[],
  },
  waste: {
    heading: "Waste reduction: the invisible grocery bill",
    intro:
      "Food you buy and do not eat is often the largest silent cost. Waste reduction is a budget tactic — not a perfection contest or a lecture.",
    paragraphs: [
      "Check the fridge and freezer before you leave. Build meals from what is already open. Freeze bread, herbs, leftover portions and batch-cooked staples when it fits your cooking style.",
      "Buy less fresh produce in travel-heavy weeks. Prefer flexible ingredients you can remix. Keep a small “use first” zone in the fridge so open packs get finished.",
      "Waste habits connect to Cost of living and Saving money when you want the wider monthly picture — but you can start with one fridge check this week.",
    ],
    rows: [
      {
        lever: "Fridge-first check",
        whatItMeans: "Scan open packs before writing the shop list.",
        tip: "Take a 60-second phone photo of the fridge if that helps.",
      },
      {
        lever: "Leftover remix",
        whatItMeans: "One planned leftover night per week.",
        tip: "Label containers with the day you cooked them.",
      },
      {
        lever: "Freezer buffer",
        whatItMeans: "Bread, portioned meals, berries, herbs.",
        tip: "Freeze in meal sizes you will actually reheat.",
      },
      {
        lever: "Flexible produce",
        whatItMeans: "Ingredients that work across multiple dinners.",
        tip: "Skip fragile specialty produce until your week is stable.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Uneaten food cancels deals",
        body: "A clever Bonus buy that spoils is more expensive than the branded item you would have finished.",
      },
      {
        title: "Small systems win",
        body: "One leftover night and one freezer habit beat elaborate meal-prep aesthetics.",
      },
      {
        title: "Travel weeks need smaller shops",
        body: "If you are away midweek, shrink the fresh basket instead of hoping the fridge waits.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Habit levers beyond the grocery aisle.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Food spend inside the wider Dutch budget picture.",
      },
    ] satisfies GuideLink[],
  },
  student: {
    heading: "Student and tight-budget household tactics",
    intro:
      "Students, shared houses and first-job households often need a simpler stack: shared staples, one weekly budget run, private-label basics and a tiny walkable top-up list.",
    paragraphs: [
      "Daily convenience shops and delivery fees can erase discounter savings. Agree shared oil, rice, cleaning and fridge rules with housemates when possible — conflict costs more than branded ketchup.",
      "Keep joy food in the plan. A budget that forbids every comfort item often fails. Protect a small “nice” line and cut waste and impulse instead.",
      "If you are choosing which nearby store should be your primary fit, Best supermarkets’ budget scenarios help; this section stays on spending tactics once a store is reachable.",
    ],
    rows: [
      {
        lever: "Shared staples",
        whatItMeans: "Oil, rice, pasta, cleaning, toilet paper bought together.",
        tip: "Use a shared note with prices and restock dates.",
      },
      {
        lever: "One weekly budget run",
        whatItMeans: "Discounter or budget branch with a fixed list.",
        tip: "Schedule it like a class — same day each week.",
      },
      {
        lever: "Tiny top-up list",
        whatItMeans: "Milk, bread, fruit at the nearest walkable shop.",
        tip: "Cap top-ups to three items unless truly empty.",
      },
      {
        lever: "Batch basics",
        whatItMeans: "Cook once, eat twice for lunch or dinner.",
        tip: "Oats, eggs, pasta sauces and soups stretch well.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Convenience is the quiet budget killer",
        body: "Many student overspends come from daily mini-shops, not from “wrong” supermarket brands.",
      },
      {
        title: "Shared houses need rules",
        body: "Unclear fridge ownership creates waste and double-buying — write a simple agreement.",
      },
      {
        title: "Keep a joy line",
        body: "A tiny comfort budget makes the staples plan sustainable.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets — scenarios",
        href: `${BEST_SUPERMARKETS_NETHERLANDS_PATH}#scenarios`,
        status: "live",
        description: "Student budget and household choice scenarios.",
      },
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms at Dutch tills.",
      },
    ] satisfies GuideLink[],
  },
  habitStack: {
    heading: "Match situations to cheaper moves",
    intro:
      "Use this comparison board to pick a cheaper move for your situation — without crowning a cheapest chain or inventing scores.",
    paragraphs: [
      "Most households only need two levers in the first month. Add more after you have two receipt weeks of honest notes.",
      "If your problem is really “which store fits me?”, switch to Best supermarkets. If your problem is “I already have a store and still overspend”, stay on this page.",
    ],
    rows: [
      {
        situation: "Staples bill feels high",
        cheaperMove: "Discounter staples run + private-label swaps",
        why: "Moves the largest recurring lines first.",
        watchOut: "Leave a gap list so you do not force every item into one store.",
      },
      {
        situation: "Offers never stick",
        cheaperMove: "Plan meals first, then open one loyalty folder",
        why: "Stops deal-driven impulse baskets.",
        watchOut: "Multi-buys that create waste erase the saving.",
      },
      {
        situation: "Food spoils midweek",
        cheaperMove: "Fridge-first check + one leftover night",
        why: "Cuts the invisible bill without a new store.",
        watchOut: "Do not buy evening reductions you cannot eat soon.",
      },
      {
        situation: "Student / shared house",
        cheaperMove: "Shared staples + one weekly budget run",
        why: "Reduces double-buying and daily convenience shops.",
        watchOut: "Unclear fridge rules recreate waste.",
      },
      {
        situation: "Time-poor couple",
        cheaperMove: "Private label at the convenient weekly store + delivery only if fees still win",
        why: "Saves money without adding a second stressful shop.",
        watchOut: "Delivery fees and minimums can cancel savings.",
      },
      {
        situation: "International kitchen costs",
        cheaperMove: "Supermarket staples + specialty only for true homeland must-haves",
        why: "Stops paying supermarket prices for shallow world-food aisles on everything.",
        watchOut: "Specialty shops are for depth — batch the trip monthly when possible.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Two levers, then review",
        body: "Stacking every tactic at once creates friction. Pick two, measure two weeks, then add.",
      },
      {
        title: "No fabricated scores",
        body: "This board matches situations to moves — never to star ratings or #1 claims.",
      },
      {
        title: "Fit vs tactics",
        body: "Wrong store fit is a Best-supermarkets problem; overspending inside a workable store is this page.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Choose among budget, organic, international, one-stop, neighbourhood and delivery fits.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Self-checkout how-to and the wider errand system.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Grocery tools to explore",
    subtitle:
      "Soft CTAs for established supermarket, delivery and meal patterns when you are modelling everyday food spend. This block is not a ranking of chains or a “cheapest store” podium.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for budget modelling — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-cheap-groceries-support-providers",
    analyticsPageContext: "cheap-groceries-netherlands-recommended-options",
    categoryLinks: [
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: DUTCH_SUPERMARKETS_PATH, label: "Dutch supermarket system" },
      { href: SAVING_MONEY_PATH, label: "Saving money" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common cheap-groceries scenarios",
    intro: "Match your household story to a calm first experiment — then deepen in the tactic sections above.",
    rows: [
      {
        situation: "First week, empty fridge",
        approach: "Short staples list at the nearest calm store; defer optimisation.",
        firstStep: "Buy basics for five days; keep receipts for later comparison.",
      },
      {
        situation: "Student budget in a city",
        approach: "Weekly discounter staples + tiny walkable top-ups.",
        firstStep: "Write a one-page staples list and shop it once this week.",
      },
      {
        situation: "Family weekly shop feels expensive",
        approach: "Private-label swaps + meal-matched offers + leftover night.",
        firstStep: "Swap two branded staples and plan one leftover dinner.",
      },
      {
        situation: "Offers always create clutter",
        approach: "Plan meals first; open only one loyalty folder.",
        firstStep: "Delete unused grocery apps; keep the primary store app.",
      },
      {
        situation: "Both partners work late",
        approach: "Private label at the convenient store; test delivery fees honestly.",
        firstStep: "Compare one delivery basket total with one list-led shop.",
      },
      {
        situation: "Food keeps spoiling",
        approach: "Fridge-first checks and smaller fresh baskets.",
        firstStep: "Photo the fridge before the next shop; freeze one leftover batch.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Chasing every deal without a staples list",
      body: "Folders and stickers feel productive while the trolley fills with unused items.",
      advice: "Write the list first; allow at most one or two offer-led meal swaps.",
    },
    {
      title: "Treating “cheap groceries” as a national #1 store award",
      body: "Rankings hide your cooking, branch and waste reality.",
      advice: "Test levers for two weeks instead of trusting award-style lists.",
    },
    {
      title: "Skipping private label entirely",
      body: "Many households leave the quietest saving unused while store-hopping for tiny differences.",
      advice: "Swap two everyday categories this week and keep branded joy items intentionally.",
    },
    {
      title: "Ignoring waste while celebrating yellow stickers",
      body: "Uneaten discounted food is still money gone.",
      advice: "Add a fridge-first check and one leftover night before hunting more deals.",
    },
    {
      title: "Daily convenience shops on a “budget” plan",
      body: "Especially for students, mini daily top-ups often cost more than one weekly run.",
      advice: "Schedule one budget run and cap walkable top-ups.",
    },
    {
      title: "Redesigning the week around uncovered delivery",
      body: "Apps look cheap until fees, minimums and weak slots appear.",
      advice: "Compare full delivered totals with a list-led in-store shop.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Cheap groceries checklist",
    intro: "Use this before locking a long-term grocery budget routine so “cheap” means lower spend — not more stress.",
    items: [
      "One-page staples list written",
      "Nearest discounter or budget-friendly branch noted",
      "Nearest full-service gap store noted",
      "Two private-label swaps chosen",
      "One loyalty / offers app kept (others removed or ignored)",
      "Meals planned before opening the weekly folder",
      "Fridge and freezer checked before shopping",
      "One leftover or freeze habit scheduled",
      "Branch hours saved for evenings and Sundays",
      "Two receipt weeks ready for review",
      "Best supermarkets bookmarked if format fit is unclear",
      "Dutch supermarkets bookmarked for system habits",
      "Shopping & groceries bookmarked for self-checkout how-to",
      "Cost of living / Saving money bookmarked for the monthly picture",
    ],
  },
  howTo: {
    heading: "How to spend less on groceries in two weeks",
    steps: [
      {
        name: "Write your staples list",
        text: "List recurring basics you cook every week — dairy, carbs, proteins you use, produce, coffee/tea, cleaning. Keep it to one page.",
      },
      {
        name: "Run one budget-format test",
        text: "Shop the staples list once at a nearby discounter or budget-friendly branch and keep the receipt plus a short gap list.",
      },
      {
        name: "Add private-label swaps",
        text: "Replace two branded everyday items with store brands and note what you would keep branded on purpose.",
      },
      {
        name: "Match offers to meals",
        text: "Plan dinners first, then use one weekly folder or loyalty app to swap only what fits — skip bulk you will not finish.",
      },
      {
        name: "Cut waste and review",
        text: "Add a fridge-first check and one leftover night. After two weeks, keep the levers that lowered the bill without raising stress.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to buy cheaper groceries in the Netherlands as an expat",
    description:
      "Practical steps for expats to spend less on Dutch groceries using staples lists, discounters, private-label brands, weekly offers, timing and waste reduction — without relying on fake supermarket rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the cheapest supermarket in the Netherlands?",
      a: "There is no universal cheapest supermarket. Discounters often win on a short staples list, but your receipt depends on what you cook, which branch you use, private-label choices and how much food you waste. Compare two weeks of your real basket instead of viral rankings.",
    },
    {
      q: "Are Lidl and Aldi cheaper for expats?",
      a: "They are common budget-format options for staples when you shop with a list. They may not cover every international product or one-stop weekly need. Many households combine a discounter staples run with a fuller supermarket for gaps — this page does not crown a winner.",
    },
    {
      q: "How do Bonus and weekly supermarket offers work?",
      a: "Most Dutch chains publish a weekly folder and loyalty-app deals. Use them after planning meals so offers reshape food you will cook. Skip multi-buys that create waste. Verify current offers on the retailer’s site or app for your store.",
    },
    {
      q: "Is private label (eigen merk) good enough?",
      a: "For many everyday staples — dairy, pasta, rice, cleaning — store brands are a common quiet saving. Taste-test one category at a time and keep branded items where they truly matter for diet or comfort.",
    },
    {
      q: "How can students save on groceries in the Netherlands?",
      a: "Use a short staples list, one weekly discounter or budget run, shared household staples when housemates agree, private-label basics, and capped walkable top-ups. Daily convenience shops often cost more than the “wrong” supermarket brand.",
    },
    {
      q: "How is this different from Best supermarkets?",
      a: "Best supermarkets helps you choose among fits — budget, organic, international, one-stop, neighbourhood or delivery. This page assumes you want money-saving tactics across formats and habits.",
    },
    {
      q: "How is this different from Dutch supermarkets?",
      a: "Dutch supermarkets explains the system: formats, hours, bags, self-scan orientation, loyalty and weekly rhythm. This page focuses on spending less through lists, offers, private label, timing and waste reduction.",
    },
    {
      q: "Do you rank or rate supermarket chains on price?",
      a: "No. We avoid fake awards, star ratings and #1 cheapest claims. Soft provider links are optional tools for modelling spend, not a podium.",
    },
  ],
  relatedGuides: [
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Choose the supermarket fit that matches your household.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "How the supermarket system works day to day.",
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
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Habit levers that often include groceries.",
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
    intro: "Keep cheap-grocery tactics connected to fit choice, the system primer, errand guide and wider Living cluster.",
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
        description: "Choosing among fits for your situation.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — money-saving tactics across formats.",
      },
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Sourcing map for non-Dutch and specialty products.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Asian toko and specialty grocery depth.",
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
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Match budget or other priorities to a supermarket fit.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "Learn formats, hours, bags and self-scan orientation.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Find non-Dutch products without forcing every item into one store.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the bill while building an Asian specialty pantry calmly.",
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
      description: "Habit levers beyond the grocery aisle.",
    },
    {
      label: "Daily life",
      href: LIVING_DAILY_LIFE_PATH,
      status: "live",
      description: "Everyday routines around shopping and payments.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Best supermarkets owns fit choice — budget, organic, international, one-stop, delivery.",
    "Dutch supermarkets owns the system primer — formats, hours, bags, self-scan.",
    "International supermarkets owns non-Dutch product sourcing across aisles and specialty shops.",
    "Shopping & groceries owns errands, self-checkout how-to and household non-food.",
    "Cost of living and Saving money place food spend in the monthly picture.",
  ],
  foodHubTips: [
    "Use this page for saving tactics; Best for choice; Dutch for system; International for specialty sourcing; Shopping for errands.",
    "Link Asian specialty depth when you need East or Southeast Asian toko shopping.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Soft provider CTAs are tools — never cheapest-store podiums.",
  ],
  exploreNextTips: [
    "Open Best supermarkets next if you still need a primary store fit.",
    "Open Dutch or International guides if formats or specialty sourcing still feel new.",
    "Use Cost of living / Saving money when budgeting food spend.",
    "Add Essential apps only after your staples list and primary store are clear.",
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
      label: "Voedingscentrum",
      href: "https://www.voedingscentrum.nl/",
      description: "Netherlands Nutrition Centre — useful for food and waste orientation.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Example full-service retailer — verify Bonus offers and private-label ranges.",
    },
    {
      label: "Jumbo",
      href: "https://www.jumbo.com/",
      description: "Example full-service retailer — verify weekly offers at your branch.",
    },
    {
      label: "Lidl Netherlands",
      href: "https://www.lidl.nl/",
      description: "Example discounter — verify assortment and branch information.",
    },
    {
      label: "Aldi Netherlands",
      href: "https://www.aldi.nl/",
      description: "Example discounter — verify local branch details and weekly offers.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "Example delivery-only supermarket — compare fees and coverage with in-store totals.",
    },
  ],
  disclosure:
    "General information only. Not financial, consumer-rights or shopping advice and not a ranking, award list or star-rating of supermarket chains. Assortments, prices, offers, hours and delivery coverage change. Verify current details with retailers and official consumer sources. Some outbound links may be affiliate or referral links.",
} as const;
