# Cluster Linking Rules

## Goals

Readers can move between cluster pages without dead ends. Every live peer is linked as live. Differentiation stays clear.

## Where links appear (each page model)

Update these consistently across the cluster:

| Surface | Requirement |
|---|---|
| Path constants | `export const {PAGE}_PATH = "/netherlands/.../" as const` for every cluster page; import siblings when practical |
| `relatedGuides` | Include all other **live** cluster pages + key outside-cluster guides |
| Hub cards (`healthcareHubCards` / family hub / etc.) | Cluster peers + parent system guides; distinct one-line jobs |
| `exploreNextCards` | 4–6 next-step cards; prefer cluster peers that answer “what should I do next?” |
| Section cross-links | Deep links where a section owns a sibling topic (e.g. SEH → Emergency Healthcare) |
| FAQ / intro | Mention sibling pathways by name when relevant |
| `status` | `"live"` for shipped cluster peers — never `comingSoon` once the route exists |

## Anti-patterns

- Leaving `comingSoon` on a route that already has `page.tsx`
- Linking only from the flagship page downward (make links **bidirectional** among peers)
- Identical descriptions on every card
- Duplicate menu items for the same href
- Orphan pages with zero inbound links from cluster peers

## Linking pass checklist

After all pages in the batch exist:

```
Linking pass:
- [ ] Collect final PATH constants + titles for every cluster page
- [ ] For each page model: relatedGuides includes all live peers
- [ ] For each page model: hub + exploreNext updated; statuses live
- [ ] Outside siblings updated (GP/Emergency/etc.) where they previously said comingSoon for this topic
- [ ] Nav config: one row each, correct section, sensible order
- [ ] LIVING_OWNED_* / EXTRA_LIVE_PATHS updated if health/family Living-owned
- [ ] route-registry entries present
- [ ] navItemModel tests cover each new href
- [ ] Grep for old "#anchor" or comingSoon labels pointing at these topics
```

## Suggested cross-link matrix

For cluster pages A B C:

| From \ To | A | B | C |
|---|---|---|---|
| A | — | related + explore | related + hub |
| B | related + explore | — | related + section link |
| C | related + hub | related + explore | — |

Every cell that is not “—” should be a real href with `status: "live"`.

## Content differentiation reminder

When two pages touch the same topic:

- Owner page: full section
- Sibling page: 1 short paragraph + cross-link to owner

Example (health): Emergency owns crisis doors; Mental Healthcare owns stepped care + waiting; both link each other.
