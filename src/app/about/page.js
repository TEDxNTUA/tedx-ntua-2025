'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import AboutInfo from '../../components/about/AboutInfo';
import MeetTheTeam from "../../components/about/MeetTheTeam";
import AboutGrid from "../../components/about/AboutGrid";
import { ABOUTLIST } from "../../../data/about";

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 100 : 30;

  return (
    <div className="bg-synelixis-blue">
      {/* Main includes information about TED, TEDx and TEDxNTUA with a mask interactive effect */}
      <main className={styles.main}>
        {/* Here appears the text when it is hovered. */}
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - 65 - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <div
            onMouseEnter={() => { setIsHovered(true); }}
            onMouseLeave={() => { setIsHovered(false); }}
            className={isHovered ? 'text-red' : 'text-white'}
          >
            <AboutInfo textColor="text-our-red" />
          </div>
        </motion.div>
        <div className={styles.body}>
          {/* Text without being hovered */}
          <AboutInfo textColor="text-our-red" />
        </div>
      </main>

      {/* This div includes the grid with the team members */}
      <div className="max-w-[2080px] mx-auto flex flex-col lg:w-[90%] w-[80%] px-6 mt-[150px] ">
        <h2 className="mb-[30px] text-white text-[2.25rem] lg:text-[4.25rem] font-bold">
          Meet The Team <span className="text-our-red">2025</span>
        </h2>
        <AboutGrid aboutlist={ABOUTLIST} />
      </div>
    </div>
  );
}
