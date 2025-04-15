"use client";
import MeetTheTeam from "./MeetTheTeam";

export default function AboutGrid({ aboutlist }) {

  const teamNames = [
    "/team/curators.png",
    "/team/it.png",
    "/team/design.png",
    "/team/fr.png",
    "/team/experience.png",
    "/team/media.png",
    "/team/venue.png",
    "/team/speakers.png",
  ];

  const filterPartnersByTeam = (teamPhoto) => {
    return aboutlist.filter((about) => about.teamPhoto === teamPhoto);
  };

  return (
    <div className="max-w-[2080px] relative mx-auto flex flex-col gap-6 lg:gap-12 pb-12 ">
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap');
      `}</style>

      {teamNames.map((teamPhoto) => (
        <div key={teamPhoto}>
          {/* Display team name as a heading */}
          {/* <h1
            className="text-center text-3xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: "'Winky Sans', sans-serif" }}  
          >
            {teamPhoto}
          </h1> */}
          <img className="flex flex-row items-center flex-wrap w-[100%] md:w-[50%] h-[100px] md:h-[150px] lg:h-[200px] 2xl:h-[250px] object-contain mx-auto mt-10 " src={teamPhoto} />
          <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
            {filterPartnersByTeam(teamPhoto).map(
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
                    fullname={about.fullname}
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




