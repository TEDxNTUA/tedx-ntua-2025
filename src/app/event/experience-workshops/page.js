import EventGrid from '@components/Event/EventGrid';
import {EXPERIENCE_WORKSHOPS} from '@data';

export const metadata = {
  title: 'Experience Workshops | Synelixis',
  description: "The experience workshops of TEDxNTUA's 2025 event with theme Synelixis."
};

export default function ExperienceWorkshopsListPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-synelixis-blue/90 text-3xl font-bold text-center">
          Explore our Experience Workshops
        </h1>
        {/* <p className="text-synelixis-blue/50 text-lg text-center ">
          Stay tuned for more experience workshop announcements!
        </p> */}
      </section>

      <EventGrid hosts={EXPERIENCE_WORKSHOPS} type={'experience-workshop'} />
    </div>
  );
}
