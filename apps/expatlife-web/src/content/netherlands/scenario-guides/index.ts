import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";
import { moveToNetherlandsWithoutJob } from "./move-to-netherlands-without-job";
import { movingToNetherlandsWithFamily } from "./moving-to-netherlands-with-family";
import { euVsNonEuMovingToNetherlands } from "./eu-vs-non-eu-moving-to-netherlands";

const guides: ScenarioGuideContent[] = [
  moveToNetherlandsWithoutJob,
  movingToNetherlandsWithFamily,
  euVsNonEuMovingToNetherlands,
];

export function getAllScenarioGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getScenarioGuideBySlug(slug: string): ScenarioGuideContent | null {
  return guides.find((g) => g.slug === slug) ?? null;
}

export function getAllScenarioGuidePaths(): string[] {
  return guides.map((g) => g.path.replace(/\/$/, ""));
}
