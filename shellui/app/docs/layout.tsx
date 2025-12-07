import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { Logo } from '@/components/logo';

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      links={linkItems.filter((item) => item.type === 'icon')}
      nav={{
        ...base.nav,
        title: (
          <>
            <Logo />
            <span className="font-medium max-md:hidden">ShellUI</span>
          </>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
