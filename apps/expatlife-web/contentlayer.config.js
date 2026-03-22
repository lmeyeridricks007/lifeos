import fs from "node:fs";
import path from "node:path";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** MDX is bundled with esbuild; it must resolve `react/jsx-dev-runtime` from a real node_modules tree. */
function resolveMdxBundlerCwd() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, "node_modules", "react", "package.json"))) {
    return cwd;
  }
  const appFromRepoRoot = path.join(cwd, "apps", "expatlife-web");
  if (fs.existsSync(path.join(appFromRepoRoot, "node_modules", "react", "package.json"))) {
    return appFromRepoRoot;
  }
  return cwd;
}

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "netherlands/moving/guides/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    country: { type: "string", default: "netherlands" },
    cluster: { type: "string", default: "moving" },
    readingTime: { type: "string", default: "6 min" },
  },
  computedFields,
}));

export const Pillar = defineDocumentType(() => ({
  name: "Pillar",
  filePathPattern: "netherlands/moving/pillar.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    cluster: { type: "string", default: "moving" },
    readingTime: { type: "string", default: "10 min" },
  },
  computedFields,
}));

export const Hub = defineDocumentType(() => ({
  name: "Hub",
  filePathPattern: "netherlands/moving/hub.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    cluster: { type: "string", default: "moving" },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "../../packages/content",
  contentDirInclude: ["netherlands"],
  documentTypes: [Guide, Pillar, Hub],
  mdx: {
    cwd: resolveMdxBundlerCwd(),
  },
});
