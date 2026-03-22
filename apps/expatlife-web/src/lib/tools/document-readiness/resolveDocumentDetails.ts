import type { DocumentEntry, ResolvedDocument } from "./types";
import { applyCountryOverrides } from "./applyCountryOverrides";

/**
 * Returns the resolved document for a given id and origin (country overrides applied).
 */
export function resolveDocumentDetails(
  documentId: string,
  documents: DocumentEntry[],
  originCountrySlug: string | null
): ResolvedDocument | null {
  const doc = documents.find((d) => d.id === documentId);
  if (!doc) return null;
  return applyCountryOverrides(doc, originCountrySlug);
}
