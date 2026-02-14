import { createMetadata } from "@/lib/metadata";
import { LayoutTemplate } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Showcase – ShellUI components",
  description:
    "See what you can build with ShellUI components. Projects and apps built with the ShellUI Blazor UI library.",
});

const SHOWCASE_SUBMIT_URL =
  "https://github.com/shellui-dev/shellui/discussions/categories/showcase";

export default function ShowcasePage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center justify-center rounded-full border bg-muted/50 p-4">
          <LayoutTemplate className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          ShellUI Showcase
        </h1>
        <p className="text-muted-foreground text-balance">
          Apps and projects built with ShellUI components. Get inspired — then
          build your own and share it here.
        </p>

        <div className="w-full rounded-xl border bg-card p-6 md:p-8 text-left">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Featured projects
          </p>
          <p className="text-lg font-medium">
            No projects in the showcase yet.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built something with ShellUI? Submit your project and we’ll consider
            adding it to the showcase.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href={SHOWCASE_SUBMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Submit your project
          </Link>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center justify-center rounded-md border border-input px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get started with ShellUI
          </Link>
        </div>
      </div>
    </main>
  );
}
