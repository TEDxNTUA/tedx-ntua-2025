export default function SpeakerCardSkeleton() {
  return (
    <div className="w-[300px] mb-2">
      {' '}
      <div className="w-[300px] h-[300px] bg-gray-300 rounded animate-pulse"></div>
      <div className="mt-2 xl:mt-4 space-y-2">
        <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>

        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
}
