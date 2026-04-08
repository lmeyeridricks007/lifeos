import type { PillarFaqItem, PillarTimelineStage } from "@expatlife/content";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import type { NextStepItem } from "@/components/page/moving-pillar/next-steps";

export type PillarHubToolTile = {
  title: string;
  description: string;
  href: string;
};

export type ClusterPillarHubConfig = {
  jsonLd: {
    headline: string;
    description: string;
    canonicalPath: string;
  };
  breadcrumbs: Array<{ label: string; href: string }>;
  pageHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroImage: string;
    heroImageAlt: string;
    primaryCta: { label: string; href: string };
    secondaryCtas: Array<{ label: string; href: string }>;
  };
  atGlance: {
    intro?: string;
    who: string[];
    timeline: string;
    steps: string[];
    footerLine?: string;
  };
  keySections: {
    sectionId: string;
    title: string;
    subtitle: string;
    stages: PillarTimelineStage[];
  };
  recommendedPaths: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    scenarios: ResolvedScenario[];
  };
  tools: {
    id: string;
    title: string;
    subtitle: string;
    items: PillarHubToolTile[];
  };
  nextSteps: {
    id: string;
    title: string;
    subtitle: string;
    items: NextStepItem[];
    maxItems: number;
  };
  faq: PillarFaqItem[];
};

const LIVING_HUB_PATH = "/netherlands/living/";
const CULTURE_HUB_PATH = "/netherlands/culture/";

