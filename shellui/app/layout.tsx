import { RootProvider } from "fumadocs-ui/provider/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import { baseUrl, createMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: {
    template: "%s | ShellUI",
    default:
      "ShellUI – ShellUI components: Blazor UI library, shadcn-inspired, Tailwind CSS",
  },
  description:
    "CLI-first Blazor UI library inspired by shadcn/ui. 80+ components, Tailwind CSS, copy-paste. Get started at shellui.dev.",
  metadataBase: baseUrl,
  openGraph: {
    type: "website",
  },
  keywords: [
    "shellui",
    "shellui components",
    "shell ui",
    "shellui.dev",
    "blazor components",
    "blazor ui library",
    "shadcn inspired",
    "shadcn ui for blazor",
    "tailwind css components",
    "blazor tailwind",
    "cli-first ui library",
    "blazor component library",
    "dotnet blazor ui",
    "csharp ui components",
    "copy paste components blazor",
    "blazor dashboard",
    "blazor admin panel",
    "tailwind v4 blazor",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
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
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function Layout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ShellUI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description:
      "ShellUI is a CLI-first, shadcn/ui-inspired Blazor component library for building production-ready, Tailwind CSS-powered applications.",
    url: "https://shellui.dev",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ShellUI",
    alternateName: ["ShellUI components", "shellui.dev"],
    url: "https://shellui.dev",
    description:
      "ShellUI components: Blazor UI library, shadcn-inspired, Tailwind CSS. CLI-first, 80+ copy-paste components.",
  };

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}

        <RootProvider>{children}</RootProvider>
        <SpeedInsights />
        <Analytics />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              websiteJsonLd,
            ]),
          }}
        />
      </body>
    </html>
  );
}
