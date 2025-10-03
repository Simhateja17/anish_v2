import ReleaseCard from "./ReleaseCard";

export default function UpcomingReleases() {
  const releases = [
    {
      collection: "MekaVerse Collection",
      date: "March 12, 2022",
      time: "11:00 AM EST",
      price: "3 SOL",
      image: "/mekaverse-background.png",
      avatar: "/mekaverse-avatar.png",
      badge: "MagicEden"
    },
    {
      collection: "Doodles Collection",
      date: "March 12, 2022",
      time: "11:00 AM EST",
      price: "3 SOL",
      image: "/doodles-background.png",
      avatar: "/doodles-avatar.png",
      badge: "MagicEden",
      size: "44 × 44"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-bold">Upcoming Releases</h2>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center bg-[#180930] rounded-lg text-[#A39DAC] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <span className="text-[#A39DAC] text-sm">Today</span>
          <button className="w-8 h-8 flex items-center justify-center bg-[#180930] rounded-lg text-[#A39DAC] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar with SOL/ETH badges */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A39DAC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search Release or Date"
            className="w-full bg-[#180930] text-white placeholder-[#A39DAC] pl-11 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex-1 sm:flex-none px-4 py-2.5 bg-[#180930] text-white text-sm font-medium rounded-lg hover:bg-[#22133A] transition-colors">
            SOL
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2.5 bg-[#180930] text-[#A39DAC] text-sm font-medium rounded-lg hover:text-white transition-colors">
            ETH
          </button>
        </div>
      </div>

      {/* Release Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {releases.map((release, index) => (
          <ReleaseCard key={index} {...release} />
        ))}
      </div>
    </div>
  );
}
