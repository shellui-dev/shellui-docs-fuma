import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, GithubIcon, TerminalIcon, ShieldCheckIcon, ZapIcon, PaletteIcon, Code2Icon, BoxesIcon } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { InstallAnimation } from '@/components/install-animation';

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-4 md:py-6 max-w-[1400px]">
        <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden bg-origin-border">
          {/* Video Background - Light Theme */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover dark:hidden"
          >
            <source src="/hero-bg-light.webm" type="video/webm" />
          </video>
          
          {/* Video Background - Dark Theme */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden dark:block"
          >
            <source src="/hero-bg-dark.webm" type="video/webm" />
          </video>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-background/40 via-background/20 to-transparent dark:from-background/60 dark:via-background/30" />
          
          {/* Content overlay */}
          <div className="relative flex flex-col justify-center z-10 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
            {/* Main Heading */}
            <h1 className="text-4xl leading-tighter font-medium xl:text-5xl max-md:text-center mb-4">
              Build production-ready{' '}
              <span className="text-primary">Blazor components</span>{' '}
              with a few clicks
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 max-md:mx-auto">
              CLI-first Blazor component library inspired by shadcn/ui. Copy components directly into your project, customize everything, and build beautiful applications with Tailwind CSS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit max-md:w-full max-md:justify-center">
              <Link
                href="/docs/quickstart"
                className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors bg-primary text-primary-foreground hover:bg-primary/90 max-sm:text-sm"
              >
                Getting Started
              </Link>
              <Link
                href="https://github.com/Shelltechlabs/shellui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium tracking-tight transition-colors border bg-background text-foreground hover:bg-accent max-sm:text-sm"
              >
                <GithubIcon className="h-4 w-4" />
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Try it out Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl bg-background">
        <div className="relative p-8 rounded-xl border overflow-hidden bg-card">
          <h2 className="text-xl text-center text-primary font-mono font-bold uppercase mb-2">
            Try it out.
          </h2>
          <CodeBlock
            code="shellui init"
            lang="bash"
            wrapper={{
              className: 'mx-auto w-full max-w-[800px] bg-transparent',
            }}
          />
          <div className="[&_pre]:bg-transparent [&_pre]:border-border/50">
            <InstallAnimation />
          </div>
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
      <section className="container mx-auto px-4 py-20 max-w-6xl bg-background">
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
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Code Block */}
            <div className="relative order-2 lg:order-1">
              <CodeBlock
                code={`@page "/"
@using YourProject.Components.UI

<Form OnValidSubmit="HandleSubmit">
  <div class="space-y-4">
    <div>
      <Label>Name</Label>
      <Input @bind-Value="name" />
    </div>
    <div>
      <Label>Email</Label>
      <Input @bind-Value="email" Type="email" />
    </div>
    <Button Type="submit">Submit</Button>
  </div>
</Form>

@code {
    private string name = "";
    private string email = "";

    private void HandleSubmit()
    {
        // Handle form submission
    }
}`}
                lang="razor"
                wrapper={{
                  title: 'Form.razor',
                }}
              />
            </div>

            {/* Right: Content */}
            <div className="max-lg:row-start-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Use Components Like Native Blazor
                </h3>
                <p className="text-lg text-muted-foreground">
                  ShellUI components work seamlessly with Blazor's component model. Use RenderFragments, event handlers, and all the features you're familiar with.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground pt-0.5">
                    Familiar Razor syntax with RenderFragments
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground pt-0.5">
                    Full IntelliSense support and compile-time type checking
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground pt-0.5">
                    Modify component code directly since it's in your project
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground pt-0.5">
                    Event handlers and all standard Blazor features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="border-t bg-background">
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
      <footer className="border-t mt-auto relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <Image
            src="/shellui-light.svg"
            alt="ShellUI Logo"
            width={800}
            height={800}
            className="opacity-[0.03] dark:hidden"
          />
          <Image
            src="/shellui-dark.svg"
            alt="ShellUI Logo"
            width={800}
            height={800}
            className="hidden opacity-[0.03] dark:block"
          />
        </div>
        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
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