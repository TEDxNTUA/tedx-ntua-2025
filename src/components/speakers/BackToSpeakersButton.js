import Link from 'next/link';

function BackToSpeakersButton() {
  return (
    <Link
      href="/event/speakers"
      className="relative inline-block group mb-6 transition-transform duration-200 ease-out hover:-translate-y-[1] hover:-translate-x-[1]  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-synelixis-yellow "
      aria-label="Back to speakers list"
    >
      {/* Background Layer (Slightly Offset and More Transparent) */}
      <span
        className="absolute inset-0 translate-x-1 translate-y-1 block w-full h-full bg-synelixis-yellow/40 rounded-sm transition-all duration-200 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-0"
        aria-hidden="true"
      ></span>
      <span
        className="absolute inset-0 translate-x-2 translate-y-2 block w-full h-full bg-synelixis-yellow/40 rounded-sm transition-all duration-200 ease-out group-hover:translate-x-6 group-hover:translate-y-6 z-0"
        aria-hidden="true"
      ></span>

      <span className="relative block px-5 py-5 bg-synelixis-yellow/80 text-white font-semibold text-sm rounded-sm transition-transform duration-200 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 z-10">
        &laquo; Speakers Page
      </span>
    </Link>
  );
}

export default BackToSpeakersButton;
