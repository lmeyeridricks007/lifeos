#!/usr/bin/env python3
"""Country-tool quality, hubs, params, authority, URL normalization — production audit only."""
from __future__ import annotations

import csv
import json
import re
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path
from urllib.parse import urljoin

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFinalProductionReview/1.0"
TIMEOUT = 30

EU_EEA = [
    "germany",
    "france",
    "belgium",
    "spain",
    "italy",
    "portugal",
    "ireland",
    "poland",
    "romania",
    "switzerland",
    "sweden",
    "norway",
]

SPOT = [
    "south-africa",
    "india",
    "united-states",
    "united-kingdom",
    "brazil",
    "turkiye",
    "indonesia",
    "australia",
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

AUTHORITY_PAGES = [
    "/netherlands/official-figures",
    "/netherlands/moving/tools/hsm-salary-checker",
    "/netherlands/taxes/30-percent-ruling",
    "/netherlands/taxes/tools/30-percent-ruling-calculator",
    "/netherlands/money/tools/salary-calculator",
    "/netherlands/money/tools/cost-of-living-calculator",
    "/netherlands/tools/city-comparison",
]

AUTHORITY_APIS = [
    "/api/authority/official-figures?format=json",
    "/api/authority/city-cost-seed",
    "/api/authority/city-comparison-profiles",
]

NORM_CHECKS = [
    ("https://expatcopilot.com/netherlands", "non_www"),
    ("http://www.expatcopilot.com/netherlands", "http"),
    ("https://www.expatcopilot.com/netherlands/", "trailing_slash"),
    ("https://www.expatcopilot.com/Netherlands", "case"),
    ("https://www.expatcopilot.com/netherlands/living/", "trailing_slash_living"),
]


def curl(url: str, body: bool = True) -> dict:
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    bf = tempfile.NamedTemporaryFile(delete=False)
    bf.close()
    cmd = [
        "curl",
        "-sS",
        "-L",
        "--max-redirs",
        "8",
        "-D",
        hdr.name,
        "-o",
        bf.name,
        "--max-time",
        str(TIMEOUT),
        "-A",
        UA,
        "-w",
        "%{http_code}|%{url_effective}|%{num_redirects}",
        "--compressed",
        url,
    ]
    try:
        meta = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 10)
    except Exception as e:
        return {"url": url, "error": str(e)}
    code, final, redirs = (meta.strip().split("|") + ["", "", ""])[:3]
    raw = open(hdr.name, "rb").read().decode("utf-8", "replace")
    html = open(bf.name, "rb").read().decode("utf-8", "replace") if body else ""
    Path(hdr.name).unlink(missing_ok=True)
    Path(bf.name).unlink(missing_ok=True)
    first_statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw)
    robots = ""
    m = re.search(r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', html, re.I)
    if m:
        robots = m.group(1)
    can = ""
    m = re.search(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html, re.I)
    if m:
        can = m.group(1)
    # first hop without follow
    hdr2 = tempfile.NamedTemporaryFile(delete=False)
    hdr2.close()
    cmd2 = [
        "curl",
        "-sS",
        "-D",
        hdr2.name,
        "-o",
        "/dev/null",
        "--max-time",
        str(TIMEOUT),
        "-A",
        UA,
        "-w",
        "%{http_code}",
        "--max-redirs",
        "0",
        url,
    ]
    try:
        first = subprocess.check_output(cmd2, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 5).strip()
        raw2 = open(hdr2.name, "rb").read().decode("utf-8", "replace")
    except Exception:
        first = first_statuses[0] if first_statuses else "0"
        raw2 = ""
    Path(hdr2.name).unlink(missing_ok=True)
    loc = ""
    lm = re.search(r"^location:\s*(.+)$", raw2, re.I | re.M)
    if lm:
        loc = lm.group(1).strip()
    return {
        "request": url,
        "first_status": int(first or 0),
        "final_status": int(code or 0),
        "final_url": final,
        "redirects": int(redirs or 0),
        "location": loc,
        "robots": robots,
        "canonical": can,
        "html": html,
        "title": unescape(re.sub(r"<[^>]+>", "", (re.search(r"<title[^>]*>([^<]+)</title>", html, re.I) or type("x", (), {"group": lambda *_: ""})()).group(1))),
    }


def strip_tags(s: str) -> str:
    return unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s))).strip()


