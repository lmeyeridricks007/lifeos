export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const DUTCH_ETIQUETTE_PATH = "/netherlands/life/dutch-etiquette/" as const;
export const DUTCH_HOLIDAYS_TRADITIONS_PATH = "/netherlands/life/dutch-holidays-and-traditions/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const FAMILY_LIFE_PATH = "/netherlands/life/family-life-netherlands/" as const;
export const VOLUNTEERING_PATH = "/netherlands/life/volunteering-netherlands/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;
export const GETTING_AROUND_PATH = "/netherlands/living/getting-around/" as const;
export const MAKING_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/" as const;
export const DUTCH_FOOD_PATH = "/netherlands/life/dutch-food/" as const;
export const FESTIVALS_PATH = "/netherlands/life/festivals/" as const;
export const CYCLING_CULTURE_PATH = "/netherlands/life/cycling-culture/" as const;
export const DUTCH_HUMOUR_PATH = "/netherlands/life/dutch-humour/" as const;
export const DINING_ETIQUETTE_PATH = "/netherlands/life/dining-etiquette/" as const;
export const DUTCH_BIRTHDAY_TRADITIONS_PATH = "/netherlands/life/dutch-birthday-traditions/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type MythCard = { myth: string; reality: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type ValueCard = { title: string; body: string; example: string };

export type TimelineStep = { era: string; title: string; detail: string };

export type RegionalCard = { region: string; pace: string; traits: string; note: string };

