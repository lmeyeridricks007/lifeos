import {
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingHealthcareFaqItem,
  LivingHealthcareFlowSections,
  LivingHealthcareMisunderstandingCard,
  LivingHealthcareQuickStartStage,
  LivingHealthcareReferences,
  LivingHealthcareRelatedTools,
  LivingHealthcareServiceRole,
  LivingHealthcareTips,
} from "./livingHealthcare.types";

const HEALTH_INSURANCE_GUIDE_PATH = "/netherlands/health-insurance-netherlands/";
const HEALTHCARE_ALLOWANCE_TOOL_PATH = "/netherlands/taxes/tools/healthcare-allowance-estimator/";
const COST_OF_LIVING_TOOL_PATH = "/netherlands/money/tools/cost-of-living-calculator/";
const CHILDCARE_TOOL_PATH = "/netherlands/family/tools/childcare-cost-estimator/";
const FIRST_90_DAYS_GUIDE_PATH = "/netherlands/first-90-days-netherlands/";
const MOVING_WITH_FAMILY_GUIDE_PATH = "/netherlands/moving-to-netherlands-with-family/";
const MOVING_WITH_KIDS_GUIDE_PATH = "/netherlands/moving-to-netherlands-with-kids/";

export const livingHealthcareQuickStart: LivingHealthcareQuickStartStage[] = [
  {
    title: "First days",
    badge: "Right away",
    priority: "high",
    iconKey: "shield",
    intro: "Start with the basics that reduce stress before you ever need an appointment.",
    bullets: [
      "Work out whether Dutch health insurance applies to you and how soon you need to arrange it",
      "Save 112 now so you are not looking for it under stress",
      "Learn the difference between routine care, urgent after-hours care, and a true emergency",
      "If you are already insured, check how GP registration works in your area",
      "Keep your ID, insurer details, and key documents easy to reach",
    ],
    footHref: HEALTH_INSURANCE_GUIDE_PATH,
    footLabel: "Read the health insurance guide",
  },
  {
    title: "First weeks",
    badge: "This month",
    iconKey: "stethoscope",
    intro: "Turn the basics into a setup you can actually use, so the system feels clearer.",
    bullets: [
      "Arrange health insurance if you need it and save the policy details somewhere obvious",
      "Register with a huisarts if you can, especially once your address is stable",
      "Find your nearest pharmacy and learn the after-hours care route near home",
      "Save the contacts and insurer app or portal you will actually use",
      "Learn the usual GP-first route before you need to figure it out in a stressful moment",
    ],
    footHref: HEALTHCARE_ALLOWANCE_TOOL_PATH,
    footLabel: "Check the healthcare allowance estimator",
  },
  {
    title: "First months",
    badge: "Settle in",
    iconKey: "calendarDays",
    intro: "Once the basics are set up, daily healthcare gets easier because the flow starts making sense.",
    bullets: [
      "Get comfortable with the fact that many non-emergency issues start with the GP",
      "Understand how referrals, prescriptions, and pharmacy pickups connect",
      "Know what can wait for normal GP contact and what cannot",
      "Tie health admin into the rest of your setup, including allowance, budgeting, and family care",
      "Keep your details current so care stays easier when life gets busy",
    ],
    footHref: FIRST_90_DAYS_GUIDE_PATH,
    footLabel: "Place this inside your first 90 days",
  },
];

