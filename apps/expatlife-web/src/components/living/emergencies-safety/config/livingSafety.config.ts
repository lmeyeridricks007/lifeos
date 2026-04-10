import {
  LIVING_DAILY_LIFE_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingSafetyContactRole,
  LivingSafetyFaqItem,
  LivingSafetyFlowSections,
  LivingSafetyMisunderstandingCard,
  LivingSafetyQuickStartStage,
  LivingSafetyReferences,
  LivingSafetyRelatedTools,
  LivingSafetyTips,
} from "./livingSafety.types";

const HEALTHCARE_ALLOWANCE_TOOL_PATH = "/netherlands/taxes/tools/healthcare-allowance-estimator/";
const CHILDCARE_TOOL_PATH = "/netherlands/family/tools/childcare-cost-estimator/";
const FIRST_90_DAYS_GUIDE_PATH = "/netherlands/first-90-days-netherlands/";
const MOVING_WITH_FAMILY_GUIDE_PATH = "/netherlands/moving-to-netherlands-with-family/";
const MOVING_WITH_KIDS_GUIDE_PATH = "/netherlands/moving-to-netherlands-with-kids/";
const HEALTH_INSURANCE_GUIDE_PATH = "/netherlands/health-insurance-netherlands/";

export const livingSafetyQuickStart: LivingSafetyQuickStartStage[] = [
  {
    title: "First days",
    badge: "Right away",
    priority: "high",
    iconKey: "phone",
    intro: "Start with the few basics that help most when something suddenly goes wrong.",
    bullets: [
      "Save 112 and remember it is for real emergencies only",
      "Know your address and how to say it clearly",
      "Know the difference between emergency, urgent, and non-urgent situations",
      "Keep your ID, insurance details, and main contacts easy to reach",
      "Know the after-hours healthcare route before you need it",
    ],
    footHref: LIVING_HEALTHCARE_BASICS_PATH,
    footLabel: "Read Healthcare Basics",
  },
  {
    title: "First weeks",
    badge: "This month",
    iconKey: "mapPin",
    intro: "Turn basic awareness into a setup that works in your own area and daily routine.",
    bullets: [
      "Register with a GP if that applies to you and is possible",
      "Learn the transport and cycling basics for your usual routes",
      "Know what to do if you lose your phone, wallet, or keys",
      "Save useful local contacts like your landlord, building contact, or a trusted friend",
      "Find your nearest pharmacy and the urgent care route near home",
    ],
    footHref: LIVING_GETTING_AROUND_PATH,
    footLabel: "Read Getting Around",
  },
  {
    title: "Once you are settled",
    badge: "Keep it simple",
    iconKey: "shield",
    intro: "Confidence usually comes from a few calm habits, not from memorizing every possible scenario.",
    bullets: [
      "Keep emergency and household contact details in one easy place",
      "Know your fallback steps if your phone, cards, or keys are suddenly unavailable",
      "Keep your home basics in order, like access, smoke awareness, and important numbers",
      "Treat safety as part of everyday life, not as something dramatic or separate",
      "Remember that calm preparation helps more than constant worry",
    ],
    footHref: FIRST_90_DAYS_GUIDE_PATH,
    footLabel: "Place this in your first 90 days",
  },
];

