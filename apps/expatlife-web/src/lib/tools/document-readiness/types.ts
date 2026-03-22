/**
 * Document Readiness — structured document model and resolved detail types.
 * All document content is data-driven; no hardcoded document logic in components.
 */

export type DocumentCategory =
  | "identity"
  | "employment"
  | "housing"
  | "family"
  | "education"
  | "travel";

export type DocumentPriority = "high" | "medium" | "optional";

export type DocumentStatus = "ready" | "missing" | "pending" | "not_applicable";

export type Conditions = {
  scenario?: Array<"work" | "partner" | "family" | "unsure">;
};

export type ContactItem = {
  name: string;
  website?: string;
  contactSummary: string;
};

export type ApostilleOrLegalizationBlock = {
  mayBeRelevant: boolean;
  summary: string;
};

export type TranslationBlock = {
  mayBeRelevant: boolean;
  summary: string;
};

export type WhereToGetItBlock = {
  summary: string;
};

export type TypicalCostBlock = {
  summary: string;
};

export type TypicalTimelineBlock = {
  summary: string;
};

export type CountryOverrideBlock = {
  whereToGetIt?: WhereToGetItBlock;
  whoToContact?: ContactItem[];
  typicalCost?: TypicalCostBlock;
  typicalTimeline?: TypicalTimelineBlock;
  apostilleOrLegalization?: ApostilleOrLegalizationBlock;
  translation?: TranslationBlock;
};

/** Single document entry in the source dataset (documents.json). */
export type DocumentEntry = {
  id: string;
  title: string;
  category: DocumentCategory;
  priority: DocumentPriority;
  shortDescription: string;
  suggestedStatus: "ready" | "missing" | "pending" | "not_applicable";
  whyItMatters?: string;
  commonUses?: string[];
  typicalRequirements?: string[];
  apostilleOrLegalization?: ApostilleOrLegalizationBlock;
  translation?: TranslationBlock;
  whereToGetIt?: WhereToGetItBlock;
  whoMayAskForIt?: string[];
  whoToContact?: ContactItem[];
  typicalCost?: TypicalCostBlock;
  typicalTimeline?: TypicalTimelineBlock;
  relatedGuides?: string[];
  affiliateCategories?: string[];
  conditions?: Conditions;
  core?: boolean;
  countryOverrides?: Record<string, CountryOverrideBlock>;
};

/** Resolved document for a given origin: base document + country overrides applied. */
export type ResolvedDocument = DocumentEntry & {
  /** Merged whoToContact (base + country-specific). */
  resolvedWhoToContact?: ContactItem[];
  /** Country-specific note to show when origin is set (e.g. SA, US, India). */
  countryNote?: string;
};

/** Checklist item with status and priority from rules + resolved document details. */
export type DocumentChecklistItem = ResolvedDocument & {
  status: DocumentStatus;
  priority: DocumentPriority;
};
