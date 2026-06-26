export const DUTCH_ETIQUETTE_PATH = "/netherlands/life/dutch-etiquette/" as const;
export const DUTCH_HUMOUR_PATH = "/netherlands/life/dutch-humour/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const DUTCH_BIRTHDAY_TRADITIONS_PATH = "/netherlands/life/dutch-birthday-traditions/" as const;
export const DUTCH_HOLIDAYS_TRADITIONS_PATH = "/netherlands/life/dutch-holidays-and-traditions/" as const;
export const MAKING_DUTCH_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type MythCard = { myth: string; reality: string };

export type SituationCard = { title: string; body: string; tip: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type SnapshotMilestone = { label: string; value: string; note: string };

export type DosDontRow = { do: string; dont: string };

export type GreetingExample = {
  setting: string;
  hello: string;
  goodbye: string;
  note: string;
};

export type HowToStep = { name: string; text?: string };

const INFOGRAPHIC_VERSION = "premium-v9";
const HERO_IMAGE_VERSION = "v3";
const VISUAL_PREFIX = "netherlands-dutch-etiquette";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchEtiquettePage = {
  slug: "dutch-etiquette",
  path: DUTCH_ETIQUETTE_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: DUTCH_CULTURE_PATH,
  publish: true,
  publishDate: "2026-12-12",
  seo: {
    title: "Dutch Etiquette | Complete Guide for Expats Living in the Netherlands",
    description:
      "Learn Dutch etiquette for greetings, dining, neighbours, workplaces, invitations, public behaviour and everyday life with this practical guide for expats.",
    keywords: [
      "dutch etiquette",
      "netherlands etiquette",
      "dutch manners",
      "dutch customs",
      "etiquette in the netherlands",
      "dutch greetings",
      "dutch dinner etiquette",
      "dutch social etiquette",
      "dutch culture guide",
      "dutch politeness",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture",
    pageTitle: "Dutch Etiquette",
    subtitle:
      "Understand the everyday etiquette, manners and unwritten rules that help newcomers feel comfortable living in the Netherlands.",
    primaryCta: { label: "Learn Dutch Etiquette", href: "#intro" },
    secondaryCta: { label: "Explore Dutch Culture", href: DUTCH_CULTURE_PATH },
    chips: ["Greetings", "Dining", "Neighbours", "Workplace", "Public space", "Gifts"],
    disclaimer:
      "Orientation only — etiquette varies by household, region, age and workplace. Observe locally and ask politely rather than assuming one national style fits everyone.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of Dutch house-visit etiquette — an international guest arriving with flowers and wine, greeting a Dutch host with a handshake at a brick townhouse door while neighbours chat on a quiet residential street, bicycles and café terrace in soft background, warm golden-hour light.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#greetings", label: "Greetings" },
    { href: "#visiting-home", label: "Visiting" },
    { href: "#dining", label: "Dining" },
    { href: "#gift-giving", label: "Gifts" },
    { href: "#workplace", label: "Workplace" },
    { href: "#neighbour", label: "Neighbours" },
    { href: "#public", label: "Public" },
    { href: "#shopping", label: "Shopping" },
    { href: "#online", label: "Online" },
    { href: "#family", label: "Family" },
    { href: "#cultural-differences", label: "Surprises" },
    { href: "#situations", label: "Situations" },
    { href: "#dos-donts", label: "Do's & don'ts" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#myths", label: "Myths" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#culture-cluster", label: "Culture" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation record with six Dutch etiquette values — respect, honesty, punctuality, equality, practicality, consideration — and first-week observation checklist.",
      "Use the values rail as orientation hints — verify how they show up in your neighbourhood and workplace."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six etiquette signal cards — be on time, be honest, respect privacy, bring small gifts, say what you mean, respect shared spaces — each with expat verification tip.",
      "Compare signals to your daily routines; these are common patterns, not universal rules."
    ),
    greetings: visual(
      "greetings",
      "Premium greeting reference board — handshake, three cheek kisses context, professional vs informal settings, neighbour hallway and shop phrases with example labels.",
      "Greeting style shifts by context — observe colleagues and neighbours before mirroring."
    ),
    visitingHome: visual(
      "visiting-home",
      "Premium house guest guide — arrival time, flowers, wine, chocolate, shoes, helping after dinner, thank-you message with household variation notes.",
      "Customs differ by household — ask whether to remove shoes and what to bring."
    ),
    dining: visual(
      "dining",
      "Premium dining etiquette panel — restaurant manners, bill splitting, coffee invitations, dinner parties, buffets, barbecues and table courtesy examples.",
      "Confirm payment style before ordering — practices vary by group and occasion."
    ),
    giftGiving: visual(
      "gift-giving",
      "Premium gift guide — birthdays, housewarming, Christmas, Sinterklaas, thank-you and business gifts with appropriate examples and price ranges.",
      "Modest, thoughtful gifts usually beat expensive gestures — match the occasion."
    ),
    workplace: visual(
      "workplace",
      "Premium workplace etiquette overview — meetings, feedback, emails, punctuality, hierarchy and professional behaviour with link to workplace culture guide.",
      "Office tone often differs from friend circles — see Dutch Workplace Culture for depth."
    ),
    neighbour: visual(
      "neighbour",
      "Premium neighbour etiquette map — greetings, noise, shared gardens, bins, parking, community events with municipal variation notes.",
      "Small hallway greetings and quiet-hour awareness prevent most neighbour friction."
    ),
    public: visual(
      "public",
      "Premium public behaviour guide — queues, cycling, public transport, phone calls, noise, escalators and shared spaces with practical examples.",
      "Quiet, considerate behaviour in shared spaces is widely appreciated."
    ),
    shopping: visual(
      "shopping",
      "Premium shopping etiquette panel — waiting your turn, supermarket flow, market manners, self-checkout and reusable bags with Dutch market context.",
      "Markets and small shops often expect a friendly greeting before browsing."
    ),
    online: visual(
      "online",
      "Premium digital communication board — WhatsApp groups, email tone, neighbourhood apps, social media and professional messaging with practical tips.",
      "Response times and group norms vary — observe before posting in neighbourhood chats."
    ),
    family: visual(
      "family",
      "Premium family gathering guide — birthdays, children, respect, hosting, meals and multi-generational visits with balanced guidance.",
      "Family customs vary widely — ask hosts about children, timing and food preferences."
    ),
    culturalDifferences: visual(
      "cultural-differences",
      "Premium newcomer surprise cards — direct communication, planning ahead, privacy, bill splitting, small talk and appointments with balanced explanations.",
      "Differences are adaptation gaps, not failures — ask questions when unsure."
    ),
    situations: visual(
      "situations",
      "Premium eight situation cards — restaurant, birthday, office, neighbour, sports club, volunteer event, school, public transport with practical do's.",
      "Recognise the setting first — the same person may behave differently at work and at a borrel."
    ),
    dosDonts: visual(
      "dos-donts",
      "Premium two-column do's and don'ts board — punctuality, appointments, questions, participation, consideration versus lateness, assumptions, cycle paths, invitations.",
      "Use as a quick reference before new social settings."
    ),
    mistakes: visual(
      "mistakes",
      "Premium eight expat mistake-fix board — lateness, ignored RSVPs, blocked bike lanes, spontaneous visits, misread directness and more.",
      "Most friction is an adaptation gap — small fixes go a long way."
    ),
    checklist: visual(
      "checklist",
      "Premium everyday Dutch etiquette checklist — punctual, privacy, follow-through, birthday congratulations, participation, Dutch phrases, public spaces, direct communication.",
      "Work through over your first months — consistency beats perfection."
    ),
    myths: visual(
      "myths",
      "Premium six myth-vs-reality pairs — rude Dutch, everyone splits bills, identical etiquette, everyone informal, everyone speaks English, everyone removes shoes.",
      "Replace stereotypes with questions about your city, neighbourhood and social circle."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight orientation answers on politeness, gifts, greetings, punctuality, bill splitting, rudeness, neighbours and formality.",
      "Confirm takeaways locally — customs vary by region, age and international exposure."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered culture route map — Dutch Culture, Social Norms, Birthday Traditions, Holidays, Making Friends, Workplace, Dating, Community Basics.",
      "Suggested order: etiquette → social norms → community integration → workplace if employed."
    ),
    cultureCluster: visual(
      "culture-cluster",
      "Premium Dutch culture cluster map — Culture, Social Norms, Birthday Traditions, Making Friends, Dating, Workplace, Directness, Holidays with when-to-use labels.",
      "Pick the guide matching your current social or professional question."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next-step cards — Social Norms, Dutch Culture, Making Friends, Community Basics, Learning Dutch with when-to-use labels.",
      "Pick the card matching whether you are settling socially, starting work or learning Dutch."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Core etiquette values (orientation)",
      items: [
        "Respect and consideration for shared spaces and others' time.",
        "Honesty and clarity in everyday communication.",
        "Punctuality signals reliability in social and professional settings.",
        "Equality and informality appear in many interactions.",
        "Practical, low-fuss solutions are often preferred.",
        "Privacy and personal boundaries are widely respected.",
      ],
    },
    snapshot: {
      title: "How to use this snapshot",
      items: [
        "Treat cards as observation prompts, not rigid rules.",
        "Compare with your workplace, building and friend group.",
        "Ask neighbours or colleagues when unsure.",
        "Adjust expectations as you learn local rhythms.",
      ],
    },
    greetings: {
      title: "Greeting tips",
      items: [
        "A handshake is common in professional first meetings.",
        "Among friends, three cheek kisses may appear — follow the other person's lead.",
        "Say goedemorgen, goedemiddag or goedenavond in shops and offices.",
        "Doei and tot ziens work for casual goodbyes.",
      ],
    },
    visitingHome: {
      title: "House guest checklist",
      items: [
        "Confirm date, time and whether children or partners are welcome.",
        "A small gift (flowers, wine, chocolate) is often appreciated, not required.",
        "Ask about shoes if unsure — practices differ.",
        "Send a brief thank-you message afterward.",
      ],
    },
    dining: {
      title: "Dining reminders",
      items: [
        "Confirm how the bill will be split before ordering.",
        "Coffee invitations are often short and scheduled.",
        "Wait for everyone to be served before starting to eat.",
        "Offer to help clear — hosts may decline but appreciate the gesture.",
      ],
    },
    giftGiving: {
      title: "Gift-giving basics",
      items: [
        "Modest, thoughtful gifts beat expensive gestures.",
        "Flowers, wine, chocolate and books are safe defaults.",
        "Avoid white chrysanthemums — they signal funerals.",
        "Ask about alcohol preferences before bringing wine.",
        "Business gifts should stay modest and appropriate.",
      ],
    },
    workplace: {
      title: "Workplace etiquette",
      items: [
        "Arrive on time for meetings and reply within one business day.",
        "Direct feedback often targets the issue — ask for examples.",
        "Friday borrels are optional but build rapport.",
        "Use first names once invited — titles fade quickly in many teams.",
        "See Dutch Workplace Culture for meetings, borrels and hierarchy.",
      ],
    },
    neighbour: {
      title: "Neighbour basics",
      items: [
        "Greet people in hallways and on the street.",
        "Observe quiet hours and waste collection schedules.",
        "Discuss parking and shared spaces calmly.",
        "Join buurt apps or WhatsApp groups when invited.",
      ],
    },
    public: {
      title: "Public space tips",
      items: [
        "Queue in order — cutting in is noticed.",
        "Ring your bell early on cycle paths; use lights after dark.",
        "Check in and out on public transport with OV-chipkaart or debit.",
        "Stilte coupe means no phone calls.",
        "Offer priority seats on public transport when appropriate.",
      ],
    },
    shopping: {
      title: "Shopping courtesy",
      items: [
        "Greet staff in smaller shops and at market stalls.",
        "At self-scan, bag without blocking the next person.",
        "Wait your turn at counters and self-checkout.",
        "Bring reusable bags — many shops charge for plastic.",
        "Have payment ready before reaching the till.",
      ],
    },
    online: {
      title: "Digital etiquette",
      items: [
        "Introduce yourself when added to a new WhatsApp group.",
        "Keep neighbourhood app posts factual — not personal disputes.",
        "Work email: clear subject line and reply within one business day.",
        "LinkedIn tone is more formal than WhatsApp.",
        "Avoid late-night messages unless the relationship is informal.",
      ],
    },
    family: {
      title: "Family gathering tips",
      items: [
        "Birthday congratulations may extend to family members at home parties.",
        "Ask about children, dietary needs and timing before arriving.",
        "Respect host routines — do not overstay without invitation.",
        "See Dutch Birthday Traditions for circle parties and office customs.",
      ],
    },
    culturalDifferences: {
      title: "Adaptation reminders",
      items: [
        "Directness often means clarity — ask what outcome is needed.",
        "Try: 'Can you give me an example?' when feedback feels sharp.",
        "Calendars fill early — plan ahead for social visits.",
        "Bill splitting is common — confirm before ordering.",
        "Polite deflection works for personal questions about income.",
      ],
    },
    situations: {
      title: "Situation approach",
      items: [
        "Observe before assuming intent.",
        "Ask one clarifying question when tone surprises you.",
        "Match formality to the setting.",
        "Apologise briefly if you block a cycle path or miss a queue.",
      ],
    },
    dosDonts: {
      title: "Quick reference",
      items: [
        "Do ask when unsure — most Dutch people appreciate clarity.",
        "Do not assume customs from your home country apply here.",
        "Do participate in local events when invited.",
        "Do not ignore RSVPs or arrive very late without messaging.",
      ],
    },
    mistakes: {
      title: "Recovery tips",
      items: [
        "Late? Message early and offer to reschedule.",
        "Misread directness? Ask what change is requested.",
        "Blocked a cycle path? Move promptly and apologise briefly.",
        "Assumed one household rule? Ask politely next time.",
      ],
    },
    checklist: {
      title: "Comfort faster",
      items: [
        "Start with goedemorgen, dank u wel, tot ziens and gefeliciteerd.",
        "Pick two habits from the checklist to practice this month.",
        "Message hosts if you will be more than 10 minutes late.",
        "Repeat one social route weekly (club, market, language class).",
        "Revisit this checklist after three months.",
      ],
    },
    myths: {
      title: "Balanced view",
      items: [
        "Individuals differ widely — cities and teams too.",
        "Warmth may show through reliability rather than effusive language.",
        "English helps but Dutch effort is often appreciated.",
        "Shoe-removal customs vary by household.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Dutch Social Norms for broader context.",
        "Workplace tone has dedicated guides under Jobs.",
        "Community Basics covers neighbours, clubs and integration.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Start here for practical etiquette in everyday situations.",
        "Add Dutch Social Norms for unwritten rules and values.",
        "Add Community Basics for friends, clubs and neighbours.",
        "Add workplace guides when employed.",
      ],
    },
    cultureCluster: {
      title: "Culture cluster navigation",
      items: [
        "Dutch Culture — high-level overview of society and lifestyle.",
        "Social Norms — unwritten rules beyond specific manners.",
        "Birthday Traditions — circle parties and congratulations.",
        "Making Friends — activity-first friendship routes.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Broader social rules → Dutch Social Norms.",
        "Friends and neighbours → Community Basics.",
        "Starting a job → Workplace culture guides.",
        "Learning phrases → Language hub.",
      ],
    },
  },
  quickAnswer: {
    heading: "Understanding Dutch Etiquette",
    summary:
      "Dutch etiquette generally values respect, honesty, punctuality, equality, practicality and consideration for others. Customs vary depending on family, region, workplace, age and social setting.",
    bullets: [
      "Etiquette is situational — observe your neighbourhood and workplace first.",
      "Direct communication often aims at clarity rather than personal attack.",
      "Planning ahead and respecting appointments are widely appreciated.",
      "Small gifts and thank-you messages strengthen social bonds.",
      "Integration improves when you ask questions and participate gradually.",
    ],
    note:
      "Start by observing greetings and appointment norms in your building — then ask one neighbour or colleague how their household handles visits and invitations.",
  },
  snapshotSignals: [
    { label: "On time", value: "Punctuality matters", note: "Confirm casual plan flexibility" },
    { label: "Honest", value: "Say what you mean", note: "Ask for context if needed" },
    { label: "Private", value: "Respect boundaries", note: "Plan visits ahead" },
    { label: "Practical", value: "Low-fuss solutions", note: "Observe locally" },
  ] satisfies SnapshotSignal[],
  orientationFlowSteps: [
    "Week 1: observe greetings, shop interactions and neighbour hallway habits.",
    "Week 2: confirm one etiquette expectation with a colleague or neighbour.",
    "Month 1: attend one local event or accept one home invitation.",
  ],
  snapshotMilestones: [
    { label: "Greetings", value: "Handshake or cheek kisses", note: "Follow the other person's lead" },
    { label: "Visiting", value: "RSVP + small gift", note: "Ask about shoes" },
    { label: "Dining", value: "Split or Tikkie", note: "Confirm before ordering" },
    { label: "Neighbours", value: "Brief hello", note: "Quiet hours matter" },
  ] satisfies SnapshotMilestone[],
  introParagraphs: [
    "Moving to the Netherlands means learning practical systems — housing, registration, banking — and a quieter layer of social etiquette. How to greet neighbours, behave at dinner, give gifts and navigate public space can surprise newcomers even when Dutch colleagues speak excellent English.",
    "This guide focuses on manners and behaviour in specific situations: greetings, dining, invitations, gifts, neighbours, workplaces and public spaces. For broader social values and unwritten rules, see Dutch Social Norms. For high-level culture overview, see Dutch Culture.",
  ],
  snapshotCards: [
    { title: "Be on time", body: "Arriving at the agreed time shows respect — confirm expectations for casual plans." },
    { title: "Be honest", body: "Direct questions and answers are common — ask for context if tone surprises you." },
    { title: "Respect privacy", body: "Unplanned visits and personal questions may feel intrusive — plan ahead." },
    { title: "Bring small gifts", body: "Flowers, wine or chocolate are safe when invited to someone's home." },
    { title: "Say what you mean", body: "Clarity is valued — polite honesty beats vague hints in many settings." },
    { title: "Respect shared spaces", body: "Queues, cycle paths and quiet zones expect considerate behaviour." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two signals to watch this week — e.g. greetings and punctuality.",
    "Note how your colleagues behave at borrels versus in meetings.",
    "Compare neighbour hallway habits with what you read here.",
    "Revisit after three months — your circle may differ from week one.",
  ],
  introExpatQuestions: [
    { title: "How is this different from Social Norms?", body: "This guide covers practical manners in specific situations. Social Norms explains broader unwritten rules and values." },
    { title: "Should I bring a gift?", body: "Often appreciated, rarely required — flowers, wine or chocolate are safe. Ask the host if unsure." },
    { title: "Is directness rude?", body: "Usually issue-focused — ask what practical outcome is needed before reacting." },
    { title: "What if I make a mistake?", body: "Brief apology and adjustment go far — most Dutch people appreciate effort over perfection." },
  ] satisfies TipCard[],
  etiquetteCategories: [
    { title: "Greetings", body: "Handshakes, cheek kisses, time-of-day phrases and professional introductions." },
    { title: "Visiting", body: "RSVP, arrival time, gifts, shoes and thank-you follow-up." },
    { title: "Dining", body: "Restaurants, bill splitting, coffee invitations and table manners." },
    { title: "Gifts", body: "Birthdays, housewarming, holidays and thank-you gestures." },
    { title: "Neighbours", body: "Hallway greetings, noise, bins, parking and community events." },
    { title: "Public space", body: "Queues, cycling, transport, phone calls and shared areas." },
  ] satisfies TipCard[],
  greetingsHeading: "Meeting People",
  greetingsParagraphs: [
    "Greetings set the tone for Dutch social life. In professional settings, a firm handshake and eye contact are standard for introductions. Among friends and family, cheek kisses (often three) may appear — follow the other person's lead if you are unsure.",
    "In shops, offices and neighbourhoods, time-of-day greetings (goedemorgen, goedemiddag, goedenavond) are widely used. Casual doei or tot ziens work among peers. When meeting someone new, stating your name clearly and asking theirs is a safe default.",
  ],
  greetingPhrases: [
    { situation: "Morning — shop or neighbour", dutch: "Goedemorgen", english: "Good morning", note: "Widely expected before noon." },
    { situation: "Afternoon — office or café", dutch: "Goedemiddag", english: "Good afternoon", note: "Polite default until early evening." },
    { situation: "Evening — restaurant", dutch: "Goedenavond", english: "Good evening", note: "Use from late afternoon onward." },
    { situation: "Casual goodbye", dutch: "Doei / Tot ziens", english: "Bye / See you", note: "Fine among peers and neighbours." },
    { situation: "First introduction", dutch: "Aangenaam, ik ben…", english: "Nice to meet you, I'm…", note: "Handshake + eye contact in professional settings." },
    { situation: "Birthday", dutch: "Gefeliciteerd!", english: "Congratulations!", note: "Add the person's name — see Birthday Traditions." },
  ] satisfies Array<{ situation: string; dutch: string; english: string; note: string }>,
  greetingExamples: [
    { setting: "Office — first meeting", hello: "Handshake + 'Aangenaam, ik ben…'", goodbye: "'Fijne dag' / 'Tot morgen'", note: "Use first names once invited." },
    { setting: "Friends — borrel", hello: "Cheek kisses or handshake", goodbye: "'Doei, tot snel'", note: "Follow the group's established style." },
    { setting: "Neighbour — hallway", hello: "'Hallo' / 'Goedemorgen'", goodbye: "Nod or brief 'Doei'", note: "Short and friendly is enough." },
    { setting: "Shop or café", hello: "'Goedemiddag' to staff", goodbye: "'Dank u wel, tot ziens'", note: "Politeness is noticed even in quick transactions." },
  ] satisfies GreetingExample[],
  visitingHomeHeading: "House Guest Etiquette",
  visitingHomeParagraphs: [
    "Invitations are usually planned in advance. Spontaneous drop-ins are less common than in some cultures. When invited, confirm time, location and whether partners or children are welcome.",
    "A small gift — flowers, wine, chocolate or something for the children — is often appreciated but not mandatory. Some households ask guests to remove shoes; others do not. When in doubt, ask or follow the host's example. Customs vary by household.",
  ],
  visitFlowSteps: [
    { step: "Before you go", detail: "Confirm time, address, parking and whether partners or children are welcome." },
    { step: "What to bring", detail: "Small gift optional — flowers, wine, chocolate or something for children." },
    { step: "Arrival", detail: "Ring the bell at the agreed time; wait to be invited in." },
    { step: "Shoes", detail: "Follow the host — ask 'Schoenen uit?' if you see a shoe rack or others remove theirs." },
    { step: "During the visit", detail: "Offer to help once; accept 'no' gracefully; keep voice moderate." },
    { step: "Afterward", detail: "Send a brief thank-you message — 'Bedankt voor de gezellige avond' works well." },
  ] satisfies Array<{ step: string; detail: string }>,
  visitingHomeTips: [
    "RSVP promptly and update the host if plans change.",
    "Offer to help clear plates or carry items — hosts may decline but appreciate the gesture.",
    "Thank the host with a message the next day.",
    "Do not assume you can extend the visit without asking.",
  ],
  diningHeading: "Eating Together",
  diningParagraphs: [
    "Dutch dining etiquette blends European table manners with practical, egalitarian habits. At restaurants, waiting staff may not rush — flag them politely when ready to order or pay. Many friend groups split bills item by item or use Tikkie after the meal.",
    "Coffee invitations (koffie) are often short and scheduled. Dinner invitations usually mean arrive on time, wait for everyone to be served, and offer to help clear. Buffets and barbecues follow host instructions — ask where to place used plates or whether to bring a dish.",
  ],
  diningExamples: [
    { context: "Restaurant with friends", practice: "Confirm split style before ordering", note: "Itemised splits and Tikkie are common." },
    { context: "Coffee at someone's home", practice: "Arrive on time; stay 45–90 minutes unless invited longer", note: "Often a weekday afternoon slot." },
    { context: "Dinner party", practice: "Wait to start eating; offer to help clear", note: "Ask about dietary restrictions when RSVPing." },
    { context: "Buffet or barbecue", practice: "Follow host cues; bring a dish if asked", note: "Do not arrive empty-handed if potluck was agreed." },
  ] satisfies Array<{ context: string; practice: string; note: string }>,
  diningTableManners: [
    "Keep elbows off the table during formal meals — casual borrels are more relaxed.",
    "Say 'Eet smakelijk' or 'Enjoy your meal' before starting.",
    "Finish what you take at buffets — waste is noticed.",
    "Thank the host explicitly when leaving.",
  ],
  giftGivingHeading: "Giving Gifts",
  giftGivingParagraphs: [
    "Gift-giving in the Netherlands tends toward modest, thoughtful gestures rather than extravagant displays. For home invitations, flowers, wine, good chocolate or a dessert contribution are safe choices.",
    "Birthdays, housewarming, Christmas and Sinterklaas each have their own customs. Business gifts should stay appropriate and modest. When unsure, ask a colleague or neighbour what is typical in your circle.",
  ],
  giftExamples: [
    { occasion: "Home invitation", gift: "Flowers, wine, chocolate or bakery", note: "Odd flower numbers for some occasions — ask the florist." },
    { occasion: "Birthday", gift: "Book, flowers, wine or group Tikkie contribution", note: "See Dutch Birthday Traditions for circle parties." },
    { occasion: "Housewarming", gift: "Plant, wine, kitchen item or local treat", note: "Practical gifts are often appreciated." },
    { occasion: "Christmas / Sinterklaas", gift: "Modest token; surprise gifts for children", note: "Sinterklaas has its own rhyming and surprise traditions." },
    { occasion: "Thank-you", gift: "Card, flowers or small treat after help", note: "A message alone is often enough." },
    { occasion: "Business", gift: "Modest branded or local item", note: "Check company policy — some firms restrict gifts." },
  ] satisfies Array<{ occasion: string; gift: string; note: string }>,
  giftAvoid: [
    { title: "Overly expensive gifts", body: "Can create awkward obligation — modest and thoughtful beats lavish for most home visits." },
    { title: "Personal items for colleagues", body: "Perfume, clothing or intimate gifts are inappropriate in professional settings." },
    { title: "White chrysanthemums", body: "Associated with funerals in the Netherlands — choose mixed bouquets for celebrations." },
    { title: "Assuming everyone drinks alcohol", body: "Bring a non-alcoholic option or ask the host in advance." },
  ] satisfies TipCard[],
  workplaceHeading: "Workplace Etiquette",
  workplaceParagraphs: [
    "Dutch workplace etiquette tends toward punctuality, direct feedback and relatively flat hierarchies. Arrive on time for meetings, reply promptly to scheduling emails and use clear subject lines.",
    "Direct comments often target the task, not the person. First names appear quickly in many teams. For deeper context on meetings, borrels, emails and hierarchy, see our Dutch Workplace Culture guide.",
  ],
  workplaceTips: [
    "Confirm meeting times and join on time — lateness without notice is poorly received.",
    "Ask for examples if feedback feels sharp — clarity is usually the goal.",
    "Keep emails concise with a clear action or question.",
    "Participate in team borrels when invited — they build rapport.",
  ],
  workplaceScenarios: [
    { situation: "First team meeting", expectation: "Handshake or brief intro; use first name if invited", tip: "Take notes — action items are often stated plainly." },
    { situation: "Direct feedback in meeting", expectation: "Issue-focused comment, not personal attack", tip: "Ask: 'Can you give an example?'" },
    { situation: "Scheduling email", expectation: "Reply within one business day with availability", tip: "Propose two time slots if declining." },
    { situation: "Friday borrel", expectation: "Optional but builds rapport; one drink is fine", tip: "Ask colleagues about unwritten team customs first." },
  ] satisfies Array<{ situation: string; expectation: string; tip: string }>,
  neighbourHeading: "Living Well With Neighbours",
  neighbourParagraphs: [
    "Neighbour etiquette in the Netherlands combines friendly practicality with respect for privacy and quiet. A brief hello in the hallway or on the street is normal. Noise, bins, parking and shared gardens are common discussion topics — calm conversation works best.",
    "Many neighbourhoods use WhatsApp or buurt apps for local updates. Join when invited and keep messages constructive. For broader integration routes, see Community Basics.",
  ],
  neighbourScenarios: [
    { situation: "First meeting in hallway", action: "Brief hello — 'Hallo' or time-of-day greeting", note: "No need for long conversation every time." },
    { situation: "Noise complaint", action: "Message calmly or knock once; avoid shouting", note: "Quiet hours vary by building and gemeente." },
    { situation: "Shared garden or bin area", action: "Follow posted schedules; keep areas tidy", note: "Ask VvE or neighbours about rules." },
    { situation: "Parking dispute", action: "Discuss calmly; check permit rules", note: "Street parking varies by city." },
    { situation: "Community event", action: "Attend if invited; introduce yourself", note: "Low-pressure way to learn local norms." },
  ] satisfies Array<{ situation: string; action: string; note: string }>,
  publicHeading: "Behaviour in Public",
  publicParagraphs: [
    "Public etiquette in the Netherlands expects quiet, orderly behaviour in shared spaces. Queue in order at counters and transport stops. Keep phone conversations brief or move aside in quiet zones.",
    "Cycling courtesy matters — use bike lanes, signal turns, use lights after dark and do not block paths. On public transport, check in and out, offer priority seats and keep backpacks off seats during busy periods.",
  ],
  publicScenarios: [
    { scenario: "Supermarket queue", behaviour: "Wait in line; have payment ready", note: "Self-checkout has its own queue etiquette." },
    { scenario: "Train — quiet zone", behaviour: "No phone calls; low voice", note: "First class may have additional rules." },
    { scenario: "Cycle path", behaviour: "Stay right; ring bell early; use lights at night", note: "Blocking paths frustrates commuters." },
    { scenario: "Escalator", behaviour: "Stand right, walk left in many cities", note: "Observe local habit — not universal." },
    { scenario: "Park or library", behaviour: "Moderate voice; clean up after yourself", note: "Shared spaces expect consideration." },
  ] satisfies Array<{ scenario: string; behaviour: string; note: string }>,
  cyclingTips: [
    "Use bike lanes where marked — do not walk in red cycle paths.",
    "Ring your bell early when approaching pedestrians on shared paths.",
    "Front and rear lights are required after dark — fines apply.",
    "Park in designated racks — not in doorways or on wheelchair ramps.",
    "Signal before turning; pass other cyclists on the left when safe.",
  ],
  publicTransportTips: [
    "Check in and out with OV-chipkaart, debit card or app.",
    "Offer priority seats to elderly, pregnant and mobility-impaired passengers.",
    "Keep backpacks off seats during rush hour.",
    "Stilte coupe (quiet carriage) means no phone calls.",
  ],
  shoppingHeading: "Shopping and Markets",
  shoppingParagraphs: [
    "Shopping etiquette is straightforward: wait your turn, greet staff in smaller shops and markets, and pack efficiently at busy self-checkout stations. Many supermarkets charge for plastic bags — bring reusable ones.",
    "At markets, ask before handling produce at some stalls. Pay promptly and thank the vendor. Albert Heijn and Jumbo self-scan flows expect you to scan and bag without blocking others.",
  ],
  shoppingTips: [
    "Say goedemorgen or goedemiddag when entering a small shop.",
    "At markets, point or ask the vendor to select produce if unsure.",
    "Keep your place in queue at busy counters.",
    "Bring a reusable bag — environmental norms are strong.",
  ],
  shoppingScenarios: [
    { setting: "Small shop or bakery", do: "Greet staff on entry; say dank u wel when leaving", note: "A quick hello is noticed even in fast transactions." },
    { setting: "Albert Heijn / Jumbo self-scan", do: "Scan steadily; bag without blocking the next person", note: "Staff may spot-check your basket — stay calm." },
    { setting: "Saturday market", do: "Wait your turn; ask vendor to pick produce if unsure", note: "Pay promptly; small talk is optional not required." },
    { setting: "Checkout queue", do: "Have payment ready; keep trolley behind the line", note: "Do not skip ahead even if you have fewer items." },
  ] satisfies Array<{ setting: string; do: string; note: string }>,
  onlineHeading: "Digital Communication",
  onlineParagraphs: [
    "WhatsApp dominates informal communication — friend groups, sports teams and many neighbour chats. Response times vary; read the room before expecting instant replies.",
    "Professional email expects clear subject lines and concise messages. Neighbourhood apps (Nextdoor, buurt platforms) work best with factual, constructive posts. Avoid late-night messages unless the relationship is clearly informal.",
  ],
  onlineTips: [
    "Introduce yourself briefly when joining a new WhatsApp group.",
    "Use neighbourhood apps for lost items and local updates — not personal disputes.",
    "Work email: reply within one business day when possible.",
    "Social media: respect privacy — do not tag people without asking.",
  ],
  onlineScenarios: [
    { channel: "WhatsApp — friend group", expectation: "Casual tone; response within a day is fine", tip: "Introduce yourself when added to a new group." },
    { channel: "WhatsApp — neighbour chat", expectation: "Factual updates; avoid personal disputes", tip: "Keep noise or parking issues calm and specific." },
    { channel: "Work email", expectation: "Clear subject line; one main question or action", tip: "Reply within one business day when possible." },
    { channel: "Buurt / Nextdoor app", expectation: "Lost items, events, practical local info", tip: "Do not use for neighbour arguments." },
    { channel: "LinkedIn / professional", expectation: "More formal than WhatsApp; still concise", tip: "Match the tone of the person who contacted you." },
  ] satisfies Array<{ channel: string; expectation: string; tip: string }>,
  familyHeading: "Family Gatherings",
  familyParagraphs: [
    "Family etiquette varies widely by household, region and international background. Birthdays may involve circle seating, family congratulations and coffee with cake — see Dutch Birthday Traditions for depth.",
    "Respect host routines: ask about children, dietary needs and timing. Do not overstay without invitation. Multi-generational visits often balance warmth with structured timing.",
  ],
  familyTips: [
    "Congratulate the birthday person by name — 'Gefeliciteerd!'",
    "At home parties, observe whether guests congratulate family members too.",
    "Ask about dietary restrictions when RSVPing.",
    "Thank hosts explicitly when leaving — gezelligheid matters.",
  ],
  familyScenarios: [
    { occasion: "Home birthday circle", expectation: "Arrive on time; congratulate birthday person and sometimes family", tip: "See Dutch Birthday Traditions for circle seating." },
    { occasion: "Dinner with children present", expectation: "Ask about bedtime and dietary needs when RSVPing", tip: "Offer to help clear once — hosts may decline." },
    { occasion: "Multi-generational visit", expectation: "Structured timing; do not overstay without invitation", tip: "Short warm goodbye beats a long lingering exit." },
    { occasion: "School parent event", expectation: "Follow school communication channels and treat policies", tip: "Ask teacher for parent etiquette guidelines." },
  ] satisfies Array<{ occasion: string; expectation: string; tip: string }>,
  culturalDifferencesHeading: "What May Surprise Newcomers",
  culturalDifferencesParagraphs: [
    "Newcomers often notice direct communication, advance planning, strong privacy norms, bill splitting, shorter small talk and the importance of appointments. These differences are adaptation gaps, not failures.",
    "Observe locally, ask one clarifying question when unsure, and adjust gradually. Your city, neighbourhood and social circle may differ from general patterns described here.",
  ],
  culturalDifferenceCards: [
    { title: "Direct communication", body: "Short, clear answers are common — ask for context if tone surprises you." },
    { title: "Planning ahead", body: "Calendars fill early — RSVP promptly and confirm times." },
    { title: "Privacy", body: "Personal questions about income or relationships may feel intrusive — deflect politely." },
    { title: "Bill splitting", body: "Fair splits and Tikkie are everyday tools — confirm before ordering." },
    { title: "Small talk", body: "Conversations may get practical quickly — depth builds through repeated contact." },
    { title: "Appointments", body: "Agreed times are taken seriously — message if you will be late." },
  ] satisfies TipCard[],
  culturalScripts: [
    { surprise: "Blunt feedback at work", trySaying: "Can you give me a concrete example of what would work better?", note: "Clarity is usually the goal, not criticism of you." },
    { surprise: "Asked to split bill item by item", trySaying: "Shall we split fairly or use Tikkie after?", note: "Confirm before ordering — avoids awkwardness at payment." },
    { surprise: "Personal question about salary", trySaying: "I prefer not to discuss that — how about [change topic]?", note: "Polite deflection is widely accepted." },
    { surprise: "No spontaneous drop-in culture", trySaying: "Are you free for coffee next week? I can do Tuesday or Thursday.", note: "Planning ahead shows respect for others' time." },
  ] satisfies Array<{ surprise: string; trySaying: string; note: string }>,
  situationsHeading: "Etiquette by Situation",
  situations: [
    { title: "Restaurant", body: "Greet staff; confirm bill split; tip modestly if service was good — not always expected.", tip: "Say 'Mag ik de rekening?' when ready to pay." },
    { title: "Birthday", body: "Congratulate by name; bring a modest gift to home parties; observe circle customs.", tip: "See Dutch Birthday Traditions for circle parties." },
    { title: "Office", body: "Punctual meetings; direct feedback; participate in borrels when invited.", tip: "Open Dutch Workplace Culture for depth." },
    { title: "Neighbour", body: "Brief hallway hello; respect quiet hours; discuss shared spaces calmly.", tip: "Community Basics covers buurt integration." },
    { title: "Sports club", body: "Introduce yourself; join post-match borrel; follow club dress and scheduling rules.", tip: "Repeated contact builds friendships." },
    { title: "Volunteer event", body: "Arrive on time; follow coordinator instructions; thank organisers afterward.", tip: "Low-pressure way to observe Dutch social rhythms." },
    { title: "School", body: "Respect teacher communication channels; follow treat and birthday policies.", tip: "Ask school for parent etiquette guidelines." },
    { title: "Public transport", body: "Check in/out; quiet zones; priority seats; keep bags off seats.", tip: "Offer seat when appropriate." },
  ] satisfies SituationCard[],
  dosAndDontsHeading: "Do's and Don'ts",
  dosAndDonts: [
    { do: "Be punctual", dont: "Arrive very late without messaging" },
    { do: "Respect appointments", dont: "Assume customs are identical to your home country" },
    { do: "Ask questions", dont: "Block cycle paths or wheelchair ramps" },
    { do: "Participate politely", dont: "Ignore invitations or RSVPs" },
    { do: "Be considerate in shared spaces", dont: "Make loud assumptions about Dutch people" },
    { do: "Thank hosts and follow up", dont: "Take directness personally without asking" },
  ] satisfies DosDontRow[],
  mistakeCards: [
    { title: "Being consistently late", body: "Many hosts and colleagues expect agreed times — repeated lateness signals disrespect.", tip: "Message early and build in buffer time." },
    { title: "Ignoring RSVPs", body: "Calendars fill early — failing to respond frustrates hosts planning food and seating.", tip: "Reply yes, no or maybe promptly." },
    { title: "Blocking bike lanes", body: "Parked bikes and pedestrians in cycle paths cause daily friction in Dutch cities.", tip: "Use designated parking; move promptly if asked." },
    { title: "Expecting spontaneous visits", body: "Drop-ins are less common — people often plan visits days ahead.", tip: "Message before arriving unannounced." },
    { title: "Taking directness personally", body: "Short feedback often targets the issue, not your character.", tip: "Ask 'What would work better?'" },
    { title: "Ignoring neighbour etiquette", body: "Noise, bins and parking without conversation builds resentment.", tip: "Brief hello and calm discussion go far." },
    { title: "Forgetting to thank hosts", body: "A message the next day strengthens social bonds.", tip: "'Bedankt voor de gezellige avond' works well." },
    { title: "Talking too loudly in quiet areas", body: "Trains, libraries and residential streets expect moderate volume.", tip: "Lower voice or move aside for phone calls." },
  ] satisfies MistakeCard[],
  checklistHeading: "Everyday Dutch Etiquette",
  checklist: [
    "Be punctual",
    "Respect privacy",
    "Follow through on plans",
    "Congratulate people on birthdays",
    "Participate politely",
    "Learn basic Dutch phrases",
    "Respect public spaces",
    "Be open to direct communication",
  ],
  checklistWithDetail: [
    { habit: "Be punctual", detail: "Arrive at the agreed time; message the host if you will be more than 10 minutes late." },
    { habit: "Respect privacy", detail: "Plan visits ahead; avoid unannounced drop-ins and intrusive personal questions." },
    { habit: "Follow through on plans", detail: "RSVP promptly and update the group if plans change." },
    { habit: "Congratulate on birthdays", detail: "Say 'Gefeliciteerd!' with the person's name — observe whether family is congratulated too." },
    { habit: "Participate politely", detail: "Join local events, club borrels or neighbour gatherings when invited." },
    { habit: "Learn basic Dutch phrases", detail: "Start with goedemorgen, dank u wel, tot ziens and gefeliciteerd." },
    { habit: "Respect public spaces", detail: "Queue in order, keep quiet in designated zones, do not block cycle paths." },
    { habit: "Be open to direct communication", detail: "Ask what practical outcome is needed before reacting to blunt tone." },
  ] satisfies Array<{ habit: string; detail: string }>,
  essentialPhrases: [
    { dutch: "Goedemorgen / Goedemiddag", english: "Good morning / Good afternoon", when: "Shops, neighbours, office arrival" },
    { dutch: "Dank u wel", english: "Thank you", when: "After service, when leaving a home visit" },
    { dutch: "Tot ziens", english: "Goodbye", when: "Shops, casual farewells" },
    { dutch: "Gefeliciteerd!", english: "Congratulations!", when: "Birthdays — add the person's name" },
    { dutch: "Mag ik de rekening?", english: "Can I have the bill?", when: "Restaurants when ready to pay" },
    { dutch: "Bedankt voor de gezellige avond", english: "Thanks for the cosy evening", when: "Thank-you message after a home visit" },
    { dutch: "Schoenen uit?", english: "Shoes off?", when: "Asking about indoor shoe customs" },
    { dutch: "Eet smakelijk!", english: "Enjoy your meal", when: "Before starting to eat at dinner" },
  ] satisfies Array<{ dutch: string; english: string; when: string }>,
  howToSchema: {
    name: "Everyday Dutch etiquette checklist for expats",
    description:
      "A practical step-by-step checklist for newcomers to navigate Dutch manners in greetings, visits, dining, neighbours and public spaces.",
    steps: [
      { name: "Observe local greetings", text: "Watch how neighbours, shop staff and colleagues greet each other in your first week." },
      { name: "Confirm visit expectations", text: "When invited, RSVP promptly, confirm arrival time and ask whether to bring something." },
      { name: "Practice punctuality", text: "Arrive at agreed times for appointments, dinners and meetings — message if delayed." },
      { name: "Learn basic Dutch phrases", text: "Use goedemorgen, goedemiddag, dank u wel and gefeliciteerd in everyday interactions." },
      { name: "Respect shared spaces", text: "Queue in order, keep quiet in designated zones and do not block cycle paths." },
      { name: "Thank hosts and follow up", text: "Send a brief thank-you message after home visits and social events." },
      { name: "Ask when unsure", text: "Politely ask colleagues or neighbours about local customs rather than assuming." },
      { name: "Revisit and adjust", text: "Review your habits after three months as your social circle expands." },
    ] satisfies HowToStep[],
  },
  myths: [
    { myth: "Dutch people are rude", reality: "Direct communication is often valued for clarity — warmth may show through reliability, invitations and practical help rather than effusive language." },
    { myth: "Everyone splits every bill", reality: "Fair splitting and Tikkie are common among friends, but practices vary — some hosts treat, some couples alternate, some groups round up." },
    { myth: "Everyone follows identical etiquette", reality: "Regional, generational, international and household differences are significant — ask rather than assume." },
    { myth: "Everyone is informal", reality: "Informality is common but context matters — first meetings, official appointments and some neighbours expect more structure." },
    { myth: "Everyone speaks English", reality: "English is widely spoken in cities but Dutch effort is often appreciated — especially with older neighbours and in smaller towns." },
    { myth: "Everyone removes shoes indoors", reality: "Shoe customs vary by household — follow the host's example or ask politely." },
  ] satisfies MythCard[],
  faq: [
    { q: "What is considered polite in the Netherlands?", a: "Punctuality, clear communication, respecting appointments and shared spaces, modest gifts when invited, and thanking hosts are widely appreciated. Politeness often shows through reliability and consideration rather than elaborate formality." },
    { q: "Should I bring gifts when invited?", a: "A small gift — flowers, wine, chocolate or a dessert contribution — is often appreciated but rarely required. Ask the host if unsure. Office birthdays usually expect the birthday person to bring treats, not guests." },
    { q: "How should I greet people?", a: "Handshake and eye contact in professional first meetings; cheek kisses may appear among friends — follow the other person's lead. Use goedemorgen, goedemiddag or goedenavond in shops and offices." },
    { q: "Is punctuality important?", a: "Yes — agreed times for dinners, appointments and meetings are usually taken seriously. Casual drinks may allow slight flexibility — message the group if delayed." },
    { q: "Should I split the bill?", a: "Many friend groups split fairly or use Tikkie — confirm before ordering at restaurants. Practices vary; follow the group's established habit." },
    { q: "What is considered rude?", a: "Repeated lateness without notice, ignoring RSVPs, blocking cycle paths, loud behaviour in quiet zones, unplanned drop-ins and ignoring neighbour concerns are commonly seen as inconsiderate." },
    { q: "Do neighbours know each other?", a: "Varies by building and city — hallway greetings are common; deep friendship is not automatic. Buurt apps and street events help people connect." },
    { q: "How formal are Dutch people?", a: "Many settings are relatively informal — first names appear quickly. Context still matters: official appointments, first business meetings and some neighbour interactions expect more structure." },
  ],
  faqNextSteps: [
    "Read Dutch Social Norms for broader unwritten rules and values.",
    "Practice phrases in our Learning Dutch hub.",
    "Use Community Basics to build the friendships that lead to invitations.",
  ],
  relatedGuidesReadingOrder: [
    "Dutch Etiquette (this page) → practical manners in everyday situations",
    "Dutch Social Norms → unwritten rules and social values",
    "Dutch Culture → high-level overview of Dutch society",
    "Community Basics → neighbours, clubs and integration",
    "Dutch Workplace Culture → professional etiquette if employed",
  ],
  relatedGuides: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "High-level overview of Dutch society and culture cluster.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Unwritten rules, values and everyday expectations.", status: "live" },
    { label: "Dutch Humour Explained", href: DUTCH_HUMOUR_PATH, description: "Dry wit, sarcasm, teasing and how humour connects to directness.", status: "live" },
    { label: "Dutch Birthday Traditions", href: DUTCH_BIRTHDAY_TRADITIONS_PATH, description: "Circle parties, congratulations, gifts and birthday etiquette.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual calendar, King's Day, Sinterklaas and Christmas.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Activity-first friendship routes via clubs and volunteering.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Meetings, feedback, borrels and professional norms.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Meeting people and dating etiquette.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs and local integration.", status: "live" },
  ] satisfies LifeGuideLink[],
  cultureClusterCards: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "Culture cluster overview and society primer.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Unwritten rules beyond specific manners.", status: "live" },
    { label: "Dutch Birthday Traditions", href: DUTCH_BIRTHDAY_TRADITIONS_PATH, description: "Circle parties and congratulations.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Friendship routes via clubs and activities.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Romantic connections and dating culture.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Professional etiquette and meetings.", status: "live" },
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Workplace communication style.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual celebrations calendar.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Broader unwritten rules and values.", status: "live" },
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "Culture cluster overview.", status: "live" },
    { label: "Making Dutch Friends", href: MAKING_DUTCH_FRIENDS_PATH, description: "Activity-first friendship routes.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs and integration.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and learning routes.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Need broader social rules → Dutch Social Norms",
    "Need friends and neighbours → Community Basics",
    "Need culture overview → Dutch Culture",
    "Need phrases → Learning Dutch",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government portal — public information and cultural life." },
    { label: "NetherlandsWorldwide", href: "https://www.netherlandsworldwide.nl/", description: "Government information for Dutch citizens and internationals abroad." },
    { label: "Holland.com", href: "https://www.holland.com/", description: "Netherlands tourism board — cultural context and visitor etiquette." },
  ],
} as const;

export type DutchEtiquettePage = typeof dutchEtiquettePage;
