'use client';

import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Timeline from '@components/Timeline';
import {
  GRAND_SPONSORS,
  PLATINUM_SPONSORS,
  PARTNERS,
  EXCLUSIVE_AIR,
  EXCLUSIVE_BURGER,
  VENUE_SPONSOR,
  SUPPORTERS,
  MEDIA_PARTNERS,
  COMMUNITY_PARTNERS
} from '@data';

gsap.registerPlugin(ScrollTrigger);

const generateTimelineData = (title, sponsors, folder) => {
  return {
    title,
    content: (
      <>
        {sponsors.map(sponsor => (
          <img
            key={sponsor.slug}
            src={`/partners/${folder}/${sponsor.slug}.webp`}
            alt={sponsor.name}
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
        ))}
      </>
    )
  };
};

function PartnersPageComponent() {
  useEffect(() => {
    gsap.utils.toArray('.sponsor img').forEach(img => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });
    });
  }, []);

  const timelineData = [
    generateTimelineData('Platinum Sponsors', PLATINUM_SPONSORS, 'platinum'),
    generateTimelineData('Grand Sponsors', GRAND_SPONSORS, 'grand'),
    generateTimelineData('Partners', PARTNERS, 'partners'),
    generateTimelineData('Exclusive Air Transport Sponsor', EXCLUSIVE_AIR, 'exclusive-air'),
    generateTimelineData('Exclusive Burger Provider', EXCLUSIVE_BURGER, 'exclusive-burger'),
    generateTimelineData('Venue Sponsors', VENUE_SPONSOR, 'venue-sponsors'),
    generateTimelineData('Supporters', SUPPORTERS, 'supporters'),
    generateTimelineData('Media Partners', MEDIA_PARTNERS, 'media-partners'),
    generateTimelineData('Community Partners', COMMUNITY_PARTNERS, 'community-partners')
  ];

  return (
    <section>
      <Timeline data={timelineData} />
    </section>
  );
}

export default PartnersPageComponent;
