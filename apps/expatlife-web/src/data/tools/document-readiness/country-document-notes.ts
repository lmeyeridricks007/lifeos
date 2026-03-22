/**
 * Country-level notes for document complexity (apostille, legalization, translation, replacement).
 * Used to surface risk flags and guidance in the readiness results.
 */

export type CountryDocumentNote = {
  countryCode: string;
  label: string;
  apostilleLikely: boolean;
  legalizationLikely: boolean;
  translationOftenRequired: boolean;
  replacementTimingRisk: string | null;
  summary: string;
};

export const COUNTRY_DOCUMENT_NOTES: CountryDocumentNote[] = [
  {
    countryCode: "IN",
    label: "India",
    apostilleLikely: true,
    legalizationLikely: true,
    translationOftenRequired: true,
    replacementTimingRisk: "Civil documents and attestations can take several weeks.",
    summary: "Documents from India may need legalization or apostille and sometimes certified translation for Dutch procedures.",
  },
  {
    countryCode: "US",
    label: "United States",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "State-level apostille and certified copies can add 1–3 weeks.",
    summary: "U.S. civil documents often need apostille or certified copies depending on the receiving body in the Netherlands.",
  },
  {
    countryCode: "GB",
    label: "United Kingdom",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "Post-Brexit requirements may vary; allow extra time for official copies.",
    summary: "UK documents may need apostille; confirm current IND and municipality requirements.",
  },
  {
    countryCode: "ZA",
    label: "South Africa",
    apostilleLikely: true,
    legalizationLikely: true,
    translationOftenRequired: false,
    replacementTimingRisk: "Department of Home Affairs processing can be slow; plan for several weeks.",
    summary: "South African civil records often need apostille or legalization and can take longer to obtain.",
  },
  {
    countryCode: "DE",
    label: "Germany",
    apostilleLikely: false,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: null,
    summary: "EU-issued documents are often accepted more easily; some civil records may need to be recent or certified.",
  },
  {
    countryCode: "FR",
    label: "France",
    apostilleLikely: false,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: null,
    summary: "EU documents are generally accepted; certification or translation may be required in specific cases.",
  },
  {
    countryCode: "ES",
    label: "Spain",
    apostilleLikely: false,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: null,
    summary: "EU documents may be accepted; check specific requirements for your route.",
  },
  {
    countryCode: "CA",
    label: "Canada",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "Provincial authentication can add time.",
    summary: "Canadian documents may need apostille or authentication depending on province and use.",
  },
  {
    countryCode: "AU",
    label: "Australia",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "DFAT apostille processing can take 1–2 weeks.",
    summary: "Australian documents may need apostille or authentication before use in the Netherlands.",
  },
  {
    countryCode: "BR",
    label: "Brazil",
    apostilleLikely: true,
    legalizationLikely: true,
    translationOftenRequired: true,
    replacementTimingRisk: "Notary and consular steps can add several weeks.",
    summary: "Brazilian documents may need legalization or apostille and sometimes translation for Dutch procedures.",
  },
];

/** Map common slug or name to country code for lookup */
const COUNTRY_CODE_MAP: Record<string, string> = {
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
  uk: "GB",
  usa: "US",
  us: "US",
};

export function getCountryDocumentNote(countryCodeOrSlug: string | null): CountryDocumentNote | null {
  if (!countryCodeOrSlug || !countryCodeOrSlug.trim()) return null;
  const normalized = countryCodeOrSlug.trim().toLowerCase().replace(/\s+/g, "-");
  const code = normalized.length <= 3 ? normalized.toUpperCase() : COUNTRY_CODE_MAP[normalized];
  const lookup = code || COUNTRY_CODE_MAP[normalized];
  if (!lookup) return null;
  const note = COUNTRY_DOCUMENT_NOTES.find(
    (n) => n.countryCode === lookup || n.label.toLowerCase().replace(/\s+/g, "-") === normalized
  );
  return note ?? null;
}
