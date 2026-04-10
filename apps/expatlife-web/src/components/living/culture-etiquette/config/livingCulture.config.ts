import {
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingCultureFaqItem,
  LivingCultureMisunderstandingCard,
  LivingCultureQuickStartStage,
  LivingCultureReferences,
  LivingCultureRelatedTools,
  LivingCultureSection,
  LivingCultureTips,
} from "./livingCulture.types";

export const livingCultureQuickStart: LivingCultureQuickStartStage[] = [
  {
    title: "First week",
    badge: "Start here",
    priority: "high",
    iconKey: "clock",
    intro: "Focus on staying calm and reading tone before trying to explain every interaction.",
    bullets: [
      "Treat short or direct language as neutral until you have a reason not to.",
      "Be on time for appointments, viewings, and first social plans, or send a quick update if delayed.",
      "Answer simple questions simply instead of adding extra explanation to sound polite.",
      "If a reply feels abrupt, ask one calm follow-up before deciding what it meant.",
      "You do not need Dutch fluency to make a good impression; clarity and reliability help more.",
    ],
    footHref: LIVING_SURVIVAL_GUIDE_PATH,
    footLabel: "Back to the Survival Guide",
  },
  {
    title: "First month",
    badge: "Build context",
    iconKey: "calendarDays",
    intro: "Once daily life starts to repeat, invitations, feedback, and shared-space habits get easier to understand.",
    bullets: [
      "Social plans may be scheduled earlier and more clearly than you expect.",
      "Neighbors and shared buildings often work best when everyone follows practical norms without much drama.",
      "Meetings can sound direct and opinionated while still being cooperative.",
      "Clear logistics around timing, money, and who is bringing what are usually appreciated.",
      "A lot of comfort comes from seeing the same patterns again and again, not from memorizing rules.",
    ],
    footHref: LIVING_DAILY_LIFE_PATH,
    footLabel: "Pair this with Daily Life Basics",
  },
  {
    title: "Once you feel settled",
    badge: "Settle in",
    iconKey: "sparkles",
    intro: "You usually stop reading too much into every short sentence and start reading situations more naturally.",
    bullets: [
      "You start noticing the difference between efficiency, honesty, and actual unfriendliness.",
      "Planning, boundaries, and routines often feel less rigid once you rely on them yourself.",
      "A few Dutch phrases and more relaxed confidence usually help more than perfect pronunciation.",
      "You do not need to act Dutch. You just need to understand what other people expect.",
      "Work, neighbors, and social life usually feel lighter once fewer interactions feel mysterious.",
    ],
    footHref: "/netherlands/first-90-days-netherlands/",
    footLabel: "See the first-90-days guide",
  },
];

