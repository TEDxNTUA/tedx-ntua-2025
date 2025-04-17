'use client';

import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const TextRevealByWord = ({text}) => {
  const targetRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: targetRef
  });
  const words = text.split(' ');

  return (
    <div ref={targetRef} className={'relative z-0 h-[200vh]'}>
      <div
        className={
          'sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]'
        }
      >
        <p
          ref={targetRef}
          className={
            'flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

// interface WordProps {
//   children: ReactNode;
//   progress: MotionValue<number>;
//   range: [number, number];
// }

const Word = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5">
      {/* Background low-opacity word */}
      <span className="text-black/20 dark:text-white/20">{children}</span>

      {/* Revealing word */}
      <motion.span
        style={{opacity}}
        className="absolute top-0 left-0 text-black dark:text-synelixis-orange"
      >
        {children}
      </motion.span>
    </span>
  );
};

export {TextRevealByWord};