export const livingHealthcareServiceRoles: LivingHealthcareServiceRole[] = [
  {
    title: "Pharmacy",
    badge: "Medication and practical support",
    intro: "Pharmacies are the usual place for prescriptions and everyday questions about medicine.",
    bestFor: ["Prescription pickup", "Medication advice and repeats", "Practical follow-up after GP care"],
    whenToUse: "When you need medicine, help with a prescription, or simple advice about how to use it.",
    practicalTip: "Know your nearest pharmacy before you need it. That one small step removes a lot of stress later.",
    iconKey: "pill",
    internalLink: {
      href: LIVING_DAILY_LIFE_PATH,
      label: "Pair with Daily Life Basics",
      description: "For everyday local setup like maps, opening hours, and nearby services.",
    },
  },
  {
    title: "Hospital",
    badge: "Not the first stop for everything",
    intro: "Hospitals matter, but for many issues they are not the first place people start.",
    bestFor: ["Specialist treatment", "Hospital-based tests or procedures", "Emergency department care when truly appropriate"],
    whenToUse: "Often after referral, or in a real emergency when immediate hospital-level care is needed.",
    practicalTip: "A hospital is important, but it is usually not the default entry point for everyday care questions.",
    iconKey: "building2",
  },
  {
    title: "Urgent after-hours GP care",
    badge: "Urgent, not 112-level",
    intro: "The huisartsenpost is the usual after-hours option when something needs care but is not life-threatening.",
    bestFor: ["Urgent issues outside normal GP hours", "Situations that should not wait but are not 112-level", "Getting the right next step when your GP is closed"],
    whenToUse: "When it feels urgent enough that waiting is a bad idea, but the situation is not clearly a life-threatening emergency.",
    practicalTip: "Do not wait until late at night to learn this system exists. It is one of the biggest stress-savers for newcomers.",
    iconKey: "phone",
  },
  {
    title: "Specialist care and referrals",
    badge: "Usually behind the GP",
    intro: "Many specialist appointments start with a GP referral, which is why the huisarts matters so much.",
    bestFor: ["Care that goes beyond normal GP treatment", "Hospital specialties", "Longer treatment paths that need coordination"],
    whenToUse: "Usually after the GP decides specialist care or further investigation makes sense.",
    practicalTip: "The system feels less blunt once you understand that the GP is often the coordinator, not a barrier.",
    iconKey: "fileText",
    internalLink: {
      href: HEALTH_INSURANCE_GUIDE_PATH,
      label: "See the insurance guide",
      description: "Insurance and referrals often shape what happens next more than newcomers expect.",
    },
  },
];

