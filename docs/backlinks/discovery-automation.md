# Discovery automation playbook — finding new outreach targets

This document explains **how to systematically find new backlink / partnership prospects** and **refresh** your lists (especially [07-concrete-outreach-prospects.md](./07-concrete-outreach-prospects.md)) without relying on spam, grey-hat scraping, or unrealistic “fully autonomous” bots.

**Companion docs:** [Backlinks & promotion](../backlinks-and-promotion.md) (strategy), [07-concrete-outreach-prospects.md](./07-concrete-outreach-prospects.md) (canonical prospect table), [01](./01-institutions-and-official.md)–[06](./06-directories-and-roundups.md) (templates + tactics).

---

## 1. What “automation” should mean here

| Good automation | Bad automation |
|-----------------|----------------|
| **Alerts** when new relevant pages appear | Bulk-scraping emails from LinkedIn / WHOIS |
| **Scheduled search** via official **APIs** (with keys) | Ignoring `robots.txt` or site ToS |
| **Diffing** new domains against your tracked list | Auto-merging junk into the repo without review |
| **Cursor / LLM** as a **research assistant** you trigger | Pretending an LLM’s URLs are always live or accurate |

**Rule:** Treat every new row as **candidate** until a human checks the URL, relevance, and contact path.

---

## 2. Cursor (or any LLM) as an on-demand “sourcing bot”

Cursor does **not** run on a calendar. Use it as a **repeatable prompt** you run weekly or monthly.

### 2.1 Save a master prompt (copy into Agent / Chat)

Adapt and store in a personal snippet or internal doc:

```text
Context: We run editorial Netherlands / expat relocation content (guides + tools). 
Open docs/backlinks/07-concrete-outreach-prospects.md and list every root domain already present (from URLs).

Task:
1. Propose 15 NEW organisations not already in that file, prioritising:
   - relocation / immigration law / expat tax / HR mobility / university international offices / English NL media / housing platforms with blogs.
2. For each: organisation name, one primary URL, suggested “reach via” (e.g. blog editor, international office), and one-line why they might link to neutral educational content.
3. Exclude: pure SEO directories, essay mills, unrelated countries, obvious PBNs.
4. Output as a markdown table matching the columns in §07.
5. Flag any URL you are not sure exists — I will verify before adding to the repo.
```

**Optional add-on to the same prompt** (draft + matching asset):

```text
6. For each of the 15 organisations, also output:
   - The single BEST page/tool on our site to pitch (real path from our registry or sitemap).
   - One sentence: what on THEIR site/page makes that asset relevant (quote a heading or topic if possible).
   - A 3–4 sentence email draft in first person, mentioning I relocated from South Africa to the Netherlands
     and went through registration/visa/insurance myself; keep it humble and non-salesy.
7. For each organisation, also draft:
   - **Follow-up #1** (to send ~7–10 business days after no reply), subject + body.
   - **Follow-up #2 (final)** (optional—only for Tier-1 targets, ~7 business days after #1), shorter bump or “wrong person?” variant.
```

**After the run:** you manually verify URLs, dedupe, and append rows to `07` (or a staging CSV — see §6). **Edit every draft** before sending (tone, accuracy, and the exact asset URL).

### 2.2 Optional Cursor Rule

