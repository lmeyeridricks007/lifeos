"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Analytics } from "@/components/analytics";
import { CookieConsentProvider } from "@/src/components/cookies/CookieConsentProvider";
import { CookieBanner } from "@/src/components/cookies/CookieBanner";
import { ConditionalScript } from "@/src/components/cookies/ConditionalScript";
import { Footer } from "@/components/site/footer";
import { Header } from "@/src/components/site/Header";

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
 */
export function AppClientShell({ children, contentVersion }: AppClientShellProps) {
  return (
    <CookieConsentProvider>
      <Header />
      <main className="min-h-screen min-w-0 py-8 sm:py-10 lg:py-12">{children}</main>
      <Footer contentVersion={contentVersion} />
      {!EXTERNAL_COOKIE_CMP ? (
        <>
          <CookieBanner />
          <CookiePreferencesModal />
        </>
      ) : null}
      <ConditionalScript category="analytics">
        <Analytics />
      </ConditionalScript>
    </CookieConsentProvider>
  );
}
