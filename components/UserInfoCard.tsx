import Image from "next/image";

export default function UserInfoCard() {
  return (
    <div className="bg-[#180930] rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/user_icon.png"
              alt="Boss-1 profile"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <div className="text-white font-semibold">
              <span className="text-[#A264FF]">Boss-1</span>#8087
            </div>
            <div className="flex items-center gap-1 text-xs text-[#A39DAC]">
              <span className="text-[#36CD7B]">✓</span>
              <span>NFT verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
        <div>
          <div className="text-[#A39DAC] text-xs">User Since</div>
          <div className="text-white text-sm font-semibold">Jan 2024</div>
        </div>
        <div>
          <div className="text-[#A39DAC] text-xs">Membership</div>
          <div className="text-white text-sm font-semibold">Monthly</div>
        </div>
      </div>
    </div>
  );
}
