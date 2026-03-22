"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics/track";

/**
 * Fires `page_view` on client navigations (App Router). Initial HTML load is not double-counted:
 * this runs only after hydration; GA4 is configured with `send_page_view: false` for direct gtag.
 */
export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString() ?? "";

  useEffect(() => {
    const path = searchString ? `${pathname}?${searchString}` : pathname;
    trackPageView(path || "/");
  }, [pathname, searchString]);

  return null;
}
