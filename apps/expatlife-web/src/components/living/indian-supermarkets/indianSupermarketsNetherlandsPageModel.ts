import {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_PILLAR_ROOT_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
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
export type TacticRow = { lever: string; whatItMeans: string; tip: string };
export type DecisionRow = { situation: string; useThis: string; why: string; watchOut: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "indian-supermarkets-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const indianSupermarketsNetherlandsPage = {
  slug: "indian-supermarkets-netherlands",
  path: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INDIAN_SUPERMARKETS_NETHERLANDS_PATH) ?? "2026-09-24",
  seo: {
    title: "Indian Supermarkets Netherlands | South Asian Grocery Guide for Expats",
    description:
      "Shop Indian and South Asian groceries in the Netherlands with confidence — specialty shop and supermarket formats, spices, dal, rice, flours, pickles and snacks, city patterns and first-visit tips. Deep specialty guide — not a broad international map or ranked store awards.",
    keywords: [
      "Indian supermarket Netherlands",
      "Indian grocery store Netherlands",
      "Indian specialty shop Netherlands",
      "South Asian supermarket Netherlands",
      "Indian food shopping Netherlands",
      "expat Indian groceries Netherlands",
      "where to buy Indian ingredients Netherlands",
      "Indian market Amsterdam Rotterdam",
      "buy spices Netherlands",
      "dal rice atta Netherlands",
      "Indian pickles snacks Netherlands",
      "South Asian grocery Netherlands",
    ],
  },

  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Indian supermarkets Netherlands",
    subtitle:
      "A practical deep guide to Indian and South Asian grocery shopping — specialty formats, product categories, city patterns and first-visit tips — not a ranked awards list and not the broad international sourcing map.",
    primaryCta: { label: "Open formats map", href: "#formats" },
    secondaryCta: { label: "Open International map", href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH },
    chips: ["Shop formats", "Spices & staples", "First visit", "City patterns", "Aisle vs specialty", "Batch shopping"],
    disclaimer:
      "General orientation only — not shopping, dietary or consumer advice and not a ranking of Indian stores or chains. Assortments, hours and neighbourhood coverage change by city and shop. Verify current stock in person or on retailer sites. Soft provider links below are optional everyday grocery tools, not “best Indian supermarket” winners. Naming cuisine types is orientation, not an official directory.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table: newcomers unpacking Indian specialty spices, dal, basmati rice, atta flour, pickles and namkeen snacks beside a handwritten shopping list, soft canal light through a window, welcoming South Asian pantry mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#formats", label: "Formats" },
    { href: "#categories", label: "Categories" },
    { href: "#first-visit", label: "First visit" },
    { href: "#decision", label: "Aisle vs specialty" },
    { href: "#pantry", label: "Pantry batch" },
    { href: "#cities", label: "City patterns" },
    { href: "#delivery", label: "Delivery & online" },
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
      "Premium orientation board titled Indian Specialty Depth Not Rankings — four levers: formats, categories, first visit, city route — Checklist rail, Dutch canal market skyline and ExpatLife brand footer.",
      "Indian grocery shopping is a specialty depth guide — not a national #1 Indian-store award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Indian shopping levers — shop formats, product categories, first-visit tips, aisle vs specialty, city patterns, batch pantry — Dutch market band and ExpatLife brand footer.",
      "Six levers explain almost every “Indian supermarket Netherlands” search for newcomers."
    ),
    formats: visual(
      "formats",
      "Premium formats diagram — compact specialty shop, larger Indian supermarket, produce-forward market stall and mixed diaspora shop linked to one calm shopping plan — Dutch street-front desk, General information only rail.",
      "Match the shop format to your list — not every Indian grocery is the same size or depth."
    ),
    categories: visual(
      "categories",
      "Premium category desk scene — spices, dal, rice, flours, pickles, snacks and pantry staples on labelled trays — Dutch kitchen light, Verify freshness rail.",
      "Know the category map before you shop so the first visit stays calm and list-led."
    ),
    firstVisit: visual(
      "first-visit",
      "Premium first-visit checklist clipboard on an Indian grocery counter — list written, bags ready, payment card, produce plan — Dutch city shopfront light and ExpatLife brand footer.",
      "A prepared first visit beats wandering every aisle without a plan."
    ),
    decision: visual(
      "decision",
      "Premium decision board — six kitchen situations matched to world-food aisle, Indian specialty shop or mixed sourcing — no star ratings, Dutch canal skyline band and ExpatLife brand footer.",
      "Match your product job to aisle or Indian specialty — never to a fabricated “best Indian supermarket” score."
    ),
    pantry: visual(
      "pantry",
      "Premium pantry-batch board — shelf-stable spices, dal, rice and flours tagged monthly; fresh produce tagged cook-soon — Dutch apartment kitchen, General information only rail.",
      "Batch shelf-stable Indian staples monthly; buy fresh herbs and produce close to cooking day."
    ),
    cities: visual(
      "cities",
      "Premium city-route map board — Amsterdam, Rotterdam, The Hague and Utrecht Indian grocery patterns on one calm bike loop — Dutch canal skyline, Verify local hours rail.",
      "City and district reality beats national “famous shop” lists."
    ),
    delivery: visual(
      "delivery",
      "Premium phone-and-parcel scene — supermarket delivery basket, Indian specialty online note, fees checklist — Dutch kitchen table with list and ExpatLife brand footer.",
      "Online helps shelf-stable gaps — freshness and discovery still favour in-person specialty trips."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — Indian pantry, spice depth, vegetarian kitchen, snack focus, mixed South Asian household, student shared kitchen — Dutch canal window light and ExpatLife brand footer.",
      "Start from your cuisine story, then pick one Indian specialty experiment this month."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — expecting one megan Indian chain, buying staples only at specialty prices, no list, ignoring hours, overbuying produce — Fix notes and Dutch market skyline.",
      "Most Indian-pantry friction comes from wrong format choice and unplanned trips — not from missing a secret chain."
    ),
    checklist: visual(
      "checklist",
      "Premium Indian-shopping checklist clipboard — cuisine list written, nearest specialty shop mapped, hours saved, monthly batch planned — Dutch kitchen table scene.",
      "Use this checklist so “Indian supermarket” becomes a calm specialty habit."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Write a cuisine must-have list before hunting every “Indian supermarket” post.",
        "Use mainstream world-food aisles for frequent spice top-ups; specialty shops for depth and staples.",
        "Batch specialty trips monthly when possible — protect time and fridge space.",
        "Open International for the broad sourcing map; Asian for East/SE Asian toko; Turkish for Middle-Eastern specialty; Best for fit; Cheap for saving; Dutch for system habits.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Shop formats and product categories are different levers — learn both.",
        "First-visit preparation beats impulse wandering.",
        "City patterns decide access more than viral store threads.",
        "No section here is a star rating or award claim.",
      ],
    },
    formats: {
      title: "Format cues",
      items: [
        "Compact specialty shops often win on spices, dal, flours and packaged staples.",
        "Larger Indian supermarkets may add fresh produce, frozen, snacks and wider brand depth.",
        "Produce and spice-forward stops shine for chillies, herbs and cook-soon items.",
        "Ask neighbours for current shops — coverage changes faster than static lists.",
      ],
    },
    categories: {
      title: "Category cues",
      items: [
        "Spices, dal, rice, atta and pickles are the usual first-week wins.",
        "Fresh herbs, chillies and produce belong close to cooking day.",
        "Specialty meats, cheeses and dairy drinks need fridge-space planning.",
        "Nostalgia snacks and sweets are fine — budget them so staples stay calm.",
      ],
    },
    firstVisit: {
      title: "First-visit cues",
      items: [
        "Bring a short list, reusable bags and a payment card that works at smaller tills.",
        "Walk the store once for layout, then shop the list.",
        "Check produce quality and pack sizes before filling the basket.",
        "Save hours for your next visit — Sunday patterns often differ from chains.",
      ],
    },
    decision: {
      title: "Decision cues",
      items: [
        "Match the product job to aisle vs Indian specialty.",
        "Mixed kitchens usually need both weekly aisle and monthly specialty run.",
        "Revisit after you know your real commute and fridge space.",
        "International map helps if you also need non-Indian specialty sources.",
      ],
    },
    pantry: {
      title: "Pantry cues",
      items: [
        "Separate shelf-stable must-haves from cook-soon produce.",
        "Label and date bulk spice and flour bags at home.",
        "Share bulk buys in student houses to protect fridge space.",
        "Cheap groceries helps when specialty depth starts raising the bill.",
      ],
    },
    cities: {
      title: "City cues",
      items: [
        "Amsterdam, Rotterdam, The Hague and Utrecht patterns vary by district.",
        "A specialty shop on your bike or tram loop beats a distant “famous” shop.",
        "Smaller towns may need monthly city specialty runs.",
        "Open Shopping & groceries for errand and delivery timing depth.",
      ],
    },
    delivery: {
      title: "Delivery cues",
      items: [
        "Supermarket delivery can include some Indian and South Asian world-food lines — verify your postcode.",
        "Specialty online shops help shelf-stable gaps — check fees and freshness.",
        "Compare total cost including fees with one calm specialty trip.",
        "Essential apps places grocery tools in a newcomer install order.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your cuisine story, not a viral store thread.",
        "First month: cover must-haves; deepen specialty later.",
        "Students: share specialty runs and protect fridge space.",
        "South Asian kitchens may combine Indian specialty shop with other specialty spice shops — map both calmly.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Expecting one megan Indian chain creates frustration.",
        "Buying milk and basic pasta only at specialty prices raises the bill.",
        "Specialty trips without a list create waste.",
        "Ignoring Sunday hours wastes a planned cooking weekend.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Cuisine must-have list written before you leave home.",
        "Nearest Indian specialty shop or supermarket mapped on your route.",
        "Hours saved including Sunday patterns.",
        "Monthly batch habit set for shelf-stable depth items.",
      ],
    },
  },
  quickAnswer: {
    heading: "Indian grocery shopping is specialty depth — not one perfect supermarket",
    summary:
      "In the Netherlands, Indian and South Asian cooking usually means a mix: larger Albert Heijn or Jumbo world-food aisles for frequent spice and sauce top-ups, plus Indian specialty shops for dal, flours, pickles, snacks, niche brands and deeper ranges — not crowning a single “best Indian supermarket”.",
    bullets: [
      "Start with a short cuisine must-have list — spices, dal, rice, flours, pickles, snacks, pantry staples — before hunting shops.",
      "Learn compact grocery vs larger Indian supermarket formats so the first visit matches your list.",
      "Use mainstream world-food aisles for weekly gaps; Indian specialty for dal, flours, pickles, snacks and freshness.",
      "This page owns the Indian specialty lane; International owns the broad sourcing map; Asian owns East/SE Asian toko; Turkish owns Middle-Eastern specialty; Best owns fit; Cheap owns saving tactics; Dutch owns the system.",
    ],
    note: "If you only do one thing: write ten Indian must-have products, check them once in your nearest large world-food aisle, and map one Indian specialty shop for the rest.",
  },
  introParagraphs: [
    "Expats search “Indian supermarket Netherlands” hoping for one store that replaces a homeland pantry. Dutch grocery life rarely works that way: full-service chains carry growing Indian and South Asian world-food lines, while specialty Indian shops and larger Indian supermarkets fill the gaps that aisles only partially cover — spices, dal, rice, flours, pickles, snacks and homeland pantry brands.",
    "This guide is the Indian and South Asian specialty deep dive. It explains formats you will meet, common product categories, how to prepare for a first visit, how city patterns differ, and when a world-food aisle is enough — without fake rankings or inventing official store directories.",
    "Use International when you need the broad map across many specialty cuisines. Use Asian when the question is East or Southeast Asian toko shopping. Use Turkish when the question is Middle-Eastern specialty shopping. Use Best when the question is which overall supermarket fit to choose. Use Cheap when the question is spending less. Use Dutch for formats, hours, bags and self-scan. Stay here when the question is Indian and South Asian grocery shopping specifically.",
  ],
  introHighlights: [
    "Indian specialty depth — formats and categories, not awards",
    "First-visit preparation so the shop feels calm",
    "City and route patterns that beat viral lists",
    "Soft grocery-provider CTAs only as optional tools — never as rankings",
  ],
  starterChecklist: [
    "Write a one-page Indian must-have list (spices, dal, rice, flours, pickles, snacks, pantry staples)",
    "Note the nearest large full-service branch with a world-food aisle",
    "Map one Indian specialty shop on a calm bike or tram loop",
    "Separate weekly aisle top-ups from monthly specialty depth buys",
    "Check fridge and freezer space before the first specialty run",
    "Save specialty hours (including Sunday patterns)",
    "Bookmark International or Asian if you also need other specialty sources",
    "Bookmark Cheap groceries if specialty shopping is raising the bill",
  ],
  orientationFlowSteps: [
    "Write your cuisine must-have list",
    "Test one world-food aisle branch",
    "Map one Indian specialty shop",
    "Batch depth buys, then review",
  ],
  snapshotTips: [
    "Snapshot cards are shopping levers — not scores.",
    "Combine aisle + Indian specialty in month one for most kitchens.",
    "Re-check after you know your real commute and neighbourhood.",
  ],
  snapshotSignals: [
    {
      label: "Weekly gaps",
      value: "World-food aisle",
      note: "Larger full-service branches often cover frequent curry pastes, spices and basmati top-ups.",
    },
    {
      label: "Depth buys",
      value: "Indian specialty",
      note: "Indian specialty shops win on dal, flours, spice depth, niche brands and breadth.",
    },
    {
      label: "Must-haves",
      value: "Short list",
      note: "A deliberate cuisine list beats browsing every “Indian supermarket” post.",
    },
    {
      label: "Access",
      value: "Route reality",
      note: "A nearby good-enough shop beats a distant famous one you never reach.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Indian specialty shop formats",
      body: "Best when you need to know what size and depth of Indian shop you are walking into — compact grocery vs larger specialty supermarket vs spice-forward shop.",
    },
    {
      title: "Product categories",
      body: "Best when you want a calm map of sauces, noodles, rice, produce, frozen and snacks before the first visit.",
    },
    {
      title: "First-visit preparation",
      body: "Best when you want a list, bags, payment readiness and a produce plan so the shop does not overwhelm.",
    },
    {
      title: "Aisle vs specialty",
      body: "Best when you decide which Indian items stay in the weekly supermarket and which need a specialty run.",
    },
    {
      title: "City & route patterns",
      body: "Best when you map Indian shops onto your real weekly loop — Amsterdam, Rotterdam, The Hague and Utrecht each feel different.",
    },
    {
      title: "Batch pantry & delivery",
      body: "Best when you protect fridge space and time with monthly shelf-stable runs and optional online top-ups.",
    },
  ] satisfies TipCard[],
  formats: {
    heading: "What to expect: specialty shop and Indian supermarket formats",
    intro:
      "“Indian supermarket” in the Netherlands covers several formats — compact specialty groceries, larger Indian markets and spice-forward shops. Naming them here is orientation so your first visit matches your list — not a ranked directory of chains.",
    paragraphs: [
      "A compact specialty shop is often a neighbourhood Indian grocery with strong packaged depth — spices, dal, flours, snacks, pickles and some produce — in a smaller footprint. Larger Indian supermarkets may feel closer to a full specialty supermarket with wider aisles, more frozen and produce, and broader brand ranges.",
      "You may also meet mixed South Asian shops that carry Indian, Pakistani and Bangladeshi staples together. Coverage depends on city and district; ask neighbours and colleagues for current favourites.",
      "Payment, bag and queue habits still follow Dutch everyday norms. Bring reusable bags, expect debit or contactless at many tills, and verify hours — specialty shops often differ from chain supermarket Sunday patterns.",
    ],
    rows: [
      {
        lever: "Compact specialty shop",
        whatItMeans: "Smaller Indian grocery focused on spices, dal, flours and selected fresh/frozen.",
        tip: "Ideal for spices, dal and snacks when you already have a short list.",
      },
      {
        lever: "Larger Indian supermarket",
        whatItMeans: "Broader specialty supermarket format with produce, frozen, snacks and brand depth.",
        tip: "Useful for monthly depth runs when fridge space allows.",
      },
      {
        lever: "Produce-forward stop",
        whatItMeans: "Produce or spice-forward stop strong on herbs, chillies and cook-soon freshness.",
        tip: "Shop close to cooking day; avoid filling the fridge “just in case”.",
      },
      {
        lever: "Mixed diaspora grocery",
        whatItMeans: "Community shops carrying Indian and wider South Asian lines beside other cuisine staples.",
        tip: "Orientation example only — verify what your local shop actually stocks.",
      },
      {
        lever: "World-food aisle partner",
        whatItMeans: "Large AH/Jumbo-style aisle for frequent top-ups between specialty trips.",
        tip: "Keep weekly staples here so the specialty shop stays a depth tool, not a milk-and-eggs aisle.",
      },
      {
        lever: "Hours & access",
        whatItMeans: "Sunday and evening patterns often differ from mainstream chains.",
        tip: "Save exact hours before you ride across town with an empty fridge plan.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Format first, fame second",
        body: "Knowing whether you need a compact specialty shop or a larger specialty supermarket matters more than chasing a viral shop name.",
      },
      {
        title: "No invented directories",
        body: "This guide will not invent official Indian-store rankings or fake “top 10 specialty shop” awards. Verify shops in your neighbourhood.",
      },
      {
        title: "Link the sibling guides",
        body: "International owns the broad map; Asian owns East/SE Asian toko; Turkish owns Middle-Eastern specialty; Best chooses fit; Cheap saves money; Dutch explains the system — this page stays on Indian specialty depth.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Broad sourcing map across world-food aisles and many specialty cuisines.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "East and Southeast Asian toko depth — separate specialty lane.",
      },
      {
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Turkish and Middle-Eastern specialty depth — separate specialty lane.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Formats, hours, bags, self-scan orientation and weekly rhythm.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand system, self-checkout how-to and household rhythms.",
      },
    ] satisfies GuideLink[],
  },
  categories: {
    heading: "Common Indian and South Asian product categories",
    intro:
      "A calm first visit starts with category awareness. Use this map to organise your list — not as a claim that every shop stocks every item.",
    paragraphs: [
      "Frequent first-month wins: whole and ground spices, masala mixes, dal and lentils, basmati rice, atta and besan flours, pickles and chutneys, ghee or oils, and namkeen snacks or sweets.",
      "Bulk spice packs, specialty flours, homeland brands and certain fresh herbs often need an Indian specialty stop. Assortments change — verify in person.",
      "South Asian kitchens (Indian, Pakistani, Bangladeshi and related) often share spice, dal and flour needs. Map aisle + one specialty stop calmly rather than forcing one store to do everything. East/SE Asian toko belongs on the Asian guide; Middle-Eastern specialty on Turkish.",
    ],
    rows: [
      {
        lever: "Spices & masalas",
        whatItMeans: "Cumin, coriander, turmeric, chilli, garam masala mixes and cooking pastes.",
        tip: "Try the world-food aisle for frequent jars; specialty for niche brands and bulk sizes.",
      },
      {
        lever: "Dal, rice & grains",
        whatItMeans: "Toor, moong, masoor and chana dals; basmati and other rice; shelf staples.",
        tip: "Buy sizes you will finish; share bulk in student houses.",
      },
      {
        lever: "Flours & pantry",
        whatItMeans: "Atta, besan, rice flour, semolina and related pantry bags.",
        tip: "Label and date bulk bags at home so they stay usable.",
      },
      {
        lever: "Pickles, chutneys & oils",
        whatItMeans: "Achar, chutneys, pickles, ghee and specialty cooking oils.",
        tip: "World-food aisles often cover basics; specialty wins on breadth and brands.",
      },
      {
        lever: "Dairy & fridge",
        whatItMeans: "Yoghurt, paneer when stocked, and specialty dairy drinks.",
        tip: "Check fridge space and use-by dates before filling the basket.",
      },
      {
        lever: "Snacks & sweets",
        whatItMeans: "Namkeen, papad, mithai-style sweets and packaged snacks.",
        tip: "Budget a small joy line so staples stay affordable.",
      },
      {
        lever: "Fresh herbs & produce",
        whatItMeans: "Coriander, curry leaves, chillies and cook-soon vegetables when available.",
        tip: "Buy against meals you will cook soon — not “just in case”.",
      },
      {
        lever: "Cookware extras",
        whatItMeans: "Some larger shops stock pressure-cooker parts, spice boxes or pantry tools.",
        tip: "Orientation only — compare with general household shops if prices feel high.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "List by category, not by aisle hope",
        body: "Grouping must-haves by category makes both aisle checks and specialty trips faster.",
      },
      {
        title: "Fresh vs shelf-stable rhythm",
        body: "Shelf-stable spices, dal and flours travel well on monthly runs; fresh herbs and dairy belong close to cooking day.",
      },
      {
        title: "Orientation, not a podium",
        body: "Category examples here help newcomers navigate — they are not product recommendations or brand awards.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International — pantry gaps",
        href: `${INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH}#pantry`,
        status: "live",
        description: "Assign products to aisle vs specialty across many cuisines.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "When specialty shopping starts raising the monthly food bill.",
      },
    ] satisfies GuideLink[],
  },
  firstVisit: {
    heading: "Tips for your first Indian specialty shop visit",
    intro:
      "A prepared first visit turns an unfamiliar shop into a calm specialty stop. Bring a list, bags and a simple produce plan.",
    paragraphs: [
      "Walk the store once to learn the layout before filling the basket. Many compact specialty shops are dense — knowing where spices, dal, flours, snacks and produce sit saves time.",
      "Check pack sizes and freshness. Specialty produce and herbs can be excellent — and easy to overbuy. Prefer amounts you will cook soon.",
      "Payment and bags follow Dutch everyday norms more often than newcomers expect. Bring reusable bags; expect debit or contactless at many tills; keep some cash only if a specific small shop requires it — verify rather than assume.",
    ],
    rows: [
      {
        lever: "Written list",
        whatItMeans: "Ten must-haves marked aisle-done vs still-needed.",
        tip: "Leave nice-to-haves for a second visit.",
      },
      {
        lever: "Bags & transport",
        whatItMeans: "Reusable bags and a plan for bike or tram home.",
        tip: "Heavy rice, oil and flour bags need a calm route home.",
      },
      {
        lever: "Produce plan",
        whatItMeans: "Know which meals you will cook in the next few days.",
        tip: "Buy fresh herbs, chillies and cook-soon produce against that plan only.",
      },
      {
        lever: "Hours check",
        whatItMeans: "Confirm opening times before you travel.",
        tip: "Sunday and holiday patterns often differ from AH/Jumbo.",
      },
      {
        lever: "Payment readiness",
        whatItMeans: "Card that works for contactless or PIN at smaller tills.",
        tip: "See Payments basics if Dutch debit norms still feel new.",
      },
      {
        lever: "Next-visit note",
        whatItMeans: "Write what worked and what to buy next time.",
        tip: "Turns the first visit into a reusable habit.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Dense shops reward preparation",
        body: "A short list and one layout walk prevent impulse overbuying in compact specialty aisles.",
      },
      {
        title: "Protect fridge space",
        body: "First visits often fail because fresh produce and dairy fill the fridge before you have cooking plans.",
      },
      {
        title: "Community knowledge helps",
        body: "Ask neighbours and city groups for current hours and stock — coverage changes faster than static articles.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms — useful at markets and smaller shops too.",
      },
      {
        label: "Dutch supermarkets — bags & habits",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Everyday supermarket habits that still help on specialty errand days.",
      },
    ] satisfies GuideLink[],
  },
  decision: {
    heading: "When to use the aisle vs an Indian specialty shop",
    intro:
      "Use this decision board to match your product need to a source type — without crowning a best Indian supermarket or inventing scores.",
    paragraphs: [
      "Most households only need two sources in the first month: a reliable world-food aisle and one Indian specialty stop. Add more after you know what you actually repurchase.",
      "If your problem is really “which supermarket should be my weekly anchor?”, switch to Best. If your problem is “where do I find Indian ingredients?”, stay on this page. If you also need East/SE Asian or Middle-Eastern specialty sources, open Asian or Turkish; for a broad map open International.",
    ],
    rows: [
      {
        situation: "Need spices, curry pastes or basmati twice a month",
        useThis: "Large full-service world-food aisle",
        why: "Fits the weekly shop without a specialty detour.",
        watchOut: "Express shops may be too thin — try a larger branch.",
      },
      {
        situation: "Need bulk dal, atta, pickles or niche homeland brands",
        useThis: "Indian specialty shop or larger Indian supermarket",
        why: "Aisles rarely match breadth, pack sizes or specific brands.",
        watchOut: "Batch the trip; do not redesign every week around it.",
      },
      {
        situation: "Spice depth, flours and snack restock",
        useThis: "Indian specialty shop with strong packaged depth",
        why: "Chain aisles often stock thinner spice and flour ranges.",
        watchOut: "Check cupboard and fridge space before buying bulk bags.",
      },
      {
        situation: "Student / shared kitchen",
        useThis: "Shared specialty run + aisle staples",
        why: "Splits cost and fridge space for depth items.",
        watchOut: "Unclear fridge ownership creates waste and double-buying.",
      },
      {
        situation: "Time-poor week",
        useThis: "Aisle + optional supermarket delivery",
        why: "Protects energy; specialty can wait for the next calm weekend.",
        watchOut: "Delivery fees can cancel the convenience win.",
      },
      {
        situation: "Also need non-Indian specialty items",
        useThis: "International sourcing map + this Indian guide",
        why: "Keeps Indian depth here while other cuisines stay on International or Asian.",
        watchOut: "Do not force one Indian shop to cover Asian or every other cuisine.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Two sources, then review",
        body: "Stacking every Indian district at once creates friction. Pick aisle + one specialty shop, measure a month, then add.",
      },
      {
        title: "No fabricated scores",
        body: "This board matches situations to source types — never to star ratings or #1 claims.",
      },
      {
        title: "Fit vs Indian depth",
        body: "Wrong weekly store fit is a Best problem; missing Indian ingredients inside a workable week is this page.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Broad map when Indian depth is only one of several specialty needs.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "When the specialty need is East or Southeast Asian rather than Indian.",
      },
      {
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "When the specialty need is Turkish or Middle-Eastern rather than Indian.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Choose among budget, organic, international, one-stop, neighbourhood and delivery fits.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Money-saving tactics when specialty sourcing and staples compete in the budget.",
      },
    ] satisfies GuideLink[],
  },
  pantry: {
    heading: "Batch your Indian pantry calmly",
    intro:
      "A calm Indian kitchen separates monthly shelf-stable depth from cook-soon produce. Batch the first; time the second.",
    paragraphs: [
      "Shelf-stable must-haves — sauces, pastes, noodles, rice, snacks — travel well on a monthly specialty run. Fresh herbs and specialty vegetables belong closer to cooking day.",
      "Label and date bulk spice or flour bags. Specialty sizes last longer when transferred to jars at home.",
      "If the bill climbs, Cheap groceries helps you protect staples with private label and waste habits while still funding a few homeland must-haves.",
    ],
    rows: [
      {
        lever: "Monthly shelf-stable",
        whatItMeans: "Spices, dal, rice, atta, pickles, teas and shelf-stable staples.",
        tip: "One list-led specialty run every two to four weeks.",
      },
      {
        lever: "Cook-soon produce",
        whatItMeans: "Fresh herbs, peppers, salad greens and cook-soon vegetables.",
        tip: "Buy against this week’s meals only.",
      },
      {
        lever: "Freezer buffer",
        whatItMeans: "Specialty frozen items and ready snacks when stocked.",
        tip: "Leave space; do not fill the freezer on visit one.",
      },
      {
        lever: "Shared-house rules",
        whatItMeans: "Clear ownership of sauces and fridge shelves.",
        tip: "Agree shared staples before the first joint specialty run.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Must-haves before nice-to-haves",
        body: "Ten products that unlock your cooking beat thirty impulse specialty bags.",
      },
      {
        title: "Label and date bulk buys",
        body: "Specialty bags of spices and flours last longer when jarred and dated.",
      },
      {
        title: "Protect the monthly food picture",
        body: "Indian depth and budget can coexist — assign expensive items to monthly, not weekly, rhythm.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Private label, offers and waste habits around the wider grocery bill.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place food spend in the wider monthly Dutch budget picture.",
      },
    ] satisfies GuideLink[],
  },
  cities: {
    heading: "City and neighbourhood patterns",
    intro:
      "Indian grocery access is highly local. A good specialty shop on your bike loop beats a famous shop across town that you never visit twice.",
    paragraphs: [
      "Larger cities — Amsterdam, Rotterdam, The Hague, Utrecht and others — usually offer denser Indian and South Asian grocery options, but coverage varies by district. Smaller towns may rely more on one large full-service world-food aisle plus occasional city specialty trips.",
      "Build a simple route map: weekly supermarket, deeper world-food branch if different, and one Indian specialty stop. Save hours for Sundays and holidays.",
      "Ask local networks for current recommendations. Community knowledge updates faster than any static “best Indian supermarket” article.",
    ],
    rows: [
      {
        lever: "Bike / tram loop",
        whatItMeans: "Shops you can reach without a special weekend expedition.",
        tip: "Prefer good-enough nearby over perfect-and-distant.",
      },
      {
        lever: "District clusters",
        whatItMeans: "Streets where several Indian or mixed specialty groceries sit near each other.",
        tip: "One cluster visit can cover multiple needs in one trip.",
      },
      {
        lever: "Hours reality",
        whatItMeans: "Sunday and evening patterns differ by shop type.",
        tip: "Save exact hours for your specialty stop — do not assume chain hours.",
      },
      {
        lever: "City vs town",
        whatItMeans: "Smaller places may need monthly city specialty runs.",
        tip: "Batch shelf-stable must-haves; use the local aisle weekly.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Route beats reputation",
        body: "A specialty shop on your commute will shape your cooking more than a viral Amsterdam list if you live elsewhere.",
      },
      {
        title: "Hours are shop-specific",
        body: "Verify before you ride across town with an empty fridge plan.",
      },
      {
        title: "Dutch system habits still apply",
        body: "Bags, payments and errand timing from Dutch and Shopping guides still help on specialty days.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand timing, deliveries and household rhythms.",
      },
      {
        label: "Dutch supermarkets — hours",
        href: `${DUTCH_SUPERMARKETS_PATH}#hours`,
        status: "live",
        description: "Opening-hours culture for chain formats — still useful context beside specialty shops.",
      },
    ] satisfies GuideLink[],
  },
  delivery: {
    heading: "Delivery and online Indian options",
    intro:
      "Delivery and online shops can cover some Indian pantry gaps — especially shelf-stable items — but they do not automatically replace specialty trips for freshness and discovery.",
    paragraphs: [
      "Main supermarket delivery apps sometimes include Indian and South Asian world-food lines available at your local branch assortment. Coverage and stock still depend on postcode and warehouse reality.",
      "Specialty web shops can help with packaged Indian products. Check shipping fees, minimums and expiry expectations before treating them as your primary pantry.",
      "Time-poor weeks may justify delivery for staples while specialty waits for a calm weekend. Compare full totals — fees included — with one list-led specialty trip.",
    ],
    rows: [
      {
        lever: "Supermarket delivery",
        whatItMeans: "Indian and South Asian world-food lines inside your usual delivery basket.",
        tip: "Search your must-haves in the app for your postcode before assuming stock.",
      },
      {
        lever: "Specialty web shops",
        whatItMeans: "Indian or South Asian import-focused online groceries.",
        tip: "Batch orders; watch shipping thresholds.",
      },
      {
        lever: "Freshness limit",
        whatItMeans: "Produce and fresh specialty items travel poorly online.",
        tip: "Keep fresh cuisine produce for in-person specialty stops.",
      },
      {
        lever: "Fee honesty",
        whatItMeans: "Delivery fees, tips and minimums change the maths.",
        tip: "Compare one delivered basket with one specialty bike trip total.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Shelf-stable first online",
        body: "Sauces, snacks and packaged staples are the safest online Indian wins.",
      },
      {
        title: "Apps are tools, not winners",
        body: "Soft provider links later are optional modelling tools — not a podium for the “best” Indian delivery app.",
      },
      {
        title: "Essential apps for install order",
        body: "Place grocery and delivery apps after you know your primary weekly store and specialty rhythm.",
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
        label: "Best — delivery fit",
        href: `${BEST_SUPERMARKETS_NETHERLANDS_PATH}#delivery`,
        status: "live",
        description: "When delivery is part of choosing your supermarket fit.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Grocery tools to explore",
    subtitle:
      "Soft CTAs for established supermarket and delivery patterns when you are modelling everyday food sourcing alongside Indian and South Asian pantry needs. This block is not a ranking of Indian stores or a “best specialty shop” podium.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for everyday grocery modelling — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent Indian-store directories here.",
    placementId: "nl-living-indian-supermarkets-support-providers",
    analyticsPageContext: "indian-supermarkets-netherlands-recommended-options",
    categoryLinks: [
      { href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH, label: "International sourcing map" },
      { href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH, label: "Asian specialty guide" },
      { href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH, label: "Turkish specialty guide" },
      { href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH, label: "South African shops guide" },
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common Indian-shopping scenarios",
    intro: "Match your Indian or South Asian kitchen story to a calm first experiment — then deepen in the sections above.",
    rows: [
      {
        situation: "Classic Indian pantry rebuild",
        approach: "Aisle for common spices and sauces; Indian specialty for dal, flours, pickles and niche brands.",
        firstStep: "Write ten must-haves; check the aisle this week; map one Indian specialty shop.",
      },
      {
        situation: "Vegetarian Indian kitchen",
        approach: "Aisle for yoghurt and basics; specialty for dal, atta, spices and fresh herbs.",
        firstStep: "Batch one specialty run with a written list.",
      },
      {
        situation: "Spice-depth and masala focus",
        approach: "Aisle for a few jars; specialty for bulk spices, mixes and pastes.",
        firstStep: "Mark aisle vs specialty on your must-have list.",
      },
      {
        situation: "Snack and pickle comfort kitchen",
        approach: "Aisle for everyday staples; specialty for namkeen, achar and homeland sweets.",
        firstStep: "Budget a small joy line so staples stay calm.",
      },
      {
        situation: "Mixed South Asian household",
        approach: "Combine Indian specialty with world-food aisle; open Turkish or Asian only for those specialty lanes.",
        firstStep: "Map two sources calmly; do not force one shop to cover every cuisine.",
      },
      {
        situation: "Student shared kitchen",
        approach: "Shared specialty run + aisle staples; clear fridge and cupboard rules.",
        firstStep: "Agree shared staples; schedule one monthly specialty trip.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Expecting one megan Indian supermarket chain",
      body: "Dutch Indian grocery life is usually a mix of aisle + specialty shop — waiting for a single perfect store delays cooking.",
      advice: "Build aisle + one Indian specialty stop in month one; refine later.",
    },
    {
      title: "Buying everyday staples only at specialty prices",
      body: "Specialty shops are powerful for depth — expensive if used for Dutch milk, eggs and basic pasta you can buy anywhere.",
      advice: "Assign weekly staples to mainstream shops; specialty for true Indian pantry gaps.",
    },
    {
      title: "First visit without a list",
      body: "Dense specialty aisles reward impulse — and create waste.",
      advice: "Write must-haves; leave nice-to-haves for a second visit.",
    },
    {
      title: "Overbuying fresh herbs and produce",
      body: "Fresh herbs and chillies spoil when bought “just in case”.",
      advice: "Buy against meals you will cook in the next few days.",
    },
    {
      title: "Chasing distant “famous” shops",
      body: "Viral lists ignore your commute and fridge space.",
      advice: "Prefer a good shop on your route over a perfect shop you never visit.",
    },
    {
      title: "Ignoring budget while rebuilding a homeland pantry overnight",
      body: "Buying everything in week one can shock the monthly food picture.",
      advice: "Phase must-haves across a month; use Cheap groceries tactics for staples.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Indian supermarket shopping checklist",
    intro: "Use this before locking a long-term Indian pantry routine so specialty shopping stays calm and local.",
    items: [
      "One-page cuisine must-have list written",
      "Items marked aisle vs Indian specialty vs online",
      "Nearest large world-food aisle branch noted",
      "One Indian specialty shop mapped on your route",
      "Specialty hours saved (including Sunday patterns)",
      "Monthly batch habit scheduled for shelf-stable items",
      "Fridge space checked before fresh herbs, dairy and produce buys",
      "Shared-house staple rules agreed (if relevant)",
      "International bookmarked if non-Indian specialty is also needed",
      "Cheap groceries bookmarked if the bill is climbing",
      "Dutch and Shopping guides bookmarked for system and errand habits",
      "Essential apps bookmarked after primary sources are clear",
    ],
  },
  howTo: {
    heading: "How to build an Indian pantry in one month",
    steps: [
      {
        name: "Write your cuisine must-have list",
        text: "List up to ten products that unlock the Indian cooking you miss — spices, dal, rice, flours, pickles, snacks, pantry staples. Mark which you expect from a supermarket aisle vs specialty.",
      },
      {
        name: "Test one large world-food aisle",
        text: "Visit a larger full-service Albert Heijn, Jumbo or similar branch and tick what you find. Keep a short gap list for the rest.",
      },
      {
        name: "Map one Indian specialty shop",
        text: "Choose an Indian specialty format that matches your list and sits on a calm bike, tram or walk loop. Save its hours.",
      },
      {
        name: "Batch a depth run",
        text: "Shop the gap list once with a written plan. Prefer shelf-stable spices, dal and flours plus produce you will cook soon.",
      },
      {
        name: "Review and simplify",
        text: "After a month, keep the sources you actually reuse. Drop distant shops and impulse apps. Open Cheap groceries if spend needs a reset.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to shop Indian and South Asian specialty groceries in the Netherlands as an expat",
    description:
      "Practical steps for expats to source Indian and South Asian groceries in the Netherlands using world-food aisles, specialty shop and supermarket formats, first-visit preparation and optional delivery — without relying on fake store rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best Indian supermarket in the Netherlands?",
      a: "There is no universal best Indian supermarket. Most expats combine a larger full-service world-food aisle with one Indian specialty shop or specialty supermarket for depth. Your best mix depends on cuisine, neighbourhood and how often you need each product — not a national award list.",
    },
    {
      q: "What is an Indian specialty shop or specialty supermarket in the Netherlands?",
      a: "In Dutch everyday speech, toko often means a specialty grocery. For Indian and South Asian cooking you will usually meet dedicated Indian specialty shops and larger Indian supermarkets — sometimes mixed South Asian groceries. Formats range from compact neighbourhood shops to larger specialty stores with wider spice, dal and flour ranges. Treat the labels as orientation, not a legal category.",
    },
    {
      q: "Do Albert Heijn and Jumbo sell Indian ingredients?",
      a: "Larger branches often have useful Indian and South Asian world-food lines for spices, sauces, basmati rice and snacks. Express shops may be thinner. Treat this as orientation and verify your branch — assortments change.",
    },
    {
      q: "How is this different from International supermarkets?",
      a: "International is the broad sourcing map across many cuisines and specialty types. This page owns Indian grocery depth — formats, categories, first-visit tips and city patterns for Indian and South Asian cooking.",
    },
    {
      q: "How is this different from Best or Cheap groceries?",
      a: "Best helps you choose among supermarket fits. Cheap focuses on spending less. This page focuses on Indian specialty shopping — though the three often meet when you choose a weekly store and protect the bill.",
    },
    {
      q: "How is this different from Dutch supermarkets?",
      a: "Dutch supermarkets explains the system: formats, hours, bags, self-scan orientation, loyalty and weekly rhythm. This page focuses on Indian specialty shops inside and beyond that system.",
    },
    {
      q: "Are Indian specialty shop shops cheaper than supermarket world-food aisles?",
      a: "Sometimes for bulk spices, dal, flours and certain homeland staples — sometimes not for items the supermarket already stocks well. Compare your real must-haves rather than assuming one source always wins.",
    },
    {
      q: "Do you rank or rate Indian grocery stores?",
      a: "No. We avoid fake awards, star ratings and invented directories. Soft provider links are optional tools for everyday grocery modelling, not a podium for Indian specialty markets.",
    },
  ],
  relatedGuides: [
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Broad sourcing map for non-Dutch products across many specialty types.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "East and Southeast Asian toko depth — separate specialty lane from Indian.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Turkish and Middle-Eastern specialty depth — separate specialty lane from Indian.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "South African specialty shops and comfort-food depth — separate specialty lane from Indian.",
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
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Choose the supermarket fit that matches your household — including international priorities.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Spend less when specialty sourcing and staples share one budget.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "How the supermarket system works day to day.",
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
      description: "Debit and contactless norms in shops and markets.",
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
    {
      label: "Daily life",
      href: LIVING_DAILY_LIFE_PATH,
      status: "live",
      description: "Everyday routines around shopping and payments.",
    },
  ] satisfies GuideLink[],
  foodHub: {
    heading: "Food & daily groceries hub",
    intro: "Keep Indian specialty depth connected to the broad international map, fit choice, saving tactics, the system primer, errand guide and wider Living cluster.",
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
        description: "Money-saving tactics across formats.",
      },
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Broad sourcing map for non-Dutch products.",
      },
      {
        label: "Indian supermarkets",
        href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — Indian and South Asian specialty grocery depth.",
      },
      {
        label: "South African shops",
        href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
        status: "live",
        description: "South African specialty shops and comfort-food depth — separate specialty lane.",
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
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Turkish and Middle-Eastern specialty grocery depth — separate specialty lane.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "East and Southeast Asian toko and supermarket specialty depth.",
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
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Widen beyond Indian specialty into the full sourcing map.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Switch to East and Southeast Asian toko specialty depth when needed.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Switch to Turkish and Middle-Eastern specialty depth when needed.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "Switch to South African specialty shops when needed.",
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
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Match international or other priorities to a supermarket fit.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the bill while building an Indian pantry.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "Learn formats, hours, bags and self-scan orientation.",
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
      description: "Pay confidently at Dutch tills and markets.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Place food spend in the monthly picture.",
    },
    {
      label: "Daily life",
      href: LIVING_DAILY_LIFE_PATH,
      status: "live",
      description: "Everyday routines around shopping and payments.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "International owns the broad specialty map — short-orient Indian there, deepen here; Asian owns East/SE Asian toko depth; Turkish owns Middle-Eastern specialty.",
    "Best owns fit choice — including international as a priority axis.",
    "Cheap owns saving tactics when specialty shopping raises spend.",
    "Dutch owns the system primer — formats, hours, bags, self-scan.",
  ],
  foodHubTips: [
    "Use this page for Indian specialty depth; International for the broad map; Asian for East/SE Asian; Turkish for Middle-Eastern; Best for choice; Cheap for savings; Dutch for system; Shopping for errands.",
    "All Food Cluster peers are live — link them with status live, never comingSoon for scheduling.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Soft provider CTAs are tools — never Indian-store podiums.",
  ],
  exploreNextTips: [
    "Open International, Asian or Turkish next if you also need other specialty sources.",
    "Open Best next if you still need a primary weekly store fit.",
    "Open Cheap groceries if Indian specialty sourcing is raising the bill.",
    "Open Dutch or Shopping if hours, bags and errands still feel new.",
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
      description: "Netherlands Nutrition Centre — useful for food and pantry orientation.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Example full-service retailer — verify Indian and South Asian world-food ranges at your branch.",
    },
    {
      label: "Jumbo",
      href: "https://www.jumbo.com/",
      description: "Example full-service retailer — verify international aisle stock locally.",
    },
    {
      label: "Plus",
      href: "https://www.plus.nl/",
      description: "Example full-service retailer — assortment varies by branch size.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "Example delivery supermarket — search Indian and South Asian world-food lines for your postcode.",
    },
  ],
  disclosure:
    "General information only. Not shopping, dietary, financial or consumer-rights advice and not a ranking, award list, star-rating or directory of Indian specialty markets. Assortments, prices, hours and delivery coverage change. Verify current details with retailers and local shops. Some outbound links may be affiliate or referral links.",
} as const;
