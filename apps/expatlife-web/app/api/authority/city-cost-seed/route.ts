import { NextRequest } from "next/server";
import { cityCostSeedCsvResponse, cityCostSeedJsonResponse } from "@/src/lib/authority/cityCostSeedDataset";

export const dynamic = "force-dynamic";

/** Editorial city cost planning seed (ExpatCopilot-owned estimates). */
export function GET(req: NextRequest) {
  const format = (req.nextUrl.searchParams.get("format") || "json").toLowerCase();
  if (format === "csv") return cityCostSeedCsvResponse();
  return cityCostSeedJsonResponse();
}
