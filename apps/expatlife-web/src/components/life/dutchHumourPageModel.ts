export const DUTCH_HUMOUR_PATH = "/netherlands/life/dutch-humour/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const DUTCH_ETIQUETTE_PATH = "/netherlands/life/dutch-etiquette/" as const;
export const DUTCH_BIRTHDAY_TRADITIONS_PATH = "/netherlands/life/dutch-birthday-traditions/" as const;
export const DUTCH_HOLIDAYS_TRADITIONS_PATH = "/netherlands/life/dutch-holidays-and-traditions/" as const;
export const MAKING_DUTCH_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };
export type MythCard = { myth: string; reality: string };
export type ScenarioCard = { title: string; body: string; tip: string };
export type MistakeCard = { title: string; body: string; tip: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type SnapshotMilestone = { label: string; value: string; note: string };
export type HumourTypeCard = { title: string; body: string; example: string };
export type DosDontRow = { do: string; dont: string };
export type RegionalCard = { region: string; tone: string; note: string };
export type ExpressionRow = { dutch: string; english: string; meaning: string; situation: string };
export type CultureCompareRow = { culture: string; tendency: string; note: string };
export type ContextExample = { situation: string; comment: string; howToRead: string };
export type RecoveryScript = { misread: string; tryThis: string; note: string };
export type SarcasmResponseScript = { heard: string; trySaying: string; note: string };
export type SelfDeprecationResponse = { comment: string; goodResponse: string; avoid: string };
export type RegionalHumourExample = { region: string; example: string; note: string };

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-dutch-humour";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchHumourPage = {
  slug: "dutch-humour",
  path: DUTCH_HUMOUR_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: DUTCH_CULTURE_PATH,
  publish: true,
  publishDate: "2026-12-16",
  seo: {
    title: "Dutch Humour Explained | Understanding Dutch Jokes & Communication",
    description:
      "Discover how Dutch humour works, including sarcasm, directness, workplace humour and common misunderstandings so you can better understand life in the Netherlands.",
    keywords: [
      "dutch humour",
      "dutch humor",
      "dutch sense of humour",
      "dutch jokes",
      "dutch humour explained",
      "dutch sarcasm",
      "dutch directness",
      "dutch communication",
      "dutch culture",
      "dutch personality",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture",
    pageTitle: "Dutch Humour Explained",
    subtitle:
      "Discover why Dutch humour often surprises newcomers, how it relates to direct communication and how you can better understand jokes, sarcasm and everyday conversations.",
    primaryCta: { label: "Understand Dutch Humour", href: "#intro" },
    secondaryCta: { label: "Explore Dutch Culture", href: DUTCH_CULTURE_PATH },
    chips: ["Dry wit", "Sarcasm", "Directness", "Workplace", "Friendship", "Regional"],
    disclaimer:
      "Orientation only — humour varies widely by person, age, region and context. Examples here are illustrative, not stereotypes about any nationality or group.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of diverse friends laughing together on canal-side steps at dusk in Amsterdam — candid storytelling moment, coffee cups and snacks, Dutch townhouses and bicycles softly blurred in the background, no text or branding.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#context", label: "Context" },
    { href: "#directness", label: "Directness" },
    { href: "#humour-types", label: "Types" },
    { href: "#everyday", label: "Daily life" },
    { href: "#workplace", label: "Workplace" },
    { href: "#friendship", label: "Friends" },
    { href: "#sarcasm", label: "Sarcasm" },
    { href: "#self-deprecation", label: "Self-deprecation" },
    { href: "#regional", label: "Regional" },
    { href: "#misunderstandings", label: "Misreadings" },
    { href: "#respond", label: "Respond" },
    { href: "#cross-cultures", label: "Cultures" },
    { href: "#boundaries", label: "Boundaries" },
    { href: "#myths", label: "Myths" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#expressions", label: "Phrases" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#culture-cluster", label: "Culture" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation notebook — six humour traits with expat tips, sidebar checklist: observe coffee breaks, ask if joking, compare work vs borrel tone.",
      "Use the six traits as lenses — then confirm with your friend group, not stereotypes."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six humour style cards with expat verification tips and month-by-month observation timeline on the right rail.",
      "Pick two styles to watch this week — dry wit and sarcasm are common starting points."
    ),
    context: visual(
      "context",
      "Premium hub diagram linking openness, practicality, equality and direct communication to everyday humour examples and newcomer notes.",
      "When a comment surprises you, ask whether it targets a situation or you personally."
    ),
    directness: visual(
      "directness",
      "Premium split bridge — friends lane vs workplace lane with example comments, meanings and when-to-react tips.",
      "The same phrase can be affectionate among friends and neutral at work — room matters."
    ),
    humourTypes: visual(
      "humour-types",
      "Premium file-drawer catalogue — eight humour types each with safe fictional example you can recognise in conversation.",
      "Spot irony and sarcasm first — they cause most newcomer misreadings."
    ),
    everyday: visual(
      "everyday",
      "Premium city route map — six daily-life scenes with what-is-funny explanation and try-this response for each.",
      "Everyday humour is often low-key — a raised eyebrow may be the whole joke."
    ),
    workplace: visual(
      "workplace",
      "Premium office split panel — meeting, coffee break, manager self-deprecation and borrel boundaries with professional tips.",
      "Observe your team's coffee-break tone before matching it in week one."
    ),
    friendship: visual(
      "friendship",
      "Premium trust timeline — how teasing intensity grows from month 1 to inside jokes with do-and-don't cards.",
      "Teasing usually signals comfort — say calmly if a comment feels too personal."
    ),
    sarcasm: visual(
      "sarcasm",
      "Premium sarcasm decoder table — what is said, what is meant, tone cue for three common examples.",
      "Try asking: 'Serieus of grapje?' — most people appreciate the clarity."
    ),
    selfDeprecation: visual(
      "self-deprecation",
      "Premium rapport ladder — four rungs from sharing a small flaw to warm counter-jokes with example phrases.",
      "Do not escalate someone else's self-deprecating comment — respond with warmth."
    ),
    regional: visual(
      "regional",
      "Premium Netherlands map — six region tendency cards with balanced individual-variation disclaimer.",
      "International cities often blend many humour styles — your team may not match regional labels."
    ),
    misunderstandings: visual(
      "misunderstandings",
      "Premium five-card board — common expat misreadings each with fix arrow and recovery tip.",
      "Most misfires are tone gaps — one clarifying question usually helps."
    ),
    respond: visual(
      "respond",
      "Premium clipboard checklist — eight actionable response habits from smile to shared-experience comments.",
      "You do not need to joke back immediately — observing is a valid first step."
    ),
    crossCultures: visual(
      "cross-cultures",
      "Premium comparison table — UK, USA, Germany, Southern Europe, Asia, Latin America tendencies with respectful framing.",
      "Compare tendencies, not rankings — your colleagues may not fit general labels."
    ),
    boundaries: visual(
      "boundaries",
      "Premium traffic-light matrix — red, amber and green humour zones with setting-specific guidance.",
      "When unsure, stay friendly and factual until rapport is established."
    ),
    myths: visual(
      "myths",
      "Premium six myth-vs-reality pairs — balanced explanations replacing stereotypes about Dutch humour.",
      "Replace nationality labels with questions about your specific circle."
    ),
    mistakes: visual(
      "mistakes",
      "Premium six expat mistake cards — each with why it happens and a concrete recovery tip.",
      "Adaptation gaps are normal — small tone adjustments go a long way."
    ),
    expressions: visual(
      "expressions",
      "Premium phrase record — Dutch, English, meaning and typical humorous situation for five everyday expressions.",
      "Hearing phrases in borrels beats flashcards alone — pair with Learning Dutch."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — eight practical answers on sarcasm, teasing, directness, responses, rudeness, regions and timeline.",
      "Confirm takeaways with friends and colleagues — humour is highly personal."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered canal route — seven related guides with when-to-use label at each stop.",
      "Suggested order: humour → social norms → etiquette → friends → workplace if employed."
    ),
    cultureCluster: visual(
      "culture-cluster",
      "Premium ecosystem hub — Dutch Culture centre with orbiting cluster guides and when-to-use labels.",
      "Pick the guide matching your current social or professional question."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next-step cards — Directness, Culture, Friends, Language, Community with when-to-use labels.",
      "Choose based on whether you need workplace clarity, social integration or language practice."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "How to read this guide",
      items: [
        "Humour varies by person, age, region and friendship depth.",
        "Dry and sarcastic comments are often affectionate among friends.",
        "Directness in jokes usually targets situations, not identity.",
        "Ask when unsure — most Dutch people prefer clarity over guessing.",
        "Observe borrels and coffee breaks before mirroring the tone.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Pick two styles to watch for this week — e.g. dry wit and teasing.",
        "Note whether colleagues joke differently after work than in meetings.",
        "Compare friend-group humour with neighbour small talk.",
        "Revisit after a few months — your circle shapes what you hear.",
      ],
    },
    context: {
      title: "Cultural context",
      items: [
        "Openness and equality often show up as informal teasing.",
        "Practical humour mocks situations — traffic, weather, bureaucracy.",
        "Expats may expect more obvious punchlines or warmer setup.",
        "Missing context is normal in year one — it improves with relationships.",
      ],
    },
    directness: {
      title: "Directness link",
      items: [
        "Honest exaggeration is a common comic device.",
        "Playful bluntness among friends differs from meeting feedback.",
        "See Dutch Directness at Work for professional communication.",
        "Social Norms explains broader direct-communication values.",
      ],
    },
    humourTypes: {
      title: "Type spotting",
      items: [
        "Deadpan delivery hides the punchline in the statement itself.",
        "Irony says one thing while meaning another — tone is the clue.",
        "Situational humour comments on shared Dutch experiences.",
        "Wordplay rewards basic Dutch — even partial understanding helps.",
      ],
    },
    everyday: {
      title: "Daily-life cues",
      items: [
        "Sports clubs and volunteer groups often use group teasing.",
        "Neighbour humour tends to stay light — weather, bikes, bins.",
        "Restaurant comments may target service speed, not the server personally.",
        "Family dinners mix gentle teasing with gezelligheid.",
      ],
    },
    workplace: {
      title: "Office humour",
      items: [
        "Coffee-break jokes differ from meeting-room feedback.",
        "Self-deprecation from managers can signal approachability.",
        "New hires should observe before initiating teasing.",
        "See Dutch Workplace Culture for team borrel norms.",
      ],
    },
    friendship: {
      title: "Friendship teasing",
      items: [
        "Nicknames often appear after months of shared activity.",
        "Inside jokes require shared history — do not force them.",
        "Teasing usually relaxes as trust grows.",
        "Making Dutch Friends explains how circles form over time.",
      ],
    },
    sarcasm: {
      title: "Sarcasm decoder",
      items: [
        "Exaggeration ('Great, another meeting') signals sarcasm.",
        "Flat tone plus opposite meaning is a common pattern.",
        "Sarcasm among friends rarely seeks a serious answer.",
        "Ask lightly if unsure — it is not considered rude.",
      ],
    },
    selfDeprecation: {
      title: "Self-deprecation",
      items: [
        "Making yourself the joke invites others to relax.",
        "It signals humility, not low self-esteem.",
        "Do not escalate someone else's self-deprecating comment.",
        "Respond with warmth or a light counter-joke if comfortable.",
      ],
    },
    regional: {
      title: "Regional notes",
      items: [
        "International cities mix many humour traditions.",
        "Brabant and Limburg may feel more expressive at carnivals.",
        "Northern provinces are often described as dry — individuals vary.",
        "Avoid treating any region as a single personality type.",
      ],
    },
    misunderstandings: {
      title: "When humour misfires",
      items: [
        "Literal translation misses irony and understatement.",
        "A joke about a situation can sound like criticism of you.",
        "Silence does not always mean offence — people may move on quickly.",
        "Clarify once, then adjust — most misfires are recoverable.",
      ],
    },
    respond: {
      title: "Joining in",
      items: [
        "Smile or chuckle even if you did not fully get the joke.",
        "Ask 'Was that serious?' when tone is ambiguous.",
        "Build rapport before attempting the same teasing level.",
        "Share light observations about shared experiences when ready.",
      ],
    },
    crossCultures: {
      title: "Cross-cultural lens",
      items: [
        "UK humour may share dry wit but differ in setup.",
        "US humour can feel more explicit or upbeat to some listeners.",
        "German directness parallels Dutch style in places — not identical.",
        "Compare tendencies, not rankings of which culture is funnier.",
      ],
    },
    boundaries: {
      title: "When to hold back",
      items: [
        "First meetings — stay friendly, skip edgy jokes.",
        "Sensitive topics — health, money, immigration status.",
        "Formal presentations — humour is team-dependent.",
        "New neighbour relationships — start with warmth, not teasing.",
      ],
    },
    myths: {
      title: "Balanced view",
      items: [
        "Not every Dutch person is sarcastic all the time.",
        "Humour preferences differ as much as music taste.",
        "Direct jokes are often affectionate, not hostile.",
        "Understanding improves with relationships, not nationality labels.",
      ],
    },
    mistakes: {
      title: "Recovery tips",
      items: [
        "Misread tone? Ask once, then move on.",
        "Tried too hard? Dial back and listen for a while.",
        "Avoided humour entirely? Start with light observations.",
        "Assumed criticism? Check whether it was situational humour.",
      ],
    },
    expressions: {
      title: "Phrase tips",
      items: [
        "Hè and hoor add playful emphasis in casual speech.",
        "Gezellig is sincere and humorous depending on tone.",
        "Hearing phrases in borrels beats flashcard-only learning.",
        "See Learning Dutch for pronunciation and courses.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Dutch Social Norms for communication context.",
        "Workplace tone has dedicated guides under Jobs.",
        "Language learning accelerates wordplay appreciation.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Start here for humour and tone in everyday life.",
        "Add Social Norms for unwritten rules beyond jokes.",
        "Add Etiquette for manners in specific situations.",
        "Add workplace guides when employed.",
      ],
    },
    cultureCluster: {
      title: "Culture cluster navigation",
      items: [
        "Dutch Culture — high-level overview of society and values.",
        "Social Norms — directness, privacy and invitations.",
        "Etiquette — practical manners for visits and dining.",
        "Directness at Work — professional feedback and meetings.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Workplace clarity → Dutch Directness at Work.",
        "Broader culture → Dutch Culture hub.",
        "Social integration → Making Friends and Community Basics.",
        "Language → Learning Dutch hub.",
      ],
    },
  },
  quickAnswer: {
    heading: "What Is Dutch Humour Like?",
    summary:
      "Many people describe Dutch humour as dry, direct, understated, sarcastic, observational and self-deprecating. Styles vary widely by age, region, personality, workplace and friendship group.",
    bullets: [
      "Dry wit and understatement are common — the joke may be in what is not said loudly.",
      "Sarcasm and irony often comment on situations, not people.",
      "Self-deprecating humour can build rapport and signal humility.",
      "Playful teasing among friends usually means comfort, not hostility.",
      "Direct communication and humour overlap — see context before reacting.",
    ],
    note:
      "Start by observing how colleagues joke at coffee breaks versus in meetings — then ask one trusted friend how their group uses sarcasm.",
  },
  snapshotSignals: [
    { label: "Dry", value: "Understated delivery", note: "Listen for flat tone" },
    { label: "Direct", value: "Says what it means", note: "Often situational" },
    { label: "Sarcastic", value: "Opposite meaning", note: "Ask if unsure" },
    { label: "Self-aware", value: "Laughs at oneself", note: "Builds rapport" },
  ] satisfies SnapshotSignal[],
  snapshotMilestones: [
    { label: "Week 1", value: "Observe tone", note: "Meetings vs borrels" },
    { label: "Month 1", value: "Ask one friend", note: "How does your group joke?" },
    { label: "Month 3", value: "Join lightly", note: "Shared-experience jokes" },
    { label: "Month 6+", value: "Inside jokes", note: "Trust-dependent" },
  ] satisfies SnapshotMilestone[],
  introParagraphs: [
    "Expats often arrive in the Netherlands prepared for wind, bikes and direct feedback — then discover a layer of humour that feels understated, ironic or unexpectedly blunt. A comment about the weather, a meeting or a delayed train may be a joke, a sincere complaint, or both at once.",
    "This guide explains how Dutch humour tends to work in everyday life: sarcasm, teasing, self-deprecation and the link to direct communication. For broader social values, see Dutch Social Norms. For manners in specific situations, see Dutch Etiquette. For high-level culture context, see Dutch Culture.",
  ],
  snapshotCards: [
    { title: "Dry humour", body: "Jokes delivered calmly — the humour is in the understatement, not a big performance." },
    { title: "Direct wit", body: "Comments that say plainly what others might hint at — often about shared situations." },
    { title: "Sarcasm", body: "Saying the opposite of what is meant — tone and exaggeration are the clues." },
    { title: "Self-deprecation", body: "Making yourself the subject of the joke — often signals humility and ease." },
    { title: "Playful teasing", body: "Gentle ribbing among friends — usually increases as trust grows." },
    { title: "Wordplay", body: "Puns and double meanings reward Dutch language learning over time." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two styles to listen for this week.",
    "Note whether the same person jokes differently at work and at a borrel.",
    "Compare what you hear with friends from your own background.",
    "Revisit after three months — your social circle shapes your experience.",
  ],
  introExpatQuestions: [
    { title: "How is this different from Social Norms?", body: "Social Norms covers unwritten rules broadly. This guide focuses specifically on jokes, sarcasm, teasing and wit." },
    { title: "Are Dutch people sarcastic?", body: "Many use sarcasm in casual settings — not everyone, and not always. Context and relationship matter." },
    { title: "Is teasing rude?", body: "Among friends it often signals closeness. With strangers or in formal settings, keep comments warm and neutral." },
    { title: "What if I do not get the joke?", body: "Smile, observe and ask when unsure. Most people prefer a clarifying question over silent confusion." },
  ] satisfies TipCard[],
  orientationFlowSteps: [
    "Week 1: observe how colleagues joke at coffee breaks versus in meetings.",
    "Month 1: ask one friend how their group uses sarcasm and teasing.",
    "Month 3: join with light shared-experience comments when comfortable.",
  ],
  humourOverviewCards: [
    { title: "Dry & deadpan", body: "Flat delivery — the funny part is the calm statement itself." },
    { title: "Irony & sarcasm", body: "Meaning opposite to the words — shared context helps decode it." },
    { title: "Observational", body: "Comments on everyday Dutch life — OV delays, rain, bureaucracy." },
    { title: "Self-deprecating", body: "The speaker makes themselves the target — invites others to relax." },
    { title: "Teasing", body: "Friendly ribbing among people who know each other well." },
    { title: "Situational", body: "Humour about the moment — a long queue, a broken bike pump, a meeting that could have been an email." },
  ] satisfies TipCard[],
  contextHeading: "Understanding the Context",
  contextParagraphs: [
    "Dutch humour often sits inside wider communication habits: openness about opinions, practical problem-solving, egalitarian social relations and a preference for saying things plainly. A joke about a delayed train may be both genuine annoyance and a shared bonding moment.",
    "Newcomers sometimes misread dry or sarcastic comments as criticism because the emotional packaging is smaller than in some cultures. Warmth may appear through reliability, invitations and shared activities rather than effusive language — humour included.",
  ],
  contextFactors: [
    { title: "Openness", body: "People may comment honestly on situations — humour is one way to soften blunt truths." },
    { title: "Practicality", body: "Jokes about inefficiency, weather or logistics reflect everyday shared experience." },
    { title: "Equality", body: "Teasing among peers signals that hierarchy is relaxed in social settings." },
    { title: "Direct communication", body: "Humour and honesty overlap — learn to read tone, not just words." },
  ] satisfies TipCard[],
  contextExamples: [
    { situation: "OV delay announcement", comment: "'Perfect — just what I needed today.'", howToRead: "Situational sarcasm about shared frustration — not directed at you." },
    { situation: "Friend cancels last minute", comment: "'No problem, I had nothing else to do anyway.'", howToRead: "Dry humour masking mild annoyance — warmth often returns quickly." },
    { situation: "Colleague praises a long meeting", comment: "'Short and sweet, as always.'", howToRead: "Workplace sarcasm about the meeting itself — observe who laughs." },
    { situation: "Neighbour mentions bike parking", comment: "'Nice spot you've found there.'", howToRead: "May be gentle sarcasm about a blocked path — clarify calmly if needed." },
    { situation: "Group photo in the rain", comment: "'Gezellig weather for pictures.'", howToRead: "Irony about bad weather — shared bonding, not criticism of you." },
  ] satisfies ContextExample[],
  contextAdaptationTips: [
    "When surprised, ask whether the comment targets a situation or you personally.",
    "Notice whether the speaker smiles, uses flat tone or looks for eye contact.",
    "Compare coffee-break humour with meeting-room feedback — intensity differs.",
    "Give yourself months, not days — context builds through repeated contact.",
  ],
  directnessHeading: "The Connection Between Humour and Directness",
  directnessParagraphs: [
    "Many Dutch jokes rely on honesty, exaggeration and playful bluntness. A colleague who says 'Well, that was efficient' after a long meeting may be sarcastic about the meeting, not attacking you personally.",
    "Directness at work has its own rules — feedback in meetings is usually issue-focused. Humour among friends can be sharper. The same sentence means different things depending on who says it, where and how well you know them.",
  ],
  directnessExamples: [
    { situation: "Friend after rain on a bike ride", comment: "'Lekker weer, hè?'", meaning: "Sarcasm about bad weather — shared suffering as bonding.", tip: "A grin or eye-roll confirms the joke." },
    { situation: "Colleague after a long presentation", comment: "'Kort en krachtig.' (Short and powerful.)", meaning: "Possible sarcasm if the presentation ran long — observe tone.", tip: "See Dutch Directness at Work for meeting culture." },
    { situation: "Neighbour about parking", comment: "'Fijn dat je daar staat.'", meaning: "May be sarcasm about a blocked spot — or a polite complaint.", tip: "Calm clarification beats assuming hostility." },
  ] satisfies Array<{ situation: string; comment: string; meaning: string; tip: string }>,
  humourTypesHeading: "Common Types of Dutch Humour",
  humourTypesParagraphs: [
    "No single style defines everyone. These types appear often enough that recognising them helps newcomers relax. Examples below are fictional and safe — real humour always depends on relationship and context.",
  ],
  humourTypes: [
    { title: "Dry humour", body: "Calm delivery without a big laugh cue.", example: "After a 20-minute OV delay: 'Perfect timing.'" },
    { title: "Deadpan", body: "Serious face, absurd content.", example: "'I love standing in the rain. Very refreshing.'" },
    { title: "Irony", body: "Words mean the opposite of the situation.", example: "'Gezellig druk hier' in an overcrowded train." },
    { title: "Sarcasm", body: "Mock praise or mock complaint.", example: "'Great idea to schedule this at 8 a.m.'" },
    { title: "Self-deprecating", body: "Speaker targets themselves.", example: "'My cooking is… an adventure.'" },
    { title: "Playful teasing", body: "Gentle ribbing of a friend.", example: "'Still on that old bike? Classic.'" },
    { title: "Situational", body: "The moment is the joke.", example: "Everyone silently watching a self-checkout error." },
    { title: "Wordplay", body: "Puns and double meanings in Dutch.", example: "Play on 'bank' (bench/bank) — rewards language learning." },
  ] satisfies HumourTypeCard[],
  everydayHeading: "Humour in Daily Life",
  everydayParagraphs: [
    "Everyday humour is often low-key — a comment, a look, a shared eye-roll. Understanding why something is funny usually requires knowing the situation: Dutch weather, cycling culture, appointment planning or sports club dynamics.",
  ],
  everydayScenarios: [
    { title: "Friends at a borrel", body: "Someone orders bitterballen and a friend says 'Healthy choice.' Tone is affectionate sarcasm about Dutch snack culture.", tip: "Join with a light counter-joke or laugh — no need to defend the snack." },
    { title: "Neighbours in the hallway", body: "Comment about 'nice and quiet' after a weekend drill — gentle situational humour about shared building life.", tip: "Keep responses brief and friendly." },
    { title: "Restaurant with colleagues", body: "Waiter is slow; someone says 'No rush, we have all evening' — sarcasm about Dutch service pace.", tip: "Common among friends; less common with strangers serving you." },
    { title: "Sports club after training", body: "Teasing about missed goals or old equipment — group bonding through mild ribbing.", tip: "Observe who teases whom before joining in." },
    { title: "Family dinner", body: "Parent jokes about their own cooking; teenager responds with deadpan 'It is edible.'", tip: "Self-deprecation plus dry reply — affectionate family rhythm." },
    { title: "Supermarket queue", body: "Shared sigh when self-scan fails — situational humour without a formal punchline.", tip: "A commiserating comment builds instant rapport." },
  ] satisfies ScenarioCard[],
  workplaceHeading: "Humour at Work",
  workplaceParagraphs: [
    "Workplace humour varies by team, sector and manager. Many offices allow light sarcasm at coffee machines but keep meetings focused. Self-deprecation from leaders can signal approachability; teasing newcomers too early can misfire.",
    "Professional boundaries matter — humour about performance, appearance or personal life can cross lines quickly. When employed, pair this section with Dutch Workplace Culture and Dutch Directness at Work.",
  ],
  workplaceScenarios: [
    { situation: "Monday meeting", humour: "Colleague: 'Shall we keep this under three hours?' after agenda review.", boundary: "Team-dependent — fine if group uses meeting humour; stay neutral if new." },
    { situation: "Coffee break", humour: "Jokes about email volume or printer failures.", boundary: "Usually safe — situational, not personal." },
    { situation: "Manager self-deprecates", humour: "'My spreadsheet skills are legendary — for the wrong reasons.'", boundary: "Signals approachability — respond warmly, do not escalate." },
    { situation: "Friday borrel", humour: "Teasing loosens; inside jokes appear.", boundary: "Optional attendance — observe before matching tone." },
    { situation: "Video call glitch", humour: "'Technology working perfectly as usual.'", boundary: "Shared situational humour — a smile is enough if new to the team." },
    { situation: "Deadline pressure", humour: "Dry comment about 'realistic planning.'", boundary: "Avoid piling on individuals — keep humour about the situation." },
  ] satisfies Array<{ situation: string; humour: string; boundary: string }>,
  workplaceTips: [
    "Week one: listen at coffee breaks before initiating teasing.",
    "Match sarcasm to the room — borrels differ from client calls.",
    "Self-deprecation from leaders invites warmth, not escalation.",
    "If a joke feels personal, ask privately — directness works both ways.",
  ],
  friendshipHeading: "How Friends Joke With Each Other",
  friendshipParagraphs: [
    "Friendship humour builds slowly. Playful teasing, nicknames and inside jokes usually appear after shared activities — sports, volunteering, language classes or repeated borrels. Teasing often signals that you are part of the group, not that you are unwelcome.",
  ],
  friendshipTips: [
    "Nicknames may reference hobbies or gentle flaws — accept with humour if comfortable.",
    "Inside jokes require shared history — do not force participation early.",
    "Long-term friends may use sharper sarcasm than acquaintances.",
    "If teasing feels too personal, say so calmly — directness works both ways.",
  ],
  friendshipScenarios: [
    { title: "Sports club borrel", body: "Teammates joke about missed passes — ribbing signals you belong to the group.", tip: "Laugh first; join with a light counter-joke only when rapport is clear." },
    { title: "Language class break", body: "Classmates mock their own Dutch mistakes — self-deprecation invites warmth.", tip: "Share your own small language slip rather than correcting others." },
    { title: "Long-term friend group", body: "Nicknames and sharper sarcasm appear after months of shared history.", tip: "Do not match intensity until you know the group's boundaries." },
    { title: "New acquaintance", body: "Humour stays gentle — situational comments about weather or queues.", tip: "Build trust through repeated activities before playful teasing." },
  ] satisfies ScenarioCard[],
  sarcasmHeading: "Understanding Dutch Sarcasm",
  sarcasmParagraphs: [
    "Sarcasm uses tone and exaggeration to mean the opposite of the literal words. It differs from criticism when the target is a situation (traffic, weather, meetings) rather than a person's character. Among friends, sarcasm often replaces a longer emotional explanation.",
  ],
  sarcasmExamples: [
    { literal: "'What lovely weather.'", actual: "It is raining — shared complaint as joke.", cue: "Flat tone, eye contact, maybe a smile." },
    { literal: "'That was super organised.'", actual: "Something was chaotic — situational sarcasm.", cue: "Exaggeration of praise for obvious failure." },
    { literal: "'No, I love waiting.'", actual: "Impatience expressed humorously.", cue: "Obvious opposite of true feeling." },
    { literal: "'Great, another meeting.'", actual: "Mild complaint about calendar load.", cue: "Eye-roll or sigh — rarely seeks a serious answer." },
    { literal: "'Lekker rustig hier.' (Nice and quiet here.)", actual: "Comment on noise, crowds or chaos.", cue: "Common in trains, offices or building work." },
    { literal: "'Dat ging lekker soepel.' (That went smoothly.)", actual: "Something did not go smoothly.", cue: "Deadpan delivery after a visible mishap." },
  ] satisfies Array<{ literal: string; actual: string; cue: string }>,
  sarcasmResponseScripts: [
    { heard: "Flat praise after something went wrong", trySaying: "Serieus of grapje? (Serious or joking?)", note: "Most people appreciate clarity — not considered rude." },
    { heard: "Comment about weather while raining", trySaying: "Ja, lekker… (Yeah, lovely…) with a smile", note: "Mirroring lightly shows you got the joke." },
    { heard: "Teasing about being late", trySaying: "Guilty — OV strikes again.", note: "Self-deprecating counter-joke often lands well among friends." },
    { heard: "Sarcasm you did not catch in a group", trySaying: "Wait — were you being sarcastic?", note: "Better than pretending you understood." },
  ] satisfies SarcasmResponseScript[],
  selfDeprecationHeading: "Laughing at Yourself",
  selfDeprecationParagraphs: [
    "Many Dutch people comfortably make themselves the subject of jokes — about cooking, navigation, sport skills or language mistakes. This can signal humility and invite others to relax. It is rarely an invitation for others to pile on harshly.",
  ],
  selfDeprecationExamples: [
    { example: "'I am not built for mornings.'", why: "Shared human flaw — invites agreement or counter self-joke." },
    { example: "'My Dutch is creative grammar.'", why: "Language learners often use this — warmth, not shame." },
    { example: "'I have no sense of direction — GPS is my friend.'", why: "Practical self-mockery common in cycling culture." },
    { example: "'My cooking is an experiment every time.'", why: "Signals humility before hosting — guests relax." },
    { example: "'I am terrible at remembering names.'", why: "Pre-empts awkwardness — others often share the same flaw." },
    { example: "'My bike maintenance skills are… optimistic.'", why: "Cycling culture makes this instantly relatable." },
  ] satisfies Array<{ example: string; why: string }>,
  selfDeprecationResponses: [
    { comment: "Friend: 'My presentation was a disaster.'", goodResponse: "'Happens to everyone — what part felt hardest?'", avoid: "Piling on with harsher jokes about their skills." },
    { comment: "Colleague: 'My Dutch is hopeless.'", goodResponse: "'You're doing fine — I still mix up de and het.'", avoid: "Correcting their grammar in front of others." },
    { comment: "Neighbour: 'I'm useless at DIY.'", goodResponse: "'Same here — I call the huismeester.'", avoid: "Listing everything they got wrong." },
    { comment: "New acquaintance downplays their cooking", goodResponse: "Warm acceptance — 'Sounds gezellig anyway.'", avoid: "Escalating with 'Yes, it was pretty bad.'" },
  ] satisfies SelfDeprecationResponse[],
  regionalHeading: "Humour Across the Netherlands",
  regionalParagraphs: [
    "Regional differences exist but individuals vary widely. International cities blend many traditions. Carnival regions may feel more expressive seasonally. Avoid treating any area as a uniform personality — these are tendencies for curious observers, not stereotypes.",
  ],
  regionalCards: [
    { region: "Amsterdam & Randstad", tone: "Cosmopolitan mix — many humour styles side by side.", note: "International exposure means less predictable national 'default'." },
    { region: "Rotterdam", tone: "Often described as direct and no-nonsense — dry wit common.", note: "City pride and practicality appear in local jokes." },
    { region: "Brabant", tone: "Carnival season brings expressive, playful humour.", note: "Seasonal — everyday tone may still be understated." },
    { region: "Limburg", tone: "Similar carnival culture; social warmth at events.", note: "Regional dialect adds wordplay layers." },
    { region: "Northern provinces", tone: "Often described as dry and understated.", note: "Individuals and cities still differ widely." },
    { region: "International cities", tone: "Office and university humour blends many cultures.", note: "Your team may not match national generalisations." },
  ] satisfies RegionalCard[],
  regionalHumourExamples: [
    { region: "Randstad office", example: "Dry comment about train delays — everyone nods.", note: "Shared commuter experience bonds the room." },
    { region: "Rotterdam pub", example: "Blunt joke about city rivalry with Amsterdam.", note: "Often affectionate — know your audience." },
    { region: "Brabant carnival", example: "Costume humour and wordplay in dialect.", note: "Seasonal expressiveness — everyday tone may differ." },
    { region: "University city", example: "Mix of international and Dutch sarcasm in one group.", note: "Your study or work circle matters more than the map." },
  ] satisfies RegionalHumourExample[],
  misunderstandingsHeading: "What Expats Often Misunderstand",
  misunderstandingsParagraphs: [
    "Misunderstandings are adaptation gaps, not permanent failures. Common patterns include taking ironic comments literally, hearing teasing as criticism, or expecting louder laugh cues. Time, context and one clarifying question usually help.",
  ],
  misunderstandingCards: [
    { title: "Taking jokes literally", body: "Sarcasm states the opposite — listen for exaggeration and shared context." },
    { title: "Confusing humour with criticism", body: "Comments often target situations (delays, weather) not your worth." },
    { title: "Missing irony", body: "Understatement hides the joke — a calm delivery is intentional." },
    { title: "Expecting obvious punchlines", body: "Humour may be a raised eyebrow, not a performed joke." },
    { title: "Overthinking comments", body: "Not every dry remark is deep — sometimes it is just a quick shared moment." },
  ] satisfies TipCard[],
  misunderstandingRecovery: [
    { misread: "You took sarcastic praise literally", tryThis: "Laugh lightly and say 'Ah, sarcasm — got it.'", note: "Most people move on quickly — no long apology needed." },
    { misread: "Teasing felt like a personal attack", tryThis: "Calmly: 'Was that a joke? I'm still learning your group's tone.'", note: "Directness is respected — better than silent resentment." },
    { misread: "You responded seriously to an ironic comment", tryThis: "Add a smile: 'Right… lovely weather indeed.'", note: "Mirroring shows you understood after a beat." },
    { misread: "You tried to match teasing too early", tryThis: "Dial back — observe for a few more weeks.", note: "Intensity grows with trust, not speed." },
    { misread: "You assumed the whole culture is unfriendly", tryThis: "Compare one friend group with one workplace team.", note: "Circles differ more than national labels suggest." },
  ] satisfies RecoveryScript[],
  respondHeading: "Joining the Conversation",
  respondChecklist: [
    "Smile or chuckle even when you are still decoding the joke.",
    "Ask lightly if unsure: 'Was that sarcasm?'",
    "Do not assume offence — check tone and relationship first.",
    "Learn context through shared activities before sharp teasing.",
    "Observe who jokes with whom and at what intensity.",
    "Take your time — humour comfort grows over months.",
    "Build relationships — trust makes jokes easier to read.",
    "Share light observations about shared experiences when ready.",
  ],
  respondDosDonts: [
    { do: "Smile and stay curious when unsure", dont: "Assume every dry comment is an insult" },
    { do: "Ask 'Serious or joking?' when tone is unclear", dont: "Force your own punchlines early in a friendship" },
    { do: "Join with light situational humour", dont: "Escalate someone else's self-deprecating joke" },
    { do: "Build context through shared activities", dont: "Correct Dutch humour as 'wrong' in front of a group" },
    { do: "Observe intensity before matching sarcasm", dont: "Take teasing personally without checking relationship depth" },
  ] satisfies DosDontRow[],
  crossCulturesHeading: "Different Cultures, Different Expectations",
  crossCulturesParagraphs: [
    "Humour styles differ globally. These are broad tendencies for orientation — not judgments about individuals. Your Dutch colleagues may have lived abroad; your international friends may share Dutch humour after years here.",
  ],
  cultureComparisons: [
    { culture: "United Kingdom", tendency: "Dry wit and understatement — some parallels with Dutch style.", note: "Class and context cues differ — do not assume identical." },
    { culture: "United States", tendency: "Often more explicit setup and upbeat delivery.", note: "Dutch humour may feel quieter or blunter by comparison." },
    { culture: "Germany", tendency: "Direct communication overlaps; humour varies by region.", note: "Shared northern European understatement in places." },
    { culture: "Southern Europe", tendency: "Often more expressive gesture and warmth in delivery.", note: "Dutch understatement may feel cool until rapport builds." },
    { culture: "East & Southeast Asia", tendency: "Varies widely — indirect humour and face-saving differ.", note: "Ask colleagues about their preferred style." },
    { culture: "Latin America", tendency: "Often warmer, more performative humour in social settings.", note: "Adaptation is mutual — share your style too." },
  ] satisfies CultureCompareRow[],
  crossCultureAdaptationTips: [
    "Share your own humour style when asked — adaptation works both ways.",
    "Avoid ranking cultures as 'funnier' or 'less funny' in conversation.",
    "Ask colleagues how they prefer feedback and jokes at work.",
    "Notice when your home-country setup cues do not land here.",
    "Give Dutch friends time — rapport changes how jokes read.",
    "Use shared activities (sport, volunteering) before sharp teasing.",
  ],
  crossCultureTipCards: [
    { title: "UK expats", body: "Dry wit may feel familiar — still confirm sarcasm in new groups." },
    { title: "US expats", body: "Explicit punchlines are less common — listen for understatement." },
    { title: "International teams", body: "Office humour may blend many styles — observe your desk first." },
    { title: "Partners & family", body: "Humour at home can differ from humour at work — separate contexts help." },
  ] satisfies TipCard[],
  boundariesHeading: "Reading the Situation",
  boundariesParagraphs: [
    "Context decides whether humour lands. Formal meetings, sensitive topics, new relationships and professional hierarchies require more caution. When unsure, stay friendly and factual until you know the group's norms.",
  ],
  boundaryScenarios: [
    { setting: "Formal client meeting", guidance: "Skip sarcasm — clarity and professionalism first.", note: "Humour may appear after rapport exists." },
    { setting: "New neighbour", guidance: "Warm greetings, no teasing until familiarity grows.", note: "See Dutch Etiquette for neighbour basics." },
    { setting: "Health or money topics", guidance: "Avoid jokes — these are private for many people.", note: "Redirect to neutral subjects." },
    { setting: "First week at work", guidance: "Observe coffee-break humour before contributing.", note: "See Workplace Culture guide." },
    { setting: "School parent group", guidance: "Keep humour gentle — children and policies vary.", note: "Follow school communication norms." },
    { setting: "Online group chats", guidance: "Tone is easy to misread — prefer clarity over sarcasm.", note: "Emoji or explicit 'joking' helps when unsure." },
    { setting: "Mixed-language conversation", guidance: "Wordplay may not land — use simple shared observations.", note: "Language level affects humour reception." },
  ] satisfies Array<{ setting: string; guidance: string; note: string }>,
  boundaryChecklist: [
    "Is the topic sensitive (health, money, immigration, appearance)?",
    "Do you know the group well enough for teasing?",
    "Would this joke work if tone were misread in writing?",
    "Are you in a formal setting where clarity matters more?",
    "When unsure, stay warm and factual — humour can wait.",
  ],
  humourTypeSpottingTips: [
    "Listen for flat delivery — deadpan hides the punchline in the words.",
    "Exaggerated praise often means the opposite happened.",
    "Comments about weather, OV or queues are usually situational.",
    "Among friends, teasing intensity rises with months of shared history.",
  ],
  myths: [
    { myth: "Dutch people are always sarcastic", reality: "Many use sarcasm casually; others prefer dry observation or warm sincerity. Personality and context vary widely." },
    { myth: "Everyone has the same humour", reality: "Age, region, international background and friend group shape style as much as nationality." },
    { myth: "Direct jokes are rude", reality: "Among friends, direct humour often signals comfort. With strangers or in formal settings, keep comments neutral." },
    { myth: "Nobody laughs at themselves", reality: "Self-deprecating humour is common and often builds rapport." },
    { myth: "Dutch humour is hard to understand", reality: "It takes time — shared experiences and language help more than nationality labels." },
    { myth: "Everyone likes teasing", reality: "Some enjoy sharp ribbing; others prefer gentle humour. Follow the group's lead." },
  ] satisfies MythCard[],
  mistakeCards: [
    { title: "Taking every joke personally", body: "Many comments target situations — delays, weather, shared Dutch experiences.", tip: "Ask whether the remark was about the situation or about you." },
    { title: "Trying too hard to be funny", body: "Forced jokes early in a relationship can misfire.", tip: "Observe first; join with light, shared observations." },
    { title: "Misreading tone in English", body: "Sarcasm cues differ — flat delivery hides intent.", tip: "Confirm with 'Serious or joking?'" },
    { title: "Avoiding humour completely", body: "Never joking can slow social bonding.", tip: "Start with safe situational comments." },
    { title: "Assuming criticism", body: "Direct phrasing may still be humour among friends.", tip: "Check relationship depth before reacting." },
    { title: "Judging differences too quickly", body: "Labelling an entire culture 'unfunny' blocks learning.", tip: "Compare styles with curiosity, not rankings." },
  ] satisfies MistakeCard[],
  expressionsHeading: "Common Playful Expressions",
  expressionsParagraphs: [
    "These phrases appear often in casual speech. Tone turns them sincere, playful or sarcastic. Hearing them in borrels and shops beats memorising alone.",
  ],
  expressions: [
    { dutch: "Lekker weer, hè?", english: "Nice weather, eh?", meaning: "Often sarcastic when raining — shared weather complaint.", situation: "Bike rides, OV platforms, neighbour chat." },
    { dutch: "Ach ja…", english: "Oh well…", meaning: "Resigned amusement at minor mishaps.", situation: "Spilled coffee, missed train, small failures." },
    { dutch: "Nou ja", english: "Well then / yeah well", meaning: "Playful dismissal or 'it is what it is.'", situation: "End of a light debate or story." },
    { dutch: "Gezellig!", english: "Cosy / convivial!", meaning: "Sincere warmth or ironic comment on chaos.", situation: "Crowded borrel, busy train, family gathering." },
    { dutch: "Hè? / Hoor", english: "Eh? / (emphasis particle)", meaning: "Softeners or playful emphasis — tone decides.", situation: "Casual confirmations and teasing." },
    { dutch: "Zo zo", english: "Well well", meaning: "Mild surprise or mock admiration.", situation: "Someone tells an exaggerated story." },
    { dutch: "Typisch Nederlands", english: "Typically Dutch", meaning: "Comment on a very Dutch situation — often affectionate.", situation: "Queues, planning, directness, bike culture." },
    { dutch: "Dat kan ook…", english: "That works too…", meaning: "Dry acceptance of an odd solution.", situation: "Improvised fixes, pragmatic workarounds." },
  ] satisfies ExpressionRow[],
  faq: [
    { q: "What is Dutch humour like?", a: "Often described as dry, direct, understated and sarcastic — but styles vary widely by person, region and context. Observational humour about everyday Dutch life is common." },
    { q: "Are Dutch people sarcastic?", a: "Many use sarcasm in casual settings, especially among friends. Not everyone does, and professional contexts are usually more restrained. Tone and relationship matter." },
    { q: "Why do Dutch people tease each other?", a: "Playful teasing among friends often signals comfort and equality. It usually grows with trust — it is not typically meant for strangers or formal settings." },
    { q: "Is Dutch humour connected to directness?", a: "Often yes — humour and honest communication overlap. Jokes may state plainly what others hint at. See Dutch Directness at Work for professional communication." },
    { q: "How should expats respond?", a: "Smile, observe and ask when unsure. You do not need to joke back immediately. Shared activities build the context that makes humour easier to read." },
    { q: "Can humour seem rude?", a: "Direct delivery can feel blunt without shared context. Among friends it is often affectionate. If uncomfortable, say so calmly — directness works both ways." },
    { q: "Does humour vary by region?", a: "Yes — carnival regions may feel more expressive seasonally; cities differ in international mix. Individuals always vary more than regional labels." },
    { q: "How long does it take to understand Dutch humour?", a: "Many expats feel more comfortable after a few months of shared experiences and friendships. Language learning helps with wordplay and nuance." },
  ],
  faqNextSteps: [
    "Read Dutch Social Norms for broader communication context.",
    "Practice phrases in our Learning Dutch hub.",
    "Use Making Dutch Friends to build the relationships where humour thrives.",
  ],
  relatedGuidesReadingOrder: [
    "Dutch Humour (this page) → jokes, sarcasm and tone in everyday life",
    "Dutch Social Norms → unwritten rules and direct communication",
    "Dutch Etiquette → practical manners in specific situations",
    "Dutch Directness at Work → professional feedback and meetings",
    "Making Dutch Friends → activity-first friendship routes",
  ],
  relatedGuides: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "High-level overview of Dutch society and culture cluster.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Unwritten rules, values and everyday expectations.", status: "live" },
    { label: "Dutch Etiquette", href: DUTCH_ETIQUETTE_PATH, description: "Practical manners for greetings, dining and neighbours.", status: "live" },
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Professional directness, feedback and meetings.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Meetings, borrels, emails and team culture.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Activity-first friendship routes via clubs and volunteering.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases, courses and language-learning routes.", status: "live" },
  ] satisfies LifeGuideLink[],
  cultureClusterCards: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "Culture cluster overview and society primer.", status: "live" },
    { label: "Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Unwritten rules and direct communication.", status: "live" },
    { label: "Etiquette", href: DUTCH_ETIQUETTE_PATH, description: "Practical manners for everyday situations.", status: "live" },
    { label: "Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Workplace feedback and meetings.", status: "live" },
    { label: "Making Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Friendship routes via clubs and activities.", status: "live" },
    { label: "Birthday Traditions", href: DUTCH_BIRTHDAY_TRADITIONS_PATH, description: "Circle parties and congratulations.", status: "live" },
    { label: "Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual celebrations calendar.", status: "live" },
    { label: "Dating", href: DATING_NETHERLANDS_PATH, description: "Meeting people and dating culture.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Professional communication and feedback.", status: "live" },
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "Culture cluster overview.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Activity-first friendship routes.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and learning routes.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs and integration.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Need workplace clarity → Dutch Directness at Work",
    "Need friends and context → Making Dutch Friends",
    "Need broader culture → Dutch Culture",
    "Need language → Learning Dutch",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government portal — society and cultural life." },
    { label: "Holland.com", href: "https://www.holland.com/", description: "Netherlands tourism board — cultural context for visitors." },
    { label: "DutchReview", href: "https://dutchreview.com/", description: "Independent English-language culture commentary — use as informal context, not authority." },
  ],
} as const;

export type DutchHumourPage = typeof dutchHumourPage;
