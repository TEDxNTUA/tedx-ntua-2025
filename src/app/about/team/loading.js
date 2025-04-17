export default function Loading() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{backgroundImage: `url('/background.jpg')`}}
    >
      <div className="text-white text-center space-y-4">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 className="text-xl font-semibold">Loading Team Members...</h2>
        <p className="text-sm text-gray-300">Please wait while we gather the team 🧑‍💻👩‍🚀👨‍🔬</p>
      </div>
    </div>
  );
}
