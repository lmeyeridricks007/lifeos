/**
 * Provider interfaces for future OCR, basic insights, and premium insights.
 * Free tier: only deterministic basic insights run; OCR/premium implementations stay unused.
 */

import type { ContractInsightLevel } from "@/src/lib/tools/contract-scanner/architectureTypes";
import type { ContractScanInput, ContractScanResult } from "@/src/lib/tools/contract-scanner/types";

/** Future: pluggable OCR (scanned PDF / images). Not invoked when entitlements.ocrEnabled is false. */
export interface OcrProvider {
  readonly id: string;
  extractTextFromDocument(buffer: Buffer, mimeType: string): Promise<{ text: string; pageCountHint?: number }>;
}

/** Deterministic / rules-based scan (current product). */
export interface ContractInsightProvider {
  readonly level: ContractInsightLevel;
  analyze(input: ContractScanInput): ContractScanResult;
}

/** Future: LLM or enriched explanations. Must not run in free tier until entitled. */
export interface PremiumContractInsightProvider {
  analyzePremium(input: ContractScanInput): Promise<ContractScanResult | null>;
}

/** Placeholder — throws if called; wire a real provider when OCR ships + entitlements allow. */
export const disabledOcrProvider: OcrProvider = {
  id: "disabled",
  async extractTextFromDocument() {
    throw new Error("OCR is not enabled for this session.");
  },
};

/** Placeholder — returns null; free tier never awaits this. */
export const disabledPremiumContractInsightProvider: PremiumContractInsightProvider = {
  async analyzePremium() {
    return null;
  },
};
