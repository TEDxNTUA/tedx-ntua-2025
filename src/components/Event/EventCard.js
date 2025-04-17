import React from 'react';
import SocialList from '@components/SocialMedia/SocialList';
// PropsInterface {
//   host: Speaker | Performance | SideHappening | ExperienceWorkshop | FundraisingWorkshop;
//   type: 'speaker' | 'performance' | 'side-happening' | 'experience-workshop' | 'fundraising-workshop';
// }

function EventCard({host, type}) {
  let linkUrl = '';
  let imageUrl = '';
  let displayName = 'Unnamed Event';
  let secondaryInfo = '';
  let altText = 'Event image';
  let hoverColor = '';
  let socialHoverColor = '';

  switch (type) {
    case 'speaker':
      linkUrl = `/event/speakers/${slug}`;
      imageUrl = `./event/speakers/${slug}.jpg`;
      displayName = host.fullNameEN || host.artisticName;
      secondaryInfo = host.jobEN;
      altText = `Picture of ${type}: ${displayName}`;
      hoverColor = 'group-hover:text-synelixis-yellow';
      socialHoverColor = 'yellow';
      break;
    case 'performance':
      linkUrl = `/event/performances/${slug}`;
      imageUrl = `./event/performances/${slug}.jpg`;
      displayName = host.artisticNameEN || host.fullNameEN;
      secondaryInfo = host.performanceTypeEN;
      altText = `Image for ${type}: ${displayName}`;
      hoverColor = 'group-hover:text-synelixis-orange';
      socialHoverColor = 'orange';
      break;
    case 'side-happening':
      linkUrl = `/event/side-happenings/${slug}`;
      imageUrl = `./event/side-happenings/${slug}.jpg`;
      displayName = host.name;
      secondaryInfo = host.description || '';
      altText = `Picture of ${type}: ${displayName}`;
      hoverColor = 'group-hover:text-synelixis-orange';
      break;
    case 'experience-workshop':
    case 'fundraising-workshop':
      const workshopBasePath = `${type}s`;
      linkUrl = `/event/${workshopBasePath}s/${slug}`;
      imageUrl = `./event/${workshopBasePath}s/${slug}.jpg`;
      displayName = host.companyName;
      secondaryInfo = host.titleEN || host.titleGR;
      altText = `Picture of ${type}: ${displayName}`;
      hoverColor = 'group-hover:text-synelixis-orange';
      break;

    default:
      console.warn(`EventCard received unknown event type: ${type}`);
      linkUrl = `/${slug}`;
      imageUrl = `/event/default/${slug}.jpg`;
      displayName = 'Unknown Event';
      secondaryInfo = 'No additional information available';
      altText = '';
      break;
  }

  const socialMediaLinks = host.infoLinks;

  return (
    <div className="flex flex-col gap-2">
      <section className="link-wrapper mb-2 text-white group max-w-[300px] h-full">
        <img
          className="object-cover grayscale-[0.65] group-hover:grayscale-0 transition"
          src={imageUrl}
          alt={altText}
          width={300}
          height={300}
        />
        <div className="text-container mt-2 xl:mt-4">
          <h2
            className={`text-lg xl:text-xl text-synelixis-blue ${hoverColor} font-semibold transition-colors duration-200 ease-in-out text-wrap`}
          >
            {displayName}
          </h2>
          {/* {secondaryInfo && ( */}
          <p className="text-sm text-synelixis-blue/50 group-hover:underline transition-colors duration-200 ease-in-out mt-1 text-wrap">
            {secondaryInfo}
          </p>
        </div>
      </section>
      <section className="flex flex-row gap-3">
        <SocialList
          socialMediaLinks={socialMediaLinks}
          color={'blue'}
          hoverColor={socialHoverColor}
        />
      </section>
    </div>
  );
}

export default EventCard;
