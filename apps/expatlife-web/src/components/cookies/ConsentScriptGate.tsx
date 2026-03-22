"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useCookieConsent } from "@/src/components/cookies/CookieConsentProvider";
import {
  hasAnalyticsConsent,
  hasMarketingConsent,
  hasPreferencesConsent,
} from "@/src/lib/cookies/consent-helpers";

const EXTERNAL_CMP =
  typeof process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "string" &&
  process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "true";

export type GatedCategory = "analytics" | "preferences" | "marketing";

type ConsentScriptGateProps = {
  category: GatedCategory;
  children: ReactNode;
};

function hasConsentFor(category: GatedCategory): boolean {
  switch (category) {
    case "analytics":
      return hasAnalyticsConsent();
    case "marketing":
      return hasMarketingConsent();
    case "preferences":
      return hasPreferencesConsent();
    default:
      return false;
  }
}

/**
 * Renders children only when the user has consented for `category` (localStorage record).
 * With `NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL=true`, this gate stays closed so third-party CMPs own script injection.
 */
export function ConsentScriptGate({ category, children }: ConsentScriptGateProps) {
  const { consentRevision } = useCookieConsent();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (EXTERNAL_CMP) {
      setAllowed(false);
      return;
    }
    setAllowed(hasConsentFor(category));
  }, [category, consentRevision]);

  if (!allowed) return null;
  return <>{children}</>;
}