export const livingCultureSections: LivingCultureSection[] = [
  {
    id: "communication-style",
    eyebrow: "Core pattern",
    title: "Communication style and directness",
    subtitle: "One of the most useful things to learn is that short, clear communication is often practical, not personal.",
    cards: [
      {
        iconKey: "users",
        badge: "What it can sound like",
        title: "Short, clear, and less padded",
        body:
          "You may hear a direct no, a practical correction, or a straightforward question earlier than you expect. If you come from a more indirect culture, the tone can feel sharper than the intent.",
        tip: "Listen for the practical message first: what decision, fact, or expectation is actually being communicated?",
      },
      {
        iconKey: "checkCircle2",
        badge: "What it usually means",
        title: "Clarity and efficiency, not hostility",
        body:
          "In many everyday situations, directness is a way to be clear and move things along. It often means “let's be clear” more than “I dislike you.” Tone still matters, but short answers are often neutral.",
        tone: "accent",
        tip: "A short answer is often about speed or certainty, not about emotional distance.",
      },
      {
        iconKey: "building2",
        badge: "Where it feels strongest",
        title: "Work, logistics, service, and feedback",
        body:
          "You are most likely to notice it in meetings, scheduling, apartment logistics, public services, and customer-service situations where people are trying to solve the immediate issue efficiently.",
        tip: "The more practical the situation, the less social cushioning people may use.",
      },
      {
        iconKey: "helpCircle",
        badge: "How to respond well",
        title: "Stay calm, polite, and specific",
        bullets: [
          "Answer the practical point first, then add context if needed.",
          "Ask a short follow-up when something is unclear instead of guessing.",
          "Do not treat every brief reply as emotionally loaded.",
          "Keep your own polite tone, but make your request or answer easy to understand.",
        ],
        tip: "You usually do not need to mirror bluntness. Clear and courteous is enough.",
      },
    ],
    callout: {
      eyebrow: "Good first habit",
      title: "Be clear, calm, and polite",
      body:
        "Do not assume short equals rude. Answer the practical point, ask a short follow-up if needed, and let repeated experience tell you whether a person is simply efficient or actually unfriendly.",
    },
  },
  {
    id: "social-etiquette",
    eyebrow: "Social habits",
    title: "Social etiquette and invitations",
    subtitle: "A lot of Dutch social comfort comes from knowing the plan: when something starts, who is coming, and how the practical details work.",
    cards: [
      {
        iconKey: "calendarDays",
        badge: "Invitations",
        title: "Plans are often made in advance",
        body:
          "Spontaneous social life exists, but many people plan dinners, birthdays, and catch-ups earlier than newcomers expect. A full calendar often reflects structure, not lack of interest.",
        tip: "If you want to meet, suggest a time instead of leaving the plan vague.",
      },
      {
        iconKey: "clock",
        badge: "Timing",
        title: "Being on time is a basic courtesy",
        body:
          "Arriving around the time you said you would is basic courtesy in many situations. If you are running late, a quick message is usually enough.",
        tip: "A quick message is usually much better than apologizing later.",
      },
      {
        iconKey: "wallet",
        badge: "Bills",
        title: "Splitting is normal and straightforward",
        body:
          "One person may pay, then everyone sends their share. Clear money logistics are usually treated as normal housekeeping, not as a sign that the evening was less warm or generous.",
        tone: "accent",
        tip: "Paying someone back quickly often reads as considerate, not overly formal.",
      },
      {
        iconKey: "hand",
        badge: "Practical norm",
        title: "Clarity beats vague politeness",
        body:
          "If you need to confirm who is coming, what to bring, or when something starts, asking directly is usually better than hoping the situation will sort itself out later.",
        tip: "Useful questions are often welcome when they make the plan smoother for everyone.",
      },
    ],
    callout: {
      eyebrow: "Read it this way",
      title: "Structure does not cancel warmth",
      body:
        "Clear start times, advance planning, and quick payment requests can feel formal at first. In practice, they often remove small uncertainties so people can relax once they are together.",
    },
  },
  {
    id: "neighbors-public-space",
    eyebrow: "Shared environments",
    title: "Neighbors, public space, and everyday consideration",
    subtitle: "Everyday etiquette is often less about being impressive and more about making life easier for the people around you.",
    cards: [
      {
        iconKey: "building2",
        badge: "Shared spaces",
        title: "Order and predictability matter",
        body:
          "Apartment halls, bike storage, bins, and common entrances tend to work best when everyone follows the same practical expectations without much drama around them.",
        tip: "Notice the local pattern first: where bikes go, how bins work, when noise seems lower, and how neighbors message each other.",
      },
      {
        iconKey: "alertTriangle",
        badge: "Noise awareness",
        title: "Quiet consideration gets noticed",
        body:
          "People often value not disturbing others in stairwells, apartment blocks, and late-evening settings. You do not need to be silent, but awareness of impact matters and gets noticed quickly.",
        tip: "If you are unsure what counts as normal in a building, ask early instead of after a complaint.",
      },
      {
        iconKey: "trainFront",
        badge: "Public spaces",
        title: "Bike lanes, queues, and turn-taking are practical systems",
        body:
          "A lot of Dutch public etiquette is really about keeping things moving. Stay out of the bike lane unless you belong there, queue sensibly, and make it easy for other people to keep going.",
        tone: "accent",
        tip: "If a space has an obvious system, following it usually matters more than trying to seem extra friendly.",
      },
      {
        iconKey: "mapPinned",
        badge: "Neighbor interaction",
        title: "Friendly and direct can coexist",
        body:
          "A neighbor may be perfectly cordial and still speak plainly about noise, bins, or parking. That is often more about keeping things workable than about creating social distance.",
        tip: "A short, respectful message can be more appreciated than waiting until frustration builds.",
      },
    ],
    checklist: {
      eyebrow: "Simple rules of thumb",
      bullets: [
        "Keep the bike lane clear unless you are actually cycling.",
        "Queue and wait your turn rather than edging in through ambiguity.",
        "Be aware of stairwells, apartment doors, and late-night shared-space noise.",
        "If something affects other people, a short direct message is usually better than silence.",
      ],
    },
  },
  {
    id: "work-culture",
    eyebrow: "Professional life",
    title: "Work culture basics",
    subtitle: "This is the newcomer version: enough context to reduce confusion now, with a link out when work culture needs its own deeper read.",
    cards: [
      {
        iconKey: "building2",
        badge: "Communication",
        title: "Many workplaces feel relatively flat",
        body:
          "Managers may feel approachable, junior people may speak up, and titles can matter less in day-to-day discussion than newcomers expect. That does not mean hierarchy disappears; it often just feels less ceremonial.",
        tip: "You are usually expected to contribute clearly, not to stay quiet until invited three times.",
      },
      {
        iconKey: "users",
        badge: "Meetings",
        title: "People often say what they think",
        body:
          "Meetings can be discussion-heavy, and disagreement is not automatically a sign of tension. Direct opinions and consensus-building often sit side by side in the same room.",
        tone: "accent",
        tip: "Pushback is often about the idea, timeline, or trade-off, not about your worth in the team.",
      },
      {
        iconKey: "clock",
        badge: "Preparation",
        title: "Punctuality and readiness matter",
        body:
          "Joining on time, reading beforehand, and being clear about blockers often matters more than sounding polished or ceremonial.",
        tip: "A concise update with the real blocker is usually more useful than a long diplomatic detour.",
      },
      {
        iconKey: "sparkles",
        badge: "Boundaries",
        title: "Work-life balance is often taken seriously",
        body:
          "Directness at work does not automatically mean an always-on culture. Many teams also respect evenings, holidays, and personal time more than newcomers expect.",
        tip: "A direct workplace can still value healthy boundaries very strongly.",
      },
    ],
    callout: {
      eyebrow: "Remember",
      title: "Direct work culture is not the whole culture",
      body:
        "A workplace can be frank in meetings and still be thoughtful about boundaries, holidays, and planning. Do not assume one direct conversation tells you everything about the team.",
    },
    supportingText: "Go deeper with",
    supportingLinks: [
      { href: "/netherlands/work/work-culture-netherlands/", label: "Work culture in the Netherlands" },
      { href: "/netherlands/work/tools/job-offer-comparison/", label: "Job offer comparison tool" },
    ],
  },
  {
    id: "birthdays-visits",
    eyebrow: "Social memory",
    title: "Birthdays, visits, and home habits",
    subtitle: "These details stick with people because they show how warmth and structure can exist at the same time.",
    cards: [
      {
        iconKey: "gift",
        badge: "Birthdays",
        title: "Birthdays matter socially",
        body:
          "They often carry more everyday social weight than some newcomers expect, whether at home, in friend groups, or sometimes even at work.",
        tip: "If a birthday comes up, acknowledging it usually matters more than saying the perfect thing.",
      },
      {
        iconKey: "users",
        badge: "Congratulations",
        title: "Congratulating more than just the birthday person can happen",
        body:
          "You may encounter a broader congratulations ritual than you are used to. It can feel unusual at first, but the intent is usually warm and inclusive rather than ceremonial for its own sake.",
        tip: "You do not need a cultural performance here. A simple smile and congratulations is enough.",
      },
      {
        iconKey: "coffee",
        badge: "Home visits",
        title: "Visits often feel planned and structured",
        body:
          "Coffee, cake, a defined time, and clear logistics are common. Warmth does not need to be open-ended or spontaneous to be real.",
        tone: "accent",
        tip: "A visit can feel carefully planned and still be genuinely welcoming.",
      },
      {
        iconKey: "shoppingBag",
        badge: "Small gestures",
        title: "Bring something small and avoid unexplained lateness",
        body:
          "If you are invited to someone's home, a small gift, flowers, or something edible is often appreciated. Turning up significantly late without warning usually is not.",
        tip: "Aim for considerate and simple, not elaborate.",
      },
    ],
    callout: {
      eyebrow: "The useful takeaway",
      title: "You do not need to master every ritual",
      body:
        "If birthdays, congratulations, or home-visit norms feel unfamiliar, aim for simple effort rather than perfect performance. Showing up on time, saying congratulations, and bringing something small is usually enough.",
    },
  },
  {
    id: "how-to-adapt",
    eyebrow: "Confidence",
    title: "How to adapt without overthinking it",
    subtitle: "The goal is not to become a different person. The goal is to understand local habits well enough that you can relax.",
    cards: [
      {
        iconKey: "checkCircle2",
        badge: "Keep it simple",
        title: "Be polite, but a little clearer",
        body:
          "You do not need to become blunt. Usually it is enough to answer more directly, confirm plans more clearly, and say what you need without over-softening every sentence.",
      },
      {
        iconKey: "clock",
        badge: "Small habit",
        title: "Be on time, or message if delayed",
        body:
          "That one habit prevents a surprising number of problems at work, at home, and socially because it shows reliability straight away.",
      },
      {
        iconKey: "languages",
        badge: "Confidence",
        title: "Ask when you are unsure and observe tone",
        body:
          "You do not need to guess perfectly. Watch how people phrase things around you, ask practical follow-ups, and let your understanding grow through repetition.",
      },
    ],
  },
];

