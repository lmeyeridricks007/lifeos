import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingLanguageFaqItem,
  LivingLanguageMisunderstanding,
  LivingLanguagePhraseGroup,
  LivingLanguageQuickStartStage,
  LivingLanguageReferences,
  LivingLanguageRelatedTools,
  LivingLanguageSituation,
} from "./livingLanguage.types";

export const livingLanguageQuickStart: LivingLanguageQuickStartStage[] = [
  {
    title: "First week",
    badge: "Start small",
    priority: "high",
    iconKey: "messageCircleMore",
    intro: "The goal is not fluent Dutch. It is feeling steady in the first ten seconds of an everyday interaction.",
    bullets: [
      "Learn hello, thank you, sorry, please, and do you speak English?",
      "Memorize just enough for trains, shops, and cafes before your first rushed interaction",
      "Use a Dutch greeting even if the rest of the exchange happens in English",
      "Get used to hearing Dutch around you without treating every sentence like a test",
      "Keep a tiny phrase list on your phone so stress does not wipe your memory",
    ],
    footHref: LIVING_SURVIVAL_GUIDE_PATH,
    footLabel: "Pair this with the Survival Guide",
  },
  {
    title: "First month",
    badge: "Repeat what matters",
    iconKey: "store",
    intro: "Build around the phrases you use every week, not the ones that only sound impressive on paper.",
    bullets: [
      "Lock in the service phrases you use several times a week",
      "Recognize common signs, receipts, and short service questions",
      "Practice greeting in Dutch before switching when needed",
      "Use short Dutch with cashiers, delivery drivers, and neighbors",
      "Notice which phrases keep repeating and upgrade those first",
    ],
    footHref: LIVING_DAILY_LIFE_PATH,
    footLabel: "See real-life examples",
  },
  {
    title: "Once you start settling in",
    badge: "Keep it light",
    iconKey: "ear",
    intro: "Once daily life feels calmer, progress usually comes from repetition and real life, not big study sessions.",
    bullets: [
      "Get used to the sound and rhythm of Dutch in ordinary settings",
      "Add work-related polite phrases if your job needs them",
      "Choose a few useful phrases instead of chasing giant vocabulary lists",
      "Learn when directness is communication style rather than bad tone",
      "Use Dutch as a way into daily life, not as a test",
    ],
    footHref: "/netherlands/first-90-days-netherlands/",
    footLabel: "Place it in your first 90 days",
  },
];

