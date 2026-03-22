import {
  loadDocumentReadinessDatasets,
  loadDocumentReadinessMeta,
  loadDocumentReadinessExamples,
  loadDocumentReadinessFaq,
} from "@/src/lib/tools/loadDocumentReadinessContent";
import type { DocumentReadinessDatasets } from "@/src/lib/tools/loadDocumentReadinessContent";

export type { DocumentReadinessDatasets } from "@/src/lib/tools/loadDocumentReadinessContent";

/**
 * Loads the full document-readiness dataset (documents, rules, scoring, pack outline).
 * Use this when you need the dataset for building checklists and resolving details.
 */
export function getDocumentDataset(): DocumentReadinessDatasets | null {
  return loadDocumentReadinessDatasets();
}

export {
  loadDocumentReadinessMeta,
  loadDocumentReadinessExamples,
  loadDocumentReadinessFaq,
};
