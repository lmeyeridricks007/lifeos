import type { HomeContent } from "./types";

export async function getHomeContent(): Promise<HomeContent> {
  return {
    redirectTarget: "/netherlands",
    seo: {
      description:
        "ExpatCopilot helps you plan a Netherlands move with practical guides, calculators, and country-specific routes—start from your situation, not a generic checklist.",
    },
  };
}
