export const AMSTERDAM_VS_ROTTERDAM_PATH = "/netherlands/cities/amsterdam-vs-rotterdam/" as const;
export const CITIES_COMPARE_HUB_PATH = "/netherlands/cities/compare/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const AMSTERDAM_PATH = "/netherlands/amsterdam/" as const;
export const ROTTERDAM_PATH = "/netherlands/rotterdam/" as const;
export const UTRECHT_PATH = "/netherlands/utrecht/" as const;
export const THE_HAGUE_PATH = "/netherlands/the-hague/" as const;
export const EINDHOVEN_PATH = "/netherlands/eindhoven/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const BUY_VS_RENT_PATH = "/netherlands/housing/buy-vs-rent-netherlands/" as const;
export const BUYING_HOUSE_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const FINDING_JOBS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const AVERAGE_SALARY_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const EXPAT_SALARY_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const NET_SALARY_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const STARTING_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const FREELANCING_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const ZZP_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const CITY_COMPARISON_TOOL_PATH = "/netherlands/tools/city-comparison/" as const;

export type AmsterdamVsRotterdamLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type AmsterdamVsRotterdamCard = { title: string; body: string };

export type AmsterdamVsRotterdamComparisonRow = {
  topic: string;
  amsterdam: string;
  rotterdam: string;
};

export type AmsterdamVsRotterdamWorkedExampleRow = {
  profile: string;
  keyFigures: string;
  exampleMath: string;
  whatToConfirm: string;
};

export type AmsterdamVsRotterdamDecisionRow = {
  persona: string;
  amsterdam: string;
  rotterdam: string;
  lean: string;
};

export type AmsterdamVsRotterdamNeighborhoodCard = {
  city: "Amsterdam" | "Rotterdam";
  name: string;
  vibe: string;
  audience: string;
  cost: string;
};

export type AmsterdamVsRotterdamSnapshotCard = {
  label: string;
  value: string;
  note?: string;
};

