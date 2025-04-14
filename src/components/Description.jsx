'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// FIRST PHRASE (letter-split)
const phrase = `[𝗦𝗬𝗡𝗘𝗟𝗜𝗫𝗜𝗦] What happens when two worlds come into contact? Synelixis, in its mathematical sense, describes the transformation one function causes in another as it passes through it — and the result that emerges as a combination of both. In our lives, in our everyday reality, a 'function' can be seen as any idea, any interaction, any moment — a brief (or perhaps not so brief) exchange. A dialogue between the old and the new, the familiar and the unknown, the fleeting and the eternal — not simply the merging of opposites, but the birth of something new and unique.`;

// EXACT words (including punctuation) that should appear in gold (#c8921c) in the FIRST text
const highlightWordsFirst = new Set([
  '[𝗦𝗬𝗡𝗘𝗟𝗜𝗫𝗜𝗦]',
  'function',
  'combination',
  'idea,',
  'new',
  'unique.'
]);

// SECOND PHRASE (line-split)
const secondLines = [
  'Just as stars come together in the sky to form constellations — even from afar — we too “connect” the scattered pieces around us, shaping new versions of ourselves.',
  'Just like the pixels on a screen break down into levels to create images, our moments and memories form a reality that is multi-layered and one-of-a-kind.',
  'At TEDxNTUA 2025, we will explore how every small or grand synelixis — every interaction — transforms us at our core and gives rise to a new world, a new reality.'
];

// For the SECOND text, we’ll replace these exact strings with a <span> to highlight them
// (Make sure they match exactly how they appear in the text, including punctuation or quotes)
const highlightTargetsSecond = [
  'stars',
  '“connect”',
  'memories',
  'synelixis',
  'transforms',
  'new reality'
];

export default function Description() {
  const [mounted, setMounted] = useState(false);

  // 1) FIRST TEXT REFS (letter-by-letter)
  const refs = useRef([]);          // array of <span> references
  const container = useRef(null);   // container ref

  // 2) SECOND TEXT REFS (line-by-line)
  const secondContainer = useRef(null);
  const secondLineRefs = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize letter opacity in the first text
    refs.current.forEach((el) => {
      if (el) el.style.opacity = 0.2; 
    });

    // === SCROLL ANIMATION FOR FIRST TEXT (LETTER-BY-LETTER) ===
    gsap.fromTo(
      refs.current,
      { opacity: 0.2 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        ease: 'none',
        stagger: 0.05
      }
    );

    // === SCROLL ANIMATION FOR SECOND TEXT (LINE-BY-LINE) ===
    gsap.fromTo(
      secondLineRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: secondContainer.current,
          start: 'top 80%',  
          end: 'top 30%',
          scrub: true
        },
        ease: 'power1.out',
        duration: 1
      }
    );
  }, [mounted]);

  // ========== FIRST TEXT: SPLIT WORDS & LETTERS ==========

  // Splits entire phrase into <p> blocks for each "word"
  const splitWords = (inputPhrase) => {
    refs.current = []; 
    return inputPhrase.split(' ').map((word, i) => {
      const isHighlight = highlightWordsFirst.has(word);
      return (
        <p
          key={word + '_' + i}
          // Apply highlightWord class if the word is in highlight set
          className={isHighlight ? styles.highlightWord : ''}
        >
          {splitLetters(word, i)}
        </p>
      );
    });
  };

  // Splits a single "word" into individual letter <span>s
  const splitLetters = (word, wordIndex) => {
    return word.split('').map((letter, i) => (
      <span
        key={letter + '_' + i + '_' + wordIndex}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };

  // ========== SECOND TEXT: HIGHLIGHT WORDS IN-LINE ==========

  // For each line, replace highlight words with a <span class="highlightWord"> 
  // Then return the resulting HTML via dangerouslySetInnerHTML
  const highlightLine = (line) => {
    let replaced = line;

    // For each target word or phrase, do a simple .replaceAll() 
    // to wrap it in a <span class="highlightWord">. 
    // Make sure to match exact text, including punctuation or quotes.
    highlightTargetsSecond.forEach((target) => {
      // We'll only replace if the target actually appears 
      // (to avoid accidental partial matches).
      if (replaced.includes(target)) {
        const replacement = `<span class="${styles.highlightWord}">${target}</span>`;
        replaced = replaced.replaceAll(target, replacement);
      }
    });

    return replaced;
  };

  if (!mounted) return null;

  return (
    <div>
      {/* FIRST TEXT BLOCK */}
      <div ref={container} className={styles.body}>
        {splitWords(phrase)}
      </div>

      {/* SECOND TEXT BLOCK */}
      <div ref={secondContainer} className={styles.secondBody}>
        {secondLines.map((line, i) => {
          const replacedLine = highlightLine(line);
          return (
            <p
              key={'line_' + i}
              ref={(el) => (secondLineRefs.current[i] = el)}
              dangerouslySetInnerHTML={{ __html: replacedLine }}
            />
          );
        })}
      </div>
    </div>
  );
}
