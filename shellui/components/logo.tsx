"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-7 w-7 shrink-0">
      {/* Light logo - hidden in dark mode */}
      <Image
        src="/shellui-light.svg"
        alt="ShellUI Logo"
        width={28}
        height={28}
        className="block dark:hidden transition-opacity duration-200"
        priority
      />
      {/* Dark logo - hidden in light mode */}
      <Image
        src="/shellui-dark.svg"
        alt="ShellUI Logo"
        width={28}
        height={28}
        className="hidden dark:block transition-opacity duration-200"
        priority
      />
    </div>
  );
}
