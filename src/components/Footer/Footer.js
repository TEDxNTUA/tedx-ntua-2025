'use client';

import Link from 'next/link';
import SocialMediaFooter from './SocialMediaFooter';
import styles from './magnetic.module.css';

export default function Footer() {
  return (
    <footer
      className="text-white pt-12 pb-6 px-6 md:px-12"
      style={{
        backgroundImage: `url('./background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col gap-8">
        {/* Top Row: TEDxNTUA Info + Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* TEDxNTUA Info */}
          <div className="w-full lg:w-1/3 text-xs md:text-sm text-left text-gray-300 leading-relaxed">
            <p className="font-bold text-2xl mb-2">
              <span style={{color: '#eb0028'}}>TEDx</span>
              <span className="text-white">NTUA</span>
            </p>
            <p>
              This independent TEDx event is operated under license from TED and the auspices of
              ICCS. This website is our latest version : 2025
            </p>
          </div>

          {/* Social Icons */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <SocialMediaFooter />
          </div>
        </div>

        {/* Center Row: Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-center">
          {[
            {label: 'Αρχική', href: '/'},
            {label: 'Ομιλητές', href: '/speakers'},
            {label: 'Performers & Workshops', href: '/performers'},
            {label: 'Χορηγοί', href: '/partners'},
            {label: 'About', href: '/about'}
          ].map(({label, href}) => (
            <li key={label}>
              <Link href={href}>
                <p
                  className={`${styles.magnetic} text-white text-md md:text-lg font-semibold transition-all duration-300`}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Row: Copyright */}
        <p className="text-gray-400 text-xs text-center mt-4">ALL RIGHTS RESERVED © 2025</p>
      </div>
    </footer>
  );
}