export const livingCultureMisunderstandings: LivingCultureMisunderstandingCard[] = [
  {
    chip: "Directness",
    title: "Direct does not automatically mean unfriendly",
    body: "A person can sound plain, efficient, or firm without meaning disrespect. Start by reading the message, not just the tone.",
  },
  {
    chip: "Tone",
    title: "Short answers are often just short answers",
    body: "Brevity can simply mean the person thinks the matter is simple. It is not always a sign they are irritated, cold, or trying to push you away.",
  },
  {
    chip: "Planning",
    title: "Planning ahead usually signals structure, not social distance",
    body: "A calendar-based invitation often reflects busy schedules and clarity, not a lack of warmth or spontaneity as a person.",
  },
  {
    chip: "Clarity",
    title: "Being clear can land better than sounding delicately vague",
    body: "In many settings, people appreciate knowing what you mean, what you need, or whether you can make it instead of decoding hints.",
  },
  {
    chip: "Public space",
    title: "Shared-space habits are often about practicality, not coldness",
    body: "Bike-lane discipline, queues, building rules, and noise awareness usually exist to keep everyday systems working, not to make life feel stiff.",
  },
  {
    chip: "Questions",
    title: "Straightforward questions are often meant to save time",
    body: "Questions about plans, work, housing, or logistics may come earlier and more directly than you expect. That does not automatically make them intrusive.",
  },
  {
    chip: "Confidence",
    title: "Comfort usually grows through repetition, not through getting everything right straight away",
    body: "You do not need to get every signal right immediately. Most people settle in by seeing the same patterns enough times that they stop feeling personal.",
  },
];