export const LIVING_PILLAR_HUB_CONFIG: ClusterPillarHubConfig = {
  jsonLd: {
    headline: "Living in the Netherlands",
    description:
      "Practical hub for housing, utilities, daily rhythms, digital admin, and community life after you arrive in the Netherlands.",
    canonicalPath: LIVING_HUB_PATH,
  },
  breadcrumbs: [
    { label: "Netherlands", href: "/netherlands/" },
    { label: "Living in the Netherlands", href: LIVING_HUB_PATH },
  ],
  pageHeader: {
    eyebrow: "Netherlands · Living cluster",
    title: "Living in the Netherlands",
    subtitle:
      "Turn keys, contracts, and local systems into a workable routine—without mixing in visa law or tax planning (those live under Move and Money).",
    heroImage: "/images/heroes/moving-to-netherlands-canal-hero.png",
    heroImageAlt: "Canal houses and bicycles—everyday life in a Dutch city",
    primaryCta: { label: "Start with housing", href: "/netherlands/living/housing/" },
    secondaryCtas: [
      { label: "Living utilities hub", href: "/netherlands/living/utilities/" },
      { label: "Housing tools", href: "/netherlands/housing/tools/" },
    ],
  },
  atGlance: {
    intro:
      "You have keys or a rental agreement—now you wire up utilities, learn local rhythms, and keep digital admin under control.",
    who: [
      "Renters setting up a Dutch address and household services",
      "New arrivals past visa steps who need practical systems",
      "Families juggling school, neighbors, and gemeente touchpoints",
    ],
    timeline: "Most households need 2–6 weeks to stabilise housing admin; utilities often follow within days of move-in.",
    steps: [
      "Lock housing basics: contract, deposit, and address registration context",
      "Book energy, water, and connectivity before invoices pile up",
      "Learn daily-life patterns: waste, transport, and building norms",
    ],
    footerLine: "Guides in this cluster are expanding continuously—each topic page links deeper resources where they already exist.",
  },
  keySections: {
    sectionId: "living-key-sections",
    title: "What this cluster covers",
    subtitle:
      "Five practical buckets mirror the mega menu—click through for scaffold guides that link to flagship articles and tools.",
    stages: [
      {
        id: "housing",
        label: "Housing",
        goal: "Search, sign, and understand your rental without surprises.",
        actions: ["Compare neighbourhoods and rent bands", "Read contracts and deposit clauses carefully", "Plan address registration with Move guides"],
        links: [
          { href: "/netherlands/living/housing/", label: "Housing hub" },
          { href: "/netherlands/living/rental-market/", label: "Rental market" },
        ],
      },
      {
        id: "utilities",
        label: "Utilities",
        goal: "Reliable energy, water, and home connectivity from day one.",
        actions: ["Take meter readings on handover", "Shortlist energy and broadband providers", "Use gemeente portals for local services"],
        links: [
          { href: "/netherlands/living/utilities/", label: "Utilities overview" },
          { href: "/netherlands/living/internet-and-mobile/", label: "Internet & mobile" },
        ],
      },
      {
        id: "daily-life",
        label: "Daily life",
        goal: "Navigate transport, waste, and neighbourhood expectations smoothly.",
        actions: ["Sort waste per gemeente rules", "Plan bike + OV habits", "Understand quiet hours and building etiquette"],
        links: [
          { href: "/netherlands/living/daily-life/", label: "Daily life hub" },
          { href: "/netherlands/living/transport-basics/", label: "Transport basics" },
        ],
      },
      {
        id: "digital-life",
        label: "Digital life",
        goal: "DigiD, portals, and subscriptions without drowning in tabs.",
        actions: ["Secure DigiD and recognise phishing patterns", "Map which agency owns which task", "Track contract end dates"],
        links: [
          { href: "/netherlands/living/digid-awareness/", label: "DigiD (Living entry)" },
          { href: "/netherlands/living/government-portals-overview/", label: "Government portals" },
        ],
      },
      {
        id: "community-safety",
        label: "Community & safety",
        goal: "Stay neighbourly, aware, and resilient in shared spaces.",
        actions: ["Introduce yourself to neighbours when it fits", "Know parking and permit basics", "Keep digital hygiene for gemeente scams"],
        links: [
          { href: "/netherlands/living/community-basics/", label: "Community basics" },
          { href: "/netherlands/living/privacy-and-safety-basics/", label: "Privacy & safety" },
        ],
      },
    ],
  },
  recommendedPaths: {
    id: "living-entry-paths",
    eyebrow: "Where to start",
    title: "Recommended entry paths",
    intro: "Pick the job-to-be-done; each card suggests a tight reading order plus the fastest tool when one exists.",
    scenarios: [
      {
        id: "path-housing",
        personaTitle: "Finding a place to live",
        whatMatters: ["Proof of income and landlord expectations", "Rental timeline vs. job start dates", "Furnished vs. unfurnished trade-offs"],
        readingOrderLinks: [
          { title: "Housing hub", href: "/netherlands/living/housing/" },
          { title: "Rental market", href: "/netherlands/living/rental-market/" },
          { title: "Contracts & deposits", href: "/netherlands/living/rental-contracts-and-deposits/" },
        ],
        startToolLink: {
          title: "Dutch Rental Budget Calculator",
          href: "/netherlands/housing/tools/dutch-rental-budget-calculator/",
        },
        unknownsToConfirm: [],
      },
      {
        id: "path-utilities",
        personaTitle: "Setting up utilities",
        whatMatters: ["Meter readings and move-in dates", "Energy contract length vs. flexibility", "Broadband lead times in your building"],
        readingOrderLinks: [
          { title: "Utilities overview", href: "/netherlands/living/utilities/" },
          { title: "Energy & water", href: "/netherlands/living/energy-and-water/" },
          { title: "Internet & mobile", href: "/netherlands/living/internet-and-mobile/" },
        ],
        startToolLink: {
          title: "Utilities & Services Comparison Tool",
          href: "/netherlands/living/tools/utilities-services-comparison/",
        },
        unknownsToConfirm: [],
      },
      {
        id: "path-daily",
        personaTitle: "Daily life basics",
        whatMatters: ["Waste sorting and pickup cadence", "Bike + OV combinations", "Parking permits if you drive"],
        readingOrderLinks: [
          { title: "Daily life hub", href: "/netherlands/living/daily-life/" },
          { title: "Waste & recycling", href: "/netherlands/living/waste-and-recycling/" },
          { title: "Transport basics", href: "/netherlands/living/transport-basics/" },
        ],
        startToolLink: null,
        unknownsToConfirm: [],
      },
      {
        id: "path-admin",
        personaTitle: "Understanding local admin tools",
        whatMatters: ["DigiD for gemeente and taxes", "Which portal handles which task", "Subscription cancellation windows"],
        readingOrderLinks: [
          { title: "DigiD awareness", href: "/netherlands/living/digid-awareness/" },
          { title: "Government portals map", href: "/netherlands/living/government-portals-overview/" },
          { title: "Subscriptions & cancellations", href: "/netherlands/living/subscriptions-and-cancellations/" },
        ],
        startToolLink: {
          title: "Full DigiD guide (Move)",
          href: "/netherlands/digid-awareness/",
        },
        unknownsToConfirm: [],
      },
    ],
  },
  tools: {
    id: "living-tools",
    title: "Tools that match this cluster",
    subtitle:
      "Housing setup calculators and comparisons live here; buy vs rent and mortgage economics sit under Money and the global tools hub.",
    items: [
      {
        title: "Dutch Rental Budget Calculator",
        description: "Pressure-test rent targets before you search seriously.",
        href: "/netherlands/housing/tools/dutch-rental-budget-calculator/",
      },
      {
        title: "Utilities & Services Comparison Tool",
        description: "Line up energy, broadband, and recurring household services.",
        href: "/netherlands/living/tools/utilities-services-comparison/",
      },
      {
        title: "Housing platforms directory",
        description: "Compare listing sites and housing services.",
        href: "/netherlands/services/housing-platforms/",
      },
      {
        title: "Mobile connectivity directory",
        description: "Find providers when you need a Dutch SIM or fiber.",
        href: "/netherlands/services/mobile-connectivity/",
      },
    ],
  },
  nextSteps: {
    id: "living-next-steps",
    title: "Related pillars & hubs",
    subtitle: "When Living questions bump into visas, money, or city choice, jump to these hubs next.",
    maxItems: 6,
    items: [
      {
        label: "Moving to the Netherlands",
        href: "/netherlands/moving-to-the-netherlands/",
        description: "Visas, registration, BSN, and first-month sequencing.",
      },
      {
        label: "Money & taxes hub",
        href: "/netherlands/taxes/",
        description: "Salary, allowances, banking, and affordability calculators.",
      },
      {
        label: "Cities hub",
        href: "/netherlands/cities/",
        description: "Compare cities before you lock a neighbourhood.",
      },
      {
        label: "Services directory",
        href: "/netherlands/services/",
        description: "Banks, insurers, movers, and immigration support.",
      },
      {
        label: "Culture hub",
        href: "/netherlands/culture/",
        description: "Social norms, workplace cues, and integration context.",
      },
      {
        label: "All tools",
        href: "/netherlands/tools/",
        description: "Browse every calculator, planner, and checklist.",
      },
    ],
  },
  faq: [
    {
      q: "Is Living the same as registering with the municipality?",
      a: "No. BRP registration, BSN, and visa steps live under **Move**. Living focuses on housing systems, utilities, daily rhythms, and light digital admin once you are settling in.",
    },
    {
      q: "Where do rent allowance or mortgage topics go?",
      a: "Allowances, tax treatment, and buy-vs-rent economics sit under **Money**. Living links across when you need the full picture.",
    },
    {
      q: "Why are some topic pages marked “coming soon”?",
      a: "Each URL is live so navigation never dead-ends. Scaffold pages summarise intent, link to flagship guides, and will gain long-form copy over time.",
    },
    {
      q: "Can I skip Dutch language content here?",
      a: "Day-to-day Living guides work in English, but language and integration context sits in the **Culture** cluster when you are ready.",
    },
  ],
};

