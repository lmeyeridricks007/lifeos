# 08 — Profile link & UTM strategy

---

## Decision: where should profiles link?

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Homepage `/` | Brand root | Weak intent; thin H1 era resolved but still generic | **No** as primary |
| **Netherlands hub** `/netherlands` | Matches product focus; clear next step | Slightly long path | **Yes — primary** |
| Tools hub `/netherlands/tools` | Strong for tool-led brand | Misses guides-first users | Secondary / campaign |
| Moving hub | Good for awareness campaigns | Narrow | Campaign UTMs |
| Newsletter landing | Capture | May not exist yet | When live, use as **story/highlight** CTA |
| Custom “link in bio” page | Many links | Extra build; often vanity | **Only if** ≥4 simultaneous CTAs needed |

### Recommendation
- **Profile website field:** `https://www.expatcopilot.com/netherlands?...utm`  
- **Do not build a generic link-in-bio microsite** until newsletter + 3 tools need equal billing.  
- Instagram Highlights can deep-link different guides without a bio page.  
- If a social landing is justified later, it should contain: H1 “Start here”, 4 cards (Move / Cities / Money / Tools), newsletter, disclaimer—not a dump of 20 links.

---

## UTM conventions

Align with [`../04-CONTENT-DISTRIBUTION-MODEL.md`](../04-CONTENT-DISTRIBUTION-MODEL.md):

| Param | Values |
|-------|--------|
| `utm_source` | `instagram` \| `facebook` \| `linkedin` \| `youtube` \| `pinterest` \| `tiktok` \| `twitter` \| `reddit` |
| `utm_medium` | `social` \| `social_profile` \| `social_post` \| `community` \| `video` |
| `utm_campaign` | `profile` \| `launch-2026-q3` \| `{asset-slug}-{yyyy-mm}` |
| `utm_content` | `bio` \| `cover` \| `post-{type}` \| `shorts` \| `pin` \| `highlight-{name}` |

### Profile link examples

```
https://www.expatcopilot.com/netherlands?utm_source=instagram&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
https://www.expatcopilot.com/netherlands?utm_source=linkedin&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
https://www.expatcopilot.com/netherlands?utm_source=facebook&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
https://www.expatcopilot.com/netherlands?utm_source=youtube&utm_medium=social_profile&utm_campaign=profile&utm_content=about
https://www.expatcopilot.com/netherlands?utm_source=pinterest&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
https://www.expatcopilot.com/netherlands?utm_source=tiktok&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
https://www.expatcopilot.com/netherlands?utm_source=twitter&utm_medium=social_profile&utm_campaign=profile&utm_content=bio
```

### Post examples

```
.../netherlands/taxes/tools/dutch-salary-net-calculator?utm_source=linkedin&utm_medium=social_post&utm_campaign=gross-vs-net-2026-09&utm_content=carousel
.../netherlands/cities/amsterdam-vs-rotterdam?utm_source=instagram&utm_medium=social_post&utm_campaign=ams-vs-rtm-2026-09&utm_content=carousel
```

Store a shortener only if you need clean Stories stickers; still encode UTMs on the destination.

Next: [`09-ACCOUNT-SECURITY-GOVERNANCE.md`](./09-ACCOUNT-SECURITY-GOVERNANCE.md)
