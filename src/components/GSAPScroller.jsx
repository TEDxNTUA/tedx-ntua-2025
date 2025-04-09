'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GSAPScroller.module.css'; // optional Tailwind alternative

export default function GSAPScroller() {
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
    <div className="overflow-hidden whitespace-nowrap bg-white py-6">
      <div ref={slider} className="flex gap-4 text-4xl font-bold uppercase tracking-widest text-black">
        {Array(20).fill('Synelixis').map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  );
}
