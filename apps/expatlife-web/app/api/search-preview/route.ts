import { NextRequest, NextResponse } from "next/server";
import { runSearch } from "@/src/lib/search/runSearch";
import {
  SEARCH_PREVIEW_MAX_QUERY_LENGTH,
  SEARCH_PREVIEW_MIN_QUERY_LENGTH,
  SEARCH_PREVIEW_RESULT_LIMIT,
} from "@/src/lib/search/previewConfig";

export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (raw.length < SEARCH_PREVIEW_MIN_QUERY_LENGTH) {
    return NextResponse.json({ results: [] });
  }
  if (raw.length > SEARCH_PREVIEW_MAX_QUERY_LENGTH) {
    return NextResponse.json({ error: "Query too long" }, { status: 400 });
  }

  const results = runSearch(raw).slice(0, SEARCH_PREVIEW_RESULT_LIMIT);
  return NextResponse.json(
    { results },
    {
      headers: {
        "Cache-Control": "private, max-age=30, stale-while-revalidate=60",
      },
    }
  );
}
