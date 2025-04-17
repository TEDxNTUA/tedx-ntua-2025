import PartnersPageComponent from '@components/Partners/PartnerPage';
import {TextRevealByWord} from '@src/components/Partners/TextReveal';
import {HandWrittenTitle} from '@src/components/Partners/HandWritting';

export const metadata = {
  title: 'Partners | Synelixis',
  description: "The partners & supporters of this year's event who make it all possible."
};

function PartnersPage() {
  return (
    <main className="bg-synelixis-blue">
      <TextRevealByWord text="Each and every one of you makes this event possibl." />
      <HandWrittenTitle text={'Thank you!'} />
      <PartnersPageComponent />
    </main>
  );
}

export default PartnersPage;
