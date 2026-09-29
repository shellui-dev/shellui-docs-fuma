/**
 * Static blog posts – no database. Add entries here to show new posts.
 */
export const blogPosts = [
  {
    slug: "release-v0.3.0",
    title: "ShellUI v0.3.0 – Stable release",
    excerpt:
      "The first stable 0.3 release: 76 components, composable APIs, dependencies installed for you, tweakcn themes, and a CLI that works in Blazor projects on .NET 8, 9 and 10.",
    date: "2026-09-29",
    author: "ShellUI",
  },
  {
    slug: "release-v0.3.0-rc.1",
    title:
      "ShellUI v0.3.0-rc.1 – Template-compile, CSP, and CLI install fixes",
    excerpt:
      "Release candidate for v0.3.0. Five branches of integration-tested fixes: template-compile bugs, no more eval(), idempotent shellui init, and data-table install repairs.",
    date: "2026-06-18",
    author: "ShellUI",
  },
  {
    slug: "release-v0.3.0-alpha.2",
    title: "ShellUI v0.3.0-alpha.2 – Drawer/Sheet subcomponents & CLI registry fix",
    excerpt:
      "Compositional DrawerTrigger, SheetTrigger, and subcomponents now correctly install via the CLI. Plus new Callout, Sonner, Stepper, and more.",
    date: "2026-02-22",
    author: "ShellUI",
  },
  {
    slug: "release-v0.2.1",
    title: "ShellUI v0.2.1 – Chart fixes & CSS auto-install",
    excerpt:
      "Hotfix release fixing chart tooltip generation, ChartVariants namespace, and adding automatic chart-styles CSS injection into App.razor.",
    date: "2026-02-22",
    author: "ShellUI",
  },
  {
    slug: "release-v0.2.0",
    title: "ShellUI v0.2.0 – Production ready, charts & more",
    excerpt:
      "Charts and data visualization, theme-aware containers, Tailwind CSS v4.1.18, and production-ready ShellUI components.",
    date: "2026-02-10",
    author: "ShellUI",
  },
] as const;

export type BlogPostSlug = (typeof blogPosts)[number]["slug"];
