/**
 * Prefer these helpers when wiring internal links from content arrays so hidden / coming-soon
 * routes never ship as normal anchors. See also `route-registry` + `liveQuickLinks` for search UI.
 */
export {
  isRouteLive,
  filterLiveInternalLinks,
  getRouteStatus,
  listNonLiveHrefs,
} from "@/src/lib/routes/routeStatus";
