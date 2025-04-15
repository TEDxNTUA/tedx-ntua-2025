'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const colorClasses = {
  'synelixis-orange': {
    bg: 'bg-synelixis-orange/80',
    focusRing: 'focus-visible:ring-synelixis-orange',
    hoverBg: 'hover:bg-synelixis-orange/20',
    hoverText: 'hover:text-synelixis-orange'
  },
  'synelixis-yellow': {
    bg: 'bg-synelixis-yellow/80',
    focusRing: 'focus-visible:ring-synelixis-yellow',
    hoverBg: 'hover:bg-synelixis-yellow/30',
    hoverText: 'hover:text-yellow-700'
  },
  'synelixis-blue': {
    bg: 'bg-synelixis-blue/80',
    focusRing: 'focus-visible:ring-synelixis-blue',
    hoverBg: 'hover:bg-synelixis-blue/20',
    hoverText: 'hover:text-synelixis-blue'
  }
};

const links = [
  {href: '/event', label: 'Schedule', colorKey: 'synelixis-blue'},
  {href: '/event/speakers', label: 'Speakers', colorKey: 'synelixis-yellow'},
  {href: '/event/performances', label: 'Performances', colorKey: 'synelixis-orange'},
  {href: '/event/experience-workshops', label: 'Experience Workshops', colorKey: 'synelixis-blue'},
  {
    href: '/event/professional-workshops',
    label: 'Professional Workshops',
    colorKey: 'synelixis-blue'
  },
  {href: '/event/side-happenings', label: 'Side Happpenings', colorKey: 'synelixis-blue'}
];

const defaultColorKey = 'synelixis-blue';

export default function EventFilterNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 border-b border-gray-300 mb-6 mx-auto">
      {links.map(link => {
        const isActive =
          pathname === link.href || (link.href !== '/event' && pathname.startsWith(link.href));

        const colorInfo = colorClasses[link.colorKey] || colorClasses[defaultColorKey];
        const baseClasses =
          'px-4 py-2 rounded transition-colors duration-200 ease-in-out font-medium';
        const activeClasses = `${colorInfo.bg} text-white font-semibold shadow-sm ${colorInfo.hoverBg}`;
        const inactiveClasses = `bg-transparent text-gray-700 ${colorInfo.hoverBg} ${colorInfo.hoverText}`;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
