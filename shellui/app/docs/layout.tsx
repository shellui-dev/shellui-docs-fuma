import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Documentation – ShellUI components, quickstart, Blazor",
  description:
    "ShellUI documentation: quickstart, components, installation, theming. Learn how to use ShellUI components in your Blazor app with Tailwind CSS.",
});

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      links={linkItems.filter((item) => item.type === "icon")}
      sidebar={{
        tabs: {
          transform(option, node) {
            return {
              ...option,
              icon: undefined,
            };
          },
        },
      }}
      nav={{
        ...base.nav,
        title: (
          <>
            <Logo />
            <span className="font-medium max-md:hidden">ShellUI</span>
          </>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
