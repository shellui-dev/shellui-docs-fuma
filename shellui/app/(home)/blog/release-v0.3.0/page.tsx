import { createMetadata } from "@/lib/metadata";
import { BlogPostLayout } from "@/components/blog-post-layout";

export const metadata = createMetadata({
  title: "ShellUI v0.3.0 – Stable release",
  description:
    "The first stable 0.3 release: 76 components, composable APIs, dependencies installed for you, tweakcn themes, and a CLI that works in Blazor projects on .NET 8, 9 and 10.",
});

export default function ReleaseV030Page() {
  return (
    <BlogPostLayout
      title="ShellUI v0.3.0 – Stable release"
      date="September 29, 2026"
      meta="Stable · ShellUI"
    >
      <p className="text-lg text-muted-foreground">
        v0.3.0 is the first stable release of the 0.3 line. It ships
        everything from the 0.3.0 alphas and release candidates, and a plain{" "}
        <code>dotnet tool install</code> now picks it up.
      </p>

      <h2 className="text-xl font-semibold mt-8">Highlights since 0.2.1</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Blazor on .NET 8, 9 and 10.</strong> The CLI needs the .NET 10
          SDK; the components it installs build in projects on .NET 8, 9 and
          10. The <code>ShellUI.Components</code> NuGet package targets .NET 10.
        </li>
        <li>
          <strong>76 components</strong>, including <code>command-palette</code>,{" "}
          <code>data-picker</code>, <code>multi-select</code>,{" "}
          <code>tag-input</code>, <code>typed-select</code> and the donut, radar
          and radial charts.
        </li>
        <li>
          <strong>Composable APIs</strong> for Select, Dropdown, Popover,
          HoverCard, ContextMenu, NavigationMenu, Carousel, Accordion and Tabs,
          installed together with their parent.
        </li>
        <li>
          <strong>
            <code>shellui add</code> resolves everything
          </strong>
          : sub-components, models, NuGet packages, and the{" "}
          <code>_Imports.razor</code> usings.
        </li>
        <li>
          <strong>
            <code>shellui init</code> produces an app that builds and runs
          </strong>
          : Tailwind CSS 4.3.2, the theme, <code>App.razor</code> wiring, and
          the template&apos;s Bootstrap removed.
        </li>
        <li>
          <strong>Themes from tweakcn</strong> with{" "}
          <code>shellui theme init | apply | update</code>.
        </li>
        <li>
          <strong>Accessibility:</strong> Dialog, Sheet and Drawer take focus
          on open, close on Escape, and set <code>role=&quot;dialog&quot;</code>.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Fixes since rc.3</h2>
      <p>
        Every component was installed and built on its own in a fresh app for
        this release. That caught components that failed to build when added
        alone (<code>input</code>, <code>alert</code>, <code>badge</code>,{" "}
        <code>toggle</code>, <code>chart-series</code>), .NET 8/9 projects
        named like <code>my-app</code> getting an invalid namespace, and
        Bootstrap staying active on .NET 8. All are fixed, with tests.
      </p>

      <h2 className="text-xl font-semibold mt-8">Install</h2>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-2">
        {`dotnet tool install -g ShellUI.CLI
# or upgrade an existing install
dotnet tool update -g ShellUI.CLI

shellui init
shellui add button card dialog

# NuGet package (.NET 10)
dotnet add package ShellUI.Components`}
      </pre>

      <h2 className="text-xl font-semibold mt-8">Upgrading from a release candidate</h2>
      <p>
        Update the tool, then run <code>shellui update</code> to rewrite
        installed components from the new templates. It overwrites the files,
        so commit any components you customized first. Full notes are in the{" "}
        <a
          href="https://github.com/shellui-dev/shellui/releases/tag/v0.3.0"
          className="text-primary hover:underline"
        >
          GitHub release
        </a>
        .
      </p>
    </BlogPostLayout>
  );
}
