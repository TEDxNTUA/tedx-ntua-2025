'use client';
import {useState} from 'react';

export default function MeetTheTeam({teamSlug, teamMember}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={teamMember.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col lg:h-[100px] lg:border-black mx-auto cursor-pointer"
    >
      {/* <div className=""> */}
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* <div className="object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]"> */}
        <div>
          <img
            className={`${
              isHovered ? 'hidden' : 'block'
              // } object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]`}
            } object-top object-cover`}
            src={`./team/${teamSlug}/${teamMember.slug}-1.webp`}
            alt={teamMember.fullname}
          />
          <img
            className={`${isHovered ? 'block' : 'hidden'} border-4 border-our-yellow rounded-md`}
            src={`./team/${teamSlug}/${teamMember.slug}-2.webp`}
            alt={teamMember.fullname}
          />
        </div>
      </div>
    </a>
  );
}
