'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ParallaxImage() {
  const containerRef = useRef();
  const imageRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (imageRef.current) {
      console.log('Rendered size:', imageRef.current.offsetWidth, imageRef.current.offsetHeight);
      console.log('Natural size:', imageRef.current.naturalWidth, imageRef.current.naturalHeight);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          ref={imageRef}
          src="/1.jpg"
          alt="Parallax Synelixis"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Scroll deeper into Synelixis
        </h2>
      </div>
    </div>
  );
}