export const livingSafetyFlowSections: LivingSafetyFlowSections = {
  emergencyVsUrgent: [
    {
      title: "Emergency means immediate danger or a life-threatening situation",
      badge: "Emergency",
      intro: "This is for situations where help is needed right now.",
      bullets: [
        "Call 112 for true emergencies",
        "Think immediate danger, serious injury, or a situation that cannot safely wait",
        "If you call, knowing your location helps immediately",
      ],
      iconKey: "alertTriangle",
      tone: "accent",
      visualKey: "emergency-lane",
      callout: {
        eyebrow: "Practical tip",
        title: "Start with where you are.",
        body: "If you need urgent help, your location and a short clear explanation matter more than a long story.",
      },
    },
    {
      title: "Urgent does not always mean 112",
      badge: "Urgent",
      intro: "Some situations need quick action, but they are not always 112 situations.",
      bullets: [
        "This often includes urgent health problems outside normal hours",
        "Urgent care, after-hours care, or another service may be the right next step",
        "Knowing that difference reduces panic quickly",
      ],
      iconKey: "heartPulse",
      visualKey: "urgent-lane",
      callout: {
        eyebrow: "Good to know",
        title: "Urgent still needs action.",
        body: "The point is not to ignore the problem. It is to use the right route instead of treating every problem as a 112 case.",
      },
    },
    {
      title: "Non-urgent situations can often follow a normal route",
      badge: "Non-urgent",
      intro: "Many problems feel stressful in the moment but can still wait for normal care, reporting, or follow-up.",
      bullets: [
        "A normal GP contact, replacement process, or standard report may be enough",
        "You do not need to treat every problem as an emergency to take it seriously",
        "The goal is to use the right route for the problem",
      ],
      iconKey: "checkCircle2",
      visualKey: "non-urgent-lane",
    },
    {
      title: "When you are unsure, keep the first step simple",
      badge: "Keep calm",
      intro: "You do not need a perfect decision tree. You need a clear first move.",
      bullets: [
        "Check whether the situation is immediate danger, urgent, or something that can wait",
        "Use the right service instead of guessing for too long on your own",
        "Follow official guidance in real emergencies",
      ],
      iconKey: "shield",
      visualKey: "simple-first-step",
    },
  ],
  medicalUrgency: [
    {
      title: "True medical emergencies belong in the emergency lane",
      badge: "112",
      intro: "If there is immediate danger, the emergency route matters more than knowing every detail of the system.",
      bullets: [
        "Call 112 for true emergencies",
        "Know your location if you can",
        "Keep your explanation short and clear",
      ],
      iconKey: "alertTriangle",
      tone: "accent",
      visualKey: "medical-112",
      internalLink: {
        href: LIVING_HEALTHCARE_BASICS_PATH,
        label: "Read Healthcare Basics",
        description: "For the wider Dutch care flow outside true emergencies.",
      },
    },
    {
      title: "Urgent health situations often follow the after-hours care route",
      badge: "Urgent health",
      intro: "A health problem can need quick action without being a 112 emergency.",
      bullets: [
        "This is where knowing the after-hours care route helps",
        "Learn the route before a bad evening forces you to work it out under pressure",
        "The right contact depends on timing and seriousness",
      ],
      iconKey: "phone",
      visualKey: "after-hours-health",
      callout: {
        eyebrow: "Easy win",
        title: "Know the after-hours route now.",
        body: "It is one of the most useful readiness steps because it removes a lot of night-time guesswork later.",
      },
    },
    {
      title: "Normal health questions still often start with the GP",
      badge: "Usual route",
      intro: "Many non-emergency health issues still start with your GP, not with a hospital.",
      bullets: [
        "That is one reason GP registration matters",
        "It helps to know the main route before you need it",
        "This page is here to support that confidence, not replace medical advice",
      ],
      iconKey: "heartPulse",
      visualKey: "gp-route",
    },
    {
      title: "Keep the practical details ready",
      badge: "Easy win",
      intro: "In urgent health situations, simple admin details can save time and stress.",
      bullets: [
        "Keep your ID and insurance details easy to reach",
        "Know your nearest pharmacy",
        "Save any useful contacts in your phone now, not later",
      ],
      iconKey: "smartphone",
      visualKey: "health-admin",
    },
  ],
  dailySafety: [
    {
      title: "Transport safety starts with paying attention, not panic",
      badge: "Transport",
      intro: "Daily Dutch transport is usually manageable, but it moves fast and rewards attention.",
      bullets: [
        "Know your route before a rushed trip if you can",
        "Stay aware on platforms, near tram lanes, and at busy crossings",
        "Do not let phone distraction take over when moving through unfamiliar stations or streets",
      ],
      iconKey: "trainFront",
      visualKey: "transport-safety",
      internalLink: {
        href: LIVING_GETTING_AROUND_PATH,
        label: "Use Getting Around",
        description: "For the full transport and local travel guide.",
      },
    },
    {
      title: "Cycling safety is mostly about awareness and routine",
      badge: "Cycling",
      intro: "Dutch cycling culture feels normal fast, but a few habits matter more than newcomers expect.",
      bullets: [
        "Use lights when needed and lock your bike properly",
        "Stay aware of other bikes, pedestrians, and route flow",
        "Do not assume city traffic will slow down for uncertainty",
      ],
      iconKey: "bike",
      visualKey: "cycling-safety",
    },
    {
      title: "Street and city awareness can stay calm and practical",
      badge: "Street",
      intro: "The goal is normal awareness, not paranoia.",
      bullets: [
        "Stay aware of your surroundings in busy areas and at night",
        "Keep your valuables and your phone use sensible in crowded places",
        "Simple awareness usually matters more than complicated rules",
      ],
      iconKey: "users",
      visualKey: "street-awareness",
    },
    {
      title: "Home safety starts with small practical habits",
      badge: "Home",
      intro: "A few household basics make everyday life feel calmer and less chaotic when something goes wrong.",
      bullets: [
        "Know who to contact about access, keys, or building issues",
        "Keep important numbers somewhere easy to find",
        "Treat smoke and home safety basics as normal setup, not as an afterthought",
      ],
      iconKey: "home",
      visualKey: "home-safety",
      internalLink: {
        href: LIVING_DAILY_LIFE_PATH,
        label: "Pair with Daily Life Basics",
        description: "For the wider routine around buildings, services, and local life.",
      },
    },
  ],
  incidentAdmin: [
    {
      title: "If you lose your phone, secure access first",
      badge: "Lost phone",
      intro: "Your phone can hold banking, maps, messages, and account access, so securing it matters quickly.",
      bullets: [
        "Think first about access, accounts, and how you will contact people",
        "Use your saved fallback options if you set them up earlier",
        "A calm first hour matters more than a perfect checklist",
      ],
      iconKey: "smartphone",
      visualKey: "lost-phone",
      callout: {
        eyebrow: "First move",
        title: "Think access before replacement.",
        body: "Your first job is usually protecting accounts, payments, and communication, not buying a new phone straight away.",
      },
    },
    {
      title: "If you lose your wallet, think cards, ID, and practical access",
      badge: "Lost wallet",
      intro: "A wallet problem is not only about money. It can affect your ID, travel, and everyday access too.",
      bullets: [
        "Secure payment access first",
        "Work through the important cards and documents one by one",
        "Know which providers or services need to hear from you",
      ],
      iconKey: "wallet",
      visualKey: "lost-wallet",
    },
    {
      title: "Keys and access problems are often partly a building problem",
      badge: "Lost keys",
      intro: "Know the first contact for your building, landlord, or housing setup before you need it.",
      bullets: [
        "Save the right contact while life is calm",
        "Do not leave basic access planning until you are locked out",
        "Household readiness often matters as much as official steps here",
      ],
      iconKey: "keyRound",
      visualKey: "lost-keys",
    },
    {
      title: "After an incident, think in a simple order",
      badge: "Afterward",
      intro: "A practical order helps more than trying to solve everything at once.",
      bullets: [
        "Secure yourself first",
        "Secure access and important accounts next",
        "Then report, replace, or contact the right provider, insurer, landlord, or service",
      ],
      iconKey: "fileText",
      visualKey: "incident-order",
    },
  ],
  preparedness: [
    {
      title: "Save the right numbers once",
      badge: "Ready phone",
      intro: "A small amount of setup now removes a lot of future stress.",
      bullets: [
        "Save 112",
        "Save useful healthcare and household contacts",
        "Save one trusted person you can contact fast",
      ],
      iconKey: "phone",
      tone: "accent",
      visualKey: "save-numbers",
    },
    {
      title: "Keep key details easy to reach",
      badge: "Easy access",
      intro: "Under stress, simple access beats a perfect filing system.",
      bullets: [
        "Know where your ID and insurance details are",
        "Keep important contacts easy to find",
        "Do not bury critical information in scattered apps or screenshots",
      ],
      iconKey: "mapPin",
      visualKey: "easy-access",
    },
    {
      title: "Learn the broad routes, not every edge case",
      badge: "Broad pathways",
      intro: "The main confidence boost is knowing who usually deals with what.",
      bullets: [
        "112 for true emergencies",
        "Urgent routes are different from emergency routes",
        "Many problems can still follow a normal next step",
      ],
      iconKey: "shield",
      visualKey: "broad-routes",
    },
    {
      title: "Prepared does not mean anxious",
      badge: "Calm mindset",
      intro: "You are not trying to become an emergency expert. You are building a calm first plan.",
      bullets: [
        "Keep the setup simple enough to remember",
        "Focus on what helps in real life",
        "Confidence usually comes from familiarity, not from fear",
      ],
      iconKey: "checkCircle2",
      visualKey: "calm-readiness",
    },
  ],
};

