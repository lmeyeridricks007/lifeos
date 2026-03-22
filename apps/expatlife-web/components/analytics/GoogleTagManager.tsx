"use client";

import Script from "next/script";
import { GTM_ID, isAnalyticsRuntimeEnabled, shouldLoadGtmScript } from "@/lib/analytics/config";

/**
 * GTM container snippet (head). Configure GA4 / tags inside GTM; use a Custom Event trigger on `page_view`
 * if you push SPA navigations from `lib/analytics/ga.ts`.
 */
export function GoogleTagManager() {
  if (!isAnalyticsRuntimeEnabled() || !shouldLoadGtmScript()) return null;

  return (
    <Script
      id="gtm-base"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
        `.trim(),
      }}
    />
  );
}
