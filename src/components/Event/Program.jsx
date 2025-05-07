import React from 'react';
import {PROGRAM} from '@data';
import styles from './Program.module.css';

const MobileSchedule = () => {
  const getColorClass = type => {
    switch (type) {
      case 0:
        return 'text-synelixis-yellow';
      case 1:
        return 'text-synelixis-orange';
      case 2:
      case 3:
        return 'text-synelixis-blue';
      default:
        return 'text-white';
    }
  };

  return (
    <main className="max-w-[1000px] text-white flex flex-col gap-6 p-6 mx-auto text-xs md:text-sm antialiased">
      <div className="flex flex-col gap-10">
        {PROGRAM.map((session, sessionIndex) => (
          <section
            key={
              session.title !== undefined
                ? `session-${session.title}-${sessionIndex}`
                : `session-idx-${sessionIndex}`
            }
            className="flex flex-col gap-px rounded-lg overflow-hidden py-4"
            aria-label={`Schedule for ${session.title || `Session ${sessionIndex + 1}`}`}
          >
            <div className={`${styles.titleWith} text-left text-3xl md:text-4xl font-bold py-4`}>
              {session.title || `Session ${sessionIndex + 1}`}
            </div>

            {session.type === 'session' ? (
              <main className="w-full flex flex-col">
                <div className="grid grid-cols-4 bg-synelixis-blue py-4 px-2 font-semibold text-lg lg:text-xl">
                  <span className="mx-auto text-center">Time</span>
                  <span className="col-span-3 mx-auto text-center">Main stage</span>
                </div>
                {session.allHappenings &&
                  session.allHappenings.map((happening, happeningIndex) => (
                    <div
                      key={
                        happening.slug !== undefined
                          ? `happening-${happening.slug}-${happeningIndex}`
                          : `happening-idx-${sessionIndex}-${happeningIndex}`
                      }
                      className={`grid grid-cols-4 items-center py-3 px-2 border-b border-gray-200 last:border-b-0 text-md lg:text-lg`}
                    >
                      <span className="mx-auto text-center font-medium text-white">
                        {happening.time}
                      </span>
                      <span
                        className={`${
                          happening.timeSpecificHappenings?.[0]?.type === 0
                            ? 'text-synelixis-yellow'
                            : happening.timeSpecificHappenings?.[0]?.type === 1
                            ? 'text-synelixis-orange'
                            : 'text-white'
                        } col-span-3 mx-auto text-center px-2`}
                      >
                        {happening.timeSpecificHappenings?.[0]?.title}
                      </span>
                    </div>
                  ))}
              </main>
            ) : session.type === 'break' ? (
              <main className="w-full flex flex-col">
                <div
                  className={`$${styles.borderDashed} grid grid-cols-4 bg-synelixis-blue py-4 px-2 font-semibold text-lg lg:text-xl`}
                >
                  <span className="mx-auto text-center">Time</span>
                  <span className="mx-auto text-center">Room 1</span>
                  <span className="mx-auto text-center">Room 2</span>
                  <span className="mx-auto text-center">Room 3</span>
                </div>
                {session.allHappenings &&
                  session.allHappenings.map((happening, happeningIndex) => (
                    <div
                      key={
                        happening.slug !== undefined
                          ? `happening-${happening.slug}-${happeningIndex}`
                          : `happening-idx-${sessionIndex}-${happeningIndex}`
                      }
                      className={`grid grid-cols-4 items-center py-3 px-2 border-b border-gray-200 last:border-b-0 text-md lg:text-lg`}
                    >
                      <span className="mx-auto text-center font-medium">
                        {happening.time || '---'}
                      </span>
                      <span className="mx-auto text-center px-1">
                        {happening.timeSpecificHappenings && happening.timeSpecificHappenings[0]
                          ? happening.timeSpecificHappenings[0].title
                          : '---'}
                      </span>
                      <span className="mx-auto text-center px-1">
                        {happening.timeSpecificHappenings && happening.timeSpecificHappenings[1]
                          ? happening.timeSpecificHappenings[1].title
                          : '---'}
                      </span>
                      <span className="mx-auto text-center px-1">
                        {happening.timeSpecificHappenings && happening.timeSpecificHappenings[2]
                          ? happening.timeSpecificHappenings[2].title
                          : '---'}
                      </span>
                    </div>
                  ))}
              </main>
            ) : (
              <main className="w-full flex flex-col">
                <div className="grid grid-cols-4 bg-synelixis-blue py-4 px-2 font-semibold text-lg lg:text-xl">
                  <span className="mx-auto text-center">Time</span>
                  <span className="col-span-3 mx-auto text-center"></span>
                </div>
                {session.allHappenings &&
                  session.allHappenings.map((happening, happeningIndex) => (
                    <div
                      key={
                        happening.slug !== undefined
                          ? `happening-${happening.slug}-${happeningIndex}`
                          : `happening-idx-${sessionIndex}-${happeningIndex}`
                      }
                      className={`grid grid-cols-4 items-center py-3 px-2 border-b border-gray-200 last:border-b-0 text-md lg:text-lg`}
                    >
                      <span className="mx-auto text-center font-medium text-white">
                        {happening.time}
                      </span>
                      <span className="text-white col-span-3 mx-auto text-center px-2">
                        {happening.timeSpecificHappenings?.[0]?.title}
                      </span>
                    </div>
                  ))}
              </main>
            )}
          </section>
        ))}
      </div>
    </main>
  );
};

export default MobileSchedule;
