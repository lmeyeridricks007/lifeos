export const MAKING_DUTCH_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const EXPAT_LONELINESS_PATH = "/netherlands/life/expat-loneliness-netherlands/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
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

export type SnapshotMilestone = { label: string; value: string; note: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type OptionalOutboundLinkMeta = {
  website?: string;
  partnerSlug?: string;
  isAffiliate?: boolean;
  ctaLabel?: string;
};

export type ServiceRow = OptionalOutboundLinkMeta & {
  name: string;
  audience: string;
  ageRange: string;
  typicalCost: string;
  cities: string;
  note: string;
};

export type MeetMethodScore = {
  method: string;
  ease: string;
  cost: string;
  meaningfulConnections: string;
  repeatInteraction: string;
};

export type CityFriendCard = {
  city: string;
  href: string;
  internationalPopulation: string;
  bestRoutes: string;
  clubs: string;
  expatHubs: string;
  neighbourhood: string;
};

export type IntegrationTimelinePhase = {
  phase: string;
  tasks: readonly string[];
};

export type SuccessStory = {
  profile: string;
  city: string;
  route: string;
  outcome: string;
  lesson: string;
};

export type LifeStageCard = {
  stage: string;
  challenges: string;
  bestRoutes: string;
  tip: string;
};

export type WhatDoesntWorkRow = {
  approach: string;
  why: string;
  instead: string;
};

export type FriendshipScenario = {
  route: string;
  example: string;
  firstStep: string;
};

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-making-dutch-friends";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const makingDutchFriendsPage = {
  slug: "making-dutch-friends",
  path: MAKING_DUTCH_FRIENDS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: COMMUNITY_BASICS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-12-09",
  seo: {
    title: "Making Dutch Friends | The Complete Expat Guide",
    description:
      "Learn how to build genuine friendships in the Netherlands with practical advice, clubs, sports, volunteering, language exchanges, meetups and Dutch social customs.",
    keywords: [
      "making friends netherlands",
      "making dutch friends",
      "expat friends netherlands",
      "how to make friends in amsterdam",
      "dutch social life",
      "meet people netherlands",
      "expat community netherlands",
      "sports clubs netherlands",
      "volunteering netherlands friends",
      "integration netherlands",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Social life",
    pageTitle: "Making Dutch Friends",
    subtitle:
      "Rebuild your social circle in the Netherlands with activity-first routes — sports clubs, volunteering, language cafés, neighbourhood life and balanced expat communities.",
    primaryCta: { label: "Compare Best Ways to Meet People", href: "#best-ways" },
    secondaryCta: { label: "Understand Dutch Friendships", href: "#understanding-friendships" },
    chips: ["Sports clubs", "Volunteering", "Language cafés", "Neighbours", "Meetup", "Hobbies"],
    disclaimer:
      "Orientation only — groups, costs and language requirements change by city and season. Verify details on official provider sites before joining or committing.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic sport club borrel beside a Dutch canal-side clubhouse — diverse international and Dutch adults chatting over drinks, orange team scarves, bicycles parked outside, warm golden evening light.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#understanding-friendships", label: "Culture" },
    { href: "#why-difficult", label: "Why hard" },
    { href: "#best-ways", label: "Best ways" },
    { href: "#sports-clubs", label: "Sports" },
    { href: "#outdoor-communities", label: "Outdoors" },
    { href: "#language-exchanges", label: "Language" },
    { href: "#volunteering", label: "Volunteer" },
    { href: "#community-groups", label: "Community" },
    { href: "#expat-communities", label: "Expat" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#professional-networks", label: "Work" },
    { href: "#neighbours", label: "Neighbours" },
    { href: "#what-doesnt-work", label: "Avoid" },
    { href: "#life-stages", label: "Life stages" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#success-stories", label: "Stories" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#timeline", label: "Timeline" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board — eight-week friendship rule with sticky notes for sport club, volunteer shift and taal café, calendar flow from week 1 to week 8.",
      "Pick one route, show up weekly for eight weeks, then follow up with one person — consistency beats charisma."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot — sport clubs, weekly volunteering, taal café, neighbour greetings, hobby associations and expat-to-local bridge ranked for newcomers.",
      "Scan these six signals before trying every app — match one high-repeat route to your schedule."
    ),
    understandingFriendships: visual(
      "understanding-friendships",
      "Premium ecosystem diagram — close friends, activity mates, colleagues, neighbours, acquaintances and borrel circles with repetition-and-follow-up at the centre.",
      "Dutch friendships grow through shared routines and borrels — understand the layers before judging pace."
    ),
    whyDifficult: visual(
      "why-difficult",
      "Premium barrier board — packed calendars, existing circles, direct communication, language gaps, expat turnover and comparison trap with practical reframes.",
      "Difficulty is structural, not personal — choose recurring activities that fit Dutch social rhythms."
    ),
    bestWays: visual(
      "best-ways",
      "Premium ranked route table — sports club, volunteering, hobby association, taal café, neighbours, colleague borrel, parent network and expat bridge scored by effort and payoff.",
      "Combine one high-repeat weekly route with one wider channel — commit six to eight weeks before switching."
    ),
    sportsClubs: visual(
      "sports-clubs",
      "Premium sport club roster — hockey, football, tennis, running, rowing and korfball with proefles trials, team formats and post-training borrel culture.",
      "Stay after training for the borrel — club membership is the most common adult friendship route in the Netherlands."
    ),
    outdoorCommunities: visual(
      "outdoor-communities",
      "Premium outdoor community map — Meetup hikes, NKBV, Wandelnet, Staatsbosbeheer volunteers and cycling clubs across Dutch landscapes.",
      "Weekend walks and rides offer low-pressure conversation — confirm meeting points and start times."
    ),
    languageExchanges: visual(
      "language-exchanges",
      "Premium language exchange flow — gemeente taal café, tandem meetups, Dutch course classmates, sport in Dutch and volunteer practice mapped by level and social payoff.",
      "Language evenings give you a built-in reason to return weekly — pair practice with coffee or sport together."
    ),
    volunteering: visual(
      "volunteering",
      "Premium volunteer shift board — Voedselbank, dierenasiel, bibliotheek, buurtmoestuin, festival crew and taalschool helper with weekly recurrence highlighted.",
      "Book the same weekly shift — familiar faces beat one-off festival days for friendship."
    ),
    communityGroups: visual(
      "community-groups",
      "Premium community centre grid — buurtcentra, libraries, religious groups, parent associations and King's Day street teams.",
      "Municipal and neighbourhood groups are underrated friendship routes — check gemeente listings."
    ),
    expatCommunities: visual(
      "expat-communities",
      "Premium bridge diagram — expat orientation networks on one side, local vereniging and neighbours on the other, with a balanced integration path in the centre.",
      "Use expat groups for logistics — add one local weekly activity so you do not stay in an international bubble."
    ),
    hobbies: visual(
      "hobbies",
      "Premium hobby club grid — board games, choirs, book clubs, photography walks, cooking and maker spaces.",
      "Shared hobbies create natural conversation — attend four weeks before switching."
    ),
    professionalNetworks: visual(
      "professional-networks",
      "Premium professional network map — industry meetups, coworking communities, alumni chapters and LinkedIn local groups.",
      "Work networks help career movers — add a non-work club for balanced friendships."
    ),
    neighbours: visual(
      "neighbours",
      "Premium neighbourhood life board — hallway greetings, WhatsApp groups, buurt BBQs, building drinks and quiet-hour etiquette.",
      "Neighbour friendships start small — brief hellos and practical help build trust over months."
    ),
    whatDoesntWork: visual(
      "what-doesnt-work",
      "Premium anti-pattern board — bar-only strategy, waiting to be invited, expat-only bubble, skipping Dutch effort and one-off event hopping.",
      "Replace passive waiting with one recurring activity you genuinely enjoy."
    ),
    lifeStages: visual(
      "life-stages",
      "Premium life-stage routes — students, young professionals, parents, couples and retirees with tailored friendship channels.",
      "Match routes to your schedule — a parent needs different channels than a student."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison map — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Groningen with social style, expat density and best friendship routes.",
      "City context changes which routes work fastest — compare your city row before copying advice from elsewhere."
    ),
    successStories: visual(
      "success-stories",
      "Premium expat success pattern cards — sport club borrel, weekly volunteering, taal café tandem and neighbour BBQ with months-to-friendship timelines.",
      "Most success stories share one pattern — consistency in a weekly activity for several months."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — trying every app, leaving before borrel, expecting instant closeness, expat-only events, skipping follow-up and quitting at week three.",
      "Most friction is strategy — adjust channels before concluding friendship is impossible here."
    ),
    timeline: visual(
      "timeline",
      "Premium month-by-month timeline — weeks 1–4 orientation, weeks 5–8 familiarity, months 3–6 deepening, months 6–12 local circles with milestone markers.",
      "Track attendance and follow-ups — friendships often deepen between months three and six."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — Do Dutch people want foreign friends?, How long does it take?, Do I need Dutch?, Are expat friends enough? and introvert options with concise answers.",
      "Confirm club and group details locally — offerings change by season and city."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide route map — community basics, social norms, language, workplace culture, cities and volunteering.",
      "Friendship sits inside wider integration — social norms and community routes reinforce each other."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next steps — community basics, social norms, language, dating guide, cities and volunteering with when-to-use labels.",
      "Pick the card matching whether you need etiquette context, language practice or city comparison first."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "First-month orientation",
      items: [
        "Pick one weekly activity and one wider social channel — not ten at once.",
        "Many Dutch adults have established circles — recurring groups create new entry points.",
        "English helps in cities; Dutch effort opens deeper local friendships.",
        "Invite others to coffee — waiting to be invited slows progress.",
      ],
    },
    snapshot: {
      title: "How to use this snapshot",
      items: [
        "Compare your city to the cards below — Amsterdam differs from smaller cities.",
        "Treat signals as patterns, not guarantees about any individual.",
        "Ask colleagues which club or volunteer route they use.",
        "Revisit after three months as your network grows.",
      ],
    },
    understandingFriendships: {
      title: "Friendship culture reminders",
      items: [
        "Borrels (informal drinks) are common social glue — accept when invited.",
        "Calendars fill early — propose concrete dates two weeks ahead.",
        "Reliability matters — showing up weekly beats charisma at one party.",
        "Small groups deepen faster than large mixer events.",
      ],
    },
    whyDifficult: {
      title: "Reframe the barriers",
      items: [
        "Established circles are normal everywhere — activities bridge the gap.",
        "Direct communication is practical, not rejection.",
        "Language confidence grows with practice — start in bilingual settings.",
        "Seasons matter — summer festivals and autumn club enrolment differ.",
      ],
    },
    bestWays: {
      title: "Combine methods",
      items: [
        "High-repeat: sports, volunteering, language class, hobby club.",
        "Wide-reach: Meetup, expat welcome events, neighbour gatherings.",
        "Best outcomes often blend one of each.",
        "Give each route six weeks before switching.",
      ],
    },
    sportsClubs: {
      title: "Sports tips",
      items: [
        "Ask about proefles (trial lesson) before annual membership.",
        "Team sports create faster bonds than solo gym sessions.",
        "Post-training borrel drinks are common — stay for one if invited.",
        "Search NOC*NSF-affiliated clubs via nocnsf.nl.",
      ],
    },
    outdoorCommunities: {
      title: "Outdoor tips",
      items: [
        "Confirm train meeting points — groups start punctually.",
        "Bring waterproof layers year-round.",
        "Introduce yourself to the organiser on arrival.",
        "Repeat the same hiking or cycling group monthly.",
      ],
    },
    languageExchanges: {
      title: "Language tips",
      items: [
        "Alternate languages fairly — 30 minutes each is common.",
        "Library TaalCafés are less awkward than one-on-one for beginners.",
        "Municipal inburgering courses create classmates.",
        "Dutch practice signals long-term intent — locals notice.",
      ],
    },
    volunteering: {
      title: "Volunteer tips",
      items: [
        "Weekly shifts beat one-off festival days for friendships.",
        "Food banks and animal shelters need reliable schedules.",
        "Search Vrijwilligerswerk.nl by city and cause.",
        "Pair episodic festival volunteering with a weekly route.",
      ],
    },
    communityGroups: {
      title: "Community tips",
      items: [
        "Buurtcentra post affordable clubs and parent programs.",
        "Libraries run language cafés and children's hours.",
        "Parent associations (oudercommissie) connect school families.",
        "Check gemeente newcomer pages for integration activities.",
      ],
    },
    expatCommunities: {
      title: "Expat balance",
      items: [
        "InterNations and international centres offer large welcome events.",
        "Meetup spans every niche — filter by city and language.",
        "Facebook groups share last-minute social plans.",
        "Balance expat orientation with one local club.",
      ],
    },
    hobbies: {
      title: "Hobby tips",
      items: [
        "Board-game cafés host weekly open tables in major cities.",
        "Choirs and book clubs often welcome newcomers mid-season.",
        "Photography walks combine creativity and conversation.",
        "Pick an activity you would enjoy alone — authenticity matters.",
      ],
    },
    professionalNetworks: {
      title: "Work network tips",
      items: [
        "Industry meetups on Meetup and Eventbrite are common in Randstad.",
        "Coworking spaces host community lunches and talks.",
        "Alumni chapters connect university graduates.",
        "Add a non-work club so friendships are not only transactional.",
      ],
    },
    neighbours: {
      title: "Neighbour tips",
      items: [
        "Greet people in the hallway — a brief hello is enough at first.",
        "Join building WhatsApp when invited — use for practical alerts.",
        "Accept buurt BBQ and street event invitations when possible.",
        "Learn quiet hours and bike-storage rules early.",
      ],
    },
    whatDoesntWork: {
      title: "Swap these habits",
      items: [
        "Replace bar-only socialising with a weekly club.",
        "Send one coffee invite per week instead of waiting.",
        "Learn ten Dutch phrases for neighbour and shop interactions.",
        "Stay with one group six sessions before judging fit.",
      ],
    },
    lifeStages: {
      title: "Stage-specific advice",
      items: [
        "Students: university associations and sports intros.",
        "Young professionals: coworking meetups plus one sport.",
        "Parents: school gates, sport clubs and playgroups.",
        "Retirees: walking clubs, libraries and volunteer desks.",
      ],
    },
    cityComparison: {
      title: "City choice",
      items: [
        "Amsterdam has the largest international Meetup and expat calendar.",
        "Rotterdam and Utrecht offer strong club scenes with less tourism.",
        "University cities skew younger and more English-friendly.",
        "Smaller cities reward hobby clubs over volume strategies.",
      ],
    },
    successStories: {
      title: "Common patterns",
      items: [
        "Most friendships formed after 8–12 weeks of the same activity.",
        "Neighbour invites often follow months of small hellos.",
        "Language cafés frequently become weekly friend groups.",
        "Volunteer shifts create the steadiest repeat contact.",
      ],
    },
    mistakes: {
      title: "Adjust strategy",
      items: [
        "Add one weekly activity if events feel shallow.",
        "Invite someone to coffee — initiative is respected.",
        "Learn basic Dutch even in international workplaces.",
        "Expand beyond expat-only circles when ready.",
      ],
    },
    timeline: {
      title: "Timeline discipline",
      items: [
        "Month 1: choose one route and attend at least four times.",
        "Month 2: accept or extend one small invitation.",
        "Month 3: evaluate depth — activity partners often become friends.",
        "Month 4–6: add a second channel only if the first fits.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Dutch Social Norms for etiquette context.",
        "Community Basics covers broader integration routes.",
        "City guides compare neighbourhoods and social life.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Making Dutch Friends (this page) → friendship routes",
        "Community Basics → neighbours, clubs, integration",
        "Dutch Social Norms → etiquette and direct communication",
        "Cities hub → compare social life by city",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need broader integration → Community Basics",
        "Need etiquette context → Dutch Social Norms",
        "Want Dutch phrases → Language hub",
        "Want recurring rhythm → Volunteering",
      ],
    },
  },
  quickAnswer: {
    heading: "Is It Hard to Make Friends in the Netherlands?",
    summary:
      "Making friends can feel slow at first because many Dutch adults have established circles built through sports, hobbies and long-standing routines. The practical path is activity-first: join one weekly club or volunteer shift, attend a language café, meet neighbours gradually and balance expat orientation with local groups.",
    bullets: [
      "Recurring activities beat one-off networking events for meaningful contact.",
      "English works in cities — Dutch effort deepens local friendships over time.",
      "Direct communication is normal — ask and invite rather than waiting.",
      "Combine one high-repeat route with one wider-reach channel.",
      "Give each route at least six weeks before changing strategy.",
    ],
    note:
      "Start with one sports intro or volunteer application plus one Meetup or library language café — track attendance for six weeks before adding more channels.",
  },
  snapshotSignals: [
    { label: "Activity-first", value: "Clubs & hobbies", note: "Verenigingen anchor adult social life" },
    { label: "Circles", value: "Often established", note: "Repeat contact creates entry" },
    { label: "English", value: "Widely spoken", note: "Especially in Randstad cities" },
    { label: "Planning", value: "Calendars fill early", note: "Propose dates concretely" },
  ] satisfies SnapshotSignal[],
  snapshotMilestones: [
    { label: "First month", value: "1–2 activities", note: "Choose weekly rhythm" },
    { label: "Borrel culture", value: "Informal drinks", note: "Common after clubs" },
    { label: "Neighbours", value: "Small rituals", note: "Hellos and WhatsApp" },
    { label: "Depth", value: "Months 3–6", note: "When familiarity deepens" },
  ] satisfies SnapshotMilestone[],
  orientationFlowSteps: [
    "Week 1: browse Meetup and search one sport vereniging for proefles.",
    "Week 2: attend a language café or volunteer orientation.",
    "Month 1: repeat one weekly activity and greet neighbours twice.",
  ],
  snapshotCards: [
    { title: "Clubs are mainstream", body: "Sports and hobby verenigingen are how many Dutch adults socialise — ask about proefles trial sessions." },
    { title: "Circles take time", body: "Friendships deepen through repetition — six weeks of the same group beats six one-off events." },
    { title: "English in cities", body: "International workplaces and Randstad cities are English-friendly — Dutch still helps for local roots." },
    { title: "Calendars fill early", body: "People plan ahead — propose coffee two weeks out rather than 'sometime soon'." },
    { title: "Neighbours matter", body: "Hallway greetings, buurt WhatsApp groups and street BBQs build nearby friendships." },
    { title: "Volunteering works", body: "Weekly food-bank or shelter shifts create familiar faces faster than sporadic mixers." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two snapshot signals to act on this month.",
    "Ask one colleague which club or volunteer route they use.",
    "Pair an expat welcome event with one local activity.",
    "Revisit after month two when your routine is clearer.",
  ],
  introExpatQuestions: [
    { title: "Is it harder as an expat?", body: "Circles are often established — clubs and volunteering bridge the gap. Patience plus weekly consistency helps." },
    { title: "Do Dutch people befriend expats?", body: "Yes, especially in international cities — shared activities matter more than passport." },
    { title: "Do I need Dutch?", body: "Not to start in cities — Dutch effort is appreciated and opens deeper local friendships." },
    { title: "Clubs or expat groups first?", body: "Use both — expat groups for orientation, local clubs for long-term roots." },
  ] satisfies TipCard[],
  introParagraphs: [
    "Moving to the Netherlands often means rebuilding your entire social circle. Many expats arrive with colleagues but few close friends outside work. Dutch social life is activity-first: sports clubs, hobby associations, volunteer shifts, language cafés and neighbourhood rituals create the repeat contact where friendships actually grow.",
    "This guide maps practical routes with real organisations, ranked comparisons and city notes — not vague advice to 'be more social'. Pair it with Dutch Social Norms for etiquette context and Community Basics for broader integration.",
  ],
  understandingFriendshipsHeading: "How Dutch Friendships Work",
  understandingFriendshipsParagraphs: [
    "Dutch friendships often grow through shared routines rather than spontaneous street encounters. Sports training, choir rehearsal, parent groups at school and monthly borrels (informal drinks) create predictable contact. People may seem reserved at first while calendars and trust build — this is common, not necessarily unfriendly.",
    "Group size tends to stay small. Deep friendships may take months of weekly contact. Invitations are often concrete ('Tuesday 19:00 at Café de Jaren') rather than open-ended. Reliability — showing up when you said you would — signals you are worth investing in.",
    "Regional and generational differences exist. International cities blend many norms. The practical pattern: find a recurring group, participate consistently, accept small invitations and let friendships develop without forcing instant intimacy.",
  ],
  friendshipCultureTopics: [
    { topic: "Borrels", detail: "Informal drinks after work or club training — low-pressure group socialising." },
    { topic: "Circle parties", detail: "Birthday kringverjaardag introduces you to someone's existing circle — see our birthday traditions guide." },
    { topic: "Planning ahead", detail: "Calendars fill early — propose specific dates and confirm RSVPs." },
    { topic: "Small groups", detail: "Three to six close friends is common — depth over large networks." },
    { topic: "Reliability", detail: "Weekly attendance matters more than charisma at one event." },
    { topic: "Direct invites", detail: "Clear yes/no answers — ask rather than decode vague replies." },
  ] satisfies Array<{ topic: string; detail: string }>,
  friendshipCultureLinks: [
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Direct communication, visiting and neighbour etiquette." },
    { label: "Dutch Birthday Traditions", href: "/netherlands/life/dutch-birthday-traditions/", description: "Circle parties and how you enter someone's friend group." },
  ] satisfies LifeGuideLink[],
  whyDifficultHeading: "Why Making Friends Can Feel Difficult",
  whyDifficultParagraphs: [
    "Many Dutch adults formed their core circles at school, university or through decades in the same neighbourhood. As a newcomer you are joining mid-stream — not facing personal rejection, but structural timing. One-off parties rarely replace the familiarity built through a weekly club.",
    "Language can slow early bonding even when everyone speaks English at work. Calendar culture means people may decline spontaneous plans not because they dislike you, but because Tuesday was booked three weeks ago. Direct communication can feel blunt until you learn it is often practical, not personal.",
    "Seasonality matters: summer festivals and terrace season feel social; grey February rewards indoor clubs and volunteer shifts. Adjust expectations — friendship depth often arrives between months three and six, not week one.",
  ],
  whyDifficultCards: [
    { title: "Established circles", body: "Long-standing friend groups are normal — activities create new entry points outside existing networks." },
    { title: "Busy calendars", body: "People plan ahead — propose concrete dates and accept that 'maybe' can mean genuine uncertainty." },
    { title: "Language gap", body: "English suffices initially — Dutch effort signals long-term intent and opens local-only groups." },
    { title: "Direct style", body: "Plain feedback is often practical — separate tone from intent and ask clarifying questions." },
    { title: "Newcomer timing", body: "Trust builds through repetition — six weekly sessions beat six different events." },
    { title: "Seasonal rhythm", body: "Summer terraces and winter club seasons feel different — pick routes that match the calendar." },
  ] satisfies TipCard[],
  bestWaysHeading: "Best Ways to Make Friends",
  bestWaysIntro:
    "Compare channels by ease, cost, chance of meaningful connection and repeat interaction. Combine one high-repeat weekly method with one wider-reach channel.",
  meetMethodScores: [
    { method: "Sports clubs", ease: "Medium", cost: "Medium", meaningfulConnections: "High", repeatInteraction: "Weekly" },
    { method: "Volunteering", ease: "Medium", cost: "Free", meaningfulConnections: "High", repeatInteraction: "Weekly" },
    { method: "Hobby clubs", ease: "Medium", cost: "Low–medium", meaningfulConnections: "High", repeatInteraction: "Weekly" },
    { method: "Language exchanges", ease: "High", cost: "Free–low", meaningfulConnections: "Medium–high", repeatInteraction: "Weekly" },
    { method: "Neighbourhood life", ease: "Medium", cost: "Free", meaningfulConnections: "Medium", repeatInteraction: "Ongoing" },
    { method: "Meetup groups", ease: "High", cost: "Low", meaningfulConnections: "Medium", repeatInteraction: "Varies" },
    { method: "Expat communities", ease: "High", cost: "Low–medium", meaningfulConnections: "Medium", repeatInteraction: "Monthly events" },
    { method: "Professional networks", ease: "Medium", cost: "Low–medium", meaningfulConnections: "Medium", repeatInteraction: "Monthly" },
    { method: "Bars & nightlife only", ease: "High", cost: "Medium", meaningfulConnections: "Low", repeatInteraction: "Sporadic" },
  ] satisfies MeetMethodScore[],
  meetMethodPairings: [
    { profile: "New in Amsterdam, 28–35", primary: "Padel or running club", secondary: "InterNations or Meetup hobby group", why: "Weekly repeat contact plus wide international reach." },
    { profile: "Student in Utrecht or Groningen", primary: "University sport intro", secondary: "Library TaalCafé", why: "Low-cost weekly rhythm and classmates." },
    { profile: "Parent with young children", primary: "School parent association", secondary: "Saturday sport club for kids + parents", why: "Natural recurring contact at gates and tournaments." },
    { profile: "Introvert, prefers structure", primary: "Board-game café or book club", secondary: "Volunteer library shift", why: "Activity-first conversation with clear start and end." },
    { profile: "Professional, little Dutch", primary: "Coworking community events", secondary: "Food-bank volunteer shift", why: "Career contacts plus local weekly familiarity." },
    { profile: "Retiree or remote worker", primary: "Walking club (Wandelnet)", secondary: "Buurtcentrum craft or coffee group", why: "Daytime social rhythm and neighbourhood roots." },
  ] satisfies Array<{ profile: string; primary: string; secondary: string; why: string }>,
  sportsHeading: "Sports Clubs — One of the Best Friendship Routes",
  sportsParagraphs: [
    "Recurring training creates familiarity — why verenigingen outperform one-off parties for meaningful friendship. Ask about proefles (trial lesson) before annual membership. NOC*NSF-affiliated clubs span almost every sport from football to korfball.",
    "Post-training borrel drinks are common. Team sports, partner sports (padel, tennis doubles) and group fitness create faster bonds than solo gym visits.",
  ],
  sports: [
    { name: "Parkrun", audience: "Free weekly 5K", ageRange: "All ages", typicalCost: "Free", cities: "Nationwide", note: "Saturday morning community runs.", website: "https://www.parkrun.nl/", partnerSlug: "parkrun", ctaLabel: "Find Parkrun", isAffiliate: false },
    { name: "Padel", audience: "Fast-growing doubles sport", ageRange: "25–45", typicalCost: "€15–€35/court", cities: "Randstad boom", note: "Clubs match solo players.", website: "https://www.padel.nl/", partnerSlug: "padel-nl", ctaLabel: "Find courts", isAffiliate: false },
    { name: "Football verenigingen", audience: "Team sport", ageRange: "16–50+", typicalCost: "Club membership", cities: "Every town", note: "Social and beginner teams exist.", website: "https://www.knvb.nl/", partnerSlug: "knvb", ctaLabel: "Find clubs", isAffiliate: false },
    { name: "Rowing clubs", audience: "Team water sport", ageRange: "18–45", typicalCost: "Club fees", cities: "Canal cities", note: "Spring intro weeks.", website: "https://www.nocnsf.nl/", partnerSlug: "nocnsf", ctaLabel: "Find clubs", isAffiliate: false },
    { name: "Climbing / bouldering", audience: "Indoor climbers", ageRange: "20–40", typicalCost: "Day pass or membership", cities: "Urban centres", note: "Partner boards at gyms.", website: "https://www.meetup.com/find/?keywords=bouldering&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Search groups", isAffiliate: false },
    { name: "Dance classes", audience: "Salsa, bachata, swing", ageRange: "22–45", typicalCost: "€10–€20/class", cities: "Major cities", note: "Partner rotation in class.", website: "https://www.meetup.com/find/?keywords=salsa%20dance&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Search classes", isAffiliate: false },
    { name: "Cycling clubs", audience: "Road and touring", ageRange: "25–60+", typicalCost: "Membership", cities: "Nationwide", note: "Weekend group rides.", website: "https://www.nocnsf.nl/", partnerSlug: "nocnsf", ctaLabel: "Find clubs", isAffiliate: false },
    { name: "Tennis clubs", audience: "Singles and doubles", ageRange: "20–60+", typicalCost: "Membership", cities: "Nationwide", note: "Ladder play and clubhouse culture.", website: "https://www.knltb.nl/", partnerSlug: "knltb", ctaLabel: "Find clubs", isAffiliate: false },
  ] satisfies ServiceRow[],
  sportsJoiningChecklist: [
    "Search '[sport] vereniging [your city]' or ask neighbours which local club they use.",
    "Ask about proefles before paying full annual membership.",
    "Check schedule fit — attend most weeks, not occasionally.",
    "Ask whether English-friendly or social teams exist.",
    "Stay for post-training borrel at least twice before judging social fit.",
    "Attend six sessions before switching clubs.",
  ],
  outdoorHeading: "Outdoor Communities",
  outdoorParagraphs: [
    "Hiking, cycling and nature volunteer groups offer low-pressure conversation while moving. Meetup listings, NKBV sections, Wandelnet walking associations and Staatsbosbeheer conservation projects all welcome newcomers who show up prepared and punctual.",
  ],
  outdoorGroups: [
    { name: "Meetup hiking", audience: "Mixed expat/local", ageRange: "All ages", typicalCost: "Free–€15", cities: "All major cities", note: "Search hiking + your city.", website: "https://www.meetup.com/find/?keywords=hiking&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find hikes", isAffiliate: false },
    { name: "NKBV", audience: "Mountaineering & hiking", ageRange: "18–70+", typicalCost: "Membership + trips", cities: "Nationwide sections", note: "Training and alpine trips.", website: "https://www.nkbv.nl/", partnerSlug: "nkbv", ctaLabel: "Find a section", isAffiliate: false },
    { name: "Wandelnet / walking clubs", audience: "Day hikers", ageRange: "30–65+", typicalCost: "Low membership", cities: "Regional clubs", note: "Sunday walks common.", website: "https://www.wandelnet.nl/", partnerSlug: "wandelnet", ctaLabel: "Browse routes", isAffiliate: false },
    { name: "Staatsbosbeheer", audience: "Nature volunteers", ageRange: "18+", typicalCost: "Free", cities: "Regional", note: "Conservation work days.", website: "https://www.staatsbosbeheer.nl/", partnerSlug: "staatsbosbeheer", ctaLabel: "Volunteer outdoors", isAffiliate: false },
    { name: "Fietsersbond rides", audience: "Cycling advocates", ageRange: "25–65+", typicalCost: "Low", cities: "Local chapters", note: "Social and advocacy rides.", website: "https://www.fietsersbond.nl/", partnerSlug: "fietsersbond", ctaLabel: "Find chapter", isAffiliate: false },
    { name: "Expat hiking clubs", audience: "English-speaking walkers", ageRange: "25–50", typicalCost: "Free–€10", cities: "Amsterdam, Utrecht, Maastricht", note: "Facebook and Meetup listings.", website: "https://www.meetup.com/find/?keywords=expat%20hiking&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find groups", isAffiliate: false },
  ] satisfies ServiceRow[],
  outdoorPackChecklist: [
    "Waterproof jacket — Dutch weather shifts within one walk.",
    "Train ticket to meeting point — groups start punctually.",
    "Introduce yourself to the organiser on arrival.",
    "Repeat the same group monthly to recognise faces.",
    "Bring small cash for rural café stops.",
  ],
  languageHeading: "Language Exchanges & TaalCafés",
  languageParagraphs: [
    "Language evenings attract internationals and Dutch locals curious about other cultures. Library TaalCafés, Meetup tandem groups, university conversation tables and municipal inburgering courses all create recurring classmates. Fair language turn-taking builds trust faster than one-sided English conversations.",
  ],
  languageGroups: [
    { name: "Library TaalCafés", audience: "All levels", ageRange: "18+", typicalCost: "Free", cities: "Most cities", note: "Search ob.nl for your library.", website: "https://www.ob.nl/", partnerSlug: "ob-nl", ctaLabel: "Find libraries", isAffiliate: false },
    { name: "Meetup language exchanges", audience: "Tandem learners", ageRange: "20–45", typicalCost: "Free–€5", cities: "Major cities", note: "Dutch–English pairs common.", website: "https://www.meetup.com/find/?keywords=language%20exchange&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find exchanges", isAffiliate: false },
    { name: "Taalhuis (municipal)", audience: "Newcomers", ageRange: "18+", typicalCost: "Free–subsidised", cities: "Per gemeente", note: "Integration language routes.", website: "https://www.government.nl/topics/new-in-the-netherlands", partnerSlug: "government-nl", ctaLabel: "Municipal info", isAffiliate: false },
    { name: "Uva / EUR language buddies", audience: "Students", ageRange: "18–30", typicalCost: "Free", cities: "Amsterdam, Rotterdam", note: "University tandem programmes.", website: "https://www.uva.nl/", partnerSlug: "uva", ctaLabel: "University routes", isAffiliate: false },
    { name: "Duolingo Events", audience: "Casual learners", ageRange: "18–40", typicalCost: "Free", cities: "Urban", note: "Informal practice meetups.", website: "https://events.duolingo.com/", partnerSlug: "duolingo", ctaLabel: "Find events", isAffiliate: false },
    { name: "Bart de Pau Dutch cafés", audience: "Learners", ageRange: "20–50", typicalCost: "Free–low", cities: "Amsterdam area", note: "Structured beginner-friendly tables.", website: "https://www.learndutch.org/", partnerSlug: "learndutch", ctaLabel: "See schedule", isAffiliate: false },
  ] satisfies ServiceRow[],
  languagePracticeTips: [
    "Alternate languages fairly — 30 minutes Dutch, 30 minutes English.",
    "Prepare three conversation topics before each café.",
    "Learn ten neighbour phrases — locals notice effort.",
    "Pair language class with one social club using Dutch.",
  ],
  volunteeringHeading: "Volunteering — Steady Weekly Contact",
  volunteeringParagraphs: [
    "Volunteering builds familiar faces through reliable shifts. Food banks (voedselbanken), animal shelters, library programmes and festival crews all need help — but weekly roles create stronger friendship potential than one-off open days.",
  ],
  volunteerGroups: [
    { name: "Vrijwilligerswerk.nl", audience: "All causes", ageRange: "16+", typicalCost: "Free", cities: "Nationwide", note: "Search by city and weekly availability.", website: "https://www.vrijwilligerswerk.nl/", partnerSlug: "vrijwilligerswerk", ctaLabel: "Search roles", isAffiliate: false },
    { name: "Voedselbanken", audience: "Food distribution", ageRange: "18+", typicalCost: "Free", cities: "Nationwide", note: "Saturday shifts common.", website: "https://www.voedselbanken.nl/", partnerSlug: "voedselbanken", ctaLabel: "Find food bank", isAffiliate: false },
    { name: "Dierenasielen", audience: "Animal shelters", ageRange: "16+", typicalCost: "Free", note: "Dog walking needs reliability.", cities: "Per city", website: "https://www.dierenbescherming.nl/", partnerSlug: "dierenbescherming", ctaLabel: "Find shelter", isAffiliate: false },
    { name: "Bibliotheek programmes", audience: "Library volunteers", ageRange: "18+", typicalCost: "Free", cities: "Nationwide", note: "TaalCafé and children's hours.", website: "https://www.ob.nl/", partnerSlug: "ob-nl", ctaLabel: "Local library", isAffiliate: false },
    { name: "NL Cares", audience: "Flexible volunteering", ageRange: "18+", typicalCost: "Free", cities: "Amsterdam, Rotterdam, Den Haag, Utrecht", note: "One-off and recurring projects.", website: "https://www.nlcares.nl/", partnerSlug: "nlcares", ctaLabel: "Browse projects", isAffiliate: false },
    { name: "Festival crews", audience: "Event volunteers", ageRange: "18+", typicalCost: "Free (often ticket perks)", cities: "Seasonal", note: "Social but episodic — pair with weekly role.", website: "https://www.vrijwilligerswerk.nl/", partnerSlug: "vrijwilligerswerk", ctaLabel: "Festival search", isAffiliate: false },
  ] satisfies ServiceRow[],
  volunteerTips: [
    "Apply for a recurring weekly slot, not only open days.",
    "Tell coordinators you are new in the Netherlands — many teams buddy newcomers.",
    "Start with roles matching your language level.",
    "Festival volunteering is fun but pair with a steady weekly shift.",
  ],
  communityGroupsHeading: "Community Groups & Buurtcentra",
  communityGroupsParagraphs: [
    "Neighbourhood community centres (buurtcentra), libraries, parent associations and religious communities offer affordable structured social life. Municipal newcomer pages list integration activities — often under-researched by expats focused only on Meetup.",
  ],
  communityGroups: [
    { name: "Buurtcentra", audience: "Neighbourhood residents", ageRange: "All ages", typicalCost: "Low", cities: "Per neighbourhood", note: "Craft, coffee and parent groups.", website: "https://www.government.nl/topics/municipalities", partnerSlug: "government-nl", ctaLabel: "Find gemeente", isAffiliate: false },
    { name: "Oudercommissie / school parents", audience: "Parents", ageRange: "25–50", typicalCost: "Free", cities: "Per school", note: "School gate friendships.", website: "https://www.rijksoverheid.nl/", partnerSlug: "rijksoverheid", ctaLabel: "School info", isAffiliate: false },
    { name: "Humanitas", audience: "Buddy programmes", ageRange: "18+", typicalCost: "Free", cities: "Nationwide", note: "Mentoring and language buddies.", website: "https://www.humanitas.nl/", partnerSlug: "humanitas", ctaLabel: "Volunteer", isAffiliate: false },
    { name: "Kerken / moskeeën community", audience: "Faith communities", ageRange: "All ages", typicalCost: "Free", cities: "Local", note: "Strong social layer beyond services.", website: "https://www.kerk.nl/", partnerSlug: "kerk-nl", ctaLabel: "Local communities", isAffiliate: false },
    { name: "King's Day street teams", audience: "Neighbours", ageRange: "All ages", typicalCost: "Free", cities: "Nationwide", note: "April street parties — join organising.", website: "https://www.iamsterdam.com/en/see-and-do/whats-on/calendar/festivals/events/kings-day", partnerSlug: "iamsterdam", ctaLabel: "King's Day info", isAffiliate: false },
  ] satisfies ServiceRow[],
  communityGroupTips: [
    "Walk into your local buurtcentrum and read the bulletin board.",
    "Library children's hours connect parents even with basic Dutch.",
    "Humanitas pairs newcomers with local buddies.",
    "Check gemeente integration desk for free activities.",
  ],
  expatHeading: "Expat Communities — Fast Orientation",
  expatParagraphs: [
    "Expat groups, international centres and Facebook communities help you orient quickly — housing tips, school advice and familiar social formats during early culture shock. Balance them with at least one local club or volunteer route so friendships are not only international.",
  ],
  expatGroups: [
    { name: "InterNations", audience: "Global expats", ageRange: "25–55", typicalCost: "Free–paid events", cities: "Major cities", note: "Large welcome events.", website: "https://www.internations.org/", partnerSlug: "internations", ctaLabel: "Join community", isAffiliate: true },
    { name: "IN Amsterdam", audience: "Amsterdam newcomers", ageRange: "All", typicalCost: "Free resources", cities: "Amsterdam", note: "Events and settling-in desk.", website: "https://www.iamsterdam.com/en/live-work-study/newcomers", partnerSlug: "iamsterdam", ctaLabel: "Newcomer hub", isAffiliate: false },
    { name: "Rotterdam International Center", audience: "Rotterdam newcomers", ageRange: "All", typicalCost: "Free", cities: "Rotterdam", note: "Practical and social events.", website: "https://www.rotterdam.nl/en/international-centre", partnerSlug: "rotterdam-intl", ctaLabel: "Visit centre", isAffiliate: false },
    { name: "The Hague International Centre", audience: "The Hague newcomers", ageRange: "All", typicalCost: "Free", cities: "The Hague", note: "Diplomatic and expat hub.", website: "https://www.denhaag.com/en/international-centre", partnerSlug: "denhaag-intl", ctaLabel: "Visit centre", isAffiliate: false },
    { name: "Meetup expat groups", audience: "Interest-based", ageRange: "20–45", typicalCost: "Free–€15", cities: "All cities", note: "Filter expat + your city.", website: "https://www.meetup.com/find/?keywords=expat&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find groups", isAffiliate: false },
    { name: "Expat Facebook groups", audience: "City communities", ageRange: "All", typicalCost: "Free", cities: "Per city", note: "Search 'Expats in [city]'.", website: "https://www.facebook.com/", partnerSlug: "facebook", ctaLabel: "Search Facebook", isAffiliate: false },
  ] satisfies ServiceRow[],
  expatBalanceTips: [
    "Use expat events for month-one orientation, not year-three social life.",
    "Pair InterNations welcome with one Dutch-language activity.",
    "Facebook groups are great for last-minute plans — weak for depth alone.",
    "International colleagues are a start — add non-work circles.",
  ],
  hobbiesHeading: "Hobby Clubs & Interest Groups",
  hobbiesParagraphs: [
    "Board-game cafés, choirs, book clubs, photography walks and maker spaces give you something to discuss besides small talk. Pick an activity you would enjoy alone — authenticity beats 'friendship strategy' hobbies you abandon in month two.",
  ],
  hobbyGroups: [
    { name: "Board-game cafés", audience: "Casual gamers", ageRange: "20–40", typicalCost: "Table fee + drinks", cities: "Amsterdam, Utrecht, Den Bosch", note: "Open tables on weeknights.", website: "https://www.meetup.com/find/?keywords=board%20games&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find cafés", isAffiliate: false },
    { name: "Book clubs", audience: "Readers", ageRange: "25–55", typicalCost: "Free–€5", cities: "Libraries nationwide", note: "English clubs in cities.", website: "https://www.meetup.com/find/?keywords=book%20club&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find clubs", isAffiliate: false },
    { name: "Choirs", audience: "Singers", ageRange: "20–70+", typicalCost: "Membership", cities: "Most cities", note: "No-audition choirs exist.", website: "https://www.meetup.com/find/?keywords=choir&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Search choirs", isAffiliate: false },
    { name: "Photography walks", audience: "Creatives", ageRange: "22–50", typicalCost: "Free–€15", cities: "Meetup groups", note: "Street and canal themes.", website: "https://www.meetup.com/find/?keywords=photography%20walk&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find walks", isAffiliate: false },
    { name: "Maker spaces", audience: "DIY / tech", ageRange: "20–45", typicalCost: "Membership", cities: "Urban", note: "Workshop nights and open days.", website: "https://www.meetup.com/find/?keywords=makerspace&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find spaces", isAffiliate: false },
    { name: "Cooking workshops", audience: "Food lovers", ageRange: "25–50", typicalCost: "€30–€60", cities: "Randstad", note: "Group tables and shared tasks.", website: "https://www.meetup.com/find/?keywords=cooking%20class&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find workshops", isAffiliate: false },
  ] satisfies ServiceRow[],
  hobbyPickTips: [
    "Attend four weeks before switching — familiarity drives invites.",
    "Board-game cafés need no membership — good introvert test.",
    "Email choir or book club organisers about mid-season joining.",
    "Choose hobbies you would do alone — sustainability matters.",
  ],
  professionalHeading: "Professional & Alumni Networks",
  professionalParagraphs: [
    "Industry meetups, coworking communities and alumni chapters help career movers build contacts — but work-only networks can feel transactional. Add a non-work club so friendships exist outside quarterly networking pitches.",
  ],
  professionalGroups: [
    { name: "Meetup professional", audience: "Industry groups", ageRange: "25–50", typicalCost: "Free–€25", cities: "Randstad", note: "Tech, marketing, finance niches.", website: "https://www.meetup.com/find/?keywords=professional%20networking&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Find meetups", isAffiliate: false },
    { name: "WeWork / Spaces events", audience: "Coworking members", ageRange: "25–45", typicalCost: "Membership", cities: "Major cities", note: "Lunches and community managers.", website: "https://www.wework.com/", partnerSlug: "wework", ctaLabel: "Find location", isAffiliate: false },
    { name: "LinkedIn Local", audience: "Professionals", ageRange: "25–55", typicalCost: "Free events", cities: "Urban", note: "Search LinkedIn Events NL.", website: "https://www.linkedin.com/", partnerSlug: "linkedin", ctaLabel: "Browse events", isAffiliate: false },
    { name: "BNI / networking chapters", audience: "Business owners", ageRange: "30–55", typicalCost: "Chapter fees", cities: "Nationwide", note: "Structured weekly referrals.", website: "https://www.bni.nl/", partnerSlug: "bni-nl", ctaLabel: "Find chapter", isAffiliate: false },
    { name: "Alumni chapters", audience: "University grads", ageRange: "22–50", typicalCost: "Free–low", cities: "Per university", note: "Dutch and international alumni.", website: "https://www.meetup.com/find/?keywords=alumni&location=nl--netherlands", partnerSlug: "meetup", ctaLabel: "Search alumni", isAffiliate: false },
  ] satisfies ServiceRow[],
  professionalBalanceTips: [
    "Follow up coffee invites within 48 hours after meetups.",
    "Join one sport or volunteer route unrelated to your industry.",
    "Coworking community managers often know local social calendars.",
    "BNI is structured — good for entrepreneurs, less for casual friends.",
  ],
  neighboursHeading: "Neighbours & Building Life",
  neighboursParagraphs: [
    "Neighbourhood friendships start with small rituals: hallway greetings, nodding on the street, a brief note when you move in. Many buildings use WhatsApp for packages, lost keys and street events — join when invited and keep messages practical at first.",
    "Buurt BBQs, King's Day street parties and community garden days connect you to people who live closest. Municipal newcomer pages and library boards list neighbourhood programmes that vary by gemeente.",
  ],
  neighbourTips: [
    "Introduce yourself briefly after moving — a short note or hallway hello is enough.",
    "Learn quiet hours and shared-space rules for laundry, bikes and garbage.",
    "Accept or extend small invitations — coffee, building drinks or buurt BBQ.",
    "Keep balcony and street frontage tidy — visible care signals respect.",
    "Use WhatsApp groups for practical alerts, not debates, unless culture allows.",
    "Check gemeente newcomer pages for neighbourhood integration activities.",
  ],
  neighbourScenarios: [
    { route: "Building WhatsApp", example: "Package alerts and lost-key help in Amsterdam apartment", firstStep: "Ask a neighbour how to join — stay practical at first" },
    { route: "Buurt BBQ", example: "Summer street party in Utrecht terraced neighbourhood", firstStep: "Bring a salad or drinks — offer to help setup" },
    { route: "Community garden", example: "Shared plot in Rotterdam south", firstStep: "Email gemeente or garden association for open days" },
    { route: "Hallway ritual", example: "Daily hello in The Hague apartment block", firstStep: "Learn names — invite for coffee after a month of greetings" },
  ] satisfies FriendshipScenario[],
  whatDoesntWorkHeading: "What Usually Does Not Work",
  whatDoesntWorkParagraphs: [
    "Some strategies feel productive but rarely build Dutch friendships on their own. Recognising anti-patterns saves months of frustration — replace passive waiting with one recurring activity you genuinely enjoy.",
  ],
  whatDoesntWorkRows: [
    { approach: "Bars and nightlife only", why: "Sporadic contact without shared context", instead: "Join a weekly club or volunteer shift" },
    { approach: "Waiting to be invited", why: "People assume newcomers are busy or temporary", instead: "Send one coffee invite per week" },
    { approach: "Expat-only bubble for years", why: "Fast orientation but slow local roots", instead: "Add one Dutch-language activity" },
    { approach: "One-off event hopping", why: "No familiarity between events", instead: "Attend the same group six times" },
    { approach: "Instant deep friendship expectations", why: "Trust needs repetition over months", instead: "Celebrate activity partners first" },
    { approach: "Ignoring calendar culture", why: "Vague plans rarely happen", instead: "Propose Tuesday 19:00 with a venue" },
    { approach: "Only work colleagues", why: "Relationships stay transactional", instead: "Join a non-work hobby club" },
    { approach: "Giving up in month one", why: "Circles form seasons, not weeks", instead: "Track attendance for six weeks minimum" },
  ] satisfies WhatDoesntWorkRow[],
  lifeStagesHeading: "Friendship Routes by Life Stage",
  lifeStagesParagraphs: [
    "Your best friendship channels depend on schedule, family status and energy. Students, young professionals, parents, couples and retirees each need different routes — forcing the most popular option rarely works.",
  ],
  lifeStageCards: [
    { stage: "Students (18–25)", challenges: "Transient classmates, tight budgets", bestRoutes: "University sports intros, student associations, library TaalCafé", tip: "Join one society for the full year — not only intro week." },
    { stage: "Young professionals (25–35)", challenges: "Work-heavy weeks, international turnover", bestRoutes: "Padel, running club, Meetup hobbies, coworking events", tip: "Schedule social time like gym sessions — recurring slots." },
    { stage: "Couples without children", challenges: "Couple-friend matching takes longer", bestRoutes: "Double-date dinners via club friends, board-game cafés, hiking groups", tip: "Befriend couples from your activity — invite for borrel at home." },
    { stage: "Parents", challenges: "Limited evening time", bestRoutes: "School gates, kids' sport clubs, parent associations, buurtcentrum", tip: "Saturday kids' sport is a parent social hub — stay for coffee." },
    { stage: "Remote workers", challenges: "Isolation without office", bestRoutes: "Coworking, library work sessions, daytime walking clubs", tip: "Leave home for social contact at least three days weekly." },
    { stage: "Retirees & 55+", challenges: "Smaller digital-first networks", bestRoutes: "Wandelnet walks, library groups, volunteer desks, choir", tip: "Buurtcentrum daytime programmes are underrated." },
  ] satisfies LifeStageCard[],
  citiesHeading: "Making Friends by City",
  citiesParagraphs: [
    "International population, club density and expat hub access vary sharply by city. Use city guides for neighbourhood detail — this table orients your friendship strategy.",
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", internationalPopulation: "Very high", bestRoutes: "Meetup, sports clubs, IN Amsterdam events", clubs: "Dense verenigingen and padel", expatHubs: "IN Amsterdam, InterNations", neighbourhood: "Canal belt vs suburbs differ" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", internationalPopulation: "High", bestRoutes: "Harbour events, running clubs, NL Cares", clubs: "Strong football and rowing", expatHubs: "Rotterdam International Center", neighbourhood: "Kop van Zuid vs Kralingen" },
    { city: "The Hague", href: "/netherlands/the-hague/", internationalPopulation: "High (diplomatic)", bestRoutes: "International centre, beach walks, AIC events", clubs: "Tennis and hockey strong", expatHubs: "The Hague International Centre", neighbourhood: "Scheveningen vs Bezuidenhout" },
    { city: "Utrecht", href: "/netherlands/utrecht/", internationalPopulation: "High (students)", bestRoutes: "University clubs, library TaalCafé, cycling groups", clubs: "Student-heavy, affordable", expatHubs: "Meetup and student networks", neighbourhood: "Centrum vs Leidsche Rijn" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", internationalPopulation: "Tech expats", bestRoutes: "High Tech Campus events, design meetups", clubs: "Compact but welcoming", expatHubs: "International Meetup groups", neighbourhood: "Strijp-S creative scene" },
    { city: "Groningen", href: "/netherlands/groningen/", internationalPopulation: "Student-heavy", bestRoutes: "University associations, affordable clubs", clubs: "Student sport dominant", expatHubs: "Student international desks", neighbourhood: "Compact city — bike everywhere" },
  ] satisfies CityFriendCard[],
  cityStrategyChecklist: [
    "Match strategy to pool size — Amsterdam rewards volume plus clubs; smaller cities reward one strong club.",
    "Read the city guide for neighbourhood social life.",
    "Join one city-specific Facebook or Meetup group before overcommitting.",
    "Train links connect Randstad cities — friendships can span cities.",
  ],
  successStoriesHeading: "How Expats Built Friendships",
  successStoriesParagraphs: [
    "These anonymised patterns come from common expat experiences — not guarantees. Most share weekly consistency over several months before friendships deepened.",
  ],
  successStories: [
    { profile: "Brazilian developer, 31", city: "Amsterdam", route: "Padel club via Meetup", outcome: "Three close friends after 4 months of weekly doubles", lesson: "Partner sports create natural repeat contact — stayed after training for borrel." },
    { profile: "Indian parent, 38", city: "Utrecht", route: "Kids' football club + school gate", outcome: "Neighbourhood parent group for coffee and childcare swaps", lesson: "Saturday sport sidelines are underrated parent social hubs." },
    { profile: "British retiree, 62", city: "Haarlem", route: "Wandelnet Sunday walks", outcome: "Walking group became lunch friends and travel companions", lesson: "Daytime clubs suit retirees better than evening Meetup events." },
    { profile: "German student, 23", city: "Groningen", route: "University rowing intro + TaalCafé", outcome: "Mixed Dutch–international friend circle by second semester", lesson: "Student sport intros are the fastest structured entry point." },
    { profile: "American designer, 29", city: "Rotterdam", route: "NL Cares food-bank shift", outcome: "Weekly volunteer team became dinner friends", lesson: "Volunteering created deeper bonds than large expat mixers." },
    { profile: "French couple, 34", city: "The Hague", route: "Buurt BBQ + building WhatsApp", outcome: "Close neighbours who watch cats and share tools", lesson: "Small neighbour rituals for months preceded the first home invite." },
  ] satisfies SuccessStory[],
  mistakesHeading: "Common Mistakes",
  mistakeCards: [
    { title: "Only large expat mixers", body: "Welcome events orient but rarely deepen — add a weekly local activity.", tip: "Join one vereniging or volunteer shift." },
    { title: "Never joining activities", body: "Waiting for spontaneous friendship misses Dutch activity-first culture.", tip: "Book a proefles sport intro this week." },
    { title: "Instant deep friendship expectations", body: "Trust builds through repetition — give clubs six weeks.", tip: "Return to the same group." },
    { title: "Waiting to be invited", body: "People assume you are busy — invite others to coffee.", tip: "Send one invite per week." },
    { title: "Ignoring Dutch language", body: "English suffices initially — Dutch opens local circles.", tip: "Learn ten neighbour phrases." },
    { title: "Expat-only bubble", body: "International friends help — local clubs deepen roots.", tip: "Add one Dutch-language activity." },
    { title: "One-off event hopping", body: "Six different events beat six visits to one group for depth.", tip: "Pick one route and attend six times." },
    { title: "Giving up in month one", body: "Circles take seasons, not weeks, to form.", tip: "Track attendance, not instant outcomes." },
  ] satisfies MistakeCard[],
  timelineHeading: "Six-Month Friendship Timeline",
  timelineParagraphs: [
    "Use this as a realistic rhythm — not a rigid script. Friendships often deepen between months three and six when familiar faces become trusted contacts.",
  ],
  integrationTimeline: [
    { phase: "Week 1–2", tasks: ["Greet neighbours — brief hello or introduction note", "Bookmark gemeente newcomer and library pages", "Browse Meetup and one sport vereniging for proefles"] },
    { phase: "Month 1", tasks: ["Attend chosen weekly activity at least four times", "Join building WhatsApp when invited", "Learn ten Dutch greetings and neighbour phrases"] },
    { phase: "Month 2–3", tasks: ["Stay with same weekly activity — familiarity deepens conversations", "Accept or extend one small invitation (coffee, borrel, buurt BBQ)", "Add second channel only if first fits your schedule"] },
    { phase: "Month 4–6", tasks: ["Evaluate friendship depth realistically — activity partners often become close friends", "Expand volunteer or club role if language allows", "Connect social life to city choice and language study plans"] },
  ] satisfies IntegrationTimelinePhase[],
  faq: [
    { q: "Is it hard to make friends in the Netherlands?", a: "It can feel slow at first because many adults have established circles. Sports clubs, volunteering, language cafés and neighbourhood life all help — weekly consistency matters more than any single channel." },
    { q: "Do Dutch people make friends with expats?", a: "Yes, especially in international cities and shared activities — sports, hobbies and volunteer teams. Shared routines matter more than nationality." },
    { q: "Do I need to speak Dutch to make friends?", a: "Not to start in Randstad cities — English works in many clubs and Meetups. Dutch effort is appreciated and opens local-only groups over time." },
    { q: "What is the best way to meet people?", a: "Combine one high-repeat weekly activity (sport, volunteer shift, hobby club) with one wider channel (Meetup, expat welcome event, neighbour gathering)." },
    { q: "How long does it take to make friends?", a: "Activity partners often appear in weeks; deeper friendships commonly develop between months three and six of the same weekly group." },
    { q: "Are expat groups enough?", a: "Good for orientation — pair with at least one local club or volunteer route for long-term roots and language practice." },
    { q: "How do I befriend neighbours?", a: "Small rituals: hallway greetings, joining building WhatsApp, accepting buurt BBQ invites and learning quiet-hour rules." },
    { q: "What mistakes should I avoid?", a: "Bar-only socialising, waiting to be invited, one-off event hopping, expat-only bubbles for years and giving up before six weeks of the same activity." },
  ],
  faqNextSteps: [
    "Pair FAQ answers with Dutch Social Norms for etiquette context.",
    "Community Basics covers broader integration routes.",
    "City guides compare neighbourhoods and social life.",
  ],
  relatedGuidesReadingOrder: [
    "Making Dutch Friends (this page) → friendship routes",
    "Expat Loneliness → emotional challenges and 30-day social reset",
    "Community Basics → neighbours, clubs, integration",
    "Dutch Social Norms → etiquette and direct communication",
  ],
  relatedGuides: [
    { label: "Expat Loneliness", href: EXPAT_LONELINESS_PATH, description: "Why loneliness is common after moving and how to rebuild community.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs, volunteering and integration.", status: "live" },
    { label: "Dutch Etiquette", href: "/netherlands/life/dutch-etiquette/", description: "Practical manners for greetings, dining and neighbours.", status: "live" },
    { label: "Dutch Humour Explained", href: "/netherlands/life/dutch-humour/", description: "Dry wit, sarcasm and teasing in everyday conversations.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette, greetings and social expectations.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Meeting people and activity-first social life.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Language hub for courses and municipal programs.", status: "comingSoon" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Colleague relationships and after-work borrels.", status: "live" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Compare cities for international life.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Expat Loneliness", href: EXPAT_LONELINESS_PATH, description: "Normalise relocation loneliness and run a 30-day social reset.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Broader integration and neighbourhood life.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Etiquette for visits, neighbours and direct communication.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Activity-first routes for meeting people.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and courses for daily life.", status: "comingSoon" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Compare social life by city.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Feeling isolated → Expat Loneliness guide for emotional context and reset plan.",
    "Broader integration → Community Basics after this guide.",
    "Etiquette context → Dutch Social Norms.",
    "Meeting people romantically → Dating guide.",
  ],
  officialSources: [
    {
      label: "Meetup",
      href: "https://www.meetup.com/find/?location=nl--netherlands",
      description: "Find local interest, language and social groups by city.",
      partnerSlug: "meetup",
    },
    {
      label: "Vrijwilligerswerk.nl",
      href: "https://www.vrijwilligerswerk.nl/",
      description: "National volunteer opportunity portal.",
      partnerSlug: "vrijwilligerswerk",
    },
    {
      label: "NOC*NSF sport clubs",
      href: "https://www.nocnsf.nl/",
      description: "Dutch sports federation — find affiliated clubs.",
      partnerSlug: "nocnsf",
    },
    {
      label: "Public libraries (OB)",
      href: "https://www.ob.nl/",
      description: "Library TaalCafés and community programmes nationwide.",
      partnerSlug: "ob-nl",
    },
  ] satisfies Array<{ label: string; href: string; description: string; partnerSlug?: string; isAffiliate?: boolean }>,
} as const;

export type MakingDutchFriendsPage = typeof makingDutchFriendsPage;