export const livingLanguagePhraseGroups: LivingLanguagePhraseGroup[] = [
  {
    id: "greetings-politeness",
    title: "Greetings and politeness",
    intro: "Simple phrases that make everyday interactions feel easier right away.",
    situationBadge: "Openers",
    iconKey: "handshake",
    phrases: [
      { dutch: "Hallo / Hoi", english: "Hello / Hi", usage: "Use for casual everyday greetings." },
      {
        dutch: "Goedemorgen / Goedemiddag",
        english: "Good morning / Good afternoon",
        usage: "Useful in shops, offices, or more formal service settings.",
      },
      {
        dutch: "Dank je wel / Dank u wel",
        english: "Thank you",
        usage: "Use all the time; the u-version sounds more formal or respectful.",
      },
      {
        dutch: "Alsjeblieft / Alstublieft",
        english: "Please / here you go",
        usage: "Use when asking politely or handing something over.",
      },
      {
        dutch: "Sorry / Pardon",
        english: "Sorry / excuse me",
        usage: "Helpful when moving past someone, interrupting, or correcting a small mistake.",
      },
    ],
  },
  {
    id: "basic-help",
    title: "Basic help and clarity",
    intro: "Short lines for the moment when your Dutch runs out but the interaction still needs to keep moving.",
    situationBadge: "When you get stuck",
    iconKey: "messageCircleMore",
    phrases: [
      { dutch: "Spreekt u Engels?", english: "Do you speak English?", usage: "A very useful fallback line in many situations." },
      { dutch: "Kunt u mij helpen?", english: "Can you help me?", usage: "Useful in shops, stations, offices, and service desks." },
      { dutch: "Waar is ...?", english: "Where is ...?", usage: "Simple enough for aisles, exits, toilets, or platforms." },
      { dutch: "Ik wil graag ...", english: "I would like ...", usage: "Great for ordering, asking for an item, or starting a request." },
    ],
  },
  {
    id: "service-phrases",
    title: "Short service phrases",
    intro: "A small set that covers a surprising amount of paying, ordering, and finishing the interaction well.",
    situationBadge: "Shops and cafes",
    iconKey: "store",
    phrases: [
      {
        dutch: "Kan ik met pin betalen?",
        english: "Can I pay by card?",
        usage: "Still useful in markets, kiosks, or small service settings.",
      },
      {
        dutch: "Mag ik afrekenen?",
        english: "Can I pay / check out?",
        usage: "Use when you are ready to settle the bill or finish at the counter.",
      },
      { dutch: "Heeft u een tas?", english: "Do you have a bag?", usage: "Helpful in supermarkets, takeaways, and small shops." },
      {
        dutch: "Dank u wel, fijne dag",
        english: "Thank you, have a nice day",
        usage: "An easy way to end many short interactions well.",
      },
    ],
  },
  {
    id: "listening-not-understanding",
    title: "Listening and not understanding",
    intro: "These matter more than clever vocabulary when someone is speaking too quickly for comfort.",
    situationBadge: "When you missed it",
    iconKey: "ear",
    phrases: [
      { dutch: "Ik begrijp het niet", english: "I do not understand", usage: "Direct, clear, and better than pretending." },
      {
        dutch: "Kunt u dat herhalen?",
        english: "Could you repeat that?",
        usage: "Use when you caught some of it but not enough.",
      },
      {
        dutch: "Langzamer, alstublieft",
        english: "More slowly, please",
        usage: "Useful on the phone, at a desk, or in fast service situations.",
      },
      {
        dutch: "Nog een keer, alstublieft",
        english: "One more time, please",
        usage: "A softer alternative when you need a repeat.",
      },
    ],
  },
  {
    id: "little-dutch",
    title: "Saying you speak little Dutch",
    intro: "The easiest way to set expectations early without turning the moment into an apology.",
    situationBadge: "Set expectations",
    iconKey: "languages",
    phrases: [
      {
        dutch: "Ik spreek maar een beetje Nederlands",
        english: "I only speak a little Dutch",
        usage: "Good opener before a longer exchange.",
      },
      {
        dutch: "Mijn Nederlands is nog niet zo goed",
        english: "My Dutch is not very good yet",
        usage: "Useful when you want to sound slightly warmer or more explanatory.",
      },
      {
        dutch: "Engels is makkelijker voor mij",
        english: "English is easier for me",
        usage: "Use when clarity matters and the conversation is getting more detailed.",
      },
      {
        dutch: "Dank u, ik probeer het",
        english: "Thank you, I am trying",
        usage: "A friendly line if someone notices your effort and helps you out.",
      },
    ],
  },
];

export const livingLanguageSituations: LivingLanguageSituation[] = [
  {
    title: "Transport",
    badge: "Transport",
    intro: "Keep transport Dutch short and practical. Simple questions usually get quick, useful answers.",
    iconKey: "trainFront",
    phrases: [
      { dutch: "Welk perron is het?", english: "Which platform is it?", usage: "Fast station question when boards feel unclear." },
      {
        dutch: "Waar moet ik uitstappen?",
        english: "Where do I need to get off?",
        usage: "Useful on buses, trams, or when asking for route help.",
      },
      {
        dutch: "Heeft deze trein vertraging?",
        english: "Is this train delayed?",
        usage: "Short way to confirm what you think you saw.",
      },
      { dutch: "Ik moet naar ...", english: "I need to go to ...", usage: "Good start when asking someone which direction you need." },
    ],
    tip: "Ask in Dutch, then switch fast if the answer becomes detailed. Accuracy matters more than staying in Dutch.",
  },
  {
    title: "Shops and groceries",
    badge: "Shop",
    intro: "Most shop interactions follow familiar patterns, which makes them easier to learn than they first look.",
    iconKey: "shoppingBag",
    phrases: [
      { dutch: "Waar staat ...?", english: "Where is ...?", usage: "Use for finding a product or shelf." },
      { dutch: "Kan ik met pin betalen?", english: "Can I pay by card?", usage: "Useful in smaller stores or markets." },
      { dutch: "Heeft u dit ook?", english: "Do you also have this?", usage: "Helpful if you cannot find a product." },
      { dutch: "Mag ik een bon?", english: "Can I have a receipt?", usage: "Easy line for returns or expense claims." },
    ],
    tip: "Even if the whole exchange happens in English, a Dutch hello and thank you usually fit naturally.",
  },
  {
    title: "Cafes and restaurants",
    badge: "Cafe",
    intro: "These are high-repeat phrases, so even a small amount of effort pays off quickly.",
    iconKey: "coffee",
    phrases: [
      { dutch: "Ik wil graag ...", english: "I would like ...", usage: "The safest way to start an order." },
      { dutch: "Heeft u nog plek?", english: "Do you still have space?", usage: "Helpful when asking about a table." },
      { dutch: "Mag ik de rekening?", english: "Can I have the bill?", usage: "Simple, clear, and widely useful." },
      { dutch: "Mag ik met kaart betalen?", english: "Can I pay by card?", usage: "Common end-of-meal question." },
    ],
    tip: "Dutch openings feel polite here, but English is still common in many city cafes. Use whichever keeps the flow easy.",
  },
  {
    title: "Deliveries and errands",
    badge: "Errands",
    intro: "These conversations are usually brief and practical, so a few clear lines go a long way.",
    iconKey: "package",
    phrases: [
      {
        dutch: "Ik kom een pakket ophalen",
        english: "I am here to pick up a package",
        usage: "Useful at pickup points or parcel shops.",
      },
      { dutch: "Ik was niet thuis", english: "I was not home", usage: "Helpful when explaining a missed delivery." },
      {
        dutch: "Kunt u het hier neerzetten?",
        english: "Can you leave it here?",
        usage: "Useful for building or doorstep interactions.",
      },
      {
        dutch: "Dank u voor de hulp",
        english: "Thank you for the help",
        usage: "A clean closing phrase for repair or delivery help.",
      },
    ],
    tip: "For packages and repairs, clear simple Dutch often works better than over-explaining.",
  },
];

