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
export type TacticRow = { lever: string; whatItMeans: string; tip: string };
export type DecisionRow = { situation: string; useThis: string; why: string; watchOut: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "asian-supermarkets-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const asianSupermarketsNetherlandsPage = {
  slug: "asian-supermarkets-netherlands",
  path: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ASIAN_SUPERMARKETS_NETHERLANDS_PATH) ?? "2026-09-21",
  seo: {
    title: "Asian Supermarkets Netherlands | Toko & Grocery Guide for Expats",
    description:
      "Shop Asian groceries in the Netherlands with confidence — toko and Asian supermarket formats, common product categories, city patterns and first-visit tips. Deep specialty guide for East and Southeast Asian cooking, not a broad international map or ranked store awards.",
    keywords: [
      "Asian supermarket Netherlands",
      "Asian grocery store Netherlands",
      "toko Netherlands",
      "Asian toko Netherlands",
      "Chinese supermarket Netherlands",
      "Korean grocery Netherlands",
      "Japanese supermarket Netherlands",
      "Southeast Asian supermarket Netherlands",
      "Asian food shopping Netherlands",
      "expat Asian groceries Netherlands",
      "where to buy Asian ingredients Netherlands",
      "Asian market Amsterdam Rotterdam",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Asian supermarkets Netherlands",
    subtitle:
      "A practical deep guide to Asian grocery shopping — toko and supermarket formats, product categories, city patterns and first-visit tips — not a ranked awards list and not the broad international sourcing map.",
    primaryCta: { label: "Open formats map", href: "#formats" },
    secondaryCta: { label: "Open International map", href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH },
    chips: ["Toko formats", "Product categories", "First visit", "City patterns", "Aisle vs specialty", "Batch shopping"],
    disclaimer:
      "General orientation only — not shopping, dietary or consumer advice and not a ranking of Asian stores or chains. Assortments, hours and neighbourhood coverage change by city and shop. Verify current stock in person or on retailer sites. Soft provider links below are optional everyday grocery tools, not “best Asian supermarket” winners. Naming cuisine types is orientation, not an official directory.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table: newcomers unpacking Asian specialty produce, noodles, sauces and spice pastes beside a handwritten shopping list, soft canal light through a window, welcoming Asian-pantry mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#formats", label: "Formats" },
    { href: "#categories", label: "Categories" },
    { href: "#first-visit", label: "First visit" },
    { href: "#decision", label: "Aisle vs toko" },
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
      "Premium orientation board titled Asian Toko Depth Not Rankings — four levers: formats, categories, first visit, city route — Checklist rail, Dutch canal market skyline and ExpatLife brand footer.",
      "Asian grocery shopping is a specialty depth guide — not a national #1 Asian-store award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Asian shopping levers — toko formats, product categories, first-visit tips, aisle vs specialty, city patterns, batch pantry — Dutch market band and ExpatLife brand footer.",
      "Six levers explain almost every “Asian supermarket Netherlands” search for newcomers."
    ),
    formats: visual(
      "formats",
      "Premium formats diagram — compact toko, larger Asian supermarket, produce-forward market stall and mixed diaspora shop linked to one calm shopping plan — Dutch street-front desk, General information only rail.",
      "Match the shop format to your list — not every Asian grocery is the same size or depth."
    ),
    categories: visual(
      "categories",
      "Premium category desk scene — sauces, noodles, rice, produce, frozen seafood and snacks on labelled trays — Dutch kitchen light, Verify freshness rail.",
      "Know the category map before you shop so the first visit stays calm and list-led."
    ),
    firstVisit: visual(
      "first-visit",
      "Premium first-visit checklist clipboard on an Asian grocery counter — list written, bags ready, payment card, produce plan — Dutch city shopfront light and ExpatLife brand footer.",
      "A prepared first visit beats wandering every aisle without a plan."
    ),
    decision: visual(
      "decision",
      "Premium decision board — six kitchen situations matched to world-food aisle, Asian toko or mixed sourcing — no star ratings, Dutch canal skyline band and ExpatLife brand footer.",
      "Match your product job to aisle or Asian specialty — never to a fabricated “best Asian supermarket” score."
    ),
    pantry: visual(
      "pantry",
      "Premium pantry-batch board — shelf-stable sauces, noodles and spices tagged monthly; fresh produce tagged cook-soon — Dutch apartment kitchen, General information only rail.",
      "Batch shelf-stable Asian staples monthly; buy fresh produce close to cooking day."
    ),
    cities: visual(
      "cities",
      "Premium city-route map board — Amsterdam, Rotterdam, The Hague and Utrecht Asian grocery patterns on one calm bike loop — Dutch canal skyline, Verify local hours rail.",
      "City and district reality beats national “famous toko” lists."
    ),
    delivery: visual(
      "delivery",
      "Premium phone-and-parcel scene — supermarket delivery basket, Asian specialty online note, fees checklist — Dutch kitchen table with list and ExpatLife brand footer.",
      "Online helps shelf-stable gaps — freshness and discovery still favour in-person toko trips."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — Chinese/Taiwanese pantry, Korean cooking, Japanese staples, Southeast Asian depth, South Asian spices, student shared kitchen — Dutch canal window light and ExpatLife brand footer.",
      "Start from your cuisine story, then pick one Asian specialty experiment this month."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — expecting one mega Asian chain, buying staples only at toko prices, no list, ignoring hours, overbuying produce — Fix notes and Dutch market skyline.",
      "Most Asian-pantry friction comes from wrong format choice and unplanned trips — not from missing a secret chain."
    ),
    checklist: visual(
      "checklist",
      "Premium Asian-shopping checklist clipboard — cuisine list written, nearest toko mapped, hours saved, monthly batch planned — Dutch kitchen table scene.",
      "Use this checklist so “Asian supermarket” becomes a calm specialty habit."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Write a cuisine must-have list before hunting every “Asian supermarket” post.",
        "Use mainstream world-food aisles for frequent sauce top-ups; toko for depth and produce.",
        "Batch specialty trips monthly when possible — protect time and fridge space.",
        "Open International for the broad sourcing map; Best for fit; Cheap for saving; Dutch for system habits.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Toko formats and product categories are different levers — learn both.",
        "First-visit preparation beats impulse wandering.",
        "City patterns decide access more than viral store threads.",
        "No section here is a star rating or award claim.",
      ],
    },
    formats: {
      title: "Format cues",
      items: [
        "Compact toko shops often win on sauces, noodles and packaged staples.",
        "Larger Asian supermarkets may add frozen, produce and wider brand depth.",
        "Produce-forward markets shine for herbs and vegetables you cook soon.",
        "Ask neighbours for current shops — coverage changes faster than static lists.",
      ],
    },
    categories: {
      title: "Category cues",
      items: [
        "Sauces, noodles, rice and pastes are the usual first-week wins.",
        "Fresh produce and herbs belong close to cooking day.",
        "Frozen seafood and specialty proteins need fridge/freezer space planning.",
        "Nostalgia snacks are fine — budget them so staples stay calm.",
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
        "Match the product job to aisle vs Asian specialty.",
        "Mixed kitchens usually need both weekly aisle and monthly toko.",
        "Revisit after you know your real commute and fridge space.",
        "International map helps if you also need non-Asian specialty sources.",
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
        "A toko on your bike or tram loop beats a distant “famous” shop.",
        "Smaller towns may need monthly city specialty runs.",
        "Open Shopping & groceries for errand and delivery timing depth.",
      ],
    },
    delivery: {
      title: "Delivery cues",
      items: [
        "Supermarket delivery can include some Asian world-food lines — verify your postcode.",
        "Specialty online shops help shelf-stable gaps — check fees and freshness.",
        "Compare total cost including fees with one calm toko trip.",
        "Essential apps places grocery tools in a newcomer install order.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your cuisine story, not a viral store thread.",
        "First month: cover must-haves; deepen specialty later.",
        "Students: share specialty runs and protect fridge space.",
        "South Asian kitchens may combine Asian toko with other specialty spice shops — map both calmly.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Expecting one mega Asian chain creates frustration.",
        "Buying milk and basic pasta only at toko prices raises the bill.",
        "Specialty trips without a list create waste.",
        "Ignoring Sunday hours wastes a planned cooking weekend.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Cuisine must-have list written before you leave home.",
        "Nearest Asian toko or supermarket mapped on your route.",
        "Hours saved including Sunday patterns.",
        "Monthly batch habit set for shelf-stable depth items.",
      ],
    },
  },
  quickAnswer: {
    heading: "Asian grocery shopping is specialty depth — not one perfect supermarket",
    summary:
      "In the Netherlands, Asian cooking usually means a mix: larger Albert Heijn or Jumbo world-food aisles for frequent sauce and noodle top-ups, plus Asian toko and supermarket shops for produce, niche brands and deeper East or Southeast Asian ranges — not crowning a single “best Asian supermarket”.",
    bullets: [
      "Start with a short cuisine must-have list — sauces, noodles, rice, produce, snacks — before hunting shops.",
      "Learn toko vs larger Asian supermarket formats so the first visit matches your list.",
      "Use mainstream world-food aisles for weekly gaps; Asian specialty for depth and freshness.",
      "This page owns the Asian specialty lane; International owns the broad sourcing map; Best owns fit; Cheap owns saving tactics; Dutch owns the system.",
    ],
    note: "If you only do one thing: write ten Asian must-have products, check them once in your nearest large world-food aisle, and map one Asian toko or supermarket for the rest.",
  },
  introParagraphs: [
    "Expats search “Asian supermarket Netherlands” hoping for one store that replaces a homeland pantry. Dutch grocery life rarely works that way: full-service chains carry growing Asian world-food lines, while toko shops and larger Asian supermarkets fill the gaps that aisles only partially cover — sauces, noodles, specialty produce, frozen goods and homeland brands.",
    "This guide is the Asian specialty deep dive. It explains formats you will meet, common product categories, how to prepare for a first visit, how city patterns differ, and when a world-food aisle is enough — without fake rankings or inventing official store directories.",
    "Use International when you need the broad map across Middle Eastern, Latin, African, British and other specialty sources. Use Best when the question is which overall supermarket fit to choose. Use Cheap when the question is spending less. Use Dutch for formats, hours, bags and self-scan. Stay here when the question is Asian grocery shopping specifically.",
  ],
  introHighlights: [
    "Asian specialty depth — toko formats and categories, not awards",
    "First-visit preparation so the shop feels calm",
    "City and route patterns that beat viral lists",
    "Soft grocery-provider CTAs only as optional tools — never as rankings",
  ],
  starterChecklist: [
    "Write a one-page Asian must-have list (sauces, noodles, rice, produce, snacks)",
    "Note the nearest large full-service branch with a world-food aisle",
    "Map one Asian toko or supermarket on a calm bike or tram loop",
    "Separate weekly aisle top-ups from monthly specialty depth buys",
    "Check fridge and freezer space before the first specialty run",
    "Save specialty hours (including Sunday patterns)",
    "Bookmark International if you also need non-Asian specialty sources",
    "Bookmark Cheap groceries if specialty shopping is raising the bill",
  ],
  orientationFlowSteps: [
    "Write your cuisine must-have list",
    "Test one world-food aisle branch",
    "Map one Asian toko or supermarket",
    "Batch depth buys, then review",
  ],
  snapshotTips: [
    "Snapshot cards are shopping levers — not scores.",
    "Combine aisle + Asian specialty in month one for most kitchens.",
    "Re-check after you know your real commute and neighbourhood.",
  ],
  snapshotSignals: [
    {
      label: "Weekly gaps",
      value: "World-food aisle",
      note: "Larger full-service branches often cover frequent Asian sauces and noodles.",
    },
    {
      label: "Depth buys",
      value: "Asian toko",
      note: "Toko and Asian supermarket shops win on produce, niche brands and breadth.",
    },
    {
      label: "Must-haves",
      value: "Short list",
      note: "A deliberate cuisine list beats browsing every “Asian supermarket” post.",
    },
    {
      label: "Access",
      value: "Route reality",
      note: "A nearby good-enough shop beats a distant famous one you never reach.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Toko & Asian supermarket formats",
      body: "Best when you need to know what size and depth of Asian shop you are walking into — compact toko vs larger supermarket vs produce-forward market.",
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
      body: "Best when you decide which Asian items stay in the weekly supermarket and which need a toko run.",
    },
    {
      title: "City & route patterns",
      body: "Best when you map Asian shops onto your real weekly loop — Amsterdam, Rotterdam, The Hague and Utrecht each feel different.",
    },
    {
      title: "Batch pantry & delivery",
      body: "Best when you protect fridge space and time with monthly shelf-stable runs and optional online top-ups.",
    },
  ] satisfies TipCard[],
  formats: {
    heading: "What to expect: toko and Asian supermarket formats",
    intro:
      "“Asian supermarket” in the Netherlands covers several formats. Naming them here is orientation so your first visit matches your list — not a ranked directory of chains.",
    paragraphs: [
      "A compact toko is often a neighbourhood Asian grocery with strong packaged depth — sauces, noodles, snacks, some produce and frozen — in a smaller footprint. Larger Asian supermarkets may feel closer to a full specialty supermarket with wider aisles, more frozen and produce, and broader brand ranges.",
      "You may also meet produce-forward market stalls or mixed diaspora shops that carry Asian lines alongside Surinamese, Indonesian or other community staples. Coverage depends on city and district; ask neighbours and colleagues for current favourites.",
      "Payment, bag and queue habits still follow Dutch everyday norms. Bring reusable bags, expect debit or contactless at many tills, and verify hours — specialty shops often differ from chain supermarket Sunday patterns.",
    ],
    rows: [
      {
        lever: "Compact toko",
        whatItMeans: "Smaller Asian grocery focused on packaged staples and selected fresh/frozen.",
        tip: "Ideal for sauces, noodles and snacks when you already have a short list.",
      },
      {
        lever: "Larger Asian supermarket",
        whatItMeans: "Broader specialty supermarket format with more produce, frozen and brand depth.",
        tip: "Useful for monthly depth runs when fridge and freezer space allow.",
      },
      {
        lever: "Produce-forward stop",
        whatItMeans: "Market or shop strong on herbs, vegetables and cook-soon freshness.",
        tip: "Shop close to cooking day; avoid filling the fridge “just in case”.",
      },
      {
        lever: "Mixed diaspora grocery",
        whatItMeans: "Community shops carrying Asian lines beside other cuisine staples.",
        tip: "Orientation example only — verify what your local shop actually stocks.",
      },
      {
        lever: "World-food aisle partner",
        whatItMeans: "Large AH/Jumbo-style aisle for frequent top-ups between specialty trips.",
        tip: "Keep weekly staples here so the toko stays a depth tool, not a dairy aisle.",
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
        body: "Knowing whether you need a compact toko or a larger specialty supermarket matters more than chasing a viral shop name.",
      },
      {
        title: "No invented directories",
        body: "This guide will not invent official Asian-store rankings or fake “top 10 toko” awards. Verify shops in your neighbourhood.",
      },
      {
        title: "Link the sibling guides",
        body: "International owns the broad map; Best chooses fit; Cheap saves money; Dutch explains the system — this page stays on Asian specialty depth.",
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
    heading: "Common Asian product categories",
    intro:
      "A calm first visit starts with category awareness. Use this map to organise your list — not as a claim that every shop stocks every item.",
    paragraphs: [
      "Frequent first-month wins: cooking sauces and pastes, soy and fish sauces, chili oils, noodles, rice varieties, tofu and tempeh lines, canned coconut milk, and packaged snacks or tea.",
      "Fresh herbs, specialty vegetables, frozen dumplings or seafood, and specific homeland brands often need an Asian specialty stop. Assortments change — verify in person.",
      "South Asian spice depth sometimes sits across Asian toko shelves and other specialty spice shops. If your kitchen is primarily South Asian, map both calmly rather than forcing one store to do everything.",
    ],
    rows: [
      {
        lever: "Sauces & pastes",
        whatItMeans: "Soy, fish sauce, oyster sauce, chili pastes, curry pastes, miso.",
        tip: "Try the world-food aisle for frequent bottles; toko for niche brands and sizes.",
      },
      {
        lever: "Noodles & rice",
        whatItMeans: "Rice varieties, rice noodles, wheat noodles, glass noodles, wrappers.",
        tip: "Buy sizes you will finish; share bulk in student houses.",
      },
      {
        lever: "Produce & herbs",
        whatItMeans: "Asian greens, herbs, chilies, specialty vegetables.",
        tip: "Buy amounts you will cook within a few days.",
      },
      {
        lever: "Frozen & proteins",
        whatItMeans: "Dumplings, specialty seafood, tofu/tempeh lines.",
        tip: "Check freezer space before a big specialty run.",
      },
      {
        lever: "Snacks & drinks",
        whatItMeans: "Homeland snacks, teas, soft drinks, sweets.",
        tip: "Budget a small joy line so staples stay affordable.",
      },
      {
        lever: "Cookware extras",
        whatItMeans: "Some larger shops stock utensils, rice cookers accessories or pantry tools.",
        tip: "Orientation only — compare with general household shops if prices feel high.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "List by category, not by aisle hope",
        body: "Grouping must-haves by category makes both aisle checks and toko trips faster.",
      },
      {
        title: "Fresh vs shelf-stable rhythm",
        body: "Shelf-stable sauces travel well on monthly runs; produce belongs close to cooking day.",
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
    heading: "Tips for your first Asian toko visit",
    intro:
      "A prepared first visit turns an unfamiliar shop into a calm specialty stop. Bring a list, bags and a simple produce plan.",
    paragraphs: [
      "Walk the store once to learn the layout before filling the basket. Many compact toko shops are dense — knowing where sauces, noodles, produce and frozen sit saves time.",
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
        tip: "Heavy rice and sauce bottles need a calm route home.",
      },
      {
        lever: "Produce plan",
        whatItMeans: "Know which meals you will cook in the next few days.",
        tip: "Buy herbs and greens against that plan only.",
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
        body: "A short list and one layout walk prevent impulse overbuying in compact toko aisles.",
      },
      {
        title: "Protect fridge space",
        body: "First visits often fail because produce fills the fridge before you have cooking plans.",
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
    heading: "When to use the aisle vs an Asian toko",
    intro:
      "Use this decision board to match your product need to a source type — without crowning a best Asian supermarket or inventing scores.",
    paragraphs: [
      "Most households only need two sources in the first month: a reliable world-food aisle and one Asian specialty stop. Add more after you know what you actually repurchase.",
      "If your problem is really “which supermarket should be my weekly anchor?”, switch to Best. If your problem is “where do I find Asian ingredients?”, stay on this page. If you also need Middle Eastern, Latin or British specialty sources, open International.",
    ],
    rows: [
      {
        situation: "Need soy sauce, noodles or coconut milk twice a month",
        useThis: "Large full-service world-food aisle",
        why: "Fits the weekly shop without a specialty detour.",
        watchOut: "Express shops may be too thin — try a larger branch.",
      },
      {
        situation: "Need specialty produce, herbs or niche homeland brands",
        useThis: "Asian toko or larger Asian supermarket",
        why: "Aisles rarely match freshness, breadth or specific brands.",
        watchOut: "Batch the trip; do not redesign every week around it.",
      },
      {
        situation: "Frozen dumplings or specialty seafood restock",
        useThis: "Asian supermarket with freezer depth",
        why: "Chain aisles often stock thin frozen specialty ranges.",
        watchOut: "Check freezer space at home before buying bulk.",
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
        situation: "Also need non-Asian specialty items",
        useThis: "International sourcing map + this Asian guide",
        why: "Keeps Asian depth here while other cuisines stay on the broad map.",
        watchOut: "Do not force one Asian shop to cover every cuisine.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Two sources, then review",
        body: "Stacking every Asian district at once creates friction. Pick aisle + one toko, measure a month, then add.",
      },
      {
        title: "No fabricated scores",
        body: "This board matches situations to source types — never to star ratings or #1 claims.",
      },
      {
        title: "Fit vs Asian depth",
        body: "Wrong weekly store fit is a Best problem; missing Asian ingredients inside a workable week is this page.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Broad map when Asian depth is only one of several specialty needs.",
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
    heading: "Batch your Asian pantry calmly",
    intro:
      "A calm Asian kitchen separates monthly shelf-stable depth from cook-soon produce. Batch the first; time the second.",
    paragraphs: [
      "Shelf-stable must-haves — sauces, pastes, noodles, rice, snacks — travel well on a monthly specialty run. Fresh herbs and specialty vegetables belong closer to cooking day.",
      "Label and date bulk spice or flour bags. Specialty sizes last longer when transferred to jars at home.",
      "If the bill climbs, Cheap groceries helps you protect staples with private label and waste habits while still funding a few homeland must-haves.",
    ],
    rows: [
      {
        lever: "Monthly shelf-stable",
        whatItMeans: "Sauces, pastes, noodles, rice, snacks, tea.",
        tip: "One list-led specialty run every two to four weeks.",
      },
      {
        lever: "Cook-soon produce",
        whatItMeans: "Herbs, greens, chilies, specialty vegetables.",
        tip: "Buy against this week’s meals only.",
      },
      {
        lever: "Freezer buffer",
        whatItMeans: "Dumplings and specialty frozen items.",
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
        body: "Asian depth and budget can coexist — assign expensive items to monthly, not weekly, rhythm.",
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
      "Asian grocery access is highly local. A good toko on your bike loop beats a famous shop across town that you never visit twice.",
    paragraphs: [
      "Larger cities — Amsterdam, Rotterdam, The Hague, Utrecht and others — usually offer denser Asian grocery options, but coverage varies by district. Smaller towns may rely more on one large full-service world-food aisle plus occasional city specialty trips.",
      "Build a simple route map: weekly supermarket, deeper world-food branch if different, and one Asian specialty stop. Save hours for Sundays and holidays.",
      "Ask local networks for current recommendations. Community knowledge updates faster than any static “best Asian supermarket” article.",
    ],
    rows: [
      {
        lever: "Bike / tram loop",
        whatItMeans: "Shops you can reach without a special weekend expedition.",
        tip: "Prefer good-enough nearby over perfect-and-distant.",
      },
      {
        lever: "District clusters",
        whatItMeans: "Streets where several Asian or mixed specialty groceries sit near each other.",
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
        body: "A toko on your commute will shape your cooking more than a viral Amsterdam list if you live elsewhere.",
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
    heading: "Delivery and online Asian options",
    intro:
      "Delivery and online shops can cover some Asian gaps — especially shelf-stable items — but they do not automatically replace toko trips for freshness and discovery.",
    paragraphs: [
      "Main supermarket delivery apps sometimes include Asian world-food lines available at your local branch assortment. Coverage and stock still depend on postcode and warehouse reality.",
      "Specialty web shops can help with packaged Asian products. Check shipping fees, minimums and expiry expectations before treating them as your primary pantry.",
      "Time-poor weeks may justify delivery for staples while specialty waits for a calm weekend. Compare full totals — fees included — with one list-led toko trip.",
    ],
    rows: [
      {
        lever: "Supermarket delivery",
        whatItMeans: "Asian world-food lines inside your usual delivery basket.",
        tip: "Search your must-haves in the app for your postcode before assuming stock.",
      },
      {
        lever: "Specialty web shops",
        whatItMeans: "Asian or import-focused online groceries.",
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
        body: "Sauces, snacks and packaged staples are the safest online Asian wins.",
      },
      {
        title: "Apps are tools, not winners",
        body: "Soft provider links later are optional modelling tools — not a podium for the “best” Asian delivery app.",
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
      "Soft CTAs for established supermarket and delivery patterns when you are modelling everyday food sourcing alongside Asian pantry needs. This block is not a ranking of Asian stores or a “best toko” podium.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for everyday grocery modelling — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent Asian-store directories here.",
    placementId: "nl-living-asian-supermarkets-support-providers",
    analyticsPageContext: "asian-supermarkets-netherlands-recommended-options",
    categoryLinks: [
      { href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH, label: "International sourcing map" },
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common Asian-shopping scenarios",
    intro: "Match your cuisine story to a calm first experiment — then deepen in the sections above.",
    rows: [
      {
        situation: "Chinese / Taiwanese pantry rebuild",
        approach: "Aisle for frequent sauces; Asian toko for produce, noodles and niche brands.",
        firstStep: "Write ten must-haves; check the aisle this week; map one toko.",
      },
      {
        situation: "Korean cooking depth",
        approach: "Aisle for common sauces; specialty for gochujang depth, produce and snacks.",
        firstStep: "Batch one specialty run with a written list.",
      },
      {
        situation: "Japanese staples",
        approach: "Aisle for soy and noodles; specialty for rice varieties, miso depth and snacks.",
        firstStep: "Mark aisle vs specialty on your must-have list.",
      },
      {
        situation: "Southeast Asian cooking",
        approach: "Specialty for pastes, herbs and produce; aisle for coconut milk and frequent sauces.",
        firstStep: "Plan produce against this week’s meals only.",
      },
      {
        situation: "South Asian spice kitchen",
        approach: "Combine Asian toko lines with other specialty spice shops when needed.",
        firstStep: "Map two sources calmly; do not force one shop to cover everything.",
      },
      {
        situation: "Student shared kitchen",
        approach: "Shared specialty run + aisle staples; clear fridge rules.",
        firstStep: "Agree shared sauces; schedule one monthly specialty trip.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Expecting one mega Asian supermarket chain",
      body: "Dutch Asian grocery life is usually a mix of aisle + toko — waiting for a single perfect store delays cooking.",
      advice: "Build aisle + one specialty stop in month one; refine later.",
    },
    {
      title: "Buying everyday staples only at toko prices",
      body: "Specialty shops are powerful for depth — expensive if used for milk, eggs and basic pasta you can buy anywhere.",
      advice: "Assign weekly staples to mainstream shops; specialty for true Asian gaps.",
    },
    {
      title: "First visit without a list",
      body: "Dense toko aisles reward impulse — and create waste.",
      advice: "Write must-haves; leave nice-to-haves for a second visit.",
    },
    {
      title: "Overbuying specialty produce",
      body: "Herbs and greens spoil when bought “just in case”.",
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
    heading: "Asian supermarket shopping checklist",
    intro: "Use this before locking a long-term Asian pantry routine so specialty shopping stays calm and local.",
    items: [
      "One-page cuisine must-have list written",
      "Items marked aisle vs Asian specialty vs online",
      "Nearest large world-food aisle branch noted",
      "One Asian toko or supermarket mapped on your route",
      "Specialty hours saved (including Sunday patterns)",
      "Monthly batch habit scheduled for shelf-stable items",
      "Fridge and freezer space checked before depth buys",
      "Shared-house sauce rules agreed (if relevant)",
      "International bookmarked if non-Asian specialty is also needed",
      "Cheap groceries bookmarked if the bill is climbing",
      "Dutch and Shopping guides bookmarked for system and errand habits",
      "Essential apps bookmarked after primary sources are clear",
    ],
  },
  howTo: {
    heading: "How to build an Asian pantry in one month",
    steps: [
      {
        name: "Write your cuisine must-have list",
        text: "List up to ten products that unlock the Asian cooking you miss — sauces, noodles, rice, produce, snacks. Mark which you expect from a supermarket aisle vs specialty.",
      },
      {
        name: "Test one large world-food aisle",
        text: "Visit a larger full-service Albert Heijn, Jumbo or similar branch and tick what you find. Keep a short gap list for the rest.",
      },
      {
        name: "Map one Asian toko or supermarket",
        text: "Choose a format that matches your list and sits on a calm bike, tram or walk loop. Save its hours.",
      },
      {
        name: "Batch a depth run",
        text: "Shop the gap list once with a written plan. Prefer shelf-stable bulk and produce you will cook soon.",
      },
      {
        name: "Review and simplify",
        text: "After a month, keep the sources you actually reuse. Drop distant shops and impulse apps. Open Cheap groceries if spend needs a reset.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to shop Asian supermarkets and toko groceries in the Netherlands as an expat",
    description:
      "Practical steps for expats to source Asian groceries in the Netherlands using world-food aisles, Asian toko and supermarket formats, first-visit preparation and optional delivery — without relying on fake store rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best Asian supermarket in the Netherlands?",
      a: "There is no universal best Asian supermarket. Most expats combine a larger full-service world-food aisle with one Asian toko or specialty supermarket for depth. Your best mix depends on cuisine, neighbourhood and how often you need each product — not a national award list.",
    },
    {
      q: "What is a toko in the Netherlands?",
      a: "Toko usually refers to a specialty grocery — often Asian or Indonesian-influenced — that stocks packaged staples, sauces, noodles and selected fresh or frozen goods. Formats range from compact neighbourhood shops to larger Asian supermarket-style stores. Treat the word as orientation, not a legal category.",
    },
    {
      q: "Do Albert Heijn and Jumbo sell Asian ingredients?",
      a: "Larger branches often have useful Asian world-food lines for sauces, noodles, spices and snacks. Express shops may be thinner. Treat this as orientation and verify your branch — assortments change.",
    },
    {
      q: "How is this different from International supermarkets?",
      a: "International is the broad sourcing map across many cuisines and specialty types. This page owns Asian grocery depth — formats, categories, first-visit tips and city patterns for East and Southeast Asian cooking.",
    },
    {
      q: "How is this different from Best or Cheap groceries?",
      a: "Best helps you choose among supermarket fits. Cheap focuses on spending less. This page focuses on Asian specialty shopping — though the three often meet when you choose a weekly store and protect the bill.",
    },
    {
      q: "How is this different from Dutch supermarkets?",
      a: "Dutch supermarkets explains the system: formats, hours, bags, self-scan orientation, loyalty and weekly rhythm. This page focuses on Asian specialty shops inside and beyond that system.",
    },
    {
      q: "Are Asian toko shops cheaper than supermarket world-food aisles?",
      a: "Sometimes for bulk spices, produce and certain homeland staples — sometimes not for items the supermarket already stocks well. Compare your real must-haves rather than assuming one source always wins.",
    },
    {
      q: "Do you rank or rate Asian grocery stores?",
      a: "No. We avoid fake awards, star ratings and invented directories. Soft provider links are optional tools for everyday grocery modelling, not a podium for Asian specialty markets.",
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
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Turkish and Middle-Eastern specialty shopping — formats, pantry staples and first-visit tips.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Indian and South Asian specialty shopping — spices, staples, formats and first-visit tips.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "SA specialty shops and comfort foods — biltong, pantry staples and where to look.",
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
    intro: "Keep Asian specialty depth connected to the broad international map, fit choice, saving tactics, the system primer, errand guide and wider Living cluster.",
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
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — Asian toko and specialty grocery depth.",
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
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Widen beyond Asian specialty into the full sourcing map.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Compare with Turkish and Middle-Eastern specialty shopping.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Compare with Indian and South Asian specialty shopping.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "Compare with South African specialty shops and comfort foods.",
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
      description: "Protect the bill while building an Asian pantry.",
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
    "International owns the broad specialty map — short-orient Asian there, deepen here.",
    "Turkish, Indian and South African shops own sibling culture-specific specialty lanes.",
    "Best owns fit choice — including international as a priority axis.",
    "Cheap owns saving tactics when specialty shopping raises spend.",
  ],
  foodHubTips: [
    "Use this page for Asian specialty depth; International for the broad map; sibling specialty guides for other cuisines; Best for choice; Cheap for savings.",
    "All Food Cluster peers are live — link them with status live, never comingSoon for scheduling.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Soft provider CTAs are tools — never Asian-store podiums.",
  ],
  exploreNextTips: [
    "Open International next if you also need non-Asian specialty sources.",
    "Open Turkish, Indian or South African shops for sibling specialty lanes.",
    "Open Best next if you still need a primary weekly store fit.",
    "Open Cheap groceries if Asian specialty sourcing is raising the bill.",
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
      description: "Example full-service retailer — verify Asian world-food ranges at your branch.",
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
      description: "Example delivery supermarket — search Asian world-food lines for your postcode.",
    },
  ],
  disclosure:
    "General information only. Not shopping, dietary, financial or consumer-rights advice and not a ranking, award list, star-rating or directory of Asian specialty markets. Assortments, prices, hours and delivery coverage change. Verify current details with retailers and local shops. Some outbound links may be affiliate or referral links.",
} as const;
