'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollReel.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReel() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const setSectionRef = (el, idx) => {
    sectionRefs.current[idx] = el;
  };

  const frames = [
    { src: '/logo/syn.png',        alt: 'Syn' },       
    { src: '/logo/eli.png',        alt: 'Eli' },       
    { src: '/logo/xis.png',        alt: 'Xis' },        
    { src: '/logo/asterismos.png', alt: 'Asterismos' },
  ];
  
  // we’ll show frames in this sequence
  const order = [3, 0, 1, 2];

  useEffect(() => {
    // 1) Immediately reveal the first‑to‑show frame (asterismos)
    const initialIdx = order[0];
    if (sectionRefs.current[initialIdx]) {
      gsap.set(sectionRefs.current[initialIdx], { autoAlpha: 1 });
    }

    // 2) build the scroll‑driven timeline for the other three
    const scrollDistance = frames.length * 300;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:    containerRef.current,
        pin:        true,
        pinSpacing: true,
        start:      'top top',
        end:        `+=${scrollDistance}`,
        scrub:      true,
      },
    });

    order.forEach((frameIdx, seq) => {
      const section    = sectionRefs.current[frameIdx];
      const frameStart = seq * 1.5;

      // stacking order
      tl.set(section, { zIndex: seq + 1 }, frameStart);

      // fade/slide in when that segment of the scroll is reached
      tl.fromTo(
        section,
        { autoAlpha: 0, y: 50, scale: 1 },
        {
          autoAlpha:       1,
          y:               0,
          scale:           1,
          duration:        1,
          ease:            'power1.out',
          immediateRender: false,    // don’t override our initial CSS/JS-set
        },
        frameStart
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
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
          <img
            src={frame.src}
            alt={frame.alt}
            className={styles.frameImage}
          />
        </div>
      ))}
    </section>
  );
}
