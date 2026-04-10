import {
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingShoppingFaqItem,
  LivingShoppingMisunderstandingCard,
  LivingShoppingQuickStartStage,
  LivingShoppingReferences,
  LivingShoppingRelatedTools,
  LivingShoppingStoreCategory,
  LivingShoppingSupermarketChain,
  LivingShoppingTips,
} from "./livingShopping.types";

export const livingShoppingQuickStart: LivingShoppingQuickStartStage[] = [
  {
    title: "First shopping trip",
    badge: "Today",
    priority: "high",
    iconKey: "shoppingBag",
    intro: "Treat the first trip like orientation. You are learning the flow, not solving your entire kitchen in one go.",
    bullets: [
      "Find one proper supermarket near home, not just the smallest convenience stop",
      "Do one calm self-checkout run so the screen and bagging flow stop feeling new",
      "Notice whether the store expects a bonus or loyalty app, but do not worry about signing up immediately",
      "Pay attention to what is easy there and what probably belongs in another kind of shop",
      "Buy lightly until you understand your fridge space, walking route, and weekday rhythm",
    ],
    footHref: LIVING_SURVIVAL_GUIDE_PATH,
    footLabel: "Open the Survival Guide",
  },
  {
    title: "First week",
    badge: "This week",
    iconKey: "store",
    intro: "Build a simple local routine so grocery shopping stops feeling like a chore.",
    bullets: [
      "Try one main supermarket and one backup option instead of comparing everything at once",
      "Work out where food, quick top-ups, and household basics fit in your neighborhood",
      "Save the exact branch hours you will actually use, especially for evenings and Sundays",
      "Test whether pickup or delivery would genuinely make life easier where you live",
      "Get comfortable with paying, scanning, and packing so routine errands feel low-stress",
    ],
    footHref: LIVING_DAILY_LIFE_PATH,
    footLabel: "Pair this with Daily Life Basics",
  },
  {
    title: "First month",
    badge: "Settle in",
    iconKey: "calendarDays",
    intro: "Once the basics feel normal, improve the routine gently instead of trying to perfect everything at once.",
    bullets: [
      "Decide which store is best for the weekly shop and which one is only for quick top-ups",
      "Keep one or two store apps if they genuinely help with lists, offers, or delivery slots",
      "Learn where toiletries, cleaning supplies, and home basics are easiest to buy in one extra stop",
      "Notice which items are easy to buy locally and which are better planned ahead",
      "Reduce convenience overspending by spotting the difference between urgent and merely easy",
    ],
    footHref: "/netherlands/money/tools/cost-of-living-calculator/",
    footLabel: "Estimate your monthly cost of living",
  },
];

