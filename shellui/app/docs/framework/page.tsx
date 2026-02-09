import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { source } from "@/lib/source";

export default function Page() {
  const page = source.getPage(["framework", "index"]);

  if (!page) notFound();

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <page.data.body />
      </DocsBody>
    </DocsPage>
  );
}
