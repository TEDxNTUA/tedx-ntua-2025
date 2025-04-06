import Link from 'next/link';

function SpeakeCard({speaker}) {
  return (
    <section className="link-wrapper mb-2 text-white group max-w-[300px] h-full">
      <Link href={`speakers/${speaker.slug}`}>
        <img
          className="object-cover grayscale-[0.65] group-hover:grayscale-0 transition"
          src={`/event/speakers/${speaker.slug}.jpg`}
          alt={`Picture of ${speaker.slug}`}
          width={300}
          height={300}
        />

        <div className="text-container mt-2 xl:mt-4">
          {' '}
          <h2 className="text-lg xl:text-xl text-synelixis-blue group-hover:text-synelixis-yellow font-semibold transition-colors duration-200 ease-in-out text-wrap">
            {speaker.fullNameEN ? speaker.fullNameEN : speaker.artisticName}
          </h2>
          {speaker.job && (
            <p className="text-sm text-synelixis-blue group-hover:underline transition-colors duration-200 ease-in-out mt-1 text-wrap">
              {' '}
              {speaker.job}
            </p>
          )}
        </div>
      </Link>
    </section>
  );
}

export default SpeakeCard;
