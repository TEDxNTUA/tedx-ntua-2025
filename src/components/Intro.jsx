'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // smooth subtle parallax

  return (
    <div
      ref={container}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/2.jpg" // ✅ your image path
          alt="TEDxNTUA Intro Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
