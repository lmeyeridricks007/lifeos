/**
 * Country options for Document Readiness Checker (country of document origin).
 * Quick-pick chips: India, United States, United Kingdom, South Africa, Other.
 * Full list for select (common origins for Netherlands relocation).
 */

export type CountryOption = { value: string; label: string };

export const COUNTRY_QUICK_PICKS: CountryOption[] = [
  { value: "india", label: "India" },
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "south-africa", label: "South Africa" },
  { value: "other", label: "Other" },
];

export const COUNTRY_SELECT_OPTIONS: CountryOption[] = [
  { value: "", label: "Select country..." },
  ...COUNTRY_QUICK_PICKS,
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
  { value: "spain", label: "Spain" },
  { value: "italy", label: "Italy" },
  { value: "belgium", label: "Belgium" },
  { value: "poland", label: "Poland" },
  { value: "romania", label: "Romania" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "brazil", label: "Brazil" },
  { value: "mexico", label: "Mexico" },
  { value: "china", label: "China" },
  { value: "japan", label: "Japan" },
  { value: "turkey", label: "Turkey" },
  { value: "nigeria", label: "Nigeria" },
  { value: "egypt", label: "Egypt" },
  { value: "russia", label: "Russia" },
  { value: "ukraine", label: "Ukraine" },
  { value: "indonesia", label: "Indonesia" },
  { value: "pakistan", label: "Pakistan" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "philippines", label: "Philippines" },
  { value: "vietnam", label: "Vietnam" },
  { value: "argentina", label: "Argentina" },
  { value: "colombia", label: "Colombia" },
  { value: "netherlands", label: "Netherlands" },
];

/** Map slug to code for getCountryDocumentNote (e.g. india -> IN) */
export function countrySlugToCode(slug: string): string {
  const map: Record<string, string> = {
    india: "IN",
    "united-states": "US",
    "united-kingdom": "GB",
    "south-africa": "ZA",
    germany: "DE",
    france: "FR",
    spain: "ES",
    canada: "CA",
    australia: "AU",
    brazil: "BR",
  };
  return map[slug] ?? slug.toUpperCase().slice(0, 2);
}
