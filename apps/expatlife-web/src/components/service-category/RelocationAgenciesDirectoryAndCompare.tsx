"use client";

import { useState, useCallback } from "react";
import { RelocationProviderDirectory } from "./RelocationProviderDirectory";
import { ProviderComparisonSection } from "./ProviderComparisonSection";
import type { RelocationProviderRecord } from "@/src/lib/service-category/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";

const MAX_SHORTLIST = 3;

type Props = {
  providers: RelocationProviderRecord[];
  metadata: { sourceModel: string; totalRecords: number; lastChecked: string };
  profileBasePath?: string;
  comparisonProviders: ServiceCategoryProviderCard[];
  comparisonSectionTitle?: string;
  comparisonSectionIntro?: string;
};

export function RelocationAgenciesDirectoryAndCompare({
  providers,
  metadata,
  profileBasePath = "/netherlands/services/relocation-agencies",
  comparisonProviders,
  comparisonSectionTitle,
  comparisonSectionIntro,
}: Props) {
  const [shortlist, setShortlist] = useState<string[]>([]);

  const addToShortlist = useCallback((slug: string) => {
    setShortlist((prev) =>
      prev.includes(slug) || prev.length >= MAX_SHORTLIST ? prev : [...prev, slug]
    );
  }, []);

  const removeFromShortlist = useCallback((slug: string) => {
    setShortlist((prev) => prev.filter((s) => s !== slug));
  }, []);

  const handleShortlistChange = useCallback((next: string[]) => {
    setShortlist(next);
  }, []);

  return (
    <>
      <RelocationProviderDirectory
        providers={providers}
        metadata={metadata}
        profileBasePath={profileBasePath}
        shortlist={shortlist}
        onAddToShortlist={addToShortlist}
        onRemoveFromShortlist={removeFromShortlist}
      />
      <ProviderComparisonSection
        providers={comparisonProviders}
        sectionTitle={comparisonSectionTitle}
        sectionIntro={comparisonSectionIntro}
        shortlist={shortlist}
        onShortlistChange={handleShortlistChange}
      />
    </>
  );
}