def classify_country_html(html: str, country: str, path: str) -> dict:
    text = strip_tags(html)
    h1m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    h1 = strip_tags(h1m.group(1)) if h1m else ""
    # country mentions beyond template
    country_tokens = country.replace("-", " ").split()
    # look for dedicated sections
    signals = {
        "has_country_in_h1": any(t.lower() in h1.lower() for t in country_tokens) or country.replace("-", " ") in h1.lower() or "Türkiye" in h1 or "Turkiye" in h1,
        "visa_section": bool(re.search(r"visa|MVV|residence permit|Schengen", text, re.I)),
        "docs_section": bool(re.search(r"document|apostille|legalisation|translation", text, re.I)),
        "banking_section": bool(re.search(r"bank|IBAN|DigiD", text, re.I)),
        "timeline_section": bool(re.search(r"timeline|first 90|week 1|checklist", text, re.I)),
        "unique_blocks": len(re.findall(r"from " + re.escape(country.replace("-", " ")), text, re.I))
        + len(re.findall(country.replace("-", " "), text, re.I)),
        "word_count": len(text.split()),
        "related_tools": len(re.findall(r"/netherlands/moving/tools/[^\"']+/from/" + re.escape(country), html)),
    }
    # EU/EEA note
    eu = country in EU_EEA or country in ("germany", "france", "belgium", "switzerland", "ireland", "spain")
    signals["eu_eea_flavor"] = bool(
        re.search(r"EU|EEA|free movement|registration|citizen of", text, re.I)
    ) if eu or True else False

    # Classification
    score = 0
    if signals["has_country_in_h1"]:
        score += 2
    if signals["visa_section"]:
        score += 1
    if signals["docs_section"]:
        score += 1
    if signals["unique_blocks"] >= 5:
        score += 2
    elif signals["unique_blocks"] >= 2:
        score += 1
    if signals["related_tools"] >= 2:
        score += 1
    if signals["word_count"] >= 1200:
        score += 1
    if score >= 7:
        grade = "STRONG_UNIQUE_VALUE"
    elif score >= 4:
        grade = "ADEQUATE"
    elif score >= 2:
        grade = "NEEDS_ENRICHMENT"
    else:
        grade = "INSUFFICIENT_STANDALONE_VALUE"
    return {"path": path, "country": country, "h1": h1[:200], "grade": grade, "score": score, **signals}