export const livingHealthcareFlowSections: LivingHealthcareFlowSections = {
  howItWorks: [
    {
      title: "Insurance and the GP shape the whole system",
      badge: "Core idea",
      intro: "The simplest way to think about it is: insurance sorted, GP first for many issues, then pharmacy, urgent care, specialist, or hospital if needed.",
      bullets: [
        "Insurance affects both access and costs early on",
        "The GP is the normal starting point for many non-emergency issues",
        "Once you know that flow, the system feels less random",
      ],
      iconKey: "shield",
      tone: "accent",
      visualKey: "core-flow",
    },
    {
      title: "The system can feel more referral-based than expected",
      badge: "What surprises people",
      intro: "Many newcomers expect quicker direct access to specialists or hospitals than Dutch healthcare usually offers.",
      bullets: [
        "That can feel slower at first",
        "Once you understand the system, it often feels more predictable",
      ],
      iconKey: "fileText",
      visualKey: "referral-flow",
    },
    {
      title: "Urgent and emergency are not the same lane",
      badge: "Important distinction",
      intro: "Something can feel serious and still belong with urgent after-hours GP care, not 112 or the emergency department.",
      bullets: [
        "This matters most outside normal office hours",
        "Knowing the lanes in advance helps when stress is already high",
      ],
      iconKey: "alertTriangle",
      visualKey: "care-lanes",
    },
    {
      title: "Small setup tasks reduce later stress",
      badge: "What helps",
      intro: "Insurance details, GP registration, saved numbers, and knowing your pharmacy all seem small until they save you time and stress.",
      bullets: [
        "A little prep is worth a lot under pressure",
        "You do not need expert knowledge, just a clear idea of who to contact first",
      ],
      iconKey: "checkCircle2",
      visualKey: "setup-basics",
    },
  ],
  insuranceBasics: [
    {
      title: "Health insurance sits near the center of daily healthcare",
      badge: "Insurance basics",
      intro: "For many residents, Dutch basic health insurance is a key part of healthcare, not just paperwork.",
      bullets: [
        "It is one of the first things many newcomers need to sort out",
        "Waiting too long can create stress very quickly",
      ],
      iconKey: "shield",
      tone: "accent",
      visualKey: "insurance-foundation",
    },
    {
      title: "Sort the essentials early",
      badge: "Do this early",
      intro: "Do not wait until you feel unwell to figure out whether you need insurance, what your policy is, and how to access it.",
      bullets: [
        "Keep your insurer name, policy details, and login easy to find",
        "Do not bury healthcare admin in old emails or scattered screenshots",
      ],
      iconKey: "fileText",
      visualKey: "insurance-admin",
    },
    {
      title: "Allowance help is separate from understanding the system",
      badge: "Useful next step",
      intro: "Healthcare allowance may help some people with costs, but it is separate from understanding how the care system works day to day.",
      bullets: [
        "Use the estimator for planning, not official confirmation",
        "Keep the money side and the care side connected",
      ],
      iconKey: "heartPulse",
      visualKey: "allowance-context",
      internalLink: {
        href: HEALTHCARE_ALLOWANCE_TOOL_PATH,
        label: "Open the allowance estimator",
        description: "Planning premium support beside your healthcare setup.",
      },
    },
    {
      title: "Insurance confusion spills into daily life fast",
      badge: "Why it matters",
      intro: "If you are unsure about your insurance, everything else feels harder, from GP registration to understanding costs.",
      bullets: [
        "Clarity here makes the rest of the system feel simpler",
        "You do not need to compare every insurer on day one to understand the system",
      ],
      iconKey: "checkCircle2",
      visualKey: "insurance-confidence",
    },
  ],
  gp: [
    {
      title: "The huisarts is the normal starting point",
      badge: "Central role",
      intro: "For many non-emergency problems, the huisarts is the first person or clinic you contact.",
      bullets: [
        "That includes many issues newcomers expect a hospital to handle first",
        "Once you expect that, the rest of the system makes more sense",
      ],
      iconKey: "stethoscope",
      tone: "accent",
      visualKey: "gp-first-contact",
    },
    {
      title: "Registration matters because care is easier when it is already arranged",
      badge: "Do not leave it too late",
      intro: "Trying to arrange GP registration while you are already ill is one of the most common avoidable frustrations.",
      bullets: [
        "Stable housing usually makes registration easier",
        "It is worth looking into early even if you rarely need a doctor",
      ],
      iconKey: "mapPin",
      visualKey: "gp-registration",
    },
    {
      title: "The GP can feel more selective than expected",
      badge: "Why newcomers notice it",
      intro: "Some newcomers see the GP role as gatekeeping, especially if they come from systems with easier specialist access.",
      bullets: [
        "In Dutch healthcare, the GP often acts as both guide and first check",
        "Understanding that can make the experience feel less frustrating",
      ],
      iconKey: "users",
      visualKey: "gp-expectations",
    },
    {
      title: "Simple preparation makes appointments easier",
      badge: "Practical habit",
      intro: "Know what you want to ask, keep the main facts short, and have your details ready when you call or attend.",
      bullets: [
        "That helps, especially if you are nervous or speaking another language",
        "A little preparation can get you to the right next step faster",
      ],
      iconKey: "checkCircle2",
      visualKey: "gp-appointments",
    },
  ],
  emergencies: [
    {
      title: "112 is for real emergencies",
      badge: "Emergency",
      intro: "Use 112 when there is an immediate emergency and you need urgent help now.",
      bullets: [
        "Do not use it for ordinary care questions",
        "If something feels truly life-threatening, this is the emergency route",
      ],
      iconKey: "alertTriangle",
      tone: "accent",
      visualKey: "emergency-112",
    },
    {
      title: "Urgent but not 112-level usually means the after-hours GP route",
      badge: "Urgent",
      intro: "When something should not wait until tomorrow but is not clearly an emergency, after-hours GP care is often the right option.",
      bullets: [
        "This is one of the most useful distinctions to learn early",
        "It matters most outside normal GP opening hours",
      ],
      iconKey: "phone",
      visualKey: "urgent-care",
    },
    {
      title: "Non-urgent care still usually starts with the GP",
      badge: "Non-urgent",
      intro: "Routine questions, ongoing issues, and many first concerns usually belong with the GP, not the hospital.",
      bullets: [
        "That is the normal Dutch starting point",
        "Knowing that keeps expectations realistic and lowers stress",
      ],
      iconKey: "stethoscope",
      visualKey: "non-urgent-care",
    },
    {
      title: "Preparation beats panic",
      badge: "Prepare once",
      intro: "Save the right numbers, know your nearest pharmacy, and understand your local care options before you need them.",
      bullets: [
        "That is enough preparation for most newcomers",
        "You do not need to memorize the whole system to use it well",
      ],
      iconKey: "phone",
      visualKey: "emergency-prep",
    },
  ],
  makeItEasier: [
    {
      title: "Sort insurance early so it stops hanging over you",
      badge: "Reduce stress",
      intro: "A clear insurance setup makes every other healthcare step easier to understand.",
      bullets: [
        "Use the insurance and allowance pages for the admin side",
        "Do not wait for a bad week to untangle your policy details",
      ],
      iconKey: "shield",
      tone: "accent",
      visualKey: "reduce-stress",
    },
    {
      title: "Register with a GP before you need one",
      badge: "Best practical move",
      intro: "This is one of the most useful setup steps because it turns the system into something you can actually use.",
      bullets: [
        "It matters for both routine questions and the wider referral path",
        "Early registration removes one of the biggest newcomer frustrations",
      ],
      iconKey: "mapPin",
      visualKey: "register-early",
    },
    {
      title: "Keep the basics in your phone",
      badge: "Easy win",
      intro: "Save emergency numbers, insurer access, and key contacts somewhere easy to reach.",
      bullets: [
        "This matters more than building a perfect folder structure",
        "The goal is usable information under pressure",
      ],
      iconKey: "phone",
      visualKey: "phone-setup",
    },
    {
      title: "Use the rest of your setup to support healthcare too",
      badge: "Connect the dots",
      intro: "Budget tools, family planning, and first-90-days planning all help because they reduce admin stress around healthcare.",
      bullets: [
        "Healthcare gets easier when the rest of life feels more settled",
        "Think about the full setup, not just one appointment",
      ],
      iconKey: "heartPulse",
      visualKey: "wider-setup",
      internalLink: {
        href: COST_OF_LIVING_TOOL_PATH,
        label: "Use the cost calculator",
      description: "Putting premiums and daily costs into one monthly picture.",
      },
    },
  ],
};

