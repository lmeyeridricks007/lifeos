import type { Metadata } from "next";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import { canonicalizeMetadataUrls } from "@/lib/seo/site-url";

/**
 * Returns a plain, JSON-serializable copy of metadata so Next.js can safely
 * clone it during accumulateMetadata (avoids "Cannot clone object of unsupported type").
 * Use for any dynamic or layout metadata that might contain non-plain values.
 *
 * Also normalizes canonical / Open Graph URLs to the site slash convention
 * (no trailing slash except `/`).
 */
export function cloneSafeMetadata(meta: Metadata): Metadata {
  const plain = JSON.parse(JSON.stringify(meta)) as Metadata;
  return canonicalizeMetadataUrls(plain as Record<string, unknown>, getSeoPublicOrigin()) as Metadata;
}
