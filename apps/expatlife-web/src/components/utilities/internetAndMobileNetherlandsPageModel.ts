import {
  ENERGY_AND_WATER_NETHERLANDS_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  RENTING_NETHERLANDS_PATH,
  UTILITIES_HUB_PATH,
  UTILITIES_NETHERLANDS_PATH,
} from "./utilitiesNetherlandsPageModel";

export const INTERNET_AND_MOBILE_NETHERLANDS_PATH = "/netherlands/utilities/internet-and-mobile-netherlands/" as const;
export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;

export type ConnectivityLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = { title: string; body: string };

export type InternetCostExample = {
  profile: string;
  priceRange: string;
  details: string[];
};

export type ConnectivityProvider = {
  name: string;
  serviceType: "Internet" | "Mobile" | "Internet & Mobile";
  summary: string;
  website: string;
  serviceRegions: string;
  offers: string[];
  pricing: string;
  pros: string[];
  cons: string[];
  esimSupport: boolean;
  businessServices: boolean;
  onlineServices: boolean;
  featured?: boolean;
  technologies?: string[];
  fibreAvailable?: string;
  residentialServices?: string;
  businessServicesSummary?: string;
  network?: string;
  prepaid?: boolean;
  simOnly?: boolean;
  internationalCalling?: string;
};