export const livingSafetyContactRoles: LivingSafetyContactRole[] = [
  {
    title: "112",
    badge: "Emergency number",
    intro: "This is the main emergency number when urgent help is needed right now.",
    bestFor: ["Immediate danger", "Serious emergencies", "Situations that cannot safely wait"],
    whenToUse: "Use 112 for true emergencies, not for ordinary questions or normal follow-up.",
    practicalTip: "The two most useful things to remember are the number itself and your location.",
    iconKey: "phone",
  },
  {
    title: "Urgent healthcare after hours",
    badge: "Urgent, not always 112",
    intro: "Urgent healthcare outside normal hours is its own route and is different from calling 112.",
    bestFor: ["Problems that should not wait", "Health problems outside normal hours", "Urgent situations that are not clearly life-threatening"],
    whenToUse: "Use this route when something needs quick attention but is not a clear emergency.",
    practicalTip: "Knowing this route before you need it is one of the biggest stress-savers for newcomers.",
    iconKey: "heartPulse",
    internalLink: {
      href: LIVING_HEALTHCARE_BASICS_PATH,
      label: "Read Healthcare Basics",
      description: "For the wider care system and urgent-care context.",
    },
  },
  {
    title: "GP / huisarts",
    badge: "Normal first contact",
    intro: "For many non-emergency health issues, the GP is still the normal starting point.",
    bestFor: ["Normal health questions", "Ongoing issues", "First contact for many non-emergency problems"],
    whenToUse: "Use your GP for normal care during regular hours and as your usual route into wider care.",
    practicalTip: "Registration matters because it gives you a normal first contact before you need one under stress.",
    iconKey: "building2",
  },
  {
    title: "Police, reports, and local help",
    badge: "Reporting and follow-up",
    intro: "Not every incident is a 112 situation, but reporting and follow-up can still matter.",
    bestFor: ["Lost items follow-up", "Reports after an incident", "Practical next steps that are not emergencies"],
    whenToUse: "Use the normal reporting or follow-up route when a situation is serious enough to document or report but not an immediate emergency.",
    practicalTip: "After a small incident, the admin side can matter almost as much as the event itself.",
    iconKey: "fileText",
  },
  {
    title: "Insurer, landlord, and household contacts",
    badge: "Practical backup",
    intro: "Some of the most useful people to contact after a problem are not emergency services at all.",
    bestFor: ["Insurance questions", "Building or access problems", "Practical support when something goes wrong"],
    whenToUse: "Use these contacts when the main issue is access, housing, insurance, or the practical fallout after an incident.",
    practicalTip: "Save these contacts before you need them. Under stress, searching for them is the last thing you want to do.",
    iconKey: "home",
    internalLink: {
      href: LIVING_DAILY_LIFE_PATH,
      label: "Pair with Daily Life Basics",
      description: "For the wider household and local-service setup.",
    },
  },
];

