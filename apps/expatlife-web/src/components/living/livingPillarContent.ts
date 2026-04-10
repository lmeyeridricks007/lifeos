/**
 * Single source of truth for Living pillar URLs, Survival Guide sections, and reusable card data.
 * Import from subpages later to keep IA aligned.
 */
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CloudRain,
  HeartPulse,
  Languages,
  Recycle,
  ShoppingBag,
  Smartphone,
  TrainFront,
  Users,
  Wallet,
} from "lucide-react";

export const LIVING_SURVIVAL_GUIDE_PATH = "/netherlands/living/survival-guide/" as const;
export const LIVING_PILLAR_ROOT_PATH = "/netherlands/living/" as const;
/** Full Living guide: trains, OVpay, apps, multimodal commuting. */
export const LIVING_GETTING_AROUND_PATH = "/netherlands/living/getting-around/" as const;
export const LIVING_ESSENTIAL_APPS_PATH = "/netherlands/living/apps/" as const;
/** Practical groceries, shops, payments, deliveries, and household rhythms. */
export const LIVING_DAILY_LIFE_PATH = "/netherlands/living/daily-life/" as const;
export const LIVING_SHOPPING_GROCERIES_PATH = "/netherlands/living/shopping-groceries/" as const;
export const LIVING_HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const LIVING_EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;
export const LIVING_LANGUAGE_PATH = "/netherlands/living/language/" as const;
export const LIVING_WEATHER_PATH = "/netherlands/living/weather/" as const;

/** Matches cluster `breadcrumbLabel` tone used across Living child pages. */
export const LIVING_PILLAR_BREADCRUMB_LABEL = "Living in the Netherlands";

export type LivingSectionNavItem = { href: string; label: string };

