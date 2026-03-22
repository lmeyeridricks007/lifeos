import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
});