export const livingHealthcareTips: LivingHealthcareTips = {
  systemFlowSteps: [
    {
      badge: "Step 1",
      title: "Insurance in place",
      body: "Know whether Dutch insurance applies to you and keep the details easy to find.",
    },
    {
      badge: "Step 2",
      title: "GP first for many issues",
      body: "For many non-emergency questions, the huisarts is the usual starting point.",
    },
    {
      badge: "Step 3",
      title: "Pharmacy or urgent care when needed",
      body: "Prescriptions usually go through the pharmacy; urgent after-hours issues follow the urgent GP route.",
    },
    {
      badge: "Step 4",
      title: "Hospital or specialist when appropriate",
      body: "Hospital and specialist care still matter, but they are often not the first stop.",
    },
  ],
  emergencyLanes: [
    {
      badge: "Non-emergency",
      title: "Normal GP route",
      body: "Routine questions, ongoing issues, and many first-contact concerns usually start with your GP during normal hours.",
      tone: "non_emergency",
    },
    {
      badge: "Urgent",
      title: "After-hours urgent GP care",
      body: "Use this lane when something should not wait but is not clearly life-threatening.",
      tone: "urgent",
    },
    {
      badge: "Emergency",
      title: "112 or emergency care",
      body: "Use the emergency route for true emergencies that need urgent help right now.",
      tone: "emergency",
    },
  ],
  reassurance: {
    startHere: {
      eyebrow: "What matters first",
      title: "You do not need to master Dutch healthcare in one sitting.",
      body: "If you understand insurance, GP registration, the pharmacy role, and the difference between urgent care and 112, you already know the basics most newcomers are missing.",
    },
    gp: {
      eyebrow: "Reassurance",
      title: "The GP role feels much less strange once you know it is the normal entry point.",
      body: "What feels like gatekeeping at first is often just the system working as designed. Registration and a calm first-contact mindset make a big difference.",
    },
    surprises: {
      eyebrow: "Common feeling",
      title: "Many newcomers are not confused because they are doing anything wrong.",
      body: "They are adjusting to a different healthcare flow. Once the main routes are clear, Dutch healthcare usually feels much easier to handle.",
    },
    makeItEasier: {
      eyebrow: "Bottom line",
      title: "This becomes manageable fast once the first-contact flow is clear.",
      body: "Sort the basics, save the right contacts, and do not try to solve every future scenario at once. A simple setup beats perfect knowledge.",
    },
  },
};

