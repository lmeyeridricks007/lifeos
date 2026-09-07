#!/usr/bin/env python3
"""Final production SEO review — audit only. Probes live www.expatcopilot.com."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
import time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlparse, urlunparse

BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFinalProductionReview/1.0"
OUT = Path(__file__).resolve().parent
TIMEOUT = 30
WORKERS = 14
MAX_HOPS = 8

# Prior missing-H1 set from remediation 05 / production validation
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


def abs_url(path: str) -> str:
    if path.startswith("http"):
        return path
    return BASE + (path if path.startswith("/") else "/" + path)


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
            "-w", "%{http_code}", "--compressed", current,
        ]
        try:
            code_s = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 5)
        except Exception as e:
            for f in (hdr_f.name, body_f.name):
                try:
                    os.unlink(f)
                except OSError:
                    pass
            return {"request_url": url, "error": str(e), "redirect_chain": chain, "final_status": 0}

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

        if with_body and body and len(body) < 3_500_000:
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
        "redirect_hops": max(0, len(chain) - 1),
        "redirect_chain": chain,
        "x_robots": xrobots,
        "body": final_body,
    }


def parse_html(body: str) -> dict:
    if not body:
        return {}
    # Prefer RSC-friendly patterns used by Next
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
    # Also catch JSON-escaped title fragments
    if not title:
        title = m1(r'"title"\s*:\s*"([^"]{5,180})"')
    desc = m1(r'name=["\']description["\'][^>]*content=["\']([^"\']+)["\']') or m1(
        r'content=["\']([^"\']+)["\'][^>]*name=["\']description["\']'
    )
    og = m1(r'property=["\']og:url["\'][^>]*content=["\']([^"\']+)["\']') or m1(
        r'content=["\']([^"\']+)["\'][^>]*property=["\']og:url["\']'
    )

    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.I | re.S)
    h1_texts = []
    for h in h1s:
        t = re.sub(r"<[^>]+>", "", h)
        t = unescape(re.sub(r"\s+", " ", t)).strip()
        if t:
            h1_texts.append(t)

    # Internal hrefs
    hrefs = []
    for m in re.finditer(r'href=["\']([^"\'#]+)["\']', body, re.I):
        href = m.group(1).strip()
        if href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:"):
            continue
        full = urljoin(BASE + "/", href)
        if urlparse(full).netloc.replace("www.", "") != "expatcopilot.com":
            continue
        hrefs.append(norm_path(full))

    # Nav heuristic: links inside <nav or header
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

    # Explore / related clusters
    explore = "explore" in body.lower() or "Explore next" in body or "Related guides" in body

    noindex = "noindex" in (robots or "").lower() or "noindex" in ("" if not body else "").lower()
    if x := re.search(r"noindex", robots or "", re.I):
        noindex = True

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
        "has_explore_signals": explore,
        "noindex": noindex or ("noindex" in (robots or "").lower()),
        "has_jsonld": "application/ld+json" in body,
        "has_breadcrumb": "BreadcrumbList" in body or "breadcrumb" in body.lower(),
    }


def load_sitemap() -> list[str]:
    xml = (OUT / "_prod-sitemap.xml").read_text()
    return re.findall(r"<loc>(.*?)</loc>", xml)


def classify_intent(path: str) -> str:
    p = path.lower()
    if p.startswith("/netherlands/moving/tools/") and "/from/" in p:
        return "country_tool"
    if p.startswith("/netherlands/moving/moving-to-netherlands-from/"):
        return "origin_guide"
    if p in ("/netherlands/health", "/netherlands/education"):
        return "pillar_hub"
    if p.startswith("/netherlands/living/"):
        return "living"
    if p.startswith("/netherlands/visa") or "/citizenship/" in p or "/integration/" in p:
        return "immigration"
    if "/taxes/" in p or "/money/" in p:
        return "money"
    if "/cities/" in p or p.startswith("/netherlands/") and p.count("/") == 2:
        return "city_or_hub"
    if p.startswith("/api/"):
        return "utility"
    return "other"


def write_csv(path: Path, rows: list[dict], fieldnames: list[str]):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def main():
    print("Loading sitemap…")
    locs = load_sitemap()
    print(f"Sitemap locs: {len(locs)}")

    # --- Phase 2: probe every sitemap URL ---
    results = {}
    print("Probing sitemap URLs…")

    def work(loc: str):
        return loc, curl_probe(loc, with_body=True)

    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = [ex.submit(work, loc) for loc in locs]
        done = 0
        for fut in as_completed(futs):
            loc, res = fut.result()
            parsed = parse_html(res.get("body") or "")
            # attach xrobots from probe into parsed noindex
            if "noindex" in (res.get("x_robots") or "").lower():
                parsed["noindex"] = True
            res["parsed"] = parsed
            # probe canonical separately if present
            can = parsed.get("canonical") or ""
            if can:
                cres = curl_probe(can, with_body=False)
                res["canonical_probe"] = {
                    "first_status": cres["first_status"],
                    "final_status": cres["final_status"],
                    "final_url": cres["final_url"],
                    "redirect_hops": cres["redirect_hops"],
                }
            else:
                res["canonical_probe"] = {}
            results[loc] = res
            done += 1
            if done % 50 == 0:
                print(f"  probed {done}/{len(locs)}")

    # Build sitemap-validation + canonical-validation + indexability
    sitemap_rows = []
    canonical_rows = []
    index_rows = []

    for loc in locs:
        r = results[loc]
        p = r.get("parsed") or {}
        path = norm_path(loc)
        final_path = norm_path(r.get("final_url") or loc)
        can = p.get("canonical") or ""
        can_path = norm_path(can) if can else ""
        cp = r.get("canonical_probe") or {}
        robots = p.get("robots") or r.get("x_robots") or ""
        noindex = bool(p.get("noindex")) or "noindex" in robots.lower()
        first = r.get("first_status") or 0
        final = r.get("final_status") or 0

        self_can = bool(can) and can_path == final_path and final == 200
        indexable = final == 200 and not noindex and first in (200, 301, 302, 303, 307, 308)
        # Prefer first hop 200 for sitemap purity
        sitemap_ok_status = first == 200

        intent = classify_intent(path)
        # staged NG/PH tools
        staged = bool(re.search(r"/from/(nigeria|philippines)/?$", path)) and final >= 400

        sitemap_rows.append({
            "url": loc,
            "path": path,
            "first_http_status": first,
            "final_url": r.get("final_url") or "",
            "final_http_status": final,
            "redirect_hops": r.get("redirect_hops") or 0,
            "robots": robots,
            "canonical": can,
            "canonical_http_status": cp.get("first_status") or "",
            "canonical_final_status": cp.get("final_status") or "",
            "self_canonical": self_can,
            "h1_count": p.get("h1_count") or 0,
            "title": (p.get("title") or "")[:200],
            "indexability": "INDEXABLE" if indexable and not staged else (
                "STAGED_NOT_LAUNCHED" if staged else (
                    "INTENTIONALLY_NOINDEX" if noindex and final == 200 else (
                        "REDIRECT" if first >= 300 and first < 400 else (
                            "BROKEN" if final >= 400 else "UNKNOWN"
                        )
                    )
                )
            ),
            "intent": intent,
            "error": r.get("error") or "",
        })

        can_first = cp.get("first_status") or 0
        can_final = cp.get("final_status") or 0
        canonical_rows.append({
            "url": loc,
            "path": path,
            "final_http_status": final,
            "canonical": can,
            "canonical_path": can_path,
            "canonical_first_status": can_first,
            "canonical_final_status": can_final,
            "canonical_to_redirect": can_first in (301, 302, 303, 307, 308),
            "canonical_to_404": can_final >= 400,
            "canonical_to_noindex": False,  # filled later if we fetch body
            "sitemap_equals_canonical": can_path == path if can else False,
            "self_canonical": self_can,
            "trailing_slash_canonical": can.endswith("/") and can.rstrip("/") != BASE,
        })

        cls = sitemap_rows[-1]["indexability"]
        index_rows.append({
            "url": loc,
            "path": path,
            "classification": cls,
            "first_http_status": first,
            "final_http_status": final,
            "robots": robots,
            "intent": intent,
            "notes": "NG/PH tool still in sitemap" if staged else "",
        })

    write_csv(OUT / "sitemap-validation.csv", sitemap_rows, list(sitemap_rows[0].keys()))
    write_csv(OUT / "canonical-validation.csv", canonical_rows, list(canonical_rows[0].keys()))
    write_csv(OUT / "indexability-validation.csv", index_rows, list(index_rows[0].keys()))

    # Summaries
    print("Sitemap first=200:", sum(1 for r in sitemap_rows if r["first_http_status"] == 200))
    print("Sitemap first=3xx:", sum(1 for r in sitemap_rows if 300 <= r["first_http_status"] < 400))
    print("Sitemap final=4xx:", sum(1 for r in sitemap_rows if r["final_http_status"] >= 400))
    print("Self-canonical:", sum(1 for r in sitemap_rows if r["self_canonical"]))
    print("Canonical→redirect:", sum(1 for r in canonical_rows if r["canonical_to_redirect"]))
    print("INDEXABLE:", sum(1 for r in index_rows if r["classification"] == "INDEXABLE"))
    print("STAGED:", sum(1 for r in index_rows if r["classification"] == "STAGED_NOT_LAUNCHED"))
    print("BROKEN:", sum(1 for r in index_rows if r["classification"] == "BROKEN"))

    # Save probe cache for link crawl
    slim = {}
    for loc, r in results.items():
        slim[norm_path(loc)] = {
            "loc": loc,
            "final_status": r.get("final_status"),
            "first_status": r.get("first_status"),
            "hrefs": (r.get("parsed") or {}).get("internal_hrefs") or [],
            "nav_hrefs": (r.get("parsed") or {}).get("nav_hrefs") or [],
            "title": (r.get("parsed") or {}).get("title") or "",
            "h1_count": (r.get("parsed") or {}).get("h1_count") or 0,
            "h1_text": (r.get("parsed") or {}).get("h1_text") or "",
            "robots": (r.get("parsed") or {}).get("robots") or "",
            "canonical": (r.get("parsed") or {}).get("canonical") or "",
            "noindex": (r.get("parsed") or {}).get("noindex") or False,
            "description": (r.get("parsed") or {}).get("description") or "",
            "og_url": (r.get("parsed") or {}).get("og_url") or "",
            "has_jsonld": (r.get("parsed") or {}).get("has_jsonld") or False,
            "has_breadcrumb": (r.get("parsed") or {}).get("has_breadcrumb") or False,
            "indexability": next(x["indexability"] for x in sitemap_rows if x["url"] == loc),
        }
    (OUT / "_probe-cache.json").write_text(json.dumps(slim))
    print("Wrote probe cache + validation CSVs")


if __name__ == "__main__":
    main()