export const livingLanguageMisunderstandings: LivingLanguageMisunderstanding[] = [
  {
    chip: "English",
    title: "If people speak English well, learning any Dutch is pointless.",
    body: "Not true. A little Dutch still improves greetings, service moments, neighbors, and the general tone of daily life.",
  },
  {
    chip: "Switching",
    title: "If someone switches to English, your Dutch must have been bad.",
    body: "Usually it just means they are trying to be efficient, helpful, or more comfortable in English themselves.",
  },
  {
    chip: "Patterns",
    title: "You need a huge vocabulary before daily life gets easier.",
    body: "Most daily interactions repeat. A small set of phrases covers much more real life than beginners expect.",
  },
  {
    chip: "Tone",
    title: "Direct Dutch-style language always means someone is annoyed.",
    body: "Often it is simply the local style: short, clear, and low-drama rather than warm, indirect, or heavily softened.",
  },
  {
    chip: "Confidence",
    title: "You should wait until your pronunciation feels good enough.",
    body: "Waiting usually slows progress. Practical use in ordinary moments builds confidence faster than private perfectionism does.",
  },
  {
    chip: "Context",
    title: "Language problems are mostly about words, not situations.",
    body: "In real life, the situation often matters as much as the phrase itself. Shops, trains, and neighbors all follow familiar patterns you can learn.",
  },
];

export const livingLanguageFaq: LivingLanguageFaqItem[] = [
  {
    id: "need-dutch",
    question: "Do I need Dutch to live in the Netherlands?",
    answer:
      "Not necessarily. Many newcomers manage a lot in English, especially in cities and international settings. Very basic Dutch still helps noticeably with greetings, errands, neighbors, and short service moments.",
  },
  {
    id: "english-around",
    question: "Can I get around in English?",
    answer:
      "Usually yes, especially in larger cities and transport-heavy areas. A little Dutch still helps when you need to ask quick questions, read signs faster, or sound more natural in short interactions.",
  },
  {
    id: "learn-first",
    question: "Which Dutch phrases should I learn first?",
    answer:
      "Start with greetings, thank you, sorry, please, do you speak English, I only speak a little Dutch, I do not understand, where is ..., and can I pay by card. Those cover a surprising amount of real life.",
  },
  {
    id: "rude-english-first",
    question: "Is it rude to speak English first?",
    answer:
      "Usually not, but a Dutch greeting often helps. The easiest pattern is to open in Dutch, then switch to English when clarity matters.",
  },
  {
    id: "switch-to-english",
    question: "Why do people switch to English when I try Dutch?",
    answer:
      "Often because they want to help, save time, or practice English themselves. It usually is not a judgment on your Dutch.",
  },
  {
    id: "shops-cafes",
    question: "What language is most useful in shops and cafes?",
    answer:
      "Simple Dutch greetings and service phrases go a long way. You do not need much: hello, thank you, I would like, can I pay by card, and can I have the bill.",
  },
  {
    id: "improve-no-classes",
    question: "How can I improve without taking formal classes?",
    answer:
      "Focus on the situations you repeat most, keep a tiny phrase list on your phone, use Dutch greetings daily, and add new phrases only when they solve a real recurring problem.",
  },
  {
    id: "do-not-understand",
    question: "What should I say if I do not understand?",
    answer:
      "Use Ik begrijp het niet, Kunt u dat herhalen?, or Langzamer, alstublieft. If needed, switch to Spreekt u Engels? quickly and calmly.",
  },
];

