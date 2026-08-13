# Cornerstone Brief Template

When the user names a page topic (e.g. `Hospitals`), expand it into a full brief with **exactly these section headers**, in this order. Fill every section with topic-specific content. Do not omit sections; mark clearly if a section is N/A.

Use the Hospitals example in [hospitals-brief-example.md](hospitals-brief-example.md) as the gold-standard depth and tone.

---

## Output skeleton (fill every block)

```
Create a new premium SEO cornerstone guide page for:

Route:
- /netherlands/{pillar}/{slug}/

Page title:
- {Title} in the Netherlands

Purpose:
{2–4 sentences: who it helps, what it becomes the central resource for, how it differs from generic articles}

This page should:

- {bullet outcomes}
- {…}
- connect strongly into {related guides}

This page should become:

- the flagship {topic} guide
- one of the strongest {cluster} resources
- a major internal linking destination

==================================================
IMPORTANT POSITIONING
==================================================

Many people search:

- {keyword}
- {…}

The page should:

- {positioning goals}
- avoid {harmful recommendations / medical-legal advice / rankings as relevant}

Tone:

- practical
- reassuring
- evidence-based
- beginner friendly

==================================================
PUBLISH SETTINGS
==================================================

publish: true

publishDate: "YYYY-MM-DD"

==================================================
SEO REQUIREMENTS
==================================================

Primary keywords

- {…}

Secondary keywords

- {…}

Suggested SEO title

{Title} in the Netherlands | Complete Guide for Expats

Suggested meta description

{1–2 sentences, benefit + scope}

==================================================
OFFICIAL & TRUSTED SOURCES
==================================================

Use extensively:

{gov / regulators / associations / insurers}

Avoid:

{rankings / medical advice / treatment recommendations / etc.}

==================================================
HERO
==================================================

H1

{Title} in the Netherlands

Subtitle

{one sentence}

Primary CTA

{verb phrase}

Secondary CTA

{verb phrase}

Hero image

Create/use:

- {scene cues}

Avoid:

- {unsafe / distressing imagery}

==================================================
PAGE STRUCTURE
==================================================

1 HERO

==================================================
2 QUICK ANSWER
==================================================

Explain

{core answer in plain language}

==================================================
3 SNAPSHOT CARDS
==================================================

Cards

{6 short card titles}

==================================================
4 … N CONTENT SECTIONS
==================================================

For each section use one of:
- Explain / Discuss
- Visual journey / Comparison table / Cards / Checklist / Interactive flow

Number sections continuously. Include FAQ, Related Guides, Hub, and Explore Next near the end.

==================================================
NAVIGATION
==================================================

Menu

{Primary}

↓

{Section}

↓

{Item label}

Parent

/netherlands/{pillar}/

Sibling Pages

{existing related routes}

==================================================
SCHEMA
==================================================

Add

FAQ

Breadcrumb

{WebPage and/or MedicalWebPage as appropriate}

HowTo ({named how-to})

==================================================
DATA MODEL
==================================================

export const {camelCase}Page = {

slug: "{slug}",

publish: true,

publishDate: "YYYY-MM-DD",

hero: {},

{domain arrays}: [],

faq: []

}

==================================================
IMPLEMENTATION NOTES
==================================================

Reuse:

{nearest template view/model}

Include:

{key diagrams / tables / checklists}

==================================================
CONTENT DIFFERENTIATION
==================================================

{Sibling A}

- {one-line boundary}

{This page}

- {one-line boundary}

{Sibling B}

- {one-line boundary}

==================================================
FUTURE CLUSTER CONTENT
==================================================

Create supporting pages for:

- /netherlands/{pillar}/{child-slug}/
- {…}

==================================================
FINAL RESULT
==================================================

{1 paragraph: flagship SEO outcome + cluster strengthening}
```

## Slug / route rules

- Country default: `netherlands`
- Slug form: `{topic-kebab}-netherlands` (e.g. `hospitals-netherlands`, `gp-netherlands`)
- Pillar from topic cluster: `health`, `family`, `housing`, `education`, `life`, `work`, `money`, etc.
- Infer menu placement from existing siblings in `apps/expatlife-web/src/lib/nav/config.ts`
- Prefer Living mega-menu for health/family operational guides (not Culture)

## publishDate / go-live

- **Cluster with a user-provided date** → that `YYYY-MM-DD` is the production go-live; wire via `scheduledGuides` (see `.cursor/skills/expatlife-cornerstone-cluster/scheduling.md`). Local preview stays full.
- **No date from the user** → live immediately after deploy. Set brief/model `publishDate` to today or the editorial date; do **not** invent a future schedule gate.
- Never invent past publish dates for new pages unless requested.
- Do not auto-pick the “next unused future cornerstone date” unless the user asked to schedule.
