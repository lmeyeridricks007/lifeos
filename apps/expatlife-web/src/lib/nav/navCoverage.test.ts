import { describe, expect, it } from "vitest";
import {
  listDuplicateEditorialMenuHrefs,
  listLiveServiceCategoriesMissingFromServicesMenu,
  listMissingFromMegaMenu,
  listNonLiveMenuHrefs,
} from "./navCoverage";

describe("nav coverage audit", () => {
  it("includes every active editorial page in a mega menu", () => {
    expect(listMissingFromMegaMenu()).toEqual([]);
  });

  it("does not duplicate editorial guides across mega menu sections", () => {
    expect(listDuplicateEditorialMenuHrefs()).toEqual([]);
  });

  it("includes every live service category in the Services menu", () => {
    expect(listLiveServiceCategoriesMissingFromServicesMenu()).toEqual([]);
  });

  it("does not expose non-live hrefs as linkable menu rows", () => {
    expect(listNonLiveMenuHrefs()).toEqual([]);
  });
});
