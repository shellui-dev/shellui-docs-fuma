import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const toUrl = (path: string): string => new URL(path, baseUrl).toString();

  const docsItems = await Promise.all(
    source.getPages().map(async (page) => {
      // ShellUI does not currently use the "openapi" type, but keep this
      // check for forwards compatibility with Fumadocs.
      if ((page.data as any).type === "openapi") return;
      const { lastModified } = await page.data.load();

      return {
        url: toUrl(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "weekly",
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    }),
  );

  return [
    {
      url: toUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: toUrl("/docs"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: toUrl("/blog"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: toUrl("/showcase"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: toUrl("/sponsors"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...docsItems.filter(
      (v): v is MetadataRoute.Sitemap[number] => v !== undefined,
    ),
  ];
}

