import EventGrid from '@components/Event/EventGrid';
import {PERFORMANCES} from '@data';

async function fetchPerformances() {
  return PERFORMANCES;
}

export default async function PerformancesListPgae() {
  const performances = await fetchPerformances();

  return (
    <div>
      <h1 className="text-synelixis-blue/90 text-3xl font-bold text-center my-8">
        Live Performances
      </h1>

      <EventGrid hosts={performances} type={'performance'} />
    </div>
  );
}
