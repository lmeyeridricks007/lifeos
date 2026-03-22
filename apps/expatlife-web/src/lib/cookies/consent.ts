/**
 * Client-side cookie consent persistence (GDPR-aware MVP).
 * Storage: `localStorage` key `cookie_consent_v1` (see `CONSENT_STORAGE_KEY`).
 *
 * Optional third-party CMP: set `NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL=true` and
 * `NEXT_PUBLIC_EXTERNAL_COOKIE_CMP_SCRIPT_URL` (see `CookieConsentProvider`). The custom banner is disabled;
 * inject analytics only via that CMP.
 *
 * Do not rely on this module during RSC render for HTML that must match the client — read in `useEffect`.
 */

import type { CookieConsentState } from "./consent-types";

export const CONSENT_STORAGE_KEY = "cookie_consent_v1";

export type CookieConsentRecordV1 = {
  version: 1;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: number;
};

function isConsentRecordV1(value: unknown): value is CookieConsentRecordV1 {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    o.version === 1 &&
    o.necessary === true &&
    typeof o.analytics === "boolean" &&
    typeof o.marketing === "boolean" &&
    typeof o.preferences === "boolean" &&
    typeof o.timestamp === "number"
  );
}

/** Read parsed consent from localStorage; null if missing or invalid. */
export function getConsent(): CookieConsentRecordV1 | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isConsentRecordV1(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** True once the user has saved any choice (accept / reject / custom). */
export function hasConsent(): boolean {
  return getConsent() !== null;
}

export function canLoadAnalytics(): boolean {
  return getConsent()?.analytics === true;
}

export function canLoadMarketing(): boolean {
  return getConsent()?.marketing === true;
}

export function canLoadPreferencesCookies(): boolean {
  return getConsent()?.preferences === true;
}

export function recordToState(record: CookieConsentRecordV1): CookieConsentState {
  return {
    necessary: true,
    analytics: record.analytics,
    marketing: record.marketing,
    preferences: record.preferences,
    consentVersion: record.version,
    consentTimestamp: record.timestamp,
  };
}

export function persistConsent(prefs: {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}): CookieConsentRecordV1 {
  const record: CookieConsentRecordV1 = {
    version: 1,
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
    preferences: prefs.preferences,
    timestamp: Date.now(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* private mode / blocked storage — consent cannot persist this session */
  }
  return record;
}

export const COOKIE_POLICY_PATH = "/cookies/";
export const PRIVACY_POLICY_PATH = "/privacy/";