export const LIVING_SURVIVAL_SECTION_NAV: LivingSectionNavItem[] = [
  { href: "#quick-start", label: "First days in NL" },
  { href: "#categories", label: "Living topics" },
  { href: "#often-missed", label: "Easy to overlook" },
  { href: "#essentials", label: "Everyday essentials" },
  { href: "#tools", label: "Planning tools" },
  { href: "#continue", label: "Other pillars" },
  { href: "#coming-next", label: "Coming next" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export type LivingQuickStartPhase = {
  title: string;
  intro: string;
  bullets: string[];
  /** Short label for urgency / sequencing (e.g. “Tonight”). */
  badge?: string;
  /** Visual emphasis for the highest-priority card. */
  priority?: "high";
  /** Override default icon order when reusing `LivingQuickStartCards`. */
  icon?: LucideIcon;
  footHref?: string;
  footLabel?: string;
};

export const LIVING_QUICK_START_PHASES: LivingQuickStartPhase[] = [
  {
    title: "First 48 hours",
    badge: "Tonight",
    priority: "high",
    intro: "Before you optimise anything: can you pay, travel, and find home without friction?",
    bullets: [
      "SIM or eSIM live before you leave the airport or station",
      "One transit app installed and a test route saved (check-in/out rules included)—bookmark Getting around for OV depth and Essential apps for the wider install order before your first real commute",
      "A payment path that works at Albert Heijn/Jumbo tills—not just restaurants",
      "Address + nearest grocery pinned offline-capable maps",
      "112 saved; know it is emergencies only",
    ],
    footHref: "/netherlands/moving/tools/arrival-planner/",
    footLabel: "Run the arrival checklist",
  },
  {
    title: "First week",
    badge: "This week",
    intro: "Turn one-off wins into a repeatable week—so admin does not eat every evening.",
    bullets: [
      "Bike plan: OV-only vs rental vs buy, matched to your commute",
      "Grocery rhythm: bags, self-checkout, Sunday hours, and your nearest AH/Jumbo/Vomar",
      "Inbox sweep: which letters are yours vs landlord (water board, gemeente, building)",
      "Quiet hours & stairwell norms—especially in older flats",
      "One social anchor: language café, sport, or colleague coffee",
    ],
    footHref: "/netherlands/first-30-days-netherlands/",
    footLabel: "Read the first-30-days playbook",
  },
  {
    title: "First month",
    badge: "Settle in",
    intro: "Lock recurring systems so bills, bins, and bandwidth stop surprising you.",
    bullets: [
      "Utilities & internet you own: contracts aligned with meter readings",
      "Waste calendar on the fridge; first mistake is usually the wrong bag day",
      "Ten high-yield Dutch phrases (dag/hoi, alstublieft, sorry, fietsstraat awareness)",
      "Commute + calendar cadence locked with work or school start times",
      "Sanity-check rent and net pay with calculators—adjust lifestyle before stress spikes",
    ],
    footHref: "/netherlands/moving/tools/first-90-days/",
    footLabel: "Map the full 90 days",
  },
];

export type LivingTopicCard = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Short CTA label for the card link (avoid generic “Explore”). */
  cta?: string;
};

export const LIVING_SURVIVAL_TOPIC_CARDS: LivingTopicCard[] = [
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "NS, 9292, OVpay, tap-in discipline, multimodal commuting, and cycling context—practical onboarding, not a timetable dump.",
    icon: TrainFront,
    cta: "Read the transport guide",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "Curated install order: transport, Tikkie, groceries, delivery, and daily-life apps—without an app-store wall.",
    icon: Smartphone,
    cta: "Open the app guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Shop hours, building quirks, and the unwritten rules of a Dutch week.",
    icon: ShoppingBag,
    cta: "Browse daily rhythms",
  },
  {
    href: LIVING_SHOPPING_GROCERIES_PATH,
    title: "Shopping & groceries",
    description: "How supermarket habits, self-checkout, store apps, deliveries, and household buying actually work in daily Dutch life.",
    icon: ShoppingBag,
    cta: "Read the shopping guide",
  },
  {
    href: LIVING_HEALTHCARE_BASICS_PATH,
    title: "Healthcare Basics",
    description: "How insurance, the GP, pharmacies, urgent care, and emergency routes fit together once you actually live here.",
    icon: HeartPulse,
    cta: "Read healthcare basics",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Directness, invitations, neighbors, work culture, and the small social norms that surprise newcomers.",
    icon: Users,
    cta: "Read culture & etiquette",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "High-yield Dutch for tills, bike paths, and neighbours—without a course first.",
    icon: Languages,
    cta: "Grab starter phrases",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "Wind, drizzle, and heat spikes—how to dress and plan like you mean to stay.",
    icon: CloudRain,
    cta: "Plan by season",
  },
  {
    href: "/netherlands/living/payments/",
    title: "Payments & money basics",
    description: "PIN-first tills, contactless norms, and where iDEAL shows up before “banking deep dives.”",
    icon: Wallet,
    cta: "Understand PIN & iDEAL",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "112, urgent vs non-urgent, lost items, and the calm first steps worth knowing once.",
    icon: AlertTriangle,
    cta: "See who to call",
  },
  {
    href: "/netherlands/living/waste-and-recycling/",
    title: "Waste, recycling & local habits",
    description: "Which bag is which, pickup cadence, and how streets stay quiet about it.",
    icon: Recycle,
    cta: "Sort like your street",
  },
];

export type LivingToolShortcut = { href: string; title: string; description: string; meta?: string };

export const LIVING_SURVIVAL_TOOL_SHORTCUTS: LivingToolShortcut[] = [
  {
    href: "/netherlands/money/tools/cost-of-living-calculator/",
    title: "Cost of living calculator",
    description: "Turn rent, lifestyle, and city choice into a monthly band you can defend in conversation.",
    meta: "Run the numbers",
  },
  {
    href: "/netherlands/housing/tools/rent-affordability-calculator/",
    title: "Rent affordability calculator",
    description: "Stress-test rent plus utilities-shaped lines before you sign.",
    meta: "Check rent headroom",
  },
  {
    href: "/netherlands/living/tools/utilities-services-comparison/",
    title: "Utilities & services comparison",
    description: "Line up setup costs next to recurring charges so the first invoices do not sting.",
    meta: "Compare packages",
  },
  {
    href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
    title: "Healthcare allowance estimator",
    description: "See if toeslag-style help is in play beside mandatory insurance premiums.",
    meta: "Estimate toeslag",
  },
  {
    href: "/netherlands/family/tools/childcare-cost-estimator/",
    title: "Childcare cost estimator",
    description: "Map daycare and BSO-style lines against net household cash flow.",
    meta: "Model childcare costs",
  },
  {
    href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
    title: "Dutch salary (net) calculator",
    description: "Anchor payslip reality before you fix rent, OV, and savings targets.",
    meta: "See net pay",
  },
  {
    href: "/netherlands/tools/city-comparison/",
    title: "City comparison tool",
    description: "Compare commute friction, cost anchors, and lifestyle fit across cities you are weighing.",
    meta: "Compare cities",
  },
  {
    href: "/netherlands/transport/tools/",
    title: "Transport tools hub",
    description: "OV vs bike trade-offs in one place when you are still choosing a rhythm.",
    meta: "Open transport tools",
  },
];

