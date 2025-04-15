import React from 'react';
import {PROGRAM} from '@data';
import Link from 'next/link';

const typeColors = {
  0: 'bg-synelixis-yellow',
  1: 'bg-synelixis-orange',
  2: 'bg-synelixis-blue',
  3: 'bg-synelixis-blue'
};

const typeLinks = {
  0: '/event/speakers',
  1: '/event/performances',
  2: '/event/experience-workshops',
  3: '/event/professional-workshops'
};

function formatSlug(slug) {
  // 1. Replace dashes with spaces
  let words = slug.split('-');

  // 2. Join into a full string to find the 'and' connectors
  let phrase = words.join(' ');

  // 3. Split by ' and ' into individual names
  let parts = phrase.split(' and ').map(part => part.trim());

  // 4. Capitalize first letter of each word in each part
  const capitalizeWords = str =>
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const formattedParts = parts.map(capitalizeWords);

  // 5. Combine with commas and ampersand
  if (formattedParts.length === 1) return formattedParts[0];
  if (formattedParts.length === 2) return formattedParts.join(' & ');

  return formattedParts.slice(0, -1).join(', ') + ' & ' + formattedParts[formattedParts.length - 1];
}

const Schedule = () => {
  return (
    <main className="max-w-[1600px] flex flex-col gap-6 p-6 mx-auto text-xs md:text-sm">
      <section
        id="class-menu"
        className="grid grid-cols-6 text-center text-sm font-semibold"
        aria-label="Room Header"
      >
        {['Session', 'Time', 'Main Stage', 'Room 1', 'Room 2', 'Room 3'].map((label, i) => (
          <span
            key={label}
            className="p-3 bg-synelixis-blue text-white border border-white rounded-t-md shadow-sm"
          >
            {label}
          </span>
        ))}
      </section>

      <section className="flex flex-col gap-10">
        {PROGRAM.map(session => (
          <section
            key={session.title}
            className="grid grid-cols-6 gap-px bg-gray-200 rounded-md overflow-hidden shadow-md"
            aria-label={`Schedule for ${session.title}`}
          >
            <div
              className={`col-start-1 row-start-1 row-end-[-1] flex justify-center items-center bg-synelixis-blue text-white font-bold text-lg p-4`}
            >
              {session.title}
            </div>

            {session.allHappenings.map((happening, i) => {
              const roomCols = Array(4).fill(null);
              happening.timeSpecificHappenings.forEach(h => {
                roomCols[h.room] = h;
              });

              return (
                <React.Fragment key={`${session.title}-${happening.time}`}>
                  <div className="col-start-2 flex items-center justify-center bg-white font-medium p-2 border border-gray-300">
                    {happening.time}
                  </div>

                  {roomCols.map((h, roomIndex) => {
                    const col = roomIndex + 3;

                    if (!h) {
                      return (
                        <div
                          key={`empty-${session.title}-${roomIndex}-${i}`}
                          className={`col-start-${col} bg-gray-100 border border-gray-300`}
                        />
                      );
                    }

                    const colorClass = typeColors[h.type] || 'bg-gray-300';
                    const linkUrl = h.slug ? typeLinks[h.type] + `/${h.slug}` : '#';

                    return (
                      <Link
                        href={linkUrl}
                        key={h.slug}
                        className={`flex items-center justify-center col-start-${col} ${colorClass} border border-gray-300 p-3 text-white text-sm hover:brightness-105 transition-all duration-200`}
                      >
                        <p className="font-bold break-words flex items-center justify-center">
                          {formatSlug(h.slug)}
                        </p>
                        <p>{h.title}</p>
                      </Link>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </section>
        ))}
      </section>
    </main>
  );
};

export default Schedule;
