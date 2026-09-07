import { NextRequest } from "next/server";
import {
  cityComparisonProfilesCsvResponse,
  cityComparisonProfilesJsonResponse,
} from "@/src/lib/authority/cityComparisonProfilesDataset";

export const dynamic = "force-dynamic";

/** Editorial city comparison normalized profiles (ExpatCopilot-owned heuristics). */
export function GET(req: NextRequest) {
  const format = (req.nextUrl.searchParams.get("format") || "json").toLowerCase();
  if (format === "csv") return cityComparisonProfilesCsvResponse();
  return cityComparisonProfilesJsonResponse();
}
