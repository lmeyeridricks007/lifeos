# Metadata convention (avoid DataCloneError)

Next.js resolves and merges page metadata using `structuredClone`. If any value is not cloneable (e.g. getters, symbols, non-plain objects), you get **DataCloneError: Cannot clone object of unsupported type**.

## Rule: use static, serializable metadata

For **every** page (including new tools and guides):

1. **Prefer `export const metadata: Metadata`** with a single inline object literal.
2. **Wrap every string in `String(...)`** so values are explicitly serializable:
   ```ts
   export const metadata: Metadata = {
     title: String("Page title"),
     description: String("Page description."),
     alternates: { canonical: String("/path/to/page/") },
     openGraph: {
       title: String("Page title"),
       description: String("Page description."),
       url: String("/path/to/page/"),
     },
   };
   ```
3. **Do not** use `new URL()` or any non-serializable type (URL, Date, etc.) in metadata. Use string URLs only; e.g. `metadataBase: String(process.env.NEXT_PUBLIC_SITE_URL ?? "https://...")` not `new URL(...)`.
4. **Do not** use `generateMetadata` unless the page is dynamic (e.g. `[slug]`, `[country]`). If you must use it, return only plain strings/numbers/booleans and plain objects/arrays; use `String()` for every string (including `openGraph.url`, `twitter.card`, etc.).

## Root layout

`app/layout.tsx` must use a static inline `metadata` object. Use `metadataBase: String(...)` never `metadataBase: new URL(...)` so Next.js can clone metadata without DataCloneError.

## Reference

- Other Netherlands pages under `app/netherlands/*` use this pattern.
- Moving checklist tool: `app/netherlands/moving/tools/moving-checklist/page.tsx`.
