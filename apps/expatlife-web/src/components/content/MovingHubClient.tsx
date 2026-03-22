"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { NlMovingHub, RecommendationsJson, EntityRef } from "@expatlife/content/recommend";
import { recommend } from "@expatlife/content/recommend";
import { ChooseYourSituationCollapsible } from "@/components/content/ChooseYourSituationCollapsible";
import { CardLink } from "@/components/ui/card-link";
import { Section } from "@/components/ui/section";
import { getIcon } from "@/lib/iconMap";

const STORAGE_KEY = "expatlife-moving-situation";
const PARAM_KEYS = ["stage", "household", "job", "region"] as const;

type Selections = { stage: string; household: string; job: string; region: string };

const defaultSelections: Selections = {
  stage: "before",
  household: "single",
  job: "none",
  region: "eu",
};

function getSelectionsFromParams(params: { get: (k: string) => string | null }): Selections {
  return {
    stage: params.get("stage") ?? defaultSelections.stage,
    household: params.get("household") ?? defaultSelections.household,
    job: params.get("job") ?? defaultSelections.job,
    region: params.get("region") ?? defaultSelections.region,
  };
}

function selectionsToParams(sel: Selections): URLSearchParams {
  const p = new URLSearchParams();
  (Object.entries(sel) as [keyof Selections, string][]).forEach(([k, v]) => {
    if (v && v !== defaultSelections[k]) p.set(k, v);
  });
  return p;
}

type MovingHubClientProps = {
  hub: NlMovingHub;
  recommendations: RecommendationsJson;
  defaultPages: EntityRef[];
  defaultTools: EntityRef[];
  chooseSectionId?: string;
  recommendedSectionId?: string;
};

export function MovingHubClient({
  hub,
  recommendations,
  defaultPages,
  defaultTools,
  chooseSectionId = "choose-your-situation",
  recommendedSectionId = "recommended-for-your-situation",
}: MovingHubClientProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selections, setSelections] = useState<Selections>(defaultSelections);

  useEffect(() => {
    const fromUrl = getSelectionsFromParams(searchParams);
    setSelections(fromUrl);
  }, [searchParams]);

  const persist = useCallback(
    (next: Selections) => {
      setSelections(next);
      const params = selectionsToParams(next);
      const qs = params.toString();
      const path = qs ? `${pathname}?${qs}` : pathname;
      if (typeof window !== "undefined") {
        try {
          window.history.replaceState(null, "", path);
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
      }
    },
    [pathname]
  );

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage?.getItem(STORAGE_KEY) : null;
    if (stored && !searchParams.toString()) {
      try {
        const parsed = JSON.parse(stored) as Selections;
        if (parsed.stage && parsed.household && parsed.job && parsed.region) persist(parsed);
      } catch {
        // ignore
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount to restore from localStorage
  }, []);

  const { pages, tools, basedOn } = useMemo(
    () => recommend(selections, recommendations),
    [selections, recommendations]
  );

  const displayPages = pages.length > 0 ? pages : defaultPages;
  const displayTools = tools.length > 0 ? tools : defaultTools;

  const section = hub.sections.recommended;

  return (
    <>
      <Section id={chooseSectionId}>
        <ChooseYourSituationCollapsible
          title={hub.chooseYourSituation.title}
          subtitle={hub.chooseYourSituation.subtitle}
          inputs={hub.chooseYourSituation.inputs}
          value={selections}
          onChange={(next) => persist(next as Selections)}
          defaultOpen={true}
        />
      </Section>

      <Section id={recommendedSectionId} title={section.title} subtitle={section.subtitle}>
        {basedOn.length > 0 && (
          <p className="mb-4 text-sm text-slate-600">
            Based on: {basedOn.map((r) => r.replace(/^Because you selected\s+/i, "")).join("; ")}
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayPages.map((ref) => {
            const Icon = getIcon(ref.icon);
            return (
              <CardLink
                key={ref.href}
                href={ref.href}
                title={ref.title}
                description={ref.description}
                icon={<Icon className="h-4 w-4" />}
                badge={ref.type === "guide" || ref.type === "hub" ? "Guide" : undefined}
                status={ref.status}
              />
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {displayTools.map((ref) => {
            const Icon = getIcon(ref.icon);
            return (
              <CardLink
                key={ref.href}
                href={ref.href}
                title={ref.title}
                description={ref.description}
                icon={<Icon className="h-4 w-4" />}
                badge="Tool"
              />
            );
          })}
        </div>
      </Section>
    </>
  );
}
