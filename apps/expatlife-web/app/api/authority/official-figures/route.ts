import { NextRequest } from "next/server";
import { officialFiguresCsvResponse, officialFiguresJsonResponse } from "@/src/lib/authority/officialFiguresDataset";

export const dynamic = "force-dynamic";

/** Machine-readable mirror of the Official Figures citation table. */
export function GET(req: NextRequest) {
  const format = (req.nextUrl.searchParams.get("format") || "json").toLowerCase();
  if (format === "csv") return officialFiguresCsvResponse();
  return officialFiguresJsonResponse();
}
