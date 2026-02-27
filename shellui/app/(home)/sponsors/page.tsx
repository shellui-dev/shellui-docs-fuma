import { createMetadata } from "@/lib/metadata";
import { Heart } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Sponsors – ShellUI",
  description:
    "Support ShellUI: sponsor the ShellUI Blazor component library and shellui.dev.",
});

const KO_FI_URL = "https://ko-fi.com/shewart";
const GITHUB_SPONSORS_URL = "https://github.com/sponsors/shellui-dev";

export default function SponsorsPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center justify-center rounded-full border bg-muted/50 p-4">
          <Heart className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Support ShellUI
        </h1>
        <p className="text-muted-foreground text-balance">
          ShellUI is free and open source. Sponsors help us maintain the
          library, docs, and CLI so the Blazor community can keep building with
          ShellUI components.
        </p>

        <div className="w-full rounded-xl border bg-card p-6 md:p-8 text-left">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Sponsors
          </p>
          <p className="text-lg font-medium">
            No sponsors yet — be the first to support ShellUI.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Your name or logo could appear here and on the ShellUI GitHub repo.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href={KO_FI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF5E5B] px-5 py-2.5 text-sm font-medium text-white shadow transition-opacity hover:opacity-90"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 9.295-.082 11.906c0 2.306 1.678 2.168 1.678 2.168h14.275c6.761 0 9.77-3.816 9.77-7.57 0-2.111-.794-2.709-.794-2.709zm-2.538 4.138c-.729 2.59-3.465 3.338-5.663 3.338h-9.3c0-2.614.079-11.1.079-11.1h14.88s2.368.635 1.96 3.862c-.268 2.119-.865 2.853-1.956 3.9z" />
            </svg>
            Support on Ko-fi
          </Link>
          <Link
            href={GITHUB_SPONSORS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Become a GitHub Sponsor
          </Link>
          <Link
            href="https://github.com/shellui-dev/shellui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Star on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
