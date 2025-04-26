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
          <img
            src="/partners/platinum/be-wise.webp"
            alt="Be Wise"
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
            alt="Elpedison"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/grand/thenamaris.webp"
            alt="Thenamaris"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/grand/space.webp"
            alt="Space"
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
            src="/partners/partners/q-project.webp"
            alt="Q Project logo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/partners/gdm-assets.webp"
            alt="GDM Assets logo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/partners/coca-cola.webp"
            alt="Coca Cola 3E"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
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
            src="/partners/partners/red-bull.webp"
            alt="Red Bull"
            width={500}
            height={500}
            className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <img
            src="/partners/partners/kleidarithmos.webp"
            alt="Kleidarithmos"
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
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
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
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
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
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/rodopaki.webp"
            alt="Rodopaki"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />

          <img
            src="/partners/supporters/tefaco.webp"
            alt="Tefaco"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/supporters/to-kati-allo.webp"
            alt="To Kati Allo"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/supporters/wowchi.webp"
            alt="Wowchi"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
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
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
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
            alt="Layers Burgers"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
        </>
      )
    },
    {
      title: 'Venue Sponsors',
      content: (
        <>
          <img
            src="/partners/venue-sponsors/impact-hub-athens.webp"
            alt="Impact Hub Athens"
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          />
        </>
      )
    },
    {
      title: 'Media Partners',
      content: (
        <>
          <img
            src="/partners/media-partners/e-daily.webp"
            alt="e-daily"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/e-radio.webp"
            alt="e-radio"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/epixeiro.webp"
            alt="Epixeiro"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/tech-press.webp"
            alt="Tech Press"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/interesting-people.webp"
            alt="Interesting People"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          {/* <img
            src="/partners/media-partners/startup.webp"
            alt="Startup"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          /> */}
          <img
            src="/partners/media-partners/antivirus.webp"
            alt="Antivirus"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/neolaia-gr.webp"
            alt="neolaia.gr"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          {/* <img
            src="/partners/media-partners/skywalker.webp"
            alt="skywalker"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/uni-ties.webp"
            alt="uni-ties"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/isws.webp"
            alt="@isws"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/yperoxi-athina.webp"
            alt="@yperoxi_athina"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          /> */}
          <img
            src="/partners/media-partners/i-tech-4-u.webp"
            alt="iTech4u"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/media-partners/linq.webp"
            alt="Linq"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          {/* <img
            src="/partners/media-partners/uni-students.webp"
            alt="UniStudents"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          /> */}
          {/* <img
            src="/partners/media-partners/.webp"
            alt=""
            width={500}
            height={500}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full"
          /> */}
        </>
      )
    },
    {
      title: 'Community Partners',
      content: (
        <>
          <img
            src="/partners/community-partners/prometheus-eco-racing.webp"
            alt="Prometheus Eco Racing NTUA Team"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/ath-chemists.webp"
            alt="AthChemists"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/envi-now.webp"
            alt="EnviNow"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/fs-det.webp"
            alt="Φοιτητικό Συνέδριο ΔΕΤ"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/chemecon.webp"
            alt="Chemecon"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/ant.webp"
            alt="Athens Negotiations Tournament"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/i-gem-athens.webp"
            alt="iGEM Athens"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/mimec.webp"
            alt="Mining and Metallurgical Engineering"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
          />
          <img
            src="/partners/community-partners/euroavia-athens.webp"
            alt="Euroavia Athens"
            width={500}
            height={500}
            className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full"
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
