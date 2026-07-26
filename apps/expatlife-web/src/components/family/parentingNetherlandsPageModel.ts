export const PARENTING_NETHERLANDS_PATH = "/netherlands/family/parenting-netherlands/" as const;
export const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const AFTER_SCHOOL_CARE_PATH = "/netherlands/education/after-school-care-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const MOVING_WITH_CHILDREN_PATH = "/netherlands/family/moving-with-children-netherlands/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const FAMILY_LIFE_PATH = "/netherlands/family/family-life-netherlands/" as const;
export const HOUSING_COSTS_PATH = "/netherlands/housing/housing-costs-netherlands/" as const;
export const BEST_CITIES_FOR_FAMILIES_PATH = "/netherlands/cities/best-cities-for-families/" as const;
export const FAMILY_TOOLS_PATH = "/netherlands/family/tools/" as const;

export type ParentingLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ParentingCard = {
  title: string;
  body: string;
};

export type ParentingPrinciple = {
  title: string;
  body: string;
  nuance: string;
};

export type ParentingCityCard = {
  city: string;
  href: string;
  schools: string;
  parks: string;
  sports: string;
  familyFriendliness: string;
  internationalCommunity: string;
};

export type MistakeCard = {
  title: string;
  body: string;
  advice: string;
};

export type ParentingScenario = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/parenting-netherlands-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const parentingNetherlandsPage = {
  slug: "parenting-netherlands",
  path: PARENTING_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2027-01-10",
  seo: {
    title: "Parenting in the Netherlands | Complete Guide for Expat Families",
    description:
      "Learn what it's like to raise children in the Netherlands, including Dutch parenting culture, childcare, schools, healthcare, family life and practical advice for expat families.",
    keywords: [
      "parenting netherlands",
      "dutch parenting",
      "raising children netherlands",
      "family life netherlands",
      "expat parenting netherlands",
      "children netherlands",
      "dutch family life",
      "parenting culture netherlands",
      "moving with children",
      "raising kids netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Parenting",
    pageTitle: "Parenting in the Netherlands",
    subtitle:
      "Everything parents need to know about raising children in the Netherlands, from childcare and schools to healthcare, outdoor life and Dutch parenting culture.",
    primaryCta: { label: "Explore Parenting in the Netherlands", href: "#quick-answer" },
    secondaryCta: { label: "Discover Family Resources", href: "#family-hub" },
    chips: ["Dutch parenting culture", "Childcare & schools", "Healthcare & JGZ", "Outdoor family life"],
    image: {
      src: "/images/heroes/parenting-netherlands-hero-premium-v2.png",
      alt: "Photorealistic golden-hour photo of a multicultural family in a Dutch park — parents on a bench watching their children cycle past a playground, omafiets bicycles with child seats nearby and brick townhouses in the background.",
    },
  },
  visuals: {
    quickAnswer: visual(
      "quick-answer",
      "Premium quick-answer board with four expat planning pillars — childcare waiting lists 6–18 months Randstad, school choice Dutch vs international, GP plus JGZ registration, and community sport for friendships.",
      "Register BSN, join waiting lists early, choose your school path, then build community through sport."
    ),
    snapshot: visual(
      "snapshot-overview",
      "Premium six-pillar snapshot — public services, outdoor parks and cycling, Dutch and international education, GP plus JGZ healthcare, community sport clubs, and work-life balance.",
      "These six pillars shape most expat parenting decisions — use the sections below for detail."
    ),
    parentingPhilosophy: visual(
      "dutch-parenting-philosophy",
      "Premium six-principle board — independence from age 8–12 cycling, school rhythm 08:30–15:00, outdoor play rain or shine, open communication, responsibility, and balance — with nuance notes for expat parents.",
      "These are cultural tendencies, not rules — observe locally and blend what works for your family."
    ),
    familyLife: visual(
      "everyday-family-life",
      "Premium weekly timeline — school 08:30–15:00, Wednesday sport 15:30–17:00, Saturday club matches, Sunday family time — with bakfiets runs and library programmes.",
      "Plan around the Wednesday afternoon gap and weekend sport when scheduling work and BSO."
    ),
    childcare: visual(
      "childcare-options",
      "Premium LRK childcare ecosystem — kinderdagverblijf 0–4, gastouder home care, peuterspeelzaal 2–4, BSO 4–12 — with 6–12 month waiting list warning and toeslagen pointer.",
      "Register multiple LRK providers early — Randstad infant places often need 6–12 months lead time."
    ),
    education: visual(
      "education-overview",
      "Premium school decision desk — Dutch basisschool free from age 4 vs international €10k–25k/year, with language, homework and parent app comparison.",
      "Visit schools and align housing before signing — commute and language follow this choice."
    ),
    healthcare: visual(
      "healthcare-for-children",
      "Premium care pathway map — huisarts for illness, consultatiebureau JGZ for development checks and RIVM vaccinations, tandarts separate, 112 for emergencies.",
      "Register GP after BSN — JGZ follows gemeente registration for preventive checks."
    ),
    sportsActivities: visual(
      "sports-and-activities",
      "Premium club map — voetbal from age 5, zwemmen diplomas A/B/C, hockey, scouting, gymnastics — with August–September enrolment season and €150–400 per season typical.",
      "Enrol in the first term — club sport is the fastest friendship route for expat children."
    ),
    outdoorLife: visual(
      "play-outdoor-life",
      "Premium outdoor guide — speeltuinen playgrounds, cycling paths, nature walks, regenpak rain gear, and buitenles outdoor learning in schools.",
      "Invest in regenpak early — outdoor play continues rain or shine in Dutch family culture."
    ),
    multilingual: visual(
      "multilingual-children",
      "Premium bilingual record — maintain home language through books and family talk while Dutch builds via school and sport; taalhuis and bibliotheek resources noted.",
      "Both languages matter — a silent period in ages 3–7 is normal before fluency improves."
    ),
    movingWithChildren: visual(
      "moving-with-children",
      "Premium relocation timeline — 3 months before join waiting lists, week 1 gemeente BSN, week 2 GP and JGZ, month 1 sport club, month 3 friendships forming.",
      "Parallel-track childcare, schools and healthcare from before arrival where possible."
    ),
    workLifeBalance: visual(
      "work-life-balance",
      "Premium calendar — school 08:30–15:00, Wednesday afternoons free, BSO 15:00–18:00, part-time 32-hour week example, 6-week summer vakantie block.",
      "Discuss flexible hours early — school hours and Wednesday afternoons shape daily logistics."
    ),
    parentingSupport: visual(
      "parenting-support",
      "Premium support map — gemeente family services, consultatiebureau JGZ, bibliotheek programmes, buurtcentrum playgroups, school oudercommissie, expat networks.",
      "Book JGZ and library visits in your first month — parent groups reduce isolation."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium six-city comparison — Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen — with schools, parks, sport, family friendliness and international community notes.",
      "Match city to job, school budget and childcare availability before committing to housing."
    ),
    familyBudget: visual(
      "family-budget",
      "Premium cost breakdown — childcare €1,200–2,400/month Randstad, international school fees, sport €150–400/season, free basisschool, Kinderbijslag SVB pointer.",
      "Model childcare and housing together — use official SVB and Belastingdienst calculators for benefits."
    ),
    expatChallenges: visual(
      "expat-challenges",
      "Premium challenge board with fixes — language gap, friendships via sport, school choice, childcare queues, healthcare pathways, work-school balance.",
      "These hurdles are predictable — address them in your first months with local resources."
    ),
    checklist: visual(
      "parenting-checklist",
      "Premium ten-step checklist — gemeente BSN, GP, JGZ, childcare lists, school visits, sport club, library, Kinderbijslag SVB, meet families.",
      "Work through in order during your first months after arrival."
    ),
    mistakes: visual(
      "common-mistakes",
      "Premium mistake board — late daycare registration, single-provider waiting lists, skipping activities, home-country comparison, ignoring Dutch, going alone.",
      "Register broadly, join sport early, and use gemeente and JGZ as orientation partners."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board — family-friendliness, Dutch parenting differences, friendships, safety, childcare types, costs, and learning Dutch with readable Q&A pairs.",
      "Orientation only — confirm details with your municipality, school and healthcare providers."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking parenting to daycare, schools, child benefits, healthcare and relocation guides.",
      "Parenting connects across family, education and relocation content on ExpatLife."
    ),
    familyHub: visual(
      "family-hub",
      "Premium family hub ecosystem diagram — parenting, daycare, schools, healthcare, child benefits and moving with children.",
      "This page is the parenting cornerstone — explore the full family cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from parenting to daycare, Dutch schools, international schools and child benefits.",
      "Continue with childcare, schools and financial support guides."
    ),
  },
  sectionNav: [
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#parenting-philosophy", label: "Dutch parenting" },
    { href: "#family-life", label: "Family life" },
    { href: "#childcare", label: "Childcare" },
    { href: "#education", label: "Education" },
    { href: "#healthcare", label: "Healthcare" },
    { href: "#sports", label: "Sports" },
    { href: "#outdoor-life", label: "Outdoor life" },
    { href: "#multilingual", label: "Multilingual" },
    { href: "#moving", label: "Moving" },
    { href: "#work-life", label: "Work-life" },
    { href: "#support", label: "Support" },
    { href: "#cities", label: "Cities" },
    { href: "#budget", label: "Budget" },
    { href: "#challenges", label: "Challenges" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "Quick answer: raising children in the Netherlands",
    paragraphs: [
      "The Netherlands is often recognised for being family-friendly, with strong public services, quality education, safe neighbourhoods and an emphasis on children's independence. Every family's experience is different — city, income, language and school choice all shape daily life — but many parents appreciate the cycling culture, outdoor play, accessible healthcare, community sports and relatively good work-life balance.",
      "Dutch parenting culture tends to emphasise practicality, routine and letting children develop self-reliance within clear boundaries. That can feel different from more protective or academically intense approaches in other countries. Neither approach is inherently better — understanding local norms helps you navigate schools, neighbours and community expectations without judging your own style.",
      "For expat families, the practical pillars are usually childcare (often with waiting lists), school choice (Dutch vs international), youth healthcare registration (JGZ), and building a social network through sport, school and neighbourhood activities. This guide orients you across those areas — use official sources and local providers for decisions that affect your children directly.",
    ],
    keyPoints: [
      { title: "Family-friendly infrastructure", body: "Parks, playgrounds, cycling paths and youth sport clubs are widely available — outdoor life is part of daily childhood for many families." },
      { title: "Strong public services", body: "Education, preventive youth healthcare (JGZ) and municipality family services provide a structured safety net — registration unlocks access." },
      { title: "Cultural differences", body: "Independence, direct communication and outdoor play are common themes — observe locally rather than assuming universal Dutch parenting." },
      { title: "Plan early", body: "Childcare waiting lists, school enrolment and healthcare registration reward advance planning — especially when relocating with young children." },
    ] satisfies ParentingCard[],
    highlights: [
      "Cycling culture — children often cycle to school from age 8–12 depending on route and family comfort",
      "Outdoor play — playgrounds, nature areas and sport clubs are central to social life",
      "Work-life balance — part-time work and parental leave are common; school hours shape schedules",
      "Accessible healthcare — GP plus JGZ preventive checks from birth through adolescence",
      "Community sports — football, swimming, hockey and scouting are major friendship routes",
    ],
    scenarios: [
      { profile: "Young family — Amsterdam", scenario: "Two children ages 1 and 4; both parents working; arriving from Singapore", whatToCheck: "Join daycare waiting lists before arrival; compare Dutch basisschool vs international; register GP and JGZ within first month." },
      { profile: "School-age — The Hague", scenario: "Children ages 7 and 10; diplomatic posting; mid-year arrival", whatToCheck: "International vs Dutch school mid-year policy; BSO for Wednesday afternoons; enrol in hockey or football club for friendships." },
      { profile: "Single parent — Utrecht", scenario: "One child age 3; part-time work; limited Dutch", whatToCheck: "Gastouder or peuterspeelzaal for flexible hours; taalhuis or library programmes; municipality newcomer orientation." },
      { profile: "Teen relocation — Eindhoven", scenario: "Child age 14; tech-sector HSM; English at home", whatToCheck: "Secondary track placement (VMBO/HAVO/VWO); international school waitlists; maintain home language while building Dutch social network." },
    ] satisfies ParentingScenario[],
  },
  introPlanningSteps: [
    "Register at the gemeente and obtain BSN for every child — this unlocks healthcare, benefits and school enrolment.",
    "Join childcare waiting lists in your target neighbourhood as early as possible — especially for infants in Randstad cities.",
    "Decide Dutch vs international school path before signing a housing contract — commute and language follow school choice.",
  ],
  snapshotCards: [
    { label: "Family-friendly", value: "Strong public services", note: "Education, healthcare and municipality support for families with children." },
    { label: "Outdoor lifestyle", value: "Parks & cycling", note: "Playgrounds, nature and bike infrastructure support active childhoods." },
    { label: "Strong education", value: "Dutch & international", note: "Free Dutch basisschool plus international and bilingual options in major cities." },
    { label: "Healthcare support", value: "GP + JGZ", note: "Preventive youth healthcare from birth through age 18 via consultatiebureau." },
    { label: "Sports clubs", value: "Community sport", note: "Football, swimming, hockey and more — major social routes for children." },
    { label: "Work-life balance", value: "Flexible norms", note: "Part-time work and parental leave are widely accepted in Dutch workplaces." },
  ],
  parentingPrinciples: [
    {
      title: "Independence",
      body: "Many Dutch parents encourage children to do things themselves — cycling to school, packing bags, resolving minor playground disputes — earlier than in some other cultures.",
      nuance: "This reflects trust in safe infrastructure and community norms, not neglect. Families vary widely; expat parents often adapt gradually.",
    },
    {
      title: "Routine",
      body: "Predictable schedules — school hours, Wednesday sport afternoons, fixed mealtimes — help children and working parents coordinate daily life.",
      nuance: "Routine supports work-life balance but can feel rigid if you are used to more flexible family rhythms.",
    },
    {
      title: "Outdoor play",
      body: "Rain or shine, children spend significant time outside — playgrounds, parks, sport clubs and cycling are normal daily activities.",
      nuance: "Weather-appropriate clothing (regenpak) is part of the culture — staying indoors is less default than in some countries.",
    },
    {
      title: "Open communication",
      body: "Direct, calm conversation with children about feelings, rules and consequences is common in schools and many households.",
      nuance: "Directness can feel blunt to newcomers — it often aims at clarity rather than criticism.",
    },
    {
      title: "Responsibility",
      body: "Children may take on age-appropriate tasks — helping at home, managing belongings, participating in club obligations.",
      nuance: "Expectations rise gradually; schools and sport clubs reinforce shared responsibility.",
    },
    {
      title: "Balance",
      body: "Academic pressure exists but is often balanced with sport, play and downtime — especially in early primary years.",
      nuance: "International schools and selective secondary tracks can feel more intensive — compare school cultures before enrolling.",
    },
  ] satisfies ParentingPrinciple[],
  parentingPhilosophy: {
    heading: "Understanding Dutch Parenting",
    paragraphs: [
      "Dutch parenting is often described as practical, egalitarian and focused on raising capable, independent children within a safe community context. Research and popular commentary highlight themes like 'free-range' outdoor play, less hovering supervision and early cycling independence — but these are tendencies, not rules every Dutch family follows.",
      "For expat parents, the useful frame is observation, not comparison. Your neighbours, colleagues and school community may parent differently from stereotypes in media or from your home country. Schools and sport clubs often reinforce local norms — for example, expecting children to cycle, attend Wednesday sport or participate in group activities.",
      "Understanding Dutch parenting culture helps you interpret school communication, playground behaviour and community expectations. It does not require adopting every local habit — many international families blend Dutch integration with home-country traditions successfully.",
    ],
  },
  familyLife: {
    heading: "Everyday Family Life",
    paragraphs: [
      "Typical Dutch family weeks revolve around school hours (roughly 08:30–15:00 for primary), Wednesday afternoon sport or free time, and weekend club matches or family activities. Many parents work part-time — often one partner four days and another three — to align with school schedules.",
      "Family meals remain important, though busy sport evenings may shift timing. Supermarkets, neighbourhood shops and weekly markets make cooking at home accessible. Libraries (bibliotheek) offer free children's programmes, and municipalities run school holiday activities (voorjaarsvakantie, zomervakantie, etc.).",
      "Cycling connects daily life — school runs, grocery trips and visiting friends. Parks and playgrounds are social hubs where children play while parents chat. Building friendships often happens through school, sport and neighbourhood proximity rather than formal playdates alone.",
    ],
    activities: [
      { title: "Weekday rhythm", body: "School morning, work or childcare, pickup, homework (increasing with age), dinner and early bedtime on school nights." },
      { title: "Weekend sport", body: "Saturday club matches and training; Sunday often reserved for family visits, cycling trips or rest." },
      { title: "Family meals", body: "Shared dinner is common; children often eat similar food to adults — separate 'kids menus' are less typical at home." },
      { title: "Cycling", body: "Cargo bikes (bakfiets) for young children; independent cycling increases with age and route safety." },
      { title: "Parks & playgrounds", body: "Free outdoor play spaces in every neighbourhood — social meeting points for families." },
      { title: "Libraries", body: "Free membership, Dutch and sometimes English children's books, holiday activities and reading programmes." },
    ] satisfies ParentingCard[],
  },
  childcare: {
    heading: "Childcare in the Netherlands",
    paragraphs: [
      "Dutch childcare options include daycare centres (kinderdagverblijf), host parents (gastouder), preschool programmes (peuterspeelzaal / voorschool) and after-school care (buitenschoolse opvang, BSO). Most formal care requires LRK registration for allowance eligibility.",
      "Waiting lists are common — especially for infants in Amsterdam, Utrecht and The Hague. Many expat families register before arrival or within weeks of knowing their neighbourhood. Childcare allowance (kinderopvangtoeslag) can reduce costs for eligible working parents.",
      "For full detail on provider types, costs, waiting lists and expat scenarios, see our dedicated daycare guide.",
    ],
    options: [
      { title: "Daycare (kinderdagverblijf)", body: "Centre-based care from roughly 0–4 years; structured groups, often 08:00–18:00; LRK registered. Randstad waiting lists often 6–18 months for infants." },
      { title: "Gastouder", body: "Host-parent care in a home setting; smaller groups; flexible hours; also LRK registered. Often shorter waits than large centres." },
      { title: "Preschool (peuterspeelzaal)", body: "Part-time play-based programme for ages 2–4; often linked to primary schools; municipal subsidies may apply. Good bridge before basisschool." },
      { title: "After-school care (BSO)", body: "Supervised care before/after school for primary-age children; covers Wednesday afternoons and school holidays when parents work." },
    ] satisfies ParentingCard[],
    waitingListTips: [
      "Register with 3–5 providers — popular centres fill years ahead in Amsterdam, Utrecht and The Hague.",
      "Ask about pre-arrival registration if you know your move date and target postcode.",
      "Gastouders and less central locations often have shorter queues than city-centre daycare.",
      "Childcare allowance requires LRK-registered care — confirm LRK number before signing contracts.",
    ],
    links: [
      { label: "Daycare guide", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Full guide to Dutch childcare options, costs and waiting lists." },
      { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "Buitenschoolse opvang for primary school children — hours, costs and providers." },
      { label: "Child benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and childcare allowance orientation." },
      { label: "Childcare cost estimator", href: "/netherlands/family/tools/childcare-cost-estimator/", status: "live", description: "Model net childcare costs with allowance." },
    ] satisfies ParentingLink[],
  },
  education: {
    heading: "Education for Your Children",
    paragraphs: [
      "Dutch primary education (basisschool) is free and begins at age 4 (compulsory from age 5). Most children attend local Dutch-medium schools; international and bilingual options exist in major cities. Secondary education (voortgezet onderwijs) begins around age 12 with tracked pathways (VMBO, HAVO, VWO).",
      "Language is the key decision for expat families: Dutch-medium schools accelerate integration; international schools maintain English or other home-country curricula at higher cost. Homework loads increase with age; parent communication happens via apps (e.g. Parro, Magister), newsletters and parent evenings.",
      "School choice interacts with housing — catchment areas and commute matter. Visit schools, talk to other parents and read our dedicated school guides before committing.",
    ],
    points: [
      "Dutch basisschool: free, local, Dutch-medium — strongest integration route.",
      "International schools: fee-paying, English or IB curricula — common in Randstad expat corridors.",
      "Language support: newcomer programmes (nieuwkomers) may be available — ask gemeente and schools.",
      "Homework: light in early primary; increases in upper primary and secondary.",
      "Parent involvement: ouderavonden, parent councils (MR/ouderraad) and volunteer opportunities.",
      "School communication: often direct and digital — respond promptly to teacher messages.",
    ],
    decisionRows: [
      { path: "Dutch basisschool", bestFor: "Long-term stay, integration, local friendships", tradeOff: "Dutch language learning curve; fewer English-speaking staff" },
      { path: "International school", bestFor: "Short assignments, English continuity, global curricula", tradeOff: "Fees €10k–€25k+/year; smaller Dutch social network" },
      { path: "Bilingual track", bestFor: "Dual-language families in major cities", tradeOff: "Limited places; often still competitive admission" },
    ],
    links: [
      { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool, secondary tracks and parent involvement." },
      { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International and bilingual school options for expat families." },
    ] satisfies ParentingLink[],
  },
  healthcare: {
    heading: "Healthcare for Children",
    paragraphs: [
      "Children in the Netherlands access healthcare through a GP (huisarts) for illness and a preventive youth healthcare service (JGZ — jeugdgezondheidszorg) via the consultatiebureau for development checks, vaccinations and parenting guidance. Dental care is separate — register with a dentist (tandarts) early.",
      "The national vaccination programme (Rijksvaccinatieprogramma) is offered free through JGZ. Development monitoring at standard ages helps identify support needs early. For emergencies, call 112; for urgent non-emergency care, contact your GP or local huisartsenpost.",
      "Register your children with a GP after obtaining BSN and health insurance. JGZ contact usually follows gemeente registration — your municipality or consultatiebureau website explains local appointment booking.",
    ],
    points: [
      "GP (huisarts): first contact for illness, referrals and prescriptions.",
      "JGZ / consultatiebureau: preventive checks, growth monitoring, vaccinations, parenting advice.",
      "Vaccinations: national programme via RIVM — offered at standard ages through JGZ.",
      "Dental care: register with a tandarts — not automatically linked to GP.",
      "Emergency: 112 for life-threatening emergencies; huisartsenpost for urgent GP-level care outside hours.",
      "Development checks: scheduled appointments from infancy through adolescence — keep your contact details updated.",
    ],
    links: [
      { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "comingSoon", description: "Dedicated guide to GP, JGZ, vaccinations and dental care for children." },
      { label: "RIVM — National Immunisation Programme", href: "https://www.rivm.nl/en/immunisation-programme", description: "Official vaccination schedule and information." },
      { label: "Government.nl — Youth health care", href: "https://www.government.nl/topics/youth-health-care", description: "Government overview of JGZ services." },
    ] satisfies ParentingLink[],
  },
  sportsActivities: {
    heading: "Helping Children Stay Active",
    paragraphs: [
      "Sport and extracurricular activities are central to Dutch childhood social life. Most activities run through local clubs (verenigingen) rather than school-only programmes — football (soccer), swimming, gymnastics, hockey, scouting, martial arts, dance and music are widely available.",
      "Enrolment often follows the August–September season; waiting lists exist for popular clubs. Wednesday afternoons (when many primary schools finish early) are prime sport time. Costs vary — club membership, equipment and travel add up; some municipalities subsidise low-income families.",
      "Sport is one of the fastest routes to friendships for expat children — teammates and parents form natural community networks regardless of language level at first.",
    ],
    activities: [
      "Football (soccer) — largest participation sport; boys and girls teams from age 5.",
      "Swimming — diploma A/B/C certificates are culturally important milestones.",
      "Gymnastics — popular for young children; builds coordination.",
      "Cycling — both transport and sport; youth cycling clubs in many areas.",
      "Dance & music — private studios and community schools.",
      "Scouting — Scouting Nederland groups across the country.",
      "Martial arts — judo, karate and others in local clubs.",
      "Hockey — field hockey is major in certain regions.",
      "Athletics — track clubs for running and field events.",
    ],
    sportCards: [
      { title: "Football (voetbal)", body: "Largest youth sport; clubs in every municipality; season starts August–September; typical cost €150–€300/season." },
      { title: "Swimming (zwemmen)", body: "Zwemdiploma A/B/C is a cultural milestone; lessons at municipal pools or clubs; plan 1–2 years for diploma A." },
      { title: "Hockey", body: "Strong in Randstad and The Hague corridor; higher equipment costs; excellent social network for expat families." },
      { title: "Scouting", body: "Scouting Nederland groups nationwide; affordable; strong community and outdoor skills focus." },
    ] satisfies ParentingCard[],
    enrolmentTips: [
      "Most clubs enrol in August–September — contact clubs in June if arriving mid-year.",
      "Wednesday afternoon is prime training time when primary schools finish early.",
      "Children do not need fluent Dutch to start — sport builds language through play.",
    ],
  },
  outdoorLife: {
    heading: "Play & Outdoor Life",
    paragraphs: [
      "Outdoor play is deeply embedded in Dutch family culture. Playgrounds (speeltuinen) are free and plentiful; nature areas (natuurgebieden), beaches and forests are accessible by bike or public transport. The phrase 'There is no bad weather, only bad clothing' reflects how normal outside time is, even in rain.",
      "Schools often incorporate outdoor learning (buitenles). Family walks, cycling trips and playground visits are default weekend activities. This emphasis supports physical activity, social skills and independence — but requires weather-ready gear and acceptance of messy, active play.",
      "For expat families from climates or cultures with more indoor default, adjusting wardrobes and expectations early helps children participate fully in local social life.",
    ],
    points: [
      "Playgrounds: neighbourhood speeltuinen with climbing, sand and water play — free and open daily.",
      "Nature: national parks, polders, dunes and forests within reach of most cities.",
      "Cycling: family routes, bike paths and traffic-calmed residential streets.",
      "Parks: city parks (Vondelpark, Kralingse Bos, etc.) as weekend destinations.",
      "Family walks: boswandelingen and canal-side paths — low-cost social activity.",
      "Outdoor learning: schools and BSO programmes use outdoor space actively.",
    ],
    practicalTips: [
      "Invest in regenpak (rain suit) and warm layers before your first autumn — children play outside in most weather.",
      "Find your nearest speeltuin via your gemeente website — it becomes a daily social hub.",
      "Museumkaart and local passes often cover family outings; many museums run free children's programmes.",
      "Plan one outdoor activity per weekend in the first month — helps children and parents build local anchors.",
    ],
  },
  multilingual: {
    heading: "Raising Multilingual Children",
    paragraphs: [
      "Many expat families raise bilingual or multilingual children — home language plus Dutch acquired through school and community. Research generally supports maintaining home languages while children learn Dutch; abandoning home language is not necessary for integration.",
      "Dutch schools expect increasing Dutch proficiency over time; newcomer support may be available. International schools may offer dual-language tracks. Community resources include libraries, taalhuis (language house) programmes and heritage language schools in major cities.",
      "Language development varies — some children code-switch early, others have a silent period. Patience, consistent home-language use and exposure through sport and play accelerate confidence.",
    ],
    points: [
      "Home language: maintain through books, media and family conversation — consistency matters.",
      "Dutch at school: immersion accelerates acquisition; ask about newcomer support.",
      "Bilingual development: normal to mix languages early; separation improves with age.",
      "Community resources: taalhuis, libraries, heritage language schools.",
      "Parent tip: learn basic Dutch alongside your child — models integration.",
      "Avoid pressure: compare progress to typical timelines, not to monolingual peers only.",
    ],
    resources: [
      { title: "Bibliotheek (library)", body: "Free membership; Dutch and English children's books; taalcafé sessions in many cities." },
      { title: "Taalhuis", body: "Municipal language house programmes — orientation for adults and sometimes family sessions." },
      { title: "Heritage language schools", body: "Weekend schools in major cities for Arabic, Chinese, Spanish and other home languages." },
      { title: "School taal support", body: "Nieuwkomers or extra Dutch (NT2) groups — ask basisschool or gemeente after enrolment." },
    ] satisfies ParentingCard[],
  },
  movingWithChildren: {
    heading: "Moving with Children",
    paragraphs: [
      "Relocating with children adds layers to an already complex move — schools, childcare, healthcare, friendships and emotional adjustment all need parallel planning. Preparation before arrival (researching neighbourhoods, joining waiting lists, discussing the move age-appropriately) reduces stress in the first months.",
      "Settling in takes time — six to twelve months for new routines and friendships is common. Help children maintain connections to their previous home while building local anchors through school, sport and neighbourhood play.",
      "School transitions mid-year are possible but easier at natural break points. Temporary childcare or gastouder care can bridge gaps while you secure permanent arrangements.",
    ],
    checklist: [
      "Discuss the move with children honestly — maps, photos and countdown calendars help.",
      "Research schools and childcare in target neighbourhoods before arrival.",
      "Join waiting lists remotely where providers allow pre-arrival registration.",
      "Gather birth certificates, vaccination records and school reports for enrolment.",
      "Register at gemeente promptly — BSN unlocks healthcare and benefits.",
      "Enrol in sport or activity within first term to build friendships.",
    ],
    links: [
      { label: "Moving with Children", href: MOVING_WITH_CHILDREN_PATH, status: "comingSoon", description: "Dedicated relocation guide for families with children." },
      { label: "Moving with kids", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Registration, schools, childcare and healthcare for relocating families." },
    ] satisfies ParentingLink[],
  },
  workLifeBalance: {
    heading: "Work-Life Balance for Parents",
    paragraphs: [
      "The Netherlands is known for part-time work culture — many parents (especially mothers, increasingly fathers too) work 24–32 hours to align with school schedules. Parental leave (geboorteverlof, aanvullend geboorteverlof, kraamverlof) provides paid and unpaid options around birth; employers often offer additional leave.",
      "School hours (08:30–15:00, with Wednesday afternoons often free from age 6+) shape logistics. BSO covers gaps for working parents. Flexible working (hybrid, adjusted hours) is common in knowledge-sector and international employers.",
      "Expat parents on demanding full-time contracts may feel tension with local norms — discuss flexibility early with employers and plan BSO or informal care for Wednesday afternoons and holidays.",
    ],
    points: [
      "Parental leave: birth leave for partners, maternity leave, supplementary partner leave — check UWV and employer policies.",
      "Part-time work: widely accepted; job-sharing and 4-day weeks are normal.",
      "School schedule: plan for Wednesday afternoons and ~6 weeks summer holiday.",
      "Flexible work: hybrid and flex hours increasingly standard in international companies.",
      "BSO: after-school care bridges work and school hours.",
      "Holiday care: vakantieopvang through schools, BSO or municipalities — book early.",
    ],
    leaveOverview: [
      { type: "Maternity leave (zwangerschapsverlof)", detail: "16 weeks total — typically 4–6 weeks before due date; paid via UWV at daily rate cap." },
      { type: "Partner birth leave (geboorteverlof)", detail: "1 week paid at 100% of daily wage — taken within 4 weeks of birth." },
      { type: "Supplementary partner leave", detail: "Up to 5 weeks at 70% via UWV in first 6 months — check current UWV rules." },
      { type: "Unpaid parental leave (ouderschapsverlof)", detail: "Up to 26× weekly working hours per parent per child until age 8 — job protected." },
    ],
  },
  parentingSupport: {
    heading: "Parenting Support & Community",
    paragraphs: [
      "You do not need to navigate Dutch family life alone. Municipality websites list family services; consultatiebureau nurses offer parenting guidance; libraries run free programmes; and parent groups (via school, expat networks or neighbourhood) provide peer support.",
      "Community centres (buurtcentra) host playgroups and language cafés. International parent groups in major cities offer familiar formats during early adjustment. Youth healthcare professionals can signpost to support for development, sleep or behaviour concerns.",
    ],
    resources: [
      { title: "Municipality (gemeente)", body: "Local family services, childcare lists, newcomer orientation and sometimes integration programmes." },
      { title: "Consultatiebureau (JGZ)", body: "Preventive healthcare plus parenting guidance at standard check appointments." },
      { title: "Parent groups", body: "School oudercommissies, expat parent networks and neighbourhood playgroups." },
      { title: "Libraries", body: "Free children's activities, language support and community events." },
      { title: "Community centres", body: "Playgroups, language cafés and low-cost family activities." },
      { title: "Expat networks", body: "International clubs and online groups for peer advice and social connection." },
    ] satisfies ParentingCard[],
    firstMonthSteps: [
      "Book a library card and check the children's events calendar.",
      "Attend first JGZ consultatiebureau appointment — ask about local parent resources.",
      "Join school ouderavond or parent WhatsApp group when children start school.",
      "Search Facebook or expat centre listings for neighbourhood parent meetups.",
    ],
  },
  cityComparison: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", schools: "Dutch + many international/bilingual", parks: "Vondelpark, Oosterpark, Amsterdamse Bos", sports: "Wide club choice; high demand", familyFriendliness: "Excellent amenities; housing pressure", internationalCommunity: "Very large expat population" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", schools: "Dutch strong; international growing", parks: "Kralingse Bos, Zuiderpark", sports: "Strong football and swimming clubs", familyFriendliness: "Affordable vs Amsterdam; diverse", internationalCommunity: "Large international port city community" },
    { city: "The Hague", href: "/netherlands/the-hague/", schools: "Dutch + diplomatic-zone international", parks: "Scheveningen dunes, Haagse Bos", sports: "Hockey strong; wide club network", familyFriendliness: "Family-oriented; beach access", internationalCommunity: "Embassy and NGO families" },
    { city: "Utrecht", href: "/netherlands/utrecht/", schools: "Dutch + select international", parks: "Wilhelminapark, Maximapark", sports: "University city clubs; good variety", familyFriendliness: "Compact and bike-friendly", internationalCommunity: "Growing tech and university expat base" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", schools: "Dutch primary; international options", parks: "Genneper Parken, green corridors", sports: "Tech-family sport clubs", familyFriendliness: "Space and shorter childcare waits", internationalCommunity: "High-tech expat corridor" },
    { city: "Groningen", href: "/netherlands/groningen/", schools: "Dutch-medium; university influence", parks: "Noorderplantsoen, countryside nearby", sports: "Club sport; smaller market", familyFriendliness: "Affordable; student-city energy", internationalCommunity: "University and northern expat niche" },
  ] satisfies ParentingCityCard[],
  familyBudget: {
    heading: "Family Budget Overview",
    paragraphs: [
      "Raising children in the Netherlands involves predictable public costs (health insurance, often low basisschool fees) and variable private costs (childcare, international school fees, sport, housing). Child benefits (Kinderbijslag) and childcare allowance can offset part of the load for eligible families.",
      "Budget holistically: housing sized for family, commute, childcare days, sport memberships and holiday care. Randstad cities carry premium housing costs; smaller cities often trade lower rent for fewer international school options.",
    ],
    items: [
      { title: "Childcare", body: "Often the largest early-years cost — €1,200–€2,400/month full-time before allowance in Randstad cities." },
      { title: "Education", body: "Dutch basisschool free; international schools €10,000–€25,000+/year; ouderbijdrage voluntary contributions at Dutch schools." },
      { title: "Sports & activities", body: "Club fees €150–€400/season plus equipment; music lessons additional." },
      { title: "Healthcare", body: "Mandatory insurance for adults; children covered under parent's policy until 18." },
      { title: "Transport", body: "Bikes primary; OV-chipkaart for older children; car optional in cities." },
      { title: "Activities & holidays", body: "Museum passes, holiday camps, family trips — plan for school vacation periods." },
    ] satisfies ParentingCard[],
    links: [
      { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and family financial support." },
      { label: "Housing Costs", href: HOUSING_COSTS_PATH, status: "live", description: "Typical housing costs for families." },
      { label: "Best cities for families", href: BEST_CITIES_FOR_FAMILIES_PATH, status: "live", description: "Compare family-friendly Dutch cities." },
    ] satisfies ParentingLink[],
    budgetExample: {
      profile: "Dual-income family — 2 children ages 2 and 6, Amsterdam",
      items: [
        "Childcare 3 days/week (before toeslagen): ~€1,400/month",
        "Housing 3-bedroom (Randstad): largest budget line",
        "Sport 2 clubs: ~€300–€500/season combined",
        "Kinderbijslag + kinderopvangtoeslag: offset via SVB and Belastingdienst",
      ],
    },
  },
  expatChallenges: [
    { title: "Language", body: "Children often pick up Dutch faster than parents — school communication and playground interactions may feel isolating at first.", advice: "Take beginner Dutch classes; use school apps with translation; join expat parent groups for parallel support." },
    { title: "Building friendships", body: "Local friendships form through sport and school — expat children may need time to find their social footing.", advice: "Enrol in a club early; accept playdates; attend school parent events even when language is imperfect." },
    { title: "Choosing schools", body: "Dutch vs international is a major fork — each path has trade-offs for language, cost and community.", advice: "Visit schools, talk to parents and read our school guides before deciding." },
    { title: "Finding childcare", body: "Waiting lists in major cities can exceed 12 months for infant places.", advice: "Register multiple providers before arrival; consider gastouder as flexible bridge care." },
    { title: "Waiting lists", body: "Childcare and popular sport clubs both use queues — late planning creates gaps.", advice: "Treat waiting-list registration as step one of relocation planning." },
    { title: "Healthcare differences", body: "JGZ and GP-first systems differ from paediatrician-led models in some countries.", advice: "Register GP and attend JGZ appointments — ask nurses for orientation." },
    { title: "Balancing work", body: "Dutch school hours and Wednesday afternoons conflict with full-time expectations from some employers.", advice: "Discuss flexibility early; plan BSO and holiday care; explore part-time options." },
  ] satisfies (ParentingCard & { advice: string })[],
  checklist: {
    heading: "Expat parenting checklist",
    items: [
      "Register at municipality (gemeente) and obtain BSN for all children",
      "Arrange health insurance and register GP for each child",
      "Register with consultatiebureau (JGZ) for development checks and vaccinations",
      "Research and join childcare waiting lists in target neighbourhood",
      "Explore Dutch and international school options; visit before enrolling",
      "Enrol children in a sport club or activity for social connection",
      "Visit local library and sign up for children's programmes",
      "Learn about municipality family services and parent groups",
      "Apply for child benefits (Kinderbijslag) via SVB if eligible",
      "Meet other families through school, sport or expat networks",
    ],
  },
  mistakeCards: [
    { title: "Waiting too long for daycare", body: "Example: assuming a place will appear once you arrive in Amsterdam with a 6-month-old.", advice: "Join waiting lists 6–12 months ahead; register with multiple LRK providers." },
    { title: "Ignoring waiting lists", body: "Example: applying to one popular centre and stopping when waitlisted.", advice: "Register broadly — gastouders and less central locations often have shorter waits." },
    { title: "Not joining community activities", body: "Example: waiting until Dutch is fluent before enrolling in sport.", advice: "Children integrate through play — clubs accept beginners and parents help translate." },
    { title: "Comparing everything with home country", body: "Example: frustration that school hours, food culture or communication style differ.", advice: "Observe local norms with curiosity — adapt what works, keep what matters from home." },
    { title: "Ignoring language opportunities", body: "Example: choosing only expat circles and delaying Dutch exposure.", advice: "Balance international community with Dutch school, sport or neighbourhood play." },
    { title: "Trying to do everything alone", body: "Example: not asking school, JGZ or neighbours for guidance.", advice: "Use consultatiebureau, parent groups and municipality services — asking is normal." },
  ] satisfies MistakeCard[],
  faq: [
    { q: "Is the Netherlands good for raising children?", a: "Many families find the Netherlands family-friendly thanks to safe neighbourhoods, quality education, preventive healthcare, outdoor infrastructure and work-life balance norms. Experience varies by city, income and support network — this guide helps you evaluate fit for your family." },
    { q: "How family-friendly is the Netherlands?", a: "Public services for families are strong — free primary education, JGZ preventive healthcare, childcare allowance for eligible parents and extensive sport and playground infrastructure. Housing cost and childcare availability in Randstad cities are common challenges." },
    { q: "How does Dutch parenting differ from other countries?", a: "Dutch parenting often emphasises independence, outdoor play, routine and direct communication — children may cycle to school and spend more unsupervised play time than in some cultures. These are tendencies, not universal rules; families blend local and home-country approaches." },
    { q: "How do children make friends in the Netherlands?", a: "Primarily through school, sport clubs and neighbourhood play. Enrolling in a local club (voetbal, swimming, scouting) is one of the fastest friendship routes — especially for expat children arriving mid-year." },
    { q: "How safe is the Netherlands for children?", a: "The Netherlands ranks among safer countries globally with traffic-calmed residential streets, cycling infrastructure and low violent crime. Normal urban precautions apply — water safety near canals and bike proficiency matter." },
    { q: "What childcare options exist?", a: "Daycare centres, gastouders (host parents), preschool programmes and after-school care (BSO). Most formal care is LRK registered. See our daycare guide for costs, waiting lists and allowance rules." },
    { q: "How much does raising children cost?", a: "Costs vary widely — childcare and housing dominate early years in cities; Dutch basisschool is free; international schools charge fees. Child benefits and childcare allowance offset part of the load for eligible families." },
    { q: "Should children learn Dutch?", a: "If staying beyond a short assignment, Dutch helps social integration and future education options. Many families maintain home language while children learn Dutch through school and activities — both are valuable." },
  ],
  relatedGuides: [
    { label: "Moving with Children", href: MOVING_WITH_CHILDREN_PATH, status: "comingSoon", description: "Relocation planning for families with children." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and family financial support." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare options, costs and waiting lists." },
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "After-school and holiday care for primary school children." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool, secondary tracks and parent involvement." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International and bilingual education options." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "comingSoon", description: "GP, JGZ, vaccinations and dental care." },
    { label: "Family Life", href: FAMILY_LIFE_PATH, status: "comingSoon", description: "Broader family life in the Netherlands." },
    { label: "Housing for Families", href: BEST_CITIES_FOR_FAMILIES_PATH, status: "live", description: "Best cities and housing for families." },
  ] satisfies ParentingLink[],
  familyHubCards: [
    { label: "Parenting", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Raising children and Dutch parenting culture — you are here." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare options and waiting lists." },
    { label: "Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Dutch and international education." },
    { label: "Healthcare", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "comingSoon", description: "Medical care and youth health services." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and family allowances." },
    { label: "Moving with Children", href: MOVING_WITH_CHILDREN_PATH, status: "comingSoon", description: "Relocation planning for families." },
  ] satisfies ParentingLink[],
  exploreNextCards: [
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Start childcare research early." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Understand the Dutch education system." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "Explore international education options." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Financial support for families." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Registration and arrival checklist." },
  ] satisfies ParentingLink[],
  visualTextDetails: {
    quickAnswer: {
      title: "From the visual — plan in this order",
      items: [
        "Register BSN at gemeente — unlocks GP, JGZ, benefits and school enrolment.",
        "Join childcare waiting lists 6–12 months ahead in Randstad cities.",
        "Choose Dutch vs international school before signing a housing contract.",
        "Enrol in a sport club in the first term — fastest friendship route for children.",
      ],
    },
    snapshot: {
      title: "From the visual — six pillars at a glance",
      items: [
        "Public services: free basisschool, JGZ preventive care, municipality family support.",
        "Outdoor life: cycling, playgrounds and sport clubs shape daily childhood.",
        "Education choice: Dutch integration vs international continuity — decide early.",
        "Work-life: part-time norms and school hours (08:30–15:00) shape parent schedules.",
      ],
    },
    parentingPhilosophy: {
      title: "From the visual — six principles with nuance",
      items: [
        "Independence: cycling to school often from age 8–12 — infrastructure supports it.",
        "Routine: school 08:30–15:00, Wednesday sport, Saturday club matches.",
        "Outdoor play: rain or shine — regenpak is part of Dutch family kit.",
        "Observe locally — tendencies are not rules; blend home and Dutch habits.",
      ],
    },
    familyLife: {
      title: "From the visual — typical weekly rhythm",
      items: [
        "Mon–Fri: school 08:30–15:00; Wed afternoon often free from age 6+.",
        "Saturday: club sport matches; Sunday: family visits and rest.",
        "Bakfiets for young children; libraries and markets for low-cost outings.",
        "Friendships form through school, sport and neighbourhood playgrounds.",
      ],
    },
    childcare: {
      title: "From the visual — childcare essentials",
      items: [
        "Only LRK-registered providers qualify for kinderopvangtoeslag.",
        "Register with multiple daycare centres and gastouders — not just one.",
        "Kinderdagverblijf 0–4, peuterspeelzaal 2–4, BSO 4–12 — match type to age.",
        "Indicative cost €8–12.50/hour before allowance — verify with each provider.",
      ],
    },
    education: {
      title: "From the visual — school decision checklist",
      items: [
        "Dutch basisschool: free, local, strongest Dutch integration from age 4.",
        "International schools: fee-paying, English/IB, wider expat community.",
        "Visit schools, talk to parents and check commute before enrolling.",
        "Parent communication via apps — respond promptly to teacher messages.",
      ],
    },
    healthcare: {
      title: "From the visual — healthcare first steps",
      items: [
        "Register GP (huisarts) after BSN — first contact for illness.",
        "JGZ consultatiebureau handles development checks and RIVM vaccinations.",
        "Register tandarts separately — dental is not via GP.",
        "Emergency: 112 life-threatening; huisartsenpost for urgent GP-level care.",
      ],
    },
    sportsActivities: {
      title: "From the visual — sport and friendships",
      items: [
        "Voetbal from age 5; zwemdiploma A/B/C is a cultural milestone.",
        "Enrol August–September — contact clubs in June if arriving mid-year.",
        "Wednesday 15:30 slot is prime training time after early school finish.",
        "Children need not speak fluent Dutch — teammates help through play.",
      ],
    },
    outdoorLife: {
      title: "From the visual — outdoor essentials",
      items: [
        "Speeltuinen are free neighbourhood playgrounds — social hubs for families.",
        "Regenpak and layers let children play outside in most weather.",
        "Cycling paths connect parks, schools and nature areas safely.",
        "Schools use buitenles — outdoor learning is normal, not optional.",
      ],
    },
    multilingual: {
      title: "From the visual — bilingual family plan",
      items: [
        "Maintain home language at home — consistency matters more than quantity.",
        "Dutch builds through school, sport and neighbourhood play.",
        "Silent period ages 3–7 is normal — patience beats pressure.",
        "Use bibliotheek, taalhuis and heritage language schools for support.",
      ],
    },
    movingWithChildren: {
      title: "From the visual — relocation timeline",
      items: [
        "3 months before: research schools, join childcare waiting lists remotely.",
        "Week 1: gemeente registration and BSN for all children.",
        "Week 2: GP registration and JGZ appointment booking.",
        "Month 1: sport club enrolment — do not wait for fluent Dutch.",
      ],
    },
    workLifeBalance: {
      title: "From the visual — schedule reality check",
      items: [
        "School 08:30–15:00; Wednesday afternoons often free — plan BSO or care.",
        "Part-time 24–32 hours/week is common for parents with school-age children.",
        "6-week summer vakantie — book vakantieopvang or holiday camps early.",
        "Discuss hybrid/flex hours with employer before arrival if possible.",
      ],
    },
    parentingSupport: {
      title: "From the visual — who can help",
      items: [
        "Gemeente: childcare lists, newcomer orientation, local family services.",
        "JGZ nurses: parenting guidance at standard development appointments.",
        "School oudercommissie: parent council and class WhatsApp groups.",
        "Bibliotheek and buurtcentrum: free programmes and playgroups.",
      ],
    },
    cityComparison: {
      title: "From the visual — choosing your city",
      items: [
        "Amsterdam/Den Haag: most international schools; longest childcare waits.",
        "Rotterdam/Eindhoven: more space, often shorter queues, growing expat base.",
        "Utrecht: compact, bike-friendly; university-city energy.",
        "Match city to job, school budget and commute before housing search.",
      ],
    },
    familyBudget: {
      title: "From the visual — budget priorities",
      items: [
        "Childcare + housing dominate early-years costs in Randstad cities.",
        "Dutch basisschool free; international schools €10k–25k+/year.",
        "Sport €150–400/season; Kinderbijslag via SVB; toeslagen via Belastingdienst.",
        "Model net costs with official calculators — not blog figures.",
      ],
    },
    expatChallenges: {
      title: "From the visual — predictable hurdles",
      items: [
        "Language: children often learn Dutch faster — parents need parallel support.",
        "Friendships: sport club enrolment in month one beats waiting.",
        "Childcare queues: register broadly before arrival, not after.",
        "Healthcare: GP-first system — register and attend JGZ promptly.",
      ],
    },
    checklist: {
      title: "From the visual — priority order",
      items: [
        "Gemeente + BSN first — everything else follows registration.",
        "Healthcare (GP + JGZ) before or alongside childcare search.",
        "Apply Kinderbijslag via SVB once children are registered.",
        "Meet other families through school, sport or library programmes.",
      ],
    },
    mistakes: {
      title: "From the visual — avoid these patterns",
      items: [
        "Waiting too long for daycare — register 6–12 months ahead in cities.",
        "Single-provider waiting lists — apply to gastouders and multiple centres.",
        "Skipping sport until Dutch is fluent — play builds language and friends.",
        "Going alone — gemeente, JGZ and school parents are normal support routes.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "Family-friendly: yes — strong services, outdoor life, safe neighbourhoods.",
        "Dutch parenting: independence and outdoor play are common themes.",
        "Friendships: school + sport clubs are the main routes.",
        "Costs: childcare and housing dominate; basisschool is free.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by topic",
      items: [
        "Childcare waiting lists → Daycare guide",
        "School choice → Dutch Schools or International Schools",
        "Financial support → Child Benefits and childcare allowance",
        "Relocation → Moving with Children guide",
      ],
    },
    familyHub: {
      title: "From the visual — family content map",
      items: [
        "Parenting (this page): culture, daily life and expat orientation.",
        "Daycare + BSO: childcare from infancy through primary school.",
        "Schools + benefits: education path and Kinderbijslag.",
        "Healthcare + moving: JGZ registration and relocation timeline.",
      ],
    },
  },
  officialSources: [
    { label: "Government.nl — Youth health care", href: "https://www.government.nl/topics/youth-health-care", description: "Official overview of JGZ preventive services for children." },
    { label: "RIVM — Immunisation Programme", href: "https://www.rivm.nl/en/immunisation-programme", description: "National vaccination schedule and safety information." },
    { label: "Ministry of Education — Primary education", href: "https://www.government.nl/topics/primary-education", description: "Government information on Dutch primary schools." },
    { label: "SVB — Child benefit", href: "https://www.svb.nl/en/child-benefit", description: "Kinderbijslag information and application." },
  ],
  officialSourcesNote: "General information only — not medical, legal or parenting advice. Confirm details with your municipality, school, GP and consultatiebureau.",
} as const;
