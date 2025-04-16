'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Description from '@components/Description';
import Descriptiontwo from '@components/Descriptiontwo';
import ScrollReel from '@components/ScrollReel';
import Odeio from '@components/Odeio';

import styles from './page.module.css';

export default function Home() {
  const topSlider    = useRef(null);
  const bottomSlider = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xPercent  = 0;
    let direction = -1;
    let sliderLoop;

    // animate both sliders
    const animate = () => {
      if (xPercent < -100) xPercent = 0;
      else if (xPercent > 0) xPercent = -100;

      [topSlider.current, bottomSlider.current].forEach(el => {
        if (el) gsap.set(el, { xPercent });
      });

      xPercent += 0.1 * direction;
      sliderLoop = requestAnimationFrame(animate);
    };

    animate();

    // only this page's ScrollTrigger
    const flipTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: 0.5,
      onUpdate: self => {
        direction = self.direction * -1;
      },
    });

    return () => {
      flipTrigger.kill();
      cancelAnimationFrame(sliderLoop);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={topSlider} className={styles.slider}>
          {Array(20).fill('Synelixis').map((word, i) => (
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
          {Array(20).fill(0).map((_, i) => (
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
