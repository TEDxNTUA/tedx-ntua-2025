'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const phrase = `[𝗦𝗬𝗡𝗘𝗟𝗜𝗫𝗜𝗦] What happens when two worlds come into contact? Synelixis, in its mathematical sense, describes the transformation one function causes in another as it passes through it — and the result that emerges as a combination of both. In our lives, in our everyday reality, a 'function' can be seen as any idea, any interaction, any moment — a brief (or perhaps not so brief) exchange. In our lives, in our everyday moments, a function can be seen in every idea, every game, every connection — a fleeting (or not so fleeting) interaction. A dialogue between the old and the new, the familiar and the unknown, the fleeting and the eternal — not simply the merging of opposites, but the birth of something new and unique. Just as stars come together in the sky to form constellations — even from afar — we too “connect” the scattered pieces around us, shaping new versions of ourselves. Just like the pixels on a screen break down into levels to create images, our moments and memories form a reality that is multi-layered and one-of-a-kind. At TEDxNTUA 2025, we will explore how every small or grand synelixis — every interaction — transforms us at our core and gives rise to a new world, a new reality.`;

export default function Description() {
  const [mounted, setMounted] = useState(false);
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);

    refs.current.forEach((el) => {
      if (el) {
        el.style.opacity = 0.2; 
      }
    });

    gsap.fromTo(
      refs.current,
      { opacity: 0.2 },  // Start opacity
      {
        opacity: 1,  
        scrollTrigger: {
          trigger: container.current,  
          start: "top 80%", 
          end: "top 20%",   
          scrub: 1, 
        },
        ease: 'none',  
        stagger: 0.05,
      }
    );
  }, [mounted]);

  const splitWords = (phrase) => {
    refs.current = []; 
    return phrase.split(" ").map((word, i) => (
      <p key={word + "_" + i}>{splitLetters(word, i)}</p>
    ));
  };

  const splitLetters = (word, wordIndex) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i + "_" + wordIndex}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };

  if (!mounted) return null;

  return (
    <div ref={container} className={styles.body}>
      {splitWords(phrase)}
    </div>
  );
}
