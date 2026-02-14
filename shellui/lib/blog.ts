/**
 * Static blog posts – no database. Add entries here to show new posts.
 */
export const blogPosts = [
  {
    slug: "release-v0.2.0",
    title: "ShellUI v0.2.0 – Production ready, 80 components, charts & more",
    excerpt:
      "Charts and data visualization, theme-aware containers, Tailwind CSS v4.1.18, and 80 production-ready ShellUI components.",
    date: "2025-02-10",
    author: "ShellUI",
  },
] as const;

export type BlogPostSlug = (typeof blogPosts)[number]["slug"];
