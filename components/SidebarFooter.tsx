import Image from "next/image";

export default function SidebarFooter() {
  return (
    <div className="bg-[#110229] p-4">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/user_icon.png"
              alt="Boss-1 profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name and Status */}
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold">
              <span className="text-[#A264FF]">Boss-1</span>#8087
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#36CD7B] rounded-full"></div>
              <span className="text-[#36CD7B] text-xs">Authenticated</span>
            </div>
          </div>
        </div>

        {/* Logout Icon */}
        <button className="text-[#A39DAC] hover:text-white transition-colors">
          <Image
            src="/EXIT.png"
            alt="Logout"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
            priority
          />
        </button>
      </div>

      {/* Version */}
      <div className="text-[#A39DAC] text-xs mt-2">v2.0.0</div>
    </div>
  );
}
