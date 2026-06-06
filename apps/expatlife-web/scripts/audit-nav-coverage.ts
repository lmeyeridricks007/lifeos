/**
 * Audit: live editorial pages vs mega-menu coverage and duplicate hrefs.
 * Run: npx tsx scripts/audit-nav-coverage.ts
 */
import {
  collectLinkableMenuRows,
  groupMenuRowsByHref,
  listActivePathsRequiringMenu,
  listDuplicateEditorialMenuHrefs,
  listLiveServiceCategoriesMissingFromServicesMenu,
  listMissingFromMegaMenu,
  listNonLiveMenuHrefs,
} from "@/src/lib/nav/navCoverage";

const menuRows = collectLinkableMenuRows();
const hrefToRows = groupMenuRowsByHref(menuRows);
const duplicates = [...hrefToRows.entries()].filter(([, rows]) => rows.length > 1).sort(([a], [b]) => a.localeCompare(b));

console.log("=== NAV AUDIT ===\n");
console.log(`Linkable menu rows: ${menuRows.length}`);
console.log(`Unique hrefs in menus: ${hrefToRows.size}`);
console.log(`Active editorial paths requiring menu: ${listActivePathsRequiringMenu().length}\n`);

console.log(`--- MISSING FROM MENU (${listMissingFromMegaMenu().length}) ---`);
for (const p of listMissingFromMegaMenu()) console.log(p);

console.log(`\n--- EDITORIAL DUPLICATES (${listDuplicateEditorialMenuHrefs().length}) ---`);
for (const { href, rows } of listDuplicateEditorialMenuHrefs()) {
  console.log(`\n${href}`);
  for (const r of rows) console.log(`  • ${r.menuKey} > ${r.sectionTitle}: "${r.label}"`);
}

console.log(`\n--- ALL HREF DUPLICATES incl. tools (${duplicates.length}) ---`);
for (const [href, rows] of duplicates) {
  console.log(`${href} (${rows.length}x)`);
}

console.log(`\n--- MENU ROWS POINTING TO NON-LIVE (${listNonLiveMenuHrefs().length}) ---`);
for (const href of listNonLiveMenuHrefs()) console.log(href);

console.log(`\n--- LIVE SERVICE CATEGORIES NOT IN SERVICES MENU (${listLiveServiceCategoriesMissingFromServicesMenu().length}) ---`);
for (const href of listLiveServiceCategoriesMissingFromServicesMenu()) console.log(href);

const missing = listMissingFromMegaMenu();
const editorialDupes = listDuplicateEditorialMenuHrefs();
const missingServices = listLiveServiceCategoriesMissingFromServicesMenu();
const nonLive = listNonLiveMenuHrefs();

if (missing.length || editorialDupes.length || missingServices.length || nonLive.length) {
  process.exitCode = 1;
}