export const CULTURE_PILLAR_HUB_CONFIG: ClusterPillarHubConfig = {
  jsonLd: {
    headline: "Understanding Dutch Culture",
    description:
      "Workplace norms, social expectations, traditions, and language basics—so daily interactions feel less mysterious.",
    canonicalPath: CULTURE_HUB_PATH,
  },
  breadcrumbs: [
    { label: "Netherlands", href: "/netherlands/" },
    { label: "Culture in the Netherlands", href: CULTURE_HUB_PATH },
  ],
  pageHeader: {
    eyebrow: "Netherlands · Culture cluster",
    title: "Understanding Dutch Culture",
    subtitle:
      "Decode directness, planning culture, holidays, and language expectations—alongside (not instead of) your Move and Money checklists.",
    heroImage: "/images/heroes/moving-to-netherlands-canal-hero.png",
    heroImageAlt: "Dutch city life—canals, bikes, and everyday social rhythm",
    primaryCta: { label: "Workplace culture", href: "/netherlands/culture/dutch-workplace-culture/" },
    secondaryCtas: [
      { label: "Social norms", href: "/netherlands/culture/dutch-social-norms/" },
      { label: "Tools hub", href: "/netherlands/tools/" },
    ],
  },
  atGlance: {
    intro:
      "Culture here means behaviour cues—how feedback sounds, how calendars fill, and which holidays shape city life.",
    who: [
      "International hires joining Dutch teams",
      "Families integrating through schools and neighbourhoods",
      "Anyone learning Dutch while navigating daily services",
    ],
    timeline: "Expect 3–9 months before workplace and social patterns feel predictable—language progress is its own timeline.",
    steps: [
      "Learn how feedback and meetings usually work",
      "Map social norms around planning, time, and space",
      "Layer language tools once you know your integration requirements",
    ],
    footerLine: "Employment law, salary, and permits remain under Money and Move—this hub stays behavioural.",
  },
  keySections: {
    sectionId: "culture-key-sections",
    title: "Explore Dutch culture by theme",
    subtitle: "Four pillars mirror the mega menu. Each card links into scaffold guides with deeper cross-links.",
    stages: [
      {
        id: "workplace",
        label: "Workplace culture",
        goal: "Interpret directness, meetings, and written follow-ups accurately.",
        actions: ["Separate tone from intent in feedback", "Expect agendas and documented outcomes", "Know when hierarchy is flat in practice"],
        links: [
          { href: "/netherlands/culture/dutch-workplace-culture/", label: "Workplace hub" },
          { href: "/netherlands/work/work-culture-netherlands/", label: "Deep work-culture guide" },
        ],
      },
      {
        id: "social",
        label: "Social norms",
        goal: "Navigate invitations, timing, and everyday communication confidently.",
        actions: ["Plan social dates early", "Understand punctuality signals respect", "Blend Living + Culture cues for neighbours"],
        links: [
          { href: "/netherlands/culture/dutch-social-norms/", label: "Social norms hub" },
          { href: "/netherlands/culture/communication-style/", label: "Communication style" },
        ],
      },
      {
        id: "traditions",
        label: "Traditions",
        goal: "Participate in holidays and seasonal rhythms without guesswork.",
        actions: ["Know Koningsdag city impacts", "Understand Sinterklaas season in schools", "Check public holiday closures"],
        links: [
          { href: "/netherlands/culture/dutch-traditions/", label: "Traditions hub" },
          { href: "/netherlands/culture/national-holidays/", label: "National holidays" },
        ],
      },
      {
        id: "language-integration",
        label: "Language & integration",
        goal: "Learn Dutch strategically and align with integration requirements you must verify officially.",
        actions: ["Start with spoken basics for shops and care", "Use practice scenarios for stressful moments", "Confirm obligations with IND / DUO"],
        links: [
          { href: "/netherlands/culture/learning-dutch/", label: "Learning Dutch" },
          { href: "/netherlands/culture/inburgering-exams/", label: "Inburgering orientation" },
        ],
      },
    ],
  },
  recommendedPaths: {
    id: "culture-entry-paths",
    eyebrow: "Where to start",
    title: "Recommended entry paths",
    intro: "Choose the situation that matches your week—each card stacks the most helpful reads first.",
    scenarios: [
      {
        id: "path-work",
        personaTitle: "Starting work in the Netherlands",
        whatMatters: ["Meeting cadence and consensus", "Direct feedback without personal offence", "Written recaps after calls"],
        readingOrderLinks: [
          { title: "Dutch workplace culture", href: "/netherlands/culture/dutch-workplace-culture/" },
          { title: "Meetings & consensus", href: "/netherlands/culture/meetings-and-consensus/" },
          { title: "Written follow-ups", href: "/netherlands/culture/written-follow-ups/" },
        ],
        startToolLink: {
          title: "Working in the Netherlands (Money)",
          href: "/netherlands/work/working-in-netherlands/",
        },
        unknownsToConfirm: [],
      },
      {
        id: "path-social",
        personaTitle: "Social expectations in daily life",
        whatMatters: ["How invites and RSVPs work", "Personal space and direct questions", "Neighbour and building norms"],
        readingOrderLinks: [
          { title: "Dutch social norms", href: "/netherlands/culture/dutch-social-norms/" },
          { title: "Invitations & planning", href: "/netherlands/culture/invitations-and-planning/" },
          { title: "Community basics (Living)", href: "/netherlands/living/community-basics/" },
        ],
        startToolLink: null,
        unknownsToConfirm: [],
      },
      {
        id: "path-traditions",
        personaTitle: "Holidays & traditions",
        whatMatters: ["Orange-day city logistics", "School-season customs", "Shop closures on public holidays"],
        readingOrderLinks: [
          { title: "Dutch traditions", href: "/netherlands/culture/dutch-traditions/" },
          { title: "King's Day", href: "/netherlands/culture/kings-day/" },
          { title: "National holidays", href: "/netherlands/culture/national-holidays/" },
        ],
        startToolLink: null,
        unknownsToConfirm: [],
      },
      {
        id: "path-language",
        personaTitle: "Learning Dutch & integrating faster",
        whatMatters: ["Speaking confidence for daily errands", "Exam prep if required for your route", "Family/school touchpoints"],
        readingOrderLinks: [
          { title: "Language basics", href: "/netherlands/culture/dutch-language-basics/" },
          { title: "Learning Dutch", href: "/netherlands/culture/learning-dutch/" },
          { title: "Inburgering orientation", href: "/netherlands/culture/inburgering-exams/" },
        ],
        startToolLink: {
          title: "Inburgering Timeline Planner",
          href: "/netherlands/integration/tools/inburgering-timeline-planner/",
        },
        unknownsToConfirm: [],
      },
    ],
  },
  tools: {
    id: "culture-tools",
    title: "Tools that support integration",
    subtitle: "Family, partner, and language planners—each opens in the same tool chrome as the Move hub.",
    items: [
      {
        title: "Partner Work Eligibility Checker",
        description: "See what usually matters before a partner starts working.",
        href: "/netherlands/family/tools/partner-work-eligibility-checker/",
      },
      {
        title: "Childcare Cost Estimator",
        description: "Model childcare spend and allowances for family planning.",
        href: "/netherlands/family/tools/childcare-cost-estimator/",
      },
      {
        title: "Inburgering Timeline Planner",
        description: "Sketch milestones around exams and obligations (verify legally).",
        href: "/netherlands/integration/tools/inburgering-timeline-planner/",
      },
      {
        title: "KNM Knowledge Quiz",
        description: "Practice KNM-style questions with feedback loops.",
        href: "/netherlands/integration/tools/knm-knowledge-quiz/",
      },
    ],
  },
  nextSteps: {
    id: "culture-next-steps",
    title: "Related pillars & hubs",
    subtitle: "Culture complements the practical pillars—jump here when paperwork or budgets take over.",
    maxItems: 6,
    items: [
      {
        label: "Moving to the Netherlands",
        href: "/netherlands/moving-to-the-netherlands/",
        description: "Legal sequencing, documents, and arrival planning.",
      },
      {
        label: "Living hub",
        href: "/netherlands/living/",
        description: "Housing, utilities, and everyday admin systems.",
      },
      {
        label: "Money & taxes hub",
        href: "/netherlands/taxes/",
        description: "Salary, contracts, and benefits once work starts.",
      },
      {
        label: "Cities hub",
        href: "/netherlands/cities/",
        description: "City flavour helps interpret local social life.",
      },
      {
        label: "Family tools",
        href: "/netherlands/family/tools/",
        description: "Childcare and partner-work calculators in one place.",
      },
      {
        label: "All tools",
        href: "/netherlands/tools/",
        description: "Browse the full tool library.",
      },
    ],
  },
  faq: [
    {
      q: "Does this hub replace legal advice?",
      a: "No. We explain behavioural norms and point to official sources. Visas, permits, and contracts still require verified legal and employer guidance.",
    },
    {
      q: "Why link to Money for work topics?",
      a: "Salary, contracts, and permits are regulated systems. Culture pages explain *how interactions feel*; Money pages cover *rules and economics*.",
    },
    {
      q: "Are integration tools a substitute for DUO/IND answers?",
      a: "Tools help you plan; always confirm obligations with **DUO**, **IND**, and your gemeente. Requirements vary by nationality and residence route.",
    },
    {
      q: "Where should I read about healthcare insurance?",
      a: "Policy comparison belongs under **Money** and **Services**. We link to health *culture* basics here only for bedside-manner context.",
    },
  ],
};
