'use client';
import React, {useEffect, useRef, useState} from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// FIRST PHRASE (letter-split)
const phrase = `SYNELIXIS What happens when two worlds come into contact? Synelixis, in its mathematical sense, describes the transformation one function causes in another as it passes through it — and the result that emerges as a combination of both. In our lives, in our everyday reality, a 'function' can be seen as any idea, any interaction, any moment — a brief (or perhaps not so brief) exchange. A dialogue between the old and the new, the familiar and the unknown, the fleeting and the eternal — not simply the merging of opposites, but the birth of something new and unique.`;

// EXACT words (including punctuation) that should appear in gold (#c8921c) in the FIRST text
const highlightWordsFirst = new Set([
  'SYNELIXIS',
  'function',
  'combination',
  'idea,',
  'new',
  'unique.'
]);

export default function Description() {
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
    </div>
  );
}
