import { NextRequest, NextResponse } from "next/server";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";

export const dynamic = "force-dynamic";

/**
 * Returns placement + resolved provider items for client-side rendering (e.g. after tool results).
 */
export async function GET(request: NextRequest) {
  const placementId = request.nextUrl.searchParams.get("placementId");
  const destination = request.nextUrl.searchParams.get("destination") ?? "netherlands";
  const origin = request.nextUrl.searchParams.get("origin") ?? undefined;

  if (!placementId) {
    return NextResponse.json({ error: "placementId required" }, { status: 400 });
  }

  const data = loadPlacementWithProviders(placementId, destination, origin);
  if (!data) {
    return NextResponse.json({ error: "Placement not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
