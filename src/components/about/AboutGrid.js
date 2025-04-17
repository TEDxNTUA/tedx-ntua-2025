'use client';
import MeetTheTeam from '@components/about/MeetTheTeam';

export default function AboutGrid({teamSlug, members}) {
  return (
    <section className="mb-20">
      {/* Team Title */}
      <img
        src={`/team/bitmaps/${teamSlug}.png`}
        alt={`Title for team: ${teamSlug}`}
        className="h-12 max-h-16 w-auto mx-auto mb-10"
      />

      {/* Grid of Members */}
      <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
        {members.map(teamMember => (
          <li
            key={teamMember.slug}
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
          >
            <MeetTheTeam teamSlug={teamSlug} teamMember={teamMember} />
          </li>
        ))}
      </ul>
    </section>
  );
}