/** CardLink strip below primary ToolCards on Getting Around — avoids duplicating city/rent/COL/job rows. */
export const LIVING_GETTING_AROUND_SUPPLEMENTAL_TOOLS: LivingToolShortcut[] = [
  LIVING_SURVIVAL_TOOL_SHORTCUTS[2]!,
  LIVING_SURVIVAL_TOOL_SHORTCUTS[3]!,
  LIVING_SURVIVAL_TOOL_SHORTCUTS[4]!,
  LIVING_SURVIVAL_TOOL_SHORTCUTS[5]!,
];

export type LivingClusterLinkItem = {
  href: string;
  title: string;
  description: string;
  /** Link label; default “Open guide”. */
  cta?: string;
};

/** Related Living topic cards — shared pattern for full Living guides (cluster siblings). */
export const LIVING_CLUSTER_SIBLING_LINKS_GETTING_AROUND: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The Living hub: payments, weather, groceries, first-week sequencing, FAQs, and the full tool strip.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "Full install guide: transport, payments, groceries, delivery, and daily-life stack in one place.",
    cta: "Open the app guide",
  },
  {
    href: "/netherlands/living/payments/",
    title: "Payments basics",
    description: "PIN-first tills and phone wallets sit beside OVpay—useful when you are juggling cards for travel and shops.",
    cta: "See payment norms",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Shop hours, building norms, and the rhythm of a Dutch week once commutes feel familiar.",
    cta: "Browse daily rhythms",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "Emergency numbers, urgent vs non-urgent situations, and calm first-response basics for daily Dutch life.",
    cta: "Open safety guide",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "Wind, rain, and darker days change how a commute feels—useful when bike and OV plans need weather realism too.",
    cta: "Plan for Dutch weather",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Useful Dutch for stations, shops, cafes, and neighbors when a tiny language layer makes transport feel easier.",
    cta: "Grab practical phrases",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Directness, shared-space norms, and social expectations that shape commuting, neighbors, and work conversations.",
    cta: "Read culture & etiquette",
  },
];

/** Related Living guides from the Daily Life Basics page. */
export const LIVING_CLUSTER_SIBLING_LINKS_DAILY_LIFE: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description:
      "One page for your first week: priorities, quick links, tools, and FAQs—alongside this daily-life guide.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "Supermarket, Tikkie, delivery, and bank apps—what to install and in what order.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_SHOPPING_GROCERIES_PATH,
    title: "Shopping & groceries",
    description: "A practical guide to supermarkets, self-checkout, store types, household basics, and delivery trade-offs in Dutch daily life.",
    cta: "Read shopping guide",
  },
  {
    href: LIVING_HEALTHCARE_BASICS_PATH,
    title: "Healthcare Basics",
    description: "Insurance, GP registration, pharmacies, urgent care, and the healthcare flow newcomers usually need to learn early.",
    cta: "Read healthcare basics",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "112, urgent situations, lost items, and simple everyday readiness when you want calm first steps rather than drama.",
    cta: "Read safety basics",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Trains, buses, bikes, and paying for travel when you need more than a quick errand on foot.",
    cta: "Read transport guide",
  },
  {
    href: "/netherlands/living/payments/",
    title: "Payments basics",
    description: "PIN-first tills, contactless norms, and iDEAL-shaped flows next to everyday splitting culture.",
    cta: "See payment norms",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "What Dutch weather really feels like through the year, plus clothing and commuting habits that make everyday errands easier.",
    cta: "See weather basics",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Directness, invitations, work basics, and the social cues behind everyday routines.",
    cta: "Read culture & etiquette",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Starter Dutch for shops, service counters, and neighbor moments when daily routines feel easier with a few useful lines.",
    cta: "Open language guide",
  },
  {
    href: "/netherlands/tools/",
    title: "All planning tools",
    description: "Calculators and planners for moving, money, housing, family, and taxes—all in one tools hub.",
    cta: "Open tools hub",
  },
];