export const livingHealthcareMisunderstandings: LivingHealthcareMisunderstandingCard[] = [
  {
    title: "The GP matters much more than many newcomers expect",
    body: "If you come from a system with easier direct specialist access, the Dutch way can feel very different at first.",
  },
  {
    title: "A hospital is important, but not the starting point for many issues",
    body: "Newcomers often assume hospital means first stop. In Dutch daily life, that is not usually how the system works.",
  },
  {
    title: "Urgent and emergency are different lanes",
    body: "A situation can feel stressful and still not belong to 112. Learning that difference gives many newcomers more confidence.",
  },
  {
    title: "Insurance understanding reduces stress more than people think",
    body: "A clear insurance setup makes GP registration, referrals, prescriptions, and budgeting much easier to understand.",
  },
  {
    title: "A little setup early saves a lot of confusion later",
    body: "Registering with a GP, knowing your pharmacy, and saving important contacts are simple steps that help a lot later.",
  },
  {
    title: "The system can feel blunt at first, but it gets easier once you know the flow",
    body: "Most frustration comes from expecting a different system, not from failing to learn everything on day one.",
  },
];

export const livingHealthcareFaq: LivingHealthcareFaqItem[] = [
  {
    id: "how-does-healthcare-work",
    question: "How does healthcare work in the Netherlands?",
    answer:
      "In practice, it usually works like this: insurance sorted, GP first for many non-emergency issues, then pharmacy, urgent care, specialist, or hospital if needed.",
  },
  {
    id: "do-i-need-dutch-health-insurance",
    question: "Do I need Dutch health insurance?",
    answer:
      "It depends on your situation, but many residents do need Dutch basic health insurance. Check the insurance guide and official sources to confirm what applies to you.",
  },
  {
    id: "what-is-a-huisarts",
    question: "What is a huisarts?",
    answer:
      "A huisarts is the Dutch GP. For many non-emergency issues, this is the usual first contact and often the way into further care if needed.",
  },
  {
    id: "do-i-need-gp-registration",
    question: "Do I need to register with a GP?",
    answer:
      "If you are settling in, it is usually a smart step. Registration gives you a normal first contact before you need care in a stressful moment.",
  },
  {
    id: "gp-vs-urgent-care-vs-112",
    question: "When do I call the GP vs urgent care vs 112?",
    answer:
      "Use your GP for normal non-urgent care during regular hours. Use after-hours urgent GP care when something should not wait but is not clearly life-threatening. Use 112 for true emergencies.",
  },
  {
    id: "can-i-go-straight-to-hospital",
    question: "Can I go straight to a hospital?",
    answer:
      "Sometimes, especially in a real emergency, but hospitals are not the normal first stop for many everyday health issues. That is one reason the GP role feels so central.",
  },
  {
    id: "why-confusing-at-first",
    question: "Why do newcomers often find Dutch healthcare confusing at first?",
    answer:
      "Usually because the system is more GP-led and referral-based than what they are used to. Once the flow is clear, it usually feels much more logical.",
  },
  {
    id: "what-should-i-set-up-first",
    question: "What should I set up first after arriving?",
    answer:
      "Understand your insurance situation, save 112, look into GP registration, know your nearest pharmacy, and learn the after-hours care route near you.",
  },
];

