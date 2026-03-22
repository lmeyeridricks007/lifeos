/**
 * Shared insurance and documents/translation services for city hub pages.
 * Real companies with typical costs and logos; used across Amsterdam, Rotterdam, Utrecht, The Hague.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Health insurers and comparison – actual companies, indicative 2026 basic premiums; supplementary extra. */
export const sharedInsuranceServices: CityServiceCard[] = [
  {
    id: "zilveren-kruis",
    name: "Zilveren Kruis",
    category: "Insurance",
    description:
      "One of the largest Dutch health insurers (Achmea). Broad care network, basic and supplementary packages; widely recognised by expats.",
    bestFor: "Broad network, brand recognition",
    costNote: "Basic from ~€158/month; supplementary extra. Indicative.",
    url: "https://www.zilverenkruis.nl/",
    logo: { src: "/images/affiliates/logos/zilveren-kruis.svg", alt: "Zilveren Kruis" },
  },
  {
    id: "cz",
    name: "CZ",
    category: "Insurance",
    description:
      "Large Dutch insurer with a big customer base. Standard basic and various supplementary packages; solid option for daily cover.",
    bestFor: "Large customer base, standard cover",
    costNote: "Basic ~€152–159/month; supplementary extra. Indicative.",
    url: "https://www.cz.nl/",
    logo: { src: "/images/affiliates/logos/cz.svg", alt: "CZ" },
  },
  {
    id: "vgz",
    name: "VGZ",
    category: "Insurance",
    description:
      "Major Dutch health insurer with a wide range of basic and supplementary products. Often chosen for flexibility.",
    bestFor: "Wide choice, supplementary options",
    costNote: "Basic ~€152–159/month; supplementary extra. Indicative.",
    url: "https://www.vgz.nl/",
    logo: { src: "/images/affiliates/logos/vgz.svg", alt: "VGZ" },
  },
  {
    id: "dsw",
    name: "DSW",
    category: "Insurance",
    description:
      "Health insurer often positioned at a competitive price for basic cover. May suit budget-focused expats.",
    bestFor: "Budget-conscious, competitive basic",
    costNote: "Basic from ~€142/month; supplementary extra. Indicative.",
    url: "https://www.dsw.nl/",
    logo: { src: "/images/affiliates/logos/dsw.svg", alt: "DSW" },
  },
  {
    id: "fbto",
    name: "FBTO",
    category: "Insurance",
    description:
      "Part of Achmea; no-frills, online-focused option with competitive basic premiums. Suitable for online-only users.",
    bestFor: "Online, no-frills, competitive price",
    costNote: "Basic from ~€142/month; supplementary extra. Indicative.",
    url: "https://www.fbto.nl/",
    logo: { src: "/images/affiliates/logos/fbto.svg", alt: "FBTO" },
  },
  {
    id: "independer",
    name: "Independer",
    category: "Insurance",
    description:
      "Comparison site for Dutch health insurance. Compare premiums and packages from major insurers; useful before choosing a provider.",
    bestFor: "Comparing premiums and packages",
    costNote: "Free to compare",
    url: "https://www.independer.nl/zorgverzekering/intro.aspx",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer" },
  },
];

/** Document translation and legalisation – official register plus agencies offering sworn/certified translation. */
export const sharedDocumentsTranslationServices: CityServiceCard[] = [
  {
    id: "bureau-wbtv",
    name: "Bureau Wbtv – Sworn translator register",
    category: "Documents / translation",
    description:
      "Official register of sworn interpreters and translators (Rbtv). Search by language pair and location; only Rbtv-registered translators can provide sworn translations for Dutch authorities.",
    bestFor: "Finding a sworn translator (required for official use)",
    costNote: "Free to search; translator fees vary (e.g. short doc ~€25–60, birth/marriage ~€40–100, diploma ~€60–150)",
    url: "https://zoekeentolkvertaler.bureauwbtv.nl/",
    isOfficial: true,
    logo: { src: favicon("bureauwbtv.nl"), alt: "Bureau Wbtv" },
  },
  {
    id: "sworntranslation-nl",
    name: "Sworntranslation.nl",
    category: "Documents / translation",
    description:
      "Amsterdam-based agency offering sworn translations by Rbtv-registered translators. Handles birth certificates, diplomas, and other documents for IND and municipality procedures.",
    bestFor: "Sworn translations, fast turnaround, Amsterdam area",
    costNote: "Typical: short document ~€25–60, birth/marriage cert ~€40–100, diploma ~€60–150",
    url: "https://sworntranslation.nl/",
    logo: { src: favicon("sworntranslation.nl"), alt: "Sworntranslation.nl" },
  },
  {
    id: "beedigd-vertaalbureau",
    name: "Beëdigd Vertaalbureau",
    category: "Documents / translation",
    description:
      "Sworn translation agency with all translators registered in the Rbtv. Online ordering; documents for immigration, municipality registration, and legal use.",
    bestFor: "Sworn translations, online ordering",
    costNote: "Varies by document (e.g. certificate ~€40–100, diploma ~€60–150)",
    url: "https://en.beedigdvertaalbureau.nl/",
    logo: { src: favicon("beedigdvertaalbureau.nl"), alt: "Beëdigd Vertaalbureau" },
  },
  {
    id: "exito-vertaalbureau",
    name: "Exito Vertaalbureau",
    category: "Documents / translation",
    description:
      "Sworn translations plus assistance with apostille and legalisation for documents used abroad or with Dutch authorities.",
    bestFor: "Sworn translation + apostille/legalisation",
    costNote: "Translation from ~€25–60 per page; legalisation services extra",
    url: "https://exito-translations.nl/en/sworn-translations/",
    logo: { src: favicon("exito-translations.nl"), alt: "Exito Vertaalbureau" },
  },
  {
    id: "document-translation-guide",
    name: "Document translation & legalisation guide",
    category: "Documents / translation",
    description:
      "When translation is required, which languages are accepted, sworn translation steps, legalisation order, and common mistakes. Use alongside the Bureau Wbtv register or agencies above.",
    bestFor: "Understanding requirements and process",
    costNote: "Free guide",
    url: "/netherlands/document-translation-netherlands/",
  },
];
