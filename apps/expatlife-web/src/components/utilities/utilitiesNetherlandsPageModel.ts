export const UTILITIES_HUB_PATH = "/netherlands/utilities/" as const;
export const UTILITIES_NETHERLANDS_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const ENERGY_AND_WATER_NETHERLANDS_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/renting-in-the-netherlands/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const INSURANCE_PROVIDERS_PATH = "/netherlands/services/insurance-providers/" as const;

export type UtilitiesLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type UtilityProvider = {
  name: string;
  serviceType: "Energy" | "Internet" | "Water" | "Mobile";
  summary: string;
  website: string;
  serviceRegions: string;
  offers: string[];
  pricing: string;
  pros: string[];
  cons: string[];
  onlineServices: boolean;
  featured?: boolean;
};

export type InternetComparisonRow = {
  provider: string;
  technology: string;
  typicalSpeedRange: string;
  tvBundles: boolean;
  businessServices: boolean;
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-utilities-${slug}-${version}.png`,
  alt,
  caption,
});

export const utilitiesNetherlandsPage = {
  slug: "utilities-netherlands",
  path: UTILITIES_NETHERLANDS_PATH,
  hubPath: UTILITIES_HUB_PATH,
  publish: true,
  publishDate: "2026-09-23",
  seo: {
    title: "Utilities in the Netherlands | Complete Expat Setup Guide",
    description:
      "Learn how utilities work in the Netherlands, including electricity, gas, water, internet, waste collection, utility costs and how expats can set everything up.",
    keywords: [
      "utilities netherlands",
      "utility bills netherlands",
      "utilities for expats netherlands",
      "setup utilities netherlands",
      "moving netherlands utilities",
      "electricity netherlands",
      "internet providers netherlands",
      "gas and electricity netherlands",
      "water netherlands",
      "utility costs netherlands",
    ],
  },
  hero: {
    eyebrow: "Relocation setup guide",
    pageTitle: "Utilities in the Netherlands",
    subtitle:
      "Learn how electricity, gas, water, internet, waste collection and other utilities work in the Netherlands and how to set them up after moving.",
    primaryCta: { label: "Set Up Utilities", href: "#checklist" },
    secondaryCta: { label: "Explore Housing Guides", href: "#related-guides" },
    image: {
      src: "/images/heroes/netherlands-utilities-hero-v1.png",
      alt: "Photorealistic editorial scene of an international family in a modern Dutch apartment reviewing utility setup after moving.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#types", label: "Utilities" },
    { href: "#electricity", label: "Electricity" },
    { href: "#gas", label: "Gas" },
    { href: "#heating", label: "Heating" },
    { href: "#water", label: "Water" },
    { href: "#internet", label: "Internet" },
    { href: "#mobile", label: "Mobile" },
    { href: "#waste", label: "Waste" },
    { href: "#costs", label: "Costs" },
    { href: "#city-costs", label: "Cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#providers", label: "Providers" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v1",
      "Premium infographic showing Dutch utilities at a glance, including electricity, gas, regional water, internet, waste and utility costs.",
      "Use this overview to separate utilities you can choose from services managed by regional companies or municipalities."
    ),
    energy: visual(
      "energy",
      "premium-v2",
      "Premium infographic explaining electricity and gas setup with contract types, green energy, meter readings and gas or gas-free home checks.",
      "Use this energy setup visual to compare contract type, rates, green energy and heating needs before signing."
    ),
    types: visual(
      "types",
      "premium-v5",
      "Premium infographic showing typical Dutch utility services including electricity, gas, water, internet, TV, mobile phone, waste collection and district heating.",
      "Use this service map to understand what each bill or utility service usually covers before checking your rental contract."
    ),
    waterHeating: visual(
      "water-heating",
      "premium-v2",
      "Premium infographic explaining regional water supply and district heating billing differences for Dutch homes.",
      "Water and heat setup depends on region and building systems, so verify provider, meter and billing details early."
    ),
    connectivity: visual(
      "connectivity",
      "premium-v4",
      "Premium infographic explaining internet, mobile and TV setup with fibre, cable, DSL, installation timing, prepaid mobile and streaming options.",
      "Check address availability before choosing internet, mobile and TV bundles."
    ),
    waste: visual(
      "waste",
      "premium-v1",
      "Premium infographic explaining Dutch garbage and recycling rules, containers, waste passes and collection calendars.",
      "Waste collection is local, so save your municipality calendar and learn the container rules for your address."
    ),
    costs: visual(
      "costs",
      "premium-v1",
      "Premium infographic showing typical monthly utility cost ranges for single apartments, couples and families in the Netherlands.",
      "These cost examples are orientation ranges only; current bills depend on contract, address, usage, home insulation and household size."
    ),
    housingCity: visual(
      "housing-city",
      "premium-v1",
      "Premium infographic comparing utility costs by home type and Dutch city, including Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven.",
      "Utility bills vary by home size, insulation, district heating, household size, internet availability and municipal waste rules."
    ),
    checklist: visual(
      "checklist",
      "premium-v1",
      "Premium infographic checklist for setting up utilities after moving into a Dutch home.",
      "Use the move-in checklist when you receive keys, record meter readings and start arranging utilities."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v1",
      "Premium infographic showing common utility mistakes including assuming bills are included, delaying internet and missing meter readings.",
      "Avoid delays, surprise bills and setup gaps by checking these common utility mistakes before and after move-in."
    ),
    providers: visual(
      "providers",
      "premium-v1",
      "Premium infographic showing major Dutch utility provider categories for energy, internet, water and mobile services.",
      "Provider availability differs by address and region, so compare categories before checking exact terms."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing quick answers to common Dutch utilities questions for newcomers.",
      "Use the FAQ visual to identify what you still need to verify about bills, water, electricity, internet, district heating and waste."
    ),
    sources: visual(
      "sources",
      "premium-v5",
      "Premium infographic showing official resource categories for public rules, consumer rights, business utilities and local services.",
      "Use official sources to verify current rules, rights, local waste services and utility provider terms."
    ),
    relatedGuides: visual(
      "related-guides",
      "premium-v1",
      "Premium infographic journey map connecting utilities setup to renting, buying, moving, city choice and insurance providers.",
      "Continue from utilities into the next guide that matches your housing, moving, city or insurance decision."
    ),
  },
  visualTextDetails: {
    overview: {
      title: "Dutch utilities at a glance",
      items: [
        "Electricity and gas suppliers can often be chosen by the resident or contract holder.",
        "Water supply is regional, so your provider depends on where you live.",
        "Internet providers compete nationally, but fibre, cable and DSL availability depends on your address.",
        "Waste collection, recycling rules and collection schedules are managed by municipalities.",
        "Utility bills vary by household size, housing type, energy contract, insulation and usage habits.",
      ],
    },
    energy: {
      title: "Electricity and gas visual details",
      items: [
        "Compare fixed, variable and dynamic energy contracts by rate, contract length, termination terms and how much risk you can tolerate.",
        "Check whether your home uses gas, district heating, a heat pump or an all-electric setup before estimating monthly costs.",
        "Take photos of electricity and gas meter readings on move-in day and share readings with the supplier or landlord when needed.",
        "Green energy options can differ by supplier, product and sourcing, so verify what the provider means before signing.",
      ],
    },
    waterHeating: {
      title: "Water and district heating visual details",
      items: [
        "Water providers are regional, so your address determines whether you register with Waternet, Dunea, Vitens, Brabant Water, WML or another company.",
        "Tap water is regulated, but billing method, meter readings and payment setup still need checking after move-in.",
        "District heating can replace a gas connection in apartments and modern developments, with billing that differs from a normal gas contract.",
        "Ask the landlord, VvE, building manager or seller which heat provider serves the building and how fixed and usage costs are charged.",
      ],
    },
    types: {
      title: "Typical utility services visual details",
      items: [
        "Electricity powers lighting, appliances, sockets and some cooking or heating systems.",
        "Gas can be used for heating, hot water and cooking, but not every Dutch home has gas.",
        "Water covers tap water and household use through a regional provider or rental arrangement.",
        "Internet, TV and mobile are subscription services where availability, speed, bundles and contract terms vary.",
        "Waste collection and district heating depend on municipality rules, building systems or local networks.",
      ],
    },
    connectivity: {
      title: "Internet, mobile and TV visual details",
      items: [
        "Fibre, cable and DSL availability depends on postcode, house number and building connection, not only the provider name.",
        "Order internet early because installation timing, technician appointments and fibre activation can take longer than expected.",
        "A prepaid mobile SIM can be a practical backup while waiting for home internet or a longer mobile contract.",
        "TV bundles are optional; compare traditional TV, provider apps and streaming alternatives before paying for a package.",
      ],
    },
    waste: {
      title: "Garbage and recycling visual details",
      items: [
        "Municipality rules decide how glass, paper, organic waste, residual waste and bulky items are collected.",
        "Some neighborhoods use underground containers or waste passes, while others use bins or scheduled pickup days.",
        "Save the local waste calendar after moving so you know collection days, recycling points and bulky-waste booking rules.",
        "Local waste taxes and rules can differ by municipality, housing type and household situation.",
      ],
    },
    costs: {
      title: "Cost ranges from the utility visual",
      items: [
        "A single apartment may pay roughly EUR 160-300 per month across energy, water, internet and mobile.",
        "A couple may pay roughly EUR 220-420 per month depending on heating, usage and contract choices.",
        "A family may pay roughly EUR 320-650 per month, especially in larger homes or gas-heated properties.",
        "Internet often costs about EUR 30-60 per month; mobile can range from prepaid low-cost plans to larger data bundles.",
      ],
    },
    housingCity: {
      title: "Housing and city cost visual details",
      items: [
        "Studios and smaller apartments usually have lower total utility usage, especially when heating is included in rent or service costs.",
        "Townhouses and detached homes can have higher heating and electricity usage due to size, insulation and family usage patterns.",
        "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven can differ by housing stock, district heating prevalence and municipality rules.",
        "Energy label, household size, internet availability and local waste systems can matter more than city name alone.",
      ],
    },
    checklist: {
      title: "Move-in utility setup checklist",
      items: [
        "Confirm which utilities are included in rent before signing or immediately after receiving keys.",
        "Record electricity, gas and water meter readings with date-stamped photos.",
        "Arrange electricity, gas or district heating before the first billing period creates confusion.",
        "Order internet early because installation appointments and fibre activation can take time.",
        "Check municipality waste calendars, recycling containers and local waste-tax rules.",
      ],
    },
    mistakes: {
      title: "Common utility mistakes visual details",
      items: [
        "Do not assume utilities are included in rent; check the lease, service costs and landlord instructions.",
        "Order internet early because popular providers may need an installation date or building access.",
        "Record meter readings with photos on move-in day to reduce billing disputes later.",
        "Check district heating, contract type, municipality waste rules and mobile setup before your first month becomes busy.",
      ],
    },
    providers: {
      title: "Provider directory categories",
      items: [
        "Energy provider examples include Eneco, Vattenfall, Essent, Budget Energie, Greenchoice and UnitedConsumers with fixed, variable and green contract options.",
        "Internet provider examples include KPN, Ziggo, Odido, Delta and Freedom Internet; fibre, cable and DSL availability depends on postcode.",
        "Water provider examples include Waternet, Dunea, Vitens, Brabant Water and WML depending on region; drinking water is usually not switchable.",
        "Mobile provider examples include Vodafone, Simyo, Ben and Lebara with SIM-only, prepaid and international-calling options from roughly EUR 5–35 per month.",
        "Example prices in the directory are orientation ranges only; verify current tariffs, bundles, standing charges and contract terms before signing.",
      ],
    },
    faq: {
      title: "FAQ visual details",
      items: [
        "Most homes need electricity, water, internet, mobile service and waste collection; gas, district heating and TV depend on the home.",
        "Water may be included in rent, billed by a regional company or settled through the landlord.",
        "Electricity can usually be chosen by the resident unless it is included in rent or controlled by the housing arrangement.",
        "Heating is often the largest cost driver, and internet choice depends on address availability.",
      ],
    },
    sources: {
      title: "Official resources visual details",
      items: [
        "Use Dutch public information for general rules and resident context.",
        "Use consumer market authority information for energy, telecom and consumer-rights topics.",
        "Use business information portals for entrepreneur or company utility context.",
        "Use municipality websites for waste rules, local permits, collection days and local service information.",
      ],
    },
    relatedGuides: {
      title: "Related guide journey visual details",
      items: [
        "Renting guidance helps you check included utilities, service costs, meter readings and contract responsibilities.",
        "Buying guidance helps you plan post-transfer utilities, insurance, taxes and ownership costs.",
        "Moving guidance helps you sequence first-week tasks such as registration, banking, health insurance and utilities.",
        "City and insurance guides help connect utility setup to local costs, housing choices and practical risk cover.",
      ],
    },
  },
  intro: {
    heading: "Understanding Utilities in the Netherlands",
    paragraphs: [
      "After moving to the Netherlands, most residents need to arrange electricity, gas or district heating, water, internet, television, mobile services and local waste collection.",
      "Some utilities may be included in rent, especially in temporary housing, furnished rentals or all-in contracts. Others require separate contracts in your own name. Always confirm this before signing a lease or immediately after receiving keys.",
      "The most important practical difference is who controls the service: energy and internet are usually chosen by the resident, water is regional, and waste collection is handled by the municipality.",
    ],
  },
  snapshotCards: [
    { title: "Electricity provider can often be chosen", body: "Residents often compare electricity suppliers by contract type, green energy mix, fixed or variable rates and customer service." },
    { title: "Gas provider can often be chosen", body: "Gas may be bundled with electricity, but some homes use district heating or are gas-free." },
    { title: "Water providers are region-based", body: "You usually register with the water company assigned to your address rather than choosing from a market." },
    { title: "Internet providers compete nationally", body: "KPN, Ziggo, Odido, Delta and others may be available, but technology depends on postcode and building." },
    { title: "Waste collection is municipality-managed", body: "Rules for paper, glass, organic waste, residual waste and collection days differ by city and neighborhood." },
    { title: "Utility costs vary by household size", body: "A studio, family townhouse and poorly insulated detached home can have very different monthly bills." },
  ],
  utilityTypes: [
    { title: "Electricity", body: "Powers lighting, appliances, cooking in electric homes, home-office equipment and increasingly heat pumps or induction cooking." },
    { title: "Gas", body: "Still used in many homes for heating, hot water and cooking, although the Netherlands is transitioning toward lower-gas housing." },
    { title: "Water", body: "Covers drinking water and household water use, billed by a regional water company or sometimes advanced by a landlord." },
    { title: "Internet", body: "Home broadband may be fibre, cable or DSL depending on the address; installation can take longer than newcomers expect." },
    { title: "TV", body: "Traditional TV is often bundled with internet, but many households now use streaming services instead." },
    { title: "Mobile Phone", body: "Mobile plans range from prepaid SIM cards to one- or two-year contracts with data, EU roaming and international calling add-ons." },
    { title: "Waste Collection", body: "Municipalities manage household waste, recycling containers, collection passes, bulky waste and local waste taxes." },
    { title: "District Heating", body: "Some apartments and new developments use stadsverwarming instead of individual gas contracts." },
  ],
  electricity: {
    heading: "Electricity Providers",
    paragraphs: [
      "Residents generally choose electricity suppliers unless electricity is included in rent or temporary accommodation. Energy comparison usually starts with address, expected usage, contract length and whether you want fixed or variable rates.",
      "Fixed contracts give price certainty for a period, while variable contracts can change with market conditions. Dynamic contracts may follow hourly or market-linked prices and are better suited to people who actively manage usage.",
      "Green energy options are common, but check whether a provider's product uses Dutch renewable generation, certificates or broader European sourcing if that matters to you.",
    ],
    providers: ["Eneco", "Vattenfall", "Essent", "Budget Energie", "Greenchoice", "UnitedConsumers"],
  },
  gas: {
    heading: "Gas Supply",
    paragraphs: [
      "Many Dutch homes still use gas for central heating, hot water or cooking. If your property has a gas meter, gas is often arranged together with electricity through one energy supplier.",
      "Gas usage can be the largest variable utility cost in older or less insulated homes. Ask about insulation, heating system, energy label and previous usage before estimating monthly bills.",
      "The Netherlands is moving toward sustainability and lower-gas housing, so newer apartments may use district heating, heat pumps or all-electric systems instead of a gas connection.",
    ],
  },
  districtHeating: {
    heading: "District Heating (Stadsverwarming)",
    paragraphs: [
      "Some apartments, urban developments and newer housing projects use district heating instead of an individual gas contract. Heat is supplied through a local network and billed separately from electricity.",
      "District heating is common in parts of cities and apartment complexes where collective heating networks are used. Availability depends on the building, not personal preference.",
      "Billing can feel different from gas because you may have fewer provider choices and separate charges for heat delivery, usage and sometimes fixed network costs. Ask the landlord, seller or property manager before moving in.",
    ],
  },
  water: {
    heading: "Water Supply",
    paragraphs: [
      "Water is generally supplied by regional water companies. Residents usually cannot choose their water provider because service areas are assigned geographically.",
      "Dutch tap water is high quality and drinking water standards are strict. You may receive bills directly from the water company, through a landlord or via settlement if you are in serviced accommodation.",
      "When moving in, check whether you need to register the address, provide meter readings and set up payment. Water tax and municipal water-related charges may appear separately depending on location.",
    ],
    providers: ["Waternet", "Dunea", "Vitens", "Brabant Water", "WML"],
  },
  internet: {
    heading: "Internet and Home Connectivity",
    paragraphs: [
      "Internet availability depends on your exact address. Fibre can offer high speeds, cable is common through Ziggo, DSL may remain available in some places, and installation lead times vary.",
      "If you work remotely, order internet as soon as your move-in date is clear and keep a mobile hotspot or temporary SIM option as a fallback. Some buildings require an installer appointment or access to a meter cupboard.",
    ],
    table: [
      { provider: "KPN", technology: "Fibre / DSL", typicalSpeedRange: "50 Mbps to 4 Gbps where fibre is available", tvBundles: true, businessServices: true },
      { provider: "Ziggo", technology: "Cable", typicalSpeedRange: "100 Mbps to 1 Gbps depending on package", tvBundles: true, businessServices: true },
      { provider: "Odido", technology: "Fibre / mobile / fixed internet", typicalSpeedRange: "100 Mbps to 8 Gbps in selected fibre areas", tvBundles: true, businessServices: true },
      { provider: "Delta", technology: "Fibre / cable in selected regions", typicalSpeedRange: "150 Mbps to multi-gigabit where available", tvBundles: true, businessServices: true },
      { provider: "Freedom Internet", technology: "Fibre / DSL via available networks", typicalSpeedRange: "Depends on local network and address", tvBundles: false, businessServices: true },
    ] satisfies InternetComparisonRow[],
  },
  mobile: {
    heading: "Mobile Services",
    paragraphs: [
      "Mobile setup is often one of the easiest first-week tasks. Newcomers can start with a prepaid SIM, then switch to a contract after registration, bank setup or BSN timing is clearer.",
      "Compare data allowance, EU roaming, international calling, contract length, number portability and whether a Dutch bank account is required. Families and frequent travelers should check shared bundles and international add-ons.",
    ],
    providers: ["KPN", "Vodafone", "Odido", "Simyo", "Ben", "Lebara"],
  },
  tv: {
    heading: "Television and Streaming",
    paragraphs: [
      "Traditional TV is often sold as an internet bundle, especially by cable and fibre providers. This can be convenient if you want Dutch channels, sports packages or a set-top box.",
      "Many expats skip traditional TV and use streaming services instead. Before bundling TV, check whether the channels, language options and cancellation terms are worth the added monthly cost.",
    ],
  },
  waste: {
    heading: "Garbage and Recycling",
    paragraphs: [
      "Waste collection is typically managed by municipalities. Local rules decide how you dispose of glass, paper, plastic, organic waste, residual waste and bulky items.",
      "Many cities use underground containers, waste passes, scheduled pickup days or separate neighborhood recycling points. Check your municipality website after registering your address and save the waste calendar.",
    ],
    items: ["Glass", "Paper", "Organic waste", "Plastic or PMD where collected", "Residual waste", "Bulky waste appointments"],
  },
  costExamples: [
    {
      household: "Single apartment",
      totalRange: "EUR 160-300 per month",
      details: ["Electricity EUR 40-80", "Gas or heating EUR 60-140", "Water EUR 15-25", "Internet EUR 30-50", "Mobile EUR 10-20"],
    },
    {
      household: "Couple",
      totalRange: "EUR 220-420 per month",
      details: ["Electricity EUR 60-120", "Gas or heating EUR 80-200", "Water EUR 20-35", "Internet EUR 30-60", "Mobile EUR 15-25 each"],
    },
    {
      household: "Family",
      totalRange: "EUR 320-650 per month",
      details: ["Electricity EUR 90-180", "Gas or heating EUR 120-300", "Water EUR 25-45", "Internet EUR 30-60", "Mobile EUR 20-35 each"],
    },
  ],
  housingTypes: [
    { title: "Studio Apartment", body: "Usually lower energy and water usage; internet may be the biggest fixed utility if heating is included." },
    { title: "Apartment", body: "Check whether heating is individual gas, district heating or included through service costs." },
    { title: "Townhouse", body: "Expect higher heating and electricity usage, especially with families or older insulation." },
    { title: "Detached House", body: "Usage can be much higher due to space, garden, heating loss and possible maintenance-related systems." },
  ],
  cityCosts: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", body: "Higher rents and many apartments; district heating and VvE arrangements can affect what is included." },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", body: "Varied housing stock from modern apartments to family homes; check heating system and insulation carefully." },
    { city: "The Hague", href: "/netherlands/the-hague/", body: "Apartments, townhouses and international households mean costs vary widely by neighborhood and home size." },
    { city: "Utrecht", href: "/netherlands/utrecht/", body: "Competitive housing market with many apartments and family homes; internet availability is usually address-specific." },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", body: "Modern developments may use fibre and newer heating systems, while older homes can have higher gas usage." },
  ],
  setupChecklist: [
    "Confirm utilities included in rent",
    "Arrange electricity",
    "Arrange gas or district heating",
    "Arrange water registration",
    "Order internet",
    "Set up mobile plan",
    "Understand waste collection rules",
    "Record utility meter readings",
  ],
  commonMistakes: [
    "Assuming utilities are included",
    "Delaying internet installation",
    "Not comparing providers",
    "Forgetting meter readings",
    "Ignoring district heating",
    "Choosing unsuitable contracts",
    "Missing municipality information",
    "Forgetting mobile setup",
  ],
  providerDirectory: [
    {
      name: "Eneco",
      serviceType: "Energy",
      summary: "Major Dutch energy supplier for electricity, gas and selected heat products, often compared for fixed, variable and green-energy contracts.",
      website: "https://www.eneco.nl/",
      serviceRegions: "National electricity and gas supply; district heating in selected areas.",
      offers: ["Electricity and gas contracts", "Fixed, variable and dynamic contract types", "Green electricity and sustainability add-ons", "Online account, app and usage tools", "EV charging and solar-related products in selected packages"],
      pricing: "Example orientation: electricity supply tariffs often sit around EUR 0.28–0.32 per kWh incl. VAT before standing charges; a typical two-person home may pay roughly EUR 120–220 per month for electricity and gas combined depending on usage, contract type and season.",
      pros: ["Broad national product range across electricity, gas and heat", "Useful sustainability and smart-home options for longer stays", "Mature online setup and customer account tools"],
      cons: ["Final bill depends heavily on annual usage and contract type", "Green or comfort add-ons can raise the monthly total quickly"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Vattenfall",
      serviceType: "Energy",
      summary: "Large national energy supplier offering electricity, gas, green energy and selected local heat networks.",
      website: "https://www.vattenfall.nl/",
      serviceRegions: "National energy supply; heat networks in selected cities and developments.",
      offers: ["Electricity and gas for households", "Fixed and variable tariffs", "Green electricity options", "Online contract management", "Heat and comfort products in selected areas"],
      pricing: "Example orientation: public comparison ranges often show electricity from roughly EUR 0.29 per kWh incl. VAT; combined electricity and gas for an average apartment may land around EUR 100–180 per month in moderate usage months and higher in winter.",
      pros: ["One of the largest suppliers with broad national coverage", "Clear contract and tariff information online", "Useful for expats comparing mainstream fixed-rate options"],
      cons: ["Not always the cheapest headline rate on comparison sites", "Heat-network homes may have limited supplier choice"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Essent",
      serviceType: "Energy",
      summary: "Major Dutch electricity and gas supplier often compared on price, contract length and online switching.",
      website: "https://www.essent.nl/",
      serviceRegions: "National electricity and gas supply.",
      offers: ["Electricity and gas contracts", "Fixed and variable products", "Online switching and contract extension", "Usage and billing dashboards", "Business energy products"],
      pricing: "Example orientation: comparison sites often list Essent electricity from roughly EUR 0.28–0.30 per kWh incl. VAT; a couple in a one-bedroom home might budget roughly EUR 110–200 per month for energy in shoulder months, more with gas heating in winter.",
      pros: ["Large supplier with straightforward online signup", "Often competitive on fixed-price comparison results", "Useful when you want a mainstream national brand"],
      cons: ["Cheapest offer can change with promotions and contract length", "Actual monthly cost still depends on meter readings and taxes"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Budget Energie",
      serviceType: "Energy",
      summary: "Price-focused energy brand often bundled with telecom products under the Budget Thuis group.",
      website: "https://www.budgetthuis.nl/energie/",
      serviceRegions: "National electricity and gas supply.",
      offers: ["Electricity and gas contracts", "Budget positioning on comparison sites", "Combined energy and telecom bundles in selected cases", "Online contract setup", "Fixed and variable options depending on campaign"],
      pricing: "Example orientation: comparison listings sometimes show lower headline electricity rates from about EUR 0.27–0.29 per kWh incl. VAT; monthly totals still depend on standing charges, grid fees, taxes and gas usage.",
      pros: ["Often appears among lower-cost comparison results", "Can suit cost-conscious households comfortable with online-only service", "Useful if you also want a telecom bundle from the same group"],
      cons: ["Low advertised rates may rely on specific contract terms or welcome discounts", "Customer service is more digital-first than advisory"],
      onlineServices: true,
    },
    {
      name: "Greenchoice",
      serviceType: "Energy",
      summary: "Sustainability-focused energy supplier associated with green electricity and Dutch renewable sourcing.",
      website: "https://www.greenchoice.nl/",
      serviceRegions: "National electricity and gas supply.",
      offers: ["Green electricity products", "Gas contracts where applicable", "Fixed and variable tariffs", "Online usage insight", "Sustainability-focused product positioning"],
      pricing: "Example orientation: green electricity offers often sit slightly above the lowest market rates, around EUR 0.30–0.32 per kWh incl. VAT in public comparisons; expect roughly EUR 120–230 per month for combined electricity and gas in a typical apartment depending on usage.",
      pros: ["Strong fit if renewable sourcing matters more than the absolute lowest rate", "Clear green-energy positioning for environmentally conscious households", "Online contract management"],
      cons: ["Usually not the cheapest headline tariff on pure price comparisons", "English support and product detail can be more Dutch-language focused"],
      onlineServices: true,
    },
    {
      name: "UnitedConsumers",
      serviceType: "Energy",
      summary: "Consumer collective offering energy contracts alongside other household services through membership-style propositions.",
      website: "https://www.unitedconsumers.com/",
      serviceRegions: "National availability subject to address, product and membership terms.",
      offers: ["Collective energy contracts", "Electricity and gas products", "Member pricing propositions", "Online signup and account tools", "Cross-category household offers beyond energy"],
      pricing: "Example orientation: collective offers can show competitive monthly estimates, but final pricing depends on membership terms, contract type and annual consumption; verify the all-in monthly figure rather than a headline discount alone.",
      pros: ["Can be useful when comparing collective or membership-based deals", "May combine energy with other household savings propositions", "Online comparison and signup flow"],
      cons: ["Membership or bundle structure adds complexity", "Not always the simplest option for a first-week move-in setup"],
      onlineServices: true,
    },
    {
      name: "KPN",
      serviceType: "Internet",
      summary: "Major Dutch telecom provider offering fibre, DSL, TV, mobile and business connectivity with strong national coverage.",
      website: "https://www.kpn.com/",
      serviceRegions: "National telecom provider; fibre and DSL availability depends on address.",
      offers: ["Fibre and DSL internet", "Wi-Fi modem and installation options", "TV and streaming bundles", "Mobile plans and converged bundles", "Business connectivity"],
      pricing: "Example orientation: home fibre packages often cost about EUR 40–65 per month depending on speed, TV add-ons and promotions; installation or activation fees may apply on first signup.",
      pros: ["Reliable national brand with strong fibre footprint", "Useful English-language information for key products", "Good option when stability matters more than the lowest headline price"],
      cons: ["Often priced at a premium versus budget network resellers", "Exact speed and technology depend on postcode and building connection"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Ziggo",
      serviceType: "Internet",
      summary: "Cable internet and TV provider with high-speed packages on the Ziggo coax network in many urban addresses.",
      website: "https://www.ziggo.nl/",
      serviceRegions: "Cable network availability depends on address, especially in larger cities.",
      offers: ["Cable internet up to around 1 Gbps download in many areas", "TV packages and sports add-ons", "Wi-Fi pods and whole-home Wi-Fi options", "Mobile bundles in selected propositions", "Business internet"],
      pricing: "Example orientation: cable internet often ranges from about EUR 35–65 per month depending on speed tier, Wi-Fi extras and TV bundles; setup or activation costs can apply.",
      pros: ["Strong urban cable coverage and fast download speeds", "Popular with households that want TV or sports bundles", "Useful when fibre is unavailable but cable is present"],
      cons: ["Upload speeds are often lower than full fibre", "Service is address-dependent and not available everywhere"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Odido",
      serviceType: "Internet",
      summary: "Telecom provider offering mobile, fibre internet, TV and converged home connectivity after the T-Mobile rebrand.",
      website: "https://www.odido.nl/",
      serviceRegions: "National mobile; fixed internet depends on address and network access.",
      offers: ["Fibre and DSL home internet", "Mobile and home bundles", "TV and entertainment packages", "Online signup and self-service", "Business connectivity"],
      pricing: "Example orientation: home internet packages often start around EUR 30–55 per month depending on speed and bundle; combined mobile plus internet deals can change the total materially.",
      pros: ["Useful if you want one provider for mobile and home internet", "Often competitive on bundled pricing", "Flexible contract options in many campaigns"],
      cons: ["Fixed-line availability varies more than the mobile brand suggests", "Promotional pricing may rise after the initial term"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Delta",
      serviceType: "Internet",
      summary: "Regional provider offering fibre and cable internet in selected Dutch networks, especially in parts of the south and west.",
      website: "https://www.delta.nl/",
      serviceRegions: "Selected regional fibre and cable availability; postcode check required.",
      offers: ["Fibre and cable internet", "TV bundles in selected areas", "Wi-Fi modem rental or purchase options", "Online contract management", "Regional network services"],
      pricing: "Example orientation: where available, home internet often costs roughly EUR 32–55 per month depending on speed and TV options; not every Dutch address can order Delta.",
      pros: ["Can be strong value in its active network regions", "Useful alternative when national cable or fibre options are limited", "Online availability check before ordering"],
      cons: ["Coverage is regional rather than nationwide", "Less relevant if your postcode sits outside Delta network areas"],
      onlineServices: true,
    },
    {
      name: "Freedom Internet",
      serviceType: "Internet",
      summary: "Internet provider reselling access over available Dutch networks with a privacy-focused positioning.",
      website: "https://freedom.nl/",
      serviceRegions: "Availability depends on address and underlying network access.",
      offers: ["Fixed home internet over available networks", "No long-term contract positioning on selected products", "Online signup and support", "Transparent network-reseller model", "Modem and installation options"],
      pricing: "Example orientation: reseller pricing often lands around EUR 30–50 per month depending on underlying network, speed and modem choice; verify whether a network switch or technician visit is needed.",
      pros: ["Useful for users who want flexible or shorter-commitment internet", "Clear reseller positioning can simplify comparison", "Can be competitive where underlying network access already exists"],
      cons: ["Final speed and install timing depend on the underlying network owner", "TV and full bundle options are more limited than large incumbents"],
      onlineServices: true,
    },
    {
      name: "Waternet",
      serviceType: "Water",
      summary: "Regional water organization supplying drinking water and managing water-related services in Amsterdam and surrounding areas.",
      website: "https://www.waternet.nl/",
      serviceRegions: "Amsterdam and selected surrounding municipalities.",
      offers: ["Drinking water supply", "Wastewater and water-system services in its region", "Online account and meter information", "Tap-water quality information", "Move-in registration support"],
      pricing: "Example orientation: drinking water for a one- to two-person household often costs roughly EUR 13–20 per month, while larger households may pay around EUR 20–28 depending on usage and local tariffs.",
      pros: ["Clear regional provider for Amsterdam-area newcomers", "Tap water is regulated and generally safe to drink", "Online account setup after move-in"],
      cons: ["You cannot choose a different drinking-water company for the same address", "Billing method and meter setup still need checking in rental situations"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Dunea",
      serviceType: "Water",
      summary: "Regional drinking water company serving parts of South Holland, including The Hague area.",
      website: "https://www.dunea.nl/",
      serviceRegions: "The Hague region and parts of South Holland.",
      offers: ["Drinking water supply", "Customer account and billing tools", "Water-quality information", "Move-related registration guidance", "Regional service information"],
      pricing: "Example orientation: many households in the region pay roughly EUR 14–22 per month for drinking water, with higher usage or larger homes toward the upper end of that range.",
      pros: ["Established regional provider for The Hague and nearby municipalities", "Straightforward regulated water service", "Useful official source for move-in registration"],
      cons: ["Provider is fixed by address, not chosen competitively", "Rental contracts may handle water differently from owner-occupied homes"],
      onlineServices: true,
    },
    {
      name: "Vitens",
      serviceType: "Water",
      summary: "Large Dutch drinking water company serving multiple provinces across the central, eastern and northern Netherlands.",
      website: "https://www.vitens.nl/",
      serviceRegions: "Large parts of central, eastern and northern Netherlands.",
      offers: ["Drinking water supply", "Online customer portal", "Meter and billing information", "Water-quality reporting", "Regional service coverage"],
      pricing: "Example orientation: drinking water commonly costs about EUR 12–25 per month for many households, depending on occupants, garden use and local tariff structure.",
      pros: ["Serves a very large share of Dutch addresses outside the Randstad water companies", "Regulated service with public tariff information", "Online account tools after registration"],
      cons: ["No supplier choice at a given address", "Move-in timing and landlord arrangements still need checking"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Brabant Water",
      serviceType: "Water",
      summary: "Regional drinking water company for Noord-Brabant.",
      website: "https://www.brabantwater.nl/",
      serviceRegions: "North Brabant.",
      offers: ["Drinking water supply", "Customer service and billing", "Move-in information", "Water-quality transparency", "Online account access"],
      pricing: "Example orientation: typical household drinking-water bills often fall around EUR 13–24 per month depending on household size and usage.",
      pros: ["Clear regional provider for Brabant addresses", "Stable regulated drinking-water service", "Useful first stop after confirming your municipality"],
      cons: ["Only relevant if your home lies in Brabant Water service area", "Water may be included or settled differently in some rentals"],
      onlineServices: true,
    },
    {
      name: "WML",
      serviceType: "Water",
      summary: "Waterleiding Maatschappij Limburg supplies drinking water across Limburg.",
      website: "https://www.wml.nl/",
      serviceRegions: "Limburg.",
      offers: ["Drinking water supply", "Online customer tools", "Move and address-registration guidance", "Water-quality information", "Regional billing support"],
      pricing: "Example orientation: drinking water in Limburg often costs roughly EUR 12–22 per month for standard household use, with higher consumption increasing the total.",
      pros: ["Official regional water provider for Limburg residents", "Regulated pricing and service standards", "Online information for new address registration"],
      cons: ["Not selectable if you live outside Limburg", "Landlord or VvE billing arrangements can differ from direct customer accounts"],
      onlineServices: true,
    },
    {
      name: "Vodafone",
      serviceType: "Mobile",
      summary: "Major mobile network operator offering postpaid, SIM-only, prepaid and business mobile plans.",
      website: "https://www.vodafone.nl/",
      serviceRegions: "National mobile network coverage.",
      offers: ["SIM-only and phone plans", "Prepaid and postpaid options", "5G access on supported plans", "EU roaming on eligible subscriptions", "Business mobile services"],
      pricing: "Example orientation: SIM-only plans often range from about EUR 10–35 per month depending on data bundle, 5G access and contract length; phone-inclusive plans cost more.",
      pros: ["One of the main national networks with broad coverage", "Useful for users who want premium network options and retail support", "Wide range of data bundles and business products"],
      cons: ["Not always the cheapest SIM-only option versus budget brands", "Promotional pricing can rise after the initial term"],
      onlineServices: true,
      featured: true,
    },
    {
      name: "Simyo",
      serviceType: "Mobile",
      summary: "Budget-friendly SIM-only and prepaid brand operating on the KPN network.",
      website: "https://www.simyo.nl/",
      serviceRegions: "National mobile coverage via KPN network.",
      offers: ["SIM-only subscriptions", "Prepaid options", "Flexible data bundles", "Online-only account management", "Number portability"],
      pricing: "Example orientation: SIM-only plans often start around EUR 6–18 per month for smaller data bundles and can reach EUR 20–30 for larger data packages; verify current bundle sizes before ordering.",
      pros: ["Often strong value for straightforward SIM-only needs", "Uses the KPN network without premium-brand pricing", "Useful temporary option while settling in"],
      cons: ["Support is more digital-first than shop-based", "Large data or international add-ons can narrow the price gap with main brands"],
      onlineServices: true,
    },
    {
      name: "Ben",
      serviceType: "Mobile",
      summary: "Mobile provider focused on SIM-only and simple phone plans with online-first service.",
      website: "https://www.ben.nl/",
      serviceRegions: "National mobile coverage.",
      offers: ["SIM-only plans", "Phone subscriptions", "Flexible data bundles", "Online account management", "Number retention support"],
      pricing: "Example orientation: SIM-only pricing often falls around EUR 8–25 per month depending on data, minutes and whether a phone is included in the contract.",
      pros: ["Simple online signup for SIM-only users", "Can be a good fit for expats who already have a phone", "Competitive pricing in the budget-to-mid market"],
      cons: ["Fewer physical stores than the largest network brands", "International calling may require add-ons depending on plan"],
      onlineServices: true,
    },
    {
      name: "Lebara",
      serviceType: "Mobile",
      summary: "Mobile provider often used by internationals for prepaid, SIM-only and international calling options.",
      website: "https://www.lebara.nl/",
      serviceRegions: "National mobile coverage.",
      offers: ["Prepaid and SIM-only plans", "International calling bundles", "Flexible top-up model", "Online and retail purchase options", "Short-commitment plans"],
      pricing: "Example orientation: prepaid and SIM-only plans often start from about EUR 5–15 per month for light usage, with larger data or international bundles moving toward EUR 15–30.",
      pros: ["Useful for newcomers who want prepaid or low-commitment service", "International calling options can suit frequent overseas contact", "Easy short-term setup before choosing a longer contract"],
      cons: ["Not always the best value for heavy domestic data users", "Plan structures differ from mainstream postpaid providers and need careful comparison"],
      onlineServices: true,
    },
  ] satisfies UtilityProvider[],
  faqs: [
    { q: "What utilities do I need in the Netherlands?", a: "Most households need electricity, water, internet, mobile service and waste collection. Gas or district heating depends on the home. TV is optional and often bundled with internet." },
    { q: "Is water included in rent?", a: "Sometimes, especially in temporary or all-in rentals, but many residents register with the regional water company or settle usage through the landlord. Always check the contract." },
    { q: "Can I choose my electricity provider?", a: "Usually yes, unless electricity is included in rent or controlled by a special housing arrangement. You can normally compare suppliers by contract type, rate, green energy option and customer service." },
    { q: "How much do utilities cost in the Netherlands?", a: "A single apartment may pay roughly EUR 160-300 per month across energy, water, internet and mobile, while couples and families often pay more. Actual costs depend on home size, insulation, contract and usage." },
    { q: "Which internet provider is best?", a: "There is no universal best provider. The right choice depends on address availability, fibre or cable access, speed needs, installation timing, TV bundles and business requirements." },
    { q: "What is district heating?", a: "District heating, or stadsverwarming, supplies heat through a local network instead of an individual gas boiler. It is common in some apartments and modern developments, and billing differs from gas." },
    { q: "How does garbage collection work?", a: "Municipalities manage waste collection. Check your local municipality for recycling rules, container access, collection days, bulky waste appointments and waste taxes." },
    { q: "What should I set up first?", a: "First confirm what is included in rent, record meter readings, arrange energy or heating, register water if needed and order internet early. Then handle mobile, TV and waste-calendar details." },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "General Dutch government information for residents and public services." },
    { label: "ACM", href: "https://www.acm.nl/en", description: "Consumer and market authority context for energy, telecom and consumer rights." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Business utility and regulatory context for entrepreneurs and companies." },
    { label: "Local municipalities", href: "https://www.government.nl/topics/municipalities", description: "Municipality routes for waste collection, local taxes and neighborhood rules." },
  ],
  relatedGuides: [
    { label: "Energy and Water", href: "/netherlands/utilities/energy-and-water-netherlands/", status: "live", description: "Deep guide to electricity, gas, water, district heating and costs." },
    { label: "Internet and Mobile", href: "/netherlands/utilities/internet-and-mobile-netherlands/", status: "live", description: "Home internet, mobile plans, SIM-only, eSIM and provider setup how-to." },
    { label: "Internet providers", href: "/netherlands/services/internet-providers/", status: "live", description: "Services directory for fibre, cable and DSL ISP comparison." },
    { label: "Energy providers", href: "/netherlands/services/energy-providers/", status: "live", description: "Services directory for electricity and gas supplier comparison." },
    { label: "Phone providers", href: "/netherlands/services/phone-providers/", status: "live", description: "Services directory for prepaid, SIM-only and eSIM plan discovery." },
    { label: "Mobile & connectivity", href: "/netherlands/services/mobile-connectivity/", status: "live", description: "Broader services category for SIMs, data and local numbers." },
    { label: "Municipality Services", href: "/netherlands/practical-life/municipality-services-netherlands/", status: "live", description: "Gemeente registration, BSN, local taxes, parking and waste services." },
    { label: "Waste and Recycling", href: "/netherlands/practical-life/waste-and-recycling-netherlands/", status: "live", description: "Sorting, schedules, underground containers and recycling centers." },
    { label: "Parking and Local Permits", href: "/netherlands/practical-life/parking-and-local-permits-netherlands/", status: "live", description: "Resident permits, visitor codes, paid zones and parking apps." },
    { label: "Subscriptions and Cancellations", href: "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/", status: "live", description: "Contract terms, notice periods and cancellation for utilities and telecom." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Rental setup, contracts and what to confirm before signing." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Owner responsibilities, utilities and post-transfer setup." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Relocation planning and first-week admin." },
    { label: "Dutch Cities", href: CITIES_HUB_PATH, status: "live", description: "Compare city context before choosing where to live." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Connect utilities with home, contents and liability cover." },
  ] satisfies UtilitiesLink[],
  exploreNextCards: [
    { label: "Energy providers", href: "/netherlands/services/energy-providers/", status: "live", description: "Compare electricity and gas suppliers after utilities orientation." },
    { label: "Internet providers", href: "/netherlands/services/internet-providers/", status: "live", description: "Compare fibre, cable and DSL broadband deals." },
    { label: "Phone providers", href: "/netherlands/services/phone-providers/", status: "live", description: "Compare prepaid, SIM-only and eSIM plans." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Plan utilities, insurance, taxes and ownership costs after transfer." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare home, contents, liability and other practical cover." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Continue into move planning, registration and first-week setup." },
  ] satisfies UtilitiesLink[],
  futureExpansion: [
    "/netherlands/utilities/electricity-netherlands/",
    "/netherlands/utilities/water-netherlands/",
    "/netherlands/utilities/fibre-internet-netherlands/",
    "/netherlands/utilities/esim-netherlands/",
  ],
};