/** Related Living guides from the Essential Apps page. */
export const LIVING_CLUSTER_SIBLING_LINKS_ESSENTIAL_APPS: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "One page for your first days: priorities, quick links, tools, and FAQs—alongside this app guide.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Trains, route planners, paying for travel, and bikes—when you need more than a one-line tip.",
    cta: "Read transport guide",
  },
  {
    href: LIVING_SHOPPING_GROCERIES_PATH,
    title: "Shopping & groceries",
    description: "How supermarket apps, delivery tools, self-checkout, and everyday store habits fit together once the phone setup is done.",
    cta: "Read shopping guide",
  },
  {
    href: LIVING_HEALTHCARE_BASICS_PATH,
    title: "Healthcare Basics",
    description: "Useful when insurer apps, saved contacts, and practical local setup matter as much as the rest of your phone stack.",
    cta: "Read healthcare basics",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "Useful when saved contacts, maps, and your phone setup need to support calm first steps if something suddenly goes wrong.",
    cta: "Read safety basics",
  },
  {
    href: "/netherlands/living/payments/",
    title: "Payments basics",
    description: "How PIN, contactless, and iDEAL-shaped flows fit next to Tikkie and your bank app.",
    cta: "See payment norms",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Shops, buildings, and weekly rhythms once your home screen is sorted.",
    cta: "Browse daily rhythms",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "The practical side of wind, rain, and dark days when app choices and commute planning depend on the weather too.",
    cta: "See weather guide",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Read the social norms behind invitations, direct communication, and work or neighbor interactions.",
    cta: "Read culture & etiquette",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Practical Dutch for transport, cafes, shops, and work or neighbor moments when your apps are already sorted.",
    cta: "Open language guide",
  },
];

export const LIVING_CLUSTER_SIBLING_LINKS_LANGUAGE: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The wider Living hub for first-week priorities, apps, payments, weather, and the bigger orientation picture.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Groceries, shops, parcels, and payment routines - the everyday contexts where these phrases appear most often.",
    cta: "Read Daily Life Basics",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "The phone stack that supports transport, payment, shopping, and messaging once language confidence starts improving.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Stations, platforms, route questions, and transport habits - useful when language friction shows up on the move.",
    cta: "Read transport guide",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "Wind, rain, and dark-day routines that shape clothing, commuting, and the everyday situations where language confidence matters too.",
    cta: "Read weather guide",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "The social layer behind greetings, directness, politeness, and why a little Dutch often helps more than expected.",
    cta: "Read culture & etiquette",
  },
];

export const LIVING_CLUSTER_SIBLING_LINKS_WEATHER: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The wider Living hub for first-week priorities, weather context, apps, payments, and the bigger daily-life picture.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Groceries, errands, parcels, and household routines that feel different once wind, rain, and darker days enter the picture.",
    cta: "Read Daily Life Basics",
  },
  {
    href: LIVING_SHOPPING_GROCERIES_PATH,
    title: "Shopping & groceries",
    description: "Supermarkets, delivery, household basics, and store habits when the weather starts affecting how and where you shop.",
    cta: "Read shopping guide",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "Transport, maps, groceries, and weather apps that help everyday plans hold together when conditions change fast.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Bike, train, bus, and route-planning habits when weather changes how your commute actually feels.",
    cta: "Read transport guide",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Useful Dutch for weather-small-talk, quick transport questions, and the short everyday moments that happen outside and on the move.",
    cta: "Open language guide",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "The social side of planning around weather, staying flexible, and understanding why daily life keeps moving in conditions newcomers often avoid.",
    cta: "Read culture & etiquette",
  },
];

