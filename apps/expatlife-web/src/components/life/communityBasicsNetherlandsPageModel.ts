export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const FAMILY_LIFE_PATH = "/netherlands/life/family-life-netherlands/" as const;
export const VOLUNTEERING_PATH = "/netherlands/life/volunteering-netherlands/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;
export const LIVING_LANGUAGE_PATH = "/netherlands/living/language/" as const;
export const SURVIVAL_GUIDE_PATH = "/netherlands/living/survival-guide/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type CityCommunityCard = {
  city: string;
  href: string;
  internationalPopulation: string;
  communityVibe: string;
  socialOpportunities: string;
};

export type IntegrationTimelinePhase = {
  phase: string;
  tasks: string[];
};

export type ChecklistItem = {
  task: string;
  timing: string;
  detail: string;
};

export type CommunicationExample = {
  said: string;
  practicalMeaning: string;
};

export type FriendshipScenario = {
  route: string;
  example: string;
  firstStep: string;
};

export type VolunteerResource = {
  name: string;
  description: string;
  href: string;
};

export type ExpatHubExample = {
  city: string;
  name: string;
  description: string;
  href: string;
};

export type ChallengeCoping = {
  challenge: string;
  body: string;
  coping: string;
};

const INFOGRAPHIC_VERSION = "premium-v6";
const HERO_IMAGE_VERSION = "v3";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-community-basics-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const communityBasicsNetherlandsPage = {
  slug: "community-basics-netherlands",
  path: COMMUNITY_BASICS_NETHERLANDS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: "2026-10-22",
  seo: {
    title: "Community Basics in the Netherlands | Expat Integration Guide",
    description:
      "Learn how community life works in the Netherlands, including making friends, meeting locals, social etiquette, volunteering, clubs and practical integration tips.",
    keywords: [
      "community netherlands",
      "expat community netherlands",
      "living in netherlands expat",
      "dutch community culture",
      "expat life netherlands",
      "making friends netherlands",
      "dutch social culture",
      "integrating netherlands",
      "meeting people netherlands",
      "community life netherlands",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands",
    pageTitle: "Community Basics in the Netherlands",
    subtitle:
      "Learn how Dutch communities work, how to build social connections and how to feel at home after moving to the Netherlands.",
    primaryCta: { label: "Learn How to Integrate", href: "#intro" },
    secondaryCta: { label: "Explore Expat Life Guides", href: SURVIVAL_GUIDE_PATH },
    image: {
      src: `/images/heroes/netherlands-community-basics-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic scene of a diverse group of international residents laughing together at an outdoor neighborhood café beside a Dutch canal, with brick townhouses, bicycles and a small market in the background on a sunny afternoon.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#culture", label: "Culture" },
    { href: "#making-friends", label: "Friends" },
    { href: "#communication", label: "Communication" },
    { href: "#neighborhood", label: "Neighborhood" },
    { href: "#clubs", label: "Clubs" },
    { href: "#volunteering", label: "Volunteering" },
    { href: "#events", label: "Events" },
    { href: "#expat-networks", label: "Expat networks" },
    { href: "#families", label: "Families" },
    { href: "#students", label: "Students" },
    { href: "#digital", label: "Online" },
    { href: "#cities", label: "Cities" },
    { href: "#challenges", label: "Challenges" },
    { href: "#checklist", label: "Checklist" },
    { href: "#myths", label: "Myths" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium ExpatLife integration timeline: greet neighbors, join one club, volunteer weekly, build friendships over months.",
      "Use the week-by-month timeline — pick one social route early and repeat it for at least eight weeks before judging progress."
    ),
    snapshot: visual(
      "snapshot",
      "Premium ExpatLife six-pillar snapshot: clubs, sports, volunteering, neighbors, direct communication, and local events.",
      "Scan these six pillars first, then choose one or two that fit your schedule rather than trying every channel in week one."
    ),
    culture: visual(
      "culture",
      "Premium ExpatLife ecosystem diagram: sport club, buurt network, school parents, and professional meetups as social circle builders.",
      "Many Dutch social circles grow through activities, sports, local networks and professional groups rather than spontaneous street friendships."
    ),
    makingFriends: visual(
      "making-friends",
      "Premium ExpatLife route map with eight practical friendship paths and example scenarios for newcomers.",
      "Sports clubs, language classes, volunteering and neighborhood activities are reliable routes into local social life."
    ),
    communication: visual(
      "communication",
      "Premium ExpatLife direct communication reference: what is often said versus practical meaning for newcomers.",
      "When tone feels blunt, check the practical meaning column — directness is often issue-focused, not personal."
    ),
    neighborhood: visual(
      "neighborhood",
      "Premium ExpatLife building etiquette guide: greetings, quiet hours, shared spaces, and buurt WhatsApp groups.",
      "Small hallway greetings and building rules prevent friction — check quiet hours and laundry schedules for your building."
    ),
    clubs: visual(
      "clubs",
      "Premium ExpatLife sports and hobby club roster with trial sessions, intro courses, and social team culture.",
      "Ask about proefles trial sessions and social teams — club membership is the most common adult friendship route in the Netherlands."
    ),
    volunteering: visual(
      "volunteering",
      "Premium ExpatLife volunteer shift board with shelters, food banks, libraries, gardens, and festival examples.",
      "Book the same weekly shift for language practice and familiar faces — one-off days help less than recurring volunteer slots."
    ),
    events: visual(
      "events",
      "Premium ExpatLife year calendar of King's Day, markets, sports events, and neighborhood gatherings.",
      "King's Day, neighborhood markets and local festivals offer low-pressure ways to experience Dutch community life."
    ),
    expatNetworks: visual(
      "expat-networks",
      "Premium ExpatLife bridge diagram balancing expat orientation networks with local integration routes.",
      "Expat groups offer fast orientation — pairing them with local activities supports longer-term integration."
    ),
    families: visual(
      "families",
      "Premium ExpatLife family community flow: schools, parent groups, children's sports, and local activities.",
      "Schools, parent groups and children's activities often become the social anchor for relocating families."
    ),
    students: visual(
      "students",
      "Premium ExpatLife university campus map: associations, housing communities, intro week, and ESN routes.",
      "Student associations, housing communities and campus events create structured social entry points."
    ),
    digital: visual(
      "digital",
      "Premium ExpatLife online-to-in-person map: Facebook groups, Meetup, LinkedIn, WhatsApp, and local forums.",
      "Facebook groups, Meetup, LinkedIn and WhatsApp communities complement — but rarely replace — in-person routines."
    ),
    cities: visual(
      "cities",
      "Premium ExpatLife six-city comparison map for Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and Groningen.",
      "International population, neighborhood vibe and club culture differ by city — choose activities that fit your location."
    ),
    challenges: visual(
      "challenges",
      "Premium ExpatLife challenge board with culture shock, language barriers, isolation, and practical coping notes.",
      "Culture shock, language barriers and slow friendship depth are common — realistic expectations help you stay engaged."
    ),
    checklist: visual(
      "checklist",
      "Premium ExpatLife eight-step integration checklist with week-one through month-four timing hints.",
      "Work through this checklist over your first months — consistency on one club matters more than checking every box in week one."
    ),
    myths: visual(
      "myths",
      "Premium ExpatLife myth versus reality board with balanced explanations for common integration assumptions.",
      "Dutch social culture varies by person and context — broad stereotypes rarely match your actual neighborhood experience."
    ),
    faq: visual(
      "faq",
      "Premium ExpatLife FAQ record file with integration questions and concise orientation answers.",
      "Friendship, language needs and integration timelines differ — use official and local sources alongside peer experience."
    ),
    sources: visual(
      "sources",
      "Premium ExpatLife official resources desk: Government.nl, NederlandWereldwijd, and municipality programs.",
      "Government portals, NederlandWereldwijd and municipality websites list programs that vary by city and situation."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium ExpatLife journey map linking moving, cities, language, culture, family, and volunteering guides.",
      "Community life connects naturally to moving guides, city choice, language learning and family settling topics."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Community life essentials",
      items: [
        "Dutch communities are often organized, local and activity-based.",
        "Relationships frequently develop through repeated shared activities rather than one-off introductions.",
        "Sports, hobbies, volunteering and language learning are practical integration routes.",
        "Neighborhood contact and local events help newcomers feel grounded quickly.",
        "Integration is a long-term process — consistency beats intensity in the first year.",
      ],
    },
    snapshot: {
      title: "At a glance",
      items: [
        "Clubs and associations are a mainstream social route for adults.",
        "Sports participation is both cultural and social in many cities.",
        "Volunteering is common and valued in local communities.",
        "Neighbors matter — small greetings and building norms shape daily life.",
        "Direct communication is normal in many social and work contexts.",
        "Community events, markets and festivals happen year-round locally.",
      ],
    },
    culture: {
      title: "How circles form",
      items: [
        "Activity-based groups: sports, music, hiking and hobby clubs.",
        "Local community networks: neighborhood initiatives and buurt activities.",
        "Family networks: school parents, children's sports and playgroups.",
        "Professional groups: industry meetups and coworking communities.",
        "International communities: expat hubs and university networks.",
      ],
    },
    makingFriends: {
      title: "Practical routes",
      items: [
        "Join a sports club with beginner-friendly sessions or social leagues.",
        "Take Dutch or English conversation classes with recurring classmates.",
        "Attend Meetup or library events on a regular schedule.",
        "Volunteer weekly rather than once — familiarity builds trust.",
        "Say yes to neighbor invitations and local street or building events.",
      ],
    },
    communication: {
      title: "Reading directness",
      items: [
        "Feedback may focus on the issue, not on personal dislike.",
        "Short answers can be efficient rather than cold.",
        "Agendas and planning are common for social invitations.",
        "Humor and irony may differ from your home culture.",
        "Ask clarifying questions when tone feels unclear — many Dutch people appreciate clarity.",
      ],
    },
    neighborhood: {
      title: "Neighbor basics",
      items: [
        "Greet neighbors in hallways, on stairs and at the mailbox.",
        "Check building rules for noise, guests and shared spaces.",
        "Join local WhatsApp groups when invited — useful for alerts and events.",
        "Introduce yourself briefly after moving in when appropriate.",
        "Respect quiet hours and shared laundry or bike storage etiquette.",
      ],
    },
    clubs: {
      title: "Why clubs matter",
      items: [
        "Recurring practice sessions create natural friendship timelines.",
        "Club culture often includes drinks, team events and volunteer roles.",
        "Many clubs welcome beginners — ask about intro courses.",
        "Cycling, running and football are especially common entry points.",
        "Board-game cafés and music groups offer lower-intensity options.",
      ],
    },
    volunteering: {
      title: "Volunteering benefits",
      items: [
        "Structured contact with locals outside your workplace.",
        "Language practice in practical, task-focused settings.",
        "Visible contribution to your neighborhood or cause.",
        "Routes through libraries, shelters, food banks and cultural orgs.",
        "Municipality and NGO listings vary — search locally.",
      ],
    },
    events: {
      title: "Events calendar",
      items: [
        "King's Day street parties and orange-themed neighborhood gatherings.",
        "Seasonal markets and food festivals in most cities.",
        "Neighborhood clean-up days and buurt BBQs.",
        "Sports events from local clubs to national matches.",
        "Library and museum newcomer programs in larger cities.",
      ],
    },
    expatNetworks: {
      title: "Balanced approach",
      items: [
        "Expat groups help with orientation, housing tips and peer support.",
        "International clubs can feel familiar during early culture shock.",
        "Long-term integration usually benefits from local activities too.",
        "Professional networks support career moves but may stay work-focused.",
        "Combine expat contact with one local club or volunteer route.",
      ],
    },
    families: {
      title: "Family anchors",
      items: [
        "School parent groups (often via class WhatsApp or associations).",
        "Children's sports clubs and weekend activity programs.",
        "Playgrounds and neighborhood family events as low-barrier meetups.",
        "Municipal family programs and library children's hours.",
        "International school communities for globally mobile families.",
      ],
    },
    students: {
      title: "Student routes",
      items: [
        "University student associations (disputen, committees, sports).",
        "International student networks and buddy programs.",
        "Student housing communities with shared kitchens and events.",
        "Campus sports centers and intro-week activities.",
        "City student unions in university towns like Utrecht and Groningen.",
      ],
    },
    digital: {
      title: "Online tools",
      items: [
        "City Facebook groups for housing, events and questions.",
        "Meetup for hobby, language and professional gatherings.",
        "LinkedIn for industry communities and relocation peers.",
        "WhatsApp for class parents, sports teams and building groups.",
        "Local forums and Reddit communities for practical city tips.",
      ],
    },
    cities: {
      title: "City comparison",
      items: [
        "Amsterdam: large international scene plus dense neighborhood life.",
        "Rotterdam: diverse, creative communities and growing expat hubs.",
        "The Hague: diplomatic and family-oriented international networks.",
        "Utrecht: student energy and compact, walkable neighborhood culture.",
        "Eindhoven: tech industry communities and practical newcomer support.",
        "Groningen: student city with accessible, friendly local scale.",
      ],
    },
    challenges: {
      title: "Common struggles",
      items: [
        "Early culture shock when directness or planning norms differ.",
        "Language barriers limiting deeper conversations initially.",
        "Friendships that take months to deepen beyond activity partners.",
        "Homesickness and comparing every event to home.",
        "Work-only social life if clubs and neighbors are neglected.",
      ],
    },
    checklist: {
      title: "Integration habits",
      items: [
        "Pick one activity and attend for at least three months.",
        "Introduce yourself to at least two neighbors in your building or street.",
        "Learn ten practical Dutch phrases for daily interactions.",
        "Attend one local event per month outside your expat bubble.",
        "Follow municipal newcomer pages for your gemeente.",
      ],
    },
    myths: {
      title: "Nuanced reality",
      items: [
        "Friendliness varies by person, neighborhood and context.",
        "Many expats build close local friendships over time.",
        "Basic Dutch helps — fluent Dutch is not always required to start.",
        "New social circles form at every life stage, including after 30.",
        "Expat communities exist in most major cities, not only Amsterdam.",
      ],
    },
    faq: {
      title: "Quick answers",
      items: [
        "Friendliness is situational — activity groups reveal warmth over time.",
        "Clubs, classes and volunteering are the most cited practical routes.",
        "Dutch helps depth; English works in many cities for starting out.",
        "Integration timelines range from months to years — stay consistent.",
        "Sports clubs often have intro sessions and social team culture.",
      ],
    },
    sources: {
      title: "Official orientation",
      items: [
        "Government.nl publishes national context on living and participation.",
        "NederlandWereldwijd offers practical newcomer orientation resources.",
        "Municipality websites list local integration programs and activities.",
        "Programs and eligibility vary by gemeente — verify locally.",
        "This guide is general information, not legal or immigration advice.",
      ],
    },
    relatedGuides: {
      title: "Connected topics",
      items: [
        "Moving guides sequence registration with settling-in social life.",
        "City guides help you choose neighborhoods with community fit.",
        "Language learning accelerates neighbor and club conversations.",
        "Culture guides explain etiquette behind direct communication.",
        "Family and volunteering guides deepen household integration paths.",
      ],
    },
  },
  quickAnswer: {
    heading: "What Is Community Life Like in the Netherlands?",
    summaryPoints: [
      "Dutch communities are often organized, local, activity-based and welcoming once relationships develop.",
      "Many expats build successful social lives through sports, hobbies, volunteering, language learning and neighborhood activities.",
      "Consistency in one or two social routes usually matters more than trying every channel in the first month.",
    ],
  },
  snapshotCards: [
    { title: "Clubs are popular", body: "Sports and hobby verenigingen are a mainstream way adults meet people outside work — ask about proefles trial sessions." },
    { title: "Sports are important socially", body: "Football, cycling, running and tennis clubs combine fitness with team drinks, tournaments and weekend events." },
    { title: "Volunteering is common", body: "Food banks, libraries and shelters often prefer the same weekly volunteer — reliable shifts build familiarity fast." },
    { title: "Neighbors matter", body: "Hallway greetings, quiet-hour rules and buurt WhatsApp groups shape everyday life in apartments and terraced streets." },
    { title: "Direct communication is normal", body: "Plain feedback is often practical, not personal — confirm plans explicitly and ask clarifying questions when tone feels unclear." },
    { title: "Community events are everywhere", body: "King's Day, weekly markets, buurt BBQs and library programs offer recurring low-pressure social touchpoints." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick one or two pillars in your first month — not all six at once.",
    "Match routes to your schedule: a weekly club beats three one-off meetups.",
    "Pair an expat orientation group with at least one local activity for balance.",
    "Use city and gemeente event calendars to find neighborhood gatherings near your address.",
    "Revisit this snapshot after month two when your routine and energy level are clearer.",
  ],
  integrationTimeline: [
    {
      phase: "Week 1–2",
      tasks: [
        "Greet neighbors in the hallway or street — a brief hello or introduction note is enough.",
        "Find your gemeente newcomer page and bookmark local event listings.",
        "Join building or street WhatsApp when invited; use it for practical alerts first.",
      ],
    },
    {
      phase: "Month 1",
      tasks: [
        "Choose one club, class or volunteer route and attend at least twice.",
        "Learn ten Dutch phrases for greetings, shops and neighbor requests.",
        "Attend one local event (market, library program or neighborhood gathering).",
      ],
    },
    {
      phase: "Month 2–3",
      tasks: [
        "Keep the same weekly activity — familiarity is when conversations deepen.",
        "Accept or extend a small invitation: coffee, building drinks or buurt BBQ.",
        "Explore a second social channel only if the first one fits your schedule.",
      ],
    },
    {
      phase: "Month 4–6",
      tasks: [
        "Evaluate friendship depth realistically — activity partners often become close friends over time.",
        "Expand volunteering or club roles if language and confidence allow.",
        "Connect community life to city choice, language study and family routines.",
      ],
    },
  ] satisfies IntegrationTimelinePhase[],
  culture: {
    heading: "How Dutch Communities Work",
    paragraphs: [
      "Many Dutch social circles are built around shared activities rather than spontaneous street friendships. Sports clubs, hobby associations, parent groups, neighborhood initiatives and professional networks all create structured ways to meet people repeatedly.",
      "Community participation often means showing up consistently. Local involvement — from a weekly run group to a library volunteer shift — signals reliability and opens deeper conversations over time.",
      "This is not a uniform national personality type. Neighborhoods, cities and individual contexts differ widely. The practical pattern is activity-first social life: find a recurring group, participate regularly and let friendships develop naturally.",
    ],
  },
  cultureDrivers: [
    { title: "Activity-based groups", body: "Sports, music, hiking and hobby clubs provide scheduled contact and shared goals." },
    { title: "Local communities", body: "Neighborhood associations, buurt BBQs and street initiatives connect residents to their area." },
    { title: "Family networks", body: "School parents, children's sports and playgroups anchor family social life." },
    { title: "Professional groups", body: "Industry meetups, coworking communities and alumni networks support career movers." },
  ] satisfies TipCard[],
  makingFriends: {
    heading: "How Expats Commonly Make Friends",
    paragraphs: [
      "There is no single secret route — most successful newcomers combine two or three channels and stay with them for several months. One-off networking events rarely replace the familiarity built through a weekly club or class.",
      "Sports clubs, language courses, volunteer shifts, professional meetups, local festivals and neighborhood activities each offer different social depth. Try routes that match your energy level and schedule rather than forcing the most popular option.",
      "Examples: joining a beginner football training group in Rotterdam, attending a weekly Dutch café at a local library in Utrecht, volunteering at an animal shelter in The Hague, or joining a cycling club with social rides in Amsterdam.",
    ],
  },
  makingFriendsCards: [
    { title: "Sports clubs", body: "Football, tennis, running and cycling clubs often welcome newcomers — ask about intro sessions and social teams." },
    { title: "Language classes", body: "Municipal courses, library cafés and private schools create recurring classmates and practice partners." },
    { title: "Meetups", body: "Hobby, language and professional Meetup groups are common in Amsterdam, Rotterdam and Eindhoven." },
    { title: "Volunteer groups", body: "Food banks, shelters and community centers offer structured weekly contact with locals." },
    { title: "Professional networks", body: "Industry events and coworking communities help career movers — pair with a local club for balance." },
    { title: "Local events", body: "Markets, King's Day, neighborhood festivals and library programs are low-pressure entry points." },
    { title: "Hobby clubs", body: "Board games, photography, music and hiking groups exist in most cities via clubs or Meetup." },
    { title: "Neighborhood activities", body: "Building drinks, street clean-ups and buurt BBQs help you meet people who live near you." },
  ] satisfies TipCard[],
  makingFriendsScenarios: [
    {
      route: "Sports club",
      example: "Beginner football training in Rotterdam or parkrun in Utrecht",
      firstStep: "Search local vereniging site for proefles or social team signup",
    },
    {
      route: "Language café",
      example: "Weekly Dutch conversation at a library in The Hague",
      firstStep: "Book municipal or library program — same day each week",
    },
    {
      route: "Volunteering",
      example: "Saturday food-bank shift or shelter dog-walking",
      firstStep: "Apply for a recurring slot, not a one-off open day",
    },
    {
      route: "Neighborhood",
      example: "Buurt BBQ or building introduction after move-in",
      firstStep: "Introduce yourself briefly; accept small street or hall invitations",
    },
  ] satisfies FriendshipScenario[],
  communication: {
    heading: "Understanding Direct Communication",
    paragraphs: [
      "Dutch communication is often described as direct, honest and efficient. In meetings, neighbor discussions and even friendly feedback, people may state opinions plainly rather than layering indirect hints.",
      "Newcomers sometimes interpret this as coldness or unfriendliness. In many contexts it is practical: addressing an issue quickly, agreeing on plans clearly or giving actionable feedback without excessive softening.",
      "Balance matters on both sides. Learning local norms — while keeping your own communication style — reduces friction. When tone feels unclear, asking a clarifying question is usually acceptable and often appreciated.",
    ],
  },
  communicationTips: [
    "Separate content from intent — direct feedback may target a situation, not your character.",
    "Confirm plans explicitly; vague 'maybe' answers can mean genuine uncertainty.",
    "Calendar invites and start times are often taken literally — punctuality signals respect.",
    "Humor and irony may land differently; observe before assuming offense or warmth.",
    "In neighbor contexts, brief polite clarity prevents small issues from growing.",
    "Learning a few Dutch phrases for greetings and requests softens early interactions.",
  ],
  communicationExamples: [
    { said: "That will not work", practicalMeaning: "Issue-focused feedback — often about the plan or problem, not you personally." },
    { said: "Let's plan Tuesday at 19:00", practicalMeaning: "Concrete invitation — confirm yes or no rather than assuming flexibility." },
    { said: "Fine / prima", practicalMeaning: "Agreement confirmed — short answers can mean efficiency, not dismissal." },
    { said: "Direct question about noise or bikes", practicalMeaning: "Practical neighbor issue — respond calmly with a clear next step." },
  ] satisfies CommunicationExample[],
  neighborhood: {
    heading: "Getting to Know Your Neighborhood",
    paragraphs: [
      "Neighborhood life in the Netherlands often starts with small rituals: greeting neighbors in the hallway, nodding on the street, or a brief introduction when you move in. These gestures signal that you are part of the building or street community.",
      "Many areas use WhatsApp groups for building alerts, lost keys, package deliveries or street events. Join when invited and use them practically — they are rarely mandatory but often helpful.",
      "Neighborhood initiatives include community gardens, clean-up days, local markets and buurt BBQs. Municipal websites and library bulletin boards list activities that vary by gemeente.",
    ],
  },
  neighborhoodTips: [
    "Introduce yourself briefly after moving — a short note or hallway hello is often enough.",
    "Learn quiet hours and shared-space rules for laundry, bikes and garbage areas.",
    "Accept or extend small invitations — coffee, street events or building drinks build familiarity.",
    "Keep balcony, garden and street frontage tidy — visible care signals neighbor respect.",
    "Use WhatsApp groups for practical alerts, not debates, unless the group culture allows it.",
    "Check municipality newcomer pages for neighborhood programs and integration activities.",
  ],
  clubs: {
    heading: "Joining Clubs and Activities",
    paragraphs: [
      "Clubs (verenigingen) are a cornerstone of Dutch social life for children and adults. Joining one club — and attending regularly — is often more effective than attending ten one-off events.",
      "Football dominates culturally, but tennis, running, cycling, hiking, fitness, board games and music offer strong communities too. Many clubs run beginner courses, social leagues or 'proeflessen' (trial sessions).",
      "Club membership usually involves a modest fee, a predictable schedule and optional social events. The social layer — team drinks, tournaments, volunteer board roles — is where many adult friendships deepen.",
    ],
  },
  clubActivities: [
    { title: "Football", body: "Local clubs and five-a-side leagues are everywhere — many offer social or beginner teams." },
    { title: "Tennis", body: "Clubs often combine lessons, ladder play and summer tournaments with clubhouse culture." },
    { title: "Running", body: "Park runs, club training and charity races create weekly group contact." },
    { title: "Cycling", body: "Touring clubs and social ride groups are popular — especially in flatter regions." },
    { title: "Hiking", body: "Walking associations plan weekend routes and coach newcomers on gear and pace." },
    { title: "Board games", body: "Cafés and clubs host open evenings — low commitment and easy conversation." },
    { title: "Music", body: "Choirs, bands and community music schools welcome hobbyists at many skill levels." },
    { title: "Fitness", body: "Gyms and CrossFit boxes often run intro weeks — pair with a club for deeper social ties." },
  ] satisfies TipCard[],
  clubJoiningSteps: [
    "Search '[sport] vereniging [your city]' or ask neighbors which local club they use.",
    "Ask about proefles (trial lesson) or beginner group before paying full annual membership.",
    "Check schedule fit — Tuesday evening training only works if you can attend most weeks.",
    "Ask whether social teams, English-friendly groups or mixed-level sessions exist.",
    "Budget for membership plus optional kit; many clubs post fees on their website.",
    "Attend at least six sessions before deciding the club is not your social fit.",
  ],
  volunteering: {
    heading: "Volunteering Opportunities",
    paragraphs: [
      "Volunteering can help you meet people, practice Dutch and integrate faster while contributing to your community. Many organizations value reliable weekly volunteers more than occasional one-day help.",
      "Examples include animal shelters, food banks, community centers, environmental clean-up projects, library programs and cultural organizations. Municipal websites and Volunteer the Netherlands (Vrijwilligerswerk) style portals list local openings.",
      "Eligibility, language requirements and time commitments vary. Start with a role that matches your language level and schedule, then expand as confidence grows.",
    ],
  },
  volunteeringExamples: [
    { title: "Animal shelters", body: "Dog walking and care shifts combine routine contact with practical tasks." },
    { title: "Community centers", body: "Event support, café service and newcomer programs welcome international volunteers." },
    { title: "Environmental projects", body: "Park clean-ups and community gardens connect you to neighborhood activists." },
    { title: "Cultural organizations", body: "Museums, festivals and arts venues often need ticket, guide and logistics help." },
    { title: "Food banks", body: "Sorting and distribution shifts are common entry points with clear schedules." },
    { title: "Libraries", body: "Language cafés, children's hours and shelving roles support language practice." },
  ] satisfies TipCard[],
  volunteerResources: [
    {
      name: "Vrijwilligerswerk.nl",
      description: "National volunteer portal — search by city, cause and weekly availability.",
      href: "https://www.vrijwilligerswerk.nl/",
    },
    {
      name: "Your gemeente website",
      description: "Municipal pages often list integration programs, language cafés and local volunteer desks.",
      href: "https://www.government.nl/topics/municipalities",
    },
    {
      name: "Library language cafés",
      description: "Many public libraries run free conversation groups — good for language plus social contact.",
      href: "https://www.ob.nl/",
    },
  ] satisfies VolunteerResource[],
  events: {
    heading: "Popular Community Events",
    paragraphs: [
      "Community events provide seasonal rhythm and low-pressure social contact. King's Day transforms streets into orange-themed parties; summer brings food markets and harbor festivals; autumn and winter add light festivals and neighborhood gatherings.",
      "Sports events — from local club matches to national games — create shared conversation topics. Neighborhood gatherings such as buurt BBQs and street parties help you meet people who live closest to you.",
      "Check municipal event calendars, library listings and local news boards. A dedicated festivals guide is planned for deeper seasonal coverage across Dutch cities.",
    ],
  },
  eventExamples: [
    { title: "King's Day", body: "Nationwide street parties, flea markets and orange-themed neighborhood events on 27 April." },
    { title: "Local festivals", body: "City and harbor festivals, light trails and cultural weekends throughout the year." },
    { title: "Markets", body: "Weekly markets and seasonal food fairs — easy places to practice Dutch with vendors." },
    { title: "Sports events", body: "Club matches, running races and national games as social anchors." },
    { title: "Neighborhood gatherings", body: "Buurt BBQs, clean-up days and building drinks organized by residents." },
  ] satisfies TipCard[],
  expatNetworks: {
    heading: "Expat Networks and Communities",
    paragraphs: [
      "Expat groups, professional communities, international clubs and city-specific organizations help newcomers orient quickly. They offer housing tips, school advice, peer support and familiar social formats during early culture shock.",
      "Benefits include fast access to people who understand relocation stress. Limitations include staying inside an international bubble, missing local language practice and slower neighborhood integration if expat contact replaces local activities.",
      "A balanced approach works well: use expat networks for practical setup, then add at least one local club, volunteer route or neighborhood activity for long-term roots.",
    ],
  },
  expatNetworkTypes: [
    { title: "Expat groups", body: "Facebook communities, IN Amsterdam-style hubs and newcomer meetups in major cities." },
    { title: "Professional communities", body: "Industry associations, tech meetups and international chamber events." },
    { title: "International clubs", body: "Sports, social and cultural clubs serving globally mobile residents." },
    { title: "City expat organizations", body: "Rotterdam International Center, The Hague International Centre and similar desks." },
  ] satisfies TipCard[],
  expatHubExamples: [
    {
      city: "Amsterdam",
      name: "IN Amsterdam",
      description: "Newcomer desk for registration orientation, housing tips and community events.",
      href: "https://www.iamsterdam.com/en/live-work-study/newcomers",
    },
    {
      city: "Rotterdam",
      name: "Rotterdam International Center",
      description: "International newcomer support, events and practical settling-in resources.",
      href: "https://www.rotterdam.nl/en/international-centre",
    },
    {
      city: "The Hague",
      name: "The Hague International Centre",
      description: "Support for internationals, families and institutions in the Hague region.",
      href: "https://www.thehagueinternationalcentre.nl/",
    },
    {
      city: "Utrecht region",
      name: "International Welcome Centre Utrecht Region",
      description: "Regional newcomer information and community orientation.",
      href: "https://www.utrechtregion.com/",
    },
  ] satisfies ExpatHubExample[],
  families: {
    heading: "Families and Community",
    paragraphs: [
      "For relocating families, schools, parent groups, children's sports clubs and local activities often become the main social engine. Class WhatsApp groups, parent association events and weekend sports schedules create natural recurring contact.",
      "Municipal family programs, libraries and playgrounds offer additional entry points. International schools build their own communities — useful for globally mobile families, but still worth pairing with a local children's activity.",
      "Explore our family life guides for deeper coverage of schools, childcare and household settling — community participation grows naturally from those routines.",
    ],
  },
  familyCommunityRoutes: [
    { title: "Schools", body: "Parent evenings, class apps and school festivals introduce other families quickly." },
    { title: "Parent groups", body: "Class representatives and parent associations organize social events and volunteering." },
    { title: "Sports clubs", body: "Children's football, swimming and gymnastics clubs are social hubs for parents too." },
    { title: "Local activities", body: "Library children's hours, playgrounds and municipal family programs." },
    { title: "Community events", body: "Seasonal fairs and neighborhood parties where children meet first, parents follow." },
  ] satisfies TipCard[],
  students: {
    heading: "Students and Social Integration",
    paragraphs: [
      "Students often have structured social entry points: university associations, international student networks, housing communities and intro-week events. Dutch student culture includes strong association (dispuut) traditions in many cities.",
      "Housing communities with shared kitchens and common rooms accelerate friendships. Campus sports centers and student unions in cities like Utrecht, Groningen and Leiden run clubs and social committees.",
      "Balance association life with city exploration — local clubs and volunteer routes help students stay connected after graduation or internship moves.",
    ],
  },
  studentRoutes: [
    { title: "Universities", body: "International offices, buddy programs and campus event calendars." },
    { title: "Student associations", body: "Disputen, committees and sports associations with structured social roles." },
    { title: "Housing communities", body: "Student houses and SSH-style complexes with shared social spaces." },
    { title: "Events", body: "Intro weeks, cultural nights, sports tournaments and city student festivals." },
  ] satisfies TipCard[],
  digital: {
    heading: "Online Communities",
    paragraphs: [
      "Digital communities complement in-person routines but rarely replace them for deep integration. Facebook groups help with housing questions, event discovery and city tips. Meetup lists hobby and language gatherings. LinkedIn supports professional relocation peers.",
      "WhatsApp dominates practical coordination — class parents, sports teams, building groups and street communities. Local forums and Reddit communities offer candid city advice; verify important information on official sources.",
      "Use online tools to find activities, then commit to showing up in person consistently.",
    ],
  },
  digitalPlatforms: [
    { title: "Facebook Groups", body: "City expat groups, neighborhood forums and hobby communities." },
    { title: "Meetup", body: "Language cafés, hiking, tech talks and social hobby gatherings." },
    { title: "LinkedIn Groups", body: "Industry and relocation professional communities." },
    { title: "WhatsApp Communities", body: "Building groups, class parents, sports teams and street chats." },
    { title: "Local Forums", body: "City subreddits, expat forums and municipal comment boards for practical tips." },
  ] satisfies TipCard[],
  digitalUseTips: [
    "Use Facebook and Reddit for housing questions and event discovery — verify important facts officially.",
    "Meetup is useful for finding a first activity; consistency happens when you return in person.",
    "WhatsApp is for coordination once you belong to a team, class or building — not a substitute for showing up.",
    "LinkedIn helps career movers find peers — pair with a local club so work is not your only social circle.",
    "Save event dates to your calendar when you find them online — digital discovery needs an in-person follow-up.",
  ],
  cityCommunityCards: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      internationalPopulation: "Large international workforce and student population",
      communityVibe: "Dense neighborhoods, busy social calendar, many English-friendly entry points",
      socialOpportunities: "IN Amsterdam, expat meetups, canal-side clubs, museum and festival culture",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      internationalPopulation: "Growing international port and creative industries community",
      communityVibe: "Diverse, direct, neighborhood-focused with strong urban energy",
      socialOpportunities: "Rotterdam International Center, waterfront events, football and running clubs",
    },
    {
      city: "The Hague",
      href: "/netherlands/the-hague/",
      internationalPopulation: "Diplomatic, legal and NGO international community",
      communityVibe: "Family-oriented, international institutions, calmer residential districts",
      socialOpportunities: "The Hague International Centre, beach clubs, parent networks, cultural festivals",
    },
    {
      city: "Utrecht",
      href: "/netherlands/utrecht/",
      internationalPopulation: "Large student population and Randstad commuters",
      communityVibe: "Compact, walkable, youthful with strong association culture",
      socialOpportunities: "Student unions, cycling clubs, library programs, canal-side social life",
    },
    {
      city: "Eindhoven",
      href: "/netherlands/eindhoven/",
      internationalPopulation: "Tech industry and international talent hub",
      communityVibe: "Practical, innovation-focused, growing expat infrastructure",
      socialOpportunities: "Tech meetups, international company communities, sports and design events",
    },
    {
      city: "Groningen",
      href: "/netherlands/groningen/",
      internationalPopulation: "Student-heavy northern city with research community",
      communityVibe: "Accessible scale, friendly local pace, strong student social life",
      socialOpportunities: "University associations, cycling culture, affordable club sports, cultural venues",
    },
  ] satisfies CityCommunityCard[],
  challenges: {
    heading: "Common Social Challenges",
    paragraphs: [
      "Integration challenges are normal — not a sign that you chose the wrong country. Culture shock, language barriers, slow friendship depth, homesickness and workplace-only social circles are among the most common experiences newcomers report.",
      "Unrealistic expectations — expecting instant best friends or a copy of home social life — can amplify disappointment. Small, consistent steps usually outperform dramatic one-week social sprints.",
      "If isolation persists, combine peer support (expat or professional groups) with one structured local activity and consider municipal integration resources listed on official websites.",
    ],
  },
  challengeCards: [
    { title: "Culture shock", body: "Directness, planning norms and social pacing may feel unfamiliar in the first months." },
    { title: "Language barriers", body: "Limited Dutch can shrink conversation depth even when English works for basics." },
    { title: "Building deeper friendships", body: "Activity partners may take months to become close friends — patience helps." },
    { title: "Missing home", body: "Seasonal events and family distance can intensify homesickness — stay connected while building local roots." },
    { title: "Small social circles initially", body: "Starting from zero contacts is normal — one club expands your network over time." },
    { title: "Workplace-only social networks", body: "Office friends help but may disappear if you change jobs — diversify outside work." },
    { title: "Isolation", body: "Remote work and winter darkness can reduce spontaneous contact — schedule social time." },
    { title: "Unrealistic expectations", body: "Comparing every interaction to home or movie-style instant friendship slows progress." },
  ] satisfies TipCard[],
  challengeCoping: [
    {
      challenge: "Culture shock",
      body: "Direct feedback and reserved first meetings can feel cold early on.",
      coping: "Join a recurring activity; ask clarifying questions instead of assuming intent.",
    },
    {
      challenge: "Language barriers",
      body: "Small talk in Dutch may stall even when English works at work.",
      coping: "Use library language cafés and learn ten practical phrases for neighbors and shops.",
    },
    {
      challenge: "Slow friendship depth",
      body: "Teammates may stay activity partners for months before inviting you outside the club.",
      coping: "Stay consistent 8+ weeks; accept small invitations when they appear.",
    },
    {
      challenge: "Isolation",
      body: "Remote work and dark winter evenings reduce spontaneous contact.",
      coping: "Book one fixed social slot weekly — club, volunteer shift or neighborhood walk.",
    },
  ] satisfies ChallengeCoping[],
  integrationChecklistItems: [
    {
      task: "Join one club or class",
      timing: "Month 1",
      detail: "Pick a weekly activity you can attend at least twice a month for three months.",
    },
    {
      task: "Attend a local event",
      timing: "Monthly",
      detail: "Market, King's Day, library program or buurt gathering — low pressure, local contact.",
    },
    {
      task: "Meet neighbors",
      timing: "Week 1–2",
      detail: "Brief hello, intro note or building drinks when offered.",
    },
    {
      task: "Join a local group",
      timing: "Month 1",
      detail: "Buurt WhatsApp, sports team chat or class parent group when invited.",
    },
    {
      task: "Explore volunteering",
      timing: "Month 2",
      detail: "Book the same weekly shift at food bank, shelter or library program.",
    },
    {
      task: "Learn basic Dutch",
      timing: "Ongoing",
      detail: "Ten phrases for greetings, shops and neighbor requests — expand from there.",
    },
    {
      task: "Participate consistently",
      timing: "8+ weeks",
      detail: "Same club or volunteer slot — familiarity is when trust builds.",
    },
    {
      task: "Build long-term relationships",
      timing: "Month 4+",
      detail: "Accept invitations outside your activity; diversify beyond one circle.",
    },
  ] satisfies ChecklistItem[],
  myths: [
    {
      myth: "Dutch people are unfriendly",
      reality:
        "Many newcomers experience direct communication and reserved first meetings. Warmth often appears through reliability, invitations after repeated contact and practical help — not always through instant small talk.",
    },
    {
      myth: "Expats can't make local friends",
      reality:
        "Many expats build close friendships with Dutch neighbors, club teammates and colleagues. Activity-based routes and language practice improve odds over time.",
    },
    {
      myth: "You need fluent Dutch",
      reality:
        "Fluent Dutch helps depth, especially outside international workplaces. Basic Dutch plus consistent club attendance works for many newcomers in larger cities.",
    },
    {
      myth: "Everyone already has social circles",
      reality:
        "People join clubs, move cities and change jobs throughout life. New members are common in associations, parent groups and volunteer teams.",
    },
    {
      myth: "Only Amsterdam has expat communities",
      reality:
        "Rotterdam, The Hague, Utrecht, Eindhoven and university cities all have international networks, newcomer desks and hobby communities.",
    },
    {
      myth: "You must join expat groups",
      reality:
        "Expat groups are optional tools for orientation. Long-term integration often benefits from at least one local activity alongside international contact.",
    },
  ],
  faq: [
    {
      q: "Are Dutch people friendly?",
      a: "Friendliness varies by person, neighborhood and context. Many Dutch people are reserved in first meetings but warm and reliable once relationships develop through shared activities. Direct communication is common and is often practical rather than personal.",
    },
    {
      q: "How do I make friends?",
      a: "The most cited practical routes are sports clubs, hobby associations, language classes, volunteering and neighborhood activities. Choose one or two channels, attend consistently for several months and let familiarity build naturally.",
    },
    {
      q: "Do I need to speak Dutch?",
      a: "English works in many cities for starting out, especially in international workplaces and larger urban areas. Learning basic Dutch helps with neighbors, clubs, municipal services and deeper friendships. Fluency is not required to begin integrating.",
    },
    {
      q: "What are the best ways to integrate?",
      a: "Combine registration and housing setup with one club or volunteer commitment, neighbor contact, basic Dutch study and regular local events. Balance expat orientation groups with at least one local activity for long-term roots.",
    },
    {
      q: "Are expat communities active?",
      a: "Major cities have active expat Facebook groups, newcomer centers, international clubs and professional networks. They are useful for early orientation — pairing them with local activities supports deeper integration.",
    },
    {
      q: "How do sports clubs work?",
      a: "Most clubs charge a membership fee, run scheduled training or matches and include social events. Many offer trial sessions or beginner groups. Ask about English-friendly teams if language is a concern.",
    },
    {
      q: "Is volunteering common?",
      a: "Volunteering is a respected part of community life. Libraries, food banks, shelters, cultural organizations and environmental projects welcome regular volunteers. Search municipal listings and local NGO portals for openings.",
    },
    {
      q: "How long does integration take?",
      a: "Timelines vary widely — from a few months for activity partners to several years for deep local roots. Consistency, language progress and neighborhood contact usually matter more than a single intensive social month.",
    },
  ],
  sourceUsageTips: [
    "Use Government.nl for national context on living, working and participating in Dutch society.",
    "Use NederlandWereldwijd for practical newcomer orientation alongside city-specific activities.",
    "Check your municipality website for integration programs, volunteer listings and community events.",
    "Community resources and integration programs vary by gemeente — verify eligibility locally.",
    "This guide provides general information only, not legal, immigration or employment advice.",
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government information on living, working and community participation in the Netherlands.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Government portal with practical information for newcomers and Dutch nationals abroad.",
    },
    {
      label: "Municipality websites",
      href: "https://www.amsterdam.nl/",
      description: "Your gemeente website lists local integration programs, volunteer opportunities and community events. Examples include Amsterdam, Rotterdam, The Hague and Utrecht.",
    },
  ],
  sourcesDisclaimer:
    "Community resources, integration programs and local activities vary by municipality and change over time. Always verify current information with official government and municipal sources. This guide provides general orientation only.",
  relatedGuides: [
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Relocation timeline connecting registration with settling-in and community life.",
    },
    {
      label: "Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare Dutch cities for international population, neighborhoods and social opportunities.",
    },
    {
      label: "Learning Dutch",
      href: LANGUAGE_LEARNING_PATH,
      status: "comingSoon",
      description: "Planned language-learning hub for courses, apps and municipal programs.",
    },
    {
      label: "Dutch Social Norms",
      href: "/netherlands/life/dutch-social-norms/",
      status: "live",
      description: "Everyday etiquette, greetings, birthdays, punctuality and neighbour culture.",
    },
    {
      label: "Dating in the Netherlands",
      href: "/netherlands/life/dating-in-the-netherlands/",
      status: "live",
      description: "Dutch dating culture, apps, singles events and activity-first ways to meet people.",
    },
    {
      label: "Dutch Culture",
      href: DUTCH_CULTURE_PATH,
      status: "comingSoon",
      description: "Planned guide to Dutch culture, traditions and social norms beyond community basics.",
    },
    {
      label: "Family Life Netherlands",
      href: FAMILY_LIFE_PATH,
      status: "comingSoon",
      description: "Planned family settling guide connecting schools, childcare and community participation.",
    },
    {
      label: "Volunteering Netherlands",
      href: VOLUNTEERING_PATH,
      status: "comingSoon",
      description: "Planned deeper guide to volunteer routes, portals and municipal programs.",
    },
    {
      label: "Culture & Etiquette (Living)",
      href: LIVING_CULTURE_ETIQUETTE_PATH,
      status: "live",
      description: "Directness, invitations, public etiquette and neighbor norms in daily Dutch life.",
    },
    {
      label: "Language & Phrases (Living)",
      href: LIVING_LANGUAGE_PATH,
      status: "live",
      description: "Practical Dutch phrases and language orientation for everyday interactions.",
    },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    {
      label: "Dutch Culture",
      href: DUTCH_CULTURE_PATH,
      status: "comingSoon",
      description: "Traditions, social norms and cultural context for long-term integration.",
    },
    {
      label: "Learning Dutch",
      href: LANGUAGE_LEARNING_PATH,
      status: "comingSoon",
      description: "Courses, apps and municipal language programs for newcomers.",
    },
    {
      label: "Family Life",
      href: FAMILY_LIFE_PATH,
      status: "comingSoon",
      description: "Schools, parent networks and family community routes after relocation.",
    },
    {
      label: "Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Choose cities and neighborhoods that match your social and community preferences.",
    },
    {
      label: "Volunteering",
      href: VOLUNTEERING_PATH,
      status: "comingSoon",
      description: "Volunteer portals, municipal listings and practical integration through giving back.",
    },
  ] satisfies LifeGuideLink[],
} as const;

export type CommunityBasicsNetherlandsPage = typeof communityBasicsNetherlandsPage;
