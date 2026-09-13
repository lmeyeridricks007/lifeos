export const GOVERNMENT_SERVICES_HUB_PATH = "/netherlands/government-services" as const;

export const GOVERNMENT_PORTALS_NETHERLANDS_PATH =
  "/netherlands/practical-life/government-portals-netherlands" as const;
export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands" as const;
export const DIGID_AWARENESS_PATH = "/netherlands/digid-awareness" as const;
export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands" as const;
export const MUNICIPALITY_REGISTRATION_PATH = "/netherlands/municipality-registration-netherlands" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands" as const;
/** Live BSN guide — preferred over staged /practical-life/bsn-netherlands. */
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration" as const;
/** Staged placeholder — do not emit public hrefs. */
export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands" as const;
export const PROPERTY_TAX_PATH = "/netherlands/taxes/property-tax-netherlands" as const;
export const HEALTHCARE_ALLOWANCE_PATH = "/netherlands/taxes/healthcare-allowance-netherlands" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands" as const;

export type HubGuideLink = {
  label: string;
  href: string;
  description: string;
  status: "live" | "comingSoon";
};

/**
 * Arrival → government-services journey (live destinations only).
 * Sequence: address → municipality/BRP → BSN → DigiD → portals/taxes/healthcare.
 * Staged URLs (bsn-netherlands, local-taxes, government-benefits, dutch-government-communication)
 * are not linked — use live better destinations instead.
 */
export const governmentServicesHubPage = {
  slug: "government-services",
  path: GOVERNMENT_SERVICES_HUB_PATH,
  publish: true,
  publishDate: "2026-10-29",
  seo: {
    title: "Government Services in the Netherlands | Expat Hub",
    description:
      "Arrival path for Dutch government admin: register your address, get a BSN, activate DigiD, then use portals, taxes and healthcare services — with live guides only.",
    keywords: [
      "government services netherlands",
      "dutch government portals",
      "expat government netherlands",
      "digital government netherlands",
      "digid netherlands",
      "gemeente services",
      "bsn registration",
    ],
  },
  hero: {
    eyebrow: "Practical life hub",
    pageTitle: "Government Services in the Netherlands",
    subtitle:
      "Follow the arrival sequence — address and municipality registration, BSN, DigiD, then portals, taxes and healthcare — with live guides linked in order.",
    primaryCta: { label: "Start with address registration", href: REGISTERING_ADDRESS_PATH },
    secondaryCta: { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH },
    image: {
      src: "/images/heroes/netherlands-government-portals-hero-v2.png",
      alt:
        "Photorealistic editorial photo of an international professional at a bright Dutch apartment desk with laptop and smartphone open to a clean government services dashboard, canal houses and bicycles visible through the window — calm trustworthy digital government mood without paperwork piles or fear imagery.",
    },
  },
  heroChips: ["Address → BSN → DigiD", "Municipality & BRP", "Portals & taxes", "Official sources"],
  introParagraphs: [
    "Dutch public life runs through DigiD-linked portals — but most newcomers cannot jump straight to login. Register your address with the gemeente first, receive your BSN, then activate DigiD.",
    "This hub orders the live cornerstone guides in that journey. Staged stubs are not linked. For DigiD depth use the DigiD cornerstone; for first-week planning use DigiD awareness from the Move section.",
  ],
  featuredGuides: [
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      description: "Address registration mechanics — appointments, documents, temporary housing and DigiD post delivery.",
      status: "live",
    },
    {
      label: "Municipality Registration (BRP)",
      href: MUNICIPALITY_REGISTRATION_PATH,
      description: "BRP registration obligation, who must register, deadlines and how BSN is issued at the gemeente.",
      status: "live",
    },
    {
      label: "BSN Registration",
      href: BSN_REGISTRATION_PATH,
      description: "Citizen service number routes, documents, city appointments and what to arrange next.",
      status: "live",
    },
    {
      label: "DigiD in the Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      description: "Complete DigiD guide — eligibility, security, portal login and common mistakes.",
      status: "live",
    },
    {
      label: "Government Portals",
      href: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
      description: "Map of Dutch government websites, DigiD, MijnOverheid and agency portals.",
      status: "live",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      description: "Broader gemeente services — local admin, permits and digital touchpoints after registration.",
      status: "live",
    },
    {
      label: "Healthcare Allowance",
      href: HEALTHCARE_ALLOWANCE_PATH,
      description: "Benefits orientation — zorgtoeslag eligibility and how DigiD/BSN unlock allowance portals.",
      status: "live",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      description: "Mandatory basic insurance setup after BSN — paired with DigiD-linked insurer portals.",
      status: "live",
    },
    {
      label: "Property Tax (WOZ / local charges)",
      href: PROPERTY_TAX_PATH,
      description: "Live orientation for gemeente-related property tax letters while a local-taxes guide is staged.",
      status: "live",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      description: "Expat tax guides, Belastingdienst context and DigiD-linked filing orientation.",
      status: "live",
    },
  ] satisfies HubGuideLink[],
} as const;

export type GovernmentServicesHubPage = typeof governmentServicesHubPage;
