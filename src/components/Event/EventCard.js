'use client';
import React, {useState} from 'react';
import SocialList from '@components/SocialMedia/SocialList';
import Modal from '@components/Modal';
// PropsInterface {
//   host: Speaker | Performance | SideHappening | ExperienceWorkshop | FundraisingWorkshop;
//   type: 'speaker' | 'performance' | 'side-happening' | 'experience-workshop' | 'fundraising-workshop';
// }

function EventCard({host, type}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const session = host.session || '';
  const time = host.time;
  const bio = host.bioGR || host.bioEN || 'No biography available.';
  const description =
    host.descriptionGR || host.descriptionEN || 'Η περιγραφή δεν είναι διαθέσιμη.';
  const slug = host.slug;
  const socialMediaLinks = host.infoLinks;

  let color = '';
  let name = '';
  let artisticName = '';
  let secondaryInfo = '';
  let imageUrl = '';
  let category = '';
  let workshopBasePath = '';

  switch (type) {
    case 'speaker':
      color = 'yellow';
      name = host.fullNameEN || host.artisticName;
      artisticName = host.artisticName;
      secondaryInfo = host.jobEN || host.jobGR;
      imageUrl = `/event/speakers/${slug}.jpg`;
      category = host.talkCategory;
      break;
    case 'performance':
      color = 'orange';
      name = host.artisticName || host.fullNameEN;
      secondaryInfo = host.performanceTypeEN || host.performanceTypeGR || '';
      imageUrl = `/event/performances/${slug}.jpg`;
      category = host.performanceTypeEN || host.performanceTypeGR || '';
      break;
    case 'side-happening':
      color = 'blue';
      name = host.name;
      imageUrl = `/event/side-happenings/${slug}.jpg`;
      break;
    case 'experience-workshop':
      color = 'blue';
      name = host.title;
      secondaryInfo = host.artisticName || host.fullNameEN || host.fullNameGR;
      workshopBasePath = `${type}s`;
      imageUrl = `/event/${workshopBasePath}/${slug}.jpg`;
      break;
    case 'professional-workshop':
      color = 'blue';
      name = host.title;
      secondaryInfo = host.companyName;
      workshopBasePath = `${type}s`;
      imageUrl = `/event/${workshopBasePath}/${slug}.jpg`;
      break;
    default:
      console.warn(`EventCard received unknown event type: ${type}`);
      break;
  }

  const hoverColor = `group-hover:text-synelixis-${color}`;

  const displayInfo = {
    color,
    hoverColor,
    name,
    artisticName,
    secondaryInfo,
    imageUrl,
    socialMediaLinks,
    bio,
    happening: {
      category,
      session,
      time,
      description
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <section
        onClick={() => setIsModalOpen(true)}
        className="link-wrapper cursor-pointer mb-2 text-white group max-w-[300px] h-full"
      >
        <img
          className="object-cover grayscale-[0.65] group-hover:grayscale-0 transition"
          src={imageUrl}
          alt={`Picture of ${name}`}
          width={300}
          height={300}
        />
        <div className="text-container mt-2 xl:mt-4">
          <h2
            className={`text-lg xl:text-xl text-synelixis-blue ${hoverColor} font-semibold transition-colors duration-200 ease-in-out text-wrap`}
          >
            {name}
          </h2>
          {/* {secondaryInfo && ( */}
          <p className="text-sm text-synelixis-blue/50 group-hover:underline transition-colors duration-200 ease-in-out mt-1 text-wrap">
            {secondaryInfo}
          </p>
        </div>
      </section>
      <section className="flex flex-row gap-3">
        <SocialList socialMediaLinks={socialMediaLinks} color={'blue'} hoverColor={color} />
      </section>
      <button
        onClick={() => setIsModalOpen(true)}
        className="block lg:hidden bg-synelixis-blue text-white py-2 "
      >
        Show More
      </button>
      <Modal
        displayInfo={displayInfo}
        type={type}
        host={host}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default EventCard;
