import Image from "next/image";
import UserInfoCard from "./UserInfoCard";
import RenewalCard from "./RenewalCard";
import TransactionStats from "./TransactionStats";
import BalanceStats from "./BalanceStats";
import UpcomingReleases from "./UpcomingReleases";
import ActivityList from "./ActivityList";

export default function MainContent() {
  return (
    <div className="flex-1 h-full flex flex-col lg:flex-row">
      {/* Left Section - Stats and Releases */}
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        {/* Header */}
        <div className="mb-4 lg:mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-white text-xl lg:text-2xl font-bold mb-1">
              Welcome back to SWIFT !
            </h1>
            <p className="text-[#A39DAC] text-xs lg:text-sm">
              Hey <span className="text-[#A264FF] font-semibold">Boss-1</span>! Your dashboard is looking great today.
            </p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden hidden sm:block">
            <Image
              src="/user_icon.png"
              alt="Boss-1 avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
          {/* First Row */}
          <UserInfoCard />
          <RenewalCard />
          
          {/* Second Row */}
          <TransactionStats />
          <BalanceStats />
        </div>

        {/* Upcoming Releases */}
        <UpcomingReleases />
      </div>

      {/* Right Section - Activity List */}
      <div className="w-full lg:w-[320px] p-4 lg:p-6 border-t lg:border-t-0 lg:border-l border-white/10">
        {/* Activity Header */}
        <div className="mb-4">
          <h2 className="text-white text-base lg:text-lg font-bold mb-1">
            Recent Activity
          </h2>
          <p className="text-[#A39DAC] text-xs">
            Check your latest activities
          </p>
        </div>

        {/* Activity List */}
        <ActivityList />
      </div>
    </div>
  );
}