export const livingSafetyTips: LivingSafetyTips = {
  urgencyLanes: [
    {
      badge: "Emergency",
      title: "Call 112",
      body: "Use the emergency lane for immediate danger or life-threatening situations that need urgent help now.",
      tone: "emergency",
    },
    {
      badge: "Urgent",
      title: "Quick action, but not always 112",
      body: "Some situations need quick action without being a true emergency. Urgent healthcare or another service may be the right next step.",
      tone: "urgent",
    },
    {
      badge: "Non-urgent",
      title: "Normal follow-up can be enough",
      body: "Some problems can wait for a GP, a normal report, a replacement step, or another standard next step.",
      tone: "non_urgent",
    },
  ],
  reassurance: {
    startHere: {
      eyebrow: "What matters first",
      title: "You do not need to memorize everything to feel prepared.",
      body: "If you know 112, know your address, understand urgent vs non-urgent, and keep your main details easy to reach, you already have the basics most newcomers need.",
    },
    medical: {
      eyebrow: "Medical readiness",
      title: "Healthcare confidence usually comes from knowing the route, not from trying to work everything out yourself.",
      body: "Know the emergency route, know the after-hours route, and keep your practical details ready. That is enough to make the system feel much less stressful.",
    },
    surprises: {
      eyebrow: "Common feeling",
      title: "Most people feel calmer once they realize not every stressful moment is a 112 situation.",
      body: "The big shift is learning the main routes. Once those are clear, Dutch daily life usually feels much more manageable.",
    },
    preparedness: {
      eyebrow: "Bottom line",
      title: "Prepared means calm, not anxious.",
      body: "Save the right numbers, keep the important details handy, and remember the broad routes. A simple plan helps more than constant worry.",
    },
  },
};

