import * as Base from 'fumadocs-ui/components/codeblock';
import { getHighlighter, hastToJsx } from 'fumadocs-core/highlight';
import { cn } from '@/lib/utils';
import type { BundledLanguage } from 'shiki';

export interface CodeBlockProps {
  code: string;
  wrapper?: Base.CodeBlockProps;
  lang: string;
}

const highlighter = await getHighlighter('js', {
  langs: ['js', 'ts', 'jsx', 'tsx', 'bash', 'html', 'csharp', 'mdx'],
  themes: ['vesper', 'github-light'],
});

export async function CodeBlock({ code, lang, wrapper }: CodeBlockProps) {
  // Map razor to html since shiki doesn't support razor
  const actualLang = lang === 'razor' ? 'html' : lang;
  
  try {
    await highlighter.loadLanguage(actualLang as BundledLanguage);
  } catch {
    // Fallback to plain text if language not supported
  }
  
  const hast = highlighter.codeToHast(code, {
    lang: actualLang,
    defaultColor: false,
    themes: {
      light: 'github-light',
      dark: 'vesper',
    },
  });

  const rendered = hastToJsx(hast, {
    components: {
      pre: Base.Pre,
    },
  });

  return (
    <Base.CodeBlock {...wrapper} className={cn('my-0', wrapper?.className)}>
      {rendered}
    </Base.CodeBlock>
  );
}

