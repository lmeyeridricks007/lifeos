import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import {
  findLiveToolByNormalizedRoute,
  findMovingGuideByNormalizedPath,
  findMovingGuideBySlug,
} from "@/src/lib/publishing/registryPublishing";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const n = normalizeSitePath(pathname);
  const now = new Date();

  const mg = /^\/netherlands\/moving\/guides\/([^/]+)\/?$/i.exec(pathname);
  if (mg) {
    const slugSeg = mg[1].toLowerCase();
    const reg = findMovingGuideBySlug(slugSeg);
    if (reg && !isPubliclyVisible(reg.publish, reg.publishDate, now)) {
      return new NextResponse(null, { status: 404 });
    }
    return NextResponse.next();
  }

  const guideByPath = findMovingGuideByNormalizedPath(n);
  if (guideByPath && !isPubliclyVisible(guideByPath.publish, guideByPath.publishDate, now)) {
    return new NextResponse(null, { status: 404 });
  }

  const tool = findLiveToolByNormalizedRoute(n);
  if (tool && !isPubliclyVisible(tool.publish, tool.publishDate, now)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/netherlands/:path*"],
};