export const livingCultureTips: LivingCultureTips = {
  startHere: {
    badge: "First habit",
    text: "Assume neutral intent first. That single mindset shift makes the rest of this page easier to use.",
  },
  firstWeeks: {
    eyebrow: "What helps most",
    title: "Look for the pattern, not the one awkward moment",
    body:
      "A single short answer, late reply, or efficient conversation can feel bigger than it is when you are new. Most of the time, what matters is whether the same pattern keeps repeating, not whether one moment felt different from home.",
  },
  reassurance: {
    eyebrow: "Reassurance",
    title: "You do not need a new personality to adapt well",
    body:
      "Most people adapt by observing, asking, and letting repetition do the work. You do not need perfect Dutch, perfect timing, or a new personality. A bit of punctuality, clarity, and curiosity goes a long way.",
    linksIntro: "If you are still in your first months, pair this page with",
    links: [
      { href: "/netherlands/first-30-days-netherlands/", label: "First 30 Days" },
      { href: "/netherlands/first-90-days-netherlands/", label: "First 90 Days" },
    ],
  },
};

export const livingCultureFaq: LivingCultureFaqItem[] = [
  {
    id: "rude-or-direct",
    question: "Are Dutch people rude or just direct?",
    answer:
      "Often what newcomers read as rudeness is really just less extra polite language. That does not mean tone never matters, but short and clear replies are often normal rather than hostile. If you are unsure, look at the pattern over time rather than one short sentence.",
  },
  {
    id: "respond-direct",
    question: "How should I respond to direct communication?",
    answer:
      "Stay calm, answer the practical point, and ask a short follow-up if you need clarification. You usually do not need to mirror bluntness. Clear, polite, and specific works well in most situations.",
  },
  {
    id: "punctuality",
    question: "Is punctuality important in the Netherlands?",
    answer:
      "Usually yes. Arriving on time or sending a message if you are delayed is a basic reliability signal in many work, appointment, and social contexts. You do not need military precision, but unexplained lateness tends to stand out.",
  },
  {
    id: "need-dutch",
    question: "Do I need to speak Dutch to fit in socially?",
    answer:
      "Not always, especially in international settings. But a few Dutch phrases, some listening effort, and cultural awareness often help more than perfect fluency. Feeling comfortable socially usually depends more on tone, clarity, and reliability than on speaking flawless Dutch.",
  },
  {
    id: "mistakes",
    question: "What are common mistakes newcomers make socially?",
    answer:
      "Common ones are taking directness personally, assuming short replies mean dislike, arriving late without warning, and expecting vague social signals to be interpreted the same way they might be back home. Most of these get easier once you ask more directly and over-interpret less.",
  },
  {
    id: "meetings",
    question: "Are work meetings in the Netherlands more direct?",
    answer:
      "Often yes. People may state opinions and disagreement more openly, but that usually sits alongside a collaborative desire to make the decision clearer. Direct meetings are not necessarily unfriendly meetings.",
  },
  {
    id: "bring-something",
    question: "Should I bring something when invited to someone’s home?",
    answer:
      "A small gesture is often appreciated: flowers, something edible, or another simple thank-you. It does not need to be elaborate. The main point is considerate effort, not impressing anyone.",
  },
  {
    id: "adapt-personality",
    question: "How do I adapt without changing my personality?",
    answer:
      "Focus on understanding expectations, not performing a new identity. A bit more clarity, punctuality, and confidence usually matters more than copying someone else’s tone. The goal is to feel less confused, not less like yourself.",
  },
];

