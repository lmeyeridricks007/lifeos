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
const VISUAL_PREFIX = "meal-kits-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const mealKitsNetherlandsPage = {
  slug: "meal-kits-netherlands",
  path: MEAL_KITS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(MEAL_KITS_NETHERLANDS_PATH) ?? "2026-09-27",
  seo: {
    title: "Meal Kits Netherlands | Subscription Box Guide for Expats",
    description:
      "Understand meal-kit subscriptions in the Netherlands — how boxes work, delivery cadence, cost modelling vs supermarket cooking, who they suit, pause/skip/cancel habits and a first-box checklist. Not a ranked meal-kit awards list.",
    keywords: [
      "meal kits Netherlands",
      "meal kit subscription Netherlands",
      "HelloFresh Netherlands",
      "meal boxes Netherlands",
      "meal kit cost Netherlands",
      "pause meal kit Netherlands",
      "cancel meal kit Netherlands",
      "expat meal kits Netherlands",
      "subscription dinners Netherlands",
      "meal kit vs supermarket Netherlands",
      "cooking subscription Netherlands",
      "meal kit delivery Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Meal kits Netherlands",
    subtitle:
      "Practical orientation for subscription meal-kit boxes — how they work, cost modelling vs cooking from shops, who they suit, and calm pause/skip/cancel habits — not a ranked “best meal kit” awards list.",
    primaryCta: { label: "See how kits work", href: "#how-they-work" },
    secondaryCta: { label: "Open Cheap groceries", href: CHEAP_GROCERIES_NETHERLANDS_PATH },
    chips: ["How kits work", "Cost modelling", "Who they suit", "Pause & cancel", "Waste vs servings", "First box"],
    disclaimer:
      "General orientation only — not financial, shopping or dietary advice and not a ranking of meal-kit brands or apps. Box prices, delivery windows, recipes and pause rules change. Verify current terms on each provider’s site. Soft provider links below are optional modelling tools, not “best meal kit” winners. Some outbound links may be affiliate or referral links.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch kitchen table: newcomers unpacking a subscription meal-kit box with portioned ingredients, recipe cards and a notepad comparing per-serving cost to a supermarket receipt, soft canal light through a window, welcoming meal-planning mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-they-work", label: "How kits work" },
    { href: "#box-types", label: "Box types" },
    { href: "#delivery", label: "Delivery cadence" },
    { href: "#cost", label: "Cost modelling" },
    { href: "#who-suits", label: "Who they suit" },
    { href: "#pause-cancel", label: "Pause & cancel" },
    { href: "#waste", label: "Servings & waste" },
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
      "Premium orientation board titled Meal Kits Are Modelling Not Rankings — four levers: subscription rhythm, cost vs cooking, pause habits, first-box prep — Checklist rail, Dutch canal kitchen skyline and ExpatLife brand footer.",
      "Meal kits are a subscription tool to model — not a national #1 dinner-box award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of meal-kit levers — how kits work, box types, delivery cadence, cost modelling, who they suit, pause habits — Dutch kitchen band and ExpatLife brand footer.",
      "Six levers explain almost every “meal kits Netherlands” search for newcomers."
    ),
    howTheyWork: visual(
      "how-they-work",
      "Premium subscription-flow desk scene — choose recipes, weekly box arrives, cook with cards, skip or pause next week — Dutch apartment kitchen, General information only rail.",
      "Most Dutch meal kits follow a choose → deliver → cook → skip rhythm."
    ),
    boxTypes: visual(
      "box-types",
      "Premium box-types board — classic dinners, veggie/flex, family size, quick meals on labelled trays — Dutch kitchen light, Verify plan details rail.",
      "Match box type and portion size to your household — not every plan is the same job."
    ),
    delivery: visual(
      "delivery",
      "Premium calendar-and-doorstep scene — weekly delivery window, fridge space notes, neighbour pickup tip — Dutch canal apartment door, Checklist rail for windows.",
      "Delivery cadence only works when the window fits your week and fridge."
    ),
    cost: visual(
      "cost",
      "Premium cost-modelling desk — meal-kit receipt, supermarket staples basket, waste jar, notepad comparing per-serving dinners — Dutch kitchen table, Verify current prices rail.",
      "Compare kit dinners to real supermarket cooking including waste — not promo headlines alone."
    ),
    whoSuits: visual(
      "who-suits",
      "Premium who-suits consultation scene — busy week sticky notes, settling-in calendar, cooking-confidence card — Dutch apartment with bikes outside, ExpatLife brand footer.",
      "Meal kits suit some weeks and households — not every grocery story."
    ),
    pauseCancel: visual(
      "pause-cancel",
      "Premium phone-and-calendar board — skip week, pause subscription, cancel checklist, deadline reminder — Dutch kitchen desk, General information only rail.",
      "Pause, skip and cancel are habits — learn the deadline before the box leaves the warehouse."
    ),
    waste: visual(
      "waste",
      "Premium servings-and-waste board — portion packs, leftover container, spice shelf you already own, unused herb note — Dutch fridge light, Checklist rail.",
      "Per-serving price looks better when you use what arrives and skip weeks you will not cook."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards on a kitchen table — settling-in month, busy project weeks, cooking confidence rebuild, student shared fridge, family dinners, travel-heavy month — Dutch canal window light and ExpatLife brand footer.",
      "Start from your week story, then choose a calm first-box experiment."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting skip deadlines, comparing promo only, ignoring fridge space, treating kits as all groceries — Fix notes and Dutch kitchen skyline.",
      "Most meal-kit friction comes from rhythm and modelling mistakes — not from missing a secret brand."
    ),
    checklist: visual(
      "checklist",
      "Premium first-box checklist clipboard — plan chosen, delivery window saved, skip deadline noted, fridge cleared, cost notepad ready — Dutch kitchen table scene.",
      "Use this checklist so the first meal-kit box stays calm and comparable."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Treat meal kits as a dinner subscription to model — not a full grocery replacement.",
        "Learn skip/pause deadlines before the first box ships.",
        "Compare per-serving cost with store-brand cooking and leftover habits.",
        "Open Cheap groceries for saving tactics; Shopping for errands; Best for supermarket fit; specialty guides only when ingredients are the question.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "How kits work and cost modelling are different levers — learn both.",
        "Who they suit depends on your week, not a viral “best box” post.",
        "Pause habits protect budgets more than hunting promo codes alone.",
        "No section here is a star rating or award claim.",
      ],
    },
    howTheyWork: {
      title: "How-they-work cues",
      items: [
        "Typical flow: pick meals → box arrives → cook with cards → skip or keep next week.",
        "Many apps offer English interfaces — verify your plan’s language options.",
        "Account email and delivery address must match where you actually live that week.",
        "Recipes assume basic pantry oils, salt and common spices — check what you already own.",
      ],
    },
    boxTypes: {
      title: "Box-type cues",
      items: [
        "Classic, veggie/flex, family and quick plans solve different dinner jobs.",
        "Portion size (2, 3, 4+) matters as much as cuisine tags.",
        "Dietary filters help — still read allergen notes on each recipe.",
        "Changing plan type mid-subscription may need a cut-off — check the app.",
      ],
    },
    delivery: {
      title: "Delivery cues",
      items: [
        "Save your delivery window and fridge/freezer space before the first week.",
        "Neighbour or parcel-point handoffs vary — confirm what your address allows.",
        "Travel weeks are skip weeks — do not leave chilled boxes unattended.",
        "Grocery delivery and restaurant takeaway are a different lane — deepen on Food delivery.",
      ],
    },
    cost: {
      title: "Cost cues",
      items: [
        "Model per cooked dinner including waste you avoid — not promo sticker price alone.",
        "Use Albert Heijn or discounter staples as the supermarket baseline.",
        "Picnic-style grocery delivery is another convenience comparator, not a meal-kit twin.",
        "Open Cheap groceries when the question is lowering the whole food bill.",
      ],
    },
    whoSuits: {
      title: "Who-suits cues",
      items: [
        "Busy project weeks and settling-in months often benefit most.",
        "Cooking-confidence rebuilds can use kits as training wheels.",
        "Students and shared houses need clear fridge rules and skip discipline.",
        "If you love market browsing and flexible recipes, kits may feel restrictive — that is fine.",
      ],
    },
    pauseCancel: {
      title: "Pause cues",
      items: [
        "Skip one week vs pause longer vs cancel — know which button you need.",
        "Cut-off times are usually days before delivery — set a calendar reminder.",
        "Promo periods end — model the regular price before locking a habit.",
        "Cancelling should be possible in-app; keep confirmation emails.",
      ],
    },
    waste: {
      title: "Waste cues",
      items: [
        "Unused fresh herbs and half packs raise the true per-serving cost.",
        "Skip weeks you will eat out or travel.",
        "Reuse pantry staples you already bought — do not double-shop blindly.",
        "Leftovers containers turn “two servings” into tomorrow’s lunch when portions allow.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your week story, not a brand ranking thread.",
        "First month: one calm experiment with skip discipline.",
        "Travel-heavy months: pause before the boxes pile up.",
        "Specialty ingredients still belong to International / Asian / Turkish / Indian / South African guides when needed.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Missing skip deadlines is the most expensive habit error.",
        "Comparing only the first-box promo misleads long-term cost.",
        "Treating kits as all groceries leaves breakfast and staples unplanned.",
        "Ignoring fridge space creates spoiled ingredients and frustration.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Plan and portion size chosen before the first ship date.",
        "Delivery window and skip deadline saved in your calendar.",
        "Fridge cleared and basic pantry checked.",
        "Cost notepad ready for a two-week comparison with supermarket dinners.",
      ],
    },
  },
  quickAnswer: {
    heading: "Meal kits are a dinner subscription to model — not a ranked awards list",
    summary:
      "In the Netherlands, meal-kit services typically send weekly boxes of portioned ingredients and recipe cards. They can simplify dinner planning and reduce some waste — but they are not automatically cheaper than supermarket cooking, and they are not a full grocery system. Model cost, cadence and pause habits before treating a kit as your default.",
    bullets: [
      "Learn the choose → deliver → cook → skip rhythm before signing a long promo.",
      "Compare per-serving kit dinners with store-brand cooking including waste and takeaway temptations.",
      "Use pause and skip deadlines as a budget tool — not an afterthought.",
      "This page owns the meal-kit lane; Food delivery owns takeaway and grocery delivery; Cheap owns saving tactics; Dutch / Best / Shopping own supermarket life; specialty guides own homeland ingredients.",
    ],
    note: "If you only do one thing: run one or two boxes with skip deadlines saved, then compare the real euro-per-dinner with a week of supermarket cooking before deciding.",
  },
  introParagraphs: [
    "Expats search “meal kits Netherlands” hoping for an easy dinner system after arrival — fewer decisions, clearer portions, English recipes. Subscription boxes can help in busy or settling-in weeks, but they work best when you understand cadence, cost modelling and pause habits — not when you chase a viral “best meal kit” ranking.",
    "This guide owns the meal-kit lane: how Dutch-style subscriptions typically work, box types, delivery windows, who they suit, per-serving vs waste thinking, and a first-box checklist. Soft provider links are optional modelling tools — HelloFresh especially for kit maths, Picnic and Albert Heijn when comparing grocery alternatives — never a podium of winners.",
    "Use Cheap groceries when the question is spending less overall. Use Dutch and Shopping for supermarket system and errands. Use Best for supermarket fit. Use International, Asian, Turkish, Indian or South African shops when specialty ingredients are the question. Stay here when the question is subscription meal kits specifically.",
  ],
  introHighlights: [
    "Subscription rhythm and skip deadlines — not awards",
    "Cost modelling vs supermarket cooking and waste",
    "Who kits suit in busy or settling-in weeks",
    "Soft grocery and meal-kit CTAs only as optional tools — never rankings",
  ],
  starterChecklist: [
    "Decide the dinner job: busy weeks, settling-in, or cooking confidence — not “replace all groceries”",
    "Note household size and preferred portion count (2 / 3 / 4+)",
    "Check fridge and freezer space for a chilled weekly box",
    "Save the skip/pause cut-off in your calendar before week one",
    "Write a two-week cost notepad: kit dinners vs supermarket dinners",
    "Confirm delivery window against your work and travel calendar",
    "List basic pantry oils, salt and spices you already own",
    "Bookmark Cheap groceries if the whole food bill needs a reset",
  ],
  orientationFlowSteps: [
    "Define the dinner job and household size",
    "Learn skip and delivery deadlines",
    "Run a short first-box experiment",
    "Compare cost and keep, pause or stop",
  ],
  snapshotTips: [
    "Snapshot cards are meal-kit levers — not scores.",
    "Combine kit dinners with supermarket staples in month one for most households.",
    "Re-check after you know your real travel and overtime pattern.",
  ],
  snapshotSignals: [
    {
      label: "Weekly rhythm",
      value: "Choose → box → cook",
      note: "Most services ask you to pick meals, then deliver portioned ingredients with cards.",
    },
    {
      label: "Budget lever",
      value: "Skip / pause",
      note: "Deadlines before shipping often matter more than the first promo price.",
    },
    {
      label: "Cost check",
      value: "Per dinner + waste",
      note: "Compare cooked dinners including unused produce — not sticker price alone.",
    },
    {
      label: "Best fit weeks",
      value: "Busy / settling-in",
      note: "Kits shine when decisions are expensive; quieter weeks may favour shops.",
    },
    {
      label: "Not included",
      value: "Full grocery run",
      note: "Breakfast, snacks, cleaning and specialty homeland foods still need other sources.",
    },
    {
      label: "Language",
      value: "Often English UX",
      note: "Many apps support English — still verify recipe language and allergen notes.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "How kits work",
      body: "Subscription accounts, recipe choice windows and weekly boxes with portioned ingredients.",
    },
    {
      title: "Box types",
      body: "Classic, veggie/flex, family and quick plans — match the job, not the marketing label.",
    },
    {
      title: "Delivery cadence",
      body: "Fixed windows, fridge space and travel weeks decide whether the rhythm holds.",
    },
    {
      title: "Cost modelling",
      body: "Per-serving maths vs supermarket cooking, waste and takeaway temptations.",
    },
    {
      title: "Who they suit",
      body: "Busy weeks, settling-in and cooking confidence — not every household every month.",
    },
    {
      title: "Pause habits",
      body: "Skip, pause and cancel as calm budget tools with real cut-off times.",
    },
  ] satisfies TipCard[],
  howTheyWork: {
    heading: "How Dutch meal-kit subscriptions typically work",
    intro:
      "Most meal-kit services in the Netherlands follow a familiar subscription pattern: you create an account, choose meals before a weekly cut-off, receive a chilled box, cook with recipe cards, then keep, skip or pause the next week.",
    paragraphs: [
      "Expect a digital menu of dinners for the coming week, filters for diet or time, and a delivery slot tied to your address. Ingredients usually arrive portioned for the servings you selected, with a recipe card (paper or in-app).",
      "English-language account and recipe UX is common among larger services — still verify allergen information and that the language you need is available for the recipes you pick.",
      "Meal kits are dinner-forward. They rarely replace breakfast staples, cleaning products, specialty homeland ingredients or spontaneous market shopping — keep Shopping, Cheap and specialty guides in your stack.",
    ],
    rows: [
      {
        lever: "Account & plan",
        whatItMeans: "Subscription with a default number of meals and servings.",
        tip: "Start smaller than your ambition — you can increase after a calm trial.",
      },
      {
        lever: "Recipe window",
        whatItMeans: "A cut-off to pick or swap meals before the box is packed.",
        tip: "Set a reminder a day earlier than the deadline.",
      },
      {
        lever: "Delivery box",
        whatItMeans: "Chilled insulated box with portioned ingredients and cards.",
        tip: "Be home or arrange a safe handoff — do not leave perishables outside long.",
      },
      {
        lever: "Cook night",
        whatItMeans: "Follow the card; assume basic oil, salt and common spices.",
        tip: "Check pantry assumptions before blaming the box for “missing” staples.",
      },
      {
        lever: "Next week control",
        whatItMeans: "Skip, pause or continue before the next packing cut-off.",
        tip: "Treat skip as a normal budget tool, not a failure.",
      },
      {
        lever: "English UX",
        whatItMeans: "Many apps offer English account flows and recipes.",
        tip: "Confirm language and allergen notes for your household’s needs.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Subscription, not a one-off shop",
        body: "Boxes renew until you skip, pause or cancel — plan the rhythm, not only the first promo week.",
      },
      {
        title: "Dinner lane, not full grocery",
        body: "Still shop staples, breakfast and specialty items elsewhere — kits are one tool in the food stack.",
      },
      {
        title: "Deadlines are the product",
        body: "Recipe and skip cut-offs decide whether you pay for a box you will not cook.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "When the question is lowering the whole food bill, not modelling kit dinners alone.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errands, self-checkout and household rhythms around the weekly shop.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Where grocery and delivery apps fit in a newcomer install order.",
      },
    ] satisfies GuideLink[],
  },
  boxTypes: {
    heading: "Box types and plan shapes",
    intro:
      "Providers label plans differently, but most Dutch meal-kit choices cluster into a few practical shapes: classic mixed dinners, veggie or flex, family portions, and quicker weeknight options.",
    paragraphs: [
      "Match the plan to the dinner job. A two-person classic box is a different tool from a family plan or a quick 20-minute filter. Cuisine tags and “premium” lines change — verify what you actually receive in a trial week.",
      "Dietary and allergen filters help shortlist recipes; they are not medical advice. Read each card if someone in the household has allergies or strong preferences.",
    ],
    rows: [
      {
        lever: "Classic / mixed",
        whatItMeans: "Varied dinners across the week with meat and veg options.",
        tip: "Good default for modelling — then specialise if needed.",
      },
      {
        lever: "Veggie / flex",
        whatItMeans: "Plant-forward or flexible meat-light menus.",
        tip: "Still check cheese, eggs and sauce ingredients on each card.",
      },
      {
        lever: "Family / larger servings",
        whatItMeans: "Higher portion counts for households cooking together.",
        tip: "Confirm fridge space — larger boxes need real shelf room.",
      },
      {
        lever: "Quick / easy filters",
        whatItMeans: "Shorter cook times for busy evenings.",
        tip: "Useful in project weeks; still count prep and wash-up time.",
      },
      {
        lever: "Cuisine tags",
        whatItMeans: "Italian, Asian-inspired, Dutch comfort, etc. as menu labels.",
        tip: "Labels are orientation — not a specialty-supermarket replacement.",
      },
      {
        lever: "Addon extras",
        whatItMeans: "Breakfast, lunch or snack add-ons on some plans.",
        tip: "Model extras separately — they change the cost story fast.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Portion size first",
        body: "Servings per meal usually matter more than the marketing name of the plan.",
      },
      {
        title: "Filters ≠ medical advice",
        body: "Use diet filters for convenience; verify allergens yourself for safety.",
      },
      {
        title: "Specialty depth elsewhere",
        body: "Homeland pantry depth still belongs to International / Asian / Turkish / Indian / South African guides.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "When you need specialty ingredients kits will not cover.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Choosing a supermarket fit alongside kit dinners.",
      },
    ] satisfies GuideLink[],
  },
  delivery: {
    heading: "Delivery cadence and doorstep practicalities",
    intro:
      "Meal kits only feel easy when the delivery window matches your week, fridge and travel calendar. Cadence is usually weekly; skip weeks are how you keep the system honest.",
    paragraphs: [
      "Note the cut-off for changing the next box, the expected delivery day/window, and what happens if you are not home. Apartment buildings, neighbours and parcel points vary — confirm what your address can receive.",
      "Restaurant takeaway and grocery delivery apps are adjacent convenience tools, not the same product. This page short-orients only — deepen on Food delivery when that is the night’s job.",
    ],
    rows: [
      {
        lever: "Weekly ship",
        whatItMeans: "Default cadence is one box per week until you skip or pause.",
        tip: "Align ship day with a cook-heavy stretch of your week.",
      },
      {
        lever: "Cut-off clock",
        whatItMeans: "Deadline to edit meals or skip before packing.",
        tip: "Calendar reminder beats relying on memory after work.",
      },
      {
        lever: "Handoff plan",
        whatItMeans: "Home, neighbour, or building rules for chilled parcels.",
        tip: "Decide this before week one — spoiled boxes teach expensive lessons.",
      },
      {
        lever: "Travel weeks",
        whatItMeans: "Trips and weekends away should be skip weeks.",
        tip: "Skip early — do not hope the box “will be fine”.",
      },
      {
        lever: "Fridge capacity",
        whatItMeans: "Insulated boxes still need shelf space once opened.",
        tip: "Clear a shelf the evening before delivery.",
      },
      {
        lever: "Adjacent apps",
        whatItMeans: "Grocery delivery and restaurant takeaway solve different nights.",
        tip: "Model them separately so kit cost stays honest.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Window > wishful thinking",
        body: "A perfect menu fails if the box sits unattended at the wrong door.",
      },
      {
        title: "Skip is normal",
        body: "Healthy subscriptions include empty weeks — that is control, not failure.",
      },
      {
        title: "Not takeaway",
        body: "Kits still require cooking time; takeaway is a different convenience trade.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Restaurant takeaway and grocery delivery when kits are not the night’s job.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "When weekly shop rhythm is the main dinner system instead of kits.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Install-order context for grocery and delivery tools.",
      },
    ] satisfies GuideLink[],
  },
  cost: {
    heading: "Cost modelling vs supermarket cooking",
    intro:
      "Meal kits can look cheap on a first-box promo and expensive on regular pricing — or the reverse once you count waste, takeaway and decision fatigue. Model real dinners, not headlines.",
    paragraphs: [
      "A practical comparison: pick five kit dinners and five supermarket dinners you would actually cook. Include unused herbs, half packs and the takeaway night you skip because a kit meal is ready to cook.",
      "Use a supermarket baseline (full-service or discounter) and, if relevant, grocery delivery fees. Soft links later include HelloFresh for kit modelling, Picnic for delivery grocery, and Albert Heijn as a mainstream baseline — tools for maths, not a ranking podium.",
    ],
    rows: [
      {
        lever: "Promo vs regular",
        whatItMeans: "Intro discounts often end after a set number of boxes.",
        tip: "Model the regular per-serving price before locking a habit.",
      },
      {
        lever: "Per cooked dinner",
        whatItMeans: "Divide box cost by dinners you actually cooked and ate.",
        tip: "Skipped or spoiled meals raise the true average.",
      },
      {
        lever: "Supermarket baseline",
        whatItMeans: "Store-brand staples and a short list-led shop.",
        tip: "Open Cheap groceries for discounter and private-label tactics.",
      },
      {
        lever: "Waste avoided",
        whatItMeans: "Portioned kits can reduce unused produce vs vague shopping.",
        tip: "Only count waste you truly avoid — unused kit herbs still count against you.",
      },
      {
        lever: "Time & decisions",
        whatItMeans: "Less menu planning can be worth euros on busy weeks.",
        tip: "Price your own overtime evenings honestly.",
      },
      {
        lever: "Fees & addons",
        whatItMeans: "Shipping, service or add-on items change the bill.",
        tip: "Read the checkout total, not only the meal headline.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Two-week experiment",
        body: "Run kits and supermarket dinners side by side once — then decide with notes, not vibes.",
      },
      {
        title: "Kits ≠ cheapest always",
        body: "Discounters plus private label often win on euros; kits may win on calm busy weeks.",
      },
      {
        title: "Soft CTAs are tools",
        body: "Provider cards later help you open real pricing pages — they are not awards.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Discounters, offers, private label and waste tactics for the wider bill.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place grocery and kit spend in the wider budget picture.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Broader saving habits when food is one line among many.",
      },
    ] satisfies GuideLink[],
  },
  whoSuits: {
    heading: "Who meal kits suit (and when)",
    intro:
      "Meal kits are a fit for some households and some months — not a permanent identity. Match the tool to the season of your life in the Netherlands.",
    paragraphs: [
      "Busy project weeks, the first months after arrival, and cooking-confidence rebuilds are common wins. Quiet weeks with market browsing joy, strong discounter habits, or heavy travel may favour shops, skips or a full pause.",
      "Shared student houses can use kits if fridge rules and skip discipline are clear — otherwise one person’s box becomes everyone else’s shelf problem.",
    ],
    rows: [
      {
        situation: "Settling-in first months",
        useThis: "Short kit trial for dinner decisions",
        why: "Fewer choices while admin and housing still dominate.",
        watchOut: "Do not ignore skip deadlines during travel for BSN or housing appointments.",
      },
      {
        situation: "Busy project / overtime weeks",
        useThis: "Kits or quick filters for 2–4 dinners",
        why: "Protects against expensive takeaway spirals.",
        watchOut: "Still need breakfast and staple top-ups from shops.",
      },
      {
        situation: "Cooking confidence rebuild",
        useThis: "Classic plan with clear cards",
        why: "Structured recipes teach Dutch-supermarket-adjacent techniques.",
        watchOut: "Graduate to shop-based cooking when confidence returns if cost matters.",
      },
      {
        situation: "Student shared kitchen",
        useThis: "Only with fridge rules + skip calendar",
        why: "Can work for one cook’s dinners.",
        watchOut: "Unlabelled boxes create conflict — agree shelf space first.",
      },
      {
        situation: "Family weeknights",
        useThis: "Family/larger servings if fridge allows",
        why: "Shared dinners with less planning load.",
        watchOut: "Picky eaters may still need flexible supermarket sides.",
      },
      {
        situation: "Travel-heavy month",
        useThis: "Pause or multi-week skip",
        why: "Avoids paying for uncooked boxes.",
        watchOut: "Restart deliberately — do not let auto-ship surprise you.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Seasonal tool",
        body: "Use kits hard for six busy weeks, pause for a quiet month — that is healthy use.",
      },
      {
        title: "Not moral",
        body: "Preferring markets and discounters is not “failing” at meal kits.",
      },
      {
        title: "Household veto",
        body: "If cohabitants hate the recipes, skip or stop early — food friction is costly.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Everyday routines that surround dinner systems.",
      },
      {
        label: "Survival Guide",
        href: LIVING_SURVIVAL_GUIDE_PATH,
        status: "live",
        description: "First-days living orientation while you settle in.",
      },
    ] satisfies GuideLink[],
  },
  pauseCancel: {
    heading: "Pause, skip and cancel habits",
    intro:
      "The healthiest meal-kit habit in the Netherlands is controlling the next box. Skip, pause and cancel are features — learn them before the first delivery leaves the warehouse.",
    paragraphs: [
      "Skip usually stops one week. Pause may stop several. Cancel ends the subscription. Labels differ by provider — read the account screens and confirmation emails rather than assuming supermarket-loyalty rules apply.",
      "Set calendar reminders ahead of cut-offs. Promo pricing ending is another reason to re-model cost before continuing on autopilot.",
    ],
    rows: [
      {
        lever: "Skip week",
        whatItMeans: "Stop the next box only; subscription stays active.",
        tip: "Default tool for travel, guests or restaurant weeks.",
      },
      {
        lever: "Pause",
        whatItMeans: "Longer hold without fully cancelling.",
        tip: "Useful for holidays or intense work sprints.",
      },
      {
        lever: "Cancel",
        whatItMeans: "End the subscription when the experiment is done.",
        tip: "Keep confirmation; check for any final scheduled box.",
      },
      {
        lever: "Cut-off reminder",
        whatItMeans: "Alarm before packing deadline.",
        tip: "One calendar event prevents most “oops” charges.",
      },
      {
        lever: "Promo cliff",
        whatItMeans: "Intro price ends after N boxes.",
        tip: "Re-run cost maths on regular pricing.",
      },
      {
        lever: "Payment method",
        whatItMeans: "Card or iDEAL-linked payment on file.",
        tip: "Update cards before travel so skips still process cleanly.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Control before charm",
        body: "Master skip before falling in love with recipes — budget calm first.",
      },
      {
        title: "Confirmations matter",
        body: "Screenshot or save skip/cancel confirmations until the week passes.",
      },
      {
        title: "Payments context",
        body: "Dutch debit norms still apply — open Payments if card habits are new.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms for subscriptions and shops.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "If you pause kits and need a calm supermarket saving system.",
      },
    ] satisfies GuideLink[],
  },
  waste: {
    heading: "Per-serving price vs waste",
    intro:
      "Meal kits advertise neat portions; real kitchens still waste herbs, sauces and energy when weeks are chaotic. Honest per-serving maths includes what you did not use.",
    paragraphs: [
      "Kits can reduce the classic “bought a whole cabbage for one recipe” problem — and still leave you with soft herbs if you skip cooking. The win is cooking what arrives and skipping weeks you will not.",
      "Reuse pantry staples you already own. Do not double-buy spices every week because a card lists them. Leftover containers turn generous portions into lunch when that fits your household.",
    ],
    rows: [
      {
        lever: "Cook what arrives",
        whatItMeans: "Schedule kit dinners before they wilt.",
        tip: "Put cook nights on the calendar the day the box lands.",
      },
      {
        lever: "Skip empty weeks",
        whatItMeans: "No box is better than a wasted box.",
        tip: "Travel and heavy takeaway weeks → skip early.",
      },
      {
        lever: "Herb reality",
        whatItMeans: "Fresh herbs spoil fastest.",
        tip: "Plan the herb-heavy recipe first in the week.",
      },
      {
        lever: "Pantry overlap",
        whatItMeans: "Oil, salt, spices often assumed at home.",
        tip: "Keep a small staple set; stop rebuying duplicates.",
      },
      {
        lever: "Leftover lunch",
        whatItMeans: "Extra portions can become tomorrow’s meal.",
        tip: "Only count this if someone will actually eat it.",
      },
      {
        lever: "Specialty top-ups",
        whatItMeans: "Homeland ingredients still need specialty shops.",
        tip: "Do not force kits to replace Asian / Turkish / Indian / SA depth.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Waste is a price",
        body: "Uneaten kit ingredients belong in the cost notepad next to the receipt.",
      },
      {
        title: "Skip beats compost guilt",
        body: "Preventing the box is cleaner than mourning wilted parsley.",
      },
      {
        title: "Shops still matter",
        body: "Staples and specialty foods keep living outside the subscription.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cheap groceries — waste",
        href: `${CHEAP_GROCERIES_NETHERLANDS_PATH}#waste`,
        status: "live",
        description: "Wider waste-reduction habits for supermarket shops.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "When specialty East/Southeast Asian ingredients are the gap.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Meal-kit and grocery tools to explore",
    subtitle:
      "Soft CTAs for established meal-kit and grocery patterns when you are modelling subscription boxes against supermarket cooking and grocery delivery. This block is not a ranking of meal-kit apps or a “best box” podium.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for meal-kit modelling — HelloFresh first, then grocery alternatives — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent meal-kit directories here.",
    placementId: "nl-living-meal-kits-support-providers",
    analyticsPageContext: "meal-kits-netherlands-recommended-options",
    categoryLinks: [
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: DUTCH_SUPERMARKETS_PATH, label: "Dutch supermarket system" },
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
      { href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH, label: "International sourcing map" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common meal-kit scenarios",
    intro: "Match your week to a calm first experiment — then deepen with cost notes and skip discipline.",
    rows: [
      {
        situation: "First month after arrival",
        approach: "Small classic plan for a few dinners while admin is heavy; supermarket staples for the rest.",
        firstStep: "Save skip deadline; run two boxes; write a cost notepad.",
      },
      {
        situation: "Busy project weeks",
        approach: "Quick filters for 2–3 dinners; skip when the calendar clears.",
        firstStep: "Align delivery with the heaviest overtime stretch.",
      },
      {
        situation: "Cooking confidence rebuild",
        approach: "Classic cards as training wheels; graduate to shop recipes later if cost matters.",
        firstStep: "Cook every meal that arrives for two weeks — then review.",
      },
      {
        situation: "Student shared fridge",
        approach: "Only with labelled shelf space and a shared skip calendar.",
        firstStep: "Agree fridge rules before the first box ships.",
      },
      {
        situation: "Family weeknights",
        approach: "Larger servings if space allows; flexible sides from the supermarket.",
        firstStep: "Check fridge capacity on family plan sizes.",
      },
      {
        situation: "Travel-heavy month",
        approach: "Pause or multi-skip; restart deliberately after trips.",
        firstStep: "Pause before the first travel week packs.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Missing the skip deadline",
      body: "The box ships, you are away or exhausted, and you pay for food you do not cook.",
      advice: "Put the cut-off in your calendar before week one — treat skip as a normal tool.",
    },
    {
      title: "Comparing only the promo price",
      body: "Intro discounts hide the regular per-serving cost that arrives later.",
      advice: "Model regular pricing and a two-week supermarket comparison before locking a habit.",
    },
    {
      title: "Treating kits as all groceries",
      body: "Breakfast, snacks, cleaning and specialty homeland foods still need other sources.",
      advice: "Keep a supermarket staples list; open specialty guides when homeland ingredients matter.",
    },
    {
      title: "Ignoring fridge and handoff reality",
      body: "Chilled boxes spoil when nobody is home and shelf space is full.",
      advice: "Clear a shelf and confirm a handoff plan before the first delivery.",
    },
    {
      title: "Chasing “best meal kit” rankings",
      body: "Viral awards ignore your household size, travel pattern and cooking joy.",
      advice: "Run your own short experiment — this guide avoids fake podia on purpose.",
    },
    {
      title: "Never revisiting after life changes",
      body: "A kit that fit settling-in may waste money once your routine stabilises.",
      advice: "Re-model every couple of months; pause without guilt when shops win again.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "First-box meal-kit checklist",
    intro: "Use this before the first subscription ship date so modelling stays calm and comparable.",
    items: [
      "Dinner job defined (busy weeks / settling-in / confidence) — not “replace all groceries”",
      "Household size and portion count chosen",
      "Plan type selected (classic / veggie / family / quick)",
      "Delivery window saved against your calendar",
      "Skip/pause cut-off added to calendar with reminder",
      "Fridge/freezer shelf cleared for a chilled box",
      "Handoff plan confirmed (home / neighbour / building rules)",
      "Basic pantry oils, salt and spices checked",
      "Two-week cost notepad ready (kit vs supermarket dinners)",
      "Travel weeks marked as skip or pause",
      "Cheap groceries bookmarked if the wider bill needs tactics",
      "Payments / Essential apps bookmarked if subscription payments or apps are new",
    ],
  },
  howTo: {
    heading: "How to trial meal kits calmly in two weeks",
    steps: [
      {
        name: "Define the dinner job",
        text: "Write why you want kits — busy weeks, settling-in, or cooking confidence — and how many dinners per week. Keep supermarket staples in the plan.",
      },
      {
        name: "Learn the cut-offs",
        text: "Find recipe-choice and skip/pause deadlines in the account. Add calendar reminders one day earlier than each cut-off.",
      },
      {
        name: "Run a short box experiment",
        text: "Order one or two weeks at a realistic portion size. Cook what arrives. Note handoff and fridge friction.",
      },
      {
        name: "Compare real costs",
        text: "Compare kit dinners with supermarket dinners you actually cook, including waste and any takeaway nights avoided or caused.",
      },
      {
        name: "Keep, pause or stop",
        text: "Continue only if the rhythm and euros make sense. Pause or cancel cleanly — then use Cheap groceries or supermarket guides for the next season.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to try meal-kit subscriptions in the Netherlands as an expat",
    description:
      "Practical steps for expats to trial meal-kit boxes in the Netherlands — cut-offs, cost modelling vs supermarket cooking, pause habits and a calm first-box checklist — without relying on fake brand rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best meal kit in the Netherlands?",
      a: "There is no universal best meal kit. Fit depends on household size, diet preferences, delivery windows, travel pattern and whether you value convenience over supermarket euros. This guide avoids fake awards — run a short personal experiment with skip discipline instead.",
    },
    {
      q: "Are meal kits cheaper than supermarket cooking?",
      a: "Sometimes for busy weeks when they replace takeaway and reduce waste — often not versus discounters and private-label cooking on calm weeks. Compare per cooked dinner including unused ingredients and regular (post-promo) prices.",
    },
    {
      q: "How do meal-kit subscriptions usually work?",
      a: "You typically choose recipes before a weekly cut-off, receive a chilled box of portioned ingredients with cards, cook, then skip, pause or continue. Exact rules vary — verify on the provider’s site.",
    },
    {
      q: "Can I pause or cancel easily?",
      a: "Most services offer skip, pause and cancel in the account, with cut-offs before packing. Learn those controls before the first box ships and keep confirmations.",
    },
    {
      q: "Do meal kits replace grocery shopping?",
      a: "Usually no. Kits are dinner-forward. Breakfast, snacks, cleaning products and specialty homeland ingredients still need supermarket or specialty shops.",
    },
    {
      q: "How is this different from Cheap groceries or Dutch supermarkets?",
      a: "Cheap focuses on spending less across shops. Dutch explains the supermarket system. This page owns subscription meal kits — modelling, cadence and pause habits.",
    },
    {
      q: "How is this different from food delivery / takeaway?",
      a: "Meal kits still require cooking with delivered ingredients. Restaurant takeaway and grocery delivery are adjacent convenience tools — deepen on the Food delivery guide for fees, tipping and coverage.",
    },
    {
      q: "Do you rank meal-kit brands?",
      a: "No. Soft provider links are optional modelling tools (with affiliate/referral disclosure where relevant), not a podium of winners.",
    },
  ],
  relatedGuides: [
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Restaurant takeaway apps and grocery delivery — fees, tipping and when delivery wins.",
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
      description: "Dutch tipping norms for restaurants, cafés and delivery — useful beside cook-at-home nights.",
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
      description: "East and Southeast Asian specialty depth when kits are not enough.",
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
      description: "Where grocery apps fit in a newcomer install order.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless norms for shops and subscriptions.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Grocery and kit spend in the wider budget picture.",
    },
    {
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Broader saving habits beyond dinner systems.",
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
    intro:
      "Keep meal-kit modelling connected to saving tactics, supermarket fit, the system primer, specialty lanes, errands and wider Living guides.",
    cards: [
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — subscription meal-kit modelling and pause habits.",
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
        description: "Sit-down dining culture for nights when kits stay home.",
      },
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "Tip norms for restaurant and delivery nights beside cook-at-home weeks.",
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
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Restaurant takeaway and grocery delivery when kits are not the night’s job.",
    },
    {
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Sit-down dining culture for celebration nights between kit weeks.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch tip norms when dining out or ordering delivery beside cook nights.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the wider food bill with supermarket saving tactics.",
    },
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Match remaining grocery needs to a supermarket fit.",
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
      description: "Errand how-to around the weekly shop.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Specialty ingredients kits will not cover.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "SA comfort-food depth when nostalgia cooking matters.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Install-order context for grocery tools.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Place dinner systems in the wider budget.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Meal kits own subscription boxes; Food delivery owns takeaway and grocery delivery; Cheap owns saving; Dutch owns the system; specialty pages own homeland depth.",
    "Keep Food delivery linked for rainy-night and restock lanes — different product from kits.",
    "Soft affiliate tools are not rankings.",
  ],
  foodHubTips: [
    "Use the hub to jump between kit modelling and supermarket or specialty lanes.",
    "Keep Living and money guides linked when budget stress is wider than dinners.",
  ],
  exploreNextTips: [
    "Pick one next guide based on your gap: saving, supermarket fit, or specialty ingredients.",
    "Revisit meal kits after life rhythm changes — pause is allowed.",
  ],
  officialSources: [
    {
      label: "HelloFresh Netherlands",
      href: "https://www.hellofresh.nl/",
      description: "Example meal-kit provider site — verify current plans, prices and pause rules.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Mainstream supermarket baseline and delivery options for cost comparisons.",
    },
    {
      label: "Picnic",
      href: "https://www.picnic.app/",
      description: "App-based grocery delivery — compare with kits when modelling convenience.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Independent consumer orientation on products and services when available.",
    },
  ],
  disclosure:
    "General orientation only — not financial, shopping or dietary advice and not a ranking of meal-kit brands. Prices, delivery windows, recipes and pause rules change. Some outbound links may be affiliate or referral links; if you use them, we may earn a commission at no extra cost to you. Verify current terms on each provider’s site before you subscribe, skip or cancel.",
};
