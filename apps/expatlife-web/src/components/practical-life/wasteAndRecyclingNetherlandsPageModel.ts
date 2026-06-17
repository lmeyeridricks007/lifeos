export const WASTE_AND_RECYCLING_NETHERLANDS_PATH =
  "/netherlands/practical-life/waste-and-recycling-netherlands/" as const;

export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const UTILITIES_NETHERLANDS_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands/" as const;

export type PracticalLifeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type RecyclingCategory = {
  title: string;
  body: string;
  examples: readonly string[];
  avoid: string;
};

export type WasteCityCard = {
  city: string;
  population: string;
  href: string;
  website: string;
  collectionApproach: string;
  recyclingEmphasis: string;
};

export type MunicipalityWasteDirectoryEntry = {
  municipality: string;
  wasteInformation: string;
  recyclingServices: string;
  website: string;
  href: string;
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-waste-recycling-${slug}-${version}.png`,
  alt,
  caption,
});

export const wasteAndRecyclingNetherlandsPage = {
  slug: "waste-and-recycling-netherlands",
  path: WASTE_AND_RECYCLING_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: MUNICIPALITY_SERVICES_PATH,
  publish: true,
  publishDate: "2026-10-15",
  seo: {
    title: "Waste and Recycling in the Netherlands | Complete Expat Guide",
    description:
      "Learn how waste collection and recycling work in the Netherlands, including recycling categories, garbage collection schedules, recycling centers and practical tips for expats.",
    keywords: [
      "waste netherlands",
      "recycling netherlands",
      "garbage collection netherlands",
      "recycling for expats netherlands",
      "waste collection netherlands",
      "recycling bins netherlands",
      "underground containers netherlands",
      "municipality waste netherlands",
      "afval scheiden netherlands",
      "recycling centers netherlands",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Waste and Recycling in the Netherlands",
    subtitle:
      "Learn how Dutch waste collection and recycling systems work, including household waste, recycling categories, collection schedules and sustainability practices.",
    primaryCta: { label: "Understand Waste Collection", href: "#intro" },
    secondaryCta: { label: "Explore Municipality Services", href: MUNICIPALITY_SERVICES_PATH },
    image: {
      src: "/images/heroes/netherlands-waste-recycling-hero-v2.png",
      alt: "Photorealistic scene of an international couple on a bright Dutch canal-side street sorting recycling at a modern underground waste container — one placing a glass bottle in the glass slot while the other holds flattened cardboard, with brick townhouses, bicycles and tree-lined pavement in the background.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#essentials", label: "Essentials" },
    { href: "#understanding", label: "Systems" },
    { href: "#categories", label: "Categories" },
    { href: "#underground", label: "Containers" },
    { href: "#household", label: "Household" },
    { href: "#glass", label: "Glass" },
    { href: "#paper", label: "Paper" },
    { href: "#plastic", label: "Plastic" },
    { href: "#organic", label: "GFT" },
    { href: "#recycling-centers", label: "Centers" },
    { href: "#electronics", label: "Electronics" },
    { href: "#cities", label: "Cities" },
    { href: "#sustainability", label: "Culture" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#municipality-directory", label: "Directory" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v2",
      "Premium infographic overview of Dutch waste collection and recycling for expats.",
      "Municipalities manage household waste, recycling streams and sustainability expectations."
    ),
    snapshot: visual(
      "snapshot",
      "premium-v2",
      "Premium infographic snapshot of waste and recycling essentials in the Netherlands.",
      "Sorting rules, collection schedules and local gemeente systems vary by city."
    ),
    understanding: visual(
      "understanding",
      "premium-v2",
      "Premium infographic explaining how Dutch waste collection systems work.",
      "Municipalities organize household waste, recycling, centers and special collections."
    ),
    categories: visual(
      "categories",
      "premium-v2",
      "Premium infographic of common Dutch recycling categories for newcomers.",
      "General waste, paper, glass, plastic, organic GFT, textiles, electronics and batteries."
    ),
    underground: visual(
      "underground",
      "premium-v2",
      "Premium infographic explaining underground waste containers in Dutch cities.",
      "Access cards, neighborhood containers and urban collection systems."
    ),
    household: visual(
      "household",
      "premium-v2",
      "Premium infographic of general household waste collection in the Netherlands.",
      "Curbside, underground and apartment systems with municipality schedules."
    ),
    glass: visual(
      "glass",
      "premium-v2",
      "Premium infographic explaining glass recycling in Dutch neighborhoods.",
      "Bottle banks, jar recycling and color sorting where applicable."
    ),
    paper: visual(
      "paper",
      "premium-v2",
      "Premium infographic explaining paper and cardboard recycling in the Netherlands.",
      "Newspapers, packaging and flattened cardboard in separate streams."
    ),
    plastic: visual(
      "plastic",
      "premium-v2",
      "Premium infographic explaining plastic waste collection in the Netherlands.",
      "Packaging rules vary by municipality — verify local plastic streams."
    ),
    organic: visual(
      "organic",
      "premium-v2",
      "Premium infographic explaining organic GFT waste collection in the Netherlands.",
      "Food scraps, garden waste and compostable materials where offered."
    ),
    recyclingCenters: visual(
      "recycling-centers",
      "premium-v2",
      "Premium infographic explaining milieustraat recycling centers in the Netherlands.",
      "Furniture, appliances, renovation waste and bulky items at gemeente centers."
    ),
    electronics: visual(
      "electronics",
      "premium-v2",
      "Premium infographic explaining electronic waste and battery disposal in the Netherlands.",
      "Retailer take-back, collection points and separate battery streams."
    ),
    cities: visual(
      "cities",
      "premium-v2",
      "Premium infographic map of major Dutch city waste and recycling systems.",
      "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven differ in approach."
    ),
    sustainability: visual(
      "sustainability",
      "premium-v2",
      "Premium infographic explaining Dutch sustainability and recycling culture.",
      "Circular economy habits, waste reduction and environmental awareness."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Premium infographic of common waste and recycling mistakes expats make.",
      "Mixed streams, missed schedules and incorrect container use."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Premium infographic checklist for waste and recycling after moving to the Netherlands.",
      "Learn rules, locate containers, save schedules and bookmark gemeente resources."
    ),
    municipalityDirectory: visual(
      "municipality-directory",
      "premium-v2",
      "Premium infographic directory of municipality waste resources in the Netherlands.",
      "Official waste information portals for major Dutch cities."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing waste and recycling FAQ answers for expats.",
      "Collection methods, GFT, underground containers and city differences."
    ),
    sources: visual(
      "sources",
      "premium-v2",
      "Premium infographic showing official waste and recycling resources in the Netherlands.",
      "Government.nl, Rijksoverheid and municipality websites for local rules."
    ),
    relatedGuides: visual(
      "related-guides",
      "premium-v2",
      "Premium infographic connecting waste guide to municipality, utilities and housing guides.",
      "Continue into broader practical-life and relocation setup."
    ),
    exploreNext: visual(
      "explore-next",
      "premium-v2",
      "Premium infographic explore-next cards after waste and recycling orientation.",
      "Municipality services, utilities, housing, address registration and moving hub."
    ),
  },
  intro: {
    heading: "How Waste Collection Works",
    paragraphs: [
      "Waste collection and recycling in the Netherlands are primarily managed by your municipality (gemeente). Rules for sorting, containers, collection days and recycling centers depend on your address — not on one national system.",
      "Most newcomers quickly learn that Dutch households separate waste into several streams: general rubbish, paper, glass, plastic packaging and often organic waste (GFT). Urban areas frequently use underground containers; suburban areas may use curbside bins or bags.",
      "This guide explains everyday waste systems in practical terms for expats, students and families. Always verify current rules on your gemeente website — local requirements can change and differ significantly between cities.",
    ],
  },
  quickAnswer: {
    summary: "Most municipalities provide separate systems for household waste, paper, glass, plastic and organic waste.",
    bullets: [
      "Collection methods and container types vary by city and neighborhood.",
      "Underground containers with access cards are common in dense urban areas.",
      "Recycling centers (milieustraat) handle furniture, appliances and bulky items.",
      "Incorrect sorting or missed collection days can lead to fines in some municipalities.",
    ],
    note: "Waste rules are set locally — bookmark your gemeente waste portal after registering your address.",
  },
  snapshotCards: [
    { title: "Municipalities manage waste systems", body: "Your gemeente sets sorting rules, collection schedules, container locations and recycling center access." },
    { title: "Recycling is widely encouraged", body: "Separating paper, glass, plastic and organic waste is normal in Dutch daily life." },
    { title: "Rules vary by city", body: "Amsterdam, Rotterdam and smaller gemeenten use different container types and calendars." },
    { title: "Underground containers are common", body: "Many neighborhoods use below-street bins accessed with a pass or card." },
    { title: "Recycling centers exist for large items", body: "Milieustraat locations accept furniture, appliances and renovation waste." },
    { title: "Collection schedules matter", body: "Save your afvalkalender or use apps like Afvalwijzer after move-in." },
  ] satisfies TipCard[],
  essentialsSection: {
    heading: "Waste and Recycling at a Glance",
    paragraphs: [
      "Use these essentials to orient yourself in the first week after moving. Then open your municipality waste page for the authoritative rules at your postcode.",
    ],
    essentialsFacts: [
      "Waste tax (afvalstoffenheffing) is a common municipal charge — separate from how you sort bins.",
      "Apartment buildings (VvE) may have shared rules that differ from single-family homes on the same street.",
      "Glass, paper and plastic usually go in separate streams — never assume one mixed recycling bin.",
      "Bulky waste on the street without a gemeente appointment can lead to fines or removal charges.",
      "Electronics and batteries have dedicated drop-off points — do not put them in general waste.",
    ],
    usefulApps: [
      { name: "Afvalwijzer", detail: "Postcode-based collection reminders used by many Dutch municipalities." },
      { name: "Gemeente waste portal", detail: "Authoritative sorting guides, container maps and milieustraat hours." },
      { name: "Supermarket statiegeld machines", detail: "Return deposit bottles and cans — separate from household recycling bins." },
      { name: "Municipality apps", detail: "Amsterdam, Rotterdam and other cities offer container reporting and calendars in-app." },
    ],
  },
  understanding: {
    heading: "How Waste Collection Works",
    paragraphs: [
      "Dutch municipalities typically organize household waste collection, recycling infrastructure, recycling centers (milieustraat) and occasional special collections for items like Christmas trees or hazardous waste.",
      "Urban areas often rely on underground containers and waste passes to limit street clutter. Suburban and rural areas may use wheelie bins, collection bags or neighborhood container hubs with fixed pickup days.",
      "Your registered address determines which rules apply. After address registration, look up your waste calendar and learn whether your building uses shared containers, individual bins or a pay-as-you-throw system.",
    ],
    systemPoints: [
      "National policy sets recycling targets; municipalities implement local collection systems.",
      "Waste collection is linked to your postcode — rules can change when you move neighborhoods.",
      "Some cities use weight-based or bag-based systems for residual waste to encourage recycling.",
      "Gemeente websites and apps (e.g. Afvalwijzer) are the best source for collection dates.",
    ],
    systemComparison: [
      { area: "Dense urban (Amsterdam, Rotterdam)", containers: "Underground hubs with waste pass", schedule: "Often no curbside residual pickup", expatTip: "Find your nearest container map on day one." },
      { area: "Suburban neighborhoods", containers: "Wheelie bins or above-ground hubs", schedule: "Fixed curbside days on afvalkalender", expatTip: "Confirm evening-before vs morning set-out rules." },
      { area: "Apartment buildings", containers: "Shared chutes or basement rooms", schedule: "Building rules may override street containers", expatTip: "Ask landlord or VvE for sorting instructions at handover." },
      { area: "Pay-as-you-throw gemeenten", containers: "Official bags or weight-based residual", schedule: "Recycling often free; residual costs per bag/kg", expatTip: "Separating GFT and recyclables can lower your bill." },
    ],
  },
  recyclingCategories: [
    {
      title: "General Waste",
      body: "Non-recyclable household rubbish that cannot go in other streams.",
      examples: ["Plastic-lined food wrappers", "Dirty tissues", "Broken mixed-material items", "Ceramics and porcelain"],
      avoid: "Do not put recyclables, electronics or hazardous items in general waste.",
    },
    {
      title: "Paper & Cardboard",
      body: "Clean, dry paper and cardboard for separate collection or drop-off.",
      examples: ["Newspapers and magazines", "Flattened delivery boxes", "Office paper", "Clean cardboard packaging"],
      avoid: "Greasy pizza boxes, wax-coated paper and wet cardboard belong elsewhere.",
    },
    {
      title: "Glass",
      body: "Bottles and jars — often sorted by color at neighborhood bottle banks.",
      examples: ["Wine and beer bottles", "Jam and sauce jars", "Clear, green and brown glass where separated"],
      avoid: "No window glass, mirrors, light bulbs or ceramics in glass containers.",
    },
    {
      title: "Plastic",
      body: "Plastic packaging — rules vary; some cities use bags, others use containers.",
      examples: ["Food packaging", "Shampoo bottles", "Plastic trays and films where accepted locally"],
      avoid: "Hard plastics, toys and non-packaging items may need milieustraat drop-off.",
    },
    {
      title: "Organic Waste (GFT)",
      body: "Food and garden waste collected for composting where municipalities offer GFT.",
      examples: ["Fruit and vegetable peels", "Coffee grounds", "Garden clippings", "Eggshells"],
      avoid: "No plastic bags (unless certified compostable locally), pet waste or cooking oil in GFT.",
    },
    {
      title: "Textiles",
      body: "Clothing and fabrics via dedicated containers or charity collection points.",
      examples: ["Wearable clothing", "Shoes in pairs", "Clean bedding and towels"],
      avoid: "Wet, heavily soiled or non-textile items do not belong in textile bins.",
    },
    {
      title: "Electronics",
      body: "E-waste via retailers, gemeente points or recycling centers — never in household bins.",
      examples: ["Small appliances", "Cables and chargers", "Old phones and tablets", "Lamps and gadgets"],
      avoid: "Do not discard electronics in general waste or mixed recycling streams.",
    },
    {
      title: "Batteries",
      body: "Separate collection at supermarkets, retailers and gemeente drop-off points.",
      examples: ["AA and AAA batteries", "Button cells", "Rechargeable battery packs where accepted"],
      avoid: "Never put batteries in general waste — fire risk and environmental harm.",
    },
  ] satisfies RecyclingCategory[],
  categoriesSection: {
    heading: "Common Recycling Categories",
    paragraphs: [
      "Separate household waste into the streams your municipality collects. Rules for plastic, textiles and organic waste vary by gemeente — verify your local sorting guide.",
    ],
    specialStreamNotes: [
      "Textiles: use dedicated clothing containers — shoes in pairs, clean and dry only.",
      "Batteries: drop at supermarkets, hardware stores or gemeente points — never general waste.",
      "Statiegeld bottles: return at supermarket machines, not in glass or plastic streams.",
      "Bulky items: book gemeente pickup or visit milieustraat — never leave on the street unbooked.",
      "Hazardous waste: paint, chemicals and asbestos-related materials need special gemeente handling.",
    ],
  },
  underground: {
    heading: "Underground Waste Containers",
    paragraphs: [
      "Many Dutch cities use underground waste containers to keep streets clean and reduce odor. Residents access them with a waste pass, RFID card or building key depending on the municipality.",
      "Containers are usually shared by a street or block. Each container is dedicated to a specific stream — mixing waste in the wrong underground slot can block collection or trigger fines.",
      "Check your gemeente map for container locations near your home and learn which pass opens which bin.",
    ],
    cityExamples: [
      { city: "Amsterdam", note: "Widespread underground systems with AFVALpas; dense neighborhoods use color-coded container hubs." },
      { city: "Rotterdam", note: "Mix of underground and above-ground containers; check rotterdam.nl/afval for local maps." },
      { city: "The Hague", note: "Underground containers in many districts; collection rules tied to address registration." },
      { city: "Utrecht", note: "Underground residual and organic systems common; verify container access after move-in." },
    ],
    accessTips: [
      "Activate or collect your waste pass after registering your address.",
      "Learn which container accepts residual waste versus organic (GFT) streams.",
      "Report full or broken containers via your gemeente app or website.",
      "Apartment residents should confirm VvE rules for shared underground access.",
    ],
  },
  household: {
    heading: "General Household Waste",
    paragraphs: [
      "Residual household waste is what remains after you separate recyclables and organic material. How it is collected depends on your municipality: curbside wheelie bins, underground containers, collection bags or pay-as-you-throw systems.",
      "Collection frequency varies — some areas pick up weekly, others every two weeks. Missing your collection window often means storing waste longer or finding an alternative drop-off point.",
    ],
    collectionMethods: [
      { method: "Curbside collection", detail: "Place approved bin or bag at the curb on scheduled days — times vary by street." },
      { method: "Underground systems", detail: "Use your pass at neighborhood containers; no curbside pickup for residual waste." },
      { method: "Apartment systems", detail: "Shared chutes or container rooms managed by VvE — ask your landlord for rules." },
      { method: "Pay-as-you-throw", detail: "Some gemeenten sell official bags or charge by weight to encourage recycling." },
    ],
    scheduleTips: [
      "Download your afvalkalender immediately after move-in.",
      "Set phone reminders for evening-before or early-morning collection rules.",
      "Check holiday schedule changes — collections often shift around public holidays.",
    ],
  },
  glass: {
    heading: "Glass Recycling",
    paragraphs: [
      "Glass recycling in the Netherlands usually happens at neighborhood bottle banks (glasbak). Many locations ask you to separate clear, green and brown glass; others use a single mixed glass container.",
      "Rinse bottles and jars lightly and remove lids where required. Bottle banks fill quickly in dense areas — plan drop-offs regularly rather than storing large amounts at home.",
    ],
    glassExamples: [
      "Wine, beer and soda bottles",
      "Jam, sauce and condiment jars",
      "Clear, green and brown glass where color separation is required",
    ],
    glassAvoid: "Drinking glasses, mirrors, window panes, light bulbs, ceramics and Pyrex do not belong in glasbak containers.",
    glassTips: [
      "Remove metal lids and corks unless your local rules say otherwise.",
      "Never put drinking glasses, window panes or ceramics in glass banks.",
      "Broken glass should be wrapped safely and disposed according to local guidance.",
    ],
  },
  paper: {
    heading: "Paper Recycling",
    paragraphs: [
      "Paper and cardboard are among the easiest streams for newcomers to adopt. Flatten boxes, remove plastic tape and keep material dry before placing it in paper containers or tying bundles for collection.",
      "Large volumes from moving — especially delivery boxes — should be broken down promptly to avoid clutter in shared hallways or container areas.",
    ],
    paperExamples: [
      "Newspapers, magazines and junk mail",
      "Flattened moving boxes and shipping cartons",
      "Clean cereal boxes and paper packaging",
      "Envelopes and office paper without plastic windows where rules allow",
    ],
    paperAvoid: "Greasy pizza boxes, wax-coated paper, wet cardboard and plastic-lined cartons belong in general waste or plastic streams per local rules.",
  },
  plastic: {
    heading: "Plastic Waste",
    paragraphs: [
      "Plastic packaging collection varies significantly by municipality. Some areas use dedicated plastic containers or bags; others collect plastic together with other packaging materials (PMD-style streams).",
      "Check whether your gemeente accepts all plastic packaging or only specific types. When in doubt, use the milieustraat or consult your waste calendar rather than contaminating a recycling stream.",
    ],
    plasticComparison: [
      { stream: "Separate plastic container", accepted: "Hard packaging, bottles, trays where listed locally", notAccepted: "Soft films, toys, garden plastics unless specified" },
      { stream: "PMD combined packaging", accepted: "Plastic, metal and drink cartons in one stream", notAccepted: "Glass, organic waste and residual rubbish" },
      { stream: "Plastic bag collection", accepted: "Designated bags from gemeente or supermarket", notAccepted: "Loose plastic without approved bag in bag-based systems" },
    ],
    plasticTips: [
      "Rinse food residue from packaging before recycling.",
      "Soft plastics and films may not be accepted everywhere.",
      "Hard plastic items like toys often need separate drop-off at recycling centers.",
    ],
  },
  organic: {
    heading: "Organic Waste and Food Scraps",
    paragraphs: [
      "Many municipalities collect organic waste (GFT — groente-, fruit- en tuinafval) for composting or anaerobic digestion. Separate bins or underground containers are common in houses; apartments may have limited GFT access.",
      "Separating food waste reduces residual rubbish volume and supports Dutch sustainability targets. Garden waste may follow the same stream or have seasonal collection rules.",
    ],
    gftExamples: [
      "Fruit and vegetable peels, cores and scraps",
      "Coffee grounds and tea bags without staples",
      "Eggshells and bread crusts",
      "Garden clippings and houseplant trimmings where GFT is offered",
    ],
    gftAvoid: "Plastic bags (unless certified compostable locally), pet waste, cooking oil, diapers and non-organic packaging.",
    organicBenefits: [
      "Lowers general waste volume and can reduce pay-as-you-throw costs.",
      "Supports municipal composting and energy recovery programs.",
      "Encourages mindful food planning and less household waste overall.",
    ],
    organicTips: [
      "Use a small kitchen caddy and empty it every one to two days to avoid odor.",
      "Line bins with newspaper or approved compostable bags only if your gemeente allows.",
      "Freeze smelly scraps temporarily if collection is less frequent in your area.",
    ],
  },
  recyclingCenters: {
    heading: "Recycling Centers (Milieustraat)",
    paragraphs: [
      "Recycling centers (milieustraat) are gemeente facilities where residents drop off items too large or specialized for curbside collection: furniture, mattresses, appliances, garden waste, construction debris and hazardous materials.",
      "Access usually requires proof of residence in the municipality. Some centers require online booking or charge fees for certain waste types such as renovation debris or asbestos-related materials.",
    ],
    centerItems: [
      { title: "Furniture", body: "Sofas, tables, chairs and beds — often free drop-off for residents." },
      { title: "Appliances", body: "Washers, fridges and ovens — may need separate electrical waste handling." },
      { title: "Renovation waste", body: "Rubble, tiles and wood — fees and booking rules vary by gemeente." },
      { title: "Garden waste", body: "Branches and green waste — seasonal hours at many locations." },
    ],
    accessRequirements: [
      "Bring ID or waste pass linked to your registered address.",
      "Check opening hours and whether trailers or vans need advance registration.",
      "Book bulky-waste collection if you cannot transport items yourself.",
    ],
    bulkyWasteTips: [
      "Sofas, mattresses and large furniture usually need pickup booking or milieustraat drop-off.",
      "Leave bulky items on the street only on the booked collection day.",
      "Disassemble large items when possible to reduce transport difficulty.",
      "Renovation debris often incurs fees — check weight and material rules online first.",
    ],
  },
  electronics: {
    heading: "Electronic Waste",
    paragraphs: [
      "Electronic waste (e-waste) must not go in household bins. Dutch law requires retailers to accept old devices when you buy replacements, and municipalities provide drop-off points for small and large electronics.",
      "Batteries are collected separately at supermarkets, hardware stores and gemeente locations due to fire and environmental risks.",
    ],
    electronicsExamples: [
      "Phones, tablets and laptops",
      "Cables, chargers and power adapters",
      "Small kitchen appliances and lamps",
      "Fridges, washers and TVs at milieustraat",
    ],
    batteryTips: [
      "Tape terminals on lithium batteries before drop-off where possible.",
      "Button cells from watches and hearing aids go in battery boxes, not general waste.",
      "Rechargeable tool batteries may have separate retailer collection points.",
      "Never discard batteries in underground containers or household bins.",
    ],
    electronicsChannels: [
      { title: "Retailer take-back", body: "Shops often accept old appliances when purchasing replacements." },
      { title: "Gemeente collection points", body: "Small electronics bins at recycling centers and some neighborhood hubs." },
      { title: "Battery drop-off", body: "Supermarkets and electronics stores often have battery collection boxes." },
      { title: "Milieustraat", body: "Larger items like TVs, fridges and computers go to recycling centers." },
    ],
  },
  cityCards: [
    {
      city: "Amsterdam",
      population: "~920,000",
      href: "/netherlands/amsterdam/",
      website: "https://www.amsterdam.nl/afval/",
      collectionApproach: "Underground containers and AFVALpas system across most districts.",
      recyclingEmphasis: "Strong separation culture; check amsterdam.nl for container maps and calendars.",
    },
    {
      city: "Rotterdam",
      population: "~670,000",
      href: "/netherlands/rotterdam/",
      website: "https://www.rotterdam.nl/afval-en-grondstoffen",
      collectionApproach: "Mix of underground and above-ground containers by neighborhood.",
      recyclingEmphasis: "Rotterdam.nl waste portal with postcode-specific collection information.",
    },
    {
      city: "The Hague",
      population: "~560,000",
      href: "/netherlands/the-hague/",
      website: "https://www.denhaag.nl/afval/",
      collectionApproach: "Underground systems common; address-linked waste pass after registration.",
      recyclingEmphasis: "Denhaag.nl provides sorting guides and collection schedules in English.",
    },
    {
      city: "Utrecht",
      population: "~370,000",
      href: "/netherlands/utrecht/",
      website: "https://www.utrecht.nl/wonen-leven/afval/",
      collectionApproach: "Underground residual and organic containers in many areas.",
      recyclingEmphasis: "Utrecht.nl waste pages with neighborhood container locations.",
    },
    {
      city: "Eindhoven",
      population: "~250,000",
      href: "/netherlands/eindhoven/",
      website: "https://www.eindhoven.nl/afval",
      collectionApproach: "Container hubs and curbside systems depending on district.",
      recyclingEmphasis: "Eindhoven.nl afval section for local sorting and milieustraat access.",
    },
  ] satisfies WasteCityCard[],
  cityComparison: [
    { city: "Amsterdam", containerType: "Underground AFVALpas hubs", organic: "Separate underground GFT in many districts", expatResource: "amsterdam.nl/afval — container map and calendar" },
    { city: "Rotterdam", containerType: "Mix of underground and above-ground", organic: "District-specific GFT rules", expatResource: "rotterdam.nl/afval-en-grondstoffen" },
    { city: "The Hague", containerType: "Underground with address-linked pass", organic: "GFT containers in many neighborhoods", expatResource: "denhaag.nl/afval — English summaries available" },
    { city: "Utrecht", containerType: "Underground residual and organic", organic: "Strong GFT separation in many areas", expatResource: "utrecht.nl/wonen-leven/afval" },
    { city: "Eindhoven", containerType: "Container hubs and curbside mix", organic: "Check district for GFT availability", expatResource: "eindhoven.nl/afval" },
  ],
  citiesSection: {
    heading: "Major City Waste Systems",
    paragraphs: [
      "Collection approaches and recycling emphasis differ between Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven. Open your city guide alongside your gemeente waste portal.",
    ],
  },
  sustainability: {
    heading: "Dutch Sustainability Culture",
    paragraphs: [
      "The Netherlands has a strong culture of waste separation and environmental awareness. Recycling is part of everyday life — neighbors notice when bins are used incorrectly, and municipalities invest in circular economy programs.",
      "Many households reduce waste through reusable shopping bags, bottle deposit (statiegeld) returns, second-hand markets and repair cafes. Understanding local systems helps you participate rather than stand out for the wrong reasons.",
    ],
    culturePoints: [
      { title: "Recycling habits", body: "Separating streams at home is expected, not optional, in most neighborhoods." },
      { title: "Environmental awareness", body: "Schools, workplaces and media reinforce waste reduction and sorting norms." },
      { title: "Circular economy", body: "Deposit schemes, repair initiatives and material recovery are widely promoted." },
      { title: "Reducing waste", body: "Buying less packaging and composting organic waste lowers household volume." },
    ] satisfies TipCard[],
    statiegeldTips: [
      "Look for the statiegeld symbol on bottles and cans sold in supermarkets.",
      "Return empties at reverse-vending machines — refunds are added to your receipt or card.",
      "Deposit items are separate from glass banks and plastic packaging streams.",
      "Crush cans only if your local machine instructions allow it.",
    ],
  },
  checklist: [
    "Learn municipality waste rules for your postcode",
    "Locate recycling containers near your home",
    "Understand collection schedules and save your calendar",
    "Locate the nearest milieustraat (recycling center)",
    "Learn recycling categories for your gemeente",
    "Dispose of moving packaging correctly after arrival",
    "Understand bulky waste booking procedures",
    "Bookmark municipality waste resources and apps",
  ],
  commonMistakes: [
    { title: "Mixing recycling categories", body: "Contaminated streams can cause entire loads to be rejected." },
    { title: "Ignoring municipality schedules", body: "Missed collection days leave waste stored at home or on the street." },
    { title: "Leaving waste outside containers", body: "Side waste is often fined and creates neighborhood complaints." },
    { title: "Incorrect use of glass containers", body: "Ceramics and window glass break sorting equipment — use milieustraat." },
    { title: "Ignoring recycling center options", body: "Large items left on the street instead of milieustraat drop-off." },
    { title: "Not checking local rules", body: "Assuming your previous city’s system applies in your new gemeente." },
    { title: "Missing collection days after moving", body: "First weeks are busy — set calendar reminders immediately." },
    { title: "Disposing electronics incorrectly", body: "E-waste and batteries require dedicated drop-off — never general bins." },
  ] satisfies TipCard[],
  municipalityDirectory: [
    {
      municipality: "Amsterdam",
      wasteInformation: "AFVALpas, underground containers and postcode calendars",
      recyclingServices: "Milieustraat locations and bulky waste booking",
      website: "https://www.amsterdam.nl/afval/",
      href: "/netherlands/amsterdam/",
    },
    {
      municipality: "Rotterdam",
      wasteInformation: "Afval en grondstoffen portal with sorting guides",
      recyclingServices: "Recycling centers and container maps by district",
      website: "https://www.rotterdam.nl/afval-en-grondstoffen",
      href: "/netherlands/rotterdam/",
    },
    {
      municipality: "The Hague",
      wasteInformation: "Address-linked waste pass and collection calendar",
      recyclingServices: "Milieustraat and bulky waste collection",
      website: "https://www.denhaag.nl/afval/",
      href: "/netherlands/the-hague/",
    },
    {
      municipality: "Utrecht",
      wasteInformation: "Waste and recycling pages with container finder",
      recyclingServices: "Milieustraat access for residents",
      website: "https://www.utrecht.nl/wonen-leven/afval/",
      href: "/netherlands/utrecht/",
    },
    {
      municipality: "Eindhoven",
      wasteInformation: "Local afval sorting rules and collection schedule",
      recyclingServices: "Recycling center and container hub network",
      website: "https://www.eindhoven.nl/afval",
      href: "/netherlands/eindhoven/",
    },
    {
      municipality: "Groningen",
      wasteInformation: "Gemeente waste calendar and sorting guidance",
      recyclingServices: "Milieustraat for bulky and special waste",
      website: "https://www.gemeente.groningen.nl/afval",
      href: "/netherlands/groningen/",
    },
  ] satisfies MunicipalityWasteDirectoryEntry[],
  municipalityDirectorySection: {
    heading: "Municipality Waste Resources",
    paragraphs: [
      "Official waste information portals for major Dutch cities. Always verify postcode-specific rules on your gemeente website.",
    ],
  },
  faqs: [
    {
      q: "How does garbage collection work in the Netherlands?",
      a: "Your municipality sets collection methods — underground containers, curbside bins or bag systems. After registering your address, look up your waste calendar on the gemeente website for collection days and sorting rules.",
    },
    {
      q: "What can I recycle?",
      a: "Common streams include paper, glass, plastic packaging and organic waste (GFT). Exact categories depend on your municipality. General waste is for items that cannot be recycled locally.",
    },
    {
      q: "What are underground containers?",
      a: "Below-street waste bins accessed with a pass or card, common in Dutch cities. Each container accepts a specific waste stream — use the correct slot for residual, organic or other types.",
    },
    {
      q: "How do recycling centers work?",
      a: "Milieustraat facilities accept furniture, appliances, garden waste and other large items. Residents usually need proof of address. Some materials require booking or fees.",
    },
    {
      q: "Can I recycle electronics?",
      a: "Yes — via retailers, gemeente drop-off points and milieustraat locations. Never put electronics or batteries in household waste bins.",
    },
    {
      q: "What is GFT waste?",
      a: "GFT (groente-, fruit- en tuinafval) is organic waste — food scraps and garden clippings collected separately for composting where your municipality offers it.",
    },
    {
      q: "Do waste rules vary by city?",
      a: "Yes — container types, collection days and sorting rules differ by gemeente and often by neighborhood. Always check your local waste portal.",
    },
    {
      q: "What happens with bulky waste?",
      a: "Large items like sofas and mattresses usually require a gemeente pickup appointment or drop-off at a milieustraat. Leaving bulky waste on the street without booking can result in fines.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "National government portal with environmental and living-in-the-Netherlands context.",
    },
    {
      label: "Rijksoverheid",
      href: "https://www.rijksoverheid.nl/",
      description: "Central government information on waste policy and sustainability programs.",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Authoritative source for collection schedules, sorting rules and milieustraat access.",
    },
  ],
  sourceUsageTips: [
    "Use your gemeente waste portal for postcode-specific calendars and container maps.",
    "Government.nl and Rijksoverheid provide national context — local rules always take precedence.",
    "Rules change — verify sorting guidance close to your move-in date, not from memory.",
    "This guide is general information only, not legal or environmental compliance advice.",
  ],
  relatedGuides: [
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Broader gemeente services including registration, taxes and parking.",
    },
    {
      label: "Utilities in the Netherlands",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Energy, water, internet and household setup after moving.",
    },
    {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Renting, buying and accommodation before and after move-in.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Address registration unlocks waste passes and gemeente services.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Full relocation hub and first-month sequencing.",
    },
  ] satisfies PracticalLifeLink[],
  mistakesSection: {
    heading: "Common Recycling Mistakes",
    paragraphs: ["These are the waste and recycling errors expats most often make after arriving in the Netherlands."],
  },
  checklistPhases: [
    {
      phase: "Before move-in",
      items: [
        "Ask landlord about building waste rules, shared containers and VvE notices",
        "Check whether your gemeente uses underground passes or curbside bins",
      ],
    },
    {
      phase: "First week after arrival",
      items: [
        "Register address and activate waste pass if required",
        "Locate nearest containers and save your afvalkalender",
        "Set up indoor sorting bins for paper, glass, plastic and GFT",
      ],
    },
    {
      phase: "First month",
      items: [
        "Visit milieustraat with moving boxes, packaging and any bulky items",
        "Confirm plastic stream type (PMD, separate plastic or bag system)",
        "Bookmark gemeente waste portal and install Afvalwijzer if available",
      ],
    },
  ],
  checklistSection: {
    heading: "Waste and Recycling Checklist",
    paragraphs: ["Use this checklist after registering your address and locating your containers."],
    priorityOrder: [
      "Register your address — waste passes and calendars often link to your postcode.",
      "Find containers before your first grocery shop generates packaging waste.",
      "Save collection dates before your first residual waste pickup window.",
      "Plan milieustraat visit for moving boxes within the first two weeks.",
    ],
  },
  faqSection: {
    heading: "Waste and Recycling FAQ",
    paragraphs: ["Quick answers for orientation — always confirm details on your gemeente website."],
  },
  sourcesSection: {
    heading: "Official Resources",
    paragraphs: [
      "Waste collection systems and recycling rules vary by municipality. Always verify local requirements through your municipality.",
    ],
  },
  relatedSection: {
    heading: "Related Guides",
    paragraphs: ["Continue from waste orientation into municipality services, utilities, housing and relocation guides."],
  },
  exploreNextSection: {
    heading: "Complete Your Household Setup",
    paragraphs: [
      "Move from waste and recycling into municipality services, utilities, housing and your broader relocation checklist.",
    ],
  },
  exploreNextTips: [
    "Open municipality services to connect waste rules with local taxes and parking.",
    "Set up utilities if you have not arranged energy, water and internet yet.",
    "Confirm address registration — waste passes often link to your registered postcode.",
  ],
  exploreNextCards: [
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Registration, BSN, local taxes, parking and gemeente services.",
    },
    {
      label: "Utilities Guide",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Energy, water, internet and household setup after moving.",
    },
    {
      label: "Housing Guide",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Renting, buying and accommodation for newcomers.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Address registration for waste passes and gemeente access.",
    },
    {
      label: "Moving Guide",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Full relocation hub and arrival sequencing.",
    },
  ] satisfies PracticalLifeLink[],
  visualTextDetails: {
    overview: {
      title: "Why waste rules matter early",
      items: [
        "Municipalities set sorting rules, schedules and container access for your address.",
        "Incorrect sorting can mean missed collections or fines in some areas.",
        "Waste passes and calendars become available after address registration.",
        "Apartment buildings may have VvE rules on top of gemeente requirements.",
        "This guide is orientation only — verify rules on your gemeente website.",
      ],
    },
    snapshot: {
      title: "Recycling essentials",
      items: [
        "Separate paper, glass, plastic and organic waste where your gemeente collects them.",
        "Save your afvalkalender or use Afvalwijzer for collection reminders.",
        "Locate underground containers or curbside bins within your first week.",
        "Use milieustraat centers for furniture, appliances and bulky items.",
        "Never assume rules from another city apply in your new neighborhood.",
      ],
    },
    understanding: {
      title: "How systems differ",
      items: [
        "Urban areas favor underground containers; suburbs may use wheelie bins.",
        "Pay-as-you-throw systems encourage less residual waste in some gemeenten.",
        "National recycling targets are implemented through local collection contracts.",
        "Special collections exist for Christmas trees, hazardous waste and bulky items.",
        "Your postcode determines which contractor and calendar apply.",
      ],
    },
    categories: {
      title: "Sorting at home",
      items: [
        "Keep separate bins or bags indoors for each stream your gemeente collects.",
        "Rinse packaging lightly — heavy food residue contaminates recycling.",
        "Check whether plastic films and bags are accepted locally.",
        "Textiles and batteries never belong in general waste streams.",
        "When unsure, consult your gemeente sorting guide before discarding.",
      ],
    },
    underground: {
      title: "Using underground bins",
      items: [
        "Activate your waste pass after registering your address.",
        "Each underground slot is for one stream only — read labels carefully.",
        "Report overflowing or broken containers to your gemeente.",
        "Do not leave side waste next to full containers — fines are common.",
        "Apartment blocks may share one access point for multiple households.",
      ],
    },
    household: {
      title: "Residual waste tips",
      items: [
        "Reduce residual volume by separating recyclables and organic waste.",
        "Official collection bags may be required in pay-as-you-throw areas.",
        "Collection times vary — some streets require evening set-out.",
        "Holiday schedules shift pickup days — check December and Easter calendars.",
        "Landlords should explain building-specific rules at handover.",
      ],
    },
    glass: {
      title: "Glass recycling notes",
      items: [
        "Use neighborhood bottle banks regularly to avoid home clutter.",
        "Separate by color where your gemeente requires it.",
        "Remove lids and rinse jars lightly before recycling.",
        "Drinking glasses and window panes go to milieustraat, not glasbak.",
        "Report full bottle banks via gemeente apps when available.",
      ],
    },
    paper: {
      title: "Paper stream tips",
      items: [
        "Flatten moving boxes promptly after unpacking.",
        "Keep paper dry — wet cardboard contaminates the stream.",
        "Remove plastic windows from envelopes if your rules require it.",
        "Greasy or wax-coated paper belongs in general waste.",
        "Large volumes may need tying or bundling per local rules.",
      ],
    },
    plastic: {
      title: "Plastic packaging notes",
      items: [
        "Rules vary — some cities use PMD combined packaging streams.",
        "Soft plastics are not accepted everywhere.",
        "Rinse containers to remove food residue.",
        "Hard plastic toys and garden items often need milieustraat drop-off.",
        "Check your gemeente list of accepted plastic types annually.",
      ],
    },
    organic: {
      title: "GFT separation",
      items: [
        "Use certified compostable bags only if your gemeente allows them.",
        "Garden waste may have seasonal collection limits.",
        "Pet waste does not belong in GFT bins.",
        "Cooking oil requires separate disposal — never pour into GFT.",
        "Apartment residents should confirm whether GFT is available in their block.",
      ],
    },
    recyclingCenters: {
      title: "Milieustraat visits",
      items: [
        "Bring ID or waste pass proving local residency.",
        "Check opening hours — many centers close early on weekends.",
        "Renovation waste may incur fees by weight or volume.",
        "Book bulky-waste pickup if you cannot transport items yourself.",
        "Separate electrical items from furniture when dropping off.",
      ],
    },
    electronics: {
      title: "E-waste disposal",
      items: [
        "Retailers must accept old devices when you buy replacements.",
        "Battery collection boxes are at supermarkets and hardware stores.",
        "Small electronics often have dedicated bins at milieustraat.",
        "Never discard batteries in general waste — fire risk.",
        "Data-wipe phones and computers before recycling where possible.",
      ],
    },
    cities: {
      title: "City differences",
      items: [
        "Amsterdam uses widespread underground AFVALpas systems.",
        "Rotterdam combines underground and above-ground container hubs.",
        "The Hague links waste passes to registered addresses.",
        "Utrecht emphasizes underground organic and residual separation.",
        "Always open your city guide alongside your gemeente waste portal.",
      ],
    },
    sustainability: {
      title: "Living sustainably",
      items: [
        "Return deposit bottles via supermarket statiegeld machines.",
        "Use reusable bags and reduce single-use packaging where possible.",
        "Repair cafes and second-hand markets are common in Dutch cities.",
        "Composting organic waste supports municipal green energy programs.",
        "Neighbors expect correct sorting — it is part of local etiquette.",
      ],
    },
    mistakes: {
      title: "Avoid these errors",
      items: [
        "Mixing glass with ceramics breaks recycling equipment.",
        "Leaving moving boxes on the street without breakdown or booking.",
        "Using the wrong underground container slot for your waste type.",
        "Assuming English-language apps cover every gemeente equally.",
        "Forgetting to update waste calendar after moving within the Netherlands.",
      ],
    },
    checklist: {
      title: "First-week sequence",
      items: [
        "Register address and activate waste pass if required.",
        "Find containers on a gemeente map or building notice board.",
        "Save collection calendar to phone with weekly reminders.",
        "Locate nearest milieustraat for bulky and special waste.",
        "Ask landlord or VvE for apartment-specific sorting rules.",
      ],
    },
    municipalityDirectory: {
      title: "Finding official info",
      items: [
        "Each gemeente publishes waste pages under afval or afval en grondstoffen.",
        "Postcode search tools show container locations and pickup days.",
        "English summaries exist in larger cities — Dutch pages are authoritative.",
        "Milieustraat addresses and hours are listed on municipal portals.",
        "Report illegal dumping or full containers through official channels.",
      ],
    },
    faq: {
      title: "FAQ highlights",
      items: [
        "Collection is municipality-managed — not one national garbage company.",
        "GFT is organic waste collected separately where offered.",
        "Bulky waste needs booking or milieustraat drop-off in most cities.",
        "Fines for incorrect disposal vary by gemeente enforcement.",
        "Rules at your new address may differ from your previous Dutch city.",
      ],
    },
    sources: {
      title: "Official verification",
      items: [
        "Government.nl and Rijksoverheid provide national waste policy context.",
        "Your gemeente website has authoritative sorting and calendar information.",
        "Afvalwijzer and similar apps pull data from municipal systems.",
        "Requirements change — verify close to your move-in date.",
      ],
    },
    relatedGuides: {
      title: "Continue your setup",
      items: [
        "Municipality services connects waste to taxes, parking and registration.",
        "Utilities guide covers wider household setup after move-in.",
        "Address registration unlocks waste passes at many gemeenten.",
        "Housing guide helps before and after you receive your keys.",
      ],
    },
    exploreNext: {
      title: "Suggested next steps",
      items: [
        "Read municipality services for taxes, parking and gemeente portals.",
        "Complete utilities setup for energy, water and internet.",
        "Confirm address registration if you have not registered yet.",
        "Use the moving hub to sequence remaining arrival tasks.",
      ],
    },
  },
  howToSchema: {
    name: "How to sort household waste in the Netherlands",
    description:
      "Step-by-step orientation for separating waste streams and using municipality collection systems after moving to the Netherlands.",
    steps: [
      { name: "Find your municipality waste rules", text: "Look up your postcode on your gemeente waste portal after registering your address." },
      { name: "Locate containers and passes", text: "Find underground containers or curbside bins near your home and activate your waste pass if required." },
      { name: "Set up collection reminders", text: "Save your afvalkalender or use Afvalwijzer for pickup dates." },
      { name: "Separate streams at home", text: "Sort paper, glass, plastic, organic GFT and general waste into separate bins." },
      { name: "Use milieustraat for large items", text: "Drop furniture, appliances and bulky waste at your local recycling center or book pickup." },
      { name: "Dispose of electronics and batteries correctly", text: "Use retailer take-back, gemeente points or milieustraat — never household bins." },
    ],
  },
};
