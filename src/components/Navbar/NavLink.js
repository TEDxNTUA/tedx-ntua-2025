import {usePathname} from 'next/navigation';
import Link from 'next/link';

function NavLink({href, title, closeDrawer = () => {}}) {
  const path = usePathname();

  const handleClick = () => {
    closeDrawer();
  };

  return (
    <li>
      <Link
        href={href}
        passHref
        className={`text-2xl lg:text-base font-semibold hover:text-our-blue block py-2 ${
          path === href ? 'text-synelixis-yellow' : 'text-white'
        }`}
        onClick={handleClick}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
