import {getPerformanceBySlug, getAllPerformancesSlugs} from '@lib/eventData';
import SocialList from '@src/components/SocialMedia/SocialList';
import SynelixisButton from '@components/Event/SynelixisButton';

export async function generateStaticParams() {
  const slugs = await getAllPerformancesSlugs();

  return slugs.map(slug => ({
    'performance-slug': slug
  }));
}

export async function generateMetadata({params}) {
  const param = await params;
  const performanceSlug = await param['performance-slug'];
  const performance = await getPerformanceBySlug(performanceSlug);
  const name = performance.fullNameEN || performance.fullNameGR;
  return {
    title: `${name} | Performer`,
    description: `Learn more about ${name} - ${performance.job}. Performance type: ${performance.talkCategory}`
  };
}

export default async function IndividualPerformancePage({params}) {
  const param = await params;
  const performanceSlug = await param['performance-slug'];
  const performance = await getPerformanceBySlug(performanceSlug);

  const nameToDisplay =
    performance.fullNameGR ||
    performance.fullNameEN ||
    performance.artisticNameGR ||
    performance.artisticNameEN;
  const bioToDisplay = performance.bioGR || performance.bioEN;

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <SynelixisButton
        color={'synelixis-orange'}
        text={'← Back to performances'}
        linkUrl={'/event/performances'}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-12">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-[250px] md:h-full rounded object-fit overflow-hidden">
            <img
              src={`/event/performances/${performance.slug}.jpg`}
              alt={`Photo of ${nameToDisplay}`}
              height={300}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-synelixis-blue mb-1">
            <span className="text-3xl md:text-4xl font-bold pr-2">{nameToDisplay}</span>{' '}
            {performance.artisticNameEN && (
              <span className="text-lg md:text-xl italic">a.k.a. {performance.artisticNameEN}</span>
            )}
          </h1>
          <p className="text-lg text-synelixis-blue/70 mb-4">{performance.job}</p>

          <div className="flex flex-wrap gap-4 lg:gap-6 mb-4">
            <SocialList
              socialMediaLinks={performance.infoLinks}
              color={'blue'}
              hoverColor={'orange'}
            />
          </div>

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
          {performance.performanceTypeEN || performanceTypeGR}
          {performance.session ? ` | Session ${performance.session}` : ''}
          {performance.time ? ` | ${performance.time}` : ''}
        </p>
        {performance.descriptionEN && (
          <p className="text-synelixis-blue/70 leading-relaxed">{performance.descriptionEN}</p>
        )}
      </div>
    </div>
  );
}
