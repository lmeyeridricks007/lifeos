"use client";

import dynamic from "next/dynamic";
import type { CardItem } from "./AffiliateCardGrid";

type GridProps = { items: CardItem[] };

const AffiliateCardGridDynamic = dynamic(
  () => import("./AffiliateCardGrid").then((mod) => ({ default: mod.AffiliateCardGrid })),
  {
    ssr: false,
    loading: () => (
      <div
        className="grid min-h-[260px] w-full grid-cols-1 gap-4 sm:grid-cols-2"
        aria-hidden
      >
        <div className="h-44 animate-pulse rounded-2xl bg-copilot-surface-muted/80" />
        <div className="h-44 animate-pulse rounded-2xl bg-copilot-surface-muted/80" />
      </div>
    ),
  }
);

/**
 * Below-the-fold affiliate card grid: defers client chunk + hydration until after first paint.
 */
export function AffiliateCardGridLazy(props: GridProps) {
  return <AffiliateCardGridDynamic {...props} />;
}
