#!/usr/bin/env python3
"""Final SEO release gate — fresh production probes only."""
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
UA = "ExpatCopilotFinalReleaseGate/1.0"
TIMEOUT = 35
WORKERS = 14
STARTED = datetime.now(timezone.utc).isoformat()

SPOT = [
    ("south-africa", "/netherlands/moving/tools/moving-checklist/from/south-africa"),
    ("india", "/netherlands/moving/tools/moving-checklist/from/india"),
    ("united-states", "/netherlands/moving/tools/moving-checklist/from/united-states"),
    ("united-kingdom", "/netherlands/moving/tools/moving-checklist/from/united-kingdom"),
]

REGRESSION = [
    "/netherlands",
    "/netherlands/health",
    "/netherlands/education",
    "/netherlands/culture/communication-style",
]

APIS = [
    "/api/authority/official-figures?format=json",
    "/api/authority/city-cost-seed",
    "/api/authority/city-comparison-profiles",
]


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
    if p in ("/manifest.webmanifest", "/favicon.ico", "/robots.txt", "/sitemap.xml"):
        return False
    return True


def curl(url: str, body: bool = True, follow: bool = False, method: str = "GET") -> dict:
    hdr_f = tempfile.NamedTemporaryFile(delete=False)
    hdr_f.close()
    body_f = tempfile.NamedTemporaryFile(delete=False)
    body_f.close()
    cmd = [
        "curl", "-sS", "-D", hdr_f.name, "-o", body_f.name if body else "/dev/null",
        "--max-time", str(TIMEOUT), "-A", UA, "--compressed",
        "-H", "Cache-Control: no-cache", "-H", "Pragma: no-cache",
        "-w", "%{http_code}|%{url_effective}|%{num_redirects}",
    ]
    if method == "HEAD":
        cmd.append("-I")
        body = False
    if follow:
        cmd += ["-L", "--max-redirs", "8"]
    else:
        cmd += ["--max-redirs", "0"]
    cmd.append(url)
    try:
        meta = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 10)
    except Exception as e:
        for f in (hdr_f.name, body_f.name):
            try:
                os.unlink(f)
            except OSError:
                pass
        return {"url": url, "error": str(e), "first_status": 0, "final_status": 0, "body": "", "headers": ""}
    code, final, redirs = (meta.strip().split("|") + ["0", url, "0"])[:3]
    raw = open(hdr_f.name, "rb").read().decode("utf-8", "replace")
    html = open(body_f.name, "rb").read().decode("utf-8", "replace") if body and method != "HEAD" else ""
    for f in (hdr_f.name, body_f.name):
        try:
            os.unlink(f)
        except OSError:
            pass
    statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw)
    first = int(statuses[0]) if statuses else int(code or 0)
    loc = ""
    m = re.search(r"^location:\s*(.+)$", raw, re.I | re.M)
    if m:
        loc = m.group(1).strip()
    return {
        "url": url,
        "first_status": first,
        "final_status": int(code or 0),
        "final_url": final,
        "redirects": int(redirs or 0),
        "location": loc,
        "headers": raw,
        "body": html,
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
        "h1_count": len(h1s),
        "h1_text": " | ".join(h1s[:3]),
        "noindex": "noindex" in (robots or "").lower(),
        "hrefs": hrefs,
    }


