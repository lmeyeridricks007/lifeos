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

function attachDevSimulateLiveCookie(request: NextRequest, response: NextResponse): NextResponse {
  if (process.env.NODE_ENV !== "development") return response;
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
  const devSimulateLive =
    process.env.NODE_ENV === "development" &&
    previewParam !== "false" &&
    (previewParam === "true" || request.cookies.get(DEV_SIMULATE_LIVE_COOKIE)?.value === "1");

  const requestHeaders = new Headers(request.headers);
  if (devSimulateLive) {
    requestHeaders.set(DEV_SIMULATE_LIVE_HEADER, "1");
  }

  const visibilityOpts = devSimulateLive ? ({ enforcePublishDates: true } as const) : undefined;

  const runNetherlandsGates = pathname.startsWith("/netherlands");
  if (!runNetherlandsGates) {
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    return attachDevSimulateLiveCookie(request, res);
  }

  const n = normalizeSitePath(pathname);
  const now = new Date();

  const mg = /^\/netherlands\/moving\/guides\/([^/]+)\/?$/i.exec(pathname);
  if (mg) {
    const slugSeg = mg[1].toLowerCase();
    const reg = findMovingGuideBySlug(slugSeg);
    if (reg && !isPubliclyVisible(reg.publish, reg.publishDate, now, visibilityOpts)) {
      const res = new NextResponse(null, { status: 404 });
      return attachDevSimulateLiveCookie(request, res);
    }
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    return attachDevSimulateLiveCookie(request, res);
  }

  const guideByPath = findMovingGuideByNormalizedPath(n);
  if (guideByPath && !isPubliclyVisible(guideByPath.publish, guideByPath.publishDate, now, visibilityOpts)) {
    const res = new NextResponse(null, { status: 404 });
    return attachDevSimulateLiveCookie(request, res);
  }

  const tool = findLiveToolByNormalizedRoute(n);
  if (tool && !isPubliclyVisible(tool.publish, tool.publishDate, now, visibilityOpts)) {
    const res = new NextResponse(null, { status: 404 });
    return attachDevSimulateLiveCookie(request, res);
  }

  if (
    isNetherlandsCitiesHubPath(n) &&
    !isNetherlandsCitiesHubPubliclyVisible(now, visibilityOpts)
  ) {
    const res = new NextResponse(null, { status: 404 });
    return attachDevSimulateLiveCookie(request, res);
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  return attachDevSimulateLiveCookie(request, res);
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
