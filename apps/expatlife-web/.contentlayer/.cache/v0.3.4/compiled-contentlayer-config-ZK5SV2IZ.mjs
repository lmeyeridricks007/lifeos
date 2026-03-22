// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  }
};
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "netherlands/moving/guides/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    country: { type: "string", default: "netherlands" },
    cluster: { type: "string", default: "moving" },
    readingTime: { type: "string", default: "6 min" }
  },
  computedFields
}));
var Pillar = defineDocumentType(() => ({
  name: "Pillar",
  filePathPattern: "netherlands/moving/pillar.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    cluster: { type: "string", default: "moving" },
    readingTime: { type: "string", default: "10 min" }
  },
  computedFields
}));
var Hub = defineDocumentType(() => ({
  name: "Hub",
  filePathPattern: "netherlands/moving/hub.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    cluster: { type: "string", default: "moving" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "../../packages/content",
  contentDirInclude: ["netherlands"],
  documentTypes: [Guide, Pillar, Hub]
});
export {
  Guide,
  Hub,
  Pillar,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZK5SV2IZ.mjs.map
