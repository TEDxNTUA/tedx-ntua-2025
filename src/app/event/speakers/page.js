import EventGrid from '@components/Event/EventGrid';
import {SPEAKERS} from '@data';

export const metadata = {
  title: 'Speakers | Synelixis',
  description: "The spekaers of TEDxNTUA's 2025 event with theme Synelixis."
};

export default function SpeakersListPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-synelixis-blue/90 text-3xl font-bold text-center">Meet our Speakers</h1>
        {/* <p className="text-synelixis-blue/50 text-lg text-center ">
          Stay tuned for more speaker announcements!
        </p> */}
      </section>

      <EventGrid hosts={SPEAKERS} type={'speaker'} />
    </div>
  );
}
