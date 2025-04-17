'use client';
import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';

import NavLink from './NavLink';
import SocialMediaNav from './SocialMediaNav';

const eventLinks = [
  {href: '/event/speakers', title: 'Speakers'},
  // {href: '/event/schedule', title: 'Schedule'},
  {href: '/event/performances', title: 'Performances'},
  {href: '/event/professional-workshops', title: 'Professional Workshops'},
  {href: '/event/experience-workshops', title: 'Experience Workshops'},
  {href: '/event/side-happenings', title: 'Side Happenings'}
];

const aboutLinks = [
  {href: '/about/organization-and-history', title: 'Organization & History'},
  {href: '/about/team', title: 'The Team'}
];

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [eventDropdownIsOpen, setEventDropdownIsOpen] = useState(false);
  const [mobileEventDropdownIsOpen, setMobileEventDropdownIsOpen] = useState(false);
  const [aboutDropdownIsOpen, setAboutDropdownIsOpen] = useState(false);
  const [mobileAboutDropdownIsOpen, setMobileAboutDropdownIsOpen] = useState(false);
  const desktopEventDropdownRef = useRef(null);
  const desktopAboutDropdownRef = useRef(null);

  const toggleDrawer = () => {
    const newState = !drawerIsOpen;
    setDrawerIsOpen(newState);
    // Close mobile dropdown if drawer is closing
    if (!newState) {
      setMobileEventDropdownIsOpen(false);
    }
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    setMobileEventDropdownIsOpen(false);
  };

  useEffect(() => {
    const body = document.body;
    if (drawerIsOpen) {
      const scrollY = window.scrollY;
      body.style.overflow = 'hidden';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      const scrollY = body.style.top;
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
    };
  }, [drawerIsOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        closeDrawer();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const hamburgerLine =
    'h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]';

  return (
    <nav className={`h-[65px] bg-black flex sticky top-0 z-50`}>
      <div className="max-w-[1600px] flex items-center justify-between w-[85%] xl:w-[90%] mx-auto">
        {/* Logo */}
        <Link href="/" onClick={drawerIsOpen ? closeDrawer : undefined} className="z-50">
          {' '}
          {/* Ensure logo is clickable */}
          <img
            srr#rc="./tedxntua-logo.png"
            className="w-auto h-[40px] object-contain cursor-pointer"
            alt="TEDxNTUA Logo"
          />
        </Link>

        {/* --- Burger for Mobile Nav --- */}
        <div id="burger" className="block lg:hidden z-50">
          {' '}
          <button
            className="flex cursor-pointer flex-col items-center justify-center outline-none p-2"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
            aria-expanded={drawerIsOpen}
            aria-controls="mobile-menu"
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

        {/* --- Underlay for Mobile Drawer --- */}
        <div
          onClick={closeDrawer}
          id="underlay"
          aria-hidden="true"
          className={`lg:hidden fixed inset-0 top-[65px] bg-black/40 transition-opacity duration-300 ${
            drawerIsOpen ? 'opacity-100 pointer-events-auto z-30' : 'opacity-0 pointer-events-none'
          }`}
        ></div>

        {/* --- Mobile Drawer Menu --- */}
        <div
          id="mobile-menu"
          className={`fixed bg-black w-[300px] top-[65px] right-0 z-40 h-[calc(100vh-65px)] overflow-y-auto lg:hidden
          ${
            drawerIsOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out
          `}
          role="dialog"
          aria-modal="true"
          aria-hidden={!drawerIsOpen}
        >
          <div className="flex flex-col justify-between gap-12 h-full py-[70px]">
            <ul className="flex flex-col text-center justify-start pt-10 gap-4" role="menu">
              <li role="none">
                <NavLink href={'/'} title={'Home'} onClick={closeDrawer} role="menuitem" />
              </li>

              {/* --- Mobile Event Dropdown --- */}
              <li role="none">
                {' '}
                {/* Container for button + sub-menu */}
                <button
                  onClick={e => {
                    // e.stopPropagation(); // Prevent closing drawer when clicking button
                    setMobileEventDropdownIsOpen(prev => !prev);
                  }}
                  className="text-white text-2xl font-semibold w-full text-center py-2 flex items-center justify-center gap-1 hover:text-synelixis-yellow/70"
                  aria-haspopup="true"
                  aria-expanded={mobileEventDropdownIsOpen}
                  role="menuitem"
                >
                  Event
                  {/* Chevron Indicator */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 transition-transform ${
                      mobileEventDropdownIsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Sub-menu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileEventDropdownIsOpen ? 'border-y border-white max-h-96' : 'max-h-0'
                  }`}
                >
                  {/* Sub-menu list */}
                  <ul className="flex flex-col items-center py-2 gap-1" role="menu">
                    {eventLinks.map(link => (
                      <li key={link.href} role="none">
                        <NavLink
                          href={link.href}
                          title={link.title}
                          onClick={closeDrawer}
                          className="text-xl font-normal"
                          role="menuitem"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* --- End Mobile Event Dropdown --- */}

              <li role="none">
                <NavLink
                  href={'/partners'}
                  title={'Partners'}
                  onClick={closeDrawer}
                  role="menuitem"
                />
              </li>
              {/* --- Mobile About Dropdown --- */}
              <li role="none">
                {' '}
                {/* Container for button + sub-menu */}
                <button
                  onClick={e => {
                    // e.stopPropagation(); // Prevent closing drawer when clicking button
                    setMobileAboutDropdownIsOpen(prev => !prev);
                  }}
                  className="text-white text-2xl font-semibold w-full text-center py-2 flex items-center justify-center gap-1 hover:text-synelixis-yellow/70"
                  aria-haspopup="true"
                  aria-expanded={mobileAboutDropdownIsOpen}
                  role="menuitem"
                >
                  About
                  {/* Chevron Indicator */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 transition-transform ${
                      mobileAboutDropdownIsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Sub-menu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileAboutDropdownIsOpen ? 'border-y border-white max-h-96' : 'max-h-0'
                  }`}
                >
                  {/* Sub-menu list */}
                  <ul className="flex flex-col items-center py-2 gap-1" role="menu">
                    {aboutLinks.map(link => (
                      <li key={link.href} role="none">
                        <NavLink
                          href={link.href}
                          title={link.title}
                          onClick={closeDrawer}
                          className="text-xl font-normal"
                          role="menuitem"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* --- End Mobile About Dropdown --- */}
            </ul>

            <SocialMediaNav />
          </div>
        </div>

        {/* --- Desktop Navigation (Hidden on Mobile) --- */}
        <ul className="hidden lg:flex gap-8 items-center pr-16" role="menubar">
          {' '}
          {/* Adjusted spacing */}
          <li role="none">
            <NavLink href={'/'} title={'Home'} role="menuitem" />
          </li>
          {/* --- Desktop Event Dropdown --- */}
          <li
            className="relative" // Container for positioning dropdown
            onMouseEnter={() => setEventDropdownIsOpen(true)}
            onMouseLeave={() => setEventDropdownIsOpen(false)}
            ref={desktopEventDropdownRef}
            role="none"
          >
            <button
              className="text-white hover:synelixis-yellow/70 py-2 rounded-md text-lg font-semibold flex items-center gap-1 cursor-pointer"
              aria-haspopup="true"
              aria-expanded={eventDropdownIsOpen}
              role="menuitem"
              onClick={e => e.preventDefault()}
            >
              Event
              {/* Chevron Indicator */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${
                  eventDropdownIsOpen ? 'rotate-180' : ''
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown Menu Panel */}
            <div
              className={`absolute left-0 w-56 origin-top-left rounded-md shadow-lg bg-black ring-1 ring-gray-700 ring-opacity-50 py-1 z-50
            transition ease-out duration-100 ${
              eventDropdownIsOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }
        `}
              role="menu"
              aria-orientation="vertical"
              hidden={!eventDropdownIsOpen}
            >
              <ul className="flex flex-col" role="none">
                {' '}
                {/* List inside the menu */}
                {eventLinks.map(link => (
                  <li key={link.href} role="none">
                    <NavLink
                      href={link.href}
                      title={link.title}
                      className="!block !w-full !text-left !px-4 !py-2 !text-base !font-normal hover:!bg-gray-800 hover:!text-white" // Override NavLink styles for dropdown items
                      role="menuitem"
                      onClick={() => setEventDropdownIsOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* --- End Desktop Event Dropdown --- */}
          <li role="none">
            <NavLink href={'/partners'} title={'Partners'} role="menuitem" />
          </li>
          {/* --- Desktop About Dropdown --- */}
          <li
            className="relative" // Container for positioning dropdown
            onMouseEnter={() => setAboutDropdownIsOpen(true)}
            onMouseLeave={() => setAboutDropdownIsOpen(false)}
            ref={desktopAboutDropdownRef}
            role="none"
          >
            <button
              className="text-white hover:synelixis-yellow/70 py-2 rounded-md text-lg font-semibold flex items-center gap-1 cursor-pointer"
              aria-haspopup="true"
              aria-expanded={aboutDropdownIsOpen}
              role="menuitem"
              onClick={e => e.preventDefault()}
            >
              About
              {/* Chevron Indicator */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${
                  aboutDropdownIsOpen ? 'rotate-180' : ''
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown Menu Panel */}
            <div
              className={`absolute left-0 w-56 origin-top-left rounded-md shadow-lg bg-black ring-1 ring-gray-700 ring-opacity-50 py-1 z-50
            transition ease-out duration-100 ${
              aboutDropdownIsOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }
        `}
              role="menu"
              aria-orientation="vertical"
              hidden={!aboutDropdownIsOpen}
            >
              <ul className="flex flex-col" role="none">
                {' '}
                {/* List inside the menu */}
                {aboutLinks.map(link => (
                  <li key={link.href} role="none">
                    <NavLink
                      href={link.href}
                      title={link.title}
                      className="!block !w-full !text-left !px-4 !py-2 !text-base !font-normal hover:!bg-gray-800 hover:!text-white"
                      role="menuitem"
                      onClick={() => setAboutDropdownIsOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* --- End Desktop About Dropdown --- */}
        </ul>
      </div>
    </nav>
  );
}
