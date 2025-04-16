import React from 'react';

// Using a feature textColor in order to change the color of the text in the component for TED, TEDx, TEDxNTUA and TEDx Program
export default function AboutInfo({textColor}) {
  return (
    <div className="about py-12">
      <div className="flex flex-col lg:w-[80%] mx-auto font-light">
        {/* TED and TEDx side by side */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-20 text-justify lg:text-left">
          {/* TED Section */}
          <div className="left-col lg:w-[50%] w-[80%] mx-auto">
            <div className="title-wrapper mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About <span className={textColor}>TED</span>
              </h2>
            </div>
            <section className="flex flex-col gap-8 text-base sm:text-lg leading-relaxed">
              <p>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a
                four-day conference in California 30 years ago, TED has grown to support its mission
                with multiple initiatives. The two annual TED Conferences invite the world's leading
                thinkers and doers to speak for 18 minutes or less. Many of these talks are then
                made available, free, at TED.com. TED speakers have included Bill Gates, Jane
                Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
              <p>
                The annual TED Conference takes place each spring in Vancouver, British Columbia.
                TED's media initiatives include TED.com, where new TED Talks are posted daily; TED
                Translators, which provides subtitles and interactive transcripts as well as
                translations from volunteers worldwide; the educational initiative TED-Ed. TED has
                established The Audacious Project that takes a collaborative approach to funding
                ideas with the potential to create change at thrilling scale; TEDx, which supports
                individuals or groups in hosting local, self-organized TED-style events around the
                world, and the TED Fellows program, helping world-changing innovators from around
                the globe to amplify the impact of their remarkable projects and activities.
              </p>
            </section>
            <div className="mt-6 text-sm sm:text-base">
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
            <div className="title-wrapper mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About <span className={textColor}>TEDx</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized
              events that bring people together to share a TED-like experience. At a TEDx event, TED
              Talks video and live speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x = independently organized TED
              event. The TED Conference provides general guidance for the TEDx program, but
              individual TEDx events are self-organized. (Subject to certain rules and regulations.)
            </p>

            <a
              target="_blank"
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              className={`${textColor} font-extrabold flex flex-row items-center w-fit text-lg sm:text-xl cursor-pointer group mt-6`}
            >
              <p className="pr-2">TEDx PROGRAM →</p>
            </a>
          </div>
        </div>

        {/* TEDxNTUA Section */}
        <div className="w-[80%] lg:w-[50%] mx-auto mt-12">
          <div className="title-wrapper mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About <span className={textColor}>TEDxNTUA</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            TEDxNTUA is a conference that features talks on the topics of popular science, art, and
            social issues, stories that can inspire, as well as intriguing workshops and
            performances. It runs under the auspices of the National Technical University of Athens,
            Greece (NTUA) and is primarily aimed at the university community, but also at the wider
            student and local communities of Athens.
          </p>
        </div>
      </div>
    </div>
  );
}
