import {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_PILLAR_ROOT_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
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
  FOOD_DELIVERY_NETHERLANDS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  RESTAURANTS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TIPPING_NETHERLANDS_PATH,
  TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
};

export const LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;
export const SHOPPING_GROCERIES_PATH = LIVING_SHOPPING_GROCERIES_PATH;
export const PAYMENTS_BASICS_PATH = "/netherlands/living/payments/" as const;
export const CASH_VS_CARD_PATH = "/netherlands/money/banking/cash-vs-card/" as const;
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
const VISUAL_PREFIX = "restaurants-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const restaurantsNetherlandsPage = {
  slug: "restaurants-netherlands",
  path: RESTAURANTS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(RESTAURANTS_NETHERLANDS_PATH) ?? "2026-09-30",
  seo: {
    title: "Restaurants Netherlands | Dining Out Guide for Expats",
    description:
      "How dining out works in the Netherlands for expats — reservations, lunch vs dinner culture, terraces, bills and service, dietary norms and what to expect. Not a ranked restaurant awards list.",
    keywords: [
      "restaurants Netherlands",
      "dining out Netherlands",
      "Dutch restaurants",
      "restaurant reservations Netherlands",
      "lunch dinner Netherlands",
      "terrace dining Netherlands",
      "restaurant bill Netherlands",
      "dietary options Netherlands restaurants",
      "expat restaurants Netherlands",
      "eating out Netherlands",
      "restaurant etiquette Netherlands",
      "Dutch dining culture",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Restaurants Netherlands",
    subtitle:
      "Practical orientation for sit-down dining — reservations, lunch vs dinner culture, terraces, bills and service, dietary norms and what expats should expect — not a ranked “best restaurants” awards list.",
    primaryCta: { label: "See dining levers", href: "#reservations" },
    secondaryCta: { label: "Open Food delivery", href: FOOD_DELIVERY_NETHERLANDS_PATH },
    chips: ["Reservations", "Lunch vs dinner", "Terraces", "Bills & service", "Dietary norms", "What to expect"],
    disclaimer:
      "General orientation only — not financial, dietary or hospitality advice and not a ranking of restaurants, chefs or cities. Hours, reservation rules, terrace seasons and payment habits change. Verify current terms with each venue. Soft provider links below are optional cook-at-home modelling tools, not “best restaurant” winners. Some outbound links may be affiliate or referral links. Deep tipping norms live on the Tipping guide; takeaway apps live on Food delivery.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side terrace evening: newcomers reading a printed menu and reservation note at an outdoor café table, soft golden light, bikes and canal houses beyond, welcoming practical mood without fake restaurant logos, star ratings or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#reservations", label: "Reservations" },
    { href: "#lunch-dinner", label: "Lunch vs dinner" },
    { href: "#terraces", label: "Terraces" },
    { href: "#bills", label: "Bills & service" },
    { href: "#dietary", label: "Dietary norms" },
    { href: "#expectations", label: "What to expect" },
    { href: "#tipping", label: "Tipping (short)" },
    { href: "#when-to-dine", label: "When to dine out" },
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
      "Premium orientation board titled Dining Out Is Culture Not Rankings — reservations, lunch vs dinner, terraces, bills, dietary norms — Checklist rail, Dutch canal terrace skyline and ExpatLife brand footer.",
      "Dining out is a culture system to learn — not a national #1 restaurant award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of restaurant dining levers — reservations, lunch vs dinner, terraces, bills, dietary, expectations — Dutch terrace band and ExpatLife brand footer.",
      "Six levers explain almost every “restaurants Netherlands” search for newcomers."
    ),
    reservations: visual(
      "reservations",
      "Premium reservations desk scene — phone calendar, table for two sticky note, “book popular nights early” card — Dutch canal restaurant window light, Verify with venue rail.",
      "Popular nights and weekend dinners often need a booking — walk-ins vary by venue."
    ),
    lunchDinner: visual(
      "lunch-dinner",
      "Premium lunch-vs-dinner timeline board — midday dagschotel card, evening multi-course card, kitchen hours note — Dutch café clock and ExpatLife brand footer.",
      "Lunch and dinner often feel like different products — hours and pace matter."
    ),
    terraces: visual(
      "terraces",
      "Premium terrace season map — sunny canal terrace, heaters, rain jacket on chair, “weather window” note — Dutch spring light, General information only rail.",
      "Terraces are a Dutch dining joy — and highly weather-dependent."
    ),
    bills: visual(
      "bills",
      "Premium bill-and-service board — contactless terminal, itemised receipt, service note — Dutch restaurant table, Verify payment methods rail.",
      "Ask for the bill when ready; contactless is common; service culture is usually calm."
    ),
    dietary: visual(
      "dietary",
      "Premium dietary-norms consultation — vegetarian, vegan, gluten and allergy cards on a menu clipboard — Dutch kitchen pass window, Ask the venue rail.",
      "Vegetarian options are widespread; allergies still need clear communication."
    ),
    expectations: visual(
      "expectations",
      "Premium what-to-expect desk — seating pace, water habits, splitting notes, English menu cue — Dutch canal evening and ExpatLife brand footer.",
      "Dutch restaurant pacing and service style can surprise newcomers — learn the norms once."
    ),
    tipping: visual(
      "tipping",
      "Premium short tipping orientation — modest tip note, round-up card, link sticky to Tipping guide — Dutch café receipt, General information only rail.",
      "Short tip orientation here — deepen on the Tipping guide."
    ),
    whenToDine: visual(
      "when-to-dine",
      "Premium decision board — celebration night, rainy takeaway, calm cook-at-home — three paths labelled restaurant, food delivery, meal kit/shop — Dutch skyline and ExpatLife brand footer.",
      "Match the night to the lane — sit-down, delivery or cook at home."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week dinner, client lunch, sunny terrace, dietary visit, celebration, budget reset — Dutch canal window light and ExpatLife brand footer.",
      "Start from your week story, then choose a calm first dining-out experiment."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — no reservation, wrong meal timing, tip confusion, cash-only assumption, ignoring dietary ask — Fix notes and Dutch rainy skyline.",
      "Most dining friction comes from expectation mismatches — not from missing a secret restaurant ranking."
    ),
    checklist: visual(
      "checklist",
      "Premium first dining-out checklist clipboard — reservation checked, hours confirmed, dietary noted, payment ready, tip approach decided — Dutch terrace table scene.",
      "Use this checklist so the first sit-down meal stays calm and comparable."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Learn reservations, meal timing and terrace seasons before chasing “best of” lists.",
        "Separate sit-down dining from takeaway apps — Food delivery owns that lane.",
        "Keep tipping short here; open the Tipping guide for depth.",
        "Cook-at-home nights still belong to Meal kits, Shopping and Cheap guides.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Reservations and hours matter more than star stickers for newcomers.",
        "Lunch and dinner can feel like different products in the same city.",
        "Bills, contactless payment and modest tipping are everyday habits.",
        "No section here is a restaurant award claim.",
      ],
    },
    reservations: {
      title: "Reservation cues",
      items: [
        "Friday–Saturday dinners and popular kitchens often need a booking.",
        "Walk-ins work more often at casual spots and quieter weeknights.",
        "Apps and phone bookings both exist — confirm party size and time.",
        "Arrive on time; late arrivals can lose a table on busy nights.",
      ],
    },
    lunchDinner: {
      title: "Lunch–dinner cues",
      items: [
        "Lunch can be shorter and better value; dinner is the main social meal for many venues.",
        "Kitchen closing times matter — last orders can be earlier than you expect.",
        "Sunday patterns vary; check hours before you travel across town.",
        "Dagmenu / lunch specials are orientation tools, not universal guarantees.",
      ],
    },
    terraces: {
      title: "Terrace cues",
      items: [
        "Sunny canal terraces fill fast — book or arrive early in peak season.",
        "Heaters help, but rain still ends many terrace plans.",
        "Indoor seating may be limited when everyone wants outside.",
        "Noise and smoking rules vary by venue and outdoor layout.",
      ],
    },
    bills: {
      title: "Bill cues",
      items: [
        "Ask for the bill when you are ready — it may not appear automatically.",
        "Contactless debit is common; cash is less central than in some countries.",
        "Splitting can be possible — ask calmly before paying.",
        "Open Payments and Cash vs card for deeper payment habits.",
      ],
    },
    dietary: {
      title: "Dietary cues",
      items: [
        "Vegetarian and plant-forward options are widespread in many cities.",
        "Allergies still need a clear ask — menus alone are not enough.",
        "Halal, kosher and specialty diets vary by venue — verify directly.",
        "Specialty grocery guides help when you cook those diets at home.",
      ],
    },
    expectations: {
      title: "Expectation cues",
      items: [
        "Service is often friendly and efficient rather than highly formal.",
        "Water, bread and pacing habits differ from many restaurant cultures.",
        "English menus are common in tourist and expat-heavy areas — not universal.",
        "Treat every venue as its own house rules — verify hours and dress norms.",
      ],
    },
    tipping: {
      title: "Tipping cues",
      items: [
        "Dutch tipping is often modest and optional — deepen on the Tipping guide.",
        "Rounding up or a small percentage is a common orientation pattern.",
        "Service charge labels matter — read the bill before adding more.",
        "Delivery tip prompts are a different lane — see Food delivery.",
      ],
    },
    whenToDine: {
      title: "When-to-dine cues",
      items: [
        "Celebrations, guests and sunny terraces favour sit-down dining.",
        "Rain, jet lag and admin weeks may favour Food delivery or cook nights.",
        "Budget resets belong to Cheap groceries and Meal kits modelling.",
        "Do not force restaurants to solve every food job.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your week story, not a ranking thread.",
        "First week: one calm lunch and one booked dinner experiment.",
        "Dietary needs: call ahead once before relying on a favourite spot.",
        "Tipping and takeaway each have dedicated sibling guides.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Skipping reservations on busy nights is the classic newcomer friction.",
        "Arriving for dinner at lunch-only hours wastes a trip.",
        "Assuming US-style tipping percentages creates awkward moments.",
        "Treating takeaway apps as the same as sit-down culture blurs two lanes.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Hours and reservation status confirmed before you leave home.",
        "Dietary notes communicated if relevant.",
        "Payment method ready and tip approach decided.",
        "Lane chosen (sit-down vs delivery vs cook/shop).",
      ],
    },
  },
  quickAnswer: {
    heading: "Dining out is a culture system to learn — not a ranked awards list",
    summary:
      "Dutch restaurant life is shaped by reservations, meal timing, terrace seasons, calm service and contactless bills. Learn those levers once and dining out becomes predictable — without chasing fake restaurant rankings.",
    bullets: [
      "Book popular dinners; walk-ins work more often on quieter nights and casual spots.",
      "Lunch and dinner can feel like different products — check kitchen hours.",
      "Terraces are wonderful and weather-dependent; have an indoor backup.",
      "Ask for the bill, pay contactless when possible, tip modestly — deepen tipping on the Tipping guide.",
      "Takeaway apps live on Food delivery; cook-at-home modelling lives on Meal kits and grocery guides.",
    ],
    note: "Use this page for sit-down culture. Open Food delivery for apps, Tipping for tip depth, and Meal kits / Shopping when the night should stay at home.",
  },
  introParagraphs: [
    "Expats often search “restaurants Netherlands” expecting a ranked list. What usually helps first is orientation: how booking works, when kitchens serve lunch versus dinner, how terrace culture behaves, how bills and service feel, and how to ask about dietary needs.",
    "This guide owns sit-down dining culture. Food delivery owns takeaway and grocery apps. Tipping owns tip norms in depth. Meal kits and supermarket guides own cook-at-home modelling. Soft affiliate cards below are optional grocery tools for non-restaurant nights — not a podium of restaurants.",
  ],
  introHighlights: [
    "Reservations and hours beat secret “best of” threads for first-month confidence.",
    "Service is usually calm and efficient; the bill often arrives when you ask.",
    "Dietary options are strong in many cities — still communicate allergies clearly.",
    "Cross-link delivery, tipping and cook-at-home guides instead of mixing lanes.",
  ],
  starterChecklist: [
    "One weekday lunch trial near home or work",
    "One weekend dinner with a reservation",
    "Kitchen hours checked before travelling across town",
    "Dietary ask prepared if relevant",
    "Payment card ready; cash as backup only",
    "Modest tipping approach noted (deepen on Tipping)",
    "Food delivery bookmarked for rain/jet-lag nights",
    "Meal kits or supermarket plan for cook nights",
  ],
  orientationFlowSteps: [
    "Learn reservation and hour habits",
    "Try one lunch and one dinner calmly",
    "Note bill, payment and tip patterns",
    "Decide which nights stay sit-down vs delivery vs cook",
  ],
  snapshotTips: [
    "Six levers cover most newcomer restaurant searches.",
    "No card here is a star rating or award.",
    "Tipping depth and takeaway apps sit on sibling pages.",
  ],
  snapshotSignals: [
    {
      label: "Reservations",
      value: "Book busy nights",
      note: "Weekends and popular kitchens fill early.",
    },
    {
      label: "Meal timing",
      value: "Lunch ≠ dinner",
      note: "Hours and pace often differ by sitting.",
    },
    {
      label: "Terraces",
      value: "Weather window",
      note: "Sunny seats go fast; rain ends plans.",
    },
    {
      label: "Bills",
      value: "Ask + contactless",
      note: "Request the bill; card is common.",
    },
    {
      label: "Dietary",
      value: "Ask clearly",
      note: "Veg options common; allergies need a direct ask.",
    },
    {
      label: "Tipping",
      value: "Usually modest",
      note: "Short orient here — depth on Tipping guide.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Reservations",
      body: "Popular dinners and weekend tables often need a booking. Casual lunch and quiet weeknights are more walk-in friendly — still verify.",
    },
    {
      title: "Lunch vs dinner",
      body: "Midday can be shorter and better value. Evening dining is the main social sitting for many venues. Kitchen closing times matter.",
    },
    {
      title: "Terraces",
      body: "Canal and square terraces are a Dutch highlight. Season, sun and rain decide whether outdoor seating is realistic.",
    },
    {
      title: "Bills & service",
      body: "Ask for the bill when ready. Contactless debit is common. Service is often friendly without heavy formality.",
    },
    {
      title: "Dietary norms",
      body: "Vegetarian and plant-forward menus are widespread in many cities. Allergies and specialty diets still need a clear conversation.",
    },
    {
      title: "What to expect",
      body: "Pacing, water habits and English-menu availability vary. Learn house norms once instead of assuming home-country restaurant rules.",
    },
  ] satisfies TipCard[],
  reservations: {
    heading: "Reservations and walk-ins",
    intro:
      "Booking habits vary by venue type and night of the week. Treat popular Friday–Saturday dinners as reservation-first until you learn your neighbourhood.",
    paragraphs: [
      "Many restaurants take bookings by phone, website or common reservation tools. Confirm party size, time and any dietary notes when you book.",
      "Walk-ins still work, especially for casual spots, lunch and quieter weeknights — but a full terrace or popular kitchen can mean a wait or a later slot.",
    ],
    rows: [
      {
        lever: "Weekend dinner",
        whatItMeans: "High demand for popular tables and terrace seats.",
        tip: "Book ahead; have a second choice ready.",
      },
      {
        lever: "Weeknight casual",
        whatItMeans: "Walk-ins are more realistic in many neighbourhoods.",
        tip: "Still check hours; kitchens may close earlier than you expect.",
      },
      {
        lever: "Large group",
        whatItMeans: "Tables of 6+ often need explicit booking.",
        tip: "Call with headcount and any dietary constraints.",
      },
      {
        lever: "Same-day plan",
        whatItMeans: "Cancellations and lunch slots create openings.",
        tip: "Call early afternoon; avoid assuming walk-in success at 19:30 Saturday.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "On-time culture",
        body: "Dutch dining often expects you near the booked time. Late arrivals risk losing a table on busy nights.",
      },
      {
        title: "Confirm the channel",
        body: "Some venues prefer phone; others use online tools. Screenshot the confirmation and note the cancellation window.",
      },
      {
        title: "Not a ranking",
        body: "Booking difficulty is not a quality award. It is demand and capacity — model your night, not a podium.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "When the table is full, takeaway apps are a different lane.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Everyday routines around evenings out and opening hours.",
      },
    ] satisfies GuideLink[],
  },
  lunchDinner: {
    heading: "Lunch vs dinner culture",
    intro:
      "In the Netherlands, lunch and dinner often feel like different products — different menus, pace and value. Checking kitchen hours prevents wasted trips.",
    paragraphs: [
      "Lunch can be shorter, with sandwiches, bowls or a dagmenu-style plate. Dinner is frequently the main social meal, with fuller menus and longer sittings.",
      "Last orders and kitchen closing times matter. A restaurant that looks open from the street may have stopped serving food.",
    ],
    rows: [
      {
        lever: "Lunch sitting",
        whatItMeans: "Often faster, sometimes better value, earlier close.",
        tip: "Ideal for first-week experiments near work or home.",
      },
      {
        lever: "Dinner sitting",
        whatItMeans: "Main social meal for many venues; book popular nights.",
        tip: "Confirm last kitchen order time before travelling far.",
      },
      {
        lever: "Sunday patterns",
        whatItMeans: "Hours vary widely by neighbourhood and venue type.",
        tip: "Check the day-specific schedule — do not assume Saturday hours.",
      },
      {
        lever: "Kitchen vs bar",
        whatItMeans: "Drinks may continue after food service ends.",
        tip: "Ask if you want a full meal, not only a seat.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Dagmenu orientation",
        body: "Lunch specials and set plates can be useful orientation tools. They are not universal and not a quality ranking.",
      },
      {
        title: "Pace differences",
        body: "Dinner may feel unhurried compared with some fast-service cultures. Lunch can move quicker around office hours.",
      },
      {
        title: "Travel time buffer",
        body: "Across-town dinner plans need transit buffer plus kitchen-close awareness — especially with kids or guests.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: "/netherlands/living/getting-around/",
        status: "live",
        description: "Transit timing for evening dinner plans.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place dining-out spend in the wider budget.",
      },
    ] satisfies GuideLink[],
  },
  terraces: {
    heading: "Terraces and outdoor dining",
    intro:
      "Terraces are a highlight of Dutch dining culture — canal edges, squares and neighbourhood streets. They are also highly seasonal and weather-dependent.",
    paragraphs: [
      "On sunny days, outdoor seats fill quickly. Booking or arriving early helps. Rain, wind and cold can end a terrace plan even when heaters are present.",
      "Indoor capacity may be limited when everyone wants outside. Have a backup plan: indoor table, later booking, or a Food delivery night.",
    ],
    rows: [
      {
        lever: "Peak sun window",
        whatItMeans: "Late spring–summer afternoons and early evenings fill fast.",
        tip: "Book terrace seats or arrive early with a flexible indoor fallback.",
      },
      {
        lever: "Rain plan",
        whatItMeans: "Showers empty terraces and crowd indoor rooms.",
        tip: "Confirm indoor availability before you leave home.",
      },
      {
        lever: "Noise & layout",
        whatItMeans: "Outdoor seating can be lively; rules vary by venue.",
        tip: "Choose based on conversation needs, not only Instagram light.",
      },
      {
        lever: "Season shoulder",
        whatItMeans: "Heaters extend the season but do not cancel Dutch weather.",
        tip: "Bring a layer; treat terrace time as a weather window.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Canal atmosphere",
        body: "Terrace dining is part of the Dutch living experience — enjoy it as orientation, not as a restaurant ranking criterion.",
      },
      {
        title: "Kids and groups",
        body: "Outdoor layouts can be easier for prams and larger groups — still confirm seating and reservation rules.",
      },
      {
        title: "Weather guide link",
        body: "Rain and wind habits sit on the Weather guide when outdoor plans keep failing.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather & seasons",
        href: "/netherlands/living/weather/",
        status: "live",
        description: "How Dutch weather changes outdoor plans.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Rainy-night alternative when terraces close.",
      },
    ] satisfies GuideLink[],
  },
  bills: {
    heading: "Bills, payment and service",
    intro:
      "Dutch restaurant service is often calm and efficient. The bill may not appear until you ask. Contactless debit is common; deepen payment habits on Payments and Cash vs card.",
    paragraphs: [
      "When you are ready to leave, ask for the bill (de rekening). Staff usually bring a terminal to the table. Splitting is often possible if you ask clearly before paying.",
      "Service culture is typically friendly without heavy formality. Tip norms are usually modest — short orientation below, full depth on the Tipping guide.",
    ],
    rows: [
      {
        lever: "Ask for the bill",
        whatItMeans: "It may not arrive automatically at the end of the meal.",
        tip: "A clear ask is normal and expected.",
      },
      {
        lever: "Contactless debit",
        whatItMeans: "Card and phone payments are everyday restaurant tools.",
        tip: "Keep a backup method; rare cash-preferring spots still exist.",
      },
      {
        lever: "Splitting",
        whatItMeans: "Many venues can split or take multiple cards.",
        tip: "Ask before the terminal appears; large groups plan ahead.",
      },
      {
        lever: "Service pace",
        whatItMeans: "Friendly and efficient more often than highly formal.",
        tip: "Signal when you want more time or want to pay and leave.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Payments basics",
        body: "Debit norms, contactless and everyday Dutch checkout habits live on the Payments guide.",
      },
      {
        title: "Cash vs card",
        body: "Where cash still matters and how card-first culture feels for newcomers.",
      },
      {
        title: "Not a fee ranking",
        body: "This section orients bill habits — it does not rank restaurants by price or invent awards.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit, contactless and everyday Dutch payment norms.",
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        status: "live",
        description: "When cash still appears beside card-first habits.",
      },
    ] satisfies GuideLink[],
  },
  dietary: {
    heading: "Dietary norms and asking clearly",
    intro:
      "Vegetarian and plant-forward options are widespread in many Dutch cities. Allergies and specialty diets still need a direct, calm conversation — menus alone are not enough.",
    paragraphs: [
      "Many restaurants label vegetarian or vegan dishes. That does not replace asking about cross-contamination, nuts, gluten or religious dietary rules.",
      "When you cook specialty homeland cuisines at home, International / Asian / Turkish / Indian / South African grocery guides own ingredient sourcing — this page stays on dining-out communication.",
    ],
    rows: [
      {
        lever: "Vegetarian / vegan",
        whatItMeans: "Often well represented, especially in larger cities.",
        tip: "Still confirm sauces, stock and cheese if that matters to you.",
      },
      {
        lever: "Allergies",
        whatItMeans: "Needs a clear verbal ask to kitchen or server.",
        tip: "Book and mention when reserving if the reaction risk is high.",
      },
      {
        lever: "Halal / kosher / other",
        whatItMeans: "Availability varies strongly by venue.",
        tip: "Verify directly — do not assume from neighbourhood alone.",
      },
      {
        lever: "Kids / simpler plates",
        whatItMeans: "Child options vary; some kitchens adapt calmly.",
        tip: "Ask early; lunch can be easier for first trials.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Call ahead once",
        body: "For serious allergies, a short call before booking reduces stress more than reading reviews alone.",
      },
      {
        title: "Specialty grocery siblings",
        body: "When the real need is cooking at home with homeland ingredients, open the specialty supermarket guides.",
      },
      {
        title: "No medical advice",
        body: "This is orientation for asking clearly — not clinical dietary advice.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Sourcing map when you cook specialty diets at home.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Planned cook-at-home dinners between restaurant nights.",
      },
    ] satisfies GuideLink[],
  },
  expectations: {
    heading: "What expats should expect",
    intro:
      "Dutch restaurant culture can surprise newcomers who expect US-style tipping theatre, automatic bill delivery, or highly formal service. Learn the calm defaults once.",
    paragraphs: [
      "English is common in tourist and expat-heavy areas, but not universal. A short Dutch greeting still helps. Dress codes are usually smart-casual unless the venue says otherwise.",
      "Pacing, water habits and bread service differ by restaurant. Treat each venue as its own house rules and verify hours before special nights.",
    ],
    rows: [
      {
        lever: "Service tone",
        whatItMeans: "Friendly and efficient more often than ceremonial.",
        tip: "Clear asks work well — bill, water, dietary notes, split pay.",
      },
      {
        lever: "Language",
        whatItMeans: "English menus common in many cities, not everywhere.",
        tip: "Phone translation and a calm ask cover most gaps.",
      },
      {
        lever: "Pacing",
        whatItMeans: "Dinner can feel unhurried; lunch may be quicker.",
        tip: "Signal if you have a train, theatre or babysitter deadline.",
      },
      {
        lever: "House rules",
        whatItMeans: "Hours, terrace policy and group size rules vary.",
        tip: "Confirm for celebrations instead of assuming.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Culture & etiquette",
        body: "Broader social norms sit on Culture & etiquette when dining is only one part of the adjustment.",
      },
      {
        title: "Language phrases",
        body: "Short Dutch for greetings, bill requests and thank-yous lives on Language & phrases.",
      },
      {
        title: "No awards",
        body: "Expectation-setting is not a Michelin-style ranking or invented star system.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch Culture & Etiquette",
        href: "/netherlands/living/culture-etiquette/",
        status: "live",
        description: "Broader social norms around everyday Dutch life.",
      },
      {
        label: "Language & phrases",
        href: "/netherlands/living/language/",
        status: "live",
        description: "Short Dutch for restaurant moments.",
      },
    ] satisfies GuideLink[],
  },
  tipping: {
    heading: "Tipping — short orientation",
    intro:
      "Dutch tipping for sit-down dining is often modest and optional compared with some expat home cultures. This section orients only; the Tipping guide owns depth.",
    paragraphs: [
      "Rounding up or leaving a small percentage is a common orientation pattern when service felt good. Read whether a service charge already appears on the bill.",
      "Delivery app tip prompts are a different habit — cover that on Food delivery. Full tip norms across cafés, taxis and services belong on Tipping.",
    ],
    rows: [
      {
        lever: "Sit-down restaurants",
        whatItMeans: "Tips often modest; not always expected at high US percentages.",
        tip: "Decide a calm personal rule before the terminal appears.",
      },
      {
        lever: "Service charge on bill",
        whatItMeans: "May already be included or labelled separately.",
        tip: "Read the receipt before adding more.",
      },
      {
        lever: "Delivery prompts",
        whatItMeans: "App screens can feel louder than café norms.",
        tip: "Open Food delivery for that lane; Tipping for depth.",
      },
      {
        lever: "Cash tip",
        whatItMeans: "Less central when payment is contactless.",
        tip: "Terminal tip or round-up patterns are more common orientation.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Open Tipping guide",
        body: "Use the dedicated Tipping page for norms across dining, delivery and everyday service.",
      },
      {
        title: "Keep lanes separate",
        body: "This page owns dining culture; tipping depth and takeaway tips sit on siblings.",
      },
      {
        title: "No guilt theatre",
        body: "Loud prompts elsewhere do not rewrite Dutch everyday norms — verify context.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "Full tipping norms for restaurants, cafés and everyday service.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "In-app tip prompts for takeaway and grocery delivery.",
      },
    ] satisfies GuideLink[],
  },
  whenToDine: {
    heading: "When to dine out vs delivery vs cook",
    intro:
      "Sit-down dining is one food lane. Match the night: celebration and terrace weather favour restaurants; rain and jet lag may favour Food delivery; budget and planning nights favour Meal kits or shops.",
    paragraphs: [
      "Newcomers sometimes treat restaurants as the default every evening, then feel budget shock. A calm weekly mix is usually easier: a few sit-down meals, deliberate delivery nights, and cook-at-home rhythm.",
      "Soft affiliate cards below help model cook-at-home tools — they are not restaurant rankings.",
    ],
    rows: [
      {
        situation: "Celebration / guests / sunny terrace",
        useThis: "Sit-down restaurant",
        why: "Atmosphere and shared time are the point.",
        watchOut: "Book ahead; check kitchen hours.",
      },
      {
        situation: "Rain, jet lag, admin-heavy week",
        useThis: "Food delivery lane",
        why: "Speed and low friction beat a wet commute to a table.",
        watchOut: "Read fees and tip prompts — open Food delivery.",
      },
      {
        situation: "Budget reset / planned dinners",
        useThis: "Meal kits or supermarket cook",
        why: "Predictable home cooking protects the wider food bill.",
        watchOut: "Model true per-serving cost; open Meal kits / Cheap.",
      },
      {
        situation: "Homeland comfort ingredients",
        useThis: "Specialty grocery + cook",
        why: "Restaurants may not cover every cuisine you miss.",
        watchOut: "Use International / Asian / Turkish / Indian / South African guides.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Food delivery sibling",
        body: "Takeaway apps and grocery delivery fees, coverage and tipping prompts.",
      },
      {
        title: "Meal kits sibling",
        body: "Subscription boxes when cook nights need less recipe work.",
      },
      {
        title: "Cheap groceries sibling",
        body: "Protect the wider food bill when dining out spikes spend.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Takeaway and grocery delivery orientation.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription cook-at-home modelling.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Saving tactics when the food bill needs a reset.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Cook-at-home tools for non-restaurant nights",
    subtitle:
      "Soft CTAs for established grocery and meal-kit patterns when you are balancing sit-down restaurant nights with cooking at home. This block is not a ranking of restaurants.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for cook-at-home modelling beside restaurant nights — HelloFresh first, then Picnic and Albert Heijn — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent restaurant-booking affiliates or restaurant rankings here.",
    placementId: "nl-living-restaurants-support-providers",
    analyticsPageContext: "restaurants-netherlands-recommended-options",
    categoryLinks: [
      { href: MEAL_KITS_NETHERLANDS_PATH, label: "Meal kits guide" },
      { href: FOOD_DELIVERY_NETHERLANDS_PATH, label: "Food delivery guide" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common restaurant scenarios",
    intro: "Match your week to a calm first experiment — then deepen with reservation, bill and dietary habits.",
    rows: [
      {
        situation: "First week in a new city",
        approach: "One nearby lunch walk-in and one booked weekend dinner.",
        firstStep: "Check hours and payment habits; note terrace weather.",
      },
      {
        situation: "Client or colleague lunch",
        approach: "Book a calm lunch spot with clear dietary options and known hours.",
        firstStep: "Confirm kitchen lunch service and travel time.",
      },
      {
        situation: "Sunny Saturday terrace",
        approach: "Reserve outdoor seats early or arrive with an indoor backup.",
        firstStep: "Check the forecast and cancellation window.",
      },
      {
        situation: "Serious allergy or specialty diet",
        approach: "Call ahead once; prefer venues that confirm clearly.",
        firstStep: "Mention the constraint when booking.",
      },
      {
        situation: "Celebration night",
        approach: "Book dinner early; decide tip approach before the bill.",
        firstStep: "Confirm party size, timing and any cake/dietary notes.",
      },
      {
        situation: "Budget reset week",
        approach: "One deliberate restaurant meal; lean on Meal kits / Cheap for the rest.",
        firstStep: "Open cook-at-home tools and set a dining-out cap.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Skipping reservations on busy nights",
      body: "Assuming walk-ins always work on Friday–Saturday evenings.",
      advice: "Book popular dinners; keep a second choice and a delivery backup.",
    },
    {
      title: "Wrong meal timing",
      body: "Arriving for dinner when the kitchen already closed or only serves lunch.",
      advice: "Check day-specific kitchen hours before travelling across town.",
    },
    {
      title: "US-style tipping assumptions",
      body: "Expecting high mandatory percentages and feeling awkward at the terminal.",
      advice: "Use a modest personal rule; deepen on the Tipping guide.",
    },
    {
      title: "Waiting for the bill forever",
      body: "Expecting staff to bring the bill automatically at the end.",
      advice: "Ask for de rekening when you are ready — it is normal.",
    },
    {
      title: "Ignoring dietary communication",
      body: "Relying on icons alone for allergies or religious diets.",
      advice: "Ask clearly; call ahead when the risk is high.",
    },
    {
      title: "Mixing sit-down with takeaway culture",
      body: "Treating delivery apps as the same skill set as restaurant dining.",
      advice: "Keep Food delivery for apps; use this page for table culture.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "First dining-out checklist",
    intro: "Use this before your first calm restaurant experiments so modelling stays comparable.",
    items: [
      "Night’s job defined (sit-down / delivery / cook-at-home)",
      "Kitchen hours checked for the right sitting",
      "Reservation made or walk-in plan with backup",
      "Terrace vs indoor decision with weather note",
      "Dietary notes prepared if relevant",
      "Payment method ready (contactless + backup)",
      "Tip approach decided (deepen on Tipping)",
      "Travel time buffer for dinner plans",
      "Food delivery bookmarked for rain/jet-lag nights",
      "Meal kits or supermarket plan for cook nights",
      "Cheap groceries bookmarked if the wider bill needs tactics",
      "Payments / Cash vs card bookmarked if checkout still feels new",
    ],
  },
  howTo: {
    heading: "How to trial Dutch restaurants calmly in one week",
    steps: [
      {
        name: "Learn the levers",
        text: "Write down reservation habits, lunch vs dinner hours, terrace weather, bill asking and a modest tipping rule. Keep Food delivery and Tipping as sibling lanes.",
      },
      {
        name: "Run two short experiments",
        text: "Try one nearby lunch and one booked dinner. Note pacing, payment, dietary communication and whether you needed a reservation.",
      },
      {
        name: "Add a terrace or rainy backup",
        text: "On a sunny day, test terrace seating with an indoor fallback. On a rainy night, compare a restaurant plan with Food delivery.",
      },
      {
        name: "Balance the week",
        text: "Put restaurant totals next to a cook-at-home night (Meal kits or supermarket). Decide which evenings each lane deserves.",
      },
      {
        name: "Keep a calm habit",
        text: "Use sit-down dining for guests, celebrations and terrace weather. Pause habitual dining-out when budget or energy changes — then lean on Cheap, Meal kits or Food delivery as needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to try restaurants in the Netherlands as an expat",
    description:
      "Practical steps for expats to trial sit-down dining in the Netherlands — reservations, lunch vs dinner, terraces, bills, dietary norms and a calm first-week checklist — without relying on fake restaurant rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What are the best restaurants in the Netherlands?",
      a: "There is no universal best list that fits every expat. Fit depends on neighbourhood, budget, dietary needs, occasion and weather. This guide avoids fake awards — learn dining culture levers and run local experiments instead.",
    },
    {
      q: "Do I need a reservation?",
      a: "Often yes for popular dinners and weekend evenings. Walk-ins are more realistic for casual spots, lunch and quieter weeknights — still verify hours and have a backup.",
    },
    {
      q: "How do lunch and dinner differ?",
      a: "Lunch is often shorter and sometimes better value. Dinner is the main social sitting for many venues. Kitchen closing times can differ from door hours — check before you travel.",
    },
    {
      q: "How do I pay and tip?",
      a: "Ask for the bill when ready; contactless debit is common. Tipping is often modest and optional — deepen on the Tipping guide. Payments and Cash vs card cover everyday payment habits.",
    },
    {
      q: "Are vegetarian options easy to find?",
      a: "In many cities, yes — vegetarian and plant-forward dishes are widespread. Allergies and specialty religious diets still need a clear ask to the venue.",
    },
    {
      q: "How is this different from Food delivery?",
      a: "Food delivery owns takeaway apps and grocery delivery. This page owns sit-down dining culture — reservations, terraces, bills and table expectations.",
    },
    {
      q: "How is this different from Tipping?",
      a: "This page gives short tipping orientation for restaurant bills. The Tipping guide owns depth across dining, delivery and everyday service.",
    },
    {
      q: "Do you rank restaurants?",
      a: "No. Soft grocery and meal-kit links are optional cook-at-home modelling tools (with affiliate/referral disclosure where relevant), not a podium of restaurants.",
    },
  ],
  relatedGuides: [
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Takeaway apps and grocery delivery — fees, coverage and tip prompts.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch tipping norms beyond this short restaurant orientation.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription meal-kit boxes — cadence, cost modelling and pause habits.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Spend less with discounters, offers, private label and waste tactics.",
    },
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
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      status: "live",
      description: "Errands, self-checkout how-to, household non-food and deliveries.",
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
      description: "East and Southeast Asian specialty depth.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Turkish and Middle-Eastern specialty depth.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Indian and South Asian specialty depth.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "South African specialty shops and comfort foods.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Where grocery and delivery apps fit in a newcomer install order.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless norms for shops and restaurants.",
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      status: "live",
      description: "Card-first habits and when cash still appears.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Dining-out spend in the wider budget picture.",
    },
    {
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Broader saving habits beyond restaurant nights.",
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
      description: "Everyday routines around shopping and evenings out.",
    },
  ] satisfies GuideLink[],
  foodHub: {
    heading: "Food & daily groceries hub",
    intro:
      "Keep restaurant culture connected to delivery, tipping, meal kits, saving tactics, supermarket fit, specialty lanes, errands and wider Living guides.",
    cards: [
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — sit-down dining culture for expats.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Takeaway apps, grocery delivery, fees and tipping prompts.",
      },
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "Tipping norms depth across dining and everyday service.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription meal-kit modelling and pause habits.",
      },
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
        description: "East and Southeast Asian specialty depth.",
      },
      {
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Turkish and Middle-Eastern specialty depth.",
      },
      {
        label: "Indian supermarkets",
        href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Indian and South Asian specialty depth.",
      },
      {
        label: "South African shops",
        href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
        status: "live",
        description: "South African specialty shops and comfort foods.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Grocery and delivery apps in the install order.",
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
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Model takeaway and grocery delivery for non-restaurant nights.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen Dutch tipping norms beyond this short orientation.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Model subscription dinner boxes as cook-at-home rhythm.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the wider food bill with supermarket saving tactics.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless habits for restaurant bills.",
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      status: "live",
      description: "Card-first culture and residual cash moments.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Install-order context for grocery and delivery tools.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Place dining-out spend in the wider budget.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Restaurants owns sit-down culture; Food delivery owns apps; Tipping owns tip depth; Meal kits owns subscription boxes; Cheap owns saving.",
    "Keep Tipping and Food delivery linked bidirectionally — different lanes, same food cluster.",
    "Soft affiliate tools are cook-at-home modelling — not restaurant rankings.",
  ],
  foodHubTips: [
    "Use the hub to jump between dining, delivery, kits, supermarket and specialty lanes.",
    "Keep Living and money guides linked when budget stress is wider than dinner nights.",
  ],
  exploreNextTips: [
    "Pick one next guide based on your gap: delivery, tipping, meal kits, saving, or payments.",
    "Revisit restaurant habits after you move neighbourhoods — booking and terrace patterns change.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism orientation",
      href: "https://www.holland.com/",
      description: "General Netherlands visitor orientation — verify local restaurant hours and neighbourhood tips independently.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Independent consumer orientation on products and services when available.",
    },
    {
      label: "HelloFresh Netherlands",
      href: "https://www.hellofresh.nl/",
      description: "Example meal-kit alternative for cook-at-home nights — deepen on Meal kits.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "App-based grocery delivery — verify postcode coverage, slots and basket rules.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Full-service supermarket baseline — useful when modelling shop habits against dining-out spend.",
    },
  ],
  disclosure:
    "General orientation only — not financial, dietary or hospitality advice and not a ranking of restaurants. Hours, reservation rules, terrace seasons and payment habits change. Some outbound links may be affiliate or referral links; if you use them, we may earn a commission at no extra cost to you. Verify current terms with each venue before you go.",
};
