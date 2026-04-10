import type { LivingSectionNavItem } from "@/src/components/living/livingPillarContent";
import {
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingDailyLifeAtAGlance,
  LivingDailyLifeFaqItem,
  LivingDailyLifeHero,
  LivingDailyLifeMeta,
  LivingDailyLifeOfficialBlock,
  LivingDailyLifeQuickStartStage,
  LivingDailyLifeRelatedTools,
  LivingDailyLifeSection,
  LivingDailyLifeSurprisesBlock,
  LivingDailyLifeTips,
} from "./livingDailyLife.types";

export const livingDailyLifeMeta: LivingDailyLifeMeta = {
  dateModified: "2026-04-09",
  articleJsonLd: {
    headline: "Daily Life Basics in the Netherlands",
    description:
      "Groceries, shop hours, paying by card or phone, parcels, recycling, and everyday routines for people new to the Netherlands.",
  },
  faqSectionSubtitle: "Short answers here; follow the links when you want more detail.",
  relatedLivingSubtitle: "Other pages on everyday life in the Netherlands, in the same straightforward style as this guide.",
};

export const livingDailyLifeSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#explore-living-pillar", label: "More daily-life guides" },
  { href: "#start-here", label: "Start here" },
  { href: "#groceries", label: "Groceries" },
  { href: "#opening-hours", label: "Opening hours & errands" },
  { href: "#payments", label: "Payments" },
  { href: "#deliveries", label: "Deliveries" },
  { href: "#waste", label: "Waste & recycling" },
  { href: "#eating-out", label: "Eating out & habits" },
  { href: "#surprises", label: "What surprises expats" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const livingDailyLifeHero: LivingDailyLifeHero = {
  eyebrow: "Living in the Netherlands",
  title: "Daily Life Basics in the Netherlands",
  subtitle:
    "Groceries, shop hours, paying by card or phone, parcels at your door, and sorting waste—clear basics so your first week feels steady, not chaotic.",
  bullets: [
    "Supermarkets: self-scan, bagging your own shopping, and loyalty apps—without comparing every chain",
    "Opening hours: planning Sundays and early closes so you are not caught out",
    "Paying and splitting: tap-to-pay at the till and quick pay-back links after dinner out",
    "Parcels, returns, and bins: pickup codes and rules that depend on where you live",
  ],
  primaryCta: { href: "#start-here", label: "Start with the first week" },
  secondaryCta: { href: "#surprises", label: "See the biggest daily-life surprises" },
  crossLinksParagraph: [
    { type: "link", linkKey: "survivalGuide", label: "Survival Guide" },
    { type: "text", text: " for your first-week overview, " },
    { type: "link", linkKey: "gettingAround", label: "Getting around" },
    { type: "text", text: " for trains, buses, and bikes, " },
    { type: "link", linkKey: "essentialApps", label: "Essential apps" },
    { type: "text", text: " for which apps to install first, and " },
    { type: "link", linkKey: "cultureEtiquette", label: "Dutch Culture & Etiquette" },
    { type: "text", text: " for the social habits behind splitting bills, invitations, and everyday directness." },
  ],
  planningToolsParagraph: [
    { type: "text", text: "Want rough monthly numbers behind the habits? Use " },
    { type: "link", linkKey: "helpfulTools", label: "Planning tools" },
    {
      type: "text",
      text: " for cost of living, utilities, childcare, and healthcare allowance—same style as our Moving and Money pages.",
    },
  ],
  quickStrip: [
    { iconKey: "shoppingBag", label: "Groceries & errands" },
    { iconKey: "creditCard", label: "Tap · PIN · requests" },
    { iconKey: "package", label: "Parcels & pickup" },
    { iconKey: "recycle", label: "Bins · local rules" },
  ],
};

export const livingDailyLifeAtAGlance: LivingDailyLifeAtAGlance = {
  eyebrow: "Orientation",
  title: "At a glance",
  subtitle:
    "Enough practical detail to shop, pay, and collect parcels with confidence—without learning everything at once.",
  cells: [
    {
      title: "What this page is for",
      body: "How shops, checkouts, apps, deliveries, and bins work day to day—so your first weeks feel manageable.",
    },
    {
      title: "Best for",
      body: "Anyone new to the Netherlands who wants simple habits first, before fine-tuning where they shop or spend.",
    },
    {
      title: "What it covers",
      body: "Groceries and self-checkout, opening hours and errands, paying and splitting bills, parcels and returns, waste basics, and everyday café habits.",
    },
    {
      title: "What it skips",
      body: "Price rankings, live fee tables, legal deep dives, and long essays on culture—you will find those on other pages.",
    },
  ],
  note: {
    badgeLabel: "Local reality",
    headline: "Details vary by city, shop, landlord, and municipality",
    body: "Treat this as a helpful overview, not the law. Your address and building rules matter most—check your gemeente website and what your landlord sent you when something looks different.",
    alsoRead: [
      { linkKey: "gettingAround", label: "Getting around" },
      { linkKey: "essentialApps", label: "Essential apps" },
      { linkKey: "cultureEtiquette", label: "Dutch Culture & Etiquette" },
      { linkKey: "survivalGuide", label: "Survival Guide" },
    ],
    runNumbers: {
      links: [
        { linkKey: "costOfLiving", label: "Cost of living" },
        { linkKey: "utilities", label: "Utilities" },
        { linkKey: "childcare", label: "Childcare" },
        { linkKey: "healthcareAllowance", label: "Healthcare allowance" },
      ],
      trailing: "—all listed under Helpful tools on this page.",
    },
  },
};

export const livingDailyLifeTips: LivingDailyLifeTips = {
  startHere: {
    id: "start-here",
    eyebrow: "Start here",
    title: "First days, first week, first month",
    subtitle:
      "Choose the timeframe that fits where you are—each block builds on the one before it.",
    tip: {
      badge: "Priority path",
      text: "Learn how to pay at the till and where your nearest full-size supermarket is before you are tired and hungry.",
    },
  },
};

export const livingDailyLifeQuickStart: LivingDailyLifeQuickStartStage[] = [
  {
    title: "First days",
    badge: "Tonight",
    priority: "high",
    intro: "Sort out paying, bags, and how people reach your front door before you run out of energy.",
    bullets: [
      "Pay with card or phone at a real shop checkout—do not assume cash will be easiest.",
      "Pick one full-size supermarket you can walk or bike to—not only a small station shop.",
      "Ask where rubbish, bulky waste, and mail go (landlord, owners’ association, or gemeente info).",
      "Know how parcels get to you: to the door, with a stairwell code, or via a pickup shop.",
      "In cafés: order, pay when staff ask, and clear your tray if other customers do.",
    ],
    iconKey: "creditCard",
    footHref: LIVING_SURVIVAL_GUIDE_PATH,
    footLabel: "Open the Survival Guide hub",
  },
  {
    title: "First week",
    badge: "This week",
    intro: "Figure out Sunday and evening opening hours before the fridge is empty.",
    bullets: [
      "Save the hours for the branch you actually use—not only the generic chain website.",
      "Try self-checkout once when it is quiet; learn how weighing fruit and veg works without a long queue behind you.",
      "Photo your building’s bin area; bookmark your gemeente waste calendar for your postcode.",
      "Group errands the way locals do—many shops close earlier than newcomers expect.",
      "Place one online order from start to finish: check address details, pickup point, and how returns work.",
    ],
    iconKey: "shoppingBag",
    footHref: "/netherlands/living/apps/",
    footLabel: "See the app guide",
  },
  {
    title: "First month",
    badge: "Settle in",
    intro: "Set routines that fit your budget instead of always choosing whatever is closest.",
    bullets: [
      "Do one big weekly shop plus small top-ups—so you are not paying convenience prices for every forgotten item.",
      "List fixed costs: subscriptions, insurance, delivery memberships.",
      "Borrow one local trick: a quiet shopping time, a pickup point on your commute, or a loyalty scheme you will actually use.",
      "Pay friends back the same day—payment requests (often via Tikkie) are normal even for small amounts.",
      "Swap one pricey default (always the same expensive shop) for a calmer option if it helps.",
    ],
    iconKey: "calendarDays",
    footHref: "/netherlands/money/tools/cost-of-living-calculator/",
    footLabel: "Estimate monthly costs",
  },
];

export const livingDailyLifeSections: LivingDailyLifeSection[] = [
  {
    layout: "stack",
    id: "groceries",
    eyebrow: "Food & shops",
    title: "Groceries and supermarkets",
    subtitle:
      "A simple routine works best: one bigger weekly shop, self-scan checkout, optional supermarket apps, and quick top-ups closer to home.",
    intro: [
      [
        { type: "text", text: "Most people do a larger shop once a week at a full-size store, then pick up bits at a smaller shop nearby. Chains differ on price and " },
        { type: "text", text: "bonus", emphasis: "medium" },
        {
          type: "text",
          text: " offers—pick one chain to learn first. For which apps to install and in what order, see ",
        },
        { type: "link", linkKey: "essentialApps", label: "Essential apps" },
        { type: "text", text: ". For the broader store-by-store routine, self-checkout rhythm, and household-buying angle, open " },
        { type: "link", linkKey: "shoppingGroceries", label: "Shopping & groceries" },
        { type: "text", text: "." },
      ],
      [
        { type: "text", text: "For a rough monthly budget—not shelf-by-shelf prices—use the " },
        { type: "link", linkKey: "costOfLiving", label: "Cost of living calculator" },
        { type: "text", text: " and " },
        { type: "link", linkKey: "utilities", label: "Utilities comparison" },
        { type: "text", text: "." },
      ],
    ],
    howItWorks: [
      {
        title: "Get to know one full-size store first",
        body: "On a calm visit, learn the layout, opening hours, and how checkout works—then try other chains if you like.",
      },
      {
        title: "Try self-scan checkout once",
        body: "Weigh loose fruit and veg when the screen asks, bag at the end, then pay at the machine—staff are used to questions, especially on busy evenings.",
      },
      {
        title: "Add apps when they clearly help",
        body: "Shopping lists, digital coupons, or faster checkout—start with one supermarket’s app; add more only if they save you real time.",
      },
    ],
    cards: [
      {
        kind: "iconRow",
        tone: "accent",
        badge: "Reality check",
        iconKey: "sparkles",
        title: "What catches people out",
        body: "You usually pack your own bags; self-scan is normal even for a small shop; loyalty apps start to help once you use one chain regularly.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Good first habits",
        iconKey: "checkCircle2",
        title: "Do these first",
        bullets: [
          "Keep a foldable bag with you—paying for bags at the till adds up.",
          "Knowing one big store well beats barely knowing several.",
          "Weigh loose produce when the screen tells you to—watch someone once, then do the same.",
        ],
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Self-scan flow",
        iconKey: "shoppingBag",
        title: "At the checkout machine",
        body: "Scan, weigh, bag, pay—if the machine freezes, catch a staff member’s eye; busy evenings are noisy, not unfriendly.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Apps",
        iconKey: "smartphone",
        title: "When your phone is worth it",
        body: "Start with a shopping list or digital coupons for the shop you use most—skip extra features until one app clearly saves time.",
      },
    ],
  },
  {
    layout: "stackWithSidebar",
    id: "opening-hours",
    eyebrow: "Time & errands",
    title: "Shops, opening hours, and everyday errands",
    subtitle:
      "The opening hours of the shop you actually walk to matter more than the national chain website—Sundays, evenings, and pharmacies catch people out.",
    intro: [
      [
        {
          type: "text",
          text: "Hours vary by neighbourhood and city—bigger places often have more Sunday food shops, but late-night opening is not the norm. Group errands into hours when places are open; combine with ",
        },
        { type: "link", linkKey: "gettingAround", label: "public transport or a bike ride" },
        { type: "text", text: ", the same way you plan travel with your OV-chipkaart. For a fuller grocery-and-errands view, read " },
        { type: "link", linkKey: "shoppingGroceries", label: "Shopping & groceries" },
        { type: "text", text: "." },
      ],
    ],
    howItWorks: [
      {
        title: "Save your local branch’s hours",
        body: "The chain’s main website can be wrong—check the branch you actually use.",
      },
      {
        title: "Plan for Sunday and evening",
        body: "Assume smaller windows than in many other countries—note one backup shop before you urgently need milk.",
      },
      {
        title: "Group errands together",
        body: "Pharmacy, parcel pickup, and gemeente visits rarely suit a random drop-in—plan them in one trip when you can.",
      },
    ],
    cards: [
      {
        kind: "iconRow",
        tone: "default",
        badge: "Sunday & evenings",
        iconKey: "clock",
        title: "What to expect",
        body: "Non-food shops are often limited on Sunday; groceries may mean a longer walk or a smaller, pricier store. Weekday early closing still surprises newcomers—save the hours for your real branch, not the generic chain page.",
      },
      {
        kind: "iconRow",
        tone: "accent",
        badge: "Neighbourhood map",
        iconKey: "mapPinned",
        title: "Two streets, two rhythms",
        body: "Late groceries, parcel lockers, and pharmacy hours differ street by street—save yours once; a neat theory does not help when you need food at half past seven.",
      },
    ],
    sidebar: {
      ariaLabelledBy: "dl-errands-forget-heading",
      title: "Errands people forget to plan for",
      items: [
        {
          term: "Pharmacy opening hours",
          detail: "especially if you need to speak to a pharmacist, not just grab something from the shelf.",
        },
        {
          term: "Parcel pickup times",
          detail: "lockers and shops close; carriers send deadlines by text or app.",
        },
        {
          term: "A backup grocery",
          detail: "for when Sunday arrives and your usual shop is shut.",
        },
        {
          term: "Gemeente visits",
          detail: "often need an appointment—dropping in without one can mean a long wait or another trip.",
        },
      ],
    },
  },
  {
    layout: "stack",
    id: "payments",
    eyebrow: "Money in motion",
    title: "Paying, splitting bills, and daily transactions",
    subtitle:
      "Card or phone in shops; payment links when someone pays for the group; bank-app confirmations for many websites—three patterns worth learning once.",
    intro: [
      [
        {
          type: "text",
          text: "Shops expect chip or contactless; after dinner or drinks, people often send pay-back links the same day (Tikkie is the familiar name). Bank apps and how to send requests are covered in ",
        },
        { type: "link", linkKey: "essentialApps", label: "Essential apps" },
        { type: "text", text: ". For the social meaning behind quick pay-backs and clear payment expectations, read " },
        { type: "link", linkKey: "cultureEtiquette", label: "Dutch Culture & Etiquette" },
        { type: "text", text: ". For paying online through your bank (iDEAL) and local habits, see " },
        { type: "link", linkKey: "paymentsBasics", label: "Payments basics" },
        { type: "text", text: "." },
      ],
      [
        { type: "text", text: "Map household cash flow with the " },
        { type: "link", linkKey: "costOfLiving", label: "Cost of living calculator" },
        { type: "text", text: ", " },
        { type: "link", linkKey: "utilities", label: "Utilities comparison" },
        { type: "text", text: ", and — if kids set the pace — " },
        { type: "link", linkKey: "childcare", label: "Childcare" },
        { type: "text", text: " plus " },
        { type: "link", linkKey: "healthcareAllowance", label: "Healthcare allowance" },
        { type: "text", text: " in " },
        { type: "link", linkKey: "helpfulTools", label: "Helpful tools" },
        { type: "text", text: "." },
      ],
    ],
    howItWorks: [
      {
        title: "Tap or insert at the till",
        body: "Card or phone is the norm—cash is fine to have, but slower as your main plan.",
      },
      {
        title: "Send your share the same day",
        body: "One person pays the bill; everyone else sends a payment link. Small amounts are normal—waiting days to pay back feels awkward quickly.",
      },
      {
        title: "Many websites use your bank app",
        body: "Rent portals, tickets, and web shops often send you to your bank to approve payment (iDEAL). After you have done it once, the steps look familiar everywhere.",
      },
    ],
    cards: [
      {
        kind: "iconRow",
        tone: "default",
        badge: "At the till",
        iconKey: "creditCard",
        title: "Contactless default",
        body: "Expect to pay by card or phone; cash is OK to carry, but not the fastest default.",
      },
      {
        kind: "iconRow",
        tone: "accent",
        badge: "Social layer",
        iconKey: "wallet",
        title: "Split the same day",
        body: "One person taps for the group; everyone else sends a pay-back link. Small amounts are normal—slow paybacks stand out more than in many other places.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Web & bills",
        iconKey: "banknote",
        title: "Paying online (iDEAL)",
        body: "Many sites open your bank app so you can approve the payment—do it once, and you will recognise the same flow for tickets, rent, and subscriptions.",
        gridClass: "sm:col-span-2 lg:col-span-1",
      },
    ],
    cardsGridClass: "lg:grid-cols-3",
  },
  {
    layout: "stack",
    id: "deliveries",
    eyebrow: "Parcels & online orders",
    title: "Deliveries, online shopping, and parcel habits",
    subtitle:
      "Couriers and shops send texts and app alerts—pickup points, lockers, and return labels are normal parts of shopping online here.",
    intro: [
      [
        { type: "text", text: "Shopping and delivery apps are grouped with groceries in " },
        { type: "link", linkKey: "essentialApps", label: "Essential apps" },
        {
          type: "text",
          text: ". Turn notifications on for carriers and shops, and if codes land in spam, add those senders to your safe list so you see pickup times and QR codes. For the wider grocery, household, and convenience-shopping routine, use ",
        },
        { type: "link", linkKey: "shoppingGroceries", label: "Shopping & groceries" },
        { type: "text", text: "." },
      ],
    ],
    howItWorks: [
      {
        title: "Check your address details",
        body: "Right name on the doorbell, any stair or gate code, and a backup pickup shop if you are often out—fewer failed delivery visits.",
      },
      {
        title: "When a message arrives, act on it",
        body: "Texts and apps give time slots and pickup codes—screenshot them so you are not guessing at the shop counter.",
      },
      {
        title: "Returns: keep the label and the deadline",
        body: "Start the return in the shop’s app or website, save the label, and note when the parcel must be dropped off—treat it like part of the order, same as delivery.",
      },
    ],
    cards: [
      {
        kind: "gradientChecklist",
        badge: "Checklist",
        titleIconKey: "package",
        title: "Before your first delivery",
        bullets: [
          "How your name shows on the bell, any door code, and how drivers find your flat.",
          "A default pickup shop in retailer apps if you are rarely home.",
          "Screenshot codes from carrier texts or apps when they arrive.",
        ],
      },
      {
        kind: "iconRow",
        tone: "accent",
        badge: "Missed the driver?",
        iconKey: "truck",
        title: "Pickup points & returns",
        body: "Parcels often move to a nearby shop or locker—that message with a code is as important as the order confirmation. To return something, use the retailer’s app or site, bring the label, and hand the parcel in before the date they give you.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Apps",
        iconKey: "smartphone",
        title: "Which apps help",
        body: "Tracking, changing a slot, and scanning a QR at pickup are easier in the app than by email—add carrier apps when you are ordering often enough to care.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Returns",
        iconKey: "undo2",
        title: "Return labels",
        body: "Start while the return window is open, keep the PDF or QR, and use the locker or service point named in the app—not the one you guess might work.",
      },
    ],
    cardsGridClass: "lg:grid-cols-2",
  },
  {
    layout: "stack",
    id: "waste",
    eyebrow: "Household systems",
    title: "Waste, recycling, and household basics",
    subtitle:
      "Your postcode and building matter more than what you did in your last country—photo the bin area and save your gemeente waste calendar.",
    intro: [
      [
        { type: "text", text: "Rules are set by your municipality (gemeente) and often your building. Use your landlord’s note together with " },
        { type: "link", linkKey: "wasteRecycling", label: "Waste, recycling & local habits" },
        {
          type: "text",
          text: " for a longer read—but your official local page still wins for dates and bag types.",
        },
      ],
      [
        { type: "text", text: "Some recurring gemeente or provider charges sit next to utilities—use the " },
        { type: "link", linkKey: "utilities", label: "Utilities comparison" },
        { type: "text", text: " when you budget the whole household." },
      ],
    ],
    howItWorks: [
      {
        title: "Photo the bin room",
        body: "Colours and labels differ; a picture beats memory when you are tired.",
      },
      {
        title: "Open your gemeente waste page",
        body: "Collection days and bag rules depend on your postcode—bookmark the calendar.",
      },
      {
        title: "Ask once, then follow your building",
        body: "What your landlord or owners’ association says overrides guesswork; bulky waste days often need booking a slot.",
      },
    ],
    cards: [
      {
        kind: "iconRow",
        tone: "default",
        badge: "Ask once",
        iconKey: "recycle",
        title: "Checklist",
        bullets: [
          "Which bags or bins this address uses",
          "Glass / paper / plastic: collected at home vs take to a drop-off point",
          "Bulk days and whether you must book",
        ],
      },
      {
        kind: "iconRow",
        tone: "accent",
        badge: "Why early",
        iconKey: "building2",
        title: "Avoid a messy week",
        body: "Fines and neighbour arguments are uncommon; confusion is not. Five minutes on your gemeente waste page plus one photo of the bin labels beats guessing after food waste has sat in the wrong bag.",
      },
    ],
  },
  {
    layout: "stack",
    id: "eating-out",
    eyebrow: "Social rhythm",
    title: "Eating out, cafés, and social everyday habits",
    subtitle:
      "Watch when you pay, clear your tray if others do, and split the bill with payment apps—everyday habits, not a restaurant guide.",
    intro: [
      [
        { type: "text", text: "For the wider social context behind reservations, punctuality, bringing something to a home visit, or how direct people sound when plans change, open " },
        { type: "link", linkKey: "cultureEtiquette", label: "Dutch Culture & Etiquette" },
        { type: "text", text: "." },
      ],
    ],
    cards: [
      {
        kind: "iconRow",
        tone: "default",
        badge: "Casual spots",
        iconKey: "coffee",
        title: "Cafés & lunch",
        body: "Order at the bar when that is how the place works; pay when staff ask, not always when you leave. If other customers clear their trays, do the same—follow the room.",
      },
      {
        kind: "iconRow",
        tone: "default",
        badge: "Evenings",
        iconKey: "utensilsCrossed",
        title: "Reservations & pace",
        body: "Popular places need a reservation; quieter weeknights are easier to try. Service can feel fast—that is often efficiency, not rudeness. Splitting the bill: see the Payments section above.",
      },
    ],
  },
];

export const livingDailyLifeSurprises: LivingDailyLifeSurprisesBlock = {
  eyebrow: "Reality check",
  title: "What surprises newcomers most",
  subtitle: "Quick points—if one saves your Sunday shop or a parcel run, it was worth reading.",
  items: [
    { text: "Self-scan checkout is normal in large supermarkets—staff help, but you are expected to use the machine.", iconKey: "barcode" },
    {
      text: "Sunday and early weekday closing times catch people out—keep one backup shop in mind.",
      iconKey: "clock",
    },
    {
      text: "Parcels often go to a pickup shop or locker—the pickup code matters as much as the order.",
      iconKey: "package",
    },
    {
      text: "Supermarket, bank, and delivery apps are everyday tools here—not optional “techie” extras.",
      iconKey: "smartphone",
    },
    {
      text: "People often send a payment request within hours after a shared bill—waiting feels awkward sooner than in many countries.",
      iconKey: "wallet",
    },
    {
      text: "Waste rules depend on your area; your gemeente website beats guessing which bag is which.",
      iconKey: "recycle",
    },
    {
      text: "Once the habits click, everyday life gets much easier—that is what many people do not expect at first.",
      iconKey: "sparkles",
    },
  ],
};

export const livingDailyLifeFaq: LivingDailyLifeFaqItem[] = [
  {
    id: "surprises-daily",
    question: "What surprises most expats about daily life in the Netherlands?",
    answer:
      "Self-scan is normal in large supermarkets; Sunday and evening hours are tighter than many newcomers expect; parcels often go to a pickup point quickly. Shop, bank, and delivery apps make life easier—without them, errands take longer.",
  },
  {
    id: "grocery-late",
    question: "Are grocery stores open late?",
    answer:
      "Sometimes, in some neighbourhoods—never assume. Check the branch you actually use; keep a Sunday or late-night fallback (different chain or farther walk) before you need it.",
  },
  {
    id: "self-checkout",
    question: "Is self-checkout common?",
    answer:
      "Yes in larger supermarkets. Use staffed lanes for huge shops or while learning produce codes. Bring or buy bags; you usually bag yourself.",
  },
  {
    id: "split-bills",
    question: "How do people usually split bills?",
    answer:
      "One person taps the card; everyone else sends a share via a payment request (Tikkie is the familiar name). Small amounts are normal; paying back the same day is polite.",
  },
  {
    id: "deliveries-returns",
    question: "Are deliveries and returns easy to manage?",
    answer:
      "Usually, when your address and phone number are correct and you respond to carrier texts or app alerts. Returns start in the retailer’s app or website—keep labels and pickup deadlines as carefully as the order itself.",
  },
  {
    id: "need-apps",
    question: "Do I need special apps for everyday life?",
    answer:
      "You do not need every app on day one—but bank, supermarket, and delivery or parcel apps help soon. Use Essential apps for a sensible order to install them.",
  },
  {
    id: "recycling-rules",
    question: "How do I figure out recycling and waste rules?",
    answer:
      "Start with what your landlord or owners’ association says, then your gemeente waste pages. Collection days and bag types differ by city and building—ask once, then screenshot the calendar.",
  },
  {
    id: "first-week-learn",
    question: "What should I learn in the first week?",
    answer:
      "How paying at the till works, reliable grocery hours near you, how parcels reach you, and where waste goes. Add Getting around for travel detail and Essential apps for which apps to download.",
  },
];

export const livingDailyLifeReferences: LivingDailyLifeOfficialBlock = {
  sectionTitle: "Official sources & useful references",
  intro:
    "Municipality websites are the place for waste collection dates, local rules, and building-related notices. Consumer and environment sites help with purchases and greener habits at home—our pages stay explanatory, not legal advice.",
  links: [
    {
      href: "https://www.rijksoverheid.nl/en",
      label: "Dutch government (Rijksoverheid) — English portal →",
    },
    {
      href: "https://www.consumentenbond.nl/",
      label: "Consumentenbond — consumer rights and practical product guidance (NL) →",
    },
    {
      href: "https://www.thuiswinkel.org/",
      label: "Thuiswinkel.org — online shop trustmarks and buyer orientation (NL) →",
    },
    {
      href: "https://www.milieucentraal.nl/",
      label: "Milieu Centraal — household waste, energy, and sustainability tips (NL) →",
    },
  ],
  footerIntro: "Back to",
  footerLinks: [
    { linkKey: "survivalGuide", label: "Netherlands Survival Guide" },
    { linkKey: "gettingAround", label: "Getting around" },
    { linkKey: "essentialApps", label: "Essential apps" },
  ],
};

export const livingDailyLifeRelatedTools: LivingDailyLifeRelatedTools = {
  sectionTitle: "Helpful planning tools",
  sectionSubtitle:
    "Cost of living, utilities, family, and tax-related tools sit alongside what you spend on food and rent—part of the same wider ExpatCopilot planning system used across Living and Move.",
  cards: [
    {
      title: "Cost of living calculator",
      description:
        "Turn groceries, travel, and household costs into a rough monthly total before you settle on habits that are hard to undo.",
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      ctaLabel: "Estimate your costs",
      iconKey: "calculator",
    },
    {
      title: "Utilities & services comparison",
      description: "Compare sign-up hassle with ongoing fees so your home setup matches what you really use.",
      href: "/netherlands/living/tools/utilities-services-comparison/",
      ctaLabel: "Compare packages",
      iconKey: "building2",
    },
    {
      title: "Childcare cost estimator",
      description: "See how daycare-style costs fit your budget when children shape your week.",
      href: "/netherlands/family/tools/childcare-cost-estimator/",
      ctaLabel: "Estimate childcare costs",
      iconKey: "baby",
    },
    {
      title: "Healthcare allowance estimator",
      description:
        "See whether you might get healthcare allowance (toeslag) alongside your premium—helpful when monthly costs still feel unclear.",
      href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
      ctaLabel: "Estimate toeslag",
      iconKey: "stethoscope",
    },
    {
      title: "Netherlands Survival Guide",
      description: "First-week priorities, quick links, FAQs, and more everyday topics in one starting page.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open Survival Guide",
      iconKey: "mapPinned",
    },
    {
      title: "Essential apps for life in the Netherlands",
      description: "Supermarkets, Tikkie, delivery, banking, and travel apps—what to install and in what order.",
      href: LIVING_ESSENTIAL_APPS_PATH,
      ctaLabel: "Open app guide",
      iconKey: "smartphone",
    },
    {
      title: "Getting around in the Netherlands",
      description: "Trains, buses, bikes, and your OV-chipkaart when life is about more than quick trips to the shop.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read transport guide",
      iconKey: "trainFront",
    },
  ],
  roundOutEyebrow: "Plan the bigger picture",
  roundOutTitle: "Rent, net pay, and choosing a city",
  roundOutBody:
    "Rent and salary tools sit in the same shortcut row as on our other Living pages—useful once food and parcels feel sorted and you want to look at housing.",
};
