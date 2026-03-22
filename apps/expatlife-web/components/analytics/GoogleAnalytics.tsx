"use client";

import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  isAnalyticsRuntimeEnabled,
  shouldLoadDirectGa4,
} from "@/lib/analytics/config";

/** Direct GA4 (gtag.js). Disabled when GTM is enabled — load GA4 tags through the container instead. */
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
