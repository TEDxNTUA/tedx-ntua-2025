import EventGrid from '@components/Event/EventGrid';
import {PERFORMANCES} from '@data';

export const metadata = {
  title: 'Performances | Synelixis',
  description: "The live performances TEDxNTUA's 2025 event with theme Synelixis."
};

export default function PerformancesListPgae() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-synelixis-blue/90 text-3xl font-bold text-center py-4">
          Live Performances
        </h1>
        {/* <p className="text-synelixis-blue/50 text-lg text-center ">
          Stay tuned for more performance announcements!
        </p> */}
      </section>

      <EventGrid hosts={PERFORMANCES} type={'performance'} />
    </div>
  );
}
