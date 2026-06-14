import { MOVING_TO_NETHERLANDS_PATH, UTILITIES_HUB_PATH, UTILITIES_NETHERLANDS_PATH } from "./utilitiesNetherlandsPageModel";

export const ENERGY_AND_WATER_NETHERLANDS_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/renting-in-the-netherlands/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const INSURANCE_PROVIDERS_PATH = "/netherlands/services/insurance-providers/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type EnergyWaterLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type EnergyProviderSummary = {
  name: string;
  summary: string;
  energyTypes: string[];
  sustainabilityFocus: string;
  onlineServices: boolean;
  website: string;
};

export type EnergyWaterProvider = {
  name: string;
  serviceType: "Energy" | "Water";
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

export type ContractTypeRow = {
  name: string;
  priceStability: string;
  flexibility: string;
  risk: string;
  budgetPredictability: string;
};

export type CostExample = {
  profile: string;
  electricity: string;
  gas: string;
  water: string;
  total: string;
};

export type TipCard = {
  title: string;
  body: string;
};

export type HeatingComparisonRow = {
  aspect: string;
  individualGas: string;
  districtHeating: string;
};

export type WaterRegionExample = {
  provider: string;
  region: string;
  note: string;
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-energy-water-${slug}-${version}.png`,
  alt,
  caption,
});

export const energyAndWaterNetherlandsPage = {
  slug: "energy-and-water-netherlands",
  path: ENERGY_AND_WATER_NETHERLANDS_PATH,
  hubPath: UTILITIES_HUB_PATH,
  parentGuidePath: UTILITIES_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-27",
  seo: {
    title: "Energy and Water in the Netherlands | Complete Expat Utility Guide",
    description:
      "Learn how energy and water services work in the Netherlands, including providers, setup, costs, district heating, sustainability options and utility management.",
    keywords: [
      "energy netherlands",
      "water netherlands",
      "gas and electricity netherlands",
      "utilities netherlands",
      "energy providers netherlands",
      "water providers netherlands",
      "district heating netherlands",
      "electricity netherlands",
      "utility bills netherlands",
      "expat utilities netherlands",
    ],
  },
  hero: {
    eyebrow: "Energy and water guide",
    pageTitle: "Energy and Water in the Netherlands",
    subtitle:
      "Understand how electricity, gas, district heating and water services work in the Netherlands, including providers, costs and setup after moving.",
    primaryCta: { label: "Understand Utility Services", href: "#intro" },
    secondaryCta: { label: "Compare Providers", href: "#providers" },
    image: {
      src: "/images/heroes/netherlands-energy-water-hero-v2.png",
      alt: "Photorealistic editorial scene of a couple in a modern Dutch kitchen setting up energy and water utilities after moving, with tap water, a smart thermostat and canal houses visible through the window.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#how-energy-works", label: "Energy bills" },
    { href: "#energy-providers", label: "Providers" },
    { href: "#contracts", label: "Contracts" },
    { href: "#green-energy", label: "Green energy" },
    { href: "#district-heating", label: "Heating" },
    { href: "#water", label: "Water" },
    { href: "#tap-water", label: "Tap water" },
    { href: "#costs", label: "Costs" },
    { href: "#housing-city", label: "Home & city" },
    { href: "#checklist", label: "Checklist" },
    { href: "#savings", label: "Savings" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#providers", label: "Directory" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v1",
      "Premium infographic map of Dutch energy and water services for expats after moving.",
      "Use this map to separate services you choose from regional water supply, district heating and first-week setup tasks."
    ),
    energy: visual("energy", "premium-v1", "Premium infographic explaining electricity and gas bills in the Netherlands.", "Typical Dutch energy bills combine usage, network charges, taxes and annual settlement."),
    energyProviders: visual(
      "energy-providers",
      "premium-v1",
      "Premium infographic showing major Dutch energy provider examples and comparison points without rankings.",
      "Use this provider map to compare electricity, gas, green options and online service before checking exact terms."
    ),
    contracts: visual("contracts", "premium-v1", "Premium infographic comparing fixed, variable and dynamic energy contracts.", "Compare contract types by stability, flexibility, risk and budget predictability."),
    green: visual("green", "premium-v1", "Premium infographic explaining renewable energy choices in the Netherlands.", "Many providers offer green electricity, wind and solar-related products."),
    heating: visual("heating", "premium-v1", "Premium infographic explaining district heating in Dutch homes.", "District heating is common in apartments and modern developments in major cities."),
    water: visual("water", "premium-v1", "Premium infographic explaining regional water supply in the Netherlands.", "Your address determines which regional water company serves your home."),
    tapWater: visual("tap-water", "premium-v1", "Premium infographic explaining Dutch drinking water quality.", "Dutch tap water is regulated and generally safe to drink."),
    costs: visual("costs", "premium-v1", "Premium infographic showing typical energy and water cost ranges.", "Example monthly ranges vary by household size, heating system and usage."),
    housingCity: visual("housing-city", "premium-v1", "Premium infographic comparing utility costs by home type and Dutch city.", "Home size, insulation, district heating and city housing stock all affect bills."),
    checklist: visual("checklist", "premium-v1", "Premium infographic checklist for energy and water setup after moving.", "Use this checklist when you receive keys and start utility transfers."),
    savings: visual("savings", "premium-v1", "Premium infographic showing ways to reduce utility bills.", "Small changes to insulation, heating habits and tariff review can lower costs."),
    sustainability: visual("sustainability", "premium-v1", "Premium infographic explaining sustainable living and utilities in the Netherlands.", "Renewables, heat pumps and efficient homes connect to Dutch climate goals."),
    mistakes: visual("mistakes", "premium-v1", "Premium infographic showing common energy and water mistakes.", "Avoid delays, billing surprises and setup gaps with these checks."),
    providers: visual("providers", "premium-v1", "Premium infographic showing energy and water provider categories.", "Compare energy suppliers by address; water companies are regional."),
    faq: visual("faq", "premium-v2", "Premium infographic summarizing common energy and water FAQ answers.", "Use these quick answers before checking your lease and provider terms."),
    sources: visual("sources", "premium-v2", "Premium infographic showing official energy and water resources.", "Verify current rules, tariffs and regional services at source."),
    relatedGuides: visual(
      "related",
      "premium-v1",
      "Premium infographic journey map connecting energy and water setup to utilities, housing, insurance and city guides.",
      "Continue into the next guide that matches your housing, insurance or city decision."
    ),
  },
  visualTextDetails: {
    overview: {
      title: "What to confirm first",
      items: [
        "Check your lease for included utilities, service costs (servicekosten) and advance payments.",
        "Electricity and gas suppliers can usually be chosen; water is assigned by address.",
        "Record meter readings on move-in day before starting or transferring contracts.",
        "Ask whether the home uses gas, district heating or a hybrid setup before comparing tariffs.",
        "Monthly bills are often estimates — annual settlement can produce a refund or top-up.",
      ],
    },
    energy: {
      title: "How Dutch energy billing works",
      items: [
        "Your bill typically combines supplier usage charges, network costs and government levies.",
        "Smart meters measure electricity and often gas digitally for usage insight and settlement.",
        "Photograph electricity and gas meter readings on move-in day with the date visible.",
        "Monthly advance payments are reconciled once per year in the annual settlement (jaarafrekening).",
      ],
    },
    energyProviders: {
      title: "Major energy provider visual details",
      items: [
        "Examples include Vattenfall, Eneco, Essent, Greenchoice, Budget Energie, UnitedConsumers, Pure Energie and Oxxio.",
        "Compare electricity and gas products, contract type, green options and online account tools.",
        "Check notice period, settlement rules and whether green labels match your expectations.",
        "Inclusion here is informational only and does not rank or recommend any supplier.",
      ],
    },
    contracts: {
      title: "Contract type comparison details",
      items: [
        "Fixed contracts lock in tariffs for a set period and can improve budget predictability.",
        "Variable contracts change with market conditions and may suit users who accept price movement.",
        "Dynamic contracts follow short-term market prices and need closer monitoring.",
        "No contract type is universally best; compare terms, notice periods and your risk tolerance.",
      ],
    },
    green: {
      title: "Renewable energy visual details",
      items: [
        "Green electricity products can differ by sourcing, certificates and supplier definitions.",
        "Solar panels and heat pumps can reduce long-term energy use in suitable homes.",
        "Wind and renewable mixes are common marketing themes among Dutch suppliers.",
        "Verify what a green label means before paying a premium for sustainability features.",
      ],
    },
    heating: {
      title: "District heating visual details",
      items: [
        "District heating, or stadsverwarming, supplies heat through a local network instead of a home gas boiler.",
        "Common in Amsterdam, Rotterdam, The Hague, Utrecht and newer apartment developments.",
        "Billing can combine fixed and usage-based components unlike a standard gas contract.",
        "You usually cannot switch district heating provider if the building is connected to a network.",
      ],
    },
    water: {
      title: "Regional water supply essentials",
      items: [
        "Your postcode determines the drinking-water company — you register rather than switch providers.",
        "Waternet, Vitens, Dunea, Brabant Water, WML and PWN cover most Dutch addresses.",
        "Confirm whether water is included in rent, billed via the landlord or invoiced directly to you.",
        "Water charges are regulated separately from energy supplier choice.",
      ],
    },
    tapWater: {
      title: "Using Dutch tap water at home",
      items: [
        "Tap water meets strict quality standards and is suitable for drinking and cooking in most homes.",
        "Using tap water reduces plastic waste and cost compared with bottled water for daily use.",
        "Regional water companies publish quality reports and customer guidance online.",
        "Billing setup can still differ in rentals even when water quality is the same nationwide.",
      ],
    },
    costs: {
      title: "Example cost ranges",
      items: [
        "A single professional may pay roughly EUR 90–180 per month for energy and water combined in moderate usage.",
        "A couple may pay roughly EUR 130–250 per month depending on heating and home size.",
        "A family of four may pay roughly EUR 180–350 per month, higher in winter or gas-heated homes.",
        "These ranges are orientation only; verify current tariffs and annual usage with providers.",
      ],
    },
    housingCity: {
      title: "Home and city cost details",
      items: [
        "Studios and smaller apartments usually have lower total energy use than townhouses or detached homes.",
        "Insulation, energy label and occupancy strongly affect heating costs.",
        "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven differ by housing stock and district heating prevalence.",
        "City name alone matters less than home type, heating system and contract choices.",
      ],
    },
    checklist: {
      title: "Setup checklist details",
      items: [
        "Confirm which utilities are included in rent before signing or immediately after receiving keys.",
        "Record electricity, gas and water meter readings with photos on move-in day.",
        "Transfer or start energy contracts in your name before the first billing period.",
        "Register with the regional water company if required for your address.",
        "Set up online accounts and understand billing cycles and annual settlement timing.",
      ],
    },
    savings: {
      title: "Bill reduction visual details",
      items: [
        "Better insulation and smart thermostats can reduce heating waste in older homes.",
        "Monitoring consumption helps catch unusual usage before annual settlement surprises.",
        "Reviewing tariffs at renewal can matter more than small daily habit changes alone.",
        "Efficient appliances and reduced standby power support longer-term savings.",
      ],
    },
    sustainability: {
      title: "Sustainability visual details",
      items: [
        "Renewable electricity products are widely available from mainstream Dutch suppliers.",
        "Solar panels and heat pumps can fit owner-occupied or long-term rental contexts where permitted.",
        "Energy-efficient homes often have lower running costs and better comfort.",
        "Dutch climate and housing policy increasingly emphasize gas reduction and efficiency.",
      ],
    },
    mistakes: {
      title: "Common mistake details",
      items: [
        "Do not assume energy or water is included in rent without checking the lease.",
        "Read contract type, notice period and settlement rules before signing energy products.",
        "District heating homes need different setup steps than standard gas connections.",
        "Delaying water registration or meter photos can create billing disputes later.",
      ],
    },
    providers: {
      title: "Provider directory details",
      items: [
        "Energy examples include Vattenfall, Eneco, Essent, Greenchoice, Budget Energie, UnitedConsumers, Pure Energie and Oxxio.",
        "Water examples include Waternet, Vitens, Dunea, Brabant Water, WML and PWN by region.",
        "Example prices are orientation ranges only; verify current tariffs before signing.",
        "Inclusion in this directory does not rank or recommend any provider.",
      ],
    },
    faq: {
      title: "FAQ visual details",
      items: [
        "Energy providers can usually be chosen; water providers are assigned by region.",
        "Dutch tap water is generally safe and high quality.",
        "District heating uses a local heat network instead of an individual gas boiler in many apartments.",
        "Smart meters and annual settlements are normal parts of Dutch energy billing.",
      ],
    },
    sources: {
      title: "Official resource details",
      items: [
        "Use Dutch government information for general resident context and public rules.",
        "Use ACM for energy and consumer-market rights information.",
        "Use regional water authority and water company websites for local supply details.",
        "Verify current tariffs and regulations directly with providers and official sources.",
      ],
    },
    relatedGuides: {
      title: "Related guide journey details",
      items: [
        "The complete utilities guide covers internet, mobile, waste and broader setup tasks.",
        "Renting and buying guides help confirm included utilities, service costs and ownership responsibilities.",
        "Insurance providers connect utility setup with home and contents cover after move-in.",
        "City guides help compare housing stock, district heating prevalence and local cost context.",
      ],
    },
  },
  intro: {
    heading: "Understanding Energy and Water Services",
    paragraphs: [
      "Most households in the Netherlands use a combination of electricity, gas or district heating, and water. Together these services cover lighting and appliances, heating and hot water, and everyday drinking and household water use.",
      "Residents often choose electricity and gas suppliers, compare contract types and manage usage online. Water is different: drinking water is supplied by a regional company assigned to your address, so you usually register rather than shop between providers.",
      "For expats, the practical split is simple. Energy setup is about contracts, meter readings and annual settlements. Water setup is about confirming your regional provider, registration and how billing works in your rental or owned home.",
    ],
  },
  snapshotCards: [
    { title: "Electricity providers can usually be chosen", body: "Compare suppliers by contract type, tariff structure, green options and online service." },
    { title: "Gas providers can usually be chosen", body: "Gas may be bundled with electricity unless the home uses district heating or is gas-free." },
    { title: "Water suppliers are region-based", body: "Your address determines whether you register with Waternet, Vitens, Dunea or another regional company." },
    { title: "Dutch tap water is high quality", body: "Drinking water is regulated and generally safe to use directly from the tap." },
    { title: "District heating is increasingly common", body: "Apartments and newer developments may receive heat through a local network instead of gas." },
    { title: "Utility costs vary by household", body: "Home size, insulation, heating system and usage habits change monthly totals significantly." },
  ],
  howEnergyWorks: {
    heading: "Electricity and Gas Explained",
    paragraphs: [
      "Dutch energy bills commonly include electricity usage, gas usage, network charges and taxes or levies. The supplier sends your usage-based charges, while grid and tax components are part of the overall bill structure.",
      "Most homes now have smart meters that measure consumption and support more frequent insight into usage. On move-in day, record electricity and gas meter readings with photos and share them when starting or transferring a contract.",
      "Many contracts use monthly advance payments followed by an annual settlement. That means your monthly bill is an estimate and the year-end calculation may result in an extra payment or refund depending on actual usage.",
    ],
  },
  energyBillComponents: [
    { title: "Supplier usage charges", body: "Electricity and gas consumption priced by your chosen supplier under fixed, variable or dynamic contract rules." },
    { title: "Network and grid costs", body: "Charges for transporting energy to your home, set by the grid operator rather than your supplier brand." },
    { title: "Taxes and levies", body: "Government components included in the overall bill structure alongside usage and network fees." },
    { title: "Standing charges", body: "Fixed monthly or daily fees that apply even when usage is low — check these when comparing headline kWh rates." },
  ] satisfies TipCard[],
  annualSettlementFlow: [
    { title: "Monthly advance payments", body: "You pay an estimated amount each month based on expected usage and your contract type." },
    { title: "Smart meter readings", body: "Actual consumption is tracked digitally, reducing reliance on manual readings in most homes." },
    { title: "Year-end reconciliation", body: "The supplier compares advances paid with actual usage and issues a refund or requests a top-up." },
    { title: "Adjust for next year", body: "After settlement, monthly advances are often recalculated — review whether the new amount fits your budget." },
  ] satisfies TipCard[],
  energyProviderSummaries: [
    { name: "Vattenfall", summary: "Large national supplier for electricity, gas and selected heat products.", energyTypes: ["Electricity", "Gas", "Heat networks"], sustainabilityFocus: "Green electricity and renewable product options.", onlineServices: true, website: "https://www.vattenfall.nl/" },
    { name: "Eneco", summary: "Major Dutch energy supplier with sustainability-oriented products.", energyTypes: ["Electricity", "Gas", "Heat"], sustainabilityFocus: "Green energy, solar and comfort-related products.", onlineServices: true, website: "https://www.eneco.nl/" },
    { name: "Essent", summary: "Large supplier often compared on price and contract length.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Standard and green tariff options.", onlineServices: true, website: "https://www.essent.nl/" },
    { name: "Greenchoice", summary: "Supplier associated with green electricity and Dutch renewable sourcing.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Renewable electricity positioning.", onlineServices: true, website: "https://www.greenchoice.nl/" },
    { name: "Budget Energie", summary: "Price-focused brand within the Budget Thuis group.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Cost-focused comparison positioning.", onlineServices: true, website: "https://www.budgetthuis.nl/energie/" },
    { name: "UnitedConsumers", summary: "Collective offering energy contracts and household services.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Collective and membership-based offers.", onlineServices: true, website: "https://www.unitedconsumers.com/" },
    { name: "Pure Energie", summary: "Supplier marketing Dutch wind and renewable electricity products.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Wind and renewable electricity emphasis.", onlineServices: true, website: "https://www.pure-energie.nl/" },
    { name: "Oxxio", summary: "Online-first energy brand with straightforward digital signup.", energyTypes: ["Electricity", "Gas"], sustainabilityFocus: "Green electricity options on selected products.", onlineServices: true, website: "https://www.oxxio.nl/" },
  ] satisfies EnergyProviderSummary[],
  contractTypes: [
    { name: "Fixed contract", priceStability: "High during contract term", flexibility: "Lower while locked in", risk: "Lower short-term price movement", budgetPredictability: "Strongest for monthly planning" },
    { name: "Variable contract", priceStability: "Changes with market updates", flexibility: "Higher between renewal points", risk: "Moderate market exposure", budgetPredictability: "Moderate; bills can shift over time" },
    { name: "Dynamic contract", priceStability: "Low; follows short-term prices", flexibility: "High but needs active monitoring", risk: "Highest price volatility", budgetPredictability: "Weakest unless usage is very predictable" },
  ] satisfies ContractTypeRow[],
  contractPicks: [
    { title: "Fixed contract", body: "Households that want predictable monthly costs and are willing to commit for a set period." },
    { title: "Variable contract", body: "Users comfortable with tariff changes who may benefit when market prices fall." },
    { title: "Dynamic contract", body: "Active users who can shift usage to cheaper hours and monitor prices regularly." },
  ] satisfies TipCard[],
  greenEnergy: {
    heading: "Renewable Energy Choices",
    paragraphs: [
      "Many Dutch energy suppliers offer green electricity products based on renewable sourcing, certificates or supplier-specific sustainability claims. Wind and solar are the most common themes in consumer marketing.",
      "Homeowners or long-term residents may also consider solar panels, heat pumps or efficiency upgrades, but rental and building rules can limit what is possible. Always verify what a provider means by green energy before paying a premium.",
      "Renewable choices can support lower-carbon living, but the best option depends on contract terms, home suitability and whether you prioritize price stability or sustainability features.",
    ],
  },
  greenProductChecks: [
    "Ask whether green electricity comes from direct sourcing, guarantees of origin or certificate purchases.",
    "Compare the all-in monthly cost, not just the green label or marketing claim.",
    "Check notice period and renewal rules — green products can still use fixed or variable pricing.",
    "Confirm whether gas is included and whether district heating makes gas irrelevant for your home.",
    "Review whether solar panels or heat pumps are permitted before investing in home upgrades.",
  ],
  districtHeating: {
    heading: "District Heating (Stadsverwarming)",
    paragraphs: [
      "Some homes receive heat through district heating networks rather than an individual gas boiler. This is common in apartment buildings and newer urban developments in cities such as Amsterdam, Rotterdam, The Hague and Utrecht.",
      "Billing can differ from a normal gas contract because heat may be charged through fixed and usage-based components linked to the building network. Ask the landlord, VvE or building manager which heat provider serves the property.",
      "If your home uses district heating, you usually cannot choose another heat supplier in the same way you can choose electricity or gas on the open market.",
    ],
  },
  heatingComparison: [
    { aspect: "Provider choice", individualGas: "You can usually choose an electricity and gas supplier on the open market.", districtHeating: "Heat is supplied through the building network — switching supplier is usually not possible." },
    { aspect: "Typical homes", individualGas: "Older houses, townhouses and many detached homes with their own boiler.", districtHeating: "Apartments and newer developments in Amsterdam, Rotterdam, The Hague and Utrecht." },
    { aspect: "Billing structure", individualGas: "Gas usage on your energy bill plus electricity from your supplier.", districtHeating: "Heat charges via the network operator, sometimes separate from your electricity contract." },
    { aspect: "Move-in action", individualGas: "Record gas meter readings and start or transfer a gas contract.", districtHeating: "Confirm with landlord or VvE how heat is billed and whether registration is needed." },
  ] satisfies HeatingComparisonRow[],
  water: {
    heading: "Water Supply in the Netherlands",
    paragraphs: [
      "Drinking water in the Netherlands is supplied by regional water companies. Examples include Waternet in the Amsterdam area, Vitens across large parts of the country, Dunea in parts of South Holland, Brabant Water in Noord-Brabant, WML in Limburg and PWN in parts of North Holland.",
      "Residents usually cannot choose a different drinking-water provider for the same address. After moving, confirm whether you need to register directly, whether water is included in rent, and how meter readings or billing will work.",
      "Water charges are regulated and separate from energy supplier choice, although both may appear in your overall household budget planning.",
    ],
  },
  waterRegions: [
    { provider: "Waternet", region: "Amsterdam and surrounding municipalities", note: "Common for expats moving to Amsterdam — register after confirming billing with your landlord." },
    { provider: "Vitens", region: "Large parts of central, eastern and northern Netherlands", note: "Covers many addresses outside the Randstad core cities." },
    { provider: "Dunea", region: "The Hague area and parts of South Holland", note: "Typical provider for The Hague newcomers." },
    { provider: "Brabant Water", region: "Noord-Brabant including Eindhoven", note: "Check move-in registration steps on the company website." },
    { provider: "WML", region: "Limburg", note: "Regional monopoly — billing may still run through the landlord in some rentals." },
    { provider: "PWN", region: "Parts of North Holland", note: "Serves areas outside central Amsterdam where Waternet does not apply." },
  ] satisfies WaterRegionExample[],
  tapWater: {
    heading: "Dutch Drinking Water Quality",
    paragraphs: [
      "The Netherlands is known for high-quality drinking water that meets strict standards. In most homes, tap water is suitable for drinking, cooking and everyday household use without buying bottled water.",
      "Using tap water can also reduce plastic waste and household cost compared with bottled alternatives. Regional water companies publish quality information and customer guidance online.",
      "If you are unsure how billing works in your rental, check the lease and landlord instructions even though the water itself is generally safe.",
    ],
  },
  tapWaterPractices: [
    { title: "Drink from the tap", body: "Dutch tap water is regulated for drinking quality — bottled water is optional, not required for safety." },
    { title: "Use a filter only if needed", body: "Filters can change taste but are not usually necessary for safety in standard Dutch homes." },
    { title: "Check building notices", body: "Older internal plumbing or temporary works can occasionally affect a specific building — follow landlord guidance." },
    { title: "Read regional quality reports", body: "Your assigned water company publishes annual quality data for your supply area online." },
  ] satisfies TipCard[],
  costExamples: [
    { profile: "Single professional", electricity: "EUR 25–45", gas: "EUR 40–90", water: "EUR 12–18", total: "EUR 90–180" },
    { profile: "Couple", electricity: "EUR 40–70", gas: "EUR 70–130", water: "EUR 14–22", total: "EUR 130–250" },
    { profile: "Family of four", electricity: "EUR 60–100", gas: "EUR 100–200", water: "EUR 18–28", total: "EUR 180–350" },
  ] satisfies CostExample[],
  housingTypes: [
    { title: "Studio", body: "Smaller floor area and lower occupancy often reduce heating and electricity usage, especially when heating is partly included." },
    { title: "Apartment", body: "District heating is more common; insulation and exposure direction can still change bills materially." },
    { title: "Townhouse", body: "More rooms and hot-water demand usually increase gas or heat usage compared with compact apartments." },
    { title: "Detached house", body: "Larger surface area and garden water use can push energy and water totals higher without strong insulation." },
  ],
  cityCosts: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", body: "Higher share of apartments, district heating and older building stock can change heating patterns." },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", body: "Mix of modern developments and older homes affects insulation and heat-system prevalence." },
    { city: "The Hague", href: "/netherlands/the-hague/", body: "Regional water via Dunea and varied housing types create different typical bill profiles." },
    { city: "Utrecht", href: "/netherlands/utrecht/", body: "Growing apartment stock and district heating networks appear in many central neighborhoods." },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", body: "Often more space per home than dense Randstad cores, which can increase usage." },
  ],
  setupChecklist: [
    "Confirm utility providers and what is included in rent",
    "Record electricity, gas and water meter readings",
    "Transfer or start energy contracts in your name",
    "Register water services with the regional company if needed",
    "Review energy plan type, tariff and notice period",
    "Verify district heating arrangements in the building",
    "Understand billing cycle and annual settlement timing",
    "Set up online accounts and save confirmations",
  ],
  savingsTips: [
    { title: "Improve insulation", body: "Draught-proofing windows and doors can reduce heating waste in older Dutch homes, especially in winter." },
    { title: "Use smart thermostats", body: "Lower temperatures overnight or when away — small schedule changes can reduce gas and heat use materially." },
    { title: "Monitor consumption", body: "Check supplier apps or smart meter portals monthly to catch unusual spikes before annual settlement." },
    { title: "Choose efficient appliances", body: "Replace old fridges, washers or dryers with higher efficiency models when upgrading." },
    { title: "Review tariffs at renewal", body: "Compare contract type and all-in monthly cost before auto-renewing — headline kWh rates can mislead." },
    { title: "Reduce standby power", body: "Switch off devices and chargers that draw power when not in use, especially in home offices." },
    { title: "Optimize heating schedules", body: "Heat living areas when occupied rather than keeping the whole home at peak temperature all day." },
    { title: "Track water usage", body: "Fix leaks quickly and avoid long showers — water is regulated but still billed by usage in many homes." },
  ] satisfies TipCard[],
  sustainability: {
    heading: "Sustainable Living and Utilities",
    paragraphs: [
      "Dutch utility policy and housing trends increasingly emphasize energy efficiency, lower gas use and more renewable electricity. That shows up in green tariffs, heat pumps, solar panels and better-insulated new builds.",
      "For renters, sustainability options may be limited by the landlord or building, but green electricity contracts and efficient usage habits can still help. Owners may have more scope for solar, heat pumps and retrofit insulation where permitted.",
      "Future guides on solar panels, heat pumps and sustainable living can go deeper, but the starting point is understanding your current heating system, contract and home constraints.",
    ],
  },
  commonMistakes: [
    { title: "Assuming utilities are included in rent", body: "Many rentals bill energy separately or via service costs — confirm the lease before move-in." },
    { title: "Ignoring contract type and notice period", body: "Fixed, variable and dynamic contracts behave very differently when prices move or you want to switch." },
    { title: "Forgetting meter readings on move-in day", body: "Date-stamped photos protect you from paying for the previous tenant's usage." },
    { title: "Not understanding district heating billing", body: "Heat-network homes may not need a standard gas contract — ask how stadsverwarming is charged." },
    { title: "Delaying energy or water setup", body: "Late registration can create billing gaps, estimated charges or disputes with landlords." },
    { title: "Overlooking water registration steps", body: "Even though you cannot choose a water company, you may still need to register or confirm billing." },
    { title: "Ignoring efficiency options that fit the home", body: "Green tariffs, smart thermostats and insulation can help when they match your housing situation." },
    { title: "Misunderstanding annual settlement payments", body: "A low monthly advance can feel cheap until a large top-up arrives after the jaarafrekening." },
  ] satisfies TipCard[],
  providerDirectory: [
    { name: "Vattenfall", serviceType: "Energy", summary: "Large national electricity and gas supplier with green and heat-network products.", website: "https://www.vattenfall.nl/", serviceRegions: "National energy supply; heat networks in selected areas.", offers: ["Electricity and gas", "Fixed and variable tariffs", "Green electricity", "Online account tools"], pricing: "Example orientation: combined electricity and gas often EUR 100–220 per month for a typical apartment in moderate usage months.", pros: ["Broad national coverage", "Clear online contract management"], cons: ["Not always lowest headline comparison rate", "Heat-network homes have different rules"], onlineServices: true, featured: true },
    { name: "Eneco", serviceType: "Energy", summary: "Major supplier with sustainability-focused electricity, gas and comfort products.", website: "https://www.eneco.nl/", serviceRegions: "National energy supply; heat in selected areas.", offers: ["Electricity and gas", "Green products", "Solar and comfort add-ons", "App and online usage tools"], pricing: "Example orientation: electricity tariffs often around EUR 0.28–0.32 per kWh incl. VAT before standing charges and gas use.", pros: ["Strong sustainability product range", "Useful for longer-term households"], cons: ["Premium green options can cost more", "Final bill depends on usage and contract"], onlineServices: true, featured: true },
    { name: "Essent", serviceType: "Energy", summary: "Large supplier often compared on contract price and online switching.", website: "https://www.essent.nl/", serviceRegions: "National electricity and gas supply.", offers: ["Electricity and gas", "Fixed and variable contracts", "Online switching", "Business energy"], pricing: "Example orientation: couple in a one-bedroom home might budget EUR 130–220 per month for energy in shoulder seasons.", pros: ["Straightforward online signup", "Often competitive on fixed offers"], cons: ["Promotional pricing can change", "Annual settlement still applies"], onlineServices: true, featured: true },
    { name: "Greenchoice", serviceType: "Energy", summary: "Green-energy-focused supplier for electricity and gas.", website: "https://www.greenchoice.nl/", serviceRegions: "National energy supply.", offers: ["Green electricity", "Gas contracts", "Online account", "Renewable positioning"], pricing: "Example orientation: green electricity often slightly above lowest market rates; budget roughly EUR 120–230 per month combined for moderate apartment use.", pros: ["Clear renewable positioning", "Useful for sustainability-focused households"], cons: ["May not be cheapest on price alone", "Product definitions need checking"], onlineServices: true },
    { name: "Budget Energie", serviceType: "Energy", summary: "Price-focused energy brand in the Budget Thuis group.", website: "https://www.budgetthuis.nl/energie/", serviceRegions: "National energy supply.", offers: ["Electricity and gas", "Budget comparison positioning", "Online signup", "Bundle potential with telecom"], pricing: "Example orientation: headline rates sometimes from about EUR 0.27–0.29 per kWh incl. VAT; verify all-in monthly cost.", pros: ["Often appears in lower-cost comparisons", "Digital-first setup"], cons: ["Discounts may be term-limited", "Less advisory support"], onlineServices: true },
    { name: "UnitedConsumers", serviceType: "Energy", summary: "Collective supplier model with membership-style energy offers.", website: "https://www.unitedconsumers.com/", serviceRegions: "National subject to product and membership terms.", offers: ["Collective energy contracts", "Electricity and gas", "Member pricing", "Online signup"], pricing: "Example orientation: verify all-in monthly estimate including membership or bundle terms before comparing.", pros: ["Can suit collective-deal shoppers", "Online comparison flow"], cons: ["Membership structure adds complexity", "Not ideal for urgent move-in simplicity"], onlineServices: true },
    { name: "Pure Energie", serviceType: "Energy", summary: "Supplier emphasizing Dutch wind and renewable electricity.", website: "https://www.pure-energie.nl/", serviceRegions: "National energy supply.", offers: ["Renewable electricity", "Gas on selected products", "Online account", "Wind-energy positioning"], pricing: "Example orientation: renewable products often EUR 0.30+ per kWh incl. VAT in public comparisons before gas and fixed charges.", pros: ["Strong renewable branding", "Useful for green-tariff comparison"], cons: ["Usually not the lowest price tier", "Verify sourcing claims carefully"], onlineServices: true },
    { name: "Oxxio", serviceType: "Energy", summary: "Online-first electricity and gas brand with digital contract management.", website: "https://www.oxxio.nl/", serviceRegions: "National energy supply.", offers: ["Electricity and gas", "Online-first signup", "Green options", "Self-service account"], pricing: "Example orientation: apartment households may see roughly EUR 100–200 per month combined in moderate usage depending on contract and gas use.", pros: ["Simple digital experience", "Useful for straightforward switching"], cons: ["Less in-person support", "Tariffs still move with contract type"], onlineServices: true },
    { name: "Waternet", serviceType: "Water", summary: "Regional drinking water and water-system organization for Amsterdam and surroundings.", website: "https://www.waternet.nl/", serviceRegions: "Amsterdam region and selected surrounding municipalities.", offers: ["Drinking water supply", "Customer account tools", "Move-in registration guidance", "Water-quality information"], pricing: "Example orientation: drinking water often EUR 13–20 per month for one to two people.", pros: ["Clear regional provider for Amsterdam newcomers", "Regulated tap-water quality"], cons: ["No supplier choice at address", "Billing may differ in rentals"], onlineServices: true, featured: true },
    { name: "Vitens", serviceType: "Water", summary: "Large drinking water company serving central, eastern and northern Netherlands.", website: "https://www.vitens.nl/", serviceRegions: "Large parts of central, eastern and northern Netherlands.", offers: ["Drinking water supply", "Online portal", "Quality reporting", "Move registration support"], pricing: "Example orientation: many households pay roughly EUR 12–25 per month depending on occupants and usage.", pros: ["Serves a very large share of Dutch addresses", "Stable regulated service"], cons: ["Provider fixed by location", "Landlord billing varies"], onlineServices: true, featured: true },
    { name: "Dunea", serviceType: "Water", summary: "Drinking water company for parts of South Holland including The Hague area.", website: "https://www.dunea.nl/", serviceRegions: "The Hague region and parts of South Holland.", offers: ["Drinking water supply", "Customer accounts", "Quality information", "Regional service guidance"], pricing: "Example orientation: typical household drinking-water bills often EUR 14–22 per month.", pros: ["Official provider for many South Holland addresses", "Reliable regulated supply"], cons: ["Not selectable by consumer", "Registration steps still required"], onlineServices: true },
    { name: "Brabant Water", serviceType: "Water", summary: "Regional drinking water company for Noord-Brabant.", website: "https://www.brabantwater.nl/", serviceRegions: "North Brabant.", offers: ["Drinking water supply", "Online customer tools", "Move guidance", "Quality reporting"], pricing: "Example orientation: roughly EUR 13–24 per month for typical household drinking-water use.", pros: ["Clear Brabant regional provider", "Regulated tap-water standards"], cons: ["Only relevant in Brabant service area", "Rental billing may differ"], onlineServices: true },
    { name: "WML", serviceType: "Water", summary: "Drinking water supplier for Limburg.", website: "https://www.wml.nl/", serviceRegions: "Limburg.", offers: ["Drinking water supply", "Online account", "Move registration", "Quality information"], pricing: "Example orientation: about EUR 12–22 per month for standard household water use.", pros: ["Official Limburg water provider", "Regulated service"], cons: ["Regional monopoly by address", "Check landlord billing setup"], onlineServices: true },
    { name: "PWN", serviceType: "Water", summary: "Drinking water company serving parts of North Holland.", website: "https://www.pwn.nl/", serviceRegions: "Parts of North Holland.", offers: ["Drinking water supply", "Customer portal", "Quality information", "Regional move guidance"], pricing: "Example orientation: drinking water commonly EUR 13–23 per month for average household use.", pros: ["Established North Holland provider", "High-quality regulated supply"], cons: ["Address determines provider", "Move-in registration still needed"], onlineServices: true },
  ] satisfies EnergyWaterProvider[],
  faqs: [
    { q: "Can I choose my energy provider?", a: "Usually yes for electricity and gas unless utilities are included in rent or your home uses a special heat arrangement. Compare contract type, tariff, notice period and green options before signing." },
    { q: "Can I choose my water provider?", a: "No. Drinking water is supplied by the regional company assigned to your address. You register and manage billing rather than switching between water companies." },
    { q: "Is Dutch tap water safe?", a: "Yes. Dutch drinking water is regulated and generally high quality, making tap water suitable for drinking and cooking in most homes." },
    { q: "What is district heating?", a: "District heating, or stadsverwarming, delivers heat through a local network instead of an individual gas boiler. It is common in apartments and some modern developments." },
    { q: "How much do utilities cost?", a: "A single professional may pay roughly EUR 90–180 per month for energy and water combined, while couples and families often pay more. Actual costs depend on home size, heating system, insulation and usage." },
    { q: "How do I transfer utility contracts?", a: "After confirming meter readings, contact the energy supplier to start or transfer a contract in your name. For water, register with the regional company if required and save all confirmations." },
    { q: "What is a smart meter?", a: "A smart meter measures electricity and often gas consumption digitally. It supports usage insight and the annual settlement process used by many Dutch suppliers." },
    { q: "Are renewable energy plans available?", a: "Yes. Many suppliers offer green electricity products based on renewable sourcing or certificates. Verify what each product means before choosing it." },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "General Dutch government information for residents and public services." },
    { label: "ACM", href: "https://www.acm.nl/en", description: "Consumer and market authority context for energy markets and consumer rights." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Business utility and regulatory context for entrepreneurs and companies." },
    { label: "Rijksoverheid", href: "https://www.rijksoverheid.nl/", description: "Dutch central government information on public rules and resident topics." },
    { label: "Regional water authorities", href: "https://www.uvw.nl/", description: "Umbrella organization linking regional water authority and water-sector context." },
  ],
  relatedGuides: [
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Complete utilities setup guide covering internet, mobile, waste and more." },
    { label: "Renting", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Check included utilities, service costs and tenant responsibilities." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Owner responsibilities for energy, water and post-transfer setup." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Connect utility setup with home and contents cover." },
    { label: "Dutch Cities", href: CITIES_HUB_PATH, status: "live", description: "Compare city context before estimating utility costs." },
  ] satisfies EnergyWaterLink[],
  exploreNextCards: [
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Continue into internet, mobile, waste and full first-week setup." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Check included utilities and service costs before signing." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Plan energy, water, insurance and ownership costs after transfer." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare home, contents, liability and other practical cover." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Continue into move planning, registration and first-week setup." },
  ] satisfies EnergyWaterLink[],
  futureGuides: [
    { label: "Electricity Netherlands", href: "/netherlands/utilities/electricity-netherlands/", status: "comingSoon", description: "Deeper guide to electricity contracts, smart meters and switching suppliers." },
    { label: "Gas Netherlands", href: "/netherlands/utilities/gas-netherlands/", status: "comingSoon", description: "Gas connections, boilers and when gas applies versus district heating." },
    { label: "Water Netherlands", href: "/netherlands/utilities/water-netherlands/", status: "comingSoon", description: "Regional water registration, billing and tenant responsibilities." },
    { label: "District Heating Netherlands", href: "/netherlands/utilities/district-heating-netherlands/", status: "comingSoon", description: "Stadsverwarming networks, billing and apartment-specific setup." },
  ] satisfies EnergyWaterLink[],
};
