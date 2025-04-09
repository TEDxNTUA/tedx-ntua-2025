'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Timeline from '@components/Timeline';

gsap.registerPlugin(ScrollTrigger);

function PartnersPage() {
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

  const imageURL = 'https://assets.aceternity.com/cards.png';

  const timelineData = [
    {
      title: 'Platinum Sponsors',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Image
                key={idx}
                src={imageURL}
                alt={`platinum sponsor ${idx + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
              />
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Grand Sponsors',
      content: (
        <div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Image
                key={idx}
                src={imageURL}
                alt={`grand sponsor ${idx + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-16 md:h-32 lg:h-40 w-full shadow"
              />
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Partners',
      content: (
        <div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {Array.from({ length: 16 }).map((_, idx) => (
              <Image
                key={idx}
                src={imageURL}
                alt={`partner ${idx + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-14 md:h-24 lg:h-28 w-full shadow"
              />
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="bg-[#f5f5f5]">
      <header className="p-5 text-center bg-[#222] text-white">
        <h1>TEDxNTUA - Partners</h1>
      </header>

      <section className="bg-[#f5f5f5]">
        <Timeline data={timelineData} />
      </section>
    </main>
  );
}

export default PartnersPage;