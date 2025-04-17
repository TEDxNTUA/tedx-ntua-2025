import EventCard from '@components/Event/EventCard';

export default function EventGrid({type, hosts}) {
  if (!hosts || hosts.length === 0) {
    return <p className="text-center text-gray-500">Stay Tuned. To be announced</p>;
  }

  let gridClasses =
    'grid justify-items-center items-start gap-y-10 gap-x-6 lg:gap-y-16 lg:gap-x-12 ';

  if (type === 'speaker') {
    gridClasses += 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4';
  } else {
    gridClasses += 'grid-cols-1 sm:grid-cols-2';
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      <ul className={gridClasses}>
        {hosts.map((host, index) => {
          return (
            <li key={index}>
              <EventCard host={host} type={type} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
