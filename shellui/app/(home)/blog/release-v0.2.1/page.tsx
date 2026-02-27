import { createMetadata } from "@/lib/metadata";
import { BlogPostLayout } from "@/components/blog-post-layout";

export const metadata = createMetadata({
  title: "ShellUI v0.2.1 – Chart fixes & CSS auto-install",
  description:
    "Hotfix release fixing chart tooltip generation, ChartVariants namespace, and adding automatic chart-styles CSS injection into App.razor.",
});

export default function ReleaseV021Page() {
  return (
    <BlogPostLayout
      title="ShellUI v0.2.1 – Chart fixes & CSS auto-install"
      date="February 22, 2026"
      meta="Release · ShellUI"
    >
      <p className="text-lg text-muted-foreground">
        v0.2.1 is a hotfix release addressing bugs in chart component
        installation and introducing automatic CSS injection for chart styles.
      </p>

      <h2 className="text-xl font-semibold mt-8">Bug fixes</h2>

      <h3 className="text-lg font-semibold mt-6">Chart tooltip generation</h3>
      <p>
        The custom tooltip HTML in <code>ChartVariantsTemplate.cs</code> used
        incorrect verbatim string escaping (<code>{`\\""→""""`}</code>), causing
        broken <code>@"..."</code> blocks in installed files. This is now fixed.
      </p>

      <h3 className="text-lg font-semibold mt-6">ChartVariants namespace</h3>
      <p>
        <code>ChartVariants</code> was incorrectly placed under the{" "}
        <code>ShellUI.Components</code> namespace instead of{" "}
        <code>ShellUI.Components.Variants.ChartVariants</code>. Fixed.
      </p>

      <h3 className="text-lg font-semibold mt-6">Chart.razor missing using</h3>
      <p>
        Added <code>@using ShellUI.Components.Variants</code> to{" "}
        <code>Chart.razor</code> so chart components compile without manual
        import.
      </p>

      <h3 className="text-lg font-semibold mt-6">
        ChartVariantsTemplate file path
      </h3>
      <p>
        Changed from <code>ChartVariants.cs</code> to{" "}
        <code>Variants/ChartVariants.cs</code> so it installs in the correct
        subdirectory.
      </p>

      <h2 className="text-xl font-semibold mt-8">
        New: chart-styles auto-install
      </h2>
      <p>
        Running <code>shellui add chart</code> now automatically installs a{" "}
        <code>charts.css</code> file to <code>wwwroot/css/</code> and injects
        the stylesheet link into your <code>App.razor</code> (or{" "}
        <code>index.html</code> for WASM):
      </p>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-2">
        {`shellui add chart
→ Installed 'chart-variants'  (Variants/ChartVariants.cs)
→ Installed 'chart-styles'    (wwwroot/css/charts.css)
→ Installed 'chart'           (Chart.razor)
→ Added <link rel="stylesheet" href="css/charts.css" /> to App.razor

Installed 3 component(s) successfully!`}
      </pre>
      <p className="mt-4">
        The injection is idempotent — re-running <code>shellui add chart</code>{" "}
        won't duplicate the link tag.
      </p>

      <h2 className="text-xl font-semibold mt-8">Install</h2>
      <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mt-2">
        {`dotnet tool install -g ShellUI.CLI
# or update
dotnet tool update -g ShellUI.CLI`}
      </pre>
    </BlogPostLayout>
  );
}
