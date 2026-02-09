import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/shellui-light.svg", type: "image/svg+xml" },
      {
        url: "/shellui-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/shellui-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/shellui-light.svg",
    apple: "/shellui-light.svg",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
