'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  { name: 'Framework', href: '/docs', description: 'Getting started and framework overview' },
  { name: 'Core', href: '/docs/core', description: 'Core models and configuration' },
  { name: 'CLI', href: '/docs/cli', description: 'Command-line tools' },
  { name: 'Components', href: '/docs/components', description: 'UI components library' },
];

export function SectionSwitcher() {
  const pathname = usePathname();

  return (
    <div className="border-b p-4">
      <h3 className="mb-3 text-sm font-medium text-muted-foreground">Documentation Sections</h3>
      <div className="grid grid-cols-1 gap-2">
        {sections.map((section) => (
          <Link key={section.name} href={section.href}>
            <div
              className={`w-full p-3 rounded-md border transition-colors cursor-pointer ${
                pathname.startsWith(section.href)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background hover:bg-muted border-border'
              }`}
            >
              <div className="text-left">
                <div className="font-medium text-sm">{section.name}</div>
                <div className="text-xs opacity-70 mt-1">{section.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