export const LIVING_CLUSTER_SIBLING_LINKS_SHOPPING_GROCERIES: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The wider Living hub for first-week priorities, payments, transport, weather, and the daily-life context around shopping.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Groceries, parcels, payments, opening hours, and everyday routines once you want the broader system behind shopping.",
    cta: "Read Daily Life Basics",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "The install-order guide for supermarket apps, maps, delivery, payments, and the phone layer behind this page.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_HEALTHCARE_BASICS_PATH,
    title: "Healthcare Basics",
    description: "Useful when local services, first-month admin, and ordinary routines need to include healthcare too.",
    cta: "Read healthcare basics",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "Useful when home routines, lost items, and everyday readiness need to sit beside shopping, deliveries, and ordinary life.",
    cta: "Read safety basics",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Useful when store choice, top-up errands, and delivery convenience depend on how you actually move through your week.",
    cta: "Read transport guide",
  },
  {
    href: LIVING_WEATHER_PATH,
    title: "Weather & seasons",
    description: "Useful when weather changes how far you walk, how often you top up, and when delivery feels worth it.",
    cta: "Read weather guide",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Short Dutch for shops, checkout moments, and everyday errands once you want a little more confidence in person.",
    cta: "Open language guide",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "The social layer behind practical payment habits, everyday directness, and the small norms that shape store interactions.",
    cta: "Read culture & etiquette",
  },
];

export const LIVING_CLUSTER_SIBLING_LINKS_HEALTHCARE_BASICS: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The wider Living hub for first-week priorities, first-month systems, and the big-picture context around healthcare setup.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Local services, routines, payments, and the ordinary systems that help healthcare feel less disconnected from everyday life.",
    cta: "Read Daily Life Basics",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "The practical phone layer around maps, payments, deliveries, and the digital habits that support life once you are settled.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_SHOPPING_GROCERIES_PATH,
    title: "Shopping & groceries",
    description: "Another practical Living guide for the weekly routines, local services, and home setup that sit beside healthcare admin.",
    cta: "Read shopping guide",
  },
  {
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    title: "Emergencies & safety",
    description: "A calm guide to 112, urgent vs non-urgent situations, and the everyday readiness habits that sit beside healthcare confidence.",
    cta: "Read safety basics",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Useful starter Dutch for calls, reception desks, pharmacies, and the short everyday interactions where clarity helps.",
    cta: "Open language guide",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Helpful when direct communication, calm appointment expectations, and everyday social context affect how care feels.",
    cta: "Read culture & etiquette",
  },
];

export const LIVING_CLUSTER_SIBLING_LINKS_EMERGENCIES_SAFETY: LivingClusterLinkItem[] = [
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "The wider Living hub for first-week priorities, helpful tools, and the bigger picture around safety readiness.",
    cta: "Back to Survival Guide",
  },
  {
    href: LIVING_HEALTHCARE_BASICS_PATH,
    title: "Healthcare Basics",
    description: "The wider Dutch care flow for GP contact, urgent care, pharmacies, and emergency-health context.",
    cta: "Read healthcare basics",
  },
  {
    href: LIVING_GETTING_AROUND_PATH,
    title: "Getting around",
    description: "Transport, OV, bikes, and daily travel habits when practical movement and everyday awareness matter together.",
    cta: "Read transport guide",
  },
  {
    href: LIVING_DAILY_LIFE_PATH,
    title: "Daily life basics",
    description: "Buildings, local services, routines, and the home setup that make safety readiness feel practical rather than abstract.",
    cta: "Read Daily Life Basics",
  },
  {
    href: LIVING_ESSENTIAL_APPS_PATH,
    title: "Essential apps",
    description: "The phone layer around maps, payments, saved contacts, and the practical tools that support readiness.",
    cta: "Open the app guide",
  },
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Useful Dutch for calls, simple reporting, transport moments, and short everyday interactions where clarity helps.",
    cta: "Open language guide",
  },
];

