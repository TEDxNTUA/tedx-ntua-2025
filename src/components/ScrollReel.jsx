'use client';
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './ScrollReel.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReel() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const setSectionRef = (el, idx) => {
    sectionRefs.current[idx] = el;
  };

  const frames = [
    {src: '/logo/syn.png', alt: 'Syn'},
    {src: '/logo/eli.png', alt: 'Eli'},
    {src: '/logo/xis.png', alt: 'Xis'}
  ];

  const asterismos = {src: '/logo/asterismos.png', alt: 'Asterismos'};

  useEffect(() => {
    const scrollDistance = frames.length * 300;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: true
      }
    });

    frames.forEach((_, idx) => {
      const section = sectionRefs.current[idx];
      const frameStart = idx * 1.5;

      tl.set(section, {zIndex: idx + 1}, frameStart);
      tl.fromTo(
        section,
        {autoAlpha: 0, y: 50, scale: 1},
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power1.out',
          immediateRender: false
        },
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
        <div key={idx} ref={el => setSectionRef(el, idx)} className={styles.frameWrapper}>
          <img src={frame.src} alt={frame.alt} className={styles.frameImage} />
        </div>
      ))}

      <div className={styles.asterismosLayer}>
        <img src={asterismos.src} alt={asterismos.alt} className={styles.frameImage} />
      </div>
    </section>
  );
}
