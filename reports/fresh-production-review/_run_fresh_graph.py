#!/usr/bin/env python3
"""Build fresh link graph + orphans + explore equity from fresh probe cache + outlink probes."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
from collections import Counter, defaultdict, deque
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFreshProductionReview/1.0"

CHROME = {
    "/netherlands", "/privacy", "/terms", "/contact", "/about", "/how-this-site-works",
    "/editorial-policy", "/methodology", "/cookies", "/disclaimer", "/affiliate-disclosure",
    "/how-we-rank-services", "/search", "/netherlands/moving/tools/moving-checklist",
    "/netherlands/moving-to-the-netherlands", "/sources", "/sitemap",
}


def norm(p: str) -> str:
    path = urlparse(p).path if str(p).startswith("http") else str(p).split("?")[0]
    path = path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return path


def is_page(p: str) -> bool:
    p = norm(p)
    if not p.startswith("/"):
        return False
    if p.startswith(("/_next", "/api/", "/brand/", "/images/")):
        return False
    if p.endswith((".js", ".css", ".woff", ".woff2", ".svg", ".png", ".jpg", ".ico", ".webp", ".map")):
        return False
    if p in ("/manifest.webmanifest", "/favicon.ico"):
        return False
    return True


def first_hop(url: str) -> dict:
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    cmd = [
        "curl", "-sS", "-D", hdr.name, "-o", "/dev/null", "--max-time", "20",
        "-A", UA, "-w", "%{http_code}", "--max-redirs", "0",
        "-H", "Cache-Control: no-cache", url,
    ]
    try:
        code = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=25).strip()
        raw = open(hdr.name, "rb").read().decode("utf-8", "replace")
    except Exception as e:
        Path(hdr.name).unlink(missing_ok=True)
        return {"first_status": 0, "location": "", "error": str(e)}
    Path(hdr.name).unlink(missing_ok=True)
    loc = ""
    m = re.search(r"^location:\s*(.+)$", raw, re.I | re.M)
    if m:
        loc = m.group(1).strip()
    return {"first_status": int(code or 0), "location": loc}


def write_csv(path, rows, fields):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def main():
    cache = json.loads((OUT / "_fresh-probe-cache.json").read_text())
    indexable = {
        p for p, e in cache.items()
        if int(e.get("final_status") or 0) == 200
        and not e.get("noindex")
        and int(e.get("first_status") or 0) == 200
        and p != "/"
    }

    outlinks = defaultdict(list)
    inlinks = defaultdict(list)
    nav_in = defaultdict(set)
    ctx_in = defaultdict(set)

    for src, e in cache.items():
        if int(e.get("final_status") or 0) != 200:
            continue
        nav = set(norm(h) for h in (e.get("nav_hrefs") or []) if is_page(h))
        seen = set()
        for h in e.get("hrefs") or []:
            if not is_page(h):
                continue
            t = norm(h)
            if t == src or t in seen:
                continue
            seen.add(t)
            outlinks[src].append(t)
            inlinks[t].append(src)
            if t in nav:
                nav_in[t].add(src)
            else:
                ctx_in[t].add(src)

    # Probe unknown targets
    targets = set()
    edge_count = Counter()
    for src, ts in outlinks.items():
        for t in ts:
            targets.add(t)
            edge_count[t] += 1
    unknown = sorted(t for t in targets if t not in cache)
    print(f"targets={len(targets)} unknown={len(unknown)} indexable={len(indexable)}", flush=True)
    status = {}
    for t, e in cache.items():
        status[t] = int(e.get("first_status") or 0)
    with ThreadPoolExecutor(max_workers=16) as ex:
        futs = {ex.submit(first_hop, BASE + t): t for t in unknown}
        n = 0
        for fut in as_completed(futs):
            t = futs[fut]
            status[t] = fut.result().get("first_status") or 0
            n += 1
            if n % 40 == 0:
                print(f"  outlink probe {n}/{len(unknown)}", flush=True)

    edges_3xx = edges_4xx = edges_staged = 0
    uniq_3xx, uniq_4xx, uniq_staged = set(), set(), set()
    staged_paths = {
        p for p, e in cache.items()
        if e.get("noindex") or int(e.get("final_status") or 0) == 404
    }
    for src, ts in outlinks.items():
        if src not in indexable and int(cache.get(src, {}).get("final_status") or 0) != 200:
            continue
        for t in ts:
            st = int(status.get(t) or 0)
            if 300 <= st < 400:
                edges_3xx += 1
                uniq_3xx.add(t)
            elif 400 <= st < 500:
                edges_4xx += 1
                uniq_4xx.add(t)
            if t in staged_paths:
                edges_staged += 1
                uniq_staged.add(t)

    def cluster(path: str) -> str:
        if "/moving/tools/" in path and "/from/" in path:
            return "country_tool"
        if "/moving/moving-to-netherlands-from/" in path:
            return "origin_guide"
        if path.startswith("/netherlands/health"):
            return "health"
        if path.startswith("/netherlands/education"):
            return "education"
        if path.startswith("/netherlands/culture"):
            return "culture"
        if path.startswith("/netherlands/living"):
            return "living"
        return "other"

    def parent_hub(path: str) -> str:
        parts = [x for x in path.split("/") if x]
        if len(parts) >= 2 and parts[0] == "netherlands":
            return "/" + "/".join(parts[:2])
        return "/"

    # depth BFS
    depth = {"/netherlands": 0}
    q = deque([("/netherlands", 0)])
    while q:
        cur, d = q.popleft()
        for nxt in outlinks.get(cur, []):
            if nxt in indexable and nxt not in depth:
                depth[nxt] = d + 1
                q.append((nxt, d + 1))

    graph_rows = []
    for p in sorted(indexable):
        sources = inlinks.get(p, [])
        uniq = sorted(set(sources))
        orphan = len(uniq) == 0
        near = len(uniq) in (1, 2)
        graph_rows.append({
            "url": BASE + p,
            "path": p,
            "href_inlinks": len(sources),
            "unique_linking_pages": len(uniq),
            "contextual_inlinks": len(ctx_in.get(p, set())),
            "navigation_inlinks": len(nav_in.get(p, set())),
            "outlinks": len(outlinks.get(p, [])),
            "crawl_depth": depth.get(p, ""),
            "parent_hub": parent_hub(p),
            "cluster": cluster(p),
            "orphan_status": "ORPHAN" if orphan else ("NEAR_ORPHAN" if near else "LINKED"),
            "is_country_tool": "YES" if cluster(p) == "country_tool" else "NO",
        })

    write_csv(
        OUT / "fresh-link-graph.csv",
        graph_rows,
        [
            "url", "path", "href_inlinks", "unique_linking_pages", "contextual_inlinks",
            "navigation_inlinks", "outlinks", "crawl_depth", "parent_hub", "cluster",
            "orphan_status", "is_country_tool",
        ],
    )
    orphans = [r for r in graph_rows if r["orphan_status"] in ("ORPHAN", "NEAR_ORPHAN")]
    write_csv(
        OUT / "fresh-orphans.csv",
        orphans,
        ["url", "path", "orphan_status", "unique_linking_pages", "cluster", "is_country_tool", "parent_hub", "crawl_depth"],
    )

    # on-page from cache
    titles = Counter()
    descs = Counter()
    onpage = []
    for p in sorted(indexable):
        e = cache[p]
        title = (e.get("title") or "").strip()
        desc = (e.get("description") or "").strip()
        if title:
            titles[title] += 1
        if desc:
            descs[desc] += 1
        onpage.append({
            "url": BASE + p,
            "path": p,
            "title": title,
            "title_length": len(title),
            "h1_count": e.get("h1_count") or 0,
            "h1_text": e.get("h1_text") or "",
            "meta_description": desc,
            "canonical": e.get("canonical") or "",
            "robots": e.get("robots") or "",
            "missing_h1": "YES" if int(e.get("h1_count") or 0) == 0 else "NO",
            "missing_title": "YES" if not title else "NO",
            "missing_description": "YES" if not desc else "NO",
        })
    for r in onpage:
        r["duplicate_title"] = "YES" if r["title"] and titles[r["title"]] > 1 else "NO"
        r["duplicate_description"] = "YES" if r["meta_description"] and descs[r["meta_description"]] > 1 else "NO"
        can = r["canonical"]
        r["canonical_defect"] = "YES" if (not can or norm(can) != r["path"]) else "NO"

    write_csv(
        OUT / "fresh-onpage-validation.csv",
        onpage,
        [
            "url", "path", "title", "title_length", "h1_count", "h1_text", "meta_description",
            "canonical", "robots", "missing_h1", "missing_title", "missing_description",
            "duplicate_title", "duplicate_description", "canonical_defect",
        ],
    )

    dest_all = Counter({t: len(set(s)) for t, s in inlinks.items() if t in indexable})
    non_chrome_out = []
    explore_pages = 0
    for p in indexable:
        e = cache[p]
        if e.get("has_explore_signal"):
            explore_pages += 1
        outs = [t for t in outlinks.get(p, []) if t not in CHROME]
        non_chrome_out.append(len(outs))

    summary = {
        "indexable_pages": len(indexable),
        "orphans": sum(1 for r in graph_rows if r["orphan_status"] == "ORPHAN"),
        "near_orphans": sum(1 for r in graph_rows if r["orphan_status"] == "NEAR_ORPHAN"),
        "country_tool_orphans": sum(1 for r in graph_rows if r["orphan_status"] == "ORPHAN" and r["is_country_tool"] == "YES"),
        "edges_to_3xx": edges_3xx,
        "unique_3xx": len(uniq_3xx),
        "top_3xx": sorted(((t, edge_count[t]) for t in uniq_3xx), key=lambda x: -x[1])[:15],
        "edges_to_4xx": edges_4xx,
        "unique_4xx": len(uniq_4xx),
        "top_4xx": sorted(((t, edge_count[t]) for t in uniq_4xx), key=lambda x: -x[1])[:15],
        "edges_to_staged": edges_staged,
        "unique_staged": len(uniq_staged),
        "destinations_ge400": sum(1 for v in dest_all.values() if v >= 400),
        "destinations_ge400_non_chrome": sum(1 for t, v in dest_all.items() if v >= 400 and t not in CHROME),
        "max_unique_inlinks": max(dest_all.values()) if dest_all else 0,
        "avg_non_chrome_outlinks": round(sum(non_chrome_out) / max(1, len(non_chrome_out)), 2),
        "unique_destinations_ge10": sum(1 for v in dest_all.values() if v >= 10),
        "pages_with_explore_signal": explore_pages,
        "missing_h1": sum(1 for r in onpage if r["missing_h1"] == "YES"),
        "missing_title": sum(1 for r in onpage if r["missing_title"] == "YES"),
        "duplicate_titles": sum(1 for r in onpage if r["duplicate_title"] == "YES"),
        "missing_descriptions": sum(1 for r in onpage if r["missing_description"] == "YES"),
        "canonical_defects": sum(1 for r in onpage if r["canonical_defect"] == "YES"),
        "orphan_paths": [r["path"] for r in graph_rows if r["orphan_status"] == "ORPHAN"],
        "top_inlinks": dest_all.most_common(20),
    }
    (OUT / "_fresh-graph-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps({k: v for k, v in summary.items() if k not in ("top_3xx", "top_4xx", "top_inlinks", "orphan_paths")}, indent=2))
    print("orphans", summary["orphan_paths"])
    print("DONE graph")


if __name__ == "__main__":
    main()
