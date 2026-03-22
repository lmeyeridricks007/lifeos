import type { CountrySlug } from "./types";

const knownCountries = new Set<CountrySlug>(["netherlands"]);

export function getCountryFromPath(pathname: string): CountrySlug | null {
  const [first] = pathname.split("/").filter(Boolean);
  if (!first) {
    return null;
  }
  return knownCountries.has(first as CountrySlug) ? (first as CountrySlug) : null;
}

export function replaceCountryInPath(pathname: string, nextCountry: CountrySlug) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextCountry}`;
  }

  const [first, ...rest] = segments;
  if (knownCountries.has(first as CountrySlug)) {
    return `/${[nextCountry, ...rest].join("/")}`;
  }

  return `/${nextCountry}`;
}
