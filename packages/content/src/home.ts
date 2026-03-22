import type { HomeContent } from "./types";

export async function getHomeContent(): Promise<HomeContent> {
  return {
    redirectTarget: "/netherlands",
    seo: {
      description:
        "Practical relocation platform with guides, tools, and routes for moving to the Netherlands.",
    },
  };
}
