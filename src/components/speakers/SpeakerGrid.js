import {SPEAKERS} from '@data/speakers';
import SpeakerCard from '@components/speakers/SpeakerCard';

export default function SpeakerGrid() {
  return (
    <div className="bg-blue-100 w-[90%] md:w-[80%] mx-auto">
      <ul className="grid justify-items-center items-center grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-12">
        {SPEAKERS.map(speaker => {
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
