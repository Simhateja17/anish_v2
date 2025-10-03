import Image from "next/image";

export default function GasTracker() {
  return (
    <div className="bg-[#22133A] rounded-b-lg p-4 space-y-3">
      {/* Title */}
      <div className="flex items-center gap-2 text-white text-sm font-semibold">
        <div className="w-5 h-5 rounded overflow-hidden">
          <Image
            src="/fuel_tank.png"
            alt="Fuel tank icon"
            width={20}
            height={20}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <span>Gas Tracker</span>
      </div>

      {/* Gas Prices */}
      <div className="flex gap-2">
        {/* Rapid Price */}
        <div className="flex-1 bg-[#180930] rounded-lg p-3">
          <div className="text-[#A39DAC] text-xs mb-1">Rapid Price</div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#D899F8] to-[#7E61E7] font-bold text-lg">
            2341.1
          </div>
          <div className="text-[#A39DAC] text-xs">GWEI</div>
        </div>

        {/* Base Fee */}
        <div className="flex-1 bg-[#180930] rounded-lg p-3">
          <div className="text-[#A39DAC] text-xs mb-1">Base Fee</div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#D899F8] to-[#7E61E7] font-bold text-lg">
            2341.1
          </div>
          <div className="text-[#A39DAC] text-xs">GWEI</div>
        </div>
      </div>

      {/* Last Update */}
      <div className="flex items-center gap-2 text-xs text-[#A39DAC]">
        <div className="w-2 h-2 bg-[#36CD7B] rounded-full"></div>
        <span>Last Block: 12 seconds ago</span>
      </div>
    </div>
  );
}
