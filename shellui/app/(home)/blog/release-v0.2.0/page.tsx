import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";

export const metadata = createMetadata({
  title: "ShellUI v0.2.0 – Production ready, 80 components, charts & more",
  description:
    "Charts and data visualization, theme-aware containers, Tailwind CSS v4.1.18, and 80 production-ready ShellUI components.",
});

export default function ReleaseV020Page() {
  return (
    <BlogPostLayout
      title="ShellUI v0.2.0 – Production ready, 80 components, charts & more"
      date="February 10, 2025"
      meta="Release · ShellUI"
    >
          <p className="text-lg text-muted-foreground">
            We're excited to announce ShellUI v0.2.0: production ready, with 80
            components, built-in charts and data visualization, theme-aware
            containers, and Tailwind CSS v4.1.18.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            What's new in v0.2.0
          </h2>

          <h3 className="text-lg font-semibold mt-6">7 chart components</h3>
          <p>
            Bar, Line, Area, Pie, and Multi-Series charts built on
            ApexCharts.Blazor. Add data visualization to your Blazor apps
            without leaving the ShellUI ecosystem.
          </p>

          <h3 className="text-lg font-semibold mt-6">Chart themes</h3>
          <p>
            Three built-in themes: Default, Colorful, and Monochrome, with full
            dark mode support so charts match your app's look and feel.
          </p>

          <h3 className="text-lg font-semibold mt-6">
            Theme-aware containers
          </h3>
          <p>
            Charts automatically use your CSS variables for borders, shadows,
            and colors. Drop a chart into your app and it respects your ShellUI
            theme.
          </p>

          <h3 className="text-lg font-semibold mt-6">Custom tooltips</h3>
          <p>
            Compact, shadcn-inspired HTML tooltips with multi-series and dark
            mode support. Clear, readable tooltips out of the box.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            80 production-ready components
          </h2>
          <p>
            ShellUI now ships with 80 components covering forms, layouts,
            navigation, data display, interactive elements, and advanced
            patterns. All copy-paste into your project, all customizable.
            CLI-first:
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">
              shellui add button card chart
            </code>
            and you're off.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            Tailwind CSS v4.1.18
          </h2>
          <p>
            We've updated to Tailwind CSS v4.1.18. Use the standalone CLI (no
            Node.js required) or npm — your choice when you run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              shellui init
            </code>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8">Get started</h2>
          <p>
            Upgrade with the ShellUI CLI or install fresh. New to ShellUI? Run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              shellui init
            </code>{" "}
            in your Blazor project and add components with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              shellui add
            </code>
            .
          </p>
          <p>
            <Link
              href="/docs/quickstart"
              className="font-medium text-primary hover:underline"
            >
              Read the quickstart →
            </Link>
          </p>
    </BlogPostLayout>
  );
}