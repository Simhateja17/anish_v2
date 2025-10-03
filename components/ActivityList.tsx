import ActivityItem from "./ActivityItem";

export default function ActivityList() {
  const activities = [
    {
      status: 'success' as const,
      itemName: 'Mekaverse #1234',
      collection: 'Mekaverse',
      amount: '3.2',
      currency: 'SOL',
      date: 'Oct 3',
      time: '2:45 PM'
    },
    {
      status: 'failed' as const,
      itemName: 'Doodles #5678',
      collection: 'Doodles',
      amount: '2.5',
      currency: 'SOL',
      date: 'Oct 3',
      time: '1:30 PM'
    },
    {
      status: 'listed' as const,
      itemName: 'Azuki #9012',
      collection: 'Azuki',
      amount: '4.0',
      currency: 'ETH',
      date: 'Oct 3',
      time: '12:15 PM'
    },
    {
      status: 'success' as const,
      itemName: 'BAYC #3456',
      collection: 'BAYC',
      amount: '15.5',
      currency: 'ETH',
      date: 'Oct 2',
      time: '11:20 PM'
    },
    {
      status: 'listed' as const,
      itemName: 'CloneX #7890',
      collection: 'CloneX',
      amount: '2.8',
      currency: 'SOL',
      date: 'Oct 2',
      time: '6:45 PM'
    }
  ];

  return (
    <div className="space-y-3">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Activity or Date"
          className="w-full bg-[#180930] text-white placeholder-[#A39DAC] px-4 py-2.5 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A39DAC] hover:text-white">
          🔍
        </button>
      </div>

      {/* Activity Items List */}
      <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 scrollbar-hide">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}
