import { CalendarRange, Repeat2, Sun } from "lucide-react";
import {
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  type LivingQuickStartPhase,
  type LivingSectionNavItem,
} from "@/src/components/living/livingPillarContent";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";

/** Inline rich text with optional external links (no JSX in this file). */
export type GettingAroundRichSegment =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string };

/** @deprecated Use `GettingAroundRichSegment`. */
export type GettingAroundCommutingBodySegment = GettingAroundRichSegment;

export type GettingAroundCommutingInsight = {
  id: "planners" | "rush" | "weather" | "transfers";
  title: string;
  segments: GettingAroundRichSegment[];
};

export const GETTING_AROUND_SECTION_NAV: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#apps", label: "Apps" },
  { href: "#pt-basics", label: "Public transport basics" },
  { href: "#boarding-stops", label: "Boarding & stops" },
  { href: "#how-to-pay", label: "How to pay" },
  { href: "#which-mode", label: "Which mode to use" },
  { href: "#commuting", label: "Commuting" },
  { href: "#cycling", label: "Cycling" },
  { href: "#surprises", label: "What surprises expats" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

/** Bus, tram, and stop behaviour newcomers often miss (not covered by payment alone). */
export type GettingAroundBoardingStopTip = {
  id: "bus-hand" | "stop-request" | "visible-wait" | "boarding-doors";
  title: string;
  body: string;
};

export const GETTING_AROUND_BOARDING_STOP_TIPS: GettingAroundBoardingStopTip[] = [
  {
    id: "bus-hand",
    title: "Raise your hand for the bus",
    body: "On many bus lines—especially outside the busiest city centres—the driver will not pull in unless you clearly signal. Step to the kerb, raise your arm as the bus approaches, and hold it up until the bus slows for your stop. If you only stand still, it may drive past.",
  },
  {
    id: "stop-request",
    title: "Ring off in time on bus and tram",
    body: "Press the stop button or strip (or use the app if the operator supports it) well before your stop so the driver can slow safely. Last-second buzzes annoy everyone and risk a missed stop if traffic is tight.",
  },
  {
    id: "visible-wait",
    title: "Stand where the driver can see you",
    body: "At small shelters and roadside poles, stand clearly next to the stop sign or flag—not three metres back behind a tree. In rain and dark, reflective bits on your bag help drivers picking up on dim routes.",
  },
  {
    id: "boarding-doors",
    title: "Which door to use varies",
    body: "Some city buses open all doors; others expect you to board at the front so the driver sees your tap or ticket. Watch what people do on your line the first time—9292 rarely spells this out.",
  },
];

export const GETTING_AROUND_QUICK_START: LivingQuickStartPhase[] = [
  {
    title: "First day",
    badge: "Tonight",
    priority: "high",
    icon: Sun,
    intro: "Install once, tap correctly, save one real route—before a meeting or class owns your attention.",
    bullets: [
      "NS for trains; 9292 when the trip mixes tram, bus, or metro",
      "Same card or phone for every tap-in and tap-out on a leg—wallet vs plastic counts as two people",
      "OVpay: one leg = one check-in and one check-out; transfers are new legs",
      "Label your life train-first or metro-first for the two addresses you already care about",
      "Save home → work (or school / gemeente) in 9292—you want a rehearsed path, not a panicked search",
    ],
    footHref: LIVING_ESSENTIAL_APPS_PATH,
    footLabel: "Broader app stack (Living)",
  },
  {
    title: "First week",
    badge: "This week",
    icon: CalendarRange,
    intro: "Friction hides in transfers, bike sheds, and forgotten check-outs—rehearse once, then repeat.",
    bullets: [
      "Dry-run check-in/out on a quiet line until it is boring",
      "Do your real commute on a day when being early is fine",
      "OVpay-only is fine for many people; subscriptions come after the pattern is stable",
      "Walk your station: bike parking, gates, escalators—rush hour is the wrong time to learn the maze",
      "One backup route in the app for when your usual line is a mess",
    ],
    footHref: "/netherlands/first-30-days-netherlands/",
    footLabel: "First 30 days playbook",
  },
  {
    title: "Regular commuting",
    badge: "Rhythm",
    icon: Repeat2,
    intro: "Reliability is door-to-door time, a Plan B, and knowing how weather and rush hour change the same timetable.",
    bullets: [
      "Favourite route + one backup that dodges your worst transfer",
      "Rush hour = standing, full racks, slower doors—budget it",
      "Train + bike is one commute, not two hobbies—time the station legs honestly",
      "First month: leave early; later you will know your real slack number",
      "Predictable five minutes early beats heroic exactly-on-time",
    ],
    footHref: "/netherlands/tools/city-comparison/",
    footLabel: "City & commute comparison",
  },
];

export type GettingAroundFaqItem = { id: string; question: string; answer: string };

export const GETTING_AROUND_FAQ_ITEMS: GettingAroundFaqItem[] = [
  {
    id: "bank-card",
    question: "Can I use my bank card on Dutch public transport?",
    answer:
      "Yes, on much of the network—tap contactless debit or a supported phone wallet, then tap out with the same thing. Rules and coverage shift; check your line in the operator app the week you depend on it.",
  },
  {
    id: "first-app",
    question: "Which app should I download first?",
    answer:
      "Trains dominate your week → NS first. Anything multimodal → add 9292. Tapping with a card or phone → OVpay when you want trip history and receipt hygiene. Two apps is normal.",
  },
  {
    id: "ov-chipkaart",
    question: "Do I need an OV-chipkaart?",
    answer:
      "Not on day one for many people—contactless is often enough to start. Buy or load a chipkaart (or a subscription) when your commute is stable or a product requires it.",
  },
  {
    id: "9292-vs-ns",
    question: "Is 9292 better than NS?",
    answer:
      "Different jobs. NS owns train reality: platforms, delays, crowding. 9292 stitches train + tram + bus + metro into one plan. Commuters usually run both.",
  },
  {
    id: "cycling-necessary",
    question: "Is cycling necessary in the Netherlands?",
    answer:
      "No. OV and walking get you far, especially at first. Bikes still win a lot of short trips and station last-miles—treat cycling as optional now, likely later.",
  },
  {
    id: "between-cities",
    question: "How do I commute between Dutch cities?",
    answer:
      "Train between cities; tram, bus, or metro finishes inside town. Plan door-to-door in 9292, expect a transfer, and remember bike parking at big stations is part of the commute—not an afterthought.",
  },
  {
    id: "forget-checkout",
    question: "What happens if I forget to check out?",
    answer:
      "You can hit a maximum fare until the trip is closed. Fix it in the operator or OVpay flow as soon as you notice—waiting rarely makes it cheaper.",
  },
  {
    id: "english",
    question: "Can I get around in English?",
    answer:
      "Usually yes: apps, machines, and signage in major hubs are English-friendly. Spoken announcements may be Dutch-heavy—watch the screen in the app or carriage when you miss a word.",
  },
  {
    id: "international-card-tap",
    question: "Will my international credit or debit card work for tapping in and out?",
    answer:
      "Often yes, especially at NS and on many urban lines—but Dutch bank-issued debit cards remain the most reliable default, and some validators still reject certain foreign schemes. If tapping fails, use a Dutch debit card if you have one, or buy a ticket at an NS machine or service desk. See OVpay for official contactless rules and NS for rail products you can load or print before you travel.",
  },
];

/** Section subtitle (plain language). */
export const GETTING_AROUND_HOW_TO_PAY_SUBTITLE =
  "Check in when you start, check out when you finish. Use the same bank card or the same phone wallet for each leg—then look at subscriptions once your pattern is clear.";

/** Three beats readers can scan first. */
export const GETTING_AROUND_HOW_TO_PAY_FLOW_STEPS: Array<{ title: string; body: string }> = [
  {
    title: "1 · Check in",
    body: "Hold your card or phone to the reader when you enter the vehicle or station travel zone. Wait for the beep or green light.",
  },
  {
    title: "2 · Travel",
    body: "Ride as normal. Transfers can mean a new check-out and check-in—treat each vehicle or operator leg on its own.",
  },
  {
    title: "3 · Check out",
    body: "Tap the same card or same phone when you leave. If you forget, you can be charged a maximum fare until the trip is closed in the app or at a desk.",
  },
];

export type GettingAroundHowToPayConceptCard = {
  id: "one-medium" | "start-simple" | "dutch-vs-foreign" | "troubleshoot";
  title: string;
  paragraphs: string[];
};

export const GETTING_AROUND_HOW_TO_PAY_CONCEPT_CARDS: GettingAroundHowToPayConceptCard[] = [
  {
    id: "one-medium",
    title: "One card or phone per leg",
    paragraphs: [
      "Each leg needs one “medium”: either the physical bank card or Apple Pay / Google Pay on your phone—not both in the same journey. Check in and check out with the same thing so the system can match start and end.",
      "Example: you tapped your phone in the morning; you must tap your phone out in the evening. If you tap your wallet card on the way home, the system sees a new, unfinished trip.",
    ],
  },
  {
    id: "start-simple",
    title: "Contactless first, passes later",
    paragraphs: [
      "You do not need a rail subscription on day one. Tapping a debit card (or phone) is normal for many commuters. After a few weeks, if the same route repeats, compare season tickets or discount products on NS or your local operator.",
    ],
  },
  {
    id: "dutch-vs-foreign",
    title: "Why a Dutch debit card is the safe default",
    paragraphs: [
      "Readers were built around Dutch bank cards. Many international Visa and Mastercard cards now work on NS and in large cities, but some gates and buses still decline foreign cards—that is a technical limit, not a mistake you made.",
      "If tapping fails twice, use a Dutch debit card if you already have an account, or buy a ticket at the machine or service desk so you are not blocking the gate at rush hour.",
    ],
  },
  {
    id: "troubleshoot",
    title: "When the reader says no",
    paragraphs: [
      "Try once more, flat and still. If it still fails, step aside, buy a ticket from the machine (English is usually available), or ask the desk. You can sort odd charges later in OVpay or with the operator—fixing it at the gate rarely goes faster.",
    ],
  },
];

export type GettingAroundHowToPayRealTrip = { title: string; body: string };

export const GETTING_AROUND_HOW_TO_PAY_REAL_TRIPS: GettingAroundHowToPayRealTrip[] = [
  {
    title: "Same train commute every day",
    body: "You tap your phone at Utrecht Centraal when you enter the NS-paid area, take the train, and tap the same phone when you leave Amsterdam Centraal’s zone. Same phone in, same phone out—no extra product needed if contactless is accepted for your route.",
  },
  {
    title: "Tram to the station, then a train",
    body: "You tap in on the tram with your bank card and tap out when you leave the tram. At the station you tap in again for the train leg, then tap out at the end. Each part of the trip has its own check-in and check-out.",
  },
  {
    title: "Only a foreign credit card in your pocket",
    body: "Try tapping at an NS pole or gate. If the reader refuses the card, use an NS ticket machine or the service desk for a barcode ticket or day product. OVpay’s English pages explain which cards work where; rules shift as equipment is replaced.",
  },
];

/** Short reminders under examples. */
export const GETTING_AROUND_HOW_TO_PAY_QUICK_TIPS: string[] = [
  "One physical card or one phone wallet per leg—never mix them on the same journey.",
  "Unsure how a gate works? Wait a few seconds and copy the person ahead of you.",
  "Buses and metros use small readers near the door; NS uses yellow poles or gates—the rule is still tap on, tap off.",
];

/** Intro line before official “where to buy” links. */
export const GETTING_AROUND_HOW_TO_PAY_PURCHASE_INTRO =
  "Paper tickets, barcode travel, and OV-chipkaart products are sold only through official channels:";

export type GettingAroundOfficialPurchaseLink = {
  label: string;
  href: string;
  hint: string;
};

export const GETTING_AROUND_HOW_TO_PAY_PURCHASE_LINKS: GettingAroundOfficialPurchaseLink[] = [
  {
    label: "NS — trains, tickets, and station service",
    href: "https://www.ns.nl/en",
    hint: "Ticket machines and service desks at stations; many rail products online in English.",
  },
  {
    label: "OVpay — contactless travel with bank card or phone",
    href: "https://www.ovpay.nl/en",
    hint: "How tapping works, check-in/out rules, and what counts as one journey.",
  },
  {
    label: "OV-chipkaart — English FAQ (buying a card, balance, missed check-out)",
    href: "https://www.ov-chipkaart.nl/en/frequently-asked-questions",
    hint: "Where to buy an OV-chipkaart, refunds, and fixes when something looks wrong on the card.",
  },
];

/** Right-rail “Beginner mistakes” list. */
export const GETTING_AROUND_HOW_TO_PAY_MISTAKES: string[] = [
  "Checking out with a different card or phone than you used to check in",
  "Forgetting to check out after a cancelled train, early exit, or reroute",
  "Assuming every metro or bus reader behaves exactly like an NS platform pole",
  "Expecting every foreign card to tap—keep a backup (machine ticket or Dutch debit)",
];

/** “Commuting in real life” — practical door-to-door guidance (not app-only timings). */
export const GETTING_AROUND_COMMUTING_SUBTITLE =
  "Planners show vehicle time; your commute is door to desk—walk, bike, stairs, crowding, and weather count.";

export const GETTING_AROUND_COMMUTING_INSIGHTS: GettingAroundCommutingInsight[] = [
  {
    id: "planners",
    title: "Planner time is not door-to-door",
    segments: [
      { kind: "text", text: "Journey times in " },
      { kind: "link", text: "NS", href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web },
      { kind: "text", text: " or " },
      { kind: "link", text: "9292", href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web },
      {
        kind: "text",
        text: " usually measure the train, tram, bus, or metro in motion—not the walk from your door, stairs at the station, or finding the right platform. At busy hubs (Schiphol, Utrecht, Amsterdam Centraal), add buffer until you know the building.",
      },
    ],
  },
  {
    id: "rush",
    title: "Rush hour changes the whole trip",
    segments: [
      {
        kind: "text",
        text: "Peak hours often mean standing room, slower boarding, and full bike racks. If you cycle to the station, locate racks or OV-fiets stands on a calm day so you are not searching ten minutes before work.",
      },
    ],
  },
  {
    id: "weather",
    title: "Weather eats the margin",
    segments: [
      {
        kind: "text",
        text: "Rain and wind slow walks and rides more than a sunny map suggests. For the first weeks, pad door-to-door time; tighten it only after you have done the same trip in bad weather.",
      },
    ],
  },
  {
    id: "transfers",
    title: "Transfers and hybrid weeks",
    segments: [
      { kind: "text", text: "Cross-city trips with a transfer are normal—delays happen. Save a second route in " },
      { kind: "link", text: "9292", href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web },
      {
        kind: "text",
        text: " with a safer connection. On hybrid office weeks, plan margin for the day with the worst weather or tightest schedule, not only the easy run.",
      },
    ],
  },
];

export const GETTING_AROUND_COMMUTING_CHECKLIST: string[] = [
  "Run a full trial once (same bag, same shoes) on a day when being early is fine.",
  "Save a backup trip in 9292 that avoids your tightest transfer or adds one extra connection of slack.",
  "If bike plus train is in the plan, confirm parking or OV-fiets before a day you cannot be late.",
  "Keep extra buffer for the first two weeks, then adjust to real door-to-door numbers.",
];

export type GettingAroundPlanningHook = { label: string; href: string };

export const GETTING_AROUND_COMMUTING_PLANNING_HOOKS: GettingAroundPlanningHook[] = [
  { label: "City comparison", href: "/netherlands/tools/city-comparison/" },
  { label: "Rent affordability", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
  { label: "Cost of living", href: "/netherlands/money/tools/cost-of-living-calculator/" },
  { label: "Job offer comparison", href: "/netherlands/work/tools/job-offer-comparison/" },
  { label: "Survival Guide", href: LIVING_SURVIVAL_GUIDE_PATH },
];

/** “Cycling basics” — rules, flow, security, and first rides for newcomers. */
export const GETTING_AROUND_CYCLING_SUBTITLE =
  "You don’t need a bike on day one—but when you ride, a few Dutch defaults (lights, paths, locks) keep you safe and fine-free.";

export const GETTING_AROUND_CYCLING_INTRO =
  "Cycling here is everyday transport, not a sport photoshoot. Bike lanes are direct, motor traffic is often calmed around them, and locals assume you know the basics—this block is the cheat sheet. No rule says you must ride in week one; many people add a bike after public transport (OV) feels normal, or when the station last mile gets old.";

export type GettingAroundCyclingGuideCard = {
  id: "law" | "flow" | "locks" | "first-rides";
  title: string;
  /** Each entry is one paragraph (may mix text + inline links). */
  paragraphs: GettingAroundRichSegment[][];
};

export const GETTING_AROUND_CYCLING_GUIDE_CARDS: GettingAroundCyclingGuideCard[] = [
  {
    id: "law",
    title: "Lights, phone, and what police check",
    paragraphs: [
      [
        {
          kind: "text",
          text: "After dark and whenever visibility is poor you need a working white front light and red rear light—checks happen and fines are real. A bell and pedal/wheel reflectors are standard on bikes sold here; keep them intact.",
        },
      ],
      [
        {
          kind: "text",
          text: "Holding a mobile phone while riding is against traffic rules—use a handlebar mount or stop at the kerb. For faster e-bike categories, extra rules apply when you buy; ask the shop which regime you’re in.",
        },
      ],
      [
        {
          kind: "text",
          text: "Adults on a normal city bike are not required to wear a helmet—many people still choose one for wet nights or busy arterials.",
        },
      ],
    ],
  },
  {
    id: "flow",
    title: "Paths, bike signals, trams, and who goes first",
    paragraphs: [
      [
        {
          kind: "text",
          text: "Burgundy or red asphalt is usually a bike path—don’t walk your dog there; cross as a pedestrian where crossings are marked. Small traffic lights with a bike symbol apply to you—wait for green before entering the junction.",
        },
      ],
      [
        {
          kind: "text",
          text: "At zebra crossings, pedestrians who step onto the crossing have priority—slow early the way locals do. Tram rails get slippery; if you must cross them, aim for a square angle, not a shallow skid-prone line.",
        },
      ],
      [
        {
          kind: "text",
          text: "When in doubt, watch one light cycle at a busy corner—copying flow beats guessing from home-country habits.",
        },
      ],
    ],
  },
  {
    id: "locks",
    title: "Locks, parking, and theft in cities",
    paragraphs: [
      [
        {
          kind: "text",
          text: "A thin cable alone is not serious protection in Amsterdam, Utrecht, or Rotterdam—pair a hardened U-lock or solid folding lock with a second lock that secures a wheel. Lock the frame to a fixed rack, not just a sign that can be lifted off.",
        },
      ],
      [
        {
          kind: "text",
          text: "Station bike parking fills at rush hour; scout stalls and double-deck racks on a quiet day. Bikes left on wheelchair ramps, bridges, or “verboden te stallen” areas get stickers and removal—check your gemeente site if unsure.",
        },
      ],
      [
        { kind: "text", text: "For train + bike without owning two bikes, " },
        {
          kind: "link",
          text: "OV-fiets",
          href: "https://www.ns.nl/en/door-to-door/ov-fiets",
        },
        {
          kind: "text",
          text: " rental at many NS stations is a common last-mile pattern once you have an OV account set up.",
        },
      ],
    ],
  },
  {
    id: "first-rides",
    title: "How to start without drama",
    paragraphs: [
      [
        {
          kind: "text",
          text: "Rehearse on a Sunday morning or a quiet route with separated paths—not on the first day you’re already late. Mudguards and a visible rain layer beat “FTP” kit; you’ll ride slower into headwinds than maps suggest.",
        },
      ],
      [
        {
          kind: "text",
          text: "Look over your shoulder before moving sideways; call out or ring when passing on the left. If you’re buying second-hand, check brakes, lights, and that the frame isn’t bent—Dutch bargains can hide rust and worn pads.",
        },
      ],
      [
        {
          kind: "text",
          text: "Subscription bikes (e.g. Swapfiets) or a simple omafiets from a reputable shop are normal first choices—upgrade once you know your commute shape.",
        },
      ],
    ],
  },
];

export const GETTING_AROUND_CYCLING_RULES_REMINDERS: string[] = [
  "Ride on the right; pass others on the left when there’s room—don’t undertake queues unpredictably.",
  "Don’t ride on motorways (autosnelweg); follow “bikes forbidden” signs where tunnels or bridges require a detour.",
  "Front light white, rear red—carry spare batteries or a charged USB light if you ride home after work year-round.",
  "Walking your bike on the pavement is fine where cycling is awkward—push it like a pedestrian in those stretches.",
];

export const GETTING_AROUND_CYCLING_OFFICIAL_LINKS: { href: string; label: string }[] = [
  {
    href: "https://www.politie.nl/en/themes/traffic",
    label: "Dutch police — traffic themes (English)",
  },
  {
    href: "https://www.iamsterdam.com/en/live-work-study/transport/biking-in-amsterdam",
    label: "Iamsterdam — biking practicalities",
  },
  {
    href: "https://www.ns.nl/en/door-to-door/ov-fiets",
    label: "NS — OV-fiets rental",
  },
];
