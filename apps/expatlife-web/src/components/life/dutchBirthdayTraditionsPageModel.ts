export const DUTCH_BIRTHDAY_TRADITIONS_PATH = "/netherlands/life/dutch-birthday-traditions/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const DUTCH_HOLIDAYS_TRADITIONS_PATH = "/netherlands/life/dutch-holidays-and-traditions/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const DATING_NETHERLANDS_PATH = "/netherlands/life/dating-in-the-netherlands/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type SnapshotMilestone = { label: string; value: string; note: string };

export type FoodCard = { name: string; category: string; note: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type MythCard = { myth: string; reality: string };

export type BirthdayPhrase = {
  dutch: string;
  english: string;
  pronunciation?: string;
  situation?: string;
  note?: string;
};

export type RegionalRow = {
  region: string;
  style: string;
  note: string;
  expatTip: string;
};

export type CongratulationExample = {
  person: string;
  dutch: string;
  english: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v3";
const VISUAL_PREFIX = "netherlands-dutch-birthday-traditions";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchBirthdayTraditionsPage = {
  slug: "dutch-birthday-traditions",
  path: DUTCH_BIRTHDAY_TRADITIONS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: DUTCH_CULTURE_PATH,
  publish: true,
  publishDate: "2026-12-05",
  seo: {
    title: "Dutch Birthday Traditions | Complete Guide for Expats",
    description:
      "Discover how birthdays are celebrated in the Netherlands, including circle parties, Dutch etiquette, gifts, children's birthdays, workplace celebrations and cultural customs.",
    keywords: [
      "dutch birthday traditions",
      "dutch birthday culture",
      "birthday netherlands",
      "dutch birthday etiquette",
      "dutch birthday customs",
      "kringverjaardag",
      "congratulations dutch birthday",
      "dutch birthday party",
      "birthdays in the netherlands",
      "dutch celebrations",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture",
    pageTitle: "Dutch Birthday Traditions",
    subtitle:
      "Understand how birthdays are celebrated in the Netherlands so you can confidently enjoy invitations, workplace celebrations and family gatherings.",
    primaryCta: { label: "Learn Dutch Birthday Customs", href: "#circle-party" },
    secondaryCta: { label: "Explore Dutch Culture", href: DUTCH_CULTURE_PATH },
    chips: ["Kringverjaardag", "Coffee & cake", "Congratulate everyone", "Gifts", "Office circles", "Children's treats"],
    disclaimer:
      "Orientation only — families, regions and generations celebrate differently. Ask hosts and colleagues about their customs rather than assuming one national script.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic kringverjaardag in a Dutch living room — guests seated in a circle of chairs around coffee, appeltaart and tulips, warm sunlight through canal-house windows with bicycles outside, calm gezellig birthday gathering.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#unique-tradition", label: "Why unique" },
    { href: "#circle-party", label: "Circle party" },
    { href: "#congratulations", label: "Congratulations" },
    { href: "#gifts", label: "Gifts" },
    { href: "#food", label: "Food" },
    { href: "#children", label: "Children" },
    { href: "#work", label: "Work" },
    { href: "#school", label: "School" },
    { href: "#calendars", label: "Calendars" },
    { href: "#modern", label: "Modern" },
    { href: "#regional", label: "Regional" },
    { href: "#expat-guide", label: "Expat tips" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#myths", label: "Myths" },
    { href: "#phrases", label: "Phrases" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium welcome board — how Dutch birthdays work from morning congratulations through coffee visits, treats, gifts and gezellig connection.",
      "Birthdays are social anchors in Dutch life — this guide explains the customs behind the coffee and cake."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot — coffee and cake, kringverjaardag circle seating, family congratulations, modest gifts, family gatherings and toilet calendars.",
      "Six signals that explain most first-time expat questions about Dutch birthdays."
    ),
    uniqueTradition: visual(
      "unique-tradition",
      "Premium cultural values diagram — family focus, hospitality, conversation, community remembering dates and gezellig simplicity.",
      "Birthdays reinforce connection more than spectacle — understanding that helps you participate comfortably."
    ),
    circleParty: visual(
      "circle-party",
      "Premium kringverjaardag floor plan — chairs in a circle, four-step guest flow from congratulations through coffee, seating and conversation.",
      "The circle party is the signature home format — chairs, cake and calm conversation rather than loud dancing."
    ),
    congratulations: visual(
      "congratulations",
      "Premium congratulations flow — greeting the birthday person, then partner, parents, children and grandparents with example phrases.",
      "Congratulating close family is a well-known Dutch custom — follow the host's lead if unsure."
    ),
    gifts: visual(
      "gifts",
      "Premium gift etiquette board — flowers, wine, chocolate and books for home visits; modest tokens for children; optional office pools.",
      "Modest, practical gifts are common — match the relationship rather than the price tag."
    ),
    food: visual(
      "food",
      "Premium birthday food board — koffie, appeltaart, Limburg vlaai, evening borrel cheese and bitterballen with guest tips sidebar.",
      "Food is simple and shareable — coffee with cake anchors most home visits."
    ),
    children: visual(
      "children",
      "Premium children's birthday guide — school treats, games, birthday crowns, class invitations and small gifts.",
      "Children's birthdays blend school rituals with home parties — parents coordinate treats and guest lists."
    ),
    work: visual(
      "work",
      "Premium office birthday guide — bringing cake, coffee breaks, colleague congratulations and team circle customs.",
      "Many offices expect you to treat colleagues on your own birthday — ask HR before your first one."
    ),
    school: visual(
      "school",
      "Premium school birthday guide — class treats, songs, teacher involvement and Dutch primary school traditions.",
      "School birthdays are structured and inclusive — one treat per child on their day."
    ),
    calendars: visual(
      "calendars",
      "Premium birthday calendar guide — toilet-door calendars, family memory customs and digital alternatives.",
      "Physical birthday calendars remain popular in many Dutch homes — a practical social tool."
    ),
    modern: visual(
      "modern",
      "Premium evolving traditions board — younger generations, international influences, restaurants and smaller gatherings.",
      "Traditions are adapting — urban and international households often blend Dutch and global styles."
    ),
    regional: visual(
      "regional",
      "Premium regional map — Randstad, Brabant, Limburg, northern provinces and international cities compared.",
      "Regional and urban context shapes how loudly birthdays are celebrated — observe locally."
    ),
    expatGuide: visual(
      "expat-guide",
      "Premium expat survival checklist — congratulate, arrive on time, bring a gift, join conversation and enjoy the experience.",
      "Most awkward moments come from surprise, not rudeness — this checklist prevents them."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake cards — only congratulating the birthday person, arriving late, expecting a large party and leaving without thanks.",
      "Small etiquette gaps are easy to fix once you know the local rhythm."
    ),
    myths: visual(
      "myths",
      "Premium myth cards — every birthday is a circle party, Dutch birthdays are boring and everyone serves identical food.",
      "Reality is more varied than social media memes suggest."
    ),
    phrases: visual(
      "phrases",
      "Premium Dutch birthday phrase board — gefeliciteerd, van harte gefeliciteerd, fijne verjaardag with pronunciation hints.",
      "A few Dutch phrases go a long way at parties and in the office."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — circle parties, congratulations, gifts, food, children's birthdays and workplace customs.",
      "Revisit before your first invitation or office birthday."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide map — Dutch culture, social norms, holidays, community basics and language learning.",
      "Birthdays connect to broader culture and etiquette — pair this guide with social norms."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next cards — Dutch culture, social norms, community basics, holidays and learning Dutch.",
      "Choose the next guide based on whether you need etiquette, friends or language."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Why this guide matters",
      items: [
        "Birthdays are among the most frequent social invitations expats receive.",
        "Dutch customs differ from Anglo-American surprise parties and large restaurant dinners.",
        "Understanding kringverjaardag and family congratulations prevents awkward first visits.",
        "Workplace and school birthdays follow their own predictable scripts.",
      ],
    },
    snapshot: {
      title: "Use the snapshot",
      items: [
        "Read circle party and congratulations sections before your first home invitation.",
        "Ask colleagues how your team handles office birthdays.",
        "Bring a modest gift unless told not to — flowers or something edible are safe.",
        "Expect variation between families — use this as orientation, not a rulebook.",
      ],
    },
    uniqueTradition: {
      title: "Cultural context",
      items: [
        "Birthdays mark belonging — who is remembered and who is invited matters.",
        "Hospitality is practical: coffee, cake and a place to sit and talk.",
        "Conversation is the entertainment — no pressure to perform or dance.",
        "Simplicity is a feature, not a lack of effort.",
      ],
    },
    circleParty: {
      title: "Circle party tips",
      items: [
        "Chairs face inward so everyone can see and hear each other.",
        "Guests often congratulate the birthday person first, then circulate.",
        "Stay for coffee and at least one slice of cake — leaving immediately can feel abrupt.",
        "It is fine to ask where to sit if the circle is forming when you arrive.",
      ],
    },
    congratulations: {
      title: "Congratulations etiquette",
      items: [
        "Start with the birthday person: 'Gefeliciteerd met je verjaardag!'",
        "At home parties, congratulate partner, parents or children if others do.",
        "A handshake or three cheek kisses may follow — mirror the host.",
        "When in doubt, watch one guest and repeat their pattern.",
      ],
    },
    gifts: {
      title: "Gift tips",
      items: [
        "Flowers, wine, chocolate or a book suit most adult home visits.",
        "Gift cards are acceptable when you know the person's interests.",
        "Children's parties often specify 'no gifts' or small token gifts — read the invitation.",
        "Office colleagues rarely expect expensive gifts — collective treats are common.",
      ],
    },
    food: {
      title: "What to expect",
      items: [
        "Coffee or tea is almost always offered first.",
        "Vlaai (fruit tart) and appeltaart are regional favourites.",
        "Evening visits may add wine, beer and savoury snacks.",
        "Dietary needs are increasingly accommodated — mention allergies when accepting.",
      ],
    },
    children: {
      title: "Children's birthday tips",
      items: [
        "School treats are often pre-packaged for allergy safety.",
        "Birthday crowns (verjaardagskroon) appear in many primary classrooms.",
        "Home parties may be smaller than international 'event' birthdays.",
        "Ask parents about drop-off times and sibling attendance.",
      ],
    },
    work: {
      title: "Office birthday tips",
      items: [
        "On your birthday, many teams expect you to bring taart for colleagues.",
        "Congratulate the birthday person when you see them — often at a morning coffee moment.",
        "Some teams pass a card or organise a small gift pool via Tikkie.",
        "Ask HR or a buddy about team norms before your first office birthday.",
      ],
    },
    school: {
      title: "School birthday tips",
      items: [
        "One child celebrates per day — treats for the whole class.",
        "Teachers coordinate timing so lessons continue smoothly.",
        "Songs like 'Lang zal hij/zij leven' may be sung — join in if invited.",
        "International schools may blend Dutch and home-country customs.",
      ],
    },
    calendars: {
      title: "Calendar customs",
      items: [
        "Many households hang a birthday calendar in the toilet — guests study dates.",
        "Updating the calendar when someone new joins the circle is a small kindness.",
        "Digital reminders coexist with paper calendars in many families.",
        "Remembering a birthday is valued — a message counts even without a party.",
      ],
    },
    modern: {
      title: "Changing traditions",
      items: [
        "Younger urban Dutch may prefer restaurant dinners or activity outings.",
        "International partners bring customs from home — fusion is normal.",
        "Milestone ages (18, 21, 50) sometimes get larger celebrations.",
        "Social media has not replaced home circles — both coexist.",
      ],
    },
    regional: {
      title: "Regional notes",
      items: [
        "Randstad cities see more international blends and restaurant birthdays.",
        "Brabant and Limburg retain strong gezellig home-party traditions.",
        "Northern provinces may favour quieter, smaller gatherings.",
        "Student cities add borrel-style evening birthdays for young adults.",
      ],
    },
    expatGuide: {
      title: "First invitation checklist",
      items: [
        "Congratulate the birthday person by name.",
        "Bring a small gift if invited to a home — flowers or wine are safe.",
        "Arrive within the stated window — punctuality is appreciated.",
        "Thank the host when leaving — 'Bedankt voor de gezelligheid' works well.",
      ],
    },
    mistakes: {
      title: "Easy fixes",
      items: [
        "If you forgot to congratulate family, do it before leaving.",
        "Arriving very late disrupts the circle flow — message if delayed.",
        "Not bringing office treats on your birthday surprises colleagues — ask first.",
        "Leaving without thanking the host feels cold — a quick goodbye helps.",
      ],
    },
    myths: {
      title: "Balanced view",
      items: [
        "Not every party is a strict circle — some are open kitchen or garden gatherings.",
        "Congratulating everyone happens in many homes, not literally every party.",
        "Quiet conversation is intentional — many guests enjoy the calm format.",
        "Large milestone parties and trips abroad are common for special ages.",
      ],
    },
    phrases: {
      title: "Practice aloud",
      items: [
        "Gefeliciteerd — geh-feh-lee-see-TSEHRT (congratulations).",
        "Van harte — van HAR-tuh (from the heart / sincerely).",
        "Fijne verjaardag — FAY-nuh ver-YAAR-dakh (happy birthday).",
        "Pair phrases with the person's name for warmth.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Dutch Social Norms for visiting and neighbour etiquette.",
        "Use Community Basics if you want more invitations and local friends.",
        "Learning Dutch phrases improves birthday small talk quickly.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Dutch Birthday Traditions (this page) → invitations and etiquette",
        "Dutch Social Norms → greetings, visits and bill splitting",
        "Dutch Holidays & Traditions → annual calendar beyond birthdays",
        "Community Basics → neighbours, clubs and integration",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need everyday etiquette → Dutch Social Norms",
        "Need friends and neighbours → Community Basics",
        "Need annual celebrations → Dutch Holidays & Traditions",
        "Need phrases → Learning Dutch",
      ],
    },
  },
  quickAnswer: {
    heading: "How Are Birthdays Celebrated?",
    summary:
      "Many Dutch birthdays focus on spending time with family and friends in a relaxed setting. Coffee and cake anchor home visits; the famous kringverjaardag (circle party) seats guests in a ring for conversation; guests often congratulate close family as well as the birthday person; gifts tend to be modest and practical. Children's and workplace birthdays follow their own familiar scripts. Practices vary between families, regions and generations.",
    bullets: [
      "Coffee and cake at home — conversation over spectacle.",
      "Circle seating (kringverjaardag) at many adult home parties.",
      "Congratulating the birthday person's partner, parents or children in some settings.",
      "Practical gifts — flowers, wine, chocolate or something small and thoughtful.",
      "Office birthdays often mean the birthday person brings treats for the team.",
    ],
    note:
      "Ask your host or colleagues what they usually do — most Dutch people happily explain their family style to newcomers.",
  },
  snapshotSignals: [
    { label: "Home format", value: "Coffee & cake", note: "Conversation-first gatherings" },
    { label: "Seating", value: "Circle party", note: "Kringverjaardag at many homes" },
    { label: "Greetings", value: "Congratulate family", note: "Partner, parents, children" },
    { label: "Office", value: "You bring cake", note: "On your own birthday" },
  ] satisfies SnapshotSignal[],
  orientationFlowSteps: [
    "Before your first invitation: read circle party and congratulations sections.",
    "First visit: bring a modest gift, congratulate family if others do, stay for coffee and cake.",
    "First year: ask colleagues about office birthday customs and add dates to your calendar.",
  ],
  snapshotMilestones: [
    { label: "Home visit", value: "Coffee & taart", note: "Circle seating common" },
    { label: "Congratulations", value: "Gefeliciteerd!", note: "Often includes family" },
    { label: "Office", value: "You bring cake", note: "Ask HR before your birthday" },
    { label: "School", value: "Class traktaties", note: "Allergy-safe treats" },
  ] satisfies SnapshotMilestone[],
  introExpatQuestions: [
    { title: "Should I congratulate everyone?", body: "At home parties with family present, guests often congratulate partner, parents or children — watch the first guest and mirror their pattern." },
    { title: "Do I need a gift?", body: "For home invitations, flowers, wine or chocolate are safe unless the invitation says otherwise. Office birthdays usually expect the birthday person to bring treats." },
    { title: "Why the circle of chairs?", body: "Kringverjaardag puts everyone at the same level for conversation — calm and gezellig, not a loud club party." },
    { title: "What if it feels different from home?", body: "Observation is fine — Dutch hosts usually explain their family style when asked. Pair this guide with Dutch Social Norms for visiting etiquette." },
  ] satisfies TipCard[],
  snapshotCards: [
    { title: "Coffee & Cake", body: "Most home birthdays centre on coffee or tea with taart, vlaai or appeltaart — simple, gezellig and easy to join." },
    { title: "Circle Seating", body: "Chairs arranged in a kring (circle) so every guest can talk — the famous kringverjaardag format." },
    { title: "Congratulate Everyone", body: "Guests often congratulate the birthday person's partner, parents or children — not only the person turning a year older." },
    { title: "Small Gifts", body: "Flowers, wine, chocolate or a book — modest and thoughtful rather than extravagant." },
    { title: "Family Gatherings", body: "Birthdays reinforce family ties — multiple generations may attend afternoon or evening visits." },
    { title: "Birthday Calendars", body: "Paper calendars in the toilet help households remember extended family and friends' dates." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Read the circle party section before your first home invitation.",
    "Memorise 'Gefeliciteerd!' — you will use it constantly.",
    "Ask colleagues about office birthday customs in your first week.",
    "Expect variation — urban international families may celebrate differently.",
  ],
  introParagraphs: [
    "Dutch birthday culture surprises many expats the first time they hear 'Gefeliciteerd!' directed at a parent or partner, or when they walk into a living room full of chairs arranged in a careful circle. These customs are not random quirks — they reflect values of equality, inclusion and gezelligheid (cosy togetherness) that run through much of Dutch social life.",
    "This guide explains traditional home parties, the kringverjaardag, family congratulations, gifts, children's and workplace birthdays, food, regional differences and how traditions are evolving. For broader etiquette on visits and neighbours, pair it with our Dutch Social Norms guide.",
  ],
  traditions: [
    { title: "Family focus", body: "Birthdays are occasions to see people you might not meet every week — grandparents, cousins and close friends gather for an afternoon or evening." },
    { title: "Hospitality", body: "Hosts provide coffee, cake and a comfortable seat. Guests are expected to stay long enough for conversation — rushing in and out feels unusual." },
    { title: "Conversation", body: "The party is the talk itself. Unlike loud club-style birthdays, Dutch home circles prioritise catching up with everyone in the room." },
    { title: "Community", body: "Remembering birthdays — via calendars, messages or visits — signals that someone belongs in your social circle." },
    { title: "Simplicity", body: "Elaborate decorations are less central than in some cultures. A clean home, good cake and warm welcome carry the day." },
    { title: "Equality in the circle", body: "Circle seating puts everyone at the same level — no head table, no VIP corner. That layout matches broader Dutch egalitarian social habits." },
  ] satisfies TipCard[],
  uniqueTraditionHeading: "Understanding the Tradition",
  uniqueTraditionParagraphs: [
    "In the Netherlands, a birthday is often less about throwing a spectacular event and more about marking someone's place in a network of family, friends and colleagues. The invitation itself says: you matter enough to spend an afternoon together.",
    "Historically, home space was limited and gatherings were practical. Coffee, cake and a circle of chairs allowed everyone to participate without expensive catering. Museums and cultural historians note that post-war Dutch domestic life reinforced small, frequent social visits over rare grand banquets — birthdays fit that pattern.",
    "For expats, the payoff is predictability. Once you learn the script — congratulate, sit, chat, eat cake, thank the host — you can relax into a rhythm that repeats across many households.",
  ],
  circlePartyHeading: 'The "Circle Party" (Kringverjaardag)',
  circlePartyParagraphs: [
    "The kringverjaardag is probably the best-known Dutch birthday format abroad — often described online with affectionate humour. Guests sit in a circle (kring) of chairs, usually in the living room, sometimes spilling into the kitchen or garden.",
    "The birthday person may sit slightly apart or move between guests as people arrive. New arrivals congratulate them, then often congratulate close family members present. Conversation flows in the round; there is rarely a programme of games or speeches unless it is a milestone age.",
    "Expats sometimes find the format quiet compared with parties at home. That calm is intentional — the goal is to speak with everyone, not to maximise noise or activity. Staying an hour or two, eating cake and joining a few conversations is exactly what hosts hope for.",
  ],
  circlePartyTopics: [
    { topic: "Why a circle?", detail: "Everyone sees and hears each other — no one is left on the edge of a loud crowd." },
    { topic: "Arrival flow", detail: "Congratulate the birthday person, accept coffee, find a seat. Watch others for the family-congratulations pattern." },
    { topic: "Conversation", detail: "Small talk about work, children, holidays and news — direct but friendly." },
    { topic: "Duration", detail: "Open-house style visits may span afternoon into evening; stay at least long enough for coffee and cake." },
    { topic: "Expat experience", detail: "First circle can feel formal — second and third feel warmly familiar." },
  ],
  circlePartyTips: [
    "Accept coffee or tea even if you only want water — it signals you are settling in.",
    "Do not rearrange chairs unless the host suggests it.",
    "If the circle is full, wait — someone often leaves before the next wave arrives.",
    "Compliment the cake — hosts often bake or order something regional.",
    "Ask one open question per person you sit near — curiosity is welcome.",
  ],
  congratulationsHeading: "Why Do People Congratulate the Whole Family?",
  congratulationsParagraphs: [
    "One of the most distinctive Dutch birthday customs is congratulating not only the person whose birthday it is, but also their partner, parents, children or sometimes siblings. The logic is relational: family members are seen as sharing the day.",
    "You might hear 'Gefeliciteerd met Jan!' addressed to Jan's wife, meaning congratulations on Jan's birthday. This is not sarcasm — it is a conventional form of goodwill. Expats who only congratulate the birthday person are not rude, but matching local practice helps you blend in.",
    "The custom is strongest at home parties with multiple generations. At the office or in a bar, people usually congratulate only the birthday person.",
  ],
  congratulationExamples: [
    { person: "Birthday person", dutch: "Gefeliciteerd met je verjaardag, Lisa!", english: "Congratulations on your birthday, Lisa!", note: "Always start here — use their name." },
    { person: "Partner", dutch: "Gefeliciteerd met Lisa!", english: "Congratulations on Lisa's birthday!", note: "Common when partner is in the room." },
    { person: "Parent (of adult child)", dutch: "Gefeliciteerd met je zoon/dochter!", english: "Congratulations on your son/daughter!", note: "When parent hosts or attends." },
    { person: "Child (in family party)", dutch: "Gefeliciteerd met papa/mama!", english: "Congratulations on dad/mom's birthday!", note: "Children are included in the ritual." },
    { person: "Grandparent", dutch: "Gefeliciteerd met je kleinkind!", english: "Congratulations on your grandchild!", note: "Less common but appears in three-generation homes." },
  ] satisfies CongratulationExample[],
  congratulationsTips: [
    "Watch the first two guests — mirror their pattern for family congratulations.",
    "If only the birthday person is present, keep it simple.",
    "A firm handshake or three cheek kisses may follow — follow the birthday person's lead.",
    "WhatsApp messages on the day are appreciated even when you cannot attend.",
  ],
  giftsHeading: "Birthday Gift Etiquette",
  giftsParagraphs: [
    "Dutch birthday gifts tend to be modest, practical and easy to carry. Flowers, a bottle of wine, good chocolate, a book or a small plant suit most adult home visits. Gift cards to bookshops or department stores work when you know the person's tastes.",
    "Close friends and partners exchange more personal gifts; colleagues often organise a small collective gift or expect no gift at all beyond office treats. Children's parties may request no gifts or specify a small amount — read the invitation.",
    "Wrapping is neat but not extravagant. A card with a short message is valued. When unsure, flowers or something edible rarely offend.",
  ],
  giftTopics: [
    { topic: "Flowers", detail: "Always appropriate for hosts — odd numbers are traditional for bouquets." },
    { topic: "Wine or beer", detail: "Fine for evening visits; check if hosts drink alcohol." },
    { topic: "Chocolate", detail: "Quality chocolate or stroopwafels — easy shared gift." },
    { topic: "Books", detail: "Popular in a reading culture — match genre to the person." },
    { topic: "Gift cards", detail: "Acceptable for close colleagues and friends when personal taste is unknown." },
    { topic: "Children", detail: "Small toys or books unless invitation says otherwise." },
  ],
  giftTips: [
    "Bring something you would enjoy receiving — modest and thoughtful wins.",
    "Do not expect gifts to be opened immediately at circle parties.",
    "Office gift pools via Tikkie are optional — contribute if you can, skip if not.",
    "When invited to dinner birthdays, wine or dessert contribution is welcome.",
  ],
  foodHeading: "Typical Birthday Food",
  foodParagraphs: [
    "Coffee and cake anchor most Dutch home birthdays — hosts offer filter coffee or tea first, then slice taart or vlaai for every guest. The ritual is simple and repeatable: drink, eat, talk, maybe stay for a second cup.",
    "Regional pastries add character. Limburg families often serve vlaai; Frisian households may offer oranjekoek; Randstad hosts might buy slagroomtaart from a neighbourhood bakkerij. Evening borrel birthdays extend the menu with wine, beer, cheese cubes and warm bitterballen.",
    "Office birthdays follow a similar pattern at scale — the birthday person brings a whole taart to the kitchen, colleagues gather for coffee and a slice. Mention dietary needs when accepting invitations; most hosts appreciate a heads-up about allergies or vegetarian preferences.",
  ],
  foodCards: [
    { name: "Coffee", category: "Drinks", note: "Almost always offered first — filter coffee or espresso after a meal." },
    { name: "Tea", category: "Drinks", note: "Common alternative — milk on the side." },
    { name: "Cake (taart)", category: "Sweet", note: "Slagroomtaart, fruit taart or home-baked cakes — central to the visit." },
    { name: "Appeltaart", category: "Sweet", note: "Dutch apple pie with cream — birthday classic." },
    { name: "Vlaai", category: "Sweet", note: "Limburg fruit tart — regional favourite at celebrations." },
    { name: "Snacks", category: "Savoury", note: "Bitterkoekjes, nuts or crisps as the afternoon extends." },
    { name: "Cheese", category: "Savoury", note: "Cubed cheese with mustard for evening borrel birthdays." },
    { name: "Bitterballen", category: "Savoury", note: "Warm fried snacks if guests stay into the evening." },
    { name: "Wine & beer", category: "Drinks", note: "Evening visits may shift from coffee to borrel drinks." },
    { name: "Evening snacks", category: "Savoury", note: "Bread, dips or a simple buffet if the party runs late." },
  ] satisfies FoodCard[],
  foodTips: [
    "Eat cake when offered — refusing can feel awkward unless you have dietary restrictions.",
    "Mention allergies when accepting the invitation.",
    "Regional pastries differ — Limburg vlaai, Frisian oranjekoek in the north.",
    "Office treats are often pre-sliced taart from a local bakkerij.",
  ],
  childrenHeading: "Birthday Parties for Children",
  childrenParagraphs: [
    "Children's birthdays in the Netherlands combine school rituals with home parties. At school, the birthday child often wears a paper crown (verjaardagskroon), brings treats (traktaties) for the class and may choose a small game or song led by the teacher.",
    "Home parties vary by age and family. Young children may invite classmates to play at home or in a park; teenagers might prefer cinema or bowling. Dutch parents often cap guest numbers and keep parties shorter than some international equivalents.",
    "Traktaties must follow school allergy policies — pre-packaged items with ingredient labels are increasingly required.",
  ],
  childrenTopics: [
    { topic: "School treats", detail: "One shared snack per child — fruit, cookies or small toys." },
    { topic: "Birthday crown", detail: "Classroom tradition — child is centre of attention briefly." },
    { topic: "Inviting classmates", detail: "Often whole class or same-gender group — ask school norms." },
    { topic: "Games", detail: "Simple party games at home; organised activities for older kids." },
    { topic: "Gifts", detail: "Small gifts common; some families request none." },
  ],
  childrenTips: [
    "RSVP promptly — parents plan seating and snacks tightly.",
    "Ask about siblings and drop-off rules.",
    "Pre-packaged traktaties save stress with allergy rules.",
    "A card from your child is enough when gifts are discouraged.",
  ],
  workHeading: "Celebrating at Work",
  workParagraphs: [
    "Office birthday culture catches many expats off guard: on your own birthday, you are often expected to bring cake or pastries for colleagues. The birthday person treats the team — not the other way around.",
    "Colleagues congratulate you when they see you — sometimes a short morning gathering in a meeting room or kitchen. Larger firms may email congratulations; small teams walk to your desk. Some teams circulate a card or organise a gift collection.",
    "Ask HR or a colleague before your birthday arrives. Knowing whether your team does morning coffee, afternoon cake or nothing prevents surprises.",
  ],
  workTopics: [
    { topic: "Bring cake", detail: "Taart from bakkerij or supermarket — enough for the team." },
    { topic: "Congratulations", detail: "Colleagues say gefeliciteerd — you thank them." },
    { topic: "Gift pools", detail: "Optional Tikkie for milestone ages or managers." },
    { topic: "Remote workers", detail: "Video call shout-outs and delivery treats increasingly common." },
  ],
  workChecklist: [
    "Ask how your team celebrates before your first birthday at work.",
    "Order or bake cake the day before — bakkerijen get busy.",
    "Bring plates, napkins and a knife unless the office supplies them.",
    "Congratulate colleagues on their birthdays — reciprocity matters.",
    "Note dietary needs — fruit or vegan options are appreciated.",
  ],
  schoolHeading: "Celebrating at School",
  schoolParagraphs: [
    "Dutch primary schools (basisschool) usually mark each child's birthday once during the school year on or near their date. The child may sit on a special chair, wear a crown and distribute traktaties while classmates sing.",
    "Teachers manage time so the ritual fits between lessons — it is short, inclusive and repeated for every child. International and secondary schools may adapt rules but often keep a visible birthday moment.",
    "Parents receive guidelines on treats, nuts, sugar and packaging from school newsletters — follow them exactly.",
  ],
  schoolTopics: [
    { topic: "Treats (traktaties)", detail: "Individually wrapped portions for every classmate." },
    { topic: "Songs", detail: "'Lang zal hij/zij leven' or school-specific versions." },
    { topic: "Teacher role", detail: "Facilitates — ensures every child gets a turn across the year." },
    { topic: "Allergy policy", detail: "Strict in most schools — label ingredients or buy sealed packs." },
  ],
  schoolTips: [
    "Read the school birthday policy PDF at enrolment.",
    "Choose treats that survive a backpack journey.",
    "Photograph the crown moment if the school allows.",
    "International schools may combine Dutch and home-country songs.",
  ],
  calendarsHeading: "Why Many Homes Have Birthday Calendars",
  calendarsParagraphs: [
    "The verjaardagskalender (birthday calendar) hanging in the toilet is a Dutch household classic. It lists birthdays of family, friends and neighbours without a year — so the same calendar works annually.",
    "Guests often study the calendar during a visit — it is a conversation starter and a memory aid. Updating it when someone new joins your life is a small gesture of inclusion.",
    "Digital calendars and Facebook reminders supplement paper for younger Dutch, but the toilet calendar remains a cultural touchstone — museum gift shops still sell them.",
  ],
  calendarTopics: [
    { topic: "Toilet calendar", detail: "Month-by-month list without year — reusable annually in many Dutch homes." },
    { topic: "Guest ritual", detail: "Visitors often read names while waiting — a quiet social cue." },
    { topic: "Updating names", detail: "Adding a new friend or neighbour signals inclusion." },
    { topic: "Digital backup", detail: "Phone reminders complement paper — younger Dutch use both." },
    { topic: "Gift-shop calendars", detail: "Popular housewarming present — illustrated versions in museum shops." },
  ],
  calendarTips: [
    "Add new friends when they visit — they notice their name.",
    "Paper calendars make good housewarming gifts.",
    "Combine with phone reminders for milestone ages.",
    "Children enjoy finding their own date on a friend's calendar.",
  ],
  modernHeading: "How Birthday Traditions Are Evolving",
  modernParagraphs: [
    "Younger Dutch and international households blend traditional circles with restaurant dinners, weekend trips or activity parties. Amsterdam, Rotterdam and Utrecht see more fusion styles than smaller towns.",
    "Second-generation and expat families may keep coffee-and-cake for grandparents and plan a separate friends' borrel on another evening. Milestone ages — 16, 18, 21, 40, 50 — often trigger larger celebrations.",
    "Social media posts and WhatsApp groups have not replaced home visits — they extend them. A photo of the cake may go to the group chat while the circle continues in the living room.",
  ],
  modernTopics: [
    { topic: "Younger generations", detail: "Bar borrels and dinners complement home circles." },
    { topic: "International influence", detail: "Surprise parties and themed children's events in urban areas." },
    { topic: "Restaurants", detail: "Dinner birthdays growing — still often with family." },
    { topic: "Smaller gatherings", detail: "Some prefer three close friends over twenty acquaintances." },
    { topic: "Milestone ages", detail: "18, 21, 40 and 50 often trigger bigger parties or trips." },
    { topic: "WhatsApp groups", detail: "Photos and messages extend the circle — they rarely replace it." },
  ],
  modernTips: [
    "Ask whether an invite is afternoon koffie or evening borrel — dress and gift choices differ.",
    "International partners may host two celebrations — one for Dutch family, one for friends.",
    "Restaurant birthdays still involve congratulating family if they attend.",
    "Do not assume every young Dutch person rejects circles — many keep them alongside newer formats.",
  ],
  regionalHeading: "Birthday Traditions Around the Netherlands",
  regionalParagraphs: [
    "No single Dutch birthday script covers every province. Limburg's vlaai culture shapes celebration food; Brabant retains strong afternoon visit traditions; Randstad cities absorb international formats faster.",
    "International cities like Amsterdam and The Hague host expat-heavy circles where English mixes with Dutch and customs hybridise. Northern provinces may favour quieter, shorter visits.",
    "Observe your gemeente and colleague networks — regional pride appears in cake choice, borrel length and how many generations attend.",
  ],
  regionalRows: [
    { region: "Randstad", style: "Mixed formats", note: "Home circles plus restaurant and borrel evenings", expatTip: "Ask if the invite is koffie en taart or avondborrel." },
    { region: "North Brabant", style: "Strong home visits", note: "Gezellig afternoon circles remain common", expatTip: "Expect generous cake and long conversation." },
    { region: "Limburg", style: "Vlaai tradition", note: "Fruit tarts feature at many birthdays", expatTip: "Compliment the vlaai — regional pride is real." },
    { region: "Northern provinces", style: "Quieter gatherings", note: "Smaller groups, shorter visits in some towns", expatTip: "Punctuality and thanks matter highly." },
    { region: "International cities", style: "Hybrid customs", note: "English, multiple cuisines, flexible seating", expatTip: "Still congratulate family if Dutch hosts are present." },
  ] satisfies RegionalRow[],
  expatGuideHeading: "What Expats Should Know",
  expatGuideParagraphs: [
    "Most expat awkwardness at Dutch birthdays comes from surprise, not bad intentions. Learning the congratulations pattern, circle seating and office cake custom prevents 90% of uncomfortable moments.",
    "Dutch hosts generally appreciate curiosity — asking 'What do you usually do for birthdays?' builds rapport. Nobody expects perfection on your first visit.",
  ],
  expatChecklist: [
    "Congratulate the birthday person by name — 'Gefeliciteerd!'",
    "Congratulate close family if others do — partner, parents, children.",
    "Arrive on time within the invitation window.",
    "Bring a small gift if invited to a home — flowers or wine are safe.",
    "Join conversations — ask questions, share a little about yourself.",
    "Do not worry if it feels different from home — observation is fine.",
    "Thank the host when leaving — enjoy the experience.",
  ],
  mistakeCards: [
    { title: "Only congratulating the birthday person", body: "At home parties with family present, guests often congratulate relatives too — missing this feels slightly off.", tip: "Watch the first guest and repeat their pattern." },
    { title: "Arriving very late", body: "Open-house circles still have a rhythm — very late arrival disrupts seating and food planning.", tip: "Message ahead if delayed; arrive within the stated window." },
    { title: "Expecting a large party", body: "Many Dutch birthdays are calm afternoon circles — not club nights or surprise crowds.", tip: "Adjust expectations — conversation is the main event." },
    { title: "Overthinking the seating", body: "Guests sometimes hesitate at the circle — standing awkwardly by the door.", tip: "Accept coffee and take the seat indicated by the host." },
    { title: "Not bringing anything", body: "A modest gift or flowers is normal for home invitations unless told not to.", tip: "Flowers or good chocolate are safe defaults." },
    { title: "Leaving without thanking the host", body: "A quick goodbye and thanks for gezelligheid closes the visit warmly.", tip: "Say 'Bedankt voor de gezelligheid' or thank them in English sincerely." },
  ] satisfies MistakeCard[],
  myths: [
    { myth: "Every birthday is a circle party", reality: "Kringverjaardag is common but not universal — restaurants, bars, gardens and small dinners are widely used, especially among younger urban Dutch." },
    { myth: "Everyone congratulates everyone", reality: "Family congratulations are strong at home parties with relatives present; at work or drinks-only events, people usually congratulate only the birthday person." },
    { myth: "Dutch birthdays are boring", reality: "The format is calm, not dull — guests who engage in conversation often find circles warmly intimate rather than flat." },
    { myth: "Nobody celebrates big", reality: "Milestone ages, 50th parties and group holidays abroad are common — scale varies by family and occasion." },
    { myth: "Everyone serves the same food", reality: "Limburg vlaai, Frisian specialties and international families' cuisines vary widely — coffee and cake are the thread, not the only menu." },
    { myth: "Everyone follows the same traditions", reality: "Regional, generational and international blends make Dutch birthday culture diverse — ask rather than assume." },
  ] satisfies MythCard[],
  phrases: [
    { dutch: "Gefeliciteerd!", english: "Congratulations!", pronunciation: "geh-feh-lee-see-TSEHRT", situation: "Universal — any birthday greeting", note: "Add the person's name for warmth." },
    { dutch: "Van harte gefeliciteerd!", english: "Congratulations from the heart!", pronunciation: "van HAR-tuh geh-feh-lee-see-TSEHRT", situation: "Warm, sincere — friends and family", note: "Stronger than plain gefeliciteerd." },
    { dutch: "Fijne verjaardag!", english: "Happy birthday!", pronunciation: "FAY-nuh ver-YAAR-dakh", situation: "Cards, messages, casual tone", note: "Common in writing and speech." },
    { dutch: "Hartelijk gefeliciteerd!", english: "Heartfelt congratulations!", pronunciation: "HAR-tuh-lik geh-feh-lee-see-TSEHRT", situation: "Slightly formal — colleagues and neighbours", note: "Polite and safe everywhere." },
    { dutch: "Gefeliciteerd met je verjaardag!", english: "Congratulations on your birthday!", pronunciation: "geh-feh-lee-see-TSEHRT met yuh ver-YAAR-dakh", situation: "Direct address to birthday person", note: "Most complete standard phrase." },
    { dutch: "Lang zal hij/zij leven!", english: "Long may he/she live!", pronunciation: "lahng zahl high/zay LAY-vun", situation: "Sung at children's birthdays", note: "Follow with 'Hieperdepiep hoera!' at the end." },
  ] satisfies BirthdayPhrase[],
  faq: [
    { q: "Why do Dutch congratulate everyone?", a: "Congratulating family members acknowledges that birthdays are shared occasions — partners, parents and children are seen as connected to the day. It is strongest at home parties with relatives present. At work, people usually congratulate only the birthday person." },
    { q: "What is a kringverjaardag?", a: "A kringverjaardag (circle birthday) is a home party where guests sit in a circle of chairs, drink coffee, eat cake and converse. It prioritises inclusion and calm conversation over loud entertainment." },
    { q: "Should I bring a gift?", a: "For home invitations, a modest gift — flowers, wine, chocolate or a book — is normal unless the invitation says otherwise. Office birthdays usually expect the birthday person to bring treats, not guests to bring gifts." },
    { q: "What food is served?", a: "Coffee and tea with cake or pie anchor most visits. Appeltaart and vlaai are classics. Evening parties may add wine, beer, cheese and bitterballen." },
    { q: "How are children's birthdays celebrated?", a: "Children bring traktaties to school, may wear a birthday crown, and host home or activity parties with classmates. Schools publish allergy and treat guidelines for parents." },
    { q: "Do colleagues celebrate birthdays?", a: "Yes — colleagues congratulate you and often expect you to bring cake or pastries on your own birthday. Ask your team about their usual practice." },
    { q: "Should I congratulate parents?", a: "At home parties where parents of the birthday person are present, many guests congratulate them too — 'Gefeliciteerd met [name]!' Follow what other guests do if unsure." },
    { q: "What should expats expect?", a: "Expect a calm, conversational format at many home parties, family congratulations, modest gifts and punctual arrival. Ask hosts and colleagues about their customs — variation is normal." },
  ],
  faqNextSteps: [
    "Read Dutch Social Norms for visiting and neighbour etiquette.",
    "Practice birthday phrases in our Learning Dutch hub.",
    "Use Community Basics to build the friendships that lead to invitations.",
  ],
  relatedGuidesReadingOrder: [
    "Dutch Birthday Traditions (this page) → invitations and etiquette",
    "Dutch Culture → broad overview of Dutch society",
    "Dutch Social Norms → greetings, visits and everyday rules",
    "Dutch Holidays & Traditions → annual celebrations beyond birthdays",
    "Community Basics → neighbours, clubs and integration",
  ],
  relatedGuides: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "High-level overview of Dutch society and culture cluster.", status: "live" },
    { label: "Dutch Etiquette", href: "/netherlands/life/dutch-etiquette/", description: "Practical manners for greetings, dining and visiting.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette, greetings and visiting customs.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual calendar, King's Day, Sinterklaas and Christmas.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Friends, neighbours and local integration.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Courses, apps and phrases for daily life.", status: "live" },
    { label: "Dating in the Netherlands", href: DATING_NETHERLANDS_PATH, description: "Meeting people and social life beyond birthdays.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Dutch Culture", href: DUTCH_CULTURE_PATH, description: "Culture cluster overview.", status: "live" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Etiquette and unwritten rules.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbours, clubs and integration.", status: "live" },
    { label: "Dutch Holidays & Traditions", href: DUTCH_HOLIDAYS_TRADITIONS_PATH, description: "Annual celebrations calendar.", status: "live" },
    { label: "Learning Dutch", href: LANGUAGE_LEARNING_PATH, description: "Phrases and learning routes.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Need everyday etiquette → Dutch Social Norms",
    "Need friends and neighbours → Community Basics",
    "Need annual celebrations → Dutch Holidays & Traditions",
    "Need birthday phrases → Learning Dutch",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government portal — cultural life and public information." },
    { label: "NetherlandsWorldwide", href: "https://www.netherlandsworldwide.nl/", description: "Government information for Dutch citizens and internationals abroad." },
    { label: "Openluchtmuseum — daily life", href: "https://www.openluchtmuseum.nl/", description: "Netherlands Open Air Museum — historical domestic and social customs." },
  ],
} as const;

export type DutchBirthdayTraditionsPage = typeof dutchBirthdayTraditionsPage;