export const livingSafetyMisunderstandings: LivingSafetyMisunderstandingCard[] = [
  {
    title: "112 is simple, but many everyday problems are not 112 situations",
    body: "Knowing that difference is one of the fastest ways to feel more confident.",
  },
  {
    title: "Readiness matters more than memorizing lots of rules",
    body: "Most people need a few clear first steps, not a giant emergency manual.",
  },
  {
    title: "Knowing your address matters more than people expect",
    body: "In a stressful moment, being able to give your location clearly helps a lot.",
  },
  {
    title: "Urgent health and emergency health are not always the same thing",
    body: "That is why it helps to understand the healthcare route before you need it.",
  },
  {
    title: "After a small incident, the admin can matter as much as the event",
    body: "Phones, cards, keys, and access often create more stress afterward than the original incident.",
  },
  {
    title: "Feeling safe usually comes from understanding the system, not fearing it",
    body: "A calm first plan often changes how daily life feels very quickly.",
  },
];

export const livingSafetyFaq: LivingSafetyFaqItem[] = [
  {
    id: "what-number-do-i-call",
    question: "What number do I call in an emergency in the Netherlands?",
    answer: "Call 112 for true emergencies that need urgent help right away.",
  },
  {
    id: "when-should-i-call-112",
    question: "When should I call 112?",
    answer: "Call 112 when there is immediate danger or a situation that cannot safely wait.",
  },
  {
    id: "urgent-vs-emergency-care",
    question: "What is the difference between urgent and emergency care?",
    answer: "An emergency needs help right now. Urgent care still needs quick action, but it is not always a 112 situation.",
  },
  {
    id: "lose-phone-wallet",
    question: "What should I do if I lose my phone or wallet?",
    answer: "Start by securing access and important accounts, then work through the main cards, providers, documents, and any reports you need to make.",
  },
  {
    id: "know-exact-address",
    question: "Do I need to know my exact address in an emergency?",
    answer: "Yes. Knowing your location clearly is one of the most useful things you can prepare in advance.",
  },
  {
    id: "prepare-after-moving",
    question: "How do I prepare for urgent situations after moving?",
    answer: "Save 112, learn the urgent healthcare route, keep key details easy to reach, and save a few household or local contacts.",
  },
  {
    id: "is-netherlands-generally-safe",
    question: "Is the Netherlands generally safe for newcomers?",
    answer: "Many newcomers experience Dutch daily life as orderly and manageable, but it still helps to understand the basic emergency and safety systems before you need them.",
  },
  {
    id: "what-save-on-phone",
    question: "What should I save on my phone first?",
    answer: "Start with 112, your address, key healthcare contacts, and the practical contacts you would need if your day suddenly went wrong.",
  },
];

