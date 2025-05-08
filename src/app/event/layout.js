import EventFilterNav from '@src/components/Event/EventFilterNav';

export default function EventLayout({children}) {
  return (
    <>
      <div className="hidden lg:block">
        <EventFilterNav />
      </div>
      <main>{children}</main>
    </>
  );
}
