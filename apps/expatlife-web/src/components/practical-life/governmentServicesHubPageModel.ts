export const GOVERNMENT_SERVICES_HUB_PATH = "/netherlands/government-services/" as const;

export const GOVERNMENT_PORTALS_NETHERLANDS_PATH =
  "/netherlands/practical-life/government-portals-netherlands/" as const;
export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/" as const;
export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands/" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export type HubGuideLink = {
  label: string;
  href: string;
  description: string;
  status: "live" | "comingSoon";
};

export const governmentServicesHubPage = {
  slug: "government-services",
  path: GOVERNMENT_SERVICES_HUB_PATH,
  publish: true,
  publishDate: "2026-10-29",
  seo: {
    title: "Government Services in the Netherlands | Expat Hub",
    description:
      "Hub for Dutch government portals, DigiD, BSN, municipality services, local taxes and digital public services for expats in the Netherlands.",
    keywords: [
      "government services netherlands",
      "dutch government portals",
      "expat government netherlands",
      "digital government netherlands",
      "digid netherlands",
      "gemeente services",
    ],
  },
  hero: {
    eyebrow: "Practical life hub",
    pageTitle: "Government Services in the Netherlands",
    subtitle:
      "Central hub for Dutch government portals, digital identity, municipality services and official online admin for expats and newcomers.",
    primaryCta: { label: "Government portals guide", href: GOVERNMENT_PORTALS_NETHERLANDS_PATH },
    secondaryCta: { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH },
    image: {
      src: "/images/heroes/netherlands-government-portals-hero-v2.png",
      alt:
        "Photorealistic editorial photo of an international professional at a bright Dutch apartment desk with laptop and smartphone open to a clean government services dashboard, canal houses and bicycles visible through the window — calm trustworthy digital government mood without paperwork piles or fear imagery.",
    },
  },
  heroChips: ["DigiD & portals", "Municipality services", "Official sources", "Expat orientation"],
  introParagraphs: [
    "Dutch public life runs through many official websites — taxes, municipalities, immigration, healthcare administration and business registration each have their own portal, often linked by DigiD.",
    "This hub collects the cornerstone guides that help you navigate the digital government ecosystem without overwhelm. Start with the government portals guide, then dive into DigiD, gemeente services and registration topics.",
  ],
  featuredGuides: [
    {
      label: "Government Portals in the Netherlands",
      href: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
      description: "Complete map of Dutch government websites, DigiD, MijnOverheid and agency portals.",
      status: "live",
    },
    {
      label: "DigiD in the Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      description: "Digital identity setup, security and portal login orientation.",
      status: "live",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      description: "Gemeente registration, BSN, local taxes, permits and digital services.",
      status: "live",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      description: "Address registration at the gemeente — prerequisite for BSN and DigiD.",
      status: "live",
    },
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      description: "Identity number routes, documents and timing for newcomers.",
      status: "comingSoon",
    },
    {
      label: "Local Taxes Netherlands",
      href: LOCAL_TAXES_NETHERLANDS_PATH,
      description: "Gemeente tax letters, charges and payment orientation.",
      status: "comingSoon",
    },
    {
      label: "Government Benefits Netherlands",
      href: "/netherlands/practical-life/government-benefits-netherlands/",
      description: "Benefits and allowance portals at a high level.",
      status: "comingSoon",
    },
    {
      label: "Dutch Government Communication",
      href: "/netherlands/practical-life/dutch-government-communication/",
      description: "MijnOverheid, official letters and digital correspondence.",
      status: "comingSoon",
    },
  ] satisfies HubGuideLink[],
} as const;

export type GovernmentServicesHubPage = typeof governmentServicesHubPage;
