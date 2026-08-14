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
const VISUAL_PREFIX = "international-supermarkets-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const internationalSupermarketsNetherlandsPage = {
  slug: "international-supermarkets-netherlands",
  path: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH) ?? "2026-09-21",
  seo: {
    title: "International Supermarkets Netherlands | Specialty Food Guide for Expats",
    description:
      "Find non-Dutch and international products in the Netherlands — world-food aisles at Albert Heijn and Jumbo, specialty and ethnic markets, and when to use which. Orientation map for expat kitchens, not rankings or an Asian-only deep dive.",
    keywords: [
      "international supermarket Netherlands",
      "international food Netherlands",
      "specialty supermarket Netherlands",
      "ethnic grocery store Netherlands",
      "world food aisle Netherlands",
      "expat food shopping Netherlands",
      "foreign products supermarket Netherlands",
      "Asian supermarket Netherlands",
      "Middle Eastern grocery Netherlands",
      "Latin American food Netherlands",
      "British products Netherlands",
      "international groceries Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "International supermarkets Netherlands",
    subtitle:
      "An orientation map for finding non-Dutch products — mainstream world-food aisles, specialty and ethnic markets, and when each source fits — not a ranked store awards list and not an Asian-only deep dive.",
    primaryCta: { label: "Open sourcing map", href: "#system" },
    secondaryCta: { label: "Open Best supermarket fit", href: BEST_SUPERMARKETS_NETHERLANDS_PATH },
    chips: ["World-food aisles", "Specialty markets", "Ethnic shops", "When to use which", "Pantry gaps", "City patterns"],
    disclaimer:
      "General orientation only — not shopping, dietary or consumer advice and not a ranking of chains or markets. Assortments, hours and neighbourhood coverage change by city and branch. Verify current stock on retailer sites or in person. Soft provider links below are optional tools, not “best international store” winners. For culture-specific specialty depth, open Asian, Turkish, Indian or South African shops guides; this page stays on the broad sourcing map.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table: multicultural newcomers unpacking specialty spices, noodles and sauces beside mainstream supermarket staples, canal light through a window, welcoming international-pantry mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#system", label: "Sourcing map" },
    { href: "#aisles", label: "World-food aisles" },
    { href: "#specialty", label: "Specialty markets" },
    { href: "#decision", label: "When to use which" },
    { href: "#pantry", label: "Pantry gaps" },
    { href: "#neighbourhood", label: "Neighbourhood" },
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
      "Premium orientation board titled Find Products Not Rankings — four sources: world-food aisles, specialty markets, ethnic neighbourhood shops, occasional online — Checklist rail, Dutch canal market skyline and ExpatLife brand footer.",
      "International shopping is a sourcing map — not a national #1 specialty-store award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of international sourcing levers — world-food aisles, specialty markets, ethnic shops, pantry must-haves, neighbourhood patterns, delivery — Dutch market band and ExpatLife brand footer.",
      "Six levers explain almost every “international supermarket Netherlands” search for newcomers."
    ),
    system: visual(
      "system",
      "Premium ecosystem diagram — weekly staples, world-food aisle top-up, specialty monthly run and ethnic neighbourhood stop linked to one calm pantry plan — Dutch kitchen desk, General information only rail.",
      "Most expat kitchens mix mainstream aisles with specialty stops — not one perfect international supermarket."
    ),
    aisles: visual(
      "aisles",
      "Premium supermarket aisle desk scene — world-food shelf notes, short must-have list, gap list for specialty later — Verify stock at your branch rail, Dutch full-service storefront light.",
      "Larger Albert Heijn and Jumbo branches often carry useful world-food depth for weekly gaps."
    ),
    specialty: visual(
      "specialty",
      "Premium specialty-market consultation scene — spice jars, noodles, sauces, produce crates on a market counter — Dutch city market street light, Checklist rail for monthly batch trips.",
      "Specialty and ethnic markets win when depth, freshness or homeland brands matter more than one-stop convenience."
    ),
    decision: visual(
      "decision",
      "Premium decision board — six kitchen situations matched to aisle, specialty or mixed sourcing — no star ratings, Dutch canal skyline band and ExpatLife brand footer.",
      "Match your product need to a source type — never to a fabricated “best international supermarket” score."
    ),
    pantry: visual(
      "pantry",
      "Premium pantry-map board — spices, sauces, grains, snacks and nostalgia items tagged aisle vs specialty — Dutch apartment kitchen, General information only rail.",
      "Write must-haves first — then decide which source covers each gap."
    ),
    neighbourhood: visual(
      "neighbourhood",
      "Premium city-route map board — weekly supermarket, world-food aisle branch, specialty stop and ethnic neighbourhood market on one calm bike loop — Dutch canal skyline, Verify local hours rail.",
      "Neighbourhood reality beats national store lists — map what you can reach calmly."
    ),
    delivery: visual(
      "delivery",
      "Premium phone-and-parcel scene — supermarket delivery basket, specialty online order note, fees checklist — Dutch kitchen table with list and ExpatLife brand footer.",
      "Delivery helps time-poor weeks — compare fees and freshness before replacing specialty trips."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — first week homesick pantry, Asian cooking depth, Middle Eastern staples, Latin flavours, British nostalgia, student shared kitchen — Dutch canal window light and ExpatLife brand footer.",
      "Start from your kitchen story, then pick one sourcing experiment this month."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — expecting one mega-store, skipping specialty, overpaying in shallow aisles, ignoring neighbourhood shops — Fix notes and Dutch market skyline.",
      "Most international-pantry friction comes from wrong source choice — not from missing a secret chain."
    ),
    checklist: visual(
      "checklist",
      "Premium international-sourcing checklist clipboard — must-have list written, nearest world-food aisle noted, specialty stop mapped, monthly batch planned — Dutch kitchen table scene.",
      "Use this checklist so “international supermarket” becomes a calm sourcing habit."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Write a short must-have list before hunting every specialty shop online.",
        "Use mainstream world-food aisles for frequent top-ups; specialty for depth.",
        "Batch specialty trips monthly when possible — protect time and fridge space.",
        "Open Best for fit choice; Cheap for saving tactics; Dutch for system habits; Shopping for errands.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "World-food aisles and specialty markets are different levers — use both calmly.",
        "Ethnic neighbourhood shops often beat shallow chain aisles on freshness and brands.",
        "Pantry must-haves decide the map — not viral “best international supermarket” posts.",
        "No section here is a star rating or award claim.",
      ],
    },
    system: {
      title: "System cues",
      items: [
        "One must-have list beats three impulse specialty apps.",
        "Weekly aisle + monthly specialty is a common calm pattern.",
        "Map branches near home or work — national lists hide access reality.",
        "Open Asian, Turkish, Indian or South African specialty guides for culture-specific depth; stay on the broad map here.",
      ],
    },
    aisles: {
      title: "Aisle cues",
      items: [
        "Larger full-service branches usually have deeper world-food sections than city express shops.",
        "Expect useful sauces, noodles, spices and snacks — not a full homeland supermarket.",
        "Keep a specialty gap list for items the aisle only partially covers.",
        "Open Dutch supermarkets for format and branch-size orientation.",
      ],
    },
    specialty: {
      title: "Specialty cues",
      items: [
        "Specialty markets shine on depth, produce, spices and homeland brands.",
        "Batch the trip with a written list so you do not overbuy perishables.",
        "Neighbourhood ethnic shops are orientation examples — not ranked winners.",
        "Payment and bag habits still follow Dutch everyday norms — see Payments and Dutch guides.",
      ],
    },
    decision: {
      title: "Decision cues",
      items: [
        "Match the product job to the source — weekly top-up vs monthly depth.",
        "Mixed kitchens usually need both aisle and specialty.",
        "Revisit after you know your real commute and fridge space.",
        "Best supermarkets helps if primary store fit is still unclear.",
      ],
    },
    pantry: {
      title: "Pantry cues",
      items: [
        "Separate must-haves from nice-to-haves before the first specialty run.",
        "Spices and shelf-stable sauces travel better than fragile produce.",
        "Nostalgia snacks are fine — budget them so staples stay calm.",
        "Cheap groceries helps when international sourcing starts raising the bill.",
      ],
    },
    neighbourhood: {
      title: "Neighbourhood cues",
      items: [
        "City districts differ — Amsterdam, Rotterdam, The Hague and Utrecht patterns vary.",
        "A specialty stop on your bike or tram loop beats a distant “famous” shop.",
        "Save hours for Sundays and holidays — patterns vary by shop type.",
        "Open Shopping & groceries for errand and delivery timing depth.",
      ],
    },
    delivery: {
      title: "Delivery cues",
      items: [
        "Supermarket delivery can include some world-food lines — verify your postcode.",
        "Specialty online and import shops help for shelf-stable gaps — check fees and freshness.",
        "Compare total cost including fees with one calm specialty trip.",
        "Essential apps places grocery tools in a newcomer install order.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your kitchen story, not a viral store thread.",
        "First month: cover must-haves; deepen specialty later.",
        "Culture-specific depth: short-orient here, then open Asian, Turkish, Indian or South African specialty guides.",
        "Students: share specialty runs and protect fridge space.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Expecting one mega international supermarket creates frustration.",
        "Skipping specialty when the aisle is shallow wastes money and taste.",
        "Buying everything specialty when the aisle would cover staples raises cost.",
        "Ignoring neighbourhood shops for distant “famous” lists burns time.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Must-have list written before you leave home.",
        "Nearest deeper world-food aisle branch noted.",
        "One specialty or ethnic stop mapped on your route.",
        "Monthly batch habit set for depth items.",
      ],
    },
  },
  quickAnswer: {
    heading: "International shopping is a sourcing map — not one perfect supermarket",
    summary:
      "In the Netherlands, finding non-Dutch products usually means combining sources: larger Albert Heijn or Jumbo world-food aisles for frequent top-ups, specialty and ethnic markets for depth and homeland brands, and occasional online or import options for shelf-stable gaps — not crowning a single “best international supermarket”.",
    bullets: [
      "Start with a short must-have list — spices, sauces, staples, snacks — before hunting shops.",
      "Use mainstream world-food aisles for weekly gaps; specialty markets for depth and freshness.",
      "Neighbourhood ethnic shops often beat shallow chain aisles for specific cuisines.",
      "This page owns the broad sourcing map; Best owns fit choice; Cheap owns saving tactics; Dutch owns the system; Asian owns East and Southeast Asian specialty depth.",
    ],
    note: "If you only do one thing: write ten must-have products, check them once in your nearest large full-service world-food aisle, and map one specialty or ethnic stop for the rest.",
  },
  introParagraphs: [
    "Expats search “international supermarket Netherlands” hoping for one store that replaces a homeland pantry. Dutch grocery life rarely works that way: Albert Heijn, Jumbo, Plus and other full-service chains carry growing world-food sections, while Asian, Middle Eastern, African, Latin American, Turkish, Polish, British and other specialty shops fill the gaps that aisles only partially cover.",
    "This guide is a sourcing orientation map. It explains when mainstream aisles are enough, when specialty markets repay the trip, how to plan neighbourhood routes, and how delivery fits — without fake rankings or inventing official store directories.",
    "Use Best supermarkets when the question is which overall store fit to choose. Use Cheap groceries when the question is spending less. Use Dutch supermarkets for formats, hours, bags and self-scan. Use Shopping & groceries for errand how-to. Stay here when the question is where to find non-Dutch products. Use Asian supermarkets for deeper East and Southeast Asian toko shopping — this page only short-orients that need.",
  ],
  introHighlights: [
    "Sourcing map — aisles, specialty and ethnic shops, not awards",
    "When to use which for weekly vs monthly pantry needs",
    "Pantry gap planning for multicultural kitchens",
    "Soft grocery-provider CTAs only as optional tools — never as rankings",
  ],
  starterChecklist: [
    "Write a one-page must-have list (spices, sauces, staples, snacks)",
    "Note the nearest large full-service branch with a world-food aisle",
    "Map one specialty or ethnic market on a calm bike or tram loop",
    "Separate weekly top-ups from monthly depth buys",
    "Check fridge and cupboard space before the first specialty run",
    "Bookmark Best supermarkets if primary store fit is still unclear",
    "Bookmark Cheap groceries if international sourcing is raising the bill",
    "Bookmark Dutch and Shopping guides for hours, bags and errand habits",
  ],
  orientationFlowSteps: [
    "Write a short must-have list",
    "Test one world-food aisle branch",
    "Map one specialty or ethnic stop",
    "Batch depth buys, then review",
  ],
  snapshotTips: [
    "Snapshot cards are sourcing levers — not scores.",
    "Combine aisle + specialty in month one for most kitchens.",
    "Re-check after you know your real commute and neighbourhood.",
  ],
  snapshotSignals: [
    {
      label: "Weekly gaps",
      value: "World-food aisle",
      note: "Larger full-service branches often cover frequent sauces, noodles and spices.",
    },
    {
      label: "Depth buys",
      value: "Specialty market",
      note: "Ethnic and specialty shops win on homeland brands, produce and breadth.",
    },
    {
      label: "Must-haves",
      value: "Short list",
      note: "A deliberate product list beats browsing every “international supermarket” post.",
    },
    {
      label: "Access",
      value: "Route reality",
      note: "A nearby good-enough shop beats a distant famous one you never reach.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Mainstream world-food aisles",
      body: "Best for frequent top-ups at larger Albert Heijn, Jumbo and similar full-service branches — useful depth, not a full homeland supermarket.",
    },
    {
      title: "Specialty & ethnic markets",
      body: "Best when you need broader cuisine ranges, fresher specialty produce, spices by the bag or specific homeland brands.",
    },
    {
      title: "Neighbourhood shops",
      body: "Best as walkable or bikeable stops in districts with Turkish, Moroccan, Surinamese, Asian, Polish or other community grocery clusters.",
    },
    {
      title: "Pantry must-haves",
      body: "Best when you write the ten products that make your cooking feel like home — then assign each to aisle or specialty.",
    },
    {
      title: "City & route patterns",
      body: "Best when you map shops onto your real weekly loop — Amsterdam, Rotterdam, The Hague and Utrecht each feel different.",
    },
    {
      title: "Delivery & online",
      body: "Best for shelf-stable gaps and time-poor weeks — compare fees and freshness before replacing specialty trips.",
    },
  ] satisfies TipCard[],
  system: {
    heading: "How international product sourcing usually works",
    intro:
      "Finding non-Dutch food in the Netherlands is usually a small system: must-have list → world-food aisle check → specialty gap fill → monthly rhythm. Treat each piece as a lever you can test for a month.",
    paragraphs: [
      "Start with what you actually cook. A must-have list for spices, sauces, noodles or grains, oils, snacks and a few nostalgia items beats a vague goal of “find an international supermarket”.",
      "Then choose sources: many households use a large full-service supermarket for weekly staples plus world-food aisle top-ups, and a specialty or ethnic market for monthly depth. That pattern is orientation — not a ranking of shops.",
      "Finally protect time and fridge space: specialty trips are powerful when batched. Two calm shopping weeks teach more than any viral store-recommendation thread.",
    ],
    rows: [
      {
        lever: "Must-have list",
        whatItMeans: "A short recurring set of homeland or cuisine staples.",
        tip: "Write ten items; mark aisle vs specialty guesses.",
      },
      {
        lever: "World-food aisle",
        whatItMeans: "Larger full-service branches with international sections.",
        tip: "Test one big branch near home or work first.",
      },
      {
        lever: "Specialty market",
        whatItMeans: "Ethnic, Asian, Middle Eastern, Latin, African or import shops.",
        tip: "Batch once or twice a month with a written list.",
      },
      {
        lever: "Neighbourhood stop",
        whatItMeans: "Walkable community groceries for fresh and frequent cuisine items.",
        tip: "Prefer shops on your existing bike or tram loop.",
      },
      {
        lever: "Online / delivery",
        whatItMeans: "Supermarket delivery world-food lines or specialty web shops.",
        tip: "Use for shelf-stable gaps; verify fees and freshness.",
      },
      {
        lever: "Review rhythm",
        whatItMeans: "After a month, keep sources that you actually reuse.",
        tip: "Drop distant shops you never visit twice.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Mixed sources beat one mega-store fantasy",
        body: "Most expat kitchens settle on aisle + specialty — that is a feature of Dutch grocery life, not a failure.",
      },
      {
        title: "List first, shops second",
        body: "Without a must-have list, specialty markets become impulse warehouses.",
      },
      {
        title: "Link the sibling guides",
        body: "Best chooses fit; Cheap saves money; Dutch explains the system; Shopping covers errands — this page stays on international sourcing.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets — international fit",
        href: `${BEST_SUPERMARKETS_NETHERLANDS_PATH}#international`,
        status: "live",
        description: "Decision cues when international products are a primary supermarket-fit priority.",
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
  aisles: {
    heading: "Mainstream world-food aisles",
    intro:
      "Larger Albert Heijn, Jumbo and similar full-service branches often carry a “world foods” or international aisle that covers many weekly gaps — sauces, noodles, spices, tinned goods and snacks — without a specialty trip.",
    paragraphs: [
      "Branch size matters. City express shops and tiny neighbourhood AH/Jumbo formats may only carry a thin selection. If international products matter weekly, test a larger full-service branch on your commute.",
      "Expect useful coverage, not a homeland supermarket. Many expats find 40–70% of frequent items in a good aisle and keep a specialty gap list for the rest.",
      "Assortments change. Treat influencer shelves as inspiration only — verify your branch in person or in the retailer’s app for your store.",
    ],
    rows: [
      {
        lever: "Branch size",
        whatItMeans: "Larger full-service formats usually beat express shops on world-food depth.",
        tip: "Check one big branch before concluding “Dutch shops have nothing”.",
      },
      {
        lever: "Frequent top-ups",
        whatItMeans: "Sauces, noodles, spice jars, coconut milk, tortillas, snacks.",
        tip: "Use the aisle for items you buy twice a month or more.",
      },
      {
        lever: "Gap list",
        whatItMeans: "Products the aisle only partially covers or never stocks.",
        tip: "Batch gaps into one specialty stop — avoid daily hunting.",
      },
      {
        lever: "Private-label world lines",
        whatItMeans: "Store-brand international products beside branded imports.",
        tip: "Taste-test calmly; keep branded homeland favourites intentional.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Aisle first for weekly rhythm",
        body: "If you can cover frequent needs in a supermarket you already visit, specialty trips stay lighter and more enjoyable.",
      },
      {
        title: "Not a substitute for specialty depth",
        body: "Fresh specialty produce, bulk spices and niche homeland brands often still need a dedicated market.",
      },
      {
        title: "Orientation, not a podium",
        body: "Naming Albert Heijn or Jumbo here is orientation for newcomers — not a claim they always win every international basket.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Best supermarkets — international",
        href: `${BEST_SUPERMARKETS_NETHERLANDS_PATH}#international`,
        status: "live",
        description: "When international pantry depth is part of choosing your primary store fit.",
      },
      {
        label: "Dutch supermarkets — formats",
        href: `${DUTCH_SUPERMARKETS_PATH}#formats`,
        status: "live",
        description: "How full-service vs express formats change what you find on shelves.",
      },
    ] satisfies GuideLink[],
  },
  specialty: {
    heading: "Specialty and ethnic markets",
    intro:
      "Specialty and ethnic grocery shops are where many expats find the depth that mainstream aisles only hint at — broader cuisine ranges, fresher specialty produce, spices by weight and homeland brands.",
    paragraphs: [
      "Orientation examples newcomers often meet include Asian grocery stores, Turkish and Middle Eastern markets, Surinamese and Caribbean shops, African grocery stores, Latin American shops, Polish and Eastern European markets, and British or American import specialists — depending on city and neighbourhood. Naming categories here is orientation, not a ranked directory.",
      "Batch trips with a written list. Specialty markets reward preparation the same way discounters do: an empty list plus hunger often creates overbuying and fridge chaos.",
      "Asian cooking depth is common enough to deserve its own guide. Use this section as a short orient: treat Asian markets as one specialty type on the broader map, then open Asian supermarkets for formats, categories, first-visit tips and city patterns.",
    ],
    rows: [
      {
        lever: "Cuisine depth",
        whatItMeans: "Broader shelves for a specific region or diaspora cuisine.",
        tip: "Match the shop type to the cuisine you cook most, not to “international” as one aisle.",
      },
      {
        lever: "Fresh & produce",
        whatItMeans: "Herbs, vegetables and specialty proteins that chain aisles rarely match.",
        tip: "Shop produce near when you will cook — plan the week around the trip.",
      },
      {
        lever: "Bulk spices & staples",
        whatItMeans: "Bags of spices, rice varieties, pulses and flours.",
        tip: "Buy sizes you will finish; label jars at home.",
      },
      {
        lever: "Homeland brands",
        whatItMeans: "Specific sauces, snacks and pantry comforts from home.",
        tip: "Keep a small nostalgia budget so staples stay affordable.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Depth trips, not daily errands",
        body: "Most households thrive with one specialty run every two to four weeks plus aisle top-ups.",
      },
      {
        title: "Community shops are local knowledge",
        body: "Ask neighbours, colleagues and city Facebook or WhatsApp groups for current favourites — coverage changes faster than any static list.",
      },
      {
        title: "No invented directories",
        body: "This guide will not invent official store rankings or fake “top 10 ethnic markets” awards. Verify shops in your neighbourhood.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Toko formats, product categories, first-visit tips and city patterns for Asian grocery depth.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "When specialty shopping starts raising the monthly food bill.",
      },
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms — useful at markets and smaller shops too.",
      },
    ] satisfies GuideLink[],
  },
  decision: {
    heading: "When to use which source",
    intro:
      "Use this decision board to match your product need to a source type — without crowning a best international supermarket or inventing scores.",
    paragraphs: [
      "Most households only need two source types in the first month: a reliable world-food aisle and one specialty stop. Add more after you know what you actually repurchase.",
      "If your problem is really “which supermarket should be my weekly anchor?”, switch to Best supermarkets. If your problem is “where do I find non-Dutch products?”, stay on this page.",
    ],
    rows: [
      {
        situation: "Need sauces, noodles or spices twice a month",
        useThis: "Large full-service world-food aisle",
        why: "Fits the weekly shop without a specialty detour.",
        watchOut: "Express shops may be too thin — try a larger branch.",
      },
      {
        situation: "Need homeland brands or cuisine depth",
        useThis: "Specialty or ethnic market",
        why: "Aisles rarely match breadth, produce or specific brands.",
        watchOut: "Batch the trip; do not redesign every week around it.",
      },
      {
        situation: "Fresh specialty herbs and vegetables",
        useThis: "Neighbourhood ethnic produce shop or market",
        why: "Freshness and variety usually beat chain world-food shelves.",
        watchOut: "Buy amounts you will cook within a few days.",
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
        situation: "Shelf-stable nostalgia snack only",
        useThis: "Import web shop or occasional specialty stop",
        why: "Avoids forcing a full market trip for one treat.",
        watchOut: "Shipping costs add up — batch with other must-haves.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Two sources, then review",
        body: "Stacking every specialty district at once creates friction. Pick two sources, measure a month, then add.",
      },
      {
        title: "No fabricated scores",
        body: "This board matches situations to source types — never to star ratings or #1 claims.",
      },
      {
        title: "Fit vs sourcing",
        body: "Wrong weekly store fit is a Best-supermarkets problem; missing homeland products inside a workable week is this page.",
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
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Money-saving tactics when international sourcing and staples compete in the budget.",
      },
    ] satisfies GuideLink[],
  },
  pantry: {
    heading: "Pantry gaps: assign products to sources",
    intro:
      "A calm international kitchen starts with product jobs — not with shop hunting. Separate must-haves from nice-to-haves, then assign each to aisle, specialty or online.",
    paragraphs: [
      "Common must-have clusters: cooking oils and pastes, spice blends, sauces and condiments, noodles or rice varieties, tinned and packaged staples, snacks and breakfast comforts.",
      "Shelf-stable items travel well on monthly specialty runs. Fragile produce and fresh herbs belong closer to cooking day — neighbourhood ethnic shops often win here.",
      "If the bill climbs, Cheap groceries helps you protect staples with private label and waste habits while still funding a few homeland must-haves.",
    ],
    rows: [
      {
        lever: "Spices & pastes",
        whatItMeans: "Blends, curry pastes, chili pastes, dried herbs.",
        tip: "Specialty often wins on freshness and bag sizes.",
      },
      {
        lever: "Sauces & condiments",
        whatItMeans: "Soy, fish sauce, hot sauces, chutneys, salsa.",
        tip: "Try the aisle first for frequent bottles; specialty for niche brands.",
      },
      {
        lever: "Carbs & staples",
        whatItMeans: "Rice varieties, noodles, flatbreads, flours, pulses.",
        tip: "Buy sizes you will finish; share bulk in student houses.",
      },
      {
        lever: "Nostalgia & snacks",
        whatItMeans: "Home-country treats, teas, breakfast cereals.",
        tip: "Budget a small joy line so staples stay calm.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Must-haves before nice-to-haves",
        body: "Ten products that unlock your cooking beat thirty impulse specialty bags.",
      },
      {
        title: "Label and date bulk buys",
        body: "Specialty bags of spices and flours last longer when transferred to jars and dated.",
      },
      {
        title: "Protect the monthly food picture",
        body: "International depth and budget can coexist — assign expensive items to monthly, not weekly, rhythm.",
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
  neighbourhood: {
    heading: "Neighbourhood and city patterns",
    intro:
      "International product access is highly local. A good specialty cluster on your bike loop beats a famous shop across town that you never visit twice.",
    paragraphs: [
      "Larger cities — Amsterdam, Rotterdam, The Hague, Utrecht and others — usually offer denser ethnic and specialty grocery options, but coverage varies by district. Smaller towns may rely more on one large full-service world-food aisle plus occasional city trips.",
      "Build a simple route map: weekly supermarket, deeper world-food branch if different, and one specialty stop. Save hours for Sundays and holidays — smaller shops often differ from chain supermarket patterns.",
      "Ask local networks for current recommendations. Community knowledge updates faster than any static “best international supermarket” article.",
    ],
    rows: [
      {
        lever: "Bike / tram loop",
        whatItMeans: "Shops you can reach without a special weekend expedition.",
        tip: "Prefer good-enough nearby over perfect-and-distant.",
      },
      {
        lever: "District clusters",
        whatItMeans: "Streets where several cuisine groceries sit near each other.",
        tip: "One cluster visit can cover multiple cuisines in one trip.",
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
        body: "A specialty shop on your commute will shape your cooking more than a viral Amsterdam list if you live in Eindhoven.",
      },
      {
        title: "Hours are shop-specific",
        body: "Verify before you ride across town with an empty fridge plan.",
      },
      {
        title: "Dutch system habits still apply",
        body: "Bags, payments and self-scan norms from the Dutch supermarket guide still help on errand days.",
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
    heading: "Delivery and online international options",
    intro:
      "Delivery and online shops can cover some international gaps — especially shelf-stable items — but they do not automatically replace specialty market trips for freshness and discovery.",
    paragraphs: [
      "Main supermarket delivery apps sometimes include world-food lines available at your local branch assortment. Coverage and stock still depend on postcode and warehouse reality.",
      "Specialty web shops and import stores can help with British, American, Asian or other packaged products. Check shipping fees, minimums and expiry expectations before treating them as your primary pantry.",
      "Time-poor weeks may justify delivery for staples while specialty waits for a calm weekend. Compare full totals — fees included — with one list-led specialty trip.",
    ],
    rows: [
      {
        lever: "Supermarket delivery",
        whatItMeans: "World-food lines inside your usual delivery basket.",
        tip: "Search your must-haves in the app for your postcode before assuming stock.",
      },
      {
        lever: "Specialty web shops",
        whatItMeans: "Import or cuisine-focused online groceries.",
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
        body: "Sauces, snacks and packaged staples are the safest online international wins.",
      },
      {
        title: "Apps are tools, not winners",
        body: "Soft provider links later are optional modelling tools — not a podium for the “best” international delivery app.",
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
        label: "Best supermarkets — delivery",
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
      "Soft CTAs for established supermarket and delivery patterns when you are modelling everyday food sourcing alongside international pantry needs. This block is not a ranking of specialty markets or a “best international store” podium.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for everyday grocery modelling — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent specialty-store directories here.",
    placementId: "nl-living-international-supermarkets-support-providers",
    analyticsPageContext: "international-supermarkets-netherlands-recommended-options",
    categoryLinks: [
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
      { href: DUTCH_SUPERMARKETS_PATH, label: "Dutch supermarket system" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common international-sourcing scenarios",
    intro: "Match your kitchen story to a calm first experiment — then deepen in the sourcing sections above.",
    rows: [
      {
        situation: "First month, homesick pantry",
        approach: "Ten must-haves; test large world-food aisle; map one specialty stop.",
        firstStep: "Write the list tonight; check the aisle this week.",
      },
      {
        situation: "Asian cooking depth",
        approach: "Aisle for frequent sauces; Asian specialty market for produce and niche brands.",
        firstStep: "Batch one specialty run; open Asian supermarkets for toko depth.",
      },
      {
        situation: "Middle Eastern / North African staples",
        approach: "Neighbourhood ethnic grocery for breads, herbs, spices and pantry staples.",
        firstStep: "Find one shop on your bike loop and save its hours.",
      },
      {
        situation: "Latin American flavours",
        approach: "Aisle for common sauces; specialty or import shop for niche chiles and masa products.",
        firstStep: "Mark aisle vs specialty on your must-have list.",
      },
      {
        situation: "British / US nostalgia",
        approach: "Occasional import specialist or online batch for packaged comforts.",
        firstStep: "Budget a small joy line; keep weekly staples local.",
      },
      {
        situation: "Student shared kitchen",
        approach: "Shared specialty run + aisle staples; clear fridge rules.",
        firstStep: "Agree shared spices and sauces; schedule one monthly specialty trip.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Expecting one mega international supermarket",
      body: "Dutch grocery life is usually a mix of sources — waiting for a single perfect store delays cooking.",
      advice: "Build aisle + specialty in month one; refine later.",
    },
    {
      title: "Skipping specialty when the aisle is shallow",
      body: "Forcing every homeland product into a thin chain aisle raises cost and disappointment.",
      advice: "Keep a gap list and batch one specialty stop.",
    },
    {
      title: "Buying everything at specialty prices",
      body: "Specialty markets are powerful for depth — expensive if used for milk, eggs and basic pasta you can buy anywhere.",
      advice: "Assign weekly staples to mainstream shops; specialty for true gaps.",
    },
    {
      title: "Chasing distant “famous” shops",
      body: "Viral lists ignore your commute and fridge space.",
      advice: "Prefer a good shop on your route over a perfect shop you never visit.",
    },
    {
      title: "Specialty trips without a list",
      body: "Impulse bags of produce and snacks create waste and clutter.",
      advice: "Write must-haves; leave nice-to-haves for a second visit.",
    },
    {
      title: "Ignoring budget while rebuilding a homeland pantry overnight",
      body: "Buying everything in week one can shock the monthly food picture.",
      advice: "Phase must-haves across a month; use Cheap groceries tactics for staples.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "International sourcing checklist",
    intro: "Use this before locking a long-term international pantry routine so “finding products” stays calm and local.",
    items: [
      "One-page must-have list written",
      "Items marked aisle vs specialty vs online",
      "Nearest large world-food aisle branch noted",
      "One specialty or ethnic stop mapped on your route",
      "Specialty hours saved (including Sunday patterns)",
      "Monthly batch habit scheduled",
      "Fridge and cupboard space checked before depth buys",
      "Shared-house spice rules agreed (if relevant)",
      "Best supermarkets bookmarked if weekly fit is unclear",
      "Cheap groceries bookmarked if the bill is climbing",
      "Dutch and Shopping guides bookmarked for system and errand habits",
      "Essential apps bookmarked after primary sources are clear",
    ],
  },
  howTo: {
    heading: "How to build an international pantry in one month",
    steps: [
      {
        name: "Write your must-have list",
        text: "List up to ten products that unlock the cooking you miss — spices, sauces, staples, snacks. Mark which you expect from a supermarket aisle vs specialty.",
      },
      {
        name: "Test one large world-food aisle",
        text: "Visit a larger full-service Albert Heijn, Jumbo or similar branch and tick what you find. Keep a short gap list for the rest.",
      },
      {
        name: "Map one specialty or ethnic stop",
        text: "Choose a shop type that matches your main cuisine need and sits on a calm bike, tram or walk loop. Save its hours.",
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
    name: "How to find international and non-Dutch groceries in the Netherlands as an expat",
    description:
      "Practical steps for expats to source international products in the Netherlands using world-food aisles, specialty and ethnic markets, neighbourhood routes and optional delivery — without relying on fake supermarket rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best international supermarket in the Netherlands?",
      a: "There is no universal best international supermarket. Most expats combine a larger full-service world-food aisle with specialty or ethnic markets for depth. Your best mix depends on cuisine, neighbourhood and how often you need each product — not a national award list.",
    },
    {
      q: "Do Albert Heijn and Jumbo have international products?",
      a: "Larger branches often have useful world-food sections for sauces, noodles, spices and snacks. Express shops may be thinner. Treat this as orientation and verify your branch — assortments change.",
    },
    {
      q: "Where can I buy Asian groceries in the Netherlands?",
      a: "Many cities have Asian specialty grocery stores alongside supermarket world-food aisles. Use aisles for frequent top-ups and specialty markets for produce, niche brands and depth. For formats, categories, first-visit tips and city patterns, open the Asian supermarkets guide — this page only short-orients that need on the broader map.",
    },
    {
      q: "Are ethnic grocery stores cheaper than supermarket world-food aisles?",
      a: "Sometimes for bulk spices, produce and certain homeland staples — sometimes not for items the supermarket already stocks well. Compare your real must-haves rather than assuming one source always wins.",
    },
    {
      q: "How is this different from Best supermarkets?",
      a: "Best supermarkets helps you choose among fits — budget, organic, international, one-stop, neighbourhood or delivery. This page assumes you want a sourcing map for non-Dutch products across aisles and specialty shops.",
    },
    {
      q: "How is this different from Cheap groceries?",
      a: "Cheap groceries focuses on spending less through discounters, private label, offers, timing and waste. This page focuses on finding international products — though the two often meet when specialty shopping raises the bill.",
    },
    {
      q: "How is this different from Dutch supermarkets?",
      a: "Dutch supermarkets explains the system: formats, hours, bags, self-scan orientation, loyalty and weekly rhythm. This page focuses on where non-Dutch products live inside and beyond that system.",
    },
    {
      q: "Do you rank or rate international and ethnic grocery stores?",
      a: "No. We avoid fake awards, star ratings and invented directories. Soft provider links are optional tools for everyday grocery modelling, not a podium for specialty markets.",
    },
  ],
  relatedGuides: [
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Asian toko and supermarket depth — formats, categories, first-visit tips and city patterns.",
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
      description: "Spend less when international sourcing and staples share one budget.",
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
    intro: "Keep international sourcing connected to Asian specialty depth, fit choice, saving tactics, the system primer, errand guide and wider Living cluster.",
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
        description: "This guide — sourcing map for non-Dutch products.",
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
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen East and Southeast Asian toko shopping.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen Turkish and Middle-Eastern specialty shopping.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen Indian and South Asian specialty shopping.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "Find SA specialty shops and comfort-food pantry patterns.",
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
      description: "Protect the bill while building a homeland pantry.",
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
    "Asian, Turkish, Indian and South African shops own culture-specific specialty depth — short-orient here, deepen there.",
    "Best owns fit choice — including international as a priority axis.",
    "Cheap owns saving tactics when specialty shopping raises spend.",
    "Dutch owns the system primer — formats, hours, bags, self-scan.",
  ],
  foodHubTips: [
    "Use this page for international sourcing; specialty peers for culture depth; Best for choice; Cheap for savings; Dutch for system; Shopping for errands.",
    "All Food Cluster peers are live — link them with status live, never comingSoon for scheduling.",
    "Daily life and the Living hub keep groceries inside wider routines.",
    "Soft provider CTAs are tools — never specialty-store podiums.",
  ],
  exploreNextTips: [
    "Open Asian, Turkish, Indian or South African shops next for culture-specific specialty depth.",
    "Open Best next if you still need a primary weekly store fit.",
    "Open Cheap groceries if international sourcing is raising the bill.",
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
      description: "Example full-service retailer — verify world-food ranges at your branch.",
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
      description: "Example delivery supermarket — search world-food lines for your postcode.",
    },
  ],
  disclosure:
    "General information only. Not shopping, dietary, financial or consumer-rights advice and not a ranking, award list, star-rating or directory of specialty markets. Assortments, prices, hours and delivery coverage change. Verify current details with retailers and local shops. Some outbound links may be affiliate or referral links.",
} as const;
