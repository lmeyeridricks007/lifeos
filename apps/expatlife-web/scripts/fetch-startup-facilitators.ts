/**
 * Fetches and parses the official RVO facilitator list for the startup residence permit.
 * Output: structured facilitator records for the startup-visa-advisors category page.
 *
 * Usage:
 *   pnpm tsx scripts/fetch-startup-facilitators.ts
 *
 * The RVO page lists facilitators with ## Name, description, and [Read more](url).
 * This script fetches the page, extracts names and URLs, and can write normalized JSON
 * or update the provider data file. For now the provider list is maintained in
 * src/data/services/providers/startup-visa-advisors.ts; run this script to refresh
 * from the live RVO page when needed.
 */

const RVO_FACILITATOR_URL =
  "https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Parse markdown-style content: ## FacilitatorName followed by description and [Read more](url).
 * Handles the structure returned by the fetch tool or similar.
 */
function parseFacilitatorsFromMarkdown(text: string): { name: string; url?: string }[] {
  const results: { name: string; url?: string }[] = [];
  const headingRe = /^## (.+)$/gm;
  const readMoreRe = /\[Read more\]\((https?:\/\/[^)]+)\)/g;
  let match;
  const headings: { name: string; index: number }[] = [];
  while ((match = headingRe.exec(text)) !== null) {
    const name = match[1].trim();
    if (
      name &&
      !name.toLowerCase().includes("conditions") &&
      !name.toLowerCase().includes("recognised facilitators") &&
      !name.toLowerCase().includes("find out more")
    ) {
      headings.push({ name, index: match.index });
    }
  }
  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index;
    const end = i + 1 < headings.length ? headings[i + 1].index : text.length;
    const block = text.slice(start, end);
    let url: string | undefined;
    const urlMatch = readMoreRe.exec(block);
    if (urlMatch) url = urlMatch[1].replace(/&amp;/g, "&");
    results.push({ name: headings[i].name, url });
  }
  return results;
}

async function main() {
  console.log("Fetching", RVO_FACILITATOR_URL);
  const res = await fetch(RVO_FACILITATOR_URL, {
    headers: { "User-Agent": "ExpatLife/1.0 (startup facilitator ingestion)" },
  });
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();

  // If the response is HTML, we would need to parse HTML (e.g. h2 for names, a[href] for Read more).
  // If it is or can be converted to markdown, use parseFacilitatorsFromMarkdown.
  const parsed = parseFacilitatorsFromMarkdown(text);
  if (parsed.length === 0) {
    // Try simple regex for HTML: <h2>Name</h2> and next <a href="...">Read more
    const h2Re = /<h2[^>]*>([^<]+)<\/h2>/gi;
    const aRe = /<a[^>]+href="(https?:\/\/[^"]+)"[^>]*>[^<]*Read more[^<]*<\/a>/gi;
    const names: string[] = [];
    let m;
    while ((m = h2Re.exec(text)) !== null) {
      const n = m[1].trim();
      if (n && !/conditions|recognised|find out more/i.test(n)) names.push(n);
    }
    const urls: string[] = [];
    while ((m = aRe.exec(text)) !== null) urls.push(m[1].replace(/&amp;/g, "&"));
    for (let i = 0; i < names.length; i++) {
      parsed.push({ name: names[i], url: urls[i] });
    }
  }

  const lastChecked = new Date().toISOString().slice(0, 10);
  console.log("Parsed", parsed.length, "facilitators");
  parsed.forEach((p, i) => {
    console.log(`${i + 1}. ${p.name} ${p.url ?? "(no url)"}`);
  });
  console.log("Last checked:", lastChecked);
  console.log("Update src/data/services/providers/startup-visa-advisors.ts with new data if needed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
