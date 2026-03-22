/**
 * Document types that often require translation for use in the Netherlands.
 * Used by the document translation guide. Legalisation/apostille may also apply depending on origin.
 */

export type DocumentTranslationDocumentType = {
  id: string;
  label: string;
  whereUsed: string[];
  legalisationRelevant: boolean;
  relatedGuideHref?: string;
  relatedGuideLabel?: string;
};

export const DOCUMENT_TRANSLATION_DOCUMENT_TYPES: DocumentTranslationDocumentType[] = [
  {
    id: "birth-certificate",
    label: "Birth certificate",
    whereUsed: ["Municipality registration", "Partner/family visa", "Child registration", "BRP"],
    legalisationRelevant: true,
    relatedGuideHref: "/netherlands/moving-to-netherlands-with-kids/",
    relatedGuideLabel: "Moving with kids",
  },
  {
    id: "marriage-certificate",
    label: "Marriage certificate",
    whereUsed: ["Partner/family visa", "Municipality registration", "Civil status"],
    legalisationRelevant: true,
    relatedGuideHref: "/netherlands/moving-to-netherlands-with-partner/",
    relatedGuideLabel: "Moving with partner",
  },
  {
    id: "divorce-certificate",
    label: "Divorce certificate",
    whereUsed: ["Civil status", "Visa or residence procedures"],
    legalisationRelevant: true,
  },
  {
    id: "police-certificate",
    label: "Police / certificate of conduct",
    whereUsed: ["Visa applications", "IND requirements", "Some employment"],
    legalisationRelevant: true,
    relatedGuideHref: "/netherlands/visa-documents-netherlands/",
    relatedGuideLabel: "Visa documents",
  },
  {
    id: "diploma-transcript",
    label: "Diploma / transcript",
    whereUsed: ["University enrolment", "Skilled migrant route", "Professional recognition"],
    legalisationRelevant: true,
    relatedGuideHref: "/netherlands/visa/student-visa/",
    relatedGuideLabel: "Student visa",
  },
  {
    id: "employment-business",
    label: "Employment / business documents",
    whereUsed: ["Self-employed visa", "Highly skilled migrant", "KVK or tax"],
    legalisationRelevant: false,
    relatedGuideHref: "/netherlands/visa/self-employed-visa/",
    relatedGuideLabel: "Self-employed visa",
  },
  {
    id: "court-documents",
    label: "Court documents",
    whereUsed: ["Legal procedures", "Civil status", "Custody or name change"],
    legalisationRelevant: true,
  },
  {
    id: "medical-civil",
    label: "Medical / civil documents",
    whereUsed: ["Where accepted by IND, municipality, or other authority"],
    legalisationRelevant: true,
  },
];
