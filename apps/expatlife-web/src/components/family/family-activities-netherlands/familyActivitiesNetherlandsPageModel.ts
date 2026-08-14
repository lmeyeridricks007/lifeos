import { PARENTING_NETHERLANDS_PATH } from "@/src/components/family/parentingNetherlandsPageModel";
import { HEALTHCARE_FOR_CHILDREN_PATH } from "@/src/components/family/healthcareForChildrenNetherlandsPageModel";
import {
  HIDDEN_GEMS_NETHERLANDS_PATH,
  MUSEUMS_NETHERLANDS_PATH,
  WEEKEND_TRIPS_NETHERLANDS_PATH,
} from "@/src/components/living/weekend-trips-netherlands/weekendTripsNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const FAMILY_ACTIVITIES_NETHERLANDS_PATH =
  "/netherlands/family/family-activities-netherlands/" as const;
export const PREGNANCY_NETHERLANDS_PATH = "/netherlands/family/pregnancy-netherlands/" as const;

export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const AFTER_SCHOOL_CARE_PATH = "/netherlands/education/after-school-care-netherlands/" as const;
export const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const FAMILY_TOOLS_PATH = "/netherlands/family/tools/" as const;
export const FAMILY_HUB_PATH = PARENTING_NETHERLANDS_PATH;