export const livingSafetyReferences: LivingSafetyReferences = {
  title: "Official sources & useful references",
  intro:
    "ExpatCopilot gives practical guidance, not legal or medical advice. Use official sources to confirm emergency routes, healthcare details, reporting steps, and public safety information that applies to your situation.",
  links: [
    {
      label: "Government.nl - emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
    },
    {
      label: "Government.nl - health insurance in the Netherlands",
      href: "https://www.government.nl/topics/health-insurance",
    },
    {
      label: "Police.nl - English information",
      href: "https://www.politie.nl/en",
    },
    {
      label: "Zorginstituut Nederland - English information",
      href: "https://www.zorginstituutnederland.nl/english",
    },
  ],
  footer:
    "If you need urgent help in real life, use the proper emergency, healthcare, or official reporting route instead of relying on editorial pages alone.",
};

export const livingSafetyRelatedTools: LivingSafetyRelatedTools = {
  sectionTitle: "Helpful planning tools and related guides",
  sectionSubtitle:
    "Use this page as the calm readiness layer, then use the right ExpatCopilot guide or tool for healthcare, transport, daily-life setup, family planning, and first-month decisions around it.",
  intro:
    "Emergencies and safety feel easier when they sit inside the broader ExpatCopilot system: healthcare setup, local routines, transport habits, family planning, and the first-month move timeline around them.",
  cards: [
    {
      title: "Netherlands Survival Guide",
      description: "Keep emergency readiness inside your wider first-week setup instead of treating it as a separate topic.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open the Survival Guide",
      iconKey: "checkCircle2",
    },
    {
      title: "Healthcare Basics",
      description: "Use the healthcare guide for the Dutch GP, urgent care, pharmacy, and the medical side of the system.",
      href: LIVING_HEALTHCARE_BASICS_PATH,
      ctaLabel: "Read Healthcare Basics",
      iconKey: "heartPulse",
    },
    {
      title: "Getting Around",
      description: "Useful for transport awareness, bike basics, and the everyday travel habits that affect safety and confidence.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read Getting Around",
      iconKey: "trainFront",
    },
    {
      title: "Daily Life Basics",
      description: "The household and local-service layer around buildings, routines, contacts, and settling in.",
      href: LIVING_DAILY_LIFE_PATH,
      ctaLabel: "Read Daily Life Basics",
      iconKey: "home",
    },
    {
      title: "Healthcare Allowance Estimator",
      description: "Useful when the health side of your setup overlaps with insurance and monthly planning.",
      href: HEALTHCARE_ALLOWANCE_TOOL_PATH,
      ctaLabel: "Estimate healthcare allowance",
      iconKey: "shield",
    },
    {
      title: "Childcare Cost Estimator",
      description: "Useful when family life, healthcare setup, and everyday readiness all need to fit together.",
      href: CHILDCARE_TOOL_PATH,
      ctaLabel: "Estimate childcare costs",
      iconKey: "users",
    },
  ],
  shortcutEyebrow: "Broader setup",
  shortcutTitle: "Keep safety readiness connected to the rest of your move",
  shortcutBody:
    "These extra guides help when safety planning overlaps with family setup, first-month planning, or the wider systems you are still building.",
  shortcuts: [
    {
      href: FIRST_90_DAYS_GUIDE_PATH,
      title: "First 90 Days in the Netherlands",
      description: "Place healthcare, safety, contacts, and practical readiness inside the wider arrival timeline.",
      description: "Place healthcare, safety, contacts, and practical readiness inside your wider arrival timeline.",
      meta: "Read the 90-day guide",
    },
    {
      href: MOVING_WITH_FAMILY_GUIDE_PATH,
      title: "Moving to the Netherlands with family",
      description: "Broader household guide for housing, documents, healthcare, and the shared admin that shapes family arrival.",
      description: "Broader household guide for housing, documents, healthcare, and the shared admin around family arrival.",
      meta: "Read the family guide",
    },
    {
      href: MOVING_WITH_KIDS_GUIDE_PATH,
      title: "Moving to the Netherlands with kids",
      description: "Useful when safety, childcare, and day-to-day family routines need to work together.",
      meta: "Open the guide for kids",
    },
    {
      href: HEALTH_INSURANCE_GUIDE_PATH,
      title: "Health Insurance in the Netherlands",
      description: "Go deeper on the insurance side once you understand how emergency readiness and healthcare fit together.",
      description: "Go deeper on insurance once you understand how safety planning and healthcare fit together.",
      meta: "Read the insurance guide",
    },
  ],
};
