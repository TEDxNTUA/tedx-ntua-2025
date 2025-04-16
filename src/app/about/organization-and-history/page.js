'use client';
import {useState} from 'react';
import styles from './page.module.scss';
import {motion} from 'framer-motion';
import useMousePosition from '@utils/useMousePosition';
import AboutInfo from '@components/about/AboutInfo';

export default function OrganizationAndHistoryPage() {
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 100 : 30;

  return (
    <div>
      {/* Main includes information about TED, TEDx and TEDxNTUA with a mask interactive effect */}
      <main className={styles.main}>
        {/* Here appears the text when it is hovered. */}
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - 65 - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          transition={{type: 'tween', ease: 'backOut', duration: 0.5}}
        >
          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className={isHovered ? 'text-red' : 'text-white'}
          >
            <AboutInfo textColor="text-synelixis-blue" />
          </div>
        </motion.div>
        <div className={styles.body}>
          {/* Text without being hovered */}
          <AboutInfo textColor="text-synelixis-orange" />
        </div>
      </main>
    </div>
  );
}
