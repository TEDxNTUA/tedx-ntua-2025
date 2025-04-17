'use client';

import {useRef, useEffect} from 'react';
import Image from 'next/image';
import {useScroll, useTransform, motion} from 'framer-motion';

export default function ParallaxImage() {
  const containerRef = useRef();
  const imageRef = useRef();

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (imageRef.current) {
      console.log('Rendered size:', imageRef.current.offsetWidth, imageRef.current.offsetHeight);
      console.log('Natural size:', imageRef.current.naturalWidth, imageRef.current.naturalHeight);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{y}} className="absolute inset-0">
        <Image
          ref={imageRef}
          src="./logo/SYNELIXIS.png"
          alt="Parallax Synelixis"
          fill
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </div>
  );
}
