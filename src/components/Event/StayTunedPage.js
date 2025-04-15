import Link from 'next/link';

const StayTunedPage = ({title, message = 'Details coming soon. Stay tuned for announcements!'}) => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-synelixis-blue text-3xl font-bold text-center">{title}</h1>

      <p className="text-lg text-center text-gray-600 mt-4 max-w-md">{message}</p>

      {/* <Link href="/event" className="mt-8 text-synelixis-orange hover:underline">
        Back to Event Overview
      </Link> */}
    </div>
  );
};

export default StayTunedPage;
