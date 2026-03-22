/**
 * Sworn translator resources and agencies for the document translation guide.
 * Includes the official register and selected agencies offering sworn translation in the Netherlands.
 * Typical costs are indicative; users should request a quote for their document.
 */

import type { GuideDocumentTranslationTranslatorResource } from "@/src/lib/guides/types";

export const DOCUMENT_TRANSLATION_TRANSLATOR_RESOURCES: GuideDocumentTranslationTranslatorResource[] = [
  {
    id: "bureau-wbtv",
    name: "Bureau Wbtv / Rbtv",
    description:
      "Official register of sworn interpreters and translators in the Netherlands. Search by language pair and location to find a certified translator for your document.",
    url: "https://zoekeentolkvertaler.bureauwbtv.nl/",
    costNote: "No fee for search; translator prices vary.",
    isOfficialRegister: true,
  },
  {
    id: "beedigd-vertaalbureau",
    name: "Beëdigd Vertaalbureau",
    description:
      "Sworn translations in many language combinations, delivery within a few business days by registered mail. Transparent pricing via online quote; works with licensed professionals.",
    url: "https://en.beedigdvertaalbureau.nl/",
    costNote: "From ~€45 per page; quote per language pair and page count. VAT and shipping included.",
  },
  {
    id: "urgent-vertalen",
    name: "Urgent Vertalen",
    description:
      "ISO-certified translation bureau in The Hague. Sworn translations of birth certificates, diplomas, wills, and other official documents, plus legalisation support.",
    url: "https://urgentvertalen.nl/en/",
    costNote: "Indicative from ~€50 per document; request a quote for your language and document type.",
  },
  {
    id: "sworntranslation-nl",
    name: "Sworntranslation.nl",
    description:
      "Sworn translators in the Netherlands with an office in Amsterdam. Quote on request; collection in Amsterdam or postal delivery available.",
    url: "https://sworntranslation.nl/",
    costNote: "Request a quote; pricing depends on document and language pair.",
  },
  {
    id: "gs-translations",
    name: "GS Translations",
    description:
      "Dutch–English and English–Dutch certified translations. Translator registered with Bureau Wbtv; strict confidentiality and quality protocols.",
    url: "https://gstranslations.nl/en/certified-translations",
    costNote: "Request a quote for certified translation.",
  },
];
