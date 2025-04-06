export default function LoadingIndividualSpeakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-pulse">
      <div className="h-[68px] w-48 bg-gray-300 rounded-sm mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-12">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="w-[250px] h-[300px] bg-gray-300 rounded"></div>
        </div>

        <div className="md:col-span-2 space-y-4">
          {' '}
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="flex flex-wrap gap-3 pt-2">
            {' '}
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
          <div className="pt-4 space-y-2">
            {' '}
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>

        <div className="space-y-2 pt-1">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
