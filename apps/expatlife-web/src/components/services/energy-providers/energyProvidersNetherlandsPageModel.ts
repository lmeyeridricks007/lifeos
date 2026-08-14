import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { INTERNET_PROVIDERS_PATH } from "@/src/components/services/internet-providers/internetProvidersNetherlandsPageModel";
import { PHONE_PROVIDERS_PATH } from "@/src/components/services/phone-providers/phoneProvidersNetherlandsPageModel";

/** Services directory — Dutch electricity/gas supplier comparison for expats. */
export const ENERGY_PROVIDERS_PATH = "/netherlands/services/energy-providers/" as const;
export const ENERGY_PROVIDERS_NETHERLANDS_PATH = ENERGY_PROVIDERS_PATH;

export { INTERNET_PROVIDERS_PATH, PHONE_PROVIDERS_PATH };
export const MOBILE_CONNECTIVITY_PATH = "/netherlands/services/mobile-connectivity/" as const;
export const ENERGY_AND_WATER_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const UTILITIES_HUB_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;

export const ENERGY_PROVIDERS_AFFILIATE_PLACEMENT_ID =
  "nl-services-energy-providers-support-providers" as const;

export type EnergyProviderEntry = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatFocus: string;
  languages: string[];
  remoteSupport: boolean;
  inPersonAvailability: string;
  website: string;
  engagementType: string;
  providerType:
    | "National energy retailer"
    | "Challenger / green retailer"
    | "Dynamic / variable specialist"
    | "Dual-fuel (electricity + gas)"
    | "Comparison platform"
    | "Landlord-included energy"
    | "Grid operator orientation"
    | "ACM / ConsuWijzer orientation";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type EnergyProviderLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-energy-providers";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const energyProvidersNetherlandsPage = {
  slug: "energy-providers",
  path: ENERGY_PROVIDERS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ENERGY_PROVIDERS_PATH) ?? "2026-11-04",
  affiliatePlacementId: ENERGY_PROVIDERS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Energy Providers in the Netherlands for Expats | Electricity & Gas Guide",
    description:
      "Compare Dutch electricity and gas suppliers for expats: fixed vs variable contracts, switching and soft discovery — not an energy-brand ranking. Setup and meters live on Energy & water.",
    keywords: [
      "energy providers netherlands",
      "electricity provider netherlands expats",
      "gas supplier netherlands",
      "energie leverancier nederland",
      "fixed vs variable energy netherlands",
      "switch energy provider netherlands",
      "compare energy netherlands",
      "Pricewise energy netherlands",
      "energy contract netherlands expats",
      "best energy provider netherlands expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Energy providers",
    pageTitle: "Energy Providers in the Netherlands for Expats",
    subtitle:
      "Orient on Dutch electricity and gas suppliers — fixed vs variable contracts, switching, cancellation and soft comparison approaches. This directory owns supplier discovery, not meters, water companies or the utilities setup how-to.",
    primaryCta: { label: "Browse Energy Directory", href: "#directory" },
    secondaryCta: { label: "Not the same as…", href: "#differentiate" },
    chips: ["Electricity & gas", "Fixed vs variable", "Switching", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-energy-providers-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple comparing Dutch energy contracts on a laptop at a bright canal-side apartment desk, utility bills and meter notes visible.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic introducing the Dutch electricity and gas supplier market for expats: retailer vs grid, contract types and what to compare.",
      "Start with supplier vs grid — then compare fixed, variable and switch timing for your stay length."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating energy providers, energy-and-water how-to, internet providers, phone providers and the utilities hub.",
      "Pick the right page first: this directory owns supplier comparison; meters and water setup live elsewhere."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch energy providers for expats.",
      "Use this snapshot before signing: contract type, notice, dual-fuel need and who pays the grid charge."
    ),
    market: visual(
      "market",
      "Infographic explaining Dutch energy market roles: electricity, gas, supplier (leverancier) and grid operator (netbeheerder).",
      "You choose the supplier — the local grid operator is usually fixed by address."
    ),
    contracts: visual(
      "contracts",
      "Infographic of Dutch energy contract types: fixed, variable, dynamic tariffs and notice-period orientation.",
      "Match contract style to how long you will stay and how comfortable you are with price movement."
    ),
    switching: visual(
      "switching",
      "Infographic showing a Dutch energy switching flow: compare offers, switch, cooling-off and meter reading handoff.",
      "Switching is usually online — confirm start date, meter readings and who cancels the old contract."
    ),
    products: visual(
      "products",
      "Infographic explaining electricity-only, gas-only, dual-fuel and green-energy orientation for Dutch households.",
      "Many rentals need both electricity and gas — still compare whether dual-fuel is cheaper than separate deals."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing national retailers, green challengers, dynamic tariffs, comparison sites and landlord-included energy.",
      "Match the provider model to stay length and risk comfort — not every brand fits every lease."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic of expat energy scenarios: short lease, fixed-price comfort, dynamic-tariff curiosity and landlord-included bills.",
      "Your best path depends on stay length, risk tolerance and whether energy is already in the rent."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic of common expat mistakes with Dutch energy contracts: confusing grid with supplier, ignoring notice and skipping comparison.",
      "Avoid signing on brand ads alone — verify contract type, term and switch logistics first."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral energy-provider directory workflow: shortlist, compare terms, switch and keep meter readings.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparison: visual(
      "comparison",
      "Infographic comparison matrix for Dutch energy supplier models: contract style, dual-fuel, English support and expat fit.",
      "Compare fit and contract clarity before chasing the lowest teaser rate."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist before choosing a Dutch energy supplier: contract type, term, dual-fuel need, switch date and cancellation path.",
      "A short checklist prevents most first-apartment energy regrets."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch energy providers before signing.",
      "Good questions reveal real unit rates, standing charges, exit terms and English support."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common energy-provider FAQ topics: fixed vs variable, switching, green claims and ACM orientation.",
      "FAQ answers should help you pick the next verification step — not replace contract reading."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist Dutch energy providers: compare contracts, confirm switch and keep meters with the how-to guide.",
      "Turn energy discovery into a structured shortlist before you switch."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for Dutch energy consumer orientation: ACM, ConsuWijzer and government consumer topics.",
      "Verify consumer rights and complaint paths with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around household utilities: energy providers, internet providers, phone providers and utilities guides.",
      "Energy contracts are one piece of the wider utilities and connectivity ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing energy suppliers: energy-and-water how-to, internet providers, phone providers and utilities hub.",
      "Continue from supplier discovery into meters/setup how-to, broadband and mobile plans."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting energy-provider research to internet, phone, mobile connectivity, utilities hub and Dutch cities.",
      "Energy shortlists connect naturally into the rest of household setup."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#market", label: "Market" },
    { href: "#contracts", label: "Contracts" },
    { href: "#switching", label: "Switching" },
    { href: "#products", label: "Products" },
    { href: "#provider-types", label: "Provider types" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#checklist", label: "Checklist" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Compare Dutch Energy Providers Carefully",
    paragraphs: [
      "In the Netherlands, you usually choose an electricity and/or gas supplier (energieleverancier), while the local grid operator (netbeheerder) is determined by your address. Marketing often mixes those roles — clarifying them early prevents expensive mistakes.",
      "This page is a services directory for supplier discovery: contract types (fixed vs variable), switching, dual-fuel orientation and soft comparison approaches such as Pricewise. It does not rebuild the Energy & water utilities how-to for meters, water companies or move-in setup steps.",
      "Inclusion here is informational soft discovery, not a ranking of Vattenfall, Eneco, Essent or any other brand. Confirm unit rates, standing charges, contract length and cancellation terms directly with providers before you switch.",
    ],
    links: [
      { label: "Energy & water how-to", href: ENERGY_AND_WATER_PATH },
      { label: "Internet providers", href: INTERNET_PROVIDERS_PATH },
      { label: "Phone providers", href: PHONE_PROVIDERS_PATH },
      { label: "Utilities hub", href: UTILITIES_HUB_PATH },
      { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Energy providers (this page)",
      body: "Electricity and gas supplier comparison directory — fixed vs variable, switching and soft discovery.",
      href: ENERGY_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Energy & water how-to",
      body: "Utilities guide for meters, water, move-in setup and practical household energy orientation — not supplier rankings.",
      href: ENERGY_AND_WATER_PATH,
      status: "live" as const,
    },
    {
      title: "Internet providers",
      body: "Sibling Connectivity directory for fibre, cable and DSL ISP discovery.",
      href: INTERNET_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Phone providers",
      body: "Sibling directory for mobile and phone-plan discovery — separate from energy contracts.",
      href: PHONE_PROVIDERS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Supplier", value: "You choose", note: "Retailer (leverancier) is competitive; grid is local." },
    { label: "Contracts", value: "Fixed / variable", note: "Match risk and stay length before chasing teaser rates." },
    { label: "Switching", value: "Usually online", note: "Confirm start date, meter readings and cooling-off." },
    { label: "Dual-fuel", value: "Optional", note: "Electricity + gas can be one deal or two." },
    { label: "Water", value: "Other page", note: "Water companies and meters live on Energy & water." },
    { label: "Guarantee", value: "None", note: "No directory ranks energy brands or guarantees bills." },
  ],
  marketCards: [
    {
      title: "Electricity supplier",
      body: "You pick a retailer for kWh supply. Offers differ by fixed/variable price, green claims and standing charge.",
    },
    {
      title: "Gas supplier",
      body: "Many Dutch rentals still use gas for heating/cooking. Dual-fuel deals bundle electricity + gas; separate deals can be better.",
    },
    {
      title: "Grid operator (netbeheerder)",
      body: "Distribution and metering are usually fixed by region. Network charges appear on bills even when you switch retailer.",
    },
    {
      title: "Meter readings & smart meters",
      body: "Accurate readings matter at switch and move-out. Deep setup steps belong on the Energy & water how-to guide.",
    },
    {
      title: "Standing charge vs unit rate",
      body: "Cheap kWh with a high vastrecht (standing charge) can cost more for low-usage households — compare both.",
    },
    {
      title: "Green / renewable claims",
      body: "Labels and guarantees of origin vary. Treat green marketing as orientation — verify what the contract actually says.",
    },
  ],
  contractCards: [
    {
      title: "Fixed-price (vast)",
      body: "Price locked for a set term. Useful when you want bill predictability for a known stay length.",
    },
    {
      title: "Variable-price (variabel)",
      body: "Rates can change with market conditions. More flexible exits sometimes; less predictability month to month.",
    },
    {
      title: "Dynamic / hourly-style tariffs",
      body: "Some retailers link prices more closely to wholesale markets. Higher complexity — only if you understand the risk.",
    },
    {
      title: "Promo vs renewal price",
      body: "Welcome discounts can rise after the first period. Note the post-promo rate and notice rules.",
    },
    {
      title: "Notice & early exit",
      body: "Fixed terms may include exit fees. Read cancellation timing before you sign a multi-year deal on a one-year lease.",
    },
    {
      title: "Cooling-off & switching rights",
      body: "Consumer cooling-off and switching orientation can apply — use ACM / ConsuWijzer for current guidance.",
    },
  ],
  switchingSteps: [
    {
      item: "Confirm who currently holds the contract",
      why: "Landlord-included energy means you may not be free to switch without permission.",
    },
    {
      item: "Compare unit rate + standing charge + term",
      why: "Teaser kWh prices hide vastrecht and post-promo jumps.",
    },
    {
      item: "Check start date vs move-in / lease end",
      why: "Avoid overlapping contracts or gaps without supply.",
    },
    {
      item: "Plan meter readings at switch",
      why: "Accurate readings prevent disputed final bills.",
    },
    {
      item: "Ask who cancels the old retailer",
      why: "Many switches are handled by the new supplier — still confirm in writing.",
    },
    {
      item: "Keep a copy of confirmation emails",
      why: "You will need them if activation slips or a final bill looks wrong.",
    },
  ],
  productCards: [
    {
      title: "Electricity-only",
      body: "Common in all-electric apartments. Still confirm whether cooking and heating are electric.",
    },
    {
      title: "Gas-only",
      body: "Less common alone, but relevant if electricity is already covered differently.",
    },
    {
      title: "Dual-fuel (electricity + gas)",
      body: "One retailer for both can simplify billing — still compare against separate best offers.",
    },
    {
      title: "Green / renewable-labelled",
      body: "Useful if sustainability matters — verify certificates and what “100% green” means in the contract.",
    },
  ],
  providerTypeComparison: [
    {
      type: "National energy retailer",
      scope: "Large consumer brands selling electricity and often gas nationwide.",
      usefulWhen: "You want a widely known brand and established self-service portals.",
      questions: ["Fixed or variable available?", "English support channel?", "Exit fee on this term?"],
    },
    {
      type: "Challenger / green retailer",
      scope: "Smaller or sustainability-focused retailers competing on price or green positioning.",
      usefulWhen: "You want leaner offers or stronger renewable labelling.",
      questions: ["What does green mean here?", "Support hours?", "Dual-fuel available?"],
    },
    {
      type: "Dynamic / variable specialist",
      scope: "Retailers emphasising market-linked or frequently adjusting tariffs.",
      usefulWhen: "You understand price risk and may shift usage timing.",
      questions: ["How often do prices change?", "App clarity?", "Exit flexibility?"],
    },
    {
      type: "Dual-fuel (electricity + gas)",
      scope: "Packages covering both fuels under one retailer and often one invoice.",
      usefulWhen: "Your rental needs both and you want simpler admin.",
      questions: ["Is dual cheaper than split deals?", "One notice period?", "Meter handoff process?"],
    },
    {
      type: "Comparison platform",
      scope: "Self-serve deal screens for energy (and often internet) — orientation, not personal advice.",
      usefulWhen: "You want to shortlist price and term before opening retailer carts.",
      questions: ["Which products are compared?", "How current are rates?", "Any switching help?"],
    },
    {
      type: "Landlord-included energy",
      scope: "Energy is part of rent or service costs — you may not choose the retailer.",
      usefulWhen: "Short stays or furnished lets where switching is restricted.",
      questions: ["Who holds the contract?", "How is usage billed?", "What if I overuse?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "New arrival, 12-month lease",
      whatCanMatter: "Contract length vs lease end; switch timing around keys.",
      exampleQuestion: "Can I take a 12-month fixed deal without painful early exit if I leave on time?",
      betterPath: "Shortlist fixed 12-month → confirm notice → keep Energy & water for meter steps.",
    },
    {
      profile: "Wants bill predictability",
      whatCanMatter: "Fixed unit rates and clear standing charges.",
      exampleQuestion: "What is the locked kWh price and vastrecht for the full term?",
      betterPath: "Fixed contracts + comparison site for term clarity.",
    },
    {
      profile: "Comfortable with market movement",
      whatCanMatter: "Variable or dynamic tariffs and app transparency.",
      exampleQuestion: "How often can prices change, and how will I be notified?",
      betterPath: "Variable/dynamic specialists — only with clear risk understanding.",
    },
    {
      profile: "Landlord includes energy",
      whatCanMatter: "Whether you can or should run your own contract.",
      exampleQuestion: "Is energy included, and am I allowed a separate supplier?",
      betterPath: "Confirm lease rules first — then supplier shopping only if needed.",
    },
  ],
  mistakeCards: [
    {
      title: "Confusing grid with supplier",
      body: "Switching retailer does not change your local netbeheerder — network charges still apply.",
    },
    {
      title: "Ignoring standing charges",
      body: "Low unit rates with high vastrecht can cost more for small apartments.",
    },
    {
      title: "Signing longer than your lease",
      body: "Multi-year fixed deals on short leases can create exit-fee stress.",
    },
    {
      title: "Skipping comparison tools",
      body: "Brand ads alone rarely show the full shortlist — soft comparison helps orientation.",
    },
    {
      title: "Mixing this page with Energy & water",
      body: "Meters, water and move-in setup live on the utilities how-to — not this directory.",
    },
    {
      title: "Assuming English equals clear terms",
      body: "Marketing English may not cover exit fees — read the Dutch contract summary carefully.",
    },
    {
      title: "Forgetting meter readings",
      body: "Missing readings at switch or move-out drives disputed final bills.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Verify rates and terms yourself.",
    },
  ],
  providers: [
    {
      name: "National energy retailers",
      slug: "national-energy-retailers",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Large consumer brands selling electricity and often gas nationwide — product names and rates change frequently.",
      expatFocus:
        "Useful starting point when you want a familiar brand and established portals; still compare fixed vs variable carefully.",
      languages: ["Dutch", "English availability varies by brand"],
      remoteSupport: true,
      inPersonAvailability: "Mostly online; retail shops vary by brand.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Consumer energy supply contract",
      providerType: "National energy retailer",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Nationwide retail"],
      featured: true,
      verificationNote:
        "This row describes a provider type, not a ranked endorsement of any single brand. Confirm live rates on the provider site.",
    },
    {
      name: "Challenger & green retailers",
      slug: "challenger-green-retailers",
      city: "Online / national",
      region: "Netherlands",
      summary:
        "Smaller or sustainability-focused retailers competing on price, simplicity or renewable labelling.",
      expatFocus:
        "Useful when you prioritise green claims or leaner online offers — verify what green means in the contract.",
      languages: ["Dutch", "English limited on some brands"],
      remoteSupport: true,
      inPersonAvailability: "Usually online-only support.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Green / challenger energy retail",
      providerType: "Challenger / green retailer",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Green marketing varies — check guarantees of origin and contract wording, not slogans alone.",
    },
    {
      name: "Dynamic / variable specialists",
      slug: "dynamic-variable-specialists",
      city: "Online",
      region: "Netherlands",
      summary:
        "Retailers emphasising variable or market-linked tariffs with more frequent price updates.",
      expatFocus:
        "Relevant only if you understand bill volatility and can track usage/pricing apps.",
      languages: ["Dutch", "English varies"],
      remoteSupport: true,
      inPersonAvailability: "Online apps and chat.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Dynamic / variable supply",
      providerType: "Dynamic / variable specialist",
      citiesServed: ["Where smart-meter / product rules allow"],
      featured: false,
      verificationNote:
        "Dynamic products are not “cheaper by default” — confirm how prices update and how exits work.",
    },
    {
      name: "Dual-fuel electricity + gas packages",
      slug: "dual-fuel-packages",
      city: "Nationwide retail",
      region: "Netherlands",
      summary:
        "Combined electricity and gas offers under one retailer — often one invoice and one switch process.",
      expatFocus:
        "Helpful for classic Dutch rentals with gas heating — still compare against separate best deals.",
      languages: ["Dutch", "English varies"],
      remoteSupport: true,
      inPersonAvailability: "Online switching.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Dual-fuel supply",
      providerType: "Dual-fuel (electricity + gas)",
      citiesServed: ["Most municipalities with gas + electricity"],
      featured: true,
      verificationNote:
        "Dual-fuel convenience is not always the lowest total cost — compare both paths.",
    },
    {
      name: "Pricewise (comparison platform)",
      slug: "pricewise-comparison-platform",
      city: "Online",
      region: "Netherlands",
      summary:
        "Well-known Dutch comparison site covering energy alongside internet and insurance — self-serve deal screening.",
      expatFocus:
        "Helpful to shortlist fixed/variable offers and contract lengths before opening a retailer cart.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Online only.",
      website: "https://www.pricewise.nl/",
      engagementType: "Self-serve comparison",
      providerType: "Comparison platform",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Comparison results are orientation tools — confirm the final offer on the provider’s checkout.",
    },
    {
      name: "Independer (comparison orientation)",
      slug: "independer-comparison",
      city: "Online",
      region: "Netherlands",
      summary:
        "Comparison platform often used for insurance and household utilities orientation, including energy-adjacent screening.",
      expatFocus:
        "Soft overlap when you are setting up a full household package — not an energy-brand endorsement.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Online only.",
      website: "https://www.independer.nl/",
      engagementType: "Self-serve comparison",
      providerType: "Comparison platform",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Use for orientation only — verify live energy rates and terms with the retailer.",
    },
    {
      name: "Landlord-included energy",
      slug: "landlord-included-energy",
      city: "Rentals & furnished lets",
      region: "Netherlands",
      summary:
        "Situations where electricity/gas is bundled into rent or service costs and you may not choose the retailer.",
      expatFocus:
        "Common for short stays and furnished apartments — clarify usage caps and who handles faults.",
      languages: ["Depends on landlord / agency"],
      remoteSupport: false,
      inPersonAvailability: "Building / landlord handles the contract.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Included energy",
      providerType: "Landlord-included energy",
      citiesServed: ["Furnished rentals", "Short-stay housing"],
      featured: false,
      verificationNote:
        "If energy is included, ask before ordering a second contract you cannot cancel easily.",
    },
    {
      name: "Grid operator orientation",
      slug: "grid-operator-orientation",
      city: "Regional NL",
      region: "Netherlands",
      summary:
        "Local netbeheerder handles distribution and often metering — not a competitive supplier choice for most households.",
      expatFocus:
        "Know who your grid operator is for meter issues; do not confuse them with the retailer you shop for.",
      languages: ["Dutch", "English limited"],
      remoteSupport: true,
      inPersonAvailability: "Regional grid contact channels.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Grid / metering orientation",
      providerType: "Grid operator orientation",
      citiesServed: ["By regional monopoly"],
      featured: false,
      verificationNote:
        "Grid operators are address-based — switching energy retailers does not switch the grid company.",
    },
    {
      name: "ACM / ConsuWijzer consumer orientation",
      slug: "acm-consuwijzer-energy",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Official consumer orientation on energy markets, switching and complaint paths in the Netherlands.",
      expatFocus:
        "Best verification starting point for rights and switching orientation — not a product catalogue.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online consumer guidance.",
      website: "https://www.acm.nl/en/consumers/energy",
      engagementType: "Regulatory / consumer orientation",
      providerType: "ACM / ConsuWijzer orientation",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "ACM / ConsuWijzer pages are consumer orientation — not rankings of energy brands.",
    },
  ] satisfies EnergyProviderEntry[],
  comparisonTable: [
    {
      provider: "National energy retailers",
      citiesServed: "Nationwide retail",
      expatFocus: "Brand familiarity",
      languages: "Dutch, English varies",
      onlineOrdering: "Usually",
      providerType: "National energy retailer",
    },
    {
      provider: "Challenger / green retailers",
      citiesServed: "Online NL",
      expatFocus: "Green / lean offers",
      languages: "Dutch first",
      onlineOrdering: "Usually",
      providerType: "Challenger / green retailer",
    },
    {
      provider: "Dynamic / variable specialists",
      citiesServed: "Where product allows",
      expatFocus: "Price flexibility",
      languages: "Dutch, English varies",
      onlineOrdering: "Often app-led",
      providerType: "Dynamic / variable specialist",
    },
    {
      provider: "Dual-fuel packages",
      citiesServed: "Most municipalities",
      expatFocus: "One invoice",
      languages: "Dutch, English varies",
      onlineOrdering: "Usually",
      providerType: "Dual-fuel (electricity + gas)",
    },
    {
      provider: "Pricewise comparison",
      citiesServed: "Online NL",
      expatFocus: "Deal screening",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes (to providers)",
      providerType: "Comparison platform",
    },
    {
      provider: "Independer comparison",
      citiesServed: "Online NL",
      expatFocus: "Household orientation",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes (to providers)",
      providerType: "Comparison platform",
    },
    {
      provider: "Landlord-included energy",
      citiesServed: "Furnished rentals",
      expatFocus: "Short stays",
      languages: "Depends on landlord",
      onlineOrdering: "N/A",
      providerType: "Landlord-included energy",
    },
    {
      provider: "ACM / ConsuWijzer",
      citiesServed: "Netherlands-wide",
      expatFocus: "Rights & switching",
      languages: "Dutch, English site",
      onlineOrdering: "Guidance only",
      providerType: "ACM / ConsuWijzer orientation",
    },
  ],
  preSignChecklist: [
    {
      item: "Supplier vs grid roles understood",
      why: "Avoid shopping the wrong company for meter or network issues.",
    },
    {
      item: "Fixed vs variable choice matches stay length",
      why: "Risk and exit fees should fit your lease reality.",
    },
    {
      item: "Unit rate + standing charge compared",
      why: "True monthly cost is not teaser kWh alone.",
    },
    {
      item: "Dual-fuel vs separate deals checked",
      why: "Convenience can hide a higher total.",
    },
    {
      item: "Switch start date vs keys / lease end",
      why: "Prevent gaps or overlapping contracts.",
    },
    {
      item: "Meter reading plan written down",
      why: "Protect yourself at switch and move-out.",
    },
    {
      item: "Landlord permission confirmed if needed",
      why: "Included-energy leases may block independent switching.",
    },
    {
      item: "Cancellation / exit path saved",
      why: "Know notice and fees before you need to leave.",
    },
  ],
  questionsToAsk: [
    "Is this a fixed, variable or dynamic tariff — and what is the full-term price including standing charge?",
    "What happens to the rate after any welcome discount ends?",
    "Do you offer dual-fuel, and is it cheaper than separate electricity and gas deals?",
    "What is the notice period and any early-exit fee for this contract length?",
    "Who cancels my current supplier, and what start date can you confirm in writing?",
    "What meter readings do you need at switch, and how should I submit them?",
    "Is English support available for billing questions, or Dutch-only?",
    "If my lease ends early, what are my realistic exit options?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Energy Providers?",
    body: "Use the directory to compare contract style, dual-fuel need, switch logistics and whether energy is already in your rent. Then verify offers on provider tools or a comparison site — and keep meters, water and move-in setup on the Energy & water how-to guide.",
    primaryCta: { label: "Compare Energy Providers", href: "#directory" },
    secondaryCta: { label: "Open Energy & Water How-to", href: ENERGY_AND_WATER_PATH },
  },
  faqs: [
    {
      q: "What is the difference between an energy supplier and the grid operator?",
      a: "You usually choose the electricity/gas supplier (retailer). The local grid operator (netbeheerder) is typically fixed by address and handles distribution and often metering. Switching retailers does not change your grid company.",
    },
    {
      q: "How is this page different from the Energy & water utilities guide?",
      a: "This page is the supplier comparison directory (contracts, switching, soft discovery). Energy & water owns practical setup how-to: meters, water companies and move-in orientation. Use both — they do not replace each other.",
    },
    {
      q: "Should I choose a fixed or variable energy contract?",
      a: "Fixed can help predictability for a known stay length; variable may move with markets and sometimes offer different exit flexibility. Match the style to your risk comfort and lease — this page does not give personal financial advice.",
    },
    {
      q: "Do I need dual-fuel (electricity + gas)?",
      a: "Many Dutch rentals still use gas for heating or cooking. Dual-fuel can simplify billing, but separate deals can be cheaper — compare both. All-electric homes may only need electricity.",
    },
    {
      q: "How does switching usually work?",
      a: "Most switches are online. Confirm start date, meter readings, who cancels the old contract and cooling-off rules. Keep written confirmation. For meter setup detail, use the Energy & water guide.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends an energy brand?",
      a: "No. Listings are informational soft discovery of provider types and comparison approaches. Always verify rates, fees, languages and fit directly with the provider.",
    },
    {
      q: "Where do internet and phone directories fit?",
      a: "Internet providers and Phone providers are sibling Connectivity directories. Mobile & connectivity and the utilities hub cover related household setup topics.",
    },
    {
      q: "Where can I check consumer rights for energy?",
      a: "Start with ACM consumer energy pages and ConsuWijzer orientation. They provide switching and complaint guidance — not product rankings.",
    },
  ],
  officialSources: [
    {
      label: "ACM — Energy for consumers",
      href: "https://www.acm.nl/en/consumers/energy",
      description:
        "Netherlands Authority for Consumers and Markets — consumer orientation on energy markets and switching.",
    },
    {
      label: "ConsuWijzer",
      href: "https://www.consuwijzer.nl/",
      description: "Consumer advice portal often used for Dutch contract and complaint orientation.",
    },
    {
      label: "ACM — Consumers hub",
      href: "https://www.acm.nl/en/consumers",
      description: "Broader consumer-rights orientation for Dutch markets and contracts.",
    },
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government information portal for public consumer orientation.",
    },
    {
      label: "Rijksoverheid — Energie",
      href: "https://www.rijksoverheid.nl/onderwerpen/energie",
      description: "Dutch government energy topic orientation (Dutch-language).",
    },
    {
      label: "Pricewise (comparison orientation)",
      href: "https://www.pricewise.nl/",
      description: "Public comparison platform often used to screen Dutch energy deals — not a ranking endorsement.",
    },
  ],
  relatedGuides: [
    {
      label: "Energy & water",
      href: ENERGY_AND_WATER_PATH,
      status: "live",
      description: "Primary how-to sibling for meters, water and move-in energy setup.",
    },
    {
      label: "Internet providers",
      href: INTERNET_PROVIDERS_PATH,
      status: "live",
      description: "Sibling Connectivity directory for fixed broadband discovery.",
    },
    {
      label: "Phone providers",
      href: PHONE_PROVIDERS_PATH,
      status: "live",
      description: "Sibling directory for mobile and phone-plan discovery.",
    },
    {
      label: "Mobile & connectivity",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live",
      description: "Services category page for SIMs, data and local numbers.",
    },
    {
      label: "Utilities hub",
      href: UTILITIES_HUB_PATH,
      status: "live",
      description: "Central utilities orientation after relocation.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Housing timing often drives when you can switch energy.",
    },
    {
      label: "Insurance brokers",
      href: INSURANCE_BROKERS_PATH,
      status: "live",
      description: "Household protection beside utilities setup.",
    },
  ] satisfies EnergyProviderLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Internet providers", href: INTERNET_PROVIDERS_PATH, status: "live", description: "Fibre, cable and DSL ISP directory." },
    { label: "Phone providers", href: PHONE_PROVIDERS_PATH, status: "live", description: "Mobile and phone-plan directory." },
    { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH, status: "live", description: "SIM and connectivity category page." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic move support before switch day." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental search that affects switch timing." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Household protection beside utilities setup." },
  ] satisfies EnergyProviderLink[],
  exploreNextCards: [
    {
      label: "Energy & water",
      href: ENERGY_AND_WATER_PATH,
      status: "live",
      description: "Continue into meters, water and practical setup after you choose a supplier.",
    },
    {
      label: "Internet providers",
      href: INTERNET_PROVIDERS_PATH,
      status: "live",
      description: "Compare fixed broadband next in the Connectivity cluster.",
    },
    {
      label: "Phone providers",
      href: PHONE_PROVIDERS_PATH,
      status: "live",
      description: "Add a mobile plan for daily use and install gaps.",
    },
    {
      label: "Mobile & connectivity",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live",
      description: "Orient on SIMs, data and local numbers.",
    },
    {
      label: "Utilities hub",
      href: UTILITIES_HUB_PATH,
      status: "live",
      description: "See the wider utilities checklist for new arrivals.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "City context for housing and household setup timing.",
    },
  ] satisfies EnergyProviderLink[],
};
