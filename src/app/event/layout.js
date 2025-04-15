import EventFilterNav from '@components/EventFilterNav'; // Adjust path if needed

export default function EventLayout({children}) {
  return (
    <div>
      <EventFilterNav />
      <main>{children}</main>
    </div>
  );
}
