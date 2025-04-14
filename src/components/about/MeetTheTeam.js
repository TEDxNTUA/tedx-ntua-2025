"use client";
import { useState } from "react";

export default function MeetTheTeam({ fullname, photo, doodles, link }) {
  const redirectToLink = () => {
    window.open(link, "_blank");
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col lg:h-[100px] lg:border-black mx-auto cursor-pointer"
      onClick={redirectToLink} // Call redirectToLink function on click
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className="object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]"> */}
        <div className="mt-13">
          <img
            className={`${isHovered ? "hidden" : "block"
              // } object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]`}
              } object-top `}
            src={photo}
            alt={fullname}
          />
          <img
            className={`${isHovered ? "block" : "hidden"} border-4 border-synelixis-yellow rounded-md `}
            src={doodles}
            alt={fullname}
          />        
        </div>
        <p className="mb-8 text-white text-sm md:text-base lg:text-lg text-center">{fullname}</p>
      </div>
    </div>
  );
}