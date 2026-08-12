---
name: expatlife-cornerstone-brief
description: >-
  Writes ExpatLife premium SEO cornerstone page briefs in the standard structure
  from a short topic (e.g. Hospitals). Does not implement code unless asked.
  Use when the user wants the Cursor instruction / brief only, a page outline,
  SEO cornerstone prompt, or says "write the brief for [topic]".
---

# ExpatLife Cornerstone Brief Writer

## Goal

From a short topic, produce the full cornerstone Cursor instruction in the same structure as the Hospitals Netherlands brief.

## Required reading

Read these project files (absolute from repo root):

1. `.cursor/skills/expatlife-cornerstone-page/brief-template.md`
2. `.cursor/skills/expatlife-cornerstone-page/hospitals-brief-example.md`
3. Optionally scan `apps/expatlife-web/src/lib/nav/config.ts` for siblings / menu placement

## Instructions

1. Infer route, title, pillar, audience, and cluster from the topic (default country: Netherlands).
2. Write the **complete** brief using the template section headers in order.
3. Match the Hospitals example for depth: purpose, search terms, SEO, hero, numbered page structure (typically 15–23 sections), nav, schema, data model stub, differentiation, future cluster URLs, final result.
4. Prefer real sibling routes that already exist in the repo.
5. Output **only** the brief (ready to paste as a Cursor instruction), unless the user also asks to build the page — then hand off to skill `expatlife-cornerstone-page`.

## Do not

- Implement files in brief-only mode
- Omit template sections
- Recommend individual hospitals/providers or give medical advice
- Put operational health guides under Culture when Living is correct
