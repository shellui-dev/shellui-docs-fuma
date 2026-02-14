"use client";

import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  meta?: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  date,
  meta = "ShellUI",
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to blog
        </Link>

        <header className="mb-10">
          <TextGradientScroll className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </TextGradientScroll>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-4">
            <CalendarIcon className="h-4 w-4" />
            {date} · {meta}
          </p>
        </header>

        <article className="space-y-6 text-foreground">{children}</article>
      </main>
    </>
  );
}
