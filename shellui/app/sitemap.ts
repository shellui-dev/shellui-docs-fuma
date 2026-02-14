import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const toUrl = (path: string): string => new URL(path, baseUrl).toString();

  const docsItems = source
    .getPages()
    .filter((page) => (page.data as { type?: string }).type !== "openapi")
    .map((page) => ({
      url: toUrl(page.url),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

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
    ...docsItems,
  ];
}

