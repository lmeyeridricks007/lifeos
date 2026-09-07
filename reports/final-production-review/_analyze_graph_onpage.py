#!/usr/bin/env python3
"""Build link graph, orphans, on-page, explore equity from probe cache. Audit only."""
from __future__ import annotations

import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"

PRIOR_MISSING_H1 = [
    "/netherlands/cities/amsterdam-vs-rotterdam",
    "/netherlands/cities/best-cities-for-expats",
    "/netherlands/cities/best-cities-for-families",
    "/netherlands/cities/best-cities-for-international-professionals",
    "/netherlands/cities/cheapest-cities-for-expats",
    "/netherlands/cities/compare",
    "/netherlands/housing/buy-vs-rent-netherlands",
    "/netherlands/housing/buying-a-house-netherlands",
    "/netherlands/housing/housing-costs-netherlands",
    "/netherlands/housing/mortgages-netherlands-expats",
    "/netherlands/housing/rental-contracts-and-deposits-netherlands",
    "/netherlands/housing/rental-scams-netherlands",
    "/netherlands/jobs/dutch-workplace-culture",
    "/netherlands/life/dating-in-the-netherlands",
    "/netherlands/living/beach-towns-netherlands",
    "/netherlands/money/banking/best-banks-expats",
    "/netherlands/money/banking/how-payments-work",
    "/netherlands/randstad",
    "/netherlands/taxes/30-percent-ruling",
]

COUNTRY_SPOT = [
    "south-africa",
    "india",
    "united-states",
    "united-kingdom",
    "brazil",
    "turkiye",
    "indonesia",
    "australia",
]


def norm(p: str) -> str:
    if not p:
        return "/"
    path = urlparse(p).path if p.startswith("http") else p.split("?")[0]
    path = path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return path


def is_page_path(p: str) -> bool:
    p = norm(p)
    if not p.startswith("/"):
        return False
    if p.startswith("/_next") or p.startswith("/static"):
        return False
    if p.endswith((".js", ".css", ".woff", ".woff2", ".svg", ".png", ".jpg", ".ico", ".webp", ".map")):
        return False
    if p in ("/manifest.webmanifest", "/favicon.ico", "/robots.txt", "/sitemap.xml"):
        return False
    if p.startswith("/brand/") or p.startswith("/images/"):
        return False
    if p.startswith("/api/"):
        return False
    return True


