"use client";

import type { ReactNode } from "react";
import {
  ConsentScriptGate,
  type GatedCategory,
} from "@/src/components/cookies/ConsentScriptGate";

export type CookieCategory = GatedCategory;

type ConditionalScriptProps = {
  category: CookieCategory;
  children: ReactNode;
};

/**
 * Renders children (e.g. analytics script) only when the user has given consent for the given category.
 * Wraps ConsentScriptGate (localStorage consent via `@/src/lib/cookies/consent`). Client-only.
 */
export function ConditionalScript({ category, children }: ConditionalScriptProps) {
  return (
    <ConsentScriptGate category={category}>
      {children}
    </ConsentScriptGate>
  );
}
