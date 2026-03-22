/**
 * Indicative planning ranges for document translation in the Netherlands.
 * Not government-set; actual pricing depends on language pair, complexity, sworn status, and provider.
 */

export type DocumentTranslationCostItem = {
  id: string;
  label: string;
  range: string;
  note?: string;
};

export type DocumentTranslationTiming = {
  label: string;
  range: string;
};

export const DOCUMENT_TRANSLATION_COST_RANGES: DocumentTranslationCostItem[] = [
  {
    id: "short-document",
    label: "Short document / extract",
    range: "€25–€60",
    note: "Single page or short text.",
  },
  {
    id: "birth-marriage",
    label: "Birth or marriage certificate",
    range: "€40–€100",
    note: "Typical one- to two-page civil document.",
  },
  {
    id: "diploma-transcript",
    label: "Diploma / transcript",
    range: "€60–€150",
    note: "Depends on length and complexity.",
  },
  {
    id: "urgent-surcharge",
    label: "Urgent translation surcharge",
    range: "Often +25%–50%",
    note: "Provider-dependent.",
  },
  {
    id: "notarisation-extras",
    label: "Notarisation / legalisation-related",
    range: "Varies",
    note: "If required on top of translation; check with provider.",
  },
];

export const DOCUMENT_TRANSLATION_TIMING: DocumentTranslationTiming[] = [
  { label: "Standard turnaround", range: "3–10 working days" },
  { label: "Urgent turnaround", range: "1–3 working days (if offered)" },
];

export const DOCUMENT_TRANSLATION_COST_DISCLAIMER =
  "Actual pricing depends on language pair, complexity, sworn status, urgency, and provider. There is no single government-set market price.";
