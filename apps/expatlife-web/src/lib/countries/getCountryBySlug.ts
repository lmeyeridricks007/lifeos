import { loadAllEnabledCountries, loadCountryBySlug } from "./loadCountries";

export function getCountryBySlug(slug: string) {
  return loadCountryBySlug(slug);
}

export function getCountryStaticParams(): Array<{ country: string }> {
  return loadAllEnabledCountries().map((country) => ({ country: country.slug }));
}