def main():
    cache = json.loads((OUT / "_probe-cache.json").read_text())
    # all live country tools from sitemap/cache
    country_paths = sorted(
        p
        for p, e in cache.items()
        if "/moving/tools/" in p
        and "/from/" in p
        and e.get("final_status") == 200
        and not e.get("noindex")
    )

    print(f"Live country-tool URLs: {len(country_paths)}")
    rows = []

    def work(path: str):
        url = BASE + path
        country = path.rsplit("/from/", 1)[-1]
        res = curl(url, body=True)
        cls = classify_country_html(res.get("html") or "", country, path)
        cls["final_status"] = res.get("final_status")
        cls["robots"] = res.get("robots")
        cls["canonical"] = res.get("canonical")
        return cls

    # Full set can be large; probe all live ones
    with ThreadPoolExecutor(max_workers=10) as ex:
        futs = {ex.submit(work, p): p for p in country_paths}
        n = 0
        for fut in as_completed(futs):
            rows.append(fut.result())
            n += 1
            if n % 25 == 0:
                print(f"  country tools {n}/{len(country_paths)}")

    grade_c = {}
    for r in rows:
        grade_c[r["grade"]] = grade_c.get(r["grade"], 0) + 1

    with (OUT / "_country-tool-quality.csv").open("w", newline="", encoding="utf-8") as f:
        fields = [
            "path",
            "country",
            "final_status",
            "grade",
            "score",
            "h1",
            "has_country_in_h1",
            "visa_section",
            "docs_section",
            "banking_section",
            "timeline_section",
            "unique_blocks",
            "word_count",
            "related_tools",
            "eu_eea_flavor",
            "robots",
            "canonical",
        ]
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in sorted(rows, key=lambda x: x["path"]):
            w.writerow(r)

    # Hubs deep check
    hubs = {}
    for path in ("/netherlands/health", "/netherlands/education"):
        res = curl(BASE + path)
        html = res.get("html") or ""
        child_links = sorted(
            set(
                re.findall(
                    rf'href=["\']({re.escape(path)}/[^"\'?#]+)["\']',
                    html,
                    re.I,
                )
            )
        )
        hubs[path] = {
            "first_status": res.get("first_status"),
            "final_status": res.get("final_status"),
            "robots": res.get("robots"),
            "canonical": res.get("canonical"),
            "title": res.get("title"),
            "h1": strip_tags((re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S) or type("x", (), {"group": lambda *_: ""})()).group(1))[:160],
            "child_links_count": len(child_links),
            "child_links_sample": child_links[:15],
            "coming_soon": "coming soon" in html.lower(),
            "in_sitemap": any(
                path == (c if not c.startswith("http") else c.replace(BASE, ""))
                for c in []
            ),
        }

    # sitemap membership
    sm = (OUT / "_prod-sitemap.xml").read_text()
    for path in hubs:
        hubs[path]["in_sitemap"] = (BASE + path) in sm or f"<loc>{BASE}{path}</loc>" in sm

    # params
    param_rows = []
    for pathq in PARAM_SAMPLES:
        url = BASE + pathq
        res = curl(url)
        # also find if base page links to this query
        param_rows.append(
            {
                "url": url,
                "first_status": res.get("first_status"),
                "final_status": res.get("final_status"),
                "final_url": res.get("final_url"),
                "redirects": res.get("redirects"),
                "robots": res.get("robots"),
                "canonical": res.get("canonical"),
                "noindex": "noindex" in (res.get("robots") or "").lower(),
                "self_canonical_ignoring_params": (res.get("canonical") or "").split("?")[0]
                == (res.get("final_url") or "").split("?")[0].rstrip("/")
                or (res.get("canonical") or "").rstrip("/")
                == (BASE + pathq.split("?")[0]),
            }
        )

    # authority
    auth_pages = []
    for path in AUTHORITY_PAGES:
        res = curl(BASE + path)
        html = res.get("html") or ""
        auth_pages.append(
            {
                "path": path,
                "first_status": res.get("first_status"),
                "final_status": res.get("final_status"),
                "robots": res.get("robots"),
                "canonical": res.get("canonical"),
                "title": (res.get("title") or "")[:120],
                "has_methodology": bool(re.search(r"methodolog|how (we|this)|assumptions|sources?", html, re.I)),
                "has_as_of": bool(re.search(r"as of|last (reviewed|updated)|updated", html, re.I)),
                "has_disclaimer": bool(re.search(r"not (legal|tax|financial|immigration) advice|general information|orientation", html, re.I)),
                "has_official_link": bool(re.search(r"rijksoverheid|ind\.nl|belastingdienst|government\.nl|cbs\.nl", html, re.I)),
                "has_jsonld": "application/ld+json" in html,
                "coming_soon": "coming soon" in html.lower(),
                "noindex": "noindex" in (res.get("robots") or "").lower(),
            }
        )

    auth_apis = []
    for path in AUTHORITY_APIS:
        res = curl(BASE + path, body=True)
        html = res.get("html") or ""
        auth_apis.append(
            {
                "path": path,
                "first_status": res.get("first_status"),
                "final_status": res.get("final_status"),
                "final_url": res.get("final_url"),
                "looks_json": html.lstrip().startswith("{") or html.lstrip().startswith("["),
                "bytes": len(html),
            }
        )

    # normalization
    norms = []
    for url, kind in NORM_CHECKS:
        res = curl(url, body=False)
        norms.append(
            {
                "kind": kind,
                "request": url,
                "first_status": res.get("first_status"),
                "final_status": res.get("final_status"),
                "final_url": res.get("final_url"),
                "redirects": res.get("redirects"),
                "location": res.get("location"),
            }
        )

    # EU sample grades
    eu_rows = [r for r in rows if r["country"] in EU_EEA]

    out = {
        "country_tool_live_count": len(country_paths),
        "grade_counts": grade_c,
        "spot_grades": {r["country"]: r["grade"] for r in rows if r["country"] in SPOT},
        "eu_grade_counts": {},
        "hubs": hubs,
        "param_rows": param_rows,
        "auth_pages": auth_pages,
        "auth_apis": auth_apis,
        "norms": norms,
        "insufficient": [r["path"] for r in rows if r["grade"] == "INSUFFICIENT_STANDALONE_VALUE"][:30],
        "needs_enrichment": [r["path"] for r in rows if r["grade"] == "NEEDS_ENRICHMENT"][:30],
    }
    for r in eu_rows:
        out["eu_grade_counts"][r["grade"]] = out["eu_grade_counts"].get(r["grade"], 0) + 1

    (OUT / "_phase8_12_summary.json").write_text(json.dumps(out, indent=2))
    print(json.dumps({k: out[k] for k in ("country_tool_live_count", "grade_counts", "spot_grades", "eu_grade_counts")}, indent=2))
    print("hubs", json.dumps(hubs, indent=2)[:1500])
    print("apis", auth_apis)
    print("params sample", param_rows[:3])
    print("DONE")


if __name__ == "__main__":
    main()
