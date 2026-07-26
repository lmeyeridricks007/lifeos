export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const VOLUNTEERING_PATH = "/netherlands/life/volunteering-netherlands/" as const;
export const EXPAT_LONELINESS_PATH = "/netherlands/life/expat-loneliness-netherlands/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

export type SnapshotMilestone = {
  label: string;
  value: string;
  note: string;
};

export type OutboundLinkMeta = {
  website: string;
  partnerSlug: string;
  isAffiliate?: boolean;
  ctaLabel?: string;
};

export type OptionalOutboundLinkMeta = Partial<OutboundLinkMeta>;

export type DatingApp = OutboundLinkMeta & {
  name: string;
  audience: string;
  ageRange: string;
  strengths: string;
  pricing: string;
  bestCities: string;
  featured?: boolean;
};

export type ServiceRow = OptionalOutboundLinkMeta & {
  name: string;
  audience: string;
  ageRange: string;
  typicalCost: string;
  cities: string;
  note: string;
};

export type FeaturedSpotlight = {
  title: string;
  body: string;
  tips: readonly string[];
} & OptionalOutboundLinkMeta;

export type MeetMethodScore = {
  method: string;
  ease: string;
  cost: string;
  meaningfulConnections: string;
  repeatInteraction: string;
};

export type CityDatingCard = {
  city: string;
  href: string;
  internationalPopulation: string;
  apps: string;
  events: string;
  nightlife: string;
  activities: string;
};

export type MistakeCard = { title: string; body: string; tip: string };

