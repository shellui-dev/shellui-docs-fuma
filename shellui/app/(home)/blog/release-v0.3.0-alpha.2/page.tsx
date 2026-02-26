import { createMetadata } from "@/lib/metadata";
import { BlogPostLayout } from "@/components/blog-post-layout";

export const metadata = createMetadata({
  title: "ShellUI v0.3.0-alpha.2 – Drawer/Sheet subcomponents & CLI registry fix",
  description:
    "Compositional DrawerTrigger, SheetTrigger, and subcomponents now correctly install via the CLI. Plus new Callout, Sonner, Stepper, and more.",
});

export default function ReleaseV030Alpha2Page() {
  return (
    <BlogPostLayout
      title="ShellUI v0.3.0-alpha.2 – Drawer/Sheet subcomponents & CLI registry fix"
      date="February 22, 2026"
      meta="Release · ShellUI"
    >
      <p className="text-lg text-muted-foreground">
        v0.3.0-alpha.2 fixes the CLI template registry so that{" "}
        <code>Drawer</code> and <code>Sheet</code> correctly ship with their
        compositional subcomponent pattern, and adds several new components
        introduced in alpha.1.
      </p>

      <h2 className="text-xl font-semibold mt-8">CLI registry fix</h2>
      <p>
        In alpha.1, <code>shellui add drawer</code> installed only the old
        v0.2.x <code>Drawer.razor</code> without any subcomponents.
        v0.3.0-alpha.2 fixes this: running <code>shellui add drawer</code>{" "}
        now auto-installs all four files:
      </p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>
          <code>Drawer.razor</code>
        </li>
        <li>
          <code>DrawerVariants.cs</code>
        </li>
        <li>
          <code>DrawerTrigger.razor</code>
        </li>
        <li>
          <code>DrawerContent.razor</code>
        </li>
      </ul>
      <p className="mt-4">
        The same applies to <code>shellui add sheet</code> — installs Sheet,
        SheetVariants, SheetTrigger, and SheetContent automatically.
      </p>

      <h2 className="text-xl font-semibold mt-8">
        Compositional subcomponent pattern
      </h2>
      <p>
        Drawer and Sheet now use a cascading parameter pattern — no external
        open state field required. The trigger wires itself to the parent
        automatically:
      </p>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-4">
        {`<Drawer Side="DrawerSide.Bottom">
    <DrawerTrigger>
        <Button>Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
        <p>Content here.</p>
    </DrawerContent>
</Drawer>`}
      </pre>
      <p className="mt-4">
        Use <code>@bind-Open</code> when you need to control state externally,
        e.g. to close the drawer from a button inside the content.
      </p>

      <h2 className="text-xl font-semibold mt-8">New components in alpha.1+</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>
          <strong>Callout</strong> — Info, warning, tip, and danger admonition
          boxes
        </li>
        <li>
          <strong>CopyButton</strong> — One-click clipboard copy
        </li>
        <li>
          <strong>LinkCard</strong> — Card-style navigation links
        </li>
        <li>
          <strong>PrevNextNav</strong> — Previous/Next page navigation
        </li>
        <li>
          <strong>Sonner</strong> — Modern toast notifications (shadcn-style)
        </li>
        <li>
          <strong>Stepper</strong> — Step-by-step wizard with value-based API
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Compositional API upgrades</h2>
      <p>
        NavigationMenu, Tabs, Dropdown, Popover, Collapsible, and Accordion all
        received new subcomponent patterns alongside their existing APIs — both
        old and new usage styles are supported.
      </p>

      <h2 className="text-xl font-semibold mt-8">Install</h2>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-2">
        {`# Install CLI (alpha)
dotnet tool install -g ShellUI.CLI --version 0.3.0-alpha.2

# Or upgrade from alpha.1
dotnet tool update -g ShellUI.CLI --version 0.3.0-alpha.2`}
      </pre>
    </BlogPostLayout>
  );
}
