'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';

import NavLink from './NavLink';
import SocialMediaNav from './SocialMediaNav';

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
    if (drawerIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, -parseInt(scrollY || '0'));
    }
  }, [drawerIsOpen]);

  const hamburgerLine =
    'h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]';

  return (
    <nav className={`h-[65px] bg-black flex sticky top-0 z-50`}>
      <div className="max-w-[1600px] flex items-center justify-between w-[90%] lg:w-[80%] mx-auto">
        <Link href="/" onClick={drawerIsOpen ? closeDrawer : undefined}>
          <img
            src="/tedxntua-logo.png"
            className="w-auto h-[40px] object-contain cursor-pointer"
            alt="TEDxNTUA Logo"
          />
        </Link>

        {/* Burger for Mobile Nav */}
        <div id="burger" className="block lg:hidden">
          <button
            className="flex cursor-pointer flex-col items-center justify-center outline-none"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
            aria-expanded={drawerIsOpen}
          >
            <div
              className={`${hamburgerLine} ${drawerIsOpen ? 'translate-y-[9px] rotate-45' : ''}`}
            />
            <div
              className={`${hamburgerLine} ${
                drawerIsOpen ? 'origin-center scale-x-0 opacity-0' : ''
              }`}
            />
            <div
              className={`${hamburgerLine} ${drawerIsOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
            />
          </button>
        </div>

        <div
          onClick={closeDrawer}
          id="underlay"
          className={`lg:hidden overflow-y-hidden top-[65px] left-0 bg-black/40 h-[calc(100vh-65px)] overflow-hidden z-0 w-full ${
            drawerIsOpen ? 'absolute' : 'hidden'
          }`}
        ></div>

        {/* Drawer Menu */}
        <div
          className={`fixed bg-black w-[300px] top-[65px] z-40 h-[calc(100vh-65px)] overflow-hidden lg:hidden 
          ${drawerIsOpen ? 'right-0' : 'right-[-350px]'} transition-all duration-500 ease-in-out 
          `}
          role="dialog"
          aria-hidden={!drawerIsOpen}
        >
          <div
            className="flex flex-col justify-between gap-12 h-full py-[70px]"
            onClick={closeDrawer}
          >
            <ul className="flex flex-col text-center justify-start pt-10 gap-6">
              <NavLink href={'/'} title={'Home'} closeDrawer={closeDrawer} />
              <NavLink href={'/event'} title={'Event'} closeDrawer={closeDrawer} />
              <NavLink href={'/partners'} title={'Partners'} closeDrawer={closeDrawer} />
              <NavLink href={'/about'} title={'About'} closeDrawer={closeDrawer} />
            </ul>
            <SocialMediaNav />
          </div>
        </div>

        {/* --- Desktop Navigation (Hidden on Mobile) --- */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href={'/'} title={'Home'} />
          <NavLink href={'/event'} title={'Event'} />
          <NavLink href={'/partners'} title={'Partners'} />
          <NavLink href={'/about'} title={'About'} />
        </div>
      </div>
    </nav>
  );
}
