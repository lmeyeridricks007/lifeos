/**
 * Bikes, car sharing, servicing, and on-demand rides for Netherlands living / transport content.
 *
 * Affiliate URLs: use `monetizationAffiliatePlaceholder` until commercial drops in tracked `/go/…`
 * links; then set `isAffiliate: true` and `affiliateUrl` per partner programme rules.
 *
 * Pricing hints are editorial ballparks—tariffs and subscriptions change; readers should confirm
 * in each app before booking.
 */
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationAffiliatePlaceholder,
} from "@/src/lib/monetization/types";

/** Google favicon proxy (allowed in next.config images). */
function partnerFavicon(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

export const mobilityMonetizationProviders: MonetizationProvider[] = [
  {
    id: "monetization-mobility-swapfiets",
    name: "Swapfiets",
    category: "mobility",
    logo: { src: partnerFavicon("swapfiets.nl"), alt: "Swapfiets" },
    shortDescription:
      "Bike subscription with maintenance included—common when you want a reliable commuter bike without buying upfront or hunting a workshop after every flat.",
    tags: ["Bike subscription", "Maintenance included", "City bikes"],
    bestFor: "Newcomers who commute by bike and want predictable monthly cost plus quick swaps when something breaks.",
    priceHint: "Monthly tiers vary by city and bike type—check current plans on the site",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-swapfiets"),
    directUrl: "https://swapfiets.nl/en",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-halfords-nl",
    name: "Halfords (NL)",
    category: "mobility",
    logo: { src: partnerFavicon("halfords.nl"), alt: "Halfords" },
    shortDescription:
      "Nationwide chain for bikes, accessories, and workshop service—useful for purchases, seasonal prep, or repairs when you own a bike rather than subscribe.",
    tags: ["Bike shop", "Repairs", "Accessories"],
    bestFor: "People who bought a used bike or need a tune-up, lights, lock, or winter tyres without guessing a local-only shop.",
    priceHint: "Service menu priced per job; book busy-city slots ahead",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-halfords-nl"),
    directUrl: "https://www.halfords.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-mywheels",
    name: "MyWheels",
    category: "mobility",
    logo: { src: partnerFavicon("mywheels.nl"), alt: "MyWheels" },
    shortDescription:
      "Large Dutch car-sharing fleet (street and hub cars) with app booking—strong when you need a boot for furniture, a weekend away, or occasional driving without owning.",
    tags: ["Car sharing", "App booking", "Fuel included"],
    bestFor: "Expats who mostly use OV/bike but want an on-demand car a few times a month with insurance and fuel bundled in the trip price.",
    priceHint:
      "Typically ~€3–5/hr + per-km for many economy cars (tiered); optional Plus (~€10/mo) or Pro (~€25/mo) cuts trip rates—your quote is fixed in the app when you book",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-mywheels"),
    directUrl: "https://mywheels.nl/en",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-greenwheels",
    name: "Greenwheels",
    category: "mobility",
    logo: { src: partnerFavicon("greenwheels.nl"), alt: "Greenwheels" },
    shortDescription:
      "Station- and neighbourhood-based shared cars (often near NS hubs)—a classic complement to a train commute when the last leg needs a vehicle or a same-day errand.",
    tags: ["Car sharing", "Near stations", "Subscriptions"],
    bestFor: "People who already live on rail and want a predictable shared-car network with optional monthly plans that discount trips.",
    priceHint:
      "Occasional use often ~€3.50–4.50/hr + per-km before discounts; €10–25/mo plans lower rates; pay-as-you-go may add a small unlock fee—see English rates on site",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-greenwheels"),
    directUrl: "https://www.greenwheels.nl/en/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-snappcar",
    name: "SnappCar",
    category: "mobility",
    logo: { src: partnerFavicon("snappcar.nl"), alt: "SnappCar" },
    shortDescription:
      "Peer-to-peer car sharing: rent a private owner’s car by hour or day—useful when you need a specific size (estate, van) or a longer block cheaper than station fleets.",
    tags: ["P2P sharing", "Day hire", "Variety of cars"],
    bestFor: "Weekend trips, moving bits of furniture, or trying a car class before you buy; always read insurance and mileage terms on the listing.",
    priceHint:
      "SnappCar cites rentals from ~€25/day before insurance/service fees; vans and weekends cost more—check the listing total vs fleet sharing for your dates",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-snappcar"),
    directUrl: "https://www.snappcar.nl/en",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-bolt",
    name: "Bolt",
    category: "mobility",
    logo: { src: partnerFavicon("bolt.eu"), alt: "Bolt" },
    shortDescription:
      "Ride-hailing and micromobility in Dutch cities—handy for late trains, heavy bags, airport runs, or nights when OV is thin and you do not want to cycle.",
    tags: ["Taxi-style rides", "App booking", "Cities"],
    bestFor: "Trips where bike + OV is awkward: odd hours, poor weather with luggage, or a one-off door-to-door leg.",
    priceHint: "Trip total depends on distance and demand; compare with Uber for the same route and time",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-bolt"),
    directUrl: "https://bolt.eu/nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-mobility-uber",
    name: "Uber",
    category: "mobility",
    logo: { src: partnerFavicon("uber.com"), alt: "Uber" },
    shortDescription:
      "Widely used ride-hailing app in the Netherlands alongside Bolt—worth having installed before the night you actually need it.",
    tags: ["Rides", "English app", "Airports"],
    bestFor: "Anyone who wants a second on-demand option next to Bolt for availability or pricing on a specific route.",
    priceHint: "Upfront estimate in app; airports and peak times surge most",
    affiliateUrl: monetizationAffiliatePlaceholder("mobility-uber"),
    directUrl: "https://www.uber.com/nl/en/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/getting-around", "netherlands/living/getting-around", "netherlands/transport"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
];
