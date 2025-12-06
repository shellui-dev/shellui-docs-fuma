import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, BookOpenIcon, GlobeIcon, NewspaperIcon, ShieldIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'ShellUI',
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
