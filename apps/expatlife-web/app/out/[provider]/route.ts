import { NextRequest, NextResponse } from "next/server";
import { getAffiliateProvider } from "@/lib/affiliates";
import { getSiteOrigin } from "@/lib/site-origin";

export const dynamic = "force-dynamic";

/**
 * Redirect /out/[provider] to the provider's affiliate URL.
 * Logs click for analytics (extend with your analytics backend).
 */
type Params = { params: Promise<{ provider: string }> | { provider: string } };

export async function GET(_request: NextRequest, context: Params) {
  const params = await Promise.resolve(context.params);
  const providerId = params?.provider;
  if (providerId == null || providerId === "") {
    return NextResponse.redirect(new URL("/", getSiteOrigin()), 302);
  }
  const provider = await getAffiliateProvider(providerId);

  if (!provider) {
    return NextResponse.redirect(new URL("/", getSiteOrigin()), 302);
  }

  // Log click for analytics (e.g. send to analytics service)
  if (process.env.NODE_ENV === "development") {
    console.info("[affiliate] click", { providerId, destination: provider.affiliateUrl });
  }

  return NextResponse.redirect(provider.affiliateUrl, 302);
}
