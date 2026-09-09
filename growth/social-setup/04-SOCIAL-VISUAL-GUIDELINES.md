# 04 — Social visual guidelines

Social should feel like an extension of **www.expatcopilot.com**, not a separate neon lifestyle brand.

Source tokens (from `apps/expatlife-web/app/globals.css`):

| Token | Hex | Use |
|-------|-----|-----|
| Primary | `#2563eb` | CTAs, links, key UI |
| Primary strong | `#1d4ed8` | Hover / emphasis |
| Accent cyan | `#06b6d4` | Highlights, charts (sparingly) |
| Accent warm | `#f97316` | Rare alerts only |
| Text primary | `#0f172a` | Headlines |
| Text secondary | `#475569` | Body |
| Text muted | `#64748b` | Captions |
| BG light | `#f8fafc` | Canvas |
| BG soft | `#eef4ff` | Soft panels |
| Surface | `#ffffff` | Cards |
| Success | `#10b981` | Positive checks |

Logo source: `apps/expatlife-web/public/brand/logo-mark.svg`  
Avoid purple-glow / cream-terracotta “AI default” aesthetics unrelated to the site.

---

## Logo usage

- Prefer **logo mark** for avatars (clear at 64px).  
- Wordmark only if you create a social-safe lockup; keep letterspacing readable.  
- Clear space: ~1/4 mark height around avatar crop.  
- Do not stretch, add drop shadows, or place on busy photos without a solid scrim.

## Avatar treatment

- Square mark on **white** or **soft blue `#eef4ff`** background.  
- Consistent corner radius is platform-controlled—don’t bake heavy rounded squares into the file.  
- Same file everywhere.

## Cover / banner

- Clean slate/light gradient (`#f8fafc` → `#eef4ff`) or soft photo of Dutch context (canal/bike/desk planning)—not stock “handshake globe”.  
- Left/center-safe text: “Guides & tools for Netherlands relocation”.  
- Include small logo mark; avoid clutter.

## Font hierarchy

- **Display / headlines:** Site uses Inter for UI; for social graphics use a clean grotesque (Inter, Geist, or similar)—**not** decorative script.  
- Hierarchy: Headline bold → subhead medium → body regular → caption muted.  
- Max 2 typefaces.

## Icon style

- Simple line icons (Lucide-like), 1.5–2px stroke, primary or slate.  
- No emoji piles in graphics (emoji OK sparingly in captions).

## Photo style

- Natural daylight, Dutch urban/home/admin reality.  
- Avoid heavy filters, neon overlays, fake “government seal” imagery.

## Illustration

- Optional flat diagrams for processes (registration → DigiD).  
- Keep palette on-brand; no comic mascots.

## Data visualization

- Bars/lines in primary + cyan; axes in muted slate.  
- Always footnote “verify on official sources” for thresholds.  
- High contrast for mobile.

## Format recipes

| Format | Spec |
|--------|------|
| **PROFILE IMAGE** | Logo mark, 1024×1024 master |
| **SOCIAL COVER** | Brand canvas + short tagline; platform sizes in CSV |
| **CAROUSEL** | 1080×1350; slide 1 hook; one idea/slide; logo corner; final CTA slide |
| **INFOGRAPHIC** | Vertical; numbered steps; soft bg; max 6 steps |
| **DATA CARD** | One number hero; source line; ExpatCopilot mark |
| **QUOTE CARD** | Short practical line (not motivational fluff); slate text on soft bg |
| **TOOL PROMO** | Screenshot + “Free tool” + what it outputs; no fake UI chrome |
| **SHORT VIDEO** | 9:16; big captions; hook in 1s; end card with URL spoken/on-screen |
| **YOUTUBE THUMBNAIL** | Face-optional; big 3–5 word hook; high contrast; no clickbait lies |
| **PINTEREST PIN** | 1000×1500; keyword title in image; less “IG aesthetic”, more searchable text |

## Caption / on-video text

- Sentence case; short lines.  
- Prefer clarity over slang.  
- Disclose affiliation when promoting ExpatCopilot in communities (separate from graphics).

Next: [`05-SOCIAL-ASSET-REQUIREMENTS.csv`](./05-SOCIAL-ASSET-REQUIREMENTS.csv)
