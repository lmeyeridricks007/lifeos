#!/usr/bin/env python3
"""Fresh production sitemap + URL validation. Audit only. No reused responses."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFreshProductionReview/1.0"
TIMEOUT = 35
WORKERS = 14
MAX_HOPS = 8

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


def norm_path(url: str) -> str:
    p = urlparse(url)
    path = p.path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return path or "/"


def curl_probe(url: str, with_body: bool = True) -> dict:
    chain = []
    current = url
    final_body = ""
    final_status = 0
    xrobots = ""
    for _ in range(MAX_HOPS):
        hdr_f = tempfile.NamedTemporaryFile(delete=False)
        hdr_f.close()
        body_f = tempfile.NamedTemporaryFile(delete=False)
        body_f.close()
        cmd = [
            "curl", "-sS", "-D", hdr_f.name, "-o", body_f.name,
            "--max-time", str(TIMEOUT), "-A", UA, "--max-redirs", "0",
            "-H", "Cache-Control: no-cache", "-H", "Pragma: no-cache",
            "-w", "%{http_code}", "--compressed", current,
        ]
        try:
            code_s = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 8)
        except Exception as e:
            for f in (hdr_f.name, body_f.name):
                try:
                    os.unlink(f)
                except OSError:
                    pass
            return {
                "request_url": url, "error": str(e), "redirect_chain": chain,
                "final_status": 0, "first_status": 0, "final_url": current,
                "redirect_count": 0, "x_robots": "", "body": "",
            }
        try:
            raw_hdr = open(hdr_f.name, "rb").read().decode("utf-8", "replace")
            body = open(body_f.name, "rb").read() if with_body else b""
        finally:
            for f in (hdr_f.name, body_f.name):
                try:
                    os.unlink(f)
                except OSError:
                    pass
        statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw_hdr)
        status = int(statuses[-1]) if statuses else int(code_s or 0)
        loc_m = re.search(r"^location:\s*(.+)$", raw_hdr, re.I | re.M)
        location = loc_m.group(1).strip() if loc_m else ""
        xr = re.search(r"^x-robots-tag:\s*(.+)$", raw_hdr, re.I | re.M)
        if xr:
            xrobots = xr.group(1).strip()
        chain.append({"url": current, "status": status, "location": location})
        final_status = status
        if status in (301, 302, 303, 307, 308) and location:
            current = urljoin(current, location)
            continue
        if with_body and body and len(body) < 4_000_000:
            ctype_m = re.search(r"^content-type:\s*(.+)$", raw_hdr, re.I | re.M)
            ctype = (ctype_m.group(1).lower() if ctype_m else "")
            if "html" in ctype or body[:80].lstrip().startswith(b"<") or b"__next" in body[:500]:
                final_body = body.decode("utf-8", "replace")
        break
    return {
        "request_url": url,
        "final_url": chain[-1]["url"] if chain else url,
        "final_status": final_status,
        "first_status": chain[0]["status"] if chain else 0,
        "redirect_count": max(0, len(chain) - 1),
        "redirect_chain": chain,
        "x_robots": xrobots,
        "body": final_body,
    }


def parse_html(body: str) -> dict:
    if not body:
        return {}

    def m1(pat):
        m = re.search(pat, body, re.I | re.S)
        return unescape(m.group(1).strip()) if m else ""

    canonical = m1(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']') or m1(
        r'href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']'
    )
    robots = m1(r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']') or m1(
        r'content=["\']([^"\']+)["\'][^>]*name=["\']robots["\']'
    )
    title = m1(r"<title[^>]*>([^<]+)</title>")
    desc = m1(r'name=["\']description["\'][^>]*content=["\']([^"\']+)["\']') or m1(
        r'content=["\']([^"\']+)["\'][^>]*name=["\']description["\']'
    )
    og = m1(r'property=["\']og:url["\'][^>]*content=["\']([^"\']+)["\']')
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.I | re.S)
    h1_texts = []
    for h in h1s:
        t = unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", h))).strip()
        if t:
            h1_texts.append(t)
    hrefs = []
    for m in re.finditer(r'href=["\']([^"\'#]+)["\']', body, re.I):
        href = m.group(1).strip()
        if href.startswith(("mailto:", "tel:", "javascript:")):
            continue
        full = urljoin(BASE + "/", href)
        if urlparse(full).netloc.replace("www.", "") != "expatcopilot.com":
            continue
        path = norm_path(full)
        q = urlparse(full).query
        hrefs.append(path + (("?" + q) if q else ""))
    nav_chunk = ""
    nm = re.search(r"<nav[\s\S]{0,80000}?</nav>", body, re.I)
    if nm:
        nav_chunk = nm.group(0)
    hm = re.search(r"<header[\s\S]{0,40000}?</header>", body, re.I)
    if hm:
        nav_chunk += hm.group(0)
    nav_hrefs = set()
    for m in re.finditer(r'href=["\']([^"\'#]+)["\']', nav_chunk, re.I):
        full = urljoin(BASE + "/", m.group(1).strip())
        if "expatcopilot.com" in urlparse(full).netloc:
            nav_hrefs.add(norm_path(full))
    noindex = "noindex" in (robots or "").lower()
    return {
        "canonical": canonical,
        "robots": robots,
        "title": title[:300],
        "description": desc[:500],
        "og_url": og,
        "h1_count": len(h1_texts),
        "h1_text": " | ".join(h1_texts[:3])[:400],
        "internal_hrefs": hrefs,
        "nav_hrefs": sorted(nav_hrefs),
        "noindex": noindex,
        "has_jsonld": "application/ld+json" in body,
        "has_breadcrumb": "BreadcrumbList" in body,
        "has_explore_signal": bool(re.search(r"explore next|related guides|you may also|continue exploring", body, re.I)),
        "coming_soon": "coming soon" in body.lower(),
    }


def is_page_path(p: str) -> bool:
    path = p.split("?")[0]
    if not path.startswith("/"):
        return False
    if path.startswith(("/_next", "/api/", "/brand/", "/images/")):
        return False
    if path.endswith((".js", ".css", ".woff", ".woff2", ".svg", ".png", ".jpg", ".ico", ".webp", ".map")):
        return False
    if path in ("/manifest.webmanifest", "/favicon.ico", "/robots.txt", "/sitemap.xml"):
        return False
    return True


def write_csv(path: Path, rows: list[dict], fields: list[str]):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def main():
    started = datetime.now(timezone.utc).isoformat()
    print(f"probe_start {started}", flush=True)

    # Prefer sitemap already freshly fetched in step0 if present and recent; else refetch
    sm_path = OUT / "_fresh-sitemap.xml"
    if not sm_path.exists() or sm_path.stat().st_size < 100:
        print("Refetching sitemap…", flush=True)
        sm = curl_probe(BASE + "/sitemap.xml", with_body=True)
        sm_path.write_text(sm.get("body") or "")
        sm_fetch_ts = datetime.now(timezone.utc).isoformat()
    else:
        sm_fetch_ts = json.loads((OUT / "_step0-evidence.json").read_text()).get(
            "PRODUCTION_SITEMAP_FETCH_TIMESTAMP", started
        )

    locs = re.findall(r"<loc>(.*?)</loc>", sm_path.read_text())
    print(f"sitemap_locs={len(locs)}", flush=True)

    cache = {}

    def work(loc: str):
        res = curl_probe(loc, with_body=True)
        parsed = parse_html(res.get("body") or "")
        if "noindex" in (res.get("x_robots") or "").lower():
            parsed["noindex"] = True
        can = parsed.get("canonical") or ""
        can_probe = None
        if can:
            can_probe = curl_probe(can, with_body=True)
            can_parsed = parse_html(can_probe.get("body") or "")
            can_probe["parsed_noindex"] = can_parsed.get("noindex")
            can_probe["body"] = ""  # drop heavy
        res["parsed"] = parsed
        res["canonical_probe"] = {
            "first_status": (can_probe or {}).get("first_status"),
            "final_status": (can_probe or {}).get("final_status"),
            "final_url": (can_probe or {}).get("final_url"),
            "noindex": (can_probe or {}).get("parsed_noindex"),
        } if can else {}
        # strip body from stored res later
        return loc, res

    results = {}
    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = [ex.submit(work, loc) for loc in locs]
        done = 0
        for fut in as_completed(futs):
            loc, res = fut.result()
            path = norm_path(loc)
            parsed = res["parsed"]
            cache[path] = {
                "loc": loc,
                "first_status": res["first_status"],
                "final_status": res["final_status"],
                "final_url": res["final_url"],
                "redirect_count": res["redirect_count"],
                "robots": parsed.get("robots") or "",
                "canonical": parsed.get("canonical") or "",
                "canonical_first_status": (res.get("canonical_probe") or {}).get("first_status"),
                "canonical_final_status": (res.get("canonical_probe") or {}).get("final_status"),
                "canonical_noindex": (res.get("canonical_probe") or {}).get("noindex"),
                "h1_count": parsed.get("h1_count") or 0,
                "h1_text": parsed.get("h1_text") or "",
                "title": parsed.get("title") or "",
                "description": parsed.get("description") or "",
                "noindex": parsed.get("noindex") or False,
                "hrefs": [h for h in (parsed.get("internal_hrefs") or []) if is_page_path(h.split("?")[0])],
                "nav_hrefs": parsed.get("nav_hrefs") or [],
                "has_explore_signal": parsed.get("has_explore_signal"),
                "coming_soon": parsed.get("coming_soon"),
                "has_jsonld": parsed.get("has_jsonld"),
                "has_breadcrumb": parsed.get("has_breadcrumb"),
                "og_url": parsed.get("og_url") or "",
            }
            results[loc] = cache[path]
            done += 1
            if done % 50 == 0 or done == len(locs):
                print(f"  probed {done}/{len(locs)}", flush=True)

    # classify indexable
    sitemap_rows = []
    url_rows = []
    for loc in locs:
        path = norm_path(loc)
        e = cache[path]
        first = int(e["first_status"] or 0)
        final = int(e["final_status"] or 0)
        noindex = bool(e["noindex"])
        indexable = final == 200 and not noindex and first == 200
        # soft 307 homepage special
        if first >= 300 and first < 400 and not e.get("redirect_count"):
            # soft redirect/error without location follow
            indexable = False
        can = e.get("canonical") or ""
        can_first = int(e.get("canonical_first_status") or 0)
        can_final = int(e.get("canonical_final_status") or 0)
        can_noindex = bool(e.get("canonical_noindex"))
        self_can = norm_path(can) == path and bool(can) if can else False
        sitemap_eq = norm_path(loc) == norm_path(can) if can else False
        row = {
            "url": loc,
            "path": path,
            "first_status": first,
            "final_url": e.get("final_url") or "",
            "final_status": final,
            "redirect_count": e.get("redirect_count") or 0,
            "robots": e.get("robots") or "",
            "canonical": can,
            "canonical_status": can_first,
            "canonical_final_status": can_final,
            "canonical_to_redirect": can_first >= 300 and can_first < 400,
            "canonical_to_404": can_final == 404 or can_first == 404,
            "canonical_to_noindex": can_noindex,
            "sitemap_canonical_mismatch": not sitemap_eq if can else True,
            "self_canonical": self_can,
            "h1_count": e.get("h1_count") or 0,
            "h1_text": e.get("h1_text") or "",
            "title": e.get("title") or "",
            "meta_description": e.get("description") or "",
            "indexable": indexable,
            "noindex": noindex,
        }
        sitemap_rows.append(row)
        url_rows.append(row)

    write_csv(
        OUT / "fresh-sitemap-validation.csv",
        sitemap_rows,
        [
            "url", "path", "first_status", "final_url", "final_status", "redirect_count",
            "robots", "canonical", "canonical_status", "h1_count", "title", "indexable",
        ],
    )
    write_csv(
        OUT / "fresh-url-validation.csv",
        url_rows,
        [
            "url", "path", "first_status", "final_url", "final_status", "redirect_count",
            "robots", "canonical", "canonical_status", "canonical_final_status",
            "canonical_to_redirect", "canonical_to_404", "canonical_to_noindex",
            "sitemap_canonical_mismatch", "self_canonical", "h1_count", "h1_text",
            "title", "meta_description", "indexable", "noindex",
        ],
    )

    # Prior 19 H1 — always probe fresh even if not in sitemap
    prior_rows = []
    for path in PRIOR_MISSING_H1:
        if path in cache and cache[path].get("final_status") in (200, 404, 307, 308):
            e = cache[path]
            # still re-fetch if missing from sitemap
            if path not in {norm_path(l) for l in locs}:
                res = curl_probe(BASE + path, with_body=True)
                parsed = parse_html(res.get("body") or "")
                prior_rows.append({
                    "path": path,
                    "http_status": res["final_status"],
                    "first_status": res["first_status"],
                    "robots": parsed.get("robots") or "",
                    "h1_count": parsed.get("h1_count") or 0,
                    "h1_text": parsed.get("h1_text") or "",
                    "in_sitemap": False,
                    "indexable": res["final_status"] == 200 and not parsed.get("noindex"),
                })
            else:
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
            parsed = parse_html(res.get("body") or "")
            prior_rows.append({
                "path": path,
                "http_status": res["final_status"],
                "first_status": res["first_status"],
                "robots": parsed.get("robots") or "",
                "h1_count": parsed.get("h1_count") or 0,
                "h1_text": parsed.get("h1_text") or "",
                "in_sitemap": path in {norm_path(l) for l in locs},
                "indexable": res["final_status"] == 200 and not parsed.get("noindex"),
            })
    write_csv(
        OUT / "_prior19-h1.csv",
        prior_rows,
        ["path", "http_status", "first_status", "robots", "h1_count", "h1_text", "in_sitemap", "indexable"],
    )

    # Persist cache without huge fields already trimmed
    (OUT / "_fresh-probe-cache.json").write_text(json.dumps(cache))

    # summary
    def cnt(pred):
        return sum(1 for r in sitemap_rows if pred(r))

    summary = {
        "probe_completed_at": datetime.now(timezone.utc).isoformat(),
        "sitemap_fetch_timestamp": sm_fetch_ts,
        "total_sitemap_urls": len(sitemap_rows),
        "sitemap_3xx": cnt(lambda r: 300 <= int(r["first_status"]) < 400),
        "sitemap_4xx": cnt(lambda r: 400 <= int(r["final_status"]) < 500),
        "sitemap_noindex": cnt(lambda r: r["noindex"]),
        "sitemap_indexable": cnt(lambda r: r["indexable"]),
        "canonical_to_redirect": cnt(lambda r: r["canonical_to_redirect"] is True or r["canonical_to_redirect"] == "True"),
        "canonical_to_404": cnt(lambda r: r["canonical_to_404"] is True or r["canonical_to_404"] == "True"),
        "canonical_to_noindex": cnt(lambda r: r["canonical_to_noindex"] is True or r["canonical_to_noindex"] == "True"),
        "sitemap_canonical_mismatch": cnt(lambda r: r["sitemap_canonical_mismatch"] is True or r["sitemap_canonical_mismatch"] == "True"),
        "trailing_slash_locs": sum(1 for u in locs if (urlparse(u).path or "/") not in ("/",) and (urlparse(u).path or "").endswith("/")),
        "prior19": prior_rows,
    }
    # fix bool counts from CSV write coercion — recompute from cache
    summary["canonical_to_redirect"] = sum(
        1 for e in cache.values()
        if e.get("canonical") and 300 <= int(e.get("canonical_first_status") or 0) < 400
    )
    summary["canonical_to_404"] = sum(
        1 for e in cache.values()
        if e.get("canonical") and (
            int(e.get("canonical_final_status") or 0) == 404
            or int(e.get("canonical_first_status") or 0) == 404
        )
    )
    summary["canonical_to_noindex"] = sum(1 for e in cache.values() if e.get("canonical") and e.get("canonical_noindex"))
    summary["sitemap_canonical_mismatch"] = sum(
        1 for loc in locs
        if cache[norm_path(loc)].get("canonical")
        and norm_path(loc) != norm_path(cache[norm_path(loc)]["canonical"])
    )
    ngph = [u for u in locs if re.search(r"/from/(nigeria|philippines)$", urlparse(u).path or "") and "/tools/" in u]
    summary["ngph_tool_urls"] = ngph
    summary["ngph_statuses"] = {
        norm_path(u): {
            "first": cache[norm_path(u)]["first_status"],
            "final": cache[norm_path(u)]["final_status"],
            "noindex": cache[norm_path(u)]["noindex"],
        }
        for u in ngph
    }
    (OUT / "_fresh-sitemap-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps({k: v for k, v in summary.items() if k not in ("prior19", "ngph_tool_urls")}, indent=2))
    print("prior19 missing h1 among live indexable:", sum(
        1 for r in prior_rows if r["indexable"] and int(r["h1_count"]) == 0
    ))
    print("DONE sitemap probe")


if __name__ == "__main__":
    main()