const connectivityProviders = [
  {
    name: "KPN",
    serviceType: "Internet & Mobile",
    summary: "National telecom incumbent offering fibre, DSL, TV, mobile, eSIM and business connectivity.",
    website: "https://www.kpn.com/",
    serviceRegions: "National; fixed-line availability is postcode-specific.",
    technologies: ["Fibre", "DSL"],
    fibreAvailable: "Wide glasvezel rollout — always check your address",
    residentialServices: "Home internet, TV, Wi-Fi modem and installation",
    businessServicesSummary: "Business broadband, static IP and SLA options on selected products",
    network: "KPN",
    prepaid: true,
    simOnly: true,
    internationalCalling: "International bundles and add-ons on selected plans",
    offers: [
      "Fibre and DSL home internet",
      "TV and streaming channel bundles",
      "Mobile postpaid, prepaid and SIM-only",
      "eSIM on compatible devices",
      "Wi-Fi installation and whole-home options",
      "Business broadband and mobile",
    ],
    pricing:
      "Example orientation: home internet often EUR 40–65 per month depending on speed and TV; mobile SIM-only roughly EUR 15–35 per month; installation or activation fees may apply on first signup.",
    pros: [
      "Strong national fibre footprint and brand trust",
      "Useful English-language product information for key services",
      "Single provider option for home internet and mobile",
    ],
    cons: [
      "Often priced above budget network resellers",
      "Exact speed and technology depend on postcode",
      "Promotional rates may step up after the initial term",
    ],
    esimSupport: true,
    businessServices: true,
    onlineServices: true,
    featured: true,
  },
  {
    name: "Ziggo",
    serviceType: "Internet",
    summary: "Major cable internet and TV provider on the Ziggo coax network in many Dutch cities.",
    website: "https://www.ziggo.nl/",
    serviceRegions: "Cable network availability depends on address, especially in urban areas.",
    technologies: ["Cable"],
    fibreAvailable: "Coax cable network — not full fibre everywhere",
    residentialServices: "Cable internet, TV, sports packages and Wi-Fi pods",
    businessServicesSummary: "Business cable internet for SMEs",
    offers: [
      "Cable internet up to around 1 Gbps download in many areas",
      "TV packages, sports add-ons and recording",
      "Wi-Fi pods and whole-home Wi-Fi",
      "Selected mobile bundle propositions",
      "Business internet on the cable network",
    ],
    pricing:
      "Example orientation: cable internet often EUR 35–65 per month depending on speed tier, Wi-Fi extras and TV bundles; setup or activation costs can apply.",
    pros: [
      "Fast download speeds in well-served cable areas",
      "Popular TV and sports bundles for households that want traditional TV",
      "Strong urban coverage where the coax network is present",
    ],
    cons: [
      "Upload speeds are often lower than full fibre",
      "Not available at every Dutch address",
      "Bundled TV can increase monthly cost if you mainly stream",
    ],
    esimSupport: false,
    businessServices: true,
    onlineServices: true,
    featured: true,
  },
  {
    name: "Odido",
    serviceType: "Internet & Mobile",
    summary: "Converged telecom brand offering mobile, fibre internet and entertainment after the T-Mobile rebrand.",
    website: "https://www.odido.nl/",
    serviceRegions: "National mobile; fixed internet depends on address and network access.",
    technologies: ["Fibre", "DSL", "Mobile"],
    fibreAvailable: "Address-dependent fibre and DSL access",
    residentialServices: "Home internet, mobile, TV and converged bundles",
    businessServicesSummary: "Business mobile and connectivity products",
    network: "Odido",
    prepaid: true,
    simOnly: true,
    internationalCalling: "EU roaming on eligible plans; international add-ons available",
    offers: [
      "Fibre and DSL home internet",
      "Mobile postpaid, prepaid and SIM-only",
      "eSIM activation on selected plans",
      "TV and entertainment packages",
      "Combined home plus mobile deals",
    ],
    pricing:
      "Example orientation: home internet often EUR 30–55 per month; mobile SIM-only roughly EUR 10–30; combined bundles EUR 30–70 depending on components.",
    pros: [
      "One provider for mobile and home internet can simplify billing",
      "Often competitive on bundled pricing campaigns",
      "eSIM and flexible contract options on many products",
    ],
    cons: [
      "Fixed-line availability varies more than the mobile brand suggests",
      "Promotional pricing may rise after the introductory period",
      "Not always the cheapest for single-service-only needs",
    ],
    esimSupport: true,
    businessServices: true,
    onlineServices: true,
    featured: true,
  },
  {
    name: "Delta",
    serviceType: "Internet",
    summary: "Regional fibre and cable provider in parts of the south and west Netherlands.",
    website: "https://www.delta.nl/",
    serviceRegions: "Selected regional fibre and cable networks; postcode check required.",
    technologies: ["Fibre", "Cable"],
    fibreAvailable: "Strong in active Delta network regions only",
    residentialServices: "Internet and TV in service areas",
    businessServicesSummary: "Regional business products where available",
    offers: [
      "Fibre and cable internet in regional networks",
      "TV bundles in selected areas",
      "Wi-Fi modem rental or purchase",
      "Online contract management",
    ],
    pricing:
      "Example orientation: where available, home internet often EUR 32–55 per month depending on speed and TV; not every Dutch address can order Delta.",
    pros: [
      "Can be strong value inside its active network regions",
      "Useful alternative when national options are limited locally",
      "Online postcode availability check before ordering",
    ],
    cons: [
      "Coverage is regional rather than nationwide",
      "Irrelevant if your postcode sits outside Delta network areas",
      "Fewer bundle combinations than the largest national brands",
    ],
    esimSupport: false,
    businessServices: true,
    onlineServices: true,
  },
  {
    name: "Freedom Internet",
    serviceType: "Internet",
    summary: "Flexible internet reseller over available Dutch networks with shorter-commitment positioning.",
    website: "https://freedom.nl/",
    serviceRegions: "Depends on underlying network at your address.",
    technologies: ["Fibre", "Cable", "DSL"],
    fibreAvailable: "Uses whichever network is available at your postcode",
    residentialServices: "Home internet over available underlying networks",
    businessServicesSummary: "Primarily residential-focused",
    offers: [
      "Reseller home internet on available networks",
      "Flexible or shorter contract positioning on selected products",
      "Online signup and account management",
      "Modem options depending on network",
    ],
    pricing:
      "Example orientation: often EUR 30–50 per month depending on underlying network, speed tier and modem choice; verify install requirements with the network owner.",
    pros: [
      "Useful if you want flexible or shorter-commitment internet",
      "Can be price-competitive where network access already exists",
      "Clear reseller model can simplify technology comparison",
    ],
    cons: [
      "Final speed and install timing depend on the underlying network",
      "Limited TV and premium bundle options",
      "Support experience is more digital-first",
    ],
    esimSupport: false,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "Budget Internet",
    serviceType: "Internet",
    summary: "Budget-focused home internet brand within the Budget Thuis group.",
    website: "https://www.budgetthuis.nl/internet/",
    serviceRegions: "National via underlying network access; postcode check required.",
    technologies: ["Fibre", "Cable", "DSL"],
    fibreAvailable: "Via underlying network at address",
    residentialServices: "Price-focused home internet contracts",
    businessServicesSummary: "Primarily residential",
    offers: [
      "Budget home internet over available networks",
      "Online signup and self-service",
      "Optional combination with Budget energy products",
      "Speed tiers depending on underlying network",
    ],
    pricing:
      "Example orientation: entry packages often EUR 25–40 per month on comparison sites; verify standing charges, modem fees and post-promo price steps.",
    pros: [
      "Often appears among lower headline internet prices",
      "Useful for cost-conscious households comfortable with online-only service",
      "Can suit renters who want a simple internet contract",
    ],
    cons: [
      "Low advertised rates may rely on promotions or specific terms",
      "Underlying network determines real speed and install process",
      "Less advisory support than premium incumbents",
    ],
    esimSupport: false,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "Youfone",
    serviceType: "Internet & Mobile",
    summary: "Digital-first provider for home internet and mobile with online account tools.",
    website: "https://www.youfone.nl/",
    serviceRegions: "National mobile; home internet address-dependent.",
    technologies: ["Fibre", "Cable", "Mobile"],
    fibreAvailable: "Depends on underlying network at address",
    residentialServices: "Home internet and mobile SIM-only bundles",
    businessServicesSummary: "Limited business range",
    network: "KPN",
    prepaid: false,
    simOnly: true,
    internationalCalling: "EU roaming on eligible plans",
    offers: [
      "Home internet over available networks",
      "Mobile SIM-only and eSIM",
      "Online-only account management",
      "Combined internet and mobile bundles",
    ],
    pricing:
      "Example orientation: mobile SIM-only often EUR 8–22 per month; home internet varies by network, commonly EUR 28–45 for basic tiers.",
    pros: [
      "Simple online experience for combined connectivity",
      "Often good value for light to medium mobile data users",
      "Useful if you want one digital account for internet and mobile",
    ],
    cons: [
      "Less in-person retail support",
      "Internet availability and install timing vary by postcode",
      "Fewer premium support or business options",
    ],
    esimSupport: true,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "Vodafone",
    serviceType: "Mobile",
    summary: "Major mobile network operator with retail stores, prepaid, SIM-only and business mobile.",
    website: "https://www.vodafone.nl/",
    serviceRegions: "National mobile coverage on the Vodafone network.",
    network: "Vodafone",
    prepaid: true,
    simOnly: true,
    internationalCalling: "International minute bundles on selected plans",
    offers: [
      "SIM-only and phone-inclusive contracts",
      "Prepaid and top-up options",
      "5G on eligible plans and devices",
      "eSIM on supported products",
      "Business mobile and fleet options",
    ],
    pricing:
      "Example orientation: SIM-only often EUR 10–35 per month depending on data; phone contracts EUR 35–70+ with device repayment; prepaid from EUR 10–20 starter bundles.",
    pros: [
      "Broad national network with wide retail presence",
      "Useful if you want in-store support or phone upgrades",
      "Strong option for business mobile on the Vodafone network",
    ],
    cons: [
      "May cost more than budget MVNO brands for similar data",
      "International and roaming add-ons vary by plan",
      "Phone contracts lock in higher total cost over 24 months",
    ],
    esimSupport: true,
    businessServices: true,
    onlineServices: true,
    featured: true,
  },
  {
    name: "Ben",
    serviceType: "Mobile",
    summary: "Online-first SIM-only and phone plan brand on the Odido network.",
    website: "https://www.ben.nl/",
    serviceRegions: "National coverage via the Odido network.",
    network: "Odido",
    prepaid: false,
    simOnly: true,
    internationalCalling: "Add-ons may apply; check plan terms",
    offers: [
      "SIM-only with transparent online pricing",
      "Phone-inclusive contracts on selected campaigns",
      "eSIM on compatible devices",
      "App-based account management",
    ],
    pricing:
      "Example orientation: SIM-only often EUR 10–28 per month depending on data tier; phone plans higher with device spread over contract.",
    pros: [
      "Simple digital pricing on a major network",
      "Good middle ground between premium and budget brands",
      "eSIM support on many plans",
    ],
    cons: [
      "Mostly online support rather than retail shops",
      "International calling not the primary focus",
      "Fewer niche expat-oriented bundles than Lebara",
    ],
    esimSupport: true,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "Simyo",
    serviceType: "Mobile",
    summary: "Budget SIM-only and prepaid brand operating on the KPN network.",
    website: "https://www.simyo.nl/",
    serviceRegions: "National coverage via the KPN network.",
    network: "KPN",
    prepaid: true,
    simOnly: true,
    internationalCalling: "Limited international bundles; check current add-ons",
    offers: [
      "SIM-only with flexible data tiers",
      "Prepaid top-up options",
      "eSIM on selected products",
      "Online-only contract management",
    ],
    pricing:
      "Example orientation: SIM-only from about EUR 6–25 per month for common data tiers; prepaid starter bundles often EUR 10–15.",
    pros: [
      "Strong value on the KPN network",
      "Good first-week option for expats who own a phone",
      "Flexible prepaid path before longer contracts",
    ],
    cons: [
      "Digital-first support with fewer physical stores",
      "International calling less developed than specialist brands",
      "Heavy data users should compare total GB cost carefully",
    ],
    esimSupport: true,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "Lebara",
    serviceType: "Mobile",
    summary: "International-friendly prepaid and SIM-only provider with calling bundles.",
    website: "https://www.lebara.nl/",
    serviceRegions: "National mobile coverage via partner network.",
    network: "KPN",
    prepaid: true,
    simOnly: true,
    internationalCalling: "Strong focus on international minutes and country bundles",
    offers: [
      "Prepaid with low-commitment top-ups",
      "SIM-only monthly bundles",
      "International calling packages",
      "eSIM on selected products",
      "Short-commitment plans for newcomers",
    ],
    pricing:
      "Example orientation: light prepaid EUR 5–15; larger monthly bundles EUR 15–30; verify international minute rates for your home country.",
    pros: [
      "Useful for newcomers who call abroad frequently",
      "Low commitment suits tourists and first-month arrivals",
      "Easy entry point before switching to longer Dutch plans",
    ],
    cons: [
      "May not suit heavy domestic-only data users at best value",
      "Product range is narrower than full-network incumbents",
      "Check fair-use rules on international bundles",
    ],
    esimSupport: true,
    businessServices: false,
    onlineServices: true,
  },
  {
    name: "HollandsNieuwe",
    serviceType: "Mobile",
    summary: "SIM-only brand on the KPN network with transparent online pricing.",
    website: "https://www.hollandsnieuwe.nl/",
    serviceRegions: "National coverage via the KPN network.",
    network: "KPN",
    prepaid: false,
    simOnly: true,
    internationalCalling: "Standard EU roaming rules on eligible plans",
    offers: [
      "SIM-only monthly plans",
      "eSIM support on compatible phones",
      "Online signup and plan changes",
      "Data tiers for light to heavy users",
    ],
    pricing:
      "Example orientation: SIM-only often EUR 8–25 per month depending on data; verify current campaign pricing and contract length.",
    pros: [
      "Transparent online pricing on a major network",
      "Good option for expats who want simple SIM-only without retail upsells",
      "eSIM available on many plans",
    ],
    cons: [
      "No prepaid path for very short stays",
      "Online-only service model",
      "International calling add-ons less prominent than Lebara",
    ],
    esimSupport: true,
    businessServices: false,
    onlineServices: true,
  },
] satisfies ConnectivityProvider[];

