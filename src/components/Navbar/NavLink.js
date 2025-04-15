'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

function NavLink({href, title, className = '', onClick = () => {}}) {
  const path = usePathname();

  const defaultStyle =
    'text-2xl lg:text-lg font-semibold hover:text-synelixis-yellow/80 block py-2';
  const activeStyle = 'text-synelixis-yellow';
  const inactiveStyle = 'text-white';

  const combinedClassName = `${defaultStyle} ${
    path === href ? activeStyle : inactiveStyle
  } ${className}`;

  return (
    <Link href={href} passHref className={combinedClassName} onClick={onClick}>
      {title}
    </Link>
  );
}

export default NavLink;
