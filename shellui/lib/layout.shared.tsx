import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, BookOpenIcon, GlobeIcon, NewspaperIcon, ShieldIcon } from 'lucide-react';
import { Logo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold">ShellUI</span>
        </div>
      ),
    },

    links: [
      {
        icon: <BookOpenIcon />,
        text: 'Documentation',
        url: '/docs',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <NewspaperIcon />,
        text: 'Blog',
        url: '/blog',
        secondary: false,
      },
      {
        icon: <GlobeIcon />,
        text: 'Showcase',
        url: '/showcase',
        secondary: false,
      },
      {
        icon: <ShieldIcon />,
        text: 'Sponsors',
        url: '/sponsors',
        secondary: false,
      },
    ],
  };
}