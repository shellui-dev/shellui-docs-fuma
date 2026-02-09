import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import Link from "fumadocs-core/link";
import { Code2Icon, ComponentIcon, PaletteIcon, RocketIcon, TerminalIcon } from "lucide-react";
import Image from "next/image";
import { baseOptions, linkItems } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [
            {
              text: "Quickstart",
              url: "/docs/quickstart",
              icon: <RocketIcon />,
            },
            {
              text: "Components",
              url: "/docs/components",
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink
                  href="/docs/quickstart"
                  className="md:row-span-2"
                >
                  <div className="-mx-3 -mt-3">
                    <div className="h-32 bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/shellui-light.svg"
                          alt="ShellUI Logo"
                          width={120}
                          height={120}
                          className="opacity-10 dark:hidden"
                        />
                        <Image
                          src="/shellui-dark.svg"
                          alt="ShellUI Logo"
                          width={120}
                          height={120}
                          className="hidden opacity-10 dark:block"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="font-medium">Quickstart</p>
                  <p className="text-muted-foreground text-sm">
                    Get started with ShellUI in minutes.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/components"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Components</p>
                  <p className="text-muted-foreground text-sm">
                    Browse all 69+ ShellUI components.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/installation"
                  className="lg:col-start-2"
                >
                  <TerminalIcon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Installation</p>
                  <p className="text-muted-foreground text-sm">
                    Install ShellUI via CLI or NuGet package.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/comparison"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <Code2Icon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Comparison</p>
                  <p className="text-muted-foreground text-sm">
                    See how ShellUI compares to other libraries.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/theming"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PaletteIcon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Theming</p>
                  <p className="text-muted-foreground text-sm">
                    Customize ShellUI with CSS variables.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
    >
      {children}
    </HomeLayout>
  );
}
