'use client';

import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

import Description from '@components/Description';
import Descriptiontwo from '@components/Descriptiontwo';
import ScrollReel from '@components/ScrollReel';
import Odeio from '@components/Odeio';

import styles from './page.module.css';

export default function Home() {
  const topSlider = useRef(null);
  const bottomSlider = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(); // we don't actually need ScrollTrigger here

    let xPercent = 0;
    const direction = -1; // ← never changes
    let sliderLoop;

    const animate = () => {
      // wrap around
      if (xPercent < -100) xPercent = 0;
      else if (xPercent > 0) xPercent = -100;

      // set both sliders
      gsap.set([topSlider.current, bottomSlider.current], {xPercent});

      // advance in fixed direction
      xPercent += 0.1 * direction;
      sliderLoop = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(sliderLoop);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible flex flex-col items-center bg-synelixis-blue lg:bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className={styles.sliderContainer}>
        <div ref={topSlider} className={styles.slider}>
          {Array(20)
            .fill('Synelixis')
            .map((word, i) => (
              <span key={i}>{word}</span>
            ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <p>Scroll</p>
        <span className={styles.arrow}>↓</span>
      </div>

      <ScrollReel />
      <Description />

      <div className={styles.sliderContainer}>
        <div ref={bottomSlider} className={styles.slider}>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <span key={i}>
                <span className={styles.speakers}>Speakers:</span> 10 –{' '}
                <span className={styles.performances}>Performances:</span> 5 –{' '}
                <span className={styles.workshops}>Workshops:</span> 8
              </span>
            ))}
        </div>
      </div>

      <Descriptiontwo />
      <Odeio />
    </main>
  );
}
