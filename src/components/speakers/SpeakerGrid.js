import SpeakerCard from '@components/speakers/SpeakerCard';

export default function SpeakerGrid({speakers}) {
  if (!speakers || speakers.length === 0) {
    return <p className="text-center text-gray-500">No speakers found.</p>;
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      {' '}
      <ul className="grid justify-items-center items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-12">
        {' '}
        {speakers.map(speaker => {
          return (
            <li key={speaker.slug}>
              <SpeakerCard speaker={speaker} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
