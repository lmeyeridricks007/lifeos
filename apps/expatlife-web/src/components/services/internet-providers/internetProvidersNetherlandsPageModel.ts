import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { PHONE_PROVIDERS_PATH } from "@/src/components/services/phone-providers/phoneProvidersNetherlandsPageModel";

/** Services directory — Dutch fixed broadband / fibre / cable / DSL ISPs for expats. */
export const INTERNET_PROVIDERS_PATH = "/netherlands/services/internet-providers/" as const;
export const INTERNET_PROVIDERS_NETHERLANDS_PATH = INTERNET_PROVIDERS_PATH;

export const ENERGY_PROVIDERS_PATH = "/netherlands/services/energy-providers/" as const;
export { PHONE_PROVIDERS_PATH };
export const MOBILE_CONNECTIVITY_PATH = "/netherlands/services/mobile-connectivity/" as const;
export const INTERNET_AND_MOBILE_UTILITIES_PATH =
  "/netherlands/utilities/internet-and-mobile-netherlands/" as const;
export const ENERGY_AND_WATER_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const UTILITIES_HUB_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;

export const INTERNET_PROVIDERS_AFFILIATE_PLACEMENT_ID =
  "nl-services-internet-providers-support-providers" as const;

export type InternetProviderEntry = {
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
    | "National fibre / copper ISP"
    | "Cable broadband operator"
    | "Regional fibre network"
    | "Challenger / value ISP"
    | "Comparison platform"
    | "Landlord-included connectivity"
    | "Business / SOHO fibre"
    | "ACM consumer orientation";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type InternetProviderLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-internet-providers";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const internetProvidersNetherlandsPage = {
  slug: "internet-providers",
  path: INTERNET_PROVIDERS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INTERNET_PROVIDERS_PATH) ?? "2026-11-04",
  affiliatePlacementId: INTERNET_PROVIDERS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Internet Providers in the Netherlands for Expats | Broadband Guide",
    description:
      "Compare Dutch fibre, cable and DSL internet providers for expats: contracts, installation, address checks and TV bundles — soft discovery directory, not an ISP ranking.",
    keywords: [
      "internet providers netherlands",
      "broadband netherlands expats",
      "fibre internet netherlands",
      "glasvezel netherlands",
      "ziggo kpn odido internet",
      "internet contract netherlands",
      "TV internet bundle netherlands",
      "best internet netherlands expats",
      "cable internet netherlands",
      "compare internet netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Internet providers",
    pageTitle: "Internet Providers in the Netherlands for Expats",
    subtitle:
      "Orient on Dutch fixed broadband — fibre (glasvezel), cable and DSL — including contracts, installation windows, address availability and TV/internet bundles. This directory owns ISP comparison discovery, not the utilities how-to setup guide or mobile SIM shopping.",
    primaryCta: { label: "Browse ISP Directory", href: "#directory" },
    secondaryCta: { label: "Not the same as…", href: "#differentiate" },
    chips: ["Fibre / cable / DSL", "Contracts & install", "TV bundles", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-internet-providers-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple comparing Dutch broadband contracts on a laptop at a bright canal-side apartment desk, fibre router box and speed-check notes visible.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic introducing the Dutch fixed broadband market for expats: fibre, cable, DSL and what to check before choosing an ISP.",
      "Start with technology available at your address — then compare contracts, install timing and bundles."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating internet providers, phone providers, mobile connectivity and the utilities internet-and-mobile how-to guide.",
      "Pick the right page first: this directory owns fixed ISP discovery; mobile SIMs and setup how-to live elsewhere."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch internet providers for expats.",
      "Use this snapshot before signing: address check, contract length, install fee and notice period matter."
    ),
    technology: visual(
      "technology",
      "Infographic comparing fibre (glasvezel), cable and DSL broadband technologies in the Netherlands.",
      "Technology availability is address-specific — national brand names do not guarantee the same product everywhere."
    ),
    contracts: visual(
      "contracts",
      "Infographic of Dutch broadband contract types: fixed-term, rolling, notice periods and early-exit orientation.",
      "Read minimum term, notice and installation fees before you click buy — promotions often hide the real timeline."
    ),
    availability: visual(
      "availability",
      "Infographic showing address availability checks, technician appointments and modem/router handoff for Dutch ISP installs.",
      "Always run the provider’s postcode/huisnummer check and ask who must be home for installation."
    ),
    bundles: visual(
      "bundles",
      "Infographic explaining TV + internet + landline bundle orientation for Dutch households.",
      "Bundles can simplify billing — still compare whether you need TV channels or internet-only."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing national ISPs, cable operators, regional fibre, challengers, comparison sites and landlord-included setups.",
      "Match the provider model to your building and stay length — not every brand serves every street."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic of expat broadband scenarios: short lease, fibre-ready flat, landlord Wi-Fi and remote-work households.",
      "Your best path depends on stay length, building wiring and whether internet is already included."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic of common expat mistakes with Dutch internet contracts: skipping address checks, ignoring notice periods and confusing mobile with home broadband.",
      "Avoid signing on marketing speed alone — verify address, term and install logistics first."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral internet-provider directory workflow: address check, shortlist, compare terms and confirm install.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparison: visual(
      "comparison",
      "Infographic comparison matrix for Dutch ISP models: technology, coverage style, English support and expat fit.",
      "Compare fit and contract clarity before comparing advertised Mbps."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist before choosing a Dutch ISP: address, term, install fee, equipment, TV need and cancellation path.",
      "A short checklist prevents most first-apartment broadband regrets."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch internet providers before signing.",
      "Good questions reveal real speeds at your address, install windows, equipment ownership and exit terms."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common internet-provider FAQ topics: fibre vs cable, bundles, mobile overlap and ACM orientation.",
      "FAQ answers should help you pick the next verification step — not replace provider contract reading."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist Dutch internet providers: check address, compare terms, confirm install and keep mobile separate.",
      "Turn ISP discovery into a structured shortlist before you sign anything."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for Dutch telecom orientation: ACM consumer pages and government consumer topics.",
      "Verify consumer rights and complaint paths with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around home connectivity: internet providers, energy providers, phone providers, mobile connectivity and utilities guides.",
      "Fixed broadband is one piece of the wider utilities and connectivity ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing ISPs: utilities how-to, energy providers, phone providers and mobile connectivity.",
      "Continue from ISP discovery into setup how-to, energy contracts and mobile plans."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting internet-provider research to energy, phone, mobile connectivity, utilities hub and Dutch cities.",
      "Broadband shortlists connect naturally into the rest of household setup."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#technology", label: "Technology" },
    { href: "#contracts", label: "Contracts" },
    { href: "#availability", label: "Availability" },
    { href: "#bundles", label: "Bundles" },
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
    heading: "Why Expats Compare Dutch Internet Providers Carefully",
    paragraphs: [
      "In the Netherlands, fixed home internet usually means fibre (glasvezel), cable or older copper/DSL — and what you can actually order depends on your exact postcode and huisnummer, not on national advertising alone.",
      "This page is a services directory for broadband ISP discovery: contract types, installation, TV/internet bundles and soft comparison approaches. It does not rebuild the utilities how-to guide for plugging in a modem, and it does not own mobile SIM or phone-plan shopping.",
      "Inclusion here is informational soft discovery, not a ranking of KPN, Ziggo, Odido or any other brand. Confirm address availability, speeds, fees and cancellation terms directly with providers before you sign.",
    ],
    links: [
      { label: "Internet & mobile how-to", href: INTERNET_AND_MOBILE_UTILITIES_PATH },
      { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH },
      { label: "Energy providers", href: ENERGY_PROVIDERS_PATH },
      { label: "Phone providers", href: PHONE_PROVIDERS_PATH },
      { label: "Utilities hub", href: UTILITIES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Internet providers (this page)",
      body: "Fixed fibre, cable and DSL ISP comparison directory — contracts, install, address checks and TV bundles.",
      href: INTERNET_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Internet & mobile how-to",
      body: "Utilities guide for setting up connectivity after you move — orientation on the practical setup journey, not ISP rankings.",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live" as const,
    },
    {
      title: "Phone providers",
      body: "Mobile and home-phone plan directory — SIMs, prepaid and postpaid. Fixed broadband stays here.",
      href: PHONE_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Mobile & connectivity",
      body: "Services category page for mobile connectivity orientation — adjacent, not a duplicate ISP directory.",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Tech first", value: "Address check", note: "Fibre, cable or DSL availability is street-specific." },
    { label: "Contracts", value: "Term + notice", note: "Fixed-term deals often look cheaper; exit rules matter." },
    { label: "Install", value: "Technician window", note: "Someone may need to be home; fees can apply." },
    { label: "Bundles", value: "TV optional", note: "Internet-only can be enough if you stream." },
    { label: "Mobile", value: "Separate page", note: "SIMs and phone plans belong on Phone providers." },
    { label: "Guarantee", value: "None", note: "No directory ranks ISPs or guarantees speeds." },
  ],
  technologyCards: [
    {
      title: "Fibre (glasvezel)",
      body: "Often the highest stable speeds where rolled out. Different networks and ISPs may serve the same city — always check your address.",
    },
    {
      title: "Cable broadband",
      body: "Widespread in many urban areas via cable networks. Speeds and product names change by street and package.",
    },
    {
      title: "DSL / copper",
      body: "Still relevant in some locations where fibre or cable is limited. Expect more distance-sensitive performance.",
    },
    {
      title: "Shared / landlord Wi-Fi",
      body: "Student housing and some rentals include internet. Confirm who holds the contract and what happens when you leave.",
    },
    {
      title: "Business / SOHO lines",
      body: "Home-office packages differ from consumer plans — SLAs, static IP and support hours can matter for remote work.",
    },
    {
      title: "Mesh & own router",
      body: "Provider modem vs bring-your-own router policies vary — ask before you buy extra hardware.",
    },
  ],
  contractCards: [
    {
      title: "Fixed-term promotions",
      body: "Discounted monthly price for 12–24 months is common. Note the price after the promo and the notice rules.",
    },
    {
      title: "Rolling / indefinite",
      body: "Often clearer exit timing after a short initial period — still read the notice requirement carefully.",
    },
    {
      title: "Installation & activation fees",
      body: "One-off costs for technician visits, wall sockets or activation can change the true first-year price.",
    },
    {
      title: "Equipment deposit / rental",
      body: "Modems and TV boxes may be rented or deposited — return them to avoid surprise charges when you move.",
    },
    {
      title: "Moving / address change",
      body: "Ask whether your contract can move with you or must be cancelled — technology may differ at the new address.",
    },
    {
      title: "Cooling-off & switching",
      body: "Consumer switching rights and cooling-off rules can apply — use ACM consumer orientation for current guidance.",
    },
  ],
  availabilitySteps: [
    {
      item: "Run postcode + huisnummer checks",
      why: "National brands advertise products that may not be orderable on your street.",
    },
    {
      item: "Confirm technology and max package",
      why: "Marketing Mbps is not the same as the product available at your building.",
    },
    {
      item: "Ask about install appointment lead time",
      why: "New fibre sockets or busy weeks can delay activation after you move in.",
    },
    {
      item: "Clarify who must be present",
      why: "Technicians often need access to the meter cupboard or living room wall plate.",
    },
    {
      item: "Check building rules",
      why: "Apartments and VvE rules can limit drilling or external equipment.",
    },
    {
      item: "Plan temporary mobile fallback",
      why: "Keep a mobile data plan ready for the gap between keys and fixed-line activation.",
    },
  ],
  bundleCards: [
    {
      title: "Internet-only",
      body: "Best when you stream and do not need traditional TV channels — usually the simplest expat default.",
    },
    {
      title: "Internet + TV",
      body: "Useful if you want local channels, sports packages or easier remote for household guests.",
    },
    {
      title: "Triple-play (TV + internet + landline)",
      body: "Still offered; many expats skip the landline unless they need a fixed number.",
    },
    {
      title: "Mobile add-ons from the same brand",
      body: "Some ISPs discount mobile when bundled — evaluate on Phone providers / Mobile connectivity, not as a substitute for home fibre.",
    },
  ],
  providerTypeComparison: [
    {
      type: "National fibre / copper ISP",
      scope: "Large consumer brands offering fibre and sometimes copper products across many cities.",
      usefulWhen: "You want a widely supported consumer brand and English self-service is available.",
      questions: ["Is fibre available at my address?", "What is the promo vs renewal price?", "English support channel?"],
    },
    {
      type: "Cable broadband operator",
      scope: "Operators on cable networks with internet and frequent TV packages.",
      usefulWhen: "Your building is cable-served and you want strong TV + internet options.",
      questions: ["Cable product at this huisnummer?", "TV box required?", "Move address process?"],
    },
    {
      type: "Regional fibre network",
      scope: "Local or regional glasvezel networks with one or more retail ISPs selling on top.",
      usefulWhen: "You live outside the biggest Randstad cable footprints.",
      questions: ["Which retailers sell on this network?", "Open network or exclusive?", "Install lead time?"],
    },
    {
      type: "Challenger / value ISP",
      scope: "Smaller or value-focused retailers competing on price or simplicity.",
      usefulWhen: "You want internet-only and are comfortable with leaner support channels.",
      questions: ["Real support hours?", "Own modem allowed?", "Contract exit clarity?"],
    },
    {
      type: "Comparison platform",
      scope: "Self-serve deal screens for internet (and often energy) — orientation, not personal advice.",
      usefulWhen: "You want to shortlist price and term before opening provider carts.",
      questions: ["Which products are compared?", "Are all networks included?", "How current are promos?"],
    },
    {
      type: "Landlord-included connectivity",
      scope: "Internet is part of rent or student housing — you may not choose the ISP.",
      usefulWhen: "Short stays or campus-style housing where switching is restricted.",
      questions: ["Who holds the contract?", "Guest network speed?", "What if service fails?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "New arrival, 12-month lease",
      whatCanMatter: "Install timing vs move-in; contract that can end or move later.",
      exampleQuestion: "Can I activate within two weeks of receiving keys at this address?",
      betterPath: "Address check → shortlist 2–3 ISPs → keep mobile data as bridge.",
    },
    {
      profile: "Fibre-ready apartment",
      whatCanMatter: "Which retailers sell on the building’s fibre; promo vs long-term price.",
      exampleQuestion: "Which ISPs can deliver glasvezel to this huisnummer this month?",
      betterPath: "Fibre retailers + comparison site for term clarity.",
    },
    {
      profile: "Landlord Wi-Fi included",
      whatCanMatter: "Whether you can or should run your own contract; speed for remote work.",
      exampleQuestion: "Is internet included, and am I allowed a separate ISP socket?",
      betterPath: "Confirm lease rules first — then ISP shopping only if needed.",
    },
    {
      profile: "Remote-work household",
      whatCanMatter: "Upload stability, mesh coverage, backup mobile hotspot.",
      exampleQuestion: "What upload package is available and is own router allowed?",
      betterPath: "Technology check + business/SOHO options if consumer plans are thin.",
    },
  ],
  mistakeCards: [
    {
      title: "Skipping the address check",
      body: "National ads do not equal orderable products on your street — always verify postcode and huisnummer.",
    },
    {
      title: "Ignoring notice periods",
      body: "Cheap first-year promos can become expensive if you leave mid-contract or forget equipment returns.",
    },
    {
      title: "Treating mobile as home internet",
      body: "A SIM hotspot can bridge a week — it is not a substitute for fixed broadband for most households.",
    },
    {
      title: "Buying TV you will not use",
      body: "Streaming-only households often overpay for channel packs — compare internet-only first.",
    },
    {
      title: "Mixing this page with the how-to guide",
      body: "Setup steps (modem, Wi-Fi, troubleshooting) live on the utilities internet-and-mobile guide.",
    },
    {
      title: "Assuming English equals clear terms",
      body: "Marketing English may not cover cancellation or install fees — read the Dutch contract summary carefully.",
    },
    {
      title: "Forgetting building access rules",
      body: "Technicians need entry; shared cupboards and VvE rules can delay installs.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Verify availability and terms yourself.",
    },
  ],
  providers: [
    {
      name: "National fibre & copper ISPs",
      slug: "national-fibre-copper-isps",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Large consumer brands selling fibre and copper broadband across many municipalities — product availability remains address-specific.",
      expatFocus:
        "Useful starting point when you want a widely known brand and self-service portals; still run the address checker first.",
      languages: ["Dutch", "English availability varies by brand"],
      remoteSupport: true,
      inPersonAvailability: "Technician visits for install; shops vary by brand.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Consumer broadband contract",
      providerType: "National fibre / copper ISP",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote:
        "This row describes a provider type, not a ranked endorsement of any single brand. Confirm live products on the provider site.",
    },
    {
      name: "Cable broadband operators",
      slug: "cable-broadband-operators",
      city: "Urban & suburban",
      region: "Netherlands",
      summary:
        "Operators delivering internet (and often TV) over cable networks where the building is connected.",
      expatFocus:
        "Strong fit when your rental is already cable-served and you want combined TV packages.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Install technicians; retail presence varies.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Cable internet / TV packages",
      providerType: "Cable broadband operator",
      citiesServed: ["Randstad cities", "Many other municipalities"],
      featured: true,
      verificationNote:
        "Cable footprint is not universal — use the operator’s address tool before assuming availability.",
    },
    {
      name: "Regional fibre networks & retailers",
      slug: "regional-fibre-networks",
      city: "Regional NL",
      region: "Netherlands",
      summary:
        "Local glasvezel networks where retail ISPs sell services on regional infrastructure.",
      expatFocus:
        "Common outside the densest urban cores — check which retailers can actually deliver to your street.",
      languages: ["Dutch", "English varies by retailer"],
      remoteSupport: true,
      inPersonAvailability: "Local technician schedules.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Regional fibre retail",
      providerType: "Regional fibre network",
      citiesServed: ["Province and regional towns"],
      featured: true,
      verificationNote:
        "Open vs exclusive networks change your shortlist — ask which retailers serve the network.",
    },
    {
      name: "Challenger & value ISPs",
      slug: "challenger-value-isps",
      city: "Online / national",
      region: "Netherlands",
      summary:
        "Value-focused or leaner retailers competing on price and simpler internet-only packages.",
      expatFocus:
        "Useful when you want lower monthly cost and can handle leaner English support.",
      languages: ["Dutch", "English limited on some brands"],
      remoteSupport: true,
      inPersonAvailability: "Mostly remote; install via network partners.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Value broadband retail",
      providerType: "Challenger / value ISP",
      citiesServed: ["Where host network allows"],
      featured: false,
      verificationNote:
        "Lower price can mean fewer support channels — verify exit terms and equipment policy.",
    },
    {
      name: "Pricewise (comparison platform)",
      slug: "pricewise-comparison-platform",
      city: "Online",
      region: "Netherlands",
      summary:
        "Well-known Dutch comparison site covering internet alongside energy and insurance — self-serve deal screening.",
      expatFocus:
        "Helpful to shortlist promotions and contract lengths before opening an ISP cart.",
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
      name: "Landlord-included / housing Wi-Fi",
      slug: "landlord-included-wifi",
      city: "Rentals & student housing",
      region: "Netherlands",
      summary:
        "Situations where internet is bundled into rent or managed by the housing provider.",
      expatFocus:
        "Common for short stays and student housing — clarify speed, guest access and fault reporting.",
      languages: ["Depends on landlord / housing corp"],
      remoteSupport: false,
      inPersonAvailability: "Building management handles access.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Included connectivity",
      providerType: "Landlord-included connectivity",
      citiesServed: ["University cities", "Managed rentals"],
      featured: false,
      verificationNote:
        "If internet is included, ask before ordering a second contract that you cannot cancel easily.",
    },
    {
      name: "Business / SOHO fibre options",
      slug: "business-soho-fibre",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Small-business and home-office packages with different support, IP and uptime expectations than basic consumer plans.",
      expatFocus:
        "Relevant for consultants and remote teams who need clearer upload or support commitments.",
      languages: ["Dutch", "English varies"],
      remoteSupport: true,
      inPersonAvailability: "Business install scheduling.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Business broadband",
      providerType: "Business / SOHO fibre",
      citiesServed: ["Business districts", "Where fibre allows"],
      featured: false,
      verificationNote:
        "Business terms differ from consumer cooling-off norms — read the contract type carefully.",
    },
    {
      name: "ACM consumer telecom orientation",
      slug: "acm-consumer-telecom",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Netherlands Authority for Consumers and Markets consumer pages on telecom, internet and television rights.",
      expatFocus:
        "Best verification starting point for switching, complaints and consumer-rights orientation.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online consumer guidance.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Regulatory / consumer orientation",
      providerType: "ACM consumer orientation",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "ACM pages are consumer orientation — not a product catalogue or ranking of ISPs.",
    },
  ] satisfies InternetProviderEntry[],
  comparisonTable: [
    {
      provider: "National fibre / copper ISPs",
      citiesServed: "Many municipalities",
      expatFocus: "Brand familiarity",
      languages: "Dutch, English varies",
      onlineOrdering: "Usually",
      providerType: "National fibre / copper ISP",
    },
    {
      provider: "Cable broadband operators",
      citiesServed: "Cable footprint",
      expatFocus: "TV + internet",
      languages: "Dutch, English varies",
      onlineOrdering: "Usually",
      providerType: "Cable broadband operator",
    },
    {
      provider: "Regional fibre networks",
      citiesServed: "Regional towns",
      expatFocus: "Local glasvezel",
      languages: "Dutch first",
      onlineOrdering: "Varies by retailer",
      providerType: "Regional fibre network",
    },
    {
      provider: "Challenger / value ISPs",
      citiesServed: "Where network allows",
      expatFocus: "Price simplicity",
      languages: "Dutch first",
      onlineOrdering: "Often",
      providerType: "Challenger / value ISP",
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
      provider: "Landlord-included Wi-Fi",
      citiesServed: "Managed housing",
      expatFocus: "Short stays",
      languages: "Depends on landlord",
      onlineOrdering: "N/A",
      providerType: "Landlord-included connectivity",
    },
    {
      provider: "Business / SOHO fibre",
      citiesServed: "Business areas",
      expatFocus: "Remote-work needs",
      languages: "Dutch, English varies",
      onlineOrdering: "Often",
      providerType: "Business / SOHO fibre",
    },
    {
      provider: "ACM consumer orientation",
      citiesServed: "Netherlands-wide",
      expatFocus: "Rights & switching",
      languages: "Dutch, English site",
      onlineOrdering: "Guidance only",
      providerType: "ACM consumer orientation",
    },
  ],
  preSignChecklist: [
    {
      item: "Address availability confirmed",
      why: "Avoid ordering a product that cannot be delivered to your huisnummer.",
    },
    {
      item: "Contract term & notice understood",
      why: "Promo price and exit timing drive the true cost of your stay.",
    },
    {
      item: "Install fee & appointment window",
      why: "One-off fees and lead times can delay remote-work readiness.",
    },
    {
      item: "Equipment ownership / return rules",
      why: "Lost TV boxes and modems create surprise invoices when you leave.",
    },
    {
      item: "TV needed vs internet-only",
      why: "Skip channel packs you will not use.",
    },
    {
      item: "Mobile bridge plan ready",
      why: "Keep Phone providers / Mobile connectivity as a temporary fallback.",
    },
    {
      item: "Building / VvE access clarified",
      why: "Technicians need legal access to cupboards and wall plates.",
    },
    {
      item: "Cancellation path written down",
      why: "Know how to cancel and return gear before you need to move again.",
    },
  ],
  questionsToAsk: [
    "Is fibre, cable or DSL available at this exact postcode and huisnummer — and which packages?",
    "What is the monthly price during the promo and after the promo ends?",
    "What are the installation or activation fees, and how soon can a technician come?",
    "Do I need to be home, and what access does the technician need in the building?",
    "Is the modem/router included, rented or deposit-based — and can I use my own router?",
    "Do I need a TV package, or is internet-only enough for streaming?",
    "What happens if I move address within the contract period?",
    "How do I cancel, and what is the notice period and equipment return process?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Internet Providers?",
    body: "Use the directory to compare technology fit, contract clarity, install logistics and whether you need TV. Then verify address availability on provider tools or a comparison site — and keep mobile SIMs on Phone providers while setup how-to stays on the utilities guide.",
    primaryCta: { label: "Compare ISPs", href: "#directory" },
    secondaryCta: { label: "Open Internet & Mobile How-to", href: INTERNET_AND_MOBILE_UTILITIES_PATH },
  },
  faqs: [
    {
      q: "What internet technologies are common in the Netherlands?",
      a: "Most households use fibre (glasvezel), cable or older copper/DSL. What you can order depends on your exact address. Always run a postcode and huisnummer check before comparing brand advertising.",
    },
    {
      q: "How is this page different from the Internet & mobile utilities guide?",
      a: "This page is the ISP comparison directory (contracts, install, bundles, soft discovery). The utilities internet-and-mobile guide owns practical setup how-to after you choose a provider. Use both — they do not replace each other.",
    },
    {
      q: "Should I buy a TV + internet bundle?",
      a: "Only if you will use traditional channels or sports packages. Many expats choose internet-only and stream. Compare the incremental TV cost against what you will actually watch.",
    },
    {
      q: "Can I use mobile data instead of home internet?",
      a: "A SIM hotspot is a useful bridge during install delays, but it is rarely a long-term substitute for fixed broadband for households and remote work. Phone providers and Mobile & connectivity cover SIM shopping.",
    },
    {
      q: "How long do contracts usually last?",
      a: "Promotional fixed terms (often around a year or two) and rolling contracts both appear. Read notice periods, renewal prices and early-exit rules carefully — this page does not give personal contract advice.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends an ISP?",
      a: "No. Listings are informational soft discovery of provider types and comparison approaches. Always verify availability, fees, languages and fit directly with the provider.",
    },
    {
      q: "Where do energy and phone directories fit?",
      a: "Energy providers and Phone providers are sibling service directories in the Connectivity cluster. Energy & water and the utilities hub cover related household setup topics.",
    },
    {
      q: "Where can I check consumer rights for telecom?",
      a: "Start with ACM consumer pages on telecom, internet and television. They provide switching and complaint orientation — not product rankings.",
    },
  ],
  officialSources: [
    {
      label: "ACM — Telecom, internet and television",
      href: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      description:
        "Netherlands Authority for Consumers and Markets — consumer orientation on telecom, internet and TV.",
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
      label: "Rijksoverheid — Consumenten",
      href: "https://www.rijksoverheid.nl/onderwerpen/consumenten",
      description: "Dutch government consumer topic orientation (Dutch-language).",
    },
    {
      label: "Pricewise (comparison orientation)",
      href: "https://www.pricewise.nl/",
      description: "Public comparison platform often used to screen Dutch internet deals — not a ranking endorsement.",
    },
  ],
  relatedGuides: [
    {
      label: "Energy providers",
      href: ENERGY_PROVIDERS_PATH,
      status: "live",
      description: "Sibling directory for electricity and gas contract discovery.",
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
      label: "Internet & mobile how-to",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live",
      description: "Utilities guide for setting up connectivity after you move.",
    },
    {
      label: "Energy & water",
      href: ENERGY_AND_WATER_PATH,
      status: "live",
      description: "Utilities orientation for energy and water contracts.",
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
      description: "Housing search timing often drives when you can order internet.",
    },
  ] satisfies InternetProviderLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Energy providers", href: ENERGY_PROVIDERS_PATH, status: "live", description: "Electricity and gas provider directory." },
    { label: "Phone providers", href: PHONE_PROVIDERS_PATH, status: "live", description: "Mobile and phone-plan directory." },
    { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH, status: "live", description: "SIM and connectivity category page." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic move support before activation day." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental search that affects install timing." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Household protection beside utilities setup." },
  ] satisfies InternetProviderLink[],
  exploreNextCards: [
    {
      label: "Energy providers",
      href: ENERGY_PROVIDERS_PATH,
      status: "live",
      description: "Compare energy contracts next in the Connectivity cluster.",
    },
    {
      label: "Phone providers",
      href: PHONE_PROVIDERS_PATH,
      status: "live",
      description: "Add a mobile plan for the install gap and daily use.",
    },
    {
      label: "Mobile & connectivity",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live",
      description: "Orient on SIMs, data and local numbers.",
    },
    {
      label: "Internet & mobile how-to",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live",
      description: "Follow the practical setup steps after you choose an ISP.",
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
  ] satisfies InternetProviderLink[],
};
