import AboutGrid from '@components/about/AboutGrid';
import {ABOUTLIST} from '@data';

function TeamPage() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden overflow-y-visible flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('./background.jpg')`
      }}
    >
      <div className="lg:w-[90%] w-[80%] max-w-[2080px] mx-auto pt-20">
        <AboutGrid aboutlist={ABOUTLIST} />
      </div>
    </div>
  );
}

export default TeamPage;
