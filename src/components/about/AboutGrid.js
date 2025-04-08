"use client";
import MeetTheTeam from "./MeetTheTeam";

export default function AboutGrid({ aboutlist }) {
 
  const teamNames = [
    "The Curators",
    "Information & Technology Team",
    "Design Team",
    "Fundraising Team",
    "Experience & Workshops Team",
    "Media & Marketing Team",
    "Venue & Production Team",
    "Speakers Team",
  ];

  const filterPartnersByTeam = (team) => {
    return aboutlist.filter((about) => about.team === team);
  };

  return (
    <div className="max-w-[2080px] relative mx-auto flex flex-col gap-6 lg:gap-12 pb-12 ">
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap');
      `}</style>

      {teamNames.map((team) => (
        <div key={team}>
          {/* Display team name as a heading */}
          <h1
            className="text-center text-3xl lg:text-5xl text-synelixis-yellow mb-6"
            style={{ fontFamily: "'Winky Sans', sans-serif" }}  
          >
            {team}
          </h1>
            <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
              {filterPartnersByTeam(team).map(
                (
                  about,
                  index //kathe melos
                ) => (
                  <li
                    className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
                    key={index}
                  >
                    <MeetTheTeam
                      photo={about.photo}
                      doodles={about.doodles}
                      link={about.linkedin}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  );
}