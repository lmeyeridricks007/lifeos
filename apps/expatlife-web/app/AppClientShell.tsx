"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@/components/analytics";
import { CookieConsentProvider } from "@/src/components/cookies/CookieConsentProvider";
import { CookieBanner } from "@/src/components/cookies/CookieBanner";
import { ConditionalScript } from "@/src/components/cookies/ConditionalScript";
import { Footer } from "@/components/site/footer";
import { Header } from "@/src/components/site/Header";
import { sitePageCanvasClass } from "@/lib/ui/site-shell-identity";
import { cn } from "@/lib/cn";

const CookiePreferencesModal = dynamic(
  () =>
    import("@/src/components/cookies/CookiePreferencesModal").then((m) => ({
      default: m.CookiePreferencesModal,
    })),
  { ssr: false }
);

const EXTERNAL_COOKIE_CMP =
  typeof process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "string" &&
  process.env.NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL === "true";

type AppClientShellProps = {
  children: ReactNode;
  contentVersion: string;
};

/**
 * Client-only shell: provider + header + footer + cookie UI.
 * Imported by root layout so only one client boundary is referenced from RSC,
 * avoiding "Could not find the module in the React Client Manifest" errors.
 *
 * Vercel Analytics mounts outside cookie consent so page views reach the Vercel dashboard
 * (see https://vercel.com/docs/analytics). GA gtag is in root layout; outbound capture + Speed
 * Insights stay behind `ConditionalScript`.
 */
export function AppClientShell({ children, contentVersion }: AppClientShellProps) {
  return (
    <CookieConsentProvider>
      <VercelAnalytics />
      <ConditionalScript category="analytics">
        <Analytics />
        <SpeedInsights />
      </ConditionalScript>
      <Header />
      <main
        className={cn(
          sitePageCanvasClass,
          "min-h-screen min-w-0 w-full overflow-x-clip py-6 sm:py-8 lg:py-10"
        )}
      >
        {children}
      </main>
      <Footer contentVersion={contentVersion} />
      {!EXTERNAL_COOKIE_CMP ? (
        <>
          <CookieBanner />
          <CookiePreferencesModal />
        </>
      ) : null}
    </CookieConsentProvider>
  );
}
