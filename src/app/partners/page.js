'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Timeline from '@components/Timeline';
import { GlareCard } from '@components/GlareCard';

import { partnersData } from '../../../data/partners';

gsap.registerPlugin(ScrollTrigger);

function PartnersPage() {
  useEffect(() => {
    gsap.utils.toArray('.sponsor img').forEach((img) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, []);

  const timelineData = partnersData.map((section) => {
    return {
      title: section.title,
      content: (
        <>
          {section.content.map((item, index) => (
            <GlareCard key={index} href={item.href}>
              <Image
                src={item.imgSrc}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className}
              />
            </GlareCard>
          ))}
        </>
      ),
    };
  });

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <section>
        <Timeline data={timelineData} />
      </section>
    </main>
  );
}

export default PartnersPage;
