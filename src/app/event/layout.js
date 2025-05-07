import EventFilterNav from '@components/EventFilterNav'; // Adjust path if needed

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
