import Link from 'next/link';

const colorClasses = {
  'synelixis-orange': {
    bg: 'bg-synelixis-orange/60',
    focusRing: 'focus-visible:ring-synelixis-orange'
  },
  'synelixis-yellow': {
    bg: 'bg-synelixis-yellow/60',
    focusRing: 'focus-visible:ring-synelixis-yellow'
  },
  'synelixis-blue': {
    bg: 'bg-synelixis-blue/60',
    focusRing: 'focus-visible:ring-synelixis-blue'
  }
};

const defaultColorKey = 'synelixis-yellow';

function SynelixisButton({text, color = defaultColorKey, linkUrl}) {
  const buttonColorClasses = colorClasses[color] || colorClasses[defaultColorKey];

  return (
    <Link
      href={linkUrl}
      className={`relative inline-block group mb-6 transition-transform duration-200 ease-out hover:-translate-y-[1] hover:-translate-x-[1] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonColorClasses.focusRing}`}
      aria-label="Back to speakers list"
    >
      <span
        className={`absolute inset-0 translate-x-1 translate-y-1 block w-full h-full ${buttonColorClasses.bg} rounded-sm transition-all duration-200 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-0`}
        aria-hidden="true"
      ></span>

      <span
        className={`absolute inset-0 translate-x-2 translate-y-2 block w-full h-full ${buttonColorClasses.bg} rounded-sm transition-all duration-200 ease-out group-hover:translate-x-6 group-hover:translate-y-6 z-0`}
        aria-hidden="true"
      ></span>

      <span
        className={`relative block px-5 py-5 ${buttonColorClasses.bg} text-white font-semibold text-sm rounded-sm transition-transform duration-200 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 z-10`}
      >
        {text}
      </span>
    </Link>
  );
}

export default SynelixisButton;
