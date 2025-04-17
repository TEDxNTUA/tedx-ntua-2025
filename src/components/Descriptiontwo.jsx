'use client';
import React, {useEffect, useRef, useState} from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// FIRST PHRASE (letter-split)
const phrase = `Just as stars come together in the sky to form constellations — even from afar — we too “connect” the scattered pieces around us, shaping new versions of ourselves. Just like the pixels on a screen break down into levels to create images, our moments and memories form a reality that is multi-layered and one-of-a-kind. At TEDxNTUA 2025, we will explore how every small or grand synelixis — every interaction — transforms us at our core and gives rise to a new world, a new reality.`;

// EXACT words (including punctuation) that should appear in gold (#c8921c) in the FIRST text
const highlightWordsFirst = new Set([
  'stars',
  '“connect”',
  'memories',
  'synelixis',
  'transforms',
  'new reality'
]);

export default function Descriptiontwo() {
  const [mounted, setMounted] = useState(false);

  // FIRST TEXT REFS (letter-by-letter)
  const refs = useRef([]); // array of <span> references
  const container = useRef(null); // container ref

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);

    // Initialize letter opacity in the first text
    refs.current.forEach(el => {
      if (el) el.style.opacity = 0.2;
    });

    // SCROLL ANIMATION FOR FIRST TEXT (LETTER-BY-LETTER)
    gsap.fromTo(
      refs.current,
      {opacity: 0.2},
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

  // ========== FIRST TEXT: SPLIT WORDS & LETTERS ==========
  const splitWords = inputPhrase => {
    refs.current = [];
    return inputPhrase.split(' ').map((word, i) => {
      const isHighlight = highlightWordsFirst.has(word);
      return (
        <p key={`${word}_${i}`} className={isHighlight ? styles.highlightWord : ''}>
          {splitLetters(word, i)}
        </p>
      );
    });
  };

  const splitLetters = (word, wordIndex) => {
    return word.split('').map((letter, i) => (
      <span
        key={`${letter}_${i}_${wordIndex}`}
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
      {/* FIRST TEXT BLOCK */}
      <div ref={container} className={styles.body}>
        {splitWords(phrase)}
      </div>

      {/* IMAGE BELOW TEXT */}
      <div className={styles.logoWrapper}>
        <img src="./logo/SYNELIXIS.png" alt="SYNELIXIS Logo" className={styles.synelixisLogo} />
      </div>
    </div>
  );
}
