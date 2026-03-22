"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCookieConsent } from "@/src/components/cookies/CookieConsentProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { COOKIE_POLICY_PATH } from "@/src/lib/cookies/consent";
import { CATEGORIES as CATEGORY_CONTENT, PREFERENCES_MODAL } from "./cookie-content";

const CATEGORIES = [
  { id: "necessary" as const, ...CATEGORY_CONTENT.necessary, disabled: true },
  { id: "analytics" as const, ...CATEGORY_CONTENT.analytics, disabled: false },
  { id: "marketing" as const, ...CATEGORY_CONTENT.marketing, disabled: false },
  { id: "preferences" as const, ...CATEGORY_CONTENT.preferences, disabled: false },
] as const;

type PreferencesState = {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export function CookiePreferencesModal() {
  const {
    consent,
    showPreferencesModal,
    closePreferences,
    savePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [prefs, setPrefs] = useState<PreferencesState>({
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
    preferences: consent?.preferences ?? false,
  });

  useEffect(() => {
    if (showPreferencesModal) {
      setPrefs({
        analytics: consent?.analytics ?? false,
        marketing: consent?.marketing ?? false,
        preferences: consent?.preferences ?? false,
      });
    }
  }, [showPreferencesModal, consent]);

  const handleSave = useCallback(() => {
    savePreferences(prefs);
  }, [prefs, savePreferences]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    },
    [closePreferences]
  );

  useEffect(() => {
    if (!showPreferencesModal) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.removeEventListener("keydown", trap);
      previouslyFocused?.focus();
    };
  }, [showPreferencesModal]);

  if (!showPreferencesModal) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-desc"
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
    >
      <div
        className="absolute inset-0 bg-slate-900/50"
        aria-hidden
        onClick={closePreferences}
      />
      <div
        ref={panelRef}
        className="relative max-h-[85vh] w-full overflow-y-auto rounded-t-2xl border border-slate-200 bg-white shadow-xl sm:max-h-[90vh] sm:max-w-lg sm:rounded-2xl"
      >
        <div className="p-6">
          <h2 id="cookie-preferences-title" className="text-xl font-semibold text-slate-900">
            {PREFERENCES_MODAL.title}
          </h2>
          <p id="cookie-preferences-desc" className="mt-2 text-sm text-slate-600">
            {PREFERENCES_MODAL.description}{" "}
            <Link
              href={COOKIE_POLICY_PATH}
              className="font-medium text-brand-600 underline-offset-2 hover:text-brand-700 hover:underline"
            >
              {PREFERENCES_MODAL.cookiePolicyLink}
            </Link>
          </p>

          <ul className="mt-6 space-y-4">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.id}
                className={cn(
                  "rounded-xl border p-4",
                  cat.disabled ? "border-slate-200 bg-slate-50" : "border-slate-200 bg-white"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-slate-900">{cat.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-600">{cat.description}</p>
                  </div>
                  {cat.id === "necessary" ? (
                    <span className="shrink-0 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {PREFERENCES_MODAL.necessaryLabel}
                    </span>
                  ) : (
                    <button
                      type="button"
                      role="switch"
                      aria-checked={prefs[cat.id]}
                      onClick={() =>
                        setPrefs((s) => ({ ...s, [cat.id]: !s[cat.id] }))
                      }
                      className={cn(
                        "relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                        prefs[cat.id] ? "bg-brand-600" : "bg-slate-200"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform",
                          prefs[cat.id] ? "translate-x-5" : "translate-x-0.5"
                        )}
                      />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="button" variant="primary" onClick={handleSave}>
              {PREFERENCES_MODAL.savePreferences}
            </Button>
            <Button type="button" variant="secondary" onClick={acceptAll}>
              {PREFERENCES_MODAL.acceptAll}
            </Button>
            <Button type="button" variant="secondary" onClick={rejectAll}>
              {PREFERENCES_MODAL.rejectAll}
            </Button>
            <Button type="button" variant="ghost" onClick={closePreferences}>
              {PREFERENCES_MODAL.cancel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
