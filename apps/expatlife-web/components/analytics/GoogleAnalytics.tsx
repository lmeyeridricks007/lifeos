"use client";

import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  isAnalyticsRuntimeEnabled,
  shouldLoadDirectGa4,
} from "@/lib/analytics/config";

/**
 * Direct GA4 via the Google tag (gtag.js): `googletagmanager.com/gtag/js?id=…`
 * Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (e.g. G-F2H1CJD5ES). Uses `send_page_view: false` so
 * `AnalyticsRouteTracker` avoids duplicate hits on App Router navigations.
 * Disabled when `NEXT_PUBLIC_USE_GTM=true` — then load GA4 inside the GTM container instead.
 */
export function GoogleAnalyticsScripts() {
  if (!isAnalyticsRuntimeEnabled() || !shouldLoadDirectGa4()) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `.trim(),
        }}
      />
    </>
  );
}
