'use client';
import {useState} from 'react';
import styles from './page.module.scss';
import {motion} from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 100 : 30;

  return (
    <div className="mt-[65px]">
      <main className={styles.main}>
        {/* Here appears the text when it is hovered. */}
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          transition={{type: 'tween', ease: 'backOut', duration: 0.5}}
        >
          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className={isHovered ? 'text-red' : 'text-white'}
          >
            <div className="about">
              <div className="flex flex-col lg:w-[80%] mx-auto">
                {/* TED and TEDx side by side */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-[4rem] text-justify lg:text-left">
                  {/* TED Section */}
                  <div className="left-col lg:w-[50%] w-[80%] mx-auto">
                    <div className="title-wrapper mb-[2rem]">
                      <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                        About <span className="text-white">TED</span>
                      </h2>
                    </div>
                    <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                      TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a
                      four-day conference in California 30 years ago, TED has grown to support its
                      mission with multiple initiatives. The two annual TED Conferences invite the
                      world's leading thinkers and doers to speak for 18 minutes or less. Many of
                      these talks are then made available, free, at TED.com. TED speakers have
                      included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
                      Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
                      Kahneman.
                      <br />
                      <br />
                      The annual TED Conference takes place each spring in Vancouver, British
                      Columbia. TED's media initiatives include TED.com, where new TED Talks are
                      posted daily; TED Translators, which provides subtitles and interactive
                      transcripts as well as translations from volunteers worldwide; the educational
                      initiative TED-Ed. TED has established The Audacious Project that takes a
                      collaborative approach to funding ideas with the potential to create change at
                      thrilling scale; TEDx, which supports individuals or groups in hosting local,
                      self-organized TED-style events around the world, and the TED Fellows program,
                      helping world-changing innovators from around the globe to amplify the impact
                      of their remarkable projects and activities.
                    </p>
                    <div className="mt-6 text-sm">
                      Follow TED on{' '}
                      <a
                        href="https://twitter.com/TEDTalks"
                        target="_blank"
                        className="font-bold underline"
                      >
                        Twitter
                      </a>{' '}
                      or on{' '}
                      <a
                        href="https://www.facebook.com/TED"
                        target="_blank"
                        className="font-bold underline"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>

                  {/* TEDx Section */}
                  <div className="right-col lg:w-[50%] w-[80%] mx-auto">
                    <div className="title-wrapper mb-[2rem]">
                      <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                        About <span className="text-white">TEDx</span>
                      </h2>
                    </div>
                    <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                      In the spirit of ideas worth spreading, TEDx is a program of local,
                      self-organized events that bring people together to share a TED-like
                      experience. At a TEDx event, TED Talks video and live speakers combine to
                      spark deep discussion and connection. These local, self-organized events are
                      branded TEDx, where x = independently organized TED event. The TED Conference
                      provides general guidance for the TEDx program, but individual TEDx events are
                      self-organized. (Subject to certain rules and regulations.)
                    </p>
                    <div className="mt-6"></div>
                    <a
                      target="_blank"
                      href="https://www.ted.com/about/programs-initiatives/tedx-program"
                      className="text-white font-extrabold flex flex-row w-fit text-xl hover:cursor-pointer"
                    >
                      <p className="pr-3 hover:pr-6">TEDx PROGRAM </p>
                      <img
                        className="my-auto hover:pl-3"
                        src="https://uploads-ssl.webflow.com/63e118320fe0876684cc169c/63e57c17119d6d2dca8a9624_red-arrow.svg"
                        style={{
                          transform:
                            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }}
                        alt="Arrow"
                      />
                    </a>
                  </div>
                </div>

                {/* TEDxNTUA Section (Below TED and TEDx) */}
                <div className="w-[80%] lg:w-[50%] mx-auto mt-8">
                  <div className="title-wrapper mb-[2rem]">
                    <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                      About <span className="text-white">TEDxNTUA</span>
                    </h2>
                  </div>
                  <p className="text-justify text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                    TEDxNTUA is a conference that features talks on the topics of popular science,
                    art, and social issues, stories that can inspire, as well as intriguing
                    workshops and performances. It runs under the auspices of the National Technical
                    University of Athens, Greece (NTUA) and is primarily aimed at the university
                    community, but also at the wider student and local communities of Athens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={styles.body}>
          {/* Text without being hovered */}
          <div className="about">
            <div className="flex flex-col lg:w-[80%] mx-auto">
              {/* TED and TEDx side by side */}
              <div className="flex flex-col lg:flex-row lg:justify-between gap-[4rem] text-justify lg:text-left">
                {/* TED Section */}
                <div className="left-col lg:w-[50%] w-[80%] mx-auto">
                  <div className="title-wrapper mb-[2rem]">
                    <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                      About <span className="text-our-red">TED</span>
                    </h2>
                  </div>
                  <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                    TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a
                    four-day conference in California 30 years ago, TED has grown to support its
                    mission with multiple initiatives. The two annual TED Conferences invite the
                    world's leading thinkers and doers to speak for 18 minutes or less. Many of
                    these talks are then made available, free, at TED.com. TED speakers have
                    included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
                    Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
                    Kahneman.
                    <br />
                    <br />
                    The annual TED Conference takes place each spring in Vancouver, British
                    Columbia. TED's media initiatives include TED.com, where new TED Talks are
                    posted daily; TED Translators, which provides subtitles and interactive
                    transcripts as well as translations from volunteers worldwide; the educational
                    initiative TED-Ed. TED has established The Audacious Project that takes a
                    collaborative approach to funding ideas with the potential to create change at
                    thrilling scale; TEDx, which supports individuals or groups in hosting local,
                    self-organized TED-style events around the world, and the TED Fellows program,
                    helping world-changing innovators from around the globe to amplify the impact of
                    their remarkable projects and activities.
                  </p>
                  <div className="mt-6 text-sm">
                    Follow TED on{' '}
                    <a
                      href="https://twitter.com/TEDTalks"
                      target="_blank"
                      className="font-bold underline"
                    >
                      Twitter
                    </a>{' '}
                    or on{' '}
                    <a
                      href="https://www.facebook.com/TED"
                      target="_blank"
                      className="font-bold underline"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                {/* TEDx Section */}
                <div className="right-col lg:w-[50%] w-[80%] mx-auto">
                  <div className="title-wrapper mb-[2rem]">
                    <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                      About <span className="text-our-red">TEDx</span>
                    </h2>
                  </div>
                  <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                    In the spirit of ideas worth spreading, TEDx is a program of local,
                    self-organized events that bring people together to share a TED-like experience.
                    At a TEDx event, TED Talks video and live speakers combine to spark deep
                    discussion and connection. These local, self-organized events are branded TEDx,
                    where x = independently organized TED event. The TED Conference provides general
                    guidance for the TEDx program, but individual TEDx events are self-organized.
                    (Subject to certain rules and regulations.)
                  </p>
                  <div className="mt-6"></div>
                  <a
                    target="_blank"
                    href="https://www.ted.com/about/programs-initiatives/tedx-program"
                    className="text-our-red font-extrabold flex flex-row w-fit text-xl hover:cursor-pointer"
                  >
                    <p className="pr-3 hover:pr-6">TEDx PROGRAM </p>
                    <img
                      className="my-auto hover:pl-3"
                      src="https://uploads-ssl.webflow.com/63e118320fe0876684cc169c/63e57c17119d6d2dca8a9624_red-arrow.svg"
                      style={{
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d'
                      }}
                      alt="Arrow"
                    />
                  </a>
                </div>
              </div>

              {/* TEDxNTUA Section (Below TED and TEDx) */}
              <div className="w-[80%] lg:w-[50%] mx-auto mt-8">
                <div className="title-wrapper mb-[2rem]">
                  <h2 className="text-[2.25rem] lg:text-[4.25rem] font-bold">
                    About <span className="text-our-red">TEDxNTUA</span>
                  </h2>
                </div>
                <p className="text-justify text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
                  TEDxNTUA is a conference that features talks on the topics of popular science,
                  art, and social issues, stories that can inspire, as well as intriguing workshops
                  and performances. It runs under the auspices of the National Technical University
                  of Athens, Greece (NTUA) and is primarily aimed at the university community, but
                  also at the wider student and local communities of Athens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}