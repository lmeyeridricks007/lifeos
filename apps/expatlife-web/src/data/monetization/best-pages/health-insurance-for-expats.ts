import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

const LOGOS = "/images/affiliates/logos";

export const healthInsuranceForExpatsPage: BestProvidersPageContent = {
  slug: "health-insurance-for-expats",
  path: "/netherlands/best/health-insurance-for-expats/",
  seo: {
    title: "Dutch basic health insurance for expats | Comparison",
    description:
      "Compare Dutch basic insurers on expat-relevant criteria: networks, English materials, onboarding, and typical premium bands—plus what to verify officially.",
    keywords: [
      "best health insurance netherlands expat",
      "dutch basic insurance comparison expat",
      "zorgverzekering expat",
      "basisverzekering compare",
    ],
  },
  hero: {
    eyebrow: "Curated comparison",
    title: "Basic health insurance options expats compare",
    subtitle:
      "Focused on the mandatory basic package (basisverzekering) and what newcomers usually compare first: premium bands, network type, and how easy information is to parse in English.",
    image: {
      src: "/images/heroes/health-insurance-netherlands.png",
      alt: "Expat reviewing Dutch health insurance options",
      priority: true,
    },
  },
  methodology: {
    title: "How we evaluate insurers",
    intro:
      "Basic cover is legally standardised; insurers mainly differ on premium, provider networks (natura vs restitutie), service, and supplementary add-ons. We highlight what typically matters in the first weeks after arrival.",
    howWeEvaluate: [
      "Clarity for newcomers: English pages, app quality, and sign-up flow (indicative).",
      "Network fit: whether policies steer you to contracted providers or allow broader choice.",
      "Premium positioning: indicative ranges only—use official comparison tools before you buy.",
      "Typical expat scenarios: employed movers, families, and students may not have identical obligations—confirm with Government.nl and the Belastingdienst.",
    ],
    goodFitTitle: "What makes a good fit",
    goodFit: [
      "You understand eigen risico and how it affects your first bills.",
      "You match natura vs restitutie to how you want to access GPs and hospitals.",
      "You set calendar reminders for the annual switch window if you want to change insurer.",
    ],
  },
  shortlist: {
    title: "Quick shortlist",
    subtitle: "Large Dutch insurers expats often put on a first comparison spreadsheet.",
  },
  comparison: {
    title: "Comparison at a glance",
    subtitle: "Premiums move every year—treat numbers as orientation, not quotes.",
  },
  detailedCardsTitle: "Insurer notes",
  faq: [
    {
      q: "Is the basic package the same at every insurer?",
      a: "The legally defined basic cover is standardised. Premium, provider contracts, digital service, and supplementary options differ. Always read the policy documents for the year you are buying.",
    },
    {
      q: "When do I need Dutch insurance?",
      a: "Many residents must arrange Dutch basic insurance within four months of registration or obligation—rules depend on your situation. Use official Government.nl guidance and confirm your personal deadline.",
    },
    {
      q: "Should I pick the cheapest premium?",
      a: "Not automatically. Check network rules (natura vs restitutie), excess (eigen risico), and whether you need specific providers or therapies. Cheapest can be fine—but only if the network matches how you access care.",
    },
    {
      q: "Do you rank insurers for money?",
      a: "No paid ranking. Future partner links, if any, will be labelled. Editorial picks reflect typical comparison behaviour for internationals, not commissions.",
    },
  ],
  disclosure:
    "Some links may be partner links. This page does not replace official insurance or tax advice. Confirm eligibility and premiums with insurers and comparison tools.",
  affiliateNote: "Tracked partner programmes may be added later; until then links are direct to insurers or neutral resources.",
  relatedLinks: [
    { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    { label: "Services hub: health insurance", href: "/netherlands/services/health-insurance/" },
    { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days/" },
  ],
  rows: [
    {
      id: "zilveren-kruis",
      name: "Zilveren Kruis",
      logo: { src: `${LOGOS}/zilveren-kruis.svg`, alt: "Zilveren Kruis" },
      bestFor: "Broad network + familiar brand",
      englishSupport: "Check site; mixed",
      onboardingEase: "Online sign-up",
      priceHint: "~€145–165/mo indicative basic",
      notes: "Large Achmea group insurer",
      ctaLabel: "Visit Zilveren Kruis",
      ctaHref: "https://www.zilverenkruis.nl/",
      detailDescription:
        "Widely used; compare natura vs restitutie products for your preferred GP and hospital access pattern, and check supplementary tiers if you need extras.",
      tags: ["Large network", "Basic + extras"],
    },
    {
      id: "cz",
      name: "CZ",
      logo: { src: `${LOGOS}/cz.svg`, alt: "CZ" },
      bestFor: "Straightforward major insurer",
      englishSupport: "Varies; check site",
      onboardingEase: "Digital-first",
      priceHint: "~€142–160/mo indicative",
      notes: "Popular with Dutch households",
      ctaLabel: "Visit CZ",
      ctaHref: "https://www.cz.nl/",
      detailDescription:
        "CZ is a default comparison point for many movers. Validate English documentation for the exact product you select and whether your care providers are contracted.",
      tags: ["National", "Basic package"],
    },
    {
      id: "menzis",
      name: "Menzis",
      logo: { src: `${LOGOS}/menzis.svg`, alt: "Menzis" },
      bestFor: "Package flexibility",
      englishSupport: "Check site",
      onboardingEase: "Online",
      priceHint: "~€138–158/mo indicative",
      notes: "Compare dental/physio add-ons",
      ctaLabel: "Visit Menzis",
      ctaHref: "https://www.menzis.nl/",
      detailDescription:
        "Useful when you want to tune supplementary modules after you understand your basic needs. Premium competitiveness changes yearly.",
      tags: ["Flexible", "Supplementary"],
    },
    {
      id: "vgz",
      name: "VGZ",
      logo: { src: `${LOGOS}/vgz.svg`, alt: "VGZ" },
      bestFor: "Wide product ladder",
      englishSupport: "Check site",
      onboardingEase: "Online",
      priceHint: "~€140–160/mo indicative",
      notes: "Cooperative positioning",
      ctaLabel: "Visit VGZ",
      ctaHref: "https://www.vgz.nl/",
      detailDescription:
        "VGZ offers many package levels; good for systematic comparison shoppers. Read network lists for your city before committing.",
      tags: ["Range of packages"],
    },
    {
      id: "fbto",
      name: "FBTO",
      logo: { src: `${LOGOS}/fbto.svg`, alt: "FBTO" },
      bestFor: "Price-sensitive basic cover",
      englishSupport: "Limited; verify",
      onboardingEase: "Direct online",
      priceHint: "~€130–150/mo indicative",
      notes: "Achmea network; online sales",
      ctaLabel: "Visit FBTO",
      ctaHref: "https://www.fbto.nl/",
      detailDescription:
        "Often appears when minimising basic premium while staying with a recognised group network. Confirm English support meets your needs if you prefer service in English.",
      tags: ["Direct", "Budget-oriented"],
    },
  ],
};
