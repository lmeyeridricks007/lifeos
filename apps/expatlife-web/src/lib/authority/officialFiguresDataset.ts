import {
  OFFICIAL_FIGURES_AS_OF_LABEL,
  OFFICIAL_FIGURES_LAST_REVIEWED,
  OFFICIAL_FIGURES_PATH,
  OFFICIAL_FIGURES_TAX_YEAR,
  officialFiguresDisclaimer,
  officialFiguresRows,
  officialFiguresSources,
} from "@/src/components/official-figures/officialFigures2026";
import { csvDownloadResponse, jsonDownloadResponse, toCsv } from "@/src/lib/authority/downloadHelpers";

export function buildOfficialFiguresDataset() {
  return {
    meta: {
      id: "expatcopilot-official-figures",
      title: `Netherlands official figures ${OFFICIAL_FIGURES_TAX_YEAR}`,
      path: OFFICIAL_FIGURES_PATH,
      asOfLabel: OFFICIAL_FIGURES_AS_OF_LABEL,
      lastReviewed: OFFICIAL_FIGURES_LAST_REVIEWED,
      taxYear: OFFICIAL_FIGURES_TAX_YEAR,
      disclaimer: officialFiguresDisclaimer,
      note: "Curated citation table mirroring amounts used across ExpatCopilot tools. Verify live official pages before decisions. Not original survey research.",
    },
    sources: officialFiguresSources,
    rows: officialFiguresRows.map((r) => ({
      id: r.id,
      topic: r.topic,
      figure: r.figure,
      effective: r.effective,
      notes: r.notes,
      sourceLabel: r.sourceLabel,
      sourceHref: r.sourceHref,
      relatedGuideHref: r.relatedGuideHref ?? null,
    })),
  };
}

export function officialFiguresJsonResponse(): Response {
  return jsonDownloadResponse(buildOfficialFiguresDataset(), `expatcopilot-official-figures-${OFFICIAL_FIGURES_TAX_YEAR}.json`);
}

export function officialFiguresCsvResponse(): Response {
  const rows = officialFiguresRows.map((r) => [
    r.id,
    r.topic,
    r.figure,
    r.effective,
    r.notes,
    r.sourceLabel,
    r.sourceHref,
    r.relatedGuideHref ?? "",
  ]);
  const csv = toCsv(
    ["id", "topic", "figure", "effective", "notes", "source_label", "source_href", "related_guide_href"],
    rows
  );
  return csvDownloadResponse(csv, `expatcopilot-official-figures-${OFFICIAL_FIGURES_TAX_YEAR}.csv`);
}
