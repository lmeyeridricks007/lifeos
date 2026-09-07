/**
 * Trust triad for figure-bearing / cite-ready guides (GEO / AI search citability).
 * Keep linked when refreshing pages that state statutory or indexed amounts.
 */
export const GUIDE_CITABILITY_POLICY_LINKS = [
  {
    label: "Methodology",
    href: "/methodology/",
    status: "live" as const,
    description: "How ExpatCopilot builds guides, tools, and citation tables.",
  },
  {
    label: "Sources",
    href: "/sources/",
    status: "live" as const,
    description: "Primary Dutch authority domains we orient readers toward.",
  },
  {
    label: "Editorial policy",
    href: "/editorial-policy/",
    status: "live" as const,
    description: "Independence, corrections, and how we handle affiliate disclosure.",
  },
] as const;
