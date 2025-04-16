import AboutGrid from '@components/about/AboutGrid';
import {ABOUTLIST} from '@data';
{
  /* This div includes the grid with the team members and their doodles */
}

function TeamPage() {
  return (
    <div className="max-w-[2080px] mx-auto flex flex-col lg:w-[90%] w-[80%] bg-synelixis-blue">
      <h2 className="text-synelixis-yellow text-[2.25rem] lg:text-[4.25rem] font-bold">
        Meet The Team <span className="text-synelixis-orange">2025</span>
      </h2>
      <AboutGrid aboutlist={ABOUTLIST} />
    </div>
  );
}

export default TeamPage;
