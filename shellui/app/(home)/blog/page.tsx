import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog – ShellUI",
  description:
    "ShellUI blog: updates, releases, and guides for ShellUI components and the Blazor UI library.",
});

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Blog
        </h1>
        <p className="text-muted-foreground mt-2">
          Release notes, updates, and guides for ShellUI.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border bg-card p-6 transition-colors hover:bg-accent/50 hover:border-primary/20"
          >
            <div className="flex flex-1 flex-col gap-3">
              <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Read more
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