If you use [Cursor Rules](https://docs.cursor.com/context/rules-for-ai), add a short rule: “When asked to find outreach targets, prefer Dutch/EU relevance, cite URLs, dedupe against `docs/backlinks/07-concrete-outreach-prospects.md`, never fabricate contact emails.”

---

## 3. Scheduled discovery outside Cursor

Scheduling lives in **CI**, **serverless cron**, or **no-code** tools—not inside the editor.

### 3.1 Google Alerts (free, low tech)

Create alerts for phrases such as:

- `"moving to the Netherlands" guide`
- `"highly skilled migrant" Netherlands blog`
- `"international students" Netherlands registration`
- `site:.nl "expat" "resources"`

**Workflow:** When an alert fires, open the URL → if it fits, add **one row** to your list or CRM.

### 3.2 RSS + keyword filter

- Subscribe to RSS feeds from **DutchNews**, **NL Times**, **IamExpat**, **relevant law firm blogs** (where offered).
- Use **Feedly**, **Inoreader**, or a **filter rule** (IFTTT / Zapier / Make) to push matches to email or Slack.

### 3.3 Search APIs (paid / quota-based)

Useful when you want a **script** (e.g. weekly GitHub Action) to run fixed queries:

- **Google Programmable Search Engine** (Custom Search JSON API)
- **Bing Web Search API**
- **Brave Search API**, **SerpAPI**, etc.

**Pattern:** query → collect URLs → **normalize hostname** → **subtract** domains already in `07` or a `prospects.json` → output **Markdown snippet** or **PR description** for human paste/merge.

**Do not** rely on scraping Google HTML results at scale (fragile, often against ToS).

### 3.4 SEO tools (export + diff)

If you subscribe to **Ahrefs**, **Semrush**, or similar:

- Export “backlinks to competitor X” or “pages that rank for keyword Y.”
- **Diff** against your prospect list in a spreadsheet monthly.
- High-signal for **Tier-2** commercial prospects (law, relocation).

---

## 4. GitHub Actions (optional pattern, not shipped in this repo)

If you later add automation in git:

1. **Workflow:** `on: schedule: cron: '0 7 * * 1'` (weekly Monday 07:00 UTC).
2. **Secrets:** `SEARCH_API_KEY`, etc.
3. **Steps:** run Node/Python script → write `outreach-candidates-YYYY-MM-DD.md` to **artifact** or attach to **issue** (“Review new candidates”).
4. **Merge:** human edits `07-concrete-outreach-prospects.md` after review; or bot opens **draft PR** only.

Keep the playbook **documentation-only** until you explicitly add workflows and keys.

---

## 5. Updating [07-concrete-outreach-prospects.md](./07-concrete-outreach-prospects.md)

1. **Numbering:** Continue the global `#` column (next free integer after the highest row).
2. **Sections:** Add to the closest **§** (J–M or new §N if you introduce a new category).
3. **Count block:** Update the **Count** section at the bottom (total rows + section list).
4. **Cross-links:** If you add a new category, consider a one-line pointer from [README.md](./README.md).
5. **Quarterly hygiene:** Re-open 10 random URLs from `07`; fix redirects and remove dead sites (same as existing maintenance note in `07`).

---

## 6. Optional: canonical machine-readable list (future)

If automation grows, introduce **`docs/backlinks/data/prospects.json`** (array of `{ id, name, url, category, reachVia, notes }`) and **generate** the markdown table via a small script. Benefits:

- Easier **diff** and dedupe by hostname.
- CI can append candidates without hand-editing tables.

Until then, **markdown-only** + manual merge is fine.

---

## 7. Compliance and reputation (short checklist)

- [ ] Use only **published** contact or press pages; do not harvest personal emails at scale.
- [ ] Respect **GDPR** if you store names/emails in a CRM (lawful basis, retention).
- [ ] **Disclose** affiliate or paid relationships in outreach when relevant (see [05](./05-complementary-products.md)).
- [ ] **No** automated commenting on blogs or forums.

---

## 8. Minimal weekly routine (no code)

| Day | Action |
|-----|--------|
| **Monday** | Scan Google Alerts + 1–2 RSS feeds; add 0–5 candidates to a sheet. |
| **Wednesday** | Run the **Cursor master prompt** (§2.1); verify URLs; add best rows to `07`. |
| **Friday** | Pick **3** candidates; complete the **per-company worksheet** (§9), send initials, and schedule **follow-ups** (§10.1). |
| **Rolling** | Check your sheet for **follow-up #1 / #2 due**; send using §10.2–10.4 examples. |

---

## 9. Per-company worksheet + contextual email draft

Use this for **every** send so the message is tied to **their** page and **your** best asset—not a generic blast.

### 9.1 One-row worksheet (copy into Notion, Sheets, or the row notes in `07`)

| Field | What to write |
|-------|----------------|
| **Organisation** | Legal / brand name |
| **Their URL** | Exact page you read (blog post, international office, resource list) |
| **Their audience** | e.g. “non-EU master students”, “HSM employers”, “renters in Amsterdam” |
| **Concrete hook** | One specific thing on *their* page: missing step, outdated year, thin section, or strong section you extend |
| **Our asset — URL** | One canonical guide, hub, or **tool** on your site (prefer deepest match) |
| **Our asset — label** | e.g. “municipality registration guide”, “moving checklist tool” |
| **Why this asset fits** | One sentence bridging hook → your page |
| **Personal line (optional but powerful)** | e.g. “I’m originally from South Africa and moved to the Netherlands myself—I remember how opaque [BSN / gemeente / insurance order] felt next to the official sites.” **Only use if true.** |
| **Ask** | One ask: “consider linking under …”, “happy to guest a paragraph”, “fact-check welcome” |
| **Date sent (initial)** | Track in your sheet |
| **Follow-up #1 due** | Typically **7–10 business days** after initial (see §9.6) |
| **Follow-up #2 due (optional)** | Only for high-value targets; **7 business days** after #1, then **close the thread** |

### 9.2 Full email draft template (personal + contextual)

Replace bracketed placeholders. Keep total length roughly **120–180 words**.

**Subject:** [Specific — include their topic + “resource for [their audience]”]

```
Hi [Name or “team” if unknown],

I’ve been reading [THEIR_PAGE_TITLE_OR_TOPIC] at [THEIR_URL]. [ONE_TRUE_SENTENCE_ABOUT_WHAT_WORKS_ON_THEIR_PAGE].

[PERSONAL_CREDIBILITY — e.g. I’m originally from South Africa and relocated to the Netherlands; I went through gemeente registration, IND steps, and mandatory insurance firsthand. I run [YOUR_SITE_NAME] as a free, editorial companion to official sources—not a relocation agency.]

Because your readers are dealing with [THEIR_AUDIENCE_PAIN], I thought our [OUR_ASSET_LABEL] might help: [OUR_CANONICAL_URL]
It focuses on [ONE_OR_TWO_CONCRETE_THINGS] and links out to [IND / gemeente / official source] where decisions matter.

If it’s useful, would you consider [SPECIFIC_ASK — e.g. adding it to your links for international students / mentioning it as further reading]? Happy to tweak wording to match your site or correct anything that’s outdated.

Thank you for the work you put into [THEIR_ORG_NAME],

[Your name]
[Your role — e.g. founder / editor]
[Email]
```

### 9.3 Choosing *which* page or tool to pitch

| If they are… | Lean toward pitching… |
|--------------|------------------------|
| University / student office | Arrival / BSN / insurance / “first weeks” guide; student-specific tool if you have one |
| Relocation / HR / employer | Timeline for hires, checklist for People teams, **tool** that reduces FAQ load |
| Immigration law firm | Plain-language **companion** to their legal article (never legal advice; defer to their expertise) |
| Housing / bank / insurer | Order-of-operations content that **does not** compete with their product page |
| Media / journalist | Data points, timeline, quote; **one** URL as background reading |

Match URLs from your live **registries** in the repo—`apps/expatlife-web/src/content/guides/netherlands/moving/registry.json` (guides) and `apps/expatlife-web/src/content/tools/registry.json` (tools)—and respect **publish** / **publishDate** (see root `CONTENT-CALENDAR.md`) so you never pitch an unpublished route.

### 9.4 South Africa → Netherlands angle — how to use it well

- **One sentence** near the start or in the credibility block is enough; avoid a long personal story unless they invited it.
- Tie it to **substance**: e.g. non-EU perspective, English-first admin, expectations vs reality—only where it **helps their reader**.
- **Accuracy:** If you didn’t use a specific visa route, don’t imply you did; stay general (“went through the usual registration and insurance steps”) if safer.

### 9.5 Cursor prompt — “draft only for these three rows”

```text
Open docs/backlinks/07-concrete-outreach-prospects.md.

For organisations #[N1], #[N2], #[N3] only:
1. Open each “Start here” URL (describe what you infer if you cannot fetch).
2. Pick the best matching page or tool from our ExpatLife / ExpatCopilot site (use registry.json paths or list sitemap-relevant URLs I provide below: …).
3. Fill the §9.1 worksheet table in markdown.
4. Write a full §9.2 email for each, with my personal line that I am South African and moved to the Netherlands, editorialize in my voice, and end with a single specific ask.
5. For each organisation, add **Follow-up #1** and **Follow-up #2 (final, optional)** matching the tone and timing in §10 (full drafts, not placeholders).
6. State the **calendar dates** for sending follow-up #1 (7–10 business days after “today”) and follow-up #2 if used.

Flag anything you could not verify.
```

---

## 10. When to follow up — and example follow-up emails

Cold outreach inboxes are noisy. **One polite follow-up** often doubles response rate; **more than two** rarely helps and can feel pushy.

### 10.1 Timing (default rules)

| Situation | When to follow up | How many follow-ups |
|-----------|-------------------|---------------------|
| **No reply** to initial email | **7–10 business days** after send | **1** standard second email |
| **High-value target** (e.g. major uni hub, top law blog you cited) and still no reply | **7 business days** after follow-up #1 | **At most 1** more (**final**); then stop |
| They replied **“maybe / send more”** | Within **3–5 business days** with what you promised | As agreed—usually **1** more |
| They replied **“not interested”** or **“no external links”** | Do **not** follow up on the same ask | 0 |
| **Out of office** auto-reply | Wait until **return date + 2 business days**, then count follow-up from there | Same as “no reply” |
| **Journalist / HARO** | Same day or next day matters more than follow-up; if no use, **no** chase | 0–1 max |

**Track in your sheet:** `initial_sent`, `followup_1_sent`, `followup_2_sent`, `outcome` (linked / declined / no response).

### 10.2 Follow-up #1 — gentle bump (full example)

Use **same thread** (reply to your first email). **~7–10 business days** after the initial send.

**Subject:** `Re: [same subject line as original]`

```
Hi [Name / team],

I’m bumping this once in case it landed in a busy week.

Quick recap: I wrote after reading [their page topic] at [THEIR_URL]. I’m South African and went through the move to the Netherlands myself; we maintain [OUR_ASSET_LABEL] here for readers who want a plain-language sequence alongside official sources: [OUR_CANONICAL_URL]

If it’s not a fit for your links page, no problem at all—just wanted to leave it on your radar.

Thanks,
[Your name]
```

### 10.3 Follow-up #1 — variant if you didn’t have a named contact (full example)

**Subject:** `Re: [original subject]`

```
Hi,

Following up once on my note from [DATE or “last week”] about a resource that might complement your page on [TOPIC].

Link again: [OUR_CANONICAL_URL] — geared to [their audience, e.g. international students] with links to IND / gemeente where it matters.

If there’s a better person for web or international student content, I’d be grateful for a forward.

Best,
[Your name]
[Email]
```

### 10.4 Follow-up #2 (final, high-value only) — short (full example)

**Only** for targets you’ve prioritised (see §10.1). **~7 business days** after follow-up #1. Then **archive** the thread.

**Subject:** `Re: [original subject] — last note from me`

```
Hi [Name],

Last follow-up from me—I know inboxes are overloaded.

If [OUR_ASSET_LABEL] isn’t useful for [THEIR_ORG] right now, I’ll leave you in peace. If you ever refresh [section of their site], we’re happy to be considered: [OUR_CANONICAL_URL]

Thanks for your time,
[Your name]
```

### 10.5 After they said yes or “we’ll look” — confirmation (full example)

Send within **2–3 business days** of a positive reply. No need to call this a “follow-up”; it’s **closure + easy next step**.

**Subject:** `Re: [thread] — thanks + permalink`

```
Hi [Name],

Thank you—that’s great to hear.

Here’s the permalink we discussed: [OUR_CANONICAL_URL]
Suggested anchor text (if helpful): [e.g. “First steps after arriving in the Netherlands”] — happy to match your site’s tone.

If anything reads out of date after IND or gemeente changes, tell us and we’ll update quickly.

Best,
[Your name]
```

### 10.6 After they added the link — thank-you (full example)

**Subject:** `Re: [thread] — thank you`

```
Hi [Name],

I saw the link live—really appreciate you taking the time. We’ve noted [THEIR_ORG] as a reference we trust when readers ask where to start.

If you ever want a short update for your audience on [related topic], I’m glad to help.

Thanks again,
[Your name]
```

### 10.7 Cursor prompt — include follow-ups in the same run

Add to §9.5 or run as a second pass:

```text
For the same three organisations, assuming initial emails were sent today:
1. State the calendar date when Follow-up #1 and (if applicable) Follow-up #2 should be sent.
2. Write Follow-up #1 using §10.2 or §10.3 style (pick the variant that fits whether we have a named contact).
3. For the one highest-priority org only, write Follow-up #2 using §10.4.
4. Use these concrete placeholders: [fill: their URL, our URL, org name, audience].
Keep follow-ups under 90 words each.
```

---

[← Index](./README.md) · [Concrete prospects](./07-concrete-outreach-prospects.md) · [Main playbook](../backlinks-and-promotion.md)
