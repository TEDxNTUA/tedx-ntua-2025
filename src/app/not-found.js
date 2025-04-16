'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold bg-tedx-red mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Oops! Page not found.</h2>
      <p className="text-lg mb-6 max-w-xl">
        The page you're looking for doesn't exist or has been moved. But the ideas worth spreading
        are still just a click away.
      </p>
      <Link
        href="/"
        className="bg-tedx-red/80 hover:bg-tedx-red text-white font-medium py-3 px-6 rounded-full transition duration-300"
      >
        Back to Home
      </Link>
      <div className="mt-10 opacity-60 text-sm">
        TEDx<span className="text-tedx-red">NTUA</span>
      </div>
    </div>
  );
}
