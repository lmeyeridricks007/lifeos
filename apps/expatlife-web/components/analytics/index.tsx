"use client";

import { Suspense } from "react";
import { AnalyticsRouteTracker } from "@/components/analytics/AnalyticsRouteTracker";
import { GoogleAnalyticsScripts } from "@/components/analytics/GoogleAnalytics";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";

/**
 * Consent-gated analytics: GA4/GTM, SPA page_view helpers, PostHog (see `lib/analytics`).
 * `@vercel/analytics` is mounted in `AppClientShell` outside this gate so Vercel Web Analytics can collect page views.
 */
export function Analytics() {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalyticsScripts />
      <Suspense fallback={null}>
        <AnalyticsRouteTracker />
      </Suspense>
    </>
  );
}
