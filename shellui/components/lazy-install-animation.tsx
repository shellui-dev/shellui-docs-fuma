"use client";

import dynamic from "next/dynamic";

export const LazyInstallAnimation = dynamic(
  () => import("@/components/install-animation").then((m) => ({ default: m.InstallAnimation })),
  {
    ssr: false,
    loading: () => (
      <div className="relative mt-4 w-full mx-auto max-w-[800px] min-h-[280px] animate-pulse rounded-xl border bg-muted/50" />
    ),
  }
);
