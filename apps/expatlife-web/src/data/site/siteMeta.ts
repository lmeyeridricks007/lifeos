/**
 * Shared site metadata for schema, metadata, and trust copy.
 * Use these constants so Organization/WebSite schema and visible text stay in sync.
 * Do not add founder names, addresses, phone numbers, or social URLs unless they are real and public.
 */
import { getSiteOrigin } from "@/lib/site-origin";

export const SITE_NAME = "ExpatCopilot";
export const SITE_DESCRIPTION =
  "Practical relocation platform for expats moving to the Netherlands: guides, tools, city insights, and service discovery.";
export const SITE_URL = getSiteOrigin();

/** For schema inLanguage. */
export const SITE_LANG = "en";

/** Optional: add when a real logo URL is available. Do not invent. */
export const SITE_LOGO_URL: string | undefined = undefined;

/** Optional: add only real, public social profile URLs. Do not invent. */
export const SITE_SAME_AS: string[] = [];

/** Optional: add only if a real, public contact channel exists (e.g. contact page). */
export const SITE_CONTACT_PAGE = "/contact/";