const internetProviders = connectivityProviders.filter((provider) => provider.serviceType !== "Mobile");
const mobileProviders = connectivityProviders.filter((provider) => provider.serviceType !== "Internet");

export type InternetComparisonRow = {
  provider: string;
  fibre: string;
  cable: string;
  dsl: string;
  tvBundles: string;
  businessServices: string;
  esimMobile: string;
};

export type PlanComparisonRow = {
  aspect: string;
  simOnly: string;
  phoneContract: string;
};

export type TechnologyComparisonRow = {
  technology: string;
  speedPotential: string;
  availability: string;
  suitability: string;
};

export type SetupPhase = {
  phase: string;
  tasks: string[];
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-internet-mobile-${slug}-${version}.png`,
  alt,
  caption,
});

export const internetAndMobileNetherlandsPage = {
  slug: "internet-and-mobile-netherlands",
  path: INTERNET_AND_MOBILE_NETHERLANDS_PATH,
  hubPath: UTILITIES_HUB_PATH,
  parentGuidePath: UTILITIES_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-10-01",
  seo: {
    title: "Internet and Mobile in the Netherlands | Complete Expat Guide",
    description:
      "Compare internet and mobile providers in the Netherlands, including fibre, broadband, SIM-only plans, eSIMs, costs, setup and coverage for expats.",
    keywords: [
      "internet netherlands",
      "mobile netherlands",
      "internet providers netherlands",
      "mobile providers netherlands",
      "internet for expats netherlands",
      "fibre internet netherlands",
      "sim card netherlands",
      "esim netherlands",
      "dutch mobile providers",
      "broadband netherlands",
    ],
  },
  hero: {
    eyebrow: "Connectivity guide",
    pageTitle: "Internet and Mobile in the Netherlands",
    subtitle:
      "Learn how internet and mobile services work in the Netherlands, compare major providers and get connected quickly after moving.",
    primaryCta: { label: "Compare Providers", href: "#providers" },
    secondaryCta: { label: "Understand Setup Options", href: "#internet-types" },
    image: {
      src: "/images/heroes/netherlands-internet-mobile-hero-v2.png",
      alt: "Photorealistic scene of a remote worker in a modern Dutch apartment using a laptop for a video call and a smartphone on the desk, with bicycles and canal buildings visible through the window.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#internet-types", label: "Internet types" },
    { href: "#internet-providers", label: "Internet" },
    { href: "#internet-comparison", label: "Compare" },
    { href: "#fibre", label: "Fibre" },
    { href: "#internet-costs", label: "Costs" },
    { href: "#mobile-providers", label: "Mobile" },
    { href: "#sim-contracts", label: "Plans" },
    { href: "#prepaid", label: "Prepaid" },
    { href: "#esim", label: "eSIM" },
    { href: "#coverage", label: "Coverage" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#students", label: "Students" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#providers", label: "Directory" },
    { href: "#future-guides", label: "Deeper guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v2",
      "Premium infographic map of internet and mobile setup for expats in the Netherlands.",
      "Use this map to separate home internet, mobile plans, eSIM options and first-week connectivity tasks."
    ),
    internetTypes: visual(
      "internet-types",
      "premium-v2",
      "Premium infographic comparing fibre, cable, DSL and wireless internet in the Netherlands.",
      "Technology availability depends on postcode — check address before choosing a provider."
    ),
    internetProviders: visual(
      "internet-providers",
      "premium-v2",
      "Premium infographic showing major Dutch internet provider examples without rankings.",
      "Compare fibre, cable, DSL, TV bundles and business services before checking exact terms."
    ),
    internetComparison: visual(
      "internet-comparison",
      "premium-v2",
      "Premium infographic comparison matrix for Dutch internet providers by technology and bundles.",
      "Use this matrix for orientation — verify current products and address availability with providers."
    ),
    fibre: visual(
      "fibre",
      "premium-v2",
      "Premium infographic explaining glasvezel fibre internet rollout in Dutch cities.",
      "Fibre offers strong speeds for remote work where available — postcode checks still apply."
    ),
    internetCosts: visual(
      "internet-costs",
      "premium-v2",
      "Premium infographic showing typical Dutch home internet cost ranges.",
      "Example monthly ranges vary by speed tier, TV bundles and promotional terms."
    ),
    mobileProviders: visual(
      "mobile-providers",
      "premium-v2",
      "Premium infographic showing major Dutch mobile provider examples.",
      "Compare prepaid, SIM-only, eSIM and international options before signing."
    ),
    simContracts: visual(
      "sim-contracts",
      "premium-v2",
      "Premium infographic comparing SIM-only and phone contract mobile plans.",
      "SIM-only suits many expats who already own a phone; contracts bundle device costs."
    ),
    prepaid: visual(
      "prepaid",
      "premium-v2",
      "Premium infographic explaining prepaid mobile options for newcomers.",
      "Prepaid can bridge the first weeks while you compare longer mobile contracts."
    ),
    esim: visual(
      "esim",
      "premium-v2",
      "Premium infographic explaining eSIM activation and dual-SIM usage in the Netherlands.",
      "Many Dutch providers support eSIM — confirm device compatibility before ordering."
    ),
    coverage: visual(
      "coverage",
      "premium-v2",
      "Premium infographic showing mobile coverage context across major Dutch cities.",
      "National coverage is generally strong — verify indoor signal in your specific home if needed."
    ),
    remoteWork: visual(
      "remote-work",
      "premium-v2",
      "Premium infographic for home internet requirements for remote workers in the Netherlands.",
      "Upload speed, stability and installation timing matter as much as headline download rates."
    ),
    students: visual(
      "students",
      "premium-v2",
      "Premium infographic for student internet and mobile setup in shared Dutch housing.",
      "Flexible contracts and prepaid options often suit short stays and shared apartments."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Premium infographic checklist for internet and mobile setup after moving to the Netherlands.",
      "Order home internet early and keep a mobile backup while waiting for installation."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Premium infographic showing common internet and mobile mistakes expats make.",
      "Avoid delays, unsuitable bundles and foreign-plan assumptions with these checks."
    ),
    providers: visual(
      "providers",
      "premium-v2",
      "Premium infographic directory of internet and mobile provider categories in the Netherlands.",
      "Compare by address availability, contract length, eSIM support and business needs."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing common internet and mobile FAQ answers for expats.",
      "Use these quick answers before checking provider terms and postcode availability."
    ),
    sources: visual(
      "sources",
      "premium-v3",
      "Premium infographic showing official telecom and consumer resources for the Netherlands.",
      "Verify current tariffs, speeds and coverage directly with providers and official sources."
    ),
    relatedGuides: visual(
      "related",
      "premium-v2",
      "Premium infographic journey map connecting connectivity setup to utilities, housing and work guides.",
      "Continue into utilities, energy, renting, freelancing and relocation planning."
    ),
  },
  visualTextDetails: {
    overview: {
      title: "What to set up first",
      items: [
        "Check fibre and cable availability at your exact address before choosing internet.",
        "Order home internet early — installation or activation can take days or weeks.",
        "Choose mobile via SIM-only, prepaid or eSIM depending on stay length and phone ownership.",
        "Bundles can combine internet, TV and mobile but are not always the best value.",
        "Example costs are orientation only — verify current tariffs with providers.",
      ],
    },
    internetTypes: {
      title: "Internet technology essentials",
      items: [
        "Fibre (glasvezel) often delivers the highest speeds where rolled out.",
        "Cable is common in cities through providers such as Ziggo on coax networks.",
        "DSL may remain available but is usually slower than fibre or cable.",
        "Fixed wireless or 4G/5G home options exist but suit fewer households long term.",
      ],
    },
    internetProviders: {
      title: "Internet provider orientation",
      items: [
        "Examples include KPN, Ziggo, Odido, Delta, Freedom Internet, Budget Internet and Youfone.",
        "Residential and business products differ — confirm which portal applies to you.",
        "TV bundles are optional; many households use streaming instead.",
        "Inclusion here is informational only and does not rank providers.",
      ],
    },
    internetComparison: {
      title: "Comparison matrix notes",
      items: [
        "Fibre availability is postcode-specific even within the same city.",
        "Cable upload speeds are often lower than full fibre.",
        "Business services may include static IP, SLA support or higher upload tiers.",
        "Some internet brands also sell mobile or eSIM plans under the same group.",
      ],
    },
    fibre: {
      title: "Fibre rollout context",
      items: [
        "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven have extensive fibre coverage.",
        "Remote workers benefit from stable latency and strong upload on full fibre.",
        "Building access and meter cupboard location can affect installation appointments.",
        "Check whether your rental allows provider switches or technician visits.",
      ],
    },
    internetCosts: {
      title: "Example connectivity cost ranges",
      items: [
        "Basic home internet often falls roughly EUR 25–40 per month before TV add-ons.",
        "High-speed fibre or cable may land around EUR 40–65 per month depending on tier.",
        "Prepaid mobile often starts around EUR 5–15 for light arrival-week use.",
        "SIM-only mobile commonly costs EUR 8–35 per month depending on data tier.",
        "Premium fibre with Wi-Fi extras can exceed EUR 65 — verify promotional terms.",
      ],
    },
    mobileProviders: {
      title: "Mobile provider orientation",
      items: [
        "Examples include KPN, Vodafone, Odido, Ben, Simyo, Lebara, Youfone and HollandsNieuwe.",
        "Budget brands often use a major network while keeping digital-first service.",
        "Prepaid suits short stays; SIM-only suits longer residency with your own phone.",
        "International calling bundles vary — check country lists before choosing.",
      ],
    },
    simContracts: {
      title: "Plan type comparison",
      items: [
        "SIM-only usually offers lower monthly cost and more flexibility.",
        "Phone contracts spread device cost across the contract term.",
        "Notice periods and automatic renewal rules differ by provider.",
        "EU roaming terms apply on eligible plans but verify fair-use rules.",
      ],
    },
    prepaid: {
      title: "Prepaid advantages",
      items: [
        "No long contract — useful for the first weeks after arrival.",
        "Top-up models suit tourists, students and temporary assignments.",
        "Can act as backup data while waiting for home internet installation.",
        "Compare per-GB cost if you use heavy mobile data daily.",
      ],
    },
    esim: {
      title: "eSIM setup notes",
      items: [
        "Confirm your phone supports eSIM and is unlocked if coming from abroad.",
        "Activation is usually online — keep Wi-Fi access for the first profile download.",
        "Dual-SIM lets you keep a home-country number alongside a Dutch data plan.",
        "Business travellers may use eSIM for quick activation without a physical SIM.",
      ],
    },
    coverage: {
      title: "Coverage expectations",
      items: [
        "National mobile coverage is generally strong in urban and rural areas.",
        "Indoor signal can vary by building materials and location.",
        "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven have dense network capacity.",
        "Groningen and other northern cities also have solid 4G/5G coverage in most areas.",
      ],
    },
    remoteWork: {
      title: "Remote work connectivity",
      items: [
        "Prioritise stable upload for video calls — not just headline download speed.",
        "Fibre is often preferable where available for all-day home office use.",
        "Keep a mobile hotspot as backup during installation or outages.",
        "Business broadband may matter for static IP or SLA requirements.",
      ],
    },
    students: {
      title: "Student setup tips",
      items: [
        "Shared housing may need landlord approval for installation or router placement.",
        "Prepaid or short SIM-only contracts suit academic-year stays.",
        "Splitting internet costs with housemates should be agreed in writing.",
        "Student cities often have competitive mobile promotions — compare carefully.",
      ],
    },
    checklist: {
      title: "Setup checklist details",
      items: [
        "Run a postcode check for fibre, cable and DSL before move-in.",
        "Order internet as soon as your move-in date is confirmed.",
        "Choose mobile plan type: prepaid, SIM-only, eSIM or phone contract.",
        "Save provider confirmations and installation appointment details.",
        "Test Wi-Fi coverage in your work area after installation.",
      ],
    },
    mistakes: {
      title: "Common mistake details",
      items: [
        "Waiting until move-in week to order internet causes avoidable downtime.",
        "Assuming foreign roaming plans replace a Dutch mobile contract long term.",
        "Choosing TV bundles you will not use increases monthly cost.",
        "Ignoring contract length and price steps after promotional periods.",
      ],
    },
    providers: {
      title: "Directory orientation",
      items: [
        "Internet examples: KPN, Ziggo, Odido, Delta, Freedom Internet, Budget Internet, Youfone.",
        "Mobile examples: KPN, Vodafone, Odido, Ben, Simyo, Lebara, Youfone, HollandsNieuwe.",
        "Example prices are ranges only — verify tariffs and address availability.",
        "Inclusion does not rank or recommend any provider.",
      ],
    },
    faq: {
      title: "FAQ visual summary",
      items: [
        "Internet choice depends on address technology availability, not brand alone.",
        "Mobile SIM-only is popular among expats who bring their own phone.",
        "eSIM is widely supported but device compatibility still matters.",
        "Order home internet before arrival when your move-in date is fixed.",
      ],
    },
    sources: {
      title: "Official resource notes",
      items: [
        "ACM provides consumer and telecom-market context in the Netherlands.",
        "Government.nl covers general resident and digital-service information.",
        "Business.gov.nl helps entrepreneurs with business connectivity context.",
        "Always verify speeds, prices and coverage with providers directly.",
      ],
    },
    relatedGuides: {
      title: "Related guide paths",
      items: [
        "The complete utilities guide covers energy, water, waste and broader setup.",
        "Energy and water setup often runs in parallel with internet ordering.",
        "Renting guides help confirm what connectivity is included in your lease.",
        "Freelancing and ZZP guides connect connectivity with business admin.",
      ],
    },
    futureGuides: {
      title: "Planned deeper guides",
      items: [
        "Internet Providers Netherlands will expand the home broadband directory.",
        "Mobile Providers Netherlands will go deeper on networks, MVNOs and plan types.",
        "Fibre Internet Netherlands will focus on glasvezel rollout and installation.",
        "eSIM Netherlands will cover activation, dual-SIM and device compatibility.",
      ],
    },
  },
  intro: {
    heading: "Getting Connected in the Netherlands",
    paragraphs: [
      "Most newcomers arrange home internet, a mobile phone plan, and often a streaming or TV setup alongside everyday apps and banking. Getting connected early makes registration, work, study and family life much smoother.",
      "The Netherlands has some of Europe's strongest digital infrastructure. Fibre rollout continues, mobile coverage is generally excellent, and eSIM support is widely available from major providers.",
      "For expats, the practical split is simple: home internet depends on your address and technology available there; mobile is national but plan type — prepaid, SIM-only or contract — should match how long you stay and whether you need a new phone.",
    ],
  },
  snapshotCards: [
    { title: "Fibre coverage is expanding rapidly", body: "Glasvezel is rolling out across cities and suburbs — always check your postcode before assuming fibre is available." },
    { title: "Mobile coverage is excellent", body: "National 4G and 5G networks cover most of the country, with strong urban performance." },
    { title: "eSIM support is widely available", body: "Many providers offer eSIM activation alongside physical SIM options." },
    { title: "SIM-only plans are popular", body: "Expats often keep their phone and choose a flexible SIM-only subscription." },
    { title: "Bundles are common", body: "Internet, TV and mobile can be combined — compare whether you need every component." },
    { title: "Multiple providers compete nationally", body: "KPN, Ziggo, Odido and others compete on technology, price and bundles." },
  ],
  internetTypes: [
    { title: "Fibre (Glasvezel)", body: "Highest speed potential and strong upload for remote work where available. Best for long-term households when rolled out to your address." },
    { title: "Cable", body: "Common in cities via coax networks such as Ziggo. Fast download speeds; upload often lower than full fibre." },
    { title: "DSL", body: "Available in some areas over copper lines. Usually slower than fibre or cable but can be the only fixed option." },
    { title: "Wireless Internet", body: "4G/5G home or fixed wireless products exist for selected addresses. Useful as backup or where fixed lines are limited." },
  ],
  technologyComparison: [
    { technology: "Fibre (glasvezel)", speedPotential: "Often 100 Mbps to 1 Gbps+; strong upload", availability: "Expanding nationally — postcode-specific", suitability: "Remote work, streaming, long-term households" },
    { technology: "Cable", speedPotential: "Often 100 Mbps to 1 Gbps download; lower upload", availability: "Common in urban areas via coax networks", suitability: "City apartments and families who need fast download" },
    { technology: "DSL", speedPotential: "Often 20–100 Mbps depending on line quality", availability: "Legacy copper areas where fibre not yet rolled out", suitability: "Basic browsing when no faster fixed option exists" },
    { technology: "Wireless (4G/5G home)", speedPotential: "Variable; depends on signal and plan", availability: "Selected addresses and backup use cases", suitability: "Temporary housing, backup during install, rural gaps" },
  ] satisfies TechnologyComparisonRow[],
  internetProviders,
  mobileProviders,
  internetComparisonRows: [
    { provider: "KPN", fibre: "Yes", cable: "No", dsl: "Yes", tvBundles: "Yes", businessServices: "Yes", esimMobile: "Yes" },
    { provider: "Ziggo", fibre: "Selected areas", cable: "Yes", dsl: "No", tvBundles: "Yes", businessServices: "Yes", esimMobile: "Selected bundles" },
    { provider: "Odido", fibre: "Yes", cable: "No", dsl: "Yes", tvBundles: "Yes", businessServices: "Yes", esimMobile: "Yes" },
    { provider: "Delta", fibre: "Regional", cable: "Regional", dsl: "Limited", tvBundles: "Yes", businessServices: "Selected", esimMobile: "No" },
    { provider: "Freedom Internet", fibre: "Via network", cable: "Via network", dsl: "Via network", tvBundles: "Limited", businessServices: "Limited", esimMobile: "No" },
    { provider: "Budget Internet", fibre: "Via network", cable: "Via network", dsl: "Via network", tvBundles: "Limited", businessServices: "No", esimMobile: "Via group" },
    { provider: "Youfone", fibre: "Via network", cable: "Via network", dsl: "Via network", tvBundles: "Limited", businessServices: "Limited", esimMobile: "Yes" },
  ] satisfies InternetComparisonRow[],
  fibre: {
    heading: "Understanding Fibre Internet",
    paragraphs: [
      "Fibre (glasvezel) is increasingly available across the Netherlands and often delivers the best experience for households that work, study or stream heavily at home. Speed and reliability depend on the connection reaching your building and apartment.",
      "Remote workers benefit from strong upload speeds and stable latency on full fibre. Future rollout continues in suburbs and newer developments, but postcode checks remain essential.",
      "Cities such as Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven have extensive fibre footprints, though availability still varies street by street.",
    ],
  },
  fibreCityExamples: [
    { title: "Amsterdam", body: "Dense fibre rollout across many neighbourhoods — still verify your exact address and building access." },
    { title: "Rotterdam", body: "Strong urban fibre and cable competition; installation timing varies by building type." },
    { title: "The Hague", body: "Good fibre coverage in international districts; confirm technician access in older flats." },
    { title: "Utrecht", body: "Growing fibre coverage in central and newer districts; popular with students and families." },
    { title: "Eindhoven", body: "Tech hub with competitive fibre and cable options in many postcodes." },
    { title: "Groningen", body: "Large student city with solid fibre rollout and strong mobile capacity in most areas." },
  ] satisfies TipCard[],
  fibreInstallSteps: [
    "Run a postcode check on provider websites before signing a lease or ordering.",
    "Confirm your rental contract allows technician visits and router installation.",
    "Note meter cupboard or building entry rules — installers may need access appointments.",
    "Book installation as early as possible once your move-in date is confirmed.",
    "Keep mobile data or a hotspot ready until activation is complete.",
  ],
  internetCostExamples: [
    {
      profile: "Basic broadband",
      priceRange: "EUR 25–40 / month",
      details: ["Entry-level fixed broadband without TV", "Suitable for light browsing, email and streaming on one device", "Technology depends on postcode — DSL, cable or fibre"],
    },
    {
      profile: "High-speed fibre or cable",
      priceRange: "EUR 40–65 / month",
      details: ["Better for remote work, video calls and multi-device homes", "Fibre preferred where available for upload stability", "Verify installation timing before move-in week"],
    },
    {
      profile: "Internet + TV bundle",
      priceRange: "EUR 45–75 / month",
      details: ["Adds Dutch channels, sports or recording options", "Only worth it if you will use traditional TV regularly", "Many households use streaming instead"],
    },
    {
      profile: "Premium fibre + Wi-Fi extras",
      priceRange: "EUR 65+ / month",
      details: ["Top speed tiers, mesh Wi-Fi or premium support", "Useful for large homes and heavy home-office use", "Check promotional price steps after intro period"],
    },
  ] satisfies InternetCostExample[],
  mobileCostExamples: [
    {
      profile: "Prepaid starter",
      priceRange: "EUR 5–15 / month",
      details: ["Light data for arrival week and OTPs", "Top up as needed without long contract", "Useful before choosing SIM-only or postpaid"],
    },
    {
      profile: "SIM-only (typical)",
      priceRange: "EUR 8–35 / month",
      details: ["Most popular option for expats with own phone", "Data tiers from light use to unlimited-style bundles", "Budget brands often start lower on major networks"],
    },
    {
      profile: "Phone contract",
      priceRange: "EUR 35–70+ / month",
      details: ["Includes device repayment spread over contract", "Higher total cost over 24 months is common", "Compare full contract cost, not monthly fee alone"],
    },
  ] satisfies InternetCostExample[],
  providerSelectionTips: [
    { title: "Start with your postcode", body: "Internet choice depends on fibre, cable or DSL availability at your exact address — not brand preference alone." },
    { title: "Match plan to stay length", body: "Prepaid or short SIM-only suits uncertain stays; longer contracts may offer better monthly value if you are staying 12+ months." },
    { title: "Separate must-haves", body: "List what you actually need: upload speed, TV, international calls, eSIM, business static IP — then compare bundles against that list." },
  ] satisfies TipCard[],
  planComparison: [
    { aspect: "Flexibility", simOnly: "High — keep your phone and switch plans more easily", phoneContract: "Lower — tied to device financing term" },
    { aspect: "Monthly cost", simOnly: "Usually lower monthly charge", phoneContract: "Higher — includes device repayment" },
    { aspect: "Device included", simOnly: "No — use your own unlocked phone", phoneContract: "Yes — new phone spread over contract" },
    { aspect: "Contract length", simOnly: "Often 1–2 years or flexible", phoneContract: "Often 2 years linked to device" },
  ] satisfies PlanComparisonRow[],
  planPicks: [
    { title: "Short stay or tourist", body: "Start with prepaid or a travel eSIM, then switch once your address and stay length are clear." },
    { title: "Expat with own phone", body: "SIM-only on a major network is usually the most flexible and cost-effective long-term option." },
    { title: "Need a new device", body: "Phone contracts spread hardware cost across the term — compare total price over 24 months, not just monthly fee." },
  ] satisfies TipCard[],
  prepaid: {
    heading: "Prepaid Mobile Options",
    paragraphs: [
      "Many newcomers start with prepaid mobile service because it requires no long commitment and can be activated quickly with a physical SIM or eSIM where supported.",
      "Prepaid suits tourists, students on short stays, and expats who want connectivity before choosing a longer SIM-only or postpaid plan.",
      "Compare per-GB pricing if you rely on mobile data heavily while waiting for home internet installation.",
    ],
  },
  prepaidTips: [
    "Buy from provider websites, apps or supermarkets — ID may be required for registration.",
    "Top up online or via apps; auto-renew bundles reduce surprise disconnections.",
    "Use prepaid as a hotspot backup during home internet installation delays.",
    "Switch to SIM-only later without changing your phone number via number portability.",
  ],
  prepaidExamples: [
    { title: "First-week arrival", body: "Starter bundles often cost EUR 10–20 and give enough data for maps, messaging and banking OTPs." },
    { title: "Heavy data interim", body: "If home internet is delayed, compare per-GB top-ups rather than buying the largest bundle automatically." },
    { title: "International calls", body: "Lebara and similar brands focus on international minutes — check country lists if you call home often." },
    { title: "Switching later", body: "Number portability lets you move from prepaid to SIM-only without losing your Dutch number." },
  ] satisfies TipCard[],
  esim: {
    heading: "Using eSIM Services",
    paragraphs: [
      "Many Dutch providers support eSIM activation, letting you download a mobile profile digitally instead of waiting for a physical SIM card.",
      "Confirm your phone supports eSIM and is unlocked if you are bringing it from another country. Keep Wi-Fi access during first activation.",
      "Dual-SIM usage lets you keep a home-country number for OTPs while using a Dutch data plan for daily use.",
    ],
  },
  esimTips: [
    { title: "Check device compatibility", body: "Not all phones support eSIM — verify before relying on digital activation alone." },
    { title: "Activate on Wi-Fi", body: "Download the eSIM profile where you have stable internet, such as temporary accommodation Wi-Fi." },
    { title: "Dual-SIM for travel", body: "Keep your home SIM for banking codes while using Dutch data on the second profile." },
    { title: "Business travellers", body: "eSIM can speed up activation for short assignments without visiting a shop." },
  ] satisfies TipCard[],
  esimSteps: [
    "Confirm your phone supports eSIM and is unlocked for use in the Netherlands.",
    "Choose a Dutch provider plan that explicitly lists eSIM support.",
    "Order online and keep Wi-Fi access for the QR code or profile download.",
    "Install the eSIM profile and test data before removing your old SIM if possible.",
    "Label profiles clearly if using dual-SIM with a home-country number for OTPs.",
  ],
  remoteWork: {
    heading: "Internet for Remote Work",
    paragraphs: [
      "Remote workers should prioritise stable upload speeds, low latency and reliable Wi-Fi coverage in the room where video calls happen — not just headline download numbers.",
      "Fibre is often the best fixed option where available. Keep a mobile hotspot as backup during installation or outages.",
      "Freelancers and ZZP professionals may need business-grade connectivity or higher upload tiers — verify product labels carefully.",
    ],
  },
  remoteWorkTips: [
    { title: "Prioritise upload speed", body: "Video calls and file uploads need stable upstream — check upload Mbps, not download alone." },
    { title: "Test your desk location", body: "Wi-Fi signal can vary by room — test where you will take calls before committing to a plan." },
    { title: "Keep a mobile backup", body: "A prepaid or SIM-only hotspot helps during installation delays or short outages." },
    { title: "Check business products", body: "Freelancers may need static IP, SLA support or higher upload tiers on business-labelled plans." },
  ] satisfies TipCard[],
  students: {
    heading: "Internet and Mobile for Students",
    paragraphs: [
      "Students in shared housing should confirm whether internet is included, whether roommates share one contract, and who pays for installation.",
      "Prepaid or short SIM-only contracts suit academic-year stays. Compare student promotions but read renewal and price-step terms.",
      "Order internet early in popular student cities because installation slots can fill around semester start.",
    ],
  },
  studentTips: [
    { title: "Confirm shared internet rules", body: "Check whether Wi-Fi is included, split between roommates or needs a new contract in your name." },
    { title: "Use flexible mobile first", body: "Prepaid or short SIM-only contracts suit academic-year stays without long lock-in." },
    { title: "Agree costs in writing", body: "Splitting internet with housemates works best when payment and contract responsibility are clear." },
    { title: "Order before semester rush", body: "Installation appointments fill quickly in Utrecht, Amsterdam, Groningen and other student cities." },
  ] satisfies TipCard[],
  cityCoverage: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", body: "Dense fibre and cable competition; installation in older buildings may need landlord approval." },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", body: "Strong urban connectivity with multiple national providers available by postcode." },
    { city: "The Hague", href: "/netherlands/the-hague/", body: "Good fibre rollout and mobile capacity across international and diplomatic districts." },
    { city: "Utrecht", href: "/netherlands/utrecht/", body: "Student and family housing mix — compare shared-internet arrangements in rentals." },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", body: "Tech-oriented city with competitive broadband options in many neighbourhoods." },
    { city: "Groningen", href: "/netherlands/groningen/", body: "Large student population; strong mobile coverage and growing fibre availability." },
  ],
  coverageNotes: [
    { title: "Urban areas", body: "Amsterdam, Rotterdam, Utrecht and other cities generally have strong 4G/5G capacity and competitive fixed-line options." },
    { title: "Rural and suburban", body: "Mobile coverage is generally good nationally, but fixed-line technology still depends on your exact address." },
    { title: "Indoor signal", body: "Thick walls, basements and new-build insulation can weaken indoor mobile signal — test in your home if calls matter." },
    { title: "Remote work backup", body: "If coverage at home is weak, a mobile hotspot or mesh Wi-Fi may matter as much as provider brand." },
  ] satisfies TipCard[],
  setupPhases: [
    {
      phase: "Before move-in",
      tasks: [
        "Run a postcode check for fibre, cable and DSL at your new address.",
        "Compare 2–3 internet providers on technology, speed and contract length.",
        "Order home internet once your move-in date is confirmed.",
      ],
    },
    {
      phase: "Arrival week",
      tasks: [
        "Activate prepaid, SIM-only or eSIM for a Dutch mobile number.",
        "Use mobile data for banking OTPs, appointments and first-week admin.",
        "Save installation appointment details and building access instructions.",
      ],
    },
    {
      phase: "After activation",
      tasks: [
        "Test Wi-Fi speed and coverage at your desk or main work area.",
        "Set up provider online accounts and direct debit if required.",
        "Review contract end dates and promotional price steps.",
      ],
    },
  ] satisfies SetupPhase[],
  setupChecklist: [
    "Check fibre availability at your address",
    "Compare internet providers by technology and contract length",
    "Order internet before move-in when possible",
    "Choose a mobile provider and plan type",
    "Decide on SIM-only, prepaid or phone contract",
    "Activate eSIM if your device supports it",
    "Test mobile coverage in your home",
    "Set up online accounts and save confirmations",
  ],
  commonMistakes: [
    { title: "Waiting too long to order internet", body: "Installation queues can delay your first productive week at home." },
    { title: "Ignoring fibre availability", body: "You may miss faster options if you default to cable without checking glasvezel." },
    { title: "Choosing unsuitable bundles", body: "TV packages you never watch increase monthly cost without adding value." },
    { title: "Overpaying for mobile plans", body: "Large data bundles or phone contracts may exceed what you actually need." },
    { title: "Forgetting eSIM options", body: "Digital activation can be faster than waiting for a physical SIM delivery." },
    { title: "Not checking contract length", body: "Promotional prices often step up after the initial term." },
    { title: "Assuming foreign plans are sufficient", body: "Roaming data limits and fair-use rules make local plans better long term." },
    { title: "Ignoring business internet requirements", body: "Freelancers may need different products than standard residential broadband." },
  ] satisfies TipCard[],
  connectivityProviders,
  providerDirectory: connectivityProviders,
  faqs: [
    { q: "Which internet provider should I choose?", a: "There is no universal best provider. Compare postcode availability for fibre, cable or DSL, speed needs, installation timing, TV bundles and contract length before ordering." },
    { q: "Is fibre available?", a: "Fibre rollout is extensive but address-specific. Run a postcode check with providers — availability can differ within the same street or building." },
    { q: "How much does internet cost?", a: "Basic internet often costs roughly EUR 25–40 per month, while higher-speed fibre or bundled TV plans may reach EUR 45–75 or more. Verify current tariffs with providers." },
    { q: "Which mobile provider is most popular?", a: "KPN, Vodafone and Odido are among the largest networks, but popularity does not mean best fit. Compare SIM-only, prepaid, eSIM and data needs for your situation." },
    { q: "Should I choose SIM-only?", a: "SIM-only is popular among expats who already own an unlocked phone. It usually costs less and offers more flexibility than phone-inclusive contracts." },
    { q: "Is eSIM available?", a: "Yes. Many Dutch providers support eSIM on compatible phones. Confirm device support and keep Wi-Fi access during activation." },
    { q: "How good is mobile coverage?", a: "The Netherlands generally offers strong national mobile coverage in urban and rural areas. Indoor signal can still vary by building." },
    { q: "Can I arrange internet before moving in?", a: "Often yes, once you have a confirmed move-in date and address. Ordering early helps secure installation appointments before your first week gets busy." },
  ],
  officialSources: [
    { label: "ACM", href: "https://www.acm.nl/en", description: "Consumer and market authority context for telecom markets, switching rights and consumer complaints in the Netherlands." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "General Dutch government information for residents, digital services and living in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Business connectivity, registration and regulatory context for entrepreneurs and ZZP professionals." },
  ],
  sourceUsageTips: [
    "Use ACM for consumer rights context when comparing telecom contracts or raising service issues.",
    "Use Government.nl for general resident information alongside provider-specific terms.",
    "Use Business.gov.nl if you need business broadband, entrepreneur registration or company connectivity context.",
    "Always confirm current tariffs, speeds, coverage and contract terms directly with providers before signing.",
  ],
  relatedGuides: [
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Complete utilities setup covering energy, water, waste and connectivity." },
    { label: "Energy and Water", href: ENERGY_AND_WATER_NETHERLANDS_PATH, status: "live", description: "Electricity, gas, water and district heating setup after moving." },
    { label: "Renting", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Confirm included utilities and connectivity in your rental contract." },
    { label: "Freelancing", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Connect home internet setup with freelancing and client work." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Business admin and connectivity for self-employed professionals." },
  ] satisfies ConnectivityLink[],
  exploreNextCards: [
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Continue into energy, water, waste and full utility setup." },
    { label: "Energy and Water", href: ENERGY_AND_WATER_NETHERLANDS_PATH, status: "live", description: "Set up electricity, gas, water and heating alongside connectivity." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Check lease terms for included internet and shared housing rules." },
    { label: "Freelancing", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Plan connectivity for client work and home office setup." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Continue into relocation planning and first-week admin." },
  ] satisfies ConnectivityLink[],
  futureGuides: [
    { label: "Internet Providers Netherlands", href: "/netherlands/utilities/internet-providers-netherlands/", status: "comingSoon", description: "Deeper directory of Dutch home internet providers." },
    { label: "Mobile Providers Netherlands", href: "/netherlands/utilities/mobile-providers-netherlands/", status: "comingSoon", description: "Expanded mobile provider comparison guide." },
    { label: "Fibre Internet Netherlands", href: "/netherlands/utilities/fibre-internet-netherlands/", status: "comingSoon", description: "Glasvezel availability, speeds and installation." },
    { label: "eSIM Netherlands", href: "/netherlands/utilities/esim-netherlands/", status: "comingSoon", description: "eSIM activation and dual-SIM guide for expats." },
  ] satisfies ConnectivityLink[],
};
