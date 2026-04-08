/**
 * Curated Dutch utilities-related brands and official portals for the utilities planner.
 * Shapes match `PageRecommendedProviderCard` in `pageRegistryRecommendations.ts` (no import here — avoids circular deps).
 */

export type UtilitiesPlannerCompanyCard = {
  name: string;
  url: string;
  useFor: string;
  priceRange?: string;
  logo?: { src: string; alt: string };
};

const fav = (domain: string, alt: string): { src: string; alt: string } => ({
  src: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  alt,
});

/** Comparison shopping — not a single supplier contract. */
export const UTILITIES_ENERGY_COMPARATOR_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "Independer — energy",
    url: "https://www.independer.nl/energie/",
    useFor: "Side-by-side retail electricity and gas tariffs when you choose your own supplier.",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    priceRange: "Free comparison; tariffs vary by address and usage.",
  },
  {
    name: "Gaslicht.com — energy",
    url: "https://www.gaslicht.com/",
    useFor: "Independent Dutch comparator for electricity and gas; useful as a second opinion next to Independer.",
    priceRange: "Free comparison; tariffs vary by address and usage.",
  },
  {
    name: "Pricewise — energy",
    url: "https://www.pricewise.nl/energie/",
    useFor: "Another established Dutch energy comparison flow; check contract terms and green-power options on the offer.",
    logo: fav("www.pricewise.nl", "Pricewise"),
    priceRange: "Free comparison; tariffs vary by address and usage.",
  },
];

/** Large retail suppliers households commonly contract with (verify offers at your address). */
export const UTILITIES_ENERGY_SUPPLIER_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "Essent",
    url: "https://www.essent.nl/",
    useFor: "Major Dutch energy retailer (electricity and gas); English consumer flows available for many products.",
    logo: fav("www.essent.nl", "Essent"),
    priceRange: "Variable and fixed tariffs; confirm at postcode.",
  },
  {
    name: "Eneco",
    url: "https://www.eneco.nl/",
    useFor: "Nationwide supplier with green tariffs and bundles; check landlord rules before switching in rented homes.",
    logo: fav("www.eneco.nl", "Eneco"),
    priceRange: "Variable and fixed tariffs; confirm at postcode.",
  },
  {
    name: "Vattenfall",
    url: "https://www.vattenfall.nl/",
    useFor: "Retail electricity and gas under the Vattenfall NL brand; compare exit fees and contract length.",
    logo: fav("www.vattenfall.nl", "Vattenfall"),
    priceRange: "Variable and fixed tariffs; confirm at postcode.",
  },
  {
    name: "Greenchoice",
    url: "https://www.greenchoice.nl/",
    useFor: "Green-power-focused retailer; useful when you want explicit renewable sourcing in the contract.",
    logo: fav("www.greenchoice.nl", "Greenchoice"),
    priceRange: "Green premiums vary; confirm at postcode.",
  },
  {
    name: "Budget Energie",
    url: "https://www.budgetenergie.nl/",
    useFor: "Discount-oriented retail brand; read bundle conditions and service levels like any budget offer.",
    logo: fav("www.budgetenergie.nl", "Budget Energie"),
    priceRange: "Promotional rates common; confirm ongoing price after discount period.",
  },
];

/**
 * Drinking water is regional — one company per area. National association + examples of large water companies.
 */
export const UTILITIES_WATER_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "Rijksoverheid — drinking water",
    url: "https://www.rijksoverheid.nl/onderwerpen/drinkwater",
    useFor: "Official Dutch government topic on drinking water quality, suppliers, and rules—use browser translate if you need English.",
    logo: fav("www.rijksoverheid.nl", "Rijksoverheid"),
    priceRange: "Public information — your bill comes from one regional water company.",
  },
  {
    name: "VEWIN (Dutch drinking water association)",
    url: "https://www.vewin.nl/",
    useFor: "Sector association site — links and context on water companies (Dutch-first; use with translate if needed).",
    logo: fav("www.vewin.nl", "VEWIN"),
    priceRange: "Not a retailer — your invoice comes from the regional water company.",
  },
  {
    name: "Vitens",
    url: "https://www.vitens.nl/",
    useFor: "Largest Dutch drinking water company (much of the east and centre); check if your postcode falls in their area.",
    logo: fav("www.vitens.nl", "Vitens"),
    priceRange: "Regulated tariff; single supplier per region.",
  },
  {
    name: "PWN",
    url: "https://www.pwn.nl/",
    useFor: "Drinking water for parts of North Holland; confirm on their postcode tool or gemeente letter.",
    logo: fav("www.pwn.nl", "PWN"),
    priceRange: "Regulated tariff; single supplier per region.",
  },
  {
    name: "Brabant Water",
    url: "https://www.brabantwater.nl/",
    useFor: "Regional water company for much of Noord-Brabant; fixed-charge and usage components on the bill.",
    logo: fav("www.brabantwater.nl", "Brabant Water"),
    priceRange: "Regulated tariff; single supplier per region.",
  },
];

