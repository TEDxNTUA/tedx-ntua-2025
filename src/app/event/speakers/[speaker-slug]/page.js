import Link from 'next/link';
import {getSpeakerBySlug, getAllSpeakerSlugs} from '@lib/eventData';
import SynelixisButton from '@components/Event/SynelixisButton';

export async function generateStaticParams() {
  const slugs = await getAllSpeakerSlugs();

  return slugs.map(slug => ({
    'speaker-slug': slug
  }));
}

export async function generateMetadata({params}) {
  const param = await params;
  const speakerSlug = await param['speaker-slug'];
  const speaker = await getSpeakerBySlug(speakerSlug);
  const name = speaker.fullNameEN || speaker.fullNameGR;
  return {
    title: `${name} | Speaker`,
    description: `Learn more about ${name} - ${speaker.job}. Talk category: ${speaker.talkCategory}`
  };
}

export default async function IndividualSpeakerPage({params}) {
  const param = await params;
  const speakerSlug = await param['speaker-slug'];
  const speaker = await getSpeakerBySlug(speakerSlug);

  const nameToDisplay = speaker.fullNameGR || speaker.fullNameEN;
  const bioToDisplay = speaker.bioGR || speaker.bioEN;

  const renderInfoLinks = () => {
    if (!speaker.infoLinks || Object.keys(speaker.infoLinks).length === 0) {
      return null;
    }

    return (
      <div className="flex flex-wrap gap-3 mt-4">
        {Object.entries(speaker.infoLinks).map(([key, value]) => {
          if (!value) return null;

          const urls = Array.isArray(value) ? value : [value];

          return urls.map((url, index) => (
            <Link
              key={`${key}-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${nameToDisplay}'s ${key} profile (${index + 1})`}
              className="text-synelixis-blue/70 hover:text-synelixis-yellow transition-colors text-2xl"
            >
              Icon
            </Link>
          ));
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <SynelixisButton
        color={'synelixis-yellow'}
        text={'← Back to Speakers'}
        linkUrl={'/event/speakers'}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-12">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-[250px] md:h-full rounded object-fit overflow-hidden">
            <img
              src={`/event/speakers/${speaker.slug}.jpg`}
              alt={`Photo of ${nameToDisplay}`}
              height={300}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-synelixis-blue mb-1">
            <span className="text-3xl md:text-4xl font-bold pr-2">{nameToDisplay}</span>{' '}
            {speaker.artisticName && (
              <span className="text-lg md:text-xl italic">a.k.a. {speaker.artisticName}</span>
            )}
          </h1>
          <p className="text-lg text-synelixis-blue/70 mb-4">{speaker.job}</p>

          {renderInfoLinks()}

          {bioToDisplay ? (
            <div className="mt-6 max-w-none text-synelixis-blue/70 leading-relaxed">
              <p>{bioToDisplay}</p>
            </div>
          ) : (
            <p className="mt-6 text-synelixis-blue/50 italic">No biography available.</p>
          )}
        </div>
      </div>

      <div className="border-t pt-8">
        <p className="text-sm text-synelixis-blue/50 mb-3 uppercase tracking-wider">
          {speaker.talkCategory || 'General Talk'}
          {speaker.session ? ` | Session ${speaker.session}` : ''}
          {speaker.time ? ` | ${speaker.time}` : ''}
        </p>
        {speaker.talkDescription && (
          <p className="text-synelixis-blue/70 leading-relaxed">{speaker.talkDescription}</p>
        )}
      </div>
    </div>
  );
}
