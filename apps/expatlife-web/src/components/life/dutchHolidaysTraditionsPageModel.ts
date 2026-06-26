export const DUTCH_HOLIDAYS_TRADITIONS_PATH = "/netherlands/life/dutch-holidays-and-traditions/" as const;
export const LIFE_HUB_PATH = "/netherlands/life/" as const;
export const DUTCH_CULTURE_PATH = "/netherlands/life/dutch-culture/" as const;
export const DUTCH_SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const LIVING_CULTURE_ETIQUETTE_PATH = "/netherlands/living/culture-etiquette/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const DUTCH_TRADITIONS_PATH = "/netherlands/culture/dutch-traditions/" as const;

export type LifeGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type SnapshotMilestone = { label: string; value: string; note: string };

export type CalendarMonth = { month: string; holidays: string; note: string };

export type HolidayDetail = {
  name: string;
  timing: string;
  publicHoliday: string;
  shopsOpen: string;
  summary: string;
};

export type FoodTradition = { name: string; season: string; note: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type CityHolidayCard = {
  city: string;
  href: string;
  kingsDay: string;
  christmas: string;
  carnival: string;
  markets: string;
  familyAtmosphere: string;
};

export type RegionalTraditionRow = {
  tradition: string;
  timing: string;
  where: string;
  expatTip: string;
};

export type VariableHolidayRow = {
  name: string;
  datePattern: string;
  paidDayOff: string;
  note: string;
};

export type PublicHolidayRow = VariableHolidayRow;

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-dutch-holidays-and-traditions";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchHolidaysTraditionsPage = {
  slug: "dutch-holidays-and-traditions",
  path: DUTCH_HOLIDAYS_TRADITIONS_PATH,
  hubPath: LIFE_HUB_PATH,
  parentGuidePath: DUTCH_CULTURE_PATH,
  publish: true,
  publishDate: "2026-11-28",
  seo: {
    title: "Dutch Holidays and Traditions | Complete Expat Guide",
    description:
      "Discover Dutch holidays and traditions including King's Day, Sinterklaas, Christmas, Easter, Liberation Day and other celebrations every expat should know.",
    keywords: [
      "dutch holidays",
      "holidays in the netherlands",
      "dutch traditions",
      "public holidays netherlands",
      "dutch celebrations",
      "kings day",
      "sinterklaas",
      "christmas netherlands",
      "liberation day netherlands",
      "easter netherlands",
    ],
  },
  hero: {
    eyebrow: "Life in the Netherlands · Culture",
    pageTitle: "Dutch Holidays and Traditions",
    subtitle:
      "Discover the celebrations, customs and traditions that shape life in the Netherlands throughout the year.",
    primaryCta: { label: "Explore the Dutch Calendar", href: "#annual-calendar" },
    secondaryCta: { label: "King's Day guide", href: "#kings-day" },
    chips: ["King's Day", "Sinterklaas", "Christmas", "Liberation Day", "Carnival", "School holidays"],
    disclaimer:
      "Orientation only — dates, opening hours and local events change yearly. Confirm public holiday schedules, school calendars and municipal listings before planning travel or work.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic King's Day vrijmarkt on Haarlem Grote Markt — cobblestone town square, historic gabled buildings and church tower, orange bunting, families at blanket stalls, children in orange crowns, bicycles by iron railings, warm spring afternoon light.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#annual-calendar", label: "Calendar" },
    { href: "#kings-day", label: "King's Day" },
    { href: "#sinterklaas", label: "Sinterklaas" },
    { href: "#christmas", label: "Christmas" },
    { href: "#new-year", label: "New Year" },
    { href: "#easter", label: "Easter" },
    { href: "#liberation-remembrance", label: "May 4–5" },
    { href: "#ascension-pentecost", label: "Spring breaks" },
    { href: "#carnival", label: "Carnival" },
    { href: "#school-holidays", label: "School" },
    { href: "#regional-traditions", label: "Regional" },
    { href: "#holiday-food", label: "Food" },
    { href: "#expat-expectations", label: "Expect" },
    { href: "#experience-traditions", label: "Participate" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#common-questions", label: "Questions" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board — national holidays, religious commemorations, regional traditions and modern festivals across the Dutch year.",
      "Holidays blend history, family life and city-wide parties — use this guide to plan participation, not just tourism."
    ),
    snapshot: visual(
      "snapshot",
      "Premium snapshot cards — King's Day, Sinterklaas, Christmas, Liberation Day, Carnival and Easter with timing and participation notes.",
      "Pick one celebration per season to experience before trying to cover the whole calendar."
    ),
    annualCalendar: visual(
      "annual-calendar",
      "Premium annual timeline — January through December with major Dutch holidays, long weekends and family seasons.",
      "Confirm exact dates yearly — Easter, Ascension and Pentecost shift with the church calendar."
    ),
    kingsDay: visual(
      "kings-day",
      "Premium King's Day guide — orange clothing, vrijmarkt markets, canal boats, music, food and city comparison tips.",
      "King's Day is the loudest nationwide party — book accommodation early and expect crowds in Amsterdam."
    ),
    sinterklaas: visual(
      "sinterklaas",
      "Premium Sinterklaas guide — arrival parade, pepernoten, chocolate letters, pakjesavond and family gift customs.",
      "Sinterklaas is separate from Christmas — families with children experience it most intensely in November–December."
    ),
    christmas: visual(
      "christmas",
      "Premium Dutch Christmas guide — markets, kerst dinners, decorations, ice skating and winter school break rhythms.",
      "Two Christmas days (25 and 26 December) are public holidays — plan shopping and travel accordingly."
    ),
    newYear: visual(
      "new-year",
      "Premium New Year guide — oliebollen, fireworks traditions, polar plunge events and safety reminders.",
      "Fireworks peak at midnight 31 December — check municipal rules and pet care plans."
    ),
    easter: visual(
      "easter",
      "Premium Easter guide — family brunches, chocolate eggs, garden centres and spring events.",
      "Easter Monday is a public holiday — many people take a long weekend trip."
    ),
    liberationRemembrance: visual(
      "liberation-remembrance",
      "Premium Remembrance and Liberation Day guide — May 4 silence, May 5 concerts and national commemorations.",
      "May 4 is solemn nationwide — avoid loud celebrations until after the evening silence."
    ),
    ascensionPentecost: visual(
      "ascension-pentecost",
      "Premium Ascension and Pentecost overview — long weekends, outdoor activities and bridge-day travel patterns.",
      "These spring public holidays often create four-day weekends — trains and campsites fill early."
    ),
    carnival: visual(
      "carnival",
      "Premium Carnival guide — Brabant and Limburg costumes, parades and southern Netherlands atmosphere.",
      "Carnival is regional — Randstad cities feel different from 's-Hertogenbosch or Maastricht."
    ),
    schoolHolidays: visual(
      "school-holidays",
      "Premium school holiday calendar — summer, autumn, spring and Christmas breaks by region with travel impact.",
      "North, middle and south regions stagger breaks — check your gemeente school calendar."
    ),
    regionalTraditions: visual(
      "regional-traditions",
      "Premium regional traditions map — Elfstedentocht, cheese markets, flower parade, tulip season and Saint Martin.",
      "Regional events reward short trips outside your home city — combine with weekend plans."
    ),
    holidayFood: visual(
      "holiday-food",
      "Premium seasonal food board — oliebollen, pepernoten, banketstaaf, tompouce and bitterballen with timing labels.",
      "Seasonal treats appear in shops weeks before the holiday — taste early to learn what locals queue for."
    ),
    expatExpectations: visual(
      "expat-expectations",
      "Premium expat checklist — travel booking, shop closures, transport changes and King's Day crowds.",
      "Treat public holidays like mini peak seasons — especially in Amsterdam and student cities."
    ),
    experienceTraditions: visual(
      "experience-traditions",
      "Premium participation ideas — markets, neighbourhood events, arrivals, volunteering and community celebrations.",
      "Showing up locally beats only watching tourist highlights on social media."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city holiday comparison — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Maastricht celebrations.",
      "Choose cities by the holiday you care about — Carnival south, King's Day canals, Christmas markets north."
    ),
    commonQuestions: visual(
      "common-questions",
      "Premium common questions cards — shops open, work days, public holiday status and school calendars.",
      "Rules vary by employer and municipality — verify locally when planning work or childcare."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake cards — assuming everything closes, King's Day without planning, ignoring 4 May silence.",
      "Most friction is planning — calendar awareness beats last-minute scrambling."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — public holidays, King's Day, Sinterklaas, Christmas, school breaks and traditional foods.",
      "Revisit this page each autumn when school and shop calendars update."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guide map — Dutch culture, social norms, community, festivals, cities and weekend trips.",
      "Holidays connect to everyday etiquette and city life — pair calendar knowledge with social norms."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next cards — culture overview, social norms, community basics, festivals and cities.",
      "Pick the next guide based on whether you need etiquette, friends or city logistics."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Why holidays matter",
      items: [
        "Calendar events shape shop hours, school schedules and neighbourhood social life.",
        "Many traditions are family-oriented — expats with children notice Sinterklaas and Christmas most.",
        "Regional variation is real — Carnival south, King's Day nationwide, local fairs year-round.",
        "Participating builds community ties faster than only observing from apartment windows.",
      ],
    },
    snapshot: {
      title: "Use the snapshot",
      items: [
        "Pick one headline celebration per season before trying to attend everything.",
        "Check municipal sites for exact parade and market dates.",
        "Ask neighbours which local events they actually attend.",
        "Revisit annually — dates and crowd patterns shift.",
      ],
    },
    annualCalendar: {
      title: "Calendar tips",
      items: [
        "Easter, Ascension and Pentecost dates move every year.",
        "King's Day is 27 April (26 April if Sunday).",
        "Plan King's Day and summer school holidays months ahead for travel.",
        "Government.nl lists official public holiday names in Dutch and English.",
      ],
    },
    kingsDay: {
      title: "King's Day tips",
      items: [
        "Wear orange if you like — not mandatory but common.",
        "Arrive early for vrijmarkt browsing and canal-side space.",
        "Expect limited parking — use OV and plan return times.",
        "Stay hydrated and set a meeting point if visiting with friends.",
      ],
    },
    sinterklaas: {
      title: "Sinterklaas tips",
      items: [
        "Arrival parades are crowded — arrive early with children.",
        "Pakjesavond (5 December) is the main family gift night for many households.",
        "Chocolate letters and pepernoten appear in shops from October.",
        "Do not assume every family celebrates identically — ask colleagues politely.",
      ],
    },
    christmas: {
      title: "Christmas tips",
      items: [
        "25 and 26 December are public holidays — supermarkets may close or shorten hours.",
        "Christmas markets run in many cities from late November.",
        "Kerst dinners are often home-based — invitations may come from colleagues or neighbours.",
        "Ice rinks and light trails extend through December in larger cities.",
      ],
    },
    newYear: {
      title: "New Year tips",
      items: [
        "Oliebollen stalls appear from late December.",
        "Fireworks are widespread but rules vary by municipality.",
        "Nieuwjaarsduik (polar plunge) events happen on 1 January at beaches and lakes.",
        "Keep pets indoors and check firework restriction zones.",
      ],
    },
    easter: {
      title: "Easter tips",
      items: [
        "Good Friday is not a national public holiday for all workers — check your employer.",
        "Easter Monday creates a popular long weekend.",
        "Garden centres are busy — brunch reservations help in cities.",
        "Children's egg hunts happen at schools, neighbourhoods and museums.",
      ],
    },
    liberationRemembrance: {
      title: "May 4–5 etiquette",
      items: [
        "8 May 4 silence at 20:00 — pause conversations outdoors.",
        "Remembrance ceremonies are solemn — avoid party atmosphere until after.",
        "Liberation Day festivals occur in many cities on 5 May.",
        "Paid public holiday on 5 May occurs every five years — verify employer policy other years.",
      ],
    },
    ascensionPentecost: {
      title: "Long weekend tips",
      items: [
        "Bridge days (brugdag) before or after create five-day breaks for many workers.",
        "Campsites and NS peak pricing apply — book early.",
        "Outdoor events and family visits dominate these weekends.",
        "Church calendar sets dates — mark them when published each year.",
      ],
    },
    carnival: {
      title: "Carnival tips",
      items: [
        "Strongest in North Brabant and Limburg — not a nationwide costume day.",
        "Parades and brass bands fill town centres — hotels sell out locally.",
        "Dress codes are playful — check weather for outdoor standing.",
        "Randstad cities may feel quiet compared with 's-Hertogenbosch or Maastricht.",
      ],
    },
    schoolHolidays: {
      title: "School break impact",
      items: [
        "Regions (north, middle, south) stagger summer dates to spread traffic.",
        "Autumn and spring breaks are shorter but affect family travel and museums.",
        "Check your child's school or gemeente calendar — not one national week.",
        "Attractions and camps raise prices during summer peaks.",
      ],
    },
    regionalTraditions: {
      title: "Regional ideas",
      items: [
        "Tulip season (March–May) draws visitors to Bollenstreek and Keukenhof area.",
        "Cheese markets in Alkmaar and Gouda run seasonal schedules.",
        "Saint Martin (11 November) involves children's lantern walks in many neighbourhoods.",
        "Elfstedentocht is rare — celebrated when winter ice allows.",
      ],
    },
    holidayFood: {
      title: "Taste the calendar",
      items: [
        "Try seasonal foods at markets — fresher than supermarket-only sampling.",
        "Ask what a dish is called in Dutch — useful for shop searches.",
        "Gift food boxes spike before Sinterklaas and Christmas.",
        "Bitterballen appear year-round but dominate party seasons.",
      ],
    },
    expatExpectations: {
      title: "Plan ahead",
      items: [
        "Book trains and hotels before King's Day and summer breaks.",
        "Shops and banks follow public holiday schedules — not every holiday closes everything.",
        "Employer contracts define which days you must work.",
        "Restaurant reservations help for Christmas and New Year's Eve.",
      ],
    },
    experienceTraditions: {
      title: "Participate locally",
      items: [
        "Visit buurt markets and library event boards.",
        "Join a neighbourhood Sinterklaas or Saint Martin walk with children if invited.",
        "Volunteer at festivals for behind-the-scenes community contact.",
        "Invite neighbours to share what their family does each season.",
      ],
    },
    cityComparison: {
      title: "Choose your city",
      items: [
        "Amsterdam — massive King's Day and winter markets, intense crowds.",
        "Rotterdam — harbour festivals and modern event programming.",
        "Maastricht — Carnival and southern Christmas market atmosphere.",
        "Utrecht — student energy around King's Day and spring events.",
      ],
    },
    commonQuestions: {
      title: "Quick clarifiers",
      items: [
        "Public holiday ≠ every shop closed — check chains and local listings.",
        "School holiday ≠ public holiday — childcare planning still required.",
        "Celebrating is optional — observing respectfully is enough to start.",
        "Municipal event calendars list free neighbourhood activities.",
      ],
    },
    mistakes: {
      title: "Planning fixes",
      items: [
        "Check supermarket chain apps the evening before public holidays.",
        "Book King's Day travel early or choose Utrecht or Haarlem over Amsterdam.",
        "Pause conversations outdoors at 20:00 on 4 May.",
        "Ask colleagues how their household splits Sinterklaas and Christmas gifts.",
        "Save your school region calendar PDF each September.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Pair answers with Dutch Social Norms for visiting and gift etiquette.",
        "Use city guides for neighbourhood event density.",
        "Bookmark Government.nl holiday overview for official names.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Holidays (this page) → annual calendar orientation",
        "Dutch Social Norms → etiquette at parties and visits",
        "Community Basics → neighbourhood events and clubs",
        "Cities hub → where to experience each celebration",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need everyday etiquette → Dutch Social Norms",
        "Need neighbours and friends → Community Basics",
        "Need city logistics → Cities hub",
        "Need broad culture context → Dutch Culture overview",
      ],
    },
  },
  quickAnswer: {
    heading: "What Holidays Do the Dutch Celebrate?",
    summary:
      "The Netherlands celebrates a mixture of national public holidays, Christian commemorations, historical remembrance days, regional festivals and modern city events. King's Day, Sinterklaas and Christmas shape family life; Liberation Day and Remembrance Day carry national meaning; Carnival dominates the south; Easter and Pentecost create spring long weekends.",
    bullets: [
      "Public holidays affect work and many shop hours — but not identically everywhere.",
      "School holidays are regional and staggered — check your gemeente calendar.",
      "King's Day (27 April) is the largest nationwide street celebration.",
      "Sinterklaas (November–December) precedes Christmas in family traditions.",
      "Regional traditions — tulips, cheese markets, Carnival — reward short trips.",
    ],
    note:
      "Start with King's Day or a local Christmas market if you want one big experience — then add Sinterklaas or Carnival based on your region and family situation.",
  },
  snapshotSignals: [
    { label: "King's Day", value: "27 April", note: "Orange street parties nationwide" },
    { label: "Sinterklaas", value: "Nov–Dec", note: "Family gifts 5 December" },
    { label: "Christmas", value: "25–26 Dec", note: "Two public holidays" },
    { label: "May 4–5", value: "Remembrance & Liberation", note: "National ceremonies" },
  ] satisfies SnapshotSignal[],
  snapshotMilestones: [
    { label: "Carnival", value: "February (south)", note: "Brabant & Limburg" },
    { label: "Easter", value: "March/April", note: "Long weekend common" },
    { label: "New Year", value: "31 Dec–1 Jan", note: "Fireworks & oliebollen" },
    { label: "School summer", value: "6 weeks regional", note: "Travel peak" },
  ] satisfies SnapshotMilestone[],
  snapshotCards: [
    { title: "King's Day", body: "Nationwide orange celebration with vrijmarkt flea markets, music and canal parties — busiest in Amsterdam." },
    { title: "Sinterklaas", body: "Children's tradition with arrival parades, pepernoten and pakjesavond gifts on 5 December." },
    { title: "Christmas", body: "Family dinners, markets and two public holidays — quieter than some countries but deeply home-focused." },
    { title: "Liberation Day", body: "5 May festivals celebrate freedom — solemn remembrance on 4 May at 20:00." },
    { title: "Carnival", body: "Costumes and parades in the south — Maastricht and 's-Hertogenbosch are flagship cities." },
    { title: "Easter", body: "Spring family meals, chocolate eggs and garden-centre weekends — Easter Monday is a public holiday." },
  ] satisfies TipCard[],
  snapshotUseTips: [
    "Mark three dates on your calendar now — King's Day, Christmas and your school region's summer start.",
    "Subscribe to your gemeente event newsletter.",
    "Ask colleagues which holidays they actually take off work.",
    "Revisit this page each September when school calendars publish.",
  ],
  orientationFlowSteps: [
    "Month 1: attend one neighbourhood market or library cultural event.",
    "Season 1: experience one major holiday (King's Day, Sinterklaas arrival or a Christmas market).",
    "Year 1: combine one national holiday with one regional tradition trip.",
  ],
  introExpatQuestions: [
    { title: "Do I need to celebrate?", body: "No — observing respectfully and learning calendar rhythms helps daily life. Participation accelerates community ties." },
    { title: "Are shops always closed?", body: "Public holidays reduce hours but tourist areas and Sunday-style rules vary — check listings the day before." },
    { title: "What should families know first?", body: "Sinterklaas and school holiday calendars affect children's social life from autumn onward." },
    { title: "Best first experience?", body: "King's Day if you like crowds; a local Christmas market if you prefer winter atmosphere; Carnival if you live in the south." },
  ] satisfies TipCard[],
  introParagraphs: [
    "Dutch holidays blend historical commemorations, Christian calendar dates, royal celebrations and regional folklore. For expats, the calendar explains why trams run differently, why colleagues leave early before pakjesavond, and why orange outfits appear suddenly in April.",
    "This guide maps major holidays, public holiday rules, school breaks, food traditions and city differences — without political or religious debate. For everyday etiquette at parties and visits, pair it with our Dutch Social Norms guide.",
  ],
  annualCalendar: [
    { month: "January", holidays: "New Year's Day (1 Jan)", note: "Public holiday; fireworks aftermath; nieuwjaarsduik dips on 1 Jan." },
    { month: "February", holidays: "Carnival (south)", note: "Not nationwide — peaks in Brabant and Limburg." },
    { month: "March/April", holidays: "Easter weekend", note: "Easter Sunday & Monday public holidays; dates shift yearly." },
    { month: "April", holidays: "King's Day (27 Apr)", note: "Nationwide celebration; 26 Apr if Sunday." },
    { month: "May", holidays: "Remembrance (4 May) & Liberation (5 May)", note: "Silence 20:00 on 4 May; festivals on 5 May." },
    { month: "May", holidays: "Ascension Day", note: "Public holiday; often part of long weekend." },
    { month: "May/June", holidays: "Pentecost Sunday & Monday", note: "Second spring long weekend for many families." },
    { month: "November", holidays: "Sinterklaas arrival", note: "Parades from mid-November; shops fill with seasonal treats." },
    { month: "December", holidays: "Sinterklaas (5 Dec) & Christmas", note: "Pakjesavond then Christmas markets and kerst." },
    { month: "December", holidays: "Christmas & New Year's Eve", note: "25–26 Dec public holidays; 31 Dec celebrations." },
  ] satisfies CalendarMonth[],
  publicHolidays: [
    { name: "New Year's Day", datePattern: "1 January", paidDayOff: "Yes — public holiday", note: "Shops often closed or limited." },
    { name: "Easter Sunday", datePattern: "March/April (varies)", paidDayOff: "Yes", note: "Church and family meals." },
    { name: "Easter Monday", datePattern: "Day after Easter", paidDayOff: "Yes", note: "Popular bridge-day travel." },
    { name: "King's Day", datePattern: "27 April (26 if Sunday)", paidDayOff: "Yes", note: "Major nationwide events." },
    { name: "Liberation Day", datePattern: "5 May", paidDayOff: "Every 5 years for many; optional other years", note: "Verify employer policy." },
    { name: "Ascension Day", datePattern: "39 days after Easter", paidDayOff: "Yes", note: "Often Thursday long weekend." },
    { name: "Whit Sunday (Pentecost)", datePattern: "49 days after Easter", paidDayOff: "Yes", note: "Sunday public holiday." },
    { name: "Whit Monday", datePattern: "Day after Pentecost", paidDayOff: "Yes", note: "Second Monday holiday in spring." },
    { name: "Christmas Day", datePattern: "25 December", paidDayOff: "Yes", note: "First Christmas day." },
    { name: "Boxing Day", datePattern: "26 December", paidDayOff: "Yes — Second Christmas Day", note: "Family visits continue." },
  ] satisfies PublicHolidayRow[],
  variableHolidayRows: [
    { name: "Good Friday (Goede Vrijdag)", datePattern: "Friday before Easter", paidDayOff: "Employer-dependent", note: "Common in schools and some sectors — confirm your contract." },
    { name: "Liberation Day (Bevrijdingsdag)", datePattern: "5 May", paidDayOff: "Paid every 5 years for many workers", note: "Festivals still happen annually — verify if you must work." },
    { name: "Carnival (Vastenavond)", datePattern: "February / early March", paidDayOff: "Not a national public holiday", note: "Major in Brabant and Limburg — plan south trips separately." },
  ] satisfies VariableHolidayRow[],
  kingsDayHeading: "King's Day (Koningsdag)",
  kingsDayParagraphs: [
    "King's Day on 27 April (26 April when 27 falls on Sunday) celebrates the monarch's birthday with nationwide street markets (vrijmarkt), music, boats on canals and orange clothing. Amsterdam draws the largest crowds; smaller cities offer a more local feel.",
    "Historically linked to the House of Orange, the day is less about royal ceremony and more about communal outdoor partying — though official visits still occur in a chosen city each year.",
  ],
  kingsDayTopics: [
    { topic: "Orange clothing", detail: "Wear orange if you like — flags, wigs and accessories are common but not required." },
    { topic: "Vrijmarkt", detail: "Free flea markets on streets — children sell toys; adults clear attics." },
    { topic: "Music & boats", detail: "Canal boats with DJs in Amsterdam; live stages in many cities." },
    { topic: "What closes", detail: "Banks and many offices closed; some supermarkets open with holiday hours." },
    { topic: "Best for expats", detail: "Try Utrecht or Haarlem if Amsterdam crowds feel overwhelming." },
  ],
  kingsDayTips: [
    "Book accommodation months ahead for Amsterdam King's Day weekend.",
    "Use public transport — road closures are extensive in city centres.",
    "Carry cash for vrijmarkt stalls — not every seller accepts cards.",
    "Agree a meeting point — mobile networks can overload in crowds.",
    "Respect residents — don't litter in canal streets after parties.",
  ],
  sinterklaasHeading: "Sinterklaas",
  sinterklaasParagraphs: [
    "Sinterklaas arrives from mid-November with televised parades and local intochten (arrival events). Children receive gifts on pakjesavond (evening of 5 December) often attributed to Sinterklaas and helpers, separate from Christmas Day gifts in many families.",
    "Chocolate letters, pepernoten spice cookies and speculaas appear in shops weeks ahead. Offices may host informal Sinterklaas gift exchanges with poems.",
  ],
  sinterklaasTopics: [
    { topic: "Arrival parades", detail: "City parades with Sinterklaas on horseback and Piet characters — very crowded with families." },
    { topic: "Pakjesavond", detail: "5 December evening — main gift moment for many children." },
    { topic: "Chocolate letters", detail: "Initial-shaped chocolate gifts — popular in November–December." },
    { topic: "Pepernoten", detail: "Small spiced cookies thrown during parades and eaten at home." },
    { topic: "vs Christmas", detail: "Many families separate Sinterklaas gifts from 25 December traditions." },
  ],
  sinterklaasTips: [
    "Arrival parades are crowded — arrive early if visiting with children.",
    "Pakjesavond (5 December) is the main family gift night for many households.",
    "Chocolate letters and pepernoten appear in shops from October.",
    "Ask colleagues politely how their family celebrates — customs vary.",
    "Office Sinterklaas exchanges often include short humorous poems with gifts.",
  ],
  christmasHeading: "Christmas in the Netherlands",
  christmasParagraphs: [
    "Dutch Christmas is often quieter and more home-focused than commercial displays in some countries. Kerst (Christmas) dinners on 25 December gather family; second Christmas day (26 December) extends visits.",
    "Christmas markets, light festivals and ice rinks run in cities from late November. School children have kerstvakantie (Christmas school break) overlapping the holidays.",
  ],
  christmasTopics: [
    { topic: "Markets", detail: "Rotterdam, Maastricht, Dordrecht and Amsterdam host popular markets — check dates yearly." },
    { topic: "Family dinners", detail: "Gourmetten (table grills) or shared meals — invitations may come from Dutch colleagues." },
    { topic: "Decorations", detail: "Neighbourhood lights and municipal light trails — less uniform than some countries." },
    { topic: "Shopping", detail: "Peak shopping before Sinterklaas and mid-December — 25–26 Dec quieter commercially." },
    { topic: "Ice skating", detail: "Temporary rinks at museums and squares — book slots in popular cities." },
  ],
  christmasTips: [
    "25 and 26 December are public holidays — supermarkets may close or shorten hours.",
    "Christmas markets run in many cities from late November — check opening nights.",
    "Kerst dinners are often home-based — invitations may come from colleagues or neighbours.",
    "Reserve restaurants early if you plan to dine out on 25 or 26 December.",
    "Ice rinks and light trails extend through December in larger cities.",
  ],
  newYearHeading: "New Year (Oud & Nieuw)",
  newYearParagraphs: [
    "New Year's Eve (oudjaarsavond) features fireworks — private and municipal — plus oliebollen (oil balls) sold from stalls. New Year's Day is a public holiday; polar plunge events happen at beaches and lakes.",
    "Firework rules vary by municipality — some designate zones or restrictions. Pets and wildlife are stressed — plan accordingly.",
  ],
  newYearTopics: [
    { topic: "Oliebollen", detail: "Deep-fried dough balls with powdered sugar — classic New Year treat." },
    { topic: "Fireworks", detail: "Midnight peaks nationwide — check local rules and curfews." },
    { topic: "Nieuwjaarsduik", detail: "Charity polar plunges on 1 January — Scheveningen is famous." },
    { topic: "Safety", detail: "Eye protection for fireworks; supervise children; avoid DIY mishaps." },
  ],
  newYearTips: [
    "Oliebollen stalls appear from late December — try a few flavours before 31 December.",
    "Fireworks are widespread but rules vary by municipality — check restriction zones.",
    "Nieuwjaarsduik polar plunges happen on 1 January at beaches and lakes.",
    "Keep pets indoors and plan for loud midnight peaks in urban neighbourhoods.",
    "New Year's Day is a public holiday — banks and many offices stay closed.",
  ],
  easterHeading: "Easter (Pasen)",
  easterParagraphs: [
    "Easter combines church traditions for some families with secular spring celebrations — brunches, egg hunts and garden-centre visits. Good Friday is not a universal paid public holiday — confirm with your employer.",
    "Easter Monday (Tweede Paasdag) is a public holiday and popular for day trips and family visits.",
  ],
  easterTopics: [
    { topic: "Family meals", detail: "Brunch or lunch gatherings — restaurants book up in cities." },
    { topic: "Chocolate eggs", detail: "Shops sell eggs from early spring — children's school activities common." },
    { topic: "Garden centres", detail: "Busy weekends — families buy plants for spring gardens." },
    { topic: "Events", detail: "Museums and parks host egg hunts and spring festivals." },
  ],
  easterTips: [
    "Good Friday is not a national paid holiday for all workers — check your employer.",
    "Easter Monday creates a popular long weekend — book brunch and trains early.",
    "Garden centres are busy — combine plant shopping with a family walk if possible.",
    "Children's egg hunts happen at schools, neighbourhoods and museums.",
    "Mark Easter dates when published — they shift every year with the church calendar.",
  ],
  liberationRemembranceHeading: "Remembrance Day & Liberation Day",
  liberationRemembranceParagraphs: [
    "On 4 May (Dodenherdenking), the Netherlands commemorates war victims with ceremonies and a national two-minute silence at 20:00. On 5 May (Bevrijdingsdag), liberation from German occupation in 1945 is celebrated with festivals and concerts.",
    "Liberation Day is a paid public holiday for many workers only once every five years — other years employers may still grant time off or host events. Check Government.nl and your contract.",
  ],
  liberationRemembranceTopics: [
    { topic: "4 May silence", detail: "Pause at 20:00 — trams and events stop in many places." },
    { topic: "Ceremonies", detail: "Dam Square Amsterdam and local monuments — respectful dress." },
    { topic: "5 May festivals", detail: "Bevrijdingsfestivals with music — many cities participate." },
    { topic: "Expat participation", detail: "Observe silence even if you do not attend ceremonies — neighbours notice respect." },
  ],
  liberationRemembranceTips: [
    "Pause conversations outdoors at 20:00 on 4 May — trams and events stop in many places.",
    "Remembrance ceremonies are solemn — avoid party atmosphere until after the evening.",
    "Liberation Day festivals with music occur in many cities on 5 May.",
    "Paid public holiday on 5 May happens every five years for many — verify employer policy.",
    "Wear respectful dress if attending Dam Square or local monument ceremonies.",
  ],
  ascensionPentecostHeading: "Ascension Day & Pentecost",
  ascensionPentecostParagraphs: [
    "Ascension Day (Hemelvaart) and Pentecost (Pinksteren) weekend create spring long breaks. Many Dutch families camp, visit relatives or take short European trips.",
    "Dates follow the Christian calendar — mark them when published each year for bridge-day planning.",
  ],
  ascensionPentecostTopics: [
    { topic: "Ascension", detail: "Thursday public holiday — Friday bridge day common." },
    { topic: "Pentecost", detail: "Sunday and Monday public holidays — second May long weekend." },
    { topic: "Activities", detail: "Outdoor cafés, cycling trips and family barbecues." },
    { topic: "Travel", detail: "NS and highways busy — book trains in advance." },
  ],
  ascensionPentecostTips: [
    "Bridge days (brugdag) before or after create five-day breaks for many workers.",
    "Campsites and NS peak pricing apply — book early for Ascension and Pentecost weekends.",
    "Outdoor events and family visits dominate these spring long weekends.",
    "Church calendar sets dates — mark them when published each year.",
    "Thursday Ascension plus Friday off is a common four-day pattern in offices.",
  ],
  carnivalHeading: "Carnival",
  carnivalParagraphs: [
    "Carnival (vastenavond) is strongest in North Brabant and Limburg with costumes, parades and brass bands. Cities like 's-Hertogenbosch (Oeteldonk), Maastricht and Breda transform for several days.",
    "The Randstad generally does not celebrate Carnival the same way — expats in Amsterdam may need a south trip to experience it fully.",
  ],
  carnivalTopics: [
    { topic: "Costumes", detail: "Playful dress — locals plan outfits weeks ahead." },
    { topic: "Parades", detail: "Floats and marching bands — city centres pedestrian-focused." },
    { topic: "Best places", detail: "Maastricht, 's-Hertogenbosch, Tilburg, Breda, Venlo." },
    { topic: "Timing", detail: "Usually February or early March — weekend before Ash Wednesday." },
  ],
  carnivalTips: [
    "Strongest in North Brabant and Limburg — not a nationwide costume day.",
    "Parades and brass bands fill town centres — hotels sell out locally.",
    "Dress codes are playful — check weather for long outdoor standing.",
    "Randstad cities may feel quiet compared with 's-Hertogenbosch or Maastricht.",
    "Plan a south weekend trip if you live in Amsterdam and want the full Carnival atmosphere.",
  ],
  schoolHolidaysHeading: "School Holidays",
  schoolHolidaysParagraphs: [
    "Dutch school holidays are set regionally (north, middle, south) to spread traffic. Summer vacation lasts about six weeks; autumn, Christmas and spring breaks are shorter.",
    "Expat families should follow their child's school calendar — international schools may differ from Dutch regional dates.",
  ],
  schoolHolidayRows: [
    { name: "Summer (zomervakantie)", duration: "6 weeks", travelImpact: "Peak pricing — campsites & NS", note: "Staggered by north, middle and south regions." },
    { name: "Autumn (herfstvakantie)", duration: "1 week", travelImpact: "Moderate family travel", note: "Often October — exact week varies by region." },
    { name: "Christmas (kerstvakantie)", duration: "~2 weeks", travelImpact: "Holiday travel peak", note: "Overlaps Christmas and New Year school break." },
    { name: "Spring (voorjaarsvakantie)", duration: "1 week", travelImpact: "Moderate — museums busier", note: "Often February or May depending on region." },
  ],
  schoolHolidayTips: [
    "Regions (north, middle, south) stagger summer dates to spread highway traffic.",
    "Check your child's school or gemeente PDF each September — not one national week.",
    "International schools may publish different dates from Dutch regional calendars.",
    "Attractions and camps raise prices during summer peaks — book childcare early.",
    "Autumn and spring breaks are shorter but still affect museum crowds and family trips.",
  ],
  regionalTraditionRows: [
    { tradition: "Tulip season", timing: "March–May", where: "Bollenstreek, Keukenhof area", expatTip: "Book Keukenhof tickets and train seats early on spring weekends." },
    { tradition: "Cheese markets", timing: "Summer season", where: "Alkmaar, Gouda", expatTip: "Check municipal schedules — displays are seasonal not weekly year-round." },
    { tradition: "Flower parade (corso)", timing: "Spring", where: "Bollenstreek route", expatTip: "Combine with a tulip-region day trip and cycle rental." },
    { tradition: "Elfstedentocht", timing: "Rare winter ice", where: "Friesland", expatTip: "Legendary tour only when ice allows — follow Dutch news in cold snaps." },
    { tradition: "Saint Martin (Sint Maarten)", timing: "11 November", where: "Many neighbourhoods nationwide", expatTip: "Join children's lantern walks if neighbours invite — bring small treats." },
    { tradition: "Local fairs (kermis)", timing: "Summer–autumn", where: "Many gemeenten", expatTip: "Check gemeente event pages — fairs move street parking and noise patterns." },
  ] satisfies RegionalTraditionRow[],
  regionalTraditions: [
    { title: "Tulip season", body: "March–May flower fields and Keukenhof area visits — book tickets early." },
    { title: "Cheese markets", body: "Alkmaar and Gouda host traditional cheese market displays in season." },
    { title: "Flower parade", body: "Bollenstreek corso floats with flowers — spring dates vary." },
    { title: "Elfstedentocht", body: "Legendary ice skating tour — only when winter ice allows in Friesland." },
    { title: "Saint Martin (Sint Maarten)", body: "11 November lantern walks for children in many neighbourhoods." },
    { title: "Local fairs (kermis)", body: "Town fair rides and food stalls — summer and autumn in many gemeenten." },
  ] satisfies TipCard[],
  holidayFoods: [
    { name: "Oliebollen", season: "New Year's Eve", note: "Deep-fried dough balls with powdered sugar." },
    { name: "Pepernoten", season: "Sinterklaas", note: "Small spiced cookies — also thrown at parades." },
    { name: "Chocolate letters", season: "Sinterklaas", note: "Gift initials in chocolate — supermarket shelves from November." },
    { name: "Banketstaaf", season: "Christmas", note: "Almond pastry log — popular kerst treat." },
    { name: "Tompouce", season: "King's Day (orange)", note: "Pastry with orange icing on King's Day variants." },
    { name: "Bitterballen", season: "Year-round parties", note: "Deep-fried snack balls — party staple." },
    { name: "Stamppot", season: "Autumn/winter", note: "Mashed potato with vegetables — hearty cold-season dinner." },
    { name: "Kerststol", season: "Christmas", note: "Fruit bread with almond paste — breakfast tradition." },
  ] satisfies FoodTradition[],
  holidayFoodTips: [
    "Try seasonal foods at markets first — fresher than supermarket-only sampling.",
    "Learn the Dutch name for a dish — helps when searching shop shelves.",
    "Gift food boxes spike before Sinterklaas and Christmas — budget accordingly.",
    "Orange tompouce variants appear around King's Day — easy conversation starter.",
    "Bitterballen dominate party seasons but appear year-round at casual gatherings.",
  ],
  expatScenarioCards: [
    { title: "At work", body: "Public holidays reduce office hours but Good Friday and Liberation Day policies vary by employer and sector.", tip: "Read your contract and internal holiday calendar each January." },
    { title: "Shops & services", body: "Supermarkets may open Sunday-style hours in cities; banks and post offices usually close on public holidays.", tip: "Check chain apps the evening before — tourist centres differ from suburbs." },
    { title: "Travel & crowds", body: "King's Day, summer school breaks and spring long weekends fill trains, highways and campsites.", tip: "Book NS and accommodation months ahead for April and July peaks." },
    { title: "With children", body: "Sinterklaas and school holiday calendars shape playdates, gifts and childcare needs from autumn onward.", tip: "Save the school region PDF and note pakjesavond on 5 December." },
  ] satisfies MistakeCard[],
  expatExpectationsChecklist: [
    "Book King's Day and summer holiday travel months ahead.",
    "Check supermarket hours the day before public holidays.",
    "Read employer calendar for Good Friday and Liberation Day policy.",
    "Expect crowds on King's Day — secure accommodation and return transport.",
    "School holidays raise campsite and attraction prices — plan childcare.",
    "Reserve restaurants for Christmas Eve, Christmas Day and New Year's Eve if dining out.",
    "Subscribe to gemeente event newsletters for free local activities.",
    "Learn one Dutch holiday name — helps shop signage and colleague chat.",
  ],
  experienceIdeas: [
    { title: "Visit a vrijmarkt", body: "Browse King's Day street markets — low-cost entry to Dutch party culture." },
    { title: "Christmas market evening", body: "Walk a market with colleagues — easy first winter tradition." },
    { title: "Sinterklaas arrival", body: "Watch a local intocht parade with neighbourhood families." },
    { title: "Neighbourhood Saint Martin", body: "Join lantern walks if invited — children's tradition in many streets." },
    { title: "Volunteer at a festival", body: "Bevrijdingsfestival or local fair — meet locals behind the scenes." },
    { title: "Regional day trip", body: "Carnival south or tulip season — combine travel with tradition." },
  ] satisfies TipCard[],
  experienceTraditionsChecklist: [
    "Browse a King's Day vrijmarkt — low-cost entry to Dutch street-party culture.",
    "Walk a Christmas market evening with colleagues before hosting at home.",
    "Watch a local Sinterklaas intocht parade with neighbourhood families.",
    "Join a Sint Maarten lantern walk if invited on 11 November.",
    "Volunteer at a Bevrijdingsfestival or buurt fair for community contact.",
    "Plan one regional day trip — Carnival south or tulip season in spring.",
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", kingsDay: "Massive — canals and crowds", christmas: "Markets and light festivals", carnival: "Limited — not southern style", markets: "Winter markets, many events", familyAtmosphere: "Tourist-heavy King's Day" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", kingsDay: "Large harbour parties", christmas: "Strong market culture", carnival: "Some events — less than south", markets: "Winter circus market", familyAtmosphere: "Urban, diverse crowds" },
    { city: "The Hague", href: "/netherlands/the-hague/", kingsDay: "Royal connection events", christmas: "Ice rink and markets", carnival: "Limited", markets: "Municipal light trails", familyAtmosphere: "Diplomatic and family mix" },
    { city: "Utrecht", href: "/netherlands/utrecht/", kingsDay: "Student energy, canal market", christmas: "Central market", carnival: "Limited", markets: "Museum quarter events", familyAtmosphere: "Young and local" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", kingsDay: "Regional parties", christmas: "Glow festival (Nov)", carnival: "Closer to Brabant culture", markets: "Tech-city events", familyAtmosphere: "Family neighbourhoods" },
    { city: "Maastricht", href: "/netherlands/maastricht/", kingsDay: "Moderate celebrations", christmas: "Magical Maastricht market", carnival: "Major southern Carnival", markets: "Strong Christmas tradition", familyAtmosphere: "Southern European feel" },
  ] satisfies CityHolidayCard[],
  commonQuestionCards: [
    { title: "Are shops open on holidays?", body: "Public holidays reduce hours — tourist centres may open Sunday-style; always check the evening before." },
    { title: "Do I have to work?", body: "Depends on contract and sector — public holidays are paid off for many but not all workers." },
    { title: "Is it a public holiday?", body: "Government.nl lists official holidays — Good Friday and Liberation Day vary by employer." },
    { title: "Should I celebrate?", body: "Optional — respectful observation and one local event per year builds belonging." },
    { title: "How do schools work?", body: "Regional calendars on gemeente sites — international schools publish separately." },
    { title: "What traditions matter most?", body: "King's Day, Sinterklaas and Christmas shape most family conversations — start there." },
  ] satisfies TipCard[],
  mistakeCards: [
    { title: "Assuming everything closes", body: "Some supermarkets and tourist shops open on holidays with shortened hours.", tip: "Check chain apps the night before." },
    { title: "King's Day without planning", body: "Amsterdam accommodation sells out — day trips need early train tickets.", tip: "Book or pick a smaller city." },
    { title: "Ignoring 4 May silence", body: "Outdoor noise during 20:00 silence reads as disrespect.", tip: "Pause conversations at 20:00." },
    { title: "Confusing Sinterklaas and Christmas", body: "Gift expectations differ by household across December.", tip: "Ask colleagues about family customs." },
    { title: "Missing school calendar", body: "Childcare and travel clash with regional summer weeks.", tip: "Save school PDF each September." },
  ],
  mistakeRecoveryRows: [
    { mistake: "Assuming everything closes", fix: "Check supermarket chain apps the night before.", note: "Tourist centres often open Sunday-style hours." },
    { mistake: "King's Day without planning", fix: "Book accommodation or pick Utrecht or Haarlem.", note: "Amsterdam sells out months ahead." },
    { mistake: "Ignoring 4 May silence", fix: "Pause outdoors at 20:00 on 4 May.", note: "Neighbours notice respectful behaviour." },
    { mistake: "Confusing Sinterklaas and Christmas", fix: "Ask colleagues about family gift customs.", note: "December expectations differ by household." },
    { mistake: "Missing school calendar", fix: "Save gemeente or school PDF each September.", note: "Summer weeks vary by north, middle, south." },
  ],
  faq: [
    { q: "What are Dutch public holidays?", a: "New Year's Day, Easter Sunday and Monday, King's Day, Ascension, Whit Sunday and Monday, Christmas Day and Boxing Day are national public holidays. Liberation Day paid status varies; Good Friday depends on employer. Confirm on Government.nl and your contract." },
    { q: "What is King's Day?", a: "Koningsdag on 27 April celebrates the King's birthday with orange clothing, vrijmarkt flea markets, music and canal parties nationwide — largest in Amsterdam." },
    { q: "What is Sinterklaas?", a: "A November–December tradition with arrival parades, pepernoten, chocolate letters and pakjesavond gifts on 5 December — separate from Christmas for many families." },
    { q: "Is Christmas celebrated?", a: "Yes — kerst dinners on 25 December and family visits on 26 December (Second Christmas Day). Markets and lights run from late November." },
    { q: "When are school holidays?", a: "Regional calendars stagger six-week summer breaks plus autumn, Christmas and spring weeks. Check your gemeente or school website each year." },
    { q: "What closes on holidays?", a: "Banks and many offices close on public holidays. Supermarkets may open with Sunday hours in cities — verify locally." },
    { q: "What food is traditional?", a: "Oliebollen at New Year, pepernoten and chocolate letters at Sinterklaas, banketstaaf and kerststol at Christmas, tompouce orange pastries on King's Day." },
    { q: "Which holiday should expats experience first?", a: "King's Day for a nationwide party, a local Christmas market for winter atmosphere, or Sinterklaas arrival if you have children — pick one that matches your comfort with crowds." },
  ],
  faqNextSteps: [
    "Read Dutch Social Norms for party, visit and gift etiquette.",
    "Use city guides to choose where to experience each holiday.",
    "Bookmark Government.nl for official public holiday names.",
  ],
  relatedGuidesReadingOrder: [
    "Dutch Holidays & Traditions (this page) → annual calendar",
    "Dutch Social Norms → etiquette at celebrations",
    "Community Basics → neighbourhood events",
    "Cities hub → where to go each season",
  ],
  relatedGuides: [
    { label: "Dutch Culture (overview)", href: DUTCH_CULTURE_PATH, description: "Broad culture cluster overview — planned hub.", status: "comingSoon" },
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Everyday etiquette, greetings and visiting customs.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Friends, neighbours and local integration.", status: "live" },
    { label: "Dutch traditions (Culture hub)", href: DUTCH_TRADITIONS_PATH, description: "Calendar touchpoints in the Culture cluster.", status: "comingSoon" },
    { label: "Dutch Culture & Etiquette", href: LIVING_CULTURE_ETIQUETTE_PATH, description: "Living pillar guide to daily cultural interpretation.", status: "live" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Compare cities for events and atmosphere.", status: "live" },
  ] satisfies LifeGuideLink[],
  exploreNextCards: [
    { label: "Dutch Social Norms", href: DUTCH_SOCIAL_NORMS_PATH, description: "Etiquette at parties and visits.", status: "live" },
    { label: "Community Basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Neighbourhood life and clubs.", status: "live" },
    { label: "Dutch Culture overview", href: DUTCH_CULTURE_PATH, description: "Planned culture hub.", status: "comingSoon" },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, description: "Pick a city for each holiday.", status: "live" },
    { label: "Dutch traditions", href: DUTCH_TRADITIONS_PATH, description: "Culture cluster traditions.", status: "comingSoon" },
  ] satisfies LifeGuideLink[],
  exploreNextTips: [
    "Need etiquette at celebrations → Dutch Social Norms.",
    "Need neighbours and invites → Community Basics.",
    "Need where to go → Cities hub.",
    "Need daily culture context → Dutch Culture & Etiquette (Living).",
  ],
  officialSources: [
    { label: "Government.nl — public holidays", href: "https://www.government.nl/topics/public-holidays", description: "Official overview of Dutch public holidays." },
    { label: "NetherlandsWorldwide", href: "https://www.netherlandsworldwide.nl/", description: "Government portal for internationals in the Netherlands." },
    { label: "Holland.com events", href: "https://www.holland.com/", description: "National tourist board event and travel inspiration." },
  ],
  schemaEvents: [
    { name: "King's Day (Koningsdag)", startDate: "2026-04-27", location: "Netherlands", description: "Nationwide celebration on 27 April with vrijmarkt markets and city events." },
    { name: "Sinterklaas arrival season", startDate: "2026-11-14", location: "Netherlands", description: "Arrival parades and Sinterklaas traditions from mid-November." },
    { name: "National Remembrance Day", startDate: "2026-05-04", location: "Netherlands", description: "Dodenherdenking commemorations and 20:00 silence." },
  ],
} as const;

export type DutchHolidaysTraditionsPage = typeof dutchHolidaysTraditionsPage;