def write_csv(path: Path, rows: list[dict], fields: list[str]):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def main():
    cache = json.loads((OUT / "_probe-cache.json").read_text())
    sitemap_rows = list(csv.DictReader((OUT / "sitemap-validation.csv").open()))
    status_by = {norm(r["url"]): r for r in sitemap_rows}

    indexable = {
        p
        for p, e in cache.items()
        if e.get("final_status") == 200 and not e.get("noindex") and e.get("indexability") == "INDEXABLE"
    }
    # exclude homepage soft-307 from indexable set used for orphan math among sitemap 200s
    indexable = {p for p in indexable if p != "/"}

    # Build edges
    outlinks = defaultdict(list)  # source -> [targets]
    inlinks = defaultdict(list)  # target -> [sources]
    nav_inlinks = defaultdict(set)
    contextual_inlinks = defaultdict(set)

    for src, e in cache.items():
        if e.get("final_status") != 200:
            continue
        hrefs = [norm(h) for h in (e.get("hrefs") or []) if is_page_path(h)]
        nav = set(norm(h) for h in (e.get("nav_hrefs") or []) if is_page_path(h))
        # unique preserve order
        seen = set()
        uniq = []
        for h in hrefs:
            if h == src:
                continue
            if h in seen:
                continue
            seen.add(h)
            uniq.append(h)
        outlinks[src] = uniq
        for t in uniq:
            inlinks[t].append(src)
            if t in nav:
                nav_inlinks[t].add(src)
            else:
                contextual_inlinks[t].add(src)

    # Probe unknown targets' first status lightly via sitemap or mark UNKNOWN
    target_status = {}
    for t in set(inlinks) | set(outlinks) | indexable:
        row = status_by.get(t)
        if row:
            target_status[t] = {
                "first": int(row["first_http_status"] or 0),
                "final": int(row["final_http_status"] or 0),
                "robots": row.get("robots") or "",
                "indexability": row.get("indexability") or "",
            }
        elif t in cache:
            e = cache[t]
            target_status[t] = {
                "first": int(e.get("first_status") or 0),
                "final": int(e.get("final_status") or 0),
                "robots": e.get("robots") or "",
                "indexability": e.get("indexability") or "",
            }
        else:
            target_status[t] = {"first": -1, "final": -1, "robots": "", "indexability": "UNKNOWN"}

    def parent_hub(path: str) -> str:
        parts = [x for x in path.split("/") if x]
        if len(parts) >= 2 and parts[0] == "netherlands":
            if parts[1] in ("moving", "living", "life", "housing", "jobs", "taxes", "money", "visa", "health", "education", "cities", "family", "citizenship", "integration", "leaving", "business"):
                return "/" + "/".join(parts[:2])
            return "/netherlands"
        return "/"

    def cluster(path: str) -> str:
        if "/moving/tools/" in path and "/from/" in path:
            return "country_tool"
        if "/moving/moving-to-netherlands-from/" in path:
            return "origin_guide"
        if path.startswith("/netherlands/health"):
            return "health"
        if path.startswith("/netherlands/education"):
            return "education"
        if path.startswith("/netherlands/living"):
            return "living"
        if path.startswith("/netherlands/life"):
            return "life"
        if path.startswith("/netherlands/cities"):
            return "cities"
        if path.startswith("/netherlands/money") or path.startswith("/netherlands/taxes"):
            return "money_tax"
        if path.startswith("/netherlands/visa") or path.startswith("/netherlands/moving"):
            return "moving_visa"
        return "other"

    # Link graph CSV
    graph_rows = []
    for p in sorted(indexable):
        sources = inlinks.get(p, [])
        unique_sources = sorted(set(sources))
        href_in = len(sources)
        uniq_in = len(unique_sources)
        ctx = len(contextual_inlinks.get(p, set()))
        nav = len(nav_inlinks.get(p, set()))
        outs = outlinks.get(p, [])
        orphan = uniq_in == 0
        near = uniq_in in (1, 2)
        graph_rows.append(
            {
                "url": BASE + p,
                "path": p,
                "href_inlinks": href_in,
                "unique_linking_pages": uniq_in,
                "contextual_inlinks": ctx,
                "navigation_inlinks": nav,
                "outlinks": len(outs),
                "crawl_depth": "" if orphan else "",
                "parent_hub": parent_hub(p),
                "cluster": cluster(p),
                "orphan_status": "ORPHAN" if orphan else ("NEAR_ORPHAN" if near else "LINKED"),
                "near_orphan_status": "YES" if near else "NO",
                "is_country_tool": "YES" if cluster(p) == "country_tool" else "NO",
            }
        )

    # BFS depth from /netherlands
    depth = {}
    from collections import deque

    q = deque([("/netherlands", 0)])
    depth["/netherlands"] = 0
    while q:
        cur, d = q.popleft()
        for nxt in outlinks.get(cur, []):
            if nxt not in depth and nxt in indexable:
                depth[nxt] = d + 1
                q.append((nxt, d + 1))
    for r in graph_rows:
        r["crawl_depth"] = depth.get(r["path"], "")

    write_csv(
        OUT / "production-link-graph.csv",
        graph_rows,
        [
            "url",
            "path",
            "href_inlinks",
            "unique_linking_pages",
            "contextual_inlinks",
            "navigation_inlinks",
            "outlinks",
            "crawl_depth",
            "parent_hub",
            "cluster",
            "orphan_status",
            "near_orphan_status",
            "is_country_tool",
        ],
    )

    orphans = [r for r in graph_rows if r["orphan_status"] == "ORPHAN"]
    near_orphans = [r for r in graph_rows if r["orphan_status"] == "NEAR_ORPHAN"]
    country_orphans = [r for r in orphans if r["is_country_tool"] == "YES"]
    write_csv(
        OUT / "orphan-pages.csv",
        orphans + near_orphans,
        [
            "url",
            "path",
            "orphan_status",
            "unique_linking_pages",
            "cluster",
            "is_country_tool",
            "parent_hub",
            "crawl_depth",
        ],
    )

    # Internal links to redirect / 404 / staged
    edges_redirect = 0
    edges_404 = 0
    edges_staged = 0
    uniq_redir = set()
    uniq_404 = set()
    uniq_staged = set()
    for src, targets in outlinks.items():
        if cache.get(src, {}).get("final_status") != 200:
            continue
        for t in targets:
            st = target_status.get(t, {})
            first = st.get("first", -1)
            final = st.get("final", -1)
            idx = st.get("indexability") or ""
            robots = (st.get("robots") or "").lower()
            if first in (301, 302, 303, 307, 308) or (200 <= (final or 0) < 400 and first >= 300 and first < 400):
                # only count if we know status
                if first >= 300 and first < 400:
                    edges_redirect += 1
                    uniq_redir.add(t)
            if final == 404 or first == 404:
                edges_404 += 1
                uniq_404.add(t)
            if "STAGED" in idx or "noindex" in robots and final == 404:
                edges_staged += 1
                uniq_staged.add(t)
            elif t in {
                "/netherlands/moving/tools/arrival-planner/from/nigeria",
                "/netherlands/moving/tools/arrival-planner/from/philippines",
                "/netherlands/moving/tools/document-readiness/from/nigeria",
                "/netherlands/moving/tools/document-readiness/from/philippines",
                "/netherlands/moving/tools/first-90-days/from/nigeria",
                "/netherlands/moving/tools/first-90-days/from/philippines",
                "/netherlands/moving/tools/moving-checklist/from/nigeria",
                "/netherlands/moving/tools/moving-checklist/from/philippines",
            }:
                edges_staged += 1
                uniq_staged.add(t)

    # Explore equity: approximate as non-nav contextual outlinks that look like cross-cluster discovery
    # Prior audit used "Explore" destinations with high inlink counts.
    # Measure destinations that receive contextual inlinks from many pages (>=50 unique).
    dest_ctx = Counter({t: len(s) for t, s in contextual_inlinks.items() if t in indexable})
    explore_dests = [t for t, c in dest_ctx.items() if c >= 10]
    high400 = [t for t, c in dest_ctx.items() if c >= 400]
    # Also total unique linking pages using all inlinks
    dest_all = Counter({t: len(set(s)) for t, s in inlinks.items() if t in indexable})
    high400_all = [t for t, c in dest_all.items() if c >= 400]

    # Average "explore-like" outlinks: non-nav page outlinks per indexable page
    explore_out_counts = []
    for p in indexable:
        nav = set(norm(h) for h in (cache[p].get("nav_hrefs") or []) if is_page_path(h))
        outs = [t for t in outlinks.get(p, []) if t not in nav and t in indexable]
        explore_out_counts.append(len(outs))

    # On-page CSV
    titles = Counter()
    descs = Counter()
    onpage = []
    for p in sorted(indexable | {"/"}):
        e = cache.get(p) or {}
        if e.get("final_status") not in (200, 307):
            continue
        title = (e.get("title") or "").strip()
        desc = (e.get("description") or "").strip()
        h1c = int(e.get("h1_count") or 0)
        if title:
            titles[title] += 1
        if desc:
            descs[desc] += 1
        onpage.append(
            {
                "url": BASE + p,
                "path": p,
                "final_http_status": e.get("final_status"),
                "title": title,
                "title_length": len(title),
                "h1_count": h1c,
                "h1_text": e.get("h1_text") or "",
                "meta_description": desc,
                "description_length": len(desc),
                "canonical": e.get("canonical") or "",
                "robots": e.get("robots") or "",
                "has_breadcrumb": e.get("has_breadcrumb"),
                "has_structured_data": e.get("has_jsonld"),
                "og_url": e.get("og_url") or "",
                "prior_missing_h1": "YES" if p in PRIOR_MISSING_H1 else "NO",
                "missing_h1": "YES" if h1c == 0 else "NO",
                "multiple_h1": "YES" if h1c > 1 else "NO",
                "missing_title": "YES" if not title else "NO",
                "missing_description": "YES" if not desc else "NO",
                "excessive_title": "YES" if len(title) > 70 else "NO",
            }
        )

    # duplicate flags
    for r in onpage:
        r["duplicate_title"] = "YES" if r["title"] and titles[r["title"]] > 1 else "NO"
        r["duplicate_description"] = "YES" if r["meta_description"] and descs[r["meta_description"]] > 1 else "NO"
        # crude title/H1 mismatch: share few tokens
        t = re.sub(r"[^a-z0-9 ]", " ", (r["title"] or "").lower())
        h = re.sub(r"[^a-z0-9 ]", " ", (r["h1_text"] or "").lower())
        tw, hw = set(t.split()), set(h.split())
        if r["h1_count"] == 1 and tw and hw:
            overlap = len(tw & hw) / max(1, len(hw))
            r["title_h1_mismatch"] = "YES" if overlap < 0.15 else "NO"
        else:
            r["title_h1_mismatch"] = "UNKNOWN" if int(r["h1_count"] or 0) != 1 else "NO"

    write_csv(
        OUT / "onpage-validation.csv",
        onpage,
        [
            "url",
            "path",
            "final_http_status",
            "title",
            "title_length",
            "h1_count",
            "h1_text",
            "meta_description",
            "description_length",
            "canonical",
            "robots",
            "has_breadcrumb",
            "has_structured_data",
            "og_url",
            "prior_missing_h1",
            "missing_h1",
            "multiple_h1",
            "missing_title",
            "missing_description",
            "excessive_title",
            "duplicate_title",
            "duplicate_description",
            "title_h1_mismatch",
        ],
    )

    # Country tool mesh spot-check (from cache)
    mesh_rows = []
    for c in COUNTRY_SPOT:
        path = f"/netherlands/moving/tools/moving-checklist/from/{c}"
        e = cache.get(path) or {}
        hrefs = [norm(h) for h in (e.get("hrefs") or []) if is_page_path(h)]
        parent = f"/netherlands/moving/moving-to-netherlands-from/{c}"
        related = [
            h
            for h in hrefs
            if "/moving/tools/" in h and "/from/" in h and h != path and h.endswith("/" + c)
        ]
        next_steps = [
            h
            for h in hrefs
            if h
            in (
                "/netherlands/moving-to-the-netherlands",
                "/netherlands/visa-checker",
                "/netherlands/moving/tools/first-90-days",
                parent,
            )
            or ("/from/" not in h and "/moving/" in h)
        ]
        mesh_rows.append(
            {
                "country": c,
                "url": BASE + path,
                "status": e.get("final_status"),
                "h1": e.get("h1_text"),
                "parent_country_link": "YES" if parent in hrefs else "NO",
                "related_tools_count": len(set(related)),
                "related_tools": "|".join(sorted(set(related))[:8]),
                "has_next_steps": "YES" if next_steps else "NO",
            }
        )
    write_csv(
        OUT / "_country-tool-mesh-spotcheck.csv",
        mesh_rows,
        [
            "country",
            "url",
            "status",
            "h1",
            "parent_country_link",
            "related_tools_count",
            "related_tools",
            "has_next_steps",
        ],
    )

    summary = {
        "indexable_count": len(indexable),
        "orphans": len(orphans),
        "near_orphans": len(near_orphans),
        "country_tool_orphans": len(country_orphans),
        "edges_to_redirect": edges_redirect,
        "unique_redirect_targets": len(uniq_redir),
        "edges_to_404": edges_404,
        "unique_404_targets": len(uniq_404),
        "edges_to_staged": edges_staged,
        "unique_staged_targets": len(uniq_staged),
        "avg_non_nav_outlinks": round(sum(explore_out_counts) / max(1, len(explore_out_counts)), 2),
        "unique_contextual_destinations_ge10": len(explore_dests),
        "destinations_ge400_contextual": len(high400),
        "destinations_ge400_all_inlinks": len(high400_all),
        "max_unique_inlinks": max(dest_all.values()) if dest_all else 0,
        "missing_h1_indexable": sum(1 for r in onpage if r["path"] in indexable and r["missing_h1"] == "YES"),
        "prior_19_missing_h1_still": sum(
            1 for r in onpage if r["prior_missing_h1"] == "YES" and r["missing_h1"] == "YES"
        ),
        "prior_19_fixed": sum(1 for r in onpage if r["prior_missing_h1"] == "YES" and r["missing_h1"] == "NO"),
        "duplicate_titles": sum(1 for r in onpage if r["path"] in indexable and r["duplicate_title"] == "YES"),
        "duplicate_descriptions": sum(
            1 for r in onpage if r["path"] in indexable and r["duplicate_description"] == "YES"
        ),
        "missing_descriptions": sum(
            1 for r in onpage if r["path"] in indexable and r["missing_description"] == "YES"
        ),
        "mesh_spotcheck": mesh_rows,
        "top_inlink_destinations": dest_all.most_common(25),
        "orphan_sample": [r["path"] for r in orphans[:40]],
        "redirect_targets_sample": sorted(uniq_redir)[:30],
        "404_targets_sample": sorted(uniq_404)[:40],
    }
    (OUT / "_graph-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps({k: v for k, v in summary.items() if k not in ("mesh_spotcheck", "top_inlink_destinations", "orphan_sample")}, indent=2))
    print("mesh:", json.dumps(mesh_rows, indent=2))
    print("top10:", summary["top_inlink_destinations"][:10])
    print("Wrote production-link-graph.csv, orphan-pages.csv, onpage-validation.csv")


if __name__ == "__main__":
    main()
