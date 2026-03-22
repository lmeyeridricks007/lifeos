"use client";

import { useState, useCallback } from "react";
import { StartupFacilitatorDirectory } from "./StartupFacilitatorDirectory";
import { ProviderComparisonSection } from "./ProviderComparisonSection";
import type { StartupFacilitatorRecord } from "@/src/lib/service-category/types";
import type { StartupFacilitatorDirectoryMetadata } from "@/src/lib/service-category/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";

const MAX_SHORTLIST = 3;

type Props = {
  facilitators: StartupFacilitatorRecord[];
  metadata: StartupFacilitatorDirectoryMetadata;
  profileBasePath?: string;
  comparisonProviders: ServiceCategoryProviderCard[];
  comparisonSectionTitle?: string;
  comparisonSectionIntro?: string;
};

export function StartupVisaDirectoryAndCompare({
  facilitators,
  metadata,
  profileBasePath = "/netherlands/services/startup-visa-advisors",
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
      <StartupFacilitatorDirectory
        facilitators={facilitators}
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
