const StayTunedPage = ({title, message = 'Details coming soon. Stay tuned for announcements!'}) => {
  return (
    <div className="container mx-auto flex flex-col items-center h-[90vh]">
      <h1 className="text-synelixis-blue text-3xl font-bold text-center">{title}</h1>

      <p className="text-lg text-center text-synelixis-blue/50 mt-4 max-w-md">{message}</p>
    </div>
  );
};

export default StayTunedPage;