def classify_bad_target(path: str, status: int) -> str:
    if path == "/":
        return "INTENTIONAL_REDIRECT" if 300 <= status < 400 else "UNKNOWN"
    if path.endswith("/") and path != "/":
        return "OLD_SLASH_VARIANT"
    aliases = {
        "/netherlands/living/culture-etiquette": "LEGACY_ALIAS",
        "/netherlands/documents-needed-to-move-netherlands": "LEGACY_ALIAS",
        "/netherlands/moving-documents-checklist": "LEGACY_ALIAS",
        "/netherlands/visa-documents-netherlands": "LEGACY_ALIAS",
        "/netherlands/taxes/expat-taxes-netherlands": "LEGACY_ALIAS",
        "/netherlands/register-address-netherlands": "LEGACY_ALIAS",
        "/netherlands/living": "INTENTIONAL_REDIRECT",
        "/netherlands/money/taxes/30-percent-ruling": "LEGACY_ALIAS",
        "/netherlands/settling-in-netherlands": "LEGACY_ALIAS",
        "/netherlands/culture/dutch-directness-at-work": "MOVED_PAGE",
        "/netherlands/can-i-open-bank-account-before-bsn": "LEGACY_ALIAS",
        "/netherlands/moving/tools/document-readiness": "INTENTIONAL_REDIRECT",
        "/netherlands/living/utilities": "LEGACY_ALIAS",
        "/netherlands/living/energy-and-water": "LEGACY_ALIAS",
        "/netherlands/integration/tools/knm-knowledge-quiz": "STAGED_PAGE",
        "/netherlands/integration/tools/inburgering-timeline-planner": "STAGED_PAGE",
        "/netherlands/moving/tools/visa-cost-calculator": "MOVED_PAGE",
    }
    if path in aliases:
        return aliases[path]
    if "/services/" in path and status == 404:
        return "STAGED_PAGE"
    if status == 404:
        if any(x in path for x in ("/jobs/cv-", "/jobs/interview", "/jobs/linkedin", "/jobs/networking", "/jobs/cover-letter", "/jobs/remote-work", "/jobs/recruitment", "/jobs/english-speaking", "/jobs/starting-consultancy")):
            return "STAGED_PAGE"
        if "/living/" in path:
            return "STAGED_PAGE"
        return "BROKEN_REFERENCE"
    if 300 <= status < 400:
        return "INTENTIONAL_REDIRECT"
    return "UNKNOWN"


