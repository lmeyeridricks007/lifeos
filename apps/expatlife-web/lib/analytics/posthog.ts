import posthog from "posthog-js";
import { POSTHOG_HOST, POSTHOG_KEY, shouldInitPosthog } from "@/lib/analytics/config";
import { canSendPosthog } from "@/lib/analytics/consent";
import { analyticsDebugLog } from "@/lib/analytics/debug-log";

let initialized = false;

function ensurePosthogInitialized(): boolean {
  if (!shouldInitPosthog()) return false;
  if (typeof window === "undefined") return false;
  if (initialized) return true;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    persistence: "localStorage",
    loaded: () => {
      analyticsDebugLog("posthog_loaded");
    },
  });
  initialized = true;
  return true;
}

export function capturePosthog(event: string, properties?: Record<string, unknown>): void {
  if (!canSendPosthog()) return;
  if (!ensurePosthogInitialized()) return;
  analyticsDebugLog("posthog_capture", event, properties);
  posthog.capture(event, properties);
}

export function capturePosthogPageview(properties?: Record<string, unknown>): void {
  if (!canSendPosthog()) return;
  if (!ensurePosthogInitialized()) return;
  analyticsDebugLog("posthog_$pageview", properties);
  posthog.capture("$pageview", properties);
}
