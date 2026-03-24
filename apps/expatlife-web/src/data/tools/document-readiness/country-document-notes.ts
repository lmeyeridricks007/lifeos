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
    countryCode: "DK",
    label: "Denmark",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "E-apostille and sworn-translation queues can add time for diplomas and certificates depending on season and document type.",
    summary:
      "Netherlands Worldwide explains that some documents from Denmark can be used in the Netherlands immediately, while diplomas and certificates generally need legalisation with a digital e-apostille. Documents in Danish generally need sworn translation into Dutch, English, French, or German unless the issuing authority attaches an accepted multilingual standard form—confirm each step with the IND, municipality, employer, or university.",
  },
  {
    countryCode: "NO",
    label: "Norway",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "Apostille or civil-registry extracts can add time depending on document type and local queues.",
    summary:
      "Netherlands Worldwide explains that some documents from Norway can be used in the Netherlands immediately, while others must be legalised with an apostille issued by the Norwegian authorities. Requirements depend on the document and who requests it—confirm each step with the IND, municipality, employer, or university.",
  },
  {
    countryCode: "IE",
    label: "Ireland",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "Apostille or civil-registry extracts can add time depending on document type and Irish Department of Foreign Affairs queues.",
    summary:
      "Netherlands Worldwide explains that some documents from Ireland can be used in the Netherlands immediately, while others must be legalised with an apostille issued by the Irish Department of Foreign Affairs. Foreign qualifications for work may follow separate procedures—confirm each step with the IND, municipality, employer, or university.",
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
    summary:
      "Netherlands Worldwide lists which Spanish documents can be used directly in the Netherlands and which need apostille; official Spanish documents often need no translation for Dutch authorities—confirm per document and use case.",
  },
  {
    countryCode: "CH",
    label: "Switzerland",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: "Depends on document type; some Swiss extracts may be quick while others need apostille steps.",
    summary:
      "Netherlands Worldwide explains that some documents from Switzerland can be used in the Netherlands immediately, while others must be legalised with a Hague apostille by the Swiss authorities. Requirements depend on the document and the receiving body—confirm each case with the IND, municipality, or sponsor.",
  },
  {
    countryCode: "IT",
    label: "Italy",
    apostilleLikely: false,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: null,
    summary:
      "Netherlands Worldwide lists which Italian documents can be used directly in the Netherlands and which need apostille; official Italian documents often need no translation for Dutch authorities—confirm per document and use case.",
  },
  {
    countryCode: "SE",
    label: "Sweden",
    apostilleLikely: false,
    legalizationLikely: false,
    translationOftenRequired: false,
    replacementTimingRisk: null,
    summary:
      "As an EU member state, many Swedish official documents are straightforward for Dutch procedures; unusual document types or uses may still require legalisation or apostille per Netherlands Worldwide—confirm each request with the IND, municipality, or sponsor.",
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
  {
    countryCode: "MX",
    label: "Mexico",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "Registro civil extracts and apostille steps can take several weeks depending on state and workload.",
    summary:
      "Mexican civil documents often need a Hague apostille (Apostilla de La Haya) from the competent authority and sometimes sworn translation for Dutch immigration or municipality procedures.",
  },
  {
    countryCode: "SG",
    label: "Singapore",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "SAL appointment and processing queues can add time during busy periods.",
    summary:
      "Many Singapore-issued public documents need a Hague apostille through the Singapore Academy of Law (SAL) for use in the Netherlands; Singapore MFA describes SAL as the competent authority. Sworn translation may be required depending on the receiving body.",
  },
  {
    countryCode: "JP",
    label: "Japan",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "MOFA apostille and municipal issuing steps can take several weeks depending on document type.",
    summary:
      "Many Japan-issued public documents need a Hague apostille through the Japanese Ministry of Foreign Affairs (MOFA) for use in the Netherlands, as described on Netherlands Worldwide. Sworn translation may be required depending on the receiving body.",
  },
  {
    countryCode: "KR",
    label: "South Korea",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "Apostille and translation queues can add time depending on document type and workload.",
    summary:
      "Many South Korea–issued public documents need a Hague apostille through the competent South Korean authorities for use in the Netherlands, as described on Netherlands Worldwide. Documents in Korean generally need translation into Dutch, English, French, or German for Dutch administrative use—confirm with each receiving body.",
  },
  {
    countryCode: "TR",
    label: "Türkiye",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "Apostille and sworn-translation queues can add weeks depending on document type and season.",
    summary:
      "Netherlands Worldwide explains that some documents from Türkiye can be used in the Netherlands immediately, while others must be legalised with an apostille by the Turkish authorities. Documents drawn up in Turkish generally need translation into Dutch, English, French, or German for Dutch use—confirm each requirement with the IND, municipality, or sponsor.",
  },
  {
    countryCode: "AR",
    label: "Argentina",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "MFA digital e-apostille and civil-registry extracts can take time depending on document type.",
    summary:
      "Netherlands Worldwide explains that documents from Argentina must be legalised with a digital e-apostille issued by the Argentine Ministry of Foreign Affairs for use in the Netherlands. Depending on the document language and receiving authority, translation into Dutch, English, French, or German may be required—confirm each step with the IND, municipality, or sponsor.",
  },
  {
    countryCode: "CL",
    label: "Chile",
    apostilleLikely: true,
    legalizationLikely: false,
    translationOftenRequired: true,
    replacementTimingRisk: "Apostille and civil-registry extracts can take time depending on document type and local queues.",
    summary:
      "Netherlands Worldwide explains that documents from Chile must be legalised by the Chilean authorities with a Hague apostille before they can be used in the Netherlands. Depending on the document language and receiving authority, translation into Dutch, English, French, or German may be required—confirm each step with the IND, municipality, or sponsor.",
  },
];

/** Map common slug or name to country code for lookup */
const COUNTRY_CODE_MAP: Record<string, string> = {
  india: "IN",
  "united-states": "US",
  "united-kingdom": "GB",
  "south-africa": "ZA",
  germany: "DE",
  denmark: "DK",
  norway: "NO",
  ireland: "IE",
  france: "FR",
  spain: "ES",
  italy: "IT",
  switzerland: "CH",
  canada: "CA",
  australia: "AU",
  brazil: "BR",
  mexico: "MX",
  singapore: "SG",
  japan: "JP",
  "south-korea": "KR",
  turkey: "TR",
  argentina: "AR",
  chile: "CL",
  sweden: "SE",
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
