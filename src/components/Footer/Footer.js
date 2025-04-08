"use client";

import Link from "next/link";
import SocialMediaFooter from "./SocialMediaFooter";
import styles from "./magnetic.module.css";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <p className="text-gray-500 text-xs text-center lg:text-left w-full lg:w-1/4">
          ALL RIGHTS RESERVED © 2025
        </p>

        {/* Navigation Links */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center w-full lg:w-2/4">
          {[
            { label: "Αρχική", href: "/" },
            { label: "Ομιλητές", href: "/speakers" },
            { label: "Performers & Workshops", href: "/performers" },
            { label: "Χορηγοί", href: "/partners" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
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

        {/* Social Icons */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <SocialMediaFooter />
        </div>
      </div>
    </footer>
  );
}
