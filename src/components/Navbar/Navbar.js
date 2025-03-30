'use client';
import {useState} from 'react';
import Link from 'next/link';

import NavLink from './NavLink';

const navLinks = [
  {title: 'Αρχική', path: '/', isImage: true},
  {
    title: 'Ομιλητές',
    path: '/speakers'
  },
  {
    title: 'Performers & Workshops',
    path: '/performers'
  },
  {
    title: 'Χορηγοί',
    path: '/partners'
  },
  {
    title: 'About',
    path: '/about'
  }
  // {
  //   title: "Booklet",
  //   path: "/booklet"
  // }
];

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  // const [buttonClicked, setButtonClicked] = useState("");
  const closeDrawer = () => {
    if (drawerIsOpen) {
      setDrawerIsOpen(false);
    }
  };

  const hamburgerLine =
    'h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]';

  return (
    <nav className="h-[65px] sticky bg-black flex top-0">
      <div className="flex  items-center justify-between w-[90%] max-w-[1600px] mx-auto">
        <Link onClick={closeDrawer} href="/">
          <img
            src="./tedxntua_logo.png"
            className="w-auto h-[40px] object-contain"
            alt="TEDxNTUA Logo"
            onClick={() =>
              document
                .getElementById('main-scroll-container')
                .scrollTo({top: 0, behavior: 'smooth'})
            }
          ></img>
        </Link>
        {/* Desktop Nav */}
        <div
          id="desktop-navbar"
          className="menu hidden lg:flex flex-row-reverse lg:flex-row gap-8 xl:gap-16 justify-center items-center"
        >
          <ul className="flex lg:flex-row lg:space-x-8 xl:space-x-16">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-2">
                <NavLink
                  href={link.path}
                  title={link.title}
                  // onClick={() => setButtonClicked(link.title)}
                  // buttonClicked={buttonClicked}
                />
              </li>
            ))}
          </ul>

          {/* <a
            // className=""
            href="https://www.eventora.com/el/Events/ephemeral?fbclid=IwAR1dVD5B4W-_9M2s2yfTFu_RAV9GWMdssRmyVqbNu6UWHNIve4H9IHFCCVQ"
            target="_blank"
            rel="noopener noreferrer"
          > */}

          {/* <img
              className="ticket h-[60px]"
              src="./ticket.png"
              alt="ticket"
            ></img> */}
          {/* </a> */}
          <a
            className="hover:cursor-pointer"
            href="./booklet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl lg:text-base font-semibold hover:text-our-blue text-white">
              Booklet
            </p>
          </a>
        </div>
        {/* Burger for Mobile Nav */}
        <div id="burger" className="block lg:hidden">
          <button
            className="flex cursor-pointer flex-col items-center justify-center outline-none"
            onClick={() => setDrawerIsOpen(!drawerIsOpen)}
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
      </div>
      {/* Menu-Drawer for Mobile Nav */}
      <div
        onClick={closeDrawer}
        id="mobile-drawer"
        className={
          drawerIsOpen
            ? 'fixed right-0 w-[45%] z-50 lg:hidden h-[calc(100vh-65px)] bg-black ease-in duration-300 mt-[65px]'
            : 'fixed right-[-120%] h-[calc(100vh-65px)] mt-[65px] z-50'
        }
      >
        {/* <div className="flex flex-col items-center justify-between h-full pt-16 pb-32 w-[90%] mx-auto"> */}
        <div className="flex flex-col items-center justify-between h-full pt-16 pb-32 w-[90%] mx-auto">
          <ul className="flex flex-col place-items-center text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="py-4">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          {/* <a
            // className=""
            href="https://www.eventora.com/el/Events/ephemeral?fbclid=IwAR1dVD5B4W-_9M2s2yfTFu_RAV9GWMdssRmyVqbNu6UWHNIve4H9IHFCCVQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ticket h-[60px]"
              src="./ticket.png"
              alt="ticket"
            ></img>
          </a> */}
          <a
            className="hover:cursor-pointer"
            href="./booklet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl lg:text-base font-semibold hover:text-our-blue text-white">
              Booklet
            </p>
          </a>
          {/* UNCOMMENT WHEN EVENT STARTS AND TICKETS ARE AVAILABLE */}
          {/* <button
            className="bg-our-red bg-opacity-100 hover:bg-our-red hover:bg-opacity-80 text-white font-semibold py-4 px-6 rounded-md focus:outline-none focus:shadow-outline-red"
            onClick={() => {
              // Handle booking logic here
              console.log("Booking button clicked");
            }}
          >
            Book Your Ticket!
          </button> */}

          {/* <SocialMediaNav onClick={closeDrawer} /> */}
        </div>
      </div>
      <div
        onClick={closeDrawer}
        id="opacity-when-drawer-clicked"
        className={
          drawerIsOpen
            ? 'fixed right-0 w-[100%] lg:hidden bg-black/40 z-40 h-[calc(100vh-65px)] mt-[65px]'
            : 'fixed right-[-120%] h-[calc(100vh-65px)] mt-[65px]'
        }
      />
    </nav>
  );
}

export default Navbar;
