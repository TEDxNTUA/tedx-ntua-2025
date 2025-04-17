'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const phrase = `Just as stars come together in the sky to form constellations — even from afar — we too “connect” the scattered pieces around us, shaping new versions of ourselves. Just like the pixels on a screen break down into levels to create images, our moments and memories form a reality that is multi-layered and one-of-a-kind. At TEDxNTUA 2025, we will explore how every small or grand synelixis — every interaction — transforms us at our core and gives rise to a new world, a new reality.`;

const highlightWordsFirst = new Set([
  'stars',
  '“connect”',
  'memories',
  'synelixis',
  'transforms',
  'new reality',
]);

const specialRedKeyword = 'TEDx';

export default function Descriptiontwo() {
  const [mounted, setMounted] = useState(false);
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);

    refs.current.forEach(el => {
      if (el) el.style.opacity = 0.2;
    });

    gsap.fromTo(
      refs.current,
      { opacity: 0.2 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        },
        ease: 'none',
        stagger: 0.05
      }
    );
  }, [mounted]);

  const splitWords = inputPhrase => {
    refs.current = [];
    return inputPhrase.split(' ').map((word, i) => {
      if (word.includes(specialRedKeyword)) {
        const parts = word.split(specialRedKeyword);
        return (
          <p key={`${word}_${i}`} className="">
            {splitLetters(specialRedKeyword, `${i}_red`, styles.specialRedWord)}
            {splitLetters(parts[1], `${i}_normal`, '')}
          </p>
        );
      }

      const isHighlight = highlightWordsFirst.has(word);
      const className = isHighlight ? styles.highlightWord : '';
      return (
        <p key={`${word}_${i}`} className={className}>
          {splitLetters(word, i, '')}
        </p>
      );
    });
  };

  const splitLetters = (word, wordIndex, extraClass) => {
    return word.split('').map((letter, i) => (
      <span
        key={`${letter}_${i}_${wordIndex}`}
        className={extraClass}
        ref={el => {
          if (el) refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };

  if (!mounted) return null;

  return (
    <div>
      <div ref={container} className={styles.body}>
        {splitWords(phrase)}
      </div>
      <div className={styles.logoWrapper}>
        <img src="/logo/SYNELIXIS.png" alt="SYNELIXIS Logo" className={styles.synelixisLogo} />
      </div>
    </div>
  );
}