"use client";

import Link from "next/link";
import { useCookieConsent } from "@/src/components/cookies/CookieConsentProvider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { COOKIE_POLICY_PATH } from "@/src/lib/cookies/consent";
import { BANNER } from "./cookie-content";

export function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferences } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[110] max-h-[min(52vh,22rem)] overflow-y-auto overscroll-contain border-t border-slate-200/80 bg-white/95 p-4 pb-safe shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm md:max-h-none md:border-t-0 md:bg-transparent md:p-6 md:pb-6 md:shadow-none md:backdrop-blur-none"
    >
      <Container className="max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{BANNER.title}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {BANNER.body}{" "}
            <Link
              href={COOKIE_POLICY_PATH}
              className="font-medium text-brand-600 underline-offset-2 hover:text-brand-700 hover:underline"
            >
              {BANNER.cookiePolicy}
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              type="button"
              variant="primary"
              onClick={acceptAll}
              className="order-1 sm:order-1"
              aria-label="Accept all cookies"
            >
              {BANNER.acceptAll}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={rejectAll}
              className="order-2 sm:order-2"
              aria-label="Reject non-essential cookies"
            >
              {BANNER.rejectNonEssential}
            </Button>
            <button
              type="button"
              onClick={openPreferences}
              className="order-3 min-h-[44px] rounded-lg px-1 text-sm font-medium text-brand-600 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:order-3"
              aria-label="Manage cookie preferences"
            >
              {BANNER.managePreferences}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
