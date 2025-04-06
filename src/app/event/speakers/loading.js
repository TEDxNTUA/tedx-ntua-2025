import SpeakerCardSkeleton from '@components/speakers/SpeakerCardSkeleton';

export default function LoadingSpeakersGrid() {
  const skeletonCount = 8; //TODO: Adjust based on speaker number

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      <div className="h-8 w-3/5 md:w-2/5 lg:w-1/3 mx-auto my-8 bg-gray-300 rounded animate-pulse "></div>
      <h1 className="text-3xl font-bold text-center my-8">Meet Our Speakers</h1>
      <ul className="grid justify-items-center items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-12">
        {' '}
        {Array.from({length: skeletonCount}).map((_, index) => (
          <li key={index}>
            <SpeakerCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
}
