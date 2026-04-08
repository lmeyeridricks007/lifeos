import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";

const NORMALIZE = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");

/** Map free-text Dutch cities to COL seed keys. */
export function resolveColCity(city: string, fallbackOfficeCity?: string): ColCity {
  const raw = `${city} ${fallbackOfficeCity ?? ""}`;
  const n = NORMALIZE(raw);

  if (n.includes("amsterdam")) return "amsterdam";
  if (n.includes("rotterdam")) return "rotterdam";
  if (n.includes("the hague") || n.includes("den haag") || n.includes("s-gravenhage")) return "the-hague";
  if (n.includes("utrecht")) return "utrecht";
  if (n.includes("eindhoven")) return "eindhoven";
  if (n.includes("haarlem")) return "haarlem";
  if (n.includes("delft")) return "delft";
  if (n.includes("groningen")) return "groningen";
  if (n.includes("leiden")) return "leiden";

  return "other";
}

/** Prefer home/target city for affordability; fall back to job city / office. */
export function affordabilityCityForOffer(offer: {
  homeOrTargetCity: string;
  city: string;
  officeCity: string;
  workMode: string;
}): ColCity {
  if (offer.homeOrTargetCity.trim()) {
    return resolveColCity(offer.homeOrTargetCity);
  }
  if (offer.workMode === "office" && offer.officeCity.trim()) {
    return resolveColCity(offer.officeCity, offer.city);
  }
  return resolveColCity(offer.city, offer.officeCity);
}
