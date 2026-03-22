"use client";

import { useCookieConsent } from "@/src/components/cookies/CookieConsentProvider";

type CookieSettingsLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CookieSettingsLink({ className, children }: CookieSettingsLinkProps) {
  const { openPreferences } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
      aria-label="Open cookie settings"
    >
      {children ?? "Cookie settings"}
    </button>
  );
}
