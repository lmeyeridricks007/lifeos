#!/usr/bin/env python3
"""Fresh CURRENT production probe for final-production-review (OLD vs CURRENT)."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFinalProductionReview/2.0"
TIMEOUT = 35
WORKERS = 14
MAX_HOPS = 8
STARTED = datetime.now(timezone.utc).isoformat()

PRIOR_H1 = [
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

SPOT = ["south-africa", "india", "united-states", "united-kingdom", "brazil", "turkey", "indonesia", "australia"]


def norm(url: str) -> str:
    p = urlparse(url).path or "/"
    if p != "/" and p.endswith("/"):
        p = p[:-1]
    return p or "/"


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


def curl_probe(url: str, with_body: bool = True) -> dict:
    chain = []
    current = url
    body = ""
    for _ in range(MAX_HOPS):
        hdr_f = tempfile.NamedTemporaryFile(delete=False)
        hdr_f.close()
        body_f = tempfile.NamedTemporaryFile(delete=False)
        body_f.close()
        cmd = [
            "curl", "-sS", "-D", hdr_f.name, "-o", body_f.name,
            "--max-time", str(TIMEOUT), "-A", UA, "--max-redirs", "0",
            "-H", "Cache-Control: no-cache", "-H", "Pragma: no-cache",
            "--compressed", current,
        ]
        try:
            subprocess.check_call(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=TIMEOUT + 8)
        except Exception as e:
            for f in (hdr_f.name, body_f.name):
                try:
                    os.unlink(f)
                except OSError:
                    pass
            return {"request": url, "error": str(e), "first_status": 0, "final_status": 0, "final_url": current, "redirect_count": 0, "body": ""}
        raw = open(hdr_f.name, "rb").read().decode("utf-8", "replace")
        raw_body = open(body_f.name, "rb").read() if with_body else b""
        for f in (hdr_f.name, body_f.name):
            try:
                os.unlink(f)
            except OSError:
                pass
        statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw)
        status = int(statuses[-1]) if statuses else 0
        loc_m = re.search(r"^location:\s*(.+)$", raw, re.I | re.M)
        location = loc_m.group(1).strip() if loc_m else ""
        chain.append({"url": current, "status": status, "location": location})
        if status in (301, 302, 303, 307, 308) and location:
            current = urljoin(current, location)
            continue
        if with_body and raw_body:
            body = raw_body.decode("utf-8", "replace")
        break
    return {
        "request": url,
        "first_status": chain[0]["status"] if chain else 0,
        "final_status": chain[-1]["status"] if chain else 0,
        "final_url": chain[-1]["url"] if chain else url,
        "redirect_count": max(0, len(chain) - 1),
        "body": body,
    }


def parse(html: str) -> dict:
    if not html:
        return {}

    def m1(pat):
        m = re.search(pat, html, re.I | re.S)
        return unescape(m.group(1).strip()) if m else ""

    canonical = m1(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']') or m1(
        r'href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']'
    )
    robots = m1(r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']')
    title = m1(r"<title[^>]*>([^<]+)</title>")
    desc = m1(r'name=["\']description["\'][^>]*content=["\']([^"\']+)["\']')
    h1s = [
        unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", h))).strip()
        for h in re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    ]
    h1s = [h for h in h1s if h]
    hrefs = []
    for m in re.finditer(r'href=["\']([^"\'#]+)["\']', html, re.I):
        full = urljoin(BASE + "/", m.group(1).strip())
        if urlparse(full).netloc.replace("www.", "") != "expatcopilot.com":
            continue
        hrefs.append(norm(full))
    return {
        "canonical": canonical,
        "robots": robots,
        "title": title,
        "description": desc,
        "h1_count": len(h1s),
        "h1_text": " | ".join(h1s[:3]),
        "noindex": "noindex" in robots.lower(),
        "hrefs": hrefs,
        "has_explore": bool(re.search(r"explore next|related guides|continue exploring", html, re.I)),
    }


def write_csv(path: Path, rows: list[dict], fields: list[str]):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def first_hop(url: str) -> int:
    r = curl_probe(url, with_body=False)
    return int(r["first_status"] or 0)


def main():
    print("STARTED", STARTED, flush=True)
    sm_path = OUT / "_fresh-sitemap-now.xml"
    if not sm_path.exists() or sm_path.stat().st_size < 100:
        sm = curl_probe(BASE + "/sitemap.xml", with_body=True)
        sm_path.write_text(sm.get("body") or "")
    locs = re.findall(r"<loc>\s*([^<]+)\s*</loc>", sm_path.read_text())
    print("sitemap_locs", len(locs), flush=True)

    cache = {}

    def work(loc: str):
        res = curl_probe(loc, with_body=True)
        parsed = parse(res.get("body") or "")
        can = parsed.get("canonical") or ""
        can_first = first_hop(can) if can else 0
        return loc, res, parsed, can_first

    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = [ex.submit(work, loc) for loc in locs]
        n = 0
        for fut in as_completed(futs):
            loc, res, parsed, can_first = fut.result()
            path = norm(loc)
            cache[path] = {
                "loc": loc,
                "first_status": res["first_status"],
                "final_status": res["final_status"],
                "redirect_count": res["redirect_count"],
                **parsed,
                "canonical_first_status": can_first,
            }
            n += 1
            if n % 50 == 0 or n == len(locs):
                print(f"  probed {n}/{len(locs)}", flush=True)

    # prior H1 refresh for missing-from-sitemap
    prior_rows = []
    for path in PRIOR_H1:
        if path in cache:
            e = cache[path]
            prior_rows.append({
                "path": path,
                "http_status": e["final_status"],
                "first_status": e["first_status"],
                "robots": e.get("robots") or "",
                "h1_count": e.get("h1_count") or 0,
                "h1_text": e.get("h1_text") or "",
                "in_sitemap": True,
                "indexable": e["final_status"] == 200 and not e.get("noindex") and e["first_status"] == 200,
            })
        else:
            res = curl_probe(BASE + path, with_body=True)
            parsed = parse(res.get("body") or "")
            prior_rows.append({
                "path": path,
                "http_status": res["final_status"],
                "first_status": res["first_status"],
                "robots": parsed.get("robots") or "",
                "h1_count": parsed.get("h1_count") or 0,
                "h1_text": parsed.get("h1_text") or "",
                "in_sitemap": False,
                "indexable": res["final_status"] == 200 and not parsed.get("noindex") and res["first_status"] == 200,
            })

    # mesh
    mesh = []
    for slug in SPOT:
        path = f"/netherlands/moving/tools/moving-checklist/from/{slug}"
        e = cache.get(path)
        if not e:
            res = curl_probe(BASE + path, with_body=True)
            parsed = parse(res.get("body") or "")
            e = {**parsed, "final_status": res["final_status"], "hrefs": parsed.get("hrefs") or []}
        hrefs = e.get("hrefs") or []
        parent = f"/netherlands/moving/moving-to-netherlands-from/{slug}"
        related = sorted({h for h in hrefs if f"/from/{slug}" in h and "/tools/" in h and "moving-checklist" not in h})
        mesh.append({
            "country": slug,
            "status": e.get("final_status"),
            "h1": e.get("h1_text"),
            "parent": parent in hrefs,
            "related_count": len(related),
            "related": "|".join(related),
        })

    # hubs + authority
    hubs = {}
    for path in ("/netherlands/health", "/netherlands/education"):
        e = cache.get(path) or {}
        if not e:
            res = curl_probe(BASE + path, with_body=True)
            e = {**parse(res.get("body") or ""), "final_status": res["final_status"], "first_status": res["first_status"], "hrefs": parse(res.get("body") or "").get("hrefs") or []}
        children = [h for h in (e.get("hrefs") or []) if h.startswith(path + "/")]
        hubs[path] = {
            "status": e.get("final_status"),
            "robots": e.get("robots"),
            "canonical": e.get("canonical"),
            "h1": e.get("h1_text"),
            "noindex": e.get("noindex"),
            "in_sitemap": path in cache,
            "child_count": len(set(children)),
        }

    apis = {}
    for path in (
        "/api/authority/official-figures?format=json",
        "/api/authority/city-cost-seed",
        "/api/authority/city-comparison-profiles",
    ):
        res = curl_probe(BASE + path, with_body=True)
        body = res.get("body") or ""
        apis[path] = {"status": res["final_status"], "jsonish": body.lstrip().startswith(("{", "[")), "bytes": len(body)}

    # sitemap rows
    sitemap_rows = []
    for loc in locs:
        path = norm(loc)
        e = cache[path]
        first = int(e["first_status"] or 0)
        final = int(e["final_status"] or 0)
        can_first = int(e.get("canonical_first_status") or 0)
        indexable = first == 200 and final == 200 and not e.get("noindex")
        sitemap_rows.append({
            "url": loc,
            "path": path,
            "first_status": first,
            "final_status": final,
            "redirect_count": e.get("redirect_count") or 0,
            "robots": e.get("robots") or "",
            "canonical": e.get("canonical") or "",
            "canonical_status": can_first,
            "canonical_to_redirect": 300 <= can_first < 400,
            "h1_count": e.get("h1_count") or 0,
            "title": e.get("title") or "",
            "indexable": indexable,
            "noindex": bool(e.get("noindex")),
            "self_canonical": norm(e.get("canonical") or "") == path if e.get("canonical") else False,
        })

    write_csv(
        OUT / "sitemap-validation.csv",
        sitemap_rows,
        ["url", "path", "first_status", "final_status", "redirect_count", "robots", "canonical", "canonical_status", "h1_count", "title", "indexable"],
    )
    write_csv(
        OUT / "canonical-validation.csv",
        sitemap_rows,
        ["url", "path", "final_status", "canonical", "canonical_status", "canonical_to_redirect", "self_canonical", "indexable", "noindex"],
    )

    # link graph among indexable
    indexable = {r["path"] for r in sitemap_rows if r["indexable"]}
    outlinks = defaultdict(list)
    inlinks = defaultdict(list)
    for src in indexable:
        seen = set()
        for h in cache[src].get("hrefs") or []:
            if not is_page(h) or h == src or h in seen:
                continue
            seen.add(h)
            outlinks[src].append(h)
            inlinks[h].append(src)

    # probe unknown targets
    targets = set()
    for ts in outlinks.values():
        targets.update(ts)
    unknown = [t for t in targets if t not in cache]
    status = {t: int(cache[t]["first_status"]) for t in cache}
    print(f"outlink unknowns {len(unknown)}", flush=True)
    with ThreadPoolExecutor(max_workers=16) as ex:
        futs = {ex.submit(first_hop, BASE + t): t for t in unknown}
        for fut in as_completed(futs):
            status[futs[fut]] = fut.result()

    edges_3xx = edges_4xx = 0
    uniq_3xx, uniq_4xx = set(), set()
    for src, ts in outlinks.items():
        for t in ts:
            st = int(status.get(t) or 0)
            if 300 <= st < 400:
                edges_3xx += 1
                uniq_3xx.add(t)
            elif 400 <= st < 500:
                edges_4xx += 1
                uniq_4xx.add(t)

    graph_rows = []
    for p in sorted(indexable):
        uniq = sorted(set(inlinks.get(p, [])))
        orphan = len(uniq) == 0
        near = len(uniq) in (1, 2)
        is_ct = "/moving/tools/" in p and "/from/" in p
        graph_rows.append({
            "url": BASE + p,
            "path": p,
            "unique_linking_pages": len(uniq),
            "outlinks": len(outlinks.get(p, [])),
            "orphan_status": "ORPHAN" if orphan else ("NEAR_ORPHAN" if near else "LINKED"),
            "is_country_tool": "YES" if is_ct else "NO",
        })
    write_csv(OUT / "production-link-graph.csv", graph_rows, list(graph_rows[0].keys()))
    orphans = [r for r in graph_rows if r["orphan_status"] in ("ORPHAN", "NEAR_ORPHAN")]
    write_csv(OUT / "orphan-pages.csv", orphans, list(orphans[0].keys()) if orphans else ["url", "path", "orphan_status"])

    # onpage
    titles = Counter()
    onpage = []
    for p in sorted(indexable):
        e = cache[p]
        title = (e.get("title") or "").strip()
        if title:
            titles[title] += 1
        onpage.append({
            "url": BASE + p,
            "path": p,
            "title": title,
            "h1_count": e.get("h1_count") or 0,
            "h1_text": e.get("h1_text") or "",
            "meta_description": e.get("description") or "",
            "canonical": e.get("canonical") or "",
            "robots": e.get("robots") or "",
            "missing_h1": "YES" if int(e.get("h1_count") or 0) == 0 else "NO",
            "missing_title": "YES" if not title else "NO",
            "missing_description": "YES" if not (e.get("description") or "").strip() else "NO",
        })
    for r in onpage:
        r["duplicate_title"] = "YES" if r["title"] and titles[r["title"]] > 1 else "NO"
    write_csv(OUT / "onpage-validation.csv", onpage, list(onpage[0].keys()))

    dest_in = Counter({t: len(set(s)) for t, s in inlinks.items() if t in indexable})
    summary = {
        "audit_started": STARTED,
        "audit_completed": datetime.now(timezone.utc).isoformat(),
        "sitemap_total": len(sitemap_rows),
        "sitemap_trailing_slash": sum(1 for u in locs if (urlparse(u).path or "/") not in ("/",) and (urlparse(u).path or "").endswith("/")),
        "sitemap_3xx": sum(1 for r in sitemap_rows if 300 <= r["first_status"] < 400),
        "sitemap_4xx": sum(1 for r in sitemap_rows if 400 <= r["final_status"] < 500),
        "sitemap_noindex": sum(1 for r in sitemap_rows if r["noindex"]),
        "sitemap_indexable": sum(1 for r in sitemap_rows if r["indexable"]),
        "canonical_to_redirect": sum(1 for r in sitemap_rows if r["canonical_to_redirect"]),
        "ngph_tools_in_sitemap": [
            r["path"] for r in sitemap_rows if re.search(r"/tools/[^/]+/from/(nigeria|philippines)$", r["path"])
        ],
        "prior19": prior_rows,
        "prior19_live_missing_h1": sum(1 for r in prior_rows if r["indexable"] and int(r["h1_count"]) == 0),
        "prior19_live_with_h1": sum(1 for r in prior_rows if r["indexable"] and int(r["h1_count"]) >= 1),
        "hubs": hubs,
        "mesh": mesh,
        "apis": apis,
        "indexable": len(indexable),
        "orphans": sum(1 for r in graph_rows if r["orphan_status"] == "ORPHAN"),
        "near_orphans": sum(1 for r in graph_rows if r["orphan_status"] == "NEAR_ORPHAN"),
        "country_tool_orphans": sum(1 for r in graph_rows if r["orphan_status"] == "ORPHAN" and r["is_country_tool"] == "YES"),
        "edges_3xx": edges_3xx,
        "uniq_3xx": len(uniq_3xx),
        "edges_4xx": edges_4xx,
        "uniq_4xx": len(uniq_4xx),
        "dest_ge400": sum(1 for v in dest_in.values() if v >= 400),
        "max_inlinks": max(dest_in.values()) if dest_in else 0,
        "missing_h1": sum(1 for r in onpage if r["missing_h1"] == "YES"),
        "duplicate_titles": sum(1 for r in onpage if r["duplicate_title"] == "YES"),
        "orphan_paths": [r["path"] for r in graph_rows if r["orphan_status"] == "ORPHAN"],
        "top_3xx": sorted(uniq_3xx)[:12],
        "top_4xx": sorted(uniq_4xx)[:12],
    }
    (OUT / "_current-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps({k: summary[k] for k in summary if k not in ("prior19", "mesh", "hubs", "apis", "orphan_paths", "ngph_tools_in_sitemap", "top_3xx", "top_4xx")}, indent=2))
    print("DONE")


if __name__ == "__main__":
    main()
