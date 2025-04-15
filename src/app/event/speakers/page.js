import EventGrid from '@components/Event/EventGrid';
import {SPEAKERS} from '@data';

async function fetchSpeakers() {
  return SPEAKERS;
}

export default async function SpeakersListPage() {
  const speakers = await fetchSpeakers();

  return (
    <div>
      <h1 className="text-synelixis-blue text-3xl font-bold text-center my-8">Meet Our Speakers</h1>

      <EventGrid hosts={speakers} type={'speaker'} />
    </div>
  );
}
