'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './description.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const phrase = "[𝗦𝗬𝗡𝗘𝗟𝗜𝗫𝗜𝗦] What happens when two worlds come into contact? Synelixis, in its mathematical sense, describes the transformation one function causes in another as it passes through it — and the result that emerges as a combination of both. In our lives, in our everyday reality, a 'function' can be seen as any idea, any interaction, any moment — a brief (or perhaps not so brief) exchange.";

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