export type TopicRow = { topic: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v8";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-dutch-culture";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchCulturePage = {
  slug: "dutch-culture",
  path: DUTCH_CULTURE_PATH,
  hubPath: LIFE_HUB_PATH,
  publish: true,
  publishDate: "2026-12-02",
  seo: {
    title: "Dutch Culture | Complete Guide for Expats Living in the Netherlands",
    description:
      "Everything expats should know about Dutch culture, traditions, communication, work, food, social norms and everyday life in the Netherlands.",
    keywords: [
      "dutch culture",
      "culture in the netherlands",
      "dutch customs",
      "dutch society",
      "dutch lifestyle",
      "dutch traditions",
      "dutch values",
      "dutch people",
      "life in the netherlands",
      "expat netherlands culture",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture hub",
    pageTitle: "Dutch Culture",
    subtitle:
      "Understand the values, traditions and everyday customs that shape life in the Netherlands and help newcomers feel at home.",
    primaryCta: { label: "Explore Dutch Culture", href: "#intro" },
    secondaryCta: { label: "Learn About Everyday Life", href: "#daily-life" },
    chips: ["Values", "Social norms", "Work culture", "Food", "Holidays", "Regional life"],
    disclaimer:
      "Orientation only — individuals, regions and communities vary widely. Observe locally and ask politely rather than assuming one national stereotype fits everyone.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Utrecht Oudegracht wharf scene — families and professionals at canal-level café terraces, cargo bikes and city bikes along the water, historic brick wharf cellars, stone bridge and gabled buildings, warm golden afternoon light, authentic everyday Dutch life.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#core-values", label: "Values" },
    { href: "#daily-life", label: "Daily life" },
    { href: "#social-norms", label: "Social norms" },
    { href: "#communication", label: "Communication" },
    { href: "#work-culture", label: "Work" },
    { href: "#family-life", label: "Family" },
    { href: "#food-culture", label: "Food" },
    { href: "#holidays", label: "Holidays" },
    { href: "#cycling", label: "Cycling" },
    { href: "#sports-outdoor", label: "Sports" },
    { href: "#community-life", label: "Community" },
    { href: "#regional-differences", label: "Regions" },
    { href: "#integration", label: "Integrate" },
    { href: "#culture-shocks", label: "Shocks" },
    { href: "#myths", label: "Myths" },
    { href: "#timeline", label: "Timeline" },
    { href: "#faq", label: "FAQ" },
    { href: "#culture-hub", label: "All guides" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board — Dutch values, society, communication, work, food and regional diversity for expats.",
      "Start here for balanced context — then open deep-dive guides for etiquette, work and holidays."
    ),
    snapshot: visual(
      "snapshot",
      "Premium snapshot — equality, direct communication, cycling, work-life balance, community and practicality.",
      "Six signals expats notice first — experiences still vary by city, age and workplace."
    ),
    coreValues: visual(
      "core-values",
      "Premium values board — equality, freedom, tolerance, pragmatism, responsibility, consensus with examples.",
      "Values show up in meetings, neighbourhoods and calendars — not as slogans on walls."
    ),
    dailyLife: visual(
      "daily-life",
      "Premium daily rhythm scene — work commute, family dinner, weekend market, appointments and planning.",
      "Dutch daily life is structured but not rigid — calendars and punctuality matter."
    ),
    socialNorms: visual(
      "social-norms",
      "Premium social norms overview — greetings, punctuality, neighbours, bills and privacy.",
      "Open the Social Norms guide for etiquette detail beyond this overview."
    ),
    communication: visual(
      "communication",
      "Premium communication style — honesty, feedback, debate and listening in Dutch contexts.",
      "Directness is often clarity — ask for examples when feedback feels blunt."
    ),
    workCulture: visual(
      "work-culture",
      "Premium work culture overview — flat hierarchy, meetings, balance and feedback loops.",
      "Workplace culture varies by sector — confirm norms with your team."
    ),
    familyLife: visual(
      "family-life",
      "Premium family life scene — schools, sports clubs, weekend activities and parenting rhythms.",
      "Family logistics tie to school calendars and gemeente activities."
    ),
    foodCulture: visual(
      "food-culture",
      "Premium Dutch food board — breakfast, lunch, coffee, markets, cheese and party snacks.",
      "Food culture is seasonal and regional — markets beat stereotypes."
    ),
    holidays: visual(
      "holidays",
      "Premium holidays overview — King's Day, Sinterklaas, Christmas, Carnival and Liberation Day.",
      "The annual calendar shapes shop hours and neighbourhood social life."
    ),
    cycling: visual(
      "cycling",
      "Premium cycling culture — commuters, bike lanes, etiquette and everyday transport.",
      "Cycling is transport first — follow local lane and signal habits."
    ),
    sportsOutdoor: visual(
      "sports-outdoor",
      "Premium sports and outdoor life — football, running, hiking, water sports and fitness clubs.",
      "Clubs and associations are common routes to meet people."
    ),
    communityLife: visual(
      "community-life",
      "Premium community map — neighbours, associations, volunteering and local events.",
      "Community life often starts with one recurring activity."
    ),
    regionalDifferences: visual(
      "regional-differences",
      "Premium regional map — Amsterdam, Randstad, Brabant, Limburg, Friesland and Groningen traits.",
      "The Netherlands is small on a map but not uniform in pace or traditions."
    ),
    integration: visual(
      "integration",
      "Premium integration checklist — Dutch basics, clubs, neighbours, appointments and local events.",
      "Integration is participation plus patience — not performing stereotypes."
    ),
    cultureShocks: visual(
      "culture-shocks",
      "Premium culture shock cards — direct talk, planning, bills, quiet Sundays and admin systems.",
      "Most shocks ease once you know the logic behind the habit."
    ),
    myths: visual(
      "myths",
      "Premium myth-vs-reality board debunking stereotypes about bikes, directness, English, cheese and sameness.",
      "Replace stereotypes with questions about your specific city and workplace."
    ),
    timeline: visual(
      "timeline",
      "Premium high-level timeline — Golden Age trade, water management, modern society and multicultural Netherlands.",
      "History explains pragmatism and international outlook — not daily etiquette rules."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — friendliness, directness, values, integration, traditions and regional variation.",
      "Revisit when you change city, job or family situation."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide map — social norms, workplace, holidays, community and language learning.",
      "Suggested reading order after this hub overview."
    ),
    cultureHub: visual(
      "culture-hub",
      "Premium culture cluster grid — all Dutch culture deep-dive guides with when-to-read labels.",
      "This hub links every current and planned culture guide in the cluster."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next journey cards for community, norms, holidays and language.",
      "Pick the guide that matches your immediate friction point."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "How to use this hub",
      items: [
        "Read values and daily life for orientation — not as stereotypes.",
        "Open deep-dive guides for etiquette, work and holidays.",
        "Expect variation by region, age and international workplaces.",
        "Revisit when you move city or change family situation.",
      ],
    },
    snapshot: {
      title: "Read the snapshot",
      items: [
        "Notice which signals already match your experience.",
        "Ask colleagues which norms matter in your team.",
        "Pair snapshot themes with city guides for local pace.",
        "Use deep dives when one theme dominates your friction.",
      ],
    },
    coreValues: {
      title: "Values in practice",
      items: [
        "Equality often shows up in meeting participation expectations.",
        "Consensus can slow decisions but improves follow-through.",
        "Pragmatism favours workable solutions over perfect debates.",
        "Personal responsibility includes showing up on time and prepared.",
      ],
    },
    dailyLife: {
      title: "Daily rhythms",
      items: [
        "Many people structure evenings and weekends in advance.",
        "Shops and services follow published opening hours closely.",
        "Family and sports calendars compete with social plans.",
        "Cycling and OV shape how far spontaneous plans travel.",
      ],
    },
    socialNorms: {
      title: "Before the deep dive",
      items: [
        "Greetings are brief and situational — observe first.",
        "Punctuality signals reliability in social and work settings.",
        "Neighbour noise and trash rules matter in dense housing.",
        "Open Dutch Social Norms for full etiquette coverage.",
      ],
    },
    communication: {
      title: "Communication tips",
      items: [
        "Ask for concrete examples when feedback feels harsh.",
        "Meetings may invite challenge — prepare one clear point.",
        "Humour and irony vary — don't assume shared references.",
        "Open Dutch Directness at Work for professional nuance.",
      ],
    },
    workCulture: {
      title: "At work",
      items: [
        "Flat titles do not mean no decision owners — confirm who decides.",
        "Work-life boundaries are discussed openly in many teams.",
        "Hybrid patterns differ by employer — get written clarity.",
        "Open Dutch Workplace Culture for sector-level detail.",
      ],
    },
    familyLife: {
      title: "Family context",
      items: [
        "School calendars are regional — plan childcare early.",
        "Sports clubs are a major children's social route.",
        "Weekends mix family visits, sport and outdoor time.",
        "Open Family Life guide when raising children in the Netherlands.",
      ],
    },
    foodCulture: {
      title: "Food habits",
      items: [
        "Lunch is often simple — broodje or salad at work.",
        "Coffee breaks are social rituals in many offices.",
        "Markets show seasonal and regional products best.",
        "Open Dutch Food guide for deeper culinary context.",
      ],
    },
    holidays: {
      title: "Calendar awareness",
      items: [
        "King's Day and Sinterklaas shape family conversations.",
        "Public holidays affect shops and trains — plan ahead.",
        "Carnival is regional — strongest in the south.",
        "Open Dutch Holidays & Traditions for the full annual map.",
      ],
    },
    cycling: {
      title: "On the bike",
      items: [
        "Use hand signals and dedicated lanes where marked.",
        "Bike storage and theft prevention vary by city.",
        "Rain gear is normal — not a reason to skip plans.",
        "Open Getting Around for multimodal transport context.",
      ],
    },
    sportsOutdoor: {
      title: "Get moving",
      items: [
        "Football culture is social — local clubs welcome newcomers.",
        "Running and hiking groups advertise on gemeente boards.",
        "Water sports thrive near coast and lakes in summer.",
        "Try one club season before judging Dutch social life.",
      ],
    },
    communityLife: {
      title: "Build locally",
      items: [
        "Introduce yourself to neighbours after moving in.",
        "Associations (verenigingen) cover sport, culture and hobbies.",
        "Volunteering accelerates language and network building.",
        "Open Community Basics for structured integration routes.",
      ],
    },
    regionalDifferences: {
      title: "Regional lens",
      items: [
        "Amsterdam and Randstad feel faster and more international.",
        "Brabant and Limburg carry Carnival and southern food rhythms.",
        "Friesland and north provinces have distinct pride and dialects.",
        "Visit another region before generalising national culture.",
      ],
    },
    integration: {
      title: "Integration moves",
      items: [
        "Learn survival Dutch even if work is English-only.",
        "Repeat weekly activities beat one-off networking events.",
        "Respect appointments and calendar changes promptly.",
        "Participate in one local tradition per season.",
      ],
    },
    cultureShocks: {
      title: "When it feels odd",
      items: [
        "Direct feedback often targets tasks — not personal worth.",
        "Split bills reflect independence — not lack of generosity.",
        "Quiet Sunday afternoons are common in residential areas.",
        "Admin portals reward preparation — keep PDFs organised.",
      ],
    },
    myths: {
      title: "Beyond stereotypes",
      items: [
        "Not everyone cycles daily — OV and cars still matter.",
        "English helps but Dutch unlocks neighbourhood life.",
        "Regional food and traditions differ more than clichés suggest.",
        "Ask individuals about their habits instead of guessing.",
      ],
    },
    timeline: {
      title: "History context",
      items: [
        "Trade history shaped openness to international business.",
        "Water management reflects collective problem-solving culture.",
        "Modern society balances liberal norms with practical rules.",
        "Today's Netherlands is multicultural in major cities.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Social Norms for daily etiquette.",
        "Use Workplace Culture when starting a new Dutch team.",
        "Bookmark this hub when linking friends to culture topics.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Dutch Culture (this page) → orientation",
        "Social Norms → everyday etiquette",
        "Workplace Culture → professional life",
        "Holidays → annual calendar",
      ],
    },
    cultureHub: {
      title: "Cluster navigation",
      items: [
        "Live guides open now — coming-soon cards show planned depth.",
        "Start with the guide matching your biggest friction point.",
        "Return here when you need a new topic in the cluster.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need neighbours and friends → Community Basics",
        "Need etiquette detail → Dutch Social Norms",
        "Need calendar context → Dutch Holidays",
        "Need language momentum → Learning Dutch",
      ],
    },
  },
  quickAnswer: {
    heading: "Understanding Dutch Culture",
    summary:
      "Dutch culture is often associated with openness, equality, independence, direct communication, practicality, planning and work-life balance. However, experiences vary widely by region, age, profession, community and international exposure. This hub gives balanced context before you open deep-dive guides on etiquette, work, food and holidays.",
    bullets: [
      "Values like equality and pragmatism show up in meetings, neighbourhoods and calendars.",
      "Direct communication is common — clarity over small talk in many settings.",
      "Cycling, planning and punctuality shape daily logistics.",
      "Regional traditions — Carnival south, maritime north, international Randstad — differ noticeably.",
      "Integration works best through clubs, neighbours and repeated local participation.",
    ],
    note:
      "Treat this page as orientation — observe your city and workplace, then open the linked deep-dive guides for actionable detail.",
  },
  snapshotSignals: [
    { label: "Equality", value: "Flat social cues", note: "Less hierarchy in many daily interactions" },
    { label: "Direct talk", value: "Clarity first", note: "Feedback can feel blunt — ask for examples" },
    { label: "Cycling", value: "Everyday transport", note: "Infrastructure and etiquette vary by city" },
    { label: "Balance", value: "Work-life norms", note: "Contracted hours matter — confirm expectations" },
  ] satisfies SnapshotSignal[],
  snapshotMilestones: [
    { label: "Community", value: "Clubs & neighbours", note: "Associations and sport teams" },
    { label: "Practicality", value: "Planning culture", note: "Calendars and appointments" },
    { label: "Tolerance", value: "Live-and-let-live", note: "Individual choices respected" },
    { label: "Regional", value: "Not one style", note: "South, north and Randstad differ" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    { title: "Equality", body: "Many workplaces and social settings expect participation regardless of title — though decision owners still exist." },
    { title: "Direct Communication", body: "Honest feedback and clear questions are normal — separate tone from intent by asking for specifics." },
    { title: "Cycling Culture", body: "Bikes are daily transport for students, parents and professionals — not only a tourist symbol." },
    { title: "Work-Life Balance", body: "Evenings, vacations and parental leave are discussed openly — verify your contract and team norms." },
    { title: "Community", body: "Neighbourhood events, associations and volunteering build belonging faster than passive observation." },
    { title: "Practicality", body: "Agendas, RSVPs and punctuality reduce friction — planning is a social skill here." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two snapshot themes that match your current friction — open those deep dives first.",
    "Ask Dutch colleagues what they wish newcomers knew about their team.",
    "Compare your city guide with regional cards before generalising.",
    "Revisit this hub after six months — perceptions shift with context.",
  ],
  orientationFlowSteps: [
    "Week 1: observe greetings, cycling and shop rhythms in your neighbourhood.",
    "Month 1: join one association, class or recurring community event.",
    "Season 1: experience one holiday or regional tradition locally.",
  ],
  introExpatQuestions: [
    { title: "Is there one Dutch culture?", body: "No — Randstad, Brabant, Friesland and international workplaces feel different. Observe locally rather than assuming one national style." },
    { title: "Must I speak Dutch?", body: "English works in cities and global jobs — Dutch helps with neighbours, doctors, gemeente portals and deeper friendships." },
    { title: "Why is feedback so direct?", body: "Clarity saves time in meetings and reviews — ask what should change and by when before treating tone as personal." },
    { title: "How do I integrate fastest?", body: "Join one club for a full season, introduce yourself to neighbours early and experience one local tradition outside your home city." },
  ] satisfies TipCard[],
  introParagraphs: [
    "The Netherlands combines historical trade openness, pragmatic governance and strong local identities. For expats, culture shows up in calendar invites, meeting feedback, neighbour notes and what children learn at school — not only in museums.",
    "This cornerstone hub explains values, daily life, communication, work, food, holidays and regional differences without stereotypes. Each section links to dedicated guides when you need step-by-step etiquette or professional detail.",
  ],
  coreValues: [
    { title: "Equality", body: "Many settings minimise visible status — though expertise and roles still matter.", example: "Junior colleagues may challenge ideas in meetings when data supports it." },
    { title: "Freedom", body: "Individual choices in lifestyle, religion and leisure are widely accepted.", example: "Neighbours may differ on traditions without expecting conformity." },
    { title: "Tolerance", body: "Live-and-let-live attitudes are common — paired with clear rules in shared spaces.", example: "Quiet hours and waste sorting are enforced even in tolerant cities." },
    { title: "Pragmatism", body: "Workable solutions beat prolonged debate when deadlines loom.", example: "Pilot a process change before perfecting every detail." },
    { title: "Responsibility", body: "People expect you to follow through on commitments and appointments.", example: "Cancel early if you cannot attend — ghosting reads poorly." },
    { title: "Reliability", body: "Punctuality and prepared meetings signal professionalism and respect.", example: "Arrive two minutes early with one structured meeting contribution." },
    { title: "Personal independence", body: "Adults manage their own schedules, bills and transport without default help.", example: "Split bills and arrange your own return ride after social events." },
    { title: "Consensus", body: "Groups often seek broad agreement before major decisions.", example: "Meetings may loop until stakeholders align — patience helps." },
  ] satisfies ValueCard[],
  coreValuesTips: [
    "Notice when meetings invite round-the-room input — equality is behavioural, not only policy.",
    "When decisions stall, ask who documents outcomes and who owns the next step.",
    "Respect shared rules (waste, quiet hours) even when lifestyles differ — tolerance pairs with order.",
    "Cancel or reschedule early — reliability matters more than elaborate apologies.",
  ],
  socialNormsExamples: [
    { setting: "Office introduction", norm: "Handshake, clear name, eye contact", expatTip: "Use first names once colleagues do — titles fade fast in many teams." },
    { setting: "Neighbour hallway", norm: "Brief hello, low noise in stairwells", expatTip: "Introduce yourself within the first month with a short note or visit." },
    { setting: "Dinner invitation", norm: "Arrive on time, ask about contributions", expatTip: "Bring wine or dessert if unsure — confirm with the host." },
    { setting: "After shared meal", norm: "Split via Tikkie rather than one payer", expatTip: "Offer to split promptly — insisting to pay alone can feel awkward." },
    { setting: "Birthday visit", norm: "Congratulate the birthday person directly", expatTip: "Say gefeliciteerd — some families congratulate relatives too." },
    { setting: "Home visit", norm: "Announce timing — drop-ins are rare", expatTip: "Text before ringing — privacy is valued in apartments." },
  ],
  communicationScenarios: [
    { title: "Blunt meeting feedback", body: "A colleague says your slide is unclear without much preamble.", tip: "Ask: which part should change and what format do you prefer?" },
    { title: "Debate in a group", body: "People challenge your idea openly in a team discussion.", tip: "Respond with data or questions — disagreement often targets the idea, not you." },
    { title: "Short email reply", body: "You receive a two-line answer to a long question.", tip: "Ask one follow-up with a numbered list — brevity is efficiency, not dismissal." },
    { title: "No small talk before agenda", body: "Meetings jump straight to topics without warm-up chat.", tip: "Save relationship building for coffee breaks or club activities." },
  ] satisfies MistakeCard[],
  workCultureChecklist: [
    "Read the internal holiday calendar for Good Friday and Liberation Day policy.",
    "Confirm hybrid expectations — core hours, office days and meeting norms.",
    "Ask how performance feedback is delivered and how often.",
    "Request written summaries after important meetings.",
    "Clarify vacation booking process and team coverage rules.",
    "Learn who signs off decisions — flat talk does not mean no owners.",
  ],
  workCultureScenarios: [
    { title: "First team meeting", body: "Everyone receives a pre-read and speaks in turn.", tip: "Prepare one concrete point — skipping the round can look unprepared." },
    { title: "Direct performance review", body: "Manager lists improvements without much praise padding.", tip: "Confirm priorities in writing and set check-in dates." },
    { title: "Leaving at 17:00", body: "Colleagues leave on schedule without long goodbyes.", tip: "Respect contracted hours — staying late is not the default signal of dedication." },
  ] satisfies MistakeCard[],
  familyLifeChecklist: [
    "Download your school region holiday PDF when registering children.",
    "Sync sport club schedules to a shared household calendar.",
    "Ask schools about bilingual tracks if relocating mid-year.",
    "Plan Sunday family visits around sport matches and training.",
    "Register children for municipal sport subsidies if eligible.",
    "Introduce yourself to other parents at club events — social routes for families.",
  ],
  familyWeeklyRhythm: [
    { day: "School days", rhythm: "08:30–15:00 typical; Wednesday afternoon sport common", note: "Bike or cargo-bike school runs peak at 08:00." },
    { day: "Thursday", rhythm: "Late shopping and market visits in many cities", note: "Plan groceries if Friday sport or travel." },
    { day: "Saturday", rhythm: "Club matches, errands, family visits", note: "Whole neighbourhoods revolve around youth sport." },
    { day: "Sunday", rhythm: "Quieter residential pace; family lunches", note: "Limited shop hours — plan Saturday errands." },
  ],
  dailyLifeTopics: [
    { topic: "Morning routines", detail: "Coffee, quick breakfast and OV or bike commute — rush hour peaks 08:00–09:00." },
    { topic: "Work rhythm", detail: "Core hours often 9–17 with lunch breaks — hybrid patterns vary by employer." },
    { topic: "Family evenings", detail: "Sports practices, homework and early dinners on school nights." },
    { topic: "Shopping", detail: "Supermarkets, markets and online delivery — Thursday evening shopping peaks." },
    { topic: "Weekends", detail: "Sport, nature trips, family visits and planned social appointments." },
    { topic: "Planning", detail: "Calendar invites for social events weeks ahead — spontaneity exists but is scheduled." },
  ] satisfies TopicRow[],
  dailyLifeTips: [
    "Download your gemeente app for waste, parking and event notices.",
    "Check NS and shop hours before public holidays.",
    "Introduce yourself to neighbours within the first month.",
    "Keep a shared household calendar for school and sport clashes.",
  ],
  socialNormsSummary: [
    "Brief greetings — handshakes or three cheek kisses depending on context.",
    "Punctuality for appointments, dinners and meetings.",
    "Direct questions without long small-talk warm-up in many settings.",
    "Neighbour courtesy on noise, trash and shared stairwells.",
    "Splitting bills (Tikkie) rather than one person paying by default.",
    "Privacy — home visits often announced in advance.",
  ],
  communicationTopics: [
    { topic: "Honesty", detail: "Clear opinions in meetings — ask for examples if tone feels sharp." },
    { topic: "Feedback", detail: "Improvement-focused — confirm next steps after reviews." },
    { topic: "Debates", detail: "Challenge ideas openly — disagreement is not always personal." },
    { topic: "Listening", detail: "Take turns in groups — interrupting less than in some cultures." },
    { topic: "Questions", detail: "Direct questions save time — prepare one precise ask." },
  ] satisfies TopicRow[],
  workCultureTopics: [
    { topic: "Flat hierarchies", detail: "Titles matter less in dialogue — decision owners still document outcomes." },
    { topic: "Meetings", detail: "Agendas, time boxes and written follow-ups are common." },
    { topic: "Work-life balance", detail: "Vacation, parental leave and evening boundaries discussed openly." },
    { topic: "Feedback", detail: "Regular performance dialogue — adapt to concise Dutch style." },
  ] satisfies TopicRow[],
  familyLifeTopics: [
    { topic: "Children", detail: "Outdoor play, sport clubs and structured school weeks." },
    { topic: "Schools", detail: "Regional calendars, parent associations and bilingual options in cities." },
    { topic: "Sports", detail: "Saturday matches and weekday training — family schedules revolve around clubs." },
    { topic: "Family time", detail: "Sunday visits to parents — second Christmas day extensions." },
    { topic: "Parenting", detail: "Independence encouraged early — cycling to school common." },
  ] satisfies TopicRow[],
  foodCultureTopics: [
    { topic: "Breakfast", detail: "Bread, cereal, yogurt — coffee at home or office." },
    { topic: "Lunch", detail: "Broodje, salad or soup — many eat at desk or canteen." },
    { topic: "Dinner", detail: "Early evening family meals — stamppot in winter, salads in summer." },
    { topic: "Coffee", detail: "Office coffee rounds and café meetings — social ritual." },
    { topic: "Snacks", detail: "Bitterballen at parties, stroopwafels as treats, cheese boards at gatherings." },
    { topic: "Markets", detail: "Weekly street markets for produce, fish and seasonal specialties." },
  ] satisfies TopicRow[],
  foodCultureFoods: [
    { name: "Broodje lunch", season: "Daily", note: "Sandwich, soup or salad — often 12:00–13:00 at desk or terrace." },
    { name: "Stamppot", season: "Winter", note: "Potato mash with vegetables — hearty family dinner staple." },
    { name: "Bitterballen", season: "Parties", note: "Deep-fried snack with mustard at borrels and events." },
    { name: "Stroopwafels", season: "Treats", note: "Syrup waffle — bakery and market favourite, not daily breakfast." },
    { name: "Oliebollen", season: "New Year", note: "Fried dough balls sold from December through early January." },
    { name: "Pepernoten", season: "Sinterklaas", note: "Spiced biscuits from October — separate from Christmas for many families." },
  ],
  foodCultureTips: [
    "Thursday evening is a common supermarket peak — plan ahead.",
    "Markets often close by 17:00 — arrive before lunch for best produce.",
    "Office coffee rounds are social — offer to make a round when new.",
    "Dutch cheese boards vary by region — ask market vendors for samples.",
  ],
  holidaysSummary: [
    "King's Day — orange nationwide street party in April.",
    "Sinterklaas — November–December family tradition separate from Christmas for many.",
    "Christmas — home-focused kerst dinners and two public holidays.",
    "Carnival — costumes and parades in Brabant and Limburg.",
    "Liberation Day — festivals on 5 May; solemn remembrance on 4 May.",
  ],
  holidaysKeyDates: [
    { holiday: "King's Day", timing: "27 April (26 Apr if Sunday)", expatNote: "Book travel early — nationwide crowds and orange dress common." },
    { holiday: "Remembrance Day", timing: "4 May, 20:00 silence", expatNote: "Stay quiet in public spaces during the national minute." },
    { holiday: "Liberation Day", timing: "5 May", expatNote: "Festivals in many cities — verify if your employer treats it as a day off." },
    { holiday: "Sinterklaas", timing: "5 December pakjesavond", expatNote: "Schools and shops build anticipation from October." },
    { holiday: "Christmas", timing: "25–26 December public holidays", expatNote: "Family-focused — reserve restaurants early if dining out." },
    { holiday: "Carnival", timing: "February (south)", expatNote: "Not nationwide — strongest in Brabant and Limburg." },
  ],
  cyclingChecklist: [
    "Buy front and rear lights — required after dark and often checked.",
    "Use hand signals before turns — expected on busy lanes.",
    "Stay right on shared paths and pass with space.",
    "Lock frame and wheel at stations — theft happens in cities.",
    "Carry rain jacket and gloves year-round — weather shifts quickly.",
    "Learn shark-teeth markings at crossings — yield rules differ from some countries.",
    "Register OV-fiets if using station rental bikes — return within window.",
  ],
  cyclingEtiquetteRows: [
    { situation: "Bike lane rush hour", rule: "Keep pace, stay right, signal stops", tip: "08:00 school run lanes are busiest — leave extra time." },
    { situation: "Pedestrian zone", rule: "Walk bike or ride slowly where signed", tip: "Do not block café terraces or shop entrances." },
    { situation: "OV station parking", rule: "Use marked racks; lock both wheels", tip: "Photo your rack row — large stations are maze-like." },
    { situation: "Rain burst", rule: "Brake earlier; allow longer following distance", tip: "Invest in waterproof layer and gloves — plans continue." },
  ],
  sportsOutdoorTips: [
    "Join a vereniging for a full season — one-off events rarely build friendships.",
    "Saturday football matches are social hubs for parents and neighbours.",
    "Gemeente websites list walking clubs and park run groups.",
    "Employer benefits sometimes discount gyms — check your contract portal.",
    "Coastal and lake regions swell with water sports in summer — book lessons early.",
  ],
  sportsClubRoutes: [
    { title: "Football club", body: "Saturday matches, weekday training, strong local loyalty — parents socialize on sidelines." },
    { title: "Running group", body: "Canal-side jogs and park runs — groups post on Facebook and gemeente boards." },
    { title: "Walking club", body: "Marked LAW routes and organised weekend hikes — low language barrier entry." },
    { title: "Gym or fitness class", body: "Employer discounts common — good for winter social rhythm." },
  ] satisfies TipCard[],
  communityChecklist: [
    "Introduce yourself to neighbours within the first month.",
    "Join one association for a full season — sport, music or hobby.",
    "Volunteer once at a neighbourhood festival or food bank.",
    "Read gemeente event newsletters for free local activities.",
    "Attend library or buurt BBQ if invited — low-pressure entry points.",
    "Repeat the same activity weekly — familiarity builds trust.",
  ],
  communityScenarioCards: [
    { title: "Street party invite", body: "Neighbours host a buurt BBQ or block event.", tip: "Attend briefly, introduce yourself, offer to help cleanup — visibility matters." },
    { title: "Sports club signup", body: "Registration opens in summer for autumn season.", tip: "Ask about beginner groups and English-friendly coaches before committing." },
    { title: "Volunteer shift", body: "Festival or fair needs short volunteer slots.", tip: "One shift introduces you to organisers who know other local groups." },
  ] satisfies MistakeCard[],
  cultureShockRecoveryChecklist: [
    "Name the friction — timing, tone, bills or logistics — before generalising.",
    "Ask a Dutch colleague or neighbour what they would do in the same situation.",
    "Open the linked deep-dive guide for the topic that keeps recurring.",
    "Give new habits three months — calendar culture takes repetition to feel normal.",
    "Revisit this hub after a city or job change — context resets assumptions.",
  ],
  mythsReflectionTips: [
    "Replace 'all Dutch people…' with 'in my team / neighbourhood…'",
    "Visit another province before judging national culture from one city.",
    "Notice who cycles, who uses OV and who drives — transport is mixed.",
    "Ask food preferences individually — cheese stereotypes miss real variety.",
    "Treat English fluency as situational — Dutch still helps with integration.",
  ],
  timelineTodayLinks: [
    "Trade history → international business English and multicultural offices in Randstad.",
    "Water management → collective infrastructure, planning culture and gemeente services.",
    "Consensus politics → long meetings and documented agreements in workplaces.",
    "Internationalisation → expat hubs, bilingual schools and global food in cities.",
    "Multicultural cities → neighbourhoods where no single stereotype fits daily life.",
  ],
  cultureHubTips: [
    "Start with the guide matching your biggest friction — not the longest guide.",
    "Live cards open now; coming-soon cards show planned cluster depth.",
    "Return here when you need a new topic — this page is the culture cluster index.",
    "Pair culture guides with Community Basics and Learning Dutch for integration momentum.",
  ],
  cyclingTopics: [
    { topic: "Commuting", detail: "OV-bike rentals, bike parking at stations and rain gear norms." },
    { topic: "Etiquette", detail: "Stay right, signal turns, don't block pedestrian zones." },
    { topic: "Infrastructure", detail: "Red paths, shark teeth markings and priority rules at crossings." },
    { topic: "Children", detail: "Cargo bikes and school runs — expect busy bike lanes at 08:00." },
  ] satisfies TopicRow[],
  sportsOutdoorTopics: [
    { topic: "Football", detail: "Club culture and watching Eredivisie — local loyalty strong." },
    { topic: "Running", detail: "Park runs and canal-side jogs — groups post on social media." },
    { topic: "Cycling sport", detail: "Recreational tours and racing clubs beyond daily commute." },
    { topic: "Walking", detail: "Nature reserves and dune paths — weekend family default." },
    { topic: "Water sports", detail: "Sailing, rowing and SUP on lakes and coast." },
    { topic: "Fitness", detail: "Gyms and group classes — employer discounts sometimes available." },
    { topic: "Hiking", detail: "Marked routes (LAW) and organised walking clubs." },
  ] satisfies TopicRow[],
  communityTopics: [
    { topic: "Neighbours", detail: "Introduce yourself, respect quiet hours, join street events if invited." },
    { topic: "Sports clubs", detail: "Verenigingen for football, hockey, tennis and more." },
    { topic: "Volunteering", detail: "Festivals, food banks and neighbourhood projects welcome newcomers." },
    { topic: "Associations", detail: "Music, culture and hobby clubs with annual membership." },
    { topic: "Events", detail: "Library boards, buurt BBQs and municipal festivals." },
  ] satisfies TopicRow[],
  regionalCards: [
    { region: "Amsterdam", pace: "Fast, international", traits: "Tourism, startups, diverse food", note: "High churn — networks need renewal" },
    { region: "Randstad", pace: "Urban, connected", traits: "Rotterdam, Hague, Utrecht hubs", note: "OV-linked commutes dominate" },
    { region: "Brabant", pace: "Social, festive", traits: "Carnival, tech campuses", note: "Strong regional pride" },
    { region: "Limburg", pace: "Southern European feel", traits: "Hills, Carnival, cross-border", note: "Maastricht culture distinct" },
    { region: "Friesland", pace: "Regional identity", traits: "Language pride, water sports", note: "Elfstedentocht folklore" },
    { region: "Groningen", pace: "Student energy", traits: "Young population, cycling flatlands", note: "Northern quiet winters" },
  ] satisfies RegionalCard[],
  regionalComparisonRows: [
    { region: "Amsterdam", pace: "Fast", highlight: "International startups, tourism", expatTip: "Networks churn — refresh contacts yearly." },
    { region: "Randstad", pace: "Urban", highlight: "Rotterdam, Hague, Utrecht hubs", expatTip: "OV-linked commutes dominate daily life." },
    { region: "Brabant", pace: "Festive", highlight: "Carnival, tech campuses", expatTip: "Strong regional pride — visit during Carnival once." },
    { region: "Limburg", pace: "Relaxed", highlight: "Hills, cross-border Maastricht", expatTip: "Feels more southern — different calendar rhythm." },
    { region: "Friesland", pace: "Regional", highlight: "Language pride, water sports", expatTip: "Learn a few Frisian greetings if you relocate north." },
    { region: "Groningen", pace: "Student", highlight: "Young population, flatlands", expatTip: "Quiet winters — plan indoor social routes." },
  ],
  integrationChecklist: [
    "Learn basic Dutch phrases for shops, doctors and neighbours.",
    "Join one sports or hobby club for a full season.",
    "Volunteer at a local festival or fair once.",
    "Introduce yourself to neighbours with a short note or visit.",
    "Respect appointment times and calendar updates.",
    "Cycle or master OV routes in your city.",
    "Explore one regional tradition outside your home city.",
    "Participate in a neighbourhood event or market.",
  ],
  expatScenarioCards: [
    { title: "First week at work", body: "Meetings may start with agendas and direct questions — less small-talk warm-up than some cultures.", tip: "Prepare one structured contribution and ask what follow-up format your manager prefers." },
    { title: "Neighbour introduction", body: "Neighbours may seem reserved until you introduce yourself — a short note or door visit helps.", tip: "Mention your name, household size and that you want to be a considerate neighbour." },
    { title: "Social dinner invite", body: "Guests often bring a dish or drink; bills may be split via Tikkie after the meal.", tip: "Ask the host about contributions and arrival time — punctuality matters." },
    { title: "School and sport logistics", body: "Family calendars revolve around club training, Saturday matches and school holiday regions.", tip: "Save your school region PDF and sync sport schedules to a shared household calendar." },
  ] satisfies MistakeCard[],
  cultureShockCards: [
    { title: "Direct communication", body: "Feedback may sound blunt without warm-up small talk.", tip: "Ask: what should change by when?" },
    { title: "Planning ahead", body: "Social plans booked weeks in advance.", tip: "Propose dates early — spontaneity still possible." },
    { title: "Splitting bills", body: "Tikkie requests after shared meals are normal.", tip: "Offer to split — don't insist on paying alone." },
    { title: "Punctuality", body: "Arriving late without message frustrates hosts.", tip: "Message if delayed — even five minutes." },
    { title: "Quiet Sundays", body: "Residential areas quiet afternoons — limited shop hours.", tip: "Plan groceries Saturday." },
    { title: "Cycling everywhere", body: "Bike logistics affect clothing, hair and rain plans.", tip: "Buy quality rain gear and lights." },
    { title: "Feedback at work", body: "Performance talk is direct — less praise padding.", tip: "Confirm requested changes in writing." },
    { title: "Administrative systems", body: "DigiD, gemeente portals and PDF archives matter.", tip: "Keep a relocation folder digitally." },
  ] satisfies MistakeCard[],
  myths: [
    { myth: "Everyone rides a bike daily", reality: "Cycling is common but OV, cars and e-bikes fill gaps — especially outside city cores." },
    { myth: "Everyone is direct all the time", reality: "Directness varies by person, sector and friendship depth — context matters." },
    { myth: "Everyone speaks English", reality: "English works in cities and international jobs — Dutch helps with neighbours, doctors and bureaucracy." },
    { myth: "Everyone is tall", reality: "Height averages are high — diversity is normal in multicultural cities." },
    { myth: "Everyone loves cheese", reality: "Cheese culture is real but food tastes vary — markets offer far more than gouda stereotypes." },
    { myth: "Everyone is the same", reality: "Regional, urban-rural and international backgrounds create very different daily experiences." },
  ] satisfies MythCard[],
  timeline: [
    { era: "16th–17th c.", title: "Golden Age trade", detail: "Maritime commerce connected Amsterdam to global markets and tolerant merchant culture." },
    { era: "19th–20th c.", title: "Water & engineering", detail: "Polders, canals and collective infrastructure shaped pragmatic problem-solving." },
    { era: "Post-1945", title: "Rebuilding & consensus", detail: "Pillarisation eased into modern pluralism — institutions value negotiation." },
    { era: "1990s–today", title: "Internationalisation", detail: "EU hub economy, expat workforce and multicultural cities — especially Randstad." },
    { era: "Today", title: "Multicultural Netherlands", detail: "Dutch culture blends local traditions with global professionals, students and families." },
  ] satisfies TimelineStep[],
  faq: [
    { q: "What is Dutch culture like?", a: "Often described as open, practical, egalitarian and direct — with strong regional variation. Daily life emphasises planning, punctuality, cycling and work-life boundaries. Experiences differ by city, workplace and community." },
    { q: "Are Dutch people friendly?", a: "Friendliness may look different from small-talk cultures — neighbours can be helpful once introduced, and colleagues socialise through activities. Join clubs or repeat events to build warmth over time." },
    { q: "Why are Dutch people direct?", a: "Direct communication often prioritises clarity and efficiency — less ritual politeness than in some countries. Ask for examples if feedback feels personal." },
    { q: "What values are important?", a: "Equality, freedom, tolerance, pragmatism, responsibility and consensus appear in politics, workplaces and neighbourhoods — expressed through rules and calendars as much as speeches." },
    { q: "How can I integrate?", a: "Learn basic Dutch, join associations, meet neighbours, respect appointments and participate in local traditions. Integration is gradual — repetition beats one-off networking." },
    { q: "What traditions should I know?", a: "King's Day, Sinterklaas, Christmas, Carnival (south) and Liberation Day shape calendars and shop hours. See the Dutch Holidays guide for dates and participation tips." },
    { q: "Is Dutch culture different by region?", a: "Yes — Carnival south, maritime north, international Randstad and student Groningen feel distinct. Visit another province before generalising." },
    { q: "What surprises most expats?", a: "Direct feedback, bill splitting, quiet Sundays, cycling logistics and administrative portals — plus how much calendars structure social life." },
  ],
  faqNextSteps: [
    "Open Dutch Social Norms for everyday etiquette detail.",
    "Open Dutch Workplace Culture when starting a new job.",
    "Bookmark this hub as your culture cluster starting point.",
  ],
  relatedGuides: [
    { label: "Dutch Etiquette", href: DUTCH_ETIQUETTE_PATH, description: "Practical manners for greetings, dining, neighbours and gifts.", status: "live" },
    { label: "Dutch Humour Explained", href: DUTCH_HUMOUR_PATH, description: "Dry wit, sarcasm, teasing and humour in context.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Greetings, birthdays, neighbours and everyday etiquette.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Meetings, hierarchy, balance and feedback.", status: "live" },
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Professional communication deep dive.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Friends, neighbours and clubs.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual calendar and celebrations.", status: "live" },
    { label: "Dutch Birthday Traditions", href: DUTCH_BIRTHDAY_TRADITIONS_PATH, description: "Circle parties, gifts and birthday etiquette.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Courses and practice routes.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Relationships and meeting people.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_FRIENDS_PATH, description: "Activity routes, clubs and realistic timelines for local friendships.", status: "live" },
  ] satisfies LifeGuideLink[],
  relatedGuidesReadingOrder: [
    "Dutch Culture (this hub) → values and daily context",
    "Dutch Social Norms → everyday etiquette",
    "Dutch Workplace Culture → professional life",
    "Community Basics → neighbours and clubs",
    "Dutch Holidays → annual traditions",
  ],
  cultureHubCards: [
    { label: "Dutch Etiquette", href: DUTCH_ETIQUETTE_PATH, description: "Practical manners for everyday situations.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette and unwritten rules.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "How Dutch teams operate.", status: "live" },
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Feedback and meeting debate.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs and integration.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Relationships and social life.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "King's Day, Sinterklaas, Christmas.", status: "live" },
    { label: "Dutch Birthday Traditions", href: DUTCH_BIRTHDAY_TRADITIONS_PATH, description: "Circle parties, gifts and etiquette.", status: "live" },
    { label: "Dutch Food Culture", href: DUTCH_FOOD_PATH, description: "Meals, markets and traditions.", status: "comingSoon" },
    { label: "Cycling Culture", href: CYCLING_CULTURE_PATH, description: "Bike commuting and etiquette.", status: "comingSoon" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Language learning routes.", status: "live" },
    { label: "Family Life", href: FAMILY_LIFE_PATH, description: "Schools, parenting and weekends.", status: "comingSoon" },
    { label: "Festivals", href: FESTIVALS_PATH, description: "Events across the calendar.", status: "comingSoon" },
    { label: "Dutch Humour", href: DUTCH_HUMOUR_PATH, description: "Irony, jokes and social context.", status: "live" },
  ] satisfies LifeGuideLink[],
  cultureHubHeading: "Our Dutch Culture Guides",
  cultureHubIntro:
    "Deep-dive guides for every major culture topic — open live guides now; coming-soon cards show planned coverage in this cluster.",
  exploreNextCards: [
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Build neighbourhood life.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual celebrations.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Language momentum.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_FRIENDS_PATH, description: "Friendship routes and clubs.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Need neighbours and clubs → Community Basics.",
    "Need etiquette detail → Dutch Social Norms.",
    "Need calendar context → Dutch Holidays.",
    "Need language → Learning Dutch hub.",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on society and public services." },
    { label: "NetherlandsWorldwide", href: "https://www.netherlandsworldwide.nl/", description: "Government portal for internationals living in the Netherlands." },
    { label: "CBS — Statistics Netherlands", href: "https://www.cbs.nl/", description: "Demographics, society and regional data." },
    { label: "Holland.com", href: "https://www.holland.com/", description: "National tourist board — events and regional inspiration." },
  ],
  schemaCollectionItems: [
    { name: "Dutch Social Norms", description: "Everyday etiquette and social customs for expats." },
    { name: "Dutch Workplace Culture", description: "Professional communication and work-life norms." },
    { name: "Dutch Holidays & Traditions", description: "Annual celebrations and public holidays." },
    { name: "Dutch Birthday Traditions", description: "Circle parties, gifts and birthday etiquette for expats." },
    { name: "Community Basics", description: "Building social life and neighbourhood connections." },
    { name: "Dating in the Netherlands", description: "Relationships and meeting people." },
    { name: "Learning Dutch", description: "Language learning resources and routes." },
  ],
} as const;

export type DutchCulturePage = typeof dutchCulturePage;