export const livingLanguageReferences: LivingLanguageReferences = {
  title: "Official sources and useful references",
  intro:
    "There is no single official guide to everyday Dutch phrases, so use this section as a mix of official integration information and practical next steps.",
  links: [
    {
      href: "https://www.government.nl/topics/integration-in-the-netherlands",
      label: "Government.nl - integration in the Netherlands",
    },
    {
      href: "https://www.duo.nl/particulier/integration-in-the-netherlands.jsp",
      label: "DUO - integration information",
    },
    {
      href: "https://www.netherlandsworldwide.nl/",
      label: "Netherlands Worldwide - official information for people living abroad or relocating",
    },
  ],
  footer:
    "For more practical language help, pair those official pages with ExpatCopilot's Dutch language basics, Learning Dutch, and Culture & Etiquette guides. Your municipality newcomer portal or local library often lists taalcafes and low-pressure conversation groups too.",
};

export const livingLanguageRelatedTools: LivingLanguageRelatedTools = {
  planningTools: [
    {
      title: "First 90 Days Planner",
      description: "Place language confidence next to registration, banking, transport, and daily-life setup instead of treating Dutch as a separate track.",
      href: "/netherlands/moving/tools/first-90-days/",
      ctaLabel: "Plan your first 90 days",
      iconKey: "alarmClockCheck",
    },
    {
      title: "Arrival Planner",
      description: "Useful when you want a simple arrival plan for banking, your address, transport, and your first daily tasks.",
      href: "/netherlands/moving/tools/arrival-planner/",
      ctaLabel: "Open arrival planner",
      iconKey: "workflow",
    },
    {
      title: "Job Offer Comparison Tool",
      description: "Helpful when work language, commute, office style, and daily life all affect your decision.",
      href: "/netherlands/work/tools/job-offer-comparison/",
      ctaLabel: "Compare job offers",
      iconKey: "briefcaseBusiness",
    },
    {
      title: "Integration Tools Hub",
      description: "Use this when you want to turn basic language confidence into a clearer study or integration plan.",
      href: "/netherlands/integration/tools/",
      ctaLabel: "Open integration tools",
      iconKey: "bookOpenCheck",
    },
  ],
  livingGuides: [
    {
      title: "Netherlands Survival Guide",
      description: "Start here for the wider first-week picture: transport, payments, weather, apps, and the rest of the Living stack.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open Survival Guide",
      iconKey: "sparkles",
    },
    {
      title: "Daily Life Basics",
      description: "Useful when you want to see where these phrases come up in real life: groceries, parcels, shops, and home routines.",
      href: LIVING_DAILY_LIFE_PATH,
      ctaLabel: "Read Daily Life Basics",
      iconKey: "shoppingBag",
    },
    {
      title: "Essential Apps",
      description: "Pair language confidence with the apps that help you move, pay, and navigate errands more smoothly.",
      href: LIVING_ESSENTIAL_APPS_PATH,
      ctaLabel: "Open the app guide",
      iconKey: "store",
    },
    {
      title: "Getting Around",
      description: "Use this when station signs, platforms, and commuting questions are the places you feel least confident.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read transport guide",
      iconKey: "trainFront",
    },
    {
      title: "Dutch Culture & Etiquette",
      description: "Explains the social side of short answers, directness, greetings, and why a little Dutch can help more than you expect.",
      href: LIVING_CULTURE_ETIQUETTE_PATH,
      ctaLabel: "Read culture guide",
      iconKey: "users",
    },
    {
      title: "First 90 Days in the Netherlands",
      description: "Good if you want to place language confidence inside your wider settling-in timeline instead of treating it like a separate project.",
      href: "/netherlands/first-90-days-netherlands/",
      ctaLabel: "See the 90-day guide",
      iconKey: "mapPinned",
    },
  ],
  deeperGuides: [
    {
      href: "/netherlands/culture/dutch-language-basics/",
      title: "Dutch language basics",
      description: "Continue into the Culture guide when you want more starter language patterns beyond the survival phrases on this page.",
      cta: "Open language basics",
    },
    {
      href: "/netherlands/culture/learning-dutch/",
      title: "Learning Dutch",
      description: "Useful when you want a simple study routine or a bit more structure.",
      cta: "Explore learning options",
    },
    {
      href: "/netherlands/culture/practice-scenarios/",
      title: "Dutch practice scenarios",
      description: "A helpful next step if you want longer real-life speaking examples for stressful or awkward moments.",
      cta: "Practice real scenarios",
    },
    {
      href: "/netherlands/work/work-culture-netherlands/",
      title: "Work culture in the Netherlands",
      description: "Useful when language questions start mixing with meeting style, direct feedback, and office expectations.",
      cta: "Read work-culture guide",
    },
  ],
};
