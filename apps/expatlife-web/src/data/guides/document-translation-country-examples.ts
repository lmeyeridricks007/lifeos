/**
 * Country-specific workflow examples for document translation and legalisation in the Netherlands.
 * Based on Netherlands Worldwide country pages. Order and requirements vary by issuing country.
 * Always check the official country page for the country that issued your document.
 */

export type DocumentTranslationCountryExample = {
  country: string;
  countryCode: string;
  summary: string;
  workflow: string[];
  officialUrl: string;
  note?: string;
};

export const DOCUMENT_TRANSLATION_COUNTRY_EXAMPLES: DocumentTranslationCountryExample[] = [
  {
    country: "India",
    countryCode: "IN",
    summary: "Hindi documents need translation. If translated in the Netherlands, apostille/legalise the original first, then translate.",
    workflow: [
      "Apostille or legalise the original document in India (as required).",
      "Translate in the Netherlands; translation usually does not need separate legalisation.",
    ],
    officialUrl: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/india",
    note: "Hindi documents must be translated into an accepted language.",
  },
  {
    country: "Pakistan",
    countryCode: "PK",
    summary: "If translating in the Netherlands, legalise the original first, then have it translated.",
    workflow: [
      "Legalise the original document in Pakistan.",
      "Have the document translated in the Netherlands by a sworn translator.",
    ],
    officialUrl: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan",
    note: "Urdu documents need translation.",
  },
  {
    country: "China",
    countryCode: "CN",
    summary: "Chinese documents for the Netherlands must first be translated into English by a notary in China, then legalised with apostille.",
    workflow: [
      "Translate into English by a notary in China.",
      "Legalise with apostille in China.",
      "Use the legalised, translated document for Dutch procedures.",
    ],
    officialUrl: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/china",
    note: "Translation is done in the country of issue before legalisation.",
  },
  {
    country: "Japan",
    countryCode: "JP",
    summary: "Legalise first, then translate. Japan has no sworn translators for Dutch purposes; use a translator sworn in the Netherlands.",
    workflow: [
      "Legalise the document in Japan (apostille or consular legalisation as applicable).",
      "Have the document translated by a translator sworn in by a Dutch court (e.g. via Bureau Wbtv).",
    ],
    officialUrl: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/japan",
    note: "There are no sworn translators in Japan for Dutch procedures; translation is typically done in the Netherlands.",
  },
];

export const COUNTRY_EXAMPLES_DISCLAIMER =
  "These are examples only. Always check the country-specific legalisation page for the country that issued your document.";
