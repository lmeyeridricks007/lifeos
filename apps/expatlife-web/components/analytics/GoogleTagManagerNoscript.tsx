"use client";

import { GTM_ID, isAnalyticsRuntimeEnabled, shouldLoadGtmScript } from "@/lib/analytics/config";

/**
 * GTM noscript fallback. Placed early in the document (see AppClientShell) with the same
 * consent/runtime gates as {@link GoogleTagManager}.
 */
export function GoogleTagManagerNoscript() {
  if (!isAnalyticsRuntimeEnabled() || !shouldLoadGtmScript()) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
