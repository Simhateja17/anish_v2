import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#03001B] p-0 md:p-4 lg:p-8">
      <div className="w-full h-screen md:h-[780px] lg:w-[1320px] lg:h-[780px] bg-[#03001B] md:rounded-lg flex flex-col lg:flex-row overflow-hidden mx-auto">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
