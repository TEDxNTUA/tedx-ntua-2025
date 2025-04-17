'use client';
import {useState} from 'react';
import {motion} from 'framer-motion';
import useMousePosition from '@utils/useMousePosition';
import AboutInfo from '@components/about/AboutInfo';

export default function OrganizationAndHistoryPage() {
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 100 : 30;

  return (
    <div>
      <main className="relative bg-[#01172f]">
        {/* Hover-activated mask */}
        <motion.div
          className="absolute bg-tedx-red text-[64px] leading-[66px] cursor-default"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - 65 - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          style={{
            WebkitMaskImage: "url('./mask.svg')",
            WebkitMaskRepeat: 'no-repeat'
          }}
          transition={{type: 'tween', ease: 'backOut', duration: 0.5}}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? 'text-synelixis-blue-500' : 'text-white'}
          >
            <AboutInfo textColor={'text-white'} />
          </div>
        </motion.div>

        {/* Static background content */}
        <div className="text-white text-[64px] leading-[66px] cursor-default">
          <AboutInfo textColor={'text-tedx-red'} />
        </div>
      </main>
    </div>
  );
}