export const livingShoppingStoreCategories: LivingShoppingStoreCategory[] = [
  {
    title: "Supermarkets",
    badge: "Main weekly shop",
    intro: "The default for staples, fresh basics, drinks, and the main weekly basket.",
    goodFor: ["Staples and repeat groceries", "Fresh basics and fridge restock", "The main weekly basket"],
    whenPeopleUseIt: "When they want one dependable store for the core weekly shop.",
    practicalTip: "Learn one full-size branch first. Branch size matters more than chain reputation at the start.",
    rhythm: "Everyday",
    iconKey: "store",
    visualKey: "weekly-shop",
    internalLink: {
      href: LIVING_DAILY_LIFE_PATH,
      label: "Pair with Daily Life Basics",
      description: "Broader errands, payments, and opening-hours context.",
    },
  },
  {
    title: "Convenience and smaller neighborhood stores",
    badge: "Fast top-up",
    intro: "Best when you forgot something, need tonight's dinner fix, or want a quick stop near home or transit.",
    goodFor: ["Forgotten ingredients", "Snacks and drinks", "Quick walkable top-ups"],
    whenPeopleUseIt: "When they need something fast and do not want to plan a full basket.",
    practicalTip: "Great for top-ups, not always the best value for the whole week.",
    rhythm: "Top-up",
    iconKey: "clock3",
    visualKey: "top-up",
  },
  {
    title: "Drugstores and household basics",
    badge: "Toiletries and cleaning",
    intro: "Often the easiest stop for toiletries, cleaning products, paper goods, and practical home basics.",
    goodFor: ["Toothpaste and personal care", "Detergent and cleaning supplies", "Paper goods and household basics"],
    whenPeopleUseIt: "Once the routine expands beyond food and one grocery basket stops covering everything.",
    practicalTip: "These stores often solve non-food errands faster than a supermarket can.",
    rhythm: "Everyday",
    iconKey: "home",
    visualKey: "household-basics",
  },
  {
    title: "Markets and specialty shops",
    badge: "Fresh or specific needs",
    intro: "Useful for produce, bread, meat, cheese, or food preferences your usual supermarket does not handle well.",
    goodFor: ["Fresh-market rhythm", "Specialty ingredients", "A better fit for how you cook"],
    whenPeopleUseIt: "Once they know their neighborhood and want something more specific than the main store offers.",
    practicalTip: "Helpful once settled, but not essential to master in week one.",
    rhythm: "Occasionally useful",
    iconKey: "shoppingBag",
    visualKey: "specialty",
  },
  {
    title: "Discount and value-oriented shopping",
    badge: "Budget support",
    intro: "Helpful when you want a simpler budget-conscious routine without turning every shop into a promotion hunt.",
    goodFor: ["Stretching the grocery budget", "Keeping staples affordable", "A simpler value-first routine"],
    whenPeopleUseIt: "When the location and product fit genuinely works for their household.",
    practicalTip: "Useful when it fits your route. A cheaper-sounding store is not always better if it creates extra friction.",
    rhythm: "Everyday",
    iconKey: "badgePercent",
    visualKey: "budget",
  },
  {
    title: "Home and basic household goods stores",
    badge: "Simple home setup",
    intro: "Best for storage, kitchen tools, cleaning accessories, and the small home items supermarkets only cover lightly.",
    goodFor: ["Kitchen gear and organizers", "Laundry and cleaning accessories", "First-apartment setup items"],
    whenPeopleUseIt: "When they stop trying to force every household need into a grocery basket.",
    practicalTip: "One separate household stop often saves time compared with piecing things together across food shops.",
    rhythm: "Occasionally useful",
    iconKey: "house",
    visualKey: "home-setup",
    internalLink: {
      href: "/netherlands/living/tools/utilities-services-comparison/",
      label: "See the wider household-cost view",
      description: "Home setup and recurring costs often move together.",
    },
  },
];

/**
 * Major grocery retailers newcomers typically encounter. Editorial snapshot: strengths, trade-offs, and fit—not live price data.
 * Chains vary by neighbourhood; regional banners are marked where relevant.
 */
