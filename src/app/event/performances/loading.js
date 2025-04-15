import EventCardSkeleton from '@components/Event/EventCardSkeleton';

export default function LoadingEventGrid() {
  const skeletonCount = 4;

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      <h1 className="text-3xl font-bold text-center my-8">Live Performances</h1>
      <ul className="grid justify-items-center items-start grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 gap-6 lg:gap-12">
        {' '}
        {Array.from({length: skeletonCount}).map((_, index) => (
          <li key={index}>
            <EventCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
}
