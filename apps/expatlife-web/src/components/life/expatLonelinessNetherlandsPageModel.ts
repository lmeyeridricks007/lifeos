export const EXPAT_LONELINESS_PATH = "/netherlands/life/expat-loneliness-netherlands/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const MAKING_DUTCH_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const VOLUNTEERING_PATH = "/netherlands/life/volunteering-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type ConnectionMethodRow = {
  method: string;
  ease: string;
  cost: string;
  longTermFriendships: string;
  examples: string;
};

export type CommunityOrg = {
  name: string;
  type: string;
  audience: string;
  note: string;
  website?: string;
};

export type RelocationStage = {
  stage: string;
  title: string;
  detail: string;
};

export type LifeStageCard = {
  stage: string;
  challenges: string;
  tip: string;
};

export type SuccessStory = {
  profile: string;
  city: string;
  route: string;
  outcome: string;
  lesson: string;
};

export type SocialResetWeek = {
  title: string;
  focus: string;
  actions: readonly string[];
};

export type ResourceCard = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon" | "external";
};

export type ScenarioRow = {
  situation: string;
  approach: string;
  firstStep: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "expat-loneliness-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const expatLonelinessNetherlandsPage = {
  slug: "expat-loneliness-netherlands",
  path: EXPAT_LONELINESS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: COMMUNITY_BASICS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2027-01-17",
  seo: {
    title: "Expat Loneliness in the Netherlands | How to Build a New Life",
    description:
      "Moving to the Netherlands can feel lonely at first. Learn why it happens, how to overcome it, where to meet people and how to build a fulfilling social life as an expat.",
    keywords: [
      "expat loneliness netherlands",
      "lonely in the netherlands",
      "expat life netherlands",
      "moving abroad loneliness",
      "making friends netherlands",
      "homesick netherlands",
      "culture shock netherlands",
      "expat community netherlands",
      "mental wellbeing expats",
      "social life netherlands",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Community & Wellbeing",
    pageTitle: "Expat Loneliness in the Netherlands",
    subtitle:
      "Feeling lonely after moving abroad is more common than many people expect. Here's how to understand it, rebuild your social life and feel more at home in the Netherlands.",
    primaryCta: { label: "Start Building Your Community", href: "#daily-habits" },
    secondaryCta: { label: "Find Ways to Meet People", href: "#best-ways" },
    chips: ["You're not alone", "Culture shock", "Meet people", "Daily habits", "30-day reset"],
    disclaimer:
      "Practical wellbeing orientation only — not medical, psychiatric or counselling advice. If loneliness persists or affects daily life, speak with a GP or qualified professional. In immediate danger, contact emergency services.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of a hopeful newcomer joining a small multicultural walking group on a brick Amsterdam canal path at golden hour — bicycles against the railing, Dutch gabled houses across the water, warm conversation and community energy.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-it-happens", label: "Why it happens" },
    { href: "#relocation-stages", label: "Stages" },
    { href: "#dutch-friendship-culture", label: "Friendship culture" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#best-ways", label: "Best ways" },
    { href: "#communities", label: "Communities" },
    { href: "#daily-habits", label: "Daily habits" },
    { href: "#friends-vs-partner", label: "Friends & dating" },
    { href: "#homesickness", label: "Homesickness" },
    { href: "#life-stages", label: "Life stages" },
    { href: "#seek-support", label: "Support" },
    { href: "#success-stories", label: "Stories" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#social-reset", label: "30-day reset" },
    { href: "#resources", label: "Resources" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#wellbeing-hub", label: "Wellbeing hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board — loneliness normalised with three first moves: pick one weekly activity, greet neighbours, schedule one coffee invite, canal café scene in the background.",
      "Loneliness after moving is common — start with one weekly route, one neighbour ritual and one concrete invite."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot — You're Not Alone, Community Exists, Friendships Take Time, Consistency Matters, Learn Dutch and Stay Active with practical notes for newcomers.",
      "Scan these six signals before blaming yourself — loneliness here is often structural, not personal failure."
    ),
    whyItHappens: visual(
      "why-it-happens",
      "Premium cause board — leaving networks, starting over, Dutch social customs, remote work isolation, language gaps, admin stress and winter weather with hopeful reframes.",
      "Name the drivers — then match each one with a practical habit or community route."
    ),
    relocationStages: visual(
      "relocation-stages",
      "Premium arc timeline — Arrival excitement → Culture shock → Frustration → Adjustment → Confidence → Feeling at home with uneven progress notes.",
      "Everyone progresses differently — revisit this arc when a hard week makes you think you are stuck forever."
    ),
    dutchFriendshipCulture: visual(
      "dutch-friendship-culture",
      "Premium culture map — activity-first friendships, planned calendars, borrels, small circles and reliability at the centre, with a link path to Making Dutch Friends.",
      "Dutch friendships grow through routines — join recurring activities rather than waiting for spontaneous invitations."
    ),
    remoteWork: visual(
      "remote-work",
      "Premium remote-work antidote board — WFH isolation, coworking days, café work blocks, networking events and Meetup evenings with weekly schedule slots.",
      "If you work from home, design three out-of-home contact points each week — coworking, café or Meetup."
    ),
    bestWays: visual(
      "best-ways",
      "Premium ranked connection table — sports clubs, volunteering, Meetups, language cafés, neighbourhood groups, board games, photography, coworking, networking and community events scored by ease and friendship payoff.",
      "Combine one high-repeat weekly method with one wider channel — give each route four to six weeks."
    ),
    communities: visual(
      "communities",
      "Premium community directory — InterNations, Meetup, AIC International, NKBV, Volunteer.nl, language cafés, libraries, buurthuizen, sports clubs and university communities with audience notes.",
      "Bookmark two organisations in your city this week — one orientation network and one local recurring group."
    ),
    dailyHabits: visual(
      "daily-habits",
      "Premium daily habits checklist board — morning walk, neighbour greeting, language streak, weekly club, one invite and weekend outdoor plan beside a Dutch canal skyline.",
      "Small daily actions compound — treat social habits like gym sessions you protect on the calendar."
    ),
    friendsVsPartner: visual(
      "friends-vs-partner",
      "Premium two-track diagram — friendship routes on one side, dating routes on the other, with a balanced wellbeing centre and links to Dating and Making Dutch Friends guides.",
      "A partner helps — a friendship network still matters for long-term belonging and resilience."
    ),
    homesickness: visual(
      "homesickness",
      "Premium homesickness toolkit — video calls with boundaries, local rituals, familiar foods, outdoor daylight and one new place each month mapped against Dutch seasons.",
      "Homesickness spikes are normal — keep home ties while planting local rituals that make this place feel yours."
    ),
    lifeStages: visual(
      "life-stages",
      "Premium life-stage cards — Students, Professionals, Families, Entrepreneurs, Digital Nomads and Retirees with tailored challenges and one tip each.",
      "Match your social strategy to your life stage — a parent needs different channels than a digital nomad."
    ),
    seekSupport: visual(
      "seek-support",
      "Premium support routes board — GP conversation, municipal wellbeing pages, peer groups, trusted friends and emergency contacts framed calmly with 113.nl and emergency services noted carefully.",
      "Practical community tips help many people — lasting distress deserves professional support without stigma."
    ),
    successStories: visual(
      "success-stories",
      "Premium five-story pattern cards — sport club, volunteering, taal café, coworking and neighbourhood routes with months-to-belonging timelines.",
      "Most turnarounds share one pattern — consistency in a weekly activity for several months."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — waiting for invites, only dating apps, quitting at week three, expat-only bubble, comparing timelines and ignoring winter with practical swaps.",
      "Most loneliness friction is strategy — adjust channels before concluding you will never belong here."
    ),
    socialReset: visual(
      "social-reset",
      "Premium four-week social reset calendar — Week 1 orientation, Week 2 first attendance, Week 3 follow-up invites, Week 4 rhythm review with action checklists.",
      "Use the 30-day reset as a structured experiment — track attendance, not instant deep friendships."
    ),
    resources: visual(
      "resources",
      "Premium resource shelf — Community Basics, Making Dutch Friends, Dating, language routes, volunteering, city guides and official wellbeing links with status labels.",
      "Pick one internal guide and one official source — avoid drowning in twenty tabs this week."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — Is loneliness normal?, How long does it last?, Best first steps?, Remote work tips?, When to seek help? with concise reassuring answers.",
      "Confirm local group and support details — offerings and wait times change by city and season."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide route map — Making Dutch Friends, Dating, Community Basics, Dutch Culture, Social Norms, Learning Dutch and Volunteering.",
      "Loneliness work sits inside wider community building — friendship and culture guides reinforce each other."
    ),
    wellbeingHub: visual(
      "wellbeing-hub",
      "Premium wellbeing hub grid — community routes, friendship skills, language practice, outdoor daylight habits and professional support pathways.",
      "Treat wellbeing as a hub of habits — social contact, movement, language and help-seeking when needed."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next steps — Making Dutch Friends, Community Basics, Dating, Dutch Social Norms, cities and volunteering with when-to-use labels.",
      "Pick the card matching whether you need friendship tactics, culture context or city comparison first."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "First three moves",
      items: [
        "Normalise the feeling — many newcomers feel lonely in months one to six.",
        "Pick one weekly recurring activity you would enjoy even alone.",
        "Greet neighbours twice this week and learn one building name.",
        "Send one concrete coffee or walk invite with a day and time.",
      ],
    },
    snapshot: {
      title: "How to use this snapshot",
      items: [
        "Read all six cards before changing strategy — loneliness has multiple drivers.",
        "Treat signals as patterns, not verdicts about your personality.",
        "Choose two cards to act on this month.",
        "Revisit after your 30-day social reset.",
      ],
    },
    whyItHappens: {
      title: "Name the cause, pick a response",
      items: [
        "Left your network behind → rebuild through weekly groups, not only chat apps.",
        "Remote work isolation → book coworking or café days on the calendar.",
        "Language friction → start with bilingual Meetups and taal cafés.",
        "Winter blues → protect daylight walks and indoor clubs.",
      ],
    },
    relocationStages: {
      title: "Use the arc kindly",
      items: [
        "Excitement fading is normal — it is not proof you made the wrong move.",
        "Frustration often peaks before adjustment — keep one weekly habit.",
        "Confidence grows after familiar faces recognise you.",
        "Feeling at home can take a year or more — progress is uneven.",
      ],
    },
    dutchFriendshipCulture: {
      title: "Friendship culture reminders",
      items: [
        "Activity-first beats spontaneous street friendships.",
        "Propose concrete dates — calendars fill early.",
        "Reliability signals you are worth investing in.",
        "Read Making Dutch Friends for ranked meeting routes.",
      ],
    },
    remoteWork: {
      title: "Remote-work antidotes",
      items: [
        "Leave home for work at least two days weekly if possible.",
        "Join a coworking community lunch or Friday borrel.",
        "Use cafés for focused blocks — greet regulars briefly.",
        "Add one evening Meetup so all contact is not work-only.",
      ],
    },
    bestWays: {
      title: "Combine methods",
      items: [
        "High-repeat: sports, volunteering, language café, hobby club.",
        "Wider reach: Meetup, InterNations, neighbourhood events.",
        "Best outcomes often blend one of each.",
        "Give each route four to six weeks before switching.",
      ],
    },
    communities: {
      title: "Community picking tips",
      items: [
        "Use InterNations or Meetup for month-one orientation.",
        "Add NKBV, sports clubs or Volunteer.nl for local roots.",
        "Libraries and buurthuizen are underrated low-cost options.",
        "University communities help students and young professionals.",
      ],
    },
    dailyHabits: {
      title: "Protect the checklist",
      items: [
        "Schedule social habits like meetings — they get skipped otherwise.",
        "Tiny neighbour hellos count — they build recognition.",
        "Track streaks for language and weekly attendance.",
        "Rest days matter — burnout makes loneliness worse.",
      ],
    },
    friendsVsPartner: {
      title: "Balance both tracks",
      items: [
        "Dating can reduce loneliness short-term — friendship still matters.",
        "Do not put all belonging pressure on one relationship.",
        "Keep one non-dating weekly activity going.",
        "See Dating and Making Dutch Friends for route detail.",
      ],
    },
    homesickness: {
      title: "Homesickness toolkit",
      items: [
        "Schedule home calls — then also schedule local plans the same week.",
        "Recreate one comforting ritual with Dutch ingredients or places.",
        "Seek daylight outdoors even on grey days.",
        "Visit one new neighbourhood café or park monthly.",
      ],
    },
    lifeStages: {
      title: "Stage-specific next steps",
      items: [
        "Students: associations and campus sports intros.",
        "Professionals: one club outside work plus coworking.",
        "Families: school gates and kids' sport sidelines.",
        "Nomads & retirees: daytime walking clubs and libraries.",
      ],
    },
    seekSupport: {
      title: "When community tips are not enough",
      items: [
        "Talk to your huisarts (GP) about persistent low mood or isolation.",
        "Use municipal wellbeing pages for local programmes.",
        "Tell one trusted person how you are really feeling.",
        "In immediate danger, contact emergency services; for suicide prevention support in the Netherlands see 113.nl.",
      ],
    },
    successStories: {
      title: "Common turnaround patterns",
      items: [
        "Most friendships formed after 8–12 weeks of the same activity.",
        "Coworking reduced isolation before deep friendships arrived.",
        "Language cafés often become weekly friend groups.",
        "Neighbour rituals for months preceded the first home invite.",
      ],
    },
    mistakes: {
      title: "Swap these habits",
      items: [
        "Replace waiting with one concrete invite per week.",
        "Add a friendship route if you only use dating apps.",
        "Stay six sessions before quitting a group.",
        "Balance expat events with one local weekly activity.",
      ],
    },
    socialReset: {
      title: "30-day reset discipline",
      items: [
        "Week 1: research and choose one primary route.",
        "Week 2: attend twice and introduce yourself.",
        "Week 3: follow up with one coffee or walk invite.",
        "Week 4: review what felt sustainable — keep that rhythm.",
      ],
    },
    resources: {
      title: "Resource triage",
      items: [
        "Start with Community Basics for integration overview.",
        "Use Making Dutch Friends for ranked meeting methods.",
        "Check official wellbeing and municipal pages for local help.",
        "Bookmark 113.nl only as a known support pathway — not a daily habit link.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Making Dutch Friends for tactics.",
        "Dutch Social Norms helps decode direct communication.",
        "Seek a GP if loneliness affects sleep, work or daily function.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Expat Loneliness (this page) → understand and reset",
        "Making Dutch Friends → practical meeting routes",
        "Community Basics → neighbours, clubs, integration",
        "Dutch Social Norms → etiquette and expectations",
      ],
    },
    wellbeingHub: {
      title: "Wellbeing hub focus",
      items: [
        "Social contact + outdoor daylight + sleep basics.",
        "Language practice as a belonging tool, not only a skill.",
        "Professional help is a strength when distress persists.",
        "City choice and housing affect daily social opportunity.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need friendship tactics → Making Dutch Friends",
        "Need broader integration → Community Basics",
        "Need dating context → Dating in the Netherlands",
        "Need city comparison → Cities hub",
      ],
    },
  },
  quickAnswer: {
    heading: "Is Expat Loneliness Normal in the Netherlands?",
    summary:
      "Yes. Many people feel lonely after moving abroad — even to a safe, organised country like the Netherlands. You leave familiar networks behind, Dutch friendships often grow slowly through activities, and remote work or winter weather can intensify isolation. The practical path is to rebuild through recurring groups, small daily habits and patience with the relocation arc — seeking professional support if loneliness persists or affects daily life.",
    bullets: [
      "Loneliness after relocation is common and does not mean you failed at living abroad.",
      "Dutch social life is often activity-first — clubs and volunteering create repeat contact.",
      "Remote work and grey winters can amplify isolation without a deliberate social plan.",
      "Consistency for weeks beats one big networking night.",
      "Talk to a GP or qualified professional if low mood or isolation does not ease.",
    ],
    note:
      "Start with one weekly activity plus the 30-day social reset below — track attendance and one follow-up invite, not instant deep friendships.",
  },
  introParagraphs: [
    "Moving to the Netherlands can feel exciting and disorienting at the same time. You may love the bikes, the cafés and the career opportunity — and still feel a quiet emptiness in the evenings. That gap between a functioning daily life and a felt sense of belonging is what many expats mean by loneliness.",
    "This guide treats loneliness as a normal relocation experience, not a personal flaw. You will find why it happens, how friendship culture works here, where to meet people, daily habits that help, a 30-day social reset and when to seek extra support. It is practical wellbeing orientation — not a diagnosis or treatment plan.",
  ],
  orientationFlowSteps: [
    "Pick one recurring weekly activity you genuinely enjoy (sport, language café, volunteer shift or hobby group).",
    "Add two light contact points: neighbour greetings and one concrete coffee or walk invite.",
    "Protect the rhythm for four weeks — then review what felt sustainable before adding more channels.",
  ],
  snapshotSignals: [
    { label: "Common", value: "You're not alone", note: "Many newcomers feel this in months 1–6" },
    { label: "Pace", value: "Friendships take time", note: "Depth often grows months 3–6" },
    { label: "Method", value: "Activity-first", note: "Clubs beat one-off parties" },
    { label: "Habit", value: "Consistency", note: "Weekly rhythm rebuilds belonging" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "You're Not Alone",
      body: "Feeling lonely after moving is extremely common — even among people who look settled on social media. Naming it is the first step.",
    },
    {
      title: "Community Exists",
      body: "Sports clubs, Meetups, language cafés, buurthuizen and volunteer teams welcome newcomers who show up regularly.",
    },
    {
      title: "Friendships Take Time",
      body: "Dutch circles often form through months of shared routines. Activity partners come first; deeper friendship follows.",
    },
    {
      title: "Consistency Matters",
      body: "Six visits to one group beat six different events. Familiar faces are the foundation of belonging.",
    },
    {
      title: "Learn Dutch",
      body: "English works in many cities — Dutch effort still opens neighbourhood life and signals long-term intent.",
    },
    {
      title: "Stay Active",
      body: "Movement, daylight and recurring clubs reduce isolation even before you have close friends.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Read all six cards before changing strategy — loneliness usually has more than one driver.",
    "Choose two signals to act on this month (for example Consistency + Stay Active).",
    "Treat signals as patterns, not verdicts about your personality.",
    "Revisit this snapshot after your 30-day social reset.",
  ],
  whyItHappens: {
    heading: "Why Expats Feel Lonely in the Netherlands",
    paragraphs: [
      "Loneliness abroad rarely has a single cause. You leave the people who knew your history, start from zero in a new city, and meet a culture where friendships grow through planned activities rather than spontaneous hanging out. Add remote work, language friction, municipal admin stress and a grey winter — and evenings can feel long even when life looks fine on paper.",
      "Understanding the drivers helps you respond with strategy instead of self-blame. You do not need to fix everything at once. Match one cause to one habit this month.",
    ],
    tipCards: [
      {
        title: "Leaving networks behind",
        body: "Your old friends, family and colleagues are still elsewhere. Video calls help — they do not replace local face-to-face rhythm.",
      },
      {
        title: "Starting over socially",
        body: "Nobody nearby shares your inside jokes yet. Shared activities create new common ground faster than forced small talk.",
      },
      {
        title: "Dutch social customs",
        body: "Calendars fill early and circles can seem closed at first. Recurring clubs are the usual entry point — not random bar nights.",
      },
      {
        title: "Remote work isolation",
        body: "Working from a quiet apartment removes the incidental chats of an office. Design out-of-home contact on purpose.",
      },
      {
        title: "Language barriers",
        body: "English gets you far in cities — deeper local groups may still feel harder until Dutch confidence grows.",
      },
      {
        title: "Admin and settling stress",
        body: "BSN, housing, insurance and school logistics drain energy that would otherwise go to social plans.",
      },
      {
        title: "Winter weather",
        body: "Short daylight and rain reduce terrace life. Indoor clubs, libraries and daytime walks matter more from November to March.",
      },
    ] satisfies TipCard[],
    responseTips: [
      "Left your network → rebuild through one weekly group, not only chat apps.",
      "Remote work isolation → book coworking or café days on the calendar.",
      "Language friction → start with bilingual Meetups and taal cafés.",
      "Winter blues → protect daylight walks and indoor clubs from November.",
      "Admin stress → finish one admin task, then protect a social plan the same week.",
    ],
    scenarios: [
      {
        situation: "New arrival, WFH every day",
        approach: "Design three out-of-home contact points before friendships feel deep",
        firstStep: "Book two coworking days and one evening Meetup this week",
      },
      {
        situation: "Months in, still no invitations",
        approach: "Assume calendars are full — initiate with concrete plans",
        firstStep: "Join one recurring club and send one coffee invite with day and time",
      },
      {
        situation: "Homesick after festive season",
        approach: "Keep home calls and plant one local winter ritual",
        firstStep: "Add an indoor walking group or library programme for January",
      },
      {
        situation: "Admin overwhelm blocking social plans",
        approach: "Separate settling tasks from belonging habits",
        firstStep: "Finish one registration task, then attend your weekly group anyway",
      },
    ] satisfies ScenarioRow[],
  },
  relocationStages: {
    heading: "The Emotional Arc of Relocating",
    paragraphs: [
      "Many newcomers recognise a rough emotional sequence after moving. It is a pattern, not a medical model — and people skip stages, revisit them or move at different speeds.",
      "If you are in frustration while a colleague seems confident, that often reflects timing, not character. Keep one weekly social habit through the harder weeks.",
    ],
    stages: [
      {
        stage: "1",
        title: "Arrival excitement",
        detail: "Novelty, exploration and adrenaline. Everything feels possible — including underestimating how long belonging takes.",
      },
      {
        stage: "2",
        title: "Culture shock",
        detail: "Small differences in communication, humour and planning start to feel tiring. Homesickness may spike.",
      },
      {
        stage: "3",
        title: "Frustration",
        detail: "Admin, weather or slow friendships can feel personal. This stage is common — and often temporary with support and routine.",
      },
      {
        stage: "4",
        title: "Adjustment",
        detail: "You recognise faces at your club, café or street. Practical life gets easier; social life starts to have a rhythm.",
      },
      {
        stage: "5",
        title: "Confidence",
        detail: "You initiate plans, navigate Dutch directness more calmly and feel less like a perpetual guest.",
      },
      {
        stage: "6",
        title: "Feeling at home",
        detail: "Belonging becomes quieter and more secure — not perfect, but rooted. Many people need a year or more to reach this.",
      },
    ] satisfies RelocationStage[],
    note: "Everyone progresses differently. A hard month does not erase progress — return to your weekly habit and ask for help if distress stays intense.",
    stageTips: [
      "Excitement fading is normal — it is not proof you made the wrong move.",
      "Frustration often peaks before adjustment — keep one weekly habit.",
      "Confidence grows after familiar faces recognise you at your club or café.",
      "Feeling at home can take a year or more — progress is uneven by design.",
    ],
  },
  dutchFriendshipCulture: {
    heading: "How Dutch Friendship Culture Affects Loneliness",
    paragraphs: [
      "Dutch adult friendships often grow through sports clubs, hobby associations, volunteer shifts, parent networks and planned borrels — not through endless spontaneous evenings. People may be warm and helpful while still protecting full calendars.",
      "That structure can feel cold if you expect instant intimacy. It can also be hopeful: once you join a recurring group, the path to familiarity is clear. Reliability matters more than being the most outgoing person in the room.",
    ],
    points: [
      "Shared activities create the repeat contact friendships need.",
      "Propose concrete dates and venues — vague 'sometime soon' rarely works.",
      "Small circles deepen slowly; do not read early reserve as rejection.",
      "English helps in cities; Dutch effort opens neighbourhood and local-only groups.",
      "Balance expat orientation events with at least one local weekly route.",
    ],
    practicalTips: [
      "Propose a day, time and place — vague 'sometime soon' rarely becomes a plan.",
      "Show up to the same group 4–6 times before deciding it is not for you.",
      "Ask organisers how newcomers usually join — many clubs expect that question.",
      "Use English freely in cities, and add simple Dutch greetings with neighbours.",
      "Keep one local route even if you also enjoy expat orientation events.",
    ],
    relatedGuide: {
      label: "Making Dutch Friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      description: "Ranked ways to meet people, clubs, volunteering and neighbourhood tactics.",
      status: "live" as const,
    } satisfies LifeGuideLink,
  },
  remoteWork: {
    heading: "Remote Work and Loneliness",
    paragraphs: [
      "Remote and hybrid work are common for internationals in the Netherlands — and they remove the accidental social contact of an office. Without a deliberate plan, weekdays can become silent loops between laptop and kitchen.",
      "You do not need to become an extrovert. You need designed contact points: coworking days, café work blocks, professional Meetups and one non-work weekly activity so belonging is not only transactional.",
    ],
    tipCards: [
      {
        title: "WFH boundaries",
        body: "Finish work at a set time and leave the apartment for a short walk — even 20 minutes breaks isolation loops.",
      },
      {
        title: "Coworking",
        body: "Book two fixed coworking days. Community lunches and Friday borrels often matter more than the desk.",
      },
      {
        title: "Cafés as soft offices",
        body: "Become a regular at one neighbourhood café. Brief greetings with staff and regulars build light belonging.",
      },
      {
        title: "Professional networking",
        body: "Industry Meetups and alumni events create conversation starters — follow up with one coffee within 48 hours.",
      },
      {
        title: "Evening Meetups",
        body: "Add one hobby Meetup so all human contact is not career-shaped. Introverts often prefer activity-first groups.",
      },
    ] satisfies TipCard[],
    weeklyContactPlan: [
      "Tue — coworking half-day or shared office if available",
      "Thu — café work block in your neighbourhood",
      "Sat or weekday evening — Meetup, sport or hobby group",
      "Daily — short daylight walk after logging off",
      "Once a week — one concrete coffee or walk invite",
    ],
    scenarios: [
      {
        situation: "Fully remote with no local colleagues",
        approach: "Treat social contact like meetings you schedule",
        firstStep: "Block two out-of-home work days and one hobby Meetup",
      },
      {
        situation: "Hybrid office but lonely evenings",
        approach: "Office chats help — evenings still need a non-work route",
        firstStep: "Join one sport or language café after work",
      },
      {
        situation: "Networking feels forced",
        approach: "Prefer activity-first groups over mixer nights",
        firstStep: "Pick board games, photography or running over large mixers",
      },
    ] satisfies ScenarioRow[],
  },
  bestWays: {
    heading: "Best Ways to Meet People When You Feel Lonely",
    intro:
      "Compare methods by ease, cost and long-term friendship potential. Loneliness improves most when at least one route repeats weekly.",
    connectionIdeas: [
      {
        method: "Sports clubs",
        ease: "Medium",
        cost: "Medium",
        longTermFriendships: "High",
        examples: "Football, padel, running, hockey, rowing — ask about proefles trials",
      },
      {
        method: "Volunteering",
        ease: "Medium",
        cost: "Free",
        longTermFriendships: "High",
        examples: "Food banks, libraries, animal shelters, festival crews with weekly shifts",
      },
      {
        method: "Meetups",
        ease: "High",
        cost: "Low",
        longTermFriendships: "Medium",
        examples: "Hiking, board games, language exchange, photography walks",
      },
      {
        method: "Language cafés",
        ease: "High",
        cost: "Free–low",
        longTermFriendships: "Medium–high",
        examples: "Library TaalCafés, tandem evenings, municipal language tables",
      },
      {
        method: "Neighbourhood groups",
        ease: "Medium",
        cost: "Free",
        longTermFriendships: "Medium",
        examples: "Building WhatsApp, buurt BBQ, community gardens, street events",
      },
      {
        method: "Board games",
        ease: "High",
        cost: "Low",
        longTermFriendships: "Medium–high",
        examples: "Board-game cafés and weekly open-table Meetups",
      },
      {
        method: "Photography",
        ease: "Medium",
        cost: "Low",
        longTermFriendships: "Medium",
        examples: "City photo walks — shared focus reduces awkward small talk",
      },
      {
        method: "Coworking",
        ease: "Medium",
        cost: "Medium",
        longTermFriendships: "Medium",
        examples: "Community desks, member lunches, after-work drinks",
      },
      {
        method: "Professional networking",
        ease: "Medium",
        cost: "Low–medium",
        longTermFriendships: "Medium",
        examples: "Industry Meetups, alumni chapters, LinkedIn local events",
      },
      {
        method: "Community events",
        ease: "High",
        cost: "Free–low",
        longTermFriendships: "Low–medium",
        examples: "Markets, King's Day streets, library talks — best paired with a weekly club",
      },
    ] satisfies ConnectionMethodRow[],
    selectionTips: [
      "Pick one high-repeat weekly method (sport, volunteering or language café) as your primary route.",
      "Add one wider channel (Meetup or community event) for variety — do not replace the weekly route.",
      "Give each primary route four to six weeks before switching.",
      "Introverts often prefer activity-first groups over large networking mixers.",
      "Budget for club fees — free routes (libraries, volunteering) work when money is tight.",
    ],
  },
  communities: {
    heading: "Communities and Organisations That Help",
    intro:
      "These are real, publicly known routes many internationals use. Always verify current events, fees and language on the organisation’s own site.",
    usageTips: [
      "Bookmark two organisations this week — one orientation network and one local recurring group.",
      "Verify current events, fees and language on each organisation's own website.",
      "Repeat the same Meetup or club for depth — sampling ten groups keeps you a stranger everywhere.",
      "Ask organisers how newcomers usually join and whether a trial session exists.",
      "Pair InterNations-style orientation with a neighbourhood or sport route for longer roots.",
    ],
    orgs: [
      {
        name: "InterNations",
        type: "Expat network",
        audience: "International professionals",
        note: "Large welcome events and interest groups — strong for orientation; pair with a local weekly activity.",
        website: "https://www.internations.org/",
      },
      {
        name: "Meetup",
        type: "Interest groups",
        audience: "Anyone by city and hobby",
        note: "Fast way to sample hiking, language, tech and social groups — repeat the same group for depth.",
        website: "https://www.meetup.com/find/?location=nl--netherlands",
      },
      {
        name: "AIC International (Amsterdam)",
        type: "International centre",
        audience: "Amsterdam-area newcomers",
        note: "Practical settling support and community programming for internationals.",
        website: "https://www.iamsterdam.com/en/live-work-study/newcomers",
      },
      {
        name: "NKBV",
        type: "Outdoor association",
        audience: "Hikers and outdoor enthusiasts",
        note: "Sections nationwide — training, walks and trips create recurring outdoor company.",
        website: "https://www.nkbv.nl/",
      },
      {
        name: "Volunteer.nl / Vrijwilligerswerk.nl",
        type: "Volunteer portal",
        audience: "Anyone seeking weekly shifts",
        note: "Search by city and cause — weekly roles build familiar faces faster than one-off days.",
        website: "https://www.vrijwilligerswerk.nl/",
      },
      {
        name: "Language cafés",
        type: "Language practice",
        audience: "Learners and locals",
        note: "Library and Meetup taal cafés offer structured conversation with built-in return dates.",
        website: "https://www.ob.nl/",
      },
      {
        name: "Local libraries",
        type: "Public community hub",
        audience: "Residents of all ages",
        note: "Quiet work space, talks, children's hours and language programmes — low-pressure belonging.",
        website: "https://www.ob.nl/",
      },
      {
        name: "Neighbourhood centres (buurthuizen)",
        type: "Municipal / local",
        audience: "Neighbourhood residents",
        note: "Affordable courses, coffee mornings and parent groups — check your gemeente listings.",
        website: "https://www.government.nl/topics/municipalities",
      },
      {
        name: "Sports clubs",
        type: "Verenigingen",
        audience: "Adults and families",
        note: "Ask about proefles trial sessions — post-training borrels are social glue.",
        website: "https://www.nocnsf.nl/",
      },
      {
        name: "University communities",
        type: "Campus & alumni",
        audience: "Students and young professionals",
        note: "Associations, sports intros and international student desks create structured entry points.",
        website: "https://www.studyinholland.nl/",
      },
    ] satisfies CommunityOrg[],
  },
  dailyHabits: {
    heading: "Daily Habits That Reduce Loneliness",
    intro:
      "Belonging is rebuilt in small repetitions. Protect a few habits rather than overhauling your entire personality.",
    checklist: [
      "Take a short outdoor walk in daylight — even on grey days.",
      "Greet at least one neighbour or building regular.",
      "Do 10–15 minutes of Dutch practice (app, podcast or flashcards).",
      "Work from a café or coworking space at least one day this week.",
      "Attend your chosen weekly group — treat it like a fixed appointment.",
      "Send or accept one concrete social invite (day, time, place).",
      "Limit doom-scrolling comparison of other expats' highlight reels.",
      "Keep one comforting home ritual (call, meal, playlist) without cancelling local plans.",
      "Note one thing that went slightly better socially this week.",
      "Sleep and meals first — exhaustion makes isolation feel heavier.",
    ],
    practicalTips: [
      "Protect habits like gym sessions — put them on the calendar before optional plans.",
      "Stack habits: daylight walk after work, then weekly club on a fixed evening.",
      "Track attendance for four weeks, not how deep each conversation felt.",
      "If energy is low, shrink the habit (10-minute walk) rather than cancelling entirely.",
    ],
  },
  friendsVsPartner: {
    heading: "Friends vs Finding a Partner",
    paragraphs: [
      "When you feel lonely, dating can look like the fastest fix. A caring partner helps — but putting all belonging pressure on romance often backfires. Friendships, colleagues-turned-mates and neighbourhood ties spread emotional support across more than one relationship.",
      "Keep a friendship route active even while dating. Activity-first groups also tend to create healthier dating opportunities than isolation plus apps alone.",
    ],
    links: [
      {
        label: "Dating in the Netherlands",
        href: DATING_NETHERLANDS_PATH,
        description: "How dating culture works and activity-first ways to meet people.",
        status: "live",
      },
      {
        label: "Making Dutch Friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        description: "Practical friendship routes beyond romantic search.",
        status: "live",
      },
    ] satisfies LifeGuideLink[],
    scenarios: [
      {
        situation: "New in town and only using dating apps",
        approach: "Add one weekly non-dating activity so belonging is not app-dependent",
        firstStep: "Join a language café or sport intro this week",
      },
      {
        situation: "In a new relationship and dropping all friends plans",
        approach: "Protect one friendship habit — clubs, volunteering or a standing coffee",
        firstStep: "Put the weekly group back on both calendars",
      },
      {
        situation: "Want friends first, romance later",
        approach: "Focus on hobby and volunteer routes; let dating emerge from shared context",
        firstStep: "Pick one high-repeat method from the best-ways table",
      },
    ] satisfies ScenarioRow[],
  },
  homesickness: {
    heading: "Homesickness and Missing Home",
    paragraphs: [
      "Homesickness is longing for familiar people, places, food, humour and identity — not proof you chose wrong. It often spikes after the novelty fades, during holidays or in dark winter months.",
      "The helpful pattern is both/and: stay connected to home and plant local rituals that make the Netherlands feel more like yours. Isolation plus endless comparison usually makes homesickness louder.",
    ],
    tips: [
      "Schedule video calls — then also schedule one local plan the same week.",
      "Cook a comfort meal with Dutch supermarket finds and invite a neighbour or classmate.",
      "Create a Sunday walk loop in your neighbourhood until it feels familiar.",
      "Limit late-night social media tours of your old city when you feel raw.",
      "Mark one local seasonal tradition to experience (market, Sinterklaas lights, King's Day street).",
      "If homesickness comes with persistent hopelessness, talk to a GP or qualified professional.",
    ],
  },
  lifeStages: {
    heading: "Loneliness by Life Stage",
    paragraphs: [
      "Your best antidotes depend on schedule, energy and who you live with. Use the tip that matches your stage instead of copying a strategy built for someone else's week.",
    ],
    cards: [
      {
        stage: "Students",
        challenges: "Transient classmates, tight budgets, intense comparison during intro weeks",
        tip: "Join one association or campus sport for the full semester — not only orientation week.",
      },
      {
        stage: "Professionals",
        challenges: "Long work weeks, international turnover, work-only social contact",
        tip: "Schedule one non-work weekly club the way you schedule gym sessions.",
      },
      {
        stage: "Families",
        challenges: "Little evening energy, partner as only adult company, school language barriers",
        tip: "Use school gates and kids' sport sidelines — stay for coffee after drop-off or matches.",
      },
      {
        stage: "Entrepreneurs",
        challenges: "Irregular hours, financial stress, networking that feels transactional",
        tip: "Pair founder Meetups with a hobby or sport that has nothing to do with pitching.",
      },
      {
        stage: "Digital Nomads",
        challenges: "Short stays, shallow contacts, café-hopping without recurrence",
        tip: "Even on a three-month visa, repeat the same Meetup or coworking community weekly.",
      },
      {
        stage: "Retirees",
        challenges: "Fewer workplace contacts, quieter evenings, smaller digital-first networks",
        tip: "Daytime walking clubs, library groups and volunteer desks often fit better than late Meetups.",
      },
    ] satisfies LifeStageCard[],
  },
  seekSupport: {
    heading: "When to Seek Extra Support",
    paragraphs: [
      "Community habits help many people feel less lonely. Sometimes loneliness sits alongside ongoing low mood, anxiety, grief or exhaustion that needs more than Meetup attendance. Seeking help is a practical step — not a failure of integration.",
      "Start with your huisarts (GP) if loneliness or low mood affects sleep, work, appetite or daily function. Municipal pages may list local wellbeing programmes. Trusted friends and peer groups can walk beside you while professionals provide care.",
    ],
    supportRoutes: [
      "Talk to your huisarts (GP) about how isolation or low mood is affecting daily life.",
      "Ask your municipality about local wellbeing, newcomer or social programmes.",
      "Tell one trusted friend, partner or colleague how you are really feeling.",
      "Consider peer or community groups that reduce isolation without replacing clinical care.",
      "If you already have a psychologist or counsellor, discuss relocation stress explicitly.",
      "For urgent emotional crisis support in the Netherlands, see 113.nl; in immediate danger, contact emergency services.",
    ],
    emergencyNote:
      "If you or someone else is in immediate danger, contact emergency services now. For suicide prevention support in the Netherlands, 113.nl provides information and contact options. This page cannot assess your situation and is not a crisis service.",
  },
  successStories: {
    heading: "How Expats Rebuilt Connection",
    paragraphs: [
      "These fictional examples are realistic composites — not guarantees. Most share weekly consistency for several months before loneliness eased.",
    ],
    stories: [
      {
        profile: "Spanish product designer, 29",
        city: "Amsterdam",
        route: "Tuesday padel club + Friday coworking lunch",
        outcome: "Two close friends and a wider activity circle after four months",
        lesson: "Remote Mondays felt heavy until fixed sport and coworking days created rhythm.",
      },
      {
        profile: "Indian parent, 37",
        city: "Utrecht",
        route: "Kids' football sidelines + school parent coffee",
        outcome: "A small parent group for swaps, walks and weekend plans",
        lesson: "Evening Meetups failed — daytime family-adjacent contact worked.",
      },
      {
        profile: "Canadian remote marketer, 34",
        city: "Rotterdam",
        route: "Library TaalCafé + weekly food-bank shift",
        outcome: "Familiar faces every week; dinner invites by month three",
        lesson: "Volunteering created deeper bonds than large expat mixers alone.",
      },
      {
        profile: "Italian Master's student, 24",
        city: "Groningen",
        route: "University rowing intro + dorm kitchen dinners",
        outcome: "A mixed Dutch–international circle by second semester",
        lesson: "Campus sport intros beat waiting for classmates to initiate.",
      },
      {
        profile: "British retiree, 63",
        city: "Haarlem",
        route: "Sunday walking group + buurthuis pottery mornings",
        outcome: "Walking companions became lunch friends within a season",
        lesson: "Daytime local groups suited energy better than late-night networking.",
      },
    ] satisfies SuccessStory[],
  },
  mistakes: {
    heading: "Common Mistakes When Lonely Abroad",
    cards: [
      {
        title: "Waiting to be invited",
        body: "People often assume newcomers are busy or temporary. Passive waiting extends isolation.",
        tip: "Send one concrete coffee or walk invite each week.",
      },
      {
        title: "Only dating apps",
        body: "Romance can help — it rarely replaces a broader friendship network on its own.",
        tip: "Keep one non-dating weekly activity on the calendar.",
      },
      {
        title: "Quitting at week three",
        body: "Familiarity usually starts after several repeats. Early awkwardness is normal.",
        tip: "Commit to six sessions of the same group before switching.",
      },
      {
        title: "Expat-only bubble forever",
        body: "International friends are valuable for orientation — exclusive bubbles can slow local roots.",
        tip: "Add one local club, volunteer shift or language café.",
      },
      {
        title: "Comparing your month two to someone's year three",
        body: "Social media hides how long belonging took for others.",
        tip: "Track your own attendance streak, not other people's highlight reels.",
      },
      {
        title: "Ignoring winter and energy",
        body: "Grey months reduce spontaneous socialising — without indoor plans, isolation deepens.",
        tip: "Pre-book indoor clubs and daylight walks from November onward.",
      },
    ] satisfies MistakeCard[],
  },
  socialReset: {
    heading: "30-Day Social Reset",
    intro:
      "Use four weeks as a structured experiment. The goal is rhythm and follow-up — not instant best friends.",
    weeks: [
      {
        title: "Week 1 — Orient",
        focus: "Choose routes and clear friction",
        actions: [
          "List three activities you would enjoy even alone.",
          "Browse Meetup, a sport vereniging and one volunteer listing in your city.",
          "Pick one primary weekly route and one backup.",
          "Message or register for a first session.",
        ],
      },
      {
        title: "Week 2 — Show up",
        focus: "Attendance and first introductions",
        actions: [
          "Attend your primary activity twice if the schedule allows.",
          "Introduce yourself to the organiser and one participant.",
          "Greet neighbours on two separate days.",
          "Note what felt energising vs draining — without quitting yet.",
        ],
      },
      {
        title: "Week 3 — Follow up",
        focus: "Turn familiarity into a plan",
        actions: [
          "Invite one person for coffee, a walk or post-activity drink with a concrete time.",
          "Return to the same group — sit or stand near familiar faces.",
          "Add a light second contact point (café work day or language café).",
          "Keep home video calls — do not cancel all local plans for them.",
        ],
      },
      {
        title: "Week 4 — Review rhythm",
        focus: "Keep what is sustainable",
        actions: [
          "Review attendance: which route can you keep for eight more weeks?",
          "Drop only what truly drains you — keep one recurring commitment.",
          "Set next month's calendar holds for the winning route.",
          "If mood or isolation still feels heavy, book a GP conversation.",
        ],
      },
    ] satisfies SocialResetWeek[],
  },
  howToSchema: {
    name: "30-day social reset for expats in the Netherlands",
    description:
      "A four-week plan to reduce expat loneliness by choosing one recurring activity, showing up consistently, following up with one invite and reviewing a sustainable social rhythm.",
    steps: [
      {
        name: "Choose one primary weekly activity",
        text: "Pick a sport club, volunteer shift, language café or hobby Meetup you would enjoy even alone, and register for a first session.",
      },
      {
        name: "Attend repeatedly and introduce yourself",
        text: "Show up to the same group multiple times in weeks two and three, greet the organiser and start recognising familiar faces.",
      },
      {
        name: "Send one concrete follow-up invite",
        text: "Invite someone for coffee, a walk or a post-activity drink with a specific day, time and place.",
      },
      {
        name: "Add light daily contact habits",
        text: "Protect daylight walks, neighbour greetings and at least one out-of-home work or café block each week.",
      },
      {
        name: "Review and keep a sustainable rhythm",
        text: "After four weeks, keep the route that felt workable for another eight weeks, and speak with a GP if loneliness still heavily affects daily life.",
      },
    ],
  },
  resources: {
    heading: "Helpful Resources",
    cards: [
      {
        label: "Community Basics in the Netherlands",
        href: COMMUNITY_BASICS_NETHERLANDS_PATH,
        description: "Neighbours, clubs, volunteering and integration overview.",
        status: "live",
      },
      {
        label: "Making Dutch Friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        description: "Ranked meeting methods, sports, language cafés and city notes.",
        status: "live",
      },
      {
        label: "Dating in the Netherlands",
        href: DATING_NETHERLANDS_PATH,
        description: "Dating culture and activity-first ways to meet people.",
        status: "live",
      },
      {
        label: "Dutch Social Norms",
        href: DUTCH_SOCIAL_NORMS_PATH,
        description: "Direct communication, visiting and everyday expectations.",
        status: "live",
      },
      {
        label: "Meetup Netherlands",
        href: "https://www.meetup.com/find/?location=nl--netherlands",
        description: "Find local interest and social groups by city.",
        status: "external",
      },
      {
        label: "Vrijwilligerswerk.nl",
        href: "https://www.vrijwilligerswerk.nl/",
        description: "National volunteer opportunity search.",
        status: "external",
      },
      {
        label: "Government.nl — health and wellbeing",
        href: "https://www.government.nl/topics/health-issues",
        description: "Official orientation on health topics in the Netherlands.",
        status: "external",
      },
      {
        label: "113.nl",
        href: "https://www.113.nl/english",
        description: "Suicide prevention information and support options in the Netherlands.",
        status: "external",
      },
    ] satisfies ResourceCard[],
    usageTips: [
      "Pick one ExpatLife guide and one official or local source this week — avoid twenty open tabs.",
      "Use Meetup and volunteer portals for concrete next events in your city.",
      "Municipality and GP routes matter when loneliness affects daily functioning.",
      "External links change — always confirm current programmes on the organisation site.",
    ],
  },
  faqQuickReference: [
    "Yes — loneliness after moving is common in months 1–6 for many newcomers.",
    "Dutch friendships often grow slowly through recurring activities, not instant invites.",
    "Adjustment can take months to a year or more — progress is uneven.",
    "Learning Dutch helps neighbourhood life even when English works in cities.",
    "Seek GP or professional support if low mood or isolation persists or worsens.",
  ],
  faq: [
    {
      q: "Is it normal to feel lonely after moving to the Netherlands?",
      a: "Yes. Many expats feel lonely in the first months even when work and housing are fine. Leaving networks behind and rebuilding through slower, activity-based friendships is a common relocation pattern — not a personal failure.",
    },
    {
      q: "How long does expat loneliness usually last?",
      a: "It varies widely. Activity partners often appear within weeks; a stronger sense of belonging commonly grows between months three and twelve. Progress is uneven — winter, remote work and life stage all affect timing.",
    },
    {
      q: "What helps most with loneliness in the Netherlands?",
      a: "A recurring weekly activity (sport, volunteering, language café or hobby group), small daily contact habits and one concrete follow-up invite tend to help more than one-off networking nights.",
    },
    {
      q: "Why does making friends feel harder here?",
      a: "Many adults already have established circles, calendars fill early and friendships often grow through clubs rather than spontaneous plans. Choosing recurring groups matches how social life often works locally.",
    },
    {
      q: "Should I only join expat groups?",
      a: "Expat groups are excellent for orientation and practical tips. For longer-term belonging, pair them with at least one local club, volunteer shift, neighbourhood ritual or language café.",
    },
    {
      q: "Does learning Dutch really help loneliness?",
      a: "English is enough to start in many cities. Dutch effort still opens neighbourhood life, local-only groups and signals you are investing in staying — which often deepens friendships over time.",
    },
    {
      q: "I work remotely — what should I do differently?",
      a: "Design out-of-home contact: coworking days, café work blocks, professional Meetups and one non-work weekly activity so all human contact is not limited to screens.",
    },
    {
      q: "When should I seek professional support?",
      a: "If loneliness or low mood persists, worsens, or affects sleep, work, appetite or daily function, talk to your huisarts (GP) or a qualified professional. In immediate danger, contact emergency services; for suicide prevention support in the Netherlands, see 113.nl.",
    },
  ],
  relatedGuidesTips: [
    "Need friendship tactics → Making Dutch Friends.",
    "Need romance context → Dating in the Netherlands.",
    "Need integration overview → Community Basics.",
    "Need culture and etiquette → Dutch Culture or Social Norms.",
  ],
  relatedGuides: [
    {
      label: "Making Dutch Friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      description: "Practical routes to build friendships through clubs, volunteering and neighbourhoods.",
      status: "live",
    },
    {
      label: "Dating in the Netherlands",
      href: DATING_NETHERLANDS_PATH,
      description: "Dating culture and activity-first ways to meet people.",
      status: "live",
    },
    {
      label: "Community Basics",
      href: COMMUNITY_BASICS_NETHERLANDS_PATH,
      description: "How community life and integration work for newcomers.",
      status: "live",
    },
    {
      label: "Dutch Culture",
      href: DUTCH_CULTURE_PATH,
      description: "Broader cultural context for daily life and belonging.",
      status: "live",
    },
    {
      label: "Dutch Social Norms",
      href: DUTCH_SOCIAL_NORMS_PATH,
      description: "Etiquette, directness and everyday social expectations.",
      status: "live",
    },
    {
      label: "Learning Dutch",
      href: LANGUAGE_LEARNING_PATH,
      description: "Language routes that also create classmates and conversation partners.",
      status: "comingSoon",
    },
    {
      label: "Volunteer Opportunities",
      href: VOLUNTEERING_PATH,
      description: "Weekly volunteer shifts as a reliable friendship and purpose route.",
      status: "comingSoon",
    },
  ] satisfies LifeGuideLink[],
  wellbeingHubTips: [
    "Start with one weekly friendship or community habit before adding more channels.",
    "Add language practice as a social tool — classes create classmates.",
    "Keep outdoor daylight and movement in the weekly plan, especially in winter.",
    "Seek professional support when isolation affects sleep, work or daily function.",
  ],
  wellbeingHubCards: [
    {
      label: "Making Dutch Friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      description: "Turn loneliness strategy into weekly meeting tactics.",
      status: "live",
    },
    {
      label: "Community Basics",
      href: COMMUNITY_BASICS_NETHERLANDS_PATH,
      description: "Build neighbourhood and club foundations for belonging.",
      status: "live",
    },
    {
      label: "Dutch Social Norms",
      href: DUTCH_SOCIAL_NORMS_PATH,
      description: "Reduce friction by understanding local social expectations.",
      status: "live",
    },
    {
      label: "Dating in the Netherlands",
      href: DATING_NETHERLANDS_PATH,
      description: "Explore romance without making it your only support system.",
      status: "live",
    },
    {
      label: "Cities hub",
      href: CITIES_HUB_PATH,
      description: "Compare cities for international community and lifestyle fit.",
      status: "live",
    },
    {
      label: "Learning Dutch",
      href: LANGUAGE_LEARNING_PATH,
      description: "Use language practice as a social belonging tool.",
      status: "comingSoon",
    },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    {
      label: "Making Dutch Friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      description: "Next: ranked ways to meet people and build circles.",
      status: "live",
    },
    {
      label: "Community Basics",
      href: COMMUNITY_BASICS_NETHERLANDS_PATH,
      description: "Wider integration, neighbours and club life.",
      status: "live",
    },
    {
      label: "Dating in the Netherlands",
      href: DATING_NETHERLANDS_PATH,
      description: "If you want romance alongside friendship building.",
      status: "live",
    },
    {
      label: "Dutch Social Norms",
      href: DUTCH_SOCIAL_NORMS_PATH,
      description: "Decode directness, visiting and everyday etiquette.",
      status: "live",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      description: "Compare social life and international scenes by city.",
      status: "live",
    },
    {
      label: "Volunteer Opportunities",
      href: VOLUNTEERING_PATH,
      description: "Weekly shifts for purpose and familiar faces.",
      status: "comingSoon",
    },
  ] satisfies LifeGuideLink[],
  officialSources: [
    {
      label: "Government.nl — health issues",
      href: "https://www.government.nl/topics/health-issues",
      description: "Official Dutch government orientation on health-related topics.",
    },
    {
      label: "Government.nl — new in the Netherlands",
      href: "https://www.government.nl/topics/new-in-the-netherlands",
      description: "Practical newcomer information that supports settling-in and local orientation.",
    },
    {
      label: "113.nl (English)",
      href: "https://www.113.nl/english",
      description:
        "Suicide prevention information and support options in the Netherlands — use when you need crisis-oriented help pathways.",
    },
    {
      label: "Municipalities (Government.nl)",
      href: "https://www.government.nl/topics/municipalities",
      description: "Find your gemeente for local wellbeing, newcomer and community programmes.",
    },
    {
      label: "Public libraries (OB)",
      href: "https://www.ob.nl/",
      description: "Nationwide library network — language cafés, quiet work space and community events.",
    },
    {
      label: "Vrijwilligerswerk.nl",
      href: "https://www.vrijwilligerswerk.nl/",
      description: "National portal for volunteer roles that create recurring social contact.",
    },
  ] satisfies Array<{ label: string; href: string; description: string }>,
  officialSourcesNote:
    "Official links are for orientation. Group schedules, municipal programmes and support services change — verify details on the source site. This guide is not medical advice and does not replace GP or specialist care.",
} as const;

export type ExpatLonelinessNetherlandsPage = typeof expatLonelinessNetherlandsPage;
