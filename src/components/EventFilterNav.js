'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function EventFilterNav() {
  const pathname = usePathname();

  const links = [
    {href: '/event', label: 'Schedule'},
    {href: '/event/speakers', label: 'Speakers'},
    {href: '/event/performances', label: 'Performances'},
    {href: '/event/workshops', label: 'Workshops'},
    {href: '/event/side-happenings', label: 'Side Happpenings'}
  ];

  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-100 border-b border-gray-300 mb-6 mx-auto">
      {links.map(link => {
        const isActive =
          pathname === link.href || (link.href !== '/event' && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              px-4 py-2 rounded text-gray-800 transition-colors duration-200 ease-in-out
              hover:bg-gray-200
              ${isActive ? 'bg-blue-600 text-white font-semibold' : 'bg-transparent'}
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