export const livingHealthcareReferences: LivingHealthcareReferences = {
  title: "Official sources & useful references",
  intro:
    "ExpatCopilot gives practical guidance, not medical or legal advice. Use official sources to confirm insurance rules, emergency guidance, and healthcare details that depend on your situation.",
  links: [
    {
      label: "Government.nl - health insurance in the Netherlands",
      href: "https://www.government.nl/topics/health-insurance",
    },
    {
      label: "Government.nl - emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
    },
    {
      label: "Zorginstituut Nederland - English information",
      href: "https://www.zorginstituutnederland.nl/english",
    },
    {
      label: "Dienst Toeslagen - healthcare allowance information",
      href: "https://www.toeslagen.nl/",
    },
  ],
  footer:
    "If you need urgent medical help, do not rely on editorial pages alone. Use the right medical or emergency contact for your situation.",
};

export const livingHealthcareRelatedTools: LivingHealthcareRelatedTools = {
  sectionTitle: "Helpful planning tools and related guides",
  sectionSubtitle: "Use this page as the starting point, then use the right tool or guide for the admin, budget, or family side around it.",
  intro:
    "Healthcare feels easier when it is connected to the rest of your move: insurance admin, monthly costs, family setup, and your first-month timeline.",
  cards: [
    {
      title: "Netherlands Survival Guide",
      description: "Keep healthcare inside your wider first-week setup instead of treating it as a separate task.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open the Survival Guide",
      iconKey: "checkCircle2",
    },
    {
      title: "Healthcare Allowance Estimator",
      description: "Estimate whether healthcare allowance may help with monthly premiums and planning.",
      href: HEALTHCARE_ALLOWANCE_TOOL_PATH,
      ctaLabel: "Estimate healthcare allowance",
      iconKey: "heartPulse",
    },
    {
      title: "Cost of Living Calculator",
      description: "Place insurance and healthcare costs inside a realistic monthly budget instead of guessing.",
      href: COST_OF_LIVING_TOOL_PATH,
      ctaLabel: "Run the cost calculator",
      iconKey: "calendarDays",
    },
    {
      title: "Childcare Cost Estimator",
      description: "Useful when family setup, childcare, and healthcare admin all need to fit together.",
      href: CHILDCARE_TOOL_PATH,
      ctaLabel: "Estimate childcare costs",
      iconKey: "users",
    },
    {
      title: "Daily Life Basics",
      description: "The everyday routines around local services, payments, apps, and settling-in habits.",
      href: LIVING_DAILY_LIFE_PATH,
      ctaLabel: "Read Daily Life Basics",
      iconKey: "mapPin",
    },
    {
      title: "Health Insurance in the Netherlands",
      description: "Go deeper on insurance once you understand how healthcare fits together in real life.",
      href: HEALTH_INSURANCE_GUIDE_PATH,
      ctaLabel: "Read the insurance guide",
      iconKey: "shield",
    },
  ],
  shortcutEyebrow: "Broader setup",
  shortcutTitle: "Keep healthcare connected to the rest of your move",
  shortcutBody:
    "These extra guides help when healthcare questions overlap with first-month admin, family setup, or the wider moving timeline.",
  shortcuts: [
    {
      href: FIRST_90_DAYS_GUIDE_PATH,
      title: "First 90 Days in the Netherlands",
      description: "See where insurance, GP registration, and healthcare admin usually fit into your arrival timeline.",
      meta: "Read the 90-day guide",
    },
    {
      href: MOVING_WITH_KIDS_GUIDE_PATH,
      title: "Moving to the Netherlands with kids",
      description: "Family setup guide for schooling, childcare, and the practical side of relocating with children.",
      meta: "Open the family move guide",
    },
    {
      href: MOVING_WITH_FAMILY_GUIDE_PATH,
      title: "Moving to the Netherlands with family",
      description: "Broader household guide for housing, documents, healthcare setup, and the shared admin that shapes family arrival.",
      meta: "Read the family guide",
    },
    {
      href: LIVING_SHOPPING_GROCERIES_PATH,
      title: "Shopping & Groceries",
      description: "Use the wider daily-life guides so health admin does not feel disconnected from normal routines.",
      meta: "Read the shopping guide",
    },
    {
      href: LIVING_ESSENTIAL_APPS_PATH,
      title: "Essential Apps",
      description: "Phone setup for maps, payments, delivery, and the practical digital layer around everyday life.",
      meta: "Open the app guide",
    },
  ],
};
