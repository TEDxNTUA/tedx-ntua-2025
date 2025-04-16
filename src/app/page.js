'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Description from '@components/Description';
import Descriptiontwo from '@components/Descriptiontwo';
import ScrollReel from '@components/ScrollReel';
import Odeio from '@components/Odeio';

import styles from './page.module.css';

export default function Home() {
  const topSlider    = useRef(null);
  const bottomSlider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  // Core animation loop
  const animate = () => {
    if (xPercent < -100) xPercent = 0;
    else if (xPercent > 0) xPercent = -100;

    // apply to both sliders
    [topSlider.current, bottomSlider.current].forEach(el => {
      if (el) gsap.set(el, { xPercent });
    });

    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis setup
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // if you need pinning (optional)
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
    });

    // ScrollTrigger to reverse direction
    gsap.to({}, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: self => (direction = self.direction * -1),
      }
    });

    // start both loops
    requestAnimationFrame(animate);
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // refresh ScrollTrigger when needed
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    ScrollTrigger.refresh();

    // cleanup
    return () => {
      ScrollTrigger.kill();
      lenis.destroy();
    };
  }, []);

  return (
  <main className={styles.main}>
   <div className={styles.sliderContainer}>
    <div ref={topSlider} className={styles.slider}>
      {Array(20).fill('Synelixis').map((word, i) => <span key={i}>{word}</span>)}
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
    <span className={styles.speakers}>Speakers:</span> 10 -{' '}
    <span className={styles.performances}>Performances:</span> 5 -{' '}
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
