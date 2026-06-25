import { createMetadata } from "@/lib/metadata";
import { BlogPostLayout } from "@/components/blog-post-layout";

export const metadata = createMetadata({
  title:
    "ShellUI v0.3.0-rc.1 – Template-compile, CSP, and CLI install fixes",
  description:
    "Release candidate for v0.3.0. Five branches of integration-tested fixes against the alpha series — fixed verbatim-string escapes, no more eval(), idempotent shellui init, and CLI install repairs.",
});

export default function ReleaseV030RC1Page() {
  return (
    <BlogPostLayout
      title="ShellUI v0.3.0-rc.1 – Template-compile, CSP, and CLI install fixes"
      date="June 18, 2026"
      meta="Release Candidate · ShellUI"
    >
      <p className="text-lg text-muted-foreground">
        v0.3.0-rc.1 is the release candidate for v0.3.0. It bundles five
        branches of integration-tested fixes against the alpha series,
        surfaced from real-world Blazor Server consumer use. If no blocking
        issues turn up during internal testing, v0.3.0 final ships from this
        RC unchanged.
      </p>

      <h2 className="text-xl font-semibold mt-8">Template compilation fixes</h2>
      <p>
        <code>ChartVariants</code>, <code>PieChart</code>, and{" "}
        <code>DashboardLayout02</code> templates contained uncompilable C#
        because of improperly escaped quotes inside verbatim strings. The live{" "}
        <code>PieChart.razor</code> component had the same backslash-escaping
        bug. All four are fixed — templates now drop into a fresh project and
        compile on first build.
      </p>

      <h2 className="text-xl font-semibold mt-8">CSP-safe runtime</h2>
      <p>
        <code>ThemeToggle</code> no longer reaches for <code>eval()</code> and
        moves <code>localStorage</code> reads into proper Blazor lifecycle
        methods. <code>InputOTP</code> and <code>ThemeService</code> had the
        same CSP-problematic <code>eval()</code> calls removed. Strict CSP
        policies (no <code>unsafe-eval</code>) now Just Work.
      </p>
      <p className="mt-4">
        <code>SidebarTrigger</code> also dropped its FontAwesome dependency
        for the mobile hamburger menu — it&apos;s an inline SVG now.
      </p>

      <h2 className="text-xl font-semibold mt-8">Idempotent shellui init</h2>
      <p>
        <code>shellui init</code> now patches <code>App.razor</code> with
        render modes, theme bootstrap scripts, and <code>shellui.js</code>{" "}
        references. The full default theme is written to{" "}
        <code>input.css</code> instead of just the Tailwind import. All
        patching is idempotent — re-running <code>init</code> on a
        partially-initialized project is safe and won&apos;t duplicate
        sections.
      </p>

      <h2 className="text-xl font-semibold mt-8">CLI install repairs</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>
          <code>shellui add data-table</code> now installs{" "}
          <code>DataTableModels.cs</code>
        </li>
        <li>
          NuGet dependencies auto-install (
          <code>System.Linq.Dynamic.Core</code>, <code>Blazor-ApexCharts</code>
          )
        </li>
        <li>
          Chart tooltips render readable text instead of invisible
          white-on-white
        </li>
        <li>
          Typo suggestions: e.g.{" "}
          <em>&quot;Did you mean &lsquo;data-table&rsquo;?&quot;</em>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Component count clarified</h2>
      <p>
        Documentation now lists <strong>68 installable top-level
        components</strong> (corrected from earlier claims of 100). Same
        components, more honest count.
      </p>

      <h2 className="text-xl font-semibold mt-8">Install</h2>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-2">
        {`# Install the release candidate CLI
dotnet tool install -g ShellUI.CLI --version 0.3.0-rc.1

# Or upgrade from alpha.2
dotnet tool update -g ShellUI.CLI --version 0.3.0-rc.1

shellui init
shellui add button card dialog

# NuGet packages
dotnet add package ShellUI.Core --version 0.3.0-rc.1 --prerelease
dotnet add package ShellUI.Components --version 0.3.0-rc.1 --prerelease`}
      </pre>

      <h2 className="text-xl font-semibold mt-8">What&apos;s next</h2>
      <p>
        rc.1 is feature-frozen for the v0.3.0 line. Internal testing is in
        progress — file blockers on{" "}
        <a
          href="https://github.com/shellui-dev/shellui/issues"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        . If none surface, v0.3.0 ships from this RC unchanged.
      </p>
    </BlogPostLayout>
  );
}