const INFOGRAPHIC_VERSION = "premium-v6";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-amsterdam-vs-rotterdam-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const amsterdamVsRotterdamPage = {
  slug: "amsterdam-vs-rotterdam",
  path: AMSTERDAM_VS_ROTTERDAM_PATH,
  publish: true,
  publishDate: "2026-09-16",
  seo: {
    title: "Amsterdam vs Rotterdam: Which Dutch City Is Better for Expats?",
    description:
      "Compare Amsterdam and Rotterdam across housing, jobs, salaries, lifestyle, transport, cost of living and expat life to decide which city fits you best.",
    keywords: [
      "amsterdam vs rotterdam",
      "rotterdam vs amsterdam",
      "amsterdam or rotterdam",
      "best city netherlands expat",
      "expat city comparison netherlands",
      "living in amsterdam vs rotterdam",
      "cost of living amsterdam rotterdam",
      "housing amsterdam vs rotterdam",
      "jobs amsterdam vs rotterdam",
      "expat life netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Cities · Comparison",
    pageTitle: "Amsterdam vs Rotterdam",
    subtitle:
      "Compare the Netherlands' two most internationally recognized cities across housing, jobs, lifestyle, costs, transport and expat life.",
    primaryCta: { label: "Compare the Cities", href: "#quick-answer" },
    secondaryCta: { label: "Explore Dutch Cities", href: CITIES_HUB_PATH },
    chips: ["Housing & rent", "Jobs & salaries", "Lifestyle", "Expat communities"],
    image: {
      src: "/images/heroes/netherlands-amsterdam-vs-rotterdam-hero-v6.png",
      alt: "Photorealistic editorial hero — international couple comparing Amsterdam and Rotterdam city guides, rent listings and commute maps at a modern desk with Amsterdam canal houses and Rotterdam Erasmus Bridge visible through the window.",
    },
  },
  snapshotCards: [
    { label: "Amsterdam 1-bed rent", value: "€1,400–€2,200+", note: "Typical city bands — verify live listings before budgeting." },
    { label: "Rotterdam 1-bed rent", value: "€1,000–€1,800+", note: "Often more space per euro than Amsterdam at similar lifestyle tier." },
    { label: "Schiphol by train", value: "15–25 vs 25–40 min", note: "Amsterdam Centraal direct vs Rotterdam via NS — factor hybrid work." },
    { label: "Expat infrastructure", value: "Amsterdam densest", note: "IN Amsterdam vs Rotterdam International Center — both work with planning." },
  ] satisfies AmsterdamVsRotterdamSnapshotCard[],
  visuals: {
    quickAnswer: visual(
      "quick-answer",
      "Premium split decision board — choose Amsterdam for largest expat scene and global employers; choose Rotterdam for housing value, modern architecture and fewer tourists.",
      "No universal winner — match the city to your budget, career and lifestyle priorities."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance comparison table infographic with population, rent bands, industries, airports, transport and international schools for Amsterdam and Rotterdam.",
      "Orientation figures only — verify current listings and official statistics before deciding."
    ),
    costOfLiving: visual(
      "cost-of-living",
      "Premium cost comparison board with housing, utilities, groceries, restaurants, transport and gym examples plus monthly budget cards for single, couple and family profiles.",
      "Model monthly budgets with your actual rent quote — these are planning ranges, not guarantees."
    ),
    housing: visual(
      "housing",
      "Premium housing comparison scene contrasting Amsterdam competitive rental market with Rotterdam more affordable apartments and neighborhood variety.",
      "Housing often drives the Amsterdam vs Rotterdam decision — start with realistic rent bands."
    ),
    jobs: visual(
      "jobs",
      "Premium job market comparison map — Amsterdam tech, finance and startups vs Rotterdam logistics, maritime and engineering clusters.",
      "Industry fit matters as much as city brand — check employers in your sector before moving."
    ),
    salary: visual(
      "salary",
      "Premium salary and purchasing-power board showing gross pay alongside rent and disposable income context for both cities.",
      "Higher Amsterdam salaries do not always mean more spending room after housing."
    ),
    transport: visual(
      "transport",
      "Premium transport connectivity infographic — Schiphol access from Amsterdam vs Rotterdam rail hub, cycling culture and travel-time examples.",
      "Commute and airport patterns differ — factor in hybrid work and partner locations."
    ),
    lifestyle: visual(
      "lifestyle",
      "Premium side-by-side lifestyle cards — Amsterdam historic canals and tourism vs Rotterdam modern architecture and multicultural innovation.",
      "Lifestyle preference is subjective — visit both cities if you can before signing a lease."
    ),
    nightlife: visual(
      "nightlife",
      "Premium nightlife and social life comparison — bars, music, events, dating and international meetups in Amsterdam vs Rotterdam vibes.",
      "Both cities have active social scenes — the feel differs more than the quantity of venues."
    ),
    expatCommunity: visual(
      "expat-community",
      "Premium expat community comparison — IN Amsterdam and large international networks vs Rotterdam International Center and growing professional scene.",
      "Amsterdam's expat density is higher; Rotterdam can feel more local while still being international."
    ),
    families: visual(
      "families",
      "Premium family comparison board — schools, parks, housing space, childcare and safety context for Amsterdam vs Rotterdam.",
      "Families often weigh space and value against Amsterdam's job density and school demand."
    ),
    entrepreneurs: visual(
      "entrepreneurs",
      "Premium startup ecosystem comparison — Amsterdam investor density vs Rotterdam port-linked innovation and co-working value.",
      "Entrepreneurs should compare sector networks, not just headline startup rankings."
    ),
    students: visual(
      "students",
      "Premium student life comparison — UvA/VU vs EUR housing costs, nightlife and graduate career paths.",
      "Student housing pressure is real in both cities — apply early and budget conservatively."
    ),
    weather: visual(
      "weather",
      "Premium parks and waterfront comparison — green space, outdoor recreation and urban feel in Amsterdam vs Rotterdam.",
      "Weather is similar across the Randstad — parks and waterfront access differ by neighbourhood."
    ),
    neighborhoods: visual(
      "neighborhoods",
      "Premium neighborhood cards for Amsterdam Zuid, Oost, De Pijp, Westerpark, IJburg and Rotterdam Kralingen, Hillegersberg, Centrum, Blijdorp, Kop van Zuid.",
      "Neighbourhood choice often matters more than city choice at the margin."
    ),
    amsterdamBestFor: visual(
      "amsterdam-best-for",
      "Premium profile cards — Amsterdam often best for international executives, tech, finance, creative industries and large expat networks.",
      "Amsterdam fits many global careers — budget and housing competition are the main tradeoffs."
    ),
    rotterdamBestFor: visual(
      "rotterdam-best-for",
      "Premium profile cards — Rotterdam often best for families, entrepreneurs, engineers, logistics professionals and budget-conscious expats.",
      "Rotterdam rewards people who want modern urban life with more space per euro."
    ),
    decisionMatrix: visual(
      "decision-matrix",
      "Premium decision matrix table mapping personas — young professional, family, student, entrepreneur, remote worker, retiree, HSM — to Amsterdam vs Rotterdam lean.",
      "Use this matrix as a starting point — your employer location may override preference."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight Amsterdam vs Rotterdam questions on cost, jobs, families, housing, nightlife and expat life.",
      "Short answers for search intent — read section detail above for context and links."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking to Amsterdam guide, Rotterdam guide, cities hub, housing, jobs and salary pages.",
      "Open city guides next for registration, neighbourhoods and official newcomer support."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal journey with five future comparison cards — Amsterdam vs Utrecht, Amsterdam vs The Hague, Rotterdam vs The Hague and more.",
      "More head-to-head guides coming — use the compare hub and city comparison tool meanwhile."
    ),
  },
  sectionNav: [
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#cost-of-living", label: "Costs" },
    { href: "#housing", label: "Housing" },
    { href: "#jobs", label: "Jobs" },
    { href: "#salary", label: "Salary" },
    { href: "#transport", label: "Transport" },
    { href: "#lifestyle", label: "Lifestyle" },
    { href: "#nightlife", label: "Nightlife" },
    { href: "#expat-community", label: "Expats" },
    { href: "#families", label: "Families" },
    { href: "#entrepreneurs", label: "Startups" },
    { href: "#students", label: "Students" },
    { href: "#weather", label: "Weather" },
    { href: "#neighborhoods", label: "Areas" },
    { href: "#amsterdam-best-for", label: "Amsterdam" },
    { href: "#rotterdam-best-for", label: "Rotterdam" },
    { href: "#decision-matrix", label: "Matrix" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#explore-next", label: "More compares" },
  ],
  quickAnswerHeading: "Amsterdam or Rotterdam?",
  quickAnswerParagraphs: [
    "Both cities work well for expats — but they suit different priorities. Amsterdam offers the largest international job market and expat infrastructure; Rotterdam often delivers better housing value and a more local, modern urban feel.",
    "There is no universal winner. Use this guide to match city strengths to your budget, career sector, family needs and lifestyle preferences.",
  ],
  chooseAmsterdam: [
    "You want the largest international expat scene and newcomer services (IN Amsterdam).",
    "Your sector clusters in tech, finance, media or global HQs — many roles are Amsterdam-first.",
    "Historic canal neighbourhoods and a dense international social calendar matter to you.",
    "Budget is less constraining — you can absorb €1,400–€2,200+ typical 1-bed rent bands.",
  ],
  chooseRotterdam: [
    "You want better value housing — typical 1-bed bands around €1,000–€1,800+ vs higher Amsterdam medians.",
    "You prefer modern architecture, waterfront living and fewer tourist crowds day to day.",
    "Your career fits logistics, maritime, engineering, trade or port-linked innovation.",
    "You want a multicultural city that feels international but less tourism-heavy than Amsterdam.",
  ],
  quickAnswerNextSteps: [
    "Scroll to Cost of living if budget is your main filter.",
    "Jump to Jobs or Salary if you already have an offer or sector in mind.",
    "Use the decision matrix if you are torn after reading the first sections.",
  ],
  snapshotHeading: "Amsterdam vs Rotterdam at a Glance",
  snapshotParagraphs: [
    "Use this snapshot to orient yourself before diving into housing, jobs and lifestyle sections. Figures are indicative planning ranges — verify current data on official sources and live listings.",
  ],
  snapshotUseTips: [
    "If rent is your main constraint, compare 1-bed and family bands before anything else — the gap is usually larger than salary differences.",
    "Match industry clusters to your sector: tech and finance lean Amsterdam; logistics and maritime lean Rotterdam.",
    "Factor airport and intercity rail if you travel weekly — Amsterdam wins Schiphol proximity; Rotterdam wins Randstad south links.",
    "Open both city guides next if you already have a neighbourhood or employer shortlist.",
  ],
  snapshotComparisonRows: [
    { topic: "City population (municipality)", amsterdam: "~900k (CBS orientation)", rotterdam: "~660k (CBS orientation)" },
    { topic: "Metro / urban region", amsterdam: "Amsterdam Area / Randstad north", rotterdam: "Rotterdam–The Hague metro; Randstad south" },
    { topic: "International population", amsterdam: "Very high — largest expat density NL", rotterdam: "High and growing — Rotterdam International Center" },
    { topic: "Average rent (1-bed, city)", amsterdam: "€1,400 – €2,200+", rotterdam: "€1,000 – €1,800+" },
    { topic: "Average rent (family home)", amsterdam: "€2,000 – €3,500+", rotterdam: "€1,500 – €2,800+" },
    { topic: "Main industries", amsterdam: "Tech, finance, media, startups, corporate HQ", rotterdam: "Logistics, maritime, engineering, trade, port" },
    { topic: "Major employers (examples)", amsterdam: "Booking.com, Adyen, ING, Uber, TomTom", rotterdam: "Port of Rotterdam, Shell, Unilever, Boskalis" },
    { topic: "Airport access", amsterdam: "Schiphol ~15–25 min by train (direct)", rotterdam: "Schiphol ~25–40 min; Rotterdam The Hague Airport nearby" },
    { topic: "Public transport", amsterdam: "GVB metro/tram/bus + NS", rotterdam: "RET metro/tram/bus + NS hub" },
    { topic: "International schools", amsterdam: "Largest selection in NL", rotterdam: "Several options; less dense than Amsterdam" },
    { topic: "Universities", amsterdam: "UvA, VU, Amsterdam UMC", rotterdam: "EUR, Erasmus MC" },
    { topic: "Tourism intensity", amsterdam: "Very high — centre feels tourist-heavy", rotterdam: "Moderate — more local daily rhythm" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  costOfLivingHeading: "Cost of Living Comparison",
  costOfLivingParagraphs: [
    "Groceries, utilities and health insurance are broadly similar across the Randstad — housing and discretionary spending usually create the biggest gap between Amsterdam and Rotterdam.",
    "Figures below are orientation ranges for planning. Verify listings, energy contracts and insurer quotes for your household.",
  ],
  costComparisonRows: [
    { topic: "Rent (1-bedroom, city)", amsterdam: "€1,400 – €2,200+", rotterdam: "€1,000 – €1,800+" },
    { topic: "Rent (family home)", amsterdam: "€2,000 – €3,500+", rotterdam: "€1,500 – €2,800+" },
    { topic: "Groceries (single)", amsterdam: "€250 – €400/mo", rotterdam: "€250 – €400/mo" },
    { topic: "Utilities (energy)", amsterdam: "€150 – €250/mo (varies)", rotterdam: "€150 – €250/mo (varies)" },
    { topic: "Public transport pass", amsterdam: "From ~€40/mo (GVB)", rotterdam: "From ~€40/mo (RET)" },
    { topic: "Gym membership", amsterdam: "€30 – €60/mo typical", rotterdam: "€25 – €55/mo typical" },
    { topic: "Restaurant (mid-range dinner)", amsterdam: "€40 – €70 for two (orientation)", rotterdam: "€35 – €60 for two (orientation)" },
    { topic: "Affordability band", amsterdam: "High", rotterdam: "Medium–high" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  budgetExamples: [
    { title: "Single professional", body: "Amsterdam example: €2,000 rent + €350 groceries + €140 insurance + €50 transport ≈ €2,540 fixed-ish — needs ~€4,500+ net/mo for comfort. Rotterdam example: €1,400 rent same stack ≈ €1,940 — ~€600/mo lighter before lifestyle spend." },
    { title: "Couple (dual income)", body: "Amsterdam: €2,400 rent + shared costs ~€900 → ~€3,300 base. Rotterdam: €1,700 rent + ~€900 → ~€2,600 base. Salary difference may narrow the gap — model both with net salary guides." },
    { title: "Family (2 children)", body: "Amsterdam family rent €2,800+ plus childcare often €1,200–€2,000+/mo depending on scheme. Rotterdam family rent €2,000–€2,500 band often saves €500–€800/mo on housing alone — verify school and commute tradeoffs." },
  ] satisfies AmsterdamVsRotterdamCard[],
  costWorkedExamples: [
    { profile: "€70k gross — single renter", keyFigures: "Amsterdam ~€2,000/mo disposable vs Rotterdam ~€2,400/mo (illustrative)", exampleMath: "Same gross, ~€400–€600 lower rent in Rotterdam often outweighs small salary premiums", whatToConfirm: "Run net salary calculator with your actual offer and rent quote." },
    { profile: "Couple — one Schiphol commute", keyFigures: "Live Rotterdam · work Amsterdam airport corridor", exampleMath: "Save €300–€500/mo rent · add ~€120/mo NS commute — still net positive for many", whatToConfirm: "Door-to-door commute time before signing lease." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  housingHeading: "Housing: Amsterdam vs Rotterdam",
  housingParagraphs: [
    "Housing is the most common reason expats choose Rotterdam over Amsterdam — or accept Amsterdam's premium for career and network density.",
    "Both markets require early search, scam awareness and realistic budgets. Amsterdam competition is fiercer; Rotterdam often offers more square metres per euro.",
  ],
  housingComparisonRows: [
    { topic: "Rental market pressure", amsterdam: "Very high — many applicants per listing", rotterdam: "High but often less extreme than Amsterdam" },
    { topic: "Typical 1-bed range", amsterdam: "€1,400 – €2,200+", rotterdam: "€1,000 – €1,800+" },
    { topic: "Apartment size", amsterdam: "Often smaller at same price", rotterdam: "Often larger layouts for similar rent" },
    { topic: "Buying property", amsterdam: "Highest NL price pressure", rotterdam: "Lower entry than Amsterdam — still Randstad pricing" },
    { topic: "Neighbourhood variety", amsterdam: "Canal belts, inner ring, IJburg, Amstelveen corridor", rotterdam: "Kralingen, Hillegersberg, Kop van Zuid, Blijdorp" },
    { topic: "Expat rental scams", amsterdam: "High risk — verify landlord and viewings", rotterdam: "Still present — same caution required" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  housingChecklist: [
    "Get a realistic rent quote for your target neighbourhood — not just city averages.",
    "Budget for deposit (often 1–2 months), agency fees where applicable, and utilities on top of base rent.",
    "Insist on an in-person or verified video viewing before transferring money.",
    "Check commute time to work, school or partner's office before signing.",
    "Compare furnished vs unfurnished totals — Amsterdam furnished premiums are often higher.",
  ],
  housingWorkedExamples: [
    { profile: "Single — canal belt vs Kralingen", keyFigures: "Amsterdam €1,900 · 42m² vs Rotterdam €1,350 · 58m²", exampleMath: "~€550/mo less in Rotterdam · ~16m² more space — common pattern at similar lifestyle tier", whatToConfirm: "Door-to-door commute and total monthly housing cost including utilities." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  housingGuideLinks: [
    { label: "Housing hub", href: HOUSING_HUB_PATH, status: "live", description: "Renting, buying and housing tools for expats." },
    { label: "Buy vs rent", href: BUY_VS_RENT_PATH, status: "live", description: "Compare renting and buying in the Dutch market." },
    { label: "Buying a house", href: BUYING_HOUSE_PATH, status: "live", description: "Expat orientation on purchasing property in the Netherlands." },
    { label: "Amsterdam city guide", href: AMSTERDAM_PATH, status: "live", description: "Neighbourhoods, registration and housing context." },
    { label: "Rotterdam city guide", href: ROTTERDAM_PATH, status: "live", description: "Neighbourhoods, registration and housing context." },
  ] satisfies AmsterdamVsRotterdamLink[],
  jobsHeading: "Jobs and Careers",
  jobsParagraphs: [
    "Amsterdam concentrates more international HQs, tech scale-ups and finance roles; Rotterdam leads in logistics, maritime, engineering and port-linked trade.",
    "English-speaking roles exist in both cities — Amsterdam's volume is higher, but Rotterdam employers increasingly hire internationally for technical and port economy roles.",
  ],
  jobsComparisonRows: [
    { topic: "Tech & startups", amsterdam: "Strongest NL cluster — Booking, Adyen, scale-up density", rotterdam: "Growing — port tech, cleantech, EUR spin-offs" },
    { topic: "Finance & corporate", amsterdam: "Major banks, fintech, global HQs", rotterdam: "Corporate HQs (Unilever, Shell legacy), business services" },
    { topic: "Logistics & maritime", amsterdam: "Schiphol cargo, regional logistics", rotterdam: "Europe's largest port — core specialism" },
    { topic: "Engineering", amsterdam: "Tech and infrastructure roles", rotterdam: "Maritime, civil, industrial engineering demand" },
    { topic: "English-friendly hiring", amsterdam: "Very common in tech and international firms", rotterdam: "Common in port, engineering and international teams" },
    { topic: "HSM / sponsor jobs", amsterdam: "Highest volume of sponsor employers", rotterdam: "Strong in trade, energy, engineering multinationals" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  jobsWorkedExamples: [
    { profile: "Software engineer — international offer", keyFigures: "Amsterdam €75k–€95k gross common · Rotterdam €65k–€85k", exampleMath: "€10k gross gap ≈ €400–€500/mo net — often less than €400–€600/mo rent gap", whatToConfirm: "Compare net offer, hybrid policy and rent quote together." },
    { profile: "Logistics / port economy role", keyFigures: "Rotterdam employer density higher · Amsterdam more regional HQs", exampleMath: "Sector fit may outweigh city preference — check sponsor list first", whatToConfirm: "IND sponsor status and role location before choosing city." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  jobsGuideLinks: [
    { label: "Finding jobs in the Netherlands", href: FINDING_JOBS_PATH, status: "live", description: "Job search orientation for expats." },
    { label: "Amsterdam city guide — jobs", href: AMSTERDAM_PATH, status: "live", description: "Amsterdam employers and sectors." },
    { label: "Rotterdam city guide — jobs", href: ROTTERDAM_PATH, status: "live", description: "Rotterdam employers and sectors." },
  ] satisfies AmsterdamVsRotterdamLink[],
  salaryHeading: "Salary Expectations",
  salaryParagraphs: [
    "Amsterdam roles sometimes pay 5–15% more gross for comparable international positions — but higher rent often absorbs much of the difference.",
    "Always compare net salary, housing and commute together. A lower gross offer in Rotterdam can still mean more monthly room after fixed costs.",
  ],
  salaryComparisonRows: [
    { topic: "Average salary context", amsterdam: "Often at top of NL ranges for international roles", rotterdam: "Competitive; sector-dependent premiums" },
    { topic: "Illustrative €70k gross single", amsterdam: "~€2,000/mo rough disposable after rent (planning)", rotterdam: "~€2,400/mo rough disposable after rent (planning)" },
    { topic: "Illustrative €55k gross single", amsterdam: "Tight after €1,800 rent — budget carefully", rotterdam: "More workable at €1,300 rent band" },
    { topic: "Purchasing power takeaway", amsterdam: "Higher gross ≠ always more savings", rotterdam: "Lower housing often wins on monthly margin" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  salaryWorkedExamples: [
    { profile: "€70k gross — single renter", keyFigures: "Amsterdam ~€2,000/mo after €2,000 rent vs Rotterdam ~€2,400 after €1,400 rent", exampleMath: "Same gross · ~€400/mo more spending room in Rotterdam after housing", whatToConfirm: "Run net salary calculator with your actual offer and rent quote." },
    { profile: "€90k gross — dual-income couple", keyFigures: "Amsterdam €2,400 rent · Rotterdam €1,700 rent", exampleMath: "€700/mo housing gap · salary premium may narrow but rarely erase it fully", whatToConfirm: "Model both partners' commute and net pay." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  salaryGuideLinks: [
    { label: "Average salary Netherlands", href: AVERAGE_SALARY_PATH, status: "live", description: "National salary context and benchmarks." },
    { label: "Expat salary guide", href: EXPAT_SALARY_PATH, status: "live", description: "Expat compensation patterns in the Netherlands." },
    { label: "Net salary calculator orientation", href: NET_SALARY_PATH, status: "live", description: "Gross vs net pay for planning." },
  ] satisfies AmsterdamVsRotterdamLink[],
  transportHeading: "Getting Around",
  transportParagraphs: [
    "Both cities are bike-friendly with strong public transport. Amsterdam's advantage is Schiphol proximity; Rotterdam's advantage is central rail links south through the Randstad.",
  ],
  transportComparisonRows: [
    { topic: "Cycling culture", amsterdam: "Extremely dense bike infrastructure", rotterdam: "Very bike-friendly; less canal constraint" },
    { topic: "Local transit operator", amsterdam: "GVB (metro, tram, bus)", rotterdam: "RET (metro, tram, bus)" },
    { topic: "Schiphol Airport", amsterdam: "Direct trains ~15–25 min from Centraal", rotterdam: "~25–40 min via NS; frequent connections" },
    { topic: "Rotterdam The Hague Airport", amsterdam: "Not local — use Schiphol", rotterdam: "~20–30 min to city — European routes" },
    { topic: "Intercity rail", amsterdam: "NS hub — all directions", rotterdam: "Major NS hub — fast to Utrecht, Hague, Breda" },
    { topic: "Example commute", amsterdam: "Live Amsterdam · work Zuidas — bike 15–25 min common", rotterdam: "Live Kralingen · work Centrum — bike 10–15 min; to Schiphol ~30 min train" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  transportChecklist: [
    "Test door-to-door commute to your employer before choosing a neighbourhood.",
    "If you fly weekly, compare Schiphol train times from each city at your usual departure hour.",
    "Budget ~€40/mo local transit pass plus occasional NS trips between cities.",
    "Factor bike purchase or swapfiets (~€20–€25/mo) — cycling is often fastest in both cities.",
    "Hybrid workers: Rotterdam can work well if you commute to Amsterdam 2–3 days/week via NS (~40 min).",
  ],
  transportWorkedExamples: [
    { profile: "Weekly flyer — lives in Rotterdam", keyFigures: "Rotterdam Centraal → Schiphol ~25–40 min · ~€30–€50/week in train tickets", exampleMath: "Save €300–€500/mo rent vs Amsterdam · add ~€120–€200/mo commute — still positive for many", whatToConfirm: "Peak-hour train frequency and total door-to-door time." },
    { profile: "Bike-first commuter", keyFigures: "Amsterdam inner ring 10–20 min bike · Rotterdam Kralingen–Centrum 10–15 min", exampleMath: "Both cities reward cycling — Amsterdam has more bike traffic density", whatToConfirm: "Secure bike storage at home and office." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  lifestyleHeading: "Lifestyle Differences",
  lifestyleParagraphs: [
    "Amsterdam sells historic charm and international buzz; Rotterdam sells modern urban reinvention and a more grounded daily rhythm.",
  ],
  lifestyleAmsterdamCards: [
    { title: "Canals & history", body: "UNESCO canal belt, museums and walkable historic centre — iconic but crowded in peak season." },
    { title: "International atmosphere", body: "Largest concentration of expats, global restaurants and English-default service in many sectors." },
    { title: "Tourism footprint", body: "Centre busy with visitors year-round — locals often live in outer rings." },
    { title: "Creative industries", body: "Media, design, advertising and cultural sectors cluster here." },
  ] satisfies AmsterdamVsRotterdamCard[],
  lifestyleRotterdamCards: [
    { title: "Modern architecture", body: "Erasmus Bridge, Cube Houses, Kop van Zuid — post-war rebuild identity." },
    { title: "Multicultural port city", body: "170+ nationalities — diverse food and neighbourhoods without Amsterdam tourism intensity." },
    { title: "Innovation & pragmatism", body: "Port economy drives practical, entrepreneurial culture." },
    { title: "Waterfront living", body: "Maas river and harbour areas — different vibe from canal city." },
  ] satisfies AmsterdamVsRotterdamCard[],
  nightlifeHeading: "Nightlife and Meeting People",
  nightlifeParagraphs: [
    "Amsterdam has more venues and international party tourism; Rotterdam has a strong local scene with growing creative nightlife and easier entry prices.",
  ],
  nightlifeComparisonRows: [
    { topic: "Bar & club density", amsterdam: "Very high — global nightlife reputation", rotterdam: "Strong — more local crowd, less tourist pricing" },
    { topic: "Live music & festivals", amsterdam: "Major international calendar", rotterdam: "North Sea Jazz, numerous harbour and urban festivals" },
    { topic: "Expat meetups", amsterdam: "Highest volume of international events", rotterdam: "Growing — Rotterdam International Center network" },
    { topic: "Dating & social apps", amsterdam: "Largest international dating pool", rotterdam: "Active but smaller international pool" },
    { topic: "Typical night out cost", amsterdam: "€15–€20 cocktails in centre (orientation)", rotterdam: "Often €1–€3 lower per drink (orientation)" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  nightlifeTips: [
    "Amsterdam centre venues cater to tourists — locals often socialise in Jordaan, Oost or NDSM.",
    "Rotterdam's Witte de Withstraat and Nieuwe Binnenweg offer strong local bar scenes at lower prices.",
    "International meetups (InterNations, Facebook groups) are easiest to find in Amsterdam volume-wise.",
    "Budget €40–€80 for a mid-range night out for two depending on city and neighbourhood.",
  ],
  expatCommunityHeading: "Expat Life",
  expatCommunityParagraphs: [
    "Amsterdam remains the default for expats who want maximum international infrastructure on day one. Rotterdam suits those who prefer integration with a strong international layer rather than an expat bubble.",
  ],
  expatComparisonRows: [
    { topic: "Newcomer support", amsterdam: "IN Amsterdam — broad international services", rotterdam: "Rotterdam International Center" },
    { topic: "Professional networking", amsterdam: "Largest internationals meetup scene", rotterdam: "Port, engineering and startup networks growing" },
    { topic: "Language environment", amsterdam: "English widely spoken in work and daily life", rotterdam: "English common in international firms; more Dutch in local shops" },
    { topic: "International clubs & schools", amsterdam: "Widest selection", rotterdam: "Solid options — plan early for popular schools" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  expatChecklist: [
    "Register at your municipality (gemeente) within the required window after arrival.",
    "Book BSN appointment early — slots fill quickly in both cities.",
    "Open a Dutch bank account once you have BSN and proof of address.",
    "Arrange health insurance within four months of registration if required for your situation.",
    "Join one professional network and one social group in your first month — easier in Amsterdam, still active in Rotterdam.",
  ],
  expatGuideLinks: [
    { label: "Amsterdam expat guide", href: AMSTERDAM_PATH, status: "live", description: "Registration, housing and newcomer orientation." },
    { label: "Rotterdam expat guide", href: ROTTERDAM_PATH, status: "live", description: "Registration, housing and newcomer orientation." },
    { label: "Cities hub", href: CITIES_HUB_PATH, status: "live", description: "Compare all major Dutch cities." },
  ] satisfies AmsterdamVsRotterdamLink[],
  familiesHeading: "Which City Is Better for Families?",
  familiesParagraphs: [
    "Families often choose Rotterdam for space and value, or Amsterdam for career density and international school choice — both work with planning.",
  ],
  familiesComparisonRows: [
    { topic: "International schools", amsterdam: "Most options — high demand", rotterdam: "Several IB/international schools — apply early" },
    { topic: "Family housing", amsterdam: "€2,000 – €3,500+ typical bands", rotterdam: "€1,500 – €2,800+ — often more space" },
    { topic: "Parks & activities", amsterdam: "Vondelpark, Amsterdamse Bos, museums", rotterdam: "Kralingse Bos, Blijdorp zoo, harbour walks" },
    { topic: "Childcare", amsterdam: "Long waiting lists in popular areas", rotterdam: "Still competitive — start childcare search early" },
    { topic: "Safety (general)", amsterdam: "Generally safe; bike traffic awareness", rotterdam: "Generally safe; neighbourhood variation applies" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  familyWorkedExamples: [
    { profile: "Family of 4 — international school", keyFigures: "Amsterdam €2,900 rent vs Rotterdam €2,200", exampleMath: "€700/mo housing saving in Rotterdam ≈ €8,400/yr before school fees", whatToConfirm: "School commute and place availability before choosing city." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  entrepreneursHeading: "Which City Is Better for Entrepreneurs?",
  entrepreneursParagraphs: [
    "Amsterdam attracts VC-backed startups and global tech founders; Rotterdam suits port-linked innovation, logistics ventures and founders who want lower office costs.",
  ],
  entrepreneursComparisonRows: [
    { topic: "Startup ecosystem", amsterdam: "Largest NL startup density — accelerators, angels", rotterdam: "Port innovation, cleantech, EUR ventures" },
    { topic: "Co-working costs", amsterdam: "€350 – €650/mo desk (orientation)", rotterdam: "€250 – €450/mo desk (orientation)" },
    { topic: "Funding access", amsterdam: "More VC and international investor events", rotterdam: "Corporate partnerships and port-linked grants" },
    { topic: "KvK / business setup", amsterdam: "Same national rules — address choice affects costs", rotterdam: "Same — lower office rent improves runway" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  entrepreneursWorkedExamples: [
    { profile: "Solo founder — 12-month runway", keyFigures: "Amsterdam desk €500/mo + €2,000 rent vs Rotterdam desk €350 + €1,400 rent", exampleMath: "€750/mo lower fixed costs in Rotterdam ≈ 3 extra months runway on €27k budget", whatToConfirm: "Investor and customer proximity for your sector before choosing." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  entrepreneursGuideLinks: [
    { label: "Starting a business", href: STARTING_BUSINESS_PATH, status: "live", description: "Cornerstone entrepreneurship guide for expats." },
    { label: "Freelancing Netherlands", href: FREELANCING_PATH, status: "live", description: "Freelance and ZZP orientation." },
    { label: "ZZP Netherlands", href: ZZP_PATH, status: "live", description: "Dutch self-employment framework." },
  ] satisfies AmsterdamVsRotterdamLink[],
  studentsHeading: "Student Life Comparison",
  studentsParagraphs: [
    "Amsterdam offers the largest international student social scene; Rotterdam often provides more affordable student housing and strong economics and port-related programmes.",
  ],
  studentsComparisonRows: [
    { topic: "Major universities", amsterdam: "UvA, VU, Amsterdam UMC", rotterdam: "Erasmus University Rotterdam (EUR)" },
    { topic: "Student housing pressure", amsterdam: "Very high — start search months early", rotterdam: "High but often more supply vs demand" },
    { topic: "Monthly budget (orientation)", amsterdam: "€1,200 – €1,800+ incl. rent", rotterdam: "€1,000 – €1,500+ incl. rent" },
    { topic: "Nightlife & societies", amsterdam: "Largest international student events", rotterdam: "Active EUR societies — slightly smaller scene" },
    { topic: "Graduate careers", amsterdam: "Tech, finance, consulting pipelines", rotterdam: "Economics, logistics, maritime, corporate NL" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  studentChecklist: [
    "Apply for housing 4–6 months before intake — Amsterdam pressure is highest.",
    "Budget €1,000–€1,800+/mo all-in depending on city and room type.",
    "Check university housing portals, DUWO (Amsterdam) and SSH (Rotterdam region) early.",
    "Verify visa and residence permit rules if you are a non-EU student.",
    "Join ESN or faculty societies in week one — social network matters for housing tips too.",
  ],
  studentWorkedExamples: [
    { profile: "Master's student — shared room", keyFigures: "Amsterdam €850–€1,100/mo room vs Rotterdam €650–€900", exampleMath: "€150–€250/mo saving · €1,800–€3,000/yr over a two-year programme", whatToConfirm: "Total commute to campus and part-time work options." },
  ] satisfies AmsterdamVsRotterdamWorkedExampleRow[],
  weatherHeading: "Weather and Green Space",
  weatherParagraphs: [
    "Both cities share Dutch maritime climate — mild winters, cool summers, frequent rain. Differences show up in parks, waterfronts and urban density rather than temperature.",
  ],
  weatherComparisonRows: [
    { topic: "Climate", amsterdam: "Similar NL maritime weather", rotterdam: "Similar — slightly more harbour wind" },
    { topic: "Average rain", amsterdam: "~130+ rainy days/year (orientation)", rotterdam: "~130+ rainy days/year (orientation)" },
    { topic: "Major parks", amsterdam: "Vondelpark, Amsterdamse Bos, Westerpark", rotterdam: "Kralingse Bos, Zuiderpark, Het Park" },
    { topic: "Waterfront", amsterdam: "Canals and IJ — compact historic core", rotterdam: "Maas river and harbour — wide vistas" },
    { topic: "Outdoor season", amsterdam: "Canal terraces busy Apr–Sep", rotterdam: "Harbour festivals and waterfront cafés Apr–Sep" },
    { topic: "Urban feel", amsterdam: "Compact historic core", rotterdam: "Wide modern avenues and harbour vistas" },
  ] satisfies AmsterdamVsRotterdamComparisonRow[],
  weatherTips: [
    "Weather will not decide this comparison — both share the same Dutch maritime pattern.",
    "Choose based on outdoor lifestyle: canal walks and museum density (Amsterdam) vs harbour routes and wider green spaces (Rotterdam).",
    "Invest in a good rain jacket and bike mudguards — practical in both cities year-round.",
    "Summer evenings: Amsterdam canal terraces fill quickly; Rotterdam waterfront areas feel less tourist-heavy.",
  ],
  neighborhoodsHeading: "Popular Neighborhoods",
  neighborhoodsParagraphs: [
    "Neighbourhood choice often beats city choice at the margin — compare commute, schools and rent within each city before deciding Amsterdam vs Rotterdam overall.",
  ],
  neighborhoodCards: [
    { city: "Amsterdam", name: "Zuid", vibe: "Upscale, museums, Zuidas business", audience: "Executives, families with budget", cost: "High — €2,000+ 1-bed common" },
    { city: "Amsterdam", name: "Oost", vibe: "Diverse, trendy, family-friendly pockets", audience: "Young professionals, families", cost: "Medium–high — €1,600–€2,200" },
    { city: "Amsterdam", name: "De Pijp", vibe: "Lively, restaurants, Albert Cuyp market", audience: "Social singles and couples", cost: "High — €1,700–€2,300" },
    { city: "Amsterdam", name: "Westerpark", vibe: "Creative, park access, gentrifying", audience: "Creatives, remote workers", cost: "Medium–high — €1,500–€2,100" },
    { city: "Amsterdam", name: "IJburg", vibe: "Modern waterfront, families", audience: "Families, quieter urban life", cost: "Medium–high — €1,600–€2,200" },
    { city: "Rotterdam", name: "Kralingen", vibe: "Lake, students, cafés", audience: "Students, young professionals", cost: "Medium — €1,200–€1,700" },
    { city: "Rotterdam", name: "Hillegersberg", vibe: "Suburban, leafy, family-oriented", audience: "Families", cost: "Medium–high — €1,400–€1,900" },
    { city: "Rotterdam", name: "Centrum", vibe: "Urban core, nightlife, culture", audience: "Singles, couples, short commutes", cost: "Medium–high — €1,300–€1,800" },
    { city: "Rotterdam", name: "Blijdorp", vibe: "Quiet, zoo, residential", audience: "Families", cost: "Medium — €1,200–€1,600" },
    { city: "Rotterdam", name: "Kop van Zuid", vibe: "Modern towers, Erasmus Bridge", audience: "Professionals, design lovers", cost: "Medium–high — €1,400–€1,900" },
  ] satisfies AmsterdamVsRotterdamNeighborhoodCard[],
  amsterdamBestForHeading: "Amsterdam Is Often Best For",
  amsterdamBestForParagraphs: [
    "Amsterdam fits when career density, international networks and English-default services matter more than maximising square metres per euro.",
    "Budget for higher rent and fiercer housing competition — the tradeoff is access to the Netherlands' largest international job market.",
  ],
  amsterdamBestForCards: [
    { title: "International executives", body: "Densest cluster of global HQs and senior international roles." },
    { title: "Tech professionals", body: "Scale-ups, fintech and product roles with English hiring norms." },
    { title: "Finance workers", body: "Banks, trading and fintech adjacent to Zuidas and centre." },
    { title: "Creative industries", body: "Media, advertising, design and cultural sectors." },
    { title: "Large expat networks", body: "Maximum meetups, newcomer services and international schools." },
  ] satisfies AmsterdamVsRotterdamCard[],
  rotterdamBestForHeading: "Rotterdam Is Often Best For",
  rotterdamBestForParagraphs: [
    "Rotterdam fits when housing value, modern urban life and port-linked careers matter more than Amsterdam's global city brand.",
    "You still get Randstad access — with often €300–€700/mo savings on rent and more space for families and remote workers.",
  ],
  rotterdamBestForCards: [
    { title: "Families", body: "More space per euro and strong parks — still Randstad access." },
    { title: "Entrepreneurs", body: "Lower office costs with port innovation and EUR pipelines." },
    { title: "Engineers", body: "Maritime, civil and industrial engineering demand." },
    { title: "Logistics professionals", body: "Europe's largest port economy — core career hub." },
    { title: "Budget-conscious expats", body: "Meaningful housing savings vs Amsterdam at similar lifestyle tier." },
  ] satisfies AmsterdamVsRotterdamCard[],
  decisionMatrixHeading: "Which City Fits You Best?",
  decisionMatrixParagraphs: [
    "Use this matrix as a conversation starter — employer location, partner commute or school place may override a lean either way.",
  ],
  decisionMatrixTips: [
    "Start with your persona row, then sanity-check against your actual rent quote and job offer.",
    "If Lean says Amsterdam but rent exceeds 35% of net pay, rerun the numbers for Rotterdam.",
    "If Lean says Rotterdam but your sponsor employer is Amsterdam-only, the job offer wins.",
    "Visit both cities for a long weekend if possible — lifestyle feel often confirms the spreadsheet.",
  ],
  decisionMatrixRows: [
    { persona: "Young professional (tech/finance)", amsterdam: "Strong fit — jobs & network", rotterdam: "Possible — often commute or hybrid", lean: "Amsterdam unless budget tight" },
    { persona: "Family with children", amsterdam: "Strong schools — expensive space", rotterdam: "Strong value — good family areas", lean: "Often Rotterdam on budget" },
    { persona: "Student", amsterdam: "Maximum social scene", rotterdam: "EUR + lower rent bands", lean: "Depends on programme" },
    { persona: "Entrepreneur", amsterdam: "Funding & startup density", rotterdam: "Lower costs + port innovation", lean: "Split by sector" },
    { persona: "Remote worker", amsterdam: "Premium for lifestyle", rotterdam: "Better space per euro", lean: "Often Rotterdam" },
    { persona: "Retiree / slow mover", amsterdam: "Culture & healthcare access", rotterdam: "Waterfront calm, lower housing", lean: "Personal taste" },
    { persona: "Highly skilled migrant", amsterdam: "Most sponsor employers", rotterdam: "Strong in trade/engineering", lean: "Job offer first" },
  ] satisfies AmsterdamVsRotterdamDecisionRow[],
  faq: [
    { q: "Is Amsterdam better than Rotterdam?", a: "Neither is universally better. Amsterdam leads on international jobs, expat infrastructure and nightlife density; Rotterdam often wins on housing value, space and a less tourist-heavy daily life. Match the city to your budget, sector and lifestyle." },
    { q: "Which city is cheaper?", a: "Rotterdam is generally more affordable for rent — typical 1-bed bands around €1,000–€1,800+ vs Amsterdam €1,400–€2,200+. Groceries, insurance and transport are broadly similar across both cities." },
    { q: "Which city has more jobs?", a: "Amsterdam has more international corporate, tech and finance roles overall. Rotterdam leads for logistics, maritime, engineering and port-linked careers. Check your sector before choosing." },
    { q: "Which city is better for families?", a: "Many families choose Rotterdam for space and value; Amsterdam for maximum international school choice and career density. Both require early housing and childcare planning." },
    { q: "Which city is more international?", a: "Amsterdam has the largest expat population and newcomer services (IN Amsterdam). Rotterdam is increasingly international via Rotterdam International Center and global port employers." },
    { q: "Which city has better housing?", a: "Rotterdam usually offers more space per euro and less extreme competition. Amsterdam offers more neighbourhood variety within a global city brand — at higher cost." },
    { q: "Which city has better nightlife?", a: "Amsterdam has more venues and international nightlife tourism. Rotterdam has a strong local scene, major festivals and often lower drink prices." },
    { q: "Which city is better for expats?", a: "First-time expats often find Amsterdam easier due to volume of English services and meetups. Expats seeking value and a local feel frequently prefer Rotterdam after comparing rent and commute." },
  ],
  relatedGuides: [
    { label: "Amsterdam expat guide", href: AMSTERDAM_PATH, status: "live", description: "Registration, housing, transport and neighbourhoods." },
    { label: "Rotterdam expat guide", href: ROTTERDAM_PATH, status: "live", description: "Registration, housing, transport and neighbourhoods." },
    { label: "Cities hub", href: CITIES_HUB_PATH, status: "live", description: "Compare all major Dutch cities." },
    { label: "Housing hub", href: HOUSING_HUB_PATH, status: "live", description: "Renting and buying orientation." },
    { label: "Finding jobs", href: FINDING_JOBS_PATH, status: "live", description: "Job search for expats." },
    { label: "Average salary Netherlands", href: AVERAGE_SALARY_PATH, status: "live", description: "Salary benchmarks and context." },
  ] satisfies AmsterdamVsRotterdamLink[],
  exploreNextCards: [
    { label: "Amsterdam vs Utrecht", href: CITIES_COMPARE_HUB_PATH, status: "comingSoon", description: "Coming soon — compare capital region with central Randstad hub." },
    { label: "Amsterdam vs The Hague", href: CITIES_COMPARE_HUB_PATH, status: "comingSoon", description: "Coming soon — international institutions vs startup capital." },
    { label: "Rotterdam vs The Hague", href: CITIES_COMPARE_HUB_PATH, status: "comingSoon", description: "Coming soon — port city vs diplomatic centre." },
    { label: "Utrecht vs Eindhoven", href: CITIES_COMPARE_HUB_PATH, status: "comingSoon", description: "Coming soon — central hub vs Brainport tech." },
    { label: "Amsterdam vs Eindhoven", href: CITIES_COMPARE_HUB_PATH, status: "comingSoon", description: "Coming soon — corporate capital vs deep tech." },
    { label: "City comparison tool", href: CITY_COMPARISON_TOOL_PATH, status: "live", description: "Rank 2–4 cities with your budget and priorities." },
  ] satisfies AmsterdamVsRotterdamLink[],
  dataNote:
    "Rent bands and budget examples are indicative planning ranges from ExpatLife city hub data and CBS/Business.gov.nl context — not live listings or official fee schedules. Verify before relocating.",
} as const;

export type AmsterdamVsRotterdamPage = typeof amsterdamVsRotterdamPage;
