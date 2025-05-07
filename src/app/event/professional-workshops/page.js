import EventGrid from '@components/Event/EventGrid';
import {PROFESSIONAL_WORKSHOPS} from '@data';

export const metadata = {
  title: 'Professional Workshops | Synelixis',
  description: "The professional workshops of TEDxNTUA's 2025 event with theme Synelixis."
};

export default function ExperienceWorkshopsListPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-synelixis-blue/90 text-3xl font-bold text-center py-4">
          Explore our Professional Workshops
        </h1>
        {/* <p className="text-synelixis-blue/50 text-lg text-center ">
          Stay tuned for more experience workshop announcements!
        </p> */}
      </section>

      <EventGrid hosts={PROFESSIONAL_WORKSHOPS} type={'professional-workshop'} />
    </div>
  );
}
