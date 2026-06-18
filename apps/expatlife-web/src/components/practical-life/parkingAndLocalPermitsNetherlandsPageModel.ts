export const PARKING_AND_LOCAL_PERMITS_NETHERLANDS_PATH =
  "/netherlands/practical-life/parking-and-local-permits-netherlands/" as const;

export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const UTILITIES_NETHERLANDS_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const GETTING_AROUND_PATH = "/netherlands/living/getting-around/" as const;
export const WASTE_AND_RECYCLING_PATH = "/netherlands/practical-life/waste-and-recycling-netherlands/" as const;

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

export type ParkingPermitStep = {
  step: string;
  detail: string;
};

export type PermitType = {
  title: string;
  body: string;
  examples: readonly string[];
  note: string;
};

export type ParkingAppCard = {
  name: string;
  summary: string;
  payment: string;
  coverage: string;
};

export type ParkingCityCard = {
  city: string;
  population: string;
  href: string;
  website: string;
  parkingProfile: string;
  permitDemand: string;
  visitorSystem: string;
  parkAndRide: string;
};

export type MunicipalityParkingDirectoryEntry = {
  municipality: string;
  parkingServices: string;
  permitInformation: string;
  website: string;
  href: string;
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-parking-permits-${slug}-${version}.png`,
  alt,
  caption,
});

export const parkingAndLocalPermitsNetherlandsPage = {
  slug: "parking-and-local-permits-netherlands",
  path: PARKING_AND_LOCAL_PERMITS_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: MUNICIPALITY_SERVICES_PATH,
  publish: true,
  publishDate: "2026-10-18",
  seo: {
    title: "Parking and Local Permits in the Netherlands | Complete Expat Guide",
    description:
      "Learn how parking and local permits work in the Netherlands, including resident permits, visitor permits, paid parking zones, EV charging and municipality services.",
    keywords: [
      "parking netherlands",
      "parking permit netherlands",
      "resident parking permit netherlands",
      "expat parking netherlands",
      "parking permits netherlands",
      "parking amsterdam",
      "visitor parking permit",
      "local permits netherlands",
      "municipality permits netherlands",
      "parking apps netherlands",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Parking and Local Permits in the Netherlands",
    subtitle:
      "Understand parking permits, visitor permits, paid parking zones and municipality-issued permits commonly used by residents and expats.",
    primaryCta: { label: "Understand Parking Rules", href: "#intro" },
    secondaryCta: { label: "Explore Municipality Services", href: MUNICIPALITY_SERVICES_PATH },
    image: {
      src: "/images/heroes/netherlands-parking-permits-hero-v2.png",
      alt: "Photorealistic Dutch canal-side residential street with parked cars, bicycles locked to a railing, brick townhouses and a blue parking zone sign for permit holders, with a visitor permit visible on a car windshield.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#essentials", label: "Essentials" },
    { href: "#understanding", label: "Systems" },
    { href: "#resident", label: "Resident" },
    { href: "#visitor", label: "Visitor" },
    { href: "#paid", label: "Paid zones" },
    { href: "#apps", label: "Apps" },
    { href: "#park-ride", label: "P+R" },
    { href: "#ev", label: "EV" },
    { href: "#cities", label: "Cities" },
    { href: "#local-permits", label: "Permits" },
    { href: "#car-ownership", label: "Car?" },
    { href: "#costs", label: "Costs" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
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
      "Editorial infographic showing how parking works for expats in the Netherlands — gemeente hub with paid zones, resident permits, visitor codes, parking apps, P+R and EV charging, plus a five-step checklist rail.",
      "Paid zones, resident permits, visitor systems and municipality rules vary by city."
    ),
    snapshot: visual(
      "snapshot",
      "premium-v2",
      "Six-card parking essentials infographic — resident permits, waiting lists, visitor passes, parking apps, EV charging and municipality rule differences.",
      "Resident permits, visitor passes, apps and EV charging differ by gemeente."
    ),
    understanding: visual(
      "understanding",
      "premium-v2",
      "Four-system comparison infographic — paid street parking, resident permit zones, private garage or VvE parking, and park-and-ride with expat tips.",
      "Street parking, permit zones, private garages and park-and-ride options."
    ),
    resident: visual(
      "resident",
      "premium-v2",
      "Five-step parkeervergunning application infographic with eligibility checklist and sample Amsterdam permit card.",
      "Address registration, eligibility and waiting lists vary by neighborhood."
    ),
    visitor: visual(
      "visitor",
      "premium-v2",
      "Visitor parking timeline infographic — day codes, guest bundles, visitor zones and moving-day exemption workflow.",
      "Guest passes, day codes and temporary visitor systems by municipality."
    ),
    paid: visual(
      "paid",
      "premium-v2",
      "Paid parking zone sign decode infographic with payment methods, zone hours and license plate enforcement notes.",
      "Zone maps, meters, mobile payment and enforcement basics."
    ),
    apps: visual(
      "apps",
      "premium-v2",
      "Four equal parking app cards — EasyPark, Yellowbrick, ANWB Onderweg and Parkmobile with payment and coverage notes.",
      "EasyPark, Yellowbrick and ANWB Onderweg for mobile payment."
    ),
    parkRide: visual(
      "park-ride",
      "premium-v2",
      "Park-and-ride route map for Amsterdam, Rotterdam, The Hague and Utrecht showing OV connections from edge parking.",
      "P+R hubs connecting suburban parking with public transport."
    ),
    ev: visual(
      "ev",
      "premium-v2",
      "EV charging paths infographic — public chargers, residential requests, VvE garage setup and permit interaction notes.",
      "Public charging, residential requests and municipality processes."
    ),
    cities: visual(
      "cities",
      "premium-v2",
      "Major Dutch cities parking profile map — Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven permit demand and visitor systems.",
      "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven profiles."
    ),
    localPermits: visual(
      "local-permits",
      "premium-v2",
      "Municipality permit ecosystem — parking, building, renovation, event, business and terrace permits with examples.",
      "Building, renovation, event, business and terrace permits."
    ),
    carOwnership: visual(
      "car-ownership",
      "premium-v2",
      "Car ownership decision pathway — OV and cycling versus suburban car need with cost comparison cues.",
      "Public transport, cycling culture and city versus suburban living."
    ),
    costs: visual(
      "costs",
      "premium-v2",
      "Parking cost table infographic — resident permits, visitor passes, hourly parking, garages, P+R and fine ranges with verify disclaimer.",
      "Permit fees, visitor passes, paid zones and garage ranges."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Three-phase parking setup checklist — before bringing a car, first weeks and first month after moving.",
      "Register address, learn zone rules, apply for permits and download apps."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Eight common expat parking mistake cards — free parking assumptions, permit ignores, visitor setup and waiting list errors.",
      "Assuming free parking, ignoring permits and missing waiting lists."
    ),
    municipalityDirectory: visual(
      "municipality-directory",
      "premium-v2",
      "Municipality parking directory for Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Groningen with official portal labels.",
      "Official parking portals for major Dutch cities."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Parking FAQ summary cards — permits, visitor passes, costs, apps, EV charging, waiting lists and municipality services.",
      "Resident permits, visitor passes, apps, EV charging and waiting lists."
    ),
    sources: visual(
      "sources",
      "premium-v2",
      "Official resources stack — Government.nl, RDW vehicle papers and gemeente folder with verification disclaimer.",
      "Government.nl, RDW and municipality websites for local rules."
    ),
    relatedGuides: visual(
      "related-guides",
      "premium-v2",
      "Related guide pathway — municipality services, address registration, housing, utilities and getting around.",
      "Continue into broader practical-life and relocation setup."
    ),
    exploreNext: visual(
      "explore-next",
      "premium-v2",
      "Explore next onboarding cards — municipality services, getting around, housing, address registration and utilities.",
      "Municipality services, getting around, housing and address registration."
    ),
  },
  intro: {
    heading: "How Parking Works in the Netherlands",
    paragraphs: [
      "Parking in the Netherlands is managed locally. Your municipality sets paid parking zones, resident permit rules, visitor systems and enforcement — not one national parking authority.",
      "Many expats arrive expecting free street parking or a single national permit. In practice, dense cities use permit zones with waiting lists, paid parking in centres and digital payment through apps.",
      "This guide explains parking systems and common municipality permits in practical terms. Always verify current rules, fees and availability on your gemeente website — requirements change and differ significantly between cities.",
    ],
  },
  quickAnswer: {
    summary:
      "Many Dutch cities use paid parking zones, resident parking permits, visitor permits and digital parking systems — rules vary significantly between municipalities.",
    bullets: [
      "Resident permits usually require address registration at your gemeente.",
      "Visitor permits or day codes are available in many cities for guests.",
      "Paid parking zones are common in urban centres — use apps or meters.",
      "Waiting lists for resident permits exist in high-demand neighborhoods.",
      "EV charging and local permits beyond parking are municipality-managed.",
    ],
    note: "Parking rules are set locally — bookmark your gemeente parking portal after registering your address.",
  },
  snapshotCards: [
    { title: "Resident permits are common", body: "Many neighborhoods require a gemeente parking permit to park on the street overnight." },
    { title: "Waiting lists may exist", body: "High-demand areas in Amsterdam, Utrecht and other cities often have permit waiting lists." },
    { title: "Visitor permits are widely used", body: "Day codes, guest passes and visitor zones help when family or friends visit by car." },
    { title: "Parking apps are standard", body: "EasyPark, Yellowbrick and similar apps pay for on-street parking in many cities." },
    { title: "EV charging is expanding", body: "Public chargers and residential charging requests follow municipality processes." },
    { title: "Rules vary by municipality", body: "Zone maps, fees and eligibility differ — never assume your previous city’s rules apply." },
  ] satisfies TipCard[],
  essentialsSection: {
    heading: "Parking at a Glance",
    paragraphs: [
      "Use these essentials to orient yourself in the first weeks after moving. Then open your municipality parking page for zone maps, fees and permit applications at your postcode.",
    ],
    essentialsFacts: [
      "Blue-zone or paid parking signs indicate where and when payment is required.",
      "Resident permits link to your registered address — not your employer or rental agency.",
      "Company cars and lease vehicles may need separate registration with RDW.",
      "Garage or driveway access in apartments is often managed by VvE — ask at handover.",
      "Fines for parking without payment or permit are enforced by municipalities or contractors.",
    ],
    usefulResources: [
      { name: "Gemeente parking portal", detail: "Zone maps, permit applications and visitor systems for your address." },
      { name: "RDW", detail: "Vehicle registration, import rules and official vehicle records in the Netherlands." },
      { name: "EasyPark / Yellowbrick", detail: "Widely used mobile parking payment in many Dutch cities." },
      { name: "Government.nl", detail: "National context on living, transport and municipality services." },
    ],
    zoneSignGuide: [
      { sign: "Blue P with zone code", meaning: "Paid parking — check hours on the sign and pay via app or meter." },
      { sign: "Permit holders only (vergunninghouders)", meaning: "Resident permit required during stated hours — visitors need a separate code." },
      { sign: "Maximum stay limit", meaning: "Payment or permit may not extend beyond the posted time — move the car when required." },
      { sign: "Loading / disabled bay", meaning: "Separate rules apply — do not assume general paid parking covers these spaces." },
    ],
  },
  understanding: {
    heading: "How Parking Systems Work",
    paragraphs: [
      "Dutch cities combine several parking systems: paid street parking in commercial and residential zones, permit-only areas for residents, private garages, and park-and-ride facilities on city edges.",
      "Urban centres typically restrict on-street parking to manage congestion. Suburban and rural areas may have fewer restrictions but still use paid zones near train stations and town centres.",
      "Your registered address determines which permit zone and waiting list apply. After address registration, look up your postcode on the gemeente parking map before buying or importing a car.",
    ],
    systemPoints: [
      "Paid parking uses zone codes — check signs and apps for hours and rates.",
      "Permit zones reserve street space for registered residents in many neighborhoods.",
      "Private parking includes garage rentals, VvE spaces and commercial car parks.",
      "P+R facilities combine parking with OV (public transport) into city centres.",
    ],
    systemComparison: [
      { system: "Paid street parking", where: "City centres and many residential streets", expatTip: "Download a parking app before your first drive into town." },
      { system: "Resident permit zones", where: "Dense urban neighborhoods", expatTip: "Apply early — waiting lists can be months in popular areas." },
      { system: "Private garage / VvE", where: "Apartments and new developments", expatTip: "Confirm parking rights in your rental or purchase contract." },
      { system: "Park and ride (P+R)", where: "City edges near motorways and rail", expatTip: "Often cheaper than central parking — check OV connection times." },
    ],
  },
  residentPermits: {
    heading: "Resident Parking Permits",
    paragraphs: [
      "Many residents apply for a parkeervergunning (parking permit) through their municipality. The permit allows overnight or long-stay parking in designated resident zones where street space is limited.",
      "Eligibility usually requires that you live at the address, have registered with the gemeente and sometimes that your vehicle is registered in your name. Some cities limit permits per household or per address.",
      "Availability varies by city and neighborhood. High-demand districts may have waiting lists, priority rules or no new permits until space becomes available.",
    ],
    eligibilityNotes: [
      "Register your address at the gemeente before applying for a resident permit.",
      "Permits are usually tied to your postcode and license plate.",
      "Second vehicles at the same address may face higher fees or stricter rules.",
      "Temporary residents on short contracts should confirm permit eligibility before relying on street parking.",
      "Waiting lists are common in Amsterdam, Utrecht and parts of Rotterdam — apply as soon as you qualify.",
    ],
    permitApplicationSteps: [
      {
        step: "Check your zone map",
        detail: "Look up your address on the gemeente parking map to confirm you are in a permit zone.",
      },
      {
        step: "Register your address",
        detail: "Complete address registration and obtain BSN if you have not already done so.",
      },
      {
        step: "Prepare documents",
        detail: "Gather vehicle registration details and proof of residence if required.",
      },
      {
        step: "Apply online",
        detail: "Submit your application through the municipality parking portal.",
      },
      {
        step: "Pay and register plate",
        detail: "Pay the annual or quarterly fee and register your license plate digitally or display any required sticker.",
      },
    ] satisfies ParkingPermitStep[],
    documentsOftenRequired: [
      { document: "Proof of address registration", detail: "BSN and registered postcode at your gemeente." },
      { document: "Vehicle registration (kentekenbewijs)", detail: "License plate must match the permit application." },
      { document: "ID or passport", detail: "Identity verification for online or in-person applications." },
      { document: "Lease or ownership proof", detail: "Some cities ask for housing contract if address recently registered." },
    ],
    waitingListNotes: [
      "Join the waiting list as soon as you register — do not wait until you buy a car.",
      "Some cities show estimated wait time in the parking portal.",
      "A waiting list position does not guarantee future approval.",
      "Second vehicles at the same address may have separate or longer queues.",
    ],
  },
  visitorPermits: {
    heading: "Visitor Permits",
    paragraphs: [
      "Many municipalities offer visitor parking systems so residents can host guests without sharing their own permit. Models differ by city — day codes, guest passes, hourly bundles or separate visitor zones.",
      "Visitor systems are useful for family visits, contractors, moving vans and short-stay guests. Some cities sell day passes online; others require the resident to activate a code through the gemeente portal.",
      "Always check whether visitor parking covers your guest’s license plate for the full visit — overstaying or wrong-zone parking can still lead to fines.",
    ],
    visitorModels: [
      { title: "Day codes", body: "Single-day visitor codes purchased or activated by the resident for a specific date." },
      { title: "Guest pass bundles", body: "Multi-day or hourly bundles for recurring visitors in permit zones." },
      { title: "Visitor zones", body: "Separate short-stay areas near shopping or train stations with their own rates." },
      { title: "Hotel and short-stay", body: "Hotels and serviced apartments may include parking — confirm before booking." },
    ] satisfies TipCard[],
    visitorTips: [
      "Activate visitor permits before your guest parks — not after a fine notice.",
      "Moving day vans may need a separate exemption or visitor code — check gemeente rules.",
      "Visitor permits usually do not replace paid parking in commercial zones outside permit areas.",
      "Keep license plate numbers accurate — digital enforcement matches plates automatically.",
    ],
    visitorAvoid:
      "Visitor permits usually cover permit zones only — they do not replace paid parking in commercial areas or exempt you from maximum stay limits.",
    visitorModelComparison: [
      { model: "Day code", whenToUse: "One-off guest for a single day", expatTip: "Buy or activate before the guest parks." },
      { model: "Guest pass bundle", whenToUse: "Family staying several days or recurring visitors", expatTip: "Check hourly vs daily bundle pricing on your gemeente site." },
      { model: "Visitor zone", whenToUse: "Short shopping or station visits outside your permit area", expatTip: "Rates and hours differ from resident permit zones." },
      { model: "Moving exemption", whenToUse: "Moving van at your new address", expatTip: "Apply separately — a normal visitor code may not cover large vans." },
    ],
  },
  paidParking: {
    heading: "Paid Parking Areas",
    paragraphs: [
      "Paid parking is common in urban centres, shopping districts and many residential streets during daytime hours. Rates, hours and zone codes are set by the municipality.",
      "Payment options include parking meters, pay-and-display machines and mobile apps. Enforcement uses license plate recognition in many cities — no paper ticket on your dashboard is needed if you paid digitally.",
      "Zone boundaries and time limits matter. Parking outside your paid window or in the wrong zone can result in fines even if you paid elsewhere in the city.",
    ],
    zoneTips: [
      "Read zone signs carefully — hours often differ for weekdays, Saturdays and evenings.",
      "Start payment through an app as soon as you park — grace periods are short or absent.",
      "Some zones have maximum stay limits regardless of payment.",
      "Commercial loading zones and disabled spaces have separate rules — do not assume general paid parking applies.",
    ],
    enforcementNotes: [
      "Municipalities and contractors scan license plates for valid payment or permits.",
      "Fines are sent to the registered vehicle owner — check post or RDW-linked address.",
      "Appeals processes exist but require evidence of valid payment or permit.",
      "Towing is rare for standard violations but possible for dangerous or prolonged illegal parking.",
    ],
    paymentMethods: [
      { method: "Mobile parking app", detail: "Pay by zone code — extend session remotely", bestFor: "Daily city-centre parking" },
      { method: "Parking meter / pay-and-display", detail: "Card or coin at machine on street", bestFor: "Backup when apps are unavailable" },
      { method: "Resident permit (digital plate)", detail: "Registered license plate scanned automatically", bestFor: "Overnight parking in permit zones" },
      { method: "Visitor day code", detail: "Resident activates guest plate for set period", bestFor: "Guests in permit-only neighborhoods" },
    ],
  },
  appsSection: {
    heading: "Popular Parking Apps",
    paragraphs: [
      "Mobile parking apps are widely used across Dutch cities. They let you pay for on-street parking, extend sessions remotely and sometimes find garages — coverage varies by municipality contract.",
      "This is an overview of commonly used services, not a ranking. Check which apps work in your city on the gemeente parking page before relying on one provider.",
    ],
    appSelectionTips: [
      "Open your gemeente parking page and note which apps are listed for your zones.",
      "Save payment method and license plate before your first trip into a paid area.",
      "Set a reminder to extend sessions — fines apply even if you paid in the wrong zone.",
      "Apps pay for timed parking only — they do not replace resident permits overnight.",
    ],
  },
  parkingApps: [
    {
      name: "EasyPark",
      summary: "Widely available mobile parking payment in many Dutch municipalities and private car parks.",
      payment: "Credit card, iDEAL and in-app payment; extend sessions remotely.",
      coverage: "Many cities including Amsterdam, Rotterdam, Utrecht and smaller gemeenten — verify locally.",
    },
    {
      name: "Yellowbrick",
      summary: "Long-established parking app used by several municipalities for on-street zones.",
      payment: "App account, iDEAL and card payment options.",
      coverage: "Rotterdam, The Hague and other cities — check gemeente list for active zones.",
    },
    {
      name: "ANWB Onderweg",
      summary: "ANWB travel app with parking payment features alongside route and traffic information.",
      payment: "Linked payment methods through ANWB account.",
      coverage: "Select municipalities and ANWB partner locations — useful for combined travel planning.",
    },
    {
      name: "Parkmobile",
      summary: "Parking payment app active in some Dutch cities and private locations.",
      payment: "App-based payment with account registration.",
      coverage: "Limited compared to EasyPark — confirm zone support before parking.",
    },
  ] satisfies ParkingAppCard[],
  parkAndRide: {
    heading: "Park and Ride Facilities",
    paragraphs: [
      "Park-and-ride (P+R) facilities let drivers park on city outskirts and continue by train, metro or bus. They reduce central congestion and are often cheaper than inner-city parking.",
      "Many P+R locations require an OV chip card or combined ticket for the transit portion. Some offer discounted parking when you travel onward by public transport within a set time window.",
    ],
    cityExamples: [
      { city: "Amsterdam", note: "P+R locations at city edges (e.g. Arena, Zeeburg) with OV connection — check current rates and time rules." },
      { city: "Rotterdam", note: "P+R near Kralingse Zoom and other hubs linked to metro and bus networks." },
      { city: "The Hague", note: "P+R options connecting to tram and Randstad rail services." },
      { city: "Utrecht", note: "P+R Westraven and other sites with direct train access to the centre." },
    ],
    benefits: [
      "Lower cost than all-day parking in city centres.",
      "Direct connections to train, metro or tram networks.",
      "Avoids congestion and permit zone stress in dense neighborhoods.",
      "Useful for occasional city visits without a resident permit.",
    ],
    locationComparison: [
      { city: "Amsterdam", location: "P+R Arena, Zeeburg", transit: "Metro / train to centre", note: "Check OV travel requirement for discounted rate." },
      { city: "Rotterdam", location: "P+R Kralingse Zoom", transit: "Metro connection", note: "Useful for events and waterfront visits." },
      { city: "The Hague", location: "Edge P+R sites", transit: "Tram / Randstad rail", note: "Compare Scheveningen vs centre access needs." },
      { city: "Utrecht", location: "P+R Westraven", transit: "Direct train to Utrecht Centraal", note: "Popular on weekdays — arrive early." },
    ],
  },
  evParking: {
    heading: "EV Charging and Parking",
    paragraphs: [
      "Electric vehicle charging in the Netherlands combines public charge points, semi-public locations and residential charging requests. Parking rules for EVs vary — a charging spot is not always a free parking spot.",
      "Residents without private driveways can often request a public charger near their home through the municipality or a regional operator. Waiting times and eligibility rules apply.",
      "Always check signage — some EV bays are for active charging only with time limits.",
    ],
    evTopics: [
      { title: "Public charging", body: "Charge points at street, retail and motorway locations via operator apps and cards." },
      { title: "Residential requests", body: "Municipality-led programs to install curbside chargers near registered addresses." },
      { title: "Permit interaction", body: "EV status does not automatically exempt you from paid or permit zone rules." },
      { title: "Garage and VvE", body: "Apartment charging often needs VvE approval and electrical capacity assessment." },
    ] satisfies TipCard[],
    evTips: [
      "Use operator apps (e.g. regional providers) to find available charge points.",
      "Move your car when charging completes if the bay has a time limit.",
      "Apply for a residential charger early — installation queues exist in busy areas.",
      "Check whether your employer or lease company covers home charging installation.",
    ],
    chargingPaths: [
      { path: "Public street charger", setup: "Use operator app or charge card", parkingRule: "Often active-charging-only with time limit" },
      { path: "Residential request", setup: "Apply via municipality or regional operator", parkingRule: "Does not automatically grant a resident parking permit" },
      { path: "Garage / driveway", setup: "VvE or owner approval plus electrician", parkingRule: "Private — separate from street permit rules" },
      { path: "Workplace / retail", setup: "Employer or location provider access", parkingRule: "Check whether parking while charging is included" },
    ],
  },
  cityCards: [
    {
      city: "Amsterdam",
      population: "~920,000",
      href: "/netherlands/amsterdam/",
      website: "https://www.amsterdam.nl/parkeren-verkeer/parkeren/",
      parkingProfile: "Extensive paid zones and permit areas across most districts; strict enforcement.",
      permitDemand: "High — waiting lists common in Centrum and popular neighborhoods.",
      visitorSystem: "Online visitor day codes and guest products via Amsterdam parking portal.",
      parkAndRide: "P+R Arena, Zeeburg and other edge locations with OV links.",
    },
    {
      city: "Rotterdam",
      population: "~670,000",
      href: "/netherlands/rotterdam/",
      website: "https://www.rotterdam.nl/parkeren",
      parkingProfile: "Mix of paid zones, permit areas and garage parking by district.",
      permitDemand: "Moderate to high in central and waterfront neighborhoods.",
      visitorSystem: "Visitor products and day passes via rotterdam.nl parking section.",
      parkAndRide: "P+R Kralingse Zoom and metro-linked sites.",
    },
    {
      city: "The Hague",
      population: "~560,000",
      href: "/netherlands/the-hague/",
      website: "https://www.denhaag.nl/nl/parkeren.htm",
      parkingProfile: "Paid zones in centre and Scheveningen; permit zones in residential areas.",
      permitDemand: "Varies by district — coastal and central areas tighter.",
      visitorSystem: "Guest parking options through denhaag.nl portal.",
      parkAndRide: "P+R locations connecting to tram and Randstad rail.",
    },
    {
      city: "Utrecht",
      population: "~370,000",
      href: "/netherlands/utrecht/",
      website: "https://www.utrecht.nl/wonen-leven/parkeren/",
      parkingProfile: "Strong permit system in inner districts; paid parking in centre.",
      permitDemand: "High in popular inner-city neighborhoods — apply early.",
      visitorSystem: "Visitor passes and day products via Utrecht parking pages.",
      parkAndRide: "P+R Westraven and other train-linked facilities.",
    },
    {
      city: "Eindhoven",
      population: "~250,000",
      href: "/netherlands/eindhoven/",
      website: "https://www.eindhoven.nl/parkeren",
      parkingProfile: "Paid zones in centre; permit areas in surrounding neighborhoods.",
      permitDemand: "Moderate — less extreme than Randstad cores but still zone-dependent.",
      visitorSystem: "Visitor parking products on eindhoven.nl.",
      parkAndRide: "Limited compared to Amsterdam — check current P+R map.",
    },
  ] satisfies ParkingCityCard[],
  citiesSection: {
    heading: "Parking in Major Dutch Cities",
    paragraphs: [
      "Permit demand, visitor systems and P+R options differ between Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven. Open your city guide alongside your gemeente parking portal.",
    ],
    comparisonTable: [
      { city: "Amsterdam", permitDemand: "Very high", paidParking: "Extensive zones", visitorSystem: "Online day codes", parkAndRide: "Arena, Zeeburg" },
      { city: "Rotterdam", permitDemand: "Moderate–high", paidParking: "District-based zones", visitorSystem: "Guest products online", parkAndRide: "Kralingse Zoom" },
      { city: "The Hague", permitDemand: "Varies by district", paidParking: "Centre + Scheveningen", visitorSystem: "Guest portal products", parkAndRide: "Tram-linked sites" },
      { city: "Utrecht", permitDemand: "High inner city", paidParking: "Strong centre zones", visitorSystem: "Visitor passes online", parkAndRide: "Westraven train link" },
      { city: "Eindhoven", permitDemand: "Moderate", paidParking: "Centre focus", visitorSystem: "Online visitor products", parkAndRide: "Limited vs Randstad" },
    ],
  },
  localPermits: {
    heading: "Other Common Municipality Permits",
    paragraphs: [
      "Municipalities handle many permits beyond parking. Requirements, fees and processing times vary by gemeente and project type.",
      "Always use official municipality portals for applications. Third-party services may assist but cannot guarantee approval or waiting times.",
    ],
    permitTypes: [
      {
        title: "Parking permits",
        body: "Resident, visitor and business parking authorizations for on-street zones.",
        examples: ["Resident parkeervergunning", "Visitor day codes", "Company fleet permits"],
        note: "Tied to address and license plate — rules vary by zone.",
      },
      {
        title: "Building permits",
        body: "Omgevingsvergunning for construction, extension or structural changes.",
        examples: ["Home extension", "Loft conversion", "Shed or outbuilding"],
        note: "Processing times vary — check gemeente planning portal.",
      },
      {
        title: "Renovation permits",
        body: "May be required for facades, monuments or changes in conservation areas.",
        examples: ["Monument renovation", "Facade changes", "Energy retrofit in protected areas"],
        note: "Extra rules apply in historic districts.",
      },
      {
        title: "Event permits",
        body: "Temporary use of public space for markets, festivals or street events.",
        examples: ["Neighborhood market", "Street party", "Filming on public roads"],
        note: "Apply well in advance of the event date.",
      },
      {
        title: "Business permits",
        body: "Including hospitality, retail and home-business rules where applicable.",
        examples: ["Terrace expansion", "Signage on public facades", "Home office in regulated areas"],
        note: "Cross-check with KVK registration and zoning rules.",
      },
      {
        title: "Terrace permits",
        body: "Seasonal or permanent permission for outdoor seating on public space.",
        examples: ["Café terrace", "Restaurant sidewalk seating", "Seasonal expansion"],
        note: "Fees and seasonal rules set locally.",
      },
    ] satisfies PermitType[],
  },
  carOwnership: {
    heading: "Do You Need a Car?",
    paragraphs: [
      "Many expats in the Netherlands live comfortably without a car, especially in cities with strong cycling infrastructure and public transport. Car ownership adds parking costs, insurance, road tax and maintenance.",
      "Suburban and rural areas may make a car more practical. Weigh P+R, car-sharing and occasional rental against full ownership before committing to permit zones and garage costs.",
    ],
    considerations: [
      { title: "Public transport", body: "NS trains, metro, tram and bus networks cover most Randstad and city regions well." },
      { title: "Cycling culture", body: "Daily errands, school runs and commutes often work by bike in Dutch cities." },
      { title: "City living", body: "Permit waiting lists and paid parking make car-free life attractive in dense areas." },
      { title: "Suburban living", body: "Families and edge-of-city homes may need a car — confirm parking at viewing stage." },
    ] satisfies TipCard[],
    mobilityComparison: [
      { option: "OV + bike", typicalCost: "NS subscription or OVpay + bike ownership", bestFor: "City-centre expats, daily commutes under 30 km" },
      { option: "P+R + OV", typicalCost: "Daily P+R fee plus transit ticket", bestFor: "Occasional city visits without a resident permit" },
      { option: "Car ownership", typicalCost: "Permit + insurance + road tax + fuel + maintenance", bestFor: "Suburban families, regular regional travel" },
      { option: "Car-sharing / rental", typicalCost: "Pay per trip or short rental", bestFor: "Infrequent trips, avoiding permit waiting lists" },
    ],
  },
  costs: {
    heading: "Parking Costs and Fees",
    paragraphs: [
      "Parking costs include permit fees, visitor passes, paid zone rates and garage parking. Amounts vary by city, zone and vehicle type — treat ranges as orientation only.",
      "Always confirm current fees on your gemeente website before budgeting. This guide does not guarantee prices or availability.",
    ],
    costExamples: [
      { item: "Resident permit (annual)", range: "Roughly €100–€600+ per year", note: "Varies by city, zone and second-vehicle rules." },
      { item: "Visitor day code", range: "Often €3–€15 per day", note: "Depends on city and product type." },
      { item: "Paid street parking", range: "Roughly €2–€7.50 per hour in centres", note: "Zone and time dependent." },
      { item: "Garage parking", range: "Roughly €3–€6 per hour or €25–€45 daily", note: "Central garages cost more." },
      { item: "P+R daily", range: "Often €4–€8 plus OV ticket", note: "Discounts may apply with transit use." },
      { item: "Parking fine", range: "Typically €70–€110+ per violation", note: "Set by municipality — pay or appeal via official channels." },
    ],
    costDisclaimer:
      "Fees and fines change frequently. Verify current amounts on your gemeente parking portal and RDW — this guide provides orientation only, not a price guarantee.",
  },
  checklistPhases: [
    {
      phase: "Before you bring a car",
      items: [
        "Check whether your address is in a permit zone or paid-only area",
        "Ask landlord or VvE about garage or driveway access",
        "Compare car ownership cost with OV, bike and P+R options",
      ],
    },
    {
      phase: "First weeks after arrival",
      items: [
        "Register address at the gemeente",
        "Look up zone map for your postcode",
        "Download parking apps that work in your city",
      ],
    },
    {
      phase: "First month",
      items: [
        "Apply for resident permit if eligible — do not wait if waiting lists exist",
        "Learn visitor permit process for guests",
        "Bookmark municipality parking and RDW pages",
      ],
    },
  ],
  checklist: [
    "Register address at your gemeente",
    "Register vehicle with RDW if importing or buying",
    "Understand local parking rules for your postcode",
    "Apply for resident permit if in a permit zone",
    "Learn visitor permit process for guests",
    "Download parking apps used in your city",
    "Understand EV charging options if applicable",
    "Review municipality permit information beyond parking",
  ],
  checklistSection: {
    heading: "Parking Setup Checklist",
    paragraphs: ["Use this checklist after registering your address and before relying on street parking."],
    priorityOrder: [
      "Register your address — permits link to your registered postcode.",
      "Check zone maps before your first overnight street park.",
      "Apply for resident permits early in high-demand neighborhoods.",
      "Set up a parking app before driving into paid zones.",
    ],
  },
  commonMistakes: [
    { title: "Assuming parking is free", body: "Many streets require payment or a permit even in residential areas." },
    { title: "Ignoring permit requirements", body: "Overnight parking in permit zones without authorization leads to fines." },
    { title: "Missing visitor permit setup", body: "Guests need activated codes before parking — not after enforcement." },
    { title: "Not checking waiting lists", body: "Assuming a permit is available immediately in high-demand districts." },
    { title: "Ignoring zone restrictions", body: "Paid in one zone does not cover another — check signs and apps." },
    { title: "Not using parking apps", body: "Meters are fewer — mobile payment is standard in many cities." },
    { title: "Assuming city rules are identical", body: "Amsterdam rules do not apply in Utrecht or Eindhoven." },
    { title: "Waiting too long to apply", body: "Join waiting lists as soon as you register your address." },
  ] satisfies TipCard[],
  municipalityDirectory: [
    {
      municipality: "Amsterdam",
      parkingServices: "Paid zones, resident permits, visitor products and P+R",
      permitInformation: "Online applications linked to registered address",
      website: "https://www.amsterdam.nl/parkeren-verkeer/parkeren/",
      href: "/netherlands/amsterdam/",
    },
    {
      municipality: "Rotterdam",
      parkingServices: "Zone parking, permits and garage maps",
      permitInformation: "Resident and visitor products via rotterdam.nl",
      website: "https://www.rotterdam.nl/parkeren",
      href: "/netherlands/rotterdam/",
    },
    {
      municipality: "The Hague",
      parkingServices: "Paid parking, permits and Scheveningen zones",
      permitInformation: "Address-linked permit applications",
      website: "https://www.denhaag.nl/nl/parkeren.htm",
      href: "/netherlands/the-hague/",
    },
    {
      municipality: "Utrecht",
      parkingServices: "Permit zones, paid parking and P+R links",
      permitInformation: "Utrecht parking portal with postcode lookup",
      website: "https://www.utrecht.nl/wonen-leven/parkeren/",
      href: "/netherlands/utrecht/",
    },
    {
      municipality: "Eindhoven",
      parkingServices: "Centre paid zones and neighborhood permits",
      permitInformation: "Online permit and visitor products",
      website: "https://www.eindhoven.nl/parkeren",
      href: "/netherlands/eindhoven/",
    },
    {
      municipality: "Groningen",
      parkingServices: "City centre paid zones and permit areas",
      permitInformation: "Gemeente Groningen parking section",
      website: "https://www.gemeente.groningen.nl/parkeren",
      href: "/netherlands/groningen/",
    },
  ] satisfies MunicipalityParkingDirectoryEntry[],
  municipalityDirectorySection: {
    heading: "Municipality Parking Resources",
    paragraphs: [
      "Official parking information portals for major Dutch cities. Always verify postcode-specific rules and current fees on your gemeente website.",
    ],
  },
  faqs: [
    {
      q: "Do I need a parking permit?",
      a: "If you live in a permit zone and want to park on the street long-term, you usually need a resident permit. Check your postcode on the gemeente parking map — many city centres and dense neighborhoods require permits or paid parking.",
    },
    {
      q: "How do resident permits work?",
      a: "You apply through your municipality, typically after registering your address. The permit links to your license plate and allows parking in designated resident zones. Waiting lists and fees vary by neighborhood.",
    },
    {
      q: "How do visitor permits work?",
      a: "Many cities sell day codes or guest passes that residents activate for visitors. The guest’s license plate must be registered for the valid period. Products and prices differ by gemeente.",
    },
    {
      q: "Is parking expensive?",
      a: "Central paid parking can cost several euros per hour. Resident permits have annual fees that vary by city. P+R and cycling often cost less for occasional city access.",
    },
    {
      q: "Which parking apps are popular?",
      a: "EasyPark and Yellowbrick are widely used in Dutch cities. ANWB Onderweg and Parkmobile also operate in selected areas. Check your gemeente list for supported apps.",
    },
    {
      q: "How does EV charging work?",
      a: "Public chargers use operator apps or cards. Residents can often request curbside chargers near home through municipality programs. Charging bays may have separate time limits from parking rules.",
    },
    {
      q: "Are there waiting lists?",
      a: "Yes — high-demand neighborhoods in Amsterdam, Utrecht and other cities may have waiting lists for resident permits. Apply as soon as you are eligible and registered.",
    },
    {
      q: "What permits are handled by municipalities?",
      a: "Besides parking, gemeenten handle building and renovation permits, event use of public space, terrace permits and various local business authorizations. Processes vary by municipality.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "National government portal with living, transport and municipality context.",
    },
    {
      label: "RDW",
      href: "https://www.rdw.nl/",
      description: "Vehicle registration, import and official vehicle records in the Netherlands.",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Authoritative source for parking zones, permits, fees and local rules.",
    },
  ],
  sourceUsageTips: [
    "Use your gemeente parking portal for zone maps, fees and permit applications.",
    "RDW covers vehicle registration — parking permits are separate municipality products.",
    "Rules and fees change — verify close to your move-in date, not from memory.",
    "This guide is general information only, not legal or permit approval advice.",
  ],
  relatedGuides: [
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Broader gemeente services including registration, taxes and parking context.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Address registration unlocks resident parking permits at your postcode.",
    },
    {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Garage access, VvE parking and accommodation before move-in.",
    },
    {
      label: "Utilities in the Netherlands",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Household setup after moving — often sequenced with parking and permits.",
    },
    {
      label: "Getting Around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Public transport, cycling and mobility options before buying a car.",
    },
    {
      label: "Waste and Recycling",
      href: WASTE_AND_RECYCLING_PATH,
      status: "live",
      description: "Sorting, schedules and gemeente waste services — another local rule set that varies by municipality.",
    },
    {
      label: "Driving in the Netherlands",
      href: "/netherlands/transport/driving-in-the-netherlands/",
      status: "comingSoon",
      description: "Licence rules, road basics and car ownership for expats.",
    },
    {
      label: "Public Transport Netherlands",
      href: "/netherlands/transport/public-transport-netherlands/",
      status: "comingSoon",
      description: "OV chip card, NS trains and city transit networks.",
    },
  ] satisfies PracticalLifeLink[],
  mistakesSection: {
    heading: "Common Parking Mistakes",
    paragraphs: ["These are the parking and permit errors expats most often make after arriving in the Netherlands."],
    avoidNote:
      "If you are unsure whether a street requires payment, a permit or both, check the gemeente zone map for your postcode before parking overnight — fines often exceed the cost of a visitor pass.",
  },
  faqSection: {
    heading: "Parking and Permits FAQ",
    paragraphs: ["Quick answers for orientation — always confirm details on your gemeente website."],
  },
  sourcesSection: {
    heading: "Official Resources",
    paragraphs: [
      "Parking regulations, permit systems and fees vary by municipality and can change over time. Always verify current requirements through official sources.",
    ],
  },
  relatedSection: {
    heading: "Related Guides",
    paragraphs: ["Continue from parking orientation into municipality services, housing, utilities and transport guides."],
  },
  exploreNextSection: {
    heading: "Complete Your Practical Setup",
    paragraphs: [
      "Move from parking and permits into municipality services, getting around, housing and address registration.",
    ],
  },
  exploreNextTips: [
    "Open municipality services to connect parking with registration, taxes and local portals.",
    "Review getting around before committing to car ownership and permit costs.",
    "Confirm address registration — resident permits usually require a registered postcode.",
  ],
  exploreNextCards: [
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Registration, BSN, local taxes, parking and gemeente services.",
    },
    {
      label: "Getting Around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Public transport, cycling and mobility before buying a car.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Address registration for resident parking permits.",
    },
    {
      label: "Housing Guide",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Garage access, VvE rules and accommodation for newcomers.",
    },
    {
      label: "Utilities Guide",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Energy, water, internet and household setup after moving.",
    },
  ] satisfies PracticalLifeLink[],
  visualTextDetails: {
    overview: {
      title: "Why parking rules matter early",
      items: [
        "Municipalities set zones, permits and fees — not one national parking system.",
        "Resident permits usually require address registration at your gemeente.",
        "Paid parking and permit zones overlap — read signs and zone maps carefully.",
        "Visitor systems must be activated before guests park in permit areas.",
        "This guide is orientation only — verify rules on your gemeente website.",
      ],
    },
    snapshot: {
      title: "Parking essentials",
      items: [
        "Check whether your postcode is in a permit zone or paid-only area.",
        "Apply for resident permits early where waiting lists exist.",
        "Download parking apps before driving into city centres.",
        "Use P+R for occasional visits without central parking stress.",
        "Never assume rules from another city apply at your new address.",
      ],
    },
    understanding: {
      title: "How systems differ",
      items: [
        "City centres rely on paid parking and strict enforcement.",
        "Residential permit zones protect local overnight parking.",
        "Private garages and VvE spaces are separate from street permits.",
        "P+R connects suburban parking with train and metro networks.",
        "Your postcode determines which zone map and fees apply.",
      ],
    },
    resident: {
      title: "Resident permit notes",
      items: [
        "Register your address before applying for a parkeervergunning.",
        "Permits link to license plates — update when you change vehicles.",
        "Second vehicles may cost more or face stricter eligibility.",
        "Waiting lists are common in Amsterdam and Utrecht inner districts.",
        "Digital enforcement scans plates — stickers alone may not be enough.",
      ],
    },
    visitor: {
      title: "Visitor parking tips",
      items: [
        "Activate day codes before guests arrive — not after a fine.",
        "Moving vans may need separate exemptions — check gemeente rules.",
        "Visitor products usually work only in designated permit zones.",
        "Keep guest license plate numbers accurate in online systems.",
        "Hotel parking is separate from resident visitor products.",
      ],
    },
    paid: {
      title: "Paid zone tips",
      items: [
        "Zone codes on signs match app and meter payment options.",
        "Evenings and Sundays may have different rates or free periods.",
        "Maximum stay limits apply in some zones regardless of payment.",
        "License plate recognition means no dashboard ticket is needed when paid digitally.",
        "Wrong-zone payment still results in fines — double-check the code.",
      ],
    },
    apps: {
      title: "Using parking apps",
      items: [
        "EasyPark and Yellowbrick cover many Dutch cities — verify yours.",
        "Start sessions immediately after parking — grace periods are short.",
        "Extend time remotely if your meeting runs long.",
        "Save payment methods before your first trip into a paid zone.",
        "Apps do not replace resident permits in permit-only areas.",
      ],
    },
    parkRide: {
      title: "Park and ride tips",
      items: [
        "Check whether discounted parking requires onward OV travel.",
        "P+R rates are often lower than all-day central garage parking.",
        "Arrive early on event days — P+R fills up in Amsterdam and Utrecht.",
        "Combine with NS day tickets or subscriptions where offered.",
        "Useful for visitors without a resident permit.",
      ],
    },
    ev: {
      title: "EV charging notes",
      items: [
        "Charging bays may have time limits separate from parking payment.",
        "Request residential chargers through municipality programs where available.",
        "Operator apps show availability and pricing per kWh.",
        "VvE approval often needed for apartment charging installation.",
        "EV registration does not automatically exempt you from permit zones.",
      ],
    },
    cities: {
      title: "City differences",
      items: [
        "Amsterdam has extensive permit zones and long waiting lists in popular areas.",
        "Rotterdam mixes paid zones with district-specific permit rules.",
        "The Hague includes coastal Scheveningen parking rules separate from centre.",
        "Utrecht inner districts have strong permit demand — apply early.",
        "Always open your city guide alongside your gemeente parking portal.",
      ],
    },
    localPermits: {
      title: "Beyond parking",
      items: [
        "Building and renovation permits go through omgevingsvergunning processes.",
        "Event and terrace permits use public space applications.",
        "Business permits may interact with KVK registration and zoning.",
        "Processing times vary — start applications before deadlines.",
        "Municipality portals are authoritative — not third-party guarantee sites.",
      ],
    },
    carOwnership: {
      title: "Car or no car?",
      items: [
        "Randstad cities offer strong OV and cycling alternatives to car ownership.",
        "Suburban families may need a car — confirm parking at viewing stage.",
        "Car-sharing and rental can cover occasional trips without permit costs.",
        "Importing a vehicle triggers RDW registration and possible tax steps.",
        "Weigh annual permit, insurance and road tax against OV subscriptions.",
      ],
    },
    costs: {
      title: "Budgeting for parking",
      items: [
        "Resident permit fees vary widely by city and zone.",
        "Central hourly parking often exceeds €4 per hour in major cities.",
        "Visitor day codes are usually cheaper than repeated hourly payment.",
        "Fines exceed the cost of a visitor pass — plan ahead for guests.",
        "Verify current fees on gemeente sites — prices change.",
      ],
    },
    checklist: {
      title: "First-month sequence",
      items: [
        "Register address and note your parking zone on the gemeente map.",
        "Decide car ownership versus OV, bike and P+R before importing a vehicle.",
        "Apply for resident permit if eligible — join waiting lists early.",
        "Set up parking apps and save payment methods.",
        "Ask landlord or VvE about garage access and guest parking rules.",
      ],
    },
    mistakes: {
      title: "Avoid these errors",
      items: [
        "Parking overnight in permit zones without authorization.",
        "Assuming payment in one zone covers another area of the city.",
        "Forgetting to register a guest plate before they arrive.",
        "Importing a car before checking permit zone and waiting list status.",
        "Ignoring VvE garage rules in apartment buildings.",
      ],
    },
    municipalityDirectory: {
      title: "Finding official info",
      items: [
        "Each gemeente publishes parking under parkeren or verkeer sections.",
        "Postcode lookup tools show zone type and permit eligibility.",
        "English summaries exist in larger cities — Dutch pages are authoritative.",
        "RDW handles vehicles — gemeente handles parking permits.",
        "Report incorrect fines through official municipality channels.",
      ],
    },
    faq: {
      title: "FAQ highlights",
      items: [
        "Permits are municipality-managed — not one national parking pass.",
        "Visitor products must be activated for the correct date and plate.",
        "Waiting lists affect high-demand neighborhoods in major cities.",
        "Apps pay for timed parking — they do not replace resident permits.",
        "Rules at your new address may differ from your previous Dutch city.",
      ],
    },
    sources: {
      title: "Official verification",
      items: [
        "Government.nl provides national living and transport context.",
        "RDW covers vehicle registration and import procedures.",
        "Your gemeente website has zone maps, fees and permit applications.",
        "Requirements change — verify close to your move-in date.",
      ],
    },
    relatedGuides: {
      title: "Continue your setup",
      items: [
        "Municipality services connects parking to registration and local taxes.",
        "Address registration unlocks resident permits at many gemeenten.",
        "Housing guide helps with garage and VvE parking before move-in.",
        "Getting around covers alternatives before you commit to a car.",
      ],
    },
    exploreNext: {
      title: "Suggested next steps",
      items: [
        "Read municipality services for taxes, registration and gemeente portals.",
        "Explore getting around for OV, cycling and P+R options.",
        "Confirm address registration if you have not registered yet.",
        "Review housing guide for garage and building parking rules.",
      ],
    },
  },
  howToSchema: {
    name: "How to set up parking after moving to the Netherlands",
    description:
      "Step-by-step orientation for understanding parking zones, applying for permits and using digital parking after moving to the Netherlands.",
    steps: [
      { name: "Register your address", text: "Complete gemeente address registration so your postcode links to permit eligibility." },
      { name: "Check your parking zone", text: "Look up your address on the municipality parking map for permit or paid zone status." },
      { name: "Apply for a resident permit if needed", text: "Submit an online application if you are in a permit zone and need street parking." },
      { name: "Set up visitor permits for guests", text: "Learn how to activate day codes or guest passes before visitors arrive by car." },
      { name: "Download parking apps", text: "Install apps supported in your city for paid zone payment." },
      { name: "Review EV and other municipality permits", text: "Check charging request processes and other local permits you may need." },
    ],
  },
};
