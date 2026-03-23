"use client";

import { OutboundClickCapture } from "@/components/analytics/OutboundClickCapture";

/**
 * Consent-gated client analytics helpers. GA4 gtag is in `app/layout.tsx`.
 * `@vercel/analytics` mounts in `AppClientShell` outside this gate.
 */
export function Analytics() {
  return <OutboundClickCapture />;
}
