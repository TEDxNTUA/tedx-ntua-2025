'use client';

import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Timeline from '@components/Timeline';

gsap.registerPlugin(ScrollTrigger);

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
    {
      title: 'Platinum Sponsors',
      content: (
        <>
          <img
            src="/partners/platinum/dei.webp"
            alt="DEI"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
          <img
            src="/partners/platinum/the-american-college-of-greece.webp"
            alt="ACG Logo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
          <img
            src="/partners/platinum/archidoron.webp"
            alt="Archirodon 65 Years"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
          <img
            src="/partners/platinum/oliver-wyman.webp"
            alt="Oliver Wyman"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
        </>
      )
    },
    {
      title: 'Grand Sponsors',
      content: (
        <>
          <img
            src="/partners/grand/uni-perfect.webp"
            alt="uniperfect"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />

          <img
            src="/partners/grand/elpedison.webp"
            alt="elpedison"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />

          <img
            src="/partners/grand/thenamaris.webp"
            alt="thenamaris"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />

          <img
            src="/partners/grand/space.webp"
            alt="space"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
        </>
      )
    },
    {
      title: 'Partners',
      content: (
        <>
          <img
            src="/partners/partners/coca-cola.webp"
            alt="Coca Cola 3E"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full lgrayscale-0"
          />
          <img
            src="/partners/partners/frenzyderm.webp"
            alt="Frenzyderm"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/partners/papoutsanis.webp"
            alt="Partner 1"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/partners/q-project.webp"
            alt="Partner 1"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
        </>
      )
    },
    {
      title: 'Supporters',
      content: (
        <>
          <img
            src="/partners/supporters/deepsea.webp"
            alt="deepsealogo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/supporters/flexopack.webp"
            alt="Flexopack"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/kanellakis.webp"
            alt="kanellakis"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full grayscale-[0.9] hover:grayscale-0"
          />
          <img
            src="/partners/supporters/olympos.webp"
            alt="OLYMPOS"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/supporters/symetal.webp"
            alt="Symetal"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full grayscale-[0.9] hover:grayscale-0"
          />

          <img
            src="/partners/supporters/melissa.webp"
            alt="Melissa"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/mega-spileo.webp"
            alt="mega-spileo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/red-bull.webp"
            alt="Red Bull"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />

          <img
            src="/partners/supporters/nanou.webp"
            alt="nanou"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/ikea.webp"
            alt="IKEA"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/ahmad-tea.webp"
            alt="ahmad-tea"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/atflya.webp"
            alt="atflya"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/cavino.webp"
            alt="cavino"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/colgate.webp"
            alt="Colgate"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/red-raven.webp"
            alt="Red Raven"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full grayscale-[0.9] hover:grayscale-0"
          />

          <img
            src="/partners/supporters/rodopaki.webp"
            alt="Rodopaki"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full grayscale-[0.9] hover:grayscale-0"
          />

          <img
            src="/partners/supporters/tefaco.webp"
            alt="Tefaco"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full grayscale-[0.9] hover:grayscale-0"
          />
        </>
      )
    },
    {
      title: 'Exclusive Air Transport Sponsor',
      content: (
        <>
          <img
            src="/partners/exclusive-air/aegean.webp"
            alt="Aegean"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full grayscale hover:grayscale-0"
          />
        </>
      )
    },
    {
      title: 'Exclusive Burger Provider',
      content: (
        <>
          <img
            src="/partners/exclusive-burger/layers.webp"
            alt="Aegean"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
        </>
      )
    }
  ];

  return (
    <section>
      <Timeline data={timelineData} />
    </section>
  );
}

export default PartnersPageComponent;
