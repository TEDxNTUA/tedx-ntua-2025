// 'use client';

// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Timeline from '@components/Timeline';
// import { GlareCard } from '@components/GlareCard';

// gsap.registerPlugin(ScrollTrigger);

function page() {
  return <div>Partners page</div>;
}

export default page;

// function PartnersPage() {
//   useEffect(() => {
//     gsap.utils.toArray('.sponsor img').forEach((img) => {
//       gsap.from(img, {
//         scrollTrigger: {
//           trigger: img,
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: 'power2.out',
//       });
//     });
//   }, []);

//   const timelineData = [
//     {
//       title: 'Platinum Sponsors',
//       content: (
//         <>
//           <GlareCard href="https://www.acg.edu/">
//             <Image
//               src="/Partners/Platinum/ACGLogo.jpg"
//               alt="ACG Logo"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.archirodon.net/">
//             <Image
//               src="/Partners/Platinum/65years_Archirodon_Fin.jpg"
//               alt="Archirodon 65 Years"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.dei.gr/en/">
//             <Image
//               src="/Partners/Platinum/DEI.jpg"
//               alt="DEI"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow"
//             />
//           </GlareCard>
//           <GlareCard href="https://www.oliverwyman.com/in.html">
//           <Image
//             src="/Partners/Platinum/oliver-wyman-logo.png"
//             alt="Oliver Wyman"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow"
//           />
//         </GlareCard>
//         </>
//       ),
//     },
//     {
//       title: 'Grand Sponsors',
//       content: (
//         <>
//         <GlareCard href="https://www.space.gr/en">
//           <Image
//             src="/Partners/Grand/space.png"
//             alt="Grand Sponsor 1"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//           />
//         </GlareCard>

//         <GlareCard href="https://www.elpedison.gr/el/">
//           <Image
//             src="/Partners/Grand/elpedison.png"
//             alt="Elpedison"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//           />
//         </GlareCard>

//         <GlareCard href="https://www.thenamaris.com/">
//           <Image
//             src="/Partners/Grand/THENAMARIS.png"
//             alt="thenamaris"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//           />
//         </GlareCard>
//       </>

//       ),
//     },
//     {
//       title: 'Partners',
//       content: (
//         <>
//           <GlareCard href="https://maps.app.goo.gl/t2PodNBQHvZu9BgCA">
//           <Image
//             src="/Partners/Partners/layers.png"
//             alt="Layers"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//           />
//         </GlareCard>
//         <GlareCard href="https://gr.coca-colahellenic.com/">
//           <Image
//             src="/Partners/Partners/logo3E.jpg"
//             alt="3E"
//             width={500}
//             height={500}
//             className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//           />
//         </GlareCard>
//         <GlareCard href="https://www.frezyderm.gr/?UserAction=True">
//             <Image
//               src="/Partners/Partners/frezyderm.png"
//               alt="Partner 1"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full shadow"
//             />
//           </GlareCard>
//         </>
//       ),
//     },
//     {
//       title: 'Supporters',
//       content: (
//         <>
//           <GlareCard href="https://myredraven.com/?gad_source=1&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPaEnqPEVpxX__Mq2Xx7Z3Pp3f7IBQiiVUElk0wniDdllnsqo13RyvhoCP18QAvD_BwE">
//             <Image
//               src="/Partners/Supporters/RedRaven.png"
//               alt="RedRaven"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.olympos.gr/">
//             <Image
//               src="/Partners/Supporters/olympos2.png"
//               alt="OLYMPOS"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.melissa.gr/en/">
//             <Image
//               src="/Partners/Supporters/Melissa.png"
//               alt="Melissa"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://megaspileo.gr/?gad_source=1&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPfxmQa_DvfGssV_jD3xHBCoStOyqIJ5F83qwlLmZ5c3w0GQ4u0WvHxoC2wkQAvD_BwE">
//             <Image
//               src="/Partners/Supporters/megaspileo.png"
//               alt="megaspileo"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.nanoudonutshouse.com/">
//             <Image
//               src="/Partners/Supporters/nanou.png"
//               alt="nanou"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.ikea.gr/">
//             <Image
//               src="/Partners/Supporters/IKEA2.png"
//               alt="IKEA"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.deepsea.ai/">
//             <Image
//               src="/Partners/Supporters/deepsealogo.png"
//               alt="deepsealogo"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.ahmadtea.com/">
//             <Image
//               src="/Partners/Supporters/AhmadTea.jpg"
//               alt="AhmadTea"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://www.flexopack.com/en/">
//             <Image
//               src="/Partners/Supporters/flexopack.png"
//               alt="Flexopack"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//           <GlareCard href="https://kanellakis-sa.gr/">
//             <Image
//               src="/Partners/Supporters/kanellakis.png"
//               alt="kanellakis"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-14 md:h-24 lg:h-28 w-full shadow"
//             />
//           </GlareCard>

//         </>
//       ),
//     },
//     {
//       title: 'Exclusive Air Transport Sponsor',
//       content: (
//         <>
//           <GlareCard href="https://en.aegeanair.com/">
//             <Image
//               src="/Partners/Supporters/aegean.png"
//               alt="Aegean"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow"
//             />
//           </GlareCard>
//         </>
//       ),
//     },
//   ];

//   return (
//     <main
//       className="min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/background.jpg')" }}
//     >
//       <section>
//         <Timeline data={timelineData} />
//       </section>
//     </main>
//   );
// }

// export default PartnersPage;