export type FamilyActivitiesLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type ActivityRow = { activity: string; ages: string; tip: string };
export type SeasonRow = { season: string; ideas: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "family-activities-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const familyActivitiesNetherlandsPage = {
  slug: "family-activities-netherlands",
  path: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
  hubPath: FAMILY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(FAMILY_ACTIVITIES_NETHERLANDS_PATH) ?? "2026-08-20",
  seo: {
    title: "Family Activities in the Netherlands | Complete Guide for Expats",
    description:
      "Discover everyday family activities in the Netherlands: parks, museums, libraries, sports clubs, seasonal outings, rainy-day plans and English-friendly options for expat families.",
    keywords: [
      "family activities Netherlands",
      "things to do with kids Netherlands",
      "expat family activities Netherlands",
      "parks museums libraries Netherlands kids",
      "sports clubs children Netherlands",
      "rainy day activities Netherlands family",
      "English friendly activities Netherlands kids",
      "weekend family outings Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Activities",
    pageTitle: "Family Activities in the Netherlands",
    subtitle:
      "Everyday things to do with kids: parks, museums, libraries, sports clubs, seasonal outings, rainy-day plans and English-friendly discovery — practical orientation for expat families.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Weekend checklist", href: "#checklist" },
    chips: ["Parks & playgrounds", "Museums", "Libraries", "Sports clubs", "Rainy-day plans"],
    disclaimer:
      "General orientation only — not childcare, education or medical advice. Opening hours, membership fees and age rules change by city and club. Verify with municipalities, museums, libraries and sports associations before you book.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic golden-hour scene of a multicultural family cycling along a Dutch canal park path — parents with a bakfiets and child seats, kids on balance bikes near a playground, brick townhouses and trees in soft afternoon light.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#parks", label: "Parks" },
    { href: "#museums", label: "Museums" },
    { href: "#libraries", label: "Libraries" },
    { href: "#sports", label: "Sports clubs" },
    { href: "#seasonal", label: "Seasonal" },
    { href: "#rainy-day", label: "Rainy days" },
    { href: "#english-friendly", label: "English-friendly" },
    { href: "#weekends", label: "Weekends" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Family Activities in the Netherlands — four building blocks: find local parks and speeltuinen, join a library and museum rhythm, enrol in sport or scouting, and keep a rainy-day plan — right-side Family discovery rail lists gemeente park map, bibliotheek card, club enrolment month and indoor backup list — Dutch canal park backdrop, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most family weekends: outdoor play, cultural outings, club sport, and a rainy-day backup."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch family activities — parks and playgrounds, museums with kids programmes, libraries with story hours, sports clubs from age five, seasonal festivals and markets, rainy-day indoor options — Dutch skyline water band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise everyday leisure for expat families — deeper sections expand each theme."
    ),
    parks: visual(
      "parks",
      "Premium Dutch park map board — speeltuin playgrounds, cycling paths, nature reserves, free outdoor play norms, and a Pack list rail with regenpak, snacks and bike lights — lush canal park illustration, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Parks and speeltuinen are the default weekday and weekend hangouts — weather rarely cancels outdoor play."
    ),
    museums: visual(
      "museums",
      "Premium museum desk scene for families — Museumkaart folder, kids workshop schedule, stroller-friendly gallery notes, and a Visit tips rail with quiet hours and bag lockers — Dutch museum atrium light, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Many museums offer family trails and workshops — check age guidance and membership options before you go."
    ),
    libraries: visual(
      "libraries",
      "Premium bibliotheek scene — family library card, multilingual children’s section, story hour calendar, makerspace flyer, and a Rainy-day rail with indoor craft clubs — warm Dutch library interior, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Libraries are low-cost community hubs with English shelves, story hours and rainy-day programmes."
    ),
    sports: visual(
      "sports",
      "Premium sports club map — voetbal, swimming diplomas A/B/C, hockey, gymnastics, scouting — August–September enrolment season and typical season-fee bands on a Club file rail — Dutch clubhouse field scene, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Club sport is the fastest friendship route for many expat children — enrol in the first term when you can."
    ),
    seasonal: visual(
      "seasonal",
      "Premium seasonal calendar board for Dutch families — spring parks, summer beaches and camps, autumn forest walks, winter indoor museums and lights markets — with a Season tip rail — canal skyline band, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Match outings to the Dutch season — parks in spring, beaches in summer, forests in autumn, museums in winter."
    ),
    rainyDay: visual(
      "rainy-day",
      "Premium rainy-day checklist board — indoor playgrounds, swimming pools, libraries, museums, craft cafés — Pack list with regenpak still ready for short outdoor bursts — cozy Dutch rainy window scene, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Keep two indoor backups per weekend — libraries and pools cover most rainy Saturday mornings."
    ),
    englishFriendly: visual(
      "english-friendly",
      "Premium English-friendly discovery board — international playgroups, English museum tours, bilingual library shelves, expat sports WhatsApp groups — Discovery rail with gemeente English pages and library language filters — café table scene, ExpatLife brand footer with compass and Live. Love. Stay.",
      "English-friendly options exist in most cities — combine them with Dutch clubs for local friendships."
    ),
    weekends: visual(
      "weekends",
      "Premium weekend planner timeline — Saturday club match, Sunday family park ride, optional day trip to zoo or beach, rainy backup museum — Weekend file rail with OV chipkaart and picnic kit — Dutch station and bike map scene, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Weekends often mix one club commitment with one free outdoor or cultural outing."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for expat families — newly arrived toddlers, school-age club hunters, rainy winter weekends, and English-first discovery — each with a first move card — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Different family stages need different activity mixes — start with one park and one library card."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands family activities — waiting for perfect weather, skipping club enrolment season, ignoring library membership, overbooking weekends, treating this as a schools deep-dive — Fix tips on a right-side rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Common friction points and calmer fixes — orientation only, no venue rankings."
    ),
    checklist: visual(
      "checklist",
      "Premium family activities readiness checklist — gemeente park map saved, bibliotheek card active, Museumkaart or day tickets decided, club interest list ready, rainy-day backups listed, bike and regenpak checked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before your first full weekend of family discovery in the Netherlands."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Find everyday parks, museums and libraries near you",
        "Understand sports club rhythms and enrolment seasons",
        "Plan seasonal and rainy-day outings without overbooking",
        "Discover English-friendly options while joining local life",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Outdoor play is the default — even in light rain",
        "Libraries and museums are family staples",
        "Sports clubs build friendships fast",
        "Schools and pregnancy topics live on sibling guides",
      ],
    },
    parks: {
      title: "Park habits",
      items: [
        "Locate speeltuinen within cycling distance",
        "Pack regenpak and bike lights early",
        "Use free playgrounds before paid attractions",
        "Check gemeente pages for park maps",
      ],
    },
    museums: {
      title: "Museum habits",
      items: [
        "Look for family trails and workshops",
        "Consider Museumkaart if you visit often",
        "Book popular kids programmes ahead",
        "Pair with a nearby park for balance",
      ],
    },
    libraries: {
      title: "Library habits",
      items: [
        "Get a bibliotheek card soon after arrival",
        "Ask about English and multilingual shelves",
        "Join story hours and craft mornings",
        "Use libraries as rainy-day anchors",
      ],
    },
    sports: {
      title: "Sports club habits",
      items: [
        "Shortlist one sport your child enjoys",
        "Watch for August–September enrolment",
        "Budget season fees and kit",
        "Ask about trial training (proeftraining)",
      ],
    },
    seasonal: {
      title: "Seasonal habits",
      items: [
        "Spring: parks and outdoor play",
        "Summer: beaches, camps, longer rides",
        "Autumn: forests and early lights",
        "Winter: museums, pools and markets",
      ],
    },
    rainyDay: {
      title: "Rainy-day habits",
      items: [
        "Keep two indoor backups ready",
        "Libraries and pools are reliable",
        "Indoor playgrounds fill up on wet Saturdays",
        "Still pack regenpak for short outdoor bursts",
      ],
    },
    englishFriendly: {
      title: "English-friendly habits",
      items: [
        "Use English as a bridge, not the only option",
        "Join one bilingual playgroup if helpful",
        "Ask museums about English family tours",
        "Mix with Dutch clubs for local friends",
      ],
    },
    weekends: {
      title: "Weekend habits",
      items: [
        "Protect one club commitment slot",
        "Add one free outdoor or cultural outing",
        "Keep a rainy backup on the calendar",
        "Avoid stacking three paid attractions",
      ],
    },
    scenarios: {
      title: "Scenario takeaways",
      items: [
        "New arrivals start with park + library",
        "School-age kids often need club sport",
        "Winter weekends lean indoor",
        "English-first families can still join Dutch clubs",
      ],
    },
    mistakes: {
      title: "Mistake fixes",
      items: [
        "Do not wait for perfect weather",
        "Enrol clubs in the first term when possible",
        "Use the library before expensive venues",
        "Keep schools and pregnancy on their own guides",
      ],
    },
    checklist: {
      title: "Readiness habits",
      items: [
        "Save a local park map",
        "Activate library membership",
        "List one club interest",
        "Write two rainy-day backups",
      ],
    },
  },
  introParagraphs: [
    "Family life in the Netherlands is built around outdoor play, cycling distances, community sports clubs and low-cost cultural spaces like libraries and museums. This guide helps expat families discover everyday activities — not school choice, childcare waitlists or pregnancy pathways.",
    "Use it to build a simple discovery rhythm: parks nearby, a library card, one club interest, seasonal outings and a rainy-day backup. Sibling guides cover parenting culture, children’s healthcare and the planned pregnancy page.",
  ],
  introHighlights: [
    "Everyday leisure and community discovery for families",
    "Parks, museums, libraries, sports clubs and day trips",
    "English-friendly options without skipping Dutch community life",
    "Clear boundaries: not schools, childcare deep-dives or maternity care",
  ],
  orientationFlowSteps: [
    "Find parks and speeltuinen within cycling distance",
    "Get a bibliotheek card and scan museum family programmes",
    "Shortlist one sports club or scouting group",
    "Keep two rainy-day indoor backups ready",
  ],
  discoveryFileChecklist: [
    "Gemeente park / speeltuin map saved",
    "Bibliotheek membership active",
    "Museumkaart or day-ticket plan decided",
    "One club interest + enrolment month noted",
    "Two rainy-day indoor options listed",
    "Bike lights, regenpak and picnic kit packed",
  ],
  introScenarios: [
    {
      situation: "Just arrived with toddlers",
      approach: "Start with the nearest speeltuin and library story hour before booking paid attractions.",
      firstStep: "Ask your gemeente which parks and playgrounds are closest to your address.",
    },
    {
      situation: "School-age child wants friends fast",
      approach: "Club sport or scouting usually builds friendships faster than occasional tourist days out.",
      firstStep: "Ask the school or neighbours which clubs enrol in August–September.",
    },
    {
      situation: "Wet weekend with cabin fever",
      approach: "Libraries, pools and museums cover most rainy Saturdays without a long drive.",
      firstStep: "Pick one indoor backup within 20–30 minutes by bike or OV.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "How family activities usually work here",
    summary:
      "Dutch family weekends lean on parks and cycling, community sports clubs, libraries and museums — with outdoor play continuing in light rain. Build a local rhythm first; tourist attractions can wait.",
    bullets: [
      "Speeltuinen and parks are free everyday defaults",
      "Bibliotheken offer books, story hours and rainy-day programmes",
      "Sports clubs enrol mainly around the school-year start",
      "English-friendly options exist — mix them with local clubs",
    ],
    note: "For parenting culture see Parenting; for children’s healthcare see Healthcare for Children; pregnancy pathways belong on the Pregnancy sibling guide.",
  },
  snapshotSignals: [
    {
      label: "Outdoor default",
      value: "Parks & bikes",
      note: "Play continues in light rain — pack a regenpak.",
    },
    {
      label: "Low-cost hub",
      value: "Bibliotheek",
      note: "Cards, story hours and multilingual shelves.",
    },
    {
      label: "Friendship route",
      value: "Sports clubs",
      note: "Enrol early in the school-year cycle.",
    },
    {
      label: "Indoor backup",
      value: "Museum / pool",
      note: "Keep two rainy-day options ready.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Parks & playgrounds",
      body: "Speeltuinen, city parks and cycling paths are the everyday hangout — often free and close to home.",
    },
    {
      title: "Museums & culture",
      body: "Family trails, workshops and memberships make museums useful beyond tourist weekends.",
    },
    {
      title: "Libraries",
      body: "Bibliotheken double as community centres with story hours, makerspaces and English shelves.",
    },
    {
      title: "Sports & clubs",
      body: "Voetbal, swimming, hockey, gymnastics and scouting structure many children’s weeks.",
    },
    {
      title: "Seasonal outings",
      body: "Beaches, forests, markets and light festivals shift with the Dutch calendar.",
    },
    {
      title: "Rainy-day plans",
      body: "Pools, indoor playgrounds, libraries and museums keep weekends calm when it pours.",
    },
  ] satisfies TipCard[],
  parks: {
    heading: "Parks, playgrounds and outdoor play",
    lead: "Outdoor play is a Dutch family default. Most neighbourhoods have speeltuinen within walking or cycling distance, and light rain rarely cancels a park visit.",
    bullets: [
      "Search your gemeente site for speeltuin and park maps",
      "Invest early in regenpak, bike lights and mud-friendly shoes",
      "Combine a short park stop with a bakfiets grocery run",
      "Nature reserves and dunes make easy day trips without theme-park prices",
    ],
    cards: [
      {
        title: "Speeltuinen",
        body: "Local playgrounds are the weekday after-school default — often free, sometimes with a small association fee for gated yards.",
      },
      {
        title: "Cycling culture",
        body: "Family rides to parks and beaches are normal once kids have balance bikes or seats — start with short neighbourhood loops.",
      },
      {
        title: "Nature nearby",
        body: "Boswachterij forests, dunes and polder paths offer weekend variety without long drives from many cities.",
      },
    ] satisfies TipCard[],
    rows: [
      { activity: "Neighbourhood speeltuin", ages: "Toddlers–primary", tip: "Visit twice to learn peak times" },
      { activity: "City park picnic", ages: "All ages", tip: "Pack layers — weather shifts fast" },
      { activity: "Forest or dune walk", ages: "Walkers+", tip: "Check parking and path mud in autumn" },
      { activity: "Family bike loop", ages: "Balance bike+", tip: "Use quiet woonerf streets first" },
    ] satisfies ActivityRow[],
    crossLinks: [
      {
        label: "Parenting",
        href: PARENTING_NETHERLANDS_PATH,
        description: "Outdoor culture in Dutch family life — short link",
        status: "live" as const,
      },
      {
        label: "Moving with kids",
        href: MOVING_WITH_KIDS_PATH,
        description: "Settling routines after arrival",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  museums: {
    heading: "Museums and cultural outings",
    lead: "Dutch museums often welcome families with trails, workshops and quieter morning slots. Treat them as recurring local outings — not only tourist days.",
    bullets: [
      "Check age guidance and workshop booking windows",
      "Museumkaart can pay off if you visit often — verify current terms",
      "Many cities have science, children’s or city museums with English labels",
      "Pair a museum hour with a nearby park to avoid overstimulation",
    ],
    cards: [
      {
        title: "Family programmes",
        body: "Look for kinderactiviteiten, workshops and holiday programmes on museum sites.",
      },
      {
        title: "Membership maths",
        body: "If you visit monthly, a Museumkaart or city museum membership may beat day tickets — confirm live prices.",
      },
      {
        title: "Pacing",
        body: "Ninety focused minutes beats a full-day museum marathon with young children.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Museums in the Netherlands",
        href: MUSEUMS_NETHERLANDS_PATH,
        description: "Museumkaart, booking and etiquette depth — museums lane owner",
        status: "live" as const,
      },
      {
        label: "Pregnancy in the Netherlands",
        href: PREGNANCY_NETHERLANDS_PATH,
        description: "Cluster sibling — prenatal journey (not leisure)",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  libraries: {
    heading: "Libraries and community programmes",
    lead: "The bibliotheek is one of the best low-cost family hubs: books, story hours, craft mornings, language shelves and warm indoor space on rainy days.",
    bullets: [
      "Register for a library card after you have your address details ready",
      "Ask staff for English, bilingual and easy-Dutch children’s sections",
      "Join voorleesuurtje / story hours — often free or low-cost",
      "Some branches host makerspaces, coding clubs or homework cafés",
    ],
    cards: [
      {
        title: "Story hours",
        body: "Regular voorlees momenten help toddlers settle into Dutch rhythms even if home language differs.",
      },
      {
        title: "Multilingual shelves",
        body: "Larger city libraries often stock English and other languages — ask rather than assume.",
      },
      {
        title: "Community noticeboards",
        body: "Clubs, playgroups and seasonal events are often posted in library foyers and newsletters.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parenting",
        href: PARENTING_NETHERLANDS_PATH,
        description: "Language and family culture context",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  sports: {
    heading: "Sports clubs and after-school activities",
    lead: "Community sport structures many Dutch childhoods. A weekly club night plus weekend match or lesson is a common rhythm — and a fast path to friendships for newcomers.",
    bullets: [
      "Ask about proeftraining before you pay a full season",
      "August–September is peak enrolment for many clubs",
      "Budget for contribution (contributie), kit and occasional tournament fees",
      "Swimming diplomas A/B/C are a common Dutch milestone — not a medical pathway",
    ],
    cards: [
      {
        title: "Football & hockey",
        body: "Team sports dominate many neighbourhoods — waitlists vary; ask early.",
      },
      {
        title: "Swimming",
        body: "Lessons and diploma tracks are popular; pools also double as rainy-day outings.",
      },
      {
        title: "Scouting & gymnastics",
        body: "Non-ball options help kids who prefer adventure skills or apparatus sport.",
      },
    ] satisfies TipCard[],
    rows: [
      { activity: "Voetbal club", ages: "Often from ~5", tip: "Ask about intake days in late summer" },
      { activity: "Zwemles / diplomas", ages: "Varies by pool", tip: "Join a waiting list early in busy cities" },
      { activity: "Hockey / gymnastics", ages: "Primary+", tip: "Check kit costs before committing" },
      { activity: "Scouting", ages: "Primary+", tip: "Often strong on outdoor weekends" },
    ] satisfies ActivityRow[],
    crossLinks: [
      {
        label: "After-school care",
        href: AFTER_SCHOOL_CARE_PATH,
        description: "BSO orientation — short link only",
        status: "live" as const,
      },
      {
        label: "Daycare",
        href: DAYCARE_NETHERLANDS_PATH,
        description: "Childcare orientation — short link only",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  seasonal: {
    heading: "Seasonal outings and the Dutch calendar",
    lead: "Match activities to the season: parks and bikes in spring, beaches and camps in summer, forests in autumn, museums and lights in winter.",
    bullets: [
      "Summer: beaches, longer bike rides, holiday camps (vakantiekampen)",
      "Autumn: forest walks, early sunset planning, indoor backups",
      "Winter: museums, pools, seasonal markets — dress in layers",
      "Spring: parks bloom and outdoor play ramps up again",
    ],
    rows: [
      { season: "Spring", ideas: "Parks, playgrounds, short bike day trips", tip: "Layers beat one heavy coat" },
      { season: "Summer", ideas: "Beaches, dunes, camps, longer rides", tip: "Book popular camps early" },
      { season: "Autumn", ideas: "Forests, museums, indoor sports", tip: "Mud-friendly shoes help" },
      { season: "Winter", ideas: "Libraries, pools, lights markets", tip: "Keep outdoor bursts short but regular" },
    ] satisfies SeasonRow[],
    crossLinks: [
      {
        label: "Moving with kids",
        href: MOVING_WITH_KIDS_PATH,
        description: "Settling through the first seasons",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  rainyDay: {
    heading: "Rainy-day options that actually work",
    lead: "Dutch families do not wait for perfect weather. Still, every household needs indoor backups for heavy rain weekends.",
    bullets: [
      "Bibliotheek story hours and craft mornings",
      "Swimming pools and indoor playgrounds",
      "Museums with family trails",
      "Home craft kits plus a short regenpak park burst if energy allows",
    ],
    cards: [
      {
        title: "Book two backups",
        body: "Write two indoor options within 30 minutes — wet Saturdays fill indoor playgrounds fast.",
      },
      {
        title: "Still pack regenpak",
        body: "A twenty-minute outdoor reset between indoor stops is normal Dutch parenting culture.",
      },
      {
        title: "Avoid overbooking",
        body: "One strong indoor plan beats three paid attractions that exhaust everyone.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Healthcare for Children",
        href: HEALTHCARE_FOR_CHILDREN_PATH,
        description: "When illness cancels plans — care orientation",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  englishFriendly: {
    heading: "English-friendly discovery without isolation",
    lead: "Most cities offer English-language playgroups, museum tours and library shelves. Use them as a bridge — then mix in Dutch clubs and parks for local friendships.",
    bullets: [
      "Ask libraries for English children’s shelves and bilingual story hours",
      "Check museum sites for English family tours or audio",
      "Expat WhatsApp and Facebook groups share club tips — verify details yourself",
      "Dutch-language club nights still work for many English-first kids",
    ],
    cards: [
      {
        title: "Bridge, don’t bubble",
        body: "One English playgroup plus one Dutch club often beats an all-English leisure calendar.",
      },
      {
        title: "Staff can help",
        body: "Librarians and club volunteers often switch to English for newcomers — ask politely.",
      },
      {
        title: "City variation",
        body: "Randstad cities have denser English options; smaller towns lean more Dutch-first — plan accordingly.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parenting",
        href: PARENTING_NETHERLANDS_PATH,
        description: "Multilingual family life — short link",
        status: "live" as const,
      },
      {
        label: "Dutch schools",
        href: DUTCH_SCHOOLS_PATH,
        description: "School path — short link only",
        status: "live" as const,
      },
      {
        label: "International schools",
        href: INTERNATIONAL_SCHOOLS_PATH,
        description: "International school path — short link only",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  weekends: {
    heading: "Weekends and simple day trips",
    lead: "A calm Dutch family weekend often mixes one club commitment with one free outdoor or cultural outing — plus a rainy backup.",
    bullets: [
      "Saturday morning club or swimming is common",
      "Sunday parks, grandparents visits or short day trips",
      "Zoos, beaches and nearby cities work as occasional treats",
      "OV + bikes cover many day trips without a car",
    ],
    cards: [
      {
        title: "One paid, one free",
        body: "Balance ticketed attractions with free parks so weekends stay sustainable.",
      },
      {
        title: "Travel light",
        body: "Picnic kit, regenpak and a charged OV card solve most day-trip logistics.",
      },
      {
        title: "Protect downtime",
        body: "Kids still need unstructured play — leave white space on the calendar.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Child benefits",
        href: CHILD_BENEFITS_PATH,
        description: "Household support orientation — short link",
        status: "live" as const,
      },
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        description: "If you are expanding the family — light link",
        status: "live" as const,
      },
    ] satisfies FamilyActivitiesLink[],
  },
  scenarios: {
    heading: "Scenarios for expat families",
    lead: "Different stages need different activity mixes. Start small, then add clubs and day trips once your local rhythm works.",
    rows: [
      {
        situation: "Newly arrived with a toddler",
        approach: "Prioritise the nearest speeltuin, library story hour and one indoor backup.",
        firstStep: "Get a bibliotheek card and walk to the closest playground this week.",
      },
      {
        situation: "Primary-school child needs friends",
        approach: "Club sport or scouting usually beats occasional tourist outings for friendships.",
        firstStep: "Ask school parents which clubs still have places.",
      },
      {
        situation: "English-first household in a smaller town",
        approach: "Use Dutch clubs for local ties and reserve English playgroups for connection with other internationals.",
        firstStep: "Visit one Dutch club trial training and one English playgroup.",
      },
      {
        situation: "Winter cabin fever",
        approach: "Rotate library, pool and museum mornings; keep short outdoor bursts with regenpak.",
        firstStep: "Write two indoor backups within 30 minutes of home.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common mistakes newcomers make",
    lead: "Most friction comes from waiting for perfect weather, missing club enrolment season or treating leisure like a schools deep-dive.",
    cards: [
      {
        title: "Waiting for sunny weekends",
        body: "Outdoor play continues in drizzle — waiting for perfect weather shrinks your options.",
        advice: "Pack regenpak and keep one short outdoor habit every week.",
      },
      {
        title: "Missing club enrolment",
        body: "Many clubs fill around the school-year start; mid-year places can be scarce.",
        advice: "Shortlist clubs in summer and ask about intake days early.",
      },
      {
        title: "Skipping the library",
        body: "Families jump to paid attractions and miss the best low-cost community hub.",
        advice: "Activate a bibliotheek card in your first month.",
      },
      {
        title: "Overbooking weekends",
        body: "Three ticketed outings in two days exhausts kids and budgets.",
        advice: "Use a one paid + one free rule most weekends.",
      },
      {
        title: "Confusing this page with schools or pregnancy",
        body: "School choice and prenatal pathways need their own guides.",
        advice: "Use Parenting, schools guides and the Pregnancy sibling for those topics.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Family activities readiness checklist",
    lead: "Use this before your first full discovery weekend.",
    items: [
      "Nearest speeltuin / park identified",
      "Bibliotheek membership active",
      "Museum day-ticket or membership plan decided",
      "One sports or scouting interest listed",
      "Enrolment month noted (often Aug–Sep)",
      "Two rainy-day indoor backups written down",
      "Bike lights, regenpak and picnic kit ready",
      "One English-friendly and one Dutch-local option mixed",
    ],
  },
  howTo: {
    heading: "How to build a family activity rhythm in 30 days",
    lead: "A simple month-one plan beats an ambitious tourist checklist.",
    steps: [
      {
        name: "Week 1 — Local outdoor map",
        text: "Walk or cycle to the nearest parks and speeltuinen. Save them on your phone and note peak times.",
      },
      {
        name: "Week 2 — Library + indoor backups",
        text: "Get a bibliotheek card, ask about story hours, and list two rainy-day options (pool, museum, indoor playground).",
      },
      {
        name: "Week 3 — Club shortlist",
        text: "Ask neighbours or school parents about sports and scouting. Book one proeftraining if available.",
      },
      {
        name: "Week 4 — Weekend rhythm",
        text: "Run one club or cultural outing plus one free park day. Keep white space and a rainy backup.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to discover family activities in the Netherlands",
    description:
      "A four-week orientation for expat families to find parks, libraries, sports clubs and rainy-day backups.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Where should we start if we just arrived?",
      a: "Start with the nearest speeltuin and a bibliotheek card. Add one club interest and two rainy-day backups before booking tourist attractions.",
    },
    {
      q: "Do Dutch families really go outside in the rain?",
      a: "Often yes in light rain — regenpak is normal. For heavy rain, libraries, pools and museums are the usual backups.",
    },
    {
      q: "How do sports clubs work for expat kids?",
      a: "Community clubs typically run on season contributions with weekly training. Ask about proeftraining and August–September intake. This page does not rank clubs.",
    },
    {
      q: "Are there English-friendly activities?",
      a: "Yes — especially in larger cities: English shelves, playgroups and some museum tours. Mix them with Dutch parks and clubs so children still meet local peers.",
    },
    {
      q: "Is this a schools or childcare guide?",
      a: "No. Schools, daycare and BSO have their own pages. This guide owns leisure, community and weekend discovery.",
    },
    {
      q: "Where do pregnancy and maternity topics live?",
      a: "Pregnancy pathways belong on the Pregnancy in the Netherlands sibling guide. Clinical maternity system orientation lives on Maternity care.",
    },
    {
      q: "What about parenting culture?",
      a: "Parenting covers Dutch parenting culture and family norms. Use a short link from this page — do not treat this guide as a culture encyclopedia.",
    },
    {
      q: "Do we need a car for family outings?",
      a: "Often no in cities — bikes and OV cover parks, libraries, pools and many day trips. Some beaches and forests are easier with a car; plan case by case.",
    },
  ],
  relatedGuides: [
    {
      label: "Pregnancy in the Netherlands",
      href: PREGNANCY_NETHERLANDS_PATH,
      description: "Cluster sibling — prenatal journey",
      status: "live" as const,
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      description: "Dutch parenting culture — short link",
      status: "live" as const,
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description: "Children’s healthcare orientation",
      status: "live" as const,
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      description: "Dutch maternity care system — light link",
      status: "live" as const,
    },
    {
      label: "Moving with kids",
      href: MOVING_WITH_KIDS_PATH,
      description: "Relocation routines for families",
      status: "live" as const,
    },
    {
      label: "Daycare",
      href: DAYCARE_NETHERLANDS_PATH,
      description: "Childcare orientation — short link",
      status: "live" as const,
    },
    {
      label: "After-school care",
      href: AFTER_SCHOOL_CARE_PATH,
      description: "BSO orientation — short link",
      status: "live" as const,
    },
    {
      label: "Child benefits",
      href: CHILD_BENEFITS_PATH,
      description: "Household support — short link",
      status: "live" as const,
    },
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      description: "Destination ideas for family weekend getaways",
      status: "live" as const,
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      description: "Museumkaart and museum-going depth for family culture days",
      status: "live" as const,
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      description: "Quieter neighbourhoods and small-town day patterns",
      status: "live" as const,
    },
  ] satisfies FamilyActivitiesLink[],
  hubCards: [
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      description: "Family hub entry — culture and everyday family life",
      status: "live" as const,
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      description: "This guide — leisure and discovery",
      status: "live" as const,
    },
    {
      label: "Pregnancy in the Netherlands",
      href: PREGNANCY_NETHERLANDS_PATH,
      description: "Cluster sibling — prenatal journey",
      status: "live" as const,
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description: "GP, JGZ and children’s care",
      status: "live" as const,
    },
    {
      label: "Family tools",
      href: FAMILY_TOOLS_PATH,
      description: "Childcare estimator and planning tools",
      status: "live" as const,
    },
    {
      label: "Moving with kids",
      href: MOVING_WITH_KIDS_PATH,
      description: "Settling after relocation",
      status: "live" as const,
    },
  ] satisfies FamilyActivitiesLink[],
  exploreNext: [
    {
      label: "Pregnancy in the Netherlands",
      href: PREGNANCY_NETHERLANDS_PATH,
      description: "Continue the family cluster",
      status: "live" as const,
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      description: "Understand Dutch family culture",
      status: "live" as const,
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description: "Set up children’s care pathways",
      status: "live" as const,
    },
    {
      label: "Moving with kids",
      href: MOVING_WITH_KIDS_PATH,
      description: "Plan the relocation checklist",
      status: "live" as const,
    },
    {
      label: "Daycare",
      href: DAYCARE_NETHERLANDS_PATH,
      description: "Orient on childcare options",
      status: "live" as const,
    },
    {
      label: "Family tools",
      href: FAMILY_TOOLS_PATH,
      description: "Open planning tools",
      status: "live" as const,
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      description: "Deepen Museumkaart and museum habits",
      status: "live" as const,
    },
  ] satisfies FamilyActivitiesLink[],
  officialSources: [
    {
      label: "Government.nl — Family",
      href: "https://www.government.nl/",
      description: "National orientation for living in the Netherlands.",
    },
    {
      label: "Bibliotheek.nl",
      href: "https://www.bibliotheek.nl/",
      description: "Library network entry point for memberships and programmes.",
    },
    {
      label: "Museumvereniging / Museumkaart",
      href: "https://www.museumkaart.nl/",
      description: "Museum membership orientation — verify current terms.",
    },
    {
      label: "NOC*NSF",
      href: "https://nocnsf.nl/",
      description: "Sports association orientation for club sport in the Netherlands.",
    },
    {
      label: "ANWB / nature & outings",
      href: "https://www.anwb.nl/",
      description: "Practical outing and travel tips — verify locally.",
    },
  ],
  disclosure:
    "ExpatLife provides general orientation for newcomers. Opening hours, fees, membership rules and club availability change. Verify with municipalities, libraries, museums and sports clubs. This is not childcare, education, legal or medical advice.",
} as const;
