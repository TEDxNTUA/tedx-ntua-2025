'use client';

import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Timeline from '@src/components/Partners/Timeline';
import {
  GRAND_SPONSORS,
  PLATINUM_SPONSORS,
  PARTNERS,
  EXCLUSIVE_AIR,
  EXCLUSIVE_BURGER,
  VENUE_SPONSOR,
  SUPPORTERS,
  MEDIA_PARTNERS,
  COMMUNITY_PARTNERS,
  MOBILE_APP_PROVIDER
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
            className="rounded-lg object-contain h-16 sm:h-32 md:h-44 w-auto"
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
    generateTimelineData('Exclusive Lunch Provider', EXCLUSIVE_BURGER, 'exclusive-burger'),
    generateTimelineData('Mobile App Provider', MOBILE_APP_PROVIDER, 'mobile-app-providers'),
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