export const livingShoppingSupermarketChains: LivingShoppingSupermarketChain[] = [
  {
    name: "Albert Heijn (AH)",
    badge: "Full-service leader",
    strengths: [
      "Very wide range under one roof, including many international and ready-meal options in larger branches",
      "Strong store app, Bonus offers, and self-scan in many locations—easy to make one chain your default",
      "Lots of branches; usually easy to find a full-size store in cities and suburbs",
    ],
    drawbacks: [
      "Often priced at the premium end of the mainstream market; convenience can quietly add up",
      "Busy stores and checkout peaks in popular locations",
    ],
    bestFor:
      "People who want one predictable chain for the weekly shop, will use the app or Bonus, and value range and opening hours over the lowest sticker price.",
    iconKey: "store",
  },
  {
    name: "Jumbo",
    badge: "Full-service + value",
    strengths: [
      "Large-format stores with a broad assortment and competitive pricing on many staples",
      "Often a strong alternative to AH for a full weekly basket without feeling like a bare-bones discounter",
      "Growing national presence; English signage and staff are common in bigger cities",
    ],
    drawbacks: [
      "Store layout and pace can feel crowded at peak times",
      "Not every neighbourhood has a full-size Jumbo yet",
    ],
    bestFor:
      "Households that want near–full-service range with a sharper eye on price, and are happy to learn one big store’s layout.",
    iconKey: "shoppingBag",
  },
  {
    name: "Lidl",
    badge: "Discount (German)",
    strengths: [
      "Low prices on staples, bakery, and seasonal specials",
      "Simple, fast shop when you mostly need core ingredients",
      "Predictable discount format once you know the rhythm",
    ],
    drawbacks: [
      "Smaller overall range than AH/Jumbo; fewer premium or niche lines",
      "Aisle layout and “middle aisle” specials can tempt impulse buys",
    ],
    bestFor:
      "Budget-focused shoppers, students, and anyone who is fine trading maximum choice for strong value on everyday items.",
    iconKey: "badgePercent",
  },
  {
    name: "Aldi",
    badge: "Hard discount",
    strengths: [
      "Among the lowest everyday prices for a tight core assortment",
      "Quick to run through when you know what you need",
      "Useful for stocking basics without browsing endless variants",
    ],
    drawbacks: [
      "Minimalist range; not the place for one-stop exotic ingredients",
      "Fewer services and less “full supermarket” comfort than AH/Jumbo",
    ],
    bestFor:
      "Minimalists, very price-sensitive shoppers, and people who treat discount runs as a separate errand from a bigger weekly shop elsewhere.",
    iconKey: "wallet",
  },
  {
    name: "Dirk",
    badge: "Dutch discount",
    strengths: [
      "Straightforward low-price positioning with a familiar Dutch feel",
      "Often strong on staples and simple weekly needs",
    ],
    drawbacks: [
      "Smaller network than national giants; you may not have one nearby",
      "Assortment is simpler than full-service supermarkets",
    ],
    bestFor:
      "Shoppers who want discount pricing with a local-Dutch chain vibe when a branch exists on their route.",
    iconKey: "checkCircle2",
  },
  {
    name: "Plus",
    badge: "Cooperative / franchise",
    strengths: [
      "Neighbourhood-focused stores; many branches feel “local” rather than identical mega-boxes",
      "Produce and service can shine in well-run franchise locations",
    ],
    drawbacks: [
      "Experience varies by owner—one Plus is not always like another",
      "Range may be tighter than the biggest national hypermarkets",
    ],
    bestFor:
      "People whose local Plus is good: it can be an excellent weekly anchor when the branch quality matches your needs.",
    iconKey: "mapPin",
  },
  {
    name: "Coop",
    badge: "Cooperative / franchise",
    strengths: [
      "Often compact and embedded in residential areas—handy for routine shopping",
      "Frequent top-up and daily-basket shopping without a huge trek",
    ],
    drawbacks: [
      "Franchise variation means range and freshness differ by store",
      "May not replace a full-size weekly shop for large households",
    ],
    bestFor:
      "Walkable weekly shopping and top-ups when your Coop branch is strong; pair with a larger store for big stock-ups if needed.",
    iconKey: "home",
  },
  {
    name: "SPAR",
    badge: "Neighbourhood",
    strengths: [
      "Small-footprint stores in many towns—great for quick trips",
      "Opening hours can be friendlier in tourist or village locations (check the branch)",
    ],
    drawbacks: [
      "Higher unit prices than discounters for many items",
      "Limited range compared with full supermarkets",
    ],
    bestFor:
      "Fast top-ups, forgotten ingredients, and when convenience beats price for a small basket.",
    iconKey: "clock3",
  },
  {
    name: "Ekoplaza",
    badge: "Organic & natural",
    strengths: [
      "Strong focus on organic, natural, and sustainable lines when that matters to you",
      "Useful when mainstream supermarkets do not stock the eco or allergy-friendly products you want",
    ],
    drawbacks: [
      "Premium pricing versus conventional supermarkets",
      "Smaller network; not a default for every postcode",
    ],
    bestFor:
      "Organic-first shoppers, specific dietary needs, and people who budget for sustainable groceries as a priority.",
    iconKey: "sparkles",
  },
  {
    name: "Vomar",
    badge: "Regional (north-west)",
    strengths: [
      "Popular in parts of Noord-Holland and nearby for produce and local reputation",
      "Can feel more “regional favourite” than generic national box",
    ],
    drawbacks: [
      "Not a nationwide default—you either have it or you do not",
    ],
    bestFor:
      "Locals in its service area who want a strong regional alternative to the big three when the branch fits their route.",
    iconKey: "house",
    regionNote: "Most common in parts of Noord-Holland and the north-west; check local presence.",
  },
  {
    name: "Hoogvliet",
    badge: "Regional (west)",
    strengths: [
      "Well known in the Rotterdam region with a full-service feel in larger branches",
      "Competitive positioning where the chain operates",
    ],
    drawbacks: [
      "Limited to its region—ignore it unless you live nearby",
    ],
    bestFor:
      "Households in the west who already pass a Hoogvliet and want a familiar full-service option.",
    iconKey: "package",
    regionNote: "Concentrated around Rotterdam and surrounding area.",
  },
  {
    name: "DekaMarkt",
    badge: "Regional (north / east)",
    strengths: [
      "Full-service supermarkets with a strong presence in parts of the north and east",
      "Often competes on weekly-shop comfort in its regions",
    ],
    drawbacks: [
      "Regional coverage only—less relevant elsewhere",
    ],
    bestFor:
      "Shoppers in the north and east who want a local full-service chain instead of only the national leaders.",
    iconKey: "calendarDays",
    regionNote: "Stronger in the north and east of the country.",
  },
  {
    name: "Picnic",
    badge: "Online delivery only",
    strengths: [
      "No store visit—groceries arrive at a scheduled time, useful for heavy baskets or bad-weather weeks",
      "Simple app-first ordering once you know what you buy repeatedly",
    ],
    drawbacks: [
      "Delivery area and slots vary; not available everywhere",
      "Less spontaneity than walking into a store; minimums and fees can apply",
    ],
    bestFor:
      "Delivery-first households, parents with tight time windows, and anyone who prefers planning from the sofa over in-aisle browsing.",
    iconKey: "truck",
  },
];

