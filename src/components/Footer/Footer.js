"use client";

import Link from "next/link";
import SocialMediaFooter from "./SocialMediaFooter";

import styles from "./magnetic.module.css";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 md:p-12">
      {/* Nav links*/}
      <ul className="col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 lg:text-2xl justify-center justify-items-center">
        <li>
          <Link href="/" className="text-white text-md font-bold">
            <p className={styles.magnetic}>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/speakers" className="text-white text-md font-bold">
            <p className={styles.magnetic}>Speakers</p>
          </Link>
        </li>
        <li>
          <Link href="/partners" className="text-white text-md font-bold">
            <p className={styles.magnetic}>Sponsors</p>
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white text-md font-bold">
            <p className={styles.magnetic}>About</p>
          </Link>
        </li>
      </ul>

      <div className="flex flex-row justify-between bg-black">
        <p className="text-center text-gray-500 text-xs">
          ALL RIGHTS RESERVED © 2025
        </p>
        <SocialMediaFooter />
      </div>
    </footer>
  );
}
