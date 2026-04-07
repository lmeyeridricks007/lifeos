import { PillarScenarioSection } from "@/components/content/PillarScenarioSection";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import type { PillarSectionsJson } from "@expatlife/content";

export type ScenarioSelectorProps = {
  sectionTitle: string;
  chooseYourSituation: PillarSectionsJson["chooseYourSituation"];
  scenarios: ResolvedScenario[];
};

/**
 * Scenario + persona filter (client). Reuses existing pillar behavior.
 */
export function ScenarioSelector({ sectionTitle, chooseYourSituation, scenarios }: ScenarioSelectorProps) {
  return (
    <PillarScenarioSection
      sectionTitle={sectionTitle}
      chooseYourSituation={chooseYourSituation}
      scenarios={scenarios}
      situationDefaultOpen={false}
    />
  );
}
