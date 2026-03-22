import type { Metadata } from "next";

/**
 * Returns a plain, JSON-serializable copy of metadata so Next.js can safely
 * clone it during accumulateMetadata (avoids "Cannot clone object of unsupported type").
 * Use for any dynamic or layout metadata that might contain non-plain values.
 */
export function cloneSafeMetadata(meta: Metadata): Metadata {
  return JSON.parse(JSON.stringify(meta)) as Metadata;
}
