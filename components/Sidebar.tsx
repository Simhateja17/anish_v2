import SidebarMenu from "./SidebarMenu";
import GasTracker from "./GasTracker";
import SidebarFooter from "./SidebarFooter";
import IconBar from "./IconBar";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-full lg:w-[260px] h-auto lg:h-full bg-[#180930] flex flex-col">
      {/* Logo Section */}
      <div className="p-4 lg:p-6 pb-3 lg:pb-4">
        <div className="flex items-center">
          {/* SWIFT Logo */}
          <Image 
            src="/swift-logo-new.png" 
            alt="SWIFT Logo" 
            width={100} 
            height={33}
            className="flex-shrink-0 object-contain w-[100px] lg:w-[120px]"
            priority
          />
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 px-4">
        <SidebarMenu />
      </div>

      {/* Icon Bar */}
      <IconBar />

      {/* Gas Tracker */}
      <div className="pb-4">
        <GasTracker />
      </div>

      {/* User Profile Footer */}
      <SidebarFooter />
    </div>
  );
}