export const livingCultureReferences: LivingCultureReferences = {
  title: "Official sources & useful references",
  intro:
    "There is no single official etiquette handbook. Use these sources for wider context on settling in, work-life norms, and official newcomer guidance, then check with your municipality, employer, school, or landlord when local rules matter.",
  links: [
    { href: "https://www.government.nl/topics/integration-in-the-netherlands", label: "Government.nl — integration topics and official context →" },
    { href: "https://www.rijksoverheid.nl/en", label: "Rijksoverheid — Dutch government English portal →" },
    { href: "https://www.netherlandsworldwide.nl/", label: "Netherlands Worldwide — official information for internationals abroad and after arrival →" },
    { href: "https://www.government.nl/topics/working-hours", label: "Government.nl — working hours and leave basics →" },
  ],
  footerIntro: "Back to",
  footerLinks: [
    { href: LIVING_SURVIVAL_GUIDE_PATH, label: "Netherlands Survival Guide" },
    { href: LIVING_DAILY_LIFE_PATH, label: "Daily Life Basics" },
  ],
};

export const livingCultureRelatedTools: LivingCultureRelatedTools = {
  sectionTitle: "Helpful planning tools and related guides",
  sectionSubtitle:
    "Use these guides and tools when culture overlaps with work, money, choosing a city, or everyday routines.",
  intro:
    "These links help when culture connects to bigger decisions. Compare cities if day-to-day life matters to your choice, compare job offers if team style matters, and keep the Living guides nearby for the practical side of everyday life.",
  cards: [
    {
      title: "Netherlands Survival Guide",
      description: "A useful starting point for first-week priorities, quick links, and everyday basics.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open Survival Guide",
      iconKey: "mapPinned",
    },
    {
      title: "Daily Life Basics in the Netherlands",
      description: "Practical help for groceries, errands, payments, parcels, and everyday routines.",
      href: LIVING_DAILY_LIFE_PATH,
      ctaLabel: "Open Daily Life Basics",
      iconKey: "shoppingBag",
    },
    {
      title: "Essential Apps for Life in the Netherlands",
      description: "Transport, Tikkie, supermarket, delivery, and banking apps in a practical order.",
      href: LIVING_ESSENTIAL_APPS_PATH,
      ctaLabel: "See the app stack",
      iconKey: "sparkles",
    },
    {
      title: "Getting Around in the Netherlands",
      description: "Bikes, public transport, tapping in and out, and how travel works in daily life.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read transport guide",
      iconKey: "trainFront",
    },
    {
      title: "Job offer comparison tool",
      description: "Compare roles by work-life balance, commuting, and pay in one place.",
      href: "/netherlands/work/tools/job-offer-comparison/",
      ctaLabel: "Compare offers",
      iconKey: "building2",
    },
    {
      title: "Cost of living calculator",
      description: "Check whether your budget fits the city and lifestyle you have in mind.",
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      ctaLabel: "Run the numbers",
      iconKey: "wallet",
    },
    {
      title: "City comparison tool",
      description: "Compare Dutch cities when work style, pace, and daily life differ by location.",
      href: "/netherlands/tools/city-comparison/",
      ctaLabel: "Compare cities",
      iconKey: "mapPinned",
    },
  ],
  roundOutEyebrow: "Round out the context",
  roundOutBody: "Pair this page with",
  roundOutLinks: [
    { href: "/netherlands/work/work-culture-netherlands/", label: "Work culture in the Netherlands" },
    { href: LIVING_DAILY_LIFE_PATH, label: "Daily Life Basics" },
    { href: LIVING_GETTING_AROUND_PATH, label: "Getting Around" },
  ],
};