export const livingShoppingTips: LivingShoppingTips = {
  groceryBasics: [
    {
      title: "Most people settle into a simple weekly rhythm",
      badge: "Core idea",
      body: "A normal Dutch shopping week is usually one bigger shop plus smaller top-ups near home, work, or the station.",
      bullets: [
        "A full-size supermarket usually handles staples and the bigger basket",
        "Smaller branches are often for forgotten ingredients, drinks, or tonight-only top-ups",
        "Once the route is familiar, shopping feels much less complicated than it first looks",
      ],
      iconKey: "calendarDays",
      tone: "accent",
    },
    {
      title: "The nearest store is useful, but not always your main store",
      badge: "What to expect",
      body: "Branch size, pace, layout, and range can change the experience more than the chain name does.",
      bullets: [
        "The same chain can feel very different in the city center, a suburb, or near a station",
        "A slightly larger or calmer branch may be better for the weekly shop than the closest option",
      ],
      iconKey: "store",
    },
    {
      title: "Self-checkout is part of the default flow",
      badge: "Checkout flow",
      body: "For many everyday baskets, scanning and paying yourself is normal rather than a special tech feature.",
      bullets: [
        "Smaller baskets often move through self-checkout first",
        "Staff are still there for age checks, questions, or occasional bag checks",
      ],
      iconKey: "wallet",
    },
    {
      title: "Small habits matter more than perfect optimization",
      badge: "What matters more",
      body: "Knowing one store well, carrying a bag, checking branch hours, and understanding where household basics live helps more than hunting for the perfect chain.",
      bullets: [
        "Routine reduces friction faster than endless comparison",
        "A simple local setup is better than premature optimization",
      ],
      iconKey: "checkCircle2",
    },
  ],
  supermarketHabits: [
    {
      title: "How self-checkout usually feels",
      badge: "Self-checkout",
      body: "You scan, bag, and pay yourself. After one or two calm visits, it usually stops feeling like a hurdle.",
      bullets: [
        "Smaller baskets often move through self-checkout by default",
        "Loose produce, age checks, and random bag checks are normal staff-intervention moments",
        "The awkwardness drops quickly once you have done it once or twice",
      ],
      iconKey: "wallet",
      tone: "accent",
    },
    {
      title: "Why grocery apps become useful",
      badge: "Apps",
      body: "You do not need every app, but one regular store app can make repeat shopping much easier.",
      bullets: [
        "Digital bonus offers often matter more than newcomers expect",
        "Saved lists, easier checkout, and receipts can save time",
        "Delivery slots and favorites help more once you already know the store",
      ],
      iconKey: "smartphone",
    },
    {
      title: "Bonus and loyalty habits in real life",
      badge: "Bonus cards",
      body: "The goal is not to chase every offer. It is to notice when a store clearly expects you to use its app or loyalty setup as part of normal shopping.",
      bullets: [
        "Some branches surface app-based offers heavily at the shelf and checkout",
        "One regular setup is usually enough; you do not need to optimize every promotion",
      ],
      iconKey: "badgePercent",
    },
    {
      title: "Good first habits",
      badge: "Start simple",
      body: "Carry a bag, learn one checkout flow, and add one app only if it clearly helps. That is enough to feel normal quickly.",
      bullets: [
        "Do one calm practice shop before you are rushed",
        "Save one branch in your maps and one branch in your store app if you use it",
        "Let routine settle before you decide anything needs optimizing",
      ],
      iconKey: "checkCircle2",
    },
  ],
  householdShopping: [
    {
      title: "What supermarkets cover well",
      badge: "Good enough with groceries",
      body: "Supermarkets usually cover a first pass at cleaning basics, paper goods, toiletries, and a few home supplies.",
      bullets: ["Fine for detergent, trash bags, tissues, and simple toiletries", "Useful when convenience matters more than variety"],
      iconKey: "home",
      tone: "accent",
    },
    {
      title: "What dedicated stores often do better",
      badge: "Broader range",
      body: "For household organization, beauty products, deeper cleaning supplies, or simple kitchen extras, dedicated stores are often easier.",
      bullets: ["More options for practical basics", "Often a better place for first-apartment setup items"],
      iconKey: "house",
    },
    {
      title: "Toiletries, paper goods, and cleaning products",
      badge: "Everyday household buying",
      body: "These are often the categories that teach newcomers groceries and household shopping are not always the same errand.",
      bullets: ["Buying them with groceries is convenient", "Buying them separately is sometimes simpler or cheaper"],
      iconKey: "package",
    },
    {
      title: "Keep the setup practical, not exhaustive",
      badge: "What helps most",
      body: "You do not need every useful store in town. You need one reliable food shop, one fallback for top-ups, and one option for home basics.",
      bullets: ["The right three-store routine beats a long mental list", "Household shopping gets easier once you know which categories belong together"],
      iconKey: "sparkles",
    },
  ],
  deliveries: [
    {
      title: "When grocery delivery genuinely helps",
      badge: "Useful for",
      body: "Delivery is most useful when it solves a real carrying, time, or family-life problem.",
      bullets: ["Larger shops without carrying everything home", "Weeks when weather, work, or childcare makes your schedule tighter"],
      iconKey: "truck",
      tone: "accent",
    },
    {
      title: "When local shopping is still easier",
      badge: "Still simpler sometimes",
      body: "A quick walk to a known supermarket is often easier than arranging a delivery window when you only need a few things.",
      bullets: ["Top-ups are often easier in person", "A nearby store stays useful even if you like delivery"],
      iconKey: "mapPin",
    },
    {
      title: "What to expect from ordering online",
      badge: "Practical expectations",
      body: "Delivery times, where the service operates, minimum order rules, and being home on time matter more than many newcomers expect.",
      bullets: ["Convenience depends a lot on where you live and how your week works", "Online ordering helps, but it does not replace knowing your local options"],
      iconKey: "package",
    },
    {
      title: "Convenience can quietly cost more",
      badge: "Trade-off",
      body: "Delivery, smaller stores, and urgent top-ups can all be worth it. The useful shift is knowing when you are solving a real problem and when you are just paying for ease.",
      bullets: ["Convenience is not bad; it is just easy to overuse without noticing", "Budget tools help you decide where convenience belongs in a normal month"],
      iconKey: "badgePercent",
    },
  ],
  shopSmarter: [
    {
      title: "Learn one nearby supermarket properly",
      badge: "Keep it simple",
      body: "Knowing one store properly makes life easier faster than comparing every option at once.",
      iconKey: "store",
      tone: "accent",
    },
    {
      title: "Add a second option only when it solves a real need",
      badge: "Second step",
      body: "Maybe that means better household supplies, a calmer weekly shop, or a delivery option that actually fits your schedule - not just variety for its own sake.",
      iconKey: "mapPin",
    },
    {
      title: "Use apps where they genuinely help",
      badge: "Practical tech",
      body: "A list, bonus QR, or delivery slot is useful. Five barely used shopping apps usually are not.",
      iconKey: "smartphone",
    },
    {
      title: "Build the routine before you optimize it",
      badge: "Rhythm first",
      body: "A stable routine makes it much easier to see where you are spending too much and where convenience is worth paying for.",
      iconKey: "calendarDays",
    },
    {
      title: "Figure out your local basics setup early",
      badge: "Confidence move",
      body: "Know where groceries happen, where top-ups happen, and where household basics live. That alone removes a surprising amount of daily friction.",
      iconKey: "checkCircle2",
    },
  ],
  reassurance: {
    startHere: {
      eyebrow: "Reassurance",
      title: "You do not need the perfect shopping setup in week one",
      body: "A good first week means you can buy food without stress, handle checkout, and know where the obvious basics are. Everything after that is refinement, not survival.",
    },
    supermarketHabits: {
      eyebrow: "Keep it practical",
      title: "You do not need every supermarket app right away",
      body: "If one app helps with your regular shop, great. If not, the more important win is learning where your normal shop happens, how you check out, and which habits actually save time in your week.",
    },
    misunderstandings: {
      eyebrow: "What to remember",
      title: "You only need a simple shopping system, not expert-level knowledge",
      body: "If you know where the main shop happens, how checkout works, and which extra stop covers household basics, you already know enough to live normally and improve later.",
    },
    shopSmarter: {
      eyebrow: "What good looks like",
      title: "You understand the rhythm once shopping stops taking extra mental energy",
      body: "A good outcome is simple: you know where the main shop happens, where top-ups happen, what household items belong elsewhere, and when convenience is worth the price. That is enough to keep improving later without stress.",
    },
  },
};

