import { ANALYTICS_DEBUG } from "@/lib/analytics/config";

export function analyticsDebugLog(...args: unknown[]) {
  if (ANALYTICS_DEBUG) {
    // eslint-disable-next-line no-console
    console.log("[analytics]", ...args);
  }
}