export type LivingContinueCard = { href: string; title: string; description: string; meta: string };

export const LIVING_SURVIVAL_CONTINUE_CARDS: LivingContinueCard[] = [
  {
    href: "/netherlands/moving-to-the-netherlands/",
    title: "Moving to the Netherlands",
    description: "Visas, documents, registration, and the full relocation arc when survival mode is behind you.",
    meta: "Follow the move timeline",
  },
  {
    href: "/netherlands/living/housing/",
    title: "Housing in the Netherlands",
    description: "Contracts, market pace, and costs—once you are past sleeping-on-a-mattress energy.",
    meta: "Go to housing hub",
  },
  {
    href: "/netherlands/work/tools/",
    title: "Work in the Netherlands",
    description: "Offers, contracts, and payslip literacy when the job side needs attention.",
    meta: "Browse work tools",
  },
  {
    href: "/netherlands/money/tools/",
    title: "Money & calculators",
    description: "Budget, banking, and tax-adjacent tools in one place.",
    meta: "Open money hub",
  },
  {
    href: "/netherlands/taxes/",
    title: "Taxes in the Netherlands",
    description: "30% ruling context, allowances, and filing guides beside salary planning.",
    meta: "Explore tax guides",
  },
  {
    href: "/netherlands/moving-to-netherlands-with-kids/",
    title: "Family life in the Netherlands",
    description: "School rhythm, childcare angles, and relocation when little people set the pace.",
    meta: "Read family guide",
  },
];

export type LivingComingNextItem = {
  title: string;
  description: string;
  /** Teaser only — rendered with `CardLink` `coming_soon` (no navigation). */
  status: "coming_soon";
};

export const LIVING_COMING_NEXT_TEASERS: LivingComingNextItem[] = [
  {
    title: "Healthcare routines for daily life",
    description: "GP access, pharmacy patterns, and when to use huisartsenpost—editorial deep-dive planned.",
    status: "coming_soon",
  },
  {
    title: "School runs & childcare handoffs",
    description: "How Dutch weeks look for parents once basisschool and BSO rhythms start—beyond the cost estimator.",
    status: "coming_soon",
  },
  {
    title: "Markets, memberships & subscriptions",
    description: "Groceries beyond Albert Heijn, gyms, and the Dutch cancellation calendar—practical compare lens.",
    status: "coming_soon",
  },
];

/** Pillar hubs surfaced on the all-tools page and other “browse by pillar” strips. */
export const NETHERLANDS_PILLAR_HUB_LINKS = [
  {
    href: "/netherlands/moving-to-the-netherlands/",
    title: "Moving to the Netherlands",
    description: "Visas, documents, arrival, and first months.",
  },
  {
    href: "/netherlands/moving/visas-residency/",
    title: "Visas & residency orientation",
    description: "Work, study, family, and ZZP routes before you drown in paperwork.",
  },
  {
    href: "/netherlands/moving/residence-permits/",
    title: "Residence permits in the Netherlands",
    description: "Permit purpose, renewal timing, and practical life after approval.",
  },
  {
    href: "/netherlands/moving/extensions-changes/",
    title: "Extensions & changes in the Netherlands",
    description: "After arrival: renewals, job and life shifts, and when to act.",
  },
  {
    href: LIVING_SURVIVAL_GUIDE_PATH,
    title: "Living · Survival Guide",
    description: "Day-to-day transport, apps, payments, weather, and routines.",
  },
  {
    href: "/netherlands/work/tools/",
    title: "Work",
    description: "Payslip, contract, and job-offer tools plus work guides.",
  },
  {
    href: "/netherlands/money/tools/",
    title: "Money",
    description: "Cost of living, employment tax overview, and budgeting calculators.",
  },
  {
    href: "/netherlands/housing/tools/",
    title: "Housing",
    description: "Rent, mortgage, and housing decision tools.",
  },
  {
    href: "/netherlands/taxes/",
    title: "Taxes",
    description: "30% ruling, allowances, filing, and expat tax guides.",
  },
] as const;
