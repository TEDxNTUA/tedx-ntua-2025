import AboutGrid from '@components/about/AboutGrid';
import {ABOUTLIST} from '@data';

export const metadata = {
  title: 'Meet The Team | Synelixis',
  description: "The team of TEDxNTUA's 2025 event with theme Synelixis."
};

function TeamPage() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden overflow-y-visible flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/background.jpg')`
      }}
    >
      <div className="lg:w-[90%] w-[80%] max-w-[2080px] mx-auto pt-20">
        <ul className="mx-auto flex flex-col gap-16 pb-12">
          {ABOUTLIST.map(team => (
            <li key={team.teamSlug}>
              <AboutGrid teamSlug={team.teamSlug} members={team.members} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamPage;
