'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Intro from '@components/Intro';
import Description from '@components/Description';
import ParallaxImage from '@components/ParallaxImage'; // adjust path if not using alias


import styles from './page.module.css';

export default function Home() {
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(slider.current, { xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          {Array(20).fill('Synelixis').map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </div>
      </div>

      <Intro />
      <Description />
      <ParallaxImage />

    </main>
  );
}
