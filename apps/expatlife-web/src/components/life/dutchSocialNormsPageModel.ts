export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const VOLUNTEERING_PATH = "/netherlands/life/volunteering-netherlands/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;
export const WASTE_RECYCLING_PATH = "/netherlands/practical-life/waste-and-recycling-netherlands/" as const;
export const PARKING_PERMITS_PATH = "/netherlands/practical-life/parking-and-local-permits-netherlands/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type MythCard = { myth: string; reality: string };

export type SituationCard = { title: string; body: string; tip: string };

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

export type ContextComparisonRow = {
  context: string;
  greetings: string;
  punctuality: string;
  directness: string;
  gifts: string;
};

export type GreetingExample = {
  setting: string;
  hello: string;
  goodbye: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v2";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-dutch-social-norms-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchSocialNormsPage = {
  slug: "dutch-social-norms",
  path: DUTCH_SOCIAL_NORMS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: DUTCH_CULTURE_PATH,
  publish: true,
  publishDate: "2026-11-21",
  seo: {
    title: "Dutch Social Norms | Everyday Etiquette & Culture Guide",
    description:
      "Learn about Dutch social norms, etiquette, greetings, birthdays, punctuality, neighbour culture and everyday customs to help you settle into life in the Netherlands.",
    keywords: [
      "dutch social norms",
      "dutch etiquette",
      "dutch culture etiquette",
      "social customs netherlands",
      "dutch manners",
      "dutch greetings",
      "dutch birthdays",
      "dutch punctuality",
      "dutch etiquette guide",
      "living in netherlands culture",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture",
    pageTitle: "Dutch Social Norms",
    subtitle:
      "Understand the everyday customs, etiquette and unwritten rules that help newcomers feel more comfortable living in the Netherlands.",
    primaryCta: { label: "Learn Dutch Etiquette", href: "#intro" },
    secondaryCta: { label: "Explore Dutch Culture", href: LIVING_CULTURE_ETIQUETTE_PATH },
    chips: ["Greetings", "Punctuality", "Birthdays", "Neighbours", "Everyday etiquette"],
    disclaimer:
      "Orientation only — social customs vary by person, region, age and household. Observe locally and ask politely rather than assuming one national style fits everyone.",
    image: {
      src: `/images/heroes/netherlands-dutch-social-norms-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of everyday Dutch social life — an international expat and Dutch neighbours chatting on a quiet residential street beside brick townhouses, bicycles and front gardens, warm golden-hour light and relaxed natural body language.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#greetings", label: "Greetings" },
    { href: "#punctuality", label: "Punctuality" },
    { href: "#invitations", label: "Visiting" },
    { href: "#birthdays", label: "Birthdays" },
    { href: "#splitting-bill", label: "Paying" },
    { href: "#direct-communication", label: "Directness" },
    { href: "#personal-space", label: "Boundaries" },
    { href: "#neighbour-etiquette", label: "Neighbours" },
    { href: "#cycling", label: "Cycling" },
    { href: "#public-transport", label: "Transport" },
    { href: "#contexts", label: "Contexts" },
    { href: "#social-events", label: "Events" },
    { href: "#situations", label: "Situations" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#success-checklist", label: "Checklist" },
    { href: "#myths", label: "Myths" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation record with six Dutch social values — honesty, punctuality, equality, personal space, practicality, independence — and first-week observation checklist.",
      "Use the values rail as orientation hints — verify how they show up in your neighbourhood and workplace."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six signal cards — punctual, direct, personal space, appointments matter, equality valued, practicality appreciated — each with expat verification tip.",
      "Compare signals to your daily routines; these are common patterns, not universal rules."
    ),
    greetings: visual(
      "greetings",
      "Premium greeting reference board — hello, goodbye, handshake, three cheek kisses context, professional vs informal settings with example phrases.",
      "Greeting style shifts by context — observe colleagues and neighbours before mirroring."
    ),
    punctuality: visual(
      "punctuality",
      "Premium punctuality timeline — dinner invitations, medical appointments, business meetings, social events with on-time expectations and buffer tips.",
      "Arriving five to ten minutes early is often safer than arriving late — confirm with the host for casual plans."
    ),
    invitations: visual(
      "invitations",
      "Premium home visit guide — invitation, arrival time, small gift, shoes, drinks, thank-you message with household variation notes.",
      "Customs differ by household — ask whether to remove shoes and what to bring."
    ),
    birthdays: visual(
      "birthdays",
      "Premium Dutch birthday circle party diagram — congratulating family members, coffee and cake, seating circle, practical guest tips.",
      "Circle seating and congratulating relatives are common — ask a colleague for a walkthrough before your first office birthday."
    ),
    splittingBill: visual(
      "splitting-bill",
      "Premium bill-splitting panel — restaurant itemised split, Tikkie app, shared groceries, group dinner examples with when-to-offer guidance.",
      "Many friend groups split fairly — practices vary; follow the group or ask how payment will work."
    ),
    directCommunication: visual(
      "direct-communication",
      "Premium bridge summary linking everyday directness to workplace and community guides — three phrase examples and when to ask for clarification.",
      "Directness often targets the issue, not the person — see workplace and community guides for deeper context."
    ),
    personalSpace: visual(
      "personal-space",
      "Premium boundaries board — personal space, privacy, income questions, family topics, relationship boundaries with balanced guidance rails.",
      "Privacy norms vary — polite deflection is widely accepted for personal income or relationship questions."
    ),
    neighbourEtiquette: visual(
      "neighbour-etiquette",
      "Premium neighbourhood etiquette map — greetings, noise, bins, parking, shared gardens, buurt initiatives with municipal variation notes.",
      "Small hallway greetings and quiet-hour awareness prevent most neighbour friction."
    ),
    cycling: visual(
      "cycling",
      "Premium cycling courtesy guide — bike lanes, hand signals, parking, lights, pedestrian zones with safety checklist.",
      "Use lights after dark and park considerately — cycling rules are enforced and neighbours notice blocked paths."
    ),
    publicTransport: visual(
      "public-transport",
      "Premium OV etiquette panel — queues, quiet zones, backpacks, ticket checks, priority seating with practical examples.",
      "Check-in/out with OV-chipkaart or app — quiet compartments and priority seats are widely respected."
    ),
    workplaceVsSocial: visual(
      "workplace-vs-social",
      "Premium five-context comparison matrix — work, friends, neighbours, family, public — for greetings, punctuality, directness and gifts.",
      "Expectations shift by context — workplace formality often differs from friend circles."
    ),
    socialEvents: visual(
      "social-events",
      "Premium community events calendar — King's Day, neighbourhood festivals, markets, sports clubs, volunteer days with participation tips.",
      "Local events offer low-pressure ways to observe Dutch social rhythms — pair with Community Basics for integration routes."
    ),
    situations: visual(
      "situations",
      "Premium eight everyday situation cards — meeting someone, restaurant, shopping, transport, neighbourhood, office, school, sports club.",
      "Recognise the setting first — the same person may communicate differently at work and at a borrel."
    ),
    mistakes: visual(
      "mistakes",
      "Premium eight mistake-fix board — lateness, misread directness, ignored appointments, loud public behaviour, cycle lane blocking and more.",
      "Use as a monthly self-check — most friction is an adaptation gap, not a permanent mismatch."
    ),
    successChecklist: visual(
      "success-checklist",
      "Premium eight-step comfort checklist — punctual, open-minded, basic Dutch, respect appointments, community events, direct feedback, ask questions, observe.",
      "Work through over your first months — small consistent habits beat trying to perfect every norm at once."
    ),
    myths: visual(
      "myths",
      "Premium six myth-vs-reality pairs — rude Dutch, impossible friendships, no emotion, everyone cycles, perfect English, identical behaviour.",
      "Replace stereotypes with questions about your city, neighbourhood and social circle."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight orientation answers on norms, punctuality, gifts, bill splitting, birthdays and greetings.",
      "Confirm takeaways locally — customs vary by region, age and international exposure."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered culture route map — community basics, workplace culture, directness, language, culture hub, volunteering.",
      "Suggested order: social norms → community integration → workplace culture if employed."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next-step cards — community basics, workplace culture, directness, language, volunteering with when-to-use labels.",
      "Pick the card matching whether you are settling socially, starting work or learning Dutch."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Core social values (orientation)",
      items: [
        "Honesty and clarity are often valued in everyday interaction.",
        "Punctuality signals respect for others' time.",
        "Equality and informality appear in many social settings.",
        "Personal space and privacy are widely respected.",
        "Practical, low-fuss solutions are often preferred.",
        "Independence and planning ahead are common social habits.",
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
    punctuality: {
      title: "Punctuality reminders",
      items: [
        "Medical and official appointments: arrive on time or early.",
        "Dinner at someone's home: confirm exact arrival time.",
        "Casual meetups: a short delay may be acceptable — ask the group.",
        "Work meetings: punctuality is usually expected.",
      ],
    },
    invitations: {
      title: "Visiting checklist",
      items: [
        "Confirm date, time and whether children or partners are welcome.",
        "A small gift (flowers, wine, dessert) is often appreciated, not required.",
        "Ask about shoes if unsure — practices differ.",
        "Send a brief thank-you message afterward.",
      ],
    },
    birthdays: {
      title: "Birthday orientation",
      items: [
        "Office circles with cake and coffee are common.",
        "Congratulating the birthday person's family members happens in some settings.",
        "Bring a small contribution if the team organises a gift.",
        "Ask HR or a colleague about office birthday customs.",
      ],
    },
    splittingBill: {
      title: "Paying together",
      items: [
        "Itemised splits and Tikkie requests are everyday tools.",
        "At restaurants, ask upfront how the group will pay.",
        "Shared households often use apps for groceries and utilities.",
        "Generosity varies — follow the group's established habit.",
      ],
    },
    directCommunication: {
      title: "Everyday directness",
      items: [
        "Short answers often mean clarity, not coldness.",
        "Ask for an example if feedback feels sharp.",
        "Workplace directness has its own guide — link below.",
        "Community Basics covers making friends after direct first impressions.",
      ],
    },
    personalSpace: {
      title: "Boundary reminders",
      items: [
        "Unplanned drop-ins are less common than in some cultures.",
        "Income, weight and relationship questions may feel intrusive — deflect politely.",
        "Calendar planning protects evenings and weekends for many people.",
        "Neighbour contact is often friendly but not intrusive.",
      ],
    },
    neighbourEtiquette: {
      title: "Neighbour basics",
      items: [
        "Greet people in hallways and on the street.",
        "Observe quiet hours and waste collection schedules.",
        "Discuss parking and shared spaces calmly.",
        "Join buurt apps or WhatsApp groups when invited.",
      ],
    },
    cycling: {
      title: "Cycling courtesy",
      items: [
        "Use bike lanes where marked; signal before turning.",
        "Lights are required after dark — fines apply.",
        "Do not block doorways or wheelchair ramps with parked bikes.",
        "Pedestrians have priority on shared paths — ring bell early.",
      ],
    },
    publicTransport: {
      title: "OV etiquette",
      items: [
        "Check in and out for correct fare.",
        "Quiet zones mean no phone calls.",
        "Offer priority seats when appropriate.",
        "Keep backpacks off seats during busy periods.",
      ],
    },
    workplaceVsSocial: {
      title: "Context matters",
      items: [
        "Work may stay more structured than friend circles.",
        "Neighbour contact is often polite but less intense than family.",
        "Public transport expects quiet, practical behaviour.",
        "When unsure, mirror the setting's tone.",
      ],
    },
    socialEvents: {
      title: "Events to explore",
      items: [
        "King's Day street markets and orange dress code.",
        "Neighbourhood clean-ups and street parties.",
        "Local sports club open days.",
        "Volunteer shifts through gemeente or Vrijwilligerswerk.",
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
    mistakes: {
      title: "Recovery tips",
      items: [
        "Late? Message early and offer to reschedule.",
        "Misread directness? Ask what change is requested.",
        "Loud in quiet zones? Lower volume and move if needed.",
        "Assumed one household rule? Ask politely next time.",
      ],
    },
    successChecklist: {
      title: "Comfort faster",
      items: [
        "Pick two habits to practice this month.",
        "Repeat one social route weekly (club, market, language class).",
        "Learn ten Dutch phrases for shops and neighbours.",
        "Revisit this checklist after three months.",
      ],
    },
    myths: {
      title: "Balanced view",
      items: [
        "Individuals differ widely — cities and teams too.",
        "Friendships often deepen slowly through shared activities.",
        "Warmth may show through reliability rather than effusive language.",
        "English helps but Dutch effort is often appreciated.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Community Basics for integration routes.",
        "Workplace tone has dedicated guides under Jobs.",
        "Municipal websites list local events and volunteer options.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Start here for everyday etiquette orientation.",
        "Add Community Basics for friends and clubs.",
        "Add workplace guides when employed.",
        "Add language learning when ready for deeper integration.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Settling socially → Community Basics.",
        "Starting a job → Workplace culture guides.",
        "Learning phrases → Language hub.",
        "Giving back → Volunteering guide.",
      ],
    },
  },
  quickAnswer: {
    heading: "Understanding Dutch Social Norms",
    summary:
      "Many Dutch social customs value honesty, punctuality, equality, personal space, practicality and independence. These values appear differently depending on age, region, profession, international exposure and personal preference.",
    bullets: [
      "Social norms are patterns, not laws — individuals and households vary.",
      "Direct communication often aims at clarity rather than personal attack.",
      "Planning ahead and respecting time are widely appreciated.",
      "Neighbour contact is usually friendly, practical and low-drama.",
      "Integration improves when you observe, ask and participate gradually.",
    ],
    note:
      "Start by observing greetings and appointment norms in your building — then ask one neighbour or colleague how their household handles visits and invitations.",
  },
  snapshotSignals: [
    { label: "Punctual", value: "Time is respected", note: "Arrive on time for plans" },
    { label: "Direct", value: "Clarity over fluff", note: "Ask for context if needed" },
    { label: "Planned", value: "RSVP matters", note: "Calendars fill early" },
    { label: "Practical", value: "Low-fuss solutions", note: "Observe locally" },
  ] satisfies SnapshotSignal[],
  orientationFlowSteps: [
    "Week 1: observe greetings, shop interactions and neighbour hallway habits.",
    "Week 2: confirm one social expectation with a colleague or neighbour.",
    "Month 1: attend one local event or repeat one community route weekly.",
  ],
  snapshotMilestones: [
    { label: "Greetings", value: "Handshake or cheek kisses", note: "Follow the other person's lead" },
    { label: "Punctuality", value: "5–10 min early", note: "Especially for appointments" },
    { label: "Visiting", value: "RSVP + small gift", note: "Ask about shoes" },
    { label: "Paying together", value: "Split or Tikkie", note: "Confirm before ordering" },
  ] satisfies SnapshotMilestone[],
  introParagraphs: [
    "Moving to the Netherlands brings practical tasks — housing, registration, banking — and a quieter layer of social learning. Everyday greetings, birthday customs, bill splitting and neighbour etiquette can surprise newcomers even when Dutch colleagues speak excellent English.",
    "This guide explains common social norms in balanced, practical language. It focuses on everyday life outside the office: how people greet each other, plan visits, celebrate birthdays and share public space. For workplace communication, see our dedicated workplace culture guides.",
  ],
  snapshotCards: [
    { title: "Be punctual", body: "Arriving on time shows respect — confirm expectations for casual plans." },
    { title: "Say what you mean", body: "Direct questions and answers are common — ask for context if tone surprises you." },
    { title: "Respect personal space", body: "Unplanned visits and personal questions may feel intrusive — plan ahead." },
    { title: "Appointments matter", body: "Calendars fill early — RSVP and arrive at agreed times." },
    { title: "Equality is valued", body: "Informal titles and flat hierarchies appear in many social settings." },
    { title: "Practicality is appreciated", body: "Simple, efficient solutions beat elaborate fuss in daily interactions." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Pick two signals to watch this week — e.g. greetings and punctuality.",
    "Note how your colleagues behave at borrels versus in meetings.",
    "Compare neighbour hallway habits with what you read here.",
    "Revisit after three months — your circle may differ from week one.",
  ],
  introExpatQuestions: [
    { title: "Should I bring a gift?", body: "Often appreciated, rarely required — flowers, wine or dessert are safe. Ask the host if unsure." },
    { title: "Why three cheek kisses?", body: "Common among friends — follow the other person's lead; a handshake is fine if unsure." },
    { title: "Is directness personal?", body: "Usually issue-focused — ask what practical outcome is needed before reacting." },
    { title: "How do I make friends?", body: "Repeated contact through clubs, language class or neighbours — see Community Basics." },
  ] satisfies TipCard[],
  greetingPhrases: [
    { situation: "Morning — shop or neighbour", dutch: "Goedemorgen", english: "Good morning", note: "Widely expected before noon." },
    { situation: "Afternoon — office or café", dutch: "Goedemiddag", english: "Good afternoon", note: "Polite default until early evening." },
    { situation: "Evening — restaurant", dutch: "Goedenavond", english: "Good evening", note: "Use from late afternoon onward." },
    { situation: "Casual goodbye", dutch: "Doei / Tot ziens", english: "Bye / See you", note: "Fine among peers and neighbours." },
    { situation: "Birthday", dutch: "Gefeliciteerd!", english: "Congratulations!", note: "Add the person's name." },
    { situation: "First introduction", dutch: "Aangenaam, ik ben…", english: "Nice to meet you, I'm…", note: "Handshake + eye contact in professional settings." },
  ] satisfies Array<{ situation: string; dutch: string; english: string; note: string }>,
  greetingsHeading: "How People Greet Each Other",
  greetingsParagraphs: [
    "Greetings set the tone for Dutch social life. In professional settings, a firm handshake and eye contact are standard for introductions. Among friends and family, cheek kisses (often three) may appear — follow the other person's lead if you are unsure.",
    "In shops, offices and neighbourhoods, time-of-day greetings (goedemorgen, goedemiddag, goedenavond) are widely used. Casual doei or tot ziens work among peers. When meeting someone new, stating your name clearly and asking theirs is a safe default.",
  ],
  greetingExamples: [
    { setting: "Office — first meeting", hello: "Handshake + 'Aangenaam, ik ben…'", goodbye: "'Fijne dag' / 'Tot morgen'", note: "Use first names once invited." },
    { setting: "Friends — birthday borrel", hello: "Cheek kisses + 'Gefeliciteerd!'", goodbye: "'Doei, tot snel'", note: "Congratulate the birthday person and sometimes their relatives." },
    { setting: "Neighbour — hallway", hello: "'Hallo' / 'Goedemorgen'", goodbye: "Nod or brief 'Doei'", note: "Short and friendly is enough." },
    { setting: "Shop or café", hello: "'Goedemiddag' to staff", goodbye: "'Dank u wel, tot ziens'", note: "Politeness is noticed even in quick transactions." },
  ] satisfies GreetingExample[],
  punctualityHeading: "Being On Time",
  punctualityParagraphs: [
    "Punctuality is one of the most cited Dutch social expectations. Appointments for doctors, gemeente visits and work meetings generally start on time. Arriving five to ten minutes early is often safer than arriving late.",
    "Social plans vary: dinner at someone's home usually means the agreed time is the arrival time. Casual drinks may allow a little flexibility — message the group if you are delayed.",
  ],
  punctualityExamples: [
    { situation: "Dinner invitation", expectation: "Arrive at the agreed time — not significantly early or late.", tip: "Ask whether to bring something." },
    { situation: "Medical appointment", expectation: "Check in before the scheduled time.", tip: "Bring ID and insurance details." },
    { situation: "Business meeting", expectation: "Start on time; join quietly if unavoidably late.", tip: "Message ahead when possible." },
    { situation: "King's Day street party", expectation: "Flexible — crowds and transport affect timing.", tip: "Plan transport early." },
  ] satisfies Array<{ situation: string; expectation: string; tip: string }>,
  punctualityQuickCheck: [
    "Message the host if you will miss the agreed arrival window.",
    "For gemeente or doctor visits, aim 5–10 minutes early with documents ready.",
    "Casual drinks may allow 10–15 minutes — confirm in the group chat.",
    "Never assume 'Dutch time' means late — many hosts expect punctuality.",
  ],
  invitationsHeading: "Visiting Someone's Home",
  invitationsParagraphs: [
    "Invitations are usually planned in advance. Spontaneous drop-ins are less common than in some cultures. When invited, confirm time, location and whether partners or children are welcome.",
    "A small gift — flowers, wine, dessert or something for the children — is often appreciated but not mandatory. Some households ask guests to remove shoes; others do not. When in doubt, ask or follow the host's example.",
  ],
  invitationTips: [
    "RSVP promptly and update the host if plans change.",
    "Offer to help clear plates or carry items — hosts may decline but appreciate the gesture.",
    "Thank the host with a message the next day.",
    "Do not assume you can extend the visit without asking.",
  ],
  visitFlowSteps: [
    { step: "Before you go", detail: "Confirm time, address, parking and whether partners or children are welcome." },
    { step: "What to bring", detail: "Small gift optional — flowers, wine, dessert or something for children." },
    { step: "Arrival", detail: "Ring the bell at the agreed time; wait to be invited in." },
    { step: "Shoes", detail: "Follow the host — ask 'Schoenen uit?' if you see a shoe rack or others remove theirs." },
    { step: "During the visit", detail: "Offer to help once; accept 'no' gracefully; keep voice moderate." },
    { step: "Afterward", detail: "Send a brief thank-you message — 'Bedankt voor de gezellige avond' works well." },
  ] satisfies Array<{ step: string; detail: string }>,
  giftIdeas: [
    { title: "Flowers", body: "Odd numbers for some occasions — ask the florist if unsure." },
    { title: "Wine or beer", body: "Match the meal if you know it; non-alcoholic options are fine." },
    { title: "Dessert or bakery", body: "Appreciated when the host is cooking." },
    { title: "Something for children", body: "Book or small toy if kids are invited." },
  ] satisfies TipCard[],
  birthdaysHeading: "Understanding Dutch Birthday Traditions",
  birthdaysParagraphs: [
    "Birthdays are celebrated in structured, social ways. Office 'circle' gatherings with coffee and cake are common. At some parties, guests congratulate not only the birthday person but also their partner, parents or children — a custom that surprises many expats the first time.",
    "Seating in a circle for home parties keeps everyone included. Treats are often brought to the office rather than the office organising a large event. Ask colleagues how your team handles birthdays before your first one.",
  ],
  birthdayTips: [
    "Bring cake or pastries for colleagues on your own birthday in many offices.",
    "Congratulate with 'Gefeliciteerd!' — add the person's name.",
    "Small group gifts may be organised via Tikkie.",
    "Children's parties often have clear start and end times.",
  ],
  birthdayPhrases: [
    { situation: "Birthday person", dutch: "Gefeliciteerd met je verjaardag!", english: "Happy birthday!", note: "Use their name." },
    { situation: "Partner or parent (some circles)", dutch: "Gefeliciteerd met [name]!", english: "Congratulations on [name]'s birthday", note: "Common at home parties — follow others." },
    { situation: "Office circle", dutch: "Proost / Op jou!", english: "Cheers / To you", note: "After coffee and cake." },
    { situation: "Declining late stay", dutch: "Ik moet gaan, bedankt!", english: "I have to go, thanks!", note: "End times are often stated upfront." },
  ] satisfies Array<{ situation: string; dutch: string; english: string; note: string }>,
  officeBirthdayChecklist: [
    "Ask HR or a colleague how your team handles birthdays before your first one.",
    "On your birthday, many offices expect you to bring treats for the team.",
    "Contribute to group Tikkie gifts when invited — participation is optional.",
    "Congratulate everyone in the circle, not only the birthday person.",
  ],
  splittingBillHeading: "Paying Together",
  splittingBillParagraphs: [
    "Splitting costs fairly is everyday practice. Restaurants may ask whether you want one bill or separate tabs. Friends commonly use Tikkie to request exact shares after shared meals, groceries or tickets.",
    "Practices vary: some groups rotate who pays; others split immediately. Follow the established habit of the group or ask before ordering.",
  ],
  splittingBillExamples: [
    { context: "Restaurant with friends", practice: "Split by item or equally — confirm before paying.", note: "Card and mobile payment widely accepted." },
    { context: "Shared household", practice: "Apps track rent, utilities and groceries.", note: "Write agreements down for clarity." },
    { context: "Office lunch", practice: "Individual payment common.", note: "Avoid assuming one person treats the team." },
    { context: "Birthday gift pool", practice: "Tikkie link in group chat.", note: "Participation is optional but appreciated." },
  ] satisfies Array<{ context: string; practice: string; note: string }>,
  directCommunicationHeading: "Speaking Honestly",
  directCommunicationParagraphs: [
    "Direct communication appears in everyday life as well as at work. Short answers, clear requests and open disagreement in group settings are common. The goal is usually efficiency and shared understanding — not personal criticism.",
    "If tone feels sharp, ask what practical outcome is needed. For workplace-specific feedback, meeting debate and manager 1:1s, use our dedicated workplace guides linked below.",
  ],
  directCommunicationLinks: [
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Deep dive into feedback, meetings and professional adaptation." },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Making friends and building social circles after direct first impressions." },
  ] satisfies LifeGuideLink[],
  everydayDirectnessExamples: [
    { said: "'Nee, dat werkt niet.'", oftenMeans: "That approach won't work — let's try another.", tryResponse: "Ask: 'Wat zou wel werken?' (What would work?)" },
    { said: "'Ik ben eerlijk: …'", oftenMeans: "Prefacing direct feedback — not an attack.", tryResponse: "Listen for the practical point, not the blunt wrapper." },
    { said: "'We moeten efficiënt zijn.'", oftenMeans: "Keep the meeting or chat focused.", tryResponse: "Summarise next steps out loud." },
    { said: "Short 'Ja' / 'Nee' in shops", oftenMeans: "Normal efficiency — not rudeness.", tryResponse: "Mirror brevity; add 'Dank u wel' at checkout." },
    { said: "'Dat is niet handig.'", oftenMeans: "That timing or method causes problems.", tryResponse: "Ask for a preferred alternative." },
  ] satisfies Array<{ said: string; oftenMeans: string; tryResponse: string }>,
  personalSpaceHeading: "Respecting Boundaries",
  personalSpaceParagraphs: [
    "Personal space and privacy are widely respected. Unplanned visits, lengthy personal questions or loud behaviour in shared spaces can cause friction. Many people protect evenings and weekends with calendar planning.",
    "Questions about salary, rent, weight or relationships may feel normal in some home cultures but intrusive here. Polite deflection — 'I'd rather not say' — is acceptable.",
  ],
  personalSpaceTips: [
    "Message before visiting — even neighbours you know well.",
    "Keep voice volume moderate in apartment buildings.",
    "Respect 'no' without pushing for explanations.",
    "Observe how locals handle sensitive topics.",
  ],
  boundaryScripts: [
    { question: "How much do you earn?", response: "'Daar praat ik liever niet over.' / 'I'd rather not say.'", note: "Polite deflection is widely accepted." },
    { question: "Why aren't you married yet?", response: "'Daar ben ik nog niet aan toe.' / 'That's private, thanks.'", note: "Change topic after declining." },
    { question: "Can I drop by tonight?", response: "'Vanavond lukt niet — zullen we een moment plannen?'", note: "Offer to schedule instead of refusing bluntly." },
    { question: "Can I borrow money?", response: "'Ik leen liever geen geld aan vrienden.'", note: "Financial boundaries are normal." },
  ] satisfies Array<{ question: string; response: string; note: string }>,
  neighbourHeading: "Living in a Dutch Neighbourhood",
  neighbourParagraphs: [
    "Neighbour relations are often friendly and practical. Brief hallway greetings, quiet-hour awareness and correct waste sorting go a long way. Buurt WhatsApp groups share package deliveries, lost keys and local notices.",
    "Parking, shared gardens and bicycle storage can become friction points — address issues calmly and early. Municipal rules on waste and parking vary by city.",
  ],
  neighbourTips: [
    "Introduce yourself when moving in.",
    "Learn waste collection days for your address.",
    "Report noise issues politely before escalating.",
    "Join neighbourhood events when invited.",
  ],
  neighbourLinks: [
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Integration routes, clubs and neighbour networks." },
    { label: "Waste and recycling", href: WASTE_RECYCLING_PATH, description: "Sorting rules and collection schedules." },
    { label: "Parking and local permits", href: PARKING_PERMITS_PATH, description: "Resident permits and visitor passes." },
  ] satisfies LifeGuideLink[],
  neighbourScenarios: [
    { situation: "Moving in", action: "Introduce yourself briefly — name and floor.", note: "A short note in the hallway group helps." },
    { situation: "Noise after 22:00", action: "Lower volume; message neighbours if hosting.", note: "Rules vary — check building or gemeente guidance." },
    { situation: "Wrong bin day", action: "Ask a neighbour or check gemeente calendar.", note: "Sorting errors can lead to fines." },
    { situation: "Package for neighbour", action: "Accept if asked; leave a note on their door.", note: "Buurt WhatsApp groups coordinate this often." },
  ] satisfies Array<{ situation: string; action: string; note: string }>,
  cyclingHeading: "Cycling Culture",
  cyclingParagraphs: [
    "Cycling is everyday transport for many residents — not only a tourist activity. Bike lanes, hand signals, lights and considerate parking matter for safety and neighbour relations.",
    "Pedestrians, trams and cars interact closely in cities. Ring your bell early, pass with space and never block wheelchair ramps or doorways with parked bikes.",
  ],
  cyclingTips: [
    "Use front and rear lights after dark.",
    "Lock frame and wheel to a fixed rack.",
    "Stay off footpaths unless marked shared.",
    "Follow traffic lights — cyclists are fined too.",
  ],
  cyclingSituations: [
    { situation: "Bike lane blocked", rule: "Ring bell early; pass with space.", note: "Apologise if you startled someone." },
    { situation: "Turning at junction", rule: "Hand signal + check mirrors and trams.", note: "Trams often have priority." },
    { situation: "Parking at home", rule: "Use rack or designated area — not doorways.", note: "Blocked paths frustrate neighbours." },
    { situation: "Shared path with pedestrians", rule: "Pedestrians first; slow down.", note: "Ring bell before overtaking." },
    { situation: "After dark", rule: "White front + red rear lights required.", note: "Fines apply without lights." },
  ] satisfies Array<{ situation: string; rule: string; note: string }>,
  publicTransportHeading: "Behaviour on Public Transport",
  publicTransportParagraphs: [
    "Public transport (OV) expects quiet, orderly behaviour. Check in and out with OV-chipkaart, contactless or app. Quiet zones prohibit phone calls; priority seats are for those who need them.",
    "During rush hour, remove backpacks from seats and let passengers exit before boarding. Staff and inspectors check tickets — fines apply for travelling without valid fare.",
  ],
  publicTransportTips: [
    "Stand right on escalators in many cities.",
    "Offer seats to elderly, pregnant and disabled passengers.",
    "Keep music through headphones only.",
    "Validate discount cards when required.",
  ],
  publicTransportScenarios: [
    { scenario: "Boarding rush hour", behaviour: "Let passengers exit first; move inside.", note: "Hold backpack in front or at feet." },
    { scenario: "Quiet zone (stilte)", behaviour: "No calls; whisper if needed.", note: "Signs mark quiet compartments." },
    { scenario: "Ticket check", behaviour: "Have OV-chipkaard or app ready.", note: "Fines for travelling without valid fare." },
    { scenario: "Priority seat offered", behaviour: "Stand if elderly, pregnant or disabled need it.", note: "Badge not always visible — offer anyway." },
    { scenario: "Bike on train", behaviour: "Check peak-hour rules; use designated areas.", note: "NS rules vary by time and train type." },
  ] satisfies Array<{ scenario: string; behaviour: string; note: string }>,
  contextsHeading: "Different Contexts",
  contextsParagraphs: [
    "The same person may communicate differently at work, at a friend's home, in the neighbourhood and on public transport. Formality, punctuality and directness all shift by setting.",
    "Use the comparison table below as an orientation grid — confirm with your own circles rather than treating any row as fixed.",
  ],
  contextComparison: [
    { context: "Work", greetings: "Handshake / first-name once invited", punctuality: "Strict", directness: "Task-focused feedback common", gifts: "Team occasions only" },
    { context: "Friends", greetings: "Informal, cheek kisses possible", punctuality: "Planned; some flexibility", directness: "Blunt jokes possible among close friends", gifts: "Birthdays, housewarming" },
    { context: "Neighbours", greetings: "Brief hallway hello", punctuality: "Noise and waste schedules matter", directness: "Practical notes about bins or parking", gifts: "Optional when visiting" },
    { context: "Family", greetings: "Warm but often planned visits", punctuality: "Meals on time", directness: "Varies widely by family", gifts: "Birthdays and holidays" },
    { context: "Public", greetings: "Minimal", punctuality: "Queues and OV etiquette", directness: "Quiet correction if rules broken", gifts: "N/A" },
  ] satisfies ContextComparisonRow[],
  contextMirrorTips: [
    "At work: match meeting punctuality and feedback style of your team.",
    "With friends: follow cheek-kiss or handshake lead of the group.",
    "With neighbours: keep interactions brief, practical and friendly.",
    "In public: queues, quiet OV and cycle lane awareness matter most.",
  ],
  socialEventsHeading: "Community Events",
  socialEventsParagraphs: [
    "Community events reveal Dutch social rhythms. King's Day turns cities orange with markets and music. Neighbourhood clean-ups, local markets and sports club open days offer low-pressure ways to meet people.",
    "Volunteer shifts and festival steward roles combine social contact with practical contribution. Pair events with Community Basics for longer-term integration strategies.",
  ],
  socialEventExamples: [
    { title: "King's Day", body: "Street markets, orange dress, family-friendly crowds — plan transport early." },
    { title: "Neighbourhood festivals", body: "Local food stalls and music — greet organisers and neighbours." },
    { title: "Sports clubs", body: "Trial training sessions (proefles) — common adult friendship route." },
    { title: "Volunteer days", body: "Gemeente and NGO listings — recurring shifts build familiarity." },
  ] satisfies TipCard[],
  socialEventParticipationTips: [
    "King's Day: wear orange if you have it; plan return transport early.",
    "Neighbourhood clean-up: bring gloves; greet organisers by name.",
    "Sports proefles: ask about gear, fees and social drinks after training.",
    "Volunteer shift: treat it like an appointment — arrive on time.",
  ],
  situationsHeading: "Common Everyday Situations",
  situationCards: [
    { title: "Meeting someone new", body: "Handshake or cheek kisses by context; state your name clearly.", tip: "Follow their lead on formality." },
    { title: "Restaurant", body: "Staff may not rush table turnover — ask for the bill when ready.", tip: "Confirm split before ordering." },
    { title: "Shopping", body: "Bag your groceries; bring your own bag.", tip: "Greet at checkout." },
    { title: "Public transport", body: "Check in/out; quiet zones matter.", tip: "Backpack off seat when busy." },
    { title: "Neighbourhood", body: "Sort waste correctly; greet in hallways.", tip: "Note collection days." },
    { title: "Office social", body: "Birthday circles and Friday drinks (borrel) are common.", tip: "Ask about team customs." },
    { title: "School gate", body: "Parents often plan playdates in advance.", tip: "Learn basic Dutch phrases." },
    { title: "Sports club", body: "Team culture and post-training drinks.", tip: "Try a proefles first." },
  ] satisfies SituationCard[],
  mistakesHeading: "Common Cultural Mistakes",
  mistakeCards: [
    { title: "Being consistently late", body: "Damages trust in professional and social plans.", tip: "Message early and reschedule." },
    { title: "Misunderstanding directness", body: "Short answers may feel rude without context.", tip: "Ask what outcome is needed." },
    { title: "Ignoring appointments", body: "Calendars are taken seriously.", tip: "RSVP and update promptly." },
    { title: "Talking too loudly", body: "Apartment buildings amplify sound.", tip: "Lower volume after 22:00." },
    { title: "Blocking cycle lanes", body: "Creates danger and frustration.", tip: "Step aside and apologise." },
    { title: "Expecting instant deep friendship", body: "Relationships often build through activities.", tip: "Repeat the same club or class." },
    { title: "Assuming identical household rules", body: "Shoes, gifts and visits vary.", tip: "Ask politely." },
    { title: "Taking honesty personally", body: "Issue-focused tone is common.", tip: "Separate task from identity." },
  ] satisfies SituationCard[],
  mistakeRecoveryScripts: [
    { mistake: "Arrived late to dinner", fix: "Message before you're late; bring dessert as a peace offering.", note: "One-off delays are forgiven with communication." },
    { mistake: "Misread direct comment", fix: "Ask: 'Can you give me an example of what you mean?'", note: "Clarify before defending." },
    { mistake: "Loud in apartment", fix: "Lower volume immediately; apologise to neighbours next day.", note: "Repeat issues need a structural fix." },
    { mistake: "Wrong waste sorting", fix: "Ask neighbour or check gemeente guide; fix before next collection.", note: "Bins left out wrong may not be emptied." },
  ] satisfies Array<{ mistake: string; fix: string; note: string }>,
  successChecklist: [
    "Be punctual — confirm arrival times for visits.",
    "Stay open-minded when customs differ from home.",
    "Learn basic Dutch phrases for shops and neighbours.",
    "Respect appointments and RSVPs.",
    "Participate in one community event per month.",
    "Accept direct feedback as information when appropriate.",
    "Ask questions when unsure — locals often appreciate the effort.",
    "Observe local customs before judging them.",
  ],
  myths: [
    { myth: "Dutch people are rude", reality: "Direct communication is often valued for clarity — tone varies by person and context." },
    { myth: "They are impossible to befriend", reality: "Friendships frequently grow through sports, hobbies and repeated contact rather than instant intimacy." },
    { myth: "They never show emotion", reality: "Emotion may appear through loyalty and reliability more than effusive language." },
    { myth: "Everyone cycles everywhere", reality: "Cycling is common in cities, but cars and OV matter too — especially outside dense urban cores." },
    { myth: "Everyone speaks perfect English", reality: "English helps daily, but Dutch effort opens deeper social and professional doors." },
    { myth: "Everyone behaves the same", reality: "Region, age, international background and personality shape behaviour more than a single national type." },
  ] satisfies MythCard[],
  faq: [
    { q: "What are Dutch social norms?", a: "Common patterns include punctuality, direct communication, personal space, practical planning and egalitarian social habits — expressed differently by person and place." },
    { q: "Is punctuality important?", a: "Yes for appointments, work and many social plans. Casual meetups may allow small delays — message the group if you are late." },
    { q: "Should I bring gifts when visiting?", a: "A small gift is often appreciated but not required. Flowers, wine or dessert are safe choices — ask if unsure." },
    { q: "Why do people split the bill?", a: "Fair cost-sharing is everyday practice. Tikkie and itemised splits keep group finances clear." },
    { q: "What happens at Dutch birthdays?", a: "Office circles with cake, home parties with seated circles and congratulating relatives in some settings — ask colleagues for team customs." },
    { q: "How should I greet people?", a: "Handshake in professional settings; cheek kisses possible among friends — follow the other person's lead." },
    { q: "Are Dutch people informal?", a: "Many social and work settings use first names quickly, but formality still appears in official and first meetings." },
    { q: "What mistakes should I avoid?", a: "Repeated lateness, ignoring RSVPs, loud behaviour in shared spaces and misreading direct tone as personal attack are common adaptation gaps." },
  ],
  faqNextSteps: [
    "Pair FAQ answers with Community Basics for friendship and club routes.",
    "Workplace tone has dedicated guides under Jobs if you are employed.",
    "Municipal websites list local events and programs that vary by city.",
  ],
  relatedGuidesReadingOrder: [
    "Dutch Social Norms (this page) → everyday etiquette orientation",
    "Community Basics → friends, neighbours and clubs",
    "Workplace Culture → professional communication if employed",
    "Learning Dutch → phrases for shops and neighbours",
  ],
  relatedGuides: [
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Making friends, neighbours, clubs and integration routes.", status: "live" },
    { label: "Dating in the Netherlands", href: "/netherlands/life/dating-in-the-netherlands/", description: "Apps, singles events, sports clubs and meeting people.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: "/netherlands/life/dutch-holidays-and-traditions/", description: "King's Day, Sinterklaas, Christmas and public holidays.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Professional communication, meetings and work-life balance.", status: "live" },
    { label: "Dutch Directness at Work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Workplace feedback and meeting debate for expats.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Language hub for courses, apps and municipal programs.", status: "comingSoon" },
    { label: "Dutch Culture (planned)", href: DUTCH_CULTURE_PATH, description: "Planned overview of traditions and cultural context.", status: "comingSoon" },
    { label: "Volunteering", href: VOLUNTEERING_PATH, description: "Volunteer portals and integration through giving back.", status: "comingSoon" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Build friendships and local networks.", status: "live" },
    { label: "Dutch Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH, description: "Navigate professional environments.", status: "live" },
    { label: "Dutch Directness", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Workplace communication deep dive.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and courses for daily life.", status: "comingSoon" },
    { label: "Volunteering", href: VOLUNTEERING_PATH, description: "Meet people through structured giving back.", status: "comingSoon" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Settling socially → start with Community Basics after this guide.",
    "Starting work → add Workplace Culture and Directness guides.",
    "Learning Dutch → even basic phrases improve neighbour and shop interactions.",
    "Volunteering → recurring shifts build familiarity faster than one-off events.",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on living, working and integrating in the Netherlands." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Consular and practical guidance for Dutch life abroad and newcomers." },
  ],
} as const;

export type DutchSocialNormsPage = typeof dutchSocialNormsPage;
