'use client';
import MeetTheTeam from '@components/about/MeetTheTeam';

export default function AboutGrid({teamSlug, members}) {
  return (
    <>
      <div>
        <img
          src={`./team/bitmaps/${teamSlug}.png`}
          alt={`Title for team: ${teamSlug}`}
          className="h-12 max-h-16 w-auto mx-auto"
        />
        <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
          {members.map(teamMember => (
            <li
              className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
              key={teamMember.slug}
            >
              <MeetTheTeam teamSlug={teamSlug} teamMember={teamMember} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
