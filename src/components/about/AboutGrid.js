'use client';
import MeetTheTeam from './MeetTheTeam';

export default function AboutGrid({aboutlist}) {
  const teamNames = [
    {
      imageUrl: '/curators',
      title: 'The Curators'
    },
    {
      imageUrl: 'fundraising',
      title: 'Fundraising Team'
    },
    {
      imageUrl: 'design',
      title: 'Design Team'
    },
    {
      imageUrl: 'speakers',
      title: 'Speakers Team'
    },
    {
      imageUrl: 'venue',
      title: 'Venue & Production Team'
    },
    {
      imageUrl: 'experience',
      title: 'Experience & Workshops Team'
    },
    {
      imageUrl: 'media',
      title: 'Media & Marketing Team'
    },
    {
      imageUrl: 'it',
      title: 'Information & Technology Team'
    }
  ];

  const filterPartnersByTeam = team => {
    return aboutlist.filter(about => about.team === team);
  };

  return (
    <div className="max-w-[2080px] relative mx-auto flex flex-col gap-16 pb-12 ">
      {teamNames.map(team => (
        <div key={team.imageUrl} className="flex flex-col items-center gap-8 lg:gap-12">
          <img
            srr#rc={`./team/bitmaps/${team.imageUrl}.png`}
            alt={`Title for team: ${team.imageUrl}`}
            className="h-12 max-h-16 w-auto mx-auto"
          />
          <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
            {filterPartnersByTeam(team.title).map((about, index) => (
              <li
                className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
                key={index}
              >
                <MeetTheTeam photo={about.photo} doodles={about.doodles} link={about.linkedIn} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
