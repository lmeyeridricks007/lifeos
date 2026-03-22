"use client";

import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CookieConsentState } from "@/src/lib/cookies/consent-types";
import {
  getConsent,
  persistConsent,
  recordToState,
  type CookieConsentRecordV1,
} from "@/src/lib/cookies/consent";

const EXTERNAL_CMP =
  typeof process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "string" &&
  process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "true";
const EXTERNAL_CMP_SCRIPT_URL =
  process.env.NEXT_PUBLIC_EXTERNAL_COOKIE_CMP_SCRIPT_URL?.trim() ?? "";

type CookieConsentContextValue = {
  consent: CookieConsentState | null;
  /** Bumps when consent is read or saved — drives ConsentScriptGate. */
  consentRevision: number;
  /** True only after client has read localStorage (avoids hydration mismatch and banner flicker). */
  storageReady: boolean;
  showBanner: boolean;
  showPreferencesModal: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  savePreferences: (prefs: {
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  }) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

type CookieConsentProviderProps = {
  children: ReactNode;
};

/**
 * Local consent: `localStorage` key `cookie_consent_v1` via `@/src/lib/cookies/consent`.
 * External CMP: set `NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL=true` and optional `NEXT_PUBLIC_EXTERNAL_COOKIE_CMP_SCRIPT_URL`.
 */
export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  if (EXTERNAL_CMP) {
    return <ExternalCmpShell>{children}</ExternalCmpShell>;
  }
  return <LocalCookieConsentProvider>{children}</LocalCookieConsentProvider>;
}

function ExternalCmpShell({ children }: { children: ReactNode }) {
  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent: null,
      consentRevision: 0,
      storageReady: true,
      showBanner: false,
      showPreferencesModal: false,
      acceptAll: () => {},
      rejectAll: () => {},
      openPreferences: () => {},
      closePreferences: () => {},
      savePreferences: () => {},
    }),
    []
  );

  return (
    <>
      {EXTERNAL_CMP_SCRIPT_URL ? (
        <Script
          id="external-cookie-cmp"
          src={EXTERNAL_CMP_SCRIPT_URL}
          strategy="afterInteractive"
        />
      ) : null}
      <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
    </>
  );
}

function LocalCookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const [consentRevision, setConsentRevision] = useState(0);

  const applyRecord = useCallback((record: CookieConsentRecordV1) => {
    setConsent(recordToState(record));
    setConsentRevision((r) => r + 1);
    setShowBanner(false);
  }, []);

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      applyRecord(existing);
    } else {
      setShowBanner(true);
    }
    setStorageReady(true);
  }, [applyRecord]);

  const acceptAll = useCallback(() => {
    const r = persistConsent({ analytics: true, marketing: true, preferences: true });
    applyRecord(r);
    setShowPreferencesModal(false);
  }, [applyRecord]);

  const rejectAll = useCallback(() => {
    const r = persistConsent({ analytics: false, marketing: false, preferences: false });
    applyRecord(r);
    setShowPreferencesModal(false);
  }, [applyRecord]);

  const openPreferences = useCallback(() => {
    setShowPreferencesModal(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferencesModal(false);
    if (!getConsent()) {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = useCallback(
    (prefs: { analytics: boolean; marketing: boolean; preferences: boolean }) => {
      const r = persistConsent(prefs);
      applyRecord(r);
      setShowPreferencesModal(false);
    },
    [applyRecord]
  );

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      consentRevision,
      storageReady,
      showBanner: storageReady && showBanner,
      showPreferencesModal,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      savePreferences,
    }),
    [
      consent,
      consentRevision,
      storageReady,
      showBanner,
      showPreferencesModal,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      savePreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}
