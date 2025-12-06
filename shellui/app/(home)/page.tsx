import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, GithubIcon, TerminalIcon, ShieldCheckIcon, ZapIcon, PaletteIcon, Code2Icon, BoxesIcon } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { InstallAnimation } from '@/components/install-animation';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Announcement Banner */}
          <Link
            href="/docs/components"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <span>New components: Calendar, Combobox, and more...</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Main Heading */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build production-ready{' '}
              <span className="text-primary">Blazor components</span>{' '}
              with a few clicks
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              CLI-first Blazor component library, validation, accessible with ARIA and well-styled Tailwind components
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/docs/quickstart"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/Shelltechlabs/shellui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Try it out Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="p-8 bg-radial-[circle_at_top_center] from-25% to-primary/10 rounded-xl">
          <h2 className="text-xl text-center text-primary font-mono font-bold uppercase mb-2">
            Try it out.
          </h2>
          <CodeBlock
            code="shellui init"
            lang="bash"
            wrapper={{
              className: 'mx-auto w-full max-w-[800px]',
            }}
          />
          <InstallAnimation />
        </div>
      </section>

      {/* Code Example Section - Side by Side */}
      <section className="border-t border-b bg-muted/30">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Get Started in Minutes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Install ShellUI and add components to your Blazor project with just a few commands. Components are copied directly into your codebase, giving you full control.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5 shrink-0">
                    <span className="text-xs font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Install the CLI</h3>
                    <p className="text-sm text-muted-foreground">
                      Install ShellUI CLI globally using .NET tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5 shrink-0">
                    <span className="text-xs font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Initialize Your Project</h3>
                    <p className="text-sm text-muted-foreground">
                      Run <code className="text-xs bg-muted px-1.5 py-0.5 rounded">shellui init</code> in your Blazor project directory
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5 shrink-0">
                    <span className="text-xs font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Add Components</h3>
                    <p className="text-sm text-muted-foreground">
                      Use <code className="text-xs bg-muted px-1.5 py-0.5 rounded">shellui add</code> to copy components into your project
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                View Quickstart Guide
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Code Block */}
            <div className="relative">
              <CodeBlock
                code={`dotnet tool install -g ShellUI.CLI

# Installing ShellUI CLI...

shellui init

# Initializing ShellUI in your project...

shellui add button card input

# Components added successfully!`}
                lang="bash"
                wrapper={{
                  title: 'Terminal',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Built on Technologies You Trust</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powered by industry-standard tools and frameworks for reliable, performant applications
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="transition-opacity hover:opacity-80">
              <Image src="/blazor-logo.svg" alt="Blazor" width={64} height={64} className="h-16 w-16" />
            </div>
            <div className="transition-opacity hover:opacity-80">
              <Image src="/dotnet-logo.svg" alt=".NET" width={64} height={64} className="h-16 w-16" />
            </div>
            <div className="transition-opacity hover:opacity-80">
              <Image src="/tailwind-logo.svg" alt="Tailwind CSS" width={64} height={64} className="h-16 w-16" />
            </div>
            <div className="transition-opacity hover:opacity-80">
              <Image src="/csharp-logo.svg" alt="C#" width={64} height={64} className="h-16 w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example Section - Side by Side */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Code Block */}
            <div className="relative order-2 lg:order-1">
              <CodeBlock
                code={`@page "/"
@using YourProject.Components.UI

<Card>
  <Header>
    <h3 class="text-lg font-semibold">Welcome</h3>
  </Header>
  <ChildContent>
    <Button @onclick="HandleClick">Click Me</Button>
  </ChildContent>
</Card>

@code {
    private void HandleClick()
    {
        // Your logic here
    }
}`}
                lang="razor"
                wrapper={{
                  title: 'Button.razor',
                }}
              />
            </div>

            {/* Right: Content */}
            <div className="max-lg:row-start-1">
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight my-4">
                Use Components Like Native Blazor
              </h3>
              <p className="mb-4">
                ShellUI components work seamlessly with Blazor's component model. Use RenderFragments, event handlers, and all the features you're familiar with.
              </p>
              <ul className="text-xs list-disc list-inside mt-8 space-y-2">
                <li>Familiar Razor syntax with RenderFragments</li>
                <li>Full IntelliSense support and compile-time type checking</li>
                <li>Modify component code directly since it's in your project</li>
                <li>Event handlers and all standard Blazor features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="flex flex-col items-center space-y-12">
            <div className="text-center space-y-3 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">
                Build your Blazor Apps with Confidence
              </h2>
              <p className="text-muted-foreground">
                Everything you need to create beautiful, accessible, and performant Blazor applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Feature Card 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TerminalIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">CLI-First Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Components are copied directly into your project, giving you complete ownership and the freedom to customize everything
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Accessible by Default</h3>
                    <p className="text-sm text-muted-foreground">
                      WCAG 2.1 AA compliant components with proper ARIA attributes and keyboard navigation built-in
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ZapIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Optimized Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Built for both Blazor Server and WebAssembly with minimal overhead and maximum efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <PaletteIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fully Customizable</h3>
                    <p className="text-sm text-muted-foreground">
                      Theme with CSS variables or use{' '}
                      <Link href="https://tweakcn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        tweakcn
                      </Link>{' '}
                      for instant theme generation
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Code2Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Type-Safe C#</h3>
                    <p className="text-sm text-muted-foreground">
                      Leverage .NET's powerful type system for compile-time safety and IntelliSense support
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 6 */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-primary/5">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BoxesIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">69+ Components</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive library covering forms, layouts, navigation, data display, and advanced UI patterns
                    </p>
                  </div>
                </div>
              </div>
          </div>

          <Link
            href="/docs/quickstart"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image
                    src="/shellui-light.svg"
                    alt="ShellUI Logo"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                  />
                  <Image
                    src="/shellui-dark.svg"
                    alt="ShellUI Logo"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                  />
                </div>
                <span className="text-lg font-bold">ShellUI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Build production-ready Blazor components with a few clicks
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/Shelltechlabs/shellui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com/shelltechlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                    Showcase
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://github.com/Shelltechlabs/shellui/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Request feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Shelltechlabs/shellui/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Report bug
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sponsor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}