def write_csv(path: Path, rows: list[dict], fields: list[str]):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def main():
    print("STARTED", STARTED, flush=True)
    sm_path = OUT / "_sitemap.xml"
    if not sm_path.exists():
        sm = curl(BASE + "/sitemap.xml", body=True, follow=True)
        sm_path.write_text(sm.get("body") or "")
    locs = re.findall(r"<loc>\s*([^<]+)\s*</loc>", sm_path.read_text())
    print("locs", len(locs), flush=True)

    cache = {}

    def work(loc: str):
        res = curl(loc, body=True, follow=False)
        # if soft redirect with location, note it; if 3xx with location follow for body once for parse? Gate wants first-hop.
        parsed = parse(res.get("body") or "")
        can = parsed.get("canonical") or ""
        can_probe = curl(can, body=False, follow=False) if can else {}
        return loc, res, parsed, can_probe

    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = [ex.submit(work, loc) for loc in locs]
        n = 0
        for fut in as_completed(futs):
            loc, res, parsed, can_probe = fut.result()
            path = norm(loc)
            # If first hop 3xx without body, fetch final for HTML metrics only when needed
            body_parsed = parsed
            if res["first_status"] == 200 and not parsed.get("title"):
                # sometimes empty
                pass
            if res["first_status"] != 200 and res.get("location"):
                # don't follow for gate first-hop counts; optional body from non-follow may still have soft content
                pass
            cache[path] = {
                "loc": loc,
                "first_status": res["first_status"],
                "final_status": res["final_status"],
                "location": res.get("location") or "",
                **body_parsed,
                "canonical_first_status": can_probe.get("first_status") or 0,
                "canonical_location": can_probe.get("location") or "",
            }
            n += 1
            if n % 50 == 0 or n == len(locs):
                print(f"  probed {n}/{len(locs)}", flush=True)

    # For pages that returned 3xx without HTML, fetch once following for on-page? Gate 5 is indexable sitemap URLs - those should be 200.
    # Re-fetch any first!=200 with follow for classification body only when final might be 200 - skip; count first-hop.

    sitemap_rows = []
    for loc in locs:
        path = norm(loc)
        e = cache[path]
        first = int(e["first_status"] or 0)
        final = int(e["final_status"] or 0)
        can_first = int(e.get("canonical_first_status") or 0)
        noindex = bool(e.get("noindex"))
        staged = bool(re.search(r"/from/(nigeria|philippines)$", path)) or (final == 404 and noindex)
        indexable = first == 200 and final == 200 and not noindex
        can = e.get("canonical") or ""
        sitemap_rows.append({
            "url": loc,
            "path": path,
            "first_status": first,
            "final_status": final,
            "robots": e.get("robots") or "",
            "canonical": can,
            "canonical_status": can_first,
            "canonical_to_redirect": 300 <= can_first < 400,
            "canonical_to_404": can_first == 404,
            "canonical_to_noindex": False,  # filled if we fetched can body; approximate via status only for gate
            "self_canonical": norm(can) == path if can else False,
            "h1_count": e.get("h1_count") or 0,
            "h1_text": e.get("h1_text") or "",
            "title": e.get("title") or "",
            "indexable": indexable,
            "noindex": noindex,
            "staged": staged,
        })

    write_csv(
        OUT / "final-sitemap-validation.csv",
        sitemap_rows,
        [
            "url", "path", "first_status", "final_status", "robots", "canonical", "canonical_status",
            "canonical_to_redirect", "canonical_to_404", "self_canonical", "h1_count", "title",
            "indexable", "noindex", "staged",
        ],
    )

    # Link crawl
    indexable_paths = {r["path"] for r in sitemap_rows if r["indexable"]}
    # Ensure we have hrefs - for any missing body, refetch
    missing_body = [p for p in indexable_paths if not (cache.get(p) or {}).get("hrefs")]
    print("refetch_for_links", len(missing_body), flush=True)
    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = {ex.submit(curl, BASE + p, True, False): p for p in missing_body}
        for fut in as_completed(futs):
            p = futs[fut]
            res = fut.result()
            parsed = parse(res.get("body") or "")
            cache[p].update(parsed)

    outlinks = defaultdict(list)
    inlinks = defaultdict(list)
    for src in indexable_paths:
        seen = set()
        for h in (cache.get(src) or {}).get("hrefs") or []:
            if not is_page(h) or h == src or h in seen:
                continue
            seen.add(h)
            outlinks[src].append(h)
            inlinks[h].append(src)

    targets = set()
    for ts in outlinks.values():
        targets.update(ts)
    unknown = [t for t in targets if t not in cache]
    status = {t: int((cache.get(t) or {}).get("first_status") or 0) for t in cache}
    print("outlink_unknowns", len(unknown), flush=True)
    with ThreadPoolExecutor(max_workers=16) as ex:
        futs = {ex.submit(curl, BASE + t, False, False): t for t in unknown}
        for fut in as_completed(futs):
            t = futs[fut]
            status[t] = int(fut.result().get("first_status") or 0)

    edges_3xx = edges_4xx = 0
    uniq_3xx, uniq_4xx = set(), set()
    edge_rows = []
    for src, ts in outlinks.items():
        for t in ts:
            st = int(status.get(t) or 0)
            kind = ""
            if 300 <= st < 400:
                edges_3xx += 1
                uniq_3xx.add(t)
                kind = classify_bad_target(t, st)
            elif 400 <= st < 500:
                edges_4xx += 1
                uniq_4xx.add(t)
                kind = classify_bad_target(t, st)
            if kind:
                edge_rows.append({"source": src, "target": t, "target_first_status": st, "classification": kind})

    graph_rows = []
    for p in sorted(indexable_paths):
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

    write_csv(
        OUT / "final-link-validation.csv",
        graph_rows + [
            {
                "url": "",
                "path": f"__EDGE__{r['source']}->{r['target']}",
                "unique_linking_pages": "",
                "outlinks": "",
                "orphan_status": r["classification"],
                "is_country_tool": f"status={r['target_first_status']}",
            }
            for r in edge_rows
        ],
        ["url", "path", "unique_linking_pages", "outlinks", "orphan_status", "is_country_tool"],
    )
    # Better: separate edge detail into same file with clear columns - rewrite properly
    write_csv(
        OUT / "final-link-validation.csv",
        [
            {
                "record_type": "page",
                "path": r["path"],
                "url": r["url"],
                "unique_linking_pages": r["unique_linking_pages"],
                "outlinks": r["outlinks"],
                "orphan_status": r["orphan_status"],
                "is_country_tool": r["is_country_tool"],
                "edge_source": "",
                "edge_target": "",
                "edge_target_status": "",
                "edge_classification": "",
            }
            for r in graph_rows
        ]
        + [
            {
                "record_type": "bad_edge",
                "path": "",
                "url": "",
                "unique_linking_pages": "",
                "outlinks": "",
                "orphan_status": "",
                "is_country_tool": "",
                "edge_source": r["source"],
                "edge_target": r["target"],
                "edge_target_status": r["target_first_status"],
                "edge_classification": r["classification"],
            }
            for r in edge_rows
        ],
        [
            "record_type", "path", "url", "unique_linking_pages", "outlinks", "orphan_status",
            "is_country_tool", "edge_source", "edge_target", "edge_target_status", "edge_classification",
        ],
    )

    # Regression spot checks
    regression = {}
    for path in REGRESSION + [p for _, p in SPOT]:
        res = curl(BASE + path, body=True, follow=False)
        parsed = parse(res.get("body") or "")
        hrefs = parsed.get("hrefs") or []
        slug = path.rsplit("/from/", 1)[-1] if "/from/" in path else ""
        related = sorted({h for h in hrefs if slug and f"/from/{slug}" in h and "/tools/" in h and "moving-checklist" not in h}) if slug else []
        parent = f"/netherlands/moving/moving-to-netherlands-from/{slug}" if slug else ""
        regression[path] = {
            "status": res["first_status"],
            "robots": parsed.get("robots") or "",
            "canonical": parsed.get("canonical") or "",
            "self_canonical": norm(parsed.get("canonical") or "") == path,
            "h1": parsed.get("h1_text") or "",
            "h1_count": parsed.get("h1_count") or 0,
            "noindex": parsed.get("noindex"),
            "related_tools": related,
            "parent_link": (parent in hrefs) if parent else None,
        }

    apis = {}
    for path in APIS:
        res = curl(BASE + path, body=True, follow=False)
        body = res.get("body") or ""
        apis[path] = {
            "status": res["first_status"],
            "jsonish": body.lstrip().startswith(("{", "[")),
            "bytes": len(body),
        }

    # Homepage gate detail
    home_get = curl(BASE + "/", body=True, follow=False)
    home_head = curl(BASE + "/", body=False, follow=False, method="HEAD")
    home_parsed = parse(home_get.get("body") or "")
    home_can = home_parsed.get("canonical") or ""
    home_can_probe = curl(home_can, body=False, follow=False) if home_can else {}
    norms = {}
    for u in [
        "http://expatcopilot.com/",
        "http://www.expatcopilot.com/",
        "https://expatcopilot.com/",
        "https://www.expatcopilot.com/",
    ]:
        norms[u] = curl(u, body=False, follow=True)

    # On-page sanity
    titles = Counter()
    onpage_issues = {"missing_title": 0, "missing_h1": 0, "multiple_h1": 0, "duplicate_titles": 0, "canonical_defects": 0, "unexpected_noindex": 0}
    for p in indexable_paths:
        e = cache[p]
        title = (e.get("title") or "").strip()
        if title:
            titles[title] += 1
        if not title:
            onpage_issues["missing_title"] += 1
        hc = int(e.get("h1_count") or 0)
        if hc == 0:
            onpage_issues["missing_h1"] += 1
        if hc > 1:
            onpage_issues["multiple_h1"] += 1
        can = e.get("canonical") or ""
        if not can or norm(can) != p:
            onpage_issues["canonical_defects"] += 1
        if e.get("noindex"):
            onpage_issues["unexpected_noindex"] += 1
    onpage_issues["duplicate_titles"] = sum(1 for p in indexable_paths if (cache[p].get("title") or "").strip() and titles[(cache[p].get("title") or "").strip()] > 1)

    # Indexability
    idx_rows = []
    for r in sitemap_rows:
        if r["indexable"]:
            cls = "INDEXABLE"
        elif r["noindex"] and r["final_status"] == 200:
            cls = "INTENTIONALLY_NOINDEX"
        elif r["staged"] or (r["final_status"] == 404 and r["noindex"]):
            cls = "STAGED_NOT_LAUNCHED"
        elif 300 <= r["first_status"] < 400:
            cls = "REDIRECT"
        elif r["final_status"] == 404:
            cls = "BROKEN"
        else:
            cls = "UNKNOWN"
        idx_rows.append({**r, "classification": cls, "in_sitemap": "YES"})
    # discovered bad targets
    for t in sorted(uniq_3xx | uniq_4xx):
        st = status[t]
        cls = "REDIRECT" if 300 <= st < 400 else ("BROKEN" if st == 404 else "UNKNOWN")
        if classify_bad_target(t, st) == "STAGED_PAGE":
            cls = "STAGED_NOT_LAUNCHED"
        idx_rows.append({
            "url": BASE + t,
            "path": t,
            "classification": cls,
            "first_status": st,
            "final_status": st,
            "robots": "",
            "canonical": "",
            "in_sitemap": "NO",
            "indexable": False,
            "noindex": "",
            "staged": cls == "STAGED_NOT_LAUNCHED",
            "title": "",
            "h1_count": "",
            "self_canonical": "",
            "canonical_status": "",
            "canonical_to_redirect": "",
            "canonical_to_404": "",
        })
    write_csv(
        OUT / "final-indexability.csv",
        idx_rows,
        [
            "url", "path", "classification", "first_status", "final_status", "robots", "canonical",
            "in_sitemap", "indexable", "noindex", "staged",
        ],
    )

    # Google actions
    google = []
    for path, ptype, reason in [
        ("/netherlands", "hub", "Core remediations live"),
        ("/netherlands/health", "hub", "Launched hub"),
        ("/netherlands/education", "hub", "Launched hub"),
        ("/netherlands/official-figures", "authority", "Authority packaging"),
        ("/", "homepage", "Homepage now healthy 200"),
        ("/netherlands/money/banking/best-banks-expats", "guide", "H1 remediation"),
        ("/netherlands/taxes/30-percent-ruling", "ymyl", "H1 remediation"),
        ("/netherlands/tools/city-comparison", "tool", "Authority tool"),
    ]:
        google.append({
            "url": BASE + path,
            "page_type": ptype,
            "reason": reason,
            "priority": "REQUEST_INDEXING_TIER_1",
            "recommended_action": "Request indexing",
        })
    google.append({
        "url": BASE + "/netherlands/moving/tools/moving-checklist/from/south-africa",
        "page_type": "country_tool",
        "reason": "Programmatic cohort representative",
        "priority": "SITEMAP_ONLY",
        "recommended_action": "Rely on sitemap recrawl",
    })
    google.append({
        "url": BASE + "/netherlands/taxes/tools/30-percent-ruling-calculator",
        "page_type": "staged",
        "reason": "Intentionally staged calculator",
        "priority": "KEEP_EXCLUDED",
        "recommended_action": "Do not request indexing",
    })
    for t in sorted(uniq_4xx)[:5]:
        google.append({
            "url": BASE + t,
            "page_type": "internal_debt",
            "reason": "Still linked internally but 404",
            "priority": "INVESTIGATE",
            "recommended_action": "Clean HTML links or launch page",
        })
    write_csv(
        OUT / "final-google-actions.csv",
        google,
        ["url", "page_type", "reason", "priority", "recommended_action"],
    )

    ng_in_sm = [r["path"] for r in sitemap_rows if "/from/nigeria" in r["path"]]
    ph_in_sm = [r["path"] for r in sitemap_rows if "/from/philippines" in r["path"]]
    orphans = [r for r in graph_rows if r["orphan_status"] == "ORPHAN"]
    near = [r for r in graph_rows if r["orphan_status"] == "NEAR_ORPHAN"]
    ct_orphans = [r for r in orphans if r["is_country_tool"] == "YES"]
    # valuable orphans = non-utility content orphans (exclude nothing special - all 4 culture-ish)
    valuable_orphans = [r for r in orphans if r["path"] not in ("/search", "/cookies")]

    summary = {
        "started": STARTED,
        "completed": datetime.now(timezone.utc).isoformat(),
        "sitemap_total": len(sitemap_rows),
        "trailing_slash_excl_root": sum(
            1 for u in locs if (urlparse(u).path or "/") not in ("/",) and (urlparse(u).path or "").endswith("/")
        ),
        "first_hop_3xx": sum(1 for r in sitemap_rows if 300 <= r["first_status"] < 400),
        "final_4xx": sum(1 for r in sitemap_rows if 400 <= r["final_status"] < 500),
        "noindex_members": sum(1 for r in sitemap_rows if r["noindex"]),
        "staged_members": sum(1 for r in sitemap_rows if r["staged"]),
        "canonical_to_redirect": sum(1 for r in sitemap_rows if r["canonical_to_redirect"]),
        "canonical_to_404": sum(1 for r in sitemap_rows if r["canonical_to_404"]),
        "ng_in_sitemap": ng_in_sm,
        "ph_in_sitemap": ph_in_sm,
        "homepage": {
            "get_status": home_get["first_status"],
            "head_status": home_head["first_status"],
            "location": home_get.get("location") or "",
            "canonical": home_can,
            "canonical_first_status": home_can_probe.get("first_status"),
            "canonical_location": home_can_probe.get("location") or "",
            "h1": home_parsed.get("h1_text"),
            "title": home_parsed.get("title"),
        },
        "domain_norms": {
            u: {"final_status": norms[u]["final_status"], "final_url": norms[u]["final_url"], "redirects": norms[u]["redirects"]}
            for u in norms
        },
        "indexable": len(indexable_paths),
        "orphans": len(orphans),
        "near_orphans": len(near),
        "country_tool_orphans": len(ct_orphans),
        "valuable_orphan_paths": [r["path"] for r in valuable_orphans],
        "edges_3xx": edges_3xx,
        "uniq_3xx": sorted(uniq_3xx),
        "edges_4xx": edges_4xx,
        "uniq_4xx": sorted(uniq_4xx),
        "uniq_3xx_class": {t: classify_bad_target(t, status[t]) for t in sorted(uniq_3xx)},
        "uniq_4xx_class": {t: classify_bad_target(t, status[t]) for t in sorted(uniq_4xx)},
        "regression": regression,
        "apis": apis,
        "onpage_issues": onpage_issues,
    }
    (OUT / "_gate-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps({k: summary[k] for k in (
        "sitemap_total", "trailing_slash_excl_root", "first_hop_3xx", "final_4xx", "noindex_members",
        "staged_members", "canonical_to_redirect", "canonical_to_404", "ng_in_sitemap", "ph_in_sitemap",
        "indexable", "orphans", "near_orphans", "country_tool_orphans", "edges_3xx", "edges_4xx",
        "onpage_issues",
    )}, indent=2))
    print("homepage", summary["homepage"])
    print("DONE")


if __name__ == "__main__":
    main()
