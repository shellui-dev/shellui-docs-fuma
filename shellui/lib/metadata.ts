import type { Metadata } from "next";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title:
        override.title ?? "ShellUI – CLI-first, shadcn-inspired Blazor components",
      description:
        override.description ??
        "ShellUI is a CLI-first, shadcn/ui-inspired Blazor component library for building production-ready, Tailwind CSS-powered applications.",
      url: "https://shellui.dev",
      images: "/shellui-light.svg",
      siteName: "ShellUI",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title:
        override.title ?? "ShellUI – CLI-first, shadcn-inspired Blazor components",
      description:
        override.description ??
        "ShellUI is a CLI-first, shadcn/ui-inspired Blazor component library for building production-ready, Tailwind CSS-powered applications.",
      images: "/shellui-light.svg",
      ...override.twitter,
    },
  };
}

const defaultProdUrl = "https://shellui.dev";

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultProdUrl);

