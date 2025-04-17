'use client';
import {useState} from 'react';
import SocialMediaItem from '@components/SocialMedia/SocialMediaItem';

export default function MeetTheTeam({teamSlug, teamMember}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="lg:border-black mx-auto group">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-4"
      >
        <div>
          <img
            className={`object-top object-cover ${isHovered ? 'hidden' : 'block'}`}
            src={`/team/${teamSlug}/${teamMember.slug}-1.webp`}
            alt={teamMember.fullname}
          />
          <img
            className={`${isHovered ? 'block' : 'hidden'} rounded-md`}
            src={`/team/${teamSlug}/${teamMember.slug}-2.webp`}
            alt={teamMember.fullname}
          />
        </div>
        <h2
          className={`text-lg xl:text-xl text-white group-hover:text-synelixis-yellow font-semibold transition-colors duration-200 ease-in-out text-wrap`}
        >
          {teamMember.fullnameEN}
        </h2>

        <SocialMediaItem
          iconName={'linkedIn'}
          link={teamMember.linkedIn}
          color={'white'}
          hoverColor={'yellow'}
        />
      </div>
    </section>
  );
}
