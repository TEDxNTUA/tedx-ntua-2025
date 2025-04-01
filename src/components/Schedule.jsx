import React from 'react';
import {PROGRAM} from '@data/program';

const Schedule = () => {
  // Define background colors for different types of sessions
  const typeColors = ['bg-green-200', 'bg-blue-200', 'bg-yellow-200'];

  return (
    <main className="max-w-[1600px] flex flex-col gap-4 bg-sky-500/20 p-4">
      {/* Session Menu */}
      <section id="session-menu" className="grid grid-cols-3 text-center">
        <span className="bg-green-200 border-white border-2 p-2">Talks</span>
        <span className="bg-blue-200 border-white border-2 p-2">Performances</span>
        <span className="bg-yellow-200 border-white border-2 p-2">Workshops</span>
      </section>

      {/* Class Menu */}
      <section id="class-menu" className="grid grid-cols-6 bg-blue-500 text-center mt-2">
        <div></div>
        <span className="col-span-1 bg-red-200 border-white border-2 p-2">Main Stage</span>
        <span className="col-span-1 bg-red-200 border-white border-2 p-2">Room 1</span>
        <span className="col-span-1 bg-red-200 border-white border-2 p-2">Room 2</span>
        <span className="col-span-1 bg-red-200 border-white border-2 p-2">Room 3</span>
        <div></div>
      </section>

      {/* Main Content */}
      <ul id="main-content" className="bg-green-500 mt-2">
        {PROGRAM.map(programmHour => (
          <li
            key={programmHour.hour}
            className="grid grid-cols-6 items-center border-b border-white p-2"
          >
            <div className="bg-white border-black border-2 p-2 text-center">
              {programmHour.hour}
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-2">
              {/* Mapping sessions into respective columns */}
              {programmHour.sessions.map((session, index) => (
                <div
                  key={index}
                  className={`col-start-${session.room + 1} ${
                    typeColors[session.type]
                  } border-black border-2 p-2 text-center`}
                >
                  <p className="font-bold">{session.title}</p>
                  <p className="text-sm">{session.speakers.join(', ')}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border-black border-2 p-2 text-center">
              {programmHour.hour}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Schedule;