export const livingShoppingMisunderstandings: LivingShoppingMisunderstandingCard[] = [
  {
    title: "Self-checkout is ordinary, not advanced",
    body: "It is part of normal supermarket flow, not something only confident locals use.",
  },
  {
    title: "The best store is often the one that fits your route",
    body: "Routine, branch size, and location usually matter more than a chain's reputation.",
  },
  {
    title: "Store apps matter once you use the same place regularly",
    body: "You do not need them all immediately, but one useful app can quickly become part of the default setup.",
  },
  {
    title: "Top-up shopping gets expensive when it becomes the whole routine",
    body: "Convenience stores are useful, but they are rarely the best way to handle the full week.",
  },
  {
    title: "Some household basics are easier in a separate stop",
    body: "Trying to force every errand into one grocery basket is often less efficient than people expect.",
  },
  {
    title: "Shopping gets easier once each store has a job",
    body: "Confidence comes from a simple system, not from memorizing every option in town.",
  },
];

export const livingShoppingFaq: LivingShoppingFaqItem[] = [
  {
    id: "how-supermarkets-work",
    question: "How do supermarkets work in the Netherlands?",
    answer:
      "For most people, supermarkets are the default for everyday groceries. Branch size and range vary, self-checkout is common, and many newcomers end up with one store for the main weekly shop plus another for quick top-ups.",
  },
  {
    id: "self-checkout",
    question: "Is self-checkout common?",
    answer:
      "Yes. It is a normal part of grocery shopping, especially for smaller baskets. Staff are still nearby for age checks, questions, or occasional bag checks.",
  },
  {
    id: "need-apps",
    question: "Do I need supermarket apps?",
    answer:
      "Not immediately. One app can help with bonus offers, lists, receipts, or delivery once you start using the same store regularly - but you do not need every app on day one.",
  },
  {
    id: "which-store-for-what",
    question: "How do I know which store to use for what?",
    answer:
      "Start with one full-size supermarket and notice what feels easy there versus what clearly belongs elsewhere. Most people end up with a simple setup: one main shop, one top-up option, and one place for household basics.",
  },
  {
    id: "online-groceries",
    question: "Can I order groceries online?",
    answer:
      "Yes, depending on where you live and which services are available there. Delivery can be very useful for bigger shops or busy weeks, but it still helps to know your local stores for top-ups and awkward timing.",
  },
  {
    id: "open-late",
    question: "Are stores open late?",
    answer:
      "Some are, some are not. The safe move is to check the hours for the exact branch you use, especially for Sundays, evenings, and smaller neighborhood locations.",
  },
  {
    id: "household-basics",
    question: "What household basics are easiest to buy with groceries?",
    answer:
      "Basic cleaning items, paper goods, simple toiletries, and a few household supplies are usually easy to buy in supermarkets. For better range, dedicated household or drugstore-style shops are often more practical.",
  },
  {
    id: "surprises-most",
    question: "What usually surprises expats most about shopping?",
    answer:
      "Usually: how normal self-checkout feels, how much branch size changes the experience, how useful one store app can become, and how quickly convenience shopping can raise everyday spending.",
  },
];

