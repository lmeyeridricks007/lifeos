#!/usr/bin/env python3
"""Fresh hubs, authority, params, country mesh, outlink status — network only."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFreshProductionReview/1.0"
TIMEOUT = 30

COUNTRY_SPOT = [
    ("south-africa", "south-africa"),
    ("india", "india"),
    ("united-states", "united-states"),
    ("united-kingdom", "united-kingdom"),
    ("brazil", "brazil"),
    ("turkey", "turkey"),  # Türkiye slug on site
    ("indonesia", "indonesia"),
    ("australia", "australia"),
]

PARAM_SAMPLES = [
    "/netherlands/moving/tools/moving-checklist?from=south-africa",
    "/netherlands/moving/tools/moving-checklist?step=2",
    "/netherlands/moving/tools/first-90-days?week=1",
    "/netherlands/visa-checker?nationality=south-africa",
    "/netherlands/visa/tools/visa-cost-calculator?visa=hsm",
    "/netherlands/money/tools/cost-of-living-calculator?city=amsterdam",
    "/netherlands/tools/city-comparison?a=amsterdam&b=rotterdam",
]

AUTHORITY = [
    "/netherlands/official-figures",
    "/netherlands/moving/tools/hsm-salary-checker",
    "/netherlands/taxes/30-percent-ruling",
    "/netherlands/taxes/tools/30-percent-ruling-calculator",
    "/netherlands/taxes/tools/dutch-salary-net-calculator",
    "/netherlands/money/tools/cost-of-living-calculator",
    "/netherlands/tools/city-comparison",
]

APIS = [
    "/api/authority/official-figures?format=json",
    "/api/authority/city-cost-seed",
    "/api/authority/city-comparison-profiles",
]


def curl(url: str, body: bool = True, follow: bool = True) -> dict:
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    bf = tempfile.NamedTemporaryFile(delete=False)
    bf.close()
    cmd = [
        "curl", "-sS", "-D", hdr.name, "-o", bf.name if body else "/dev/null",
        "--max-time", str(TIMEOUT), "-A", UA, "--compressed",
        "-H", "Cache-Control: no-cache", "-H", "Pragma: no-cache",
        "-w", "%{http_code}|%{url_effective}|%{num_redirects}",
    ]
    if follow:
        cmd += ["-L", "--max-redirs", "8"]
    else:
        cmd += ["--max-redirs", "0"]
    cmd.append(url)
    try:
        meta = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 10)
    except Exception as e:
        return {"url": url, "error": str(e)}
    code, final, redirs = (meta.strip().split("|") + ["0", url, "0"])[:3]
    raw = open(hdr.name, "rb").read().decode("utf-8", "replace")
    html = open(bf.name, "rb").read().decode("utf-8", "replace") if body else ""
    os.unlink(hdr.name)
    if body:
        os.unlink(bf.name)
    statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw)
    first = int(statuses[0]) if statuses else int(code or 0)
    # first-hop without follow for status clarity
    if follow:
        h2 = tempfile.NamedTemporaryFile(delete=False)
        h2.close()
        cmd2 = [
            "curl", "-sS", "-D", h2.name, "-o", "/dev/null", "--max-time", str(TIMEOUT),
            "-A", UA, "--max-redirs", "0", "-w", "%{http_code}",
            "-H", "Cache-Control: no-cache", url,
        ]
        try:
            first = int(subprocess.check_output(cmd2, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 5).strip() or 0)
        except Exception:
            pass
        os.unlink(h2.name)
    robots = ""
    m = re.search(r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', html, re.I)
    if m:
        robots = m.group(1)
    can = ""
    m = re.search(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html, re.I)
    if m:
        can = m.group(1)
    title = ""
    m = re.search(r"<title[^>]*>([^<]+)</title>", html, re.I)
    if m:
        title = unescape(m.group(1).strip())
    h1 = ""
    m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    if m:
        h1 = unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(1)))).strip()
    return {
        "request": url,
        "first_status": first,
        "final_status": int(code or 0),
        "final_url": final,
        "redirects": int(redirs or 0),
        "robots": robots,
        "canonical": can,
        "title": title,
        "h1": h1,
        "html": html,
        "noindex": "noindex" in robots.lower(),
    }


def strip(s: str) -> str:
    return unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s))).strip()


def main():
    sm = (OUT / "_fresh-sitemap.xml").read_text()
    locs = set(re.findall(r"<loc>(.*?)</loc>", sm))

    # Hubs
    hubs = {}
    for path in ("/netherlands/health", "/netherlands/education"):
        res = curl(BASE + path)
        html = res.get("html") or ""
        children = sorted(set(re.findall(rf'href=["\']({re.escape(path)}/[^"\'?#]+)["\']', html, re.I)))
        hubs[path] = {
            "first_status": res["first_status"],
            "final_status": res["final_status"],
            "robots": res["robots"],
            "canonical": res["canonical"],
            "h1": res["h1"],
            "title": res["title"],
            "coming_soon_shell": bool(re.search(r"coming soon.*planned and linked|mega menu", html, re.I)),
            "coming_soon_mentions": len(re.findall(r"coming soon", html, re.I)),
            "child_links": children,
            "child_count": len(children),
            "in_sitemap": (BASE + path) in locs,
            "self_canonical": res["canonical"] == BASE + path,
            "indexable": res["final_status"] == 200 and not res["noindex"],
            "launched": res["final_status"] == 200 and not res["noindex"] and bool(res["h1"]) and len(children) > 0,
        }

    # Country mesh
    mesh = []
    for label, slug in COUNTRY_SPOT:
        path = f"/netherlands/moving/tools/moving-checklist/from/{slug}"
        res = curl(BASE + path)
        html = res.get("html") or ""
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', html)
        paths = []
        for h in hrefs:
            full = urljoin(BASE + path, h)
            if "expatcopilot.com" in urlparse(full).netloc:
                p = urlparse(full).path or "/"
                if p != "/" and p.endswith("/"):
                    p = p[:-1]
                paths.append(p)
        parent = f"/netherlands/moving/moving-to-netherlands-from/{slug}"
        related = sorted({p for p in paths if f"/from/{slug}" in p and "moving-checklist" not in p and "/tools/" in p})
        nexts = [p for p in paths if p in (
            parent, "/netherlands/moving-to-the-netherlands", "/netherlands/visa-checker",
            "/netherlands/moving/tools/first-90-days", "/netherlands/moving/tools/arrival-planner",
        ) or (p.startswith("/netherlands/moving") and "/from/" not in p)]
        mesh.append({
            "country": label,
            "slug": slug,
            "path": path,
            "status": res["final_status"],
            "robots": res["robots"],
            "h1": res["h1"],
            "parent_country_link": parent in paths,
            "related_tools_count": len(related),
            "related_tools": "|".join(related),
            "has_next_steps": bool(nexts),
        })

    # Authority
    auth_pages = []
    for path in AUTHORITY:
        res = curl(BASE + path)
        html = res.get("html") or ""
        auth_pages.append({
            "path": path,
            "first_status": res["first_status"],
            "final_status": res["final_status"],
            "robots": res["robots"],
            "canonical": res["canonical"],
            "h1": res["h1"][:160],
            "title": (res["title"] or "")[:140],
            "has_methodology": bool(re.search(r"methodolog|how (we|this)|assumption|source", html, re.I)),
            "has_as_of": bool(re.search(r"as of|last (reviewed|updated)|updated", html, re.I)),
            "has_disclaimer": bool(re.search(r"not (legal|tax|financial|immigration) advice|general information|orientation", html, re.I)),
            "has_official_link": bool(re.search(r"rijksoverheid|ind\.nl|belastingdienst|government\.nl|cbs\.nl", html, re.I)),
            "coming_soon": "coming soon" in html.lower(),
            "noindex": res["noindex"],
            "download_or_api_mention": bool(re.search(r"/api/authority|download|json|csv|dataset", html, re.I)),
        })

    auth_apis = []
    for path in APIS:
        res = curl(BASE + path, body=True, follow=True)
        html = res.get("html") or ""
        auth_apis.append({
            "path": path,
            "first_status": res["first_status"],
            "final_status": res["final_status"],
            "looks_json": html.lstrip().startswith(("{", "[")),
            "bytes": len(html),
        })

    params = []
    for pq in PARAM_SAMPLES:
        res = curl(BASE + pq)
        base_path = pq.split("?")[0]
        params.append({
            "url": BASE + pq,
            "first_status": res["first_status"],
            "final_status": res["final_status"],
            "robots": res["robots"],
            "canonical": res["canonical"],
            "noindex": res["noindex"],
            "canonical_is_base": (res["canonical"] or "").rstrip("/") == (BASE + base_path).rstrip("/"),
        })

    out = {
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "hubs": hubs,
        "mesh": mesh,
        "auth_pages": auth_pages,
        "auth_apis": auth_apis,
        "params": params,
    }
    (OUT / "_fresh-hubs-auth-params.json").write_text(json.dumps(out, indent=2))
    write = OUT / "_fresh-country-mesh.csv"
    with write.open("w", newline="", encoding="utf-8") as f:
        fields = list(mesh[0].keys())
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(mesh)
    print(json.dumps({"hubs": {k: {kk: vv for kk, vv in v.items() if kk != "child_links"} for k, v in hubs.items()},
                      "mesh_ok": sum(1 for m in mesh if m["related_tools_count"] >= 1 and m["parent_country_link"]),
                      "apis": auth_apis}, indent=2))
    print("DONE hubs/auth/params")


if __name__ == "__main__":
    main()
