"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  contextualizeUtilitiesServiceGroups,
  type UtilitiesServicesServiceGroup,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { parseUtilitiesServicesSearchParams } from "@/src/lib/tools/utilities-services/shareState";
import { UtilitiesServicesRecommendedSections } from "./UtilitiesServicesRecommendedSections";

export function UtilitiesServicesRecommendedDynamic({
  baseGroups,
}: {
  baseGroups: UtilitiesServicesServiceGroup[];
}) {
  const searchParams = useSearchParams();
  const input = useMemo(() => {
    const qs = searchParams?.toString() ?? "";
    if (!qs) return null;
    return parseUtilitiesServicesSearchParams(`?${qs}`);
  }, [searchParams]);

  const groups = useMemo(
    () => contextualizeUtilitiesServiceGroups(baseGroups, input),
    [baseGroups, input]
  );

  return (
    <div className="space-y-3">
      {input ? (
        <p className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
          Shortlists react to your shared calculator URL. Change inputs and recalculate to refresh what appears first.
        </p>
      ) : (
        <p className="text-sm text-copilot-text-secondary">
          Load a preset from <strong className="text-copilot-text-primary">Worked examples</strong> or run the calculator — when the URL
          includes saved inputs, we may move internet/TV and mobile up, surface home insurance when you tick those lines, or push retail
          energy offers lower when your rent likely bundles utilities.
        </p>
      )}
      <UtilitiesServicesRecommendedSections groups={groups} />
    </div>
  );
}
