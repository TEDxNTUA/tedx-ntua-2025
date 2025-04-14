'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollReel.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReel() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const frames = [
    { src: '/logo/syn.png', alt: 'Frame 1' },
    { src: '/logo/eli.png', alt: 'Frame 2' },
    { src: '/logo/xis.png', alt: 'Frame 3' },
    { src: '/logo/asterismos.png', alt: 'Frame 4' },
  ];

  const setSectionRef = (el, idx) => {
    sectionRefs.current[idx] = el;
  };

  useEffect(() => {
    const totalFrames = frames.length;
    const scrollDistance = totalFrames * 300;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: true,
      },
    });

    sectionRefs.current.forEach((section, i) => {
      const frameStart = i * 1.5;
      
      tl.fromTo(
        section,
        { autoAlpha: 0, y: 50, scale: 1 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'power1.out' },
        frameStart
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [frames]);

  return (
    <section ref={containerRef} className={styles.container}>
      {frames.map((frame, idx) => (
        <div
          key={idx}
          ref={(el) => setSectionRef(el, idx)}
          className={styles.frameWrapper}
        >
          <img src={frame.src} alt={frame.alt} className={styles.frameImage} />
        </div>
      ))}
    </section>
  );
}
