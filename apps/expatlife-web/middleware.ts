import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import {
  DEV_SIMULATE_LIVE_COOKIE,
  DEV_SIMULATE_LIVE_HEADER,
} from "@/src/lib/publishing/devSimulateLive";
import {
  isNetherlandsCitiesHubPath,
  isNetherlandsCitiesHubPubliclyVisible,
} from "@/src/lib/cities-overview/citiesHubPublishing";
import {
  findLiveToolByNormalizedRoute,
  findMovingGuideByNormalizedPath,
  findMovingGuideBySlug,
} from "@/src/lib/publishing/registryPublishing";
import countryIndex from "@/src/content/countries/index.json";
import { MOVING_TOOL_FROM_SLUGS } from "@/src/data/site/route-registry";

function attachSimulateProductionCookie(request: NextRequest, response: NextResponse): NextResponse {
  const p = request.nextUrl.searchParams.get("preview");
  if (p === "true") {
    // Not httpOnly so client components that call `isRouteLive` can read the same flag via `document.cookie`.
    response.cookies.set(DEV_SIMULATE_LIVE_COOKIE, "1", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
  } else if (p === "false") {
    response.cookies.delete(DEV_SIMULATE_LIVE_COOKIE);
  }
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const previewParam = request.nextUrl.searchParams.get("preview");
  const isDevelopment = process.env.NODE_ENV === "development";
  /**
   * Enforce `publishDate` like production. On deployed hosts, a prior `?preview=true` visit can persist via cookie.
   * In `next dev`, only an explicit `?preview=true` on the current request applies (ignore cookie) so normal browsing shows all scheduled pages.
   */
  const simulateProductionView =
    previewParam !== "false" &&
    (previewParam === "true" ||
      (!isDevelopment && request.cookies.get(DEV_SIMULATE_LIVE_COOKIE)?.value === "1"));

  const requestHeaders = new Headers(request.headers);
  if (simulateProductionView) {
    requestHeaders.set(DEV_SIMULATE_LIVE_HEADER, "1");
  }

  const visibilityOpts = simulateProductionView ? ({ enforcePublishDates: true } as const) : undefined;

  const runNetherlandsGates = pathname.startsWith("/netherlands");
  if (!runNetherlandsGates) {
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    return attachSimulateProductionCookie(request, res);
  }

  const n = normalizeSitePath(pathname);
  const now = new Date();

  const mg = /^\/netherlands\/moving\/guides\/([^/]+)\/?$/i.exec(pathname);
  if (mg) {
    const slugSeg = mg[1].toLowerCase();
    const reg = findMovingGuideBySlug(slugSeg);
    if (reg && !isPubliclyVisible(reg.publish, reg.publishDate, now, visibilityOpts)) {
      const res = new NextResponse(null, { status: 404 });
      return attachSimulateProductionCookie(request, res);
    }
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    return attachSimulateProductionCookie(request, res);
  }

  const guideByPath = findMovingGuideByNormalizedPath(n);
  if (guideByPath && !isPubliclyVisible(guideByPath.publish, guideByPath.publishDate, now, visibilityOpts)) {
    const res = new NextResponse(null, { status: 404 });
    return attachSimulateProductionCookie(request, res);
  }

  const tool = findLiveToolByNormalizedRoute(n);
  if (tool && !isPubliclyVisible(tool.publish, tool.publishDate, now, visibilityOpts)) {
    const res = new NextResponse(null, { status: 404 });
    return attachSimulateProductionCookie(request, res);
  }

  const originGuideMatch = /^\/netherlands\/moving\/moving-to-netherlands-from\/([a-z0-9-]+)\/?$/i.exec(
    pathname
  );
  const toolFromMatch = new RegExp(
    `^/netherlands/moving/tools/(${MOVING_TOOL_FROM_SLUGS.join("|")})/from/([a-z0-9-]+)/?$`,
    "i"
  ).exec(pathname);
  const gatedOriginSlug = (originGuideMatch?.[1] ?? toolFromMatch?.[2])?.toLowerCase();
  if (gatedOriginSlug) {
    const row = countryIndex.find((c) => c.slug === gatedOriginSlug);
    if (row?.enabled === false) {
      const res = new NextResponse(null, { status: 404 });
      return attachSimulateProductionCookie(request, res);
    }
    if (row && !isPubliclyVisible(row.publish, row.publishDate, now, visibilityOpts)) {
      const res = new NextResponse(null, { status: 404 });
      return attachSimulateProductionCookie(request, res);
    }
  }

  if (
    isNetherlandsCitiesHubPath(n) &&
    !isNetherlandsCitiesHubPubliclyVisible(now, visibilityOpts)
  ) {
    const res = new NextResponse(null, { status: 404 });
    return attachSimulateProductionCookie(request, res);
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  return attachSimulateProductionCookie(request, res);
}

export const config = {
  matcher: [
    /*
     * All pages (not static assets) so `?preview=true` can set the simulate-live cookie from any URL.
     * Netherlands publish gates still run only when pathname starts with /netherlands.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
