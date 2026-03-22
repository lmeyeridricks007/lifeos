"use client";

import { useCallback, useMemo, useState } from "react";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import { ChooseYourSituationCollapsible } from "@/components/content/ChooseYourSituationCollapsible";
import { PillarScenarioCards } from "@/components/content/PillarScenarioCards";
import { Section } from "@/components/ui/section";

const DEFAULT_SITUATION = {
  stage: "before",
  household: "single",
  job: "none",
  region: "eu",
};

/** Map situation selections to a scenario chip so cards can be pre-filtered */
function situationToChip(selections: Record<string, string>): string {
  const job = selections.job ?? DEFAULT_SITUATION.job;
  const household = selections.household ?? DEFAULT_SITUATION.household;
  if (job === "offer" || job === "employed") return "work";
  if (household === "partner" || household === "kids") return "partner_family";
  return "all";
}

type ChooseYourSituationContent = {
  title: string;
  subtitle?: string;
  inputs: Array<{
    key: string;
    label: string;
    type: "segmented";
    options: Array<{ value: string; label: string }>;
  }>;
};

type PillarScenarioSectionProps = {
  sectionTitle: string;
  chooseYourSituation: ChooseYourSituationContent;
  scenarios: ResolvedScenario[];
  /** Collapsible "Choose your situation" is closed by default on the pillar */
  situationDefaultOpen?: boolean;
};

/**
 * Section 12: scenario cards with optional "Choose your situation" collapsible at the top.
 * When the user changes situation, the scenario cards filter is updated to match.
 */
export function PillarScenarioSection({
  sectionTitle,
  chooseYourSituation,
  scenarios,
  situationDefaultOpen = false,
}: PillarScenarioSectionProps) {
  const [situation, setSituation] = useState<Record<string, string>>(DEFAULT_SITUATION);
  const derivedChip = useMemo(() => situationToChip(situation), [situation]);
  const [selectedChip, setSelectedChip] = useState(derivedChip);

  const handleSituationChange = useCallback((next: Record<string, string>) => {
    setSituation(next);
    setSelectedChip(situationToChip(next));
  }, []);

  return (
    <Section contained={false}>
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
        <h2 id="scenarios" className="text-2xl font-semibold tracking-tight text-slate-900">
          {sectionTitle}
        </h2>
        <div className="mt-4 space-y-6">
          <ChooseYourSituationCollapsible
          title={chooseYourSituation.title}
          subtitle={chooseYourSituation.subtitle}
          inputs={chooseYourSituation.inputs}
          value={situation}
          onChange={handleSituationChange}
          defaultOpen={situationDefaultOpen}
        />
        <PillarScenarioCards
          scenarios={scenarios}
          selectedChip={selectedChip}
          onChipChange={setSelectedChip}
        />
        </div>
      </div>
    </Section>
  );
}