/** Fixed internet and TV — often one contract; availability is postcode-specific. */
export const UTILITIES_BROADBAND_TV_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "Ziggo",
    url: "https://www.ziggo.nl/",
    useFor: "Cable internet and TV bundles (Liberty Global / Vodafone Ziggo); strong where coax is already in the building.",
    logo: fav("www.ziggo.nl", "Ziggo"),
    priceRange: "Bundles vary; install and modem fees apply.",
  },
  {
    name: "KPN",
    url: "https://www.kpn.com/",
    useFor: "DSL and fibre consumer internet and TV; English consumer pages for many products.",
    logo: fav("www.kpn.com", "KPN"),
    priceRange: "Fibre rollout postcode-dependent; check address checker.",
  },
  {
    name: "Odido (Thuis)",
    url: "https://www.odido.nl/",
    useFor: "Fibre and fixed-line consumer offers from the former T-Mobile NL consumer brand; compare with KPN/Ziggo at your postcode.",
    logo: fav("www.odido.nl", "Odido"),
    priceRange: "Availability and speeds depend on neighbourhood build.",
  },
  {
    name: "DELTA Fiber",
    url: "https://www.deltafiber.nl/",
    useFor: "Fibre network operator and retail in many southern and growth regions; confirm build status at your address.",
    logo: fav("www.deltafiber.nl", "DELTA Fiber"),
    priceRange: "Regional fibre; install lead times vary.",
  },
  {
    name: "Youfone",
    url: "https://www.youfone.nl/",
    useFor: "Budget-oriented internet/TV over KPN’s copper/fibre where offered; read speed caps and contract length.",
    logo: fav("www.youfone.nl", "Youfone"),
    priceRange: "Often promotional first-year pricing; confirm renewal.",
  },
];

/** Subsidies, advice — not a single installer; use for planning insulation and efficiency. */
export const UTILITIES_INSULATION_EFFICIENCY_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "RVO — ISDE subsidy",
    url: "https://www.rvo.nl/subsidies-financiering/isde",
    useFor: "Official Dutch ISDE portal for insulation, heat pumps, solar boilers, and other listed measures—use translate or Rijksoverheid “Energie thuis” for English context.",
    logo: fav("www.rvo.nl", "RVO"),
    priceRange: "Subsidy amounts and rules change — verify eligibility on RVO.",
  },
  {
    name: "Milieu Centraal — insulation",
    url: "https://www.milieucentraal.nl/energie-besparen/isolatie/",
    useFor: "Independent Dutch advice on insulation types, costs, and priorities (Dutch; browser translate works well).",
    logo: fav("www.milieucentraal.nl", "Milieu Centraal"),
    priceRange: "Free information; installer quotes separate.",
  },
  {
    name: "Energieloket",
    url: "https://www.energieloket.nl/",
    useFor: "National energy advice desk — local appointments and generic guidance on saving and retrofit (Dutch).",
    logo: fav("www.energieloket.nl", "Energieloket"),
    priceRange: "Often free gemeente-backed advice; confirm locally.",
  },
  {
    name: "Rijksoverheid — energy at home",
    url: "https://www.rijksoverheid.nl/onderwerpen/energie-thuis",
    useFor: "Official Q&A on insulation, smart meters, paying energy bills, and saving energy at home (Dutch).",
    logo: fav("www.rijksoverheid.nl", "Rijksoverheid"),
    priceRange: "Public information — installers quote separately.",
  },
  {
    name: "Verbeterjehuis.nl",
    url: "https://www.verbeterjehuis.nl/",
    useFor: "National government-backed portal for improving your home’s energy performance, with routes to ISDE and measures.",
    logo: fav("www.verbeterjehuis.nl", "Verbeterjehuis"),
    priceRange: "Free guidance; contractor pricing varies.",
  },
];

/** Inboedel (contents) and aansprakelijkheid (liability) — separate from mandatory basic health insurance. */
export const UTILITIES_HOME_INSURANCE_CARDS: UtilitiesPlannerCompanyCard[] = [
  {
    name: "Independer — home insurance",
    url: "https://www.independer.nl/woonverzekering/vergelijken/",
    useFor: "Compare Dutch home (contents), liability, and glass cover in one flow — useful when bundling after a move.",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    priceRange: "Free comparison; premiums vary by postcode and cover.",
  },
  {
    name: "Centraal Beheer — woonverzekering",
    url: "https://www.centraalbeheer.nl/verzekeringen/woonverzekering",
    useFor: "Achmea brand; common choice for contents + liability bundles with Dutch customer service.",
    logo: fav("www.centraalbeheer.nl", "Centraal Beheer"),
    priceRange: "Premiums vary; check policy documents (English often limited).",
  },
  {
    name: "Univé — woonpakket",
    url: "https://www.unive.nl/verzekeringen/woonverzekering",
    useFor: "Cooperative insurer with packaged home cover; compare excess and outdoor/storage limits.",
    logo: fav("www.unive.nl", "Univé"),
    priceRange: "Premiums vary by address and bundle.",
  },
  {
    name: "Interpolis — woonverzekering",
    url: "https://www.interpolis.nl/verzekeringen/woonverzekering",
    useFor: "Rabobank-linked insurer; often chosen when you already bank with Rabobank.",
    logo: fav("www.interpolis.nl", "Interpolis"),
    priceRange: "Premiums vary; confirm English support if you need it.",
  },
  {
    name: "ANWB — woonverzekering",
    url: "https://www.anwb.nl/verzekeren/woonverzekering",
    useFor: "Well-known Dutch brand for packaged home insurance; compare with other insurers on cover limits.",
    logo: fav("www.anwb.nl", "ANWB"),
    priceRange: "Premiums vary; member discounts may apply.",
  },
];

export const UTILITIES_PLANNER_GROUP_TITLES = {
  understanding: "Understanding Dutch utilities",
  compareEnergy: "Compare energy tariffs",
  energyRetailers: "Major Dutch energy retailers",
  water: "Drinking water (regional supplier)",
  broadbandTv: "Home internet & TV",
  insulation: "Insulation & home efficiency",
  homeInsurance: "Home contents & liability insurance",
  mobile: "Mobile & SIM-only",
} as const;