export const livingShoppingReferences: LivingShoppingReferences = {
  title: "Official sources and useful references",
  intro:
    "There is no single official Dutch source for grocery-shopping habits, so use this page as practical guidance and use the sources below when you need official consumer, payment, or service information.",
  links: [
    {
      label: "Government.nl - consumer and daily-life topics",
      href: "https://www.government.nl/topics",
    },
    {
      label: "ACM ConsuWijzer - consumer rights in the Netherlands",
      href: "https://www.consuwijzer.nl/",
    },
    {
      label: "iDEAL - online payment system information",
      href: "https://www.ideal.nl/en/",
    },
    {
      label: "Thuiswinkel.org - Dutch e-commerce trust and consumer information",
      href: "https://www.thuiswinkel.org/consumer/",
    },
  ],
  footer:
    "Use local store websites and apps for branch-specific hours, delivery coverage, and weekly offers. For the ExpatCopilot side of the same topic, pair this page with Survival Guide, Daily Life Basics, and Essential Apps.",
};

export const livingShoppingRelatedTools: LivingShoppingRelatedTools = {
  sectionTitle: "Helpful planning tools",
  sectionSubtitle:
    "Part of the wider ExpatCopilot planning system across Living, Move, Money, and Family - use the guides for everyday routines and the tools for monthly cost checks.",
  intro:
    "Start with this guide, Survival Guide, Daily Life Basics, and Essential Apps when you need the routine. Then use the tools below when groceries, convenience, childcare, utilities, or city choice need a clearer monthly picture.",
  cards: [
    {
      title: "Cost of Living Calculator",
      description: "Turn groceries, transport, rent, and household spending into a monthly planning band instead of guessing from single receipts.",
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      ctaLabel: "Estimate monthly costs",
      iconKey: "wallet",
    },
    {
      title: "Utilities & Services Comparison",
      description: "Useful when shopping decisions are tied to bigger household setup costs, recurring bills, and moving into a more stable routine.",
      href: "/netherlands/living/tools/utilities-services-comparison/",
      ctaLabel: "Compare setup costs",
      iconKey: "home",
    },
    {
      title: "Childcare Cost Estimator",
      description: "Helpful for families when shopping convenience, delivery, and weekly errands are competing with childcare schedules and costs.",
      href: "/netherlands/family/tools/childcare-cost-estimator/",
      ctaLabel: "Model childcare costs",
      iconKey: "house",
    },
    {
      title: "City Comparison Tool",
      description: "Compare cities when neighborhood convenience, household spending, and everyday errands are shaping where you want to live.",
      href: "/netherlands/tools/city-comparison/",
      ctaLabel: "Compare cities",
      iconKey: "mapPin",
    },
  ],
  shortcutEyebrow: "Tie it into the wider setup",
  shortcutTitle: "Move, family, and first-month context",
  shortcutBody:
    "Shopping confidence is part of a bigger relocation system. These shortcuts connect groceries and household buying back to arrival planning, first-month sequencing, and family-life budgeting.",
  shortcuts: [
    {
      href: LIVING_SURVIVAL_GUIDE_PATH,
      title: "Netherlands Survival Guide",
      description: "Use the wider Living hub when shopping is only one part of the first-week setup you are still trying to stabilize.",
      meta: "Start with the hub",
    },
    {
      href: "/netherlands/first-30-days-netherlands/",
      title: "First 30 Days",
      description: "Place groceries, errands, and store habits inside your broader arrival timeline once admin and daily life start overlapping.",
      meta: "See the first month",
    },
    {
      href: "/netherlands/first-90-days-netherlands/",
      title: "First 90 Days",
      description: "Useful when shopping rhythm, commuting, childcare, and household costs need to fit inside a more stable post-arrival plan.",
      meta: "Map the quarter",
    },
    {
      href: LIVING_DAILY_LIFE_PATH,
      title: "Daily Life Basics",
      description: "Read this alongside the shopping guide when you want payments, parcels, opening hours, and errands in the same daily-life frame.",
      meta: "Broader daily-life view",
    },
    {
      href: LIVING_ESSENTIAL_APPS_PATH,
      title: "Essential Apps",
      description: "The app guide for supermarket apps, delivery tools, maps, and payments once you know which shopping habits you actually want to keep.",
      meta: "Install the right apps",
    },
  ] as const,
};
