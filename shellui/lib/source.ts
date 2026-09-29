import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, type LoaderPlugin, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { createElement, Fragment } from "react";

// Pages with `new: true` in their frontmatter get a blue dot in the sidebar, like shadcn/ui.
function newPageDotPlugin(): LoaderPlugin {
  return {
    name: "new-page-dot",
    transformPageTree: {
      file(node, filePath) {
        if (!filePath) return node;
        const file = this.storage.read(filePath);
        if (file?.format !== "page" || !(file.data as { new?: boolean }).new) return node;
        return {
          ...node,
          name: createElement(
            Fragment,
            null,
            node.name,
            createElement("span", {
              className: "ms-2 size-2 shrink-0 rounded-full bg-blue-500",
              title: "New",
              "aria-label": "New",
            }),
          ),
        };
      },
    },
  };
}

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin(), newPageDotPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