export type OfficialSourceLink = {
  label: string;
  href: string;
  description: string;
  partnerSlug?: string;
  isAffiliate?: boolean;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-dating-in-the-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const datingNetherlandsPage = {
  slug: "dating-in-the-netherlands",
  path: DATING_NETHERLANDS_PATH,
  hubPath: LIFE_HUB_PATH,
  publish: true,
  publishDate: "2026-11-25",
  seo: {
    title: "Dating in the Netherlands | The Complete Expat Guide to Meeting People",
    description:
      "Everything expats need to know about dating in the Netherlands including Dutch dating culture, apps, singles events, hiking groups, social clubs, active holidays and where to genuinely meet people.",
    keywords: [
      "dating in the netherlands",
      "dating netherlands",
      "expat dating netherlands",
      "dutch dating culture",
      "meeting singles netherlands",
      "dating apps netherlands",
      "singles events netherlands",
      "meet people netherlands",
      "speed dating amsterdam",
      "expat singles",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Social life",
    pageTitle: "Dating in the Netherlands",
    subtitle:
      "Whether you're looking for a long-term relationship, new friends or simply want to meet more people, here's how dating and social life really work in the Netherlands.",
    primaryCta: { label: "Explore Ways to Meet People", href: "#meet-methods" },
    secondaryCta: { label: "Understand Dutch Dating Culture", href: "#dutch-culture" },
    chips: ["Apps", "Singles events", "Sports clubs", "Hiking", "Expat groups", "Active holidays"],
    disclaimer:
      "Orientation only — no platform guarantees matches or relationships. Verify event details, costs and safety practices on official provider sites before booking or meeting.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Unique photorealistic editorial photo of an international couple walking along the Rotterdam Maas waterfront near Willemsbrug — cyclists, modern skyline, outdoor café terrace and relaxed everyday social life, warm afternoon light.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#dutch-culture", label: "Culture" },
    { href: "#dating-apps", label: "Apps" },
    { href: "#hidden-gems", label: "Hidden gems" },
    { href: "#singles-events", label: "Events" },
    { href: "#active-holidays", label: "Trips" },
    { href: "#hiking-groups", label: "Hiking" },
    { href: "#sports-clubs", label: "Sports" },
    { href: "#language-exchanges", label: "Language" },
    { href: "#volunteering", label: "Volunteer" },
    { href: "#expat-communities", label: "Expat" },
    { href: "#social-clubs", label: "Clubs" },
    { href: "#safety", label: "Safety" },
    { href: "#lgbtq", label: "LGBTQ+" },
    { href: "#cities", label: "Cities" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#meet-methods", label: "Compare" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board showing dating routes for newcomers — apps, hobbies, sports, expat groups, volunteering, language exchanges, outdoor clubs and singles holidays.",
      "Dating improves when you combine one recurring activity with one social channel — not apps alone."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-signal snapshot — English widely spoken, large international population, direct communication, active app usage, strong hobby culture, activity-first meeting culture.",
      "Use the snapshot to pick two routes for your first month — e.g. one app plus one weekly activity."
    ),
    dutchCulture: visual(
      "dutch-culture",
      "Premium Dutch dating culture reference — direct communication, splitting bills, independence, pacing, exclusivity, meeting friends and family introductions with balanced notes.",
      "Dutch dating often values clarity and equality — ask what exclusivity means rather than assuming."
    ),
    datingApps: visual(
      "dating-apps",
      "Premium dating app comparison rail — Tinder, Bumble, Hinge, Inner Circle, Breeze, Lexa, Paiq and inclusive apps with audience and city notes.",
      "Match app choice to your city and intent — Amsterdam-heavy apps differ from nationwide platforms."
    ),
    hiddenGems: visual(
      "hidden-gems",
      "Premium hidden gems panel — Breeze, Paiq, Lexa, dining clubs, neighbourhood groups and local Facebook communities with why locals use them.",
      "Lesser-known Dutch platforms often favour in-person meetings over endless chat."
    ),
    singlesEvents: visual(
      "singles-events",
      "Premium singles events calendar — speed dating, wine tastings, dance evenings, cruises and networking-style socials with age and city labels.",
      "Singles events work best when you treat them as practice meeting people — not guaranteed matchmaking."
    ),
    activeHolidays: visual(
      "active-holidays",
      "Premium active singles holiday map — hiking, cycling, ski and adventure weekends with provider examples and group-travel tips.",
      "Shared trips create repeat contact fast — choose trips matching your fitness level and social pace."
    ),
    hikingGroups: visual(
      "hiking-groups",
      "Premium outdoor meet-people guide — Meetup hikes, NKBV, Dutch Hikers, expat walking clubs and nature volunteer projects.",
      "Weekend walks offer low-pressure conversation — bring layers and confirm meeting points."
    ),
    sportsClubs: visual(
      "sports-clubs",
      "Premium sports club roster — running, padel, climbing, rowing, dance and martial arts with recurring-session benefits.",
      "Recurring training beats one-off gym visits for meeting people — ask about proefles trial sessions."
    ),
    languageExchanges: visual(
      "language-exchanges",
      "Premium language café and tandem board — Meetup exchanges, university groups, conversation tables and Dutch practice routes.",
      "Language evenings attract internationals and curious locals — perfect for low-stakes first meetings."
    ),
    volunteering: visual(
      "volunteering",
      "Premium volunteer community map — animal shelters, food banks, festivals, gardens and neighbourhood projects with weekly shift tips.",
      "Weekly volunteering builds familiar faces faster than sporadic event hopping."
    ),
    expatCommunities: visual(
      "expat-communities",
      "Premium international community bridge — InterNations, Meetup, AIC, Facebook and LinkedIn city groups with integration balance notes.",
      "Expat groups orient fast — pair with one local activity for deeper roots."
    ),
    socialClubs: visual(
      "social-clubs",
      "Premium interest club grid — board games, photography, book clubs, choirs, cooking, wine and entrepreneur circles.",
      "Shared hobbies create natural conversation — pick one club and attend four weeks before judging."
    ),
    safety: visual(
      "safety",
      "Premium dating safety checklist — public meetings, tell a friend, verify profiles, avoid money requests, trust instincts.",
      "Safety basics apply everywhere — never transfer money to someone you have not met in person."
    ),
    lgbtq: visual(
      "lgbtq",
      "Premium inclusive dating resource board — HER, Grindr, Lex, community meetups, Pride events and local organisations.",
      "LGBTQ+ social life clusters in larger cities — check local Pride and community centre calendars."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Groningen with international pool and activity notes.",
      "City choice shapes your dating pool — compare events and clubs, not only nightlife."
    ),
    mistakes: visual(
      "mistakes",
      "Premium eight mistake cards — app-only strategy, no activities, instant friendship expectations, waiting to be invited and expat-only bubbles.",
      "Most friction is strategy, not personality — adjust channels before concluding 'dating is impossible here'."
    ),
    meetMethods: visual(
      "meet-methods",
      "Premium score matrix comparing apps, sports, volunteering, hiking, meetups, singles holidays, networking and dance classes on ease, cost and repeat contact.",
      "Use the matrix to combine one high-repeat method with one wider-reach method."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight expat dating answers on difficulty, apps, Dutch people, relationships, age groups, events and safety.",
      "Confirm app and event details locally — offerings change by season and city."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide route map — community basics, social norms, language, workplace culture, cities, volunteering.",
      "Dating sits inside wider integration — social norms and community routes reinforce each other."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next steps — community basics, social norms, language, festivals, volunteering with when-to-use labels.",
      "Pick the card matching whether you need friends, culture context or language practice first."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "First-month orientation",
      items: [
        "Pick one dating app and one recurring activity — not ten channels at once.",
        "Many Dutch people have established circles — activities create new entry points.",
        "English helps daily; Dutch effort opens deeper local connections.",
        "Direct communication is common — clarity beats guessing games.",
      ],
    },
    snapshot: {
      title: "How to use this snapshot",
      items: [
        "Compare your city to the cards below — Amsterdam differs from smaller cities.",
        "Treat signals as patterns, not guarantees about any individual.",
        "Ask locals what they actually use — app popularity shifts.",
        "Revisit after three months as your network grows.",
      ],
    },
    dutchCulture: {
      title: "Culture reminders",
      items: [
        "Splitting bills is everyday — confirm payment expectations early.",
        "Exclusivity is often discussed explicitly — don't assume.",
        "Meeting friends may happen sooner than in some cultures.",
        "Independence and planning ahead are widely valued.",
      ],
    },
    datingApps: {
      title: "App tips",
      items: [
        "Use recent photos and a clear intent line in your bio.",
        "Match city density — Inner Circle and Breeze skew Amsterdam-heavy.",
        "Report suspicious profiles through the app.",
        "Move to a public coffee meet within a few messages when comfortable.",
      ],
    },
    hiddenGems: {
      title: "Why locals use alternatives",
      items: [
        "Breeze pushes in-person dates instead of long chats.",
        "Lexa and Paiq have long Dutch user bases.",
        "Dining clubs rotate strangers at one table — low script pressure.",
        "Neighbourhood Facebook groups announce hyperlocal socials.",
      ],
    },
    singlesEvents: {
      title: "Event tips",
      items: [
        "Book early — popular speed dating slots fill fast.",
        "Dress for the venue — wine tastings differ from dance nights.",
        "Go with curiosity, not pressure to find 'the one' tonight.",
        "Follow up with people you clicked with — exchange details on the spot.",
      ],
    },
    activeHolidays: {
      title: "Trip tips",
      items: [
        "Check fitness level labels before booking hiking or ski trips.",
        "Shared rooms cost less — read privacy notes carefully.",
        "Singles trips attract mixed ages — verify age bands on the listing.",
        "Travel insurance and cancellation terms matter for outdoor trips.",
      ],
    },
    hikingGroups: {
      title: "Outdoor tips",
      items: [
        "Confirm train meeting points — Dutch groups start punctually.",
        "Bring waterproof layers year-round.",
        "Introduce yourself to the organiser on arrival.",
        "Repeat the same group monthly to recognise faces.",
      ],
    },
    sportsClubs: {
      title: "Sports tips",
      items: [
        "Ask about proefles or intro courses before committing.",
        "Team sports and partner sports create faster bonds than solo gym.",
        "Post-training borrel drinks are common — stay for one if invited.",
        "Municipal sport pages list affordable clubs via NOC*NSF networks.",
      ],
    },
    languageExchanges: {
      title: "Language tips",
      items: [
        "Alternate languages fairly — 30 minutes each is a common split.",
        "Language cafés are less awkward than one-on-one for beginners.",
        "Universities host public conversation tables in student cities.",
        "Dutch practice signals long-term intent — locals notice.",
      ],
    },
    volunteering: {
      title: "Volunteer tips",
      items: [
        "Weekly shifts beat one-off festival days for friendships.",
        "Food banks and animal shelters need reliable schedules.",
        "Festival volunteering is social but episodic — pair with a weekly route.",
        "Check Vrijwilligerswerk.nl and gemeente listings.",
      ],
    },
    expatCommunities: {
      title: "Expat balance",
      items: [
        "InterNations and AIC offer large welcome events.",
        "Meetup spans every niche — filter by city and language.",
        "Facebook groups share last-minute social plans.",
        "Balance expat orientation with one local club.",
      ],
    },
    socialClubs: {
      title: "Club tips",
      items: [
        "Board-game cafés host weekly open tables in major cities.",
        "Book clubs and choirs welcome newcomers mid-season.",
        "Photography walks combine creativity and conversation.",
        "Entrepreneur meetups mix networking and social life.",
      ],
    },
    safety: {
      title: "Safety essentials",
      items: [
        "Meet in public places for first dates.",
        "Tell a friend where you are and share live location if comfortable.",
        "Never send money or gift cards to online matches.",
        "Trust discomfort — leaving early is always OK.",
      ],
    },
    lgbtq: {
      title: "Inclusive routes",
      items: [
        "HER and Grindr remain common starting points — verify profiles.",
        "Lex supports queer women and non-binary communities.",
        "Pride season brings large open social calendars.",
        "COC and local queer centres list events and support.",
      ],
    },
    cityComparison: {
      title: "City choice",
      items: [
        "Amsterdam has the largest international dating pool.",
        "Rotterdam and Utrecht offer strong club and event scenes.",
        "University cities skew younger and more English-friendly.",
        "Smaller cities reward hobby clubs over app volume.",
      ],
    },
    mistakes: {
      title: "Adjust strategy",
      items: [
        "Add one weekly activity if apps feel stale.",
        "Invite someone to coffee — waiting to be invited slows progress.",
        "Learn ten Dutch phrases for charm and integration.",
        "Expand beyond expat-only circles when ready.",
      ],
    },
    meetMethods: {
      title: "Combine methods",
      items: [
        "High-repeat methods: sports, volunteering, language class.",
        "Wide-reach methods: apps, singles events, expat mixers.",
        "Best outcomes often blend one of each.",
        "Revisit the matrix every few months.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Community Basics for friendship routes.",
        "Read Dutch Social Norms for etiquette context on dates.",
        "City guides compare neighbourhoods and social life.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Dating (this page) → meeting people orientation",
        "Community Basics → clubs, neighbours, integration",
        "Dutch Social Norms → etiquette on dates and visits",
        "Cities hub → compare pools and events by city",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need friends broadly → Community Basics",
        "Need etiquette context → Dutch Social Norms",
        "Want Dutch phrases → Language hub",
        "Want recurring social rhythm → Volunteering",
      ],
    },
  },
  quickAnswer: {
    heading: "Is Dating Easy in the Netherlands?",
    summary:
      "Dating can initially feel challenging for newcomers because many Dutch people already have established social circles. However, there are many opportunities through apps, hobbies, sports, expat groups, volunteering, language exchanges, outdoor clubs, singles holidays and professional communities.",
    bullets: [
      "Activity-first social life often works better than waiting for spontaneous connections.",
      "English is widely spoken in cities — Dutch effort still helps for deeper bonds.",
      "Direct communication is common — ask what someone wants rather than guessing.",
      "Combine one app with one recurring in-person activity for best results.",
      "Safety and realistic expectations matter on every platform and event.",
    ],
    note:
      "Start with one dating app and one weekly activity (sport, hike or language café) — give both at least six weeks before changing strategy.",
  },
  snapshotSignals: [
    { label: "English", value: "Widely spoken", note: "Especially in Randstad cities" },
    { label: "Internationals", value: "Large expat pool", note: "Amsterdam, Rotterdam, The Hague" },
    { label: "Direct", value: "Clear communication", note: "Ask about intentions early" },
    { label: "Activities", value: "Strong hobby culture", note: "Clubs beat app-only strategies" },
  ] satisfies SnapshotSignal[],
  snapshotMilestones: [
    { label: "First dates", value: "Coffee or drinks", note: "Public places are the norm" },
    { label: "Bill splitting", value: "Often split or Tikkie", note: "Confirm payment early" },
    { label: "Exclusivity", value: "Often discussed", note: "Don't assume silence means casual" },
    { label: "Meeting friends", value: "Can happen early", note: "Group borrels are common" },
  ] satisfies SnapshotMilestone[],
  orientationFlowSteps: [
    "Week 1: set up one app profile and browse Meetup or sports trial sessions.",
    "Week 2: attend one singles event, language café or club intro.",
    "Month 1: repeat one weekly activity and schedule two low-pressure coffee dates.",
  ],
  snapshotCards: [
    { title: "English widely spoken", body: "Especially in international workplaces and major cities — still learn basic Dutch over time." },
    { title: "Many internationals", body: "Large expat communities in Amsterdam, Rotterdam, The Hague and Eindhoven." },
    { title: "Direct communication", body: "People often say what they mean — clarity about intentions is normal." },
    { title: "Active app usage", body: "Tinder, Bumble and Hinge are common — Dutch platforms add local flavour." },
    { title: "Strong hobby culture", body: "Sports clubs and verenigingen are a primary adult social route." },
    { title: "Activities beat waiting", body: "Recurring hobbies create familiarity — often better than endless swiping." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two snapshot signals to act on this month.",
    "Compare app usage in your city via local Facebook groups.",
    "Ask one colleague how they met their partner or friends.",
    "Revisit after three months — your best channel may surprise you.",
  ],
  introExpatQuestions: [
    { title: "Is dating harder as an expat?", body: "Circles are often established — apps and activities bridge the gap. Patience plus consistency helps." },
    { title: "Do Dutch people date expats?", body: "Yes, especially in international cities — shared interests matter more than passport." },
    { title: "Should I learn Dutch?", body: "Not required to start dating in cities — Dutch effort is appreciated for long-term relationships." },
    { title: "Apps or events first?", body: "Use both — apps for reach, events and clubs for repeat contact and natural conversation." },
  ] satisfies TipCard[],
  introParagraphs: [
    "Moving to the Netherlands as a single expat, student or professional often means rebuilding your social circle from scratch. Dating apps are popular, but many lasting connections form through sports clubs, hiking groups, volunteering, language exchanges and singles events — the same activity-first pattern that shapes Dutch social life more broadly.",
    "This guide explains Dutch dating culture without stereotypes, lists mainstream and lesser-known platforms, and maps practical routes to meet people across cities. For everyday etiquette on dates and visits, pair this page with our Dutch Social Norms and Community Basics guides.",
  ],
  dutchCultureHeading: "What Dating Is Like",
  dutchCultureParagraphs: [
    "Dutch dating culture often values directness, equality and independence. People may discuss intentions clearly, split costs fairly and maintain their own friend circles while dating. Pacing varies — some relationships move quickly to exclusivity; others stay casual longer. Individuals differ widely by age, city and background.",
    "Meeting friends or attending borrels (informal drinks) can happen relatively early compared with some cultures. Family introductions usually come later. Avoid assuming one 'Dutch type' — international cities especially blend many norms.",
  ],
  dutchCultureLinks: [
    {
      label: "Dutch Social Norms",
      href: DUTCH_SOCIAL_NORMS_PATH,
      description: "Bill splitting, punctuality, visiting and direct communication beyond the dating context.",
    },
    {
      label: "Language Learning",
      href: LANGUAGE_LEARNING_PATH,
      description: "Dutch phrases that help on dates and in local social circles.",
    },
  ] satisfies LifeGuideLink[],
  dutchCultureTopics: [
    { topic: "Direct communication", detail: "Clear yes/no and feedback — ask rather than decode silence." },
    { topic: "Splitting bills", detail: "Tikkie and itemised splits are everyday — offer to pay your share." },
    { topic: "Independence", detail: "Separate plans and friend time remain normal while dating." },
    { topic: "Exclusivity", detail: "Define 'dating' vs 'relationship' — assumptions cause friction." },
    { topic: "Meeting friends", detail: "Group borrels are common — low-pressure way to enter someone's circle." },
    { topic: "Family introductions", detail: "Often later stage — don't read delay as lack of interest." },
  ] satisfies Array<{ topic: string; detail: string }>,
  dutchDatePhrases: [
    { situation: "Suggest a drink", dutch: "Zin in een biertje of koffie?", english: "Fancy a beer or coffee?", note: "Low-pressure first-meet opener." },
    { situation: "Express interest", dutch: "Ik vind je leuk.", english: "I like you.", note: "Direct and common — not overly dramatic here." },
    { situation: "Ask about intentions", dutch: "Wat zoek je hier?", english: "What are you looking for here?", note: "Clarifying casual vs serious is normal." },
    { situation: "Split the bill", dutch: "Zullen we splitten?", english: "Shall we split?", note: "Or offer: 'Ik betaal mijn deel.' (I'll pay my share.)" },
    { situation: "Send a Tikkie", dutch: "Ik stuur je een Tikkie.", english: "I'll send you a Tikkie.", note: "Everyday payment app for splitting costs." },
    { situation: "Plan ahead", dutch: "Heb je volgende week tijd?", english: "Do you have time next week?", note: "Calendars fill early — propose concrete dates." },
    { situation: "Meet friends", dutch: "Kom je naar de borrel?", english: "Will you come to the borrel?", note: "Informal drinks with a friend group." },
    { situation: "Polite decline", dutch: "Ik denk dat we niet zo'n match zijn.", english: "I don't think we're such a match.", note: "Direct but not necessarily harsh." },
  ] satisfies Array<{ situation: string; dutch: string; english: string; note: string }>,
  firstDateEtiquetteChecklist: [
    "Confirm time and place the day before — punctuality matters.",
    "Pick a public café or bar you can leave easily if needed.",
    "Offer to split or pay your share — don't assume one person covers everything.",
    "Ask what they're looking for if signals feel unclear — direct beats guessing.",
    "Keep first meets to 60–90 minutes unless chemistry is obvious.",
    "Follow up within a few days if you want a second date — waiting weeks reads as disinterest.",
  ],
  datingAppsHeading: "Popular Dating Apps",
  datingAppsIntro:
    "Mainstream global apps dominate in cities, while Dutch-founded platforms offer local meeting styles. Choose based on city density, age range and whether you prefer chat-first or meet-in-person flows.",
  datingApps: [
    {
      name: "Tinder",
      audience: "Broad, casual to serious",
      ageRange: "18–45+",
      strengths: "Largest pool in cities",
      pricing: "Free; Plus/Gold paid",
      bestCities: "Amsterdam, Rotterdam, Utrecht",
      website: "https://tinder.com/",
      partnerSlug: "tinder",
      ctaLabel: "Try Tinder",
      isAffiliate: true,
    },
    {
      name: "Bumble",
      audience: "Women message first",
      ageRange: "22–40",
      strengths: "Professional and creative crowd",
      pricing: "Free; Premium paid",
      bestCities: "Randstad cities",
      website: "https://bumble.com/",
      partnerSlug: "bumble",
      ctaLabel: "Try Bumble",
      isAffiliate: true,
    },
    {
      name: "Hinge",
      audience: "Relationship-oriented",
      ageRange: "25–40",
      strengths: "Prompts encourage conversation",
      pricing: "Free; Preferred paid",
      bestCities: "Amsterdam, Utrecht, The Hague",
      website: "https://hinge.co/",
      partnerSlug: "hinge",
      ctaLabel: "Try Hinge",
      isAffiliate: true,
    },
    {
      name: "Inner Circle",
      audience: "Professionals",
      ageRange: "25–45",
      strengths: "Events plus app; Amsterdam roots",
      pricing: "Free; membership tiers",
      bestCities: "Amsterdam (strongest), Rotterdam",
      featured: true,
      website: "https://www.theinnercircle.co/",
      partnerSlug: "inner-circle",
      ctaLabel: "Try Inner Circle",
      isAffiliate: true,
    },
    {
      name: "Breeze",
      audience: "Meet in person fast",
      ageRange: "25–40",
      strengths: "Dutch app — dates over endless chat",
      pricing: "Free with paid features",
      bestCities: "Amsterdam, Utrecht",
      featured: true,
      website: "https://www.breeze.social/",
      partnerSlug: "breeze",
      ctaLabel: "Try Breeze",
      isAffiliate: true,
    },
    {
      name: "Badoo",
      audience: "Broad international",
      ageRange: "20–45",
      strengths: "Large user base",
      pricing: "Free; Premium paid",
      bestCities: "Nationwide",
      website: "https://badoo.com/nl/",
      partnerSlug: "badoo",
      ctaLabel: "Try Badoo",
      isAffiliate: true,
    },
    {
      name: "Lexa",
      audience: "Dutch long-form dating",
      ageRange: "30–55+",
      strengths: "Established NL platform",
      pricing: "Subscription",
      bestCities: "Nationwide",
      featured: true,
      website: "https://www.lexa.nl/",
      partnerSlug: "lexa",
      ctaLabel: "Try Lexa",
      isAffiliate: true,
    },
    {
      name: "Paiq",
      audience: "Guided matching",
      ageRange: "25–50",
      strengths: "Dutch matching with events",
      pricing: "Paid plans",
      bestCities: "Randstad",
      featured: true,
      website: "https://www.paiq.nl/",
      partnerSlug: "paiq",
      ctaLabel: "Try Paiq",
      isAffiliate: true,
    },
    {
      name: "Parship",
      audience: "Serious relationships",
      ageRange: "30–55+",
      strengths: "Personality matching",
      pricing: "Subscription",
      bestCities: "Nationwide",
      website: "https://www.parship.nl/",
      partnerSlug: "parship",
      ctaLabel: "Try Parship",
      isAffiliate: true,
    },
    {
      name: "EliteSingles",
      audience: "Educated professionals",
      ageRange: "30–50",
      strengths: "Compatibility focus",
      pricing: "Subscription",
      bestCities: "Major cities",
      website: "https://www.elitedating.nl/",
      partnerSlug: "elitesingles",
      ctaLabel: "Try EliteSingles",
      isAffiliate: true,
    },
    {
      name: "Happn",
      audience: "Crossed paths locally",
      ageRange: "22–38",
      strengths: "Location-based serendipity",
      pricing: "Free; Premium paid",
      bestCities: "Dense urban areas",
      website: "https://www.happn.com/",
      partnerSlug: "happn",
      ctaLabel: "Try Happn",
      isAffiliate: true,
    },
    {
      name: "Feeld",
      audience: "Alternative relationships",
      ageRange: "25–45",
      strengths: "Inclusive preferences",
      pricing: "Free; Majestic paid",
      bestCities: "Amsterdam, Rotterdam",
      website: "https://feeld.co/",
      partnerSlug: "feeld",
      ctaLabel: "Try Feeld",
      isAffiliate: true,
    },
    {
      name: "HER",
      audience: "Queer women & non-binary",
      ageRange: "20–40",
      strengths: "Community and events",
      pricing: "Free; Premium paid",
      bestCities: "Amsterdam, Utrecht",
      website: "https://www.weareher.com/",
      partnerSlug: "her",
      ctaLabel: "Try HER",
      isAffiliate: true,
    },
    {
      name: "Grindr",
      audience: "Gay, bi, trans men",
      ageRange: "18–45+",
      strengths: "Large LGBTQ+ pool",
      pricing: "Free; Xtra paid",
      bestCities: "All major cities",
      website: "https://www.grindr.com/",
      partnerSlug: "grindr",
      ctaLabel: "Try Grindr",
      isAffiliate: true,
    },
  ] satisfies DatingApp[],
  appProfileChecklist: [
    "Use 3–5 recent photos — group shots and sunglasses-heavy profiles get fewer replies.",
    "Write one clear intent line (casual, relationship, new in town).",
    "Mention your city neighbourhood — hyperlocal matches save travel time.",
    "Add one hobby hook (hiking, padel, language café) to invite conversation.",
    "Avoid listing only travel photos — show everyday life in the Netherlands.",
    "Set realistic age and distance filters — tiny pools frustrate both sides.",
    "Report fake or aggressive profiles through the app — don't engage.",
  ],
  breezeFeatured: {
    title: "Why Breeze stands out",
    body: "Breeze is a Dutch-founded app designed to move matches offline quickly — curated date venues instead of weeks of messaging. Popular among professionals in Amsterdam and Utrecht who prefer structured first meetings.",
    tips: [
      "Pick times you can actually make — no-shows hurt your rating.",
      "Treat it as a coffee meet, not a guaranteed match.",
      "Works best if you already like direct, low-chat dating.",
    ],
    website: "https://www.breeze.social/",
    partnerSlug: "breeze",
    ctaLabel: "Try Breeze",
    isAffiliate: true,
  } satisfies FeaturedSpotlight,
  innerCircleFeatured: {
    title: "Why Inner Circle fits professionals",
    body: "Amsterdam-founded Inner Circle blends app matching with offline events — useful if you want a screened crowd and in-person mixers alongside swiping. Strongest pool in Amsterdam; still active in Rotterdam and Utrecht.",
    tips: [
      "Complete the profile verification steps — incomplete profiles rank lower.",
      "Attend one event per month even if you are also swiping.",
      "Event conversations often convert to dates faster than cold app opens.",
    ],
    website: "https://www.theinnercircle.co/",
    partnerSlug: "inner-circle",
    ctaLabel: "Try Inner Circle",
    isAffiliate: true,
  } satisfies FeaturedSpotlight,
  hiddenGemsHeading: "Hidden Gems",
  hiddenGemsParagraphs: [
    "Beyond global apps, Dutch platforms and dining clubs attract locals who want structured social contact. Neighbourhood Facebook groups and gemeente event calendars list small gatherings newcomers miss.",
  ],
  hiddenGems: [
    {
      title: "Breeze",
      body: "In-person date scheduling — see dating apps section.",
      website: "https://www.breeze.social/",
      partnerSlug: "breeze",
      ctaLabel: "Try Breeze",
      isAffiliate: true,
    },
    {
      title: "Paiq",
      body: "Dutch matching with offline events — less swipe fatigue.",
      website: "https://www.paiq.nl/",
      partnerSlug: "paiq",
      ctaLabel: "Try Paiq",
      isAffiliate: true,
    },
    {
      title: "Lexa",
      body: "Long-running Dutch site — skews 30+ and relationship-focused.",
      website: "https://www.lexa.nl/",
      partnerSlug: "lexa",
      ctaLabel: "Try Lexa",
      isAffiliate: true,
    },
    { title: "Table for 7 / dining clubs", body: "Rotating group dinners with strangers — check local organisers in Amsterdam and Rotterdam." },
    { title: "Nieuwe Mensen Leren Kennen", body: "Community groups aimed at meeting new people — search by city on Facebook." },
    { title: "Neighbourhood clubs", body: "Buurtcentrum boards and library bulletins list low-cost socials." },
  ] satisfies Array<TipCard & OptionalOutboundLinkMeta>,
  hiddenGemsSearchTips: [
    "Search Facebook for 'nieuwe mensen [city]' and 'singles [city]'.",
    "Check buurtcentrum and library bulletin boards for low-cost socials.",
    "Ask colleagues where they met people — referrals beat random app trials.",
    "Try one Dutch platform (Lexa, Paiq, Breeze) before dismissing the local market.",
  ],
  singlesEventsHeading: "Singles Events",
  singlesEventsIntro:
    "Organised singles events range from speed dating and wine tastings to dance evenings and boat socials. Verify age ranges, dress codes and refund policies on the organiser site before booking.",
  singlesEvents: [
    {
      name: "Original Dating",
      audience: "English-speaking professionals",
      ageRange: "28–45",
      typicalCost: "€25–€45",
      cities: "Amsterdam, Rotterdam",
      note: "Speed dating and themed nights.",
      website: "https://www.originaldating.com/",
      partnerSlug: "original-dating",
      ctaLabel: "Browse events",
      isAffiliate: true,
    },
    {
      name: "Single Event",
      audience: "Mixed Dutch/international",
      ageRange: "25–55",
      typicalCost: "€20–€40",
      cities: "Nationwide listings",
      note: "Parties, dinners and activity dates.",
      website: "https://www.singleevent.nl/",
      partnerSlug: "single-event",
      ctaLabel: "Browse events",
      isAffiliate: true,
    },
    {
      name: "Meet5",
      audience: "Small group dining",
      ageRange: "25–50",
      typicalCost: "Meal cost",
      cities: "Major cities",
      note: "Five strangers at a restaurant table.",
      website: "https://www.meet5.nl/",
      partnerSlug: "meet5",
      ctaLabel: "Book a table",
      isAffiliate: true,
    },
    {
      name: "AIC International",
      audience: "Expats and internationals",
      ageRange: "25–45",
      typicalCost: "€15–€35",
      cities: "Amsterdam, The Hague",
      note: "Socials and singles-oriented mixers.",
      website: "https://www.amsterdaminternationalcommunity.nl/",
      partnerSlug: "aic-amsterdam",
      ctaLabel: "See events",
      isAffiliate: false,
    },
    {
      name: "FunX / local promoters",
      audience: "Urban nightlife crowd",
      ageRange: "21–35",
      typicalCost: "€10–€25",
      cities: "Amsterdam, Rotterdam",
      note: "Check listings — themes vary by season.",
      website: "https://www.funx.nl/",
      partnerSlug: "funx",
      ctaLabel: "Check listings",
      isAffiliate: false,
    },
    {
      name: "Wine tastings",
      audience: "Food and drink enthusiasts",
      ageRange: "28–50",
      typicalCost: "€30–€60",
      cities: "Amsterdam, Utrecht",
      note: "Liquor stores and event venues host singles nights.",
      website: "https://www.meetup.com/find/?keywords=wine%20tasting%20singles",
      partnerSlug: "meetup",
      ctaLabel: "Search Meetup",
      isAffiliate: false,
    },
    {
      name: "Cooking classes",
      audience: "Hands-on social learners",
      ageRange: "25–45",
      typicalCost: "€45–€80",
      cities: "Major cities",
      note: "Pair cooking with natural conversation.",
      website: "https://www.meetup.com/find/?keywords=cooking%20class%20singles",
      partnerSlug: "meetup",
      ctaLabel: "Search Meetup",
      isAffiliate: false,
    },
    {
      name: "Amsterdam singles cruises / canal socials",
      audience: "Tourists and locals",
      ageRange: "25–40",
      typicalCost: "€25–€50",
      cities: "Amsterdam",
      note: "Seasonal — book via event platforms.",
      website: "https://www.meetup.com/find/?location=nl--amsterdam&keywords=singles%20cruise",
      partnerSlug: "meetup",
      ctaLabel: "Search Meetup",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  eventTypeCards: [
    { title: "Speed dating", body: "Fast introductions — best if you want many short chats in one evening. Original Dating and similar organisers run English-friendly nights." },
    { title: "Wine & food tastings", body: "Standing conversation with a shared activity — less awkward than staring across a table for hours." },
    { title: "Dance evenings", body: "Higher energy — good if movement helps you relax; verify dress code and age band on the listing." },
    { title: "Activity dates (cooking, crafts)", body: "Hands-on tasks create natural pauses — strong for people who dislike small-talk pressure." },
    { title: "Expat mixers", body: "Large welcome-style events — wide reach, lower depth; use for practice and follow-up coffee invites." },
  ] satisfies TipCard[],
  singlesEventFollowUpChecklist: [
    "Exchange numbers or Instagram at the event — waiting days loses momentum.",
    "Send one specific follow-up ('Nice talking about hiking — coffee Tuesday?').",
    "If someone declines, move on — events are about volume and practice.",
    "Book the next event before you judge the first one a failure.",
  ],
  activeHolidaysHeading: "Active Holidays for Singles",
  activeHolidaysParagraphs: [
    "Group adventure trips attract solo travellers and singles without forcing matchmaking. Shared hikes, bike tours and ski weeks create natural repeat contact. Read fitness grades, single-room supplements and cancellation policies carefully.",
  ],
  activeTrips: [
    {
      name: "VillaVibes",
      audience: "Active singles 28–45",
      ageRange: "28–45",
      typicalCost: "€400–€900+",
      cities: "Trips from NL",
      note: "Active singles holidays — hiking, surf, yoga.",
      website: "https://www.villavibes.nl/",
      partnerSlug: "villavibes",
      ctaLabel: "Browse trips",
      isAffiliate: true,
    },
    {
      name: "SNP Natuurreizen",
      audience: "Nature walkers",
      ageRange: "30–65+",
      typicalCost: "€500–€1,200",
      cities: "Departures Netherlands",
      note: "Guided hiking holidays across Europe.",
      website: "https://www.snp.nl/",
      partnerSlug: "snp-natuurreizen",
      ctaLabel: "Browse trips",
      isAffiliate: false,
    },
    {
      name: "Djoser Singles",
      audience: "Group adventure travellers",
      ageRange: "25–55",
      typicalCost: "€800–€2,000",
      cities: "Amsterdam departures",
      note: "Singles departures on group tours.",
      website: "https://www.djoser.nl/",
      partnerSlug: "djoser",
      ctaLabel: "Browse singles trips",
      isAffiliate: false,
    },
    {
      name: "Sawadee Singles",
      audience: "Backpacker-style groups",
      ageRange: "23–45",
      typicalCost: "€700–€1,800",
      cities: "Nationwide",
      note: "Singles weeks on adventure routes.",
      website: "https://www.sawadee.nl/",
      partnerSlug: "sawadee",
      ctaLabel: "Browse singles trips",
      isAffiliate: false,
    },
    {
      name: "Shoestring",
      audience: "Budget group travel",
      ageRange: "22–40",
      typicalCost: "€400–€1,000",
      cities: "Amsterdam",
      note: "Young traveller groups — verify age band.",
      website: "https://www.shoestring.com/",
      partnerSlug: "shoestring",
      ctaLabel: "Browse trips",
      isAffiliate: false,
    },
    {
      name: "TravelActive",
      audience: "Outdoor enthusiasts",
      ageRange: "25–50",
      typicalCost: "€350–€900",
      cities: "NL departures",
      note: "Cycling, hiking and multi-sport weekends.",
      website: "https://www.travelactive.nl/",
      partnerSlug: "travelactive",
      ctaLabel: "Browse trips",
      isAffiliate: false,
    },
    {
      name: "Mountain Network",
      audience: "Hikers and climbers",
      ageRange: "25–55",
      typicalCost: "€300–€800",
      cities: "Benelux trips",
      note: "Alpine and local mountain weekends.",
      website: "https://www.mountainnetwork.nl/",
      partnerSlug: "mountain-network",
      ctaLabel: "Browse trips",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  activeHolidayActivities: [
    "Hiking weekends in Ardennes or Eifel from Dutch cities.",
    "Cycling tours in Limburg and Zeeland.",
    "Ski weeks via organised singles departures.",
    "Kayaking and coastal walks in summer programmes.",
  ],
  activeHolidayBookingChecklist: [
    "Read fitness grade labels — 'moderate' Dutch hikes can still be long days.",
    "Check single-room supplements vs shared twin rooms.",
    "Confirm cancellation and travel insurance terms before paying.",
    "Pack layers — Dutch group trips often start early regardless of weather.",
    "Treat trips as social practice — romance is a bonus, not the contract.",
  ],
  hikingHeading: "Meet People Outdoors",
  hikingParagraphs: [
    "Hiking groups are among the lowest-pressure ways to meet people — conversation flows while walking. Meetup, NKBV clubs, expat hiking communities and gemeente nature projects all offer entry points.",
  ],
  hikingGroups: [
    {
      name: "Meetup hiking groups",
      audience: "Mixed expat/local",
      ageRange: "All ages",
      typicalCost: "Free–€15",
      cities: "All major cities",
      note: "Search 'hiking Amsterdam' or your city.",
      website: "https://www.meetup.com/find/?keywords=hiking&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find hikes",
      isAffiliate: false,
    },
    {
      name: "NKBV",
      audience: "Mountaineering & hiking members",
      ageRange: "18–70+",
      typicalCost: "Membership + trips",
      cities: "Nationwide sections",
      note: "Dutch mountaineering club — training and trips.",
      website: "https://www.nkbv.nl/",
      partnerSlug: "nkbv",
      ctaLabel: "Find a section",
      isAffiliate: false,
    },
    {
      name: "Dutch Hikers / walking clubs",
      audience: "Day hikers",
      ageRange: "30–65+",
      typicalCost: "Low membership",
      cities: "Regional clubs",
      note: "Sunday walks common.",
      website: "https://www.wandelnet.nl/",
      partnerSlug: "wandelnet",
      ctaLabel: "Browse routes",
      isAffiliate: false,
    },
    {
      name: "Expat hiking clubs",
      audience: "English-speaking walkers",
      ageRange: "25–50",
      typicalCost: "Free–€10",
      cities: "Amsterdam, Utrecht, Maastricht",
      note: "Facebook and Meetup listings.",
      website: "https://www.meetup.com/find/?keywords=expat%20hiking&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find groups",
      isAffiliate: false,
    },
    {
      name: "Nature volunteer projects",
      audience: "Conservation volunteers",
      ageRange: "18+",
      typicalCost: "Free",
      cities: "Regional",
      note: "Staatsbosbeheer and local green groups.",
      website: "https://www.staatsbosbeheer.nl/",
      partnerSlug: "staatsbosbeheer",
      ctaLabel: "Volunteer outdoors",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  hikingPackChecklist: [
    "Waterproof jacket — Dutch weather shifts within one walk.",
    "Trainers with grip — mud on forest paths is common autumn–spring.",
    "Train ticket to meeting point — groups rarely wait for latecomers.",
    "Small cash for café stops in villages without card terminals.",
    "Introduce yourself to the organiser — they often know regulars who can buddy you.",
  ],
  sportsHeading: "Sports Are One of the Best Ways to Meet People",
  sportsParagraphs: [
    "Recurring training creates familiarity — why sports clubs outperform one-off parties for meaningful connection. Ask about proefles trial lessons before joining. NOC*NSF-affiliated clubs span almost every sport.",
  ],
  sports: [
    {
      name: "Running clubs",
      audience: "All levels",
      ageRange: "20–55",
      typicalCost: "Free–€10/session",
      cities: "Nationwide",
      note: "Parkrun (free) plus city run groups.",
      website: "https://www.parkrun.nl/",
      partnerSlug: "parkrun",
      ctaLabel: "Find Parkrun",
      isAffiliate: false,
    },
    {
      name: "Padel",
      audience: "Fast-growing social sport",
      ageRange: "25–45",
      typicalCost: "€15–€35/court",
      cities: "Randstad boom",
      note: "Doubles format — easy to join as single player.",
      website: "https://www.padel.nl/",
      partnerSlug: "padel-nl",
      ctaLabel: "Find courts",
      isAffiliate: false,
    },
    {
      name: "CrossFit / HYROX",
      audience: "Fitness communities",
      ageRange: "22–40",
      typicalCost: "Membership",
      cities: "Major cities",
      note: "Box culture is strongly social.",
      website: "https://www.meetup.com/find/?keywords=crossfit&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Search groups",
      isAffiliate: false,
    },
    {
      name: "Climbing / bouldering",
      audience: "Indoor climbers",
      ageRange: "20–40",
      typicalCost: "Day pass or membership",
      cities: "Urban centres",
      note: "Partner finding boards at gyms.",
      website: "https://www.meetup.com/find/?keywords=bouldering&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Search groups",
      isAffiliate: false,
    },
    {
      name: "Rowing clubs",
      audience: "Team water sport",
      ageRange: "18–45",
      typicalCost: "Club fees",
      cities: "Canal cities",
      note: "Intro weeks in spring.",
      website: "https://www.nocnsf.nl/",
      partnerSlug: "nocnsf",
      ctaLabel: "Find clubs",
      isAffiliate: false,
    },
    {
      name: "Cycling clubs",
      audience: "Road and touring riders",
      ageRange: "25–60+",
      typicalCost: "Club membership",
      cities: "Nationwide",
      note: "Weekend group rides.",
      website: "https://www.nocnsf.nl/",
      partnerSlug: "nocnsf",
      ctaLabel: "Find clubs",
      isAffiliate: false,
    },
    {
      name: "Dance classes",
      audience: "Salsa, bachata, swing",
      ageRange: "22–45",
      typicalCost: "€10–€20/class",
      cities: "Major cities",
      note: "Partner rotation in class.",
      website: "https://www.meetup.com/find/?keywords=salsa%20dance&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Search classes",
      isAffiliate: false,
    },
    {
      name: "Martial arts",
      audience: "Discipline-focused groups",
      ageRange: "18–50",
      typicalCost: "Membership",
      cities: "Nationwide",
      note: "Strong cohort bonding.",
      website: "https://www.nocnsf.nl/",
      partnerSlug: "nocnsf",
      ctaLabel: "Find clubs",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  sportsProeflesSteps: [
    "Search gemeente sport pages or nocnsf.nl for affiliated clubs near you.",
    "Email or call for a proefles (trial lesson) — many clubs offer free or €10 intros.",
    "Attend three sessions before deciding — one night is not enough to judge fit.",
    "Stay for post-training borrel if offered — that's where names become faces.",
    "Ask if they need substitute players — padel and team sports welcome singles.",
  ],
  languageHeading: "Learn Dutch & Meet People",
  languageParagraphs: [
    "Language exchanges attract internationals and Dutch locals curious about other cultures. Cafés, universities and Meetup host weekly tables — lower pressure than formal speed dating.",
  ],
  languageExchanges: [
    {
      name: "Language cafés",
      audience: "Mixed levels",
      ageRange: "20–45",
      typicalCost: "Free–€5",
      cities: "Amsterdam, Utrecht, Groningen",
      note: "Rotating conversation tables.",
      website: "https://www.meetup.com/find/?keywords=language%20exchange&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find cafés",
      isAffiliate: false,
    },
    {
      name: "Meetup language groups",
      audience: "Self-organised",
      ageRange: "All",
      typicalCost: "Free",
      cities: "All cities",
      note: "Search Dutch/English exchange.",
      website: "https://www.meetup.com/find/?keywords=dutch%20english%20exchange&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Browse groups",
      isAffiliate: false,
    },
    {
      name: "Tandem apps",
      audience: "One-on-one practice",
      ageRange: "18+",
      typicalCost: "Free",
      cities: "Online + local meets",
      note: "Set public meeting places.",
      website: "https://www.tandem.net/",
      partnerSlug: "tandem",
      ctaLabel: "Try Tandem",
      isAffiliate: true,
    },
    {
      name: "University language centres",
      audience: "Students and public courses",
      ageRange: "18+",
      typicalCost: "Course fees",
      cities: "Student cities",
      note: "Evening classes and socials.",
      website: "https://www.studyinnl.org/",
      partnerSlug: "study-in-nl",
      ctaLabel: "Explore courses",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  languageExchangeEtiquette: [
    { tip: "Split time fairly", detail: "30 minutes Dutch, 30 minutes English is a common café format." },
    { tip: "Public first tandem meet", detail: "Meet at a café — not at home — until you trust someone." },
    { tip: "Correct gently", detail: "Ask partners to correct your Dutch — locals appreciate effort, not perfection." },
    { tip: "Bring a notebook", detail: "Jot down phrases you hear on dates and social nights." },
    { tip: "Follow up on shared interests", detail: "If someone mentions a club or event, invite them to join you there." },
  ] satisfies Array<{ tip: string; detail: string }>,
  volunteeringHeading: "Volunteer Communities",
  volunteeringParagraphs: [
    "Weekly volunteering creates familiar faces and shared purpose — often stronger for integration than sporadic nightlife. Check Vrijwilligerswerk.nl and gemeente portals.",
  ],
  volunteeringOptions: [
    {
      name: "Animal shelters",
      audience: "Animal lovers",
      ageRange: "18+",
      typicalCost: "Free time",
      cities: "Regional",
      note: "Dog walking shifts popular.",
      website: "https://www.vrijwilligerswerk.nl/",
      partnerSlug: "vrijwilligerswerk",
      ctaLabel: "Find roles",
      isAffiliate: false,
    },
    {
      name: "Food banks (Voedselbank)",
      audience: "Community support",
      ageRange: "18+",
      typicalCost: "Free",
      cities: "Nationwide",
      note: "Warehouse and delivery roles.",
      website: "https://www.vrijwilligerswerk.nl/",
      partnerSlug: "vrijwilligerswerk",
      ctaLabel: "Find roles",
      isAffiliate: false,
    },
    {
      name: "Festivals",
      audience: "Event volunteers",
      ageRange: "18+",
      typicalCost: "Free (often ticket perks)",
      cities: "Seasonal",
      note: "Social but short-term.",
      website: "https://www.vrijwilligerswerk.nl/",
      partnerSlug: "vrijwilligerswerk",
      ctaLabel: "Find roles",
      isAffiliate: false,
    },
    {
      name: "Nature conservation",
      audience: "Outdoor volunteers",
      ageRange: "16+",
      typicalCost: "Free",
      cities: "Regional parks",
      note: "Weekend planting and cleanup.",
      website: "https://www.staatsbosbeheer.nl/",
      partnerSlug: "staatsbosbeheer",
      ctaLabel: "Volunteer outdoors",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  volunteeringStarterChecklist: [
    "Pick one weekly shift — food bank or animal shelter beats one-off festival days for friendships.",
    "Register on Vrijwilligerswerk.nl and filter by your city and English-friendly roles.",
    "Tell the coordinator you are new — they often introduce you to regular volunteers.",
    "Pair volunteering with one social app or club so you are not only giving time.",
  ],
  expatHeading: "International Communities",
  expatParagraphs: [
    "Expat networks offer fast orientation — balance them with local clubs so your circle is not only international. InterNations, AIC, Meetup and city Facebook groups are common starting points.",
  ],
  expatCommunities: [
    {
      name: "InterNations",
      audience: "Professionals abroad",
      ageRange: "25–55",
      typicalCost: "Free–paid events",
      cities: "Major cities",
      note: "Large welcome events monthly.",
      website: "https://www.internations.org/",
      partnerSlug: "internations",
      ctaLabel: "Join InterNations",
      isAffiliate: true,
    },
    {
      name: "AIC (Amsterdam International Community)",
      audience: "Internationals in Amsterdam area",
      ageRange: "25–45",
      typicalCost: "Event fees",
      cities: "Amsterdam region",
      note: "Social and singles mixers.",
      website: "https://www.amsterdaminternationalcommunity.nl/",
      partnerSlug: "aic-amsterdam",
      ctaLabel: "See events",
      isAffiliate: false,
    },
    {
      name: "Meetup",
      audience: "Every interest",
      ageRange: "All",
      typicalCost: "Free–€20",
      cities: "All cities",
      note: "Filter expat and singles tags.",
      website: "https://www.meetup.com/find/?location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Browse Meetup",
      isAffiliate: false,
    },
    {
      name: "Facebook city groups",
      audience: "Hyperlocal",
      ageRange: "All",
      typicalCost: "Free",
      cities: "All",
      note: "Search 'expats [city]'.",
      website: "https://www.facebook.com/groups/",
      partnerSlug: "facebook-groups",
      ctaLabel: "Search groups",
      isAffiliate: false,
    },
    {
      name: "LinkedIn local communities",
      audience: "Professional",
      ageRange: "25–50",
      typicalCost: "Free",
      cities: "Major cities",
      note: "After-work drinks and talks.",
      website: "https://www.linkedin.com/groups/",
      partnerSlug: "linkedin-groups",
      ctaLabel: "Search groups",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  expatBalanceCards: [
    { title: "Start with orientation", body: "InterNations or AIC welcome events help you learn city rhythms fast — treat them as scouting, not your only circle." },
    { title: "Add one local club", body: "A Dutch sports club or neighbourhood activity prevents an all-expat bubble long term." },
    { title: "Use Facebook for logistics", body: "City expat groups share last-minute borrels and roommate-adjacent social plans." },
    { title: "Don't skip Dutch effort", body: "Even basic Dutch at expat events signals you plan to stay — locals notice when you branch out." },
  ] satisfies TipCard[],
  socialClubsHeading: "Interest-Based Communities",
  socialClubsParagraphs: [
    "Board-game nights, choirs, book clubs and photography walks give you something to talk about besides small talk. Libraries and buurtcentra post affordable club listings.",
  ],
  socialClubs: [
    {
      name: "Board-game cafés",
      audience: "Casual gamers",
      ageRange: "20–40",
      typicalCost: "Table fee + drinks",
      cities: "Amsterdam, Utrecht, Den Bosch",
      note: "Open tables on weeknights.",
      website: "https://www.meetup.com/find/?keywords=board%20games&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find cafés",
      isAffiliate: false,
    },
    {
      name: "Book clubs",
      audience: "Readers",
      ageRange: "25–55",
      typicalCost: "Free–€5",
      cities: "Libraries nationwide",
      note: "English-language clubs in cities.",
      website: "https://www.meetup.com/find/?keywords=book%20club&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find clubs",
      isAffiliate: false,
    },
    {
      name: "Choirs",
      audience: "Singers",
      ageRange: "20–70+",
      typicalCost: "Membership",
      cities: "Most cities",
      note: "No audition choirs exist.",
      website: "https://www.meetup.com/find/?keywords=choir&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Search choirs",
      isAffiliate: false,
    },
    {
      name: "Photography walks",
      audience: "Creatives",
      ageRange: "22–50",
      typicalCost: "Free–€15",
      cities: "Meetup groups",
      note: "Street and nature themes.",
      website: "https://www.meetup.com/find/?keywords=photography%20walk&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find walks",
      isAffiliate: false,
    },
    {
      name: "Wine clubs",
      audience: "Tasting enthusiasts",
      ageRange: "28–55",
      typicalCost: "€30–€60/event",
      cities: "Randstad",
      note: "Shops host monthly tastings.",
      website: "https://www.meetup.com/find/?keywords=wine%20tasting&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find tastings",
      isAffiliate: false,
    },
    {
      name: "Entrepreneur meetups",
      audience: "Founders and freelancers",
      ageRange: "25–45",
      typicalCost: "Free–€25",
      cities: "Amsterdam, Eindhoven",
      note: "Networking blends with social life.",
      website: "https://www.meetup.com/find/?keywords=startup%20networking&location=nl--netherlands",
      partnerSlug: "meetup",
      ctaLabel: "Find meetups",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  socialClubPickTips: [
    "Choose one club and attend four weeks before switching — familiarity drives invites.",
    "Board-game cafés need no membership — good first test for introverts.",
    "Choirs and book clubs often welcome mid-season newcomers — email the organiser.",
    "Pick an activity you would enjoy alone — authenticity beats 'dating strategy' hobbies.",
  ],
  safetyHeading: "Dating Safely",
  safetyParagraphs: [
    "Most people you meet are genuine — still apply the same safety habits you would anywhere. Public first meetings, telling a friend and refusing money requests protect you on apps and at events alike.",
  ],
  safetyChecklist: [
    "Meet in a public place for first dates — cafés and busy parks work well.",
    "Tell a friend where you are going and when you expect to check in.",
    "Use in-app messaging until you trust someone — avoid sharing personal email too fast.",
    "Verify profiles — reverse image search if photos feel stock-like.",
    "Never send money, crypto or gift cards to someone you have not met.",
    "Trust your instincts — leaving early is always acceptable.",
    "Watch alcohol intake on first meetings.",
    "Share live location with a trusted friend if that helps you feel safer.",
  ],
  safetyRedFlags: [
    { signal: "Refuses public first meet or pushes your home address early", response: "Decline and report if on an app — this is a common scam pattern." },
    { signal: "Profile photos look stock or reverse-search to models", response: "Do not meet — report the profile and move on." },
    { signal: "Asks for money, crypto, gift cards or emergency transfers", response: "Never send funds — block and report immediately." },
    { signal: "Love-bombing within days — intense exclusivity pressure", response: "Slow down; meet friends in public contexts before trusting fully." },
    { signal: "Shows up very different from photos or stories", response: "You can leave politely — 'I don't think this is a match' is enough." },
    { signal: "Discourages you from telling friends about the date", response: "Tell a friend anyway — isolation is a risk factor everywhere." },
  ] satisfies Array<{ signal: string; response: string }>,
  lgbtqHeading: "Inclusive Dating",
  lgbtqParagraphs: [
    "Amsterdam, Rotterdam and Utrecht have the largest LGBTQ+ social scenes. Pride calendars, COC networks and queer meetups complement dating apps. Respect that not everyone is out in every workplace or family context.",
  ],
  lgbtqResources: [
    {
      name: "HER",
      audience: "Queer women & non-binary",
      ageRange: "20–40",
      typicalCost: "Free app",
      cities: "Major cities",
      note: "Events and community tabs.",
      website: "https://www.weareher.com/",
      partnerSlug: "her",
      ctaLabel: "Try HER",
      isAffiliate: true,
    },
    {
      name: "Grindr",
      audience: "Gay, bi, trans men",
      ageRange: "18+",
      typicalCost: "Free app",
      cities: "Nationwide",
      note: "Verify before meeting.",
      website: "https://www.grindr.com/",
      partnerSlug: "grindr",
      ctaLabel: "Try Grindr",
      isAffiliate: true,
    },
    {
      name: "Lex",
      audience: "Queer community",
      ageRange: "20–40",
      typicalCost: "Free app",
      cities: "Urban",
      note: "Personals and events.",
      website: "https://www.lex.lgbt/",
      partnerSlug: "lex",
      ctaLabel: "Try Lex",
      isAffiliate: true,
    },
    {
      name: "Pride events",
      audience: "Open celebrations",
      ageRange: "All",
      typicalCost: "Free–€20",
      cities: "Amsterdam, Rotterdam, Utrecht",
      note: "July–August peak season.",
      website: "https://www.amsterdampride.nl/",
      partnerSlug: "amsterdam-pride",
      ctaLabel: "See Pride calendar",
      isAffiliate: false,
    },
    {
      name: "COC Netherlands",
      audience: "LGBTQ+ advocacy & community",
      ageRange: "All",
      typicalCost: "Free resources",
      cities: "Nationwide",
      note: "Local chapters list events.",
      website: "https://www.coc.nl/",
      partnerSlug: "coc-nl",
      ctaLabel: "Find local chapter",
      isAffiliate: false,
    },
  ] satisfies ServiceRow[],
  lgbtqSafetyChecklist: [
    "Verify profiles the same way as mainstream apps — scams target all communities.",
    "Meet in queer-friendly neighbourhoods or busy venues you can leave easily.",
    "Not everyone is out at work or with family — respect privacy about photos and tags.",
    "Check COC and local queer centre calendars for sober socials if bars aren't your scene.",
    "Pride season brings crowds — agree a meeting point if you attend large events together.",
  ],
  citiesHeading: "Dating by City",
  citiesParagraphs: [
    "International population, event density and nightlife vary sharply by city. Use city guides for neighbourhood detail — this table orients your strategy.",
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", internationalPopulation: "Very high", apps: "All major apps + Breeze, Inner Circle", events: "Dense singles and expat calendar", nightlife: "Large, tourist-heavy", activities: "Sports, boats, culture" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", internationalPopulation: "High", apps: "Tinder, Bumble, Hinge strong", events: "Growing singles scene", nightlife: "Creative, less touristy", activities: "Harbour, running, clubs" },
    { city: "The Hague", href: "/netherlands/the-hague/", internationalPopulation: "High (diplomatic)", apps: "Professional crowd", events: "AIC and internationals", nightlife: "Moderate", activities: "Beach, museums, expat institutions" },
    { city: "Utrecht", href: "/netherlands/utrecht/", internationalPopulation: "High (students)", apps: "Younger skew on apps", events: "University and Meetup heavy", nightlife: "Student-influenced", activities: "Cycling culture, clubs" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", internationalPopulation: "Tech expats", apps: "Smaller pool than Randstad", events: "Tech meetups social", nightlife: "Compact", activities: "Design, tech socials" },
    { city: "Groningen", href: "/netherlands/groningen/", internationalPopulation: "Student-heavy", apps: "Younger demographics", events: "University calendar", nightlife: "Student nightlife", activities: "Affordable clubs and cafés" },
  ] satisfies CityDatingCard[],
  cityStrategyChecklist: [
    "Match your strategy to pool size — Amsterdam rewards apps plus events; smaller cities reward clubs.",
    "Read the city guide for neighbourhood social life — commute shapes who you meet weekly.",
    "Join one city-specific Facebook or Meetup group before buying event tickets.",
    "Revisit city choice after six months — many people date across Randstad cities by train.",
  ],
  mistakesHeading: "Common Mistakes",
  mistakeCards: [
    { title: "Only using Tinder", body: "One app limits your pool — diversify apps and in-person routes.", tip: "Add one weekly activity." },
    { title: "Never joining activities", body: "Apps alone miss the hobby culture that shapes Dutch social life.", tip: "Try a proefles sport intro." },
    { title: "Expecting instant deep friendship", body: "Trust builds through repetition — give clubs six weeks.", tip: "Return to the same group." },
    { title: "Waiting to be invited", body: "People assume you are busy — invite others to coffee.", tip: "Send one invite per week." },
    { title: "Ignoring Dutch language", body: "English suffices initially — Dutch opens local circles.", tip: "Learn ten date-friendly phrases." },
    { title: "Expat-only bubble", body: "International friends help — local clubs deepen roots.", tip: "Join one Dutch-language activity." },
    { title: "Skipping safety basics", body: "Rushing private meets creates unnecessary risk.", tip: "Public first dates always." },
    { title: "Giving up in month one", body: "Circles take seasons, not weeks, to form.", tip: "Track effort, not instant outcomes." },
  ] satisfies MistakeCard[],
  meetMethodsHeading: "Best Ways to Meet People",
  meetMethodsIntro: "Compare channels by ease, cost, chance of meaningful connection and repeat interaction. Combine one high-repeat method with one wide-reach method.",
  meetMethodScores: [
    { method: "Dating apps", ease: "High", cost: "Low–medium", meaningfulConnections: "Variable", repeatInteraction: "Low until matched" },
    { method: "Sports clubs", ease: "Medium", cost: "Medium", meaningfulConnections: "High", repeatInteraction: "Weekly" },
    { method: "Volunteering", ease: "Medium", cost: "Free", meaningfulConnections: "High", repeatInteraction: "Weekly" },
    { method: "Hiking groups", ease: "High", cost: "Low", meaningfulConnections: "Medium–high", repeatInteraction: "Weekly/monthly" },
    { method: "Meetups", ease: "High", cost: "Low", meaningfulConnections: "Medium", repeatInteraction: "Varies" },
    { method: "Singles holidays", ease: "Medium", cost: "High", meaningfulConnections: "Medium–high", repeatInteraction: "Trip intensity" },
    { method: "Professional networking", ease: "Medium", cost: "Low–medium", meaningfulConnections: "Medium", repeatInteraction: "Monthly" },
    { method: "Language exchanges", ease: "High", cost: "Free–low", meaningfulConnections: "Medium", repeatInteraction: "Weekly" },
    { method: "Dance classes", ease: "Medium", cost: "Medium", meaningfulConnections: "High", repeatInteraction: "Weekly" },
  ] satisfies MeetMethodScore[],
  meetMethodPairings: [
    { profile: "New in Amsterdam, 28–35", primary: "Bumble or Hinge", secondary: "Padel club or Inner Circle event", why: "Volume plus repeat contact in a professional city pool." },
    { profile: "Student in Utrecht or Groningen", primary: "Tinder or university Meetups", secondary: "Language café or sports intro", why: "Younger demographics and low-cost weekly rhythm." },
    { profile: "30+ relationship focus", primary: "Hinge or Lexa", secondary: "Volunteering or book club", why: "Intent-aligned apps plus steady in-person context." },
    { profile: "Introvert, prefers low chat", primary: "Hiking or board-game café", secondary: "Breeze or Meet5 dining", why: "Activity-first meets reduce small-talk pressure." },
    { profile: "Expat professional, little Dutch", primary: "InterNations or AIC event", secondary: "CrossFit or running club", why: "Fast orientation then weekly familiarity." },
    { profile: "LGBTQ+ in Randstad", primary: "HER, Lex or Grindr", secondary: "COC events or Pride calendar socials", why: "Apps plus community events balance reach and safety." },
  ] satisfies Array<{ profile: string; primary: string; secondary: string; why: string }>,
  faq: [
    { q: "Is dating difficult in the Netherlands?", a: "It can feel slow at first because many people have established circles. Apps, sports, volunteering and events all help — consistency matters more than any single channel." },
    { q: "Which dating app is best?", a: "Depends on city and intent: Tinder and Bumble for volume, Hinge for relationships, Inner Circle and Breeze in Amsterdam, Lexa and Paiq for Dutch platforms. Try one mainstream and one local option." },
    { q: "Where can I meet Dutch people?", a: "Sports clubs, language exchanges, volunteering, neighbourhood events and hobbies — not only apps. Recurring activities create the most natural contact." },
    { q: "How do Dutch relationships work?", a: "Often direct about intentions, equal splitting of costs and independent social lives. Exclusivity is usually discussed rather than assumed — individuals vary widely." },
    { q: "What age groups use which apps?", a: "Tinder and Bumble span 20s–40s; Hinge skews late 20s–40s; Lexa and Parship skew 30s–50s+; Inner Circle and Breeze often 25–45 in cities." },
    { q: "Are singles events worth it?", a: "Yes for practice meeting people and expanding your circle — treat outcomes as bonus, not guarantee. Speed dating and activity events suit different personalities." },
    { q: "Where can expats meet people?", a: "InterNations, AIC, Meetup, Facebook groups, expat hiking clubs and international sports — pair with local clubs for balance." },
    { q: "How do I date safely?", a: "Public first meetings, tell a friend, use app reporting tools, never send money and trust your instincts. See the safety checklist on this page." },
  ],
  faqNextSteps: [
    "Pair FAQ answers with Community Basics for broader friendship routes.",
    "Read Dutch Social Norms for first-date etiquette context.",
    "Use city guides to compare neighbourhoods and social life.",
  ],
  relatedGuidesReadingOrder: [
    "Dating in the Netherlands (this page) → meeting people",
    "Community Basics → clubs, neighbours, integration",
    "Dutch Social Norms → etiquette on dates and visits",
    "Cities hub → compare pools by city",
  ],
  relatedGuides: [
    { label: "Expat Loneliness", href: EXPAT_LONELINESS_PATH, description: "Relocation loneliness, friendship culture and rebuilding community.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Making friends, clubs, volunteering and integration.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette, greetings and social expectations.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Language hub for courses and municipal programs.", status: "comingSoon" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Professional social life and colleague relationships.", status: "live" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Compare cities for international life and social opportunities.", status: "live" },
    { label: "Volunteering", href: VOLUNTEERING_PATH, description: "Volunteer portals and recurring social shifts.", status: "comingSoon" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Expat Loneliness", href: EXPAT_LONELINESS_PATH, description: "If dating is not enough — rebuild a wider support network.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Build friendships and local networks.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Etiquette for dates, visits and neighbours.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and courses for daily life.", status: "comingSoon" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Compare social life by city.", status: "live" },
    { label: "Volunteering", href: VOLUNTEERING_PATH, description: "Meet people through structured giving back.", status: "comingSoon" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Feeling isolated → Expat Loneliness guide for wellbeing and social reset.",
    "Building a social circle → Community Basics after this guide.",
    "First-date etiquette → Dutch Social Norms.",
    "Choosing a city pool → Cities hub.",
  ],
  officialSources: [
    {
      label: "Meetup",
      href: "https://www.meetup.com/find/?location=nl--netherlands",
      description: "Find local interest, language and social groups by city.",
      partnerSlug: "meetup",
      isAffiliate: false,
    },
    {
      label: "Vrijwilligerswerk.nl",
      href: "https://www.vrijwilligerswerk.nl/",
      description: "National volunteer opportunity portal.",
      partnerSlug: "vrijwilligerswerk",
      isAffiliate: false,
    },
    {
      label: "NOC*NSF sport clubs",
      href: "https://www.nocnsf.nl/",
      description: "Dutch sports federation — find affiliated clubs.",
      partnerSlug: "nocnsf",
      isAffiliate: false,
    },
  ] satisfies OfficialSourceLink[],
} as const;

export type DatingNetherlandsPage = typeof datingNetherlandsPage;
